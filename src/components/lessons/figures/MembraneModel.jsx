import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'fosfolipit',
    zoom: { x: 50, y: 52, scale: 1.55 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/membrane-self-assembly.jpg',
      title: 'Fosfolipit çift tabaka',
      alt: 'Fosfolipitlerin suda başları dışa, kuyrukları içe dönerek önce küresel yapı sonra çift tabaka oluşturmasını gösteren açıklayıcı sahne.',
      note: 'Zarı kurmak için bir işçi ya da ATP gerekmez. Su, kutuplu başları kendine çekerken kutupsuz kuyrukları birbirine iter; çift tabaka kendiliğinden kurulur ve ortada suyu sevmeyen bir bariyer oluşur.',
    },
    shape: { x: 20, y: 315, width: 1400, height: 390, rx: 80 },
  },
  {
    key: 'kanal-proteini',
    zoom: { x: 27, y: 52, scale: 1.85 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/ion-hydration-channel.jpg',
      title: 'Kanal proteini',
      alt: 'Su molekülleriyle çevrili bir iyonun lipit çekirdekte durdurulup su dolu protein kanalından geçmesini gösteren mekanizma sahnesi.',
      note: 'İyonu engelleyen yalnızca yükü değil, çevresindeki su kılıfıdır. Kanalın içi suyu seven amino asitlerle döşelidir; iyon böylece hidrofobik kuyruklara hiç temas etmeden geçer.',
    },
    shape: { x: 240, y: 245, width: 350, height: 500, rx: 130 },
  },
  {
    key: 'tasiyici-protein',
    zoom: { x: 59, y: 53, scale: 1.85 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/carrier-conformation.jpg',
      title: 'Taşıyıcı protein',
      alt: 'Glikozu özgül biçimde bağlayan taşıyıcı proteinin kapanıp diğer yöne açılarak molekülü bırakmasını gösteren üç aşamalı sahne.',
      note: 'Taşıyıcı bir tünel değildir. Molekülüne bağlanır, şekil değiştirir ve onu öbür tarafta bırakır. Özgüllük ve doygunluk bu bağlanma döngüsünün doğrudan sonucudur.',
    },
    shape: { x: 690, y: 290, width: 340, height: 455, rx: 140 },
  },
  {
    key: 'kolesterol',
    zoom: { x: 48, y: 53, scale: 1.65 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/cholesterol-buffer.jpg',
      title: 'Kolesterol',
      alt: 'Kolesterolün soğukta fosfolipitlerin sıkı paketlenmesini, sıcakta aşırı hareketini önleyerek zar akışkanlığını dengelemesini gösteren karşılaştırma.',
      note: 'Kolesterolün görevi zarı yalnızca sertleştirmek değildir; akışkanlığı tamponlamaktır. Soğukta donmayı, sıcakta aşırı gevşemeyi sınırlar. Bu yüzden yüzeyde değil, kuyrukların arasında bulunur.',
    },
    shape: [
      { x: 500, y: 360, width: 115, height: 300, rx: 45 },
      { x: 1030, y: 360, width: 120, height: 300, rx: 45 },
      { x: 1280, y: 360, width: 110, height: 300, rx: 45 },
    ],
  },
  {
    key: 'glikoprotein',
    zoom: { x: 78, y: 27, scale: 1.8 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/cell-recognition.jpg',
      title: 'Karbonhidrat zincirleri',
      alt: 'Hücre dış yüzeyindeki karbonhidrat deseninin başka bir hücrenin tanıma proteini tarafından okunmasını ve uyumsuz desenin reddedilmesini gösteren sahne.',
      note: 'Karbonhidrat deseni hücrenin dışarıya dönük kimlik kartıdır. Bağışıklık tanıması, doku uyumu ve kan grupları bu yüzey desenlerinin okunmasına dayanır; bu nedenle zincirler sitoplazmaya bakmaz.',
    },
    shape: { x: 975, y: 60, width: 350, height: 400, rx: 130 },
  },
]

const MARKERS = [
  { key: 'fosfolipit', title: 'Çift tabaka', x: 165, y: 835, targetX: 300, targetY: 615, width: 230 },
  { key: 'kanal-proteini', title: 'Kanal', x: 320, y: 135, targetX: 405, targetY: 360, width: 185 },
  { key: 'tasiyici-protein', title: 'Taşıyıcı', x: 780, y: 835, targetX: 855, targetY: 595, width: 220 },
  { key: 'kolesterol', title: 'Kolesterol', x: 1120, y: 835, targetX: 1090, targetY: 520, width: 235 },
  { key: 'glikoprotein', title: 'Kimlik zinciri', x: 1140, y: 135, targetX: 1125, targetY: 285, width: 280 },
]

export default function MembraneModel({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/hucre-zari/membrane-model-v1.jpg"
      srcSet="/lesson-assets/hucre-zari/membrane-model-v1-900.jpg 900w, /lesson-assets/hucre-zari/membrane-model-v1.jpg 1440w"
      alt="Fosfolipit çift tabaka, kanal ve taşıyıcı proteinler, kuyruklar arasındaki kolesterol ve yalnız dış yüzeydeki karbonhidrat zincirini gösteren hücre zarı kesiti."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
