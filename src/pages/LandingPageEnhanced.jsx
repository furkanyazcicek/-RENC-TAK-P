import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Eye,
  GraduationCap,
  Mail,
  Menu,
  MessageCircle,
  ShieldCheck,
  UserRound,
  Users,
  X,
} from 'lucide-react'

import PanelPreview from '../components/landing/PanelPreview'
import InteractiveLearningStage from '../components/landing/editorial/InteractiveLearningStage'
import BookHomeHero, { BookExperience } from '../components/landing/book/BookHomeHero'
import BookProductTour from '../components/landing/book/BookProductTour'
import LandingInfoDialogs from '../components/landing/product/LandingInfoDialogs'
import { Logo } from '../components/ui'
import ANASAYFA_ICERIGI from '../content/anasayfa'
import '../styles/anasayfa-editorial.css'
import '../styles/anasayfa-kitap.css'

function EditorialNavbar({ onAbout, onContact }) {
  const [menuAcik, setMenuAcik] = useState(false)
  const ilkBaglantiRef = useRef(null)
  const metinler = ANASAYFA_ICERIGI.navigasyon

  useEffect(() => {
    if (!menuAcik) return undefined
    const oncekiOdak = document.activeElement
    window.requestAnimationFrame(() => ilkBaglantiRef.current?.focus())

    const kapat = (event) => {
      if (event.key === 'Escape') setMenuAcik(false)
    }
    window.addEventListener('keydown', kapat)

    return () => {
      window.removeEventListener('keydown', kapat)
      if (oncekiOdak instanceof HTMLElement) oncekiOdak.focus()
    }
  }, [menuAcik])

  function bilgiAc(tur) {
    setMenuAcik(false)
    if (tur === 'about') onAbout()
    else onContact()
  }

  return (
    <header className="editorial-navbar">
      <div className="editorial-navbar__inner">
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'instant' }) }} className="focus-ring rounded-xl" aria-label="Dr. Koç ana sayfa başlangıcı">
          <Logo tone="light" />
        </a>

        <nav className="editorial-navbar__desktop" aria-label="Ana sayfa bölümleri">
          {metinler.baglantilar.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring">
              {item.etiket}
            </a>
          ))}
          <button type="button" onClick={onAbout} className="focus-ring">
            {metinler.hakkimda}
          </button>
          <button type="button" onClick={onContact} className="focus-ring">
            {metinler.iletisim}
          </button>
        </nav>

        <div className="editorial-navbar__actions">
          <Link to="/login" className="editorial-navbar__login focus-ring">
            {metinler.giris}
            <ArrowRight aria-hidden="true" />
          </Link>
          <button
            type="button"
            aria-label={menuAcik ? metinler.menuKapat : metinler.menuAc}
            aria-expanded={menuAcik}
            aria-controls="anasayfa-mobil-menu"
            onClick={() => setMenuAcik((deger) => !deger)}
            className="editorial-navbar__menu focus-ring"
          >
            {menuAcik ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuAcik && (
        <nav id="anasayfa-mobil-menu" className="editorial-mobile-menu" aria-label="Mobil ana sayfa menüsü">
          <div>
            {metinler.baglantilar.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? ilkBaglantiRef : undefined}
                href={item.href}
                onClick={() => setMenuAcik(false)}
                className="focus-ring"
              >
                <span>0{index + 1}</span>
                {item.etiket}
                <ChevronRight aria-hidden="true" />
              </a>
            ))}
            <button type="button" onClick={() => bilgiAc('about')} className="focus-ring">
              <UserRound aria-hidden="true" />
              {metinler.hakkimda}
            </button>
            <button type="button" onClick={() => bilgiAc('contact')} className="focus-ring">
              <MessageCircle aria-hidden="true" />
              {metinler.iletisim}
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}

function HeroSection() {
  const { hero, sahneler } = ANASAYFA_ICERIGI

  return (
    <>
      <BookHomeHero />
      <BookExperience>
        <InteractiveLearningStage
          sahneler={sahneler}
          baslik={hero.sahneBasligi}
          yardim={hero.sahneYardim}
        />
      </BookExperience>
    </>
  )
}

function TrustSection({ onAbout }) {
  const { guven } = ANASAYFA_ICERIGI
  const [aktifRolId, setAktifRolId] = useState(guven.roller[0]?.id)
  const rolSekmeleri = useRef([])
  const aktifRol = guven.roller.find((rol) => rol.id === aktifRolId) ?? guven.roller[0]
  const rolAyarlari = {
    ogrenci: { ikon: GraduationCap, panel: 'student' },
    ogretmen: { ikon: Users, panel: 'teacher' },
    veli: { ikon: Eye, panel: 'parent' },
  }
  const aktifAyar = rolAyarlari[aktifRol.id] ?? rolAyarlari.ogrenci

  function rolKlavyeSecimi(event, index) {
    const tuslar = ['ArrowLeft', 'ArrowRight', 'Home', 'End']
    if (!tuslar.includes(event.key)) return
    event.preventDefault()

    let yeniIndex = index
    if (event.key === 'ArrowRight') yeniIndex = (index + 1) % guven.roller.length
    if (event.key === 'ArrowLeft') yeniIndex = (index - 1 + guven.roller.length) % guven.roller.length
    if (event.key === 'Home') yeniIndex = 0
    if (event.key === 'End') yeniIndex = guven.roller.length - 1

    const yeniRol = guven.roller[yeniIndex]
    setAktifRolId(yeniRol.id)
    rolSekmeleri.current[yeniIndex]?.focus()
  }

  return (
    <section id="guven" className="editorial-trust" aria-labelledby="guven-basligi">
      <div className="editorial-trust__heading">
        <span>{guven.etiket}</span>
        <h2 id="guven-basligi">{guven.baslik}</h2>
        <p>{guven.aciklama}</p>
      </div>

      <div className="editorial-role-showcase">
        <div className="editorial-role-showcase__bar">
          <div>
            <span><i aria-hidden="true" />{guven.onizlemeEtiketi}</span>
            <p>{guven.onizlemeYardimi}</p>
          </div>

          <div className="editorial-role-tabs" role="tablist" aria-label="Rol görünümü seç">
            {guven.roller.map((rol, index) => {
              const secili = rol.id === aktifRol.id
              const Icon = rolAyarlari[rol.id]?.ikon ?? UserRound

              return (
                <button
                  key={rol.id}
                  ref={(element) => { rolSekmeleri.current[index] = element }}
                  id={`rol-sekmesi-${rol.id}`}
                  type="button"
                  role="tab"
                  aria-selected={secili}
                  aria-controls="rol-onizleme-paneli"
                  tabIndex={secili ? 0 : -1}
                  onClick={() => setAktifRolId(rol.id)}
                  onKeyDown={(event) => rolKlavyeSecimi(event, index)}
                  className="focus-ring"
                >
                  <Icon aria-hidden="true" />
                  {rol.etiket}
                </button>
              )
            })}
          </div>
        </div>

        <div
          id="rol-onizleme-paneli"
          role="tabpanel"
          aria-labelledby={`rol-sekmesi-${aktifRol.id}`}
          className="editorial-role-showcase__body"
        >
          <div className="editorial-role-copy" key={`copy-${aktifRol.id}`}>
            <span>{aktifRol.etiket} görünümü</span>
            <h3>{aktifRol.baslik}</h3>
            <p>{aktifRol.aciklama}</p>
            <ul>
              {aktifRol.ozellikler.map((ozellik) => (
                <li key={ozellik}>
                  <Check aria-hidden="true" />
                  {ozellik}
                </li>
              ))}
            </ul>
            <small>{guven.veriNotu}</small>
          </div>

          <div className="editorial-role-preview" key={`panel-${aktifRol.id}`}>
            <PanelPreview variant={aktifAyar.panel} />
          </div>
        </div>
      </div>

      <div className="editorial-founder">
        <div className="editorial-founder__mark" aria-hidden="true">FY</div>
        <div>
          <span>{guven.kurucuEtiket}</span>
          <h3>{guven.kurucuBaslik}</h3>
          <p>{guven.kurucuAciklama}</p>
        </div>
        <button type="button" onClick={onAbout} className="editorial-founder__link focus-ring">
          Yaklaşımı oku
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

function FinalSection() {
  const { final } = ANASAYFA_ICERIGI

  return (
    <section className="editorial-final">
      <div className="editorial-final__panel">
        <span>{final.etiket}</span>
        <h2>{final.baslik}</h2>
        <p>{final.aciklama}</p>
        <div>
          <Link to={final.birincilCta.hedef} className="editorial-final__primary focus-ring">
            {final.birincilCta.etiket}
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link to={final.ikincilCta.hedef} className="editorial-final__secondary focus-ring">
            {final.ikincilCta.etiket}
          </Link>
        </div>
      </div>
    </section>
  )
}

function EditorialFooter({ onAbout, onContact }) {
  const { footer } = ANASAYFA_ICERIGI

  return (
    <footer className="editorial-footer">
      <div className="editorial-footer__main">
        <div>
          <Logo tone="light" />
          <p>{footer.aciklama}</p>
        </div>
        <nav aria-label="Alt bilgi bağlantıları">
          <button type="button" onClick={onAbout} className="focus-ring">Hakkımda</button>
          <button type="button" onClick={onContact} className="focus-ring">İletişim</button>
          <a href="mailto:furkan.yazcicek35@icloud.com" className="focus-ring">
            <Mail aria-hidden="true" /> E-posta
          </a>
          <Link to="/gizlilik" className="focus-ring">
            <ShieldCheck aria-hidden="true" /> {footer.gizlilik}
          </Link>
        </nav>
      </div>
      <div className="editorial-footer__bottom">
        <span>© {new Date().getFullYear()} {footer.telif}</span>
        <span>İzmir · Türkiye</span>
      </div>
    </footer>
  )
}

export default function LandingPageEnhanced() {
  const [aktifBilgi, setAktifBilgi] = useState(null)

  return (
    <div className="editorial-home editorial-home--book">
      <a href="#ana-icerik" className="editorial-skip-link focus-ring">Ana içeriğe geç</a>
      <EditorialNavbar
        onAbout={() => setAktifBilgi('about')}
        onContact={() => setAktifBilgi('contact')}
      />
      <main id="ana-icerik">
        <HeroSection />
        <BookProductTour />
        <TrustSection onAbout={() => setAktifBilgi('about')} />
        <FinalSection />
      </main>
      <EditorialFooter
        onAbout={() => setAktifBilgi('about')}
        onContact={() => setAktifBilgi('contact')}
      />
      <LandingInfoDialogs activeDialog={aktifBilgi} onClose={() => setAktifBilgi(null)} />
    </div>
  )
}
