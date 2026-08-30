import { spawn } from 'node:child_process'
import { access, copyFile, mkdir, rename } from 'node:fs/promises'
import { chromium } from '/Users/furkantalhayazcicek/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const FPS = 20
const SURE = Number(process.env.DRKOC_REELS_SURE ?? 63)
const KARE_SAYISI = Math.floor(SURE * FPS) + 1
const KOK = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const CHROME = '/Users/furkantalhayazcicek/.cache/puppeteer/chrome-headless-shell/mac_arm-152.0.7977.54/chrome-headless-shell-mac-arm64/chrome-headless-shell'
const SUNUCU = process.env.DRKOC_REELS_URL ?? 'http://127.0.0.1:5175'
const SES = process.env.DRKOC_REELS_SES ?? `${KOK}/public/audio/reels/drkoc-uygulama-tanitim-master.m4a`
const SESSIZ_TASLAK = process.env.DRKOC_SESSIZ === '1'
const GECICI_VIDEO = `${KOK}/exports/.DRKOC-Uygulama-Tanitim-Reels-gecici.mp4`
const CIKTI = SESSIZ_TASLAK
  ? `${KOK}/exports/DRKOC-Uygulama-Tanitim-Reels-Sessiz-Taslak.mp4`
  : `${KOK}/exports/DRKOC-Uygulama-Tanitim-Reels-1080p.mp4`
const WHATSAPP = `${KOK}/exports/DRKOC-Uygulama-Tanitim-Reels-WhatsApp.mp4`
const MASAUSTU = '/Users/furkantalhayazcicek/Desktop/DRKOC-Uygulama-Tanitim-Reels-1080p.mp4'
const URL = `${SUNUCU}/sosyal/reels/drkoc-uygulama-tanitimi?clean=1&render=1#0`

const ffmpegAdaylari = [
  process.env.DRKOC_FFMPEG,
  '/tmp/drkoc-video-tools/node_modules/ffmpeg-static/ffmpeg',
  `${KOK}/node_modules/ffmpeg-static/ffmpeg`,
].filter(Boolean)

let FFMPEG = null
for (const aday of ffmpegAdaylari) {
  try {
    await access(aday)
    FFMPEG = aday
    break
  } catch {
    // Bir sonraki yerel adayı dene.
  }
}

if (!FFMPEG) {
  throw new Error('FFmpeg bulunamadı. Geçici video araçlarını hazırlayıp DRKOC_FFMPEG yolunu belirt.')
}

await access(CHROME)
if (!SESSIZ_TASLAK) await access(SES)
await mkdir(`${KOK}/exports`, { recursive: true })

const tarayici = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
})

const sayfa = await tarayici.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 })
await sayfa.goto(URL, { waitUntil: 'networkidle' })
await sayfa.evaluate(() => document.fonts.ready)

const boyut = await sayfa.locator('.rdt-cerceve').evaluate((oge) => {
  const kutu = oge.getBoundingClientRect()
  return { genislik: kutu.width, yukseklik: kutu.height }
})
if (boyut.genislik !== 1080 || boyut.yukseklik !== 1920) {
  throw new Error(`Sahne ölçüsü beklenenden farklı: ${boyut.genislik}x${boyut.yukseklik}`)
}

const ffmpegGirdileri = [
  '-y',
  '-f', 'image2pipe',
  '-framerate', String(FPS),
  '-vcodec', 'mjpeg',
  '-i', 'pipe:0',
]
if (!SESSIZ_TASLAK) ffmpegGirdileri.push('-i', SES)

const ffmpeg = spawn(FFMPEG, [
  ...ffmpegGirdileri,
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-crf', '18',
  '-pix_fmt', 'yuv420p',
  '-profile:v', 'high',
  '-level', '4.1',
  '-movflags', '+faststart',
  ...(SESSIZ_TASLAK ? ['-an'] : ['-c:a', 'aac', '-b:a', '192k', '-shortest']),
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
  const goruntu = await sayfa.screenshot({ type: 'jpeg', quality: 97, captureBeyondViewport: false })
  if (!ffmpeg.stdin.write(goruntu)) {
    await new Promise((tamam) => ffmpeg.stdin.once('drain', tamam))
  }
  if (kare % 160 === 0 || kare === KARE_SAYISI - 1) {
    console.log(`Kare ${kare + 1}/${KARE_SAYISI}`)
  }
}

ffmpeg.stdin.end()
const kod = await new Promise((tamam) => ffmpeg.once('close', tamam))
await tarayici.close()

if (kod !== 0) throw new Error(`Video kodlama başarısız oldu:\n${ffmpegHatasi.slice(-4000)}`)

await rename(GECICI_VIDEO, CIKTI)

if (!SESSIZ_TASLAK) {
  await copyFile(CIKTI, MASAUSTU)
  const whatsapp = spawn(FFMPEG, [
    '-y', '-i', CIKTI,
    '-vf', 'scale=720:1280',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '24',
    '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-level', '4.0',
    '-movflags', '+faststart',
    '-c:a', 'aac', '-b:a', '128k',
    WHATSAPP,
  ], { stdio: ['ignore', 'ignore', 'pipe'] })
  let whatsappHatasi = ''
  whatsapp.stderr.on('data', (parca) => { whatsappHatasi += parca.toString() })
  const whatsappKodu = await new Promise((tamam) => whatsapp.once('close', tamam))
  if (whatsappKodu !== 0) throw new Error(`WhatsApp sürümü hazırlanamadı:\n${whatsappHatasi.slice(-3000)}`)
}

console.log(`Hazır: ${CIKTI}`)
