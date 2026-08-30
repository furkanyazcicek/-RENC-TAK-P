import { access, mkdir } from 'node:fs/promises'
import { chromium } from '/Users/furkantalhayazcicek/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const KOK = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const CHROME = '/Users/furkantalhayazcicek/.cache/puppeteer/chrome-headless-shell/mac_arm-152.0.7977.54/chrome-headless-shell-mac-arm64/chrome-headless-shell'
const SUNUCU = process.env.DRKOC_REELS_URL ?? 'http://127.0.0.1:5175'
const ROTA = '/sosyal/reels/drkoc-uygulama-tanitimi'
const CIKTI = `${KOK}/exports/drkoc-uygulama-tanitim-kareler`

const KARELER = [
  ['01-kanca', 1.9],
  ['02-soru-coz', 10.3],
  ['03-analiz', 22.3],
  ['04-ai-koc', 32.4],
  ['05-kutuphane', 44.9],
  ['06-soru-seti', 53.7],
  ['07-slogan', 59.2],
  ['08-logo', 62.2],
]

await access(CHROME)
await mkdir(CIKTI, { recursive: true })

const tarayici = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
})

const sayfa = await tarayici.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 })

for (const [ad, zaman] of KARELER) {
  const url = `${SUNUCU}${ROTA}?clean=1&time=${zaman}`
  await sayfa.goto(url, { waitUntil: 'networkidle0' })
  await sayfa.evaluate(() => document.fonts.ready)
  const boyut = await sayfa.locator('.rdt-cerceve').evaluate((oge) => {
    const kutu = oge.getBoundingClientRect()
    return { genislik: kutu.width, yukseklik: kutu.height }
  })
  if (boyut.genislik !== 1080 || boyut.yukseklik !== 1920) {
    throw new Error(`Sahne ölçüsü beklenenden farklı: ${boyut.genislik}x${boyut.yukseklik}`)
  }
  if (ad === '06-soru-seti') {
    const secenekKutulari = await sayfa.locator('.rdt-secenek, .rdt-secenek-aktif').evaluateAll((ogeler) => (
      ogeler.map((oge) => {
        const kutu = oge.getBoundingClientRect()
        return { metin: oge.textContent, x: kutu.x, y: kutu.y, genislik: kutu.width, yukseklik: kutu.height }
      })
    ))
    console.log('Soru seçeneği kutuları:', JSON.stringify(secenekKutulari))
    if (secenekKutulari.some((kutu) => kutu.y < 900 || kutu.y > 1200)) {
      throw new Error('Soru seçeneklerinden biri güvenli alanın dışına çıktı.')
    }
  }
  await sayfa.screenshot({ path: `${CIKTI}/${ad}.png`, captureBeyondViewport: false })
}

await sayfa.goto(`${SUNUCU}${ROTA}?cover=1&clean=1`, { waitUntil: 'networkidle0' })
await sayfa.evaluate(() => document.fonts.ready)
await sayfa.screenshot({ path: `${CIKTI}/09-kapak.png`, captureBeyondViewport: false })

await sayfa.setViewportSize({ width: 375, height: 812 })
await sayfa.goto(`${SUNUCU}${ROTA}`, { waitUntil: 'networkidle0' })
await sayfa.evaluate(() => document.fonts.ready)

const yatayTasma = await sayfa.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
if (yatayTasma > 1) throw new Error(`Telefon görünümünde ${yatayTasma}px yatay taşma var.`)

const zamanGirdisi = sayfa.getByLabel('Animasyon zamanı')
await sayfa.getByLabel('Oynat', { exact: true }).click()
await sayfa.waitForTimeout(240)
const oynatmaZamani = Number(await zamanGirdisi.inputValue())
if (oynatmaZamani <= 0.05) throw new Error('Oynatma düğmesi zaman çizelgesini başlatmadı.')
await sayfa.getByLabel('Duraklat').click()
await sayfa.getByLabel('Baştan oynat').click()
await sayfa.waitForTimeout(80)
if (Number(await zamanGirdisi.inputValue()) > 0.3) throw new Error('Baştan oynat düğmesi zamanı sıfırlamadı.')
await sayfa.getByLabel('Duraklat').click()
await sayfa.screenshot({ path: `${CIKTI}/10-telefon-onizleme.png`, captureBeyondViewport: false })

await tarayici.close()
console.log(`Kareler hazır: ${CIKTI}`)
