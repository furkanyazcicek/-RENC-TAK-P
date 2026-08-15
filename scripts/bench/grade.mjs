/**
 * DEĞERLENDİRME — modelin çıktısını gold veriyle karşılaştırır.
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEYİN OTOMATİK ÖLÇÜLEBİLECEĞİ KONUSUNDA DÜRÜST OLMAK
 * ═══════════════════════════════════════════════════════════════════
 * Kullanıcının §9'daki kuralı şu: "doğru şık + yanlış gerekçe = FAIL".
 * Bu kural DOĞRU ama otomatik uygulanamaz. Bir çözümün gerekçesinin
 * doğru olup olmadığına karar vermek, sorunun kendisini çözmek kadar
 * zor bir iştir. Bunu "AI hakem" ile yapıp sonucu kesin bilgi gibi
 * raporlamak, benchmark'ın varlık sebebini ortadan kaldırır.
 *
 * Bu yüzden üç seviyeli bir güven modeli kullanıyoruz:
 *
 *   OTOMATİK / KESİN      answer_correct, topic_correct, schema_valid,
 *                         verification_status, latency, token, maliyet
 *
 *   OTOMATİK / GÖSTERGE   reading_similarity (metin benzerliği),
 *                         judge_reasoning (AI hakem ön eleme)
 *
 *   İNSAN / HAKEM         reasoning_correct — nihai karar. `review.mjs`
 *                         ile örneklem üzerinde verilir.
 *
 * Rapor bu üçünü ASLA karıştırmaz. "Correct reasoning rate" sayısı,
 * yanında kaç örneğin insan tarafından incelendiği ve hakemin insanla
 * ne kadar uyuştuğu yazılmadan verilmez.
 */

import { resolveTopicNode } from '../../src/lib/curriculum/readiness.js'
import { validateShape } from './schema.mjs'
import { runVerification } from './verify.mjs'

/* ==================================================================
   NORMALİZASYON
   ================================================================== */

/** Türkçe duyarlı küçültme + boşluk sadeleştirme. */
function fold(value) {
  return String(value ?? '')
    .toLocaleLowerCase('tr-TR')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Cevap değerini karşılaştırılabilir hale getirir.
 *
 * Model "x = 8", "8", "8.0", "$8$" yazabilir; hepsi aynı cevaptır.
 * Fazla agresif normalizasyon YAPMIYORUZ — "8 ve 9" ile "8" farklı
 * cevaplardır ve birleştirilirse yanlışı doğru sayarız.
 */
function normalizeAnswer(value) {
  let s = String(value ?? '')
    .replace(/\$/g, '')
    .replace(/\\left|\\right/g, '')
    .replace(/\s+/g, '')
    .toLocaleLowerCase('tr-TR')

  // Baştaki "x=", "cevap:", "sonuç=" gibi etiketleri at.
  s = s.replace(/^[a-zçğıöşü]{1,8}[=:]/, '')

  // Sayısal ise ondalık gösterimi tekilleştir: "8.0" → "8", "0,5" → "0.5"
  const numeric = s.replace(',', '.')
  if (/^-?\d+(\.\d+)?$/.test(numeric)) {
    const n = Number(numeric)
    if (Number.isFinite(n)) return String(n)
  }

  return s
}

/**
 * İki metnin sözcük düzeyinde örtüşmesi (Jaccard).
 *
 * Okuma doğruluğu için KESİN bir ölçü değildir — model soruyu doğru
 * anlayıp farklı sözcüklerle yazmış olabilir. Bu yüzden bir eşiği
 * geçmeyenler "insan incelemesi gerekli" diye işaretlenir, doğrudan
 * "yanlış okudu" sayılmaz.
 */
function textSimilarity(a, b) {
  const tokens = (s) =>
    new Set(
      fold(s)
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')
        .split(/\s+/)
        .filter((t) => t.length > 1)
    )

  const A = tokens(a)
  const B = tokens(b)
  if (!A.size || !B.size) return null

  let shared = 0
  for (const t of A) if (B.has(t)) shared += 1

  return shared / (A.size + B.size - shared)
}

/* ==================================================================
   TEK SONUCUN DEĞERLENDİRİLMESİ
   ================================================================== */

/**
 * @param {object} gold    questions.jsonl satırı
 * @param {object} result  providers/index.mjs solve() çıktısı
 * @param {object} options { readingThreshold, highConfidence }
 */
export function gradeOne(gold, result, options = {}) {
  const readingThreshold = options.readingThreshold ?? 0.5
  const highConfidence = options.highConfidence ?? 0.8

  const grade = {
    question_id: gold.id,
    category: gold.category,
    exam: gold.exam,
    has_figure: gold.has_figure === true,

    /* --- çağrı düzeyi --- */
    call_ok: result.ok === true,
    error_kind: result.error?.kind ?? null,
    truncated: result.truncated === true,
    schema_recovered: result.schemaRecovered === true,

    /* --- şema --- */
    schema_valid: false,
    schema_problems: [],

    /* --- okuma --- */
    model_says_readable: null,
    reading_similarity: null,
    reading_ok: null, // true | false | null (=insan bakmalı)

    /* --- sınıflandırma --- */
    topic_predicted: null,
    topic_correct: null,
    topic_confidence: null,

    /* --- cevap --- */
    answer_predicted: null,
    choice_predicted: null,
    answer_correct: null,
    self_confidence: null,
    wrong_and_confident: null,
    abstained: false,

    /* --- doğrulama --- */
    verification_status: 'not_run',
    verification_passed: 0,
    verification_failed: 0,
    verification_rejected: 0,

    /* --- gerekçe (insan/hakem doldurur) --- */
    reasoning_correct: null,
    reasoning_source: null, // 'human' | 'judge' | null

    /* --- maliyet/performans --- */
    latency_ms: result.latencyMs ?? null,
    usage: result.usage ?? null,
  }

  if (!result.ok || !result.parsed) return grade

  const p = result.parsed

  /* ---------- şema ---------- */
  grade.schema_problems = validateShape(p)
  grade.schema_valid = grade.schema_problems.length === 0

  /* ---------- okuma ---------- */
  grade.model_says_readable = p.reading?.readable ?? null

  // Model "okuyamadım" dediyse bu bir ÇEKİMSERLİKTİR, hata değil.
  // Ayrı sayılır: yanlış cevap vermektense okuyamadığını söylemek iyidir.
  if (p.reading?.readable === false) {
    grade.abstained = true
  }

  if (gold.gold_question_text) {
    grade.reading_similarity = textSimilarity(gold.gold_question_text, p.reading?.question_text)
    if (grade.reading_similarity !== null) {
      grade.reading_ok = grade.reading_similarity >= readingThreshold ? true : null
      // Eşiğin altı otomatik "yanlış" DEĞİL, "insan baksın" (null).
      // Yanlış pozitif bir okuma hatası raporu, modele haksızlıktır.
    }
  }

  /* ---------- konu ---------- */
  grade.topic_predicted = p.classification?.topic ?? null
  grade.topic_confidence = p.classification?.topic_confidence ?? null

  if (gold.gold_topic && grade.topic_predicted) {
    grade.topic_correct = topicsMatch(gold.gold_topic, grade.topic_predicted, gold.exam)
  }

  /* ---------- cevap ---------- */
  const answer = p.solution?.answer ?? {}
  grade.answer_predicted = answer.value ?? null
  grade.choice_predicted = answer.choice ?? null
  grade.self_confidence = p.verification?.self_confidence ?? null

  grade.answer_correct = answersMatch(gold, answer)

  if (grade.answer_correct === false && typeof grade.self_confidence === 'number') {
    grade.wrong_and_confident = grade.self_confidence >= highConfidence
  } else if (grade.answer_correct === true) {
    grade.wrong_and_confident = false
  }

  /* ---------- deterministik doğrulama ---------- */
  const verification = runVerification(p)
  grade.verification_status = verification.status
  grade.verification_passed = verification.passed
  grade.verification_failed = verification.failed
  grade.verification_rejected = verification.rejected
  grade.verification_details = verification.details

  return grade
}

/* ==================================================================
   EŞLEŞTİRİCİLER
   ================================================================== */

/**
 * Gold cevabı ile modelin cevabını karşılaştırır.
 *
 * ÖNCELİK: şık > değer. Çoktan seçmeli soruda şık kesin ölçüdür.
 * Şık yoksa (açık uçlu) değer normalize edilip karşılaştırılır.
 *
 * `null` döner = karşılaştırılamadı (gold eksik). "Yanlış" DEĞİL.
 */
export function answersMatch(gold, answer) {
  const goldChoice = gold.gold_answer_choice ?? gold.gold_answer ?? null
  const goldValue = gold.gold_answer_value ?? null

  // Çoktan seçmeli
  if (typeof goldChoice === 'string' && /^[A-Ea-e]$/.test(goldChoice.trim())) {
    const predicted = answer.choice
    if (typeof predicted !== 'string' || !predicted.trim()) return false
    return predicted.trim().toUpperCase() === goldChoice.trim().toUpperCase()
  }

  // Açık uçlu
  const target = goldValue ?? goldChoice
  if (target === null || target === undefined || target === '') return null

  const predicted = answer.value
  if (predicted === null || predicted === undefined) return false

  return normalizeAnswer(predicted) === normalizeAnswer(target)
}

/**
 * Konu eşleşmesi. Gold etiketi gevşek yazılmış olabilir ("türev" gibi);
 * `readiness.js`'teki mevcut eşleştiriciyi kullanıyoruz — benchmark için
 * ikinci bir eşleştirici yazmak, ürünle benchmark'ın farklı şeyleri
 * ölçmesine yol açardı.
 */
export function topicsMatch(goldTopic, predictedTopic, examType) {
  const norm = (s) => fold(s).replace(/\s*>\s*/g, ' > ')
  if (norm(goldTopic) === norm(predictedTopic)) return true

  if (predictedTopic === 'BELİRSİZ') return false

  const split = (s) => {
    const parts = String(s).split('>').map((x) => x.trim())
    return parts.length >= 2 ? { subject: parts[0], topic: parts[1] } : { subject: null, topic: parts[0] }
  }

  const g = split(goldTopic)
  const pr = split(predictedTopic)

  const examTypes = examType && examType !== 'BELİRSİZ' ? [examType] : ['TYT', 'AYT']

  const goldNode = resolveTopicNode(g.subject ?? pr.subject, g.topic, examTypes)
  const predNode = resolveTopicNode(pr.subject ?? g.subject, pr.topic, examTypes)

  if (!goldNode || !predNode) return false
  return goldNode.id === predNode.id
}

/* ==================================================================
   ÇOKLU ÇALIŞTIRMA — SELF-CONSISTENCY
   ================================================================== */

/**
 * Aynı soru + aynı model, N kez çalıştırıldığında kararlılık.
 *
 * İki ayrı şey ölçülür ve KARIŞTIRILMAZ:
 *   answer_stability  → aynı cevabı mı veriyor (ürün için kritik)
 *   method_stability   → aynı yoldan mı gidiyor (gösterge; adım sayısı
 *                        ve ilk adımın benzerliğiyle kabaca ölçülür)
 *
 * Çoğunluk cevabı da döner: cascade yerine self-consistency kullanmanın
 * doğruluğu ne kadar artıracağını hesaplamak için gerekli.
 */
export function analyzeConsistency(runs) {
  const usable = runs.filter((r) => r.ok && r.parsed)
  if (usable.length < 2) {
    return { runs: runs.length, usable: usable.length, answer_stability: null, majority: null }
  }

  const answers = usable.map((r) => {
    const a = r.parsed.solution?.answer ?? {}
    return a.choice ? String(a.choice).toUpperCase() : normalizeAnswer(a.value)
  })

  const counts = new Map()
  for (const a of answers) counts.set(a, (counts.get(a) ?? 0) + 1)

  let majority = null
  let majorityCount = 0
  for (const [value, n] of counts) {
    if (n > majorityCount) {
      majority = value
      majorityCount = n
    }
  }

  const stepCounts = usable.map((r) => (r.parsed.solution?.steps ?? []).length)
  const meanSteps = stepCounts.reduce((s, n) => s + n, 0) / stepCounts.length
  const stepSpread = Math.max(...stepCounts) - Math.min(...stepCounts)

  return {
    runs: runs.length,
    usable: usable.length,
    unique_answers: counts.size,
    answer_stability: majorityCount / usable.length,
    unanimous: counts.size === 1,
    majority,
    majority_count: majorityCount,
    mean_steps: Math.round(meanSteps * 10) / 10,
    step_spread: stepSpread,
  }
}

export { normalizeAnswer, textSimilarity, fold }
