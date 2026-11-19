import fs from 'node:fs'
import path from 'node:path'
import { services } from '../src/data/services.js'
import { projects } from '../src/data/projects.js'
import { articles } from '../src/data/blog.js'

const PUBLIC_DIR = path.resolve(process.cwd(), 'public')
const siteUrl = process.env.SITE_URL ? process.env.SITE_URL.replace(/\/+$/, '') : ''

// Only published routes
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  ...services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  })),
  { path: '/projects', priority: '0.8', changefreq: 'weekly' },
  ...projects
    .filter((p) => p.isPublished === true)
    .map((p) => ({
      path: `/projects/${p.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  ...articles.map((a) => ({
    path: `/blog/${a.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  })),
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
]

// 1. Generate sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${siteUrl ? `${siteUrl}${r.path}` : r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml.trim() + '\n')
console.log(`✓ sitemap.xml generated with ${routes.length} published routes.`)

// 2. Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml` : '# Sitemap: [SITE_URL not configured. Add SITE_URL to build environment.]'}
`

fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt.trim() + '\n')
console.log(`✓ robots.txt generated.`)
