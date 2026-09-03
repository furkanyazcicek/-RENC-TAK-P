import { access, mkdir } from 'node:fs/promises'
import { chromium } from '/Users/furkantalhayazcicek/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const KOK = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const CHROME = '/Users/furkantalhayazcicek/.cache/puppeteer/chrome-headless-shell/mac_arm-152.0.7977.54/chrome-headless-shell-mac-arm64/chrome-headless-shell'
const SUNUCU = process.env.DRKOC_REELS_URL ?? 'http://127.0.0.1:5173'
const FPS = Number(process.env.DRKOC_GEMINI_FPS ?? 12)
const SURE = Number(process.env.DRKOC_GEMINI_SURE ?? 6)
const CIKTI = `${KOK}/outputs/DRKOC-Reels-01/05-video/.frames`
const ROTA = '/sosyal/reels/drkoc-uygulama-tanitimi?clean=1&render=1'

const KLIPLER = [
  ['01-ai-soru-coz', 4.2],
  ['02-analiz', 15.0],
  ['03-etkilesimli-ders', 36.6],
]

await access(CHROME)
await mkdir(CIKTI, { recursive: true })

const tarayici = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
})

const sayfa = await tarayici.newPage({
  viewport: { width: 1080, height: 1920 },
  deviceScaleFactor: 1,
  colorScheme: 'dark',
})

await sayfa.goto(`${SUNUCU}${ROTA}#0`, { waitUntil: 'networkidle' })
await sayfa.evaluate(() => document.fonts.ready)

for (const [ad, baslangic] of KLIPLER) {
  const klasor = `${CIKTI}/${ad}`
  await mkdir(klasor, { recursive: true })
  const kareSayisi = Math.round(SURE * FPS)

  for (let kare = 0; kare < kareSayisi; kare += 1) {
    const zaman = baslangic + (kare / FPS)
    await sayfa.evaluate((yeniZaman) => {
      history.replaceState(null, '', `#${yeniZaman.toFixed(3)}`)
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    }, zaman)
    await sayfa.evaluate(() => new Promise((tamam) => requestAnimationFrame(() => requestAnimationFrame(tamam))))
    await sayfa.screenshot({
      path: `${klasor}/${String(kare).padStart(4, '0')}.jpg`,
      type: 'jpeg',
      quality: 92,
      captureBeyondViewport: false,
    })
  }
  console.log(`${ad}: ${kareSayisi} kare`)
}

await tarayici.close()
console.log(`Gemini hareket kareleri hazır: ${CIKTI}`)
