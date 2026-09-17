import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Paragrafta Anlam · 5. ders
 * Kazanım : T.8.3.23 · T.8.3.14 · T.8.3.33
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * Üç kazanım aynı beceriye bakıyor: bir metinden ne çıkarılabilir, ne
 * çıkarılamaz ve iki metin hangi eksende karşılaştırılır.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-metinler-arasi-karsilastirma',
  topic: 'Paragrafta Anlam',
  order: 5,
  title: 'Metinler Arası Karşılaştırma ve Çıkarım',
  subtitle:
    'Bir çıkarım “mantıklı” olduğu için doğru olmaz; metindeki bilgiden zorunlu olarak çıktığı için doğru olur.',
  minutes: 43,
  kazanimlar: [
    { kod: 'T.8.3.23', metin: 'Metinler arasında karşılaştırma yapar.' },
    { kod: 'T.8.3.14', metin: 'Metinle ilgili soruları cevaplar.' },
    { kod: 'T.8.3.33', metin: 'Edebî eserin yazılı metni ile medya sunumunu karşılaştırır.' },
  ],
  prerequisites: [
    { topic: 'Konu, ana fikir, yardımcı fikir', why: 'İki metni karşılaştırmak için önce her birinin ana fikrini ayrı ayrı çıkarman gerekir.' },
    { topic: 'Öznel–nesnel yargı', why: 'Çıkarımın metne dayanıp dayanmadığını denetlemek bu ayrımı gerektirir.' },
  ],
  outcomes: [
    'Metin içi anlam ile metin dışı anlamı birbirinden ayırabileceksin.',
    'Bir çıkarımın metinden zorunlu olarak çıkıp çıkmadığını sınayabileceksin.',
    'İki metni ortak bir eksende karşılaştırabileceksin.',
    'İki metnin nerede birleşip nerede ayrıldığını gösterebileceksin.',
    'Bir edebî eserin metni ile medya sunumunu kahraman, mekân, zaman ve olay yönünden karşılaştırabileceksin.',
  ],

  opening: {
    title: 'Metinde yazmayan ama metinden çıkan',
    lead: 'Bir metin her şeyi söylemez. Söylediklerinden zorunlu olarak çıkan şeyler de vardır — ve “olabilir” dediğin şeyler.',
    body: `Şu kısa metni oku: “Sabah kapıyı açtığında merdivenler ıslaktı. Komşunun kapısının önünde katlanmış bir şemsiye duruyordu.”

Metinde hiçbir yerde “yağmur yağmış” yazmıyor. Ama iki bilgiyi birleştirdiğinde bu sonuca varıyorsun: ıslak merdivenler + şemsiye. Bu bir **çıkarımdır** ve metinden zorunlu olarak çıkar.

Şimdi başka bir cümle deneyelim: “Komşu sabah erken çıkmış.” Bu da mantıklı görünüyor, değil mi? Ama metin bunu söylemiyor. Şemsiye katlanmış duruyor; komşu çıkmış da olabilir, hiç çıkmamış da olabilir. Bu bir çıkarım **değildir**; bir tahmindir.

İşte bu dersin ayırt ettiği şey budur: **metinden zorunlu olarak çıkan** ile **metinle uyumlu ama zorunlu olmayan** arasındaki fark. MEB 8. sınıf programındaki **T.8.3.14** kazanımı, metinle ilgili soruların cevaplanmasını isterken açıklamasında “metin içi ve metin dışı anlam ilişkisi kurulur” der. Bu tam olarak burada çalıştığımız beceridir.

Aynı derste iki kazanım daha var. **T.8.3.23** metinler arasında karşılaştırma yapmayı ister; açıklamasında aynı metnin çeviri ve farklı baskı gibi özellikleri itibarıyla karşılaştırılmasından söz eder. **T.8.3.33** ise edebî eserin yazılı metni ile medya sunumunun kahraman, mekân, zaman ve olay yönünden karşılaştırılmasını ister.

Üçünün ortak yanı şu: hepsinde **metne bağlı kalarak** bir şey söylemen isteniyor. Bu yüzden derste tek bir ölçüt kuracağız ve üç kazanıma da onu uygulayacağız: **kanıtı gösterebiliyor musun?**`,
  },

  concepts: [
    {
      term: 'Metin içi anlam',
      body: 'Metinde doğrudan yazılı olan bilgidir. Bir cümleyi parmağınla gösterip “işte burada” diyebilirsin. Sorularda genellikle “parçaya göre aşağıdakilerden hangisi söylenebilir?” biçiminde ölçülür.',
    },
    {
      term: 'Metin dışı anlam',
      body: 'Metinde yazılı olmayan ama metindeki bilgilerin birleşmesinden zorunlu olarak çıkan anlamdır. Kanıtı tek bir cümle değil, birkaç cümlenin birlikte söylediğidir.',
    },
    {
      term: 'Çıkarım',
      body: 'Metindeki bilgilerden mantıksal olarak ulaşılan yeni bilgidir. Geçerli olabilmesi için metinden **zorunlu** olarak çıkması gerekir; “olabilir” demek yetmez.',
    },
    {
      term: 'Ortak eksen',
      body: 'İki metni karşılaştırırken kullanılan tek bir ölçüttür: konu, bakış açısı, amaç, anlatım biçimi ya da ulaşılan sonuç. Eksen belirlenmeden yapılan karşılaştırma dağınık kalır.',
    },
    {
      term: 'Uyarlama',
      body: 'Bir edebî eserin film, dizi, çizgi film ya da tiyatro gibi başka bir ortama aktarılmasıdır. Uyarlamada kahraman, mekân, zaman ve olay değişebilir; karşılaştırma bu dört eksende yapılır.',
    },
    {
      term: 'Kanıt gösterme',
      body: 'Bir iddianın metindeki hangi cümleye dayandığını gösterebilmektir. Bu dersin tek ölçütüdür: gösteremiyorsan iddian geçerli değildir.',
    },
  ],

  why: {
    question: 'Neden “mantıklı görünen” her seçenek doğru değildir?',
    body: `Çünkü soru, senin dünya bilgini değil, **metnin verdiğini** ölçer. Dünya bilgin bazen metinle uyuşur, bazen uyuşmaz; ama hiçbir zaman metnin yerine geçemez.

Bir örnek: metin bir öğrencinin her gün kütüphaneye gittiğini anlatıyor. “Bu öğrenci kitap okumayı seviyor.” seçeneği çok mantıklı görünüyor. Ama metin bunu söylüyor mu? Söylemiyor. Öğrenci kütüphaneye sessiz olduğu için, arkadaşlarıyla buluşmak için ya da evde çalışacak yeri olmadığı için de gidiyor olabilir. Seçenek **metinle uyumlu ama zorunlu değil**; bu yüzden yanlıştır.

Şimdi tersini deneyelim: “Bu öğrenci kütüphaneyi düzenli olarak kullanıyor.” Bu seçenek metinden zorunlu olarak çıkar; “her gün gidiyor” demek zaten budur. Kanıtını gösterebiliyorsun.

Ölçütü tek cümleye indir: **Seçeneğin yanlış olduğu bir durum hayal edebiliyor muyum?** Hayal edebiliyorsan, seçenek metinden zorunlu olarak çıkmıyordur. Hayal edemiyorsan, geçerli bir çıkarımdır.

Bu ölçüt metinler arası karşılaştırmada da aynen çalışır. İki metnin konusu aynı diye ana fikirleri aynı olmak zorunda değildir. Aynı konuda iki yazar tam ters şeyler söyleyebilir. Bu yüzden karşılaştırmaya başlamadan önce **her metnin kendi ana fikrini ayrı ayrı** çıkarman gerekir; iki ana fikri yan yana koymadan yapılan karşılaştırma tahmindir.

Uyarlama karşılaştırmasında da aynı disiplin geçerli: “Kitap daha iyiydi.” bir karşılaştırma değil, bir beğenidir. Program dört eksen veriyor — kahraman, mekân, zaman, olay — ve karşılaştırma bu eksenlerde yapılır.`,
  },

  decision: {
    title: 'Çıkarım ve karşılaştırma yolu',
    lead: 'Her adımda tek bir soru var: kanıtı gösterebiliyor muyum?',
    intro:
      'Çıkarım ya da karşılaştırma sorusunda şu beş durağı uygula. Dördüncü durak, mantıklı görünen seçenekleri eler.',
    steps: [
      {
        title: '1. Her metnin ana fikrini ayrı yaz',
        body: 'Tek metin varsa onun, iki metin varsa ikisinin ana fikrini ayrı ayrı çıkar. Karşılaştırmaya bu iki cümleyi yan yana koyarak başlarsın; koymadan başlarsan dağılırsın.',
      },
      {
        title: '2. Seçeneği metinde ara',
        body: 'Seçenek doğrudan yazılı mı? Yazılıysa metin içi anlamdır ve kanıtı tek cümledir. Yazılı değilse üçüncü durağa geç.',
      },
      {
        title: '3. Birleştirme testini uygula',
        body: 'Seçenek, metindeki iki ya da daha çok bilginin birleşmesinden çıkıyor mu? Çıkıyorsa metin dışı anlamdır ve kanıtı birkaç cümlenin toplamıdır.',
      },
      {
        title: '4. Karşı örnek ara',
        body: 'Seçeneğin yanlış olduğu bir durum hayal et. Metindeki bütün bilgiler doğruyken seçenek yine de yanlış olabiliyorsa, o seçenek metinden **zorunlu olarak çıkmıyordur**; elenir.',
      },
      {
        title: '5. Karşılaştırmada ekseni adlandır',
        body: 'İki metni karşılaştırırken hangi eksende karşılaştırdığını söyle: konu mu, bakış açısı mı, anlatım biçimi mi, ulaşılan sonuç mu? Eksen adlandırılmadan yapılan karşılaştırma denetlenemez.',
      },
    ],
    takeaway: 'Bir çıkarım mantıklı olduğu için değil, zorunlu olduğu için doğrudur.',
  },

  decisionTree: {
    title: 'Bu seçenek metinden çıkarılabilir mi?',
    intro:
      'Üç kontrolü sırayla uygula. Üçüncü kontrol, en inandırıcı çeldiricileri eler.',
    checks: [
      {
        question: 'Seçenek metinde doğrudan yazılı mı?',
        yes: 'Metin içi anlamdır; kanıtı gösterebiliyorsan doğrudur.',
        no: 'Yazılı değil; ikinci kontrole geç.',
      },
      {
        question: 'Metindeki bilgilerin birleşmesinden zorunlu olarak çıkıyor mu?',
        yes: 'Geçerli bir çıkarımdır (metin dışı anlam). Kanıtı birkaç cümlenin toplamıdır.',
        no: 'Zorunlu değil; üçüncü kontrole geç.',
      },
      {
        question: 'Metindeki her bilgi doğruyken seçeneğin yanlış olduğu bir durum hayal edebiliyor muyum?',
        yes: 'Seçenek metinden çıkarılamaz; elenir. Metinle uyumlu olması yetmez.',
        no: 'Çıkarım geçerli olabilir; ikinci kontrole geri dön ve kanıtı yaz.',
      },
    ],
    takeaway:
      'Karşı örnek arama, “çok mantıklı” çeldiricilerin tek panzehiridir. Aklına bir karşı örnek geliyorsa seçenek zorunlu değildir.',
  },

  comparison: {
    title: 'Üç seçenek türünü ayır',
    columns: ['Metin içi anlam', 'Metin dışı anlam (çıkarım)', 'Çıkarılamayan'],
    rows: [
      { label: 'Metinde yazılı mı?', values: ['Evet', 'Hayır', 'Hayır'] },
      { label: 'Kanıtı', values: ['Tek bir cümle', 'Birkaç cümlenin toplamı', 'Yok'] },
      { label: 'Karşı örnek', values: ['Kurulamaz', 'Kurulamaz', 'Kurulabilir'] },
      { label: 'Örnek', values: ['Merdivenler ıslaktı.', 'Yağmur yağmış.', 'Komşu erken çıkmış.'] },
      { label: 'Soru kökündeki karşılığı', values: ['“Parçada belirtilmiştir”', '“Parçadan çıkarılabilir”', '“Parçadan çıkarılamaz”'] },
    ],
    insight:
      'Sorular çoğunlukla üçüncü sütunu doğru göstermeye çalışır; çünkü metinle uyumlu bir tahmin kulağa doğru gelir. Karşı örnek testi burada devreye girer.',
  },

  traps: [
    {
      title: '“Mantıklı” olanı çıkarım sanmak',
      wrong: 'Bu sonuç bana çok makul geldi; metinden çıkarılabilir.',
      right: 'Karşı örnek ararım: metindeki her bilgi doğruyken bu sonuç yanlış olabilir mi? Olabiliyorsa çıkarım değildir.',
      body: 'Makullük bir kanıt değildir. Soru hazırlayanlar çeldiricileri özellikle makul seçer; amaç, dünya bilgisiyle metni karıştıran öğrenciyi ayırmaktır.',
    },
    {
      title: 'İki metnin konusu aynı diye ana fikri aynı sanmak',
      wrong: 'İki metin de okuma alışkanlığından söz ediyor; ana fikirleri de aynıdır.',
      right: 'Aynı konuda iki yazar tam ters şeyler söyleyebilir. Her metnin ana fikrini ayrı ayrı çıkarmadan karşılaştırma yapılmaz.',
      body: 'Konu ortaklığı yalnız karşılaştırma **eksenini** verir; sonucu vermez. Sonuç için iki ana fikri yan yana koymak gerekir.',
    },
    {
      title: 'Uyarlama karşılaştırmasında beğeni bildirmek',
      wrong: 'Kitap filmden daha iyiydi; karşılaştırmayı yaptım.',
      right: 'Program dört eksen veriyor: kahraman, mekân, zaman, olay. Karşılaştırma bu eksenlerde yapılır; iyi–kötü hükmü bir beğenidir.',
      body: 'Soru bir değerlendirme değil, bir çözümleme ister. “Filmde olay örgüsü kısaltılmıştır” bir karşılaştırmadır; “film daha başarılıydı” bir beğenidir.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-metin-ici-disi',
      title: 'Metin içi, metin dışı ve metnin dışında kalan',
      lead: 'Üç kategori var ve sorular çoğunlukla ikisini birbirine karıştırmanı bekler.',
      blocks: [
        {
          id: 'lgs-metin-ici-anlatim',
          type: 'prose',
          body: `**Metin içi anlam**, doğrudan yazılı olan bilgidir. Sorularda “parçada belirtilmiştir”, “parçaya göre şu doğrudur” gibi ifadelerle ölçülür. Kanıtı tek bir cümledir ve gösterilmesi kolaydır. Bu tür seçenekler genellikle soruların en kolay kısmıdır.

**Metin dışı anlam**, yazılı olmayan ama metindeki bilgilerden **zorunlu olarak** çıkan anlamdır. Kanıtı tek bir cümle değil, birkaç cümlenin birleşimidir. “Merdivenler ıslaktı” + “kapının önünde şemsiye vardı” → “yağmur yağmış”. Hiçbir cümle bunu tek başına söylemiyor; ikisi birlikte söylüyor.

**Metnin dışında kalan** ise metinle çelişmeyen ama metinden çıkmayan her şeydir. Bunlar yanlış bilgiler olmak zorunda değil; doğru bile olabilirler. Sorun şu ki, doğruluklarını metin garanti etmiyor.

Bu üçünü ayırmanın en güvenilir aracı **karşı örnek testidir**. Seçeneği al ve sor: metindeki bütün bilgiler doğruyken bu seçeneğin yanlış olduğu bir durum kurabilir miyim? Kurabiliyorsan seçenek üçüncü kategoridedir.

Bir örnek üzerinde çalışalım. Metin: “Ayşe her sabah aynı otobüse biniyor. Otobüs son üç haftadır hep kalabalık.” Seçenek: “Ayşe sabahları ayakta yolculuk ediyor.” Karşı örnek kurabilir miyim? Evet — otobüs kalabalık olabilir ama Ayşe ilk duraktan biniyorsa oturuyordur. Metin bunu dışlamıyor. Seçenek elenir.

Şimdi başka bir seçenek: “Ayşe son üç haftadır kalabalık bir otobüse biniyor.” Karşı örnek kurabilir miyim? Hayır — metindeki iki bilgi birleştiğinde bu zorunlu olarak çıkıyor. Geçerli çıkarım.

Bu testi alışkanlık hâline getirdiğinde, “çok mantıklı ama yanlış” seçenekler artık seni yanıltmaz; çünkü onları makullüklerinden değil, kanıt yokluğundan eleyeceksin.`,
        },
        {
          id: 'lgs-metin-ici-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı metin, üç tür seçenek',
          columns: ['Metin', 'Seçenek', 'Kanıt', 'Kategori'],
          rows: [
            ['Merdivenler ıslaktı; kapının önünde katlanmış bir şemsiye duruyordu.', 'Merdivenler ıslaktı.', 'Birinci cümle', 'Metin içi'],
            ['Aynı metin', 'Yağmur yağmış olmalı.', 'İki bilginin birleşimi', 'Metin dışı (geçerli çıkarım)'],
            ['Aynı metin', 'Komşu sabah erken çıkmış.', 'Yok — şemsiye katlanmış olarak duruyor', 'Çıkarılamaz'],
            ['Aynı metin', 'Şemsiye komşuya aittir.', 'Yok — kapının önünde olması sahipliği kanıtlamaz', 'Çıkarılamaz'],
            ['Aynı metin', 'Kapının önünde bir şemsiye vardı.', 'İkinci cümle', 'Metin içi'],
          ],
          caption:
            'Dördüncü satır özellikle dikkat çekici: “komşunun kapısının önünde” demek “komşunun şemsiyesi” demek değildir. Küçük bir sıçrama, geçersiz bir çıkarım doğurur.',
        },
        {
          id: 'lgs-metin-ici-analiz',
          type: 'sentence_analysis',
          title: 'Kanıt zincirini kurmak',
          prompt:
            'Aşağıdaki kısa metinde her cümlenin hangi çıkarıma kanıt olduğunu göreceğiz. Parçalara tıkla.',
          segments: [
            {
              text: 'Sınıfın penceresi öğleden sonra kapatılır.',
              label: 'Birinci bilgi',
              explanation:
                'Tek başına yalnız bir uygulamayı bildiriyor. Bundan bir çıkarım yapılamaz; henüz ikinci bilgiye ihtiyaç var.',
              tone: 'muted',
            },
            {
              text: 'Öğleden sonra bahçede beden eğitimi dersi yapılıyor.',
              label: 'İkinci bilgi',
              explanation:
                'Bu da tek başına bir uygulama. Ama birinciyle birleştiğinde bir neden ortaya çıkıyor.',
              tone: 'muted',
            },
            {
              text: '→ Çıkarım: Pencere, bahçeden gelen gürültü nedeniyle kapatılıyor olabilir.',
              label: 'Geçersiz çıkarım',
              explanation:
                'Kulağa mantıklı geliyor ama zorunlu değil. Pencere sıcak, toz ya da güvenlik nedeniyle de kapatılıyor olabilir. Karşı örnek kurulabiliyor: seçenek elenir.',
              tone: 'danger',
            },
            {
              text: '→ Çıkarım: Pencerenin kapatıldığı saatte bahçede ders yapılıyor.',
              label: 'Geçerli çıkarım',
              explanation:
                'İki cümlenin birleşiminden zorunlu olarak çıkıyor: ikisi de öğleden sonrayı bildiriyor. Karşı örnek kurulamıyor.',
              tone: 'success',
            },
          ],
          takeaway:
            'İki bilgi arasında bir **zaman ortaklığı** kurmak geçerlidir; bir **neden ilişkisi** kurmak ise metin söylemedikçe geçersizdir.',
        },
        {
          id: 'lgs-metin-ici-hoca',
          type: 'teacher_note',
          tone: 'warning',
          body:
            'Çıkarım sorularında en sık yapılan sıçrama, iki olayın aynı anda olmasından **neden-sonuç** çıkarmaktır. Metin “A oldu, B oldu” diyorsa, “A, B’ye yol açtı” demek için metnin bunu söylemesi gerekir.',
        },
      ],
    },

    {
      id: 'lgs-turkce-iki-metni-karsilastirma',
      title: 'İki metni ortak eksende okumak',
      lead: 'Karşılaştırma dağınık bir izlenim değildir; belirlenmiş tek bir eksende yapılır.',
      blocks: [
        {
          id: 'lgs-iki-metin-anlatim',
          type: 'prose',
          body: `İki metin verildiğinde ilk iş her birinin ana fikrini **ayrı ayrı** yazmaktır. Bunu yapmadan karşılaştırmaya başlarsan, iki metni birbirine karıştırır ve hangisinin ne dediğini şaşırırsın.

İkinci iş **ekseni belirlemektir**. İki metin şu eksenlerden birinde karşılaştırılabilir:

**Konu ekseni.** İkisi de neyden söz ediyor? Konuları aynıysa karşılaştırma anlamlıdır; farklıysa karşılaştırma zorlama olur.

**Bakış açısı ekseni.** Aynı konuya iki yazar nasıl bakıyor? Biri olumlu, öteki olumsuz mu? Biri taraf tutuyor, öteki tarafsız mı?

**Anlatım biçimi ekseni.** Biri öyküleyici, öteki açıklayıcı mı? Biri okuru ikna etmeye çalışırken öteki bilgi mi veriyor?

**Ulaşılan sonuç ekseni.** İki metin aynı sonuca mı varıyor, farklı sonuçlara mı? Aynı sonuca farklı yollardan varıyor olabilirler.

Üçüncü iş, **birleşme ve ayrılma noktalarını göstermektir.** İyi bir karşılaştırma iki cümleyle özetlenebilir: “İkisi de … noktasında birleşiyor; ancak … konusunda ayrılıyor.” Bu iki cümleyi kuramıyorsan karşılaştırma yapmamışsındır.

Programın açıklaması ayrıca **aynı metnin çeviri ve farklı baskı gibi özellikleri itibarıyla** karşılaştırılmasından söz eder. Bu, aynı eserin iki farklı çevirisinin karşılaştırılması demektir: sözcük seçimleri, anlatım akıcılığı, cümle uzunlukları farklı olabilir; ama kaynak metin aynıdır. Bu tür karşılaştırmalarda eksen genellikle **anlatım** olur, içerik değil.

Son olarak sık yapılan bir hataya dikkat: iki metnin ortak sözcükler kullanması, ortak bir ana fikirleri olduğu anlamına gelmez. İki metin de “teknoloji” sözcüğünü kullanabilir ve biri onu savunurken öteki eleştirebilir.`,
        },
        {
          id: 'lgs-iki-metin-tablo',
          type: 'table',
          interactive: true,
          title: 'Karşılaştırma eksenleri ve soruları',
          columns: ['Eksen', 'Sorulacak soru', 'Örnek bulgu', 'Sık yapılan hata'],
          rows: [
            ['Konu', 'İkisi de neyden söz ediyor?', 'İkisi de okuma alışkanlığını ele alıyor.', 'Konu ortaklığını ana fikir ortaklığı sanmak'],
            ['Bakış açısı', 'Yazarlar konuya nasıl bakıyor?', 'Biri ekran okumayı savunuyor, öteki eleştiriyor.', 'Kendi görüşünü yazarlara mal etmek'],
            ['Anlatım biçimi', 'Metnin dokusu ne?', 'Biri tartışmacı, öteki açıklayıcı.', 'Biçimi içerikle karıştırmak'],
            ['Ulaşılan sonuç', 'Hangi hükme varıyorlar?', 'İkisi de düzenin önemli olduğunu söylüyor.', 'Farklı gerekçeleri farklı sonuç sanmak'],
            ['Anlatım (çeviri/baskı)', 'Aynı içerik nasıl aktarılmış?', 'Bir çeviri kısa cümleler, öteki uzun cümleler kullanıyor.', 'Çeviri farkını içerik farkı sanmak'],
          ],
          caption:
            'Bir soruda genellikle tek bir eksen sorulur. Soru kökündeki ifadeyi okuyup ekseni belirlemek, cevabı yarıya indirir.',
        },
        {
          id: 'lgs-iki-metin-tuzak',
          type: 'trap',
          title: 'İki metni birbirine karıştırmak',
          wrong: 'İki metni okudum, aklımda ortak bir izlenim kaldı; seçeneklere ona göre bakarım.',
          right: 'Her metnin ana fikrini ayrı ayrı yazarım, sonra seçeneklerde hangi metnin hangisini söylediğini kontrol ederim.',
          body: 'Çeldiriciler sıklıkla “I. metnin söylediğini II. metne mal etme” biçiminde kurulur. İki ana fikri ayrı yazmadan bu tuzağı fark etmek zordur.',
        },
      ],
    },

    {
      id: 'lgs-turkce-uyarlama-karsilastirma',
      title: 'Edebî metin ile medya sunumu',
      lead: 'Program dört eksen veriyor: kahraman, mekân, zaman, olay. Karşılaştırma bu dördünde yapılır.',
      blocks: [
        {
          id: 'lgs-uyarlama-anlatim',
          type: 'prose',
          body: `**T.8.3.33** kazanımı, edebî eserin yazılı metni ile medya sunumunun karşılaştırılmasını ister ve açıklamasında dört ekseni açıkça sayar: **kahramanlar, mekân, zaman ve olay.**

Bir romanın filme çekilmesi, bir hikâyenin çizgi filme dönüştürülmesi, bir masalın tiyatroya uyarlanması — hepsi birer **uyarlamadır**. Uyarlamada değişiklik olması kaçınılmazdır; çünkü iki ortamın araçları farklıdır. Kitap bir karakterin iç dünyasını cümlelerle anlatabilir; film bunu ancak yüz ifadesiyle, müzikle ya da bir sahneyle gösterebilir.

**Kahraman ekseni.** Uyarlamada bazı kişiler çıkarılır, bazıları birleştirilir, bazılarının özellikleri değiştirilir. Soru genellikle “hangi kahraman filmde farklı sunulmuştur?” biçiminde gelir.

**Mekân ekseni.** Kitapta beş ayrı yerde geçen olaylar filmde tek bir mekânda toplanabilir. Ya da tersine, kitapta belirsiz bırakılan bir mekân filmde ayrıntılı gösterilir.

**Zaman ekseni.** Kitapta yıllara yayılan bir hikâye filmde birkaç güne sıkıştırılabilir. Geriye dönüşler eklenebilir ya da kaldırılabilir.

**Olay ekseni.** En sık değişen eksen budur: olaylar kısaltılır, sıralaması değiştirilir, bazıları hiç gösterilmez.

Bu eksenlerde karşılaştırma yaparken **değerlendirme yapmaktan kaçın.** “Kitap daha iyiydi” bir beğenidir, karşılaştırma değil. Karşılaştırma şöyle olur: “Kitapta üç yıla yayılan olaylar, filmde tek bir kışa sıkıştırılmıştır.” Bu cümle bir gözlemdir ve doğrulanabilir.

Bir not daha: uyarlama karşılaştırması aynı zamanda medya okuryazarlığının parçasıdır. Bir sonraki derslerden birinde (Medya Metinleri) medya metinlerinin amacını çözümleyeceğiz; orada da aynı disiplin geçerli olacak — gözlem yap, hüküm verme.`,
        },
        {
          id: 'lgs-uyarlama-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Yazılı metin ile medya sunumu',
          columns: ['Yazılı metin', 'Medya sunumu'],
          rows: [
            { label: 'İç dünya', values: ['Cümlelerle doğrudan anlatılır', 'Yüz ifadesi, müzik, sahne ile sezdirilir'] },
            { label: 'Zaman', values: ['Yıllara yayılabilir', 'Genellikle kısaltılır'] },
            { label: 'Mekân', values: ['Okurun hayalinde kurulur', 'Görsel olarak belirlenir'] },
            { label: 'Kahraman sayısı', values: ['Çok olabilir', 'Sadeleştirilir, bazıları birleştirilir'] },
            { label: 'Olay örgüsü', values: ['Ayrıntılı', 'Kısaltılır, sıralaması değişebilir'] },
            { label: 'Karşılaştırma dili', values: ['“Kitapta … anlatılır”', '“Filmde … gösterilir”'] },
          ],
          insight:
            'Karşılaştırma cümlesi bir gözlem olmalı, bir beğeni değil: “Filmde olay örgüsü kısaltılmıştır” doğru; “Film daha başarılıydı” yanlıştır.',
        },
        {
          id: 'lgs-uyarlama-tuzak',
          type: 'trap',
          title: 'Eksen belirtmeden karşılaştırma yapmak',
          wrong: 'Film kitaptan farklıydı; karşılaştırmayı yaptım.',
          right: 'Hangi eksende farklıydı? Kahraman mı, mekân mı, zaman mı, olay mı? Ekseni söylemeden yapılan karşılaştırma denetlenemez.',
          body: 'Program dört ekseni açıkça sayıyor. Cevabını bu eksenlerden birine bağlayabildiğinde hem doğru hem savunulabilir olur.',
        },
        {
          id: 'lgs-uyarlama-hafiza',
          type: 'memory',
          title: 'İki soruluk denetim',
          body: '**Kanıtı gösterebiliyor muyum?** → çıkarım geçerli. **Hangi eksende?** → karşılaştırma geçerli.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Çıkarım geçerli mi?',
      prompt:
        'Metin: “Kütüphanenin ışıkları akşam yedide sönüyor. Son öğrenci genellikle altı buçukta çıkıyor.” Şu seçenekleri değerlendir: (A) Kütüphane akşam yedide kapanıyor. (B) Öğrenciler kütüphaneyi kapanıştan önce terk ediyor. (C) Kütüphanede akşam yedide kimse kalmıyor.',
      steps: [
        { title: '(A) için metinde ara', body: 'Metin “ışıklar sönüyor” diyor, “kapanıyor” demiyor. Işıkların sönmesi kapanma anlamına gelebilir ama zorunlu değil; bakım için de sönebilir. Karşı örnek kurulabiliyor → **elenir**.' },
        { title: '(B) için birleştirme testi', body: 'Son öğrenci altı buçukta çıkıyor, ışıklar yedide sönüyor. İki bilgi birleştiğinde öğrencilerin ışıklar sönmeden önce çıktığı zorunlu olarak çıkıyor. Karşı örnek kurulamıyor → **geçerli çıkarım**.' },
        { title: '(C) için karşı örnek ara', body: 'Öğrenciler çıkıyor ama görevliler kalıyor olabilir. “Kimse kalmıyor” ifadesi öğrencilerden fazlasını kapsıyor. Karşı örnek kurulabiliyor → **elenir**.' },
        { title: 'Ortak hatayı adlandır', body: '(A) ve (C) makul görünüyor; ikisi de metinle çelişmiyor. Ama ikisinde de metnin söylediğinden küçük bir sıçrama var: “ışık = kapanış”, “öğrenci = herkes”.' },
        { title: 'Kuralı yaz', body: 'Sıçrama ne kadar küçük olursa olsun çıkarımı geçersiz kılar. Ölçüt zorunluluktur, yakınlık değil.' },
      ],
      answer: 'Yalnız (B) metinden çıkarılabilir.',
      takeaway: 'Küçük sıçramalar da sıçramadır. Karşı örnek testi onları yakalar.',
    },
    {
      title: 'Seviye 2 — İki metni karşılaştır',
      prompt:
        'I. metin: “Ekrandan okumak, sayfaları kolayca kaydırmayı sağlar; ama bu kolaylık, okurun bir cümlede durup düşünmesini zorlaştırır.” II. metin: “Ekrandan okuyan öğrenci, aradığı bilgiye saniyeler içinde ulaşır. Bu hız, kısa süreli araştırmalarda büyük avantajdır.” İki metin hangi eksende ayrılıyor?',
      steps: [
        { title: 'Her metnin ana fikrini yaz', body: 'I: Ekran okuması, üzerinde durup düşünmeyi zorlaştırır. II: Ekran okuması, hızlı bilgiye ulaşmada avantaj sağlar.' },
        { title: 'Konu eksenini kontrol et', body: 'İkisi de ekrandan okumadan söz ediyor. Konu ortak; ayrım burada değil.' },
        { title: 'Bakış açısı eksenini kontrol et', body: 'I. metin olumsuz bir yön vurguluyor, II. metin olumlu bir yön. Ayrım burada.' },
        { title: 'Çelişki mi, farklı yön mü?', body: 'Dikkat: iki metin birbiriyle çelişmiyor. Biri derinliği, öteki hızı ele alıyor. İkisi aynı anda doğru olabilir. Ayrım, ele alınan yönde.' },
        { title: 'Karşılaştırma cümlesini kur', body: '“İki metin de ekrandan okumayı konu edinir; ancak I. metin düşünme derinliğine, II. metin erişim hızına odaklanır.” İki cümlelik özet kuruldu.' },
      ],
      answer:
        'Konu ekseninde birleşiyor, bakış açısı (ele alınan yön) ekseninde ayrılıyorlar.',
      takeaway:
        'İki metnin farklı şeyler söylemesi, birbirini çürüttüğü anlamına gelmez. Ayrımı doğru adlandırmak önemlidir.',
    },
    {
      title: 'Seviye 3 — Uyarlama karşılaştırması',
      prompt:
        'Bir hikâyede olaylar bir yıl boyunca dört farklı kasabada geçiyor ve anlatıcı kahramanın düşüncelerini uzun uzun aktarıyor. Aynı hikâyenin çizgi film uyarlamasında olaylar tek bir kasabada, bir yaz boyunca geçiyor ve kahramanın düşünceleri yerine yüz ifadeleri kullanılıyor. Bu iki sunum hangi eksenlerde farklılaşmıştır?',
      steps: [
        { title: 'Mekân eksenini kontrol et', body: 'Dört kasaba → tek kasaba. **Farklılaşma var.** Mekân sadeleştirilmiş.' },
        { title: 'Zaman eksenini kontrol et', body: 'Bir yıl → bir yaz. **Farklılaşma var.** Zaman kısaltılmış.' },
        { title: 'Kahraman eksenini kontrol et', body: 'Kahraman sayısı hakkında bilgi verilmemiş; ama kahramanın **sunuluş biçimi** değişmiş: iç düşünceler yerine yüz ifadeleri. Bu, kahraman ekseninde bir farklılaşmadır.' },
        { title: 'Olay eksenini kontrol et', body: 'Olayların kendisinin değişip değişmediği söylenmemiş. Zaman ve mekân kısaldığı için olayların da kısalmış olması muhtemel, ama metin bunu söylemiyor → **çıkarım yapma**.' },
        { title: 'Beğeni bildirmemeye dikkat et', body: '“Çizgi film daha sade olduğu için daha iyi” demek karşılaştırma değil beğenidir. Gözlemle yetin: neyin nasıl değiştiğini söyle.' },
      ],
      answer:
        'Mekân, zaman ve kahramanın sunuluş biçimi eksenlerinde farklılaşmıştır. Olay ekseninde metin bilgi vermediği için çıkarım yapılamaz.',
      takeaway:
        'Uyarlama sorularında da kanıt disiplini geçerli: verilmemiş bilgiyi tamamlamaya çalışma.',
    },
  ],

  questionClue: {
    concept: 'çıkarım ve karşılaştırma sorusu',
    statement:
      'Soru kökünde “parçadan çıkarılabilir / çıkarılamaz”, “parçaya göre söylenebilir”, “iki metin arasında”, “I. metin ile II. metin” ifadelerinden biri varsa, sorulan şey kanıttır.',
    clues: [
      '“Aşağıdakilerden hangisi parçadan çıkarılamaz?” biçimindeki soru kökleri',
      'İki ayrı metnin I ve II diye numaralandırılması',
      'Seçeneklerin metinle çelişmeyen ama metinde yazılı olmayan ifadeler içermesi',
      'Bir eserin hem kitap hem film hâlinden söz edilmesi',
      'Soru kökünde “ortak yön” ya da “farklılık” ifadeleri',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, metinle uyumlu tahminleri geçerli çıkarım sanmanı bekliyor. Çözüm yolu karşı örnek testidir: metindeki her bilgi doğruyken seçeneğin yanlış olduğu bir durum kurabiliyorsan seçenek elenir.',
    boundary:
      'Bu ipuçlarını “metinde geçmeyen her seçenek yanlıştır” gibi bir kısayola çevirme. Geçerli çıkarımlar da metinde yazılı değildir; ölçüt yazılılık değil zorunluluktur.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Parçadan çıkarılabilecek ya da çıkarılamayacak yargının sorulması',
      'İki metnin ortak yönünün ya da ayrıldığı noktanın sorulması',
      'Aynı konuda iki yazarın bakış açısının karşılaştırılması',
      'Bir eserin kitap ve film hâllerinin kahraman, mekân, zaman, olay yönünden karşılaştırılması',
      'Aynı metnin iki farklı çevirisinin anlatım yönünden karşılaştırılması',
      'Bir metne dayanarak verilen bir yorumun geçerliliğinin sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Metin: “Sınıfın camı kırık olduğu için hafta boyunca kapı açık bırakıldı.” Seçenek: “Sınıfta hava akımı vardı.” Bu çıkarım geçerli midir?',
      hint: 'Karşı örnek kurmayı dene: metindeki bilgiler doğruyken bu seçenek yanlış olabilir mi?',
      answer:
        'Geçerli değildir. Cam kırık ve kapı açıksa hava akımı olması muhtemeldir; ama zorunlu değildir. Kırık cam kapatılmış olabilir, koridor kapalı olabilir, hava hareketsiz olabilir. Metin hava akımından hiç söz etmiyor. Makul görünmesi kanıt yerine geçmez.',
    },
    {
      prompt:
        'İki metin de “şehirdeki gürültü” konusunu ele alıyor. Birincisi gürültünün dikkati dağıttığını, ikincisi gürültüye alışmanın mümkün olduğunu söylüyor. Bu iki metin birbiriyle çelişiyor mu?',
      hint: 'İki yargı aynı anda doğru olabilir mi?',
      answer:
        'Zorunlu olarak çelişmiyorlar. Gürültü dikkati dağıtabilir ve insan zamanla ona alışabilir; iki yargı aynı anda doğru olabilir. İki metin aynı konuda farklı **yönlere** odaklanıyor. Çelişki iddiası için birinin söylediğini ötekinin açıkça reddetmesi gerekirdi.',
    },
    {
      prompt:
        'Bir soruda “kitapta üç bölümde anlatılan olaylar filmde tek sahnede verilmiştir” deniyor. Bu, hangi eksende yapılmış bir karşılaştırmadır?',
      hint: 'Program dört eksen sayıyor: kahraman, mekân, zaman, olay.',
      answer:
        'Olay ekseninde yapılmış bir karşılaştırmadır: olay örgüsünün kısaltılması söz konusu. Aynı zamanda dolaylı olarak zaman eksenine de dokunur, çünkü üç bölümlük bir anlatı tek sahneye sığdırılmıştır. Cümlenin değerli yanı bir gözlem olması, bir beğeni bildirmemesidir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey metni anlamak değil, metinde durmak',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama, sonuç çıkarma, analiz yapma ve eleştirel düşünme becerilerini ölçecek nitelikte hazırlandığını belirtir. Çıkarım sorularında bunun somut karşılığı şudur: metni anlamak yetmez; metnin sınırında durabilmek gerekir. Çeldiriciler dünya bilgisiyle uyumlu, makul ve çekici seçilir; öğrencinin metinden bir adım fazla atmasını bekler.',
    measures: [
      'Metin içi anlam ile metin dışı anlamı ayırabilme',
      'Bir çıkarımın zorunlu olup olmadığını karşı örnekle sınayabilme',
      'İki metnin ana fikrini ayrı ayrı çıkarabilme',
      'Karşılaştırmayı adlandırılmış bir eksende yapabilme',
      'Farklı yön ile çelişkiyi ayırabilme',
      'Uyarlama karşılaştırmasında gözlem ile beğeniyi ayırabilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Mahalle fırını sabah altıda açılıyor. Kepenk kalktığında kapının önünde genellikle beş altı kişi bekliyor oluyor. Fırıncı, ilk tepsiyi çıkarır çıkarmaz ekmekler birkaç dakika içinde tükeniyor. Öğleye doğru gelenler ikinci tepsiyi bekliyor; bu tepsi bazen bir saatten uzun sürede hazırlanıyor.`,
    question: 'Bu parçadan aşağıdakilerden hangisi **çıkarılamaz**?',
    options: [
      {
        text: 'Fırının önünde açılıştan önce bekleyen müşteriler oluyor',
        explanation:
          'Çıkarılabilir. “Kepenk kalktığında kapının önünde beş altı kişi bekliyor oluyor” cümlesi bunu doğrudan söylüyor; metin içi anlam.',
      },
      {
        text: 'İlk tepsi ekmek, talebi karşılamaya yetmiyor',
        explanation:
          'Çıkarılabilir. İlk tepsinin birkaç dakikada tükenmesi ve öğleye doğru gelenlerin ikinci tepsiyi beklemesi birlikte bunu zorunlu kılıyor. İki bilginin birleşiminden çıkan geçerli bir çıkarım.',
      },
      {
        text: 'Öğleye doğru gelenler ekmeği hemen alamıyor',
        explanation:
          'Çıkarılabilir. “Öğleye doğru gelenler ikinci tepsiyi bekliyor” ifadesi doğrudan bunu bildiriyor; metin içi anlam.',
      },
      {
        text: 'Fırıncı, talebi karşılamak için daha fazla çalışan almalı',
        explanation:
          'Doğru cevap — çıkarılamaz. Bu bir çözüm önerisi ve bir gerekliliktir; parçada ne çalışan sayısından ne de bir öneriden söz ediliyor. Metindeki her bilgi doğruyken bu öneri gereksiz de olabilir (örneğin fırının kapasitesi sabit olabilir). Karşı örnek kurulabiliyor.',
      },
      {
        text: 'İkinci tepsinin hazırlanması ilk tepsiden uzun sürebiliyor',
        explanation:
          'Çıkarılabilir. “Bu tepsi bazen bir saatten uzun sürede hazırlanıyor” ifadesi ile ilk tepsinin açılışta hazır olması karşılaştırıldığında bu sonuç zorunlu olarak çıkıyor.',
      },
    ],
    answer_index: 3,
    stem_analysis:
      'Soru kökü “çıkarılamaz” diyor; yani dört seçeneğin kanıtını gösterip kanıtsız kalanı işaretleyeceğim. Yöntem: her seçenek için metinde ya doğrudan bir cümle ya da birleşen iki bilgi aramak.',
    critical_point:
      'Kritik nokta, dördüncü seçeneğin parçanın anlattığı soruna makul bir çözüm önermesi. Metin gerçekten bir yetersizlik anlatıyor; bu yüzden öneri “yerinde” görünüyor. Ama metin bir öneride bulunmuyor ve gereklilik bildiren hiçbir ifade taşımıyor.',
    takeaway:
      'Bir metnin sorunu anlatması, o soruna önerilen çözümü de söylediği anlamına gelmez.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question:
        'Metin: “Otobüs her sabah sekizde kalkıyor. Ali dün sekiz buçukta durağa vardı.” Aşağıdakilerden hangisi bu metinden çıkarılabilir?',
      options: [
        'Ali dün otobüse yetişememiştir',
        'Ali her gün geç kalmaktadır',
        'Otobüs dün gecikmiştir',
        'Ali otobüsle gitmeyi sevmemektedir',
      ],
      answer_index: 0,
      explanation:
        'Otobüs sekizde kalkıyor, Ali sekiz buçukta vardı: iki bilgi birleştiğinde yetişememesi zorunlu olarak çıkar. İkinci seçenek “her gün” diyor, metin yalnız dünden söz ediyor. Üçüncü seçenek için metinde gecikme bilgisi yok. Dördüncü seçenek bir duygu iddiasıdır ve metinde hiçbir dayanağı bulunmuyor.',
    },
    {
      purpose: 'concept',
      question:
        'İki metin de “sınav kaygısı” konusunu ele alıyor; biri kaygının performansı düşürdüğünü, öteki az miktarda kaygının odaklanmayı artırdığını söylüyor. Bu iki metin için aşağıdakilerden hangisi doğrudur?',
      options: [
        'Konu ekseninde birleşir, ulaşılan sonuç ekseninde ayrılırlar',
        'Hem konu hem sonuç ekseninde ayrılırlar',
        'Aynı ana fikri farklı sözcüklerle söylerler',
        'Biri öznel, öteki nesnel bir metindir',
      ],
      answer_index: 0,
      explanation:
        'İki metin de aynı konuyu (sınav kaygısı) ele aldığı için konu ekseninde birleşiyorlar; ancak kaygının etkisi konusunda farklı sonuçlara varıyorlar. İkinci seçenek konu ayrımı olduğunu söylüyor, bu yanlış. Üçüncü seçenek ana fikirlerin aynı olduğunu iddia ediyor, oysa farklılar. Dördüncü seçenek için metinlerin yargı türü hakkında bilgi verilmemiş.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Metinde A ve B olayları aynı gün olmuş; öyleyse A, B’ye yol açmıştır.” diyor. Bu öğrencinin hatası nedir?',
      options: [
        'Zaman ortaklığından neden-sonuç ilişkisi çıkarmak',
        'Metin içi anlamı metin dışı anlam sanmak',
        'İki metni birbirine karıştırmak',
        'Karşılaştırma eksenini belirlememek',
      ],
      answer_index: 0,
      explanation:
        'İki olayın aynı anda gerçekleşmesi, birinin ötekine yol açtığını göstermez. Neden-sonuç ilişkisi için metnin bunu söylemesi ya da bilgilerin bunu zorunlu kılması gerekir. Bu, çıkarım sorularında en sık yapılan sıçramadır. Öğrenci metinleri karıştırmıyor ve ortada bir karşılaştırma sorusu da yok.',
    },
  ],

  summary: [
    'Metin içi anlam doğrudan yazılıdır; kanıtı tek bir cümledir.',
    'Metin dışı anlam yazılı değildir ama metindeki bilgilerden zorunlu olarak çıkar.',
    'Metinle uyumlu ama zorunlu olmayan her şey çıkarılamaz; makullük kanıt değildir.',
    'Karşı örnek testi: metindeki her bilgi doğruyken seçenek yanlış olabiliyorsa elenir.',
    'İki olayın aynı anda olması, aralarında neden-sonuç bulunduğunu göstermez.',
    'Karşılaştırmaya başlamadan önce her metnin ana fikrini ayrı ayrı yaz.',
    'Konu ortaklığı ana fikir ortaklığı değildir; aynı konuda ters şeyler söylenebilir.',
    'Karşılaştırma adlandırılmış bir eksende yapılır: konu, bakış açısı, anlatım biçimi, ulaşılan sonuç.',
    'İki metnin farklı yönlere odaklanması, çeliştikleri anlamına gelmez.',
    'Uyarlama karşılaştırması dört eksende yapılır: kahraman, mekân, zaman, olay — ve gözlemle yetinir, beğeni bildirmez.',
  ],

  next: [
    'Metin Türleri: Fıkra, Makale, Deneme, Roman, Destan (T.8.3.26)',
    'Medya Metinleri ve Bilgi Kaynağının Güvenilirliği (T.8.3.29, T.8.3.31)',
    'Görsel, Tablo ve Grafik Okuma (T.8.3.27, T.8.3.32)',
  ],
})

export default lesson
