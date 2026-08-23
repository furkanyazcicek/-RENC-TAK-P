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

const SESSION_COLUMNS = `
  id, status, source, image_path, question_text, student_note,
  subject, topic, subtopic, canonical_topic, topic_matched, exam_type,
  difficulty, question_type,
  answer_latex, answer_plain, answer_unit, answer_choice,
  board, analysis, student_help, verification, confidence, refusal_reason,
  model_role, escalated, help_requested, student_correct, error_type,
  feedback, feedback_reason, created_at
`

/**
 * Çözüm oturumunu kaydeder.
 *
 * Hata durumunda `null` döner ve AKIŞI KESMEZ: öğrenci çözümü zaten
 * ekranda görüyor; kayıt tutulamadı diye ona hata göstermek, çalışan bir
 * şeyi bozmak olurdu. Kayıt olmadan yalnızca "Neden?"/geçmiş özellikleri
 * çalışmaz ve bu istemcide açıkça ele alınıyor.
 */
export async function saveSession(supabase, studentId, payload) {
  try {
    const { data, error } = await supabase
      .from('ai_solution_sessions')
      .insert({ student_id: studentId, ...payload })
      .select('id, created_at')
      .single()

    if (error) throw error
    return data
  } catch (error) {
    logSolveError('saveSession', error, { studentId })
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
    logSolveError('loadSession', error, { studentId })
    return null
  }
  return data
}

/** Öğrencinin çözüm geçmişi — en yeni önce. */
export async function listSessions(supabase, studentId, { limit = 20, offset = 0 } = {}) {
  const { data, error } = await supabase
    .from('ai_solution_sessions')
    .select(
      'id, status, subject, topic, canonical_topic, subtopic, difficulty, answer_plain, ' +
        'confidence, feedback, image_path, question_text, created_at'
    )
    .eq('student_id', studentId)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (error) {
    logSolveError('listSessions', error, { studentId })
    return []
  }
  return data ?? []
}

/**
 * Etkileşim kaydı ("Neden?", "Takıldım", alternatif, kontrol).
 * Ayrıca oturumun `help_requested` sayacını artırır — AI Koç'un
 * "bu öğrenci hangi soruda zorlandı" sinyali budur (§19, §20).
 */
export async function recordEvent(supabase, studentId, sessionId, event) {
  try {
    await supabase.from('ai_solution_events').insert({
      session_id: sessionId,
      student_id: studentId,
      kind: event.kind,
      step_index: event.stepIndex ?? null,
      question: event.question ?? null,
      answer: event.answer ?? null,
      model_role: event.role ?? null,
      model_id: event.modelId ?? null,
      input_tokens: event.usage?.input ?? null,
      output_tokens: event.usage?.output ?? null,
      cost_usd: event.costUsd ?? null,
      duration_ms: event.durationMs ?? null,
    })
  } catch (error) {
    logSolveError('recordEvent', error, { studentId })
  }

  // Yardım sayacı yalnızca GERÇEK zorlanma sinyallerinde artar.
  // "Alternatif yöntem" merak, "kontrol" ayrı bir akış — ikisi de
  // zorlandığı anlamına gelmez ve sayacı şişirirse veri yanıltır.
  if (event.kind === 'why' || event.kind === 'stuck') {
    await bumpHelpCounter(supabase, studentId, sessionId)
  }
}

/**
 * Sayaç artırımı OKU-YAZ ile yapılıyor, atomik `increment` ile değil.
 * Gerekçe: atomik artırım bir Postgres fonksiyonu (RPC) gerektirirdi,
 * bu da göçe fazladan bir nesne eklerdi. Buradaki yarış koşulu riski
 * gerçek ama zararsız: aynı öğrencinin aynı anda iki "Neden?" tıklaması
 * sayacı 2 yerine 1 artırabilir. Bu bir istatistik alanı; hassas değil.
 */
async function bumpHelpCounter(supabase, studentId, sessionId) {
  try {
    const { data } = await supabase
      .from('ai_solution_sessions')
      .select('help_requested')
      .eq('id', sessionId)
      .eq('student_id', studentId)
      .maybeSingle()

    if (!data) return

    await supabase
      .from('ai_solution_sessions')
      .update({ help_requested: (data.help_requested ?? 0) + 1 })
      .eq('id', sessionId)
      .eq('student_id', studentId)
  } catch (error) {
    logSolveError('bumpHelpCounter', error, { studentId })
  }
}

/** Öğrencinin 👍/👎 geri bildirimi (§42). */
export async function saveFeedback(supabase, studentId, sessionId, { feedback, reason, note }) {
  const { error } = await supabase
    .from('ai_solution_sessions')
    .update({
      feedback,
      feedback_reason: reason ?? null,
      // Serbest metin 500 karaktere kırpılır: buraya uzun kişisel bilgi
      // yazılmasının önüne geçmek de dahil (§43 KVKK notu).
      feedback_note: typeof note === 'string' ? note.slice(0, 500) : null,
    })
    .eq('id', sessionId)
    .eq('student_id', studentId)

  if (error) {
    logSolveError('saveFeedback', error, { studentId })
    return false
  }
  return true
}

/** Öğrencinin "ben bunu doğru çözmüştüm / çözememiştim" beyanı (§19). */
export async function saveSelfReport(supabase, studentId, sessionId, studentCorrect) {
  const { error } = await supabase
    .from('ai_solution_sessions')
    .update({ student_correct: studentCorrect })
    .eq('id', sessionId)
    .eq('student_id', studentId)

  return !error
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
