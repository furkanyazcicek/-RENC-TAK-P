/**
 * AI Koç — öğrenci bazlı hız sınırı.
 *
 * Sayaç `ai_usage_events` tablosunda tutulur. O tabloda BİLEREK update ve
 * delete politikası yoktur (bkz. migration_ai_coach.sql): RLS varsayılanı
 * "politikası olmayan işlem yasak" olduğu için öğrenci kendi kullanım
 * kayıtlarını silip sınırı sıfırlayamaz.
 *
 * Sayım öğrencinin kendi JWT'siyle yapılır; RLS zaten yalnızca kendi
 * satırlarını görmesine izin verdiği için başkasının kotasını okuyamaz.
 */

import { config } from './config.js'

const MINUTE_MS = 60 * 1000
const HOUR_MS = 60 * MINUTE_MS
const DAY_MS = 24 * HOUR_MS

/**
 * Öğrencinin kotasını kontrol eder.
 * Dönüş: { allowed: true, remaining } | { allowed: false, code }
 *
 * Veritabanı okunamazsa istek ENGELLENMEZ (fail-open). Gerekçe: sayaç
 * okunamadığı için öğrenciyi tamamen erişimsiz bırakmak, kısa süreli bir
 * altyapı arızasını tam kesintiye çevirirdi. Asıl maliyet tavanını
 * `maxOutputTokens` ve `maxToolRounds` zaten sağlıyor.
 *
 * `options` SONRADAN EKLENDİ (AI Soru Çözüm modülü için) ve varsayılanları
 * eski davranışın birebir aynısıdır — mevcut AI Koç çağrıları
 * `checkRateLimit(supabase, id)` biçiminde kalabilir:
 *   kind    → hangi sayaç ('chat' | 'solve'). Aynı tabloda ayrı kotalar.
 *   limits  → { perMinute?, perHour, perDay }
 */
export async function checkRateLimit(supabase, studentId, options = {}) {
  const kind = options.kind ?? 'chat'
  const limits = options.limits ?? config.rateLimit

  const now = Date.now()
  const dayAgo = new Date(now - DAY_MS).toISOString()

  const { data, error } = await supabase
    .from('ai_usage_events')
    .select('created_at')
    .eq('student_id', studentId)
    .eq('kind', kind)
    .gte('created_at', dayAgo)

  if (error) {
    return { allowed: true, remaining: null, degraded: true }
  }

  const events = data ?? []
  const dayCount = events.length
  if (dayCount >= limits.perDay) {
    return { allowed: false, code: 'rate_limited' }
  }

  const hourAgo = now - HOUR_MS
  const hourCount = events.filter((e) => new Date(e.created_at).getTime() >= hourAgo).length
  if (hourCount >= limits.perHour) {
    return { allowed: false, code: 'rate_limited_hour' }
  }

  // Dakikalık pencere yalnızca tanımlıysa uygulanır. Soru çözümde var
  // (tek çağrı pahalı, art arda 10 fotoğraf yüklemenin meşru sebebi yok),
  // sohbette yok — orada hızlı yazışmak normal.
  let minuteCount = 0
  if (limits.perMinute) {
    const minuteAgo = now - MINUTE_MS
    minuteCount = events.filter((e) => new Date(e.created_at).getTime() >= minuteAgo).length
    if (minuteCount >= limits.perMinute) {
      return { allowed: false, code: 'rate_limited_minute' }
    }
  }

  const remaining = [limits.perDay - dayCount, limits.perHour - hourCount]
  if (limits.perMinute) remaining.push(limits.perMinute - minuteCount)

  return { allowed: true, remaining: Math.min(...remaining) }
}

/**
 * Kullanımı kaydeder. Hata yutulur: sayaç yazılamadı diye öğrencinin
 * aldığı cevabı çöpe atmak anlamsız olurdu.
 *
 * `usage.kind` verilmezse 'chat' varsayılır — eski çağrılar değişmedi.
 */
export async function recordUsage(supabase, studentId, usage = {}) {
  const kind = usage.kind ?? 'chat'
  try {
    await supabase.from('ai_usage_events').insert({
      student_id: studentId,
      kind,
      // Model adı yalnızca SOHBET için varsayılana düşer. Soru çözümde
      // farklı bir sağlayıcı (Gemini) kullanılıyor; adı bilinmiyorsa
      // OpenAI modelinin adını yazmak telemetriyi düpedüz yanlış yapardı.
      model: usage.model ?? (kind === 'chat' ? config.model : null),
      prompt_tokens: usage.prompt_tokens ?? null,
      completion_tokens: usage.completion_tokens ?? null,
    })
  } catch {
    /* sayaç yazılamadı — akışı bozmaz */
  }
}
