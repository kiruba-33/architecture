import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

/**
 * Client Application Root using BrowserRouter.
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
