import { ArrowRight, BookOpen, Check, FlaskConical, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AuroraBackground } from '../../ui'

function LessonWindow() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-aurora-soft opacity-80 blur-aurora motion-safe:animate-aurora-pulse"
      />

      <div className="relative overflow-hidden rounded-panel border border-white/70 bg-surface/95 shadow-elevated backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/10 text-brand-700 ring-1 ring-inset ring-brand-500/15">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold text-ink">Canlılar Dünyası</p>
              <p className="text-[10px] font-medium text-ink/55">Biyoloji · Etkileşimli ders notu</p>
            </div>
          </div>
          <span className="rounded-full bg-aqua-500/10 px-2.5 py-1 text-[10px] font-bold text-aqua-700 ring-1 ring-inset ring-aqua-500/15">
            %68 tamamlandı
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-[1fr_11rem] sm:p-5">
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-600">
              <span className="h-px w-5 bg-brand-400" />
              Hücre ve yapısı
            </div>
            <h2 className="font-display text-xl font-extrabold leading-tight text-ink sm:text-2xl">
              Hücre, yaşayan bir sistemdir.
            </h2>
            <p className="mt-3 text-xs leading-5 text-ink/65 sm:text-sm sm:leading-6">
              Organeller tek başına değil, enerji ve madde akışı içinde birlikte çalışır.
              Bir yapıya dokun; görevini ve diğer yapılarla bağını gör.
            </p>

            <div className="mt-4 rounded-xl bg-brand-500/[0.07] p-3 ring-1 ring-inset ring-brand-500/10">
              <p className="text-[11px] font-bold text-brand-700">Akılda kalsın</p>
              <p className="mt-1 text-xs leading-5 text-ink/65">
                Mitokondri yalnızca enerji üretmez; hücrenin ihtiyacına göre üretim hızını da ayarlar.
              </p>
            </div>
          </div>

          <div className="relative min-h-44 overflow-hidden rounded-2xl bg-surface-sunken p-3 ring-1 ring-inset ring-line">
            <div aria-hidden="true" className="absolute inset-0 bg-mesh-aurora opacity-60" />
            <div className="relative flex h-full min-h-36 items-center justify-center">
              <div className="relative h-28 w-36 rounded-[48%] border-2 border-brand-300 bg-surface/80 shadow-card">
                <div className="absolute left-5 top-7 h-10 w-10 rounded-full bg-brand-500/15 ring-1 ring-brand-500/30" />
                <div className="absolute bottom-5 right-5 h-6 w-12 rotate-[-18deg] rounded-full border-2 border-aqua-500/50 bg-aqua-500/10" />
                <span className="absolute right-2 top-1 grid h-6 w-6 place-items-center rounded-full bg-brand-600 text-[10px] font-black text-white shadow-aurora">1</span>
                <span className="absolute -bottom-1 left-1/2 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full bg-info-600 text-[10px] font-black text-white">2</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-line bg-surface-muted/70 px-4 py-3 text-[10px] font-semibold text-ink/55 sm:px-5">
          <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success-600" /> Okuma</span>
          <span className="inline-flex items-center gap-1.5"><FlaskConical className="h-3.5 w-3.5 text-brand-600" /> Etkileşim</span>
          <span className="ml-auto tabular">6 dk</span>
        </div>
      </div>
    </div>
  )
}

export default function ProductHero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20 lg:min-h-[calc(100vh-4.25rem)] lg:pb-24 lg:pt-24">
      <AuroraBackground variant="hero" mesh />

      <div className="relative z-10 mx-auto grid max-w-content items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-surface/70 px-3 py-1.5 text-xs font-bold text-brand-700 shadow-xs backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Öğrenmenin yeni çalışma alanı
          </span>

          <h1 className="mt-7 font-display text-[clamp(2.75rem,7vw,5.8rem)] font-extrabold leading-[0.96] tracking-[-0.055em] text-ink">
            Notu okuma.
            <span className="mt-2 block text-aurora">İçine gir.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-ink/65 sm:text-lg sm:leading-8 lg:mx-0">
            Ders notlarını keşfet, görsellerin içindeki bağlantılara dokun ve öğrendiğini
            gerçek sorularla hemen sınamaya başla. Takip, koçluk ve içerik tek yerde.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 xs:flex-row xs:items-center lg:justify-start">
            <Link
              to="/register"
              className="focus-ring btn-base group min-h-12 bg-aurora-gradient px-7 text-sm text-white shadow-aurora transition-[transform,box-shadow,filter] duration-200 hover:-translate-y-0.5 hover:shadow-aurora-lg hover:brightness-110 active:scale-[0.98] motion-reduce:transform-none"
            >
              Ücretsiz Başla
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </Link>
            <a
              href="#notlar"
              className="focus-ring btn-base min-h-12 border border-line-strong bg-surface/75 px-7 text-sm text-ink shadow-xs backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card active:scale-[0.98] motion-reduce:transform-none"
            >
              Deneyimi Gör
            </a>
          </div>

          <p className="mt-6 text-xs font-medium text-ink/55">
            LGS · TYT · AYT · KPSS ve okul dersleri için
          </p>
        </div>

        <LessonWindow />
      </div>
    </section>
  )
}
