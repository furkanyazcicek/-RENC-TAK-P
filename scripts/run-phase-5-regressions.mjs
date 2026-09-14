import { spawn } from 'node:child_process'
import { appendFileSync, existsSync } from 'node:fs'
import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'docs/ai-koc/kanitlar/faz-5')
const ACCEPTANCE = path.join(OUT, 'faz-5-kabul-sonucu.json')
const PHASE3_ACCEPTANCE = path.join(ROOT, 'docs/ai-koc/kanitlar/faz-3/faz-3-kabul-sonucu.json')
const PHASE4_ACCEPTANCE = path.join(ROOT, 'docs/ai-koc/kanitlar/faz-4/faz-4-kabul-sonucu.json')
const COMMANDS = path.join(OUT, 'regresyon-komutlari.json')
const REGRESSION_LOG = path.join(OUT, 'regresyon-testleri.log')
const SECURITY_LOG = path.join(OUT, 'guvenlik-testleri.log')
const BUILD_LOG = path.join(OUT, 'build.log')
const VISUAL_MD = path.join(OUT, 'gorsel-dogrulama.md')
const VISUAL_JSON = path.join(OUT, 'gorsel-ui-sonucu.json')
const VISUAL_PORT = 4175

const REQUIRED = [
  { command: ['npm', 'run', 'test:ai-koc-faz-1'], group: 'security', key: 'phase1' },
  { command: ['npm', 'run', 'test:ai-koc-faz-2'], group: 'security', key: 'phase2' },
  { command: ['npm', 'run', 'test:ai-koc-faz-3'], group: 'security', key: 'phase3' },
  { command: ['npm', 'run', 'test:ai-koc-faz-4'], group: 'security', key: 'phase4' },
  { command: ['npm', 'run', 'test:ai-koc-faz-5'], group: 'security', key: 'phase5' },
  { command: ['npm', 'run', 'test:ingilizce'], group: 'regression', key: 'english' },
  { command: ['npm', 'run', 'test:almanca'], group: 'regression', key: 'german' },
  { command: ['npm', 'run', 'test:fransizca'], group: 'regression', key: 'french' },
  { command: ['npm', 'run', 'test:ispanyolca'], group: 'regression', key: 'spanish' },
  { command: ['node', 'scripts/capture-phase-5-language-sync.mjs'], group: 'regression', key: 'visual', visualServer: true },
  { command: ['npm', 'run', 'test:anasayfa'], group: 'regression', key: 'home' },
  { command: ['npm', 'run', 'build'], group: 'build', key: 'build' },
]

const iso = () => new Date().toISOString()
const display = (entry) => entry.command.join(' ')
const targetLog = (group) => group === 'build' ? BUILD_LOG : group === 'security' ? SECURITY_LOG : REGRESSION_LOG

async function append(group, value) {
  await appendFile(REGRESSION_LOG, value)
  if (group === 'security') await appendFile(SECURITY_LOG, value)
  if (group === 'build') await appendFile(BUILD_LOG, value)
}

function appendSync(group, value) {
  appendFileSync(REGRESSION_LOG, value)
  if (group === 'security') appendFileSync(SECURITY_LOG, value)
  if (group === 'build') appendFileSync(BUILD_LOG, value)
}

async function waitForServer(url, child) {
  const deadline = Date.now() + 15_000
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error(`Görsel sunucu erken kapandı: ${child.exitCode}`)
    try {
      const response = await fetch(url)
      if (response.ok) return
    } catch {
      // Sunucu hazır olana kadar kısa aralıkla yeniden denenir.
    }
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  throw new Error('Görsel doğrulama sunucusu 15 saniyede hazır olmadı.')
}

async function startVisualServer(group) {
  const child = spawn('npm', ['run', 'dev', '--', '--host', '127.0.0.1', '--port', String(VISUAL_PORT), '--strictPort'], {
    cwd: ROOT,
    env: { ...process.env, CI: '1', FORCE_COLOR: '0', npm_config_color: 'false' },
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  child.stdout.on('data', (chunk) => appendSync(group, chunk))
  child.stderr.on('data', (chunk) => appendSync(group, chunk))
  await waitForServer(`http://127.0.0.1:${VISUAL_PORT}`, child)
  return child
}

async function stopVisualServer(child) {
  if (!child || child.exitCode !== null) return
  child.kill('SIGTERM')
  await new Promise((resolve) => {
    const timer = setTimeout(resolve, 2_000)
    child.once('close', () => { clearTimeout(timer); resolve() })
  })
}

async function run(entry) {
  const startedAt = iso()
  const started = Date.now()
  const command = display(entry)
  await append(entry.group, `\n===== ${command} =====\nstarted_at=${startedAt}\n`)
  process.stdout.write(`\n▶ ${command}\n`)
  let server = null
  let outcome
  try {
    if (entry.visualServer) server = await startVisualServer(entry.group)
    const child = spawn(entry.command[0], entry.command.slice(1), {
      cwd: ROOT,
      env: {
        ...process.env,
        CI: '1',
        FORCE_COLOR: '0',
        npm_config_color: 'false',
        ...(entry.visualServer ? { DRKOC_PHASE5_URL: `http://127.0.0.1:${VISUAL_PORT}` } : {}),
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    child.stdout.on('data', (chunk) => { process.stdout.write(chunk); appendSync(entry.group, chunk) })
    child.stderr.on('data', (chunk) => { process.stderr.write(chunk); appendSync(entry.group, chunk) })
    outcome = await new Promise((resolve) => {
      child.once('error', (error) => resolve({ code: null, error }))
      child.once('close', (code, signal) => resolve({ code, signal }))
    })
  } catch (error) {
    outcome = { code: null, error }
  } finally {
    await stopVisualServer(server)
  }
  const result = {
    key: entry.key,
    command,
    group: entry.group,
    started_at: startedAt,
    finished_at: iso(),
    duration_ms: Date.now() - started,
    exit_code: outcome.code,
    signal: outcome.signal ?? null,
    status: outcome.code === 0 ? 'passed' : 'failed',
    reason: outcome.error?.message ?? null,
    log_path: path.relative(ROOT, targetLog(entry.group)),
  }
  await append(entry.group, `\nfinished_at=${result.finished_at}\nexit_code=${result.exit_code}\nduration_ms=${result.duration_ms}\nstatus=${result.status}\n`)
  process.stdout.write(`${result.status === 'passed' ? '✓' : '✗'} ${command} (${result.duration_ms} ms)\n`)
  return result
}

function authoritativePhase3(value) {
  return value.status === 'passed'
    && value.command_totals?.required === 17 && value.command_totals?.passed === 17
    && value.gate_totals?.required === 46 && value.gate_totals?.passed === 46
    && value.assertions === 450
    && value.manifest?.checksum === '6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc'
}

function authoritativePhase4(value) {
  return value.status === 'passed'
    && value.command_totals?.required === 12 && value.command_totals?.passed === 12
    && value.gate_totals?.required === 85 && value.gate_totals?.passed === 85
}

async function main() {
  await mkdir(OUT, { recursive: true })
  const phase3Raw = await readFile(PHASE3_ACCEPTANCE, 'utf8')
  const phase4Raw = await readFile(PHASE4_ACCEPTANCE, 'utf8')
  const phase3BaselineOk = authoritativePhase3(JSON.parse(phase3Raw))
  const phase4BaselineOk = authoritativePhase4(JSON.parse(phase4Raw))
  const preamble = `# DRKOÇ Faz 5 zorunlu doğrulama kaydı\ngenerated_at=${iso()}\nworkspace=${ROOT}\nrunner=scripts/run-phase-5-regressions.mjs\n`
  await writeFile(REGRESSION_LOG, preamble)
  await writeFile(SECURITY_LOG, preamble)
  await writeFile(BUILD_LOG, preamble)

  const results = []
  for (const entry of REQUIRED) {
    const result = await run(entry)
    if (entry.key === 'phase3') {
      let core = null
      try { core = JSON.parse(await readFile(PHASE3_ACCEPTANCE, 'utf8')) } catch (error) { result.reason = error.message }
      await writeFile(PHASE3_ACCEPTANCE, phase3Raw)
      result.core_assertions = core?.assertions ?? null
      result.baseline_acceptance = phase3BaselineOk ? '17/17 commands; 46/46 gates; 450 assertions' : 'invalid'
      if (!phase3BaselineOk || core?.status !== 'core_passed_runner_pending' || core?.assertions !== 450) {
        result.status = 'failed'
        result.reason ??= 'Faz 3 yetkili kabul baz çizgisi veya çekirdek koşusu geçersiz.'
      }
    }
    if (entry.key === 'phase4') {
      let core = null
      try { core = JSON.parse(await readFile(PHASE4_ACCEPTANCE, 'utf8')) } catch (error) { result.reason = error.message }
      await writeFile(PHASE4_ACCEPTANCE, phase4Raw)
      result.core_gate_count = core?.gates?.length ?? null
      result.baseline_acceptance = phase4BaselineOk ? '12/12 commands; 85/85 gates' : 'invalid'
      if (!phase4BaselineOk || core?.status !== 'core_passed' || core?.gates?.length !== 85) {
        result.status = 'failed'
        result.reason ??= 'Faz 4 yetkili kabul baz çizgisi veya çekirdek koşusu geçersiz.'
      }
    }
    if (entry.key === 'phase5') {
      let core = null
      try { core = JSON.parse(await readFile(ACCEPTANCE, 'utf8')) } catch (error) { result.reason = error.message }
      result.core_assertions = core?.assertions ?? null
      result.core_gates = core?.gate_totals?.passed ?? null
      if (core?.status !== 'core_passed_runner_pending' || core?.assertions !== 231
        || core?.gate_totals?.required !== 9 || core?.gate_totals?.passed !== 9) {
        result.status = 'failed'
        result.reason ??= 'Faz 5 çekirdek koşusu 231 doğrulama ve 9/9 kapı üretmedi.'
      }
    }
    results.push(result)
  }

  const totals = {
    required: results.length,
    passed: results.filter((item) => item.status === 'passed').length,
    failed: results.filter((item) => item.status === 'failed').length,
    skipped: 0,
  }
  const commandEvidence = {
    schema_version: 'phase-5-regression-commands@1',
    generated_at: iso(),
    workspace: ROOT,
    runner: 'scripts/run-phase-5-regressions.mjs',
    totals,
    commands: results,
  }
  await writeFile(COMMANDS, `${JSON.stringify(commandEvidence, null, 2)}\n`)

  const acceptance = JSON.parse(await readFile(ACCEPTANCE, 'utf8'))
  const passed = new Set(results.filter((item) => item.status === 'passed').map((item) => item.key))
  const visualText = existsSync(VISUAL_MD) ? await readFile(VISUAL_MD, 'utf8') : ''
  let visualResult = null
  try { visualResult = JSON.parse(await readFile(VISUAL_JSON, 'utf8')) } catch { visualResult = null }
  const visualPassed = passed.has('visual')
    && visualText.includes('Durum: passed')
    && ['1440×900', '768×1024', '390×844'].every((viewport) => visualText.includes(viewport))
    && visualText.includes('Klavye/Erişilebilirlik: passed')
    && visualResult?.cases?.length === 4
    && Object.values(visualResult?.assertions ?? {}).every((value) => Array.isArray(value) ? value.length === 0 : value === true)
  const languagesPassed = ['english', 'german', 'french', 'spanish'].every((key) => passed.has(key))
  const allCommands = totals.passed === totals.required && totals.failed === 0
  acceptance.gates = acceptance.gates.map((gate) => {
    if (gate.id === 8) return {
      ...gate,
      status: languagesPassed && visualPassed && passed.has('home') ? 'passed' : 'failed',
      evidence: 'dört dil temel testi + masaüstü/tablet/telefon tarayıcı kanıtı + ana sayfa regresyonu',
    }
    if (gate.id === 9) return {
      ...gate,
      status: allCommands && passed.has('build') && Object.values(acceptance.side_effects ?? {}).every((value) => value === false) ? 'passed' : 'failed',
      evidence: '12 zorunlu komut, build ve sıfır canlı/model/yayın yan etkisi',
    }
    return gate
  })
  acceptance.status = acceptance.gates.length === 9 && acceptance.gates.every((gate) => gate.status === 'passed') ? 'passed' : 'failed'
  acceptance.commands = results
  acceptance.command_totals = totals
  acceptance.command_logs = {
    regression: path.relative(ROOT, REGRESSION_LOG),
    security: path.relative(ROOT, SECURITY_LOG),
    build: path.relative(ROOT, BUILD_LOG),
  }
  acceptance.visual_validation = {
    status: visualPassed ? 'passed' : 'failed',
    evidence_path: path.relative(ROOT, VISUAL_MD),
    result_path: path.relative(ROOT, VISUAL_JSON),
    viewports: ['1440x900', '768x1024', '390x844'],
    live_data_used: false,
  }
  acceptance.gate_totals = {
    required: 9,
    passed: acceptance.gates.filter((gate) => gate.status === 'passed').length,
    failed: acceptance.gates.filter((gate) => gate.status === 'failed').length,
    pending: acceptance.gates.filter((gate) => gate.status === 'pending').length,
  }
  acceptance.generated_at = iso()
  await writeFile(ACCEPTANCE, `${JSON.stringify(acceptance, null, 2)}\n`)
  process.stdout.write(`\n${totals.passed}/${totals.required} komut, ${acceptance.gate_totals.passed}/9 Faz 5 kapısı geçti.\n`)
  if (acceptance.status !== 'passed') process.exitCode = 1
}

await main()
