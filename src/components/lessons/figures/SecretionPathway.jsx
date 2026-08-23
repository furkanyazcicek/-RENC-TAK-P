import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'ribozom',
    zoom: { x: 17, y: 76, scale: 1.75 },
    detail: {
      src: '/lesson-assets/sitoplazma-organeller/details/ribozom-translokasyon.jpg',
      title: 'Ribozomdan ER içine',
      alt: 'mRNA okuyan ER bağlı ribozomdan çıkan polipeptidin bir kanal aracılığıyla doğrudan ER lümenine aktarılmasını gösteren moleküler yakın plan.',
      note: 'Salgı proteininin hedef sinyali ribozomu ER zarındaki kanala yönlendirir. mRNA çevrilirken büyüyen zincir eşzamanlı olarak ER lümenine geçer; yani sentez ve ER’ye giriş birbirinden kopuk iki olay değildir.',
    },
    shape: { type: 'ellipse', cx: 260, cy: 705, rx: 220, ry: 220 },
  },
  {
    key: 'er',
    zoom: { x: 31, y: 44, scale: 1.55 },
    detail: {
      src: '/lesson-assets/sitoplazma-organeller/details/ger-katlanma-kalite.jpg',
      title: 'Katlanma ve kalite kontrol',
      alt: 'Granüllü ER lümeninde şaperonlarla katlanan doğru proteinin veziküle alınmasını ve hatalı katlanan proteinin tutulmasını gösteren yakın plan.',
      note: 'Granüllü ER yalnız bir taşıma koridoru değildir. Şaperonlar proteinin katlanmasına yardım eder; doğru katlanan ürün Golgi’ye gidecek veziküle alınırken hatalı ürün tutulur ve geri dönüşüme yönlendirilir.',
    },
    shape: { x: 180, y: 70, width: 530, height: 750, rx: 180 },
  },
  {
    key: 'golgi',
    zoom: { x: 59, y: 49, scale: 1.6 },
    detail: {
      src: '/lesson-assets/sitoplazma-organeller/details/golgi-ayirma.jpg',
      title: 'İşleme ve adresleme',
      alt: 'Golgi aygıtının alıcı yüzüne gelen vezikülleri, proteinlere karbonhidrat eklenmesini ve ürünlerin farklı hedeflere ayrılmasını gösteren yakın plan.',
      note: 'Golgi’nin iki yüzü aynı değildir: ER’den gelen veziküller cis yüze ulaşır, ürünler sarnıçlarda değiştirilir ve trans yüzde hedeflerine göre ayrılır. “Paketler” sözü bu yönlü işleme ve adreslemeyi de içerir.',
    },
    shape: { type: 'ellipse', cx: 850, cy: 485, rx: 250, ry: 330 },
  },
  {
    key: 'ekzositoz',
    zoom: { x: 87, y: 40, scale: 1.75 },
    detail: {
      src: '/lesson-assets/sitoplazma-organeller/details/ekzositoz-kaynasma.jpg',
      title: 'Zar kaynaşması',
      alt: 'Salgı vezikülünün mikrotübül boyunca taşınması, hücre zarına kenetlenmesi, füzyon poru açması ve içeriğini dışarı bırakmasını gösteren basamaklı yakın plan.',
      note: 'Vezikül hedef zara rastgele çarpıp boşalmaz. Taşınır, doğru zarla eşleşir, kenetlenir ve bir füzyon poru açar. İçerik dışarı verilirken vezikül zarı hücre zarının parçası olur; olay ATP gerektirir.',
    },
    shape: { x: 1060, y: 55, width: 380, height: 780, rx: 140 },
  },
]

const MARKERS = [
  { key: 'ribozom', title: 'Ribozom', x: 105, y: 845, targetX: 270, targetY: 705, width: 230 },
  { key: 'er', title: 'Granüllü ER', x: 430, y: 845, targetX: 455, targetY: 475, width: 285 },
  { key: 'golgi', title: 'Golgi', x: 790, y: 845, targetX: 850, targetY: 505, width: 190 },
  { key: 'ekzositoz', title: 'Ekzositoz', x: 1140, y: 845, targetX: 1260, targetY: 350, width: 255 },
]

export default function SecretionPathway({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/sitoplazma-organeller/salgi-yolu-v1.jpg"
      srcSet="/lesson-assets/sitoplazma-organeller/salgi-yolu-v1-900.jpg 900w, /lesson-assets/sitoplazma-organeller/salgi-yolu-v1.jpg 1440w"
      alt="Granüllü ER üzerindeki ribozomdan başlayan, Golgi’de işlenip ayrılan ve salgı vezikülünün hücre zarıyla kaynaşmasıyla biten protein salgı hattı."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
