import { Link } from 'react-router-dom'
import {
  BarChart3,
  BookOpen,
  Calculator,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
} from 'lucide-react'

function LandingNavbar() {
  return (
    <header className="sticky top-0 z-20 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/70 border-b border-ink/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center text-white shadow-sm">
            <GraduationCap className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-ink">Dr. Koç</span>
        </a>

        <nav className="hidden sm:flex items-center gap-7">
          <a href="#hakkimda" className="text-sm font-medium text-ink/60 hover:text-brand-600 transition-colors">
            Hakkımda
          </a>
          <a href="#iletisim" className="text-sm font-medium text-ink/60 hover:text-brand-600 transition-colors">
            İletişim
          </a>
          <Link
            to="/login"
            className="focus-ring rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 transition-colors"
          >
            Giriş Yap
          </Link>
        </nav>

        <Link
          to="/login"
          className="focus-ring sm:hidden rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm"
        >
          Giriş Yap
        </Link>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-paper to-paper -z-10" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-28 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold px-3 py-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          LGS · YKS (TYT/AYT) · KPSS
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-ink leading-[1.1]">
          Profesyonel YKS ve
          <br />
          <span className="text-brand-600">Matematik Koçluğu</span>
        </h1>

        <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-ink/60">
          Günlük çalışmandan deneme netlerine, konu bazlı gelişiminden ödevlerine kadar her şeyi
          tek platformda takip ediyoruz — hedefine düzenli ve veriye dayalı adımlarla ulaş.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/login"
            className="focus-ring rounded-xl bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-elevated hover:bg-brand-600 transition-colors"
          >
            Hemen Başla
          </Link>
          <a
            href="#hakkimda"
            className="focus-ring rounded-xl bg-white border border-ink/10 px-7 py-3.5 text-sm font-semibold text-ink/70 hover:bg-ink/5 transition-colors"
          >
            Daha Fazla Bilgi
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { Icon: Target, label: 'Net Bazlı Analiz' },
            { Icon: BarChart3, label: 'Anlık İlerleme Takibi' },
            { Icon: BookOpen, label: 'Ders Notu Kütüphanesi' },
            { Icon: Calculator, label: 'Konu Bazlı Gelişim' },
          ].map(({ Icon, label }) => (
            <div key={label} className="rounded-xl2 bg-white shadow-card border border-ink/5 p-4 flex flex-col items-center gap-2">
              <Icon className="h-5 w-5 text-brand-600" strokeWidth={2} />
              <span className="text-xs font-semibold text-ink/60 text-center">{label}</span>
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
          <h2 className="mt-2 text-3xl font-display font-bold text-ink">Merhaba, ben Furkan Talha Yazçiçek</h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            {/* Yer tutucu tanıtım metni — kendi biyografinizle değiştirin. */}
            Merhaba, ben Furkan Talha Yazçiçek. Lise ve ortaokul müfredatına yönelik verdiğim özel matematik dersleriyle bugüne kadar birçok öğrencinin zorlu sınav sürecini başarı hikayesine dönüştürmesine rehberlik ettim. Yıllar içindeki tecrübelerim bana şunu gösterdi: Kalıcı başarı sadece masada saatlerce ders çalışmaktan değil; doğru planlama, veriye dayalı takip ve güçlü bir psikolojik dayanıklılıktan geçiyor.

Öğrencilerimin potansiyellerini en üst düzeye çıkarmak amacıyla kurduğum Dr. Koç platformu, işte bu vizyonun dijital bir yansımasıdır. Biz burada sadece matematik soruları çözmüyor; çalışma sürelerini analiz ediyor, branş denemelerindeki netlere göre eksikleri nokta atışı tespit ediyor ve hedefe giden yolu birlikte inşa ediyoruz. Geleceğinizi şansa değil, doğru yönlendirmeye emanet etmek istiyorsanız; doğru yerdesiniz. Başarıya giden bu yolda yol arkadaşınız olmaktan mutluluk duyacağım..
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-sm text-ink/60">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              6 yıllık özel ders ve koçluk deneyimi
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
