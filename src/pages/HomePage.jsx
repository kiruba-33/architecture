import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SectionHeading from '../components/common/SectionHeading'
import SectionEyebrow from '../components/common/SectionEyebrow'
import CallToAction from '../components/common/CallToAction'
import ServiceCard from '../components/services/ServiceCard'
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
    'Corporate Architecture & Civil General Contracting',
    'Specialized architectural planning, structural civil contracting, high-performance exterior elevations, renovation, and fine interior fit-outs.',
    {
      ogImage: '/images/hero-home.jpg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Corporate Architecture & General Contracting',
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
          SECTION 1: FULL-SCREEN ARCHITECTURAL HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-charcoal text-white overflow-hidden">
        {/* Architectural Hero Image with High Loading Priority & Local Storage */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] opacity-80"
          style={{
            backgroundImage: "url('/images/hero-home.webp')",
          }}
          aria-hidden="true"
        />

        {/* Deep Corporate Gradient Overlays for High-Contrast Typography & Brand Atmosphere */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40 lg:to-charcoal/25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/70"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-burgundy/40 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle Architectural Drafting Grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10 py-32 sm:py-40 lg:py-48">
          <div className="max-w-4xl">
            {/* Restored Editorial Eyebrow Label with Decorative Line */}
            <div className="mb-6 sm:mb-8">
              <SectionEyebrow
                theme="dark"
                label="Corporate Architecture • Civil Engineering • General Contracting"
                textColor="text-mauve"
                lineColor="bg-burgundy-light"
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-condensed font-black tracking-tight text-white leading-[1.04]">
              Shaping Built Environments with Structural Discipline.
            </h1>

            {/* Supporting Description */}
            <p className="mt-6 sm:mt-8 text-base sm:text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
              Comprehensive architectural planning, structural civil contracting, high-performance elevations, and interior transformations executed to uncompromising quality standards.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button to="/services" variant="primary" size="lg" icon={HiArrowRight}>
                Explore Services
              </Button>
              <Button to="/contact" variant="outline-white" size="lg">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </Container>

        {/* Subtle Bottom Transition Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-wine via-burgundy to-transparent opacity-80" />
      </section>

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
                  <HiCheckCircle className="w-5 h-5 text-burgundy shrink-0" aria-hidden="true" />
                  <span>Integrated Spatial Blueprinting</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-charcoal">
                  <HiCheckCircle className="w-5 h-5 text-burgundy shrink-0" aria-hidden="true" />
                  <span>Uncompromised Material Standards</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-charcoal">
                  <HiCheckCircle className="w-5 h-5 text-burgundy shrink-0" aria-hidden="true" />
                  <span>Supervised Site Execution</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-charcoal">
                  <HiCheckCircle className="w-5 h-5 text-burgundy shrink-0" aria-hidden="true" />
                  <span>Transparent Milestone Tracking</span>
                </div>
              </div>

              <div className="mt-10">
                <Button to="/about" variant="corporate" size="md" icon={HiArrowRight}>
                  Learn More About Our Philosophy
                </Button>
              </div>
            </div>

            {/* Right Column: Architectural Photography Showcase */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main image container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal border border-silver shadow-xl">
                  <img
                    src="/images/home-showcase.webp"
                    alt="Architectural structure showcase"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent pointer-events-none" />
                </div>

                {/* Minimalist Architectural Caption Box - Floating on desktop, stacked on mobile, fully visible */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-8 bg-charcoal text-white p-5 sm:p-6 border-l-4 border-l-burgundy border-t border-r border-b border-silver/20 shadow-2xl sm:max-w-xs z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-mauve block">
                    Execution Benchmark
                  </span>
                  <h3 className="text-sm font-bold text-white mt-1">
                    Constructability First
                  </h3>
                  <p className="mt-1 text-xs text-ivory/90 leading-relaxed">
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
        <Container>
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
      <section className="py-20 sm:py-28 bg-white border-b border-silver">
        <Container>
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
                  className="bg-white p-7 sm:p-8 border border-silver hover:border-burgundy transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
                >
                  <div>
                    {/* Step indicator & icon */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-silver/50">
                      <span className="text-2xl font-black font-mono text-wine group-hover:text-burgundy transition-colors">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 flex items-center justify-center bg-ivory border border-silver text-burgundy group-hover:bg-burgundy group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-charcoal group-hover:text-burgundy transition-colors">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-silver/50 text-xs font-semibold text-charcoal/50 uppercase tracking-wider">
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
      <section className="py-20 sm:py-28 bg-ivory border-b border-silver">
        <Container>
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-14 border border-silver shadow-sm text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-ivory border border-silver text-burgundy">
              <HiOutlineFolderOpen className="w-8 h-8" aria-hidden="true" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-wine">
              Selected Works
            </span>

            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Portfolio Under Curation
            </h2>

            <p className="mt-4 text-sm sm:text-base text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
              Our recent architectural case studies, structural project photographs, and engineering documentation are currently being curated for publication. Every build reflects our rigorous commitment to quality craftsmanship and structural permanence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/projects" variant="corporate" size="md" icon={HiArrowRight}>
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
