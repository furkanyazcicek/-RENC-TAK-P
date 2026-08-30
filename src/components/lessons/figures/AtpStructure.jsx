import InteractiveIllustration from './InteractiveIllustration'

/**
 * ATP YAPISI VE ATP–ADP DÖNGÜSÜ
 *
 * ATP'nin nükleik asitlerle aynı derste verilmesinin sebebi bu görselde
 * görünüyor: ATP ==bir nükleotit türevidir==. Adenin bazı, riboz şekeri
 * ve üç fosfat. Öğrenciler ATP'yi bambaşka bir molekül sanıyor; oysa RNA
 * nükleotidiyle akrabası.
 *
 * Üstte ATP, altta ADP + serbest fosfat var ve iki satır dairesel oklarla
 * bağlı. Döngünün kapalı çizilmesi bilinçli: ATP tüketilip biten bir
 * yakıt değil, sürekli kurulup bozulan bir taşıyıcı.
 */

const REGIONS = [
  {
    key: 'adenin',
    zoom: { x: 19, y: 19, scale: 1.6 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/atp-adenin-akrabalik.jpg',
      title: 'Adenin',
      note: 'Nükleik asitlerde de bulunan organik baz. RNA’nın adenin nükleotidiyle aynı bazdır; ATP ile nükleik asitler arasındaki akrabalık buradan gelir.',
      alt: 'ATP molekülünün çift halkalı adenin bazının yakın görünümü.',
    },
    shape: { x: 85, y: 35, width: 405, height: 315, rx: 90 },
  },
  {
    key: 'riboz',
    zoom: { x: 41, y: 31, scale: 1.75 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/atp-riboz-kopru.jpg',
      title: 'Riboz',
      note: 'Beş karbonlu şeker; RNA’daki şekerle aynıdır. Adenin ile riboz birlikte adenozin adını alır — molekülün adındaki “adenozin” buradan gelir.',
      alt: 'ATP molekülündeki beş köşeli riboz şekerinin yakın görünümü.',
    },
    shape: { x: 515, y: 195, width: 230, height: 260, rx: 70 },
  },
  {
    key: 'fosfatlar',
    zoom: { x: 70, y: 24, scale: 1.5 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/atp-fosfat-itme.jpg',
      title: 'Üç fosfat',
      note: 'Arka arkaya bağlı üç fosfat grubu. Adının açılımı bu: Adenozin Trifosfat. Fosfat sayısı ikiye inerse ADP, bire inerse AMP olur.',
      alt: 'ATP molekülünde arka arkaya dizilmiş üç fosfat grubunun yakın görünümü.',
    },
    shape: { x: 775, y: 125, width: 610, height: 255, rx: 85 },
  },
  {
    key: 'yuksek-enerjili-bag',
    zoom: { x: 62, y: 66, scale: 1.55 },
    detail: {
      src: '/lesson-assets/nukleik-atp-vitamin/details/atp-hidroliz-is.jpg',
      title: '“Yüksek enerjili” bağ',
      note: 'Son fosfat koptuğunda görece çok enerji açığa çıkar. Sebebi bağın kendisinin olağandışı olması değil; yan yana duran negatif yüklü fosfatların ayrıldıklarında daha kararlı hâle geçmesidir.',
      alt: 'Son fosfat bağının kopması sırasında açığa çıkan enerjinin gösterildiği yakın görünüm.',
    },
    shape: { x: 880, y: 555, width: 320, height: 300, rx: 100 },
  },
]

const MARKERS = [
  { key: 'adenin', title: 'Adenin', x: 90, y: 385, targetX: 285, targetY: 205, width: 190 },
  { key: 'riboz', title: 'Riboz', x: 470, y: 470, targetX: 620, targetY: 385, width: 175 },
  { key: 'fosfatlar', title: 'Üç fosfat', x: 1145, y: 405, targetX: 1150, targetY: 330, width: 215 },
  { key: 'yuksek-enerjili-bag', title: '“Yüksek enerjili” bağ', x: 690, y: 45, targetX: 780, targetY: 200, width: 290 },
]

export default function AtpStructure({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/nukleik-atp-vitamin/atp-dongusu-v1.jpg"
      alt="Üstte adenin, riboz ve üç fosfattan oluşan ATP molekülü; altta son fosfatın kopmasıyla oluşan ADP, serbest fosfat ve açığa çıkan enerji."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
