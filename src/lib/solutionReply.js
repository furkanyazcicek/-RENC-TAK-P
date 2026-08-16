/**
 * Dr. Koç — Dijital Kalem Çözümü / Kayıt ve Gönderme
 * ------------------------------------------------------------------
 * SolveBoard'ın veritabanıyla konuştuğu tek yer.
 *
 * İKİ AYRI İŞ, BİLEREK AYRI TUTULDU:
 *
 *  1) saveStrokes  → TASLAK. Yalnızca `teacher_reply_strokes` yazar.
 *     Öğretmen çizerken saniyede değil, durakladıkça çağrılır. Öğrenci
 *     tarafı bu kolonu okumaz; "yanıtlandı mı" kararı hâlâ
 *     teacher_reply / teacher_reply_image_url'e bakar. Yani yarım kalmış
 *     bir çözüm kaybolmaz ama öğrenciye de sızmaz.
 *
 *  2) publishSolution → GÖNDERME. Mevcut sistemin ta kendisi:
 *     `teacher_reply_image_url` + `status: 'Çözüldü'`. Yeni bir gönderme
 *     akışı KURULMADI; QuestionInbox'taki ReplyBox ne yazıyorsa buradan
 *     da aynısı yazılıyor. Tek fark, görselin kaynağı: orada dosya
 *     seçiliyor, burada tahtadan düzleştirilmiş görsel üretiliyor.
 *
 * `teacher_reply` (yazılı yanıt) HİÇBİR yerde ezilmez — öğretmen daha
 * önce not yazdıysa çizim gönderince o not kaybolmaz.
 */

import { supabase } from './supabaseClient'

const BUCKET = 'question-images'

/**
 * PostgREST, olmayan kolon için 42703 döner. Bu, migration'ın
 * (supabase/migration_solution_canvas.sql) henüz çalıştırılmadığı
 * anlamına gelir — bağlantı hatasından ayırt edip öğretmene ne
 * yapması gerektiğini söyleyebilelim diye ayrıca yakalıyoruz.
 */
const MISSING_COLUMN = '42703'

export function isMissingStrokesColumn(error) {
  return error?.code === MISSING_COLUMN
}

/** Taslağı kaydeder. Başarılıysa true döner; hata sessizce yutulmaz. */
export async function saveStrokes(questionId, payload) {
  const { error } = await supabase
    .from('questions')
    .update({ teacher_reply_strokes: payload })
    .eq('id', questionId)
  if (error) throw error
  return true
}

/**
 * Düzleştirilmiş çözüm görselini yükler ve public URL'ini döner.
 * Yol, öğretmenin fotoğraflı yanıtıyla aynı: replies/<öğretmen-id>/…
 * Böylece mevcut storage politikaları olduğu gibi geçerli kalır.
 */
export async function uploadSolutionImage(blob, teacherId, ext = 'webp') {
  const path = `replies/${teacherId}/${Date.now()}-cozum.${ext}`
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, blob, { contentType: blob.type, upsert: false })
  if (error) throw error
  return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl
}

/**
 * Çözümü öğrenciye gönderir — mevcut alanları kullanarak.
 * `strokes` de aynı işlemde yazılır ki gönderilen görsel ile
 * düzenlenebilir kaynak birbirinden ayrı düşmesin.
 */
export async function publishSolution({ questionId, imageUrl, strokes }) {
  const { error } = await supabase
    .from('questions')
    .update({
      teacher_reply_image_url: imageUrl,
      teacher_reply_strokes: strokes,
      status: 'Çözüldü',
    })
    .eq('id', questionId)

  if (!error) return true

  // Migration çalıştırılmamışsa çözümün ÖĞRENCİYE GİTMESİ engellenmemeli:
  // düzenlenebilir kaynak olmadan, mevcut alanlarla gönderilir. Öğretmen
  // sonradan tekrar açıp düzenleyemez, o kadar.
  if (!isMissingStrokesColumn(error)) throw error

  const fallback = await supabase
    .from('questions')
    .update({ teacher_reply_image_url: imageUrl, status: 'Çözüldü' })
    .eq('id', questionId)
  if (fallback.error) throw fallback.error
  return true
}
