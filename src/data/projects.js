/**
 * Architecture One — Sample Portfolio & Design Studies.
 *
 * Demonstrates the studio's architectural vision, sculptural/organic methodology,
 * and structural discipline through conceptual design studies and spatial research.
 *
 * Categories:
 * - 'Residential Concepts'
 * - 'Commercial Concepts'
 * - 'Spatial Explorations'
 * - 'Material Studies'
 */

export const PROJECT_CATEGORIES = [
  'Residential Concepts',
  'Commercial Concepts',
  'Spatial Explorations',
  'Material Studies',
]

export const projects = [
  {
    id: 'solis-cantilever-pavilion',
    slug: 'solis-cantilever-pavilion',
    title: 'Solis Cantilever Pavilion',
    category: 'Spatial Explorations',
    badge: 'Concept Study',
    typology: 'Cantilever Pavilion Architecture',
    summary:
      'A sculptural cantilevered pavilion exploring geometric equilibrium, deep sun-shading overhangs, and thermal mass performance in arid desert conditions.',
    description:
      'This conceptual exploration investigates the structural relationship between intersecting sandstone cantilevers and deep shaded microclimates. The design prioritizes passive thermal regulation, minimal earth disruption, and clear geometric proportion, demonstrating how monolithic stone massing can evoke spatial lightness.',
    requirements: [
      'Investigation of post-tensioned cantilever stone slabs exceeding 8-meter spans',
      'Integration of deep passive solar overhangs tailored for harsh arid solar angles',
      'Minimization of site disturbance through isolated point-load foundation geometry',
      'Creation of shaded open-air transition zones connecting interior and landscape',
    ],
    scopeOfWork: [
      'Parametric structural modeling of reinforced stone cantilever load paths',
      'Thermal mass simulation and solar azimuth daylight studies',
      'Subsurface structural anchor and counterweight specification',
      'Bespoke exterior flush glazing and thermal break integration',
    ],
    coverImage: '/images/portfolio/portfolio-1.webp',
    coverImageJpg: '/images/portfolio/portfolio-1.jpg',
    galleryImages: [
      '/images/portfolio/portfolio-1.webp',
      '/images/portfolio/portfolio-7.webp',
      '/images/portfolio/portfolio-4.webp',
    ],
    relatedProjects: ['dune-curvilinear-residence', 'axonometric-pavilion-study'],
    isSample: true,
    isPublished: true,
    seoTitle: 'Solis Cantilever Pavilion | Architectural Design Study',
    seoDescription:
      'Conceptual architecture study exploring post-tensioned sandstone cantilevers, passive solar shading, and sculptural spatial equilibrium.',
  },
  {
    id: 'dune-curvilinear-residence',
    slug: 'dune-curvilinear-residence',
    title: 'Dune Curvilinear Residence',
    category: 'Residential Concepts',
    badge: 'Design Study',
    typology: 'Biophilic Rammed-Earth Envelope',
    summary:
      'An organic residential study featuring continuous rammed-earth ribbon walls that curve seamlessly with the natural contours of desert topography.',
    description:
      'An experimental single-family residential concept testing the limits of curved rammed-earth construction. The continuous serpentine wall serves simultaneously as primary structural support, thermal reservoir, and spatial divider, harmonizing built shelter with surrounding desert geology.',
    requirements: [
      'Continuity of curved monolithic earth walls spanning living, private, and courtyard zones',
      'Use of locally sourced stabilized soil composites for optimal thermal flywheel performance',
      'Acoustic buffering against external desert winds through variable wall thickness',
      'Integration of natural airflow channels via windward ground-level breezeways',
    ],
    scopeOfWork: [
      'Curved formwork engineering and geotechnical soil stabilization testing',
      'Natural ventilation fluid-dynamics modeling and diurnal cooling analysis',
      'Concealed roof drainage and parapet flashing for earth wall longevity',
      'Interior tactile plaster finishing utilizing unrefined mineral pigments',
    ],
    coverImage: '/images/portfolio/portfolio-2.webp',
    coverImageJpg: '/images/portfolio/portfolio-2.jpg',
    galleryImages: [
      '/images/portfolio/portfolio-2.webp',
      '/images/portfolio/portfolio-5.webp',
      '/images/portfolio/portfolio-4.webp',
    ],
    relatedProjects: ['terraced-earth-villa', 'solis-cantilever-pavilion'],
    isSample: true,
    isPublished: true,
    seoTitle: 'Dune Curvilinear Residence | Organic Architecture Study',
    seoDescription:
      'Residential design study featuring continuous stabilized rammed-earth ribbon walls and biophilic spatial integration.',
  },
  {
    id: 'atrium-monolith-colonnade',
    slug: 'atrium-monolith-colonnade',
    title: 'Atrium Monolith Colonnade',
    category: 'Commercial Concepts',
    badge: 'Spatial Exploration',
    typology: 'Travertine Colonnade & Atrium',
    summary:
      'A monumental civic colonnade featuring fluted travertine stone columns and deep geometric skylight apertures creating dramatic diurnal light movement.',
    description:
      'A public atrium concept study that examines how daylight behaves when channeled through monolithic double-height travertine fluting. The spatial composition balances monumental civic scale with contemplative human intimacy, proposing a timeless architectural language for institutional spaces.',
    requirements: [
      'Dual-height fluted column rhythm calibrated to filter harsh direct sunlight',
      'Monolithic overhead coffers directing diffused illumination to the public floor',
      'Acoustic reverberation control within a monumental stone interior volume',
      'Seamless transition from exterior urban threshold to quiet interior galleria',
    ],
    scopeOfWork: [
      'Precision stone stereotomy and stone-joint engineering for fluted shafts',
      'Computational daylight simulation across annual solar equinoxes and solstices',
      'Concealed structural steel core integration within hollowed travertine drums',
      'Acoustic plaster ceiling treatments tuned for speech clarity in public halls',
    ],
    coverImage: '/images/portfolio/portfolio-3.webp',
    coverImageJpg: '/images/portfolio/portfolio-3.jpg',
    galleryImages: [
      '/images/portfolio/portfolio-3.webp',
      '/images/portfolio/portfolio-6.webp',
      '/images/portfolio/portfolio-1.webp',
    ],
    relatedProjects: ['curvilinear-cultural-center', 'axonometric-pavilion-study'],
    isSample: true,
    isPublished: true,
    seoTitle: 'Atrium Monolith Colonnade | Civic Architecture Study',
    seoDescription:
      'Monumental atrium study exploring travertine colonnades, natural zenithal lighting, and civic spatial dignity.',
  },
  {
    id: 'mineral-tactility-materials',
    slug: 'mineral-tactility-materials',
    title: 'Mineral Tactility & Joinery',
    category: 'Material Studies',
    badge: 'Material Study',
    typology: 'Architectural Material Research',
    summary:
      'A tactile material research study examining the interface between raw fluted limestone, hand-fired terracotta clay tiles, and patinated bronze fixtures.',
    description:
      'A physical and tactile research investigation into how natural weathering influences building longevity and sensory experience. Detailed mockups test the juxtaposition of hand-cut limestone profiles, clay extrusions, and patinated bronze details under extreme climate conditions.',
    requirements: [
      'Empirical thermal expansion testing across disparate mineral and metal materials',
      'Evaluation of natural patina development and weather resistance over time',
      'Bespoke mechanical dry-joint fixing details without visible elastomeric caulking',
      'Creation of a tactile material palette supporting warm earthy architectural themes',
    ],
    scopeOfWork: [
      'Full-scale physical joinery prototyping and laboratory tensile testing',
      'Mineral petrographic analysis for porosity and frost/heat cycle resistance',
      'Bespoke extrusion die design for fluted terracotta facade baguettes',
      'Detailed assembly drafting and specification catalogue creation',
    ],
    coverImage: '/images/portfolio/portfolio-4.webp',
    coverImageJpg: '/images/portfolio/portfolio-4.jpg',
    galleryImages: [
      '/images/portfolio/portfolio-4.webp',
      '/images/portfolio/portfolio-7.webp',
      '/images/portfolio/portfolio-1.webp',
    ],
    relatedProjects: ['solis-cantilever-pavilion', 'dune-curvilinear-residence'],
    isSample: true,
    isPublished: true,
    seoTitle: 'Mineral Tactility & Joinery | Material Research Study',
    seoDescription:
      'Architectural material research into fluted limestone, terracotta brick, patinated bronze, and precision dry-joint joinery.',
  },
  {
    id: 'terraced-earth-villa',
    slug: 'terraced-earth-villa',
    title: 'Terraced Earth Villa',
    category: 'Residential Concepts',
    badge: 'Concept Study',
    typology: 'Hillside Cascading Residence',
    summary:
      'A split-level hillside residence cascading across natural rock terraces, utilizing raw limestone rubble masonry and low-slung desert rooflines.',
    description:
      'A residential design study integrating modern domestic volumes directly into steep sandstone hillside contours. Step-down terraces and cantilevered pool decks orient toward prevailing breezes while sheltered thermal courtyards provide tranquil private zones.',
    requirements: [
      'Multi-level structural stepping anchored to natural bedrock topography',
      'Visual concealment from upper approach roads through horizontal low-profile roof slabs',
      'Natural passive cooling utilizing shaded internal plunge pools and thermal courtyards',
      'Integration of endemic drought-tolerant botanical green roofs',
    ],
    scopeOfWork: [
      'Geotechnical rock-anchor engineering and retaining wall stabilization',
      'Topographic contour mapping and 3D terrain cut-and-fill optimization',
      'Integrated stormwater retention and greywater passive recycling loops',
      'Custom stone cladding detailing utilizing stone excavated on-site',
    ],
    coverImage: '/images/portfolio/portfolio-5.webp',
    coverImageJpg: '/images/portfolio/portfolio-5.jpg',
    galleryImages: [
      '/images/portfolio/portfolio-5.webp',
      '/images/portfolio/portfolio-2.webp',
      '/images/portfolio/portfolio-7.webp',
    ],
    relatedProjects: ['dune-curvilinear-residence', 'axonometric-pavilion-study'],
    isSample: true,
    isPublished: true,
    seoTitle: 'Terraced Earth Villa | Hillside Residential Concept',
    seoDescription:
      'Topographic residential concept exploring natural stone retaining terraces, low-slung desert rooflines, and hillside integration.',
  },
  {
    id: 'curvilinear-cultural-center',
    slug: 'curvilinear-cultural-center',
    title: 'Curvilinear Cultural Center',
    category: 'Commercial Concepts',
    badge: 'Design Study',
    typology: 'Parametric Pavilion Architecture',
    summary:
      'A sculptural public venue featuring sweeping organic timber arches and sand-colored clay plaster canopies enclosing a multi-level open courtyard.',
    description:
      'A civic gathering concept exploring parametric arch geometries rendered in lightweight timber and earth-toned acoustic plaster, creating a natural acoustic shell for public performance, art exhibitions, and community discourse.',
    requirements: [
      'Continuous structural timber rib geometry achieving column-free interior spans',
      'Acoustic geometry optimized for natural unamplified speech and chamber music',
      'Seamless transitional threshold connecting public plaza to internal gathering arena',
      'Low embodied-carbon material palette featuring glued-laminated timber and clay',
    ],
    scopeOfWork: [
      'Computational parametric form-finding and structural load optimization',
      'Ray-tracing acoustic room analysis and sound reflection shaping',
      'Fabrication detailing for double-curved timber glulam structural arches',
      'Passive earth-tube displacement ventilation system engineering',
    ],
    coverImage: '/images/portfolio/portfolio-6.webp',
    coverImageJpg: '/images/portfolio/portfolio-6.jpg',
    galleryImages: [
      '/images/portfolio/portfolio-6.webp',
      '/images/portfolio/portfolio-3.webp',
      '/images/portfolio/portfolio-7.webp',
    ],
    relatedProjects: ['atrium-monolith-colonnade', 'axonometric-pavilion-study'],
    isSample: true,
    isPublished: true,
    seoTitle: 'Curvilinear Cultural Center | Civic Architecture Concept',
    seoDescription:
      'Parametric civic pavilion concept featuring curved timber glulam arches, clay plaster canopies, and public open-air courtyards.',
  },
  {
    id: 'axonometric-pavilion-study',
    slug: 'axonometric-pavilion-study',
    title: 'Axonometric Pavilion Study',
    category: 'Spatial Explorations',
    badge: 'Design Study',
    typology: 'Drafting & Physical Prototyping',
    summary:
      'An artistic drafting and structural study demonstrating the transition from hand-drawn orthographic elevations to 3D architectural physical models.',
    description:
      'A methodological design board showing the evolution of a courtyard pavilion from schematic hand-drafted grid sections to 3D clay physical form and structural engineering load paths, illustrating the studio’s disciplined design workflow.',
    requirements: [
      'Comprehensive translation of 2D dimensional elevations into physical 3D volumetric massing',
      'Clear documentation of structural gravity and lateral shear load paths',
      'Integration of traditional architectural drafting conventions with digital parametric analysis',
      'Investigation of material transitions between structural masonry and timber roofs',
    ],
    scopeOfWork: [
      'Precision axonometric projection and orthographic elevation drafting',
      'Physical architectural model fabrication using natural terracotta clay',
      'Structural connection detailing and joinery schedule drafting',
      'Spatial proportion analysis according to classical geometric ratios',
    ],
    coverImage: '/images/portfolio/portfolio-7.webp',
    coverImageJpg: '/images/portfolio/portfolio-7.jpg',
    galleryImages: [
      '/images/portfolio/portfolio-7.webp',
      '/images/portfolio/portfolio-1.webp',
      '/images/portfolio/portfolio-6.webp',
    ],
    relatedProjects: ['solis-cantilever-pavilion', 'curvilinear-cultural-center'],
    isSample: true,
    isPublished: true,
    seoTitle: 'Axonometric Pavilion Study | Architectural Design Board',
    seoDescription:
      'Methodological architectural design study showcasing axonometric projections, clay physical modeling, and structural drafting.',
  },
]
