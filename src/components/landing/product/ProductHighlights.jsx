import { ArrowUpRight, Bot, ChartNoAxesCombined, Map, MessageCircleQuestion, Users } from 'lucide-react'

const FEATURES = [
  {
    title: 'Yapay zekâ ile soru çözümü',
    text: 'Sorunu yükle; çözüm adımlarını ve düşünme yolunu birlikte incele.',
    Icon: Bot,
    tone: 'brand',
  },
  {
    title: 'Tarih Atlası',
    text: 'Dönemleri, siyasi sınırları ve önemli noktaları harita üzerinde keşfet.',
    Icon: Map,
    tone: 'aqua',
  },
  {
    title: 'Gelişim takibi',
    text: 'Deneme sonuçlarını ve konu bazlı ilerlemeyi tek bakışta gör.',
    Icon: ChartNoAxesCombined,
    tone: 'accent',
  },
  {
    title: 'Koçluk ağı',
    text: 'Öğrenci, öğretmen ve veli aynı süreci kendi ekranından takip etsin.',
    Icon: Users,
    tone: 'info',
  },
]

const TONES = {
  brand: 'bg-brand-500/10 text-brand-700 ring-brand-500/15',
  aqua: 'bg-aqua-500/10 text-aqua-700 ring-aqua-500/15',
  accent: 'bg-accent-500/10 text-accent-700 ring-accent-500/15',
  info: 'bg-info-500/10 text-info-700 ring-info-500/15',
}

export default function ProductHighlights() {
  return (
    <section id="araclar" className="border-y border-line bg-surface-muted/60 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-600">Çalışma alanın</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
            Her araç, aynı hedefe bağlı.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/60 sm:text-lg sm:leading-8">
            Öğrenme, soru çözme, takip ve iletişim birbirinden kopuk kalmaz. Dr. Koç bütün süreci tek yerde birleştirir.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16">
          {FEATURES.map(({ title, text, Icon, tone }, index) => (
            <article
              key={title}
              className={`group min-w-0 rounded-panel border border-line bg-surface p-6 shadow-xs transition-[transform,box-shadow,border-color] duration-250 hover:-translate-y-1 hover:border-brand-300/60 hover:shadow-card motion-reduce:transform-none sm:p-8 ${index === 0 ? 'sm:col-span-2 sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6' : ''}`}
            >
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1 ring-inset ${TONES[tone]}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className={index === 0 ? 'mt-5 sm:mt-0' : 'mt-6'}>
                <h3 className="font-display text-xl font-extrabold text-ink sm:text-2xl">{title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-ink/60">{text}</p>
              </div>
              <ArrowUpRight className={`${index === 0 ? 'mt-5 sm:mt-0' : 'mt-6'} h-5 w-5 text-ink/25 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600 motion-reduce:transform-none`} aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs font-medium text-ink/50">
          <MessageCircleQuestion className="h-4 w-4" aria-hidden="true" />
          Yalnızca platformda çalışan gerçek özellikler gösterilir.
        </div>
      </div>
    </section>
  )
}
