import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { AlertCircle, RotateCcw } from 'lucide-react'
import { AppShell, Button, EmptyState } from '../components/ui'
import LibraryReturnButton from '../components/library/LibraryReturnButton'
import QuestionCard from '../components/tests/QuestionCard'
import SaveStatus from '../components/learning/SaveStatus'
import { useAuth } from '../context/AuthContext'
import { ACTION_STATUS, isSuccessfulActionResult } from '../lib/learning/contentActivity/outbox.js'
import { createClientActionId, sessionActionId, useContentActivity } from '../hooks/useContentActivity.js'
import { loadQuestionSet } from '../lib/questionLibrary'
import { libraryReturnPath } from '../lib/libraryRoutes.js'

const DIFFICULTY_LABELS = {
  very_easy: 'Çok Kolay',
  easy: 'Kolay',
  medium: 'Orta',
  hard: 'Zor',
}

const SOURCE_ACTIONS = {
  db_question_test: {
    start: 'db_question_start',
    answer: 'db_question_answer',
    finalize: 'db_question_finalize',
  },
  bundled_question_test: {
    start: 'bundled_question_start',
    answer: 'bundled_question_answer',
    finalize: 'bundled_question_finalize',
  },
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function hasPinnedQuestionSet(saved, test) {
  const questionIds = saved?.question_ids
  const catalogIds = new Set((test?.questions ?? []).map((question) => question.id))
  return Array.isArray(questionIds)
    && questionIds.length === catalogIds.size
    && new Set(questionIds).size === questionIds.length
    && questionIds.every((questionId) => catalogIds.has(questionId))
    && Number(saved?.total_count) === questionIds.length
}

export default function TopicTestSolve() {
  const { topicSlug, testId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { user, role, loading: authLoading } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams()
  const attemptParam = searchParams.get('attempt')
  const visualPreviewMode = import.meta.env.DEV ? searchParams.get('faz3-onizleme') : null
  const visualPreview = visualPreviewMode === 'coz' || visualPreviewMode === 'ag-hatasi'
  const visualNetworkError = visualPreviewMode === 'ag-hatasi'
  const returnTo = libraryReturnPath('questions', location.state?.returnTo)
  const [test, setTest] = useState(null)
  const [loadState, setLoadState] = useState('loading')
  const [attemptId, setAttemptId] = useState(null)
  const [attemptState, setAttemptState] = useState('opening')
  const [answers, setAnswers] = useState({})
  const [isFinishing, setIsFinishing] = useState(false)
  const [message, setMessage] = useState('')
  const [openVersion, setOpenVersion] = useState(0)
  const startKeyRef = useRef(null)
  const answerQueueRef = useRef(Promise.resolve())
  const finishingRef = useRef(false)
  const retryingRef = useRef(false)
  const { client, status, perform, flush, pending, getAttempt } = useContentActivity(user?.id)

  useEffect(() => {
    let active = true
    setLoadState('loading')
    loadQuestionSet(testId, topicSlug).then((foundTest) => {
      if (!active) return
      setTest(foundTest)
      setLoadState(foundTest ? 'ready' : 'not_found')
    })
    return () => { active = false }
  }, [topicSlug, testId])

  const sourceActions = SOURCE_ACTIONS[test?.source_code]
  const contentId = test?.content_id ?? test?.id
  const contentRevision = test?.content_revision

  useEffect(() => {
    if (authLoading || !test || !contentRevision) return
    if (visualPreview) {
      setAttemptId('00000000-0000-4000-8000-000000000319')
      setAttemptState('ready')
      setAnswers({})
      setMessage(visualNetworkError
        ? 'Seçimin bu cihazda korunuyor; bağlantı geldiğinde yeniden gönderilecek.'
        : '')
      return
    }
    if (!sourceActions) {
      setAttemptId(null)
      setAttemptState('error')
      setMessage('Bu testin kayıt kaynağı doğrulanamadı.')
      return
    }
    if (role !== 'student' || !user?.id) {
      setAttemptId(null)
      setAttemptState('error')
      setMessage('Bu testin kayıtlı çözüm alanı öğrenci hesabıyla kullanılabilir.')
      return
    }
    if (!client) {
      setAttemptId(null)
      setAttemptState('error')
      setMessage('Kayıt servisi hazırlanamadı. Biraz sonra yeniden deneyebilirsin.')
      return
    }
    const startKey = `${user.id}:${test.source_code}:${contentId}:${contentRevision}:${attemptParam ?? 'new'}:${openVersion}`
    if (startKeyRef.current === startKey) return
    startKeyRef.current = startKey
    let active = true
    setAttemptId(null)
    setAttemptState('opening')
    setAnswers({})
    setMessage('')

    async function openAttempt() {
      if (attemptParam) {
        if (!UUID.test(attemptParam)) {
          setAttemptState('error')
          setMessage('Deneme bağlantısı geçersiz. Yeni bir girişim başlatabilirsin.')
          return
        }
        const response = await getAttempt(attemptParam)
        if (!active) return
        const saved = response.result
        if (response.status !== 'available' || !saved
          || saved.source_code !== test.source_code
          || saved.content_id !== contentId
          || saved.content_revision !== contentRevision
          || !hasPinnedQuestionSet(saved, test)) {
          setAttemptState('error')
          setMessage('Bu çözüm kaydı açılamadı. Yeni bir girişim başlatabilirsin.')
          return
        }
        if (saved.attempt_status === 'completed') {
          navigate(`/kutuphane/sorular/test/${topicSlug}/${testId}/result?attempt=${attemptParam}`, {
            replace: true,
            state: { returnTo },
          })
          return
        }
        const validIds = new Set(test.questions.map((question) => question.id))
        const restored = Object.fromEntries((saved.answers ?? [])
          .filter((item) => validIds.has(item.question_id))
          .map((item) => [item.question_id, item.selected_option_id]))
        for (const action of pending()) {
          if (action.type === sourceActions.answer
            && action.payload?.attempt_id === attemptParam
            && validIds.has(action.payload?.question_id)) {
            restored[action.payload.question_id] = action.payload.selected_option_id
          }
        }
        setAttemptId(attemptParam)
        setAttemptState('ready')
        setAnswers(restored)
        setMessage('')
        return
      }

      const actionId = sessionActionId(`${user.id}:${test.source_code}:${contentId}:${contentRevision}:start`)
      const outcome = await perform(sourceActions.start, {
        content_id: contentId,
        content_revision: contentRevision,
      }, { actionId })
      if (!active) return
      if (isSuccessfulActionResult(outcome.result)
        && outcome.result?.attempt_id
        && outcome.result.content_id === contentId
        && outcome.result.content_revision === contentRevision
        && hasPinnedQuestionSet(outcome.result, test)) {
        setAttemptId(outcome.result.attempt_id)
        setAttemptState('ready')
        const next = new URLSearchParams(searchParams)
        next.set('attempt', outcome.result.attempt_id)
        setSearchParams(next, { replace: true })
        setMessage('')
      } else {
        setAttemptState('error')
        setMessage(outcome.result?.status === 'content_revision_mismatch'
          ? 'Test güncellendi. Sayfayı yenileyip güncel sürümle yeniden başla.'
          : 'Kayıt servisi hazır olmadığı için test henüz başlatılamadı.')
      }
    }

    void openAttempt()
    return () => { active = false }
  }, [attemptParam, authLoading, client, contentId, contentRevision, getAttempt,
    navigate, openVersion, pending, perform, returnTo, role, searchParams,
    setSearchParams, sourceActions, test, testId, topicSlug, user?.id,
    visualNetworkError, visualPreview])

  const answeredCount = Object.keys(answers).length
  const totalCount = test?.questions?.length ?? 0
  const canAnswer = Boolean(attemptState === 'ready' && attemptId && sourceActions
    && (role === 'student' || visualPreview) && !isFinishing)
  const difficulty = useMemo(
    () => DIFFICULTY_LABELS[test?.questions?.[0]?.difficulty] || 'Kavrama',
    [test?.questions]
  )

  async function handleSelect(questionId, optionId) {
    if (!canAnswer || finishingRef.current) return
    setAnswers((previous) => ({ ...previous, [questionId]: optionId }))
    if (visualPreview) {
      setMessage(visualNetworkError
        ? 'Seçimin bu cihazda korunuyor; bağlantı geldiğinde yeniden gönderilecek.'
        : '')
      return
    }
    setMessage('')
    const actionId = createClientActionId()
    const queued = answerQueueRef.current.catch(() => null).then(() => perform(sourceActions.answer, {
      attempt_id: attemptId,
      question_id: questionId,
      selected_option_id: optionId,
    }, { actionId }))
    answerQueueRef.current = queued.then(() => undefined, () => undefined)
    const outcome = await queued
    if ([ACTION_STATUS.conflict, ACTION_STATUS.unavailable, ACTION_STATUS.protected_local].includes(outcome.status)) {
      setMessage(outcome.status === ACTION_STATUS.conflict
        ? 'Bu seçim başka bir kayıtla çakıştı. Kayıtlı girişim yeniden yüklenmeli.'
        : 'Seçimin bu cihazda korunuyor; bağlantı geldiğinde yeniden gönderilecek.')
    }
  }

  async function handleFinish() {
    if (!canAnswer || finishingRef.current) return
    if (visualPreview) {
      if (visualNetworkError) {
        setMessage('Bekleyen cevapların henüz sunucuya ulaşmadı. Seçimlerin bu cihazda korunuyor.')
        return
      }
      navigate(`/kutuphane/sorular/test/${topicSlug}/${testId}/result?capture=reels&faz3-onizleme=sonuc`, {
        state: { returnTo },
      })
      return
    }
    finishingRef.current = true
    setIsFinishing(true)
    setMessage('')
    try {
      // Seçimler outbox'a geliş sırasıyla yazılır; final isteği son
      // hızlı tıklamanın kuyruğa eklenmesini ve flush edilmesini bekler.
      await answerQueueRef.current
      await flush()
      const waiting = pending().filter((item) =>
        item.type === sourceActions.answer && item.payload?.attempt_id === attemptId)
      if (waiting.length > 0) {
        setMessage('Bekleyen cevapların henüz sunucuya ulaşmadı. Seçimlerin bu cihazda korunuyor.')
        return
      }

      const beforeFinalize = await getAttempt(attemptId)
      if (beforeFinalize.result?.attempt_status === 'completed') {
        navigate(`/kutuphane/sorular/test/${topicSlug}/${testId}/result?attempt=${attemptId}`, {
          state: { returnTo },
        })
        return
      }

      const outcome = await perform(sourceActions.finalize, { attempt_id: attemptId }, {
        actionId: sessionActionId(`${user.id}:${test.source_code}:${attemptId}:finalize`),
      })
      if (outcome.result?.attempt_status === 'completed') {
        navigate(`/kutuphane/sorular/test/${topicSlug}/${testId}/result?attempt=${attemptId}`, {
          state: { returnTo },
        })
        return
      }
      setMessage('Test henüz tamamlanamadı. Cevapların korunuyor; yeniden deneyebilirsin.')
    } finally {
      finishingRef.current = false
      setIsFinishing(false)
    }
  }

  async function retryPending() {
    if (retryingRef.current || role !== 'student') return
    retryingRef.current = true
    setMessage('')
    try {
      const flushTask = answerQueueRef.current.catch(() => null).then(() => flush())
      answerQueueRef.current = flushTask.then(() => undefined, () => undefined)
      await flushTask
      if (!attemptId) {
        startKeyRef.current = null
        setOpenVersion((version) => version + 1)
        return
      }
      const refreshed = await getAttempt(attemptId)
      if (refreshed.result?.attempt_status === 'completed') {
        navigate(`/kutuphane/sorular/test/${topicSlug}/${testId}/result?attempt=${attemptId}`, {
          state: { returnTo },
        })
        return
      }
      const waiting = pending().some((item) => (
        item.payload?.attempt_id === attemptId
        && [sourceActions.answer, sourceActions.finalize].includes(item.type)
      ))
      setMessage(waiting ? 'Bazı kayıtlar hâlâ bekliyor; bu cihazda korunuyor.' : '')
    } finally {
      retryingRef.current = false
    }
  }

  if (loadState === 'loading' || authLoading) return <AppShell loading />

  if (loadState === 'not_found' || !test) {
    return (
      <AppShell title="Test açılamadı">
        <EmptyState
          icon={AlertCircle}
          title="Bu test güvenli biçimde açılamıyor"
          description="İçerik kimliği veya cevap anahtarı doğrulanamadı. Başka bir test seçebilirsin."
          action={<Button onClick={() => navigate(returnTo)}>Soru kütüphanesine dön</Button>}
        />
      </AppShell>
    )
  }

  return (
    <AppShell
      title={test.title}
      subtitle={test.description}
      headerAction={<LibraryReturnButton kind="questions" onClick={() => navigate(returnTo)} />}
    >
      <main className="mx-auto max-w-3xl px-4 py-6 sm:py-8">
        <header className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-1 text-sm text-muted">{test.subject ?? 'Soru Kütüphanesi'} · {test.topic ?? topicSlug}</p>
            <h1 className="m-0 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{test.title}</h1>
            {test.description && <p className="mt-1 text-muted">{test.description}</p>}
          </div>
          <div className="flex min-h-11 items-center gap-3 rounded-xl border border-line bg-surface px-4 py-2">
            <span className="text-sm text-muted">Çözülen: <strong className="text-foreground">{answeredCount}</strong> / {totalCount}</span>
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            <span className="text-sm font-medium text-brand">{difficulty}</span>
          </div>
        </header>

        {message && (
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-warning-500/25 bg-warning-50 p-4 text-sm text-ink" role="alert">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-warning-700" aria-hidden="true" />
            <p className="m-0 flex-1">{message}</p>
          </div>
        )}

        {attemptState === 'opening' && (
          <div className="mb-6 rounded-xl border border-line bg-surface p-4 text-sm text-muted" role="status">
            Kayıtlı deneme hazırlanıyor…
          </div>
        )}

        {visualPreview && !visualNetworkError ? (
          <p className="mb-6 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-900" role="status">
            Soru çözme görsel doğrulama örneği; canlı girişim veya öğrenci verisi kullanılmaz.
          </p>
        ) : null}

        <div className="mb-12 flex flex-col gap-8" aria-busy={attemptState === 'opening'}>
          {test.questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              selectedOptionId={answers[question.id]}
              onSelectOption={(optionId) => void handleSelect(question.id, optionId)}
              disabled={!canAnswer}
            />
          ))}
        </div>

        <div className="sticky bottom-3 z-10 flex flex-col items-center justify-between gap-3 rounded-2xl border border-line bg-background/95 p-3 shadow-xl backdrop-blur-md sm:bottom-6 sm:flex-row sm:p-4">
          <SaveStatus
            status={visualNetworkError ? ACTION_STATUS.retrying : status}
            onRetry={visualPreview
              ? () => setMessage('Bağlantı hâlâ yok; seçimin bu cihazda korunuyor.')
              : () => void retryPending()}
            className="[&_button]:min-h-11"
          />
          <Button
            onClick={() => void handleFinish()}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto sm:min-w-[220px]"
            loading={isFinishing}
            disabled={!canAnswer}
          >
            {answeredCount === totalCount ? 'Testi Bitir ve Sonucu Gör' : 'Testi Bitir'}
          </Button>
        </div>

        {attemptState === 'error' && role === 'student' && (
          <div className="mt-4 flex justify-center">
            <Button variant="ghost" size="md" icon={RotateCcw} onClick={() => void retryPending()}>
              Yeniden dene
            </Button>
          </div>
        )}
      </main>
    </AppShell>
  )
}
