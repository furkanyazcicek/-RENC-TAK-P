import { useState } from 'react'
import StatusBadge from './StatusBadge'
import ImageLightbox from './ImageLightbox'

export default function MyQuestionsList({ questions }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  if (!questions || questions.length === 0) {
    return (
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 text-sm text-ink/40">
        Henüz gönderdiğin bir soru yok.
      </div>
    )
  }

  return (
    <>
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 flex flex-col gap-4">
        <h3 className="font-display font-bold text-lg text-ink">Gönderdiğim sorular</h3>
        <ul className="flex flex-col gap-3">
          {questions.map((q) => (
            <li key={q.id} className="flex items-start gap-3 border-t border-brand-50 pt-3 first:border-0 first:pt-0">
              {q.image_url && (
                <button
                  type="button"
                  onClick={() => setLightboxSrc(q.image_url)}
                  className="focus-ring flex-shrink-0"
                  aria-label="Soru görselini büyüt"
                >
                  <img
                    src={q.image_url}
                    alt="Soru görseli"
                    className="h-14 w-14 rounded-lg object-cover hover:opacity-80 transition-opacity"
                  />
                </button>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-ink/80 line-clamp-2">{q.content || 'Fotoğraf ile gönderildi'}</p>
                <p className="text-xs text-ink/40 mt-1">
                  {new Date(q.created_at).toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                {(q.teacher_reply || q.teacher_reply_image_url) && (
                  <div className="mt-2 rounded-xl bg-brand-50 border border-brand-100 px-3 py-2 flex flex-col gap-2">
                    <p className="text-xs font-semibold text-brand-600">Öğretmen Yanıtı</p>
                    {q.teacher_reply && <p className="text-sm text-ink/70">{q.teacher_reply}</p>}
                    {q.teacher_reply_image_url && (
                      <button
                        type="button"
                        onClick={() => setLightboxSrc(q.teacher_reply_image_url)}
                        className="focus-ring w-fit"
                        aria-label="Yanıt görselini büyüt"
                      >
                        <img
                          src={q.teacher_reply_image_url}
                          alt="Yanıt görseli"
                          className="h-14 w-14 rounded-lg object-cover hover:opacity-80 transition-opacity"
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>
              <StatusBadge status={q.status} />
            </li>
          ))}
        </ul>
      </div>

      {lightboxSrc && <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </>
  )
}
