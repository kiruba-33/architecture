import { Link } from 'react-router-dom'

/**
 * Official ESKY Architects Brand Logo component.
 * Displays the authentic Coral Orange architectural symbol, Arabic calligraphy, and ESKY wordmark.
 * Supports light (for dark surfaces/hero transparency) and dark (for white/ivory surfaces) variants.
 *
 * @param {{
 *   variant?: 'light' | 'dark',
 *   symbolOnly?: boolean,
 *   className?: string
 * }} props
 */
export default function ArchitecturalSymbol({
  className = '',
}) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-coral py-1 transition-opacity hover:opacity-95 ${className}`}
      aria-label="Home"
    >
      <img
        src="/images/logo/logo-transparent.png"
        alt="Official Logo"
        className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
        width="112"
        height="44"
      />
    </Link>
  )
}
