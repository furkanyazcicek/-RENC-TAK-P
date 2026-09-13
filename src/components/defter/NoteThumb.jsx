import { useEffect, useRef, useState } from 'react'
import { pageThumbnail } from '../../lib/defter/media'

/**
 * Notun ilk sayfasının küçük önizlemesi.
 *
 * Kart ekrana yaklaşınca üretilir; 80 notluk kütüphanede bütün önizlemeler
 * aynı anda çizilmez. Yeni önizleme hazır olana kadar eskisi görünür kalır.
 */
export default function NoteThumb({ page, assets, cacheKey, width = 440, className = '', eager = false }) {
  const box = useRef(null)
  const [url, setUrl] = useState('')
  // İlk satırlar gözlemciyi beklemez: arka plan sekmesinde açılan kütüphanede de önizleme hazır gelir.
  const [near, setNear] = useState(eager)

  useEffect(() => {
    const el = box.current
    if (eager) return
    if (!el || typeof IntersectionObserver === 'undefined') { setNear(true); return }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setNear(true); observer.disconnect() }
    }, { rootMargin: '300px' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!near || !page) return
    let alive = true
    pageThumbnail(page, assets, { width, key: `${cacheKey}:${width}` })
      .then(next => { if (alive) setUrl(next) })
      .catch(() => { /* önizleme olmazsa boş kâğıt görünür */ })
    return () => { alive = false }
  }, [near, cacheKey, width])

  return <div ref={box} className={`defter-thumb defter-thumb-${page?.paper ?? 'blank'} ${className}`} aria-hidden="true">
    {url && <img src={url} alt="" draggable={false} decoding="async"/>}
  </div>
}
