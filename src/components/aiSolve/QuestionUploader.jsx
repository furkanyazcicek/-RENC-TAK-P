import { useEffect, useRef, useState } from 'react'
import { Camera, ImagePlus, Loader2, Sparkles, Type, X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Alert, Button, Card, CardBody, Textarea } from '../ui'
import { ImageError, prepareImage, validateFile } from '../../lib/whiteboard/imagePrep'

/**
 * QuestionUploader — soru yükleme ekranı (§4, §24, §25).
 *
 * ÜÇ GİRİŞ YOLU, TEK ANA EYLEM
 * ----------------------------
 * Ana çağrı "📷 Sorumu Çöz". Kamera ve galeri AYRI düğmeler çünkü mobilde
 * bunlar farklı niyetlerdir: `capture="environment"` doğrudan kamerayı
 * açar, onsuz iOS bir seçim menüsü gösterir. Tek düğmeye indirseydik en
 * sık kullanılan yol (defterdeki soruyu çek) bir fazladan dokunuş alırdı.
 *
 * SIKIŞTIRMA YÜKLEMEDEN ÖNCE, GÖSTERİMDEN SONRA
 * ---------------------------------------------
 * Önizleme ORİJİNAL dosyadan üretilir, sıkıştırılmış hâlden değil:
 * öğrenci gönderdiği şeyi tam kalitede görmeli. Sıkıştırma "Çöz"e
 * basıldığında yapılır (bkz. `imagePrep.js`).
 */

export default function QuestionUploader({ onSubmit, busy, error, className }) {
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [text, setText] = useState('')
  const [note, setNote] = useState('')
  const [mode, setMode] = useState('photo') // 'photo' | 'text'
  const [localError, setLocalError] = useState(null)
  const [preparing, setPreparing] = useState(false)

  const cameraRef = useRef(null)
  const galleryRef = useRef(null)

  // Önizleme URL'i bellekte tutulur; dosya değişince eskisi serbest
  // bırakılır (QuestionForm.jsx ile aynı desen).
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
    setLocalError(null)
    if (!selected) return
    try {
      validateFile(selected)
      setFile(selected)
      setMode('photo')
    } catch (err) {
      setLocalError(err instanceof ImageError ? err.message : 'Bu dosya kullanılamadı.')
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLocalError(null)

    if (mode === 'text') {
      if (!text.trim()) {
        setLocalError('Soruyu yazman gerekiyor.')
        return
      }
      onSubmit({ file: null, prepared: null, text: text.trim(), note: note.trim(), source: 'text' })
      return
    }

    if (!file) {
      setLocalError('Önce sorunun fotoğrafını ekle.')
      return
    }

    // Sıkıştırma birkaç yüz milisaniye sürebiliyor; bu sırada düğme
    // "hazırlanıyor" durumunda kalır, yoksa öğrenci iki kez basar.
    setPreparing(true)
    try {
      const prepared = await prepareImage(file)
      onSubmit({
        file,
        prepared,
        text: text.trim(),
        note: note.trim(),
        source: 'photo',
      })
    } catch (err) {
      setLocalError(err instanceof ImageError ? err.message : 'Fotoğraf hazırlanamadı.')
    } finally {
      setPreparing(false)
    }
  }

  const shown = localError ?? error
  const loading = busy || preparing

  return (
    <Card className={cn('min-w-0', className)}>
      <CardBody className="flex flex-col gap-5">
        {/* ---------------- Mod seçimi ---------------- */}
        <div className="flex gap-1 rounded-input bg-surface-sunken p-1 ring-1 ring-inset ring-line">
          <ModeTab active={mode === 'photo'} onClick={() => setMode('photo')} icon={Camera}>
            Fotoğraf
          </ModeTab>
          <ModeTab active={mode === 'text'} onClick={() => setMode('text')} icon={Type}>
            Yazarak
          </ModeTab>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === 'photo' ? (
            <>
              {previewUrl ? (
                <div className="relative mx-auto w-full max-w-sm">
                  <img
                    src={previewUrl}
                    alt="Yüklenecek soru"
                    className="max-h-72 w-full rounded-input border border-line bg-surface-sunken object-contain"
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
                <div className="grid gap-3 sm:grid-cols-2">
                  <PickerButton
                    icon={Camera}
                    title="Fotoğraf Çek"
                    description="Defterdeki ya da kitaptaki soru"
                    onClick={() => cameraRef.current?.click()}
                  />
                  <PickerButton
                    icon={ImagePlus}
                    title="Galeriden Yükle"
                    description="Ekran görüntüsü de olur"
                    onClick={() => galleryRef.current?.click()}
                  />
                </div>
              )}

              {/* `capture` yalnızca mobilde anlamlı; masaüstünde tarayıcı
                  yok sayar ve normal dosya seçici açılır. */}
              <input
                ref={cameraRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={(e) => pick(e.target.files?.[0])}
              />
              <input
                ref={galleryRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => pick(e.target.files?.[0])}
              />

              <p className="text-center text-xs leading-relaxed text-ink/55">
                Sorunun tamamı kadraja girsin — şıklar ve şekiller dahil.
                Tek soru gönderirsen daha iyi çözerim.
              </p>
            </>
          ) : (
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-ink">Soru</span>
              <Textarea
                rows={5}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={'Örn: 2x + 6 = 18 denkleminde x kaçtır?'}
              />
            </label>
          )}

          {/* ---------------- İsteğe bağlı not ---------------- */}
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-ink/75">
              Nerede takıldın? <span className="font-normal text-ink/50">(isteğe bağlı)</span>
            </span>
            <Textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="örn. İkinci adımdan sonrasını anlamadım"
              maxLength={300}
            />
          </label>

          {shown && <Alert tone="danger">{shown}</Alert>}

          <Button
            type="submit"
            size="lg"
            fullWidth
            loading={loading}
            icon={loading ? undefined : Sparkles}
          >
            {preparing ? 'Fotoğraf hazırlanıyor…' : busy ? 'Çözülüyor…' : 'Sorumu Çöz'}
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}

/* ================================================================== */

function ModeTab({ active, onClick, icon: Icon, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'focus-ring flex flex-1 items-center justify-center gap-2 rounded-btn px-3 py-2',
        'text-sm font-semibold transition-all duration-200 ease-smooth',
        active
          ? 'bg-surface text-brand-700 shadow-xs ring-1 ring-brand-500/15'
          : 'text-ink/65 hover:bg-surface/70 hover:text-ink'
      )}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {children}
    </button>
  )
}

function PickerButton({ icon: Icon, title, description, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'focus-ring flex min-h-[7rem] flex-col items-center justify-center gap-2 rounded-input',
        'border border-dashed border-brand-300 bg-brand-500/[0.03] px-4 py-5 text-center',
        'transition-all duration-200 ease-smooth hover:border-brand-400 hover:bg-brand-500/[0.07]'
      )}
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
        <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="text-sm font-bold text-ink">{title}</span>
      <span className="text-xs text-ink/60">{description}</span>
    </button>
  )
}

/**
 * SolveStages — çözüm beklenirken gösterilen aşamalar (§40).
 *
 * Bu satırlar SAHTE DEĞİL: her biri sunucudan SSE ile gelen gerçek bir
 * aşamaya karşılık gelir (`api/_lib/solve/engine.js` > STAGES). Sahte bir
 * ilerleme çubuğu göstermek, işi hızlandırmadığı gibi öğrenciye yalan
 * söylemek olurdu.
 *
 * Tamamlanan aşamalar listede KALIR: sistemin ne yaptığını görmek,
 * beklemeyi kısaltmasa da anlaşılır kılar.
 */
export function SolveStages({ stages, current }) {
  return (
    <Card variant="highlight" className="min-w-0">
      <CardBody className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="relative grid h-10 w-10 shrink-0 place-items-center">
            <span
              className="absolute inset-0 animate-spin rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, rgb(var(--c-aurora-cyan)) 120deg, rgb(var(--c-aurora-violet)) 260deg, transparent 360deg)',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)',
                animationDuration: '1.1s',
              }}
              aria-hidden="true"
            />
          </span>
          <div className="min-w-0">
            <p className="font-display text-sm font-bold text-ink">Soru çözülüyor</p>
            <p className="text-xs text-ink/60">Bu birkaç saniye sürebilir.</p>
          </div>
        </div>

        <ol className="flex flex-col gap-2" aria-live="polite">
          {stages.map((stage, i) => {
            const done = i < stages.length - 1 || stage.key !== current
            return (
              <li
                key={`${stage.key}-${i}`}
                className={cn(
                  'flex items-center gap-2.5 text-sm transition-opacity duration-300',
                  done ? 'text-ink/55' : 'text-ink'
                )}
              >
                {done ? (
                  <span
                    className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-success-500/15 text-success-600"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
                      <path
                        d="M2.5 6.5 L5 9 L9.5 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ) : (
                  <Loader2 className="h-4 w-4 shrink-0 animate-spin text-brand-500" aria-hidden="true" />
                )}
                {stage.text}
              </li>
            )
          })}
        </ol>
      </CardBody>
    </Card>
  )
}
