import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw, X } from 'lucide-react'
import {
  findAdjacentSectionIndex,
  readNarrationProgress,
  writeNarrationProgress,
} from '../../../lib/lessonNarration'

const SPEEDS = [0.75, 1, 1.25, 1.5, 2]

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00'
  const value = Math.max(0, Math.floor(seconds))
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`
}

export default function LessonNarrationPlayer({ lessonSlug, items, onActiveBlockChange, onClose }) {
  const saved = useMemo(
    () => readNarrationProgress(typeof window === 'undefined' ? null : window.sessionStorage, lessonSlug, items.length),
    [items.length, lessonSlug]
  )
  const audioRef = useRef(null)
  const pendingPlayRef = useRef(false)
  const [activeIndex, setActiveIndex] = useState(saved.index)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  const [currentTime, setCurrentTime] = useState(saved.currentTime)
  const [duration, setDuration] = useState(0)
  const [rate, setRate] = useState(saved.rate)
  const activeItem = items[activeIndex] ?? items[0]

  useEffect(() => {
    setActiveIndex(saved.index)
    setCurrentTime(saved.currentTime)
    setRate(saved.rate)
    setPlaying(false)
    setFailed(false)
  }, [lessonSlug, saved.index, saved.currentTime, saved.rate])

  useEffect(() => {
    const node = audioRef.current
    if (!node || !activeItem) return
    node.pause()
    node.playbackRate = rate
    setPlaying(false)
    setLoading(false)
    setFailed(false)
    setDuration(0)

    const resumeAt = activeIndex === saved.index ? saved.currentTime : 0
    setCurrentTime(resumeAt)
    node.load()
  }, [activeIndex, activeItem?.audioUrl, saved.currentTime, saved.index])

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = rate
  }, [rate])

  useEffect(() => {
    onActiveBlockChange?.(playing ? activeItem?.targetBlockId ?? null : null)
    return () => onActiveBlockChange?.(null)
  }, [activeItem?.targetBlockId, onActiveBlockChange, playing])

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

  function persist(nextTime = currentTime, nextRate = rate, nextIndex = activeIndex) {
    writeNarrationProgress(window.sessionStorage, lessonSlug, {
      index: nextIndex,
      currentTime: nextTime,
      rate: nextRate,
    })
  }

  async function play() {
    const node = audioRef.current
    if (!node) return
    setFailed(false)
    setLoading(true)
    try {
      await node.play()
      setPlaying(true)
    } catch {
      setLoading(false)
      setPlaying(false)
      setFailed(true)
    }
  }

  function pause() {
    audioRef.current?.pause()
  }

  function chooseIndex(nextIndex, autoplay = playing) {
    if (nextIndex < 0 || nextIndex >= items.length) return
    persist(0, rate, nextIndex)
    pendingPlayRef.current = autoplay
    setActiveIndex(nextIndex)
    setCurrentTime(0)
  }

  function skipSection(direction) {
    const nextIndex = findAdjacentSectionIndex(items, activeIndex, direction)
    if (nextIndex !== -1) chooseIndex(nextIndex)
  }

  function restart() {
    const node = audioRef.current
    if (!node) return
    node.currentTime = 0
    setCurrentTime(0)
    persist(0)
    void play()
  }

  function changeRate(nextRate) {
    const node = audioRef.current
    if (node) node.playbackRate = nextRate
    setRate(nextRate)
    persist(currentTime, nextRate)
  }

  function seek(nextTime) {
    const node = audioRef.current
    if (!node) return
    node.currentTime = nextTime
    setCurrentTime(nextTime)
    persist(nextTime)
  }

  if (!activeItem) return null

  const previousSection = findAdjacentSectionIndex(items, activeIndex, -1)
  const nextSection = findAdjacentSectionIndex(items, activeIndex, 1)

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
                    <p className="lesson-eyebrow m-0">AI sesli anlatım · Bölüm {activeItem.sectionIndex + 1}</p>
                    <p className="m-0 mt-0.5 truncate text-[0.875rem] font-semibold leading-snug text-ink sm:text-[0.9375rem]">
                      {activeItem.sectionTitle}
                    </p>
                  </div>
                  <button type="button" onClick={onClose} className="focus-ring rounded p-1 text-ink/45 hover:text-ink" aria-label="Sesli anlatımı kapat">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    step="0.1"
                    value={Math.min(currentTime, duration || 0)}
                    onChange={(event) => seek(Number(event.target.value))}
                    disabled={!duration}
                    className="h-1 min-w-0 flex-1 accent-brand-600"
                    aria-label="Seslendirme konumu"
                  />
                  <span className="shrink-0 font-mono text-[0.6875rem] tabular-nums text-ink/45">
                    {formatTime(currentTime)} / {duration ? formatTime(duration) : '—'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 border-t border-line bg-surface-muted px-3 py-2 text-[0.75rem] sm:px-4">
              <button type="button" onClick={restart} className="focus-ring inline-flex items-center gap-1 rounded-btn px-2 py-1 font-semibold text-ink/65 hover:bg-surface hover:text-ink">
                <RotateCcw className="h-3.5 w-3.5" /> Baştan
              </button>
              <button type="button" onClick={() => skipSection(-1)} disabled={previousSection === -1} className="focus-ring inline-flex items-center gap-1 rounded-btn px-2 py-1 font-semibold text-ink/65 hover:bg-surface hover:text-ink disabled:opacity-35">
                <ChevronLeft className="h-3.5 w-3.5" /> Önceki bölüm
              </button>
              <button type="button" onClick={() => skipSection(1)} disabled={nextSection === -1} className="focus-ring inline-flex items-center gap-1 rounded-btn px-2 py-1 font-semibold text-ink/65 hover:bg-surface hover:text-ink disabled:opacity-35">
                Sonraki bölüm <ChevronRight className="h-3.5 w-3.5" />
              </button>
              <label className="ms-auto inline-flex items-center gap-1.5 text-ink/55">
                Hız
                <select value={rate} onChange={(event) => changeRate(Number(event.target.value))} className="focus-ring rounded-btn border border-line bg-surface px-1.5 py-1 font-semibold text-ink">
                  {SPEEDS.map((speed) => <option key={speed} value={speed}>{speed}×</option>)}
                </select>
              </label>
            </div>

            {loading && <p className="m-0 border-t border-line px-4 py-2 text-[0.75rem] text-ink/50">Ses hazırlanıyor…</p>}
            {failed && (
              <p className="m-0 border-t border-warning-500/30 bg-warning-50 px-4 py-2 text-[0.8125rem] text-ink/65">
                Ses şu anda hazırlanamadı. Notu okumaya devam edebilir veya biraz sonra yeniden deneyebilirsin.
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
              onPlaying={() => { setPlaying(true); setLoading(false) }}
              onPause={(event) => { setPlaying(false); persist(event.currentTarget.currentTime) }}
              onTimeUpdate={(event) => {
                const nextTime = event.currentTarget.currentTime
                setCurrentTime(nextTime)
                persist(nextTime)
              }}
              onEnded={() => {
                if (activeIndex < items.length - 1) chooseIndex(activeIndex + 1, true)
                else { setPlaying(false); persist(0, rate, 0) }
              }}
              onError={() => { setLoading(false); setPlaying(false); setFailed(true) }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
