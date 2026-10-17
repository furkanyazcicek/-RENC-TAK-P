/** Ücretsiz Koç'un mevcut sohbet protokolü; hiçbir model sağlayıcısına bağlanmaz. */
import { authenticate } from './auth.js'
import { config } from './config.js'
import { checkRateLimit, recordUsage } from './ratelimit.js'
import { logError, sendError, userMessage } from './errors.js'
import { loadFreeCoachSnapshot } from './freeCoachSnapshotData.js'
import { generateFreeCoachResponse, FREE_COACH_VERSION } from './freeCoachEngine.js'
import { isFreeCoachEnabled } from './freeCoachGate.js'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
export function createFreeCoachChatHandler(dependencies = {}) {
  const verify = dependencies.authenticate ?? authenticate
  const load = dependencies.loadSnapshot ?? loadFreeCoachSnapshot
  const respond = dependencies.generateResponse ?? generateFreeCoachResponse
  const limit = dependencies.checkRateLimit ?? checkRateLimit
  const usage = dependencies.recordUsage ?? recordUsage
  return async function handler(req, res) {
    res.setHeader('Cache-Control', 'private, no-store')
    if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return sendError(res, 405, 'invalid_request') }
    const auth = await verify(req)
    if (!auth.ok) return sendError(res, auth.status, auth.code)
    if (!isFreeCoachEnabled(dependencies.env ?? process.env)) return sendError(res, 503, 'feature_temporarily_unavailable')
    let body = req.body
    if (typeof body === 'string') { try { body = JSON.parse(body) } catch { body = null } }
    const message = typeof body?.message === 'string' ? body.message.trim() : ''
    if (!message) return sendError(res, 400, 'invalid_request')
    if (message.length > config.maxUserMessageChars) return sendError(res, 400, 'message_too_long')
    if (body.conversationId != null && !UUID.test(body.conversationId)) return sendError(res, 400, 'invalid_request')
    const { user, profile, supabase } = auth
    let begun = false
    const send = (event, data) => { if (!res.writableEnded) res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`) }
    try {
      const quota = await limit(supabase, user.id)
      if (!quota.allowed) return sendError(res, quota.code === 'rate_limit_unavailable' ? 503 : 429, quota.code)
      const snapshot = await load(supabase, profile)
      if (snapshot.facts.degraded) return sendError(res, 503, 'data_unavailable')
      let conversation
      let isNew = false
      if (body.conversationId) {
        const result = await supabase.from('ai_conversations').select('id').eq('id', body.conversationId).eq('student_id', user.id).maybeSingle()
        if (result.error) throw result.error
        if (!result.data) return sendError(res, 404, 'conversation_not_found')
        conversation = result.data
      } else {
        const result = await supabase.from('ai_conversations').insert({ student_id: user.id, title: message.slice(0, 60) }).select('id').single()
        if (result.error || !result.data) throw result.error ?? new Error('conversation_save_failed')
        conversation = result.data
        isNew = true
      }
      const answer = await respond({ message, snapshot, supabase, studentId: user.id })
      const saved = await supabase.from('ai_messages').insert([
        { conversation_id: conversation.id, student_id: user.id, role: 'user', content: message },
        { conversation_id: conversation.id, student_id: user.id, role: 'assistant', content: answer.text, actions: answer.actions.length ? answer.actions : null },
      ]).select('id,role')
      if (saved.error) throw saved.error
      await supabase.from('ai_conversations').update({ updated_at: new Date().toISOString() }).eq('id', conversation.id).eq('student_id', user.id)
      await usage(supabase, user.id, { model: FREE_COACH_VERSION, prompt_tokens: 0, completion_tokens: 0 })
      res.writeHead(200, { 'Content-Type': 'text/event-stream; charset=utf-8', 'Cache-Control': 'private, no-store, no-transform', 'X-Accel-Buffering': 'no' })
      begun = true
      send('meta', { conversationId: conversation.id, isNew, engine: FREE_COACH_VERSION })
      for (let at = 0; at < answer.text.length; at += 160) send('delta', { text: answer.text.slice(at, at + 160) })
      if (answer.actions.length) send('actions', { actions: answer.actions })
      if (isNew) send('title', { title: message.slice(0, 60) })
      send('done', { messageId: saved.data?.find((r) => r.role === 'assistant')?.id, modelCalls: 0 })
      res.end()
    } catch (error) {
      logError('free-coach-chat', error)
      if (begun) { send('error', { code: 'database_error', message: userMessage('database_error') }); res.end() }
      else return sendError(res, 500, 'database_error')
    }
  }
}
export default createFreeCoachChatHandler()
