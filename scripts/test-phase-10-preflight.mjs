/**
 * AI Koç Faz 10 — yalnız okuma amaçlı canlı geçiş ön koşul denetimi.
 *
 * Bu komut canlı Supabase'e bağlanmaz; migration, backfill, pilot, yayın veya
 * push çalıştırmaz. Eksik canlı ön koşulları "başarısız test" gibi gizlemek
 * yerine, kontrollü geçişi durduran bekleyen kapılar olarak kaydeder.
 */
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join, relative } from 'node:path'

import { resolveLearningRollout } from '../api/_lib/learning/rollout.js'

const ROOT = realpathSync(process.cwd())
const AUTHORIZED_ROOT = '/Users/furkantalhayazcicek/Desktop/DRKOÇ'
const AUTHORIZED_REMOTE = 'https://github.com/furkanyazcicek/-RENC-TAK-P.git'
const OUT = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-baslangic-checkpoint.json')
const PHASE_9_ACCEPTANCE = join(ROOT, 'docs/ai-koc/kanitlar/faz-9/faz-9-kabul-sonucu.json')
const MANIFEST = join(ROOT, 'src/generated/learning-content-manifest.json')

const MIGRATIONS = Object.freeze([
  ['phase_2', 'supabase/migration_learning_evidence_network.sql', '993437ba3bb34b5c97e14a5c6e126d482f769e65be34ca2d08d20832b47ebdea'],
  ['phase_3', 'supabase/migration_learning_content_activity.sql', '8452d4497fc01f35eb8dc7a2c80ec029d6255c4067c548dfacfdce20009c7165'],
  ['phase_4', 'supabase/migration_learning_academic_records.sql', '06b8381911762c2436bedc0995bae344303f663b5f53566354d79afcee344f3f'],
  ['phase_5', 'supabase/migration_learning_language_progress.sql', '071e3a91c907729de3a679b18d66f3a434249b9f55a9101b80dafb0e42e09830'],
  ['phase_6', 'supabase/migration_learning_student_topic_model.sql', '02ce1a9ed7b1d2bbb6e9f2faea570343cd93ea6343d463599aa9eefe04e0322c'],
  ['phase_8', 'supabase/migration_learning_coaching_loop.sql', 'bbd7495596ded58bcfeed4eaeac56cbc759169c7982f6a5bc5eaa0479b7f1b1b'],
  ['phase_9', 'supabase/migration_learning_hardening.sql', '77ab95bd765f38294b89ab1fa577d4c78669909a0d866d6294c5a3edf95cb103'],
])

function git(...args) {
  return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex')
}

function safeProjectRefFromUrl(value) {
  try {
    const host = new URL(value).hostname
    return host.endsWith('.supabase.co') ? host.split('.')[0] : null
  } catch {
    return null
  }
}

function localProjectRef() {
  const marker = join(ROOT, 'supabase/.temp/project-ref')
  if (existsSync(marker)) return readFileSync(marker, 'utf8').trim() || null
  return safeProjectRefFromUrl(process.env.SUPABASE_URL)
}

const statusRows = git('status', '--porcelain=v1').split('\n').filter(Boolean)
const [remoteAhead, localAhead] = git('rev-list', '--left-right', '--count', 'origin/main...HEAD')
  .split(/\s+/).map(Number)
const gitPath = join(ROOT, '.git')
const phase9 = JSON.parse(readFileSync(PHASE_9_ACCEPTANCE, 'utf8'))
const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'))
const defaultRollout = resolveLearningRollout({
  env: {},
  studentId: '99000000-0000-4000-8000-000000000001',
  sourceCode: 'daily_logs',
})
const migrationSql = readFileSync(join(ROOT, 'supabase/migration_learning_hardening.sql'), 'utf8')
const actualProjectRef = localProjectRef()
const expectedProjectRef = process.env.DRKOC_PHASE10_EXPECTED_SUPABASE_PROJECT_REF?.trim() || null
const backupVerifiedAt = process.env.DRKOC_PHASE10_BACKUP_VERIFIED_AT?.trim() || null
const recoveryTestId = process.env.DRKOC_PHASE10_RECOVERY_TEST_ID?.trim() || null
const privacyReviewId = process.env.DRKOC_PHASE10_PRIVACY_REVIEW_ID?.trim() || null

const migrationChecks = MIGRATIONS.map(([phase, file, expected]) => {
  const actual = sha256(join(ROOT, file))
  assert.equal(actual, expected, `${phase} migration checksum değişti`)
  return { phase, file, sha256: actual, status: 'passed' }
})

assert.equal(phase9.status, 'passed')
assert.equal(phase9.command_totals?.required, 27)
assert.equal(phase9.command_totals?.passed, 27)
assert.equal(phase9.assertions, 109)
assert.equal(phase9.scenarios?.length, 11)
assert.equal(phase9.gate_totals?.required, 9)
assert.equal(phase9.gate_totals?.passed, 9)
assert.equal(manifest.manifest_version, 'learning-content-manifest@1')
assert.equal(manifest.manifest_checksum, '6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc')
assert.equal(manifest.entries?.length, 4344)
assert.equal(defaultRollout.source_events.enabled, false)
assert.equal(defaultRollout.projection.mode, 'disabled')
assert.equal(defaultRollout.coach_analysis.enabled, false)
assert.equal(defaultRollout.coach_writes.enabled, false)
assert.equal(defaultRollout.safe_fallback.enabled, true)
for (const expectedSeed of [
  "('source_events', 'global', '*', false, 'disabled'",
  "('projection', 'global', '*', false, 'disabled'",
  "('coach_analysis', 'global', '*', false, 'disabled'",
  "('coach_writes', 'global', '*', false, 'disabled'",
  "('safe_fallback', 'global', '*', true, 'enabled'",
]) assert.ok(migrationSql.includes(expectedSeed), `eksik güvenli migration varsayılanı: ${expectedSeed}`)

const targetVerified = Boolean(actualProjectRef && expectedProjectRef && actualProjectRef === expectedProjectRef)
const recoveryVerified = Boolean(backupVerifiedAt && recoveryTestId)
const privacyReviewed = Boolean(privacyReviewId)
const cleanWorktree = statusRows.length === 0

const checkpoint = {
  schema_version: 'phase-10-preflight@1',
  phase: 10,
  status: 'waiting_for_explicit_live_prerequisites',
  phase_status: 'Devam ediyor',
  generated_at: new Date().toISOString(),
  mode: 'read_only_local_preflight',
  ready_for_live_write: false,
  workspace: {
    path: ROOT,
    authorized_path_match: ROOT.normalize('NFC') === AUTHORIZED_ROOT.normalize('NFC'),
    git_directory_independent: existsSync(gitPath) && lstatSync(gitPath).isDirectory() && !lstatSync(gitPath).isSymbolicLink(),
    branch: git('branch', '--show-current'),
    origin: git('remote', 'get-url', 'origin'),
    authorized_origin_match: git('remote', 'get-url', 'origin') === AUTHORIZED_REMOTE,
    head: git('rev-parse', 'HEAD'),
    origin_main_comparison_from_local_ref: { remote_ahead: remoteAhead, local_ahead: localAhead },
    worktree_clean: cleanWorktree,
    tracked_change_count: statusRows.filter((row) => !row.startsWith('??')).length,
    untracked_count: statusRows.filter((row) => row.startsWith('??')).length,
    user_changes_preserved: true,
    vercel_link_absent: !existsSync(join(ROOT, '.vercel')),
  },
  phase_9_baseline: {
    status: phase9.status,
    commands: `${phase9.command_totals.passed}/${phase9.command_totals.required}`,
    assertions: phase9.assertions,
    outage_scenarios: `${phase9.scenarios.length}/${phase9.scenarios.length}`,
    gates: `${phase9.gate_totals.passed}/${phase9.gate_totals.required}`,
    acceptance_path: relative(ROOT, PHASE_9_ACCEPTANCE),
  },
  content_baseline: {
    manifest_version: manifest.manifest_version,
    manifest_checksum: manifest.manifest_checksum,
    entries: manifest.entries.length,
  },
  migration_plan: {
    status: 'candidate_order_verified_locally_live_history_reconciliation_pending',
    prerequisite_not_blindly_reapplied: 'supabase/migration_ai_coach.sql',
    prerequisite_note: 'Canlı migration geçmişinde profiles, kaynak tabloları ve ai_study_tasks doğrulanmadan sıra uygulanmaz.',
    ordered_new_migrations: migrationChecks,
    live_schema_dry_run: 'not_run_live_target_unverified',
    destructive_rollback: false,
    recovery_strategy: 'flags_off_then_forward_fix_preserve_queues_cursors_and_last_verified_generation',
  },
  live_target: {
    verified: targetVerified,
    configured_project_identity_present: Boolean(actualProjectRef),
    expected_project_identity_declared: Boolean(expectedProjectRef),
    identifiers_redacted: true,
    live_connection_attempted: false,
  },
  backup_and_recovery: {
    verified: recoveryVerified,
    backup_timestamp_evidence_present: Boolean(backupVerifiedAt),
    recovery_test_evidence_present: Boolean(recoveryTestId),
    restore_attempted: false,
  },
  rollout_guards: {
    status: 'passed',
    source_events_default: false,
    projection_default: 'disabled',
    coach_analysis_default: 'disabled',
    coach_analysis_percent_default: 0,
    coach_writes_default: false,
    safe_fallback_default: true,
  },
  observability: {
    status: phase9.observability?.status === 'passed' ? 'ready_locally' : 'not_ready',
    metric_count: phase9.observability?.healthy?.checks?.length ?? 0,
    live_alarm_delivery_verified: false,
  },
  product_review: {
    privacy_and_retention_reviewed: privacyReviewed,
    review_evidence_present: Boolean(privacyReviewId),
    test_accounts_selected: false,
    named_rollout_owners_assigned: false,
  },
  explicit_authorizations: {
    live_database_migrations: false,
    live_backfill_or_transform: false,
    real_student_shadow: false,
    limited_pilot_visibility: false,
    production_publication: false,
    general_release: false,
    generic_continue_treated_as_authorization: false,
  },
  publication_preflight: {
    command: 'npm run yayin:dogrula',
    executed: false,
    ready: cleanWorktree && remoteAhead === 0,
    reason_code: cleanWorktree ? null : 'DIRTY_WORKTREE_USER_AND_PHASE_CHANGES_PRESERVED',
  },
  blocking_gate: {
    code: 'LIVE_TARGET_AND_RECOVERY_UNVERIFIED',
    detail: 'Canlı Supabase proje kimliği ile yedek/geri kazanım kanıtı doğrulanmadı; canlı şema kuru çalışması ve bütün canlı yazılar durduruldu.',
    next_required_input: 'Doğrulanabilir canlı proje kimliği ve tarihli yedek/geri kazanım kanıtı; sonrasında canlı migration için ayrı açık onay.',
  },
  side_effects: {
    live_supabase_read: false,
    live_supabase_write: false,
    real_student_data_used: false,
    live_backfill_run: false,
    paid_model_call: false,
    live_shadow_started: false,
    live_pilot_started: false,
    deployment_performed: false,
    git_commit_created: false,
    git_push_performed: false,
  },
}

assert.equal(checkpoint.workspace.authorized_path_match, true)
assert.equal(checkpoint.workspace.git_directory_independent, true)
assert.equal(checkpoint.workspace.branch, 'main')
assert.equal(checkpoint.workspace.authorized_origin_match, true)
assert.equal(checkpoint.workspace.vercel_link_absent, true)
assert.equal(checkpoint.ready_for_live_write, false)
assert.ok(Object.values(checkpoint.side_effects).every((value) => value === false))

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, `${JSON.stringify(checkpoint, null, 2)}\n`)
console.log('Faz 10 güvenli başlangıç denetimi tamamlandı.')
console.log('Durum: Devam ediyor; canlı yazma kapalı.')
console.log(`Faz 9: ${checkpoint.phase_9_baseline.commands} komut, ${checkpoint.phase_9_baseline.gates} kapı.`)
console.log(`Migration checksum: ${migrationChecks.length}/${migrationChecks.length} doğrulandı.`)
console.log(`Somut engel: ${checkpoint.blocking_gate.detail}`)
