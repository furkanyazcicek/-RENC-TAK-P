import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Compass,
  ClipboardList,
  FileText,
  GraduationCap,
  MessageCircle,
  Quote,
  ShieldCheck,
  Target,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import Reveal from './Reveal'
import { useCountUp, useInView } from './hooks'

/* ------------------------------------------------------------------
   İçerik
   ------------------------------------------------------------------ */

const CREDENTIALS = [
  { icon: GraduationCap, label: 'Tıp fakültesi son sınıf' },
  { icon: Target, label: 'LGS · TYT/AYT · KPSS' },
  { icon: MessageCircle, label: 'Birebir & grup koçluğu' },
]

const STEPS = [
  {
    icon: Compass,
    title: 'Hedefi netleştiriyoruz',
    text: 'Hangi sınav, hangi puan, ne kadar zaman — yolculuğa nereye gittiğini bilerek başlıyoruz.',
    tone: '#7C3AED',
  },
  {
    icon: ClipboardList,
    title: 'Her günü kaydediyoruz',
    text: 'Çalışılan konu, süre ve çözülen soru her gün sisteme işleniyor. Tahmin değil, kayıt.',
    tone: '#0891B2',
  },
  {
    icon: BarChart3,
    title: 'Veriyi birlikte okuyoruz',
    text: 'Denemeler ve günlük kayıtlar üst üste bindiğinde hangi konunun geride kaldığı kendini gösteriyor.',
    tone: '#DB2777',
  },
  {
    icon: Target,
    title: 'Rotayı güncelliyoruz',
    text: 'Haftalık plan, ödevler ve soru desteğiyle yön düzeltiliyor. Sonra baştan — her hafta.',
    tone: '#059669',
  },
]

const FEATURES = [
  {
    icon: BarChart3,
    tone: '#7C3AED',
    title: 'Detaylı Analiz ve Takip',
    text: 'Günlük çalışma sürelerini, çözülen soru adetlerini ve başarı oranlarını grafiklerle detaylıca analiz ediyor, gelişimi anlık olarak izliyoruz.',
  },
  {
    icon: FileText,
    tone: '#0891B2',
    title: 'Soru Çözüm Desteği',
    text: 'Öğrencinin takıldığı soruları fotoğrafla gönderebildiği, üzerinden birlikte geçtiğimiz akışkan bir soru havuzu sunuyoruz.',
  },
  {
    icon: CheckCircle2,
    tone: '#D97706',
    title: 'Ödev ve Görev Yönetimi',
    text: 'Disiplini elden bırakmamak adına ödevleri dijital ortamda atıyor, tamamlanma durumlarını yakından takip ediyoruz.',
  },
  {
    icon: BookOpen,
    tone: '#DB2777',
    title: 'Ders Kütüphanesi',
    text: 'İhtiyaç duyulan çalışma notlarına ve kaynaklara tek tıkla ulaşılabilecek, sınav türüne göre düzenlenmiş bir kütüphane.',
  },
  {
    icon: MessageCircle,
    tone: '#059669',
    title: 'Doğrudan İletişim',
    text: 'Kafaya takılan bir soruyu sormak veya anlık destek almak için öğretmen-öğrenci mesajlaşma altyapısı her zaman açık.',
  },
  {
    icon: ShieldCheck,
    tone: '#E11D48',
    title: 'Veli Bilgilendirme Paneli',
    text: 'Gözlemci modundaki veli paneliyle aileler çalışma geçmişini, netleri ve gelişim grafiklerini şeffaf biçimde takip edebiliyor.',
  },
]

const NUMBERS = [
  { value: 7, suffix: '', label: 'yıllık koçluk deneyimi' },
  { value: 4, suffix: '', label: 'sınav türünde eğitmenlik' },
  { value: 3, suffix: '', label: 'ayrı panel: öğrenci, veli, öğretmen' },
]

/* ------------------------------------------------------------------
   Parçalar
   ------------------------------------------------------------------ */

function ProfileCard() {
  return (
    <div className="relative shrink-0">
      {/* Arkadaki yumuşak ışık */}
      <div
        className="hidden"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgb(var(--c-aurora-violet) / 0.35), rgb(var(--c-aurora-cyan) / 0.15) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative grid h-40 w-40 place-items-center overflow-hidden rounded-panel bg-brand-950 shadow-card sm:h-44 sm:w-44">
        {/* İnce ızgara dokusu */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
          aria-hidden="true"
        />
        <span className="relative font-display text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
          FY
        </span>
      </div>

      {/* Alt köşeye oturan rozet */}
      <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 rounded-full bg-surface border border-line shadow-card px-3 py-1.5">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-500 text-white">
          <GraduationCap className="h-3 w-3" strokeWidth={2.4} aria-hidden="true" />
        </span>
        <span className="text-[11px] font-bold text-ink">Eğitim Koçu</span>
      </div>
    </div>
  )
}

function StepCard({ step, index }) {
  const Icon = step.icon
  return (
    <div className="group relative flex-1 rounded-card border border-line bg-surface p-5 transition-colors duration-200 hover:border-line-strong">
      {/* Üstte, hover'da beliren renk çizgisi */}
      <span
        className="absolute inset-x-5 top-0 h-0.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: step.tone }}
        aria-hidden="true"
      />

      <div className="flex items-center gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${step.tone}14`, color: step.tone }}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} aria-hidden="true" />
        </span>
        <span
          className="font-display text-3xl font-extrabold leading-none tabular transition-colors duration-300"
          style={{ color: `${step.tone}26` }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h4 className="mt-4 font-display font-bold text-ink">{step.title}</h4>
      <p className="mt-1.5 text-sm text-ink/65 leading-relaxed">{step.text}</p>
    </div>
  )
}

function FeatureCard({ feature }) {
  const Icon = feature.icon
  return (
    <div className="group relative overflow-hidden rounded-card border border-line bg-surface p-5 transition-colors duration-200 hover:border-line-strong">
      {/* Hover'da köşeden yayılan renk */}
      <span
        className="hidden"
        style={{ background: feature.tone }}
        aria-hidden="true"
      />

      <span
        className="relative grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${feature.tone}14`, color: feature.tone }}
      >
        <Icon className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
      </span>

      <h4 className="relative mt-4 font-display font-bold text-ink">{feature.title}</h4>
      <p className="relative mt-1.5 text-sm text-ink/65 leading-relaxed">{feature.text}</p>
    </div>
  )
}

function NumberTile({ item, delay }) {
  const [ref, inView] = useInView()
  const shown = useCountUp(item.value, { start: inView, duration: 1100 })

  return (
    <Reveal delay={delay} className="flex items-center gap-3.5">
      <span
        ref={ref}
        className="font-display text-4xl font-extrabold tabular leading-none bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-transparent"
      >
        {shown}
        {item.suffix}
      </span>
      <span className="text-sm text-ink/65 leading-snug max-w-[11rem]">{item.label}</span>
    </Reveal>
  )
}

/* ------------------------------------------------------------------
   Bölüm
   ------------------------------------------------------------------ */

export default function AboutSection() {
  return (
    <section id="hakkimda" className="relative border-t border-line bg-surface/50">
      {/* Bölüm başında çok hafif Aurora ışığı — sayfanın atmosferini sürdürür.
          (Burada eskiden koyu bölümden açığa geçiş için siyah bir örtü vardı;
          artık üstteki bölüm de açık olduğu için gereksiz.) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{
          background:
            'radial-gradient(ellipse 60% 100% at 50% 0%, rgb(var(--c-aurora-violet) / 0.12), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pt-20 sm:pt-24 pb-20 sm:pb-28">
        {/* --- Profil --- */}
        <Reveal className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
          <ProfileCard />

          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
              <span className="h-1 w-5 rounded-full bg-aurora-line" aria-hidden="true" />
              Hakkımda
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
              Merhaba, ben Furkan Talha Yazçiçek
            </h2>
            <p className="mt-4 text-ink/65 leading-relaxed">
              Tıp fakültesi son sınıf öğrencisi ve yıllardır eğitim koçluğu yapan bir eğitmen
              olarak, sınav sürecinin sadece akademik bir yarıştan ibaret olmadığını biliyorum;
              bu strateji, motivasyon ve doğru takip gerektiren kişisel bir yolculuk. Kendi
              sınav tecrübelerimden ve tıp eğitiminin kazandırdığı analitik bakıştan yola
              çıkarak, öğrencilerimin bu maratonda yalnız hissetmemesi için{' '}
              <span className="font-bold text-brand-600">Dr. Koç</span> platformunu hayata
              geçirdim.
            </p>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
              {CREDENTIALS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink/70 shadow-xs"
                >
                  <Icon className="h-3.5 w-3.5 text-brand-500" strokeWidth={2.2} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* --- Alıntı / yaklaşım --- */}
        <Reveal delay={100} className="mt-14">
          <figure className="relative overflow-hidden rounded-card border border-brand-100 bg-brand-50/60 p-6 sm:p-8">
            <span
              className="absolute right-5 top-4 text-brand-200"
              aria-hidden="true"
            >
              <Quote className="h-12 w-12" strokeWidth={1.5} />
            </span>
            <span className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-brand-500" aria-hidden="true" />

            <blockquote className="relative pl-4 sm:pl-5 max-w-3xl">
              <p className="font-display text-lg sm:text-xl font-bold text-ink leading-snug">
                Öğrencilerimizi sadece rakamlarla değil, bir bütün olarak ele alıyoruz.
              </p>
              <p className="mt-3 text-sm sm:text-base text-ink/60 leading-relaxed">
                Klasik koçluk anlayışının aksine, öğrencileri düz verilerden ibaret görmüyoruz.
                Ruh hâlini, çalışma temposunu ve eksik kaldıkları noktaları anlamlı bir bütünlük
                içinde inceliyor, başarıyı tesadüfe bırakmıyoruz. Bu platform sayesinde süreç
                tamamen şeffaf, ölçülebilir ve interaktif ilerliyor.
              </p>
            </blockquote>
          </figure>
        </Reveal>

        {/* --- Süreç --- */}
        <div className="mt-20">
          <Reveal className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
              Nasıl çalışıyoruz
            </span>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink">
              Dört adımda dönen bir çark
            </h3>
            <p className="mt-3 text-ink/65 leading-relaxed">
              Koçluk tek seferlik bir görüşme değil; her hafta yeniden dönen bir döngü.
            </p>
          </Reveal>

          <div className="relative mt-10">
            {/* Adımları birleştiren kesikli çizgi */}
            <div
              className="hidden lg:block absolute left-[12%] right-[12%] top-[3.25rem] border-t-2 border-dashed border-brand-200"
              aria-hidden="true"
            />

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 90} className="flex">
                  <StepCard step={step} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* --- Neler sunuyoruz --- */}
        <div className="mt-20">
          <Reveal className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
              Platformda neler var
            </span>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink">
              Sürecin her parçası için bir araç
            </h3>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90} className="flex">
                <FeatureCard feature={f} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* --- Rakamlar --- */}
        <div className="mt-16 rounded-card border border-line bg-surface p-6 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-4">
            {NUMBERS.map((item, i) => (
              <NumberTile key={item.label} item={item} delay={i * 90} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
