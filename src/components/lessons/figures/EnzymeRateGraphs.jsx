import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'sicaklik',
    zoom: { x: 17, y: 52, scale: 1.35 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/enzyme-temperature-denaturation.jpg',
      title: 'Sıcaklık — optimumdan sonra düşüş',
      note: 'Düşük sıcaklıkta enzim sağlamdır ama çarpışmalar yavaştır. Optimuma kadar üretken çarpışma artar; daha yüksek sıcaklıkta zayıf bağlar bozulur, aktif merkez şekli kaybolur ve hız keskin düşer.',
      alt: 'Soğukta yavaş çarpışma, optimumda hızlı kataliz ve yüksek sıcaklıkta denatürasyonu karşılaştıran sahne.',
    },
    shape: { x: 25, y: 130, width: 475, height: 720, rx: 100 },
  },
  {
    key: 'ph',
    zoom: { x: 50, y: 52, scale: 1.35 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/enzyme-ph-active-site.jpg',
      title: 'pH — enzime özgü optimum',
      note: 'Asitte yan gruplar proton alır, bazda proton kaybeder. Aktif merkezin yük eşleşmeleri ve proteini tutan iyonik bağlar değişince substrat uyumu bozulur; her enzimin doğru yük düzenini koruduğu optimum aralık farklıdır.',
      alt: 'Asidik ve bazik uçlarda aktif merkez yüklerinin değişip substrat uyumunu bozmasını, optimumda korunmasını gösteren sahne.',
    },
    shape: { x: 520, y: 130, width: 490, height: 720, rx: 100 },
  },
  {
    key: 'substrat',
    zoom: { x: 83, y: 52, scale: 1.35 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/enzyme-substrate-saturation.jpg',
      title: 'Substrat — doygunluk platosu',
      note: 'Başta substrat artışı boş aktif merkezleri daha sık doldurur. Son aşamada bütün enzimler çalışıyordur; fazladan substrat sırada bekler. Enzim miktarı sabitse aynı anda daha fazla tepkime yürüyemez ve hız plato yapar.',
      alt: 'Az substratta boş enzimleri, artan doluluğu ve bütün aktif merkezler dolunca fazladan substratın beklemesini gösteren sahne.',
    },
    shape: { x: 1035, y: 130, width: 475, height: 720, rx: 100 },
  },
]

const MARKERS = [
  { key: 'sicaklik', title: 'Sıcaklık', x: 90, y: 105, targetX: 255, targetY: 455, width: 230 },
  { key: 'ph', title: 'pH', x: 610, y: 105, targetX: 765, targetY: 455, width: 175 },
  { key: 'substrat', title: 'Substrat', x: 1125, y: 105, targetX: 1280, targetY: 455, width: 235 },
]

export default function EnzymeRateGraphs({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/temel-bilesenler/enzim-hiz-grafikleri-v2.jpg"
      alt="Sıcaklık, pH ve substrat derişiminin enzim hızına etkisini karşılaştıran üç bilimsel grafik."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
