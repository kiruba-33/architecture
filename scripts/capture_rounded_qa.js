import http from 'http'
import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const PORT = 4205
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
  console.log(`Rounded QA Server running on http://127.0.0.1:${PORT}`)

  const cdpPort = 9235
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

  // 1. Desktop Header & Buttons (1440px)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  })
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` })
  await new Promise(r => setTimeout(r, 1000))
  let shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'rounded-desktop-header-buttons.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved rounded-desktop-header-buttons.png')

  // 2. Desktop Home Services Cards
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        document.documentElement.style.scrollBehavior = 'auto';
        const sec = document.querySelector('#services');
        if (sec) sec.scrollIntoView({ block: 'start' });
        else window.scrollTo(0, 1600);
      })()
    `
  })
  await new Promise(r => setTimeout(r, 400))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'rounded-desktop-home-services.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved rounded-desktop-home-services.png')

  // 3. Desktop Portfolio Cards
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/projects` })
  await new Promise(r => setTimeout(r, 1000))
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 600);
      })()
    `
  })
  await new Promise(r => setTimeout(r, 400))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'rounded-desktop-portfolio-cards.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved rounded-desktop-portfolio-cards.png')

  // 4. Desktop Blog Cards
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/blog` })
  await new Promise(r => setTimeout(r, 1000))
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 500);
      })()
    `
  })
  await new Promise(r => setTimeout(r, 400))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'rounded-desktop-blog-cards.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved rounded-desktop-blog-cards.png')

  // 5. Desktop About Founders Cards
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/about` })
  await new Promise(r => setTimeout(r, 1000))
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        document.documentElement.style.scrollBehavior = 'auto';
        const headers = Array.from(document.querySelectorAll('h2, h3'));
        const foundersHeader = headers.find(h => h.textContent.includes('Meet Our Founders'));
        if (foundersHeader) {
          foundersHeader.scrollIntoView({ block: 'start' });
          window.scrollBy(0, -60);
        }
      })()
    `
  })
  await new Promise(r => setTimeout(r, 400))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'rounded-desktop-about-founders.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved rounded-desktop-about-founders.png')

  // 6. Desktop Contact Form
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/contact` })
  await new Promise(r => setTimeout(r, 1000))
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 450);
      })()
    `
  })
  await new Promise(r => setTimeout(r, 400))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'rounded-desktop-contact-form.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved rounded-desktop-contact-form.png')

  // 7. Mobile View (390px)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true
  })
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` })
  await new Promise(r => setTimeout(r, 1000))
  shot = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(path.join(artifactDir, 'rounded-mobile-home.png'), Buffer.from(shot.data, 'base64'))
  console.log('Saved rounded-mobile-home.png')

  ws.close()
  browser.kill()
  server.close()
  console.log('All Rounded UI screenshots captured successfully!')
  process.exit(0)
})
