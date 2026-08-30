import { spawn } from 'node:child_process'
import { access, copyFile, mkdir, rename } from 'node:fs/promises'
import puppeteer from '/tmp/drkoc-video-tools/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js'

const FPS = 20
const SURE = 77.25
const KARE_SAYISI = Math.floor(SURE * FPS) + 1
const KOK = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const CHROME = '/Users/furkantalhayazcicek/.cache/puppeteer/chrome-headless-shell/mac_arm-152.0.7977.54/chrome-headless-shell-mac-arm64/chrome-headless-shell'
const FFMPEG = '/tmp/drkoc-video-tools/node_modules/ffmpeg-static/ffmpeg'
const SES = `${KOK}/public/audio/reels/sabit-ivmeli-hareket-gold-v5.m4a`
const GECICI_VIDEO = `${KOK}/exports/.DRKOC-Reels-Yuksek-Kalite-gecici.mp4`
const CIKTI = `${KOK}/exports/DRKOC-Reels-Yuksek-Kalite-1080p.mp4`
const MASAUSTU = '/Users/furkantalhayazcicek/Desktop/DRKOC-Reels-Yuksek-Kalite.mp4'
const URL = 'http://127.0.0.1:5173/sosyal/reels/sabit-ivmeli-hareket?clean=1&render=1#0'

await Promise.all([access(CHROME), access(FFMPEG), access(SES)])
await mkdir(`${KOK}/exports`, { recursive: true })

const tarayici = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
})

const sayfa = await tarayici.newPage()
await sayfa.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 })
await sayfa.goto(URL, { waitUntil: 'networkidle0' })
await sayfa.evaluate(() => document.fonts.ready)

const boyut = await sayfa.$eval('.ria-cerceve', (oge) => {
  const kutu = oge.getBoundingClientRect()
  return { genislik: kutu.width, yukseklik: kutu.height }
})
if (boyut.genislik !== 1080 || boyut.yukseklik !== 1920) {
  throw new Error(`Sahne ölçüsü beklenenden farklı: ${boyut.genislik}x${boyut.yukseklik}`)
}

const ffmpeg = spawn(FFMPEG, [
  '-y',
  '-f', 'image2pipe',
  '-framerate', String(FPS),
  '-vcodec', 'mjpeg',
  '-i', 'pipe:0',
  '-i', SES,
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-crf', '18',
  '-pix_fmt', 'yuv420p',
  '-profile:v', 'high',
  '-level', '4.1',
  '-movflags', '+faststart',
  '-c:a', 'aac',
  '-b:a', '192k',
  '-shortest',
  GECICI_VIDEO,
], { stdio: ['pipe', 'ignore', 'pipe'] })

let ffmpegHatasi = ''
ffmpeg.stderr.on('data', (parca) => { ffmpegHatasi += parca.toString() })

for (let kare = 0; kare < KARE_SAYISI; kare += 1) {
  const zaman = Math.min(kare / FPS, SURE)
  await sayfa.evaluate((yeniZaman) => {
    history.replaceState(null, '', `#${yeniZaman.toFixed(3)}`)
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  }, zaman)
  await sayfa.evaluate(() => new Promise((tamam) => requestAnimationFrame(() => requestAnimationFrame(tamam))))
  const goruntu = await sayfa.screenshot({
    type: 'jpeg',
    quality: 97,
    captureBeyondViewport: false,
  })
  if (!ffmpeg.stdin.write(goruntu)) {
    await new Promise((tamam) => ffmpeg.stdin.once('drain', tamam))
  }
  if (kare % 200 === 0 || kare === KARE_SAYISI - 1) {
    console.log(`Kare ${kare + 1}/${KARE_SAYISI}`)
  }
}

ffmpeg.stdin.end()
const kod = await new Promise((tamam) => ffmpeg.once('close', tamam))
await tarayici.close()

if (kod !== 0) throw new Error(`Video kodlama başarısız oldu:\n${ffmpegHatasi.slice(-4000)}`)

await rename(GECICI_VIDEO, CIKTI)
await copyFile(CIKTI, MASAUSTU)
console.log(`Hazır: ${MASAUSTU}`)
