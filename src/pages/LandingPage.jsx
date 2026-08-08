import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Calculator,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'

function LandingNavbar() {
  return (
    <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-violet-700 grid place-items-center text-white shadow-sm">
            <GraduationCap className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">Dr. Koç</span>
        </a>

        <nav className="hidden sm:flex items-center gap-7">
          <a href="#hakkimda" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
            Hakkımda
          </a>
          <a href="#iletisim" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
            İletişim
          </a>
          <Link
            to="/login"
            className="focus-ring rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-sm hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all"
          >
            Giriş Yap
          </Link>
        </nav>

        <Link
          to="/login"
          className="focus-ring sm:hidden rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-sm"
        >
          Giriş Yap
        </Link>
      </div>
    </header>
  )
}

function GlassBadge({ Icon, iconBg, iconColor, label, value, className }) {
  return (
    <div
      className={`absolute rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl px-4 py-3 flex items-center gap-2.5 ${className}`}
    >
      <div className={`h-8 w-8 rounded-xl grid place-items-center flex-shrink-0 ${iconBg}`}>
        <Icon className={`h-4 w-4 ${iconColor}`} strokeWidth={2.2} />
      </div>
      <div>
        <p className="text-[10px] font-semibold text-white/40 uppercase tracking-wide">{label}</p>
        <p className="text-sm font-bold text-white">{value}</p>
      </div>
    </div>
  )
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md aspect-square">
      {/* Panelin arkasından süzülen ışık (glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[110%] w-[110%] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.35),_transparent_65%)] blur-2xl" />

      {/* Ana cam panel */}
      <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/15 shadow-2xl overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative h-full grid place-items-center">
          <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-brand-400 to-violet-600 shadow-[0_0_40px_rgba(139,92,246,0.5)] grid place-items-center">
            <GraduationCap className="h-12 w-12 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Yüzen cam (glassmorphism) rozetler */}
      <GlassBadge
        Icon={TrendingUp}
        iconBg="bg-emerald-400/15"
        iconColor="text-emerald-400"
        label="Net Artışı"
        value="+18.5"
        className="-left-2 top-8 rotate-[-4deg]"
      />
      <GlassBadge
        Icon={CheckCircle2}
        iconBg="bg-blue-400/15"
        iconColor="text-blue-400"
        label="LGS Denemesi"
        value="Tamamlandı"
        className="-right-2 top-1/2 -translate-y-1/2 rotate-[3deg]"
      />
      <GlassBadge
        Icon={Target}
        iconBg="bg-amber-400/15"
        iconColor="text-amber-400"
        label="Hedef Başarı"
        value="%92"
        className="left-4 -bottom-2 rotate-[2deg]"
      />
    </div>
  )
}

function HeroSection() {
  const features = [
    { Icon: Target, label: 'Net Bazlı Analiz' },
    { Icon: BarChart3, label: 'Anlık İlerleme Takibi' },
    { Icon: BookOpen, label: 'Ders Notu Kütüphanesi' },
    { Icon: Calculator, label: 'Konu Bazlı Gelişim' },
  ]

  return (
    <section id="top" className="relative overflow-hidden bg-slate-950">
      {/* Derinlikli, asimetrik radial-gradient aydınlatmalar */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_10%,_rgba(99,102,241,0.28),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_85%_85%,_rgba(251,191,36,0.18),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_0%,_rgba(139,92,246,0.15),_transparent_65%)]" />
      {/* İnce ızgara (grid) deseni */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-10 items-center">
          {/* SOL: Başlık, açıklama, butonlar */}
          <div className="text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-semibold px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              LGS · YKS (TYT/AYT) · KPSS · Tüm Sınıflar
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
              Başarıya Giden
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Yolu Biliyoruz
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base sm:text-lg text-gray-300 leading-relaxed">
              Ortaokuldan üniversiteye; LGS, YKS ve KPSS'ye hazırlanan her öğrenci ve her ders
              için tek platform. Günlük çalışmandan deneme netlerine, konu bazlı gelişiminden
              ödevlerine kadar tüm sınav stratejini veriye dayalı olarak birlikte yönetelim.
            </p>

            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <Link
                to="/login"
                className="focus-ring group inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:bg-amber-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300"
              >
                Hedefini Seç
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#hakkimda"
                className="focus-ring rounded-full bg-white/5 border border-white/15 px-8 py-4 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                Daha Fazla Bilgi
              </a>
            </div>
          </div>

          {/* SAĞ: Görsel yer tutucu (3D illüstrasyon + glow) */}
          <HeroIllustration />
        </div>

        {/* Glassmorphism özellik kartları */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {features.map(({ Icon, label }) => (
            <div
              key={label}
              className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4 flex flex-col items-center gap-2 hover:-translate-y-2 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
            >
              <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">
                <Icon className="h-4 w-4 text-amber-300" strokeWidth={2} />
              </div>
              <span className="text-xs font-semibold text-white/70 text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="hakkimda" className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28">
      <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
        <div className="mx-auto md:mx-0 h-44 w-44 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 border border-brand-100 grid place-items-center">
          <GraduationCap className="h-16 w-16 text-brand-500" strokeWidth={1.5} />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">Hakkımda</span>
          <h2 className="mt-2 text-3xl font-display font-bold text-ink">Merhaba, ben [Öğretmen Adı]</h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            {/* Yer tutucu tanıtım metni — kendi biyografinizle değiştirin. */}
            Yıllardır LGS, YKS ve KPSS'ye hazırlanan öğrencilere matematik ve geometri koçluğu
            yapıyorum. Amacım sadece konu anlatmak değil; her öğrencinin çalışma düzenini,
            eksiklerini ve gelişimini veriye dayalı olarak takip edip ona özel bir yol haritası
            çıkarmak. Bu platform da tam olarak bunun için: günlük çalışmalarını, deneme
            sonuçlarını ve konu bazlı gelişimini tek yerden birlikte takip ediyoruz.
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-sm text-ink/60">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              [X] yıllık özel ders ve koçluk deneyimi
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              LGS, TYT/AYT ve KPSS Matematik-Geometri uzmanlığı
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Birebir ve grup koçluk seçenekleri
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const contactItems = [
    { Icon: Mail, label: 'E-posta', value: 'ornek@drkoc.com' },
    { Icon: Phone, label: 'Telefon', value: '+90 5XX XXX XX XX' },
    { Icon: MapPin, label: 'Konum', value: 'İstanbul, Türkiye' },
  ]

  return (
    <section id="iletisim" className="bg-white border-t border-ink/[0.06]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">İletişim</span>
          <h2 className="mt-2 text-3xl font-display font-bold text-ink">Sorularınız mı var?</h2>
          <p className="mt-3 text-ink/60">
            Koçluk programı, uygunluk durumu veya platform hakkında merak ettiklerinizi
            aşağıdaki kanallardan bana iletebilirsiniz.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactItems.map(({ Icon, label, value }) => (
            <div key={label} className="rounded-xl2 bg-paper border border-ink/5 p-5 flex flex-col items-center gap-2 text-center">
              <div className="h-10 w-10 rounded-xl bg-brand-50 grid place-items-center">
                <Icon className="h-5 w-5 text-brand-600" strokeWidth={2} />
              </div>
              <span className="text-xs font-semibold text-ink/40 uppercase tracking-wide">{label}</span>
              <span className="text-sm font-medium text-ink">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="mailto:ornek@drkoc.com"
            className="focus-ring inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Mesaj Gönder
          </a>
        </div>
      </div>
    </section>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-paper">
      <LandingNavbar />
      <HeroSection />
      <AboutSection />
      <ContactSection />

      <footer className="border-t border-ink/[0.06] py-8">
        <p className="text-center text-xs text-ink/30">
          © {new Date().getFullYear()} Dr. Koç. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  )
}
