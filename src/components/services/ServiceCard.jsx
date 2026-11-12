import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'

/**
 * Reusable Service Card component.
 * Displays service thumbnail, title, description, and link to `/services/:slug`.
 *
 * @param {{
 *   service: {
 *     title: string,
 *     slug: string,
 *     shortDesc: string,
 *     heroImage: string,
 *     scopeOfWork: string[]
 *   },
 *   index?: number
 * }} props
 */
export default function ServiceCard({ service, index = 0 }) {
  const stepNumber = String(index + 1).padStart(2, '0')

  return (
    <article className="group bg-white border border-silver hover:border-burgundy transition-all duration-300 hover:shadow-lg flex flex-col overflow-hidden">
      {/* Image Container with subtle hover zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
        <img
          src={service.heroImage}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

        {/* Index indicator badge */}
        <span className="absolute top-4 left-4 bg-charcoal/90 text-ivory text-xs font-mono font-bold px-2.5 py-1 border border-white/10 tracking-widest">
          {stepNumber}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-card-h3 font-condensed font-bold text-charcoal group-hover:text-burgundy transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed line-clamp-3">
            {service.shortDesc}
          </p>

          {/* Key Scope Preview */}
          {service.scopeOfWork && service.scopeOfWork.length > 0 && (
            <div className="mt-4 pt-4 border-t border-silver/50">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/60 block mb-2">
                Scope Highlights
              </span>
              <ul className="space-y-1 text-xs text-charcoal/80">
                {service.scopeOfWork.slice(0, 2).map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5 truncate">
                    <span className="w-1 h-1 rounded-full bg-burgundy shrink-0" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Link */}
        <div className="mt-6 pt-4 border-t border-silver/50">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-burgundy group-hover:text-wine transition-colors"
            aria-label={`View details for ${service.title}`}
          >
            <span>Explore Service</span>
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
