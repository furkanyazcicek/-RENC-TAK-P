import { useCallback, useEffect, useRef, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'

export default function ChatThread({ contact }) {
  const { user } = useAuth()
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(true)
  const bottomRef = useRef(null)

  const load = useCallback(async () => {
    if (!user || !contact) return
    const { data } = await supabase
      .from('messages')
      .select('*')
      .or(
        `and(sender_id.eq.${user.id},receiver_id.eq.${contact.id}),and(sender_id.eq.${contact.id},receiver_id.eq.${user.id})`
      )
      .order('created_at', { ascending: true })
    setMessages(data ?? [])
    setLoading(false)
  }, [user, contact])

  useEffect(() => {
    load()
  }, [load])

  // Yeni mesajları anlık olarak dinle
  useEffect(() => {
    if (!user || !contact) return
    const channel = supabase
      .channel(`messages-${user.id}-${contact.id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        const m = payload.new
        const belongsToThread =
          (m.sender_id === user.id && m.receiver_id === contact.id) ||
          (m.sender_id === contact.id && m.receiver_id === user.id)
        if (belongsToThread) setMessages((prev) => [...prev, m])
      })
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [user, contact])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function handleSend(e) {
    e.preventDefault()
    if (!text.trim()) return
    const content = text.trim()
    setText('')
    const { error } = await supabase.from('messages').insert({
      sender_id: user.id,
      receiver_id: contact.id,
      content,
    })
    if (!error) load()
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 flex flex-col h-[70vh]">
      <div className="px-5 py-3 border-b border-brand-50 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-brand-500 text-white grid place-items-center text-sm font-semibold font-display">
          {contact.full_name?.charAt(0)?.toUpperCase() ?? '?'}
        </div>
        <span className="font-semibold text-ink">{contact.full_name}</span>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-2">
        {loading ? (
          <div className="flex-1 grid place-items-center text-sm text-ink/30">Yükleniyor...</div>
        ) : messages.length === 0 ? (
          <div className="flex-1 grid place-items-center text-sm text-ink/30">
            Henüz mesaj yok, ilk mesajı sen gönder!
          </div>
        ) : (
          messages.map((m) => {
            const mine = m.sender_id === user.id
            return (
              <div key={m.id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                    mine ? 'bg-brand-500 text-white rounded-br-sm' : 'bg-paper text-ink rounded-bl-sm'
                  }`}
                >
                  {m.content}
                  <div className={`text-[10px] mt-1 ${mine ? 'text-white/70' : 'text-ink/40'}`}>
                    {new Date(m.created_at).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            )
          })
        )}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend} className="border-t border-brand-50 p-3 flex items-center gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Bir mesaj yaz..."
          className="focus-ring flex-1 rounded-xl border border-brand-100 px-4 py-2.5 text-sm"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="focus-ring rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-50 transition-colors"
        >
          Gönder
        </button>
      </form>
    </div>
  )
}
