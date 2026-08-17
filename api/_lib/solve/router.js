/**
 * AI Soru Çözüm Merkezi — model yönlendirme (§3, §21, §22).
 *
 * AMAÇ
 * ----
 * "Kaliteden ödün vermeden maliyeti düşürmek." Bu iki hedef doğrudan
 * çatışır, o yüzden karar tek bir yerde ve AÇIKÇA verilir — çağrı
 * noktalarına dağılmış `if` blokları hâlinde değil.
 *
 * İKİ AŞAMALI KARAR
 * -----------------
 *   1. ÖN KARAR (triyaj sonrası): soru daha çözülmeden, ucuz bir
 *      sınıflandırmaya bakarak hangi modelle başlanacağını seçer.
 *   2. SON KARAR (çözüm sonrası): elde edilen çözüme bakarak "bu yeterli
 *      mi, Pro'ya yükseltmeli mi, hiç göstermemeli mi" der.
 *
 * İkincisi olmadan birincisi işe yaramaz: triyaj bir soruyu "kolay"
 * sanabilir. Asıl güvence, ÜRETİLMİŞ çözümün deterministik doğrulamadan
 * geçmesidir (verify.js).
 *
 * ÖĞRENCİYE MODEL ADI GÖSTERİLMEZ (§3 sonu). Karar sunucuda loglanır ve
 * `ai_solution_sessions` satırına yazılır; arayüz yalnızca çözümü gösterir.
 */

import { solveConfig } from './config.js'

/**
 * @typedef {object} RouteDecision
 * @property {'fast'|'pro'} role
 * @property {string} reason        Loglanacak insan-okunur gerekçe
 * @property {string} thinkingLevel   Düşünme düzeyi (minimal|low|medium|high)
 * @property {boolean} needsFigure  Çözüm şemasına şekil alanları eklensin mi
 */

/**
 * TRİYAJ SONRASI ÖN KARAR.
 *
 * @param {object} triage  TRIAGE_SCHEMA çıktısı
 * @returns {RouteDecision}
 */
export function routeFromTriage(triage) {
  const cfg = solveConfig.routing
  const reasons = []

  const difficulty = clampInt(triage?.difficulty, 1, 5, 3)
  const steps = clampInt(triage?.estimated_steps, 0, 60, 3)
  const reasoning = clampInt(triage?.reasoning_need, 1, 5, 3)
  const visual = clampInt(triage?.visual_complexity, 1, 5, 1)
  const confidence = clampNum(triage?.confidence, 0, 1, 0.5)
  const subject = triage?.subject ?? 'Diğer'

  // Şekil alanları ŞEMAYA ancak gerekiyorsa eklenir: şekil şeması büyük
  // ve her isteğe binen girdi token'ı demek (§26).
  const needsFigure =
    visual >= 2 ||
    cfg.visualSubjects.includes(subject) ||
    subject === 'Biyoloji' /* akış şeması */ ||
    subject === 'Kimya' /* tablo/denklem */

  // --- Pro'ya doğrudan gitmeyi gerektiren durumlar ---

  if (confidence < cfg.triageConfidenceFloor) {
    reasons.push(`triyaj güveni düşük (${confidence})`)
  }
  if (difficulty >= cfg.proDifficultyFrom) {
    reasons.push(`zorluk ${difficulty}`)
  }
  if (steps >= cfg.proStepsFrom) {
    reasons.push(`tahmini ${steps} adım`)
  }
  if (reasoning >= 4) {
    reasons.push(`akıl yürütme ihtiyacı ${reasoning}`)
  }
  // Görsel akıl yürütme, hızlı modellerin en çok hata yaptığı alan.
  // ⚠️ Bu bir VARSAYIM: benchmark (scripts/bench) hiç koşturulmadığı için
  // ampirik kanıt yok. Gerçek veri geldiğinde bu kural gözden geçirilmeli.
  if (cfg.visualSubjects.includes(subject) && visual >= 3) {
    reasons.push(`${subject} + karmaşık şekil`)
  }

  if (reasons.length) {
    return {
      role: 'pro',
      reason: reasons.join(', '),
      thinkingLevel: solveConfig.thinkingLevel.pro,
      needsFigure,
    }
  }

  return {
    role: 'fast',
    reason: `kolay/orta (zorluk ${difficulty}, ${steps} adım)`,
    thinkingLevel: solveConfig.thinkingLevel.fast,
    needsFigure,
  }
}

/**
 * ÇÖZÜM SONRASI SON KARAR.
 *
 * @param {object} params
 * @param {'fast'|'pro'} params.role         Çözümü üreten model rolü
 * @param {object} params.verification       verify.js > runVerification çıktısı
 * @param {{score:number, reasons:string[]}} params.confidence  combinedConfidence çıktısı
 * @param {boolean} params.alreadyEscalated  Bu soru için Pro zaten denendi mi
 *
 * @returns {{ action: 'accept'|'escalate'|'refuse', reason: string }}
 */
export function decideAfterSolve({ role, verification, confidence, alreadyEscalated }) {
  const cfg = solveConfig.routing

  // 1) Çürütülmüş iddia = en güçlü olumsuz sinyal. Flash ürettiyse Pro'ya
  //    yükselt; Pro ürettiyse gösterme.
  if (verification?.status === 'failed') {
    if (role === 'fast' && !alreadyEscalated) {
      return { action: 'escalate', reason: 'doğrulama iddiası çürüdü' }
    }
    return { action: 'refuse', reason: 'doğrulama iddiası çürüdü (Pro)' }
  }

  // 2) Güven eşiğin altındaysa: Flash'tan Pro'ya bir şans daha.
  if (confidence.score < cfg.escalateConfidenceBelow) {
    if (role === 'fast' && !alreadyEscalated) {
      return {
        action: 'escalate',
        reason: `güven ${confidence.score} < ${cfg.escalateConfidenceBelow} (${confidence.reasons.join('; ')})`,
      }
    }
  }

  // 3) Nihai eşiğin de altındaysa çözüm GÖSTERİLMEZ.
  //    §30: "Yanlış cevap vermektense çözmemek daha iyi."
  if (confidence.score < cfg.refuseBelowConfidence) {
    return {
      action: 'refuse',
      reason: `nihai güven ${confidence.score} < ${cfg.refuseBelowConfidence} (${confidence.reasons.join('; ')})`,
    }
  }

  return { action: 'accept', reason: `güven ${confidence.score}` }
}

/**
 * Yönlendirme günlüğü — `ai_solution_sessions.routing_log` alanına yazılır.
 * Öğrenciye GÖSTERİLMEZ; §41'deki admin metriklerinin ham verisi budur.
 */
export function routingEntry({
  stage,
  role,
  modelId,
  reason,
  usage,
  latencyMs,
  fallbackFrom,
  schemaDowngraded,
}) {
  return {
    stage,
    role,
    model: modelId,
    reason,
    input_tokens: usage?.input ?? 0,
    output_tokens: usage?.output ?? 0,
    reasoning_tokens: usage?.reasoning ?? 0,
    latency_ms: latencyMs ?? null,
    ...(fallbackFrom ? { fallback_from: fallbackFrom } : {}),
    // Şekil alanları sağlayıcı reddi yüzünden düşürüldüyse burada durur:
    // "şekilli sorularda tahta boş" şikâyetinin tek kanıtı bu bayrak.
    ...(schemaDowngraded ? { schema_downgraded: true } : {}),
  }
}

/* ------------------------------------------------------------------ */

function clampInt(value, min, max, fallback) {
  const n = Math.round(Number(value))
  if (!Number.isFinite(n)) return fallback
  return n < min ? min : n > max ? max : n
}

function clampNum(value, min, max, fallback) {
  const n = Number(value)
  if (!Number.isFinite(n)) return fallback
  return n < min ? min : n > max ? max : n
}
