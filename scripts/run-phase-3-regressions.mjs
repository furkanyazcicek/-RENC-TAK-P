import { spawn } from 'node:child_process'
import { appendFileSync, existsSync } from 'node:fs'
import { mkdir, readFile, writeFile, appendFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const ROOT = process.cwd()
const EVIDENCE_DIR = path.join(ROOT, 'docs/ai-koc/kanitlar/faz-3')
const REGRESSION_LOG = path.join(EVIDENCE_DIR, 'regresyon-testleri.log')
const SECURITY_LOG = path.join(EVIDENCE_DIR, 'guvenlik-testleri.log')
const BUILD_LOG = path.join(EVIDENCE_DIR, 'build.log')
const COMMANDS_JSON = path.join(EVIDENCE_DIR, 'regresyon-komutlari.json')
const ACCEPTANCE_JSON = path.join(EVIDENCE_DIR, 'faz-3-kabul-sonucu.json')
const VISUAL_EVIDENCE = path.join(EVIDENCE_DIR, 'gorsel-dogrulama.md')

const REQUIRED = [
  { script: 'test:ai-koc-faz-1', group: 'security' },
  { script: 'test:ai-koc-faz-2', group: 'security' },
  { script: 'test:ai-koc-faz-3', group: 'security' },
  { script: 'test:lesson-document', group: 'regression' },
  { script: 'test:lesson-content', group: 'regression' },
  { script: 'test:lesson-narration', group: 'regression' },
  { script: 'test:library-curriculum', group: 'regression' },
  { script: 'test:matematik-soru-kutuphanesi', group: 'regression' },
  { script: 'test:felsefe-soru-kutuphanesi', group: 'regression' },
  { script: 'test:tarih-soru-kutuphanesi', group: 'regression' },
  { script: 'test:kimya', group: 'regression' },
  { script: 'test:fizik', group: 'regression' },
  { script: 'test:biyoloji', group: 'regression' },
  { script: 'test:cografya', group: 'regression' },
  { script: 'test:tarih', group: 'regression' },
  { script: 'test:anasayfa', group: 'regression' },
  { script: 'build', group: 'build' },
]

function nowIso() {
  return new Date().toISOString()
}

function header(command, startedAt) {
  return `\n===== ${command} =====\nstarted_at=${startedAt}\n`
}

function footer(result) {
  return `\nfinished_at=${result.finished_at}\nexit_code=${result.exit_code}\nduration_ms=${result.duration_ms}\nstatus=${result.status}\n`
}

async function appendToLogs(group, value) {
  await appendFile(REGRESSION_LOG, value)
  if (group === 'security') await appendFile(SECURITY_LOG, value)
  if (group === 'build') await appendFile(BUILD_LOG, value)
}

function appendChunkToLogs(group, value) {
  appendFileSync(REGRESSION_LOG, value)
  if (group === 'security') appendFileSync(SECURITY_LOG, value)
  if (group === 'build') appendFileSync(BUILD_LOG, value)
}

async function runNpmScript(entry, availableScripts) {
  const command = `npm run ${entry.script}`
  const startedAt = nowIso()
  const startedMs = Date.now()
  await appendToLogs(entry.group, header(command, startedAt))
  process.stdout.write(`\n▶ ${command}\n`)

  if (!availableScripts.has(entry.script)) {
    const result = {
      command,
      script: entry.script,
      group: entry.group,
      started_at: startedAt,
      finished_at: nowIso(),
      duration_ms: Date.now() - startedMs,
      exit_code: null,
      status: 'skipped',
      reason: 'package.json içinde bu script bulunmuyor.',
      log_path: path.relative(ROOT, entry.group === 'build' ? BUILD_LOG
        : entry.group === 'security' ? SECURITY_LOG : REGRESSION_LOG),
    }
    await appendToLogs(entry.group, `${result.reason}\n${footer(result)}`)
    process.stdout.write(`⏭ skipped: ${result.reason}\n`)
    return result
  }

  const child = spawn('npm', ['run', entry.script], {
    cwd: ROOT,
    env: {
      ...process.env,
      CI: '1',
      FORCE_COLOR: '0',
      npm_config_color: 'false',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  child.stdout.on('data', (chunk) => {
    process.stdout.write(chunk)
    appendChunkToLogs(entry.group, chunk)
  })
  child.stderr.on('data', (chunk) => {
    process.stderr.write(chunk)
    appendChunkToLogs(entry.group, chunk)
  })

  const outcome = await new Promise((resolve) => {
    child.once('error', (error) => resolve({ code: null, error }))
    child.once('close', (code, signal) => resolve({ code, signal }))
  })
  const result = {
    command,
    script: entry.script,
    group: entry.group,
    started_at: startedAt,
    finished_at: nowIso(),
    duration_ms: Date.now() - startedMs,
    exit_code: outcome.code,
    signal: outcome.signal ?? null,
    status: outcome.code === 0 ? 'passed' : 'failed',
    reason: outcome.error?.message ?? null,
    log_path: path.relative(ROOT, entry.group === 'build' ? BUILD_LOG
      : entry.group === 'security' ? SECURITY_LOG : REGRESSION_LOG),
  }
  await appendToLogs(entry.group, footer(result))
  process.stdout.write(`${result.status === 'passed' ? '✓' : '✗'} ${command} (${result.duration_ms} ms)\n`)
  return result
}

async function main() {
  const packageJson = JSON.parse(await readFile(path.join(ROOT, 'package.json'), 'utf8'))
  const availableScripts = new Set(Object.keys(packageJson.scripts ?? {}))
  await mkdir(EVIDENCE_DIR, { recursive: true })

  const commonPreamble = [
    '# DRKOÇ Faz 3 zorunlu doğrulama kaydı',
    `generated_at=${nowIso()}`,
    `workspace=${ROOT}`,
    'runner=scripts/run-phase-3-regressions.mjs',
    '',
  ].join('\n')
  await writeFile(REGRESSION_LOG, commonPreamble)
  await writeFile(SECURITY_LOG, commonPreamble)
  await writeFile(BUILD_LOG, commonPreamble)

  const results = []
  for (const entry of REQUIRED) results.push(await runNpmScript(entry, availableScripts))

  const summary = {
    schema_version: 'phase-3-regression-commands@1',
    generated_at: nowIso(),
    workspace: ROOT,
    runner: 'scripts/run-phase-3-regressions.mjs',
    totals: {
      required: results.length,
      passed: results.filter((item) => item.status === 'passed').length,
      failed: results.filter((item) => item.status === 'failed').length,
      skipped: results.filter((item) => item.status === 'skipped').length,
    },
    logs: {
      regression: path.relative(ROOT, REGRESSION_LOG),
      security: path.relative(ROOT, SECURITY_LOG),
      build: path.relative(ROOT, BUILD_LOG),
    },
    commands: results,
  }
  await writeFile(COMMANDS_JSON, `${JSON.stringify(summary, null, 2)}\n`)

  const acceptance = JSON.parse(await readFile(ACCEPTANCE_JSON, 'utf8'))
  const allCommandsPassed = summary.totals.passed === summary.totals.required
    && summary.totals.failed === 0 && summary.totals.skipped === 0
  const passedScripts = new Set(results
    .filter((item) => item.status === 'passed').map((item) => item.script))
  const coreProductScripts = REQUIRED
    .filter((entry) => entry.script !== 'build')
    .map((entry) => entry.script)
  const productRegressionsPassed = coreProductScripts.every((script) => passedScripts.has(script))
  const phasePreconditionsPassed = passedScripts.has('test:ai-koc-faz-1')
    && passedScripts.has('test:ai-koc-faz-2')
    && acceptance.migration?.phase_2_sha256
      === '993437ba3bb34b5c97e14a5c6e126d482f769e65be34ca2d08d20832b47ebdea'
  const visualPassed = existsSync(VISUAL_EVIDENCE)
    && (await readFile(VISUAL_EVIDENCE, 'utf8')).length > 1000

  const gateUpdates = new Map([
    [1, {
      status: phasePreconditionsPassed ? 'passed' : 'failed',
      evidence: 'npm run test:ai-koc-faz-1, npm run test:ai-koc-faz-2 ve sabit Faz 2 SHA-256',
    }],
    [41, {
      status: productRegressionsPassed ? 'passed' : 'failed',
      evidence: 'Zorunlu ders, soru kütüphanesi ve atlas regresyon komutları',
    }],
    [42, {
      status: visualPassed ? 'passed' : 'failed',
      evidence: path.relative(ROOT, VISUAL_EVIDENCE),
    }],
    [43, {
      status: allCommandsPassed ? 'passed' : 'failed',
      evidence: path.relative(ROOT, COMMANDS_JSON),
    }],
  ])
  acceptance.gates = (acceptance.gates ?? []).map((gate) => (
    gateUpdates.has(gate.id) ? { ...gate, ...gateUpdates.get(gate.id) } : gate
  ))
  const first45Passed = acceptance.gates
    .filter((gate) => gate.id <= 45)
    .every((gate) => gate.status === 'passed')
  acceptance.gates = acceptance.gates.map((gate) => gate.id === 46 ? {
    ...gate,
    status: first45Passed ? 'passed' : 'failed',
    evidence: 'regresyon-komutlari.json + faz-3 kabul çekirdeği + gorsel-dogrulama.md',
  } : gate)
  const allGatesPassed = acceptance.gates.length === 46
    && acceptance.gates.every((gate) => gate.status === 'passed')
  acceptance.status = allGatesPassed ? 'passed' : 'failed'
  acceptance.commands = results
  acceptance.command_totals = summary.totals
  acceptance.command_logs = summary.logs
  acceptance.visual_validation = {
    status: visualPassed ? 'passed' : 'failed',
    evidence_path: path.relative(ROOT, VISUAL_EVIDENCE),
    viewports: ['1440x900', '768x1024', '390x844'],
    live_data_used: false,
  }
  acceptance.gate_totals = {
    required: 46,
    passed: acceptance.gates.filter((gate) => gate.status === 'passed').length,
    failed: acceptance.gates.filter((gate) => gate.status === 'failed').length,
    pending: acceptance.gates.filter((gate) => gate.status === 'pending').length,
  }
  acceptance.generated_at = nowIso()
  await writeFile(ACCEPTANCE_JSON, `${JSON.stringify(acceptance, null, 2)}\n`)
  process.stdout.write(`\n${summary.totals.passed}/${summary.totals.required} komut geçti; ${summary.totals.failed} başarısız, ${summary.totals.skipped} atlandı.\n`)
  process.stdout.write(`${acceptance.gate_totals.passed}/46 Faz 3 kabul kapısı geçti.\n`)
  if (!allGatesPassed) process.exitCode = 1
}

await main()
