import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'su',
    zoom: { x: 24, y: 25, scale: 1.48 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/su-dongusu.jpg',
      title: 'Suyun yer değiştirmesi',
      alt: 'Buharlaşma, terleme, yoğunlaşma, yağış, yüzey akışı ve yer altı suyunu gösteren su döngüsü sahnesi.',
      note: 'Güneş buharlaşmayı yürütür; bitkiler terlemeyle su buharı verir. Yoğunlaşan su yağışla döner, yüzeyden akar veya toprağa sızar. Su döngüsünde molekülün hâli ve bulunduğu depo değişir.',
    },
    shape: { x: 0, y: 0, width: 760, height: 570, rx: 110 },
  },
  {
    key: 'karbon',
    zoom: { x: 76, y: 26, scale: 1.5 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/karbon-dongusu.jpg',
      title: 'Karbonun izlediği yol',
      alt: 'Atmosfer karbonunun fotosentezle bitkiye, beslenmeyle tüketiciye geçmesini ve solunum, ayrışma ile yanma sonucu geri dönmesini gösteren sahne.',
      note: 'Bitkiler karbonu topraktan değil atmosferdeki CO₂’den alır. Fotosentez karbonu organik maddeye bağlar; beslenme canlılar arasında taşır. Solunum, ayrışma ve yanma karbonu yeniden atmosfere verebilir.',
    },
    shape: { x: 760, y: 0, width: 776, height: 570, rx: 110 },
  },
  {
    key: 'azot',
    zoom: { x: 25, y: 76, scale: 1.5 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/azot-dongusu.jpg',
      title: 'Azotu kullanılabilir hâle getirenler',
      alt: 'Atmosferik azotun yıldırım ve bakterilerle toprağa bağlanmasını, bitkiye ve hayvana geçmesini, sonra atmosfere dönmesini gösteren sahne.',
      note: 'Atmosferde N₂ bol olsa da bitkiler bunu doğrudan kullanamaz. Azot bağlayan ve nitrifikasyon yapan bakteriler kullanılabilir azotlu bileşikleri oluşturur; denitrifikasyon bakterileri azotu atmosfere geri taşır.',
    },
    shape: { x: 0, y: 560, width: 780, height: 464, rx: 95 },
  },
  {
    key: 'madde-enerji',
    zoom: { x: 77, y: 77, scale: 1.5 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/madde-enerji-karsilastirma.jpg',
      title: 'Madde döner, enerji akar',
      alt: 'Aynı mineral parçacığının toprak, bitki, otçul, etçil ve ayrıştırıcı arasında dönmesini; enerjinin güneşten girip ısı olarak çıkmasını gösteren sahne.',
      note: 'Atomlar ekosistem içinde tekrar tekrar kullanılabilir; ayrıştırıcılar madde döngüsünü kapatır. Enerji ise güneşten girer, trofik düzeylerden geçerken ısıya dönüşür ve ekosistemde yeniden kullanılmak üzere dönmez.',
    },
    shape: { x: 770, y: 560, width: 766, height: 464, rx: 95 },
  },
]

const MARKERS = [
  { key: 'su', title: 'Su', x: 70, y: 82, targetX: 380, targetY: 290, width: 180 },
  { key: 'karbon', title: 'Karbon', x: 870, y: 82, targetX: 1135, targetY: 285, width: 215 },
  { key: 'azot', title: 'Azot', x: 70, y: 945, targetX: 390, targetY: 770, width: 190 },
  { key: 'madde-enerji', title: 'Madde · enerji', x: 875, y: 945, targetX: 1165, targetY: 790, width: 300 },
]

export default function MatterCycles({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/ekosistem-ekolojisi/madde-donguleri-v1.jpg"
      srcSet="/lesson-assets/ekosistem-ekolojisi/madde-donguleri-v1-900.jpg 900w, /lesson-assets/ekosistem-ekolojisi/madde-donguleri-v1.jpg 1536w"
      alt="Su, karbon ve azot döngülerini atmosfer, canlılar ve toprak arasında bir arada gösteren madde döngüleri levhası."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1536}
      height={1024}
    />
  )
}
