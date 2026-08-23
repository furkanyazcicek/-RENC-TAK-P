import { useEffect, useRef } from 'react'
import { cn } from '../../../lib/cn'

function lowPowerDevice() {
  if (typeof navigator === 'undefined') return false
  const lowMemory = navigator.deviceMemory !== undefined && navigator.deviceMemory <= 2
  const fewCoresWithoutMemorySignal = navigator.deviceMemory === undefined
    && navigator.hardwareConcurrency !== undefined
    && navigator.hardwareConcurrency <= 4
  return lowMemory || fewCoresWithoutMemorySignal
}

/**
 * Kaydırma ve işaretçi hareketini CSS değişkenlerine dönüştüren hafif sahne.
 * React durumu güncellenmez; böylece sayfa her kaydırma karesinde yeniden çizilmez.
 */
export default function DepthScene({
  children,
  className,
  variant = 'default',
  foreground,
  pointer = false,
  intensity = 1,
}) {
  const sceneRef = useRef(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene || typeof window === 'undefined') return undefined

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || lowPowerDevice()) return undefined

    const finePointer = pointer
      && window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
    let visible = true
    let frame = null

    const writeScrollDepth = () => {
      frame = null
      if (!visible) return

      const rect = scene.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const distance = viewportHeight + rect.height
      const progress = Math.max(-1, Math.min(1, (viewportHeight / 2 - (rect.top + rect.height / 2)) / distance))

      scene.style.setProperty('--depth-bg-y', `${(progress * 34 * intensity).toFixed(2)}px`)
      scene.style.setProperty('--depth-content-y', `${(progress * -10 * intensity).toFixed(2)}px`)
      scene.style.setProperty('--depth-fg-y', `${(progress * -28 * intensity).toFixed(2)}px`)
      scene.style.setProperty('--depth-scale', `${(1 + Math.abs(progress) * 0.008 * intensity).toFixed(4)}`)
    }

    const scheduleScrollDepth = () => {
      if (frame === null) frame = window.requestAnimationFrame(writeScrollDepth)
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) scheduleScrollDepth()
    }, { rootMargin: '20% 0px' })

    const writePointerDepth = (event) => {
      const rect = scene.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 2
      const y = ((event.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2
      scene.style.setProperty('--depth-pointer-x', `${(x * 7 * intensity).toFixed(2)}px`)
      scene.style.setProperty('--depth-pointer-y', `${(y * 5 * intensity).toFixed(2)}px`)
    }

    const resetPointerDepth = () => {
      scene.style.setProperty('--depth-pointer-x', '0px')
      scene.style.setProperty('--depth-pointer-y', '0px')
    }

    observer.observe(scene)
    window.addEventListener('scroll', scheduleScrollDepth, { passive: true })
    window.addEventListener('resize', scheduleScrollDepth, { passive: true })
    if (finePointer) {
      scene.addEventListener('pointermove', writePointerDepth, { passive: true })
      scene.addEventListener('pointerleave', resetPointerDepth)
    }
    scheduleScrollDepth()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', scheduleScrollDepth)
      window.removeEventListener('resize', scheduleScrollDepth)
      if (finePointer) {
        scene.removeEventListener('pointermove', writePointerDepth)
        scene.removeEventListener('pointerleave', resetPointerDepth)
      }
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [intensity, pointer])

  return (
    <div
      ref={sceneRef}
      className={cn('depth-scene', `depth-scene--${variant}`, className)}
    >
      <div className="depth-scene__background" data-depth="background" aria-hidden="true">
        <span className="depth-orb depth-orb--one" />
        <span className="depth-orb depth-orb--two" />
        <span className="depth-grid" />
      </div>
      <div className="depth-scene__content" data-depth="content">
        {children}
      </div>
      {foreground && (
        <div className="depth-scene__foreground" data-depth="foreground" aria-hidden="true">
          {foreground}
        </div>
      )}
    </div>
  )
}
