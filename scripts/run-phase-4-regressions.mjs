import { spawn } from 'node:child_process'
import { appendFileSync, existsSync } from 'node:fs'
import { mkdir, readFile, writeFile, appendFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'docs/ai-koc/kanitlar/faz-4')
const ACCEPTANCE = path.join(OUT, 'faz-4-kabul-sonucu.json')
const PHASE3_ACCEPTANCE = path.join(ROOT, 'docs/ai-koc/kanitlar/faz-3/faz-3-kabul-sonucu.json')
const COMMANDS = path.join(OUT, 'regresyon-komutlari.json')
const REGRESSION_LOG = path.join(OUT, 'regresyon-testleri.log')
const SECURITY_LOG = path.join(OUT, 'guvenlik-testleri.log')
const BUILD_LOG = path.join(OUT, 'build.log')
const VISUAL = path.join(OUT, 'gorsel-dogrulama.md')

const REQUIRED = [
  { command: ['npm','run','test:ai-koc-faz-1'], group: 'security', key: 'phase1' },
  { command: ['npm','run','test:ai-koc-faz-2'], group: 'security', key: 'phase2' },
  { command: ['npm','run','test:ai-koc-faz-3'], group: 'security', key: 'phase3' },
  { command: ['npm','run','test:ai-koc-faz-4'], group: 'security', key: 'phase4' },
  { command: ['npm','run','test:parent-rls'], group: 'security', key: 'parent' },
  { command: ['npm','run','test:live-lessons'], group: 'security', key: 'live' },
  { command: ['npm','run','test:teacher-notifications'], group: 'security', key: 'notifications' },
  { command: ['npm','run','test:ai-solve'], group: 'regression', key: 'solve' },
  { command: ['node','scripts/test-ai-coach.mjs'], group: 'regression', key: 'coach' },
  { command: ['node','scripts/test-exam-stats.mjs'], group: 'regression', key: 'exam' },
  { command: ['npm','run','test:anasayfa'], group: 'regression', key: 'home' },
  { command: ['npm','run','build'], group: 'build', key: 'build' },
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

async function run(entry) {
  const startedAt = iso(); const started = Date.now(); const command = display(entry)
  await append(entry.group, `\n===== ${command} =====\nstarted_at=${startedAt}\n`)
  process.stdout.write(`\n▶ ${command}\n`)
  const child = spawn(entry.command[0], entry.command.slice(1), {
    cwd: ROOT, env: { ...process.env, CI: '1', FORCE_COLOR: '0', npm_config_color: 'false' }, stdio: ['ignore','pipe','pipe'],
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
    log_path: path.relative(ROOT, targetLog(entry.group)),
  }
  await append(entry.group, `\nfinished_at=${result.finished_at}\nexit_code=${result.exit_code}\nduration_ms=${result.duration_ms}\nstatus=${result.status}\n`)
  process.stdout.write(`${result.status === 'passed' ? '✓' : '✗'} ${command} (${result.duration_ms} ms)\n`)
  return result
}

async function main() {
  await mkdir(OUT, { recursive: true })
  const phase3AcceptanceRaw = await readFile(PHASE3_ACCEPTANCE, 'utf8')
  const phase3Baseline = JSON.parse(phase3AcceptanceRaw)
  const phase3BaselinePassed = phase3Baseline.status === 'passed'
    && phase3Baseline.command_totals?.required === 17
    && phase3Baseline.command_totals?.passed === 17
    && phase3Baseline.gate_totals?.required === 46
    && phase3Baseline.gate_totals?.passed === 46
    && phase3Baseline.assertions === 450
  const preamble = `# DRKOÇ Faz 4 zorunlu doğrulama kaydı\ngenerated_at=${iso()}\nworkspace=${ROOT}\nrunner=scripts/run-phase-4-regressions.mjs\n`
  await writeFile(REGRESSION_LOG, preamble)
  await writeFile(SECURITY_LOG, preamble)
  await writeFile(BUILD_LOG, preamble)
  const results = []
  for (const entry of REQUIRED) {
    const result = await run(entry)
    if (entry.key === 'phase3') {
      let phase3Core = null
      try {
        phase3Core = JSON.parse(await readFile(PHASE3_ACCEPTANCE, 'utf8'))
      } catch (error) {
        result.reason = `Faz 3 çekirdek kabul çıktısı okunamadı: ${error.message}`
      } finally {
        await writeFile(PHASE3_ACCEPTANCE, phase3AcceptanceRaw)
      }
      result.core_assertions = phase3Core?.assertions ?? null
      result.baseline_acceptance = phase3BaselinePassed ? '17/17 commands; 46/46 gates' : 'invalid'
      if (!phase3BaselinePassed || phase3Core?.status !== 'core_passed_runner_pending'
        || phase3Core?.assertions !== 450) {
        result.status = 'failed'
        result.reason ??= 'Faz 3 yetkili kabul baz çizgisi veya 450 doğrulamalı çekirdek koşu geçersiz.'
      }
    }
    results.push(result)
  }
  const totals = { required: results.length, passed: results.filter((item) => item.status === 'passed').length, failed: results.filter((item) => item.status === 'failed').length, skipped: 0 }
  const commandEvidence = { schema_version: 'phase-4-regression-commands@1', generated_at: iso(), workspace: ROOT, totals, commands: results }
  await writeFile(COMMANDS, `${JSON.stringify(commandEvidence, null, 2)}\n`)

  const acceptance = JSON.parse(await readFile(ACCEPTANCE, 'utf8'))
  const passed = new Set(results.filter((item) => item.status === 'passed').map((item) => item.key))
  const visualText = existsSync(VISUAL) ? await readFile(VISUAL, 'utf8') : ''
  const visualPassed = visualText.includes('Durum: passed')
    && ['1440×900','768×1024','390×844'].every((viewport) => visualText.includes(viewport))
    && visualText.includes('Klavye/Erişilebilirlik: passed')
  const updates = new Map([
    [2, { status: passed.has('phase1') && passed.has('phase2') ? 'passed' : 'failed', evidence: 'zorunlu Faz 1 ve Faz 2 komut çıktıları' }],
    [4, { status: passed.has('phase3') ? 'passed' : 'failed', evidence: 'Faz 3 yetkili baz çizgisi: 17/17 komut, 46/46 kapı; bu koşuda çekirdek 450 doğrulama' }],
    [69, { status: passed.has('parent') ? 'passed' : 'failed', evidence: 'onaylı/bekleyen/reddedilmiş/ilişkisiz veli gerçek PGlite matrisi' }],
    [80, { status: visualPassed ? 'passed' : 'failed', evidence: path.relative(ROOT, VISUAL) }],
    [81, { status: ['parent','live','notifications','solve','coach','exam','home'].every((key) => passed.has(key)) ? 'passed' : 'failed', evidence: path.relative(ROOT, COMMANDS) }],
    [82, { status: passed.has('build') ? 'passed' : 'failed', evidence: path.relative(ROOT, BUILD_LOG) }],
  ])
  acceptance.gates = acceptance.gates.map((gate) => updates.has(gate.id) ? { ...gate, ...updates.get(gate.id) } : gate)
  const first84 = acceptance.gates.filter((gate) => gate.id < 85).every((gate) => gate.status === 'passed')
  const allCommands = totals.passed === totals.required && totals.failed === 0
  acceptance.gates = acceptance.gates.map((gate) => gate.id === 85 ? {
    ...gate, status: first84 && allCommands ? 'passed' : 'failed',
    evidence: 'çekirdek runner + 12 zorunlu komut + görsel doğrulama makine toplamı',
  } : gate)
  acceptance.status = acceptance.gates.every((gate) => gate.status === 'passed') ? 'passed' : 'failed'
  acceptance.commands = results
  acceptance.command_totals = totals
  acceptance.command_logs = { regression: path.relative(ROOT, REGRESSION_LOG), security: path.relative(ROOT, SECURITY_LOG), build: path.relative(ROOT, BUILD_LOG) }
  acceptance.visual_validation = { status: visualPassed ? 'passed' : 'failed', evidence_path: path.relative(ROOT, VISUAL), viewports: ['1440x900','768x1024','390x844'], live_data_used: false }
  acceptance.gate_totals = { required: 85, passed: acceptance.gates.filter((gate) => gate.status === 'passed').length, failed: acceptance.gates.filter((gate) => gate.status === 'failed').length, pending: acceptance.gates.filter((gate) => gate.status === 'pending').length }
  acceptance.generated_at = iso()
  await writeFile(ACCEPTANCE, `${JSON.stringify(acceptance, null, 2)}\n`)
  process.stdout.write(`\n${totals.passed}/${totals.required} komut, ${acceptance.gate_totals.passed}/85 kapı geçti.\n`)
  if (acceptance.status !== 'passed') process.exitCode = 1
}

await main()
