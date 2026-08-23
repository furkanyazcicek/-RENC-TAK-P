import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'dis-zar',
    zoom: { x: 20, y: 72, scale: 1.75 },
    detail: {
      src: '/lesson-assets/mitokondri/details/anatomy-outer-membrane.jpg',
      title: 'Dış zar',
      alt: 'Porin kanalları taşıyan dış mitokondri zarından küçük molekül ve iyonların geçişini gösteren yakın görünüm.',
    },
    shape: {
      type: 'path',
      fillRule: 'evenodd',
      d: 'M380 182 H1156 A320 320 0 0 1 1476 502 A320 320 0 0 1 1156 822 H380 A320 320 0 0 1 60 502 A320 320 0 0 1 380 182 Z M390 238 H1146 A264 264 0 0 1 1410 502 A264 264 0 0 1 1146 766 H390 A264 264 0 0 1 126 502 A264 264 0 0 1 390 238 Z',
    },
  },
  {
    key: 'zarlar-arasi',
    zoom: { x: 30, y: 30, scale: 1.8 },
    detail: {
      src: '/lesson-assets/mitokondri/details/anatomy-intermembrane-space.jpg',
      title: 'Zarlar arası boşluk',
      alt: 'Dış zar ile iç zar arasında protonların yoğunlaştığı dar zarlar arası boşluğun yakın görünümü.',
    },
    shape: [
      { x: 115, y: 225, width: 1300, height: 105, rx: 50 },
      { x: 125, y: 680, width: 1280, height: 105, rx: 50 },
      { x: 555, y: 245, width: 72, height: 190, rx: 35 },
      { x: 795, y: 250, width: 70, height: 170, rx: 35 },
      { x: 1015, y: 260, width: 70, height: 160, rx: 35 },
    ],
  },
  {
    key: 'ic-zar',
    zoom: { x: 42, y: 30, scale: 1.75 },
    detail: {
      src: '/lesson-assets/mitokondri/details/anatomy-inner-membrane.jpg',
      title: 'İç zar',
      alt: 'Seçici geçirgen iç mitokondri zarındaki elektron taşıma kompleksleri ve ATP sentazın yakın görünümü.',
    },
    shape: { x: 145, y: 250, width: 1240, height: 520, rx: 245 },
  },
  {
    key: 'krista',
    zoom: { x: 67, y: 32, scale: 1.9 },
    detail: {
      src: '/lesson-assets/mitokondri/details/anatomy-crista.jpg',
      title: 'Krista',
      alt: 'İç zarın kıvrılarak kristaları oluşturması ve böylece enerji üretim yüzeyini artırmasının karşılaştırmalı yakın görünümü.',
    },
    shape: { x: 720, y: 240, width: 450, height: 260, rx: 110 },
  },
  {
    key: 'matriks',
    zoom: { x: 62, y: 55, scale: 1.65 },
    detail: {
      src: '/lesson-assets/mitokondri/details/anatomy-matrix.jpg',
      title: 'Matriks',
      alt: 'Krebs döngüsü enzimleri, halkasal DNA ve ribozomların bulunduğu mitokondri matriksinin yakın görünümü.',
    },
    shape: { x: 180, y: 285, width: 1170, height: 440, rx: 210 },
  },
  {
    key: 'mtdna',
    zoom: { x: 32, y: 50, scale: 2 },
    detail: {
      src: '/lesson-assets/mitokondri/details/anatomy-mtdna-ribosome.jpg',
      title: 'mtDNA ve 70S ribozom',
      alt: 'Halkasal mitokondri DNA’sından RNA ve protein üretimini gösteren 70S ribozomlu yakın görünüm.',
    },
    shape: { type: 'ellipse', cx: 480, cy: 505, rx: 185, ry: 155 },
  },
]

const MARKERS = [
  { key: 'dis-zar', title: 'Dış zar', x: 120, y: 842, targetX: 215, targetY: 738, width: 190 },
  { key: 'zarlar-arasi', title: 'Zarlar arası boşluk', x: 150, y: 125, targetX: 405, targetY: 248, width: 330 },
  { key: 'ic-zar', title: 'İç zar', x: 585, y: 115, targetX: 610, targetY: 285, width: 180 },
  { key: 'krista', title: 'Krista', x: 985, y: 115, targetX: 990, targetY: 345, width: 180 },
  { key: 'matriks', title: 'Matriks', x: 1135, y: 835, targetX: 950, targetY: 545, width: 205 },
  { key: 'mtdna', title: 'mtDNA + 70S', x: 365, y: 842, targetX: 480, targetY: 505, width: 240 },
]

export default function MitochondrionAnatomy({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/mitokondri/mitokondri-anatomi-v3.jpg"
      srcSet="/lesson-assets/mitokondri/mitokondri-anatomi-v3-900.jpg 900w, /lesson-assets/mitokondri/mitokondri-anatomi-v3.jpg 1440w"
      alt="Dış zar, zarlar arası boşluk, katlanmış iç zar, kristalar, matriks, halkasal DNA ve ribozomları gösteren ayrıntılı mitokondri kesiti."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
