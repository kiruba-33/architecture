import http from 'http'
import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const PORT = 4201
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
  console.log(`QA Server running on http://127.0.0.1:${PORT}`)

  const cdpPort = 9231
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
  if (!pageTarget || !pageTarget.webSocketDebuggerUrl) {
    console.error('No page target found')
    process.exit(1)
  }

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

  // 1. Desktop Blog Listing: Top Hero & Featured Article (1440px)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  })
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/blog` })
  await new Promise(r => setTimeout(r, 1000))
  let shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'blog-desktop-hero-featured.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved blog-desktop-hero-featured.png')

  // 2. Desktop Blog Listing: Scrolled to Article Grid & Filters
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 950);
      })()
    `
  })
  await new Promise(r => setTimeout(r, 400))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'blog-desktop-grid-filter.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved blog-desktop-grid-filter.png')

  // 3. Category Filter Test: Click "Materials" category filter
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const materialsBtn = buttons.find(b => b.textContent.includes('Materials'));
        if (materialsBtn) materialsBtn.click();
      })()
    `
  })
  await new Promise(r => setTimeout(r, 400))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'blog-desktop-filter-active.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved blog-desktop-filter-active.png')

  // 4. Desktop Blog Detail Page: Header & Cover Visual
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/blog/the-art-of-architectural-space` })
  await new Promise(r => setTimeout(r, 1000))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'blog-detail-desktop-header.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved blog-detail-desktop-header.png')

  // 5. Desktop Blog Detail Page: Scrolled to Body & Pull Quote
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 900);
      })()
    `
  })
  await new Promise(r => setTimeout(r, 400))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'blog-detail-desktop-body.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved blog-detail-desktop-body.png')

  // 6. Tablet Blog Listing (768px)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 768,
    height: 1024,
    deviceScaleFactor: 1,
    mobile: true
  })
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/blog` })
  await new Promise(r => setTimeout(r, 1000))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'blog-tablet-overview.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved blog-tablet-overview.png')

  // 7. Mobile Blog Listing (390px)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true
  })
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/blog` })
  await new Promise(r => setTimeout(r, 1000))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'blog-mobile-overview.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved blog-mobile-overview.png')

  // 8. Mobile Blog Detail (390px)
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/blog/the-art-of-architectural-space` })
  await new Promise(r => setTimeout(r, 1000))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'blog-mobile-detail.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved blog-mobile-detail.png')

  ws.close()
  browser.kill()
  server.close()
  console.log('All QA screenshots captured successfully!')
  process.exit(0)
})
