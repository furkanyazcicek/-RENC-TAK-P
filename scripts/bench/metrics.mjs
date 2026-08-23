/**
 * METRİKLER — toplama, kalibrasyon, güven aralıkları, maliyet.
 *
 * ═══════════════════════════════════════════════════════════════════
 * GÜVEN ARALIĞI NEDEN ZORUNLU
 * ═══════════════════════════════════════════════════════════════════
 * Kullanıcının kuralı: "istatistiksel olarak örneklem yetersizse bunu
 * açıkça belirt, kendimize sahte bir güven vermeyelim."
 *
 * 50 soruda ölçülen %86, gerçekte %73-94 arasında herhangi bir yer
 * olabilir. İki modelin %86 ve %82 çıkması, aralarında fark OLDUĞU
 * anlamına gelmez. Bu yüzden her oran metriği Wilson güven aralığıyla
 * birlikte raporlanır ve model karşılaştırmasında aralıklar çakışıyorsa
 * "fark ölçülemedi" denir — "A daha iyi" denmez.
 */

/* ==================================================================
   ORAN + WILSON GÜVEN ARALIĞI
   ================================================================== */

/**
 * Wilson skor aralığı. Normal yaklaşımdan (p ± 1.96·√(p(1-p)/n)) farkı:
 * küçük örneklemde ve uçlarda (p→0 veya p→1) doğru davranır. 50 soruda
 * %100 doğruluk gören normal yaklaşım "±0" der ki bu saçmadır; Wilson
 * "%93-100" der.
 */
export function proportion(successes, total, z = 1.96) {
  if (!total) return { n: 0, k: 0, rate: null, low: null, high: null, width: null }

  const p = successes / total
  const z2 = z * z
  const denom = 1 + z2 / total
  const center = (p + z2 / (2 * total)) / denom
  const margin = (z * Math.sqrt((p * (1 - p) + z2 / (4 * total)) / total)) / denom

  const low = Math.max(0, center - margin)
  const high = Math.min(1, center + margin)

  return {
    n: total,
    k: successes,
    rate: p,
    low,
    high,
    width: high - low,
  }
}

/** İki oranın güven aralıkları çakışıyor mu — "fark var" diyebilir miyiz? */
export function separable(a, b) {
  if (!a || !b || a.rate === null || b.rate === null) return null
  return a.low > b.high || b.low > a.high
}

/* ==================================================================
   YÜZDELİKLER
   ================================================================== */

export function percentile(values, p) {
  const sorted = values.filter((v) => Number.isFinite(v)).sort((a, b) => a - b)
  if (!sorted.length) return null
  // Doğrusal enterpolasyonlu yüzdelik — küçük örneklemde en yakın
  // komşudan daha kararlı.
  const index = (sorted.length - 1) * p
  const lower = Math.floor(index)
  const upper = Math.ceil(index)
  if (lower === upper) return sorted[lower]
  return sorted[lower] + (sorted[upper] - sorted[lower]) * (index - lower)
}

export function mean(values) {
  const nums = values.filter((v) => Number.isFinite(v))
  if (!nums.length) return null
  return nums.reduce((s, v) => s + v, 0) / nums.length
}

/* ==================================================================
   MALİYET
   ================================================================== */

/**
 * Tek çağrının maliyeti.
 *
 * DİKKAT: reasoning token'ları `usage.output` içinde ZATEN sayılıyor
 * (adaptörler bunu böyle normalize ediyor). Ayrıca eklemek çift sayım
 * olur. `reasoning` alanı yalnızca raporlama için tutuluyor.
 */
export function costOf(usage, model) {
  if (!usage) return 0
  const cachedIn = usage.cachedInput ?? 0
  const freshIn = Math.max(0, (usage.input ?? 0) - cachedIn)

  const inRate = model.priceIn ?? 0
  const cachedRate = model.priceCachedIn ?? inRate
  const outRate = model.priceOut ?? 0

  return (freshIn * inRate + cachedIn * cachedRate + (usage.output ?? 0) * outRate) / 1e6
}

/* ==================================================================
   KALİBRASYON
   ================================================================== */

const DEFAULT_BINS = [
  [0.0, 0.6],
  [0.6, 0.7],
  [0.7, 0.8],
  [0.8, 0.9],
  [0.9, 1.001], // 1.0 dahil olsun
]

/**
 * Beyan edilen güven → gerçek doğruluk eğrisi.
 *
 * Bu tablonun okunma biçimi: bir kutuda "beyan 0.9-1.0, gerçek %62"
 * yazıyorsa model KALİBRE DEĞİLDİR ve güven skoru ürün kapısı olarak
 * KULLANILAMAZ. O modelde ya self-consistency'ye ya da her cevabı
 * uyarıyla göstermeye mecbur kalırsınız.
 */
export function calibration(grades, bins = DEFAULT_BINS) {
  const scored = grades.filter(
    (g) => typeof g.self_confidence === 'number' && typeof g.answer_correct === 'boolean'
  )

  const rows = bins.map(([low, high]) => {
    const inBin = scored.filter((g) => g.self_confidence >= low && g.self_confidence < high)
    const correct = inBin.filter((g) => g.answer_correct).length
    return {
      label: `${low.toFixed(2)}–${Math.min(1, high).toFixed(2)}`,
      low,
      high,
      ...proportion(correct, inBin.length),
    }
  })

  /**
   * Beklenen Kalibrasyon Hatası: beyan ile gerçek arasındaki ortalama
   * fark, kutu büyüklüğüne göre ağırlıklı. 0'a yakın = iyi kalibre.
   */
  let ece = null
  if (scored.length) {
    let sum = 0
    for (const row of rows) {
      if (!row.n) continue
      const inBin = scored.filter((g) => g.self_confidence >= row.low && g.self_confidence < row.high)
      const meanConf = mean(inBin.map((g) => g.self_confidence))
      sum += (row.n / scored.length) * Math.abs(meanConf - row.rate)
    }
    ece = sum
  }

  return { rows, ece, scored: scored.length }
}

/**
 * ÜRÜN KAPISI ARAYICI — Faz 0'ın asıl çıktısı.
 *
 * Soru: "Öyle bir güven eşiği X var mı ki, X üstündeki cevaplarda
 * doğruluk ≥ hedef VE soruların yeterince büyük bir kısmı X'i geçsin?"
 *
 * Böyle bir X yoksa o model için güven kapısı kurulamaz. Bu, modelin
 * kötü olduğu anlamına gelmez — güven skorunun işe yaramadığı anlamına
 * gelir ve mimariyi değiştirir (self-consistency ya da her cevaba uyarı).
 *
 * Eşiğin ALT SINIRI kullanılır (`low`), ortalama değil: 20 soruda
 * ölçülen %100'e dayanıp ürün kapısı kurmak tam olarak kaçınmamız
 * gereken sahte güvendir.
 */
export function findConfidenceGate(grades, { targetAccuracy = 0.95, minCoverage = 0.5 } = {}) {
  const scored = grades.filter(
    (g) => typeof g.self_confidence === 'number' && typeof g.answer_correct === 'boolean'
  )
  if (scored.length < 10) {
    return { found: false, reason: `yetersiz örneklem (${scored.length})`, candidates: [] }
  }

  const candidates = []
  for (let t = 0.5; t <= 0.99; t += 0.05) {
    const above = scored.filter((g) => g.self_confidence >= t)
    if (!above.length) continue

    const correct = above.filter((g) => g.answer_correct).length
    const acc = proportion(correct, above.length)
    const coverage = above.length / scored.length

    candidates.push({
      threshold: Math.round(t * 100) / 100,
      coverage,
      shown: above.length,
      accuracy: acc,
      // Kapı kararı ALT SINIRA göre verilir.
      meets: acc.low >= targetAccuracy && coverage >= minCoverage,
    })
  }

  const viable = candidates.filter((c) => c.meets)
  // Kapıyı geçenler arasından EN ÇOK KAPSAYANI seç (en düşük eşik).
  const best = viable.sort((a, b) => b.coverage - a.coverage)[0] ?? null

  return {
    found: Boolean(best),
    gate: best,
    reason: best
      ? null
      : `hiçbir eşikte "doğruluk alt sınırı ≥ %${(targetAccuracy * 100).toFixed(0)} ve kapsam ≥ %${(minCoverage * 100).toFixed(0)}" sağlanmadı`,
    candidates,
  }
}

/* ==================================================================
   MODEL ÖZETİ
   ================================================================== */

export function summarize(grades, model, options = {}) {
  const total = grades.length
  const ok = grades.filter((g) => g.call_ok)
  const usable = ok.filter((g) => g.schema_valid)

  // Cevap doğruluğu YALNIZCA karşılaştırılabilir olanlar üzerinden.
  // Gold'u eksik soruyu "yanlış" saymak modeli haksız yere cezalandırır.
  const answerable = ok.filter((g) => typeof g.answer_correct === 'boolean')
  const correct = answerable.filter((g) => g.answer_correct)

  const topicable = ok.filter((g) => typeof g.topic_correct === 'boolean')
  const readable = ok.filter((g) => typeof g.reading_ok === 'boolean')

  const reasoned = ok.filter((g) => typeof g.reasoning_correct === 'boolean')
  const reasonedHuman = reasoned.filter((g) => g.reasoning_source === 'human')

  const latencies = ok.map((g) => g.latency_ms)
  const costs = ok.map((g) => costOf(g.usage, model))

  const verificationRun = ok.filter((g) => g.verification_status !== 'no_claims' && g.verification_status !== 'not_run')

  return {
    model: model.key,
    label: model.label,
    provider: model.provider,
    model_id: model.id,

    /* --- çağrı sağlığı --- */
    attempted: total,
    succeeded: ok.length,
    failed_calls: total - ok.length,
    error_breakdown: countBy(grades.filter((g) => !g.call_ok), (g) => g.error_kind ?? 'bilinmiyor'),
    truncated: ok.filter((g) => g.truncated).length,

    /* --- şema uyumu --- */
    schema_valid: proportion(usable.length, ok.length),
    schema_recovered: ok.filter((g) => g.schema_recovered).length,

    /* --- ANA METRİKLER --- */
    answer_accuracy: proportion(correct.length, answerable.length),
    topic_accuracy: proportion(topicable.filter((g) => g.topic_correct).length, topicable.length),
    reading_accuracy: proportion(readable.filter((g) => g.reading_ok).length, readable.length),
    reading_needs_review: ok.filter((g) => g.reading_ok === null && g.reading_similarity !== null).length,

    /* --- gerekçe: kaynağı ayrı raporlanır --- */
    reasoning_correct: proportion(reasoned.filter((g) => g.reasoning_correct).length, reasoned.length),
    reasoning_reviewed_by_human: reasonedHuman.length,
    reasoning_reviewed_total: reasoned.length,

    /* --- KRİTİK METRİK --- */
    // Doğru cevap + yanlış gerekçe. Kullanıcının §9 kuralı: bu FAIL'dir.
    correct_answer_wrong_reasoning: proportion(
      reasoned.filter((g) => g.answer_correct === true && g.reasoning_correct === false).length,
      reasoned.filter((g) => g.answer_correct === true).length
    ),
    // Yanlış + yüksek güven — DrKoç için en tehlikeli hata sınıfı.
    wrong_and_confident: proportion(
      answerable.filter((g) => g.wrong_and_confident === true).length,
      answerable.length
    ),

    /* --- çekimserlik --- */
    abstained: proportion(ok.filter((g) => g.abstained).length, ok.length),

    /* --- deterministik doğrulama --- */
    verification: {
      no_claims: ok.filter((g) => g.verification_status === 'no_claims').length,
      unusable: ok.filter((g) => g.verification_status === 'unusable').length,
      passed: ok.filter((g) => g.verification_status === 'passed').length,
      failed: ok.filter((g) => g.verification_status === 'failed').length,
      coverage: proportion(verificationRun.length, ok.length),
      pass_rate: proportion(
        ok.filter((g) => g.verification_status === 'passed').length,
        verificationRun.length
      ),
      // ASIL SORU: doğrulama, yanlış cevabı yakalıyor mu?
      // Bu iki sayı doğrulamanın ürün değerini belirler.
      catches_wrong: proportion(
        answerable.filter((g) => g.answer_correct === false && g.verification_status === 'failed').length,
        answerable.filter((g) => g.answer_correct === false && g.verification_status !== 'no_claims').length
      ),
      false_alarm: proportion(
        answerable.filter((g) => g.answer_correct === true && g.verification_status === 'failed').length,
        answerable.filter((g) => g.answer_correct === true && g.verification_status !== 'no_claims').length
      ),
    },

    /* --- performans --- */
    latency: {
      mean: mean(latencies),
      p50: percentile(latencies, 0.5),
      p95: percentile(latencies, 0.95),
      max: latencies.length ? Math.max(...latencies) : null,
    },

    /* --- token & maliyet --- */
    tokens: {
      input: mean(ok.map((g) => g.usage?.input ?? 0)),
      output: mean(ok.map((g) => g.usage?.output ?? 0)),
      reasoning: mean(ok.map((g) => g.usage?.reasoning ?? 0)),
      cached: mean(ok.map((g) => g.usage?.cachedInput ?? 0)),
    },
    cost: {
      total: costs.reduce((s, c) => s + c, 0),
      per_question: mean(costs),
      // EN ÖNEMLİ MALİYET METRİĞİ. Ucuz ama yanlış model pahalıdır.
      per_correct_answer:
        correct.length > 0 ? costs.reduce((s, c) => s + c, 0) / correct.length : null,
    },

    /* --- kalibrasyon --- */
    calibration: calibration(ok),
    gate: findConfidenceGate(ok, options.gate),

    /* --- kategori kırılımı --- */
    by_category: byCategory(ok),
  }
}

function byCategory(grades) {
  const groups = new Map()
  for (const g of grades) {
    const key = g.category ?? 'bilinmiyor'
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(g)
  }

  const out = {}
  for (const [key, list] of groups) {
    const answerable = list.filter((g) => typeof g.answer_correct === 'boolean')
    out[key] = {
      n: list.length,
      answer_accuracy: proportion(answerable.filter((g) => g.answer_correct).length, answerable.length),
      wrong_and_confident: proportion(
        answerable.filter((g) => g.wrong_and_confident === true).length,
        answerable.length
      ),
      reading_needs_review: list.filter((g) => g.reading_ok === null && g.reading_similarity !== null).length,
    }
  }
  return out
}

function countBy(list, keyFn) {
  const out = {}
  for (const item of list) {
    const key = keyFn(item)
    out[key] = (out[key] ?? 0) + 1
  }
  return out
}

/* ==================================================================
   ÖLÇEK PROJEKSİYONU
   ================================================================== */

/**
 * Farklı mimari senaryolarında ölçek maliyeti.
 *
 * `cascadeRate` gerçek ölçümden gelir (doğrulama veya güven kapısından
 * kalan soruların oranı), tahminden değil. Ölçüm yoksa null döner ve
 * rapor "ölçülemedi" yazar — uydurma bir oranla maliyet projeksiyonu
 * yapmak, kararın kendisini uydurmaktır.
 */
export function projectCost({ perQuestion, volumes, cascadeRate = null, cascadeCost = null, selfConsistencyK = 3 }) {
  const rows = []

  for (const volume of volumes) {
    const single = perQuestion * volume

    rows.push({
      volume,
      single_model: single,
      self_consistency: perQuestion * selfConsistencyK * volume,
      always_two_models: cascadeCost !== null ? (perQuestion + cascadeCost) * volume : null,
      cascade:
        cascadeRate !== null && cascadeCost !== null
          ? (perQuestion + cascadeRate * cascadeCost) * volume
          : null,
    })
  }

  return rows
}
