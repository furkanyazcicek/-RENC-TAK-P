import { useState } from 'react'
import { Inbox, MessageSquareQuote, ZoomIn } from 'lucide-react'
import { cn } from '../lib/cn'
import { colorForKey } from '../lib/chartTheme'
import StatusBadge from './StatusBadge'
import ImageLightbox from './ImageLightbox'
import { Card, CardBody, CardHeader, EmptyState } from './ui'

function formatDate(value) {
  return new Date(value).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * MyQuestionsList — öğrencinin gönderdiği soruların listesi.
 *
 * Yanıtlanmış sorularda öğretmenin cevabı, sorunun altında ayrı bir blok
 * olarak durur; öğrenci "cevap geldi mi" sorusunu listeye bakarak anlar.
 *
 * `bare` verilirse kendi kart çerçevesini çizmez — sayfa zaten bir Panel
 * içinde gösteriyorsa (Sorular sekmesi) bu kullanılır.
 */
export default function MyQuestionsList({
  questions,
  emptyTitle,
  emptyDescription,
  bare = false,
  title = 'Gönderdiğim sorular',
}) {
  // Katman soru ve çözümü birlikte alır: öğrenci ikisi arasında ok
  // tuşlarıyla geçebilsin, çözüme bakarken soruya dönebilsin.
  const [lightbox, setLightbox] = useState(null)

  function openLightbox(q, wanted) {
    const items = [
      q.image_url && { src: q.image_url, label: 'Sorun' },
      q.teacher_reply_image_url && { src: q.teacher_reply_image_url, label: 'Öğretmen çözümü' },
    ].filter(Boolean)
    setLightbox({ items, index: Math.max(0, items.findIndex((i) => i.src === wanted)) })
  }

  if (!questions || questions.length === 0) {
    return (
      <EmptyState
        icon={Inbox}
        title={emptyTitle ?? 'Henüz soru göndermedin'}
        description={
          emptyDescription ??
          'Çözemediğin bir soruyu gönderdiğinde, öğretmeninin yanıtıyla birlikte burada birikir.'
        }
        compact
      />
    )
  }

  const list = (
    <ul className="flex flex-col gap-3">
        {questions.map((q) => {
          const answered = Boolean(q.teacher_reply || q.teacher_reply_image_url)

          return (
            <li
              key={q.id}
              className={cn(
                'flex gap-4 rounded-card border p-4 transition-shadow',
                bare
                  ? 'border-line bg-surface shadow-card hover:shadow-card-hover'
                  : 'border-line bg-surface-muted',
                answered && 'border-success-100'
              )}
            >
              {q.image_url && (
                <button
                  type="button"
                  onClick={() => openLightbox(q, q.image_url)}
                  className="focus-ring group relative grid h-24 w-24 shrink-0 place-items-center overflow-hidden
                             rounded-xl border border-line bg-surface-muted"
                  aria-label="Soru görselini büyüt"
                >
                  {/* object-contain: küçük görselde bile sorunun tamamı görünür */}
                  <img
                    src={q.image_url}
                    alt="Soru görseli"
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors group-hover:bg-ink/25">
                    <ZoomIn className="h-4 w-4 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </button>
              )}

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    {q.subject && (
                      <span className="mb-1 inline-flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-ink/55">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: colorForKey(q.subject) }}
                          aria-hidden="true"
                        />
                        {q.subject}
                        {q.topic ? ` · ${q.topic}` : ''}
                      </span>
                    )}
                    <p className="text-sm leading-relaxed text-ink/80">
                      {q.content || 'Fotoğraf ile gönderildi'}
                    </p>
                    <p className="mt-1 text-2xs text-ink/55">{formatDate(q.created_at)}</p>
                  </div>
                  <StatusBadge status={q.status} size="sm" className="shrink-0" />
                </div>

                {answered && (
                  <div className="mt-3 rounded-xl border border-success-100 bg-success-50/60 px-3.5 py-3">
                    <p className="flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-success-700">
                      <MessageSquareQuote className="h-3.5 w-3.5" aria-hidden="true" />
                      Öğretmen Yanıtı
                    </p>
                    {q.teacher_reply && (
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/75">
                        {q.teacher_reply}
                      </p>
                    )}
                    {q.teacher_reply_image_url && (
                      <button
                        type="button"
                        onClick={() => openLightbox(q, q.teacher_reply_image_url)}
                        className="focus-ring group relative mt-2 grid h-40 w-full max-w-[16rem] place-items-center
                                   overflow-hidden rounded-lg border border-line bg-surface"
                        aria-label="Çözüm görselini büyüt"
                      >
                        <img
                          src={q.teacher_reply_image_url}
                          alt="Çözüm görseli"
                          loading="lazy"
                          className="max-h-full max-w-full object-contain transition-opacity group-hover:opacity-85"
                        />
                        <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors group-hover:bg-ink/20">
                          <ZoomIn className="h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </li>
          )
        })}
    </ul>
  )

  return (
    <>
      {bare ? (
        list
      ) : (
        <Card>
          <CardHeader title={title} description={`${questions.length} soru`} icon={MessageSquareQuote} />
          <CardBody>{list}</CardBody>
        </Card>
      )}

      {lightbox && (
        <ImageLightbox
          items={lightbox.items}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}
