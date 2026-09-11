import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, RotateCcw, TestTube2 } from 'lucide-react'
import QuestionCard from '../../components/tests/QuestionCard'
import { Badge, Button, EmptyState } from '../../components/ui'
import { cn } from '../../lib/cn'
import { experienceContentById, normalizeExperienceQuestion } from './experienceData'

export default function ExperienceTest() {
  const { contentId } = useParams()
  const content = experienceContentById(contentId)
  const questions = useMemo(
    () => (content?.test?.questions ?? []).map(normalizeExperienceQuestion),
    [content]
  )
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const resultRef = useRef(null)

  useEffect(() => {
    setIndex(0)
    setAnswers({})
    setSubmitted(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [contentId])

  const result = useMemo(() => {
    const correct = questions.filter((question) => answers[question.id] === question.correctOptionId).length
    const answered = questions.filter((question) => Boolean(answers[question.id])).length
    return { correct, answered, blank: questions.length - answered }
  }, [answers, questions])

  useEffect(() => {
    if (submitted) resultRef.current?.focus()
  }, [submitted])

  if (!content || !questions.length) {
    return (
      <EmptyState
        icon={TestTube2}
        title="Bu test bulunamadı"
        description="Soru kütüphanesindeki dört hazır testten birini açabilirsin."
        action={<Button as={Link} to="/deneyim/soru-kutuphanesi">Soru kütüphanesine dön</Button>}
      />
    )
  }

  const question = questions[index]
  const selectedOptionId = answers[question.id]

  function selectOption(optionId) {
    if (submitted) return
    setAnswers((current) => ({ ...current, [question.id]: optionId }))
  }

  function reset() {
    setIndex(0)
    setAnswers({})
    setSubmitted(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button as={Link} to="/deneyim/soru-kutuphanesi" variant="ghost" size="sm" icon={ArrowLeft}>Soru kütüphanesine dön</Button>
        <Badge tone={content.subject === 'Kimya' ? 'aqua' : 'accent'}>{content.subjectCode} · {content.topic}</Badge>
      </div>

      <section className="panel-editorial-sheet overflow-hidden">
        <header className="border-b border-line px-5 py-5 sm:px-7 sm:py-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-brand-700">Kavrama testi</p>
              <h1 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{content.topic}</h1>
              <p className="mt-1 text-sm text-ink/58">{content.test.title} · {questions.length} soru</p>
            </div>
            <div className="min-w-36 text-right">
              <p className="text-xs font-bold text-ink/48">Yanıtlanan</p>
              <p className="mt-1 font-display text-2xl font-extrabold tabular text-ink">{result.answered}<span className="text-base text-ink/40"> / {questions.length}</span></p>
            </div>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-surface-sunken" aria-label={`Testin yüzde ${Math.round((result.answered / questions.length) * 100)} kadarı yanıtlandı`}>
            <span className="block h-full rounded-full bg-aurora-gradient transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${(result.answered / questions.length) * 100}%` }} />
          </div>
        </header>

        <nav className="flex gap-2 overflow-x-auto border-b border-line px-5 py-3 sm:px-7" aria-label="Test soruları">
          {questions.map((item, questionIndex) => {
            const selected = Boolean(answers[item.id])
            const correct = submitted && answers[item.id] === item.correctOptionId
            const wrong = submitted && selected && !correct
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(questionIndex)}
                aria-current={index === questionIndex ? 'step' : undefined}
                aria-label={`${questionIndex + 1}. soru${selected ? ', yanıtlandı' : ''}`}
                className={cn(
                  'focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full border text-xs font-extrabold transition-colors',
                  index === questionIndex && !submitted && 'border-brand-500 bg-brand-500 text-white',
                  index !== questionIndex && selected && !submitted && 'border-brand-200 bg-brand-50 text-brand-700',
                  index !== questionIndex && !selected && !submitted && 'border-line bg-white text-ink/50 hover:border-brand-300',
                  submitted && correct && 'border-success-500 bg-success-50 text-success-700',
                  submitted && wrong && 'border-danger-500 bg-danger-50 text-danger-700',
                  submitted && !selected && 'border-line bg-surface-muted text-ink/38'
                )}
              >
                {questionIndex + 1}
              </button>
            )
          })}
        </nav>

        <div className="p-4 sm:p-6 lg:p-7">
          {submitted && (
            <div ref={resultRef} tabIndex={-1} className="mb-5 rounded-2xl border border-success-200 bg-success-50/65 p-5 focus:outline-none sm:p-6" aria-live="polite">
              <div className="flex flex-wrap items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-success-600 text-white"><CheckCircle2 className="h-6 w-6" /></span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-success-700">Test tamamlandı</p>
                  <h2 className="mt-1 font-display text-2xl font-extrabold text-ink">{result.correct} doğru · {result.answered - result.correct} yanlış · {result.blank} boş</h2>
                </div>
                <Button variant="secondary" size="sm" icon={RotateCcw} onClick={reset}>Yeniden çöz</Button>
              </div>
            </div>
          )}

          <QuestionCard
            question={question}
            index={index}
            selectedOptionId={selectedOptionId}
            onSelectOption={selectOption}
            disabled={submitted}
            showCorrect={submitted}
            correctOptionId={question.correctOptionId}
            explanation={question.explanation}
          />

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <Button variant="secondary" icon={ChevronLeft} disabled={index === 0} onClick={() => setIndex((current) => Math.max(0, current - 1))}>Önceki</Button>
            <p className="order-first w-full text-center text-xs font-semibold text-ink/48 sm:order-none sm:w-auto">Soru {index + 1} / {questions.length}</p>
            {index < questions.length - 1 ? (
              <Button iconRight={ChevronRight} onClick={() => setIndex((current) => Math.min(questions.length - 1, current + 1))}>Sonraki</Button>
            ) : (
              <Button icon={CheckCircle2} disabled={!result.answered || submitted} onClick={() => setSubmitted(true)}>Testi tamamla</Button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
