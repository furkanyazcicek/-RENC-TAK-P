import InteractiveIllustration from './InteractiveIllustration'
import { ArrowHeads, region } from './primitives'

const REGIONS = [
  {
    key: 'gradyan',
    zoom: { x: 50, y: 25, scale: 1.6 },
    detail: {
      src: '/lesson-assets/mitokondri/details/chem-gradient.jpg',
      title: 'Proton gradyanı',
      alt: 'İç zarın iki yanında, zarlar arası boşlukta çok ve matrikste az proton bulunduğunu gösteren yakın görünüm.',
    },
    shape: [{ x: 0, y: 0, width: 1536, height: 405 }, { x: 0, y: 590, width: 1536, height: 434 }],
  },
  {
    key: 'ets',
    zoom: { x: 42, y: 48, scale: 1.7 },
    detail: {
      src: '/lesson-assets/mitokondri/details/chem-ets.jpg',
      title: 'Elektron akışı',
      alt: 'NADH ve FADH₂ elektronlarının iç zar komplekslerinde ilerlerken proton pompalanmasını sağladığı yakın görünüm.',
    },
    shape: { x: 60, y: 310, width: 1080, height: 390, rx: 90 },
  },
  {
    key: 'oksijen',
    zoom: { x: 60, y: 80, scale: 2 },
    detail: {
      src: '/lesson-assets/mitokondri/details/chem-oxygen.jpg',
      title: 'Oksijenin son alıcı oluşu',
      alt: 'Elektron taşıma zincirinin sonunda oksijenin elektron ve protonları alarak su oluşturmasının yakın görünümü.',
    },
    shape: { x: 620, y: 700, width: 520, height: 250, rx: 70 },
  },
  {
    key: 'atp-sentaz',
    zoom: { x: 86, y: 52, scale: 1.9 },
    detail: {
      src: '/lesson-assets/mitokondri/details/chem-atp-synthase.jpg',
      title: 'ATP sentaz',
      alt: 'Protonların ATP sentazdan geçerek rotoru döndürmesi ve ADP ile fosfattan ATP üretilmesinin yakın görünümü.',
    },
    shape: { x: 1110, y: 250, width: 390, height: 600, rx: 120 },
  },
]

const MARKERS = [
  { key: 'gradyan', x: 760, y: 95 },
  { key: 'ets', x: 690, y: 430 },
  { key: 'oksijen', x: 910, y: 850 },
  { key: 'atp-sentaz', x: 1325, y: 350 },
]

export default function Chemiosmosis({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/mitokondri/kemiozmoz-v2.jpg"
      srcSet="/lesson-assets/mitokondri/kemiozmoz-v2-900.jpg 900w, /lesson-assets/mitokondri/kemiozmoz-v2.jpg 1440w"
      alt="Mitokondri iç zarında elektron taşıma kompleksi, üstte yoğun protonlar, altta matriks ve sağda ATP sentazı gösteren kemiozmoz yakın planı."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    >
      <ArrowHeads prefix="chem-ill" />

      <g {...region('gradyan', activeRegion)}>
        <text x="70" y="85" className="fill-brand-800" fontSize="27" fontWeight="850" letterSpacing="2.5">ZARLAR ARASI BOŞLUK · H⁺ YÜKSEK</text>
        <text x="70" y="955" className="fill-aqua-800" fontSize="27" fontWeight="850" letterSpacing="2.5">MATRİKS · H⁺ DÜŞÜK</text>
      </g>

      <g {...region('ets', activeRegion)}>
        <path d="M165 445 H1015" className="fill-none stroke-accent-500" strokeWidth="6" strokeDasharray="15 10" markerEnd="url(#chem-ill-arrow)" />
        <text x="575" y="415" textAnchor="middle" className="fill-accent-700" fontSize="27" fontWeight="850">elektron akışı · e⁻</text>
        {[170, 495, 735].map((x) => (
          <path key={x} d={`M${x} 685 C${x - 45} 590 ${x - 45} 425 ${x} 315`} className="fill-none stroke-aqua-600" strokeWidth="6" markerEnd="url(#chem-ill-arrow-aqua)" />
        ))}
        <text x="95" y="740" className="fill-ink/75" fontSize="25" fontWeight="800">NADH / FADH₂ elektronlarını bırakır</text>
      </g>

      <g {...region('oksijen', activeRegion)}>
        <text x="650" y="820" className="fill-ink/85" fontSize="28" fontWeight="850">½O₂ + 2H⁺ + 2e⁻ → H₂O</text>
      </g>

      <g {...region('atp-sentaz', activeRegion)}>
        <path d="M1302 215 V735" className="fill-none stroke-aqua-600" strokeWidth="7" markerEnd="url(#chem-ill-arrow-aqua)" />
        <text x="1175" y="765" className="fill-ink/75" fontSize="24" fontWeight="800">ADP + Pi</text>
        <path d="M1285 785 H1420" className="fill-none stroke-brand-600" strokeWidth="6" markerEnd="url(#chem-ill-arrow-brand)" />
        <text x="1430" y="795" className="fill-brand-800" fontSize="30" fontWeight="900">ATP</text>
      </g>
    </InteractiveIllustration>
  )
}
