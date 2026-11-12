import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CallToAction from '../components/common/CallToAction'
import ProjectGrid from '../components/projects/ProjectGrid'
import { projects } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'

/**
 * Projects Portfolio Overview Page (`/projects`).
 * Displays verified project case studies with dynamic category filtering or a dignified empty state.
 */
export default function ProjectsPage() {
  usePageMeta(
    'Project Portfolio | Selected Architecture & Construction Works',
    'Explore verified case studies spanning residential architecture, commercial civil construction, structural renovations, and interior fit-outs.',
    {
      ogImage: '/images/home-showcase.jpg',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Project Portfolio',
        description:
          'Selected architectural structures, residential transformations, and commercial engineering projects.',
      },
    }
  )

  return (
    <div className="flex-1 flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL PORTFOLIO HERO
      ───────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="OUR WORK"
        title="Explore Our Approach to Construction and Design"
        description="A curated showcase of architectural structures, residential transformations, and commercial engineering projects."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      {/* ─────────────────────────────────────────────────────────────
          2. PORTFOLIO INTRODUCTION & GRID SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-ivory flex-1 border-b border-silver">
        <Container>
          <div className="max-w-3xl mb-14">
            <SectionHeading
              kicker="SELECTED WORKS"
              title="Architectural & Structural Portfolio"
              subtitle="Every building we execute demonstrates our uncompromising focus on structural integrity, spatial equilibrium, and enduring craftsmanship."
            />
          </div>

          {/* Project Grid with Client-Side Filtering or Intentional Empty State */}
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
