import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Noktalama İşaretleri
 * Kazanım : T.8.4.16 · T.8.3.1
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * KAZANIM KONUMU
 * Yazım dersinde açıkladığımız gibi, 8. sınıf listesinde ayrı bir
 * noktalama kazanımı yoktur; alan T.8.4.16 üzerinden yürür. Okuma
 * tarafında ise T.8.3.1 noktalama işaretlerine dikkat ederek okumayı
 * ister. Kuralların kaynağı TDK Yazım Kılavuzu'dur; işaretlerin
 * tanımları 5. sınıf kazanımında (T.5.4.5) kurulmuştur.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-noktalama-isaretleri',
  topic: 'Noktalama İşaretleri',
  order: 1,
  title: 'Noktalama İşaretleri',
  subtitle:
    'Noktalama süs değildir: virgülün yeri değişince cümlenin anlamı da değişir. Kuralı anlamdan öğren.',
  minutes: 43,
  kazanimlar: [
    { kod: 'T.8.4.16', metin: 'Yazdıklarını düzenler.' },
    { kod: 'T.8.3.1', metin: 'Noktalama işaretlerine dikkat ederek sesli ve sessiz okur.' },
  ],
  prerequisites: [
    { topic: 'Cümlenin ögeleri', why: 'Virgülün nereye konacağını belirlemek için ögeleri görmek gerekir.' },
    { topic: 'Yazım kuralları', why: 'Kesme işareti, özel ad bilgisine dayanır; onu önceki derste kurduk.' },
  ],
  outcomes: [
    'Virgülün yerinin cümlenin anlamını nasıl değiştirdiğini gösterebileceksin.',
    'Virgül ile noktalı virgülü görev farkıyla ayırabileceksin.',
    'İki nokta ve üç noktanın ne zaman kullanıldığını belirleyebileceksin.',
    'Kesme işaretinin hangi eklerde kullanıldığını kurala dayandırabileceksin.',
    'Tırnak işareti ve konuşma çizgisinin işlevlerini ayırt edebileceksin.',
  ],

  opening: {
    title: 'Bir virgül, iki anlam',
    lead: 'Noktalama, okurun nerede duracağını ve neyi neye bağlayacağını söyler. Yeri değişince anlam da değişir.',
    body: `Şu iki cümleyi karşılaştır:

“**Genç, adama baktı.**” — Bir genç var ve o genç, bir adama bakıyor.
“**Genç adama baktı.**” — Birisi, genç olan adama bakıyor.

Tek bir virgül, cümlenin öznesini değiştirdi. Birincide “genç” öznedir; ikincide “genç” bir sıfattır ve “adam”ı niteler.

Bir örnek daha:

“**Ayşe’ye, arkadaşı geldi dediler.**” ile “**Ayşe’ye arkadaşı, geldi dediler.**” — virgülün yeri kimin geldiğini değiştiriyor.

İşte bu yüzden noktalama bir süs değildir. Okuma kazanımı **T.8.3.1** de bunu söyler: “Noktalama işaretlerine dikkat ederek sesli ve sessiz okur.” Yani noktalama, okurken anlamı kurmanın parçasıdır.

Yazma tarafında ise durum, bir önceki derste açıkladığımız gibidir: 8. sınıf kazanım listesinde ayrı bir noktalama kazanımı yoktur; alan **T.8.4.16** (“Yazdıklarını düzenler.”) üzerinden yürür ve açıklaması “metinde yer alan yazım ve noktalama kuralları ile sınırlı tutulur” der. İşaretlerin tanımları 5. sınıf kazanımında kurulmuştur; 8. sınıfta yapılan şey onları metinde işletmektir.

Bu derste bütün işaretleri tek tek ezberlemeyeceğiz. Bunun yerine üç soru soracağız:

**1. Bu işaret neyi neye bağlıyor ya da neyi neyden ayırıyor?**
**2. Kaldırırsam ya da yerini değiştirirsem anlam değişir mi?**
**3. Bu ek bir özel ada mı geliyor, yoksa bir yapım ekinden sonra mı?**

Üç soru, en çok sorulan altı işareti kapsar: virgül, noktalı virgül, iki nokta, üç nokta, kesme işareti ve tırnak işareti.`,
  },

  concepts: [
    {
      term: 'Virgül',
      body: 'Eş görevli ögeleri ayırır, ara sözü ve seslenmeyi cümleden ayırır, uzun cümlelerde okuma duraklarını gösterir: “Elma, armut, kiraz aldık.”, “Ahmet, buraya gel.” Yeri değişince anlam değişebilir.',
    },
    {
      term: 'Noktalı virgül',
      body: 'Kendi içinde virgül bulunan grupları birbirinden ayırır: “Sınıfta Ali, Ayşe; koridorda Mehmet, Zeynep vardı.” Ayrıca anlamca bağlı iki cümleyi ayırır: “Erken kalktı; yine de yetişemedi.”',
    },
    {
      term: 'İki nokta',
      body: 'Kendinden sonra açıklama, örnek ya da alıntı geleceğini bildirir: “Çantada üç şey vardı: kalem, defter, silgi.”, “Öğretmen şöyle dedi: …”',
    },
    {
      term: 'Üç nokta',
      body: 'Tamamlanmamış anlatımı, sözün sürdüğünü ya da atlanan bölümü gösterir: “Bir şey söyleyecekti ama…” Ayrıca alıntıda çıkarılan kısmı belirtir.',
    },
    {
      term: 'Kesme işareti',
      body: 'Özel adlara gelen **çekim** eklerini ayırır: “Ankara’ya”, “Ahmet’in”, “1985’te”, “TBMM’nin”. Yapım eki ve ondan sonraki çekim ekleri ayrılmaz: “Türkçeyi”.',
    },
    {
      term: 'Tırnak işareti',
      body: 'Başkasının sözünü olduğu gibi aktarır, eser adlarını ve özel olarak vurgulanan sözleri gösterir: “Öğretmen, ‘Yarın sınav var.’ dedi.”',
    },
  ],

  why: {
    question: 'Neden noktalama kuralları listeyle değil, anlamla öğrenilir?',
    body: `Çünkü noktalama işaretlerinin çoğu birden fazla görev üstlenir ve hangi görevde olduğunu **cümlenin yapısı** belirler.

Virgülü ele alalım. Virgül en az beş ayrı iş yapar:

**Eş görevli ögeleri ayırır:** “Elma, armut, kiraz aldık.”
**Seslenmeyi ayırır:** “Ahmet, buraya gel.”
**Ara sözü ayırır:** “Bu kitap, en sevdiğim, rafta duruyor.”
**Özneyi belirginleştirir:** “Genç, adama baktı.”
**Sıralı cümleleri ayırır:** “Kapıyı açtı, içeri girdi, lambayı yaktı.”

Bu beş görevi ayrı ayrı ezberlemek yerine tek bir soru sormak yeterli: **virgül neyi neyden ayırıyor?** Cevabını söyleyebiliyorsan virgül doğru yerdedir.

Aynı mantık noktalı virgülde de çalışır. Öğrencilerin çoğu “virgülden büyük, noktadan küçük” diye öğrenir. Bu bir tanım değil, bir benzetmedir ve karar verdirmez. İşe yarayan soru şudur: **ayrılan grupların içinde zaten virgül var mı?** Varsa noktalı virgül gerekir; yoksa virgül yeter.

Kesme işaretinde ise ezber gerçekten zararlıdır. “Özel adlara gelen ekler kesmeyle ayrılır” cümlesi eksiktir ve öğrenciyi yanıltır. Doğrusu şudur: **özel adlara gelen ÇEKİM ekleri ayrılır; yapım ekleri ve ondan sonraki çekim ekleri ayrılmaz.** Bu yüzden “Türk’çe” yanlıştır, “Türkçe” doğrudur: “-çe” bir yapım ekidir.

Bir kural daha: kurum, kuruluş ve iş yeri adlarına gelen ekler kesmeyle ayrılmaz. “Türk Dil Kurumuna” doğrudur; “Türk Dil Kurumu’na” yaygın ama kurala aykırıdır.

Görüyorsun: üç işaret, üç ayrı mantık. Liste ezberi yerine mantığı öğrenmek hem daha kısa hem daha güvenilir.`,
  },

  decision: {
    title: 'Noktalama kararı verme yolu',
    lead: 'Her işaret için tek bir soru var. Soruyu cevaplayabiliyorsan karar doğrudur.',
    intro:
      'Bir noktalama sorusuyla karşılaştığında şu beş durağı uygula.',
    steps: [
      {
        title: '1. Cümlenin yapısını gör',
        body: 'Sıralı ögeler var mı? Seslenme var mı? Ara söz var mı? Birden çok yargı var mı? Yapıyı görmeden işaret kararı verilemez.',
      },
      {
        title: '2. “Neyi neyden ayırıyor?” sor',
        body: 'Her işaret bir ayırma ya da bağlama işi yapar. İşi söyleyebiliyorsan işaret doğrudur; söyleyemiyorsan gereksiz konmuştur.',
      },
      {
        title: '3. Kaldırma testini uygula',
        body: 'İşareti kaldır ve cümleyi yeniden oku. Anlam değişiyorsa işaret gereklidir. Hiçbir şey değişmiyorsa fazladan konmuş olabilir.',
      },
      {
        title: '4. Virgül–noktalı virgül ayrımını yap',
        body: 'Ayrılan grupların içinde zaten virgül varsa noktalı virgül gerekir. Yoksa virgül yeterlidir.',
      },
      {
        title: '5. Kesme işaretinde ek türünü belirle',
        body: 'Ek bir çekim eki mi (hâl, iyelik, çokluk, kişi), yoksa yapım eki mi? Çekim ekiyse ayrılır; yapım ekiyse ve sonrasındaysa ayrılmaz. Kurum adlarına gelen ekler ayrılmaz.',
      },
    ],
    takeaway: 'Noktalama, okurun anlamı doğru kurması için konur; süs için değil.',
  },

  decisionTree: {
    title: 'Virgül mü, noktalı virgül mü, iki nokta mı?',
    intro:
      'Üç kontrol sırayla uygulanır ve en çok karıştırılan üç işareti ayırır.',
    checks: [
      {
        question: 'Kendinden sonra bir açıklama, örnek ya da alıntı mı geliyor?',
        yes: 'İki nokta kullanılır. Örnek: “Çantada üç şey vardı: kalem, defter, silgi.”',
        no: 'Açıklama gelmiyor; ikinci kontrole geç.',
      },
      {
        question: 'Ayrılacak grupların içinde zaten virgül var mı?',
        yes: 'Noktalı virgül kullanılır. Örnek: “Sınıfta Ali, Ayşe; koridorda Mehmet, Zeynep vardı.”',
        no: 'Grup içi virgül yok; üçüncü kontrole geç.',
      },
      {
        question: 'Eş görevli ögeler, seslenme, ara söz ya da sıralı cümleler mi ayrılıyor?',
        yes: 'Virgül kullanılır. Örnek: “Ahmet, buraya gel.”',
        no: 'Bu üç işaretten biri gerekmiyor olabilir; cümleyi yeniden incele.',
      },
    ],
    takeaway:
      'İki noktayı başa koymamızın sebebi, en dar görevli işaret olmasıdır: yalnız açıklama, örnek ya da alıntı öncesinde kullanılır.',
  },

  comparison: {
    title: 'Üç işaretin görev farkı',
    columns: ['Virgül', 'Noktalı virgül', 'İki nokta'],
    rows: [
      { label: 'Temel görevi', values: ['Eş görevli ögeleri ayırır', 'Virgüllü grupları ayırır', 'Açıklama/örnek/alıntı bildirir'] },
      { label: 'Örnek', values: ['Elma, armut, kiraz aldık.', 'Ali, Ayşe; Mehmet, Zeynep geldi.', 'Üç şey gerekli: kalem, defter, silgi.'] },
      { label: 'Test sorusu', values: ['Neyi neyden ayırıyor?', 'Grupların içinde virgül var mı?', 'Sonrasında açıklama mı geliyor?'] },
      { label: 'İkinci görevi', values: ['Seslenme ve ara sözü ayırır', 'Anlamca bağlı iki cümleyi ayırır', 'Konuşma çizgisinden önce gelir'] },
      { label: 'Sık yapılan hata', values: ['Özneyle yüklem arasına koymak', 'Virgül yerine kullanmak', 'Her sıralamadan önce koymak'] },
    ],
    insight:
      'Virgül özne ile yüklem arasına konmaz. “Öğrenciler, kitabı okudu.” cümlesindeki virgül gereksizdir — ancak özneyi belirginleştirmek gerekiyorsa konabilir.',
  },

  traps: [
    {
      title: 'Kesme işaretini her ekte kullanmak',
      wrong: '“Türk’çe konuşuyoruz.” — özel ada ek geldi, kesme koydum.',
      right: '“Türkçe konuşuyoruz.” “-çe” bir **yapım ekidir**; yapım ekleri kesmeyle ayrılmaz.',
      body: 'Kural tam hâliyle şudur: özel adlara gelen **çekim** ekleri kesmeyle ayrılır; yapım ekleri ve ondan sonra gelen çekim ekleri ayrılmaz. “Türkçeyi”, “Avrupalılaşmak” bu yüzden kesmesiz yazılır.',
    },
    {
      title: 'Kurum adlarına kesme koymak',
      wrong: '“Türk Dil Kurumu’na bir mektup yazdım.”',
      right: '“Türk Dil Kurumuna bir mektup yazdım.” Kurum, kuruluş, kurul ve iş yeri adlarına gelen ekler kesmeyle ayrılmaz.',
      body: 'Bu kural günlük yazışmalarda sık ihlal edilir; bu yüzden yaygın kullanım seni yanıltabilir. Ölçüt kullanım sıklığı değil kuraldır.',
    },
    {
      title: 'Özne ile yüklem arasına virgül koymak',
      wrong: '“Sınıfın en çalışkan öğrencisi, sınavı kazandı.”',
      right: 'Virgül gereksizdir; özne ile yüklem arasına virgül konmaz. Ancak özneyi belirginleştirmek gerekiyorsa konabilir: “Genç, adama baktı.”',
      body: 'Virgülün işi ayırmaktır. Özne ile yüklem birbirine bağlı iki temel ögedir; onları ayırmak için özel bir sebep gerekir.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-noktalama-virgul-anlam',
      title: 'Virgülün yeri anlamı değiştirir',
      lead: 'LGS’nin en sevdiği noktalama sorusu budur: virgülün yeri değişince cümle ne söylüyor?',
      blocks: [
        {
          id: 'lgs-noktalama-virgul-anlatim',
          type: 'prose',
          body: `Virgül, okura “burada dur ve şu ikisini birbirine bağlama” der. Bu yüzden yeri değiştiğinde cümlenin kurduğu ilişkiler de değişir.

**Klasik örnek:** “Genç, adama baktı.” ile “Genç adama baktı.”
Birincide virgül “genç” sözcüğünü yalıtıyor ve onu özne yapıyor. İkincide virgül olmadığı için “genç” bir sıfat olarak “adam”a bağlanıyor ve özne gizli kalıyor.

**İkinci örnek:** “Yaşlı kadına yardım etti.” ile “Yaşlı, kadına yardım etti.”
Birincide yardım edilen kişi yaşlı; ikincide yardım eden kişi yaşlı.

**Üçüncü örnek:** “Küçük çocuğun elinden tuttu.” ile “Küçük, çocuğun elinden tuttu.”
Aynı yapı, aynı sonuç: virgül bir sözcüğü niteleyici olmaktan çıkarıp bağımsız bir öge yapıyor.

Bu üç örnekte ortak bir kalıp var: **sıfat gibi görünen bir sözcük, virgülle yalıtıldığında özne olur.** Sorular çoğu zaman bu kalıbı kullanır.

Virgülün ikinci sık sorulan görevi **ara sözü ayırmaktır**. “Bu kitap, en sevdiğim, rafta duruyor.” Buradaki “en sevdiğim” bir ara sözdür ve iki virgül arasına alınmıştır. Ara sözü cümleden çıkardığında cümle yine anlamlı kalır — bu, ara sözü tanımanın testidir.

Üçüncü görev **seslenmeyi ayırmaktır**: “Ahmet, buraya gel.” Buradaki Ahmet bir seslenmedir ve cümle dışı unsurdur. Virgül olmasaydı “Ahmet” özne sanılabilirdi.

Dördüncü görev **eş görevli ögeleri ayırmaktır**: “Elma, armut, kiraz aldık.” Son iki öge arasında “ve” varsa virgül konmaz: “Elma, armut ve kiraz aldık.”

Bir uyarı: virgül **özne ile yüklem arasına** konmaz. “Sınıfın en çalışkan öğrencisi, sınavı kazandı.” cümlesindeki virgül gereksizdir. Ama “Genç, adama baktı.” cümlesindeki virgül gereklidir; çünkü orada bir belirginleştirme işi yapıyor.`,
        },
        {
          id: 'lgs-noktalama-virgul-tablo',
          type: 'table',
          interactive: true,
          title: 'Virgül nereye konursa ne olur?',
          columns: ['Virgülsüz', 'Virgüllü', 'Anlam farkı'],
          rows: [
            ['Genç adama baktı.', 'Genç, adama baktı.', 'Birincide genç olan adam; ikincide bakan kişi'],
            ['Yaşlı kadına yardım etti.', 'Yaşlı, kadına yardım etti.', 'Birincide yardım edilen yaşlı; ikincide yardım eden'],
            ['Küçük çocuğun elinden tuttu.', 'Küçük, çocuğun elinden tuttu.', 'Birincide çocuk küçük; ikincide tutan kişi'],
            ['Ahmet buraya gel.', 'Ahmet, buraya gel.', 'Virgülle Ahmet seslenme olur, özne değil'],
            ['Bu kitap en sevdiğim rafta duruyor.', 'Bu kitap, en sevdiğim, rafta duruyor.', 'İki virgül “en sevdiğim”i ara söz yapar'],
          ],
          caption:
            'Beş satırda da virgül bir sözcüğü bağlamdan koparıp bağımsız bir öge yapıyor. Kalıp hep aynı.',
        },
        {
          id: 'lgs-noktalama-virgul-analiz',
          type: 'sentence_analysis',
          title: 'İki virgül, bir ara söz',
          prompt:
            'Aşağıdaki cümlede iki virgül var ve ikisi birlikte tek bir iş yapıyor. Parçalara tıklayarak gör.',
          segments: [
            {
              text: 'Kütüphanenin en eski kitabı,',
              label: 'Özne — birinci virgülden önce',
              explanation:
                'Cümlenin öznesi. Birinci virgül, özneyi bitiriyor ve ardından bir ara söz geleceğini haber veriyor.',
              tone: 'brand',
            },
            {
              text: 'sayfaları sararmış bir atlas,',
              label: 'Ara söz — iki virgül arasında',
              explanation:
                'Özneyi açıklayan bir ara söz. Cümleden çıkarırsan cümle yine anlamlı kalır: “Kütüphanenin en eski kitabı camlı dolapta duruyor.” Bu, ara sözü tanımanın testidir.',
              tone: 'aqua',
            },
            {
              text: 'camlı dolapta',
              label: 'Dolaylı tümleç',
              explanation:
                'İkinci virgülden sonra cümle kaldığı yerden devam ediyor. Ara söz kapandı, akış sürüyor.',
              tone: 'muted',
            },
            {
              text: 'duruyor.',
              label: 'Yüklem',
              explanation:
                'Cümle tamamlandı. İki virgül birlikte tek bir iş yaptı: ara sözü cümleden yalıtmak. Yalnız bir virgül konsaydı cümle bozulurdu.',
              tone: 'success',
            },
          ],
          takeaway:
            'Ara söz iki virgül ister. Tek virgülle açılıp kapatılmayan ara söz, cümlede kopukluk yaratır.',
        },
        {
          id: 'lgs-noktalama-virgul-hoca',
          type: 'teacher_note',
          tone: 'exam',
          body:
            'Virgülün anlamı değiştirdiği sorularda hızlı yol şudur: virgülden önceki sözcüğü al ve “bu sözcük bir sıfat mı, bir özne mi?” diye sor. Virgül onu özne yapmıştır.',
        },
      ],
    },

    {
      id: 'lgs-turkce-noktalama-kesme-tirnak',
      title: 'Kesme işareti ve tırnak: en çok yanlış yazılan iki işaret',
      lead: 'Kesme işaretinde kural eksik öğrenilir; tırnak işaretinde ise görevleri karışır.',
      blocks: [
        {
          id: 'lgs-noktalama-kesme-anlatim',
          type: 'prose',
          body: `**Kesme işaretinin kuralı tam hâliyle şudur:** özel adlara gelen **çekim ekleri** kesmeyle ayrılır; **yapım ekleri ve yapım ekinden sonra gelen çekim ekleri ayrılmaz.**

Çekim ekleri: hâl ekleri (-e, -i, -de, -den), iyelik ekleri (-im, -in, -i), çokluk eki (-ler), kişi ve zaman ekleri.

- “**Ankara’ya** gittik.” → hâl eki, ayrılır.
- “**Ahmet’in** kitabı” → iyelik/tamlayan eki, ayrılır.
- “**1985’te** doğdu.” → sayıya gelen hâl eki, ayrılır.
- “**TBMM’nin** kararı” → kısaltmaya gelen ek, ayrılır.

Yapım ekleri: sözcükten yeni bir sözcük türetir.

- “**Türkçe**” → “-çe” yapım eki, **ayrılmaz**.
- “**Türkçeyi**” → yapım ekinden sonra gelen çekim eki de **ayrılmaz**.
- “**Avrupalılaşmak**” → art arda yapım ekleri, **ayrılmaz**.

**İkinci önemli kural:** kurum, kuruluş, kurul, birleşim, oturum ve iş yeri adlarına gelen ekler kesmeyle **ayrılmaz**.

- “**Türk Dil Kurumuna**” bir dilekçe verdi. (“Kurumu’na” değil.)
- “**Atatürk Ortaokulundan**” mezun oldu.

Bu kural günlük yazışmalarda çok sık ihlal edilir; bu yüzden gördüğün yaygın kullanım seni yanıltabilir.

**Tırnak işaretinin üç görevi vardır.**

**Birincisi: başkasının sözünü olduğu gibi aktarmak.** “Öğretmen, ‘Yarın sınav var.’ dedi.” Söz olduğu gibi aktarılıyorsa tırnak gerekir.

**İkincisi: eser adlarını göstermek.** “Atatürk’ün ‘Nutuk’ adlı eseri…” Eser adları italik de yazılabilir; ikisi birlikte kullanılmaz.

**Üçüncüsü: özel olarak vurgulanan sözü göstermek.** “Bu ifadeyi ‘tam olarak’ nasıl anlamalıyız?”

Tırnak işaretiyle karıştırılan yapı **konuşma çizgisidir (—)**. Konuşma çizgisi, karşılıklı konuşmalarda her konuşmacının sözünün başına konur ve tırnak gerekmez:

— Nereye gidiyorsun?
— Kütüphaneye.

Ölçüt basit: söz **cümle içinde** aktarılıyorsa tırnak, **satır başında karşılıklı konuşma** olarak veriliyorsa konuşma çizgisi.`,
        },
        {
          id: 'lgs-noktalama-kesme-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Kesme işareti: ayrılır mı, ayrılmaz mı?',
          columns: ['Kesmeyle ayrılır', 'Kesmeyle ayrılmaz'],
          rows: [
            { label: 'Ek türü', values: ['Çekim ekleri', 'Yapım ekleri ve sonrası'] },
            { label: 'Örnek', values: ['Ankara’ya, Ahmet’in, 1985’te', 'Türkçe, Türkçeyi, Avrupalılaşmak'] },
            { label: 'Kurum adları', values: ['—', 'Türk Dil Kurumuna, Atatürk Ortaokulundan'] },
            { label: 'Kısaltmalar', values: ['TBMM’nin, TDK’nin', '—'] },
            { label: 'Test', values: ['Ek, sözcüğün görevini mi değiştiriyor?', 'Ek, yeni bir sözcük mü türetiyor?'] },
          ],
          insight:
            'Kural “özel adlara gelen ekler ayrılır” değildir; “özel adlara gelen **çekim** ekleri ayrılır”dır. Eksik ezber, en yaygın hatanın kaynağıdır.',
        },
        {
          id: 'lgs-noktalama-kesme-tuzak',
          type: 'trap',
          title: 'Yaygın kullanımı kural sanmak',
          wrong: 'Her yerde “Türk Dil Kurumu’na” yazıyor; öyleyse doğrudur.',
          right: 'Kurum adlarına gelen ekler kesmeyle ayrılmaz: “Türk Dil Kurumuna”. Yaygınlık bir kanıt değildir.',
          body: 'Sınavda ölçülen şey kuraldır. Yaygın kullanım, kuralın değiştiğini göstermez; yalnız çok kişinin aynı hatayı yaptığını gösterir.',
        },
      ],
    },

    {
      id: 'lgs-turkce-noktalama-diger',
      title: 'Noktalı virgül, iki nokta ve üç nokta',
      lead: 'Üç işaret, üç net görev. Karıştırılmalarının sebebi görevlerinin benzer görünmesidir.',
      blocks: [
        {
          id: 'lgs-noktalama-diger-anlatim',
          type: 'prose',
          body: `**Noktalı virgülün iki görevi vardır.**

**Birincisi: kendi içinde virgül bulunan grupları ayırmak.** “Sınıfta Ali, Ayşe; koridorda Mehmet, Zeynep vardı.” Burada iki grup var ve her grubun içinde zaten virgül bulunuyor. Grupları da virgülle ayırsaydık hangi virgülün ne iş yaptığı belirsizleşirdi.

**İkincisi: anlamca bağlı iki cümleyi ayırmak.** “Erken kalktı; yine de yetişemedi.” İki ayrı yargı var ama birbirine bağlı. Nokta koysak bağ zayıflar, virgül koysak cümleler birbirine karışır.

Testi şudur: **ayrılan grupların içinde virgül var mı?** Varsa noktalı virgül; yoksa virgül yeter.

**İki nokta üç durumda kullanılır.**

**Açıklama:** “Bir tek sorun vardı: zaman.”
**Örnekleme/sıralama:** “Çantada üç şey vardı: kalem, defter, silgi.”
**Alıntı öncesi:** “Öğretmen şöyle dedi: ‘Yarın sınav var.’”

Dikkat: her sıralamadan önce iki nokta konmaz. “Çantada kalem, defter, silgi vardı.” cümlesinde iki noktaya gerek yoktur; çünkü sıralama bir açıklama olarak sunulmuyor. İki nokta, kendinden sonra gelenin bir **açıklama** olduğunu bildirir.

**Üç nokta üç işi yapar.**

**Tamamlanmamış anlatım:** “Bir şey söyleyecekti ama…”
**Sözün sürdüğünü gösterme:** “Kitaplar, defterler, kalemler…”
**Alıntıda çıkarılan bölüm:** “Yazar, ‘Bu konuda … söylenecek çok şey var.’ diyor.”

Üç nokta ile virgülün karıştığı yer sıralamalardır. Sıralama bitmişse virgül ve “ve” kullanılır; sürdüğü belirtilmek isteniyorsa üç nokta konur.

Son olarak **soru işareti** ve **ünlem** için kısa iki not. Soru işareti, soru anlamı taşıyan cümlenin sonuna konur — soru sözcüğü bulunsa bile cümle soru bildirmiyorsa konmaz: “Nereye gittiğini bilmiyorum.” Ünlem ise seslenme, sesleniş ve güçlü duygu bildiren ifadelerden sonra kullanılır: “Ne güzel bir gün!”`,
        },
        {
          id: 'lgs-noktalama-diger-tablo',
          type: 'table',
          interactive: true,
          title: 'Hangi işaret, hangi durumda?',
          columns: ['Durum', 'İşaret', 'Özgün örnek', 'Neden?'],
          rows: [
            ['Grupların içinde virgül var', 'Noktalı virgül', 'Önde Ali, Ayşe; arkada Mehmet, Zeynep oturdu.', 'İki düzeyli ayırma gerekiyor'],
            ['Anlamca bağlı iki cümle', 'Noktalı virgül', 'Erken kalktı; yine de yetişemedi.', 'Bağ korunsun ama cümleler ayrılsın'],
            ['Sonrasında açıklama var', 'İki nokta', 'Tek bir sorun vardı: zaman.', 'Açıklama geleceğini haber verir'],
            ['Sonrasında alıntı var', 'İki nokta', 'Öğretmen şöyle dedi: “Yarın sınav var.”', 'Alıntı öncesi'],
            ['Sıralama sürüyor', 'Üç nokta', 'Kitaplar, defterler, kalemler…', 'Bitmediğini gösterir'],
            ['Sıralama bitti', 'Virgül + “ve”', 'Kitap, defter ve kalem aldım.', 'Son iki öge arasında virgül konmaz'],
          ],
          caption:
            'Son iki satır birlikte okunmalı: aynı sıralama, bitip bitmediğine göre farklı işaret alır.',
        },
        {
          id: 'lgs-noktalama-diger-tuzak',
          type: 'trap',
          title: 'Soru sözcüğü gördüğü an soru işareti koymak',
          wrong: '“Nereye gittiğini bilmiyorum?” — “nereye” var, soru işareti koydum.',
          right: '“Nereye gittiğini bilmiyorum.” Cümle bir soru sormuyor, bir bilgi veriyor. Soru işareti yalnız soru anlamı taşıyan cümlelerin sonuna konur.',
          body: 'Ölçüt soru sözcüğünün varlığı değil, cümlenin soru sorup sormamasıdır. Aynı mantık “kim, ne, hangi” için de geçerlidir.',
        },
        {
          id: 'lgs-noktalama-diger-hafiza',
          type: 'memory',
          title: 'Üç soruluk noktalama kontrolü',
          body: '**Neyi neyden ayırıyor?** · **Grupların içinde virgül var mı?** · **Ek çekim eki mi?**',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Virgül anlamı nasıl değiştirdi?',
      prompt:
        'Şu iki cümlenin anlam farkını açıkla: (1) “Yorgun öğretmene baktı.” (2) “Yorgun, öğretmene baktı.”',
      steps: [
        { title: '(1) cümlesini çözümle', body: '“Yorgun” bir sıfat ve “öğretmen”i niteliyor. Bakan kişi belirtilmemiş, gizli özne var. Yorgun olan öğretmen.' },
        { title: '(2) cümlesini çözümle', body: 'Virgül “yorgun” sözcüğünü yalıtıyor; artık niteleyici değil, cümlenin öznesi. Bakan kişi yorgun.' },
        { title: 'Kalıbı adlandır', body: 'Sıfat gibi görünen sözcük, virgülle yalıtıldığında özne olur. LGS’nin en sık kullandığı virgül kalıbı budur.' },
        { title: 'Kaldırma testini uygula', body: 'Virgülü kaldırdığımda cümlenin anlamı değişiyor mu? Evet. Demek ki virgül gerekli ve anlam taşıyor.' },
        { title: 'Sınavda nasıl sorulur?', body: '“Bu cümledeki virgül kaldırılırsa anlam nasıl değişir?” ya da “Hangi cümlede virgül anlamı değiştirmektedir?” biçiminde.' },
      ],
      answer:
        '(1) Öğretmen yorgundur ve ona birisi bakmaktadır. (2) Bakan kişi yorgundur ve öğretmene bakmaktadır.',
      takeaway: 'Virgül, bir sözcüğü niteleyici olmaktan çıkarıp bağımsız bir öge yapabilir.',
    },
    {
      title: 'Seviye 2 — Kesme işareti kararı',
      prompt:
        'Şu yazımları denetle: (1) “Ankara’ya gittik.” (2) “Türk’çe konuşuyoruz.” (3) “Türk Dil Kurumu’na yazdım.” (4) “1985’te doğdu.”',
      steps: [
        { title: '(1) ek türünü belirle', body: '“-ya” bir hâl ekidir, yani çekim eki. Özel ada gelen çekim eki kesmeyle ayrılır. → **Doğru**.' },
        { title: '(2) ek türünü belirle', body: '“-çe” bir yapım ekidir; yeni bir sözcük türetiyor (dil adı). Yapım ekleri kesmeyle ayrılmaz. → **Yanlış**: “Türkçe”.' },
        { title: '(3) kurum adı kuralını uygula', body: '“Türk Dil Kurumu” bir kurum adıdır; kurum adlarına gelen ekler kesmeyle ayrılmaz. → **Yanlış**: “Türk Dil Kurumuna”.' },
        { title: '(4) sayıya gelen eki denetle', body: 'Sayılara gelen ekler kesmeyle ayrılır. → **Doğru**.' },
        { title: 'Ortak ölçütü yaz', body: 'Üç soru: ek çekim eki mi? Özel ad bir kurum adı mı? Sözcük bir kısaltma ya da sayı mı?' },
      ],
      answer: '(1) doğru · (2) yanlış → “Türkçe” · (3) yanlış → “Türk Dil Kurumuna” · (4) doğru',
      takeaway:
        '“Özel ada gelen her ek ayrılır” ezberi yanlıştır; kural yalnız çekim eklerini kapsar ve kurum adlarını dışarıda bırakır.',
    },
    {
      title: 'Seviye 3 — Hangi işaret gerekiyor?',
      prompt:
        'Şu cümlelere uygun noktalama işaretini koy ve gerekçelendir: (1) “Çantada üç şey vardı kalem defter silgi” (2) “Önde Ali Ayşe arkada Mehmet Zeynep oturdu” (3) “Öğretmen şöyle dedi Yarın sınav var”',
      steps: [
        { title: '(1) sonrasında ne geliyor?', body: 'Bir açıklama/sıralama geliyor. → İki nokta. Sonra eş görevli ögeler → virgül. “Çantada üç şey vardı: kalem, defter, silgi.”' },
        { title: '(2) grupları belirle', body: 'İki grup var: “Önde Ali, Ayşe” ve “arkada Mehmet, Zeynep”. Her grubun içinde virgül var.' },
        { title: '(2) işareti seç', body: 'Grupların içinde virgül bulunduğu için gruplar noktalı virgülle ayrılır: “Önde Ali, Ayşe; arkada Mehmet, Zeynep oturdu.”' },
        { title: '(3) alıntı var mı?', body: 'Evet, bir söz olduğu gibi aktarılıyor. Alıntı öncesinde iki nokta, alıntının kendisinde tırnak: “Öğretmen şöyle dedi: ‘Yarın sınav var.’”' },
        { title: 'Kararları gerekçelendir', body: 'Üç cümlede de kararı tek bir soru verdi: bu işaret neyi neyden ayırıyor ya da neyi haber veriyor?' },
      ],
      answer:
        '(1) “Çantada üç şey vardı: kalem, defter, silgi.” (2) “Önde Ali, Ayşe; arkada Mehmet, Zeynep oturdu.” (3) “Öğretmen şöyle dedi: ‘Yarın sınav var.’”',
      takeaway:
        'İşaret seçimi ezberle değil, işaretin yaptığı işi adlandırarak yapılır.',
    },
  ],

  questionClue: {
    concept: 'noktalama sorusu',
    statement:
      'Soru kökünde “noktalama yanlışı”, “hangi işaret getirilmelidir”, “virgülün kaldırılması durumunda” ifadelerinden biri varsa, sorulan şey işaretin yaptığı iştir.',
    clues: [
      'Bir cümlede işaretlerin çıkarılıp yerlerinin boş bırakılması',
      'Aynı cümlenin virgüllü ve virgülsüz hâllerinin karşılaştırılması',
      'Özel adlara gelen eklerin bulunması',
      'Karşılıklı konuşma biçiminde verilmiş metinler',
      'Numaralandırılmış işaretlerden birinin sorulması',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, işaretin görevini bilip bilmediğini ölçüyor. Çözüm yolu “bu işaret neyi neyden ayırıyor?” sorusunu cevaplamak ve gerektiğinde kaldırma testini uygulamaktır.',
    boundary:
      'Bu ipuçlarını “özel ad varsa kesme koy” gibi bir kısayola çevirme. Yapım ekleri ve kurum adları bu kuralın dışındadır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Dört cümleden hangisinde noktalama yanlışı bulunduğunun sorulması',
      'Bir cümlede numaralanmış işaretlerden hangisinin yanlış kullanıldığının sorulması',
      'Virgülün yeri değiştiğinde anlamın nasıl değiştiğinin sorulması',
      'Boş bırakılan yere hangi işaretin getirileceğinin sorulması',
      'Kesme işaretinin doğru kullanıldığı cümlenin seçtirilmesi',
      'Bir metinde tırnak ve konuşma çizgisinin ayırt ettirilmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Bu soruyu kimin çözdüğünü biliyorum?” cümlesindeki noktalama doğru mu?',
      hint: 'Cümle gerçekten soru soruyor mu?',
      answer:
        'Yanlıştır. Cümlede “kimin” soru sözcüğü geçiyor ama cümle soru sormuyor; bir bilgi veriyor. Soru işareti yalnız soru anlamı taşıyan cümlelerin sonuna konur. Doğrusu: “Bu soruyu kimin çözdüğünü biliyorum.” Ölçüt, soru sözcüğünün varlığı değil cümlenin soru sorup sormamasıdır.',
    },
    {
      prompt:
        '“Sınıfta Ali, Ayşe, koridorda Mehmet, Zeynep vardı.” cümlesinde bir sorun var mı?',
      hint: 'Kaç grup var ve grupların içinde ne var?',
      answer:
        'Vardır. İki grup ayrılıyor (“Sınıfta Ali, Ayşe” ve “koridorda Mehmet, Zeynep”) ve her grubun içinde zaten virgül bulunuyor. Grupları da virgülle ayırmak belirsizlik yaratır. Doğrusu, grupların noktalı virgülle ayrılmasıdır: “Sınıfta Ali, Ayşe; koridorda Mehmet, Zeynep vardı.”',
    },
    {
      prompt:
        '“Türkçe’yi çok seviyorum.” yazımı doğru mu? Gerekçeni kurala dayandır.',
      hint: '“-çe” hangi tür ektir?',
      answer:
        'Yanlıştır. “Türkçe” sözcüğündeki “-çe” bir yapım ekidir ve yapım ekleri kesmeyle ayrılmaz; yapım ekinden sonra gelen çekim ekleri de ayrılmaz. Doğrusu “Türkçeyi”dir. Kural yalnız özel adlara doğrudan gelen **çekim** eklerini kapsar: “Ankara’ya”, “Ahmet’in”.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey işaret ezberi değil, işaretin işi',
    body:
      'Okuma kazanımı T.8.3.1 noktalama işaretlerine dikkat ederek okumayı, yazma kazanımı T.8.4.16 ise yazdıklarını bu kurallar açısından düzenlemeyi ister. MEB’in merkezî sınav kılavuzu da soruların analiz yapma ve eleştirel düşünme becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: sorular işaretlerin adını değil, bir cümlede yaptıkları işi sorar. Bu yüzden virgülün anlamı değiştirdiği sorular sık kullanılır.',
    measures: [
      'Bir işaretin cümlede ne işe yaradığını adlandırabilme',
      'Virgülün yeri değiştiğinde anlamın nasıl değiştiğini gösterebilme',
      'Virgül ile noktalı virgülü grup içi virgül ölçütüyle ayırabilme',
      'İki noktanın açıklama bildirme işlevini tanıyabilme',
      'Kesme işaretinde çekim eki–yapım eki ayrımını yapabilme',
      'Kurum adlarına gelen eklerin ayrılmadığını bilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Okul gazetemizin ilk sayısı çıktı. **(I)** Kapakta üç haber vardı: kütüphane şenliği, bahçe düzenlemesi, satranç turnuvası. **(II)** Yazıları Ayşe, Mehmet; fotoğrafları Zeynep, Can hazırladı. **(III)** Öğretmenimiz, “Bu sayı beklediğimden güzel olmuş.” dedi. **(IV)** Gazeteyi Atatürk Ortaokulu’nun bütün sınıflarına dağıttık.`,
    question: 'Bu parçada numaralanmış cümlelerin hangisinde noktalama yanlışı vardır?',
    options: [
      {
        text: '(I) numaralı cümle',
        explanation:
          'Yanlış yok. İki nokta kendinden sonra bir açıklama/sıralama geleceğini haber veriyor; eş görevli ögeler de virgülle ayrılmış. İkisi de kurala uygun.',
      },
      {
        text: '(II) numaralı cümle',
        explanation:
          'Yanlış yok. İki grup ayrılıyor ve her grubun içinde zaten virgül var; bu yüzden gruplar noktalı virgülle ayrılmış. Tam da noktalı virgülün birinci görevi.',
      },
      {
        text: '(III) numaralı cümle',
        explanation:
          'Yanlış yok. Başkasının sözü olduğu gibi aktarıldığı için tırnak kullanılmış; “Öğretmenimiz” sözcüğünden sonraki virgül de özneyi belirginleştiriyor.',
      },
      {
        text: '(IV) numaralı cümle',
        explanation:
          'Doğru cevap. “Atatürk Ortaokulu” bir kurum adıdır; kurum, kuruluş ve iş yeri adlarına gelen ekler kesmeyle ayrılmaz. Doğrusu “Atatürk Ortaokulunun” olmalıydı.',
      },
      {
        text: '(II) ve (IV) numaralı cümleler',
        explanation:
          '(II) numaralı cümlede noktalı virgül doğru kullanılmıştır; grupların içinde virgül bulunduğu için gereklidir. Bu yüzden seçenek kendi içinde yanlıştır.',
      },
    ],
    answer_index: 3,
    stem_analysis:
      'Soru numaralanmış cümlelerden birinde noktalama yanlışı arıyor. Yöntem: her cümlede hangi işaretlerin kullanıldığını belirle ve her biri için “bu işaret hangi kurala dayanıyor?” diye sor.',
    critical_point:
      'Kritik nokta, (IV) numaralı cümledeki kullanımın günlük yazışmalarda çok yaygın olması. Yaygınlık doğruluk kanıtı değildir: kurum adlarına gelen ekler kesmeyle ayrılmaz.',
    takeaway:
      'Sık gördüğün bir kullanım kurala uygun olmayabilir. Kararı kural verir, alışkanlık değil.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question: 'Aşağıdaki cümlelerin hangisinde noktalama yanlışı **vardır**?',
      options: [
        'Ahmet, kapıyı yavaşça araladı.',
        'Çantamda kalem, defter ve silgi vardı.',
        'Nerede oturduğunu bilmiyorum?',
        'Erken kalktı; yine de otobüsü kaçırdı.',
      ],
      answer_index: 2,
      explanation:
        'Üçüncü cümle bir soru sormuyor, bilgi veriyor; sonuna nokta konmalıydı. “Nerede” soru sözcüğünün bulunması soru işareti gerektirmez. Birinci cümlede seslenme/özne virgülle ayrılmış, ikinci cümlede son iki öge “ve” ile bağlandığı için araya virgül konmamış, dördüncü cümlede anlamca bağlı iki cümle noktalı virgülle ayrılmış — üçü de doğrudur.',
    },
    {
      purpose: 'concept',
      question: 'Aşağıdaki kullanımların hangisinde kesme işareti **doğru** kullanılmıştır?',
      options: [
        'Türkçe’yi çok seviyorum.',
        'Boğaziçi Üniversitesi’nde okuyor.',
        'Ahmet’in kalemini ödünç aldım.',
        'Avrupalı’laşmak kolay değil.',
      ],
      answer_index: 2,
      explanation:
        '“Ahmet’in” kullanımında özel ada bir çekim eki (tamlayan eki) gelmiş ve kesmeyle ayrılmıştır; kurala uygundur. Birinci ve dördüncüde yapım ekleri kesmeyle ayrılmış, bu yanlıştır (“Türkçeyi”, “Avrupalılaşmak”). İkincide kurum adına gelen ek ayrılmış, bu da yanlıştır (“Boğaziçi Üniversitesinde”).',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Sınıfta Ali, Ayşe, bahçede Mehmet, Zeynep vardı.” cümlesini doğru buluyor. Bu öğrencinin hatası nedir?',
      options: [
        'Grup içi virgül bulunduğu hâlde grupları da virgülle ayırmak',
        'Özne ile yüklem arasına virgül koymak',
        'Ara sözü tek virgülle ayırmak',
        'Soru işareti yerine nokta kullanmak',
      ],
      answer_index: 0,
      explanation:
        'Cümlede iki grup var ve her grubun içinde zaten virgül bulunuyor. Grupları da virgülle ayırmak, hangi virgülün hangi işi yaptığını belirsizleştirir. Noktalı virgülün birinci görevi tam olarak budur: “Sınıfta Ali, Ayşe; bahçede Mehmet, Zeynep vardı.”',
    },
  ],

  summary: [
    'Noktalama süs değildir; okurun anlamı doğru kurmasını sağlar.',
    'Virgülün yeri değişince cümlenin öznesi ve anlamı değişebilir: “Genç, adama baktı.” ↔ “Genç adama baktı.”',
    'Virgül en az beş iş yapar: eş görevli ögeleri, seslenmeyi, ara sözü ayırır; özneyi belirginleştirir; sıralı cümleleri ayırır.',
    'Ara söz iki virgül ister; tek virgülle açılıp kapatılmaz.',
    'Virgül kural olarak özne ile yüklem arasına konmaz.',
    'Noktalı virgül, içinde virgül bulunan grupları ve anlamca bağlı iki cümleyi ayırır.',
    'İki nokta, kendinden sonra açıklama, örnek ya da alıntı geleceğini bildirir.',
    'Kesme işareti özel adlara gelen **çekim** eklerini ayırır; yapım ekleri ve sonrası ayrılmaz.',
    'Kurum, kuruluş ve iş yeri adlarına gelen ekler kesmeyle ayrılmaz.',
    'Soru işareti yalnız soru anlamı taşıyan cümlelerin sonuna konur; soru sözcüğünün varlığı yetmez.',
  ],

  next: [
    'Anlatım Bozuklukları: Dil Bilgisi Yönünden (T.8.3.8)',
    'Cümle Türleri (T.8.4.19)',
    'Metin Türleri: Fıkra, Makale, Deneme, Roman, Destan (T.8.3.26)',
  ],
})

export default lesson
