import { useState } from 'react'
import {
  AlertTriangle,
  BadgeCheck,
  BookOpen,
  Check,
  Lightbulb,
  ListChecks,
  Loader2,
  Route,
  ShieldCheck,
  Target,
  ThumbsDown,
  ThumbsUp,
  XCircle,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { Badge, Button, Card, CardBody, CardHeader } from '../ui'
import { FEEDBACK_REASONS } from '../../lib/aiSolve'
import MathRenderer, { MathText } from './MathRenderer'
import Whiteboard from './Whiteboard'

/**
 * Çözüm etrafındaki bilgi kartları (§24, §34, §35, §42).
 *
 * TAHTA ANA OYUNCU, BUNLAR YARDIMCI. Her kart bir soruya cevap verir ve
 * gereksizse HİÇ GÖRÜNMEZ — "veri yok" yazan boş bir kart, olmayan bir
 * karttan kötüdür.
 */

const DIFFICULTY = {
  1: { label: 'Çok kolay', tone: 'success' },
  2: { label: 'Kolay', tone: 'success' },
  3: { label: 'Orta', tone: 'warning' },
  4: { label: 'Zor', tone: 'danger' },
  5: { label: 'Çok zor', tone: 'danger' },
}

/* ==================================================================
   KONU / ZORLUK / TEMEL FİKİR
   ================================================================== */

export function SolutionMeta({ meta }) {
  if (!meta) return null
  const difficulty = DIFFICULTY[meta.difficulty]

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <InfoTile icon={BookOpen} label="Konu">
        <p className="text-sm font-bold text-ink">{meta.topic ?? meta.subject ?? '—'}</p>
        {meta.subtopic && <p className="mt-0.5 text-xs text-ink/60">{meta.subtopic}</p>}
        {meta.subject && meta.topic && (
          <p className="mt-0.5 text-2xs font-semibold uppercase tracking-wide text-ink/45">
            {meta.subject}
          </p>
        )}
      </InfoTile>

      <InfoTile icon={Target} label="Zorluk">
        {difficulty ? (
          <Badge tone={difficulty.tone}>{difficulty.label}</Badge>
        ) : (
          <p className="text-sm text-ink/60">—</p>
        )}
      </InfoTile>

      <InfoTile icon={Lightbulb} label="Temel fikir">
        <p className="text-sm leading-relaxed text-ink/80">
          {meta.strategy ? <MathText text={meta.strategy} /> : (meta.goal ?? '—')}
        </p>
      </InfoTile>
    </div>
  )
}

function InfoTile({ icon: Icon, label, children }) {
  return (
    <div className="min-w-0 rounded-card border border-line bg-surface p-4">
      <p className="mb-1.5 flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-ink/50">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </p>
      {children}
    </div>
  )
}

/* ==================================================================
   VERİLENLER / İSTENEN (§34 madde 2-3)
   ================================================================== */

export function AnalysisCard({ meta }) {
  const hasGivens = meta?.givens?.length > 0
  const hasUnknowns = meta?.unknowns?.length > 0
  if (!hasGivens && !hasUnknowns && !meta?.concepts?.length) return null

  return (
    <Card>
      <CardHeader title="Soruyu anlayalım" icon={ListChecks} />
      <CardBody className="grid gap-4 sm:grid-cols-2">
        {hasGivens && (
          <div className="min-w-0">
            <p className="mb-2 text-2xs font-bold uppercase tracking-wider text-ink/50">Verilenler</p>
            <ul className="flex flex-col gap-1.5">
              {meta.givens.map((g, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                  <MathText text={g} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasUnknowns && (
          <div className="min-w-0">
            <p className="mb-2 text-2xs font-bold uppercase tracking-wider text-ink/50">İstenen</p>
            <ul className="flex flex-col gap-1.5">
              {meta.unknowns.map((u, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                  <MathText text={u} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {meta.concepts?.length > 0 && (
          <div className="min-w-0 sm:col-span-2">
            <p className="mb-2 text-2xs font-bold uppercase tracking-wider text-ink/50">
              Kullanılan bilgiler
            </p>
            <div className="flex flex-wrap gap-1.5">
              {meta.concepts.map((c, i) => (
                <Badge key={i} tone="neutral" size="sm">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  )
}

/* ==================================================================
   CEVAP + DOĞRULAMA
   ================================================================== */

export function AnswerCard({ answer, verification }) {
  if (!answer?.latex) return null

  const verified = verification?.status === 'passed'

  return (
    <Card variant="highlight">
      <CardBody className="flex flex-col items-center gap-3 text-center">
        <p className="text-2xs font-bold uppercase tracking-wider text-ink/50">Cevap</p>

        <div className="text-2xl font-bold text-ink sm:text-3xl">
          <MathRenderer latex={answer.latex} display />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {answer.unit && <Badge tone="neutral">{answer.unit}</Badge>}
          {answer.choice && <Badge tone="brand">{answer.choice} şıkkı</Badge>}
          {/* Doğrulama rozeti YALNIZCA gerçekten geçtiyse. "Doğrulanamadı"
              diye ayrı bir rozet koymuyoruz: sözel bir soruda doğrulanacak
              sayısal iddia olmaması normaldir ve öğrenciyi kuşkuya
              düşürmenin faydası yok. */}
          {verified && (
            <Badge tone="success" icon={ShieldCheck}>
              Kontrol edildi
            </Badge>
          )}
        </div>

        {verification?.selfCheck && (
          <p className="max-w-prose text-xs leading-relaxed text-ink/60">
            <MathText text={verification.selfCheck} />
          </p>
        )}

        {/* Modelin bildirdiği belirsizlikler GİZLENMEZ (§23). */}
        {verification?.notes?.length > 0 && (
          <div className="w-full rounded-input bg-warning-500/[0.08] p-3 text-left ring-1 ring-inset ring-warning-500/20">
            <p className="flex items-center gap-1.5 text-xs font-bold text-warning-700">
              <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
              Dikkat
            </p>
            <ul className="mt-1 flex flex-col gap-1">
              {verification.notes.map((n, i) => (
                <li key={i} className="text-xs leading-relaxed text-warning-700/90">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardBody>
    </Card>
  )
}

/* ==================================================================
   ÖĞRENCİ YARDIMI (§34 madde 9-10, §35)
   ================================================================== */

export function StudentHelpCard({ help }) {
  if (!help?.keyConcept && !help?.commonMistake && !help?.shortTip) return null

  return (
    <Card>
      <CardHeader title="Aklında kalsın" icon={Lightbulb} />
      <CardBody className="flex flex-col gap-3">
        {help.keyConcept && (
          <HelpRow tone="brand" icon={BadgeCheck} title="Kilit kavram" text={help.keyConcept} />
        )}
        {help.commonMistake && (
          <HelpRow
            tone="warning"
            icon={AlertTriangle}
            title="Sık yapılan hata"
            text={help.commonMistake}
          />
        )}
        {help.shortTip && <HelpRow tone="aqua" icon={Lightbulb} title="İpucu" text={help.shortTip} />}
      </CardBody>
    </Card>
  )
}

const HELP_TONES = {
  brand: 'bg-brand-500/[0.07] text-brand-700 ring-brand-500/15',
  warning: 'bg-warning-500/[0.10] text-warning-700 ring-warning-500/20',
  aqua: 'bg-aqua-500/[0.08] text-aqua-700 ring-aqua-500/15',
}

function HelpRow({ tone, icon: Icon, title, text }) {
  return (
    <div className={cn('flex gap-2.5 rounded-input p-3 ring-1 ring-inset', HELP_TONES[tone])}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-xs font-bold">{title}</p>
        <p className="mt-0.5 text-sm leading-relaxed text-ink/80">
          <MathText text={text} />
        </p>
      </div>
    </div>
  )
}

/** Çoktan seçmelide yanlış şıkların neden yanlış olduğu (§35). */
export function WrongChoicesCard({ wrongChoices }) {
  if (!wrongChoices?.length) return null

  return (
    <Card>
      <CardHeader title="Diğer şıklar neden değil?" icon={XCircle} />
      <CardBody className="flex flex-col gap-2.5">
        {wrongChoices.map((choice, i) => (
          <div key={i} className="flex gap-2.5">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-danger-500/10 text-2xs font-bold text-danger-700 ring-1 ring-inset ring-danger-500/15">
              {choice.key}
            </span>
            <p className="min-w-0 text-sm leading-relaxed text-ink/75">
              <MathText text={choice.why_wrong ?? choice.whyWrong} />
            </p>
          </div>
        ))}
      </CardBody>
    </Card>
  )
}

/* ==================================================================
   ALTERNATİF YÖNTEM (§12)
   ================================================================== */

export function AlternativePanel({ state, onRequest }) {
  if (state?.status === 'none') {
    return (
      <p className="text-center text-xs text-ink/55">
        Bu soru için gerçekten farklı bir yöntem bulamadım.
      </p>
    )
  }

  if (state?.status === 'ok' && state.board) {
    return (
      <Card>
        <CardHeader
          title={state.methodName ?? 'Alternatif yöntem'}
          description={state.whyUseful ?? undefined}
          icon={Route}
        />
        <CardBody padding="sm">
          <Whiteboard board={state.board} />
        </CardBody>
      </Card>
    )
  }

  return (
    <Button
      variant="secondary"
      icon={state?.status === 'loading' ? undefined : Route}
      loading={state?.status === 'loading'}
      onClick={onRequest}
      fullWidth
    >
      {state?.status === 'loading' ? 'Başka yöntem aranıyor…' : 'Başka yöntem var mı?'}
    </Button>
  )
}

/* ==================================================================
   GERİ BİLDİRİM (§42)
   ================================================================== */

export function FeedbackBar({ onSend, sent }) {
  const [choice, setChoice] = useState(sent ?? null)
  const [showReasons, setShowReasons] = useState(false)
  const [busy, setBusy] = useState(false)

  async function send(feedback, reason) {
    setBusy(true)
    setChoice(feedback)
    try {
      await onSend({ feedback, reason })
    } catch {
      /* geri bildirim gönderilemedi — öğrenciyi rahatsız etmeye değmez */
    } finally {
      setBusy(false)
      setShowReasons(false)
    }
  }

  if (choice && !showReasons) {
    return (
      <p className="flex items-center justify-center gap-1.5 text-xs font-medium text-success-700">
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
        Geri bildirimin için teşekkürler.
      </p>
    )
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs font-medium text-ink/60">Bu çözüm işine yaradı mı?</p>

      <div className="flex items-center gap-2">
        <FeedbackButton
          icon={ThumbsUp}
          label="Evet, yaradı"
          disabled={busy}
          onClick={() => send('up')}
        />
        <FeedbackButton
          icon={ThumbsDown}
          label="Hayır"
          disabled={busy}
          onClick={() => {
            setChoice('down')
            setShowReasons(true)
          }}
        />
      </div>

      {showReasons && (
        <div className="flex w-full max-w-md animate-fade-in flex-wrap justify-center gap-1.5">
          {FEEDBACK_REASONS.map((reason) => (
            <button
              key={reason.value}
              type="button"
              disabled={busy}
              onClick={() => send('down', reason.value)}
              className="focus-ring rounded-full bg-ink/[0.05] px-3 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:bg-danger-500/[0.08] hover:text-danger-700 disabled:opacity-50"
            >
              {reason.label}
            </button>
          ))}
        </div>
      )}

      {busy && (
        <Loader2 className="h-3.5 w-3.5 animate-spin text-ink/40" aria-hidden="true" />
      )}
    </div>
  )
}

function FeedbackButton({ icon: Icon, label, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={cn(
        'focus-ring grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface',
        'text-ink/60 transition-colors hover:border-brand-300 hover:text-brand-700 disabled:opacity-50'
      )}
    >
      <Icon className="h-4.5 w-4.5" strokeWidth={2} aria-hidden="true" />
    </button>
  )
}

/* ==================================================================
   ÖĞRENCİNİN KENDİ SONUCU (§19)
   ================================================================== */

/**
 * "Bu soruyu sen doğru çözmüş müydün?"
 *
 * NEDEN SORUYORUZ: bu tek bit, performans analizinin en değerli
 * verilerinden biri. "Öğrenci hangi konuda soru çözdürdü" zaten
 * biliniyor; "çözdürdüğü soruları kendisi bilebiliyor muydu" ise
 * zorlanmanın gerçek ölçüsü ve AI Koç'a giden sinyal (§20).
 */
export function SelfReportBar({ value, onReport }) {
  const [busy, setBusy] = useState(false)
  const [reported, setReported] = useState(value)

  if (reported != null) {
    return (
      <p className="text-center text-xs text-ink/55">
        {reported ? 'Bu soruyu doğru çözmüştün — kaydettim.' : 'Not aldım, bu konuya tekrar bakalım.'}
      </p>
    )
  }

  async function report(correct) {
    setBusy(true)
    try {
      await onReport(correct)
      setReported(correct)
    } catch {
      /* sessizce geç */
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xs font-medium text-ink/60">Sen bu soruyu doğru çözmüş müydün?</p>
      <div className="flex gap-2">
        <Button variant="secondary" size="sm" disabled={busy} onClick={() => report(true)}>
          Evet
        </Button>
        <Button variant="secondary" size="sm" disabled={busy} onClick={() => report(false)}>
          Hayır
        </Button>
      </div>
    </div>
  )
}
