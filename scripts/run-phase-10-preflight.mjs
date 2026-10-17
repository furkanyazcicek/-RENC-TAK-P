/** Faz 10 canlı-öncesi yerel hazırlık toplayıcısı; canlı yan etkisi yoktur. */
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'

const ROOT = process.cwd()
const OUT = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-yerel-hazirlik-komutlari.json')
const CURRENT_FAILURE = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-guncel-onkosul-engeli.json')
const COMMANDS = [
  ['npm', 'run', 'test:ai-koc-faz-10:live-schema-contract'],
  ['npm', 'run', 'test:ai-koc-faz-10:live-volume-rehearsal'],
  ['npm', 'run', 'test:ai-koc-faz-10:cost-guard'],
  ['npm', 'run', 'test:ai-koc-faz-10:owner-rollout'],
  ['npm', 'run', 'test:ai-koc-faz-10:legacy-compatibility'],
  ['npm', 'run', 'test:ai-koc-faz-10:projection-visibility'],
  ['npm', 'run', 'test:ai-koc-faz-10:projection-operator'],
  ['npm', 'run', 'test:ai-koc-faz-10:projection-pg-apply'],
  ['npm', 'run', 'test:ai-koc-faz-10:projection-race'],
  ['npm', 'run', 'test:ai-koc-faz-10:coach-db-gate'],
  ['npm', 'run', 'test:ai-koc-faz-10:content-drift'],
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
const preflightResult = results.find((item) => item.command === 'npm run test:ai-koc-faz-10:preflight')
const priorFailure = existsSync(CURRENT_FAILURE)
  ? JSON.parse(readFileSync(CURRENT_FAILURE, 'utf8')) : null
const currentFailure = preflightResult?.status === 'failed'
  && Date.parse(priorFailure?.generated_at ?? '') >= Date.parse(preflightResult.started_at)
  ? priorFailure : null
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
    current_failure: currentFailure ? relative(ROOT, CURRENT_FAILURE) : null,
    migration_plan: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-migration-operasyon-plani.json')),
    live_schema_contract: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-sema-sozlesmesi.json')),
    live_volume_rehearsal: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-hacim-yerel-prova.json')),
    cost_guard_decision: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-ucret-kisiti-karari.json')),
    owner_test_rollout: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-test-hesabi-acilis-siniri.json')),
    legacy_coach_compatibility: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-eski-koc-uyumluluk.json')),
    projection_visibility: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-projeksiyon-gorunurlugu.json')),
    projection_operator: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-projeksiyon-isletim-provasi.json')),
    projection_pg_apply: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-projeksiyon-pg-uygulama.json')),
    projection_race: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-projeksiyon-yaris.json')),
    coach_database_gate: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-koc-veritabani-kapisi.json')),
    content_baseline_drift: relative(ROOT, join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-icerik-baz-cizgisi-farki.json')),
  },
  ready_for_live_write: false,
  blocker: currentFailure?.blocking_gate ?? (passed ? checkpoint.blocking_gate : {
    code: 'LOCAL_PREFLIGHT_COMMAND_FAILED',
    detail: 'Güncel yerel hazırlık komutu başarısız; eski checkpoint canlı hazırlık kanıtı sayılamaz.',
  }),
  side_effects: currentFailure?.side_effects ?? checkpoint.side_effects,
}

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, `${JSON.stringify(summary, null, 2)}\n`)
console.log(`\nFaz 10 yerel hazırlık: ${totals.passed}/${totals.required} komut geçti; canlı yazma kapalı.`)
if (!passed) process.exitCode = 1
