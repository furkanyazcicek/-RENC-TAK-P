import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.6 Enerji Dönüşümleri ve Çevre Bilimi · 4. ders (ünitenin son dersi)
 * Kazanım : F.8.6.4.1 · F.8.6.4.2 · F.8.6.4.3 · F.8.6.4.4 · F.8.6.4.5
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   Bu beş kazanımın açıklaması yoktur. Konu / Kavramlar (F.8.6.4):
 *   "Sürdürülebilir yaşam, kaynakların tasarruflu kullanımı, geri dönüşüm".
 *
 * DOĞRULUK KARARI
 * İnternette dolaşan ve kaynağı belirsiz “bir ton kâğıt şu kadar ağacı
 * kurtarır” türü sayılar BİLİNÇLİ OLARAK kullanılmadı. F.8.6.4.4 “araştırma
 * verilerini kullanarak” çözüm önerisi istediği için ders, açıkça
 * kurgulanmış olarak etiketlenmiş bir örnek veri tablosuyla veri okumayı
 * öğretir ve gerçek veriye resmî kaynaktan ulaşmanın yolunu gösterir.
 * Atık kutusu renkleri Sıfır Atık Yönetmeliği’nin renk standardına göre
 * verildi (bkz. LGS_KAYNAK_KAYDI.md, doğrulama günlüğü).
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-surdurulebilir-kalkinma',
  topic: 'Enerji Dönüşümleri ve Çevre Bilimi',
  order: 4,
  title: 'Sürdürülebilir Yaşam: Tasarruf, Geri Dönüşüm ve Gelecek',
  subtitle:
    'Bugün kullandığın her kaynak, gelecekte birinin de ihtiyacı olacak bir kaynaktır. Sürdürülebilirlik bu dengeyi kurmaktır.',
  minutes: 46,
  kazanimlar: ['F.8.6.4.1', 'F.8.6.4.2', 'F.8.6.4.3', 'F.8.6.4.4', 'F.8.6.4.5'],
  kapsamNotu:
    'Kaynağı belirsiz tasarruf ve geri dönüşüm sayıları bu notta kullanılmaz; veri okuma, açıkça “örnek veri” olarak etiketlenmiş tablolarla öğretilir.',
  prerequisites: [
    { topic: 'Madde Döngüleri ve Küresel İklim Değişikliği', why: 'Ekolojik ayak izi ve kaynak tüketiminin çevreye etkisi orada kuruldu.' },
    { topic: 'Türkiye’de Kimya Endüstrisi: Hammaddeden Mesleğe', why: 'Hammadde, ithalat ve katma değer kavramları geri dönüşümün ekonomiye katkısını anlamayı sağlar.' },
  ],
  outcomes: [
    'Sürdürülebilir yaşamın ne demek olduğunu açıklayabileceksin.',
    'Günlük hayatta kaynakları tasarruflu kullanmanın yollarını uygulayabileceksin.',
    'Katı atıkların neden ayrıştırılması gerektiğini ve hangi kutuya atılacağını söyleyebileceksin.',
    'Bir veri tablosunu kullanarak geri dönüşümün ekonomiye katkısını yorumlayabileceksin.',
    'Tasarruf için bir proje tasarlayıp tasarrufsuzluğun gelecekteki sonuçlarına çözüm önerebileceksin.',
  ],

  opening: {
    title: 'Bir musluk, bir yıl',
    lead: 'Dişlerini fırçalarken musluğu açık bırakmak küçük bir alışkanlık gibi görünür. Peki bu alışkanlık bir yıl boyunca, bir apartman boyunca, bir şehir boyunca tekrarlanırsa?',
    body: `Sabah dişlerini fırçalıyorsun. Musluk açık, su akıyor. İki dakika sonra ağzını çalkalıyor ve musluğu kapatıyorsun. Bu iki dakikada lavabodan akıp giden suyu hiç kullanmadın.

Tek başına küçük bir miktar gibi görünüyor. Ama bu alışkanlığı her sabah ve her akşam, bir yıl boyunca tekrarladığını düşün. Sonra aynı alışkanlığın apartmanındaki bütün evlerde, sonra şehrindeki bütün evlerde tekrarlandığını düşün.

Küçük alışkanlıklar **toplandığında** büyük sonuçlar doğurur. Bu, hem kötü hem iyi yönde işler: israf toplandığında büyük bir kayıp olur, tasarruf toplandığında büyük bir kazanç.

Bu dersin kavramı **sürdürülebilir yaşamdır:** bugünün ihtiyaçlarını, gelecek kuşakların kendi ihtiyaçlarını karşılama imkânını tüketmeden karşılamak.

Dünya’nın kaynakları sınırsız değildir. Temiz su, fosil yakıtlar, madenler, verimli toprak… Bir kısmı yenilenir, bir kısmı hiç yenilenmez. Sürdürülebilir yaşam, bu kaynakları gelecekte de var olacak biçimde kullanmayı gerektirir.

Bu derste beş kazanım bir arada:

1. Kaynakları **tasarruflu kullanmaya özen göstermek.**
2. Tasarruf için bir **proje tasarlamak.**
3. Katı atıkları **ayrıştırmanın** önemini açıklamak.
4. Geri dönüşümün **ülke ekonomisine katkısını** verilerle yorumlamak.
5. Tasarrufsuzluğun **gelecekteki sonuçlarına** çözüm önermek.

Bu kazanımların çoğu bir **davranış** kazanımıdır. Yani ders bittiğinde bilmen kadar **yapman** da beklenir.`,
  },

  concepts: [
    {
      term: 'Sürdürülebilir yaşam',
      body: 'Bugünün ihtiyaçlarını, gelecek kuşakların kendi ihtiyaçlarını karşılama imkânını tüketmeden karşılayan yaşam biçimidir.',
    },
    {
      term: 'Yenilenebilir kaynak',
      body: 'Kullanıldıkça doğal yollarla yenilenen kaynaklardır: güneş, rüzgâr, akan su, jeotermal enerji. Yenilenebilir olmaları, bilinçsizce kullanılabilecekleri anlamına gelmez.',
    },
    {
      term: 'Yenilenemez kaynak',
      body: 'Oluşması milyonlarca yıl süren ve kullanıldıkça tükenen kaynaklardır: kömür, petrol, doğal gaz ve birçok maden.',
    },
    {
      term: 'Tasarruf',
      body: 'Bir kaynağı ihtiyaç kadar, israf etmeden kullanmaktır. Tasarruf, ihtiyaçtan vazgeçmek değil, gereksiz tüketimden vazgeçmektir.',
    },
    {
      term: 'Katı atık',
      body: 'Evlerde, okullarda ve iş yerlerinde oluşan, artık kullanılmayan katı maddelerdir: kâğıt, plastik, cam, metal, yemek artıkları gibi.',
    },
    {
      term: 'Geri dönüşüm',
      body: 'Kullanılmış malzemelerin toplanıp işlenerek yeniden hammadde ya da ürün olarak kullanılmasıdır.',
    },
    {
      term: 'Sıfır atık',
      body: 'Atık oluşumunu önlemeyi, kaynakları verimli kullanmayı ve oluşan atıkları kaynağında ayrı toplayarak geri kazanmayı amaçlayan yaklaşımdır. Türkiye’de 2017’den bu yana ulusal bir uygulama olarak yürütülmektedir.',
    },
  ],

  why: {
    question: 'Geri dönüşüm neden “azaltmak”tan sonra gelir?',
    body: `Çevre konusunda sık duyulan bir sıralama vardır: **azalt, yeniden kullan, geri dönüştür.** Bu sıra rastgele değildir; en etkili olandan en az etkili olana doğru gider.

**1. Azaltmak.** En iyi atık, hiç oluşmayan atıktır. İhtiyacın olmayan bir ürünü almamak, ambalajlı ürün yerine ambalajsız olanı seçmek, suyu ve elektriği ihtiyaç kadar kullanmak… Azaltmak kaynağı hiç harcamaz ve atık hiç oluşmaz.

**2. Yeniden kullanmak.** Bir ürünü atmadan önce başka bir iş için kullanmak: cam kavanozu saklama kabı yapmak, kumaş çanta kullanmak, kitabını bir sonraki öğrenciye bırakmak. Ürün yeni bir kaynak harcamadan ikinci bir hayata başlar.

**3. Geri dönüştürmek.** Ürün artık kullanılamıyorsa, malzemesi toplanıp işlenerek yeniden hammaddeye dönüştürülür. Bu değerlidir; ama toplama, taşıma ve işleme için **yine enerji harcanır.**

Bu yüzden geri dönüşüm sıralamada üçüncüdür. Önemli olmadığı için değil, ondan önce yapılabilecek daha etkili şeyler olduğu için.

Asit yağmurları dersinde bir kural kurmuştuk: **kalıcı çözüm zincirin başına yerleşir.** Aynı kural burada da geçerlidir. Tüketim zincirinin başı **ihtiyaçtır**; azaltmak zincirin başına dokunur. Geri dönüşüm ise zincirin sonuna.

Peki geri dönüşüm neden yine de çok önemlidir? Çünkü her şeyi azaltmak ya da yeniden kullanmak mümkün değildir. Bir süt kutusu, bir gazete, bir içecek kutusu eninde sonunda atık olur. Bu atıkların çöp alanına gitmesi yerine yeniden hammadde olması:

- **Doğal kaynakları korur:** yeni hammadde çıkarma ihtiyacını azaltır.
- **Enerji tasarrufu sağlar:** birçok malzemeyi geri dönüştürmek, onu hammaddeden sıfırdan üretmekten daha az enerji ister.
- **Çöp alanlarını küçültür:** doğaya gömülen atık miktarını azaltır.
- **Ekonomiye katkı sağlar:** hammadde ithalatını azaltır ve iş imkânı yaratır.

Geri dönüşümün işlemesi için tek bir şart vardır: atıkların **kaynağında ayrıştırılması.** Karışık atılan çöpün büyük kısmı geri dönüştürülemez; çünkü kirlenmiş ve birbirine karışmış malzemeleri ayırmak çok zordur.`,
  },

  mechanism: {
    title: 'Bir içecek kutusunun ikinci hayatı',
    lead: 'Doğru kutuya atılan bir atık nasıl yeniden ürün olur? Her adım bir öncekinin sonucudur.',
    intro: 'Aşağıdaki zincir, ayrıştırılmış bir atığın geri dönüşüm yolculuğunu gösterir.',
    steps: [
      {
        title: '1. Atık kaynağında ayrıştırılır',
        body: 'Kullanılmış metal içecek kutusu, evde ya da okulda metal atıklar için ayrılmış kutuya atılır.',
      },
      {
        title: '2. Ayrı toplanır',
        body: 'Ayrıştırılmış atıklar belediye ya da lisanslı firmalar tarafından karışık çöpten ayrı olarak toplanır.',
      },
      {
        title: '3. Tesiste sınıflandırılır',
        body: 'Toplama ayırma tesisinde atıklar türlerine göre bir kez daha ayrılır, temizlenir ve sıkıştırılır.',
      },
      {
        title: '4. Hammaddeye dönüştürülür',
        body: 'Metal eritilerek yeniden işlenebilir hammadde hâline getirilir. Bu, metali madenden çıkarıp sıfırdan üretmekten daha az enerji ister.',
      },
      {
        title: '5. Yeni ürün üretilir',
        body: 'Elde edilen hammadde fabrikalarda yeni ürünlere dönüştürülür.',
      },
      {
        title: '6. Döngü tamamlanır',
        body: 'Yeni ürün tekrar kullanılır ve kullanım ömrü bitince yeniden doğru kutuya atılırsa döngü sürer.',
      },
    ],
    takeaway:
      'Zincirin ilk halkası sensin: atık doğru kutuya atılmazsa sonraki halkaların hiçbiri çalışmaz.',
  },

  comparison: {
    title: 'Atık hangi kutuya? (Sıfır Atık renk standardı)',
    columns: ['Kutunun rengi', 'Ne atılır?', 'Örnek'],
    rows: [
      { label: 'Kâğıt ve karton', values: ['Mavi', 'Temiz kâğıt ve karton', 'Gazete, defter, karton kutu'] },
      { label: 'Plastik', values: ['Sarı', 'Plastik ambalajlar', 'Plastik şişe, deterjan kabı'] },
      { label: 'Cam', values: ['Yeşil', 'Cam ambalajlar', 'Cam şişe, kavanoz'] },
      { label: 'Metal', values: ['Açık gri', 'Metal ambalajlar', 'İçecek kutusu, konserve kutusu'] },
      { label: 'Organik atık', values: ['Kahverengi', 'Doğada çözünebilen atıklar', 'Sebze ve meyve kabukları'] },
      { label: 'Diğer', values: ['Koyu gri', 'Geri dönüştürülemeyen atıklar', 'Kirli peçete, kullanılmış tek kullanımlık ürünler'] },
    ],
    insight:
      'Pil, elektronik atık ve atık yağ bu kutulara atılmaz; bunlar için ayrı toplama noktaları vardır. Yanlış kutuya atılan tek bir atık, kutudaki bütün malzemenin geri dönüşümünü zorlaştırabilir.',
  },

  traps: [
    {
      title: 'Yenilenebilir kaynağın sınırsız olduğunu sanmak',
      wrong: 'Su yenilenebilir bir kaynak olduğu için istediğim kadar kullanabilirim.',
      right: 'Su döngüsü suyu yeniler; ama **kullanılabilir temiz su** sınırlıdır ve bir bölgedeki su kaynakları tüketim hızına yetişemeyebilir.',
      body: 'Yenilenebilir olmak, bir kaynağın her yerde ve her zaman yeterli olduğu anlamına gelmez. Kuraklık yaşayan bölgelerde su kıtlığı bunun somut örneğidir.',
    },
    {
      title: 'Geri dönüşümü en etkili çözüm sanmak',
      wrong: 'Atıklarımı geri dönüşüme attığım sürece istediğim kadar tüketebilirim.',
      right: 'En etkili çözüm **azaltmaktır**; sonra yeniden kullanmak, en son geri dönüştürmek gelir. Geri dönüşüm de enerji harcar.',
      body: 'Geri dönüşüm değerlidir; ama tüketimi azaltmanın yerini tutmaz. Kalıcı çözüm zincirin başına, yani ihtiyaca yerleşir.',
    },
    {
      title: 'Kirli atığı geri dönüşüm kutusuna atmak',
      wrong: 'İçinde yemek artığı olan plastik kabı olduğu gibi sarı kutuya atarım; nasılsa ayrılır.',
      right: 'Kirli atıklar kutudaki temiz malzemeyi de kirletebilir ve geri dönüşümü zorlaştırır. Ambalajların içi mümkün olduğunca boşaltılmalıdır.',
      body: 'Ayrıştırmanın amacı temiz ve türüne göre ayrılmış hammadde elde etmektir. Kirlenmiş malzeme bu amacı bozar.',
    },
    {
      title: 'Bireysel tasarrufun hiçbir şeyi değiştirmediğini sanmak',
      wrong: 'Ben tek başıma tasarruf etsem ne değişir?',
      right: 'Bireysel davranışlar **toplandığında** büyük sonuçlar doğurur. Ayrıca davranışlar yayılır: bir kişinin alışkanlığı ailesine, sınıfına, çevresine örnek olur.',
      body: 'Asit yağmurları dersinde gördüğün gibi, bireysel önlemler tek başına yeterli olmasa da zincirin başına dokundukları için gereklidir.',
    },
  ],

  variables: {
    title: 'Ölçerek keşfet: bir alışkanlık ne kadar su harcatıyor?',
    lead:
      'Tasarrufa özen göstermenin ilk adımı, israfı görünür kılmaktır. Bunun için basit bir ölçüm yapalım.',
    question: 'Diş fırçalarken musluğun açık bırakılması harcanan su miktarını değiştirir mi?',
    independent: {
      label: 'Fırçalama sırasında musluğun durumu',
      note: 'Ben değiştiriyorum: sürekli açık / yalnız çalkalarken açık',
    },
    setup: {
      label: 'Lavabo altına konan ölçü kabı',
      note: 'Akan su toplanıp ölçülür',
    },
    dependent: {
      label: 'Harcanan su miktarı',
      note: 'Ölçtüğüm: toplanan suyun litre değeri',
    },
    controlled: [
      'Fırçalama süresi',
      'Musluğun açılma derecesi',
      'Aynı kişi ve aynı lavabo',
      'Ölçü kabı ve okuma yöntemi',
    ],
    caption:
      'Süre ve musluğun açılma derecesi bilerek aynı tutulur. Böylece harcanan sudaki farkın tek nedeni musluğun açık bırakılması olur.',
  },

  experiment: {
    title: 'Evde yapılabilecek bir ölçüm',
    intro:
      'Bu ölçüm bir aile büyüğüyle birlikte yapılabilir. Toplanan su boşa dökülmez; bitki sulamak gibi bir işte kullanılır.',
    steps: [
      { title: '1. Ölçü kabını yerleştir', body: 'Lavabonun gideri kapatılır ya da musluğun altına büyük bir ölçü kabı konur.' },
      { title: '2. Birinci ölçüm', body: 'Dişler iki dakika boyunca musluk sürekli açıkken fırçalanır; akan su toplanıp ölçülür.' },
      { title: '3. İkinci ölçüm', body: 'Aynı süre boyunca dişler musluk kapalıyken fırçalanır; musluk yalnız ağız çalkalanırken açılır. Toplanan su ölçülür.' },
      { title: '4. Farkı hesapla', body: 'İki ölçüm arasındaki fark, bir fırçalamada boşa giden suyu gösterir.' },
      { title: '5. Ölçeği büyüt', body: 'Bu farkı günde iki fırçalama ve yılın günleriyle düşün; sonra evindeki kişi sayısıyla düşün.' },
      { title: '6. Davranışı değiştir', body: 'Sonucu ailenle paylaş ve bir hafta boyunca yeni alışkanlığı uygula.' },
    ],
    takeaway:
      'Bir israfı ölçmek, onu görünür kılar. Görünür olan israfı değiştirmek çok daha kolaydır.',
  },

  dataTable: {
    title: 'Gözlem kaydı: bir fırçalamada harcanan su',
    columns: ['Durum', 'Toplanan su', 'Fark'],
    rows: [
      ['Musluk sürekli açık', 'Yaklaşık 12 litre', '—'],
      ['Musluk yalnız çalkalarken açık', 'Yaklaşık 1 litre', 'Yaklaşık 11 litre'],
    ],
    caption:
      'Tek bir fırçalamada boşa giden su, alışkanlık yıl boyunca ve bütün aile tarafından tekrarlandığında büyük bir miktara ulaşır. *(Kurgulanmış örnek ölçümdür; musluğun akış hızına göre değişir. Kendi ölçümünü yapmanı öneririz.)*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-surdur-tasarruf',
      title: 'Kaynakları tasarruflu kullanmak ve bir proje tasarlamak',
      lead: 'İki kazanım bir arada: tasarrufa özen göstermek (F.8.6.4.1) ve tasarruf için proje tasarlamak (F.8.6.4.2).',
      blocks: [
        {
          id: 'lgs-fen-surdur-tasarruf-anlatim',
          type: 'prose',
          body: `Tasarruf, bir ihtiyaçtan vazgeçmek değil; **gereksiz tüketimden** vazgeçmektir. Günlük hayatta dört kaynağa odaklanabilirsin.

**Su.** Dişlerini fırçalarken ve bulaşık yıkarken musluğu kapat. Damlayan muslukları ailene haber ver. Duşu kısa tut. Çamaşır ve bulaşık makinelerini tam dolmadan çalıştırma.

**Elektrik.** Odadan çıkarken ışığı kapat. Kullanmadığın cihazları bekleme modunda bırakma, fişten çek. Gün ışığından yararlan. Buzdolabının kapağını gereksiz yere açık tutma.

**Yakıt ve ısınma.** Kışın pencereleri uzun süre açık bırakma; kısa ve etkili havalandırma yap. Kısa mesafelerde araç yerine yürümeyi ya da bisikleti tercih et.

**Kâğıt ve malzeme.** Defterinin iki yüzünü kullan. Gereksiz çıktı alma. Okul malzemelerini bir sonraki yıl da kullan.

Şimdi ikinci kazanıma geçelim: **tasarruf için bir proje tasarlamak.** İyi bir proje rastgele değil, bir sırayla kurulur.

**1. Problemi belirle.** Nerede israf var? Örnek: “Okulun lavabolarında musluklar sık sık açık kalıyor.”

**2. Hedefi yaz.** Ne kadar tasarruf etmek istiyorsun, hangi sürede? Hedef ölçülebilir olmalıdır. Örnek: “Bir ay içinde okulun su tüketimini azaltmak.”

**3. Başlangıcı ölç.** Projeye başlamadan önceki durumu kaydet. Örnek: okulun su sayacını bir hafta boyunca her gün aynı saatte oku.

**4. Yöntemi seç.** Hangi değişiklikleri yapacaksın? Örnek: lavabolara hatırlatıcı afişler asmak, bozuk muslukları okul yönetimine bildirmek, sınıflarda “su nöbetçisi” seçmek.

**5. Uygula ve tekrar ölç.** Yöntemi bir süre uygula, sonra aynı ölçümü tekrarla. İki ölçümü karşılaştır.

**6. Sonucu paylaş.** Ne kadar tasarruf edildiğini okul panosunda paylaş. Başarılıysa yöntemi yay; başarısızsa nedenini araştır ve değiştir.

Üçüncü adıma dikkat et: **başlangıcı ölçmeden** yapılan bir proje, işe yarayıp yaramadığını hiçbir zaman gösteremez. Bu, deneylerde kontrol grubunun işlevine benzer.`,
        },
        {
          id: 'lgs-fen-surdur-tasarruf-surec',
          type: 'process',
          title: 'Proje kontrol listesi',
          intro: 'Tasarladığın proje bu beş soruya “evet” diyebilmeli.',
          steps: [
            { title: 'Problem somut mu?', body: 'İsrafın nerede ve nasıl olduğunu tek cümleyle söyleyebiliyor musun?' },
            { title: 'Hedef ölçülebilir mi?', body: 'Neyin ne kadar ve hangi sürede azalacağını yazdın mı?' },
            { title: 'Başlangıç ölçüldü mü?', body: 'Projeden önceki durumu kaydettin mi?' },
            { title: 'Yöntem uygulanabilir mi?', body: 'Seçtiğin yöntem okulunun ya da evinin imkânlarıyla yapılabilir mi?' },
            { title: 'Sonuç karşılaştırıldı mı?', body: 'Projeden sonraki ölçümü başlangıçla karşılaştırdın mı?' },
          ],
        },
        {
          id: 'lgs-fen-surdur-tasarruf-hafiza',
          type: 'memory',
          title: 'Sıralamayı unutma',
          body: '**Azalt → yeniden kullan → geri dönüştür.** En etkili olan en baştadır.',
        },
      ],
    },

    {
      id: 'lgs-fen-surdur-ayristirma',
      title: 'Katı atıkları ayrıştırmak ve geri dönüşümün ekonomiye katkısı',
      lead: 'F.8.6.4.3 ayrıştırmanın önemini, F.8.6.4.4 geri dönüşümün ekonomiye katkısını verilerle yorumlamayı ister.',
      blocks: [
        {
          id: 'lgs-fen-surdur-ayristirma-anlatim',
          type: 'prose',
          body: `**Ayrıştırma neden önemli?** Karışık atılan bir çöp torbası düşün: içinde yemek artıkları, plastik şişeler, kâğıtlar, cam kavanozlar bir arada. Bu torbadaki kâğıt yemek artığıyla ıslanmış ve kirlenmiştir; plastik ve cam birbirine karışmıştır. Bu malzemeleri ayırmak çok zordur; çoğu çöp alanına gider.

Oysa atıklar **kaynağında**, yani evde, okulda, iş yerinde ayrı toplanırsa temiz kalır ve kolayca geri dönüştürülebilir. Bu yüzden geri dönüşümün en önemli adımı fabrikada değil, **senin elinde** gerçekleşir.

Ayrıştırmanın faydalarını toplayalım:

- **Geri dönüşümü mümkün kılar:** temiz ve türüne göre ayrılmış malzeme yeniden hammadde olur.
- **Çöp alanlarını küçültür:** doğaya gömülen atık azalır.
- **Toprağı ve suyu korur:** pil ve elektronik atık gibi zararlı atıklar ayrı toplandığında toprağa ve suya karışmaz.
- **Organik atıkları değerlendirir:** kahverengi kutuda toplanan organik atıklardan kompost (doğal gübre) yapılabilir.

**Geri dönüşümün ülke ekonomisine katkısı.** Kimya endüstrisi dersinde katma değeri ve ithalatı konuşmuştuk. Aynı kavramlar burada da işe yarar:

- **Hammadde ithalatı azalır:** yeniden hammadde hâline gelen malzeme, dışarıdan alınması gereken hammaddenin yerini tutar.
- **Enerji tasarrufu sağlanır:** birçok malzemeyi geri dönüştürmek, hammaddeden sıfırdan üretmekten daha az enerji ister. Enerji ithal eden bir ülke için bu doğrudan bir ekonomik kazançtır.
- **İş imkânı oluşur:** atıkların toplanması, ayrılması ve işlenmesi yeni meslekler ve iş alanları yaratır.
- **Çevre maliyetleri azalır:** çöp alanlarının kurulması ve kirliliğin giderilmesi için harcanan kaynak azalır.

Kazanım bu katkının **araştırma verileri kullanılarak** yorumlanmasını ister. Aşağıdaki tablo bir veri okuma alıştırmasıdır. Gerçek veriler için resmî kurumların (çevre ve istatistik alanındaki kamu kurumlarının) yayımladığı raporlara başvurmalısın; kimya endüstrisi dersinde öğrendiğin gibi, her sayıyı **yılı, birimi ve kaynağıyla** birlikte kaydet.`,
        },
        {
          id: 'lgs-fen-surdur-ayristirma-veri',
          type: 'table',
          interactive: true,
          title: 'Veri okuma alıştırması: bir ilçede ayrı toplanan atıklar (örnek veri)',
          columns: ['Yıl', 'Ayrı toplanan atık (ton)', 'Çöp alanına giden atık (ton)', 'Toplama noktası sayısı'],
          rows: [
            ['1. yıl', '400', '9.600', '20'],
            ['2. yıl', '900', '9.100', '45'],
            ['3. yıl', '1.500', '8.500', '80'],
          ],
          caption:
            'Bu tablo gerçek bir ilçeye ait değildir; veri okumayı öğretmek için kurgulanmıştır. Toplama noktası sayısı arttıkça ayrı toplanan atığın arttığı, çöp alanına giden atığın azaldığı görülüyor.',
        },
        {
          id: 'lgs-fen-surdur-ayristirma-tuzak',
          type: 'trap',
          title: 'Bir ilişkiyi kesin neden–sonuç sanmak',
          wrong: 'Tabloya göre toplama noktası sayısını artırmak ayrı toplanan atığı kesinlikle artırır.',
          right: 'Tablo iki büyüklüğün **birlikte arttığını** gösterir; ama başka etkenler de rol oynamış olabilir (örneğin aynı dönemde yapılan bilgilendirme çalışmaları). Veri bir ilişkiyi **destekler**, tek başına kesin bir neden göstermez.',
          body: 'Veri yorumlarken dayanağın izin verdiğinden fazlasını iddia etme. “Destekliyor” ile “kanıtlıyor” arasındaki fark, bilimsel dilin en önemli ayrımlarından biridir.',
        },
      ],
    },

    {
      id: 'lgs-fen-surdur-gelecek',
      title: 'Tasarruf etmezsek gelecekte ne olur?',
      lead: 'F.8.6.4.5: tasarrufsuz kullanımın gelecekteki problemlerini belirt ve çözüm öner.',
      blocks: [
        {
          id: 'lgs-fen-surdur-gelecek-anlatim',
          type: 'prose',
          body: `Kaynakların tasarrufsuz kullanılmaya devam etmesi durumunda karşılaşılabilecek problemleri kaynak kaynak düşünelim. Burada da **olası** diliyle konuşacağız; gelecek kesin değildir, ama bugünkü eğilimlerden dayanaklı tahminler yapılabilir.

**Su:** Temiz su kaynakları nüfus ve tüketimdeki artışa yetişemeyebilir. Kuraklıkla birleştiğinde bazı bölgelerde **su kıtlığı** yaşanabilir; tarım ve içme suyu etkilenebilir.

**Enerji:** Yenilenemez kaynaklar tükendikçe **enerji maliyeti** artabilir; enerji ithal eden ülkelerin dışa bağımlılığı büyüyebilir. Fosil yakıt kullanımının sürmesi iklim değişikliğini derinleştirebilir.

**Toprak ve orman:** Bilinçsiz tarım ve yapılaşma **verimli toprakları** azaltabilir; ormanların yok edilmesi hem canlı türlerini hem karbon dengesini etkileyebilir.

**Atık:** Tüketim arttıkça çöp alanları büyüyebilir; **toprak ve su kirliliği** artabilir.

**Canlı çeşitliliği:** Yaşam alanlarının daralması bazı türlerin yok olmasına yol açabilir; besin ağları bozulabilir.

Şimdi bu problemleri çözüm önerilerine bağlayalım. İyi bir çözüm önerisi, asit yağmurlarında kurduğun üç parçalı yapıyla yazılır: **ne yapılmalı → hangi probleme dokunuyor → neden işe yarar.**

Örnek: *“Evlerde ve okullarda damlayan musluklar onarılmalıdır (ne yapılmalı). Bu, su kıtlığı problemine dokunur (hangi problem). Çünkü fark edilmeden boşa akan su her gün tekrarlanarak büyük bir kayba dönüşür; onarım bu kaybı doğrudan önler (neden işe yarar).”*

Çözüm önerileri üç düzeyde düşünülebilir:

- **Bireysel:** tasarruflu davranışlar, ayrıştırma, bilinçli tüketim.
- **Toplumsal:** okul ve mahalle projeleri, bilgilendirme çalışmaları, ortak toplama noktaları.
- **Ülke ölçeği:** yenilenebilir enerji yatırımları, geri dönüşüm altyapısı, kaynak kullanımını düzenleyen kurallar.

Üç düzey birbirini tamamlar. Ülke ölçeğindeki bir altyapı, bireyler ayrıştırma yapmadıkça işe yaramaz; bireylerin çabası ise altyapı olmadan sınırlı kalır.`,
        },
        {
          id: 'lgs-fen-surdur-gelecek-tablo',
          type: 'table',
          interactive: true,
          title: 'Problem ve çözüm eşleştirmesi',
          columns: ['Kaynak', 'Olası gelecek problemi', 'Çözüm önerisi', 'Düzey'],
          rows: [
            ['Su', 'Su kıtlığı', 'Damlayan muslukların onarılması, tasarruflu alışkanlıklar', 'Bireysel'],
            ['Enerji', 'Enerji maliyetinin artması, dışa bağımlılık', 'Yenilenebilir enerjiye yatırım', 'Ülke'],
            ['Atık', 'Çöp alanlarının büyümesi, kirlilik', 'Kaynağında ayrıştırma ve toplama noktaları', 'Toplumsal'],
            ['Orman', 'Karbon dengesinin bozulması, tür kaybı', 'Ağaçlandırma ve ormanların korunması', 'Ülke ve toplumsal'],
          ],
          caption: 'Her problem için birden çok düzeyde çözüm önerilebilir; en güçlü çözümler düzeylerin birlikte çalıştığı çözümlerdir.',
        },
        {
          id: 'lgs-fen-surdur-gelecek-baglanti',
          type: 'connection',
          title: 'Ünite nasıl kapanıyor?',
          body: 'Bu ders Enerji Dönüşümleri ve Çevre Bilimi ünitesinin son dersidir; ünitedeki bütün kavramlar burada bir davranışa dönüşür.',
          links: [
            'Besin zinciri → zararlı maddelerin doğaya karışmaması neden önemli?',
            'Fotosentez → ormanları korumak neden karbon dengesini korur?',
            'Madde döngüleri → geri dönüşüm, insan eliyle kurulan bir madde döngüsüdür.',
            'Ekolojik ayak izi → tasarruf ve ayrıştırma ayak izini küçültür.',
            'Elektrik ünitesinde bilinçli ve tasarruflu elektrik kullanımını ayrıca göreceksin.',
          ],
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Atığı doğru kutuya at',
      prompt:
        'Aşağıdaki atıkların hangi renkteki kutuya atılacağını yaz: (a) boş cam reçel kavanozu, (b) okunmuş gazete, (c) boş plastik su şişesi, (d) elma kabuğu, (e) boş metal içecek kutusu.',
      steps: [
        { title: '1. Cam', body: '(a) Cam kavanoz → **yeşil** kutu.' },
        { title: '2. Kâğıt', body: '(b) Gazete → **mavi** kutu.' },
        { title: '3. Plastik', body: '(c) Plastik şişe → **sarı** kutu.' },
        { title: '4. Organik', body: '(d) Elma kabuğu → **kahverengi** kutu; kompost yapılabilir.' },
        { title: '5. Metal', body: '(e) Metal içecek kutusu → **açık gri** kutu.' },
      ],
      answer: '(a) yeşil, (b) mavi, (c) sarı, (d) kahverengi, (e) açık gri.',
      takeaway: 'Renk standardı ülke genelinde ortaktır; bir kez öğrendiğin kural her yerde işe yarar.',
    },
    {
      title: 'Seviye 2 — Veriyi yorumla',
      prompt:
        'Örnek veri tablosuna göre üç yılda ayrı toplanan atık 400 tondan 1.500 tona, çöp alanına giden atık 9.600 tondan 8.500 tona değişmiş. Bu veriden hangi sonuçlar çıkarılabilir, hangisi çıkarılamaz?',
      steps: [
        { title: '1. Eğilimi oku', body: 'Ayrı toplanan atık her yıl **artmış**, çöp alanına giden atık her yıl **azalmış.**' },
        { title: '2. Toplamı kontrol et', body: 'Her yıl iki sütunun toplamı 10.000 ton. Yani toplam atık aynı kalmış; değişen, atığın **nereye gittiği.**' },
        { title: '3. Çıkarılabilecek sonucu yaz', body: 'Ayrı toplamanın artması, çöp alanına giden atığın azalmasıyla birlikte görülüyor. Bu, ayrı toplamanın çöp alanlarını küçültmeye katkı sağladığını **destekler.**' },
        { title: '4. Çıkarılamayacak sonucu yaz', body: 'Tablo, toplama noktası sayısının artışının **tek neden** olduğunu kanıtlamaz; başka etkenler de rol oynamış olabilir.' },
        { title: '5. Çözüm önerisine bağla', body: 'Veri, toplama noktalarının artırılmasının ve bilgilendirme çalışmalarının sürdürülmesinin yararlı olabileceğini düşündürür.' },
      ],
      answer:
        'Ayrı toplamanın artması çöp alanına giden atığın azalmasıyla birlikte görülmüştür; bu, ayrıştırmanın çöp alanlarını küçülttüğünü destekler. Ancak artışın tek nedeninin toplama noktası sayısı olduğu kesin olarak söylenemez.',
      takeaway: 'Veriden çıkarım yaparken “destekliyor” ile “kanıtlıyor” arasındaki farkı koru.',
    },
    {
      title: 'Seviye 3 — Bir proje tasarla',
      prompt:
        'Okulunda sınıflarda ışıkların teneffüslerde ve ders bitiminde açık kaldığını fark ettin. Elektrik tasarrufu için bir proje tasarla.',
      steps: [
        { title: '1. Problemi yaz', body: 'Teneffüslerde ve ders bitiminde boş sınıflarda ışıklar açık kalıyor.' },
        { title: '2. Hedefi yaz', body: 'Bir ay içinde boş sınıflarda ışıkların açık kalma sayısını azaltmak.' },
        { title: '3. Başlangıcı ölç', body: 'Bir hafta boyunca her teneffüste boş sınıflardan kaçında ışığın açık kaldığını say ve kaydet.' },
        { title: '4. Yöntemi seç', body: 'Her sınıfta bir “enerji nöbetçisi” seç; kapıların yanına hatırlatıcı küçük afişler as.' },
        { title: '5. Uygula ve tekrar ölç', body: 'Üç hafta uygula; son haftada aynı sayımı tekrarla ve başlangıçla karşılaştır.' },
        { title: '6. Paylaş', body: 'Sonucu okul panosunda paylaş. Başarılıysa yöntemi bütün okula yay; değilse nedenini araştır.' },
      ],
      answer:
        'Başlangıç sayımı yapılır, sınıflarda enerji nöbetçisi ve hatırlatıcı afişlerle üç hafta uygulama yapılır, sonra sayım tekrarlanıp karşılaştırılır ve sonuç paylaşılır.',
      takeaway: 'Başlangıcı ölçmeyen bir proje işe yarayıp yaramadığını gösteremez.',
    },
  ],

  dailyLife: {
    title: 'Sürdürülebilir yaşam hayatın neresinde?',
    body: 'Sürdürülebilirlik büyük kararlardan çok, her gün tekrarlanan küçük seçimlerle kurulur.',
    links: [
      'Kumaş çanta kullanmak tek kullanımlık poşet tüketimini azaltır.',
      'Pilleri ayrı toplama kutularına atmak toprağı ve suyu korur.',
      'Evde organik atıklardan kompost yapmak bahçe için doğal gübre sağlar.',
      'Okul kitaplarını ve kıyafetleri bir sonraki kullanıcıya bırakmak yeniden kullanımın bir örneğidir.',
      'Enerji verimli cihazları seçmek elektrik tüketimini azaltır.',
      'Kullanılmış kızartma yağını lavaboya dökmemek su kaynaklarını korur.',
    ],
  },

  questionClue: {
    concept: 'Sürdürülebilirlik sorusu',
    statement:
      'Soruda tasarruf davranışları, atık ayrıştırma, geri dönüşüm verileri ya da bir proje anlatılıyorsa, ölçülen şey bu dersin kazanımlarıdır.',
    clues: [
      'Renkli atık kutuları ya da atık türleri',
      'Geri dönüşümle ilgili bir veri tablosu ya da grafik',
      '“Azaltma, yeniden kullanma, geri dönüştürme” ifadeleri',
      'Bir okul ya da ev projesinin aşamaları',
      'Tasarrufsuzluğun gelecekteki sonuçlarına dair bir durum',
    ],
    reasoning:
      'Bu işaretler üç beceri ister: davranışları doğru sınıflandırmak, veriden dayanaklı çıkarım yapmak ve bir proje ya da çözüm önerisini gerekçelendirmek.',
    boundary:
      'Bu ipuçlarını “geri dönüşüm her şeyi çözer” gibi bir kısayola çevirme; sıralama azaltma → yeniden kullanma → geri dönüştürmedir. Veri sorularında ise tablonun gösterdiğinden fazlasını iddia eden seçeneğe dikkat et.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar bu beş kazanımın ölçülebileceği soru biçimleridir.',
    patterns: [
      'Tasarruflu davranış örneklerinin seçilmesi',
      'Atıkların türüne göre doğru toplama kutusuyla eşleştirilmesi',
      'Geri dönüşüm verilerinin bir tablo ya da grafikten yorumlanması',
      'Bir tasarruf projesinin eksik aşamasının bulunması',
      'Tasarrufsuzluğun gelecekteki sonuçlarının belirlenmesi',
      'Bir çözüm önerisinin gerekçelendirilmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Geri dönüşüm çok önemli olduğu hâlde neden “azaltmak” ondan önce gelir?',
      hint: 'Geri dönüşüm de bir kaynak harcar mı?',
      answer:
        'Çünkü **azaltmak** atığın hiç oluşmamasını sağlar ve hiçbir kaynak harcamaz. Geri dönüşüm ise değerli olsa da atığın toplanması, taşınması ve işlenmesi için **enerji harcar.** Bu yüzden en etkili olan en baştadır: önce azalt, sonra yeniden kullan, en son geri dönüştür. Kalıcı çözüm zincirin başına, yani ihtiyaca yerleşir.',
    },
    {
      prompt:
        'Atıkların kaynağında ayrıştırılması neden bu kadar önemlidir?',
      hint: 'Karışık bir çöp torbasındaki kâğıda ne olur?',
      answer:
        'Karışık atılan çöpte malzemeler birbirini kirletir: kâğıt yemek artığıyla ıslanır, plastik ve cam birbirine karışır. Bu malzemeleri sonradan ayırmak çok zordur ve çoğu çöp alanına gider. Atıklar **kaynağında**, yani evde ve okulda ayrı toplanırsa temiz kalır ve kolayca geri dönüştürülebilir. Ayrıca pil gibi zararlı atıkların toprağa ve suya karışması önlenir.',
    },
    {
      prompt:
        'Geri dönüşüm ülke ekonomisine nasıl katkı sağlar? İki yol yaz.',
      hint: 'Kimya endüstrisi dersindeki ithalat ve katma değer kavramlarını kullan.',
      answer:
        'Birincisi, geri dönüştürülen malzeme yeniden hammadde olduğu için **dışarıdan alınması gereken hammadde azalır**; bu da ithalatı düşürür. İkincisi, birçok malzemeyi geri dönüştürmek hammaddeden sıfırdan üretmekten **daha az enerji** ister; enerji ithal eden bir ülke için bu doğrudan bir kazançtır. Ayrıca atıkların toplanması ve işlenmesi yeni iş imkânları yaratır.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey davranış, veri ve öneri',
    body:
      'Beş kazanımın fiillerine bak: “özen gösterir”, “proje tasarlar”, “önemini açıklar”, “araştırma verilerini kullanarak çözüm önerileri sunar”, “problemleri belirterek çözüm önerileri sunar”. Bu fiillerin çoğu bir davranışı ve bir değerlendirmeyi ister. Bu yüzden senden ezber değil; tasarruflu davranışı tanıman, bir veri tablosundan dayanaklı çıkarım yapman ve gerekçeli bir çözüm önermen beklenir.',
    measures: [
      'Sürdürülebilir yaşamı açıklayabilme',
      'Tasarruflu davranışları ayırt edebilme',
      'Atıkları türüne göre doğru kutuyla eşleştirebilme',
      'Geri dönüşüm verilerinden dayanaklı çıkarım yapabilme',
      'Ölçülebilir hedefi olan bir tasarruf projesi tasarlayabilme',
      'Tasarrufsuzluğun sonuçlarına gerekçeli çözüm önerebilme',
    ],
  },

  simulationTable: {
    title: 'Bir okulun su tasarrufu projesi (örnek veri)',
    columns: ['Hafta', 'Yapılan uygulama', 'Haftalık su tüketimi (m³)'],
    rows: [
      ['1', 'Uygulama yok (başlangıç ölçümü)', '60'],
      ['2', 'Hatırlatıcı afişler asıldı', '54'],
      ['3', 'Damlayan musluklar onarıldı', '45'],
      ['4', 'Afişler ve onarım sürdü', '44'],
    ],
    caption: 'Tablo, veri okuma alıştırması için kurgulanmıştır; öğrenci sayısı ve hava koşulları dört haftada benzer kabul edilmiştir.',
  },

  simulation: {
    title: 'Mini uygulama — özgün proje verisi',
    passage: `Bir okulda öğrenciler su tasarrufu projesi yürütüyor ve dört hafta boyunca haftalık su tüketimini ölçüyor. Veriler yukarıdaki tabloda verilmiştir.

Öğrenciler, projenin sonuçlarını okul panosunda paylaşmak için bir cümle seçecek.`,
    question: 'Bu verilere göre panoya yazılacak en doğru cümle hangisidir?',
    options: [
      {
        text: 'Uygulamalardan sonra haftalık su tüketimi başlangıca göre azaldı; en büyük düşüş musluklar onarıldıktan sonra görüldü.',
        explanation:
          'Doğru cevap. Tüketim 60’tan 44’e inmiş, en büyük haftalık düşüş (54’ten 45’e) onarımdan sonra görülmüştür. Cümle verinin gösterdiğini aşmadan özetliyor.',
      },
      {
        text: 'Afişler su tüketimini tamamen durdurdu.',
        explanation:
          'Afişlerden sonra tüketim 60’tan 54’e inmiştir; azalmıştır ama durmamıştır. Bu cümle verinin gösterdiğinden fazlasını iddia ediyor.',
      },
      {
        text: 'Proje hiçbir işe yaramadı; çünkü okul hâlâ su kullanıyor.',
        explanation:
          'Tasarrufun amacı suyu hiç kullanmamak değil, israfı azaltmaktır. Veri tüketimin belirgin biçimde azaldığını gösteriyor.',
      },
      {
        text: 'Su tüketimindeki azalmanın tek nedeni hava koşullarıdır.',
        explanation:
          'Tabloda hava koşullarının dört haftada benzer olduğu belirtilmiş. Üstelik azalma uygulamaların başladığı haftalarla birlikte görülüyor; bu cümle veriyle desteklenmiyor.',
      },
      {
        text: 'Dördüncü haftada tüketim en çok azaldı; bu yüzden en etkili uygulama dördüncü haftada yapıldı.',
        explanation:
          'Dördüncü haftada tüketim 45’ten 44’e, yani çok az düşmüştür. En büyük düşüş üçüncü haftadadır. Ayrıca dördüncü haftada yeni bir uygulama yapılmamıştır.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru, verinin gösterdiğini aşmadan özetleyen cümleyi istiyor. Yöntem: her seçeneği tabloyla sına; tablonun söylemediği bir şeyi iddia eden seçeneği ele.',
    critical_point:
      'Kritik nokta haftalık farkları hesaplamaktır: 60→54 (6), 54→45 (9), 45→44 (1). En büyük düşüşün hangi uygulamadan sonra geldiğini ancak farklara bakarak görebilirsin.',
    takeaway: 'İyi bir özet cümle, verinin gösterdiğini söyler; fazlasını iddia etmez.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Sürdürülebilir yaşam ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: [
        'Bugünün ihtiyaçlarını, gelecek kuşakların ihtiyaçlarını tehlikeye atmadan karşılamaktır',
        'Kaynakları hiç kullanmamaktır',
        'Yalnız geri dönüşüm yapmaktır',
        'Yalnız yenilenemez kaynakları korumaktır',
      ],
      answer_index: 0,
      explanation:
        'Sürdürülebilir yaşam, bugünün ihtiyaçlarını gelecek kuşakların kendi ihtiyaçlarını karşılama imkânını tüketmeden karşılamaktır. Kaynakları hiç kullanmamak mümkün değildir; amaç israfı önlemektir. Geri dönüşüm sürdürülebilirliğin yalnız bir parçasıdır. Yenilenebilir kaynaklar da bilinçli kullanılmalıdır.',
    },
    {
      purpose: 'apply',
      question: 'Boş bir cam şişe Sıfır Atık renk standardına göre hangi renkteki kutuya atılmalıdır?',
      options: [
        'Mavi',
        'Sarı',
        'Yeşil',
        'Kahverengi',
      ],
      answer_index: 2,
      explanation:
        'Sıfır Atık renk standardına göre cam atıklar yeşil kutuya atılır. Mavi kutu kâğıt ve karton, sarı kutu plastik, kahverengi kutu organik atıklar içindir. Metal atıklar açık gri, geri dönüştürülemeyen atıklar koyu gri kutuya atılır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Atıklarımı geri dönüşüme attığım sürece istediğim kadar tüketebilirim.” diyor. Bu düşüncenin hatası nedir?',
      options: [
        'Azaltmanın geri dönüşümden daha etkili olduğunu ve geri dönüşümün de enerji harcadığını gözden kaçırmak',
        'Atık kutularının renklerini bilmemek',
        'Yenilenebilir kaynakları tanımamak',
        'Proje tasarlamayı bilmemek',
      ],
      answer_index: 0,
      explanation:
        'Geri dönüşüm değerlidir; ama atığın toplanması, taşınması ve işlenmesi enerji harcar. En etkili çözüm tüketimi azaltmaktır; sonra yeniden kullanmak, en son geri dönüştürmek gelir. Geri dönüşüm tüketimi azaltmanın yerini tutmaz.',
    },
  ],

  summary: [
    'Sürdürülebilir yaşam, bugünün ihtiyaçlarını gelecek kuşakların ihtiyaçlarını tehlikeye atmadan karşılamaktır.',
    'Yenilenebilir kaynaklar da sınırsız değildir; bilinçli kullanılmalıdır.',
    'Tasarruf ihtiyaçtan değil, gereksiz tüketimden vazgeçmektir.',
    'Etkililik sıralaması: azalt → yeniden kullan → geri dönüştür.',
    'Geri dönüşüm için atıkların kaynağında ayrıştırılması şarttır.',
    'Renk standardı: mavi kâğıt, sarı plastik, yeşil cam, açık gri metal, kahverengi organik, koyu gri diğer.',
    'Pil, elektronik atık ve atık yağ için ayrı toplama noktaları vardır.',
    'Geri dönüşüm hammadde ithalatını azaltır, enerji tasarrufu sağlar ve iş imkânı yaratır.',
    'Veriden çıkarım yaparken “destekliyor” ile “kanıtlıyor” arasındaki fark korunmalıdır.',
    'İyi bir tasarruf projesi ölçülebilir bir hedefle ve başlangıç ölçümüyle başlar.',
    'Tasarrufsuzluk su kıtlığı, enerji sorunları, kirlilik ve tür kaybı gibi problemlere yol açabilir.',
    'Çözüm önerileri bireysel, toplumsal ve ülke ölçeğinde birlikte düşünülmelidir.',
  ],

  next: [
    'Elektriklenme ve Elektrik Yükleri (F.8.7.1.1–F.8.7.1.3)',
    'Elektrik Enerjisinin Dönüşümü ve Güç Santralleri (F.8.7.3 — tasarruflu elektrik kullanımı)',
    'Madde Döngüleri ve Küresel İklim Değişikliği (tekrar için)',
  ],
})

export default lesson
