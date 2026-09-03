import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Mouse } from 'lucide-react'
import { Link } from 'react-router-dom'
import ANASAYFA_ICERIGI from '../../../content/anasayfa'
import { chapterAt, chapterProgress, clamp } from './bookModel'
import { createBookRenderer } from './bookRenderer'

const copy = ANASAYFA_ICERIGI.kitap

export default function BookHomeHero() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const stageRef = useRef(null)
  const progressRef = useRef(0)
  const reducedRef = useRef(false)
  const [active, setActive] = useState(-1)
  const [fallback, setFallback] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const stage = stageRef.current
    const canvas = canvasRef.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0, disposed = false, renderer, current = 0, target = 0, dirty = true
    let width = stage.clientWidth, height = stage.clientHeight
    let lastActive = -1
    const synchronizePreference = () => {
      reducedRef.current = preference.matches
      setReduced(preference.matches)
      measure()
    }
    const render = () => {
      frame = 0
      if (disposed || !renderer) return
      current = reducedRef.current ? 0 : current + (target - current) * 0.23
      if (Math.abs(target - current) < 0.0004) current = target
      const start = performance.now()
      renderer.draw(current, width, height, window.devicePixelRatio || 1)
      if (import.meta.env.DEV) canvas.dataset.renderMs = (performance.now() - start).toFixed(1)
      dirty = false
      progressRef.current = current
      section.style.setProperty('--book-progress', String(current))
      const nextActive = current < 0.16 ? -1 : chapterAt(current)
      if (nextActive !== lastActive) { lastActive = nextActive; setActive(nextActive) }
      if (!reducedRef.current && current !== target) frame = requestAnimationFrame(render)
    }
    const requestDraw = () => { if (!frame && !disposed) frame = requestAnimationFrame(render) }
    const measure = () => {
      const nextWidth = stage.clientWidth, nextHeight = stage.clientHeight
      dirty ||= width !== nextWidth || height !== nextHeight
      width = nextWidth; height = nextHeight
      const stickyHeight = section.querySelector('.book-home__sticky')?.clientHeight || innerHeight - 73
      const distance = Math.max(1, section.offsetHeight - stickyHeight)
      // Native scrolling is never cancelled or trapped.
      target = reducedRef.current ? 0 : clamp((73 - section.getBoundingClientRect().top) / distance)
      if (dirty || target !== current) requestDraw()
    }
    const initialize = (cloth) => {
      if (disposed) return
      try {
        renderer = createBookRenderer(canvas, copy, cloth)
        if (!renderer) { setFallback(true); return }
        dirty = true
        measure()
      } catch { setFallback(true) }
    }
    initialize(null)
    const cloth = new Image()
    cloth.onload = () => initialize(cloth)
    cloth.src = '/images/landing/book-cloth-navy.jpg'
    document.fonts?.ready.then(() => { if (!disposed) initialize(cloth.complete && cloth.naturalWidth ? cloth : null) })
    const resize = new ResizeObserver(measure)
    resize.observe(stage)
    synchronizePreference()
    window.addEventListener('scroll', measure, { passive: true })
    preference.addEventListener('change', synchronizePreference)
    return () => {
      disposed = true; cancelAnimationFrame(frame); resize.disconnect()
      window.removeEventListener('scroll', measure)
      preference.removeEventListener('change', synchronizePreference)
      cloth.onload = null
    }
  }, [])

  function goToChapter(index) {
    if (reducedRef.current || fallback) { goToExperience(); return }
    const section = sectionRef.current
    const sticky = section.querySelector('.book-home__sticky')
    const top = window.scrollY + section.getBoundingClientRect().top - 73
    if (import.meta.env.DEV) section.dataset.requestedChapter = String(index)
    // Scroll instantly to the stable chapter position; the renderer supplies
    // the eased page turn, avoiding two competing scroll/animation easings.
    window.scrollTo({ top: top + (section.offsetHeight - sticky.clientHeight) * chapterProgress(index), behavior: 'instant' })
  }

  function goToExperience(event) {
    event?.preventDefault()
    const destination = document.getElementById('kitap-deneyimi')
    // The skip action must move keyboard focus, not just the viewport.
    destination?.querySelector('h2')?.focus({ preventScroll: true })
    destination?.scrollIntoView({ behavior: reducedRef.current ? 'instant' : 'smooth', block: 'start' })
  }

  return (
    <section ref={sectionRef} id="top" className={`book-home${reduced || fallback ? ' book-home--still' : ''}`} aria-labelledby="kitap-baslik" data-chapter={active}>
      <div className="book-home__sticky">
        <div className="book-home__overline">
          <span>{copy.ustYazi}</span>
          <a href="#kitap-deneyimi" onClick={goToExperience} className="book-home__skip focus-ring">{copy.gec}<ArrowRight aria-hidden="true" /></a>
        </div>
        <h1 id="kitap-baslik" className="sr-only">{copy.baslik.join(' ')}</h1>
        <p className="sr-only">{copy.aciklama} Sayfaları kaydırarak veya bölüm düğmeleriyle keşfedebilirsin.</p>

        <div className="book-home__scene" ref={stageRef}>
          <div className="book-home__desk-detail" aria-hidden="true">
            <svg className="book-home__branch" viewBox="0 0 210 300" fill="none">
              <path d="M-20 284C40 237 22 129 142 3M23 196C80 200 123 156 157 137M45 143C19 125 14 92 4 76" stroke="#646342" strokeWidth="1.3" />
              <g fill="#424d32" stroke="#69704a" strokeWidth=".65">
                <path d="M35 220C62 200 70 213 78 225C56 237 43 232 35 220Z" /><path d="M29 196C13 174 0 170 0 167C-4 190 7 201 29 196Z" />
                <path d="M46 158C48 129 65 120 74 119C76 140 64 155 46 158Z" /><path d="M64 113C42 109 40 86 41 76C66 86 68 103 64 113Z" />
                <path d="M91 71C89 43 109 34 117 33C119 56 108 70 91 71Z" /><path d="M117 35C115 12 127 4 142 3C140 23 132 36 117 35Z" />
                <path d="M68 191C77 167 92 169 103 173C95 194 83 196 68 191Z" /><path d="M97 178C119 177 132 189 134 199C112 205 100 195 97 178Z" />
                <path d="M130 155C133 132 147 126 159 130C155 150 142 160 130 155Z" />
              </g>
            </svg>
            <span className="book-home__pencil" />
            <span className="book-home__note"><i /> <i /> <i /></span>
          </div>
          <canvas ref={canvasRef} className="book-home__canvas" aria-hidden="true" />
          {fallback && <div className="book-home__fallback" aria-hidden="true"><span>DRKOÇ</span><strong>{copy.baslik[0]}<br />{copy.baslik[1]}</strong><small>ETKİLEŞİMLİ ÖĞRENME</small></div>}
          <div className="book-home__margin-note" aria-hidden="true"><span>01 — 05</span><i />Birlikte anlam kazanır.</div>
        </div>

        <div className="book-home__bottom">
          {active < 0 ? (
            <div className="book-home__invitation">
              <p>{copy.aciklama}</p>
              <div>
                <button type="button" className="book-home__open focus-ring" onClick={() => goToChapter(0)}>{copy.ac}<ArrowDown aria-hidden="true" /></button>
                <span className="book-home__scroll-hint"><Mouse aria-hidden="true" />{reduced ? 'Hareket azaltılmış görünüm' : copy.kaydir}</span>
              </div>
            </div>
          ) : (
            <div className="book-home__reading">
              <div className="book-home__caption" aria-live="polite" aria-atomic="true"><span>0{active + 1} / 05</span><strong>{copy.bolumler[active].ad}</strong><p>{copy.bolumler[active].baslik.replace('\n', ' ')}</p><span className="sr-only">{copy.bolumler[active].aciklama.replace('\n', ' ')} {copy.bolumler[active].alt}</span></div>
              <nav className="book-home__chapters" aria-label="Kitabın bölümleri">
                {copy.bolumler.map((chapter, index) => <button key={chapter.id} type="button" aria-current={index === active ? 'step' : undefined} onClick={() => goToChapter(index)} className="focus-ring"><span>0{index + 1}</span>{chapter.ad}</button>)}
              </nav>
              <div className="book-home__arrows">
                <button type="button" aria-label="Önceki bölüm" disabled={active === 0} onClick={() => goToChapter(active - 1)} className="focus-ring"><ChevronLeft aria-hidden="true" /></button>
                <button type="button" aria-label={active === 4 ? 'Canlı deneyime geç' : 'Sonraki bölüm'} onClick={() => active === 4 ? goToExperience() : goToChapter(active + 1)} className="focus-ring"><ChevronRight aria-hidden="true" /></button>
              </div>
            </div>
          )}
        </div>
        <div className="book-home__progress" aria-hidden="true"><span /></div>
      </div>
    </section>
  )
}

export function BookExperience({ children }) {
  return (
    <section className="book-experience" id="kitap-deneyimi" aria-labelledby="kitap-deneyim-baslik">
      <div className="book-experience__paper">
        <div className="book-experience__running-head"><span>DRKOÇ / ÖĞRENMENİN SAYFALARI</span><span>06 — SENİN SAYFAN</span></div>
        <header className="book-experience__intro">
          <span>SON SAYFA, YENİ BİR BAŞLANGIÇ.</span>
          <h2 id="kitap-deneyim-baslik" tabIndex={-1}>{copy.sonBaslik}</h2>
          <p>{copy.sonAciklama}</p>
        </header>
        {children}
        <div className="book-experience__footer"><span>Keşfetmek için hesap gerekmez. Bu tanıtım verilerini kaydetmez.</span><Link to="/register" className="editorial-primary-cta focus-ring">Öğrenmeye başla<ArrowRight aria-hidden="true" /></Link></div>
      </div>
    </section>
  )
}
