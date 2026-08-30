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
      src={`/lesson-assets/destek-hareket/${src}.jpg`}
      srcSet={`/lesson-assets/destek-hareket/${src}-900.jpg 900w, /lesson-assets/destek-hareket/${src}.jpg 1536w`}
      alt={alt}
      activeRegion={activeRegion}
      regions={regions}
      markers={markers}
    />
  )
}

export function MovementIntegration({ activeRegion = null }) {
  const items = [
    { key: 'eksen', marker: 'Eksen · üyeler iskeleti', width: 330, detail: { src: '/lesson-assets/destek-hareket/details/eksen-uyeler.jpg', title: 'Merkezî koruma ve hareket uzantıları', alt: 'Eksen ve üyeler iskeletini önden, arkadan ve yürüyüş bağlamında karşılaştıran sahne.', note: 'Kafatası, omurga ve göğüs kafesi eksen iskeletini; omuz–kalça kemerleri ile kol ve bacaklar üyeler iskeletini oluşturur. İki bölüm tek hareket zinciri içinde çalışır.' } },
    { key: 'koruma-depo', marker: 'Koruma · mineral · ilik', width: 335, detail: { src: '/lesson-assets/destek-hareket/details/koruma-depo.jpg', title: 'İskelet yalnız destek değildir', alt: 'Kafatası, omurga ve göğüs kafesinin koruma; kemik matriksi ve iliğin depo-üretim görevleri.', note: 'Kafatası beyni, omurga omuriliği, göğüs kafesi kalp–akciğerleri korur. Kemik matriksi mineral deposu, kırmızı ilik kan hücresi üretim alanıdır.' } },
    { key: 'kaldirac', marker: 'Biyolojik kaldıraç', width: 275, detail: { src: '/lesson-assets/destek-hareket/details/biyolojik-kaldirac.jpg', title: 'Kuvvet, dayanak ve yük', alt: 'Dirsekte kas kuvveti, eklem dayanağı ve eldeki yükün kaldıraç kollarını gösteren sahne.', note: 'Kemik kaldıraç, eklem dönme noktası, kas kuvvet kaynağıdır. Kas ekleme yakın bağlandığında kuvvet gereksinimi artabilir; karşılığında distal uç hız ve hareket mesafesi kazanır.' } },
    { key: 'antagonist', marker: 'Antagonistik kas çifti', width: 310, detail: { src: '/lesson-assets/destek-hareket/details/antagonist-kas.jpg', title: 'Kas iter değil, karşıtı çeker', alt: 'Biseps ve trisepsin dirsek bükülmesi ile açılmasında zıt çalışması.', note: 'Dirsek bükülürken biseps kasılır, triseps kontrollü gevşer; açılmada roller tersine döner. Zıt yönlü hareket iki kas grubunun eş güdümüdür.' } },
  ]
  return <Plate src="hareket-butunlugu-v1" alt="İskelet bölümleri, koruma, kaldıraç ve antagonistik kasları gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}

export function BoneTissuePlate({ activeRegion = null }) {
  const items = [
    { key: 'uzun-kemik', marker: 'Uzun kemiğin bölgeleri', width: 315, detail: { src: '/lesson-assets/destek-hareket/details/uzun-kemik.jpg', title: 'Epifizden diyafize yaşayan organ', alt: 'Uzun kemiğin epifiz, diyafiz, periost, eklem kıkırdağı, büyüme plağı ve ilik boşluğunu gösteren kesiti.', note: 'Epifizler süngerimsi dokuca zengin ve eklem kıkırdağıyla örtülüdür. Diyafizde kompakt duvar ve ilik boşluğu belirgindir; periost damar, sinir ve yapıcı hücre öncüleri taşır.' } },
    { key: 'kompakt-sunger', marker: 'Kompakt · süngerimsi', width: 320, detail: { src: '/lesson-assets/destek-hareket/details/kompakt-sunger.jpg', title: 'Yoğun duvar ve hafif kiriş ağı', alt: 'Osteonlu kompakt kemik ile damarlı trabeküler süngerimsi kemiğin karşılaştırması.', note: 'Kompakt kemik yoğun osteonlarla dayanıklı bir kabuk kurar. Süngerimsi kemik trabekülleri yük çizgilerine uyar, az kütleyle dayanım ve ilik boşluğu sağlar.' } },
    { key: 'osteon', marker: 'Osteon · damar · osteosit', width: 335, detail: { src: '/lesson-assets/destek-hareket/details/osteon-damar.jpg', title: 'Sert matriks içinde beslenen hücreler', alt: 'Merkez damar, lameller, lakünlerde osteositler ve kanalcıkları gösteren osteon kesiti.', note: 'Havers kanalındaki damarlar çevre lamellere hizmet eder. Osteositler lakünlerde bulunur; kanalcık uzantıları besin, gaz ve mekanik sinyal alışverişine imkân verir.' } },
    { key: 'yenilenme', marker: 'Yapım · yıkım dengesi', width: 300, detail: { src: '/lesson-assets/destek-hareket/details/kemik-yenilenme.jpg', title: 'Kemiği sök, yeniden kur', alt: 'Osteoklast rezorpsiyonu, osteoblast matriks üretimi, osteosit ve damar arasında mineral değişimi.', note: 'Osteoklast eski matriksi rezorbe eder; osteoblast yeni osteoid üretip mineralizasyona yardım eder. Osteosit yükü izler. Yenilenme büyüme, onarım ve mineral dengesini birlikte destekler.' } },
  ]
  return <Plate src="kemik-doku-v1" alt="Uzun kemik anatomisi, kompakt-süngerimsi doku, osteon ve yeniden şekillenmeyi gösteren levha." items={items} activeRegion={activeRegion} />
}

export function CartilageJointPlate({ activeRegion = null }) {
  const items = [
    { key: 'kikirdak', marker: 'Üç kıkırdak tipi', width: 280, detail: { src: '/lesson-assets/destek-hareket/details/kikirdak-tipleri.jpg', title: 'Matriks, mekanik gereksinime uyar', alt: 'Hiyalin, elastik ve lifli kıkırdağın doku ve organ örnekleri.', note: 'Hiyalin düzgün basınç yüzeyi; elastik kıkırdak bükülebilir destek; lifli kıkırdak kalın kollajenle çekme–basınç dayanımı sağlar. Damarsızlık onarımı yavaşlatır.' } },
    { key: 'eklem-tipleri', marker: 'Eklemlerde hareket derecesi', width: 345, detail: { src: '/lesson-assets/destek-hareket/details/eklem-siniflari.jpg', title: 'Sütürden sinovyal ekleme', alt: 'Kafatası sütürü, omurlar arası bağlantı ve omuz ekleminin hareket artışıyla karşılaştırılması.', note: 'Kafatası sütürleri oynamaz, omurlar arası bağlantılar sınırlı hareketli, sinovyal omuz–diz gibi eklemler geniş hareketlidir. Hareket derecesi yapı ve bağlarla belirlenir.' } },
    { key: 'sinovyal', marker: 'Sinovyal eklem anatomisi', width: 330, detail: { src: '/lesson-assets/destek-hareket/details/sinovyal-eklem.jpg', title: 'Kaygan, yüklü ve kararlı yüzey', alt: 'Diz ekleminde kıkırdak, kapsül, sinovyal zar-sıvı, bağ, menisküs ve bursayı gösteren kesit.', note: 'Kıkırdak sürtünmeyi ve darbeyi, menisküs yük dağılımını, bağlar aşırı hareketi kontrol eder. Sinovyal sıvı yağlama ve damarsız kıkırdak beslenmesine katkı sağlar.' } },
    { key: 'yaralanma', marker: 'Bağ · tendon · kas · kıkırdak', width: 355, detail: { src: '/lesson-assets/destek-hareket/details/yaralanma-mekanizmasi.jpg', title: 'Aynı ağrı, farklı doku', alt: 'Burkulma, tendon ve kas zorlanması ile eklem kıkırdağı aşınmasını karşılaştıran koşu sahnesi.', note: 'Burkulma çoğunlukla ligamenti, tendon zorlanması kas–kemik bağlantısını, kas zorlanması lifleri, aşınma ise eklem kıkırdağını etkiler. Mekanizmayı dokudan ayır.' } },
  ]
  return <Plate src="kikirdak-eklem-v1" alt="Kıkırdak tipleri, eklem sınıfları, sinovyal eklem ve yaralanma mekanizmalarını gösteren levha." items={items} activeRegion={activeRegion} />
}

export function SkeletalMuscleStructure({ activeRegion = null }) {
  const items = [
    { key: 'kas-tipleri', marker: 'Üç kas dokusu', width: 250, detail: { src: '/lesson-assets/destek-hareket/details/kas-tipleri.jpg', title: 'Çizgili olmak istemli olmak değildir', alt: 'İskelet, kalp ve düz kas dokusunu organ bağlamları ve histolojiyle karşılaştıran sahne.', note: 'İskelet kası çizgili–çok çekirdekli; kalp kası çizgili–dallanmış ve ara diskli; düz kas iğ biçimli ve çizgisizdir. Kalp kasının çizgili olması onu istemli yapmaz.' } },
    { key: 'hiyerarsi', marker: 'Kas → demet → lif → miyofibril', width: 370, detail: { src: '/lesson-assets/destek-hareket/details/kas-hiyerarsi.jpg', title: 'Kuvveti paketlerden tendona topla', alt: 'Tüm kastan fasikül, lif, miyofibril ve sarkomere açılan hiyerarşik kesit.', note: 'Epimisyum tüm kası, perimisyum demeti, endomisyum lifi sarar. Bağ dokusu katmanları paralel lif kuvvetini tendon üzerinde bütünleştirir.' } },
    { key: 'sarkomer', marker: 'Sarkomer · filament düzeni', width: 335, detail: { src: '/lesson-assets/destek-hareket/details/sarkomer-duzeni.jpg', title: 'Z çizgisinden Z çizgisine kuvvet birimi', alt: 'Aktin, miyozin, Z çizgileri ve örtüşme bölgelerini gösteren ayrıntılı sarkomer mimarisi.', note: 'İnce aktin Z çizgisine bağlı, kalın miyozin merkezde düzenlenmiştir. Sarkomerlerin düzenli tekrarı çizgili görünümü ve eksen boyunca kuvvet aktarımını sağlar.' } },
    { key: 'motor-birim', marker: 'Motor birim · kavşak', width: 310, detail: { src: '/lesson-assets/destek-hareket/details/motor-birim.jpg', title: 'Bir nöron, birden çok kas lifi', alt: 'Küçük ve büyük motor birimler ile nöromüsküler kavşak ayrıntısı.', note: 'Bir motor nöron ve uyardığı tüm lifler motor birimdir. Küçük motor birimler hassas, büyük motor birimler güçlü hareketlere uygundur; ACh motor uç plakta kas uyarısını başlatır.' } },
  ]
  return <Plate src="iskelet-kasi-yapi-v1" alt="Kas dokuları, iskelet kası hiyerarşisi, sarkomer ve motor birimi gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}

export function MuscleContractionPlate({ activeRegion = null }) {
  const items = [
    { key: 'uyari-ca', marker: 'Motor uç plak · Ca²⁺', width: 310, detail: { src: '/lesson-assets/destek-hareket/details/uyari-ca.jpg', title: 'Zar uyarısını lifin derinine taşı', alt: 'Nöromüsküler kavşak, T tübülleri ve sarkoplazmik retikulumdan kalsiyum salınmasını gösteren sahne.', note: 'ACh kas zarında impuls başlatır. T tübülleri uyarıyı derine taşır; sarkoplazmik retikulum miyofibriller çevresine Ca²⁺ verir ve kasılma düzenini başlatır.' } },
    { key: 'troponin', marker: 'Troponin · tropomiyozin', width: 325, detail: { src: '/lesson-assets/destek-hareket/details/troponin-kapisi.jpg', title: 'Bağlanma bölgesinin Ca²⁺ anahtarı', alt: 'Kalsiyum yokken kapalı, kalsiyum bağlanınca açık aktin bağlanma bölgeleri.', note: 'Dinlenmede tropomiyozin aktin bağlanma bölgelerini örter. Ca²⁺ troponine bağlanınca kompleks biçim değiştirir, tropomiyozin çekilir ve miyozin için aktin bölgeleri açılır.' } },
    { key: 'capraz-kopru', marker: 'Çapraz köprü · ATP döngüsü', width: 345, detail: { src: '/lesson-assets/destek-hareket/details/capraz-kopru.jpg', title: 'Bağlan, çek, ayrıl ve yeniden kurul', alt: 'Miyozin başının aktine bağlanma, güç vuruşu, ayrılma ve yeniden kurulma döngüsü.', note: 'Miyozin aktine bağlanıp güç vuruşu yapar. Yeni ATP bağlanması ayrılmayı, ATP hidrolizi başın yeniden kurulmasını sağlar. Ca²⁺ ve ATP oldukça döngü sürer.' } },
    { key: 'bantlar', marker: 'Bantlar · gevşeme', width: 275, detail: { src: '/lesson-assets/destek-hareket/details/bant-degisimi.jpg', title: 'Filament kısalmaz, örtüşme artar', alt: 'Gevşek ve kasılı sarkomerde Z çizgisi, I-H bölgeleri, A bandı ve kalsiyum geri alımının karşılaştırılması.', note: 'Z çizgileri yaklaşır, I ve H daralır; A bandı ve filament boyları değişmez. Uyarı bitince Ca²⁺ ATP kullanan pompalarla depoya alınır ve bağlanma bölgeleri kapanır.' } },
  ]
  return <Plate src="kas-kasilma-v1" alt="Uyarı, kalsiyum, düzenleyici proteinler, çapraz köprü ve bant değişimlerini gösteren kasılma levhası." items={items} activeRegion={activeRegion} />
}
