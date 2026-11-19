import http from 'http'
import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const PORT = 4215
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
  const cdpPort = 9245
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

  // 1. Home Section 5 - Portfolio Preview Centered
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` })
  await new Promise(r => setTimeout(r, 1000))
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const headings = Array.from(document.querySelectorAll('h2'));
        const h2 = headings.find(el => el.textContent.includes('Portfolio Under Curation'));
        if (h2) {
          h2.closest('section').scrollIntoView({ block: 'center' });
        }
      })()
    `
  })
  await new Promise(r => setTimeout(r, 600))
  let shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'bg-all-desktop-home-curation-centered.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved bg-all-desktop-home-curation-centered.png')

  // 2. Services Section 3 - Core Services Grid Centered
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/services` })
  await new Promise(r => setTimeout(r, 1000))
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const headings = Array.from(document.querySelectorAll('h2'));
        const h2 = headings.find(el => el.textContent.includes('Seven Core Capabilities'));
        if (h2) {
          h2.closest('section').scrollIntoView({ block: 'start' });
        }
      })()
    `
  })
  await new Promise(r => setTimeout(r, 600))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'bg-all-desktop-services-grid-centered.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved bg-all-desktop-services-grid-centered.png')

  browser.kill()
  server.close()
  console.log('Done')
  process.exit(0)
})
