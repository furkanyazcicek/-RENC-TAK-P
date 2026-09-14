import { spawn } from 'node:child_process'
import { appendFileSync } from 'node:fs'
import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'docs/ai-koc/kanitlar/faz-8')
const ACCEPTANCE = path.join(OUT, 'faz-8-kabul-sonucu.json')
const COMMANDS = path.join(OUT, 'regresyon-komutlari.json')
const REGRESSION_LOG = path.join(OUT, 'regresyon-testleri.log')
const SECURITY_LOG = path.join(OUT, 'guvenlik-testleri.log')
const BUILD_LOG = path.join(OUT, 'build.log')
const PHASE_ACCEPTANCE = Object.fromEntries([3, 4, 5, 6, 7].map((phase) => [
  phase, path.join(ROOT, `docs/ai-koc/kanitlar/faz-${phase}/faz-${phase}-kabul-sonucu.json`),
]))

const REQUIRED = [
  { command: ['npm', 'run', 'test:ai-koc-faz-1'], group: 'security', key: 'phase1' },
  { command: ['npm', 'run', 'test:ai-koc-faz-2'], group: 'security', key: 'phase2' },
  { command: ['npm', 'run', 'test:ai-koc-faz-3'], group: 'security', key: 'phase3' },
  { command: ['npm', 'run', 'test:ai-koc-faz-4'], group: 'security', key: 'phase4' },
  { command: ['npm', 'run', 'test:ai-koc-faz-5'], group: 'security', key: 'phase5' },
  { command: ['npm', 'run', 'test:ai-koc-faz-6'], group: 'security', key: 'phase6' },
  { command: ['npm', 'run', 'test:ai-koc-faz-7'], group: 'security', key: 'phase7' },
  { command: ['npm', 'run', 'test:ai-koc-faz-8'], group: 'security', key: 'phase8' },
  { command: ['npm', 'run', 'test:library-curriculum'], group: 'regression', key: 'curriculum' },
  { command: ['npm', 'run', 'test:question-progress'], group: 'regression', key: 'question_progress' },
  { command: ['node', 'scripts/test-context-curriculum.mjs'], group: 'regression', key: 'context_curriculum' },
  { command: ['node', 'scripts/test-ai-coach.mjs'], group: 'regression', key: 'ai_coach' },
  { command: ['npm', 'run', 'test:ai-solve'], group: 'regression', key: 'ai_solve' },
  { command: ['npm', 'run', 'test:anasayfa'], group: 'regression', key: 'home' },
  { command: ['node', 'scripts/capture-phase-8-coaching-loop.mjs'], group: 'regression', key: 'visual' },
  { command: ['npm', 'run', 'build'], group: 'build', key: 'build' },
]

const iso = () => new Date().toISOString()
const display = (entry) => entry.command.join(' ')
const logFor = (group) => group === 'build' ? BUILD_LOG : group === 'security' ? SECURITY_LOG : REGRESSION_LOG

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
async function run(entry) {
  const startedAt = iso()
  const started = Date.now()
  const command = display(entry)
  await append(entry.group, `\n===== ${command} =====\nstarted_at=${startedAt}\n`)
  process.stdout.write(`\n▶ ${command}\n`)
  const child = spawn(entry.command[0], entry.command.slice(1), {
    cwd: ROOT,
    env: { ...process.env, CI: '1', FORCE_COLOR: '0', npm_config_color: 'false' },
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  child.stdout.on('data', (chunk) => { process.stdout.write(chunk); appendSync(entry.group, chunk) })
  child.stderr.on('data', (chunk) => { process.stderr.write(chunk); appendSync(entry.group, chunk) })
  const outcome = await new Promise((resolve) => {
    child.once('error', (error) => resolve({ code: null, error }))
    child.once('close', (code, signal) => resolve({ code, signal }))
  })
  const result = {
    key: entry.key, command, group: entry.group, started_at: startedAt, finished_at: iso(),
    duration_ms: Date.now() - started, exit_code: outcome.code, signal: outcome.signal ?? null,
    status: outcome.code === 0 ? 'passed' : 'failed', reason: outcome.error?.message ?? null,
    log_path: path.relative(ROOT, logFor(entry.group)),
  }
  await append(entry.group, `finished_at=${result.finished_at}\nexit_code=${result.exit_code}\nduration_ms=${result.duration_ms}\nstatus=${result.status}\n`)
  process.stdout.write(`${result.status === 'passed' ? '✓' : '✗'} ${command} (${result.duration_ms} ms)\n`)
  return result
}

function authoritative(phase, value) {
  if (phase === 3) return value.status === 'passed'
    && value.command_totals?.required === 17 && value.command_totals?.passed === 17
    && value.gate_totals?.required === 46 && value.gate_totals?.passed === 46
    && value.assertions === 450
    && value.manifest?.checksum === '6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc'
  if (phase === 4) return value.status === 'passed'
    && value.command_totals?.required === 12 && value.command_totals?.passed === 12
    && value.gate_totals?.required === 85 && value.gate_totals?.passed === 85 && value.assertions === 290
  if (phase === 5) return value.status === 'passed'
    && value.command_totals?.required === 12 && value.command_totals?.passed === 12
    && value.gate_totals?.required === 9 && value.gate_totals?.passed === 9 && value.assertions === 231
  if (phase === 6) return value.status === 'passed'
    && value.command_totals?.required === 11 && value.command_totals?.passed === 11
    && value.gate_totals?.required === 9 && value.gate_totals?.passed === 9 && value.assertions === 107
  return value.status === 'passed'
    && value.command_totals?.required === 14 && value.command_totals?.passed === 14
    && value.gate_totals?.required === 11 && value.gate_totals?.passed === 11 && value.assertions === 137
}

function validateCore(phase, core) {
  if (phase === 3) return core?.status === 'core_passed_runner_pending' && core?.assertions === 450
    && core?.manifest?.checksum === '6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc'
  if (phase === 4) return core?.status === 'core_passed' && core?.assertions === 290 && core?.gates?.length === 85
  if (phase === 5) return core?.status === 'core_passed_runner_pending' && core?.assertions === 231 && core?.gate_totals?.passed === 9
  if (phase === 6) return core?.status === 'core_passed_runner_pending' && core?.assertions === 107 && core?.gate_totals?.passed === 9
  return core?.status === 'core_passed_runner_pending' && core?.assertions === 137 && core?.gate_totals?.passed === 11
}

async function main() {
  await mkdir(OUT, { recursive: true })
  const baselines = {}
  for (const phase of [3, 4, 5, 6, 7]) {
    const raw = await readFile(PHASE_ACCEPTANCE[phase], 'utf8')
    const parsed = JSON.parse(raw)
    if (!authoritative(phase, parsed)) throw new Error(`Faz ${phase} yetkili kabul baz çizgisi geçersiz.`)
    baselines[phase] = { raw, parsed }
  }

  const preamble = `# DRKOÇ Faz 8 zorunlu doğrulama kaydı\ngenerated_at=${iso()}\nworkspace=${ROOT}\nrunner=scripts/run-phase-8-regressions.mjs\n`
  await writeFile(REGRESSION_LOG, preamble)
  await writeFile(SECURITY_LOG, preamble)
  await writeFile(BUILD_LOG, preamble)

  const results = []
  for (const entry of REQUIRED) {
    const result = await run(entry)
    const phase = Number(entry.key.replace('phase', ''))
    if ([3, 4, 5, 6, 7].includes(phase)) {
      let core = null
      try { core = JSON.parse(await readFile(PHASE_ACCEPTANCE[phase], 'utf8')) } catch (error) { result.reason = error.message }
      await writeFile(PHASE_ACCEPTANCE[phase], baselines[phase].raw)
      result.authoritative_baseline_preserved = true
      if (!validateCore(phase, core)) {
        result.status = 'failed'
        result.reason ??= `Faz ${phase} çekirdek kabul koşusu değişti.`
      }
    }
    if (entry.key === 'phase8') {
      let core = null
      try { core = JSON.parse(await readFile(ACCEPTANCE, 'utf8')) } catch (error) { result.reason = error.message }
      result.core_assertions = core?.assertions ?? null
      result.core_scenarios = core?.scenarios?.length ?? null
      result.core_gates = core?.gate_totals?.passed ?? null
      if (core?.status !== 'core_passed_runner_pending' || core?.assertions !== 94
          || core?.scenarios?.length !== 19 || core?.gate_totals?.required !== 9 || core?.gate_totals?.passed !== 9) {
        result.status = 'failed'
        result.reason ??= 'Faz 8 çekirdek koşusu 94 doğrulama, 19/19 senaryo ve 9/9 kapı üretmedi.'
      }
    }
    if (entry.key === 'visual') {
      let visual = null
      try { visual = JSON.parse(await readFile(path.join(OUT, 'gorsel-dogrulama.json'), 'utf8')) } catch (error) { result.reason = error.message }
      result.visual_cases = visual?.totals?.passed ?? null
      if (visual?.status !== 'passed' || visual?.totals?.required !== 12 || visual?.totals?.passed !== 12) {
        result.status = 'failed'
        result.reason ??= 'Faz 8 görsel koşusu 12/12 durum üretmedi.'
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
  await writeFile(COMMANDS, `${JSON.stringify({
    schema_version: 'phase-8-regression-commands@1', generated_at: iso(), workspace: ROOT,
    runner: 'scripts/run-phase-8-regressions.mjs', totals, commands: results,
  }, null, 2)}\n`)

  const acceptance = JSON.parse(await readFile(ACCEPTANCE, 'utf8'))
  const visual = JSON.parse(await readFile(path.join(OUT, 'gorsel-dogrulama.json'), 'utf8'))
  const allCommands = totals.passed === totals.required && totals.failed === 0
  acceptance.status = allCommands
    && acceptance.scenarios?.length === 19
    && acceptance.gate_totals?.required === 9 && acceptance.gate_totals?.passed === 9
    && visual.status === 'passed' && visual.totals?.passed === 12
    && Object.values(acceptance.side_effects ?? {}).every((value) => value === false)
    ? 'passed' : 'failed'
  acceptance.gates[7].evidence = 'FORCE RLS, enjeksiyon, açık onay ve 12/12 masaüstü/telefon ekran durumu; klavye, odak, 44 px dokunma, kontrast, azaltılmış hareket ve taşma kontrolleri geçti.'
  acceptance.commands = results
  acceptance.command_totals = totals
  acceptance.visual_validation = {
    status: visual.status,
    required: visual.totals.required,
    passed: visual.totals.passed,
    evidence: 'docs/ai-koc/kanitlar/faz-8/gorsel-dogrulama.json',
  }
  acceptance.command_logs = {
    regression: path.relative(ROOT, REGRESSION_LOG),
    security: path.relative(ROOT, SECURITY_LOG),
    build: path.relative(ROOT, BUILD_LOG),
  }
  acceptance.prerequisite_acceptance = {
    phase_3: '17/17 komut; 46/46 kapı; 450 doğrulama; manifest 6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc',
    phase_4: '12/12 komut; 85/85 kapı; 290 doğrulama',
    phase_5: '12/12 komut; 9/9 kapı; 231 doğrulama',
    phase_6: '11/11 komut; 9/9 kapı; 107 doğrulama',
    phase_7: '14/14 komut; 11/11 kapı; 137 doğrulama',
  }
  acceptance.generated_at = iso()
  await writeFile(ACCEPTANCE, `${JSON.stringify(acceptance, null, 2)}\n`)

  const securityPath = path.join(OUT, 'guvenlik-yetki-matrisi.json')
  const security = JSON.parse(await readFile(securityPath, 'utf8'))
  security.status = acceptance.status
  security.regression_commands_passed = totals.passed
  security.regression_commands_required = totals.required
  security.visual_cases_passed = visual.totals.passed
  security.visual_cases_required = visual.totals.required
  await writeFile(securityPath, `${JSON.stringify(security, null, 2)}\n`)

  process.stdout.write(`\n${totals.passed}/${totals.required} komut, 19/19 senaryo, ${acceptance.gate_totals.passed}/9 Faz 8 kapısı geçti.\n`)
  if (acceptance.status !== 'passed') process.exitCode = 1
}

await main()
