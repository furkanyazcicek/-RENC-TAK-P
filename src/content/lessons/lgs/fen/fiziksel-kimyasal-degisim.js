import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.4 Madde ve Endüstri · 2. ders
 * Kazanım : F.8.4.2.1 · F.8.4.3.1
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır)
 *   F.8.4.3.1 → "Kimyasal tepkime denklemlerine formüller kullanılarak
 *               girilmez."
 *   Konu / Kavramlar (F.8.4.3): "Kimyasal tepkimelerin oluşumu, kütlenin
 *   korunumu" — bu yüzden derste bileşik oluşumu ve kütlenin korunumu
 *   için ayrı bir bölüm var.
 *
 * Bu yüzden derste kimyasal denklem (H₂ + O₂ → H₂O gibi) HİÇ YAZILMAZ,
 * denklem denkleştirme yapılmaz ve formül ezberletilmez. Ders, tepkimenin
 * SONUCU üzerine kurulur: yeni madde oluştu mu, oluşmadı mı?
 *
 * Ayrım ölçütü bilinçli olarak TEK bir soruya indirgendi: "Maddenin
 * kimliği değişti mi?" Piyasadaki kaynakların verdiği uzun "belirti
 * listeleri" (renk değişimi, gaz çıkışı, ısı…) tek başına ölçüt
 * olmadıkları için ayrı bir bölümde SINIRLARIYLA anlatıldı.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-fiziksel-kimyasal-degisim',
  topic: 'Madde ve Endüstri',
  order: 2,
  title: 'Fiziksel ve Kimyasal Değişim: Kimlik Değişti mi?',
  subtitle:
    'Tek bir soru bütün olayları ayırır: madde hâlâ aynı madde mi, yoksa yeni bir madde mi oluştu?',
  minutes: 42,
  kazanimlar: ['F.8.4.2.1', 'F.8.4.3.1'],
  prerequisites: [
    { topic: 'Periyodik Sistem: Düzenin Kendisi Bilgidir', why: 'Element ve madde kavramları orada tazelendi.' },
    { topic: 'Maddenin hâlleri', why: 'Hâl değişimlerinin neden fiziksel olduğunu anlamak için gereklidir.' },
  ],
  outcomes: [
    'Fiziksel ve kimyasal değişimi tek bir ölçütle ayırabileceksin.',
    'Bir olayı gözlemleyip hangi tür değişim olduğunu söyleyebileceksin.',
    'Renk değişimi ve gaz çıkışı gibi belirtilerin neden tek başına yetmediğini açıklayabileceksin.',
    'Bileşiklerin kimyasal tepkime sonucunda oluştuğunu ve tepkimede kütlenin korunduğunu açıklayabileceksin.',
    'Geri dönebilirlik ölçütünün sınırlarını bileceksin.',
  ],

  opening: {
    title: 'İki kâğıt, iki farklı son',
    lead: 'Bir kâğıdı yırtıyorsun, bir kâğıdı yakıyorsun. İkisinde de kâğıt “değişti”. Ama aynı biçimde mi?',
    body: `Elinde iki özdeş kâğıt var.

**Birincisini yırtıyorsun.** Kâğıt küçük parçalara ayrıldı. Şekli değişti, boyutu değişti. Ama parçaların her biri hâlâ **kâğıt.** Yakından baktığında aynı maddeyi görürsün.

**İkincisini yakıyorsun.** Geriye kül ve duman kaldı. Kül kâğıt değildir; duman da kâğıt değildir. Ortada **yeni maddeler** var ve bunlar başlangıçtaki kâğıttan farklı.

İki olayda da bir değişim oldu. Ama iki değişim aynı türden değil.

**Birincisinde** maddenin dış görünüşü değişti, **kimliği** değişmedi. Buna **fiziksel değişim** denir.

**İkincisinde** maddenin kimliği değişti; yeni maddeler oluştu. Buna **kimyasal değişim** denir.

Bu dersin tamamı tek bir soru etrafında dönecek:

> **Maddenin kimliği değişti mi? Yeni bir madde oluştu mu?**

Cevap “hayır” ise fiziksel, “evet” ise kimyasal değişimdir.

Öğrencilerin çoğu bu konuyu bir **belirti listesi** ezberleyerek çalışır: renk değişti mi, gaz çıktı mı, ısı açığa çıktı mı… Bu liste işe yarar ama tek başına güvenilir değildir. Nedenini derste göreceğiz: aynı belirtiler fiziksel değişimlerde de ortaya çıkabilir.

Bu yüzden biz önce **ölçütü** kuracağız, belirtileri sonra ve **sınırlarıyla** ekleyeceğiz.

Bir kapsam uyarısı: *program kimyasal tepkime denklemlerine **formüller kullanılarak girilmemesini** ister.* Bu yüzden bu derste kimyasal denklem yazmayacağız. Senden istenen, **bileşiklerin kimyasal tepkime sonucunda oluştuğunu** bilmek, tepkimede **kütlenin korunduğunu** görmek ve bir olayı doğru sınıflandırmak.`,
  },

  concepts: [
    {
      term: 'Fiziksel değişim',
      body: 'Maddenin **kimliğinin değişmediği**, yalnız görünüş, biçim, boyut ya da hâl gibi özelliklerinin değiştiği değişimdir. Değişim sonunda madde hâlâ aynı maddedir.',
    },
    {
      term: 'Kimyasal değişim',
      body: 'Maddenin **kimliğinin değiştiği**, başlangıçtakinden farklı **yeni maddelerin oluştuğu** değişimdir.',
    },
    {
      term: 'Kimyasal tepkime',
      body: 'Kimyasal değişime yol açan olaydır. Tepkime sonucunda başlangıçtaki maddelerden farklı özelliklere sahip yeni maddeler oluşur.',
    },
    {
      term: 'Maddenin kimliği',
      body: 'Bir maddeyi başka maddelerden ayıran, ona kendi adını veren yapısıdır. Bu derste ayrımın tek ölçütü budur: kimlik değişti mi?',
    },
    {
      term: 'Hâl değişimi',
      body: 'Erime, donma, buharlaşma, yoğuşma gibi olaylardır. Bunlarda madde yalnız hâl değiştirir; kimliği aynı kalır. Bu yüzden hâl değişimleri **fiziksel değişimdir.**',
    },
  ],

  why: {
    question: 'Neden belirti listesi ezberlemek yerine tek bir ölçüt kuruyoruz?',
    body: `Çünkü belirtiler yanıltabilir; ölçüt yanıltmaz.

Yaygın belirti listesini hepimiz biliriz: renk değişimi, gaz çıkışı, ısı ve ışık açığa çıkması, koku oluşması, çökelti oluşması. Bunlar kimyasal değişimin **işaretleri** olabilir. Ama tek başına kanıt değildirler.

Neden? Çünkü aynı işaretler fiziksel değişimlerde de görülebilir. Üç örnek verelim:

**Örnek 1 — Gaz çıkışı.** Su kaynadığında buhar çıkar; bu bir gaz çıkışıdır. Ama suyun kimliği değişmemiştir: buhar da sudur. Bu **fiziksel** bir değişimdir.

**Örnek 2 — Renk değişimi.** Bir maddeyi boyayla karıştırdığında renk değişir. Ama madde hâlâ aynı maddedir; yalnız karışıma girmiştir. Bu **fiziksel** bir değişimdir.

**Örnek 3 — Isı açığa çıkması.** Su buharı yoğuşurken ısı verir. Yine kimlik değişmemiştir.

Demek ki belirtiler “ihtimal” gösterir, “kesinlik” değil.

Şimdi ölçütümüze bakalım. Ölçüt tek bir soru:

> **Bu olaydan sonra elimde hâlâ aynı madde mi var, yoksa yeni bir madde mi oluştu?**

Bu soruya “aynı madde” diyorsan **fiziksel**, “yeni madde” diyorsan **kimyasal** değişimdir. İstisnası yoktur; çünkü bu, iki kavramın tanımının kendisidir.

Örneklere uygulayalım:

- Buz erirse → elimde yine **su** var → fiziksel
- Kâğıt yırtılırsa → elimde yine **kâğıt** var → fiziksel
- Şeker suda çözünürse → şeker hâlâ **şeker**, karışımın içinde → fiziksel
- Kâğıt yanarsa → elimde **kül ve gaz** var, kâğıt yok → kimyasal
- Demir paslanırsa → elimde **pas** var, o demir değil → kimyasal
- Süt ekşirse → elimde **farklı bir madde** var → kimyasal

Görüldüğü gibi ölçüt her örnekte aynı biçimde çalışıyor.

Peki belirtileri hiç kullanmayacak mıyız? Kullanacağız — ama **ipucu** olarak, **kanıt** olarak değil. Bir olayda birden çok belirti birden ortaya çıkıyorsa, kimyasal değişim olma ihtimali yüksektir. Yine de karar ölçütle verilir.

Bu ayrım, aslında bu yıl boyunca tekrar eden bir alışkanlığın parçası: **işaret ile kanıtı ayırmak.** Kalıtımda olasılıkla kesinliği ayırmıştık; burada da ipucuyla ölçütü ayırıyoruz.`,
  },

  mechanism: {
    title: 'Bir olayı nasıl sınıflandırırsın?',
    lead: 'Altı adımlık bir yol. Sonuna geldiğinde kararın gerekçeli olur.',
    intro:
      'Aşağıdaki adımlar bir olayı fiziksel ya da kimyasal değişim olarak sınıflandırmanın yoludur.',
    steps: [
      {
        title: '1. Başlangıçtaki maddeyi adlandır',
        body: 'Olaydan önce elinde hangi madde vardı? Adını net biçimde yaz: su, kâğıt, demir, şeker.',
      },
      {
        title: '2. Olayı tanımla',
        body: 'Ne yapıldı? Isıtıldı mı, karıştırıldı mı, yakıldı mı, kırıldı mı, bekletildi mi?',
      },
      {
        title: '3. Sonuçtaki maddeyi adlandır',
        body: 'Olaydan sonra elinde hangi madde var? Burada dikkatli ol: “su buharı” yine sudur, ama “kül” kâğıt değildir.',
      },
      {
        title: '4. İki adı karşılaştır',
        body: 'Başlangıçtaki ad ile sonuçtaki ad aynı maddeyi mi gösteriyor? Ölçüt tam olarak budur.',
      },
      {
        title: '5. Aynıysa fiziksel, farklıysa kimyasal',
        body: 'Madde aynı kaldıysa değişim fizikseldir. Yeni bir madde oluştuysa değişim kimyasaldır ve bir kimyasal tepkime gerçekleşmiştir.',
      },
      {
        title: '6. Belirtilerle destekle',
        body: 'Kararını verdikten sonra belirtilere bak: renk, gaz, ısı, koku. Belirtiler kararını destekleyebilir ama kararı onlar vermez.',
      },
    ],
    takeaway:
      'Yolun kalbi 3. adımdır: sonuçtaki maddeyi doğru adlandırırsan geri kalanı kendiliğinden gelir.',
  },

  comparison: {
    title: 'Fiziksel ve kimyasal değişimin farkları',
    columns: ['Fiziksel değişim', 'Kimyasal değişim'],
    rows: [
      { label: 'Maddenin kimliği', values: ['Değişmez', 'Değişir'] },
      { label: 'Yeni madde oluşur mu?', values: ['Oluşmaz', 'Oluşur'] },
      { label: 'Ne değişir?', values: ['Biçim, boyut, hâl, görünüş', 'Maddenin kendisi'] },
      { label: 'Geri dönebilir mi?', values: ['Çoğu zaman kolayca dönebilir', 'Çoğu zaman kolayca dönemez'] },
      { label: 'Tepkime var mı?', values: ['Yok', 'Var — kimyasal tepkime gerçekleşir'] },
      { label: 'Örnek', values: ['Buzun erimesi, kâğıdın yırtılması, şekerin çözünmesi', 'Kâğıdın yanması, demirin paslanması, sütün ekşimesi'] },
    ],
    insight:
      'Dördüncü satırdaki “çoğu zaman” ifadesine dikkat: geri dönebilirlik kullanışlı bir ipucudur ama kesin bir ölçüt değildir. Kesin ölçüt ilk satırdır.',
  },

  traps: [
    {
      title: 'Gaz çıkışını kimyasal değişimin kanıtı saymak',
      wrong: 'Gaz çıkıyorsa kimyasal değişim olmuştur.',
      right: 'Gaz çıkışı bir **ipucudur**, kanıt değildir. Su kaynadığında da gaz (buhar) çıkar; ama suyun kimliği değişmez, bu fiziksel bir değişimdir.',
      body: 'Karar her zaman ölçütle verilir: yeni bir madde oluştu mu? Buhar da sudur; öyleyse yeni madde yoktur.',
    },
    {
      title: 'Geri dönebilirliği kesin ölçüt sanmak',
      wrong: 'Geri döndürülebiliyorsa fiziksel, döndürülemiyorsa kimyasaldır.',
      right: 'Geri dönebilirlik **kullanışlı bir ipucudur** ama tek başına ölçüt değildir. Kesin ölçüt maddenin kimliğinin değişip değişmediğidir.',
      body: 'Bazı fiziksel değişimleri geri döndürmek de kolay değildir; bir bardağın kırılması gibi. Bardak kırıldığında cam hâlâ camdır — kimlik değişmemiştir, yani fiziksel bir değişimdir; ama kolayca geri döndürülemez.',
    },
    {
      title: 'Çözünmeyi kimyasal değişim sanmak',
      wrong: 'Şeker suda çözündüğünde gözden kaybolur; demek ki yeni bir madde oluşmuştur.',
      right: 'Çözünme bir **fiziksel değişimdir.** Şeker gözle görünmez hâle gelir ama kimliği değişmez; karışımın içinde hâlâ şeker olarak bulunur.',
      body: 'Görünmemek yok olmak değildir. Suyu buharlaştırdığında şeker geri kalır; bu da kimliğinin değişmediğini gösterir.',
    },
    {
      title: 'Hâl değişimlerini kimyasal sanmak',
      wrong: 'Su buz olduğunda katıya döndüğü için farklı bir madde hâline gelir.',
      right: 'Hâl değişimleri (erime, donma, buharlaşma, yoğuşma) **fiziksel değişimdir.** Buz da, su da, su buharı da aynı maddedir; yalnız hâlleri farklıdır.',
      body: 'Hâl değişiminde değişen şey maddenin kimliği değil, hâlidir. Bu yüzden hâl değişimleri fiziksel değişimin en tipik örnekleridir.',
    },
  ],

  variables: {
    title: 'Gözlemle ayır: kimlik değişti mi?',
    lead:
      'Kazanım “çeşitli olayları **gözlemleyerek** açıklar” diyor. Öyleyse ayrımı bir gözlem tasarımıyla kuralım.',
    question: 'Bir maddeye uygulanan işlem değiştirildiğinde, işlem sonrasında madde hâlâ aynı madde olarak geri alınabilir mi?',
    independent: {
      label: 'Maddeye uygulanan işlem',
      note: 'Ben seçiyorum: çözme, eritme, yakma',
    },
    setup: {
      label: 'Aynı maddeden eşit miktarda örnekler',
      note: 'Her örneğe farklı bir işlem uygulanır',
    },
    dependent: {
      label: 'İşlem sonrası maddenin geri alınıp alınamaması',
      note: 'Ölçtüğüm: başlangıçtaki madde geri elde edildi mi?',
    },
    controlled: [
      'Kullanılan madde (hepsi aynı maddeden)',
      'Örneklerin başlangıç miktarı',
      'Gözlem süresi',
      'Gözlem ve kayıt yöntemi',
    ],
    caption:
      'Madde ve miktar bilerek sabit tutulur. Böylece sonuçtaki farkın tek olası nedeni uygulanan işlem olur.',
  },

  experiment: {
    title: 'Üç işlem, tek soru',
    intro:
      'Bu etkinlik sınıfta öğretmen gözetiminde yapılır. Yakma işlemi güvenlik önlemleriyle ve öğretmen tarafından yapılmalıdır.',
    steps: [
      { title: '1. Üç eşit örnek hazırla', body: 'Aynı maddeden (örneğin şekerden) eşit miktarda üç örnek ayrılır. Madde ve miktar sabit tutulur.' },
      { title: '2. Birinci örneği suda çöz', body: 'Örnek suda çözülür. Karışım gözlenir ve kaydedilir.' },
      { title: '3. Suyu buharlaştır', body: 'Karışımdaki su buharlaştırılır. Geriye ne kaldığı gözlenir: başlangıçtaki madde geri elde edilir mi?' },
      { title: '4. İkinci örneği ısıtarak erit', body: 'Örnek dikkatlice ısıtılıp eritilir, sonra soğumaya bırakılır. Soğuduğunda ne olduğu gözlenir.' },
      { title: '5. Üçüncü örneği yak', body: 'Öğretmen gözetiminde ve güvenlik önlemleriyle örnek yakılır. Geriye ne kaldığı gözlenir.' },
      { title: '6. Üç sonucu karşılaştır', body: 'Hangi işlemlerden sonra başlangıçtaki madde geri elde edilebildi, hangisinden sonra edilemedi? Ayrımın gözlenebilir karşılığı budur.' },
    ],
    takeaway:
      'Deney bir “kanıt” değil, bir **gösterim**dir: kimliğin korunduğu işlemlerde madde geri alınabiliyor, korunmadığı işlemde alınamıyor.',
  },

  dataTable: {
    title: 'Gözlem kaydı: üç işlem, üç sonuç',
    columns: ['İşlem', 'Gözlenen', 'Başlangıçtaki madde geri alındı mı?', 'Değişimin türü'],
    rows: [
      ['Suda çözme', 'Madde gözden kayboldu, karışım oluştu', 'Evet — su buharlaşınca geri kaldı', 'Fiziksel'],
      ['Isıtarak eritme', 'Madde sıvı hâle geçti', 'Evet — soğuyunca katı hâle döndü', 'Fiziksel'],
      ['Yakma', 'Renk koyulaştı, koku oluştu, artık madde kaldı', 'Hayır — geri alınamadı', 'Kimyasal'],
    ],
    caption:
      'Üçüncü satırda birden çok belirti birlikte görülüyor; ama kararı belirtiler değil, son sütundan önceki sütun verdi: madde geri alınamadı, çünkü kimliği değişti.',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-degisim-belirtiler',
      title: 'Belirtiler: ipucu evet, kanıt hayır',
      lead: 'Bu bölüm, ezberlenen listeyi kullanılabilir bir araca çevirir.',
      blocks: [
        {
          id: 'lgs-fen-degisim-belirtiler-anlatim',
          type: 'prose',
          body: `Kimyasal değişimlerde sık görülen belirtiler şunlardır:

- **Renk değişimi**
- **Gaz çıkışı** (kabarcıklanma)
- **Isı ve ışık açığa çıkması**
- **Koku oluşması**
- **Çökelti oluşması**

Bu liste yararlıdır. Ama nasıl kullanılacağını bilmek, listeyi ezberlemekten daha önemlidir.

**Kural 1 — Belirtiler ipucudur.** Bir olayda bu belirtilerden biri görülüyorsa, kimyasal değişim **olabilir.** Kesin değildir.

**Kural 2 — Birden çok belirti daha güçlü ipucudur.** Bir olayda hem renk değişiyor hem koku oluşuyor hem de ısı açığa çıkıyorsa, kimyasal değişim olma ihtimali belirgin biçimde artar.

**Kural 3 — Karar ölçütle verilir.** İpuçları ne kadar güçlü olursa olsun, son soru hep aynıdır: **yeni bir madde oluştu mu?**

Şimdi her belirtinin yanıltabileceği durumu görelim; asıl öğrenilmesi gereken bu.

**Gaz çıkışı yanıltabilir.** Su kaynarken buhar çıkar — bu bir hâl değişimidir, fizikseldir.

**Renk değişimi yanıltabilir.** Bir sıvıya boya damlattığında renk değişir; ama bu bir karışımdır, maddelerin kimliği değişmemiştir.

**Isı değişimi yanıltabilir.** Buz erirken ısı alır, su donarken ısı verir. İkisi de fizikseldir.

**Koku yanıltabilir.** Bir parfüm şişesi açıldığında koku yayılır; bu buharlaşmadır, fizikseldir.

Dört örnek de aynı dersi veriyor: **belirti gördüğünde hemen karar verme; ölçütü uygula.**

Şimdi bunu bir soru çözme alışkanlığına çevirelim. Bir soruda olay anlatıldığında şu sırayı izle:

1. Başlangıçtaki maddeyi ve sonuçtaki maddeyi adlandır.
2. İkisi aynı madde mi, farklı madde mi karar ver.
3. Belirtilere bak: kararını destekliyorlar mı?
4. Destekliyorlarsa cevabını yaz; desteklemiyorlarsa 1. adıma dön ve adlandırmanı gözden geçir.

Dördüncü adım önemlidir. Ölçütle belirtiler çelişiyorsa, çoğu zaman sonuçtaki maddeyi yanlış adlandırmışsındır.`,
        },
        {
          id: 'lgs-fen-degisim-belirtiler-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı belirti, iki farklı sonuç',
          columns: ['Belirti', 'Kimyasal değişim örneği', 'Fiziksel değişim örneği', 'Ders'],
          rows: [
            ['Gaz çıkışı', 'Bir maddenin yanması sırasında gaz oluşması', 'Suyun kaynarken buhar vermesi', 'Gaz çıkışı tek başına yetmez'],
            ['Renk değişimi', 'Demirin paslanması', 'Suya boya karıştırılması', 'Renk değişimi tek başına yetmez'],
            ['Isı değişimi', 'Yanma sırasında ısı açığa çıkması', 'Suyun donarken ısı vermesi', 'Isı değişimi tek başına yetmez'],
            ['Koku oluşması', 'Sütün ekşimesi', 'Parfümün buharlaşması', 'Koku tek başına yetmez'],
          ],
          caption:
            'Her satırda aynı belirti iki farklı değişim türünde görülüyor. Bu tablo, belirti listesinin neden kanıt olmadığını tek bakışta gösterir.',
        },
        {
          id: 'lgs-fen-degisim-belirtiler-karar',
          type: 'decision_tree',
          title: 'Fiziksel mi, kimyasal mı?',
          intro: 'Soruları sırayla uygula. İlk soru kararı verir; ikincisi kararı sınar.',
          checks: [
            {
              question: 'Olaydan sonra elinde başlangıçtakiyle aynı madde mi var?',
              yes: 'Aynı maddeyse değişim fizikseldir; karar verildi.',
              no: 'Yeni bir madde oluştuysa değişim kimyasaldır; bir kimyasal tepkime gerçekleşmiştir.',
            },
            {
              question: 'Belirtiler (renk, gaz, ısı, koku) kararını destekliyor mu?',
              yes: 'Destekliyorsa kararın güçlenir; cevabını yazabilirsin.',
              no: 'Desteklemiyorsa sonuçtaki maddeyi doğru adlandırdığından emin ol.',
            },
            {
              question: 'Olay bir hâl değişimi mi (erime, donma, buharlaşma, yoğuşma)?',
              yes: 'Hâl değişimiyse kesinlikle fizikseldir; kimlik değişmez.',
              no: 'Hâl değişimi değilse birinci sorunun cevabına göre karar ver.',
            },
          ],
          takeaway:
            'Tek cümlelik kural: **kimlik korunduysa fiziksel, yeni madde oluştuysa kimyasal.**',
        },
      ],
    },

    {
      id: 'lgs-fen-degisim-tepkime',
      title: 'Kimyasal tepkime: yeni madde nasıl oluşuyor?',
      lead: 'Kazanım F.8.4.3.1 şunu ister: bileşiklerin kimyasal tepkime sonucunda oluştuğunu bilmek.',
      blocks: [
        {
          id: 'lgs-fen-degisim-tepkime-anlatim',
          type: 'prose',
          body: `Kimyasal değişime yol açan olaya **kimyasal tepkime** denir.

Bir kimyasal tepkimede başlangıçtaki maddeler etkileşime girer ve sonuçta **başlangıçtakilerden farklı özelliklere sahip yeni maddeler** oluşur.

Buradaki anahtar sözcük “farklı özellikler”dir. Yeni oluşan madde, başlangıçtaki maddelerin yalnız bir karışımı değildir; kendi özellikleri olan ayrı bir maddedir.

Bunu bir örnekle netleştirelim. Demir paslandığında oluşan pas, demirden farklı bir maddedir: rengi farklıdır, sertliği farklıdır, dayanıklılığı farklıdır. Pas “biraz bozulmuş demir” değildir; başka bir maddedir.

Aynı şey yanma için de geçerlidir. Kâğıt yandığında oluşan kül, “küçülmüş kâğıt” değildir; kimliği farklı bir maddedir.

Şimdi bir ayrım daha kuralım — bu, sorularda sık ölçülür.

**Karışım oluşturmak kimyasal tepkime değildir.** Şekeri suya attığında bir karışım oluşur; ama şeker hâlâ şeker, su hâlâ sudur. Yeni bir madde oluşmamıştır. Karışımların oluşumu **fiziksel** bir olaydır.

**Bileşik oluşumu ise kimyasal bir tepkimedir.** İki ya da daha fazla farklı element kimyasal tepkimeye girerek **bileşik** oluşturur ve bileşik, kendisini oluşturan elementlerden farklı özellikler gösterir.

En tanıdık örnek sudur. Su, hidrojen ile oksijenin tepkimeye girmesiyle oluşan bir bileşiktir. Özelliklerini karşılaştır: hidrojen de oksijen de oda sıcaklığında gazdır, su ise sıvıdır. Hidrojen yanıcıdır, oksijen yanmayı destekler; su ise yangın söndürmede kullanılır. Bileşik, kendisini oluşturan elementlerin “toplamı” gibi davranmaz; **yeni bir maddedir.**

Sofra tuzu da böyledir: kendisini oluşturan elementlerin ikisi de tek başına tehlikeli maddelerdir, ama oluşan bileşik her gün yemeğe kattığımız tuzdur.

Bu fark önemlidir: karışımda maddeler kimliklerini korur, bileşik oluşumunda ise yeni bir madde meydana gelir.

Şimdi bu dersin en önemli kapsam uyarısına gelelim.

*Program kimyasal tepkime denklemlerine **formüller kullanılarak girilmemesini** açıkça ister.* Yani:

- Kimyasal denklem yazman istenmez.
- Denklem denkleştirmen istenmez.
- Formül ezberlemen istenmez.

Senden istenen şudur: **bileşiklerin kimyasal tepkime sonucunda oluştuğunu bilmek.**

Bu sınırı bilmek çalışma zamanını doğrudan korur. Piyasadaki bazı kaynaklar bu konuda denklem çalışmaları veriyor; bunlar 8. sınıf kazanımının dışındadır.

Son olarak günlük hayattan kimyasal tepkime örneklerini toplayalım: yanma olayları, demirin paslanması, sütün ekşimesi, meyvelerin çürümesi, ekmeğin küflenmesi, yiyeceklerin sindirilmesi, bitkilerin besin üretmesi.

Bu örneklerin hepsinde ortak olan şey aynıdır: olayın sonunda başlangıçtakinden **farklı bir madde** vardır.`,
        },
        {
          id: 'lgs-fen-degisim-tepkime-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Karışım oluşumu ile kimyasal tepkime',
          columns: ['Karışım oluşumu', 'Kimyasal tepkime'],
          rows: [
            { label: 'Maddelerin kimliği', values: ['Korunur', 'Değişir'] },
            { label: 'Yeni madde oluşur mu?', values: ['Oluşmaz', 'Oluşur'] },
            { label: 'Değişimin türü', values: ['Fiziksel', 'Kimyasal'] },
            { label: 'Bileşenler ayrılabilir mi?', values: ['Fiziksel yollarla ayrılabilir', 'Fiziksel yollarla ayrılamaz'] },
            { label: 'Örnek', values: ['Şekerin suda çözünmesi', 'Demirin paslanması'] },
          ],
          insight:
            'Dördüncü satır pratik bir sınama sunar: bileşenleri süzme, buharlaştırma gibi fiziksel yollarla ayırabiliyorsan ortada bir karışım vardır, tepkime değil.',
        },
        {
          id: 'lgs-fen-degisim-tepkime-hafiza',
          type: 'memory',
          title: 'Tek cümlede ders',
          body:
            '**Kimlik korunduysa fiziksel, yeni madde oluştuysa kimyasal.** Belirtiler ipucudur; ölçüt kimliktir.',
        },
        {
          id: 'lgs-fen-degisim-tepkime-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Sorularda sık kullanılan bir kalıp: birkaç olay verilir ve “hangileri kimyasal değişimdir?” diye sorulur. Her olay için tek tek ölçütü uygula; toplu bakma. Bir olayda yanılmak bütün seçeneği elemene yol açar.',
        },
      ],
    },

    {
      id: 'lgs-fen-degisim-kutle',
      title: 'Kütlenin korunumu: madde kaybolmaz, dönüşür',
      lead: 'Programın konu/kavram listesinde “kütlenin korunumu” açıkça yer alır. Tepkimede yeni madde oluşur ama madde yoktan var olmaz, vardan yok olmaz.',
      blocks: [
        {
          id: 'lgs-fen-degisim-kutle-anlatim',
          type: 'prose',
          body: `Kimyasal tepkimede maddelerin kimliği değişir. Peki **kütlesi** de değişir mi?

Cevap: **Hayır.** Kapalı bir ortamda gerçekleşen kimyasal tepkimede, tepkimeye giren maddelerin toplam kütlesi, tepkime sonunda oluşan maddelerin toplam kütlesine **eşittir.** Buna **kütlenin korunumu** denir.

Madde yoktan var olmaz, vardan yok olmaz; yalnız **başka maddelere dönüşür.**

İlk bakışta bu, günlük gözlemlerle çelişiyor gibi görünür. İki örneğe bakalım.

**Örnek 1 — Kâğıt yanınca geriye kalan kül, kâğıttan çok daha hafiftir.** Kütle kayboldu mu? Hayır. Yanma sırasında oluşan maddelerin bir kısmı **gazdır** ve havaya karışmıştır. Kül ile havaya karışan gazların kütleleri toplandığında, kâğıt ile yanma için kullanılan havanın kütlesine eşit olur. Açık ortamda gazları tartamadığımız için kütle “azalmış” gibi görünür.

**Örnek 2 — Demir paslandığında pas, demirden daha ağırdır.** Kütle yoktan mı oluştu? Hayır. Paslanma sırasında demir, **havadaki bir gazla** birleşir. Havadan alınan bu gazın kütlesi pasa eklendiği için pas daha ağırdır.

İki örneğin ortak dersi şudur: **kütle değişmiş gibi görünüyorsa, ortama gaz girmiş ya da ortamdan gaz çıkmıştır.**

Bunu göstermenin en temiz yolu tepkimeyi **kapalı bir kapta** yapmaktır. Örneğin sirke ile karbonat bir şişenin içinde, ağzı balonla kapatılarak tepkimeye sokulursa gaz çıkar ve balon şişer; ama şişe–balon düzeneğinin toplam kütlesi **değişmez.** Aynı tepkime ağzı açık bir kapta yapılırsa gaz havaya karışır ve tartıdaki değer azalır.

Kapalı ile açık düzenek arasındaki bu fark, kütlenin gerçekten korunduğunu; kaybolmuş gibi görünen kütlenin yalnız **ölçüm dışında kaldığını** gösterir.

*Kapsam notu: bu düzeyde kütle hesabı yapılmaz ve denklem yazılmaz. Senden istenen, kütlenin korunduğunu bilmek ve “kütle değişti” gibi görünen durumları doğru açıklayabilmektir.*`,
        },
        {
          id: 'lgs-fen-degisim-kutle-tablo',
          type: 'table',
          interactive: true,
          title: 'Kütle değişmiş gibi görünen üç durum',
          columns: ['Durum', 'Gözlenen', 'Gerçekte ne oldu?', 'Toplam kütle korundu mu?'],
          rows: [
            ['Kâğıdın açık ortamda yanması', 'Kül kâğıttan hafif', 'Oluşan gazlar havaya karıştı', 'Evet — gazlar tartılmadı'],
            ['Demirin paslanması', 'Pas demirden ağır', 'Demir havadaki bir gazla birleşti', 'Evet — havadan gelen gaz eklendi'],
            ['Sirke ve karbonat, ağzı açık kap', 'Tartı değeri azaldı', 'Oluşan gaz kaptan çıktı', 'Evet — gaz kaptan çıktı'],
            ['Sirke ve karbonat, ağzı balonla kapalı kap', 'Tartı değeri değişmedi', 'Gaz balonda tutuldu', 'Evet — ve doğrudan görüldü'],
          ],
          caption:
            'Dört satırın dördünde de kütle korunmuştur. Yalnız son satırda bütün maddeler tartının üzerinde kaldığı için bu, doğrudan gözlenebilmiştir.',
        },
        {
          id: 'lgs-fen-degisim-kutle-tuzak',
          type: 'trap',
          title: 'Yanmada maddenin yok olduğunu sanmak',
          wrong: 'Kâğıt yanınca kütlesinin büyük kısmı yok olur; geriye yalnız kül kalır.',
          right: 'Madde yok olmaz; yanma sırasında oluşan gazlar havaya karışır. Kapalı bir ortamda bütün ürünler tartılsaydı toplam kütlenin değişmediği görülürdü.',
          body: 'Kütle değişmiş gibi görünüyorsa önce şu soruyu sor: ortama gaz girdi mi, ortamdan gaz çıktı mı? Cevap çoğu zaman oradadır.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Olayı sınıflandır',
      prompt:
        'Aşağıdaki olayları fiziksel ya da kimyasal değişim olarak sınıflandır ve her biri için gerekçeni yaz: (a) buzun erimesi, (b) demirin paslanması, (c) camın kırılması.',
      steps: [
        { title: '1. Buz eridiğinde', body: 'Başlangıçta buz vardı, sonunda su var. Buz da su da aynı maddedir; yalnız hâl değişti.' },
        { title: '2. (a) için karar ver', body: 'Kimlik değişmedi → **fiziksel değişim.** Hâl değişimleri fizikseldir.' },
        { title: '3. Demir paslandığında', body: 'Başlangıçta demir vardı, sonunda pas var. Pas demirden farklı özelliklere sahip bir maddedir.' },
        { title: '4. (b) için karar ver', body: 'Yeni madde oluştu → **kimyasal değişim.** Bir kimyasal tepkime gerçekleşmiştir.' },
        { title: '5. Cam kırıldığında', body: 'Başlangıçta cam vardı, sonunda cam parçaları var. Parçaların her biri hâlâ camdır.' },
        { title: '6. (c) için karar ver', body: 'Kimlik değişmedi → **fiziksel değişim.** Geri döndürmesi zor olsa da ölçüt kimliktir, geri dönebilirlik değil.' },
      ],
      answer: '(a) fiziksel, (b) kimyasal, (c) fiziksel.',
      takeaway:
        '(c) şıkkı önemli: geri döndürmesi zor olan her değişim kimyasal değildir. Ölçüt kimliktir.',
    },
    {
      title: 'Seviye 2 — Belirtiyi sına',
      prompt:
        'Bir öğrenci “Su kaynarken gaz çıkıyor, öyleyse kaynama kimyasal bir değişimdir.” diyor. Bu çıkarımı değerlendir.',
      steps: [
        { title: '1. Öğrencinin gerekçesini yaz', body: 'Gerekçe şu: gaz çıkışı gözlendi, gaz çıkışı kimyasal değişimin belirtisidir.' },
        { title: '2. Belirtinin statüsünü hatırla', body: 'Belirtiler ipucudur, kanıt değildir. Aynı belirti fiziksel değişimlerde de görülebilir.' },
        { title: '3. Ölçütü uygula', body: 'Başlangıçta su vardı. Sonunda su buharı var. Su buharı da sudur; yalnız hâl değişmiştir.' },
        { title: '4. Karar ver', body: 'Yeni bir madde oluşmadı → değişim **fizikseldir.** Kaynama bir hâl değişimidir.' },
        { title: '5. Hatayı adlandır', body: 'Öğrenci belirtiyi kanıt yerine koymuş. Gaz çıkışı gördüğü için ölçütü uygulamadan karar vermiş.' },
        { title: '6. Doğru gerekçeyi kur', body: 'Doğru gerekçe şudur: kaynamada suyun kimliği değişmez, yalnız hâli değişir; bu yüzden kaynama fiziksel bir değişimdir.' },
      ],
      answer:
        'Çıkarım yanlıştır. Kaynama bir hâl değişimidir ve fizikseldir; çıkan buhar da sudur, yeni bir madde değildir.',
      takeaway:
        'Belirti gördüğünde karar verme; ölçütü uygula. Belirtiler yalnız kararını destekler.',
    },
    {
      title: 'Seviye 3 — Karışımı tepkimeden ayır',
      prompt:
        'Bir öğrenci tuzu suda çözüyor ve “Tuz kayboldu, demek ki kimyasal tepkime oldu ve yeni bir madde oluştu.” diyor. Bu değerlendirmeyi düzelt ve iddiayı sınayacak bir yol öner.',
      steps: [
        { title: '1. Gözlemi kabul et', body: 'Gözlem doğru: tuz gözle görünmez hâle geldi. Ama gözlem ile yorum aynı şey değildir.' },
        { title: '2. Görünmemeyi yorumla', body: 'Görünmemek yok olmak değildir. Tuz suyun içinde çok küçük parçacıklar hâlinde dağılmıştır; karışımın içindedir.' },
        { title: '3. Ölçütü uygula', body: 'Tuzun kimliği değişti mi? Hayır — karışımın içinde hâlâ tuz olarak bulunuyor. Öyleyse yeni madde oluşmamıştır.' },
        { title: '4. Kararı yaz', body: 'Çözünme bir **fiziksel değişimdir**; kimyasal tepkime değildir.' },
        { title: '5. Sınama yolunu öner', body: 'Karışımdaki su buharlaştırılır. Kapta tuz geri kalırsa, tuzun kimliğini koruduğu gösterilmiş olur.' },
        { title: '6. Neden bu yol işe yarar?', body: 'Çünkü karışımların bileşenleri buharlaştırma gibi **fiziksel** yollarla ayrılabilir. Kimyasal tepkimeyle oluşmuş bir maddede bu mümkün olmazdı.' },
      ],
      answer:
        'Değerlendirme yanlıştır; çözünme fiziksel bir değişimdir. Suyu buharlaştırmak, tuzun kimliğini koruduğunu gösterir.',
      takeaway:
        'Bir iddiayı sınamanın yolu, onu gözlenebilir bir sonuca bağlamaktır: “doğruysa şunu görmeliyim.”',
    },
  ],

  dailyLife: {
    title: 'Bu ayrım günlük hayatta nerede karşına çıkıyor?',
    body:
      'Aşağıdaki olayların hepsinde aynı soruyu sorabilirsin: madde hâlâ aynı madde mi?',
    links: [
      'Yiyeceklerin bozulması ve küflenmesi kimyasal değişimdir.',
      'Buzdolabında suyun donması fiziksel değişimdir.',
      'Demir eşyaların paslanması kimyasal değişimdir; boya ile kaplanması bunu yavaşlatır.',
      'Çamaşırların kuruması suyun buharlaşmasıdır, yani fiziksel değişimdir.',
      'Yemek pişirmek sırasında hem fiziksel hem kimyasal değişimler görülür.',
      'Ekmeğin bayatlaması ile küflenmesi farklı olaylardır; ölçütü ayrı ayrı uygula.',
    ],
  },

  questionClue: {
    concept: 'Fiziksel–kimyasal değişim sorusu',
    statement:
      'Soruda birkaç olay sıralanıp sınıflandırma isteniyorsa ya da bir gözlem verilip yorum isteniyorsa, ölçülen şey kimlik ölçütüdür.',
    clues: [
      'Birden çok olayın maddeler hâlinde sıralanması',
      '“Hangileri kimyasal değişimdir?” kalıbı',
      'Renk, gaz, koku, ısı gibi belirtilerin vurgulanması',
      'Bir öğrenci çıkarımının verilip değerlendirilmesinin istenmesi',
      'Geri dönebilirlikten söz edilmesi',
    ],
    reasoning:
      'Bu işaretler her olay için ayrı ayrı ölçüt uygulamanı ister: başlangıçtaki maddeyi ve sonuçtaki maddeyi adlandır, ikisini karşılaştır.',
    boundary:
      'Bu ipuçlarını “gaz çıktıysa kimyasal” gibi bir kısayola çevirme; bu, konunun en yaygın yanılgısıdır. Ayrıca kimyasal denklem yazmanın bu düzeyde istenmediğini unutma.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar F.8.4.2.1 ve F.8.4.3.1 kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Verilen olayların fiziksel ya da kimyasal olarak sınıflandırılması',
      'Bir gözlem kaydından değişimin türünün çıkarılması',
      'Belirtilerin tek başına yeterli olup olmadığının sorgulanması',
      'Bir öğrenci çıkarımındaki hatanın bulunması',
      'Karışım oluşumu ile kimyasal tepkimenin ayırt edilmesi',
      'Bileşik oluşumu ya da kütlenin korunumuyla ilgili bir gözlemin yorumlanması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Bir bardak kırıldığında geri döndürmek çok zordur. Bu, bardağın kırılmasının kimyasal bir değişim olduğunu gösterir mi?',
      hint: 'Ölçüt geri dönebilirlik mi, kimlik mi?',
      answer:
        'Göstermez. Ölçüt geri dönebilirlik değil, **maddenin kimliğidir.** Bardak kırıldığında parçaların her biri hâlâ camdır; yeni bir madde oluşmamıştır. Bu yüzden kırılma bir **fiziksel değişimdir.** Geri dönebilirlik kullanışlı bir ipucudur ama kesin bir ölçüt değildir; bazı fiziksel değişimleri geri döndürmek de kolay olmayabilir.',
    },
    {
      prompt:
        'Şeker suda çözündüğünde gözden kayboluyor. Şeker yok mu oldu? Cevabını sınayacak bir yol öner.',
      hint: 'Karışımın bileşenleri nasıl ayrılır?',
      answer:
        'Yok olmadı. Şeker suyun içinde çok küçük parçacıklar hâlinde dağıldığı için gözle görünmez; ama kimliği değişmemiştir ve karışımın içinde hâlâ şeker olarak bulunur. Bunu sınamanın yolu suyu **buharlaştırmaktır**: kapta şeker geri kalır. Karışımların bileşenleri fiziksel yollarla ayrılabildiği için bu, çözünmenin fiziksel bir değişim olduğunu gösterir.',
    },
    {
      prompt:
        'Kimyasal tepkime sonucunda oluşan madde, başlangıçtaki maddelerin bir karışımı mıdır? Neden?',
      hint: 'Karışımda kimlikler korunur muydu?',
      answer:
        'Değildir. Kimyasal tepkime sonucunda oluşan madde, başlangıçtaki maddelerden **farklı özelliklere sahip yeni bir maddedir.** Karışımda maddeler kimliklerini korur ve fiziksel yollarla ayrılabilir; kimyasal tepkimede ise kimlikler değişir ve oluşan madde fiziksel yollarla bileşenlerine ayrılamaz. Örneğin pas, demir ile başka bir maddenin yan yana durması değildir; kendi özellikleri olan ayrı bir maddedir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey liste değil, ölçüt uygulama',
    body:
      'Kazanımın fiili “çeşitli olayları **gözlemleyerek** açıklar” biçiminde; ikinci kazanım ise “bileşiklerin kimyasal tepkime sonucunda oluştuğunu **bilir**” diyor ve denklemlere formüllerle girilmemesini şart koşuyor. İkisi birlikte şunu söyler: bu konuda senden denklem ya da hesap beklenmez; verilen bir olayı doğru sınıflandırman ve gerekçelendirmen beklenir. MEB merkezî sınav kılavuzu da soruların yorumlama ve analiz becerilerini ölçecek nitelikte hazırlandığını belirtir.',
    measures: [
      'Bir olayda maddenin kimliğinin değişip değişmediğini belirleyebilme',
      'Fiziksel ve kimyasal değişimi gerekçesiyle ayırt edebilme',
      'Belirtilerin ipucu olduğunu, kanıt olmadığını bilme',
      'Hâl değişimlerinin fiziksel olduğunu açıklayabilme',
      'Karışım oluşumu ile kimyasal tepkimeyi ayırt edebilme',
      'Bileşiklerin kimyasal tepkimeyle oluştuğunu ve kütlenin korunduğunu açıklayabilme',
    ],
  },

  simulationTable: {
    title: 'Dört olayın gözlem kaydı',
    columns: ['Olay', 'Başlangıçtaki madde', 'Gözlenen belirti', 'Sonuçtaki madde'],
    rows: [
      ['1', 'Su', 'Kabarcıklanma ve buhar', 'Su buharı'],
      ['2', 'Demir', 'Renk değişimi, yüzeyde pürüz', 'Pas'],
      ['3', 'Şeker', 'Madde gözden kayboldu', 'Şekerli su karışımı'],
      ['4', 'Süt', 'Koku ve kıvam değişimi', 'Ekşimiş süt'],
    ],
    caption: 'Dört olay da aynı sürede gözlenmiş ve kayıtlar aynı biçimde tutulmuştur.',
  },

  simulation: {
    title: 'Mini uygulama — özgün gözlem kaydı',
    passage: `Bir öğrenci dört olayı gözlemleyip yukarıdaki kaydı tutuyor.

Öğrenci, kayda bakarak hangi olaylarda **yeni bir madde oluştuğunu** belirlemek istiyor.`,
    question: 'Bu kayda göre hangi olaylarda kimyasal değişim gerçekleşmiştir?',
    options: [
      {
        text: 'Yalnız 2 ve 4',
        explanation:
          'Doğru cevap. 2. olayda demirden pas, 4. olayda sütten ekşimiş süt oluşmuş; ikisinde de sonuçtaki madde başlangıçtakinden farklıdır. 1’de su buharı yine sudur, 3’te şeker karışımın içinde şeker olarak kalır.',
      },
      {
        text: '1, 2 ve 4',
        explanation:
          '1. olayda kabarcıklanma ve buhar görülmesi kimyasal değişim izlenimi verir; ama su buharı da sudur. Kimlik değişmediği için bu bir hâl değişimidir ve fizikseldir.',
      },
      {
        text: '2, 3 ve 4',
        explanation:
          '3. olayda şeker gözden kaybolmuştur; ama kimliği değişmemiştir ve karışımın içinde hâlâ şeker olarak bulunur. Çözünme fiziksel bir değişimdir.',
      },
      {
        text: 'Yalnız 2',
        explanation:
          '2. olay gerçekten kimyasaldır; ancak 4. olayda da sütün kimliği değişmiş ve farklı bir madde oluşmuştur. Yalnız birini seçmek 4. satırı gözden kaçırmak olur.',
      },
      {
        text: 'Belirti sütununa bakılarak karar verilemez; dördü de kimyasal olabilir',
        explanation:
          'Karar belirti sütununa bakılarak değil, başlangıç ve sonuç maddelerinin karşılaştırılmasıyla verilir. Tabloda bu iki sütun da verildiği için çıkarım yapmak mümkündür.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru dört satırı tek tek değerlendirmeyi istiyor. Yöntem: belirti sütununu atla, doğrudan ilk ve son sütunu karşılaştır. Aynı maddeyse fiziksel, farklı maddeyse kimyasal.',
    critical_point:
      'Kritik nokta 1. ve 3. satırlardır. İkisinde de belirti sütunu güçlü bir izlenim verir (kabarcıklanma, maddenin kaybolması); ama son sütun okunduğunda kimliğin korunduğu görülür. Belirtiye bakarak karar veren öğrenci bu iki satırda yanılır.',
    takeaway:
      'Tabloda hangi sütunun karar verdiğini bilmek gerekir: belirti sütunu ipucu, madde sütunları ölçüttür.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Fiziksel ve kimyasal değişimi ayıran temel ölçüt aşağıdakilerden hangisidir?',
      options: [
        'Değişimin geri döndürülebilir olması',
        'Maddenin kimliğinin değişip değişmemesi',
        'Olayda ısı açığa çıkıp çıkmaması',
        'Olayın hızlı ya da yavaş gerçekleşmesi',
      ],
      answer_index: 1,
      explanation:
        'Temel ölçüt maddenin kimliğidir: kimlik korunuyorsa değişim fiziksel, yeni bir madde oluşuyorsa kimyasaldır. Geri dönebilirlik ve ısı değişimi yararlı ipuçlarıdır ama tek başına ölçüt değildir; ikisi de hem fiziksel hem kimyasal değişimlerde görülebilir. Olayın hızı ise değişimin türüyle ilgili bir bilgi vermez.',
    },
    {
      purpose: 'apply',
      question: 'Aşağıdaki olaylardan hangisi kimyasal değişime örnektir?',
      options: [
        'Buzun erimesi',
        'Tuzun suda çözünmesi',
        'Sütün ekşimesi',
        'Çamaşırın kuruması',
      ],
      answer_index: 2,
      explanation:
        'Sütün ekşimesinde sütün kimliği değişir ve farklı özelliklere sahip yeni bir madde oluşur; bu bir kimyasal değişimdir. Buzun erimesi ve çamaşırın kuruması birer hâl değişimidir; madde aynı kalır. Tuzun çözünmesinde de tuz karışımın içinde kimliğini korur ve su buharlaştırılarak geri elde edilebilir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Bir olayda renk değişiyorsa o olay mutlaka kimyasal değişimdir.” diyor. Bu ifadenin hatası nedir?',
      options: [
        'Belirtileri kanıt yerine koymak',
        'Renk değişiminin hiçbir zaman kimyasal değişimde görülmediğini sanmak',
        'Hâl değişimlerini kimyasal saymak',
        'Kimyasal tepkimede yeni madde oluşmadığını sanmak',
      ],
      answer_index: 0,
      explanation:
        'Renk değişimi kimyasal değişimin sık görülen belirtilerinden biridir; ama tek başına kanıt değildir. Örneğin bir sıvıya boya karıştırıldığında da renk değişir, oysa maddelerin kimliği değişmemiştir ve ortada bir karışım vardır. Karar her zaman ölçütle verilir: yeni bir madde oluştu mu?',
    },
  ],

  summary: [
    'Fiziksel değişimde maddenin kimliği değişmez; yalnız görünüş, biçim, boyut ya da hâl değişir.',
    'Kimyasal değişimde maddenin kimliği değişir ve yeni maddeler oluşur.',
    'Ayrımın tek ölçütü şudur: yeni bir madde oluştu mu?',
    'Hâl değişimleri (erime, donma, buharlaşma, yoğuşma) fiziksel değişimdir.',
    'Çözünme fiziksel bir değişimdir; madde karışımın içinde kimliğini korur.',
    'Renk, gaz, ısı ve koku gibi belirtiler ipucudur; tek başına kanıt değildir.',
    'Aynı belirtiler fiziksel değişimlerde de görülebilir; bu yüzden karar ölçütle verilir.',
    'Geri dönebilirlik kullanışlı bir ipucudur ama kesin bir ölçüt değildir.',
    'Kimyasal değişime yol açan olaya kimyasal tepkime denir.',
    'Kimyasal tepkime sonucunda başlangıçtakilerden farklı özelliklere sahip yeni maddeler oluşur.',
    'Karışım oluşumu fiziksel, bileşik oluşumu kimyasal bir olaydır.',
    'Bileşikler kimyasal tepkime sonucunda oluşur ve kendilerini oluşturan elementlerden farklı özellikler gösterir.',
    'Kapalı ortamdaki kimyasal tepkimede toplam kütle korunur; madde yok olmaz, başka maddelere dönüşür.',
    'Bu düzeyde kimyasal denklem yazılması istenmez.',
  ],

  next: [
    'Asitler ve Bazlar: Özellikler, pH, Güvenlik (F.8.4.4.1–F.8.4.4.6)',
    'Asit Yağmurları (F.8.4.4.7)',
    'Maddenin Isı ile Etkileşimi ve Hâl Değişim Grafikleri (F.8.4.5.1–F.8.4.5.4)',
  ],
})

export default lesson
