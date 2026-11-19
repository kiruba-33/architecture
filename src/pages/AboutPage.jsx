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
  HiOutlineUser,
} from 'react-icons/hi2'

/**
 * Refined About Page for Architecture One (ESKY Architects).
 * Features simplified, clear professional language and a dedicated
 * "Meet Our Founders" section positioned immediately below Our Standards.
 */
export default function AboutPage() {
  usePageMeta(
    'About Our Practice | Architectural & Civil Engineering Standards',
    'Learn about Architecture One (ESKY Architects) — our design philosophy, engineering standards, and unified approach to architecture and construction.',
    {
      ogImage: '/images/about-engineering.jpg',
      canonical: 'https://eskyarchitects.com/about',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Our Practice',
        description:
          'A disciplined engineering and architectural practice dedicated to practical design, structural strength, and reliable execution.',
        url: 'https://eskyarchitects.com/about',
      },
    }
  )

  const principles = [
    {
      title: 'Structural Integrity',
      description:
        'We never compromise on material quality, foundation strength, or engineering safety standards.',
      icon: HiOutlineShieldCheck,
    },
    {
      title: 'Design Clarity',
      description:
        'We keep floor plans, 3D designs, and actual site work completely aligned so the finished build matches the approved vision.',
      icon: HiOutlineCubeTransparent,
    },
    {
      title: 'Transparent Communication',
      description:
        'We provide clear project timelines, written work updates, and open communication at every stage of construction.',
      icon: HiOutlineDocumentMagnifyingGlass,
    },
    {
      title: 'Skilled Workmanship',
      description:
        'Our skilled workers and site supervisors follow high standards for brickwork, concrete framing, electrical routing, and finishes.',
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
        description="We combine thoughtful architectural planning, dependable civil engineering, and hands-on construction to create durable, well-designed spaces."
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
                kicker="ABOUT OUR PRACTICE"
                title="Designing and Building Spaces That Last"
                subtitle="We connect thoughtful architectural design with practical, on-site construction to deliver durable buildings."
              />

              <div className="mt-6 space-y-4 text-sm sm:text-base text-charcoal/75 leading-relaxed">
                <p>
                  Every project starts with an idea, but a building’s real value comes from practical engineering, quality materials, and careful workmanship. We established our practice to bridge the gap that often exists between architectural drawings and on-site construction reality.
                </p>
                <p>
                  By bringing floor planning, 3D elevation design, general construction, and specialized waterproofing together under one team, we make the building process smoother. This ensures every structure is comfortable to live in, structurally sound, and built to endure.
                </p>
                <p>
                  Whether we are building new homes, managing commercial renovations, or coordinating trade labour contracts, our teams follow strict safety standards, verified building codes, and thorough daily supervision.
                </p>
              </div>

              <div className="mt-8">
                <Button to="/services" variant="primary" size="md" icon={HiArrowRight}>
                  Explore Our Services
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main image container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal border border-silver shadow-xl rounded-lg">
                  <picture>
                    <source srcSet="/images/about-engineering.webp" type="image/webp" />
                    <img
                      src="/images/about-engineering.jpg"
                      alt="Site engineering and structural execution"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent pointer-events-none" />
                </div>

                {/* Architectural Benchmark Caption Box */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-8 bg-charcoal text-white p-5 sm:p-6 border-l-4 border-l-coral border-t border-r border-b border-silver/20 shadow-2xl sm:max-w-xs z-10 rounded-r-lg">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white block font-mono">
                    Execution Standards
                  </span>
                  <h3 className="text-sm font-bold text-white mt-1">
                    Quality First
                  </h3>
                  <p className="mt-1 text-xs text-ivory/90 leading-relaxed font-light">
                    Accurate measurements, certified building materials, and active on-site supervision on every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. OUR APPROACH TO ARCHITECTURE & CONSTRUCTION (OUR PHILOSOPHY)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-ivory border-b border-silver overflow-hidden">
        {/* Architectural Background Artwork: Design A (Topographic Contour Texture) */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.22] mix-blend-multiply"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-topography.webp)' }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionHeading
              align="center"
              kicker="OUR PHILOSOPHY"
              title="Where Good Design Meets Sound Engineering"
              subtitle="Great architecture looks appealing, works comfortably, and stands strong. Our method balances clean aesthetics with solid construction."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-silver flex flex-col justify-between hover:border-coral transition-colors duration-300 rounded-lg">
              <div>
                <span className="text-xs font-mono font-bold text-charcoal uppercase tracking-widest block mb-4">
                  Pillar 01
                </span>
                <h3 className="text-xl font-bold text-charcoal">
                  Smart Spatial Planning
                </h3>
                <p className="mt-3 text-sm text-charcoal/75 leading-relaxed font-light">
                  We combine traditional layout principles such as Vastu with modern spatial design. This ensures rooms receive plenty of natural sunlight, healthy airflow, and practical everyday circulation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-silver/50 text-xs font-semibold text-coral">
                Design &amp; Planning
              </div>
            </div>

            <div className="bg-white p-8 border border-silver flex flex-col justify-between hover:border-coral transition-colors duration-300 rounded-lg">
              <div>
                <span className="text-xs font-mono font-bold text-charcoal uppercase tracking-widest block mb-4">
                  Pillar 02
                </span>
                <h3 className="text-xl font-bold text-charcoal">
                  Solid Engineering
                </h3>
                <p className="mt-3 text-sm text-charcoal/75 leading-relaxed font-light">
                  From soil checks and beam calculations to proper concrete curing, every structural element is planned carefully to guarantee strength, safety, and long-term durability.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-silver/50 text-xs font-semibold text-coral">
                Civil &amp; Structural
              </div>
            </div>

            <div className="bg-white p-8 border border-silver flex flex-col justify-between hover:border-coral transition-colors duration-300 rounded-lg">
              <div>
                <span className="text-xs font-mono font-bold text-charcoal uppercase tracking-widest block mb-4">
                  Pillar 03
                </span>
                <h3 className="text-xl font-bold text-charcoal">
                  Quality Craftsmanship
                </h3>
                <p className="mt-3 text-sm text-charcoal/75 leading-relaxed font-light">
                  From weather-resistant exterior finishes and custom woodwork to thorough multi-layer waterproofing, we bring architectural plans to life with careful attention to detail.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-silver/50 text-xs font-semibold text-coral">
                Finishing &amp; Detailing
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CORE WORKING PRINCIPLES (OUR STANDARDS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-silver">
        <Container>
          <div className="max-w-3xl mb-16">
            <SectionHeading
              kicker="OUR STANDARDS"
              title="Four Guiding Principles of Our Work"
              subtitle="These principles guide every decision we make on-site, in the design studio, and throughout our collaboration with clients."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle) => {
              const Icon = principle.icon

              return (
                <div
                  key={principle.title}
                  className="p-7 bg-ivory border border-silver hover:border-coral transition-all duration-300 flex flex-col justify-between rounded-lg"
                >
                  <div>
                    <div className="w-12 h-12 flex items-center justify-center bg-white border border-silver text-coral mb-6 shadow-xs rounded-md">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>

                    <h3 className="text-lg font-bold text-charcoal">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm text-charcoal/70 leading-relaxed font-light">
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
          5. MEET OUR FOUNDERS (IMMEDIATELY BELOW OUR STANDARDS)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-ivory border-b border-silver overflow-hidden">
        {/* Architectural Background Artwork: Design D (Abstract Geometric Composition) */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.45] mix-blend-multiply"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-geometric.webp)' }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <SectionHeading
              kicker="LEADERSHIP"
              title="Meet Our Founders"
              subtitle="The architectural vision and engineering leadership guiding our practice and project execution."
            />
          </div>

          {/* Two-Founder Profile Presentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* Founder Profile 01 */}
            <div className="bg-white border border-silver p-6 sm:p-8 flex flex-col justify-between hover:border-coral transition-all duration-300 shadow-xs rounded-lg">
              <div>
                {/* Photograph Area (Aspect 4/5, balanced proportions) */}
                <div className="relative aspect-[4/5] bg-ivory border border-silver/80 overflow-hidden flex flex-col items-center justify-center p-6 text-center group mb-6 rounded-md">
                  {/* Subtle architectural background grid */}
                  <div
                    className="absolute inset-0 opacity-[0.035] pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #29252A 1px, transparent 1px), linear-gradient(to bottom, #29252A 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 w-20 h-20 rounded-full bg-white border border-silver flex items-center justify-center text-secondary/80 mb-3 shadow-xs">
                    <HiOutlineUser className="w-10 h-10 text-secondary" aria-hidden="true" />
                  </div>

                  <span className="relative z-10 text-xs font-mono font-bold uppercase tracking-wider text-charcoal">
                    Founder Photograph
                  </span>
                  <span className="relative z-10 text-[11px] font-mono text-secondary mt-1 max-w-[200px]">
                    Portrait slot ready for official photograph
                  </span>

                  {/* Profile Indicator Badge */}
                  <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[10px] font-mono font-bold uppercase tracking-widest text-coral px-2.5 py-1 border border-silver rounded-sm">
                    Profile 01
                  </span>
                </div>

                {/* Profile Information Fields */}
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal block mb-1">
                  Co-Founder &amp; Principal
                </span>
                <h3 className="text-2xl font-condensed font-bold text-charcoal">
                  [Founder Name]
                </h3>
                <p className="text-xs font-mono text-secondary uppercase tracking-wider mt-1">
                  Architectural Direction &amp; Spatial Design
                </p>

                <p className="mt-4 text-sm text-charcoal/70 leading-relaxed font-light">
                  Professional biography, architectural background, and design philosophy will be presented here upon client confirmation.
                </p>
              </div>

              {/* Status Footer */}
              <div className="mt-6 pt-4 border-t border-silver/60 flex items-center justify-between text-xs font-mono text-secondary">
                <span>Designation: Pending Confirmation</span>
                <span className="text-coral font-semibold">Photo Required</span>
              </div>
            </div>

            {/* Founder Profile 02 */}
            <div className="bg-white border border-silver p-6 sm:p-8 flex flex-col justify-between hover:border-coral transition-all duration-300 shadow-xs rounded-lg">
              <div>
                {/* Photograph Area (Aspect 4/5, balanced proportions) */}
                <div className="relative aspect-[4/5] bg-ivory border border-silver/80 overflow-hidden flex flex-col items-center justify-center p-6 text-center group mb-6 rounded-md">
                  {/* Subtle architectural background grid */}
                  <div
                    className="absolute inset-0 opacity-[0.035] pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #29252A 1px, transparent 1px), linear-gradient(to bottom, #29252A 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 w-20 h-20 rounded-full bg-white border border-silver flex items-center justify-center text-secondary/80 mb-3 shadow-xs">
                    <HiOutlineUser className="w-10 h-10 text-secondary" aria-hidden="true" />
                  </div>

                  <span className="relative z-10 text-xs font-mono font-bold uppercase tracking-wider text-charcoal">
                    Founder Photograph
                  </span>
                  <span className="relative z-10 text-[11px] font-mono text-secondary mt-1 max-w-[200px]">
                    Portrait slot ready for official photograph
                  </span>

                  {/* Profile Indicator Badge */}
                  <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[10px] font-mono font-bold uppercase tracking-widest text-coral px-2.5 py-1 border border-silver rounded-sm">
                    Profile 02
                  </span>
                </div>

                {/* Profile Information Fields */}
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal block mb-1">
                  Co-Founder &amp; Director
                </span>
                <h3 className="text-2xl font-condensed font-bold text-charcoal">
                  [Founder Name]
                </h3>
                <p className="text-xs font-mono text-secondary uppercase tracking-wider mt-1">
                  Civil Engineering &amp; Operations
                </p>

                <p className="mt-4 text-sm text-charcoal/70 leading-relaxed font-light">
                  Professional biography, engineering credentials, and on-site project management background will be presented here upon client confirmation.
                </p>
              </div>

              {/* Status Footer */}
              <div className="mt-6 pt-4 border-t border-silver/60 flex items-center justify-between text-xs font-mono text-secondary">
                <span>Designation: Pending Confirmation</span>
                <span className="text-coral font-semibold">Photo Required</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. SERVICES NAVIGATION DIRECTORY
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-silver">
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
                className="group bg-white p-6 border border-silver hover:border-coral transition-all hover:shadow-md flex flex-col justify-between rounded-lg"
              >
                <div>
                  <h3 className="text-base font-bold text-charcoal group-hover:text-coral transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-charcoal/70 line-clamp-2 leading-relaxed font-light">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-silver/50 flex items-center text-xs font-semibold text-coral group-hover:text-secondary transition-colors">
                  <span>View Details</span>
                  <HiArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. CONTACT CTA
      ───────────────────────────────────────────────────────────── */}
      <CallToAction
        kicker="START YOUR PROJECT"
        title="Ready to Build with Confidence?"
        subtitle="Contact our team to review site plans, discuss structural requirements, or schedule an initial consultation."
        primaryCta={{ label: 'Submit Project Enquiry', to: '/contact' }}
        secondaryCta={{ label: 'Review Services', to: '/services' }}
      />
    </div>
  )
}
