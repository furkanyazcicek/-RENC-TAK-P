/** Faz 3'ün asgari şeması ile eski zengin katalog şeması aynı arayüzü besler. */
export async function readPublishedQuestionSets(client, { id = null } = {}) {
  async function read(minimal) {
    const columns = minimal
      ? 'id,topic_id,title,questions,content_revision,content_hash'
      : 'id,topic_id,title,description,difficulty,question_count,questions,content_revision,content_hash'
    const query = client.from('library_question_sets').select(columns).eq('status', 'published')
    return id ? query.eq('id', id).maybeSingle() : query.order(minimal ? 'created_at' : 'order_index')
  }
  let result = await read(false)
  if (['42703', 'PGRST204'].includes(result.error?.code)) result = await read(true)
  if (result.error) return result
  function normalize(row) {
    if (!row) return row
    return { ...row, description: row.description ?? null, difficulty: row.difficulty ?? null,
      question_count: row.question_count ?? (Array.isArray(row.questions) ? row.questions.length : 0) }
  }
  return { ...result, data: Array.isArray(result.data) ? result.data.map(normalize) : normalize(result.data) }
}
