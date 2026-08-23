/**
 * AI Soru Çözüm Merkezi — maliyet hesabı (§26).
 *
 * NEDEN AYRI SERVİS KATMANI?
 * --------------------------
 * Fiyat, iki farklı yerde hesaplanırsa iki farklı sonuç verir. Tek giriş
 * noktası olmasının asıl faydası şu: fiyat değiştiğinde (ki değişecek)
 * güncellenecek TEK bir yer var ve o yer de ortam değişkenini okuyor.
 *
 * FİYATLAR İSTEMCİYE GİTMEZ. Öğrencinin tarayıcısında "bu soru sana 0.003$
 * mal oldu" bilgisinin hiçbir işlevi yok; ürün maliyetini dışarı açmak ise
 * gereksiz bir bilgi sızıntısı. Hesap yalnızca sunucuda yapılır ve yalnızca
 * `ai_solution_sessions` satırına yazılır.
 */

import { solveConfig } from './config.js'

const PER_MILLION = 1_000_000

/**
 * Bir çağrının tahmini maliyetini USD cinsinden hesaplar.
 *
 * DÜŞÜNME TOKEN'LARI ÇIKTIYA DAHİLDİR. Gemini bunları
 * `thoughtsTokenCount` olarak ayrı raporlar ama FATURALANDIRMA çıktı
 * token'ı gibidir. Toplamazsak maliyeti sistematik olarak olduğundan
 * düşük gösteririz — reasoning modellerinde bu fark 3-4 katı bulabilir.
 * (`scripts/bench/providers/gemini.mjs` aynı kararı veriyor.)
 *
 * @param {object} params
 * @param {'fast'|'pro'} params.role      Model rolü (fiyat buna bağlı)
 * @param {number} params.inputTokens
 * @param {number} params.outputTokens    Düşünme token'ları DAHİL
 * @param {number} [params.cachedInputTokens]
 * @returns {{ usd: number, priceVerified: boolean }}
 */
export function calculateAICost({ role, inputTokens = 0, outputTokens = 0, cachedInputTokens = 0 }) {
  const price = solveConfig.pricing[role] ?? solveConfig.pricing.fast

  // Önbellekli girdi ayrı fiyatlanmıyorsa normal girdi fiyatından sayılır.
  // Sıfır saymak maliyeti olduğundan düşük gösterirdi.
  const billableInput = Math.max(0, inputTokens)
  const billableOutput = Math.max(0, outputTokens)

  const usd =
    (billableInput * price.in) / PER_MILLION + (billableOutput * price.out) / PER_MILLION

  return {
    // 6 haneye yuvarlanır: tek soru maliyeti 0.001$ mertebesinde,
    // 2 hane her şeyi 0.00 gösterirdi.
    usd: Math.round(usd * 1e6) / 1e6,
    priceVerified: price.verified === true,
    cachedInputTokens,
  }
}

/**
 * Bir oturumdaki TÜM çağrıların toplam maliyeti. Bir soru birden fazla
 * model çağrısı yapabilir (triyaj → çözüm → doğrulama → yükseltme);
 * öğrenci başı gerçek maliyet ancak toplamla anlamlıdır.
 *
 * @param {Array<{role: string, usage: object}>} calls
 */
export function totalCost(calls = []) {
  let usd = 0
  let inputTokens = 0
  let outputTokens = 0
  let priceVerified = true

  for (const call of calls) {
    const result = calculateAICost({
      role: call.role,
      inputTokens: call.usage?.input ?? 0,
      outputTokens: call.usage?.output ?? 0,
    })
    usd += result.usd
    inputTokens += call.usage?.input ?? 0
    outputTokens += call.usage?.output ?? 0
    if (!result.priceVerified) priceVerified = false
  }

  return {
    usd: Math.round(usd * 1e6) / 1e6,
    inputTokens,
    outputTokens,
    calls: calls.length,
    priceVerified,
  }
}
