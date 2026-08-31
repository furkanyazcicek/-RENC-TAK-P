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
import { AccessToken } from 'livekit-server-sdk'
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

  const apiKey = process.env.LIVEKIT_API_KEY
  const apiSecret = process.env.LIVEKIT_API_SECRET
  const url = process.env.LIVEKIT_URL || process.env.VITE_LIVEKIT_URL

  if (!apiKey || !apiSecret || !url) {
    return fail(
      res,
      501,
      'provider_not_configured',
      'Görüntülü görüşme henüz yapılandırılmadı. Ders tahtası, materyaller ve mesajlar çalışmaya devam ediyor.'
    )
  }

  // Katılımcının görünen adı — belirtecin içine yazılır ki karşı taraf
  // ekranda kim olduğunu görsün. İSTEMCİDEN ALINMAZ: kullanıcı kendini
  // başkasının adıyla tanıtamasın diye veritabanından okunur.
  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', userId)
    .maybeSingle()

  try {
    const at = new AccessToken(apiKey, apiSecret, {
      // Kimlik DAİMA sunucudaki kullanıcı numarasıdır.
      identity: userId,
      name: profile?.full_name || (role === 'teacher' ? 'Öğretmen' : 'Öğrenci'),
      // Belirteç kısa ömürlüdür. Ders uzarsa istemci yenisini ister;
      // uzun ömürlü belirteç, ders bittikten sonra da odaya girilebilmesi
      // demek olurdu.
      ttl: TOKEN_TTL_SECONDS,
    })

    at.addGrant({
      room: lesson.provider_room_id,
      roomJoin: true,
      // Oda adı tahmin edilse bile bu belirteç OLMADAN girilemez; belirteci
      // de yalnızca dersin tarafları alabilir (yukarıdaki kontroller).
      canPublish: true,
      canSubscribe: true,
      canPublishData: true,
      // Odayı yönetme yetkisi yalnız öğretmende: öğrenci dersi bitiremez
      // veya başkasını odadan atamaz.
      roomAdmin: role === 'teacher',
    })

    const token = await at.toJwt()

    return res.status(200).json({
      token,
      url,
      roomId: lesson.provider_room_id,
      identity: userId,
      role,
      expiresAt: new Date(Date.now() + TOKEN_TTL_SECONDS * 1000).toISOString(),
    })
  } catch (err) {
    console.error('LiveKit belirteci üretilemedi:', err?.message)
    return fail(
      res,
      500,
      'token_failed',
      'Görüşme izni oluşturulamadı. Birkaç saniye sonra tekrar deneyin.'
    )
  }
}

export { TOKEN_TTL_SECONDS }
