import { BookOpen, ClipboardList, Crown, Library as LibraryIcon, Map as MapIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell, Button } from '../components/ui'
import { DashboardHero, Panel } from '../components/dashboard'

const libraries = [
  {
    title: 'Konu Kütüphanesi',
    description: 'Konu anlatımları, görsel ders notları ve etkileşimli öğrenme içerikleri',
    to: '/kutuphane/notlar',
    action: 'Notlara Git',
    Icon: BookOpen,
    tone: 'brand',
  },
  {
    title: 'Soru Kütüphanesi',
    description: 'Konu bazlı testler, kavrama soruları ve soru bankaları',
    to: '/kutuphane/sorular',
    action: 'Sorulara Git',
    Icon: ClipboardList,
    tone: 'accent',
  },
]

/**
 * Etkileşimli tarih deneyimleri — kütüphanenin metin içeriğinden ayrı
 * duran, tam ekran çalışan araçlar. Buraya konuldu çünkü öğrencinin
 * "tarih çalışacağım" dediğinde bakacağı yer burası; ayrı bir sekme
 * açmak gezinmeyi kalabalıklaştırırdı.
 */
const experiences = [
  {
    title: 'Osmanlı Padişahları Geçidi',
    description: 'Padişahları sırayla, haritası ve olaylarıyla birlikte anlatan sinematik zaman çizelgesi.',
    to: '/osmanli-padisahlari',
    Icon: Crown,
    badge: 'Yeni',
  },
  {
    title: 'Tarih Atlası',
    description: 'Yılı sürükle, dönemin siyasi haritası anında değişsin.',
    to: '/tarih-atlasi',
    Icon: MapIcon,
  },
]

export default function LibraryGateway() {
  return (
    <AppShell title="Ders Kütüphanesi" subtitle="Çalışmak istediğin içerik türünü seç.">
      <DashboardHero
        eyebrow="Ders Kütüphanesi"
        title="Nasıl çalışmak istersin?"
        subtitle="Konu anlatımları ve soru setleri ayrı alanlarda, aynı konu hiyerarşisiyle düzenlenir."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {libraries.map(({ title, description, to, action, Icon, tone }) => (
          <Panel
            key={to}
            className={tone === 'brand' ? 'relative overflow-hidden ring-1 ring-inset ring-brand-500/10' : 'relative overflow-hidden ring-1 ring-inset ring-accent/15'}
            padding={false}
          >
            <div className="flex h-full min-h-64 min-w-0 flex-col items-start p-6 sm:p-8">
              <div className={tone === 'brand' ? 'grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600' : 'grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent'}>
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold leading-8 text-ink">{title}</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-ink/60">{description}</p>
              <div className="mt-auto w-full pt-8 sm:w-auto">
                <Button
                  as={Link}
                  to={to}
                  className="w-full justify-center sm:w-auto"
                  icon={LibraryIcon}
                  variant={tone === 'brand' ? 'primary' : 'accent'}
                >
                  {action}
                </Button>
              </div>
            </div>
          </Panel>
        ))}
      </div>

      <section className="mt-6">
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Etkileşimli tarih deneyimleri
        </h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {experiences.map(({ title, description, to, Icon, badge }) => (
            <Link
              key={to}
              to={to}
              className="focus-ring group flex items-start gap-4 rounded-card border border-line bg-surface p-5 shadow-card transition hover:border-brand-500/30 hover:shadow-card-hover"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span className="font-display text-base font-semibold text-ink">{title}</span>
                  {badge && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-2xs font-bold uppercase tracking-wide text-accent ring-1 ring-inset ring-accent/20">
                      {badge}
                    </span>
                  )}
                </span>
                <span className="mt-1 block text-sm leading-6 text-ink/60">{description}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  )
}
