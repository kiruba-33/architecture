import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const PORT = 4182
const DIST_DIR = path.resolve(process.cwd(), 'dist')
const ARTIFACT_DIR = '/home/kiruba/.gemini/antigravity/brain/a8e34d04-2957-4603-956e-5a7a8b6a67e7'

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
}

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0]
  if (reqPath === '/') reqPath = '/index.html'

  let filePath = path.join(DIST_DIR, reqPath)
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html')
  } else if (!fs.existsSync(filePath)) {
    filePath = path.join(DIST_DIR, 'index.html')
  }

  const ext = path.extname(filePath).toLowerCase()
  const contentType = mimeTypes[ext] || 'application/octet-stream'

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500)
      res.end('Error loading file')
      return
    }
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(data)
  })
})

server.listen(PORT, async () => {
  console.log(`QA Audit Server running on http://localhost:${PORT}`)
  const browserBin = '/opt/brave.com/brave/brave-browser'

  const auditRoutes = [
    // 12 Published Routes
    { type: 'Published', path: '/', expect: 'Shaping Built Environments', title: 'Home' },
    { type: 'Published', path: '/about', expect: 'About Our Practice', title: 'About' },
    { type: 'Published', path: '/services', expect: 'Seven Core Capabilities', title: 'Services' },
    { type: 'Published', path: '/services/vastu-planning', expect: 'Vastu Planning', title: 'Service: Vastu' },
    { type: 'Published', path: '/services/elevation-design', expect: 'Elevation Design', title: 'Service: Elevation' },
    { type: 'Published', path: '/services/construction', expect: 'Construction', title: 'Service: Construction' },
    { type: 'Published', path: '/services/renovation', expect: 'Renovation', title: 'Service: Renovation' },
    { type: 'Published', path: '/services/labour-contract', expect: 'Labour Contract', title: 'Service: Labour' },
    { type: 'Published', path: '/services/interior-work', expect: 'Interior Work', title: 'Service: Interior' },
    { type: 'Published', path: '/services/waterproofing', expect: 'Waterproofing', title: 'Service: Waterproofing' },
    { type: 'Published', path: '/projects', expect: 'Portfolio Curation', title: 'Projects' },
    { type: 'Published', path: '/contact', expect: 'Direct Communication', title: 'Contact' },

    // 4 Error / Fallback Routes
    { type: 'Fallback', path: '/services/non-existent-service-slug', expect: 'Service Not Found', title: 'Invalid Service Slug' },
    { type: 'Fallback', path: '/projects/non-existent-project-slug', expect: 'Project Case Study Not Found', title: 'Invalid Project Slug' },
    { type: 'Fallback', path: '/projects/unpublished-test-slug', expect: 'Project Case Study Not Found', title: 'Unpublished Project Slug' },
    { type: 'Fallback', path: '/completely-unknown-page-route', expect: 'Page Does Not Exist', title: 'Unknown 404 Route' },
  ]

  let passed = 0

  for (const item of auditRoutes) {
    try {
      const { stdout } = await execFileAsync(
        browserBin,
        [
          '--headless',
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-software-rasterizer',
          '--dump-dom',
          `http://localhost:${PORT}${item.path}`,
        ],
        { timeout: 8000 }
      )

      const matches = stdout.includes(item.expect)
      if (matches) {
        passed++
        console.log(`✓ [${item.type}] ${item.title} (${item.path}) passed`)
      } else {
        console.error(`✗ [${item.type}] ${item.title} (${item.path}) failed: could not find "${item.expect}"`)
      }
    } catch (e) {
      console.error(`✗ Error auditing ${item.path}:`, e.message)
    }
  }

  // Responsive Viewports Capture for Final Report
  const viewports = [
    { name: 'final-home-desktop-1440.png', path: '/', w: 1440, h: 900 },
    { name: 'final-home-tablet-768.png', path: '/', w: 768, h: 1024 },
    { name: 'final-home-mobile-390.png', path: '/', w: 390, h: 844 },
    { name: 'final-services-desktop-1440.png', path: '/services', w: 1440, h: 900 },
    { name: 'final-contact-desktop-1440.png', path: '/contact', w: 1440, h: 900 },
  ]

  console.log('\nCapturing final responsive viewports...')
  for (const vp of viewports) {
    const outPath = path.join(ARTIFACT_DIR, vp.name)
    try {
      await execFileAsync(
        browserBin,
        [
          '--headless',
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-software-rasterizer',
          '--hide-scrollbars',
          `--window-size=${vp.w},${vp.h}`,
          `--screenshot=${outPath}`,
          `http://localhost:${PORT}${vp.path}`,
        ],
        { timeout: 8000 }
      )
      console.log(`✓ Viewport captured: ${vp.name} (${vp.w}x${vp.h})`)
    } catch (e) {
      console.error(`✗ Viewport capture error for ${vp.name}:`, e.message)
    }
  }

  console.log(`\n========================================`)
  console.log(`QA Route Audit: ${passed}/${auditRoutes.length} Passed`)
  console.log(`========================================`)

  server.close(() => {
    process.exit(passed === auditRoutes.length ? 0 : 1)
  })
})
