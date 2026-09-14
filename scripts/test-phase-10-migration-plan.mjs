/** Faz 10 migration operasyon planı — yalnız yerel/statik analiz. */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const ROOT = process.cwd()
const OUT = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-migration-operasyon-plani.json')
const PHASE9 = JSON.parse(readFileSync(join(ROOT, 'docs/ai-koc/kanitlar/faz-9/faz-9-kabul-sonucu.json'), 'utf8'))

const DEFINITIONS = Object.freeze([
  { phase: 2, file: 'supabase/migration_learning_evidence_network.sql', transaction: 'file_begin_commit' },
  { phase: 3, file: 'supabase/migration_learning_content_activity.sql', transaction: 'runner_must_wrap_single_transaction' },
  { phase: 4, file: 'supabase/migration_learning_academic_records.sql', transaction: 'file_begin_commit' },
  { phase: 5, file: 'supabase/migration_learning_language_progress.sql', transaction: 'file_begin_commit' },
  { phase: 6, file: 'supabase/migration_learning_student_topic_model.sql', transaction: 'file_begin_commit' },
  { phase: 8, file: 'supabase/migration_learning_coaching_loop.sql', transaction: 'file_begin_commit' },
  { phase: 9, file: 'supabase/migration_learning_hardening.sql', transaction: 'file_begin_commit' },
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
assert.equal(PHASE9.postgres?.real_server, true)
assert.equal(PHASE9.postgres?.actual_rls, true)
assert.equal(PHASE9.postgres?.migration_applied_twice, true)
assert.ok(PHASE9.postgres?.simultaneous_connections >= 5)

const plan = {
  schema_version: 'phase-10-migration-operation-plan@1',
  phase: 10,
  status: 'locally_verified_live_reconciliation_pending',
  generated_at: new Date().toISOString(),
  scope: 'read_only_static_analysis_and_phase_9_local_rehearsal_evidence',
  ordered_migrations: migrations,
  totals,
  findings: {
    top_level_destructive_ddl: false,
    user_data_deletes_executed_by_migration: false,
    delete_statement_note: 'Beş DELETE ifadesi açık kullanıcı eylemiyle çağrılan, sahiplik denetimli silme/reset fonksiyonlarının gövdelerindedir; migration sırasında çalışmaz.',
    phase_3_transaction_gap: true,
    phase_3_transaction_rule: 'Faz 3 dosyası canlı yürütücü tarafından tek transaction içinde ve ilk hatada duracak biçimde sarılmalıdır.',
    blocking_index_risk: true,
    blocking_index_note: '67 indeks CONCURRENTLY olmadan oluşturulur. Çoğu yeni tablo üzerindedir; mevcut tablo satır sayıları ve kilit süresi canlı hedefin geri kazanılabilir kopyasında ölçülmeden üretimde uygulanmaz.',
    existing_table_alter_risk: true,
    existing_table_alter_note: 'Özellikle Faz 3 ve Faz 4 mevcut ders, soru, deneme, profil ve AI çözüm tablolarına kolon/kısıt ekler; canlı veri biçimi ve tablo büyüklüğü bilinmeden güvenli süre iddiası kurulamaz.',
    baseline_ai_coach_dependency: 'migration_ai_coach.sql yalnız canlı geçmişte eksikse ayrı incelenir; körlemesine yeniden uygulanmaz.',
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
  mandatory_execution_sequence: [
    'Canlı proje kimliğini beklenen kimlikle eşleştir.',
    'Tarihli yedek ve geri kazanım tatbikat kaydını doğrula.',
    'Canlı migration geçmişini ve şema nesnelerini yalnız okuyarak çıkar.',
    'Aday sırayı mevcut şemayla uzlaştır; zaten uygulanmış nesneyi körlemesine çalıştırma.',
    'Geri kazanılabilir kopyada transaction, süre, kilit ve disk etkisini ölç.',
    'Bütün kaynak/analiz/yazma bayraklarının kapalı olduğunu tekrar doğrula.',
    'Canlı migration için kapsamı belli ayrı açık onay al.',
    'Migrationları sırayla uygula; her adım sonrası nesne, kısıt, indeks ve RLS kapısını çalıştır.',
    'Uzlaştırma farkı sıfır değilse veya bütçe aşılırsa sonraki adıma geçme.',
  ],
  stop_and_recovery: {
    before_write: 'Hedef, yedek, kuru çalışma veya açık onay eksikse dur.',
    during_migration: 'Transactionı geri al; özellik bayraklarını kapalı bırak; öğrenci verisini silme.',
    after_schema_change: 'Kaynak alımını ve koç yazılarını kapat; kuyruk/cursor koru; uyumlu ileri düzeltme uygula.',
    after_projection_issue: 'Son doğrulanmış nesli görünür tut; düzeltme/tombstone ile deterministik yeniden üret.',
  },
  blocker: {
    code: 'LIVE_SCHEMA_AND_RECOVERY_COPY_UNAVAILABLE',
    detail: 'Doğrulanmış canlı hedef, migration geçmişi ve geri kazanılabilir kopya yok; gerçek şema kuru çalışması ile kilit/süre ölçümü yapılamaz.',
  },
  side_effects: {
    live_connection: false,
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
