import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.1 Mevsimler ve İklim · 2. ders
 * Kazanım : F.8.1.2.1 · F.8.1.2.2
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * Konu/Kavramlar (programdan): İklim, iklim bilimi, iklim bilimci,
 * küresel iklim değişiklikleri.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-iklim-ve-hava-olaylari',
  topic: 'Mevsimler ve İklim',
  order: 2,
  title: 'İklim ve Hava Olayları: Aynı Şey Değil',
  subtitle:
    'Bugün hava soğuk olabilir; bu, iklimin soğuduğu anlamına gelmez. Farkı süre ve alan belirler.',
  minutes: 40,
  kazanimlar: [
    { kod: 'F.8.1.2.1', metin: 'İklim ve hava olayları arasındaki farkı açıklar.' },
    {
      kod: 'F.8.1.2.2',
      metin:
        'İklim biliminin (klimatoloji) bir bilim dalı olduğunu ve bu alanda çalışan uzmanlara iklim bilimci (klimatolog) adı verildiğini söyler.',
    },
  ],
  prerequisites: [
    { topic: 'Mevsimlerin oluşumu', why: 'Mevsim döngüsünü bilmeden iklimin neden uzun süreli bir kavram olduğunu göremezsin.' },
    { topic: 'Ortalama kavramı', why: 'İklim, ölçümlerin uzun yıllara yayılan ortalamasıyla tanımlanır.' },
  ],
  outcomes: [
    'İklim ile hava olayını süre ve alan ölçütüyle ayırabileceksin.',
    'Bir ifadenin havadan mı iklimden mi söz ettiğini belirleyebileceksin.',
    'Tek bir günün verisinden iklim sonucu çıkarılamayacağını açıklayabileceksin.',
    'İklim bilimi ile meteorolojinin farkını ve uzmanlarının adlarını söyleyebileceksin.',
    'Ortalamanın kaç yıllık veriyle kararlı hâle geldiğini veriden okuyabileceksin.',
  ],

  opening: {
    title: 'Nisan ayında kar yağdı — iklim değişti mi?',
    lead: 'Bir şehirde nisan ayında kar yağıyor. Sosyal medyada iki cümle dolaşıyor: “İklim değişiyor!” ve “Demek ki küresel ısınma yokmuş!”',
    body: `İki cümle de aynı hatayı yapıyor: **tek bir günün olayından iklim hakkında sonuç çıkarıyor.**

Bu hatayı görebilmek için iki kavramı ayırmak gerekir.

**Hava olayı**, belirli bir yerde ve **kısa bir sürede** gerçekleşen atmosfer olaylarıdır: yağmur, kar, rüzgâr, sıcaklık, nem, bulutluluk. Bugün öğleden sonra yağmur yağması bir hava olayıdır. Yarın güneşli olması da öyle.

**İklim**, bir bölgede **uzun yıllar boyunca** tekrarlanan hava olaylarının ortalamasıdır. “Akdeniz iklimi yazları sıcak ve kurak, kışları ılık ve yağışlıdır.” cümlesi bir iklim tanımıdır; tek bir günü değil, yılların ortalamasını anlatır.

İki kavramı ayıran iki ölçüt var: **süre** ve **alan**.

**Süre:** hava olayı saatler ya da günlerle ölçülür; iklim uzun yıllarla. Uluslararası çalışmalarda genellikle uzun bir dönem — çoğunlukla otuz yıl gibi — ortalaması kullanılır.

**Alan:** hava olayı dar bir alanda değişebilir; aynı ilin bir ilçesinde yağmur yağarken ötekinde yağmayabilir. İklim ise geniş bir bölgenin genel karakterini anlatır.

Programın kavram listesi bu konuda dört kavram sayar: **iklim, iklim bilimi, iklim bilimci, küresel iklim değişiklikleri.** Bu derste ilk üçünü kuracağız; küresel iklim değişikliği ayrı bir kazanımda (F.8.6.3.3) ayrıntılı işlenecek.

Şimdi baştaki soruya dönelim: nisanda kar yağması iklimin değiştiğini kanıtlar mı? Hayır — tek bir olay ortalamayı belirlemez. Peki iklimin değişmediğini kanıtlar mı? O da hayır — aynı sebeple. **Tek bir günün verisi, hiçbir yönde iklim kanıtı olmaz.**`,
  },

  concepts: [
    {
      term: 'Hava olayı',
      body: 'Belirli bir yerde ve kısa sürede gerçekleşen atmosfer olayıdır: yağmur, kar, rüzgâr, sıcaklık değişimi, nem, bulutluluk. Saatler ve günlerle ölçülür, dar alanda bile farklılık gösterebilir.',
    },
    {
      term: 'İklim',
      body: 'Bir bölgede uzun yıllar boyunca tekrarlanan hava olaylarının ortalamasıdır. Tek bir günü değil, yılların genel eğilimini anlatır. Programın kavram listesinde açıkça yer alır.',
    },
    {
      term: 'İklim bilimi (klimatoloji)',
      body: 'İklimi inceleyen bilim dalıdır. Uzun süreli ölçüm kayıtlarını toplar, ortalamaları hesaplar ve iklimin nasıl değiştiğini araştırır. Kazanım F.8.1.2.2 bunun bir bilim dalı olduğunun söylenmesini ister.',
    },
    {
      term: 'İklim bilimci (klimatolog)',
      body: 'İklim bilimi alanında çalışan uzmandır. Meteorologdan farkı, kısa süreli hava tahmini değil uzun süreli iklim eğilimlerini incelemesidir.',
    },
    {
      term: 'Meteoroloji ve meteorolog',
      body: 'Meteoroloji, kısa süreli hava olaylarını inceleyen ve hava tahmini yapan bilim dalıdır; uzmanına meteorolog denir. İklim bilimiyle aynı verileri kullanır ama farklı süre ölçeğinde çalışır.',
    },
    {
      term: 'Ortalama',
      body: 'Ölçümlerin toplamının ölçüm sayısına bölünmesidir. İklim tanımının çekirdeğidir: tek tek günler çok değişken olsa bile ortalamaları uzun sürede kararlı hâle gelir.',
    },
  ],

  why: {
    question: 'Neden tek bir günün verisinden iklim sonucu çıkarılamaz?',
    body: `Çünkü iklim bir **ortalamadır** ve ortalamaların doğası gereği tek bir ölçüm onu belirlemez.

Bunu bir örnekle görelim. Bir öğrencinin bir dönemdeki matematik başarısını merak ediyorsun. Tek bir sınav sonucuna bakarsan yanılabilirsin: o gün hasta olmuş olabilir, ya da şansı yaver gitmiş olabilir. Ama on sınavın ortalamasına bakarsan, tek bir sınavın etkisi küçülür ve gerçek eğilim görünür.

İklim de böyledir. Bir günün sıcaklığı ortalamanın çok üstünde ya da altında olabilir; bu, ortalamayı neredeyse hiç değiştirmez. Uzun yılların ortalaması, tek tek günlerin dalgalanmasını söndürür.

Bu yüzden şu iki cümle de bilimsel olarak geçersizdir:

“Bu kış çok soğuk geçti; demek ki küresel ısınma yokmuş.”
“Bu yaz çok sıcaktı; demek ki iklim değişti.”

İkisi de **hava olayından iklim sonucu çıkarıyor.** Doğru yol, uzun süreli kayıtların eğilimine bakmaktır — ki bu, iklim biliminin işidir.

İkinci bir nokta: iklim ile hava olayı arasındaki fark **alan** bakımından da vardır. Bir şehrin kuzeyinde yağmur yağarken güneyinde güneş açık olabilir. Ama aynı şehir tek bir iklim bölgesinde bulunur. Hava olayı dar alanda değişir, iklim geniş alanın genel karakteridir.

Son olarak şunu karıştırma: iklim **değişmez** demiyoruz. İklim de değişir; ama bu değişim uzun süreli kayıtlarda bir **eğilim** olarak görünür, tek bir günde değil. Küresel iklim değişikliği konusunu F.8.6.3.3 kazanımında ayrıntılı işleyeceğiz.`,
  },

  mechanism: {
    title: 'Hava olayından iklime nasıl geçilir?',
    lead: 'İklim gökten inmez; tek tek ölçümlerden hesaplanır. Zinciri görelim.',
    intro:
      'Bir bölgenin ikliminden söz edebilmek için önce ölçüm, sonra kayıt, sonra ortalama gerekir. Her halka bir öncekine dayanır.',
    steps: [
      {
        title: '1. Ölçüm yapılır',
        body: 'Meteoroloji istasyonları her gün belirli saatlerde sıcaklık, nem, yağış, rüzgâr gibi değerleri ölçer. Bu ölçümlerin her biri bir hava olayı kaydıdır.',
      },
      {
        title: '2. Ölçümler kaydedilir',
        body: 'Ölçümler tarih ve konumla birlikte saklanır. Tek bir ölçüm iklim hakkında bir şey söylemez; ama biriken kayıtlar söyler.',
      },
      {
        title: '3. Kayıtlar uzun süreye yayılır',
        body: 'Kayıtlar yıllar boyunca toplanır. Kısa süreli kayıtlarda ortalama sürekli oynar; süre uzadıkça oynamalar azalır.',
      },
      {
        title: '4. Ortalama kararlı hâle gelir',
        body: 'Yeterince uzun bir dönemin ortalaması artık tek tek günlerden etkilenmez. Bu kararlı ortalama, bölgenin iklimini tanımlar.',
      },
      {
        title: '5. Ortalamalar karşılaştırılır',
        body: 'Farklı dönemlerin ortalamaları karşılaştırılarak iklimin değişip değişmediği araştırılır. Bu karşılaştırmayı yapan bilim dalı iklim bilimidir.',
      },
    ],
    takeaway: 'İklim, hava olaylarının karşıtı değildir; hava olaylarının uzun süreli ortalamasıdır.',
  },

  comparison: {
    title: 'İki kavramı iki ölçütle ayır',
    columns: ['Hava olayı', 'İklim'],
    rows: [
      { label: 'Süre', values: ['Saatler, günler', 'Uzun yıllar'] },
      { label: 'Alan', values: ['Dar alanda bile değişir', 'Geniş bölgenin genel karakteri'] },
      { label: 'Örnek ifade', values: ['Yarın sağanak yağış bekleniyor.', 'Bu bölgede yazlar sıcak ve kurak geçer.'] },
      { label: 'Kim inceler?', values: ['Meteoroloji · meteorolog', 'İklim bilimi (klimatoloji) · iklim bilimci (klimatolog)'] },
      { label: 'Nasıl ölçülür?', values: ['Anlık ve günlük ölçüm', 'Uzun yılların ortalaması'] },
      { label: 'Tek ölçümün etkisi', values: ['Belirleyicidir', 'Neredeyse yoktur'] },
    ],
    insight:
      'İki sütun da aynı verileri kullanır: sıcaklık, yağış, nem. Fark, bu verilerin hangi süre ölçeğinde okunduğudur.',
  },

  traps: [
    {
      title: 'Tek bir günden iklim sonucu çıkarmak',
      wrong: 'Bu kış çok soğuk geçti; demek ki iklim soğuyor.',
      right: 'Tek bir kış bir hava olayları dizisidir. İklim sonucu için uzun yılların ortalamasına bakmak gerekir.',
      body: 'Bu hata iki yönde de yapılır: sıcak bir yaz “iklim değişti”, soğuk bir kış “iklim değişmiyor” kanıtı sanılır. İkisi de geçersizdir; çünkü ortalamayı tek ölçüm belirlemez.',
    },
    {
      title: 'İklimi “hiç değişmeyen şey” sanmak',
      wrong: 'İklim sabittir; değişen yalnız hava olaylarıdır.',
      right: 'İklim de değişir; ama bu değişim uzun süreli kayıtlarda bir eğilim olarak görünür, tek bir günde değil.',
      body: 'İklimin uzun süreli olması onu değişmez yapmaz. Programın kavram listesinde “küresel iklim değişiklikleri” ifadesinin bulunması da bunu gösterir.',
    },
    {
      title: 'Meteorolog ile klimatoloğu karıştırmak',
      wrong: 'İkisi de hava tahmini yapar; adları farklıdır o kadar.',
      right: 'Meteorolog kısa süreli hava tahmini yapar; iklim bilimci (klimatolog) uzun süreli iklim eğilimlerini inceler.',
      body: 'Kazanım F.8.1.2.2 iklim biliminin bir bilim dalı olduğunun ve uzmanının adının söylenmesini açıkça ister. İki uzmanlık aynı verilerle çalışır ama farklı süre ölçeğinde.',
    },
  ],

  variables: {
    title: 'Veriyle inceleyelim: ortalama kaç yılda kararlı oluyor?',
    lead:
      'İklimin neden uzun süre gerektirdiğini bir tabloyla göreceğiz. Bu bir laboratuvar deneyi değil, bir veri incelemesidir; ama değişken mantığı aynı işler.',
    question: 'Ortalama sıcaklık hesabında kullanılan verinin süresi uzadıkça ortalama nasıl davranıyor?',
    independent: {
      label: 'Ortalamanın hesaplandığı süre',
      note: 'Ben seçiyorum: 1 gün, 1 ay, 1 yıl, 30 yıl',
    },
    setup: {
      label: 'Aynı istasyonun sıcaklık kayıtları',
      note: 'Kayıtlardan ortalama hesaplanır',
    },
    dependent: {
      label: 'Ortalamanın yıldan yıla oynama miktarı',
      note: 'Ölçtüğüm: ortalama ne kadar değişiyor?',
    },
    controlled: [
      'Aynı ölçüm istasyonu ve konumu',
      'Aynı ölçüm saatleri',
      'Aynı ölçüm aracı ve birimi',
      'Aynı hesaplama yöntemi',
    ],
    caption:
      'İstasyon, saat ve yöntem bilerek sabit tutulur. Böylece ortalamadaki oynamanın tek olası sebebi sürenin uzunluğu olur.',
  },

  experiment: {
    title: 'Veri incelemesinin adımları',
    intro:
      'Bu inceleme gerçek meteoroloji verisiyle yapılabilir. Adımların sırası, kontrol edilen değişkenleri korumak için önemlidir.',
    steps: [
      { title: '1. Tek bir istasyon seç', body: 'Farklı istasyonların verilerini karıştırmak konum değişkenini bozar. Tek istasyon, konumu sabit tutar.' },
      { title: '2. Ölçüm saatini sabitle', body: 'Günün farklı saatlerinde ölçülen sıcaklıklar farklıdır. Hep aynı saatin verisi alınır.' },
      { title: '3. Farklı süreler için ortalama hesapla', body: 'Önce tek bir günün, sonra bir ayın, sonra bir yılın, sonra uzun bir dönemin ortalaması hesaplanır.' },
      { title: '4. Ortalamaları yıldan yıla karşılaştır', body: 'Aynı süre uzunluğu için farklı yıllardaki ortalamalar karşılaştırılır. Aralarındaki fark, ortalamanın ne kadar oynadığını gösterir.' },
      { title: '5. Oynama miktarını yaz', body: 'Her süre için “en yüksek ortalama − en düşük ortalama” hesaplanır. Bu fark küçüldükçe ortalama kararlı hâle geliyor demektir.' },
      { title: '6. Sonucu yorumla', body: 'Hangi süreden sonra oynama ihmal edilecek kadar küçülüyor? İklim tanımının neden uzun süre istediği burada görünür.' },
    ],
    takeaway: 'Veri incelemesinde de değişken mantığı çalışır: tek bir şeyi değiştirip ötekileri sabit tutarsın.',
  },

  dataTable: {
    title: 'Aynı istasyon, farklı süreler: ortalama ne kadar oynuyor?',
    columns: ['Ortalamanın süresi', 'En düşük ortalama (°C)', 'En yüksek ortalama (°C)', 'Oynama (°C)'],
    rows: [
      ['1 gün', '−4', '34', '38'],
      ['1 ay', '3', '27', '24'],
      ['1 yıl', '13,2', '15,1', '1,9'],
      ['30 yıl', '14,0', '14,4', '0,4'],
    ],
    caption:
      'Örnek veri kümesi, ilişkiyi göstermek için hazırlanmıştır; gerçek bir istasyonun kaydı değildir. Okunacak ilişki şudur: süre uzadıkça ortalamanın oynaması küçülür.',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-iklim-olcutler',
      title: 'Süre ve alan: iki ölçüt, tek karar',
      lead: 'Bir ifadenin havadan mı iklimden mi söz ettiğini anlamak için iki soru yeter.',
      blocks: [
        {
          id: 'lgs-fen-iklim-olcut-anlatim',
          type: 'prose',
          body: `Bir cümle okuduğunda şu iki soruyu sor:

**Birinci soru: ne kadar süreden söz ediliyor?** Bir gün, bir hafta, bir mevsim mi — yoksa yıllar mı? Kısa süre hava olayını, uzun süre iklimi işaret eder.

**İkinci soru: ne kadar alandan söz ediliyor?** Bir şehir merkezi, bir vadi, bir mahalle mi — yoksa bir bölge, bir ülke, bir kuşak mı?

İki soru genellikle aynı cevabı verir; verdiğinde karar kesinleşir.

Birkaç örnek üzerinde çalışalım.

“Yarın öğleden sonra sağanak bekleniyor.” → Süre: bir gün. Alan: belirli bir yer. **Hava olayı.**

“Akdeniz kıyılarında yazlar sıcak ve kurak geçer.” → Süre: her yaz, yıllar boyunca. Alan: geniş bir kıyı şeridi. **İklim.**

“Bu hafta sıcaklık mevsim normallerinin üzerinde seyredecek.” → Süre: bir hafta. **Hava olayı.** Ama dikkat: cümlede “mevsim normalleri” ifadesi geçiyor ve bu bir **iklim** verisidir. Yani cümle, hava olayını iklim ortalamasıyla karşılaştırıyor. Bu, iki kavramın nasıl birlikte kullanıldığının güzel bir örneğidir.

“Son elli yılda bölgenin ortalama sıcaklığı yükseldi.” → Süre: elli yıl. Alan: bölge. **İklim.**

Son örnekte bir incelik var: cümle iklimin **değiştiğini** söylüyor. İklim uzun süreli olduğu için değişmez değildir; uzun süreli kayıtlarda bir eğilim olarak değişir.

Bir uyarı: “mevsim normalleri” ifadesi haberlerde çok geçer ve öğrenciler bunu hava olayı sanır. Oysa “normal”, uzun yılların ortalamasıdır; yani bir iklim verisidir. Haber, günün sıcaklığını iklim ortalamasıyla karşılaştırmaktadır.`,
        },
        {
          id: 'lgs-fen-iklim-olcut-tablo',
          type: 'table',
          interactive: true,
          title: 'İfadeyi iki soruyla sınıflandır',
          columns: ['İfade', 'Süre', 'Alan', 'Kavram'],
          rows: [
            ['Yarın öğleden sonra sağanak bekleniyor.', 'Bir gün', 'Belirli bir yer', 'Hava olayı'],
            ['Akdeniz kıyılarında yazlar sıcak ve kurak geçer.', 'Her yaz, yıllarca', 'Geniş kıyı şeridi', 'İklim'],
            ['Bu hafta sıcaklık mevsim normallerinin üzerinde.', 'Bir hafta', 'Bir bölge', 'Hava olayı (iklim verisiyle karşılaştırılıyor)'],
            ['Son elli yılda ortalama sıcaklık yükseldi.', 'Elli yıl', 'Bölge', 'İklim'],
            ['Şu an dışarıda rüzgâr çok kuvvetli.', 'Şu an', 'Bulunduğun nokta', 'Hava olayı'],
            ['Bu kuşakta kışlar yağışlı geçer.', 'Her kış, yıllarca', 'Kuşak', 'İklim'],
          ],
          caption:
            'Üçüncü satır iki kavramın nasıl birlikte kullanıldığını gösterir: “mevsim normali” bir iklim verisidir, cümlenin kendisi ise bir hava tahmini.',
        },
        {
          id: 'lgs-fen-iklim-olcut-tuzak',
          type: 'trap',
          title: '“Mevsim normalleri”ni hava olayı sanmak',
          wrong: 'Haberde geçen “mevsim normalleri” de bir hava tahminidir.',
          right: '“Normal”, uzun yılların ortalamasıdır; yani bir **iklim** verisidir. Haber, günün havasını bu iklim ortalamasıyla karşılaştırır.',
          body: 'Bu ayrımı görmek, hava haberlerini doğru okumanı sağlar: haber hem hava olayını hem iklim verisini birlikte kullanır.',
        },
        {
          id: 'lgs-fen-iklim-olcut-hoca',
          type: 'teacher_note',
          tone: 'exam',
          body:
            'Sorularda ayrım genellikle tek bir sözcükle verilir: “yarın”, “bu hafta”, “şu an” hava olayını; “genellikle”, “her yıl”, “uzun yıllardır”, “ortalama” iklimi işaret eder. Ama kararı sözcüğe değil, cümlenin anlattığı süreye dayandır.',
        },
      ],
    },

    {
      id: 'lgs-fen-iklim-bilimi',
      title: 'İklim bilimi bir bilim dalıdır',
      lead: 'Kazanım F.8.1.2.2 bunun açıkça söylenmesini ister. Peki bu bilim dalı tam olarak ne yapar?',
      blocks: [
        {
          id: 'lgs-fen-iklim-bilim-anlatim',
          type: 'prose',
          body: `**İklim bilimi (klimatoloji)**, iklimi inceleyen bilim dalıdır. Bu alanda çalışan uzmana **iklim bilimci (klimatolog)** denir. Kazanım F.8.1.2.2 tam olarak bunun söylenmesini ister.

İklim bilimcinin işi şu adımlardan oluşur.

**Veri toplama.** Meteoroloji istasyonlarının, deniz şamandıralarının ve uyduların ölçümleri toplanır. Bu ölçümler onlarca yıla yayılır.

**Kayıtları düzenleme.** Farklı istasyonların, farklı cihazların ve farklı dönemlerin verileri karşılaştırılabilir hâle getirilir. Bir istasyon taşınmışsa ya da cihaz değişmişse bu, kayıtta bir sıçrama yaratır ve düzeltilmesi gerekir.

**Ortalama ve eğilim hesaplama.** Uzun dönem ortalamaları hesaplanır; dönemler arasındaki farklara bakılarak bir eğilim olup olmadığı araştırılır.

**Modelleme ve öngörü.** Geçmiş verilerle kurulan modeller, iklimin gelecekte nasıl davranabileceğini araştırmak için kullanılır.

**Meteoroloji** ise kısa süreli hava olaylarını inceler ve hava tahmini yapar; uzmanına **meteorolog** denir.

İki alan aynı verileri kullanır ama farklı sorular sorar. Meteorolog “yarın yağmur yağacak mı?” sorusuyla ilgilenir; iklim bilimci “bu bölgede yıllık yağış miktarı son elli yılda değişti mi?” sorusuyla.

Bir benzetme yardımcı olabilir: meteorolog bir maçın skorunu tahmin etmeye çalışır; iklim bilimci bir takımın sezon boyunca nasıl bir performans sergilediğini inceler. Aynı maçlar, farklı ölçek.

Son olarak programın kavram listesinde geçen **küresel iklim değişiklikleri** kavramına kısaca değinelim: iklim bilimcilerin uzun süreli kayıtlarda saptadığı değişimler bu başlık altında incelenir. Bu konunun nedenleri ve sonuçları, F.8.6.3.3 kazanımında ayrıntılı olarak ele alınacaktır.`,
        },
        {
          id: 'lgs-fen-iklim-bilim-tablo',
          type: 'table',
          interactive: true,
          title: 'İki bilim dalı, iki soru',
          columns: ['Alan', 'Uzman', 'Sorduğu soru', 'Çalıştığı süre'],
          rows: [
            ['Meteoroloji', 'Meteorolog', 'Yarın hava nasıl olacak?', 'Saatler ve günler'],
            ['İklim bilimi (klimatoloji)', 'İklim bilimci (klimatolog)', 'Bu bölgenin iklimi değişiyor mu?', 'Uzun yıllar'],
            ['Ortak yanları', '—', 'Aynı ölçümleri kullanırlar', '—'],
            ['Ayrım noktası', '—', 'Süre ölçeği ve sorulan soru', '—'],
          ],
          caption:
            'İki alanın ayrımı verilerde değil, o verilere sorulan sorudadır.',
        },
        {
          id: 'lgs-fen-iklim-bilim-tuzak',
          type: 'trap',
          title: 'İklim bilimini “tahmin bilimi” sanmak',
          wrong: 'İklim bilimci de tıpkı meteorolog gibi ileriki günlerin havasını tahmin eder.',
          right: 'İklim bilimci günlük hava tahmini yapmaz; uzun süreli ortalamaları ve eğilimleri inceler.',
          body: 'Bu ayrım, kazanımın neden iki ayrı madde hâlinde yazıldığını da açıklar: önce farkın kavranması, sonra bilim dalının ve uzmanının adının bilinmesi istenir.',
        },
      ],
    },

    {
      id: 'lgs-fen-iklim-ortalama',
      title: 'Ortalama neden uzun sürede kararlı hâle geliyor?',
      lead: 'Tablodaki sayıların arkasındaki mantığı kuralım; bu, iklim tanımının çekirdeğidir.',
      blocks: [
        {
          id: 'lgs-fen-iklim-ortalama-anlatim',
          type: 'prose',
          body: `Tablomuz şunu gösteriyordu: ortalamanın hesaplandığı süre uzadıkça, ortalamanın yıldan yıla oynaması küçülüyor. **1 günde 38 °C’lik bir oynama varken, 30 yıllık ortalamada oynama 0,4 °C’ye iniyor.**

Bunun sebebi basittir. Tek bir günün sıcaklığı pek çok geçici etkene bağlıdır: o gün bir rüzgâr gelmiş olabilir, bulut geçmiş olabilir, bir yağış olmuş olabilir. Bu etkenler bazen sıcaklığı yükseltir, bazen düşürür.

Çok sayıda gün bir araya geldiğinde, yükselten etkilerle düşüren etkiler birbirini büyük ölçüde dengeler. Geriye, bölgenin genel karakterinden gelen kararlı bir değer kalır. İşte iklim budur.

Bu yüzden iklim tanımında **uzun süre** vurgusu vardır. Süre kısaysa ortalama hâlâ geçici etkenlerin izini taşır; uzun olduğunda taşımaz.

Şimdi buradan iki tahmin üretelim.

**Birinci tahmin:** Aynı bölge için iki farklı otuz yıllık dönemin ortalaması birbirine çok yakın olmalıdır — eğer iklim değişmiyorsa. Yani iki dönemin ortalaması arasında belirgin bir fark bulunuyorsa, bu fark geçici bir etkenden değil, iklimin kendisindeki bir değişimden geliyordur.

**İkinci tahmin:** Kısa süreli verilerle iklim karşılaştırması yapılamaz. Örneğin iki farklı yılın tek tek karşılaştırılması, iklim hakkında sonuç vermez; çünkü tek yılın ortalaması hâlâ 1,9 °C oynayabiliyor.

İki tahmin de iklim biliminin çalışma biçimini açıklar: neden uzun kayıtlar toplanır ve neden dönemler karşılaştırılır.

Son bir not: tablodaki sayılar ilişkiyi göstermek için hazırlanmıştır; gerçek bir istasyonun kaydı değildir. Ama gösterdiği ilişki gerçektir ve her istasyonun verisinde görülür.`,
        },
        {
          id: 'lgs-fen-iklim-ortalama-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Kısa süreli ortalama ile uzun süreli ortalama',
          columns: ['Kısa süreli ortalama', 'Uzun süreli ortalama'],
          rows: [
            { label: 'Geçici etkenlerin izi', values: ['Güçlü', 'Neredeyse silinmiş'] },
            { label: 'Yıldan yıla oynama', values: ['Büyük', 'Küçük'] },
            { label: 'Neyi gösterir?', values: ['O dönemin havasını', 'Bölgenin iklimini'] },
            { label: 'Karşılaştırmaya uygun mu?', values: ['Hayır', 'Evet'] },
            { label: 'Kim kullanır?', values: ['Meteorolog', 'İklim bilimci'] },
          ],
          insight:
            'İki sütun da aynı ölçümlerden hesaplanır. Farkı yaratan tek şey, kaç ölçümün ortalamaya girdiğidir.',
        },
        {
          id: 'lgs-fen-iklim-ortalama-tuzak',
          type: 'trap',
          title: 'İki yılı karşılaştırıp iklim sonucu çıkarmak',
          wrong: 'Geçen yılın ortalaması 13,2, bu yılınki 15,1; demek ki iklim ısındı.',
          right: 'Tek yılın ortalaması hâlâ yaklaşık 2 °C oynayabiliyor. İki yılın farkı iklim değişimini göstermez; uzun dönem ortalamaları karşılaştırılmalıdır.',
          body: 'Bu, tablodaki verinin doğrudan söylediği sonuçtur: 1 yıllık ortalamanın oynama aralığı 1,9 °C. İki yıl arasındaki 1,9 °C’lik fark, bu doğal oynamanın içinde kalıyor.',
        },
        {
          id: 'lgs-fen-iklim-ortalama-hafiza',
          type: 'memory',
          title: 'İki soruluk ayrım',
          body: '**Ne kadar süre?** · **Ne kadar alan?** Kısa ve dar → hava olayı. Uzun ve geniş → iklim.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — İfadeleri sınıflandır',
      prompt:
        'Şu ifadeleri hava olayı ve iklim olarak ayır: (1) “Bu sabah yoğun sis var.” (2) “Karadeniz kıyılarında her mevsim yağış görülür.” (3) “Hafta sonu sıcaklık 5 derece düşecek.” (4) “Bu bölgede kışlar ılık geçer.”',
      steps: [
        { title: '(1) iki soruyu sor', body: 'Süre: bu sabah — çok kısa. Alan: bulunulan yer. → **Hava olayı**.' },
        { title: '(2) iki soruyu sor', body: 'Süre: her mevsim, yani yıllar boyunca tekrarlanan bir durum. Alan: geniş bir kıyı şeridi. → **İklim**.' },
        { title: '(3) iki soruyu sor', body: 'Süre: hafta sonu — birkaç gün. Bir tahmin veriliyor. → **Hava olayı**.' },
        { title: '(4) iki soruyu sor', body: 'Süre: kışlar, yani her yıl tekrarlanan bir genel durum. Alan: bölge. → **İklim**.' },
        { title: 'Ortak ölçütü yaz', body: 'Dördünde de aynı iki soruyu sorduk. Karar, cümledeki sözcüklerden değil, anlatılan süre ve alandan geldi.' },
      ],
      answer: '(1) hava olayı · (2) iklim · (3) hava olayı · (4) iklim',
      takeaway: 'Süre ve alan, iki kavramı ayıran tek ölçüt çiftidir.',
    },
    {
      title: 'Seviye 2 — Tabloyu yorumla',
      prompt:
        'Tabloya göre 1 günlük ortalamanın oynaması 38 °C, 30 yıllık ortalamanın oynaması 0,4 °C. Bu iki satır arasındaki ilişkiyi açıkla ve iklim tanımıyla bağlantısını kur.',
      steps: [
        { title: '1. Neyin değiştiğini belirle', body: 'Değişen tek şey ortalamanın hesaplandığı süre: 1 günden 30 yıla. Bu, incelemenin bağımsız değişkeni.' },
        { title: '2. Neyin sabit olduğunu belirle', body: 'İstasyon, ölçüm saati, ölçüm aracı ve hesaplama yöntemi sabit. Bunlar kontrol edilen değişkenler.' },
        { title: '3. Sonucu oku', body: 'Oynama 38 °C’den 0,4 °C’ye inmiş; yani yaklaşık yüzde biri kadar kalmış. Süre uzadıkça ortalama kararlı hâle geliyor.' },
        { title: '4. Sebebi açıkla', body: 'Tek bir günün sıcaklığı geçici etkenlere bağlıdır. Çok sayıda gün toplandığında yükselten ve düşüren etkiler birbirini dengeler; geriye bölgenin genel karakteri kalır.' },
        { title: '5. İklim tanımıyla bağla', body: 'İklim, hava olaylarının uzun süreli ortalamasıdır. Tablo, “uzun süreli” ifadesinin neden tanımın parçası olduğunu sayılarla gösteriyor.' },
      ],
      answer:
        'Süre uzadıkça ortalamanın oynaması küçülür; çünkü geçici etkenler birbirini dengeler. İklim tanımının uzun süre istemesinin sebebi budur.',
      takeaway: 'İklim, hava olaylarının karşıtı değil; yeterince uzun süre ortalanmış hâlidir.',
    },
    {
      title: 'Seviye 3 — İddiayı değerlendir',
      prompt:
        'Bir haberde şöyle deniyor: “Geçen yıl bu şehirde ortalama sıcaklık 13,2 °C, bu yıl 15,1 °C ölçüldü. Demek ki şehrin iklimi ısınıyor.” Bu çıkarım geçerli mi?',
      steps: [
        { title: '1. İddiayı ayır', body: 'Veri: iki yılın ortalaması (13,2 ve 15,1). Çıkarım: şehrin iklimi ısınıyor.' },
        { title: '2. Ortalamanın doğal oynamasına bak', body: 'Tabloya göre 1 yıllık ortalamanın oynama aralığı 1,9 °C. İki yıl arasındaki fark da 1,9 °C.' },
        { title: '3. Farkı oynama ile karşılaştır', body: 'Gözlenen fark, doğal oynamanın tam sınırında. Yani bu fark, iklim değişmese de ortaya çıkabilirdi.' },
        { title: '4. Çıkarımı değerlendir', body: 'Çıkarım geçerli değil. İki yılın karşılaştırılması iklim sonucu vermez; çünkü yıllık ortalama hâlâ geçici etkenlerin izini taşıyor.' },
        { title: '5. Doğru yolu göster', body: 'İklim sonucu için uzun dönem ortalamaları karşılaştırılmalıdır: örneğin iki ayrı otuz yıllık dönemin ortalamaları. Bu, iklim biliminin yaptığı iştir.' },
      ],
      answer:
        'Geçerli değildir. İki yılın farkı, yıllık ortalamanın doğal oynama aralığının içindedir; iklim sonucu için uzun dönem ortalamaları gerekir.',
      takeaway:
        'Bir farkın anlamlı olup olmadığına karar vermek için, o ölçümün doğal oynamasını bilmek gerekir.',
    },
  ],

  dailyLife: {
    title: 'Bu ayrım günlük hayatta nerede işine yarıyor?',
    body:
      'İklim ile hava olayını ayırmak yalnız sınav için değil, haberleri ve tartışmaları doğru okumak için de gerekir. Aşağıdaki durumların hepsinde bu ayrım iş görür.',
    links: [
      'Hava durumu haberlerinde “mevsim normalleri” bir iklim verisidir.',
      'Bir bölgede hangi bitkinin yetişeceğine iklim verilerine bakılarak karar verilir.',
      'Bir şehrin yıllık su planlaması, uzun süreli yağış ortalamalarına dayanır.',
      'Tatil planı yaparken iklime, valize ne koyacağına ise hava tahminine bakarsın.',
      'Bina yalıtımı, günlük hava değil bölgenin iklimi düşünülerek tasarlanır.',
    ],
  },

  questionClue: {
    concept: 'iklim–hava olayı ayrımı sorusu',
    statement:
      'Soruda birkaç ifade verilip hangisinin iklimden söz ettiği soruluyorsa, aranan şey süre ve alan ölçütüdür.',
    clues: [
      'İfadelerde “yarın, bu hafta, şu an” gibi kısa süre belirteçleri',
      'İfadelerde “genellikle, her yıl, uzun yıllardır, ortalama” gibi süreklilik belirteçleri',
      'Meteorolog ve klimatolog adlarının seçeneklerde bulunması',
      'Uzun süreli ölçüm tablosu ya da grafiği verilmesi',
      '“Mevsim normalleri” ifadesinin geçmesi',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, tek bir olaydan iklim sonucu çıkarıp çıkarmadığını ölçüyor. Çözüm yolu iki soruyu sormaktır: ne kadar süre, ne kadar alan?',
    boundary:
      'Bu ipuçlarını “yarın geçiyorsa hava olayıdır” gibi bir kısayola çevirme. Bir cümle hava tahmini verirken iklim verisini de kullanabilir; o zaman ikisi bir aradadır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Verilen ifadelerden hangisinin iklimi, hangisinin hava olayını anlattığının sorulması',
      'Bir öğrenci açıklamasının değerlendirilmesi (tek günden iklim sonucu çıkarma)',
      'Uzun süreli sıcaklık tablosunun yorumlanması',
      'Meteorolog ile iklim bilimcinin çalışma alanlarının ayırt ettirilmesi',
      'Bir bölgenin ikliminden söz edebilmek için ne kadar veri gerektiğinin sorulması',
      'Aynı verinin iki farklı süre ölçeğinde okunması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Bir öğrenci “Bugün hava çok sıcak, demek ki bu bölgenin iklimi sıcaktır.” diyor. Bu çıkarım geçerli mi?',
      hint: 'Tek bir ölçüm ortalamayı belirler mi?',
      answer:
        'Geçerli değildir. Tek bir günün sıcaklığı bir hava olayıdır ve geçici etkenlere bağlıdır. İklim, uzun yılların ortalamasıdır; tek bir gün bu ortalamayı neredeyse hiç değiştirmez. Bölgenin ikliminden söz edebilmek için uzun süreli kayıtların ortalamasına bakmak gerekir.',
    },
    {
      prompt:
        'Veri incelemesinde bir öğrenci ortalamaları farklı istasyonlardan alıyor. Sonuç neden güvenilmez olur?',
      hint: 'Kaç değişken aynı anda değişti?',
      answer:
        'Çünkü aynı anda iki değişken değişmiş olur: ortalamanın süresi ve ölçüm konumu. Ortalamadaki oynamanın sebebinin süre mi konum mu olduğunu söyleyemeyiz. İstasyon, bu incelemede kontrol edilen bir değişkendir ve sabit tutulmalıdır.',
    },
    {
      prompt:
        'İklim bilimci ile meteoroloğun kullandığı veriler aynı mıdır? Farkları nedir?',
      hint: 'Veriler mi farklı, sorular mı?',
      answer:
        'Veriler büyük ölçüde aynıdır: sıcaklık, yağış, nem, rüzgâr ölçümleri. Fark, bu verilere sorulan soruda ve kullanılan süre ölçeğindedir. Meteorolog kısa süreli hava tahmini yapar; iklim bilimci (klimatolog) uzun süreli ortalamaları ve eğilimleri inceler.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey tanım ezberi değil, ölçek ayrımı',
    body:
      'Kazanım “farkı açıklar” diyor; yani iki tanımı sıralamak değil, ayrımı bir durum üzerinde uygulayabilmek isteniyor. MEB’in merkezî sınav kılavuzu da soruların okuduğunu anlama, yorumlama, sonuç çıkarma ve bilimsel süreç becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: sana bir ifade, bir haber ya da bir tablo verilir; senden hangi ölçekte konuşulduğunu ayırt etmen istenir.',
    measures: [
      'Bir ifadenin süre ve alan ölçeğini belirleyebilme',
      'Hava olayından iklim sonucu çıkarılamayacağını gerekçelendirebilme',
      'Uzun süreli veri tablosunu yorumlayabilme',
      'Ortalamanın neden uzun sürede kararlı hâle geldiğini açıklayabilme',
      'İklim bilimi ile meteorolojiyi ve uzmanlarını ayırabilme',
      'Bir farkın doğal oynama içinde kalıp kalmadığını değerlendirebilme',
    ],
  },

  simulationTable: {
    title: 'Bir şehirde ölçülen temmuz ayı ortalama sıcaklıkları (°C)',
    columns: ['Dönem', 'Ortalama sıcaklık', 'Dönemdeki en düşük yıl', 'Dönemdeki en yüksek yıl'],
    rows: [
      ['1961–1990', '26,1', '24,8', '27,5'],
      ['1991–2020', '27,4', '26,0', '29,1'],
      ['Yalnız 2019', '25,9', '—', '—'],
      ['Yalnız 2020', '29,1', '—', '—'],
    ],
    caption: 'Veriler bu ders için hazırlanmıştır; gerçek bir istasyonun kaydı değildir.',
  },

  simulation: {
    title: 'Mini uygulama — özgün veri',
    passage: `Bir öğrenci, yukarıdaki tabloyu inceleyerek bir sunum hazırlıyor. Sunumunda şöyle diyor:

“2019’da temmuz ortalaması 25,9 °C, 2020’de 29,1 °C olmuş. Yalnız bir yılda 3,2 derecelik artış var. Bu kadar hızlı bir ısınma korkutucu.”`,
    question: 'Bu öğrencinin çıkarımıyla ilgili aşağıdakilerden hangisi söylenebilir?',
    options: [
      {
        text: 'Çıkarım doğrudur; iki yılın karşılaştırılması iklim değişimini gösterir',
        explanation:
          'Tek tek yıllar iklim karşılaştırması için uygun değildir. Tabloda 1991–2020 döneminin kendi içinde 26,0 ile 29,1 arasında değiştiği görülüyor; yani tek yıllar arasında 3 derecelik farklar bu dönemde zaten olağan.',
      },
      {
        text: 'Çıkarım geçersizdir; iki tek yılın farkı dönem içi doğal oynamanın içinde kalmaktadır',
        explanation:
          'Doğru cevap. 1991–2020 döneminde en düşük yıl 26,0, en yüksek yıl 29,1 °C. Yani dönem içinde 3,1 derecelik bir oynama zaten var. Öğrencinin bulduğu 3,2 derecelik fark bu oynamanın içindedir ve tek başına bir iklim değişimi kanıtı değildir.',
      },
      {
        text: 'Tabloda iklim değişimine dair hiçbir işaret yoktur',
        explanation:
          'Bu da yanlıştır. İki dönem ortalaması karşılaştırıldığında 26,1 °C’den 27,4 °C’ye bir yükselme görülüyor. İklim sonucu çıkarmanın doğru yolu budur: dönemleri karşılaştırmak. Öğrencinin hatası sonucunda değil, yönteminde.',
      },
      {
        text: 'Öğrenci meteoroloji verisi yerine iklim verisi kullanmalıydı',
        explanation:
          'Öğrenci zaten iklim verisi kullanıyor: tabloda uzun dönem ortalamaları var. Sorun verinin türünde değil, hangi satırların karşılaştırıldığında. Tek yılları karşılaştırmak, elindeki dönem ortalamalarını kullanmamak demektir.',
      },
      {
        text: 'Tablodaki veriler yetersizdir; karşılaştırma yapılamaz',
        explanation:
          'Tablo, karşılaştırma için gereken bilgiyi zaten içeriyor: iki dönem ortalaması ve her dönemin oynama aralığı. Veri yetersiz değil; öğrenci elindeki veriyi yanlış biçimde kullanıyor.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru, bir çıkarımın değerlendirilmesini istiyor. Yöntem: öğrencinin hangi veriyi kullandığını ve hangi sonucu çıkardığını ayırmak, sonra bu sonucun veriden zorunlu olarak çıkıp çıkmadığını sınamak.',
    critical_point:
      'Kritik nokta, tablonun “dönemdeki en düşük/en yüksek yıl” sütunlarını taşıması. Bu sütunlar, tek yıllar arasındaki doğal oynamayı gösteriyor ve öğrencinin bulduğu farkın bu oynamanın içinde kaldığını ortaya koyuyor. Bu sütunlar okunmadan çıkarım değerlendirilemez.',
    takeaway:
      'Bir farkın anlamlı olup olmadığına karar vermek için, o ölçümün doğal oynama aralığını bilmek gerekir.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Aşağıdaki ifadelerden hangisi **iklimi** anlatmaktadır?',
      options: [
        'Yarın sabah saatlerinde sis bekleniyor.',
        'Bu bölgede yazlar sıcak ve kurak geçer.',
        'Hafta sonu sıcaklık hissedilir derecede düşecek.',
        'Şu an dışarıda kar yağıyor.',
      ],
      answer_index: 1,
      explanation:
        'İkinci ifadede süre “her yaz, yıllar boyunca”, alan ise bir bölge. İki ölçüt de iklimi gösteriyor. Diğer üç ifadede süre saatler ya da günlerle sınırlı ve belirli bir yerden söz ediliyor; bunlar hava olaylarıdır.',
    },
    {
      purpose: 'apply',
      question:
        'Bir bölgenin ikliminden söz edebilmek için aşağıdakilerden hangisi gereklidir?',
      options: [
        'Bir mevsim boyunca yapılan günlük ölçümler',
        'Uzun yıllara yayılan ölçümlerin ortalaması',
        'En sıcak ve en soğuk günün karşılaştırılması',
        'Bir yılın en yüksek sıcaklık kaydı',
      ],
      answer_index: 1,
      explanation:
        'İklim, hava olaylarının uzun süreli ortalamasıdır. Kısa süreli ortalamalar geçici etkenlerin izini taşır ve yıldan yıla büyük oynama gösterir. Tek günlerin ya da tek yılların uç değerleri ortalamayı temsil etmez; bu yüzden iklim tanımı için uygun değildir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Bu kış çok soğuk geçti, demek ki küresel ısınma diye bir şey yok.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Tek bir mevsimin hava olaylarından iklim sonucu çıkarmak',
        'İklim bilimci ile meteoroloğu karıştırmak',
        'Ortalamayı yanlış hesaplamak',
        'Alan ölçütünü gözden kaçırmak',
      ],
      answer_index: 0,
      explanation:
        'Tek bir kış, hava olaylarından oluşan kısa bir dönemdir ve uzun süreli ortalamayı neredeyse hiç değiştirmez. İklim hakkında bir sonuca varmak için uzun dönem ortalamalarının karşılaştırılması gerekir. Aynı hata ters yönde de yapılır: sıcak bir yazdan iklim değişimi sonucu çıkarmak.',
    },
  ],

  summary: [
    'Hava olayı kısa süreli ve dar alanda; iklim uzun süreli ve geniş alanda geçerlidir.',
    'İklim, hava olaylarının karşıtı değil; uzun süreli ortalamasıdır.',
    'Bir ifadeyi sınıflandırmak için iki soru yeter: ne kadar süre, ne kadar alan?',
    'Tek bir günün ya da tek bir yılın verisi iklim sonucu vermez.',
    'Ortalamanın hesaplandığı süre uzadıkça yıldan yıla oynaması küçülür.',
    'Geçici etkenler uzun sürede birbirini dengeler; geriye bölgenin genel karakteri kalır.',
    'İklim bilimi (klimatoloji) bir bilim dalıdır; uzmanına iklim bilimci (klimatolog) denir.',
    'Meteoroloji kısa süreli hava olaylarını inceler; uzmanına meteorolog denir.',
    'İki alan aynı verileri kullanır; ayrım, verilere sorulan soruda ve süre ölçeğindedir.',
    '“Mevsim normalleri” bir iklim verisidir; hava haberinde bile geçse iklimden gelir.',
  ],

  next: [
    'Küresel İklim Değişikliği: Nedenler ve Sonuçlar (F.8.6.3.3)',
    'DNA’nın Yapısı: Nükleotidden Kromozoma (F.8.2.1.1)',
    'Mevsimlerin Oluşumu: Uzaklık Değil, Açı (F.8.1.1.1)',
  ],
})

export default lesson
