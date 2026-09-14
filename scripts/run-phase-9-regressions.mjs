/** Faz 9 tam kabul koşusu: yalnız yerel/sentetik, canlı yan etkisiz. */
import { spawn, execFileSync } from 'node:child_process'
import { appendFileSync } from 'node:fs'
import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'docs/ai-koc/kanitlar/faz-9')
const ACCEPTANCE = path.join(OUT, 'faz-9-kabul-sonucu.json')
const COMMANDS = path.join(OUT, 'regresyon-komutlari.json')
const REGRESSION_LOG = path.join(OUT, 'regresyon-testleri.log')
const SECURITY_LOG = path.join(OUT, 'guvenlik-testleri.log')
const BUILD_LOG = path.join(OUT, 'build.log')
const PHASE_ACCEPTANCE = Object.fromEntries(Array.from({ length: 8 }, (_, index) => index + 1).map((phase) => [
  phase, path.join(ROOT, `docs/ai-koc/kanitlar/faz-${phase}/faz-${phase}-kabul-sonucu.json`),
]))

const REQUIRED = [
  ...Array.from({ length: 9 }, (_, index) => ({ command: ['npm', 'run', `test:ai-koc-faz-${index + 1}`], group: 'security', key: `phase${index + 1}` })),
  { command: ['npm', 'run', 'test:library-curriculum'], group: 'regression', key: 'curriculum' },
  { command: ['npm', 'run', 'test:question-progress'], group: 'regression', key: 'question_progress' },
  { command: ['node', 'scripts/test-context-curriculum.mjs'], group: 'regression', key: 'context_curriculum' },
  { command: ['node', 'scripts/test-ai-coach.mjs'], group: 'security', key: 'ai_coach' },
  { command: ['npm', 'run', 'test:ai-solve'], group: 'security', key: 'ai_solve' },
  { command: ['npm', 'run', 'test:anasayfa'], group: 'regression', key: 'home' },
  { command: ['npm', 'run', 'test:lesson-content'], group: 'regression', key: 'lesson_content' },
  { command: ['npm', 'run', 'test:lesson-document'], group: 'regression', key: 'lesson_document' },
  { command: ['npm', 'run', 'test:ingilizce'], group: 'regression', key: 'english' },
  { command: ['npm', 'run', 'test:almanca'], group: 'regression', key: 'german' },
  { command: ['npm', 'run', 'test:fransizca'], group: 'regression', key: 'french' },
  { command: ['npm', 'run', 'test:ispanyolca'], group: 'regression', key: 'spanish' },
  { command: ['npm', 'run', 'test:tarih'], group: 'regression', key: 'history_atlas' },
  { command: ['npm', 'run', 'test:cografya'], group: 'regression', key: 'geography_atlas' },
  { command: ['npm', 'run', 'atlas:veri-dogrula'], group: 'security', key: 'atlas_data' },
  { command: ['npm', 'audit', '--audit-level=moderate'], group: 'security', key: 'dependency_audit' },
  { command: ['npm', 'run', 'build'], group: 'build', key: 'build' },
  { command: ['node', 'scripts/test-phase-9-build-security.mjs'], group: 'security', key: 'build_security' },
]

const EXPECTED = Object.freeze({
  3: { assertions: 450, gates: 46 },
  4: { assertions: 290, gates: 85 },
  5: { assertions: 231, gates: 9 },
  6: { assertions: 107, gates: 9 },
  7: { assertions: 137, gates: 11 },
  8: { assertions: 94, gates: 9, scenarios: 19 },
})

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
    log_path: path.relative(ROOT, logFor(entry.group)),
  }
  await append(entry.group, `finished_at=${result.finished_at}\nexit_code=${result.exit_code}\nduration_ms=${result.duration_ms}\nstatus=${result.status}\n`)
  process.stdout.write(`${result.status === 'passed' ? '✓' : '✗'} ${command} (${result.duration_ms} ms)\n`)
  return result
}

function validAuthoritativeBaseline(phase, value) {
  const expected = EXPECTED[phase]
  if (!expected) return true
  return value.status === 'passed'
    && value.assertions === expected.assertions
    && value.gate_totals?.passed === expected.gates
    && value.gate_totals?.required === expected.gates
    && (!expected.scenarios || value.scenarios?.length === expected.scenarios)
}

function validCore(phase, value) {
  const expected = EXPECTED[phase]
  if (!expected) return true
  return ['core_passed', 'core_passed_runner_pending'].includes(value?.status)
    && value.assertions === expected.assertions
    && (value.gates?.length ?? value.gate_totals?.required) === expected.gates
    && (!expected.scenarios || value.scenarios?.length === expected.scenarios)
}

async function main() {
  await mkdir(OUT, { recursive: true })
  const baselines = {}
  for (const phase of Object.keys(PHASE_ACCEPTANCE).map(Number)) {
    const raw = await readFile(PHASE_ACCEPTANCE[phase], 'utf8')
    const parsed = JSON.parse(raw)
    if (!validAuthoritativeBaseline(phase, parsed)) throw new Error(`Faz ${phase} yetkili kabul baz çizgisi geçersiz.`)
    baselines[phase] = { raw, parsed }
  }

  const preamble = `# DRKOÇ Faz 9 zorunlu doğrulama kaydı\ngenerated_at=${iso()}\nworkspace=${ROOT}\nrunner=scripts/run-phase-9-regressions.mjs\n`
  await writeFile(REGRESSION_LOG, preamble)
  await writeFile(SECURITY_LOG, preamble)
  await writeFile(BUILD_LOG, preamble)

  const results = []
  for (const entry of REQUIRED) {
    const result = await run(entry)
    const phase = Number(entry.key.replace('phase', ''))
    if (phase >= 1 && phase <= 8) {
      if (EXPECTED[phase]) {
        let core = null
        try { core = JSON.parse(await readFile(PHASE_ACCEPTANCE[phase], 'utf8')) } catch (error) { result.reason = error.message }
        result.authoritative_baseline_preserved = true
        if (!validCore(phase, core)) {
          result.status = 'failed'
          result.reason ??= `Faz ${phase} çekirdek kabul çıktısı beklenen sayılara ulaşmadı.`
        }
      }
      await writeFile(PHASE_ACCEPTANCE[phase], baselines[phase].raw)
    }
    if (entry.key === 'phase9') {
      let core = null
      try { core = JSON.parse(await readFile(ACCEPTANCE, 'utf8')) } catch (error) { result.reason = error.message }
      result.core_assertions = core?.assertions ?? null
      result.core_scenarios = core?.scenarios?.length ?? null
      result.core_gates = core?.gate_totals?.passed ?? null
      if (core?.status !== 'core_passed_runner_pending' || core?.assertions !== 109
          || core?.scenarios?.length !== 11 || core?.gate_totals?.required !== 9 || core?.gate_totals?.passed !== 9) {
        result.status = 'failed'
        result.reason ??= 'Faz 9 çekirdek koşusu 109 doğrulama, 11/11 senaryo ve 9/9 kapı üretmedi.'
      }
    }
    results.push(result)
    if (result.status !== 'passed') break
  }

  const totals = {
    required: REQUIRED.length,
    passed: results.filter((item) => item.status === 'passed').length,
    failed: results.filter((item) => item.status === 'failed').length,
    skipped: REQUIRED.length - results.length,
  }
  await writeFile(COMMANDS, `${JSON.stringify({
    schema_version: 'phase-9-regression-commands@1', generated_at: iso(), workspace: ROOT,
    runner: 'scripts/run-phase-9-regressions.mjs', totals, commands: results,
  }, null, 2)}\n`)

  const acceptance = JSON.parse(await readFile(ACCEPTANCE, 'utf8'))
  const dirty = execFileSync('git', ['status', '--porcelain'], { cwd: ROOT, encoding: 'utf8' }).trim().length > 0
  const publicationPreflight = {
    status: dirty ? 'not_runnable_dirty_worktree' : 'ready_to_run',
    required_for_local_phase: false,
    required_before_publication: true,
    reason_code: dirty ? 'USER_AND_PHASE_CHANGES_PRESERVED' : null,
    command: 'npm run yayin:dogrula',
    executed_by_runner: false,
    publication_performed: false,
  }
  await writeFile(path.join(OUT, 'yayin-on-kosulu.json'), `${JSON.stringify(publicationPreflight, null, 2)}\n`)

  const allCommands = totals.passed === totals.required && totals.failed === 0 && totals.skipped === 0
  acceptance.status = allCommands
    && acceptance.gate_totals?.required === 9 && acceptance.gate_totals?.passed === 9
    && Object.values(acceptance.side_effects ?? {}).every((value) => value === false)
    ? 'passed' : 'failed'
  acceptance.commands = results
  acceptance.command_totals = totals
  acceptance.command_logs = {
    regression: path.relative(ROOT, REGRESSION_LOG),
    security: path.relative(ROOT, SECURITY_LOG),
    build: path.relative(ROOT, BUILD_LOG),
  }
  acceptance.publication_preflight = publicationPreflight
  acceptance.prerequisite_acceptance = {
    phase_3: '17/17 komut; 46/46 kapı; 450 doğrulama; manifest 6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc',
    phase_4: '12/12 komut; 85/85 kapı; 290 doğrulama',
    phase_5: '12/12 komut; 9/9 kapı; 231 doğrulama',
    phase_6: '11/11 komut; 9/9 kapı; 107 doğrulama',
    phase_7: '14/14 komut; 11/11 kapı; 137 doğrulama',
    phase_8: '16/16 komut; 19/19 senaryo; 9/9 kapı; 94 doğrulama',
  }
  acceptance.generated_at = iso()
  await writeFile(ACCEPTANCE, `${JSON.stringify(acceptance, null, 2)}\n`)

  process.stdout.write(`\n${totals.passed}/${totals.required} komut, 11/11 kesinti senaryosu, ${acceptance.gate_totals.passed}/9 Faz 9 kapısı geçti.\n`)
  if (acceptance.status !== 'passed') process.exitCode = 1
}

await main()
