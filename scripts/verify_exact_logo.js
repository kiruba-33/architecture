import http from 'http'
import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const PORT = 4195
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
  console.log(`Server running on http://127.0.0.1:${PORT}`)

  const cdpPort = 9225
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

  const captures = [
    {
      name: 'exact-logo-header-hero-desktop.png',
      width: 1440,
      height: 900,
      url: `http://127.0.0.1:${PORT}/`,
      scroll: 0
    },
    {
      name: 'exact-logo-header-scrolled-desktop.png',
      width: 1440,
      height: 900,
      url: `http://127.0.0.1:${PORT}/`,
      scroll: 180
    },
    {
      name: 'exact-logo-header-mobile.png',
      width: 390,
      height: 844,
      url: `http://127.0.0.1:${PORT}/`,
      scroll: 0
    }
  ]

  for (const cap of captures) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: cap.width,
      height: cap.height,
      deviceScaleFactor: 1,
      mobile: cap.width < 600
    })

    await send('Page.navigate', { url: cap.url })
    await new Promise(r => setTimeout(r, 600))

    if (cap.scroll) {
      await send('Runtime.evaluate', {
        expression: `
          (() => {
            document.documentElement.style.scrollBehavior = 'auto';
            window.scrollTo(0, ${cap.scroll});
          })()
        `
      })
      await new Promise(r => setTimeout(r, 300))
    }

    const shot = await send('Page.captureScreenshot', { format: 'png' })
    const buf = Buffer.from(shot.data, 'base64')
    fs.writeFileSync(path.join(artifactDir, cap.name), buf)
    console.log(`Saved ${cap.name}`)
  }

  ws.close()
  browser.kill()
  server.close()
  process.exit(0)
})
