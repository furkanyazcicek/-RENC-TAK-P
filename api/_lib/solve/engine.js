/**
 * AI Soru Çözüm Merkezi — ÇÖZÜM MOTORU.
 *
 * Uç noktalar (api/ai-solve/*) ince kalsın diye bütün akış burada:
 *
 *   görsel al → TRİYAJ → yönlendir → ÇÖZ → DOĞRULA → (gerekirse YÜKSELT)
 *   → tahtayı DERLE → telemetri
 *
 * AŞAMALAR GERÇEKTİR (§40)
 * ------------------------
 * `onStage` geri çağrısı, arayüzdeki "Soruyu okuyorum… / Konusunu
 * belirliyorum… / Çözüyorum…" satırlarını besler. Bu satırlar dekoratif
 * değil: her biri gerçekten o an çalışan bir aşamaya karşılık gelir.
 * Sahte bir ilerleme çubuğu göstermek, öğrenciye yalan söylemektir.
 *
 * MOTOR VERİTABANI BİLMEZ. Yazma işini uç nokta yapar; böylece motor
 * testte gerçek bir Supabase olmadan koşturulabilir.
 */

import { solveConfig } from './config.js'
import { generateStructured, generateWithFallback, GeminiError } from './gemini.js'
import { fetchImageForModel } from './image.js'
import {
  TRIAGE_SCHEMA,
  buildSolutionSchema,
  buildAlternativeSchema,
  buildCheckSchema,
  EXPLAIN_SCHEMA,
  readIssueMessage,
} from './schema.js'
import {
  TRIAGE_SYSTEM,
  TRIAGE_USER,
  SOLVE_SYSTEM,
  solveUserPrompt,
  EXPLAIN_SYSTEM,
  explainUserPrompt,
  ALTERNATIVE_SYSTEM,
  alternativeUserPrompt,
  CHECK_SYSTEM,
  checkUserPrompt,
} from './prompts.js'
import { routeFromTriage, decideAfterSolve, routingEntry } from './router.js'
import { runVerification, combinedConfidence } from './verify.js'
import { resolveTopic } from './taxonomy.js'
import { totalCost } from './cost.js'
import { plotCurves } from './plot.js'
import { compileBoard } from '../../../src/lib/whiteboard/compile.js'

export const STAGES = {
  reading: 'Soruyu okuyorum…',
  analyzing: 'Konusunu ve zorluğunu belirliyorum…',
  solving: 'Çözüm yolunu oluşturuyorum…',
  verifying: 'Çözümü kontrol ediyorum…',
  escalating: 'Bu soru zor — daha dikkatli bakıyorum…',
  board: 'Tahtayı hazırlıyorum…',
}

/**
 * @typedef {object} SolveInput
 * @property {import('@supabase/supabase-js').SupabaseClient} supabase
 * @property {string} userId
 * @property {string|null} examType        Öğrencinin hedef sınavı (profilden)
 * @property {string|null} text            Metinle girilen soru
 * @property {string[]} imagePaths         Doğrulanmış depolama yolları
 * @property {string|null} studentNote     "Nerede takıldım" notu
 * @property {(stage: string, message: string) => void} [onStage]
 * @property {AbortSignal} [signal]
 */

/**
 * Bir soruyu uçtan uca çözer.
 *
 * @param {SolveInput} input
 * @returns {Promise<object>} `{ status: 'ok'|'unreadable'|'refused', ... }`
 */
export async function solveQuestion(input) {
  const { supabase, examType, text, imagePaths = [], studentNote, onStage, signal } = input
  const startedAt = Date.now()
  const calls = []
  const routingLog = []

  const stage = (key) => onStage?.(key, STAGES[key])

  /* ---------- 0) Görseller ---------- */
  stage('reading')

  const images = []
  for (const path of imagePaths.slice(0, solveConfig.image.maxPerRequest)) {
    images.push(await fetchImageForModel(supabase, path))
  }

  if (!images.length && !text) {
    throw new GeminiError('solve_no_input', { kind: 'bad_request' })
  }

  /* ---------- 1) TRİYAJ — ucuz model, çözmez ---------- */

  const triageCall = await generateStructured({
    role: 'fast',
    system: TRIAGE_SYSTEM,
    user: text ? `${TRIAGE_USER}\n\nSoru metni:\n${text}` : TRIAGE_USER,
    images,
    schema: TRIAGE_SCHEMA,
    maxOutputTokens: solveConfig.maxTriageTokens,
    thinkingLevel: solveConfig.thinkingLevel.triage,
    timeoutMs: solveConfig.triageTimeoutMs,
    signal,
  })

  calls.push({ role: 'fast', usage: triageCall.usage })
  routingLog.push(
    routingEntry({
      stage: 'triage',
      role: 'fast',
      modelId: triageCall.modelId,
      reason: 'ilk sınıflandırma',
      usage: triageCall.usage,
      latencyMs: triageCall.latencyMs,
    })
  )

  const triage = triageCall.data

  // Okunamayan soruda ÇÖZMEYE ÇALIŞMIYORUZ (§23). Buradan dönmek hem
  // öğrenciye doğru geri bildirim verir hem de pahalı çözüm çağrısını
  // hiç yapmaz.
  if (triage?.readable === false) {
    return {
      status: 'unreadable',
      issues: (triage.issues ?? []).map(readIssueMessage).filter(Boolean),
      rawIssues: triage.issues ?? [],
      triage,
      telemetry: telemetryOf({ calls, routingLog, startedAt, escalated: false }),
    }
  }

  /* ---------- 2) YÖNLENDİRME ---------- */
  stage('analyzing')

  const route = routeFromTriage(triage)
  const multipleChoice = triage?.question_type === 'coktan_secmeli'

  /* ---------- 3) ÇÖZÜM ---------- */
  stage('solving')

  const schema = buildSolutionSchema({ withFigure: route.needsFigure, multipleChoice })
  const userPrompt = solveUserPrompt({ text, hasImage: images.length > 0, studentNote })

  let attempt = await generateWithFallback({
    role: route.role,
    system: SOLVE_SYSTEM,
    user: userPrompt,
    images,
    schema,
    thinkingLevel: route.thinkingLevel,
    signal,
  })

  calls.push({ role: attempt.role, usage: attempt.usage })
  routingLog.push(
    routingEntry({
      stage: 'solve',
      role: attempt.role,
      modelId: attempt.modelId,
      reason: route.reason,
      usage: attempt.usage,
      latencyMs: attempt.latencyMs,
      fallbackFrom: attempt.fallbackFrom,
    })
  )

  /* ---------- 4) DOĞRULAMA ---------- */
  stage('verifying')

  let solution = attempt.data
  let verification = runVerification(solution)
  let confidence = combinedConfidence({ solution, verification, truncated: attempt.truncated })

  let decision = decideAfterSolve({
    role: attempt.role,
    verification,
    confidence,
    alreadyEscalated: false,
  })

  /* ---------- 5) GEREKİRSE PRO'YA YÜKSELT ---------- */

  let escalated = false

  if (decision.action === 'escalate') {
    escalated = true
    stage('escalating')

    try {
      const proAttempt = await generateStructured({
        role: 'pro',
        system: SOLVE_SYSTEM,
        user: userPrompt,
        images,
        schema,
        thinkingLevel: solveConfig.thinkingLevel.pro,
        signal,
      })

      calls.push({ role: 'pro', usage: proAttempt.usage })
      routingLog.push(
        routingEntry({
          stage: 'escalate',
          role: 'pro',
          modelId: proAttempt.modelId,
          reason: decision.reason,
          usage: proAttempt.usage,
          latencyMs: proAttempt.latencyMs,
        })
      )

      const proVerification = runVerification(proAttempt.data)
      const proConfidence = combinedConfidence({
        solution: proAttempt.data,
        verification: proVerification,
        truncated: proAttempt.truncated,
      })

      // Pro'nun cevabını KOŞULSUZ kabul etmiyoruz. Nadiren de olsa Flash'ın
      // çözümü daha tutarlı çıkabiliyor; hangisi doğrulamadan geçtiyse o
      // kazanır, ikisi de geçtiyse güveni yüksek olan.
      if (proConfidence.score >= confidence.score) {
        attempt = proAttempt
        solution = proAttempt.data
        verification = proVerification
        confidence = proConfidence
      } else {
        routingLog.push({
          stage: 'escalate_rejected',
          reason: `Pro güveni (${proConfidence.score}) Flash'ın altında (${confidence.score})`,
        })
      }
    } catch (error) {
      // Pro'ya ulaşılamadıysa elimizdeki çözümle devam ederiz — ama
      // eşiği geçemiyorsa yine de gösterilmez (aşağıdaki nihai karar).
      routingLog.push({
        stage: 'escalate_failed',
        reason: error instanceof GeminiError ? error.kind : 'bilinmeyen',
      })
    }

    decision = decideAfterSolve({
      role: attempt.role,
      verification,
      confidence,
      alreadyEscalated: true,
    })
  }

  /* ---------- 6) NİHAİ KARAR ---------- */

  const telemetry = telemetryOf({ calls, routingLog, startedAt, escalated })

  // Model soruyu okuduğunu sandı ama çözerken okuyamadığını fark etti.
  if (solution?.reading?.readable === false) {
    return {
      status: 'unreadable',
      issues: (solution.reading.issues ?? []).map(readIssueMessage).filter(Boolean),
      rawIssues: solution.reading.issues ?? [],
      triage,
      telemetry,
    }
  }

  if (decision.action === 'refuse') {
    // §30: Yanlış cevap vermektense çözmemek daha iyi.
    return {
      status: 'refused',
      reason: decision.reason,
      confidence: confidence.score,
      triage,
      telemetry,
    }
  }

  /* ---------- 7) TAHTAYI DERLE ---------- */
  stage('board')

  // Fonksiyon eğrileri burada sayısal noktalara çevrilir; istemciye ham
  // ifade GİTMEZ ve tarayıcı hiçbir şey değerlendirmez (bkz. plot.js).
  const board = plotCurves(compileBoard(solution))

  if (!board.steps.length) {
    return {
      status: 'refused',
      reason: 'derlenebilir çözüm adımı yok',
      confidence: confidence.score,
      triage,
      telemetry,
    }
  }

  const topic = resolveTopic({
    subject: solution.analysis?.subject ?? triage?.subject,
    topic: solution.analysis?.topic ?? triage?.topic,
    subtopic: solution.analysis?.subtopic ?? triage?.subtopic,
    examType,
  })

  return {
    status: 'ok',
    board,
    solution,
    triage,
    topic,
    verification,
    confidence: confidence.score,
    confidenceReasons: confidence.reasons,
    modelRole: attempt.role,
    modelId: attempt.modelId,
    escalated,
    telemetry,
  }
}

/* ==================================================================
   TEK ADIM AÇIKLAMASI (§10, §11, §36)
   ================================================================== */

/**
 * "Neden?" derinleştirme, "Burada takıldım" ve serbest takip sorusu.
 *
 * GÖRSEL TEKRAR GÖNDERİLMEZ. Bağlam olarak ilk çözümde modelin kendi
 * okuduğu soru metni ve ilgili adımlar veriliyor. Görsel token'ı en pahalı
 * girdidir; her takip sorusunda yeniden ödemek §26'nın tam tersi olurdu.
 */
export async function explainStep({ session, stepIndex, kind, question, signal }) {
  const steps = session.board?.steps ?? []
  const step = steps[stepIndex] ?? null
  const previousStep = stepIndex > 0 ? steps[stepIndex - 1] : null
  const nextStep = stepIndex + 1 < steps.length ? steps[stepIndex + 1] : null

  // "Takıldım" ve serbest soru gerçek akıl yürütme ister; "Neden?" için
  // zaten önceden üretilmiş `why` alanı var (bu uç nokta yalnızca öğrenci
  // daha fazlasını istediğinde çağrılır), o yüzden ucuz modelle başlanır.
  const role = kind === 'stuck' || kind === 'chat' ? 'pro' : 'fast'

  const result = await generateWithFallback({
    role,
    system: EXPLAIN_SYSTEM,
    user: explainUserPrompt({
      kind,
      questionText: session.question_text ?? '',
      step,
      previousStep,
      nextStep,
      answer: session.board?.answer?.latex ?? null,
      question,
    }),
    schema: EXPLAIN_SCHEMA,
    maxOutputTokens: solveConfig.maxExplainTokens,
    thinkingLevel: solveConfig.thinkingLevel.explain,
    signal,
  })

  return {
    answer: result.data?.answer ?? null,
    math: result.data?.math ?? null,
    followUp: result.data?.follow_up ?? null,
    role: result.role,
    modelId: result.modelId,
    usage: result.usage,
    cost: totalCost([{ role: result.role, usage: result.usage }]),
  }
}

/* ==================================================================
   ALTERNATİF YÖNTEM (§12)
   ================================================================== */

export async function alternativeSolution({ session, signal }) {
  const steps = session.board?.steps ?? []

  const result = await generateWithFallback({
    role: 'pro',
    system: ALTERNATIVE_SYSTEM,
    user: alternativeUserPrompt({
      questionText: session.question_text ?? '',
      // Strateji `analysis` jsonb'sinin İÇİNDE saklanıyor (bkz.
      // persistence.js > sessionRowFromResult); satırda ayrı bir
      // `strategy` kolonu yok.
      strategy: session.analysis?.strategy ?? '',
      steps: steps.map((s) => ({ n: s.n, title: s.title })),
      answer: session.board?.answer?.latex ?? '',
    }),
    schema: buildAlternativeSchema({ withFigure: true }),
    thinkingLevel: solveConfig.thinkingLevel.pro,
    signal,
  })

  const data = result.data

  // Model "alternatif yok" derse ZORLAMIYORUZ (§12: "Sadece anlamlıysa
  // üret"). Aynı çözümü kelime değiştirerek tekrar etmek öğretmez.
  if (!data?.has_alternative || !Array.isArray(data.steps) || !data.steps.length) {
    return { hasAlternative: false, usage: result.usage, role: result.role }
  }

  const board = plotCurves(
    compileBoard({
      solution: { steps: data.steps, answer: session.board?.answer ?? {} },
      verification: {},
    })
  )

  return {
    hasAlternative: board.steps.length > 0,
    methodName: data.method_name ?? null,
    whyUseful: data.why_useful ?? null,
    board,
    usage: result.usage,
    role: result.role,
    modelId: result.modelId,
  }
}

/* ==================================================================
   ÖĞRENCİNİN ÇÖZÜMÜNÜ KONTROL (§18, §38)
   ================================================================== */

export async function checkStudentWork({ supabase, questionPath, workPath, questionText, signal }) {
  const images = []
  if (questionPath) images.push(await fetchImageForModel(supabase, questionPath))
  images.push(await fetchImageForModel(supabase, workPath))

  // Öğrencinin el yazısını okumak, basılı bir soruyu okumaktan zordur ve
  // hata bulmak akıl yürütme ister — burada ucuz modelle başlamak yanlış
  // teşhise yol açar. Doğrudan Pro.
  const result = await generateWithFallback({
    role: 'pro',
    system: CHECK_SYSTEM,
    user: checkUserPrompt({ questionText, hasQuestionImage: Boolean(questionPath) }),
    images,
    schema: buildCheckSchema({ withFigure: true }),
    thinkingLevel: solveConfig.thinkingLevel.pro,
    signal,
  })

  const data = result.data

  if (data?.readable === false) {
    return {
      status: 'unreadable',
      issues: (data.issues ?? []).map(readIssueMessage).filter(Boolean),
      usage: result.usage,
      role: result.role,
    }
  }

  const correction = Array.isArray(data?.correction) && data.correction.length
    ? plotCurves(compileBoard({ solution: { steps: data.correction, answer: {} }, verification: {} }))
    : null

  return {
    status: 'ok',
    verdict: data?.verdict ?? 'okunamadi',
    studentSteps: Array.isArray(data?.student_steps) ? data.student_steps : [],
    firstError: data?.first_error ?? null,
    correction,
    encouragement: data?.encouragement ?? null,
    usage: result.usage,
    role: result.role,
    modelId: result.modelId,
  }
}

/* ==================================================================
   TELEMETRİ (§43)
   ================================================================== */

function telemetryOf({ calls, routingLog, startedAt, escalated }) {
  const cost = totalCost(calls)
  return {
    durationMs: Date.now() - startedAt,
    inputTokens: cost.inputTokens,
    outputTokens: cost.outputTokens,
    costUsd: cost.usd,
    priceVerified: cost.priceVerified,
    modelCalls: cost.calls,
    escalated,
    routingLog,
  }
}
