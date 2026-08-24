import InteractiveIllustration from './InteractiveIllustration'

function detail(root, file, title, alt, note, zoom) {
  return {
    src: `${root}/details/${file}.jpg`,
    srcSet: `${root}/details/${file}-900.jpg 900w, ${root}/details/${file}.jpg 1200w`,
    title,
    alt,
    note,
    zoom,
  }
}

const matterRoot = '/lesson-assets/fizik/madde-ve-ozellikleri'

const matterStateRegions = [
  {
    key: 'kati',
    shape: { x: 0, y: 0, width: 512, height: 1024 },
    zoom: { x: 17, y: 55, scale: 1.55 },
    detail: detail(matterRoot, 'kati', 'Katı: düzenli ve sık yapı', 'Düzenli örgü içinde yakın duran katı taneciklerinin odaklanmış görünümü.', 'Tanecikler sabit noktalarda donmuş değildir; güçlü komşuluk düzenini koruyarak denge konumları çevresinde titreşir.', { x: 17, y: 55, scale: 1.85 }),
  },
  {
    key: 'sivi',
    shape: { x: 512, y: 0, width: 512, height: 1024 },
    zoom: { x: 50, y: 55, scale: 1.55 },
    detail: detail(matterRoot, 'sivi', 'Sıvı: yakın ama akışkan yapı', 'Birbirine yakın fakat düzensiz sıvı taneciklerinin odaklanmış görünümü.', 'Tanecikler temasını büyük ölçüde korur; buna karşılık birbirlerinin üzerinden kayabildikleri için sıvı kabın biçimini alır.', { x: 50, y: 56, scale: 1.85 }),
  },
  {
    key: 'gaz',
    shape: { x: 1024, y: 0, width: 512, height: 1024 },
    zoom: { x: 83, y: 52, scale: 1.55 },
    detail: detail(matterRoot, 'gaz', 'Gaz: seyrek ve serbest yapı', 'Kabın hacmine seyrek dağılmış gaz taneciklerinin odaklanmış görünümü.', 'Tanecikler arası ortalama uzaklık büyüktür; hızlı ve düzensiz hareket kabın tamamına yayılmayı ve sıkıştırılabilirliği açıklar.', { x: 83, y: 52, scale: 1.85 }),
  },
]

const liquidRegions = [
  {
    key: 'kilcal-boru',
    shape: { x: 0, y: 0, width: 700, height: 1024 },
    zoom: { x: 25, y: 53, scale: 1.55 },
    detail: detail(matterRoot, 'kilcal-boru', 'Kılcal yükselme', 'Dar cam borudaki içbükey menisküs ve yükselen sıvı sütununun yakın görünümü.', 'Adezyon sıvıyı cam duvara çeker; kohezyon ve yüzey gerilimi dar kanaldaki sıvı sütununu birlikte taşır.', { x: 25, y: 52, scale: 1.8 }),
  },
  {
    key: 'yaprak-cam',
    shape: { x: 700, y: 0, width: 836, height: 660 },
    zoom: { x: 76, y: 34, scale: 1.55 },
    detail: detail(matterRoot, 'yaprak-ve-cam', 'Aynı damla, farklı yüzey', 'Mumsu yaprakta küreselleşen ve camda yayılan su damlasının karşılaştırmalı yakın görünümü.', 'Yaprağın düşük ıslanabilir yüzeyinde kohezyon baskın görünür; temiz camda adezyon arttığında damla yayılır.', { x: 76, y: 34, scale: 1.75 }),
  },
  {
    key: 'su-bocegi',
    shape: { x: 380, y: 560, width: 780, height: 464 },
    zoom: { x: 52, y: 82, scale: 1.65 },
    detail: detail(matterRoot, 'su-bocegi', 'Yüzey gerilimi ve su böceği', 'Su yüzeyinde ayaklarının çevresinde çöküntüler oluşturan böceğin yakın görünümü.', 'Ayağın bastırdığı yüzey eğilir; yüzey gerilimi boyunca oluşan kuvvetlerin yukarı bileşenleri ağırlığın dengelenmesine katkı verir.', { x: 52, y: 82, scale: 2 }),
  },
]

const buoyancyRoot = '/lesson-assets/fizik/kaldirma-kuvveti'
const buoyancyRegions = [
  {
    key: 'yuzen-blok', shape: { x: 120, y: 100, width: 530, height: 470 }, zoom: { x: 25, y: 32, scale: 1.6 },
    detail: detail(buoyancyRoot, 'yuzen-blok', 'Yüzen blok', 'Sıvı yüzeyinde kısmen batmış mantar bloğun yakın görünümü.', 'Denge durumunda kaldırma kuvveti ağırlığa eşittir; batan hacim, yer değiştiren sıvının ağırlığını tam bu değere getirir.', { x: 25, y: 32, scale: 1.9 }),
  },
  {
    key: 'askidaki-kapsul', shape: { x: 500, y: 280, width: 500, height: 390 }, zoom: { x: 52, y: 48, scale: 1.7 },
    detail: detail(buoyancyRoot, 'askidaki-kapsul', 'Askıda kalan kapsül', 'Sıvının içinde hiçbir yüzeye temas etmeden dengede duran kapsülün yakın görünümü.', 'Tam batmış cisim için ortalama özkütle sıvının özkütlesine eşitse kaldırma kuvveti ağırlığı dengeler ve cisim askıda kalır.', { x: 52, y: 49, scale: 2 }),
  },
  {
    key: 'batan-kure', shape: { x: 760, y: 540, width: 390, height: 420 }, zoom: { x: 65, y: 75, scale: 1.65 },
    detail: detail(buoyancyRoot, 'batan-kure', 'Batan metal küre', 'Kabın tabanına ulaşmış metal kürenin yakın görünümü.', 'Küre sıvı içinde ilerlerken ağırlık kaldırma kuvvetinden büyüktür. Tabana değdiğinde dengeye normal kuvvet de katılır.', { x: 65, y: 75, scale: 2 }),
  },
  {
    key: 'tasirma-kabi', shape: { x: 1080, y: 300, width: 456, height: 650 }, zoom: { x: 86, y: 62, scale: 1.65 },
    detail: detail(buoyancyRoot, 'tasirma-kabi', 'Taşırma kabı', 'Taşırma ağzından ölçü kabına akan sıvının yakın görünümü.', 'Toplanan sıvının hacmi cismin batan hacmine, ağırlığı ise Arşimet ilkesine göre cisme etki eden kaldırma kuvvetine eşittir.', { x: 86, y: 62, scale: 2 }),
  },
]

const pressureRoot = '/lesson-assets/fizik/basinc'
const pressureRegions = [
  {
    key: 'temas-alani', shape: { x: 0, y: 0, width: 510, height: 1024 }, zoom: { x: 17, y: 52, scale: 1.45 },
    detail: detail(pressureRoot, 'temas-alani', 'Temas alanı ve katı basıncı', 'Sivri uç ile geniş kar ayakkabısının zemindeki etkisini karşılaştıran yakın görünüm.', 'Aynı dik kuvvet küçük temas alanında daha büyük basınç oluşturur. Geniş taban kuvveti daha büyük alana dağıtır.', { x: 17, y: 52, scale: 1.7 }),
  },
  {
    key: 'sivi-sutunu', shape: { x: 470, y: 0, width: 430, height: 1024 }, zoom: { x: 46, y: 50, scale: 1.55 },
    detail: detail(pressureRoot, 'sivi-sutunu', 'Derinlikle artan sıvı basıncı', 'Farklı derinliklerde esneyen zarları bulunan sıvı kabının yakın görünümü.', 'Aynı sıvıda daha derindeki noktanın üzerindeki sıvı sütunu daha büyüktür; bu nedenle basınç ve zarın esnemesi artar.', { x: 46, y: 50, scale: 1.85 }),
  },
  {
    key: 'barometre', shape: { x: 870, y: 0, width: 260, height: 1024 }, zoom: { x: 65, y: 50, scale: 1.65 },
    detail: detail(pressureRoot, 'barometre', 'Atmosfer basıncı ve barometre', 'Kapalı tüpteki sıvı sütununu gösteren barometrenin yakın görünümü.', 'Haznedeki yüzeye etki eden atmosfer basıncı, tüpteki sıvı sütununun ağırlığıyla dengelenir; sütun yüksekliği basıncı ölçer.', { x: 65, y: 50, scale: 2 }),
  },
  {
    key: 'hidrolik', shape: { x: 1080, y: 0, width: 456, height: 1024 }, zoom: { x: 84, y: 53, scale: 1.55 },
    detail: detail(pressureRoot, 'hidrolik-duzenek', 'Hidrolik kuvvet kazancı', 'Küçük ve büyük pistonları bağlı hidrolik düzeneğin yakın görünümü.', 'Kapalı sıvıya verilen basınç değişimi her noktaya iletilir. Büyük piston alanı daha büyük kuvvet üretir; karşılığında daha kısa yol alır.', { x: 84, y: 53, scale: 1.85 }),
  },
]

function Atlas({ root, file, alt, regions, activeRegion }) {
  return (
    <InteractiveIllustration
      src={`${root}/${file}.jpg`}
      srcSet={`${root}/${file}-900.jpg 900w, ${root}/${file}.jpg 1440w`}
      alt={alt}
      activeRegion={activeRegion}
      regions={regions}
      width={1440}
      height={960}
    />
  )
}

export function MatterStatesPhysicsAtlas({ activeRegion }) {
  return <Atlas root={matterRoot} file="maddenin-halleri" alt="Katı, sıvı ve gaz tanecik düzenlerini karşılaştıran bilimsel atlas." regions={matterStateRegions} activeRegion={activeRegion} />
}

export function LiquidInteractionsPhysicsAtlas({ activeRegion }) {
  return <Atlas root={matterRoot} file="sivi-etkilesimleri" alt="Kılcallık, ıslanma ve yüzey gerilimini gösteren bilimsel atlas." regions={liquidRegions} activeRegion={activeRegion} />
}

export function BuoyancyPhysicsAtlas({ activeRegion }) {
  return <Atlas root={buoyancyRoot} file="arsimet-atlasi" alt="Yüzen, askıda kalan ve batan cisimlerle taşırma kabını gösteren Arşimet atlası." regions={buoyancyRegions} activeRegion={activeRegion} />
}

export function PressurePhysicsAtlas({ activeRegion }) {
  return <Atlas root={pressureRoot} file="basinc-atlasi" alt="Katı, sıvı, atmosfer ve hidrolik basıncı karşılaştıran bilimsel atlas." regions={pressureRegions} activeRegion={activeRegion} />
}
