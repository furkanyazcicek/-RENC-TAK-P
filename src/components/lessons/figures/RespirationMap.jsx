import InteractiveIllustration from './InteractiveIllustration'
import { ArrowHeads } from './primitives'

const REGIONS = [
  {
    key: 'glikoliz',
    zoom: { x: 30, y: 48, scale: 1.7 },
    detail: {
      src: '/lesson-assets/mitokondri/details/resp-glycolysis.jpg',
      title: 'Glikoliz',
      alt: 'Altı karbonlu glikozun sitoplazmada iki ayrı üç karbonlu pirüvata ayrılmasını gösteren sayılabilir şema.',
    },
    shape: { x: 145, y: 250, width: 610, height: 570, rx: 90 },
  },
  {
    key: 'krebs',
    zoom: { x: 76, y: 52, scale: 1.8 },
    detail: {
      src: '/lesson-assets/mitokondri/details/resp-krebs.jpg',
      title: 'Krebs döngüsü',
      alt: 'Mitokondri matriksinde karbon dioksit çıkaran ve elektron taşıyıcılarını yükleyen Krebs döngüsünün yakın görünümü.',
    },
    shape: { type: 'ellipse', cx: 1170, cy: 520, rx: 245, ry: 325 },
  },
  {
    key: 'ets',
    zoom: { x: 84, y: 25, scale: 1.9 },
    detail: {
      src: '/lesson-assets/mitokondri/details/resp-ets.jpg',
      title: 'Elektron taşıma sistemi',
      alt: 'İç zardaki elektron taşıma kompleksleri boyunca elektron akışı, proton pompalanması ve ATP sentazın yakın görünümü.',
    },
    shape: { type: 'ellipse', cx: 1180, cy: 510, rx: 340, ry: 430 },
  },
]

const MARKERS = [
  { key: 'glikoliz', x: 700, y: 480 },
  { key: 'krebs', x: 1120, y: 545 },
  { key: 'ets', x: 1325, y: 225 },
]

export default function RespirationMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/mitokondri/solunum-haritasi-v2.jpg"
      srcSet="/lesson-assets/mitokondri/solunum-haritasi-v2-900.jpg 900w, /lesson-assets/mitokondri/solunum-haritasi-v2.jpg 1440w"
      alt="Solda sitoplazmadaki glikoz ve iki pirüvat, sağda matriksi ve kristaları görülen mitokondri kesiti."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    >
      <ArrowHeads prefix="resp-ill" />
      <text x="95" y="105" className="fill-ink/65" fontSize="28" fontWeight="800" letterSpacing="3">SİTOPLAZMA</text>
      <text x="250" y="315" className="fill-ink/80" fontSize="31" fontWeight="800">Glikoz · 6C</text>
      <text x="255" y="590" className="fill-ink/80" fontSize="29" fontWeight="800">2 Pirüvat · 3C</text>
      <path d="M620 690 C760 690 825 620 935 590" className="fill-none stroke-brand-600" strokeWidth="5" strokeDasharray="13 10" markerEnd="url(#resp-ill-arrow-brand)" />
      <text x="780" y="655" textAnchor="middle" className="fill-brand-800" fontSize="25" fontWeight="800">pirüvat matrikse girer</text>
      <text x="1120" y="150" className="fill-aqua-800" fontSize="25" fontWeight="800" letterSpacing="2">MİTOKONDRİ</text>
    </InteractiveIllustration>
  )
}
