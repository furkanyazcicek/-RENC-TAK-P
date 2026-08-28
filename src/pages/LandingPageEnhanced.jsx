import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Mail,
  Menu,
  MessageCircle,
  ShieldCheck,
  UserRound,
  X,
} from 'lucide-react'

import InteractiveLearningStage from '../components/landing/editorial/InteractiveLearningStage'
import LandingInfoDialogs from '../components/landing/product/LandingInfoDialogs'
import { Logo } from '../components/ui'
import ANASAYFA_ICERIGI from '../content/anasayfa'
import '../styles/anasayfa-editorial.css'

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
        <a href="#top" className="focus-ring rounded-xl" aria-label="Dr. Koç ana sayfa başlangıcı">
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
    <section id="top" className="editorial-hero">
      <div className="editorial-hero__atmosphere" aria-hidden="true">
        <span className="editorial-hero__orb editorial-hero__orb--one" />
        <span className="editorial-hero__orb editorial-hero__orb--two" />
        <span className="editorial-hero__grid" />
      </div>

      <div className="editorial-hero__inner">
        <div className="editorial-hero__copy">
          <span className="editorial-eyebrow">
            <i aria-hidden="true" />
            {hero.etiket}
          </span>
          <h1>{hero.slogan}</h1>
          <p>{hero.aciklama}</p>

          <div className="editorial-hero__ctas">
            <Link to={hero.birincilCta.hedef} className="editorial-primary-cta focus-ring">
              {hero.birincilCta.etiket}
              <ArrowRight aria-hidden="true" />
            </Link>
            <a href={hero.ikincilCta.hedef} className="editorial-secondary-cta focus-ring">
              {hero.ikincilCta.etiket}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <ul className="editorial-hero__notes">
            {hero.guvenNotlari.map((not) => (
              <li key={not}>
                <Check aria-hidden="true" />
                {not}
              </li>
            ))}
          </ul>
        </div>

        <InteractiveLearningStage
          sahneler={sahneler}
          baslik={hero.sahneBasligi}
          yardim={hero.sahneYardim}
        />
      </div>

      <noscript>
        <div className="editorial-noscript">
          <strong>DRKOÇ öğrenme araçları</strong>
          <p>Atlaslar, etkileşimli ders notları, soru çözümü ve kişisel çalışma rotası aynı platformda buluşur.</p>
        </div>
      </noscript>
    </section>
  )
}

function ValueSection() {
  const { deger } = ANASAYFA_ICERIGI

  return (
    <section className="editorial-value" aria-labelledby="deger-basligi">
      <div className="editorial-section-intro">
        <span>{deger.etiket}</span>
        <h2 id="deger-basligi">{deger.baslik}</h2>
        <p>{deger.aciklama}</p>
      </div>

      <div className="editorial-matches">
        <div className="editorial-matches__head" aria-hidden="true">
          <span>İhtiyaç</span>
          <span>Etkileşim</span>
          <span>Kavrayış</span>
        </div>
        {deger.eslesmeler.map((item) => (
          <article key={item.sira}>
            <span className="editorial-match-number">{item.sira}</span>
            <p>{item.ihtiyac}</p>
            <div>
              <ArrowRight aria-hidden="true" />
              <p>{item.cozum}</p>
            </div>
            <strong>{item.sonuc}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}

function FlowSection() {
  const { akis } = ANASAYFA_ICERIGI

  return (
    <section id="nasil-calisir" className="editorial-flow" aria-labelledby="akis-basligi">
      <div className="editorial-flow__inner">
        <div className="editorial-flow__heading">
          <span>{akis.etiket}</span>
          <h2 id="akis-basligi">{akis.baslik}</h2>
        </div>

        <ol className="editorial-flow__steps">
          {akis.adimlar.map((adim) => (
            <li key={adim.sira}>
              <div>
                <span>{adim.sira}</span>
                <small>{adim.etiket}</small>
              </div>
              <h3>{adim.baslik}</h3>
              <p>{adim.aciklama}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function TrustSection({ onAbout }) {
  const { guven } = ANASAYFA_ICERIGI

  return (
    <section id="guven" className="editorial-trust" aria-labelledby="guven-basligi">
      <div className="editorial-trust__heading">
        <span>{guven.etiket}</span>
        <h2 id="guven-basligi">{guven.baslik}</h2>
        <p>{guven.aciklama}</p>
      </div>

      <div className="editorial-roles">
        {guven.roller.map((rol, index) => (
          <article key={rol.id}>
            <span>0{index + 1}</span>
            <small>{rol.etiket}</small>
            <h3>{rol.baslik}</h3>
            <p>{rol.aciklama}</p>
          </article>
        ))}
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
    <div className="editorial-home">
      <a href="#ana-icerik" className="editorial-skip-link focus-ring">Ana içeriğe geç</a>
      <EditorialNavbar
        onAbout={() => setAktifBilgi('about')}
        onContact={() => setAktifBilgi('contact')}
      />
      <main id="ana-icerik">
        <HeroSection />
        <ValueSection />
        <FlowSection />
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
