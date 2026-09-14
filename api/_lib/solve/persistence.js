/**
 * AI Soru Çözüm Merkezi — kalıcılık katmanı (§19, §37, §43).
 *
 * Tüm yazma/okuma işlemleri ÖĞRENCİNİN KENDİ JWT'siyle yapılır
 * (`api/_lib/auth.js` böyle bir istemci veriyor). Yani:
 *   1. Kod seviyesinde her sorgu `student_id` ile sınırlanır.
 *   2. Veritabanı seviyesinde RLS aynı sınırı bağımsız uygular.
 * Birinci katmanda hata yapılsa bile ikincisi başka bir öğrencinin
 * oturumunun dönmesini engeller (§46: "User A'nın solution session'ını
 * User B görememeli").
 *
 * KVKK NOTU (§43): burada saklanan şey öğrencinin kendi soru fotoğrafı ve
 * çözümüdür — zaten kendi verisi. Ham model yanıtı, prompt metni ya da
 * API yanıt gövdesi SAKLANMAZ; yalnızca öğrenciye gösterilen ve
 * performans analizine giren alanlar tutulur.
 */

import { logSolveError } from '../errors.js'
import { getAcademicSolveWriter } from './academicWriter.js'

const SESSION_COLUMNS = `
  id, status, source, image_path, question_text, student_note,
  subject, topic, subtopic, canonical_topic, topic_matched, exam_type,
  difficulty, question_type,
  answer_latex, answer_plain, answer_unit, answer_choice,
  board, analysis, student_help, verification, confidence, refusal_reason,
  model_role, escalated, help_requested, student_correct, error_type,
  feedback, feedback_reason, created_at
`

const HISTORY_COLUMNS =
  'id, status, source, subject, topic, canonical_topic, subtopic, difficulty, answer_plain, ' +
  'confidence, feedback, image_path, question_text, help_requested, student_correct, error_type, ' +
  'review_status, reviewed_at, created_at'

const LEGACY_HISTORY_COLUMNS =
  'id, status, source, subject, topic, canonical_topic, subtopic, difficulty, answer_plain, ' +
  'confidence, feedback, image_path, question_text, help_requested, student_correct, error_type, ' +
  'created_at'

/**
 * Çözüm oturumunu kaydeder.
 *
 * Hata durumunda `null` döner ve AKIŞI KESMEZ: öğrenci çözümü zaten
 * ekranda görüyor; kayıt tutulamadı diye ona hata göstermek, çalışan bir
 * şeyi bozmak olurdu. Kayıt olmadan yalnızca "Neden?"/geçmiş özellikleri
 * çalışmaz ve bu istemcide açıkça ele alınıyor.
 */
export async function saveSession(supabase, studentId, payload, clientActionId) {
  try {
    const writer = getAcademicSolveWriter()
    const { data, error } = await writer.rpc('finalize_academic_ai_solve', {
      p_student_id: studentId, p_client_action_id: clientActionId, p_result: payload,
    })
    if (error || !['created', 'duplicate'].includes(data?.status)) throw error ?? new Error(data?.status ?? 'finalize_failed')
    return { id: data.session_id, created_at: null }
  } catch (error) {
    logSolveError('saveSession', error)
    return null
  }
}

/**
 * Oturumu getirir. `student_id` filtresi RLS'e EK olarak konur; ikisi
 * birden olmasa da olur ama tek katmana güvenmemek bu kod tabanının
 * yerleşik alışkanlığı (bkz. api/_lib/auth.js başlığı).
 */
export async function loadSession(supabase, studentId, sessionId) {
  const { data, error } = await supabase
    .from('ai_solution_sessions')
    .select(SESSION_COLUMNS)
    .eq('id', sessionId)
    .eq('student_id', studentId)
    .maybeSingle()

  if (error) {
    logSolveError('loadSession', error)
    return null
  }
  return data
}

/** Öğrencinin çözüm geçmişi — en yeni önce. */
export async function listSessions(supabase, studentId, { limit = 20, offset = 0 } = {}) {
  const query = (columns) => supabase
    .from('ai_solution_sessions')
    .select(columns)
    .eq('student_id', studentId)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  let { data, error } = await query(HISTORY_COLUMNS)

  // Yeni tekrar alanları henüz canlı veritabanına uygulanmadıysa
  // geçmişi tamamen kaybetme; eski kolonlarla okumaya devam et.
  if (error) {
    const legacy = await query(LEGACY_HISTORY_COLUMNS)
    data = legacy.data
    error = legacy.error
  }

  if (error) {
    logSolveError('listSessions', error)
    return []
  }
  return (data ?? []).map((row) => ({
    ...row,
    review_status: row.review_status ?? 'none',
    reviewed_at: row.reviewed_at ?? null,
  }))
}

/**
 * Etkileşim kaydı ("Neden?", "Takıldım", alternatif, kontrol).
 * Ayrıca oturumun `help_requested` sayacını artırır — AI Koç'un
 * "bu öğrenci hangi soruda zorlandı" sinyali budur (§19, §20).
 */
export async function recordEvent(supabase, studentId, sessionId, event) {
  try {
    const writer = getAcademicSolveWriter()
    const { data, error } = await writer.rpc('record_academic_ai_solve_help', {
      p_student_id: studentId,p_session_id: sessionId,p_kind: event.kind,p_step_index: event.stepIndex ?? null,
      p_question: event.question ?? null,p_answer: event.answer ?? null,p_model_role: event.role ?? null,
      p_model_id: event.modelId ?? null,p_client_action_id: event.clientActionId,
    })
    if (error || !['created', 'duplicate', 'no_change'].includes(data?.status)) throw error ?? new Error(data?.status ?? 'event_failed')
    return true
  } catch (error) {
    logSolveError('recordEvent', error)
    return false
  }
}

export async function recordCheckEvent(studentId, sessionId, event) {
  try {
    const writer = getAcademicSolveWriter()
    const { data, error } = await writer.rpc('record_academic_ai_solve_check', {
      p_student_id: studentId,p_session_id: sessionId,p_student_correct: event.studentCorrect,
      p_event_payload: { answer: event.answer ?? null, model_role: event.role ?? null, model_id: event.modelId ?? null, error_type: event.errorType ?? null },
      p_client_action_id: event.clientActionId,
    })
    if (error || !['created', 'duplicate', 'no_change'].includes(data?.status)) throw error ?? new Error(data?.status ?? 'check_failed')
    return true
  } catch (error) {
    logSolveError('recordCheckEvent', error)
    return false
  }
}

/** Öğrencinin 👍/👎 geri bildirimi (§42). */
export async function saveFeedback(supabase, studentId, sessionId, { feedback, reason, note, clientActionId }) {
  const { data, error } = await supabase.rpc('feedback_academic_ai_solve', {
    p_session_id: sessionId,p_feedback: feedback,p_reason: reason ?? null,
    p_note: typeof note === 'string' ? note.slice(0, 500) : null,p_client_action_id: clientActionId,
  })

  if (error) {
    logSolveError('saveFeedback', error)
    return false
  }
  return ['created', 'duplicate', 'no_change'].includes(data?.status)
}

/** Öğrencinin "ben bunu doğru çözmüştüm / çözememiştim" beyanı (§19). */
export async function saveSelfReport(supabase, studentId, sessionId, studentCorrect, clientActionId) {
  const { data, error } = await supabase.rpc('report_academic_ai_solve_result', {
    p_session_id: sessionId,p_student_correct: studentCorrect,p_client_action_id: clientActionId,
  })
  return !error && ['created', 'duplicate', 'no_change'].includes(data?.status)
}

/** Öğrencinin tekrar çalışma durumunu kaydeder. */
export async function saveReviewStatus(supabase, studentId, sessionId, reviewStatus, clientActionId) {
  const { data, error } = await supabase.rpc('update_academic_ai_review', {
    p_session_id: sessionId,p_review_status: reviewStatus,p_client_action_id: clientActionId,
  })

  if (error) logSolveError('saveReviewStatus', error)
  return !error && ['created', 'duplicate', 'no_change'].includes(data?.status)
}

/**
 * Motor çıktısını veritabanı satırına çevirir.
 *
 * SAKLANMAYANLAR bilinçlidir: ham model yanıtı, sistem istemi, görselin
 * base64'ü, doğrulama iddialarının ifadeleri. Bunların hiçbiri öğrenciye
 * gösterilmiyor ve hiçbiri analize girmiyor; saklamak yalnızca risk
 * biriktirmek olurdu.
 */
export function sessionRowFromResult(result, { source, imagePath, questionText, studentNote }) {
  const base = {
    source,
    image_path: imagePath ?? null,
    student_note: studentNote ?? null,
    input_tokens: result.telemetry?.inputTokens ?? null,
    output_tokens: result.telemetry?.outputTokens ?? null,
    cost_usd: result.telemetry?.costUsd ?? null,
    duration_ms: result.telemetry?.durationMs ?? null,
    routing_log: result.telemetry?.routingLog ?? null,
    escalated: result.telemetry?.escalated ?? false,
  }

  if (result.status === 'unreadable') {
    return {
      ...base,
      status: 'unreadable',
      question_text: questionText ?? null,
      subject: result.triage?.subject ?? null,
      refusal_reason: (result.rawIssues ?? []).join(', ') || 'okunamadı',
    }
  }

  if (result.status === 'refused') {
    return {
      ...base,
      status: 'refused',
      question_text: questionText ?? null,
      subject: result.triage?.subject ?? null,
      topic: result.triage?.topic ?? null,
      difficulty: result.triage?.difficulty ?? null,
      confidence: result.confidence ?? null,
      refusal_reason: result.reason ?? null,
    }
  }

  const { solution, board, topic, verification } = result

  return {
    ...base,
    status: 'ok',
    question_text: solution.reading?.question_text ?? questionText ?? null,

    subject: topic.subject,
    topic: topic.topic,
    subtopic: topic.subtopic,
    canonical_topic: topic.canonicalTopic,
    topic_matched: topic.matched,
    exam_type: topic.examType ?? result.triage?.exam_type ?? null,
    difficulty: solution.analysis?.difficulty ?? result.triage?.difficulty ?? null,
    question_type: result.triage?.question_type ?? null,

    answer_latex: board.answer.latex,
    answer_plain: board.answer.plain,
    answer_unit: board.answer.unit,
    answer_choice: board.answer.choice,

    board,
    analysis: {
      givens: solution.analysis?.givens ?? [],
      unknowns: solution.analysis?.unknowns ?? [],
      goal: solution.analysis?.goal ?? null,
      concepts: solution.analysis?.required_concepts ?? [],
      strategy: solution.analysis?.strategy ?? null,
      choices: solution.reading?.choices ?? [],
      figureDescription: solution.reading?.figure_description ?? null,
    },
    student_help: solution.student_help ?? null,

    verification: {
      status: verification?.status ?? null,
      passed: verification?.passed ?? 0,
      failed: verification?.failed ?? 0,
      rejected: verification?.rejected ?? 0,
      selfCheck: solution.verification?.self_check ?? null,
      unitCheck: solution.verification?.unit_check ?? null,
      sanityCheck: solution.verification?.sanity_check ?? null,
      ambiguityNotes: solution.verification?.ambiguity_notes ?? [],
    },
    confidence: result.confidence ?? null,
    model_role: result.modelRole ?? null,
    model_id: result.modelId ?? null,
  }
}
