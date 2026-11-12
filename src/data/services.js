/**
 * Confirmed Services Data.
 * Strictly maintains content for the seven confirmed service categories:
 * 1. Vastu Planning — vastu-planning
 * 2. Elevation Design — elevation-design
 * 3. Construction — construction
 * 4. Renovation — renovation
 * 5. Labour Contract — labour-contract
 * 6. Interior Work — interior-work
 * 7. Waterproofing — waterproofing
 */
export const services = [
  {
    id: "vastu-planning",
    slug: "vastu-planning",
    title: "Vastu Planning",
    shortDesc: "Traditional spatial alignment integrated with contemporary architectural engineering for balanced residential layouts and commercial blueprints.",
    fullDesc: "Our Vastu Planning service bridges time-tested architectural orientation principles with modern structural design. We evaluate directional alignments, solar angles, airflow patterns, and functional zoning to produce optimized residential floor plans and commercial space layouts that enhance natural light, ventilation, and functional comfort without compromising structural constructability.",
    scopeOfWork: [
      "Cardinal directional assessment and compass grid alignment",
      "Functional room zoning and spatial balance mapping",
      "Entryway, kitchen, and master bedroom orientation optimization",
      "Integration of Vastu parameters with modern architectural CAD drawings",
      "Commercial workspace flow and executive cabin placement",
      "Post-layout compliance verification before municipal submission",
    ],
    benefits: [
      "Natural daylight access and continuous cross-ventilation flow",
      "Harmonious spatial movement between living and utility zones",
      "Elimination of post-construction structural rectifications",
      "Complete coordination between traditional guidelines and modern engineering",
    ],
    processSteps: [
      {
        step: "01",
        title: "Site & Orientation Audit",
        description: "Evaluating plot boundary angles, cardinal directions, road frontage, and neighboring contextual elements.",
      },
      {
        step: "02",
        title: "Functional Zoning Blueprint",
        description: "Drafting preliminary zoning schematics aligning functional rooms with optimal environmental directions.",
      },
      {
        step: "03",
        title: "Architectural CAD Integration",
        description: "Synthesizing Vastu dimensional parameters into working architectural floor plans and structural frames.",
      },
      {
        step: "04",
        title: "Final Execution Review",
        description: "Conducting a comprehensive technical review and issuing verified construction-ready documentation.",
      },
    ],
    heroImage: "/images/service-vastu.webp",
    galleryImages: [
      "/images/service-elevation.webp",
      "/images/home-showcase.webp",
      "/images/service-interior.webp",
    ],
    relatedServices: ["elevation-design", "construction", "interior-work"],
    seoTitle: "Vastu Planning Services | Architectural Spatial Engineering",
    seoDescription: "Traditional spatial alignment integrated with modern architectural design for balanced residential floor plans and commercial blueprints.",
  },
  {
    id: "elevation-design",
    slug: "elevation-design",
    title: "Elevation Design",
    shortDesc: "Distinctive 2D and 3D exterior facades combining architectural elegance, material durability, and climate-responsive engineering.",
    fullDesc: "Our Elevation Design practice creates signature building envelopes that define exterior stature and aesthetic value. We integrate advanced 3D spatial visualization, sustainable material science, and ambient facade lighting to craft exterior treatments that withstand regional weather variations while delivering commanding curb presence for private villas, residential apartments, and commercial complexes.",
    scopeOfWork: [
      "Contemporary, minimalist, and classical 3D architectural facade modeling",
      "Exterior material specification (stone cladding, HPL sheets, louvers, glazing)",
      "Facade lighting, architectural illumination, and ambient reveal design",
      "Sun-shading analysis, weather-resistant detailing, and rainwater drip profiles",
      "Dimensional 2D section drawings for precision site execution",
    ],
    benefits: [
      "Commanding architectural stature and enduring curb appeal",
      "Climate-responsive solar shading reducing thermal load",
      "Comprehensive material schedules preventing site execution ambiguities",
      "Low-maintenance exterior material choices tailored to regional climate",
    ],
    processSteps: [
      {
        step: "01",
        title: "Stylistic Assessment",
        description: "Reviewing architectural typology, client design aspirations, and surrounding streetscape character.",
      },
      {
        step: "02",
        title: "3D Digital Prototyping",
        description: "Generating photorealistic 3D elevations illustrating textures, shadows, and daylight variations.",
      },
      {
        step: "03",
        title: "Material & Lighting Schedules",
        description: "Finalizing exact cladding materials, paint finishes, structural frames, and exterior fixture placements.",
      },
      {
        step: "04",
        title: "Site Execution Drawings",
        description: "Producing dimensional CAD elevation sheets, joint details, and structural anchoring specifications.",
      },
    ],
    heroImage: "/images/service-elevation.webp",
    galleryImages: [
      "/images/service-vastu.webp",
      "/images/home-showcase.webp",
      "/images/hero-home.webp",
    ],
    relatedServices: ["construction", "renovation", "vastu-planning"],
    seoTitle: "Elevation Design Services | Modern 3D Exterior Facade Engineering",
    seoDescription: "Distinctive 2D and 3D architectural elevations combining aesthetic elegance, durable materials, and climate-responsive facade engineering.",
  },
  {
    id: "construction",
    slug: "construction",
    title: "Construction",
    shortDesc: "End-to-end structural construction, turnkey civil contracting, and site engineering executed to rigorous quality benchmarks.",
    fullDesc: "From initial ground excavation and foundation engineering to complete structural framing and masonry, our General Construction service delivers uncompromised structural integrity. We manage reinforced concrete frames, masonry enclosures, steel reinforcement fabrication, and integrated mechanical, electrical, and plumbing (MEP) rough-ins under strict on-site supervisory protocols.",
    scopeOfWork: [
      "Substructure excavation, soil testing, and foundation footing casting",
      "Reinforced cement concrete (RCC) structural framing: columns, beams, and slabs",
      "High-density brickwork, solid block masonry, and structural lintels",
      "Integrated electrical conduits, plumbing pipe chases, and drainage infrastructure",
      "On-site concrete slump testing, cube strength validation, and curing governance",
    ],
    benefits: [
      "Strict structural adherence to national building safety codes",
      "Uncompromising standards on certified raw materials (cement, TMT rebar, aggregate)",
      "Continuous site supervision by dedicated civil engineering professionals",
      "Systematic milestone scheduling with documented progress reporting",
    ],
    processSteps: [
      {
        step: "01",
        title: "Mobilization & Foundation",
        description: "Topographical surveying, soil verification, layout marking, excavation, and footing concrete placement.",
      },
      {
        step: "02",
        title: "Substructure & Plinth Level",
        description: "Backfilling, plinth beam reinforcement, anti-termite treatment, and damp-proof course installation.",
      },
      {
        step: "03",
        title: "Superstructure Erection",
        description: "Staged column casting, precision shuttering, rebar binding, and slab concrete placement with monitored curing.",
      },
      {
        step: "04",
        title: "Masonry, Rough-ins & Handover",
        description: "Wall construction, MEP conduit rough-ins, internal plastering, and structural verification inspections.",
      },
    ],
    heroImage: "/images/service-construction.webp",
    galleryImages: [
      "/images/about-engineering.webp",
      "/images/hero-construction.webp",
      "/images/service-waterproofing.webp",
    ],
    relatedServices: ["elevation-design", "waterproofing", "labour-contract"],
    seoTitle: "General Construction Services | Turnkey Civil & Structural Contracting",
    seoDescription: "Comprehensive structural construction, reinforced concrete framing, and turnkey civil contracting executed with uncompromising quality standards.",
  },
  {
    id: "renovation",
    slug: "renovation",
    title: "Renovation",
    shortDesc: "Structural retrofitting, space reconfiguration, and complete architectural rejuvenation for aging residential and commercial properties.",
    fullDesc: "Our Renovation service revitalizes existing building assets, addressing structural fatigue, updating outdated floor layouts, and introducing modern architectural finishes. We handle controlled internal demolitions, load-bearing modifications, MEP infrastructure replacements, and facade overhauls with meticulous planning to minimize disruption and maximize structural safety.",
    scopeOfWork: [
      "Structural health inspection, crack audit, and load-bearing verification",
      "Controlled structural alterations and opening creation with steel lintel support",
      "Floor plan reconfiguration, room expansions, and open-plan conversions",
      "Complete electrical rewire, plumbing overhaul, and drainage modernization",
      "Exterior facade rejuvenation, plaster restoration, and surface refinishing",
    ],
    benefits: [
      "Significant appreciation in asset valuation and functional utility",
      "Rectification of persistent structural dampness, leaks, and settling issues",
      "Enhanced natural illumination and optimized thermal performance",
      "Cost-effective alternative to complete demolition and reconstruction",
    ],
    processSteps: [
      {
        step: "01",
        title: "Structural Condition Audit",
        description: "Comprehensive site evaluation inspecting moisture intrusion, slab integrity, and electrical/plumbing status.",
      },
      {
        step: "02",
        title: "Reconfiguration Blueprints",
        description: "Drafting optimized spatial transformation layouts and structural propping/demolition plans.",
      },
      {
        step: "03",
        title: "Surgical Demolition & Retrofit",
        description: "Executing controlled removals, structural lintel installation, and utility service upgrades.",
      },
      {
        step: "04",
        title: "Surface Restoration & Commissioning",
        description: "Applying new plaster coats, modern floor finishes, cabinetry integration, and final inspection.",
      },
    ],
    heroImage: "/images/service-renovation.webp",
    galleryImages: [
      "/images/service-interior.webp",
      "/images/service-waterproofing.webp",
      "/images/service-construction.webp",
    ],
    relatedServices: ["interior-work", "waterproofing", "construction"],
    seoTitle: "Renovation Services | Structural Retrofitting & Architectural Remodeling",
    seoDescription: "Transformative structural renovations, space reconfiguration, and complete architectural modernization for residential and commercial assets.",
  },
  {
    id: "labour-contract",
    slug: "labour-contract",
    title: "Labour Contract",
    shortDesc: "Vetted, experienced, and disciplined civil construction workforce deployment managed under rigorous supervisory standards.",
    fullDesc: "We provide structured labour contracting services backed by skilled tradespeople, including masons, bar benders, shuttering carpenters, plasterers, and supervisory foremen. Our managed workforce ensures construction momentum, exacting craftsmanship, and strict adherence to job-site safety standards across residential, commercial, and infrastructure civil scopes.",
    scopeOfWork: [
      "Master masons for precise brickwork, solid block laying, and stone masonry",
      "Certified bar benders for steel reinforcement fabrication and tie binding",
      "Experienced formwork and shuttering carpenters for column and slab framing",
      "Plastering, floor screeding, and concrete placing trade teams",
      "Daily on-site attendance monitoring, safety gear enforcement, and work logs",
    ],
    benefits: [
      "Reliable workforce mobilization preventing critical project bottlenecks",
      "Skilled craftsmen familiar with rigorous structural tolerances and finishes",
      "Strict enforcement of on-site safety gear and protective measures",
      "Supervised accountability with daily site output reporting",
    ],
    processSteps: [
      {
        step: "01",
        title: "Scope & Manpower Estimation",
        description: "Reviewing architectural drawings and project timelines to quantify trade requirements and crew sizes.",
      },
      {
        step: "02",
        title: "Crew Mobilization",
        description: "Deploying vetted tradespeople and appointing dedicated lead foremen to oversee daily activities.",
      },
      {
        step: "03",
        title: "Active Supervision & Safety",
        description: "Enforcing alignment accuracy, material economy, scaffolding safety, and structural guidelines.",
      },
      {
        step: "04",
        title: "Milestone Quality Sign-Off",
        description: "Joint inspection with project engineers to verify completed work against technical drawings.",
      },
    ],
    heroImage: "/images/service-labour.webp",
    galleryImages: [
      "/images/service-construction.webp",
      "/images/about-engineering.webp",
      "/images/service-waterproofing.webp",
    ],
    relatedServices: ["construction", "renovation"],
    seoTitle: "Labour Contracting Services | Skilled Construction Workforce Deployment",
    seoDescription: "Disciplined civil construction labour contracts providing skilled masons, steel fixers, carpenters, and supervised site crews.",
  },
  {
    id: "interior-work",
    slug: "interior-work",
    title: "Interior Work",
    shortDesc: "Tailored interior fit-outs, precision joinery, gypsum false ceilings, ambient lighting, and high-end surface finishes.",
    fullDesc: "Our Interior Work practice unites fine craftsmanship with architectural precision. We design and execute custom architectural woodwork, modular cabinetry, multi-tier false ceiling installations, integrated electrical lighting plans, and premium floorings for luxury private residences, executive corporate offices, and boutique commercial environments.",
    scopeOfWork: [
      "Drywall and gypsum false ceiling design with cove lighting integration",
      "Custom cabinetry, modular kitchens, wardrobes, and architectural joinery",
      "Electrical layout planning, ambient lighting fixtures, and switchgear detailing",
      "Premium flooring installations: imported marble, vitrified tiles, engineered wood",
      "Wall treatments, acoustic panelling, textured paints, and designer wall cladding",
    ],
    benefits: [
      "Harmonious spatial design tailored to lifestyle and operational needs",
      "Bespoke joinery maximizing spatial ergonomics and storage utility",
      "Integrated ambient and task lighting enhancing room depth and ambiance",
      "Carefully curated materials delivering lasting durability and simple maintenance",
    ],
    processSteps: [
      {
        step: "01",
        title: "Concept & Spatial Planning",
        description: "Developing detailed 3D interior renders, material mood boards, and cabinetry layouts.",
      },
      {
        step: "02",
        title: "Rough-in Preparation",
        description: "Channelling walls for electrical and plumbing conduits, ceiling grid framework, and level screeding.",
      },
      {
        step: "03",
        title: "Carpentry & Surface Cladding",
        description: "On-site and workshop joinery fabrication, tile/marble laying, and wall panelling installation.",
      },
      {
        step: "04",
        title: "Finishing & Deep Clean",
        description: "Multi-coat paint finishes, hardware fittings, lighting fixture installation, and final handover.",
      },
    ],
    heroImage: "/images/service-interior.webp",
    galleryImages: [
      "/images/service-vastu.webp",
      "/images/home-showcase.webp",
      "/images/service-elevation.webp",
    ],
    relatedServices: ["elevation-design", "renovation"],
    seoTitle: "Interior Work Services | Architectural Fit-Outs & Custom Joinery",
    seoDescription: "Bespoke interior fit-outs, precision cabinetry, false ceilings, and premium architectural finishing for residences and corporate offices.",
  },
  {
    id: "waterproofing",
    slug: "waterproofing",
    title: "Waterproofing",
    shortDesc: "Advanced moisture barrier systems, terrace elastomeric membranes, basement tanking, and structural dampness rectification.",
    fullDesc: "Water ingress represents the single most significant cause of long-term structural degradation. Our specialized Waterproofing service applies multi-stage chemical and elastomeric barrier systems for roof terraces, sunken bathroom slabs, basements, retaining walls, and balconies to protect concrete reinforcement from carbonation, rust, and water seepage.",
    scopeOfWork: [
      "Roof terrace and podium slab elastomeric multi-coat coating systems",
      "Sunken slab (bathrooms, balconies) polymer-modified chemical barrier coats",
      "Basement tanking, retaining wall barriers, and crystalline negative-side sealing",
      "Structural expansion joint sealing with high-performance polyurethane sealants",
      "High-pressure injection grouting to arrest active structural cracks and honeycombs",
    ],
    benefits: [
      "Long-term prevention of water seepage, damp patches, and efflorescence",
      "Protection of structural steel reinforcement against corrosion and rust expansion",
      "Preservation of interior paint finishes, false ceilings, and joinery",
      "72-hour ponding water tests validating total membrane impermeability",
    ],
    processSteps: [
      {
        step: "01",
        title: "Substrate Diagnosis & Surface Prep",
        description: "High-pressure jet washing, removing laitance, chasing structural cracks, and cleaning joints.",
      },
      {
        step: "02",
        title: "Crack Treatment & Angle Fillets",
        description: "Polymer-modified mortar fillets at 90-degree wall-to-floor junctions and elastomeric crack filling.",
      },
      {
        step: "03",
        title: "Multi-Coat Membrane Application",
        description: "Applying cross-directional coats of elastomeric polymer or crystalline waterproof compounds.",
      },
      {
        step: "04",
        title: "72-Hour Ponding Test",
        description: "Flooding the treated area with standing water for 72 hours to verify absolute barrier integrity before screeding.",
      },
    ],
    heroImage: "/images/service-waterproofing.webp",
    galleryImages: [
      "/images/service-construction.webp",
      "/images/about-engineering.webp",
      "/images/hero-construction.webp",
    ],
    relatedServices: ["construction", "renovation"],
    seoTitle: "Waterproofing Services | Terrace, Basement & Structural Moisture Protection",
    seoDescription: "Advanced structural waterproofing solutions, elastomeric terrace coatings, basement tanking, and leak rectification for long-term concrete protection.",
  },
]
