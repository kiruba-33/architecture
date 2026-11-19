import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CallToAction from '../components/common/CallToAction'
import ProjectGrid from '../components/projects/ProjectGrid'
import { projects } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'

/**
 * Projects Portfolio Overview Page (`/projects`).
 * Displays curated architectural concept studies and design explorations
 * demonstrating Architecture One's international studio design standards.
 */
export default function ProjectsPage() {
  usePageMeta(
    'Architecture Portfolio & Conceptual Studies | Architecture One',
    'Explore curated architectural concept studies, sculptural spatial explorations, and material research demonstrating our design discipline.',
    {
      ogImage: '/images/portfolio/portfolio-1.jpg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Architecture Portfolio & Conceptual Studies',
        description:
          'A curated showcase of conceptual architectural studies, organic residences, and spatial explorations.',
      },
    }
  )

  return (
    <div className="flex-1 flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL PORTFOLIO HERO
      ───────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="SAMPLE PORTFOLIO"
        title="Conceptual Architecture & Spatial Design Studies"
        description="A curated demonstration portfolio illustrating our spatial philosophy, structural rigor, and material sensibility through selected architectural concepts."
        breadcrumbs={[{ label: 'Portfolio' }]}
      />

      {/* ─────────────────────────────────────────────────────────────
          2. PORTFOLIO INTRODUCTION & GRID SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 bg-ivory flex-1 border-b border-silver overflow-hidden">
        {/* Architectural Background Artwork: Design A (Topographic Contour Texture) */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.22] mix-blend-multiply"
          style={{ backgroundImage: 'url(/images/backgrounds/bg-topography.webp)' }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          {/* Subtle Editorial Disclaimer / Demonstration Context */}
          <div className="mb-12 p-4 sm:p-5 bg-white border-l-4 border-l-coral border border-silver flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs rounded-r-lg">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal block mb-1">
                Studio Demonstration Portfolio
              </span>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
                The entries presented below are conceptual design studies and spatial research explorations illustrating Architecture One’s design vocabulary, spatial methodology, and technical execution standards.
              </p>
            </div>
            <span className="shrink-0 text-[11px] font-mono uppercase tracking-widest text-charcoal px-3 py-1 bg-ivory border border-silver rounded-sm">
              7 Concept Studies
            </span>
          </div>

          <div className="max-w-3xl mb-12">
            <SectionHeading
              kicker="SELECTED CONCEPTS"
              title="Architectural & Structural Studies"
              subtitle="Every conceptual study investigates the delicate equilibrium between spatial emotion, material permanence, and engineering precision."
            />
          </div>

          {/* Project Grid with Client-Side Filtering */}
          <ProjectGrid projects={projects} />
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CONTACT CTA
      ───────────────────────────────────────────────────────────── */}
      <CallToAction
        kicker="START A CONVERSATION"
        title="Discuss Your Next Building Project"
        subtitle="Connect with our technical team to review blueprints, explore structural feasibility, or evaluate project timelines."
        primaryCta={{ label: 'Submit Project Enquiry', to: '/contact' }}
        secondaryCta={{ label: 'Explore Services', to: '/services' }}
      />
    </div>
  )
}
