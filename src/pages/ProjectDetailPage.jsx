import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CallToAction from '../components/common/CallToAction'
import NotFound from '../components/common/NotFound'
import Button from '../components/common/Button'
import ProjectGallery from '../components/projects/ProjectGallery'
import { projects } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  HiCheckCircle,
  HiMapPin,
  HiTag,
  HiArrowRight,
  HiOutlineClipboardDocumentCheck,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2'

/**
 * Reusable Project Case Study Detail Page (`/projects/:slug`).
 * Renders verified case studies or falls back to NotFound for invalid/unpublished slugs.
 */
export default function ProjectDetailPage() {
  const { slug } = useParams()

  // Match only verified and published projects
  const project = projects.find(
    (p) => p.slug === slug && p.isPublished === true
  )

  // Dynamic Metadata
  usePageMeta(
    project?.seoTitle || 'Project Case Study | Architecture & Civil Practice',
    project?.seoDescription || project?.summary,
    {
      ogImage: project?.coverImage,
      jsonLd: project
        ? {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: project.title,
            description: project.summary,
            image: project.coverImage,
          }
        : undefined,
    }
  )

  // Fallback for invalid or unpublished project slugs
  if (!project) {
    return (
      <div className="flex-1 flex flex-col">
        <PageHero
          variant="simple"
          eyebrow="STATUS 404"
          title="Project Not Located"
          description="The requested project documentation could not be identified in our published portfolio."
          breadcrumbs={[
            { label: 'Projects', path: '/projects' },
            { label: 'Unknown Project' },
          ]}
        />
        <NotFound
          code="404"
          title="Project Case Study Not Found"
          message={`No published case study matching "${slug}" could be located in our portfolio. Case studies are published only after thorough verification.`}
          actionText="Return to Portfolio"
          actionTo="/projects"
          secondaryText="Explore Services"
          secondaryTo="/services"
        />
      </div>
    )
  }

  // Resolve related published projects
  const relatedProjects = projects.filter(
    (p) =>
      p.isPublished === true &&
      project.relatedProjects?.includes(p.slug) &&
      p.slug !== project.slug
  )

  return (
    <div className="flex-1 flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL PROJECT CASE STUDY HERO
      ───────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow={`PROJECT DETAILS / ${project.category?.toUpperCase() || 'CASE STUDY'}`}
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          { label: 'Projects', path: '/projects' },
          { label: project.title },
        ]}
      />

      {/* ─────────────────────────────────────────────────────────────
          2. PROJECT OVERVIEW & METRICS SIDEBAR
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-silver">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Comprehensive Narrative */}
            <div className="lg:col-span-8">
              <SectionHeading
                kicker="CASE STUDY"
                title="Project Overview & Execution Details"
                subtitle="Detailed architectural and structural execution documentation."
              />

              <div className="mt-6 text-base sm:text-lg text-charcoal/70 leading-relaxed space-y-4">
                <p>{project.description}</p>
              </div>

              {/* Requirements & Challenges */}
              {project.requirements && project.requirements.length > 0 && (
                <div className="mt-10 pt-8 border-t border-silver/50">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-4 flex items-center gap-2">
                    <HiOutlineClipboardDocumentCheck className="w-5 h-5 text-burgundy" aria-hidden="true" />
                    <span>Project Requirements</span>
                  </h3>
                  <ul className="space-y-3">
                    {project.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-charcoal/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-wine shrink-0 mt-2" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Scope of Work */}
              {project.scopeOfWork && project.scopeOfWork.length > 0 && (
                <div className="mt-10 pt-8 border-t border-silver/50">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-4 flex items-center gap-2">
                    <HiOutlineWrenchScrewdriver className="w-5 h-5 text-burgundy" aria-hidden="true" />
                    <span>Delivered Scope of Work</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {project.scopeOfWork.map((item, idx) => (
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
              )}
            </div>

            {/* Right Column: Key Project Facts Sidebar */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="bg-charcoal text-white p-7 sm:p-8 border-t-4 border-t-burgundy shadow-xl">
                <h3 className="text-lg font-bold text-white mb-6 pb-4 border-b border-charcoal-dark">
                  Project Facts
                </h3>

                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-mauve flex items-center gap-1.5">
                      <HiTag className="w-4 h-4 text-mauve" aria-hidden="true" />
                      <span>Category</span>
                    </dt>
                    <dd className="mt-1 font-semibold text-white">
                      {project.category}
                    </dd>
                  </div>

                  {project.location && (
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-mauve flex items-center gap-1.5">
                        <HiMapPin className="w-4 h-4 text-mauve" aria-hidden="true" />
                        <span>Location</span>
                      </dt>
                      <dd className="mt-1 font-semibold text-white">
                        {project.location}
                      </dd>
                    </div>
                  )}

                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-mauve">
                      Documentation Status
                    </dt>
                    <dd className="mt-1 font-semibold text-ivory">
                      Verified Case Study
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 pt-6 border-t border-charcoal-dark">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    icon={HiArrowRight}
                    className="w-full text-center"
                  >
                    Discuss Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PROJECT GALLERY
      ───────────────────────────────────────────────────────────── */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-20 sm:py-24 bg-ivory border-b border-silver">
          <Container>
            <div className="mb-12">
              <SectionHeading
                kicker="DOCUMENTATION GALLERY"
                title="Site Photography & Detailing"
                subtitle="Captured views of completed structures, interior spaces, and facade execution."
              />
            </div>

            <ProjectGallery images={project.galleryImages} title={project.title} />
          </Container>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. RELATED PROJECTS
      ───────────────────────────────────────────────────────────── */}
      {relatedProjects.length > 0 && (
        <section className="py-20 sm:py-24 bg-white border-b border-silver">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <SectionHeading
                kicker="PORTFOLIO"
                title="Related Project Case Studies"
                subtitle="Other completed structures within similar building typologies."
              />
              <Button to="/projects" variant="outline" size="sm" icon={HiArrowRight}>
                View All Works
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relProject) => (
                <Link
                  key={relProject.slug}
                  to={`/projects/${relProject.slug}`}
                  className="group bg-white p-6 border border-silver hover:border-burgundy transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-wine block mb-2">
                      {relProject.category}
                    </span>
                    <h4 className="text-base font-bold text-charcoal group-hover:text-burgundy transition-colors">
                      {relProject.title}
                    </h4>
                    <p className="mt-2 text-xs text-charcoal/70 leading-relaxed line-clamp-2">
                      {relProject.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-silver/50 flex items-center text-xs font-semibold text-burgundy group-hover:text-wine transition-colors">
                    <span>View Case Study</span>
                    <HiArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. CONTACT CTA
      ───────────────────────────────────────────────────────────── */}
      <CallToAction
        kicker="BUILD WITH PRECISION"
        title="Planning a Similar Architectural Project?"
        subtitle="Connect with our technical team to discuss project requirements, timelines, or feasibility."
        primaryCta={{ label: 'Submit Project Enquiry', to: '/contact' }}
        secondaryCta={{ label: 'Explore Services', to: '/services' }}
      />
    </div>
  )
}
