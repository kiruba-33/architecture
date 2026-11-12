import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/**
 * Automatically scrolls the window to the top on push/replace navigation,
 * while preserving native scroll restoration on POP (browser back/forward).
 */
export function useScrollToTop() {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    // Only scroll to top on PUSH navigation (clicking a link),
    // preserving user's position when using browser Back/Forward (POP)
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0)
    }
  }, [pathname, navigationType])
}
