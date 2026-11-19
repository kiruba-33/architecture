import http from 'http'
import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const PORT = 4230
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
  const cdpPort = 9260
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

  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })

  // 1. Home CTA: "START A CONVERSATION" (High-contrast white on coral background)
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` })
  await new Promise(r => setTimeout(r, 1000))
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const all = Array.from(document.querySelectorAll('span, div, h2'));
        const el = all.find(e => e.textContent.trim() === 'START A CONVERSATION');
        if (el) el.closest('section').scrollIntoView({ block: 'center' });
      })()
    `
  })
  await new Promise(r => setTimeout(r, 500))
  let shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'eyebrow-cta-start-conversation.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved eyebrow-cta-start-conversation.png')

  // 2. About Page: "OUR PHILOSOPHY" (High-contrast charcoal on light ivory background)
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/about` })
  await new Promise(r => setTimeout(r, 1000))
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const all = Array.from(document.querySelectorAll('span, div'));
        const el = all.find(e => e.textContent.trim() === 'OUR PHILOSOPHY');
        if (el) el.closest('section').scrollIntoView({ block: 'start' });
      })()
    `
  })
  await new Promise(r => setTimeout(r, 500))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'eyebrow-about-our-philosophy.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved eyebrow-about-our-philosophy.png')

  // 3. Home Page: "SELECTED WORKS" (High-contrast charcoal on white card)
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` })
  await new Promise(r => setTimeout(r, 1000))
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const all = Array.from(document.querySelectorAll('span'));
        const el = all.find(e => e.textContent.trim() === 'Selected Works');
        if (el) el.closest('section').scrollIntoView({ block: 'center' });
      })()
    `
  })
  await new Promise(r => setTimeout(r, 500))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'eyebrow-home-selected-works.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved eyebrow-home-selected-works.png')

  // 4. Hero Carousel: "01 • PROPORTION & GEOMETRY" (High-contrast white on dark hero slide)
  await send('Runtime.evaluate', {
    expression: `window.scrollTo(0, 0);`
  })
  await new Promise(r => setTimeout(r, 500))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'eyebrow-hero-carousel.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved eyebrow-hero-carousel.png')

  browser.kill()
  server.close()
  console.log('Done')
  process.exit(0)
})
