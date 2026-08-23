import { BookOpen, ClipboardList, Library as LibraryIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell, Button } from '../components/ui'
import { DashboardHero, Panel } from '../components/dashboard'

const libraries = [
  {
    title: 'Not Kütüphanesi',
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

export default function LibraryGateway() {
  return (
    <AppShell title="Ders Kütüphanesi" subtitle="Çalışmak istediğin içerik türünü seç.">
      <DashboardHero
        eyebrow="Ders Kütüphanesi"
        title="Nasıl çalışmak istersin?"
        subtitle="Notlar ve soru setleri ayrı alanlarda, aynı konu hiyerarşisiyle düzenlenir."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {libraries.map(({ title, description, to, action, Icon, tone }) => (
          <Panel key={to} className="relative overflow-hidden" padding={false}>
            <div className="flex min-h-64 flex-col items-start p-6 sm:p-8">
              <div className={tone === 'brand' ? 'grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600' : 'grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent'}>
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-ink">{title}</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-ink/60">{description}</p>
              <Button as={Link} to={to} className="mt-auto pt-8" icon={LibraryIcon} variant={tone === 'brand' ? 'primary' : 'secondary'}>
                {action}
              </Button>
            </div>
          </Panel>
        ))}
      </div>
    </AppShell>
  )
}
