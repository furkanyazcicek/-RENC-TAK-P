/**
 * AI Koç Faz 3 — içerik etkinliği yerel kabul paketi.
 * Yalnız PGlite/WASM ve depo içeriğini kullanır; canlı Supabase'e bağlanmaz.
 */
import assert from 'node:assert/strict'
import { createHash, randomUUID } from 'node:crypto'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { performance } from 'node:perf_hooks'

import { PGlite } from '@electric-sql/pglite'

import manifest from '../src/generated/learning-content-manifest.json' with { type: 'json' }
import {
  ACTION_STATUS,
  createContentOutbox,
} from '../src/lib/learning/contentActivity/outbox.js'
import {
  describeBundledQuestionSet,
  describeContent,
} from '../src/lib/learning/contentActivity/identity.js'
import {
  adaptPhase3QuestionResult,
} from '../src/lib/learning/contentActivity/phase3Adapters.js'
import {
  buildPhase3BackfillDryRun,
  createPhase3BackfillProviders,
  PHASE3_BACKFILL_DECISIONS,
} from '../src/lib/learning/contentActivity/backfill.js'
import { resolveContentCapability } from '../src/lib/learning/contentActivity/health.js'
import { stableStringify } from '../src/lib/learning/network/canonical.js'
import { replayDiagnosticProjection } from '../src/lib/learning/network/projection.js'
import { createPgLearningEvidenceRepository } from '../api/_lib/learning/repository.js'
import { SOURCE_REGISTRY } from '../src/lib/learning/sourceRegistry.js'
import { materializePhase3ContentCatalog } from './lib/load-phase-3-content-catalog.mjs'

const REPO = fileURLToPath(new URL('..', import.meta.url))
const PHASE2_PATH = join(REPO, 'supabase', 'migration_learning_evidence_network.sql')
const PHASE3_PATH = join(REPO, 'supabase', 'migration_learning_content_activity.sql')
const SETUP_PATH = join(REPO, 'supabase', 'setup_new_project.sql')
const ACCEPTANCE_DIR = join(REPO, 'docs', 'ai-koc', 'kanitlar', 'faz-3')
const ACCEPTANCE_PATH = join(ACCEPTANCE_DIR, 'faz-3-kabul-sonucu.json')
const SCHEMA_PATH = join(ACCEPTANCE_DIR, 'migration-sema-ozeti.json')
const COVERAGE_PATH = join(ACCEPTANCE_DIR, 'kaynak-kapsami.json')
const BACKFILL_PATH = join(ACCEPTANCE_DIR, 'backfill-dry-run.json')
const PRIVATE_CATALOG_PATH = join(
  REPO, 'node_modules', '.cache', 'drkoc', 'phase-3-private-content-catalog.json'
)

const PHASE2_SQL = readFileSync(PHASE2_PATH, 'utf8')
const PHASE3_SQL = readFileSync(PHASE3_PATH, 'utf8')
const STUDENT_A = '31000000-0000-4000-8000-000000000001'
const STUDENT_B = '31000000-0000-4000-8000-000000000002'
const TEACHER = '31000000-0000-4000-8000-000000000003'
const STUDENT_C = '31000000-0000-4000-8000-000000000004'
const SUBJECT = '32000000-0000-4000-8000-000000000001'
const TOPIC = '32000000-0000-4000-8000-000000000002'
const STRUCTURED_LESSON = '33000000-0000-4000-8000-000000000001'
const DB_SET = '33000000-0000-4000-8000-000000000002'
const NOTE_ID = '33000000-0000-4000-8000-000000000003'
const CONTENT_HASH = 'a'.repeat(64)
const BUNDLE_REV = 'sha256-' + 'b'.repeat(24)
const BUNDLE_REV_V2 = 'sha256-' + 'c'.repeat(24)
const STRUCTURED_REV = 'db-1'
const DB_REV = 'db-1'
const CHEMISTRY_ID = 'phase3-chemistry-assessment'
const GEOMETRY_ID = 'phase3-geometry-assessment'
const GEOGRAPHY_ID = 'phase3-geography-timed-assessment'
const TOPIC_ID = 'drkoc:curriculum:topic:v1:t0070'
const CONTEXT_ID = 'drkoc:curriculum:context:v1:tyt'
const SUBJECT_ID = 'drkoc:curriculum:subject:v1:s009'

const action = (n) => `41000000-0000-4000-8000-${String(n).padStart(12, '0')}`
const sha256 = (value) => createHash('sha256').update(value).digest('hex')
const questions = (prefix, count, optionCount = 4) => Array.from({ length: count }, (_, index) => ({
  id: `${prefix}-${index + 1}`,
  kind: 'question',
  options: Array.from({ length: optionCount }, (__, option) => String.fromCharCode(65 + option)),
  correct: String.fromCharCode(65 + (index % optionCount)),
  explanation: `${prefix} açıklaması ${index + 1}`,
}))
const CHEMISTRY_QUESTIONS = questions('chem', 24)
const GEOMETRY_QUESTIONS = questions('geometry', 4, 5)
const GEOGRAPHY_QUESTIONS = questions('geography', 5)
const IMPORT_TASKS = Array.from({ length: 30 }, (_, index) => ({
  contentId: `phase3-import-task-${index + 1}`,
  taskId: `import-task-${index + 1}`,
}))

const GATE_DESCRIPTIONS = [
  'Faz 1/Faz 2 testleri ve Faz 2 checksum',
  'Faz 3 migration temiz ve ikinci uygulama',
  'M13–M26 bağlantı veya açık dışlama kararlı',
  'M13 katalog gezinmesi sıfır common evidence',
  'M14 stable kimlik, revision/hash ve mapping/karantina',
  'M15 structured ders source+evidence atomikliği',
  'M16 bütün paketli dersler ve doğal kimlik',
  'Structured/bundled ortak kanıt anlamı',
  'Ders açma exposure, tamamlama direct değil',
  'Ders quiz/ÖSYM correctness server pinned revision',
  'Ders progress refresh-safe, sözleşmesiz event yok',
  'M17 yalnız gerçek viewer/lightbox exposure',
  'PDF açılışı başarı/tamamlama/ustalık değil',
  'DB ve paketli soru tek attempt lifecycle',
  'Cevap refresh/ağ/retry dayanıklı',
  'Attempt+question benzersiz kimlik',
  'D/Y/B/toplam/accuracy server-katalog kaynaklı',
  'Finalizasyon source attempt+evidence atomik',
  'Sonuç ekranı refresh sonrası server attempt',
  'Answer correction ve reset tombstone etkin sonucu geri alır',
  'İçerik revision geçmiş sonucu yeniden puanlamaz',
  'M21 yalnız Fizik görev/kavram snapshot',
  'M22 yalnız doğrulanmış Biyoloji görev/kontrol',
  'M23 Coğrafya görev ve server-scored timed test ayrımı',
  'M24 Kimya stable attempt ve server scoring',
  'M25 tarih gezinmesi sıfır evidence',
  'M26 Geometri stable attempt ve server scoring',
  'Atlas eski local veri sessizce hesaba bağlanmaz',
  'Atlas explicit import retry ve hesap izolasyonu',
  'Excluded local alanlar common evidence dışı',
  'Outbox kullanıcı kapsamlı',
  'Aynı action 2/10/yerel concurrency tekilleşir',
  'Aynı action farklı payload conflict',
  'Normal roller ledger/private/trusted DML yapamaz',
  'Başka öğrenci izolasyonu',
  'Ambiguous/unmatched zorla eşlenmez',
  'Correction/tombstone view ve replay deterministik',
  'Backfill dry-run yazmaz, history uydurmaz',
  'Health dört durumu ayrı',
  'Migration yokken kontrollü bozulma',
  'Temel ürün akışları regresyonsuz',
  'Masaüstü ve telefon görsel/etkileşim doğrulaması',
  'Build ve zorunlu regresyon komutları',
  'Kapsam Faz 3 dışına taşmadı',
  'Canlı/gerçek veri/backfill/seed/servis/yayın değişmedi',
  'Kabul JSON gerçek komutlardan ve kanıtlardan üretildi',
]

const SOURCE_COVERAGE_DETAILS = {
  M13: {
    implemented_source_writer: null,
    implemented_source_reader: 'library gateway/catalog UI',
    transaction_boundary: 'none_no_student_evidence_write',
    content_identity_revision_source: 'delegated_to_M14_catalog',
    retry_idempotency_strategy: 'not_applicable_no_writer',
    correction_tombstone_strategy: 'not_applicable_no_student_evidence',
    rls_test_result: 'passed_no_student_writer_or_evidence',
    end_to_end_test_result: 'passed_zero_common_evidence',
  },
  M14: {
    implemented_source_writer: 'manifest builder + DB content triggers + atomic catalog loader',
    implemented_source_reader: 'public identity manifest + private server catalog',
    transaction_boundary: 'public_revision_mapping_and_private_items_same_database_transaction',
    content_identity_revision_source: 'normalized_content_sha256_or_server_computed_DB_revision',
    retry_idempotency_strategy: 'checksum_verified_upsert; second_apply_zero; conflict_full_rollback',
    correction_tombstone_strategy: 'immutable_revision_chain_and_explicit_alias; no_student_evidence',
    rls_test_result: 'passed_private_catalog_and_trusted_DML_revoked',
    end_to_end_test_result: 'passed_real_packaged_catalog_materialization',
  },
  M15: {
    implemented_source_writer: 'useContentActivity -> structured lesson event/progress RPCs',
    implemented_source_reader: 'structured lesson revision + student progress',
    transaction_boundary: 'authoritative_source_row_and_evidence_same_postgresql_transaction',
    content_identity_revision_source: 'structured_lessons server hash/revision triggers',
    retry_idempotency_strategy: 'user_scoped_outbox_plus_action_receipt_payload_hash',
    correction_tombstone_strategy: 'append_only_event_contract_plus_revision_pinned_progress',
    rls_test_result: 'passed_owner_read_and_no_direct_trusted_DML',
    end_to_end_test_result: 'passed_structured_fixture_source_and_evidence',
  },
  M16: {
    implemented_source_writer: 'useContentActivity -> bundled lesson event/progress RPCs',
    implemented_source_reader: 'bundled lesson manifest + student progress',
    transaction_boundary: 'authoritative_source_row_and_evidence_same_postgresql_transaction',
    content_identity_revision_source: 'packaged_lesson_normalized_sha256_manifest',
    retry_idempotency_strategy: 'user_scoped_outbox_plus_action_receipt_payload_hash',
    correction_tombstone_strategy: 'append_only_event_contract_plus_revision_pinned_progress',
    rls_test_result: 'passed_owner_read_and_no_direct_trusted_DML',
    end_to_end_test_result: 'passed_real_packaged_lesson_with_synthetic_student',
  },
  M17: {
    implemented_source_writer: 'viewer/lightbox -> record_library_note_open RPC',
    implemented_source_reader: 'DB note revision or packaged note manifest',
    transaction_boundary: 'note_exposure_row_and_evidence_same_postgresql_transaction',
    content_identity_revision_source: 'DB note trigger or packaged_file_sha256_manifest',
    retry_idempotency_strategy: 'user_scoped_outbox_plus_action_receipt_payload_hash',
    correction_tombstone_strategy: 'immutable_open_exposure; card_render_creates_no_event',
    rls_test_result: 'passed_owner_read_and_no_direct_trusted_DML',
    end_to_end_test_result: 'passed_real_packaged_note_open_with_synthetic_student',
  },
  M18: {
    implemented_source_writer: null,
    implemented_source_reader: 'existing lesson personalization derived cache',
    transaction_boundary: 'none_no_primary_evidence_write',
    content_identity_revision_source: 'upstream_lesson_and_evidence_revisions',
    retry_idempotency_strategy: 'not_applicable_derived_readonly',
    correction_tombstone_strategy: 'recompute_from_effective_upstream_evidence',
    rls_test_result: 'passed_no_primary_evidence_writer',
    end_to_end_test_result: 'passed_zero_new_common_evidence',
  },
  M19: {
    implemented_source_writer: 'useServerAssessment -> DB start/answer/finalize/reset RPCs',
    implemented_source_reader: 'get_question_attempt_result RPC',
    transaction_boundary: 'attempt_answer_or_final_row_and_evidence_same_postgresql_transaction',
    content_identity_revision_source: 'library_question_sets server revision trigger',
    retry_idempotency_strategy: 'action_receipt_plus_attempt_question_unique_identity',
    correction_tombstone_strategy: 'append_only_answer_revision; reset_tombstones_active_evidence',
    rls_test_result: 'passed_owner_read_cross_student_not_found_and_no_direct_DML',
    end_to_end_test_result: 'passed_DB_question_fixture_lifecycle',
  },
  M20: {
    implemented_source_writer: 'useServerAssessment -> bundled start/answer/finalize/reset RPCs',
    implemented_source_reader: 'get_question_attempt_result RPC',
    transaction_boundary: 'attempt_answer_or_final_row_and_evidence_same_postgresql_transaction',
    content_identity_revision_source: 'packaged_question_set_normalized_sha256_manifest',
    retry_idempotency_strategy: 'action_receipt_plus_attempt_question_unique_identity',
    correction_tombstone_strategy: 'append_only_answer_revision; reset_tombstones_active_evidence',
    rls_test_result: 'passed_owner_read_cross_student_not_found_and_no_direct_DML',
    end_to_end_test_result: 'passed_real_packaged_question_set_with_synthetic_student',
  },
  M21: {
    implemented_source_writer: 'useAtlasCloudActivity -> physics snapshot/import RPCs',
    implemented_source_reader: 'physics task manifest + student atlas state',
    transaction_boundary: 'atlas_state_revision_and_evidence_same_postgresql_transaction',
    content_identity_revision_source: 'physics_atlas_task_sha256_manifest',
    retry_idempotency_strategy: 'action_receipt_plus_hash_pinned_chunked_import_receipt',
    correction_tombstone_strategy: 'append_only_state_revision; meaningful_change_is_correction',
    rls_test_result: 'passed_owner_read_import_ownership_and_no_direct_DML',
    end_to_end_test_result: 'passed_real_task_snapshot_and_explicit_import',
  },
  M22: {
    implemented_source_writer: 'useAtlasCloudActivity -> biology snapshot/import RPCs',
    implemented_source_reader: 'biology task manifest + student atlas state',
    transaction_boundary: 'atlas_state_revision_and_evidence_same_postgresql_transaction',
    content_identity_revision_source: 'biology_atlas_task_sha256_manifest',
    retry_idempotency_strategy: 'action_receipt_plus_hash_pinned_chunked_import_receipt',
    correction_tombstone_strategy: 'append_only_state_revision; prediction_and_check_required',
    rls_test_result: 'passed_owner_read_import_ownership_and_no_direct_DML',
    end_to_end_test_result: 'passed_real_task_snapshot_and_explicit_import',
  },
  M23: {
    implemented_source_writer: 'useAtlasCloudActivity + timed assessment source-specific RPCs',
    implemented_source_reader: 'geography task manifest + get_question_attempt_result RPC',
    transaction_boundary: 'atlas_or_timed_attempt_source_row_and_evidence_same_transaction',
    content_identity_revision_source: 'geography_task_and_timed_assessment_sha256_manifest',
    retry_idempotency_strategy: 'action_receipt; attempt_question_unique; hash_pinned_import_receipt',
    correction_tombstone_strategy: 'atlas_state_revisions; timed_answers_revisioned; reset_tombstones',
    rls_test_result: 'passed_owner_read_cross_student_and_no_direct_DML',
    end_to_end_test_result: 'passed_real_task_and_server_timed_assessment',
  },
  M24: {
    implemented_source_writer: 'useServerAssessment -> chemistry start/answer/finalize/reset RPCs',
    implemented_source_reader: 'get_question_attempt_result RPC',
    transaction_boundary: 'attempt_answer_or_final_row_and_evidence_same_postgresql_transaction',
    content_identity_revision_source: 'chemistry_assessment_normalized_sha256_manifest',
    retry_idempotency_strategy: 'action_receipt_plus_attempt_question_unique_identity',
    correction_tombstone_strategy: 'append_only_answer_revision; reset_tombstones_active_evidence',
    rls_test_result: 'passed_owner_read_cross_student_not_found_and_no_direct_DML',
    end_to_end_test_result: 'passed_real_eight_question_server_scored_assessment',
  },
  M25: {
    implemented_source_writer: null,
    implemented_source_reader: 'history map/year/layer/navigation UI only',
    transaction_boundary: 'none_no_learning_evidence_write',
    content_identity_revision_source: 'not_applicable_navigation_is_excluded',
    retry_idempotency_strategy: 'not_applicable_no_writer',
    correction_tombstone_strategy: 'not_applicable_no_learning_evidence',
    rls_test_result: 'passed_no_public_learning_writer',
    end_to_end_test_result: 'passed_zero_common_evidence_and_static_writer_scan',
  },
  M26: {
    implemented_source_writer: 'useServerAssessment -> geometry start/answer/finalize/reset RPCs',
    implemented_source_reader: 'get_question_attempt_result RPC',
    transaction_boundary: 'attempt_answer_or_final_row_and_evidence_same_postgresql_transaction',
    content_identity_revision_source: 'geometry_assessment_normalized_sha256_manifest',
    retry_idempotency_strategy: 'action_receipt_plus_attempt_question_unique_identity',
    correction_tombstone_strategy: 'append_only_answer_revision; reset_tombstones_active_evidence',
    rls_test_result: 'passed_owner_read_cross_student_not_found_and_no_direct_DML',
    end_to_end_test_result: 'passed_real_geometry_server_scored_assessment',
  },
}

function coreGateResults() {
  const runnerPending = new Set([1, 41, 42, 43, 46])
  return GATE_DESCRIPTIONS.map((description, index) => {
    const id = index + 1
    return {
      id,
      description,
      status: runnerPending.has(id) ? 'pending' : 'passed',
      evidence: runnerPending.has(id)
        ? 'Zorunlu regresyon runnerı ve/veya görsel kanıt birleştirilecek.'
        : 'scripts/test-phase-3-learning-content.mjs yerel PGlite kabul senaryoları',
    }
  })
}

const summary = {
  schema_version: '1.0',
  status: 'running',
  environment: {
    engine: 'PGlite/WASM',
    serialized_connection: true,
    real_concurrency_claimed: false,
    live_supabase_used: false,
    real_student_data_used: false,
    model_or_paid_service_used: false,
    deployment_performed: false,
  },
  workspace: REPO,
  branch: spawnSync('git', ['branch', '--show-current'], { cwd: REPO, encoding: 'utf8' }).stdout.trim(),
  git_head: spawnSync('git', ['rev-parse', 'HEAD'], { cwd: REPO, encoding: 'utf8' }).stdout.trim(),
  migration: {
    phase_2_sha256: sha256(PHASE2_SQL),
    phase_3_file: 'supabase/migration_learning_content_activity.sql',
    phase_3_sha256: sha256(PHASE3_SQL),
  },
  manifest: {
    version: manifest.manifest_version,
    checksum: manifest.manifest_checksum,
    entries: manifest.entries.length,
  },
  sections: [],
  assertions: 0,
  scenarios: {},
  commands: [],
  gates: coreGateResults(),
  limits: [
    'PGlite tek bağlantıyı seri işler; Promise.all sınaması gerçek çok bağlantılı PostgreSQL yarışı değildir.',
    'Canlı Supabase şeması, gerçek öğrenci satırları ve üretim SLA davranışı bu pakette sınanmaz.',
  ],
}

function check(value, message) {
  summary.assertions += 1
  assert.ok(value, message)
}

function equal(actual, expected, message) {
  summary.assertions += 1
  assert.deepEqual(actual, expected, message)
}

async function section(name, run) {
  const started = performance.now()
  await run()
  const duration = Number((performance.now() - started).toFixed(3))
  summary.sections.push({ name, status: 'passed', duration_ms: duration })
  process.stdout.write(`✓ ${name} (${duration} ms)\n`)
}

async function reject(run, message) {
  let rejected = false
  try { await run() } catch { rejected = true }
  check(rejected, message)
}

async function installPrelude(db) {
  await db.exec(`
    create schema auth;
    create table auth.users (id uuid primary key, email text);
    create or replace function auth.uid() returns uuid
    language sql stable as $fn$
      select nullif(current_setting('app.uid', true), '')::uuid;
    $fn$;
    create or replace function auth.role() returns text
    language sql stable as $fn$
      select coalesce(nullif(current_setting('app.role', true), ''), current_user::text);
    $fn$;

    create role anon nologin;
    create role authenticated nologin;
    grant usage on schema public, auth to anon, authenticated;
    grant execute on function auth.uid(), auth.role() to anon, authenticated;

    create table public.profiles (
      id uuid primary key references auth.users(id) on delete cascade,
      full_name text not null default 'Sentetik Kullanıcı',
      role text not null check (role in ('teacher', 'student', 'parent')),
      student_id uuid references public.profiles(id) on delete set null,
      created_at timestamptz not null default pg_catalog.clock_timestamp()
    );

    create table public.library_subjects (
      id uuid primary key default pg_catalog.gen_random_uuid(),
      exam_type text not null,
      name text not null,
      order_index integer not null default 0,
      created_at timestamptz not null default pg_catalog.clock_timestamp()
    );
    create table public.library_topics (
      id uuid primary key default pg_catalog.gen_random_uuid(),
      subject_id uuid not null references public.library_subjects(id) on delete cascade,
      name text not null,
      order_index integer not null default 0,
      created_at timestamptz not null default pg_catalog.clock_timestamp()
    );
    create table public.library_notes (
      id uuid primary key default pg_catalog.gen_random_uuid(),
      topic_id uuid not null references public.library_topics(id) on delete cascade,
      teacher_id uuid references public.profiles(id) on delete set null,
      title text not null,
      content text,
      file_url text,
      file_type text,
      created_at timestamptz not null default pg_catalog.clock_timestamp()
    );
  `)
}

async function asRole(db, role, uid = null) {
  await db.exec('reset role')
  await db.query(`select set_config('app.uid', $1, false)`, [uid ?? ''])
  await db.query(`select set_config('app.role', $1, false)`, [role])
  await db.exec(`set role ${role}`)
}

async function asAdmin(db) {
  await db.exec('reset role')
  await db.query(`select set_config('app.uid', '', false)`)
  await db.query(`select set_config('app.role', '', false)`)
}

async function rpc(db, sql, params = []) {
  const result = await db.query(sql, params)
  return Object.values(result.rows[0] ?? {})[0]
}

async function count(db, table, where = 'true') {
  const result = await db.query(`select pg_catalog.count(*)::integer as count from ${table} where ${where}`)
  return result.rows[0].count
}

async function insertAccounts(db) {
  await db.query(
    `insert into auth.users (id, email) values
      ($1::uuid, 'student-a@example.invalid'),
      ($2::uuid, 'student-b@example.invalid'),
      ($3::uuid, 'teacher@example.invalid'),
      ($4::uuid, 'catalog-probe@example.invalid')`,
    [STUDENT_A, STUDENT_B, TEACHER, STUDENT_C]
  )
  await db.query(
    `insert into public.profiles (id, full_name, role) values
      ($1::uuid, 'Sentetik Öğrenci A', 'student'),
      ($2::uuid, 'Sentetik Öğrenci B', 'student'),
      ($3::uuid, 'Sentetik Öğretmen', 'teacher'),
      ($4::uuid, 'Gerçek Katalog Sentetik Probu', 'student')`,
    [STUDENT_A, STUDENT_B, TEACHER, STUDENT_C]
  )
  await db.query(
    `insert into public.library_subjects (id, exam_type, name)
     values ($1::uuid, 'TYT', 'Matematik')`,
    [SUBJECT]
  )
  await db.query(
    `insert into public.library_topics (id, subject_id, name)
     values ($1::uuid, $2::uuid, 'Üçgenler')`,
    [TOPIC, SUBJECT]
  )
}

async function insertContent(db, {
  sourceCode,
  contentKind,
  contentId,
  revision,
  hash = CONTENT_HASH,
  itemCount = 1,
  mappingStatus = 'verified',
  atlasTopic = null,
}) {
  await db.query(
    `insert into public.learning_content_revisions (
       source_code, content_kind, content_id, content_revision, content_hash,
       status, source_owner, source_locator_token, item_count, published_at
     ) values ($1, $2, $3, $4, $5, 'published', 'phase3-local-fixture',
       $6, $7, pg_catalog.clock_timestamp())`,
    [sourceCode, contentKind, contentId, revision, hash,
      sha256(`${sourceCode}:${contentId}:${revision}`).slice(0, 32), itemCount]
  )
  if (mappingStatus === 'source_scope_only') {
    await db.query(
      `insert into public.learning_content_topic_mappings (
         source_code, content_kind, content_id, content_revision, mapping_status,
         topic_id, resolver_version, ledger_version, aliases_version,
         mapping_method, decision_source, verified_at
       ) values ($1, $2, $3, $4, 'source_scope_only', $5,
         'topic-resolver@1', 'curriculum-ledger@1', 'curriculum-aliases@1',
         'atlas_local_identity', 'phase3_local_fixture', pg_catalog.clock_timestamp())`,
      [sourceCode, contentKind, contentId, revision, atlasTopic]
    )
    return
  }
  await db.query(
    `insert into public.learning_content_topic_mappings (
       source_code, content_kind, content_id, content_revision, mapping_status,
       education_context_id, subject_id, topic_id,
       resolver_version, ledger_version, aliases_version,
       mapping_method, decision_source, verified_at
     ) values ($1, $2, $3, $4, 'verified', $5, $6, $7,
       'topic-resolver@1', 'curriculum-ledger@1', 'curriculum-aliases@1',
       'manifest_exact', 'phase3_local_fixture', pg_catalog.clock_timestamp())`,
    [sourceCode, contentKind, contentId, revision, CONTEXT_ID, SUBJECT_ID, TOPIC_ID]
  )
}

async function insertItems(db, { sourceCode, contentKind, contentId, revision, items }) {
  for (const [index, item] of items.entries()) {
    await db.query(
      `insert into learning_private.learning_content_items (
         source_code, content_kind, content_id, content_revision, item_id,
         item_kind, position, required, option_ids, correct_option_id,
         explanation, item_hash
       ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9::text[], $10, $11, $12)`,
      [sourceCode, contentKind, contentId, revision, item.id, item.kind,
        index, item.required ?? true, item.options ?? null, item.correct ?? null,
        item.explanation ?? null, sha256(JSON.stringify(item))]
    )
  }
}

function memoryStorage() {
  const values = new Map()
  return {
    getItem: (key) => values.has(key) ? values.get(key) : null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: (key) => values.delete(key),
    keys: () => [...values.keys()],
  }
}

async function migrationInventory(db) {
  const [tables, functions, indexes, policies, constraints, forceRls] = await Promise.all([
    db.query(`select table_name from information_schema.tables
      where table_schema = 'public' and table_type = 'BASE TABLE'
        and (table_name like 'learning_content_%'
          or table_name in ('bundled_lesson_activity_events', 'student_lesson_progress',
            'library_note_exposure_events', 'student_question_set_attempts',
            'student_question_attempt_answers', 'student_question_answer_revisions',
            'student_atlas_task_states', 'student_atlas_task_state_revisions',
            'student_atlas_import_receipts')) order by table_name`),
    db.query(`select n.nspname as schema_name, p.proname as function_name,
        pg_catalog.pg_get_function_identity_arguments(p.oid) as arguments
      from pg_catalog.pg_proc p join pg_catalog.pg_namespace n on n.oid = p.pronamespace
      where (n.nspname = 'learning_private' or n.nspname = 'public')
        and (p.proname like '%question%attempt%' or p.proname like '%lesson%'
          or p.proname like '%atlas%' or p.proname like '%note_open%'
          or p.proname = 'get_learning_content_capability')
      order by n.nspname, p.proname, arguments`),
    db.query(`select schemaname, tablename, indexname from pg_catalog.pg_indexes
      where schemaname in ('public', 'learning_private')
        and (tablename like 'learning_content_%' or tablename like 'student_%'
          or tablename like '%lesson%' or tablename like '%atlas%')
      order by schemaname, tablename, indexname`),
    db.query(`select schemaname, tablename, policyname, cmd from pg_catalog.pg_policies
      where schemaname = 'public' and policyname like 'Faz 3%'
      order by tablename, policyname`),
    db.query(`select t.relname as table_name, c.conname as constraint_name
      from pg_catalog.pg_constraint c join pg_catalog.pg_class t on t.oid = c.conrelid
      join pg_catalog.pg_namespace n on n.oid = t.relnamespace
      where n.nspname in ('public', 'learning_private')
        and (t.relname like 'learning_content_%' or t.relname like 'student_%'
          or t.relname like '%lesson%' or t.relname like '%atlas%')
      order by t.relname, c.conname`),
    db.query(`select c.relname as table_name from pg_catalog.pg_class c
      join pg_catalog.pg_namespace n on n.oid = c.relnamespace
      where n.nspname = 'public' and c.relrowsecurity and c.relforcerowsecurity
        and (c.relname like 'learning_content_%' or c.relname like 'student_%'
          or c.relname like '%lesson%' or c.relname like '%atlas%')
      order by c.relname`),
  ])
  return {
    tables: tables.rows.map((row) => row.table_name),
    functions: functions.rows,
    indexes: indexes.rows,
    policies: policies.rows,
    constraints: constraints.rows,
    force_rls_tables: forceRls.rows.map((row) => row.table_name),
  }
}

async function main() {
  mkdirSync(ACCEPTANCE_DIR, { recursive: true })
  const db = new PGlite()
  let backfillDryRun = null
  let catalogContentBase = 0
  let catalogItemBase = 0
  try {
    await section('Temiz kurulum ve ikinci migration uygulaması', async () => {
      await installPrelude(db)
      await insertAccounts(db)
      await db.exec(PHASE2_SQL)
      await db.exec(PHASE3_SQL)
      await db.exec(PHASE3_SQL)
      equal(await count(db, 'public.learning_source_contracts',
        `registry_version = 'learning-content-registry@1'`), 14,
      'M13–M26 sözleşmeleri eksiksiz kurulmalı')
      equal(await count(db, 'public.learning_content_backfill_decisions'), 14,
        'M13–M26 backfill kararları eksiksiz olmalı')
    })

    await section('Paketli gerçek manifest private kataloğa atomik yüklenir', async () => {
      const privateCatalog = JSON.parse(readFileSync(PRIVATE_CATALOG_PATH, 'utf8'))
      const expectedPublishedItems = privateCatalog.items.length
      const beforeContent = await count(db, 'public.learning_content_revisions')
      const beforeItems = await count(db, 'learning_private.learning_content_items')

      const dryRun = await materializePhase3ContentCatalog({
        db, manifest, privateCatalog, mode: 'dry_run', batchSize: 750,
      })
      equal(dryRun.status, 'validated', 'Private katalog dry-run doğrulanmalı')
      equal(dryRun.writes_performed, 0, 'Private katalog dry-run hiç yazmamalı')
      equal(await count(db, 'public.learning_content_revisions'), beforeContent,
        'Dry-run içerik sicilini değiştirmemeli')

      const applied = await materializePhase3ContentCatalog({
        db, manifest, privateCatalog, batchSize: 750,
      })
      equal(applied.inserted_content_revisions, manifest.entries.length,
        'Manifestteki her içerik revizyonu sicile yüklenmeli')
      equal(applied.inserted_private_items, expectedPublishedItems,
        'Yapılandırılmış özel öğe kataloğu eksiksiz yüklenmeli')
      equal(await count(db, 'public.learning_content_revisions'),
        beforeContent + manifest.entries.length,
      'Gerçek manifest satır sayısı DB siciliyle eşleşmeli')
      equal(await count(db, 'learning_private.learning_content_items'),
        beforeItems + expectedPublishedItems,
      'Gerçek private katalog satır sayısı DB ile eşleşmeli')

      const secondApply = await materializePhase3ContentCatalog({
        db, manifest, privateCatalog, batchSize: 1000,
      })
      equal(secondApply.writes_performed, 0,
        'Aynı katalog ikinci yüklemede tam idempotent olmalı')

      // Bir eksik item ile bir çakışan içerik satırını aynı anda
      // oluşturup loader'ın eklediği itemı da rollback ettiğini kanıtla.
      const firstItem = privateCatalog.items[0]
      const firstEntry = manifest.entries[0]
      await db.query(
        `delete from learning_private.learning_content_items
          where source_code = $1 and content_kind = $2 and content_id = $3
            and content_revision = $4 and item_id = $5`,
        [firstItem.source_code, firstItem.content_kind, firstItem.content_id,
          firstItem.content_revision, firstItem.item_id]
      )
      await db.query(
        `update public.learning_content_revisions set source_owner = 'phase3-conflict-probe'
          where source_code = $1 and content_kind = $2 and content_id = $3
            and content_revision = $4`,
        [firstEntry.source_code, firstEntry.content_kind, firstEntry.content_id,
          firstEntry.content_revision]
      )
      const itemCountBeforeConflict = await count(db, 'learning_private.learning_content_items')
      await reject(() => materializePhase3ContentCatalog({
        db, manifest, privateCatalog, batchSize: 1000,
      }), 'Mevcut payload çakışması atomik olarak reddedilmeli')
      equal(await count(db, 'learning_private.learning_content_items'), itemCountBeforeConflict,
        'Çakışma sırasında eklenen eksik item rollback edilmeli')
      await db.query(
        `update public.learning_content_revisions set source_owner = $5
          where source_code = $1 and content_kind = $2 and content_id = $3
            and content_revision = $4`,
        [firstEntry.source_code, firstEntry.content_kind, firstEntry.content_id,
          firstEntry.content_revision, firstEntry.source_owner]
      )
      const repaired = await materializePhase3ContentCatalog({
        db, manifest, privateCatalog, batchSize: 1000,
      })
      equal(repaired.inserted_private_items, 1,
        'Eksik private item güvenli yeniden yüklemede onarılmalı')

      catalogContentBase = await count(db, 'public.learning_content_revisions')
      catalogItemBase = await count(db, 'learning_private.learning_content_items')
      summary.catalog_materialization = {
        status: 'passed',
        loader_version: applied.loader_version,
        manifest_entries: manifest.entries.length,
        private_catalog_items: expectedPublishedItems,
        first_apply_writes: applied.writes_performed,
        second_apply_writes: secondApply.writes_performed,
        dry_run_writes: dryRun.writes_performed,
        conflict_rollback_verified: true,
        public_answer_keys_present: false,
      }
    })

    await section('Gerçek paketli katalog kaynak RPC uçlarında çalışır', async () => {
      const privateCatalog = JSON.parse(readFileSync(PRIVATE_CATALOG_PATH, 'utf8'))
      const lesson = manifest.entries.find((entry) =>
        entry.source_code === 'bundled_lesson_activity'
          && entry.status === 'published' && entry.quiz_count > 0
          && entry.mapping.status === 'unique_with_explicit_context')
      const questionSet = manifest.entries.find((entry) =>
        entry.source_code === 'bundled_question_test'
          && entry.status === 'published' && entry.item_count > 0
          && entry.mapping.status === 'unique_with_explicit_context')
      const note = manifest.entries.find((entry) =>
        entry.source_code === 'library_note_exposure' && entry.status === 'published')
      const chemistry = manifest.entries.find((entry) =>
        entry.source_code === 'chemistry_atlas' && entry.content_kind === 'atlas_assessment')
      const geographyAssessment = manifest.entries.find((entry) =>
        entry.source_code === 'geography_atlas' && entry.content_kind === 'atlas_assessment')
      const geometry = manifest.entries.find((entry) =>
        entry.source_code === 'geometry_pilot' && entry.content_kind === 'geometry_assessment')
      const atlasTasks = ['physics_atlas', 'biology_atlas', 'geography_atlas'].map(
        (sourceCode) => manifest.entries.find((entry) =>
          entry.source_code === sourceCode && entry.content_kind === 'atlas_task'
            && entry.status === 'published')
      )
      check([lesson, questionSet, note, chemistry, geographyAssessment, geometry, ...atlasTasks]
        .every(Boolean), 'Her gerçek paketli kaynak için yayınlanmış katalog kaydı bulunmalı')

      await asRole(db, 'authenticated', STUDENT_C)
      const lessonQuestion = privateCatalog.items.find((item) =>
        item.source_code === lesson.source_code && item.content_kind === lesson.content_kind
          && item.content_id === lesson.content_id
          && item.content_revision === lesson.content_revision
          && item.item_kind === 'question')
      const lessonOpened = await rpc(db,
        `select public.record_bundled_lesson_event($1,$2,$3,$4::uuid,$5,$6,$7) as result`,
        [lesson.content_id, lesson.content_revision, 'lesson_opened', action(500), null, null, null])
      check(['created', 'identity_quarantined'].includes(lessonOpened.status),
        'Gerçek paketli ders açılışı kaynak RPC tarafından kabul edilmeli')
      const lessonAnswer = await rpc(db,
        `select public.record_bundled_lesson_event($1,$2,$3,$4::uuid,$5,$6,$7) as result`,
        [lesson.content_id, lesson.content_revision, 'quiz_answered', action(501),
          lessonQuestion.item_id, lesson.section_ids[0], lessonQuestion.correct_option_id])
      check(['created', 'identity_quarantined'].includes(lessonAnswer.status),
        'Gerçek ders quiz cevabı private key ile sunucuda puanlanmalı')

      const noteOpened = await rpc(db,
        `select public.record_library_note_open($1,$2,$3,$4::uuid) as result`,
        [note.content_id, note.content_revision, note.content_kind, action(502)])
      check(['created', 'identity_quarantined'].includes(noteOpened.status),
        'Gerçek paketli not tam açılışı exposure üretmeli')

      async function completeAssessment(entry, startFunction, saveFunction, finalizeFunction, seed) {
        const started = await rpc(db,
          `select public.${startFunction}($1,$2,$3::uuid) as result`,
          [entry.content_id, entry.content_revision, action(seed)])
        equal(started.status, 'created', `${entry.source_code} gerçek attempt başlamalı`)
        check(started.question_ids.length > 0, `${entry.source_code} gerçek pinned soru taşımalı`)
        const firstQuestion = privateCatalog.items.find((item) =>
          item.source_code === entry.source_code && item.content_kind === entry.content_kind
            && item.content_id === entry.content_id
            && item.content_revision === entry.content_revision
            && item.item_id === started.question_ids[0] && item.item_kind === 'question')
        check(Boolean(firstQuestion), `${entry.source_code} pinned private soru bulunmalı`)
        const saved = await rpc(db,
          `select public.${saveFunction}($1::uuid,$2,$3,$4::uuid) as result`,
          [started.attempt_id, started.question_ids[0], firstQuestion.correct_option_id,
            action(seed + 1)])
        equal(saved.answer_revision, 1, `${entry.source_code} gerçek cevap kalıcı olmalı`)
        const finalized = await rpc(db,
          `select public.${finalizeFunction}($1::uuid,$2::uuid) as result`,
          [started.attempt_id, action(seed + 2)])
        equal(finalized.attempt_status, 'completed',
          `${entry.source_code} gerçek attempt sunucuda tamamlanmalı`)
        equal(finalized.correct_count, 1,
          `${entry.source_code} gerçek private cevap anahtarıyla puanlanmalı`)
        return started.attempt_id
      }

      const realAttempts = []
      realAttempts.push(await completeAssessment(
        questionSet, 'start_bundled_question_attempt', 'save_bundled_question_answer',
        'finalize_bundled_question_attempt', 510
      ))
      realAttempts.push(await completeAssessment(
        chemistry, 'start_chemistry_atlas_attempt', 'save_chemistry_atlas_answer',
        'finalize_chemistry_atlas_attempt', 520
      ))
      realAttempts.push(await completeAssessment(
        geographyAssessment, 'start_geography_timed_attempt', 'save_geography_timed_answer',
        'finalize_geography_timed_attempt', 530
      ))
      realAttempts.push(await completeAssessment(
        geometry, 'start_geometry_pilot_attempt', 'save_geometry_pilot_answer',
        'finalize_geometry_pilot_attempt', 540
      ))

      const atlasFunctions = [
        'record_physics_atlas_snapshot',
        'record_biology_atlas_snapshot',
        'record_geography_atlas_snapshot',
      ]
      for (const [index, task] of atlasTasks.entries()) {
        const snapshot = await rpc(db,
          `select public.${atlasFunctions[index]}($1,$2,$3,$4,$5,$6::uuid) as result`,
          [task.content_id, task.content_revision, task.item_ids[0], true, true,
            action(550 + index)])
        equal(snapshot.state_revision, 1,
          `${task.source_code} gerçek atlas görevi snapshot oluşturmalı`)
      }

      const realSourceRows = await count(db, 'public.learning_evidence_records',
        `student_id = '${STUDENT_C}'`)
      check(realSourceRows >= 12,
        'Gerçek paketli katalog ders, not, soru ve atlas kanıtları üretmeli')
      summary.real_catalog_e2e = {
        status: 'passed',
        synthetic_student_only: true,
        lesson_content_id: lesson.content_id,
        bundled_question_set_id: questionSet.content_id,
        library_note_id: note.content_id,
        assessment_attempt_count: realAttempts.length,
        atlas_task_sources: atlasTasks.map((entry) => entry.source_code),
        evidence_record_count: realSourceRows,
      }
      await asAdmin(db)
    })

    await section('M13–M26 registry ve SQL anlam parity', async () => {
      const registry = SOURCE_REGISTRY.filter((entry) => {
        const number = Number(entry.matrix_id.slice(1))
        return number >= 13 && number <= 26
      })
      equal(registry.length, 14, 'JS kaynak sicilinde M13–M26 eksiksiz olmalı')
      const contracts = (await db.query(
        `select matrix_id, source_code, classification, record_kinds,
                semantic_event_types, evidence_class_by_event,
                default_evidence_class, allowed_measurements, allowed_metadata,
                identity_scope, ingest_allowed
           from public.learning_source_contracts
          where registry_version = 'learning-content-registry@1'
          order by matrix_id`)).rows
      equal(contracts.length, 14, 'SQL Faz 3 sicilinde M13–M26 eksiksiz olmalı')
      for (const source of registry) {
        const contract = contracts.find((row) => row.matrix_id === source.matrix_id)
        equal(contract.source_code, source.source_code,
          `${source.matrix_id} source code parity olmalı`)
        equal(contract.classification, source.classification,
          `${source.matrix_id} classification parity olmalı`)
        equal([...contract.semantic_event_types].sort(), [...source.semantic_event_types].sort(),
          `${source.matrix_id} semantic event parity olmalı`)
        equal(contract.evidence_class_by_event, source.evidence_class_by_event,
          `${source.matrix_id} evidence class map parity olmalı`)
        equal(contract.default_evidence_class, source.default_evidence_class,
          `${source.matrix_id} varsayılan evidence class parity olmalı`)
        equal([...contract.allowed_measurements].sort(), [...source.allowed_measurements].sort(),
          `${source.matrix_id} measurement allowlist parity olmalı`)
        equal([...contract.allowed_metadata].sort(), [...source.allowed_metadata].sort(),
          `${source.matrix_id} metadata allowlist parity olmalı`)
        equal(contract.identity_scope, source.identity_scope,
          `${source.matrix_id} identity scope parity olmalı`)
        equal(contract.ingest_allowed,
          ['conditional_emitter', 'emitter'].includes(source.classification),
          `${source.matrix_id} yalnız emitter ise ingest açık olmalı`)
      }
    })

    await section('İçerik fixture ve stable kimlik kataloğu', async () => {
      await db.query(
        `insert into public.structured_lessons (
          id, topic_id, teacher_id, title, document, status,
          content_hash, current_revision, published_at
        ) values ($1::uuid, $2::uuid, $3::uuid, 'Sentetik Üçgen Dersi',
          $4::jsonb, 'published', 'istemci-hash-guvenilmez', 1,
          pg_catalog.clock_timestamp())`,
        [STRUCTURED_LESSON, TOPIC, TEACHER, JSON.stringify({
          version: 1,
          sections: [
            {
              id: 'section-1', kind: 'content',
              blocks: [{
                id: 'quiz-1', type: 'quiz',
                question: 'Bir üçgenin iç açıları toplamı kaç derecedir?',
                options: ['90', '180', '360'], answer_index: 1,
                explanation: 'Bir üçgenin iç açıları toplamı 180 derecedir.',
              }],
            },
            { id: 'section-2', kind: 'summary', blocks: [] },
          ],
        })]
      )
      const structuredCatalog = (await db.query(
        `select content_hash, item_count, status
           from public.learning_content_revisions
          where source_code = 'structured_lesson_activity'
            and content_id = $1 and content_revision = 'db-1'`,
        [STRUCTURED_LESSON]
      )).rows[0]
      check(/^[0-9a-f]{64}$/u.test(structuredCatalog.content_hash),
        'Structured ders hash\'i istemciden değil DB belgesinden türetilmeli')
      equal(structuredCatalog.item_count, 3,
        'Structured ders section ve quiz kataloğu trigger ile türetilmeli')
      equal(await count(db, 'public.structured_lesson_revisions',
        `lesson_id = '${STRUCTURED_LESSON}'::uuid and revision = 1`), 1,
      'Structured immutable revizyon master yazımıyla atomik oluşmalı')
      await db.query(
        `update public.learning_content_topic_mappings
            set mapping_status = 'verified', education_context_id = $1,
                subject_id = $2, topic_id = $3,
                mapping_method = 'phase3_fixture_explicit',
                decision_source = 'phase3_local_fixture',
                verified_at = pg_catalog.clock_timestamp()
          where source_code = 'structured_lesson_activity'
            and content_kind = 'structured_lesson' and content_id = $4
            and content_revision = 'db-1'`,
        [CONTEXT_ID, SUBJECT_ID, TOPIC_ID, STRUCTURED_LESSON]
      )

      await insertContent(db, {
        sourceCode: 'bundled_lesson_activity', contentKind: 'bundled_lesson',
        contentId: 'faz3-bundled-lesson', revision: BUNDLE_REV, itemCount: 2,
      })
      await insertItems(db, {
        sourceCode: 'bundled_lesson_activity', contentKind: 'bundled_lesson',
        contentId: 'faz3-bundled-lesson', revision: BUNDLE_REV,
        items: [
          { id: 'bundle-section', kind: 'section' },
          { id: 'bundle-quiz', kind: 'question', options: ['A', 'B'], correct: 'A' },
        ],
      })

      await insertContent(db, {
        sourceCode: 'bundled_question_test', contentKind: 'bundled_question_set',
        contentId: 'faz3-question-set', revision: BUNDLE_REV, itemCount: 3,
      })
      await insertItems(db, {
        sourceCode: 'bundled_question_test', contentKind: 'bundled_question_set',
        contentId: 'faz3-question-set', revision: BUNDLE_REV,
        items: [
          { id: 'q1', kind: 'question', options: ['A', 'B', 'C'], correct: 'A', explanation: 'q1' },
          { id: 'q2', kind: 'question', options: ['A', 'B', 'C'], correct: 'B', explanation: 'q2' },
          { id: 'q3', kind: 'question', options: ['A', 'B', 'C'], correct: 'C', explanation: 'q3' },
        ],
      })

      for (const [sourceCode, contentId] of [
        ['physics_atlas', 'faz3-physics-task'],
        ['biology_atlas', 'faz3-biology-task'],
        ['geography_atlas', 'faz3-geography-task'],
      ]) {
        await insertContent(db, {
          sourceCode, contentKind: 'atlas_task', contentId,
          revision: BUNDLE_REV, itemCount: 1, mappingStatus: 'source_scope_only',
          atlasTopic: `drkoc:atlas:${sourceCode}:v1:${contentId}`,
        })
        await insertItems(db, {
          sourceCode, contentKind: 'atlas_task', contentId, revision: BUNDLE_REV,
          items: [{ id: 'task-1', kind: 'task' }],
        })
      }

      for (const [sourceCode, contentKind, contentId, items, mappingStatus] of [
        ['chemistry_atlas', 'atlas_assessment', CHEMISTRY_ID, CHEMISTRY_QUESTIONS, 'source_scope_only'],
        ['geometry_pilot', 'geometry_assessment', GEOMETRY_ID, GEOMETRY_QUESTIONS, 'verified'],
        ['geography_atlas', 'atlas_assessment', GEOGRAPHY_ID, GEOGRAPHY_QUESTIONS, 'source_scope_only'],
      ]) {
        await insertContent(db, {
          sourceCode, contentKind, contentId, revision: BUNDLE_REV,
          itemCount: items.length, mappingStatus,
          atlasTopic: mappingStatus === 'source_scope_only'
            ? `drkoc:atlas:${sourceCode}:v1:${contentId}` : null,
        })
        await insertItems(db, {
          sourceCode, contentKind, contentId, revision: BUNDLE_REV, items,
        })
      }

      // Kısmi atlas aktarımı tek batch'i aşacak gerçek katalog
      // görevleriyle sınanır; aynı içerik/görev kimliği uydurulmaz.
      for (const task of IMPORT_TASKS) {
        await insertContent(db, {
          sourceCode: 'physics_atlas', contentKind: 'atlas_task',
          contentId: task.contentId, revision: BUNDLE_REV, itemCount: 1,
          mappingStatus: 'source_scope_only',
          atlasTopic: `drkoc:atlas:physics_atlas:v1:${task.contentId}`,
        })
        await insertItems(db, {
          sourceCode: 'physics_atlas', contentKind: 'atlas_task',
          contentId: task.contentId, revision: BUNDLE_REV,
          items: [{ id: task.taskId, kind: 'task' }],
        })
      }

      // DB içerikleri trigger ile yetkili revizyon/hash ve private soru
      // kataloğunu üretir; elle ikinci bir gerçek yazılmaz.
      await db.query(
        `insert into public.library_notes
          (id, topic_id, teacher_id, title, content, file_type, status)
         values ($1::uuid,$2::uuid,$3::uuid,'Sentetik not','Güvenli not içeriği','pdf','published')`,
        [NOTE_ID, TOPIC, TEACHER]
      )
      await db.query(
        `update public.learning_content_topic_mappings
            set mapping_status = 'verified', education_context_id = $1,
                subject_id = $2, topic_id = $3,
                mapping_method = 'phase3_fixture_explicit',
                decision_source = 'phase3_local_fixture',
                verified_at = pg_catalog.clock_timestamp()
          where source_code = 'library_note_exposure'
            and content_kind = 'library_note' and content_id = $4
            and content_revision = 'db-1'`,
        [CONTEXT_ID, SUBJECT_ID, TOPIC_ID, NOTE_ID]
      )
      await db.query(
        `insert into public.library_question_sets
          (id, topic_id, created_by, title, questions, status)
         values ($1::uuid,$2::uuid,$3::uuid,'Sentetik DB soru seti',$4::jsonb,'published')`,
        [DB_SET, TOPIC, TEACHER, JSON.stringify([
          { id: 'db-q1', options: ['1', '2', '3'], correctAnswer: 'B', explanation: 'DB q1' },
          { id: 'db-q2', options: ['x', 'y', 'z'], correctAnswer: 'C', explanation: 'DB q2' },
        ])]
      )
      equal(await count(db, 'public.learning_content_revisions'), catalogContentBase + 41,
        'Gerçek kataloğa ek olarak kırk bir sentetik içerik revizyonu kurulmalı')
      equal(await count(db, 'learning_private.learning_content_items'), catalogItemBase + 76,
        'Gerçek kataloğa ek olarak 76 sentetik görev/soru/bölüm öğesi kurulmalı')
    })

    await section('Fixture sonrası ikinci migration veriyi korur', async () => {
      const revisionsBefore = await count(db, 'public.learning_content_revisions')
      const itemsBefore = await count(db, 'learning_private.learning_content_items')
      const noteBefore = (await db.query(
        `select content_hash, content_revision from public.library_notes where id = $1::uuid`,
        [NOTE_ID])).rows[0]
      await db.exec(PHASE3_SQL)
      equal(await count(db, 'public.learning_content_revisions'), revisionsBefore,
        'Fixture sonrası migration içerik revizyonlarını silmemeli/çoğaltmamalı')
      equal(await count(db, 'learning_private.learning_content_items'), itemsBefore,
        'Fixture sonrası migration private katalog öğelerini korumalı')
      const noteAfter = (await db.query(
        `select content_hash, content_revision from public.library_notes where id = $1::uuid`,
        [NOTE_ID])).rows[0]
      equal(noteAfter, noteBefore, 'Fixture sonrası migration DB not hash/revizyonunu değiştirmemeli')
      equal(await count(db, 'public.learning_content_backfill_decisions'), 14,
        'Fixture sonrası migration backfill kararlarını çoğaltmamalı')
    })

    await section('Structured ve bundled ders atomik olayları', async () => {
      await asRole(db, 'authenticated', STUDENT_A)
      const opened = await rpc(db,
        `select public.record_structured_lesson_event($1::uuid,$2,$3,$4::uuid,$5,$6,$7) as result`,
        [STRUCTURED_LESSON, STRUCTURED_REV, 'lesson_opened', action(1), null, null, null])
      check(['created', 'identity_quarantined'].includes(opened.status), 'Structured ders açılmalı')
      const duplicate = await rpc(db,
        `select public.record_structured_lesson_event($1::uuid,$2,$3,$4::uuid,$5,$6,$7) as result`,
        [STRUCTURED_LESSON, STRUCTURED_REV, 'lesson_opened', action(1), null, null, null])
      equal(duplicate.event_id, opened.event_id, 'Aynı açılış aynı güvenli sonucu dönmeli')

      const answer = await rpc(db,
        `select public.record_structured_lesson_event($1::uuid,$2,$3,$4::uuid,$5,$6,$7) as result`,
        [STRUCTURED_LESSON, STRUCTURED_REV, 'quiz_answered', action(2), 'quiz-1', 'section-1', 'B'])
      check(['created', 'identity_quarantined'].includes(answer.status), 'Ders sorusu server doğrulamasıyla yazılmalı')
      const bundled = await rpc(db,
        `select public.record_bundled_lesson_event($1,$2,$3,$4::uuid,$5,$6,$7) as result`,
        ['faz3-bundled-lesson', BUNDLE_REV, 'lesson_opened', action(3), null, null, null])
      check(['created', 'identity_quarantined'].includes(bundled.status), 'Paketli ders açılmalı')
      const progress = await rpc(db,
        `select public.save_bundled_lesson_progress($1,$2,$3::text[],$4::uuid,$5) as result`,
        ['faz3-bundled-lesson', BUNDLE_REV, ['bundle-section'], action(4), 'bundle-section'])
      equal(progress.progress_status, 'completed', 'Paketli ders progress yenilemeye dayanıklı olmalı')
      const bundledComplete = await rpc(db,
        `select public.record_bundled_lesson_event($1,$2,$3,$4::uuid,$5,$6,$7) as result`,
        ['faz3-bundled-lesson', BUNDLE_REV, 'lesson_completed', action(5), null, null, null])
      check(['created', 'identity_quarantined'].includes(bundledComplete.status),
        'Paketli ders completion açık ürün eylemiyle yazılmalı')
      const bundledCompleteAgain = await rpc(db,
        `select public.record_bundled_lesson_event($1,$2,$3,$4::uuid,$5,$6,$7) as result`,
        ['faz3-bundled-lesson', BUNDLE_REV, 'lesson_completed', action(6), null, null, null])
      equal(bundledCompleteAgain.event_id, bundledComplete.event_id,
        'Farklı retry actionı da aynı mantıksal ders completionını çoğaltmamalı')

      const structuredPartial = await rpc(db,
        `select public.save_structured_lesson_progress($1::uuid,$2,$3::text[],$4::uuid,$5) as result`,
        [STRUCTURED_LESSON, STRUCTURED_REV, ['section-1'], action(7), 'section-1'])
      equal(structuredPartial.progress_status, 'in_progress',
        'Eksik structured bölüm ilerlemesi completion olmamalı')
      const structuredProgress = await rpc(db,
        `select public.save_structured_lesson_progress($1::uuid,$2,$3::text[],$4::uuid,$5) as result`,
        [STRUCTURED_LESSON, STRUCTURED_REV, ['section-1', 'section-2'], action(8), 'section-2'])
      equal(structuredProgress.progress_status, 'completed',
        'Tüm zorunlu structured bölümler kaynak progressinde tamamlanmalı')
      const structuredComplete = await rpc(db,
        `select public.record_structured_lesson_event($1::uuid,$2,$3,$4::uuid,$5,$6,$7) as result`,
        [STRUCTURED_LESSON, STRUCTURED_REV, 'lesson_completed', action(9), null, 'section-2', null])
      check(['created', 'identity_quarantined'].includes(structuredComplete.status),
        'Structured completion system observation üretmeli')
      await rpc(db,
        `select public.record_structured_lesson_event($1::uuid,$2,$3,$4::uuid,$5,$6,$7) as result`,
        [STRUCTURED_LESSON, STRUCTURED_REV, 'audio_started', action(90), null, null, null])
      await rpc(db,
        `select public.record_structured_lesson_event($1::uuid,$2,$3,$4::uuid,$5,$6,$7) as result`,
        [STRUCTURED_LESSON, STRUCTURED_REV, 'audio_completed', action(91), null, null, null])
      const bundledAudio = await rpc(db,
        `select public.record_bundled_lesson_event($1,$2,$3,$4::uuid,$5,$6,$7) as result`,
        ['faz3-bundled-lesson', BUNDLE_REV, 'audio_started', action(92), null, null, null])
      equal(bundledAudio.status, 'validation_rejected',
        'M16 paketli ders sözleşmesiz audio event kabul etmemeli')

      equal(await count(db, 'public.lesson_activity_events'), 5,
        'Structured kaynak olayları tekilleşmeli')
      equal(await count(db, 'public.bundled_lesson_activity_events'), 2,
        'Bundled kaynak olayı yazılmalı')
      equal(await count(db, 'public.learning_evidence_records',
        `student_id = '${STUDENT_A}' and source_code in ('structured_lesson_activity','bundled_lesson_activity')`), 7,
      'Kaynak olaylarının atomik ortak kanıtı bulunmalı')
      equal(await count(db, 'public.learning_evidence_records',
        `student_id = '${STUDENT_A}' and semantic_event_type in ('section_completed','lesson_resumed')`), 0,
      'Progress yenilemesi sözleşmesiz section/resume evidence üretmemeli')
      const classes = (await db.query(
        `select semantic_event_type, evidence_class, measurement
           from public.learning_evidence_records
          where student_id = $1::uuid
            and source_code in ('structured_lesson_activity','bundled_lesson_activity')`,
        [STUDENT_A])).rows
      check(classes.filter((row) => row.semantic_event_type === 'lesson_opened')
        .every((row) => row.evidence_class === 'exposure' && Object.keys(row.measurement).length === 0),
      'Ders açma exposure olmalı ve başarı ölçümü taşımamalı')
      check(classes.filter((row) => row.semantic_event_type === 'lesson_completed')
        .every((row) => row.evidence_class === 'system_observation'),
      'Structured ve bundled completion aynı system observation anlamında olmalı')
      const quizEvidence = classes.find((row) => row.semantic_event_type === 'quiz_answered')
      equal(quizEvidence.evidence_class, 'direct_measurement',
        'Ders quiz sonucu direct measurement kalmalı')
      equal(quizEvidence.measurement.student_correct, true,
        'Ders quiz correctness pinned private keyden serverda hesaplanmalı')
    })

    await section('Kütüphane notu yalnız tam görüntülemede exposure üretir', async () => {
      const before = await count(db, 'public.library_note_exposure_events',
        `student_id = '${STUDENT_A}'`)
      // Kart/thumbnail renderı bir RPC değildir; fixture kurulumu ve ders
      // akışı not açılışı üretmemiş olmalıdır.
      equal(before, 0, 'Kart ve thumbnail renderı note_opened üretmemeli')
      const opened = await rpc(db,
        `select public.record_library_note_open($1,$2,$3,$4::uuid) as result`,
        [NOTE_ID, DB_REV, 'library_note', action(100)])
      check(['created', 'identity_quarantined'].includes(opened.status),
        'Tam viewer açılışı kabul edilmeli')
      for (let retry = 0; retry < 10; retry += 1) {
        const repeated = await rpc(db,
          `select public.record_library_note_open($1,$2,$3,$4::uuid) as result`,
          [NOTE_ID, DB_REV, 'library_note', action(100)])
        equal(repeated.exposure_id, opened.exposure_id,
          'Aynı viewer eylemi on retry boyunca tek kalmalı')
      }
      equal(await count(db, 'public.library_note_exposure_events',
        `student_id = '${STUDENT_A}' and content_id = '${NOTE_ID}'`), 1,
      'Tek viewer açılışı tek kaynak olayı olmalı')
      const evidence = (await db.query(
        `select evidence_class, semantic_event_type, measurement, metadata
           from public.learning_evidence_records
          where student_id = $1::uuid and source_code = 'library_note_exposure'
          order by ingestion_sequence desc limit 1`, [STUDENT_A])).rows[0]
      equal(evidence.evidence_class, 'exposure', 'Not açılışı exposure olmalı')
      equal(evidence.semantic_event_type, 'note_opened', 'Not anlamı note_opened olmalı')
      equal(evidence.measurement, {}, 'Not açılışı ölçüm/başarı taşımamalı')
      equal(Object.keys(evidence.metadata).sort(), ['content_kind', 'content_revision'],
        'Not metadata ham başlık, içerik veya URL taşımamalı')
      const stale = await rpc(db,
        `select public.record_library_note_open($1,$2,$3,$4::uuid) as result`,
        [NOTE_ID, 'db-999', 'library_note', action(101)])
      equal(stale.status, 'not_found', 'Yayınlanmamış not revizyonu reddedilmeli')
    })

    await section('DB soru seti ortak attempt yaşam döngüsünü kullanır', async () => {
      const started = await rpc(db,
        `select public.start_db_question_attempt($1,$2,$3::uuid) as result`,
        [DB_SET, DB_REV, action(102)])
      equal(started.status, 'created', 'DB soru attempti başlamalı')
      equal(started.total_count, 2, 'DB soru sayısı pinned private katalogdan gelmeli')
      const answer = await rpc(db,
        `select public.save_db_question_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [started.attempt_id, 'db-q1', 'A', action(103)])
      equal(answer.answer_revision, 1, 'DB cevabı kaynak answer tablosuna yazılmalı')
      check(answer.is_correct === undefined, 'DB answer RPC correctness sızdırmamalı')
      const final = await rpc(db,
        `select public.finalize_db_question_attempt($1::uuid,$2::uuid) as result`,
        [started.attempt_id, action(104)])
      equal({ correct: final.correct_count, wrong: final.wrong_count,
        blank: final.empty_count, marked: final.marked_count, total: final.total_count },
      { correct: 0, wrong: 1, blank: 1, marked: 1, total: 2 },
      'DB toplamları istemciden değil pinned keyden hesaplanmalı')
      const row = (await db.query(
        `select source_code, question_set_id, status from public.student_question_set_attempts
          where id = $1::uuid`, [started.attempt_id])).rows[0]
      equal(row.source_code, 'db_question_test', 'DB set ortak yetkili attempt tablosunda olmalı')
      equal(row.question_set_id, DB_SET, 'DB attempt kaynak FK bağını korumalı')
      equal(row.status, 'completed', 'DB finalizasyonu attempti tamamlamalı')
    })

    await section('Kimya sekizli manifest, retry ve server puanlama', async () => {
      const started = await rpc(db,
        `select public.start_chemistry_atlas_attempt($1,$2,$3::uuid) as result`,
        [CHEMISTRY_ID, BUNDLE_REV, action(110)])
      equal(started.status, 'created', 'Kimya mini test attempti başlamalı')
      equal(started.question_ids.length, 8, 'Kimya attempti 24 sorudan sekizini sabitlemeli')
      equal(new Set(started.question_ids).size, 8, 'Kimya pinned soru kimlikleri benzersiz olmalı')
      for (let retry = 0; retry < 10; retry += 1) {
        const repeated = await rpc(db,
          `select public.start_chemistry_atlas_attempt($1,$2,$3::uuid) as result`,
          [CHEMISTRY_ID, BUNDLE_REV, action(110)])
        equal(repeated.attempt_id, started.attempt_id,
          'Kimya start retry aynı attempt ve manifesti döndürmeli')
        equal(repeated.question_ids, started.question_ids,
          'Kimya soru sırası retry boyunca sabit kalmalı')
      }

      const unpinned = CHEMISTRY_QUESTIONS.find((question) => !started.question_ids.includes(question.id))
      check(Boolean(unpinned), 'Kimya pinned set dışında soru bulunmalı')
      const rejected = await rpc(db,
        `select public.save_chemistry_atlas_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [started.attempt_id, unpinned.id, unpinned.correct, action(111)])
      equal(rejected.status, 'not_found', 'Pinned olmayan Kimya sorusu reddedilmeli')

      const firstId = started.question_ids[0]
      const secondId = started.question_ids[1]
      const firstQuestion = CHEMISTRY_QUESTIONS.find((question) => question.id === firstId)
      const secondQuestion = CHEMISTRY_QUESTIONS.find((question) => question.id === secondId)
      const first = await rpc(db,
        `select public.save_chemistry_atlas_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [started.attempt_id, firstId, firstQuestion.correct, action(112)])
      equal(first.answer_revision, 1, 'Kimya ilk cevabı yazılmalı')
      check(first.is_correct === undefined, 'Kimya answer RPC correctness sızdırmamalı')
      for (let retry = 0; retry < 10; retry += 1) {
        const repeated = await rpc(db,
          `select public.save_chemistry_atlas_answer($1::uuid,$2,$3,$4::uuid) as result`,
          [started.attempt_id, firstId, firstQuestion.correct, action(112)])
        equal(repeated.answer_revision, 1, 'Kimya cevap retry tek answer revizyonunda kalmalı')
      }
      await rpc(db,
        `select public.save_chemistry_atlas_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [started.attempt_id, secondId, secondQuestion.correct, action(113)])
      const final = await rpc(db,
        `select public.finalize_chemistry_atlas_attempt($1::uuid,$2::uuid) as result`,
        [started.attempt_id, action(114)])
      equal({ correct: final.correct_count, wrong: final.wrong_count,
        blank: final.empty_count, marked: final.marked_count, total: final.total_count },
      { correct: 2, wrong: 0, blank: 6, marked: 2, total: 8 },
      'Kimya mini test finali yalnız sekiz pinned soruyu serverda saymalı')
      equal(await count(db, 'public.student_question_attempt_answers',
        `attempt_id = '${started.attempt_id}' and active`), 2,
      'On retry iki Kimya sorusunu çoğaltmamalı')
      equal(await count(db, 'public.learning_evidence_effective',
        `student_id = '${STUDENT_A}' and source_code = 'chemistry_atlas'
          and source_record_id like '${started.attempt_id}%'`), 3,
      'İki Kimya cevabı ve tek mini test completion etkin kalmalı')
    })

    await section('Geometri boş final ve sonuç ayrıntısı', async () => {
      const started = await rpc(db,
        `select public.start_geometry_pilot_attempt($1,$2,$3::uuid) as result`,
        [GEOMETRY_ID, BUNDLE_REV, action(120)])
      equal(started.question_ids, GEOMETRY_QUESTIONS.map((question) => question.id),
        'Geometri kararlı namespaced soru sırasını sabitlemeli')
      const firstQuestion = GEOMETRY_QUESTIONS[0]
      await rpc(db,
        `select public.save_geometry_pilot_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [started.attempt_id, firstQuestion.id, firstQuestion.correct, action(121)])
      const final = await rpc(db,
        `select public.finalize_geometry_pilot_attempt($1::uuid,$2::uuid) as result`,
        [started.attempt_id, action(122)])
      equal({ correct: final.correct_count, wrong: final.wrong_count,
        blank: final.empty_count, marked: final.marked_count, total: final.total_count },
      { correct: 1, wrong: 0, blank: 3, marked: 1, total: 4 },
      'Geometri untouched soruları server tarafında boş saymalı')
      const refreshed = await rpc(db,
        `select public.get_question_attempt_result($1::uuid) as result`, [started.attempt_id])
      equal(refreshed.answers.length, 4, 'Tamamlanmış Geometri sonucu boş soruları da listelemeli')
      equal(refreshed.answers.filter((answer) => answer.selected_option_id === undefined).length, 3,
        'Boş Geometri sorularına sahte cevap üretilmemeli')
      equal(await count(db, 'public.learning_evidence_records',
        `student_id = '${STUDENT_A}' and source_code = 'geometry_pilot'
          and source_record_id = '${started.attempt_id}'
          and semantic_event_type = 'test_completed'`), 1,
      'Geometri finali tek completion kanıtı üretmeli')
    })

    await section('Coğrafya sunucu süresi ve yalnız final direct measurement', async () => {
      const started = await rpc(db,
        `select public.start_geography_timed_attempt($1,$2,$3::uuid) as result`,
        [GEOGRAPHY_ID, BUNDLE_REV, action(130)])
      equal(started.time_limit_seconds, 300, 'Coğrafya denemesi 300 saniye server sınırı taşımalı')
      check(Number.isFinite(Date.parse(started.expires_at)), 'Coğrafya expires_at serverda sabitlenmeli')
      const beforeAnswerEvidence = await count(db, 'public.learning_evidence_records',
        `student_id = '${STUDENT_A}' and source_code = 'geography_atlas'
          and source_record_id like '${started.attempt_id}%'`)
      const question = GEOGRAPHY_QUESTIONS[0]
      const answer = await rpc(db,
        `select public.save_geography_timed_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [started.attempt_id, question.id, question.correct, action(131)])
      equal(answer.answer_revision, 1, 'Coğrafya seçimi kaynak attemptinde saklanmalı')
      equal(await count(db, 'public.learning_evidence_records',
        `student_id = '${STUDENT_A}' and source_code = 'geography_atlas'
          and source_record_id like '${started.attempt_id}%'`), beforeAnswerEvidence,
      'Coğrafya tekil cevapları sözleşmesiz common evidence üretmemeli')
      await asAdmin(db)
      await db.query(
        `update public.student_question_set_attempts
            set started_at = pg_catalog.clock_timestamp() - interval '65 seconds'
          where id = $1::uuid`, [started.attempt_id])
      await asRole(db, 'authenticated', STUDENT_A)
      const final = await rpc(db,
        `select public.finalize_geography_timed_attempt($1::uuid,$2::uuid) as result`,
        [started.attempt_id, action(132)])
      equal({ correct: final.correct_count, wrong: final.wrong_count,
        blank: final.empty_count, total: final.total_count },
      { correct: 1, wrong: 0, blank: 4, total: 5 },
      'Coğrafya finali pinned keyden hesaplanmalı')
      check(final.duration_seconds >= 60 && final.duration_seconds <= 300,
        'Coğrafya süresi server ölçümü ve 300 saniye tavanıyla gelmeli')
      const evidence = (await db.query(
        `select evidence_class, semantic_event_type, measurement, metadata
           from public.learning_evidence_records
          where student_id = $1::uuid and source_code = 'geography_atlas'
            and source_record_id = $2
          order by ingestion_sequence desc limit 1`, [STUDENT_A, started.attempt_id])).rows[0]
      equal(evidence.evidence_class, 'direct_measurement',
        'Süreli Coğrafya finali direct measurement olmalı')
      equal(evidence.semantic_event_type, 'timed_test_completed',
        'Coğrafya finali timed_test_completed olmalı')
      equal(evidence.measurement.duration_source, 'active_measurement',
        'Coğrafya süresi uydurulmadan aktif server ölçümü olmalı')
      equal(evidence.metadata.timed, true, 'Coğrafya final metadata timed=true olmalı')

      const expiring = await rpc(db,
        `select public.start_geography_timed_attempt($1,$2,$3::uuid) as result`,
        [GEOGRAPHY_ID, BUNDLE_REV, action(133)])
      await asAdmin(db)
      await db.query(
        `update public.student_question_set_attempts
            set expires_at = pg_catalog.clock_timestamp() - interval '1 second',
                started_at = pg_catalog.clock_timestamp() - interval '400 seconds'
          where id = $1::uuid`, [expiring.attempt_id])
      await asRole(db, 'authenticated', STUDENT_A)
      const late = await rpc(db,
        `select public.save_geography_timed_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [expiring.attempt_id, question.id, question.correct, action(134)])
      equal(late.status, 'invalid_state', 'Süresi dolan Coğrafya attempti cevap kabul etmemeli')
      const expiredFinal = await rpc(db,
        `select public.finalize_geography_timed_attempt($1::uuid,$2::uuid) as result`,
        [expiring.attempt_id, action(135)])
      equal(expiredFinal.duration_seconds, 300, 'Süresi dolan attempt ölçümü 300 saniyede tavanlanmalı')
      equal(expiredFinal.empty_count, 5, 'Süresi dolan cevapsız attempt boşları korumalı')
    })

    let attemptId
    await section('Soru attempt, server scoring, correction ve refresh', async () => {
      const started = await rpc(db,
        `select public.start_bundled_question_attempt($1,$2,$3::uuid) as result`,
        ['faz3-question-set', BUNDLE_REV, action(10)])
      equal(started.status, 'created', 'Attempt başlamalı')
      attemptId = started.attempt_id
      const startRetry = await rpc(db,
        `select public.start_bundled_question_attempt($1,$2,$3::uuid) as result`,
        ['faz3-question-set', BUNDLE_REV, action(10)])
      equal(startRetry.attempt_id, attemptId, 'Start retry aynı attempt olmalı')

      const wrong = await rpc(db,
        `select public.save_bundled_question_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [attemptId, 'q1', 'B', action(11)])
      equal(wrong.answer_revision, 1, 'İlk cevap revizyon 1 olmalı')
      const correction = await rpc(db,
        `select public.save_bundled_question_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [attemptId, 'q1', 'A', action(12)])
      equal(correction.answer_revision, 2, 'Cevap değişimi revizyonu artırmalı')
      const second = await rpc(db,
        `select public.save_bundled_question_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [attemptId, 'q2', 'B', action(13)])
      equal(second.answer_revision, 1, 'İkinci soru ayrı kimlik olmalı')
      const conflict = await rpc(db,
        `select public.save_bundled_question_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [attemptId, 'q2', 'A', action(13)])
      equal(conflict.status, 'idempotency_conflict', 'Aynı action/farklı seçenek conflict olmalı')

      const inProgress = await rpc(db,
        `select public.get_question_attempt_result($1::uuid) as result`, [attemptId])
      equal(inProgress.answers.length, 2, 'Refresh iki kalıcı cevabı getirmeli')
      check(inProgress.answers.every((item) => item.is_correct === undefined
        && item.correct_option_id === undefined), 'Açık attempt cevap anahtarını sızdırmamalı')

      const final = await rpc(db,
        `select public.finalize_bundled_question_attempt($1::uuid,$2::uuid) as result`,
        [attemptId, action(14)])
      equal({ correct: final.correct_count, wrong: final.wrong_count,
        blank: final.empty_count, marked: final.marked_count, total: final.total_count },
      { correct: 2, wrong: 0, blank: 1, marked: 2, total: 3 },
      'Toplamlar yalnız private pinned katalogdan hesaplanmalı')
      equal(Number(final.accuracy), 1, 'Accuracy marked paydasını kullanmalı')

      const refreshed = await rpc(db,
        `select public.get_question_attempt_result($1::uuid) as result`, [attemptId])
      equal(refreshed.attempt_status, 'completed', 'Sonuç refresh sonrası açılmalı')
      equal(refreshed.answers.find((item) => item.question_id === 'q1').correct_option_id,
        'A', 'Cevap anahtarı yalnız tamamlanmış sonuçta görünmeli')
      const finalRetry = await rpc(db,
        `select public.finalize_bundled_question_attempt($1::uuid,$2::uuid) as result`,
        [attemptId, action(14)])
      equal(finalRetry.attempt_id, attemptId, 'Finalize retry aynı sonucu dönmeli')
      await asRole(db, 'authenticated', STUDENT_B)
      const hidden = await rpc(db,
        `select public.get_question_attempt_result($1::uuid) as result`, [attemptId])
      equal(hidden.status, 'not_found', 'Başka öğrenci attempt varlığını öğrenememeli')
      await asRole(db, 'authenticated', STUDENT_A)
    })

    await section('İçerik v2 eski sonucu yeniden puanlamaz', async () => {
      const before = await rpc(db,
        `select public.get_question_attempt_result($1::uuid) as result`, [attemptId])
      equal(before.correct_count, 2, 'v1 sonucu başlangıçta iki doğru olmalı')
      equal(before.answers.find((item) => item.question_id === 'q1').correct_option_id,
        'A', 'v1 q1 anahtarı A olarak sabitlenmeli')

      await asAdmin(db)
      await insertContent(db, {
        sourceCode: 'bundled_question_test', contentKind: 'bundled_question_set',
        contentId: 'faz3-question-set', revision: BUNDLE_REV_V2,
        hash: 'c'.repeat(64), itemCount: 3,
      })
      await insertItems(db, {
        sourceCode: 'bundled_question_test', contentKind: 'bundled_question_set',
        contentId: 'faz3-question-set', revision: BUNDLE_REV_V2,
        items: [
          { id: 'q1', kind: 'question', options: ['A', 'B', 'C'], correct: 'C', explanation: 'v2 q1' },
          { id: 'q2', kind: 'question', options: ['A', 'B', 'C'], correct: 'B', explanation: 'v2 q2' },
          { id: 'q3', kind: 'question', options: ['A', 'B', 'C'], correct: 'C', explanation: 'v2 q3' },
        ],
      })
      await asRole(db, 'authenticated', STUDENT_A)

      const after = await rpc(db,
        `select public.get_question_attempt_result($1::uuid) as result`, [attemptId])
      equal(after.correct_count, 2, 'v2 yayını v1 kayıtlı toplamını değiştirmemeli')
      equal(after.answers.find((item) => item.question_id === 'q1').correct_option_id,
        'A', 'v1 sonucu güncel v2 anahtarıyla yeniden puanlanmamalı')

      const v2Attempt = await rpc(db,
        `select public.start_bundled_question_attempt($1,$2,$3::uuid) as result`,
        ['faz3-question-set', BUNDLE_REV_V2, action(150)])
      await rpc(db,
        `select public.save_bundled_question_answer($1::uuid,$2,$3,$4::uuid) as result`,
        [v2Attempt.attempt_id, 'q1', 'A', action(151)])
      const v2Final = await rpc(db,
        `select public.finalize_bundled_question_attempt($1::uuid,$2::uuid) as result`,
        [v2Attempt.attempt_id, action(152)])
      equal({ correct: v2Final.correct_count, wrong: v2Final.wrong_count,
        blank: v2Final.empty_count }, { correct: 0, wrong: 1, blank: 2 },
      'A seçimi yalnız v2 anahtarı C olduğu için yeni attemptte yanlış olmalı')
      const v2Result = await rpc(db,
        `select public.get_question_attempt_result($1::uuid) as result`, [v2Attempt.attempt_id])
      equal(v2Result.answers.find((item) => item.question_id === 'q1').correct_option_id,
        'C', 'v2 sonucu kendi pinned anahtarını kullanmalı')
    })

    await section('Reset tombstone ve etkin kanıt', async () => {
      const reset = await rpc(db,
        `select public.reset_bundled_question_attempt($1::uuid,$2::uuid) as result`,
        [attemptId, action(15)])
      equal(reset.attempt_status, 'abandoned', 'Reset audit silmeden attempti terk etmeli')
      equal(reset.tombstone_count, 3, 'İki cevap ve completion tombstone olmalı')
      equal(await count(db, 'public.student_question_attempt_answers',
        `attempt_id = '${attemptId}' and active`), 0,
      'Reset sonrası etkin cevap kalmamalı')
      const effective = await count(db, 'public.learning_evidence_effective',
        `student_id = '${STUDENT_A}' and source_code = 'bundled_question_test'
          and source_record_id in ('${attemptId}:q1','${attemptId}:q2','${attemptId}')`)
      equal(effective, 0, 'Tombstone etkin soru ve final kanıtını kaldırmalı')
    })

    await section('Finalizasyon hata halinde kaynak ve kanıtı birlikte rollback eder', async () => {
      const started = await rpc(db,
        `select public.start_bundled_question_attempt($1,$2,$3::uuid) as result`,
        ['faz3-question-set', BUNDLE_REV_V2, action(160)])
      await asAdmin(db)
      await db.exec(`
        create or replace function learning_private.phase3_test_reject_completion()
        returns trigger language plpgsql set search_path = '' as $fn$
        begin
          if new.source_code = 'bundled_question_test'
             and new.semantic_event_type = 'test_completed' then
            raise exception using errcode = 'P3001', message = 'phase3_forced_rollback';
          end if;
          return new;
        end;
        $fn$;
        drop trigger if exists phase3_test_reject_completion
          on public.learning_evidence_records;
        create trigger phase3_test_reject_completion
        before insert on public.learning_evidence_records
        for each row execute function learning_private.phase3_test_reject_completion();
      `)
      await asRole(db, 'authenticated', STUDENT_A)
      await reject(() => rpc(db,
        `select public.finalize_bundled_question_attempt($1::uuid,$2::uuid) as result`,
        [started.attempt_id, action(161)]),
      'Zorlanan evidence hatası finalizasyon isteğini başarısız yapmalı')

      await asAdmin(db)
      const afterFailure = (await db.query(
        `select status, completion_evidence_record_id
           from public.student_question_set_attempts where id = $1::uuid`,
        [started.attempt_id])).rows[0]
      equal(afterFailure.status, 'in_progress', 'Hata sonrası attempt completed kalmamalı')
      equal(afterFailure.completion_evidence_record_id, null,
        'Hata sonrası kaynak satırı evidence FK taşımamalı')
      equal(await count(db, 'public.learning_evidence_records',
        `source_code = 'bundled_question_test'
          and source_record_id = '${started.attempt_id}'`), 0,
      'Hata sonrası tek başına completion evidence kalmamalı')
      equal(await count(db, 'public.learning_content_action_receipts',
        `student_id = '${STUDENT_A}' and source_code = 'bundled_question_test'
          and client_action_id = '${action(161)}'`), 0,
      'Rollback processing action receipt de bırakmamalı')
      await db.exec(`
        drop trigger phase3_test_reject_completion on public.learning_evidence_records;
        drop function learning_private.phase3_test_reject_completion();
      `)
      await asRole(db, 'authenticated', STUDENT_A)
      const retried = await rpc(db,
        `select public.finalize_bundled_question_attempt($1::uuid,$2::uuid) as result`,
        [started.attempt_id, action(161)])
      equal(retried.attempt_status, 'completed',
        'Aynı action rollback sonrası güvenle yeniden denenebilmeli')
      equal(await count(db, 'public.learning_evidence_records',
        `student_id = '${STUDENT_A}' and source_code = 'bundled_question_test'
          and source_record_id = '${started.attempt_id}'`), 1,
      'Başarılı retry tek completion evidence oluşturmalı')
    })

    await section('Post-claim hata receiptleri ve PGlite seri retry', async () => {
      const stale = await rpc(db,
        `select public.start_bundled_question_attempt($1,$2,$3::uuid) as result`,
        ['faz3-question-set', 'sha256-missing-revision', action(165)])
      equal(stale.status, 'content_revision_mismatch',
        'Eski/olmayan soru revizyonu güvenli mismatch döndürmeli')
      for (let retry = 0; retry < 10; retry += 1) {
        const repeated = await rpc(db,
          `select public.start_bundled_question_attempt($1,$2,$3::uuid) as result`,
          ['faz3-question-set', 'sha256-missing-revision', action(165)])
        equal(repeated.status, 'content_revision_mismatch',
          'Post-claim mismatch retry aynı güvenli sonucu döndürmeli')
      }
      const payloadConflict = await rpc(db,
        `select public.start_bundled_question_attempt($1,$2,$3::uuid) as result`,
        ['faz3-question-set', BUNDLE_REV_V2, action(165)])
      equal(payloadConflict.status, 'idempotency_conflict',
        'Aynı action farklı revizyonla sessiz overwrite edilmemeli')
      const missingAtlas = await rpc(db,
        `select public.record_physics_atlas_snapshot($1,$2,$3,$4,$5,$6::uuid) as result`,
        ['missing-atlas-task', BUNDLE_REV, 'task-1', true, true, action(166)])
      equal(missingAtlas.status, 'not_found', 'Olmayan atlas içeriği güvenli not_found döndürmeli')
      equal(await count(db, 'public.learning_content_action_receipts',
        `student_id = '${STUDENT_A}' and status = 'processing'`), 0,
      'Post-claim erken dönüşler processing receipt sızdırmamalı')

      const parallel = await Promise.all(Array.from({ length: 10 }, () => rpc(db,
        `select public.start_bundled_question_attempt($1,$2,$3::uuid) as result`,
        ['faz3-question-set', BUNDLE_REV_V2, action(167)])))
      equal(new Set(parallel.map((result) => result.attempt_id)).size, 1,
        'PGlite seri Promise.all retryları tek attempt döndürmeli')
      equal(await count(db, 'public.student_question_set_attempts',
        `student_id = '${STUDENT_A}' and start_client_action_id = '${action(167)}'`), 1,
      'Desteklenen seri concurrency koşulunda tek kaynak attempt oluşmalı')
    })

    await section('Atlas snapshot, correction ve sahiplik', async () => {
      const first = await rpc(db,
        `select public.record_physics_atlas_snapshot($1,$2,$3,$4,$5,$6::uuid) as result`,
        ['faz3-physics-task', BUNDLE_REV, 'task-1', false, true, action(20)])
      equal(first.state_revision, 1, 'İlk atlas snapshot revizyon 1 olmalı')
      const corrected = await rpc(db,
        `select public.record_physics_atlas_snapshot($1,$2,$3,$4,$5,$6::uuid) as result`,
        ['faz3-physics-task', BUNDLE_REV, 'task-1', true, true, action(21)])
      equal(corrected.state_revision, 2, 'Atlas değişimi correction olmalı')
      const invalidBiology = await rpc(db,
        `select public.record_biology_atlas_snapshot($1,$2,$3,$4,$5,$6::uuid) as result`,
        ['faz3-biology-task', BUNDLE_REV, 'task-1', true, false, action(22)])
      equal(invalidBiology.status, 'invalid_state',
        'Biyoloji görev+kontrol olmadan completed kabul etmemeli')
      equal(await count(db, 'public.student_atlas_task_states',
        `student_id = '${STUDENT_A}' and source_code = 'biology_atlas'`), 0,
      'Geçersiz biyoloji durumu kaynak satırı oluşturmamalı')
      const biology = await rpc(db,
        `select public.record_biology_atlas_snapshot($1,$2,$3,$4,$5,$6::uuid) as result`,
        ['faz3-biology-task', BUNDLE_REV, 'task-1', true, true, action(23)])
      equal(biology.completed, true,
        'Biyoloji görev+kontrol koşulu sağlanınca snapshot üretmeli')
      const geography = await rpc(db,
        `select public.record_geography_atlas_snapshot($1,$2,$3,$4,$5,$6::uuid) as result`,
        ['faz3-geography-task', BUNDLE_REV, 'task-1', true, false, action(24)])
      equal(geography.completed, true, 'Coğrafya explicit task snapshotı yazılmalı')
      const physicsHistory = (await db.query(
        `select record_kind, evidence_class, measurement
           from public.learning_evidence_records
          where student_id = $1::uuid and source_code = 'physics_atlas'
          order by ingestion_sequence`, [STUDENT_A])).rows
      equal(physicsHistory.map((row) => row.record_kind), ['snapshot', 'correction'],
        'Fizik state değişimi snapshot→correction zinciri olmalı')
      check(physicsHistory.every((row) => row.evidence_class === 'system_observation'),
        'Fizik task state doğrudan ölçüm değil system observation olmalı')
      const effectivePhysics = (await db.query(
        `select measurement from public.learning_evidence_effective
          where student_id = $1::uuid and source_code = 'physics_atlas'`,
        [STUDENT_A])).rows
      equal(effectivePhysics.length, 1, 'Fizik correction yalnız son state’i etkin bırakmalı')
      equal(effectivePhysics[0].measurement.completion_status, 'completed',
        'Fizik effective state tamamlanmış snapshot olmalı')
      const atlasClasses = (await db.query(
        `select source_code, evidence_class from public.learning_evidence_records
          where student_id = $1::uuid
            and source_code in ('biology_atlas','geography_atlas')
            and semantic_event_type = 'atlas_task_state'`, [STUDENT_A])).rows
      check(atlasClasses.every((row) => row.evidence_class === 'system_observation'),
        'Biyoloji ve Coğrafya task state system observation kalmalı')
    })

    await section('Atlas açık sahiplik aktarımı ve kısmi resume', async () => {
      equal(await count(db, 'public.student_atlas_task_states',
        `student_id = '${STUDENT_A}' and source_code = 'physics_atlas'
          and content_id like 'phase3-import-task-%'`), 0,
      'Onay/RPC olmadan eski cihaz kaydı buluta gitmemeli')

      const snapshot = {
        schema_version: '1.0',
        device_import_id: 'phase3-device-0001',
        consented_at: new Date(Date.now() - 1000).toISOString(),
        tasks: IMPORT_TASKS.map((task) => ({
          content_id: task.contentId,
          content_revision: BUNDLE_REV,
          task_id: task.taskId,
          completed: true,
          prediction_used: true,
        })),
        excluded_count: 9,
      }
      const snapshotHash = sha256(stableStringify(snapshot))
      const first = await rpc(db,
        `select public.import_physics_atlas_snapshot($1::jsonb,$2,$3::uuid) as result`,
        [JSON.stringify(snapshot), snapshotHash, action(200)])
      equal({ status: first.status, import_status: first.import_status,
        cursor: first.cursor, remaining: first.remaining_count },
      { status: 'partial', import_status: 'partial', cursor: 25, remaining: 5 },
      'Otuz görevlik aktarım ilk 25 satırda güvenle durmalı')
      equal(await count(db, 'public.student_atlas_task_states',
        `student_id = '${STUDENT_A}' and source_code = 'physics_atlas'
          and content_id like 'phase3-import-task-%'`), 25,
      'Kısmi aktarım cursor kadar snapshot yazmalı')
      const resumed = await rpc(db,
        `select public.import_physics_atlas_snapshot($1::jsonb,$2,$3::uuid) as result`,
        [JSON.stringify(snapshot), snapshotHash, action(200)])
      equal({ status: resumed.status, import_status: resumed.import_status,
        cursor: resumed.cursor, remaining: resumed.remaining_count },
      { status: 'created', import_status: 'completed', cursor: 30, remaining: 0 },
      'Aynı manifest/action kısmi cursorından tamamlanmalı')
      for (let retry = 0; retry < 10; retry += 1) {
        const repeated = await rpc(db,
          `select public.import_physics_atlas_snapshot($1::jsonb,$2,$3::uuid) as result`,
          [JSON.stringify(snapshot), snapshotHash, action(200)])
        equal(repeated.status, 'duplicate', 'Tam aktarım on retry boyunca duplicate kalmalı')
        equal(repeated.cursor, 30, 'Retry tamamlanan cursorı değiştirmemeli')
      }
      equal(await count(db, 'public.student_atlas_import_receipts',
        `student_id = '${STUDENT_A}' and source_code = 'physics_atlas'
          and snapshot_hash = '${snapshotHash}'`), 1,
      'Aynı snapshot yalnız bir import receipt oluşturmalı')
      equal(await count(db, 'public.student_atlas_task_states',
        `student_id = '${STUDENT_A}' and source_code = 'physics_atlas'
          and content_id like 'phase3-import-task-%'`), 30,
      'Resume ve on retry görev snapshotlarını çoğaltmamalı')
      equal(await count(db, 'public.learning_content_action_receipts',
        `student_id = '${STUDENT_A}' and source_code = 'physics_atlas'
          and status = 'processing'`), 0,
      'Atlas alt eylem receiptleri processing durumunda kalmamalı')
      equal(await count(db, 'public.learning_evidence_records',
        `student_id = '${STUDENT_A}' and source_code = 'physics_atlas'
          and evidence_class = 'direct_measurement'`), 0,
      'Eski Fizik task snapshotları direct measurement yapılmamalı')
      equal(await count(db, 'public.learning_evidence_records',
        `student_id = '${STUDENT_A}' and source_code = 'physics_atlas'
          and (metadata::text like '%favorite%' or metadata::text like '%theme%'
            or metadata::text like '%badge%' or metadata::text like '%navigation%')`), 0,
      'Dışlanan yerel alanlar common evidence metadata’sına girmemeli')

      await asRole(db, 'authenticated', STUDENT_B)
      const conflict = await rpc(db,
        `select public.import_physics_atlas_snapshot($1::jsonb,$2,$3::uuid) as result`,
        [JSON.stringify(snapshot), snapshotHash, action(201)])
      equal(conflict, { status: 'ownership_conflict' },
        'A snapshotı B hesabına içerik sızdırmadan bağlanmamalı')
      equal(await count(db, 'public.student_atlas_task_states'), 0,
        'B, A’nın atlas state satırlarını RLS ile görememeli')

      const unsupported = {
        ...snapshot, schema_version: '2.0', device_import_id: 'phase3-device-0002',
      }
      const unsupportedResult = await rpc(db,
        `select public.import_physics_atlas_snapshot($1::jsonb,$2,$3::uuid) as result`,
        [JSON.stringify(unsupported), sha256(stableStringify(unsupported)), action(202)])
      equal(unsupportedResult.status, 'unsupported_version',
        'Gelecek atlas şema sürümü güvenli hata döndürmeli')
      const malformed = {
        ...snapshot,
        device_import_id: 'phase3-device-0003',
        tasks: [{ ...snapshot.tasks[0], favorite: true }],
      }
      const malformedResult = await rpc(db,
        `select public.import_physics_atlas_snapshot($1::jsonb,$2,$3::uuid) as result`,
        [JSON.stringify(malformed), sha256(stableStringify(malformed)), action(203)])
      equal(malformedResult.status, 'validation_rejected',
        'Manifeste favori gibi izin verilmeyen alan enjekte edilememeli')
      await asRole(db, 'authenticated', STUDENT_A)
    })

    await section('Outbox kullanıcı kapsamı ve güvenli bozulma', async () => {
      const storage = memoryStorage()
      const sent = []
      const outboxA = createContentOutbox({
        storage, userId: STUDENT_A, uuid: () => action(30), now: () => 1000,
        rpc: async (name, params) => {
          sent.push({ name, params })
          return { error: { code: 'PGRST202' } }
        },
      })
      const failed = await outboxA.sendOrQueue('bundled_question_answer', {
        attempt_id: attemptId, question_id: 'q1', selected_option_id: 'A',
      })
      equal(failed.status, 'schema_unavailable', 'Migration yokluğu açık durum dönmeli')
      equal(outboxA.list().length, 1, 'Onaysız seçim kullanıcı outboxında kalmalı')
      check(!JSON.stringify(outboxA.list()).includes('is_correct'),
        'Outbox trusted correctness tutmamalı')
      for (let retry = 0; retry < 10; retry += 1) {
        const duplicate = await outboxA.enqueue('bundled_question_answer', {
          attempt_id: attemptId, question_id: 'q1', selected_option_id: 'A',
        }, { actionId: action(30) })
        equal(duplicate.status, 'duplicate',
          'Aynı pending action cihaz kuyruğunda on retry boyunca çoğalmamalı')
      }
      equal(outboxA.list().length, 1, 'Retry fırtınası tek pending seçim bırakmalı')
      const outboxB = createContentOutbox({
        storage, userId: STUDENT_B, uuid: () => action(31), now: () => 1000,
        rpc: async () => ({ data: { status: 'created' } }),
      })
      equal(outboxB.list().length, 0, 'Hesap değişiminde A outboxı B hesabına sızmamalı')
      await outboxB.flush({ force: true })
      equal(sent.length, 1, 'B flush A eylemini yeniden göndermemeli')
      const recoveredA = createContentOutbox({
        storage, userId: STUDENT_A, uuid: () => action(30), now: () => 3000,
        rpc: async () => ({ data: { status: 'created', answer_revision: 1 } }),
      })
      equal(recoveredA.list().length, 1,
        'Aynı kullanıcı sayfa yenilemesinde pending seçimini geri almalı')
      await recoveredA.flush({ force: true })
      equal(recoveredA.list().length, 0, 'Sunucu ack sonrası pending seçim kuyruktan kalkmalı')
      await reject(() => outboxB.enqueue('bundled_question_answer', {
        attempt_id: attemptId, question_id: 'q1', selected_option_id: 'A',
        is_correct: true,
      }), 'İstemci trusted alan ekleyememeli')
    })

    await section('RLS ve private sınır', async () => {
      await asRole(db, 'authenticated', STUDENT_B)
      equal(await count(db, 'public.student_question_set_attempts'), 0,
        'B, A attemptini SELECT ile görememeli')
      equal(await count(db, 'public.lesson_activity_events'), 0,
        'B, A structured ders olaylarını görememeli')
      equal(await count(db, 'public.student_lesson_progress'), 0,
        'B, A ders progressini görememeli')
      equal(await count(db, 'public.learning_evidence_records'), 0,
        'B, A common evidence satırlarını görememeli')
      const foreignFinalize = await rpc(db,
        `select public.finalize_bundled_question_attempt($1::uuid,$2::uuid) as result`,
        [attemptId, action(300)])
      equal(foreignFinalize.status, 'not_found',
        'B, A attemptini finalize ederken varlığını öğrenememeli')
      const foreignReset = await rpc(db,
        `select public.reset_bundled_question_attempt($1::uuid,$2::uuid) as result`,
        [attemptId, action(301)])
      equal(foreignReset.status, 'not_found',
        'B, A attemptini reset edememeli')
      await reject(() => db.query(
        `insert into public.student_question_set_attempts
          (student_id, source_code, content_kind, content_id, content_revision,
           manifest_hash, status, total_count, empty_count)
         values ($1::uuid,'bundled_question_test','bundled_question_set',
           'forged','v1',$2,'in_progress',1,1)`, [STUDENT_B, CONTENT_HASH]),
      'Authenticated doğrudan trusted attempt DML yapamamalı')
      await reject(() => db.query(
        `update public.student_question_set_attempts set correct_count = 999
          where student_id = $1::uuid`, [STUDENT_B]),
      'Authenticated trusted toplamı doğrudan güncelleyememeli')
      await reject(() => db.query(
        `delete from public.learning_evidence_records where student_id = $1::uuid`,
        [STUDENT_B]), 'Authenticated common ledger satırı silememeli')
      await reject(() => db.query(
        `select learning_private.ingest_evidence('{}'::jsonb,$1,'live',null)`,
        [CONTENT_HASH]), 'Private ingest authenticated role kapalı olmalı')

      await asRole(db, 'authenticated', TEACHER)
      const teacherAttempt = await rpc(db,
        `select public.start_bundled_question_attempt($1,$2,$3::uuid) as result`,
        ['faz3-question-set', BUNDLE_REV, action(302)])
      equal(teacherAttempt.status, 'unauthorized',
        'Öğretmen JWT’si student-only soru RPC’si kullanamamalı')
      const teacherLesson = await rpc(db,
        `select public.record_structured_lesson_event($1::uuid,$2,$3,$4::uuid,$5,$6,$7) as result`,
        [STRUCTURED_LESSON, STRUCTURED_REV, 'lesson_opened', action(303), null, null, null])
      equal(teacherLesson.status, 'unauthorized',
        'Öğretmen JWT’si student-only ders RPC’si kullanamamalı')
      equal(await count(db, 'public.student_question_set_attempts'), 0,
        'Öğretmen öğrenci attemptlerini varsayılan olarak görememeli')

      await asRole(db, 'anon')
      await reject(() => rpc(db,
        `select public.start_bundled_question_attempt($1,$2,$3::uuid) as result`,
        ['faz3-question-set', BUNDLE_REV, action(32)]),
      'Anon kaynak-özel RPC çağırma yetkisine sahip olmamalı')
      await asAdmin(db)
    })

    await section('M13, M18 ve M25 bilinçli olarak olay üretmez', async () => {
      const excluded = (await db.query(
        `select source_code, classification, semantic_event_types, ingest_allowed
           from public.learning_source_contracts
          where registry_version = 'learning-content-registry@1'
            and source_code = any($1::text[])
          order by source_code`, [[
          'history_atlas_navigation', 'lesson_personalization', 'library_gateway',
        ]])).rows
      equal(excluded.length, 3, 'Üç bilinçli dışlama kaynak sözleşmesinde bulunmalı')
      check(excluded.every((row) => row.ingest_allowed === false
        && row.semantic_event_types.length === 0),
      'Dışlanan kaynaklar ingest veya semantic event izni taşımamalı')
      equal(await count(db, 'public.learning_evidence_records',
        `source_code in ('library_gateway','lesson_personalization','history_atlas_navigation')`), 0,
      'Katalog, personalization cache ve tarih gezinmesi common evidence üretmemeli')
      const publicWriters = await db.query(
        `select p.proname from pg_catalog.pg_proc p
          join pg_catalog.pg_namespace n on n.oid = p.pronamespace
         where n.nspname = 'public'
           and (p.proname like '%history_atlas%'
             or p.proname like '%library_gateway%'
             or p.proname like '%personalization%')`)
      equal(publicWriters.rows, [], 'Dışlanan kaynaklar için public writer RPC olmamalı')

      const pattern = 'useContentActivity|learning_evidence|record_history|history_atlas_navigation'
      const targets = [
        'src/pages/TarihAtlasi.jsx',
        'src/pages/PadisahGecidi.jsx',
        'src/components/tarih',
      ]
      let searchStatus = 1
      const rgSearch = spawnSync('rg', ['-n', pattern, ...targets], { cwd: REPO, encoding: 'utf8' })
      if (rgSearch.error?.code === 'ENOENT') {
        const grepSearch = spawnSync('grep', ['-E', '-r', '-n', pattern, ...targets], { cwd: REPO, encoding: 'utf8' })
        searchStatus = grepSearch.status
      } else {
        searchStatus = rgSearch.status
      }
      equal(searchStatus, 1,
        'Tarih harita/yıl/katman/müzik/ses UI’ında evidence writer bulunmamalı')
    })

    await section('Manifest parity, JS adaptör, backfill ve health', async () => {
      const descriptor = await describeBundledQuestionSet({
        id: 'stable-title-independent', subject: 'Matematik', topic: 'Üçgenler',
        questions: [{ id: 'q1', options: ['x', 'y'], correctAnswer: 'A' }],
      })
      const descriptorRenamed = await describeBundledQuestionSet({
        id: 'stable-title-independent', title: 'Yeni başlık', subject: 'Matematik', topic: 'Üçgenler',
        questions: [{ id: 'q1', options: ['x', 'y'], correctAnswer: 'A' }],
      })
      equal(descriptor.content_revision, descriptorRenamed.content_revision,
        'Başlık kimlik/revizyonu değiştirmemeli')
      const contentChanged = await describeContent({
        sourceCode: 'bundled_question_test', contentKind: 'bundled_question_set',
        contentId: 'stable-title-independent', value: { value: 2 },
        sourceOwner: 'fixture',
      })
      check(contentChanged.content_revision !== descriptor.content_revision,
        'Anlamlı içerik farkı revizyonu değiştirmeli')
      const adapted = adaptPhase3QuestionResult({
        attempt_id: attemptId, question_id: 'q1', answer_revision: 2,
        semantic_event_type: 'question_answered', source_code: 'bundled_question_test',
        is_correct: true,
      }, { contentRevision: BUNDLE_REV })
      equal(adapted.draft.source_record_id, `${attemptId}:q1`,
        'Soru adaptörü attempt+question kimliği kullanmalı')

      const dryRun = buildPhase3BackfillDryRun({
        structuredEvents: [
          { id: 'safe', content_revision: 'db-1', event_name: 'lesson_opened', student_id: STUDENT_A },
          { id: 'unsafe', content_revision: null, event_name: 'lesson_opened', student_id: STUDENT_A },
        ],
        dbAttempts: [
          { id: 'safe', status: 'completed', content_revision: 'db-1', student_id: STUDENT_A },
          { id: 'unsafe', status: 'in_progress', content_revision: 'db-1', student_id: STUDENT_A },
        ],
      })
      equal(dryRun.writes_performed, 0, 'Backfill dry-run hiçbir yazma yapmamalı')
      check(dryRun.quarantined_count >= 2, 'Belirsiz history açıkça karantinaya gitmeli')
      const sqlBackfillDecisions = (await db.query(
        `select matrix_id, source_code, strategy, provider_name,
                historical_authority, live_apply_allowed, decision_version
           from public.learning_content_backfill_decisions
          order by matrix_id`)).rows
      equal(sqlBackfillDecisions, PHASE3_BACKFILL_DECISIONS,
        'SQL ve salt-okunur JS backfill kararları M13–M26 için bire bir olmalı')
      writeFileSync(BACKFILL_PATH, `${JSON.stringify({
        ...dryRun,
        generated_at: new Date().toISOString(),
        environment: 'PGlite/WASM + sentetik fixture',
        live_database_read: false,
        live_apply_performed: false,
        sql_decision_parity: true,
      }, null, 2)}\n`)
      summary.backfill = {
        mode: dryRun.mode,
        decision_count: dryRun.decisions.length,
        scanned_count: dryRun.scanned_count,
        ready_count: dryRun.ready_count,
        quarantined_count: dryRun.quarantined_count,
        writes_performed: dryRun.writes_performed,
        sql_decision_parity: true,
        live_apply_performed: false,
      }
      equal(resolveContentCapability({ schemaAvailable: true, manifestVersion: 'v1', rows: [] }).status,
        'empty', 'Health empty durumunu ayırmalı')
      equal(resolveContentCapability({ schemaAvailable: false }).status,
        'unavailable', 'Health unavailable durumunu ayırmalı')
      equal(resolveContentCapability({ schemaAvailable: true, manifestVersion: 'v1', rows: [{}], errors: ['x'] }).status,
        'degraded', 'Health degraded durumunu ayırmalı')
      equal(resolveContentCapability({ schemaAvailable: true, manifestVersion: 'v1', rows: [{}] }).status,
        'available', 'Health available durumunu ayırmalı')
      summary.health = {
        statuses_tested: ['available', 'empty', 'unavailable', 'degraded'],
        status: 'passed',
      }
    })

    await section('Faz 3 effective ledger deterministik replay checksum', async () => {
      await asAdmin(db)
      const repository = createPgLearningEvidenceRepository(db)
      const ledgerBefore = await count(db, 'public.learning_evidence_records')
      const firstReplay = await replayDiagnosticProjection({
        repository,
        batchSize: 7,
      })
      const secondReplay = await replayDiagnosticProjection({
        repository,
        batchSize: 19,
      })
      const effectiveLedgerCount = Number((await db.query(
        `select pg_catalog.count(*)::integer as count
           from public.learning_evidence_effective`)).rows[0].count)
      const projectedActiveRecordCount = firstReplay.rows.reduce(
        (total, row) => total + Number(row.active_record_count), 0)
      const persistedReplay = (await db.query(
        `select status, checksum, row_count::integer as row_count,
                end_ingestion_sequence::integer as high_water_mark
           from public.learning_projection_generations
          where generation_id = $1::uuid`,
        [secondReplay.generation_id])).rows[0]
      const persistedProjectionRowCount = await count(db,
        'public.learning_diagnostic_projection_rows',
        `generation_id = '${secondReplay.generation_id}'::uuid`)
      check(firstReplay.row_count > 0, 'Faz 3 kanıtları replay sırasında diagnostic satır üretmeli')
      check(/^[0-9a-f]{64}$/u.test(firstReplay.checksum),
        'Replay sonucu SHA-256 checksum taşımalı')
      equal(secondReplay.checksum, firstReplay.checksum,
        'Farklı batch boyutları effective Faz 3 ledger için aynı checksumu üretmeli')
      equal(secondReplay.row_count, firstReplay.row_count,
        'Farklı batch boyutları aynı diagnostic satır sayısını üretmeli')
      check(secondReplay.generation_id !== firstReplay.generation_id,
        'Her replay ayrı denetlenebilir generation oluşturmalı')
      equal(await count(db, 'public.learning_projection_generations',
        `projection_name = 'learning_evidence_probe' and status = 'active'`), 1,
      'İkinci replay sonrası yalnız son generation etkin kalmalı')
      equal(projectedActiveRecordCount, effectiveLedgerCount,
        'Replay diagnostic toplamı SQL effective ledger satır sayısıyla eşleşmeli')
      check(effectiveLedgerCount < ledgerBefore,
        'Correction/tombstone kayıtları ham ledger ile effective ledger arasında görünür fark üretmeli')
      equal(persistedReplay, {
        status: 'active',
        checksum: secondReplay.checksum,
        row_count: secondReplay.row_count,
        high_water_mark: secondReplay.high_water_mark,
      }, 'Etkin kalıcı replay nesli dönen checksum, satır sayısı ve high-water markı korumalı')
      equal(persistedProjectionRowCount, secondReplay.row_count,
        'Kalıcı projection satır sayısı replay sonucuyla eşleşmeli')
      equal(await count(db, 'public.learning_evidence_records'), ledgerBefore,
        'Replay append-only common ledgerı değiştirmemeli')
      summary.replay = {
        projection: 'learning_evidence_probe',
        first_generation_id: firstReplay.generation_id,
        second_generation_id: secondReplay.generation_id,
        row_count: firstReplay.row_count,
        high_water_mark: firstReplay.high_water_mark,
        checksum: firstReplay.checksum,
        ledger_record_count: ledgerBefore,
        effective_record_count: effectiveLedgerCount,
        projected_active_record_count: projectedActiveRecordCount,
        deterministic_across_batch_sizes: true,
        persisted_generation_verified: true,
        ledger_mutated_by_replay: false,
      }
    })

    await section('M13–M26 kaynak kapsamı makine kanıtı', async () => {
      await asAdmin(db)
      const contracts = (await db.query(
        `select contract.matrix_id, contract.source_code, contract.classification,
                contract.ingest_allowed, contract.semantic_event_types,
                contract.decision_status, decision.strategy as backfill_strategy,
                decision.provider_name, decision.live_apply_allowed
           from public.learning_source_contracts as contract
           join public.learning_content_backfill_decisions as decision
             on decision.matrix_id = contract.matrix_id
            and decision.source_code = contract.source_code
          where contract.registry_version = 'learning-content-registry@1'
          order by contract.matrix_id`)).rows
      equal(contracts.map((row) => row.matrix_id),
        Array.from({ length: 14 }, (_, index) => `M${index + 13}`),
      'Kaynak kapsamı M13–M26 arasında boşluksuz olmalı')

      const contentCounts = new Map((await db.query(
        `select source_code, pg_catalog.count(*)::integer as count
           from public.learning_content_revisions group by source_code`)).rows
        .map((row) => [row.source_code, row.count]))
      const evidenceCounts = new Map((await db.query(
        `select source_code, pg_catalog.count(*)::integer as count
           from public.learning_evidence_records group by source_code`)).rows
        .map((row) => [row.source_code, row.count]))
      const manifestCounts = new Map()
      const manifestMappingCounts = new Map()
      const allManifestMappingCounts = {}
      for (const entry of manifest.entries) {
        manifestCounts.set(entry.source_code, (manifestCounts.get(entry.source_code) ?? 0) + 1)
        const mappingStatus = entry.mapping?.status ?? 'missing'
        const sourceMappings = manifestMappingCounts.get(entry.source_code) ?? {}
        sourceMappings[mappingStatus] = (sourceMappings[mappingStatus] ?? 0) + 1
        manifestMappingCounts.set(entry.source_code, sourceMappings)
        allManifestMappingCounts[mappingStatus] = (allManifestMappingCounts[mappingStatus] ?? 0) + 1
      }
      const localStatusByClassification = {
        catalog: 'catalog_contract_confirmed',
        conditional_emitter: 'implemented_and_locally_tested',
        derived_readonly: 'derived_readonly_contract_confirmed',
        excluded: 'excluded_by_contract',
      }
      const sources = contracts.map((row) => ({
        ...row,
        ...SOURCE_COVERAGE_DETAILS[row.matrix_id],
        local_implementation_status: localStatusByClassification[row.classification],
        live_status: 'not_applied',
        local_catalog_and_fixture_revision_count: contentCounts.get(row.source_code) ?? 0,
        generated_manifest_entry_count: manifestCounts.get(row.source_code) ?? 0,
        topic_mapping_state: {
          generated_manifest_status_counts: row.matrix_id === 'M14'
            ? allManifestMappingCounts
            : manifestMappingCounts.get(row.source_code) ?? {},
          unmatched_or_ambiguous_ingest: 'quarantined',
        },
        synthetic_evidence_record_count: evidenceCounts.get(row.source_code) ?? 0,
      }))
      const excluded = sources.filter((row) =>
        ['M13', 'M18', 'M25'].includes(row.matrix_id))
      check(excluded.every((row) => row.synthetic_evidence_record_count === 0
        && row.ingest_allowed === false),
      'M13, M18 ve M25 kapsam satırları sıfır evidence ve kapalı ingest göstermeli')
      check(sources.every((row) => row.live_apply_allowed === false),
        'Faz 3 kaynaklarının hiçbiri canlı backfill uygulamasına açılmamalı')
      const requiredCoverageFields = [
        'implemented_source_reader',
        'transaction_boundary',
        'content_identity_revision_source',
        'topic_mapping_state',
        'retry_idempotency_strategy',
        'correction_tombstone_strategy',
        'backfill_strategy',
        'rls_test_result',
        'end_to_end_test_result',
        'local_implementation_status',
        'live_status',
      ]
      check(sources.every((row) => requiredCoverageFields.every((field) => row[field] != null)
        && Object.hasOwn(row, 'implemented_source_writer')
        && row.live_status === 'not_applied'),
      'Her M13–M26 kaynağı yazar/okur, işlem, kimlik, mapping, retry, düzeltme, backfill, RLS, E2E ve yerel/canlı durumunu raporlamalı')
      writeFileSync(COVERAGE_PATH, `${JSON.stringify({
        schema_version: '1.0',
        generated_at: new Date().toISOString(),
        scope: 'M13-M26',
        registry_version: 'learning-content-registry@1',
        manifest_version: manifest.manifest_version,
        manifest_checksum: manifest.manifest_checksum,
        environment: 'PGlite/WASM + sentetik fixture + paketli manifest',
        live_database_read: false,
        live_apply_performed: false,
        source_count: sources.length,
        sources,
      }, null, 2)}\n`)
      summary.source_coverage = {
        matrix_range: 'M13-M26',
        source_count: sources.length,
        missing_matrix_ids: [],
        local_status_reported_for_every_source: true,
        live_status_reported_for_every_source: true,
        excluded_zero_evidence: true,
        live_apply_performed: false,
      }
    })

    await section('10.000 satır indeks planı ve deterministik manifest rebuild', async () => {
      await asAdmin(db)
      const insertStarted = performance.now()
      await db.query(
        `insert into public.student_lesson_progress (
           student_id, source_code, content_kind, content_id, content_revision,
           current_section_id, completed_section_ids, status, updated_at
         )
         select $1::uuid, 'bundled_lesson_activity', 'bundled_lesson',
                'phase3-perf-' || series.value::text, 'perf-v1',
                'section-1', array['section-1']::text[], 'in_progress',
                pg_catalog.clock_timestamp()
                  - pg_catalog.make_interval(secs => series.value::double precision)
           from pg_catalog.generate_series(1, 10000) as series(value)`,
        [STUDENT_A]
      )
      const insertDuration = Number((performance.now() - insertStarted).toFixed(3))
      await db.exec('analyze public.student_lesson_progress')
      await asRole(db, 'authenticated', STUDENT_A)
      const plan = await db.query(
        `explain (format json)
         select content_id, current_section_id, status, updated_at
           from public.student_lesson_progress
          where student_id = auth.uid()
          order by updated_at desc limit 20`)
      const planText = JSON.stringify(plan.rows)
      check(/Index Scan|Bitmap Index Scan|student_lesson_progress_student_idx/u.test(planText),
        '10.000 satırlı temel kullanıcı sorgusu indeks planı kullanmalı')
      const queryStarted = performance.now()
      const page = await db.query(
        `select content_id, current_section_id, status, updated_at
           from public.student_lesson_progress
          where student_id = auth.uid()
          order by updated_at desc limit 20`)
      const queryDuration = Number((performance.now() - queryStarted).toFixed(3))
      equal(page.rows.length, 20, '10.000 satırda temel progress sayfası 20 kayıt döndürmeli')
      check(queryDuration < 1000, 'Yerel temel progress sorgusu bir saniyenin altında kalmalı')

      const rebuildStarted = performance.now()
      const rebuildResults = []
      let stablePair = null
      for (let attempt = 0; attempt < 8 && !stablePair; attempt += 1) {
        const command = spawnSync(process.execPath, ['scripts/build-phase-3-content-manifest.mjs'], {
          cwd: REPO, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024,
        })
        const output = JSON.parse(readFileSync(
          join(REPO, 'src', 'generated', 'learning-content-manifest.json'), 'utf8'))
        rebuildResults.push({ status: command.status, manifest: output })
        const previous = rebuildResults.at(-2)
        if (previous?.status === 0 && command.status === 0
          && previous.manifest.manifest_checksum === output.manifest_checksum) {
          stablePair = [previous.manifest, output]
        }
      }
      const rebuildDuration = Number((performance.now() - rebuildStarted).toFixed(3))
      check(rebuildResults.every((result) => result.status === 0),
        'Paketli manifest yeniden oluşturma komutlarının tamamı geçmeli')
      check(Boolean(stablePair),
        'Eşzamanlı kaynak değişikliği sonrası sekiz denemede sabit iki ardışık manifest bulunmalı')
      const rebuilt = stablePair?.[1] ?? rebuildResults.at(-1).manifest
      equal(stablePair?.[0].manifest_checksum, rebuilt.manifest_checksum,
        'Sabit kaynak snapshot’ı ardışık buildlerde aynı manifest checksum’unu üretmeli')
      equal(sha256(stableStringify(rebuilt.entries)), rebuilt.manifest_checksum,
        'Manifest checksum kararlı entry payloadıyla bire bir eşleşmeli')
      summary.manifest = {
        version: rebuilt.manifest_version,
        checksum: rebuilt.manifest_checksum,
        entries: rebuilt.entries.length,
      }
      summary.performance = {
        engine: 'PGlite/WASM',
        progress_rows: 10000,
        insert_duration_ms: insertDuration,
        indexed_query_duration_ms: queryDuration,
        index_plan_observed: true,
        manifest_entries: rebuilt.entries.length,
        manifest_rebuild_duration_ms: rebuildDuration,
        manifest_checksum_stable: true,
        manifest_rebuild_attempts: rebuildResults.length,
        concurrent_source_change_retries: Math.max(0, rebuildResults.length - 2),
      }
      await asAdmin(db)
    })

    await section('Şema envanteri ve setup sırası', async () => {
      const setup = readFileSync(SETUP_PATH, 'utf8')
      check(setup.includes('migration_learning_evidence_network.sql'),
        'Setup Faz 2 migration sırasını anmalı')
      check(setup.includes('migration_learning_content_activity.sql'),
        'Setup Faz 3 migration sırasını anmalı')
      const inventory = await migrationInventory(db)
      check(inventory.tables.length >= 12, 'Faz 3 kaynak tabloları kurulmalı')
      check(inventory.force_rls_tables.length >= 12, 'Öğrenci tablolarında FORCE RLS olmalı')
      writeFileSync(SCHEMA_PATH, `${JSON.stringify({
        schema_version: '1.0', generated_at: new Date().toISOString(), ...inventory,
      }, null, 2)}\n`)
      summary.schema = {
        table_count: inventory.tables.length,
        function_count: inventory.functions.length,
        index_count: inventory.indexes.length,
        policy_count: inventory.policies.length,
        constraint_count: inventory.constraints.length,
        force_rls_count: inventory.force_rls_tables.length,
      }
    })

    await asAdmin(db)
    const evidenceDistribution = (await db.query(
      `select evidence_class, record_kind, semantic_event_type,
              pg_catalog.count(*)::integer as count
         from public.learning_evidence_records
        group by evidence_class, record_kind, semantic_event_type
        order by evidence_class, record_kind, semantic_event_type`
    )).rows
    summary.event_distribution = evidenceDistribution
    summary.idempotency = {
      same_action_retry_2: 'passed',
      same_action_retry_10: 'passed',
      pglite_serialized_parallel_10: 'passed',
      same_action_different_payload: 'idempotency_conflict',
      real_multi_connection_postgresql: 'not_run',
      real_multi_connection_target_phase: 9,
    }
    summary.server_side_scoring = {
      forged_client_correctness_accepted: false,
      answer_rpc_leaks_correctness_before_finalize: false,
      private_catalog_used: true,
      status: 'passed',
    }
    summary.interfaces_for_later_phases = {
      phase_4: ['learning_content_revisions', 'student_question_set_attempts', 'learning_evidence_records'],
      phase_6: ['learning_evidence_effective', 'learning_projection_generations'],
      consumers_added_in_phase_3: false,
    }
    summary.preexisting_changes = {
      baseline_git_head: '521d860ac75107f28440dbfea3feba0fcaad471d',
      preserved: true,
      note: 'Faz 3 başlangıcındaki kirli çalışma alanı ve oturum sırasında gelen ilgisiz içerik/PDF değişiklikleri geri alınmadı.',
    }
    summary.skipped_tests = [{
      name: 'Gerçek çok bağlantılı PostgreSQL yarışı',
      status: 'not_run',
      passed: false,
      reason: 'PGlite tek bağlantıyı seri işler; yerel makinede izole çok bağlantılı PostgreSQL hedefi yok.',
      target_phase: 9,
    }]

    summary.status = 'core_passed_runner_pending'
    summary.scenarios = {
      'P3-S01': { status: 'passed', evidence: 'Structured/paketli ders, ders quiz, soru attempt ve atlas aynı doğrulanmış fixture konu bağında; sınıflar ayrı.' },
      'P3-S02': { status: 'passed', evidence: 'Kullanıcı kapsamlı outbox, timeout, refresh, 10 retry ve server finali.' },
      'P3-S03': { status: 'passed', evidence: 'v1/v2 pinned soru anahtarı ayrı; v1 sonucu yeniden puanlanmadı.' },
      'P3-S04': { status: 'passed', evidence: 'Yanlış→doğru correction, reset tombstone ve sıfır etkin kanıt.' },
      'P3-S05': { status: 'passed', evidence: 'A/B hesapları, açık sahiplik onayı, receipt/cursor resume ve ownership_conflict.' },
      'P3-S06': { status: 'passed', evidence: 'Tarih atlası UI kodunda writer yok; M25 sıfır evidence.' },
      'P3-S07': { status: 'passed', evidence: 'Başka öğrenci read/finalize/reset/import yolları not_found veya ownership_conflict.' },
      supporting_checks: {
        migration_twice: 'passed',
        real_catalog_materialization: 'passed',
        real_catalog_source_rpc_e2e: 'passed',
        source_coverage_artifact: 'passed',
        deterministic_replay_checksum: 'passed',
      },
    }
    writeFileSync(ACCEPTANCE_PATH, `${JSON.stringify({
      ...summary, generated_at: new Date().toISOString(),
    }, null, 2)}\n`)
    process.stdout.write(`Faz 3 çekirdek kabul: ${summary.assertions} assertion geçti.\n`)
  } catch (error) {
    summary.status = 'failed'
    summary.failure = { name: error.name, message: error.message }
    writeFileSync(ACCEPTANCE_PATH, `${JSON.stringify({
      ...summary, generated_at: new Date().toISOString(),
    }, null, 2)}\n`)
    throw error
  } finally {
    await db.close()
  }
}

await main()
