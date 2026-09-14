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
import { stageAndUploadAcademicQuestionMedia } from './learning/academicActivity/media'

export function isMissingStrokesColumn(error) {
  return ['42703', 'PGRST202', '42883'].includes(error?.code)
}

/** Taslağı kaydeder. Başarılıysa true döner; hata sessizce yutulmaz. */
export async function saveStrokes(questionId, payload) {
  const { data, error } = await supabase.rpc('save_academic_question_canvas_draft', {
    p_record_id: questionId, p_strokes: payload, p_client_action_id: crypto.randomUUID(),
  })
  if (error || !['created', 'duplicate', 'no_change'].includes(data?.status)) throw error ?? new Error('Taslak kaydedilemedi.')
  return true
}

/**
 * Düzleştirilmiş çözüm görselini yükler ve public URL'ini döner.
 * Yol, öğretmenin fotoğraflı yanıtıyla aynı: replies/<öğretmen-id>/…
 * Böylece mevcut storage politikaları olduğu gibi geçerli kalır.
 */
export async function uploadSolutionImage(blob, studentId, teacherId) {
  return stageAndUploadAcademicQuestionMedia({ studentId, actorId: teacherId, mediaKind: 'teacher_canvas', file: blob })
}

/**
 * Çözümü öğrenciye gönderir — mevcut alanları kullanarak.
 * `strokes` de aynı işlemde yazılır ki gönderilen görsel ile
 * düzenlenebilir kaynak birbirinden ayrı düşmesin.
 */
export async function publishSolution({ questionId, mediaActionId, strokes }) {
  await saveStrokes(questionId, strokes)
  const { data, error } = await supabase.rpc('publish_academic_question_canvas', {
    p_record_id: questionId, p_media_action_id: mediaActionId, p_status: 'Çözüldü', p_client_action_id: crypto.randomUUID(),
  })
  if (error || !['created', 'duplicate', 'no_change'].includes(data?.status)) throw error ?? new Error('Çözüm gönderilemedi.')
  return true
}
