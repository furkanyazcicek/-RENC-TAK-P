import { useMemo, useRef, useState } from 'react'
import {
  Activity,
  ArrowDown,
  Clock3,
  Droplets,
  Eye,
  Gauge,
  Layers3,
  Mountain,
  RotateCcw,
  Sprout,
  Split,
  Waves,
} from 'lucide-react'

const INITIAL = {
  yagis: 58,
  egim: 62,
  akis: 64,
  kayac: 42,
  bitki: 38,
  zaman: 46,
}

const CONTROLS = [
  { id: 'yagis', label: 'Yağış miktarı', min: 0, max: 100, unit: '%', icon: Droplets, low: 'az', high: 'çok', color: 'water' },
  { id: 'egim', label: 'Eğim', min: 5, max: 95, unit: '%', icon: Mountain, low: 'yumuşak', high: 'dik', color: 'slope' },
  { id: 'akis', label: 'Akış gücü', min: 0, max: 100, unit: '/100', icon: Waves, low: 'yavaş', high: 'hızlı', color: 'flow' },
  { id: 'kayac', label: 'Kayaç direnci', min: 0, max: 100, unit: '%', icon: Activity, low: 'zayıf', high: 'sağlam', color: 'rock' },
  { id: 'bitki', label: 'Bitki örtüsü', min: 0, max: 100, unit: '%', icon: Sprout, low: 'seyrek', high: 'yoğun', color: 'plant' },
  { id: 'zaman', label: 'Zaman', min: 0, max: 100, unit: ' yıl', icon: Clock3, low: 'başlangıç', high: 'uzun dönem', color: 'time' },
]

const LAYERS = [
  { id: 'arazi', label: 'Arazi', swatch: 'terrain', icon: Eye },
  { id: 'yukselti', label: 'Yükselti ve eğim', swatch: 'elevation', icon: Mountain },
  { id: 'akis', label: 'Akış yönü', swatch: 'water', icon: ArrowDown },
  { id: 'asinim', label: 'Aşınım', swatch: 'erosion', icon: Activity },
  { id: 'tasinim', label: 'Taşınım', swatch: 'transport', icon: Waves },
  { id: 'birikim', label: 'Birikim', swatch: 'deposit', icon: Split },
  { id: 'bitki', label: 'Bitki örtüsü', swatch: 'vegetation', icon: Sprout },
  { id: 'profil', label: 'Topografik profil', swatch: 'profile', icon: Activity },
]

const EVIDENCE = [
  {
    id: 'zirve', label: 'Zirve', x: 17, y: 22, number: '01', process: 'Aşınım',
    evidence: 'Kar çizgisinin üstündeki dik ve çıplak yamaç, yüksek enerji ve düşük bitki tutunmasını birlikte gösterir.',
    variables: 'Eğim, yağış, kayaç direnci ve zaman', result: 'Eğim ya da akış gücü arttığında üst havzadaki aşınım lekesi genişler.', exam: 'Yükselti tek başına eğim değildir; ikisini arazide ayrı kanıtlarla oku.',
    limit: 'Bu nokta belirli bir dağın ölçülmüş kar çizgisi değildir; süreç ilişkisini görünür kılan kurgusal sahnedir.',
  },
  {
    id: 'vadi', label: 'Dar vadi', x: 39, y: 45, number: '02', process: 'Aşınım',
    evidence: 'Akarsu, yüksek eğimde yatağını derine kazdığı için V biçimli ve dar bir koridor oluşturur.',
    variables: 'Eğim, akış gücü, kayaç direnci ve zaman', result: 'Kayaç direnci düştükçe vadi derinleşme göstergesi yükselir.', exam: 'Dar ve derin vadi, gençlik evresi ve dikey aşındırma kanıtıdır.',
    limit: 'Profil ve kayaç değişkenleri şematik indekslerdir; gerçek jeolojik kesit yerine geçmez.',
  },
  {
    id: 'katman', label: 'Kayaç katmanı', x: 27, y: 67, number: '03', process: 'Direnç farkı',
    evidence: 'Açık renkli sert tabaka ile koyu, daha kolay ayrışan tabaka arasındaki basamaklı yüzey direnç farkını gösterir.',
    variables: 'Kayaç direnci, yağış ve zaman', result: 'Direnç azaldığında aşınım katmanı daha opak ve geniş görünür.', exam: 'Aynı akarsu farklı kayaçlarda farklı hızda aşındırır; süreç kayaçtan bağımsız değildir.',
    limit: 'Katman sınırları gerçek bir formasyonun yaşı veya litolojisi olarak yorumlanmamalıdır.',
  },
  {
    id: 'menderes', label: 'Menderes', x: 57, y: 55, number: '04', process: 'Aşınım + birikim',
    evidence: 'Eğim azaldığında akış yana hareket eder; dış kıyıda oyulma, iç kıyıda kum birikimi belirginleşir.',
    variables: 'Eğim, akış gücü ve taşınım kapasitesi', result: 'Akış gücü düştükçe iç kıyı birikim adaları büyür ve kanal kıvrımı genişler.', exam: 'Menderes tek başına yön göstermez; dış kıyı aşınım, iç kıyı birikim kanıtıdır.',
    limit: 'Kanal geometrisi gerçek bir akarsuyun zamansal ölçümü değil, deterministik eğitim modelidir.',
  },
  {
    id: 'ova', label: 'Taşkın ovası', x: 69, y: 68, number: '05', process: 'Birikim',
    evidence: 'Düşük eğimli geniş taban, taşkın suyunun yayılıp ince sediment bırakabildiği alanı gösterir.',
    variables: 'Yağış, akış gücü, eğim ve bitki örtüsü', result: 'Yağış ve yüzey akışı arttığında taşkın ovası üzerindeki birikim dokusu genişler.', exam: 'Düz ve verimli taban arazi aynı zamanda taşkın maruziyetini yükseltebilir.',
    limit: 'Taşkın sınırı hidrolik model sonucu değildir; yalnızca süreç kanıtı olarak okunmalıdır.',
  },
  {
    id: 'delta', label: 'Delta', x: 84, y: 78, number: '06', process: 'Birikim',
    evidence: 'Akarsu denize ulaştığında hızı düşer; taşınan ince malzeme kollara ayrılan delta önünde birikir.',
    variables: 'Akış gücü, yağış, eğim, bitki örtüsü ve zaman', result: 'Akış gücü azalınca birikim ve delta büyüme göstergesi yükselir.', exam: 'Delta, akarsuyun taşıma gücünü kaybettiği ağız kesiminde birikim olduğunun kanıtıdır.',
    limit: 'Deniz seviyesi, gelgit ve kıyı akıntısı bu modelde sabit tutulmuştur; gerçek kıyı çizgisi değildir.',
  },
  {
    id: 'bitki', label: 'Bitki örtüsü', x: 51, y: 77, number: '07', process: 'Yüzey akışı',
    evidence: 'Yoğun kök ağı toprağı tutar ve yağışın yüzeyde hızla akması yerine sızmasına zaman kazandırır.',
    variables: 'Bitki örtüsü, yağış ve eğim', result: 'Bitki örtüsü arttıkça yüzey akışı ve erozyon indeksi düşer.', exam: 'Bitki örtüsü dış kuvveti yok etmez; akışı yavaşlatıp toprağı korur.',
    limit: 'Bitki yoğunluğu fotoğraftan ölçülmüş biyokütle değildir; göreli bir öğretim değişkenidir.',
  },
  {
    id: 'profil', label: 'A–B profil hattı', x: 50, y: 34, number: '08', process: 'Topografik kanıt',
    evidence: 'A–B hattı yüksek havza kenarından delta ovasına geçerken sırt, vadi ve alçak birikim yüzeyini keser.',
    variables: 'A ve B konumu, eğim ve zaman', result: 'Hat değiştiğinde başlangıç/bitiş yüksekliği, mesafe ve ortalama eğim canlı güncellenir.', exam: 'Profilde vadi alçak, sırt yüksek; çizgi sıklığı ise yükselti değil eğim kanıtıdır.',
    limit: 'Yükseklikler gerçek DEM verisi değildir; profil, sahnenin ilişkilerini okumak için ölçeklenmiştir.',
  },
]

const PROFILE = [94, 88, 76, 59, 45, 54, 70, 76, 67, 53, 42, 32, 28]
const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, value))

function modelHesapla(values) {
  const discharge = Math.round(clamp(24 + values.yagis * .72 + values.akis * .13))
  const surfaceFlow = Math.round(clamp(values.yagis * .58 + values.egim * .26 + values.akis * .2 - values.bitki * .38))
  const erosion = Math.round(clamp(values.egim * .33 + values.yagis * .26 + values.akis * .3 + (100 - values.kayac) * .26 + (100 - values.bitki) * .12 + values.zaman * .12))
  const transport = Math.round(clamp(values.akis * .58 + discharge * .24 + values.egim * .1))
  const deposition = Math.round(clamp(100 - transport * .62 + (100 - values.egim) * .18 + (100 - values.akis) * .12 + values.zaman * .08))
  const valley = Math.round(clamp(24 + values.egim * .3 + values.akis * .2 + (100 - values.kayac) * .35 + values.zaman * .18))
  const delta = Math.round(clamp(16 + deposition * .72 + values.zaman * .34))
  return { discharge, surfaceFlow, erosion, transport, deposition, valley, delta }
}

function profileStats(a, b) {
  const start = Math.min(a, b)
  const end = Math.max(a, b)
  const startHeight = Math.round(PROFILE[start] * 32)
  const endHeight = Math.round(PROFILE[end] * 32)
  const segment = PROFILE.slice(start, end + 1)
  const highest = Math.round(Math.max(...segment) * 32)
  const lowest = Math.round(Math.min(...segment) * 32)
  const distance = Math.round((end - start) * 1.8 + 4.5)
  const slope = Math.abs(endHeight - startHeight) / (distance * 1000) * 100
  return { startHeight, endHeight, highest, lowest, distance, slope: slope.toFixed(1), start, end, segment }
}

function pathForProfile(segment) {
  return segment.map((value, index) => `${(index / Math.max(1, segment.length - 1)) * 100},${66 - value * .48}`).join(' ')
}

function EvidencePanel({ item, stats }) {
  if (!item) return <div className="ys-evidence-empty"><Eye size={20} /><strong>Bir kanıt noktası seç</strong><p>Fotoğraftaki numaralı işaretlerden birine dokun. Öğretim katmanı ile görsel kanıtı birlikte okuyacağız.</p></div>
  return <article className="ys-evidence-panel" aria-live="polite">
    <div className="ys-evidence-kicker"><span>{item.number}</span><small>{item.process} · kanıt</small></div>
    <h3>{item.label}</h3>
    <dl className="ys-evidence-facts">
      <div><dt>Görülen coğrafi kanıt</dt><dd>{item.evidence}</dd></div>
      <div><dt>Etkili değişkenler</dt><dd>{item.variables}</dd></div>
      <div><dt>Beklenen sonuç</dt><dd>{item.result}</dd></div>
      <div><dt>TYT / AYT çıkarımı</dt><dd>{item.exam}</dd></div>
      {item.id === 'profil' ? <div><dt>Canlı profil özeti</dt><dd>A {stats.startHeight} m → B {stats.endHeight} m · {stats.distance} km · ort. eğim %{stats.slope}</dd></div> : null}
      <div className="ys-limit"><dt>Kanıtın sınırı</dt><dd>{item.limit}</dd></div>
    </dl>
  </article>
}

function SceneOverlay({ values, model, layers, profile, draggable, onDragStart, evidence, comparison = false }) {
  const particles = Array.from({ length: Math.max(4, Math.round(model.transport / 8)) }, (_, index) => ({
    cx: 42 + ((index * 9) % 43),
    cy: 47 + ((index * 13) % 32),
    r: index % 3 === 0 ? 1.2 : .8,
  }))
  const plants = Array.from({ length: Math.max(4, Math.round(values.bitki / 7)) }, (_, index) => ({
    cx: 30 + ((index * 11) % 55),
    cy: 69 + ((index * 7) % 21),
  }))
  const deltaScale = .72 + model.delta / 140
  return <svg className={`ys-scene-overlay ${comparison ? 'ys-overlay-before' : ''}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id={`ys-elevation-${comparison ? 'before' : 'after'}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ef8d52" stopOpacity=".58" />
        <stop offset=".48" stopColor="#e9bd65" stopOpacity=".2" />
        <stop offset="1" stopColor="#92cb9b" stopOpacity=".4" />
      </linearGradient>
      <marker id={`ys-arrow-${comparison ? 'before' : 'after'}`} markerWidth="4" markerHeight="4" refX="3.2" refY="2" orient="auto" markerUnits="userSpaceOnUse">
        <path d="M0,0 L4,2 L0,4 Z" fill="#75d0de" />
      </marker>
    </defs>
    {layers.yukselti ? <rect className="ys-elevation-layer" width="100" height="100" fill={`url(#ys-elevation-${comparison ? 'before' : 'after'})`} opacity={.16 + values.egim / 420} /> : null}
    {layers.akis ? <g className="ys-flow-layer" opacity={.48 + values.akis / 200} markerEnd={`url(#ys-arrow-${comparison ? 'before' : 'after'})`}>
      <path d="M18 16 C 22 28, 27 33, 37 44 S 50 53, 60 60 S 73 70, 86 83" />
      <path d="M27 29 C 30 35, 33 39, 39 43" />
      <path d="M58 60 C 65 65, 71 67, 78 72" />
    </g> : null}
    {layers.asinim ? <g className="ys-erosion-layer" opacity={.16 + model.erosion / 155}>
      <path d="M12 28 L26 19 L37 30 L31 47 L20 53 L10 42 Z" />
      <path d="M29 38 C 34 36, 39 38, 43 47 L38 56 L30 52 Z" />
      <path d="M22 53 L35 60 L29 69 L16 62 Z" />
    </g> : null}
    {layers.tasinim ? <g className="ys-transport-layer" opacity={.42 + model.transport / 180}>
      {particles.map((particle) => <circle key={`${particle.cx}-${particle.cy}`} cx={particle.cx} cy={particle.cy} r={particle.r} />)}
    </g> : null}
    {layers.birikim ? <g className="ys-deposit-layer" opacity={.24 + model.deposition / 120} transform={`translate(${(1 - deltaScale) * 6} ${(1 - deltaScale) * 2}) scale(${deltaScale} 1)`}>
      <path d="M69 72 C 77 71, 88 74, 99 82 L99 100 L67 100 Z" />
      <path d="M75 79 C 83 77, 88 80, 94 87 M78 86 C 85 84, 89 88, 97 92 M70 87 C 75 85, 80 90, 87 96" />
    </g> : null}
    {layers.bitki ? <g className="ys-vegetation-layer" opacity={.28 + values.bitki / 135}>
      {plants.map((plant) => <path key={`${plant.cx}-${plant.cy}`} d={`M${plant.cx} ${plant.cy + 3} l-1.8 -4 M${plant.cx} ${plant.cy + 3} l2 -5 M${plant.cx} ${plant.cy + 3} v4`} />)}
    </g> : null}
    {layers.profil ? <g className="ys-profile-layer">
      <line x1={profile.a} x2={profile.b} y1="30" y2="84" />
      <circle cx={profile.a} cy="30" r="2.1" />
      <circle cx={profile.b} cy="84" r="2.1" />
      <text x={profile.a - 1.2} y="26">A</text><text x={profile.b - 1.2} y="90">B</text>
    </g> : null}
    {evidence ? <circle className="ys-selected-ring" cx={evidence.x} cy={evidence.y} r="4.7" /> : null}
    {draggable === 'a' ? <circle className="ys-drag-ring" cx={profile.a} cy="30" r="3.3" /> : null}
    {draggable === 'b' ? <circle className="ys-drag-ring" cx={profile.b} cy="84" r="3.3" /> : null}
  </svg>
}

function VariableControl({ item, value, onChange }) {
  const Icon = item.icon
  return <label className={`ys-variable ys-variable-${item.color}`}>
    <span className="ys-variable-title"><Icon size={14} /><b>{item.label}</b><output>{value}{item.unit}</output></span>
    <input aria-label={item.label} type="range" min={item.min} max={item.max} value={value} onChange={(event) => onChange(Number(event.target.value))} />
    <span className="ys-variable-range"><small>{item.low}</small><small>{item.high}</small></span>
  </label>
}

export default function YerSekilleriLaboratuvari({ kanitla }) {
  const [values, setValues] = useState(INITIAL)
  const [layers, setLayers] = useState({ arazi: true, yukselti: true, akis: true, asinim: true, tasinim: true, birikim: true, bitki: true, profil: true })
  const [selectedId, setSelectedId] = useState(null)
  const [a, setA] = useState(18)
  const [b, setB] = useState(80)
  const [dragging, setDragging] = useState(null)
  const [compare, setCompare] = useState(false)
  const [compareSplit, setCompareSplit] = useState(52)
  const sceneRef = useRef(null)
  const model = useMemo(() => modelHesapla(values), [values])
  const initialModel = useMemo(() => modelHesapla(INITIAL), [])
  const stats = useMemo(() => profileStats(Math.round(a / 100 * 12), Math.round(b / 100 * 12)), [a, b])
  const profile = { a, b }
  const selected = EVIDENCE.find((item) => item.id === selectedId) ?? null

  const updateValue = (id, value) => {
    setValues((current) => ({ ...current, [id]: value }))
    kanitla?.()
  }
  const reset = () => {
    setValues(INITIAL)
    setLayers({ arazi: true, yukselti: true, akis: true, asinim: true, tasinim: true, birikim: true, bitki: true, profil: true })
    setA(18)
    setB(80)
    setSelectedId(null)
    setCompare(false)
    setCompareSplit(52)
  }
  const setProfileEnd = (end, value) => {
    const next = clamp(value, end === 'a' ? 8 : 25, end === 'a' ? 72 : 92)
    if (end === 'a') setA(Math.min(next, b - 8))
    else setB(Math.max(next, a + 8))
    kanitla?.()
  }
  const dragMove = (event) => {
    if (!dragging || !sceneRef.current) return
    const rect = sceneRef.current.getBoundingClientRect()
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 8, 92)
    setProfileEnd(dragging, x)
  }

  const mechanism = model.erosion > 67
    ? 'Enerji havzada yükseldi: yüksek kesimde aşınım, aşağı kesimde taşınan yük birlikte arttı.'
    : model.deposition > 61
      ? 'Akış gücü düştü: taşıma kapasitesi azaldı ve ince malzeme taşkın ovası ile deltada bırakıldı.'
      : 'Akış, aşınım ile birikim arasında dengede; eğim, kayaç ve örtü birlikte sonucu belirliyor.'

  return <section className="ys-laboratuvar" aria-labelledby="ys-lab-baslik">
    <header className="ys-lab-head">
      <div>
        <span className="ys-kicker"><Mountain size={14} /> Yer şekilleri · süreç laboratuvarı</span>
        <h2 id="ys-lab-baslik">Aynı havzada <em>aşındır, taşı, biriktir.</em></h2>
        <p>Önce sonucu tahmin et. Bir değişkeni değiştir; akarsu çizgisi, sediment yükü ve delta aynı anda yanıt versin.</p>
      </div>
      <div className="ys-lab-status"><span><i /> Canlı model</span><button type="button" onClick={reset}><RotateCcw size={14} /> Sıfırla</button></div>
    </header>

    <div className="ys-flow-steps" aria-label="Öğrenme akışı">
      <span className="done">01 <b>Tahmin et</b></span><span className="active">02 <b>Değişkeni değiştir</b></span><span>03 <b>Sonucu gözle</b></span><span>04 <b>Kanıtı seç</b></span><span>05 <b>Aktar</b></span>
    </div>

    <div className="ys-lab-grid">
      <div className="ys-scene-column">
        <div className="ys-scene-toolbar">
          <div><small>Fotoğraf kanıt yüzeyi</small><strong>Yüksek havzadan delta kıyısına</strong></div>
          <div className="ys-toolbar-actions"><button type="button" aria-pressed={compare} onClick={() => setCompare((current) => !current)}><Split size={14} /> {compare ? 'Karşılaştırmayı kapat' : 'Başlangıç / sonuç'}</button></div>
        </div>
        <div
          ref={sceneRef}
          className="ys-scene"
          onPointerMove={dragMove}
          onPointerUp={() => setDragging(null)}
          onPointerCancel={() => setDragging(null)}
          onPointerLeave={() => setDragging(null)}
        >
          <img src="/atlas-assets/cografya/imagegen/yer-sekilleri-havza-v2.jpg" alt="Kar çizgisinden derin vadiye, menderesli akarsuya, taşkın ovasına ve denize açılan deltaya uzanan kurgusal fotogerçekçi havza" loading="lazy" decoding="async" />
          <div className="ys-photo-shade" aria-hidden="true" />
          {compare ? <div className="ys-before-layer" style={{ clipPath: `inset(0 ${100 - compareSplit}% 0 0)` }}><img src="/atlas-assets/cografya/imagegen/yer-sekilleri-havza-v2.jpg" alt="" aria-hidden="true" /><SceneOverlay values={INITIAL} model={initialModel} layers={layers} profile={{ a, b }} evidence={selected} comparison /></div> : null}
          <SceneOverlay values={values} model={model} layers={layers} profile={profile} draggable={dragging} evidence={selected} />
          {EVIDENCE.map((item) => <button key={item.id} type="button" className={`ys-evidence-point ${selectedId === item.id ? 'selected' : ''}`} style={{ left: `${item.x}%`, top: `${item.y}%` }} onClick={() => setSelectedId(item.id)} aria-label={`${item.number}. ${item.label} kanıt noktası`} aria-pressed={selectedId === item.id}><span>{item.number}</span></button>)}
          {layers.profil ? <><button type="button" className="ys-profile-handle ys-handle-a" style={{ left: `${a}%`, top: '30%' }} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); setDragging('a') }} aria-label="A profil noktasını sürükle">A</button><button type="button" className="ys-profile-handle ys-handle-b" style={{ left: `${b}%`, top: '84%' }} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); setDragging('b') }} aria-label="B profil noktasını sürükle">B</button></> : null}
          <div className="ys-scene-label"><span><i className="water" /> akış</span><span><i className="erosion" /> aşınım</span><span><i className="deposit" /> birikim</span></div>
          {compare ? <div className="ys-compare-line" style={{ left: `${compareSplit}%` }}><span>başlangıç</span><i /></div> : null}
        </div>
        {compare ? <label className="ys-compare-slider"><span>Karşılaştırma çizgisi</span><output>{compareSplit}%</output><input type="range" min="20" max="80" value={compareSplit} onChange={(event) => setCompareSplit(Number(event.target.value))} /></label> : null}
        <div className="ys-scene-caption"><span><i /> Görsel kanıt</span><p>Fotoğraf gerçek bir yere ait olduğu iddiası taşımaz. Renkli çizgiler ve lekeler, fotoğrafın üstündeki öğretim modelidir.</p></div>
      </div>

      <aside className="ys-control-column" aria-label="Yer şekilleri canlı denetleyicisi">
        <div className="ys-control-head"><span>Değişkenler</span><strong>Birini oyna</strong><small>Her hareket sahnedeki kanıtı günceller.</small></div>
        <div className="ys-variables">{CONTROLS.map((item) => <VariableControl key={item.id} item={item} value={values[item.id]} onChange={(value) => updateValue(item.id, value)} />)}</div>
        <div className="ys-measurements" aria-live="polite">
          <div><small>Debi indeksi</small><strong>{model.discharge}<b>/100</b></strong></div><div><small>Yüzey akışı</small><strong>{model.surfaceFlow}<b>/100</b></strong></div><div><small>Aşındırma gücü</small><strong>{model.erosion}<b>/100</b></strong></div><div><small>Taşıma kapasitesi</small><strong>{model.transport}<b>/100</b></strong></div><div><small>Delta büyümesi</small><strong>{model.delta}<b>/100</b></strong></div><div><small>Vadi gelişimi</small><strong>{model.valley}<b>/100</b></strong></div>
        </div>
        <p className="ys-mechanism"><b>Neden–sonuç</b>{mechanism}</p>
      </aside>
    </div>

    <div className="ys-lab-lower">
      <section className="ys-layers" aria-labelledby="ys-layers-baslik"><div className="ys-lower-head"><div><span>Katman sistemi</span><h3 id="ys-layers-baslik">Kanıtı aç, renk ve doku ile oku</h3></div><Layers3 size={18} /></div><div className="ys-layer-list">{LAYERS.map((layer) => { const Icon = layer.icon; return <button key={layer.id} type="button" aria-pressed={layers[layer.id]} className={layers[layer.id] ? 'active' : ''} onClick={() => setLayers((current) => ({ ...current, [layer.id]: !current[layer.id] }))}><i className={`ys-swatch ${layer.swatch}`} /><Icon size={13} /><span>{layer.label}</span></button> })}</div><div className="ys-legend"><span><i className="water" /> Su / akış</span><span><i className="slope" /> Yüksek eğim</span><span><i className="erosion" /> Aşınım</span><span><i className="transport" /> Taşınım yükü</span><span><i className="deposit" /> Birikim</span><span><i className="vegetation" /> Bitki örtüsü</span></div></section>
      <section className="ys-profile" aria-labelledby="ys-profile-baslik"><div className="ys-lower-head"><div><span>A–B kesit deneyi</span><h3 id="ys-profile-baslik">Profili sahneden çıkar</h3></div><Gauge size={18} /></div><div className="ys-profile-chart"><svg viewBox="0 0 100 70" role="img" aria-label={`A–B topografik profil: A ${stats.startHeight} metre, B ${stats.endHeight} metre`}><path className="ys-profile-fill" d={`M0 70 L${pathForProfile(stats.segment)} L100 70 Z`} /><polyline points={pathForProfile(stats.segment)} /><line x1="0" x2="100" y1="66" y2="66" /></svg><div className="ys-profile-axis"><span>A · {stats.startHeight} m</span><span>B · {stats.endHeight} m</span></div></div><div className="ys-profile-metrics"><span>Mesafe <b>{stats.distance} km</b></span><span>En yüksek <b>{stats.highest} m</b></span><span>En düşük <b>{stats.lowest} m</b></span><span>Ort. eğim <b>%{stats.slope}</b></span></div><div className="ys-profile-controls"><label>A noktası <input aria-label="A profil noktası" type="range" min="8" max="72" value={a} onChange={(event) => setProfileEnd('a', Number(event.target.value))} /></label><label>B noktası <input aria-label="B profil noktası" type="range" min="25" max="92" value={b} onChange={(event) => setProfileEnd('b', Number(event.target.value))} /></label></div></section>
      <section className="ys-evidence" aria-labelledby="ys-evidence-baslik"><div className="ys-lower-head"><div><span>Kanıt kontrolü</span><h3 id="ys-evidence-baslik">Fotoğrafın ne söylediğini seç</h3></div><Eye size={18} /></div><div className="ys-evidence-body"><div className="ys-evidence-index">{EVIDENCE.map((item) => <button key={item.id} type="button" className={selectedId === item.id ? 'active' : ''} onClick={() => setSelectedId(item.id)} aria-pressed={selectedId === item.id}><span>{item.number}</span><small>{item.label}</small></button>)}</div><EvidencePanel item={selected} stats={stats} /></div></section>
    </div>
  </section>
}
