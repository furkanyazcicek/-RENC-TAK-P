import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Calculator,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
  ShieldCheck,
  UserRound,
  Users,
} from 'lucide-react'

import NetTrendChart from '../components/landing/NetTrendChart'
import WeeklyStudyChart from '../components/landing/WeeklyStudyChart'
import SubjectBarChart from '../components/landing/SubjectBarChart'
import StatCounter from '../components/landing/StatCounter'
import ShowcaseSection from '../components/landing/ShowcaseSection'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import LiveDataSection from '../components/landing/LiveDataSection'
import AboutSection from '../components/landing/AboutSection'
import { useCountUp, useInView } from '../components/landing/hooks'
import { AuroraBackground, Logo } from '../components/ui'
import { cn } from '../lib/cn'
import {
  HEADLINE_STATS,
  NET_TREND,
  SUBJECT_NETS,
  WEEKLY_STUDY,
} from '../components/landing/demoData'

/* ==================================================================
   Landing — Aurora Gradient
   ------------------------------------------------------------------
   Sayfa açık zemin üzerine kuruludur; Aurora, arkada duran bir ışık
   atmosferi olarak çalışır. Gradient yalnızca dört yerde görünür:
   hero başlığının vurgu kelimesi, birincil CTA'lar, aktif durumlar ve
   kapanış panelinin zemini. Bu sınır, gradientin "vurgu" olma niteliğini
   korur — her yere konursa hiçbir yeri vurgulamaz.
   ================================================================== */

const NAV_LINKS = [
  { href: '#nasil-calisir', label: 'Nasıl çalışır' },
  { href: '#platform', label: 'Platform' },
  { href: '#veri', label: 'Veri masası' },
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#iletisim', label: 'İletişim' },
]

export function LandingNavbar({ onAbout, onContact }) {
  const compactInfoNavigation = Boolean(onAbout && onContact)
  const visibleLinks = compactInfoNavigation
    ? NAV_LINKS.filter((link) => !['#hakkimda', '#iletisim'].includes(link.href))
    : NAV_LINKS

  return (
    <header className="landing-navbar-glass sticky top-0 z-sticky border-b border-line glass">
      <div className="landing-navbar-inner mx-auto flex h-header max-w-content items-center justify-between px-4 sm:px-6">
        <a href="#top" className="focus-ring rounded-xl">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 md:flex lg:gap-8">
          {visibleLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring relative rounded text-sm font-medium text-ink/60 transition-colors hover:text-ink
                         after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:rounded-full
                         after:bg-aurora-line after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          {compactInfoNavigation && (
            <div className="flex items-center gap-1 border-l border-line pl-3">
              <button
                type="button"
                onClick={onAbout}
                className="focus-ring inline-flex min-h-10 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold text-ink/65 transition-colors hover:bg-surface-sunken hover:text-ink"
              >
                <UserRound className="h-4 w-4" aria-hidden="true" />
                Hakkımda
              </button>
              <button
                type="button"
                onClick={onContact}
                className="focus-ring inline-flex min-h-10 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold text-ink/65 transition-colors hover:bg-surface-sunken hover:text-ink"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                İletişim
              </button>
            </div>
          )}
          <Link
            to="/login"
            className="focus-ring btn-base h-10 bg-aurora-gradient px-5 text-sm text-white shadow-aurora
                       transition-all duration-200 hover:-translate-y-0.5 hover:shadow-aurora-lg hover:brightness-110"
          >
            Giriş Yap
          </Link>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          {compactInfoNavigation && (
            <>
              <button
                type="button"
                onClick={onAbout}
                aria-label="Hakkımda"
                title="Hakkımda"
                className="focus-ring grid h-10 w-10 place-items-center rounded-xl text-ink/65 hover:bg-surface-sunken hover:text-ink"
              >
                <UserRound className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={onContact}
                aria-label="İletişim"
                title="İletişim"
                className="focus-ring grid h-10 w-10 place-items-center rounded-xl text-ink/65 hover:bg-surface-sunken hover:text-ink"
              >
                <MessageCircle className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
              </button>
            </>
          )}
          <Link
            to="/login"
            className="focus-ring btn-base h-9 bg-aurora-gradient px-4 text-sm text-white shadow-aurora"
          >
            Giriş Yap
          </Link>
        </div>
      </div>
    </header>
  )
}

/* ------------------------------------------------------------------
   Hero — jenerik görsel yerine uygulamanın canlı bir kesiti
   ------------------------------------------------------------------ */

/* Metrik renkleri semantik sistemden gelir: mor birincil, camgöbeği
   ilerleme, pembe vurgu. Satır içi hex yok. */
const HERO_STAT_TONES = {
  brand: { bar: 'bg-gradient-to-b from-aurora-purple to-aurora-violet', chip: 'bg-brand-500/12 text-brand-600' },
  aqua: { bar: 'bg-gradient-to-b from-aurora-blue to-aurora-cyan', chip: 'bg-aqua-500/12 text-aqua-700' },
  accent: { bar: 'bg-gradient-to-b from-aurora-pink to-aurora-purple', chip: 'bg-accent-500/12 text-accent-600' },
}

function HeroStat({ label, value, decimals = 0, suffix = '', icon: Icon, tone = 'brand', delta }) {
  const [ref, inView] = useInView()
  const shown = useCountUp(value, { start: inView, decimals, duration: 1200 })
  const t = HERO_STAT_TONES[tone] ?? HERO_STAT_TONES.brand

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-xl border border-line bg-surface p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <span className={cn('absolute bottom-0 left-0 top-0 w-[3px]', t.bar)} aria-hidden="true" />
      <div className="flex items-start justify-between gap-1.5 pl-1.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-ink/55">{label}</span>
        <span
          className={cn(
            'grid h-5 w-5 shrink-0 place-items-center rounded-md transition-transform duration-200 group-hover:scale-110',
            t.chip
          )}
        >
          <Icon className="h-3 w-3" strokeWidth={2.4} />
        </span>
      </div>
      <p className="mt-1 pl-1.5 font-display text-lg font-bold leading-none tabular text-ink">
        {shown}
        <span className="text-[11px] font-semibold text-ink/55">{suffix}</span>
      </p>
      {delta && <p className="mt-0.5 pl-1.5 text-[9px] font-bold text-success-600">{delta}</p>}
    </div>
  )
}

function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[27rem] lg:max-w-none">
      {/* Arkadaki Aurora ışığı */}
      <div
        className="absolute -inset-8 rounded-[4rem] opacity-80"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgb(var(--c-aurora-violet) / 0.35) 0%, rgb(var(--c-aurora-cyan) / 0.18) 45%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        aria-hidden="true"
      />

      <div
        className="landing-hero-preview-panel group relative overflow-hidden rounded-panel border border-white/60 bg-paper shadow-elevated
                   transition-transform duration-500 ease-smooth lg:rotate-[-1.5deg] lg:hover:rotate-0 lg:hover:-translate-y-1"
      >
        {/* Uygulama başlığı */}
        <div className="flex items-center justify-between gap-2 border-b border-line bg-surface px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <Logo size="sm" markOnly />
            <div>
              <p className="font-display text-[11px] font-bold leading-tight text-ink">Analiz</p>
              <p className="text-[9px] leading-tight text-ink/55">Ayşe Y. · 8. sınıf · LGS</p>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-success-500/12 px-1.5 py-0.5 text-[9px] font-bold text-success-700">
            <span className="h-1 w-1 animate-pulse-soft rounded-full bg-success-500" />
            canlı
          </span>
        </div>

        <div className="flex flex-col gap-3 p-3">
          <div className="grid grid-cols-3 gap-2">
            <HeroStat label="Son Net" value={81} icon={Target} tone="brand" delta="↑ 3,0" />
            <HeroStat label="Bu Hafta" value={25} suffix="s" icon={Clock} tone="aqua" delta="↑ 2s 40dk" />
            <HeroStat label="Çözülen" value={1188} icon={CheckCircle2} tone="accent" />
          </div>

          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="mb-2 flex items-baseline justify-between">
              <p className="text-[11px] font-bold text-ink">Deneme Net Gelişimi</p>
              <span className="rounded-full bg-brand-500/12 px-1.5 py-0.5 text-[9px] font-bold text-brand-700">
                LGS
              </span>
            </div>
            <NetTrendChart data={NET_TREND} className="text-ink" />
          </div>

          <div className="grid grid-cols-1 gap-2.5 xs:grid-cols-2">
            <div className="rounded-xl border border-line bg-surface p-3">
              <p className="mb-2.5 text-[11px] font-bold text-ink">Ders Bazlı Net</p>
              <SubjectBarChart data={SUBJECT_NETS.slice(0, 3)} />
            </div>
            <div className="rounded-xl border border-line bg-surface p-3">
              <p className="mb-2 text-[11px] font-bold text-ink">Haftalık Çalışma</p>
              <WeeklyStudyChart data={WEEKLY_STUDY} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const features = [
    { Icon: Target, label: 'Net Bazlı Analiz' },
    { Icon: BarChart3, label: 'Anlık İlerleme Takibi' },
    { Icon: BookOpen, label: 'Ders Notu Kütüphanesi' },
    { Icon: Calculator, label: 'Konu Bazlı Gelişim' },
  ]

  return (
    <section id="top" className="landing-hero-section relative overflow-hidden">
      <AuroraBackground variant="hero" mesh />

      <div className="relative z-10 mx-auto max-w-content px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/15 bg-surface/70 px-3 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              LGS · YKS (TYT/AYT) · KPSS · Tüm Sınıflar
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Başarıya Giden
              <br />
              <span className="text-aurora">Yolu Biliyoruz</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/65 sm:text-lg">
              Ortaokuldan üniversiteye; LGS, YKS ve KPSS'ye hazırlanan her öğrenci ve her ders
              için tek platform. Günlük çalışmandan deneme netlerine, konu bazlı gelişiminden
              ödevlerine kadar tüm sınav stratejini veriye dayalı olarak birlikte yönetelim.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/login"
                className="focus-ring btn-base group bg-aurora-gradient px-8 py-4 text-sm text-white
                           shadow-aurora transition-all duration-300 hover:-translate-y-1 hover:shadow-aurora-lg hover:brightness-110"
              >
                Hedefini Seç
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#platform"
                className="focus-ring btn-base border border-line bg-surface/80 px-8 py-4 text-sm text-ink
                           shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1
                           hover:border-brand-300 hover:shadow-card"
              >
                Platformu Gör
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink/60">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-success-600" />
                Veli için ayrı gözlemci paneli
              </span>
              <span className="flex items-center gap-1.5">
                <MessageCircle className="h-3.5 w-3.5 text-info-600" />
                Öğretmenle doğrudan mesajlaşma
              </span>
            </div>
          </div>

          <HeroPreview />
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-4">
          {features.map(({ Icon, label }) => (
            <div
              key={label}
              className="card-glass flex cursor-default flex-col items-center gap-2 p-4 transition-all duration-300
                         hover:-translate-y-2 hover:border-brand-300/50 hover:shadow-card-hover"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </div>
              <span className="text-center text-xs font-semibold text-ink/70">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Rakam şeridi
   ------------------------------------------------------------------ */

export function StatsStrip() {
  return (
    <section className="relative border-y border-line bg-surface/60">
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {HEADLINE_STATS.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
        <p className="mt-8 text-center text-[11px] text-ink/55">
          Ekranlardaki veriler platformun çalışma biçimini göstermek için hazırlanmış örneklerdir.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   Kapanış çağrısı — sayfanın sonunda tek ve net bir adım.
   Sayfadaki TEK dolu gradient panel burasıdır; bitiş noktasını
   görsel olarak da işaretler.
   ------------------------------------------------------------------ */

export function ClosingCTA() {
  const promises = [
    { Icon: Target, text: 'Hedefine göre kurulmuş takip düzeni' },
    { Icon: BarChart3, text: 'Her denemede ölçülebilir geri bildirim' },
    { Icon: Users, text: 'Öğretmen, öğrenci ve veli aynı tabloda' },
  ]

  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="landing-closing-panel relative mx-auto max-w-5xl overflow-hidden rounded-panel bg-aurora-gradient p-8 shadow-aurora-lg sm:p-14">
        <AuroraBackground variant="panel" />

        {/* Zemine çok hafif doku — düz gradient "yassı" durmasın */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Bir sonraki denemeyi
            <br className="hidden sm:block" />{' '}
            <span className="text-white/85">tesadüfe bırakma</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Bugün girdiğin ilk kayıt, iki hafta sonra bir eğilim çizgisine dönüşür.
            Neyin işe yaradığını tahmin etmek yerine görürsün.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/register"
              className="focus-ring btn-base group bg-white px-8 py-4 text-sm text-brand-700 shadow-lg
                         transition-all duration-300 hover:-translate-y-1 hover:bg-white/95"
            >
              Hemen Başla
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/login"
              className="focus-ring btn-base border border-white/30 bg-white/10 px-8 py-4 text-sm
                         text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              Hesabım var, giriş yap
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {promises.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2.5 rounded-card border border-white/15 bg-white/10 px-4 py-3
                           text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.18]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/15 text-white">
                  <Icon className="h-4 w-4" strokeWidth={2.1} aria-hidden="true" />
                </span>
                <span className="text-xs font-medium leading-snug text-white/85">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   İletişim
   ------------------------------------------------------------------ */

export function ContactSection() {
  const contactItems = [
    { Icon: Mail, label: 'E-posta', value: 'furkan.yazcicek35@icloud.com' },
    { Icon: Phone, label: 'Telefon', value: '+90 5467911712' },
    { Icon: MapPin, label: 'Konum', value: 'İzmir, Türkiye' },
  ]

  return (
    <section id="iletisim" className="border-t border-line bg-surface/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
            <span className="h-1 w-5 rounded-full bg-aurora-line" aria-hidden="true" />
            İletişim
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink">Sorularınız mı var?</h2>
          <p className="mt-3 text-ink/60">
            Koçluk programı, uygunluk durumu veya platform hakkında merak ettiklerinizi aşağıdaki
            kanallardan bana iletebilirsiniz.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {contactItems.map(({ Icon, label, value }) => (
            <div
              key={label}
              className="card-interactive flex flex-col items-center gap-2 p-5 text-center"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide text-ink/55">{label}</span>
              <span className="break-all text-sm font-medium text-ink">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="mailto:furkan.yazcicek35@icloud.com"
            className="focus-ring btn-base h-12 bg-aurora-gradient px-6 text-sm text-white shadow-aurora
                       transition-all duration-200 hover:-translate-y-0.5 hover:shadow-aurora-lg hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Mesaj Gönder
          </a>
        </div>
      </div>
    </section>
  )
}

export function LandingFooter() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-3 px-4 sm:px-6">
        <Logo size="sm" />
        {/* Gizlilik bağlantısı mağaza incelemeleri için gerekli: Play ve
            App Store, politikanın uygulamadan da ulaşılabilir olmasını
            istiyor — yalnızca mağaza kaydındaki URL yetmiyor. */}
        <Link
          to="/gizlilik"
          className="focus-ring rounded text-xs font-semibold text-ink/65 underline underline-offset-4 transition-colors hover:text-brand-700"
        >
          Gizlilik Politikası
        </Link>
        <p className="text-center text-xs text-ink/55">
          © {new Date().getFullYear()} Dr. Koç. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    /* overflow-x-hidden: dekoratif Aurora halkaları kenardan taşıp
       mobilde yatay kaydırma yaratmasın diye */
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <LandingNavbar />
      <HeroSection />
      <StatsStrip />
      <HowItWorksSection />
      <ShowcaseSection />
      <LiveDataSection />
      <AboutSection />
      <ClosingCTA />
      <ContactSection />

      <LandingFooter />
    </div>
  )
}
