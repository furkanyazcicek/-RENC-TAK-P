import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Fiilde Çatı
 * Kazanım : T.8.4.20
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * PROGRAM SINIRI — BAĞLAYICI
 * T.8.4.20'nin açıklaması şudur: "Kavram tanımlarına girilmeden
 * anlamsal farklılıklara değinilir." Kazanımın adı da "fiillerin çatı
 * özelliklerinin ANLAMA OLAN KATKISINI kavrar" biçimindedir.
 * Bu yüzden ders terim tanımı ezberletmez; dört anlam sorusu üzerine
 * kurulur. Terimler yalnız etiket olarak, kaynaklarda karşına çıktığında
 * tanıyabilesin diye anılır.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-fiilde-cati',
  topic: 'Fiilde Çatı',
  order: 1,
  title: 'Fiilde Çatı: Anlama Katkısı',
  subtitle:
    'Program tanım ezberi istemiyor, anlam farkı istiyor. Dört soru: işi kim yapıyor, kendine mi yapıyor, birlikte mi yapıyor, neyi yapıyor?',
  minutes: 42,
  kazanimlar: [
    { kod: 'T.8.4.20', metin: 'Fiillerin çatı özelliklerinin anlama olan katkısını kavrar.' },
  ],
  prerequisites: [
    { topic: 'Cümlenin ögeleri', why: 'Özne ve nesneyi bulamadan çatının anlama katkısını göremezsin.' },
    { topic: 'Fiilimsiler', why: 'Çatı, cümlenin yüklemiyle ilgilidir; yüklemi ayırt etmek gerekir.' },
  ],
  outcomes: [
    'Bir cümlede işi yapanın belli olup olmadığını ayırt edebileceksin.',
    'Öznenin işi kendi üzerinde yapıp yapmadığını gösterebileceksin.',
    'Bir işin karşılıklı ya da birlikte yapıldığını fark edebileceksin.',
    'Bir fiilin nesne alıp almadığını sınayabileceksin.',
    'Aynı ekin farklı anlamlar kurabildiğini örnekle açıklayabileceksin.',
  ],

  opening: {
    title: 'Aynı olay, farklı anlatım',
    lead: 'Program açıkça söylüyor: tanım ezberlenmez, anlam farkı kavranır. Bu ders o çizgide ilerler.',
    body: `Şu üç cümleyi karşılaştır:

“**Görevli** camı sildi.” — İşi yapan belli: görevli.
“**Cam** silindi.” — İşi yapan belli değil; yalnız işin olduğunu biliyoruz.
“**Çocuk** yıkandı.” — İşi yapan da işten etkilenen de aynı kişi.

Üç cümle de bir temizlik işini anlatıyor; ama üçü farklı bir bilgi veriyor. Birincisi failinden söz ediyor, ikincisi failini gizliyor, üçüncüsü faili ile etkileneni birleştiriyor.

İşte “çatı” dediğimiz şey tam olarak budur: **fiilin, öznesi ve nesnesiyle kurduğu ilişki.** Ve MEB 8. sınıf programındaki **T.8.4.20** kazanımı bu konuyu bir terim listesi olarak değil, bir **anlam** konusu olarak ister. Açıklaması nettir: *“Kavram tanımlarına girilmeden anlamsal farklılıklara değinilir.”*

O hâlde bu derste tanım ezberlemeyeceğiz. Bunun yerine dört soru soracağız:

1. **İşi kim yapıyor — belli mi?**
2. **Özne, işi kendi üzerinde mi yapıyor?**
3. **İş karşılıklı ya da birlikte mi yapılıyor?**
4. **Fiil bir nesne alıyor mu?**

Bu dört soru, konunun tamamını kapsar. Kaynaklarda göreceğin “etken, edilgen, dönüşlü, işteş, geçişli, geçişsiz” gibi adları yalnız birer **etiket** olarak anacağız — tanımlarını ezberlemene gerek yok, çünkü anlamı bildiğinde etiketi zaten koyabilirsin.

Bir uyarıyla başlayalım: bu konuda ek ezberi özellikle tehlikelidir. Aynı ek bazen işi yapanı gizler, bazen özneyi kendi üzerine döndürür. Kararı ek değil anlam verir.`,
  },

  concepts: [
    {
      term: 'İşi yapan belli (etken anlam)',
      body: 'Cümlede işi yapan kişi ya da varlık açıkça bulunur: “**Görevli** camı sildi.” Özne işi bizzat yapar. Sorularda bu, “işi yapan bellidir” biçiminde ifade edilir.',
    },
    {
      term: 'İşi yapan belli değil (edilgen anlam)',
      body: 'Cümlede yalnız işten etkilenen görünür; faili söylenmez: “**Cam** silindi.” Kimin sildiğini bilmiyoruz. Özne gibi duran öge aslında işi yapan değil, işten etkilenendir.',
    },
    {
      term: 'Özne kendi üzerinde (dönüşlü anlam)',
      body: 'Özne işi yapar ve aynı zamanda işten etkilenen de kendisidir: “Çocuk **yıkandı**.” Kendini yıkadı. “Kendi kendine” ifadesini eklediğinde cümle anlamlı kalıyorsa bu anlam vardır.',
    },
    {
      term: 'Karşılıklı ya da birlikte (işteş anlam)',
      body: 'İş birden çok kişi tarafından karşılıklı ya da birlikte yapılır: “İki arkadaş **selamlaştı**.” (karşılıklı) — “Çocuklar **koşuştu**.” (birlikte). Tek kişiyle yapılamaz.',
    },
    {
      term: 'Nesne alan fiil (geçişli)',
      body: 'Yükleme “neyi / kimi” sorusu sorulabiliyorsa fiil nesne alır: “Kitabı **okudu**.” Nesne cümlede yazılı olmasa bile sorulabilmesi yeterlidir.',
    },
    {
      term: 'Nesne almayan fiil (geçişsiz)',
      body: 'Yükleme “neyi / kimi” sorusu sorulamıyorsa fiil nesne almaz: “Çocuk **uyudu**.” “Neyi uyudu?” sorusu anlamsızdır.',
    },
  ],

  why: {
    question: 'Neden ek ezberi bu konuda en çok burada yanıltır?',
    body: `Çünkü aynı ek iki farklı anlam kurabilir ve ikisi de çok yaygındır.

Şu iki cümleye bak: “Çocuk **yıkandı**.” ve “Bulaşıklar **yıkandı**.”

İkisinde de aynı ek var. Ama birincide çocuk kendini yıkamıştır — işi yapan da etkilenen de aynı kişidir. İkincide bulaşıkları biri yıkamıştır; kim olduğunu bilmiyoruz — işi yapan gizlenmiştir.

Ek aynı, anlam farklı. O hâlde kararı ne verecek? **Anlam.** Testi şöyle uygula: cümleye “**kendi kendine**” ifadesini ekle.

- “Çocuk kendi kendine yıkandı.” → anlamlı → özne işi kendi üzerinde yapıyor.
- “Bulaşıklar kendi kendine yıkandı.” → anlamsız (bulaşıklar kendini yıkayamaz) → işi yapan gizlenmiş.

Aynı tuzak “taranmak”, “giyinmek”, “süslenmek”, “açılmak” fiillerinde de vardır. “Kapı açıldı.” cümlesinde kapı kendini açmadı; biri açtı. “Çocuk giyindi.” cümlesinde ise çocuk kendini giydirdi.

İkinci bir ezber tuzağı işteş anlamdadır. Öğrencilerin çoğu “-ş eki varsa işteştir” der. Oysa “Süt **pişti**.” cümlesinde “-ş” yoktur ama fiil de işteş değildir; “Gülüştüler.” cümlesinde işteş anlam vardır. Ölçüt şudur: **iş tek bir kişiyle yapılabilir mi?** Yapılamıyorsa işteş anlam vardır.

Programın “kavram tanımlarına girilmeden” demesinin sebebi tam olarak bu: tanım ve ek ezberi öğrenciyi yanlış refleksle donatıyor. Anlam testleri ise her cümlede çalışıyor.`,
  },

  decision: {
    title: 'Çatının anlama katkısını bulma yolu',
    lead: 'Dört soru, dört anlam. Sırayla sorulur ve her biri bir bilgi verir.',
    intro:
      'Bir cümlede fiilin anlama katkısını bulmak için şu beş durağı uygula. İlk dört durak anlamı, beşincisi doğrulamayı sağlar.',
    steps: [
      {
        title: '1. Yüklemi bul',
        body: 'Çatı, cümlenin yüklemiyle ilgilidir. Fiilimsiler ya da yan cümlecikler değil, temel cümlenin yüklemi incelenir.',
      },
      {
        title: '2. “İşi kim yapıyor?” sor',
        body: 'Cevap cümlede varsa işi yapan bellidir. Yoksa ve cümlede yalnız işten etkilenen görünüyorsa işi yapan gizlenmiştir. Bu, en sık sorulan ayrımdır.',
      },
      {
        title: '3. “Kendi kendine” testini uygula',
        body: 'Cümleye “kendi kendine” ifadesini ekle. Anlamlı kalıyorsa özne işi kendi üzerinde yapıyordur. Anlamsızlaşıyorsa işi yapan başkasıdır ve gizlenmiştir.',
      },
      {
        title: '4. “Tek kişiyle olur mu?” testini uygula',
        body: 'İşin tek bir kişiyle yapılıp yapılamayacağını sor. Yapılamıyorsa iş karşılıklı ya da birlikte yapılıyordur.',
      },
      {
        title: '5. Nesne sorusunu sor',
        body: 'Yükleme “neyi / kimi” sor. Cevap alabiliyorsan fiil nesne alır. Bu bilgi, Anlatım Bozuklukları dersinde nesne eksikliği hatalarını bulmanı sağlayacak.',
      },
    ],
    takeaway: 'Ek değil anlam karar verir. Testler her cümlede aynı biçimde çalışır.',
  },

  decisionTree: {
    title: 'Dört anlamı ayıran üç kontrol',
    intro:
      'Kontroller sırayla uygulanır. En dar ölçüt başta, en genişi sonda.',
    checks: [
      {
        question: '“Kendi kendine” ifadesini eklediğimde cümle anlamlı kalıyor mu?',
        yes: 'Özne işi kendi üzerinde yapıyordur (dönüşlü anlam). Örnek: “Çocuk kendi kendine yıkandı.”',
        no: 'Kendi üzerinde değil; ikinci kontrole geç.',
      },
      {
        question: 'İş tek bir kişiyle yapılabilir mi?',
        yes: 'Karşılıklılık yok; üçüncü kontrole geç.',
        no: 'İş karşılıklı ya da birlikte yapılıyordur (işteş anlam). Örnek: “İki arkadaş selamlaştı.”',
      },
      {
        question: 'Cümlede işi yapan belli mi?',
        yes: 'İşi yapan bellidir (etken anlam). Örnek: “Görevli camı sildi.”',
        no: 'İşi yapan gizlenmiştir (edilgen anlam). Örnek: “Cam silindi.”',
      },
    ],
    takeaway:
      '“Kendi kendine” testini başa koymamızın sebebi, aynı ekin hem kendi üzerinde yapma hem gizleme anlamı kurabilmesidir.',
  },

  comparison: {
    title: 'Üç anlamı testle ayır',
    columns: ['İşi yapan belli', 'İşi yapan gizli', 'Özne kendi üzerinde'],
    rows: [
      { label: 'Örnek', values: ['Görevli camı sildi.', 'Cam silindi.', 'Çocuk yıkandı.'] },
      { label: 'İşi yapan', values: ['Cümlede var', 'Cümlede yok', 'Öznenin kendisi'] },
      { label: 'İşten etkilenen', values: ['Nesne (cam)', 'Özne gibi duran öge (cam)', 'Öznenin kendisi'] },
      { label: '“Kendi kendine” testi', values: ['Anlamsızlaşır', 'Anlamsızlaşır', 'Anlamlı kalır'] },
      { label: 'Yaygın adı', values: ['Etken', 'Edilgen', 'Dönüşlü'] },
      { label: 'Sık yapılan hata', values: ['—', 'Dönüşlü sanmak', 'Edilgen sanmak'] },
    ],
    insight:
      'İkinci ve üçüncü sütun aynı eki kullanabilir. Ayrımı yapan tek şey “kendi kendine” testidir.',
  },

  traps: [
    {
      title: '“-l / -n eki varsa işi yapan gizlidir” ezberi',
      wrong: '“Çocuk yıkandı.” cümlesinde “-n” var; öyleyse işi yapan gizlenmiştir.',
      right: '“Kendi kendine” testini uygularım: “Çocuk kendi kendine yıkandı.” anlamlı. Demek ki özne işi kendi üzerinde yapıyor.',
      body: 'Aynı ek “Bulaşıklar yıkandı.” cümlesinde işi yapanı gizler. Ek aynı, anlam farklı; kararı test verir.',
    },
    {
      title: 'Birlikte yapılan her işi karşılıklı sanmak',
      wrong: '“Öğrenciler sınıfı temizledi.” cümlesinde birden çok kişi çalışıyor; işteş anlam vardır.',
      right: 'Testi uygularım: bu iş tek bir kişiyle yapılabilir mi? Evet, bir kişi de sınıfı temizleyebilir. Öyleyse karşılıklılık yok.',
      body: 'İşteş anlamın ölçütü kişi sayısı değil, işin tek kişiyle yapılıp yapılamamasıdır. “Selamlaşmak”, “dövüşmek”, “anlaşmak” tek kişiyle olmaz.',
    },
    {
      title: 'Geçişliliği çatı anlamlarıyla karıştırmak',
      wrong: 'Cümlede nesne yok; öyleyse işi yapan gizlenmiştir.',
      right: 'Nesne olmaması ayrı bir özelliktir. “Çocuk uyudu.” cümlesinde nesne yok ama işi yapan da belli.',
      body: 'Dört soru birbirinden bağımsızdır. Nesne sorusu ile fail sorusu ayrı ayrı sorulur ve ayrı cevaplar verir.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-cati-fail',
      title: 'İşi yapan belli mi? Anlamın en çok değiştiği yer',
      lead: 'Bir cümlede failin gizlenmesi yalnız dil bilgisi meselesi değildir; anlatımın odağını değiştirir.',
      blocks: [
        {
          id: 'lgs-cati-fail-anlatim',
          type: 'prose',
          body: `“Belediye, parktaki bankları onardı.” cümlesiyle “Parktaki banklar onarıldı.” cümlesi aynı olayı anlatır; ama farklı bir şey söyler.

Birincide odak **failde**: kim yaptı sorusunun cevabı veriliyor, sorumluluk görünür hâlde. İkincide odak **işte**: bankların onarıldığını öğreniyoruz, kimin onardığını bilmiyoruz.

Bu fark, yazarın bilinçli bir tercihidir ve metinlerde belirli amaçlarla kullanılır.

**Fail gerçekten bilinmiyorsa:** “Kapı gece açılmış.” Kimin açtığı bilinmiyor.
**Fail önemli değilse:** “Sınav sonuçları açıklandı.” Kimin açıkladığı bilgi değeri taşımıyor.
**Fail bilerek gizleniyorsa:** “Bazı hatalar yapıldı.” Kimin yaptığı söylenmiyor. Medya metinlerinde bu kullanım dikkat ister — Medya Metinleri dersinde bu konuya döneceğiz.

Bu yüzden kazanımın adı “anlama olan katkısını kavrar” biçiminde yazılmıştır: çatı, cümlenin ne söylediğini değil **neyi öne çıkardığını** belirler.

Failin gizlendiği cümlelerde bir incelik daha var: cümlede özne gibi duran öge, aslında işi yapan değil işten **etkilenendir**. “Cam silindi.” cümlesinde cam silme işini yapmadı. Bu yüzden bazı kaynaklar bu ögeye “sözde özne” der. Adı ezberlemene gerek yok; bilmen gereken, o ögenin işi yapmadığıdır.

Sınavda bu ayrımı ölçen sorular genellikle şöyle sorar: “Aşağıdaki cümlelerin hangisinde işi yapan belli değildir?” ya da “Hangisinde eylemi gerçekleştiren belirtilmemiştir?” Terim kullanılmadan da sorulabilir; bu yüzden anlamı bilmek yeterlidir.`,
        },
        {
          id: 'lgs-cati-fail-tablo',
          type: 'table',
          interactive: true,
          title: 'Fail görünür mü, gizli mi?',
          columns: ['Cümle', 'İşi yapan', 'Özne gibi duran öge', 'Anlam'],
          rows: [
            ['Belediye bankları onardı.', 'Belediye', 'Belediye (gerçek fail)', 'İşi yapan belli'],
            ['Bankalar onarıldı.', 'Bilinmiyor', 'Banklar (işten etkilenen)', 'İşi yapan gizli'],
            ['Sınav sonuçları açıklandı.', 'Söylenmemiş, önemli değil', 'Sonuçlar', 'İşi yapan gizli'],
            ['Öğretmen sonuçları açıkladı.', 'Öğretmen', 'Öğretmen', 'İşi yapan belli'],
            ['Kapı gece açılmış.', 'Bilinmiyor', 'Kapı', 'İşi yapan gizli'],
            ['Rüzgâr kapıyı açtı.', 'Rüzgâr', 'Rüzgâr', 'İşi yapan belli'],
          ],
          caption:
            'Üçüncü sütun kritik: failin gizlendiği cümlelerde özne gibi duran öge işi yapmaz, işten etkilenir.',
        },
        {
          id: 'lgs-cati-fail-analiz',
          type: 'sentence_analysis',
          title: 'Aynı olay, iki anlatım',
          prompt:
            'Aşağıda aynı olay iki farklı biçimde anlatılıyor. Parçalara tıklayarak odağın nasıl değiştiğini gör.',
          segments: [
            {
              text: 'Görevliler, kütüphanedeki eski rafları değiştirdi.',
              label: 'İşi yapan belli',
              explanation:
                'Özne “görevliler” işi bizzat yapıyor. Nesne “eski rafları”. Okur, kimin yaptığını biliyor; sorumluluk görünür.',
              tone: 'brand',
            },
            {
              text: 'Kütüphanedeki eski raflar değiştirildi.',
              label: 'İşi yapan gizli',
              explanation:
                'Aynı olay, ama fail yok. “Raflar” özne gibi duruyor; oysa raflar değiştirme işini yapmadı, işten etkilendi. Odak işin kendisinde.',
              tone: 'aqua',
            },
            {
              text: '(Test: “Raflar kendi kendine değiştirildi.”)',
              label: '“Kendi kendine” testi',
              explanation:
                'Anlamsız. Raflar kendilerini değiştiremez. Demek ki özne işi kendi üzerinde yapmıyor; işi yapan başkası ve gizlenmiş.',
              tone: 'danger',
            },
            {
              text: '(Karşılaştır: “Çocuk kendi kendine giyindi.”)',
              label: 'Karşıt örnek',
              explanation:
                'Anlamlı. Burada özne işi kendi üzerinde yapıyor. Aynı ek yapısı, farklı anlam. Testin neden gerekli olduğunu gösteriyor.',
              tone: 'success',
            },
          ],
          takeaway:
            'İki cümle de doğru Türkçedir ve aynı olayı anlatır. Fark, okurun neye bakmasının istendiğidir.',
        },
        {
          id: 'lgs-cati-fail-hoca',
          type: 'teacher_note',
          tone: 'exam',
          body:
            'Sorular bu ayrımı çoğu zaman terim kullanmadan sorar: “Hangisinde işi yapan belirtilmemiştir?” Terim bilmesen de anlam testini uygulayarak cevaplayabilirsin — program da zaten bunu istiyor.',
        },
      ],
    },

    {
      id: 'lgs-turkce-cati-ozne-iliskisi',
      title: 'Özne işten nasıl etkileniyor?',
      lead: 'İki özel durum var: özne işi kendi üzerinde yapıyor olabilir ya da iş birden çok kişi arasında paylaşılıyor olabilir.',
      blocks: [
        {
          id: 'lgs-cati-ozne-anlatim',
          type: 'prose',
          body: `**Birinci özel durum: özne işi kendi üzerinde yapıyor.**

“Çocuk yıkandı.”, “Kız taranıyor.”, “Adam giyindi.”, “Öğrenci hazırlandı.” Bu cümlelerde özne hem işi yapar hem işten etkilenir. Kendi kendine bir şey yapmaktadır.

Testi biliyorsun: cümleye “kendi kendine” ekle. Anlamlı kalıyorsa bu anlam vardır. “Çocuk kendi kendine yıkandı.” — anlamlı. “Bulaşıklar kendi kendine yıkandı.” — anlamsız.

Bu anlamın bir işareti daha vardır: özne genellikle **canlı ve iradesi olan** bir varlıktır. Bir kapı kendini açamaz, bir cam kendini silemez; ama bir çocuk kendini yıkayabilir. Bu işaret tek başına kanıt değildir ama testini destekler.

**İkinci özel durum: iş karşılıklı ya da birlikte yapılıyor.**

“İki arkadaş selamlaştı.” — karşılıklı: A, B’yi selamlıyor; B de A’yı.
“Çocuklar bahçede koşuştu.” — birlikte: birden çok kişi aynı işi aynı anda yapıyor.
“Tartıştılar.”, “Anlaştılar.”, “Dövüştüler.” — hepsi karşılıklı.

Testi: **bu iş tek bir kişiyle yapılabilir mi?** Yapılamıyorsa bu anlam vardır. Bir kişi tek başına selamlaşamaz, anlaşamaz, dövüşemez.

Dikkat: birden çok kişinin bir işi yapması yeterli değildir. “Öğrenciler sınıfı temizledi.” cümlesinde birden çok kişi var, ama bir kişi de sınıfı temizleyebilirdi. Karşılıklılık yok.

Bu iki anlam sık sık birbirine karıştırılır çünkü ikisinde de özne işin içine daha çok karışmış görünür. Ama testler ayrıdır: birincide **kendi üzerinde**, ikincide **birbirine ya da birlikte**.`,
        },
        {
          id: 'lgs-cati-ozne-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Kendi üzerinde mi, karşılıklı mı?',
          columns: ['Özne kendi üzerinde', 'Karşılıklı / birlikte'],
          rows: [
            { label: 'Örnek', values: ['Çocuk giyindi.', 'İki arkadaş selamlaştı.'] },
            { label: 'Test', values: ['“Kendi kendine” anlamlı mı?', 'Tek kişiyle yapılabilir mi?'] },
            { label: 'Kişi sayısı', values: ['Bir kişi yeter', 'En az iki kişi gerekir'] },
            { label: 'İşten etkilenen', values: ['Öznenin kendisi', 'Karşılıklı olarak taraflar'] },
            { label: 'Yaygın adı', values: ['Dönüşlü', 'İşteş'] },
            { label: 'Sık yapılan hata', values: ['Failin gizlendiğini sanmak', 'Çok kişi varsa işteş sanmak'] },
          ],
          insight:
            'İki testin de cevabı “hayır” ise, cümlede bu iki özel durumdan biri yoktur; geriye fail sorusu kalır.',
        },
        {
          id: 'lgs-cati-ozne-tuzak',
          type: 'trap',
          title: 'Cansız özneyi “kendi üzerinde” saymak',
          wrong: '“Kapı açıldı.” cümlesinde kapı açılma işini yaşıyor; özne işi kendi üzerinde yapıyor.',
          right: '“Kapı kendi kendine açıldı.” cümlesi ancak özel bir durumda (otomatik kapı) anlamlıdır. Sıradan bir kapı için işi yapan başkasıdır ve gizlenmiştir.',
          body: 'Cansız varlıkların iradesi yoktur; kendi üzerlerinde iş yapamazlar. Bu, testini destekleyen güçlü bir işarettir.',
        },
      ],
    },

    {
      id: 'lgs-turkce-cati-nesne',
      title: 'Fiil nesne alıyor mu?',
      lead: 'Dördüncü soru ayrı bir eksende çalışır ve ileride anlatım bozukluklarını bulmanı sağlayacak.',
      blocks: [
        {
          id: 'lgs-cati-nesne-anlatim',
          type: 'prose',
          body: `Dördüncü soru öteki üçünden bağımsızdır: **fiil bir nesne alıyor mu?**

Testi basittir: yükleme “neyi / kimi” sor. Cevap alabiliyorsan fiil nesne alır.

- “Kitabı okudu.” → Neyi okudu? → kitabı. **Nesne alır.**
- “Çocuk uyudu.” → Neyi uyudu? → anlamsız. **Nesne almaz.**

Nesnenin cümlede **yazılı olması şart değildir**; sorulabilmesi yeterlidir. “Bütün gün okudu.” cümlesinde nesne yazılı değil ama “neyi okudu?” sorusu anlamlı; fiil nesne alabilir.

Bu bilgi neden önemli? Üç sebeple.

**Birincisi:** Cümlenin Ögeleri dersinde gördüğün gibi, nesne almayan bir fiilde nesne aramak zaman kaybıdır.

**İkincisi:** Bir fiil ek alarak nesne alma özelliğini kazanabilir ya da kaybedebilir. “Çocuk uyudu.” (nesne almaz) → “Anne çocuğu uyuttu.” (nesne alır: çocuğu). Burada iş, başkasına yaptırılmıştır; kaynaklarda buna “ettirgen” denir. Adı ezberlemene gerek yok; bilmen gereken, cümlede artık bir iş yaptıran ve bir iş yapan bulunduğudur.

**Üçüncüsü:** Anlatım Bozuklukları dersinde göreceğin en yaygın hatalardan biri, farklı nesne isteyen iki fiili aynı nesneye bağlamaktır: “Öğrencileri uyardı ve gerekli bilgiyi verdi.” Burada sorun yoktur; ama “Kitapları okudu ve rafa koydu.” gibi cümlelerde nesne ortak kullanılabiliyorsa sorun çıkmaz. Ortak kullanılamadığında bozukluk doğar. Şimdilik şunu bil: fiillerin nesne isteyip istememesi, cümlenin doğru kurulmasını belirler.

Son olarak şunu hatırla: dört soru birbirinden bağımsızdır. Bir cümlede fail gizli olabilir ve fiil yine nesne almayabilir: “Buraya gelinmez.” Fail yok, nesne de yok. Her soruyu ayrı ayrı sor.`,
        },
        {
          id: 'lgs-cati-nesne-tablo',
          type: 'table',
          interactive: true,
          title: 'Dört soruyu aynı cümleye sor',
          columns: ['Cümle', 'İşi yapan belli mi?', 'Kendi üzerinde mi?', 'Nesne alır mı?'],
          rows: [
            ['Görevli camı sildi.', 'Evet', 'Hayır', 'Evet (neyi? camı)'],
            ['Cam silindi.', 'Hayır', 'Hayır', 'Hayır'],
            ['Çocuk yıkandı.', 'Evet', 'Evet', 'Hayır'],
            ['Anne çocuğu yıkadı.', 'Evet', 'Hayır', 'Evet (kimi? çocuğu)'],
            ['İki arkadaş selamlaştı.', 'Evet (karşılıklı)', 'Hayır', 'Hayır'],
            ['Anne çocuğu uyuttu.', 'Evet (yaptıran)', 'Hayır', 'Evet (kimi? çocuğu)'],
          ],
          caption:
            'Aynı dört soru her cümleye sorulur ve her cümlede farklı bir profil çıkar. Terim ezberine hiç gerek kalmıyor.',
        },
        {
          id: 'lgs-cati-nesne-tuzak',
          type: 'trap',
          title: 'Nesne yazılı değilse “nesne almaz” demek',
          wrong: '“Bütün gün okudu.” cümlesinde nesne yok; fiil nesne almaz.',
          right: 'Yükleme “neyi okudu?” diye sorabiliyorum ve soru anlamlı. Demek ki fiil nesne alabilir; yalnız bu cümlede yazılmamış.',
          body: 'Ölçüt, nesnenin cümlede bulunması değil, sorunun anlamlı olmasıdır. “Neyi uyudu?” anlamsızdır; “neyi okudu?” anlamlıdır.',
        },
        {
          id: 'lgs-cati-nesne-hafiza',
          type: 'memory',
          title: 'Dört soruluk çatı taraması',
          body: '**Kim yapıyor?** · **Kendi kendine mi?** · **Tek kişiyle olur mu?** · **Neyi yapıyor?**',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Aynı ek, iki anlam',
      prompt:
        'Şu iki cümledeki anlam farkını göster: (1) “Küçük kız taranıyor.” (2) “Halılar baharda taranır.”',
      steps: [
        { title: '(1) “kendi kendine” testi', body: '“Küçük kız kendi kendine taranıyor.” → anlamlı. Kız kendi saçını tarıyor. → **Özne işi kendi üzerinde yapıyor.**' },
        { title: '(1) fail sorusu', body: 'İşi yapan belli: küçük kız. Ayrıca işten etkilenen de o.' },
        { title: '(2) “kendi kendine” testi', body: '“Halılar kendi kendine taranır.” → anlamsız. Halılar kendini tarayamaz. → Kendi üzerinde değil.' },
        { title: '(2) fail sorusu', body: 'Halıları kim tarıyor? Cümlede yok. → **İşi yapan gizlenmiş.**' },
        { title: 'Sonucu karşılaştır', body: 'İki cümlede de aynı ek var. Ayrımı yapan tek şey testler. Ek ezberiyle çalışan öğrenci ikisine de aynı adı verirdi.' },
      ],
      answer:
        '(1) Özne işi kendi üzerinde yapıyor (dönüşlü anlam) · (2) İşi yapan gizlenmiş (edilgen anlam)',
      takeaway: '“Kendi kendine” testi, bu konudaki en güvenilir tek araçtır.',
    },
    {
      title: 'Seviye 2 — Karşılıklı mı, yalnız çok kişili mi?',
      prompt:
        'Şu cümleleri ayır: (1) “Öğrenciler sınıfı süpürdü.” (2) “Kardeşler yolda karşılaştı.” (3) “Takım oyuncuları maçtan sonra kucaklaştı.”',
      steps: [
        { title: '(1) tek kişi testi', body: 'Bir kişi tek başına sınıfı süpürebilir mi? Evet. → **Karşılıklılık yok.** Yalnız işi yapan belli.' },
        { title: '(2) tek kişi testi', body: 'Bir kişi tek başına karşılaşabilir mi? Hayır; karşılaşmak için en az iki taraf gerekir. → **Karşılıklı.**' },
        { title: '(3) tek kişi testi', body: 'Bir kişi tek başına kucaklaşabilir mi? Hayır. → **Karşılıklı.**' },
        { title: 'Kişi sayısı tuzağını gör', body: '(1) cümlesinde de çok kişi var; ama bu yeterli değil. Ölçüt kişi sayısı değil, işin doğası.' },
        { title: 'Sınavda nasıl sorulur?', body: '“Hangisinde iş karşılıklı yapılmıştır?” ya da “Hangisinde eylem birden fazla kişi tarafından karşılıklı gerçekleştirilmiştir?” biçiminde.' },
      ],
      answer: '(1) karşılıklılık yok · (2) karşılıklı · (3) karşılıklı',
      takeaway: 'Çok kişi olması karşılıklılık kanıtı değildir; işin tek kişiyle yapılamaması kanıttır.',
    },
    {
      title: 'Seviye 3 — Dört soruyu bir cümleye birden sor',
      prompt:
        'Cümle: “Öğretmen, dersten sonra tahtayı sildirdi.” Dört soruyu da uygula.',
      steps: [
        { title: 'Yüklemi bul', body: 'Yüklem: “sildirdi”. Dört soruyu buna soracağız.' },
        { title: 'İşi kim yapıyor?', body: 'Silme işini öğretmen yapmıyor; birine yaptırıyor. Cümlede yaptıran belli (öğretmen), yapan belirtilmemiş. Bu, iş yaptırma anlamıdır (kaynaklarda “ettirgen”).' },
        { title: '“Kendi kendine” testi', body: '“Öğretmen kendi kendine tahtayı sildirdi.” → anlamsız; çünkü sildirmek başkasına yaptırmaktır. → Kendi üzerinde değil.' },
        { title: 'Tek kişiyle olur mu?', body: 'Bir kişi başkasına iş yaptırabilir. → Karşılıklılık yok.' },
        { title: 'Nesne alır mı?', body: '“Sildirdi → neyi sildirdi?” → tahtayı. → **Nesne alır.** “Silmek” zaten nesne alan bir fiildi; “-dir” eki iş yaptırma anlamı ekledi.' },
      ],
      answer:
        'İşi yaptıran belli (öğretmen), yapan belirtilmemiş; özne işi kendi üzerinde yapmıyor; karşılıklılık yok; fiil nesne alıyor (tahtayı).',
      takeaway:
        'Dört soru birbirinden bağımsızdır. Hepsini sorduğunda cümlenin tam profilini çıkarmış olursun.',
    },
  ],

  questionClue: {
    concept: 'fiilde çatı sorusu',
    statement:
      'Soru kökünde “işi yapan”, “eylemi gerçekleştiren”, “karşılıklı yapılmıştır”, “özne kendi üzerinde” gibi ifadeler varsa, sorulan şey terim değil anlamdır.',
    clues: [
      'Seçeneklerin kısa, bağımsız cümleler olması',
      'Birden fazla seçenekte aynı ekin geçmesi',
      'Soru kökünde “işi yapan belli değildir” gibi tanımlayıcı ifadeler',
      'Cümlelerde canlı ve cansız öznelerin karışık verilmesi',
      'Aynı fiilin iki farklı cümlede kullanılması',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, ek ezberiyle değil anlam testiyle çözülmek üzere kurulmuş. Çözüm yolu “kendi kendine” ve “tek kişiyle olur mu?” testlerini uygulamak, sonra fail sorusunu sormaktır.',
    boundary:
      'Bu ipuçlarını “-l/-n varsa edilgen, -ş varsa işteş” gibi bir kısayola çevirme. Program “kavram tanımlarına girilmeden” diyor; ek ezberi bu kazanımda özellikle yanıltıcıdır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Dört cümleden hangisinde işi yapanın belli olmadığının sorulması',
      'Hangi cümlede öznenin işi kendi üzerinde yaptığının sorulması',
      'Hangi cümlede işin karşılıklı yapıldığının sorulması',
      'Aynı fiilin iki cümledeki anlam farkının sorulması',
      'Hangi cümlede işin başkasına yaptırıldığının sorulması',
      'Bir cümlede fiilin nesne alıp almadığının sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Bahçedeki çiçekler her sabah sulanıyor.” Bu cümlede işi yapan belli midir? Gerekçeni bir testle göster.',
      hint: '“Kendi kendine” testini uygula.',
      answer:
        'Belli değildir. “Çiçekler kendi kendine sulanıyor.” cümlesi anlamsızdır; çiçekler kendilerini sulayamaz. Demek ki sulama işini biri yapıyor ama cümlede söylenmemiş. “Çiçekler” özne gibi duruyor ama işi yapmıyor, işten etkileniyor.',
    },
    {
      prompt:
        '“Komşular bayramda bayramlaştı.” cümlesinde iş karşılıklı mı yapılmıştır? Testi uygula.',
      hint: 'Tek kişiyle yapılabilir mi?',
      answer:
        'Evet, karşılıklı yapılmıştır. Bir kişi tek başına bayramlaşamaz; bayramlaşmak için en az iki taraf gerekir. Kişi sayısının çok olması tek başına yeterli olmazdı — ölçüt, işin doğası gereği tek kişiyle yapılamamasıdır.',
    },
    {
      prompt:
        '“Annem bana ceketimi giydirdi.” ile “Ben ceketimi giydim.” cümleleri arasındaki anlam farkı nedir?',
      hint: 'İşi kim yapıyor, kim yaptırıyor?',
      answer:
        'Birinci cümlede işi yapan annem; ben işten etkileniyorum — iş bana yaptırılmıyor, benim üzerimde yapılıyor. İkinci cümlede işi yapan da işten etkilenen de benim; özne işi kendi üzerinde yapıyor. Aynı eylem, iki farklı özne-nesne ilişkisi.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey terim bilgisi değil, anlam farkı',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama ve analiz yapma becerilerini ölçecek nitelikte hazırlandığını belirtir. Kazanımın açıklaması da “kavram tanımlarına girilmeden anlamsal farklılıklara değinilir” diyerek aynı yönü gösterir. Bu yüzden sorular çoğu zaman terimleri hiç kullanmadan, doğrudan anlamı sorar: “Hangisinde işi yapan belli değildir?” gibi.',
    measures: [
      'Bir cümlede failin belirtilip belirtilmediğini görebilme',
      '“Kendi kendine” testiyle öznenin işten nasıl etkilendiğini belirleyebilme',
      '“Tek kişiyle olur mu?” testiyle karşılıklılığı sınayabilme',
      'Aynı ekin farklı anlamlar kurabildiğini fark edebilme',
      'İşin başkasına yaptırıldığı cümleleri tanıyabilme',
      'Fiilin nesne alıp almadığını soruyla sınayabilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün cümleler',
    passage: `Aşağıdaki cümleleri birlikte okuyalım:
I. Bahçe kapısı sabaha karşı açılmış.
II. Küçük kardeşim aynanın önünde süslendi.
III. İki takım maçtan sonra tokalaştı.
IV. Görevliler koridordaki camları sildi.`,
    question: 'Bu cümlelerden hangisinde **işi yapan belli değildir**?',
    options: [
      {
        text: 'I. cümle',
        explanation:
          'Doğru cevap. Kapıyı kimin açtığı söylenmemiş. “Kapı kendi kendine açılmış.” testi sıradan bir kapı için anlamsız; demek ki işi biri yapmış ama cümlede belirtilmemiş. “Bahçe kapısı” özne gibi duruyor, oysa işten etkilenen.',
      },
      {
        text: 'II. cümle',
        explanation:
          'İşi yapan belli: küçük kardeşim. Üstelik işi kendi üzerinde yapıyor — “kendi kendine süslendi” anlamlı. Bu cümle failin gizlendiği değil, öznenin kendi üzerinde iş yaptığı bir örnektir.',
      },
      {
        text: 'III. cümle',
        explanation:
          'İşi yapan belli: iki takım. Üstelik iş karşılıklı yapılmış — bir takım tek başına tokalaşamaz. Fail gizlenmemiş, yalnız paylaşılmış.',
      },
      {
        text: 'IV. cümle',
        explanation:
          'İşi yapan açıkça yazılı: görevliler. Nesne de var: camları. Bu, failin en görünür olduğu cümle.',
      },
      {
        text: 'I. ve II. cümleler',
        explanation:
          'II. cümlede fail açıkça belirtilmiş (küçük kardeşim); bu yüzden seçenek kendi içinde yanlış. Aynı ek yapısının iki cümlede farklı anlam kurması, bu seçeneği inandırıcı kılıyor.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru kökü terim kullanmadan doğrudan anlamı soruyor: “işi yapan belli değildir”. Dört cümleye de aynı iki testi uygulayacağım: “kendi kendine” testi ve fail sorusu.',
    critical_point:
      'Kritik nokta, I. ve II. cümlelerin benzer ek yapıları taşıması. Ek ezberiyle çalışan öğrenci ikisini de aynı sayar. Ayrımı yapan tek şey “kendi kendine” testidir: kardeşim için anlamlı, kapı için anlamsız.',
    takeaway:
      'Aynı ek, iki farklı anlam kurabilir. Kararı ek değil test verir.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question: 'Aşağıdaki cümlelerin hangisinde özne, işi **kendi üzerinde** yapmaktadır?',
      options: [
        'Sınıfın camları tatilde silindi.',
        'Öğrenci sunum için hazırlandı.',
        'Belediye parktaki bankları onardı.',
        'Çocuklar bahçede koşuştu.',
      ],
      answer_index: 1,
      explanation:
        '“Öğrenci kendi kendine hazırlandı.” cümlesi anlamlıdır; öğrenci hem işi yapıyor hem işten etkileniyor. Birinci cümlede camlar kendini silemez, fail gizlenmiştir. Üçüncüde fail açıkça yazılı ve iş bir nesne üzerinde yapılıyor. Dördüncüde iş birlikte yapılıyor, kendi üzerinde değil.',
    },
    {
      purpose: 'concept',
      question: '“Anne, hasta çocuğu doktora muayene ettirdi.” cümlesinde işi kim yapmaktadır?',
      options: [
        'Anne muayene işini kendisi yapmıştır',
        'Muayene işini yapan belli değildir',
        'Anne işi başkasına yaptırmıştır',
        'İş karşılıklı olarak yapılmıştır',
      ],
      answer_index: 2,
      explanation:
        'Anne muayene etmiyor; doktora yaptırıyor. Cümlede hem yaptıran (anne) hem yapan (doktor) belirtilmiş. Fail gizli değil; tam tersine ikisi de görünür. Karşılıklılık yok: muayene tek yönlü bir iştir ve tek kişiyle yapılabilir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Sokak lambaları akşamları yanıyor.” cümlesi için “özne işi kendi üzerinde yapıyor” diyor. Bu öğrencinin hatası nedir?',
      options: [
        '“Kendi kendine” testini uygulamadan karar vermek',
        'Karşılıklılığı gözden kaçırmak',
        'Fiilin nesne aldığını fark edememek',
        'Yüklemi yanlış belirlemek',
      ],
      answer_index: 0,
      explanation:
        '“Sokak lambaları kendi kendine yanıyor.” cümlesi otomatik sistemler dışında anlamlı değildir; lambaları biri ya da bir düzenek yakar. Cansız varlıkların iradesi yoktur; kendi üzerlerinde iş yapamazlar. Öğrenci testi uygulamadan, fiilin biçimine bakarak karar vermiştir.',
    },
  ],

  summary: [
    'Program tanım ezberi istemez: “Kavram tanımlarına girilmeden anlamsal farklılıklara değinilir.”',
    'Dört soru konunun tamamını kapsar: işi kim yapıyor, kendi üzerinde mi, birlikte mi, neyi yapıyor?',
    'İşi yapan cümlede varsa fail bellidir; yoksa gizlenmiştir ve özne gibi duran öge işten etkilenendir.',
    'Failin gizlenmesi bir tercihtir: fail bilinmiyor, önemsiz ya da bilerek söylenmiyor olabilir.',
    '“Kendi kendine” testi, öznenin işi kendi üzerinde yapıp yapmadığını kesinleştirir.',
    'Cansız varlıklar kendi üzerlerinde iş yapamaz; bu, testini destekleyen güçlü bir işarettir.',
    '“Tek kişiyle olur mu?” testi karşılıklılığı belirler; kişi sayısı tek başına kanıt değildir.',
    'Bir fiil ek alarak iş yaptırma anlamı kazanabilir: “uyudu” → “uyuttu”.',
    'Nesne testi ayrı bir eksendir: yükleme “neyi/kimi” sorulabiliyorsa fiil nesne alır.',
    'Aynı ek farklı anlamlar kurabilir; kararı her zaman anlam testi verir.',
  ],

  next: [
    'Cümle Türleri (T.8.4.19)',
    'Anlatım Bozuklukları: Dil Bilgisi Yönünden (T.8.3.8)',
    'Yazım Kuralları (T.8.4.16)',
  ],
})

export default lesson
