import { useState } from 'react'
import { siteConfig } from '../../data/siteConfig'
import { services } from '../../data/services'
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineEnvelope,
  HiOutlineInformationCircle,
  HiExclamationCircle,
} from 'react-icons/hi2'

/**
 * Reusable, fully static enquiry form with client-side validation.
 * Supports direct WhatsApp or Email dispatch without fake submission messages.
 */
export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: services[0]?.title || 'Construction',
    location: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [dispatchNotice, setDispatchNotice] = useState(null)

  const hasWhatsApp = Boolean(
    siteConfig.whatsappNumber && siteConfig.whatsappNumber.trim()
  )
  const hasEmail = Boolean(siteConfig.email && siteConfig.email.trim())
  const hasAnyChannel = hasWhatsApp || hasEmail

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for the edited field
    if (errors[name] || errors.contactMethod) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        if (name === 'phone' || name === 'email') {
          delete next.contactMethod
        }
        return next
      })
    }
  }

  const validate = () => {
    const newErrors = {}

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid name (at least 2 characters).'
    }

    // Contact method validation: at least one of phone or email
    const hasPhoneInput = Boolean(formData.phone.trim())
    const hasEmailInput = Boolean(formData.email.trim())

    if (!hasPhoneInput && !hasEmailInput) {
      newErrors.contactMethod =
        'Please provide at least one contact method (phone number or email address).'
    }

    // Email format validation (if provided)
    if (hasEmailInput) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).'
      }
    }

    // Phone format validation (if provided)
    if (hasPhoneInput) {
      const digitsOnly = formData.phone.replace(/[^0-9]/g, '')
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        newErrors.phone = 'Please enter a valid phone number (7 to 15 digits).'
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project requirements.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a few more details (minimum 10 characters).'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleWhatsAppDispatch = (e) => {
    e.preventDefault()
    if (!validate()) return

    const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '')
    const formattedMessage = [
      'PROJECT ENQUIRY',
      '────────────────────────',
      `*Name:* ${formData.fullName.trim()}`,
      `*Service Required:* ${formData.service}`,
      `*Phone:* ${formData.phone.trim() || 'Not supplied'}`,
      `*Email:* ${formData.email.trim() || 'Not supplied'}`,
      `*Location:* ${formData.location.trim() || 'Not specified'}`,
      '────────────────────────',
      '*Project Scope / Requirements:*',
      formData.message.trim(),
    ].join('\n')

    const encoded = encodeURIComponent(formattedMessage)
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`

    setDispatchNotice({
      channel: 'WhatsApp',
      instruction:
        'Your enquiry has been pre-formatted for WhatsApp. In the opened tab, review your details and press "Send" in WhatsApp to transmit your message.',
    })

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleEmailDispatch = (e) => {
    e.preventDefault()
    if (!validate()) return

    const subject = `Project Enquiry: ${formData.service} - ${formData.fullName.trim()}`
    const body = [
      `Name: ${formData.fullName.trim()}`,
      `Service Required: ${formData.service}`,
      `Phone: ${formData.phone.trim() || 'Not supplied'}`,
      `Email: ${formData.email.trim() || 'Not supplied'}`,
      `Project Location: ${formData.location.trim() || 'Not specified'}`,
      '',
      'Project Requirements / Scope:',
      formData.message.trim(),
    ].join('\n')

    const mailtoUrl = `mailto:${siteConfig.email.trim()}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setDispatchNotice({
      channel: 'Email Client',
      instruction:
        'Your default email application is opening with your pre-formatted enquiry. Please review the details and press "Send" in your email client to transmit the enquiry.',
    })

    window.location.href = mailtoUrl
  }

  return (
    <div className="bg-white border border-silver p-6 sm:p-10 shadow-xs rounded-lg">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-charcoal font-mono">
          Direct Project Communication
        </span>
        <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight font-condensed">
          Project Enquiry Form
        </h2>
        <p className="mt-2 text-sm text-charcoal/70 leading-relaxed font-light">
          Provide your project requirements below. As a static corporate website, you can dispatch your pre-formatted enquiry directly via your verified messaging or email application.
        </p>
      </div>

      {/* Global Contact Method Warning */}
      {errors.contactMethod && (
        <div
          role="alert"
          className="mb-6 p-4 bg-red-50 border-l-4 border-l-red-600 text-xs sm:text-sm text-red-900 flex items-start gap-2.5 rounded-r-md"
        >
          <HiExclamationCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{errors.contactMethod}</span>
        </div>
      )}

      {/* Dispatch Notice - Explaining that the user must press Send in their app */}
      {dispatchNotice && (
        <div
          role="status"
          className="mb-6 p-4 bg-ivory border-l-4 border-l-coral text-xs sm:text-sm text-charcoal flex items-start gap-2.5 rounded-r-md"
        >
          <HiOutlineInformationCircle className="w-5 h-5 text-coral shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-bold text-coral block mb-1">
              Opening {dispatchNotice.channel}
            </span>
            <p className="text-charcoal/70 leading-relaxed">{dispatchNotice.instruction}</p>
          </div>
        </div>
      )}

      <form noValidate className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Anand Kumar"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={`w-full px-4 py-3 text-sm bg-white border rounded ${
              errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-silver focus:border-coral'
            } text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-coral transition-colors`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <HiExclamationCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Contact row: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Phone Number <span className="text-charcoal/50 font-normal lowercase">(phone or email required)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={`w-full px-4 py-3 text-sm bg-white border rounded ${
                errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-silver focus:border-coral'
              } text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-coral transition-colors`}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <HiExclamationCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Email Address <span className="text-charcoal/50 font-normal lowercase">(phone or email required)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. anand@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full px-4 py-3 text-sm bg-white border rounded ${
                errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-silver focus:border-coral'
              } text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-coral transition-colors`}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <HiExclamationCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Service Required & Project Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Service Required */}
          <div>
            <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Service Discipline <span className="text-red-600">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-white border border-silver text-charcoal rounded focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral transition-colors"
            >
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Project Location */}
          <div>
            <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              Project Location <span className="text-charcoal/50 font-normal lowercase">(optional)</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. City, District or State"
              className="w-full px-4 py-3 text-sm bg-white border border-silver text-charcoal rounded placeholder-charcoal/40 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral transition-colors"
            />
          </div>
        </div>

        {/* Project Requirements / Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Project Requirements / Scope <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please describe your plot size, estimated square footage, timeline, or specific architectural and civil requirements..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`w-full px-4 py-3 text-sm bg-white border rounded ${
              errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-silver focus:border-coral'
            } text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-coral transition-colors`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <HiExclamationCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Dispatch Action Area */}
        <div className="pt-4 border-t border-silver/50">
          <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60 block mb-3">
            Select Dispatch Method:
          </span>

          {hasAnyChannel ? (
            <div className="flex flex-col sm:flex-row gap-3.5">
              {hasWhatsApp && (
                <button
                  type="button"
                  onClick={handleWhatsAppDispatch}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-coral text-white text-sm font-semibold tracking-wide hover:bg-coral-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-coral shadow-xs transition-all active:translate-y-px rounded"
                >
                  <HiOutlineChatBubbleLeftRight className="w-5 h-5 text-ivory shrink-0" aria-hidden="true" />
                  <span>Send via WhatsApp</span>
                </button>
              )}

              {hasEmail && (
                <button
                  type="button"
                  onClick={handleEmailDispatch}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-charcoal text-white text-sm font-semibold tracking-wide hover:bg-charcoal/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal shadow-xs transition-all active:translate-y-px rounded"
                >
                  <HiOutlineEnvelope className="w-5 h-5 text-ivory shrink-0" aria-hidden="true" />
                  <span>Send via Email Client</span>
                </button>
              )}
            </div>
          ) : (
            <div className="p-4 bg-ivory border border-silver text-xs text-charcoal/70 leading-relaxed rounded-md">
              <p className="font-semibold text-charcoal mb-1">
                Direct Dispatch Notice
              </p>
              <p>
                Direct digital messaging endpoints are currently being established for this practice. Once verified WhatsApp and email parameters are populated, direct one-click transmission will be enabled.
              </p>
            </div>
          )}

          <p className="mt-3 text-[11px] text-charcoal/50 leading-normal">
            Note: Clicking dispatch opens your selected application with your details neatly formatted. You retain full control to review and send the message manually.
          </p>
        </div>
      </form>
    </div>
  )
}
