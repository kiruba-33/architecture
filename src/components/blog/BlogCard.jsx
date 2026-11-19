import { Link } from 'react-router-dom'
import { HiArrowRight, HiClock } from 'react-icons/hi2'

/**
 * Editorial Blog Card component for The Architecture Journal.
 * Displays cover image, category, publication date, title, excerpt, and read link.
 *
 * @param {{
 *   article: {
 *     slug: string,
 *     title: string,
 *     category: string,
 *     description: string,
 *     coverImage: string,
 *     coverImageJpg?: string,
 *     displayDate?: string,
 *     readTime?: string,
 *   }
 * }} props
 */
export default function BlogCard({ article }) {
  return (
    <article className="group bg-white border border-silver hover:border-coral transition-all duration-300 hover:shadow-md flex flex-col overflow-hidden rounded-lg">
      {/* Cover Image Container */}
      <Link
        to={`/blog/${article.slug}`}
        className="relative aspect-[16/10] overflow-hidden bg-charcoal block"
        tabIndex={-1}
        aria-hidden="true"
      >
        <picture>
          <source srcSet={article.coverImage} type="image/webp" />
          <img
            src={article.coverImageJpg || article.coverImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-95 group-hover:opacity-100"
          />
        </picture>

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />

        {/* Category Tag (Top-Left) */}
        <span className="absolute top-3.5 left-3.5 bg-charcoal/85 backdrop-blur-xs text-ivory text-[11px] font-condensed uppercase tracking-wider px-3 py-1 border border-white/15 rounded-sm">
          {article.category}
        </span>
      </Link>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Row: Date & Read Time */}
          <div className="flex items-center gap-3 text-xs text-secondary mb-3 font-mono">
            {article.displayDate && <span>{article.displayDate}</span>}
            {article.displayDate && article.readTime && <span>&bull;</span>}
            {article.readTime && (
              <span className="inline-flex items-center gap-1">
                <HiClock className="w-3.5 h-3.5 text-secondary shrink-0" aria-hidden="true" />
                <span>{article.readTime}</span>
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-condensed font-bold text-charcoal group-hover:text-coral transition-colors leading-snug">
            <Link to={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          {/* Description Excerpt */}
          <p className="mt-3 text-sm text-charcoal/75 leading-relaxed line-clamp-3 font-light">
            {article.description}
          </p>
        </div>

        {/* Action Link */}
        <div className="mt-6 pt-4 border-t border-silver/50">
          <Link
            to={`/blog/${article.slug}`}
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-coral group-hover:text-secondary transition-colors"
            aria-label={`Read article: ${article.title}`}
          >
            <span>Read Article</span>
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
