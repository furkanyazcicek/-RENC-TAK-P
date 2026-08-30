import { access, mkdir } from 'node:fs/promises'
import { chromium } from '/Users/furkantalhayazcicek/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const KOK = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const CHROME = '/Users/furkantalhayazcicek/.cache/puppeteer/chrome-headless-shell/mac_arm-152.0.7977.54/chrome-headless-shell-mac-arm64/chrome-headless-shell'
const SUNUCU = process.env.DRKOC_REELS_URL ?? 'http://127.0.0.1:5173'
const CIKTI = `${KOK}/exports/drkoc-fark-reels-final/screens`

const EKRANLAR = [
  ['01-etkilesimli-atlas', '/fizik-atlasi?capture=reels', 'Fiziği izleme.'],
  ['02-ders-kutuphanesi', '/kutuphane?capture=reels', 'Nasıl çalışmak istersin?'],
  ['03-soru-bankalari', '/kutuphane/sorular/sinif-9?capture=reels', '9. Sınıf'],
  ['04-ai-koc', '/ai-koc?capture=reels', 'Son TYT denememde'],
  ['05-analiz', '/analiz?capture=reels', 'Deniz, gelişim tablon'],
]

await access(CHROME)
await mkdir(CIKTI, { recursive: true })

const tarayici = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
})

const sayfa = await tarayici.newPage({
  viewport: { width: 768, height: 1365 },
  deviceScaleFactor: 2,
  colorScheme: 'light',
  reducedMotion: 'reduce',
})

async function hazirla() {
  await sayfa.evaluate(async () => {
    await document.fonts.ready
    window.scrollTo(0, 0)
  })
  await sayfa.waitForTimeout(700)
}

for (const [ad, yol, beklenenMetin] of EKRANLAR) {
  await sayfa.goto(`${SUNUCU}${yol}`, { waitUntil: 'domcontentloaded' })
  await sayfa.getByText(beklenenMetin, { exact: false }).first().waitFor({
    state: 'visible',
    timeout: 20_000,
  })
  await hazirla()
  await sayfa.screenshot({
    path: `${CIKTI}/${ad}.png`,
    captureBeyondViewport: false,
  })
}

await sayfa.goto(`${SUNUCU}/soru-coz?capture=reels`, { waitUntil: 'domcontentloaded' })
await sayfa.getByText('Çözüm hazır', { exact: true }).waitFor({ state: 'visible', timeout: 20_000 })
await sayfa.getByRole('button', { name: 'Çözümü Başlat' }).click()
await sayfa.getByRole('button', { name: 'Sonraki adım' }).click()
await sayfa.getByRole('button', { name: 'Sonraki adım' }).click()
await sayfa.getByText('4 saniye sonraki hız', { exact: false }).waitFor({ state: 'visible' })
await sayfa.waitForTimeout(500)
await sayfa.screenshot({
  path: `${CIKTI}/06-ai-soru-coz.png`,
  captureBeyondViewport: false,
})

await tarayici.close()
console.log(`Final dikey DRKOÇ ürün ekranları hazır: ${CIKTI}`)
