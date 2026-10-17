/** Yalnız oturumdaki öğrencinin dar, kişisel içerik içermeyen öğrenme kayıtları. */
import { buildFacts } from './context.js'
import { buildFreeCoachSnapshot } from './freeCoachEngine.js'
import { ownFreeCoachWrites } from './freeCoachGate.js'

const PAGE = 500
const MAX_RECORDS = 10000
export async function readOwnEvidence(supabase, studentId) {
  const records = []
  for (let offset = 0; offset < MAX_RECORDS; offset += PAGE) {
    const result = await supabase.from('learning_evidence_records')
      .select('record_id,student_id,source_code,source_record_id,source_revision,source_locator,dedupe_key,record_kind,semantic_event_type,activity_type,occurred_at,occurred_on,as_of,recorded_at,education_context_id,subject_id,topic_id,objective_id,identity_resolution,evidence_class,evidence_strength,trust_level,provenance,source_availability,measurement,relations,metadata,ingestion_sequence,target_record_id')
      .eq('student_id', studentId).order('ingestion_sequence', { ascending: true }).range(offset, offset + PAGE - 1)
    if (result.error) return { records: [], available: false }
    records.push(...(result.data ?? []))
    if ((result.data?.length ?? 0) < PAGE) return { records, available: true }
  }
  // Kesilmiş tarihçe tam bir öğrenci analizi gibi sunulamaz.
  return { records: [], available: false }
}

export async function loadFreeCoachSnapshot(supabase, profile) {
  const id = profile.id
  const definitions = [
    ['logs', 'daily_logs', 'id,study_date,topic,duration_minutes,correct,incorrect,empty', 'study_date', 1000],
    ['mockExams', 'mock_exams', 'id,exam_type,exam_name,exam_date,mock_exam_subjects(id,subject,correct,incorrect,empty,net)', 'exam_date', 100],
    ['branchExams', 'exams', 'id,subject,topic,exam_date,correct,incorrect,empty,net', 'exam_date', 200],
    ['homeworks', 'homeworks', 'id,title,due_date,status,created_at', 'created_at', 500],
    ['questions', 'questions', 'id,subject,topic,status,teacher_reply,created_at', 'created_at', 500],
    ['solveSessions', 'ai_solution_sessions', 'id,subject,topic,canonical_topic,topic_matched,status,help_requested,student_correct,error_type,created_at', 'created_at', 500],
    ['memory', 'ai_student_memory', 'key,value,updated_at', 'updated_at', 100],
    ['tasks', 'ai_study_tasks', 'id,subject,topic,activity,planned_date,duration_minutes,status,plan_group', 'planned_date', 500],
  ]
  const [responses, ledger] = await Promise.all([
    Promise.all(definitions.map(async ([key, table, fields, order, limit]) => {
      const result = await supabase.from(table).select(fields).eq('student_id', id).order(order, { ascending: false }).limit(limit)
      return { key, result, limit }
    })),
    readOwnEvidence(supabase, id),
  ])
  const raw = { solveSessions: [], degraded: responses.some(({ result, limit }) => result.error || (result.data?.length ?? 0) >= limit) }
  for (const { key, result } of responses) raw[key] = result.data ?? []
  const facts = buildFacts(profile, raw)
  facts.today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Istanbul' })
  const snapshot = buildFreeCoachSnapshot({ studentId: id, raw, facts, records: ledger.records, ledgerAvailable: ledger.available })
  snapshot.coachingWriteEnabled = await ownFreeCoachWrites(supabase)
  return snapshot
}
