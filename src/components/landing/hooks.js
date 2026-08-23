import { useEffect, useRef, useState } from 'react'

/** Kullanıcı "hareketi azalt" dediyse tüm animasyonları kapatırız. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  return reduced
}

/**
 * Bir öğe ekrana girdiğinde true döner — grafikler ancak görünürken çizilsin diye.
 * once=true ise bir kez tetiklenir, kullanıcı yukarı kaydırınca tekrar oynamaz.
 *
 * Emniyet ağı: IntersectionObserver desteklenmiyorsa ya da herhangi bir
 * sebeple tetiklenmezse `fallbackMs` sonunda yine de görünür sayılır.
 * Böylece en kötü ihtimalle animasyon oynamaz — grafik ASLA boş kalmaz.
 */
export function useInView({ threshold = 0.25, once = true, fallbackMs = 900 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )

    observer.observe(el)

    const timer = window.setTimeout(() => {
      setInView((current) => {
        if (!current) observer.disconnect()
        return true
      })
    }, fallbackMs)

    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
    }
  }, [threshold, once, fallbackMs])

  return [ref, inView]
}

/**
 * Sayıyı 0'dan hedefe doğru sayar (easeOutCubic).
 * decimals > 0 ise ondalıklı gösterir; Türkçe biçimde virgüllü döner.
 */
export function useCountUp(target, { start = false, duration = 1400, decimals = 0 } = {}) {
  const reduced = usePrefersReducedMotion()
  const [value, setValue] = useState(reduced ? target : 0)
  const frame = useRef(null)

  useEffect(() => {
    if (!start) return
    if (reduced) {
      setValue(target)
      return
    }

    const t0 = performance.now()

    function tick(now) {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [target, start, duration, reduced])

  return value.toLocaleString('tr-TR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}
