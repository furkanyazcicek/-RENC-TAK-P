import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  ArrowUp,
  History,
  MessageSquarePlus,
  Sparkles,
  Square,
  Trash2,
} from 'lucide-react'

import { useAuth } from '../context/AuthContext'
import {
  AICoachError,
  deleteAllConversations,
  deleteConversation,
  getConversation,
  listConversations,
  sendMessage,
} from '../lib/aiCoach'
import { AppShell, Badge, Button, Card, EmptyState, IconButton, Modal, Spinner, useToast } from '../components/ui'
import ChatMessage, { CoachAvatar } from '../components/ai/ChatMessage'
import QuickActions from '../components/ai/QuickActions'
import { cn } from '../lib/cn'
import { captureStudentProfile, isProductCapture } from '../lib/productCapture'

/**
 * AICoach — /ai-koc
 *
 * DÜZEN: Sayfa kaydırılmaz; sohbet alanı görüntü alanına sabitlenir ve
 * yalnızca mesaj listesi kayar. Yükseklik `dvh` (dynamic viewport height)
 * ile hesaplandığı için mobilde klavye açıldığında görüntü alanı küçülür
 * ve yazma kutusu klavyenin üstünde görünür kalır — `vh` ile bu olmaz.
 *
 * Çıkarılan yükseklikler AppShell'in kendi boşluklarıdır:
 *   başlık (4.25rem + üst güvenli alan) + main dikey padding
 *   mobil: 1.5rem üst + 7rem alt (alt gezinme çubuğu payı) = 8.5rem
 *   lg   : 2rem üst + 3rem alt = 5rem
 */
const CHAT_HEIGHT = cn(
  'h-[calc(100dvh-4.25rem-var(--safe-area-inset-top)-8.5rem)]',
  'lg:h-[calc(100dvh-4.25rem-var(--safe-area-inset-top)-5rem)]',
  'min-h-[26rem]'
)

const CAPTURE_MESSAGES = [
  {
    id: 'capture-user-1',
    role: 'user',
    content: 'Son TYT denememde matematik netim neden düştü?',
  },
  {
    id: 'capture-ai-1',
    role: 'assistant',
    content:
      'Son iki haftadaki kayıtlarına göre en belirgin kayıp **problemler** ve **fonksiyonlar** konularında. Süren yeterli; asıl farkı yanlış yaptığın soru tiplerini tekrar ederek kapatabilirsin.',
    actions: [],
  },
  {
    id: 'capture-user-2',
    role: 'user',
    content: 'Bu hafta için kısa bir plan çıkar.',
  },
  {
    id: 'capture-ai-2',
    role: 'assistant',
    content:
      '**3 günlük odak planın**\n\n1. Fonksiyonlar: 25 soru + yanlış analizi\n2. Problemler: 30 soru + süre tutma\n3. Karma mini deneme + eksik tekrarı',
    actions: [],
  },
  {
    id: 'capture-user-3',
    role: 'user',
    content: 'Bugün ilk olarak ne yapayım?',
  },
  {
    id: 'capture-ai-3',
    role: 'assistant',
    content:
      '**Fonksiyonlar** ile başla: 15 soruyu 25 dakikada çöz. Ardından yalnızca yanlış ve boşlarını incele; yeni teste geçmeden önce hata nedenini tek cümleyle yaz.',
    actions: [],
  },
  {
    id: 'capture-user-4',
    role: 'user',
    content: 'Planı bitirince gelişimimi görebilecek miyim?',
  },
  {
    id: 'capture-ai-4',
    role: 'assistant',
    content:
      'Evet. Yeni sonuçları analiz ekranında önceki denemenle karşılaştırıp net değişimini ve konu bazlı isabet oranını birlikte izleyeceğiz.',
    actions: [],
  },
]

export default function AICoach() {
  const { profile } = useAuth()
  const captureMode = isProductCapture()
  const visibleProfile = profile ?? (captureMode ? captureStudentProfile() : null)
  const navigate = useNavigate()
  const location = useLocation()
  const toast = useToast()

  const [conversationId, setConversationId] = useState(null)
  const [messages, setMessages] = useState(() => (captureMode ? CAPTURE_MESSAGES : []))
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const [status, setStatus] = useState(null)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [conversations, setConversations] = useState([])
  const [loadingConversation, setLoadingConversation] = useState(false)

  const scrollRef = useRef(null)
  const textareaRef = useRef(null)
  const abortRef = useRef(null)
  const lastPromptRef = useRef(null)
  // Panelden gelen hazır sorunun yalnızca bir kez gönderilmesini sağlar.
  const autoSentRef = useRef(false)

  /* ---------- Otomatik kaydırma ---------- */
  // Kullanıcı yukarı kaydırıp eski mesajı okuyorsa aşağı zıplatmayız.
  const stickToBottomRef = useRef(true)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const distance = el.scrollHeight - el.scrollTop - el.clientHeight
    stickToBottomRef.current = distance < 120
  }, [])

  useLayoutEffect(() => {
    const el = scrollRef.current
    if (el && stickToBottomRef.current) el.scrollTop = el.scrollHeight
  }, [messages, status])

  /* ---------- Gönderme ---------- */

  const submit = useCallback(
    async (rawText) => {
      const text = rawText.trim()
      if (!text || streaming) return

      lastPromptRef.current = text
      setInput('')
      setStatus(null)
      setStreaming(true)

      // Kullanıcı mesajı + boş asistan balonu hemen eklenir; cevap
      // aktıkça son balonun içeriği büyür.
      setMessages((list) => [
        ...list,
        { id: `local-user-${Date.now()}`, role: 'user', content: text },
        { id: `local-ai-${Date.now()}`, role: 'assistant', content: '', actions: [] },
      ])
      stickToBottomRef.current = true

      const controller = new AbortController()
      abortRef.current = controller

      const patchLast = (patch) => {
        setMessages((list) => {
          const next = [...list]
          const last = next[next.length - 1]
          if (!last || last.role !== 'assistant') return list
          next[next.length - 1] = typeof patch === 'function' ? patch(last) : { ...last, ...patch }
          return next
        })
      }

      try {
        await sendMessage({
          message: text,
          conversationId,
          signal: controller.signal,
          handlers: {
            onMeta: (meta) => {
              if (meta.conversationId) setConversationId(meta.conversationId)
            },
            onStatus: (text2) => setStatus(text2),
            onDelta: (chunk) => {
              setStatus(null)
              patchLast((last) => ({ ...last, content: last.content + chunk }))
            },
            onActions: (actions) => patchLast({ actions }),
            onTitle: () => {
              // Başlık listelemede görünsün diye geçmiş bir sonraki
              // açılışta tazelenecek; burada iş yapmaya gerek yok.
            },
            onDone: (payload) => {
              if (payload?.messageId) patchLast({ id: payload.messageId })
            },
            onError: (error) => {
              // Model bir şeyler yazmayı başardıysa o metin korunur ve hata
              // ayrı bir balon olarak altına eklenir; hiç yazamadıysa boş
              // balonun kendisi hata balonuna dönüşür.
              setMessages((list) => {
                const last = list[list.length - 1]
                if (!last || last.role !== 'assistant') return list

                if (last.content) {
                  return [
                    ...list,
                    {
                      id: `local-err-${Date.now()}`,
                      role: 'assistant',
                      content: error.message,
                      error: true,
                    },
                  ]
                }

                const next = [...list]
                next[next.length - 1] = { ...last, error: true, content: error.message }
                return next
              })
            },
          },
        })
      } catch (error) {
        if (error?.name === 'AbortError') {
          patchLast((last) =>
            last.content ? last : { ...last, error: true, content: 'Yanıt durduruldu.' }
          )
        } else {
          const message =
            error instanceof AICoachError
              ? error.message
              : 'AI Koç şu anda yanıt veremiyor. Birkaç saniye sonra tekrar deneyebilirsin.'
          patchLast({ error: true, content: message })
        }
      } finally {
        setStreaming(false)
        setStatus(null)
        abortRef.current = null
      }
    },
    [conversationId, streaming]
  )

  /* ---------- Panelden gelen hazır soru ---------- */
  useEffect(() => {
    const prompt = location.state?.prompt
    if (!prompt || autoSentRef.current) return
    autoSentRef.current = true
    // Geri tuşuyla dönüldüğünde soru tekrar gönderilmesin diye
    // yönlendirme durumu temizlenir.
    navigate(location.pathname, { replace: true, state: null })
    submit(prompt)
  }, [location.state, location.pathname, navigate, submit])

  /* ---------- Sohbet geçmişi ---------- */

  const refreshConversations = useCallback(async () => {
    try {
      setConversations(await listConversations())
    } catch {
      setConversations([])
    }
  }, [])

  useEffect(() => {
    refreshConversations()
  }, [refreshConversations, conversationId])

  async function openConversation(id) {
    setHistoryOpen(false)
    setLoadingConversation(true)
    try {
      const { messages: loaded } = await getConversation(id)
      setConversationId(id)
      setMessages(
        loaded.map((m) => ({
          id: m.id,
          role: m.role,
          content: m.content,
          actions: m.actions ?? [],
        }))
      )
      stickToBottomRef.current = true
    } catch (error) {
      toast.error(error instanceof AICoachError ? error.message : 'Sohbet açılamadı.')
    } finally {
      setLoadingConversation(false)
    }
  }

  function startNewConversation() {
    if (streaming) abortRef.current?.abort()
    setConversationId(null)
    setMessages([])
    setStatus(null)
    setHistoryOpen(false)
    textareaRef.current?.focus()
  }

  async function removeConversation(id) {
    try {
      await deleteConversation(id)
      if (id === conversationId) startNewConversation()
      await refreshConversations()
      toast.success('Sohbet silindi.')
    } catch {
      toast.error('Sohbet silinemedi.')
    }
  }

  async function removeAllConversations() {
    try {
      await deleteAllConversations()
      startNewConversation()
      await refreshConversations()
      toast.success('Tüm sohbetler silindi.')
    } catch {
      toast.error('Sohbetler silinemedi.')
    }
  }

  /* ---------- Yazma kutusu ---------- */

  function handleInput(e) {
    setInput(e.target.value)
    const el = e.target
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`
  }

  function handleKeyDown(e) {
    // Masaüstünde Enter gönderir, Shift+Enter satır atlar.
    // Mobilde Enter her zaman satır atlar; gönderme butonla yapılır.
    if (e.key === 'Enter' && !e.shiftKey && window.innerWidth >= 640) {
      e.preventDefault()
      submit(input)
    }
  }

  useEffect(() => {
    if (!streaming && textareaRef.current) textareaRef.current.style.height = 'auto'
  }, [streaming])

  const isEmpty = messages.length === 0

  return (
    <AppShell
      title="AI Koç"
      subtitle="Verilerine göre kişisel çalışma koçun"
      headerAction={
        <div className="flex items-center gap-1.5">
          <IconButton
            icon={History}
            label="Sohbet geçmişi"
            variant="secondary"
            onClick={() => setHistoryOpen(true)}
          />
          <IconButton
            icon={MessageSquarePlus}
            label="Yeni sohbet"
            variant="secondary"
            onClick={startNewConversation}
          />
        </div>
      }
    >
      <Card className={cn('flex min-w-0 flex-col overflow-hidden', CHAT_HEIGHT)}>
        {/* ---------------- Mesajlar ---------------- */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-5"
        >
          {loadingConversation ? (
            <div className="flex h-full items-center justify-center">
              <Spinner />
            </div>
          ) : isEmpty ? (
            <WelcomeScreen name={visibleProfile?.full_name?.split(' ')[0]} onSelect={submit} />
          ) : (
            <div className="flex flex-col gap-5">
              {messages.map((message, i) => (
                <ChatMessage
                  key={message.id ?? i}
                  message={message}
                  studentName={visibleProfile?.full_name}
                  streaming={streaming && i === messages.length - 1 && message.role === 'assistant'}
                  onRetry={
                    message.error && !streaming && lastPromptRef.current
                      ? () => {
                          // Hatalı balonu kaldırıp aynı soruyu tekrar sor.
                          setMessages((list) => list.filter((_, j) => j !== i))
                          submit(lastPromptRef.current)
                        }
                      : undefined
                  }
                />
              ))}

              {/* Araç çalışırken gösterilen canlı durum satırı */}
              {status && (
                <div className="flex items-center gap-3 pl-11">
                  <span className="flex items-center gap-2 rounded-full bg-brand-500/[0.08] px-3 py-1.5 text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-500/12">
                    <Spinner className="h-3 w-3" />
                    {status}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ---------------- Hazır sorular ---------------- */}
        {!isEmpty && (
          <div className="border-t border-line px-4 pt-3 sm:px-5">
            <QuickActions onSelect={submit} disabled={streaming} variant="row" />
          </div>
        )}

        {/* ---------------- Yazma kutusu ---------------- */}
        <div className="border-t border-line bg-surface-muted/60 p-3 sm:p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              submit(input)
            }}
            className="flex items-end gap-2"
          >
            <div className="min-w-0 flex-1">
              <label htmlFor="ai-input" className="sr-only">
                AI Koç’a mesajın
              </label>
              <textarea
                id="ai-input"
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                disabled={streaming}
                placeholder="Bugün ne çalışmalıyım?"
                className="input-base max-h-40 min-h-[2.75rem] resize-none py-3 leading-snug disabled:opacity-60"
              />
            </div>

            {streaming ? (
              <IconButton
                icon={Square}
                label="Yanıtı durdur"
                variant="secondary"
                size="md"
                onClick={() => abortRef.current?.abort()}
              />
            ) : (
              <IconButton
                icon={ArrowUp}
                label="Gönder"
                variant="primary"
                size="md"
                type="submit"
                disabled={!input.trim()}
                className={cn(!input.trim() && 'opacity-45')}
              />
            )}
          </form>

          <p className="mt-2 text-2xs leading-relaxed text-ink/50">
            AI Koç yalnızca senin kayıtlarını görür ve hata yapabilir. Önemli kararlarda
            öğretmenine danış.
          </p>
        </div>
      </Card>

      {/* ---------------- Geçmiş ---------------- */}
      <Modal open={historyOpen} onClose={() => setHistoryOpen(false)} title="Sohbet geçmişi">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Button variant="secondary" size="sm" icon={MessageSquarePlus} onClick={startNewConversation}>
            Yeni sohbet
          </Button>
          {conversations.length > 0 && (
            <Button variant="ghost" size="sm" icon={Trash2} onClick={removeAllConversations}>
              Tümünü sil
            </Button>
          )}
        </div>

        {conversations.length === 0 ? (
          <EmptyState
            icon={Sparkles}
            title="Henüz sohbet yok"
            description="AI Koç’a ilk sorunu sorduğunda burada birikmeye başlar."
          />
        ) : (
          <ul className="flex flex-col divide-y divide-line">
            {conversations.map((c) => (
              <li key={c.id} className="flex items-center gap-2 py-1">
                <button
                  type="button"
                  onClick={() => openConversation(c.id)}
                  className={cn(
                    'focus-ring min-w-0 flex-1 rounded-btn px-2 py-2.5 text-left transition-colors hover:bg-ink/[0.04]',
                    c.id === conversationId && 'bg-aurora-soft'
                  )}
                >
                  <p className="truncate text-sm font-medium text-ink">{c.title || 'Adsız sohbet'}</p>
                  <p className="mt-0.5 text-xs text-ink/55">
                    {new Date(c.updated_at).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </button>
                <IconButton
                  icon={Trash2}
                  label="Sohbeti sil"
                  size="sm"
                  onClick={() => removeConversation(c.id)}
                />
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </AppShell>
  )
}

/* ================================================================== */

/** Boş sohbet ekranı — ne yapabileceğini söyleyip hazır sorular sunar. */
function WelcomeScreen({ name, onSelect }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 px-2 text-center">
      <CoachAvatar className="h-12 w-12 rounded-2xl" />

      <div className="max-w-md">
        <h2 className="font-display text-xl font-extrabold text-ink">
          {name ? `Merhaba ${name}` : 'Merhaba'}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">
          Çalışma kayıtlarını, denemelerini ve ödevlerini görebiliyorum. Ne çalışacağını
          sorabilir, program isteyebilir ya da son denemeni analiz ettirebilirsin.
        </p>
        <div className="mt-3 flex justify-center">
          <Badge tone="neutral" size="sm">
            Sadece senin verilerini görür
          </Badge>
        </div>
      </div>

      <QuickActions onSelect={onSelect} variant="grid" className="max-w-xl" />
    </div>
  )
}
