import { access, copyFile, mkdir, rename } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import puppeteer from '/tmp/drkoc-video-tools/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js'

const KOK = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const HTML = `${KOK}/scripts/sosyal/reels-fizik-kimya-biyoloji.html`
const CHROME = '/Users/furkantalhayazcicek/.cache/puppeteer/chrome-headless-shell/mac_arm-152.0.7977.54/chrome-headless-shell-mac-arm64/chrome-headless-shell'
const FFMPEG = '/tmp/drkoc-video-tools/node_modules/ffmpeg-static/ffmpeg'
const CIKTI = `${KOK}/exports/DRKOC-Kaydir-Kavra-Fizik-Kimya-Biyoloji-Detayli.mp4`
const GECICI = `${KOK}/exports/.DRKOC-Kaydir-Kavra-Fizik-Kimya-Biyoloji-Detayli-gecici.mp4`
const FPS = 20
const SURE = 75

await Promise.all([access(HTML), access(CHROME), access(FFMPEG)])
await mkdir(`${KOK}/exports`, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 })
await page.goto(`file://${HTML}`, { waitUntil: 'load' })
await page.evaluate(() => document.fonts.ready)

const ffmpeg = spawn(FFMPEG, [
  '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-vcodec', 'mjpeg', '-i', 'pipe:0',
  '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p',
  '-profile:v', 'high', '-level', '4.1', '-r', String(FPS), '-t', String(SURE),
  '-movflags', '+faststart', '-an', GECICI,
], { stdio: ['pipe', 'ignore', 'pipe'] })

let ffmpegError = ''
ffmpeg.stderr.on('data', (chunk) => { ffmpegError += chunk.toString() })
const total = Math.floor(SURE * FPS) + 1
for (let frame = 0; frame < total; frame += 1) {
  const time = Math.min(frame / FPS, SURE)
  await page.evaluate((value) => window.setTime(value), time)
  await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))))
  const screenshot = await page.screenshot({ type: 'jpeg', quality: 98, captureBeyondViewport: false })
  if (!ffmpeg.stdin.write(screenshot)) await new Promise((resolve) => ffmpeg.stdin.once('drain', resolve))
  if (frame % 100 === 0 || frame === total - 1) console.log(`Kare ${frame + 1}/${total}`)
}
ffmpeg.stdin.end()
const code = await new Promise((resolve) => ffmpeg.once('close', resolve))
await browser.close()
if (code !== 0) throw new Error(`Video kodlama başarısız oldu:\n${ffmpegError.slice(-6000)}`)
await rename(GECICI, CIKTI)
const masaustu = '/Users/furkantalhayazcicek/Desktop/DRKOC-Kaydir-Kavra-Fizik-Kimya-Biyoloji-Detayli.mp4'
await copyFile(CIKTI, masaustu)
console.log(`Hazır: ${CIKTI}`)
console.log(`Masaüstü kopyası: ${masaustu}`)
