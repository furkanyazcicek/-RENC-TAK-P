import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { AlertCircle, ArrowRight, CheckCircle } from 'lucide-react'
import { AppShell, Button, EmptyState } from '../components/ui'
import LibraryReturnButton from '../components/library/LibraryReturnButton'
import QuestionCard from '../components/tests/QuestionCard'
import { useAuth } from '../context/AuthContext'
import { clearSessionActionId, useContentActivity } from '../hooks/useContentActivity.js'
import { loadQuestionSet } from '../lib/questionLibrary'
import { libraryReturnPath } from '../lib/libraryRoutes.js'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export default function TopicTestResult() {
  const { topicSlug, testId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { user, loading: authLoading } = useAuth()
  const [searchParams] = useSearchParams()
  const attemptId = searchParams.get('attempt')
  const visualPreview = import.meta.env.DEV && searchParams.get('faz3-onizleme') === 'sonuc'
  const returnTo = libraryReturnPath('questions', location.state?.returnTo)
  const [test, setTest] = useState(null)
  const [result, setResult] = useState(null)
  const [state, setState] = useState('loading')
  const [retryVersion, setRetryVersion] = useState(0)
  const { getAttempt } = useContentActivity(user?.id)

  useEffect(() => {
    if (visualPreview) {
      let active = true
      setState('loading')
      loadQuestionSet(testId, topicSlug).then((foundTest) => {
        if (!active) return
        if (!foundTest) {
          setState('not_found')
          return
        }
        const savedAnswers = foundTest.questions.map((question, index) => {
          const correctOptionId = question.correctOptionId ?? question.correctAnswer
          const wrongOptionId = question.options.find((option) => option.id !== correctOptionId)?.id
          const selectedOptionId = index < 7
            ? correctOptionId
            : index === 7
              ? wrongOptionId
              : null
          return {
            question_id: question.id,
            selected_option_id: selectedOptionId,
            correct_option_id: correctOptionId,
            is_correct: selectedOptionId == null ? null : selectedOptionId === correctOptionId,
            explanation: question.explanation ?? question.solution ?? null,
          }
        })
        setTest(foundTest)
        setResult({
          visual_preview: true,
          attempt_status: 'completed',
          source_code: foundTest.source_code,
          content_id: foundTest.content_id ?? foundTest.id,
          content_revision: foundTest.content_revision,
          question_ids: foundTest.questions.map((question) => question.id),
          total_count: foundTest.questions.length,
          correct_count: 7,
          wrong_count: 1,
          empty_count: Math.max(0, foundTest.questions.length - 8),
          accuracy: foundTest.questions.length ? 7 / foundTest.questions.length : 0,
          detail_available: true,
          answers: savedAnswers,
        })
        setState('ready')
      })
      return () => { active = false }
    }
    if (authLoading || !user?.id || !attemptId || !UUID.test(attemptId)) {
      if (!authLoading) setState('not_found')
      return
    }
    let active = true
    setState('loading')
    Promise.all([
      getAttempt(attemptId),
      loadQuestionSet(testId, topicSlug),
    ]).then(([attempt, foundTest]) => {
      if (!active) return
      if (attempt.status === 'unavailable') {
        setState('error')
        return
      }
      if (attempt.status !== 'available' || attempt.result?.attempt_status !== 'completed') {
        setState('not_found')
        return
      }
      const expectedContentId = foundTest?.content_id ?? foundTest?.id ?? testId
      if (attempt.result.content_id !== expectedContentId
        || (foundTest?.source_code && attempt.result.source_code !== foundTest.source_code)) {
        setState('not_found')
        return
      }
      setResult(attempt.result)
      setTest(foundTest)
      setState('ready')
    })
    return () => { active = false }
  }, [attemptId, authLoading, getAttempt, retryVersion, testId, topicSlug, user?.id, visualPreview])

  const answers = useMemo(
    () => Object.fromEntries((result?.answers ?? []).map((answer) => [answer.question_id, answer])),
    [result?.answers]
  )
  const successRate = result?.accuracy == null ? null : Math.round(Number(result.accuracy) * 100)
  const sameRevision = Boolean(test && result && test.content_revision === result.content_revision)
  const detailQuestionIds = result?.question_ids
  const catalogQuestionIds = new Set((test?.questions ?? []).map((question) => question.id))
  const detailsAvailable = Boolean(sameRevision && result?.detail_available !== false
    && Array.isArray(detailQuestionIds)
    && detailQuestionIds.length === catalogQuestionIds.size
    && new Set(detailQuestionIds).size === detailQuestionIds.length
    && detailQuestionIds.every((questionId) => catalogQuestionIds.has(questionId))
    && Number(result?.total_count) === detailQuestionIds.length)

  function startAgain() {
    if (user?.id && test && result) {
      clearSessionActionId(`${user.id}:${result.source_code}:${result.content_id}:${result.content_revision}:start`)
    }
    navigate(`/kutuphane/sorular/test/${topicSlug}/${testId}`, { state: { returnTo } })
  }

  if (state === 'loading' || authLoading) return <AppShell loading />

  if (state === 'error') {
    return (
      <AppShell title="Sonuç yüklenemedi">
        <EmptyState
          icon={AlertCircle}
          title="Kayıtlı sonuca şu anda ulaşılamıyor"
          description="Sunucu bağlantısı düzeldiğinde aynı denemeyi yeniden yükleyebilirsin. Puan cihazda yeniden hesaplanmaz."
          action={(
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="secondary" onClick={() => navigate(returnTo)}>Soru kütüphanesine dön</Button>
              <Button onClick={() => setRetryVersion((version) => version + 1)}>Yeniden dene</Button>
            </div>
          )}
        />
      </AppShell>
    )
  }

  if (state === 'not_found' || !result) {
    return (
      <AppShell title="Sonuç bulunamadı">
        <EmptyState
          icon={AlertCircle}
          title="Kayıtlı sonuç açılamadı"
          description="Sonuç yalnız tamamlanmış ve bu hesaba ait sunucu girişiminden gösterilir."
          action={<Button onClick={() => navigate(returnTo)}>Soru kütüphanesine dön</Button>}
        />
      </AppShell>
    )
  }

  return (
    <AppShell
      title={test ? `${test.title} Sonucu` : 'Test Sonucu'}
      headerAction={<LibraryReturnButton kind="questions" onClick={() => navigate(returnTo)} />}
    >
      <main className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        {result.visual_preview ? (
          <p className="mb-6 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-left text-sm text-brand-900" role="status">
            Sonuç ekranı görsel doğrulama örneği; canlı girişim veya öğrenci verisi kullanılmaz.
          </p>
        ) : null}
        <section className="mb-12 text-center" aria-labelledby="result-title">
          <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-brand/10 text-brand sm:h-24 sm:w-24">
            <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden="true" />
          </div>
          <h1 id="result-title" className="mb-2 text-2xl font-bold sm:text-3xl">Test tamamlandı</h1>
          <p className="mx-auto mb-8 max-w-xl text-base text-muted sm:text-lg">
            Aşağıdaki sayılar sabitlenmiş içerik sürümündeki cevap anahtarından sunucuda hesaplandı.
          </p>

          <dl className="mb-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {[
              ['Doğru', result.correct_count, 'text-success'],
              ['Yanlış', result.wrong_count, 'text-danger'],
              ['Boş', result.empty_count, 'text-ink/50'],
              ['Başarı', successRate == null ? '—' : `%${successRate}`, 'text-brand'],
            ].map(([label, value, tone]) => (
              <div key={label} className="bg-surface px-4 py-5 sm:p-6">
                <dt className="mb-1 text-sm text-muted">{label}</dt>
                <dd className={`m-0 text-3xl font-bold tabular-nums ${tone}`}>{value}</dd>
              </div>
            ))}
          </dl>

          {successRate != null && successRate < 70 && (
            <div className="mb-8 rounded-xl border border-warning-500/25 bg-warning-50 p-4 text-left text-ink">
              <p className="m-0 font-semibold">Bir kısa tekrar iyi gelebilir</p>
              <p className="mb-0 mt-1 text-sm text-ink/70">
                Yanlış kalan kavramların çözüm açıklamalarına bakıp sonra yeni bir girişim başlatabilirsin.
              </p>
            </div>
          )}

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="secondary" size="lg" onClick={() => navigate(returnTo)}>
              Konu sayfasına dön
            </Button>
            <Button variant="primary" size="lg" iconRight={ArrowRight} onClick={startAgain}>
              Yeniden çöz
            </Button>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="answer-details-title">
          <h2 id="answer-details-title" className="mb-6 text-xl font-bold sm:text-2xl">Soru detayları</h2>
          {!detailsAvailable ? (
            <div className="rounded-xl border border-line bg-surface p-5">
              <p className="m-0 font-semibold">Bu sürümün soru ayrıntısı artık cihazda yok</p>
              <p className="mb-0 mt-1 text-sm leading-relaxed text-muted">
                Kayıtlı puanın değişmedi. Güncel cevap anahtarıyla eski girişim yeniden puanlanmadı.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {test.questions.map((question, index) => {
                const savedAnswer = answers[question.id]
                return (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    index={index}
                    selectedOptionId={savedAnswer?.selected_option_id}
                    disabled
                    showCorrect={Boolean(savedAnswer?.correct_option_id)}
                    correctOptionId={savedAnswer?.correct_option_id}
                    explanation={savedAnswer?.explanation}
                  />
                )
              })}
            </div>
          )}
        </section>
      </main>
    </AppShell>
  )
}
