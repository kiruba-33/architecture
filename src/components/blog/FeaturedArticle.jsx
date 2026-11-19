import { Link } from 'react-router-dom'
import { HiArrowRight, HiClock } from 'react-icons/hi2'

/**
 * Editorial Featured Article Presentation for The Architecture Journal.
 * Highlights the main article with a spacious 2-column or split editorial layout.
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
export default function FeaturedArticle({ article }) {
  if (!article) return null

  return (
    <article className="group bg-white border border-silver hover:border-coral transition-all duration-300 shadow-xs overflow-hidden rounded-lg mb-16 lg:mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Large Cover Image (7 columns on desktop) */}
        <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px] lg:min-h-[460px] overflow-hidden bg-charcoal">
          <Link
            to={`/blog/${article.slug}`}
            className="block w-full h-full"
            tabIndex={-1}
            aria-hidden="true"
          >
            <picture>
              <source srcSet={article.coverImage} type="image/webp" />
              <img
                src={article.coverImageJpg || article.coverImage}
                alt={article.title}
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-95 group-hover:opacity-100"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none lg:hidden" />
          </Link>

          {/* Featured Pill */}
          <span className="absolute top-4 left-4 bg-coral text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 shadow-sm rounded-sm">
            Featured Journal
          </span>
        </div>

        {/* Editorial Text Content (5 columns on desktop) */}
        <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
          <div>
            {/* Category & Meta */}
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-secondary mb-4">
              <span className="text-coral font-bold">{article.category}</span>
              <span>&bull;</span>
              <span>{article.displayDate}</span>
              {article.readTime && (
                <>
                  <span>&bull;</span>
                  <span className="inline-flex items-center gap-1 normal-case font-mono">
                    <HiClock className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{article.readTime}</span>
                  </span>
                </>
              )}
            </div>

            {/* Editorial Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-condensed font-bold text-charcoal group-hover:text-coral transition-colors leading-tight">
              <Link to={`/blog/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
              {article.description}
            </p>
          </div>

          {/* Action Link */}
          <div className="mt-8 pt-6 border-t border-silver/60">
            <Link
              to={`/blog/${article.slug}`}
              className="inline-flex items-center justify-center font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 bg-coral hover:bg-coral-dark text-white transition-all duration-200 gap-2 shadow-xs rounded"
              aria-label={`Read featured article: ${article.title}`}
            >
              <span>Read Full Article</span>
              <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
