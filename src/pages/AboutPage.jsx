import { Link } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CallToAction from '../components/common/CallToAction'
import Button from '../components/common/Button'
import { services } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineCubeTransparent,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineUserGroup,
} from 'react-icons/hi2'

/**
 * Flagship About Page.
 * Professional, corporate architecture profile honoring data integrity without fabricated claims.
 */
export default function AboutPage() {
  usePageMeta(
    'About Our Practice | Architectural & Civil Engineering Standards',
    'A disciplined engineering and architectural practice dedicated to spatial equilibrium, structural integrity, and rigorous execution.',
    {
      ogImage: '/images/about-engineering.jpg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Our Practice',
        description:
          'A disciplined engineering and architectural practice dedicated to spatial equilibrium, structural integrity, and rigorous execution.',
      },
    }
  )
  const principles = [
    {
      title: 'Structural Integrity',
      description:
        'Zero compromise on raw material grades, structural concrete curing, and engineering load-bearing standards.',
      icon: HiOutlineShieldCheck,
    },
    {
      title: 'Design Clarity',
      description:
        'Cohesive coordination between 2D regulatory floor plans, 3D spatial elevations, and physical site execution.',
      icon: HiOutlineCubeTransparent,
    },
    {
      title: 'Transparent Governance',
      description:
        'Clear milestone tracking, documented scope updates, and candid communication across all project stages.',
      icon: HiOutlineDocumentMagnifyingGlass,
    },
    {
      title: 'Disciplined Workmanship',
      description:
        'Supervised trade professionals trained in accurate masonry, formwork, MEP conduit routing, and surface finishes.',
      icon: HiOutlineUserGroup,
    },
  ]

  return (
    <div className="flex-1 flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. INTERNAL PAGE HERO
      ───────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="ABOUT US"
        title="Building with Purpose, Planning with Precision"
        description="A disciplined approach to architectural planning, civil engineering, and general contracting built on technical rigor and design integrity."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* ─────────────────────────────────────────────────────────────
          2. COMPANY INTRODUCTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-silver">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                kicker="PRACTICE ETHOS"
                title="A Disciplined Architectural & Construction Practice"
                subtitle="We operate at the intersection of spatial planning, structural engineering, and end-to-end site execution."
              />

              <div className="mt-6 space-y-4 text-sm sm:text-base text-charcoal/70 leading-relaxed">
                <p>
                  Every structure begins with an idea, but its longevity depends entirely on constructability, engineering discipline, and material honesty. Our practice was established to eliminate the friction that so often occurs between conceptual architectural design and on-site construction reality.
                </p>
                <p>
                  By integrating spatial blueprinting, 3D exterior facades, turnkey civil contracting, and specialized waterproofing under a unified management process, we deliver structures that are functionally balanced, structurally robust, and enduringly refined.
                </p>
                <p>
                  Whether working on contemporary residential developments, commercial renovations, or specialized labour contracts, our teams operate with strict adherence to building codes, safety practices, and verified quality standards.
                </p>
              </div>

              <div className="mt-8">
                <Button to="/services" variant="corporate" size="md" icon={HiArrowRight}>
                  Explore Our Services
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main image container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal border border-silver shadow-xl">
                  <img
                    src="/images/about-engineering.webp"
                    alt="Site engineering and structural execution"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent pointer-events-none" />
                </div>

                {/* Architectural Benchmark Caption Box - Floating on desktop, stacked on mobile, fully visible */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-8 bg-charcoal text-white p-5 sm:p-6 border-l-4 border-l-burgundy border-t border-r border-b border-silver/20 shadow-2xl sm:max-w-xs z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-mauve block">
                    Execution Benchmark
                  </span>
                  <h3 className="text-sm font-bold text-white mt-1">
                    Quality Benchmark
                  </h3>
                  <p className="mt-1 text-xs text-ivory/90 leading-relaxed">
                    Precision framing, certified material grades, and rigorous supervisory governance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. OUR APPROACH TO ARCHITECTURE & CONSTRUCTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-silver">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionHeading
              align="center"
              kicker="PHILOSOPHY"
              title="Where Spatial Design Meets Technical Rigor"
              subtitle="Great architecture cannot be separated from the physics of construction. Our methodology balances aesthetic refinement with constructability."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-silver flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-wine uppercase tracking-widest block mb-4">
                  Pillar 01
                </span>
                <h3 className="text-xl font-bold text-charcoal">
                  Spatial Equilibrium
                </h3>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                  Integrating traditional spatial alignment principles (Vastu) with contemporary space planning ensures optimal natural illumination, continuous air movement, and functional living harmony.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-silver/50 text-xs font-semibold text-burgundy">
                Design & Blueprinting
              </div>
            </div>

            <div className="bg-white p-8 border border-silver flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-wine uppercase tracking-widest block mb-4">
                  Pillar 02
                </span>
                <h3 className="text-xl font-bold text-charcoal">
                  Engineering Integrity
                </h3>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                  Soil mechanics, structural column-beam calculation, load distribution, and concrete hydration curing are managed with scientific discipline to ensure total structural longevity.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-silver/50 text-xs font-semibold text-burgundy">
                Civil & Structural
              </div>
            </div>

            <div className="bg-white p-8 border border-silver flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-wine uppercase tracking-widest block mb-4">
                  Pillar 03
                </span>
                <h3 className="text-xl font-bold text-charcoal">
                  Craftsmanship & Finishing
                </h3>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                  From exterior weather-resistant elevation louvers to bespoke interior joinery and multi-layer elastomeric waterproofing, we bring architectural visions into tactile reality.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-silver/50 text-xs font-semibold text-burgundy">
                Finishing & Detailing
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CORE WORKING PRINCIPLES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-silver">
        <Container>
          <div className="max-w-3xl mb-16">
            <SectionHeading
              kicker="OUR STANDARDS"
              title="Four Guiding Principles of Our Work"
              subtitle="These principles govern every decision we make on-site, in the design studio, and throughout client collaboration."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle) => {
              const Icon = principle.icon

              return (
                <div
                  key={principle.title}
                  className="p-7 bg-ivory border border-silver hover:border-burgundy transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 flex items-center justify-center bg-white border border-silver text-burgundy mb-6 shadow-xs">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>

                    <h3 className="text-lg font-bold text-charcoal">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. SERVICES NAVIGATION DIRECTORY
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-silver">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              kicker="PRACTICE AREAS"
              title="Explore Our Capabilities"
              subtitle="Review each specialized service domain to understand deliverables, methodologies, and technical scope."
            />
            <Button to="/services" variant="outline" size="md" icon={HiArrowRight}>
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-white p-6 border border-silver hover:border-burgundy transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-charcoal group-hover:text-burgundy transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-charcoal/70 line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-silver/50 flex items-center text-xs font-semibold text-burgundy group-hover:text-wine transition-colors">
                  <span>View Details</span>
                  <HiArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CONTACT CTA
      ───────────────────────────────────────────────────────────── */}
      <CallToAction
        kicker="START YOUR PROJECT"
        title="Ready to Build with Technical Discipline?"
        subtitle="Contact our engineering team to review site plans, discuss structural requirements, or schedule an initial consultation."
        primaryCta={{ label: 'Submit Project Enquiry', to: '/contact' }}
        secondaryCta={{ label: 'Review Services', to: '/services' }}
      />
    </div>
  )
}
