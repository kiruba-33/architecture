/**
 * Architecture One — The Architecture Journal Data Architecture.
 *
 * Editorial articles exploring architectural space, natural materials,
 * organic form, light, sustainability, and structural tactility.
 */

export const BLOG_CATEGORIES = [
  'All Articles',
  'Architecture',
  'Design',
  'Materials',
  'Sustainability',
]

export const articles = [
  {
    id: 'the-art-of-architectural-space',
    slug: 'the-art-of-architectural-space',
    title: 'The Art of Architectural Space',
    category: 'Architecture',
    description:
      'How architectural volume, geometric proportion, and deliberate spatial voids shape human emotion and movement through built environments.',
    coverImage: '/images/blog/blog-1.webp',
    coverImageJpg: '/images/blog/blog-1.jpg',
    publishedDate: '2026-11-15',
    displayDate: 'November 15, 2026',
    readTime: '5 min read',
    isFeatured: true,
    seoTitle: 'The Art of Architectural Space | The Architecture Journal',
    seoDescription:
      'Explore the architectural dialogue between solid mass and void, geometric proportion, and the emotional resonance of spatial choreography.',
    relatedSlugs: ['understanding-light-and-shadow', 'the-beauty-of-organic-architecture'],
    sections: [
      {
        type: 'lead',
        text: 'Architecture begins not with the wall, but with the space enclosed within it. While walls, columns, and slabs constitute the physical reality of construction, the true essence of architecture lies in the intangible void where life unfolds.',
      },
      {
        type: 'heading2',
        text: 'The Dialectic of Solid and Void',
      },
      {
        type: 'paragraph',
        text: 'Every built form establishes an ongoing dialogue between enclosure and openness. Monolithic stone or concrete surfaces serve to delineate limits, yet their primary purpose is to sculpt volume. When an architect carves an opening or steps back a floor plate, the void takes on physical presence. This manipulation of negative space determines how acoustic sound travels, how daylight circulates, and how inhabitants perceive room boundaries.',
      },
      {
        type: 'quote',
        text: 'Space and light and order. Those are the things that men need just as much as they need bread or a place to sleep.',
        author: 'Architectural Philosophy Notebook',
      },
      {
        type: 'heading2',
        text: 'Choreography of Compression and Release',
      },
      {
        type: 'paragraph',
        text: 'One of the most powerful tools in spatial composition is the intentional sequence of compression and release. Moving from a low-ceilinged, intimate threshold into a double-height central volume creates an immediate visceral sensation of expansion and dignity. This spatial cadence guides occupants intuitively through a building without relying on signage or rigid compartmentalization.',
      },
      {
        type: 'paragraph',
        text: 'By calibrating room ratios—balancing width, depth, and vertical datum—architectural spaces can induce calmness, stimulate concentration, or inspire communal assembly. In contemporary practice, this requires synthesizing spatial design sensitivity with structural engineering discipline.',
      },
      {
        type: 'heading2',
        text: 'Human Scale and Proportion',
      },
      {
        type: 'paragraph',
        text: 'Regardless of a project’s monumental ambitions, architectural space must remain rooted in human scale. Subtle details—the height of a window datum, the thickness of a portal reveal, the texture of a low bench—ground expansive volumes, ensuring that vast geometric spaces retain warmth, tactile dignity, and a sense of shelter.',
      },
    ],
  },
  {
    id: 'designing-with-natural-materials',
    slug: 'designing-with-natural-materials',
    title: 'Designing with Natural Materials',
    category: 'Materials',
    description:
      'Exploring the permanence, ecological resilience, and sensory depth of raw stone, rammed earth, and untreated timber in contemporary practice.',
    coverImage: '/images/blog/blog-2.webp',
    coverImageJpg: '/images/blog/blog-2.jpg',
    publishedDate: '2026-11-10',
    displayDate: 'November 10, 2026',
    readTime: '6 min read',
    isFeatured: false,
    seoTitle: 'Designing with Natural Materials | The Architecture Journal',
    seoDescription:
      'An architectural perspective on material permanence, petrographic resilience, and the tactile depth of raw mineral substrates.',
    relatedSlugs: ['the-influence-of-texture-in-architecture', 'a-thoughtful-approach-to-sustainable-design'],
    sections: [
      {
        type: 'lead',
        text: 'Natural materials possess an inherent memory. Formed over geological epochs or biological cycles, stone, earth, and wood imbue built structures with a grounded authenticity that synthetic composites cannot replicate.',
      },
      {
        type: 'heading2',
        text: 'The Thermal and Petrographic Integrity of Raw Stone',
      },
      {
        type: 'paragraph',
        text: 'Limestone, sandstone, and travertine are not merely exterior claddings; they are high-performance structural shields. Their dense crystalline matrix acts as a natural thermal flywheel, absorbing daytime solar radiation and gradually releasing warmth during cooler evening cycles. In regional climates subject to intense diurnal temperature swings, this natural thermal lag dramatically reduces mechanical cooling loads.',
      },
      {
        type: 'heading2',
        text: 'Earth as Structure and Microclimate Moderator',
      },
      {
        type: 'paragraph',
        text: 'Rammed earth and stabilized adobe masonry represent centuries of ecological adaptation. Beyond their low embodied energy and circular lifecycle, monolithic earth walls actively regulate interior relative humidity. As environmental moisture rises, the porous clay minerals absorb vapor; when conditions dry, moisture is released back into the air, maintaining a stable indoor microclimate.',
      },
      {
        type: 'quote',
        text: 'Materials must be allowed to speak their own language. Stone wants to be stacked; timber wants to be spanned; earth wants to be compressed.',
        author: 'Material Studies Archive',
      },
      {
        type: 'heading2',
        text: 'The Dignity of Natural Patina',
      },
      {
        type: 'paragraph',
        text: 'While synthetic surfaces degrade under ultraviolet exposure and environmental weathering, natural materials evolve with grace. Raw copper, bronze, and untreated cedar acquire rich protective oxide patinas over decades, deepening in visual complexity. Choosing materials that weather with dignity ensures that a building matures into its surrounding landscape rather than deteriorating against it.',
      },
    ],
  },
  {
    id: 'the-beauty-of-organic-architecture',
    slug: 'the-beauty-of-organic-architecture',
    title: 'The Beauty of Organic Architecture',
    category: 'Architecture',
    description:
      'Investigating how curvilinear forms, biophilic geometry, and topographic integration dissolve the boundary between building and landscape.',
    coverImage: '/images/blog/blog-3.webp',
    coverImageJpg: '/images/blog/blog-3.jpg',
    publishedDate: '2026-11-04',
    displayDate: 'November 4, 2026',
    readTime: '5 min read',
    isFeatured: false,
    seoTitle: 'The Beauty of Organic Architecture | The Architecture Journal',
    seoDescription:
      'How organic architectural principles, curvilinear structural envelopes, and topographic integration harmonize built forms with nature.',
    relatedSlugs: ['the-art-of-architectural-space', 'a-thoughtful-approach-to-sustainable-design'],
    sections: [
      {
        type: 'lead',
        text: 'Organic architecture does not merely imitate natural silhouettes; it adopts nature’s underlying structural logic—where every curve, thickness, and transition emerges in response to forces, gravity, and environmental context.',
      },
      {
        type: 'heading2',
        text: 'Form Follows Topography',
      },
      {
        type: 'paragraph',
        text: 'Traditional construction frequently begins by leveling terrain—imposing an artificial Cartesian plateau onto existing contours. Organic architectural practice takes the inverse approach: buildings are stepped, folded, or cantilevered along natural bedrock and ridge lines. By embedding structures directly into existing grade, wind resistance is minimized and natural earth-bermed insulation is maximized.',
      },
      {
        type: 'heading2',
        text: 'Curvilinear Structural Efficiency',
      },
      {
        type: 'paragraph',
        text: 'Curvilinear surfaces are inherently stronger than planar orthogonal walls. Much like an eggshell or a canyon riverbed, double-curved shells distribute lateral forces across their entire continuous membrane. This structural efficiency allows for sweeping, expressive volumes constructed with minimal material waste and without the clutter of intermediate support columns.',
      },
      {
        type: 'quote',
        text: 'The building is not on the landscape, but of the landscape. It grows from the soil as naturally as the trees and rock formations around it.',
        author: 'Organic Design Treatise',
      },
      {
        type: 'heading2',
        text: 'Biophilic Well-Being and Spatial Flow',
      },
      {
        type: 'paragraph',
        text: 'Human sensory systems evolved within organic landscapes devoid of rigid straight angles. Introducing gentle radiused corners, continuous perimeter sightlines, and natural air currents induces a measurable neurological sense of ease. In residential and public spaces, organic geometry softens domestic life, encouraging calm, fluid circulation.',
      },
    ],
  },
  {
    id: 'understanding-light-and-shadow',
    slug: 'understanding-light-and-shadow',
    title: 'Understanding Light and Shadow',
    category: 'Design',
    description:
      'The temporal rhythm of natural daylight: examining chiaroscuro apertures, zenithal openings, and rhythmic shadow-casting in structural design.',
    coverImage: '/images/blog/blog-4.webp',
    coverImageJpg: '/images/blog/blog-4.jpg',
    publishedDate: '2026-10-28',
    displayDate: 'October 28, 2026',
    readTime: '4 min read',
    isFeatured: false,
    seoTitle: 'Understanding Light and Shadow | The Architecture Journal',
    seoDescription:
      'Examining how natural daylight, deep architectural reveals, and chiaroscuro shadow casting define spatial depth and emotional atmosphere.',
    relatedSlugs: ['the-art-of-architectural-space', 'the-influence-of-texture-in-architecture'],
    sections: [
      {
        type: 'lead',
        text: 'Daylight is architecture’s most dynamic building material. Unlike static concrete or stone, natural illumination shifts continuously throughout the day and across seasons, animating architectural surfaces with living light and shadow.',
      },
      {
        type: 'heading2',
        text: 'The Chiaroscuro of Structural Apertures',
      },
      {
        type: 'paragraph',
        text: 'Light requires darkness to achieve its emotional weight. A room flooded uniformly with diffuse, shadowless illumination quickly feels sterile and monotonous. In contrast, deep window reveals, coffered ceiling apertures, and rhythmic colonnades create zones of chiaroscuro—sharp transitions between radiant sunbeams and cool shaded retreats that reveal the textural quality of masonry.',
      },
      {
        type: 'heading2',
        text: 'Zenithal Illumination and Spatial Sanctity',
      },
      {
        type: 'paragraph',
        text: 'Light introduced from above carries a sacred, contemplative quality. Overhead skylights and ocular voids direct sunlight downward along fluted vertical walls, tracking the solar azimuth across interior stone floors like a giant sundial. This zenithal illumination heightens verticality and creates an introspective atmosphere insulated from external distractions.',
      },
      {
        type: 'quote',
        text: 'The sun does not realize how wonderful it is until after a room is made.',
        author: 'Louis Kahn Architectural Notes',
      },
      {
        type: 'heading2',
        text: 'Controlling Glare through Layered Filtration',
      },
      {
        type: 'paragraph',
        text: 'Harnessing daylight requires precise solar calibration to prevent thermal overheating and blinding glare. Implementing exterior brise-soleil fins, perforated terracotta screens, and deep overhangs filters intense direct sunlight into soft, ambient illumination, ensuring spaces remain comfortable throughout peak midday hours.',
      },
    ],
  },
  {
    id: 'a-thoughtful-approach-to-sustainable-design',
    slug: 'a-thoughtful-approach-to-sustainable-design',
    title: 'A Thoughtful Approach to Sustainable Design',
    category: 'Sustainability',
    description:
      'Moving beyond superficial certifications to passive solar engineering, thermal mass optimization, and long-term structural permanence.',
    coverImage: '/images/blog/blog-5.webp',
    coverImageJpg: '/images/blog/blog-5.jpg',
    publishedDate: '2026-10-20',
    displayDate: 'October 20, 2026',
    readTime: '6 min read',
    isFeatured: false,
    seoTitle: 'A Thoughtful Approach to Sustainable Design | The Architecture Journal',
    seoDescription:
      'Passive solar principles, thermal mass engineering, and material lifecycle permanence as the core pillars of authentic sustainable architecture.',
    relatedSlugs: ['designing-with-natural-materials', 'the-beauty-of-organic-architecture'],
    sections: [
      {
        type: 'lead',
        text: 'Authentic sustainability is not achieved by attaching solar panels to an inefficient building. It begins with foundational spatial orientation, passive climate moderation, and constructing buildings designed to endure for centuries.',
      },
      {
        type: 'heading2',
        text: 'Passive Solar Geometry and Orientation',
      },
      {
        type: 'paragraph',
        text: 'Long before mechanical HVAC systems existed, vernacular builders achieved thermal comfort through disciplined orientation. Calibrating building axis to prevailing winds, shading southern and western glazing during peak solar hours, and organizing living spaces around sheltered central courtyards reduces energy dependency before a single mechanical system is activated.',
      },
      {
        type: 'heading2',
        text: 'Embodied Carbon and Structural Permanence',
      },
      {
        type: 'paragraph',
        text: 'The greenest building is the one that never needs to be demolished. Short-lived construction systems with 25-year lifecycles impose a devastating embodied carbon footprint through repeated teardown and reconstruction cycles. By contrast, building with resilient reinforced masonry, durable local stone, and timeless architectural proportion creates structures that endure across generations.',
      },
      {
        type: 'quote',
        text: 'Sustainability is not an aesthetic; it is a moral obligation to the land, the climate, and future generations who will inhabit what we build.',
        author: 'Ecological Practice Principles',
      },
      {
        type: 'heading2',
        text: 'Circularity and Regional Sourcing',
      },
      {
        type: 'paragraph',
        text: 'Transporting heavy cladding materials across oceans consumes massive fossil fuels. Prioritizing regional quarries, local clay brickyards, and endemic aggregates ensures that construction funds support local craftsmanship while keeping supply-chain carbon expenditures to an absolute minimum.',
      },
    ],
  },
  {
    id: 'the-influence-of-texture-in-architecture',
    slug: 'the-influence-of-texture-in-architecture',
    title: 'The Influence of Texture in Architecture',
    category: 'Materials',
    description:
      'The tactile language of architecture: how fluting, relief surfaces, striated masonry, and hand-worked finishes engage human touch.',
    coverImage: '/images/blog/blog-6.webp',
    coverImageJpg: '/images/blog/blog-6.jpg',
    publishedDate: '2026-10-14',
    displayDate: 'October 14, 2026',
    readTime: '5 min read',
    isFeatured: false,
    seoTitle: 'The Influence of Texture in Architecture | The Architecture Journal',
    seoDescription:
      'Exploring tactile architectural surfaces, fluted relief patterns, striated earth finishes, and the sensory depth of physical textures.',
    relatedSlugs: ['designing-with-natural-materials', 'understanding-light-and-shadow'],
    sections: [
      {
        type: 'lead',
        text: 'We experience architecture not merely with our eyes, but with our hands, our footsteps, and our physical proximity to surfaces. Texture bridges visual geometry with tactile human intimacy.',
      },
      {
        type: 'heading2',
        text: 'Micro-Relief and the Catching of Light',
      },
      {
        type: 'paragraph',
        text: 'A smooth, glossy wall reflects light uniformly, revealing little about its substance. But introduce fluting, bush-hammered stone, or rough-cast sand plaster, and the surface comes alive. Grazing light catches microscopic ridges, producing thousands of delicate shadow lines that grant physical presence and depth to otherwise simple planes.',
      },
      {
        type: 'heading2',
        text: 'Acoustic Softening Through Textural Diffusion',
      },
      {
        type: 'paragraph',
        text: 'Texture plays a critical role in acoustic comfort. Large, hard, polished surfaces bounce sound waves indiscriminately, causing harsh flutter echoes. Porous terracotta louvers, fluted wood paneling, and textured mineral finishes break up high-frequency reflections, diffusing sound into a quiet, reverberant warmth essential for residential serenity and focused workspaces.',
      },
      {
        type: 'quote',
        text: 'Architecture is the learned game, correct and magnificent, of forms assembled in the light—and touched by the hand.',
        author: 'Tactile Architectural Studies',
      },
      {
        type: 'heading2',
        text: 'The Human Scale of Handcrafted Detailing',
      },
      {
        type: 'paragraph',
        text: 'In an era dominated by mass-manufactured composite panels, handcrafted texture provides irreplaceable character. Hand-tooled stone lintels, artisanal lime plasters, and forged bronze hardware carry the subtle irregularities of human craftsmanship, elevating ordinary functional spaces into works of enduring architectural art.',
      },
    ],
  },
]

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug)
}

export function getRelatedArticles(slug) {
  const current = getArticleBySlug(slug)
  if (!current) return []
  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    return current.relatedSlugs
      .map((relSlug) => getArticleBySlug(relSlug))
      .filter(Boolean)
  }
  return articles.filter((a) => a.slug !== slug).slice(0, 2)
}

