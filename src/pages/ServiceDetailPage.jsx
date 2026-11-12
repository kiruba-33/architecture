import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CallToAction from '../components/common/CallToAction'
import NotFound from '../components/common/NotFound'
import Button from '../components/common/Button'
import { services } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  HiCheckCircle,
  HiArrowRight,
  HiOutlineCheckBadge,
  HiOutlineSparkles,
} from 'react-icons/hi2'

/**
 * Reusable Dynamic Service Detail Page (`/services/:slug`).
 * Renders rich editorial and technical content for any service from `src/data/services.js`.
 */
export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  // Dynamic SEO Metadata
  usePageMeta(
    service?.seoTitle || 'Service Details | Architectural & Civil Practice',
    service?.seoDescription || service?.shortDesc,
    {
      ogImage: service?.heroImage,
      jsonLd: service
        ? {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.shortDesc,
            serviceType: service.title,
          }
        : undefined,
    }
  )

  // Service-specific editorial headlines inspired by PCL design
  const serviceHeadlines = {
    'vastu-planning': 'Engineered Vastu Blueprints for Modern Architecture',
    'elevation-design': 'Architectural 3D Facades & Exterior Elevation Design',
    'construction': 'Structural Civil Execution & Turnkey Construction',
    'renovation': 'Methodical Structural Remodeling & Renovation',
    'labour-contract': 'Disciplined On-Site Civil Labour & Trade Contracting',
    'interior-work': 'Precision Interior Architecture & Bespoke Fit-Outs',
    'waterproofing': 'Advanced Multi-Barrier Structural Waterproofing Systems',
  }

  // Invalid Slug Handling: Renders custom 404 state without breaking navigation
  if (!service) {
    return (
      <div className="flex-1 flex flex-col">
        <PageHero
          variant="simple"
          eyebrow="STATUS 404"
          title="Service Not Located"
          description="The requested service discipline could not be identified in our active capabilities directory."
          breadcrumbs={[
            { label: 'Services', path: '/services' },
            { label: 'Unknown Service' },
          ]}
        />
        <NotFound
          code="404"
          title="Service Not Found"
          message={`We could not locate a confirmed service matching "${slug}". Please explore our complete capabilities directory to locate the relevant discipline.`}
          actionText="Browse All Services"
          actionTo="/services"
          secondaryText="Return to Home"
          secondaryTo="/"
        />
      </div>
    )
  }

  // Resolve related services dynamically from slugs
  const related = services.filter((s) =>
    service.relatedServices?.includes(s.slug)
  )

  return (
    <div className="flex-1 flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL SERVICE PAGE HERO
      ───────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow={`OUR SERVICES / ${service.title.toUpperCase()}`}
        title={serviceHeadlines[service.slug] || service.title}
        description={service.shortDesc}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
      />

      {/* ─────────────────────────────────────────────────────────────
          2. DETAILED SERVICE OVERVIEW & SCOPE OF WORK
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-silver">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Detailed Narrative */}
            <div className="lg:col-span-7">
              <SectionHeading
                kicker="TECHNICAL OVERVIEW"
                title={`Engineered Solutions for ${service.title}`}
                subtitle="Methodical planning, verified material standards, and disciplined site coordination."
              />

              <div className="mt-6 text-base sm:text-lg text-charcoal/70 leading-relaxed space-y-4">
                <p>{service.fullDesc}</p>
                <p>
                  Our execution teams work under structured supervision to eliminate deviations between architectural drawings and site reality. Every milestone is audited for dimensional accuracy, structural compliance, and long-term durability.
                </p>
              </div>

              {/* Scope of Work Grid */}
              <div className="mt-10 pt-8 border-t border-silver/50">
                <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-5 flex items-center gap-2">
                  <HiOutlineCheckBadge className="w-5 h-5 text-burgundy" aria-hidden="true" />
                  <span>Comprehensive Scope of Work</span>
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.scopeOfWork.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 bg-ivory border border-silver text-xs sm:text-sm font-medium text-charcoal"
                    >
                      <HiCheckCircle className="w-4 h-4 text-burgundy shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Benefits & Key Considerations Card */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="bg-charcoal text-white p-7 sm:p-9 border-t-4 border-t-burgundy shadow-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-mauve flex items-center gap-2">
                  <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
                  <span>Strategic Advantages</span>
                </span>

                <h3 className="mt-2 text-xl font-extrabold text-white">
                  Why Our Approach Stands Out
                </h3>

                <ul className="mt-6 space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ivory/85 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-wine shrink-0 mt-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-charcoal-dark">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    icon={HiArrowRight}
                    className="w-full text-center"
                  >
                    Consult on {service.title}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. STEP-BY-STEP WORKING PROCESS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-ivory border-b border-silver">
        <Container>
          <div className="max-w-3xl mb-14">
            <SectionHeading
              kicker="EXECUTION ROADMAP"
              title="Methodical Working Process"
              subtitle="From initial assessment to finalized delivery, our execution follows four rigorous phases."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white p-7 border border-silver hover:border-burgundy transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-silver/50">
                    <span className="text-2xl font-black font-mono text-wine">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50">
                      Phase {step.step}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-charcoal">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. SUPPORTING IMAGE GALLERY
      ───────────────────────────────────────────────────────────── */}
      {service.galleryImages && service.galleryImages.length > 0 && (
        <section className="py-20 sm:py-24 bg-white border-b border-silver">
          <Container>
            <div className="mb-12">
              <SectionHeading
                kicker="VISUAL DOCUMENTATION"
                title="Execution Context & Craftsmanship"
                subtitle="Visual imagery showcasing architectural detailing, site engineering, and finish quality."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.galleryImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[4/3] overflow-hidden bg-charcoal border border-silver shadow-xs"
                >
                  <img
                    src={imgUrl}
                    alt={`${service.title} execution documentation sample ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-semibold text-mauve">Documentation</span> &bull; Reference View {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. RELATED SERVICES DIRECTORY
      ───────────────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-20 sm:py-24 bg-ivory border-b border-silver">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <SectionHeading
                kicker="INTERCONNECTED DISCIPLINES"
                title="Related Capabilities"
                subtitle="Complementary architectural and construction disciplines commonly integrated with this service."
              />
              <Button to="/services" variant="outline" size="sm" icon={HiArrowRight}>
                All Services
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((relService) => (
                <Link
                  key={relService.slug}
                  to={`/services/${relService.slug}`}
                  className="group bg-white p-6 border border-silver hover:border-burgundy transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-base font-bold text-charcoal group-hover:text-burgundy transition-colors">
                      {relService.title}
                    </h4>
                    <p className="mt-2 text-xs text-charcoal/70 leading-relaxed line-clamp-2">
                      {relService.shortDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-silver/50 flex items-center text-xs font-semibold text-burgundy group-hover:text-wine transition-colors">
                    <span>Explore Discipline</span>
                    <HiArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. CONTACT CTA
      ───────────────────────────────────────────────────────────── */}
      <CallToAction
        kicker="DIRECT CONSULTATION"
        title={`Discuss Your ${service.title} Requirements`}
        subtitle="Our technical team is ready to review site specifications, spatial blueprints, or project schedules."
        primaryCta={{ label: 'Submit Project Enquiry', to: '/contact' }}
        secondaryCta={{ label: 'Explore Other Services', to: '/services' }}
      />
    </div>
  )
}
