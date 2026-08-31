/**
 * CANLI DERS — ODA ERİŞİM BELİRTECİ (sunucu tarafı)
 *
 * ═══════════════════════════════════════════════════════════════════
 * BU DOSYA NEDEN ŞİMDİDEN VAR
 * ═══════════════════════════════════════════════════════════════════
 * Görüntülü görüşme sağlayıcısı (LiveKit / Daily / 100ms / Twilio…)
 * henüz SEÇİLMEDİ — bu ücretli bir servis kararı ve kullanıcıya ait.
 * Ancak güvenlik sınırı sağlayıcı seçilmeden ÖNCE kurulmalı, sonra
 * "geçici olarak" istemciye anahtar koyup unutmamak için.
 *
 * KURALLAR (sağlayıcı geldiğinde de değişmez):
 *   1. Oda belirteci YALNIZCA burada üretilir.
 *   2. Sağlayıcının gizli anahtarı `VITE_` önekli OLAMAZ — Vite `VITE_`
 *      ile başlayan her değişkeni build çıktısına gömer ve herkes görür.
 *      Anahtar `LIVE_LESSON_PROVIDER_SECRET` gibi öneksiz bir değişkende
 *      durur; bu dosya dışında hiçbir yerden okunmaz.
 *   3. Belirteç isteyen kullanıcının GERÇEKTEN o dersin tarafı olduğu
 *      veritabanına sorularak doğrulanır. İstemcinin gönderdiği rol,
 *      kullanıcı kimliği veya oda adı DİKKATE ALINMAZ.
 *   4. Ders tamamlandıysa/iptal edildiyse belirteç ÜRETİLMEZ — bağlantıyı
 *      saklayıp sonradan odaya girmek mümkün olmamalı.
 *   5. Belirteç kısa ömürlüdür ve yalnızca o odaya geçerlidir.
 *
 * Sağlayıcı bağlanana kadar uç nokta 501 + `provider_not_configured`
 * döner. Sahte bir belirteç ÜRETMEZ.
 */

import { createClient } from '@supabase/supabase-js'
import { config } from '../_lib/config.js'

/** Belirtecin geçerlilik süresi — ders uzasa bile yenilenerek alınır. */
const TOKEN_TTL_SECONDS = 60 * 60

function readBearerToken(req) {
  const header = req.headers?.authorization || req.headers?.Authorization || ''
  if (typeof header !== 'string') return null
  const match = header.match(/^Bearer\s+(.+)$/i)
  return match ? match[1].trim() : null
}

function fail(res, status, code, message) {
  return res.status(status).json({ error: { code, message } })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return fail(res, 405, 'method_not_allowed', 'Bu adres yalnızca POST kabul eder.')
  }

  const jwt = readBearerToken(req)
  if (!jwt) {
    return fail(res, 401, 'unauthenticated', 'Oturumun sona ermiş görünüyor. Sayfayı yenileyip tekrar giriş yap.')
  }

  const sessionId = req.body?.sessionId
  if (!sessionId || typeof sessionId !== 'string') {
    return fail(res, 400, 'invalid_request', 'Ders kimliği gönderilmedi.')
  }

  // Sorgu KULLANICININ KENDİ yetkisiyle çalışır (service_role DEĞİL).
  // Böylece RLS ikinci bir bağımsız kontrol katmanı olarak devreye girer:
  // aşağıdaki kodda bir hata olsa bile başka bir dersin satırı dönmez.
  const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey, {
    global: { headers: { Authorization: `Bearer ${jwt}` } },
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  })

  const { data: auth, error: authError } = await supabase.auth.getUser(jwt)
  if (authError || !auth?.user) {
    return fail(res, 401, 'unauthenticated', 'Oturumun doğrulanamadı. Sayfayı yenileyip tekrar giriş yap.')
  }
  const userId = auth.user.id

  const { data: lesson, error } = await supabase
    .from('lesson_sessions')
    .select('id, teacher_id, student_id, status, provider, provider_room_id, scheduled_end')
    .eq('id', sessionId)
    .maybeSingle()

  if (error) {
    console.error('Canlı ders okunamadı:', error.message)
    return fail(res, 503, 'database_error', 'Ders bilgisine şu anda ulaşılamıyor. Birazdan tekrar dene.')
  }
  if (!lesson) {
    // RLS yüzünden görünmüyorsa da burası çalışır — "yok" ile "yetkin yok"
    // arasında ayrım yapmıyoruz; ayrım yapmak ders kimliği taraması yapan
    // birine bilgi verirdi.
    return fail(res, 404, 'not_found', 'Ders bulunamadı veya bu derse erişimin yok.')
  }

  const role = lesson.teacher_id === userId ? 'teacher' : lesson.student_id === userId ? 'student' : null
  if (!role) {
    return fail(res, 403, 'forbidden', 'Bu ders odasına katılma yetkin yok.')
  }

  // Ders bitti/iptal edildiyse oda erişimi SONA ERER.
  const joinable =
    role === 'teacher'
      ? ['scheduled', 'lobby_open', 'live'].includes(lesson.status)
      : ['lobby_open', 'live'].includes(lesson.status)
  if (!joinable) {
    return fail(
      res,
      409,
      'room_closed',
      role === 'teacher'
        ? 'Bu ders sona ermiş. Yeni bir ders planlayabilirsin.'
        : 'Ders odası kapalı. Öğretmenin odayı açtığında tekrar dene.'
    )
  }

  const providerSecret = process.env.LIVE_LESSON_PROVIDER_SECRET
  const providerKey = process.env.LIVE_LESSON_PROVIDER_KEY
  const providerName = process.env.LIVE_LESSON_PROVIDER

  if (!providerName || !providerSecret || !providerKey) {
    return fail(
      res,
      501,
      'provider_not_configured',
      'Görüntülü görüşme sağlayıcısı henüz bağlanmadı. Ders tahtası, materyaller ve mesajlar çalışmaya devam ediyor.'
    )
  }

  // ── Sağlayıcı seçildiğinde belirteç üretimi BURAYA gelir. ──
  // Beklenen biçim (sağlayıcıdan bağımsız):
  //   { token, url, roomId, expiresAt, identity, canPublish }
  // `identity` DAİMA `userId` olmalı; istemciden gelen hiçbir kimlik
  // bilgisi belirtece yazılmaz.
  return fail(
    res,
    501,
    'provider_not_implemented',
    'Sağlayıcı tanımlı ama entegrasyonu tamamlanmadı. Ayrıntı için docs/canli-ders.md dosyasına bakın.'
  )
}

export { TOKEN_TTL_SECONDS }
