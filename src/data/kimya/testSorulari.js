/**
 * Dr. Koç — Kimya Atlası / Mini Test Soru Bankası
 * Her soruda yalnızca "doğru/yanlış" değil, **neden** doğru olduğu da yazılır.
 * `konu` alanı, öğrenciye hangi bölümü tekrar etmesi gerektiğini söyler.
 */

export const TEST_SORULARI = [
  {
    konu: 'Molekül geometrisi',
    soru: 'CO₂ molekülünün geometrisi nedir?',
    secenekler: ['Açısal (kırık)', 'Doğrusal', 'Tetrahedral', 'Trigonal piramidal'],
    dogru: 1,
    aciklama: 'Karbonun çevresinde 2 elektron kümesi (iki çift bağ) vardır ve ortaklanmamış çifti yoktur. İki elektron kümesi birbirinden en uzak durmak için 180°’lik açıyla yerleşir → doğrusal.',
    tuzak: 'SO₂ ile karıştırılır: SO₂’de kükürdün bir ortaklanmamış çifti olduğu için o molekül açısaldır.',
  },
  {
    konu: 'Molekül polaritesi',
    soru: 'CO₂ molekülünün bağları polar olduğu hâlde molekül neden apolardır?',
    secenekler: [
      'Karbon ve oksijenin elektronegatiflikleri eşittir',
      'Molekül doğrusal olduğu için bağ dipolleri birbirini götürür',
      'CO₂’de kovalent bağ yoktur',
      'Oksijen atomları birbirine bağlıdır',
    ],
    dogru: 1,
    aciklama: 'Bağ polaritesi ile molekül polaritesi farklı sorulardır. CO₂’de iki C=O bağ dipolü eşit büyüklükte ve tam ters yönlüdür; vektörel toplamları sıfırdır.',
    tuzak: '"Polar bağ varsa molekül de polardır" yanılgısı en sık burada görülür.',
  },
  {
    konu: 'Madde sınıflandırma',
    soru: 'Aşağıdakilerden hangisi hem element hem moleküldür?',
    secenekler: ['H₂O', 'O₂', 'NaCl', 'CO₂'],
    dogru: 1,
    aciklama: 'O₂ iki oksijen atomundan oluşur: tek tür atom içerdiği için elementtir, atomlar kovalent bağla bağlı olduğu için moleküldür.',
    tuzak: '"Element = tek atom" sanılır. Ölçüt atom sayısı değil, atom çeşididir.',
  },
  {
    konu: 'Tanecik türü',
    soru: 'NaCl için aşağıdaki ifadelerden hangisi doğrudur?',
    secenekler: [
      'NaCl molekülleri birbirine hidrojen bağıyla bağlanır',
      'NaCl bağımsız moleküllerden oluşur',
      'NaCl üç boyutlu iyonik örgüden oluşur, "formül birimi" denir',
      'NaCl bir elementtir',
    ],
    dogru: 2,
    aciklama: 'Katı NaCl’de her Na⁺ altı Cl⁻ ile, her Cl⁻ altı Na⁺ ile komşudur. Belirli bir "NaCl molekülü" yoktur; formül, örgüdeki en basit iyon oranını gösterir.',
    tuzak: 'İyonik bileşiklere "molekül" demek yaygın bir hatadır.',
  },
  {
    konu: 'Çok atomlu iyon',
    soru: 'NO₃⁻ taneciği için hangisi doğrudur?',
    secenekler: [
      'Nötr bir moleküldür',
      '−1 yüklü çok atomlu bir anyondur',
      'Bir elementtir',
      'Bir katyondur',
    ],
    dogru: 1,
    aciklama: 'NO₃⁻ 1 azot ve 3 oksijen atomundan oluşur, toplam 4 atom içerir ve net yükü −1’dir. Tek başına kararlı bir madde değildir; her zaman bir katyonla birlikte bulunur.',
    tuzak: '"NO₃ molekülü" ifadesi yanlıştır.',
  },
  {
    konu: 'Formül okuma',
    soru: 'Al₂(SO₄)₃ formülünde toplam kaç atom vardır?',
    secenekler: ['9', '12', '17', '20'],
    dogru: 2,
    aciklama: 'Al: 2, S: 1×3 = 3, O: 4×3 = 12. Toplam 2 + 3 + 12 = 17 atom. Parantezin dışındaki 3, parantez içindeki **tüm** atomları çarpar.',
    tuzak: 'Parantez dışındaki katsayının yalnızca ilk atomu çarptığı sanılır.',
  },
  {
    konu: 'Formül okuma',
    soru: 'Ca(OH)₂ bileşiğinde kaç oksijen atomu vardır?',
    secenekler: ['1', '2', '3', '4'],
    dogru: 1,
    aciklama: 'Parantez içinde 1 oksijen vardır, parantezin dışındaki 2 ile çarpılır → 2 oksijen atomu. Bileşikte toplam 5 atom bulunur (1 Ca, 2 O, 2 H).',
  },
  {
    konu: 'Moleküller arası etkileşim',
    soru: 'Su kaynarken kopan bağ hangisidir?',
    secenekler: [
      'O–H kovalent bağı',
      'Moleküller arası hidrojen bağı',
      'İyonik bağ',
      'Metalik bağ',
    ],
    dogru: 1,
    aciklama: 'Kaynama fiziksel bir olaydır: moleküller birbirinden ayrılır ama parçalanmaz. Buhar hâlindeki tanecik hâlâ H₂O molekülüdür. Kopan şey moleküller arası hidrojen bağlarıdır.',
    tuzak: 'Kovalent bağın koptuğu sanılırsa suyun H₂ ve O₂’ye ayrışması gerekirdi — bu kimyasal bir değişimdir.',
  },
  {
    konu: 'Hidrojen bağı',
    soru: 'Aşağıdaki moleküllerden hangisi kendi molekülleri arasında hidrojen bağı yapamaz?',
    secenekler: ['H₂O', 'NH₃', 'H₂S', 'HF'],
    dogru: 2,
    aciklama: 'Hidrojen bağı için hidrojenin doğrudan F, O veya N atomuna bağlı olması gerekir. H₂S’te hidrojen kükürde bağlıdır; kükürt yeterince elektronegatif değildir.',
    tuzak: 'H₂S suya benzediği için hidrojen bağı yapacağı sanılır. Bu yüzden su 100 °C’de, H₂S −60 °C’de kaynar.',
  },
  {
    konu: 'Molekül geometrisi',
    soru: 'NH₃ molekülünün geometrisi ve yaklaşık bağ açısı hangisidir?',
    secenekler: [
      'Trigonal düzlemsel, 120°',
      'Trigonal piramidal, 107°',
      'Tetrahedral, 109,5°',
      'Açısal, 104,5°',
    ],
    dogru: 1,
    aciklama: 'Azotun çevresinde 4 elektron çifti vardır (3 bağ + 1 ortaklanmamış). Elektron geometrisi tetrahedraldir, ama ortaklanmamış çift atom taşımadığı için molekül geometrisi trigonal piramidaldir; itme nedeniyle açı 107°’ye daralır.',
    tuzak: 'Elektron geometrisi ile molekül geometrisi karıştırılır.',
  },
  {
    konu: 'Bağ türü',
    soru: 'Elektronegatiflik farkı 2,23 olan Na ile Cl arasında hangi bağ oluşur?',
    secenekler: ['Apolar kovalent', 'Polar kovalent', 'İyonik', 'Metalik'],
    dogru: 2,
    aciklama: 'Sodyum metal, klor ametaldir ve elektronegatiflik farkı 1,7’nin çok üzerindedir. Elektron ortaklaşılmaz, sodyumdan klora aktarılır; oluşan Na⁺ ve Cl⁻ iyonları elektrostatik olarak çekilir.',
  },
  {
    konu: 'Bağ türü',
    soru: 'Ca(OH)₂ bileşiğinde hangi bağ türleri birlikte bulunur?',
    secenekler: [
      'Yalnızca iyonik bağ',
      'Yalnızca kovalent bağ',
      'İyonik bağ + polar kovalent bağ',
      'Metalik bağ + iyonik bağ',
    ],
    dogru: 2,
    aciklama: 'Ca²⁺ ile OH⁻ arasında iyonik bağ vardır. Hidroksit iyonunun kendi içinde, oksijen ile hidrojen arasında ise polar kovalent bağ bulunur.',
    tuzak: 'Çok atomlu iyon içeren bileşiklerde iki bağ türünün bir arada olabileceği gözden kaçar.',
  },
  {
    konu: 'Periyodik sistem',
    soru: 'Oksijen atomunun (₈O) değerlik elektron sayısı kaçtır?',
    secenekler: ['2', '4', '6', '8'],
    dogru: 2,
    aciklama: 'Elektron dizilimi 1s² 2s² 2p⁴’tür. Son katman (n = 2) 2 + 4 = 6 elektron içerir. 16. grupta olması da 6 değerlik elektronunu gösterir.',
  },
  {
    konu: 'Periyodik sistem',
    soru: 'Bir atomun kimyasal kimliğini belirleyen şey nedir?',
    secenekler: [
      'Nötron sayısı',
      'Proton sayısı',
      'Elektron sayısı',
      'Kütle numarası',
    ],
    dogru: 1,
    aciklama: 'Proton sayısı (atom numarası) elementin kimliğidir. Nötron sayısı değişirse izotop, elektron sayısı değişirse iyon oluşur — ama element değişmez.',
  },
  {
    konu: 'İyon oluşumu',
    soru: 'Mg atomu 2 elektron verdiğinde ne olur?',
    secenekler: [
      'Mg²⁻ anyonu oluşur',
      'Mg²⁺ katyonu oluşur, proton sayısı 12 kalır',
      'Yeni bir element oluşur',
      'Nötron sayısı 2 azalır',
    ],
    dogru: 1,
    aciklama: 'Elektron verildiğinde elektron sayısı 12’den 10’a düşer, proton sayısı 12 olarak kalır. Net yük +2 olur. Elektron dizilimi neona benzer (izoelektronik).',
  },
  {
    konu: 'Madde sınıflandırma',
    soru: 'Aşağıdakilerden hangisi homojen karışımdır?',
    secenekler: ['Zeytinyağı + su', 'Kum + su', 'Hava', 'Saf su'],
    dogru: 2,
    aciklama: 'Hava; azot, oksijen, argon ve diğer gazların her yerde aynı özelliği gösteren karışımıdır. Saf su ise karışım değil, bileşiktir.',
    tuzak: 'Homojen olmak "saf madde" olmak anlamına gelmez.',
  },
  {
    konu: 'Rezonans',
    soru: 'NO₃⁻ iyonundaki üç N–O bağı için hangisi doğrudur?',
    secenekler: [
      'Biri çift, ikisi tek bağdır ve uzunlukları farklıdır',
      'Rezonans nedeniyle üçü de eşdeğerdir',
      'Üçü de iyonik bağdır',
      'İkisi kovalent, biri iyoniktir',
    ],
    dogru: 1,
    aciklama: 'Tek bir Lewis yapısı çizdiğimizde bir çift ve iki tek bağ görünür, ama deneysel ölçümler üç bağın da aynı uzunlukta olduğunu gösterir. π elektronları üç bağ üzerine delokalizedir.',
    tuzak: 'Tek bir Lewis yapısının gerçeği tam yansıttığı sanılır.',
  },
  {
    konu: 'Molekül polaritesi',
    soru: 'Aşağıdaki moleküllerden hangisi polardır?',
    secenekler: ['CCl₄', 'BF₃', 'H₂O', 'CH₄'],
    dogru: 2,
    aciklama: 'CCl₄ tetrahedral, BF₃ trigonal düzlemsel, CH₄ tetrahedraldir; üçü de simetrik olduğu için bağ dipolleri birbirini götürür. H₂O açısal olduğu için dipoller toplanır ve molekül polardır.',
  },
  {
    konu: 'Lewis yapısı',
    soru: 'Lewis yapısı bize aşağıdakilerden hangisini **göstermez**?',
    secenekler: [
      'Bağ yapan elektron çiftlerini',
      'Ortaklanmamış elektron çiftlerini',
      'Gerçek bağ açılarını ve üç boyutlu şekli',
      'Formal yükleri',
    ],
    dogru: 2,
    aciklama: 'Lewis yapısı elektron dağılımını gösteren düzlemsel bir gösterimdir. Gerçek üç boyutlu şekil ve bağ açıları için VSEPR kuramına ve molekül geometrisine bakılır.',
  },
  {
    konu: 'Metalik bağ',
    soru: 'Metallerin elektriği iyi iletmesinin nedeni nedir?',
    secenekler: [
      'İyonik bağ içermeleri',
      'Delokalize (serbest) elektronlara sahip olmaları',
      'Kovalent bağ yapmaları',
      'Yüksek elektronegatiflikleri',
    ],
    dogru: 1,
    aciklama: 'Metalik bağda değerlik elektronları belirli bir atoma ait değildir; kafes boyunca serbestçe hareket eder. Elektrik alanı uygulandığında bu elektronlar sürüklenir ve akım oluşur.',
  },
  {
    konu: 'Bileşik ve karışım',
    soru: 'Bileşiklerle karışımlar arasındaki en temel fark hangisidir?',
    secenekler: [
      'Bileşikler her zaman katıdır',
      'Bileşikte bileşenler belirli oranda ve kimyasal bağla birleşmiştir',
      'Karışımlar her zaman heterojendir',
      'Bileşikler fiziksel yöntemlerle ayrılabilir',
    ],
    dogru: 1,
    aciklama: 'Bileşikte sabit bir kütle oranı ve kimyasal bağ vardır; ayrıştırmak için kimyasal yöntem gerekir. Karışımda oran değişebilir ve bileşenler fiziksel yöntemlerle ayrılabilir.',
  },
  {
    konu: 'Koordine kovalent bağ',
    soru: 'NH₄⁺ iyonundaki dördüncü N–H bağı nasıl oluşur?',
    secenekler: [
      'Azot ve hidrojen birer elektron verir',
      'Azot ortaklanmamış elektron çiftini H⁺ iyonuna verir',
      'Hidrojen iki elektron verir',
      'İyonik bağ kurulur',
    ],
    dogru: 1,
    aciklama: 'H⁺ iyonunun elektronu yoktur. Azot, ortaklanmamış elektron çiftini bu boş orbitale vererek koordine (datif) kovalent bağ kurar. Bağ oluştuktan sonra dört N–H bağı birbirinden ayırt edilemez.',
  },
  {
    konu: 'London kuvvetleri',
    soru: 'F₂ gaz, Br₂ sıvı, I₂ katı hâldedir. Bu sıralamanın nedeni nedir?',
    secenekler: [
      'Hidrojen bağı güçlenir',
      'Elektron sayısı arttıkça London kuvvetleri güçlenir',
      'Moleküller giderek polarlaşır',
      'İyonik karakter artar',
    ],
    dogru: 1,
    aciklama: 'Halojen molekülleri apolardır; aralarında yalnızca London kuvvetleri bulunur. Molekül büyüdükçe elektron bulutu daha kolay kutuplanır (polarlanabilirlik artar) ve etkileşim güçlenir.',
  },
  {
    konu: 'Molekül geometrisi',
    soru: 'H₂O molekülünde bağ açısı neden 109,5° yerine 104,5°’dir?',
    secenekler: [
      'Oksijen çok küçük olduğu için',
      'İki ortaklanmamış elektron çifti bağ çiftlerini daha güçlü ittiği için',
      'Hidrojen atomları birbirini çektiği için',
      'Molekül doğrusal olduğu için',
    ],
    dogru: 1,
    aciklama: 'Ortaklanmamış elektron çiftleri yalnızca bir çekirdek tarafından tutulduğu için daha geniş bir alan kaplar ve bağ çiftlerini daha güçlü iter. Bu itme H–O–H açısını sıkıştırır.',
  },
]

/** Soruları karıştırır (Fisher-Yates) ve istenen sayıda döndürür. */
export function testHazirla(adet = 8) {
  const kopya = [...TEST_SORULARI]
  for (let i = kopya.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[kopya[i], kopya[j]] = [kopya[j], kopya[i]]
  }
  return kopya.slice(0, Math.min(adet, kopya.length))
}
