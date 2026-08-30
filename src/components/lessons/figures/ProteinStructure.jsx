import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'birincil',
    zoom: { x: 12, y: 50, scale: 1.45 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/protein-primary-mutation.jpg',
      title: 'Birincil yapı — dizilim',
      note: 'Birincil yapı amino asitlerin doğrusal sırasıdır. Tek bir amino asit değişimi yeni yük ya da hidrofobiklik getirebilir; zincirin sonraki katlanması ve aktif merkezin şekli bu nedenle değişebilir.',
      alt: 'Ribozomdan çıkan amino asit dizisindeki tek değişimin protein katlanmasını ve aktif merkezi bozmasını gösteren sahne.',
    },
    shape: { x: 20, y: 100, width: 350, height: 820, rx: 120 },
  },
  {
    key: 'ikincil',
    zoom: { x: 38, y: 50, scale: 1.45 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/protein-secondary-hbond.jpg',
      title: 'İkincil yapı — yerel katlanma',
      note: 'α-heliks ve β-tabaka, R grupları arasında değil polipeptit omurgasındaki C=O ile N–H grupları arasında kurulan düzenli hidrojen bağlarıyla kararlılaşır. R grupları dışa bakar.',
      alt: 'Polipeptit omurgası hidrojen bağlarının alfa heliks ve beta tabakayı nasıl tuttuğunu gösteren sahne.',
    },
    shape: { x: 385, y: 100, width: 360, height: 820, rx: 120 },
  },
  {
    key: 'ucuncul',
    zoom: { x: 63, y: 50, scale: 1.45 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/protein-tertiary-folding.jpg',
      title: 'Üçüncül yapı — işlevsel şekil',
      note: 'Tek zincir; hidrofobik R gruplarını içe gömer, iyonik çekimleri ve hidrojen bağlarını kurar, bazı proteinlerde disülfit köprüleriyle kilitlenir. Uzak amino asitler birleşerek işlevsel aktif cebi oluşturur.',
      alt: 'Tek polipeptitte hidrofobik çekirdek, iyonik ve hidrojen bağları ile disülfit köprüsünün aktif cep oluşturmasını gösteren sahne.',
    },
    shape: { x: 760, y: 100, width: 360, height: 820, rx: 120 },
  },
  {
    key: 'dorduncul',
    zoom: { x: 86, y: 50, scale: 1.45 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/protein-quaternary-cooperativity.jpg',
      title: 'Dördüncül yapı — alt birimler',
      note: 'Birden fazla katlanmış polipeptit alt birim tek kompleks olur. Hemoglobinde bir alt birime O₂ bağlanması diğerlerinin şeklini etkileyip bağlanmayı kolaylaştırır; dördüncül yapı iş birliği sağlar ve her proteinde bulunmaz.',
      alt: 'Dört protein alt biriminin kompleks oluşturmasını ve birine oksijen bağlanınca diğerlerinin biçim değiştirmesini gösteren sahne.',
    },
    shape: { x: 1135, y: 100, width: 370, height: 820, rx: 120 },
  },
]

const MARKERS = [
  { key: 'birincil', title: 'Birincil', x: 90, y: 105, targetX: 190, targetY: 500, width: 210 },
  { key: 'ikincil', title: 'İkincil', x: 455, y: 105, targetX: 565, targetY: 500, width: 210 },
  { key: 'ucuncul', title: 'Üçüncül', x: 830, y: 105, targetX: 940, targetY: 500, width: 225 },
  { key: 'dorduncul', title: 'Dördüncül', x: 1205, y: 105, targetX: 1320, targetY: 500, width: 250 },
]

export default function ProteinStructure({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/temel-bilesenler/protein-yapi-v2.jpg"
      alt="Proteinin birincil, ikincil, üçüncül ve dördüncül yapı düzeylerini yan yana gösteren bilimsel illüstrasyon."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
