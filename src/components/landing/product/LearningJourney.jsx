import { useState } from 'react'
import { BookOpen, CheckCircle2, Eye, Highlighter, Image, MousePointer2 } from 'lucide-react'
import PhScale from '../../lessons/figures/PhScale'

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

const PH_REGIONS = [
  { key: 'asit', label: 'Asidik bölge', helper: 'pH azaldıkça H⁺ derişimi artar.' },
  { key: 'notr', label: 'Nötr eşik', helper: 'Saf suda iyon dengesi eşittir.' },
  { key: 'baz', label: 'Bazik bölge', helper: 'pH yükseldikçe OH⁻ göreli olarak artar.' },
]

function NoteCanvas({ activeStep }) {
  return (
    <div className="overflow-hidden rounded-panel border border-line bg-surface shadow-elevated">
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
    <section id="notlar" className="scroll-mt-20 py-20 sm:py-28 lg:py-36">
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
  const [activeRegion, setActiveRegion] = useState(null)
  const selected = PH_REGIONS.find((region) => region.key === activeRegion)

  const toggleRegion = (key) => {
    setActiveRegion((current) => current === key ? null : key)
  }

  return (
    <section id="etkilesim" className="relative scroll-mt-20 overflow-hidden bg-ink py-20 text-white sm:py-28 lg:py-36">
      <div aria-hidden="true" className="absolute inset-0 bg-mesh-aurora opacity-10" />
      <div aria-hidden="true" className="absolute -right-48 top-0 h-[36rem] w-[36rem] rounded-full bg-brand-500/20 blur-aurora-lg" />

      <div className="relative mx-auto max-w-content px-4 sm:px-6">
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
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Notların içindeki görseller, konunun katmanlarını açar. Bir bölge seç; görsel yaklaşsın ve bilimsel açıklama tam o noktada belirsin.
            </p>

            <div className="mt-8 grid gap-2" role="group" aria-label="pH görselinde incelenecek bölge">
              {PH_REGIONS.map((region) => {
                const active = activeRegion === region.key
                return (
                  <button
                    key={region.key}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleRegion(region.key)}
                    className={`focus-ring min-h-12 rounded-xl border px-4 py-3 text-left transition-[background-color,border-color,transform] duration-200 active:scale-[0.99] motion-reduce:transform-none ${active ? 'border-brand-300 bg-white/12' : 'border-white/10 bg-white/[0.05] hover:border-white/25 hover:bg-white/[0.08]'}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${active ? 'bg-brand-500 text-white' : 'bg-white/10 text-white/70'}`}>
                        <MousePointer2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-white">{region.label}</span>
                        <span className="mt-0.5 block text-xs leading-5 text-white/55">{region.helper}</span>
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="min-w-0 rounded-panel border border-white/15 bg-white/[0.07] p-2.5 shadow-overlay backdrop-blur-sm sm:p-4">
            <div className="mb-3 flex items-center justify-between px-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
              <span className="inline-flex items-center gap-1.5"><Image className="h-3.5 w-3.5" /> Canlı ders görseli</span>
              <span>{selected ? 'Detay açık' : 'Bir bölge seç'}</span>
            </div>
            <PhScale activeRegion={activeRegion} />
          </div>
        </div>
      </div>
    </section>
  )
}
