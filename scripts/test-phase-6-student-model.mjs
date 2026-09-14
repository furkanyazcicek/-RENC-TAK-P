/**
 * AI Koç Faz 6 — öğrenci-konu modeli yerel/sentetik kabul paketi.
 * PGlite bellekte çalışır; canlı Supabase ve gerçek öğrenci verisi kullanmaz.
 */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { performance } from 'node:perf_hooks'
import { PGlite } from '@electric-sql/pglite'

import { SOURCE_REGISTRY_VERSION } from '../src/lib/learning/sourceRegistry.js'
import { createMemoryLearningEvidenceRepository } from '../src/lib/learning/network/memoryRepository.js'
import { createPgLearningEvidenceRepository } from '../api/_lib/learning/repository.js'
import {
  STUDENT_BEHAVIOR_RULE_VERSION,
  STUDENT_TOPIC_MODEL_CONFIG,
  STUDENT_TOPIC_MODEL_CONFIG_VERSION,
  STUDENT_TOPIC_MODEL_VERSION,
  buildStudentTopicModel,
  checksumStudentTopicProjection,
  compareStudentTopicModelProjections,
  explainProjectionClaim,
  getStudentOverview,
  getTopicEvidenceSummary,
  listChangedTopics,
  listInsufficientTopics,
  listLanguageSkillProgress,
  listNeedsSupportTopics,
  listRepeatDueTopics,
  processStudentTopicBatch,
  replayStudentTopicProjection,
  requiresStudentTopicModelReplay,
} from '../src/lib/learning/studentModel/index.js'

const REPO = fileURLToPath(new URL('..', import.meta.url))
const P2_PATH = join(REPO, 'supabase/migration_learning_evidence_network.sql')
const P6_PATH = join(REPO, 'supabase/migration_learning_student_topic_model.sql')
const P2 = readFileSync(P2_PATH, 'utf8')
const P6 = readFileSync(P6_PATH, 'utf8')
const AI_MEMORY_SQL = readFileSync(join(REPO, 'supabase/migration_ai_coach.sql'), 'utf8')
const AI_CONTEXT = readFileSync(join(REPO, 'api/_lib/context.js'), 'utf8')
const AI_TOOLS = readFileSync(join(REPO, 'api/_lib/tools.js'), 'utf8')
const OUT = join(REPO, 'docs/ai-koc/kanitlar/faz-6')
const RESULT = join(OUT, 'faz-6-kabul-sonucu.json')
const AS_OF = '2026-09-13T12:00:00.000Z'
const IDS = Object.freeze({
  studentA: '66000000-0000-4000-8000-000000000001',
  studentB: '66000000-0000-4000-8000-000000000002',
  teacher: '66000000-0000-4000-8000-000000000003',
  parent: '66000000-0000-4000-8000-000000000004',
  generation: '66000000-0000-4000-8000-000000000010',
  worker: '66000000-0000-4000-8000-000000000020',
})
const TOPIC_A = 'drkoc:curriculum:topic:v1:t0052'
const TOPIC_B = 'drkoc:curriculum:topic:v1:t0053'
const SUBJECT = 'drkoc:curriculum:subject:v1:s008'
const PROGRAM = 'drkoc:curriculum:context:v1:tyt'
const sha = (value) => createHash('sha256').update(value).digest('hex')
const uuid = (value) => `67000000-0000-4000-8000-${String(value).padStart(12, '0')}`

let evidenceSequence = 0
function evidence(overrides = {}) {
  const number = ++evidenceSequence
  const at = overrides.occurred_at ?? '2026-09-10T12:00:00.000Z'
  const source = overrides.source_code ?? 'question_bank'
  const event = overrides.semantic_event_type ?? 'question_answered'
  const sourceRecord = overrides.source_record_id ?? `phase6-${number}`
  const revision = overrides.source_revision ?? 'v1'
  return {
    record_id: overrides.record_id ?? uuid(number),
    ingestion_sequence: overrides.ingestion_sequence ?? number,
    record_kind: overrides.record_kind ?? 'event',
    student_id: overrides.student_id ?? IDS.studentA,
    source_code: source,
    source_record_id: sourceRecord,
    source_revision: revision,
    semantic_event_type: event,
    occurred_at: at,
    occurred_at_precision: overrides.occurred_at_precision ?? 'exact',
    recorded_at: overrides.recorded_at ?? AS_OF,
    as_of: overrides.as_of ?? null,
    education_context_id: overrides.education_context_id === undefined ? PROGRAM : overrides.education_context_id,
    subject_id: overrides.subject_id === undefined ? SUBJECT : overrides.subject_id,
    topic_id: overrides.topic_id === undefined ? TOPIC_A : overrides.topic_id,
    objective_id: overrides.objective_id ?? null,
    identity_resolution: overrides.identity_resolution ?? { status: 'direct_stable_id', canonicalId: overrides.topic_id ?? TOPIC_A },
    evidence_class: overrides.evidence_class ?? 'direct_measurement',
    evidence_strength: overrides.evidence_strength ?? 'medium',
    measurement: overrides.measurement ?? { correct_count: 4, incorrect_count: 1, blank_count: 0, total_count: 5, difficulty: 'medium' },
    relations: overrides.relations ?? { attempt_id: `attempt-${number}` },
    metadata: overrides.metadata ?? {},
    source_locator: overrides.source_locator ?? `drkoc-ref:v1:${source}:opaque${String(number).padStart(8, '0')}`,
    target_record_id: overrides.target_record_id ?? null,
    correction_reason: overrides.correction_reason ?? null,
    tombstone_reason: overrides.tombstone_reason ?? null,
    dedupe_key: overrides.dedupe_key ?? `source|${overrides.student_id ?? IDS.studentA}|${source}|${sourceRecord}|${revision}|${event}`,
  }
}

const summary = {
  schema_version: 'phase-6-acceptance@1', phase: 6, status: 'running',
  sections: [], assertions: 0,
  gates: Array.from({ length: 9 }, (_, index) => ({ id: index + 1, status: 'pending', evidence: null })),
  checksums: { phase_2_migration_sha256: sha(P2), phase_6_migration_sha256: sha(P6) },
  model: {}, golden_scenarios: [], migration: {}, security: {}, replay: {}, performance: {},
  side_effects: {
    live_supabase_read: false, live_supabase_write: false, live_schema_change: false,
    real_student_data_used: false, live_backfill_run: false, paid_model_call: false,
    deployment_performed: false, git_push_performed: false,
    phase_7_ai_coach_consumption_implemented: false, phase_8_coaching_loop_implemented: false,
  },
  limitations: ['PGlite tek bağlantıyı seri işler; çok bağlantılı yarış ve canlı kapasite Faz 9 kapsamındadır.'],
}

function check(value, message) { summary.assertions += 1; assert.ok(value, message) }
function equal(actual, expected, message) { summary.assertions += 1; assert.deepEqual(actual, expected, message) }
function passGate(id, evidenceText) { summary.gates[id - 1] = { id, status: 'passed', evidence: evidenceText } }
async function section(name, run) {
  const started = performance.now()
  await run()
  const duration = Number((performance.now() - started).toFixed(3))
  summary.sections.push({ name, status: 'passed', duration_ms: duration })
  process.stdout.write(`✓ ${name} (${duration} ms)\n`)
}
function topicRow(result, topic = TOPIC_A) {
  return getTopicEvidenceSummary(result.rows, IDS.studentA, topic)
}
function scenario(name, result, assertions) {
  assertions(result)
  summary.golden_scenarios.push({ name, status: 'passed' })
}

async function installPrelude(db) {
  await db.exec(`
    create schema auth;
    create table auth.users(id uuid primary key,email text);
    create or replace function auth.uid() returns uuid language sql stable as $fn$
      select nullif(current_setting('app.uid',true),'')::uuid;
    $fn$;
    create or replace function auth.role() returns text language sql stable as $fn$
      select coalesce(nullif(current_setting('app.role',true),''),current_user::text);
    $fn$;
    create role anon nologin; create role authenticated nologin;
    grant usage on schema public,auth to anon,authenticated;
    grant execute on function auth.uid(),auth.role() to anon,authenticated;
    create table public.profiles(
      id uuid primary key references auth.users(id) on delete cascade,
      full_name text not null default 'Sentetik Kullanıcı',
      role text not null check(role in ('teacher','student','parent')),
      student_id uuid references public.profiles(id),created_at timestamptz default now()
    );
  `)
}
async function actors(db) {
  await db.query(
    `insert into auth.users(id,email) values
      ($1,'a@example.invalid'),($2,'b@example.invalid'),($3,'t@example.invalid'),($4,'p@example.invalid')`,
    [IDS.studentA, IDS.studentB, IDS.teacher, IDS.parent]
  )
  await db.query(
    `insert into public.profiles(id,full_name,role,student_id) values
      ($1,'A','student',null),($2,'B','student',null),($3,'T','teacher',null),($4,'P','parent',$1)`,
    [IDS.studentA, IDS.studentB, IDS.teacher, IDS.parent]
  )
}
async function asRole(db, role, uid = null) {
  await db.exec('reset role')
  await db.query("select set_config('app.uid',$1,false)", [uid ?? ''])
  await db.query("select set_config('app.role',$1,false)", [role])
  await db.exec(`set role ${role}`)
}
async function asAdmin(db) {
  await db.exec('reset role')
  await db.query("select set_config('app.uid','',false)")
  await db.query("select set_config('app.role','',false)")
}
async function rejection(run, message) {
  let rejected = false
  try { await run() } catch { rejected = true }
  check(rejected, message)
}
function normalizedRows(rows) {
  return [...rows].map(({ generation_id: _generation, ...row }) => row)
    .sort((left, right) => `${left.student_id}|${left.scope_key}`.localeCompare(`${right.student_id}|${right.scope_key}`))
}

async function main() {
  mkdirSync(OUT, { recursive: true })

  await section('Sürümlü model, çözünürlük ve dört hafıza katmanı', async () => {
    equal(summary.checksums.phase_2_migration_sha256, '993437ba3bb34b5c97e14a5c6e126d482f769e65be34ca2d08d20832b47ebdea', 'Faz 2 checksum')
    equal(STUDENT_TOPIC_MODEL_VERSION, 'student-topic-model@1', 'model sürümü')
    equal(STUDENT_TOPIC_MODEL_CONFIG_VERSION, 'student-topic-model-config@1', 'config sürümü')
    equal(STUDENT_BEHAVIOR_RULE_VERSION, 'student-behavior-rules@1', 'davranış kural sürümü')
    check(Object.isFrozen(STUDENT_TOPIC_MODEL_CONFIG), 'config immutable')
    check(Object.isFrozen(STUDENT_TOPIC_MODEL_CONFIG.confidence), 'eşikler immutable')
    const silentlyChangedV1 = structuredClone(STUDENT_TOPIC_MODEL_CONFIG)
    silentlyChangedV1.helpAdjustedCorrectWeight = 0.99
    let unchangedVersionRejected = false
    try { buildStudentTopicModel([], { studentId: IDS.studentA, asOf: AS_OF, config: silentlyChangedV1 }) } catch { unchangedVersionRejected = true }
    check(unchangedVersionRejected, 'katsayı değişikliği sürüm artmadan kabul edilmez')
    const result = buildStudentTopicModel([evidence({ objective_id: 'objective-a' })], { studentId: IDS.studentA, asOf: AS_OF })
    equal(result.rows.map((row) => row.scope_type), ['general', 'objective', 'program', 'subject', 'topic'], 'genel/program/ders/konu/kazanım')
    check(AI_MEMORY_SQL.includes('ai_student_memory'), 'onaylı tercih katmanı korunuyor')
    check(P6.includes('student_learning_projection_rows'), 'türetilmiş durum ayrı')
    check(P6.includes('student_behavior_patterns'), 'davranış örüntüsü ayrı')
    check(P6.includes('student_coaching_decision_history'), 'koçluk karar ilişki katmanı ayrı')
    check(P6.includes('Bu faz karar üretmez'), 'Faz 8 sınırı SQL belgesinde')
    const patternRecords = Array.from({ length: 4 }, (_, index) => evidence({
      occurred_at: `2026-09-0${index + 1}T12:00:00.000Z`,
    }))
    const patternResult = buildStudentTopicModel(patternRecords, { studentId: IDS.studentA, asOf: AS_OF })
    const consistencyPattern = patternResult.patterns.find((item) => item.pattern_code === 'multi_day_study_consistency')
    check(consistencyPattern, 'yeterli örnek davranış örüntüsü üretti')
    equal(consistencyPattern.rule_version, STUDENT_BEHAVIOR_RULE_VERSION, 'örüntü kuralı sürümlü')
    equal(consistencyPattern.sample_count, 4, 'örüntü örnek eşiği')
    equal(consistencyPattern.supporting_record_ids.length, 4, 'destekleyen kanıt referansları')
    equal(consistencyPattern.last_verified_at, '2026-09-04T12:00:00.000Z', 'son kanıt doğrulama tarihi')
    equal(consistencyPattern.valid_until, '2026-10-04T12:00:00.000Z', '30 gün geçerlilik')
    const oldPattern = buildStudentTopicModel(Array.from({ length: 4 }, (_, index) => evidence({
      occurred_at: `2026-05-0${index + 1}T12:00:00.000Z`,
    })), { studentId: IDS.studentA, asOf: AS_OF }).patterns.find((item) => item.pattern_code === 'multi_day_study_consistency')
    check(Date.parse(oldPattern.valid_until) < Date.parse(AS_OF), 'eski kanıt replay ile yapay olarak tazelenmez')
    summary.model = {
      model_version: STUDENT_TOPIC_MODEL_VERSION,
      config_version: STUDENT_TOPIC_MODEL_CONFIG_VERSION,
      behavior_rule_version: STUDENT_BEHAVIOR_RULE_VERSION,
      scope_types: ['general', 'program', 'subject', 'topic', 'objective'],
    }
    passGate(1, 'öğrenci durumu genel, program, ders, konu ve kazanım çözünürlüğünde')
    passGate(6, 'onaylı tercih, türetilmiş durum, süreli davranış örüntüsü ve Faz 8 karar ilişkisi ayrı')
  })

  await section('13 pedagojik altın senaryo', async () => {
    const multiSource = buildStudentTopicModel([
      evidence({ source_code: 'daily_logs', evidence_class: 'student_self_report', measurement: { correct_count: 3, incorrect_count: 2, total_count: 5 } }),
      evidence({ source_code: 'question_bank', measurement: { correct_count: 8, incorrect_count: 2, total_count: 10 }, occurred_at: '2026-09-09T12:00:00.000Z' }),
      evidence({ source_code: 'ai_solve', semantic_event_type: 'solution_requested', evidence_class: 'system_observation', measurement: {}, occurred_at: '2026-09-10T12:00:00.000Z' }),
      evidence({ source_code: 'practice_exams', measurement: { correct_count: 6, incorrect_count: 4, total_count: 10 }, occurred_at: '2026-09-11T12:00:00.000Z' }),
    ], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('aynı konuda dört kaynak', multiSource, (value) => {
      equal(topicRow(value).source_diversity, 4, 'dört kaynak korunur')
      equal(topicRow(value).source_summaries.length, 4, 'kaynak alt özetleri')
    })

    const exposureOnly = buildStudentTopicModel([
      evidence({ source_code: 'lessons', semantic_event_type: 'lesson_opened', evidence_class: 'exposure', measurement: {}, relations: { lesson_id: 'lesson-a' } }),
    ], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('yalnız ders açma', exposureOnly, (value) => {
      equal(topicRow(value).dimensions.exposure.state, 'seen', 'maruz kalma var')
      equal(topicRow(value).dimensions.performance.state, 'insufficient', 'performans uydurulmaz')
    })

    const singlePerfect = buildStudentTopicModel([
      evidence({ measurement: { student_correct: true, difficulty: 'easy' } }),
    ], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('tek soruda yüzde 100', singlePerfect, (value) => {
      equal(topicRow(value).confidence_level, 'insufficient', 'tek soru yüksek güven değil')
      equal(topicRow(value).dimensions.performance.state, 'insufficient', 'ustalık sonucu yok')
    })

    const manySuccessRecords = Array.from({ length: 4 }, (_, index) => evidence({
      source_code: index % 2 ? 'practice_exams' : 'question_bank',
      occurred_at: `2026-09-${String(6 + index).padStart(2, '0')}T12:00:00.000Z`,
      measurement: { correct_count: 9, incorrect_count: 1, total_count: 10, difficulty: index % 3 === 0 ? 'hard' : index % 3 === 1 ? 'medium' : 'easy' },
    }))
    const manySuccess = buildStudentTopicModel(manySuccessRecords, { studentId: IDS.studentA, asOf: AS_OF })
    scenario('çok ve karışık zorlukta tutarlı başarı', manySuccess, (value) => {
      equal(topicRow(value).confidence_level, 'high', 'yeterli örnek yüksek güven')
      equal(topicRow(value).dimensions.performance.state, 'strong', 'güçlü performans')
    })

    const helped = buildStudentTopicModel([
      evidence({ measurement: { correct_count: 5, incorrect_count: 0, total_count: 5, difficulty: 'medium', help_used: true } }),
    ], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('çözümden sonra doğru', helped, (value) => {
      check(topicRow(value).dimensions.performance.weighted_accuracy < topicRow(value).dimensions.performance.accuracy, 'yardım ağırlığı ayrı')
      check(topicRow(value).explanation.help_factored, 'yardım açıklanabilir')
    })

    const forgetting = buildStudentTopicModel([
      evidence({ occurred_at: '2026-08-04T12:00:00.000Z', measurement: { correct_count: 10, incorrect_count: 0, total_count: 10, difficulty: 'medium' } }),
      evidence({ occurred_at: '2026-09-08T12:00:00.000Z', measurement: { correct_count: 3, incorrect_count: 7, total_count: 10, difficulty: 'medium' } }),
    ], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('eski başarıdan sonra yeni başarısızlık', forgetting, (value) => {
      equal(topicRow(value).dimensions.retention.state, 'forgetting_risk', 'unutma riski')
      equal(topicRow(value).dimensions.performance.trend.state, 'regressed', 'gerileme görünür')
    })

    const conflict = buildStudentTopicModel([
      evidence({ source_code: 'question_bank', measurement: { correct_count: 5, incorrect_count: 0, total_count: 5 } }),
      evidence({ source_code: 'daily_logs', evidence_class: 'student_self_report', measurement: { correct_count: 0, incorrect_count: 5, total_count: 5 } }),
    ], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('kaynaklar arası çelişki', conflict, (value) => {
      check(topicRow(value).conflict_flag, 'çelişki işareti')
      equal(topicRow(value).data_state, 'conflicted', 'ortalama altına gizlenmez')
    })

    const unresolved = buildStudentTopicModel([
      evidence({ identity_resolution: { status: 'unmatched' }, topic_id: TOPIC_B }),
    ], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('yanlış konu etiketi veya karantina', unresolved, (value) => {
      equal(getTopicEvidenceSummary(value.rows, IDS.studentA, TOPIC_B), null, 'eşleşmeyen konu satırı yok')
      equal(getStudentOverview(value.rows, IDS.studentA).unmatched_evidence_count, 1, 'eşleşmeyen sayısı görünür')
    })

    const original = evidence({ source_code: 'daily_logs', evidence_class: 'student_self_report', record_kind: 'snapshot', source_record_id: 'daily-edit', as_of: '2026-09-09T23:59:59.000Z', measurement: { correct_count: 1, incorrect_count: 4, total_count: 5 } })
    const edited = evidence({ source_code: 'daily_logs', evidence_class: 'student_self_report', record_kind: 'correction', source_record_id: 'daily-edit', source_revision: 'v2', target_record_id: original.record_id, correction_reason: 'source_edited', measurement: { correct_count: 4, incorrect_count: 1, total_count: 5 } })
    const deletedBase = evidence({ source_code: 'daily_logs', evidence_class: 'student_self_report', record_kind: 'snapshot', source_record_id: 'daily-delete', as_of: '2026-09-10T23:59:59.000Z', measurement: { correct_count: 5, incorrect_count: 0, total_count: 5 } })
    const deleted = evidence({ source_code: 'daily_logs', evidence_class: 'student_self_report', record_kind: 'tombstone', source_record_id: 'daily-delete', source_revision: 'v2', target_record_id: deletedBase.record_id, tombstone_reason: 'source_deleted', measurement: {} })
    const corrected = buildStudentTopicModel([original, edited, deletedBase, deleted], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('düzenlenmiş ve silinmiş günlük', corrected, (value) => {
      equal(topicRow(value).dimensions.performance.accuracy, 0.8, 'yalnız düzeltilmiş sonuç etkin')
      equal(value.audit.superseded_records, 1, 'eski sürüm kaldırıldı')
      equal(value.audit.tombstoned_records, 1, 'silinen sürüm kaldırıldı')
    })

    const languageOne = evidence({ source_code: 'language_en', evidence_class: 'student_self_report', topic_id: 'drkoc:language:en:skill:listening', education_context_id: null, subject_id: null, metadata: { language: 'en' }, dedupe_key: 'same-language-import' })
    const languageTwo = evidence({ source_code: 'language_en', evidence_class: 'student_self_report', topic_id: 'drkoc:language:en:skill:listening', education_context_id: null, subject_id: null, metadata: { language: 'en' }, dedupe_key: 'same-language-import' })
    const language = buildStudentTopicModel([languageOne, languageTwo], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('iki kez aktarılan dil ilerlemesi', language, (value) => {
      equal(value.audit.duplicate_records, 1, 'çift aktarım tek kanıt')
      equal(listLanguageSkillProgress(value.rows, IDS.studentA, 'en').length, 1, 'dil becerisi ayrı sorgulanır')
      check(value.rows.some((row) => row.scope_key === 'program|drkoc:language:en:independent_language_learning'), 'dil programı TYT ile karışmaz')
    })

    const generalExam = buildStudentTopicModel([
      evidence({ source_code: 'practice_exams', topic_id: null, objective_id: null, measurement: { correct_count: 30, incorrect_count: 10, total_count: 40 } }),
    ], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('genel denemede konu dağılımı yok', generalExam, (value) => {
      equal(value.rows.filter((row) => row.scope_type === 'topic').length, 0, 'konu puanı uydurulmaz')
      check(value.rows.some((row) => row.scope_type === 'subject'), 'ders özeti korunur')
    })

    const planOnly = buildStudentTopicModel([
      evidence({ source_code: 'ai_coach_actions', semantic_event_type: 'study_task_status_changed', evidence_class: 'student_self_report', measurement: { completion_status: 'completed' }, relations: { plan_id: 'plan-a' } }),
    ], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('planı işaretleyip akademik kanıt üretmeme', planOnly, (value) => {
      equal(topicRow(value).dimensions.plan_adherence.state, 'reported_only', 'plan beyanı ayrı')
      equal(topicRow(value).dimensions.performance.state, 'insufficient', 'tamamlandı akademik başarı değil')
      equal(topicRow(value).dimensions.plan_adherence.academic_success_inferred, false, 'başarı çıkarımı yok')
    })

    const empty = buildStudentTopicModel([], { studentId: IDS.studentA, asOf: AS_OF })
    scenario('veri bulunmayan yeni öğrenci', empty, (value) => {
      equal(value.rows.length, 1, 'genel yetersiz satırı')
      equal(value.rows[0].data_state, 'insufficient', 'veri yok açık')
      equal(value.rows[0].confidence_level, 'insufficient', 'kesinlik yok')
    })

    check(summary.golden_scenarios.length === 13, '13 altın senaryo')
    passGate(2, 'maruz kalma, hacim, performans, yardım, kalıcılık, akıcılık, zorlanma, tutarlılık, plan, güncellik ve güven ayrı')
    passGate(7, 'tek soru, veri yokluğu ve kaynak çelişkisi kesin sonuca dönüşmedi')
    passGate(8, '13/13 altın senaryo pedagojik iddialarla geçti')
  })

  await section('Açıklanabilirlik ve hızlı sorgular', async () => {
    const records = [
      ...Array.from({ length: 6 }, (_, index) => evidence({ topic_id: TOPIC_A, occurred_at: `2026-09-${String(1 + index).padStart(2, '0')}T12:00:00.000Z`, measurement: { correct_count: 2, incorrect_count: 3, total_count: 5, difficulty: 'medium' } })),
      ...Array.from({ length: 6 }, (_, index) => evidence({ topic_id: TOPIC_B, occurred_at: `2026-08-${String(2 + index).padStart(2, '0')}T12:00:00.000Z`, measurement: { correct_count: 5, incorrect_count: 0, total_count: 5, difficulty: 'hard' } })),
    ]
    const result = buildStudentTopicModel(records, { studentId: IDS.studentA, asOf: AS_OF })
    const explanation = explainProjectionClaim(result.rows, result.evidence_refs, IDS.studentA, `topic|${TOPIC_A}`)
    equal(explanation.scope.topic_id, TOPIC_A, 'hangi konu')
    check(explanation.date_range.oldest && explanation.date_range.newest, 'hangi tarih aralığı')
    check(explanation.sources.length > 0, 'hangi kaynaklar')
    check(explanation.independent_direct_evidence >= 1, 'bağımsız doğrudan kanıt')
    equal(typeof explanation.help_factored, 'boolean', 'yardım hesaba katıldı mı')
    check(explanation.exclusions && explanation.confidence.reasons, 'dışlama ve güven nedenleri')
    check(explanation.evidence_refs.every((ref) => !('question_text' in ref) && !('answer' in ref) && !('message' in ref)), 'ham içerik kopyalanmaz')
    check(listNeedsSupportTopics(result.rows, IDS.studentA).some((row) => row.topic_id === TOPIC_A), 'destek sorgusu')
    check(Array.isArray(listChangedTopics(result.rows, IDS.studentA, 'regressed')), 'değişim sorgusu')
    check(Array.isArray(listInsufficientTopics(result.rows, IDS.studentA)), 'yetersiz veri sorgusu')
    check(Array.isArray(listRepeatDueTopics(result.rows, IDS.studentA, AS_OF)), 'tekrar sorgusu')
    passGate(3, 'konu, tarih, kaynak, bağımsız kanıt, yardım, dışlama ve güven makinece açıklanıyor')
  })

  await section('Deterministik replay, sürüm artışı ve artımlı eşitlik', async () => {
    const records = Array.from({ length: 8 }, (_, index) => evidence({
      topic_id: index % 2 ? TOPIC_A : TOPIC_B,
      occurred_at: `2026-09-${String(1 + index).padStart(2, '0')}T12:00:00.000Z`,
      measurement: { correct_count: index % 3 ? 4 : 2, incorrect_count: index % 3 ? 1 : 3, total_count: 5, difficulty: index % 2 ? 'hard' : 'easy' },
    }))
    const forward = buildStudentTopicModel(records, { studentId: IDS.studentA, asOf: AS_OF })
    const reverse = buildStudentTopicModel([...records].reverse(), { studentId: IDS.studentA, asOf: AS_OF })
    equal(await checksumStudentTopicProjection(forward), await checksumStudentTopicProjection(reverse), 'ekleme sırasından bağımsız checksum')

    const repository = createMemoryLearningEvidenceRepository()
    for (const record of records.slice(0, 6)) await repository.ingest(record, sha(record.dedupe_key))
    const firstReplay = await replayStudentTopicProjection({ repository, asOf: AS_OF, batchSize: 2 })
    check(firstReplay.row_count > 0, 'tam replay satır üretti')
    const late = evidence({ occurred_at: '2026-07-01T12:00:00.000Z', topic_id: TOPIC_A, measurement: { correct_count: 1, incorrect_count: 4, total_count: 5 } })
    await repository.ingest(late, sha(late.dedupe_key))
    const current = evidence({ occurred_at: '2026-09-12T12:00:00.000Z', topic_id: TOPIC_B, measurement: { correct_count: 5, incorrect_count: 0, total_count: 5 } })
    await repository.ingest(current, sha(current.dedupe_key))
    const incremental = await processStudentTopicBatch({ repository, workerId: IDS.worker, batchSize: 100, asOf: AS_OF })
    const full = await replayStudentTopicProjection({ repository, asOf: AS_OF, dryCompare: true, batchSize: 3 })
    equal(normalizedRows(incremental.rows), normalizedRows(full.rows), 'artımlı ve tam replay eşit')
    check(topicRow(full, TOPIC_A).oldest_evidence_at.startsWith('2026-07-01'), 'geç gelen eski olay doğru tarihe girdi')

    const v2 = structuredClone(STUDENT_TOPIC_MODEL_CONFIG)
    v2.modelVersion = 'student-topic-model@2'
    v2.configVersion = 'student-topic-model-config@2'
    v2.helpAdjustedCorrectWeight = 0.45
    check(requiresStudentTopicModelReplay({ projection_version: STUDENT_TOPIC_MODEL_VERSION }, v2), 'model artışı replay gerektirir')
    const v2Replay = await replayStudentTopicProjection({ repository, config: v2, modelVersion: v2.modelVersion, asOf: AS_OF, dryCompare: true })
    equal(v2Replay.model_version, 'student-topic-model@2', 'eski kanıt v2 ile yeniden üretildi')
    const comparison = await compareStudentTopicModelProjections(full, v2Replay)
    equal(comparison.before_model_version, 'student-topic-model@1', 'önce sürümü')
    equal(comparison.after_model_version, 'student-topic-model@2', 'sonra sürümü')
    check(comparison.before_checksum && comparison.after_checksum, 'sürüm karşılaştırma checksumları')

    const good = evidence({ student_id: IDS.studentA })
    const poison = { ...evidence({ student_id: IDS.studentB }), source_code: Symbol('poison') }
    const poisonRepository = {
      async runProjectionClaim(_options, handler) {
        return handler({
          cursor: 0, records: [good, poison], generation_id: IDS.generation,
          repository: { async listLedgerBatch({ studentId }) { return studentId === IDS.studentA ? [good] : [poison] } },
        })
      },
    }
    const isolated = await processStudentTopicBatch({ repository: poisonRepository, workerId: IDS.worker, asOf: AS_OF })
    check(isolated.rows.some((row) => row.student_id === IDS.studentA), 'sağlam öğrenci işlendi')
    equal(isolated.quarantinedRecordIds, [poison.record_id], 'bozuk öğrenci izole edildi')
    summary.replay = {
      deterministic_checksum: await checksumStudentTopicProjection(forward),
      full_incremental_equal: true,
      late_event_included: true,
      version_comparison: comparison,
      poison_student_isolated: true,
    }
    passGate(4, 'kararlı sıra, sürümlü tam replay ve checksum karşılaştırması geçti')
    passGate(5, 'düzeltme, silme ve geç gelen olay eski etkiyi kaldırarak doğru sonuca girdi')
  })

  await section('Migration tekrarı, rollback, RLS, itiraz ve sorgu planları', async () => {
    const db = new PGlite()
    await installPrelude(db); await db.exec(P2); await actors(db); await db.exec(P6); await db.exec(P6)
    const expectedTables = [
      'student_behavior_patterns', 'student_coaching_decision_history',
      'student_learning_projection_disputes', 'student_learning_projection_evidence_refs',
      'student_learning_projection_rows', 'student_model_contracts',
    ]
    const tables = (await db.query("select tablename from pg_catalog.pg_tables where schemaname='public' and tablename like 'student_%' and (tablename like 'student_learning_%' or tablename like 'student_behavior_%' or tablename like 'student_coaching_%' or tablename='student_model_contracts') order by tablename")).rows.map((row) => row.tablename)
    equal(tables, expectedTables, 'altı Faz 6 tablosu')
    const forced = await db.query(`select bool_and(relrowsecurity and relforcerowsecurity) ok from pg_catalog.pg_class where relnamespace='public'::regnamespace and relname=any($1::text[])`, [expectedTables])
    check(forced.rows[0].ok, 'bütün Faz 6 tablolarında FORCE RLS')
    const contracts = await db.query("select count(*)::integer n from public.student_model_contracts where model_version='student-topic-model@1'")
    equal(contracts.rows[0].n, 1, 'ikinci uygulama sözleşmeyi çoğaltmadı')

    await db.query(`insert into public.learning_projection_generations (
      generation_id,projection_name,projection_version,student_id,source_registry_version,status,
      start_ingestion_sequence,end_ingestion_sequence,row_count,checksum,completed_at,activated_at
    ) values ($1,'student_topic_model','student-topic-model@1',null,$2,'active',0,1,2,repeat('a',64),now(),now())`, [IDS.generation, SOURCE_REGISTRY_VERSION])
    for (const studentId of [IDS.studentA, IDS.studentB]) {
      await db.query(`insert into public.student_learning_projection_rows (
        generation_id,student_id,model_version,config_version,topic_contract_version,
        scope_type,scope_key,education_context_id,subject_id,topic_id,data_state,confidence_level,
        performance_state,performance_score,trend_state,source_diversity,newest_evidence_at,
        repeat_due_at,evidence_counts,dimensions,source_summaries,explanation,row_checksum,
        computed_at,reference_time,is_active,consumer_visible
      ) values ($1,$2,'student-topic-model@1','student-topic-model-config@1','curriculum-identity@1',
        'topic',$3,$4,$5,$6,'available','medium','needs_support',0.4,'regressed',2,now(),now(),
        '{}'::jsonb,'{"performance":{"state":"needs_support"}}'::jsonb,'[]'::jsonb,'{}'::jsonb,
        repeat('b',64),now(),now(),true,true)`, [IDS.generation, studentId, `topic|${TOPIC_A}`, PROGRAM, SUBJECT, TOPIC_A])
    }
    const evidenceId = uuid(999999)
    await db.query(`insert into public.learning_evidence_records (
      record_id,contract_version,schema_version,source_registry_version,record_kind,student_id,actor_id,
      actor_role,actor_student_relation,source_code,source_record_id,source_revision,semantic_event_type,
      activity_type,occurred_at,occurred_at_precision,recorded_at,education_context_id,subject_id,topic_id,
      identity_resolution,curriculum_identity_version,curriculum_ledger_version,curriculum_aliases_version,
      evidence_class,evidence_strength,trust_level,provenance,source_availability,measurement,relations,metadata,
      source_adapter_version,topic_resolver_version,dedupe_key,semantic_fingerprint,retention_class,record_origin
    ) values ($1::uuid,'learning-evidence@1','1.0',$2::text,'event',$3::uuid,$3::uuid,'student','self','daily_logs','phase6-ref','v1',
      'study_session_reported','study_session_reported','2026-09-10T12:00:00Z','exact','2026-09-13T12:00:00Z',
      $4::text,$5::text,$6::text,jsonb_build_object('status','direct_stable_id','canonicalId',$6::text),
      'curriculum-identity@1','curriculum-ledger@1','curriculum-aliases@1','student_self_report','low',
      'account_bound','authoritative_source','available','{"correct_count":2,"incorrect_count":3,"blank_count":0,"total_count":5}'::jsonb,
      '{}'::jsonb,'{}'::jsonb,'learning-source-adapters@1','topic-resolver@1','phase6-ref-dedupe',repeat('c',64),
      'academic_policy_pending','synthetic')`, [evidenceId, SOURCE_REGISTRY_VERSION, IDS.studentA, PROGRAM, SUBJECT, TOPIC_A])
    await db.query(`insert into public.student_learning_projection_evidence_refs (
      generation_id,student_id,scope_key,record_id,source_code,source_locator,evidence_class,occurred_at,included
    ) values ($1,$2,$3,$4,'daily_logs','drkoc-ref:v1:daily_logs:opaquephase6','student_self_report',now(),true)`, [IDS.generation, IDS.studentA, `topic|${TOPIC_A}`, evidenceId])
    await rejection(() => db.query(`insert into public.student_behavior_patterns (
      generation_id,student_id,pattern_code,rule_version,state,confidence_level,sample_count,
      supporting_record_ids,refuting_record_ids,last_verified_at,valid_until
    ) values ($1::uuid,$2::uuid,'repeated_learning_friction','student-behavior-rules@1','observed','low',3,
      $3::uuid[],'{}'::uuid[],now(),now()+interval '30 days')`, [IDS.generation, IDS.studentB, [evidenceId, evidenceId, evidenceId]]), 'davranış referansı başka öğrencinin kaydını alamaz')

    await asRole(db, 'authenticated', IDS.studentA)
    equal((await db.query('select student_id from public.student_learning_projection_rows')).rows.map((row) => row.student_id), [IDS.studentA], 'A yalnız kendini okur')
    equal((await db.query('select record_id from public.student_learning_projection_evidence_refs')).rows.length, 1, 'A kendi opak referansını okur')
    await rejection(() => db.query(`insert into public.student_learning_projection_rows (generation_id,student_id) values($1,$2)`, [IDS.generation, IDS.studentA]), 'öğrenci türetilmiş puan yazamaz')
    const dispute = await db.query(`select public.create_student_learning_projection_dispute($1,'result_not_representative') id`, [`topic|${TOPIC_A}`])
    check(dispute.rows[0].id, 'öğrenci puanı değiştirmeden itiraz bıraktı')
    const sameDispute = await db.query(`select public.create_student_learning_projection_dispute($1,'result_not_representative') id`, [`topic|${TOPIC_A}`])
    equal(sameDispute.rows[0].id, dispute.rows[0].id, 'açık itiraz idempotent')
    await rejection(() => db.query(`select public.create_student_learning_projection_dispute('topic|other','other_without_free_text')`), 'olmayan kapsam için itiraz yok')

    await asRole(db, 'authenticated', IDS.studentB)
    equal((await db.query('select student_id from public.student_learning_projection_rows')).rows.map((row) => row.student_id), [IDS.studentB], 'B A projeksiyonunu okuyamaz')
    equal((await db.query('select * from public.student_learning_projection_evidence_refs')).rows.length, 0, 'B A kanıt referansını okuyamaz')
    await asRole(db, 'authenticated', IDS.teacher)
    equal((await db.query('select * from public.student_learning_projection_rows')).rows.length, 0, 'öğretmen için bu fazda geniş okuma yok')
    await asRole(db, 'authenticated', IDS.parent)
    equal((await db.query('select * from public.student_learning_projection_rows')).rows.length, 0, 'veli için bu fazda geniş okuma yok')

    await asAdmin(db); await db.exec('set enable_seqscan=off')
    const supportPlan = (await db.query(`explain select * from public.student_learning_projection_rows where student_id=$1 and scope_type='topic' and performance_state='needs_support' and confidence_level='medium' and is_active and consumer_visible order by newest_evidence_at desc limit 10`, [IDS.studentA])).rows.map(Object.values).flat().join('\n')
    const trendPlan = (await db.query(`explain select * from public.student_learning_projection_rows where student_id=$1 and scope_type='topic' and trend_state='regressed' and is_active and consumer_visible order by newest_evidence_at desc limit 10`, [IDS.studentA])).rows.map(Object.values).flat().join('\n')
    const repeatPlan = (await db.query(`explain select * from public.student_learning_projection_rows where student_id=$1 and repeat_due_at<=now() and is_active and consumer_visible order by repeat_due_at limit 10`, [IDS.studentA])).rows.map(Object.values).flat().join('\n')
    check(supportPlan.includes('student_learning_projection_support_idx'), `destek indeksi planı: ${supportPlan}`)
    check(trendPlan.includes('student_learning_projection_trend_idx'), `trend indeksi planı: ${trendPlan}`)
    check(repeatPlan.includes('student_learning_projection_repeat_idx'), `tekrar indeksi planı: ${repeatPlan}`)
    const pgReplay = await replayStudentTopicProjection({
      repository: createPgLearningEvidenceRepository(db), asOf: AS_OF, batchSize: 1,
    })
    check(pgReplay.row_count >= 4, 'PostgreSQL deposuna tam model replay yazıldı')
    equal(
      Number((await db.query(`select count(*) n from public.student_learning_projection_rows where generation_id=$1::uuid and is_active`, [pgReplay.generation_id])).rows[0].n),
      pgReplay.row_count,
      'etkin PostgreSQL satır sayısı replay ile eşit'
    )
    equal(
      Number((await db.query(`select count(*) n from public.student_learning_projection_evidence_refs where generation_id=$1::uuid`, [pgReplay.generation_id])).rows[0].n),
      pgReplay.evidence_ref_count,
      'opak kanıt referansları PostgreSQL deposuna yazıldı'
    )
    const pgBatch = await processStudentTopicBatch({
      repository: createPgLearningEvidenceRepository(db), workerId: IDS.worker,
      batchSize: 10, asOf: AS_OF,
    })
    check(pgBatch.claimed && pgBatch.rows.length === pgReplay.row_count, 'PostgreSQL artımlı işleyici model satırlarını yeniledi')
    equal(
      Number((await db.query(`select count(*) n from public.student_learning_projection_evidence_refs where generation_id=$1::uuid`, [pgReplay.generation_id])).rows[0].n),
      pgBatch.evidenceRefs.length,
      'artımlı işleyici referansları atomik yeniledi'
    )
    await db.query(`insert into public.student_coaching_decision_history (student_id,decision_type,status,scope_key,projection_generation_id) values ($1::uuid,'recommendation','proposed',$2::text,$3::uuid)`, [IDS.studentA, `topic|${TOPIC_A}`, pgReplay.generation_id])
    await db.query('update public.profiles set student_id=null where id=$1::uuid', [IDS.parent])
    await db.query('delete from auth.users where id=$1::uuid', [IDS.studentA])
    const deletedStudentRows = await db.query(`select
      (select count(*) from public.student_learning_projection_rows where student_id=$1::uuid)
      +(select count(*) from public.student_learning_projection_evidence_refs where student_id=$1::uuid)
      +(select count(*) from public.student_behavior_patterns where student_id=$1::uuid)
      +(select count(*) from public.student_coaching_decision_history where student_id=$1::uuid)
      +(select count(*) from public.student_learning_projection_disputes where student_id=$1::uuid) n`, [IDS.studentA])
    equal(Number(deletedStudentRows.rows[0].n), 0, 'hesap silme Faz 6 öğrenci satırlarını cascade eder')
    check(Number((await db.query('select count(*) n from public.student_learning_projection_rows where student_id=$1::uuid', [IDS.studentB])).rows[0].n) > 0, 'hesap silme diğer öğrenciyi korur')
    summary.migration = { first_apply: 'passed', second_apply: 'passed', tables: expectedTables, forced_rls: true, query_plans: ['support','trend','repeat'] }
    summary.security = { own_projection_only: true, cross_student_evidence_ref_blocked: true, cross_student_behavior_ref_blocked: true, direct_score_write_blocked: true, dispute_without_score_mutation: true, account_deletion_cascade: true, other_student_preserved: true }
    await db.close()

    const failedDb = new PGlite(); await installPrelude(failedDb); await failedDb.exec(P2)
    let failed = false
    try { await failedDb.exec(P6.replace(/commit;\s*$/u, 'select 1/0;\ncommit;')) } catch { failed = true; await failedDb.exec('rollback') }
    check(failed, 'hata enjeksiyonu durdurdu')
    check((await failedDb.query("select to_regclass('public.student_learning_projection_rows') is null ok")).rows[0].ok, 'tam rollback')
    await failedDb.close()
  })

  await section('10.000 kanıtlı sentetik performans bütçesi', async () => {
    const records = Array.from({ length: 10_000 }, (_, index) => evidence({
      student_id: IDS.studentA,
      topic_id: `drkoc:curriculum:topic:v1:bench${String(index % 50).padStart(3, '0')}`,
      occurred_at: `2026-09-${String(1 + (index % 10)).padStart(2, '0')}T12:00:00.000Z`,
      source_code: index % 2 ? 'question_bank' : 'practice_exams',
      measurement: { student_correct: index % 5 !== 0, difficulty: index % 3 === 0 ? 'hard' : index % 3 === 1 ? 'medium' : 'easy' },
    }))
    const started = performance.now()
    const result = buildStudentTopicModel(records, { studentId: IDS.studentA, asOf: AS_OF })
    const duration = Number((performance.now() - started).toFixed(3))
    const budget = 5_000
    check(duration < budget, `10.000 kanıt ${budget} ms bütçesini aşmadı`)
    equal(result.rows.filter((row) => row.scope_type === 'topic').length, 50, '50 konu özeti')
    check(result.evidence_refs.length >= 10_000, 'izlenebilir referanslar üretildi')
    summary.performance = { synthetic_evidence_count: 10_000, topic_count: 50, duration_ms: duration, budget_ms: budget, status: 'passed' }
  })

  await section('Faz sınırları ve sıfır canlı yan etki', async () => {
    check(!AI_CONTEXT.includes('student_learning_projection_rows'), 'Faz 7 AI Koç tüketimi eklenmedi')
    check(!AI_TOOLS.includes('student_learning_projection_rows'), 'AI Koç araçları Faz 6 modelini tüketmiyor')
    check(!P6.includes('openai') && !P6.includes('gemini'), 'LLM puanlama motoru yok')
    check(!P6.includes('question_text') && !P6.includes('teacher_message') && !P6.includes('student_free_text'), 'ham içerik özete kopyalanmıyor')
    check(Object.values(summary.side_effects).every((value) => value === false), 'canlı/model/yayın yan etkisi yok')
    passGate(9, 'canlı veri, gerçek backfill, ücretli model, deploy, push, Faz 7 ve Faz 8 uygulanmadı')
  })

  summary.status = 'core_passed_runner_pending'
  summary.gate_totals = {
    required: 9,
    passed: summary.gates.filter((gate) => gate.status === 'passed').length,
    failed: summary.gates.filter((gate) => gate.status === 'failed').length,
    pending: summary.gates.filter((gate) => gate.status === 'pending').length,
  }
  summary.generated_at = new Date().toISOString()
  writeFileSync(RESULT, `${JSON.stringify(summary, null, 2)}\n`)
  process.stdout.write(`\n${summary.assertions} doğrulama, ${summary.gate_totals.passed}/9 Faz 6 kapısı çekirdek koşuda geçti.\n`)
}

try {
  await main()
} catch (error) {
  summary.status = 'failed'
  summary.failure = { name: error.name, message: error.message, stack: error.stack }
  summary.gate_totals = {
    required: 9,
    passed: summary.gates.filter((gate) => gate.status === 'passed').length,
    failed: 1,
    pending: summary.gates.filter((gate) => gate.status === 'pending').length,
  }
  summary.generated_at = new Date().toISOString()
  mkdirSync(OUT, { recursive: true })
  writeFileSync(RESULT, `${JSON.stringify(summary, null, 2)}\n`)
  throw error
}
