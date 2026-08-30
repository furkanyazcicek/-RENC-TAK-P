import { access, mkdir } from 'node:fs/promises'
import { chromium } from '/Users/furkantalhayazcicek/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const KOK = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const CHROME = '/Users/furkantalhayazcicek/.cache/puppeteer/chrome-headless-shell/mac_arm-152.0.7977.54/chrome-headless-shell-mac-arm64/chrome-headless-shell'
const SUNUCU = process.env.DRKOC_REELS_URL ?? 'http://127.0.0.1:5173'
const CIKTI = `${KOK}/exports/drkoc-fark-reels/references`

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
})

async function kareAl(ad, url) {
  await sayfa.goto(url, { waitUntil: 'networkidle' })
  await sayfa.evaluate(() => document.fonts.ready)
  await sayfa.waitForTimeout(350)
  await sayfa.screenshot({
    path: `${CIKTI}/${ad}.png`,
    captureBeyondViewport: false,
  })
}

await kareAl('01-fizik-atlasi', `${SUNUCU}/fizik-atlasi`)
await kareAl('02-hareket-laboratuvari', `${SUNUCU}/fizik-atlasi?bolge=kuvvet-hareket`)

await tarayici.close()
console.log(`DRKOÇ Reels referansları hazır: ${CIKTI}`)
