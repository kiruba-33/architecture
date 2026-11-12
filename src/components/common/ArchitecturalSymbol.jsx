import { Link } from 'react-router-dom'

/**
 * Minimal, neutral architectural symbol.
 * Completely abstract geometric framing mark without any letters, abbreviations, or text.
 * Represents structural framing, drafting precision, and spatial geometry.
 *
 * @param {{ variant?: 'light' | 'dark', className?: string }} props
 */
export default function ArchitecturalSymbol({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light'

  return (
    <Link
      to="/"
      className={`inline-flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy p-1.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Home"
    >
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
        {/* Abstract geometric architectural framing symbol */}
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          {/* Outer structural framing boundary */}
          <rect
            x="3"
            y="3"
            width="30"
            height="30"
            rx="2"
            stroke={isLight ? '#FFFFFF' : '#29252A'}
            strokeWidth="2.2"
            className="transition-colors duration-200"
          />

          {/* Internal architectural elevation / structural grid lines */}
          <path
            d="M3 15H33"
            stroke={isLight ? 'rgba(255, 255, 255, 0.45)' : 'rgba(41, 37, 42, 0.35)'}
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <path
            d="M15 15V33"
            stroke={isLight ? 'rgba(255, 255, 255, 0.45)' : 'rgba(41, 37, 42, 0.35)'}
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />

          {/* Solid structural column accent - Deep Burgundy */}
          <path
            d="M9 9H27V15H9V9Z"
            fill={isLight ? '#FFFFFF' : '#542638'}
            className="transition-colors duration-200"
          />

          {/* Precision drafting focal point - Muted Wine */}
          <circle cx="27" cy="27" r="3" fill="#875467" />
        </svg>
      </div>
    </Link>
  )
}
