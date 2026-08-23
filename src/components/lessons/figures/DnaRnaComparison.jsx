import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'dna',
    zoom: { x: 25, y: 50, scale: 1.25 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/dna-onarim.jpg',
      title: 'DNA — korunan çift zincirli arşiv',
      note: 'Çift zincir, hem kendini eşleme kalıbı sağlar hem de bir zincirdeki hasarın karşı zincire bakılarak onarılmasına izin verir.',
      alt: 'Çift zincirli DNA sarmalının yakın görünümü.',
    },
    shape: { x: 25, y: 25, width: 700, height: 965, rx: 180 },
  },
  {
    key: 'rna',
    zoom: { x: 72, y: 50, scale: 1.25 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/rna-kopya.jpg',
      title: 'RNA — tek zincirli çalışma kopyası',
      note: 'Tek zincirli yapı hızlı üretilir, bilgiyi taşır ve görevi bitince yıkılır. RNA’da deoksiriboz yerine riboz, timin yerine urasil vardır.',
      alt: 'Tek zincirli RNA molekülünün yakın görünümü.',
    },
    shape: { x: 745, y: 110, width: 735, height: 820, rx: 180 },
  },
  {
    key: 'ribozom',
    zoom: { x: 86, y: 48, scale: 1.5 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/ribozom-protein-sentezi.jpg',
      title: 'Bilginin kullanıldığı yer — ribozom',
      note: 'DNA’daki bilgi RNA ile ribozoma taşınır. Ribozom bu sırayı amino asit dizisine çevirerek protein sentezler.',
      alt: 'RNA zincirini okuyan ribozomun yakın görünümü.',
    },
    shape: { x: 1120, y: 260, width: 395, height: 420, rx: 150 },
  },
]

const MARKERS = [
  { key: 'dna', title: 'DNA · arşiv', x: 105, y: 105, targetX: 365, targetY: 470, width: 260 },
  { key: 'rna', title: 'RNA · çalışma kopyası', x: 790, y: 105, targetX: 1020, targetY: 500, width: 390 },
  { key: 'ribozom', title: 'Ribozom', x: 1175, y: 875, targetX: 1320, targetY: 470, width: 225 },
]

export default function DnaRnaComparison({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/nukleik-atp-vitamin/dna-rna-v1.jpg"
      alt="Solda çift zincirli DNA arşivi, sağda tek zincirli RNA çalışma kopyası ve RNA’yı okuyan ribozom."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
