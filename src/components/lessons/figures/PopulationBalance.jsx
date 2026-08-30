import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'buyume',
    zoom: { x: 24, y: 24, scale: 1.48 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/populasyon-buyume.jpg',
      title: 'J ve S büyüme modelleri',
      alt: 'Sınırsız koşullarda J biçimli, çevre direnci altında taşıma kapasitesine yaklaşan S biçimli popülasyon büyümesini gösteren sahne.',
      note: 'Kaynakların sınırsız varsayıldığı üstel büyüme J biçimlidir. Gerçek ortamda kaynaklar sınırlanır, çevre direnci artar ve büyüme yavaşlayarak taşıma kapasitesi çevresinde S biçimli bir seyir gösterir.',
    },
    shape: { x: 0, y: 0, width: 760, height: 510, rx: 90 },
  },
  {
    key: 'kapasite',
    zoom: { x: 76, y: 24, scale: 1.48 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/tasima-kapasitesi.jpg',
      title: 'Taşıma kapasitesi bir dengedir',
      alt: 'Geyik popülasyonunun kaynak miktarına bağlı olarak taşıma kapasitesinin çevresinde artıp azalmasını gösteren zaman dizisi.',
      note: 'Taşıma kapasitesi, ortamın uzun süre destekleyebileceği yaklaşık en büyük popülasyondur; değişmez bir sayı değildir. Yağış, besin, barınak, hastalık ve avcılar değiştikçe kapasite de değişebilir.',
    },
    shape: { x: 760, y: 0, width: 776, height: 510, rx: 90 },
  },
  {
    key: 'faktorler',
    zoom: { x: 24, y: 76, scale: 1.48 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/sinirlayici-faktorler.jpg',
      title: 'Yoğunluğa bağlı mı?',
      alt: 'Rekabet, hastalık ve avcılığın kalabalıkta artmasını; yangın, don ve selin yoğunluktan bağımsız etkisini karşılaştıran sahne.',
      note: 'Rekabet, bulaşıcı hastalık ve avcılığın etkisi yoğunluk arttıkça genellikle güçlenir. Yangın, sel ve aşırı don gibi olaylar ise popülasyonun kalabalık ya da seyrek olmasına bağlı olmadan etkileyebilir.',
    },
    shape: { x: 0, y: 510, width: 760, height: 514, rx: 90 },
  },
  {
    key: 'suksesyon',
    zoom: { x: 76, y: 76, scale: 1.48 },
    detail: {
      src: '/lesson-assets/ekosistem-ekolojisi/details/suksesyon.jpg',
      title: 'Süksesyon ve toprağın rolü',
      alt: 'Çıplak kayadan başlayan birincil süksesyon ile yangın sonrası toprağın korunduğu ikincil süksesyonu paralel gösteren sahne.',
      note: 'Birincil süksesyon topraksız yüzeyde öncü türlerle başlar ve yavaştır. İkincil süksesyonda yangın gibi bozulmadan sonra toprak, tohum ve kökler kaldığı için toparlanma daha hızlıdır.',
    },
    shape: { x: 760, y: 510, width: 776, height: 514, rx: 90 },
  },
]

const MARKERS = [
  { key: 'buyume', title: 'Büyüme', x: 70, y: 82, targetX: 375, targetY: 260, width: 220 },
  { key: 'kapasite', title: 'Kapasite', x: 865, y: 82, targetX: 1160, targetY: 270, width: 230 },
  { key: 'faktorler', title: 'Sınırlayıcılar', x: 70, y: 945, targetX: 370, targetY: 750, width: 295 },
  { key: 'suksesyon', title: 'Süksesyon', x: 865, y: 945, targetX: 1160, targetY: 770, width: 255 },
]

export default function PopulationBalance({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/ekosistem-ekolojisi/populasyon-dengesi-v1.jpg"
      srcSet="/lesson-assets/ekosistem-ekolojisi/populasyon-dengesi-v1-900.jpg 900w, /lesson-assets/ekosistem-ekolojisi/populasyon-dengesi-v1.jpg 1536w"
      alt="Popülasyon büyümesi, taşıma kapasitesi, sınırlayıcı faktörler ve ekolojik süksesyon levhası."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1536}
      height={1024}
    />
  )
}
