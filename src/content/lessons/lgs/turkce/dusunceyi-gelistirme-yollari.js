import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Paragrafta Anlam · 4. ders
 * Kazanım : T.8.3.34 · T.8.1.12
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * PROGRAM SINIRI — ÖNEMLİ
 * T.8.1.12'nin açıklamasında 8. sınıf için üç yol AÇIKÇA sayılır:
 * örneklendirme, tanık gösterme ve sayısal verilerden yararlanma.
 * T.8.3.34'te böyle bir sınırlama yoktur. Bu ders, programın açıkça
 * saydığı üçünü merkeze alır; tanımlama, karşılaştırma ve benzetmeyi
 * ise "programda ayrıca sayılmayan ama okuma kazanımının kapsamına
 * giren yollar" olarak işler ve bunu öğrenciye açıkça söyler.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-dusunceyi-gelistirme-yollari',
  topic: 'Paragrafta Anlam',
  order: 4,
  title: 'Düşünceyi Geliştirme Yolları',
  subtitle:
    'Yazar bir şey iddia eder, sonra onu destekler. Destek türünü tanımak, paragrafın iskeletini görmek demektir.',
  minutes: 42,
  kazanimlar: [
    { kod: 'T.8.3.34', metin: 'Okuduklarında kullanılan düşünceyi geliştirme yollarını belirler.' },
    { kod: 'T.8.1.12', metin: 'Dinlediklerinde/izlediklerinde başvurulan düşünceyi geliştirme yollarını tespit eder.' },
  ],
  prerequisites: [
    { topic: 'Anlatım biçimleri', why: 'Düşünceyi geliştirme yolu anlatım biçiminden farklıdır; ayrımı önce kurmak gerekir.' },
    { topic: 'Konu ve ana fikir', why: 'Desteklenen düşünceyi bulamazsan desteğin türünü de adlandıramazsın.' },
  ],
  outcomes: [
    'Bir paragraftaki savı ve o savı destekleyen bölümü ayırabileceksin.',
    'Örneklendirme, tanık gösterme ve sayısal verilerden yararlanmayı kesin ölçütlerle ayırabileceksin.',
    'Tanımlama, karşılaştırma ve benzetmeyi tanıyabileceksin.',
    'Bir paragrafta birden çok yol kullanıldığını fark edip hepsini sayabileceksin.',
    '“Hangisine başvurulmamıştır?” sorularını yol yol tarayarak çözebileceksin.',
  ],

  opening: {
    title: 'İddia yalnız kalmaz',
    lead: 'Bir yazar bir şey ileri sürdüğünde, arkasından hemen bir destek gelir. Soru da genellikle o desteği sorar.',
    body: `Bir paragrafta şu cümleyi okuduğunu düşün: “Küçük ama sürekli çalışma, aralıklı ve yoğun çalışmadan daha çok sonuç verir.” Bu bir **iddiadır**. Bir iddia tek başına kalırsa okur onu havada bulur. Bu yüzden yazar hemen arkasından bir destek getirir.

Destek pek çok biçimde gelebilir. Yazar bir **örnek** verebilir: “Her akşam beş sayfa okuyan bir öğrenci, yılda on kitap bitirir.” Bir **uzmanın sözünü** aktarabilir: “Bir eğitimci şöyle der: ‘Öğrenme, tekrarın aralığıyla güçlenir.’” **Sayı** verebilir: “Araştırmaya katılan öğrencilerin yüzde altmışı…” İki durumu **karşılaştırabilir**. Kavramı **tanımlayabilir**. Bir **benzetme** kurabilir.

İşte bu destek türlerine **düşünceyi geliştirme yolları** denir. MEB 8. sınıf programındaki **T.8.3.34** kazanımı, okuduklarında kullanılan düşünceyi geliştirme yollarının belirlenmesini ister. Aynı becerinin dinleme tarafı olan **T.8.1.12**, 8. sınıf için üç yolu **açıkça** sayar: **örneklendirme, tanık gösterme ve sayısal verilerden yararlanma.**

Bu derste bu üçünü merkeze alacağız; çünkü program onları açıkça adlandırıyor. Ardından **tanımlama, karşılaştırma ve benzetme**yi de tanıyacağız — bunlar programda 8. sınıf için ayrıca sayılmasa da okuma kazanımının kapsamına girer ve metinlerde sık karşına çıkar.

Önce geçen dersten kalan ayrımı tekrar hatırlayalım: **düşünceyi geliştirme yolu, anlatım biçimi değildir.** Anlatım biçimi metnin dokusudur (öyküleyici, betimleyici, açıklayıcı, tartışmacı); düşünceyi geliştirme yolu o dokunun içinde kullanılan bir araçtır. Soru kökündeki terimi kelime kelime oku.`,
  },

  concepts: [
    {
      term: 'Örneklendirme',
      body: 'Genel bir yargının kapsamına giren somut bir durumun verilmesidir. İmzası: “örneğin, söz gelimi, mesela” ya da doğrudan somut bir durumun sıralanması. Örnek **adsızdır**: belirli bir kişinin sözü değil, bir durumdur.',
    },
    {
      term: 'Tanık gösterme',
      body: 'Bir düşüncenin, sözü değerli sayılan birinin **ifadesiyle** desteklenmesidir. İmzası: bir kişi adı, bir unvan ya da tırnak içinde bir alıntı. Örneklendirmeden farkı, ortada bir **söz sahibinin** bulunmasıdır.',
    },
    {
      term: 'Sayısal verilerden yararlanma',
      body: 'Düşüncenin sayı, oran, yüzde, istatistik ya da ölçümle desteklenmesidir. Her sayı bu yola girmez: sayının bir yargıyı **destekliyor** olması gerekir.',
    },
    {
      term: 'Tanımlama',
      body: 'Bir kavramın ne olduğunun açıklanmasıdır: “X, … olan şeydir.” Genellikle paragrafın başında bulunur ve okurun ortak bir zemine oturmasını sağlar.',
    },
    {
      term: 'Karşılaştırma',
      body: 'İki varlık, durum ya da kavramın aynı eksende değerlendirilmesidir; üstünlük, eşitlik ya da farklılık bildirir. Cümlede iki taraf bulunması zorunludur.',
    },
    {
      term: 'Benzetme',
      body: 'Bir kavramın, daha bilinen bir başka kavramın özelliğiyle anlatılmasıdır: “Dikkat, bir kas gibidir; kullanılmazsa zayıflar.” Amaç ölçmek değil, anlaşılır kılmaktır.',
    },
  ],

  why: {
    question: 'Neden örneklendirme ile tanık gösterme bu kadar sık karışıyor?',
    body: `Çünkü ikisi de somut bir şey getirir ve ikisi de savı destekler. Ama aralarında tek ve kesin bir fark vardır: **tanık göstermede bir söz sahibi vardır.**

Şu iki cümleyi karşılaştır. “Düzenli çalışmanın etkisini görmek zor değil: her akşam beş sayfa okuyan bir öğrenci yılda on kitap bitirir.” Burada bir durum anlatılıyor; kimsenin sözü aktarılmıyor. Bu **örneklendirmedir**.

“Bir eğitimci bunu şöyle özetler: ‘Öğrenme, tekrarın sıklığıyla değil aralığıyla güçlenir.’” Burada bir kişinin — adı verilmese bile bir unvanla anılan birinin — sözü aktarılıyor. Bu **tanık göstermedir**.

Ölçütü tek cümleye indir: **Ortada birinin söylediği bir söz var mı?** Varsa tanık gösterme, yoksa örneklendirme.

Bir ayrıntı: tanık gösterme için kişinin adının verilmesi şart değildir. “Ünlü bir bilim insanına göre…”, “Bir uzman şöyle diyor…” gibi ifadeler de tanık göstermedir; çünkü sözün bir sahibi vardır ve yazar o sahibin otoritesine yaslanmaktadır.

Sayısal verilerde de benzer bir incelik var. Her sayı sayısal veri değildir. “1998’de doğdu.” cümlesindeki tarih bir bilgi ögesidir, bir savı desteklemez. Ama “Katılımcıların yüzde altmışı bu görüşü paylaşıyor.” cümlesindeki oran, açıkça bir yargıyı destekler. **Sayının bir savın hizmetinde olması** gerekir.

Bu iki inceliği kurduğunda, bu konudaki soruların çoğu doğrudan çözülür hâle gelir; çünkü çeldiriciler neredeyse her zaman bu iki ayrımdan üretilir.`,
  },

  decision: {
    title: 'Destek türünü adlandırma yolu',
    lead: 'Önce savı bul, sonra desteği bul, en sonunda türünü adlandır.',
    intro:
      'Düşünceyi geliştirme yolu sorusunda şu beş durağı uygula. İkinci durak atlanırsa geri kalanı anlamsızlaşır.',
    steps: [
      {
        title: '1. Savı bul',
        body: 'Paragrafta yazarın ileri sürdüğü düşünceyi belirle. Genellikle bir yargı cümlesidir ve çoğu zaman paragrafın başında ya da sonunda bulunur.',
      },
      {
        title: '2. Desteği ayır',
        body: 'Savdan sonra ya da önce gelen ve onu güçlendiren bölümü işaretle. Bu bölüm bir cümle de olabilir, üç cümle de. Desteği ayırmadan tür adlandırmaya çalışma.',
      },
      {
        title: '3. Söz sahibi var mı?',
        body: 'Destekte bir kişinin sözü, bir alıntı ya da bir unvan geçiyorsa **tanık gösterme**dir. Yoksa dördüncü durağa geç.',
      },
      {
        title: '4. Sayı bir savı mı destekliyor?',
        body: 'Destekte oran, yüzde, istatistik ya da ölçüm varsa ve bu sayı savı güçlendiriyorsa **sayısal verilerden yararlanma**dır. Yalnız bilgi ögesi olan tarihler bu yola girmez.',
      },
      {
        title: '5. Kalan yolları sırayla dene',
        body: 'Destek bir kavramın ne olduğunu söylüyorsa tanımlama; kapsama giren somut bir durumsa örneklendirme; iki tarafı aynı eksende ölçüyorsa karşılaştırma; bir şeyi başka bir şeyin özelliğiyle anlatıyorsa benzetmedir.',
      },
    ],
    takeaway: 'Destek türünü adlandırmadan önce desteğin neyi desteklediğini göster.',
  },

  decisionTree: {
    title: 'Programda açıkça sayılan üç yolu ayır',
    intro:
      'Bu üç kontrol, 8. sınıf programının adını açıkça andığı üç yolu birbirinden ayırır.',
    checks: [
      {
        question: 'Destekte birinin söylediği bir söz var mı (alıntı, isim, unvan)?',
        yes: 'Tanık göstermedir. Örnek: “Bir eğitimci şöyle der: …”',
        no: 'Söz sahibi yok; ikinci kontrole geç.',
      },
      {
        question: 'Destekte bir sayı, oran veya istatistik var ve bu sayı savı güçlendiriyor mu?',
        yes: 'Sayısal verilerden yararlanmadır. Örnek: “Katılımcıların yüzde altmışı…”',
        no: 'Sayı yok ya da yalnız bilgi ögesi; üçüncü kontrole geç.',
      },
      {
        question: 'Destek, savın kapsamına giren somut bir durum mu?',
        yes: 'Örneklendirmedir. Örnek: “Her akşam beş sayfa okuyan bir öğrenci…”',
        no: 'Bu üç yoldan biri değil; tanımlama, karşılaştırma veya benzetme olabilir.',
      },
    ],
    takeaway:
      'Sıra önemlidir: söz sahibi kontrolünü başa koymamızın sebebi, tanık göstermenin örneklendirmeyle en çok karışan yol olmasıdır.',
  },

  comparison: {
    title: 'Programda adı geçen üç yolu ölçütle ayır',
    columns: ['Örneklendirme', 'Tanık gösterme', 'Sayısal veri'],
    rows: [
      { label: 'Ölçüt', values: ['Somut bir durum verilir', 'Bir söz sahibinin ifadesi aktarılır', 'Sayı, oran veya ölçüm verilir'] },
      { label: 'Söz sahibi', values: ['Yok', 'Var (ad ya da unvan)', 'Gerekmez'] },
      { label: 'İmzası', values: ['örneğin, söz gelimi, mesela', 'tırnak içi alıntı, “…göre”, unvan', 'yüzde, oran, istatistik'] },
      { label: 'Özgün örnek', values: ['Örneğin her akşam beş sayfa okuyan biri yılda on kitap bitirir.', 'Bir eğitimciye göre öğrenme, tekrarın aralığıyla güçlenir.', 'Ankete katılan öğrencilerin yüzde altmışı düzenli okuduğunu söylüyor.'] },
      { label: 'Sık yapılan hata', values: ['Tanık göstermeyle karıştırmak', 'Adı verilmeyince örnek sanmak', 'Her tarihi sayısal veri saymak'] },
    ],
    insight:
      'Üç yol aynı paragrafta bir arada bulunabilir. Soru “hangisine başvurulmamıştır?” diyorsa üçünü de tek tek ara.',
  },

  traps: [
    {
      title: 'Adı verilmeyen alıntıyı örnek sanmak',
      wrong: '“Bir uzman şöyle diyor…” — kişinin adı yok, öyleyse tanık gösterme değil.',
      right: 'Tanık gösterme için adın verilmesi şart değildir. Bir söz sahibinin bulunması ve sözünün aktarılması yeterlidir.',
      body: 'Yazar “bir bilim insanına göre”, “bir öğretmenin deyişiyle” dediğinde de otoriteye yaslanıyordur. Ölçüt ad değil, sözün sahipli olmasıdır.',
    },
    {
      title: 'Her sayıyı sayısal veri saymak',
      wrong: 'Paragrafta 1998 yazıyor; sayısal verilerden yararlanılmış.',
      right: 'O tarih bir savı destekliyor mu? Desteklemiyorsa yalnız bir bilgi ögesidir; düşünceyi geliştirme yolu değildir.',
      body: 'Ölçüt sayının varlığı değil, işlevi. Sayının bir yargıyı güçlendirdiğini gösterebilmelisin.',
    },
    {
      title: 'Tanımlamayı açıklayıcı anlatımla karıştırmak',
      wrong: 'Metin bilgi veriyor; tanımlama yapılmış demektir.',
      right: 'Tanımlama, bir kavramın **ne olduğunu** söyleyen cümledir: “X, … olan şeydir.” Her bilgi cümlesi tanım değildir.',
      body: 'Açıklayıcı anlatım metnin dokusudur; tanımlama ise o dokunun içinde kullanılan tek bir tekniktir. İki farklı katman.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-gelistirme-uc-yol',
      title: 'Programın açıkça saydığı üç yol',
      lead: 'Örneklendirme, tanık gösterme ve sayısal verilerden yararlanma — 8. sınıf programında adı geçen üç yol.',
      blocks: [
        {
          id: 'lgs-gelistirme-uc-anlatim',
          type: 'prose',
          body: `**Örneklendirme**, en çok kullanılan yoldur. Yazar genel bir yargı söyler, sonra o yargının kapsamına giren somut bir durumu verir. Bu durum bir olay, bir kişi, bir nesne ya da bir davranış olabilir. Önemli olan, verilen şeyin **savın altına girmesi**dir. “Bazı kuşlar mevsime göre göç eder; leylekler her yıl aynı yolu izler.” Leylek, savın kapsamına giren somut bir durumdur.

Örneklendirmenin bazen açık imzası vardır: *örneğin, söz gelimi, mesela, gibi*. Ama çoğu zaman imza yoktur; yazar doğrudan somut duruma geçer. Bu yüzden imzaya değil ilişkiye bak: verilen şey savın altına giriyor mu?

**Tanık gösterme**, savı bir başkasının sözüyle destekler. Yazar kendi otoritesine değil, sözü değerli sayılan birinin otoritesine yaslanır. İmzası nettir: tırnak içi bir alıntı, bir ad, bir unvan ya da “…göre” yapısı. “Bir eğitimciye göre öğrenme, tekrarın aralığıyla güçlenir.”

Bir ayrıntı: atasözü de bir tür tanık gösterme sayılabilir mi? Atasözünün söyleyeni belli değildir; ama toplumun ortak deneyimini temsil eder. LGS düzeyinde atasözüyle yapılan destek genellikle **tanık gösterme** başlığı altında değerlendirilir; yine de soru seçeneklerinde ikisi birlikte verilirse, adı belli bir kişinin sözünü tanık gösterme saymak daha güvenlidir.

**Sayısal verilerden yararlanma**, savı ölçülebilir bir veriyle destekler: oran, yüzde, sıklık, miktar. Bu yolun gücü nesnelliğinden gelir; okur bir sayı gördüğünde savın denetlenebilir bir zemini olduğunu düşünür.

Ama dikkat: sayının **savı desteklemesi** gerekir. Bir metinde geçen doğum tarihi, sokak numarası ya da sayfa sayısı, bir yargıyı güçlendirmiyorsa bu yola girmez. Testi şöyle uygula: bu sayıyı silsem, sav zayıflar mı? Zayıflıyorsa sayısal veridir.`,
        },
        {
          id: 'lgs-gelistirme-uc-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı sav, üç farklı destek',
          columns: ['Yol', 'Destek cümlesi (özgün)', 'Söz sahibi?', 'Sayı?'],
          rows: [
            ['Örneklendirme', 'Her akşam beş sayfa okuyan bir öğrenci, yıl sonunda on kitap bitirir.', 'Yok', 'Var ama savı sayı taşımıyor'],
            ['Tanık gösterme', 'Bir eğitimci bunu şöyle özetliyor: “Aralıklı tekrar, yoğun tekrardan güçlüdür.”', 'Var', 'Yok'],
            ['Sayısal veri', 'Ankete katılan öğrencilerin yüzde altmış ikisi düzenli okuduğunu söylüyor.', 'Yok', 'Var ve savı taşıyor'],
            ['Karışık örnek', 'Bir öğretmene göre bu oran sınıfta yüzde yetmişe kadar çıkabiliyor.', 'Var', 'Var'],
            ['Yol değil', 'Kitap 1998’de yayımlandı.', 'Yok', 'Var ama savı desteklemiyor'],
          ],
          caption:
            'Birinci satırdaki “beş sayfa” ve “on kitap” sayıları örneği somutlaştırıyor ama savı sayı taşımıyor; asıl destek somut durumdur. Dördüncü satırda iki yol birden var.',
        },
        {
          id: 'lgs-gelistirme-uc-analiz',
          type: 'sentence_analysis',
          title: 'Bir paragrafta üç yolu birden görmek',
          prompt:
            'Aşağıdaki paragrafta bir sav ve üç ayrı destek var. Parçalara tıklayarak her birinin türünü gör.',
          segments: [
            {
              text: 'Okuma alışkanlığı, kitap sayısıyla değil düzenle kurulur.',
              label: 'Sav — desteklenecek düşünce',
              explanation:
                'Yazarın ileri sürdüğü yargı bu. Bundan sonraki cümlelerin hepsi bu savı güçlendirmek için var. Desteği adlandırmadan önce savı bulmak zorunludur.',
              tone: 'brand',
            },
            {
              text: 'Her akşam yalnız on dakika okuyan bir öğrenci, yıl boyunca altmış saat okumuş olur.',
              label: 'Örneklendirme',
              explanation:
                'Somut bir durum veriliyor ve bu durum savın kapsamına giriyor. Söz sahibi yok. İçinde sayı geçse de asıl destek, verilen somut örnektir.',
              tone: 'aqua',
            },
            {
              text: 'Bir kütüphaneci bunu şöyle anlatıyor: “Rafın önünde her gün duran çocuk, yılda bir kez gelenden farklıdır.”',
              label: 'Tanık gösterme',
              explanation:
                'Bir unvan ve tırnak içinde bir söz var. Yazar kendi otoritesine değil, bir başkasının sözüne yaslanıyor.',
              tone: 'success',
            },
            {
              text: 'Okulda yapılan ankette, düzenli okuyan öğrencilerin yüzde yetmişi kitabı bitirdiğini belirtti.',
              label: 'Sayısal verilerden yararlanma',
              explanation:
                'Bir oran veriliyor ve bu oran doğrudan savı destekliyor. Oranı silsen sav ölçülebilir zeminini kaybeder.',
              tone: 'muted',
            },
          ],
          takeaway:
            'Üç yol aynı paragrafta yan yana durabilir. “Hangisine başvurulmamıştır?” sorusu tam olarak bu yapıyı kullanır.',
        },
        {
          id: 'lgs-gelistirme-uc-hoca',
          type: 'teacher_note',
          tone: 'exam',
          body:
            'Bir örnek cümlesinin içinde sayı geçmesi, o cümleyi sayısal veriye çevirmez. Sorunun ölçtüğü şey, desteğin **ana taşıyıcısının** ne olduğudur: somut bir durum mu, bir söz mü, bir oran mı?',
        },
      ],
    },

    {
      id: 'lgs-turkce-gelistirme-diger-yollar',
      title: 'Tanımlama, karşılaştırma, benzetme',
      lead: 'Bu üçü 8. sınıf programında ayrıca sayılmaz ama okuma kazanımının kapsamına girer ve metinlerde sık kullanılır.',
      blocks: [
        {
          id: 'lgs-gelistirme-diger-anlatim',
          type: 'prose',
          body: `Önce bir şeyi netleştirelim: programın **T.8.1.12** açıklamasında 8. sınıf için üç yol açıkça anılır — örneklendirme, tanık gösterme, sayısal verilerden yararlanma. **T.8.3.34**'te böyle bir sınırlama yoktur; okuduklarında kullanılan düşünceyi geliştirme yollarının belirlenmesi istenir. Bu yüzden aşağıdaki üç yolu da tanımak gerekir, ama bunların programda ayrıca adlandırılmadığını bilerek çalış.

**Tanımlama**, bir kavramın ne olduğunu söyler. Kalıbı bellidir: “X, … olan şeydir.” ya da “X, … anlamına gelir.” Genellikle paragrafın başında bulunur; çünkü yazar önce ortak bir zemin kurar, sonra üzerine düşünce inşa eder. “Alışkanlık, tekrarlana tekrarlana kendiliğinden yapılır hâle gelen davranıştır.”

Tanımlamayı ayırt ederken dikkat: her bilgi cümlesi tanım değildir. “Alışkanlıklar zamanla güçlenir.” bir bilgidir ama tanım değildir; çünkü alışkanlığın **ne olduğunu** söylemiyor, onun hakkında bir şey söylüyor.

**Karşılaştırma**, iki tarafı aynı eksende değerlendirir. Cümlede iki taraf ve bir ölçü ifadesi bulunur: *daha, en, kadar, göre, oysa*. “Ekrandan okumak, kâğıttan okumaya göre daha çok göz yorar.” İki taraf var (ekran, kâğıt), bir eksen var (göz yorgunluğu), bir sonuç var (üstünlük).

Karşılaştırma bir düşünceyi geliştirme yolu olarak kullanıldığında amacı ölçmek değil, savı güçlendirmektir. Yazar bir tarafı öne çıkararak savını destekler.

**Benzetme**, bir kavramı daha bilinen bir kavramın özelliğiyle anlatır. “Dikkat, bir kas gibidir; kullanılmazsa zayıflar.” Buradaki amaç soyut bir şeyi (dikkat) somut ve tanıdık bir şeyle (kas) anlaşılır kılmaktır.

Benzetme ile karşılaştırmanın ayrımını daha önce Cümlede Anlam dersinde kurmuştuk: karşılaştırmada iki taraf ölçülür, benzetmede biri ötekini anlatmak için kullanılır. Aynı ölçüt burada da geçerlidir.`,
        },
        {
          id: 'lgs-gelistirme-diger-tablo',
          type: 'table',
          interactive: true,
          title: 'Üç yolu kalıbıyla tanı',
          columns: ['Yol', 'Kalıbı', 'Özgün örnek', 'Karıştığı yol'],
          rows: [
            ['Tanımlama', '“X, … olan şeydir.”', 'Alışkanlık, tekrarlana tekrarlana kendiliğinden yapılır hâle gelen davranıştır.', 'Açıklayıcı anlatım'],
            ['Karşılaştırma', 'İki taraf + daha/en/göre/kadar', 'Ekrandan okumak, kâğıttan okumaya göre daha çok göz yorar.', 'Benzetme'],
            ['Benzetme', 'X, Y gibidir', 'Dikkat, bir kas gibidir; kullanılmazsa zayıflar.', 'Karşılaştırma'],
            ['Tanım değil', 'X hakkında bir bilgi', 'Alışkanlıklar zamanla güçlenir.', 'Tanımlama'],
            ['Karşılaştırma değil', 'Tek taraf', 'Kâğıttan okumak göz yorar.', 'Karşılaştırma'],
          ],
          caption:
            'Son iki satır sınır durumlardır: tanım gibi duran bilgi cümlesi ve karşılaştırma gibi duran tek taraflı yargı.',
        },
        {
          id: 'lgs-gelistirme-diger-tuzak',
          type: 'trap',
          title: 'Tek taraflı yargıyı karşılaştırma sanmak',
          wrong: '“Kâğıttan okumak göz yorar.” cümlesinde bir değerlendirme var; karşılaştırma yapılmış.',
          right: 'Karşılaştırma için ikinci taraf gerekir. Tek taraf varsa yalnız bir yargı vardır, karşılaştırma yoktur.',
          body: 'Karşılaştırmanın olmazsa olmazı iki taraftır. “Daha, en, göre” gibi bir ölçü ifadesi bulunsa bile ikinci taraf yoksa karşılaştırma sayılmaz.',
        },
      ],
    },

    {
      id: 'lgs-turkce-gelistirme-coklu-tarama',
      title: '“Hangisine başvurulmamıştır?” sorularını tarayarak çözmek',
      lead: 'Bu soru biçimi tek bir yolu bulmanı değil, hepsini tek tek aramanı ister. Yöntem tahminden farklıdır.',
      blocks: [
        {
          id: 'lgs-gelistirme-tarama-anlatim',
          type: 'prose',
          body: `LGS’de bu konudaki soruların önemli bir bölümü “aşağıdakilerden hangisine **başvurulmamıştır**?” biçiminde gelir. Böyle bir soruda yapılacak iş bellidir: seçeneklerdeki her yolu paragrafta **tek tek ara** ve bulduğun her yol için metinden bir cümle göster.

Yöntemi şöyle uygula. Seçenekleri okurken kenara kısa işaretler koy: örneklendirme için “ör”, tanık gösterme için “tanık”, sayısal veri için “sayı”, karşılaştırma için “karş”. Sonra paragrafı bir kez daha oku ve her cümlenin yanına hangi işarete girdiğini yaz. Sonunda işaretlenmemiş kalan seçenek cevaptır.

Bu yöntemin iki yararı var. **Birincisi**, tahminden kurtarır: “bana örneklendirme gibi geldi” demek yerine cümleyi gösterirsin. **İkincisi**, hata yaptığında nerede yaptığını bilirsin; çünkü her kararın bir kanıtı vardır.

Bir uyarı: bazı yollar tek bir cümlede birlikte bulunabilir. “Bir öğretmene göre bu oran sınıfta yüzde yetmişe çıkıyor.” cümlesinde hem tanık gösterme (bir öğretmene göre) hem sayısal veri (yüzde yetmiş) var. Bu, hata değil; paragrafın zenginliğidir. İki yolu da işaretle.

İkinci uyarı: bir yolun bulunmaması, o yolun paragrafla ilgisiz olduğu anlamına gelmez. Soru hazırlayanlar genellikle paragrafa çok yakışacak ama bulunmayan bir yolu seçenek olarak koyar. Bu yüzden “bu paragrafta karşılaştırma olurdu” diye düşünmek yeterli değildir; **olup olmadığını** göstermen gerekir.

Son olarak, bu tarama alışkanlığı “anlatım biçimi” sorularında da işe yarar. Orada da dört biçimi tek tek arayıp bulunmayanı işaretlemiştik. İki konuda da yöntem aynı: tahmin etme, tara.`,
        },
        {
          id: 'lgs-gelistirme-tarama-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'İki soru biçimi, iki yöntem',
          columns: ['“Hangisi kullanılmıştır?”', '“Hangisine başvurulmamıştır?”'],
          rows: [
            { label: 'Aranan', values: ['Bir yol', 'Bulunmayan yol'] },
            { label: 'Yöntem', values: ['Desteği bul, türünü adlandır', 'Bütün seçenekleri tek tek tara'] },
            { label: 'Kanıt', values: ['Bir cümle göstermek yeter', 'Bulunan her yol için ayrı cümle göstermek gerekir'] },
            { label: 'Sık yapılan hata', values: ['İlk tanıdık yolu işaretlemek', 'Üç yolu bulup dördüncüyü aramadan seçmek'] },
            { label: 'Süre', values: ['Kısa', 'Daha uzun; paragrafı iki kez okumayı gerektirir'] },
          ],
          insight:
            'İkinci biçimde acele etmek en pahalı hatadır: üç yolu bulup dördüncüyü aramadan işaretlemek, cevabı şansa bırakır.',
        },
        {
          id: 'lgs-gelistirme-tarama-tuzak',
          type: 'trap',
          title: '“Bu paragrafa yakışırdı” diye işaretlemek',
          wrong: 'Bu konuda karşılaştırma yapılması çok doğal olurdu; öyleyse yapılmıştır.',
          right: 'Yapılıp yapılmadığını metinden bir cümle göstererek kanıtlarım. Yakışması bir kanıt değildir.',
          body: 'Soru hazırlayanlar paragrafa çok uyan ama bulunmayan yolları bilerek seçenek yapar. Bu, tahminle çözen öğrenciyi ayıran en etkili tekniktir.',
        },
        {
          id: 'lgs-gelistirme-tarama-hafiza',
          type: 'memory',
          title: 'Üç soruluk tarama',
          body: '**Söz sahibi var mı?** → tanık. **Sayı savı taşıyor mu?** → sayısal veri. **Somut durum mu?** → örneklendirme.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Örneklendirme mi, tanık gösterme mi?',
      prompt:
        'Şu iki desteği ayır: (1) “Düzenin gücünü görmek zor değil: her sabah aynı saatte kalkan biri, birkaç hafta sonra alarma gerek duymaz.” (2) “Bir uyku araştırmacısı bunu şöyle özetliyor: ‘Beden, saatten önce düzeni öğrenir.’”',
      steps: [
        { title: '(1) için söz sahibi kontrolü', body: 'Ortada kimsenin sözü yok; bir durum anlatılıyor. Birinci kontrol olumsuz.' },
        { title: '(1) için kapsam kontrolü', body: 'Anlatılan durum savın (düzenin gücü) kapsamına giriyor. → **Örneklendirme**.' },
        { title: '(2) için söz sahibi kontrolü', body: 'Bir unvan (“uyku araştırmacısı”) ve tırnak içinde bir söz var. Birinci kontrol olumlu. → **Tanık gösterme**.' },
        { title: 'Adın verilmemesi sorun mu?', body: 'Hayır. Tanık gösterme için ad şart değildir; sözün bir sahibinin bulunması yeterlidir.' },
        { title: 'Ortak noktayı gör', body: 'İkisi de aynı savı destekliyor ve ikisi de somut. Ayrımı yapan tek şey, ortada bir söz sahibi olup olmaması.' },
      ],
      answer: '(1) örneklendirme · (2) tanık gösterme',
      takeaway: 'Ölçüt tek: ortada birinin söylediği bir söz var mı?',
    },
    {
      title: 'Seviye 2 — Sayı var ama hangi yol?',
      prompt:
        'Şu iki cümlede sayısal verilerden yararlanma var mı? (1) “Bu roman 1998’de yayımlandı ve 312 sayfadır.” (2) “Okulda yapılan ankette öğrencilerin yüzde altmış ikisi, akşam okumanın daha verimli olduğunu söyledi.”',
      steps: [
        { title: '(1) için savı ara', body: 'Cümlede bir sav yok; yalnız künye bilgisi veriliyor. Desteklenen bir düşünce bulunmuyor.' },
        { title: '(1) için silme testi', body: 'Sayıları silsem hangi sav zayıflar? Hiçbiri; ortada sav yok. → Sayısal veri **değil**, yalnız bilgi ögesi.' },
        { title: '(2) için savı ara', body: 'Desteklenen düşünce: akşam okumanın daha verimli olduğu. Cümle bu düşünceyi bir veriyle destekliyor.' },
        { title: '(2) için silme testi', body: '“Yüzde altmış iki” oranını silsem sav ölçülebilir zeminini kaybeder. → **Sayısal verilerden yararlanma**.' },
        { title: 'Genel kuralı yaz', body: 'Sayının varlığı yetmez; sayının bir savı taşıması gerekir. Silme testi bunu her seferinde ayırır.' },
      ],
      answer: '(1) hayır, yalnız bilgi ögesi · (2) evet, sayısal verilerden yararlanma',
      takeaway: 'Her sayı sayısal veri değildir. Sav yoksa destek de yoktur.',
    },
    {
      title: 'Seviye 3 — Hangisine başvurulmamış?',
      prompt:
        'Paragraf: “Dikkat, bir kas gibidir; kullanılmadıkça zayıflar. Örneğin her gün on dakika sessizce oturup tek bir işe odaklanan biri, birkaç hafta içinde bu süreyi rahatça uzatabilir. Bir öğretmen bunu şöyle anlatıyor: ‘Odaklanmayı çalıştırmak, yüzmeyi öğrenmeye benzer.’” Bu parçada örneklendirme, tanık gösterme, benzetme ve sayısal verilerden yararlanma yollarından hangisine başvurulmamıştır?',
      steps: [
        { title: 'Benzetmeyi ara', body: '“Dikkat, bir kas gibidir.” Soyut bir kavram, tanıdık bir kavramın özelliğiyle anlatılıyor. → **Var**.' },
        { title: 'Örneklendirmeyi ara', body: '“Örneğin her gün on dakika sessizce oturup…” Somut bir durum, savın kapsamına giriyor. → **Var**.' },
        { title: 'Tanık göstermeyi ara', body: '“Bir öğretmen bunu şöyle anlatıyor: …” Bir unvan ve tırnak içi söz. → **Var**.' },
        { title: 'Sayısal veriyi ara', body: 'Paragrafta “on dakika” ve “birkaç hafta” geçiyor. Ama bunlar örneği somutlaştıran ölçüler; bir savı taşıyan oran, yüzde veya istatistik yok. Silme testi: “on dakika”yı silsem örnek zayıflar, sav değil. → **Yok**.' },
        { title: 'Tuzağı adlandır', body: 'Paragrafta sayı geçmesi, bu yolun kullanıldığını sanmaya yol açar. Ölçüt sayının varlığı değil, savı taşıyıp taşımadığıdır.' },
      ],
      answer: 'Sayısal verilerden yararlanma yoluna başvurulmamıştır.',
      takeaway:
        '“Hangisine başvurulmamıştır?” sorularında bulduğun her yol için metinden bir cümle göster; gösteremediğin yol cevaptır.',
    },
  ],

  questionClue: {
    concept: 'düşünceyi geliştirme yolu sorusu',
    statement:
      'Soru kökünde “düşünceyi geliştirme yolu”, “başvurulan yol”, “hangisine başvurulmamıştır” ifadelerinden biri varsa, aranan şey anlatım biçimi değil destek tekniğidir.',
    clues: [
      'Seçeneklerde “örneklendirme, tanık gösterme, sayısal verilerden yararlanma, karşılaştırma, tanımlama, benzetme” terimleri',
      'Paragrafta tırnak içi bir alıntı ya da bir unvan bulunması',
      'Paragrafta yüzde, oran ya da istatistik geçmesi',
      '“Örneğin, söz gelimi, mesela” gibi ifadeler',
      '“Hangisine başvurulmamıştır?” biçimindeki soru kökleri',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, desteğin türünü ayırt edip edemediğini ölçüyor. Çözüm yolu önce savı bulmak, sonra desteği ayırmak, en sonunda türü adlandırmaktır. “Hangisi yoktur?” biçiminde ise her yolu tek tek taramak gerekir.',
    boundary:
      'Bu ipuçlarını “sayı varsa sayısal veri, tırnak varsa tanık gösterme” gibi bir kısayola çevirme. Sayı bir savı taşımıyorsa yol değildir; tırnak içi ifade bir alıntı değil, vurgulanan bir sözcük olabilir.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir parçada başvurulan düşünceyi geliştirme yolunun sorulması',
      'Bir parçada hangi yola başvurulmadığının sorulması',
      'Verilen bir tanıma uyan yolun seçtirilmesi',
      'Örneklendirme ile tanık göstermenin ayırt ettirilmesi',
      'Bir cümledeki sayının düşünceyi geliştirip geliştirmediğinin sorulması',
      'Anlatım biçimi ile düşünceyi geliştirme yolunun aynı soruda karıştırılması',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Kimi araştırmacılara göre uyku, öğrenilen bilgiyi pekiştiren bir süreçtir.” Bu cümlede hangi düşünceyi geliştirme yolu vardır?',
      hint: 'Ortada birinin söylediği bir görüş var mı?',
      answer:
        'Tanık gösterme. “Kimi araştırmacılara göre” ifadesi, sözün bir sahibi bulunduğunu gösteriyor; yazar kendi otoritesine değil, araştırmacıların görüşüne yaslanıyor. Adların verilmemesi tanık göstermeyi ortadan kaldırmaz. Cümlede somut bir durum ya da sayı yok, bu yüzden örneklendirme veya sayısal veri değildir.',
    },
    {
      prompt:
        '“Bu kütüphane 1965’te açıldı ve üç katlıdır.” cümlesi bir düşünceyi geliştirme yolu içeriyor mu?',
      hint: 'Silme testini uygula: sayıları silsen hangi sav zayıflar?',
      answer:
        'Hayır. Cümlede desteklenen bir sav yok; yalnız künye bilgisi veriliyor. Sayıları silsen zayıflayacak bir düşünce bulunmuyor. Düşünceyi geliştirme yolu için önce bir savın, sonra o savı güçlendiren bir desteğin bulunması gerekir.',
    },
    {
      prompt:
        'Bir soruda seçeneklerden biri “betimleyici anlatım”, diğeri “örneklendirme”. Soru kökü “düşünceyi geliştirme yolu” diyorsa hangisi doğru olabilir? Neden?',
      hint: 'İki terim aynı kümeden mi?',
      answer:
        'Yalnız “örneklendirme” doğru olabilir. Betimleyici anlatım bir **anlatım biçimidir** (T.8.3.11), düşünceyi geliştirme yolu değildir. Soru kökü hangi kümeyi istiyorsa cevap o kümeden gelmelidir; iki kavram farklı katmanlardadır.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey terim bilgisi değil, destek çözümlemesi',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama, sonuç çıkarma ve analiz yapma becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: altı terimi ezberlemek yetmez; her yol için metinden bir cümle gösterebilmen gerekir. Çeldiriciler de bu yüzden paragrafa çok yakışan ama bulunmayan yollardan seçilir.',
    measures: [
      'Paragraftaki savı ve desteği ayırabilme',
      'Tanık gösterme ile örneklendirmeyi söz sahibi ölçütüyle ayırabilme',
      'Sayının bir savı taşıyıp taşımadığını sınayabilme',
      'Tanımlama ile bilgi cümlesini ayırabilme',
      'Birden çok yolun bir arada bulunabileceğini fark edebilme',
      '“Hangisi yoktur?” sorularını tarayarak çözebilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Bir beceriyi kazanmanın yolu, onu her gün az miktarda tekrarlamaktan geçer. Söz gelimi haftada bir kez üç saat çalgı çalışan biriyle her gün yirmi dakika çalışan biri arasında birkaç ay sonra belirgin bir fark oluşur. Bir müzik öğretmeni bunu şöyle anlatıyor: “Parmaklar, uzun oturuşları değil sık tekrarları hatırlar.” Kursta yapılan değerlendirmede, her gün çalışan öğrencilerin yüzde yetmiş beşi altı ay sonunda ikinci düzeye geçebilmişti.`,
    question: 'Bu parçada aşağıdaki düşünceyi geliştirme yollarından hangisine **başvurulmamıştır**?',
    options: [
      {
        text: 'Örneklendirme',
        explanation:
          'Başvurulmuştur. “Söz gelimi haftada bir kez üç saat çalışan biriyle her gün yirmi dakika çalışan biri…” cümlesi somut bir durum veriyor ve savın kapsamına giriyor.',
      },
      {
        text: 'Tanık gösterme',
        explanation:
          'Başvurulmuştur. “Bir müzik öğretmeni bunu şöyle anlatıyor: …” ifadesinde bir unvan ve tırnak içinde bir söz var; yazar bir başkasının otoritesine yaslanıyor.',
      },
      {
        text: 'Sayısal verilerden yararlanma',
        explanation:
          'Başvurulmuştur. “Öğrencilerin yüzde yetmiş beşi altı ay sonunda ikinci düzeye geçebilmişti.” cümlesindeki oran doğrudan savı destekliyor; silinirse sav ölçülebilir zeminini kaybeder.',
      },
      {
        text: 'Tanımlama',
        explanation:
          'Doğru cevap. Parçada hiçbir kavramın ne olduğu açıklanmıyor. “Beceri nedir?”, “tekrar nedir?” türünden bir tanım cümlesi bulunmuyor; yazar doğrudan savını kurup desteklere geçiyor.',
      },
      {
        text: 'Karşılaştırma',
        explanation:
          'Başvurulmuştur: örnek cümlesinde iki kişi aynı eksende (ilerleme) karşılaştırılıyor. Bu, örneklendirmenin içinde yapılmış bir karşılaştırmadır; iki yol aynı cümlede bulunabilir.',
      },
    ],
    answer_index: 3,
    stem_analysis:
      'Soru kökü “başvurulmamıştır” diyor; yani beş yolu da tek tek arayıp bulunmayanı işaretleyeceğim. Önce savı bulmak gerekiyor: “Bir beceri, her gün az miktarda tekrarlanarak kazanılır.” Bundan sonraki her cümle bir destek.',
    critical_point:
      'Kritik nokta, parçanın bilgi bakımından zengin olması: örnek, alıntı, oran, hatta karşılaştırma var. Bu zenginlik “her yol kullanılmış” hissi yaratır. Ama tanımlama için bir kavramın **ne olduğunun** söylenmesi gerekir ve parçada böyle bir cümle yok.',
    takeaway:
      'Tarama yaparken her yol için metinden bir cümle göster. Gösteremediğin yol cevaptır.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question:
        '“Bir doktora göre düzenli yürüyüş, kalp sağlığını doğrudan etkiler.” Bu cümlede hangi düşünceyi geliştirme yolu kullanılmıştır?',
      options: [
        'Örneklendirme',
        'Tanık gösterme',
        'Sayısal verilerden yararlanma',
        'Tanımlama',
      ],
      answer_index: 1,
      explanation:
        'Cümlede bir söz sahibi var: “bir doktora göre”. Yazar kendi otoritesine değil, uzmanın görüşüne yaslanıyor; bu tanık göstermedir. Somut bir durum verilmediği için örneklendirme, sayı bulunmadığı için sayısal veri, bir kavramın ne olduğu söylenmediği için tanımlama değildir.',
    },
    {
      purpose: 'apply',
      question:
        '“Sabır, istenen sonuç gecikse bile çabayı sürdürebilme gücüdür.” Bu cümlede hangi yol kullanılmıştır?',
      options: [
        'Tanımlama',
        'Örneklendirme',
        'Karşılaştırma',
        'Tanık gösterme',
      ],
      answer_index: 0,
      explanation:
        'Cümle “Sabır, … gücüdür.” kalıbıyla bir kavramın ne olduğunu söylüyor: bu bir tanımdır. Somut bir durum verilmediği için örneklendirme değil; ikinci bir taraf bulunmadığı için karşılaştırma değil; bir söz sahibi olmadığı için tanık gösterme değildir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Kitap 2004’te basıldı.” cümlesi için “sayısal verilerden yararlanılmış” diyor. Bu öğrencinin hatası nedir?',
      options: [
        'Sayının bir savı destekleyip desteklemediğini sınamamak',
        'Tanık göstermeyi fark edememek',
        'Anlatım biçimiyle karıştırmak',
        'Karşılaştırmayı gözden kaçırmak',
      ],
      answer_index: 0,
      explanation:
        'Cümlede desteklenen bir sav yok; tarih yalnız bir künye bilgisidir. Silme testi bunu gösterir: tarihi silsen zayıflayacak bir düşünce bulunmuyor. Düşünceyi geliştirme yolu olabilmesi için sayının bir yargıyı güçlendirmesi gerekir. Cümlede alıntı, anlatım biçimi sorunu ya da ikinci bir taraf yoktur.',
    },
  ],

  summary: [
    'Bir yazar iddiada bulunur, sonra onu bir destekle güçlendirir; destek türüne düşünceyi geliştirme yolu denir.',
    'Program 8. sınıf için üç yolu açıkça sayar: örneklendirme, tanık gösterme, sayısal verilerden yararlanma.',
    'Tanımlama, karşılaştırma ve benzetme programda ayrıca sayılmasa da okuma kazanımının kapsamına girer.',
    'Örneklendirme ile tanık göstermeyi ayıran tek ölçüt: ortada birinin söylediği bir söz var mı?',
    'Tanık gösterme için kişinin adının verilmesi şart değildir; unvan da yeterlidir.',
    'Her sayı sayısal veri değildir; sayının bir savı taşıması gerekir (silme testi).',
    'Tanımlama bir kavramın ne olduğunu söyler; her bilgi cümlesi tanım değildir.',
    'Karşılaştırmanın olmazsa olmazı iki taraftır.',
    'Bir paragrafta birden çok yol, hatta aynı cümlede iki yol bulunabilir.',
    '“Hangisine başvurulmamıştır?” sorularında her yol için metinden bir cümle göster; gösteremediğin cevaptır.',
  ],

  next: [
    'Metinler Arası Karşılaştırma ve Çıkarım (T.8.3.23)',
    'Metin Türleri: Fıkra, Makale, Deneme, Roman, Destan (T.8.3.26)',
    'Söz Sanatları: Benzetme, Kişileştirme, Konuşturma, Karşıtlık, Abartma (T.8.3.7)',
  ],
})

export default lesson
