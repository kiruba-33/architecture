import { Link } from 'react-router-dom'
import { HiChevronRight, HiHome } from 'react-icons/hi2'

/**
 * Accessible Breadcrumb navigation trail for inner pages.
 * @param {{ items: Array<{ label: string, path?: string }>, className?: string, theme?: 'light' | 'dark' }} props
 */
export default function Breadcrumbs({ items = [], className = '', theme = 'light' }) {
  const isDark = theme === 'dark'

  return (
    <nav aria-label="Breadcrumb" className={`py-3 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className={`inline-flex items-center gap-1 transition-colors hover:text-burgundy ${
              isDark ? 'text-ivory/80' : 'text-charcoal/70'
            }`}
            title="Return to Home"
          >
            <HiHome className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.path || item.label} className="inline-flex items-center gap-1.5">
              <HiChevronRight
                className={`w-3 h-3 shrink-0 ${isDark ? 'text-mauve' : 'text-silver-dark'}`}
                aria-hidden="true"
              />
              {isLast || !item.path ? (
                <span
                  className={`font-semibold truncate max-w-[200px] sm:max-w-none ${
                    isDark ? 'text-white' : 'text-charcoal'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`transition-colors hover:text-burgundy truncate ${
                    isDark ? 'text-ivory/80' : 'text-charcoal/70'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
