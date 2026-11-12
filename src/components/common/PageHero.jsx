import Container from './Container'
import Breadcrumbs from './Breadcrumbs'

/**
 * Editorial Page Hero component for interior pages (PCL-inspired design).
 *
 * Desktop layout:
 * - Clean white background with generous vertical whitespace
 * - Thin Deep Burgundy horizontal rule extending inward from the far-left edge of the viewport
 * - Clear horizontal gap between the horizontal rule and the uppercase eyebrow label
 * - Small uppercase eyebrow label in Deep Burgundy
 * - Large, bold, condensed editorial headline in Roboto Condensed
 * - Generous, clean editorial negative space
 *
 * @param {{
 *   title: string,
 *   eyebrow?: string,
 *   kicker?: string,
 *   subtitle?: string,
 *   description?: string,
 *   breadcrumbs?: Array<{ label: string, path?: string }>,
 *   variant?: 'default' | 'simple',
 *   showDecoration?: boolean,
 *   className?: string
 * }} props
 */
export default function PageHero({
  title,
  eyebrow,
  kicker,
  subtitle,
  description,
  breadcrumbs = [],
  variant = 'default',
  className = '',
}) {
  const activeEyebrow = eyebrow || kicker
  const activeDescription = description || subtitle
  const isSimple = variant === 'simple'

  return (
    <section
      className={`relative bg-white text-charcoal ${
        isSimple
          ? 'py-20 sm:py-24'
          : 'pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-18 lg:pb-22'
      } border-b border-silver overflow-hidden ${className}`}
    >
      {/* Subtle architectural background drafting grid (light) */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #29252A 1px, transparent 1px), linear-gradient(to bottom, #29252A 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation Trail */}
        {breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} theme="light" className="mb-6 sm:mb-8" />
        )}

        {/* Editorial Layout */}
        <div className="max-w-4xl">
          {/* Eyebrow Label with PCL-style Left-extending Line */}
          {activeEyebrow && (
            <div className="relative inline-flex items-center ml-10 sm:ml-0 mb-4 sm:mb-5">
              {/* Thin horizontal line extending inward from the far-left edge of the viewport */}
              <div
                className="absolute right-full mr-4 sm:mr-5 top-1/2 -translate-y-1/2 w-[100vw] h-[2px] bg-burgundy pointer-events-none"
                aria-hidden="true"
              />
              <span className="text-eyebrow font-condensed font-extrabold uppercase tracking-[0.2em] text-burgundy">
                {activeEyebrow}
              </span>
            </div>
          )}

          {/* Main Condensed Editorial Headline */}
          <h1 className="text-hero-h1 font-condensed font-black text-charcoal tracking-tight leading-[1.0] sm:leading-[1.02]">
            {title}
          </h1>

          {/* Optional Narrative Description */}
          {activeDescription && (
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-normal max-w-2xl">
              {activeDescription}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
