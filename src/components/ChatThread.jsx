import { useCallback, useEffect, useRef, useState } from 'react'
import { Paperclip, FileText, Download, MessageCircle, Send, X } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { cn } from '../lib/cn'
import ImageLightbox from './ImageLightbox'
import { Alert, Avatar, Button, Input, Skeleton } from './ui'

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

/**
 * ChatThread — iki kişi arasındaki birebir sohbet.
 *
 * Mesajlar güne göre gruplanır ve araya tarih ayracı girer; uzun sohbetlerde
 * "bu ne zaman konuşulmuştu" sorusu kaydırırken cevaplanır.
 */
export default function ChatThread({ contact, className }) {
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
  //
  // Denenmiş yollar `requestedRef` içinde tutulur: imzalı URL alınamazsa
  // (dosya silinmiş, RLS engellemiş) sonuç null olur ve "henüz alınmadı" ile
  // aynı görünürdü — o zaman efekt kendini sonsuz döngüde tekrar tetiklerdi.
  const requestedRef = useRef(new Set())

  useEffect(() => {
    const pending = messages
      .filter((m) => m.attachment_url && !requestedRef.current.has(m.attachment_url))
      .map((m) => m.attachment_url)
    if (pending.length === 0) return

    pending.forEach((path) => requestedRef.current.add(path))
    ;(async () => {
      const entries = await Promise.all(
        pending.map(async (path) => {
          const { data } = await supabase.storage
            .from('chat-attachments')
            .createSignedUrl(path, 60 * 60) // 1 saat geçerli
          return [path, data?.signedUrl ?? null]
        })
      )
      setSignedUrls((prev) => ({ ...prev, ...Object.fromEntries(entries) }))
    })()
  }, [messages])

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
        const { error: uploadError } = await supabase.storage
          .from('chat-attachments')
          .upload(path, file)
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
    <div className={cn('card flex h-[70vh] flex-col overflow-hidden', className)}>
      <header className="flex items-center gap-3 border-b border-line px-5 py-3.5">
        <Avatar name={contact.full_name} size="sm" />
        <div className="min-w-0">
          <p className="truncate font-display font-bold text-ink leading-tight">
            {contact.full_name}
          </p>
          <p className="text-2xs text-ink/55">
            {messages.length ? `${messages.length} mesaj` : 'Sohbet henüz başlamadı'}
          </p>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto bg-surface-muted/40 px-5 py-4">
        {loading ? (
          <div className="flex flex-col gap-3">
            <Skeleton className="h-10 w-2/5" />
            <Skeleton className="ml-auto h-10 w-1/2" />
            <Skeleton className="h-10 w-1/3" />
          </div>
        ) : messages.length === 0 ? (
          <div className="grid flex-1 place-items-center text-center">
            <div>
              <span className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-surface text-brand-500 ring-1 ring-brand-500/15 shadow-[0_8px_24px_-12px_rgb(var(--c-brand-500)/0.5)]">
                <MessageCircle className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <p className="font-display font-bold text-ink">Henüz mesaj yok</p>
              <p className="mt-1 text-sm text-ink/60">İlk mesajı sen gönder.</p>
            </div>
          </div>
        ) : (
          grouped.map((item) => {
            if (item.type === 'day') {
              return (
                <div key={item.key} className="my-2 flex items-center justify-center">
                  <span className="rounded-full bg-ink/[0.06] px-3 py-1 text-2xs font-semibold text-ink/55">
                    {item.label}
                  </span>
                </div>
              )
            }

            const m = item.data
            const mine = m.sender_id === user.id
            const signedUrl = m.attachment_url ? signedUrls[m.attachment_url] : null
            const time = new Date(m.created_at).toLocaleTimeString('tr-TR', {
              hour: '2-digit',
              minute: '2-digit',
            })

            return (
              <div key={item.key} className={cn('flex', mine ? 'justify-end' : 'justify-start')}>
                <div
                  className={cn(
                    'max-w-[78%] rounded-card px-4 py-2.5 text-sm',
                    mine
                      ? 'rounded-br-md bg-aurora-gradient text-white shadow-aurora'
                      : 'rounded-bl-md border border-line bg-surface text-ink shadow-xs'
                  )}
                >
                  {m.attachment_url && (
                    <div className="mb-1.5">
                      {m.attachment_type === 'image' ? (
                        signedUrl ? (
                          <button
                            type="button"
                            onClick={() => setLightboxSrc(signedUrl)}
                            className="focus-ring block overflow-hidden rounded-lg"
                          >
                            <img
                              src={signedUrl}
                              alt={m.attachment_name ?? 'Görsel'}
                              className="max-h-48 rounded-lg object-cover transition-opacity hover:opacity-90"
                            />
                          </button>
                        ) : (
                          <div className="h-24 w-32 animate-pulse rounded-lg bg-ink/10" />
                        )
                      ) : (
                        <a
                          href={signedUrl ?? '#'}
                          target="_blank"
                          rel="noreferrer"
                          className={cn(
                            'flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-colors',
                            mine
                              ? 'bg-white/15 hover:bg-white/25'
                              : 'border border-line bg-surface-muted hover:bg-surface-sunken'
                          )}
                        >
                          <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
                          <span className="flex-1 truncate">{m.attachment_name ?? 'Dosya'}</span>
                          <Download className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                  {m.content && <p className="leading-relaxed">{m.content}</p>}
                  <div
                    className={cn(
                      'mt-1 text-[10px] tabular',
                      mine ? 'text-white/65' : 'text-ink/55'
                    )}
                  >
                    {time}
                  </div>
                </div>
              </div>
            )
          })
        )}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend} className="flex flex-col gap-2 border-t border-line p-3">
        {file && (
          <div className="flex w-fit items-center gap-2 rounded-lg bg-surface-sunken px-3 py-1.5 text-xs text-ink/60">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="max-w-[200px] truncate">{file.name}</span>
            <button
              type="button"
              onClick={() => setFile(null)}
              aria-label="Eki kaldır"
              className="focus-ring text-ink/55 transition-colors hover:text-danger-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {error && <Alert tone="danger">{error}</Alert>}

        <div className="flex items-center gap-2">
          <label className="focus-ring grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-btn border border-line text-brand-600 transition-colors hover:border-brand-300 hover:bg-brand-500/[0.07]">
            <Paperclip className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Dosya ekle</span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileSelect}
              accept="image/*,application/pdf"
            />
          </label>

          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Bir mesaj yaz…"
            aria-label="Mesaj"
          />

          <Button
            type="submit"
            icon={Send}
            loading={uploading}
            disabled={!text.trim() && !file}
            className="shrink-0 px-4"
          >
            <span className="hidden sm:inline">Gönder</span>
          </Button>
        </div>
      </form>

      {lightboxSrc && <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  )
}
