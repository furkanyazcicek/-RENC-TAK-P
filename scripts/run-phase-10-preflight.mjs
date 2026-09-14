/** Faz 10 canlı-öncesi yerel hazırlık toplayıcısı; canlı yan etkisi yoktur. */
import { spawnSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'

const ROOT = process.cwd()
const OUT = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-yerel-hazirlik-komutlari.json')
const COMMANDS = [
  ['npm', 'run', 'test:ai-koc-faz-10:preflight'],
  ['npm', 'run', 'test:ai-koc-faz-10:migration-plan'],
]

const results = []
for (const command of COMMANDS) {
  const startedAt = new Date().toISOString()
  const started = Date.now()
  console.log(`\n▶ ${command.join(' ')}`)
  const outcome = spawnSync(command[0], command.slice(1), {
    cwd: ROOT,
    env: { ...process.env, CI: '1', FORCE_COLOR: '0', npm_config_color: 'false' },
    encoding: 'utf8',
  })
  if (outcome.stdout) process.stdout.write(outcome.stdout)
  if (outcome.stderr) process.stderr.write(outcome.stderr)
  const result = {
    command: command.join(' '),
    started_at: startedAt,
    finished_at: new Date().toISOString(),
    duration_ms: Date.now() - started,
    exit_code: outcome.status,
    status: outcome.status === 0 ? 'passed' : 'failed',
  }
  results.push(result)
  if (result.status === 'failed') break
}

const checkpoint = JSON.parse(readFileSync(
  join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-baslangic-checkpoint.json'),
  'utf8',
))
const totals = {
  required: COMMANDS.length,
  passed: results.filter((item) => item.status === 'passed').length,
  failed: results.filter((item) => item.status === 'failed').length,
  skipped: COMMANDS.length - results.length,
}
const passed = totals.passed === totals.required && totals.failed === 0 && totals.skipped === 0
const summary = {
  schema_version: 'phase-10-local-preflight-commands@1',
  phase: 10,
  status: passed ? 'local_preflight_passed_live_prerequisites_pending' : 'failed',
  generated_at: new Date().toISOString(),
  workspace: ROOT,
  totals,
  commands: results,
  evidence: {
    checkpoint: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-baslangic-checkpoint.json')),
    migration_plan: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-migration-operasyon-plani.json')),
  },
  ready_for_live_write: false,
  blocker: checkpoint.blocking_gate,
  side_effects: checkpoint.side_effects,
}

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, `${JSON.stringify(summary, null, 2)}\n`)
console.log(`\nFaz 10 yerel hazırlık: ${totals.passed}/${totals.required} komut geçti; canlı yazma kapalı.`)
if (!passed) process.exitCode = 1
