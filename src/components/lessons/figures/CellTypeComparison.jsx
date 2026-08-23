import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'prokaryot',
    zoom: { x: 15, y: 52, scale: 1.75 },
    detail: {
      src: '/lesson-assets/cekirdek-hucre-tipleri/details/bacterium-coupled-expression.jpg',
      title: 'Prokaryot hücre',
      alt: 'Çekirdek zarı olmayan bakteride halkasal DNA’dan RNA üretilirken aynı RNA’nın ribozomlar tarafından eşzamanlı çevrilmesini gösteren sahne.',
      note: 'Çekirdek olmadığı için bilgi kopyalama ile protein üretimi aynı bölmede gerçekleşebilir. Ribozomlar, RNA henüz tamamlanmadan ona bağlanabilir; hız avantajı vardır fakat çekirdekteki işleme ve denetim basamağı yoktur.',
    },
    shape: { x: 0, y: 75, width: 455, height: 810, rx: 170 },
  },
  {
    key: 'hayvan',
    zoom: { x: 51, y: 52, scale: 1.65 },
    detail: {
      src: '/lesson-assets/cekirdek-hucre-tipleri/details/animal-flexibility-traffic.jpg',
      title: 'Hayvan hücresi',
      alt: 'Esnek hayvan hücresi zarının endositoz yapması, sitoskeleton, sentrozom ve ER–Golgi–vezikül trafiğini gösteren sahne.',
      note: 'Hücre duvarının olmaması hayvan hücresine şekil değiştirme, fagositoz ve hareket esnekliği verir. Bu esneklik; sitoskeleton, sentrozom ve vezikül trafiğiyle kontrollü hâle gelir.',
    },
    shape: { x: 410, y: 65, width: 610, height: 840, rx: 260 },
  },
  {
    key: 'bitki',
    zoom: { x: 85, y: 52, scale: 1.75 },
    detail: {
      src: '/lesson-assets/cekirdek-hucre-tipleri/details/plant-turgor-energy.jpg',
      title: 'Bitki hücresi',
      alt: 'Selüloz duvar, büyük merkezî kofulun oluşturduğu turgor, kloroplastta besin üretimi ve mitokondride enerji dönüşümünü gösteren sahne.',
      note: 'Duvar biçimi korur, su dolu koful içeriden basınç uygulayarak turgor desteği sağlar. Kloroplast karbonhidrat üretirken mitokondri bu yakıttan ATP sağlar; bitki hücresi ikisine de ihtiyaç duyar.',
    },
    shape: { x: 965, y: 55, width: 475, height: 850, rx: 120 },
  },
]

const MARKERS = [
  { key: 'prokaryot', title: 'Prokaryot', x: 125, y: 820, targetX: 240, targetY: 510, width: 235 },
  { key: 'hayvan', title: 'Hayvan', x: 610, y: 845, targetX: 720, targetY: 600, width: 205 },
  { key: 'bitki', title: 'Bitki', x: 1110, y: 845, targetX: 1190, targetY: 610, width: 180 },
]

export default function CellTypeComparison({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/cekirdek-hucre-tipleri/cell-types-v1.jpg"
      srcSet="/lesson-assets/cekirdek-hucre-tipleri/cell-types-v1-900.jpg 900w, /lesson-assets/cekirdek-hucre-tipleri/cell-types-v1.jpg 1440w"
      alt="Solda çekirdeksiz ve zarlı organelsiz bakteri, ortada esnek hayvan hücresi, sağda duvarlı, kloroplastlı ve büyük kofullu bitki hücresi karşılaştırması."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
