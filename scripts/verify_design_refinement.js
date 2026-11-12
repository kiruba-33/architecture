import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const PORT = 4185
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
  console.log(`Design Refinement Verification Server running on http://localhost:${PORT}`)
  const browserBin = '/opt/brave.com/brave/brave-browser'

  // Screenshots required by user prompt
  const screenshots = [
    // Desktop 1440px
    { name: 'refinement-home-desktop-1440.png', path: '/', w: 1440, h: 900, label: 'Desktop Home (1440px)' },
    { name: 'refinement-about-desktop-1440.png', path: '/about', w: 1440, h: 900, label: 'Desktop About (1440px)' },
    { name: 'refinement-services-desktop-1440.png', path: '/services', w: 1440, h: 900, label: 'Desktop Services (1440px)' },
    { name: 'refinement-service-detail-desktop-1440.png', path: '/services/vastu-planning', w: 1440, h: 900, label: 'Desktop Service Detail (1440px)' },
    { name: 'refinement-projects-desktop-1440.png', path: '/projects', w: 1440, h: 900, label: 'Desktop Projects (1440px)' },
    { name: 'refinement-contact-desktop-1440.png', path: '/contact', w: 1440, h: 900, label: 'Desktop Contact (1440px)' },

    // Mobile 390px (Inner-page Heroes)
    { name: 'refinement-about-mobile-390.png', path: '/about', w: 390, h: 844, label: 'Mobile About Hero (390px)' },
    { name: 'refinement-services-mobile-390.png', path: '/services', w: 390, h: 844, label: 'Mobile Services Hero (390px)' },
    { name: 'refinement-service-detail-mobile-390.png', path: '/services/vastu-planning', w: 390, h: 844, label: 'Mobile Service Detail (390px)' },
    { name: 'refinement-projects-mobile-390.png', path: '/projects', w: 390, h: 844, label: 'Mobile Projects Hero (390px)' },
    { name: 'refinement-contact-mobile-390.png', path: '/contact', w: 390, h: 844, label: 'Mobile Contact Hero (390px)' },
    { name: 'refinement-404-mobile-390.png', path: '/unknown-route-test', w: 390, h: 844, label: 'Mobile 404 Simplified Hero (390px)' },

    // Tablet 768px & Laptop 1024px
    { name: 'refinement-about-tablet-768.png', path: '/about', w: 768, h: 1024, label: 'Tablet About Hero (768px)' },
    { name: 'refinement-services-laptop-1024.png', path: '/services', w: 1024, h: 768, label: 'Laptop Services Hero (1024px)' },
  ]

  console.log('\nCapturing screenshots across required breakpoints...')
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

  // Verification checks on DOM content
  console.log('\nRunning DOM Integrity Checks...')
  const domChecks = [
    { path: '/', title: 'Home - Hero Headline', expect: 'Shaping Built Environments with Structural Discipline.' },
    { path: '/', title: 'Home - Dark Hero Image', expect: 'photo-1541888946425-d0fbb1861564' },
    { path: '/about', title: 'About - PCL Eyebrow', expect: 'ABOUT US' },
    { path: '/about', title: 'About - Editorial H1', expect: 'Building with Purpose, Planning with Precision' },
    { path: '/services', title: 'Services - PCL Eyebrow', expect: 'OUR SERVICES' },
    { path: '/services', title: 'Services - Editorial H1', expect: 'Complete Solutions for Every Stage of Construction' },
    { path: '/services/vastu-planning', title: 'Service Detail - Eyebrow', expect: 'OUR SERVICES / VASTU PLANNING' },
    { path: '/services/vastu-planning', title: 'Service Detail - Editorial H1', expect: 'Engineered Vastu Blueprints for Modern Architecture' },
    { path: '/projects', title: 'Projects - PCL Eyebrow', expect: 'OUR WORK' },
    { path: '/projects', title: 'Projects - Editorial H1', expect: 'Explore Our Approach to Construction and Design' },
    { path: '/contact', title: 'Contact - PCL Eyebrow', expect: 'GET IN TOUCH' },
    { path: '/contact', title: 'Contact - Editorial H1', expect: "Let's Discuss Your Next Project" },
    { path: '/unknown-test', title: '404 - Simple Eyebrow', expect: 'STATUS 404' },
    { path: '/unknown-test', title: '404 - Simple H1', expect: 'Page Not Located' },
  ]

  let domPassed = 0
  for (const check of domChecks) {
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
          `http://localhost:${PORT}${check.path}`,
        ],
        { timeout: 8000 }
      )

      if (stdout.includes(check.expect)) {
        domPassed++
        console.log(`✓ [DOM Check] ${check.title}: Found "${check.expect}"`)
      } else {
        console.error(`✗ [DOM Check] ${check.title}: Could not find "${check.expect}"`)
      }
    } catch (e) {
      console.error(`✗ [DOM Check] ${check.title} error:`, e.message)
    }
  }

  console.log(`\n======================================================`)
  console.log(`Screenshots Captured: ${captureSuccess}/${screenshots.length}`)
  console.log(`DOM Checks Passed:    ${domPassed}/${domChecks.length}`)
  console.log(`======================================================`)

  server.close(() => {
    const allPassed = captureSuccess === screenshots.length && domPassed === domChecks.length
    process.exit(allPassed ? 0 : 1)
  })
})
