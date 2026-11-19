import http from 'http'
import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const PORT = 4198
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

  const cdpPort = 9228
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

  // Set desktop viewport
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  })

  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` })
  await new Promise(r => setTimeout(r, 1000))

  // 1. Capture Slide 01
  let shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'carousel-slide-1-desktop.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved carousel-slide-1-desktop.png')

  // 2. Click Slide 02
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const tabs = document.querySelectorAll('button[role="tab"]');
        if (tabs[1]) tabs[1].click();
      })()
    `
  })
  await new Promise(r => setTimeout(r, 800))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'carousel-slide-2-desktop.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved carousel-slide-2-desktop.png')

  // 3. Click Slide 03
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const tabs = document.querySelectorAll('button[role="tab"]');
        if (tabs[2]) tabs[2].click();
      })()
    `
  })
  await new Promise(r => setTimeout(r, 800))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'carousel-slide-3-desktop.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved carousel-slide-3-desktop.png')

  // 4. Click Slide 04
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const tabs = document.querySelectorAll('button[role="tab"]');
        if (tabs[3]) tabs[3].click();
      })()
    `
  })
  await new Promise(r => setTimeout(r, 800))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'carousel-slide-4-desktop.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved carousel-slide-4-desktop.png')

  // 5. Click Slide 05
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const tabs = document.querySelectorAll('button[role="tab"]');
        if (tabs[4]) tabs[4].click();
      })()
    `
  })
  await new Promise(r => setTimeout(r, 800))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'carousel-slide-5-desktop.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved carousel-slide-5-desktop.png')

  // 6. Capture Mobile (390px)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true
  })
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` })
  await new Promise(r => setTimeout(r, 1000))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'carousel-slide-1-mobile.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved carousel-slide-1-mobile.png')

  // 7. Verify Gallery Section on Desktop
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  })
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 1800);
      })()
    `
  })
  await new Promise(r => setTimeout(r, 600))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'gallery-verified-desktop.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved gallery-verified-desktop.png')

  ws.close()
  browser.kill()
  server.close()
  process.exit(0)
})
