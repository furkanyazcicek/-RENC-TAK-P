import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Lightbulb,
  Loader2,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { Badge, Button } from '../ui'
import ActionRenderer from './ActionRenderer'
import { MathText } from './MathRenderer'

/**
 * Whiteboard — çözümün adım adım oluştuğu dijital tahta (§6, §8).
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN CANVAS DEĞİL DOM/SVG
 * ═══════════════════════════════════════════════════════════════════
 * Projede zaten bir canvas tahtası var: `components/solve/SolveBoard.jsx`
 * (öğretmenin kalemle çizdiği). Bu ondan FARKLI bir iştir:
 *   · İçerik LaTeX — KaTeX HTML/MathML üretir, canvas'a çizilemez.
 *   · İçerik seçilebilir ve ekran okuyucuya açık olmalı.
 *   · Adımlar arası geçişler CSS ile bedava, canvas'ta elle animasyon.
 * Canvas'ı zorlamak, erişilebilirliği ve matematik dizgisini kaybetmek
 * pahasına "tahta gibi görünen" bir resim üretirdi.
 *
 * ═══════════════════════════════════════════════════════════════════
 * ADIMLAR BİRİKEREK GÖRÜNÜR
 * ═══════════════════════════════════════════════════════════════════
 * Her adımda ekranı temizlemiyoruz; önceki adımlar yukarıda kalıyor.
 * Gerçek tahta böyle çalışır ve öğrenci "2x = 12 nereden geldi" diye
 * baktığında yukarı bakabilmeli. Yalnızca AKTİF adım vurgulanır.
 *
 * ═══════════════════════════════════════════════════════════════════
 * OTOMATİK OYNATMA VARSAYILAN DEĞİL
 * ═══════════════════════════════════════════════════════════════════
 * §8: "Karmaşık adımlarda otomatik zamanlama yerine manuel 'Sonraki
 * Adım' daha önemli." Başlat'a basınca ilk adım gelir ve orada DURUR.
 * Oynat'a basılırsa süre içerikten hesaplanır (okuma hızı), sabit bir
 * saniye değil — üç satırlık türev hesabıyla "x = 6" aynı sürede
 * geçemez.
 */

/** Ortalama okuma hızından türetilmiş: ~11 karakter/saniye + taban. */
function durationFor(step) {
  const chars =
    (step.narration?.length ?? 0) +
    step.actions.reduce((sum, a) => sum + (a.content?.length ?? a.target?.length ?? 0), 0)

  const hasFigure = step.actions.some((a) =>
    ['graph', 'shape', 'table', 'flow', 'numberline'].includes(a.type)
  )

  const base = 2800 + chars * 90
  // Şekilli adımda göz önce şekli tarar, sonra metni okur.
  return Math.min(14_000, hasFigure ? base + 3500 : base)
}

export default function Whiteboard({
  board,
  onAskWhy,
  onAskStuck,
  helpState,
  className,
}) {
  const steps = board?.steps ?? []
  const total = steps.length

  // -1 = henüz başlanmadı (kapak ekranı)
  const [index, setIndex] = useState(-1)
  const [playing, setPlaying] = useState(false)
  const [openHelp, setOpenHelp] = useState(null) // 'why' | 'stuck' | null

  const stepRefs = useRef([])
  const scrollRef = useRef(null)
  const timerRef = useRef(null)

  const started = index >= 0
  const atEnd = index >= total - 1

  /* ---------------- Gezinme ---------------- */

  /**
   * Adım ilerletme FONKSİYONEL güncelleme ile yapılır.
   *
   * `setIndex(index + 1)` yazsaydık, aynı render turunda iki kez basılan
   * "Sonraki" (telefonda çift dokunuş, klavyede tuşu basılı tutma) ikinci
   * kez de ESKİ `index` değerini okuyup tek adım ilerletirdi. Fonksiyonel
   * biçim her çağrıda en güncel değeri alır.
   */
  const step = useCallback(
    (delta) => {
      setIndex((i) => Math.max(0, Math.min(total - 1, i + delta)))
      setOpenHelp(null)
    },
    [total]
  )

  const start = useCallback(() => {
    setIndex(0)
    setPlaying(false)
    setOpenHelp(null)
  }, [])

  const restart = useCallback(() => {
    setIndex(0)
    setPlaying(false)
    setOpenHelp(null)
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  /* ---------------- Otomatik oynatma ---------------- */

  useEffect(() => {
    clearTimeout(timerRef.current)
    if (!playing || !started || atEnd) return undefined

    timerRef.current = setTimeout(() => step(1), durationFor(steps[index]))
    return () => clearTimeout(timerRef.current)
  }, [playing, started, atEnd, index, steps, step])

  // Son adıma gelince oynatma kendiliğinden durur; yoksa "Duraklat"
  // düğmesi anlamsızca aktif kalırdı.
  useEffect(() => {
    if (atEnd) setPlaying(false)
  }, [atEnd])

  // Öğrenci yardım panelini açtığında oynatmayı durdur: okurken adımın
  // altından kayması en sinir bozucu davranış olurdu.
  useEffect(() => {
    if (openHelp) setPlaying(false)
  }, [openHelp])

  /* ---------------- Aktif adıma kaydır ---------------- */

  useEffect(() => {
    if (!started) return
    const node = stepRefs.current[index]
    if (!node) return
    // `block: 'nearest'` — adım zaten görünüyorsa sayfayı zıplatma.
    node.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [index, started])

  /* ---------------- Klavye ---------------- */

  useEffect(() => {
    if (!started) return undefined

    function onKey(e) {
      // Öğrenci bir metin kutusuna yazarken ok tuşları imleci taşımalı.
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        step(1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        step(-1)
      } else if (e.key === ' ') {
        e.preventDefault()
        setPlaying((p) => !p)
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [started, step])

  const currentStep = started ? steps[index] : null

  const progress = useMemo(
    () => (total ? Math.round(((index + 1) / total) * 100) : 0),
    [index, total]
  )

  if (!total) return null

  return (
    <div className={cn('flex min-w-0 flex-col overflow-hidden rounded-card border border-line bg-surface shadow-card', className)}>
      {/* ---------------- Tahta başlığı ---------------- */}
      <div className="flex items-center justify-between gap-3 border-b border-line bg-surface-muted px-4 py-2.5">
        <span className="flex items-center gap-2 text-2xs font-bold uppercase tracking-wider text-ink/55">
          <Sparkles className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
          Çözüm Tahtası
        </span>
        {started && (
          <span className="tabular text-xs font-semibold text-ink/60">
            Adım {index + 1} / {total}
          </span>
        )}
      </div>

      {/* İlerleme şeridi — geri sayım değil, nerede olduğunun göstergesi. */}
      {started && (
        <div className="h-0.5 w-full bg-line" role="presentation">
          <div
            className="h-full bg-aurora-line transition-[width] duration-500 ease-smooth"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* ---------------- Tahta yüzeyi ---------------- */}
      <div
        ref={scrollRef}
        className={cn(
          'relative min-h-[16rem] flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6',
          // Defter çizgisi hissi: çok soluk yatay çizgiler. Tahtayı
          // "boş bir div" olmaktan çıkarır ama okumayı zorlaştırmaz.
          'bg-[linear-gradient(to_bottom,transparent_calc(2.25rem_-_1px),rgb(var(--c-line)/0.5)_2.25rem)] bg-[size:100%_2.25rem]'
        )}
        style={{ maxHeight: 'min(60vh, 32rem)' }}
      >
        {!started ? (
          <StartScreen total={total} onStart={start} />
        ) : (
          <ol className="flex flex-col gap-1">
            {steps.slice(0, index + 1).map((step, i) => (
              <li
                key={step.n}
                ref={(node) => {
                  stepRefs.current[i] = node
                }}
                className={cn(
                  'rounded-input px-2 py-3 transition-all duration-300 ease-smooth sm:px-3',
                  i === index
                    ? 'animate-fade-in-up bg-brand-500/[0.04] ring-1 ring-inset ring-brand-500/10'
                    : 'opacity-55'
                )}
                aria-current={i === index ? 'step' : undefined}
              >
                <StepHeader step={step} n={i + 1} />

                {step.actions.map((action, j) => (
                  <ActionRenderer key={j} action={action} />
                ))}

                {step.narration && (
                  <p className="mt-2 text-center text-sm leading-relaxed text-ink/70">
                    <MathText text={step.narration} />
                  </p>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>

      {/* ---------------- Adım yardımı ---------------- */}
      {started && currentStep && (
        <StepHelpBar
          step={currentStep}
          stepIndex={index}
          open={openHelp}
          onOpen={setOpenHelp}
          onAskWhy={onAskWhy}
          onAskStuck={onAskStuck}
          helpState={helpState}
        />
      )}

      {/* ---------------- Kontroller ---------------- */}
      {started && (
        <div className="flex items-center justify-center gap-1.5 border-t border-line bg-surface-muted px-3 py-3 sm:gap-2">
          {/* Dokunma hedefleri 44px — telefonda başparmakla kullanılacak (§25). */}
          <ControlButton
            icon={RotateCcw}
            label="Baştan başlat"
            onClick={restart}
            disabled={index === 0 && !playing}
          />
          <ControlButton
            icon={ChevronLeft}
            label="Önceki adım"
            onClick={() => step(-1)}
            disabled={index === 0}
          />

          <Button
            variant={atEnd ? 'secondary' : 'primary'}
            size="md"
            icon={playing ? Pause : Play}
            onClick={() => (atEnd ? restart() : setPlaying((p) => !p))}
            className="min-w-[8.5rem]"
          >
            {atEnd ? 'Tekrar izle' : playing ? 'Duraklat' : 'Oynat'}
          </Button>

          <ControlButton
            icon={ChevronRight}
            label="Sonraki adım"
            onClick={() => step(1)}
            disabled={atEnd}
          />
        </div>
      )}
    </div>
  )
}

/* ================================================================== */

function StartScreen({ total, onStart }) {
  return (
    <div className="flex h-full min-h-[14rem] flex-col items-center justify-center gap-4 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
        <Play className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      </span>
      <div>
        <p className="font-display text-base font-bold text-ink">Çözüm hazır</p>
        <p className="mt-1 text-sm text-ink/65">
          {total} adımda birlikte çözelim. İstediğin an durdurup geri dönebilirsin.
        </p>
      </div>
      <Button icon={Play} size="lg" onClick={onStart}>
        Çözümü Başlat
      </Button>
    </div>
  )
}

const KIND_LABELS = {
  kurulum: 'Kurulum',
  donusum: 'Düzenleme',
  hesap: 'Hesap',
  yerine_koyma: 'Yerine koyma',
  sonuc: 'Sonuç',
  kontrol: 'Kontrol',
  kavram: 'Kavram',
}

function StepHeader({ step, n }) {
  return (
    <div className="mb-1 flex items-center justify-center gap-2">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500/10 text-2xs font-bold text-brand-700 ring-1 ring-inset ring-brand-500/15">
        {n}
      </span>
      <h4 className="font-display text-sm font-bold text-ink">{step.title}</h4>
      {step.isKey && (
        <Badge tone="accent" size="sm">
          Kilit adım
        </Badge>
      )}
      {!step.isKey && step.kind && step.kind !== 'donusum' && (
        <Badge tone="neutral" size="sm">
          {KIND_LABELS[step.kind] ?? step.kind}
        </Badge>
      )}
    </div>
  )
}

function ControlButton({ icon: Icon, label, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={cn(
        'focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface',
        'text-ink/70 transition-colors hover:border-brand-300 hover:text-brand-700',
        'disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-line disabled:hover:text-ink/70'
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    </button>
  )
}

/* ==================================================================
   ADIM YARDIMI — "Neden?" ve "Burada takıldım" (§10, §11)
   ================================================================== */

function StepHelpBar({ step, stepIndex, open, onOpen, onAskWhy, onAskStuck, helpState }) {
  const loading = helpState?.loading && helpState?.stepIndex === stepIndex
  const answer = helpState?.stepIndex === stepIndex ? helpState : null

  // "Neden?" ÇOĞU ZAMAN AĞA ÇIKMAZ: adımın gerekçesi ilk çözümde
  // `why` alanında üretildi ve burada anında gösteriliyor (§26).
  // Sunucuya yalnızca öğrenci "daha fazla açıkla" derse gidilir.
  const hasLocalWhy = Boolean(step.why)

  return (
    <div className="border-t border-line px-4 py-3 sm:px-5">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {hasLocalWhy && (
          <button
            type="button"
            onClick={() => onOpen(open === 'why' ? null : 'why')}
            aria-expanded={open === 'why'}
            className={cn(
              'focus-ring inline-flex min-h-[2.25rem] items-center gap-1.5 rounded-full px-3.5 py-1.5',
              'text-xs font-semibold transition-colors',
              open === 'why'
                ? 'bg-brand-500/12 text-brand-700 ring-1 ring-inset ring-brand-500/20'
                : 'bg-ink/[0.04] text-ink/70 hover:bg-brand-500/[0.08] hover:text-brand-700'
            )}
          >
            <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
            Bunu neden yaptık?
          </button>
        )}

        <button
          type="button"
          onClick={() => {
            onOpen('stuck')
            onAskStuck?.(stepIndex)
          }}
          className={cn(
            'focus-ring inline-flex min-h-[2.25rem] items-center gap-1.5 rounded-full px-3.5 py-1.5',
            'text-xs font-semibold transition-colors',
            open === 'stuck'
              ? 'bg-accent-500/12 text-accent-700 ring-1 ring-inset ring-accent-500/20'
              : 'bg-ink/[0.04] text-ink/70 hover:bg-accent-500/[0.08] hover:text-accent-700'
          )}
        >
          <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
          Burada takıldım
        </button>
      </div>

      {/* ---- Yerel gerekçe ---- */}
      {open === 'why' && step.why && (
        <div className="mt-3 animate-fade-in rounded-input bg-brand-500/[0.06] p-3.5 ring-1 ring-inset ring-brand-500/12">
          <p className="text-sm leading-relaxed text-ink/85">
            <MathText text={step.why} />
          </p>
          <button
            type="button"
            onClick={() => onAskWhy?.(stepIndex)}
            disabled={loading}
            className="focus-ring mt-2 text-xs font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800 disabled:opacity-50"
          >
            Daha ayrıntılı anlat
          </button>
        </div>
      )}

      {/* ---- Sunucudan gelen açıklama ---- */}
      {(loading || (answer?.answer && (open === 'stuck' || open === 'why'))) && (
        <div className="mt-3 animate-fade-in rounded-input bg-surface-sunken p-3.5 ring-1 ring-inset ring-line">
          {loading ? (
            <p className="flex items-center gap-2 text-sm text-ink/60">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Bu adımı açıklıyorum…
            </p>
          ) : (
            <>
              <p className="text-sm leading-relaxed text-ink/85">
                <MathText text={answer.answer} />
              </p>
              {answer.math && (
                <div className="mt-2.5">
                  <ActionRenderer action={{ type: 'write', content: answer.math, format: 'latex' }} />
                </div>
              )}
            </>
          )}
        </div>
      )}

      {answer?.error && (
        <p className="mt-3 text-center text-xs text-danger-600">{answer.error}</p>
      )}
    </div>
  )
}
