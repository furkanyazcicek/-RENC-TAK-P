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
  const markers = items.map((item, index) => ({ key: item.key, title: item.marker, width: item.width ?? 350, ...markerPositions[index] }))
  return <InteractiveIllustration src={`/lesson-assets/genden-proteine/${src}.jpg`} srcSet={`/lesson-assets/genden-proteine/${src}-900.jpg 900w, /lesson-assets/genden-proteine/${src}.jpg 1536w`} alt={alt} activeRegion={activeRegion} regions={regions} markers={markers} />
}

export function GeneticMaterialEvidencePlate({ activeRegion = null }) {
  const items = [
    { key: 'griffith-avery', marker: 'Griffith–Avery · dönüşüm', width: 365, detail: { src: '/lesson-assets/genden-proteine/details/griffith-avery.jpg', title: 'Dönüşümü taşıyan molekülü ayır', alt: 'Isıyla öldürülmüş kapsüllü bakteriden çıkan DNA’nın canlı kapsülsüz bakteriye geçerek kapsül özelliği kazandırması.', note: 'Griffith dönüşümü gözledi; Avery ve çalışma arkadaşları dönüştürücü özütü seçici enzimlerle sınadı. DNaz uygulandığında dönüşümün durması, kalıcı özelliği aktaran maddenin DNA olduğunu gösterdi.' } },
    { key: 'hershey-chase', marker: 'Hershey–Chase · faj deneyi', width: 360, detail: { src: '/lesson-assets/genden-proteine/details/hershey-chase.jpg', title: 'İşaretli DNA’yı hücrenin içine kadar izle', alt: 'DNA’sı fosfor, protein kılıfı kükürt izotopuyla işaretlenmiş fajların bakteri, blender ve santrifüj basamakları.', note: '³²P DNA’yı, ³⁵S protein kılıfı işaretler. Enfeksiyon ve santrifüj sonrası ³²P bakterili çökeltiye ve yeni fajlara geçerken ³⁵S çoğunlukla üst sıvıda kalır.' } },
    { key: 'dna-yapi', marker: 'Antiparalel DNA · baz çiftleri', width: 385, detail: { src: '/lesson-assets/genden-proteine/details/dna-yapi.jpg', title: 'Omurgayı dışa, tamamlayıcı bazları içe yerleştir', alt: 'Antiparalel DNA zincirlerinde şeker-fosfat omurgaları, A-T ve G-C baz çiftleri ile hidrojen bağları.', note: 'Zincirler zıt yönlüdür. A–T iki, G–C üç hidrojen bağı kurar; bir zincirin dizisi diğerini belirler. Aynı zincirde nükleotitleri fosfodiester bağları birleştirir.' } },
    { key: 'gen-organizasyon', marker: 'Nükleozom · kromatin · gen', width: 360, detail: { src: '/lesson-assets/genden-proteine/details/gen-organizasyon.jpg', title: 'Metrelerce DNA’yı düzenli ve erişilebilir paketle', alt: 'DNA’nın histonlara sarılması, nükleozomlar, kromatin döngüleri, yoğun kromozom ve işaretli gen lokusu.', note: 'DNA histon oktamerlerine sarılarak nükleozomları kurar; üst düzey katlanma kromatini ve bölünmede kromozomu oluşturur. Gen, bu DNA üzerindeki işlevsel RNA veya protein bilgisidir.' } },
  ]
  return <Plate src="kalitsal-madde-v1" alt="Kalıtsal maddenin deneysel kanıtlarını, DNA yapısını ve kromozom paketlenmesini gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}

export function DnaReplicationPlate({ activeRegion = null }) {
  const items = [
    { key: 'yarikorunumlu', marker: 'Meselson–Stahl · yarı korunumlu', width: 400, detail: { src: '/lesson-assets/genden-proteine/details/yarikorunumlu.jpg', title: 'Eski ve yeni zinciri yoğunluk bantlarında ayır', alt: 'Ağır azotlu ebeveyn DNA, ilk nesil hibrit DNA ve ikinci nesil hibrit-hafif DNA bantları.', note: 'İlk nesilde tek ara yoğunluk bandı korunumlu modeli; ikinci nesilde ara ve hafif bant dağılımlı modeli eler. Her yavru DNA bir eski ve bir yeni zincir taşır.' } },
    { key: 'catal-enzimler', marker: 'Eşlenme çatalı · enzim takımı', width: 385, detail: { src: '/lesson-assets/genden-proteine/details/catal-enzimler.jpg', title: 'Çatalı aç, koru, başlat ve uzat', alt: 'Eşlenme çatalında topoizomeraz, helikaz, tek zincir bağlayıcı proteinler, primaz ve DNA polimeraz.', note: 'Topoizomeraz gerilimi azaltır, helikaz zincirleri ayırır, SSB proteinleri açık kalıbı korur. Primaz RNA başlatıcı üretir; DNA polimeraz 3′ uca nükleotit ekler.' } },
    { key: 'kesintili-kesintisiz', marker: 'Öncü · geciken · Okazaki', width: 360, detail: { src: '/lesson-assets/genden-proteine/details/kesintili-kesintisiz.jpg', title: 'İki antiparalel kalıpta tek yön kuralını koru', alt: 'Kesintisiz öncü zincir ile RNA başlatıcılı Okazaki parçaları hâlindeki geciken zincirin işlenmesi.', note: 'Yeni DNA her iki kolda da 5′→3′ sentezlenir. Çatala doğru öncü zincir kesintisiz; diğer kol başlatıcılı Okazaki parçalarıyla yapılır ve ligazla birleştirilir.' } },
    { key: 'orijin-onarim', marker: 'Başlangıç noktası · düzeltme', width: 370, detail: { src: '/lesson-assets/genden-proteine/details/orijin-onarim.jpg', title: 'Uzun genomu çok noktadan eşle ve hatayı düzelt', alt: 'Halkasal bakteriyel DNA’da tek, doğrusal ökaryot DNA’da çoklu eşlenme başlangıçları ve hata onarım sahnesi.', note: 'Prokaryot kromozomunda çoğunlukla tek, ökaryot kromozomunda çok sayıda çift yönlü başlangıç vardır. Polimeraz düzeltmesi ve onarım sistemleri kalıcı hata olasılığını azaltır.' } },
  ]
  return <Plate src="dna-replikasyon-v1" alt="Yarı korunumlu DNA replikasyonunu, eşlenme çatalını, zincir yönlerini ve onarımı gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}

export function RnaTranscriptionPlate({ activeRegion = null }) {
  const items = [
    { key: 'rna-cesitleri', marker: 'mRNA · tRNA · rRNA', width: 320, detail: { src: '/lesson-assets/genden-proteine/details/rna-cesitleri.jpg', title: 'Bilgiyi taşı, amino asidi getir, ribozomu kur', alt: 'Kodonlu mRNA, amino asit ve antikodon taşıyan tRNA ile ribozom alt birimlerinin rRNA içeriği.', note: 'mRNA okunacak kodon dizisidir. tRNA doğru amino asidi antikodonla getirir. rRNA ribozomun yapısal ve katalitik merkezini oluşturur; üçü de transkripsiyon ürünüdür.' } },
    { key: 'transkripsiyon', marker: 'Promotör · RNA polimeraz', width: 350, detail: { src: '/lesson-assets/genden-proteine/details/transkripsiyon.jpg', title: 'Tek geni seç ve RNA’yı 5′→3′ uzat', alt: 'Promotörde başlayan, DNA kalıp zincirini okuyup tamamlayıcı RNA üreten RNA polimerazın aşamaları.', note: 'RNA polimeraz promotörü tanır, kalıp DNA’yı 3′→5′ okur ve RNA’yı başlatıcı gerektirmeden 5′→3′ sentezler. Sonlanma sinyalinde ürün serbest kalır.' } },
    { key: 'rna-isleme', marker: 'Başlık · intron · poli-A', width: 340, detail: { src: '/lesson-assets/genden-proteine/details/rna-isleme.jpg', title: 'Ön mRNA’yı koru, kesip birleştir ve dışarı çıkar', alt: 'Ön mRNA’ya 5 başlık ve poli-A kuyruğu eklenmesi, intron ilmeğinin çıkarılması, ekzonların birleşmesi ve por çıkışı.', note: 'Ökaryot ön mRNA’sı 5′ başlık ve poli-A kuyruğu kazanır. Spliceozom intronları çıkarır, ekzonları birleştirir; olgun mRNA çekirdek porundan sitoplazmaya geçer.' } },
    { key: 'prokaryot-okaryot', marker: 'Eş zamanlı · bölmelerle ayrılmış', width: 405, detail: { src: '/lesson-assets/genden-proteine/details/prokaryot-okaryot.jpg', title: 'Çekirdek zarı gen ifadesinin zamanını değiştirir', alt: 'Prokaryotta eş zamanlı transkripsiyon-translasyon ve ökaryotta çekirdekte transkripsiyon, sitoplazmada translasyon.', note: 'Prokaryotta ribozomlar henüz tamamlanmamış mRNA’yı okuyabilir. Ökaryotta RNA çekirdekte üretilip işlenir; olgun mRNA çıktıktan sonra sitoplazmada çevrilir.' } },
  ]
  return <Plate src="rna-transkripsiyon-v1" alt="RNA türlerini, transkripsiyon mekanizmasını, RNA işlenmesini ve hücresel bölme farkını gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}

export function TranslationPlate({ activeRegion = null }) {
  const items = [
    { key: 'kodon-antikodon', marker: 'Kodon · antikodon · amino asit', width: 390, detail: { src: '/lesson-assets/genden-proteine/details/kodon-antikodon.jpg', title: 'Üçlü kodu doğru yüklü tRNA ile eşleştir', alt: 'mRNA kodonları, tamamlayıcı tRNA antikodonları, amino asitler ile başlangıç, sonlanma ve dejenerelik ilişkisi.', note: 'Kodon mRNA’da 5′→3′ okunur; antikodon ona tamamlayıcı ve antiparaleldir. Bir amino asidin birden çok kodonu olabilir; dur kodonlarına aminoasil-tRNA bağlanmaz.' } },
    { key: 'baslatma', marker: 'Başlama · AUG · P bölgesi', width: 350, detail: { src: '/lesson-assets/genden-proteine/details/baslatma.jpg', title: 'Okuma çerçevesini başlangıç kodonunda sabitle', alt: 'Küçük ribozom alt birimi, mRNA, AUG’yi tanıyan başlatıcı tRNA ve katılan büyük alt birim.', note: 'Küçük alt birim mRNA’yı konumlandırır. Metiyonin yüklü başlatıcı tRNA AUG’yi P bölgesinde tanır; büyük alt birim katılarak işlevsel ribozomu oluşturur.' } },
    { key: 'uzama', marker: 'A–P–E · peptit bağı · ilerleme', width: 390, detail: { src: '/lesson-assets/genden-proteine/details/uzama.jpg', title: 'Amino asidi al, zinciri aktar, bir kodon ilerle', alt: 'Ribozomun A, P ve E bölgelerinde tRNA girişi, peptit bağı, translokasyon ve boş tRNA çıkışı.', note: 'A bölgesine doğru tRNA gelir; zincir P’den A’daki amino aside aktarılır. Ribozom bir kodon ilerleyince peptitli tRNA P’ye, boş tRNA E’ye geçip çıkar.' } },
    { key: 'sonlanma-polizom', marker: 'Dur kodonu · salıverme · polizom', width: 400, detail: { src: '/lesson-assets/genden-proteine/details/sonlanma-polizom.jpg', title: 'Zinciri serbest bırak ve aynı mRNA’yı çoğul oku', alt: 'Dur kodonunda salıverme faktörü, ribozomun ayrılması ve tek mRNA üzerinde çok sayıda ribozomlu polizom.', note: 'Dur kodonunda A bölgesine salıverme faktörü bağlanır; polipeptit serbest kalır. Polizomda aynı mRNA’yı farklı konumlardaki ribozomlar eş zamanlı okuyarak üretimi hızlandırır.' } },
  ]
  return <Plate src="genetik-kod-translasyon-v1" alt="Genetik kodu ve translasyonun başlama, uzama, sonlanma ile polizom basamaklarını gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}

export function BiotechnologyPlate({ activeRegion = null }) {
  const items = [
    { key: 'rekombinant-dna', marker: 'Restriksiyon · ligaz · plazmit', width: 385, detail: { src: '/lesson-assets/genden-proteine/details/rekombinant-dna.jpg', title: 'Uyumlu uçları oluştur, kapat ve konağa aktar', alt: 'Hedef DNA ile plazmidin aynı enzimle kesilmesi, yapışkan uçların eşleşmesi, ligaz ve bakteriyel dönüşüm.', note: 'Aynı restriksiyon enzimi uyumlu uçlar üretir. Ligaz omurgayı kapatır; rekombinant plazmit bakteriye aktarılıp seçilir ve hedef gen ürünü üretilebilir.' } },
    { key: 'pcr-jel', marker: 'PCR döngüsü · jel bantları', width: 350, detail: { src: '/lesson-assets/genden-proteine/details/pcr-jel.jpg', title: 'Hedef diziyi çoğalt ve uzunluğa göre ayır', alt: 'PCR denatürasyon, primer bağlanması ve uzama döngüleri ile agaroz jelde DNA bantlarının göçü.', note: 'PCR’da iki primer hedef sınırları belirler; ısı döngüleri kopya sayısını artırır. Negatif yüklü DNA jelde pozitif kutba gider, küçük parçalar daha uzağa ilerler.' } },
    { key: 'gen-duzenleme', marker: 'Kılavuz RNA · nükleaz · onarım', width: 390, detail: { src: '/lesson-assets/genden-proteine/details/gen-duzenleme.jpg', title: 'Tamamlayıcı hedefi bul ve hücresel onarımı yönlendir', alt: 'Kılavuz RNA-nükleaz kompleksinin hedef DNA’ya bağlanması, kesim ve iki farklı onarım sonucu.', note: 'Kılavuz RNA hedef özgüllüğünü sağlar; nükleaz keser. Hızlı onarım küçük ekleme/çıkarmalarla geni bozabilir, verilen kalıpla onarım belirli düzeltmeye olanak verebilir.' } },
    { key: 'klon-kokhucre-etik', marker: 'Klon · kök hücre · etik denge', width: 365, detail: { src: '/lesson-assets/genden-proteine/details/klon-kokhucre-etik.jpg', title: 'Biyolojik olanağı güvenlik ve onamla birlikte tart', alt: 'Somatik çekirdek aktarımı, blastosistten kök hücreler, farklı doku soyları ve biyogüvenlik-etik simgeleri.', note: 'Çekirdek aktarımı çekirdek genomunu kopyalar; mitokondri ve çevre aynı değildir. Kök hücre uygulamalarında güvenlik, gönüllü onam, adil erişim ve biyolojik riskler bilimsel yararla birlikte değerlendirilir.' } },
  ]
  return <Plate src="biyoteknoloji-v1" alt="Rekombinant DNA, PCR ve jel, gen düzenleme, klonlama ve kök hücre uygulamalarını gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}
