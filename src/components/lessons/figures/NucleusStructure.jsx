import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'cekirdek-zari',
    zoom: { x: 30, y: 28, scale: 1.65 },
    detail: {
      src: '/lesson-assets/cekirdek-hucre-tipleri/details/nuclear-envelope-er.jpg',
      title: 'Çift katlı çekirdek zarı',
      alt: 'Çift katlı çekirdek zarı ile granüllü endoplazmik retikulumun zar ve boşluk bakımından kesintisiz devamlılığını gösteren sahne.',
      note: 'Dış çekirdek zarı granüllü ER ile fiziksel olarak devam eder; iki zar arasındaki boşluk da ER lümenine açılır. Böylece DNA korunurken çekirdek, hücrenin iç zar sisteminden kopuk kalmaz.',
    },
    shape: { type: 'ellipse', cx: 525, cy: 505, rx: 520, ry: 455 },
  },
  {
    key: 'por',
    zoom: { x: 57, y: 22, scale: 1.9 },
    detail: {
      src: '/lesson-assets/cekirdek-hucre-tipleri/details/nuclear-pore-traffic.jpg',
      title: 'Seçici por trafiği',
      alt: 'mRNA ve ribozom alt birimlerinin çekirdekten çıkışı ile çekirdek proteinlerinin taşıma reseptörüyle içeri girişini gösteren por kompleksi.',
      note: 'Por basit bir delik değil, seçici bir kapıdır. Olgun mRNA ve ribozom alt birimleri dışarı çıkar; çekirdekte görev yapacak proteinler içeri alınır. DNA ise çekirdekte kalır.',
    },
    shape: [
      { type: 'circle', cx: 455, cy: 120, r: 70 },
      { type: 'circle', cx: 670, cy: 125, r: 70 },
      { type: 'circle', cx: 275, cy: 310, r: 70 },
      { type: 'circle', cx: 915, cy: 285, r: 70 },
      { type: 'circle', cx: 215, cy: 610, r: 70 },
      { type: 'circle', cx: 750, cy: 780, r: 70 },
    ],
  },
  {
    key: 'cekirdekcik',
    zoom: { x: 31, y: 50, scale: 1.8 },
    detail: {
      src: '/lesson-assets/cekirdek-hucre-tipleri/details/nucleolus-biogenesis.jpg',
      title: 'Çekirdekçik',
      alt: 'rRNA üretimi, ribozom proteinlerinin gelişi, küçük ve büyük ribozom alt birimlerinin çekirdekçikte kurulup porlardan çıkışını gösteren sahne.',
      note: 'Çekirdekçik tamamlanmış ribozomla protein sentezlemez. rRNA üretir, sitoplazmadan gelen proteinlerle küçük ve büyük alt birimleri kurar; alt birimler ayrı ayrı sitoplazmaya çıkar.',
    },
    shape: { type: 'circle', cx: 405, cy: 485, r: 210 },
  },
  {
    key: 'kromatin',
    zoom: { x: 55, y: 46, scale: 1.55 },
    detail: {
      src: '/lesson-assets/cekirdek-hucre-tipleri/details/chromatin-transcription.jpg',
      title: 'Okunabilir kromatin',
      alt: 'Gevşek kromatin üzerinde DNA’nın açılarak mRNA üretildiğini, sıkı paketli bölgeye enzimin ulaşamadığını gösteren karşılaştırma.',
      note: 'DNA’nın tamamı aynı anda aynı açıklıkta değildir. Gereken genin bulunduğu bölge gevşer, enzimler DNA’ya ulaşır ve mRNA üretir; sıkı paketli bölge ise geçici olarak sessiz kalır.',
    },
    shape: { x: 230, y: 165, width: 750, height: 650, rx: 250 },
  },
  {
    key: 'kromozom',
    zoom: { x: 88, y: 52, scale: 1.9 },
    detail: {
      src: '/lesson-assets/cekirdek-hucre-tipleri/details/chromosome-segregation.jpg',
      title: 'Kromozom',
      alt: 'Gevşek DNA’nın bölünmede dolaşma riskini ve yoğun paketlenmiş kardeş kromatitlerin iğ iplikleriyle eşit ayrılmasını gösteren sahne.',
      note: 'Kromozom hâlinin amacı bilgi okumak değil, metrelerce DNA’yı dolaştırmadan taşımaktır. Yoğun paketleme, kardeş DNA kopyalarının iğ iplikleriyle iki hücreye düzenli paylaştırılmasını sağlar.',
    },
    shape: { type: 'ellipse', cx: 1240, cy: 520, rx: 185, ry: 285 },
  },
]

const MARKERS = [
  { key: 'cekirdek-zari', title: 'Çift zar + ER', x: 170, y: 855, targetX: 300, targetY: 720, width: 260 },
  { key: 'por', title: 'Por', x: 655, y: 80, targetX: 670, targetY: 135, width: 170 },
  { key: 'cekirdekcik', title: 'Çekirdekçik', x: 280, y: 150, targetX: 405, targetY: 400, width: 260 },
  { key: 'kromatin', title: 'Kromatin', x: 720, y: 855, targetX: 760, targetY: 610, width: 225 },
  { key: 'kromozom', title: 'Kromozom', x: 1190, y: 855, targetX: 1240, targetY: 620, width: 240 },
]

export default function NucleusStructure({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/cekirdek-hucre-tipleri/nucleus-anatomy-v1.jpg"
      srcSet="/lesson-assets/cekirdek-hucre-tipleri/nucleus-anatomy-v1-900.jpg 900w, /lesson-assets/cekirdek-hucre-tipleri/nucleus-anatomy-v1.jpg 1440w"
      alt="Çift çekirdek zarı, por kompleksleri, granüllü ER devamlılığı, çekirdekçik, gevşek kromatin ve yoğun kromozom hâlini gösteren çekirdek kesiti."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
