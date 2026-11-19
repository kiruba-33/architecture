import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import ArchitecturalSymbol from '../common/ArchitecturalSymbol'
import Button from '../common/Button'
import { HiXMark, HiArrowRight, HiOutlineUser } from 'react-icons/hi2'

/**
 * Responsive Mobile Navigation Drawer.
 * Includes official navigation items, services quick access,
 * and dual action buttons: Product Enquiry & Client Login.
 *
 * @param {{ isOpen: boolean, onClose: () => void }} props
 */
export default function MobileNavigation({ isOpen, onClose }) {
  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 transition-transform duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-silver">
          <ArchitecturalSymbol variant="dark" />
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-charcoal hover:text-coral transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            aria-label="Close navigation menu"
          >
            <HiXMark className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navigation.mainNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `px-3 py-3.5 text-base font-semibold uppercase tracking-wider transition-colors flex items-center justify-between border-b border-gray-100 ${
                    isActive
                      ? 'text-coral bg-ivory border-l-4 border-l-coral font-bold'
                      : 'text-charcoal hover:text-secondary hover:bg-ivory/40'
                  }`
                }
              >
                <span>{item.label}</span>
                <HiArrowRight className="w-4 h-4 text-silver-dark" aria-hidden="true" />
              </NavLink>
            ))}
          </nav>

          {/* Core Services Quick Access */}
          <div className="mt-8 pt-6 border-t border-silver">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-3">
              Services
            </span>
            <div className="grid grid-cols-1 gap-2">
              {navigation.footerServices.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  onClick={onClose}
                  className="text-sm text-charcoal/80 hover:text-coral py-1.5 transition-colors"
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs: Product Enquiry & Client Login */}
        <div className="p-6 border-t border-silver bg-ivory space-y-3">
          <Button
            to={navigation.cta.path}
            onClick={onClose}
            variant="primary"
            size="lg"
            className="w-full text-center"
            icon={HiArrowRight}
          >
            {navigation.cta.label}
          </Button>

          <button
            type="button"
            aria-label="Client Login"
            className="w-full inline-flex items-center justify-center font-semibold text-base tracking-wide px-7 py-3 gap-2.5 rounded border border-charcoal/30 text-charcoal bg-white hover:bg-charcoal hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal active:translate-y-px select-none"
            onClick={(e) => {
              e.preventDefault()
              onClose()
              // Client Login UI-only: placeholder ready for future authentication
            }}
          >
            <HiOutlineUser className="text-current text-lg shrink-0" aria-hidden="true" />
            <span>Client Login</span>
          </button>
        </div>
      </div>
    </div>
  )
}
