import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'zarsiz',
    zoom: { x: 17, y: 50, scale: 1.5 },
    detail: {
      src: '/lesson-assets/sitoplazma-organeller/details/zarsiz-organeller.jpg',
      title: 'Zarsız yapılar',
      alt: 'Zarla çevrilmeden sitozolde çalışan ribozomun protein sentezi ve sentrozomun mikrotübül düzenlemesini gösteren yakın plan.',
      note: 'Zarsız olmak işlevsiz olmak değildir. Ribozom mRNA bilgisini amino asit dizisine çevirir; sentrozom ise mikrotübüllerin kurulacağı merkezi düzenler. İkisi de çevresinde ayrı bir iç ortam oluşturamaz.',
    },
    shape: { x: 0, y: 0, width: 470, height: 960, rx: 90 },
  },
  {
    key: 'tek-zarli',
    zoom: { x: 51, y: 52, scale: 1.45 },
    detail: {
      src: '/lesson-assets/sitoplazma-organeller/details/tek-zarli-bolmeler.jpg',
      title: 'Tek zar, ayrı kimya',
      alt: 'Tek bir zarın lizozom içindeki asidik sindirim ortamını sitozolden ayırmasını, ER ve Golgi vezikülleri ile ayrı peroksizomu gösteren yakın plan.',
      note: 'Tek zar, sitozolden farklı pH ve enzim bileşimi kurulmasını sağlar. ER–Golgi–lizozom–koful endomembran trafiğiyle bağlantılıdır; peroksizom ise tek zarlı olmasına rağmen bu sistemin basitçe bir devamı değildir.',
    },
    shape: { x: 445, y: 0, width: 535, height: 960, rx: 90 },
  },
  {
    key: 'cift-zarli',
    zoom: { x: 84, y: 51, scale: 1.5 },
    detail: {
      src: '/lesson-assets/sitoplazma-organeller/details/cift-zarli-organeller.jpg',
      title: 'Çift zar ve yarı özerklik',
      alt: 'Mitokondri ve kloroplastta iki sınır zarı, halkasal DNA, 70S ribozomlar ve bölünme başlangıcını gösteren yakın plan.',
      note: 'Mitokondri ve kloroplast iki sınır zarı, halkasal DNA ve 70S ribozom taşır; bölünerek çoğalabilir. Yine de proteinlerinin büyük bölümü çekirdek genlerinden geldiği için hücreden bağımsız yaşayamazlar.',
    },
    shape: { x: 950, y: 0, width: 490, height: 960, rx: 90 },
  },
]

const MARKERS = [
  { key: 'zarsiz', title: 'Zarsız', x: 120, y: 865, targetX: 245, targetY: 570, width: 190 },
  { key: 'tek-zarli', title: 'Tek zarlı', x: 600, y: 865, targetX: 725, targetY: 560, width: 235 },
  { key: 'cift-zarli', title: 'Çift zarlı', x: 1080, y: 865, targetX: 1190, targetY: 545, width: 245 },
]

export default function OrganelleMembraneGroups({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/sitoplazma-organeller/organel-zar-gruplari-v1.jpg"
      srcSet="/lesson-assets/sitoplazma-organeller/organel-zar-gruplari-v1-900.jpg 900w, /lesson-assets/sitoplazma-organeller/organel-zar-gruplari-v1.jpg 1440w"
      alt="Zarsız ribozom ve sentrozom, tek zarlı endomembran organelleri ile çift zarlı mitokondri ve kloroplastı üç bölgede karşılaştıran bilimsel levha."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
