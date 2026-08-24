import { useId, useMemo, useState } from 'react'
import { Check, RotateCcw, X } from 'lucide-react'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

function formatNumber(value, digits = 2) {
  return new Intl.NumberFormat('tr-TR', {
    maximumFractionDigits: digits,
    minimumFractionDigits: Number.isInteger(value) ? 0 : Math.min(1, digits),
  }).format(value)
}

function LabShell({ eyebrow, title, instruction, children, status }) {
  return (
    <section className="physics-lab" aria-label={title}>
      <header className="physics-lab__header">
        <p className="lesson-eyebrow m-0 text-aqua-700">{eyebrow || 'Mini fizik laboratuvarı'}</p>
        <h4 className="m-0 mt-1 font-display text-lg font-bold leading-snug text-ink sm:text-xl">{title}</h4>
        {instruction && <p className="m-0 mt-2 text-sm leading-6 text-ink/62">{instruction}</p>}
      </header>
      <div className="physics-lab__body">{children}</div>
      {status && <div className="physics-lab__status" role="status" aria-live="polite">{status}</div>}
    </section>
  )
}

function RangeControl({ id, label, value, min, max, step = 1, unit = '', onChange }) {
  return (
    <label className="physics-control" htmlFor={id}>
      <span className="physics-control__row">
        <span>{label}</span>
        <output htmlFor={id}>{formatNumber(value)}{unit ? ` ${unit}` : ''}</output>
      </span>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  )
}

function inferScaleVisual(item) {
  if (item.visual) return item.visual
  const label = item.label.toLocaleLowerCase('tr-TR')
  if (label.includes('çekir')) return 'nucleus'
  if (label.includes('atom')) return 'atom'
  if (label.includes('nano') || label.includes('işlemci')) return 'nano'
  if (label.includes('bisiklet') || label.includes('insan')) return 'mechanics'
  if (label.includes('dünya')) return 'earth'
  return 'star'
}

function ScaleScene({ item }) {
  const visual = inferScaleVisual(item)
  const rawId = useId()
  const uid = rawId.replace(/:/g, '')
  const gradientId = `scale-glow-${uid}`
  const surfaceId = `scale-surface-${uid}`
  const warmId = `scale-warm-${uid}`
  const metalId = `scale-metal-${uid}`
  const earthClipId = `scale-earth-clip-${uid}`

  return (
    <div
      className={`physics-scale-scene is-${visual}${item.image ? ' has-raster' : ''}`}
      role="img"
      aria-label={item.imageAlt || `${item.label}, yaklaşık ${item.scale}`}
    >
      {item.image && (
        <img
          className="physics-scale-scene__image"
          src={item.image}
          srcSet={item.imageSet}
          sizes="(max-width: 640px) 90vw, 720px"
          alt=""
          aria-hidden="true"
          decoding="async"
        />
      )}
      <svg viewBox="0 0 560 330" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.32" />
          <stop offset="72%" stopColor="currentColor" stopOpacity="0.07" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={surfaceId} cx="34%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
          <stop offset="22%" stopColor="currentColor" stopOpacity="0.96" />
          <stop offset="72%" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#061321" stopOpacity="0.92" />
        </radialGradient>
        <radialGradient id={warmId} cx="32%" cy="27%" r="72%">
          <stop offset="0%" stopColor="#fff5df" />
          <stop offset="28%" stopColor="#f47464" />
          <stop offset="100%" stopColor="#761d35" />
        </radialGradient>
        <linearGradient id={metalId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="20%" stopColor="currentColor" />
          <stop offset="62%" stopColor="currentColor" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#253654" />
        </linearGradient>
        <clipPath id={earthClipId}><circle cx="280" cy="165" r="112" /></clipPath>
      </defs>

      <g className="physics-scale-scene__grid">
        {Array.from({ length: 13 }, (_, index) => <path key={`v-${index}`} d={`M ${40 + index * 40} 20 V 310`} />)}
        {Array.from({ length: 8 }, (_, index) => <path key={`h-${index}`} d={`M 30 ${25 + index * 40} H 530`} />)}
      </g>
      <circle className="physics-scale-scene__glow" cx="280" cy="165" r="150" fill={`url(#${gradientId})`} />
      <g className="physics-scale-scene__reticle">
        <circle cx="280" cy="165" r="126" />
        <circle cx="280" cy="165" r="92" />
        <path d="M280 24v30M280 276v30M139 165h30M391 165h30" />
      </g>
      <path className="physics-scale-scene__scan" d="M74 72H486" />

      {visual === 'nucleus' && (
        <g className="physics-scale-object physics-scale-object--nucleus">
          <ellipse className="is-field" cx="280" cy="165" rx="132" ry="110" />
          <path className="is-orbit" d="M158 165c0-62 55-112 122-112s122 50 122 112-55 112-122 112-122-50-122-112Z" />
          <path className="is-binding" d="M238 127l44 12 38 25-34 32-49-9-13-38 14-22Zm44 12 4 57m-49-9 83-23m-96-15 62 47" />
          <circle className="is-particle is-a" cx="238" cy="128" r="27" fill={`url(#${surfaceId})`} />
          <circle className="is-particle is-b" cx="282" cy="137" r="29" fill={`url(#${warmId})`} />
          <circle className="is-particle is-a" cx="322" cy="164" r="27" fill={`url(#${surfaceId})`} />
          <circle className="is-particle is-b" cx="288" cy="198" r="28" fill={`url(#${warmId})`} />
          <circle className="is-particle is-b" cx="238" cy="187" r="26" fill={`url(#${warmId})`} />
          <circle className="is-particle is-a" cx="260" cy="160" r="25" fill={`url(#${surfaceId})`} />
          <circle className="is-particle is-b" cx="326" cy="211" r="22" fill={`url(#${warmId})`} />
          <circle className="is-particle is-a" cx="334" cy="124" r="20" fill={`url(#${surfaceId})`} />
          <g className="is-particle-labels" aria-hidden="true">
            <text x="231" y="133">p</text><text x="276" y="142">n</text><text x="316" y="169">p</text>
          </g>
        </g>
      )}

      {visual === 'atom' && (
        <g className="physics-scale-object physics-scale-object--atom">
          <g className="is-orbit-system">
            <ellipse cx="280" cy="165" rx="158" ry="58" />
            <ellipse cx="280" cy="165" rx="158" ry="58" transform="rotate(60 280 165)" />
            <ellipse cx="280" cy="165" rx="158" ry="58" transform="rotate(120 280 165)" />
          </g>
          <circle className="is-core-glow" cx="280" cy="165" r="54" />
          <circle className="is-core" cx="280" cy="165" r="34" fill={`url(#${surfaceId})`} />
          <path className="is-core-detail" d="M265 146l30 38m0-38-30 38" />
          <g className="is-electron-group is-one"><circle className="is-trail" cx="430" cy="165" r="18" /><circle className="is-electron" cx="430" cy="165" r="8" /></g>
          <g className="is-electron-group is-two"><circle className="is-trail" cx="201" cy="28" r="18" /><circle className="is-electron" cx="201" cy="28" r="8" /></g>
          <g className="is-electron-group is-three"><circle className="is-trail" cx="201" cy="302" r="18" /><circle className="is-electron" cx="201" cy="302" r="8" /></g>
        </g>
      )}

      {visual === 'nano' && (
        <g className="physics-scale-object physics-scale-object--nano">
          <path className="is-board-shadow" d="M175 78h210l58 49v122l-58 43H175l-58-43V127l58-49Z" />
          <path className="is-board" d="M176 69h208l54 54v118l-54 42H176l-54-42V123l54-54Z" />
          <g className="is-pins">
            {Array.from({ length: 7 }, (_, index) => <path key={`pin-t-${index}`} d={`M${220 + index * 20} 105V83`} />)}
            {Array.from({ length: 7 }, (_, index) => <path key={`pin-b-${index}`} d={`M${220 + index * 20} 226v23`} />)}
          </g>
          <rect className="is-chip-shadow" x="211" y="103" width="138" height="130" rx="16" />
          <rect className="is-chip" x="218" y="96" width="124" height="124" rx="14" fill={`url(#${metalId})`} />
          {Array.from({ length: 6 }, (_, row) => Array.from({ length: 6 }, (_, column) => (
            <circle key={`${row}-${column}`} cx={238 + column * 17} cy={116 + row * 16} r="3.5" />
          )))}
          <path className="is-circuit" d="M218 127h-42l-25-21M218 183h-52l-31 26M342 122h43l28-23M342 183h50l27 25M246 220v28l-24 20M316 220v28l22 20" />
          <g className="is-nodes"><circle cx="151" cy="106" r="6" /><circle cx="135" cy="209" r="6" /><circle cx="413" cy="99" r="6" /><circle cx="419" cy="208" r="6" /><circle cx="222" cy="268" r="6" /><circle cx="338" cy="268" r="6" /></g>
          <text className="is-chip-label" x="280" y="164" textAnchor="middle">Si</text>
        </g>
      )}

      {visual === 'mechanics' && (
        <g className="physics-scale-object physics-scale-object--mechanics">
          <g className="is-wheel is-left">
            <circle cx="184" cy="222" r="67" />
            <circle className="is-hub" cx="184" cy="222" r="7" />
            {Array.from({ length: 12 }, (_, index) => <line key={index} x1="184" y1="222" x2="184" y2="155" transform={`rotate(${index * 30} 184 222)`} />)}
          </g>
          <g className="is-wheel is-right">
            <circle cx="386" cy="222" r="67" />
            <circle className="is-hub" cx="386" cy="222" r="7" />
            {Array.from({ length: 12 }, (_, index) => <line key={index} x1="386" y1="222" x2="386" y2="155" transform={`rotate(${index * 30} 386 222)`} />)}
          </g>
          <path className="is-frame is-frame-shadow" d="M184 222l65-108 59 108H184Zm65-108h80l57 108h-78l37-108" />
          <path className="is-frame" d="M184 222l65-108 59 108H184Zm65-108h80l57 108h-78l37-108" stroke={`url(#${metalId})`} />
          <path className="is-detail" d="M249 114l-27-24M207 90h38M329 114l-12-28M311 86h17M308 222l-25 18m25-18 28 11" />
          <circle className="is-crank" cx="308" cy="222" r="14" />
          <path className="is-chain" d="M184 216h124M184 228h124" />
          <path className="is-ground" d="M82 289h396" />
        </g>
      )}

      {visual === 'earth' && (
        <g className="physics-scale-object physics-scale-object--earth">
          <ellipse className="is-orbit" cx="280" cy="165" rx="210" ry="72" transform="rotate(-11 280 165)" />
          <circle className="is-atmosphere" cx="280" cy="165" r="121" />
          <circle className="is-planet" cx="280" cy="165" r="112" fill={`url(#${surfaceId})`} />
          <g clipPath={`url(#${earthClipId})`}>
            <path className="is-longitude" d="M280 53c-46 32-65 69-65 112s19 80 65 112M280 53c46 32 65 69 65 112s-19 80-65 112M168 165h224M186 105h188M186 225h188" />
            <path className="is-land" d="M191 91l30-14 35 13 22 25-13 17-24 3-10 26-24 13-29-18 14-25-18-17Zm103 57 27-26 30 5 14 24 37 14-15 32-24 8-13 37-31 29-20-25 12-31-22-18 17-24Z" />
            <path className="is-cloud" d="M196 120c31-17 59-17 84-4M319 104c20-9 39-7 60 3M197 214c22 13 48 16 74 9M326 235c18-4 34-13 46-27" />
            <ellipse className="is-night" cx="346" cy="165" rx="68" ry="114" />
          </g>
          <g className="is-satellite"><circle cx="472" cy="113" r="8" /><path d="M454 105l12 5m12 6 12 5m-29-18-6-13m29 34 6 13" /></g>
        </g>
      )}

      {visual === 'star' && (
        <g className="physics-scale-object physics-scale-object--star">
          <g className="is-rays">
            {Array.from({ length: 20 }, (_, index) => <line key={index} x1="280" y1="21" x2="280" y2={index % 2 === 0 ? 49 : 57} transform={`rotate(${index * 18} 280 165)`} />)}
          </g>
          <circle className="is-corona is-outer" cx="280" cy="165" r="132" />
          <circle className="is-corona is-inner" cx="280" cy="165" r="98" />
          <circle className="is-star" cx="280" cy="165" r="70" fill={`url(#${warmId})`} />
          <path className="is-texture" d="M247 126c18-13 43-12 61 1m-74 25c30-10 69-8 94 7m-88 23c24 11 56 13 81 2m-60 27c15 5 32 4 45-2" />
          <circle className="is-spot" cx="251" cy="157" r="8" /><circle className="is-spot" cx="303" cy="188" r="6" />
          <path className="is-flare" d="M228 98c-39-38-23-67 12-53M346 123c49-28 72 2 53 32M337 225c40 40 12 65-22 55M213 215c-46 21-62-13-39-39" />
          <circle className="is-speck is-one" cx="434" cy="64" r="3" />
          <circle className="is-speck is-two" cx="106" cy="126" r="4" />
          <circle className="is-speck is-three" cx="461" cy="254" r="4" />
        </g>
      )}

      <g className="physics-scale-scene__measure">
        <path d="M66 286h120M66 280v12M186 280v12" />
        <text x="126" y="307" textAnchor="middle">SEÇİLİ ÖLÇEK · {item.scale}</text>
      </g>
      </svg>
    </div>
  )
}

function ScaleLab({ data }) {
  const items = data.items?.length ? data.items : [
    { label: 'Atom çekirdeği', scale: '10⁻¹⁵ m', branch: 'Nükleer fizik', detail: 'Çekirdeğin yapısı ve çekirdek tepkimeleri.' },
    { label: 'Atom', scale: '10⁻¹⁰ m', branch: 'Atom fiziği', detail: 'Elektronların enerji düzeyleri ve atomik tayflar.' },
    { label: 'İşlemci', scale: '10⁻⁸ m', branch: 'Katı hâl fiziği', detail: 'Yarı iletkenler ve elektronik malzemeler.' },
    { label: 'İnsan', scale: '10⁰ m', branch: 'Mekanik', detail: 'Hareket, denge, kuvvet ve enerji aktarımı.' },
    { label: 'Dünya', scale: '10⁷ m', branch: 'Mekanik', detail: 'Kütle çekimi, yörünge ve dönme hareketi.' },
    { label: 'Yıldız', scale: '10⁹ m', branch: 'Astrofizik', detail: 'Işınım, plazma, çekirdek tepkimeleri ve kütle çekimi birlikte çalışır.' },
  ]
  const [index, setIndex] = useState(Math.min(3, items.length - 1))
  const current = items[index]
  const progress = items.length > 1 ? (index / (items.length - 1)) * 100 : 0

  function selectOffset(offset) {
    setIndex((value) => (value + offset + items.length) % items.length)
  }

  return (
    <LabShell
      eyebrow="Gör → değiştir → ilişkilendir"
      title={data.title || 'Fiziğin ölçek merceği'}
      instruction={data.instruction || 'Ölçeği değiştir. Aynı doğayı farklı büyüklüklerde hangi fizik alanlarının incelediğini gözle.'}
    >
      <div className="physics-scale-explorer">
        <div className="physics-scale-explorer__topline">
          <div>
            <span>Gözlem hedefi</span>
            <strong>{current.label}</strong>
          </div>
          <div className="physics-scale-explorer__branch">
            <span>Baskın alan</span>
            <strong>{current.branch}</strong>
          </div>
        </div>

        <div className={`physics-scale-explorer__viewport${current.image ? ' has-raster' : ''}`}>
          <ScaleScene key={current.label} item={current} />
          <div className="physics-scale-explorer__scale" aria-hidden="true">
            <span>Yaklaşık boyut</span>
            <strong>{current.scale}</strong>
          </div>
          <div className="physics-scale-explorer__model-note" aria-hidden="true">Şematik model · Gerçek oran değildir</div>
          <div className="physics-scale-explorer__nav">
            <button type="button" onClick={() => selectOffset(-1)} aria-label="Bir önceki ölçeğe geç">←</button>
            <span aria-live="polite">{index + 1} / {items.length}</span>
            <button type="button" onClick={() => selectOffset(1)} aria-label="Bir sonraki ölçeğe geç">→</button>
          </div>
        </div>

        <div className="physics-scale-explorer__timeline" style={{ '--scale-progress': `${progress}%`, '--scale-count': items.length }}>
          <div className="physics-scale-explorer__zones" aria-hidden="true">
            <span>Mikro dünya</span><span>Gündelik ölçek</span><span>Kozmik ölçek</span>
          </div>
          <div className="physics-scale-explorer__track" role="group" aria-label="Seçilmiş fizik ölçekleri">
            <i aria-hidden="true" />
            {items.map((item, itemIndex) => (
              <button
                key={item.label}
                type="button"
                aria-current={itemIndex === index ? 'true' : undefined}
                aria-label={`${item.label}, ${item.scale}`}
                onClick={() => setIndex(itemIndex)}
              >
                <span className="physics-scale-explorer__dot" />
                <strong>{item.scale}</strong>
                <small>{item.label}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="physics-scale-explorer__insight">
          <span>Bu ölçekte fizik neyi sorar?</span>
          <p>{current.detail}</p>
        </div>
      </div>
    </LabShell>
  )
}

function ClassificationLab({ data }) {
  const cases = data.cases ?? []
  const options = data.options ?? []
  const [caseIndex, setCaseIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const current = cases[caseIndex] ?? {}
  const correct = selected === current.answer

  function next() {
    setCaseIndex((value) => (value + 1) % Math.max(1, cases.length))
    setSelected(null)
    setRevealed(false)
  }

  return (
    <LabShell
      eyebrow="Tahmin et → dene"
      title={data.title || 'Olayı doğru fizik alanına yerleştir'}
      instruction={`${caseIndex + 1}/${cases.length} · Önce alanı seç, sonra gerekçeyi aç.`}
      status={revealed ? `${correct ? 'Doğru.' : 'Bir kez daha bağ kur.'} ${current.explanation || ''}` : ''}
    >
      <div className="physics-case">
        <p className="m-0 text-xs font-bold uppercase tracking-wider text-ink/40">İncelenen olay</p>
        <p className="m-0 mt-2 font-display text-lg font-bold leading-snug text-ink">{current.prompt}</p>
      </div>
      <div className="physics-choice-grid" role="group" aria-label="Fizik alt dalları">
        {options.map((option) => {
          const active = selected === option
          const answer = revealed && option === current.answer
          const wrong = revealed && active && !answer
          return (
            <button
              key={option}
              type="button"
              disabled={revealed}
              aria-pressed={active}
              onClick={() => setSelected(option)}
              className={answer ? 'is-correct' : wrong ? 'is-wrong' : active ? 'is-active' : ''}
            >
              {answer ? <Check aria-hidden="true" /> : wrong ? <X aria-hidden="true" /> : null}
              <span>{option}</span>
            </button>
          )
        })}
      </div>
      <div className="physics-lab__actions">
        {!revealed ? (
          <button type="button" disabled={!selected} onClick={() => setRevealed(true)}>Dene</button>
        ) : (
          <button type="button" onClick={next}>Sıradaki olayı getir</button>
        )}
      </div>
    </LabShell>
  )
}

function MeasurementLab({ data }) {
  const [length, setLength] = useState(data.initialValue ?? 7.36)
  const [resolution, setResolution] = useState(data.resolutions?.[1] ?? 0.1)
  const [prediction, setPrediction] = useState(null)
  const [measured, setMeasured] = useState(null)
  const rounded = Math.round(length / resolution) * resolution
  const decimals = resolution < 0.1 ? 2 : resolution < 1 ? 1 : 0
  const ticks = useMemo(() => Array.from({ length: 21 }, (_, index) => index), [])

  function run() {
    if (!prediction) return
    setMeasured({ value: rounded, resolution })
  }

  function reset() {
    setPrediction(null)
    setMeasured(null)
  }

  return (
    <LabShell
      eyebrow="Tahmin et → ölç → karşılaştır"
      title={data.title || 'Ölçüm çözünürlüğü laboratuvarı'}
      instruction="Gerçek uzunluğu ve cetvelin en küçük bölmesini değiştir. Ölçüm sonucunun neden bütün rakamları veremediğini gör."
      status={measured ? `Bu cetvelle rapor: ${measured.value.toFixed(decimals)} cm. Çözünürlük ${measured.resolution} cm olduğu için daha küçük basamakları kesin biliyormuş gibi yazamayız.` : ''}
    >
      <div className="physics-ruler" aria-label={`Cetvel üzerinde ${formatNumber(length)} santimetrelik cisim`}>
        <div className="physics-ruler__object" style={{ width: `${clamp(length * 8.5, 8, 94)}%` }} />
        <div className="physics-ruler__ticks" aria-hidden="true">
          {ticks.map((tick) => <i key={tick} className={tick % 2 === 0 ? 'is-major' : ''} />)}
        </div>
        <div className="physics-ruler__numbers" aria-hidden="true"><span>0</span><span>5</span><span>10 cm</span></div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="true-length" label="Gerçek uzunluk" min={1.2} max={9.8} step={0.01} value={length} unit="cm" onChange={(value) => { setLength(value); setMeasured(null) }} />
        <fieldset className="physics-resolution">
          <legend>Cetvelin en küçük bölmesi</legend>
          {(data.resolutions ?? [1, 0.5, 0.1]).map((value) => (
            <button key={value} type="button" aria-pressed={resolution === value} onClick={() => { setResolution(value); setMeasured(null) }}>{value} cm</button>
          ))}
        </fieldset>
      </div>
      <fieldset className="physics-prediction">
        <legend>En küçük bölmeyi küçültürsek ne olur?</legend>
        {[
          ['precision', 'Daha ayrıntılı ölçeriz'],
          ['same', 'Sonuç hiç değişmez'],
          ['exact', 'Ölçüm tamamen hatasız olur'],
        ].map(([value, label]) => (
          <button key={value} type="button" aria-pressed={prediction === value} onClick={() => { setPrediction(value); setMeasured(null) }}>{label}</button>
        ))}
      </fieldset>
      <div className="physics-lab__actions">
        <button type="button" disabled={!prediction} onClick={run}>Ölçümü yap</button>
        <button type="button" className="is-secondary" onClick={reset}><RotateCcw aria-hidden="true" /> Sıfırla</button>
      </div>
      {measured && prediction !== 'precision' && (
        <p className="m-0 mt-3 text-sm leading-6 text-danger-600">Tahminin ölçümün sınırını kaçırdı: daha küçük bölme ayrıntıyı artırır; fakat hiçbir gerçek ölçümü kusursuz ve sonsuz basamaklı yapmaz.</p>
      )}
    </LabShell>
  )
}

function VectorLab({ data }) {
  const [magnitude, setMagnitude] = useState(data.initialMagnitude ?? 6)
  const [angle, setAngle] = useState(data.initialAngle ?? 30)
  const [prediction, setPrediction] = useState(null)
  const [tested, setTested] = useState(false)
  const radians = angle * Math.PI / 180
  const x = magnitude * Math.cos(radians)
  const y = magnitude * Math.sin(radians)
  const arrowLength = 46 + magnitude * 10

  return (
    <LabShell
      eyebrow="Yönü değiştir → bileşenleri gözle"
      title={data.title || 'Skaler sayıdan vektöre'}
      instruction="Büyüklük aynı kalırken yalnız yönü değiştir. Sayı sabit kalsa da vektörün neden değiştiğini bileşenlerden izle."
      status={tested ? (prediction === 'changes' ? `Doğru: büyüklük ${magnitude} birim kaldı; fakat yön ve bileşenler değişti.` : `Büyüklük aynı kaldı ama yön değiştiği için vektör aynı değildir. Yeni bileşenler: x = ${formatNumber(x)}, y = ${formatNumber(y)}.`) : ''}
    >
      <div className="physics-vector-stage">
        <div className="physics-vector-stage__axis is-x" /><div className="physics-vector-stage__axis is-y" />
        <div className="physics-vector-stage__arrow" style={{ width: arrowLength, transform: `rotate(${-angle}deg)` }}><i /></div>
        <span className="physics-vector-stage__x">x</span><span className="physics-vector-stage__y">y</span>
        <strong>{magnitude} birim · {angle}°</strong>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="vector-magnitude" label="Büyüklük" min={1} max={10} value={magnitude} unit="birim" onChange={(value) => { setMagnitude(value); setTested(false) }} />
        <RangeControl id="vector-angle" label="Yön açısı" min={0} max={180} step={5} value={angle} unit="°" onChange={(value) => { setAngle(value); setTested(false) }} />
      </div>
      <div className="physics-readout-grid is-compact">
        <div><span>x bileşeni</span><strong>{formatNumber(x)}</strong></div>
        <div><span>y bileşeni</span><strong>{formatNumber(y)}</strong></div>
        <div><span>Büyüklük</span><strong>{magnitude}</strong></div>
      </div>
      <fieldset className="physics-prediction">
        <legend>Büyüklüğü sabit tutup yönü değiştirirsek vektör...</legend>
        <button type="button" aria-pressed={prediction === 'same'} onClick={() => { setPrediction('same'); setTested(false) }}>Aynı kalır</button>
        <button type="button" aria-pressed={prediction === 'changes'} onClick={() => { setPrediction('changes'); setTested(false) }}>Değişir</button>
      </fieldset>
      <div className="physics-lab__actions"><button type="button" disabled={!prediction} onClick={() => setTested(true)}>Dene</button></div>
    </LabShell>
  )
}

function DensityLab({ data }) {
  const [mass, setMass] = useState(data.initialMass ?? 240)
  const [volume, setVolume] = useState(data.initialVolume ?? 100)
  const density = mass / volume
  const cubeSize = clamp(58 + Math.cbrt(volume) * 13, 92, 172)
  const particleCount = Math.round(clamp(density * 13, 12, 70))
  const particles = useMemo(() => Array.from({ length: 70 }, (_, index) => ({
    x: 11 + ((index * 37) % 79),
    y: 12 + ((index * 53) % 76),
    size: 2 + (index % 3),
  })), [])

  return (
    <LabShell
      eyebrow="Değiştir → oranı gözle"
      title={data.title || 'Kütle–hacim–özkütle laboratuvarı'}
      instruction="Kütleyi ve hacmi ayrı ayrı değiştir. Özkütlenin cismin büyüklüğü değil, birim hacimde toplanan madde miktarı olduğunu gör."
      status={`Bu modelde d = m/V = ${formatNumber(mass)}/${formatNumber(volume)} = ${formatNumber(density, 2)} g/cm³.`}
    >
      <div className="physics-density-stage">
        <div className="physics-density-stage__object" style={{ width: cubeSize, height: cubeSize }} aria-label={`${formatNumber(volume)} santimetreküp hacimli model cisim`}>
          {particles.slice(0, particleCount).map((particle, index) => (
            <i key={index} style={{ left: `${particle.x}%`, top: `${particle.y}%`, width: particle.size, height: particle.size }} />
          ))}
        </div>
        <div className="physics-density-stage__readout">
          <span>Özkütle</span><strong>{formatNumber(density, 2)} g/cm³</strong>
          <small>{density < 1 ? 'Sudan daha düşük' : density === 1 ? 'Suyla aynı' : 'Sudan daha yüksek'}</small>
        </div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="density-mass" label="Kütle" min={40} max={800} step={10} value={mass} unit="g" onChange={setMass} />
        <RangeControl id="density-volume" label="Hacim" min={40} max={300} step={10} value={volume} unit="cm³" onChange={setVolume} />
      </div>
      <div className="physics-readout-grid is-compact">
        <div><span>Kütle</span><strong>{formatNumber(mass)} g</strong></div>
        <div><span>Hacim</span><strong>{formatNumber(volume)} cm³</strong></div>
        <div><span>Birim hacimde kütle</span><strong>{formatNumber(density, 2)} g/cm³</strong></div>
      </div>
    </LabShell>
  )
}

function LiquidLab({ data }) {
  const [adhesion, setAdhesion] = useState(data.initialAdhesion ?? 72)
  const [cohesion, setCohesion] = useState(data.initialCohesion ?? 45)
  const [radius, setRadius] = useState(data.initialRadius ?? 3)
  const tendency = adhesion - cohesion
  const height = clamp(Math.abs(tendency) * 1.6 / radius, 2, 62)
  const rises = tendency >= 0
  const meniscusPath = rises ? 'M22 34 Q50 54 78 34' : 'M22 48 Q50 29 78 48'

  return (
    <LabShell
      eyebrow="Etkileşimi değiştir → sıvıyı oku"
      title={data.title || 'Kohezyon–adezyon ve kılcallık laboratuvarı'}
      instruction="Sıvının kendi taneciklerine ve yüzeye ilgisini değiştir. Boru daraldıkça kılcal etkinin neden güçlendiğini izle."
      status={rises ? `Adezyon baskın: sıvı duvarı ıslatıyor ve dar boruda yaklaşık ${formatNumber(height, 1)} birim yükseliyor.` : `Kohezyon baskın: sıvı kendi içine çekiliyor; dışbükey menisküs ve yaklaşık ${formatNumber(height, 1)} birim alçalma eğilimi oluşuyor.`}
    >
      <div className="physics-liquid-stage">
        <div className="physics-liquid-stage__reservoir"><i /></div>
        <svg viewBox="0 0 260 190" role="img" aria-label={rises ? 'Kılcal boruda yükselen sıvı' : 'Kılcal boruda alçalan sıvı'}>
          <path className="is-tube" d={`M${130 - radius * 6} 18V155Q130 174 ${130 + radius * 6} 155V18`} />
          <rect className="is-liquid" x={130 - radius * 6 + 3} y={rises ? 154 - height : 154} width={radius * 12 - 6} height={rises ? height + 24 : 24} rx="3" />
          <path className="is-meniscus" d={meniscusPath} transform={`translate(${80},${rises ? 113 - height : 112}) scale(${radius * 0.12},1)`} />
          <path className="is-surface" d="M20 154Q60 149 100 154T180 154T240 154" />
        </svg>
        <div className="physics-liquid-stage__legend"><span>Yüzeye tutunma</span><strong>{rises ? 'Adezyon baskın' : 'Kohezyon baskın'}</strong></div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="liquid-adhesion" label="Adezyon eğilimi" min={10} max={100} value={adhesion} onChange={setAdhesion} />
        <RangeControl id="liquid-cohesion" label="Kohezyon eğilimi" min={10} max={100} value={cohesion} onChange={setCohesion} />
        <RangeControl id="liquid-radius" label="Boru yarıçapı" min={1} max={6} step={0.5} value={radius} unit="birim" onChange={setRadius} />
      </div>
    </LabShell>
  )
}

function BuoyancyLab({ data }) {
  const [objectDensity, setObjectDensity] = useState(data.initialObjectDensity ?? 0.72)
  const [liquidDensity, setLiquidDensity] = useState(data.initialLiquidDensity ?? 1)
  const [volume, setVolume] = useState(data.initialVolume ?? 320)
  const ratio = objectDensity / liquidDensity
  const state = ratio < 0.98 ? 'Yüzer' : ratio > 1.02 ? 'Batar' : 'Askıda kalır'
  const submerged = state === 'Yüzer' ? clamp(ratio * 100, 12, 94) : 100
  const weight = objectDensity * volume * 9.8 / 1000
  const buoyancy = state === 'Yüzer' ? weight : liquidDensity * volume * 9.8 / 1000
  const objectTop = state === 'Yüzer' ? 30 + (100 - submerged) * 0.45 : state === 'Batar' ? 156 : 96
  const objectSize = clamp(54 + Math.cbrt(volume) * 4, 76, 102)

  return (
    <LabShell
      eyebrow="Tahmin et → yoğunlukları değiştir"
      title={data.title || 'Yüzme–batma ve kaldırma kuvveti laboratuvarı'}
      instruction="Cismin ve sıvının özkütlesini karşılaştır. Hacmi değiştirirken kuvvetlerin nasıl, yüzme kararının ise hangi orana göre değiştiğini izle."
      status={`${state}: dᶜ/dₛ = ${formatNumber(ratio, 2)}. Kaldırma kuvveti ${formatNumber(buoyancy, 2)} N, ağırlık ${formatNumber(weight, 2)} N.`}
    >
      <div className="physics-buoyancy-stage">
        <div className="physics-buoyancy-stage__vessel">
          <div className="physics-buoyancy-stage__liquid" />
          <div className={`physics-buoyancy-stage__object is-${state === 'Yüzer' ? 'floating' : state === 'Batar' ? 'sinking' : 'neutral'}`} style={{ width: objectSize, height: objectSize, top: objectTop }}>
            <span>{formatNumber(objectDensity, 2)}</span><small>g/cm³</small>
          </div>
          <div className="physics-buoyancy-stage__arrow is-up" style={{ height: clamp(buoyancy * 14, 36, 112) }}><b>Fₖ</b></div>
          <div className="physics-buoyancy-stage__arrow is-down" style={{ height: clamp(weight * 14, 36, 112) }}><b>G</b></div>
          <div className="physics-buoyancy-stage__surface" />
        </div>
        <div className="physics-buoyancy-stage__decision">
          <span>Sonuç</span><strong>{state}</strong>
          <small>{state === 'Yüzer' ? `Hacmin yaklaşık %${Math.round(submerged)} kadarı sıvıda.` : state === 'Batar' ? 'Ağırlık, kaldırma kuvvetinden büyük.' : 'Kaldırma kuvveti ağırlığa eşit.'}</small>
        </div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="buoyancy-object-density" label="Cismin özkütlesi" min={0.2} max={2} step={0.02} value={objectDensity} unit="g/cm³" onChange={setObjectDensity} />
        <RangeControl id="buoyancy-liquid-density" label="Sıvının özkütlesi" min={0.5} max={1.5} step={0.02} value={liquidDensity} unit="g/cm³" onChange={setLiquidDensity} />
        <RangeControl id="buoyancy-volume" label="Cismin hacmi" min={100} max={600} step={20} value={volume} unit="cm³" onChange={setVolume} />
      </div>
      <div className="physics-readout-grid is-compact">
        <div><span>Kaldırma kuvveti</span><strong>{formatNumber(buoyancy, 2)} N</strong></div>
        <div><span>Ağırlık</span><strong>{formatNumber(weight, 2)} N</strong></div>
        <div><span>Batan hacim oranı</span><strong>%{Math.round(submerged)}</strong></div>
      </div>
    </LabShell>
  )
}

function PressureLab({ data }) {
  const [force, setForce] = useState(data.initialForce ?? 240)
  const [area, setArea] = useState(data.initialArea ?? 40)
  const [depth, setDepth] = useState(data.initialDepth ?? 80)
  const [liquidDensity, setLiquidDensity] = useState(data.initialLiquidDensity ?? 1)
  const solidPressure = force / area * 10
  const liquidPressure = liquidDensity * 9.8 * depth / 100
  const plateWidth = clamp(76 + area * 2.1, 92, 230)
  const liquidLevel = clamp(28 + depth * 0.62, 45, 154)

  return (
    <LabShell
      eyebrow="Alanı ve derinliği değiştir"
      title={data.title || 'Katı–sıvı basıncı laboratuvarı'}
      instruction="Aynı kuvveti farklı alana yay; sonra sıvıda derinlik ve özkütleyi değiştir. Basıncın iki sistemde hangi değişkenlerden doğduğunu karşılaştır."
      status={`Katıda P = F/A = ${formatNumber(solidPressure, 1)} kPa. Sıvıda P = dgh = ${formatNumber(liquidPressure, 1)} kPa.`}
    >
      <div className="physics-pressure-stage">
        <div className="physics-pressure-stage__solid">
          <span className="physics-pressure-stage__force" style={{ height: clamp(force / 3.2, 44, 118) }}>F</span>
          <div className="physics-pressure-stage__block" />
          <div className="physics-pressure-stage__plate" style={{ width: plateWidth }} />
          <small>Temas alanı {formatNumber(area)} cm²</small>
          <strong>{formatNumber(solidPressure, 1)} kPa</strong>
        </div>
        <div className="physics-pressure-stage__liquid">
          <div className="physics-pressure-stage__column" style={{ height: liquidLevel }}>
            <i style={{ top: `${clamp(100 - depth, 8, 82)}%` }} />
          </div>
          <span>h = {formatNumber(depth)} cm</span>
          <strong>{formatNumber(liquidPressure, 1)} kPa</strong>
        </div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="pressure-force" label="Katıya uygulanan kuvvet" min={50} max={500} step={10} value={force} unit="N" onChange={setForce} />
        <RangeControl id="pressure-area" label="Temas alanı" min={10} max={80} step={2} value={area} unit="cm²" onChange={setArea} />
        <RangeControl id="pressure-depth" label="Sıvı derinliği" min={10} max={150} step={5} value={depth} unit="cm" onChange={setDepth} />
        <RangeControl id="pressure-liquid-density" label="Sıvı özkütlesi" min={0.6} max={1.4} step={0.05} value={liquidDensity} unit="g/cm³" onChange={setLiquidDensity} />
      </div>
    </LabShell>
  )
}

function ThermalLab({ data }) {
  const [hotMass, setHotMass] = useState(data.initialHotMass ?? 200)
  const [coldMass, setColdMass] = useState(data.initialColdMass ?? 300)
  const [hotTemperature, setHotTemperature] = useState(data.initialHotTemperature ?? 80)
  const [coldTemperature, setColdTemperature] = useState(data.initialColdTemperature ?? 20)
  const specificHeat = data.specificHeat ?? 4.18
  const equilibrium = (hotMass * hotTemperature + coldMass * coldTemperature) / (hotMass + coldMass)
  const transferredHeat = hotMass * specificHeat * (hotTemperature - equilibrium)
  const hotDrop = hotTemperature - equilibrium
  const coldRise = equilibrium - coldTemperature

  return (
    <LabShell
      eyebrow="Enerjiyi izle"
      title={data.title || 'Isı alışverişi laboratuvarı'}
      instruction="Aynı maddeden iki su kütlesini yalıtılmış kapta karıştır. Kütleleri ve başlangıç sıcaklıklarını değiştir; denge sıcaklığının neden basit aritmetik ortalama olmadığını gözle."
      status={`Sıcak su ${formatNumber(transferredHeat / 1000, 2)} kJ enerji verdi; soğuk su aynı enerjiyi aldı. Denge sıcaklığı ${formatNumber(equilibrium, 1)} °C.`}
    >
      <div className="physics-thermal-stage" role="img" aria-label={`Sıcak su ${hotTemperature} derece, soğuk su ${coldTemperature} derece, denge ${formatNumber(equilibrium, 1)} derece`}>
        <div className="physics-thermal-stage__sample is-hot">
          <span>Sıcak su</span>
          <div className="physics-thermal-stage__thermometer"><i style={{ height: `${clamp(hotTemperature, 8, 96)}%` }} /></div>
          <strong>{formatNumber(hotTemperature)} °C</strong>
          <small>{formatNumber(hotMass)} g</small>
        </div>
        <div className="physics-thermal-stage__flow" aria-hidden="true">
          <b>Q</b><i />
        </div>
        <div className="physics-thermal-stage__sample is-cold">
          <span>Soğuk su</span>
          <div className="physics-thermal-stage__thermometer"><i style={{ height: `${clamp(coldTemperature, 8, 96)}%` }} /></div>
          <strong>{formatNumber(coldTemperature)} °C</strong>
          <small>{formatNumber(coldMass)} g</small>
        </div>
        <div className="physics-thermal-stage__equilibrium">
          <span>Isıl denge</span>
          <div className="physics-thermal-stage__mix" style={{ '--thermal-level': `${clamp(equilibrium, 8, 96)}%` }}><i /></div>
          <strong>{formatNumber(equilibrium, 1)} °C</strong>
          <small>Sıcak taraf −{formatNumber(hotDrop, 1)} °C · Soğuk taraf +{formatNumber(coldRise, 1)} °C</small>
        </div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="thermal-hot-mass" label="Sıcak su kütlesi" min={50} max={500} step={25} value={hotMass} unit="g" onChange={setHotMass} />
        <RangeControl id="thermal-cold-mass" label="Soğuk su kütlesi" min={50} max={500} step={25} value={coldMass} unit="g" onChange={setColdMass} />
        <RangeControl id="thermal-hot-temperature" label="Sıcak su" min={40} max={95} step={1} value={hotTemperature} unit="°C" onChange={setHotTemperature} />
        <RangeControl id="thermal-cold-temperature" label="Soğuk su" min={5} max={35} step={1} value={coldTemperature} unit="°C" onChange={setColdTemperature} />
      </div>
    </LabShell>
  )
}

const EXPANSION_MATERIALS = {
  steel: { label: 'Çelik', alpha: 12, tone: 'is-steel' },
  brass: { label: 'Pirinç', alpha: 19, tone: 'is-brass' },
  aluminum: { label: 'Alüminyum', alpha: 23, tone: 'is-aluminum' },
}

function ExpansionLab({ data }) {
  const [materialKey, setMaterialKey] = useState(data.initialMaterial ?? 'steel')
  const [length, setLength] = useState(data.initialLength ?? 2)
  const [temperatureChange, setTemperatureChange] = useState(data.initialTemperatureChange ?? 100)
  const material = EXPANSION_MATERIALS[materialKey]
  const extensionMillimeters = material.alpha * 1e-6 * length * temperatureChange * 1000
  const visualGrowth = clamp(extensionMillimeters * 6, 3, 44)

  return (
    <LabShell
      eyebrow="Boy değişimini büyüterek gör"
      title={data.title || 'Doğrusal genleşme laboratuvarı'}
      instruction="Malzemeyi, ilk boyu ve sıcaklık artışını değiştir. Gerçek uzama milimetre düzeyindedir; sahnedeki hareket fark edilebilmesi için bilinçli olarak büyütülür."
      status={`${material.label} çubuk için ΔL = αL₀ΔT = ${material.alpha}×10⁻⁶ × ${formatNumber(length)} × ${formatNumber(temperatureChange)} = ${formatNumber(extensionMillimeters, 2)} mm.`}
    >
      <div className="physics-expansion-tabs" role="group" aria-label="Malzeme seçimi">
        {Object.entries(EXPANSION_MATERIALS).map(([key, option]) => (
          <button key={key} type="button" className={materialKey === key ? 'is-active' : ''} aria-pressed={materialKey === key} onClick={() => setMaterialKey(key)}>
            {option.label}<small>α = {option.alpha}×10⁻⁶ /°C</small>
          </button>
        ))}
      </div>
      <div className="physics-expansion-stage" role="img" aria-label={`${material.label} çubuk ${formatNumber(extensionMillimeters, 2)} milimetre uzuyor`}>
        <div className="physics-expansion-stage__scale"><span>Başlangıç boyu {formatNumber(length)} m</span><span>ΔT = {formatNumber(temperatureChange)} °C</span></div>
        <div className={`physics-expansion-stage__rail ${material.tone}`} style={{ '--growth': `${visualGrowth}px` }}><i /><b /></div>
        <div className="physics-expansion-stage__gap"><span>Genleşme payı</span></div>
        <div className="physics-expansion-stage__reading"><span>Gerçek uzama</span><strong>{formatNumber(extensionMillimeters, 2)} mm</strong><small>Görsel hareket ölçekli değildir.</small></div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="expansion-length" label="İlk boy" min={0.5} max={5} step={0.25} value={length} unit="m" onChange={setLength} />
        <RangeControl id="expansion-temperature" label="Sıcaklık artışı" min={0} max={200} step={5} value={temperatureChange} unit="°C" onChange={setTemperatureChange} />
      </div>
    </LabShell>
  )
}

function graphPath(values, width = 240, height = 112) {
  const min = Math.min(0, ...values)
  const max = Math.max(0, ...values)
  const span = max - min || 1
  return values.map((value, index) => {
    const x = 12 + (index / Math.max(values.length - 1, 1)) * (width - 24)
    const y = height - 12 - ((value - min) / span) * (height - 24)
    return `${index ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
}

function MotionForceLab({ data }) {
  const [rightForce, setRightForce] = useState(data.initialRightForce ?? 30)
  const [leftForce, setLeftForce] = useState(data.initialLeftForce ?? 10)
  const [mass, setMass] = useState(data.initialMass ?? 5)
  const [time, setTime] = useState(data.initialTime ?? 4)
  const netForce = rightForce - leftForce
  const acceleration = netForce / mass
  const velocity = acceleration * time
  const position = 0.5 * acceleration * time * time
  const direction = netForce > 0 ? 'sağa' : netForce < 0 ? 'sola' : 'yok'
  const samples = Array.from({ length: 25 }, (_, index) => (time * index) / 24)
  const positionPath = graphPath(samples.map((sample) => 0.5 * acceleration * sample * sample))
  const velocityPath = graphPath(samples.map((sample) => acceleration * sample))
  const accelerationPath = graphPath(samples.map(() => acceleration))
  const blockOffset = clamp(position * 1.9, -38, 38)

  return (
    <LabShell
      eyebrow="Kuvvetleri değiştir, hareketi ve grafiği birlikte izle"
      title={data.title || 'Net kuvvet–hareket laboratuvarı'}
      instruction="Sağa ve sola etki eden kuvvetleri, kütleyi ve geçen süreyi değiştir. Aynı anda cismin konumunu, vektörleri ve x–t, v–t, a–t grafiklerini karşılaştır."
      status={`Fnet = ${formatNumber(rightForce)} − ${formatNumber(leftForce)} = ${formatNumber(netForce)} N (${direction}). a = Fnet/m = ${formatNumber(acceleration, 2)} m/s²; ${formatNumber(time)} s sonunda v = ${formatNumber(velocity, 2)} m/s ve x = ${formatNumber(position, 2)} m.`}
    >
      <div className="physics-motion-stage" role="img" aria-label={`Net kuvvet ${formatNumber(netForce)} newton, ivme ${formatNumber(acceleration, 2)} metre bölü saniye kare`}>
        <div className="physics-motion-stage__track"><i /><b /></div>
        <div className="physics-motion-stage__origin">0</div>
        <div className="physics-motion-stage__block" style={{ left: `calc(50% + ${blockOffset}%)` }}>
          <span>{formatNumber(mass)} kg</span>
          <i className="is-right" style={{ width: `${clamp(rightForce * 1.7, 4, 102)}px` }}><b>{formatNumber(rightForce)} N</b></i>
          <i className="is-left" style={{ width: `${clamp(leftForce * 1.7, 4, 102)}px` }}><b>{formatNumber(leftForce)} N</b></i>
        </div>
        <div className="physics-motion-stage__readout">
          <span>t = {formatNumber(time)} s</span><strong>x = {formatNumber(position, 2)} m</strong><small>v = {formatNumber(velocity, 2)} m/s · a = {formatNumber(acceleration, 2)} m/s²</small>
        </div>
      </div>
      <div className="physics-motion-graphs" aria-label="Hareket grafikleri">
        {[
          { label: 'x–t', path: positionPath },
          { label: 'v–t', path: velocityPath },
          { label: 'a–t', path: accelerationPath },
        ].map((graph) => (
          <div key={graph.label}>
            <span>{graph.label}</span>
            <svg viewBox="0 0 240 112" aria-hidden="true">
              <path className="is-axis" d="M12 8V100H232" />
              <path className="is-grid" d="M12 54H232M122 8V100" />
              <path className="is-data" d={graph.path} />
            </svg>
          </div>
        ))}
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="motion-force-right" label="Sağa kuvvet" min={0} max={60} step={2} value={rightForce} unit="N" onChange={setRightForce} />
        <RangeControl id="motion-force-left" label="Sola kuvvet" min={0} max={40} step={2} value={leftForce} unit="N" onChange={setLeftForce} />
        <RangeControl id="motion-mass" label="Kütle" min={1} max={20} step={1} value={mass} unit="kg" onChange={setMass} />
        <RangeControl id="motion-time" label="Zaman" min={1} max={8} step={0.5} value={time} unit="s" onChange={setTime} />
      </div>
    </LabShell>
  )
}

function EnergyLab({ data }) {
  const [mass, setMass] = useState(data.initialMass ?? 4)
  const [height, setHeight] = useState(data.initialHeight ?? 12)
  const [position, setPosition] = useState(data.initialPosition ?? 35)
  const [loss, setLoss] = useState(data.initialLoss ?? 10)
  const total = mass * 10 * height
  const converted = total * (position / 100)
  const thermal = converted * (loss / 100)
  const kinetic = converted - thermal
  const potential = total - converted
  const speed = Math.sqrt((2 * kinetic) / mass)
  const shares = [
    { key: 'potential', label: 'Potansiyel', value: potential, tone: 'is-potential' },
    { key: 'kinetic', label: 'Kinetik', value: kinetic, tone: 'is-kinetic' },
    { key: 'thermal', label: 'Termal', value: thermal, tone: 'is-thermal' },
  ]

  return (
    <LabShell
      eyebrow="Enerji türlerini eş zamanlı izle"
      title={data.title || 'Enerji dönüşümü laboratuvarı'}
      instruction="Kütleyi, ilk yüksekliği, yol üzerindeki konumu ve sürtünme payını değiştir. Mekanik enerji azalırken termal payın nasıl büyüdüğünü izle."
      status={`Toplam enerji ${formatNumber(total)} J: Ep = ${formatNumber(potential)} J, Ek = ${formatNumber(kinetic)} J, Etermal = ${formatNumber(thermal)} J. Anlık sürat ≈ ${formatNumber(speed, 2)} m/s.`}
    >
      <div className="physics-energy-stage" role="img" aria-label={`Toplam ${formatNumber(total)} joule enerjinin ${formatNumber(potential)} joule potansiyel, ${formatNumber(kinetic)} joule kinetik ve ${formatNumber(thermal)} joule termal dağılımı`}>
        <div className="physics-energy-track"><i /></div>
        <div className="physics-energy-cart" style={{ left: `${8 + position * 0.72}%`, top: `${14 + position * 0.56}%`, transform: `translate(-50%, -50%) rotate(${-12 + position * 0.12}deg)` }}><span>{formatNumber(mass)} kg</span></div>
        <div className="physics-energy-height"><span>{formatNumber(height * (1 - position / 100), 1)} m</span></div>
        <div className="physics-energy-bars">
          {shares.map((item) => (
            <div key={item.key}>
              <span>{item.label}</span>
              <i className={item.tone} style={{ '--share': `${(item.value / total) * 100}%` }} />
              <strong>{formatNumber(item.value)} J</strong>
            </div>
          ))}
          <p><span>Toplam</span><strong>{formatNumber(potential + kinetic + thermal)} J</strong></p>
        </div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="energy-mass" label="Kütle" min={1} max={12} step={1} value={mass} unit="kg" onChange={setMass} />
        <RangeControl id="energy-height" label="İlk yükseklik" min={2} max={20} step={1} value={height} unit="m" onChange={setHeight} />
        <RangeControl id="energy-position" label="Yol üzerindeki konum" min={0} max={100} step={5} value={position} unit="%" onChange={setPosition} />
        <RangeControl id="energy-loss" label="Sürtünmeye dönüşen pay" min={0} max={50} step={5} value={loss} unit="%" onChange={setLoss} />
      </div>
    </LabShell>
  )
}

function ElectrostaticLab({ data }) {
  const [chargeOne, setChargeOne] = useState(data.initialChargeOne ?? 3)
  const [chargeTwo, setChargeTwo] = useState(data.initialChargeTwo ?? -4)
  const [distance, setDistance] = useState(data.initialDistance ?? 0.5)
  const force = chargeOne === 0 || chargeTwo === 0
    ? 0
    : (0.009 * Math.abs(chargeOne * chargeTwo)) / (distance * distance)
  const relation = force === 0 ? 'etkileşim yok' : chargeOne * chargeTwo < 0 ? 'çekme' : 'itme'
  const gap = 120 + ((distance - 0.2) / 1.3) * 190
  const arrow = clamp(force * 70, 0, 92)
  const chargeLabel = (value) => value > 0 ? `+${value}` : `${value}`

  return (
    <LabShell
      eyebrow="Yükleri ve uzaklığı değiştir"
      title={data.title || 'Coulomb kuvveti laboratuvarı'}
      instruction="İki yükün işaretini, büyüklüğünü ve aralarındaki uzaklığı değiştir. Kuvvet oklarının yönü ile ters-kare büyüklük ilişkisini birlikte izle."
      status={`q₁ = ${chargeLabel(chargeOne)} μC, q₂ = ${chargeLabel(chargeTwo)} μC ve r = ${formatNumber(distance, 2)} m için F = ${formatNumber(force, 3)} N; etkileşim ${relation}. Kuvvetler iki cisimde eşit büyüklükte ve zıt yönlüdür.`}
    >
      <div className="physics-electrostatic-presets" role="group" aria-label="Coulomb deneyi hazır düzenleri">
        <button type="button" onClick={() => { setChargeOne(3); setChargeTwo(-4); setDistance(0.5) }}>Zıt yükler · çekme</button>
        <button type="button" onClick={() => { setChargeOne(3); setChargeTwo(4); setDistance(0.5) }}>Aynı yükler · itme</button>
        <button type="button" onClick={() => { setChargeOne(3); setChargeTwo(-4); setDistance(1) }}>Uzaklığı iki kat yap</button>
      </div>
      <div className={`physics-electrostatic-stage is-${relation.replace('ş', 's').replace('ç', 'c')}`} role="img" aria-label={`${relation} etkileşimi, kuvvet büyüklüğü ${formatNumber(force, 3)} newton`}>
        <div className="physics-electrostatic-stage__axis" style={{ width: `${gap}px` }}><span>r = {formatNumber(distance, 2)} m</span></div>
        <div className={`physics-electrostatic-charge ${chargeOne > 0 ? 'is-positive' : chargeOne < 0 ? 'is-negative' : 'is-neutral'} is-one`} style={{ left: `calc(50% - ${gap / 2}px)` }}>
          <strong>{chargeLabel(chargeOne)}</strong><small>μC</small>
          <i className={relation === 'çekme' ? 'is-inward' : 'is-outward'} style={{ width: `${arrow}px` }}><b>F₁</b></i>
        </div>
        <div className={`physics-electrostatic-charge ${chargeTwo > 0 ? 'is-positive' : chargeTwo < 0 ? 'is-negative' : 'is-neutral'} is-two`} style={{ left: `calc(50% + ${gap / 2}px)` }}>
          <strong>{chargeLabel(chargeTwo)}</strong><small>μC</small>
          <i className={relation === 'çekme' ? 'is-inward' : 'is-outward'} style={{ width: `${arrow}px` }}><b>F₂</b></i>
        </div>
        <div className="physics-electrostatic-stage__readout"><span>Coulomb kuvveti</span><strong>{formatNumber(force, 3)} N</strong><small>{relation === 'çekme' ? 'Zıt işaretler birbirini çeker.' : relation === 'itme' ? 'Aynı işaretler birbirini iter.' : 'Yüklerden biri nötr olduğu için bu noktasal modelde kuvvet sıfırdır.'}</small></div>
      </div>
      <div className="physics-electrostatic-ratio" aria-label="Uzaklığın kuvvete etkisi">
        {[1, 2, 3].map((factor) => (
          <div key={factor}><span>{factor}r</span><i style={{ '--force-share': `${100 / (factor * factor)}%` }} /><strong>{factor === 1 ? 'F' : `F/${factor * factor}`}</strong></div>
        ))}
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="electrostatic-q1" label="Birinci yük" min={-6} max={6} step={1} value={chargeOne} unit="μC" onChange={setChargeOne} />
        <RangeControl id="electrostatic-q2" label="İkinci yük" min={-6} max={6} step={1} value={chargeTwo} unit="μC" onChange={setChargeTwo} />
        <RangeControl id="electrostatic-distance" label="Yükler arası uzaklık" min={0.2} max={1.5} step={0.1} value={distance} unit="m" onChange={setDistance} />
      </div>
    </LabShell>
  )
}

function CircuitLab({ data }) {
  const [topology, setTopology] = useState(data.initialTopology ?? 'series')
  const [voltage, setVoltage] = useState(data.initialVoltage ?? 12)
  const [resistanceOne, setResistanceOne] = useState(data.initialResistanceOne ?? 4)
  const [resistanceTwo, setResistanceTwo] = useState(data.initialResistanceTwo ?? 8)
  const isSeries = topology === 'series'
  const equivalent = isSeries
    ? resistanceOne + resistanceTwo
    : (resistanceOne * resistanceTwo) / (resistanceOne + resistanceTwo)
  const totalCurrent = voltage / equivalent
  const currentOne = isSeries ? totalCurrent : voltage / resistanceOne
  const currentTwo = isSeries ? totalCurrent : voltage / resistanceTwo
  const voltageOne = isSeries ? currentOne * resistanceOne : voltage
  const voltageTwo = isSeries ? currentTwo * resistanceTwo : voltage
  const power = voltage * totalCurrent

  return (
    <LabShell
      eyebrow="Bağlantıyı değiştir, tüm okumaları birlikte izle"
      title={data.title || 'Seri–paralel devre laboratuvarı'}
      instruction="Kaynak gerilimini ve iki direnci değiştir. Seri ve paralel bağlantıda eşdeğer direnç, toplam akım, kol akımları ve gerilim paylaşımını karşılaştır."
      status={`${isSeries ? 'Seri' : 'Paralel'} bağlantıda Reş = ${formatNumber(equivalent, 2)} Ω, Itoplam = ${formatNumber(totalCurrent, 2)} A ve Ptoplam = ${formatNumber(power, 2)} W. R₁: ${formatNumber(voltageOne, 2)} V / ${formatNumber(currentOne, 2)} A; R₂: ${formatNumber(voltageTwo, 2)} V / ${formatNumber(currentTwo, 2)} A.`}
    >
      <div className="physics-circuit-presets" role="group" aria-label="Devre bağlantısı seçimi">
        <button type="button" className={isSeries ? 'is-active' : ''} aria-pressed={isSeries} onClick={() => setTopology('series')}>Seri bağlantı</button>
        <button type="button" className={!isSeries ? 'is-active' : ''} aria-pressed={!isSeries} onClick={() => setTopology('parallel')}>Paralel bağlantı</button>
        <button type="button" onClick={() => { setResistanceOne(6); setResistanceTwo(6) }}>İki eşit direnç · 6 Ω</button>
      </div>
      <div className={`physics-circuit-stage is-${topology}`} role="img" aria-label={`${isSeries ? 'Seri' : 'Paralel'} bağlı iki dirençli devre, eşdeğer direnç ${formatNumber(equivalent, 2)} ohm`}>
        <svg viewBox="0 0 720 330" aria-hidden="true">
          <path className="is-wire" d="M90 70H630V260H90Z" />
          <path className="is-battery-long" d="M72 132H108" /><path className="is-battery-short" d="M80 176H100" />
          <text x="44" y="159" className="is-source-label">{formatNumber(voltage)} V</text>
          {isSeries ? (
            <>
              <rect className="is-resistor" x="220" y="46" width="120" height="48" rx="12" />
              <path className="is-zigzag" d="M236 70l14-15 14 30 14-30 14 30 14-30 18 15" />
              <rect className="is-resistor" x="430" y="46" width="120" height="48" rx="12" />
              <path className="is-zigzag" d="M446 70l14-15 14 30 14-30 14 30 14-30 18 15" />
              <text x="280" y="124" className="is-component-label" textAnchor="middle">R₁ · {formatNumber(resistanceOne)} Ω</text>
              <text x="490" y="124" className="is-component-label" textAnchor="middle">R₂ · {formatNumber(resistanceTwo)} Ω</text>
              <path className="is-current" d="M150 70H205" /><path className="is-current" d="M355 70H415" />
            </>
          ) : (
            <>
              <path className="is-wire" d="M210 70V260M510 70V260" />
              <rect className="is-resistor" x="300" y="98" width="120" height="48" rx="12" />
              <path className="is-zigzag" d="M316 122l14-15 14 30 14-30 14 30 14-30 18 15" />
              <rect className="is-resistor" x="300" y="194" width="120" height="48" rx="12" />
              <path className="is-zigzag" d="M316 218l14-15 14 30 14-30 14 30 14-30 18 15" />
              <path className="is-wire" d="M210 122H300M420 122H510M210 218H300M420 218H510" />
              <circle className="is-junction" cx="210" cy="122" r="7" /><circle className="is-junction" cx="510" cy="122" r="7" />
              <circle className="is-junction" cx="210" cy="218" r="7" /><circle className="is-junction" cx="510" cy="218" r="7" />
              <text x="360" y="87" className="is-component-label" textAnchor="middle">R₁ · {formatNumber(resistanceOne)} Ω</text>
              <text x="360" y="287" className="is-component-label" textAnchor="middle">R₂ · {formatNumber(resistanceTwo)} Ω</text>
              <path className="is-current" d="M225 122H282" /><path className="is-current is-second" d="M225 218H282" />
            </>
          )}
        </svg>
        <div className="physics-circuit-stage__meter"><span>Eşdeğer</span><strong>{formatNumber(equivalent, 2)} Ω</strong><small>Itoplam = {formatNumber(totalCurrent, 2)} A</small></div>
      </div>
      <div className="physics-circuit-readings">
        <div><span>R₁ kolu</span><strong>{formatNumber(voltageOne, 2)} V</strong><small>{formatNumber(currentOne, 2)} A</small></div>
        <div><span>R₂ kolu</span><strong>{formatNumber(voltageTwo, 2)} V</strong><small>{formatNumber(currentTwo, 2)} A</small></div>
        <div><span>Toplam güç</span><strong>{formatNumber(power, 2)} W</strong><small>P = V·I</small></div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="circuit-voltage" label="Kaynak gerilimi" min={2} max={24} step={1} value={voltage} unit="V" onChange={setVoltage} />
        <RangeControl id="circuit-r1" label="Birinci direnç" min={1} max={20} step={1} value={resistanceOne} unit="Ω" onChange={setResistanceOne} />
        <RangeControl id="circuit-r2" label="İkinci direnç" min={1} max={20} step={1} value={resistanceTwo} unit="Ω" onChange={setResistanceTwo} />
      </div>
    </LabShell>
  )
}

function MagnetismLab({ data }) {
  const [field, setField] = useState(data.initialField ?? 0.8)
  const [current, setCurrent] = useState(data.initialCurrent ?? 3)
  const [length, setLength] = useState(data.initialLength ?? 0.5)
  const [angle, setAngle] = useState(data.initialAngle ?? 90)
  const [currentDirection, setCurrentDirection] = useState(1)
  const [fieldDirection, setFieldDirection] = useState(1)
  const force = field * current * length * Math.sin((angle * Math.PI) / 180)
  const hasForce = force > 0.0001
  const directionSign = currentDirection * fieldDirection
  const directionLabel = hasForce ? (directionSign > 0 ? 'yukarı' : 'aşağı') : 'yok'

  return (
    <LabShell
      eyebrow="Alanı, akımı ve açıyı birlikte değiştir"
      title={data.title || 'Manyetik kuvvet laboratuvarı'}
      instruction="Telin alandaki etkin uzunluğunu, akımı, alan şiddetini ve tel–alan açısını değiştir. Sonra akım ya da alan yönünü ters çevirerek kuvvet yönünü sınayıp karşılaştır."
      status={`B = ${formatNumber(field, 2)} T, I = ${formatNumber(current, 1)} A, L = ${formatNumber(length, 2)} m ve θ = ${angle}° için F = ${formatNumber(force, 3)} N. Kuvvet yönü: ${directionLabel}.`}
    >
      <div className="physics-magnetism-presets" role="group" aria-label="Manyetik kuvvet hazır deneyleri">
        <button type="button" onClick={() => setAngle(90)}>Dik tel · maksimum</button>
        <button type="button" onClick={() => setAngle(0)}>Paralel tel · sıfır</button>
        <button type="button" onClick={() => setCurrentDirection((value) => -value)}>Akımı ters çevir</button>
        <button type="button" onClick={() => setFieldDirection((value) => -value)}>Alanı ters çevir</button>
      </div>
      <div className="physics-magnetism-direction" role="group" aria-label="Akım ve alan yönleri">
        <button type="button" className={currentDirection > 0 ? 'is-active' : ''} aria-pressed={currentDirection > 0} onClick={() => setCurrentDirection(1)}>I yönü: sağa</button>
        <button type="button" className={currentDirection < 0 ? 'is-active' : ''} aria-pressed={currentDirection < 0} onClick={() => setCurrentDirection(-1)}>I yönü: sola</button>
        <button type="button" className={fieldDirection > 0 ? 'is-active' : ''} aria-pressed={fieldDirection > 0} onClick={() => setFieldDirection(1)}>B yönü: N → S</button>
        <button type="button" className={fieldDirection < 0 ? 'is-active' : ''} aria-pressed={fieldDirection < 0} onClick={() => setFieldDirection(-1)}>B yönü: S → N</button>
      </div>
      <div className="physics-magnetism-stage" role="img" aria-label={`${formatNumber(force, 3)} newton büyüklüğünde, ${directionLabel} yönlü manyetik kuvvet`}>
        <div className="physics-magnetism-pole is-north"><strong>N</strong><small>Kuzey</small></div>
        <div className="physics-magnetism-pole is-south"><strong>S</strong><small>Güney</small></div>
        <div className={`physics-magnetism-field ${fieldDirection < 0 ? 'is-reversed' : ''}`} aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => <i key={index}><span>→</span></i>)}
        </div>
        <div className="physics-magnetism-wire" style={{ transform: `translate(-50%, -50%) rotate(${-angle}deg)` }}>
          <i className={currentDirection < 0 ? 'is-reversed' : ''}>→</i>
          <span>I = {formatNumber(current, 1)} A</span>
        </div>
        <div className={`physics-magnetism-force ${!hasForce ? 'is-zero' : directionSign > 0 ? 'is-up' : 'is-down'}`}>
          <i>{hasForce ? '↑' : '×'}</i><strong>F = {formatNumber(force, 3)} N</strong><small>{hasForce ? directionLabel : 'tel alana paralel'}</small>
        </div>
        <div className="physics-magnetism-formula"><span>F = B·I·L·sinθ</span><strong>sin {angle}° = {formatNumber(Math.sin((angle * Math.PI) / 180), 2)}</strong></div>
      </div>
      <div className="physics-magnetism-readings">
        <div><span>Büyüklük</span><strong>{formatNumber(force, 3)} N</strong><small>{angle === 90 ? 'maksimum' : angle === 0 || angle === 180 ? 'sıfır' : 'açıya bağlı'}</small></div>
        <div><span>Yön</span><strong>{directionLabel}</strong><small>I × B sağ el kuralı</small></div>
        <div><span>Etkin bileşen</span><strong>{formatNumber(length * Math.sin((angle * Math.PI) / 180), 2)} m</strong><small>L·sinθ</small></div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="magnetism-field" label="Manyetik alan" min={0.1} max={1.5} step={0.1} value={field} unit="T" onChange={setField} />
        <RangeControl id="magnetism-current" label="Akım şiddeti" min={0.5} max={8} step={0.5} value={current} unit="A" onChange={setCurrent} />
        <RangeControl id="magnetism-length" label="Alandaki tel uzunluğu" min={0.1} max={1} step={0.1} value={length} unit="m" onChange={setLength} />
        <RangeControl id="magnetism-angle" label="Tel ile alan açısı" min={0} max={180} step={15} value={angle} unit="°" onChange={setAngle} />
      </div>
    </LabShell>
  )
}

function WaveLab({ data }) {
  const [speed, setSpeed] = useState(data.initialSpeed ?? 12)
  const [frequency, setFrequency] = useState(data.initialFrequency ?? 2)
  const [amplitude, setAmplitude] = useState(data.initialAmplitude ?? 1)
  const wavelength = speed / frequency
  const period = 1 / frequency
  const cycles = clamp(12 / wavelength, 1, 8)
  const wavePath = useMemo(() => {
    const points = Array.from({ length: 121 }, (_, index) => {
      const x = 40 + (index / 120) * 640
      const y = 155 - Math.sin((index / 120) * Math.PI * 2 * cycles) * amplitude * 34
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
    })
    return points.join(' ')
  }, [cycles, amplitude])

  return (
    <LabShell
      eyebrow="Kaynağı ve ortamı ayrı yönet"
      title={data.title || 'Dalga bağıntısı laboratuvarı'}
      instruction="Kaynak frekansını, ortamın dalga hızını ve genliği değiştir. v=λ·f bağıntısında hangi değişkenin kaynak, hangisinin ortam tarafından belirlendiğini gözle."
      status={`v = ${formatNumber(speed, 1)} m/s, f = ${formatNumber(frequency, 1)} Hz için λ = ${formatNumber(wavelength, 2)} m ve T = ${formatNumber(period, 2)} s. Genlik ${formatNumber(amplitude, 1)} birimdir; bu modelde hızı değiştirmez.`}
    >
      <div className="physics-wave-presets" role="group" aria-label="Dalga deneyi hazır düzenleri">
        <button type="button" onClick={() => { setSpeed(12); setFrequency(2); setAmplitude(1) }}>Başlangıç · λ 6 m</button>
        <button type="button" onClick={() => { setSpeed(12); setFrequency(4) }}>Frekansı iki katına çıkar</button>
        <button type="button" onClick={() => { setSpeed(18); setFrequency(2) }}>Daha hızlı ortam</button>
        <button type="button" onClick={() => setAmplitude(2)}>Genliği iki katına çıkar</button>
      </div>
      <div className="physics-wave-stage" role="img" aria-label={`${formatNumber(wavelength, 2)} metre dalga boylu, ${formatNumber(amplitude, 1)} birim genlikli enine dalga`}>
        <svg viewBox="0 0 720 310" aria-hidden="true">
          <path className="is-grid" d="M40 55H680M40 105H680M40 155H680M40 205H680M40 255H680M120 35V275M200 35V275M280 35V275M360 35V275M440 35V275M520 35V275M600 35V275" />
          <path className="is-equilibrium" d="M30 155H690" />
          <path className="is-wave" d={wavePath} />
          <path className="is-amplitude" d={`M95 155V${155 - amplitude * 34}`} />
          <path className="is-direction" d="M520 45H655m0 0-13-8m13 8-13 8" />
          <text x="588" y="31" textAnchor="middle">yayılma yönü</text>
          <text x="78" y="149">A</text>
          <text x="46" y="292">kaynak: f = {formatNumber(frequency, 1)} Hz</text>
        </svg>
        <div className="physics-wave-stage__formula"><span>v = λ·f</span><strong>{formatNumber(speed, 1)} = {formatNumber(wavelength, 2)} × {formatNumber(frequency, 1)}</strong></div>
      </div>
      <div className="physics-wave-readings">
        <div><span>Dalga boyu</span><strong>{formatNumber(wavelength, 2)} m</strong><small>λ = v/f</small></div>
        <div><span>Periyot</span><strong>{formatNumber(period, 2)} s</strong><small>T = 1/f</small></div>
        <div><span>Genlik</span><strong>{formatNumber(amplitude, 1)} birim</strong><small>taşınan enerjiyle ilişkili</small></div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="wave-speed" label="Ortamın dalga hızı" min={4} max={24} step={1} value={speed} unit="m/s" onChange={setSpeed} />
        <RangeControl id="wave-frequency" label="Kaynak frekansı" min={1} max={8} step={0.5} value={frequency} unit="Hz" onChange={setFrequency} />
        <RangeControl id="wave-amplitude" label="Genlik" min={0.5} max={2.5} step={0.5} value={amplitude} unit="birim" onChange={setAmplitude} />
      </div>
    </LabShell>
  )
}

function OpticsLab({ data }) {
  const [focalLength, setFocalLength] = useState(data.initialFocalLength ?? 10)
  const [objectDistance, setObjectDistance] = useState(data.initialObjectDistance ?? 30)
  const atFocus = Math.abs(objectDistance - focalLength) < 0.01
  const imageDistance = atFocus ? Infinity : (focalLength * objectDistance) / (objectDistance - focalLength)
  const magnification = atFocus ? Infinity : -imageDistance / objectDistance
  const isReal = !atFocus && imageDistance > 0
  const nature = atFocus
    ? 'görüntü sonsuzda'
    : `${isReal ? 'gerçek, ters' : 'sanal, düz'}, ${Math.abs(magnification) > 1.02 ? 'büyük' : Math.abs(magnification) < 0.98 ? 'küçük' : 'eş boyda'}`
  const objectX = 360 - clamp(objectDistance * 6, 70, 300)
  const objectTipY = 88
  const plottedImageDistance = atFocus ? 310 : clamp(Math.abs(imageDistance) * 6, 35, 310)
  const imageX = atFocus ? 680 : isReal ? 360 + plottedImageDistance : 360 - plottedImageDistance
  const imageHeight = atFocus ? -70 : clamp(magnification * 72, -112, 112)
  const imageTipY = 160 - imageHeight
  const rayExitY = atFocus ? objectTipY : isReal ? imageTipY : clamp(objectTipY + (680 - 360) * ((objectTipY - imageTipY) / Math.max(1, 360 - imageX)), 34, 286)

  function setCase(multiplier) {
    setObjectDistance(Number((focalLength * multiplier).toFixed(1)))
  }

  return (
    <LabShell
      eyebrow="Cismi odak noktalarına göre taşı"
      title={data.title || 'İnce kenarlı mercek laboratuvarı'}
      instruction="Odak uzaklığını ve cisim uzaklığını değiştir. F ve 2F sınırları geçilirken görüntünün yeri, yönü, türü ve büyüklüğünü asal ışınlarla birlikte izle."
      status={atFocus
        ? `do = f = ${formatNumber(focalLength, 1)} cm: mercekten çıkan ışınlar paraleldir, sonlu bir ekranda görüntü oluşmaz; görüntü sonsuzdadır.`
        : `f = ${formatNumber(focalLength, 1)} cm ve do = ${formatNumber(objectDistance, 1)} cm için di = ${formatNumber(imageDistance, 2)} cm, m = ${formatNumber(magnification, 2)}. Görüntü ${nature}.`}
    >
      <div className="physics-optics-presets" role="group" aria-label="Mercek görüntüsü hazır cisim konumları">
        <button type="button" onClick={() => setCase(3)}>Cisim 2F dışında</button>
        <button type="button" onClick={() => setCase(2)}>Cisim 2F’de</button>
        <button type="button" onClick={() => setCase(1.5)}>Cisim F–2F arasında</button>
        <button type="button" onClick={() => setCase(0.7)}>Cisim F içinde</button>
        <button type="button" onClick={() => setCase(1)}>Cisim F’de</button>
      </div>
      <div className={`physics-optics-stage ${isReal ? 'is-real' : atFocus ? 'is-infinite' : 'is-virtual'}`} role="img" aria-label={`Yakınsak mercekte ${nature} görüntü`}>
        <svg viewBox="0 0 720 320" aria-hidden="true">
          <path className="is-axis" d="M26 160H694" />
          <path className="is-lens" d="M360 36C329 86 329 234 360 284C391 234 391 86 360 36Z" />
          {[1, -1].map((side) => <g key={side}>
            <circle className="is-focus" cx={360 + side * focalLength * 6} cy="160" r="6" />
            <text x={360 + side * focalLength * 6} y="185" textAnchor="middle">F</text>
            <circle className="is-focus is-double" cx={360 + side * focalLength * 12} cy="160" r="5" />
            <text x={360 + side * focalLength * 12} y="185" textAnchor="middle">2F</text>
          </g>)}
          <path className="is-object" d={`M${objectX} 160V${objectTipY}m0 0-10 14m10-14 10 14`} />
          <text x={objectX} y="205" textAnchor="middle">cisim</text>
          <path className="is-ray is-ray-one" d={`M${objectX} ${objectTipY}H360L680 ${rayExitY}`} />
          <path className="is-ray is-ray-two" d={`M${objectX} ${objectTipY}L680 ${atFocus ? objectTipY + (680 - objectX) * ((160 - objectTipY) / (360 - objectX)) : imageTipY + (680 - imageX) * ((imageTipY - 160) / Math.max(1, imageX - 360))}`} />
          {!atFocus && !isReal && <path className="is-virtual-extension" d={`M360 ${objectTipY}L${imageX} ${imageTipY}M360 160L${imageX} ${imageTipY}`} />}
          {!atFocus && <path className="is-image" d={`M${imageX} 160V${imageTipY}m0 0-10 ${imageHeight > 0 ? 14 : -14}m10 ${imageHeight > 0 ? -14 : 14} 10 ${imageHeight > 0 ? 14 : -14}`} />}
          {!atFocus && <text x={imageX} y={imageHeight > 0 ? imageTipY - 15 : imageTipY + 28} textAnchor="middle">görüntü</text>}
          <text className="is-lens-label" x="360" y="308" textAnchor="middle">ince kenarlı mercek</text>
        </svg>
        <div className="physics-optics-stage__formula"><span>1/f = 1/do + 1/di</span><strong>{atFocus ? 'di → ∞' : `di = ${formatNumber(imageDistance, 2)} cm · m = ${formatNumber(magnification, 2)}`}</strong></div>
      </div>
      <div className="physics-optics-readings">
        <div><span>Görüntü uzaklığı</span><strong>{atFocus ? '∞' : `${formatNumber(imageDistance, 2)} cm`}</strong><small>{isReal ? 'merceğin karşı tarafı' : atFocus ? 'paralel ışınlar' : 'cismin tarafı'}</small></div>
        <div><span>Büyütme</span><strong>{atFocus ? 'tanımsız' : `${formatNumber(magnification, 2)}`}</strong><small>m = −di/do</small></div>
        <div><span>Görüntü niteliği</span><strong>{nature}</strong><small>{isReal ? 'ekrana düşürülebilir' : atFocus ? 'sonlu ekranda oluşmaz' : 'ekrana düşürülemez'}</small></div>
      </div>
      <div className="physics-controls-grid">
        <RangeControl id="optics-focal" label="Odak uzaklığı" min={6} max={18} step={1} value={focalLength} unit="cm" onChange={setFocalLength} />
        <RangeControl id="optics-object" label="Cisim uzaklığı" min={4} max={48} step={1} value={objectDistance} unit="cm" onChange={setObjectDistance} />
      </div>
    </LabShell>
  )
}

export default function PhysicsDiscoveryLab({ data = {} }) {
  if (data.mode === 'classification') return <ClassificationLab data={data} />
  if (data.mode === 'measurement') return <MeasurementLab data={data} />
  if (data.mode === 'vector') return <VectorLab data={data} />
  if (data.mode === 'density') return <DensityLab data={data} />
  if (data.mode === 'liquid') return <LiquidLab data={data} />
  if (data.mode === 'buoyancy') return <BuoyancyLab data={data} />
  if (data.mode === 'pressure') return <PressureLab data={data} />
  if (data.mode === 'thermal') return <ThermalLab data={data} />
  if (data.mode === 'expansion') return <ExpansionLab data={data} />
  if (data.mode === 'motion-force') return <MotionForceLab data={data} />
  if (data.mode === 'energy') return <EnergyLab data={data} />
  if (data.mode === 'electrostatic') return <ElectrostaticLab data={data} />
  if (data.mode === 'circuit') return <CircuitLab data={data} />
  if (data.mode === 'magnetism') return <MagnetismLab data={data} />
  if (data.mode === 'wave') return <WaveLab data={data} />
  if (data.mode === 'optics') return <OpticsLab data={data} />
  return <ScaleLab data={data} />
}
