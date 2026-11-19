import { NavLink } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import Button from '../common/Button'
import { HiArrowRight, HiOutlineUser } from 'react-icons/hi2'

/**
 * Desktop Navigation links and header action buttons.
 * Includes official navigation items, Client Login, and Product Enquiry.
 *
 * @param {{ isTransparent?: boolean }} props
 */
export default function DesktopNavigation({ isTransparent = false }) {
  return (
    <div className="hidden lg:flex items-center gap-3.5 xl:gap-8">
      <nav aria-label="Main Navigation" className="flex items-center gap-3 lg:gap-3.5 xl:gap-7">
        {navigation.mainNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => {
              const base =
                'text-xs lg:text-[13px] xl:text-sm font-semibold tracking-wide uppercase transition-colors duration-150 py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-coral'

              if (isTransparent) {
                return `${base} ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-white/85 hover:text-white'
                }`
              }

              return `${base} ${
                isActive
                  ? 'text-coral font-bold'
                  : 'text-charcoal hover:text-secondary'
              }`
            }}
          >
            {({ isActive }) => (
              <>
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isTransparent ? 'bg-white' : 'bg-coral'
                    }`}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Header Action Buttons: Client Login & Product Enquiry */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Client Login (Secondary Utility Action, UI-Only) */}
        <button
          type="button"
          aria-label="Client Login"
          className={`inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider px-3.5 py-2 gap-1.5 rounded transition-all duration-200 border focus:outline-none focus-visible:ring-2 active:translate-y-px select-none ${
            isTransparent
              ? 'border-white/60 text-white hover:bg-white hover:text-charcoal focus-visible:ring-white'
              : 'border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white focus-visible:ring-charcoal'
          }`}
          onClick={(e) => {
            e.preventDefault()
            // Client Login UI-only: ready for future authentication
          }}
        >
          <HiOutlineUser className="text-current text-sm shrink-0" aria-hidden="true" />
          <span>Client Login</span>
        </button>

        {/* Product Enquiry (Primary Conversion CTA) */}
        <Button
          to={navigation.cta.path}
          variant="primary"
          size="sm"
          icon={HiArrowRight}
        >
          {navigation.cta.label}
        </Button>
      </div>
    </div>
  )
}
