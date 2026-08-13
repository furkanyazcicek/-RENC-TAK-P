/**
 * /api/ai-coach/conversations
 *
 *   GET    ?id=<uuid>   → tek sohbetin mesajları
 *   GET                 → sohbet listesi
 *   DELETE ?id=<uuid>   → tek sohbeti sil
 *   DELETE ?all=1       → tüm sohbetleri sil ("konuşmayı temizle")
 *
 * Her sorgu öğrencinin kendi JWT'siyle ve `.eq('student_id', …)` ile
 * çalışır; RLS ikinci katman olarak aynı sınırı uygular.
 */

import { authenticate } from '../_lib/auth.js'
import { logError, sendError } from '../_lib/errors.js'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export default async function handler(req, res) {
  const auth = await authenticate(req)
  if (!auth.ok) return sendError(res, auth.status, auth.code)

  const { user, supabase } = auth
  const id = typeof req.query?.id === 'string' && UUID_RE.test(req.query.id) ? req.query.id : null

  try {
    if (req.method === 'GET') {
      return id ? await getMessages(res, supabase, user.id, id) : await listConversations(res, supabase, user.id)
    }

    if (req.method === 'DELETE') {
      // `ai_messages.conversation_id` ON DELETE CASCADE olduğu için
      // sohbeti silmek mesajlarını da siler.
      if (req.query?.all === '1') {
        const { error } = await supabase.from('ai_conversations').delete().eq('student_id', user.id)
        if (error) throw error
        return res.status(200).json({ ok: true })
      }

      if (!id) return sendError(res, 400, 'invalid_request')

      const { error } = await supabase
        .from('ai_conversations')
        .delete()
        .eq('id', id)
        .eq('student_id', user.id)
      if (error) throw error
      return res.status(200).json({ ok: true })
    }

    res.setHeader('Allow', 'GET, DELETE')
    return sendError(res, 405, 'invalid_request')
  } catch (error) {
    logError('conversations', error, { studentId: user.id })
    return sendError(res, 500, 'database_error')
  }
}

async function listConversations(res, supabase, studentId) {
  const { data, error } = await supabase
    .from('ai_conversations')
    .select('id, title, created_at, updated_at')
    .eq('student_id', studentId)
    .order('updated_at', { ascending: false })
    .limit(30)

  if (error) throw error
  return res.status(200).json({ conversations: data ?? [] })
}

async function getMessages(res, supabase, studentId, conversationId) {
  const { data: conversation, error: conversationError } = await supabase
    .from('ai_conversations')
    .select('id, title, created_at')
    .eq('id', conversationId)
    .eq('student_id', studentId)
    .maybeSingle()

  if (conversationError) throw conversationError
  if (!conversation) return sendError(res, 404, 'conversation_not_found')

  const { data, error } = await supabase
    .from('ai_messages')
    .select('id, role, content, actions, created_at')
    .eq('conversation_id', conversationId)
    .eq('student_id', studentId)
    .order('created_at', { ascending: true })
    .limit(200)

  if (error) throw error
  return res.status(200).json({ conversation, messages: data ?? [] })
}
