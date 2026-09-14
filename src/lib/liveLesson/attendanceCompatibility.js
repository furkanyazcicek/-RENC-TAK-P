const MISSING_ACADEMIC_ATTENDANCE_RPC_CODES = new Set(['PGRST202', '42883'])

function needsLegacyAttendanceRpc(error) {
  return MISSING_ACADEMIC_ATTENDANCE_RPC_CODES.has(String(error?.code ?? ''))
}

function firstRow(data) {
  return Array.isArray(data) ? data[0] : data
}

/**
 * Faz 4 katılım RPC'si canlı şemaya ulaşana kadar mevcut, RLS korumalı
 * canlı ders RPC'sini kullanır. Yalnızca "yeni işlev yok" hatasında geri
 * döner; oturum, yetki ve ağ hatalarını asla başarılı gibi göstermez.
 */
export async function joinLessonWithCompatibility(rpc, sessionId, clientActionId) {
  const modern = await rpc('join_academic_lesson', {
    p_session_id: sessionId,
    p_client_action_id: clientActionId,
  })
  if (!modern?.error || !needsLegacyAttendanceRpc(modern.error)) return modern

  const legacy = await rpc('lesson_join', { p_session: sessionId })
  if (legacy?.error) return legacy

  return {
    ...legacy,
    data: {
      ...firstRow(legacy?.data),
      status: 'created',
      compatibility_mode: 'legacy_lesson_join',
    },
  }
}

/** Katılımda olduğu gibi, yeni ayrılış RPC'si yoksa eski güvenli RPC'ye döner. */
export async function leaveLessonWithCompatibility(rpc, sessionId, seconds, clientActionId) {
  const modern = await rpc('leave_academic_lesson', {
    p_session_id: sessionId,
    p_seconds: seconds,
    p_client_action_id: clientActionId,
  })
  if (!modern?.error || !needsLegacyAttendanceRpc(modern.error)) return modern

  return rpc('lesson_leave', {
    p_session: sessionId,
    p_seconds: seconds,
  })
}

