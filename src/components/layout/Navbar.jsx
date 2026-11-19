import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../common/Container'
import ArchitecturalSymbol from '../common/ArchitecturalSymbol'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { HiBars3 } from 'react-icons/hi2'

/**
 * Responsive Navbar with dynamic transparency.
 * Transparent over homepage hero; transitions to solid on scroll and is permanently solid on interior pages.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isScrolled = useScrollPosition(30)

  // Transparent only when on HomePage AND not scrolled down
  const isTransparent = isHomePage && !isScrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isTransparent
            ? 'bg-gradient-to-b from-charcoal/80 via-charcoal/30 to-transparent py-5 sm:py-6'
            : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-silver py-3.5 sm:py-4'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Minimal Neutral Architectural Symbol */}
            <ArchitecturalSymbol variant={isTransparent ? 'light' : 'dark'} />

            {/* Desktop Navigation Links & CTA */}
            <DesktopNavigation isTransparent={isTransparent} />

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral ${
                  isTransparent
                    ? 'text-white hover:text-coral'
                    : 'text-charcoal hover:text-coral'
                }`}
                aria-label="Open mobile navigation menu"
              >
                <HiBars3 className="w-7 h-7" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Off-canvas mobile navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}
