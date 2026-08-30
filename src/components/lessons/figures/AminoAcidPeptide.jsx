import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'iskelet',
    zoom: { x: 25, y: 30, scale: 1.25 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/amino-common-backbone.jpg',
      title: 'Değişmeyen ortak iskelet',
      note: 'Bütün amino asitlerde merkez α-karbona amino grubu, karboksil grubu, hidrojen ve bir R grubu bağlanır. Peptit bağının tekrar eden omurgayı kurabilmesi bu ortak mimariye dayanır.',
      alt: 'Farklı amino asitlerde aynı kalan merkez karbon, amino ve karboksil gruplarını hizalı karşılaştıran sahne.',
    },
    shape: { x: 30, y: 30, width: 680, height: 540, rx: 180 },
  },
  {
    key: 'r-grubu',
    zoom: { x: 25, y: 50, scale: 1.55 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/amino-r-group-chemistry.jpg',
      title: 'Kimliği belirleyen R grubu',
      note: 'R grubu kutupsuz, polar, pozitif ya da negatif olabilir. Bu kimya; amino asidin suda mı protein çekirdeğinde mi kalacağını ve hangi bağları kuracağını belirler, dolayısıyla katlanmayı yönlendirir.',
      alt: 'Aynı omurgaya bağlı kutupsuz, polar, pozitif ve negatif R gruplarının farklı çevrelerle etkileşimini gösteren sahne.',
    },
    shape: { type: 'circle', cx: 370, cy: 520, r: 150 },
  },
  {
    key: 'peptit-bagi',
    zoom: { x: 67, y: 73, scale: 1.25 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/peptide-bond-formation.jpg',
      title: 'Peptit bağının kurulması',
      note: 'Bir amino asidin karboksil ucu ile diğerinin amino ucu hizalanır; OH ve H su olarak ayrılır, C–N peptit bağı kurulur. Ribozom bu bağı tekrar tekrar kurarak zinciri uzatır.',
      alt: 'İki amino asidin hizalanması, su çıkışı ve düzlemsel peptit bağının oluşmasını basamaklı gösteren sahne.',
    },
    shape: { x: 430, y: 500, width: 1060, height: 460, rx: 120 },
  },
]

const MARKERS = [
  { key: 'iskelet', title: 'Ortak iskelet', x: 105, y: 105, targetX: 370, targetY: 305, width: 290 },
  { key: 'r-grubu', title: 'R grubu', x: 105, y: 790, targetX: 370, targetY: 520, width: 220 },
  { key: 'peptit-bagi', title: 'Peptit bağı', x: 920, y: 900, targetX: 1030, targetY: 700, width: 265 },
]

export default function AminoAcidPeptide({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/temel-bilesenler/amino-asit-peptit-v2.jpg"
      alt="Amino asidin ortak iskeletini, değişken R grubunu ve peptit bağının kurulmasını gösteren bilimsel illüstrasyon."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
