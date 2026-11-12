import { useState } from 'react'
import ProjectCard from './ProjectCard'
import Button from '../common/Button'
import { HiOutlineFolderOpen, HiArrowRight } from 'react-icons/hi2'

/**
 * Reusable Project Grid with client-side category filtering and a designed empty state.
 *
 * @param {{ projects: Array<any> }} props
 */
export default function ProjectGrid({ projects = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Only consider projects marked as published
  const publishedProjects = projects.filter((p) => p.isPublished === true)

  // Derive categories that actually have at least one published project
  const availableCategories = Array.from(
    new Set(publishedProjects.map((p) => p.category).filter(Boolean))
  )

  // Show filter buttons only if multiple meaningful categories exist
  const showCategoryFilters = availableCategories.length > 1

  const filteredProjects =
    selectedCategory === 'All'
      ? publishedProjects
      : publishedProjects.filter((p) => p.category === selectedCategory)

  // Polished and intentional empty state when no verified projects are published
  if (publishedProjects.length === 0) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 sm:p-14 border border-silver text-center shadow-xs">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-ivory border border-silver text-burgundy">
          <HiOutlineFolderOpen className="w-8 h-8" aria-hidden="true" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-wine">
          Portfolio Curation
        </span>

        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
          Selected Works in Preparation
        </h2>

        <p className="mt-4 text-sm sm:text-base text-charcoal/70 leading-relaxed">
          Project portfolio documentation is currently being prepared. Please contact us to discuss your project requirements.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button to="/contact" variant="primary" size="md" icon={HiArrowRight}>
            Discuss Your Project
          </Button>
          <Button to="/services" variant="outline" size="md">
            Explore Services
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Category filter tabs - Only displayed when multiple populated categories exist */}
      {showCategoryFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors border ${
              selectedCategory === 'All'
                ? 'bg-burgundy text-white border-burgundy'
                : 'bg-white text-charcoal border-silver hover:border-burgundy'
            }`}
          >
            All Works ({publishedProjects.length})
          </button>

          {availableCategories.map((category) => {
            const count = publishedProjects.filter((p) => p.category === category).length

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors border ${
                  selectedCategory === category
                    ? 'bg-burgundy text-white border-burgundy'
                    : 'bg-white text-charcoal border-silver hover:border-burgundy'
                }`}
              >
                {category} ({count})
              </button>
            )
          })}
        </div>
      )}

      {/* Responsive Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
