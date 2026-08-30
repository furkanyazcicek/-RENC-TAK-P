import { useState } from 'react'
import { BookOpen, CheckCircle2, Crown, Dna, Eye, FlaskConical, Highlighter, Image, Landmark, MousePointer2 } from 'lucide-react'
import MitochondrionAnatomy from '../../lessons/figures/MitochondrionAnatomy'
import { PADISAHLAR } from '../../../data/padisahlar'

const NOTE_STEPS = [
  {
    key: 'anlatim',
    eyebrow: '01 · Anlatım',
    title: 'Bilgiyi parçalara ayır.',
    text: 'Konu, kısa anlatım blokları ve kritik bilgi vurgularıyla ilerler. Ne okuyacağını değil, neyi anlaman gerektiğini görürsün.',
    Icon: BookOpen,
  },
  {
    key: 'vurgu',
    eyebrow: '02 · Bağlantı',
    title: 'Önemli olanı yakala.',
    text: 'Renkli vurgular, kavramlar arasındaki ilişkiyi görünür kılar. Ezber yerine neden-sonuç zinciri kurarsın.',
    Icon: Highlighter,
  },
  {
    key: 'uygula',
    eyebrow: '03 · Kontrol',
    title: 'Anladığını anında yokla.',
    text: 'Notun içine yerleşen kısa kontroller, öğrendiğin bilgiyi bölüm bitmeden kullanmanı sağlar.',
    Icon: CheckCircle2,
  },
]

const MITOCHONDRIA_REGIONS = [
  { key: 'krista', label: 'Krista kıvrımları', helper: 'ATP üretim yüzeyinin neden arttığını gör.' },
  { key: 'matriks', label: 'Matriks', helper: 'Krebs döngüsü ve enzimlerin bulunduğu alanı aç.' },
  { key: 'mtdna', label: 'mtDNA ve ribozom', helper: 'Mitokondrinin yarı özerk yapısını keşfet.' },
]

const CHEMISTRY_REGIONS = [
  { key: 'gruplar', label: 'Gruplar', helper: 'Dikey sütunlardaki element benzerliğini gör.' },
  { key: 'siniflar', label: 'Element sınıfları', helper: 'Metal, ametal ve yarı metalleri ayır.' },
  { key: 'soygazlar', label: 'Soy gazlar', helper: 'Kararlı 18. grubun tablodaki yerini aç.' },
]

const PERIODIC_ELEMENTS = [
  { symbol: 'H', number: 1, name: 'Hidrojen', group: 1, period: 1, family: 'ametal', fact: 'En hafif elementtir; konumuna rağmen ametaldir.' },
  { symbol: 'He', number: 2, name: 'Helyum', group: 18, period: 1, family: 'soygaz', fact: 'İlk katmanı iki elektronla doludur ve kararlıdır.' },
  { symbol: 'Li', number: 3, name: 'Lityum', group: 1, period: 2, family: 'metal', fact: '1A grubunda bulunan hafif bir alkali metaldir.' },
  { symbol: 'Be', number: 4, name: 'Berilyum', group: 2, period: 2, family: 'metal', fact: '2A grubundaki toprak alkali metallerden biridir.' },
  { symbol: 'B', number: 5, name: 'Bor', group: 13, period: 2, family: 'yarimetal', fact: 'Metal ve ametal arasında özellik gösteren bir yarı metaldir.' },
  { symbol: 'C', number: 6, name: 'Karbon', group: 14, period: 2, family: 'ametal', fact: 'Organik bileşiklerin temel iskeletini oluşturur.' },
  { symbol: 'N', number: 7, name: 'Azot', group: 15, period: 2, family: 'ametal', fact: 'Atmosferin büyük bölümünü oluşturan ametaldir.' },
  { symbol: 'O', number: 8, name: 'Oksijen', group: 16, period: 2, family: 'ametal', fact: 'Solunum ve yanma tepkimelerinde önemli rol oynar.' },
  { symbol: 'F', number: 9, name: 'Flor', group: 17, period: 2, family: 'ametal', fact: 'Elektronegatifliği en yüksek elementtir.' },
  { symbol: 'Ne', number: 10, name: 'Neon', group: 18, period: 2, family: 'soygaz', fact: 'Son katmanı dolu, tepkime eğilimi düşük bir soy gazdır.' },
  { symbol: 'Na', number: 11, name: 'Sodyum', group: 1, period: 3, family: 'metal', fact: 'Elektron vererek genellikle +1 yüklü iyon oluşturur.' },
  { symbol: 'Mg', number: 12, name: 'Magnezyum', group: 2, period: 3, family: 'metal', fact: 'Elektron vererek genellikle +2 yüklü iyon oluşturur.' },
  { symbol: 'Al', number: 13, name: 'Alüminyum', group: 13, period: 3, family: 'metal', fact: 'Hafifliği ve dayanıklılığıyla yaygın kullanılan bir metaldir.' },
  { symbol: 'Si', number: 14, name: 'Silisyum', group: 14, period: 3, family: 'yarimetal', fact: 'Yarı iletken teknolojilerinin temel elementlerinden biridir.' },
  { symbol: 'P', number: 15, name: 'Fosfor', group: 15, period: 3, family: 'ametal', fact: 'ATP ve DNA gibi biyolojik yapılarda bulunur.' },
  { symbol: 'S', number: 16, name: 'Kükürt', group: 16, period: 3, family: 'ametal', fact: 'Bazı amino asitlerin yapısına katılan bir ametaldir.' },
  { symbol: 'Cl', number: 17, name: 'Klor', group: 17, period: 3, family: 'ametal', fact: 'Elektron alarak genellikle −1 yüklü iyon oluşturur.' },
  { symbol: 'Ar', number: 18, name: 'Argon', group: 18, period: 3, family: 'soygaz', fact: 'Kararlı elektron düzenine sahip bir soy gazdır.' },
  { symbol: 'K', number: 19, name: 'Potasyum', group: 1, period: 4, family: 'metal', fact: 'Canlılarda sinir iletimi için önemli bir alkali metaldir.' },
  { symbol: 'Ca', number: 20, name: 'Kalsiyum', group: 2, period: 4, family: 'metal', fact: 'Kemik yapısı ve kas kasılmasında önemli rol oynar.' },
]

const ELEMENT_STYLES = {
  metal: 'border-aqua-400/45 bg-aqua-500/15 text-aqua-100 hover:bg-aqua-500/25',
  ametal: 'border-warning-400/45 bg-warning-500/15 text-warning-100 hover:bg-warning-500/25',
  yarimetal: 'border-success-400/45 bg-success-500/15 text-success-100 hover:bg-success-500/25',
  soygaz: 'border-brand-300/55 bg-brand-500/20 text-brand-100 hover:bg-brand-500/30',
}

// Ana sayfa kısa bir ürün vitrini olarak yalnızca kuruluş dönemindeki
// ilk üç padişahı gösterir. Tam hanedan anlatımı ayrı sayfada kalır.
const HOME_HISTORY_RULERS = PADISAHLAR.slice(0, 3)

const HISTORY_RULERS = HOME_HISTORY_RULERS.map((ruler) => ({
  key: ruler.id,
  label: ruler.name,
  helper: `${ruler.reignStart.value}–${ruler.reignEnd.value} · ${ruler.openingHeadline}`,
}))

const SUBJECTS = [
  {
    key: 'biology',
    label: 'Biyoloji',
    Icon: Dna,
    title: 'Mitokondrinin içine yaklaş.',
    text: 'Krista, matriks ve mitokondri DNA’sına ayrı ayrı odaklan; hücrenin enerji merkezinin nasıl örgütlendiğini gör.',
  },
  {
    key: 'chemistry',
    label: 'Kimya',
    Icon: FlaskConical,
    title: 'Periyodik cetvelde adres bul.',
    text: 'Grupları, periyotları ve element sınıflarını seç; ilk 20 elementin tablodaki yerini görerek düzenin mantığını keşfet.',
  },
  {
    key: 'history',
    label: 'Tarih',
    Icon: Landmark,
    title: 'Padişahı seç, dönemini tanı.',
    text: 'İlk üç Osmanlı hükümdarının adına dokun; temsilî portresi, saltanat dönemi ve sınavda ayırt edici bilgileri aynı kartta aç.',
  },
]

function RulerInfoCard({ ruler }) {
  const portraitIndex = Math.max(0, PADISAHLAR.findIndex((item) => item.id === ruler.id))

  return (
    <article
      key={ruler.id}
      className="overflow-hidden rounded-xl bg-[#11182d] text-white"
      aria-live="polite"
    >
      <div className="grid sm:grid-cols-[0.72fr_1.28fr]">
        <div
          role="img"
          aria-label={`${ruler.name} için hazırlanmış temsilî tarih illüstrasyonu`}
          className="aspect-[4/3] min-h-56 bg-[length:300%_auto] bg-no-repeat sm:aspect-[2/3] sm:min-h-full"
          style={{
            backgroundImage: "url('/landing/padisahlar-temsili-v1.jpg')",
            backgroundPosition: `${portraitIndex * 50}% top`,
          }}
        >
          <span className="m-3 inline-flex rounded-full border border-white/20 bg-ink/75 px-3 py-1 text-[10px] font-bold text-white/80 backdrop-blur-sm">
            Temsilî illüstrasyon
          </span>
        </div>

        <div className="flex flex-col justify-center p-5 sm:p-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c9a258]/30 bg-[#c9a258]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#ecd092]">
            <Crown className="h-3.5 w-3.5" aria-hidden="true" />
            {ruler.order}. Osmanlı hükümdarı
          </span>
          <h3 className="mt-4 font-display text-3xl font-extrabold text-white">{ruler.name}</h3>
          <p className="mt-1 text-sm font-bold text-[#ecd092]">{ruler.epithet}</p>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-white/45">
            {ruler.reignStart.value}–{ruler.reignEnd.value} · {ruler.dynastyPeriod}
          </p>
          <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/70">{ruler.summary}</p>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.05] p-4">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-300">Sınavda ayırt et</p>
            <p className="mt-2 text-xs font-semibold leading-5 text-white/78">{ruler.osymHighlights[0]}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

function InteractivePeriodicTable({ activeRegion }) {
  const [selectedSymbol, setSelectedSymbol] = useState('C')
  const selectedElement = PERIODIC_ELEMENTS.find((element) => element.symbol === selectedSymbol) ?? PERIODIC_ELEMENTS[0]

  return (
    <div className="rounded-xl bg-[#11182d] p-3 text-white sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-300">İlk 20 element</p>
          <p className="mt-1 text-sm font-bold text-white">Bir element kutusuna dokun.</p>
        </div>
        <div className="flex flex-wrap gap-2 text-[10px] font-bold text-white/60">
          <span className="rounded-full bg-aqua-500/15 px-2.5 py-1">Metal</span>
          <span className="rounded-full bg-warning-500/15 px-2.5 py-1">Ametal</span>
          <span className="rounded-full bg-success-500/15 px-2.5 py-1">Yarı metal</span>
          <span className="rounded-full bg-brand-500/20 px-2.5 py-1">Soy gaz</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div
          className="grid min-w-[36rem] gap-1"
          style={{ gridTemplateColumns: 'repeat(18, minmax(1.65rem, 1fr))' }}
          role="grid"
          aria-label="İlk 20 elementin etkileşimli periyodik cetveli"
        >
          {PERIODIC_ELEMENTS.map((element) => {
            const selected = selectedSymbol === element.symbol
            const dimmed = activeRegion === 'soygazlar' && element.family !== 'soygaz'

            return (
              <button
                key={element.symbol}
                type="button"
                role="gridcell"
                aria-pressed={selected}
                aria-label={`${element.name}, atom numarası ${element.number}`}
                onClick={() => setSelectedSymbol(element.symbol)}
                className={`focus-ring aspect-square min-h-10 rounded-lg border p-1 text-center transition-[opacity,transform,box-shadow] duration-200 active:scale-95 motion-reduce:transform-none ${ELEMENT_STYLES[element.family]} ${selected ? 'scale-110 shadow-lg ring-2 ring-white/80' : ''} ${dimmed ? 'opacity-25' : 'opacity-100'}`}
                style={{ gridColumn: element.group, gridRow: element.period }}
              >
                <span className="block text-[8px] font-bold opacity-65">{element.number}</span>
                <span className="block text-sm font-black leading-none">{element.symbol}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-4 grid gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="grid h-16 w-16 place-items-center rounded-xl border border-brand-300/35 bg-brand-500/15">
          <span className="text-3xl font-black text-white">{selectedElement.symbol}</span>
        </div>
        <div aria-live="polite">
          <p className="text-base font-extrabold text-white">{selectedElement.number} · {selectedElement.name}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-300">
            {selectedElement.group}. grup · {selectedElement.period}. periyot
          </p>
          <p className="mt-2 text-sm leading-6 text-white/68">{selectedElement.fact}</p>
        </div>
      </div>
    </div>
  )
}

function NoteCanvas({ activeStep }) {
  return (
    <div className="landing-note-glass overflow-hidden rounded-panel border border-line bg-surface shadow-elevated">
      <div className="flex items-center justify-between border-b border-line bg-surface-muted/70 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/10 text-brand-700 ring-1 ring-inset ring-brand-500/15">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-bold text-ink">Hücre Zarından Madde Geçişleri</p>
            <p className="text-[10px] font-semibold text-ink/50">9. sınıf · Biyoloji · 12 dakika</p>
          </div>
        </div>
        <span className="hidden rounded-full bg-brand-500/10 px-2.5 py-1 text-[10px] font-bold text-brand-700 sm:inline-flex">
          Etkileşimli not
        </span>
      </div>

      <div className="p-5 sm:p-8">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-600">Temel fikir</p>
        <h3 className="mt-2 max-w-lg font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
          Hücre zarı, her maddeye aynı kapıyı açmaz.
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/65">
          Maddeler; büyüklükleri, yükleri ve yoğunluk farklarına göre zardan farklı yollarla geçer.
          Bu seçicilik hücrenin iç dengesini korur.
        </p>

        <div className={`mt-6 rounded-2xl p-4 ring-1 ring-inset transition-[background-color,box-shadow,transform] duration-300 motion-reduce:transition-none ${activeStep === 'vurgu' ? 'bg-warning-500/10 ring-warning-500/25 shadow-card sm:scale-[1.015]' : 'bg-surface-muted ring-line'}`}>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-warning-500/15 text-warning-700">
              <Highlighter className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-extrabold text-ink">Kritik ayrım</p>
              <p className="mt-1 text-sm leading-6 text-ink/65">
                Pasif taşımada hücre enerji harcamaz; aktif taşımada madde yoğunluğun ters yönüne taşınırken ATP kullanılır.
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-5 grid gap-3 sm:grid-cols-3 transition-[opacity,transform] duration-300 motion-reduce:transition-none ${activeStep === 'uygula' ? 'opacity-100 sm:scale-[1.015]' : 'opacity-80'}`}>
          {['Basit difüzyon', 'Kolaylaştırılmış difüzyon', 'Aktif taşıma'].map((label, index) => (
            <div key={label} className="rounded-xl border border-line bg-surface p-3.5">
              <span className={`mb-3 block h-1.5 rounded-full ${index === 2 ? 'bg-brand-500' : 'bg-aqua-500'}`} />
              <p className="text-xs font-bold text-ink">{label}</p>
              <p className="mt-1 text-[11px] leading-5 text-ink/55">{index === 2 ? 'ATP gerekir' : 'ATP gerekmez'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function NotesShowcase() {
  const [activeStep, setActiveStep] = useState(NOTE_STEPS[0].key)

  return (
    <section id="notlar" className="landing-notes-showcase scroll-mt-20 py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-600">Ders notları</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
            Bir sayfadan fazlası.
            <span className="block text-ink/45">Bir öğrenme akışı.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-ink/60 sm:text-lg sm:leading-8">
            Uzun metin yığınları yerine; anlatım, görsel bağlar ve kısa kontroller aynı çalışma alanında ilerler.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:mt-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <div className="grid gap-2 lg:sticky lg:top-24">
            {NOTE_STEPS.map(({ key, eyebrow, title, text, Icon }) => {
              const active = activeStep === key
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveStep(key)}
                  className={`focus-ring min-h-11 rounded-2xl p-4 text-left transition-[background-color,box-shadow,transform] duration-200 active:scale-[0.99] motion-reduce:transform-none sm:p-5 ${active ? 'bg-surface shadow-card ring-1 ring-line' : 'hover:bg-surface/60'}`}
                >
                  <div className="flex items-start gap-3.5">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors duration-200 ${active ? 'bg-brand-600 text-white shadow-aurora' : 'bg-brand-500/10 text-brand-700'}`}>
                      <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-600">{eyebrow}</span>
                      <span className="mt-1 block font-display text-lg font-extrabold text-ink">{title}</span>
                      <span className={`mt-2 block overflow-hidden text-sm leading-6 text-ink/60 transition-[max-height,opacity] duration-300 motion-reduce:transition-none ${active ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 lg:max-h-0'}`}>{text}</span>
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          <NoteCanvas activeStep={activeStep} />
        </div>
      </div>
    </section>
  )
}

export function InteractiveVisualShowcase() {
  const [activeSubject, setActiveSubject] = useState('biology')
  const [activeBiologyRegion, setActiveBiologyRegion] = useState(MITOCHONDRIA_REGIONS[0].key)
  const [activeChemistryRegion, setActiveChemistryRegion] = useState(CHEMISTRY_REGIONS[0].key)
  const [activeRulerId, setActiveRulerId] = useState(HOME_HISTORY_RULERS[0].id)
  const subject = SUBJECTS.find((item) => item.key === activeSubject) ?? SUBJECTS[0]
  const activeRuler = HOME_HISTORY_RULERS.find((item) => item.id === activeRulerId) ?? HOME_HISTORY_RULERS[0]

  const toggleBiologyRegion = (key) => {
    setActiveBiologyRegion((current) => current === key ? null : key)
  }

  const toggleChemistryRegion = (key) => {
    setActiveChemistryRegion((current) => current === key ? null : key)
  }

  const controls = activeSubject === 'biology'
    ? MITOCHONDRIA_REGIONS
    : activeSubject === 'chemistry'
      ? CHEMISTRY_REGIONS
      : HISTORY_RULERS

  const selectedKey = activeSubject === 'biology'
    ? activeBiologyRegion
    : activeSubject === 'chemistry'
      ? activeChemistryRegion
      : activeRulerId

  const handleControl = (key) => {
    if (activeSubject === 'biology') toggleBiologyRegion(key)
    else if (activeSubject === 'chemistry') toggleChemistryRegion(key)
    else setActiveRulerId(key)
  }

  return (
    <section id="etkilesim" className="landing-interactive-section relative scroll-mt-20 overflow-hidden bg-ink py-20 text-white sm:py-28 lg:py-36">
      <div aria-hidden="true" className="absolute inset-0 bg-mesh-aurora opacity-10" />
      <div aria-hidden="true" className="landing-interactive-orb absolute -right-48 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-500/20 blur-aurora-lg" />

      <div className="relative mx-auto max-w-content px-4 sm:px-6">
        <div className="mb-12 flex justify-center lg:mb-16" role="tablist" aria-label="Etkileşimli görsel dersi">
          <div className="inline-flex w-full max-w-xl gap-1 rounded-2xl border border-white/10 bg-white/[0.06] p-1.5 backdrop-blur-sm">
            {SUBJECTS.map(({ key, label, Icon }) => {
              const active = activeSubject === key
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  id={`subject-tab-${key}`}
                  aria-selected={active}
                  aria-controls="subject-demo-panel"
                  onClick={() => setActiveSubject(key)}
                  className={`focus-ring flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-2 text-xs font-bold transition-[background-color,color,box-shadow,transform] duration-200 active:scale-[0.98] motion-reduce:transform-none sm:text-sm ${active ? 'bg-white text-ink shadow-card' : 'text-white/60 hover:bg-white/[0.07] hover:text-white'}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-300">
              <Eye className="h-4 w-4" aria-hidden="true" />
              Etkileşimli görseller
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.04] text-white sm:text-6xl">
              Sadece bakma.
              <span className="block text-white/45">Keşfet.</span>
            </h2>
            <p className="mt-6 text-lg font-bold leading-7 text-white sm:text-xl">
              {subject.title}
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              {subject.text}
            </p>

            <div className="mt-8 grid gap-2" role="group" aria-label={`${subject.label} görselinde incelenecek bölüm`}>
              {controls.map((control) => {
                const active = selectedKey === control.key
                return (
                  <button
                    key={control.key}
                    type="button"
                    aria-pressed={active}
                    onClick={() => handleControl(control.key)}
                    className={`focus-ring min-h-12 rounded-xl border px-4 py-3 text-left transition-[background-color,border-color,transform] duration-200 active:scale-[0.99] motion-reduce:transform-none ${active ? 'border-brand-300 bg-white/12' : 'border-white/10 bg-white/[0.05] hover:border-white/25 hover:bg-white/[0.08]'}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${active ? 'bg-brand-500 text-white' : 'bg-white/10 text-white/70'}`}>
                        <MousePointer2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-white">{control.label}</span>
                        <span className="mt-0.5 block text-xs leading-5 text-white/55">{control.helper}</span>
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div
            id="subject-demo-panel"
            role="tabpanel"
            aria-labelledby={`subject-tab-${activeSubject}`}
            className="landing-interactive-glass min-w-0 rounded-panel border border-white/15 bg-white/[0.07] p-2.5 shadow-overlay backdrop-blur-sm sm:p-4"
          >
            <div className="mb-3 flex items-center justify-between px-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
              <span className="inline-flex items-center gap-1.5"><Image className="h-3.5 w-3.5" /> {subject.label} · Canlı ders görseli</span>
              <span>{selectedKey ? 'Seçim açık' : 'Bir bölüm seç'}</span>
            </div>
            {activeSubject === 'biology' && <MitochondrionAnatomy activeRegion={activeBiologyRegion} />}
            {activeSubject === 'chemistry' && (
              <InteractivePeriodicTable activeRegion={activeChemistryRegion} />
            )}
            {activeSubject === 'history' && (
              <RulerInfoCard ruler={activeRuler} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
