import { mkdir, writeFile } from 'node:fs/promises'
import { chromium } from '/Users/furkantalhayazcicek/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'

const REPO = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const CHROME = '/Users/furkantalhayazcicek/.cache/puppeteer/chrome-headless-shell/mac_arm-152.0.7977.54/chrome-headless-shell-mac-arm64/chrome-headless-shell'
const BASE_URL = process.env.DRKOC_PHASE5_URL ?? 'http://127.0.0.1:5173'
const OUT = `${REPO}/docs/ai-koc/kanitlar/faz-5`
const SCREENSHOTS = `${OUT}/gorsel`

const cases = [
  {
    name: 'ingilizce-eski-ilerleme-aktarimi',
    route: '/ingilizce/gelisim?capture=reels&faz5-onizleme=aktarim',
    viewport: { width: 1440, height: 900 },
    expected: 'Bu cihazda eski İngilizce ilerlemesi bulundu',
    panelState: 'consent',
  },
  {
    name: 'fransizca-aktarim-tamamlandi',
    route: '/fransizca/gelisim?capture=reels&faz5-onizleme=tamam',
    viewport: { width: 768, height: 1024 },
    expected: 'yerel yedek korunuyor',
    panelState: 'complete',
  },
  {
    name: 'almanca-cevrimdisi-yeniden-dene',
    route: '/almanca/gelisim?capture=reels&faz5-onizleme=hata',
    viewport: { width: 390, height: 844 },
    expected: 'Yeniden dene',
    panelState: 'retry',
  },
  {
    name: 'ispanyolca-sifirlama-etkisi',
    route: '/ispanyolca/gelisim?capture=reels&faz5-onizleme=tamam',
    viewport: { width: 390, height: 844 },
    expected: 'yerel yedek korunuyor',
    panelState: 'reset',
  },
]

const result = {
  schema_version: 'phase-5-ui-validation@1',
  generated_at: new Date().toISOString(),
  browser: null,
  live_data_used: false,
  cases: [],
  assertions: {
    explicit_import_consent: false,
    import_disabled_before_consent: false,
    import_success_visible: false,
    retry_state_visible: false,
    reset_effect_visible_before_action: false,
    dialog_visible: false,
    initial_focus_inside: false,
    escape_closes: false,
    trigger_focus_restored: false,
    semantic_checkbox_label: false,
    minimum_touch_target_44: false,
    undersized_controls: [],
    status_not_color_only: false,
    no_horizontal_overflow: false,
    no_page_errors: false,
    no_live_or_personal_data_requests: false,
    disallowed_external_requests: [],
  },
}

function invariant(value, message) {
  if (!value) throw new Error(message)
}

function isAllowedAsset(url) {
  const parsed = new URL(url)
  if (parsed.origin === new URL(BASE_URL).origin) return true
  return ['fonts.googleapis.com', 'fonts.gstatic.com'].includes(parsed.hostname)
}

await mkdir(SCREENSHOTS, { recursive: true })
const browser = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
})
result.browser = `chromium-playwright-${browser.version()}`

try {
  for (const testCase of cases) {
    const page = await browser.newPage({
      viewport: testCase.viewport,
      deviceScaleFactor: 1,
      colorScheme: 'light',
      reducedMotion: 'reduce',
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

    await page.goto(`${BASE_URL}${testCase.route}`, { waitUntil: 'domcontentloaded' })
    await page.getByText(testCase.expected, { exact: false }).first().waitFor({ state: 'visible', timeout: 20_000 })
    const dataSection = page.getByRole('heading', { name: 'Verilerin' }).locator('..')
    await dataSection.scrollIntoViewIfNeeded()
    await page.evaluate(async () => { await document.fonts.ready })
    await page.waitForTimeout(250)
    const screenshot = `docs/ai-koc/kanitlar/faz-5/gorsel/${testCase.name}-${testCase.viewport.width}x${testCase.viewport.height}.png`
    let screenshotTaken = false

    if (testCase.panelState === 'consent') {
      const checkbox = page.getByRole('checkbox', { name: /Bu ilerleme bana ait/ })
      const importButton = page.getByRole('button', { name: 'Hesabıma aktar' })
      result.assertions.explicit_import_consent = await checkbox.isVisible()
      result.assertions.semantic_checkbox_label = (await checkbox.getAttribute('aria-label')) !== ''
        && (await checkbox.evaluate((element) => Boolean(element.labels?.length)))
      result.assertions.import_disabled_before_consent = await importButton.isDisabled()
      await page.screenshot({ path: `${REPO}/${screenshot}`, captureBeyondViewport: false })
      screenshotTaken = true
      await checkbox.focus()
      await page.keyboard.press('Space')
      invariant(await checkbox.isChecked(), 'Onay kutusu klavyeyle işaretlenemedi.')
      invariant(!(await importButton.isDisabled()), 'Aktarım eylemi onaydan sonra açılmadı.')
      await importButton.click()
      await page.getByText('yerel yedek korunuyor', { exact: false }).waitFor({ state: 'visible' })
      result.assertions.import_success_visible = true
    }

    if (testCase.panelState === 'complete') {
      result.assertions.import_success_visible = await page.getByText('yerel yedek korunuyor', { exact: false }).isVisible()
    }

    if (testCase.panelState === 'retry') {
      const retry = page.getByRole('button', { name: 'Yeniden dene' })
      result.assertions.retry_state_visible = await retry.isVisible()
        && await page.getByText('Cihaz kopyan silinmedi', { exact: false }).isVisible()
      await retry.focus()
      invariant(await retry.evaluate((element) => document.activeElement === element), 'Yeniden dene odağı almadı.')
    }

    if (testCase.panelState === 'reset') {
      const trigger = page.getByRole('button', { name: 'İlerlemeyi sıfırla' })
      await trigger.click()
      const dialog = page.getByRole('dialog', { name: 'İlerlemeyi sıfırla' })
      await dialog.waitFor({ state: 'visible' })
      await page.waitForTimeout(100)
      result.assertions.dialog_visible = true
      result.assertions.reset_effect_visible_before_action = await dialog.getByText('diğer cihazların da', { exact: false }).isVisible()
        && await dialog.getByText('geri alınamaz', { exact: false }).isVisible()
      result.assertions.initial_focus_inside = await dialog.evaluate((element) => element.contains(document.activeElement))
      const modalUndersized = await dialog.locator('button').evaluateAll((elements) => elements
        .filter((element) => {
          const box = element.getBoundingClientRect()
          return box.width > 0 && box.height > 0 && (box.width < 44 || box.height < 44)
        })
        .map((element) => ({ text: element.textContent.trim(), width: Math.round(element.getBoundingClientRect().width), height: Math.round(element.getBoundingClientRect().height) })))
      result.assertions.undersized_controls.push(...modalUndersized.map((item) => ({ case: testCase.name, ...item })))
      await page.screenshot({ path: `${REPO}/${screenshot}`, captureBeyondViewport: false })
      screenshotTaken = true
      await page.keyboard.press('Escape')
      await dialog.waitFor({ state: 'hidden' })
      result.assertions.escape_closes = true
      result.assertions.trigger_focus_restored = await trigger.evaluate((element) => document.activeElement === element)
    }

    const undersized = testCase.panelState === 'reset' ? [] : await page.locator('section:has(h2:text-is("Verilerin")) button').evaluateAll((elements) => elements
      .filter((element) => {
        const box = element.getBoundingClientRect()
        return box.width > 0 && box.height > 0 && (box.width < 44 || box.height < 44)
      })
      .map((element) => ({ text: element.textContent.trim(), width: Math.round(element.getBoundingClientRect().width), height: Math.round(element.getBoundingClientRect().height) })))
    result.assertions.undersized_controls.push(...undersized.map((item) => ({ case: testCase.name, ...item })))

    result.assertions.status_not_color_only = result.assertions.status_not_color_only
      || await page.getByText(/hesabına güvenle bağlandı|yeniden deneyebilirsin/i).first().isVisible()

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1)
    if (!screenshotTaken) await page.screenshot({ path: `${REPO}/${screenshot}`, captureBeyondViewport: false })
    result.cases.push({
      name: testCase.name,
      route: testCase.route,
      viewport: testCase.viewport,
      screenshot,
      horizontal_overflow: overflow,
      reduced_motion: true,
      disallowed_external_requests: externalRequests,
      page_errors: pageErrors,
    })
    result.assertions.disallowed_external_requests.push(...externalRequests)
    await page.close()
  }

  result.assertions.minimum_touch_target_44 = result.assertions.undersized_controls.length === 0
  result.assertions.no_horizontal_overflow = result.cases.every((item) => !item.horizontal_overflow)
  result.assertions.no_page_errors = result.cases.every((item) => item.page_errors.length === 0)
  result.assertions.no_live_or_personal_data_requests = result.assertions.disallowed_external_requests.length === 0
  for (const [name, value] of Object.entries(result.assertions)) {
    if (Array.isArray(value)) invariant(value.length === 0, `${name}: ${JSON.stringify(value)}`)
    else invariant(value === true, `${name} doğrulanamadı.`)
  }
  await writeFile(`${OUT}/gorsel-ui-sonucu.json`, `${JSON.stringify(result, null, 2)}\n`)
  process.stdout.write(`Faz 5 görsel doğrulama geçti: ${result.cases.length} ekran.\n`)
} catch (error) {
  result.status = 'failed'
  result.failure = { name: error.name, message: error.message }
  await writeFile(`${OUT}/gorsel-ui-sonucu.json`, `${JSON.stringify(result, null, 2)}\n`)
  throw error
} finally {
  await browser.close()
}
