import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const PORT = 4186
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
  console.log(`Colour Palette Verification Server running on http://localhost:${PORT}`)
  const browserBin = '/opt/brave.com/brave/brave-browser'

  const screenshots = [
    // Desktop 1440px
    { name: 'colour-home-desktop-1440.png', path: '/', w: 1440, h: 900, label: 'Desktop Home Hero & Transparent Navbar (1440px)' },
    { name: 'colour-about-desktop-1440.png', path: '/about', w: 1440, h: 900, label: 'Desktop About & Solid Navbar (1440px)' },
    { name: 'colour-services-desktop-1440.png', path: '/services', w: 1440, h: 900, label: 'Desktop Services Overview (1440px)' },
    { name: 'colour-service-detail-desktop-1440.png', path: '/services/vastu-planning', w: 1440, h: 900, label: 'Desktop Service Detail (1440px)' },
    { name: 'colour-projects-desktop-1440.png', path: '/projects', w: 1440, h: 900, label: 'Desktop Projects Portfolio (1440px)' },
    { name: 'colour-contact-desktop-1440.png', path: '/contact', w: 1440, h: 900, label: 'Desktop Contact & Enquiry Workflow (1440px)' },

    // Mobile 390px
    { name: 'colour-home-mobile-390.png', path: '/', w: 390, h: 844, label: 'Mobile Home Hero (390px)' },
    { name: 'colour-about-mobile-390.png', path: '/about', w: 390, h: 844, label: 'Mobile About Page (390px)' },
    { name: 'colour-services-mobile-390.png', path: '/services', w: 390, h: 844, label: 'Mobile Services Page (390px)' },
    { name: 'colour-contact-mobile-390.png', path: '/contact', w: 390, h: 844, label: 'Mobile Contact Page (390px)' },
  ]

  console.log('\nCapturing screenshots with updated Deep Burgundy + Silver + Ivory palette...')
  let captureSuccess = 0
  for (const shot of screenshots) {
    const outPath = path.join(ARTIFACT_DIR, shot.name)
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
          `--window-size=${shot.w},${shot.h}`,
          `--screenshot=${outPath}`,
          `http://localhost:${PORT}${shot.path}`,
        ],
        { timeout: 10000 }
      )
      console.log(`✓ [Captured] ${shot.label} -> ${shot.name}`)
      captureSuccess++
    } catch (e) {
      console.error(`✗ Error capturing ${shot.name}:`, e.message)
    }
  }

  console.log(`\n======================================================`)
  console.log(`Screenshots Captured: ${captureSuccess}/${screenshots.length}`)
  console.log(`======================================================`)

  server.close(() => {
    process.exit(captureSuccess === screenshots.length ? 0 : 1)
  })
})
