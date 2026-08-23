import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'nukleozom',
    zoom: { x: 35, y: 48, scale: 1.65 },
    detail: {
      src: '/lesson-assets/cekirdek-hucre-tipleri/details/nucleosome-assembly.jpg',
      title: 'Nükleozom: ilk paket',
      alt: 'DNA’nın sekiz histon proteininden oluşan çekirdeğin çevresine sarılması ve tekrarlayan nükleozom dizisini oluşturmasını gösteren sahne.',
      note: 'Paketlemenin temel birimi nükleozomdur. DNA, sekiz histondan oluşan çekirdeğe sarılır; aradaki bağlayıcı DNA bir sonraki nükleozoma uzanır. Böylece uzunluk azalırken genlere erişim tamamen kaybolmaz.',
    },
    shape: { x: 220, y: 120, width: 520, height: 700, rx: 180 },
  },
  {
    key: 'kromatin',
    zoom: { x: 62, y: 50, scale: 1.65 },
    detail: {
      src: '/lesson-assets/cekirdek-hucre-tipleri/details/euchromatin-heterochromatin.jpg',
      title: 'Açık ve kapalı kromatin',
      alt: 'Aynı kromatin lifinin gevşek kısmında gen okunurken sıkı paketli kısmında enzim erişiminin engellendiğini gösteren karşılaştırma.',
      note: 'Kromatin tek yoğunlukta değildir. Gevşek bölgeler okunabilir; sıkı bölgeler geçici olarak sessizdir. Hücre, hangi genin çalışacağını yalnız DNA dizisiyle değil paketleme derecesiyle de denetler.',
    },
    shape: { x: 640, y: 115, width: 430, height: 735, rx: 170 },
  },
  {
    key: 'kromozom',
    zoom: { x: 88, y: 50, scale: 1.85 },
    detail: {
      src: '/lesson-assets/cekirdek-hucre-tipleri/details/chromosome-segregation.jpg',
      title: 'Yoğun kromozom',
      alt: 'Gevşek DNA’nın dolaşma riski ile yoğun kromozomların iğ iplikleri sayesinde düzenli ayrılmasını karşılaştıran sahne.',
      note: 'Bölünmede okunabilirlik ikinci plandadır; güvenli taşıma gerekir. Kromatin en yoğun hâline geçer, kardeş kromatitler sentromer bölgesinden iğ ipliklerine bağlanır ve eşit ayrılır.',
    },
    shape: { x: 1050, y: 75, width: 390, height: 825, rx: 160 },
  },
]

const MARKERS = [
  { key: 'nukleozom', title: 'Nükleozom', x: 300, y: 845, targetX: 505, targetY: 565, width: 250 },
  { key: 'kromatin', title: 'Kromatin lifi', x: 720, y: 845, targetX: 835, targetY: 560, width: 275 },
  { key: 'kromozom', title: 'Kromozom', x: 1120, y: 845, targetX: 1235, targetY: 550, width: 240 },
]

export default function ChromatinPackaging({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/cekirdek-hucre-tipleri/chromatin-packaging-v1.jpg"
      srcSet="/lesson-assets/cekirdek-hucre-tipleri/chromatin-packaging-v1-900.jpg 900w, /lesson-assets/cekirdek-hucre-tipleri/chromatin-packaging-v1.jpg 1440w"
      alt="DNA çift sarmalının histonlara sarılarak nükleozom, kromatin halkaları ve sonunda iki kardeş kromatitli yoğun kromozom oluşturmasını gösteren paketlenme dizisi."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
