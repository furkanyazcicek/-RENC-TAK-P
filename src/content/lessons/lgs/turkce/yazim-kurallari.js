import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Yazım Kuralları
 * Kazanım : T.8.4.16
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * KAZANIM KONUMU — ÖNEMLİ
 * 2019 programının 8. sınıf listesinde "büyük harfleri ve noktalama
 * işaretlerini uygun yerlerde kullanır" biçiminde AYRI bir kazanım
 * YOKTUR. Bu alan T.8.4.16 ("Yazdıklarını düzenler" — açıklama b:
 * "Metinde yer alan yazım ve noktalama kuralları ile sınırlı tutulur.")
 * üzerinden yürür. Kuralların kendisi 5, 6 ve 7. sınıf kazanımlarında
 * kurulmuştur (örn. T.5.4.5, T.5.4.8, T.5.4.9). Kural kaynağı ise
 * TDK Yazım Kılavuzu'dur. Bu durum derste öğrenciye açıkça söylenir.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-yazim-kurallari',
  topic: 'Yazım Kuralları',
  order: 1,
  title: 'Yazım Kuralları',
  subtitle:
    'Kural listesi ezberlemek yerine üç test öğren: çıkarma testi, özel ad testi ve bitişik yazım testi.',
  minutes: 43,
  kazanimlar: [
    { kod: 'T.8.4.16', metin: 'Yazdıklarını düzenler.' },
  ],
  prerequisites: [
    { topic: 'Sözcük türleri', why: 'Bağlaç ile eki ayırmak için sözcüğün cümledeki görevini görmen gerekir.' },
    { topic: 'Cümlenin ögeleri', why: 'Bir sözcüğün ek mi ayrı sözcük mü olduğunu cümledeki görevi belirler.' },
  ],
  outcomes: [
    '“de/da” ve “ki” yazımını çıkarma testiyle kesinleştirebileceksin.',
    'Soru ekinin neden her zaman ayrı yazıldığını açıklayabileceksin.',
    'Büyük harf kararlarını özel ad ölçütüyle verebileceksin.',
    'Ay, gün ve yön adlarının ne zaman büyük yazıldığını belirleyebileceksin.',
    'Sayıların ve birleşik sözcüklerin yazımında doğru kararı verebileceksin.',
  ],

  opening: {
    title: 'Kural listesi değil, üç test',
    lead: 'Yazım kuralları ezberlenerek değil, sınanarak öğrenilir. Bu derste üç test kuracağız.',
    body: `Önce bir şeyi açıkça söyleyelim. MEB 8. sınıf Türkçe programının kazanım listesinde “büyük harfleri ve noktalama işaretlerini uygun yerlerde kullanır” biçiminde **ayrı bir kazanım yoktur**. Bu alan, **T.8.4.16** kazanımı üzerinden yürür: “Yazdıklarını düzenler.” Açıklaması şöyle der: *“Metinde yer alan yazım ve noktalama kuralları ile sınırlı tutulur.”*

Kuralların kendisi ise alt sınıflarda kurulmuştur: 5. sınıfta noktalama işaretleri ve sayıların yazımı, 6 ve 7. sınıfta yazdıklarını gözden geçirme. Kural kaynağı da **TDK Yazım Kılavuzu**dur. Yani 8. sınıfta öğrenilen şey yeni bir kural listesi değil, daha önce kurulmuş kuralları metin üzerinde **işletmektir**.

Bu bilgi işine yarar: sınavda karşına çıkan yazım sorusu genellikle bir kural tanımı sormaz; bir cümlede yanlış yazılmış bir sözcüğü buldurur. Yani sorulan şey ezber değil **fark etme**.

Şimdi konunun ana hattına gelelim. LGS’de en çok sorulan yazım konuları şunlardır: **“de/da” ve “ki” yazımı, soru ekinin yazımı, büyük harflerin kullanımı, sayıların yazımı, birleşik sözcüklerin bitişik ya da ayrı yazımı.**

Bu beş başlığı üç testle kapsayacağız:

**Çıkarma testi** — “de/da” ve “ki” için: sözcüğü cümleden çıkar, anlam bozuluyor mu?
**Özel ad testi** — büyük harf için: bu ad belirli tek bir varlığı mı gösteriyor?
**Bitişik yazım testi** — birleşik sözcükler için: sözcükler bir araya gelince anlamları değişti mi?

Üç test, beş başlık. Liste ezberine gerek yok.`,
  },

  concepts: [
    {
      term: 'Bağlaç olan “de / da”',
      body: '“Ayrıca, hem de” anlamı katan bağlaçtır ve **ayrı yazılır**: “Sen **de** gel.” Ünlü uyumuna uyar (de/da) ama ünsüz benzeşmesine uymaz: “te/ta” biçiminde yazılmaz.',
    },
    {
      term: 'Hâl eki “-de / -da”',
      body: 'Bulunma bildiren ektir ve **bitişik yazılır**: “Ev**de** kaldı.” Ünsüz benzeşmesine uyar: “Kitap**ta** yazıyor.”',
    },
    {
      term: 'Bağlaç olan “ki”',
      body: 'İki yargıyı birbirine bağlar ve **ayrı yazılır**: “Duydum **ki** yarın gelecekmiş.” Kalıplaşmış birkaç sözcükte bitişik yazılır: *belki, çünkü, hâlbuki, mademki, meğerki, oysaki, sanki.*',
    },
    {
      term: 'Ek olan “-ki”',
      body: 'İlgi zamiri ya da sıfat yapan ektir ve **bitişik yazılır**: “Benim**ki** daha yeni.”, “Masada**ki** kitap”, “Yarın**ki** sınav”.',
    },
    {
      term: 'Soru eki “mi”',
      body: 'Her zaman **ayrı yazılır**; kendisinden sonra gelen ekler ise ona bitişik yazılır: “Geliyor **musun**?”, “Okudun **mu**?” Ünlü uyumuna uyar: mı, mi, mu, mü.',
    },
    {
      term: 'Özel ad',
      body: 'Belirli tek bir varlığı gösteren addır ve **büyük harfle** başlar: kişi adları, yer adları, kurum adları, kitap ve dergi adları. Cins adları küçük yazılır.',
    },
  ],

  why: {
    question: 'Neden “de/da” kuralı ezberlenince değil, sınanınca öğreniliyor?',
    body: `Çünkü ezber şu biçimi alıyor: “Bağlaçsa ayrı, eksе bitişik.” Bu doğru ama işe yaramaz; çünkü öğrenci karşısındaki “de”nin hangisi olduğunu zaten bilmiyor.

İşe yarayan şey bir **testtir**: sözcüğü cümleden çıkar ve cümleyi yeniden oku.

- “Sen de gel.” → “Sen gel.” Cümle anlamlı → **bağlaç**, ayrı yazılır.
- “Evde kaldı.” → “Ev kaldı.” Cümle bozuldu → **hâl eki**, bitişik yazılır.

Test her seferinde çalışır ve hiçbir kural adı bilmeni gerektirmez.

Aynı test “ki” için de geçerli:
- “Duydum ki yarın gelecekmiş.” → “Duydum yarın gelecekmiş.” Anlam kabaca duruyor → **bağlaç**, ayrı.
- “Masadaki kitap” → “Masada kitap” — tamlama bozuldu, artık bir nitelemeden söz edemiyoruz → **ek**, bitişik.

İkinci bir destek daha var: **ünsüz benzeşmesi kontrolü.** Bağlaç olan “de/da” hiçbir zaman “te/ta” olmaz. Bu yüzden “Kitapta yazıyor.” cümlesindeki “ta” kesinlikle ektir ve bitişik yazılır. Ama “Ahmet de geldi.” cümlesinde bağlaç “te” olmaz; “de” kalır ve ayrı yazılır.

Soru ekinde ise ezber bile gerekmez: **soru eki her zaman ayrı yazılır.** İstisnası yoktur. Karışıklık, ekten sonra gelen eklerin nereye yazılacağındadır: onlar soru ekine **bitişik** yazılır. “Geliyor musun?” — “mu” ayrı, “sun” ona bitişik.

Bu üç nokta, LGS’de en çok sorulan yazım hatalarının büyük bölümünü kapsar.`,
  },

  decision: {
    title: 'Yazım kararı verme yolu',
    lead: 'Her karar bir testle verilir; hiçbiri “bana öyle geldi” ile verilmez.',
    intro:
      'Bir yazım sorusuyla karşılaştığında şu beş durağı uygula. Hangi başlıkta olduğunu belirlemek ilk adımdır.',
    steps: [
      {
        title: '1. Hangi başlık olduğunu belirle',
        body: 'Altı çizili ya da şüphelendiğin yer hangi konuya giriyor: “de/da–ki” mi, büyük harf mi, sayı mı, birleşik sözcük mü? Başlığı belirlemek hangi testi uygulayacağını söyler.',
      },
      {
        title: '2. “de/da” ve “ki” için çıkarma testi',
        body: 'Sözcüğü cümleden çıkar. Cümle anlamlı kalıyorsa bağlaçtır ve **ayrı** yazılır; bozuluyorsa ektir ve **bitişik** yazılır.',
      },
      {
        title: '3. Büyük harf için özel ad testi',
        body: 'Bu ad belirli tek bir varlığı mı gösteriyor? Gösteriyorsa özel addır ve büyük yazılır. Bir türün ortak adıysa küçük yazılır.',
      },
      {
        title: '4. Sayı ve birleşik sözcük kurallarını uygula',
        body: 'Metin içindeki sayılar yazıyla ve ayrı ayrı yazılır: “on beş”, “iki yüz”. Birleşik sözcüklerde ise anlam kaymasına bak: sözcükler birleşince yeni bir anlam doğduysa bitişik yazılır.',
      },
      {
        title: '5. Kararını bir cümleyle gerekçelendir',
        body: '“Ayrı yazılır çünkü çıkarınca cümle anlamlı kalıyor.” gibi bir gerekçe kurabiliyorsan kararın sağlamdır. Gerekçe kuramıyorsan testi yeniden uygula.',
      },
    ],
    takeaway: 'Yazım kararı bir tercih değil, bir test sonucudur.',
  },

  decisionTree: {
    title: '“de/da” ayrı mı bitişik mi?',
    intro:
      'Üç kontrol sırayla uygulanır. Birinci kontrol çoğu durumu tek başına çözer.',
    checks: [
      {
        question: '“de/da”yı cümleden çıkardığımda cümle anlamlı kalıyor mu?',
        yes: 'Bağlaçtır, **ayrı** yazılır. Örnek: “Sen de gel.” → “Sen gel.”',
        no: 'Hâl ekidir, **bitişik** yazılır. Örnek: “Evde kaldı.” → “Ev kaldı.” (bozuldu)',
      },
      {
        question: 'Sözcük “te / ta” biçiminde mi yazılmış?',
        yes: 'Kesinlikle ektir ve bitişik yazılır; bağlaç hiçbir zaman “te/ta” olmaz.',
        no: 'Birinci kontrolün sonucu geçerlidir.',
      },
      {
        question: 'Aynı cümlede hem ek hem bağlaç var mı?',
        yes: 'Her birini ayrı ayrı sına. “Evde de kitap var.” — birincisi ek, ikincisi bağlaç.',
        no: 'Kararın kesinleşti.',
      },
    ],
    takeaway:
      'Aynı cümlede iki “de” bulunabilir ve biri bitişik, öteki ayrı yazılabilir: “Evde de çalıştı.”',
  },

  comparison: {
    title: 'Ayrı mı, bitişik mi?',
    columns: ['Bağlaç (ayrı)', 'Ek (bitişik)', 'Soru eki (ayrı)'],
    rows: [
      { label: 'Örnek', values: ['Sen de gel.', 'Evde kaldı.', 'Geliyor musun?'] },
      { label: 'Test', values: ['Çıkarınca anlam kalıyor', 'Çıkarınca cümle bozuluyor', 'Test gerekmez: her zaman ayrı'] },
      { label: 'Ünsüz benzeşmesi', values: ['Uymaz: “te/ta” olmaz', 'Uyar: “kitapta”', 'Uymaz'] },
      { label: '“ki” karşılığı', values: ['Duydum ki gelecekmiş.', 'Masadaki kitap', '—'] },
      { label: 'Sonraki ekler', values: ['Ayrı kalır', 'Zaten bitişik', 'Soru ekine bitişik: “musun”'] },
      { label: 'Sık yapılan hata', values: ['Bitişik yazmak', 'Ayrı yazmak', 'Kendinden sonraki eki ayırmak'] },
    ],
    insight:
      'Üç sütunun ortak dersi şu: karar sözcüğün biçimine değil, cümledeki görevine bakılarak verilir.',
  },

  traps: [
    {
      title: '“da” bağlacını “ta” yazmak',
      wrong: '“Ahmet ta geldi.” — ünsüz benzeşmesi uyguladım.',
      right: '“Ahmet da geldi.” Bağlaç olan “de/da” ünsüz benzeşmesine uymaz; “te/ta” biçiminde yazılmaz.',
      body: 'Bu kural tersinden de işine yarar: “ta” ya da “te” gördüğün her yerde sözcük ektir ve bitişik yazılır.',
    },
    {
      title: 'Soru ekinden sonraki eki ayırmak',
      wrong: '“Geliyor mu sun?” — soru eki ayrı yazılıyorsa sonraki ek de ayrı olmalı.',
      right: '“Geliyor musun?” Soru eki ayrı yazılır; ondan sonra gelen ekler soru ekine **bitişik** yazılır.',
      body: 'Kural tek cümlede özetlenir: soru eki ayrı, ona eklenen her şey bitişik.',
    },
    {
      title: 'Ay ve gün adlarını her yerde büyük yazmak',
      wrong: '“Nisan ayında tatile gideceğiz.” — ay adı, büyük yazılır.',
      right: '“Nisan ayında” değil, “nisan ayında”. Ay ve gün adları belirli bir tarihle birlikte kullanılmadıklarında küçük yazılır.',
      body: 'Ölçüt şudur: belirli bir tarih bildiriyorsa büyük (“5 Nisan 2027 Pazartesi”), genel bir zaman bildiriyorsa küçük (“nisanda”, “pazartesi günleri”).',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-yazim-de-ki-mi',
      title: '“de/da”, “ki” ve soru eki: üç sözcük, tek test',
      lead: 'LGS’nin en sık sorduğu yazım konusu budur ve üçü de aynı mantıkla çözülür.',
      blocks: [
        {
          id: 'lgs-yazim-deki-anlatim',
          type: 'prose',
          body: `**“de / da” yazımı.** İki ayrı yapı vardır ve ikisi de aynı harflerle yazılır.

**Bağlaç olan “de/da”** cümleye “ayrıca, hem de” anlamı katar ve **ayrı** yazılır: “Sen de gel.”, “Kitabı da aldım.” Bu bağlaç ünlü uyumuna uyar (de/da) ama **ünsüz benzeşmesine uymaz**: “te/ta” biçiminde yazılmaz. “Ahmet de geldi.” doğrudur; “Ahmet te geldi.” yanlıştır.

**Hâl eki “-de/-da”** bulunma bildirir ve **bitişik** yazılır: “Evde kaldı.”, “Okulda gördüm.” Bu ek ünsüz benzeşmesine uyar: “Kitapta yazıyor.”, “Sınıfta bekledik.”

Testi hatırla: sözcüğü çıkar. Cümle anlamlı kalıyorsa bağlaç, bozuluyorsa ek.

**“ki” yazımı.** Yine iki yapı vardır.

**Bağlaç olan “ki”** iki yargıyı bağlar ve **ayrı** yazılır: “Baktım ki kapı açık.”, “O kadar yorgundu ki hemen uyudu.”

**Ek olan “-ki”** ya bir ilgi zamiridir (“Benimki daha yeni.”) ya da bir sıfat yapar (“yarınki sınav”, “masadaki kitap”) ve **bitişik** yazılır.

Bir de **kalıplaşmış** biçimler vardır; bunlar bitişik yazılır ve sayıları azdır: *belki, çünkü, hâlbuki, mademki, meğerki, oysaki, sanki.* Bu kısa listeyi tanımak yeterlidir.

**Soru eki “mi” yazımı.** Bu en kolayıdır çünkü istisnası yoktur: **her zaman ayrı yazılır.** “Geldi mi?”, “Okudun mu?”, “Güzel mi?” Ünlü uyumuna uyar: mı, mi, mu, mü.

Karışıklık, soru ekinden sonra gelen eklerdedir. Bunlar soru ekine **bitişik** yazılır: “Geliyor musun?”, “Gördün mü?”, “Çalışıyor muydu?”

Bir ayrıntı: “mi” bazen soru sormadan, pekiştirme ya da koşul anlamıyla kullanılır: “Yağmur yağdı mı sokaklar boşalır.” Yine ayrı yazılır. Kural, anlamdan bağımsızdır.`,
        },
        {
          id: 'lgs-yazim-deki-tablo',
          type: 'table',
          interactive: true,
          title: 'Çıkarma testini uygula',
          columns: ['Cümle', 'Çıkarınca ne oluyor?', 'Ne bu?', 'Yazım'],
          rows: [
            ['Sen de gel.', '“Sen gel.” — anlamlı', 'Bağlaç', 'Ayrı'],
            ['Evde kaldı.', '“Ev kaldı.” — bozuldu', 'Hâl eki', 'Bitişik'],
            ['Kitapta yazıyor.', '“Kitap yazıyor.” — anlam değişti', 'Hâl eki', 'Bitişik'],
            ['Ahmet de geldi.', '“Ahmet geldi.” — anlamlı', 'Bağlaç', 'Ayrı (“te” olmaz)'],
            ['Duydum ki gelecekmiş.', '“Duydum gelecekmiş.” — anlam duruyor', 'Bağlaç', 'Ayrı'],
            ['Masadaki kitabı aldım.', '“Masada kitabı aldım.” — niteleme kayboldu', 'Ek', 'Bitişik'],
            ['Evde de kitap var.', 'Birinci ek, ikinci bağlaç', 'İkisi birden', 'Bitişik + ayrı'],
          ],
          caption:
            'Son satır önemli: aynı cümlede iki “de” bulunabilir ve farklı yazılır. Her birini ayrı ayrı sına.',
        },
        {
          id: 'lgs-yazim-deki-analiz',
          type: 'sentence_analysis',
          title: 'Bir cümlede üç karar birden',
          prompt:
            'Aşağıdaki cümlede üç ayrı yazım kararı var. Parçalara tıklayarak her birinin gerekçesini gör.',
          segments: [
            {
              text: 'Sınıfta',
              label: 'Hâl eki — bitişik',
              explanation:
                'Çıkarma testi: “Sınıf kimse yoktu” — cümle bozuldu. Ayrıca “ta” biçiminde yazılmış; bağlaç hiçbir zaman “ta” olmaz. İki kanıt da ek olduğunu söylüyor.',
              tone: 'aqua',
            },
            {
              text: 'da',
              label: 'Bağlaç — ayrı',
              explanation:
                'Çıkarma testi: “Sınıfta kimse yoktu” — cümle anlamlı kalıyor. Demek ki bağlaç; ayrı yazılır ve “ta” olmaz.',
              tone: 'brand',
            },
            {
              text: 'kimse yoktu;',
              label: 'Karar gerektirmeyen bölüm',
              explanation:
                'Burada yazım kararı verilecek bir yapı yok. Sorularda bu tür bölümler dikkatini dağıtmak için bulunur.',
              tone: 'muted',
            },
            {
              text: 'acaba herkes çıkmış mıydı?',
              label: 'Soru eki — ayrı, sonraki ekler bitişik',
              explanation:
                'Soru eki “mı” ayrı yazılır; ondan sonra gelen “ydı” ona bitişik yazılır: “mıydı”. Kural istisnasızdır.',
              tone: 'success',
            },
          ],
          takeaway:
            'Bir cümlede birden çok yazım kararı olabilir. Her birini ayrı ayrı sına; birini doğru yapmak ötekini garanti etmez.',
        },
        {
          id: 'lgs-yazim-deki-hoca',
          type: 'teacher_note',
          tone: 'exam',
          body:
            'Hızlı kontrol: metinde “te” ya da “ta” gördüysen bitişik yazılmalıdır — bağlaç bu biçimi almaz. Bu tek işaret, soruların bir bölümünü saniyeler içinde çözer.',
        },
      ],
    },

    {
      id: 'lgs-turkce-yazim-buyuk-harf',
      title: 'Büyük harf: özel ad testi',
      lead: 'Büyük harf kararı, sözcüğün belirli tek bir varlığı gösterip göstermediğine bakılarak verilir.',
      blocks: [
        {
          id: 'lgs-yazim-buyuk-anlatim',
          type: 'prose',
          body: `Büyük harf kuralları kalabalık görünür ama tek bir ölçüte dayanır: **bu ad belirli tek bir varlığı mı gösteriyor?**

**Kesin büyük yazılanlar:** kişi adları ve soyadları (Ayşe Yılmaz), yer adları (Ankara, Kızılırmak, Toroslar), kurum ve kuruluş adları (Türk Dil Kurumu), kitap, dergi ve gazete adları (Nutuk), millet, devlet ve dil adları (Türk, Türkiye, Türkçe), din ve mezhep adları, gezegen ve yıldız adları (Merkür).

**Duruma göre değişenler — asıl sorulan yer burasıdır.**

**Ay ve gün adları.** Belirli bir tarihle birlikte kullanılırsa büyük: “**5 Nisan 2027 Pazartesi** günü sınav var.” Belirli bir tarih bildirmiyorsa küçük: “**nisan** ayında hava ısınır.”, “**pazartesi** günleri erken kalkarım.”

**Yön adları.** Bir coğrafi bölge adının parçasıysa ya da özel ada bağlıysa büyük: “**Doğu Anadolu**”, “**Güneydoğu Asya**”. Yalnız yön bildiriyorsa küçük: “Evin **doğusunda** bir bahçe var.”

**Akrabalık adları.** Tek başına küçük yazılır: “Dün **teyzem** geldi.” Bir özel adla birlikte unvan gibi kullanılırsa büyük: “**Nene Hatun**”. Özel addan sonra gelen akrabalık adı ise küçük yazılır: “Ayşe **teyze**”.

**Unvanlar.** Özel addan önce ya da sonra gelen unvanlar büyük yazılır: “**Doktor** Mehmet Bey”, “Mehmet **Bey**”, “**Öğretmen** Ayşe Hanım”.

**Yer ve kurum adlarının parçası olan cins adları** büyük yazılır: “Ankara **Caddesi**”, “Boğaziçi **Köprüsü**”, “Atatürk **Ortaokulu**”. Ama tek başına kullanıldıklarında küçüktür: “Bu **cadde** çok kalabalık.”

Bu alt başlıkları ayrı ayrı ezberlemene gerek yok. Hepsine aynı soruyu sor: **bu sözcük, belirli tek bir varlığı mı gösteriyor, yoksa bir türün ortak adı mı?**`,
        },
        {
          id: 'lgs-yazim-buyuk-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı sözcük, iki karar',
          columns: ['Küçük yazılır', 'Büyük yazılır', 'Ayıran ölçüt'],
          rows: [
            ['nisan ayında hava ısınır', '5 Nisan 2027 tarihinde', 'Belirli tarih var mı?'],
            ['pazartesi günleri erken kalkarım', '12 Mayıs Pazartesi günü', 'Belirli tarih var mı?'],
            ['evin doğusunda bahçe var', 'Doğu Anadolu Bölgesi', 'Coğrafi bölge adı mı?'],
            ['dün teyzem geldi', 'Ayşe Teyze’yi gördüm', 'Unvan gibi kullanılıyor mu?'],
            ['bu cadde çok kalabalık', 'Ankara Caddesi’nde oturuyor', 'Yer adının parçası mı?'],
            ['bir ortaokulda okuyor', 'Atatürk Ortaokulunda okuyor', 'Kurum adının parçası mı?'],
          ],
          caption:
            'Altı satırda da aynı soru soruluyor: sözcük belirli tek bir varlığı mı gösteriyor, bir türün ortak adı mı?',
        },
        {
          id: 'lgs-yazim-buyuk-tuzak',
          type: 'trap',
          title: 'Yön adlarını her yerde büyük yazmak',
          wrong: '“Evin Doğusunda bir bahçe var.” — yön adı, büyük yazılır.',
          right: '“Evin doğusunda bir bahçe var.” Burada yalnız bir yön bildiriliyor, coğrafi bölge adı değil.',
          body: '“Doğu Anadolu Bölgesi” bir bölge adıdır ve büyük yazılır. Ölçüt, sözcüğün bir özel adın parçası olup olmadığıdır.',
        },
      ],
    },

    {
      id: 'lgs-turkce-yazim-sayi-birlesik',
      title: 'Sayılar ve birleşik sözcükler',
      lead: 'İki başlık, iki kısa kural. Birinde ayrı yazma, ötekinde anlam kayması ölçütü çalışır.',
      blocks: [
        {
          id: 'lgs-yazim-sayi-anlatim',
          type: 'prose',
          body: `**Sayıların yazımı.** Metin içinde sayılar yazıyla ve **ayrı ayrı** yazılır: “on beş”, “iki yüz kırk”, “bin dokuz yüz doksan sekiz”. Bitişik yazma yalnız çek, senet gibi resmî belgelerde geçerlidir.

**Sıra sayıları** ya yazıyla ya da rakamla ve noktayla yazılır: “üçüncü” veya “3.” İkisi birlikte yazılmaz: “3.üncü” yanlıştır.

**Üleştirme sayıları** her zaman yazıyla yazılır: “ikişer”, “üçer”, “beşer”. Rakamla yazılmaz.

**Kesirli sayılar** yazıyla yazılır: “yarım”, “çeyrek”, “üçte iki”.

Bir not: bu kuralların bir bölümü 5. sınıf kazanımında (T.5.4.8, “Sayıları doğru yazar.”) açıkça tanımlanmıştır. 8. sınıfta yapılan şey, bu kuralları metinde işletmektir.

**Birleşik sözcüklerin yazımı.** Bu başlık daha karışıktır ama bir ölçüte indirilebilir: **sözcükler birleşince anlam kaydı mı?**

Anlam kaydıysa bitişik yazılır: *hanımeli* (bir bitki, hanımın eli değil), *aslanağzı* (bir çiçek), *devetabanı* (bir bitki), *kahvaltı*, *bugün*, *hiçbir*, *birçok*, *herkes*.

Anlam kaymadıysa ayrı yazılır: *ders kitabı*, *okul bahçesi*, *el çantası*, *her şey*, *bir şey*, *hiç kimse*.

Buradaki en sık yapılan hatalar birkaç sözcükte yoğunlaşır ve tanımak yeterlidir: **“her şey” ayrı**, **“hiçbir” bitişik**, **“birçok” bitişik**, **“bir şey” ayrı**, **“hiç kimse” ayrı**, **“herkes” bitişik**.

Bir de yardımcı fiillerle kurulan birleşik fiiller vardır: ses düşmesi ya da türemesi olmuşsa bitişik yazılır (*kaybolmak, affetmek, hissetmek*), olmamışsa ayrı yazılır (*yardım etmek, memnun olmak*).`,
        },
        {
          id: 'lgs-yazim-sayi-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Ayrı mı bitişik mi? En çok karıştırılanlar',
          columns: ['Ayrı yazılır', 'Bitişik yazılır'],
          rows: [
            { label: 'Belirsizlik sözcükleri', values: ['her şey, bir şey, hiç kimse', 'hiçbir, birçok, birkaç, herkes'] },
            { label: 'Sayılar', values: ['on beş, iki yüz kırk', '(yalnız çek ve senette bitişik)'] },
            { label: 'Tamlamalar', values: ['ders kitabı, okul bahçesi', 'hanımeli, aslanağzı, devetabanı'] },
            { label: 'Birleşik fiiller', values: ['yardım etmek, memnun olmak', 'kaybolmak, affetmek, hissetmek'] },
            { label: 'Ölçüt', values: ['Anlam kaymamış', 'Anlam kaymış ya da ses olayı olmuş'] },
          ],
          insight:
            '“Her şey” ayrı, “hiçbir” bitişik. Bu iki sözcük, LGS’de en çok yanlış yazılan yapılar arasındadır.',
        },
        {
          id: 'lgs-yazim-sayi-tuzak',
          type: 'trap',
          title: 'Sıra sayısını iki kez göstermek',
          wrong: '“Sınıfın 3.üncü sırasında oturuyor.”',
          right: '“Sınıfın 3. sırasında” ya da “Sınıfın üçüncü sırasında”. İkisi birlikte yazılmaz.',
          body: 'Nokta zaten “-üncü” anlamını taşır. İkisini birlikte yazmak aynı bilgiyi iki kez vermektir.',
        },
        {
          id: 'lgs-yazim-sayi-hafiza',
          type: 'memory',
          title: 'Üç test',
          body: '**Çıkarınca kalıyor mu?** → de/da, ki. **Tek bir varlık mı?** → büyük harf. **Anlam kaydı mı?** → bitişik.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Aynı cümlede iki “de”',
      prompt:
        'Şu cümlenin yazımını denetle: “Kütüphanede de aradım ama kitabı bulamadım.”',
      steps: [
        { title: 'Birinci “de”yi sına', body: '“Kütüphane de aradım…” → cümle bozuldu; bulunma anlamı kayboldu. → **Hâl eki**, bitişik yazılır: “kütüphanede”.' },
        { title: 'İkinci “de”yi sına', body: '“Kütüphanede aradım ama kitabı bulamadım.” → cümle anlamlı kalıyor. → **Bağlaç**, ayrı yazılır.' },
        { title: 'Ünsüz benzeşmesini kontrol et', body: '“Kütüphane” ünlüyle bittiği için ek “de” biçiminde; bağlaç zaten “te/ta” olmaz. İki yapı da “de” yazılıyor ama biri bitişik biri ayrı.' },
        { title: 'Cümlenin son hâli', body: '“Kütüphanede de aradım ama kitabı bulamadım.” Yazım doğru.' },
        { title: 'Sınavda nasıl görünür?', body: 'Bu tür cümleler “yazım yanlışı yoktur” seçeneği olarak konur. Öğrenci iki “de”yi görüp birini yanlış sanabilir; testi her ikisine ayrı ayrı uygula.' },
      ],
      answer: 'Cümlenin yazımı doğrudur: birinci “de” hâl ekidir (bitişik), ikinci “de” bağlaçtır (ayrı).',
      takeaway: 'Aynı cümlede iki “de” varsa ikisini de ayrı ayrı sına.',
    },
    {
      title: 'Seviye 2 — Büyük harf kararları',
      prompt:
        'Şu cümlelerdeki büyük harf kullanımını denetle: (1) “Sınav 12 Haziran Cumartesi günü yapılacak.” (2) “Haziran Ayında deniz henüz soğuktur.” (3) “Köyün Batısında bir değirmen vardı.”',
      steps: [
        { title: '(1) belirli tarih var mı?', body: 'Evet: 12 Haziran Cumartesi. Belirli bir tarih bildirildiği için ay ve gün adları büyük yazılır. → **Doğru**.' },
        { title: '(2) belirli tarih var mı?', body: 'Hayır; genel bir zaman bildiriliyor. Ay adı küçük yazılmalıydı. Ayrıca “ayında” sözcüğü de cins addır, küçük yazılır. → “haziran ayında”.' },
        { title: '(3) coğrafi bölge mi?', body: 'Hayır; yalnız bir yön bildiriliyor. Bölge adı olsaydı büyük yazılırdı (“Batı Anadolu”). → “batısında”.' },
        { title: 'Ortak ölçütü uygula', body: 'Üç cümlede de aynı soruyu sorduk: sözcük belirli tek bir varlığı ya da tarihi mi gösteriyor?' },
        { title: 'Düzeltilmiş hâlleri yaz', body: '(2) “haziran ayında deniz henüz soğuktur.” — cümle başı olduğu için “Haziran” yerine cümle başı büyük harfi kalır: “Haziran ayında…” Dikkat: cümle başı kuralı ayrıca işler.' },
      ],
      answer:
        '(1) doğru · (2) ay adı genel zaman bildirdiği için küçük olmalı (cümle başındaysa cümle başı kuralıyla büyük kalır) · (3) yön adı küçük olmalı: “batısında”.',
      takeaway:
        'Cümle başı kuralı ile özel ad kuralı ayrı ayrı işler; ikisini karıştırma.',
    },
    {
      title: 'Seviye 3 — Karışık yazım denetimi',
      prompt:
        'Şu cümlede kaç yazım yanlışı var? “Herşeyi hazırladım ama bir kaç eksik kaldı; sen de gelirmisin?”',
      steps: [
        { title: '“Herşeyi” denetle', body: '“Her şey” **ayrı** yazılır. → Yanlış: “Her şeyi”.' },
        { title: '“bir kaç” denetle', body: '“Birkaç” **bitişik** yazılır. → Yanlış: “birkaç”.' },
        { title: '“sen de” denetle', body: 'Çıkarma testi: “sen gelir misin?” → anlamlı. Bağlaç, ayrı yazılmış. → **Doğru**.' },
        { title: '“gelirmisin” denetle', body: 'Soru eki her zaman ayrı yazılır; sonraki ek ona bitişik. → Yanlış: “gelir misin”.' },
        { title: 'Doğru cümleyi yaz', body: '“Her şeyi hazırladım ama birkaç eksik kaldı; sen de gelir misin?” Üç yanlış düzeltildi.' },
      ],
      answer: 'Üç yazım yanlışı var: “Herşeyi” → “Her şeyi”, “bir kaç” → “birkaç”, “gelirmisin” → “gelir misin”.',
      takeaway:
        'Bir cümlede birden çok yazım yanlışı bulunabilir. Sorular genellikle tek yanlış sorar; ama denetlerken tamamını tara.',
    },
  ],

  questionClue: {
    concept: 'yazım kuralı sorusu',
    statement:
      'Soru kökünde “yazım yanlışı”, “yazımı doğru/yanlış olan”, “aşağıdaki cümlelerin hangisinde yazım yanlışı vardır” ifadelerinden biri varsa, çözüm yolu testleri tek tek uygulamaktır.',
    clues: [
      'Seçeneklerin kısa cümleler olması',
      'Birden fazla seçenekte “de/da” ya da “ki” bulunması',
      'Ay, gün ya da yön adlarının geçmesi',
      'Rakam ve sayı bulunması',
      '“her şey / hiçbir / birkaç” gibi sık karıştırılan sözcüklerin geçmesi',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, sık karıştırılan birkaç yapıyı hedefliyor. Çözüm yolu her seçenekte şüpheli yapıyı bulup ilgili testi uygulamaktır — çıkarma testi, özel ad testi ya da anlam kayması testi.',
    boundary:
      'Bu ipuçlarını “de/da varsa yanlıştır” gibi bir kısayola çevirme. Seçeneklerin çoğunda “de/da” doğru yazılmış olur; yanlış olan tek bir tanesidir.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Dört cümleden hangisinde yazım yanlışı bulunduğunun sorulması',
      'Bir parçada numaralandırılmış sözcüklerden hangisinin yanlış yazıldığının sorulması',
      '“de/da” veya “ki” yazımının doğru olduğu cümlenin seçtirilmesi',
      'Büyük harf kullanımında yanlış yapılan cümlenin bulunması',
      'Sayıların yazımının denetlenmesi',
      'Bitişik ya da ayrı yazılması gereken sözcüklerin sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Bu kitabı sende okumalısın.” cümlesinde yazım yanlışı var mı? Testi uygulayarak göster.',
      hint: '“de”yi çıkar ve cümleyi yeniden oku.',
      answer:
        'Vardır. Çıkarma testi: “Bu kitabı sen okumalısın.” → cümle anlamlı kalıyor. Demek ki “de” bağlaçtır ve **ayrı** yazılmalıdır: “sen de okumalısın”. Bitişik yazıldığında “sende” bir hâl eki gibi okunur ve cümle “senin üzerinde” gibi yanlış bir anlama kayar.',
    },
    {
      prompt:
        '“Öğretmenimiz bize Ankara Caddesindeki kütüphaneyi gösterdi.” cümlesinde büyük harf kullanımı doğru mu?',
      hint: 'Cins ad ne zaman özel adın parçası olur?',
      answer:
        'Doğrudur. “Cadde” tek başına bir cins addır ve küçük yazılır; ancak burada “Ankara Caddesi” bir yer adının parçasıdır ve bu yüzden büyük yazılır. Aynı mantık “Boğaziçi Köprüsü”, “Atatürk Ortaokulu” için de geçerlidir. Tek başına kullanılsaydı küçük olurdu: “Bu cadde çok kalabalık.”',
    },
    {
      prompt:
        '“Sınıfta hiç kimse yoktu; herkes bahçeye çıkmıştı.” cümlesinde “hiç kimse” ve “herkes” yazımları doğru mu?',
      hint: 'Anlam kayması ölçütünü uygula.',
      answer:
        'İkisi de doğrudur. “Hiç kimse” ayrı yazılır: sözcükler birleşince yeni bir anlam doğmaz, “hiç” niteleyici olarak kalır. “Herkes” ise bitişik yazılır; “her” ve “kes” ayrı ayrı bu anlamı vermez, kalıplaşmıştır. Aynı mantıkla “her şey” ayrı, “hiçbir” bitişik yazılır.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey kural ezberi değil, metin üzerinde fark etme',
    body:
      'Kazanımın kendisi “yazdıklarını düzenler” biçimindedir ve açıklaması metinde yer alan kurallarla sınırlı tutulmasını ister. MEB’in merkezî sınav kılavuzu da soruların 8. sınıf kazanımları esas alınarak analiz yapma ve eleştirel düşünme becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: sorular kural tanımı sormaz; bir metinde yanlış yazılmış yapıyı buldurur. Bu yüzden ezber değil tarama becerisi ölçülür.',
    measures: [
      'Bağlaç ile eki çıkarma testiyle ayırabilme',
      'Soru ekinin yazımını istisnasız uygulayabilme',
      'Büyük harf kararını özel ad ölçütüyle verebilme',
      'Ay, gün ve yön adlarında bağlama göre karar verebilme',
      'Sayıların yazımında doğru biçimi seçebilme',
      'Sık karıştırılan bitişik/ayrı yapıları tanıyabilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Okulumuzda bu yıl bir kitap kulübü kuruldu. **(I)** Her hafta perşembe günü toplanıyoruz ve **(II)** herkes okuduğu kitabı anlatıyor. **(III)** Geçen hafta bir arkadaşımız o kadar heyecanlıydıki sözünü kesemedik. **(IV)** Bu ay iki yüz kırk sayfalık bir romanı bitirdik.`,
    question: 'Bu parçada numaralanmış bölümlerin hangisinde yazım yanlışı vardır?',
    options: [
      {
        text: '(I) numaralı bölüm',
        explanation:
          'Yanlış yok. “Perşembe” belirli bir tarihle birlikte kullanılmadığı için küçük yazılmış; bu doğrudur. Genel bir zaman bildiriyor.',
      },
      {
        text: '(II) numaralı bölüm',
        explanation:
          'Yanlış yok. “Herkes” bitişik yazılır; kalıplaşmış bir sözcüktür ve “her” ile “kes” ayrı ayrı bu anlamı vermez.',
      },
      {
        text: '(III) numaralı bölüm',
        explanation:
          'Doğru cevap. “Heyecanlıydıki” yanlıştır; bağlaç olan “ki” ayrı yazılmalıdır: “heyecanlıydı ki”. Çıkarma testi: “o kadar heyecanlıydı sözünü kesemedik” — iki yargıyı bağlıyor, demek ki bağlaç.',
      },
      {
        text: '(IV) numaralı bölüm',
        explanation:
          'Yanlış yok. Metin içindeki sayılar yazıyla ve ayrı ayrı yazılır: “iki yüz kırk”. Bitişik yazım yalnız çek ve senette geçerlidir.',
      },
      {
        text: '(I) ve (IV) numaralı bölümler',
        explanation:
          'İki bölümde de yazım doğrudur. Gün adının küçük yazılması ve sayının ayrı yazılması kurala uygundur; bu seçenek iki doğru bölümü yanlış gösteriyor.',
      },
    ],
    answer_index: 2,
    stem_analysis:
      'Soru numaralanmış bölümlerden birinde yazım yanlışı arıyor. Yöntem: her bölümde şüpheli yapıyı bul (gün adı, kalıplaşmış sözcük, “ki”, sayı) ve ilgili testi uygula.',
    critical_point:
      'Kritik nokta, parçanın dört farklı yazım başlığını birden içermesi: gün adı, bitişik/ayrı yazım, “ki” bağlacı ve sayı yazımı. Tek bir başlığı bilmek yetmez; dördünü de tarayabilmek gerekir.',
    takeaway:
      'Yazım sorularında her bölümde farklı bir kural sınanır. Bir bölümü doğrulamak ötekini garanti etmez.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı **vardır**?',
      options: [
        'Sen de bizimle gelebilirsin.',
        'Kitabı masadaki çantaya koydum.',
        'Bu soruyu çözebildin mi?',
        'Sınıfta ki gürültüden ders yapamadık.',
      ],
      answer_index: 3,
      explanation:
        'Dördüncü cümlede “ki” ayrı yazılmış ama burada ek görevindedir: “sınıftaki gürültü” bir nitelemedir, bitişik yazılmalıdır. Çıkarma testi: “Sınıfta gürültüden ders yapamadık.” — niteleme kayboluyor, demek ki ek. Diğer üç cümlede yazım doğrudur: bağlaç “de” ayrı, ek “-ki” bitişik, soru eki “mi” ayrı.',
    },
    {
      purpose: 'concept',
      question: 'Aşağıdaki cümlelerin hangisinde büyük harf kullanımı **yanlıştır**?',
      options: [
        'Sınav 14 Haziran Cumartesi günü yapılacak.',
        'Bu yaz Ege Bölgesi’ne gideceğiz.',
        'Köyün Kuzeyinde küçük bir göl var.',
        'Dün Ayşe teyzeye uğradık.',
      ],
      answer_index: 2,
      explanation:
        'Üçüncü cümlede “kuzeyinde” yalnız bir yön bildiriyor; coğrafi bölge adı olmadığı için küçük yazılmalıdır. Birinci cümlede belirli tarih bulunduğu için ay ve gün adları büyük; ikinci cümlede “Ege Bölgesi” bir bölge adı; dördüncü cümlede özel addan sonra gelen akrabalık adı küçük yazılır — üçü de doğrudur.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Ahmet te geldi.” yazıyor ve gerekçe olarak “ünsüz benzeşmesi kuralını uyguladım” diyor. Bu öğrencinin hatası nedir?',
      options: [
        'Bağlaç olan “de/da”nın ünsüz benzeşmesine uymadığını bilmemek',
        'Çıkarma testini yanlış uygulamak',
        'Soru ekiyle karıştırmak',
        'Özel ad kuralını uygulamamak',
      ],
      answer_index: 0,
      explanation:
        'Bağlaç olan “de/da” ünlü uyumuna uyar ama ünsüz benzeşmesine uymaz; hiçbir zaman “te/ta” biçiminde yazılmaz. Ünsüz benzeşmesi yalnız hâl eki için geçerlidir: “kitapta”, “sınıfta”. Doğru yazım “Ahmet de geldi.”dir. Öğrencinin çıkarma testi sonucu doğrudur, yalnız yazım biçimini yanlış uygulamıştır.',
    },
  ],

  summary: [
    '8. sınıfta ayrı bir yazım kazanımı yoktur; alan T.8.4.16 üzerinden yürür ve kural kaynağı TDK Yazım Kılavuzu’dur.',
    '“de/da” ve “ki” için çıkarma testi: çıkarınca cümle anlamlı kalıyorsa bağlaçtır ve ayrı yazılır.',
    'Bağlaç olan “de/da” ünsüz benzeşmesine uymaz; “te/ta” biçiminde yazılmaz.',
    'Metinde “te/ta” görüyorsan o yapı ektir ve bitişik yazılır.',
    'Soru eki her zaman ayrı yazılır; ondan sonra gelen ekler ona bitişik yazılır.',
    'Kalıplaşmış “ki”li sözcükler bitişik yazılır: belki, çünkü, hâlbuki, mademki, meğerki, oysaki, sanki.',
    'Büyük harf kararı tek bir soruyla verilir: bu ad belirli tek bir varlığı mı gösteriyor?',
    'Ay ve gün adları belirli bir tarihle birlikte kullanıldığında büyük, genel zaman bildirdiğinde küçük yazılır.',
    'Metin içindeki sayılar yazıyla ve ayrı ayrı yazılır; sıra sayısı ya “3.” ya “üçüncü” olur.',
    '“Her şey, bir şey, hiç kimse” ayrı; “hiçbir, birkaç, birçok, herkes” bitişik yazılır.',
  ],

  next: [
    'Noktalama İşaretleri (T.8.4.16)',
    'Anlatım Bozuklukları: Dil Bilgisi Yönünden (T.8.3.8)',
    'Cümle Türleri (T.8.4.19)',
  ],
})

export default lesson
