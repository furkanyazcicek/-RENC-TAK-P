import { supabase } from '../../supabaseClient'

export const ACADEMIC_QUESTION_BUCKET = 'academic-question-images'

function extension(file, fallback = 'webp') {
  const byType = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' }[file?.type]
  return byType ?? fallback
}

export async function stageAndUploadAcademicQuestionMedia({ studentId, actorId, mediaKind, file, actionId = crypto.randomUUID() }) {
  if (!studentId || !actorId || !file) throw new TypeError('academic_media_fields_required')
  const path = `academic-questions/${studentId}/${actorId}/${actionId}.${extension(file)}`
  const staged = await supabase.rpc('stage_academic_question_media', {
    p_student_id: studentId, p_media_kind: mediaKind, p_object_path: path,
    p_content_type: file.type, p_byte_size: file.size, p_client_action_id: actionId,
  })
  if (staged.error || !['created', 'duplicate'].includes(staged.data?.status)) {
    throw Object.assign(new Error('Görsel güvenli biçimde hazırlanamadı.'), { cause: staged.error })
  }
  const uploaded = await supabase.storage.from(ACADEMIC_QUESTION_BUCKET).upload(path, file, { contentType: file.type, upsert: false })
  if (uploaded.error && uploaded.error.statusCode !== '409') throw uploaded.error
  return { mediaActionId: actionId, path }
}

async function signed(path) {
  if (!path) return null
  const { data, error } = await supabase.storage.from(ACADEMIC_QUESTION_BUCKET).createSignedUrl(path, 900)
  return error ? null : data?.signedUrl ?? null
}

export async function hydrateAcademicQuestionMedia(rows = []) {
  return Promise.all(rows.map(async (row) => ({
    ...row,
    image_url: row.image_path ? await signed(row.image_path) : row.image_url,
    teacher_reply_image_url: row.teacher_reply_image_path ? await signed(row.teacher_reply_image_path) : row.teacher_reply_image_url,
  })))
}
