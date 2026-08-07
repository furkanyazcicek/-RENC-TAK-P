import { useCallback, useEffect, useRef, useState } from 'react'
import { Paperclip, FileText, Download, X } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import ImageLightbox from './ImageLightbox'

const MAX_FILE_MB = 10

function attachmentTypeFor(file) {
  if (file.type.startsWith('image/')) return 'image'
  if (file.type === 'application/pdf') return 'pdf'
  return 'file'
}

function dayLabel(dateStr) {
  const d = new Date(dateStr)
  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)
  const sameDay = (a, b) => a.toDateString() === b.toDateString()
  if (sameDay(d, today)) return 'Bugün'
  if (sameDay(d, yesterday)) return 'Dün'
  return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ChatThread({ contact }) {
  const { user } = useAuth()
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)
  const [signedUrls, setSignedUrls] = useState({})
  const [lightboxSrc, setLightboxSrc] = useState(null)
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

  // chat-attachments private bucket olduğu için görüntülemeden önce
  // her ek için imzalı (süreli) bir URL almamız gerekiyor.
  useEffect(() => {
    const withAttachments = messages.filter((m) => m.attachment_url && !signedUrls[m.attachment_url])
    if (withAttachments.length === 0) return
    ;(async () => {
      const entries = await Promise.all(
        withAttachments.map(async (m) => {
          const { data } = await supabase.storage
            .from('chat-attachments')
            .createSignedUrl(m.attachment_url, 60 * 60) // 1 saat geçerli
          return [m.attachment_url, data?.signedUrl ?? null]
        })
      )
      setSignedUrls((prev) => ({ ...prev, ...Object.fromEntries(entries) }))
    })()
  }, [messages, signedUrls])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleFileSelect(e) {
    const f = e.target.files?.[0]
    if (!f) return
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      setError(`Dosya ${MAX_FILE_MB} MB'den küçük olmalı.`)
      return
    }
    setError(null)
    setFile(f)
  }

  async function handleSend(e) {
    e.preventDefault()
    if (!text.trim() && !file) return
    setUploading(true)
    setError(null)

    try {
      let attachment_url = null
      let attachment_name = null
      let attachment_type = null

      if (file) {
        const path = `${user.id}/${contact.id}/${Date.now()}-${file.name}`
        const { error: uploadError } = await supabase.storage.from('chat-attachments').upload(path, file)
        if (uploadError) throw uploadError
        attachment_url = path
        attachment_name = file.name
        attachment_type = attachmentTypeFor(file)
      }

      const { error: insertError } = await supabase.from('messages').insert({
        sender_id: user.id,
        receiver_id: contact.id,
        content: text.trim() || null,
        attachment_url,
        attachment_name,
        attachment_type,
      })
      if (insertError) throw insertError

      setText('')
      setFile(null)
      load()
    } catch (err) {
      setError(err.message ?? 'Gönderilemedi, tekrar deneyin.')
    } finally {
      setUploading(false)
    }
  }

  // Mesajları güne göre grupla, her grubun başına tarih ayracı koy
  const grouped = []
  let lastDay = null
  messages.forEach((m) => {
    const label = dayLabel(m.created_at)
    if (label !== lastDay) {
      grouped.push({ type: 'day', label, key: `day-${m.id}` })
      lastDay = label
    }
    grouped.push({ type: 'message', data: m, key: m.id })
  })

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 flex flex-col h-[70vh]">
      <div className="px-5 py-3 border-b border-brand-50 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white grid place-items-center text-sm font-semibold font-display">
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
          grouped.map((item) => {
            if (item.type === 'day') {
              return (
                <div key={item.key} className="flex items-center justify-center my-2">
                  <span className="text-[11px] font-semibold text-ink/40 bg-ink/5 rounded-full px-3 py-1">
                    {item.label}
                  </span>
                </div>
              )
            }

            const m = item.data
            const mine = m.sender_id === user.id
            const signedUrl = m.attachment_url ? signedUrls[m.attachment_url] : null
            const time = new Date(m.created_at).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })

            return (
              <div key={item.key} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                    mine ? 'bg-brand-500 text-white rounded-br-sm' : 'bg-paper text-ink rounded-bl-sm'
                  }`}
                >
                  {m.attachment_url && (
                    <div className="mb-1.5">
                      {m.attachment_type === 'image' ? (
                        signedUrl ? (
                          <button type="button" onClick={() => setLightboxSrc(signedUrl)} className="focus-ring block">
                            <img
                              src={signedUrl}
                              alt={m.attachment_name ?? 'Görsel'}
                              className="max-h-48 rounded-lg object-cover hover:opacity-90 transition-opacity"
                            />
                          </button>
                        ) : (
                          <div className="h-24 w-32 rounded-lg bg-ink/5 animate-pulse" />
                        )
                      ) : (
                        <a
                          href={signedUrl ?? '#'}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                            mine ? 'bg-white/15 hover:bg-white/25' : 'bg-white hover:bg-ink/5 border border-ink/10'
                          }`}
                        >
                          <FileText className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate flex-1">{m.attachment_name ?? 'Dosya'}</span>
                          <Download className="h-3.5 w-3.5 flex-shrink-0" />
                        </a>
                      )}
                    </div>
                  )}
                  {m.content && <p>{m.content}</p>}
                  <div className={`text-[10px] mt-1 ${mine ? 'text-white/70' : 'text-ink/40'}`}>{time}</div>
                </div>
              </div>
            )
          })
        )}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend} className="border-t border-brand-50 p-3 flex flex-col gap-2">
        {file && (
          <div className="flex items-center gap-2 text-xs text-ink/60 bg-paper rounded-lg px-3 py-1.5 w-fit">
            <FileText className="h-3.5 w-3.5" />
            <span className="truncate max-w-[200px]">{file.name}</span>
            <button type="button" onClick={() => setFile(null)} className="focus-ring text-ink/40 hover:text-bad">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
        {error && <p className="text-xs text-bad">{error}</p>}
        <div className="flex items-center gap-2">
          <label className="focus-ring cursor-pointer flex-shrink-0 h-10 w-10 rounded-xl border border-brand-100 grid place-items-center text-brand-600 hover:bg-brand-50 transition-colors">
            <Paperclip className="h-4 w-4" />
            <input type="file" className="hidden" onChange={handleFileSelect} accept="image/*,application/pdf" />
          </label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Bir mesaj yaz..."
            className="focus-ring flex-1 rounded-xl border border-brand-100 px-4 py-2.5 text-sm"
          />
          <button
            type="submit"
            disabled={uploading || (!text.trim() && !file)}
            className="focus-ring rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-50 transition-colors"
          >
            {uploading ? 'Gönderiliyor...' : 'Gönder'}
          </button>
        </div>
      </form>

      {lightboxSrc && <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  )
}
