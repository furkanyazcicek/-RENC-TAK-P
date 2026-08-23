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
    <svg
      className={`physics-scale-scene is-${visual}`}
      viewBox="0 0 560 330"
      role="img"
      aria-label={`${item.label}, yaklaşık ${item.scale}`}
    >
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

        <div className="physics-scale-explorer__viewport">
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

export default function PhysicsDiscoveryLab({ data = {} }) {
  if (data.mode === 'classification') return <ClassificationLab data={data} />
  if (data.mode === 'measurement') return <MeasurementLab data={data} />
  if (data.mode === 'vector') return <VectorLab data={data} />
  return <ScaleLab data={data} />
}
