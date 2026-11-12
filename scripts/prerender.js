import fs from 'node:fs'
import path from 'node:path'
import { services } from '../src/data/services.js'
import { projects } from '../src/data/projects.js'

const DIST_DIR = path.resolve(process.cwd(), 'dist')
const templatePath = path.join(DIST_DIR, 'index.html')

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run "vite build" first.')
  process.exit(1)
}

const template = fs.readFileSync(templatePath, 'utf-8')

// Import SSR bundle
const { render } = await import(path.resolve(process.cwd(), 'dist-ssr/prerender.js'))

console.log('=== Starting Full Static Prerendering ===')

// Route definitions with route-specific SEO metadata
const routes = [
  {
    url: '/',
    outputPath: path.join(DIST_DIR, 'index.html'),
    title: 'Corporate Architecture & Civil General Contracting',
    description:
      'Specialized architectural planning, structural civil contracting, high-performance exterior elevations, renovation, and fine interior fit-outs.',
    ogImage:
      'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Corporate Architecture & General Contracting',
      description:
        'Comprehensive architectural planning, structural civil construction, interior execution, and engineering contracting services.',
      areaServed: 'India',
      serviceType: [
        'Vastu Planning',
        'Elevation Design',
        'General Construction',
        'Renovation',
        'Labour Contracting',
        'Interior Work',
        'Waterproofing',
      ],
    },
  },
  {
    url: '/about',
    outputPath: path.join(DIST_DIR, 'about/index.html'),
    title: 'About Our Practice | Architectural & Civil Engineering Standards',
    description:
      'A disciplined engineering and architectural practice dedicated to spatial equilibrium, structural integrity, and rigorous execution.',
    ogImage:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Our Practice',
      description:
        'A disciplined engineering and architectural practice dedicated to spatial equilibrium, structural integrity, and rigorous execution.',
    },
  },
  {
    url: '/services',
    outputPath: path.join(DIST_DIR, 'services/index.html'),
    title: 'Construction & Architectural Services | Corporate Capabilities',
    description:
      'Explore our seven core services: Vastu Planning, Elevation Design, General Construction, Renovation, Labour Contracting, Interior Work, and Waterproofing.',
    ogImage:
      'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Construction & Architectural Services',
      itemListElement: services.map((s, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: s.title,
        url: `/services/${s.slug}`,
      })),
    },
  },
  // All 7 published service detail pages dynamically generated from local data
  ...services.map((service) => ({
    url: `/services/${service.slug}`,
    outputPath: path.join(DIST_DIR, `services/${service.slug}/index.html`),
    title: service.seoTitle,
    description: service.seoDescription,
    ogImage: service.heroImage,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.shortDesc,
      serviceType: service.title,
    },
  })),
  {
    url: '/projects',
    outputPath: path.join(DIST_DIR, 'projects/index.html'),
    title: 'Project Portfolio | Selected Architecture & Construction Works',
    description:
      'Explore verified case studies spanning residential architecture, commercial civil construction, structural renovations, and interior fit-outs.',
    ogImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Project Portfolio',
      description:
        'Selected architectural structures, residential transformations, and commercial engineering projects.',
    },
  },
  // Published project pages (only when isPublished === true)
  ...projects
    .filter((p) => p.isPublished === true)
    .map((project) => ({
      url: `/projects/${project.slug}`,
      outputPath: path.join(DIST_DIR, `projects/${project.slug}/index.html`),
      title: project.seoTitle,
      description: project.seoDescription,
      ogImage: project.coverImage,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.title,
        description: project.summary,
        image: project.coverImage,
      },
    })),
  {
    url: '/contact',
    outputPath: path.join(DIST_DIR, 'contact/index.html'),
    title: 'Contact & Project Enquiry | Architecture & Civil Practice',
    description:
      'Submit your architectural planning, construction, renovation, or engineering contracting requirements for technical review and quotation.',
    ogImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact & Project Enquiry',
      description:
        'Connect with our technical practice to discuss structural requirements, evaluate site feasibility, or review architectural blueprints.',
    },
  },
]

let generatedCount = 0

for (const item of routes) {
  const appHtml = render(item.url)
  let html = template

  // Inject Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${item.title}</title>`)

  // Inject Meta Description
  if (html.includes('name="description"')) {
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${item.description}" />`
    )
  }

  // Inject Open Graph tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${item.title}" />`
  )
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${item.description}" />`
  )

  if (item.ogImage) {
    if (html.includes('property="og:image"')) {
      html = html.replace(
        /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:image" content="${item.ogImage}" />`
      )
    } else {
      html = html.replace(
        '</head>',
        `  <meta property="og:image" content="${item.ogImage}" />\n  </head>`
      )
    }
  }

  // Inject Structured Data JSON-LD
  if (item.jsonLd) {
    const jsonLdScript = `\n    <script type="application/ld+json">\n${JSON.stringify(
      item.jsonLd,
      null,
      2
    )}\n    </script>\n  </head>`
    html = html.replace('</head>', jsonLdScript)
  }

  // Inject Pre-rendered App HTML into #root
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )

  // Ensure output directory exists and write HTML file
  fs.mkdirSync(path.dirname(item.outputPath), { recursive: true })
  fs.writeFileSync(item.outputPath, html, 'utf-8')
  generatedCount++
  console.log(`✓ Prerendered [${item.url}] -> ${path.relative(process.cwd(), item.outputPath)}`)
}

console.log(`\n=== Successfully Prerendered ${generatedCount} Published Routes ===`)
