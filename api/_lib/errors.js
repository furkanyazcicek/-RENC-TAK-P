/**
 * AI Koç — hata çevirisi.
 *
 * KURAL: OpenAI'ın veya Supabase'in ham hata metni ASLA kullanıcıya
 * gösterilmez. Ham metin API anahtarı parçaları, kuruluş kimliği, tablo
 * adı veya sorgu ayrıntısı sızdırabilir. Kullanıcı yalnızca ne yapması
 * gerektiğini söyleyen sade bir cümle görür; teknik ayrıntı sunucu
 * loglarında kalır.
 */

const MESSAGES = {
  unauthenticated: 'Oturumun sona ermiş görünüyor. Sayfayı yenileyip tekrar giriş yapar mısın?',
  profile_missing: 'Profilin bulunamadı. Sayfayı yenileyip tekrar dener misin?',
  student_only: 'AI Koç şu an yalnızca öğrenci hesaplarında kullanılabiliyor.',
  not_configured: 'AI Koç henüz yapılandırılmamış. Öğretmeninle iletişime geçebilirsin.',
  rate_limited: 'Bugünlük AI Koç kullanım sınırına ulaştın. Biraz sonra tekrar deneyebilirsin.',
  rate_limited_hour: 'Kısa sürede çok fazla soru sordun. Birkaç dakika sonra tekrar deneyebilirsin.',
  invalid_request: 'Mesajın işlenemedi. Kısaltıp tekrar dener misin?',
  message_too_long: 'Mesajın biraz uzun kaçtı. Daha kısa yazıp tekrar dener misin?',
  conversation_not_found: 'Bu sohbet bulunamadı. Yeni bir sohbet başlatabilirsin.',
  action_not_found: 'Bu öneri artık geçerli değil. AI Koç’a tekrar sorabilirsin.',
  action_invalid: 'Bu işlem uygulanamadı. AI Koç’tan yeniden öneri isteyebilirsin.',
  upstream_timeout: 'AI Koç yanıt vermekte gecikti. Birkaç saniye sonra tekrar deneyebilirsin.',
  upstream_rate_limited: 'AI Koç şu anda yoğun. Birkaç saniye sonra tekrar deneyebilirsin.',
  upstream_error: 'AI Koç şu anda yanıt veremiyor. Birkaç saniye sonra tekrar deneyebilirsin.',
  database_error: 'Verilerine şu anda ulaşılamıyor. Birkaç saniye sonra tekrar deneyebilirsin.',
  unknown: 'Beklenmedik bir sorun oluştu. Birkaç saniye sonra tekrar deneyebilirsin.',
}

/** Hata kodunu kullanıcıya gösterilecek Türkçe cümleye çevirir. */
export function userMessage(code) {
  return MESSAGES[code] ?? MESSAGES.unknown
}

/**
 * OpenAI'dan dönen HTTP durumunu iç hata koduna eşler.
 * 401/403 (anahtar sorunu) kullanıcıya "yapılandırma" olarak görünür —
 * öğrenciye "geçersiz API anahtarı" demek hem anlamsız hem risklidir.
 */
export function mapUpstreamStatus(status) {
  if (status === 429) return 'upstream_rate_limited'
  if (status === 401 || status === 403) return 'not_configured'
  if (status === 408 || status === 504) return 'upstream_timeout'
  return 'upstream_error'
}

/**
 * Sunucu logu için güvenli özet. Hata nesnesinin tamamını loglamak
 * istek gövdesindeki öğrenci verisini de loglara taşıyabilir.
 */
export function logError(scope, error, extra = {}) {
  const detail = error instanceof Error ? `${error.name}: ${error.message}` : String(error)
  console.error(`[ai-coach:${scope}] ${detail}`, extra)
}

/** JSON hata yanıtı — gövdede yalnızca kod ve çevrilmiş mesaj bulunur. */
export function sendError(res, status, code) {
  res.status(status).json({ error: { code, message: userMessage(code) } })
}
