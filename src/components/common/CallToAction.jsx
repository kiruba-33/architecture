import Container from './Container'
import Button from './Button'
import { HiArrowRight } from 'react-icons/hi2'

/**
 * Reusable high-impact Call To Action banner.
 * Used across the site to guide visitors to contact/enquiry without being pushy.
 */
export default function CallToAction({
  kicker = 'READY TO BUILD',
  title = 'Discuss Your Next Architectural or Construction Project',
  subtitle = 'Connect with our team to review your requirements, layout blueprints, or site execution schedule.',
  primaryCta = { label: 'Submit Project Enquiry', to: '/contact' },
  secondaryCta = { label: 'Explore Services', to: '/services' },
  theme = 'burgundy',
  className = '',
}) {
  const isBurgundy = theme === 'burgundy' || theme === 'green'

  return (
    <section
      className={`relative py-16 sm:py-20 overflow-hidden ${
        isBurgundy ? 'bg-burgundy text-white' : 'bg-charcoal text-white'
      } ${className}`}
    >
      {/* Subtle decorative architectural framing */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            {kicker && (
              <div className="inline-flex items-center gap-2 mb-3 text-eyebrow font-condensed font-extrabold uppercase tracking-[0.18em] text-white">
                <span className="w-6 h-0.5 bg-white inline-block shrink-0" />
                <span>{kicker}</span>
              </div>
            )}
            <h2 className="text-section-h2 font-condensed font-bold tracking-tight text-white leading-[1.08]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-ivory/85 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-start lg:justify-end">
            {primaryCta && (
              <Button
                to={primaryCta.to}
                href={primaryCta.href}
                variant="white"
                size="lg"
                icon={HiArrowRight}
                className="w-full sm:w-auto text-center font-semibold"
              >
                {primaryCta.label}
              </Button>
            )}

            {secondaryCta && (
              <Button
                to={secondaryCta.to}
                href={secondaryCta.href}
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto text-center"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
