import { Link } from 'react-router-dom'
import { HiArrowRight, HiMapPin } from 'react-icons/hi2'

/**
 * Reusable Project Card component.
 * Displays project cover image, category badge, title, location, summary, and detail link.
 *
 * @param {{
 *   project: {
 *     slug: string,
 *     title: string,
 *     category: string,
 *     location?: string,
 *     summary: string,
 *     coverImage: string
 *   }
 * }} props
 */
export default function ProjectCard({ project }) {
  return (
    <article className="group bg-white border border-silver hover:border-burgundy transition-all duration-300 hover:shadow-lg flex flex-col overflow-hidden">
      {/* Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
        <img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

        {/* Category Tag */}
        <span className="absolute top-4 left-4 bg-charcoal/90 text-ivory text-xs font-bold uppercase px-3 py-1 border border-white/10 tracking-wider">
          {project.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {project.location && (
            <div className="flex items-center gap-1.5 text-xs text-charcoal/60 mb-2">
              <HiMapPin className="w-4 h-4 text-wine shrink-0" aria-hidden="true" />
              <span>{project.location}</span>
            </div>
          )}

          <h3 className="text-card-h3 font-condensed font-bold text-charcoal group-hover:text-burgundy transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Action Link */}
        <div className="mt-6 pt-4 border-t border-silver/50">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-burgundy group-hover:text-wine transition-colors"
            aria-label={`View case study for ${project.title}`}
          >
            <span>View Case Study</span>
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
