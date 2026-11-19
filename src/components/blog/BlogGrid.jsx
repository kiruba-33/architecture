import { useState } from 'react'
import BlogCard from './BlogCard'
import { BLOG_CATEGORIES } from '../../data/blog'

/**
 * Editorial Blog Grid with real-time category filtering.
 *
 * @param {{
 *   articles: Array<any>,
 *   hideFeatured?: boolean,
 *   featuredSlug?: string
 * }} props
 */
export default function BlogGrid({
  articles = [],
  hideFeatured = false,
  featuredSlug = '',
}) {
  const [selectedCategory, setSelectedCategory] = useState('All Articles')

  // Optionally filter out the featured article from the general grid when 'All Articles' is active,
  // or show all. Let's make sure all articles are discoverable.
  const displayArticles = hideFeatured && featuredSlug && selectedCategory === 'All Articles'
    ? articles.filter((a) => a.slug !== featuredSlug)
    : articles

  const filteredArticles =
    selectedCategory === 'All Articles'
      ? displayArticles
      : articles.filter((a) => a.category === selectedCategory)

  return (
    <div>
      {/* Category Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-14">
        {BLOG_CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category
          const count =
            category === 'All Articles'
              ? articles.length
              : articles.filter((a) => a.category === category).length

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer rounded ${
                isSelected
                  ? 'bg-coral text-white border-coral shadow-xs'
                  : 'bg-white text-charcoal border-silver hover:border-coral hover:text-coral'
              }`}
            >
              <span>{category}</span>
              <span
                className={`ml-1.5 text-[10px] font-mono ${
                  isSelected ? 'text-white/80' : 'text-secondary'
                }`}
              >
                ({count})
              </span>
            </button>
          )
        })}
      </div>

      {/* Grid of Articles */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-silver p-8 rounded-lg">
          <p className="text-sm text-secondary font-mono uppercase tracking-wider">
            No articles found in this category.
          </p>
        </div>
      )}
    </div>
  )
}
