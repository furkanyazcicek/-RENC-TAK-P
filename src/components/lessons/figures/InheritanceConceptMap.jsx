import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'lokus',
    zoom: { x: 14, y: 48, scale: 1.65 },
    detail: {
      src: '/lesson-assets/kalitim/details/lokus-homolog.jpg',
      title: 'Homolog kromozom ve lokus',
      alt: 'Anne ve babadan gelen homolog kromozomlarda aynı gen lokusunun eş konumda, başka bir genin ise farklı konumda olduğunu gösteren sahne.',
      note: 'Homolog kromozomlar aynı genleri aynı lokuslarda taşır; DNA dizileri birebir aynı olmak zorunda değildir. Biri anneden, biri babadan gelir. Aynı lokustaki farklı dizi seçeneklerine alel denir.',
    },
    shape: { x: 0, y: 30, width: 365, height: 820, rx: 110 },
  },
  {
    key: 'alel',
    zoom: { x: 37, y: 48, scale: 1.55 },
    detail: {
      src: '/lesson-assets/kalitim/details/alel-baskinlik-mekanizma.jpg',
      title: 'Alel ve baskınlık',
      alt: 'Aynı genin iki DNA varyantından birinin işlevsel enzim, diğerinin işlevsiz ürün oluşturması ve heterozigotta pigment oluşmasını gösteren sahne.',
      note: 'Baskın alel çekinik aleli silmez. Birçok örnekte tek işlevsel alelin ürettiği protein fenotip için yeterlidir; çekinik alel DNA’da kalır ve gametlere aktarılabilir. Baskınlık “daha güçlü” veya “daha yaygın” demek değildir.',
    },
    shape: { x: 335, y: 55, width: 365, height: 760, rx: 100 },
  },
  {
    key: 'genotip',
    zoom: { x: 60, y: 50, scale: 1.6 },
    detail: {
      src: '/lesson-assets/kalitim/details/diploit-genotip.jpg',
      title: 'Diploit genotip',
      alt: 'Bir çekirdekte homolog kromozom çiftinin aynı lokusunda anne ve babadan gelen iki aleli ve DNA eşlenmesini gösteren sahne.',
      note: 'Diploit birey bir gen için iki alel taşır: AA ve aa homozigot, Aa heterozigottur. DNA eşlenmesi alel sayısını değiştirmez; her kromozomu kardeş kromatitleriyle kopyalar. Genotip, alellerin birlikte yazımıdır.',
    },
    shape: { x: 675, y: 50, width: 365, height: 785, rx: 120 },
  },
  {
    key: 'fenotip',
    zoom: { x: 86, y: 48, scale: 1.55 },
    detail: {
      src: '/lesson-assets/kalitim/details/genotip-cevre-fenotip.jpg',
      title: 'Fenotip = genotip + çevre',
      alt: 'Aynı genotipin farklı çevrelerde farklı düzeyde görünmesi ve farklı genotipin aynı çevrede başka özellik oluşturmasını karşılaştıran sahne.',
      note: 'Fenotip gözlenen özelliktir; genotipin protein ürünleri ile çevrenin etkileşiminden doğar. Çevrenin fenotipi değiştirmesi DNA dizisinin değiştiği veya kazanılmış özelliğin kalıtıldığı anlamına gelmez.',
    },
    shape: { x: 1010, y: 40, width: 430, height: 820, rx: 110 },
  },
]

const MARKERS = [
  { key: 'lokus', title: 'Lokus', x: 85, y: 865, targetX: 190, targetY: 410, width: 180 },
  { key: 'alel', title: 'Alel', x: 410, y: 865, targetX: 520, targetY: 460, width: 165 },
  { key: 'genotip', title: 'Genotip', x: 750, y: 865, targetX: 855, targetY: 500, width: 220 },
  { key: 'fenotip', title: 'Fenotip', x: 1110, y: 865, targetX: 1230, targetY: 485, width: 220 },
]

export default function InheritanceConceptMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/kalitim/kromozomdan-fenotipe-v1.jpg"
      srcSet="/lesson-assets/kalitim/kromozomdan-fenotipe-v1-900.jpg 900w, /lesson-assets/kalitim/kromozomdan-fenotipe-v1.jpg 1440w"
      alt="Homolog kromozomdaki lokustan alellere, diploit genotipe ve protein üzerinden gözlenen fenotipe uzanan kalıtım bilgi akışı."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
