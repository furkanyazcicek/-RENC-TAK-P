import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Download,
  FileText,
  MessageCircle,
  MoreHorizontal,
  Paperclip,
  Pencil,
  Send,
  Trash2,
  X,
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { cn } from '../lib/cn'
import { MESSAGE_READ_EVENT } from '../hooks/useUnreadMessageCount'
import { captureStudentProfile, isProductCapture } from '../lib/productCapture'
import ImageLightbox from './ImageLightbox'
import { Alert, Avatar, Button, Input, Modal, Skeleton, Textarea, useToast } from './ui'

const MAX_FILE_MB = 10
const MAX_MESSAGE_LENGTH = 4000

function captureMessages() {
  const now = Date.now()
  return [
    {
      id: 'capture-message-1',
      sender_id: 'reels-teacher',
      receiver_id: 'reels-student',
      content: 'Fonksiyonlar denemesindeki 7. soruya birlikte bakalım.',
      created_at: new Date(now - 28 * 60 * 1000).toISOString(),
      read_at: null,
      edited_at: null,
    },
    {
      id: 'capture-message-2',
      sender_id: 'reels-student',
      receiver_id: 'reels-teacher',
      content: 'Hocam, tanım kümesini bulurken takıldım.',
      created_at: new Date(now - 22 * 60 * 1000).toISOString(),
      read_at: new Date(now - 20 * 60 * 1000).toISOString(),
      edited_at: null,
    },
    {
      id: 'capture-message-3',
      sender_id: 'reels-teacher',
      receiver_id: 'reels-student',
      content: 'Önce paydayı sıfır yapan değeri dışarıda bırak. Sonra birlikte kontrol ederiz.',
      created_at: new Date(now - 18 * 60 * 1000).toISOString(),
      read_at: null,
      edited_at: null,
    },
    {
      id: 'capture-message-4',
      sender_id: 'reels-student',
      receiver_id: 'reels-teacher',
      content: 'Tamam, çözümü birazdan göndereceğim.',
      created_at: new Date(now - 12 * 60 * 1000).toISOString(),
      read_at: new Date(now - 10 * 60 * 1000).toISOString(),
      edited_at: null,
    },
  ]
}

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
  const captureMode = isProductCapture()
  const currentUserId = user?.id ?? (captureMode ? captureStudentProfile().id : null)
  const toast = useToast()
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)
  const [signedUrls, setSignedUrls] = useState({})
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const [openActionsId, setOpenActionsId] = useState(null)
  const [editingMessage, setEditingMessage] = useState(null)
  const [editText, setEditText] = useState('')
  const [savingEdit, setSavingEdit] = useState(false)
  const [deletingMessage, setDeletingMessage] = useState(null)
  const [deleting, setDeleting] = useState(false)
  const bottomRef = useRef(null)

  const markMessagesRead = useCallback(async (messageIds) => {
    if (!currentUserId || messageIds.length === 0) return

    const readAt = new Date().toISOString()
    if (captureMode) {
      setMessages((current) =>
        current.map((message) =>
          messageIds.includes(message.id) ? { ...message, read_at: readAt } : message
        )
      )
      window.dispatchEvent(new Event(MESSAGE_READ_EVENT))
      return
    }

    const { error: readError } = await supabase
      .from('messages')
      .update({ read_at: readAt })
      .in('id', messageIds)
      .eq('receiver_id', currentUserId)
      .is('read_at', null)

    if (readError) return

    setMessages((current) =>
      current.map((message) =>
        messageIds.includes(message.id) ? { ...message, read_at: readAt } : message
      )
    )
    window.dispatchEvent(new Event(MESSAGE_READ_EVENT))
  }, [captureMode, currentUserId])

  const load = useCallback(async () => {
    if (!currentUserId || !contact) return

    if (captureMode) {
      const sampleMessages = captureMessages()
      setMessages(sampleMessages)
      setLoading(false)
      markMessagesRead(
        sampleMessages
          .filter((message) => message.receiver_id === currentUserId && !message.read_at)
          .map((message) => message.id)
      )
      return
    }

    const { data, error: loadError } = await supabase
      .from('messages')
      .select('*')
      .or(
        `and(sender_id.eq.${currentUserId},receiver_id.eq.${contact.id}),and(sender_id.eq.${contact.id},receiver_id.eq.${currentUserId})`
      )
      .order('created_at', { ascending: true })

    if (loadError) {
      setError('Mesajlar yüklenemedi. Lütfen yeniden deneyin.')
      setLoading(false)
      return
    }

    setMessages(data ?? [])
    setLoading(false)

    const unreadIds = (data ?? [])
      .filter((message) => message.receiver_id === currentUserId && !message.read_at)
      .map((message) => message.id)
    markMessagesRead(unreadIds)
  }, [captureMode, currentUserId, contact, markMessagesRead])

  useEffect(() => {
    load()
  }, [load])

  // Yeni, düzenlenmiş ve silinmiş mesajları anında iki tarafta da yansıt.
  useEffect(() => {
    if (captureMode || !currentUserId || !contact) return
    const channel = supabase
      .channel(`messages-${currentUserId}-${contact.id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        const m = payload.new
        const belongsToThread =
          (m.sender_id === currentUserId && m.receiver_id === contact.id) ||
          (m.sender_id === contact.id && m.receiver_id === currentUserId)
        if (!belongsToThread) return

        setMessages((prev) => (prev.some((message) => message.id === m.id) ? prev : [...prev, m]))
        if (m.receiver_id === currentUserId && !m.read_at) markMessagesRead([m.id])
      })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'messages' }, (payload) => {
        const m = payload.new
        const belongsToThread =
          (m.sender_id === currentUserId && m.receiver_id === contact.id) ||
          (m.sender_id === contact.id && m.receiver_id === currentUserId)
        if (!belongsToThread) return

        setMessages((prev) =>
          prev.some((message) => message.id === m.id)
            ? prev.map((message) => (message.id === m.id ? m : message))
            : [...prev, m]
        )
      })
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'messages' }, (payload) => {
        setMessages((prev) => prev.filter((message) => message.id !== payload.old.id))
      })
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [captureMode, currentUserId, contact, markMessagesRead])

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
  }, [messages.length])

  useEffect(() => {
    if (!openActionsId) return undefined

    function closeActionsOnPointer(event) {
      if (!event.target.closest?.(`[data-message-actions="${openActionsId}"]`)) {
        setOpenActionsId(null)
      }
    }

    function closeActionsOnEscape(event) {
      if (event.key === 'Escape') setOpenActionsId(null)
    }

    document.addEventListener('pointerdown', closeActionsOnPointer)
    document.addEventListener('keydown', closeActionsOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeActionsOnPointer)
      document.removeEventListener('keydown', closeActionsOnEscape)
    }
  }, [openActionsId])

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
      if (captureMode) {
        setMessages((current) => [
          ...current,
          {
            id: `capture-message-${Date.now()}`,
            sender_id: currentUserId,
            receiver_id: contact.id,
            content: text.trim() || null,
            created_at: new Date().toISOString(),
            read_at: null,
            edited_at: null,
          },
        ])
        setText('')
        setFile(null)
        return
      }

      let attachment_url = null
      let attachment_name = null
      let attachment_type = null

      if (file) {
        const path = `${currentUserId}/${contact.id}/${Date.now()}-${file.name}`
        const { error: uploadError } = await supabase.storage
          .from('chat-attachments')
          .upload(path, file)
        if (uploadError) throw uploadError
        attachment_url = path
        attachment_name = file.name
        attachment_type = attachmentTypeFor(file)
      }

      const { error: insertError } = await supabase.from('messages').insert({
        sender_id: currentUserId,
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

  function startEditing(message) {
    setOpenActionsId(null)
    setEditingMessage(message)
    setEditText(message.content ?? '')
  }

  async function saveEdit(event) {
    event.preventDefault()
    if (!editingMessage) return

    const nextContent = editText.trim()
    if (!nextContent && !editingMessage.attachment_url) return

    setSavingEdit(true)
    if (captureMode) {
      const editedAt = new Date().toISOString()
      setMessages((current) =>
        current.map((message) =>
          message.id === editingMessage.id
            ? { ...message, content: nextContent || null, edited_at: editedAt }
            : message
        )
      )
      setSavingEdit(false)
      setEditingMessage(null)
      setEditText('')
      toast.success('Mesaj düzenlendi')
      return
    }

    const { error: editError } = await supabase.rpc('edit_own_message', {
      p_message_id: editingMessage.id,
      p_content: nextContent,
    })
    setSavingEdit(false)

    if (editError) {
      toast.error('Mesaj düzenlenemedi', { description: 'Lütfen yeniden deneyin.' })
      return
    }

    const editedAt = new Date().toISOString()
    setMessages((current) =>
      current.map((message) =>
        message.id === editingMessage.id
          ? { ...message, content: nextContent || null, edited_at: editedAt }
          : message
      )
    )
    setEditingMessage(null)
    setEditText('')
    toast.success('Mesaj düzenlendi')
  }

  async function deleteMessage() {
    if (!deletingMessage) return

    setDeleting(true)
    if (captureMode) {
      setMessages((current) => current.filter((message) => message.id !== deletingMessage.id))
      setDeletingMessage(null)
      setDeleting(false)
      toast.success('Mesaj silindi')
      return
    }

    const { data: attachmentPath, error: deleteError } = await supabase.rpc('delete_own_message', {
      p_message_id: deletingMessage.id,
    })

    if (deleteError) {
      setDeleting(false)
      toast.error('Mesaj silinemedi', { description: 'Lütfen yeniden deneyin.' })
      return
    }

    setMessages((current) => current.filter((message) => message.id !== deletingMessage.id))
    setDeletingMessage(null)
    setDeleting(false)
    toast.success('Mesaj silindi')

    if (attachmentPath) {
      const { error: attachmentError } = await supabase.storage
        .from('chat-attachments')
        .remove([attachmentPath])
      if (attachmentError) {
        toast.warning('Mesaj silindi', {
          description: 'Dosya eki depodan kaldırılamadı; görüşmede artık görünmüyor.',
        })
      }
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
            const mine = m.sender_id === currentUserId
            const signedUrl = m.attachment_url ? signedUrls[m.attachment_url] : null
            const time = new Date(m.created_at).toLocaleTimeString('tr-TR', {
              hour: '2-digit',
              minute: '2-digit',
            })

            return (
              <div
                key={item.key}
                className={cn(
                  'group/message flex items-end gap-1.5',
                  mine ? 'justify-end' : 'justify-start'
                )}
              >
                {mine && (
                  <div
                    data-message-actions={m.id}
                    className={cn(
                      'mb-0.5 flex shrink-0 flex-col rounded-xl border border-line bg-surface p-0.5 shadow-xs',
                      'transition-opacity duration-150 motion-reduce:transition-none',
                      openActionsId === m.id
                        ? 'opacity-100'
                        : 'opacity-100 sm:opacity-0 sm:group-hover/message:opacity-100 sm:group-focus-within/message:opacity-100'
                    )}
                  >
                    {openActionsId === m.id ? (
                      <>
                        {m.content && (
                          <button
                            type="button"
                            onClick={() => startEditing(m)}
                            aria-label="Mesajı düzenle"
                            title="Düzenle"
                            className="focus-ring grid h-10 w-10 place-items-center rounded-lg text-ink/60 transition-colors hover:bg-brand-500/[0.08] hover:text-brand-700"
                          >
                            <Pencil className="h-4 w-4" aria-hidden="true" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            setOpenActionsId(null)
                            setDeletingMessage(m)
                          }}
                          aria-label="Mesajı sil"
                          title="Sil"
                          className="focus-ring grid h-10 w-10 place-items-center rounded-lg text-ink/60 transition-colors hover:bg-danger-500/[0.08] hover:text-danger-600"
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setOpenActionsId(m.id)}
                        aria-label="Mesaj işlemlerini aç"
                        aria-haspopup="true"
                        aria-expanded={false}
                        className="focus-ring grid h-10 w-10 place-items-center rounded-lg text-ink/55 transition-colors hover:bg-ink/[0.05] hover:text-ink"
                      >
                        <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                )}
                <div
                  className={cn(
                    'max-w-[calc(100%-3.25rem)] rounded-card px-4 py-2.5 text-sm sm:max-w-[78%]',
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
                      'mt-1 flex items-center gap-1 text-[10px] tabular',
                      mine ? 'text-white/65' : 'text-ink/55'
                    )}
                  >
                    <span>{time}</span>
                    {m.edited_at && <span>· düzenlendi</span>}
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
            maxLength={MAX_MESSAGE_LENGTH}
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

      <Modal
        open={Boolean(editingMessage)}
        onClose={() => {
          if (savingEdit) return
          setEditingMessage(null)
          setEditText('')
        }}
        title="Mesajı düzenle"
        description={editingMessage?.attachment_url ? 'Dosya eki korunacak.' : undefined}
        footer={
          <>
            <Button
              variant="ghost"
              onClick={() => {
                setEditingMessage(null)
                setEditText('')
              }}
              disabled={savingEdit}
            >
              Vazgeç
            </Button>
            <Button
              type="submit"
              form="message-edit-form"
              loading={savingEdit}
              disabled={!editText.trim() && !editingMessage?.attachment_url}
            >
              Kaydet
            </Button>
          </>
        }
      >
        <form id="message-edit-form" onSubmit={saveEdit}>
          <label htmlFor="message-edit-text" className="mb-2 block text-sm font-semibold text-ink">
            Mesaj
          </label>
          <Textarea
            id="message-edit-text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
            rows={5}
            maxLength={MAX_MESSAGE_LENGTH}
            aria-describedby="message-edit-count"
          />
          <p id="message-edit-count" className="mt-2 text-right text-2xs text-ink/55 tabular-nums">
            {editText.length}/{MAX_MESSAGE_LENGTH}
          </p>
        </form>
      </Modal>

      <Modal
        open={Boolean(deletingMessage)}
        onClose={() => {
          if (!deleting) setDeletingMessage(null)
        }}
        title="Mesaj silinsin mi?"
        description="Bu işlem geri alınamaz ve mesaj iki taraftan da kaldırılır."
        footer={
          <>
            <Button variant="ghost" onClick={() => setDeletingMessage(null)} disabled={deleting}>
              Vazgeç
            </Button>
            <Button variant="danger" icon={Trash2} onClick={deleteMessage} loading={deleting}>
              Mesajı sil
            </Button>
          </>
        }
      >
        <div className="rounded-input border border-line bg-surface-muted px-4 py-3 text-sm leading-relaxed text-ink/70">
          {deletingMessage?.content || deletingMessage?.attachment_name || 'Dosya eki'}
        </div>
      </Modal>
    </div>
  )
}
