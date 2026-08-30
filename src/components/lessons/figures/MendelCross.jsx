import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'gamet',
    zoom: { x: 17, y: 46, scale: 1.55 },
    detail: {
      src: '/lesson-assets/kalitim/details/mayoz-ayrilma.jpg',
      title: 'Ayrılma ilkesi',
      alt: 'Heterozigot eşey ana hücresinde homolog kromozomların mayozda ayrılarak her gamete yalnız bir alel gitmesini gösteren sahne.',
      note: 'Aa birey gamet oluştururken A ile a aynı gamete birlikte gitmez; homologlar ayrılır ve normal mayozda gametlerin yarısı A, yarısı a taşır. Gamet çeşidi yazmadan çaprazlamaya başlamak en sık yapılan hatadır.',
    },
    shape: { x: 0, y: 20, width: 505, height: 900, rx: 110 },
  },
  {
    key: 'punnett',
    zoom: { x: 55, y: 35, scale: 1.65 },
    detail: {
      src: '/lesson-assets/kalitim/details/punnett-olasilik.jpg',
      title: 'Punnett karesi',
      alt: 'İki heterozigot ebeveynin gametlerinin dört eş olasılıklı döllenme kutusunda birleşmesini gösteren sahne.',
      note: 'Punnett karesindeki her kutu ayrı ve eş olasılıklı döllenme olayıdır. Aa × Aa için genotip 1 AA : 2 Aa : 1 aa; tam baskınlıkta fenotip 3 baskın : 1 çekiniktir. Bu oran yalnız bu koşullarda geçerlidir.',
    },
    shape: { x: 500, y: 55, width: 530, height: 590, rx: 110 },
  },
  {
    key: 'test-caprazlama',
    zoom: { x: 84, y: 48, scale: 1.55 },
    detail: {
      src: '/lesson-assets/kalitim/details/test-caprazlamasi.jpg',
      title: 'Kontrol çaprazlaması',
      alt: 'Baskın fenotipli bilinmeyen bireyin çekinik homozigotla çaprazlanmasında iki olası sonucu gösteren sahne.',
      note: 'Baskın fenotip AA da Aa da olabilir. Bilinmeyen birey aa ile çaprazlanır: çekinik yavru çıkarsa bilinmeyen kesin Aa’dır; bütün yavrular baskınsa veri AA’yı destekler fakat az sayıda yavru yüzde yüz kesinlik sağlamaz.',
    },
    shape: { x: 1020, y: 30, width: 420, height: 900, rx: 110 },
  },
  {
    key: 'bagimsiz',
    zoom: { x: 53, y: 78, scale: 1.6 },
    detail: {
      src: '/lesson-assets/kalitim/details/bagimsiz-dagilim.jpg',
      title: 'Bağımsız dağılım',
      alt: 'Farklı kromozom çiftlerindeki iki genin mayozda bağımsız yönlenerek dört gamet çeşidi ve çarpma kuralını oluşturmasını gösteren sahne.',
      note: 'AaBb birey, genler bağımsızsa AB, Ab, aB ve ab gametlerini eşit olasılıkla üretir. İki özelliğin birlikte olasılığı çarpılır. 9:3:3:1 oranı; iki heterozigot, tam baskınlık ve bağımsız gen koşullarının ortak sonucudur.',
    },
    shape: { x: 420, y: 600, width: 640, height: 360, rx: 100 },
  },
]

const MARKERS = [
  { key: 'gamet', title: 'Gametler', x: 70, y: 865, targetX: 260, targetY: 520, width: 230 },
  { key: 'punnett', title: 'Punnett', x: 525, y: 90, targetX: 760, targetY: 365, width: 215 },
  { key: 'test-caprazlama', title: 'Kontrol', x: 1130, y: 865, targetX: 1240, targetY: 470, width: 210 },
  { key: 'bagimsiz', title: 'Bağımsız genler', x: 560, y: 865, targetX: 760, targetY: 720, width: 330 },
]

export default function MendelCross({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/kalitim/mendel-caprazlama-v1.jpg"
      srcSet="/lesson-assets/kalitim/mendel-caprazlama-v1-900.jpg 900w, /lesson-assets/kalitim/mendel-caprazlama-v1.jpg 1440w"
      alt="Heterozigot ebeveynlerin gamet üretimi, Punnett karesi, yavru oranları ve kontrol çaprazlamasını gösteren Mendel kalıtımı levhası."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
