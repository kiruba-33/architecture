/**
 * Projects Data Architecture.
 *
 * Supported Categories:
 * - 'Residential'
 * - 'Commercial'
 * - 'Renovation'
 * - 'Interior'
 *
 * Data Policy:
 * - Only verified projects with actual site documentation and photography are published.
 * - In accordance with data integrity guidelines, the projects array is kept strictly empty
 *   until verified project entries are supplied by the business owner.
 * - Only projects with `isPublished: true` will appear in public listings, category filters, and detail routes.
 *
 * Example Schema for future verified projects:
 * {
 *   id: "landmark-villa-residence",
 *   slug: "landmark-villa-residence",
 *   title: "Contemporary Villa Residence",
 *   category: "Residential",
 *   location: "Verified Location",
 *   summary: "Short editorial summary of the residential project.",
 *   description: "Comprehensive architectural and engineering description.",
 *   requirements: [
 *     "Spatial alignment according to directional Vastu principles",
 *     "Natural daylight optimization with double-height central atrium"
 *   ],
 *   scopeOfWork: [
 *     "Full structural concrete framing and deep pile foundation",
 *     "Custom 3D exterior facade louvers and glass glazing",
 *     "Integrated plumbing, drainage, and electrical conduit network"
 *   ],
 *   coverImage: "https://images.unsplash.com/...",
 *   galleryImages: [
 *     "https://images.unsplash.com/...",
 *     "https://images.unsplash.com/..."
 *   ],
 *   relatedProjects: ["commercial-office-hub"],
 *   isPublished: true,
 *   seoTitle: "Contemporary Villa Residence | Project Case Study",
 *   seoDescription: "Explore this residential build featuring structural concrete framing, Vastu orientation, and contemporary facade detailing."
 * }
 */

export const PROJECT_CATEGORIES = [
  'Residential',
  'Commercial',
  'Renovation',
  'Interior',
]

export const projects = []
