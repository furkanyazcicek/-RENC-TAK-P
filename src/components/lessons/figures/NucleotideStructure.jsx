import InteractiveIllustration from './InteractiveIllustration'

/**
 * NÜKLEOTİT YAPISI VE BAZ EŞLEŞMESİ
 *
 * Solda tek bir nükleotidin üç parçası, sağda bu parçaların DNA'da nasıl
 * karşılıklı dizildiği duruyor. İkisi AYNI görselde çünkü öğrenciler
 * nükleotidi ve DNA'yı iki ayrı konu gibi öğrenip sonra "DNA'da kaç
 * fosfat var?" sorusunda takılıyor.
 *
 * Sağdaki eşleşmede bağ çizgileri ==sayılabilir== biçimde çizildi:
 * A–T ikili, G–C üçlü. Öğrenci saymak zorunda kalınca bilgi yerine
 * oturuyor; renk veya etiketle verilseydi yine ezber olurdu.
 */

const REGIONS = [
  {
    key: 'fosfat',
    zoom: { x: 13, y: 34, scale: 1.7 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/nukleotit-fosfat-omurga.jpg',
      title: 'Fosfat grubu',
      note: 'Her nükleotitte bir tanedir ve hepsinde aynıdır. Zinciri kuran omurga, şeker ile fosfatın sırayla dizilmesiyle oluşur.',
      alt: 'Nükleotidin fosfat grubunun yakın görünümü.',
    },
    shape: { x: 55, y: 225, width: 285, height: 285, rx: 140 },
  },
  {
    key: 'seker',
    zoom: { x: 24, y: 63, scale: 1.65 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/nukleotit-seker-farki.jpg',
      title: 'Beş karbonlu şeker',
      note: 'DNA’da deoksiriboz, RNA’da riboz. Aradaki tek fark bir oksijen atomudur ama molekülün adını ve kararlılığını bu fark belirler.',
      alt: 'Nükleotidin beş köşeli şeker halkasının yakın görünümü.',
    },
    shape: { x: 245, y: 515, width: 265, height: 265, rx: 70 },
  },
  {
    key: 'baz',
    zoom: { x: 38, y: 31, scale: 1.6 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/nukleotit-baz-cesitleri.jpg',
      title: 'Organik baz',
      note: 'Değişken parça. Nükleotidin adı bu bazdan gelir. DNA’da adenin, timin, guanin, sitozin; RNA’da timin yerine urasil bulunur.',
      alt: 'Nükleotide bağlı halkalı organik bazın yakın görünümü.',
    },
    shape: { x: 415, y: 165, width: 330, height: 310, rx: 85 },
  },
  {
    key: 'eslesme',
    zoom: { x: 74, y: 50, scale: 1.35 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/nukleotit-baz-eslesme.jpg',
      title: 'Baz eşleşmesi',
      note: 'Adenin daima timinle iki, guanin daima sitozinle üç hidrojen bağı kurar. Bir zincirin dizilimi diğerini zorunlu kılar — DNA’nın kendini eşleyebilmesinin temeli budur.',
      alt: 'DNA’nın iki zinciri arasındaki hidrojen bağlarının yakın görünümü.',
    },
    shape: { x: 795, y: 55, width: 700, height: 910, rx: 130 },
  },
]

const MARKERS = [
  { key: 'fosfat', title: 'Fosfat', x: 80, y: 85, targetX: 190, targetY: 300, width: 185 },
  { key: 'seker', title: '5 karbonlu şeker', x: 80, y: 835, targetX: 350, targetY: 690, width: 250 },
  { key: 'baz', title: 'Organik baz', x: 530, y: 65, targetX: 590, targetY: 225, width: 210 },
  { key: 'eslesme', title: 'Baz eşleşmesi', x: 1075, y: 35, targetX: 1150, targetY: 300, width: 235 },
]

export default function NucleotideStructure({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/nukleik-atp-vitamin/nukleotit-eslesme-v1.jpg"
      alt="Solda fosfat, beş karbonlu şeker ve organik bazdan oluşan tek bir nükleotit; sağda DNA'nın iki zinciri arasında hidrojen bağlarıyla eşleşmiş baz çiftleri."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
