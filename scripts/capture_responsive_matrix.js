import http from 'http'
import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const PORT = 4225
const distDir = path.resolve('dist')

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0]
  if (reqPath === '/') reqPath = '/index.html'

  let filePath = path.join(distDir, reqPath)
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html')
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath)
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.webp': 'image/webp',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml',
    }
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' })
    fs.createReadStream(filePath).pipe(res)
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
})

server.listen(PORT, async () => {
  console.log(`Responsive Matrix QA Server running on http://127.0.0.1:${PORT}`)

  const cdpPort = 9255
  const browser = spawn('/opt/brave.com/brave/brave-browser', [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${cdpPort}`,
    'about:blank'
  ])

  await new Promise(r => setTimeout(r, 1200))

  async function fetchJson(endpoint) {
    return new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${cdpPort}${endpoint}`, (res) => {
        let body = ''
        res.on('data', chunk => body += chunk)
        res.on('end', () => {
          try { resolve(JSON.parse(body)) } catch { resolve(body) }
        })
      }).on('error', reject)
    })
  }

  const targets = await fetchJson('/json/list')
  const pageTarget = targets.find(t => t.type === 'page')
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl)
  await new Promise(r => ws.onopen = r)

  let id = 1
  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++
      const handler = (event) => {
        const data = JSON.parse(event.data)
        if (data.id === msgId) {
          ws.removeEventListener('message', handler)
          if (data.error) reject(data.error)
          else resolve(data.result)
        }
      }
      ws.addEventListener('message', handler)
      ws.send(JSON.stringify({ id: msgId, method, params }))
    })
  }

  await send('Page.enable')
  await send('Runtime.enable')

  const artifactDir = '/home/kiruba/.gemini/antigravity/brain/a8e34d04-2957-4603-956e-5a7a8b6a67e7'

  async function snap(filename, url, width, height, isMobile = false, scaleFactor = 1) {
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: scaleFactor,
      mobile: isMobile
    })
    await send('Page.navigate', { url: `http://127.0.0.1:${PORT}${url}` })
    await new Promise(r => setTimeout(r, 800))
    const shot = await send('Page.captureScreenshot', { format: 'png' })
    fs.writeFileSync(path.join(artifactDir, filename), Buffer.from(shot.data, 'base64'))
    console.log(`Saved ${filename}`)
  }

  // 1. Home Hero Carousel across 5 breakpoints
  await snap('resp-home-desktop-1440.png', '/', 1440, 900, false)
  await snap('resp-home-laptop-1280.png', '/', 1280, 800, false)
  await snap('resp-home-tablet-768.png', '/', 768, 1024, true)
  await snap('resp-home-mobile-390.png', '/', 390, 844, true, 2)
  await snap('resp-home-small-320.png', '/', 320, 568, true, 2)

  // 2. About Page (Desktop 1440, Tablet 768, Mobile 390)
  await snap('resp-about-desktop-1440.png', '/about', 1440, 900, false)
  await snap('resp-about-tablet-768.png', '/about', 768, 1024, true)
  await snap('resp-about-mobile-390.png', '/about', 390, 844, true, 2)

  // 3. Services Page
  await snap('resp-services-desktop-1440.png', '/services', 1440, 900, false)
  await snap('resp-services-tablet-768.png', '/services', 768, 1024, true)
  await snap('resp-services-mobile-390.png', '/services', 390, 844, true, 2)

  // 4. Projects Page
  await snap('resp-projects-desktop-1440.png', '/projects', 1440, 900, false)
  await snap('resp-projects-tablet-768.png', '/projects', 768, 1024, true)
  await snap('resp-projects-mobile-390.png', '/projects', 390, 844, true, 2)

  // 5. Blog Page
  await snap('resp-blog-desktop-1440.png', '/blog', 1440, 900, false)
  await snap('resp-blog-mobile-390.png', '/blog', 390, 844, true, 2)

  // 6. Contact Page
  await snap('resp-contact-desktop-1440.png', '/contact', 1440, 900, false)
  await snap('resp-contact-mobile-390.png', '/contact', 390, 844, true, 2)

  // 7. Mobile Navigation Drawer Opened
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true })
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` })
  await new Promise(r => setTimeout(r, 800))
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = document.querySelector('button[aria-label="Open mobile navigation menu"]');
        if (btn) btn.click();
      })()
    `
  })
  await new Promise(r => setTimeout(r, 500))
  const navShot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'resp-mobile-menu-drawer.png'), Buffer.from(navShot.data, 'base64'))
  console.log('Saved resp-mobile-menu-drawer.png')

  browser.kill()
  server.close()
  console.log('Responsive matrix QA capture completed successfully!')
  process.exit(0)
})
