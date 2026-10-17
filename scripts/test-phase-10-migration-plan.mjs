/** Faz 10 migration operasyon planı — yalnız yerel/statik analiz. */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const ROOT = process.cwd()
const OUT = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-migration-operasyon-plani.json')
const PHASE9 = JSON.parse(readFileSync(join(ROOT, 'docs/ai-koc/kanitlar/faz-9/faz-9-kabul-sonucu.json'), 'utf8'))
const LIVE_DISCOVERY = JSON.parse(readFileSync(
  join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-hedef-kesfi.json'),
  'utf8',
))
const LIVE_SCHEMA_COMPAT = JSON.parse(readFileSync(
  join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-sema-uyumluluk.json'),
  'utf8',
))
const LIVE_VOLUME_REHEARSAL = JSON.parse(readFileSync(
  join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-hacim-yerel-prova.json'),
  'utf8',
))
const LIVE_SCHEMA_CONTRACT = JSON.parse(readFileSync(
  join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-sema-sozlesmesi.json'),
  'utf8',
))
const COST_GUARD_DECISION = JSON.parse(readFileSync(
  join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-ucret-kisiti-karari.json'),
  'utf8',
))
const COACH_DATABASE_GATE = JSON.parse(readFileSync(
  join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-koc-veritabani-kapisi.json'),
  'utf8',
))
const REAL_ARCHIVE_REHEARSAL_PATH = join(ROOT,
  'docs/ai-koc/kanitlar/faz-10/faz-10-canli-yedek-migration-prova.json')
const REAL_ARCHIVE_REHEARSAL = existsSync(REAL_ARCHIVE_REHEARSAL_PATH)
  ? JSON.parse(readFileSync(REAL_ARCHIVE_REHEARSAL_PATH, 'utf8')) : null
const STORAGE_PUBLIC_PATH = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-storage-acik-dosya-yedegi.json')
const STORAGE_PRIVATE_PATH = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-storage-ozel-dosya-yedegi.json')
const STORAGE_PUBLIC = existsSync(STORAGE_PUBLIC_PATH)
  ? JSON.parse(readFileSync(STORAGE_PUBLIC_PATH, 'utf8')) : null
const STORAGE_PRIVATE = existsSync(STORAGE_PRIVATE_PATH)
  ? JSON.parse(readFileSync(STORAGE_PRIVATE_PATH, 'utf8')) : null
const FRESH_ADMIN_BACKUP_PATH = join(ROOT,
  'docs/ai-koc/kanitlar/faz-10/faz-10-yonetim-yedek-gozlemi-2026-10-10.json')
const FRESH_ADMIN_BACKUP = existsSync(FRESH_ADMIN_BACKUP_PATH)
  ? JSON.parse(readFileSync(FRESH_ADMIN_BACKUP_PATH, 'utf8')) : null

const DEFINITIONS = Object.freeze([
  { phase: 2, file: 'supabase/migration_learning_evidence_network.sql', transaction: 'file_begin_commit' },
  { phase: 3, file: 'supabase/migration_learning_content_activity.sql', transaction: 'runner_must_wrap_single_transaction' },
  { phase: 4, file: 'supabase/migration_learning_academic_records.sql', transaction: 'file_begin_commit' },
  { phase: 5, file: 'supabase/migration_learning_language_progress.sql', transaction: 'file_begin_commit' },
  { phase: 6, file: 'supabase/migration_learning_student_topic_model.sql', transaction: 'file_begin_commit' },
  { phase: 8, file: 'supabase/migration_learning_coaching_loop.sql', transaction: 'file_begin_commit' },
  { phase: 9, file: 'supabase/migration_learning_hardening.sql', transaction: 'file_begin_commit' },
  { phase: 10, file: 'supabase/migration_learning_coach_pilot_gate.sql', transaction: 'file_begin_commit' },
])

const count = (sql, pattern) => [...sql.matchAll(pattern)].length
const sha256 = (value) => createHash('sha256').update(value).digest('hex')

const migrations = DEFINITIONS.map((definition) => {
  const sql = readFileSync(join(ROOT, definition.file), 'utf8')
  const destructiveDdl = count(sql, /^\s*(?:drop\s+(?:table|schema)\b|truncate\b|alter\s+table\b[^;]*\bdrop\s+column\b)/gim)
  const beginCount = count(sql, /^\s*begin\s*;/gim)
  const commitCount = count(sql, /^\s*commit\s*;/gim)
  const expectedTransaction = definition.transaction === 'file_begin_commit'
    ? beginCount === 1 && commitCount === 1
    : beginCount === 0 && commitCount === 0
  assert.equal(destructiveDdl, 0, `${definition.file}: yıkıcı DDL bulundu`)
  assert.equal(expectedTransaction, true, `${definition.file}: transaction sözleşmesi değişti`)
  return {
    ...definition,
    sha256: sha256(sql),
    lines: sql.split('\n').length,
    bytes: Buffer.byteLength(sql),
    statement_inventory: {
      create_tables: count(sql, /^\s*create\s+table\b/gim),
      alter_tables: count(sql, /^\s*alter\s+table\b/gim),
      create_indexes: count(sql, /^\s*create\s+(?:unique\s+)?index\b/gim),
      nonconcurrent_indexes: count(sql, /^\s*create\s+(?:unique\s+)?index(?!\s+concurrently)\b/gim),
      create_or_replace_functions: count(sql, /^\s*create\s+or\s+replace\s+function\b/gim),
      drop_policies_or_triggers: count(sql, /^\s*drop\s+(?:policy|trigger)\b/gim),
      destructive_ddl: destructiveDdl,
      delete_statements_in_function_definitions: count(sql, /^\s*delete\s+from\b/gim),
    },
  }
})

const totals = migrations.reduce((result, migration) => {
  for (const [key, value] of Object.entries(migration.statement_inventory)) result[key] += value
  return result
}, {
  create_tables: 0,
  alter_tables: 0,
  create_indexes: 0,
  nonconcurrent_indexes: 0,
  create_or_replace_functions: 0,
  drop_policies_or_triggers: 0,
  destructive_ddl: 0,
  delete_statements_in_function_definitions: 0,
})

assert.equal(totals.destructive_ddl, 0)
assert.equal(totals.create_indexes, 67)
assert.equal(totals.nonconcurrent_indexes, 67)
assert.equal(totals.delete_statements_in_function_definitions, 5)
assert.equal(COACH_DATABASE_GATE.status, 'passed')
assert.equal(COACH_DATABASE_GATE.migration_sha256,
  migrations.find((migration) => migration.phase === 10)?.sha256)
assert.equal(PHASE9.postgres?.real_server, true)
assert.equal(PHASE9.postgres?.actual_rls, true)
assert.equal(PHASE9.postgres?.migration_applied_twice, true)
assert.ok(PHASE9.postgres?.simultaneous_connections >= 5)
assert.equal(LIVE_DISCOVERY.conclusion?.live_target_identity_verified, true)
assert.equal(LIVE_DISCOVERY.live_service?.reachable, true)
assert.equal(LIVE_DISCOVERY.privacy?.student_rows_read, false)
assert.deepEqual(LIVE_DISCOVERY.conclusion?.representative_phase_tables_missing, [2, 3, 4, 5, 6, 8])
assert.equal(LIVE_SCHEMA_COMPAT.status, 'passed_read_only_live_schema_compatibility')
assert.equal(LIVE_SCHEMA_COMPAT.prerequisite_tables?.required, 13)
assert.equal(LIVE_SCHEMA_COMPAT.prerequisite_tables?.compatible, 13)
assert.equal(LIVE_SCHEMA_COMPAT.prerequisite_tables?.rls_enabled, 13)
assert.equal(LIVE_SCHEMA_COMPAT.phase_4_column_impact?.target_columns, 28)
assert.equal(LIVE_SCHEMA_COMPAT.phase_4_column_impact?.to_add, 16)
assert.equal(LIVE_SCHEMA_COMPAT.privacy?.student_rows_selected, false)
assert.equal(LIVE_SCHEMA_COMPAT.side_effects?.live_write, false)
assert.equal(LIVE_SCHEMA_CONTRACT.status, 'passed_read_only_live_schema_contract')
assert.equal(LIVE_SCHEMA_CONTRACT.totals?.tables, 13)
assert.equal(LIVE_SCHEMA_CONTRACT.totals?.columns, 163)
assert.equal(LIVE_SCHEMA_CONTRACT.totals?.constraints, 64)
assert.equal(LIVE_SCHEMA_CONTRACT.totals?.indexes, 24)
assert.equal(LIVE_SCHEMA_CONTRACT.totals?.policies, 57)
assert.equal(LIVE_SCHEMA_CONTRACT.totals?.triggers, 5)
assert.equal(LIVE_SCHEMA_CONTRACT.totals?.total_bytes, 3858432)
assert.equal(LIVE_SCHEMA_CONTRACT.privacy?.table_rows_selected, false)
assert.equal(LIVE_SCHEMA_CONTRACT.side_effects?.live_write, false)
assert.equal(LIVE_VOLUME_REHEARSAL.status, 'passed_synthetic_live_shape_rehearsal')
assert.equal(LIVE_VOLUME_REHEARSAL.fixture?.total_live_shaped_rows, 758)
assert.equal(LIVE_VOLUME_REHEARSAL.migration_rehearsal?.rows_preserved, true)
assert.equal(LIVE_VOLUME_REHEARSAL.migration_rehearsal?.idempotent_second_apply, true)
assert.equal(LIVE_VOLUME_REHEARSAL.migration_rehearsal?.engine?.real_postgresql_server, true)
assert.equal(LIVE_VOLUME_REHEARSAL.secondary_pglite_rehearsal?.engine?.real_postgresql_server, false)
assert.equal(LIVE_VOLUME_REHEARSAL.secondary_pglite_rehearsal?.rows_preserved, true)
assert.equal(LIVE_VOLUME_REHEARSAL.lock_contention_rehearsal?.simultaneous_connections, 3)
assert.equal(LIVE_VOLUME_REHEARSAL.lock_contention_rehearsal?.expected_error_code, '55P03')
assert.equal(LIVE_VOLUME_REHEARSAL.lock_contention_rehearsal?.transaction_rolled_back, true)
assert.equal(LIVE_VOLUME_REHEARSAL.lock_contention_rehearsal?.partial_phase_4_registry_rows_after_failure, 0)
assert.equal(LIVE_VOLUME_REHEARSAL.lock_contention_rehearsal?.retry_after_lock_release, 'passed')
assert.equal(LIVE_VOLUME_REHEARSAL.migration_rehearsal?.phase_4_live_missing_columns_covered, 16)
assert.equal(LIVE_VOLUME_REHEARSAL.migration_rehearsal?.phase_4_live_existing_columns_modeled, 12)
assert.equal(LIVE_VOLUME_REHEARSAL.migration_rehearsal?.phase_4_live_target_columns_after_apply, 28)
assert.deepEqual(LIVE_VOLUME_REHEARSAL.migration_rehearsal?.ordered_phases, [2, 3, 4, 5, 6, 8, 9])
assert.equal(LIVE_VOLUME_REHEARSAL.migration_rehearsal?.live_prerequisite_ai_study_tasks_columns_modeled, 11)
assert.equal(LIVE_VOLUME_REHEARSAL.side_effects?.paid_service_used, false)
assert.equal(LIVE_VOLUME_REHEARSAL.side_effects?.live_write, false)
assert.equal(COST_GUARD_DECISION.status, 'passed_no_paid_recovery_action_blocked')
assert.equal(COST_GUARD_DECISION.user_constraint?.paid_operations_authorized, false)
assert.equal(COST_GUARD_DECISION.conclusion?.recovery_copy_gate_completed, false)
assert.equal(COST_GUARD_DECISION.side_effects?.paid_service_used, false)

const freshAdminObservationMatchesTarget = FRESH_ADMIN_BACKUP?.status === 'observed_read_only'
  && FRESH_ADMIN_BACKUP?.target?.project_ref === LIVE_DISCOVERY.production_deployment?.project_ref
  && FRESH_ADMIN_BACKUP?.target?.branch === 'main'
  && FRESH_ADMIN_BACKUP?.target?.environment === 'PRODUCTION'
  && FRESH_ADMIN_BACKUP?.migration_history?.dashboard_state === 'No migrations'
  && FRESH_ADMIN_BACKUP?.live_catalog_check?.table_count === 13
  && FRESH_ADMIN_BACKUP?.live_catalog_check?.rls_enabled_count === 13
  && FRESH_ADMIN_BACKUP?.live_catalog_check?.column_count === 163
  && Number.isInteger(FRESH_ADMIN_BACKUP?.live_catalog_check?.estimated_rows_nonnegative_sum)
  && Number.isInteger(FRESH_ADMIN_BACKUP?.live_catalog_check?.total_relation_bytes)
  && FRESH_ADMIN_BACKUP?.live_catalog_check?.student_rows_selected === false
  && FRESH_ADMIN_BACKUP?.live_catalog_check?.ddl_executed === false
  && FRESH_ADMIN_BACKUP?.scheduled_backup?.type === 'PHYSICAL'
  && FRESH_ADMIN_BACKUP?.scheduled_backup?.storage_object_bytes_included === false
  && FRESH_ADMIN_BACKUP?.scheduled_backup?.restore_executed === false
  && FRESH_ADMIN_BACKUP?.side_effects?.live_write === false
const dashboardAccess = freshAdminObservationMatchesTarget ? 'granted'
  : LIVE_DISCOVERY.conclusion?.dashboard_access
const dashboardAccessObservedAt = freshAdminObservationMatchesTarget
  ? FRESH_ADMIN_BACKUP.observed_at
  : LIVE_DISCOVERY.conclusion?.dashboard_access_observed_at ?? null
const latestScheduledBackupAt = freshAdminObservationMatchesTarget
  ? FRESH_ADMIN_BACKUP.scheduled_backup.latest_at
  : LIVE_DISCOVERY.backup_and_recovery?.latest_scheduled_backup_at ?? null
const dashboardObservationTime = Date.parse(dashboardAccessObservedAt ?? '')
const dashboardObservationAge = Date.now() - dashboardObservationTime
const administrativeAccessVerified = dashboardAccess === 'granted'
  && Number.isFinite(dashboardObservationAge)
  && dashboardObservationAge >= 0
  && dashboardObservationAge <= 24 * 60 * 60 * 1000
const backupSnapshotAge = Date.now() - Date.parse(latestScheduledBackupAt ?? '')
const backupSnapshotFresh = Number.isFinite(backupSnapshotAge)
  && backupSnapshotAge >= 0
  && backupSnapshotAge <= 48 * 60 * 60 * 1000
const currentLiveVolumeDiffersFromFixture = freshAdminObservationMatchesTarget
  && FRESH_ADMIN_BACKUP.live_catalog_check.estimated_rows_nonnegative_sum
    !== LIVE_VOLUME_REHEARSAL.fixture.total_live_shaped_rows
const recoveryDrillCompleted = LIVE_DISCOVERY.backup_and_recovery?.recovery_drill_completed === true
const affectedDataRehearsalCompleted = REAL_ARCHIVE_REHEARSAL?.status === 'passed_on_public_storage_clone'
  && REAL_ARCHIVE_REHEARSAL?.auth_restore?.status === 'restored_locally'
  && REAL_ARCHIVE_REHEARSAL.auth_restore.tables === 27
  && REAL_ARCHIVE_REHEARSAL.auth_restore.rows === 472
  && REAL_ARCHIVE_REHEARSAL.auth_restore.data_and_rls_verified === true
  && REAL_ARCHIVE_REHEARSAL.auth_restore.deferred_app_trigger_verified === true
  && REAL_ARCHIVE_REHEARSAL?.storage_restore?.data_and_rls_verified === true
  && REAL_ARCHIVE_REHEARSAL?.additional_schema_restores?.realtime?.status === 'restored_locally'
  && REAL_ARCHIVE_REHEARSAL.additional_schema_restores.realtime.tables === 10
  && REAL_ARCHIVE_REHEARSAL.additional_schema_restores.realtime.rows === 88
  && REAL_ARCHIVE_REHEARSAL.additional_schema_restores.realtime.data_and_rls_verified === true
  && REAL_ARCHIVE_REHEARSAL?.migration_results?.length === 7
  && REAL_ARCHIVE_REHEARSAL.migration_results.every((result) => result.status === 'passed_local'
    && result.source_rows_preserved)
  && REAL_ARCHIVE_REHEARSAL?.lock_contention_rehearsal?.status === 'passed_local'
  && REAL_ARCHIVE_REHEARSAL.lock_contention_rehearsal.retry_after_lock_release === 'passed_local'
const storageBytesBackedUp = STORAGE_PUBLIC?.status === 'passed_public_object_bytes_verified'
  && STORAGE_PUBLIC.source_archive_sha256 === REAL_ARCHIVE_REHEARSAL?.source_archive_sha256
  && STORAGE_PUBLIC.public_object_count === 153
  && STORAGE_PUBLIC.public_object_bytes === 233213225
  && STORAGE_PRIVATE?.status === 'passed_private_object_bytes_verified'
  && STORAGE_PRIVATE.source_archive_sha256 === REAL_ARCHIVE_REHEARSAL?.source_archive_sha256
  && STORAGE_PRIVATE.private_object_count === 6
  && STORAGE_PRIVATE.private_object_bytes === 10954980
const currentPhase9Ready = PHASE9.status === 'passed'
const blocker = !currentPhase9Ready ? {
  code: 'CONTENT_BASELINE_RECONCILIATION_REQUIRED',
  detail: 'Güncel Faz 9 tam kabulü geçmedi; içerik baz çizgisi uzlaştırılmadan canlı migration planı yürütülemez.',
} : administrativeAccessVerified && backupSnapshotFresh && !recoveryDrillCompleted
  ? affectedDataRehearsalCompleted && storageBytesBackedUp ? {
      code: 'FULL_PLATFORM_RECOVERY_AND_LIVE_RECHECK_PENDING',
      detail: currentLiveVolumeDiffersFromFixture
        ? 'Canlı yedeğin ilgili tabloları ve 159 Storage dosyası yerelde doğrulandı; ancak güncel 13 temel tabloda katalog tahmini 1.043 satır, tarihsel sentetik prova 758 satırdı. Tam Supabase restore tatbikatı ile güncel şema/hacim/kilit provası yapılmadan canlı yazma kapalı.'
        : 'Canlı yedeğin uygulama, kimlik doğrulama, depolama ve Realtime tabloları ayrı yerel kopyaya döndü; 159 Storage dosyasının baytları özel yerel yedekte doğrulandı ve 7/7 migration gerçek yedek kopyasında geçti. Vault/eklenti altyapısı ile tam Supabase restore tatbikatı ve canlı hedefin güncel şema/kilit yükü henüz doğrulanmadı. Canlı yazma kapalı.',
    } : affectedDataRehearsalCompleted ? {
      code: 'FULL_PLATFORM_RECOVERY_AND_LIVE_RECHECK_PENDING',
      detail: 'Canlı yedeğin uygulama, kimlik doğrulama, depolama ve Realtime veritabanı tabloları ayrı yerel kopyaya döndü; 7/7 migration gerçek yedek kopyasında geçti. Vault/eklenti altyapısı ve Storage dosyalarının baytları geri yüklenmedi; canlı hedefin güncel şema ve kilit yükü ayrıca doğrulanmalı. Canlı yazma kapalı.',
    } : {
      code: 'RECOVERY_COPY_REHEARSAL_PENDING',
      detail: 'Canlı hedef, yönetim erişimi, temel şema ve tarihli fiziksel yedek doğrulandı; Faz 2–8 temsilî tabloları canlıda yok. Ancak yedek ayrı geri kazanılabilir kopyaya döndürülmeden gerçek şema kuru çalışması ile kilit/süre ölçümü yapılamaz.',
    }
  : {
      code: 'FRESH_ADMIN_AND_RECOVERY_COPY_VERIFICATION_PENDING',
      detail: 'Canlı hedef kimliği doğrulandı ve Faz 2–8 temsilî tablolarının eksik olduğu yalnız-okuma kanıtıyla görüldü. Eski yönetim gözlemi bugünkü erişimi kanıtlamaz; tam geri kazanılabilir kopya ve canlı kilit/süre ölçümü de henüz doğrulanmadı.',
    }

const plan = {
  schema_version: 'phase-10-migration-operation-plan@1',
  phase: 10,
  status: currentPhase9Ready
    ? 'locally_verified_live_reconciliation_pending'
    : 'blocked_current_phase9_acceptance',
  generated_at: new Date().toISOString(),
  scope: affectedDataRehearsalCompleted
    ? 'static_analysis_and_real_archive_public_storage_local_rehearsal'
    : 'read_only_static_analysis_and_phase_9_local_rehearsal_evidence',
  ordered_migrations: migrations,
  totals,
  findings: {
    top_level_destructive_ddl: false,
    user_data_deletes_executed_by_migration: false,
    delete_statement_note: 'Beş DELETE ifadesi açık kullanıcı eylemiyle çağrılan, sahiplik denetimli silme/reset fonksiyonlarının gövdelerindedir; migration sırasında çalışmaz.',
    phase_3_transaction_gap: true,
    phase_3_transaction_rule: 'Faz 3 dosyası canlı yürütücü tarafından tek transaction içinde ve ilk hatada duracak biçimde sarılmalıdır.',
    blocking_index_risk: true,
    current_live_volume_differs_from_historical_fixture: currentLiveVolumeDiffersFromFixture,
    blocking_index_note: affectedDataRehearsalCompleted
      ? '67 indeks CONCURRENTLY olmadan oluşturulur. Gerçek yedekten geri alınan public/storage kopyasında yedi migration geçti; canlı eşzamanlı trafik altındaki kilit süresi yine ölçülmedi.'
      : '67 indeks CONCURRENTLY olmadan oluşturulur. Çoğu yeni tablo üzerindedir; mevcut tablolarda katalogdan yaklaşık hacim ve yerel sentetik prova doğrulansa da canlı kilit süresi geri kazanılabilir kopyada ölçülmeden üretimde uygulanmaz.',
    existing_table_alter_risk: true,
    existing_table_alter_note: 'Özellikle Faz 3 ve Faz 4 mevcut ders, soru, deneme, profil ve AI çözüm tablolarına kolon/kısıt ekler; canlı veri biçimi ve tablo büyüklüğü bilinmeden güvenli süre iddiası kurulamaz.',
    baseline_ai_coach_dependency: 'migration_ai_coach.sql yalnız canlı geçmişte eksikse ayrı incelenir; körlemesine yeniden uygulanmaz.',
    phase_10_pilot_gate_dependency: 'Faz 10 dar Koç RPC köprüsü yalnız Faz 9 özel bayrak şemasından sonra uygulanır; eski yedi migration dosyası değiştirilmez.',
  },
  local_rehearsal: {
    source: 'docs/ai-koc/kanitlar/faz-9/faz-9-kabul-sonucu.json',
    postgres_real_server: PHASE9.postgres.real_server,
    simultaneous_connections: PHASE9.postgres.simultaneous_connections,
    actual_rls: PHASE9.postgres.actual_rls,
    signed_jwt: PHASE9.postgres.signed_jwt,
    migration_applied_twice: PHASE9.postgres.migration_applied_twice,
    limitation: 'Bu prova canlı şema veya canlı veri hacmi değildir.',
  },
  no_cost_live_shape_rehearsal: {
    source: 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-hacim-yerel-prova.json',
    status: LIVE_VOLUME_REHEARSAL.status,
    synthetic_rows: LIVE_VOLUME_REHEARSAL.fixture.total_live_shaped_rows,
    ordered_phases: LIVE_VOLUME_REHEARSAL.migration_rehearsal.ordered_phases,
    primary_engine: LIVE_VOLUME_REHEARSAL.migration_rehearsal.engine,
    secondary_engine: LIVE_VOLUME_REHEARSAL.secondary_pglite_rehearsal.engine,
    rows_preserved: LIVE_VOLUME_REHEARSAL.migration_rehearsal.rows_preserved,
    idempotent_second_apply: LIVE_VOLUME_REHEARSAL.migration_rehearsal.idempotent_second_apply,
    live_missing_phase_4_columns_covered: LIVE_VOLUME_REHEARSAL.migration_rehearsal.phase_4_live_missing_columns_covered,
    paid_service_used: LIVE_VOLUME_REHEARSAL.side_effects.paid_service_used,
    live_write: LIVE_VOLUME_REHEARSAL.side_effects.live_write,
    lock_contention_rehearsal: LIVE_VOLUME_REHEARSAL.lock_contention_rehearsal,
    limitation: 'Canlı katalog tahminleriyle aynı 758 satırlık kişisel verisiz fixture gerçek PostgreSQL 18 ve PGlite üzerinde kullanılır; bu eski yedi migration provası Faz 10 RPC köprüsünü içermez ve canlı Supabase kilit/restore süresini kanıtlamaz.',
  },
  pilot_gate_local_rehearsal: {
    source: 'docs/ai-koc/kanitlar/faz-10/faz-10-koc-veritabani-kapisi.json',
    status: COACH_DATABASE_GATE.status,
    assertions: COACH_DATABASE_GATE.assertions,
    migration_sha256: COACH_DATABASE_GATE.migration_sha256,
    live_applied: false,
  },
  real_archive_local_rehearsal: affectedDataRehearsalCompleted ? {
    source: 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-yedek-migration-prova.json',
    public_tables: REAL_ARCHIVE_REHEARSAL.public_tables_restored,
    public_rows: REAL_ARCHIVE_REHEARSAL.public_rows_restored,
    storage_restore: REAL_ARCHIVE_REHEARSAL.storage_restore,
    migration_phases: REAL_ARCHIVE_REHEARSAL.migration_results.map((result) => result.phase),
    rls_rehearsal: REAL_ARCHIVE_REHEARSAL.rls_rehearsal,
    lock_contention_rehearsal: REAL_ARCHIVE_REHEARSAL.lock_contention_rehearsal,
    full_supabase_restore_verified: false,
  } : null,
  live_read_only_discovery: {
    source: 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-hedef-kesfi.json',
    target_identity_verified: LIVE_DISCOVERY.conclusion.live_target_identity_verified,
    public_schema_reachable: LIVE_DISCOVERY.live_service.reachable,
    representative_phase_tables_missing: LIVE_DISCOVERY.conclusion.representative_phase_tables_missing,
    dashboard_access: dashboardAccess,
    dashboard_access_observed_at: dashboardAccessObservedAt,
    administrative_access_verified: administrativeAccessVerified,
    dashboard_observation_source: freshAdminObservationMatchesTarget
      ? 'docs/ai-koc/kanitlar/faz-10/faz-10-yonetim-yedek-gozlemi-2026-10-10.json' : null,
    latest_scheduled_backup_at: latestScheduledBackupAt,
    backup_snapshot_fresh: backupSnapshotFresh,
    current_live_catalog_estimated_rows: freshAdminObservationMatchesTarget
      ? FRESH_ADMIN_BACKUP.live_catalog_check.estimated_rows_nonnegative_sum : null,
    current_live_catalog_total_bytes: freshAdminObservationMatchesTarget
      ? FRESH_ADMIN_BACKUP.live_catalog_check.total_relation_bytes : null,
    restore_capability: LIVE_DISCOVERY.backup_and_recovery?.restore_capability ?? 'unverified',
    recovery_drill_completed: recoveryDrillCompleted,
    student_rows_read: LIVE_DISCOVERY.privacy.student_rows_read,
    limitation: 'Publishable anahtar private şema, migration geçmişi, tablo boyutu, kilit süresi veya yedekleri doğrulayamaz.',
  },
  live_schema_compatibility: {
    source: 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-sema-uyumluluk.json',
    status: LIVE_SCHEMA_COMPAT.status,
    prerequisite_tables: LIVE_SCHEMA_COMPAT.prerequisite_tables,
    phase_4_column_impact: LIVE_SCHEMA_COMPAT.phase_4_column_impact,
    student_rows_selected: LIVE_SCHEMA_COMPAT.privacy.student_rows_selected,
    live_write: LIVE_SCHEMA_COMPAT.side_effects.live_write,
  },
  live_schema_contract: {
    source: 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-sema-sozlesmesi.json',
    status: LIVE_SCHEMA_CONTRACT.status,
    checksum: LIVE_SCHEMA_CONTRACT.contract_checksum,
    totals: LIVE_SCHEMA_CONTRACT.totals,
    table_rows_selected: LIVE_SCHEMA_CONTRACT.privacy.table_rows_selected,
    live_write: LIVE_SCHEMA_CONTRACT.side_effects.live_write,
  },
  cost_guard: {
    source: 'docs/ai-koc/kanitlar/faz-10/faz-10-ucret-kisiti-karari.json',
    status: COST_GUARD_DECISION.status,
    reason_code: COST_GUARD_DECISION.decision.reason_code,
    recovery_copy_gate_completed: COST_GUARD_DECISION.conclusion.recovery_copy_gate_completed,
    paid_service_used: COST_GUARD_DECISION.side_effects.paid_service_used,
  },
  mandatory_execution_sequence: [
    'Canlı proje kimliğini beklenen kimlikle eşleştir.',
    'Tarihli yedek ve geri kazanım tatbikat kaydını doğrula.',
    'Canlı migration geçmişini ve şema nesnelerini yalnız okuyarak çıkar.',
    'Aday sırayı mevcut şemayla uzlaştır; zaten uygulanmış nesneyi körlemesine çalıştırma.',
    'Geri kazanılabilir kopyada transaction, süre, kilit ve disk etkisini ölç.',
    'Bütün kaynak/analiz/yazma bayraklarının kapalı olduğunu tekrar doğrula.',
    'Kullanıcının kayıtlı Faz 10 canlı yetkisinin bu adımları kapsadığını kanıttan doğrula.',
    'Migrationları sırayla uygula; her adım sonrası nesne, kısıt, indeks ve RLS kapısını çalıştır.',
    'Uzlaştırma farkı sıfır değilse veya bütçe aşılırsa sonraki adıma geçme.',
  ],
  stop_and_recovery: {
    before_write: 'Hedef, yedek, kuru çalışma veya açık onay eksikse dur.',
    during_migration: 'Transactionı geri al; özellik bayraklarını kapalı bırak; öğrenci verisini silme.',
    after_schema_change: 'Kaynak alımını ve koç yazılarını kapat; kuyruk/cursor koru; uyumlu ileri düzeltme uygula.',
    after_projection_issue: 'Son doğrulanmış nesli görünür tut; düzeltme/tombstone ile deterministik yeniden üret.',
  },
  blocker,
  side_effects: {
    live_connection: true,
    live_connection_scope: 'public_metadata_only_limit_0_no_student_rows',
    migration_executed: false,
    backfill_executed: false,
    real_student_data_used: false,
    deployment_or_push: false,
  },
}

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, `${JSON.stringify(plan, null, 2)}\n`)
console.log('Faz 10 migration operasyon planı doğrulandı.')
console.log(`Sıra: ${migrations.map((item) => `Faz ${item.phase}`).join(' → ')}`)
console.log(`Yıkıcı DDL: ${totals.destructive_ddl}; canlı öncesi ölçülecek non-concurrent indeks: ${totals.nonconcurrent_indexes}.`)
console.log(`Somut engel: ${plan.blocker.detail}`)
if (!currentPhase9Ready) process.exitCode = 1
