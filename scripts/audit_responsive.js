import http from 'http'
import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const PORT = 4220
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
  console.log(`Responsive Audit Server running on http://127.0.0.1:${PORT}`)

  const cdpPort = 9250
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

  const viewports = [
    { name: 'Desktop', width: 1440, height: 900, mobile: false },
    { name: 'Laptop-1280', width: 1280, height: 800, mobile: false },
    { name: 'Laptop-1024', width: 1024, height: 768, mobile: false },
    { name: 'Tablet-768', width: 768, height: 1024, mobile: true },
    { name: 'Mobile-390', width: 390, height: 844, mobile: true },
    { name: 'SmallMobile-320', width: 320, height: 568, mobile: true }
  ]

  const routes = [
    '/',
    '/about',
    '/services',
    '/projects',
    '/blog',
    '/contact',
    '/services/vastu-planning',
    '/projects/solis-cantilever-pavilion',
    '/blog/the-art-of-architectural-space'
  ]

  const issues = []

  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.mobile
    })

    for (const route of routes) {
      await send('Page.navigate', { url: `http://127.0.0.1:${PORT}${route}` })
      await new Promise(r => setTimeout(r, 600))

      const check = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const scrollWidth = document.documentElement.scrollWidth;
            const innerWidth = window.innerWidth;
            const hasHScroll = scrollWidth > innerWidth + 1; // 1px threshold for subpixels
            
            // Find overflowing elements
            let overflowingEls = [];
            if (hasHScroll) {
              const all = document.querySelectorAll('*');
              for (const el of all) {
                const rect = el.getBoundingClientRect();
                if (rect.right > innerWidth + 2) {
                  overflowingEls.push({
                    tag: el.tagName,
                    class: (el.className || '').toString().slice(0, 60),
                    right: Math.round(rect.right),
                    width: Math.round(rect.width)
                  });
                }
              }
            }

            return {
              scrollWidth,
              innerWidth,
              hasHScroll,
              overflowCount: overflowingEls.length,
              sampleOverflows: overflowingEls.slice(0, 3)
            };
          })()
        `,
        returnByValue: true
      })

      const res = check.result.value
      if (res.hasHScroll) {
        issues.push({
          viewport: vp.name,
          route,
          scrollWidth: res.scrollWidth,
          innerWidth: res.innerWidth,
          overflows: res.sampleOverflows
        })
        console.error(`[OVERFLOW] ${vp.name} (${vp.width}px) on ${route}: scrollWidth=${res.scrollWidth} > innerWidth=${res.innerWidth}`)
      } else {
        console.log(`[PASS] ${vp.name} (${vp.width}px) on ${route}`)
      }
    }
  }

  console.log(`\n=== AUDIT SUMMARY: ${issues.length} overflow issues found ===`)
  if (issues.length > 0) {
    console.log(JSON.stringify(issues, null, 2))
  }

  browser.kill()
  server.close()
  process.exit(0)
})
