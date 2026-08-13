/**
 * POST /api/ai-coach/chat
 *
 * AI Koç'un ana uç noktası. Sunucu tarafında çalışır; OpenAI anahtarı bu
 * süreçten dışarı çıkmaz.
 *
 * AKIŞ
 *  1. JWT doğrula → öğrenciyi belirle (istemciden gelen kimliğe güvenilmez)
 *  2. Hız sınırını kontrol et
 *  3. Öğrenci bağlamını (özet durum raporu) kur
 *  4. Sohbet geçmişini yükle (özet + son N mesaj)
 *  5. Araç çağırma döngüsünü çalıştır, metni SSE ile parça parça yolla
 *  6. Asistan mesajını ve varsa aksiyon kartlarını kaydet
 *
 * YANIT BİÇİMİ: Server-Sent Events
 *   meta    → { conversationId }
 *   status  → { text }          (örn. "Deneme sonuçlarına bakıyorum…")
 *   delta   → { text }          (cevabın parçaları)
 *   actions → { actions: [...] }(onay bekleyen aksiyon kartları)
 *   title   → { title }         (ilk mesajdan sonra üretilen sohbet başlığı)
 *   done    → { messageId }
 *   error   → { code, message } (kullanıcı dostu; teknik ayrıntı içermez)
 */

import { authenticate } from '../_lib/auth.js'
import { config, missingConfig } from '../_lib/config.js'
import { buildStudentContext } from '../_lib/context.js'
import { logError, userMessage } from '../_lib/errors.js'
import { streamChat, quickCompletion, UpstreamError } from '../_lib/openai.js'
import { buildSystemPrompt, TITLE_PROMPT } from '../_lib/prompt.js'
import { checkRateLimit, recordUsage } from '../_lib/ratelimit.js'
import { runTool, TOOL_SCHEMAS } from '../_lib/tools.js'

/** Araç çalışırken kullanıcıya gösterilen insanca durum cümleleri. */
const TOOL_STATUS = {
  get_study_sessions: 'Çalışma kayıtlarını inceliyorum…',
  get_subject_detail: 'Ders detayına bakıyorum…',
  get_exam_detail: 'Deneme sonuçlarını inceliyorum…',
  get_homeworks: 'Ödevlerine bakıyorum…',
  get_curriculum_topics: 'Müfredat konularını kontrol ediyorum…',
  get_learning_path: 'Müfredat sıranı çıkarıyorum…',
  check_topic_prerequisites: 'Bu konunun ön koşullarına bakıyorum…',
  get_study_plan: 'Mevcut planını kontrol ediyorum…',
  create_study_plan: 'Plan hazırlıyorum…',
  log_study_session: 'Çalışma kaydını hazırlıyorum…',
  update_student_memory: 'Tercihini not alıyorum…',
  complete_study_task: 'Plan maddesini hazırlıyorum…',
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: { code: 'invalid_request', message: userMessage('invalid_request') } })
  }

  /* ---------- 0) Yapılandırma ---------- */
  const missing = missingConfig()
  if (missing.length) {
    logError('config', `eksik ortam değişkenleri: ${missing.join(', ')}`)
    return res.status(503).json({ error: { code: 'not_configured', message: userMessage('not_configured') } })
  }

  /* ---------- 1) Kimlik ---------- */
  const auth = await authenticate(req)
  if (!auth.ok) {
    return res.status(auth.status).json({ error: { code: auth.code, message: userMessage(auth.code) } })
  }
  const { user, profile, supabase } = auth

  /* ---------- 2) Girdi doğrulama ---------- */
  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body
  const rawMessage = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!rawMessage) {
    return res.status(400).json({ error: { code: 'invalid_request', message: userMessage('invalid_request') } })
  }
  if (rawMessage.length > config.maxUserMessageChars) {
    return res.status(400).json({ error: { code: 'message_too_long', message: userMessage('message_too_long') } })
  }

  const requestedConversationId = isUuid(body?.conversationId) ? body.conversationId : null

  /* ---------- 3) Hız sınırı ---------- */
  const limit = await checkRateLimit(supabase, user.id)
  if (!limit.allowed) {
    return res.status(429).json({ error: { code: limit.code, message: userMessage(limit.code) } })
  }

  /* ---------- 4) Sohbet ---------- */
  let conversation
  try {
    conversation = await resolveConversation(supabase, user.id, requestedConversationId, rawMessage)
  } catch (error) {
    logError('conversation', error)
    return res.status(500).json({ error: { code: 'database_error', message: userMessage('database_error') } })
  }
  if (!conversation) {
    return res.status(404).json({ error: { code: 'conversation_not_found', message: userMessage('conversation_not_found') } })
  }

  /* ---------- 5) SSE başlat ---------- */
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    // Ara katmanların (proxy) akışı tamponlamasını engeller.
    'X-Accel-Buffering': 'no',
  })
  res.flushHeaders?.()

  const send = (event, data) => {
    if (res.writableEnded) return
    res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
  }

  send('meta', { conversationId: conversation.id, isNew: conversation.isNew })

  // İstemci bağlantıyı kapatırsa OpenAI çağrısını da iptal et — boşa
  // token yakmayalım.
  const abortController = new AbortController()
  req.on?.('close', () => abortController.abort())

  let fullText = ''
  const pendingActions = []
  let totalUsage = { prompt_tokens: 0, completion_tokens: 0 }

  try {
    /* ---------- 6) Bağlam + geçmiş ---------- */
    send('status', { text: 'Verilerini inceliyorum…' })

    const [{ facts, text: contextText }, history] = await Promise.all([
      buildStudentContext(supabase, profile),
      loadHistory(supabase, conversation),
    ])

    const messages = [
      { role: 'system', content: buildSystemPrompt({ contextText, firstName: facts.profile.firstName }) },
      ...history,
      { role: 'user', content: rawMessage },
    ]

    // Kullanıcı mesajını hemen kaydet — akış yarıda kesilse bile geçmişte kalır.
    await supabase.from('ai_messages').insert({
      conversation_id: conversation.id,
      student_id: user.id,
      role: 'user',
      content: rawMessage,
    })

    /* ---------- 7) Araç çağırma döngüsü ---------- */
    for (let round = 0; round < config.maxToolRounds; round += 1) {
      const isFinalRound = round === config.maxToolRounds - 1

      const turn = await streamChat({
        messages,
        // Son turda araç verilmez: model mecburen metin cevabı üretir,
        // böylece döngü kesin biter.
        tools: isFinalRound ? null : TOOL_SCHEMAS,
        onText: (chunk) => {
          fullText += chunk
          send('delta', { text: chunk })
        },
        signal: abortController.signal,
      })

      if (turn.usage) {
        totalUsage.prompt_tokens += turn.usage.prompt_tokens ?? 0
        totalUsage.completion_tokens += turn.usage.completion_tokens ?? 0
      }

      if (!turn.toolCalls.length) break

      messages.push({
        role: 'assistant',
        content: turn.content || null,
        tool_calls: turn.toolCalls,
      })

      for (const call of turn.toolCalls) {
        const name = call.function.name
        send('status', { text: TOOL_STATUS[name] ?? 'Verilerini inceliyorum…' })

        let args = {}
        try {
          args = call.function.arguments ? JSON.parse(call.function.arguments) : {}
        } catch {
          // Model bozuk JSON ürettiyse aracı çalıştırmadan geri bildir.
          messages.push({
            role: 'tool',
            tool_call_id: call.id,
            content: JSON.stringify({ status: 'error', reason: 'Argümanlar geçerli JSON değil.' }),
          })
          continue
        }

        const { result, action } = await runTool({
          name,
          args,
          supabase,
          studentId: user.id,
          facts,
        })

        // Aynı türden ikinci bir aksiyon kartı üretilmesini engelle.
        if (action && !pendingActions.some((a) => a.type === action.type)) {
          pendingActions.push(action)
        }

        messages.push({
          role: 'tool',
          tool_call_id: call.id,
          content: JSON.stringify(result).slice(0, 8000),
        })
      }
    }

    /* ---------- 8) Sonuç ---------- */
    if (!fullText.trim()) {
      fullText =
        'Bu isteği şu anda yanıtlayamadım. Sorunu biraz daha açık yazarsan tekrar deneyebilirim.'
      send('delta', { text: fullText })
    }

    if (pendingActions.length) {
      send('actions', { actions: pendingActions })
    }

    const { data: saved } = await supabase
      .from('ai_messages')
      .insert({
        conversation_id: conversation.id,
        student_id: user.id,
        role: 'assistant',
        content: fullText,
        actions: pendingActions.length ? pendingActions : null,
      })
      .select('id')
      .single()

    await supabase
      .from('ai_conversations')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', conversation.id)
      .eq('student_id', user.id)

    await recordUsage(supabase, user.id, { ...totalUsage, model: config.model })

    /* ---------- 9) İlk mesajsa sohbete anlamlı bir başlık ver ---------- */
    if (conversation.isNew) {
      const title = await quickCompletion({ system: TITLE_PROMPT, user: rawMessage })
      if (title) {
        const clean = title.replace(/["'`]/g, '').slice(0, 60)
        await supabase
          .from('ai_conversations')
          .update({ title: clean })
          .eq('id', conversation.id)
          .eq('student_id', user.id)
        send('title', { title: clean })
      }
    }

    send('done', { messageId: saved?.id ?? null })
  } catch (error) {
    const code = error instanceof UpstreamError ? error.code : 'unknown'
    logError('chat', error, { studentId: user.id })

    // Model bir şeyler yazdıktan sonra koptuysa, yazılanı kaybetmeyelim.
    if (fullText.trim()) {
      await supabase
        .from('ai_messages')
        .insert({
          conversation_id: conversation.id,
          student_id: user.id,
          role: 'assistant',
          content: fullText,
          actions: pendingActions.length ? pendingActions : null,
        })
        .then(() => {}, () => {})
    }

    send('error', { code, message: userMessage(code) })
  } finally {
    if (!res.writableEnded) res.end()
  }
}

/* ================================================================== */

function safeParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

function isUuid(value) {
  return typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)
}

/**
 * Var olan sohbeti getirir ya da yenisini açar.
 * `student_id` filtresi + RLS: başka öğrencinin sohbetine yazılamaz.
 */
async function resolveConversation(supabase, studentId, conversationId, firstMessage) {
  if (conversationId) {
    const { data, error } = await supabase
      .from('ai_conversations')
      .select('id, summary, summary_upto')
      .eq('id', conversationId)
      .eq('student_id', studentId)
      .maybeSingle()

    if (error) throw error
    if (!data) return null
    return { ...data, isNew: false }
  }

  const provisionalTitle = firstMessage.slice(0, 60)
  const { data, error } = await supabase
    .from('ai_conversations')
    .insert({ student_id: studentId, title: provisionalTitle })
    .select('id, summary, summary_upto')
    .single()

  if (error) throw error
  return { ...data, isNew: true }
}

/**
 * Sohbet geçmişini OpenAI biçimine çevirir.
 *
 * Tüm geçmiş GÖNDERİLMEZ: yalnızca son `history.maxMessages` mesaj alınır,
 * her biri karakter sınırına kırpılır ve daha eskisi varsa sohbetin
 * `summary` alanı tek bir sistem notu olarak eklenir. Böylece uzun
 * sohbetlerde bile istek boyutu sabit kalır.
 */
async function loadHistory(supabase, conversation) {
  const { data, error } = await supabase
    .from('ai_messages')
    .select('role, content, created_at')
    .eq('conversation_id', conversation.id)
    .order('created_at', { ascending: false })
    .limit(config.history.maxMessages)

  if (error || !data?.length) {
    return conversation.summary
      ? [{ role: 'system', content: `Önceki konuşmanın özeti: ${conversation.summary}` }]
      : []
  }

  const ordered = [...data].reverse().map((m) => ({
    role: m.role,
    content: String(m.content ?? '').slice(0, config.history.maxCharsPerMessage),
  }))

  if (conversation.summary) {
    return [
      { role: 'system', content: `Önceki konuşmanın özeti: ${conversation.summary}` },
      ...ordered,
    ]
  }

  return ordered
}
