import Container from './Container'
import Button from './Button'
import { HiArrowLeft, HiOutlineBuildingOffice2 } from 'react-icons/hi2'

/**
 * Reusable Not Found component.
 * Used for top-level 404 routes as well as invalid service/project slug fallbacks.
 */
export default function NotFound({
  code = '404',
  title = 'Page Not Found',
  message = 'The resource or page you requested could not be located. It may have been updated, relocated, or is no longer available.',
  actionText = 'Return to Homepage',
  actionTo = '/',
  secondaryText = 'Explore Services',
  secondaryTo = '/services',
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 bg-ivory">
      <Container>
        <div className="max-w-xl mx-auto text-center bg-white p-8 sm:p-12 border border-silver shadow-sm">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-ivory border border-silver text-burgundy">
            <HiOutlineBuildingOffice2 className="w-8 h-8" aria-hidden="true" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-wine">
            Error {code}
          </span>

          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
            {title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-charcoal/70 leading-relaxed">
            {message}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button to={actionTo} variant="corporate" size="md" icon={HiArrowLeft} iconPosition="left">
              {actionText}
            </Button>
            {secondaryText && secondaryTo && (
              <Button to={secondaryTo} variant="outline" size="md">
                {secondaryText}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
