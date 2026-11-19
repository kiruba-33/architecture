/**
 * Standardized Section Eyebrow component with decorative horizontal line.
 * Provides consistent editorial kicker styling across homepage hero, page heroes, and section headings.
 *
 * @param {{
 *   children?: React.ReactNode,
 *   label?: React.ReactNode,
 *   hasLine?: boolean,
 *   theme?: 'light' | 'dark',
 *   lineColor?: string,
 *   textColor?: string,
 *   className?: string
 * }} props
 */
export default function SectionEyebrow({
  children,
  label,
  hasLine = true,
  theme = 'light',
  lineColor,
  textColor,
  className = '',
}) {
  const content = label || children
  if (!content) return null

  const isDark = theme === 'dark'

  const resolvedTextColor = textColor || (isDark ? 'text-white' : 'text-charcoal')
  const resolvedLineColor = lineColor || (isDark ? 'bg-coral' : 'bg-coral')

  return (
    <div
      className={`inline-flex items-center gap-2.5 sm:gap-3 text-eyebrow font-condensed font-extrabold uppercase tracking-[0.2em] ${resolvedTextColor} ${className}`}
    >
      {hasLine && (
        <span
          className={`w-6 sm:w-8 h-[2px] inline-block shrink-0 ${resolvedLineColor}`}
          aria-hidden="true"
        />
      )}
      <span>{content}</span>
    </div>
  )
}
