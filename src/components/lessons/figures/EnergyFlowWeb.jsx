import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'uretici',
    zoom: { x: 12, y: 40, scale: 1.55 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/uretici-enerji-girisi.jpg',
      title: 'Enerjinin giriş kapısı',
      alt: 'Güneş enerjisinin yaprakta organik maddeye dönüştürülmesini ve tırtıla aktarılmasını gösteren sahne.',
      note: 'Üreticiler enerjiyi yaratmaz; ışık enerjisini fotosentezle organik maddede kimyasal bağ enerjisine dönüştürür. Tüketiciler bu hazır organik madde üzerinden enerji ve yapı taşı edinir.',
    },
    shape: { x: 0, y: 20, width: 330, height: 790, rx: 90 },
  },
  {
    key: 'besin-agi',
    zoom: { x: 48, y: 43, scale: 1.55 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/besin-oku-yonu.jpg',
      title: 'Besin okunun yönü',
      alt: 'Bitkiden çekirgeye, kurbağaya, yılana ve şahine doğru ilerleyen besin ve enerji aktarım oklarını gösteren sahne.',
      note: 'Besin zincirinde ok, yenenden yiyene doğru çizilir; maddenin ve kimyasal enerjinin aktarım yönünü gösterir. “Şahin tavşanı yer” cümlesinde ok tavşandan şahine gider.',
    },
    shape: { x: 320, y: 10, width: 730, height: 790, rx: 95 },
  },
  {
    key: 'piramit',
    zoom: { x: 84, y: 42, scale: 1.55 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/trofik-enerji-kaybi.jpg',
      title: 'Enerji neden azalır?',
      alt: 'Üreticiden üst tüketicilere çıkarken enerjinin solunum ve yaşamsal faaliyetlerle ısıya dönüşmesini gösteren trofik sahne.',
      note: 'Bir trofik düzey aldığı enerjinin çoğunu solunum, hareket ve bakımda kullanır; enerji sonunda ısıya dönüşür. Yalnız yeni biyokütlede kalan bölüm bir sonraki düzeye aktarılabilir. Enerji piramidi bu yüzden daima yukarı doğru daralır.',
    },
    shape: { x: 1050, y: 10, width: 486, height: 790, rx: 90 },
  },
  {
    key: 'ayristirici',
    zoom: { x: 50, y: 86, scale: 1.5 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/ayristirici-madde-enerji.jpg',
      title: 'Ayrıştırıcı maddeyi geri kazandırır',
      alt: 'Mantar, bakteri ve detritivorların organik kalıntıları minerallere ayırmasını ve enerjinin ısı olarak çıkmasını gösteren toprak kesiti.',
      note: 'Ayrıştırıcılar her trofik düzeyin atık ve kalıntılarını inorganik maddelere çevirir. Bu maddeler üreticilerce yeniden alınır; fakat ayrıştırıcı enerjiyi başa döndürmez, kendi solunumunda onun da bir bölümü ısıya dönüşür.',
    },
    shape: { x: 60, y: 805, width: 1420, height: 219, rx: 80 },
  },
]

const MARKERS = [
  { key: 'uretici', title: 'Üretici', x: 70, y: 82, targetX: 180, targetY: 430, width: 230 },
  { key: 'besin-agi', title: 'Besin ağı', x: 420, y: 82, targetX: 700, targetY: 420, width: 245 },
  { key: 'piramit', title: 'Enerji piramidi', x: 1135, y: 82, targetX: 1290, targetY: 430, width: 325 },
  { key: 'ayristirici', title: 'Ayrıştırıcı', x: 655, y: 948, targetX: 770, targetY: 875, width: 270 },
]

export default function EnergyFlowWeb({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/ekosistem-ekolojisi/enerji-akisi-v1.jpg"
      srcSet="/lesson-assets/ekosistem-ekolojisi/enerji-akisi-v1-900.jpg 900w, /lesson-assets/ekosistem-ekolojisi/enerji-akisi-v1.jpg 1536w"
      alt="Üreticiler, besin ağı, trofik enerji piramidi ve ayrıştırıcıları bir arada gösteren enerji akışı levhası."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1536}
      height={1024}
    />
  )
}
