import https from 'node:https'
import fs from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const IMAGES_DIR = path.resolve(process.cwd(), 'public/images')

const imageList = [
  { name: 'hero-home', id: 'photo-1486406146926-c627a92ad1ab', width: 2000, quality: 85 },
  { name: 'hero-construction', id: 'photo-1504307651254-35680f356dfd', width: 2000, quality: 85 },
  { name: 'about-engineering', id: 'photo-1503387762-592deb58ef4e', width: 1200, quality: 85 },
  { name: 'home-showcase', id: 'photo-1600585154340-be6161a56a0c', width: 1200, quality: 85 },
  { name: 'service-vastu', id: 'photo-1600585154340-be6161a56a0c', width: 1200, quality: 80 },
  { name: 'service-elevation', id: 'photo-1600596542815-ffad4c1539a9', width: 1200, quality: 80 },
  { name: 'service-construction', id: 'photo-1504307651254-35680f356dfd', width: 1200, quality: 80 },
  { name: 'service-renovation', id: 'photo-1503387762-592deb58ef4e', width: 1200, quality: 80 },
  { name: 'service-labour', id: 'photo-1504307651254-35680f356dfd', width: 1200, quality: 80 },
  { name: 'service-interior', id: 'photo-1618221195710-dd6b41faaea6', width: 1200, quality: 80 },
  { name: 'service-waterproofing', id: 'photo-1590381105924-c72589b9ef3f', width: 1200, quality: 80 },
]

function downloadUrl(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath)
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadUrl(res.headers.location, destPath).then(resolve).catch(reject)
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`))
      }
      res.pipe(file)
      file.on('finish', () => file.close(resolve))
    }).on('error', (err) => {
      fs.unlink(destPath, () => {})
      reject(err)
    })
  })
}

async function run() {
  fs.mkdirSync(IMAGES_DIR, { recursive: true })
  console.log('Downloading and optimizing architectural photographs locally...')

  for (const item of imageList) {
    const tempJpg = path.join(IMAGES_DIR, `${item.name}.temp.jpg`)
    const targetWebp = path.join(IMAGES_DIR, `${item.name}.webp`)
    const targetJpg = path.join(IMAGES_DIR, `${item.name}.jpg`)
    const url = `https://images.unsplash.com/${item.id}?auto=format&fit=crop&w=${item.width}&q=${item.quality}`

    try {
      console.log(`Downloading ${item.name} (${item.id})...`)
      await downloadUrl(url, tempJpg)

      // Convert to optimized WebP
      await execFileAsync('convert', [tempJpg, '-quality', `${item.quality}`, targetWebp])
      // Keep a fallback JPEG
      await execFileAsync('convert', [tempJpg, '-quality', `${item.quality}`, targetJpg])

      fs.unlinkSync(tempJpg)
      const statWebp = fs.statSync(targetWebp)
      console.log(`✓ [Created] ${item.name}.webp (${Math.round(statWebp.size / 1024)} KB)`)
    } catch (err) {
      console.error(`✗ Error processing ${item.name}:`, err.message)
    }
  }
}

run()
