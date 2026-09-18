import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.2 DNA ve Genetik Kod · 1. ders
 * Kazanım : F.8.2.1.1 · F.8.2.1.2 · F.8.2.1.3
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAM SINIRLARI — BAĞLAYICI (kazanım açıklamalarından birebir)
 *   F.8.2.1.1 → "Bazların isimleri verilirken pürin ve pirimidin ayrımına
 *                girilmez."
 *   F.8.2.1.2 → a) "Hidrojen, glikozit, ester, fosfodiester bağlarına
 *                  girilmez."
 *               b) "DNA'daki hataların onarılıp onarılmadığı belirtilir."
 *               c) "DNA'daki nükleotid hesaplamaları verilmez."
 *   F.8.2.1.3 → a) "Replikasyon ifadesi kullanılmaz."
 *               b) "Eşlenme deneyleri anlatılmaz."
 *               c) "Eşlenme ile ilgili hesaplama sorularına girilmez."
 *
 * Bu sınırlar derste UYGULANIR ve öğrenciye AÇIKÇA söylenir; çünkü
 * piyasadaki pek çok kaynak bu sınırların dışına çıkıyor ve öğrenci
 * müfredatta olmayan konulara zaman harcıyor.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-dna-yapisi',
  topic: 'DNA ve Genetik Kod',
  order: 1,
  title: 'DNA’nın Yapısı: Nükleotidden Kromozoma',
  subtitle:
    'Dört harfle yazılmış bir bilgi. Nükleotid, gen, DNA ve kromozom aynı şeyin farklı ölçekleridir.',
  minutes: 43,
  kazanimlar: ['F.8.2.1.1', 'F.8.2.1.2', 'F.8.2.1.3'],
  prerequisites: [
    { topic: 'Hücre ve çekirdek', why: 'DNA’nın nerede bulunduğunu bilmeden yapısını konumlandıramazsın.' },
    { topic: 'Model kavramı', why: 'Kazanım DNA’nın yapısının model üzerinde gösterilmesini ister; modelin ne olduğunu bilmek gerekir.' },
  ],
  outcomes: [
    'Nükleotid, gen, DNA ve kromozomu ölçek sırasına koyabileceksin.',
    'Bir nükleotidin üç parçasını sayabileceksin.',
    'Baz eşleşme kuralını kullanarak bir ipliğin karşısındaki diziyi yazabileceksin.',
    'DNA’nın kendini eşlemesini adım adım anlatabileceksin.',
    'Bu konuda müfredat dışında kalan konuları tanıyıp zaman kaybetmeyeceksin.',
  ],

  opening: {
    title: 'Aynı bilgi, her hücrede',
    lead: 'Kolundaki bir deri hücresiyle saçındaki bir hücre farklı işler yapar; ama ikisinde de aynı bilgi vardır.',
    body: `Bir canlının bütün özellikleri — göz rengi, saç biçimi, kan grubu, boy uzunluğu eğilimi — hücrelerinde saklanan bir bilgiye dayanır. Bu bilgi **DNA** adı verilen bir molekülde yazılıdır ve hücrenin çekirdeğinde bulunur.

DNA’nın en şaşırtıcı yanı, bilginin yalnız **dört harfle** yazılmış olmasıdır. Bu harfler dört baz çeşididir: **adenin (A), timin (T), guanin (G), sitozin (C).** Dört harfle yazılan bir yazı, uzunluğu arttıkça sayısız farklı anlam taşıyabilir — tıpkı yirmi dokuz harfle sayısız kitap yazılabildiği gibi.

Bu derste dört kavramı ve aralarındaki ilişkiyi kuracağız: **nükleotid, gen, DNA, kromozom.** Öğrencilerin çoğu bu dördünü ayrı ayrı ezberler ve aralarındaki ilişkiyi kaçırır. Oysa dördü ayrı şeyler değil, **aynı yapının farklı ölçekleridir.**

Şöyle düşün: bir kitapta harf, sözcük, sayfa ve cilt vardır. Harf en küçük birimdir; sözcükler harflerden oluşur; sayfa sözcükleri taşır; cilt ise sayfaların paketlenmiş hâlidir. DNA’da da benzer bir ölçek sırası vardır.

Bu derste ayrıca DNA’nın kendini nasıl eşlediğini göreceğiz — yani bir hücre bölünmeden önce bilginin nasıl ikiye çıkarıldığını.

Son olarak önemli bir uyarı. Bu konuda piyasadaki pek çok kaynak müfredatın **dışına** çıkıyor: bağ türleri, nükleotid sayısı hesaplamaları, eşlenme deneyleri. MEB 8. sınıf programı bunları **açıkça dışarıda bırakır.** Ders boyunca hangi konunun kapsam dışı olduğunu sana ayrıca söyleyeceğim; böylece zamanını doğru yere harcarsın.`,
  },

  concepts: [
    {
      term: 'Nükleotid',
      body: 'DNA’yı oluşturan en küçük yapı birimidir. Üç parçadan oluşur: bir **fosfat**, bir **şeker** ve bir **baz**. Nükleotidin adı taşıdığı bazdan gelir; adenin taşıyan nükleotide adenin nükleotidi denir.',
    },
    {
      term: 'Baz',
      body: 'DNA’da dört baz çeşidi bulunur: adenin (A), timin (T), guanin (G), sitozin (C). Bilgi bu dört harfin dizilişinde saklanır. *Programın sınırı: bazların pürin–pirimidin ayrımına girilmez.*',
    },
    {
      term: 'Gen',
      body: 'DNA üzerinde belirli bir özelliği belirleyen anlamlı bölümdür. Bir kitaptaki bir sözcük gibidir: harflerden oluşur ve tek başına bir anlam taşır.',
    },
    {
      term: 'DNA',
      body: 'Nükleotidlerin birbirine bağlanmasıyla oluşan, iki iplikten meydana gelen sarmal yapılı moleküldür. Üzerinde çok sayıda gen taşır.',
    },
    {
      term: 'Kromozom',
      body: 'DNA’nın sıkıca paketlenmiş hâlidir. Hücre bölünmesi sırasında belirgin biçimde görünür hâle gelir. Bir kitabın cildi gibi: içindeki sayfaları düzenli ve korunaklı biçimde bir arada tutar.',
    },
    {
      term: 'Baz eşleşme kuralı',
      body: 'İki iplik karşı karşıya geldiğinde bazlar rastgele değil, kurallı biçimde eşleşir: **A karşısına T**, **G karşısına C** gelir. Bu kural, bir ipliğin dizisi bilindiğinde ötekinin belirlenebilmesini sağlar.',
    },
  ],

  why: {
    question: 'Neden bu dört kavramı ayrı ayrı ezberlemek işe yaramıyor?',
    body: `Çünkü sorular kavramların tanımını değil, **aralarındaki ilişkiyi** ölçer. Kazanımın kendisi de bunu söylüyor: “kavramları açıklayarak bu kavramlar arasında **ilişki kurar**.”

Dördü ayrı ayrı ezberlendiğinde şöyle sorular cevaplanamaz: “Bir kromozomda kaç gen bulunur?”, “Gen mi DNA’nın parçasıdır, DNA mı genin?”, “Nükleotid bir genin içinde bulunur mu?”

İlişkiyi kurmanın en kolay yolu bir **ölçek sırası** düşünmektir:

**Nükleotid < Gen < DNA < Kromozom**

En küçük birim nükleotiddir. Nükleotidler arka arkaya dizilerek DNA ipliğini oluşturur. Bu iplik üzerindeki anlamlı bölümlere gen denir. DNA sıkıca paketlendiğinde kromozomu oluşturur.

Kitap benzetmesiyle: harf → sözcük → sayfa → cilt.

Bu sırayı kurduğunda pek çok soru kendiliğinden cevaplanır. Bir kromozomda çok sayıda gen vardır; bir gende çok sayıda nükleotid vardır; bir nükleotid tek başına bir anlam taşımaz — tıpkı tek bir harfin taşımadığı gibi.

Bir uyarı: benzetmeyi fazla zorlama. Benzetmeler anlamayı kolaylaştırır ama gerçeğin kendisi değildir. Örneğin bir kitapta sayfa ciltten önce gelir; DNA’da ise DNA molekülü paketlenerek kromozom olur. Benzetme burada sırayı doğru veriyor ama mekanizmayı değil.

Son olarak şunu netleştirelim: bu dersteki en önemli araç **baz eşleşme kuralıdır** (A–T, G–C). Hem DNA’nın iki ipliğinin nasıl bir arada durduğunu hem de kendini nasıl eşlediğini bu kural açıklar.`,
  },

  mechanism: {
    title: 'DNA kendini nasıl eşliyor?',
    lead:
      'Bir hücre bölünmeden önce bilgisini ikiye çıkarmak zorundadır. Bu, baz eşleşme kuralı sayesinde olur.',
    intro:
      'Aşağıdaki adımlar, DNA’nın kendini eşlemesini anlatır. Her adım bir öncekinin sonucudur. *Programın sınırı: bu olay için “replikasyon” terimi kullanılmaz ve eşlenme deneyleri anlatılmaz.*',
    steps: [
      {
        title: '1. İki iplik birbirinden ayrılır',
        body: 'Sarmal yapıyı oluşturan iki iplik, bir fermuar gibi açılır. Böylece her ipliğin bazları ortama açık hâle gelir.',
      },
      {
        title: '2. Her iplik bir kalıp görevi görür',
        body: 'Ayrılan ipliklerin her biri, karşısına yeni bir iplik kurulması için kalıp olur. Eski iplik atılmaz; yeni yapının parçası olarak kalır.',
      },
      {
        title: '3. Ortamdaki nükleotidler kurala göre yerleşir',
        body: 'Hücre içindeki serbest nükleotidler, kalıptaki bazların karşısına baz eşleşme kuralına uyarak gelir: A karşısına T, G karşısına C.',
      },
      {
        title: '4. Yeni iplikler tamamlanır',
        body: 'Yerleşen nükleotidler birbirine bağlanarak yeni iplikleri oluşturur. Her kalıp ipliğin karşısında bir yeni iplik kurulmuş olur.',
      },
      {
        title: '5. İki yeni DNA ortaya çıkar',
        body: 'Sonuçta iki DNA molekülü oluşur. Her birinde bir **eski** iplik ve bir **yeni** iplik bulunur. Bilgi ikiye çıkmıştır ve iki molekül de aynı bilgiyi taşır.',
      },
      {
        title: '6. Oluşan hatalar onarılabilir',
        body: 'Eşlenme sırasında yanlış bir nükleotid yerleşebilir. Hücrede bu hataları fark edip düzelten mekanizmalar bulunur; yani **DNA’daki hatalar onarılabilir.** Bu, kazanımın açıkça belirtilmesini istediği bir noktadır.',
      },
    ],
    takeaway:
      'Eşlenmenin tamamı tek bir kurala dayanır: A karşısına T, G karşısına C. Kural olmasaydı bilgi kopyalanamazdı.',
  },

  comparison: {
    title: 'Dört kavram, dört ölçek',
    columns: ['Nükleotid', 'Gen', 'Kromozom'],
    rows: [
      { label: 'Nedir?', values: ['DNA’nın en küçük yapı birimi', 'DNA üzerinde anlamlı bölüm', 'DNA’nın paketlenmiş hâli'] },
      { label: 'Neyden oluşur?', values: ['Fosfat + şeker + baz', 'Çok sayıda nükleotid', 'DNA ve onu paketleyen yapı'] },
      { label: 'Kitap benzetmesi', values: ['Harf', 'Sözcük', 'Cilt'] },
      { label: 'Ölçek', values: ['En küçük', 'Orta', 'En büyük'] },
      { label: 'Tek başına anlam taşır mı?', values: ['Hayır', 'Evet, bir özelliği belirler', 'Çok sayıda geni birlikte taşır'] },
    ],
    insight:
      'Dördü ayrı şeyler değil, aynı yapının farklı ölçekleridir. Sıra: nükleotid < gen < DNA < kromozom.',
  },

  traps: [
    {
      title: 'Kavramları ölçek sırasına koyamamak',
      wrong: 'Gen, kromozomun içinde; DNA ise genin içinde bulunur.',
      right: 'Sıra şudur: nükleotidler DNA’yı oluşturur, DNA üzerindeki anlamlı bölümler gendir, DNA paketlenerek kromozomu oluşturur.',
      body: 'İlişkiyi kurmanın en kolay yolu kitap benzetmesidir: harf → sözcük → sayfa → cilt. Sıra bir kez oturduğunda kavramlar karışmaz.',
    },
    {
      title: 'Bazların rastgele eşleştiğini sanmak',
      wrong: 'İki iplik karşı karşıya gelirken bazlar herhangi bir bazla eşleşebilir.',
      right: 'Eşleşme kurallıdır: **A karşısına T**, **G karşısına C**. Bu kural sayesinde bir ipliğin dizisi bilindiğinde öteki belirlenebilir.',
      body: 'Kural olmasaydı DNA kendini eşleyemezdi; çünkü kalıp ipliğin karşısına hangi nükleotidin geleceği belirsiz kalırdı.',
    },
    {
      title: 'Müfredat dışı konulara zaman harcamak',
      wrong: 'Bağ türlerini, nükleotid sayısı hesaplarını ve eşlenme deneylerini de öğrenmeliyim.',
      right: 'Program bunları **açıkça dışarıda bırakır.** Bağ türlerine girilmez, nükleotid hesaplamaları verilmez, eşlenme deneyleri anlatılmaz, “replikasyon” terimi kullanılmaz.',
      body: 'Bu sınırları bilmek çalışma zamanını doğru yere harcamanı sağlar. Piyasadaki bazı kaynaklar bu konuları ekler; ama 8. sınıf kazanımı bunları istemez.',
    },
  ],

  variables: {
    title: 'Model üzerinde inceleyelim: karşı ipliği kurabilir miyiz?',
    lead:
      'Kazanım F.8.2.1.2 DNA’nın yapısının **model üzerinde** gösterilmesini ister. Bu bölümde bir model kurma incelemesi yapacağız.',
    question: 'Bir ipliğin baz dizisi bilindiğinde karşı ipliğin dizisi kesin olarak belirlenebilir mi?',
    independent: {
      label: 'Verilen ipliğin baz dizisi',
      note: 'Ben seçiyorum: örneğin A–T–G–C–A',
    },
    setup: {
      label: 'Baz eşleşme kuralıyla model kurma',
      note: 'Renkli kartlarla karşı iplik dizilir',
    },
    dependent: {
      label: 'Karşı ipliğin baz dizisi',
      note: 'Ölçtüğüm: dizi tek bir sonuç mu veriyor?',
    },
    controlled: [
      'Baz eşleşme kuralı (A–T, G–C)',
      'İpliğin nükleotid sayısı',
      'Kart renklerinin baz karşılıkları',
      'Diziyi okuma yönü',
    ],
    caption:
      'Eşleşme kuralı bilerek sabit tutulur. Kural değişseydi karşı iplik belirlenemezdi; modelin çalışması bu kurala bağlıdır.',
  },

  experiment: {
    title: 'Model kurma adımları',
    intro:
      'Bu etkinlik sınıfta renkli kartlarla yapılabilir. Kazanımın istediği “model üzerinde gösterme” işi tam olarak budur.',
    steps: [
      { title: '1. Dört baz için dört renk belirle', body: 'A, T, G ve C bazları için birer renk seç. Renk karşılıkları etkinlik boyunca hiç değişmeyecek; bu bir kontrol değişkenidir.' },
      { title: '2. Birinci ipliği diz', body: 'Kartları yan yana koyarak bir baz dizisi oluştur. Örneğin: A – T – G – C – A.' },
      { title: '3. Kuralı uygula', body: 'Her kartın karşısına kurala uyan kartı yerleştir: A karşısına T, T karşısına A, G karşısına C, C karşısına G.' },
      { title: '4. İki ipliği karşılaştır', body: 'İki dizi birbirinin aynısı değildir; birbirini **tamamlar**. Bu, DNA’nın iki ipliğinin neden farklı ama uyumlu olduğunu gösterir.' },
      { title: '5. Kuralı bozmayı dene', body: 'Bir kartı kurala uymayan bir kartla değiştir. Model artık tutmaz: iki iplik birbirini tamamlamaz. Bu, kuralın neden zorunlu olduğunu gösterir.' },
      { title: '6. Eşlenmeyi canlandır', body: 'İki ipliği ayır ve her birinin karşısına yeni kartlar diz. Ortaya iki model çıkar; her birinde bir eski bir yeni iplik bulunur.' },
    ],
    takeaway: 'Model, kuralın zorunluluğunu göstermek için bozulabilir olmalıdır: bozduğunda tutmuyorsa kural gerçekten gereklidir.',
  },

  dataTable: {
    title: 'Baz eşleşme kuralıyla karşı ipliği kur',
    columns: ['Verilen iplik', 'Kural', 'Karşı iplik', 'Kontrol'],
    rows: [
      ['A', 'A karşısına T', 'T', 'Tek sonuç var'],
      ['T', 'T karşısına A', 'A', 'Tek sonuç var'],
      ['G', 'G karşısına C', 'C', 'Tek sonuç var'],
      ['C', 'C karşısına G', 'G', 'Tek sonuç var'],
      ['A – T – G – C – A', 'Kural sırayla uygulanır', 'T – A – C – G – T', 'Dizi kesin olarak belirlenir'],
    ],
    caption:
      'Son satır kazanımın istediği beceriyi gösterir: bir iplik verildiğinde karşı iplik kesin olarak yazılabilir. *Programın sınırı: nükleotid sayısı hesaplamaları bu düzeyde istenmez.*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-dna-olcek',
      title: 'Dört kavramı ölçek sırasına koymak',
      lead: 'Bu bölümün tek işi var: kavramları birbirine doğru biçimde bağlamak.',
      blocks: [
        {
          id: 'lgs-fen-dna-olcek-anlatim',
          type: 'prose',
          body: `**Nükleotid**, DNA’nın en küçük yapı birimidir ve üç parçadan oluşur: bir **fosfat**, bir **şeker** ve bir **baz**. Bu üç parça her nükleotidde bulunur; nükleotidleri birbirinden ayıran şey taşıdıkları **bazdır**.

Dört baz çeşidi vardır: **adenin (A), timin (T), guanin (G), sitozin (C).** Dolayısıyla dört çeşit nükleotid vardır.

*Programın sınırı burada devreye giriyor: bazların pürin–pirimidin ayrımına girilmez ve nükleotidin parçaları arasındaki bağ türleri anlatılmaz.* Senden istenen, üç parçayı saymak ve dört bazı bilmektir.

**DNA**, çok sayıda nükleotidin arka arkaya bağlanmasıyla oluşur. İki iplikten meydana gelir ve bu iki iplik birbirine sarılarak sarmal bir yapı oluşturur. İki iplik birbirinin aynısı değildir; baz eşleşme kuralı gereği birbirini **tamamlar**.

**Gen**, DNA üzerinde belirli bir özelliği belirleyen anlamlı bölümdür. Bir DNA molekülü üzerinde çok sayıda gen bulunur. Göz rengini belirleyen bölüm bir gendir; kan grubunu belirleyen bölüm başka bir gendir.

**Kromozom**, DNA’nın sıkıca paketlenmiş hâlidir. Hücre bölünmesi sırasında belirgin hâle gelir ve mikroskopta görülebilir. Bir kromozom üzerinde çok sayıda gen bulunur.

Şimdi ölçek sırasını kuralım: **nükleotid < gen < DNA < kromozom.**

Kitap benzetmesiyle: **harf < sözcük < sayfa < cilt.**

Bu sırayı kurduğunda şu sorular kendiliğinden cevaplanır. Bir kromozomda çok sayıda gen vardır. Bir gen çok sayıda nükleotidden oluşur. Bir nükleotid tek başına bir özellik belirlemez — tek bir harfin tek başına anlam taşımadığı gibi.

Bir uyarı: benzetme sırayı doğru verir ama mekanizmayı vermez. Gerçekte kromozom, DNA’nın paketlenmiş hâlidir; sayfaların ciltlenmesine benzer ama birebir aynısı değildir. Benzetmeyi anlamayı kolaylaştırmak için kullan, kanıt olarak değil.`,
        },
        {
          id: 'lgs-fen-dna-olcek-tablo',
          type: 'table',
          interactive: true,
          title: 'İlişkiyi iki yönde oku',
          columns: ['Kavram', 'Neyden oluşur?', 'Neyin parçasıdır?', 'Kitap benzetmesi'],
          rows: [
            ['Nükleotid', 'Fosfat + şeker + baz', 'Genin ve DNA’nın', 'Harf'],
            ['Gen', 'Çok sayıda nükleotid', 'DNA’nın', 'Sözcük'],
            ['DNA', 'Nükleotid dizileri (iki iplik)', 'Kromozomun', 'Sayfa'],
            ['Kromozom', 'Paketlenmiş DNA', 'Çekirdeğin', 'Cilt'],
          ],
          caption:
            'Tabloyu iki yönde okuyabilmek önemlidir: “neyden oluşur” aşağıdan yukarı, “neyin parçasıdır” yukarıdan aşağı okunur.',
        },
        {
          id: 'lgs-fen-dna-olcek-tuzak',
          type: 'trap',
          title: 'Geni DNA’dan büyük sanmak',
          wrong: 'Gen, içinde DNA barındıran bir yapıdır.',
          right: 'Gen, DNA üzerindeki bir **bölümdür**. DNA daha büyüktür ve üzerinde çok sayıda gen taşır.',
          body: 'Sıralamayı bir kez kurduğunda bu hata düzelir: nükleotid < gen < DNA < kromozom. Sözcük sayfadan büyük olamaz.',
        },
        {
          id: 'lgs-fen-dna-olcek-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Sorularda ilişki genellikle “hangisi hangisinin içinde bulunur?” biçiminde ölçülür. Ölçek sırasını bir kez ezberlemek yerine kitap benzetmesiyle kurarsan, sıra hiç karışmaz.',
        },
      ],
    },

    {
      id: 'lgs-fen-dna-eslesme',
      title: 'Baz eşleşme kuralı: iki ipliğin sırrı',
      lead: 'Tek bir kural, hem yapıyı hem eşlenmeyi açıklar.',
      blocks: [
        {
          id: 'lgs-fen-dna-eslesme-anlatim',
          type: 'prose',
          body: `DNA iki iplikten oluşur ve bu iki iplik karşı karşıya gelirken bazlar rastgele değil, **kurallı** biçimde eşleşir:

**A karşısına T · T karşısına A · G karşısına C · C karşısına G**

Bu kural iki önemli sonuç doğurur.

**Birinci sonuç: iki iplik birbirini tamamlar.** İplikler birbirinin aynısı değildir; biri bilindiğinde öteki kesin olarak belirlenebilir. Örneğin bir iplik A–T–G–C–A ise karşı iplik T–A–C–G–T olmak zorundadır.

**İkinci sonuç: DNA kendini eşleyebilir.** İki iplik ayrıldığında her biri bir kalıp olur ve karşısına kurala göre yeni bir iplik kurulur. Kural olmasaydı hangi nükleotidin nereye geleceği belirsiz kalır ve bilgi kopyalanamazdı.

Bu yüzden baz eşleşme kuralı bu konunun **çekirdeğidir.** Kuralı bildiğinde hem yapıyı hem eşlenmeyi açıklayabilirsin.

Şimdi bir uyarı: *programın sınırı gereği bu düzeyde **nükleotid hesaplamaları verilmez.*** Yani “Bir DNA’da 300 adenin varsa kaç timin vardır?” türünden hesap soruları 8. sınıf kazanımının kapsamında değildir. Senden istenen, kuralı uygulayarak **karşı ipliğin dizisini yazabilmektir** — bir hesap yapmak değil.

Bu ayrımı bilmek işine yarar: piyasadaki bazı kaynaklar hesap soruları ekler ve öğrenci bunlara zaman harcar. Kazanım bunu istemiyor.

Bir ayrıntı daha: eşlenme sırasında **yanlış bir nükleotid yerleşebilir.** Hücrede bu hataları fark edip düzelten mekanizmalar bulunur; yani DNA’daki hatalar onarılabilir. Kazanım F.8.2.1.2’nin b maddesi bunun belirtilmesini açıkça ister. Onarılamayan hatalar ise kalıcı değişikliklere yol açabilir — bu konuyu mutasyon dersinde göreceğiz.`,
        },
        {
          id: 'lgs-fen-dna-eslesme-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Kural varken ve kural yokken',
          columns: ['Baz eşleşme kuralı varken', 'Kural olmasaydı'],
          rows: [
            { label: 'İki iplik ilişkisi', values: ['Birbirini tamamlar', 'Rastgele olurdu'] },
            { label: 'Bir iplikten ötekini bulma', values: ['Kesin olarak belirlenir', 'Belirlenemezdi'] },
            { label: 'Kendini eşleme', values: ['Mümkün', 'Mümkün değil'] },
            { label: 'Bilginin korunması', values: ['Yeni moleküller aynı bilgiyi taşır', 'Bilgi her kopyada değişirdi'] },
            { label: 'Modeldeki karşılığı', values: ['Kartlar tutar', 'Model tutmaz'] },
          ],
          insight:
            'Sağ sütun bir düşünce deneyidir: kuralı kaldırdığımızda ne kaybettiğimizi gösterir. Bir kuralın gerçekten gerekli olup olmadığı böyle sınanır.',
        },
        {
          id: 'lgs-fen-dna-eslesme-tuzak',
          type: 'trap',
          title: 'Hesap sorularına zaman harcamak',
          wrong: 'Nükleotid sayısı hesaplarını da çalışmalıyım; sınavda çıkabilir.',
          right: 'Program açıkça “DNA’daki nükleotid hesaplamaları verilmez” diyor. Senden istenen, kuralı uygulayıp karşı ipliğin dizisini yazmaktır.',
          body: 'Kapsam dışı konulara harcanan zaman, kapsam içi konulardan çalınır. Program sınırlarını bilmek bir çalışma stratejisidir.',
        },
      ],
    },

    {
      id: 'lgs-fen-dna-kapsam',
      title: 'Bu konuda müfredatın çizdiği sınır',
      lead: 'Hangi konular kapsam dışı? Bunu bilmek, zamanını doğru yere harcamanı sağlar.',
      blocks: [
        {
          id: 'lgs-fen-dna-kapsam-anlatim',
          type: 'prose',
          body: `MEB 8. sınıf Fen Bilimleri programı bu üç kazanımın açıklamasında beş ayrı sınır koyar. Bunları tek tek görelim; çünkü piyasadaki kaynakların bir bölümü bu sınırların dışına çıkıyor.

**Sınır 1 — Pürin ve pirimidin ayrımı yapılmaz.** Bazların adlarını bilirsin (A, T, G, C) ama bunların hangi gruba girdiği sorulmaz.

**Sınır 2 — Bağ türlerine girilmez.** Hidrojen bağı, glikozit bağı, ester bağı, fosfodiester bağı gibi terimler bu düzeyde istenmez. Nükleotidin üç parçasını bilmen yeterlidir.

**Sınır 3 — Nükleotid hesaplamaları verilmez.** “Toplam nükleotid sayısı”, “adenin sayısından timin sayısını bulma” gibi hesap soruları kapsam dışıdır.

**Sınır 4 — “Replikasyon” terimi kullanılmaz.** Olayı anlatırsın ama bu terimi kullanman istenmez. Bu ders boyunca da kullanmadık; “kendini eşleme” dedik.

**Sınır 5 — Eşlenme deneyleri anlatılmaz ve eşlenme ile ilgili hesaplama soruları sorulmaz.** Yani hangi bilim insanının hangi deneyi yaptığı ve kaç molekül oluştuğu gibi hesaplar bu düzeyde istenmez.

Peki program **ne istiyor?** Kazanımların fiillerine bakalım: “açıklayarak ilişki kurar”, “model üzerinde gösterir”, “nasıl eşlediğini ifade eder”. Üçü de **anlatma** ve **ilişkilendirme** fiilleridir. Yani senden istenen şey bir hesap değil, bir açıklama.

Bir de programın **istediği** ama sık atlanan bir nokta var: **DNA’daki hataların onarılıp onarılmadığının belirtilmesi.** Kazanım F.8.2.1.2’nin b maddesi bunu açıkça ister. Eşlenme sırasında hata oluşabilir ve hücrede bu hataları onaran mekanizmalar bulunur.

Bu sınırları bilmek bir çalışma stratejisidir. Kapsam dışı bir konuya harcanan her saat, kapsam içi bir konudan çalınır.`,
        },
        {
          id: 'lgs-fen-dna-kapsam-tablo',
          type: 'table',
          interactive: true,
          title: 'Programın sınırları: ne isteniyor, ne istenmiyor?',
          columns: ['Konu', 'Program ne diyor?', 'Senden istenen', 'Kapsam'],
          rows: [
            ['Baz adları', 'Bazların isimleri verilir', 'A, T, G, C bazlarını bilmek', 'İçinde'],
            ['Pürin–pirimidin', 'Bu ayrıma girilmez', '—', 'Dışında'],
            ['Bağ türleri', 'Bağlara girilmez', '—', 'Dışında'],
            ['Nükleotid hesabı', 'Hesaplamalar verilmez', '—', 'Dışında'],
            ['“Replikasyon” terimi', 'Kullanılmaz', 'Olayı kendi cümlenle anlatmak', 'Terim dışında'],
            ['DNA onarımı', 'Onarılıp onarılmadığı belirtilir', 'Hataların onarılabildiğini bilmek', 'İçinde'],
          ],
          caption:
            'Son satır özellikle önemlidir: bu, programın açıkça **istediği** ama kaynakların sık atladığı bir noktadır.',
        },
        {
          id: 'lgs-fen-dna-kapsam-tuzak',
          type: 'trap',
          title: 'DNA onarımını atlamak',
          wrong: 'Eşlenme kusursuzdur; hata olmaz.',
          right: 'Eşlenme sırasında yanlış nükleotid yerleşebilir; hücrede bu hataları onaran mekanizmalar bulunur.',
          body: 'Program bunun belirtilmesini açıkça ister (F.8.2.1.2 b). Onarılamayan hatalar kalıcı değişikliklere yol açabilir; bu, mutasyon konusuna giden köprüdür.',
        },
        {
          id: 'lgs-fen-dna-kapsam-hafiza',
          type: 'memory',
          title: 'İki cümlelik özet',
          body: '**Sıra:** nükleotid < gen < DNA < kromozom. **Kural:** A–T, G–C.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Karşı ipliği yaz',
      prompt:
        'Bir DNA ipliğinin baz dizisi şöyledir: **A – G – G – T – C – A**. Karşı ipliğin baz dizisini yaz ve her adımın gerekçesini göster.',
      steps: [
        { title: '1. Kuralı hatırla', body: 'A karşısına T, T karşısına A, G karşısına C, C karşısına G gelir.' },
        { title: '2. Baz baz uygula', body: 'A → T · G → C · G → C · T → A · C → G · A → T' },
        { title: '3. Diziyi yaz', body: 'Karşı iplik: **T – C – C – A – G – T**' },
        { title: '4. Kontrol et', body: 'Her baz çiftine tek tek bak: A–T, G–C, G–C, T–A, C–G, A–T. Altı çiftin altısı da kurala uyuyor.' },
        { title: '5. Sonucu yorumla', body: 'İki iplik birbirinin aynısı değil; birbirini tamamlıyor. Bir iplik bilindiğinde öteki kesin olarak belirlenebiliyor.' },
      ],
      answer: 'Karşı iplik: T – C – C – A – G – T',
      takeaway:
        'Bu, kazanımın istediği beceridir: kuralı uygulayıp karşı ipliği yazmak. Bir hesap yapmak istenmiyor.',
    },
    {
      title: 'Seviye 2 — Kavramları ölçek sırasına koy',
      prompt:
        'Bir öğrenci şöyle diyor: “Kromozomun içinde DNA, DNA’nın içinde nükleotid, nükleotidin içinde gen vardır.” Bu sıralamada hangi hata var ve doğrusu nedir?',
      steps: [
        { title: '1. Öğrencinin sırasını yaz', body: 'Kromozom > DNA > nükleotid > gen. Öğrenci geni en küçük birim saymış.' },
        { title: '2. Genin tanımını kontrol et', body: 'Gen, DNA üzerinde belirli bir özelliği belirleyen **anlamlı bölümdür**. Yani çok sayıda nükleotidden oluşur.' },
        { title: '3. Nükleotidin tanımını kontrol et', body: 'Nükleotid, DNA’nın en küçük yapı birimidir: fosfat + şeker + baz. Bir gen değil, genin yapı taşıdır.' },
        { title: '4. Hatayı adlandır', body: 'Öğrenci gen ile nükleotidin yerini değiştirmiş. Gen nükleotidden büyüktür, küçük değil.' },
        { title: '5. Doğru sırayı yaz', body: 'Nükleotid < gen < DNA < kromozom. Kitap benzetmesiyle: harf < sözcük < sayfa < cilt.' },
      ],
      answer:
        'Gen ile nükleotidin yeri değiştirilmiş. Doğru sıra: nükleotid < gen < DNA < kromozom.',
      takeaway: 'Ölçek sırasını bir benzetmeyle kurmak, dört kavramın karışmasını önler.',
    },
    {
      title: 'Seviye 3 — Eşlenmeyi modelle anlat',
      prompt:
        'Bir DNA molekülü kendini eşliyor. Oluşan iki molekülün her birinde kaç eski, kaç yeni iplik bulunur? Cevabını mekanizmanın adımlarına dayandır.',
      steps: [
        { title: '1. Başlangıç durumunu yaz', body: 'Elimizde bir DNA var ve bu DNA iki iplikten oluşuyor: iplik-1 ve iplik-2. İkisi de eski.' },
        { title: '2. Birinci adımı uygula', body: 'İki iplik birbirinden ayrılıyor. Artık iki ayrı kalıp var: iplik-1 ve iplik-2.' },
        { title: '3. Kalıpları kullan', body: 'İplik-1’in karşısına kurala göre yeni bir iplik kuruluyor. İplik-2’nin karşısına da yeni bir iplik kuruluyor.' },
        { title: '4. Sonucu say', body: 'Birinci yeni molekül: iplik-1 (eski) + yeni iplik. İkinci yeni molekül: iplik-2 (eski) + yeni iplik.' },
        { title: '5. Cevabı ifade et', body: 'Her molekülde **bir eski, bir yeni** iplik bulunur. Eski iplikler atılmaz; yeni yapıların parçası olarak kalır.' },
      ],
      answer: 'Her yeni DNA molekülünde bir eski, bir yeni iplik bulunur.',
      takeaway:
        'Bu sonucu bir hesapla değil, mekanizmanın adımlarını izleyerek buldun. Kazanım da bunu istiyor: olayı ifade edebilmek.',
    },
  ],

  dailyLife: {
    title: 'Bu bilgi nerelerde karşına çıkıyor?',
    body:
      'DNA’nın yapısı ve baz eşleşme kuralı, günlük hayatta duyduğun pek çok uygulamanın temelinde bulunur. Aşağıdaki örneklerin hepsinde aynı kural iş görür.',
    links: [
      'Adli bilimlerde kimlik belirleme, DNA dizilerinin karşılaştırılmasına dayanır.',
      'Akrabalık bağının araştırılmasında DNA benzerliklerine bakılır.',
      'Bazı hastalıkların kalıtsal olup olmadığı gen incelemeleriyle araştırılır.',
      'Tarımda dayanıklı çeşitlerin belirlenmesinde genetik bilgi kullanılır.',
      'Canlılar arasındaki akrabalık ilişkileri DNA karşılaştırmalarıyla incelenir.',
    ],
  },

  questionClue: {
    concept: 'DNA yapısı sorusu',
    statement:
      'Soruda bir baz dizisi, bir kavram sıralaması ya da bir DNA modeli veriliyorsa, sorulan şey ölçek ilişkisi veya baz eşleşme kuralıdır.',
    clues: [
      'Bir ipliğin baz dizisinin verilmesi',
      'Nükleotid, gen, DNA ve kromozom sözcüklerinin bir arada bulunması',
      'Bir modelin ya da şemanın verilmesi',
      'Seçeneklerde “hangisi hangisinin içinde bulunur” biçiminde ifadeler',
      'Eşlenme sonucunda oluşan moleküllerden söz edilmesi',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, kavramların tanımını değil aralarındaki ilişkiyi ölçüyor. Çözüm yolu ölçek sırasını kurmak ve baz eşleşme kuralını uygulamaktır.',
    boundary:
      'Bu ipuçlarını “baz dizisi varsa hesap yapılacak” gibi bir kısayola çevirme. Program nükleotid hesaplamalarını açıkça kapsam dışı bırakır; istenen şey kuralı uygulamaktır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Verilen bir ipliğin karşısındaki baz dizisinin sorulması',
      'Nükleotid, gen, DNA ve kromozomun ölçek sırasına konulması',
      'Bir öğrenci açıklamasındaki kavram hatasının bulunması',
      'DNA modelinde bir parçanın adının sorulması',
      'Kendini eşleme sonucunda oluşan moleküllerin özelliklerinin sorulması',
      'DNA’daki hataların onarılabildiğinin sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Bir nükleotidi oluşturan üç parça nedir? Nükleotidleri birbirinden ayıran parça hangisidir?',
      hint: 'Her nükleotidde ortak olan ne, değişen ne?',
      answer:
        'Bir nükleotid fosfat, şeker ve bazdan oluşur. Nükleotidleri birbirinden ayıran parça **bazdır**: dört baz çeşidi (A, T, G, C) bulunduğu için dört çeşit nükleotid vardır. Fosfat ve şeker her nükleotidde ortaktır. Programın sınırı gereği bu parçalar arasındaki bağ türlerine girilmez.',
    },
    {
      prompt:
        'Bir DNA ipliği C – A – T – G dizisine sahipse karşı ipliğin dizisi nedir? Bu diziyi bulabilmen neyi kanıtlıyor?',
      hint: 'Kuralı her baza ayrı ayrı uygula.',
      answer:
        'Karşı iplik G – T – A – C olur. Kuralı uyguladık: C→G, A→T, T→A, G→C. Bunu bulabilmemiz, baz eşleşmesinin **kurallı** olduğunu kanıtlar. Eşleşme rastgele olsaydı bir iplikten ötekini belirleyemezdik ve DNA kendini eşleyemezdi.',
    },
    {
      prompt:
        'Bir öğrenci “DNA eşlenirken hiç hata olmaz.” diyor. Bu ifade doğru mu? Program bu konuda ne diyor?',
      hint: 'F.8.2.1.2’nin b maddesini hatırla.',
      answer:
        'Doğru değildir. Eşlenme sırasında yanlış bir nükleotid yerleşebilir. Hücrede bu hataları fark edip düzelten onarım mekanizmaları bulunur; yani DNA’daki hatalar onarılabilir. Program, bu noktanın açıkça belirtilmesini ister (F.8.2.1.2 b). Onarılamayan hatalar kalıcı değişikliklere yol açabilir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey tanım değil, ilişki kurma',
    body:
      'Kazanımın kendisi “kavramları açıklayarak bu kavramlar arasında ilişki kurar” diyor. MEB’in merkezî sınav kılavuzu da soruların okuduğunu anlama, yorumlama, analiz yapma ve bilimsel süreç becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: dört kavramın tanımını sıralamak yetmez; hangisinin hangisinin içinde bulunduğunu ve baz eşleşme kuralının neyi mümkün kıldığını gösterebilmen gerekir.',
    measures: [
      'Nükleotidin üç parçasını sayabilme',
      'Dört kavramı ölçek sırasına koyabilme',
      'Baz eşleşme kuralını bir dizi üzerinde uygulayabilme',
      'İki ipliğin neden birbirini tamamladığını açıklayabilme',
      'Kendini eşleme adımlarını sırayla ifade edebilme',
      'DNA’daki hataların onarılabildiğini bilme',
    ],
  },

  simulationTable: {
    title: 'Bir öğrencinin kart modeli kaydı',
    columns: ['Sıra', 'Birinci iplik', 'Öğrencinin yazdığı karşı baz', 'Kural gereği olması gereken'],
    rows: [
      ['1', 'A', 'T', 'T'],
      ['2', 'G', 'C', 'C'],
      ['3', 'T', 'G', 'A'],
      ['4', 'C', 'G', 'G'],
      ['5', 'A', 'T', 'T'],
    ],
    caption: 'Öğrenci beş baz için karşı ipliği yazmaya çalışmıştır.',
  },

  simulation: {
    title: 'Mini uygulama — özgün model kaydı',
    passage: `Bir öğrenci renkli kartlarla DNA modeli kuruyor. Birinci ipliği dizip karşısına kurala göre ikinci ipliği yerleştirmeye çalışıyor. Yukarıdaki tablo öğrencinin kaydını gösteriyor.

Öğrenci modelini tamamladıktan sonra “Model tuttu, iki iplik birbirini tamamlıyor.” diyor.`,
    question: 'Bu model kaydıyla ilgili aşağıdakilerden hangisi doğrudur?',
    options: [
      {
        text: 'Model doğrudur; beş bazın beşinde de kural doğru uygulanmıştır',
        explanation:
          'Tabloyu satır satır kontrol edince 3. sırada hata var: T karşısına G yazılmış, oysa kural gereği A gelmeliydi. Beş bazın dördü doğru, biri yanlış.',
      },
      {
        text: '3. sırada kural yanlış uygulanmıştır; T karşısına A gelmeliydi',
        explanation:
          'Doğru cevap. Baz eşleşme kuralı A–T ve G–C biçimindedir. 3. sırada birinci iplikte T bulunuyor; karşısına A gelmesi gerekirken G yazılmış. Öğrencinin “model tuttu” sonucu bu yüzden geçersizdir.',
      },
      {
        text: '2. sırada hata vardır; G karşısına T gelmeliydi',
        explanation:
          'Kural G–C biçimindedir; G karşısına C gelir. Öğrenci 2. sırada C yazmış ve doğru yapmıştır. Bu seçenek kuralın kendisini yanlış aktarıyor.',
      },
      {
        text: 'Modelde hata olup olmadığı, nükleotid sayısı hesaplanmadan anlaşılamaz',
        explanation:
          'Hata, her baz çiftinin tek tek kurala göre kontrol edilmesiyle bulunur; bir hesap gerekmez. Üstelik program bu düzeyde nükleotid hesaplamalarını kapsam dışı bırakır.',
      },
      {
        text: 'Tabloda verilen bilgiler modeli değerlendirmek için yetersizdir',
        explanation:
          'Tablo, her sıradaki birinci ipliğin bazını ve öğrencinin yazdığı karşı bazı veriyor. Değerlendirme için gereken bütün bilgi mevcuttur; yalnız kuralı satır satır uygulamak gerekir.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru bir model kaydının değerlendirilmesini istiyor. Yöntem: kuralı her satıra tek tek uygulamak ve öğrencinin yazdığıyla karşılaştırmak. Bu, bir hesap değil bir kontrol işidir.',
    critical_point:
      'Kritik nokta, dört satırın doğru olması. Öğrenci çoğu satırı doğru yaptığı için “model tuttu” diye düşünüyor. Ama bir modelin tutması için **bütün** çiftlerin kurala uyması gerekir; tek bir hata modeli geçersiz kılar.',
    takeaway:
      'Bir modeli değerlendirirken tek tek kontrol yapılır; genel izlenim yeterli değildir.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Nükleotid, gen, DNA ve kromozom kavramlarının küçükten büyüğe doğru sıralanışı hangisidir?',
      options: [
        'Gen < nükleotid < DNA < kromozom',
        'Nükleotid < gen < DNA < kromozom',
        'Nükleotid < DNA < gen < kromozom',
        'DNA < nükleotid < gen < kromozom',
      ],
      answer_index: 1,
      explanation:
        'Nükleotid DNA’nın en küçük yapı birimidir. Çok sayıda nükleotid bir geni oluşturur; gen DNA üzerindeki anlamlı bir bölümdür; DNA paketlenerek kromozomu oluşturur. Kitap benzetmesiyle: harf < sözcük < sayfa < cilt. Diğer seçeneklerde gen ya da DNA yanlış konuma yerleştirilmiştir.',
    },
    {
      purpose: 'apply',
      question: 'Bir DNA ipliğinin baz dizisi **G – T – A – C** ise karşı ipliğin dizisi nedir?',
      options: [
        'C – A – T – G',
        'G – T – A – C',
        'A – C – G – T',
        'T – G – C – A',
      ],
      answer_index: 0,
      explanation:
        'Kural her baza ayrı ayrı uygulanır: G→C, T→A, A→T, C→G. Sonuç C – A – T – G olur. İkinci seçenek aynı diziyi tekrarlıyor; oysa iki iplik birbirinin aynısı değil, tamamlayıcısıdır. Diğer seçeneklerde kural en az bir bazda yanlış uygulanmıştır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “DNA eşlenmesinden sonra oluşan iki molekülün biri tamamen eski, öteki tamamen yeni ipliklerden oluşur.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Her yeni molekülde bir eski, bir yeni iplik bulunduğunu gözden kaçırmak',
        'Baz eşleşme kuralını yanlış uygulamak',
        'Kromozom ile geni karıştırmak',
        'Nükleotidin parçalarını yanlış saymak',
      ],
      answer_index: 0,
      explanation:
        'Eşlenmede iki iplik ayrılır ve her biri ayrı bir kalıp olarak kullanılır. Bu yüzden oluşan iki molekülün her birinde bir eski (kalıp) ve bir yeni iplik bulunur. Eski iplikler atılmaz. Öğrenci baz eşleşme kuralında ya da kavramlarda değil, eşlenmenin sonucunda hata yapmıştır.',
    },
  ],

  summary: [
    'DNA, canlının özelliklerini belirleyen bilgiyi taşıyan moleküldür ve hücre çekirdeğinde bulunur.',
    'Bilgi dört bazla yazılır: adenin (A), timin (T), guanin (G), sitozin (C).',
    'Nükleotid DNA’nın en küçük yapı birimidir: fosfat + şeker + baz.',
    'Nükleotidleri birbirinden ayıran parça bazdır; bu yüzden dört çeşit nükleotid vardır.',
    'Ölçek sırası: nükleotid < gen < DNA < kromozom (harf < sözcük < sayfa < cilt).',
    'Gen, DNA üzerinde belirli bir özelliği belirleyen anlamlı bölümdür.',
    'Baz eşleşme kuralı: A karşısına T, G karşısına C gelir.',
    'Bu kural sayesinde bir ipliğin dizisi bilindiğinde öteki kesin olarak belirlenebilir.',
    'Eşlenmede iki iplik ayrılır, her biri kalıp olur; oluşan her molekülde bir eski bir yeni iplik bulunur.',
    'Eşlenmede hata oluşabilir; hücrede bu hataları onaran mekanizmalar bulunur.',
  ],

  next: [
    'Kalıtım Kavramları: Gen, Genotip, Fenotip (F.8.2.2.1)',
    'Mutasyon, Modifikasyon ve Adaptasyon (F.8.2.3.1)',
    'Tek Karakter Çaprazlamaları (F.8.2.2.2)',
  ],
})

export default lesson
