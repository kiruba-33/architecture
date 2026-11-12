import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

/**
 * SSR/Prerender function.
 * Given a URL path, returns the pre-rendered HTML string.
 *
 * @param {string} url - Route path (e.g. '/' or '/services/vastu-planning')
 * @returns {string} - HTML markup
 */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  )
}
