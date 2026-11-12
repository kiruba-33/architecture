import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navigation } from '../../data/navigation'
import ArchitecturalSymbol from '../common/ArchitecturalSymbol'
import Button from '../common/Button'
import { HiXMark, HiArrowRight } from 'react-icons/hi2'

/**
 * Responsive Mobile Navigation Drawer.
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
            className="p-2 text-charcoal hover:text-burgundy transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
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
                      ? 'text-burgundy bg-ivory border-l-4 border-l-burgundy font-bold'
                      : 'text-charcoal hover:text-wine hover:bg-ivory/40'
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
            <span className="text-xs font-bold uppercase tracking-widest text-wine block mb-3">
              Services
            </span>
            <div className="grid grid-cols-1 gap-2">
              {navigation.footerServices.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  onClick={onClose}
                  className="text-sm text-charcoal/80 hover:text-burgundy py-1.5 transition-colors"
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-silver bg-ivory">
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
        </div>
      </div>
    </div>
  )
}
