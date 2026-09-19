import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.4 Atatürkçülük ve Çağdaşlaşan Türkiye · 5. ders
 * Kazanım : İTA.8.4.8
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   a) Büyük Nutuk ve Onuncu Yıl Nutku ele alınır.
 *   b) Gençliğe Hitabe’den hareketle Cumhuriyet’in korunmasında ve sürekliliğinin
 *      sağlanmasında gençliğe verilen görev ve sorumluluklar vurgulanır.
 *   c) Atatürk’ün kişilik özelliklerinden çok yönlülüğü, akılcılığı, bilimselliği ve
 *      çağdaşlığı vurgulanır.
 *
 * KAPSAM KARARI
 * Nutuk’un son bölümü ve Gençliğe Hitabe Vikikaynak’taki Nutuk metninden,
 * Onuncu Yıl Nutku Vikikaynak’taki metinden (kaynak: İşeri 2010) birebir alındı.
 * Nutuk’un okunma süresi kaynaklarda 36 saat 31 ve 33 dakika olarak iki farklı
 * biçimde geçtiği için yaklaşık olarak verildi. Kaynağı tartışmalı özdeyişler
 * kullanılmadı. Harita yoktur.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 19.
 */

const SLUG = 'lgs-tarih-cumhuriyetin-kazanimlari'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Atatürkçülük ve Çağdaşlaşan Türkiye',
  order: 5,
  title: 'Cumhuriyet’in Kazanımları ve Atatürk’ün Hedefleri',
  subtitle:
    'Nutuk geçmişin hesabını verdi, Onuncu Yıl Nutku geleceğin hedefini koydu, Gençliğe Hitabe ise bu mirası gençlere emanet etti. Bu derste Cumhuriyet’in on beş yılını ve Atatürk’ün gösterdiği yolu analiz edeceksin.',
  minutes: 45,
  kazanimlar: ['İTA.8.4.8'],
  kapsamNotu:
    'Nutuk’un son bölümü, Gençliğe Hitabe ve Onuncu Yıl Nutku birebir alıntılanmıştır. Kaynağı tartışmalı özdeyişler kullanılmamıştır; Atatürk’ün kişilik özellikleri belgelenmiş olay ve eserlerle örneklenmiştir.',
  prerequisites: [
    {
      topic: 'Atatürk ilkeleri ve inkılaplar (4. ünite)',
      why: 'Cumhuriyet’in kazanımları, önceki derslerde öğrendiğin inkılapların toplamıdır.',
    },
    {
      topic: 'Millî Mücadele (3. ünite)',
      why: 'Nutuk en çok 1919–1927 arasındaki mücadeleyi anlatır.',
    },
  ],
  outcomes: [
    'Cumhuriyet’in sağladığı kazanımları alan alan analiz edebileceksin.',
    'Nutuk’un ve Onuncu Yıl Nutku’nun içeriğini ve amacını açıklayabileceksin.',
    'Gençliğe Hitabe’den gençliğin görev ve sorumluluklarını çıkarabileceksin.',
    'Atatürk’ün çok yönlülüğünü, akılcılığını, bilimselliğini ve çağdaşlığını belgelerle örnekleyebileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'On beş yılda ne değişti?',
    lead:
      '1918’de Mondros’u imzalayan, toprakları işgal edilen bir devlet vardı. 1933’te ise Cumhuriyet onuncu yılını kutluyordu.',
    body:
      'Bu ders, ünitenin önceki derslerinde öğrendiklerini bir araya getirir ve bir soru sorar: **Cumhuriyet Türk milletine ne kazandırdı ve Atatürk milletine hangi hedefleri gösterdi?**\n\n' +
      'Bu sorunun cevabını Atatürk’ün üç metninde ararız. **Nutuk** (15–20 Ekim 1927), 1919’dan 1927’ye kadar yaşananların hesabını belgeleriyle verir. Nutuk’un son bölümü olan **Gençliğe Hitabe**, kazanılanları gençliğe emanet eder. **Onuncu Yıl Nutku** (29 Ekim 1933) ise yapılanları kısaca anar ve geleceğin hedefini koyar: “Millî kültürümüzü, muasır medeniyet seviyesinin üstüne çıkaracağız.”\n\n' +
      'Program ayrıca Atatürk’ün kişilik özelliklerinden **çok yönlülüğünü, akılcılığını, bilimselliğini ve çağdaşlığını** vurgulamanı ister. Bu özellikleri övgü cümleleriyle değil, onun kararları ve eserleriyle göstereceğiz.',
  },
  concepts: [
    { term: 'Nutuk', body: 'Atatürk’ün 15–20 Ekim 1927’de Cumhuriyet Halk Fırkası’nın İkinci Büyük Kongresi’nde okuduğu, 1919–1927 dönemini belgelerle anlatan büyük konuşması.' },
    { term: 'Onuncu Yıl Nutku', body: 'Atatürk’ün Cumhuriyet’in onuncu yılında, 29 Ekim 1933’te Ankara’da yaptığı konuşma.' },
    { term: 'Gençliğe Hitabe', body: 'Nutuk’un son bölümü. Atatürk bu bölümde Türk istiklalini ve Cumhuriyeti gençliğe emanet eder.' },
    { term: 'Muasır medeniyet', body: 'Çağdaş uygarlık. Atatürk bu düzeye ulaşmayı değil, onun üstüne çıkmayı hedef gösterdi.' },
    { term: 'Müspet ilim', body: 'Olgulara, gözleme ve deneye dayanan bilim. Onuncu Yıl Nutku’nda Türk milletinin elindeki “meşale” olarak anılır.' },
  ],
  why: {
    question: 'Atatürk neden hem geçmişi anlattı hem de geleceği gösterdi?',
    body:
      'Çünkü bir milletin yolunu bilmesi için nereden geldiğini bilmesi gerekir. Nutuk, Millî Mücadele’nin nasıl kazanıldığını ve Cumhuriyet’in neden kurulduğunu belgelerle anlatarak bu hafızayı oluşturdu. Nutuk’un sonunda Atatürk, bu anlatımla “millî hayatı hitam bulmuş farzedilen” bir milletin istiklalini nasıl kazandığını ve “millî ve asri” bir devleti nasıl kurduğunu anlatmaya çalıştığını söyler.\n\n' +
      'Ama kazanılanlar korunmazsa kaybedilebilirdi. Bu yüzden Gençliğe Hitabe koruma görevini gençliğe verir; Onuncu Yıl Nutku da yapılanları “asla kâfi” görmeyerek daha büyük hedefler koyar. Geçmişin bilinci, geleceğin hedefi ve bu hedefe yürüyecek bir nesil: Üç metin birbirini tamamlar.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Mondros’tan Onuncu Yıl’a (1918–1937)',
    lead: 'Bu kronoloji ünitenin ve bir önceki ünitenin kısa bir özetidir. Her satırı Cumhuriyet’in bir kazanımıyla eşleştir.',
    intro: 'Kronolojinin ortasında iki metin var: 1927’de Nutuk, 1933’te Onuncu Yıl Nutku.',
    items: [
      { title: '30 Ekim 1918 · Mondros', body: 'Osmanlı Devleti yenildi; ülke işgale açık hâle geldi.' },
      { title: '23 Nisan 1920 · Büyük Millet Meclisi', body: 'Egemenlik milletin seçtiği Meclis’te toplandı.' },
      { title: '24 Temmuz 1923 · Lozan', body: 'Bağımsızlık ve sınırlar uluslararası alanda tanındı; kapitülasyonlar kaldırıldı.' },
      { title: '29 Ekim 1923 · Cumhuriyet', body: 'Devletin rejimi cumhuriyet oldu.' },
      { title: '1924–1926 · Laik hukuk ve eğitim birliği', body: 'Tevhid-i Tedrisat, 1924 Anayasası ve Türk Medeni Kanunu.' },
      { title: '15–20 Ekim 1927 · Nutuk', body: 'Atatürk 1919–1927 dönemini altı günde, yaklaşık 36,5 saatte okudu; son bölüm Gençliğe Hitabe’dir.' },
      { title: '1 Kasım 1928 · Harf İnkılabı', body: 'Okuma yazma kolaylaştı; Millet Mektepleri açıldı (1929).' },
      { title: '1931–1933 · Bilim ve kültür kurumları', body: 'Türk Tarih ve Türk Dil kurumları; 1933 Üniversite Reformu.' },
      { title: '29 Ekim 1933 · Onuncu Yıl Nutku', body: '“Millî kültürümüzü, muasır medeniyet seviyesinin üstüne çıkaracağız.”' },
      { title: '1934 · Kadınların siyasi hakları ve soyadı', body: 'Kadınlara milletvekili seçme ve seçilme hakkı; Soyadı Kanunu.' },
      { title: '5 Şubat 1937 · İlkeler anayasada', body: 'Altı ilke anayasanın 2. maddesine girdi.' },
    ],
    takeaway:
      'Dikkat et: Nutuk (1927) daha çok geçmişe, Onuncu Yıl Nutku (1933) daha çok geleceğe bakar. İkisinin arasındaki altı yılda harf, eğitim, bilim ve kültür alanında büyük adımlar atıldı.',
    body:
      'Kronolojiyi “önce–sonra” diye oku. 1918’de egemenlik bir padişahtaydı, ülke işgal altındaydı, kapitülasyonlar sürüyordu, kadınların siyasi hakkı yoktu, nüfusun çok küçük bir kısmı okuma yazma biliyordu. 1937’ye gelindiğinde egemenlik milletindi, ülke bağımsızdı, hukuk laik ve eşitti, kadınlar Meclis’e girmişti, yeni harflerle okuma yazma yaygınlaşmış, üniversite yenilenmişti.\n\n' +
      'Atatürk bu değişimi yeterli bulmadı. Onuncu Yıl Nutku’nda “Fakat yaptıklarımızı asla kâfi göremeyiz. Çünkü daha çok ve daha büyük işler yapmak mecburiyetinde ve azmindeyiz.” diyerek zamanın ölçüsünün “asrımızın sürat ve hareket mefhumuna göre” düşünülmesi gerektiğini söyledi.',
  },
  dataTable: {
    title: 'Cumhuriyet’in kazanımları: alan alan analiz',
    columns: ['Alan', '1918’de durum', '1938’e gelindiğinde', 'Kanıt'],
    rows: [
      ['Egemenlik', 'Padişah ve hanedan', 'Millet; seçilmiş Meclis ve Cumhurbaşkanı', '1921 ve 1924 anayasaları; Cumhuriyet’in ilanı'],
      ['Bağımsızlık', 'İşgaller, kapitülasyonlar, yabancı denetimi', 'Tam bağımsızlık; kapitülasyonlar kaldırıldı', 'Lozan Antlaşması (1923), 28. madde'],
      ['Hukuk', 'Farklı mahkemeler, dinî aile hukuku', 'Hukuk birliği, laik ve çağdaş kanunlar', 'Türk Medeni Kanunu ve 1926 kanunları'],
      ['Eğitim', 'Dağınık okullar, düşük okuma yazma', 'Birleşmiş eğitim, yeni harfler, yenilenmiş üniversite', 'Tevhid-i Tedrisat, Harf İnkılabı, 1933 reformu'],
      ['Kadın', 'Siyasi hakkı yok, aile hukukunda eşitsizlik', 'Seçme ve seçilme hakkı; aile ve mirasta eşitlik', 'Medeni Kanun (1926); 1930–1934 düzenlemeleri'],
      ['Ekonomi', 'Harap tarım, dış borç, sanayi yok', 'Millî ekonomi, devlet fabrikaları, sanayi planı', 'İzmir İktisat Kongresi; Birinci Beş Yıllık Sanayi Planı'],
      ['Sağlık', 'Salgınlar, yetersiz teşkilat', 'Sağlık “umumî Devlet hizmeti”', 'Umumi Hıfzıssıhha Kanunu (1930)'],
      ['Kültür ve bilim', 'Kurumlaşmamış tarih ve dil çalışmaları', 'Türk Tarih ve Türk Dil kurumları, konservatuvar, Halkevleri', 'TTK (1931), TDK (1932), Konservatuvar (1936)'],
    ],
    caption:
      'Bu tablo ünitenin özetidir. Her satırdaki kanıtın ayrıntısını önceki derslerde bulabilirsin. “Analiz et” diyen sorularda bu satırları birer kanıt olarak kullan.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Yıkılan bir devletten kalıcı bir Cumhuriyet’e',
    lead: 'Cumhuriyet’in kazanımları rastgele değil, bir zincirin halkalarıdır. Bu zincir, Nutuk’ta anlatılan yolun özetidir.',
    intro: 'Zincirin başı 1918’deki durumu, ortası mücadeleyi ve inkılapları, sonu da kazanımları ve gençliğe bırakılan emaneti anlatır.',
    steps: [
      { tur: 'sebep', title: 'Yıkılmış bir devlet', body: 'Mondros’tan sonra ülke işgal edildi; Nutuk’un deyişiyle Türk milletinin “millî hayatı hitam bulmuş” farz ediliyordu.' },
      { tur: 'sebep', title: 'Millî irade', body: 'Millet egemenliği kendi eline aldı; Büyük Millet Meclisi açıldı.' },
      { tur: 'gelisme', title: 'Millî Mücadele ve Lozan', body: 'Askerî zaferler Lozan’da uluslararası bir belgeye dönüştü.' },
      { tur: 'gelisme', title: 'İnkılaplar', body: 'Siyasi, hukuki, eğitim, toplumsal, ekonomik ve sağlık alanında köklü değişiklikler yapıldı.' },
      { tur: 'sonuc', title: 'Millî ve asri bir devlet', body: 'Nutuk’taki ifadeyle “ilim ve fennin en son esaslarına müstenid, millî ve asri bir devlet” kuruldu.' },
      { tur: 'sonraki-etki', title: 'Gençliğe emanet ve yeni hedef', body: 'Kazanımlar gençliğe emanet edildi; Onuncu Yıl Nutku muasır medeniyet seviyesinin üstüne çıkma hedefini koydu.' },
    ],
    inference:
      'Temel çıkarım: Cumhuriyet’in kazanımları bir “son” değil, bir “başlangıç” olarak sunuldu. Atatürk kazanılanı korumayı gençliğe, daha ileri gitmeyi de bütün millete görev olarak verdi.',
    body:
      'Program bu kazanımda “analiz eder” fiilini kullanır. Analiz, bütünü parçalarına ayırıp her parçanın rolünü görmektir. Cumhuriyet’in kazanımlarını analiz ederken şu üç soruyu sor:\n\n' +
      '- **Neyi değiştirdi?** (Örneğin egemenlik padişahtan millete geçti.)\n' +
      '- **Kanıtı nedir?** (Örneğin 1924 Anayasası’nın 3. maddesi.)\n' +
      '- **Bugüne etkisi nedir?** (Örneğin bugünkü anayasada da Cumhuriyet ve laiklik değiştirilemez hükümler arasındadır.)',
  },
  comparison: {
    title: 'Üç metin: Nutuk, Gençliğe Hitabe, Onuncu Yıl Nutku',
    columns: ['Nutuk', 'Gençliğe Hitabe', 'Onuncu Yıl Nutku'],
    rows: [
      { label: 'Tarih ve yer', values: ['15–20 Ekim 1927; Cumhuriyet Halk Fırkası İkinci Büyük Kongresi, Ankara', '20 Ekim 1927; Nutuk’un son bölümü', '29 Ekim 1933; Cumhuriyet’in onuncu yıl kutlaması, Ankara'] },
      { label: 'Kime seslenir?', values: ['Kongre üyelerine, millete ve tarihe', 'Türk gençliğine', 'Türk milletine'] },
      { label: 'Konusu', values: ['1919–1927 arasındaki mücadele ve kararlar; belgelerle', 'İstiklal ve Cumhuriyet’in korunması görevi', 'On yılın başarıları ve gelecek hedefleri'] },
      { label: 'Zamana bakışı', values: ['Geçmişe (hesap verme)', 'Geleceğe (görev verme)', 'Bugünden geleceğe (hedef koyma)'] },
      { label: 'Ana mesaj', values: ['Bağımsızlık ve Cumhuriyet nasıl kazanıldı?', 'Bu kazanımı her koşulda koru.', 'Yaptıklarımız yeterli değil; muasır medeniyetin üstüne çıkacağız.'] },
    ],
    insight:
      'Asıl bağlantı: Üç metin bir zaman çizgisi oluşturur. Nutuk dünü, Hitabe bugünün görevini, Onuncu Yıl Nutku yarının hedefini anlatır.',
  },
  traps: [
    {
      title: 'Gençliğe Hitabe’yi ayrı bir konuşma sanmak',
      wrong: 'Gençliğe Hitabe, Atatürk’ün 1933’te gençlere yaptığı ayrı bir konuşmadır.',
      right: 'Gençliğe Hitabe, 1927’de okunan Nutuk’un son bölümüdür.',
      body: 'Vikikaynak’taki Nutuk metninde bu bölümün başlığı “Türk gençliğine bıraktığım emanet”tir.',
    },
    {
      title: 'Hedefi “ulaşmak” olarak ezberlemek',
      wrong: 'Onuncu Yıl Nutku’nda Atatürk, millî kültürü muasır medeniyet seviyesine ulaştırmayı hedef gösterdi.',
      right: 'Onuncu Yıl Nutku’ndaki ifade “muasır medeniyet seviyesinin üstüne çıkaracağız”dır; hedef ulaşmak değil, onun da ötesine geçmektir.',
      body: 'Küçük bir sözcük farkı, hedefin büyüklüğünü değiştirir.',
    },
    {
      title: '“Ne mutlu Türküm diyene!” sözünün yerini karıştırmak',
      wrong: '“Ne mutlu Türküm diyene!” Gençliğe Hitabe’nin son cümlesidir.',
      right: 'Bu söz Onuncu Yıl Nutku’nun son cümlesidir. Gençliğe Hitabe “Muhtaç olduğun kudret, damarlarındaki asil kanda, mevcuttur!” cümlesiyle biter.',
      body: 'Sınavlarda metinlerin son cümleleri sıkça karıştırılır.',
    },
    {
      title: 'Nutuk’u bir anı kitabı sanmak',
      wrong: 'Nutuk, Atatürk’ün çocukluğundan itibaren hayatını anlattığı bir anı kitabıdır.',
      right: 'Nutuk, 19 Mayıs 1919’dan 1927’ye kadar yaşanan siyasi ve askerî olayları anlatan ve bunları telgraf, mektup gibi belgelerle destekleyen bir konuşmadır; metnin sonuna ayrıca bir belgeler (vesikalar) bölümü eklenmiştir.',
      body: 'Nutuk’u birincil kaynak olarak kullanırken, onun bir liderin kendi bakış açısından yazdığı bir hesap verme metni olduğunu da unutma.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Atatürk’ün kişilik özellikleri: kararları ve eserleriyle',
    lead: 'Program Atatürk’ün çok yönlülüğünü, akılcılığını, bilimselliğini ve çağdaşlığını vurgulamanı ister. Bu kartlar, bu özellikleri tek tek birer kanıtla gösterir.',
    intro: 'Her kart Atatürk’ün farklı bir rolünü ele alır. Son kart, Atatürk’ün bir eserini sonraki kuşaklara tanıtan bir bilim insanına aittir.',
    figures: [
      {
        name: 'Mustafa Kemal Atatürk · Komutan',
        period: '1915–1922',
        position: 'Asker ve Başkomutan',
        contribution: 'Kütahya–Eskişehir’den sonra ordunun Sakarya’nın doğusuna çekilmesine karar verdi; Büyük Taarruz’u ordu hazır olana kadar bekletti ve gizlice planlattı.',
        connections: ['Akılcılık'],
        significance: 'Duygularla değil gerçeklerle karar veren bir komutanın örneği: “Askerliğin icabını bilâ-tereddüt tatbik edelim.” (Nutuk)',
      },
      {
        name: 'Mustafa Kemal Atatürk · Devlet kurucusu',
        period: '1920–1938',
        position: 'Meclis Başkanı ve Cumhurbaşkanı',
        contribution: 'Millî egemenliğe dayalı bir devlet kurdu; saltanat, halifelik gibi kurumları kaldırıp yerine çağdaş kurumlar getirdi.',
        connections: ['Çağdaşlık'],
        significance: 'Nutuk’taki ifadesiyle “millî ve asri” bir devlet kurmayı hedefledi.',
      },
      {
        name: 'Mustafa Kemal Atatürk · Eğitimci ve yazar',
        period: '1927–1937',
        position: 'Başöğretmen, yazar',
        contribution: 'Nutuk’u yazdı ve okudu; Millet Mektepleri’nin başöğretmeni oldu; Medenî Bilgiler için notlar yazdı; 1936–1937 kışında geometri öğretimi için Türkçe terimler içeren bir kılavuz kitap hazırladı.',
        connections: ['Çok yönlülük'],
        significance: 'Asker ve devlet adamı olmasının yanında öğretmen ve yazar kimliğiyle de iz bıraktı.',
      },
      {
        name: 'Mustafa Kemal Atatürk · Bilimin savunucusu',
        period: '1931–1933',
        position: 'Kurum kurucusu',
        contribution: 'Türk Tarih ve Türk Dil kurumlarının kurulmasını sağladı; 1933 Üniversite Reformu’nu destekledi; Onuncu Yıl Nutku’nda milletin elindeki meşalenin “müspet ilim” olduğunu söyledi.',
        connections: ['Bilimsellik'],
        significance: 'Kalkınmanın ve kültürün temeline bilimi koydu.',
      },
      {
        name: 'Agop Dilaçar',
        period: '1971',
        position: 'Dil bilimci',
        contribution: 'Atatürk’ün hazırladığı Geometri kitabının 1971’de Türk Dil Kurumu tarafından yapılan ikinci baskısının önsözünde, kitabın 1936–1937 kışında Atatürk tarafından yazıldığını belirtti. Kitapta açı, üçgen, dörtgen, çember, köşegen gibi terimler yer alır.',
        connections: ['Çok yönlülük', 'Bilimsellik'],
        significance: 'Atatürk’ün bilim diline katkısını belgeleyen tanıklardan biridir.',
      },
    ],
    takeaway:
      'Atatürk’ün kişilik özelliklerini anlatırken sıfat saymak yerine kanıt göster: “Akılcıydı” demek yerine “Sakarya’ya çekilme kararını gerekçesiyle verdi” de.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-kisilik`,
      title: 'Atatürk’ün kişilik özellikleri: kanıtlarla',
      lead: 'Bu bölümde dört özelliğin her birini bir tanım ve bir kanıtla eşleştireceğiz.',
      blocks: [
        {
          id: `${SLUG}-kisilik-tablo`,
          type: 'table',
          interactive: true,
          title: 'Dört özellik, dört kanıt',
          columns: ['Özellik', 'Ne demek?', 'Kanıt'],
          rows: [
            ['Çok yönlülük', 'Birden fazla alanda bilgi ve yetenek sahibi olmak', 'Komutan, devlet adamı, başöğretmen, Nutuk’un yazarı; dil, tarih ve geometri çalışmaları'],
            ['Akılcılık', 'Kararları duygulara ya da geleneğe değil, akla ve gerçeklere dayandırmak', 'Sakarya’ya çekilme kararı; Büyük Taarruz için doğru zamanı beklemesi'],
            ['Bilimsellik', 'Bilgiyi gözleme, araştırmaya ve kanıta dayandırmak', 'Türk Tarih ve Türk Dil kurumları; 1933 Üniversite Reformu; “müspet ilim” vurgusu'],
            ['Çağdaşlık', 'Çağın gereklerine uygun düşünmek ve yaşamak; geleceğe açık olmak', 'Laik hukuk, Harf İnkılabı, kadın hakları; “muasır medeniyet seviyesinin üstüne” hedefi'],
          ],
          caption: 'Bu özellikler birbirinden ayrı değildir. Örneğin 1933 Üniversite Reformu hem bilimselliğin hem çağdaşlığın kanıtıdır.',
        },
        {
          id: `${SLUG}-kisilik-anlatim`,
          type: 'prose',
          body:
            '**Akılcılığın belgesi.** Nutuk’ta Mustafa Kemal, Kütahya–Eskişehir yenilgisinden sonra İsmet Paşa’ya verdiği direktifi aktarır: Ordu, düşmanla arasına büyük bir mesafe koymak için Sakarya’nın doğusuna kadar çekilebilecektir. Bu kararın “en büyük mahzuru”nun Eskişehir gibi önemli yerlerin bırakılmasının halkta yaratacağı manevi sarsıntı olduğunu da kabul eder; ama “Askerliğin icabını bilâ-tereddüt tatbik edelim.” der. Bu, duygusal bir tepki yerine gerçeklere dayanan bir karardır.\n\n' +
            '**Bilimselliğin belgesi.** Onuncu Yıl Nutku’nda Türk milletinin ilerleme yolunda “elinde ve kafasında tuttuğu meşale”nin “müspet ilim” olduğunu söyler. Bu söz, Türk Tarih Kurumu’nun tarihi “birinci elden kaynaklarla” araştırma amacıyla ve 1933 Üniversite Reformu’yla somutlaşmıştır.\n\n' +
            '**Çok yönlülüğün belgesi.** Aynı kişi bir savaşın başkomutanı, bir devletin kurucusu, bir okuma yazma seferberliğinin başöğretmeni ve bir geometri kılavuzunun yazarıdır.\n\n' +
            '**Çağdaşlığın belgesi.** Onuncu Yıl Nutku zamanın ölçüsünün “geçmiş asırların gevşetici zihniyetine göre değil, asrımızın sürat ve hareket mefhumuna göre” düşünülmesini ister.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste üç metin okuyacaksın: Nutuk’un sonu, Gençliğe Hitabe ve Onuncu Yıl Nutku. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Nutuk ve Gençliğe Hitabe, Vikikaynak’taki Nutuk metninden; Onuncu Yıl Nutku Vikikaynak’taki metinden alınmıştır. Nutuk bir liderin kendi bakış açısından yaptığı bir anlatım olduğu için, birincil kaynak olarak değerlidir ama tarafsız bir tarih kitabı değildir.\n\n' +
      'İlk üç metin birebir alıntıdır. Dördüncü metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Nutuk’un sonu: Ne anlatıldı?',
        kunye: 'Mustafa Kemal, Nutuk (1927), 19. bölüm: “Türk gençliğine bıraktığım emanet”, ilk paragraflar. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı.',
        metin:
          'Efendiler, bu beyânâtımla, millî hayatı hitam bulmuş farzedilen büyük bir milletin, istiklâlini nasıl kazandığını ve ilim ve fennin en son esaslarına müstenid, millî ve asri bir devleti nasıl kurduğunu ifadeye çalıştım. Bugün vâsıl olduğumuz netice, asırlardan beri çekilen millî musîbetlerin intibâhı ve bu aziz vatanın her köşesini sulayan kanların bedelidir. Bu neticeyi, Türk gençliğine emanet ediyorum.',
        soru: 'Atatürk Nutuk’ta neyi anlattığını söylüyor? Kurulan devleti hangi sözcüklerle nitelendiriyor?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Beyânât”: açıklamalar. “Hitam bulmuş farz edilen”: sona ermiş sanılan. “Müstenid”: dayanan. “Asri”: çağdaş. “Vâsıl olmak”: ulaşmak. “Musibet”: felaket. “İntibah”: uyanış.' },
          { title: 'Anlatılanı bul', body: 'Bitmiş sanılan bir milletin bağımsızlığını nasıl kazandığı ve yeni bir devleti nasıl kurduğu.' },
          { title: 'Nitelendirmeyi bul', body: 'Kurulan devlet “ilim ve fennin en son esaslarına” dayanan, “millî ve asri” bir devlettir.' },
          { title: 'Sonucu yorumla', body: 'Kazanılan sonuç, felaketlerden doğan uyanışın ve dökülen kanların bedelidir; bu yüzden korunmak üzere gençliğe emanet edilir.' },
        ],
        cevap: 'Atatürk, bitmiş sanılan bir milletin bağımsızlığını nasıl kazandığını ve yeni bir devleti nasıl kurduğunu anlattığını söyler. Kurulan devleti bilime dayanan, “millî ve asri” (millî ve çağdaş) bir devlet olarak nitelendirir.',
        cikarim: '“Millî ve asri” iki sözcük, Cumhuriyet’in iki temel özelliğini özetler: hem kendi kimliğine sahip hem de çağdaş. Bu, Milliyetçilik ve İnkılapçılık ilkeleriyle ilişkilidir.',
      },
      {
        tur: 'birincil',
        baslik: 'Gençliğe Hitabe’den',
        kunye: 'Mustafa Kemal, Nutuk (1927), 19. bölüm: “Türk gençliğine bıraktığım emanet” (Gençliğe Hitabe), ilk bölüm ve son cümle. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı. Hitabenin ilk bölümü ile son cümlesi “…” ile birleştirilmiştir.',
        metin:
          'Ey Türk gençliği! Birinci vazifen, Türk istiklâlini, Türk cumhuriyetini, ilelebet muhafaza ve müdafaa etmektir. Mevcudiyetinin ve istikbâlinin yegâne temeli budur. Bu temel, senin en kıymetli hazinendir. İstikbâlde dahi seni, bu hazineden mahrum etmek isteyecek, dâhilî ve hâricî bedhahların olacaktır. … Ey Türk istikbâlinin evlâdı! İşte, bu ahvâl ve şerâit içinde dahi, vazifen; Türk istiklâl ve cumhuriyetini kurtarmaktır! Muhtaç olduğun kudret, damarlarındaki asil kanda, mevcuttur!',
        soru: 'Hitabe gençliğe hangi görevi veriyor? Neden bu görevi “birinci vazife” olarak sayıyor?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“İlelebet”: sonsuza dek. “Muhafaza ve müdafaa”: koruma ve savunma. “Mevcudiyet”: varlık. “İstikbal”: gelecek. “Bedhah”: kötülük isteyen. “Ahval ve şerait”: durum ve koşullar.' },
          { title: 'Görevi bul', body: 'Türk bağımsızlığını ve Cumhuriyeti sonsuza dek korumak ve savunmak.' },
          { title: 'Gerekçeyi bul', body: 'Bağımsızlık ve Cumhuriyet, gençliğin varlığının ve geleceğinin tek temelidir; ona en değerli hazinedir. İçeriden ve dışarıdan bu hazineyi elinden almak isteyenler olabilir.' },
          { title: 'Sorumluluğu çıkar', body: 'Koşullar ne kadar zor olursa olsun (hitabenin devamında işgal, yoksulluk, hatta yöneticilerin gaflet ve ihaneti sayılır) görev değişmez.' },
        ],
        cevap: 'Hitabe gençliğe Türk bağımsızlığını ve Cumhuriyeti sonsuza dek koruma ve savunma görevini verir. Bunu “birinci vazife” sayar, çünkü bağımsızlık ve Cumhuriyet gençliğin varlığının ve geleceğinin tek temelidir.',
        cikarim: 'Hitabe, Cumhuriyet’in sürekliliğini bir kişiye ya da kuruma değil, gençliğe bağlar. Program bu yüzden “Cumhuriyet’in korunmasında ve sürekliliğinin sağlanmasında gençliğe verilen görev”i vurgular.',
      },
      {
        tur: 'birincil',
        baslik: 'Onuncu Yıl Nutku’ndan',
        kunye: 'Mustafa Kemal Atatürk, Onuncu Yıl Nutku, Ankara, 29 Ekim 1933. Metin: Vikikaynak (kaynak: K. İşeri, New World Sciences Academy, 2010).',
        nitelik: 'Birebir alıntı.',
        metin:
          'Az zamanda çok ve büyük işler yaptık. … Fakat yaptıklarımızı asla kâfi göremeyiz. Çünkü daha çok ve daha büyük işler yapmak mecburiyetinde ve azmindeyiz. Yurdumuzu dünyanın en mamur ve en medeni memleketleri seviyesine çıkaracağız. Milletimizi en geniş refah, vasıta ve kaynaklarına sahip kılacağız. Millî kültürümüzü, muasır medeniyet seviyesinin üstüne çıkaracağız.',
        soru: 'Atatürk hangi hedefleri gösteriyor? Bu hedefleri hangi alanlara (ülke, millet, kültür) göre sınıflandırırsın?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Kâfi”: yeterli. “Mamur”: bayındır, gelişmiş. “Refah”: gönenç, bolluk. “Vasıta”: araç. “Muasır”: çağdaş.' },
          { title: 'Ülke hedefi', body: 'Yurdu dünyanın en gelişmiş ve en medeni ülkeleri seviyesine çıkarmak.' },
          { title: 'Millet hedefi', body: 'Milleti en geniş refaha, araçlara ve kaynaklara sahip kılmak.' },
          { title: 'Kültür hedefi', body: 'Millî kültürü çağdaş uygarlık seviyesinin de üstüne çıkarmak.' },
        ],
        cevap: 'Atatürk üç hedef gösterir: Ülkeyi dünyanın en gelişmiş ülkeleri seviyesine çıkarmak (ülke), milleti en geniş refaha kavuşturmak (millet) ve millî kültürü muasır medeniyet seviyesinin üstüne çıkarmak (kültür).',
        cikarim: '“Yaptıklarımızı asla kâfi göremeyiz” cümlesi İnkılapçılık ilkesinin özünü taşır: Kazanımlar korunur ama yeterli görülmez; hep daha ileriye gidilir.',
      },
      {
        tur: 'ikincil',
        baslik: 'Cumhuriyet’in kazanımları üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Onuncu Yıl Nutku 29 Ekim 1933’te okundu. Atatürk bu konuşmada yapılanları yeterli görmediğini söyledi. Bu, Cumhuriyet’in ilk on yılında hiçbir önemli kazanım elde edilmediğini gösterir.',
        soru: 'Metindeki olguları ve yorumu ayır. Yorum, kaynağın kendisiyle tutarlı mı?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Sonradan yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguları ayır', body: 'Nutkun 29 Ekim 1933’te okunması ve Atatürk’ün yapılanları yeterli görmediğini söylemesi olgudur.' },
          { title: 'Yorumu ayır', body: '“Hiçbir önemli kazanım elde edilmediğini gösterir” yorumdur.' },
          { title: 'Tutarlılığı sına', body: 'Aynı nutkun hemen öncesinde “Az zamanda çok ve büyük işler yaptık” cümlesi vardır. “Yeterli görmemek”, “hiçbir şey yapılmadı” anlamına gelmez; daha yüksek hedef koymak demektir. Yorum, kaynağın kendisiyle çelişir.' },
        ],
        cevap: 'Olgular: nutkun tarihi ve Atatürk’ün yapılanları yeterli görmemesi. Yorum: hiçbir önemli kazanım elde edilmediği. Bu yorum kaynakla çelişir; çünkü aynı nutukta “Az zamanda çok ve büyük işler yaptık” denir.',
        cikarim: 'Bir cümleyi bağlamından koparmak yanlış sonuçlara götürür. Bir kaynağı yorumlarken cümlenin önüne ve arkasına da bak.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Kazanımı kanıtla eşleştir',
      prompt: 'Aşağıdaki kazanımları kanıtlarıyla eşleştir: (1) Egemenliğin millete geçmesi, (2) Tam bağımsızlık, (3) Kadının siyasi hakları, (4) Bilimsel araştırmanın kurumlaşması.',
      steps: [
        { title: '1', body: '1924 Anayasası: “Hâkimiyet bilâ kaydü şart Milletindir.”' },
        { title: '2', body: 'Lozan Antlaşması, 28. madde: kapitülasyonların kaldırılması.' },
        { title: '3', body: '5 Aralık 1934 anayasa değişikliği; 1935’te 17 kadın milletvekili.' },
        { title: '4', body: 'Türk Tarih Kurumu (1931), Türk Dil Kurumu (1932), 1933 Üniversite Reformu.' },
      ],
      answer: '1–1924 Anayasası · 2–Lozan 28. madde · 3–1934 değişikliği · 4–TTK, TDK, Üniversite Reformu.',
      takeaway: '“Analiz et” sorularında her kazanımı somut bir kanıtla destekle.',
    },
    {
      title: 'Hitabeden sorumluluk çıkar',
      prompt: 'Gençliğe Hitabe’ye göre bugün bir öğrenci Cumhuriyet’in korunmasına nasıl katkıda bulunabilir? İki örnek ver.',
      steps: [
        { title: 'Görevi hatırla', body: 'Bağımsızlığı ve Cumhuriyeti korumak ve savunmak.' },
        { title: 'Barış zamanına uyarla', body: 'Koruma yalnız silahla değil; bilgiyle, çalışmayla ve millî birliği güçlendirerek de yapılır.' },
        { title: 'Örnek ver', body: 'İyi yetişmiş, bilime dayalı düşünen bir birey olmak; farklılıklara saygılı, kurallara ve haklara bağlı bir vatandaş olmak.' },
      ],
      answer: 'Örneğin bilimsel düşünmeyi ve çalışkanlığı ilke edinerek ülkesine katkı sunmak; millî birlik ve beraberliği zedeleyen davranışlardan kaçınıp demokratik kurallara bağlı kalmak.',
      takeaway: 'Hitabedeki görevleri bugünün koşullarına uyarlarken metnin özünü (bağımsızlık ve Cumhuriyet) korumaya dikkat et.',
    },
    {
      title: 'Metinleri ayırt et',
      prompt: 'Aşağıdaki ifadeler hangi metne aittir? (a) “Bu neticeyi, Türk gençliğine emanet ediyorum.” (b) “Millî kültürümüzü, muasır medeniyet seviyesinin üstüne çıkaracağız.” (c) “Birinci vazifen, Türk istiklâlini, Türk cumhuriyetini, ilelebet muhafaza ve müdafaa etmektir.”',
      steps: [
        { title: 'a', body: 'Nutuk’un son bölümünün başı (Gençliğe Hitabe’ye geçiş).' },
        { title: 'b', body: 'Onuncu Yıl Nutku (1933).' },
        { title: 'c', body: 'Gençliğe Hitabe (1927).' },
      ],
      answer: 'a–Nutuk (son bölüm) · b–Onuncu Yıl Nutku · c–Gençliğe Hitabe.',
      takeaway: 'Emanet ve görev → 1927 (Nutuk ve Hitabe); hedef ve gelecek → 1933 (Onuncu Yıl Nutku).',
    },
  ],
  questionClue: {
    concept: 'Soruda hangi metinden ya da hangi özellikten söz edildiğini nasıl anlarım?',
    statement: 'Soru bir alıntı, bir olay ya da bir eser verip metni, kazanımı ya da Atatürk’ün kişilik özelliğini sorabilir.',
    clues: [
      '“1919–1927”, “hesap vermek”, “belgeler” → Nutuk',
      '“Ey Türk gençliği”, “birinci vazifen”, “emanet” → Gençliğe Hitabe',
      '“Onuncu yıl”, “muasır medeniyetin üstü”, “müspet ilim”, “Ne mutlu Türküm diyene” → Onuncu Yıl Nutku',
      '“Farklı alanlarda eser” → Çok yönlülük · “Gerçeklere dayalı karar” → Akılcılık · “Araştırma ve kanıt” → Bilimsellik · “Çağın gerekleri” → Çağdaşlık',
    ],
    reasoning: 'Önce metnin geçmişe mi, bugünkü göreve mi, yoksa geleceğin hedefine mi baktığını belirle. Kişilik özelliği sorularında ise olayın hangi yeteneği gösterdiğine bak.',
    boundary: 'Dikkat: Kaynağı belirsiz özdeyişler sınavda kanıt olarak kullanılamaz. Emin olmadığın alıntılar yerine belgelenmiş olay ve eserleri kullan.',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'İTA.8.4.8 bir “analiz eder” kazanımıdır. Sorular çoğunlukla bir metin parçası ya da bir tablo verip kazanımı, hedefi veya kişilik özelliğini sorabilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Bir alıntının hangi metne ait olduğunu ve ne anlattığını belirleme',
      'Gençliğe Hitabe’den gençliğin görevlerini çıkarma',
      'Cumhuriyet’in kazanımlarını önce–sonra karşılaştırmasıyla analiz etme',
      'Bir olay ya da eserden Atatürk’ün kişilik özelliğini çıkarma',
    ],
  },
  checkpoints: [
    {
      prompt: 'Nutuk’u birincil kaynak olarak kullanırken neden dikkatli olmak gerekir?',
      hint: 'Nutuk’u kim, hangi amaçla yazdı?',
      answer: 'Nutuk, olayların içinde bulunmuş bir liderin kendi bakış açısından yazdığı bir hesap verme metnidir. Bu yüzden çok değerli belgeler ve bilgiler içerir; ama olayları başka kişilerin bakış açısından da görmek için diğer kaynaklarla karşılaştırmak gerekir.',
    },
    {
      prompt: 'Onuncu Yıl Nutku’ndaki “zaman ölçüsü” vurgusu neden önemlidir?',
      answer: 'Atatürk, geçmiş yüzyılların yavaş değişen anlayışı yerine çağın hızına uygun çalışılmasını ister. Bu, kalkınmanın ertelenemeyeceğini ve dünyadaki gelişmelere yetişmek için daha az zamanda daha çok iş yapılması gerektiğini gösterir.',
    },
    {
      prompt: 'Gençliğe Hitabe’de gençliğin görevinin koşullara bağlı olmaması neyi gösterir?',
      answer: 'Bağımsızlık ve Cumhuriyet’in, koşullar ne kadar kötü olursa olsun vazgeçilemeyecek temel değerler olarak görüldüğünü gösterir. Görev, kolay zamanlarda değil, en zor koşullarda da geçerlidir.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.4.8 bir “analiz eder” kazanımıdır: Cumhuriyet’in sağladığı kazanımları ve Atatürk’ün Türk milleti için gösterdiği hedefleri analiz etmeni ister. Açıklaması Büyük Nutuk ve Onuncu Yıl Nutku’nu, Gençliğe Hitabe’den hareketle gençliğin görevlerini ve Atatürk’ün çok yönlülüğünü, akılcılığını, bilimselliğini ve çağdaşlığını vurgular. Bu kazanıma dayanan bir soru bir alıntı ya da tablo verip çıkarım isteyebilir.',
    measures: [
      'Cumhuriyet’in kazanımlarını alan alan analiz etme',
      'Nutuk, Gençliğe Hitabe ve Onuncu Yıl Nutku’nu ayırt etme',
      'Gençliğin görev ve sorumluluklarını çıkarma',
      'Atatürk’ün kişilik özelliklerini kanıtlarla ilişkilendirme',
    ],
  },
  simulation: {
    title: 'Mini LGS: Meşale',
    passage:
      'Atatürk Onuncu Yıl Nutku’nda şöyle der: “Türk milletinin yürümekte olduğu terakki ve medeniyet yolunda, elinde ve kafasında tuttuğu meşale, müspet ilimdir.” Aynı yıllarda Türk tarihini birinci elden kaynaklarla araştırmak için Türk Tarih Kurumu kurulmuş, İstanbul’da Darülfünun kaldırılarak çağdaş bir üniversite açılmıştır.',
    question: 'Bu bilgiler Atatürk’ün hangi kişilik özelliğini en açık biçimde yansıtır?',
    options: [
      { text: 'Bilimselliği', explanation: 'Doğru. “Müspet ilim” vurgusu, tarihin kaynaklarla araştırılması ve çağdaş üniversitenin kurulması bilimselliğin kanıtlarıdır.' },
      { text: 'Askerî dehası', explanation: 'Metinde askerî bir olaydan söz edilmez.' },
      { text: 'Sanat sevgisi', explanation: 'Metinde sanatla ilgili bir bilgi yoktur.' },
      { text: 'Diplomatik yeteneği', explanation: 'Metinde diplomatik bir görüşme ya da antlaşmadan söz edilmez.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “en açık biçimde” diyor. Metnin üç bilgisi de (müspet ilim, kaynaklarla araştırma, üniversite) aynı özelliği gösterir.',
    critical_point: 'Atatürk çok yönlü biriydi; ama soru bu metnin gösterdiği özelliği soruyor. Metnin dışındaki bilgilerle seçenek eleme yapma.',
    takeaway: 'Kişilik özelliği sorularında metindeki bütün bilgileri birlikte düşün ve hepsinin ortak noktasını bul.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Kazanımlar ve hedefler',
    range: '1918–1937',
    body:
      'Mondros’la yıkılmış bir devletten, egemenliğin millete ait olduğu, tam bağımsız, laik ve çağdaş bir Cumhuriyet’e geçildi. Atatürk 15–20 Ekim 1927’de okuduğu Nutuk’ta 1919–1927 dönemini belgelerle anlattı; “millî ve asri” bir devletin nasıl kurulduğunu açıkladı ve son bölümde bu sonucu Türk gençliğine emanet etti. Gençliğe Hitabe, gençliğe Türk istiklalini ve Cumhuriyeti her koşulda koruma ve savunma görevini verdi. 29 Ekim 1933’teki Onuncu Yıl Nutku, yapılanları yeterli görmeyerek millî kültürü muasır medeniyet seviyesinin üstüne çıkarma hedefini koydu ve milletin elindeki meşalenin müspet ilim olduğunu söyledi. Atatürk’ün kararları ve eserleri onun çok yönlülüğünü, akılcılığını, bilimselliğini ve çağdaşlığını gösterir.',
    turning_points: [
      '15–20 Ekim 1927 · Nutuk',
      '20 Ekim 1927 · Gençliğe Hitabe',
      '29 Ekim 1933 · Onuncu Yıl Nutku',
      '5 Şubat 1937 · İlkeler anayasada',
    ],
  },
  summary: [
    '**Kazanımlar:** Millî egemenlik, tam bağımsızlık, laik ve çağdaş hukuk, eğitim birliği ve yeni harfler, kadın hakları, millî ekonomi, sağlık teşkilatı, bilim ve kültür kurumları.',
    '**Nutuk (15–20 Ekim 1927):** 1919–1927 dönemi; belgelerle; “millî ve asri bir devlet”; altı günde yaklaşık 36,5 saat.',
    '**Gençliğe Hitabe (Nutuk’un son bölümü):** “Birinci vazifen, Türk istiklâlini, Türk cumhuriyetini, ilelebet muhafaza ve müdafaa etmektir.”',
    '**Onuncu Yıl Nutku (29 Ekim 1933):** “Millî kültürümüzü, muasır medeniyet seviyesinin üstüne çıkaracağız.” Meşale: müspet ilim. Son cümle: “Ne mutlu Türküm diyene!”',
    '**Kişilik:** Çok yönlülük (komutan, devlet adamı, başöğretmen, yazar), akılcılık (Sakarya’ya çekilme kararı), bilimsellik (TTK, TDK, üniversite reformu), çağdaşlık (inkılaplar, hedefler).',
  ],
  quizzes: [
    {
      question: 'Gençliğe Hitabe ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['Nutuk’un son bölümüdür.', '1933’te ayrı bir konuşma olarak yapılmıştır.', '“Ne mutlu Türküm diyene!” cümlesiyle biter.', 'Muasır medeniyet hedefini anlatır.'],
      answer_index: 0,
      explanation: 'Gençliğe Hitabe 1927’de okunan Nutuk’un son bölümüdür. “Ne mutlu Türküm diyene!” ve muasır medeniyet hedefi Onuncu Yıl Nutku’na aittir.',
    },
    {
      question: '“Millî kültürümüzü, muasır medeniyet seviyesinin üstüne çıkaracağız.” ifadesi hangi metne aittir?',
      options: ['Onuncu Yıl Nutku', 'Gençliğe Hitabe', 'Amasya Genelgesi', 'Misakımillî'],
      answer_index: 0,
      explanation: 'Bu ifade Atatürk’ün 29 Ekim 1933’te yaptığı Onuncu Yıl Nutku’ndadır.',
    },
    {
      question: 'Nutuk ile ilgili aşağıdakilerden hangisi yanlıştır?',
      options: ['Atatürk’ün çocukluk anılarını anlatır.', '1927’de okunmuştur.', '1919–1927 dönemini anlatır.', 'Olayları belgelerle destekler.'],
      answer_index: 0,
      explanation: 'Nutuk bir anı kitabı değildir; 19 Mayıs 1919’dan 1927’ye kadar olan siyasi ve askerî olayları belgelerle anlatır.',
    },
    {
      question: 'Atatürk’ün Kütahya–Eskişehir yenilgisinden sonra, halkta yaratacağı sarsıntıyı bilmesine rağmen ordunun Sakarya’nın doğusuna çekilmesine karar vermesi en çok hangi özelliğini gösterir?',
      options: ['Akılcılığını', 'Sanatçı kişiliğini', 'Yazarlığını', 'Öğretmenliğini'],
      answer_index: 0,
      explanation: 'Karar duygulara değil askerî gerçeklere dayanır; Nutuk’ta “Askerliğin icabını bilâ-tereddüt tatbik edelim.” der.',
    },
    {
      question: 'Gençliğe Hitabe’ye göre gençliğin birinci görevi nedir?',
      options: ['Türk istiklalini ve Cumhuriyeti ilelebet korumak ve savunmak', 'Yeni harfleri öğrenmek', 'Ekonomik kalkınmayı sağlamak', 'Yabancı dil öğrenmek'],
      answer_index: 0,
      explanation: 'Hitabe “Birinci vazifen, Türk istiklâlini, Türk cumhuriyetini, ilelebet muhafaza ve müdafaa etmektir.” der.',
    },
  ],
  next: ['Demokratikleşme Çabaları: Çok Partili Hayata Geçiş Denemeleri', 'Atatürk Dönemi Dış Politikası'],
})

export default lesson
