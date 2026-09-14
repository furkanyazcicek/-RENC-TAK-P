/** Faz 8 çalışan ekran, responsive ve erişilebilirlik doğrulaması. */
import { spawn } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import { chromium } from '/Users/furkantalhayazcicek/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const REPO = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const CHROME = '/Users/furkantalhayazcicek/.cache/puppeteer/chrome-headless-shell/mac_arm-152.0.7977.54/chrome-headless-shell-mac-arm64/chrome-headless-shell'
const BASE_URL = process.env.DRKOC_PHASE8_URL ?? 'http://127.0.0.1:5173'
const OUT = `${REPO}/docs/ai-koc/kanitlar/faz-8`
const SCREENSHOTS = `${OUT}/gorsel`
const viewports = [
  { label: 'masaustu', width: 1440, height: 900 },
  { label: 'telefon', width: 390, height: 844 },
]
const states = [
  { key: 'oner', expected: 'Önerilen çalışma' },
  { key: 'onay', expected: 'Görev planlandı' },
  { key: 'ilerleme', expected: 'Kaydedilen ilerleme' },
  { key: 'hata', expected: 'Kanıt servisine şu anda ulaşılamıyor' },
  { key: 'bos', expected: 'Henüz etkin bir koçluk görevin yok' },
  { key: 'tamam', expected: 'Sonuç değerlendirildi' },
]

const result = {
  schema_version: 'phase-8-ui-validation@1',
  generated_at: null,
  browser: null,
  server_started_by_runner: false,
  live_data_used: false,
  cases: [],
  assertions: {
    recommendation_preview_visible: false,
    explicit_approval_state_visible: false,
    progress_visible: false,
    error_preserves_task_message: false,
    empty_state_visible: false,
    completion_and_noncausal_language_visible: false,
    evidence_progressive_disclosure: false,
    keyboard_opens_evidence: false,
    edit_control_keyboard_focusable: false,
    focus_indicator_visible: false,
    semantic_alert: false,
    semantic_task_region: false,
    minimum_touch_target_44: false,
    undersized_phase8_controls: [],
    readable_text_contrast: false,
    reduced_motion_active: false,
    no_horizontal_overflow: false,
    no_page_errors: false,
    no_live_or_personal_data_requests: false,
    disallowed_external_requests: [],
  },
}

function invariant(value, message) { if (!value) throw new Error(message) }
function isAllowedAsset(url) {
  const parsed = new URL(url)
  if (parsed.origin === new URL(BASE_URL).origin) return true
  return ['fonts.googleapis.com', 'fonts.gstatic.com'].includes(parsed.hostname)
}
function luminance([r, g, b]) {
  const values = [r, g, b].map((value) => {
    const channel = value / 255
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * values[0] + 0.7152 * values[1] + 0.0722 * values[2]
}
function ratio(foreground, background) {
  const light = Math.max(luminance(foreground), luminance(background))
  const dark = Math.min(luminance(foreground), luminance(background))
  return (light + 0.05) / (dark + 0.05)
}
function rgb(value) {
  const parts = String(value).match(/[\d.]+/gu)?.slice(0, 3).map(Number)
  return parts?.length === 3 ? parts : null
}

async function serverAvailable() {
  try {
    const response = await fetch(BASE_URL, { signal: AbortSignal.timeout(1_500) })
    return response.ok
  } catch { return false }
}

async function ensureServer() {
  if (await serverAvailable()) return null
  const child = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', '5173'], {
    cwd: REPO, env: { ...process.env, CI: '1' }, stdio: ['ignore', 'pipe', 'pipe'],
  })
  result.server_started_by_runner = true
  let output = ''
  child.stdout.on('data', (chunk) => { output += chunk })
  child.stderr.on('data', (chunk) => { output += chunk })
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (await serverAvailable()) return child
    await new Promise((resolve) => setTimeout(resolve, 250))
  }
  child.kill('SIGTERM')
  throw new Error(`Faz 8 görsel sunucusu başlamadı: ${output.slice(-500)}`)
}

await mkdir(SCREENSHOTS, { recursive: true })
const server = await ensureServer()
const browser = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
})
result.browser = `chromium-playwright-${browser.version()}`

try {
  for (const viewport of viewports) {
    for (const state of states) {
      const page = await browser.newPage({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1,
        colorScheme: 'light',
        reducedMotion: 'reduce',
        isMobile: viewport.label === 'telefon',
        hasTouch: viewport.label === 'telefon',
      })
      const pageErrors = []
      const externalRequests = []
      page.on('pageerror', (error) => pageErrors.push(error.message))
      page.on('console', (entry) => {
        if (entry.type() === 'error' && !entry.text().includes('net::ERR_FAILED')) pageErrors.push(`console: ${entry.text()}`)
      })
      await page.route('**/*', async (route) => {
        const url = route.request().url()
        if (isAllowedAsset(url)) {
          if (new URL(url).origin === new URL(BASE_URL).origin) await route.continue()
          else await route.abort()
          return
        }
        externalRequests.push(url)
        await route.abort()
      })

      const route = `/ai-koc?capture=reels&faz8-onizleme=${state.key}`
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded' })
      const expected = page.getByText(state.expected, { exact: false }).first()
      await expected.waitFor({ state: 'visible', timeout: 20_000 })
      await expected.scrollIntoViewIfNeeded()
      await page.evaluate(async () => { await document.fonts.ready })
      await page.waitForTimeout(150)

      const appMetrics = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        pageScrollWidth: document.documentElement.scrollWidth,
        reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      }))
      const screenshot = `docs/ai-koc/kanitlar/faz-8/gorsel/${state.key}-${viewport.label}-${viewport.width}x${viewport.height}.png`
      await page.screenshot({ path: `${REPO}/${screenshot}`, captureBeyondViewport: false })

      if (state.key === 'oner') {
        result.assertions.recommendation_preview_visible ||= await page.getByText('Fonksiyonlar · kısa ölçüm', { exact: false }).isVisible()
        const disclosure = page.getByText('Neye göre?', { exact: true })
        result.assertions.evidence_progressive_disclosure ||= !(await page.getByText('2 doğrulanmış kanıt bağı kullanıldı.', { exact: false }).isVisible())
        await disclosure.focus()
        const focusStyle = await disclosure.evaluate((element) => {
          const style = getComputedStyle(element)
          return { outline: style.outlineStyle, shadow: style.boxShadow }
        })
        result.assertions.focus_indicator_visible ||= focusStyle.outline !== 'none' || focusStyle.shadow !== 'none'
        await page.keyboard.press('Enter')
        result.assertions.keyboard_opens_evidence ||= await page.getByText('2 doğrulanmış kanıt bağı kullanıldı.', { exact: false }).isVisible()
        const edit = page.getByRole('button', { name: 'Düzenle', exact: true })
        await edit.focus()
        result.assertions.edit_control_keyboard_focusable ||= await edit.evaluate((element) => document.activeElement === element)
        await page.keyboard.press('Enter')
        await page.getByLabel('Miktarı düzenle').waitFor({ state: 'visible' })
        if (viewport.label === 'telefon') {
          await page.setViewportSize({ width: viewport.width, height: 1400 })
          const actionCard = page.locator('div:has(> div.h-1.bg-aurora-line)').first()
          await actionCard.scrollIntoViewIfNeeded()
          await actionCard.screenshot({ path: `${SCREENSHOTS}/oner-kart-detay-telefon.png` })
        }
      }
      if (state.key === 'onay') result.assertions.explicit_approval_state_visible ||= await page.getByText('Görev planlandı', { exact: true }).isVisible()
      if (state.key === 'ilerleme') {
        result.assertions.progress_visible ||= await page.getByText('%60', { exact: true }).isVisible()
        result.assertions.semantic_task_region ||= (await page.getByRole('region', { name: 'Bugünkü koçluk görevi' }).count()) === 1
      }
      if (state.key === 'hata') {
        result.assertions.error_preserves_task_message ||= await page.getByText('Görevin kaybolmadı', { exact: false }).isVisible()
        result.assertions.semantic_alert ||= (await page.getByRole('alert').count()) === 1
      }
      if (state.key === 'bos') result.assertions.empty_state_visible ||= await expected.isVisible()
      if (state.key === 'tamam') {
        result.assertions.completion_and_noncausal_language_visible ||= await page.getByText('neden-sonuç kanıtı değildir', { exact: false }).isVisible()
      }

      const phaseControls = page.locator('section[aria-label="Bugünkü koçluk görevi"] button, section[aria-label="Bugünkü koçluk görevi"] a, details summary, [aria-label="Miktarı düzenle"], div:has(> .h-1.bg-aurora-line) button')
      const controlBoxes = []
      for (let index = 0; index < await phaseControls.count(); index += 1) {
        const control = phaseControls.nth(index)
        if (!(await control.isVisible())) continue
        const box = await control.boundingBox()
        if (box) controlBoxes.push({ label: (await control.getAttribute('aria-label')) || (await control.innerText()).trim().slice(0, 60), width: box.width, height: box.height, state: state.key, viewport: viewport.label })
      }
      result.assertions.undersized_phase8_controls.push(...controlBoxes.filter((box) => box.height < 44 || box.width < 44))

      if (state.key === 'ilerleme') {
        const sample = page.getByText('Fonksiyonlar · 15 soru', { exact: true })
        const colors = await sample.evaluate((element) => {
          const foreground = getComputedStyle(element).color
          let node = element
          let background = 'rgb(255, 255, 255)'
          while (node) {
            const candidate = getComputedStyle(node).backgroundColor
            if (candidate && !candidate.endsWith(', 0)') && candidate !== 'rgba(0, 0, 0, 0)') { background = candidate; break }
            node = node.parentElement
          }
          return { foreground, background }
        })
        const foreground = rgb(colors.foreground)
        const background = rgb(colors.background)
        if (foreground && background) result.assertions.readable_text_contrast ||= ratio(foreground, background) >= 4.5
      }

      result.cases.push({
        state: state.key, viewport: `${viewport.width}x${viewport.height}`, route, screenshot,
        status: pageErrors.length || externalRequests.length || appMetrics.pageScrollWidth > appMetrics.viewport ? 'failed' : 'passed',
        page_errors: pageErrors, external_requests: externalRequests,
        horizontal_overflow_px: Math.max(0, appMetrics.pageScrollWidth - appMetrics.viewport),
        phase_control_count: controlBoxes.length,
      })
      result.assertions.reduced_motion_active ||= appMetrics.reduced
      await page.close()
    }
  }

  result.assertions.minimum_touch_target_44 = result.assertions.undersized_phase8_controls.length === 0
  result.assertions.no_horizontal_overflow = result.cases.every((item) => item.horizontal_overflow_px === 0)
  result.assertions.no_page_errors = result.cases.every((item) => item.page_errors.length === 0)
  result.assertions.no_live_or_personal_data_requests = result.cases.every((item) => item.external_requests.length === 0)
  result.assertions.disallowed_external_requests = result.cases.flatMap((item) => item.external_requests)

  for (const [key, value] of Object.entries(result.assertions)) {
    if (Array.isArray(value)) continue
    invariant(value === true, `Görsel kabul koşulu geçmedi: ${key}`)
  }
  invariant(result.cases.length === 12 && result.cases.every((item) => item.status === 'passed'), '12/12 görsel durum geçmedi.')
  result.generated_at = new Date().toISOString()
  result.status = 'passed'
  result.totals = { required: 12, passed: 12, failed: 0 }
  await writeFile(`${OUT}/gorsel-dogrulama.json`, `${JSON.stringify(result, null, 2)}\n`)
  process.stdout.write(`12/12 Faz 8 ekran durumu geçti (${result.browser}).\n`)
} finally {
  await browser.close()
  if (server) server.kill('SIGTERM')
}
