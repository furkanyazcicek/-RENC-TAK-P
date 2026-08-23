import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  ImageOff,
  MessageSquareQuote,
  ZoomIn,
} from 'lucide-react'
import { cn } from '../lib/cn'
import { colorForKey } from '../lib/chartTheme'
import ImageLightbox from './ImageLightbox'
import StatusBadge from './StatusBadge'
import { EmptyState } from './ui'

/**
 * QuestionFeed — gönderilen soruların "post" gibi kaydırılan akışı.
 *
 * Her kart tek bir soruyu gösterir ve İKİ görseli yan yana koyar:
 * solda öğrencinin sorusu, sağda öğretmenin çözümü. Amaç, listede
 * küçücük küçük resimlerle uğraşmadan soruyu ve çözümü aynı anda,
 * büyük görmek — sınav öncesi tekrarda en çok işe yarayan görünüm bu.
 *
 * Görseller `object-contain` ile yerleştirilir, ASLA kırpılmaz: bir soru
 * fotoğrafının kenarını kesmek, sorunun bir kısmını yok etmek demektir.
 * Fotoğrafa dokununca yakınlaştırılabilir katman (ImageLightbox) açılır
 * ve ok tuşlarıyla soru ↔ çözüm arasında geçilebilir.
 *
 * Kaydırma yatay `scroll-snap` ile yapılır; dokunmatikte parmakla,
 * masaüstünde yanlardaki oklarla veya alttaki noktalarla.
 */
export default function QuestionFeed({ questions = [], className }) {
  const scrollerRef = useRef(null)
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(null) // { items, index }

  const handleScroll = useCallback(() => {
    const node = scrollerRef.current
    if (!node) return
    const center = node.scrollLeft + node.clientWidth / 2
    let nearest = 0
    let best = Infinity
    Array.from(node.children).forEach((child, i) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2
      const d = Math.abs(childCenter - center)
      if (d < best) {
        best = d
        nearest = i
      }
    })
    setActive(nearest)
  }, [])

  useEffect(() => {
    const node = scrollerRef.current
    if (!node) return undefined
    node.addEventListener('scroll', handleScroll, { passive: true })
    return () => node.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  function goTo(i) {
    const node = scrollerRef.current
    if (!node) return
    const child = node.children[Math.max(0, Math.min(i, node.children.length - 1))]
    if (child) node.scrollTo({ left: child.offsetLeft - node.offsetLeft, behavior: 'smooth' })
  }

  if (!questions.length) {
    return (
      <EmptyState
        icon={MessageSquareQuote}
        title="Henüz soru göndermedin"
        description="Çözemediğin bir soruyu gönderdiğinde, öğretmeninin çözümüyle yan yana burada birikir."
        compact
        className={className}
      />
    )
  }

  return (
    <div className={cn('relative', className)}>
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {questions.map((q) => (
          <QuestionSlide key={q.id} question={q} onOpen={setLightbox} />
        ))}
      </div>

      {questions.length > 1 && (
        <>
          <FeedArrow side="left" onClick={() => goTo(active - 1)} disabled={active === 0} />
          <FeedArrow
            side="right"
            onClick={() => goTo(active + 1)}
            disabled={active === questions.length - 1}
          />

          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
            {questions.map((q, i) => (
              <button
                key={q.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${i + 1}. soruya git`}
                aria-current={i === active ? 'true' : undefined}
                className={cn(
                  'focus-ring h-1.5 rounded-full transition-all duration-200',
                  i === active ? 'w-6 bg-aurora-line' : 'w-1.5 bg-ink/15 hover:bg-ink/30'
                )}
              />
            ))}
          </div>
        </>
      )}

      {lightbox && (
        <ImageLightbox
          items={lightbox.items}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}

/**
 * Çözüm bölmesinin alt yazısı. Durum ile içerik uyuşmayabilir: öğretmen
 * soruyu "Çözüldü" ya da "Derste Çözülecek" işaretleyip yazılı/görsel
 * yanıt bırakmamış olabilir. O zaman "çözüm henüz gelmedi" demek yanlış
 * olur — soru gerçekten ele alınmıştır, sadece burada kaydı yoktur.
 */
function solutionHint(q, answered) {
  if (answered) return 'Öğretmenin yazılı yanıt bıraktı.'
  if (q.status === 'Çözüldü') return 'Çözüldü olarak işaretlendi; buraya görsel eklenmemiş.'
  if (q.status === 'Derste Çözülecek') return 'Öğretmenin bu soruyu derste çözecek.'
  return 'Öğretmenin çözümü henüz gelmedi.'
}

function QuestionSlide({ question: q, onOpen }) {
  const answered = Boolean(q.teacher_reply || q.teacher_reply_image_url)

  // Katmanda gezilebilecek görseller — yalnızca gerçekten var olanlar.
  const items = [
    q.image_url && { src: q.image_url, label: 'Sorun' },
    q.teacher_reply_image_url && { src: q.teacher_reply_image_url, label: 'Öğretmen çözümü' },
  ].filter(Boolean)

  function open(src) {
    const index = Math.max(0, items.findIndex((i) => i.src === src))
    onOpen({ items, index })
  }

  return (
    <article
      className="w-[min(100%,44rem)] shrink-0 snap-center overflow-hidden rounded-card border border-line
                 bg-surface shadow-card"
    >
      {/* ---------- Başlık ---------- */}
      <header className="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
        <div className="min-w-0">
          {q.subject && (
            <span className="inline-flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-ink/55">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: colorForKey(q.subject) }}
                aria-hidden="true"
              />
              {q.subject}
              {q.topic ? ` · ${q.topic}` : ''}
            </span>
          )}
          <p className="truncate text-sm font-semibold text-ink">
            {q.content || 'Fotoğraf ile gönderildi'}
          </p>
          <p className="text-2xs text-ink/55">
            {new Date(q.created_at).toLocaleDateString('tr-TR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
        <StatusBadge status={q.status} size="sm" className="shrink-0" />
      </header>

      {/* ---------- İkili görsel ---------- */}
      <div className="grid grid-cols-2 divide-x divide-line">
        <Pane
          label="Sorun"
          src={q.image_url}
          fallbackText={q.content}
          fallbackHint="Bu soru fotoğrafsız gönderildi."
          onOpen={open}
        />
        <Pane
          label="Öğretmen çözümü"
          tone="success"
          src={q.teacher_reply_image_url}
          fallbackText={answered ? q.teacher_reply : null}
          fallbackHint={solutionHint(q, answered)}
          pending={!answered}
          onOpen={open}
        />
      </div>

      {/* ---------- Yazılı yanıt ---------- */}
      {answered && q.teacher_reply && (
        <div className="border-t border-line bg-success-50/50 px-4 py-3">
          <p className="flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-success-700">
            <MessageSquareQuote className="h-3.5 w-3.5" aria-hidden="true" />
            Öğretmen yanıtı
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink/75">{q.teacher_reply}</p>
        </div>
      )}
    </article>
  )
}

function Pane({ label, src, fallbackText, fallbackHint, pending = false, tone, onOpen }) {
  return (
    <div className="flex min-w-0 flex-col">
      <p
        className={cn(
          'px-3 pt-2.5 text-2xs font-bold uppercase tracking-wider',
          tone === 'success' ? 'text-success-700' : 'text-ink/55'
        )}
      >
        {label}
      </p>

      {src ? (
        <button
          type="button"
          onClick={() => onOpen(src)}
          className="focus-ring group relative m-2 grid h-[15rem] place-items-center overflow-hidden
                     rounded-xl border border-line bg-surface-muted sm:h-[20rem] lg:h-[24rem]"
          aria-label={`${label} — büyüt ve yakınlaştır`}
        >
          {/* object-contain: fotoğrafın hiçbir kenarı kırpılmaz */}
          <img
            src={src}
            alt={label}
            loading="lazy"
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors group-hover:bg-ink/20">
            <span
              className="grid h-10 w-10 place-items-center rounded-full bg-white/90 opacity-0 shadow-card
                         transition-opacity duration-200 group-hover:opacity-100"
            >
              <ZoomIn className="h-5 w-5 text-ink" strokeWidth={2.2} aria-hidden="true" />
            </span>
          </span>
        </button>
      ) : (
        <div
          className="m-2 flex h-[15rem] flex-col items-center justify-center gap-2 rounded-xl border
                     border-dashed border-line bg-surface-muted px-3 text-center sm:h-[20rem] lg:h-[24rem]"
        >
          {pending ? (
            <Clock3 className="h-6 w-6 text-ink/30" strokeWidth={1.8} aria-hidden="true" />
          ) : (
            <ImageOff className="h-6 w-6 text-ink/30" strokeWidth={1.8} aria-hidden="true" />
          )}
          {fallbackText && (
            <p className="line-clamp-6 text-sm leading-relaxed text-ink/70">{fallbackText}</p>
          )}
          <p className="text-2xs text-ink/50">{fallbackHint}</p>
        </div>
      )}
    </div>
  )
}

function FeedArrow({ side, onClick, disabled }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={side === 'left' ? 'Önceki soru' : 'Sonraki soru'}
      className={cn(
        'focus-ring absolute top-[45%] hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full',
        'border border-line bg-surface/90 text-ink/70 shadow-card backdrop-blur-sm transition-all',
        'hover:border-brand-200 hover:text-brand-600 disabled:opacity-0 sm:grid',
        side === 'left' ? '-left-3' : '-right-3'
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
    </button>
  )
}
