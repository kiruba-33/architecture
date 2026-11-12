import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const PORT = 4190
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
  console.log(`Visual Refinement Server running on http://localhost:${PORT}`)
  const browserBin = '/opt/brave.com/brave/brave-browser'

  const screenshots = [
    // 1. Homepage hero with new architectural background image (Desktop 1440px)
    {
      name: 'visual-homepage-hero-desktop-1440.png',
      path: '/',
      w: 1440,
      h: 900,
      label: '1. Homepage Hero with Architectural Background & Restored Eyebrow Line (1440px)',
    },
    // 2. About page image with complete visible caption & restored eyebrow line (Desktop 1440px)
    {
      name: 'visual-about-desktop-1440.png',
      path: '/about',
      w: 1440,
      h: 1200,
      label: '2. About Page with Restored Eyebrow Line and Visible Image Caption (1440px)',
    },
    // 3. Services page hero (Desktop 1440px)
    {
      name: 'visual-services-hero-desktop-1440.png',
      path: '/services',
      w: 1440,
      h: 900,
      label: '3. Services Page Hero with Restored Eyebrow Line (1440px)',
    },
    // 4. Mobile homepage hero (Mobile 390px)
    {
      name: 'visual-homepage-hero-mobile-390.png',
      path: '/',
      w: 390,
      h: 844,
      label: '4. Mobile Homepage Hero (390px)',
    },
    // 5. Mobile About page and image caption (Mobile 390px)
    {
      name: 'visual-about-mobile-390.png',
      path: '/about',
      w: 390,
      h: 1400,
      label: '5. Mobile About Page and Stacked Image Caption (390px)',
    },
    // 6. Projects page hero (Desktop 1440px)
    {
      name: 'visual-projects-desktop-1440.png',
      path: '/projects',
      w: 1440,
      h: 900,
      label: '6. Projects Page Hero with Restored Eyebrow Line (1440px)',
    },
    // 7. Contact page hero (Desktop 1440px)
    {
      name: 'visual-contact-desktop-1440.png',
      path: '/contact',
      w: 1440,
      h: 900,
      label: '7. Contact Page Hero with Restored Eyebrow Line (1440px)',
    },
    // 8. Tablet validation (768px)
    {
      name: 'visual-tablet-about-768.png',
      path: '/about',
      w: 768,
      h: 1024,
      label: '8. Tablet About Page Validation (768px)',
    },
    // 9. Laptop validation (1024px)
    {
      name: 'visual-laptop-services-1024.png',
      path: '/services',
      w: 1024,
      h: 800,
      label: '9. Laptop Services Page Validation (1024px)',
    },
  ]

  console.log('\nCapturing screenshots for visual refinement review...')
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
        { timeout: 12000 }
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
