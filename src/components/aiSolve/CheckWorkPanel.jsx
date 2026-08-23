import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, ClipboardCheck, ImagePlus, X, XCircle } from 'lucide-react'
import { cn } from '../../lib/cn'
import { useAuth } from '../../context/AuthContext'
import { Alert, Badge, Button, Card, CardBody, CardHeader } from '../ui'
import { AISolveError, checkMyWork } from '../../lib/aiSolve'
import { ImageError, prepareAndUpload, validateFile } from '../../lib/whiteboard/imagePrep'
import MathRenderer, { MathText } from './MathRenderer'
import Whiteboard from './Whiteboard'

/**
 * CheckWorkPanel — "Çözümümü Kontrol Et" (§18, §38).
 *
 * PEDAGOJİK KURAL, ARAYÜZE DE YANSIR
 * ----------------------------------
 * Sonuç ekranı "YANLIŞ" diye bağırmaz. Önce öğrencinin adımları
 * gösterilir (kendi yazdığı hâliyle), ilk hatalı adım işaretlenir,
 * SEBEBİ açıklanır ve o noktadan itibaren doğrusu tahtada gösterilir.
 * Doğru yaptığı kısımlar da yeşil kalır — çözümün tamamı çöp değildir.
 */

const VERDICTS = {
  dogru: {
    label: 'Çözümün doğru',
    tone: 'success',
    icon: CheckCircle2,
    description: 'Adımların da sonucun da doğru.',
  },
  sonuc_dogru_yol_hatali: {
    label: 'Sonuç doğru, yol hatalı',
    tone: 'warning',
    icon: ClipboardCheck,
    description: 'Cevabı buldun ama aradaki bir adım şansa denk gelmiş. Sınavda bu risklidir.',
  },
  hatali: {
    label: 'Bir hata var',
    tone: 'danger',
    icon: XCircle,
    description: 'İlk hatanın nerede olduğunu birlikte bulalım.',
  },
  eksik: {
    label: 'Çözüm yarım kalmış',
    tone: 'warning',
    icon: ClipboardCheck,
    description: 'Başladığın yol doğru ama sonuca ulaşmamışsın.',
  },
  okunamadi: {
    label: 'Okuyamadım',
    tone: 'neutral',
    icon: XCircle,
    description: 'Çözümünü net göremedim.',
  },
}

const ERROR_TYPES = {
  isaret_hatasi: 'İşaret hatası',
  islem_hatasi: 'İşlem hatası',
  formul_yanlis: 'Yanlış formül',
  kavram_yanilgisi: 'Kavram yanılgısı',
  birim_hatasi: 'Birim hatası',
  okuma_hatasi: 'Soruyu yanlış okuma',
  eksik_durum: 'Atlanan durum',
  dikkatsizlik: 'Dikkatsizlik',
}

export default function CheckWorkPanel({ sessionId, questionText }) {
  const { user } = useAuth()

  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  const inputRef = useRef(null)

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null)
      return undefined
    }
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [file])

  function pick(selected) {
    setError(null)
    if (!selected) return
    try {
      validateFile(selected)
      setFile(selected)
      setResult(null)
    } catch (err) {
      setError(err instanceof ImageError ? err.message : 'Bu dosya kullanılamadı.')
    }
  }

  async function submit() {
    if (!file) {
      setError('Önce çözümünün fotoğrafını ekle.')
      return
    }

    setBusy(true)
    setError(null)
    try {
      const { path } = await prepareAndUpload(file, user.id)
      const response = await checkMyWork({ sessionId, workPath: path, text: questionText })
      setResult(response)
    } catch (err) {
      setError(
        err instanceof AISolveError || err instanceof ImageError
          ? err.message
          : 'Çözümün kontrol edilemedi. Birkaç saniye sonra tekrar dener misin?'
      )
    } finally {
      setBusy(false)
    }
  }

  /* ---------------- Sonuç ---------------- */

  if (result?.status === 'unreadable') {
    return (
      <Card>
        <CardHeader title="Çözümünü okuyamadım" icon={ClipboardCheck} />
        <CardBody className="flex flex-col gap-3">
          {result.issues?.map((issue, i) => (
            <Alert key={i} tone="warning">
              {issue}
            </Alert>
          ))}
          <Button
            variant="secondary"
            onClick={() => {
              setResult(null)
              setFile(null)
            }}
          >
            Yeni fotoğraf yükle
          </Button>
        </CardBody>
      </Card>
    )
  }

  if (result?.status === 'ok') {
    const verdict = VERDICTS[result.verdict] ?? VERDICTS.okunamadi
    const VerdictIcon = verdict.icon

    return (
      <div className="flex flex-col gap-4">
        <Card>
          <CardBody className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  'grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1 ring-inset',
                  verdict.tone === 'success' && 'bg-success-500/10 text-success-600 ring-success-500/15',
                  verdict.tone === 'warning' && 'bg-warning-500/12 text-warning-600 ring-warning-500/20',
                  verdict.tone === 'danger' && 'bg-danger-500/10 text-danger-600 ring-danger-500/15',
                  verdict.tone === 'neutral' && 'bg-ink/[0.06] text-ink/60 ring-ink/[0.06]'
                )}
              >
                <VerdictIcon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-base font-bold text-ink">{verdict.label}</p>
                <p className="mt-0.5 text-sm text-ink/65">{verdict.description}</p>
              </div>
            </div>

            {result.encouragement && (
              <p className="rounded-input bg-surface-sunken p-3 text-sm leading-relaxed text-ink/75 ring-1 ring-inset ring-line">
                <MathText text={result.encouragement} />
              </p>
            )}

            {/* ---- Öğrencinin adımları ---- */}
            {result.studentSteps?.length > 0 && (
              <div>
                <p className="mb-2 text-2xs font-bold uppercase tracking-wider text-ink/50">
                  Senin çözümün
                </p>
                <ol className="flex flex-col gap-1.5">
                  {result.studentSteps.map((step) => {
                    const isFirstError = result.firstError?.stepN === step.n
                    return (
                      <li
                        key={step.n}
                        className={cn(
                          'flex items-center gap-2.5 rounded-input px-3 py-2 ring-1 ring-inset',
                          step.is_correct
                            ? 'bg-success-500/[0.06] ring-success-500/12'
                            : 'bg-danger-500/[0.06] ring-danger-500/15',
                          isFirstError && 'ring-2 ring-danger-500/35'
                        )}
                      >
                        <span className="tabular w-5 shrink-0 text-2xs font-bold text-ink/45">
                          {step.n}
                        </span>
                        <span className="min-w-0 flex-1 overflow-x-auto hide-scrollbar text-sm">
                          <MathRenderer latex={step.as_written} />
                        </span>
                        {step.is_correct ? (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-success-600" aria-label="Doğru" />
                        ) : (
                          <XCircle className="h-4 w-4 shrink-0 text-danger-600" aria-label="Hatalı" />
                        )}
                      </li>
                    )
                  })}
                </ol>
              </div>
            )}

            {/* ---- İlk hata ---- */}
            {result.firstError && (
              <div className="rounded-input bg-danger-500/[0.06] p-4 ring-1 ring-inset ring-danger-500/15">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <p className="text-xs font-bold text-danger-700">
                    {result.firstError.stepN}. adım
                  </p>
                  {result.firstError.errorType && (
                    <Badge tone="danger" size="sm">
                      {ERROR_TYPES[result.firstError.errorType] ?? result.firstError.errorType}
                    </Badge>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-ink/85">
                  <MathText text={result.firstError.whatWentWrong} />
                </p>
                {result.firstError.whyItHappened && (
                  <p className="mt-2 text-xs leading-relaxed text-ink/65">
                    <MathText text={result.firstError.whyItHappened} />
                  </p>
                )}
              </div>
            )}
          </CardBody>
        </Card>

        {/* ---- Doğrusu ---- */}
        {result.correction?.steps?.length > 0 && (
          <div>
            <p className="mb-2 text-2xs font-bold uppercase tracking-wider text-ink/50">
              Buradan sonrası nasıl olmalıydı
            </p>
            <Whiteboard board={result.correction} />
          </div>
        )}

        <Button
          variant="secondary"
          onClick={() => {
            setResult(null)
            setFile(null)
          }}
        >
          Başka bir çözüm kontrol et
        </Button>
      </div>
    )
  }

  /* ---------------- Yükleme formu ---------------- */

  return (
    <Card>
      <CardHeader
        title="Çözümünü kontrol edeyim"
        description="Kendi çözümünün fotoğrafını yükle — ilk nerede saptığını bulayım"
        icon={ClipboardCheck}
      />
      <CardBody className="flex flex-col gap-4">
        {previewUrl ? (
          <div className="relative mx-auto w-full max-w-sm">
            <img
              src={previewUrl}
              alt="Yüklenecek çözüm"
              className="max-h-64 w-full rounded-input border border-line bg-surface-sunken object-contain"
            />
            <button
              type="button"
              onClick={() => setFile(null)}
              aria-label="Fotoğrafı kaldır"
              className="focus-ring absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-danger-500 text-white shadow-card"
            >
              <X className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className={cn(
              'focus-ring flex min-h-[6rem] w-full flex-col items-center justify-center gap-2 rounded-input',
              'border border-dashed border-brand-300 bg-brand-500/[0.03] px-4 py-5 text-center',
              'transition-colors hover:border-brand-400 hover:bg-brand-500/[0.07]'
            )}
          >
            <ImagePlus className="h-6 w-6 text-brand-600" strokeWidth={1.8} aria-hidden="true" />
            <span className="text-sm font-semibold text-ink">Çözümünün fotoğrafını ekle</span>
            <span className="text-xs text-ink/60">Kâğıdını düz açıyla, aydınlık çek</span>
          </button>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={(e) => pick(e.target.files?.[0])}
        />

        {error && <Alert tone="danger">{error}</Alert>}

        <Button onClick={submit} loading={busy} disabled={!file} icon={ClipboardCheck}>
          {busy ? 'Çözümün inceleniyor…' : 'Çözümümü Kontrol Et'}
        </Button>
      </CardBody>
    </Card>
  )
}
