import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'

/**
 * Premium Architectural Portfolio Card component.
 * Displays conceptual design visual, category tag, sample study badge,
 * typology, title, description, and detail case study link.
 *
 * @param {{
 *   project: {
 *     slug: string,
 *     title: string,
 *     category: string,
 *     badge?: string,
 *     typology?: string,
 *     summary: string,
 *     coverImage: string,
 *     isSample?: boolean
 *   }
 * }} props
 */
export default function ProjectCard({ project }) {
  const badgeText = project.badge || (project.isSample ? 'Concept Study' : 'Project Case Study')

  return (
    <article className="group bg-white border border-silver hover:border-coral transition-all duration-300 hover:shadow-md flex flex-col overflow-hidden rounded-lg">
      {/* Architectural Image Container with Subtle Hover Zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
        <img
          src={project.coverImage}
          alt={`Architectural study: ${project.title}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        {/* Soft Ambient Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20" />

        {/* Category Tag (Top-Left) */}
        <span className="absolute top-3.5 left-3.5 bg-charcoal/85 backdrop-blur-xs text-ivory text-[11px] font-condensed uppercase tracking-wider px-3 py-1 border border-white/15 rounded-sm">
          {project.category}
        </span>

        {/* Sample Concept Study Badge (Top-Right) */}
        <span className="absolute top-3.5 right-3.5 bg-coral/95 backdrop-blur-xs text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 tracking-widest border border-white/20 rounded-sm">
          {badgeText}
        </span>
      </div>

      {/* Card Editorial Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Architectural Typology */}
          {project.typology && (
            <p className="text-[11px] font-mono uppercase tracking-wider text-secondary mb-2">
              {project.typology}
            </p>
          )}

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-condensed font-bold text-charcoal group-hover:text-coral transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="mt-3 text-sm text-charcoal/75 leading-relaxed line-clamp-3 font-light">
            {project.summary}
          </p>
        </div>

        {/* Action Link */}
        <div className="mt-6 pt-4 border-t border-silver/50">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-coral group-hover:text-secondary transition-colors"
            aria-label={`Explore architectural study for ${project.title}`}
          >
            <span>Explore Design Study</span>
            <HiArrowRight
              className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  )
}
