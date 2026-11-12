import { NavLink } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import Button from '../common/Button'
import { HiArrowRight } from 'react-icons/hi2'

/**
 * Desktop Navigation links and header CTA.
 * @param {{ isTransparent?: boolean }} props
 */
export default function DesktopNavigation({ isTransparent = false }) {
  return (
    <div className="hidden lg:flex items-center gap-8">
      <nav aria-label="Main Navigation" className="flex items-center gap-7">
        {navigation.mainNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => {
              const base =
                'text-sm font-semibold tracking-wide uppercase transition-colors duration-150 py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy'

              if (isTransparent) {
                return `${base} ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-white/85 hover:text-white'
                }`
              }

              return `${base} ${
                isActive
                  ? 'text-burgundy font-bold'
                  : 'text-charcoal hover:text-wine'
              }`
            }}
          >
            {({ isActive }) => (
              <>
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isTransparent ? 'bg-white' : 'bg-burgundy'
                    }`}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Primary header CTA */}
      <Button
        to={navigation.cta.path}
        variant={isTransparent ? 'primary' : 'corporate'}
        size="sm"
        icon={HiArrowRight}
      >
        {navigation.cta.label}
      </Button>
    </div>
  )
}
