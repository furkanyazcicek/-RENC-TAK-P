import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, Maximize2, Minus, Plus, RotateCcw, X } from 'lucide-react'
import { cn } from '../lib/cn'

/**
 * ImageLightbox — görseli tam ekran açan, yakınlaştırılabilir katman.
 *
 * NEDEN BU KADAR İŞ VAR: soru fotoğrafları telefon kamerasıyla çekiliyor;
 * genelde dikey, uzun ve küçük yazılı oluyor. Eski sürüm görseli yalnızca
 * ekrana sığdırıyordu (`object-contain`) — sığdırınca da soru metni
 * okunamayacak kadar küçülüyordu ve yakınlaştırma yoktu. Artık:
 *
 *   • tekerlek / iki parmak → yakınlaştır-uzaklaştır (imlecin olduğu noktadan)
 *   • sürükle               → yakınlaştırılmışken gezdir
 *   • çift tıklama          → sığdır ↔ 2x arasında geçiş
 *   • +/-/0 tuşları         → klavyeyle aynı işlemler
 *   • ← → tuşları           → görseller arası geçiş (soru ↔ çözüm)
 *
 * `createPortal` ile <body> altına basılır: transform/filter taşıyan bir
 * üst öğe, içindeki `position: fixed` elemanlar için yeni sarmalayıcı blok
 * oluşturur ve katman ekrana değil o öğeye göre konumlanırdı.
 *
 * Kullanım:
 *   <ImageLightbox src={url} onClose={…} />
 *   <ImageLightbox items={[{src, label}, …]} index={0} onClose={…} />
 */

const MIN_SCALE = 1
const MAX_SCALE = 6

export default function ImageLightbox({ src, alt = 'Görsel', items, index = 0, onClose }) {
  // Tek görsel de çok görsel de aynı yoldan geçsin.
  const list = items?.length ? items : src ? [{ src, label: alt }] : []
  const [current, setCurrent] = useState(Math.min(index, Math.max(list.length - 1, 0)))
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const dragRef = useRef(null)
  const pinchRef = useRef(null)
  const frameRef = useRef(null)

  const reset = useCallback(() => {
    setScale(1)
    setOffset({ x: 0, y: 0 })
  }, [])

  // Görsel değişince yakınlaştırma sıfırlanır — yoksa yeni görsel
  // öncekinin kaydırma konumunda, ekran dışında açılıyor.
  useEffect(() => {
    reset()
  }, [current, reset])

  const go = useCallback(
    (step) => {
      if (list.length < 2) return
      setCurrent((c) => (c + step + list.length) % list.length)
    },
    [list.length]
  )

  const zoomBy = useCallback((factor, origin) => {
    setScale((prev) => {
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev * factor))
      if (next === prev) return prev
      // İmleç/parmak konumunu sabit tutarak yakınlaştır: aksi halde
      // görüntü hep merkeze kaçar ve istenen yer kadraj dışında kalır.
      if (origin && frameRef.current) {
        const rect = frameRef.current.getBoundingClientRect()
        const cx = origin.x - (rect.left + rect.width / 2)
        const cy = origin.y - (rect.top + rect.height / 2)
        setOffset((o) => ({
          x: cx - ((cx - o.x) * next) / prev,
          y: cy - ((cy - o.y) * next) / prev,
        }))
      }
      if (next === MIN_SCALE) setOffset({ x: 0, y: 0 })
      return next
    })
  }, [])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === '+' || e.key === '=') zoomBy(1.3)
      else if (e.key === '-') zoomBy(1 / 1.3)
      else if (e.key === '0') reset()
    }
    document.addEventListener('keydown', handleKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose, go, zoomBy, reset])

  // Tekerlek olayı pasif olmayan dinleyici ister; React'in onWheel'i
  // bazı tarayıcılarda passive kaydedilip preventDefault'u yok sayıyor.
  useEffect(() => {
    const node = frameRef.current
    if (!node) return undefined
    function onWheel(e) {
      e.preventDefault()
      zoomBy(e.deltaY < 0 ? 1.12 : 1 / 1.12, { x: e.clientX, y: e.clientY })
    }
    node.addEventListener('wheel', onWheel, { passive: false })
    return () => node.removeEventListener('wheel', onWheel)
  }, [zoomBy])

  if (!list.length) return null
  const item = list[current]

  /* ---- Fare / dokunmatik ---- */

  function handlePointerDown(e) {
    if (scale <= 1) return
    dragRef.current = { x: e.clientX - offset.x, y: e.clientY - offset.y }
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  function handlePointerMove(e) {
    if (!dragRef.current) return
    setOffset({ x: e.clientX - dragRef.current.x, y: e.clientY - dragRef.current.y })
  }

  function handlePointerUp() {
    dragRef.current = null
  }

  function distance(touches) {
    const [a, b] = touches
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY)
  }

  function handleTouchStart(e) {
    if (e.touches.length === 2) {
      pinchRef.current = { start: distance(e.touches), scale }
    }
  }

  function handleTouchMove(e) {
    if (e.touches.length === 2 && pinchRef.current) {
      e.preventDefault()
      const ratio = distance(e.touches) / pinchRef.current.start
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, pinchRef.current.scale * ratio))
      setScale(next)
      if (next === MIN_SCALE) setOffset({ x: 0, y: 0 })
    }
  }

  function handleTouchEnd(e) {
    if (e.touches.length < 2) pinchRef.current = null
  }

  const zoomed = scale > 1

  return createPortal(
    <div
      className="fixed inset-0 z-modal flex flex-col bg-ink/90 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={item.label ?? alt}
    >
      {/* ---------- Üst çubuk ---------- */}
      <div className="flex shrink-0 items-center justify-between gap-3 px-4 pt-safe-top">
        <div className="flex min-w-0 items-center gap-2 py-3">
          {item.label && (
            <span className="truncate rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              {item.label}
            </span>
          )}
          {list.length > 1 && (
            <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-2xs font-bold tabular text-white/80">
              {current + 1} / {list.length}
            </span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 py-3">
          <LightboxButton onClick={() => zoomBy(1 / 1.4)} label="Uzaklaştır" disabled={scale <= MIN_SCALE}>
            <Minus className="h-4 w-4" strokeWidth={2.4} />
          </LightboxButton>
          <span className="w-12 select-none text-center text-xs font-bold tabular text-white/80">
            %{Math.round(scale * 100)}
          </span>
          <LightboxButton onClick={() => zoomBy(1.4)} label="Yakınlaştır" disabled={scale >= MAX_SCALE}>
            <Plus className="h-4 w-4" strokeWidth={2.4} />
          </LightboxButton>
          <LightboxButton onClick={reset} label="Ekrana sığdır" disabled={!zoomed}>
            <RotateCcw className="h-4 w-4" strokeWidth={2.2} />
          </LightboxButton>
          <LightboxButton onClick={onClose} label="Kapat">
            <X className="h-5 w-5" strokeWidth={2.2} />
          </LightboxButton>
        </div>
      </div>

      {/* ---------- Görsel alanı ----------
          Boş alana tıklamak kapatır; görselin kendisi olayı yutar. */}
      <div
        ref={frameRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
        onDoubleClick={(e) => {
          if (zoomed) reset()
          else zoomBy(2.2, { x: e.clientX, y: e.clientY })
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={cn(
          'relative flex min-h-0 flex-1 items-center justify-center overflow-hidden select-none px-2 sm:px-4',
          zoomed ? 'cursor-grab active:cursor-grabbing touch-none' : 'cursor-zoom-in'
        )}
      >
        <img
          src={item.src}
          alt={item.label ?? alt}
          draggable={false}
          className="max-h-full max-w-full rounded-card object-contain shadow-elevated"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transition: dragRef.current || pinchRef.current ? 'none' : 'transform .18s ease-out',
            willChange: 'transform',
          }}
        />

        {list.length > 1 && (
          <>
            <LightboxArrow side="left" onClick={() => go(-1)} />
            <LightboxArrow side="right" onClick={() => go(1)} />
          </>
        )}
      </div>

      {/* ---------- Alt ipucu ---------- */}
      <div className="shrink-0 px-4 pb-safe-bottom">
        <p className="py-3 text-center text-2xs text-white/55">
          <Maximize2 className="mr-1 inline h-3 w-3" aria-hidden="true" />
          Çift tıkla ya da tekerlekle yakınlaştır · yakınlaştırınca sürükleyerek gez
          {list.length > 1 && ' · ok tuşlarıyla soru ve çözüm arasında geç'}
        </p>
      </div>
    </div>,
    document.body
  )
}

function LightboxButton({ onClick, label, disabled, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white
                 transition-colors hover:bg-white/20 disabled:opacity-35 disabled:hover:bg-white/10"
    >
      {children}
    </button>
  )
}

function LightboxArrow({ side, onClick }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Önceki görsel' : 'Sonraki görsel'}
      className={cn(
        'focus-ring absolute top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full',
        'bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25',
        side === 'left' ? 'left-2 sm:left-4' : 'right-2 sm:right-4'
      )}
    >
      <Icon className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
    </button>
  )
}
