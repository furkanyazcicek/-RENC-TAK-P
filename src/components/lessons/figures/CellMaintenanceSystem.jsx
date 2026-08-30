import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'lizozom',
    zoom: { x: 17, y: 50, scale: 1.55 },
    detail: {
      src: '/lesson-assets/sitoplazma-organeller/details/lizozom-otofaji.jpg',
      title: 'Lizozomla geri dönüşüm',
      alt: 'Hasarlı mitokondrinin otofagozomla çevrilmesi, lizozomla birleşmesi ve yapı taşlarına parçalanarak sitozole geri verilmesini gösteren yakın plan.',
      note: 'Lizozom yalnız dışarıdan alınan besini sindirmez. Hasarlı organeller otofagozomla çevrilir, lizozomla birleşir ve monomerlere ayrılır. Hücre bu yapı taşlarını yeniden kullanır; olay kontrollü bir geri dönüşümdür.',
    },
    shape: { x: 0, y: 0, width: 470, height: 960, rx: 110 },
  },
  {
    key: 'koful',
    zoom: { x: 50, y: 50, scale: 1.5 },
    detail: {
      src: '/lesson-assets/sitoplazma-organeller/details/koful-turgor.jpg',
      title: 'Koful ve turgor',
      alt: 'Su alan merkezî kofulun hücreyi duvara doğru iterek turgor oluşturması ile su kaybeden kofulda basıncın düşmesini karşılaştıran yakın plan.',
      note: 'Su alan merkezî koful büyür ve sitoplazmayı hücre duvarına iter; duvarın karşı koyması turgor desteği oluşturur. Su kaybında koful küçülür, basınç azalır ve bitki solar. Koful böylece depo olmanın ötesinde mekanik destek sağlar.',
    },
    shape: { x: 430, y: 0, width: 575, height: 960, rx: 110 },
  },
  {
    key: 'peroksizom',
    zoom: { x: 84, y: 50, scale: 1.55 },
    detail: {
      src: '/lesson-assets/sitoplazma-organeller/details/peroksizom-katalaz.jpg',
      title: 'Katalazla koruma',
      alt: 'Peroksizom içinde oluşan hidrojen peroksidin katalaz enzimiyle su ve oksijene çevrilerek sitozolün korunmasını gösteren moleküler yakın plan.',
      note: 'Peroksizomdaki bazı yükseltgenme tepkimeleri H₂O₂ üretir. Katalaz, bu reaktif bileşiği aynı bölmenin içinde su ve oksijene çevirir. Zar, tehlikeli ara ürünü sitozolden ayırırken enzim onu hızla etkisizleştirir.',
    },
    shape: { x: 980, y: 0, width: 460, height: 960, rx: 110 },
  },
]

const MARKERS = [
  { key: 'lizozom', title: 'Lizozom', x: 115, y: 850, targetX: 255, targetY: 500, width: 230 },
  { key: 'koful', title: 'Koful', x: 600, y: 850, targetX: 710, targetY: 510, width: 190 },
  { key: 'peroksizom', title: 'Peroksizom', x: 1065, y: 850, targetX: 1195, targetY: 510, width: 280 },
]

export default function CellMaintenanceSystem({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/sitoplazma-organeller/hucre-bakim-sistemi-v1.jpg"
      srcSet="/lesson-assets/sitoplazma-organeller/hucre-bakim-sistemi-v1-900.jpg 900w, /lesson-assets/sitoplazma-organeller/hucre-bakim-sistemi-v1.jpg 1440w"
      alt="Lizozomun hücre içi geri dönüşümü, bitki merkezî kofulunun turgor desteği ve peroksizomun zararlı peroksidi etkisizleştirmesini karşılaştıran bilimsel levha."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
