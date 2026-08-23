import { ArrowRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuroraBackground, Logo } from '../components/ui'
import ProductHero from '../components/landing/product/ProductHero'
import { InteractiveVisualShowcase, NotesShowcase } from '../components/landing/product/LearningJourney'
import QuestionDemoSection from '../components/landing/product/QuestionDemoSection'
import ProductHighlights from '../components/landing/product/ProductHighlights'

const NAV_LINKS = [
  { href: '#notlar', label: 'Notlar' },
  { href: '#etkilesim', label: 'Etkileşimli görseller' },
  { href: '#sorular', label: 'Sorular' },
  { href: '#araclar', label: 'Diğer araçlar' },
]

function ProductNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-sticky border-b border-line/80 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-header max-w-content items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Dr. Koç ana sayfanın başına git" className="focus-ring rounded-xl">
          <Logo />
        </a>

        <nav aria-label="Ana sayfa bölümleri" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-lg px-1 py-2 text-sm font-semibold text-ink/60 transition-colors duration-200 hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/login" className="focus-ring hidden min-h-10 items-center rounded-xl px-4 text-sm font-bold text-ink/70 transition-colors duration-200 hover:bg-surface-sunken hover:text-ink xs:inline-flex">
            Giriş Yap
          </Link>
          <Link to="/register" className="focus-ring inline-flex min-h-10 items-center rounded-xl bg-aurora-gradient px-4 text-sm font-bold text-white shadow-aurora transition-[transform,box-shadow,filter] duration-200 hover:-translate-y-0.5 hover:shadow-aurora-lg hover:brightness-110 active:scale-[0.98] motion-reduce:transform-none">
            Başla
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
            aria-controls="mobile-landing-menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="focus-ring grid h-10 w-10 place-items-center rounded-xl text-ink transition-colors duration-200 hover:bg-surface-sunken lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-landing-menu"
          aria-label="Mobil ana sayfa bölümleri"
          className="animate-slide-down border-t border-line bg-surface motion-reduce:animate-none lg:hidden"
        >
          <div className="grid gap-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="focus-ring flex min-h-11 items-center rounded-xl px-3 text-sm font-bold text-ink/70 hover:bg-surface-sunken hover:text-ink">
                {item.label}
              </a>
            ))}
            <Link to="/login" className="focus-ring flex min-h-11 items-center rounded-xl px-3 text-sm font-bold text-brand-700 hover:bg-brand-500/10 xs:hidden">
              Giriş Yap
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-panel bg-aurora-gradient px-6 py-14 shadow-aurora-lg sm:px-12 sm:py-20">
        <AuroraBackground variant="panel" />
        <div aria-hidden="true" className="absolute inset-0 bg-mesh-aurora opacity-10" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/65">Sıradaki adım</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Çalışma biçimini değiştir.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Notu keşfet, sorunu çöz, gelişimini gör. Öğrenme yolculuğunun tamamı tek bir yerde başlasın.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 xs:flex-row xs:items-center">
            <Link to="/register" className="focus-ring btn-base group min-h-12 bg-white px-7 text-sm text-brand-700 shadow-lg transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-white/95 active:scale-[0.98] motion-reduce:transform-none">
              Hemen Başla
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" />
            </Link>
            <Link to="/login" className="focus-ring btn-base min-h-12 border border-white/25 bg-white/10 px-7 text-sm text-white backdrop-blur-sm transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/15 active:scale-[0.98] motion-reduce:transform-none">
              Hesabım Var
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line bg-surface/70">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Logo size="sm" />
          <p className="mt-3 max-w-md text-xs leading-5 text-ink/55">
            Öğrenci, öğretmen ve veliyi aynı öğrenme yolculuğunda buluşturan eğitim platformu.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-xs font-semibold text-ink/60 sm:flex-row sm:flex-wrap sm:gap-5">
          <a href="mailto:furkan.yazcicek35@icloud.com" className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-lg hover:text-brand-700"><Mail className="h-3.5 w-3.5" /> E-posta</a>
          <a href="tel:+905467911712" className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-lg hover:text-brand-700"><Phone className="h-3.5 w-3.5" /> Telefon</a>
          <span className="inline-flex min-h-10 items-center gap-2"><MapPin className="h-3.5 w-3.5" /> İzmir</span>
          <Link to="/gizlilik" className="focus-ring inline-flex min-h-10 items-center rounded-lg underline decoration-line-strong underline-offset-4 hover:text-brand-700">Gizlilik Politikası</Link>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-[11px] font-medium text-ink/45">
        © {new Date().getFullYear()} Dr. Koç. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}

export default function LandingPageProduct() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <ProductNavbar />
      <main>
        <ProductHero />
        <NotesShowcase />
        <InteractiveVisualShowcase />
        <QuestionDemoSection />
        <ProductHighlights />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
