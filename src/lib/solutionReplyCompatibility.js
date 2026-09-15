const LEGACY_BUCKET = 'question-images'
const MISSING_RPC_CODES = new Set(['PGRST202', '42883'])
const MISSING_STROKES_COLUMN_CODES = new Set(['42703', 'PGRST204'])
const SUCCESS_STATUSES = new Set(['created', 'completed', 'duplicate', 'no_change', 'identity_quarantined'])

function errorCode(error) {
  let current = error
  for (let depth = 0; current && depth < 4; depth += 1) {
    const code = String(current.code ?? '')
    if (code) return code
    current = current.cause
  }
  return ''
}

export function isMissingCanvasRpc(error) {
  return MISSING_RPC_CODES.has(errorCode(error))
}

export function isMissingStrokesColumn(error) {
  return MISSING_STROKES_COLUMN_CODES.has(errorCode(error))
}

function unexpectedResult(message, result) {
  return Object.assign(new Error(message), { code: result?.status ?? 'unexpected_result' })
}

function fileExtension(blob, fallback = 'webp') {
  return { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' }[blob?.type] ?? fallback
}

/**
 * Bağımlılıkları dışarıdan alabilen istemci, canlıya hiç dokunmadan
 * iki şema yolunu da gerçekçi taklitlerle sınamamızı sağlar.
 */
export function createSolutionReplyClient({ client, stageMedia, uuid, now } = {}) {
  if (!client?.rpc || !client?.from || !client?.storage || !stageMedia || !uuid || !now) {
    throw new TypeError('solution_reply_dependencies_required')
  }

  async function updateLegacyQuestion(questionId, values) {
    const response = await client
      .from('questions')
      .update(values)
      .eq('id', questionId)
      .select('id')
      .maybeSingle()
    if (response?.error) throw response.error
    if (!response?.data?.id) throw Object.assign(new Error('Bu soruyu güncelleme yetkiniz yok.'), { code: '42501' })
    return response.data
  }

  /** Taslak kaydı. Dönen kip, gönderme yolunun da doğru şemayı seçmesini sağlar. */
  async function saveStrokes(questionId, payload) {
    const modern = await client.rpc('save_academic_question_canvas_draft', {
      p_record_id: questionId,
      p_strokes: payload,
      p_client_action_id: uuid(),
    })

    if (!modern?.error) {
      if (!SUCCESS_STATUSES.has(modern?.data?.status)) {
        throw unexpectedResult('Taslak kaydedilemedi.', modern?.data)
      }
      return { status: 'saved', compatibilityMode: 'academic' }
    }
    if (!isMissingCanvasRpc(modern.error)) throw modern.error

    try {
      await updateLegacyQuestion(questionId, { teacher_reply_strokes: payload })
      return { status: 'saved', compatibilityMode: 'legacy_questions' }
    } catch (error) {
      if (!isMissingStrokesColumn(error)) throw error
      return { status: 'session_only', compatibilityMode: 'legacy_without_strokes' }
    }
  }

  async function uploadLegacySolution(blob, teacherId, ext) {
    const path = `replies/${teacherId}/${now()}-${uuid()}-cozum.${fileExtension(blob, ext)}`
    const uploaded = await client.storage
      .from(LEGACY_BUCKET)
      .upload(path, blob, { contentType: blob.type, upsert: false })
    if (uploaded?.error) throw uploaded.error

    const imageUrl = client.storage.from(LEGACY_BUCKET).getPublicUrl(path)?.data?.publicUrl
    if (!imageUrl) throw new Error('Çözüm görselinin adresi oluşturulamadı.')
    return imageUrl
  }

  async function publishLegacySolution({ questionId, imageUrl, strokes }) {
    try {
      await updateLegacyQuestion(questionId, {
        teacher_reply_image_url: imageUrl,
        teacher_reply_strokes: strokes,
        status: 'Çözüldü',
      })
    } catch (error) {
      if (!isMissingStrokesColumn(error)) throw error
      await updateLegacyQuestion(questionId, {
        teacher_reply_image_url: imageUrl,
        status: 'Çözüldü',
      })
    }
  }

  async function publishLegacyReply({ questionId, reply, imageUrl }) {
    await updateLegacyQuestion(questionId, {
      teacher_reply: reply || null,
      teacher_reply_image_url: imageUrl || null,
      status: 'Çözüldü',
    })
  }

  async function sendLegacyReply({ questionId, teacherId, reply, file, existingImageUrl }) {
    const imageUrl = file
      ? await uploadLegacySolution(file, teacherId, fileExtension(file))
      : existingImageUrl
    await publishLegacyReply({ questionId, reply, imageUrl })
    return { status: 'sent', compatibilityMode: 'legacy_questions' }
  }

  /**
   * Dışarıda hazırlanmış fotoğraflı veya yazılı öğretmen yanıtını gönderir.
   * Yeni özel medya/RPC yolu canlıda yoksa yalnız bu yoklukta mevcut
   * question-images + questions RLS akışına döner.
   */
  async function sendReply({ questionId, studentId, teacherId, reply, file, existingImageUrl }) {
    let mediaActionId = null
    if (file) {
      try {
        const media = await stageMedia({
          studentId,
          actorId: teacherId,
          mediaKind: 'teacher_reply',
          file,
        })
        mediaActionId = media.mediaActionId
      } catch (error) {
        if (!isMissingCanvasRpc(error)) throw error
        return sendLegacyReply({ questionId, teacherId, reply, file, existingImageUrl })
      }
    }

    const published = await client.rpc('reply_academic_question', {
      p_record_id: questionId,
      p_reply: reply || null,
      p_media_action_id: mediaActionId,
      p_status: 'Çözüldü',
      p_client_action_id: uuid(),
    })

    if (published?.error && isMissingCanvasRpc(published.error)) {
      return sendLegacyReply({ questionId, teacherId, reply, file, existingImageUrl })
    }
    if (published?.error) throw published.error
    if (!SUCCESS_STATUSES.has(published?.data?.status)) {
      throw unexpectedResult('Yanıt gönderilemedi.', published?.data)
    }
    return { status: 'sent', compatibilityMode: 'academic' }
  }

  /**
   * Taslağı, görsel yüklemeyi ve yayını aynı uyumluluk kararıyla
   * tamamlar. Kısmi canlı şemada modern yayın işlevi yoksa görseli
   * public eski kovaya yeniden yükleyip mevcut RLS yoluyla gönderir.
   */
  async function sendSolution({ questionId, studentId, teacherId, blob, ext, strokes, draftPersistence }) {
    const draft = draftPersistence ?? await saveStrokes(questionId, strokes)

    if (draft.compatibilityMode !== 'academic') {
      const imageUrl = await uploadLegacySolution(blob, teacherId, ext)
      await publishLegacySolution({ questionId, imageUrl, strokes })
      return { status: 'sent', compatibilityMode: draft.compatibilityMode }
    }

    let media
    try {
      media = await stageMedia({ studentId, actorId: teacherId, mediaKind: 'teacher_canvas', file: blob })
    } catch (error) {
      if (!isMissingCanvasRpc(error)) throw error
      const imageUrl = await uploadLegacySolution(blob, teacherId, ext)
      await publishLegacySolution({ questionId, imageUrl, strokes })
      return { status: 'sent', compatibilityMode: 'legacy_questions' }
    }

    const published = await client.rpc('publish_academic_question_canvas', {
      p_record_id: questionId,
      p_media_action_id: media.mediaActionId,
      p_status: 'Çözüldü',
      p_client_action_id: uuid(),
    })

    if (published?.error && isMissingCanvasRpc(published.error)) {
      const imageUrl = await uploadLegacySolution(blob, teacherId, ext)
      await publishLegacySolution({ questionId, imageUrl, strokes })
      return { status: 'sent', compatibilityMode: 'legacy_questions' }
    }
    if (published?.error) throw published.error
    if (!SUCCESS_STATUSES.has(published?.data?.status)) {
      throw unexpectedResult('Çözüm gönderilemedi.', published?.data)
    }
    return { status: 'sent', compatibilityMode: 'academic' }
  }

  return Object.freeze({ saveStrokes, sendSolution, sendReply })
}
