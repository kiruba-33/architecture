import { useEffect, useState } from 'react'

/**
 * Hook to track window scroll Y position with passive listener for performance.
 * @param {number} threshold - Scroll threshold to toggle state
 * @returns {boolean} - True if window.scrollY > threshold
 */
export function useScrollPosition(threshold = 20) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > threshold)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}
