import InteractiveIllustration from './InteractiveIllustration'

const zones = [
  { x: 0, y: 0, width: 768, height: 512 },
  { x: 768, y: 0, width: 768, height: 512 },
  { x: 0, y: 512, width: 768, height: 512 },
  { x: 768, y: 512, width: 768, height: 512 },
]
const markerPositions = [
  { x: 70, y: 78, targetX: 365, targetY: 275 },
  { x: 845, y: 78, targetX: 1165, targetY: 275 },
  { x: 70, y: 946, targetX: 365, targetY: 755 },
  { x: 845, y: 946, targetX: 1165, targetY: 755 },
]

function Plate({ src, alt, items, activeRegion }) {
  const regions = items.map((item, index) => ({
    ...item,
    shape: zones[index],
    zoom: { x: index % 2 ? 75 : 25, y: index < 2 ? 25 : 75, scale: 1.45 },
  }))
  const markers = items.map((item, index) => ({ key: item.key, title: item.marker, width: item.width ?? 310, ...markerPositions[index] }))
  return <InteractiveIllustration src={`/lesson-assets/uriner-sistem/${src}.jpg`} srcSet={`/lesson-assets/uriner-sistem/${src}-900.jpg 900w, /lesson-assets/uriner-sistem/${src}.jpg 1536w`} alt={alt} activeRegion={activeRegion} regions={regions} markers={markers} />
}

export function UrinaryAnatomyPlate({ activeRegion = null }) {
  const items = [
    { key: 'bobrek-kesiti', marker: 'Korteks · medulla · pelvis', width: 340, detail: { src: '/lesson-assets/uriner-sistem/details/bobrek-kesiti.jpg', title: 'Süzüntüyü korteksten pelvise taşı', alt: 'Böbrek kesitinde kortikal nefronlardan medulla piramitleri, papillalar, kaliksler ve pelvise akış.', note: 'Renal cisimcikler kortekste başlar; Henle ve toplama kanalları medullaya uzanır. Son idrar papilla → küçük/büyük kaliks → pelvis yönünde toplanır.' } },
    { key: 'idrar-yolu', marker: 'Üreter · mesane · üretra', width: 335, detail: { src: '/lesson-assets/uriner-sistem/details/idrar-yolu.jpg', title: 'Peristaltizmle taşı, kasla depola ve boşalt', alt: 'Üreter peristaltizmi, mesaneye eğik giriş, detrüsor kası ve üretral sfinkterler.', note: 'Üreter düz kas dalgalarıyla idrarı taşır; eğik giriş geri kaçışı sınırlar. Detrüsor boşaltmada kasılır, iç ve dış sfinkter çıkışı düzenler.' } },
    { key: 'renal-kan', marker: 'Renal arter · iki kılcal ağ', width: 350, detail: { src: '/lesson-assets/uriner-sistem/details/renal-kanlanma.jpg', title: 'Yüksek basınçta süz, düşük basınçta geri al', alt: 'Renal arterden afferent, glomerulus, efferent, peritübüler-vasa recta ve renal vene kan yolu.', note: 'Afferent arteriol glomerulusa, efferent arteriol peritübüler kılcal veya vasa rectaya gider. İlk ağ süzmeye, ikinci ağ geri emilim ve salgılamaya uygundur.' } },
    { key: 'diger-organlar', marker: 'Akciğer · deri · karaciğer', width: 345, detail: { src: '/lesson-assets/uriner-sistem/details/diger-bosaltim.jpg', title: 'Metabolik atıkları farklı çıkışlara yönelt', alt: 'Karaciğer, akciğer, deri ve böbreğin boşaltıma katkıları ile bağırsak dışkılamasının ayrımı.', note: 'Karaciğer amonyağı üreye çevirir; akciğer CO₂ ve su, deri su–tuz atar. Bağırsaktan sindirilmemiş besin çıkarılması ise metabolik boşaltımla aynı değildir.' } },
  ]
  return <Plate src="uriner-anatomi-v1" alt="Böbrek kesiti, idrar yolları, renal kanlanma ve boşaltıma katkı veren organları gösteren üriner sistem levhası." items={items} activeRegion={activeRegion} />
}

export function NephronStructurePlate({ activeRegion = null }) {
  const items = [
    { key: 'renal-cisimcik', marker: 'Glomerulus · Bowman', width: 300, detail: { src: '/lesson-assets/uriner-sistem/details/renal-cisimcik.jpg', title: 'Damar kutbunda basıncı, tüp kutbunda akışı kur', alt: 'Geniş afferent ve dar efferent arteriol, glomerulus, Bowman boşluğu ve tüp kutbu.', note: 'Afferent giriş ve dirençli efferent çıkış glomerulus basıncını destekler. Bariyeri geçen sıvı Bowman boşluğundan proksimal tüpe ilerler.' } },
    { key: 'proksimal', marker: 'Proksimal tüp · toplu geri alım', width: 380, detail: { src: '/lesson-assets/uriner-sistem/details/proksimal-tup.jpg', title: 'Mikrovillus ve ATP ile yararlıyı kana döndür', alt: 'Fırçamsı kenarlı, mitokondrili proksimal tüp hücrelerinden kılcala madde ve su geçişi.', note: 'Geniş mikrovillus yüzeyi ve çok mitokondri taşıma kapasitesini yükseltir. Glikoz–amino asit, HCO₃⁻, Na⁺ ve suyun büyük bölümü burada geri kazanılır.' } },
    { key: 'henle', marker: 'İnen su · çıkan tuz', width: 300, detail: { src: '/lesson-assets/uriner-sistem/details/henle-kulpu.jpg', title: 'Zıt akımla medulla gradyanını büyüt', alt: 'Henle inen kolundan su, çıkan kolundan tuz çıkışı ve paralel vasa recta akışı.', note: 'İnen kol suya geçirgen; çıkan kol suya geçirimsiz ve NaCl çıkarır. Zıt yönlü akış, medullada derine indikçe güçlenen ozmotik gradyan kurar.' } },
    { key: 'distal-toplama', marker: 'Distal · toplama · ince ayar', width: 360, detail: { src: '/lesson-assets/uriner-sistem/details/distal-toplama.jpg', title: 'Na⁺, K⁺, su ve pH için son kararı ver', alt: 'Makula densa, distal tüp, principal-interkale hücreler ve toplama kanalı.', note: 'Distal tüp glomerulusa makula densa ile geri bildirim verir. Principal hücreler Na⁺–K⁺–su, interkale hücreler H⁺–HCO₃⁻ dengesini ayarlar.' } },
  ]
  return <Plate src="nefron-yapi-v1" alt="Renal cisimcik, proksimal tüp, Henle kulpu ve distal-toplama kanalını gösteren nefron yapı levhası." items={items} activeRegion={activeRegion} />
}

export function GlomerularFiltrationPlate({ activeRegion = null }) {
  const items = [
    { key: 'bariyer', marker: 'Endotel · bazal zar · podosit', width: 375, detail: { src: '/lesson-assets/uriner-sistem/details/filtrasyon-bariyeri.jpg', title: 'Küçüğü geçir, hücre ve büyük proteini tut', alt: 'Pencereli endotel, negatif bazal membran ve podosit yarıklarından oluşan filtrasyon bariyeri.', note: 'Endotel kan hücrelerini, bazal membran ve yarık diyaframı büyük proteinleri sınırlar. Su ve küçük çözünenler Bowman boşluğuna geçebilir.' } },
    { key: 'basinc', marker: 'Net filtrasyon basıncı', width: 320, detail: { src: '/lesson-assets/uriner-sistem/details/basinc-dengesi.jpg', title: 'Dışarı iten kuvvetten iki karşı kuvveti çıkar', alt: 'Glomerulus hidrostatik basıncı ile plazma ozmotik ve Bowman kapsülü basınçlarının karşılaştırması.', note: 'Glomerulus hidrostatik basıncı süzmeyi destekler; plazma proteinlerinin ozmotik çekimi ve Bowman sıvı basıncı karşı koyar. Tıkanma karşı basıncı artırabilir.' } },
    { key: 'sivi', marker: 'Plazma · süzüntü · idrar', width: 350, detail: { src: '/lesson-assets/uriner-sistem/details/sivi-karsilastirma.jpg', title: 'İlk süzüntüyü son idrarla karıştırma', alt: 'Kan plazması, hücresiz-proteinsiz ilk süzüntü ve geri işlenmiş yoğun son idrarın karşılaştırması.', note: 'İlk süzüntü küçük maddeler açısından plazmaya benzer; hücre ve büyük protein taşımaz. Glikoz sonradan geri alınır, üre ve su oranı tüp işlemleriyle değişir.' } },
    { key: 'gfr', marker: 'Makula densa · GFR ayarı', width: 340, detail: { src: '/lesson-assets/uriner-sistem/details/gfr-otoregulasyon.jpg', title: 'Tüp akışını damar tonusuna geri bildir', alt: 'Makula densanın NaCl algısı, afferent arteriol tonusu ve jukstaglomerüler renin granülleri.', note: 'Makula densa distal tüpteki NaCl sunumunu algılar. Afferent tonus ve renin yanıtı, kan basıncı değişirken GFR ile hacim dengesini korumaya yardım eder.' } },
  ]
  return <Plate src="glomeruler-suzulme-v1" alt="Glomerüler bariyer, filtrasyon basınçları, sıvı bileşimi ve GFR geri bildirimini gösteren süzülme levhası." items={items} activeRegion={activeRegion} />
}

export function NephronProcessingPlate({ activeRegion = null }) {
  const items = [
    { key: 'geri-emilim', marker: 'Proksimal geri emilim', width: 310, detail: { src: '/lesson-assets/uriner-sistem/details/proksimal-geri-emilim.jpg', title: 'Na⁺ gradyanıyla besini al, suyu peşinden götür', alt: 'Proksimal hücrede Na-K pompası, Na-glikoz eş taşıması ve kılcala su-bikarbonat geçişi.', note: 'Bazolateral Na⁺/K⁺ pompası gradyanı kurar; apikal eş taşıma glikoz ve amino asidi hücreye alır. Su ve HCO₃⁻ dâhil büyük bir bölüm kana döner.' } },
    { key: 'karsi-akim', marker: 'Karşı akım · vasa recta', width: 330, detail: { src: '/lesson-assets/uriner-sistem/details/karsi-akim.jpg', title: 'Gradyanı kur ve kanla yıkamadan koru', alt: 'Henle kollarında su-tuz hareketi, üre katkısı ve vasa rectanın karşı akım değişimi.', note: 'Çıkan kol tuz çıkararak, inen kol su kaybederek gradyanı çoğaltır. Üre iç medullaya katkı verir; yavaş vasa recta akışı gradyanı koruyarak geri emileni taşır.' } },
    { key: 'salgilama', marker: 'H⁺ · K⁺ · ilaç salgısı', width: 320, detail: { src: '/lesson-assets/uriner-sistem/details/distal-salgilama.jpg', title: 'Kanda kalanı seçerek tüpe ekle', alt: 'Distal nefronda hidrojen, potasyum, amonyum ve ilaçların kandan tüpe salgılanması.', note: 'H⁺, K⁺, NH₄⁺, ilaç ve organik asit/bazlar peritübüler kandan tüpe aktarılabilir. HCO₃⁻ geri kazanımı pH dengesini destekler.' } },
    { key: 'esik', marker: 'Taşıma eşiği · glikozüri', width: 345, detail: { src: '/lesson-assets/uriner-sistem/details/esik-glikoz.jpg', title: 'Taşıyıcı doygunluğunda glikozu ve suyu kaybet', alt: 'Normal yükte tüm glikozun geri alındığı, yüksek yükte taşıyıcıların doyduğu iki tüp karşılaştırması.', note: 'Filtre edilen glikoz yükü taşıma maksimumunu aşarsa fazlası tüpte kalır. Glikoz osmotik olarak su tutar; glikozüri ve idrar hacmi artabilir.' } },
  ]
  return <Plate src="nefron-tup-v1" alt="Proksimal geri emilim, karşı akım, distal salgılama ve glikoz taşıma eşiğini gösteren tüp işleme levhası." items={items} activeRegion={activeRegion} />
}

export function KidneyHomeostasisPlate({ activeRegion = null }) {
  const items = [
    { key: 'adh', marker: 'ADH · aquaporin · susama', width: 360, detail: { src: '/lesson-assets/uriner-sistem/details/adh-susama.jpg', title: 'Ozmolarite yükselince su kapılarını aç', alt: 'Hipotalamus-arka hipofiz sinyali, toplama kanalına aquaporin eklenmesi ve yoğun idrar.', note: 'Yüksek plazma ozmolaritesi susama ve ADH’yi artırır. Aquaporin-2 kanalları apikal zara eklenir; su kana döner, idrar az ve yoğun olur.' } },
    { key: 'raas', marker: 'Renin · anjiyotensin · aldosteron', width: 405, detail: { src: '/lesson-assets/uriner-sistem/details/raas-aldosteron.jpg', title: 'Düşük basınçta damarı sık, Na⁺ ve suyu tut', alt: 'Renin-anjiyotensin yolu, adrenal aldosteron ve distal sodyum-potasyum hareketi.', note: 'Düşük renal perfüzyon renini başlatır. Anjiyotensin II damar/susama/ADH yanıtını, aldosteron ise distal Na⁺ geri emilimi ve K⁺ salgısını artırır.' } },
    { key: 'endokrin-ph', marker: 'pH · EPO · D vitamini', width: 320, detail: { src: '/lesson-assets/uriner-sistem/details/ph-epo-vitamin.jpg', title: 'Asidi at, alyuvarı ve kalsiyumu destekle', alt: 'Böbreğin H iyonu-bikarbonat ayarı, EPO ile kemik iliği ve D vitaminiyle bağırsak bağlantısı.', note: 'Böbrek H⁺ atıp HCO₃⁻ korur; hipokside EPO ile kemik iliğini uyarır. D vitaminini etkinleştirerek bağırsak Ca²⁺ emilimine katkı verir.' } },
    { key: 'klinik', marker: 'Taş · enfeksiyon · diyaliz', width: 340, detail: { src: '/lesson-assets/uriner-sistem/details/tas-enfeksiyon-diyaliz.jpg', title: 'Tıkanmayı, enfeksiyonu ve nefron kaybını ayır', alt: 'Üreter taşı, yükselen enfeksiyon, kronik hasarlı böbrek ve hemodiyaliz filtresi.', note: 'Taş akışı tıkayıp karşı basıncı, enfeksiyon doku hasarını artırabilir. İleri nefron kaybında diyaliz küçük atık ve fazla suyu uzaklaştırır; hücre/protein kanda kalır.' } },
  ]
  return <Plate src="bobrek-homeostazi-v1" alt="ADH, RAAS, böbreğin pH-endokrin görevleri ve temel üriner hastalıkları gösteren homeostazi levhası." items={items} activeRegion={activeRegion} />
}
