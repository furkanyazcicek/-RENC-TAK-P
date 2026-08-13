import { useState } from 'react'
import { Eye, GraduationCap, Users } from 'lucide-react'
import { cn } from '../../lib/cn'
import AuroraBackground from '../ui/AuroraBackground'
import { useInView } from './hooks'
import PanelPreview from './PanelPreview'

/**
 * ShowcaseSection — "Platformu üç gözden görün" bölümü.
 * Öğrenci / Veli / Öğretmen sekmeleri arasında geçiş yapılır; her sekme
 * uygulamanın gerçek ekranını taklit eden canlı bir önizleme gösterir.
 */

const TABS = [
  {
    value: 'student',
    label: 'Öğrenci',
    icon: GraduationCap,
    headline: 'Kendi gelişimini rakamlarla gör',
    description:
      'Her denemeden sonra netin nereye gidiyor, hangi derste kaybediyorsun, bu hafta kaç saat çalıştın — hepsi tek ekranda. Grafiklerin üzerine gelerek tek tek denemelerin detayına inebilirsin.',
    points: [
      'Deneme bazında net gelişimi ve ders kırılımı',
      'Günlük çalışma süresi ve çözülen soru takibi',
      'Takıldığın soruyu fotoğrafla gönder, çözümünü al',
    ],
  },
  {
    value: 'parent',
    label: 'Veli',
    icon: Eye,
    headline: 'Sormadan, rahatsız etmeden takip edin',
    description:
      'Veli paneli tamamen gözlemci modunda çalışır: çocuğunuzun çalışma düzenini, deneme sonuçlarını ve konu bazlı ilerlemesini görürsünüz — hiçbir kaydı değiştiremez, sürecin akışını bozmazsınız.',
    points: [
      'Haftalık çalışma düzeni ve süreklilik göstergesi',
      'Hedefe yakınlık oranı ve konu bazlı ilerleme',
      'Sadece görüntüleme — veri değiştirilemez',
    ],
  },
  {
    value: 'teacher',
    label: 'Öğretmen',
    icon: Users,
    headline: 'Tüm sınıfı tek bakışta yönetin',
    description:
      'Hangi öğrenci hızlanmış, hangisi yavaşlamış, kim soru göndermiş — sınıfın nabzı tek ekranda. Bir öğrenciye tıklayıp o öğrencinin tüm geçmişine inebilirsiniz.',
    points: [
      'Öğrenci listesi, çalışma süresi ve eğilim göstergesi',
      'Gelen soruların durum takibi ve yanıtlanması',
      'Ödev atama ve tamamlanma takibi',
    ],
  },
]

export default function ShowcaseSection() {
  const [active, setActive] = useState('student')
  const [ref, inView] = useInView({ threshold: 0.1 })
  const tab = TABS.find((t) => t.value === active) ?? TABS[0]

  return (
    <section
      id="platform"
      ref={ref}
      className="relative overflow-hidden border-t border-line bg-surface/50"
    >
      <AuroraBackground variant="hero" className="opacity-60" />

      <div className="relative z-10 mx-auto max-w-content px-4 sm:px-6 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
            <span className="h-1 w-5 rounded-full bg-aurora-line" aria-hidden="true" />
            Platformdan görüntüler
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
            Aynı veri, üç farklı gözden
          </h2>
          <p className="mt-4 text-base text-ink/60 leading-relaxed">
            Öğrenci çalışır, veli izler, öğretmen yönlendirir. Herkes ihtiyacı olan
            kadarını görür — ne fazlası, ne eksiği.
          </p>
        </div>

        {/* Sekmeler */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            className="card-glass inline-flex gap-1 rounded-full p-1"
          >
            {TABS.map((t) => {
              const Icon = t.icon
              const on = t.value === active
              return (
                <button
                  key={t.value}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  onClick={() => setActive(t.value)}
                  className={cn(
                    'focus-ring flex items-center gap-2 rounded-full px-4 sm:px-6 py-2.5 text-sm font-bold transition-all duration-300',
                    on
                      ? 'bg-aurora-gradient text-white shadow-aurora'
                      : 'text-ink/60 hover:text-ink hover:bg-ink/[0.05]'
                  )}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                  {t.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* İçerik */}
        <div className="mt-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-12 items-center">
          <div key={tab.value} className="animate-fade-in-up">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-tight">
              {tab.headline}
            </h3>
            <p className="mt-4 text-ink/65 leading-relaxed">{tab.description}</p>

            <ul className="mt-7 flex flex-col gap-3.5">
              {tab.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/12 text-brand-600">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                      <path d="M4 12.5l5.5 5.5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-ink/70 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-[11px] font-medium text-ink/65">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse-soft" />
              Grafiklerin üzerine gelerek detayları görebilirsiniz
            </p>
          </div>

          {/* Önizleme — hafif eğik durur, üzerine gelince düzelir */}
          <div
            className={cn(
              'group relative transition-all duration-700 ease-smooth',
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div
              className="absolute -inset-6 rounded-[3rem]"
              style={{
                background:
                  'radial-gradient(circle at 50% 30%, rgb(var(--c-aurora-violet) / 0.32) 0%, rgb(var(--c-aurora-cyan) / 0.16) 45%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              aria-hidden="true"
            />
            <PanelPreview
              key={tab.value}
              variant={tab.value}
              className="relative animate-fade-in transition-transform duration-500 ease-smooth lg:rotate-[1.2deg] lg:group-hover:rotate-0 lg:group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
