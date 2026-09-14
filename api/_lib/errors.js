/**
 * AI modülleri — hata çevirisi.
 *
 * KURAL: OpenAI'ın, Gemini'nin veya Supabase'in ham hata metni ASLA
 * kullanıcıya gösterilmez. Ham metin API anahtarı parçaları, kuruluş
 * kimliği, tablo adı veya sorgu ayrıntısı sızdırabilir. Kullanıcı yalnızca
 * ne yapması gerektiğini söyleyen sade bir cümle görür; teknik ayrıntı
 * sunucu loglarında kalır.
 *
 * Hem AI Koç (`api/ai-coach/*`) hem AI Soru Çözüm (`api/ai-solve/*`)
 * buradan beslenir; iki modülün de aynı dili konuşması için tek dosya.
 */

const MESSAGES = {
  unauthenticated: 'Oturumun sona ermiş görünüyor. Sayfayı yenileyip tekrar giriş yapar mısın?',
  profile_missing: 'Profilin bulunamadı. Sayfayı yenileyip tekrar dener misin?',
  student_only: 'AI Koç şu an yalnızca öğrenci hesaplarında kullanılabiliyor.',
  teacher_only: 'Bu ders düzenleme işlemi yalnızca öğretmen hesabıyla yapılabilir.',
  not_configured: 'AI Koç henüz yapılandırılmamış. Öğretmeninle iletişime geçebilirsin.',
  rate_limited: 'Bugünlük AI Koç kullanım sınırına ulaştın. Biraz sonra tekrar deneyebilirsin.',
  rate_limited_hour: 'Kısa sürede çok fazla soru sordun. Birkaç dakika sonra tekrar deneyebilirsin.',
  rate_limit_unavailable: 'Kullanım hakkını şu anda güvenle doğrulayamıyorum. Birkaç dakika sonra tekrar deneyebilir misin?',
  feature_temporarily_unavailable: 'Bu özellik şu anda güvenli moda alındı. Kısa bir süre sonra tekrar deneyebilirsin.',
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

  /* ---------- AI Soru Çözüm Merkezi (api/ai-solve/*) ----------
     Bu mesajların hepsi öğrenciye NE YAPACAĞINI söyler. "Hata oluştu"
     demek öğrenciyi çıkmaza sokar; "fotoğrafın alt kısmı görünmüyor"
     demek ise doğrudan çözüme götürür (§23, §29). */

  // `not_configured` ile aynı durum ama AYRI METİN. Sebep: o mesaj
  // "AI Koç henüz yapılandırılmamış" diyor ve Soru Çöz ekranında çıkınca
  // öğrenci yanlış özelliğin bozuk olduğunu sanıyor. Aynı kodu iki
  // modülde paylaşmak, hata mesajını yanlış yere işaret ettirdi.
  solve_not_configured:
    'Soru çözüm servisi şu anda kullanılamıyor. Bir yapılandırma sorunu var — öğretmenine haber verebilirsin.',
  // Aynı gerekçe `solve_not_configured` ile birebir aynı: yukarıdaki
  // `upstream_*` mesajları "AI Koç" diyor ve Soru Çöz ekranında çıkınca
  // öğrenci yanlış özelliğin bozuk olduğunu sanıyor. Gemini kaynaklı
  // geçici hatalar bu üç koda düşer (bkz. solve/gemini.js > codeFor).
  // Günlük hak dolduğunda. "Yapılandırma sorunu" DEMİYOR çünkü kimse bir
  // şey bozmadı; sistem geneli günlük hak bitti ve yarın yenilenecek.
  // Öğrenciye ne olduğunu ve ne zaman düzeleceğini söylemek, onu boşuna
  // fotoğraf çekip tekrar denemekten kurtarır.
  solve_quota_exhausted:
    'Bugünlük soru çözüm hakkımız doldu — sistem genelinde günlük bir sınır var. Yarın tekrar deneyebilirsin; acilse öğretmenine haber ver.',
  solve_timeout:
    'Çözüm hazırlamak beklenenden uzun sürdü. Soruyu tekrar gönderir misin? Tek soru gönderirsen daha hızlı çözerim.',
  solve_busy: 'Şu anda çok yoğunum. Birkaç saniye sonra tekrar dener misin?',
  solve_upstream_error:
    'Çözüm servisine şu anda ulaşamıyorum. Birkaç saniye sonra tekrar deneyebilirsin.',
  rate_limited_minute:
    'Çok hızlı gidiyorsun — art arda çok fazla soru gönderdin. Bir dakika sonra tekrar dener misin?',
  solve_no_input: 'Çözmem için bir soru fotoğrafı yükle ya da soruyu yazarak gönder.',
  solve_invalid_image:
    'Bu dosyayı okuyamadım. JPEG, PNG ya da WebP biçiminde bir fotoğraf yükler misin?',
  solve_image_too_large:
    'Fotoğraf çok büyük. Daha küçük bir fotoğraf ya da ekran görüntüsü yükleyebilir misin?',
  solve_image_rejected:
    'Bu görseli işleyemedim. Soruyu düz açıyla, iyi ışıkta tekrar çeker misin?',
  solve_unreadable:
    'Sorunun tamamını net okuyamadım. Fotoğrafı biraz daha yakından ve düz açıyla çeker misin?',
  solve_low_confidence:
    'Bu soruyu şu anda güvenilir şekilde çözemiyorum. Yanlış yönlendirmemek için çözüm göstermiyorum — fotoğrafı netleştirip tekrar dener misin?',
  solve_question_too_long: 'Soru metni biraz uzun kaçtı. Kısaltıp tekrar dener misin?',
  solve_parse_failed:
    'Çözümü hazırlarken bir sorun oldu. Birkaç saniye sonra tekrar deneyebilirsin.',
  solve_session_not_found: 'Bu çözüm bulunamadı. Soruyu yeniden yükleyebilirsin.',
  solve_step_not_found: 'Bu adım bulunamadı. Çözümü yeniden açmayı dener misin?',
  solve_too_many_asks:
    'Bu soru için soru sorma sınırına ulaştın. Yeni bir soru yükleyip devam edebilirsin.',
  solve_ask_too_long: 'Sorun biraz uzun kaçtı. Daha kısa yazıp tekrar dener misin?',
  solve_no_alternative: 'Bu soru için anlamlı bir alternatif yöntem bulamadım.',
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
 *
 * `module` varsayılanı `ai-coach`: bu fonksiyon önce yalnızca AI Koç
 * tarafından kullanılıyordu ve mevcut çağrıların hiçbiri değişmesin diye
 * imzanın sonuna eklendi.
 */
export function safeErrorSummary(error) {
  const suppliedName = error instanceof Error ? error.name : 'NonError'
  const name = /^[A-Za-z][A-Za-z0-9_.-]{1,63}$/.test(suppliedName) ? suppliedName : 'Error'
  const suppliedCode = error && typeof error === 'object' ? String(error.code ?? '') : ''
  const code = /^[A-Z0-9][A-Z0-9_.-]{1,63}$/i.test(suppliedCode) ? suppliedCode : 'UNCLASSIFIED'
  return Object.freeze({ name, code, raw_message_recorded: false })
}

export function sanitizeLogExtra(extra = {}) {
  const allowed = new Set([
    'type', 'status', 'reasonCode', 'reason_code', 'sourceCode', 'source_code',
    'tool', 'kind', 'attempt', 'count', 'duration_ms', 'http_status', 'dependency',
  ])
  return Object.freeze(Object.fromEntries(Object.entries(extra)
    .filter(([key, value]) => allowed.has(key) && ['string', 'number', 'boolean'].includes(typeof value))
    .map(([key, value]) => [key, typeof value === 'string' ? value.slice(0, 96) : value])))
}

export function logError(scope, error, extra = {}, module = 'ai-coach') {
  const safeScope = /^[a-z0-9_.-]{1,64}$/i.test(String(scope)) ? scope : 'unknown'
  const safeModule = /^[a-z0-9_.-]{1,64}$/i.test(String(module)) ? module : 'server'
  console.error(`[${safeModule}:${safeScope}]`, safeErrorSummary(error), sanitizeLogExtra(extra))
}

/** AI Soru Çözüm modülü için önceden bağlanmış logger. */
export function logSolveError(scope, error, extra = {}) {
  logError(scope, error, extra, 'ai-solve')
}

/** JSON hata yanıtı — gövdede yalnızca kod ve çevrilmiş mesaj bulunur. */
export function sendError(res, status, code) {
  res.status(status).json({ error: { code, message: userMessage(code) } })
}
