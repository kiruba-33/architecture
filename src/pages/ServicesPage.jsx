import { useState } from 'react'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CallToAction from '../components/common/CallToAction'
import ServiceCard from '../components/services/ServiceCard'
import { services } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  HiOutlineClipboardDocumentList,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineChevronDown,
} from 'react-icons/hi2'

/**
 * Flagship Services Overview Page (`/services`).
 * Showcases all seven confirmed architectural and construction service categories.
 */
export default function ServicesPage() {
  usePageMeta(
    'Construction & Architectural Services | Corporate Capabilities',
    'Explore our seven core services: Vastu Planning, Elevation Design, General Construction, Renovation, Labour Contracting, Interior Work, and Waterproofing.',
    {
      ogImage: '/images/hero-home.jpg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Construction & Architectural Services',
        itemListElement: services.map((s, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: s.title,
          url: `/services/${s.slug}`,
        })),
      },
    }
  )

  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: 'How do Vastu planning and structural engineering integrate together?',
      answer:
        'Our Vastu planning is performed concurrently with preliminary CAD drafting. Rather than making post-structural adjustments, directional alignments, natural lighting vectors, and functional room zones are incorporated into the primary structural blueprint before foundation engineering commences.',
    },
    {
      question: 'Can individual services be commissioned independently?',
      answer:
        'Yes. While many clients select our turnkey package covering design through execution, all seven services—such as 3D Elevation Design, specialized Waterproofing, or Labour Contracting—can be engaged on a standalone contract basis.',
    },
    {
      question: 'How are on-site material quality and structural strength verified?',
      answer:
        'We enforce strict quality control on all raw materials including branded TMT steel, certified cement grades, and washed aggregates. For reinforced concrete pours, slump tests and concrete cube compressive strength tests are systematically conducted and recorded.',
    },
    {
      question: 'What protocols ensure long-term waterproofing reliability?',
      answer:
        'We apply multi-stage polymer-modified cementitious or elastomeric barrier systems followed by mandatory 72-hour ponding tests (flooding treated slabs with standing water) to confirm zero moisture ingress before laying floor screeds or tiles.',
    },
    {
      question: 'What documentation is provided during a renovation or structural retrofitting?',
      answer:
        'Prior to commencing work, a structural health audit is conducted. We document load-bearing lines, propping diagrams, MEP rerouting paths, and material specifications to guarantee safe, controlled execution without compromising building stability.',
    },
  ]

  return (
    <div className="flex-1 flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. INTERNAL PAGE HERO
      ───────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="OUR SERVICES"
        title="Complete Solutions for Every Stage of Construction"
        description="End-to-end building capabilities spanning traditional spatial orientation, modern 3D facade engineering, turnkey structural construction, renovation, and specialized civil contracting."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* ─────────────────────────────────────────────────────────────
          2. CAPABILITIES INTRODUCTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-silver">
        <Container>
          <div className="max-w-4xl">
            <SectionHeading
              kicker="INTEGRATED DELIVERY"
              title="A Cohesive Multi-Disciplinary Practice"
              subtitle="From conceptual architectural planning to final surface detailing, our practice operates with unified accountability."
            />
            <p className="mt-6 text-base sm:text-lg text-charcoal/70 leading-relaxed">
              Successful building projects require seamless collaboration across distinct technical trades. By maintaining in-house expertise in spatial planning, structural civil contracting, exterior elevation design, and specialized barrier protection, we eliminate the operational silos that cause construction delays and quality compromises.
            </p>
          </div>

          {/* Value highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-ivory border border-silver rounded-lg">
              <HiOutlineClipboardDocumentList className="w-8 h-8 text-coral mb-4" aria-hidden="true" />
              <h3 className="text-base font-bold text-charcoal">Pre-Construction Rigor</h3>
              <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Detailed blueprints, Vastu orientation, and 3D visual mockups eliminate guesswork before breaking ground.
              </p>
            </div>

            <div className="p-6 bg-ivory border border-silver rounded-lg">
              <HiOutlineCube className="w-8 h-8 text-coral mb-4" aria-hidden="true" />
              <h3 className="text-base font-bold text-charcoal">Structural Execution</h3>
              <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Supervised site operations, certified raw materials, and disciplined craftsmen ensure exact structural alignment.
              </p>
            </div>

            <div className="p-6 bg-ivory border border-silver rounded-lg">
              <HiOutlineShieldCheck className="w-8 h-8 text-coral mb-4" aria-hidden="true" />
              <h3 className="text-base font-bold text-charcoal">Protective Systems</h3>
              <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Advanced chemical and elastomeric barrier systems guard against moisture, corrosion, and long-term degradation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SEVEN CORE SERVICES DIRECTORY
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-ivory border-b border-silver overflow-hidden">
        {/* Architectural Background Artwork: Design B (Architectural Line Art / Elevation) */}
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-3/5 bg-contain bg-right-center bg-no-repeat pointer-events-none opacity-[0.16] mix-blend-multiply"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-lineart.webp)' }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="mb-14">
            <SectionHeading
              kicker="OUR EXPERTISE"
              title="Seven Core Capabilities"
              subtitle="Select any service to examine detailed scope of work, technical deliverables, execution processes, and related capabilities."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. USEFUL FAQS SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-silver">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionHeading
                align="center"
                kicker="TECHNICAL INSIGHTS"
                title="Frequently Asked Questions"
                subtitle="Practical information regarding our service coordination, engineering standards, and execution methodology."
              />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx

                return (
                  <div
                    key={idx}
                    className="border border-silver bg-white transition-colors overflow-hidden rounded-lg"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral hover:bg-ivory/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-base sm:text-lg text-charcoal font-condensed">
                        {faq.question}
                      </span>
                      <HiOutlineChevronDown
                        className={`w-5 h-5 text-coral shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal/70 leading-relaxed border-t border-silver/50 bg-ivory/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CONTACT CTA
      ───────────────────────────────────────────────────────────── */}
      <CallToAction
        kicker="DISCUSS YOUR PROJECT"
        title="Require Specialized Architectural or Contracting Services?"
        subtitle="Our technical team is available to review your site parameters, blueprints, or scope schedule."
        primaryCta={{ label: 'Submit Project Enquiry', to: '/contact' }}
        secondaryCta={{ label: 'About Our Practice', to: '/about' }}
      />
    </div>
  )
}
