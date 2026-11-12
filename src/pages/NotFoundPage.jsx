import PageHero from '../components/common/PageHero'
import NotFound from '../components/common/NotFound'

/**
 * Global 404 Not Found Page for unmapped routes.
 */
export default function NotFoundPage() {
  return (
    <div className="flex-1 flex flex-col">
      <PageHero
        variant="simple"
        eyebrow="STATUS 404"
        title="Page Not Located"
        description="The requested page could not be located in our site structure."
        breadcrumbs={[{ label: '404 Error' }]}
      />
      <NotFound
        code="404"
        title="Page Does Not Exist"
        message="The page URL you entered does not match any current routes on this website. Please check the address or return to the homepage."
        actionText="Return to Homepage"
        actionTo="/"
        secondaryText="Explore Services"
        secondaryTo="/services"
      />
    </div>
  )
}
