/**
 * Veli–öğrenci doğrulama akışı — istemci tarafı TEK KAYNAK.
 *
 * Buradaki hiçbir fonksiyon `parent_links` tablosuna doğrudan yazmaz; hepsi
 * veritabanındaki SECURITY DEFINER RPC'lerini çağırır. Tablonun INSERT/UPDATE
 * politikası bilerek yoktur — yani bu dosyayı atlayıp konsoldan istediğini
 * yazan biri de kendini bir öğrenciye bağlayamaz. Buradaki kontroller
 * kolaylık içindir, güvenlik sınırı değildir.
 *
 * AKIŞ
 *   öğrenci  → generateParentCode()        → ABCD-EFGH (24 saat, tek kullanımlık)
 *   veli     → previewParentCode(code)     → "Ahmet Yılmaz" (istek OLUŞMAZ)
 *   veli     → redeemParentCode(code)      → 'pending' istek oluşur
 *   öğrenci  → respondParentLink(id, true) → 'active'  → veli veriyi görür
 *   öğrenci  → respondParentLink(id, false)→ 'rejected'→ veli hiçbir şey görmez
 */

import { supabase } from './supabaseClient'

/** Kullanıcının yazdığı kodu veritabanının beklediği kanonik biçime çevirir. */
export function normalizeCode(raw) {
  return String(raw ?? '')
    .toUpperCase()
    .replace(/[^0-9A-Z]/g, '')
    // Crockford Base32: alfabede O, I, L yok — karıştıranı rakama çevir.
    .replace(/O/g, '0')
    .replace(/[IL]/g, '1')
    .slice(0, 8)
}

/** ABCDEFGH → ABCD-EFGH. Sesli okurken ve yazarken yanılma payını düşürür. */
export function formatCode(code) {
  const c = normalizeCode(code)
  return c.length > 4 ? `${c.slice(0, 4)}-${c.slice(4)}` : c
}

/** RPC hatalarını kullanıcıya gösterilebilir düz Türkçeye indirir. */
function readableError(error) {
  if (!error) return null
  const msg = error.message ?? ''
  if (/permission denied|42501/i.test(msg)) {
    return 'Bu işlem için yetkiniz yok.'
  }
  if (/JWT|not authenticated|28000/i.test(msg)) {
    return 'Oturumunuz sonlanmış görünüyor. Lütfen tekrar giriş yapın.'
  }
  return msg || 'Beklenmeyen bir hata oluştu.'
}

/* ==================================================================
   ÖĞRENCİ TARAFI
   ================================================================== */

/**
 * Yeni davet kodu üretir. Öğrencinin aynı anda tek aktif kodu olabilir —
 * yeni kod üretmek eskisini geçersiz kılar (yanlış kişiye verilen kodu
 * iptal etmenin yolu budur).
 */
export async function generateParentCode() {
  const { data, error } = await supabase.rpc('student_generate_parent_code')
  if (error) return { error: readableError(error) }

  const row = Array.isArray(data) ? data[0] : data
  if (!row?.link_code) return { error: 'Kod üretilemedi.' }

  return { code: row.link_code, expiresAt: row.code_expires_at }
}

/**
 * Öğrencinin aktif (henüz kullanılmamış, süresi dolmamış) kodu.
 * Sayfa yeniden açıldığında kodun kaybolmaması için okunur.
 */
export async function getActiveParentCode() {
  const { data, error } = await supabase
    .from('parent_link_codes')
    .select('code, expires_at')
    .is('used_at', null)
    .gt('expires_at', new Date().toISOString())
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) return { error: readableError(error) }
  if (!data) return { code: null }
  return { code: data.code, expiresAt: data.expires_at }
}

/** Öğrencinin bekleyen istekleri + onaylı velileri. */
export async function listStudentParentLinks() {
  const { data, error } = await supabase.rpc('student_parent_links')
  if (error) return { error: readableError(error), links: [] }
  return { links: data ?? [] }
}

/** Bekleyen isteği onayla (true) veya reddet (false). */
export async function respondParentLink(linkId, approve) {
  const { data, error } = await supabase.rpc('student_respond_parent_link', {
    p_link_id: linkId,
    p_approve: approve,
  })
  if (error) return { error: readableError(error) }
  return { status: data }
}

/** Onaylı bağlantıyı kaldırır. Öğrenci de veli de çağırabilir. */
export async function revokeParentLink(linkId) {
  const { error } = await supabase.rpc('revoke_parent_link', { p_link_id: linkId })
  if (error) return { error: readableError(error) }
  return {}
}

/* ==================================================================
   VELİ TARAFI
   ================================================================== */

/**
 * Kodun hangi öğrenciye ait olduğunu SORAR ama istek oluşturmaz.
 * Veli "Ahmet Yılmaz ile bağlantı kurmak üzeresiniz" ekranını görüp
 * onaylamadan hiçbir kayıt oluşmaz.
 */
export async function previewParentCode(code) {
  const { data, error } = await supabase.rpc('parent_preview_code', {
    p_code: normalizeCode(code),
  })
  if (error) return { error: readableError(error) }

  const row = Array.isArray(data) ? data[0] : data
  if (!row?.ok) return { error: row?.message ?? 'Kod doğrulanamadı.' }
  return { studentName: row.student_name }
}

/**
 * Kodu kullanır ve onay bekleyen bağlantı isteği açar.
 * DİKKAT: bu adım veri erişimi VERMEZ — erişimi öğrencinin onayı açar.
 */
export async function redeemParentCode(code) {
  const { data, error } = await supabase.rpc('parent_redeem_code', {
    p_code: normalizeCode(code),
  })
  if (error) return { error: readableError(error) }

  const row = Array.isArray(data) ? data[0] : data
  if (!row?.ok) return { error: row?.message ?? 'Kod kullanılamadı.' }
  return { linkId: row.link_id, studentName: row.student_name }
}

/**
 * Velinin bağlantıları: onaylılar ve onay bekleyenler.
 * Reddedilen/kaldırılan bağlar hiç dönmez.
 */
export async function listParentLinkedStudents() {
  const { data, error } = await supabase.rpc('parent_linked_students')
  if (error) return { error: readableError(error), links: [] }

  const links = data ?? []
  return {
    links,
    active: links.filter((l) => l.status === 'active'),
    pending: links.filter((l) => l.status === 'pending'),
  }
}

/** Kodun ne kadar süresi kaldığını "5 saat 12 dakika" gibi yazar. */
export function remainingTime(expiresAt) {
  if (!expiresAt) return null
  const ms = new Date(expiresAt).getTime() - Date.now()
  if (ms <= 0) return null

  const totalMinutes = Math.floor(ms / 60000)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (hours >= 1) return `${hours} saat ${minutes} dakika`
  return `${minutes} dakika`
}
