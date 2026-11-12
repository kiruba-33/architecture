import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useScrollToTop } from '../../hooks/useScrollToTop'

/**
 * Global Root Layout wrapper.
 * Integrates persistent navigation, scroll-to-top handler, and corporate footer.
 */
export default function RootLayout() {
  // Enforces scroll-to-top on PUSH navigation
  useScrollToTop()

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-charcoal selection:bg-burgundy selection:text-white">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
