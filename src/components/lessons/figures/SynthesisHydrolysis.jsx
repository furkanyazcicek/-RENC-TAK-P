import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'dehidrasyon',
    zoom: { x: 50, y: 25, scale: 1.18 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/dehydration-water-release.jpg',
      title: 'Dehidrasyon sentezi',
      note: 'Bir monomerden OH, diğerinden H ayrılır; bunlar H₂O oluştururken monomerler arasında yeni kovalent bağ kurulur. Doğrusal zincirde n monomer için n−1 bağ ve n−1 su ilişkisi buradan gelir.',
      alt: 'İki monomerden ayrılan hidroksil ve hidrojenin su oluşturmasıyla yeni bağ kurulmasını basamaklı gösteren sahne.',
    },
    shape: { x: 35, y: 45, width: 1465, height: 450, rx: 90 },
  },
  {
    key: 'hidroliz',
    zoom: { x: 50, y: 75, scale: 1.18 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/hydrolysis-water-split.jpg',
      title: 'Hidroliz',
      note: 'Su yalnız ortamda bulunmaz, tepkimenin maddesidir: H ve OH’ye ayrılır, bağın iki ucuna eklenir ve kovalent bağ kopar. Sindirim enzimleri polimerleri bu yolla monomerlere ayırır.',
      alt: 'Su molekülünün ayrılıp polimer bağının iki ucunu tamamlayarak bağı koparmasını gösteren sahne.',
    },
    shape: { x: 35, y: 530, width: 1465, height: 450, rx: 90 },
  },
]

const MARKERS = [
  { key: 'dehidrasyon', title: 'Dehidrasyon sentezi', x: 110, y: 105, targetX: 770, targetY: 280, width: 390 },
  { key: 'hidroliz', title: 'Hidroliz', x: 110, y: 580, targetX: 770, targetY: 755, width: 225 },
]

export default function SynthesisHydrolysis({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/temel-bilesenler/sentez-hidroliz-v2.jpg"
      alt="Üstte su çıkararak bağ kuran dehidrasyon sentezi, altta su kullanarak bağ koparan hidroliz tepkimesi."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
