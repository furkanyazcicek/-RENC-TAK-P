import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Paragrafta Anlam · 3. ders
 * Kazanım : T.8.3.11 · T.8.4.9
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * Anlatım biçimi, metnin genel dokusudur. Düşünceyi geliştirme yolu
 * (T.8.3.34, Ders 8) ise bir düşünceyi güçlendirme tekniğidir. İkisinin
 * karıştırılması bu konudaki en yaygın hata olduğu için ders sonunda
 * ayrım ayrıca kurulur.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-anlatim-bicimleri',
  topic: 'Paragrafta Anlam',
  order: 3,
  title: 'Anlatım Biçimleri',
  subtitle:
    'Metin bir olay mı anlatıyor, bir tablo mu çiziyor, bir bilgi mi veriyor, bir sav mı savunuyor? Dört soru, dört biçim.',
  minutes: 42,
  kazanimlar: [
    { kod: 'T.8.3.11', metin: 'Metindeki anlatım biçimlerini belirler.' },
    { kod: 'T.8.4.9', metin: 'Yazılarında anlatım biçimlerini kullanır.' },
  ],
  prerequisites: [
    { topic: 'Konu ve ana fikir', why: 'Baskın anlatım biçimini bulmak için metnin neyi amaçladığını görmen gerekir.' },
    { topic: 'Öznel–nesnel yargı', why: 'Tartışmacı anlatımın imzası yazarın savunduğu öznel yargılardır.' },
  ],
  outcomes: [
    'Bir metindeki baskın anlatım biçimini dört soruyla belirleyebileceksin.',
    'Öyküleyici ile betimleyici anlatımı hareket ölçütüyle ayırabileceksin.',
    'Açıklayıcı ile tartışmacı anlatımı sav ölçütüyle ayırabileceksin.',
    'Bir metinde birden çok anlatım biçiminin bulunabileceğini gösterebileceksin.',
    'Anlatım biçimi ile düşünceyi geliştirme yolunu birbirine karıştırmayacaksın.',
  ],

  opening: {
    title: 'Metin ne yapıyor?',
    lead: 'Anlatım biçimi, metnin “neyi anlattığı” değil “nasıl anlattığı”dır. Dört farklı iş, dört farklı doku.',
    body: `Aynı konu — diyelim ki bir köy okulu — dört farklı biçimde anlatılabilir.

Yazar okulun bir gününü baştan sona aktarırsa, zil çaldığında ne olduğunu, teneffüste kimin ne yaptığını sırayla anlatırsa, ortaya bir **olay akışı** çıkar. Bu **öyküleyici anlatımdır**.

Yazar okulun bahçesini, duvarındaki solmuş boyayı, pencerelerden giren ışığı gözümüzde canlanacak biçimde aktarırsa, ortaya bir **tablo** çıkar. Bu **betimleyici anlatımdır**.

Yazar köy okullarının kaç öğrenciyle açıldığını, birleştirilmiş sınıfın ne demek olduğunu öğretirse, ortaya **bilgi** çıkar. Bu **açıklayıcı anlatımdır**.

Yazar “Köy okulları kapatılmamalıdır.” diye bir görüş ileri sürer, gerekçelerini sıralar ve karşı görüşü ele alırsa, ortaya bir **sav** çıkar. Bu **tartışmacı anlatımdır**.

MEB 8. sınıf programındaki **T.8.3.11** kazanımı, metindeki anlatım biçimlerinin belirlenmesini ister. Yanına **T.8.4.9** eklenir: öğrencinin kendi yazılarında bu biçimleri kullanabilmesi. Yani bu konu yalnız tanımayı değil, biçimin ne işe yaradığını anlamayı ister.

Bir uyarıyla başlayalım: bir metinde çoğu zaman **birden fazla** anlatım biçimi bulunur. Bir hikâye içinde betimleme, bir makale içinde öyküleme olabilir. Soru genellikle “ağırlıklı olarak hangisi kullanılmıştır?” ya da “hangisi kullanılmamıştır?” diye sorar. Bu yüzden aradığın şey tek bir biçim değil, **baskın** biçimdir.`,
  },

  concepts: [
    {
      term: 'Öyküleyici anlatım (hikâye etme)',
      body: 'Bir olayın zaman içinde nasıl geliştiğini anlatır. İmzası **hareket ve zaman akışı**dır: bir şey olur, sonra başka bir şey olur. Kişi, yer, zaman ve olay örgüsü bulunur.',
    },
    {
      term: 'Betimleyici anlatım (tasvir)',
      body: 'Bir varlığı, mekânı ya da kişiyi gözde canlanacak biçimde çizer. İmzası **duyulara seslenen ayrıntı**dır: görüntü, ses, koku, doku. Zaman durur; olay ilerlemez.',
    },
    {
      term: 'Açıklayıcı anlatım',
      body: 'Bir konuyu öğretmek, tanıtmak ya da bilgi vermek için kullanılır. İmzası **tarafsızlık ve bilgi aktarımı**dır: tanımlar, nedenler, işleyişler. Yazar bir görüşü savunmaz.',
    },
    {
      term: 'Tartışmacı anlatım',
      body: 'Bir görüşü savunmak ve okuru ikna etmek için kullanılır. İmzası **sav ve karşı sav**dır: yazar bir tez ileri sürer, gerekçelendirir, karşı görüşü ele alıp çürütmeye çalışır.',
    },
    {
      term: 'Baskın anlatım biçimi',
      body: 'Bir metinde en çok yer tutan ve metnin amacını taşıyan biçimdir. Sorularda aranan genellikle budur; öteki biçimler yardımcı olarak bulunabilir.',
    },
    {
      term: 'Anlatım biçimi ≠ düşünceyi geliştirme yolu',
      body: 'Anlatım biçimi metnin genel dokusudur (öyküleme, betimleme, açıklama, tartışma). Düşünceyi geliştirme yolu ise bir düşünceyi güçlendirme tekniğidir (örneklendirme, tanık gösterme, karşılaştırma, sayısal veri). İkisi farklı katmanlardır.',
    },
  ],

  why: {
    question: 'Neden “bilgi veriyorsa açıklayıcıdır” demek yetmiyor?',
    body: `Çünkü **tartışmacı anlatımda da bilgi vardır.** Yazar savını desteklemek için veri verir, tarih verir, tanım yapar. Bilginin varlığı biçimi belirlemez; belirleyen şey, o bilginin **ne için** kullanıldığıdır.

Ayrımı yapan soru şudur: **Yazar bir görüşü savunuyor mu?** Savunuyorsa, verdiği bütün bilgiler o savın hizmetindedir ve anlatım tartışmacıdır. Savunmuyor, yalnız bilgiyi aktarıyorsa açıklayıcıdır.

Bunun pratik bir işareti var: tartışmacı metinlerde yazar **karşı görüşe** yer verir. “Bazıları şöyle düşünüyor, ancak…” yapısını gördüğün an tartışma vardır. Açıklayıcı metinde karşı görüş bulunmaz, çünkü ortada bir görüş yoktur.

Benzer bir karışıklık öyküleme ile betimleme arasında yaşanır. İkisinde de ayrıntı bulunur; ama biri **ilerler**, öteki **durur**. Bir cümlede “kapıyı açtı, içeri girdi, lambayı yaktı” diyorsan zaman akıyor: öyküleme. “Kapı ahşaptı, boyası dökülmüştü, kolu soğuktu” diyorsan zaman durmuş, bir tablo çiziliyor: betimleme.

Üçüncü ve en pahalı karışıklık, anlatım biçimi ile **düşünceyi geliştirme yolu** arasındadır. “Örneklendirme” bir anlatım biçimi değildir; bir düşünceyi geliştirme yoludur. Açıklayıcı bir metinde de tartışmacı bir metinde de örnek verilebilir. Soru “anlatım biçimi” diyorsa örneklendirme seçeneği yanlıştır — ne kadar doğru görünürse görünsün.

Bu üç ayrımı kurduğunda, bu konudaki soruların neredeyse tamamı çözülür hâle gelir.`,
  },

  decision: {
    title: 'Baskın anlatım biçimini bulma yolu',
    lead: 'Dört soruyu sırayla sor. Cevabı “evet” olan ilk soru biçimi verir; ama son durakta baskınlığı denetle.',
    intro:
      'Bir metinle karşılaştığında şu beş durağı uygula. Beşinci durak, birden çok biçim bulunan metinlerde kararı verir.',
    steps: [
      {
        title: '1. Zaman akıyor mu?',
        body: 'Olaylar birbirini izliyor mu, bir şey olup sonra başka bir şey oluyor mu? Fiiller hareket bildiriyor mu? Evet ise öyküleyici anlatım vardır.',
      },
      {
        title: '2. Bir tablo çiziliyor mu?',
        body: 'Metin bir varlığı, mekânı ya da kişiyi duyulara seslenerek anlatıyor mu? Renk, ses, koku, doku ayrıntıları var mı? Evet ise betimleyici anlatım vardır.',
      },
      {
        title: '3. Bir sav savunuluyor mu?',
        body: 'Yazar bir görüş ileri sürüp gerekçelendiriyor mu? Karşı görüşe yer verip çürütmeye çalışıyor mu? Evet ise tartışmacı anlatım vardır.',
      },
      {
        title: '4. Bilgi öğretiliyor mu?',
        body: 'Metin bir konuyu tanıtıyor, tanımlıyor, işleyişini gösteriyor ve yazar taraf tutmuyor mu? Evet ise açıklayıcı anlatım vardır.',
      },
      {
        title: '5. Baskınlığı denetle',
        body: 'Birden fazla “evet” çıktıysa, metnin **amacına** bak: yazar okura ne yaptırmak istiyor — bir olayı yaşatmak mı, bir görüntü kurmak mı, bir şey öğretmek mi, ikna etmek mi? Amaç, baskın biçimi verir.',
      },
    ],
    takeaway: 'Bilginin varlığı değil, bilginin ne için kullanıldığı biçimi belirler.',
  },

  decisionTree: {
    title: 'Dört biçimi ayıran üç kontrol',
    intro:
      'Aşağıdaki kontroller sırayla uygulanır. Sıra önemlidir: en ayırt edici ölçüt başa konmuştur.',
    checks: [
      {
        question: 'Metinde olaylar zaman içinde ilerliyor mu?',
        yes: 'Öyküleyici anlatım vardır. Örnek: “Kapıyı açtı, içeri girdi, lambayı yaktı.”',
        no: 'Zaman durmuş; ikinci kontrole geç.',
      },
      {
        question: 'Bir varlık, mekân veya kişi duyulara seslenerek çiziliyor mu?',
        yes: 'Betimleyici anlatım vardır. Örnek: “Kapı ahşaptı, boyası dökülmüştü, kolu soğuktu.”',
        no: 'Tablo yok; üçüncü kontrole geç.',
      },
      {
        question: 'Yazar bir görüşü savunup karşı görüşe yer veriyor mu?',
        yes: 'Tartışmacı anlatım vardır. Örnek: “Bazıları şöyle düşünüyor; ancak bu görüş şu nedenle yetersizdir.”',
        no: 'Açıklayıcı anlatım vardır: bilgi aktarılıyor, taraf tutulmuyor.',
      },
    ],
    takeaway:
      'Açıklayıcı anlatım, öteki üçünün hiçbiri bulunmadığında kalan biçimdir. Bu yüzden onu en sona koyduk.',
  },

  comparison: {
    title: 'Üç biçimi imzasıyla ayır',
    columns: ['Öyküleyici', 'Betimleyici', 'Tartışmacı'],
    rows: [
      { label: 'İmzası', values: ['Hareket ve zaman akışı', 'Duyulara seslenen ayrıntı', 'Sav ve karşı sav'] },
      { label: 'Zaman', values: ['İlerler', 'Durur', 'Genellikle geniş zaman'] },
      { label: 'Amacı', values: ['Olayı yaşatmak', 'Görüntü kurmak', 'İkna etmek'] },
      { label: 'Tipik fiiller', values: ['açtı, girdi, koştu, döndü', 'idi, -dı (durum), uzanıyordu', 'olmalıdır, düşünülmektedir, ancak'] },
      { label: 'Örnek cümle', values: ['Sabah erkenden kalkıp yola çıktı.', 'Yol dar, taşlı ve gölgesizdi.', 'Bu yol mutlaka genişletilmelidir.'] },
      { label: 'Karışabildiği biçim', values: ['Betimleyici (ayrıntı yüzünden)', 'Öyküleyici (aynı metinde olduğu için)', 'Açıklayıcı (bilgi verdiği için)'] },
    ],
    insight:
      'Öyküleme ile betimlemeyi ayıran soru tek: **hareket var mı?** Tartışma ile açıklamayı ayıran soru da tek: **sav var mı?**',
  },

  traps: [
    {
      title: 'Ayrıntı gördüğü an betimleme demek',
      wrong: 'Metinde çok ayrıntı var; öyleyse betimleyici anlatım kullanılmış.',
      right: 'Ayrıntının hareket bildirip bildirmediğine bakarım. “Kapıyı yavaşça açtı” ayrıntılı bir öyküleme cümlesidir; betimleme değil.',
      body: 'Betimlemenin ölçütü ayrıntı bolluğu değil, zamanın durmasıdır. Olay ilerliyorsa anlatım öyküleyicidir, ne kadar ayrıntılı olursa olsun.',
    },
    {
      title: 'Bilgi gördüğü an açıklayıcı demek',
      wrong: 'Metinde tarihler ve sayılar var; öyleyse açıklayıcı anlatım.',
      right: 'O sayıların bir savı desteklemek için kullanılıp kullanılmadığına bakarım. Destekliyorsa anlatım tartışmacıdır.',
      body: 'Tartışmacı metinler bilgi bakımından zengin olur; çünkü sav kanıt ister. Ölçüt bilginin varlığı değil, kullanım amacıdır.',
    },
    {
      title: 'Anlatım biçimi ile düşünceyi geliştirme yolunu karıştırmak',
      wrong: 'Metinde örnek verilmiş; anlatım biçimi örneklendirmedir.',
      right: 'Örneklendirme bir anlatım biçimi değil, düşünceyi geliştirme yoludur. Anlatım biçimleri dörttür: öyküleyici, betimleyici, açıklayıcı, tartışmacı.',
      body: 'Soru kökündeki terime dikkat et: “anlatım biçimi” mi diyor, “düşünceyi geliştirme yolu” mu? İki soruda doğru cevap tamamen farklı kümelerden gelir.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-anlatim-oyku-betim',
      title: 'Öyküleme ve betimleme: hareket mi, tablo mu?',
      lead: 'İki biçim aynı metinde iç içe geçer. Ayırmanın ölçütü tek bir sorudur: zaman akıyor mu?',
      blocks: [
        {
          id: 'lgs-anlatim-oyku-anlatim',
          type: 'prose',
          body: `**Öyküleyici anlatımda** dört öge bulunur: kişi, yer, zaman ve olay örgüsü. Ama asıl imza **olay örgüsüdür**: bir şey olur, o şey başka bir şeye yol açar, anlatı ilerler. Fiiller çoğunlukla hareket bildirir ve birbirini izleyen zamanlar kullanılır: “açtı, girdi, oturdu, baktı”.

**Betimleyici anlatımda** ise anlatı durur. Yazar bir an dondurur ve o anın içindeki ayrıntıları okurun duyularına seslenerek aktarır. Görüntü en sık kullanılan duyudur ama tek değildir: ses (“uzaktan bir su sesi geliyordu”), koku (“taze ekmek kokusu”), dokunma (“kolu soğuktu”) da betimlemeye girer.

Betimlemenin iki alt biçimi vardır ve LGS düzeyinde bilmen yararlıdır. **Açıklayıcı betimleme** nesnel bir gözlem sunar; bir tanıtım yazısında ya da bir ansiklopedide görülür: “Bina iki katlı, on iki pencerelidir.” **Sanatsal betimleme** ise yazarın izlenimini katar: “Bina, yorgun bir yüz gibi sokağa bakıyordu.”

İki biçimi ayırmanın pratik yolu şudur: metindeki fiilleri işaretle. **Hareket bildiren fiiller çoksa** (koştu, aldı, çıktı) öyküleme; **durum bildiren yapılar çoksa** (idi, -ydı, uzanıyordu, duruyordu) betimleme baskındır.

Bir uyarı: bir hikâyede betimleme bulunması, hikâyeyi betimleyici yapmaz. Betimleme orada bir **sahne kurmak** için kullanılır; metnin amacı hâlâ olayı anlatmaktır. Baskınlık denetimini bu yüzden yapıyoruz.

Son olarak, LGS metinlerinde saf öyküleme veya saf betimleme nadirdir. Soru genellikle “bu parçada aşağıdakilerden hangisi **yoktur**?” biçiminde gelir; o zaman her biçimi tek tek arayıp bulunmayanı işaretlersin.`,
        },
        {
          id: 'lgs-anlatim-oyku-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı sahne, iki biçim',
          columns: ['Biçim', 'Örnek cümle', 'Zaman', 'Tanıma işareti'],
          rows: [
            ['Öyküleyici', 'Kapıyı açtı, eşikte bir an durdu, sonra içeri girdi.', 'İlerliyor', 'Ardışık hareket fiilleri'],
            ['Betimleyici', 'Kapı ahşaptı; boyası yer yer dökülmüş, kolu paslanmıştı.', 'Durmuş', 'Durum bildiren yapılar'],
            ['Öyküleyici + betimleyici', 'Kapıyı açtı; içerisi karanlık ve rutubet kokuyordu.', 'Önce ilerliyor, sonra duruyor', 'İki yapı art arda'],
            ['Açıklayıcı betimleme', 'Bina iki katlı ve on iki pencerelidir.', 'Durmuş', 'Nesnel gözlem, ölçü'],
            ['Sanatsal betimleme', 'Bina, yorgun bir yüz gibi sokağa bakıyordu.', 'Durmuş', 'Yazarın izlenimi, benzetme'],
          ],
          caption:
            'Üçüncü satır gerçek metinlerde en sık görülen durumdur: iki biçim art arda. Baskınlığı metnin amacı belirler.',
        },
        {
          id: 'lgs-anlatim-oyku-analiz',
          type: 'sentence_analysis',
          title: 'Bir paragrafta biçim nerede değişiyor?',
          prompt:
            'Aşağıdaki paragrafta anlatım biçimi cümle cümle değişiyor. Parçalara tıklayarak her birinin hangi biçime ait olduğunu gör.',
          segments: [
            {
              text: 'Sabah erkenden kalktı, çantasını aldı ve istasyona doğru yürüdü.',
              label: 'Öyküleyici — zaman akıyor',
              explanation:
                'Üç hareket fiili art arda: kalktı, aldı, yürüdü. Olaylar birbirini izliyor. Bu cümlede betimleme yok.',
              tone: 'brand',
            },
            {
              text: 'İstasyon küçüktü; tek bir bank, soluk bir tabela ve rüzgârda sallanan bir lamba vardı.',
              label: 'Betimleyici — zaman durdu',
              explanation:
                'Hiçbir olay ilerlemiyor. Yazar bir an donduruyor ve görüntüyü aktarıyor: küçüklük, bank, tabela, lamba. Duyulara sesleniyor.',
              tone: 'aqua',
            },
            {
              text: 'Trenler bu hatta günde yalnız iki kez durur.',
              label: 'Açıklayıcı — bilgi veriliyor',
              explanation:
                'Ne olay ilerliyor ne tablo çiziliyor. Bir işleyiş hakkında bilgi veriliyor ve yazar taraf tutmuyor.',
              tone: 'success',
            },
            {
              text: 'Bu seferler artırılmalı; çünkü kasabanın ulaşımı tek başına bu hatta bağlı.',
              label: 'Tartışmacı — sav ileri sürülüyor',
              explanation:
                '“Artırılmalı” bir hüküm ve bir talep; arkasından gerekçe geliyor. Yazar artık bilgi vermiyor, bir görüş savunuyor.',
              tone: 'danger',
            },
          ],
          takeaway:
            'Dört cümle, dört biçim. Soru “hangisi kullanılmamıştır?” dese cevap verilemezdi; “ağırlıklı olarak hangisi?” dese metnin amacına bakmak gerekirdi.',
        },
        {
          id: 'lgs-anlatim-oyku-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Fiilleri işaretlemek bu konuda en hızlı yöntemdir. Hareket fiilleri (aldı, gitti, açtı) öykülemeyi; durum yapıları (idi, -mıştı, duruyordu) betimlemeyi; geniş zaman ve kip ekleri (durur, olmalıdır) açıklama ve tartışmayı işaret eder.',
        },
      ],
    },

    {
      id: 'lgs-turkce-anlatim-aciklama-tartisma',
      title: 'Açıklama ve tartışma: bilgi mi, sav mı?',
      lead: 'İkisi de bilgiyle doludur. Ayrımı bilginin miktarı değil, amacı yapar.',
      blocks: [
        {
          id: 'lgs-anlatim-aciklama-anlatim',
          type: 'prose',
          body: `**Açıklayıcı anlatımda** yazarın amacı öğretmektir. Bir kavramı tanımlar, bir sürecin nasıl işlediğini gösterir, bir olguyu nedenleriyle aktarır. Yazarın kendi görüşü metinde belirmez; metin okunduğunda “yazar bu konuda ne düşünüyor?” sorusunun cevabı bulunamaz.

**Tartışmacı anlatımda** yazarın amacı ikna etmektir. Bir tez ileri sürer, gerekçelendirir ve çoğu zaman karşı görüşe yer verip onu çürütmeye çalışır. Metin okunduğunda yazarın görüşü açıkça belirlenebilir.

Ayrımı yapan üç işaret var.

**Birinci işaret: kip ekleri ve gereklilik.** Tartışmacı metinlerde “-malı/-meli”, “gerekir”, “şarttır”, “yanlıştır” gibi hüküm bildiren yapılar bulunur. Açıklayıcı metinlerde bunlar yoktur; “dır/dir”, “-ır/-ir” gibi bildirme yapıları kullanılır.

**İkinci işaret: karşı görüş.** “Bazılarına göre…”, “Kimileri şöyle düşünüyor; ancak…”, “Bu görüş yeterli değildir.” yapıları tartışmanın imzasıdır. Açıklayıcı metinde karşı görüş bulunmaz.

**Üçüncü işaret: öznellik.** Tartışmacı metinlerde öznel yargılar vardır; çünkü sav zaten bir değerlendirmedir. Açıklayıcı metinlerde yargılar ağırlıklı olarak nesneldir. Öznel–nesnel dersinde kurduğun testi burada doğrudan kullanabilirsin.

Bir ayrıntı: her tartışmacı metin karşı görüşe yer vermek zorunda değildir. Bazen yazar yalnız kendi savını gerekçelendirir. Bu durumda birinci ve üçüncü işaretler yeterlidir: gereklilik yapısı ve öznel yargı varsa anlatım tartışmacıdır.

Son olarak şunu unutma: bir metnin tartışmacı olması onu “yanlı” ya da “kötü” yapmaz. Köşe yazıları, denemeler ve makaleler bu biçimi doğal olarak kullanır. Sorulan şey bir değerlendirme değil, bir sınıflandırmadır.`,
        },
        {
          id: 'lgs-anlatim-aciklama-tablo',
          type: 'table',
          interactive: true,
          title: 'Açıklama mı tartışma mı? Üç işaret',
          columns: ['İşaret', 'Açıklayıcı', 'Tartışmacı', 'Örnek'],
          rows: [
            ['Kip / hüküm', 'Bildirme: “-dır, -ır”', 'Gereklilik: “-malı, gerekir”', 'Trenler günde iki kez durur. ↔ Seferler artırılmalıdır.'],
            ['Karşı görüş', 'Yok', 'Sık bulunur', '“Kimileri şöyle düşünüyor; ancak…”'],
            ['Yargı türü', 'Ağırlıklı nesnel', 'Öznel yargılar bulunur', 'Hat 42 km’dir. ↔ Bu hat yetersizdir.'],
            ['Yazarın görüşü', 'Belirlenemez', 'Açıkça belirlenir', '—'],
            ['Amaç', 'Öğretmek', 'İkna etmek', '—'],
          ],
          caption:
            'Üç işaretten ikisi varsa anlatım tartışmacıdır. Yalnız bilgi bolluğuna bakarak karar verme.',
        },
        {
          id: 'lgs-anlatim-aciklama-tuzak',
          type: 'trap',
          title: 'Öznel bir cümleyi görünce metnin tamamını tartışmacı saymak',
          wrong: 'Metinde bir yerde “çok güzel bir yapı” denmiş; öyleyse anlatım tartışmacıdır.',
          right: 'Tek bir öznel ifade, metni tartışmacı yapmaz. Tartışma için bir savın ileri sürülüp gerekçelendirilmesi gerekir.',
          body: 'Bir tanıtım yazısında da yazarın beğenisi geçebilir. Ölçüt, metnin bir tezi savunup savunmadığıdır — dağınık bir beğeni ifadesi değil.',
        },
      ],
    },

    {
      id: 'lgs-turkce-anlatim-ile-gelistirme-farki',
      title: 'Anlatım biçimi mi, düşünceyi geliştirme yolu mu?',
      lead: 'Bu iki terim aynı soruda karşına çıkabilir ve doğru cevapları farklı kümelerden gelir. Ayrımı şimdi kuralım.',
      blocks: [
        {
          id: 'lgs-anlatim-fark-anlatim',
          type: 'prose',
          body: `**Anlatım biçimi**, metnin genel dokusudur ve dört tanedir: öyküleyici, betimleyici, açıklayıcı, tartışmacı. Metnin tamamına ya da büyük bir bölümüne yayılır.

**Düşünceyi geliştirme yolu**, bir düşünceyi güçlendirmek için kullanılan tekniktir: örneklendirme, tanık gösterme, karşılaştırma, sayısal verilerden yararlanma, tanımlama, benzetme. Bunlar metnin dokusu değil, dokunun içindeki **araçlardır**.

İlişkiyi şöyle düşün: anlatım biçimi bir evin **mimarisidir**; düşünceyi geliştirme yolu ise o evde kullanılan **malzemedir**. Aynı mimaride farklı malzemeler kullanılabilir; aynı malzeme farklı mimarilerde bulunabilir.

Pratikte bu şu demektir: açıklayıcı bir metinde örneklendirme kullanılabilir, tartışmacı bir metinde de. Örneklendirme bir anlatım biçimi olmadığı için “anlatım biçimi” sorusunda asla doğru cevap olamaz.

Bu ayrımın sınavdaki karşılığı çok nettir. Soru **“bu parçada kullanılan anlatım biçimi”** diyorsa cevap dört biçimden biridir. Soru **“bu parçada başvurulan düşünceyi geliştirme yolu”** diyorsa cevap örneklendirme, tanık gösterme, karşılaştırma, sayısal veri gibi tekniklerden biridir. Soru kökündeki terimi yanlış okuyan öğrenci, doğru bilgiyi yanlış soruya verir.

Programın da bu ayrımı yaptığını görelim: **T.8.3.11** “metindeki anlatım biçimlerini belirler” der; **T.8.3.34** ise ayrı bir kazanım olarak “okuduklarında kullanılan düşünceyi geliştirme yollarını belirler” der. İki ayrı kazanım, iki ayrı kavram. Düşünceyi geliştirme yollarını bir sonraki derste ayrıntılı işleyeceğiz.

Son olarak **T.8.4.9** kazanımını hatırla: öğrencinin kendi yazılarında anlatım biçimlerini kullanması bekleniyor. Bu, biçimleri yalnız tanımayı değil, ne işe yaradıklarını bilmeyi gerektirir. Bir olayı canlandırmak istiyorsan öyküleme, bir mekânı hissettirmek istiyorsan betimleme, bir konuyu öğretmek istiyorsan açıklama, bir görüşü savunmak istiyorsan tartışma kullanırsın.`,
        },
        {
          id: 'lgs-anlatim-fark-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'İki kavramı ayır',
          columns: ['Anlatım biçimi', 'Düşünceyi geliştirme yolu'],
          rows: [
            { label: 'Ne belirtir?', values: ['Metnin genel dokusu', 'Bir düşünceyi güçlendirme tekniği'] },
            { label: 'Kaç tane?', values: ['Dört: öyküleyici, betimleyici, açıklayıcı, tartışmacı', 'Birden çok: örneklendirme, tanık gösterme, karşılaştırma, sayısal veri…'] },
            { label: 'Kapsamı', values: ['Metnin tamamına yayılır', 'Belirli bir bölümde kullanılır'] },
            { label: 'İlgili kazanım', values: ['T.8.3.11', 'T.8.3.34'] },
            { label: 'Benzetme', values: ['Evin mimarisi', 'Evde kullanılan malzeme'] },
          ],
          insight:
            'Aynı parçaya iki ayrı soru sorulabilir ve iki farklı cevap doğru olur. Belirleyici olan soru kökündeki terimdir.',
        },
        {
          id: 'lgs-anlatim-fark-tuzak',
          type: 'trap',
          title: 'Soru kökündeki terimi hızlı okumak',
          wrong: 'Soru anlatım tekniklerini soruyor herhâlde; örneklendirmeyi işaretlerim.',
          right: 'Soru kökünü kelime kelime okurum: “anlatım biçimi” mi diyor, “düşünceyi geliştirme yolu” mu? Cevap kümesi buna göre değişir.',
          body: 'Bu, doğru bilgiyi yanlış soruya vermenin en klasik biçimidir. Bilgin eksik değildir; sorunun ne istediğini okumamışsındır.',
        },
        {
          id: 'lgs-anlatim-fark-hafiza',
          type: 'memory',
          title: 'Dört soruluk biçim testi',
          body: '**Zaman akıyor mu?** → öyküleme. **Tablo var mı?** → betimleme. **Sav var mı?** → tartışma. **Hiçbiri yoksa** → açıklama.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Baskın biçimi belirle',
      prompt:
        'Paragraf: “Köyün tek çeşmesi meydandaydı. Taşları yıllardır aynı yerde duruyordu; yosun tutmuş, yüzeyi pürüzlenmişti. Suyu yazın buz gibi, kışın ılıktı. Üzerindeki yazı silinmiş, yalnız iki rakam okunur hâlde kalmıştı.” Bu parçada baskın anlatım biçimi nedir?',
      steps: [
        { title: '1. durak — zaman akıyor mu?', body: 'Hiçbir olay ilerlemiyor. Fiillerin tamamı durum bildiriyor: duruyordu, tutmuş, pürüzlenmişti, kalmıştı. Öyküleme yok.' },
        { title: '2. durak — tablo çiziliyor mu?', body: 'Evet. Taşlar, yosun, yüzey, suyun sıcaklığı, silinmiş yazı — hepsi duyulara sesleniyor. Betimleme var.' },
        { title: '3. durak — sav var mı?', body: 'Hiçbir görüş savunulmuyor, gereklilik yapısı yok. Tartışma yok.' },
        { title: '4. durak — bilgi öğretiliyor mu?', body: 'Bir işleyiş anlatılmıyor; bir görüntü aktarılıyor. Açıklama baskın değil.' },
        { title: '5. durak — baskınlık', body: 'Metnin amacı çeşmeyi okurun gözünde canlandırmak. Baskın biçim **betimleyici anlatım**.' },
      ],
      answer: 'Betimleyici anlatım.',
      takeaway: 'Ayrıntı bolluğu tek başına yetmez; zamanın durmuş olması betimlemeyi kesinleştirir.',
    },
    {
      title: 'Seviye 2 — Açıklama mı tartışma mı?',
      prompt:
        'Paragraf: “Okul kütüphaneleri yalnız kitap saklanan yerler değildir; öğrencinin kendi başına çalışmayı öğrendiği alanlardır. Bazıları bu alanların dijital kaynaklarla gereksizleştiğini söylüyor. Oysa ekran başında geçen zaman, kendi hızında okumayı ve dikkat toplamayı öğretmiyor. Bu yüzden okul kütüphaneleri korunmalı, hatta genişletilmelidir.” Baskın anlatım biçimi nedir?',
      steps: [
        { title: 'Kip ve hüküm işaretini ara', body: 'Son cümlede “korunmalı”, “genişletilmelidir” — gereklilik yapıları. Birinci işaret tartışmayı gösteriyor.' },
        { title: 'Karşı görüş var mı?', body: '“Bazıları bu alanların gereksizleştiğini söylüyor.” Karşı görüş açıkça veriliyor ve “oysa” ile çürütülüyor. İkinci işaret de tartışmayı gösteriyor.' },
        { title: 'Yargı türünü sına', body: '“Ekran başında geçen zaman dikkat toplamayı öğretmiyor” — denetim yolu belirsiz, öznel bir değerlendirme. Üçüncü işaret de tartışmayı gösteriyor.' },
        { title: 'Açıklayıcı olabilir mi?', body: 'Metinde bilgi de var (kütüphanenin ne olduğu). Ama bu bilgi savın hizmetinde kullanılıyor; öğretmek için değil ikna etmek için. Açıklama baskın değil.' },
        { title: 'Kararı ver', body: 'Üç işaretin üçü de bulunuyor. Baskın biçim **tartışmacı anlatım**.' },
      ],
      answer: 'Tartışmacı anlatım.',
      takeaway:
        'Bilginin varlığı açıklayıcılık kanıtı değildir; bilginin savın hizmetinde olması tartışmayı gösterir.',
    },
    {
      title: 'Seviye 3 — Hangisi kullanılmamış?',
      prompt:
        'Paragraf: “Akşamüstü eve döndü. Mutfak soğuktu; masanın üstünde sabahtan kalan bir bardak duruyordu. Suyun kaynama sıcaklığı deniz seviyesinde 100 derecedir; yükseldikçe düşer. Bu yüzden dağ evlerinde çay demlemek zordur.” Bu parçada aşağıdaki anlatım biçimlerinden hangisi kullanılmamıştır?',
      steps: [
        { title: 'Öyküleme var mı?', body: '“Akşamüstü eve döndü.” Bir hareket, zaman akışı içinde. **Var.**' },
        { title: 'Betimleme var mı?', body: '“Mutfak soğuktu; masanın üstünde bir bardak duruyordu.” Zaman durmuş, tablo çiziliyor. **Var.**' },
        { title: 'Açıklama var mı?', body: '“Suyun kaynama sıcaklığı… yükseldikçe düşer.” Tarafsız bilgi aktarımı, gereklilik yok. **Var.**' },
        { title: 'Tartışma var mı?', body: 'Hiçbir görüş savunulmuyor, karşı görüş yok, gereklilik yapısı yok. Son cümledeki “bu yüzden” bir sonuç bildiriyor, bir sav değil. **Yok.**' },
        { title: 'Tuzağı adlandır', body: 'Son cümledeki “zordur” bir güçlük bildiriyor; öğrenciler bunu bazen hüküm sanır. Ama “zordur” bir olgunun sonucu, bir talep değil. Tartışma için bir tezin savunulması gerekir.' },
      ],
      answer: 'Tartışmacı anlatım kullanılmamıştır.',
      takeaway:
        '“Hangisi yoktur?” sorularında dört biçimi tek tek ara ve her biri için metinden bir cümle göster.',
    },
  ],

  questionClue: {
    concept: 'anlatım biçimi sorusu',
    statement:
      'Soru kökünde “anlatım biçimi”, “anlatım tekniği” ya da “aşağıdakilerden hangisi kullanılmamıştır” ifadeleri varsa, aranan şey dört biçimden biridir.',
    clues: [
      'Seçeneklerde “öyküleyici, betimleyici, açıklayıcı, tartışmacı” terimlerinin bulunması',
      'Parçada art arda hareket fiillerinin ya da durum yapılarının yoğunlaşması',
      '“-malı/-meli”, “gerekir”, “ancak”, “oysa” gibi ifadelerin bulunması',
      '“Hangisi kullanılmamıştır?” biçimindeki soru kökleri',
      'Seçeneklerde örneklendirme, tanık gösterme gibi terimlerin bilerek karıştırılması',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, dört biçimi ayırt edip edemediğini ölçüyor. Çözüm yolu dört soruyu sırayla sormak ve her biçim için metinden bir cümle gösterebilmektir.',
    boundary:
      'Bu ipuçlarını “hareket fiili varsa cevap öykülemedir” gibi bir kısayola çevirme. Bir tartışma metninde de hareket fiili geçebilir; belirleyici olan baskınlıktır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir parçada baskın anlatım biçiminin sorulması',
      'Bir parçada hangi anlatım biçiminin kullanılmadığının sorulması',
      'Verilen bir tanıma uyan anlatım biçiminin seçtirilmesi',
      'Dört cümlenin hangisinin betimleyici (ya da öyküleyici) olduğunun sorulması',
      'Aynı konunun iki farklı biçimde anlatıldığı metinlerin karşılaştırılması',
      'Anlatım biçimi ile düşünceyi geliştirme yolunun ayırt ettirilmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Yol boyunca hiç konuşmadık; pencereden geçen tarlalara baktık.” Bu cümlede hangi anlatım biçimi vardır?',
      hint: 'Fiillere bak: hareket mi bildiriyor, durum mu?',
      answer:
        'Öyküleyici anlatım. “Konuşmadık” ve “baktık” hareket bildiren fiillerdir ve zaman içinde bir yolculuk ilerliyor. “Pencereden geçen tarlalar” ifadesi ayrıntı içerse de bir tablo kurmuyor, hareketin içinde geçiyor. Betimleme için zamanın durması ve tarlaların duyulara seslenerek çizilmesi gerekirdi.',
    },
    {
      prompt:
        'Bir metinde hem tarihler hem sayılar var ve yazar sonunda “bu uygulama yaygınlaştırılmalıdır” diyor. Anlatım biçimi açıklayıcı mı tartışmacı mı?',
      hint: 'Bilgi kimin hizmetinde kullanılıyor?',
      answer:
        'Tartışmacı. Gereklilik yapısı (“yaygınlaştırılmalıdır”) bir sav ortaya koyuyor ve metindeki tarih ile sayılar o savın gerekçesi olarak kullanılıyor. Açıklayıcı olsaydı yazar yalnız bilgiyi aktarır, bir talepte bulunmazdı. Bilginin varlığı değil, kullanım amacı belirleyicidir.',
    },
    {
      prompt:
        'Bir soru “bu parçada başvurulan düşünceyi geliştirme yolu nedir?” diye soruyor ve seçeneklerden biri “betimleyici anlatım”. Bu seçenek doğru olabilir mi?',
      hint: 'İki kavram aynı kümeden mi?',
      answer:
        'Hayır. Betimleyici anlatım bir **anlatım biçimidir**, düşünceyi geliştirme yolu değildir. Düşünceyi geliştirme yolları örneklendirme, tanık gösterme, karşılaştırma, sayısal verilerden yararlanma gibi tekniklerdir. Soru kökü hangi kümeyi istiyorsa cevap o kümeden gelmelidir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey terim ezberi değil, metnin dokusunu okuma',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama, sonuç çıkarma ve analiz yapma becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: dört terimi ezberlemek yetmez; her biçim için metinden bir cümle gösterebilmen gerekir. “Hangisi kullanılmamıştır?” soruları tam olarak bunu ölçer — üç biçimi bulup dördüncüyü bulamadığında cevabı işaretlersin.',
    measures: [
      'Zaman akışına bakarak öykülemeyi tanıyabilme',
      'Duyusal ayrıntıya bakarak betimlemeyi tanıyabilme',
      'Gereklilik ve karşı görüşe bakarak tartışmayı tanıyabilme',
      'Bilginin amacına bakarak açıklamayı tanıyabilme',
      'Birden çok biçim bulunduğunda baskın olanı belirleyebilme',
      'Anlatım biçimi ile düşünceyi geliştirme yolunu ayırabilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Kapıyı itip içeri girdi. Atölyenin havası tozlu ve ılıktı; duvara dayalı testereler, yerde talaş yığınları, tavandan sarkan tek bir ampul vardı. Ahşap işlerinde kullanılan tutkalın kuruma süresi, odanın nemine göre değişir. Usta, elindeki parçayı tezgâha koydu ve ölçmeye başladı.`,
    question: 'Bu parçada aşağıdaki anlatım biçimlerinden hangisi **kullanılmamıştır**?',
    options: [
      {
        text: 'Öyküleyici anlatım',
        explanation:
          'Kullanılmıştır. “Kapıyı itip içeri girdi” ve “parçayı tezgâha koydu ve ölçmeye başladı” cümlelerinde olaylar zaman içinde ilerliyor; hareket fiilleri art arda geliyor.',
      },
      {
        text: 'Betimleyici anlatım',
        explanation:
          'Kullanılmıştır. “Havası tozlu ve ılıktı; testereler, talaş yığınları, tavandan sarkan tek bir ampul vardı” cümlesinde zaman duruyor ve duyulara seslenen bir tablo çiziliyor.',
      },
      {
        text: 'Açıklayıcı anlatım',
        explanation:
          'Kullanılmıştır. “Tutkalın kuruma süresi, odanın nemine göre değişir.” cümlesi tarafsız bir bilgi aktarıyor; ne olay ilerliyor ne tablo çiziliyor ne de bir görüş savunuluyor.',
      },
      {
        text: 'Tartışmacı anlatım',
        explanation:
          'Doğru cevap. Parçada hiçbir görüş savunulmuyor: gereklilik yapısı yok, karşı görüş yok, yazarın tezi belirlenemiyor. Dört biçimden yalnız bu bulunmuyor.',
      },
      {
        text: 'Hem açıklayıcı hem tartışmacı anlatım',
        explanation:
          'Açıklayıcı anlatım parçada açıkça var (tutkal cümlesi); bu yüzden seçenek kendi içinde tutarsız. Tek bir biçim aranırken iki biçimi birleştiren seçenekler dikkatli okunmalıdır.',
      },
    ],
    answer_index: 3,
    stem_analysis:
      'Soru kökü “kullanılmamıştır” diyor; yani dört biçimi tek tek arayıp bulunmayanı işaretleyeceğim. Yöntem: her biçim için parçadan bir cümle göstermeye çalışmak. Gösteremediğim biçim cevaptır.',
    critical_point:
      'Kritik nokta, üçüncü cümlenin varlığı. Bir olay anlatısının ortasına yerleştirilmiş tarafsız bir bilgi cümlesi, öğrencinin “bu metin hikâye, açıklama olamaz” refleksini kırmak için konmuştur. Biçimi metnin türüne göre değil, cümlelere göre belirle.',
    takeaway:
      '“Hangisi yoktur?” sorularında üç biçimi kanıtlayabiliyorsan dördüncüsü cevaptır.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Aşağıdaki cümlelerin hangisinde **betimleyici** anlatım vardır?',
      options: [
        'Çantasını aldı, kapıyı kapattı ve merdivenlerden indi.',
        'Oda dar, tavanı alçak, penceresi tek kanatlıydı.',
        'Bu düzenleme bir an önce yapılmalıdır.',
        'Ağaçlar kışın yaprak dökerek su kaybını azaltır.',
      ],
      answer_index: 1,
      explanation:
        'İkinci cümlede zaman durmuş ve bir mekân duyulara seslenerek çiziliyor: darlık, tavan yüksekliği, pencere. Birinci cümlede art arda hareket fiilleri var (öyküleyici). Üçüncüde gereklilik yapısı bir sav kuruyor (tartışmacı). Dördüncüde tarafsız bir bilgi aktarılıyor (açıklayıcı).',
    },
    {
      purpose: 'apply',
      question:
        'Bir metinde yazar önce “kimileri bu uygulamayı gereksiz buluyor” diyor, sonra bunu çürütüyor ve “uygulama sürdürülmelidir” sonucuna varıyor. Bu metnin baskın anlatım biçimi nedir?',
      options: [
        'Açıklayıcı anlatım',
        'Betimleyici anlatım',
        'Tartışmacı anlatım',
        'Öyküleyici anlatım',
      ],
      answer_index: 2,
      explanation:
        'Karşı görüşe yer verilmesi, çürütülmesi ve gereklilik yapısıyla bir sonuca varılması tartışmacı anlatımın üç imzasıdır. Açıklayıcı anlatımda karşı görüş bulunmaz ve yazarın tezi belirlenemez. Metinde ne bir tablo ne bir olay akışı vardır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “anlatım biçimi” sorusunda “örneklendirme” seçeneğini işaretliyor. Bu öğrencinin hatası nedir?',
      options: [
        'Düşünceyi geliştirme yolunu anlatım biçimi sanmak',
        'Betimleme ile öyküleme ayrımını yapamamak',
        'Baskın biçimi belirleyememek',
        'Öznel yargıyı fark edememek',
      ],
      answer_index: 0,
      explanation:
        'Örneklendirme bir düşünceyi geliştirme yoludur (T.8.3.34), bir anlatım biçimi değildir. Anlatım biçimleri dörttür: öyküleyici, betimleyici, açıklayıcı, tartışmacı. Öğrencinin bilgisi eksik değil; soru kökündeki terimi yanlış kümeyle eşleştirmiş.',
    },
  ],

  summary: [
    'Anlatım biçimi metnin “nasıl anlattığı”dır ve dört tanedir.',
    'Öyküleyici anlatımın imzası hareket ve zaman akışıdır.',
    'Betimleyici anlatımın imzası duyulara seslenen ayrıntıdır; zaman durur.',
    'Açıklayıcı anlatımın imzası tarafsız bilgi aktarımıdır; yazarın görüşü belirlenemez.',
    'Tartışmacı anlatımın imzası sav, gereklilik yapısı ve karşı görüştür.',
    'Ayrıntı bolluğu betimleme kanıtı değildir; zamanın durması kanıttır.',
    'Bilgi bolluğu açıklama kanıtı değildir; bilginin savın hizmetinde olup olmaması belirleyicidir.',
    'Bir metinde birden çok biçim bulunabilir; soru genellikle baskın olanı ya da bulunmayanı sorar.',
    'Anlatım biçimi metnin mimarisi, düşünceyi geliştirme yolu ise malzemesidir.',
    'Örneklendirme, tanık gösterme, karşılaştırma birer anlatım biçimi değildir.',
  ],

  next: [
    'Düşünceyi Geliştirme Yolları (T.8.3.34)',
    'Metinler Arası Karşılaştırma ve Çıkarım (T.8.3.23)',
    'Metin Türleri: Fıkra, Makale, Deneme, Roman, Destan (T.8.3.26)',
  ],
})

export default lesson
