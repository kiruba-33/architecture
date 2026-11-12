import { Link } from 'react-router-dom'
import Container from '../common/Container'
import ArchitecturalSymbol from '../common/ArchitecturalSymbol'
import { navigation } from '../../data/navigation'
import { siteConfig } from '../../data/siteConfig'
import { HiMapPin, HiPhone, HiEnvelope, HiClock, HiArrowRight } from 'react-icons/hi2'

const CURRENT_YEAR = new Date().getFullYear()

/**
 * Enterprise Corporate Footer.
 * Gracefully renders only verified contact details from siteConfig.
 */
export default function Footer() {
  const companyTitle = siteConfig.companyName || 'Corporate Architecture & General Contracting'

  const hasPhone = Boolean(siteConfig.phone && siteConfig.phone.trim())
  const hasEmail = Boolean(siteConfig.email && siteConfig.email.trim())
  const hasAddress = Boolean(siteConfig.address?.street && siteConfig.address.street.trim())
  const hasHours = Boolean(siteConfig.workingHours && siteConfig.workingHours.trim())
  const hasAnyContact = hasPhone || hasEmail || hasAddress || hasHours

  return (
    <footer className="bg-charcoal text-white border-t border-charcoal-dark">
      {/* Main footer content */}
      <div className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Col 1: Brand & Overview (4 cols) */}
            <div className="lg:col-span-4">
              <ArchitecturalSymbol variant="light" className="mb-4" />
              <p className="mt-4 text-sm text-ivory/80 leading-relaxed max-w-sm">
                Comprehensive architectural planning, structural civil construction, interior execution, and engineering contracting services delivering lasting structural integrity.
              </p>

              <div className="mt-6 pt-6 border-t border-charcoal-dark text-xs text-mauve">
                <span className="font-semibold text-ivory block mb-1">Practice Scope</span>
                <span>{siteConfig.category}</span>
              </div>
            </div>

            {/* Col 2: Services (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-mauve mb-4">
                Core Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                {navigation.footerServices.map((service) => (
                  <li key={service.path}>
                    <Link
                      to={service.path}
                      className="text-ivory/80 hover:text-wine transition-colors inline-block"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quick Navigation (2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-mauve mb-4">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-sm">
                {navigation.mainNav.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-ivory/80 hover:text-wine transition-colors inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Corporate Contact Details (3 cols) - Rendered only when verified */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-mauve mb-4">
                Enquiries & Contact
              </h3>

              {hasAnyContact ? (
                <ul className="space-y-3.5 text-sm text-ivory/80">
                  {hasAddress && (
                    <li className="flex items-start gap-2.5">
                      <HiMapPin className="w-5 h-5 text-mauve shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-ivory/80">
                        {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}
                      </span>
                    </li>
                  )}

                  {hasPhone && (
                    <li className="flex items-center gap-2.5">
                      <HiPhone className="w-5 h-5 text-mauve shrink-0" aria-hidden="true" />
                      {siteConfig.phoneRaw ? (
                        <a
                          href={`tel:${siteConfig.phoneRaw}`}
                          className="hover:text-wine transition-colors"
                        >
                          {siteConfig.phone}
                        </a>
                      ) : (
                        <span className="text-ivory/80">{siteConfig.phone}</span>
                      )}
                    </li>
                  )}

                  {hasEmail && (
                    <li className="flex items-center gap-2.5">
                      <HiEnvelope className="w-5 h-5 text-mauve shrink-0" aria-hidden="true" />
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-wine transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </li>
                  )}

                  {hasHours && (
                    <li className="flex items-center gap-2.5">
                      <HiClock className="w-5 h-5 text-mauve shrink-0" aria-hidden="true" />
                      <span className="text-mauve">{siteConfig.workingHours}</span>
                    </li>
                  )}
                </ul>
              ) : (
                <div className="text-xs text-silver leading-relaxed bg-white/5 p-4 border border-white/10">
                  <p>
                    Direct communication channels are currently being configured for this practice.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-wine hover:text-white hover:underline font-semibold"
                  >
                    <span>Submit Project Enquiry</span>
                    <HiArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Sub-footer copyright */}
      <div className="py-6 border-t border-charcoal-dark bg-[#1A171B] text-xs text-mauve">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              &copy; {CURRENT_YEAR} {companyTitle}. All rights reserved.
            </p>
            <p className="text-mauve">
              Commercial Architecture &bull; Civil Engineering &bull; General Contracting
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
