import InteractiveIllustration from './InteractiveIllustration'
import { ArrowHeads } from './primitives'

const REGIONS = [
  {
    key: 'glikoz',
    zoom: { x: 20, y: 38, scale: 1.8 },
    detail: {
      src: '/lesson-assets/mitokondri/details/carbon-glucose.jpg',
      title: 'İşaretli glikoz',
      alt: 'Radyoaktif olarak işaretlenmiş altı karbon atomunu ayrı ayrı gösteren glikoz yakın görünümü.',
    },
    shape: { x: 40, y: 220, width: 600, height: 300, rx: 90 },
  },
  {
    key: 'piruvat',
    zoom: { x: 49, y: 40, scale: 1.9 },
    detail: {
      src: '/lesson-assets/mitokondri/details/carbon-pyruvate.jpg',
      title: 'İki pirüvat',
      alt: 'Glikoliz sonunda oluşan, üçer işaretli karbon taşıyan iki ayrı pirüvat grubunun yakın görünümü.',
    },
    shape: { x: 625, y: 205, width: 290, height: 370, rx: 80 },
  },
  {
    key: 'karbondioksit',
    zoom: { x: 78, y: 38, scale: 1.8 },
    detail: {
      src: '/lesson-assets/mitokondri/details/carbon-co2.jpg',
      title: 'İşaretli karbondioksit',
      alt: 'Matriksteki döngüden ayrılan karbondioksit moleküllerinin merkezindeki işaretli karbonları gösteren yakın görünüm.',
    },
    shape: { x: 930, y: 50, width: 580, height: 650, rx: 180 },
  },
  {
    key: 'su',
    zoom: { x: 50, y: 82, scale: 1.75 },
    detail: {
      src: '/lesson-assets/mitokondri/details/carbon-water.jpg',
      title: 'Su oluşumu',
      alt: 'Elektron taşıma zincirinin sonunda oksijen, proton ve elektronlardan karbon içermeyen su oluşumunun yakın görünümü.',
    },
    shape: { x: 0, y: 720, width: 1536, height: 304, rx: 40 },
  },
]

const MARKERS = [
  { key: 'glikoz', x: 75, y: 220 },
  { key: 'piruvat', x: 670, y: 210 },
  { key: 'karbondioksit', x: 1450, y: 115 },
  { key: 'su', x: 75, y: 790 },
]

export default function CarbonTracing({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/mitokondri/karbon-izleme-v2.jpg"
      srcSet="/lesson-assets/mitokondri/karbon-izleme-v2-900.jpg 900w, /lesson-assets/mitokondri/karbon-izleme-v2.jpg 1440w"
      alt="Altı karbonlu glikozun iki üç karbonlu pirüvata ayrılması, karbonların mitokondri matriksinde karbondioksit olarak çıkması ve karbon içermeyen su oluşumu."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    >
      <ArrowHeads prefix="carbon-ill" />
      <text x="90" y="165" className="fill-ink/80" fontSize="31" fontWeight="850">Glikoz · 6C</text>
      <text x="665" y="165" className="fill-ink/80" fontSize="29" fontWeight="850">2 Pirüvat · 3C + 3C</text>
      <path d="M545 360 H645" className="fill-none stroke-ink/55" strokeWidth="5" markerEnd="url(#carbon-ill-arrow)" />
      <text x="595" y="335" textAnchor="middle" className="fill-ink/65" fontSize="24" fontWeight="750">glikoliz</text>
      <path d="M875 360 C930 360 955 405 1005 420" className="fill-none stroke-brand-600" strokeWidth="5" strokeDasharray="13 9" markerEnd="url(#carbon-ill-arrow-brand)" />
      <text x="945" y="335" textAnchor="middle" className="fill-brand-800" fontSize="24" fontWeight="800">matrikse girer</text>
      <text x="1100" y="135" className="fill-aqua-800" fontSize="24" fontWeight="850" letterSpacing="2">MİTOKONDRİ MATRİKSİ</text>
      <text x="1180" y="635" className="fill-brand-800" fontSize="26" fontWeight="850">işaretli CO₂ çıkar</text>
      <text x="110" y="825" className="fill-ink/80" fontSize="27" fontWeight="850">ETS: O₂ + e⁻ + H⁺ → H₂O</text>
      <text x="110" y="880" className="fill-danger-600" fontSize="25" fontWeight="850">H₂O’da karbon yoktur; C* bu kola geçmez.</text>
    </InteractiveIllustration>
  )
}
