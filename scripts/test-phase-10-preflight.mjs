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
const CURRENT_FAILURE = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-guncel-onkosul-engeli.json')
const PHASE_9_ACCEPTANCE = join(ROOT, 'docs/ai-koc/kanitlar/faz-9/faz-9-kabul-sonucu.json')
const MANIFEST = join(ROOT, 'src/generated/learning-content-manifest.json')
const EXACT_CONTENT_DRIFT = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-icerik-baz-cizgisi-farki.json')
const CONTENT_OWNER_REVIEW = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-icerik-manuel-inceleme.json')
const LIVE_DISCOVERY = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-hedef-kesfi.json')
const LIVE_VOLUME_REHEARSAL = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-hacim-yerel-prova.json')
const LIVE_SCHEMA_CONTRACT = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-sema-sozlesmesi.json')
const COST_GUARD_DECISION = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-ucret-kisiti-karari.json')
const LIVE_BACKUP = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-mantiksal-yedek.json')
const PUBLIC_RECOVERY = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-public-geri-yukleme.json')
const REAL_ARCHIVE_REHEARSAL = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-yedek-migration-prova.json')
const LATEST_BACKUP_OBSERVATION = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-yedek-kota-yoklamasi.json')
const FRESH_ADMIN_BACKUP_OBSERVATION = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-yonetim-yedek-gozlemi-2026-10-10.json')
const STORAGE_INVENTORY = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-storage-nesne-envanteri.json')
const STORAGE_PUBLIC_BACKUP = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-storage-acik-dosya-yedegi.json')
const STORAGE_PUBLIC_ETAG = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-storage-acik-etag-yoklamasi.json')
const STORAGE_PRIVATE_BACKUP = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-storage-ozel-dosya-yedegi.json')

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
const exactContentDrift = existsSync(EXACT_CONTENT_DRIFT)
  ? JSON.parse(readFileSync(EXACT_CONTENT_DRIFT, 'utf8')) : null
const contentOwnerReview = existsSync(CONTENT_OWNER_REVIEW)
  ? JSON.parse(readFileSync(CONTENT_OWNER_REVIEW, 'utf8')) : null
const liveDiscovery = existsSync(LIVE_DISCOVERY)
  ? JSON.parse(readFileSync(LIVE_DISCOVERY, 'utf8'))
  : null
const liveVolumeRehearsal = JSON.parse(readFileSync(LIVE_VOLUME_REHEARSAL, 'utf8'))
const liveSchemaContract = JSON.parse(readFileSync(LIVE_SCHEMA_CONTRACT, 'utf8'))
const costGuardDecision = JSON.parse(readFileSync(COST_GUARD_DECISION, 'utf8'))
const liveBackup = existsSync(LIVE_BACKUP) ? JSON.parse(readFileSync(LIVE_BACKUP, 'utf8')) : null
const publicRecovery = existsSync(PUBLIC_RECOVERY)
  ? JSON.parse(readFileSync(PUBLIC_RECOVERY, 'utf8')) : null
const realArchiveRehearsal = existsSync(REAL_ARCHIVE_REHEARSAL)
  ? JSON.parse(readFileSync(REAL_ARCHIVE_REHEARSAL, 'utf8')) : null
const latestBackupObservation = existsSync(LATEST_BACKUP_OBSERVATION)
  ? JSON.parse(readFileSync(LATEST_BACKUP_OBSERVATION, 'utf8')) : null
const freshAdminBackupObservation = existsSync(FRESH_ADMIN_BACKUP_OBSERVATION)
  ? JSON.parse(readFileSync(FRESH_ADMIN_BACKUP_OBSERVATION, 'utf8')) : null
const storageInventory = existsSync(STORAGE_INVENTORY)
  ? JSON.parse(readFileSync(STORAGE_INVENTORY, 'utf8')) : null
const storagePublicBackup = existsSync(STORAGE_PUBLIC_BACKUP)
  ? JSON.parse(readFileSync(STORAGE_PUBLIC_BACKUP, 'utf8')) : null
const storagePublicEtag = existsSync(STORAGE_PUBLIC_ETAG)
  ? JSON.parse(readFileSync(STORAGE_PUBLIC_ETAG, 'utf8')) : null
const storagePrivateBackup = existsSync(STORAGE_PRIVATE_BACKUP)
  ? JSON.parse(readFileSync(STORAGE_PRIVATE_BACKUP, 'utf8')) : null
const defaultRollout = resolveLearningRollout({
  env: {},
  studentId: '99000000-0000-4000-8000-000000000001',
  sourceCode: 'daily_logs',
})
const migrationSql = readFileSync(join(ROOT, 'supabase/migration_learning_hardening.sql'), 'utf8')
const locallyConfiguredProjectRef = localProjectRef()
const discoveredProjectRef = liveDiscovery?.production_deployment?.project_ref ?? null
const actualProjectRef = locallyConfiguredProjectRef || discoveredProjectRef
const expectedProjectRef = process.env.DRKOC_PHASE10_EXPECTED_SUPABASE_PROJECT_REF?.trim()
  || discoveredProjectRef
  || null
const freshAdminObservationMatchesTarget = freshAdminBackupObservation?.status === 'observed_read_only'
  && freshAdminBackupObservation?.target?.project_ref === discoveredProjectRef
  && freshAdminBackupObservation?.target?.branch === 'main'
  && freshAdminBackupObservation?.target?.environment === 'PRODUCTION'
  && freshAdminBackupObservation?.migration_history?.dashboard_state === 'No migrations'
  && freshAdminBackupObservation?.live_catalog_check?.table_count === 13
  && freshAdminBackupObservation?.live_catalog_check?.rls_enabled_count === 13
  && freshAdminBackupObservation?.live_catalog_check?.column_count === 163
  && Number.isInteger(freshAdminBackupObservation?.live_catalog_check?.estimated_rows_nonnegative_sum)
  && Number.isInteger(freshAdminBackupObservation?.live_catalog_check?.total_relation_bytes)
  && freshAdminBackupObservation?.live_catalog_check?.student_rows_selected === false
  && freshAdminBackupObservation?.live_catalog_check?.ddl_executed === false
  && freshAdminBackupObservation?.scheduled_backup?.type === 'PHYSICAL'
  && freshAdminBackupObservation?.scheduled_backup?.storage_object_bytes_included === false
  && freshAdminBackupObservation?.scheduled_backup?.restore_executed === false
  && freshAdminBackupObservation?.side_effects?.live_write === false
const backupVerifiedAt = freshAdminObservationMatchesTarget
  ? freshAdminBackupObservation.scheduled_backup.latest_at
  : latestBackupObservation?.scheduled_backup?.latest_at || null
const backupObservedAt = freshAdminObservationMatchesTarget
  ? freshAdminBackupObservation.observed_at
  : latestBackupObservation?.observed_at || null
const recoveryTestId = process.env.DRKOC_PHASE10_RECOVERY_TEST_ID?.trim()
  || liveDiscovery?.backup_and_recovery?.recovery_test_id
  || null
const privacyReviewId = process.env.DRKOC_PHASE10_PRIVACY_REVIEW_ID?.trim() || null
const expectedContentBaseline = {
  manifest_version: 'learning-content-manifest@1',
  checksum: 'c816e78b0a6288fa66bd76281c91fa26dfe929624ee8bf29ebd10bde2005be2b',
  entries: 4485,
}

const currentContentMatches = manifest.manifest_version === expectedContentBaseline.manifest_version
  && manifest.manifest_checksum === expectedContentBaseline.checksum
  && manifest.entries?.length === expectedContentBaseline.entries
const verifiedExactDrift = exactContentDrift?.status === 'verified_delta_technical_rebaseline_owner_review_pending'
  && exactContentDrift?.historical_baseline?.checksum === '4f4c38f0beb4d8ea2df5e1ed16a682118ea3aad0a1e8ba53408e740fdf21b3e6'
  && exactContentDrift?.current?.checksum === manifest.manifest_checksum
  && exactContentDrift?.delta?.exact_entry_comparison?.added === 73
  && exactContentDrift?.delta?.exact_entry_comparison?.modified === 3
const ownerReviewAccepted = contentOwnerReview?.status === 'accepted'
  && contentOwnerReview?.manifest_version === expectedContentBaseline.manifest_version
  && contentOwnerReview?.manifest_checksum === expectedContentBaseline.checksum
  && contentOwnerReview?.manifest_entries === expectedContentBaseline.entries
  && typeof contentOwnerReview?.owner_review_completed_at === 'string'
  && Number.isFinite(Date.parse(contentOwnerReview.owner_review_completed_at))
  && typeof contentOwnerReview?.owner_review_evidence === 'string'
  && contentOwnerReview.owner_review_evidence.length > 0
if (!currentContentMatches || phase9.status !== 'passed' || !ownerReviewAccepted) {
  const contentBlocked = !currentContentMatches
  const failure = {
    schema_version: 'phase-10-current-preflight-blocker@1',
    phase: 10,
    status: 'failed_current_preflight',
    phase_status: 'Devam ediyor',
    generated_at: new Date().toISOString(),
    previous_checkpoint_is_historical: true,
    ready_for_live_write: false,
    content_baseline: {
      expected: expectedContentBaseline,
      current: {
        manifest_version: manifest.manifest_version,
        checksum: manifest.manifest_checksum,
        entries: manifest.entries?.length ?? null,
      },
      matches: currentContentMatches,
      exact_comparison: verifiedExactDrift
        ? exactContentDrift.delta.exact_entry_comparison : null,
      owner_review_accepted: ownerReviewAccepted,
    },
    phase_9_current_acceptance: {
      status: phase9.status,
      command_totals: phase9.command_totals,
    },
    accelerated_rollout_decision: {
      requested_at: '2026-10-11',
      target: 'all_students_after_staged_evidence',
      fixed_2_plus_3_plus_7_day_schedule_superseded: true,
      real_pilot_and_safety_evidence_still_required: true,
    },
    blocking_gate: contentBlocked ? {
      code: 'CONTENT_BASELINE_RECONCILIATION_REQUIRED',
      detail: verifiedExactDrift
        ? 'Tarihsel manifest karşılaştırmasında 73 yeni ders ve 3 değişmiş LGS Tarih dersi var; Faz 4 ve sonraki kabul zinciri geçmeden canlı adıma başlanmaz.'
        : 'Güncel içerik manifesti tarihsel Faz 3 baz çizgisinden farklı; Faz 4 ve sonraki kabul zinciri geçmeden canlı adıma başlanmaz.',
    } : phase9.status !== 'passed' ? {
      code: 'PHASE_9_CURRENT_ACCEPTANCE_FAILED',
      detail: 'Güncel Faz 9 kabul kaydı geçmedi; canlı adıma başlanmaz.',
    } : {
      code: 'CONTENT_OWNER_REVIEW_PENDING',
      detail: 'Teknik içerik baz çizgisi geçse de ürün sahibinin manuel ders incelemesi henüz kayıtlı değil; canlı adıma başlanmaz.',
    },
    side_effects: {
      live_supabase_write: false,
      live_backfill_run: false,
      paid_model_call: false,
      live_shadow_started: false,
      live_pilot_started: false,
      deployment_performed: false,
      git_push_performed: false,
    },
  }
  mkdirSync(dirname(CURRENT_FAILURE), { recursive: true })
  writeFileSync(CURRENT_FAILURE, `${JSON.stringify(failure, null, 2)}\n`)
  console.error(`Faz 10 ön koşulu durdu: ${failure.blocking_gate.detail}`)
  process.exit(1)
}

function observedWithin(value, maxAgeMs) {
  const time = Date.parse(value ?? '')
  const age = Date.now() - time
  return Number.isFinite(age) && age >= 0 && age <= maxAgeMs
}

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
assert.equal(manifest.manifest_version, expectedContentBaseline.manifest_version)
assert.equal(manifest.manifest_checksum, expectedContentBaseline.checksum)
assert.equal(manifest.entries?.length, expectedContentBaseline.entries)
assert.equal(liveVolumeRehearsal.status, 'passed_synthetic_live_shape_rehearsal')
assert.equal(liveVolumeRehearsal.fixture?.total_live_shaped_rows, 758)
assert.equal(liveVolumeRehearsal.migration_rehearsal?.rows_preserved, true)
assert.equal(liveVolumeRehearsal.migration_rehearsal?.idempotent_second_apply, true)
assert.equal(liveVolumeRehearsal.migration_rehearsal?.engine?.real_postgresql_server, true)
assert.equal(liveVolumeRehearsal.secondary_pglite_rehearsal?.rows_preserved, true)
assert.equal(liveVolumeRehearsal.lock_contention_rehearsal?.expected_error_code, '55P03')
assert.equal(liveVolumeRehearsal.lock_contention_rehearsal?.transaction_rolled_back, true)
assert.equal(liveVolumeRehearsal.lock_contention_rehearsal?.retry_after_lock_release, 'passed')
assert.equal(liveVolumeRehearsal.side_effects?.paid_service_used, false)
assert.equal(liveVolumeRehearsal.side_effects?.live_write, false)
assert.equal(liveSchemaContract.status, 'passed_read_only_live_schema_contract')
assert.equal(liveSchemaContract.totals?.tables, 13)
assert.equal(liveSchemaContract.totals?.columns, 163)
assert.equal(liveSchemaContract.totals?.policies, 57)
assert.equal(liveSchemaContract.totals?.triggers, 5)
assert.equal(liveSchemaContract.totals?.total_bytes, 3858432)
assert.equal(liveSchemaContract.privacy?.table_rows_selected, false)
assert.equal(liveSchemaContract.side_effects?.live_write, false)
if (latestBackupObservation) {
  assert.equal(latestBackupObservation.scheduled_backup?.type, 'PHYSICAL')
  assert.equal(latestBackupObservation.scheduled_backup?.storage_object_bytes_included, false)
  assert.equal(latestBackupObservation.scheduled_backup?.restore_executed, false)
  assert.ok(latestBackupObservation.scheduled_backup?.dashboard_path.includes(discoveredProjectRef))
  assert.equal(latestBackupObservation.live_write, false)
}
assert.equal(costGuardDecision.status, 'passed_no_paid_recovery_action_blocked')
assert.equal(costGuardDecision.user_constraint?.paid_operations_authorized, false)
assert.equal(costGuardDecision.conclusion?.recovery_copy_gate_completed, false)
assert.equal(costGuardDecision.side_effects?.paid_service_used, false)
assert.equal(costGuardDecision.side_effects?.restore_executed, false)
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

const targetVerified = Boolean(
  actualProjectRef
  && expectedProjectRef
  && actualProjectRef === expectedProjectRef
  && liveDiscovery?.conclusion?.live_target_identity_verified === true,
)
const dashboardAccess = freshAdminObservationMatchesTarget ? 'granted'
  : liveDiscovery?.conclusion?.dashboard_access ?? 'not_checked'
const dashboardAccessObservedAt = freshAdminObservationMatchesTarget
  ? freshAdminBackupObservation.observed_at
  : liveDiscovery?.conclusion?.dashboard_access_observed_at ?? null
const administrativeAccessVerified = dashboardAccess === 'granted'
  && observedWithin(dashboardAccessObservedAt, 24 * 60 * 60 * 1000)
const backupObservationFresh = observedWithin(backupObservedAt, 48 * 60 * 60 * 1000)
const backupSnapshotFresh = observedWithin(backupVerifiedAt, 48 * 60 * 60 * 1000)
const recoveryVerified = Boolean(backupObservationFresh && backupSnapshotFresh
  && recoveryTestId && liveDiscovery?.backup_and_recovery?.recovery_drill_completed === true)
const scopedRecoveryVerified = Boolean(liveBackup?.live_backup_created
  && publicRecovery?.status === 'passed_public_data_restore_only'
  && publicRecovery?.source_archive_sha256 === liveBackup.archive?.sha256
  && publicRecovery?.public_tables === 31 && publicRecovery?.public_rows === 2077
  && publicRecovery?.all_public_copy_blocks_matched
  && publicRecovery?.auth_schema_restore?.status === 'restored_locally'
  && publicRecovery.auth_schema_restore.tables === 27
  && publicRecovery.auth_schema_restore.rows === 472
  && publicRecovery.auth_schema_restore.data_and_rls_verified
  && publicRecovery.auth_schema_restore.deferred_app_trigger_verified
  && realArchiveRehearsal?.status === 'passed_on_public_storage_clone'
  && realArchiveRehearsal?.storage_restore?.status === 'restored_locally'
  && realArchiveRehearsal?.storage_restore?.data_and_rls_verified
  && realArchiveRehearsal?.storage_restore?.tables === 8
  && realArchiveRehearsal?.storage_restore?.rows === 235
  && realArchiveRehearsal?.additional_schema_restores?.realtime?.status === 'restored_locally'
  && realArchiveRehearsal.additional_schema_restores.realtime.tables === 10
  && realArchiveRehearsal.additional_schema_restores.realtime.rows === 88
  && realArchiveRehearsal.additional_schema_restores.realtime.data_and_rls_verified
  && realArchiveRehearsal?.migration_results?.length === 7
  && realArchiveRehearsal.migration_results.every((item) => item.status === 'passed_local'
    && item.source_rows_preserved)
  && realArchiveRehearsal?.rls_rehearsal?.status === 'passed_local'
  && realArchiveRehearsal?.lock_contention_rehearsal?.status === 'passed_local'
  && realArchiveRehearsal.lock_contention_rehearsal.retry_after_lock_release === 'passed_local'
  && realArchiveRehearsal?.live_write === false)
const storageObjectBytesBackedUp = Boolean(
  storageInventory?.status === 'passed_archive_metadata_inventory_only'
  && storageInventory.source_archive_sha256 === liveBackup?.archive?.sha256
  && storageInventory.objects === 159
  && storageInventory.total_metadata_size_bytes === 244168205
  && storagePublicBackup?.status === 'passed_public_object_bytes_verified'
  && storagePublicBackup.source_archive_sha256 === liveBackup?.archive?.sha256
  && storagePublicBackup.public_object_count === 153
  && storagePublicBackup.public_object_bytes === 233213225
  && storagePublicBackup.source_etag_md5_matches === 151
  && storagePublicBackup.source_etag_md5_mismatches === 0
  && storagePublicEtag?.status === 'passed_public_object_head'
  && storagePublicEtag.source_archive_sha256 === liveBackup?.archive?.sha256
  && storagePublicEtag.source_etag_head_matches === 2
  && storagePublicEtag.source_etag_head_mismatches === 0
  && storagePrivateBackup?.status === 'passed_private_object_bytes_verified'
  && storagePrivateBackup.source_archive_sha256 === liveBackup?.archive?.sha256
  && storagePrivateBackup.private_object_count === 6
  && storagePrivateBackup.private_object_bytes === 10954980
  && storagePrivateBackup.source_etag_md5_matches === 6
  && storagePrivateBackup.source_etag_md5_mismatches === 0
  && storagePublicBackup.live_write === false
  && storagePrivateBackup.live_write === false)
const privacyReviewed = Boolean(privacyReviewId)
const cleanWorktree = statusRows.length === 0
const blockingGate = !administrativeAccessVerified
  ? {
      code: 'FRESH_ADMIN_AND_BACKUP_VERIFICATION_PENDING',
      detail: 'Doğru canlı proje ve temel şema bugün salt okunur doğrulandı. Son yönetim/yedek gözlemi eski; bugünkü yönetim erişimi, güncel yedek ve tam geri kazanım kanıtlanmadı. Canlı migration ve bütün yazılar durduruldu.',
      next_required_input: 'Güncel yönetim/yedek gözlemi ve ücretsiz tam geri kazanım kanıtı; pilot yalnız ürün sahibinin kimliği belirlenmiş test hesaplarıyla sınırlı.',
    }
  : scopedRecoveryVerified && storageObjectBytesBackedUp ? {
      code: 'FULL_PLATFORM_RECOVERY_AND_PRODUCT_REVIEW_PENDING',
      detail: 'Gerçek yedekten uygulama, kimlik doğrulama, depolama ve Realtime tabloları geri alındı; 159 Storage dosyasının baytları özel yerel yedekte doğrulandı. Yedi migration yerel kopyada geçti. Vault/eklenti altyapısı ve tam Supabase restore tatbikatı kanıtlanmadı. Ürün sahibi gizlilik incelemesi, belirlenmiş test hesapları ve canlı alarm teslimi de bekliyor; canlı yazma kapalı.',
      next_required_input: 'Kalan platform kurtarma yolu ile ürün sahibi gizlilik/test hesabı incelemesi kaydı.',
    } : scopedRecoveryVerified ? {
      code: 'FULL_PLATFORM_RECOVERY_AND_PRODUCT_REVIEW_PENDING',
      detail: 'Gerçek yedekten uygulama, kimlik doğrulama, depolama ve Realtime veritabanı tabloları geri alındı; yedi migration yerel kopyada ve iki hesaplı RLS sınamasında geçti. Vault/eklenti altyapısı ile Storage dosyalarının baytları geri yüklenmedi. Ürün sahibi gizlilik incelemesi, seçilmiş test hesapları ve canlı alarm teslimi de bekliyor; canlı yazma kapalı.',
      next_required_input: 'Kalan Supabase bileşenleri ve Storage dosyaları için ücretsiz kurtarma yolu ile ürün sahibi gizlilik/test hesabı incelemesi kaydı.',
    } : {
      code: 'RECOVERY_DRILL_PENDING',
      detail: 'Doğru canlı proje erişimi, tarihli fiziksel yedek, ücretsiz 758 kayıtlık tam zincir ve yerel PostgreSQL kilit/rollback provası doğrulandı; ancak yedeğin ayrı geri kazanılabilir kopyaya başarıyla döndürüldüğünü kanıtlayan tatbikat kimliği yok. Canlı migration ve bütün yazılar durduruldu.',
      next_required_input: 'Ücret gerektirmeyen izole bir geri kazanım hedefi veya ileride ücretli kaynak kısıtının açıkça kaldırılması. Mevcut ücret yok kararı altında bu kapı ertelenmiştir.',
    }

const checkpoint = {
  schema_version: 'phase-10-preflight@1',
  phase: 10,
  status: administrativeAccessVerified
    ? (scopedRecoveryVerified ? 'waiting_for_full_recovery_and_product_review' : 'waiting_for_recovery_drill')
    : 'waiting_for_fresh_administrative_and_backup_verification',
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
    transition: 'verified_phase_3_content_baseline_update',
    superseded_manifest_checksum: '6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc',
    manifest_version: manifest.manifest_version,
    manifest_checksum: manifest.manifest_checksum,
    entries: manifest.entries.length,
  },
  migration_plan: {
    status: 'candidate_order_verified_locally_live_history_reconciliation_pending',
    prerequisite_not_blindly_reapplied: 'supabase/migration_ai_coach.sql',
    prerequisite_note: 'Canlı migration geçmişinde profiles, kaynak tabloları ve ai_study_tasks doğrulanmadan sıra uygulanmaz.',
    ordered_new_migrations: migrationChecks,
    live_schema_dry_run: scopedRecoveryVerified
      ? 'passed_on_restored_public_and_storage_subset_live_target_fresh_check_pending'
      : 'not_run_live_target_unverified',
    destructive_rollback: false,
    recovery_strategy: 'flags_off_then_forward_fix_preserve_queues_cursors_and_last_verified_generation',
  },
  live_target: {
    verified: targetVerified,
    configured_project_identity_present: Boolean(actualProjectRef),
    expected_project_identity_declared: Boolean(expectedProjectRef),
    production_bundle_and_repository_match: liveDiscovery?.production_deployment?.repository_and_deployment_match === true,
    public_schema_reachable: liveDiscovery?.live_service?.reachable === true,
    representative_phase_tables_missing: liveDiscovery?.conclusion?.representative_phase_tables_missing ?? [],
    dashboard_access: dashboardAccess,
    administrative_access_verified: administrativeAccessVerified,
    administrative_access_observed_at: dashboardAccessObservedAt,
    last_administrative_observation_at: backupObservedAt,
    administrative_observation_fresh: observedWithin(backupObservedAt, 24 * 60 * 60 * 1000),
    identifiers_redacted: true,
    live_connection_attempted: Boolean(liveDiscovery),
    live_connection_scope: liveDiscovery ? 'public_metadata_only_limit_0_no_student_rows' : 'none',
    discovery_evidence: liveDiscovery ? relative(ROOT, LIVE_DISCOVERY) : null,
  },
  backup_and_recovery: {
    verified: recoveryVerified,
    affected_application_and_storage_data_locally_restored: scopedRecoveryVerified,
    auth_tables_and_data_locally_restored: scopedRecoveryVerified,
    realtime_tables_and_data_locally_restored: scopedRecoveryVerified,
    storage_object_bytes_locally_backed_up: storageObjectBytesBackedUp,
    storage_object_count: storageObjectBytesBackedUp ? 159 : 0,
    storage_object_bytes: storageObjectBytesBackedUp ? 244168205 : 0,
    source_archive_created_at: liveBackup?.generated_at ?? null,
    storage_public_locally_reverified_at: storageObjectBytesBackedUp
      ? storagePublicBackup.generated_at : null,
    storage_private_locally_reverified_at: storageObjectBytesBackedUp
      ? storagePrivateBackup.generated_at : null,
    storage_public_evidence: storageObjectBytesBackedUp ? relative(ROOT, STORAGE_PUBLIC_BACKUP) : null,
    storage_private_evidence: storageObjectBytesBackedUp ? relative(ROOT, STORAGE_PRIVATE_BACKUP) : null,
    local_archive_evidence: scopedRecoveryVerified ? relative(ROOT, PUBLIC_RECOVERY) : null,
    local_migration_evidence: scopedRecoveryVerified ? relative(ROOT, REAL_ARCHIVE_REHEARSAL) : null,
    full_supabase_restore_verified: false,
    backup_timestamp_evidence_present: Boolean(backupVerifiedAt),
    backup_observed_at: backupObservedAt,
    backup_observation_fresh: backupObservationFresh,
    backup_snapshot_fresh: backupSnapshotFresh,
    latest_scheduled_backup_at: backupVerifiedAt,
    fresh_dashboard_observation_evidence: freshAdminObservationMatchesTarget
      ? relative(ROOT, FRESH_ADMIN_BACKUP_OBSERVATION) : null,
    restore_capability: liveDiscovery?.backup_and_recovery?.restore_capability ?? 'unverified',
    recovery_test_evidence_present: Boolean(recoveryTestId),
    restore_attempted: scopedRecoveryVerified,
    restore_attempt_scope: scopedRecoveryVerified ? 'local_public_auth_storage_and_realtime_only' : 'none',
  },
  no_cost_live_shape_rehearsal: {
    status: liveVolumeRehearsal.status,
    evidence: relative(ROOT, LIVE_VOLUME_REHEARSAL),
    synthetic_rows: liveVolumeRehearsal.fixture.total_live_shaped_rows,
    rows_preserved: liveVolumeRehearsal.migration_rehearsal.rows_preserved,
    idempotent_second_apply: liveVolumeRehearsal.migration_rehearsal.idempotent_second_apply,
    primary_engine: liveVolumeRehearsal.migration_rehearsal.engine,
    secondary_engine: liveVolumeRehearsal.secondary_pglite_rehearsal.engine,
    lock_contention_rehearsal: liveVolumeRehearsal.lock_contention_rehearsal,
    live_missing_phase_4_columns_covered: liveVolumeRehearsal.migration_rehearsal.phase_4_live_missing_columns_covered,
    paid_service_used: liveVolumeRehearsal.side_effects.paid_service_used,
    live_write: liveVolumeRehearsal.side_effects.live_write,
  },
  live_schema_contract: {
    status: liveSchemaContract.status,
    evidence: relative(ROOT, LIVE_SCHEMA_CONTRACT),
    checksum: liveSchemaContract.contract_checksum,
    observed_at: liveSchemaContract.generated_at,
    current_live_schema_not_rechecked_by_local_contract_test: true,
    totals: liveSchemaContract.totals,
    current_live_catalog_estimated_rows: freshAdminObservationMatchesTarget
      ? freshAdminBackupObservation.live_catalog_check.estimated_rows_nonnegative_sum : null,
    current_live_catalog_total_bytes: freshAdminObservationMatchesTarget
      ? freshAdminBackupObservation.live_catalog_check.total_relation_bytes : null,
    current_live_volume_differs_from_historical_fixture: freshAdminObservationMatchesTarget
      ? freshAdminBackupObservation.live_catalog_check.estimated_rows_nonnegative_sum !== liveVolumeRehearsal.fixture.total_live_shaped_rows
      : null,
    table_rows_selected: liveSchemaContract.privacy.table_rows_selected,
    live_write: liveSchemaContract.side_effects.live_write,
  },
  cost_guard: {
    status: costGuardDecision.status,
    evidence: relative(ROOT, COST_GUARD_DECISION),
    paid_operations_authorized: costGuardDecision.user_constraint.paid_operations_authorized,
    reason_code: costGuardDecision.decision.reason_code,
    recovery_copy_gate_completed: costGuardDecision.conclusion.recovery_copy_gate_completed,
    paid_service_used: costGuardDecision.side_effects.paid_service_used,
    restore_executed: costGuardDecision.side_effects.restore_executed,
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
    pilot_scope: 'owner_test_accounts_only_exact_account_ids_pending',
    named_rollout_owners_assigned: false,
  },
  explicit_authorizations: {
    status: 'granted_by_user_for_all_phase_10_steps_subject_to_safety_gates',
    recorded_at: '2026-09-23',
    evidence: 'Kullanıcı bütün gerekli adımların uygulanmasını ve adımlar oluşturulurken ek onay beklenmemesini açıkça istedi.',
    live_database_migrations: true,
    live_backfill_or_transform: true,
    real_student_shadow: true,
    limited_pilot_visibility: true,
    production_publication: true,
    general_release: true,
    generic_continue_treated_as_authorization: false,
  },
  user_constraints: {
    recorded_at: '2026-10-11',
    paid_resources_authorized: false,
    accelerated_general_release_requested: true,
    fixed_calendar_pilot_superseded: true,
    real_pilot_and_safety_evidence_required: true,
    skipped_steps_are_not_treated_as_passed: true,
    effect: 'fixed pilot calendar shortened to evidence-based rollout; paid recovery copy, live write and release remain gated',
  },
  publication_preflight: {
    command: 'npm run yayin:dogrula',
    executed: false,
    ready: cleanWorktree && remoteAhead === 0,
    reason_code: cleanWorktree ? null : 'DIRTY_WORKTREE_USER_AND_PHASE_CHANGES_PRESERVED',
  },
  blocking_gate: blockingGate,
  side_effects: {
    live_supabase_read: liveDiscovery?.side_effects?.live_public_metadata_read === true,
    live_supabase_read_scope: liveDiscovery ? 'public_metadata_only_limit_0_no_student_rows' : 'none',
    live_supabase_write: false,
    real_student_data_used: false,
    real_student_data_used_by_separate_local_recovery: scopedRecoveryVerified,
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
assert.equal(checkpoint.side_effects.live_supabase_write, false)
assert.equal(checkpoint.side_effects.real_student_data_used, false)
assert.equal(checkpoint.side_effects.live_backfill_run, false)
assert.equal(checkpoint.side_effects.paid_model_call, false)
assert.equal(checkpoint.side_effects.live_shadow_started, false)
assert.equal(checkpoint.side_effects.live_pilot_started, false)
assert.equal(checkpoint.side_effects.deployment_performed, false)
assert.equal(checkpoint.side_effects.git_commit_created, false)
assert.equal(checkpoint.side_effects.git_push_performed, false)

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, `${JSON.stringify(checkpoint, null, 2)}\n`)
console.log('Faz 10 güvenli başlangıç denetimi tamamlandı.')
console.log('Durum: Devam ediyor; canlı yazma kapalı.')
console.log(`Faz 9: ${checkpoint.phase_9_baseline.commands} komut, ${checkpoint.phase_9_baseline.gates} kapı.`)
console.log(`Migration checksum: ${migrationChecks.length}/${migrationChecks.length} doğrulandı.`)
console.log(`Somut engel: ${checkpoint.blocking_gate.detail}`)
