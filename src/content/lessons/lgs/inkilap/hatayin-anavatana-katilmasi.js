import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.6 Atatürk Dönemi Türk Dış Politikası · 2. ders
 * Kazanım : İTA.8.6.3
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   Atatürk Dönemi Türk dış politikasının temel ilkeleri ile Hatay’ın anavatana
 *   katılması ilişkilendirilir.
 *
 * KAPSAM KARARI
 * Atatürk’ün 1936, 1937 ve 1938 Meclis açış konuşmalarındaki Hatay bölümleri,
 * TBMM’nin yayımladığı günümüz Türkçesi metinlerden (Vikikaynak) birebir alındı ve
 * “sadeleştirilmiş metin” olarak etiketlendi. Atatürk’e atfedilen “şahsi davam” ve
 * Konya açıklaması gibi sözler kaynaklarda farklı ifadelerle aktarıldığı için birincil
 * kaynak bloğu yapılmadı, “aktarıldığına göre” biçiminde verildi. Türk birliklerinin
 * Hatay’a girdiği gün kaynaklarda farklı (3/5 Temmuz) olduğu için “Temmuz 1938”
 * yazıldı. Harita şematiktir.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 22.
 */

const SLUG = 'lgs-tarih-hatayin-anavatana-katilmasi'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Atatürk Dönemi Türk Dış Politikası',
  order: 2,
  title: 'Hatay’ın Anavatana Katılması: Atatürk’ün Son Büyük Davası',
  subtitle:
    'Tek kurşun atılmadan, masada ve sabırla kazanılan bir dava. Atatürk hastalığına rağmen Hatay için çalıştı; ama katılışı göremedi.',
  minutes: 45,
  kazanimlar: ['İTA.8.6.3'],
  kapsamNotu:
    'Atatürk’ün 1936, 1937 ve 1938 Meclis açış konuşmalarındaki Hatay bölümleri TBMM’nin yayımladığı günümüz Türkçesi metinlerden birebir alıntılanmıştır. Atatürk’e atfedilen bazı sözler kaynaklarda farklı ifadelerle geçtiği için “aktarıldığına göre” biçiminde verilmiştir. Harita şematiktir.',
  prerequisites: [
    {
      topic: 'Atatürk dönemi dış politikasının ilkeleri (önceki ders)',
      why: 'Program Hatay’ın katılışını dış politikanın ilkeleriyle ilişkilendirmeni ister.',
    },
    {
      topic: '1921 Ankara Antlaşması ve Lozan',
      why: 'Hatay’ın Türkiye sınırları dışında kalması 1921 Ankara Antlaşması’na ve Lozan’daki Suriye sınırına dayanır.',
    },
  ],
  outcomes: [
    'Hatay’ın neden Türkiye sınırları dışında kaldığını açıklayabileceksin.',
    'Hatay meselesinin 1936–1939 arasındaki aşamalarını sıralayabileceksin.',
    'Atatürk’ün Hatay için yaptıklarına ve gösterdiği özveriye kanıtlar gösterebileceksin.',
    'Hatay’ın katılışını dış politikanın ilkeleriyle ilişkilendirebileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Misakımillî’de olup sınırın dışında kalan bir yer',
    lead:
      'İskenderun ve Antakya çevresi Misakımillî sınırları içinde görülüyordu; ama 1921’den beri Fransız mandasındaki Suriye’ye bağlıydı.',
    body:
      '1921’de Fransa ile imzalanan Ankara Antlaşması, İskenderun bölgesi için özel bir yönetim öngörmüştü: Bölgenin Türk halkı kültürünü geliştirebilecek ve Türkçe resmî dil olacaktı. Lozan’da da Suriye sınırı olarak bu antlaşmadaki sınır kabul edildi. Böylece Hatay, özel statüsüyle birlikte Fransız yönetimindeki Suriye’nin içinde kaldı.\n\n' +
      '1936’da Fransa, Suriye’ye bağımsızlık vermek için bir antlaşma imzaladı. Türkiye’ye göre bu, Hatay’ın özel statüsünün ortadan kalkıp Suriye’ye bırakılması tehlikesi demekti. Atatürk o yılın 1 Kasım’ında Meclis’i açarken bu konuyu milletin “gece gündüz” uğraştığı büyük bir sorun olarak andı. Böylece Atatürk’ün hayatının son iki yılına damgasını vuran **Hatay davası** başladı.\n\n' +
      'Bu derste Hatay’ın 1936’dan 1939’a kadar adım adım nasıl Türkiye’ye katıldığını, Atatürk’ün bu uğurda neler yaptığını ve bu sürecin dış politikanın ilkeleriyle nasıl ilişkili olduğunu göreceğiz.',
  },
  concepts: [
    { term: 'Sancak', body: 'Osmanlı ve Fransız yönetiminde bir idari bölge. İskenderun Sancağı, bugünkü Hatay’ın büyük kısmını kapsıyordu.' },
    { term: 'Manda', body: 'Birinci Dünya Savaşı’ndan sonra bazı bölgelerin, Milletler Cemiyeti adına büyük bir devletin yönetimine verilmesi. Suriye, Fransa’nın mandası altındaydı.' },
    { term: 'Statü', body: 'Bir bölgenin hukuki durumu ve yönetim biçimi.' },
    { term: 'Özerklik', body: 'Bir bölgenin iç işlerinde kendi kendini yönetmesi.' },
    { term: 'İlhak (katılma)', body: 'Bir toprağın bir devlete katılması. Hatay Meclisi 29 Haziran 1939’da Türkiye’ye katılma kararı aldı.' },
  ],
  why: {
    question: 'Hatay neden bu kadar önemliydi?',
    body:
      'Çünkü Hatay, Misakımillî’de Türk yurdunun bir parçası sayılmıştı ve halkının önemli bir kısmı Türk’tü. Atatürk 1936 konuşmasında bölgenin “gerçek sahibi öz Türk” olduğunu vurguladı. Ayrıca İskenderun limanı ve çevresi, güney sınırının güvenliği açısından stratejik bir öneme sahipti.\n\n' +
      'Ama Atatürk bu davayı savaşla değil, **barışçı yollarla** kazanmak istedi. 1930’ların sonunda Avrupa yeni bir savaşa doğru gidiyordu; Fransa ile dost kalmak da Türkiye’nin çıkarınaydı. Hatay davası bu yüzden hem kararlılık hem de sabır gerektiren bir sınav oldu: Hakkını istemek ama dostluğu bozmamak.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Hatay davası (1921–1939)',
    lead: 'Hatay davası üç yılda, adım adım ilerledi. Her adımın bir önceki adımın üzerine kurulduğuna dikkat et.',
    intro: 'Atatürk 10 Kasım 1938’de öldü; Hatay’ın katılışı ondan yedi ay sonra gerçekleşti.',
    items: [
      { title: '20 Ekim 1921 · Ankara Antlaşması', body: 'İskenderun bölgesi için özel yönetim öngörüldü; bölge Suriye sınırları içinde kaldı.' },
      { title: '1923 · Lozan', body: 'Suriye sınırı olarak 1921 Ankara Antlaşması’ndaki sınır kabul edildi.' },
      { title: '1936 · Fransa–Suriye antlaşması', body: 'Fransa Suriye’ye bağımsızlık verme yoluna girdi; Hatay’ın Suriye’ye bırakılması tehlikesi doğdu.' },
      { title: '1 Kasım 1936 · Meclis açış konuşması', body: 'Atatürk Hatay’ı milletin “gece gündüz” uğraştığı büyük sorun olarak andı.' },
      { title: 'Ocak 1937 · Eskişehir ve Konya', body: 'Atatürk Eskişehir’de hükûmet ve ordu yöneticileriyle durumu değerlendirdi, Konya’ya geçerek meseleyi yakından izledi.' },
      { title: '27 Ocak 1937 · Milletler Cemiyeti kararı', body: 'Sancak iç işlerinde bağımsız, dış işlerinde Suriye’ye bağlı olacaktı; Türkçe resmî dil olacaktı.' },
      { title: '29 Mayıs 1937 · Statü ve güvence', body: 'Sancağın statüsü ve temel yasası kabul edildi; Türkiye ile Fransa arasında Hatay’ın bütünlüğünü güvenceye alan anlaşma imzalandı.' },
      { title: 'Mayıs 1938 · Adana ve Mersin', body: 'Atatürk hastalığına rağmen Adana ve Mersin’e gitti, askerî birlikleri denetleyip geçit törenlerini ayakta izledi.' },
      { title: 'Temmuz 1938 · Türk askerî birlikleri Hatay’da', body: 'Türk–Fransız askerî anlaşmasıyla Türk birlikleri Hatay’a girdi; Türk ve Fransız askerleri bölgede birlikte bulundu.' },
      { title: '2 Eylül 1938 · Hatay Devleti', body: 'Hatay Millet Meclisi toplanarak Hatay Devleti’ni kurdu.' },
      { title: '10 Kasım 1938 · Atatürk’ün ölümü', body: 'Atatürk, Hatay’ın katılışını göremeden hayatını kaybetti.' },
      { title: '23–29 Haziran 1939 · Anavatana katılış', body: 'Türkiye ile Fransa anlaştı (23 Haziran); Hatay Millet Meclisi Türkiye’ye katılma kararı aldı (29 Haziran).' },
    ],
    takeaway:
      'Dikkat et: Hatay önce özerk bir sancak (1937), sonra bağımsız bir devlet (1938), en son Türkiye’nin bir ili (1939) oldu. Bu üç aşamalı süreç, davanın savaşla değil hukukla kazanıldığını gösterir.',
    body:
      'Kronolojideki sıra, Atatürk’ün yöntemini gösterir: Önce Fransa ile doğrudan görüşme, sonuç alınamayınca **Milletler Cemiyeti**’ne başvurma, oradan özerklik, ardından Türk askerinin bölgeye girmesiyle güvenliğin sağlanması ve seçimler, sonra bağımsız Hatay Devleti ve en sonunda halkın temsilcilerinin kararıyla Türkiye’ye katılış.\n\n' +
      'Her aşamada uluslararası hukuka uyuldu ve Fransa ile dostluk korundu. Atatürk 1 Kasım 1937’deki konuşmasında, Hatay konusunun iyi bir yönde gelişmesinin Türk–Fransız ilişkileri için “önemli bir ölçü ve etken” olacağını söyledi; 1938’de de bu anlaşmanın iki ülke ilişkilerini “çok dostça bir duruma” getirdiğini belirtti.',
  },
  map: {
    title: 'Şematik atlas: Hatay davası',
    intro: 'Katmanları aç: Hatay’daki gelişmeler ve Atatürk’ün Hatay için yaptığı yolculuklar.',
    map_label: 'Şematik gösterim · sınır ve uzaklık göstermez',
    layers: [
      { id: 'hatay', label: 'Hatay 1937–1939', description: 'İskenderun, Antakya ve Suriye.', active: true },
      { id: 'ataturk', label: 'Atatürk’ün yolculukları', description: 'Konya (1937), Adana ve Mersin (1938).', active: true },
    ],
    regions: [
      { label: 'AKDENİZ', x: 26, y: 92, tone: 'water' },
      { label: 'SURİYE (Fransız mandası)', x: 74, y: 64, tone: 'land' },
    ],
    locations: [
      { id: 'ankara', label: 'Ankara', x: 13, y: 6, tone: 'brand', detail: 'Hatay davası Ankara’dan yürütüldü; Atatürk konuyu 1936, 1937 ve 1938 Meclis açış konuşmalarında andı.' },
      { id: 'konya', label: 'Konya · Ocak 1937', x: 7, y: 46, layer: 'ataturk', tone: 'accent', detail: 'Atatürk Ocak 1937’de önce Eskişehir’de hükûmet ve ordu yöneticileriyle durumu değerlendirdi, ardından Konya’ya geçerek Hatay meselesini yakından izledi.' },
      { id: 'adana', label: 'Adana · Mayıs 1938', x: 50, y: 60, layer: 'ataturk', tone: 'accent', detail: 'Atatürk Mayıs 1938’de hastalığına rağmen Adana’ya gitti; askerî birlikleri denetledi ve geçit törenini ayakta izledi.' },
      { id: 'mersin', label: 'Mersin', x: 34, y: 74, layer: 'ataturk', tone: 'accent', detail: 'Mayıs 1938’deki Çukurova gezisinde Mersin’de de askerî geçit törenine katıldı.' },
      { id: 'iskenderun', label: 'İskenderun', x: 62, y: 74, layer: 'hatay', tone: 'brand', detail: 'Sancağın liman şehri. 1921 Ankara Antlaşması’nda özel yönetim öngörülen bölgenin adı buradan gelir.' },
      { id: 'antakya', label: 'Antakya', x: 62, y: 86, layer: 'hatay', tone: 'brand', detail: 'Hatay Devleti’nin merkezi. Hatay Millet Meclisi 2 Eylül 1938’de burada toplandı; 29 Haziran 1939’da Türkiye’ye katılma kararını aldı.' },
      { id: 'halep', label: 'Halep', x: 84, y: 82, layer: 'hatay', tone: 'danger', detail: 'Fransız mandasındaki Suriye’nin şehirlerinden. 1936’da Hatay’ın Suriye’ye bırakılması tehlikesi doğmuştu.' },
    ],
    routes: [
      { from: 'ankara', to: 'konya', label: 'Ocak 1937', layer: 'ataturk' },
      { from: 'ankara', to: 'adana', label: 'Mayıs 1938', layer: 'ataturk', tone: 'accent' },
    ],
    insight:
      'Haritada Atatürk’ün yolculuklarına bak: Hatay’a gitmedi, ama güney sınırına yaklaştı. Tarihçiler bu yolculukları, Türkiye’nin kararlılığını hem Fransa’ya hem dünya kamuoyuna gösteren mesajlar olarak da yorumlar.',
    source_note:
      'Yerler ve tarihler; Belleten (1985, 193) “Hatay Sorunu ve Türk-Fransız Siyasal İlişkileri”, ATAM Dergisi (2018, 97; 2020, 101), Atatürk’ün Meclis açış konuşmaları (TBMM) ve MEB Atatürk kronolojisi esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir.',
  },
  dataTable: {
    title: 'Hatay davası ve dış politikanın ilkeleri',
    columns: ['Aşama', 'Ne yapıldı?', 'İlgili ilke'],
    rows: [
      ['1936: Sorunun ortaya çıkışı', 'Atatürk Meclis’te meseleyi açıkça dile getirdi; Fransa ile doğrudan görüşmeler başladı.', 'Millî menfaatleri esas alma; Türk kamuoyunu dikkate alma'],
      ['1937: Milletler Cemiyeti', 'Sonuç alınamayınca mesele Milletler Cemiyeti’ne götürüldü; sancağa özerklik tanındı.', 'Barış; dünya kamuoyunu dikkate alma'],
      ['1937–1938: Güvenceler', 'Hatay’ın bütünlüğü Türk–Fransız anlaşmasıyla güvenceye alındı; Türk birlikleri anlaşmayla bölgeye girdi.', 'Gerçekçilik; akılcılık'],
      ['1938: Hatay Devleti', 'Seçimler yapıldı, Hatay Millet Meclisi toplandı, bağımsız Hatay Devleti kuruldu.', 'Tam bağımsızlık (halkın kendi kaderini belirlemesi)'],
      ['1939: Katılış', 'Türkiye ile Fransa anlaştı; Hatay Meclisi katılma kararı aldı.', 'Barış; mütekabiliyet (Fransa ile karşılıklı anlaşma)'],
    ],
    caption:
      'Tablo, her aşamayı en yakından ilişkili ilkeyle eşleştirir. Aslında Hatay davası, dış politikanın bütün ilkelerinin birlikte uygulandığı bir örnektir.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Hatay davası: sebep, gelişme, sonuç',
    lead: 'Zincir, Hatay’ın sınır dışında kalmasından anavatana katılmasına kadar geçen yolu gösterir.',
    intro: 'Zincirin başı sorunun kökünü, ortası barışçı çözüm adımlarını, sonu da katılışı ve sonrasını anlatır.',
    steps: [
      { tur: 'sebep', title: '1921 ve Lozan’ın mirası', body: 'Hatay, özel bir statüyle Fransız mandasındaki Suriye’nin içinde kalmıştı.' },
      { tur: 'sebep', title: '1936 Fransa–Suriye antlaşması', body: 'Suriye’nin bağımsızlığıyla birlikte Hatay’ın özel statüsünün ortadan kalkması tehlikesi doğdu.' },
      { tur: 'sebep', title: 'Uygun uluslararası ortam', body: 'Avrupa’da savaş tehlikesi artarken Fransa, Türkiye’nin dostluğuna önem veriyordu.' },
      { tur: 'gelisme', title: 'Diplomasi ve Milletler Cemiyeti', body: 'Doğrudan görüşmelerden sonuç çıkmayınca mesele Milletler Cemiyeti’ne götürüldü; sancak özerklik kazandı (1937).' },
      { tur: 'gelisme', title: 'Güvenlik ve seçim', body: 'Türk birlikleri anlaşmayla Hatay’a girdi (Temmuz 1938); seçimler yapıldı; Hatay Devleti kuruldu (2 Eylül 1938).' },
      { tur: 'sonuc', title: 'Anavatana katılış', body: 'Hatay Millet Meclisi 29 Haziran 1939’da Türkiye’ye katılma kararı aldı.' },
      { tur: 'sonraki-etki', title: 'Misakımillî’nin bir parçası daha', body: 'Hatay, savaşsız ve uluslararası hukuka uygun biçimde Türkiye’ye katıldı; Türk–Fransız ilişkileri de dostça kaldı.' },
    ],
    inference:
      'Temel çıkarım: Hatay davası, Atatürk dönemi dış politikasının bir özetidir. Millî çıkardan taviz verilmedi, ama barış, hukuk ve dostluk da korundu. Sonuç, tek kurşun atılmadan elde edildi.',
    body:
      '**Atatürk’ün özverisine kanıtlar** (İTA.8.6.3):\n\n' +
      '- **Meclis kürsüsünde:** 1936, 1937 ve 1938 Meclis açış konuşmalarının üçünde de Hatay’a yer verdi; meseleyi bir millî dava olarak ilan etti.\n' +
      '- **Eskişehir ve Konya (Ocak 1937):** Eskişehir’de Başbakan, Genelkurmay Başkanı ve bakanlarla durumu değerlendirdi, ardından Konya’ya geçerek güneye yaklaştı. Aktarıldığına göre ülkeyi savaşa sokmayacağını, ama Hatay’ın kendisi için vazgeçilmez bir dava olduğunu söyledi. Yakınlarının anılarına göre gerekirse Cumhurbaşkanlığından çekilip bu davaya bir vatandaş olarak sahip çıkmayı bile düşündü.\n' +
      '- **Fransız temsilcilere:** Aktarıldığına göre Fransız büyükelçisine Hatay’ın kendi “şahsi davası” olduğunu söyledi.\n' +
      '- **Hastalığına rağmen Çukurova’da (Mayıs 1938):** Ağır hastayken Adana ve Mersin’e gitti; birlikleri denetledi, geçit törenlerini ayakta izledi.\n' +
      '- **Son konuşması:** 1 Kasım 1938’de hastalığı nedeniyle Başbakan Celal Bayar’ın okuduğu Meclis açış konuşmasında Hatay’ın Meclis’ine ve bağımsızlığına kavuştuğunu müjdeledi.',
  },
  comparison: {
    title: 'Musul ve Hatay: iki mesele, iki sonuç',
    columns: ['Musul (1926)', 'Hatay (1939)'],
    rows: [
      { label: 'Karşı taraf', values: ['İngiltere (ve Irak)', 'Fransa (ve Suriye)'] },
      { label: 'Yöntem', values: ['İkili görüşme, Milletler Cemiyeti, antlaşma', 'İkili görüşme, Milletler Cemiyeti, antlaşmalar, halkın temsilcilerinin kararı'] },
      { label: 'Uluslararası ortam', values: ['Türkiye iç sorunlarla uğraşıyor; İngiltere çok güçlü', 'Avrupa’da savaş tehlikesi; Fransa Türkiye’nin dostluğunu arıyor'] },
      { label: 'Sonuç', values: ['Musul Irak’ta kaldı; Türkiye petrol payı aldı', 'Hatay Türkiye’ye katıldı'] },
      { label: 'Ortak ilke', values: ['Barış ve gerçekçilik', 'Barış, gerçekçilik ve millî menfaat'] },
    ],
    insight:
      'Asıl fark uluslararası ortamdadır: Aynı barışçı yöntem, 1926’da Musul’da sınırlı bir sonuç, 1939’da Hatay’da tam bir sonuç verdi. Gerçekçilik, doğru zamanı beklemeyi de içerir.',
  },
  traps: [
    {
      title: 'Hatay’ın Atatürk sağken katıldığını sanmak',
      wrong: 'Hatay, Atatürk’ün Cumhurbaşkanlığı döneminde, 1938’de Türkiye’ye katıldı.',
      right: '1938’de Hatay Devleti kuruldu. Türkiye’ye katılış 29 Haziran 1939’da, Atatürk’ün ölümünden yedi ay sonra gerçekleşti.',
      body: 'Atatürk katılışı göremedi; ama sürecin bütün temellerini o attı.',
    },
    {
      title: 'Hatay’ın savaşla alındığını sanmak',
      wrong: 'Türk ordusu Fransızlarla savaşarak Hatay’ı aldı.',
      right: 'Türk birlikleri Hatay’a bir Türk–Fransız askerî anlaşmasıyla girdi; Türk ve Fransız askerleri bölgede birlikte bulundu. Katılış savaşsız, antlaşmalarla ve halkın temsilcilerinin kararıyla gerçekleşti.',
      body: 'Atatürk 1938 konuşmasında Türk ve Fransız askerlerinin “geçici ve ortak işgali”nden söz eder.',
    },
    {
      title: 'Aşamaları karıştırmak',
      wrong: 'Hatay önce Türkiye’ye katıldı, sonra bağımsız bir devlet oldu.',
      right: 'Sıra şöyledir: özerk sancak (1937) → bağımsız Hatay Devleti (2 Eylül 1938) → Türkiye’ye katılış (29 Haziran 1939).',
      body: 'Aşamaların sırasını “özerk → bağımsız → katılış” diye hatırla.',
    },
    {
      title: 'Hatay meselesini Lozan’da çözülmüş sanmak',
      wrong: 'Hatay Lozan Antlaşması ile Türkiye’ye bırakıldı.',
      right: 'Lozan’da Suriye sınırı olarak 1921 sınırı kabul edildi; Hatay Suriye’de kaldı. Mesele ancak 1936–1939 arasında çözüldü.',
      body: 'Hatay, Lozan’da çözülemeyen meseleler arasındadır.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Hatay davasının kişileri',
    lead: 'Davayı yönetenler, konuşmayı okuyanlar ve Hatay’ı yönetenler.',
    intro: 'Kartlarda her kişinin Hatay davasındaki rolünü görürsün.',
    figures: [
      {
        name: 'Mustafa Kemal Atatürk',
        period: '1936–1938',
        position: 'Cumhurbaşkanı',
        contribution: 'Hatay’ı bir millî dava olarak ilan etti; Konya’ya ve hastalığına rağmen Adana ile Mersin’e giderek kararlılığını gösterdi; davayı barışçı yollarla yönetti.',
        connections: ['Hatay davası'],
        significance: 'Hayatının son büyük davasıdır; katılışı göremeden hayatını kaybetti.',
      },
      {
        name: 'Celal Bayar',
        period: '1938 · Başbakan',
        position: 'Başbakan',
        contribution: '1 Kasım 1938’de Atatürk’ün hastalığı nedeniyle Meclis açış konuşmasını onun adına okudu; konuşmada Hatay’ın Meclis’ine ve bağımsızlığına kavuştuğu müjdelendi.',
        connections: ['1938 Meclis açış konuşması'],
        significance: 'Atatürk’ün Hatay hakkındaki son sözlerini Meclis’e ulaştıran kişidir.',
      },
      {
        name: 'Dr. Tevfik Rüştü (Aras)',
        period: '1925–1938 · Dışişleri Bakanı',
        position: 'Dışişleri Bakanı',
        contribution: 'Hatay meselesinin Fransa ile görüşmelerinde ve Milletler Cemiyeti’ndeki süreçte Türkiye’nin dış politikasını yürüttü.',
        connections: ['Milletler Cemiyeti süreci'],
        significance: 'Hatay davasının diplomasideki yürütücülerindendir.',
      },
      {
        name: 'Tayfur Sökmen',
        period: '1938–1939',
        position: 'Hatay Devleti Cumhurbaşkanı',
        contribution: 'Hatay Millet Meclisi tarafından Hatay Devleti’nin başkanı seçildi; katılış sürecini yönetti.',
        connections: ['Hatay Devleti'],
        significance: 'Kısa ömürlü Hatay Devleti’nin tek devlet başkanıdır.',
      },
    ],
    takeaway:
      'Hatay davası tek bir anlaşmayla değil, üç yıllık sabırlı bir süreçle kazanıldı. Bu sürecin her aşamasında hem kararlılık hem de ölçülülük birlikte görülür.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-ozveri`,
      title: 'Özveri nedir, nasıl kanıtlanır?',
      lead: 'İTA.8.6.3 bir “kanıtlar gösterir” kazanımıdır. Özveriyi övgü sözleriyle değil, belgelere ve olaylara dayanan kanıtlarla göstermeliyiz.',
      blocks: [
        {
          id: `${SLUG}-ozveri-anlatim`,
          type: 'prose',
          body:
            '**Özveri**, bir amaç uğruna kendi rahatından, sağlığından ya da çıkarından vazgeçmektir. Atatürk’ün Hatay için gösterdiği özveriyi kanıtlamak için üç tür kanıt kullanabiliriz:\n\n' +
            '**1) Belgeler (en güçlü kanıt):** Atatürk’ün 1936, 1937 ve 1938 Meclis açış konuşmaları. Üç yıl üst üste Hatay’a yer verilmesi, konuya verilen önemin belgesidir. Özellikle 1938 konuşmasının Atatürk hasta olduğu için Başbakan tarafından okunması, onun son günlerinde bile bu davayı izlediğini gösterir.\n\n' +
            '**2) Davranışlar:** Mayıs 1938’deki Çukurova gezisi. Atatürk o sırada ağır hastaydı; buna rağmen trenle Adana’ya gitti, beş gün süren yorucu bir gezide birlikleri denetledi ve Adana ile Mersin’de geçit törenlerini ayakta izledi. Bu, sağlığını dava uğruna göze aldığının kanıtıdır.\n\n' +
            '**3) Aktarılan sözler:** Konya’da ve Fransız büyükelçisine söylediği aktarılan sözler. Bu tür kanıtlar değerlidir ama ifadeleri kaynaklarda farklı biçimlerde geçer; bu yüzden “aktarıldığına göre” diye kullanılmalı ve belgelerle desteklenmelidir.\n\n' +
            'İyi bir kanıt cevabında önce belgeleri, sonra davranışları, en son aktarılan sözleri kullan.',
        },
        {
          id: `${SLUG}-ozveri-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: 36–37–38–39',
          body: '1936 Meclis’te dava ilan edildi · 1937 Milletler Cemiyeti ve özerklik · 1938 Türk askeri ve Hatay Devleti · 1939 anavatana katılış.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste Atatürk’ün üç Meclis açış konuşmasından Hatay’la ilgili bölümleri okuyacaksın. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Konuşmalar, TBMM’nin yayımladığı günümüz Türkçesi metinlerden (Vikikaynak) alınmıştır; yani özgün konuşmanın sadeleştirilmiş hâlidir. Üç konuşmayı sırayla okumak, Hatay davasının üç yıldaki gelişimini Atatürk’ün kendi sözleriyle izlemeni sağlar.\n\n' +
      'İlk üç metin birebir alıntıdır. Dördüncü metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: '1 Kasım 1936: Davanın ilanı',
        kunye: 'Atatürk’ün TBMM 5. Dönem 2. Yasama Yılı Açılış Konuşması, 1 Kasım 1936. Metin: TBMM’nin yayımladığı günümüz Türkçesi metin (Vikikaynak).',
        nitelik: 'Birebir alıntı (sadeleştirilmiş metinden). Parantez içindekiler tutanağa geçen Meclis tepkileridir.',
        metin:
          'Bu arada, ulusumuzu gece gündüz uğraştıran başlıca büyük bir sorun da, gerçek sahibi öz Türk olan İskenderun - Antakya ve bölgesinin geleceğidir. (Bravo sesleri, sürekli alkışlar) Bunun üzerinde, ciddiyet ve önemle durmak zorundayız. (Ayakta sürekli alkışlar, yaşa, varol sesleri) Her zaman dostluğuna çok önem verdiğimiz Fransa ile aramızda tek ve büyük sorun budur.',
        soru: 'Atatürk Hatay meselesini nasıl tanımlıyor? Fransa’dan söz ederken kullandığı ifade neyi gösteriyor?',
        adimlar: [
          { title: 'Tanımı bul', body: 'Hatay, milleti “gece gündüz” uğraştıran büyük bir sorundur; bölgenin gerçek sahibi Türk’tür.' },
          { title: 'Meclis’in tepkisini oku', body: '“Ayakta sürekli alkışlar” ifadesi, Meclis’in bu davayı güçlü biçimde desteklediğini gösterir.' },
          { title: 'Fransa ifadesini yorumla', body: 'Fransa, “dostluğuna çok önem verdiğimiz” bir ülke olarak anılıyor; sorun “tek ve büyük sorun” olarak sınırlandırılıyor. Bu, davanın dostluk bozulmadan çözülmek istendiğini gösterir.' },
        ],
        cevap: 'Atatürk Hatay’ı milleti gece gündüz uğraştıran ve gerçek sahibi Türk olan bölgenin geleceği sorunu olarak tanımlar. Fransa’yı “dostluğuna çok önem verdiğimiz” ülke olarak anması, davanın kararlılıkla ama dostluğu bozmadan, barışçı yollarla yürütüleceğini gösterir.',
        cikarim: 'Aynı cümlede kararlılık (“ciddiyet ve önemle durmak zorundayız”) ve dostluk (“dostluğuna çok önem verdiğimiz”) birlikte yer alır. Bu denge, Atatürk dönemi dış politikasının özüdür.',
      },
      {
        tur: 'birincil',
        baslik: '1 Kasım 1937: Milletler Cemiyeti’nden sonra',
        kunye: 'Atatürk’ün TBMM 5. Dönem 3. Yasama Yılı Açılış Konuşması, 1 Kasım 1937. Metin: TBMM’nin yayımladığı günümüz Türkçesi metin (Vikikaynak).',
        nitelik: 'Birebir alıntı (sadeleştirilmiş metinden).',
        metin:
          'Büyük bir milli davamız olan Hatay olayının geçirdiği dönemler tarafınızdan bilinmektedir. Milletler Cemiyeti yüksek yönetimi altında yapılmakta olan görüşmeler, Hatay halkına yaraşan mutlu ve bağımsız yönetime kavuşması yolunda amaçladığımız gayeyi sağlayacak belgelerin kabul ve imzası ile sonuçlanmıştır.',
        soru: 'Bu metne göre Hatay meselesi hangi yolla ilerletilmiştir? Bu yol hangi dış politika ilkesiyle ilişkilidir?',
        adimlar: [
          { title: 'Yolu bul', body: 'Görüşmeler Milletler Cemiyeti’nin yönetimi altında yapılmış ve belgelerin imzasıyla sonuçlanmıştır.' },
          { title: 'Amacı bul', body: 'Hatay halkının “mutlu ve bağımsız yönetime” kavuşması.' },
          { title: 'İlkeyle bağla', body: 'Meselenin uluslararası bir kurum aracılığıyla ve belgelerle çözülmesi → barış ve dünya kamuoyunu dikkate alma.' },
        ],
        cevap: 'Mesele Milletler Cemiyeti’nin yönetimi altında yapılan görüşmelerle ve imzalanan belgelerle ilerletilmiştir. Bu, barış ve dünya kamuoyunu dikkate alma ilkeleriyle ilişkilidir.',
        cikarim: 'Atatürk Hatay’ı “büyük bir milli dava” olarak anarken çözüm yolunu uluslararası kurumlarda aramıştır. Kararlılık ile hukuka bağlılık birlikte yürümüştür.',
      },
      {
        tur: 'birincil',
        baslik: '1 Kasım 1938: Son konuşmadaki müjde',
        kunye: 'Atatürk’ün TBMM 5. Dönem 4. Yasama Yılı Açılış Konuşması, 1 Kasım 1938. Atatürk’ün rahatsızlığı nedeniyle Başbakan Celal Bayar tarafından okunmuştur. Metin: TBMM’nin yayımladığı günümüz Türkçesi metin (Vikikaynak; kaynak: Millet Meclisi Tutanak Dergisi, D. V, C. 27).',
        nitelik: 'Birebir alıntı (sadeleştirilmiş metinden).',
        metin:
          'Hatay sorununun son yıl içinde geçirmiş olduğu evreleri bilmektesiniz. Bu milli davayı bir Türk - Fransız dostluk anlaşması ile sonuçlandırmak yolundaki çalışma başarı ile sona erdi. Türk ve Fransız askerlerinin geçici ve ortak işgali, bu anlaşmanın açık belirtisi oldu. Bu nedenle sükün yerleşti ve seçimler tamamlandı. Sonunda Hatay, Millet Meclisine ve bağımsızlığına kavuştu.',
        soru: 'Bu konuşma neden Atatürk’ün Hatay davasındaki özverisinin kanıtı sayılabilir? Metin, katılışın nasıl bir yolla gerçekleştiğini gösteriyor?',
        adimlar: [
          { title: 'Künyeye bak', body: 'Konuşma Atatürk’ün rahatsızlığı nedeniyle Başbakan tarafından okunmuştur; Atatürk bu tarihten dokuz gün sonra hayatını kaybetmiştir.' },
          { title: 'Özveriyi çıkar', body: 'Ağır hasta olmasına rağmen Atatürk’ün son konuşmasında Hatay’a yer verilmesi, davayı son günlerine kadar izlediğini gösterir.' },
          { title: 'Yolu bul', body: '“Türk–Fransız dostluk anlaşması”, “geçici ve ortak işgal”, “seçimler” → savaşsız, anlaşmaya ve halkın iradesine dayanan bir yol.' },
        ],
        cevap: 'Konuşma, Atatürk’ün ağır hasta olduğu ve ölümünden dokuz gün önce okunduğu hâlde Hatay’a yer verdiği için onun davayı son günlerine kadar izlediğinin kanıtıdır. Metin, sürecin savaşla değil, Türk–Fransız anlaşması, ortak askerî varlık ve seçimlerle, yani barışçı yollarla ilerlediğini gösterir.',
        cikarim: 'Bir kaynağın künyesi de kanıttır: “Rahatsızlığı dolayısıyla Başbakan tarafından okunmuştur” notu, metnin içeriği kadar önemli bir bilgi verir.',
      },
      {
        tur: 'ikincil',
        baslik: 'Hatay davası üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Hatay 29 Haziran 1939’da Türkiye’ye katıldı. Bu başarı tamamen Atatürk’ün kişisel çabasının sonucudur; başka hiçbir etkenin rolü yoktur.',
        soru: 'Metindeki olguyu ve yorumu ayır. Yorum dengeli midir? Hangi etkenler göz ardı edilmiştir?',
        adimlar: [
          { title: 'Olguyu ayır', body: 'Hatay’ın 29 Haziran 1939’da Türkiye’ye katılması olgudur.' },
          { title: 'Yorumu ayır', body: '“Tamamen Atatürk’ün kişisel çabasının sonucudur; başka hiçbir etkenin rolü yoktur” yorumdur.' },
          { title: 'Göz ardı edilenleri bul', body: 'Uluslararası ortam (Avrupa’daki savaş tehlikesi ve Fransa’nın Türkiye’nin dostluğuna ihtiyacı), Dışişleri’nin diplomatik çalışmaları, Milletler Cemiyeti süreci ve Hatay halkının iradesi de etkiliydi.' },
        ],
        cevap: 'Olgu: Hatay’ın 29 Haziran 1939’da katılması. Yorum: başarının tamamen Atatürk’e bağlanması. Yorum dengeli değildir; uluslararası ortam, diplomatik çalışmalar, Milletler Cemiyeti süreci ve Hatay halkının iradesi göz ardı edilmiştir.',
        cikarim: 'Bir liderin rolünü vurgulamak doğrudur; ama bir sonucu tek bir kişiye ya da tek bir etkene bağlamak tek nedenli bir anlatıdır. Tarihte sonuçlar çoğu zaman birden fazla etkenin birleşmesiyle ortaya çıkar.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Aşamaları sırala',
      prompt: 'Aşağıdaki olayları tarih sırasına koy: Hatay Devleti’nin kurulması, Milletler Cemiyeti’nin özerklik kararı, Hatay Meclisi’nin katılma kararı, Türk birliklerinin Hatay’a girmesi.',
      steps: [
        { title: '1', body: 'Milletler Cemiyeti kararı (27 Ocak 1937).' },
        { title: '2', body: 'Türk birliklerinin Hatay’a girmesi (Temmuz 1938).' },
        { title: '3', body: 'Hatay Devleti’nin kurulması (2 Eylül 1938).' },
        { title: '4', body: 'Hatay Meclisi’nin katılma kararı (29 Haziran 1939).' },
      ],
      answer: 'Milletler Cemiyeti kararı → Türk birlikleri → Hatay Devleti → katılma kararı.',
      takeaway: 'Güvenlik (asker) seçimlerden, seçimler de devletin kurulmasından önce gelir. Mantık sırası tarih sırasını hatırlamana yardım eder.',
    },
    {
      title: 'Özveriye kanıt göster',
      prompt: 'Atatürk’ün Hatay davasında gösterdiği özveriye iki kanıt göster ve kanıtlarının kaynağını belirt.',
      steps: [
        { title: 'Kanıt 1 (davranış)', body: 'Mayıs 1938’de ağır hasta olmasına rağmen Adana ve Mersin’e gidip geçit törenlerini ayakta izlemesi (MEB kronolojisi; ATAM Dergisi).' },
        { title: 'Kanıt 2 (belge)', body: '1 Kasım 1938 Meclis açış konuşmasında, hastalığı nedeniyle Başbakan tarafından okunan metinde Hatay’a yer verilmesi (TBMM tutanağı).' },
      ],
      answer: 'Hastalığına rağmen yaptığı Çukurova gezisi ve ölümünden kısa süre önceki son Meclis konuşmasında Hatay’a yer vermesi.',
      takeaway: '“Kanıt göster” sorularında olayı ve kaynağını birlikte yaz.',
    },
    {
      title: 'Hatay’ı ilkelerle ilişkilendir',
      prompt: 'Hatay davasında Milletler Cemiyeti’ne başvurulması ve Fransa ile anlaşmalar yapılması hangi dış politika ilkelerini yansıtır?',
      steps: [
        { title: 'Milletler Cemiyeti', body: 'Uluslararası kurumlar yoluyla çözüm → barış, dünya kamuoyunu dikkate alma.' },
        { title: 'Fransa ile anlaşmalar', body: 'Dostluğu koruyarak karşılıklı anlaşma → barış, mütekabiliyet.' },
        { title: 'Sonuç', body: 'Hatay’ın katılışı → millî menfaat.' },
      ],
      answer: 'Barış, dünya kamuoyunu dikkate alma, mütekabiliyet ve millî menfaatleri esas alma.',
      takeaway: 'Program bu kazanımda Hatay’ı ilkelerle ilişkilendirmeni ister; her adımı bir ilkeyle eşleştir.',
    },
  ],
  questionClue: {
    concept: 'Soruda Hatay davasının hangi aşamasından söz edildiğini nasıl anlarım?',
    statement: 'Soru bir tarih, bir karar ya da Atatürk’ün bir davranışını verip aşamayı ya da ilkeyi sorabilir.',
    clues: [
      '“İç işlerinde bağımsız, dış işlerinde Suriye’ye bağlı” → Milletler Cemiyeti kararı (1937)',
      '“Geçici ve ortak işgal”, “Türk birlikleri” → 1938 askerî anlaşma',
      '“Hatay Millet Meclisi”, “bağımsız devlet” → Hatay Devleti (2 Eylül 1938)',
      '“Katılma kararı”, “1939” → Anavatana katılış',
      '“Hastalığına rağmen”, “Adana, Mersin” → Atatürk’ün özverisi (Mayıs 1938)',
    ],
    reasoning: 'Önce Hatay’ın hangi statüde olduğunu bul: özerk sancak mı, bağımsız devlet mi, Türkiye’nin ili mi? Sonra tarihe bak.',
    boundary: 'Dikkat: Atatürk 10 Kasım 1938’de öldü; katılış 29 Haziran 1939’dadır.',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'İTA.8.6.3 bir “kanıtlar gösterir” kazanımıdır ve dış politikanın ilkeleriyle ilişkilendirilir. Sorular bir konuşma bölümü, bir kronoloji ya da bir olay verip kanıt veya ilke isteyebilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Atatürk’ün Hatay için yaptıklarından özveriye kanıt gösterme',
      'Hatay davasının aşamalarını sıralama',
      'Hatay davasını dış politikanın ilkeleriyle ilişkilendirme',
      'Musul ile Hatay’ı karşılaştırma',
    ],
  },
  checkpoints: [
    {
      prompt: 'Hatay’ın önce bağımsız bir devlet olup sonra Türkiye’ye katılması neden önemli bir yöntemdir?',
      hint: 'Katılma kararını kim verdi?',
      answer: 'Çünkü katılma kararı Hatay halkının seçtiği Meclis tarafından verildi. Bu, katılışın dışarıdan bir dayatma değil, halkın iradesine dayanan ve uluslararası hukuka uygun bir süreç olduğunu gösterir.',
    },
    {
      prompt: '1930’ların sonundaki uluslararası ortam Hatay davasını nasıl etkilemiş olabilir?',
      answer: 'Avrupa’da savaş tehlikesi artarken Fransa, Türkiye’nin dostluğuna ve desteğine önem veriyordu. Bu ortam, Türkiye’nin haklı talebinin barışçı yollarla kabul edilmesini kolaylaştırdı.',
    },
    {
      prompt: 'Atatürk’ün 1936 konuşmasında Fransa’yı “dostluğuna çok önem verdiğimiz” ülke olarak anması neyi gösterir?',
      answer: 'Kararlılığın düşmanlığa dönüşmemesine özen gösterildiğini, davanın dostluk ve barış korunarak çözülmek istendiğini gösterir.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.6.3, Atatürk’ün Hatay’ı ülkemize katmak konusunda yaptıklarına ve bu uğurda gösterdiği özveriye kanıtlar göstermeni ister; açıklaması Hatay’ın katılışının Atatürk dönemi dış politikasının temel ilkeleriyle ilişkilendirilmesini vurgular. Bu kazanıma dayanan bir soru bir konuşma bölümü ya da bir olay verip kanıt veya ilke isteyebilir.',
    measures: [
      'Atatürk’ün Hatay için yaptıklarını belirleme',
      'Özveriye kanıt gösterme',
      'Hatay davasının aşamalarını sıralama',
      'Hatay’ı dış politikanın ilkeleriyle ilişkilendirme',
    ],
  },
  simulation: {
    title: 'Mini LGS: Bir müjde',
    passage:
      'Atatürk’ün rahatsızlığı nedeniyle Başbakan Celal Bayar tarafından 1 Kasım 1938’de Meclis’te okunan konuşmada şöyle denir: “Bu milli davayı bir Türk - Fransız dostluk anlaşması ile sonuçlandırmak yolundaki çalışma başarı ile sona erdi. Türk ve Fransız askerlerinin geçici ve ortak işgali, bu anlaşmanın açık belirtisi oldu. Bu nedenle sükün yerleşti ve seçimler tamamlandı. Sonunda Hatay, Millet Meclisine ve bağımsızlığına kavuştu.”',
    question: 'Bu metinden aşağıdaki sonuçlardan hangisine ulaşılabilir?',
    options: [
      { text: 'Hatay meselesinde barışçı ve uzlaşmacı bir yol izlenmiştir.', explanation: 'Doğru. “Dostluk anlaşması”, “ortak işgal” ve “seçimler” ifadeleri savaşsız, uzlaşmaya dayalı bir yolu gösterir.' },
      { text: 'Hatay bu konuşma yapıldığında Türkiye’ye katılmıştı.', explanation: 'Metin Hatay’ın “Meclisine ve bağımsızlığına” kavuştuğunu söyler; katılış 1939’dadır.' },
      { text: 'Hatay, Fransa ile yapılan bir savaş sonucunda kazanılmıştır.', explanation: 'Metinde savaştan değil, dostluk anlaşmasından söz edilir.' },
      { text: 'Hatay’da seçim yapılmamıştır.', explanation: 'Metin seçimlerin tamamlandığını açıkça söyler.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “ulaşılabilir” diyor. Metindeki üç ifade (dostluk anlaşması, ortak işgal, seçimler) aynı sonuca işaret eder.',
    critical_point: 'İkinci seçenek güçlü bir çeldiricidir: “bağımsızlığına kavuştu” ifadesi katılışla karıştırılabilir. Bağımsızlık (1938) ile katılış (1939) farklı aşamalardır.',
    takeaway: 'Metindeki kavramı tam olarak oku: “bağımsızlık” ile “katılış” aynı şey değildir.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Hatay davası',
    range: '1921–1939',
    body:
      'Hatay, 1921 Ankara Antlaşması ve Lozan’daki Suriye sınırı nedeniyle özel bir statüyle Fransız mandasındaki Suriye’de kaldı. 1936’da Fransa’nın Suriye’ye bağımsızlık vermeye yönelmesi üzerine Atatürk 1 Kasım 1936’da meseleyi Meclis’te bir millî dava olarak ilan etti. Doğrudan görüşmelerden sonuç çıkmayınca mesele Milletler Cemiyeti’ne götürüldü; 27 Ocak 1937 kararıyla sancak iç işlerinde bağımsız oldu, 29 Mayıs 1937’de statüsü ve Türk–Fransız güvenceleri kabul edildi. Atatürk Ocak 1937’de Konya’ya, Mayıs 1938’de hastalığına rağmen Adana ve Mersin’e giderek kararlılığını gösterdi. Temmuz 1938’de Türk birlikleri anlaşmayla Hatay’a girdi; seçimlerden sonra 2 Eylül 1938’de Hatay Devleti kuruldu. Atatürk 10 Kasım 1938’de öldü; 23 Haziran 1939’da Türkiye ile Fransa anlaştı ve 29 Haziran 1939’da Hatay Millet Meclisi Türkiye’ye katılma kararı aldı.',
    turning_points: [
      '1 Kasım 1936 · Davanın ilanı',
      '27 Ocak 1937 · Milletler Cemiyeti kararı',
      'Mayıs 1938 · Çukurova gezisi',
      '2 Eylül 1938 · Hatay Devleti',
      '29 Haziran 1939 · Anavatana katılış',
    ],
  },
  summary: [
    '**Kök:** 1921 Ankara Antlaşması (özel yönetim) ve Lozan’daki Suriye sınırı; Hatay Fransız mandasındaki Suriye’de kaldı.',
    '**1936:** Fransa–Suriye antlaşması; Atatürk 1 Kasım 1936’da Meclis’te davayı ilan etti.',
    '**1937:** Milletler Cemiyeti kararı (27 Ocak) ve statü (29 Mayıs): iç işlerinde bağımsız, dış işlerinde Suriye’ye bağlı; resmî dil Türkçe.',
    '**1938:** Türk birlikleri anlaşmayla Hatay’da (Temmuz); Hatay Devleti (2 Eylül).',
    '**1939:** Türk–Fransız anlaşması (23 Haziran); Hatay Meclisi’nin katılma kararı (29 Haziran).',
    '**Atatürk’ün özverisi:** Üç Meclis konuşması, Konya (1937), hastalığına rağmen Adana ve Mersin (Mayıs 1938); katılışı göremeden öldü.',
  ],
  quizzes: [
    {
      question: 'Hatay hangi tarihte Türkiye’ye katılmıştır?',
      options: ['29 Haziran 1939', '2 Eylül 1938', '27 Ocak 1937', '1 Kasım 1936'],
      answer_index: 0,
      explanation: 'Hatay Millet Meclisi 29 Haziran 1939’da Türkiye’ye katılma kararı aldı. 2 Eylül 1938 Hatay Devleti’nin kuruluşu, 27 Ocak 1937 Milletler Cemiyeti kararıdır.',
    },
    {
      question: 'Hatay meselesinde Milletler Cemiyeti’nin 1937 kararına göre sancağın durumu nedir?',
      options: ['İç işlerinde bağımsız, dış işlerinde Suriye’ye bağlı', 'Doğrudan Türkiye’ye bağlı', 'Tamamen Fransa’ya bağlı', 'Irak’a bağlı'],
      answer_index: 0,
      explanation: '27 Ocak 1937 kararına göre sancak iç işlerinde bağımsız, dış işlerinde Suriye’ye bağlı olacaktı; resmî dil Türkçe olacaktı.',
    },
    {
      question: 'Aşağıdakilerden hangisi Atatürk’ün Hatay için gösterdiği özveriye kanıt olarak gösterilebilir?',
      options: ['Hastalığına rağmen Adana ve Mersin’e giderek geçit törenlerini izlemesi', 'Lozan’da Hatay’ı Türkiye’ye kazandırması', 'Hatay’ı savaşla alması', 'Hatay Devleti’nin başkanı olması'],
      answer_index: 0,
      explanation: 'Mayıs 1938’de ağır hasta olmasına rağmen yaptığı Çukurova gezisi, sağlığını dava uğruna göze aldığının kanıtıdır. Hatay Lozan’da kazanılmadı ve savaşla alınmadı.',
    },
    {
      question: 'Hatay’ın Türkiye’ye katılışı en çok hangi dış politika ilkesinin uygulanmasına örnektir?',
      options: ['Sorunların barışçı yollarla çözülmesi', 'Uluslararası kuruluşlardan uzak durma', 'Askerî güç kullanma', 'Yalnızca iç kamuoyunu dikkate alma'],
      answer_index: 0,
      explanation: 'Hatay meselesi Milletler Cemiyeti, antlaşmalar ve Hatay halkının iradesiyle, savaşsız çözüldü.',
    },
    {
      question: 'Atatürk’ün 1 Kasım 1938 Meclis açış konuşması ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['Atatürk’ün rahatsızlığı nedeniyle Başbakan Celal Bayar tarafından okundu.', 'Hatay’ın Türkiye’ye katıldığını ilan etti.', 'Konuşmada Hatay’dan söz edilmedi.', 'Atatürk konuşmayı Hatay’da yaptı.'],
      answer_index: 0,
      explanation: 'Konuşma Atatürk hasta olduğu için Başbakan Celal Bayar tarafından okundu; Hatay’ın Meclis’ine ve bağımsızlığına kavuştuğunu müjdeledi. Katılış 1939’dadır.',
    },
  ],
  next: ['Atatürk’ün Ölümü ve Eserleri', 'İkinci Dünya Savaşı ve Türkiye'],
})

export default lesson
