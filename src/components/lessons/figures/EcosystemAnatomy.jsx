import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'hiyerarsi',
    zoom: { x: 15, y: 48, scale: 1.58 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/organizma-populasyon-komunite.jpg',
      title: 'Organizmadan komüniteye',
      alt: 'Tek tavşandan aynı tür bireylerin popülasyonuna ve çok sayıda türün oluşturduğu komüniteye geçişi gösteren ekoloji sahnesi.',
      note: 'Organizma tek bireydir. Aynı türün aynı yer ve zamanda yaşayan bireyleri popülasyonu; farklı türlere ait popülasyonların bütünü komüniteyi oluşturur. Komüniteye cansız çevre eklendiğinde ekosistem kurulur.',
    },
    shape: { x: 0, y: 20, width: 395, height: 910, rx: 90 },
  },
  {
    key: 'abiyotik',
    zoom: { x: 53, y: 48, scale: 1.48 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/abiyotik-tolerans.jpg',
      title: 'Cansız çevre ve tolerans',
      alt: 'Işık, sıcaklık, su, mineral ve oksijen değiştikçe bir türün yaşama başarısının değişmesini gösteren çevresel tolerans sahnesi.',
      note: 'Sıcaklık, ışık, su, pH, mineral ve oksijen gibi abiyotik etmenler türlerin dağılışını sınırlar. Her türün bir tolerans aralığı vardır; optimumdan uzaklaştıkça yaşama ve üreme başarısı azalır.',
    },
    shape: { x: 770, y: 20, width: 410, height: 910, rx: 90 },
  },
  {
    key: 'habitat-nis',
    zoom: { x: 39, y: 47, scale: 1.48 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/habitat-nis.jpg',
      title: 'Habitat ve ekolojik niş',
      alt: 'Bir baykuşun yaşadığı orman kovuğu ile avlanma zamanı, besini ve ekosistemdeki işlevini karşılaştıran sahne.',
      note: 'Habitat canlının adresidir; niş ise kaynakları kullanma biçimi, beslenmesi, etkinlik zamanı ve diğer türlerle ilişkileri dahil ekosistemdeki işidir. Aynı habitatta yaşayan türlerin nişleri farklı olabilir.',
    },
    shape: { x: 390, y: 20, width: 395, height: 910, rx: 90 },
  },
  {
    key: 'sistem',
    zoom: { x: 86, y: 48, scale: 1.5 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/ekosistem-etkilesim.jpg',
      title: 'Ekosistem bir ilişki ağıdır',
      alt: 'Gölet ekosisteminde güneş, üretici, tüketici, ayrıştırıcı ve mineral maddeler arasındaki bağlantıları gösteren sahne.',
      note: 'Ekosistem yalnız canlı listesinden oluşmaz. Enerji güneşten üreticiye ve tüketicilere ilerler; madde ise canlılarla cansız çevre arasında döner. Bir bileşendeki değişim ağın başka noktalarını etkiler.',
    },
    shape: { x: 1180, y: 20, width: 356, height: 910, rx: 90 },
  },
]

const MARKERS = [
  { key: 'hiyerarsi', title: 'Hiyerarşi', x: 70, y: 945, targetX: 205, targetY: 520, width: 245 },
  { key: 'habitat-nis', title: 'Habitat · niş', x: 455, y: 78, targetX: 585, targetY: 390, width: 280 },
  { key: 'abiyotik', title: 'Cansız çevre', x: 840, y: 945, targetX: 980, targetY: 535, width: 285 },
  { key: 'sistem', title: 'Biyosfer', x: 1260, y: 78, targetX: 1370, targetY: 485, width: 240 },
]

export default function EcosystemAnatomy({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/ekosistem-ekolojisi/ekosistem-anatomisi-v1.jpg"
      srcSet="/lesson-assets/ekosistem-ekolojisi/ekosistem-anatomisi-v1-900.jpg 900w, /lesson-assets/ekosistem-ekolojisi/ekosistem-anatomisi-v1.jpg 1536w"
      alt="Organizmadan popülasyon, komünite, ekosistem ve biyosfere uzanan ekolojik organizasyon levhası."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1536}
      height={1024}
    />
  )
}
