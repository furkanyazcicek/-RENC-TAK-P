import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'semboller',
    zoom: { x: 25, y: 26, scale: 1.5 },
    detail: {
      src: '/lesson-assets/kalitim/details/soyagaci-semboller.jpg',
      title: 'Soy ağacının dili',
      alt: 'Üç kuşaklı soy ağacında kadın, erkek, eş, kardeş, etkilenmiş ve taşıyıcı gösterimlerinin aile ilişkileriyle eşleşmesini gösteren sahne.',
      note: 'Kare erkek, daire kadın; dolu şekil özelliği gösteren bireydir. Yatay çizgi eşleri, aşağı inen çizgi çocukları, ortak yatay kardeş çizgisi aynı ebeveynleri bağlar. Önce ilişkileri doğru oku, sonra genotip yaz.',
    },
    shape: { x: 0, y: 0, width: 760, height: 510, rx: 90 },
  },
  {
    key: 'otozomal-cekik',
    zoom: { x: 76, y: 25, scale: 1.5 },
    detail: {
      src: '/lesson-assets/kalitim/details/otozomal-cekik.jpg',
      title: 'Otozomal çekinik ipucu',
      alt: 'Etkilenmemiş iki taşıyıcı ebeveynden çekinik homozigot etkilenmiş çocuk doğmasını ve iki cinsiyette eş olasılığı gösteren sahne.',
      note: 'Etkilenmemiş iki ebeveynden etkilenmiş çocuk doğabiliyorsa özellik çekinik kalıtıma güçlü adaydır; ebeveynler taşıyıcı olmalıdır. Otozomal özelliklerde kadın ve erkek aynı genotip kurallarına tabidir.',
    },
    shape: { x: 750, y: 0, width: 690, height: 510, rx: 90 },
  },
  {
    key: 'x-bagli',
    zoom: { x: 24, y: 76, scale: 1.5 },
    detail: {
      src: '/lesson-assets/kalitim/details/x-bagli-aktarim.jpg',
      title: 'X’e bağlı çekinik aktarım',
      alt: 'Taşıyıcı annenin etkilenmiş X kromozomunu oğluna aktarabilmesini ve babanın oğluna X değil Y vermesini gösteren sahne.',
      note: 'Oğul X’ini anneden, Y’sini babadan alır; bu nedenle X’e bağlı bir alel babadan oğula geçmez. Erkekte tek X bulunduğundan çekinik alel tek kopyayla fenotipte görülebilir. Erkeklerde sık görülmesi tek başına kesin kanıt değildir.',
    },
    shape: { x: 0, y: 490, width: 760, height: 470, rx: 90 },
  },
  {
    key: 'tasiyici',
    zoom: { x: 76, y: 76, scale: 1.5 },
    detail: {
      src: '/lesson-assets/kalitim/details/tasiyici-cikarim.jpg',
      title: 'Zorunlu taşıyıcı çıkarımı',
      alt: 'X’e bağlı çekinik özellikte etkilenmiş babanın etkilenmiş X kromozomunu bütün kızlarına, Y kromozomunu oğullarına vermesini gösteren sahne.',
      note: 'Etkilenmiş baba X üzerindeki aleli bütün kızlarına verir; oğullarına veremez. Anne homozigot normalse kızların hepsi fenotipçe normal fakat zorunlu taşıyıcıdır. Soy ağacında önce kesin genotipleri sabitle.',
    },
    shape: { x: 750, y: 490, width: 690, height: 470, rx: 90 },
  },
]

const MARKERS = [
  { key: 'semboller', title: 'Semboller', x: 70, y: 90, targetX: 360, targetY: 250, width: 240 },
  { key: 'otozomal-cekik', title: 'Otozomal çekinik', x: 930, y: 90, targetX: 1100, targetY: 275, width: 340 },
  { key: 'x-bagli', title: 'X’e bağlı', x: 70, y: 865, targetX: 360, targetY: 700, width: 225 },
  { key: 'tasiyici', title: 'Taşıyıcı çıkarımı', x: 920, y: 865, targetX: 1110, targetY: 700, width: 340 },
]

export default function PedigreeSexLinked({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/kalitim/soyagaci-xbagli-v1.jpg"
      srcSet="/lesson-assets/kalitim/soyagaci-xbagli-v1-900.jpg 900w, /lesson-assets/kalitim/soyagaci-xbagli-v1.jpg 1440w"
      alt="Soy ağacı sembolleri, otozomal çekinik kalıtım ve X’e bağlı alellerin kuşaklar arası aktarımını karşılaştıran levha."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
