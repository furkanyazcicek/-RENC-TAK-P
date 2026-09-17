import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Cümlenin Öğeleri
 * Kazanım : T.8.4.18
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * Kazanım: "Cümlenin ögelerini ayırt eder." Program ek bir sınırlama
 * yazmaz. Ders, soruları YÜKLEME sorma disiplini üzerine kurulur;
 * çünkü öge hatalarının neredeyse tamamı soruyu yanlış yere sormaktan
 * doğar.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-cumlenin-ogeleri',
  topic: 'Cümlenin Öğeleri',
  order: 1,
  title: 'Cümlenin Ögeleri',
  subtitle:
    'Her soru yükleme sorulur. Soruyu başka bir sözcüğe sorduğun an cevabın da yanlış olur.',
  minutes: 44,
  kazanimlar: [
    { kod: 'T.8.4.18', metin: 'Cümlenin ögelerini ayırt eder.' },
  ],
  prerequisites: [
    { topic: 'Fiilimsiler', why: 'Yan cümlecikleri bir bütün olarak ele almadan öge ayırmak mümkün değildir.' },
    { topic: 'İsim, sıfat ve zarf kavramları', why: 'Tümleçleri ayırt etmek için sözcük türlerini tanımak gerekir.' },
  ],
  outcomes: [
    'Bir cümlenin yüklemini bulup öteki ögeleri ona sorarak belirleyebileceksin.',
    'Özne ile belirtisiz nesneyi “ne” tuzağına düşmeden ayırabileceksin.',
    'Gerçek özne, sözde özne ve gizli özneyi tanıyabileceksin.',
    'Dolaylı tümleç ile zarf tümlecini soru ekleriyle ayırabileceksin.',
    'Söz öbeklerini ve yan cümlecikleri bölmeden tek bir öge olarak işaretleyebileceksin.',
  ],

  opening: {
    title: 'Her şey yüklemden başlar',
    lead: 'Öge sorularında yapılan hataların büyük bölümü tek bir sebepten doğar: soruyu yükleme değil, başka bir sözcüğe sormak.',
    body: `Şu cümleye bakalım: “Ahmet dün akşam kardeşine kitap okudu.”

Öge bulmaya nereden başlarsın? Cevap her zaman aynıdır: **yüklemden.** Yüklem, cümledeki yargıyı taşıyan ögedir ve öteki bütün ögeler ona bağlanır. Bu cümlede yüklem *okudu*.

Şimdi soruları **yükleme** soruyoruz:
- *Okudu* → **kim** okudu? → **Ahmet** (özne)
- *Okudu* → **ne** okudu? → **kitap** (nesne)
- *Okudu* → **kime** okudu? → **kardeşine** (dolaylı tümleç)
- *Okudu* → **ne zaman** okudu? → **dün akşam** (zarf tümleci)

Dört soru, dört öge. Hepsi yükleme soruldu.

Şimdi yanlışını görelim. Öğrenci “kardeşine” sözcüğünü görüp “kimin kardeşi?” diye sorarsa, cevabı cümlede bulamaz ve ögeyi yanlış adlandırır. Ya da “kitap” sözcüğüne bakıp “ne kitabı?” diye sorarsa yine kaybolur. **Sorular ögelere değil, yükleme sorulur.**

MEB 8. sınıf programındaki **T.8.4.18** kazanımı kısa ve nettir: “Cümlenin ögelerini ayırt eder.” Kazanımın kısa olması konuyu kolay yapmaz; çünkü ayırt etme işi bir disiplin ister.

Bu derste o disiplini kuracağız. Önce yüklemden başlama alışkanlığını, sonra özne ile nesneyi ayıran testi, ardından tümleçlerin soru eklerini ve son olarak öbekleri bölmeme kuralını çalışacağız.`,
  },

  concepts: [
    {
      term: 'Yüklem',
      body: 'Cümlede yargıyı taşıyan ögedir; cümlenin temel ögesidir ve bulunmadan cümle olmaz. Fiil olabilir (“okudu”), isim soylu bir sözcük + ek fiil de olabilir (“öğrenciydi”).',
    },
    {
      term: 'Özne',
      body: 'Yüklemde bildirilen işi yapan ya da olan ögedir. Yükleme **“kim / ne”** sorusu sorularak bulunur: “Ahmet okudu.” → Kim okudu? → Ahmet.',
    },
    {
      term: 'Nesne',
      body: 'Yüklemde bildirilen işten etkilenen ögedir. **Belirtili nesne** hâl eki alır ve “neyi/kimi” sorusuna cevap verir; **belirtisiz nesne** ek almaz ve “ne” sorusuna cevap verir.',
    },
    {
      term: 'Dolaylı tümleç',
      body: 'Yüklemi yer, yön ya da kime/neye yöneldiği bakımından tamamlar. Soruları: **nereye, nerede, nereden, kime, kimde, kimden.** Ek olarak “-e, -de, -den” hâl eklerini alır.',
    },
    {
      term: 'Zarf tümleci',
      body: 'Yüklemi durum, zaman, sebep, miktar ya da koşul bakımından tamamlar. Soruları: **nasıl, ne zaman, niçin, ne kadar.** Hâl eki almaz.',
    },
    {
      term: 'Cümle dışı unsur',
      body: 'Cümlenin yargısına bağlanmayan, genellikle virgülle ayrılan seslenmeler, bağlaçlar ve ara sözlerdir: “**Ahmet**, gel buraya.” Burada seslenme cümle dışı unsurdur.',
    },
  ],

  why: {
    question: 'Neden “ne” sorusu tek başına güvenilmez?',
    body: `Çünkü “ne” sorusu iki farklı ögeyi birden bulabilir: hem **özneyi** hem **belirtisiz nesneyi**.

Şu iki cümleyi karşılaştır:

“Masadan **kitap** düştü.” → Ne düştü? → kitap. Burada kitap düşme işini **yapan** şeydir: **özne**.

“Ahmet **kitap** okudu.” → Ne okudu? → kitap. Burada kitap okuma işinden **etkilenen** şeydir: **belirtisiz nesne**.

İki cümlede de “ne” sorusu aynı sözcüğü buldu; ama ögeler farklı. Bu yüzden “ne” sorusundan sonra bir doğrulama testi gerekir.

**Doğrulama testi: hâl eki denemesi.** Bulduğun sözcüğe “-i” hâl eki getir ve cümleyi yeniden oku. Cümle bozulmadan ayakta kalıyorsa **nesnedir**; anlam değişiyor ya da cümle bozuluyorsa **öznedir**.

- “Ahmet kitap okudu.” → “Ahmet **kitabı** okudu.” Cümle ayakta → **nesne**.
- “Masadan kitap düştü.” → “Masadan **kitabı** düştü.” Cümle bozuldu → **özne**.

Bu test her seferinde çalışır ve ezber gerektirmez.

Aynı disiplin tümleçlerde de geçerli. Öğrencilerin çoğu “-de eki varsa dolaylı tümleç” diye ezberler. Oysa “Sabahleyin yola çıktık.” cümlesinde *sabahleyin* bir zaman bildirir ve zarf tümlecidir. “Üç saatte bitirdik.” cümlesinde *üç saatte* yine zaman bildirir ve zarf tümlecidir — ek “-te” olsa bile.

Bu yüzden derste kullanacağımız ölçüt ek değil **soru** olacak: hangi soruya cevap veriyor?`,
  },

  decision: {
    title: 'Öge bulma yolu',
    lead: 'Sıra bozulmaz: önce yüklem, sonra özne, sonra öteki ögeler. Bütün sorular yükleme sorulur.',
    intro:
      'Bir cümlenin ögelerini ayırırken şu beş durağı uygula. Birinci durağı atlarsan geri kalanı çöker.',
    steps: [
      {
        title: '1. Yüklemi bul',
        body: 'Cümlede yargıyı taşıyan ögeyi işaretle. Genellikle sondadır ama her zaman değil. Yüklem bir fiil olabileceği gibi, ek fiil almış bir isim de olabilir: “O gün hava çok soğuktu.”',
      },
      {
        title: '2. Özneyi yükleme sor',
        body: 'Yükleme “kim” ya da “ne” sor. Cevap yoksa özne gizli olabilir: yüklemin kişi ekinden çıkar (“Geldik.” → biz).',
      },
      {
        title: '3. Nesneyi yükleme sor ve doğrula',
        body: 'Yükleme “neyi/kimi” sor; cevap gelirse belirtili nesnedir. “Ne” sorusuna gelen cevabı **hâl eki denemesiyle** doğrula: “-i” eklendiğinde cümle ayakta kalıyorsa nesnedir.',
      },
      {
        title: '4. Tümleçleri soruyla ayır',
        body: '“Nereye, nerede, nereden, kime, kimde, kimden” sorularına cevap veren öge **dolaylı tümleç**; “nasıl, ne zaman, niçin, ne kadar” sorularına cevap veren öge **zarf tümlecidir**. Ek değil soru belirleyicidir.',
      },
      {
        title: '5. Öbekleri bölme',
        body: 'Tamlamalar, deyimler ve yan cümlecikler tek bir öge olarak işaretlenir. “Kapıyı çalan kişi” bir bütündür; içindeki “kapıyı” ayrı bir öge değildir.',
      },
    ],
    takeaway: 'Bütün sorular yükleme sorulur. Soruyu başka bir yere sorduğun an cevabın yanlıştır.',
  },

  decisionTree: {
    title: '“Ne” sorusuna gelen cevap özne mi, nesne mi?',
    intro:
      'Bu üç kontrol, öge sorularının en yaygın karışıklığını çözer.',
    checks: [
      {
        question: 'Sözcüğe “-i” hâl eki getirdiğimde cümle bozulmadan ayakta kalıyor mu?',
        yes: 'Belirtisiz nesnedir. Örnek: “Ahmet kitap okudu.” → “Ahmet kitabı okudu.”',
        no: 'Nesne değildir; ikinci kontrole geç.',
      },
      {
        question: 'Sözcük, yüklemdeki işi yapan ya da olan mı?',
        yes: 'Öznedir. Örnek: “Masadan kitap düştü.” — düşme işini kitap yapıyor.',
        no: 'Üçüncü kontrole geç.',
      },
      {
        question: 'Sözcük bir yer, zaman, durum veya sebep bildiriyor mu?',
        yes: 'Tümleçtir; sorusuna göre dolaylı tümleç ya da zarf tümleci olarak adlandırılır.',
        no: 'Cümle dışı unsur olabilir: seslenme, bağlaç ya da ara söz.',
      },
    ],
    takeaway:
      'Hâl eki denemesi bir ezber değil bir testtir: cümleyi değiştirip ne olduğuna bakarsın.',
  },

  comparison: {
    title: 'Özne, nesne ve tümleçleri soruyla ayır',
    columns: ['Özne', 'Nesne', 'Tümleçler'],
    rows: [
      { label: 'Sorusu', values: ['Kim? Ne?', 'Neyi? Kimi? Ne?', 'Nereye/nerede/nereden/kime · nasıl/ne zaman/niçin'] },
      { label: 'Yüklemle ilişkisi', values: ['İşi yapan ya da olan', 'İşten etkilenen', 'İşi tamamlayan'] },
      { label: 'Hâl eki', values: ['Almaz', 'Belirtili nesne “-i” alır', 'Dolaylı tümleç “-e/-de/-den” alır'] },
      { label: 'Örnek', values: ['**Ahmet** kitap okudu.', 'Ahmet **kitap** okudu.', 'Ahmet **kardeşine** **dün** kitap okudu.'] },
      { label: 'Ayırt edici test', values: ['“-i” eklenince cümle bozulur', '“-i” eklenince cümle ayakta kalır', 'Soru eki belirleyicidir'] },
      { label: 'Sık yapılan hata', values: ['Belirtisiz nesneyle karıştırmak', 'Özneyle karıştırmak', 'Eke bakıp karar vermek'] },
    ],
    insight:
      'Özne ile belirtisiz nesnenin ikisi de “ne” sorusuna cevap verir. Ayrımı yapan şey soru değil, hâl eki denemesidir.',
  },

  traps: [
    {
      title: 'Soruyu yükleme değil, bir başka ögeye sormak',
      wrong: '“Ahmet kardeşine kitap okudu.” cümlesinde “kimin kardeşi?” diye sorarım.',
      right: 'Soruyu yükleme sorarım: “Okudu → kime okudu? → kardeşine.” Dolaylı tümleç.',
      body: 'Öge hatalarının büyük bölümü buradan doğar. Soru yükleme sorulmadığında bulunan cevap bir öge değil, bir tamlama parçası olur.',
    },
    {
      title: 'Hâl ekine bakıp tümleç adlandırmak',
      wrong: '“Üç saatte bitirdik.” cümlesinde “-te” eki var; dolaylı tümleçtir.',
      right: 'Soruyu sorarım: “Bitirdik → ne kadar sürede bitirdik?” Bu bir zaman/miktar bildiriyor. **Zarf tümleci**.',
      body: 'Ek, tümlecin türünü belirlemez. Aynı ek hem yer hem zaman bildirebilir: “Okulda bekledik” (dolaylı tümleç) ↔ “Üç saatte bitirdik” (zarf tümleci).',
    },
    {
      title: 'Öbekleri bölmek',
      wrong: '“Kapıyı çalan kişi içeri girdi.” cümlesinin nesnesi “kapıyı”dır.',
      right: '“Kapıyı çalan kişi” bir bütündür ve cümlenin öznesidir. “Kapıyı”, yan cümleciğin içindedir; temel cümlenin ögesi değildir.',
      body: 'Tamlamalar, deyimler ve yan cümlecikler bölünmez. Bölersen cümlede olmayan ögeler bulursun.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-oge-yuklem-ozne',
      title: 'Yüklem ve özne: temel ögeler',
      lead: 'İki temel öge vardır ve ikisi de cümlenin omurgasını kurar. Özne bazen görünmez — ama yok değildir.',
      blocks: [
        {
          id: 'lgs-oge-yuklem-anlatim',
          type: 'prose',
          body: `**Yüklem** cümlenin yargısını taşır ve onsuz cümle olmaz. İki biçimde karşına çıkar.

**Fiil yüklem:** “Çocuklar bahçede **oynuyor**.” Bir eylem bildiriyor.
**İsim yüklem:** “O gün hava çok **soğuktu**.” İsim soylu bir sözcük ek fiil almış ve yargıyı taşıyor.

İsim yüklemleri sık gözden kaçar; çünkü öğrenci yüklem deyince fiil arar. Oysa “Babam öğretmendi.”, “Sınav çok zordu.”, “Burası bizim mahallemiz.” cümlelerinin hepsinde isim yüklem vardır.

**Özne**, yüklemdeki işi yapan ya da olan ögedir ve üç biçimde bulunur.

**Gerçek özne:** işi bizzat yapan. “**Ahmet** kapıyı açtı.”
**Sözde özne:** işten etkilenen ama cümlede özne gibi duran öge. Edilgen çatılı cümlelerde görülür: “**Kapı** açıldı.” Kapı açma işini yapmadı, ama cümlenin öznesi gibi duruyor. Bu konuyu Fiilde Çatı dersinde derinleştireceğiz.
**Gizli özne:** cümlede yazılı olmayan ama yüklemin kişi ekinden çıkarılan özne. “Dün sinemaya **gittik**.” → Kim gitti? → *biz*. Yazılı değil ama var.

Gizli özne önemlidir: bir cümlede özne göremediğinde “özne yok” demek yerine yüklemin kişi ekine bakmalısın. Türkçede özne neredeyse her zaman vardır; bazen yalnız görünmez.

Bir ayrıntı: **cümle dışı unsur** ile özneyi karıştırma. “**Ahmet**, kapıyı kapat.” cümlesinde Ahmet bir seslenmedir, özne değildir — gizli özne *sen*’dir. Seslenmeler genellikle virgülle ayrılır ve cümlenin yargısına bağlanmaz.`,
        },
        {
          id: 'lgs-oge-yuklem-tablo',
          type: 'table',
          interactive: true,
          title: 'Özneyi tanı: üç tür',
          columns: ['Cümle', 'Yüklem', 'Özne', 'Türü'],
          rows: [
            ['Ahmet kapıyı açtı.', 'açtı', 'Ahmet', 'Gerçek özne'],
            ['Kapı açıldı.', 'açıldı', 'kapı', 'Sözde özne'],
            ['Dün sinemaya gittik.', 'gittik', 'biz (yazılı değil)', 'Gizli özne'],
            ['O gün hava çok soğuktu.', 'soğuktu', 'hava', 'Gerçek özne (isim yüklem)'],
            ['Ahmet, kapıyı kapat.', 'kapat', 'sen (gizli)', 'Ahmet cümle dışı unsurdur'],
            ['Bahçedeki ağaçlar budandı.', 'budandı', 'bahçedeki ağaçlar', 'Sözde özne'],
          ],
          caption:
            'Beşinci satır seslenme tuzağını gösterir: virgülle ayrılan ad özne değil, cümle dışı unsurdur.',
        },
        {
          id: 'lgs-oge-yuklem-analiz',
          type: 'sentence_analysis',
          title: 'Bir cümleyi ögelerine ayırmak',
          prompt:
            'Aşağıdaki cümleyi parçalara ayırdık. Her parçaya tıklayarak hangi soruyla bulunduğunu ve hangi öge olduğunu gör.',
          segments: [
            {
              text: 'Küçük kardeşim',
              label: 'Özne — “Kim yazdı?”',
              explanation:
                'Soruyu yükleme sorduk: “yazdı → kim yazdı?” Cevap: küçük kardeşim. “Küçük” bir sıfattır ve öbeği bölmeyiz; öbeğin tamamı öznedir.',
              tone: 'brand',
            },
            {
              text: 'dün akşam',
              label: 'Zarf tümleci — “Ne zaman yazdı?”',
              explanation:
                'Yükleme “ne zaman” sorduk. Zaman bildirdiği için zarf tümlecidir. Hâl eki almamış olması da bunu destekliyor.',
              tone: 'aqua',
            },
            {
              text: 'defterine',
              label: 'Dolaylı tümleç — “Nereye yazdı?”',
              explanation:
                'Yükleme “nereye” sorduk. Yer/yön bildirdiği ve “-e” hâl eki aldığı için dolaylı tümleçtir.',
              tone: 'success',
            },
            {
              text: 'uzun bir mektup yazdı.',
              label: 'Nesne + yüklem',
              explanation:
                '“Yazdı” yüklem. “Uzun bir mektup” ise “ne yazdı?” sorusunun cevabı; “-i” denemesi tutuyor (“mektubu yazdı”), demek ki belirtisiz nesne. Öbek bölünmez.',
              tone: 'muted',
            },
          ],
          takeaway:
            'Dört soru da yükleme soruldu. Öbekler bölünmedi. Bu iki kural, öge sorularının çoğunu tek başına çözer.',
        },
        {
          id: 'lgs-oge-yuklem-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Yüklemi bulmakta zorlanıyorsan cümleyi soru hâline getirmeyi dene: “Ne oldu? Ne yapıldı?” Cevabı taşıyan sözcük yüklemdir. İsim yüklemlerde ek fiili (“-dır, -dı, -miş, -se”) ara.',
        },
      ],
    },

    {
      id: 'lgs-turkce-oge-nesne',
      title: 'Nesne: belirtili, belirtisiz ve “ne” tuzağı',
      lead: 'Nesne yalnız geçişli fiillerde bulunur. Bunu bilmek, yanlış nesne aramanı engeller.',
      blocks: [
        {
          id: 'lgs-oge-nesne-anlatim',
          type: 'prose',
          body: `Nesne, yüklemde bildirilen işten **etkilenen** ögedir ve iki biçimde bulunur.

**Belirtili nesne** “-i” hâl ekini almıştır ve “neyi / kimi” sorusuna cevap verir: “Ahmet **kitabı** okudu.”
**Belirtisiz nesne** ek almamıştır ve “ne” sorusuna cevap verir: “Ahmet **kitap** okudu.”

Nesne yalnız **geçişli** fiillerde bulunur. Bir fiilin geçişli olup olmadığını anlamak için ona “neyi/kimi” sor: cevap alabiliyorsan geçişlidir. “Okumak” geçişlidir (neyi okudu?); “gitmek” geçişsizdir (neyi gitti? — anlamsız).

Bu bilgi işini kolaylaştırır: geçişsiz bir fiil gördüğünde nesne aramayı bırakırsın. “Çocuk uyudu.”, “Otobüs geldi.”, “Yağmur yağdı.” cümlelerinde nesne yoktur ve aramak zaman kaybıdır.

Şimdi “ne” tuzağına dönelim. “Ne” sorusu hem özneyi hem belirtisiz nesneyi bulabilir. Çözüm hâl eki denemesidir:

- “Masadan kitap düştü.” → “Masadan **kitabı** düştü.” Cümle bozuldu → **özne**.
- “Ahmet kitap okudu.” → “Ahmet **kitabı** okudu.” Cümle ayakta → **belirtisiz nesne**.

Testin arkasındaki mantık şu: nesne zaten “-i” eki alabilen bir ögedir; özne alamaz. Ek eklendiğinde cümlenin bozulması, sözcüğün nesne olmadığını gösterir.

İkinci bir kontrol daha var: **fiilin geçişliliği.** “Düşmek” geçişsizdir; geçişsiz fiilin nesnesi olamaz. Bu yüzden “Masadan kitap düştü.” cümlesinde nesne aramak baştan yanlıştır.

Son olarak, belirtili nesne ile dolaylı tümleci karıştırma: “kitabı” (-i eki) nesnedir; “kitaba” (-e eki) dolaylı tümleçtir. Ekler farklıdır ve sorular da farklıdır: “neyi?” ↔ “neye?”`,
        },
        {
          id: 'lgs-oge-nesne-karsilastirma',
          type: 'compare',
          interactive: true,
          title: '“Ne” sorusuna gelen cevabı sınıflandır',
          columns: ['Özne', 'Belirtisiz nesne'],
          rows: [
            { label: 'Örnek', values: ['Masadan kitap düştü.', 'Ahmet kitap okudu.'] },
            { label: '“-i” denemesi', values: ['“kitabı düştü” → bozuldu', '“kitabı okudu” → ayakta'] },
            { label: 'Fiil geçişli mi?', values: ['Hayır (düşmek)', 'Evet (okumak)'] },
            { label: 'Yüklemle ilişkisi', values: ['İşi yapan/olan', 'İşten etkilenen'] },
            { label: 'Sonuç', values: ['Özne', 'Belirtisiz nesne'] },
          ],
          insight:
            'İki kontrol birbirini destekler: geçişsiz fiilde nesne olamaz, “-i” denemesi bozuluyorsa nesne değildir.',
        },
        {
          id: 'lgs-oge-nesne-tuzak',
          type: 'trap',
          title: 'Geçişsiz fiilde nesne aramak',
          wrong: '“Otobüs durakta bekledi.” cümlesinde nesne “durakta”dır.',
          right: '“Beklemek” burada geçişsiz kullanılmış; nesne yok. “Durakta” ise “nerede?” sorusuna cevap veriyor: dolaylı tümleç.',
          body: 'Fiilin geçişli olup olmadığını baştan kontrol etmek, olmayan bir ögeyi aramaktan kurtarır.',
        },
      ],
    },

    {
      id: 'lgs-turkce-oge-tumlecler',
      title: 'Tümleçler ve öbek bütünlüğü',
      lead: 'Tümleçleri ayıran şey ek değil sorudur. Ve hiçbir öbek bölünmez.',
      blocks: [
        {
          id: 'lgs-oge-tumlec-anlatim',
          type: 'prose',
          body: `**Dolaylı tümleç**, yüklemi yer, yön ve yönelme bakımından tamamlar. Soruları: *nereye, nerede, nereden, kime, kimde, kimden.* Genellikle “-e, -de, -den” hâl eklerini alır.

**Zarf tümleci**, yüklemi durum, zaman, sebep, miktar ve koşul bakımından tamamlar. Soruları: *nasıl, ne zaman, niçin, ne kadar.* Hâl eki almaz.

Öğrencilerin çoğu şu ezberi yapar: “-e, -de, -den varsa dolaylı tümleç.” Bu ezber sıklıkla çöker; çünkü aynı ekler zaman ve miktar da bildirebilir.

- “Okul**da** bekledik.” → Nerede bekledik? → **dolaylı tümleç**.
- “Üç saat**te** bitirdik.” → Ne kadar sürede bitirdik? → **zarf tümleci**.
- “Sabah**leyin** yola çıktık.” → Ne zaman? → **zarf tümleci**.
- “Korku**dan** konuşamadı.” → Niçin konuşamadı? → **zarf tümleci** (sebep).

Dört cümlede de hâl eki var; yalnız birincisi dolaylı tümleç. Ölçüt ek değil soru.

Şimdi ikinci kurala geçelim: **öbekler bölünmez.**

Bir öge tek bir sözcük olmak zorunda değildir. Sıfat tamlamaları (“küçük kardeşim”), isim tamlamaları (“okulun bahçesi”), deyimler (“göz atmak”) ve yan cümlecikler (“kapıyı çalan kişi”) tek bir öge olarak işaretlenir.

“**Bahçedeki kuru yaprakları** sabahtan beri topluyorlar.” cümlesinde nesne, kalın yazılan öbeğin tamamıdır. “Bahçedeki” ayrı bir dolaylı tümleç değildir; nesneyi niteleyen bir sıfat görevindedir.

Bu kural özellikle fiilimsili cümlelerde önemlidir. Fiilimsi dersinde gördük: “Kapıyı çalan kişi içeri girdi.” cümlesinin öznesi “kapıyı çalan kişi”dir. “Kapıyı” yan cümleciğin içindedir ve temel cümlenin nesnesi değildir. Temel cümlenin yüklemi “girdi” zaten geçişsizdir; nesne alamaz.

Son olarak **cümle dışı unsurlar**: seslenmeler (“Ahmet, gel!”), bağlaçlar (“Ama gelmedi.”) ve ara sözler (“Bu kitap — en sevdiğim — rafta duruyor.”) cümlenin yargısına bağlanmaz ve öge sayılmaz.`,
        },
        {
          id: 'lgs-oge-tumlec-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı ek, farklı tümleç',
          columns: ['Cümle', 'Öge', 'Soru', 'Tür'],
          rows: [
            ['Okulda bekledik.', 'okulda', 'Nerede?', 'Dolaylı tümleç'],
            ['Üç saatte bitirdik.', 'üç saatte', 'Ne kadar sürede?', 'Zarf tümleci'],
            ['Sabahleyin yola çıktık.', 'sabahleyin', 'Ne zaman?', 'Zarf tümleci'],
            ['Korkudan konuşamadı.', 'korkudan', 'Niçin?', 'Zarf tümleci'],
            ['Kardeşinden bir mektup aldı.', 'kardeşinden', 'Kimden?', 'Dolaylı tümleç'],
            ['Hızlıca kapıyı açtı.', 'hızlıca', 'Nasıl?', 'Zarf tümleci'],
          ],
          caption:
            'Altı cümlenin dördünde hâl eki var, ama yalnız ikisi dolaylı tümleç. Kararı her seferinde soru veriyor.',
        },
        {
          id: 'lgs-oge-tumlec-tuzak',
          type: 'trap',
          title: 'Tamlamayı iki ögeye bölmek',
          wrong: '“Okulun bahçesini temizlediler.” cümlesinde “okulun” dolaylı tümleç, “bahçesini” nesnedir.',
          right: '“Okulun bahçesini” bir isim tamlamasıdır ve tek bir ögedir: nesne. Tamlamalar bölünmez.',
          body: 'Bölünmüş tamlama, cümlede olmayan bir öge üretir. Yükleme soru sorduğunda cevabın tamamını al: “Ne temizlediler? → okulun bahçesini.”',
        },
        {
          id: 'lgs-oge-tumlec-hafiza',
          type: 'memory',
          title: 'İki altın kural',
          body: '**Bütün sorular yükleme sorulur.** **Hiçbir öbek bölünmez.**',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Beş ögeli cümleyi ayır',
      prompt:
        'Cümle: “Öğretmenimiz dün sabah sınıfta bize güzel bir hikâye okudu.” Ögelerine ayır.',
      steps: [
        { title: 'Yüklemi bul', body: 'Yargıyı taşıyan sözcük: **okudu**. Bütün soruları buna soracağız.' },
        { title: 'Özneyi sor', body: '“Okudu → kim okudu?” → **öğretmenimiz**. Gerçek özne.' },
        { title: 'Nesneyi sor', body: '“Okudu → ne okudu?” → **güzel bir hikâye**. “-i” denemesi: “hikâyeyi okudu” ayakta → belirtisiz nesne. Öbek bölünmez.' },
        { title: 'Dolaylı tümleçleri sor', body: '“Okudu → nerede okudu?” → **sınıfta**. “Okudu → kime okudu?” → **bize**. İkisi de dolaylı tümleç.' },
        { title: 'Zarf tümlecini sor', body: '“Okudu → ne zaman okudu?” → **dün sabah**. Zarf tümleci. Bir cümlede aynı türden birden çok tümleç bulunabilir.' },
      ],
      answer:
        'Öğretmenimiz (özne) / dün sabah (zarf tümleci) / sınıfta (dolaylı tümleç) / bize (dolaylı tümleç) / güzel bir hikâye (belirtisiz nesne) / okudu (yüklem).',
      takeaway:
        'Bir cümlede aynı türden iki tümleç bulunabilir. Her soruyu ayrı ayrı sormak bunu görmeni sağlar.',
    },
    {
      title: 'Seviye 2 — “Ne” tuzağını çöz',
      prompt:
        'Şu iki cümlede “ne” sorusuna gelen cevabın ögesini belirle: (1) “Sabah rüzgârdan çatıdan kiremit düştü.” (2) “Usta çatıya yeni kiremit dizdi.”',
      steps: [
        { title: '(1) yüklemi bul', body: 'Yüklem: **düştü**. “Ne düştü?” → kiremit.' },
        { title: '(1) hâl eki denemesi', body: '“Kiremidi düştü” → cümle bozuldu. Ayrıca “düşmek” geçişsizdir. → **Özne**.' },
        { title: '(2) yüklemi bul', body: 'Yüklem: **dizdi**. “Ne dizdi?” → yeni kiremit.' },
        { title: '(2) hâl eki denemesi', body: '“Yeni kiremidi dizdi” → cümle ayakta. Ayrıca “dizmek” geçişlidir. → **Belirtisiz nesne**.' },
        { title: 'Öteki ögeleri de ayır', body: '(1): sabah (zarf t.), rüzgârdan (zarf t. — niçin), çatıdan (dolaylı t.). (2): usta (özne), çatıya (dolaylı t.).' },
      ],
      answer: '(1) kiremit = özne · (2) yeni kiremit = belirtisiz nesne',
      takeaway:
        '“Ne” sorusundan sonra mutlaka doğrulama yap: hâl eki denemesi ve fiilin geçişliliği.',
    },
    {
      title: 'Seviye 3 — Fiilimsili cümlede öge ayır',
      prompt:
        'Cümle: “Bahçeyi sulayan çocuk, akşama kadar dışarıda kaldı.” Ögelerine ayır ve yan cümleciğe dikkat et.',
      steps: [
        { title: 'Yüklemi bul', body: 'Yüklem: **kaldı**. Geçişsiz bir fiil; nesne aramayacağız.' },
        { title: 'Yan cümleciği işaretle', body: '“Bahçeyi sulayan” bir sıfat-fiil öbeğidir ve “çocuk” sözcüğünü niteliyor. Tamamı tek öbek: “bahçeyi sulayan çocuk”.' },
        { title: 'Özneyi sor', body: '“Kaldı → kim kaldı?” → **bahçeyi sulayan çocuk**. Öbeğin tamamı özne. “Bahçeyi” ayrı bir öge değil.' },
        { title: 'Tümleçleri sor', body: '“Kaldı → ne zamana kadar kaldı?” → **akşama kadar** (zarf tümleci). “Kaldı → nerede kaldı?” → **dışarıda** (dolaylı tümleç).' },
        { title: 'Yaygın hatayı kontrol et', body: 'Öbeği bölüp “bahçeyi” sözcüğünü nesne saymak yaygın hatadır. Ama temel cümlenin yüklemi “kaldı” geçişsizdir; nesne alamaz. İki kontrol birbirini doğruluyor.' },
      ],
      answer:
        'Bahçeyi sulayan çocuk (özne) / akşama kadar (zarf tümleci) / dışarıda (dolaylı tümleç) / kaldı (yüklem). Nesne yoktur.',
      takeaway:
        'Yan cümlecik tek bir ögedir. Geçişsiz yüklem kontrolü, bölme hatasını ayrıca yakalar.',
    },
  ],

  questionClue: {
    concept: 'cümlenin ögeleri sorusu',
    statement:
      'Soru kökünde “ögelerine ayrılışı”, “hangi öge yoktur”, “altı çizili söz cümlenin hangi ögesidir” ifadelerinden biri varsa, çözüm yolu yüklemden başlamaktır.',
    clues: [
      'Bir cümlede bölümlerin eğik çizgiyle ayrılmış olarak verilmesi',
      'Soru kökünde “öge / özne / nesne / tümleç” terimleri',
      'Altı çizili bir söz öbeği',
      'Seçeneklerde aynı cümlenin farklı bölünmelerinin verilmesi',
      'Cümlede fiilimsi ya da tamlama bulunması',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, öbek bölme ve soru sorma disiplinini ölçüyor. Çözüm yolu yüklemi bulmak, bütün soruları ona sormak ve hiçbir öbeği bölmemektir.',
    boundary:
      'Bu ipuçlarını “-de eki varsa dolaylı tümleç” gibi bir kısayola çevirme. Aynı ek zaman ve sebep de bildirebilir; kararı soru verir.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir cümlenin ögelerine doğru ayrılışının sorulması',
      'Altı çizili sözün hangi öge olduğunun sorulması',
      'Dört cümleden hangisinde belirli bir ögenin bulunmadığının sorulması',
      'Aynı ögelerden oluşan iki cümlenin eşleştirilmesi',
      'Özne ile belirtisiz nesnenin ayırt ettirilmesi',
      'Fiilimsili bir cümlede yan cümleciğin görevinin sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Sabahleyin kapının önünde bir kutu buldum.” cümlesinin ögelerini ayır.',
      hint: 'Önce yüklemi bul, sonra bütün soruları ona sor.',
      answer:
        'Yüklem: “buldum”. Özne: gizli özne “ben” (yüklemin kişi ekinden). “Ne buldum?” → “bir kutu”; “-i” denemesi tutuyor (“kutuyu buldum”), demek ki belirtisiz nesne. “Nerede buldum?” → “kapının önünde” (dolaylı tümleç; tamlama bölünmez). “Ne zaman buldum?” → “sabahleyin” (zarf tümleci).',
    },
    {
      prompt:
        '“Bu yolu iki saatte yürüdük.” cümlesinde “iki saatte” hangi ögedir? Ek “-te” olduğu hâlde neden?',
      hint: 'Ek değil soru belirleyicidir.',
      answer:
        'Zarf tümlecidir. Yükleme “ne kadar sürede yürüdük?” sorusunu sorduğumuzda cevap veriyor; bir süre, yani zaman/miktar bildiriyor. “-te” hâl eki bulunması onu dolaylı tümleç yapmaz. Dolaylı tümleç olsaydı “nerede?” sorusuna cevap vermesi gerekirdi.',
    },
    {
      prompt:
        '“Kitabı bitiren öğrenciler ödüllerini aldı.” cümlesinin öznesi nedir? “Kitabı” sözcüğü temel cümlenin nesnesi midir?',
      hint: 'Yan cümlecikler bölünmez.',
      answer:
        'Özne “kitabı bitiren öğrenciler”dir; öbeğin tamamı tek bir ögedir. “Kitabı” yan cümleciğin içindedir ve temel cümlenin nesnesi değildir. Temel cümlenin nesnesi “ödüllerini”dir: “Aldı → neyi aldı? → ödüllerini.” Yan cümleciği bölmek, cümlede olmayan bir öge üretir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey terim ezberi değil, soru sorma disiplini',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama ve analiz yapma becerilerini ölçecek nitelikte hazırlandığını belirtir. Öge sorularında bunun somut karşılığı şudur: öge adlarını bilmek yetmez; soruyu doğru yere sorup öbekleri bölmeden çalışabilmen gerekir. Çeldiriciler de bu yüzden bölünmüş tamlamalardan ve yanlış adlandırılmış tümleçlerden üretilir.',
    measures: [
      'Yüklemi doğru bulabilme (fiil ya da isim yüklem)',
      'Bütün soruları yükleme sorabilme',
      'Özne ile belirtisiz nesneyi hâl eki denemesiyle ayırabilme',
      'Fiilin geçişliliğini kontrol edip gereksiz nesne aramasından kaçınabilme',
      'Tümleçleri ek yerine soruyla adlandırabilme',
      'Tamlama, deyim ve yan cümlecikleri bölmeden tek öge olarak işaretleyebilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün cümle',
    passage: `Aşağıdaki cümleyi inceleyelim:

**Mahallenin en eski fırıncısı, her sabah komşulara taze ekmek dağıtırdı.**`,
    question: 'Bu cümlenin ögelerine ayrılışı aşağıdakilerden hangisinde doğru verilmiştir?',
    options: [
      {
        text: 'Mahallenin / en eski fırıncısı / her sabah / komşulara / taze ekmek / dağıtırdı',
        explanation:
          '“Mahallenin en eski fırıncısı” bir isim tamlamasıdır ve tek bir ögedir. Bu seçenek tamlamayı ikiye bölerek cümlede olmayan bir öge üretiyor. Öbek bölme hatasının tipik biçimi.',
      },
      {
        text: 'Mahallenin en eski fırıncısı / her sabah / komşulara / taze ekmek / dağıtırdı',
        explanation:
          'Doğru cevap. Yüklem “dağıtırdı”. Kim dağıtırdı? → “mahallenin en eski fırıncısı” (özne, tamlama bütün). Ne zaman? → “her sabah” (zarf tümleci). Kime? → “komşulara” (dolaylı tümleç). Ne dağıtırdı? → “taze ekmek” (belirtisiz nesne; “ekmeği dağıtırdı” denemesi tutuyor).',
      },
      {
        text: 'Mahallenin en eski fırıncısı / her sabah komşulara / taze ekmek / dağıtırdı',
        explanation:
          '“Her sabah” ve “komşulara” iki ayrı soruya cevap veriyor: “ne zaman?” ve “kime?”. Farklı sorulara cevap veren sözler tek bir öge olarak birleştirilemez.',
        },
      {
        text: 'Mahallenin en eski fırıncısı / her sabah / komşulara taze ekmek / dağıtırdı',
        explanation:
          '“Komşulara” dolaylı tümleç, “taze ekmek” ise nesnedir; ikisi ayrı ögelerdir. Birleştirmek, “kime?” ve “ne?” sorularının cevaplarını tek ögede toplamak olur.',
      },
      {
        text: 'Mahallenin en eski fırıncısı / her sabah / komşulara / taze / ekmek dağıtırdı',
        explanation:
          '“Taze ekmek” bir sıfat tamlamasıdır ve bölünmez; ayrıca “ekmek dağıtırdı” birleştirmesi nesneyi yükleme yapıştırıyor. İki ayrı bölme hatası bir arada.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru, cümlenin doğru bölünüşünü istiyor. Yöntem: önce yüklemi bul (“dağıtırdı”), sonra dört soruyu ayrı ayrı yükleme sor ve her cevabın tamamını tek öge olarak al.',
    critical_point:
      'Kritik nokta, seçeneklerin dördünde de bir bölme hatası bulunması. Hiçbiri bilgi hatası içermiyor; hepsi öbek sınırlarını yanlış çiziyor. Bu yüzden karar, “doğru öge adı” değil “doğru öge sınırı” üzerinden verilir.',
    takeaway:
      'Öge sorularında yanlış cevaplar genellikle yanlış adlandırmadan değil, yanlış bölmeden doğar.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question: '“Çocuklar bahçede top oynuyor.” cümlesinde “top” hangi ögedir?',
      options: [
        'Özne',
        'Belirtisiz nesne',
        'Dolaylı tümleç',
        'Zarf tümleci',
      ],
      answer_index: 1,
      explanation:
        'Yükleme “ne oynuyor?” sorduğumuzda cevap “top”. Hâl eki denemesi: “topu oynuyor” — cümle ayakta kalıyor ve “oynamak” burada geçişli kullanılmış. Demek ki belirtisiz nesne. Özne “çocuklar”, dolaylı tümleç ise “bahçede”dir.',
    },
    {
      purpose: 'concept',
      question: '“Yorgunluktan gözleri kapanıyordu.” cümlesinde “yorgunluktan” hangi ögedir?',
      options: [
        'Dolaylı tümleç, çünkü “-den” hâl ekini almıştır',
        'Zarf tümleci, çünkü “niçin?” sorusuna cevap vermektedir',
        'Belirtili nesne',
        'Özne',
      ],
      answer_index: 1,
      explanation:
        'Yükleme “niçin kapanıyordu?” sorduğumuzda cevap “yorgunluktan”; bir sebep bildiriyor ve zarf tümlecidir. “-den” hâl ekinin bulunması onu dolaylı tümleç yapmaz; dolaylı tümleç olsaydı “nereden?” sorusuna cevap vermeliydi. Özne “gözleri”dir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Bahçeyi temizleyen görevliler erken çıktı.” cümlesinin nesnesini “bahçeyi” olarak işaretliyor. Bu öğrencinin hatası nedir?',
      options: [
        'Yan cümleciği bölüp içindeki ögeyi temel cümleye mal etmek',
        'Yüklemi yanlış belirlemek',
        'Zarf tümlecini dolaylı tümleç sanmak',
        'Gizli özneyi fark edememek',
      ],
      answer_index: 0,
      explanation:
        '“Bahçeyi temizleyen görevliler” bir bütündür ve cümlenin öznesidir; “bahçeyi” yan cümleciğin içindedir. Ayrıca temel cümlenin yüklemi “çıktı” geçişsizdir ve nesne alamaz. İki kontrol de aynı sonucu veriyor: bu cümlede nesne yoktur.',
    },
  ],

  summary: [
    'Öge bulma her zaman yüklemden başlar; bütün sorular yükleme sorulur.',
    'Yüklem bir fiil olabileceği gibi ek fiil almış bir isim de olabilir.',
    'Özne “kim/ne” sorusuna cevap verir; gerçek, sözde ve gizli olmak üzere üç biçimde bulunur.',
    'Türkçede özne neredeyse her zaman vardır; bazen yalnız yazılı değildir.',
    '“Ne” sorusu hem özneyi hem belirtisiz nesneyi bulabilir; ayrımı hâl eki denemesi yapar.',
    'Nesne yalnız geçişli fiillerde bulunur; geçişsiz fiilde nesne aramak zaman kaybıdır.',
    'Dolaylı tümleç yer ve yönelme, zarf tümleci durum-zaman-sebep-miktar bildirir.',
    'Tümleç türünü hâl eki değil, cevap verdiği soru belirler.',
    'Tamlamalar, deyimler ve yan cümlecikler bölünmez; tek bir öge olarak işaretlenir.',
    'Seslenmeler, bağlaçlar ve ara sözler cümle dışı unsurdur; öge sayılmaz.',
  ],

  next: [
    'Fiilde Çatı: Anlama Katkısı (T.8.4.20)',
    'Cümle Türleri (T.8.4.19)',
    'Anlatım Bozuklukları: Dil Bilgisi Yönünden (T.8.3.8)',
  ],
})

export default lesson
