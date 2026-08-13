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

const HOUR_MS = 60 * 60 * 1000
const DAY_MS = 24 * HOUR_MS

/**
 * Öğrencinin kotasını kontrol eder.
 * Dönüş: { allowed: true, remaining } | { allowed: false, code }
 *
 * Veritabanı okunamazsa istek ENGELLENMEZ (fail-open). Gerekçe: sayaç
 * okunamadığı için öğrenciyi tamamen erişimsiz bırakmak, kısa süreli bir
 * altyapı arızasını tam kesintiye çevirirdi. Asıl maliyet tavanını
 * `maxOutputTokens` ve `maxToolRounds` zaten sağlıyor.
 */
export async function checkRateLimit(supabase, studentId) {
  const now = Date.now()
  const dayAgo = new Date(now - DAY_MS).toISOString()

  const { data, error } = await supabase
    .from('ai_usage_events')
    .select('created_at')
    .eq('student_id', studentId)
    .eq('kind', 'chat')
    .gte('created_at', dayAgo)

  if (error) {
    return { allowed: true, remaining: null, degraded: true }
  }

  const events = data ?? []
  const dayCount = events.length
  if (dayCount >= config.rateLimit.perDay) {
    return { allowed: false, code: 'rate_limited' }
  }

  const hourAgo = now - HOUR_MS
  const hourCount = events.filter((e) => new Date(e.created_at).getTime() >= hourAgo).length
  if (hourCount >= config.rateLimit.perHour) {
    return { allowed: false, code: 'rate_limited_hour' }
  }

  return {
    allowed: true,
    remaining: Math.min(
      config.rateLimit.perDay - dayCount,
      config.rateLimit.perHour - hourCount
    ),
  }
}

/**
 * Kullanımı kaydeder. Hata yutulur: sayaç yazılamadı diye öğrencinin
 * aldığı cevabı çöpe atmak anlamsız olurdu.
 */
export async function recordUsage(supabase, studentId, usage = {}) {
  try {
    await supabase.from('ai_usage_events').insert({
      student_id: studentId,
      kind: 'chat',
      model: usage.model ?? config.model,
      prompt_tokens: usage.prompt_tokens ?? null,
      completion_tokens: usage.completion_tokens ?? null,
    })
  } catch {
    /* sayaç yazılamadı — akışı bozmaz */
  }
}
