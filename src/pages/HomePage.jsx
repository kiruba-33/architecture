import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionHeading from '../components/common/SectionHeading'
import CallToAction from '../components/common/CallToAction'
import ServiceCard from '../components/services/ServiceCard'
import HeroCarousel from '../components/home/HeroCarousel'
import { services } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  HiArrowRight,
  HiCheckCircle,
  HiOutlineFolderOpen,
  HiOutlineClipboardDocumentCheck,
  HiOutlineSquares2X2,
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckBadge,
} from 'react-icons/hi2'

/**
 * Flagship Home Page.
 * Professional, corporate, editorial architecture & construction layout inspired by PCL Construction.
 */
export default function HomePage() {
  usePageMeta(
    'ESKY Architects | Architectural Planning & Civil General Contracting',
    'Specialized architectural planning, structural civil contracting, high-performance exterior elevations, renovation, and fine interior fit-outs.',
    {
      ogImage: '/images/hero-home.jpg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'ESKY Architects',
        description:
          'Comprehensive architectural planning, structural civil construction, interior execution, and engineering contracting services.',
        areaServed: 'India',
        serviceType: [
          'Vastu Planning',
          'Elevation Design',
          'General Construction',
          'Renovation',
          'Labour Contracting',
          'Interior Work',
          'Waterproofing',
        ],
      },
    }
  )
  const approachSteps = [
    {
      step: '01',
      title: 'Understanding Requirements',
      description:
        'In-depth evaluation of spatial needs, site orientation, functional zoning, and structural parameters before drafting.',
      icon: HiOutlineClipboardDocumentCheck,
    },
    {
      step: '02',
      title: 'Planning & Design',
      description:
        'Developing precise architectural blueprints, 3D elevation models, structural engineering calculations, and material specifications.',
      icon: HiOutlineSquares2X2,
    },
    {
      step: '03',
      title: 'Execution & Coordination',
      description:
        'Dedicated on-site supervision, disciplined craftsmanship, certified raw material staging, and milestone quality inspections.',
      icon: HiOutlineWrenchScrewdriver,
    },
    {
      step: '04',
      title: 'Project Completion',
      description:
        'Multi-point quality audits, structural curing verification, surface detailing, and transparent project commissioning.',
      icon: HiOutlineCheckBadge,
    },
  ]

  return (
    <div className="flex-1 flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: 5-SLIDE ARCHITECTURAL DESIGN CAROUSEL
      ───────────────────────────────────────────────────────────── */}
      <HeroCarousel />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: COMPANY INTRODUCTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-silver">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Philosophy */}
            <div className="lg:col-span-7">
              <SectionHeading
                kicker="CORPORATE PRACTICE"
                title="Bridging Architectural Vision & Rigorous Engineering Execution"
                subtitle="We approach every building project with a synthesis of spatial design sensitivity and meticulous structural discipline."
              />

              <div className="mt-6 space-y-4 text-sm sm:text-base text-charcoal/70 leading-relaxed">
                <p>
                  From land orientation and regulatory drafting to reinforced concrete frameworks, material chemistry, and bespoke finishing joinery, our practice prioritizes structural integrity, constructability, and lasting durability.
                </p>
                <p>
                  Every phase is executed with on-site engineering oversight, vetted material sourcing, and transparent technical governance to ensure seamless collaboration between architects, engineers, and clients.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-silver/50">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-charcoal">
                  <HiCheckCircle className="w-5 h-5 text-coral shrink-0" aria-hidden="true" />
                  <span>Integrated Spatial Blueprinting</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-charcoal">
                  <HiCheckCircle className="w-5 h-5 text-coral shrink-0" aria-hidden="true" />
                  <span>Uncompromised Material Standards</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-charcoal">
                  <HiCheckCircle className="w-5 h-5 text-coral shrink-0" aria-hidden="true" />
                  <span>Supervised Site Execution</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-charcoal">
                  <HiCheckCircle className="w-5 h-5 text-coral shrink-0" aria-hidden="true" />
                  <span>Transparent Milestone Tracking</span>
                </div>
              </div>

              <div className="mt-10">
                <Button to="/about" variant="primary" size="md" icon={HiArrowRight}>
                  Learn More About Our Philosophy
                </Button>
              </div>
            </div>

            {/* Right Column: Architectural Photography Showcase */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main image container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal border border-silver shadow-xl rounded-lg">
                  <img
                    src="/images/home-showcase.webp"
                    alt="Architectural structure showcase"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent pointer-events-none" />
                </div>

                {/* Minimalist Architectural Caption Box */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-8 bg-charcoal text-white p-5 sm:p-6 border-l-4 border-l-coral border-t border-r border-b border-silver/20 shadow-2xl sm:max-w-xs z-10 rounded-r-lg">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-coral block font-mono">
                    Execution Benchmark
                  </span>
                  <h3 className="text-sm font-bold text-white mt-1">
                    Constructability First
                  </h3>
                  <p className="mt-1 text-xs text-ivory/90 leading-relaxed font-light">
                    Structural accuracy, enduring material selection, and precision detailing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: SERVICES OVERVIEW (THE 7 CONFIRMED SERVICES)
      ───────────────────────────────────────────────────────────── */}
      <section id="services" className="relative py-20 sm:py-28 bg-ivory border-b border-silver overflow-hidden">
        {/* Architectural Background Artwork: Design B (Architectural Line Art / Elevation) */}
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-1/2 bg-contain bg-right-center bg-no-repeat pointer-events-none opacity-[0.16] mix-blend-multiply"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-lineart.webp)' }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeading
              kicker="COMPREHENSIVE CAPABILITIES"
              hasExtendingLine={true}
              title="Seven Core Construction & Design Services"
              subtitle="From spatial blueprinting and exterior facades to structural civil construction, renovation, and specialized contracting."
            />
            <Button
              to="/services"
              variant="outline"
              size="md"
              icon={HiArrowRight}
              className="shrink-0 self-start md:self-end"
            >
              View All Services
            </Button>
          </div>

          {/* 7 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: OUR APPROACH (METHODICAL PROJECT JOURNEY)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-white border-b border-silver overflow-hidden">
        {/* Subtle architectural sketch background */}
        <div
          className="absolute -right-4 top-8 sm:top-12 w-72 sm:w-96 h-64 sm:h-80 bg-contain bg-right-top bg-no-repeat pointer-events-none opacity-[0.14] mix-blend-multiply"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-sketch.webp)' }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading
              align="center"
              kicker="PROJECT LIFECYCLE"
              title="A Methodical Construction Journey"
              subtitle="Our structured execution framework ensures transparency, engineering precision, and milestone predictability at every phase."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step) => {
              const Icon = step.icon

              return (
                <div
                  key={step.step}
                  className="bg-white p-7 sm:p-8 border border-silver hover:border-coral transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md rounded-lg"
                >
                  <div>
                    {/* Step indicator & icon */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-silver/50">
                      <span className="text-2xl font-black font-mono text-secondary group-hover:text-coral transition-colors">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 flex items-center justify-center bg-ivory border border-silver text-coral group-hover:bg-coral group-hover:text-white transition-all rounded-md">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-charcoal group-hover:text-coral transition-colors">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm text-charcoal/70 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-silver/50 text-xs font-semibold text-charcoal/50 uppercase tracking-wider font-mono">
                    Phase {step.step}
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: PROJECT PORTFOLIO PREVIEW
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-ivory border-b border-silver overflow-hidden">
        {/* Architectural Background Artwork: Design C (Organic Sculptural Artwork) */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.22] mix-blend-multiply"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-sculptural.webp)' }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-14 border border-silver shadow-sm text-center rounded-lg">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-ivory border border-silver text-coral rounded-md">
              <HiOutlineFolderOpen className="w-8 h-8" aria-hidden="true" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-charcoal font-mono">
              Selected Works
            </span>

            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-charcoal tracking-tight font-condensed">
              Portfolio Under Curation
            </h2>

            <p className="mt-4 text-sm sm:text-base text-charcoal/70 leading-relaxed max-w-2xl mx-auto font-light">
              Our recent architectural case studies, structural project photographs, and engineering documentation are currently being curated for publication. Every build reflects our rigorous commitment to quality craftsmanship and structural permanence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/projects" variant="primary" size="md" icon={HiArrowRight}>
                Visit Portfolio Directory
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Request Portfolio Presentation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: EDITORIAL CONTACT CTA
      ───────────────────────────────────────────────────────────── */}
      <CallToAction
        kicker="START A CONVERSATION"
        title="Discuss Your Next Architectural or Construction Requirement"
        subtitle="Connect with our technical team to review spatial blueprints, assess site conditions, or evaluate project timelines."
        primaryCta={{ label: 'Submit Project Enquiry', to: '/contact' }}
        secondaryCta={{ label: 'Explore Services', to: '/services' }}
      />
    </div>
  )
}
