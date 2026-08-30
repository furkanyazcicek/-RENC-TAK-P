import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, FileText, List, Pause, Play, RotateCcw, X } from 'lucide-react'
import {
  readNarrationProgress,
  writeNarrationProgress,
} from '../../../lib/lessonNarration'
import {
  publishNarrationState,
  registerAudioElement,
  resetNarrationState,
} from '../../../lib/lessonAudioBus'

const SPEEDS = [0.75, 1, 1.25, 1.5]

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00'
  const value = Math.max(0, Math.floor(seconds))
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`
}

/**
 * SESLİ ANLATIM OYNATICISI
 * ==================================================================
 *
 * Ders sayfasının üstünde duran ince bir şerit. Podcast oynatıcısı değil:
 * asıl olan not, ses ona eşlik ediyor. Bu yüzden oynatıcı içeriğin önüne
 * geçmiyor, telefonda ekranı kaplamıyor.
 *
 * ÜÇ DAVRANIŞ KARARI
 *
 * · Aynı anda tek ses. Oynatıcı ortak ses hattına kaydolur; sayfadaki
 *   başka bir ses başlarsa bu susar (ve tersi).
 *
 * · Ses hazır değilse anlatım METNİ gösterilir. Sağlayıcı kapalıyken
 *   öğrenci elinde hiçbir şey kalmadan bırakılmaz; ayrıca işitme engelli
 *   öğrenci için de anlatım erişilebilir olur.
 *
 * · Hızlı art arda basılan oynat/duraklat çift ses üretmez: her oynatma
 *   isteği bir sıra numarası taşır, eskisi geldiğinde yok sayılır.
 */
export default function LessonNarrationPlayer({ lessonSlug, items, onActiveBlockChange, onClose }) {
  const saved = useMemo(
    () => readNarrationProgress(typeof window === 'undefined' ? null : window.sessionStorage, lessonSlug, items.length),
    [items.length, lessonSlug]
  )
  const audioRef = useRef(null)
  const pendingPlayRef = useRef(false)
  const playTokenRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(saved.index)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const [failure, setFailure] = useState(null)
  const [currentTime, setCurrentTime] = useState(saved.currentTime)
  const [duration, setDuration] = useState(0)
  const [rate, setRate] = useState(saved.rate)
  const [showScript, setShowScript] = useState(false)
  const [showParts, setShowParts] = useState(false)
  const activeItem = items[activeIndex] ?? items[0]

  useEffect(() => {
    setActiveIndex(saved.index)
    setCurrentTime(saved.currentTime)
    setRate(saved.rate)
    setPlaying(false)
    setFailure(null)
  }, [lessonSlug, saved.index, saved.currentTime, saved.rate])

  useEffect(() => {
    const node = audioRef.current
    if (!node || !activeItem) return
    node.pause()
    node.playbackRate = rate
    setPlaying(false)
    setLoading(false)
    setFailure(null)
    setDuration(activeItem.durationSeconds ?? 0)

    const resumeAt = activeIndex === saved.index ? saved.currentTime : 0
    setCurrentTime(resumeAt)
    node.load()
  }, [activeIndex, activeItem?.audioUrl, saved.currentTime, saved.index])

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = rate
  }, [rate])

  useEffect(() => {
    onActiveBlockChange?.(playing ? activeItem ?? null : null)
    return () => onActiveBlockChange?.(null)
  }, [activeItem, onActiveBlockChange, playing])

  /* Avatar dahil sonraki katmanlar bu durumu dinleyecek. */
  useEffect(() => {
    publishNarrationState({
      isPlaying: playing,
      lessonSlug,
      sectionId: activeItem?.sectionId ?? null,
      sectionIndex: activeItem?.sectionIndex ?? -1,
      blockId: activeItem?.id ?? null,
      currentTime,
      duration,
      playbackRate: rate,
    })
  }, [activeItem?.id, activeItem?.sectionId, activeItem?.sectionIndex, currentTime, duration, lessonSlug, playing, rate])

  useEffect(() => () => resetNarrationState(), [])

  /* Ortak ses hattı: sayfada ikinci bir ses başlarsa bu durur. */
  useEffect(() => registerAudioElement(audioRef.current), [])

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && audioRef.current && !audioRef.current.paused) audioRef.current.pause()
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
      audioRef.current?.pause()
    }
  }, [])

  const persist = useCallback(
    (nextTime, nextRate, nextIndex) => {
      writeNarrationProgress(window.sessionStorage, lessonSlug, {
        index: nextIndex,
        currentTime: nextTime,
        rate: nextRate,
      })
    },
    [lessonSlug]
  )

  /**
   * Ses açılamadığında sebebini öğrenmek için tek küçük istek atılır.
   * "Ses hazırlanamadı" demek yerine öğrenciye doğru cümleyi söyleyebilmek
   * için gerekli: servis kapalıysa beklemesinin anlamı yok.
   */
  async function describeFailure(url) {
    try {
      const response = await fetch(url, { headers: { Range: 'bytes=0-1' } })
      if (response.status === 503) return 'kapali'
      if (response.status === 429) return 'yogun'
      return 'hata'
    } catch {
      return 'hata'
    }
  }

  async function play() {
    const node = audioRef.current
    if (!node) return
    const token = (playTokenRef.current += 1)
    setFailure(null)
    setLoading(true)
    try {
      await node.play()
      if (token !== playTokenRef.current) return
      setPlaying(true)
    } catch {
      if (token !== playTokenRef.current) return
      setLoading(false)
      setPlaying(false)
      setFailure(await describeFailure(node.currentSrc || node.src))
      setShowScript(true)
    }
  }

  function pause() {
    playTokenRef.current += 1
    audioRef.current?.pause()
  }

  function chooseIndex(nextIndex, autoplay = playing) {
    if (nextIndex < 0 || nextIndex >= items.length) return
    persist(0, rate, nextIndex)
    pendingPlayRef.current = autoplay
    setActiveIndex(nextIndex)
    setCurrentTime(0)
    setShowParts(false)
  }

  function restart() {
    const node = audioRef.current
    if (!node) return
    node.currentTime = 0
    setCurrentTime(0)
    persist(0, rate, activeIndex)
    void play()
  }

  function changeRate(nextRate) {
    const node = audioRef.current
    if (node) node.playbackRate = nextRate
    setRate(nextRate)
    persist(currentTime, nextRate, activeIndex)
  }

  function seek(nextTime) {
    const node = audioRef.current
    if (!node) return
    node.currentTime = nextTime
    setCurrentTime(nextTime)
    persist(nextTime, rate, activeIndex)
  }

  if (!activeItem) return null

  const progressMax = duration || activeItem.durationSeconds || 0

  return (
    <div className="lesson-doc sticky top-[calc(var(--app-header-height)+0.75rem)] z-30 my-6" aria-label="Ders seslendirmesi">
      <div className="lesson-body">
        <div className="lesson-flow">
          <div className="lesson-wide overflow-hidden rounded-panel border border-line bg-surface/95 shadow-card backdrop-blur-md">
            <div className="flex items-start gap-3 px-3.5 py-3 sm:px-4">
              <button
                type="button"
                onClick={playing ? pause : play}
                className="focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-600 text-white hover:bg-brand-700"
                aria-label={playing ? 'Seslendirmeyi duraklat' : currentTime > 0 ? 'Seslendirmeye devam et' : 'Seslendirmeyi oynat'}
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="ms-0.5 h-4 w-4" />}
              </button>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="lesson-eyebrow m-0">
                      AI sesli anlatım · {activeIndex + 1}/{items.length}
                    </p>
                    <p className="m-0 mt-0.5 truncate text-[0.875rem] font-semibold leading-snug text-ink sm:text-[0.9375rem]">
                      {activeItem.label}
                    </p>
                  </div>
                  <button type="button" onClick={onClose} className="focus-ring -me-1 -mt-1 grid h-9 w-9 shrink-0 place-items-center rounded text-ink/45 hover:text-ink" aria-label="Sesli anlatımı kapat">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max={progressMax}
                    step="0.1"
                    value={Math.min(currentTime, progressMax)}
                    onChange={(event) => seek(Number(event.target.value))}
                    disabled={!duration}
                    className="h-1 min-w-0 flex-1 accent-brand-600"
                    aria-label="Seslendirme konumu"
                  />
                  <span className="shrink-0 font-mono text-[0.6875rem] tabular-nums text-ink/45">
                    {formatTime(currentTime)} / {progressMax ? formatTime(progressMax) : '—'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 border-t border-line bg-surface-muted px-3 py-2 text-[0.75rem] sm:px-4">
              <button
                type="button"
                onClick={restart}
                className="focus-ring inline-flex min-h-[2rem] items-center gap-1 rounded-btn px-2 py-1 font-semibold text-ink/65 hover:bg-surface hover:text-ink"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Baştan
              </button>
              <button
                type="button"
                onClick={() => chooseIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="focus-ring inline-flex min-h-[2rem] items-center gap-1 rounded-btn px-2 py-1 font-semibold text-ink/65 hover:bg-surface hover:text-ink disabled:opacity-35"
              >
                <ChevronLeft className="h-3.5 w-3.5" /> Önceki
              </button>
              <button
                type="button"
                onClick={() => chooseIndex(activeIndex + 1)}
                disabled={activeIndex >= items.length - 1}
                className="focus-ring inline-flex min-h-[2rem] items-center gap-1 rounded-btn px-2 py-1 font-semibold text-ink/65 hover:bg-surface hover:text-ink disabled:opacity-35"
              >
                Sonraki <ChevronRight className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setShowParts((open) => !open)}
                aria-expanded={showParts}
                className="focus-ring inline-flex min-h-[2rem] items-center gap-1 rounded-btn px-2 py-1 font-semibold text-ink/65 hover:bg-surface hover:text-ink"
              >
                <List className="h-3.5 w-3.5" /> Bölümler
              </button>
              <button
                type="button"
                onClick={() => setShowScript((open) => !open)}
                aria-expanded={showScript}
                className="focus-ring inline-flex min-h-[2rem] items-center gap-1 rounded-btn px-2 py-1 font-semibold text-ink/65 hover:bg-surface hover:text-ink"
              >
                <FileText className="h-3.5 w-3.5" /> Anlatım metni
              </button>
              <label className="ms-auto inline-flex items-center gap-1.5 text-ink/55">
                Hız
                <select
                  value={rate}
                  onChange={(event) => changeRate(Number(event.target.value))}
                  className="focus-ring min-h-[2rem] rounded-btn border border-line bg-surface px-1.5 py-1 font-semibold text-ink"
                >
                  {SPEEDS.map((speed) => (
                    <option key={speed} value={speed}>
                      {speed}×
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {showParts && (
              <ol className="m-0 max-h-56 list-none overflow-y-auto border-t border-line bg-surface px-2 py-1.5">
                {items.map((item, index) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => chooseIndex(index, playing)}
                      aria-current={index === activeIndex ? 'true' : undefined}
                      className={`focus-ring flex w-full items-baseline gap-2 rounded-btn px-2 py-1.5 text-start text-[0.8125rem] leading-snug ${
                        index === activeIndex ? 'bg-brand-50 font-semibold text-brand-800' : 'text-ink/70 hover:bg-surface-muted'
                      }`}
                    >
                      <span className="font-mono text-[0.6875rem] tabular-nums text-ink/40">{String(index + 1).padStart(2, '0')}</span>
                      <span className="min-w-0 flex-1">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ol>
            )}

            {showScript && (
              <div className="border-t border-line bg-surface px-4 py-3">
                <p className="lesson-eyebrow m-0">Bu bölümde anlatılanlar</p>
                <div className="mt-1.5 max-h-64 overflow-y-auto whitespace-pre-line text-[0.875rem] leading-[1.8] text-ink/75">
                  {activeItem.script}
                </div>
              </div>
            )}

            {loading && !failure && <p className="m-0 border-t border-line px-4 py-2 text-[0.75rem] text-ink/50">Ses hazırlanıyor…</p>}

            {failure && (
              <p className="m-0 border-t border-warning-500/30 bg-warning-50 px-4 py-2 text-[0.8125rem] text-ink/65">
                {failure === 'kapali'
                  ? 'Sesli anlatım bu ders için henüz açılmadı. Anlatımın metnini aşağıdan okuyabilirsin.'
                  : failure === 'yogun'
                    ? 'Ses servisi şu anda yoğun. Birkaç dakika sonra yeniden dene; bu sırada anlatım metnini okuyabilirsin.'
                    : 'Ses şu anda açılamadı. Notu okumaya devam edebilir veya biraz sonra yeniden deneyebilirsin.'}
              </p>
            )}

            <audio
              ref={audioRef}
              src={activeItem.audioUrl}
              preload="none"
              onLoadStart={() => setLoading(true)}
              onCanPlay={(event) => {
                const node = event.currentTarget
                if (currentTime > 0 && node.currentTime === 0 && currentTime < node.duration) node.currentTime = currentTime
                node.playbackRate = rate
                setLoading(false)
                if (pendingPlayRef.current) {
                  pendingPlayRef.current = false
                  void play()
                }
              }}
              onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
              onPlaying={() => {
                setPlaying(true)
                setLoading(false)
              }}
              onPause={(event) => {
                setPlaying(false)
                persist(event.currentTarget.currentTime, rate, activeIndex)
              }}
              onTimeUpdate={(event) => {
                const nextTime = event.currentTarget.currentTime
                setCurrentTime(nextTime)
                persist(nextTime, rate, activeIndex)
              }}
              onEnded={() => {
                if (activeIndex < items.length - 1) chooseIndex(activeIndex + 1, true)
                else {
                  setPlaying(false)
                  persist(0, rate, 0)
                }
              }}
              onError={() => {
                setLoading(false)
                setPlaying(false)
                setShowScript(true)
                const node = audioRef.current
                void describeFailure(node?.currentSrc || node?.src || activeItem.audioUrl).then(setFailure)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
