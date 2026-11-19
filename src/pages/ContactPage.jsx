import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import EnquiryForm from '../components/contact/EnquiryForm'
import { siteConfig } from '../data/siteConfig'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiClock,
  HiOutlineChatBubbleLeftRight,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineDocumentText,
} from 'react-icons/hi2'

/**
 * Flagship Contact & Project Enquiry Page (`/contact`).
 * Features verified direct communication channels, static enquiry dispatch, and consultation FAQs.
 */
export default function ContactPage() {
  usePageMeta(
    'Contact & Project Enquiry | Architecture & Civil Practice',
    'Submit your architectural planning, construction, renovation, or engineering contracting requirements for technical review and quotation.',
    {
      ogImage: '/images/hero-construction.jpg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact & Project Enquiry',
        description:
          'Connect with our technical practice to discuss structural requirements, evaluate site feasibility, or review architectural blueprints.',
      },
    }
  )

  const hasPhone = Boolean(siteConfig.phone && siteConfig.phone.trim())
  const hasEmail = Boolean(siteConfig.email && siteConfig.email.trim())
  const hasWhatsApp = Boolean(siteConfig.whatsappNumber && siteConfig.whatsappNumber.trim())
  const hasAddress = Boolean(siteConfig.address?.street && siteConfig.address.street.trim())
  const hasHours = Boolean(siteConfig.workingHours && siteConfig.workingHours.trim())
  const hasAnyContact = hasPhone || hasEmail || hasWhatsApp || hasAddress || hasHours

  const consultationFaqs = [
    {
      q: 'What information should I prepare before an initial consultation?',
      a: 'Having your plot dimensions, municipal boundary sketches, rough square footage requirements, and any preferred architectural references will help our technical team provide an accurate preliminary assessment.',
    },
    {
      q: 'Do you conduct physical site inspections?',
      a: 'Yes. Once preliminary project feasibility and spatial requirements are established, our site engineers conduct on-site soil and topographical evaluations prior to finalizing foundation specifications.',
    },
    {
      q: 'How are initial project quotations structured?',
      a: 'Quotations are organized into transparent trade schedules covering structural excavation, masonry, material grades, MEP rough-ins, and finishing joinery with clearly defined milestone payments.',
    },
  ]

  return (
    <div className="flex-1 flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL CONTACT PAGE HERO
      ───────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Let's Discuss Your Next Project"
        description="Connect with our technical practice to discuss structural requirements, evaluate site feasibility, or review architectural blueprints."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* ─────────────────────────────────────────────────────────────
          2. CONTACT DETAILS & ENQUIRY WORKFLOW SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-ivory border-b border-silver overflow-hidden">
        {/* Architectural Background Artwork: Design D (Abstract Geometric Composition) */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.45] mix-blend-multiply"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-geometric.webp)' }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Direct Channels & Practice Overview (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-7 sm:p-9 border border-silver shadow-xs rounded-lg">
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal font-mono block mb-2">
                  Practice Channels
                </span>
                <h2 className="text-2xl font-extrabold text-charcoal tracking-tight font-condensed">
                  Direct Communication
                </h2>
                <p className="mt-2 text-sm text-charcoal/70 leading-relaxed font-light">
                  Our engineering and drafting teams review every incoming inquiry with thorough technical rigor.
                </p>

                {/* Verified Contact Details - Only rendered if values exist in siteConfig */}
                {hasAnyContact ? (
                  <div className="mt-8 space-y-6 pt-6 border-t border-silver/50">
                    {hasAddress && (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-ivory border border-silver text-coral shrink-0 rounded-md">
                          <HiMapPin className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">
                            Office Location
                          </span>
                          <span className="text-sm text-charcoal/70 mt-1 block">
                            {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}
                          </span>
                        </div>
                      </div>
                    )}

                    {hasPhone && (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-ivory border border-silver text-coral shrink-0 rounded-md">
                          <HiPhone className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">
                            Telephone
                          </span>
                          {siteConfig.phoneRaw ? (
                            <a
                              href={`tel:${siteConfig.phoneRaw}`}
                              className="text-sm text-charcoal hover:text-coral transition-colors mt-1 block font-semibold"
                            >
                              {siteConfig.phone}
                            </a>
                          ) : (
                            <span className="text-sm text-charcoal/70 mt-1 block">
                              {siteConfig.phone}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {hasWhatsApp && (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-ivory border border-silver text-coral shrink-0 rounded-md">
                          <HiOutlineChatBubbleLeftRight className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">
                            WhatsApp Messaging
                          </span>
                          <a
                            href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-coral hover:text-coral-dark hover:underline mt-1 block font-semibold"
                          >
                            Open Direct WhatsApp Chat
                          </a>
                        </div>
                      </div>
                    )}

                    {hasEmail && (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-ivory border border-silver text-coral shrink-0 rounded-md">
                          <HiEnvelope className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">
                            Email Inquiries
                          </span>
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-sm text-charcoal hover:text-coral transition-colors mt-1 block font-semibold"
                          >
                            {siteConfig.email}
                          </a>
                        </div>
                      </div>
                    )}

                    {hasHours && (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-ivory border border-silver text-coral shrink-0 rounded-md">
                          <HiClock className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">
                            Consultation Hours
                          </span>
                          <span className="text-sm text-charcoal/70 mt-1 block">
                            {siteConfig.workingHours}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mt-6 p-4 bg-ivory border border-silver text-xs text-charcoal/70 leading-relaxed rounded-md">
                    <p className="font-semibold text-charcoal mb-1">
                      Office Parameters Update
                    </p>
                    <p>
                      Official telephone lines and dedicated regional office coordinates are currently being verified for this practice. Please use the adjacent project enquiry form to establish direct correspondence.
                    </p>
                  </div>
                )}
              </div>

              {/* Consultation Standards Card */}
              <div className="bg-charcoal text-white p-7 sm:p-8 border-t-4 border-t-coral shadow-sm rounded-lg">
                <span className="text-xs font-bold uppercase tracking-widest text-white font-mono block mb-2">
                  Commitment to Quality
                </span>
                <h3 className="text-lg font-bold text-white mb-4">
                  Consultation Standards
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <HiOutlineDocumentText className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Thorough spatial analysis and plot feasibility evaluation before cost estimation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiOutlineShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Uncompromised structural engineering standards and verified material grades.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiOutlineClock className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Predictable execution schedules and milestone-based transparent reporting.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Reusable Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CONSULTATION FAQS SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-silver">
        <Container>
          <div className="max-w-3xl mb-12">
            <SectionHeading
              kicker="CONSULTATION PROCESS"
              title="Common Inquiries About Project Engagements"
              subtitle="Practical answers regarding blueprint reviews, site assessments, and commercial contracting."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-ivory border border-silver flex flex-col justify-between rounded-lg">
                <div>
                  <h4 className="text-base font-bold text-charcoal mb-3">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
