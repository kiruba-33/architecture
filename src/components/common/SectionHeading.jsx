import SectionEyebrow from './SectionEyebrow'

/**
 * Standardized Section Heading for editorial consistency.
 * @param {{
 *   kicker?: string,
 *   title: string,
 *   subtitle?: string,
 *   align?: 'left' | 'center',
 *   theme?: 'dark' | 'light',
 *   hasExtendingLine?: boolean,
 *   className?: string
 * }} props
 */
export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  hasExtendingLine = false,
  className = '',
}) {
  const isCenter = align === 'center'
  const isDark = theme === 'dark'

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {kicker && (
        <div className="mb-3.5">
          {hasExtendingLine ? (
            <div className="relative inline-flex items-center ml-10 lg:ml-0">
              {/* Exact PCL-style 1px horizontal line beginning at extreme left edge of viewport with ~25px gap */}
              <div
                className="absolute right-full mr-[25px] top-1/2 -translate-y-1/2 w-[100vw] h-px bg-coral pointer-events-none"
                style={{ height: '1px' }}
                aria-hidden="true"
              />
              <span className={`text-eyebrow font-condensed font-extrabold uppercase tracking-[0.2em] ${isDark ? 'text-white' : 'text-charcoal'}`}>
                {kicker}
              </span>
            </div>
          ) : (
            <SectionEyebrow
              label={kicker}
              theme={theme}
              hasLine={true}
            />
          )}
        </div>
      )}
      <h2
        className={`text-section-h2 font-condensed font-bold tracking-tight leading-[1.08] ${
          isDark ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-ivory/80' : 'text-charcoal/75'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
