import { access, mkdir } from 'node:fs/promises'
import { chromium } from '/Users/furkantalhayazcicek/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const KOK = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const CHROME = '/Users/furkantalhayazcicek/.cache/puppeteer/chrome-headless-shell/mac_arm-152.0.7977.54/chrome-headless-shell-mac-arm64/chrome-headless-shell'
const SUNUCU = process.env.DRKOC_REELS_URL ?? 'http://127.0.0.1:5173'
const CIKTI = `${KOK}/exports/drkoc-fark-reels/screenshots-v3`

const EKRANLAR = [
  ['01-etkilesimli-atlas', '/fizik-atlasi', 'Fiziği izleme.'],
  ['02-ders-kutuphanesi', '/kutuphane?capture=reels', 'Nasıl çalışmak istersin?'],
  ['03-soru-bankalari', '/kutuphane/sorular/sinif-9?capture=reels', '9. Sınıf'],
  ['04-ai-soru-coz', '/soru-coz?capture=reels', 'AI Soru Çöz'],
  ['05-analiz', '/analiz?capture=reels', 'Deniz, gelişim tablon'],
  ['06-ai-koc', '/ai-koc?capture=reels', 'Son TYT denememde'],
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
  deviceScaleFactor: 2,
  colorScheme: 'light',
  reducedMotion: 'reduce',
})

for (const [ad, yol, beklenenMetin] of EKRANLAR) {
  await sayfa.goto(`${SUNUCU}${yol}`, { waitUntil: 'domcontentloaded' })
  await sayfa.getByText(beklenenMetin, { exact: false }).first().waitFor({ state: 'visible', timeout: 20_000 })
  await sayfa.evaluate(async () => {
    await document.fonts.ready
    window.scrollTo(0, 0)
  })
  await sayfa.waitForTimeout(900)
  await sayfa.screenshot({
    path: `${CIKTI}/${ad}.png`,
    captureBeyondViewport: false,
  })
}

await tarayici.close()
console.log(`Dikey DRKOÇ ürün ekranları hazır: ${CIKTI}`)
