import { useCallback, useEffect, useRef, useState } from 'react'
import { Loader2, Send } from 'lucide-react'
import { cn } from '../../lib/cn'
import { supabase } from '../../lib/supabaseClient'
import { Button, Textarea } from '../ui'
import { CHANNEL_EVENTS } from '../../lib/liveLesson/channel'

/**
 * Ders içi mesajlaşma.
 *
 * MEVCUT SİSTEMİ YENİDEN KULLANIR: mesajlar ayrı bir "ders sohbeti"
 * tablosuna değil, uygulamanın kendi `messages` tablosuna yazılır.
 * Böylece öğretmenin ders sırasında yazdığı "bunu deftere al" notu ders
 * bittikten sonra Mesajlar sekmesinde de duruyor — kaybolmuyor.
 *
 * Anlık görünüm için ders kanalı (broadcast) kullanılır: veritabanına
 * yazma tamamlanmadan mesaj karşı tarafta belirir. Veritabanı yazımı
 * başarısız olursa mesaj GÖNDERİLMEDİ olarak işaretlenir — sessizce
 * kaybolmaz.
 */
export default function LessonChatPanel({ userId, peerId, peerName, channel, onRead }) {
  const [messages, setMessages] = useState([])
  const [draft, setDraft] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const bottomRef = useRef(null)

  const load = useCallback(async () => {
    if (!userId || !peerId) return
    const { data } = await supabase
      .from('messages')
      .select('id, sender_id, receiver_id, content, created_at')
      .or(
        `and(sender_id.eq.${userId},receiver_id.eq.${peerId}),and(sender_id.eq.${peerId},receiver_id.eq.${userId})`
      )
      .order('created_at', { ascending: true })
      .limit(40)
    setMessages(data ?? [])
    setLoading(false)
  }, [userId, peerId])

  useEffect(() => {
    load()
  }, [load])

  useEffect(() => {
    onRead?.()
  }, [messages.length, onRead])

  useEffect(() => {
    if (!channel?.subscribe) return undefined
    return channel.subscribe(CHANNEL_EVENTS.CHAT, (payload) => {
      if (!payload || payload.by === userId) return
      setMessages((prev) =>
        prev.some((m) => m.id === payload.id)
          ? prev
          : [...prev, { id: payload.id, sender_id: payload.by, receiver_id: userId, content: payload.text, created_at: payload.at }]
      )
    })
  }, [channel, userId])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'end' })
  }, [messages])

  async function send() {
    const text = draft.trim()
    if (!text || sending) return
    setSending(true)
    const tempId = `local-${Date.now()}`
    setMessages((prev) => [
      ...prev,
      { id: tempId, sender_id: userId, receiver_id: peerId, content: text, created_at: new Date().toISOString() },
    ])
    setDraft('')

    channel?.send?.(CHANNEL_EVENTS.CHAT, { id: tempId, by: userId, text, at: new Date().toISOString() })

    const { data, error } = await supabase
      .from('messages')
      .insert({ sender_id: userId, receiver_id: peerId, content: text })
      .select('id, sender_id, receiver_id, content, created_at')
      .single()

    setSending(false)
    if (error) {
      setMessages((prev) => prev.map((m) => (m.id === tempId ? { ...m, failed: true } : m)))
    } else if (data) {
      setMessages((prev) => prev.map((m) => (m.id === tempId ? data : m)))
    }
  }

  return (
    <div className="flex h-full min-h-0 flex-col gap-3">
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1" aria-live="polite">
        {loading ? (
          <p className="flex items-center gap-2 py-6 text-sm text-ink/55">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Mesajlar yükleniyor…
          </p>
        ) : messages.length === 0 ? (
          <p className="py-6 text-sm leading-relaxed text-ink/55">
            Henüz mesaj yok. Buraya yazdıkların ders bittikten sonra {peerName} için Mesajlar
            sekmesinde de durur.
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {messages.map((m) => {
              const mine = m.sender_id === userId
              return (
                <li key={m.id} className={cn('flex', mine ? 'justify-end' : 'justify-start')}>
                  <div
                    className={cn(
                      'max-w-[85%] rounded-card px-3 py-2 text-sm leading-relaxed',
                      mine ? 'bg-brand-600 text-white' : 'bg-surface-muted text-ink'
                    )}
                  >
                    <p className="whitespace-pre-wrap break-words">{m.content}</p>
                    {m.failed && (
                      <p className="mt-1 text-2xs font-semibold text-white/85">
                        Gönderilemedi — bağlantını kontrol et
                      </p>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="flex items-end gap-2">
        <Textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              send()
            }
          }}
          rows={2}
          aria-label={`${peerName} kişisine mesaj`}
          placeholder="Mesaj yaz…"
          className="min-h-[3rem]"
        />
        <Button icon={Send} onClick={send} loading={sending} disabled={!draft.trim()} aria-label="Mesajı gönder">
          <span className="sr-only">Gönder</span>
        </Button>
      </div>
    </div>
  )
}
