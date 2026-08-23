import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'coklu-alel',
    zoom: { x: 16, y: 30, scale: 1.55 },
    detail: {
      src: '/lesson-assets/kalitim/details/abo-coklu-alel.jpg',
      title: 'Çok alellilik ve eş baskınlık',
      alt: 'ABO geninin üç alelinin farklı antijen ürünlerini ve AB hücresinde iki ürünün birlikte ifade edilmesini gösteren sahne.',
      note: 'Popülasyonda Iᴬ, Iᴮ ve i olmak üzere üç alel vardır; fakat diploit birey bunların yalnız ikisini taşır. Iᴬ ile Iᴮ eş baskındır ve AB’de ikisi de görünür; i ise her ikisine karşı çekiniktir.',
    },
    shape: { x: 0, y: 10, width: 470, height: 590, rx: 110 },
  },
  {
    key: 'abo-fenotip',
    zoom: { x: 51, y: 29, scale: 1.55 },
    detail: {
      src: '/lesson-assets/kalitim/details/abo-genotip-fenotip.jpg',
      title: 'Genotipten ABO fenotipine',
      alt: 'A, B, AB ve O alyuvarlarının yüzey antijenleri ile bunları oluşturabilen alel çiftlerini karşılaştıran sahne.',
      note: 'A grubu IᴬIᴬ veya Iᴬi; B grubu IᴮIᴮ veya Iᴮi; AB yalnız IᴬIᴮ; O yalnız ii olabilir. Fenotip tek görünüm verirken bazı fenotiplerin arkasında iki farklı genotip bulunabilir.',
    },
    shape: { x: 440, y: 0, width: 560, height: 610, rx: 120 },
  },
  {
    key: 'uygunluk',
    zoom: { x: 84, y: 30, scale: 1.55 },
    detail: {
      src: '/lesson-assets/kalitim/details/abo-aglutinasyon.jpg',
      title: 'Antijen–antikor ve çökelme',
      alt: 'Alıcı plazma antikorlarının yabancı alyuvar antijenlerine bağlanıp hücreleri çapraz bağlayarak kümelemesini gösteren sahne.',
      note: 'Transfüzyonda alıcının plazma antikorları, verici alyuvarındaki yabancı antijene bağlanırsa aglütinasyon gelişebilir. Kalıtım antijeni belirler; uygunluk sorusunda ayrıca antikor–antijen karşılaşmasını kontrol et.',
    },
    shape: { x: 980, y: 0, width: 460, height: 610, rx: 100 },
  },
  {
    key: 'rh',
    zoom: { x: 50, y: 79, scale: 1.55 },
    detail: {
      src: '/lesson-assets/kalitim/details/rh-kalitimi.jpg',
      title: 'Rh kalıtımı',
      alt: 'D alelinin Rh antijeni oluşturduğu DD ve Dd genotipleri ile antijen oluşturmayan dd genotipini ve duyarlanmayı gösteren sahne.',
      note: 'Basitleştirilmiş TYT modelinde D baskındır: DD ve Dd Rh(+), dd Rh(−) olur. ABO’dan farklı olarak anti-D antikorları doğal olarak hazır değildir; Rh(−) birey Rh(+) hücrelerle karşılaşınca duyarlanabilir.',
    },
    shape: { x: 0, y: 590, width: 1440, height: 370, rx: 105 },
  },
]

const MARKERS = [
  { key: 'coklu-alel', title: 'Iᴬ · Iᴮ · i', x: 70, y: 90, targetX: 250, targetY: 315, width: 235 },
  { key: 'abo-fenotip', title: 'A · B · AB · O', x: 560, y: 90, targetX: 720, targetY: 320, width: 300 },
  { key: 'uygunluk', title: 'Uygunluk', x: 1090, y: 90, targetX: 1200, targetY: 320, width: 230 },
  { key: 'rh', title: 'Rh sistemi', x: 580, y: 865, targetX: 720, targetY: 735, width: 245 },
]

export default function BloodGroupInheritance({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/kalitim/abo-rh-v1.jpg"
      srcSet="/lesson-assets/kalitim/abo-rh-v1-900.jpg 900w, /lesson-assets/kalitim/abo-rh-v1.jpg 1440w"
      alt="ABO çok alelliliği, alyuvar yüzey antijenleri, antikorla aglütinasyon ve Rh kalıtımını bir arada gösteren levha."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
