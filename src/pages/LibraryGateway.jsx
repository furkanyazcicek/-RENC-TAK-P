import { Atom, BookOpen, ClipboardList, Crown, Dna, Earth, FlaskConical, Languages, Library as LibraryIcon } from 'lucide-react'
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
 * Dil öğrenme, konu anlatımı ve soru çözmeden ayrı bir iştir: seviye
 * tespiti, kişisel yol haritası, tekrar sistemi ve telaffuz laboratuvarı
 * kendi içinde bir bütün. Bu yüzden kütüphane kartlarının yanına değil,
 * kendi şeridine konuldu.
 */
const dilOgrenme = [
  {
    title: 'İngilizce Öğrenme Kütüphanesi',
    description:
      'Seviyeni ölç, sana özel bir yol kur ve sıfırdan ileri düzeye çalış. Dersler, kelime tekrarı, telaffuz laboratuvarı ve İngilizce düşünme antrenmanları bir arada.',
    to: '/ingilizce',
    Icon: Languages,
    bayrak: '🇬🇧',
  },
  {
    title: 'Almanca Öğrenme Kütüphanesi',
    description:
      'Aynı sistem, Almanca için: der/die/das ile kelime kartları, cümle sırası (fiil ikinci) antrenmanı, Perfekt ve hâller. Seviye tespiti, yol haritası ve telaffuz laboratuvarı dâhil.',
    to: '/almanca',
    Icon: Languages,
    bayrak: '🇩🇪',
    yeni: true,
  },
]

/**
 * Etkileşimli deneyimler — kütüphanenin metin içeriğinden ayrı duran,
 * tam ekran çalışan araçlar. Buraya konuldu çünkü öğrencinin "çalışacağım"
 * dediğinde bakacağı yer burası; her araç için ayrı bir sekme açmak
 * gezinmeyi kalabalıklaştırırdı.
 */
const experiences = [
  {
    title: 'Tarih Atlası',
    description: 'Otuz altı Osmanlı padişahını dönem haritaları, olay sahneleri ve sinematik zaman çizelgesiyle keşfet.',
    to: '/osmanli-padisahlari',
    Icon: Crown,
    badge: 'Yeni',
  },
  {
    title: 'Kimya Atlası',
    description: 'Formül yaz; atom sayımı, molekül geometrisi, Lewis yapısı ve bağlar tek ekranda açılsın.',
    to: '/kimya-atlasi',
    Icon: FlaskConical,
    badge: 'Yeni',
  },
  {
    title: 'Fizik Atlası',
    description: 'On üç bölge, otuz altı deney. Değerleri değiştir, grafikleri anında gör, bağıntıyı kendin keşfet.',
    to: '/fizik-atlasi',
    Icon: Atom,
    badge: 'Yeni',
  },
  {
    title: 'TYT Biyoloji Atlası',
    description: 'Hücreden ekosisteme ölçek değiştir; tahmin et, deney kur, veriyi oku ve canlı sistemleri keşfet.',
    to: '/biyoloji-atlasi',
    Icon: Dna,
    badge: 'Yeni',
  },
  {
    title: 'TYT Coğrafya Atlası',
    description: 'Ölçeği ve katmanı değiştir; harita, kesit, grafik ve vaka kanıtlarıyla coğrafi süreçleri keşfet.',
    to: '/cografya-atlasi',
    Icon: Earth,
    badge: 'Yeni',
  },
]

export default function LibraryGateway() {
  return (
    <AppShell title="Ders Kütüphanesi" subtitle="Çalışmak istediğin içerik türünü seç." showPageIntro={false}>
      <DashboardHero
        asPageHeader
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
                  variant="primary"
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
          Dil öğrenme
        </h2>
        <div className="mt-3 grid gap-4 lg:grid-cols-2">
          {dilOgrenme.map(({ title, description, to, Icon, bayrak, yeni }) => (
            <Link
              key={to}
              to={to}
              className="focus-ring group flex items-start gap-4 rounded-card border border-line bg-surface p-5 shadow-card transition hover:border-brand-500/30 hover:shadow-card-hover sm:p-6"
            >
              <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-aurora-gradient text-white shadow-aurora">
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span className="absolute -bottom-1 -right-1 text-base" aria-hidden="true">{bayrak}</span>
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-lg font-bold text-ink">{title}</span>
                  {yeni && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-2xs font-bold uppercase tracking-wide text-accent ring-1 ring-inset ring-accent/20">
                      Yeni
                    </span>
                  )}
                </span>
                <span className="mt-1.5 block text-sm leading-6 text-ink/60">
                  {description}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Etkileşimli deneyimler
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
