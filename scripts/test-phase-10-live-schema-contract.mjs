/** Faz 10 canlı şema sözleşmesi — yalnız yerel kanıt doğrulaması. */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const CONTRACT = JSON.parse(readFileSync(
  join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-sema-sozlesmesi.json'),
  'utf8',
))
const COMPATIBILITY = JSON.parse(readFileSync(
  join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-sema-uyumluluk.json'),
  'utf8',
))
const EXPECTED_TABLES = [
  'ai_solution_sessions', 'ai_study_tasks', 'daily_logs', 'exams', 'homeworks',
  'lesson_participants', 'lesson_summaries', 'library_notes', 'mock_exam_subjects',
  'mock_exams', 'profiles', 'questions', 'teacher_students',
]
const TARGET_PHASE4_COLUMNS = [
  'ai_solution_sessions.academic_request_id', 'ai_solution_sessions.academic_revision',
  'ai_solution_sessions.review_revision', 'daily_logs.academic_revision',
  'exams.academic_revision', 'exams.duration_minutes', 'exams.exam_type',
  'homeworks.academic_revision', 'lesson_participants.attendance_revision',
  'lesson_summaries.academic_revision', 'mock_exam_subjects.academic_revision',
  'mock_exams.academic_revision', 'mock_exams.duration_minutes',
  'profiles.academic_goal_revision', 'profiles.exam_date', 'profiles.exam_profile_updated_at',
  'profiles.exam_year', 'profiles.grade', 'profiles.is_exam_year', 'profiles.target_exam',
  'questions.academic_revision', 'questions.assigned_by', 'questions.image_path',
  'questions.origin', 'questions.teacher_reply', 'questions.teacher_reply_image_path',
  'questions.teacher_reply_image_url', 'questions.teacher_reply_strokes',
].sort()

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(',')}}`
  }
  return JSON.stringify(value)
}
const sha256 = (value) => createHash('sha256').update(value).digest('hex')

assert.equal(CONTRACT.status, 'passed_read_only_live_schema_contract')
assert.equal(CONTRACT.target?.project_ref, 'aazadigklxnvbtwrtszj')
assert.equal(CONTRACT.target?.environment, 'PRODUCTION')
assert.deepEqual(CONTRACT.tables.map((table) => table.table_name), EXPECTED_TABLES)
assert.equal(CONTRACT.totals?.tables, 13)
assert.equal(CONTRACT.totals?.nonnegative_estimated_rows, 758)
assert.equal(CONTRACT.totals?.triggers, 5)
assert.equal(CONTRACT.totals?.total_bytes, 3858432)
assert.equal(CONTRACT.totals?.table_bytes, 262144)
assert.equal(CONTRACT.totals?.index_bytes, 417792)
assert.ok(CONTRACT.tables.every((table) => table.rls_enabled))
assert.equal(CONTRACT.contract_checksum, sha256(stableJson(CONTRACT.tables)))
assert.equal(CONTRACT.privacy?.table_rows_selected, false)
assert.equal(CONTRACT.privacy?.student_content_selected, false)
assert.equal(CONTRACT.privacy?.schema_metadata_only, true)
assert.equal(CONTRACT.side_effects?.live_write, false)
assert.equal(CONTRACT.side_effects?.paid_service_used, false)

const presentColumns = new Set(CONTRACT.tables.flatMap((table) => (
  table.columns.map((column) => `${table.table_name}.${column.name}`)
)))
const missingPhase4Columns = TARGET_PHASE4_COLUMNS.filter((column) => !presentColumns.has(column))
assert.deepEqual(missingPhase4Columns, COMPATIBILITY.phase_4_column_impact.missing_columns)
assert.equal(TARGET_PHASE4_COLUMNS.length, COMPATIBILITY.phase_4_column_impact.target_columns)
assert.equal(missingPhase4Columns.length, COMPATIBILITY.phase_4_column_impact.to_add)

console.log(`Faz 10 canlı şema sözleşmesi doğrulandı: ${CONTRACT.totals.tables} tablo, ${CONTRACT.totals.columns} kolon, ${CONTRACT.totals.constraints} kısıt, ${CONTRACT.totals.indexes} indeks, ${CONTRACT.totals.policies} politika, ${CONTRACT.totals.triggers} tetikleyici.`)
console.log(`Faz 4 kolon etkisi: ${TARGET_PHASE4_COLUMNS.length - missingPhase4Columns.length} mevcut, ${missingPhase4Columns.length} eklenecek; kişisel veri satırı: 0.`)
