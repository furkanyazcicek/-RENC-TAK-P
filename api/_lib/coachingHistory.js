const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/** Geçmişteki onay kartları güncel ve yalnız öğrenciye ait karardan okunur. */
export async function hydrateCoachingHistory(supabase, studentId, messages) {
  const ids = [...new Set(messages.flatMap((message) => (message.actions ?? [])
    .filter((action) => action.type === 'accept_coaching_recommendation')
    .map((action) => action.payload?.recommendation?.recommendation_id)
    .filter((id) => typeof id === 'string' && UUID.test(id))))]
  if (!ids.length) return messages

  const rows = []
  let unavailable = false
  try {
    for (let offset = 0; offset < ids.length; offset += 100) {
      const { data, error } = await supabase.from('student_coaching_recommendations')
        .select('recommendation_id,student_id,decision,status,suggested_amount,success_criteria,target')
        .eq('student_id', studentId).in('recommendation_id', ids.slice(offset, offset + 100)).limit(100)
      if (error) { unavailable = true; break }
      rows.push(...(data ?? []).filter((row) => row.student_id === studentId))
    }
  } catch { unavailable = true }
  const decisions = new Map(rows.map((row) => [row.recommendation_id, row]))
  return messages.map((message) => ({
    ...message,
    actions: (message.actions ?? []).map((action) => {
      if (action.type !== 'accept_coaching_recommendation') return action
      const row = decisions.get(action.payload?.recommendation?.recommendation_id)
      if (unavailable) return { ...action, execution_state: 'unavailable' }
      if (!row) return action
      return {
        ...action,
        execution_state: row.decision === 'rejected' ? 'rejected' : row.decision === 'pending' ? 'idle' : 'done',
        payload: { ...action.payload, recommendation: {
          ...action.payload.recommendation,
          suggested_amount: row.suggested_amount,
          success_criteria: row.success_criteria,
          target: row.target,
        } },
      }
    }),
  }))
}
