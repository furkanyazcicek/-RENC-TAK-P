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
  const markers = items.map((item, index) => ({
    key: item.key,
    title: item.marker,
    width: item.width ?? 280,
    ...markerPositions[index],
  }))

  return (
    <InteractiveIllustration
      src={`/lesson-assets/sindirim-sistemi/${src}.jpg`}
      srcSet={`/lesson-assets/sindirim-sistemi/${src}-900.jpg 900w, /lesson-assets/sindirim-sistemi/${src}.jpg 1536w`}
      alt={alt}
      activeRegion={activeRegion}
      regions={regions}
      markers={markers}
    />
  )
}

export function DigestiveTractPlate({ activeRegion = null }) {
  const items = [
    { key: 'agiz-yutma', marker: 'Ağız · yutma', width: 245, detail: { src: '/lesson-assets/sindirim-sistemi/details/agiz-yutma.jpg', title: 'Lokmayı hazırla, hava yolunu koru', alt: 'Dişlerin besini parçaladığı, dilin lokma oluşturduğu ve epiglotun yutma sırasında hava yolunu koruduğu kesit.', note: 'Dişler mekanik yüzeyi büyütür, tükürük lokmayı kayganlaştırıp nişasta sindirimini başlatır. Dil lokmayı iterken yumuşak damak ve epiglot yanlış yola kaçışı sınırlar.' } },
    { key: 'peristaltizm', marker: 'Peristaltik taşıma', width: 280, detail: { src: '/lesson-assets/sindirim-sistemi/details/peristaltizm.jpg', title: 'Lokmanın arkasını sık, önünü aç', alt: 'Dairesel ve boyuna düz kasların üç aşamada lokmayı yemek borusunda aşağı ittiği peristaltizm sahnesi.', note: 'Dairesel kas lokmanın arkasında lümeni daraltır; boyuna kas öndeki bölümü kısaltıp genişletir. Dalga yer çekiminden bağımsız ilerler.' } },
    { key: 'mide', marker: 'Mide · çalkalama · pilor', width: 320, detail: { src: '/lesson-assets/sindirim-sistemi/details/mide-bosaltma.jpg', title: 'Karıştır, kimus yap, porsiyonla aktar', alt: 'Midenin kas tabakalarıyla içeriği çalkalaması ve pilorun duodenuma küçük miktarda kimus vermesi.', note: 'Kas dalgaları besini mide özsuyuyla karıştırır. Pilor büyük parçaları geri savurup yalnız küçük kimus porsiyonlarının duodenuma geçmesine izin verir.' } },
    { key: 'bagirsak', marker: 'İnce · kalın bağırsak', width: 290, detail: { src: '/lesson-assets/sindirim-sistemi/details/bagirsak-bolgeleri.jpg', title: 'Sindirim, emilim ve su geri kazanımı', alt: 'Duodenum, villuslu ince bağırsak, ileum ve kolonun farklı işlevlerini yan yana gösteren anatomik sahne.', note: 'Duodenum salgıları birleştirir, villuslu jejunum–ileum besinleri emer, terminal ileum safra tuzlarını geri kazanır; kolon su ve iyonları çekip artığı yoğunlaştırır.' } },
  ]
  return <Plate src="sindirim-kanali-v1" alt="Ağız, peristaltizm, mide ve bağırsak bölümlerini gösteren sindirim kanalı levhası." items={items} activeRegion={activeRegion} />
}

export function StomachMechanismPlate({ activeRegion = null }) {
  const items = [
    { key: 'kas', marker: 'Üç kas tabakası', width: 255, detail: { src: '/lesson-assets/sindirim-sistemi/details/mide-kaslari.jpg', title: 'Üç yönden mekanik karıştırma', alt: 'Mide duvarındaki boyuna, dairesel ve eğik kasların kimusu farklı yönlerde hareket ettirmesi.', note: 'Üç düz kas yönü sıkıştırma, döndürme ve geri savurma oluşturur. Bu mekanik işlem yüzeyi artırır ama peptit bağını tek başına koparmaz.' } },
    { key: 'salgilar', marker: 'Mide bezi hücreleri', width: 290, detail: { src: '/lesson-assets/sindirim-sistemi/details/mide-bezleri.jpg', title: 'Asit, zimojen, mukus ve hormon', alt: 'Mide çukuru ve bezinde farklı salgı hücrelerinin lümene veya kana ürün vermesi.', note: 'Pariyetal hücre HCl, baş hücre pepsinojen, yüzey hücresi mukus–bikarbonat salgılar. G hücresinin gastrini kana verilir; her salgı aynı hücreden çıkmaz.' } },
    { key: 'pepsin', marker: 'Pepsinojen → pepsin', width: 290, detail: { src: '/lesson-assets/sindirim-sistemi/details/pepsin-aktivasyonu.jpg', title: 'Zimojeni lümende etkinleştir', alt: 'Pepsinojenin asitte etkin pepsine dönüşmesi ve açılmış proteini kısa peptitlere kesmesi.', note: 'Etkin olmayan pepsinojen hücreyi korur. Asit lümende pepsini oluşturur; pepsin denatüre proteindeki peptit bağlarını keserek daha kısa zincirler üretir.' } },
    { key: 'koruma', marker: 'Mukozal bariyer', width: 245, detail: { src: '/lesson-assets/sindirim-sistemi/details/mukoza-koruma.jpg', title: 'Korunan yüzeyden ülser odağına', alt: 'Sağlam mukus-bikarbonat bariyeri ile asit girişine bağlı hasarlı mide epitelinin karşılaştırması.', note: 'Mukus bikarbonatı yüzeyde tutar, sıkı bağlantılar geri sızıntıyı sınırlar, epitel hızla yenilenir. Bariyer açılırsa asit–pepsin inflamasyon ve ülserleşme oluşturabilir.' } },
  ]
  return <Plate src="mide-mekanizmasi-v1" alt="Mide kasları, bez hücreleri, pepsin aktivasyonu ve mukoza korunmasını gösteren levha." items={items} activeRegion={activeRegion} />
}

export function AccessoryOrgansPlate({ activeRegion = null }) {
  const items = [
    { key: 'safra', marker: 'Safra üretim ve geri dönüşü', width: 340, detail: { src: '/lesson-assets/sindirim-sistemi/details/safra-dongusu.jpg', title: 'Karaciğerden ileuma, yeniden karaciğere', alt: 'Karaciğer, safra kesesi, duodenum ve terminal ileum arasında safra tuzu dolaşımı.', note: 'Karaciğer safrayı üretir, safra kesesi depolar ve öğünde duodenuma verir. Safra tuzlarının çoğu ileumdan portal kanla karaciğere geri dönerek yeniden kullanılır.' } },
    { key: 'bikarbonat', marker: 'Asidi bikarbonatla nötrleştir', width: 365, detail: { src: '/lesson-assets/sindirim-sistemi/details/bikarbonat-notr.jpg', title: 'Duodenumu ve enzimleri koru', alt: 'Asitli kimus ile pankreas bikarbonatının birleşip villuslar yakınında nötr ortam kurması.', note: 'Pankreas HCO₃⁻ salgısı mide asidini tamponlar. Böylece duodenum epiteli korunur ve pankreas enzimlerinin çalışabileceği pH aralığı kurulur.' } },
    { key: 'emulsiyon', marker: 'Emülsiyon · lipaz · misel', width: 335, detail: { src: '/lesson-assets/sindirim-sistemi/details/emulsifikasyon-misel.jpg', title: 'Yağı önce erişilebilir hâle getir', alt: 'Büyük yağ damlasının safra tuzlarıyla küçük damlalara ayrılması, lipaz etkisi ve misel oluşumu.', note: 'Safra yüzeyi büyütür fakat bağ kırmaz. Lipaz yağ–su ara yüzünde trigliseridi parçalar; safra tuzlu miseller ürünleri fırçamsı kenara taşır.' } },
    { key: 'zimojen', marker: 'Pankreas zimojen güvenliği', width: 340, detail: { src: '/lesson-assets/sindirim-sistemi/details/pankreas-zimojen.jpg', title: 'Proteazları doğru yerde çalıştır', alt: 'Pankreas asiner hücresinden çıkan etkin olmayan proteazların duodenumda kademeli etkinleşmesi.', note: 'Tripsinojen ve diğer öncüller pankreası sindirmeden kanalda ilerler. Enteropeptidaz ilk tripsini oluşturur; tripsin başka proteaz öncüllerini lümende etkinleştirir.' } },
  ]
  return <Plate src="yardimci-organlar-v1" alt="Karaciğer, safra kesesi, pankreas ve duodenum mekanizmalarını gösteren levha." items={items} activeRegion={activeRegion} />
}

export function NutrientDigestionPlate({ activeRegion = null }) {
  const items = [
    { key: 'karbonhidrat', marker: 'Karbonhidrat sindirimi', width: 315, detail: { src: '/lesson-assets/sindirim-sistemi/details/karbonhidrat-sindirim.jpg', title: 'Nişastadan monosakkarite', alt: 'Nişastanın ağız, mide ve ince bağırsak boyunca amilazlar ve fırçamsı kenar enzimleriyle parçalanması.', note: 'Tükürük amilazı başlatır, asitli midede durur; pankreas amilazı sürdürür. Maltaz, sükraz ve laktaz emilebilir monosakkaritleri fırçamsı kenarda oluşturur.' } },
    { key: 'protein', marker: 'Protein sindirimi', width: 270, detail: { src: '/lesson-assets/sindirim-sistemi/details/protein-sindirim.jpg', title: 'Katlı proteinden amino aside', alt: 'Proteinin midede açılıp pepsinle, pankreas proteazları ve peptidazlarla amino asitlere ilerlemesi.', note: 'HCl proteini açar, pepsin büyük peptitler üretir; tripsin ve diğer proteazlar zinciri küçültür. Yüzey ve hücre içi peptidazlar son ürünleri hazırlar.' } },
    { key: 'yag', marker: 'Yağ sindirimi', width: 225, detail: { src: '/lesson-assets/sindirim-sistemi/details/yag-sindirim.jpg', title: 'Damlacıktan emilebilir lipit ürünlerine', alt: 'Safra emülsiyonu, lipaz hidrolizi, misel ve enterosit geçişini izleyen yağ sindirimi.', note: 'Safra küçük damlacıklarla temas alanını büyütür. AYT anlatımında lipaz ürünü yağ asidi ve gliseroldür; fizyolojik süreçte monogliserit de oluşur. Miseller ürünleri epitele ulaştırır.' } },
    { key: 'nukleik', marker: 'Nükleik asit sindirimi', width: 310, detail: { src: '/lesson-assets/sindirim-sistemi/details/nukleik-sindirim.jpg', title: 'DNA ve RNA’dan küçük bileşenlere', alt: 'Nükleik asitlerin nükleazlarla nükleotitlere, yüzey enzimleriyle baz, şeker ve fosfata ayrılması.', note: 'Pankreas nükleazları polinükleotit zincirini keser. Nükleotidaz ve ilgili yüzey enzimleri emilebilen baz, pentoz ve fosfat bileşenlerini oluşturur.' } },
  ]
  return <Plate src="besin-sindirim-v1" alt="Karbonhidrat, protein, yağ ve nükleik asit hidrolizini karşılaştıran bilimsel levha." items={items} activeRegion={activeRegion} />
}

export function IntestinalAbsorptionPlate({ activeRegion = null }) {
  const items = [
    { key: 'yuzey', marker: 'Kıvrım · villus · mikrovillus', width: 365, detail: { src: '/lesson-assets/sindirim-sistemi/details/yuzey-katlanma.jpg', title: 'Emilim yüzeyini üç ölçekte büyüt', alt: 'Bağırsak kıvrımı, villus ve enterosit mikrovillusuna doğru ilerleyen büyütme dizisi.', note: 'Dairesel kıvrım lümeni, villus doku çıkıntısını, mikrovillus tek enterosit zarını büyütür. İnce epitel ve damar akımı bu geniş yüzeyi işlevsel kılar.' } },
    { key: 'glikoz-amino', marker: 'Glikoz · amino asit → kan', width: 350, detail: { src: '/lesson-assets/sindirim-sistemi/details/glikoz-tasima.jpg', title: 'Na⁺ gradyanıyla monomeri içeri al', alt: 'Na-glikoz kotransportu, Na-K pompası ve glikozun kan kılcalına çıkışını gösteren enterosit.', note: 'Apikal kotransport Na⁺ gradyanını kullanır; bazolateral Na⁺/K⁺ pompası gradyanı ATP ile kurar. Glikoz taşıyıcıyla kan kılcalına çıkar; amino asitler benzer özgül taşıma yolları kullanır.' } },
    { key: 'yag', marker: 'Misel → şilomikron → lenf', width: 350, detail: { src: '/lesson-assets/sindirim-sistemi/details/yag-silomikron.jpg', title: 'Yağı hücrede yeniden paketle', alt: 'Misel ürünlerinin enterosite girmesi, trigliserit sentezi, Golgi paketlenmesi ve lakteale şilomikron verilmesi.', note: 'Misel taşıdığı lipitleri bırakır. Enterosit trigliseridi yeniden kurar, apoproteinlerle şilomikron yapar ve büyük parçacığı lenf laktealine ekzositozla verir.' } },
    { key: 'portal-lenf', marker: 'Portal kan · lenf rotası', width: 300, detail: { src: '/lesson-assets/sindirim-sistemi/details/portal-lenf.jpg', title: 'Aynı villustan iki ilk durak', alt: 'Villus kanının karaciğere, lenfin göğüs kanalı üzerinden kalp yakınındaki toplardamara gittiği iki rota.', note: 'Şeker ve amino asitler portal kanla önce karaciğere ulaşır. Şilomikronlar lenfle kalp yakınındaki büyük toplardamara katılır; sonunda ikisi de genel dolaşıma girer.' } },
  ]
  return <Plate src="bagirsak-emilim-v1" alt="Bağırsak yüzey büyütme, monomer taşınması, şilomikron ve portal-lenf yollarını gösteren levha." items={items} activeRegion={activeRegion} />
}
