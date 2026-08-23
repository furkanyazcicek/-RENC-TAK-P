import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'suda-cozunen',
    zoom: { x: 25, y: 50, scale: 1.28 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/vitamin-suda-bobrek.jpg',
      title: 'Suda çözünen vitaminler — B ve C',
      note: 'Kan plazmasında kolay taşınır, büyük ölçüde depolanmaz ve fazlası böbreklerden idrarla uzaklaştırılır. Bu yüzden düzenli alınmaları gerekir.',
      alt: 'Su akışı ve kan damarı içinde taşınan suda çözünen vitaminlerin yakın görünümü.',
    },
    shape: { x: 20, y: 40, width: 715, height: 920, rx: 150 },
  },
  {
    key: 'yagda-cozunen',
    zoom: { x: 76, y: 50, scale: 1.28 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/vitamin-yagda-depolama.jpg',
      title: 'Yağda çözünen vitaminler — A, D, E ve K',
      note: 'Yağlarla birlikte emilir, karaciğer ve yağ dokusunda depolanır. Depo avantaj sağlar; fakat aşırı alımda birikme ve zehirlenme riski doğurur.',
      alt: 'Karaciğer ve yağ dokusunda biriken yağda çözünen vitaminlerin yakın görünümü.',
    },
    shape: { x: 760, y: 40, width: 756, height: 920, rx: 150 },
  },
]

const MARKERS = [
  { key: 'suda-cozunen', title: 'Suda çözünen · B, C', x: 105, y: 105, targetX: 390, targetY: 460, width: 360 },
  { key: 'yagda-cozunen', title: 'Yağda çözünen · A, D, E, K', x: 900, y: 105, targetX: 1120, targetY: 500, width: 500 },
]

export default function VitaminSolubility({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/nukleik-atp-vitamin/vitamin-cozunurluk-v1.jpg"
      alt="Solda su ve kan akışıyla taşınan suda çözünen vitaminler, sağda karaciğer ve yağ dokusunda depolanan yağda çözünen vitaminler."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
