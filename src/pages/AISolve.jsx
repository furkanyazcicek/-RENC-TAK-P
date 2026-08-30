import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  Camera,
  ClipboardCheck,
  History,
  ImageOff,
  Sparkles,
  TriangleAlert,
} from 'lucide-react'

import { useAuth } from '../context/AuthContext'
import {
  AISolveError,
  askAlternative,
  askStuck,
  askWhy,
  getSolution,
  listSolutions,
  reportSelfResult,
  sendFeedback,
  solveQuestion,
} from '../lib/aiSolve'
import { ImageError, publicUrlFor, uploadQuestionImage } from '../lib/whiteboard/imagePrep'
import {
  AppShell,
  Alert,
  Badge,
  Button,
  Card,
  CardBody,
  EmptyState,
  IconButton,
  Modal,
  PageSection,
  useToast,
} from '../components/ui'
import ImageLightbox from '../components/ImageLightbox'
import QuestionUploader, { SolveStages } from '../components/aiSolve/QuestionUploader'
import Whiteboard from '../components/aiSolve/Whiteboard'
import CheckWorkPanel from '../components/aiSolve/CheckWorkPanel'
import {
  AlternativePanel,
  AnalysisCard,
  AnswerCard,
  FeedbackBar,
  SelfReportBar,
  SolutionMeta,
  StudentHelpCard,
  WrongChoicesCard,
} from '../components/aiSolve/SolutionPanels'
import { MathText } from '../components/aiSolve/MathRenderer'
import { buildAISolveCaptureResult, isProductCapture } from '../lib/productCapture'

/**
 * AISolve — /soru-coz
 *
 * AI Soru Çözüm Merkezi'nin tek sayfası. Dört durumu var:
 *
 *   idle    → soru yükleme ekranı
 *   solving → gerçek aşamaların akışı (§40)
 *   result  → tahta + bilgi kartları
 *   (hata)  → okunamadı / çözülemedi / teknik hata
 *
 * Sayfa AppShell üzerine kurulu; Aurora zemin, sidebar, mobil alt
 * gezinme ve genişlik oradan geliyor (DESIGN_SYSTEM.md §7).
 */

export default function AISolve() {
  const { user } = useAuth()
  const toast = useToast()
  const captureMode = isProductCapture()

  const [phase, setPhase] = useState(() => (captureMode ? 'result' : 'idle')) // idle | solving | result
  const [stages, setStages] = useState([])
  const [currentStage, setCurrentStage] = useState(null)
  const [result, setResult] = useState(() =>
    captureMode ? buildAISolveCaptureResult() : null
  )
  const [error, setError] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const [helpState, setHelpState] = useState(null)
  const [alternative, setAlternative] = useState(null)
  const [showCheck, setShowCheck] = useState(false)
  const [lightbox, setLightbox] = useState(false)

  const [historyOpen, setHistoryOpen] = useState(false)
  const [history, setHistory] = useState([])
  const [historyLoading, setHistoryLoading] = useState(false)

  const abortRef = useRef(null)

  // Sekme kapanırsa/başka sayfaya geçilirse akan isteği iptal et —
  // sunucu Gemini çağrısını da iptal eder, boşa token yakılmaz.
  useEffect(() => () => abortRef.current?.abort(), [])

  /* ================================================================
     ÇÖZÜM
     ================================================================ */

  const handleSubmit = useCallback(
    async ({ prepared, text, note, source }) => {
      setPhase('solving')
      setStages([])
      setCurrentStage(null)
      setError(null)
      setResult(null)
      setHelpState(null)
      setAlternative(null)
      setShowCheck(false)
      setImageUrl(null)

      const controller = new AbortController()
      abortRef.current = controller

      try {
        let imagePath = null
        if (prepared?.blob) {
          setStages([{ key: 'upload', text: 'Fotoğrafın yükleniyor…' }])
          setCurrentStage('upload')
          imagePath = await uploadQuestionImage(prepared.blob, user.id, prepared.ext)
          setImageUrl(publicUrlFor(imagePath))
        }

        await solveQuestion({
          imagePath,
          text,
          note,
          source,
          signal: controller.signal,
          handlers: {
            onStage: (key, stageText) => {
              setCurrentStage(key)
              // Aynı aşama iki kez gelirse listeye tekrar eklenmesin.
              setStages((list) =>
                list.some((s) => s.key === key) ? list : [...list, { key, text: stageText }]
              )
            },
            onResult: (payload) => {
              setResult(payload)
              setPhase('result')
            },
            onError: (err) => {
              setError(err.message)
              setPhase('idle')
            },
          },
        })
      } catch (err) {
        if (err?.name === 'AbortError') return
        setError(
          err instanceof AISolveError || err instanceof ImageError
            ? err.message
            : 'Soru çözülemedi. Birkaç saniye sonra tekrar dener misin?'
        )
        setPhase('idle')
      } finally {
        abortRef.current = null
      }
    },
    [user]
  )

  function reset() {
    abortRef.current?.abort()
    setPhase('idle')
    setResult(null)
    setError(null)
    setStages([])
    setHelpState(null)
    setAlternative(null)
    setShowCheck(false)
    setImageUrl(null)
  }

  /* ================================================================
     ADIM YARDIMI
     ================================================================ */

  const runAsk = useCallback(
    async (stepIndex, fn) => {
      if (!result?.sessionId) {
        // Oturum kaydedilememişse (veritabanı hatası) takip soruları
        // çalışamaz. Sessizce başarısız olmak yerine söylüyoruz.
        setHelpState({
          stepIndex,
          error: 'Bu çözüm kaydedilemediği için ek açıklama alamıyorum.',
        })
        return
      }

      setHelpState({ stepIndex, loading: true })
      try {
        const response = await fn({ sessionId: result.sessionId, stepIndex })
        setHelpState({ stepIndex, answer: response.answer, math: response.math })
      } catch (err) {
        setHelpState({
          stepIndex,
          error: err instanceof AISolveError ? err.message : 'Açıklama alınamadı.',
        })
      }
    },
    [result]
  )

  const handleAskWhy = useCallback(
    (stepIndex) => runAsk(stepIndex, askWhy),
    [runAsk]
  )

  const handleAskStuck = useCallback(
    (stepIndex) => runAsk(stepIndex, askStuck),
    [runAsk]
  )

  /* ================================================================
     ALTERNATİF YÖNTEM
     ================================================================ */

  async function requestAlternative() {
    if (!result?.sessionId) return
    setAlternative({ status: 'loading' })
    try {
      const response = await askAlternative({ sessionId: result.sessionId })
      setAlternative(
        response.hasAlternative
          ? {
              status: 'ok',
              board: response.board,
              methodName: response.methodName,
              whyUseful: response.whyUseful,
            }
          : { status: 'none' }
      )
    } catch (err) {
      setAlternative(null)
      toast.error(err instanceof AISolveError ? err.message : 'Alternatif yöntem alınamadı.')
    }
  }

  /* ================================================================
     GEÇMİŞ
     ================================================================ */

  async function openHistory() {
    setHistoryOpen(true)
    setHistoryLoading(true)
    try {
      setHistory(await listSolutions({ limit: 30 }))
    } catch {
      setHistory([])
    } finally {
      setHistoryLoading(false)
    }
  }

  async function openSession(id) {
    setHistoryOpen(false)
    setPhase('solving')
    setStages([{ key: 'load', text: 'Çözüm açılıyor…' }])
    setCurrentStage('load')
    try {
      const session = await getSolution(id)
      setResult({
        status: session.status,
        sessionId: session.id,
        board: session.board,
        question: session.question,
        meta: session.meta,
        help: session.help,
        verification: session.verification,
        feedback: session.feedback,
        studentCorrect: session.studentCorrect,
      })
      setImageUrl(publicUrlFor(session.imagePath))
      setHelpState(null)
      setAlternative(null)
      setPhase('result')
    } catch (err) {
      setError(err instanceof AISolveError ? err.message : 'Çözüm açılamadı.')
      setPhase('idle')
    }
  }

  /* ================================================================
     GÖRÜNÜM
     ================================================================ */

  return (
    <AppShell
      title="AI Soru Çöz"
      subtitle="Sorunun fotoğrafını yükle, tahtada birlikte çözelim"
      headerAction={
        <div className="flex items-center gap-1.5">
          {phase === 'result' && (
            <IconButton icon={ArrowLeft} label="Yeni soru" variant="secondary" onClick={reset} />
          )}
          <IconButton
            icon={History}
            label="Çözüm geçmişi"
            variant="secondary"
            onClick={openHistory}
          />
        </div>
      }
    >
      {phase === 'idle' && (
        <>
          <QuestionUploader onSubmit={handleSubmit} error={error} />

          <Card variant="outline">
            <CardBody className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-ink">Nasıl çalışır?</p>
              <ol className="flex flex-col gap-1.5 text-sm text-ink/70">
                <HowStep n={1}>Sorunun fotoğrafını yükle ya da yazarak gönder.</HowStep>
                <HowStep n={2}>Konusunu, zorluğunu ve çözüm yolunu çıkarayım.</HowStep>
                <HowStep n={3}>Tahtada adım adım birlikte çözelim.</HowStep>
                <HowStep n={4}>Takıldığın adımda sor — o noktayı açayım.</HowStep>
              </ol>
              <p className="mt-1 text-2xs leading-relaxed text-ink/50">
                Çözemediğim ya da emin olamadığım soruda uydurma yapmam, açıkça söylerim.
                Çözdüğün sorular konu bazlı gelişimine ve AI Koç’a yansır.
              </p>
            </CardBody>
          </Card>
        </>
      )}

      {phase === 'solving' && <SolveStages stages={stages} current={currentStage} />}

      {phase === 'result' && result && (
        <ResultView
          result={result}
          imageUrl={imageUrl}
          onOpenImage={() => setLightbox(true)}
          onAskWhy={handleAskWhy}
          onAskStuck={handleAskStuck}
          helpState={helpState}
          alternative={alternative}
          onRequestAlternative={requestAlternative}
          showCheck={showCheck}
          onToggleCheck={() => setShowCheck((v) => !v)}
          onReset={reset}
          toast={toast}
        />
      )}

      {lightbox && imageUrl && (
        <ImageLightbox src={imageUrl} alt="Soru görseli" onClose={() => setLightbox(false)} />
      )}

      {/* ---------------- Geçmiş ---------------- */}
      <Modal open={historyOpen} onClose={() => setHistoryOpen(false)} title="Çözüm geçmişin">
        {historyLoading ? (
          <p className="py-8 text-center text-sm text-ink/60">Yükleniyor…</p>
        ) : history.length === 0 ? (
          <EmptyState
            icon={Sparkles}
            title="Henüz çözdüğün soru yok"
            description="İlk sorunu yüklediğinde burada birikmeye başlar."
          />
        ) : (
          <ul className="flex flex-col divide-y divide-line">
            {history.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => openSession(item.id)}
                  disabled={item.status !== 'ok'}
                  className="focus-ring w-full rounded-btn px-2 py-3 text-left transition-colors hover:bg-ink/[0.04] disabled:opacity-50"
                >
                  <div className="flex items-center gap-2">
                    <p className="min-w-0 flex-1 truncate text-sm font-medium text-ink">
                      {item.canonical_topic ?? item.topic ?? item.subject ?? 'Soru'}
                    </p>
                    {item.status === 'ok' && item.answer_plain && (
                      <Badge tone="neutral" size="sm">
                        {item.answer_plain}
                      </Badge>
                    )}
                    {item.status === 'unreadable' && (
                      <Badge tone="warning" size="sm">
                        Okunamadı
                      </Badge>
                    )}
                    {item.status === 'refused' && (
                      <Badge tone="warning" size="sm">
                        Çözülemedi
                      </Badge>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-ink/55">
                    {item.subject ? `${item.subject} · ` : ''}
                    {new Date(item.created_at).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </AppShell>
  )
}

/* ================================================================== */

function HowStep({ n, children }) {
  return (
    <li className="flex gap-2.5">
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/10 text-2xs font-bold text-brand-700">
        {n}
      </span>
      {children}
    </li>
  )
}

/* ==================================================================
   SONUÇ GÖRÜNÜMÜ
   ================================================================== */

function ResultView({
  result,
  imageUrl,
  onOpenImage,
  onAskWhy,
  onAskStuck,
  helpState,
  alternative,
  onRequestAlternative,
  showCheck,
  onToggleCheck,
  onReset,
  toast,
}) {
  /* ---- Okunamadı (§23) ---- */
  if (result.status === 'unreadable') {
    return (
      <Card>
        <CardBody className="flex flex-col items-center gap-4 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-warning-500/12 text-warning-600 ring-1 ring-inset ring-warning-500/20">
            <ImageOff className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-base font-bold text-ink">Soruyu net okuyamadım</p>
            <p className="mt-1 text-sm text-ink/65">
              Yanlış çözüm göstermektense sormayı tercih ediyorum.
            </p>
          </div>

          {result.issues?.length > 0 && (
            <ul className="flex w-full max-w-md flex-col gap-2">
              {result.issues.map((issue, i) => (
                <li key={i}>
                  <Alert tone="warning">{issue}</Alert>
                </li>
              ))}
            </ul>
          )}

          <Button icon={Camera} onClick={onReset}>
            Yeni fotoğraf yükle
          </Button>
        </CardBody>
      </Card>
    )
  }

  /* ---- Güven eşiğinin altında (§30) ---- */
  if (result.status === 'refused') {
    return (
      <Card>
        <CardBody className="flex flex-col items-center gap-4 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-warning-500/12 text-warning-600 ring-1 ring-inset ring-warning-500/20">
            <TriangleAlert className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-base font-bold text-ink">
              Bu soruyu güvenilir şekilde çözemedim
            </p>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-ink/65">{result.message}</p>
          </div>
          <Button icon={Camera} onClick={onReset}>
            Tekrar dene
          </Button>
        </CardBody>
      </Card>
    )
  }

  /* ---- Çözüm ---- */
  return (
    <>
      {/* Soru görseli — küçük, tıklanınca büyüyor. Tahtayla yarışmasın. */}
      {imageUrl && (
        <button
          type="button"
          onClick={onOpenImage}
          className="focus-ring mx-auto block w-fit rounded-input border border-line bg-surface p-1.5 transition-shadow hover:shadow-card"
        >
          <img
            src={imageUrl}
            alt="Yüklediğin soru"
            className="max-h-32 w-auto rounded-lg object-contain"
          />
          <span className="mt-1 block text-2xs text-ink/50">Büyütmek için dokun</span>
        </button>
      )}

      <SolutionMeta meta={result.meta} />

      <Whiteboard
        board={result.board}
        onAskWhy={onAskWhy}
        onAskStuck={onAskStuck}
        helpState={helpState}
      />

      <AnswerCard answer={result.board?.answer} verification={result.verification} />

      {/* Soru metni — modelin ne okuduğunu öğrenci görebilmeli.
          Yanlış okunmuşsa hatayı burada fark eder (§42'deki "soru yanlış
          okundu" geri bildirimi de buradan anlam kazanır). */}
      {result.question?.text && (
        <Card variant="outline">
          <CardBody className="flex flex-col gap-2">
            <p className="text-2xs font-bold uppercase tracking-wider text-ink/50">
              Soruyu böyle okudum
            </p>
            <p className="text-sm leading-relaxed text-ink/75">
              <MathText text={result.question.text} />
            </p>
            {result.question.choices?.length > 0 && (
              <ul className="mt-1 flex flex-col gap-1">
                {result.question.choices.map((c) => (
                  <li key={c.key} className="flex gap-2 text-sm text-ink/70">
                    <span className="font-bold text-ink/50">{c.key})</span>
                    <MathText text={c.text} />
                  </li>
                ))}
              </ul>
            )}
          </CardBody>
        </Card>
      )}

      <AnalysisCard meta={result.meta} />
      <StudentHelpCard help={result.help} />
      <WrongChoicesCard wrongChoices={result.help?.wrongChoices} />

      <AlternativePanel state={alternative} onRequest={onRequestAlternative} />

      {/* ---- Çözümümü kontrol et ---- */}
      <PageSection title="Kendi çözümün var mı?">
        {showCheck ? (
          <CheckWorkPanel sessionId={result.sessionId} questionText={result.question?.text} />
        ) : (
          <Button variant="secondary" icon={ClipboardCheck} onClick={onToggleCheck} fullWidth>
            Çözümümü Kontrol Et
          </Button>
        )}
      </PageSection>

      {/* ---- Geri bildirim ---- */}
      <Card variant="outline">
        <CardBody className="flex flex-col gap-5">
          {result.sessionId && (
            <SelfReportBar
              value={result.studentCorrect}
              onReport={(correct) =>
                reportSelfResult({ sessionId: result.sessionId, studentCorrect: correct })
              }
            />
          )}

          {result.sessionId && (
            <FeedbackBar
              sent={result.feedback}
              onSend={async ({ feedback, reason }) => {
                await sendFeedback({ sessionId: result.sessionId, feedback, reason })
                toast.success('Geri bildirimin kaydedildi.')
              }}
            />
          )}
        </CardBody>
      </Card>

      <Button variant="secondary" icon={Camera} onClick={onReset} fullWidth>
        Yeni Soru Çöz
      </Button>
    </>
  )
}
