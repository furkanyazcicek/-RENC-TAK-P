import { AudioLines } from 'lucide-react'
import { Inline } from './Prose'

/**
 * DERS BAŞLIĞI
 * ==================================================================
 *
 * Önceki sürümde burada koyu lacivert (#101a35) bir "hero" paneli vardı:
 * gradient şerit, ışıyan daire, büyük harf rozetler, "DrKoç ders stüdyosu"
 * yazısı. Kaldırıldı. Sebebi estetik tercih değil, tutarlılık: o panel
 * tasarım sisteminin token'larını kullanmıyordu, dersin geri kalanıyla
 * aynı dili konuşmuyordu ve tam olarak "AI landing page" hissi veriyordu
 * (§9, §55).
 *
 * Yerine bir kitabın künye sayfası geldi: ince çizgi, küçük künye satırı,
 * büyük ve sıkı başlık, öğretmenin vaadi, sonra ders başlar. Öğrenciyi
 * karşılayan şey bir panel değil, konunun adı.
 *
 * "HOCAYLA ÇALIŞ" burada devasa bir oynatıcı DEĞİL, künye satırındaki bir
 * bağlantıdır (§32). Ders deneyiminin içinde durur, üstüne çıkmaz.
 */
export default function LessonMasthead({
  lesson,
  document,
  subjectName,
  examType,
  topicName,
  hasNarration,
  narrationReady,
  onStartVoice,
}) {
  const breadcrumb = [subjectName, examType, topicName].filter(Boolean).join(' · ')
  const figureCount = document.sections.reduce(
    (total, section) => total + section.blocks.filter((block) => block.type === 'figure').length,
    0
  )
  const foundation = lesson.learning_mode === 'foundation' || lesson.learningMode === 'foundation'

  return (
    <header className="lesson-doc">
      <div className="lesson-body">
        <div className="lesson-flow">
          <div className="lesson-wide">
            {breadcrumb && <p className="lesson-eyebrow m-0">{breadcrumb}</p>}

            <p className={`m-0 mt-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] ${foundation ? 'text-aqua-700' : 'text-brand-700'}`}>
              {foundation ? '1. aşama · temel öğrenme notu' : '2. aşama · etkileşimli pekiştirme notu'}
            </p>

            <h1 className="m-0 mt-2 font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.5rem]">
              <Inline text={lesson.title} />
            </h1>

            {lesson.subtitle && (
              <p className="m-0 mt-4 max-w-[38rem] text-[1.0625rem] leading-[1.7] text-ink/65 sm:text-[1.1875rem]">
                <Inline text={lesson.subtitle} />
              </p>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-line pt-4 text-[0.875rem] text-ink/50">
              <span>{document.estimated_minutes} dakikalık ders</span>
              <span className="text-ink/20" aria-hidden="true">·</span>
              <span>{document.sections.length} bölüm</span>
              {figureCount > 0 && (
                <>
                  <span className="text-ink/20" aria-hidden="true">·</span>
                  <span>{figureCount} şekil</span>
                </>
              )}

              {hasNarration && (
                <button
                  type="button"
                  onClick={onStartVoice}
                  className="focus-ring ms-auto inline-flex items-center gap-1.5 rounded font-semibold text-brand-700 underline decoration-brand-300 decoration-2 underline-offset-4 hover:text-brand-800"
                >
                  <AudioLines className="h-4 w-4" aria-hidden="true" />
                  Hocayla Çalış
                  {!narrationReady && <span className="font-normal text-ink/40">· metin</span>}
                </button>
              )}
            </div>

            {lesson.status === 'draft' && (
              <p className="m-0 mt-4 border-s-2 border-warning-500/60 ps-3 text-[0.875rem] text-ink/55">
                Bu ders taslak. Öğrencilere henüz yayınlanmadı.
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
