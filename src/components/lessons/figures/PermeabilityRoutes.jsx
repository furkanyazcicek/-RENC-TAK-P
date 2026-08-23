import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'kutupsuz',
    zoom: { x: 9, y: 50, scale: 2 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/nonpolar-diffusion.jpg',
      title: 'Küçük ve kutupsuz',
      alt: 'Küçük kutupsuz gaz moleküllerinin hidrofobik zar çekirdeğinde çözünüp doğrudan karşı tarafa geçmesini gösteren sahne.',
      note: 'O₂ ve CO₂ küçük oldukları kadar kutupsuzdur. Zarın ortasındaki yağ benzeri bölge onlar için engel değil, geçici bir çözünme ortamıdır; bu yüzden proteine ihtiyaç duymazlar.',
    },
    shape: { x: 0, y: 40, width: 280, height: 880, rx: 50 },
  },
  {
    key: 'su',
    zoom: { x: 30, y: 50, scale: 1.85 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/aquaporin.jpg',
      title: 'Su ve akuaporin',
      alt: 'Su moleküllerinin akuaporinden tek sıra hâlinde geçerken hidratlı iyonun kanal girişinde dışlanmasını gösteren sahne.',
      note: 'Su çok küçük olduğu için az miktarda lipitten sızabilir; hızlı su geçişi ise akuaporinden olur. Kanalın seçiciliği, suyu geçirirken hidratlı iyonu dışarıda bırakacak kadar hassastır.',
    },
    shape: { x: 270, y: 40, width: 310, height: 880, rx: 50 },
  },
  {
    key: 'glikoz',
    zoom: { x: 50, y: 50, scale: 1.85 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/carrier-conformation.jpg',
      title: 'Glikoz ve taşıyıcı',
      alt: 'Glikozun özgül taşıyıcıya bağlanması, proteinin kapanması ve karşı tarafa açılarak glikozu bırakması.',
      note: 'Glikoz iyon değildir ama çok sayıda hidroksil grubu nedeniyle kutupludur. Lipit çekirdeğe giremez; biçimine uyan taşıyıcıya bağlanıp proteinin şekil değiştirmesiyle geçer.',
    },
    shape: { x: 560, y: 40, width: 340, height: 880, rx: 50 },
  },
  {
    key: 'iyon',
    zoom: { x: 72, y: 50, scale: 1.85 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/ion-hydration-channel.jpg',
      title: 'İyon ve su dolu kanal',
      alt: 'Hidratlı iyonun lipit çekirdekte durdurulması ve hidrofilik kanal içinden geçmesi.',
      note: 'Na⁺, K⁺ ve Cl⁻ çok küçük olsa da yüklüdür. Su kılıflarıyla birlikte hidrofobik çekirdeğe girmeleri enerji bakımından elverişsizdir; açık ve uygun bir kanal gerekir.',
    },
    shape: { x: 880, y: 40, width: 320, height: 880, rx: 50 },
  },
  {
    key: 'makromolekul',
    zoom: { x: 91, y: 25, scale: 2 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/macromolecule-blocked.jpg',
      title: 'Makromolekül',
      alt: 'Büyük katlanmış proteinin lipit tabakadan ve küçük kanallardan geçemediğini, küçük moleküllerin ise geçebildiğini gösteren ölçek karşılaştırması.',
      note: 'Protein ve polisakkarit gibi makromoleküller ne lipit çekirdekte çözünebilir ne de kanalların dar gözeneklerine sığar. Bunlar için zarın biçim değiştirdiği endositoz veya ekzositoz gerekir.',
    },
    shape: { x: 1180, y: 35, width: 260, height: 500, rx: 60 },
  },
]

const MARKERS = [
  { key: 'kutupsuz', x: 145, y: 830 },
  { key: 'su', x: 430, y: 830 },
  { key: 'glikoz', x: 730, y: 830 },
  { key: 'iyon', x: 1040, y: 830 },
  { key: 'makromolekul', x: 1300, y: 830 },
]

export default function PermeabilityRoutes({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/hucre-zari/permeability-routes-v1.jpg"
      srcSet="/lesson-assets/hucre-zari/permeability-routes-v1-900.jpg 900w, /lesson-assets/hucre-zari/permeability-routes-v1.jpg 1440w"
      alt="Küçük kutupsuz maddelerin lipitten, suyun akuaporinden, glikozun taşıyıcıdan, iyonların kanaldan geçişini ve büyük proteinin dışarıda kalışını gösteren beş yollu zar şeması."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
