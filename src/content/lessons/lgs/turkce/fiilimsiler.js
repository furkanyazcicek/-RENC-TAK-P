import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Fiilimsiler
 * Kazanım : T.8.3.9
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * PROGRAM SINIRI — BAĞLAYICI
 * T.8.3.9'un açıklaması iki şey söyler: "Fiilimsilerin türleri fark
 * ettirilir. Ekler ezberletilmez." Bu yüzden ders, ek listesi ezberine
 * dayanmaz; işlev testine dayanır. Kazanımın adı da zaten "fiilimsilerin
 * CÜMLEDEKİ İŞLEVLERİNİ kavrar" biçimindedir.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-fiilimsiler',
  topic: 'Fiilimsiler',
  order: 1,
  title: 'Fiilimsiler: Cümledeki İşlevi',
  subtitle:
    'Program açıkça söylüyor: ekler ezberletilmez. O hâlde fiilimsiyi ekinden değil, cümlede yaptığı işten tanıyacağız.',
  minutes: 43,
  kazanimlar: [
    { kod: 'T.8.3.9', metin: 'Fiilimsilerin cümledeki işlevlerini kavrar.' },
  ],
  prerequisites: [
    { topic: 'İsim, sıfat ve zarf kavramları', why: 'Fiilimsinin türü, cümlede hangi sözcük türünün işini yaptığına göre belirlenir.' },
    { topic: 'Yüklem kavramı', why: 'Fiilimsi ile çekimli fiili ayırmak için yüklemin ne olduğunu bilmen gerekir.' },
  ],
  outcomes: [
    'Bir sözcüğün fiilimsi olup olmadığını işlev testiyle belirleyebileceksin.',
    'Fiilimsi ile cümlenin yüklemini (çekimli fiil) ayırabileceksin.',
    'İsim-fiil, sıfat-fiil ve zarf-fiili cümledeki görevlerine göre ayırabileceksin.',
    'Fiilimsinin bir yan cümlecik kurduğunu gösterebileceksin.',
    'Kalıcı isim olmuş yapıları (dolmuş, dondurma) fiilimsiden ayırabileceksin.',
  ],

  opening: {
    title: 'Ek ezberi olmadan fiilimsi',
    lead: 'Programın açıklaması nettir: “Fiilimsilerin türleri fark ettirilir. Ekler ezberletilmez.” Bu ders o çizgiyi izler.',
    body: `Çoğu öğrenci fiilimsileri şöyle öğrenir: “-ma, -mak, -ış isim-fiil; -an, -ası, -mez, -ar, -dik, -ecek, -miş sıfat-fiil; -ip, -arak, -ince, -ken zarf-fiil.” Sonra bir sınavda “Gelme!” cümlesiyle karşılaşır, “-me” görür ve isim-fiil der. Oysa orada bir emir vardır, fiilimsi yoktur.

MEB 8. sınıf programı bu tuzağı öngörmüş olacak ki **T.8.3.9** kazanımının açıklamasına şunu yazmış: *“Fiilimsilerin türleri fark ettirilir. Ekler ezberletilmez.”* Kazanımın adı da zaten ek bilgisini değil işlevi soruyor: “Fiilimsilerin **cümledeki işlevlerini** kavrar.”

O hâlde işe tanımdan başlayalım. **Fiilimsi**, bir fiilden türeyen ama cümlede fiil gibi değil; **isim, sıfat ya da zarf gibi** görev yapan sözcüktür. İki yüzü vardır: kökü bir eylem bildirir, ama cümledeki işi bir eylem işi değildir.

“Yüzmeyi severim.” cümlesinde *yüzme* bir eylemden gelir; ama cümlede sevilen şeyin adıdır — yerine “sporu” koyabilirsin. Demek ki bir isim işi görüyor.

“Gelen kişi kapıda bekledi.” cümlesinde *gelen* bir eylemden gelir; ama kişiyi niteliyor — yerine “yorgun” koyabilirsin. Demek ki bir sıfat işi görüyor.

“Koşarak geldi.” cümlesinde *koşarak* bir eylemden gelir; ama gelme eylemini nasıl gerçekleştiğini bildiriyor — yerine “hızlıca” koyabilirsin. Demek ki bir zarf işi görüyor.

Üç örnekte de aynı testi kullandık: **yerine ne koyabiliyorum?** Bu ders boyunca bu testi kuracağız ve ek listesine hiç ihtiyaç duymayacağız.`,
  },

  concepts: [
    {
      term: 'Fiilimsi (eylemsi)',
      body: 'Bir fiilden türeyen, ancak cümlede isim, sıfat veya zarf gibi görev yapan sözcüktür. Cümlenin yüklemi olamaz; yüklem olsaydı çekimli fiil olurdu.',
    },
    {
      term: 'İsim-fiil (mastar)',
      body: 'Bir işin, oluşun ya da durumun **adı** olarak kullanılan fiilimsidir. Cümlede öznesi, nesnesi ya da tümleci olabilir: “**Yüzmeyi** severim.” Yerine bir isim koyabilirsin.',
    },
    {
      term: 'Sıfat-fiil (ortaç)',
      body: 'Bir varlığı **niteleyen** fiilimsidir; hemen ardından genellikle bir isim gelir: “**Gelen** kişi”, “**okunacak** kitap”. Yerine bir sıfat koyabilirsin.',
    },
    {
      term: 'Zarf-fiil (ulaç, bağ-fiil)',
      body: 'Yüklemi durum, zaman ya da sebep yönünden **tamamlayan** fiilimsidir: “**Koşarak** geldi.” Yerine bir zarf koyabilirsin.',
    },
    {
      term: 'Çekimli fiil',
      body: 'Kip ve kişi eki almış, cümlenin **yüklemi** olan fiildir: “Geldi.”, “Okuyor.”, “Gelme!” Fiilimsi değildir; fiilimsiyle en çok karışan yapı budur.',
    },
    {
      term: 'Yan cümlecik',
      body: 'Fiilimsinin kurduğu, kendi başına yargı bildirmeyen söz öbeğidir: “**Kapıyı çalan kişi**, elinde bir paket tutuyordu.” Kalın bölüm temel cümlenin öznesidir ve içinde bir fiilimsi bulunur.',
    },
  ],

  why: {
    question: 'Neden ek ezberi bu konuda çöker?',
    body: `Çünkü Türkçede aynı ek birden çok iş yapar. Üç örnekle görelim.

**“-ma / -me” tuzağı.** “Gelmeni istedim.” cümlesinde *gelme* bir isim-fiildir: istenen şeyin adıdır. “Buraya gelme!” cümlesinde ise *gelme* bir emirdir ve cümlenin yüklemidir; fiilimsi değildir. Aynı ek, iki farklı iş.

**“-ecek / -acak” tuzağı.** “Okunacak kitaplar rafta.” cümlesinde *okunacak* kitabı niteliyor: sıfat-fiil. “Yarın kitabı okuyacak.” cümlesinde ise *okuyacak* cümlenin yüklemidir: çekimli fiil, gelecek zaman.

**“-mış / -miş” tuzağı.** “Kurumuş yapraklar sokağı kapladı.” cümlesinde *kurumuş* yaprakları niteliyor: sıfat-fiil. “Yapraklar kurumuş.” cümlesinde ise yüklemdir.

Üç örnekte de ek aynı, iş farklı. Bu yüzden ekle çalışan öğrenci sürekli tökezler; işlevle çalışan öğrenci hiç tökezlemez.

İşlev testi iki adımlıdır ve çok basittir. **Birinci adım:** sözcük cümlenin yüklemi mi? Yüklemse fiilimsi değildir, işlem biter. **İkinci adım:** yüklem değilse, yerine ne koyabiliyorum — bir isim mi, bir sıfat mı, bir zarf mı? Koyabildiğin şey, fiilimsinin türünü söyler.

Bu testin güzel yanı, hiçbir liste gerektirmemesidir. Programın “ekler ezberletilmez” demesinin sebebi de büyük olasılıkla budur: ezber, doğru cevabı değil yanlış refleksi öğretir.`,
  },

  decision: {
    title: 'Fiilimsiyi bulma ve türünü belirleme yolu',
    lead: 'Önce yüklemi ele, sonra yerine koyma testini uygula.',
    intro:
      'Bir sözcüğün fiilimsi olup olmadığını anlamak için şu beş durağı uygula. İkinci durak yanlış adayların çoğunu eler.',
    steps: [
      {
        title: '1. Cümlenin yüklemini bul',
        body: 'Önce cümlenin yüklemini işaretle. Yüklem, kip ve kişi eki almış, yargıyı tamamlayan sözcüktür. Fiilimsi hiçbir zaman yüklem olamaz; bu yüzden yüklemi eleyerek işe başlarsın.',
      },
      {
        title: '2. Eylem bildiren öteki sözcükleri ara',
        body: 'Yüklem dışında bir eylem çağrıştıran sözcük var mı? “Koşarak”, “gelen”, “yüzme” gibi. Bunlar fiilimsi adaylarıdır.',
      },
      {
        title: '3. Yerine koyma testini uygula',
        body: 'Adayın yerine bir isim koyabiliyorsan **isim-fiil**, bir sıfat koyabiliyorsan **sıfat-fiil**, bir zarf koyabiliyorsan **zarf-fiil** vardır. Cümle bozulmadan ayakta kalmalı.',
      },
      {
        title: '4. Kalıcı isim mi kontrol et',
        body: 'Bazı yapılar zamanla bir varlığın adı olmuştur: *dolmuş, dondurma, çakmak, danışman, yakacak*. Bunlar artık fiilimsi değil, isimdir. Test: sözcük bir eylemi mi, bir nesneyi mi karşılıyor?',
      },
      {
        title: '5. Yan cümleciği göster',
        body: 'Fiilimsi bulduysan, onun kurduğu söz öbeğini işaretle ve bu öbeğin temel cümlede hangi ögeyi oluşturduğunu söyle. Bu adım, konuyu Cümlenin Ögeleri dersine bağlar.',
      },
    ],
    takeaway: 'Fiilimsiyi eki değil, cümlede yaptığı iş tanımlar.',
  },

  decisionTree: {
    title: 'Fiilimsi mi, değil mi?',
    intro:
      'Üç kontrolü sırayla uygula. Birinci kontrol, en sık yapılan hatayı baştan keser.',
    checks: [
      {
        question: 'Sözcük cümlenin yüklemi mi?',
        yes: 'Fiilimsi değildir; çekimli fiildir. Örnek: “Buraya gelme!” — bu bir emirdir.',
        no: 'Fiilimsi adayı; ikinci kontrole geç.',
      },
      {
        question: 'Sözcük bir eylemi mi karşılıyor, yoksa bir nesnenin adı mı olmuş?',
        yes: 'Eylemi karşılıyorsa fiilimsidir; üçüncü kontrole geç.',
        no: 'Kalıcı isim olmuştur (dolmuş, dondurma); artık fiilimsi değildir.',
      },
      {
        question: 'Yerine bir isim mi, sıfat mı, zarf mı koyabiliyorum?',
        yes: 'Koyabildiğin tür, fiilimsinin türünü verir: isim-fiil, sıfat-fiil ya da zarf-fiil.',
        no: 'Cümleyi yeniden oku; muhtemelen sözcüğü yanlış ayırdın.',
      },
    ],
    takeaway:
      'Yüklem kontrolünü başa koymamızın sebebi, ek ezberinin en çok burada yanılttığıdır: aynı ek hem yüklem hem fiilimsi kurabilir.',
  },

  comparison: {
    title: 'Üç fiilimsi türünü işleviyle ayır',
    columns: ['İsim-fiil', 'Sıfat-fiil', 'Zarf-fiil'],
    rows: [
      { label: 'Cümledeki işi', values: ['Bir işin adı olur', 'Bir varlığı niteler', 'Yüklemi tamamlar'] },
      { label: 'Yerine ne koyarım?', values: ['Bir isim', 'Bir sıfat', 'Bir zarf'] },
      { label: 'Örnek', values: ['Yüzmeyi severim.', 'Gelen kişi bekledi.', 'Koşarak geldi.'] },
      { label: 'Yerine koyma denemesi', values: ['Sporu severim.', 'Yorgun kişi bekledi.', 'Hızlıca geldi.'] },
      { label: 'Ardından ne gelir?', values: ['Genellikle bir hâl eki', 'Genellikle bir isim', 'Genellikle yüklem'] },
      { label: 'Sorusu', values: ['Neyi? Ne?', 'Nasıl bir? Hangi?', 'Nasıl? Ne zaman? Niçin?'] },
    ],
    insight:
      'Üçünü ayırmak için ek bilmeye gerek yok: yerine koyma testi her seferinde tek bir doğru veriyor.',
  },

  traps: [
    {
      title: '“-ma/-me” ekini gördüğü an isim-fiil demek',
      wrong: '“Buraya gelme!” cümlesinde “-me” var; öyleyse isim-fiil vardır.',
      right: 'Önce yükleme bakarım: “gelme” bu cümlenin yüklemidir ve bir emir bildirir. Fiilimsi yüklem olamaz.',
      body: 'Aynı ek, “Gelmeni istedim.” cümlesinde isim-fiil kurar. Ayrımı yapan ek değil, sözcüğün cümledeki görevidir.',
    },
    {
      title: 'Kalıcı isimleri fiilimsi saymak',
      wrong: '“Dolmuşa bindim.” cümlesinde “-muş” var; sıfat-fiil olmalı.',
      right: '“Dolmuş” burada bir taşıt adıdır; bir eylemi değil bir nesneyi karşılar. Fiilimsi değil, isimdir.',
      body: 'Türkçede *dolmuş, dondurma, çakmak, yakacak, danışman* gibi pek çok sözcük fiilimsi yapısından doğup kalıcı isim olmuştur. Test: eylemi mi karşılıyor, nesneyi mi?',
    },
    {
      title: 'Bir cümlede tek fiilimsi aramak',
      wrong: 'Fiilimsiyi buldum, işim bitti.',
      right: 'Bir cümlede birden çok fiilimsi bulunabilir ve farklı türlerde olabilirler. Cümleyi sonuna kadar tara.',
      body: '“Koşarak gelen çocuk, yüzmeyi çok seviyordu.” cümlesinde üç fiilimsi var: zarf-fiil (koşarak), sıfat-fiil (gelen), isim-fiil (yüzmeyi).',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-fiilimsi-test',
      title: 'Yerine koyma testi: ek bilmeden çalışan yöntem',
      lead: 'Bu bölümde testin nasıl uygulandığını adım adım göreceğiz. Test bir kez oturduğunda ek listesine bir daha ihtiyaç duymazsın.',
      blocks: [
        {
          id: 'lgs-fiilimsi-test-anlatim',
          type: 'prose',
          body: `Testin mantığı basit: fiilimsi, cümlede bir sözcük türünün işini yapar. O işi başka hangi sözcük yapabilirdi? Yerine onu koy ve cümlenin ayakta kaldığını gör.

**İsim-fiil testi.** “Yüzmeyi severim.” cümlesinde *yüzmeyi* yerine bir isim koy: “Sporu severim.” Cümle ayakta. Demek ki *yüzme* bir isim işi yapıyor: isim-fiil.

**Sıfat-fiil testi.** “Gelen kişi kapıda bekledi.” cümlesinde *gelen* yerine bir sıfat koy: “Yorgun kişi kapıda bekledi.” Cümle ayakta. Demek ki *gelen* bir sıfat işi yapıyor: sıfat-fiil.

**Zarf-fiil testi.** “Koşarak geldi.” cümlesinde *koşarak* yerine bir zarf koy: “Hızlıca geldi.” Cümle ayakta. Demek ki *koşarak* bir zarf işi yapıyor: zarf-fiil.

Testi uygularken iki şeye dikkat et.

**Birincisi:** koyduğun sözcük anlamı değiştirebilir; bu sorun değil. Testin ölçtüğü şey anlam değil **dil bilgisel görev**. “Sporu severim” cümlesi “Yüzmeyi severim”den farklı bir şey söyler, ama ikisinde de aynı görev vardır.

**İkincisi:** test yalnız fiilimsi adayları için uygulanır. Cümlenin yüklemini bu teste sokma; yüklem zaten fiildir ve yerine isim koyduğunda cümle yıkılır.

Programın “ekler ezberletilmez” sınırını bu noktada bir kez daha hatırlatalım. Ek listesi tamamen yasak değildir; öğrenci ekleri **fark edebilir**. Ama sınavda kararı ek değil, işlev vermelidir. Bu yüzden derste ek listesi vermiyoruz: liste, refleksi işlevden ek tarafına kaydırıyor.

Son olarak, fiilimsinin iki yüzlü olduğunu unutma: kökü eylem, işi isim/sıfat/zarf. Bu iki yüzlülük, fiilimsinin cümlede bir **yan cümlecik** kurmasının da sebebidir — çünkü içinde bir eylem taşır ve o eylemin öznesi, nesnesi olabilir.`,
        },
        {
          id: 'lgs-fiilimsi-test-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı ek, farklı görev',
          columns: ['Cümle', 'Sözcük', 'Yüklem mi?', 'Sonuç'],
          rows: [
            ['Gelmeni istedim.', 'gelme', 'Hayır (yüklem: istedim)', 'İsim-fiil'],
            ['Buraya gelme!', 'gelme', 'Evet', 'Çekimli fiil — fiilimsi değil'],
            ['Okunacak kitaplar rafta.', 'okunacak', 'Hayır (yüklem: rafta/‑dır)', 'Sıfat-fiil'],
            ['Kitabı yarın okuyacak.', 'okuyacak', 'Evet', 'Çekimli fiil — fiilimsi değil'],
            ['Kurumuş yapraklar sokağı kapladı.', 'kurumuş', 'Hayır (yüklem: kapladı)', 'Sıfat-fiil'],
            ['Yapraklar kurumuş.', 'kurumuş', 'Evet', 'Çekimli fiil — fiilimsi değil'],
          ],
          caption:
            'Üç ek çifti, altı cümle. Ekler aynı; kararı her seferinde yüklem kontrolü veriyor.',
        },
        {
          id: 'lgs-fiilimsi-test-analiz',
          type: 'sentence_analysis',
          title: 'Bir cümlede üç fiilimsi birden',
          prompt:
            'Aşağıdaki cümlede üç ayrı fiilimsi var ve üçü de farklı türde. Parçalara tıklayarak her birinin işini gör.',
          segments: [
            {
              text: 'Koşarak',
              label: 'Zarf-fiil',
              explanation:
                'Yüklem değil. Yerine bir zarf koyabiliyorum: “Hızlıca gelen çocuk…” Geliş eylemini nasıl gerçekleştiğini bildiriyor.',
              tone: 'aqua',
            },
            {
              text: 'gelen',
              label: 'Sıfat-fiil',
              explanation:
                'Yüklem değil. Hemen ardından bir isim geliyor (çocuk) ve onu niteliyor. Yerine bir sıfat koyabiliyorum: “yorgun çocuk”.',
              tone: 'brand',
            },
            {
              text: 'çocuk,',
              label: 'Nitelenen isim',
              explanation:
                'Fiilimsi değil. Sıfat-fiilin nitelediği varlık. “Koşarak gelen çocuk” öbeği, cümlenin öznesini oluşturur.',
              tone: 'muted',
            },
            {
              text: 'yüzmeyi çok seviyordu.',
              label: 'İsim-fiil + yüklem',
              explanation:
                '“Yüzmeyi” bir işin adıdır; yerine bir isim koyabiliyorum: “sporu çok seviyordu”. “Seviyordu” ise cümlenin yüklemidir ve fiilimsi değildir.',
              tone: 'success',
            },
          ],
          takeaway:
            'Bir cümlede üç fiilimsi ve bir yüklem bir arada bulunabilir. Cümleyi sonuna kadar taramazsan birini kaçırırsın.',
        },
        {
          id: 'lgs-fiilimsi-test-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Fiilimsi bulmanın en hızlı pratik yolu şudur: cümlenin yüklemini kapat, kalan sözcükler arasında eylem çağrıştıran var mı diye bak. Yüklemi kapatmak, ek ezberinin yol açtığı hataların neredeyse tamamını önler.',
        },
      ],
    },

    {
      id: 'lgs-turkce-fiilimsi-yan-cumlecik',
      title: 'Fiilimsi bir yan cümlecik kurar',
      lead: 'Fiilimsi yalnız bir sözcük değildir; çevresine bir öbek toplar ve o öbek cümlede bir öge olur.',
      blocks: [
        {
          id: 'lgs-fiilimsi-yan-anlatim',
          type: 'prose',
          body: `Fiilimsi kökünde bir eylem taşıdığı için, tıpkı bir fiil gibi çevresine sözcük toplayabilir: öznesi, nesnesi, tümleci olabilir. Bu topluluğa **yan cümlecik** denir.

“**Kapıyı çalan kişi**, elinde bir paket tutuyordu.” cümlesinde kalın bölüm bir yan cümleciktir. İçinde bir fiilimsi (*çalan*) ve onun nesnesi (*kapıyı*) vardır. Bu öbeğin tamamı, temel cümlenin **öznesidir**.

“**Yağmurun dinmesini** bekledik.” cümlesinde yan cümlecik bir isim-fiil (*dinme*) ve onun öznesi (*yağmurun*) etrafında kurulmuş. Öbeğin tamamı temel cümlenin **nesnesidir**.

“**Zil çalınca** herkes dışarı çıktı.” cümlesinde yan cümlecik bir zarf-fiil (*çalınca*) etrafında kurulmuş ve temel cümlenin **zarf tümlecidir**.

Bu üç örnek neden önemli? Çünkü bir sonraki derste (Cümlenin Ögeleri) ögeleri bulurken yan cümlecikleri **bir bütün olarak** ele alacaksın. Yan cümleciği parçalara ayırıp içindeki nesneyi temel cümlenin nesnesi sanmak, öge sorularının en yaygın hatasıdır.

Bir cümlede kaç fiilimsi varsa o kadar yan cümlecik vardır. “Koşarak gelen çocuk, yüzmeyi çok seviyordu.” cümlesinde üç fiilimsi ve dolayısıyla iç içe geçmiş yan cümlecikler bulunur.

Son bir kavram: **fiilimsi bulunan cümleler birleşik cümle sayılır.** Bu bilgi Cümle Türleri dersinde işine yarayacak; şimdilik şunu bil: bir cümlede fiilimsi varsa o cümle yalın (basit) değildir.`,
        },
        {
          id: 'lgs-fiilimsi-yan-tablo',
          type: 'table',
          interactive: true,
          title: 'Yan cümlecik temel cümlede ne oluyor?',
          columns: ['Cümle', 'Yan cümlecik', 'Fiilimsi türü', 'Temel cümledeki görevi'],
          rows: [
            ['Kapıyı çalan kişi, elinde paket tutuyordu.', 'kapıyı çalan', 'Sıfat-fiil', 'Öznenin niteleyicisi'],
            ['Yağmurun dinmesini bekledik.', 'yağmurun dinmesini', 'İsim-fiil', 'Nesne'],
            ['Zil çalınca herkes dışarı çıktı.', 'zil çalınca', 'Zarf-fiil', 'Zarf tümleci'],
            ['Bana verdiğin kitabı bitirdim.', 'bana verdiğin', 'Sıfat-fiil', 'Nesnenin niteleyicisi'],
            ['Erken kalkmak bana zor geliyor.', 'erken kalkmak', 'İsim-fiil', 'Özne'],
          ],
          caption:
            'Yan cümlecik her zaman bir bütün olarak ele alınır. İçindeki nesneyi temel cümlenin nesnesi saymak, öge sorularının en pahalı hatasıdır.',
        },
        {
          id: 'lgs-fiilimsi-yan-tuzak',
          type: 'trap',
          title: 'Yan cümleciği parçalamak',
          wrong: '“Kapıyı çalan kişi bekledi.” cümlesinin nesnesi “kapıyı”dır.',
          right: '“Kapıyı” yan cümleciğin nesnesidir, temel cümlenin değil. Temel cümlenin yüklemi “bekledi” ve bu fiil nesne almaz.',
          body: 'Yan cümleciği bir bütün olarak işaretlemek bu hatayı önler: “kapıyı çalan kişi” tek bir öge olarak öznedir.',
        },
      ],
    },

    {
      id: 'lgs-turkce-fiilimsi-sinir-durumlar',
      title: 'Sınır durumlar: kalıcı isimler ve karışan yapılar',
      lead: 'Fiilimsi yapısından doğup artık fiilimsi olmayan sözcükler vardır. Ayrımı yapan soru basittir.',
      blocks: [
        {
          id: 'lgs-fiilimsi-sinir-anlatim',
          type: 'prose',
          body: `Türkçede pek çok sözcük fiilimsi yapısıyla doğmuş, sonra bir varlığın kalıcı adı olmuştur: *dolmuş, dondurma, çakmak, yakacak, giyecek, danışman, gelecek (zaman anlamında), yazar.*

Bunlar artık bir eylemi değil, bir **nesneyi ya da kavramı** karşılar. “Dolmuşa bindim.” cümlesinde *dolmuş* bir taşıttır; kimsenin dolması söz konusu değildir. Bu yüzden fiilimsi sayılmaz.

Ayrımı yapan soru şudur: **Sözcük bir eylemi mi karşılıyor, bir nesneyi mi?** Nesneyi karşılıyorsa kalıcı isimdir.

Dikkat: aynı sözcük bağlama göre iki türlü de kullanılabilir. “Dondurma yaparken şeker kullandık.” cümlesinde *dondurma* bir yiyecektir: isim. “Suyu dondurma işlemi uzun sürdü.” cümlesinde ise *dondurma* bir eylemin adıdır: isim-fiil. Bağlam kararı verir.

İkinci sınır durum: **çekimli fiille karışan sıfat-fiiller.** “Kurumuş yapraklar” ile “Yapraklar kurumuş.” Birincisinde sözcük bir varlığı niteliyor ve cümlenin yüklemi değil; sıfat-fiil. İkincisinde cümlenin yüklemi; çekimli fiil. Yüklem kontrolü bunu her seferinde çözer.

Üçüncü sınır durum: **zarf-fiil ile bağlaç karışması.** “Kitabı okuyup rafa koydu.” cümlesinde *okuyup* bir zarf-fiildir ve iki eylemi birbirine bağlar. Burada bir bağlaç değil, bir fiilimsi vardır; bağlaç ayrı bir sözcük olurdu (“okudu **ve** koydu”).

Bu üç sınır durumu tanıdığında, fiilimsi sorularında karşılaşacağın zorlukların neredeyse tamamını görmüş olursun.`,
        },
        {
          id: 'lgs-fiilimsi-sinir-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Fiilimsi mi, kalıcı isim mi?',
          columns: ['Fiilimsi', 'Kalıcı isim'],
          rows: [
            { label: 'Ne karşılıyor?', values: ['Bir eylemi, oluşu, durumu', 'Bir nesneyi ya da kavramı'] },
            { label: 'Örnek', values: ['Suyu dondurma işlemi uzun sürdü.', 'Çocuklara dondurma aldık.'] },
            { label: 'Test', values: ['Bir eylem düşünebiliyorum', 'Elle tutulur bir şey ya da sabit bir kavram'] },
            { label: 'Diğer örnekler', values: ['gelme, okuma, bakış (eylem adı olarak)', 'dolmuş, çakmak, yakacak, danışman'] },
            { label: 'Bağlam', values: ['Belirleyicidir', 'Belirleyicidir'] },
          ],
          insight:
            'Aynı sözcük iki türlü de kullanılabilir. Bu yüzden kalıcı isimlerin listesini ezberlemek yerine bağlama bakmak gerekir.',
        },
        {
          id: 'lgs-fiilimsi-sinir-tuzak',
          type: 'trap',
          title: 'Zarf-fiili bağlaç sanmak',
          wrong: '“Kitabı okuyup rafa koydu.” cümlesinde “-ip” iki eylemi bağlıyor; bir bağlaçtır.',
          right: '“Okuyup” bir zarf-fiildir: bir fiilden türemiş ve yüklemi tamamlıyor. Bağlaç ayrı bir sözcük olurdu.',
          body: 'Zarf-fiiller sıklıkla iki eylemi birbirine bağlar ve bu yüzden bağlaç gibi görünür. Ama bağlaç türemiş bir sözcük değildir; zarf-fiil ise bir fiilden türer.',
        },
        {
          id: 'lgs-fiilimsi-sinir-hafiza',
          type: 'memory',
          title: 'İki soruluk fiilimsi testi',
          body: '**Yüklem mi?** → öyleyse fiilimsi değil. **Yerine ne koyarım?** → isim, sıfat ya da zarf; tür budur.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Aynı ek, iki farklı cümle',
      prompt:
        'Şu iki cümlede “-ma/-me” ekini taşıyan sözcükleri incele: (1) “Erken kalkmayı hiç sevmem.” (2) “Sakın buraya gelme!”',
      steps: [
        { title: '(1) yüklemi bul', body: 'Yüklem: “sevmem”. “Kalkmayı” yüklem değil.' },
        { title: '(1) yerine koyma testi', body: '“Erken kalkmayı” yerine bir isim koy: “Sabahları hiç sevmem.” Cümle ayakta. → **İsim-fiil**.' },
        { title: '(2) yüklemi bul', body: 'Cümlede tek eylem var: “gelme”. Bu bir emir ve cümlenin yüklemi.' },
        { title: '(2) yerine koyma testi uygulanır mı?', body: 'Uygulanmaz; yüklem olduğu için birinci kontrolde elendi. → **Fiilimsi yok**.' },
        { title: 'Dersi çıkar', body: 'İki cümlede de aynı ek var. Ek listesiyle çalışan öğrenci ikisine de isim-fiil derdi ve ikinci cümleyi kaybederdi.' },
      ],
      answer: '(1) isim-fiil var · (2) fiilimsi yok, çekimli fiil (emir) var',
      takeaway: 'Yüklem kontrolü, ek ezberinin yol açtığı hataların çoğunu tek adımda önler.',
    },
    {
      title: 'Seviye 2 — Bir cümlede kaç fiilimsi var?',
      prompt:
        'Cümle: “Sabah erken kalkıp hazırlanan öğrenciler, otobüsü kaçırmamak için koşarak yola çıktılar.” Bu cümledeki fiilimsileri bulup türlerini belirle.',
      steps: [
        { title: 'Yüklemi bul ve kapat', body: 'Yüklem: “çıktılar”. Kalan sözcüklerde eylem çağrıştıranları arayacağız.' },
        { title: '“kalkıp” adayını sına', body: 'Yüklem değil. Yerine bir zarf koyabiliyorum: “Sabah erkenden hazırlanan öğrenciler…” → **Zarf-fiil**.' },
        { title: '“hazırlanan” adayını sına', body: 'Yüklem değil. Ardından bir isim geliyor (öğrenciler) ve onu niteliyor. Yerine bir sıfat koyabiliyorum: “dikkatli öğrenciler”. → **Sıfat-fiil**.' },
        { title: '“kaçırmamak” adayını sına', body: 'Yüklem değil. Yerine bir isim koyabiliyorum: “Gecikmemek için…” Bir işin adı. → **İsim-fiil**.' },
        { title: '“koşarak” adayını sına', body: 'Yüklem değil. Yerine bir zarf koyabiliyorum: “hızlıca yola çıktılar”. → **Zarf-fiil**.' },
      ],
      answer:
        'Dört fiilimsi var: kalkıp (zarf-fiil), hazırlanan (sıfat-fiil), kaçırmamak (isim-fiil), koşarak (zarf-fiil).',
      takeaway:
        'Cümleyi sonuna kadar tara. “Bir fiilimsi buldum” demek, cümlede başka fiilimsi olmadığı anlamına gelmez.',
    },
    {
      title: 'Seviye 3 — Kalıcı isim mi, fiilimsi mi?',
      prompt:
        'Şu cümlelerdeki altı çizili sözcükleri sınıflandır: (1) “Yazın **dondurma** yemeyi çok severiz.” (2) “Suyu **dondurma** işlemi laboratuvarda yapıldı.” (3) “Akşam **dolmuş**la eve döndüm.” (4) “Bardağın **dolmuş** olduğunu fark etmedim.”',
      steps: [
        { title: '(1) eylem mi nesne mi?', body: 'Yenen bir yiyecekten söz ediliyor. Bir eylem yok. → **Kalıcı isim**.' },
        { title: '(2) eylem mi nesne mi?', body: 'Suyun dondurulması, yani bir işlem anlatılıyor. Bir eylemin adı. → **İsim-fiil**.' },
        { title: '(3) eylem mi nesne mi?', body: 'Binilen bir taşıt. Kimse dolmuyor. → **Kalıcı isim**.' },
        { title: '(4) yüklem mi, niteleyici mi?', body: '“Bardağın dolmuş olduğu” — bardağın durumunu bildiriyor, bir varlığı niteliyor. Yüklem “fark etmedim”. → **Sıfat-fiil**.' },
        { title: 'Kuralı özetle', body: 'Aynı sözcük dört cümlede üç farklı şey oldu. Karar her seferinde bağlamdan geldi, ekten değil.' },
      ],
      answer: '(1) kalıcı isim · (2) isim-fiil · (3) kalıcı isim · (4) sıfat-fiil',
      takeaway: 'Kalıcı isim listesi ezberlemeye gerek yok; “eylem mi, nesne mi?” sorusu yeterli.',
    },
  ],

  questionClue: {
    concept: 'fiilimsi sorusu',
    statement:
      'Soru kökünde “fiilimsi”, “eylemsi”, “isim-fiil / sıfat-fiil / zarf-fiil” terimlerinden biri varsa, sorulan şey ek bilgisi değil cümledeki görevdir.',
    clues: [
      'Seçeneklerin kısa, bağımsız cümleler olması',
      'Birden fazla seçenekte aynı ekin geçmesi',
      '“Hangisinde fiilimsi yoktur?” biçimindeki soru kökleri',
      'Bir cümlede birden çok eylem çağrıştıran sözcük bulunması',
      'Kalıcı isim olmuş sözcüklerin (dolmuş, dondurma) seçeneklere konması',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, ek ezberiyle çalışan öğrenciyi ayırmak için kurulmuş. Çözüm yolu her seçenekte önce yüklemi bulmak, sonra kalan eylem sözcüklerine yerine koyma testi uygulamaktır.',
    boundary:
      'Bu ipuçlarını “-ma varsa isim-fiil, -an varsa sıfat-fiil” gibi bir kısayola çevirme. Aynı ek yüklem de kurabilir; program da bu yüzden “ekler ezberletilmez” diyor.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Dört cümleden hangisinde fiilimsi bulunmadığının sorulması',
      'Bir cümledeki fiilimsinin türünün sorulması',
      'Bir parçada kaç fiilimsi bulunduğunun sorulması',
      'Aynı türden fiilimsi taşıyan iki cümlenin eşleştirilmesi',
      'Kalıcı isim olmuş bir yapının fiilimsiden ayırt ettirilmesi',
      'Fiilimsinin kurduğu yan cümleciğin temel cümledeki görevinin sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Yarın okula gitmeyeceğim.” cümlesinde fiilimsi var mıdır?',
      hint: 'Önce yüklemi bul.',
      answer:
        'Yoktur. “Gitmeyeceğim” cümlenin yüklemidir: kip (gelecek zaman) ve kişi eki almış çekimli bir fiildir. Fiilimsi hiçbir zaman yüklem olamaz. “-ecek” ekinin bulunması onu sıfat-fiil yapmaz; “Okunacak kitaplar” örneğinde sıfat-fiil olurdu çünkü orada bir varlığı niteliyordu.',
    },
    {
      prompt:
        '“Bana verdiğin kitabı okudum.” cümlesindeki fiilimsiyi bul, türünü ve kurduğu yan cümleciği göster.',
      hint: 'Yüklemi kapat, kalan eylem sözcüğünü ara.',
      answer:
        'Yüklem “okudum”. Fiilimsi “verdiğin”; bir varlığı (kitabı) nitelediği için **sıfat-fiil**dir. Yerine bir sıfat koyabilirim: “eski kitabı okudum.” Kurduğu yan cümlecik “bana verdiğin”dir ve temel cümlenin nesnesini niteler: “bana verdiğin kitabı” bütünü nesnedir.',
    },
    {
      prompt:
        '“Yakacak almak için markete gittik.” cümlesinde kaç fiilimsi vardır?',
      hint: '“Yakacak” bir eylemi mi, bir nesneyi mi karşılıyor?',
      answer:
        'Bir fiilimsi vardır: “almak” (isim-fiil). “Yakacak” burada bir nesneyi — yakılacak madde, odun, kömür — karşılar; kalıcı isim olmuştur ve fiilimsi sayılmaz. “Gittik” ise cümlenin yüklemidir. Kalıcı isim tuzağı tam olarak böyle kurulur.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey ek listesi değil, cümledeki görev',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama ve analiz yapma becerilerini ölçecek nitelikte hazırlandığını belirtir. Kazanımın açıklaması da “ekler ezberletilmez” diyerek aynı yönü gösterir. Bu yüzden sorular, aynı ekin farklı görevler üstlendiği cümleleri yan yana koyar; ek listesiyle çalışan öğrenci bu soruyu kaybeder.',
    measures: [
      'Yüklem ile fiilimsiyi ayırabilme',
      'Yerine koyma testiyle fiilimsinin türünü belirleyebilme',
      'Aynı ekin farklı görevler üstlenebildiğini fark edebilme',
      'Kalıcı isim olmuş yapıları tanıyabilme',
      'Bir cümledeki bütün fiilimsileri tarayabilme',
      'Fiilimsinin kurduğu yan cümleciği bir bütün olarak görebilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün cümleler',
    passage: `Aşağıdaki cümleleri birlikte okuyalım:
I. Bahçeye dikilen fidanlar hızla büyüdü.
II. Akşam olunca sokak lambaları yandı.
III. Kardeşim yarın bize gelecek.
IV. Yüzmeyi öğrenmek istiyorum.`,
    question: 'Bu cümlelerden hangisinde fiilimsi **yoktur**?',
    options: [
      {
        text: 'I. cümle',
        explanation:
          '“Dikilen” fiilimsidir: yüklem değil (yüklem “büyüdü”), fidanları niteliyor ve yerine bir sıfat konabiliyor (“yeni fidanlar”). Sıfat-fiil.',
      },
      {
        text: 'II. cümle',
        explanation:
          '“Olunca” fiilimsidir: yüklem değil (yüklem “yandı”), yanma eylemini zaman yönünden tamamlıyor ve yerine bir zarf konabiliyor (“geceleyin lambalar yandı”). Zarf-fiil.',
      },
      {
        text: 'III. cümle',
        explanation:
          'Doğru cevap. “Gelecek” bu cümlede yüklemdir: kip (gelecek zaman) eki almış çekimli bir fiildir. “-ecek” ekinin bulunması onu sıfat-fiil yapmaz; sıfat-fiil olsaydı bir varlığı niteliyor olurdu.',
      },
      {
        text: 'IV. cümle',
        explanation:
          'İki fiilimsi var: “yüzmeyi” (isim-fiil, yerine “sporu” konabilir) ve “öğrenmek” (isim-fiil). Yüklem ise “istiyorum”.',
      },
      {
        text: 'II. ve III. cümleler',
        explanation:
          'II. cümlede “olunca” açık bir zarf-fiildir; bu yüzden seçenek kendi içinde yanlıştır. İki cümleyi birleştiren seçenekler, tek tek kontrol edilmeden işaretlenmemelidir.',
      },
    ],
    answer_index: 2,
    stem_analysis:
      'Soru kökü “fiilimsi yoktur” diyor; dört cümleyi tek tek tarayıp fiilimsi bulunmayanı işaretleyeceğim. Yöntem her cümlede aynı: önce yüklemi bul, sonra kalan eylem sözcüklerine yerine koyma testini uygula.',
    critical_point:
      'Kritik nokta, III. cümledeki “gelecek” sözcüğü. Bu ek sıfat-fiil kurabildiği için tanıdık geliyor; ama burada cümlenin yüklemi. Yüklem kontrolü yapılmadan verilen karar yanlış olur.',
    takeaway:
      'Her cümlede önce yüklemi bul. Fiilimsi yüklem olamaz; bu tek kural sorunun yarısını çözer.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question: 'Aşağıdaki cümlelerin hangisinde **zarf-fiil** vardır?',
      options: [
        'Okunacak kitapları masaya koydum.',
        'Kapıyı açınca içeri soğuk doldu.',
        'Yüzmeyi yazın öğrendim.',
        'Bahçedeki kurumuş dalları topladık.',
      ],
      answer_index: 1,
      explanation:
        '“Açınca” yüklem değildir (yüklem “doldu”) ve dolma eylemini zaman yönünden tamamlar; yerine bir zarf konabilir: “Birden içeri soğuk doldu.” Zarf-fiildir. Birinci ve dördüncü cümlelerde sıfat-fiil (okunacak, kurumuş), üçüncüde isim-fiil (yüzmeyi) vardır.',
    },
    {
      purpose: 'concept',
      question: '“Çocuklara dondurma aldık.” cümlesindeki “dondurma” sözcüğü için aşağıdakilerden hangisi doğrudur?',
      options: [
        'İsim-fiildir, çünkü bir eylemden türemiştir',
        'Kalıcı isimdir, çünkü bir eylemi değil bir nesneyi karşılar',
        'Sıfat-fiildir, çünkü bir varlığı niteler',
        'Cümlenin yüklemidir',
      ],
      answer_index: 1,
      explanation:
        'Cümlede alınan bir yiyecekten söz ediliyor; ortada bir dondurma eylemi yok. Sözcük fiilimsi yapısından doğmuş ama kalıcı isim olmuştur. “Suyu dondurma işlemi uzun sürdü.” cümlesinde ise bir eylemin adı olur ve isim-fiil sayılır. Cümlenin yüklemi “aldık”tır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Yarın sinemaya gideceğim.” cümlesi için “‘-ecek’ eki var, sıfat-fiil bulunuyor” diyor. Bu öğrencinin hatası nedir?',
      options: [
        'Yüklem kontrolü yapmadan ek ezberiyle karar vermek',
        'Zarf-fiili sıfat-fiil sanmak',
        'Kalıcı ismi fiilimsi sanmak',
        'Yan cümleciği parçalamak',
      ],
      answer_index: 0,
      explanation:
        '“Gideceğim” cümlenin yüklemidir: kip ve kişi eki almış çekimli bir fiildir. Fiilimsi hiçbir zaman yüklem olamaz. Öğrenci ekten yola çıkıp birinci kontrolü atlamıştır. Sıfat-fiil olsaydı bir varlığı niteliyor olurdu: “gidilecek yer” gibi.',
    },
  ],

  summary: [
    'Program açıkça sınırlar: fiilimsilerin türleri fark ettirilir, ekler ezberletilmez.',
    'Fiilimsi, bir fiilden türeyip cümlede isim, sıfat ya da zarf gibi görev yapan sözcüktür.',
    'Fiilimsi hiçbir zaman cümlenin yüklemi olamaz; ilk kontrol her zaman yüklem kontrolüdür.',
    'Tür belirleme yolu: yerine bir isim mi, sıfat mı, zarf mı koyabiliyorum?',
    'Aynı ek hem yüklem hem fiilimsi kurabilir: “Gelme!” ile “Gelmeni istedim.”',
    'Bir cümlede birden çok fiilimsi ve farklı türler bir arada bulunabilir.',
    'Fiilimsi çevresine bir yan cümlecik toplar; bu öbek temel cümlede tek bir öge olur.',
    'Yan cümleciği parçalayıp içindeki nesneyi temel cümlenin nesnesi sanmak yaygın bir hatadır.',
    'Bazı yapılar kalıcı isim olmuştur (dolmuş, dondurma, yakacak) ve artık fiilimsi değildir.',
    'Kalıcı isim ayrımı ezberle değil, “eylemi mi nesneyi mi karşılıyor?” sorusuyla yapılır.',
  ],

  next: [
    'Cümlenin Ögeleri (T.8.4.18)',
    'Cümle Türleri (T.8.4.19)',
    'Fiilde Çatı: Anlama Katkısı (T.8.4.20)',
  ],
})

export default lesson
