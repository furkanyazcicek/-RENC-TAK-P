import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.6 Atatürk Dönemi Türk Dış Politikası · 1. ders
 * Kazanımlar: İTA.8.6.1 · İTA.8.6.2
 * Dayanak   : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   İTA.8.6.1 — Tam bağımsızlık, gerçekçilik, akılcılık, mütekabiliyet, barış, millî
 *               menfaatleri esas alma, Türk ve dünya kamuoyunu dikkate alma ilkeleri
 *               işlenerek Atatürk’ün ileri görüşlülüğü vurgulanır.
 *   İTA.8.6.2 — Lozan ilkelerle ilişkilendirilir; yabancı okullar, dış borçlar, Musul,
 *               nüfus mübadelesi ve Montrö ele alınır; Milletler Cemiyeti’ne girişte
 *               izlenen politika vurgulanır; Balkan Antantı ve Sadabat Paktı ele alınır.
 *
 * KAPSAM KARARI
 * 1926 Ankara Antlaşması’nın 14. maddesi ve Montrö’nün 24. maddesi ile Protokolü
 * Vikikaynak’taki metinlerden, tam bağımsızlık tanımı Nutuk’tan birebir alındı.
 * Hatay meselesi bir sonraki dersin konusudur; burada yalnız anılır. Harita şematiktir.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 21.
 */

const SLUG = 'lgs-tarih-ataturk-donemi-dis-politika'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Atatürk Dönemi Türk Dış Politikası',
  order: 1,
  title: 'Atatürk Dönemi Dış Politikası: İlkeler ve Gelişmeler',
  subtitle:
    '“Yurtta sulh, cihanda sulh.” Lozan’dan kalan sorunlar savaşla değil masada çözüldü; Türkiye bağımsızlığından taviz vermeden komşularıyla barış ittifakları kurdu.',
  minutes: 55,
  kazanimlar: ['İTA.8.6.1', 'İTA.8.6.2'],
  kapsamNotu:
    'Antlaşma maddeleri Vikikaynak’taki metinlerden, tam bağımsızlık tanımı Nutuk’tan birebir alıntılanmıştır. Hatay meselesi bir sonraki derste işlenir. Harita şematiktir; sınır ve uzaklık göstermez.',
  prerequisites: [
    {
      topic: 'Lozan Antlaşması',
      why: 'Atatürk dönemi dış politikasının gündemini büyük ölçüde Lozan’da çözülemeyen meseleler oluşturdu.',
    },
    {
      topic: 'Atatürk ilkeleri',
      why: 'Dış politikadaki tam bağımsızlık ve barış anlayışı, iç politikadaki ilkelerle birlikte düşünülür.',
    },
  ],
  outcomes: [
    'Atatürk dönemi dış politikasının yedi temel ilkesini örneklerle açıklayabileceksin.',
    'Lozan’ı dış politikanın ilkeleriyle ilişkilendirebileceksin.',
    'Yabancı okullar, dış borçlar, Musul, nüfus mübadelesi ve Montrö meselelerinin nasıl çözüldüğünü analiz edebileceksin.',
    'Milletler Cemiyeti’ne giriş, Balkan Antantı ve Sadabat Paktı’nın amacını açıklayabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Lozan’dan sonra: masadaki işler bitmemişti',
    lead:
      'Lozan Türkiye’nin bağımsızlığını tanıdı; ama bazı meseleleri ileriye bıraktı. Musul, Boğazlar, dış borçlar, yabancı okullar ve mübadele, Atatürk döneminin dış politika gündemini oluşturdu.',
    body:
      'Savaşlardan yorgun çıkan Türkiye’nin öncelikli hedefi, inkılaplarla içeride çağdaş bir devlet kurmaktı. Bunun için dışarıda **barış** gerekiyordu. Ama barış, bağımsızlıktan taviz vermek anlamına gelmemeliydi. Atatürk dönemi dış politikası bu iki hedefi birlikte gözetti: **tam bağımsızlık** ve **barış**.\n\n' +
      'Atatürk bu anlayışı 20 Nisan 1931’deki seçim beyannamesinde “Yurtta sulh, cihanda sulh” sözüyle özetledi. Bu derste önce dış politikanın ilkelerini (İTA.8.6.1), sonra bu ilkelerin sorunlara nasıl uygulandığını (İTA.8.6.2) göreceğiz: yabancı okullar, dış borçlar, Musul, nüfus mübadelesi, Milletler Cemiyeti’ne giriş, Balkan Antantı, Montrö ve Sadabat.',
  },
  concepts: [
    { term: 'Mütekabiliyet', body: 'Karşılıklılık. Bir devlete, o devletin sana davrandığı gibi davranmak.' },
    { term: 'Milletler Cemiyeti', body: 'Birinci Dünya Savaşı’ndan sonra devletler arası sorunları barışçı yollarla çözmek için kurulan uluslararası örgüt. Bugünkü Birleşmiş Milletler’in öncüsü.' },
    { term: 'Antant ve pakt', body: 'Devletlerin ortak amaçlar için yaptıkları anlaşma ve iş birlikleri. Balkan Antantı ve Sadabat Paktı birer bölgesel barış anlaşmasıdır.' },
    { term: 'Mübadele', body: 'Değiş tokuş. Türkiye ile Yunanistan arasında halkların karşılıklı yer değiştirmesi.' },
    { term: 'Kamuoyu', body: 'Bir toplumun ya da dünyanın bir konu hakkındaki genel görüşü.' },
  ],
  why: {
    question: 'Türkiye neden sorunlarını savaşla değil, masada çözmeyi seçti?',
    body:
      'Çünkü Türkiye on yıldır savaşıyordu ve inkılapları hayata geçirmek için barışa ihtiyacı vardı. Ayrıca yeni devlet, sorunlarını uluslararası hukuk ve antlaşmalarla çözerek dünyada güvenilir bir ülke olduğunu göstermek istiyordu.\n\n' +
      'Ama barışçı olmak zayıf olmak demek değildi. Nutuk’ta Mustafa Kemal, tam bağımsızlığın “siyasî, malî, iktisadî, adlî, askerî, harsî” her alanda bağımsızlık demek olduğunu söyler. Bu yüzden Türkiye barış isterken bağımsızlığının hiçbir parçasından vazgeçmedi. Atatürk dönemi dış politikasının dengesi buydu: **barış içinde tam bağımsızlık.**',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Atatürk dönemi dış politikası (1923–1937)',
    lead: 'Kronolojinin ilk yarısı Lozan’dan kalan sorunların çözümünü, ikinci yarısı barış ittifaklarını gösterir.',
    intro: '1930’lar, Avrupa’da savaş tehlikesinin arttığı yıllardır. Türkiye’nin bu yıllarda yaptığı ittifakları bu tehlikeyle birlikte düşün.',
    items: [
      { title: '30 Ocak 1923 · Mübadele sözleşmesi', body: 'Türkiye ile Yunanistan arasında nüfus mübadelesi kararlaştırıldı.' },
      { title: '1924 · Yabancı okullar Türk denetiminde', body: 'Tevhid-i Tedrisat ile yabancı okullar da Maarif Vekâleti’nin denetimine girdi; Türkçe, tarih ve coğrafya derslerinin Türk öğretmenlerce okutulması istendi.' },
      { title: '19 Mayıs–5 Haziran 1924 · Haliç Konferansı', body: 'Musul için Türk ve İngiliz heyetleri İstanbul’da görüştü; sonuç alınamadı.' },
      { title: '16 Aralık 1925 · Milletler Cemiyeti kararı', body: 'Milletler Cemiyeti Musul’u İngiliz mandasındaki Irak’a bıraktı.' },
      { title: '5 Haziran 1926 · Ankara Antlaşması', body: 'Türkiye, İngiltere ve Irak arasında imzalandı; Musul Irak’ta kaldı, Türkiye’ye 25 yıl petrol gelirinden pay verildi.' },
      { title: '13 Haziran 1928 · Paris’te borç anlaşması', body: 'Osmanlı borçlarının paylaşımı ve ödenmesi alacaklılarla düzenlendi; son taksit 25 Mayıs 1954’te ödendi.' },
      { title: '1930 · Türk–Yunan yakınlaşması', body: 'Mübadele sorunları 10 Haziran 1930’da çözüldü; Ekim 1930’da Ankara’da dostluk antlaşması imzalandı.' },
      { title: '18 Temmuz 1932 · Milletler Cemiyeti', body: 'Türkiye, davet üzerine Milletler Cemiyeti’ne üye oldu.' },
      { title: '9 Şubat 1934 · Balkan Antantı', body: 'Türkiye, Yunanistan, Yugoslavya ve Romanya Atina’da Balkan Antantı’nı imzaladı.' },
      { title: '20 Temmuz 1936 · Montrö', body: 'Boğazlar Türk egemenliğine geçti; Türkiye Boğazları yeniden silahlandırma hakkı kazandı.' },
      { title: '8 Temmuz 1937 · Sadabat Paktı', body: 'Türkiye, İran, Irak ve Afganistan Tahran’da Sadabat Paktı’nı imzaladı.' },
    ],
    takeaway:
      'Dikkat et: Musul, borçlar ve mübadele gibi sorunlar 1920’lerde; barış ittifakları ve Montrö ise 1930’larda, Avrupa’da yeni bir savaş tehlikesi belirirken gerçekleşti.',
    body:
      'Kronolojiyi iki dönem olarak oku. **1923–1930:** Türkiye Lozan’dan kalan sorunları tek tek çözdü. Bazılarında istediği sonucu tam alamadı (Musul), bazılarında ise bağımsızlığını kesin olarak kabul ettirdi (yabancı okullar). **1930–1937:** Almanya ve İtalya’nın yayılmacı politikaları Avrupa’yı yeni bir savaşa sürüklerken Türkiye batıda Balkan Antantı, doğuda Sadabat Paktı ile bölgesel barış kuşakları kurdu; Montrö ile de Boğazlar üzerindeki egemenliğini tamamladı.\n\n' +
      'Atatürk’ün **ileri görüşlülüğü** bu ikinci dönemde görülür: Savaş tehlikesini erken fark etti; Türkiye’nin güvenliğini hem komşularıyla ittifaklar hem de Boğazlar üzerindeki egemenlikle güçlendirdi.',
  },
  map: {
    title: 'Şematik atlas: Atatürk dönemi dış politikası',
    intro: 'Katmanları aç: batıda Balkan Antantı, doğuda Sadabat Paktı ve Lozan’dan kalan iki mesele (Musul ve Boğazlar).',
    map_label: 'Şematik gösterim · sınır ve uzaklık göstermez',
    layers: [
      { id: 'balkan', label: 'Balkan Antantı 1934', description: 'Türkiye, Yunanistan, Yugoslavya, Romanya.', active: true },
      { id: 'sadabat', label: 'Sadabat Paktı 1937', description: 'Türkiye, İran, Irak, Afganistan.', active: true },
      { id: 'sorun', label: 'Musul ve Boğazlar', description: 'Lozan’dan kalan iki mesele.', active: false },
    ],
    regions: [
      { label: 'KARADENİZ', x: 30, y: 22, tone: 'water' },
      { label: 'AKDENİZ', x: 16, y: 80, tone: 'water' },
    ],
    locations: [
      { id: 'ankara', label: 'Ankara', x: 30, y: 44, tone: 'brand', detail: 'Türkiye’nin başkenti. Balkan Antantı ve Sadabat Paktı, Türkiye’nin batıda ve doğuda kurduğu iki barış kuşağının ortak üyesiydi.' },
      { id: 'atina', label: 'Atina', x: 10, y: 56, layer: 'balkan', tone: 'accent', detail: 'Balkan Antantı 9 Şubat 1934’te Atina’da imzalandı. Türkiye ile Yunanistan 1930’da dostluk antlaşması imzalamıştı.' },
      { id: 'belgrad', label: 'Belgrad', x: 4, y: 22, layer: 'balkan', tone: 'accent', detail: 'Yugoslavya’nın başkenti. Yugoslavya Balkan Antantı’nın üyesiydi.' },
      { id: 'bukres', label: 'Bükreş', x: 16, y: 10, layer: 'balkan', tone: 'accent', detail: 'Romanya’nın başkenti. Romanya Balkan Antantı’nın üyesiydi.' },
      { id: 'bagdat', label: 'Bağdat', x: 52, y: 78, layer: 'sadabat', tone: 'accent', detail: 'Irak Sadabat Paktı’nın üyesiydi. Musul meselesi 1926’da Irak ile de çözülmüştü.' },
      { id: 'tahran', label: 'Tahran', x: 64, y: 62, layer: 'sadabat', tone: 'accent', detail: 'Sadabat Paktı 8 Temmuz 1937’de Tahran’daki Sadabat Sarayı’nda imzalandı.' },
      { id: 'kabil', label: 'Kabil', x: 88, y: 70, layer: 'sadabat', tone: 'accent', detail: 'Afganistan’ın başkenti. Afganistan Sadabat Paktı’nın üyesiydi; Türkiye ile ilişkileri 1921 antlaşmasına dayanıyordu.' },
      { id: 'musul', label: 'Musul', x: 48, y: 62, layer: 'sorun', tone: 'danger', detail: 'Lozan’da çözülemedi; Milletler Cemiyeti 1925’te Irak’a bıraktı; 1926 Ankara Antlaşması ile Türkiye 25 yıl petrol gelirinin yüzde onunu aldı.' },
      { id: 'bogazlar', label: 'Boğazlar', x: 20, y: 34, layer: 'sorun', tone: 'brand', detail: 'Lozan’da uluslararası bir komisyona bırakılmıştı. 1936 Montrö Sözleşmesi ile komisyonun yetkileri Türkiye’ye geçti ve Boğazlar yeniden askerleştirildi.' },
    ],
    routes: [],
    insight:
      'Haritada Ankara’nın iki yanına bak: batıda Balkan Antantı, doğuda Sadabat Paktı. Türkiye iki ayrı bölgenin kesiştiği yerde, iki yönde de barış ve güvenlik aradı.',
    source_note:
      'Yerler; İ. Soysal, Türkiye’nin Siyasal Antlaşmaları I (TTK, 1983), Vikikaynak’taki 1926 Ankara Antlaşması ve Montrö Sözleşmesi metinleri, Atatürk Ansiklopedisi ve ilgili akademik yayınlar esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir.',
  },
  dataTable: {
    title: 'Dış politikanın yedi ilkesi ve örnekleri',
    columns: ['İlke', 'Ne demek?', 'Atatürk döneminden örnek'],
    rows: [
      ['Tam bağımsızlık', 'Siyasi, ekonomik, hukuki, askerî ve kültürel her alanda hiçbir devlete bağımlı olmamak', 'Kapitülasyonların reddi; yabancı okulların Türk kanunlarına bağlanması; Montrö ile Boğazlar egemenliği'],
      ['Gerçekçilik', 'Hedefleri ülkenin gücüne ve dünyanın koşullarına göre belirlemek', 'Musul için savaş yerine antlaşmayla sonuca varılması ve petrol gelirinden pay alınması'],
      ['Akılcılık', 'Kararları duygulara değil bilgiye ve hesaplamaya dayandırmak', 'Boğazlar rejiminin değiştirilmesinin, değişen uluslararası koşullarda hukuk yoluyla istenmesi (Montrö)'],
      ['Mütekabiliyet (karşılıklılık)', 'Başka devletlere, onların Türkiye’ye davrandığı gibi davranmak', 'İstanbul Rumları ile Batı Trakya Türklerinin karşılıklı olarak mübadele dışında tutulması'],
      ['Barış', '“Yurtta sulh, cihanda sulh”; sorunları barışçı yollarla çözmek', 'Milletler Cemiyeti üyeliği; Türk–Yunan dostluğu; Balkan Antantı; Sadabat Paktı'],
      ['Millî menfaatleri esas alma', 'Kararlarda milletin çıkarını ön planda tutmak', 'Dış borçların ödeme koşullarının ülkenin gücüne göre yeniden düzenlenmesi; Musul’da petrol payı'],
      ['Türk ve dünya kamuoyunu dikkate alma', 'Kararları hem milletin hem dünyanın anlayacağı ve destekleyeceği biçimde vermek', 'Milletler Cemiyeti’ne davetle girilmesi; sorunların uluslararası kurumlar ve antlaşmalarla çözülmesi'],
    ],
    caption:
      'İlkeler birbirinden bağımsız değildir. Örneğin Montrö hem tam bağımsızlığın, hem akılcılığın, hem de barışçı yöntemin örneğidir.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Lozan’dan Montrö’ye: sorunlardan çözüme',
    lead: 'Program Lozan’ın dış politika ilkeleriyle ilişkilendirilmesini ister. Zincir, Lozan’dan kalan sorunların ilkeler doğrultusunda nasıl çözüldüğünü gösterir.',
    intro: 'Zincirin başı sorunların kaynağını, ortası çözüm yollarını, sonu da sonuçları anlatır.',
    steps: [
      { tur: 'sebep', title: 'Lozan’dan kalan meseleler', body: 'Musul, Boğazlar’ın uluslararası komisyona bırakılması, borçların ödenmesi ve mübadele sorunları çözüm bekliyordu.' },
      { tur: 'sebep', title: 'Barış ihtiyacı', body: 'İnkılapları gerçekleştirmek için Türkiye’nin dışarıda barışa ihtiyacı vardı.' },
      { tur: 'sebep', title: 'Değişen dünya', body: '1930’larda Almanya ve İtalya’nın yayılmacı politikaları yeni bir savaş tehlikesi doğurdu.' },
      { tur: 'gelisme', title: 'Barışçı çözümler (1924–1930)', body: 'Musul (1926), borçlar (1928) ve mübadele (1930) antlaşmalarla çözüldü; yabancı okullar Türk kanunlarına bağlandı.' },
      { tur: 'gelisme', title: 'Barış ittifakları (1932–1937)', body: 'Milletler Cemiyeti üyeliği (1932), Balkan Antantı (1934) ve Sadabat Paktı (1937).' },
      { tur: 'sonuc', title: 'Montrö (1936)', body: 'Boğazlar üzerindeki egemenlik barışçı yolla tamamlandı; Lozan’daki sınırlama kalktı.' },
      { tur: 'sonraki-etki', title: 'Savaşa hazırlıklı bir Türkiye', body: 'Türkiye İkinci Dünya Savaşı’na güvenli sınırlar, Boğazlar üzerinde tam egemenlik ve komşularıyla iyi ilişkilerle girdi.' },
    ],
    inference:
      'Temel çıkarım: Atatürk dönemi dış politikası Lozan’ı bir bitiş değil, bir başlangıç olarak gördü. Lozan’ın eksik bıraktığı konular, savaşa başvurmadan, antlaşmalar ve uluslararası hukuk yoluyla adım adım tamamlandı.',
    body:
      '**Lozan ve ilkeler:** Lozan’da kapitülasyonların reddi **tam bağımsızlığı**; Musul’un ileriye bırakılıp masadan kalkılmaması **gerçekçiliği** ve **barışı**; İstanbul Rumları ile Batı Trakya Türklerinin karşılıklı olarak mübadele dışında tutulması **mütekabiliyeti** gösterir.\n\n' +
      '**Milletler Cemiyeti’ne girişte izlenen politika:** Türkiye, 1920’lerde Musul kararını veren bu örgüte karşı temkinliydi. Başvurarak değil, **davet edilerek** üye olmayı tercih etti ve 18 Temmuz 1932’de davet üzerine üye oldu. Bu, hem Türkiye’nin uluslararası saygınlığını gösterdi hem de barışçı bir ülke olduğunu dünya kamuoyuna duyurdu.',
  },
  comparison: {
    title: 'İki barış kuşağı: Balkan Antantı ve Sadabat Paktı',
    columns: ['Balkan Antantı', 'Sadabat Paktı'],
    rows: [
      { label: 'Tarih ve yer', values: ['9 Şubat 1934, Atina', '8 Temmuz 1937, Tahran (Sadabat Sarayı)'] },
      { label: 'Üyeler', values: ['Türkiye, Yunanistan, Yugoslavya, Romanya', 'Türkiye, İran, Irak, Afganistan'] },
      { label: 'Bölge', values: ['Balkanlar (Türkiye’nin batısı)', 'Orta Doğu ve Orta Asya (Türkiye’nin doğusu)'] },
      { label: 'Amaç', values: ['Sınırların korunması, bölgesel barış ve iş birliği; yayılmacı devletlere karşı dayanışma', 'Sınırlara saygı, iç işlerine karışmama, bölgesel barış ve iş birliği'] },
      { label: 'İlgili ilke', values: ['Barış; gerçekçilik', 'Barış; mütekabiliyet (karşılıklı saygı)'] },
    ],
    insight:
      'Asıl bağlantı: Türkiye batıda ve doğuda iki ayrı barış kuşağı kurarak kendi çevresinde bir güvenlik alanı oluşturdu. İki anlaşmanın ortak üyesi yalnız Türkiye’dir.',
  },
  traps: [
    {
      title: 'Musul’un Lozan’da Irak’a bırakıldığını sanmak',
      wrong: 'Musul, Lozan Antlaşması ile Irak’a bırakıldı.',
      right: 'Lozan’da Musul çözülemedi ve ileriye bırakıldı. Milletler Cemiyeti 16 Aralık 1925’te Musul’u Irak’a bıraktı; Türkiye bunu 5 Haziran 1926 Ankara Antlaşması ile kabul etti.',
      body: 'Sıralamayı hatırla: Lozan (1923) → Haliç Konferansı (1924) → Milletler Cemiyeti kararı (1925) → Ankara Antlaşması (1926).',
    },
    {
      title: 'Türkiye’nin Milletler Cemiyeti’ne başvurarak girdiğini sanmak',
      wrong: 'Türkiye, Milletler Cemiyeti’ne üye olmak için başvurdu ve kabul edildi.',
      right: 'Türkiye, 18 Temmuz 1932’de Milletler Cemiyeti’nin daveti üzerine üye oldu.',
      body: 'Davetle girmek, Türkiye’nin saygınlığını gösteren ve kamuoyunu dikkate alan bir politikadır.',
    },
    {
      title: 'Montrö’yü Lozan’dan önce sanmak',
      wrong: 'Boğazlar sorunu Lozan’da tamamen Türkiye lehine çözüldü.',
      right: 'Lozan’da Boğazlar gayri askerî bölge oldu ve geçişleri uluslararası bir komisyon denetledi. Türk egemenliği ancak 20 Temmuz 1936 Montrö Sözleşmesi ile tamamlandı.',
      body: 'Montrö’nün 24. maddesi komisyonun yetkilerini Türk Hükümetine aktarır.',
    },
    {
      title: 'Dış borçların Lozan’da silindiğini sanmak',
      wrong: 'Lozan’da Osmanlı borçları silindi; Türkiye hiçbir borç ödemedi.',
      right: 'Borçlar Osmanlı’dan ayrılan devletler arasında paylaştırıldı. Türkiye payına düşen borcu 1928 Paris anlaşmasıyla düzenledi ve son taksiti 25 Mayıs 1954’te ödedi.',
      body: 'Borçların düzenli ödenmesi, yeni devletin uluslararası güvenilirliğini de artırdı.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Dış politikanın kişileri',
    lead: 'Atatürk dönemi dış politikasını masada yürütenler.',
    intro: 'Kartlarda her kişinin dış politikadaki rolünü görürsün.',
    figures: [
      {
        name: 'Mustafa Kemal Atatürk',
        period: '1923–1938 · Cumhurbaşkanı',
        position: 'Dış politikanın yön vericisi',
        contribution: '“Yurtta sulh, cihanda sulh” sözüyle dış politikanın barış ilkesini özetledi; tam bağımsızlıktan taviz verilmemesini esas aldı; 1930’larda savaş tehlikesini erken fark ederek bölgesel ittifakları destekledi.',
        connections: ['Tam bağımsızlık', 'Barış'],
        significance: 'Dış politikada ileri görüşlülüğün simgesidir.',
      },
      {
        name: 'Dr. Tevfik Rüştü (Aras)',
        period: '1925–1938 · Hariciye Vekili',
        position: 'Dışişleri Bakanı',
        contribution: '1926 Ankara Antlaşması’nı Türkiye adına imzaladı; Montrö görüşmelerinde Türk heyetinin başındaydı.',
        connections: ['Musul', 'Montrö'],
        significance: 'Atatürk döneminin dış politikasını masada yürüten bakandır.',
      },
      {
        name: 'Elefterios Venizelos',
        period: '1930 · Yunanistan Başbakanı',
        position: 'Yunanistan Başbakanı',
        contribution: 'Ekim 1930’da Türkiye’yi ziyaret etti; Ankara’da Türk–Yunan dostluk antlaşması imzalandı.',
        connections: ['Türk–Yunan yakınlaşması', 'Balkan Antantı'],
        significance: 'Savaşta karşı karşıya gelen iki ülkenin dostluğa geçişini simgeler.',
      },
      {
        name: 'İsmet Paşa (İnönü)',
        period: '1930 · Başvekil',
        position: 'Başbakan',
        contribution: 'Lozan’ın başmüzakerecisiydi; Başbakan olarak Venizelos’u Türkiye’ye davet etti ve dostluk antlaşmasının yapılmasında rol oynadı.',
        connections: ['Lozan', 'Türk–Yunan dostluğu'],
        significance: 'Lozan ile sonraki dış politika arasındaki süreklilik bağıdır.',
      },
    ],
    takeaway:
      'Dış politika tek bir kişinin işi değildir; ama yön, bir liderin ilkelerle belirlediği çizgiyi izler. Atatürk dönemi dış politikasının çizgisi “barış içinde tam bağımsızlık”tır.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-sorunlar`,
      title: 'Lozan’dan kalan beş mesele',
      lead: 'Program beş meseleyi adıyla sayar: yabancı okullar, dış borçlar, Musul, nüfus mübadelesi ve Montrö. Her birini “sorun–çözüm–ilke” biçiminde inceleyelim.',
      blocks: [
        {
          id: `${SLUG}-sorunlar-tablo`,
          type: 'table',
          interactive: true,
          title: 'Sorun, çözüm, ilke',
          columns: ['Mesele', 'Sorun', 'Çözüm', 'İlke'],
          rows: [
            ['Yabancı okullar', 'Yabancı okullar kendi programlarıyla, devlet denetimi dışında eğitim yapıyordu; bazılarında dinî simge ve propaganda vardı.', 'Tevhid-i Tedrisat (1924) ile Maarif Vekâleti denetimine girdi; Türkçe, tarih ve coğrafya derslerinin Türk öğretmenlerce okutulması istendi; dinî simgeler kaldırıldı. Türkiye bunu bir iç mesele saydı.', 'Tam bağımsızlık'],
            ['Dış borçlar', 'Lozan’da paylaştırılan Osmanlı borçlarının ödeme koşulları belirsizdi.', '13 Haziran 1928 Paris anlaşması; 1929 bunalımından sonra koşullar yeniden düzenlendi; son taksit 25 Mayıs 1954’te ödendi.', 'Millî menfaat, gerçekçilik'],
            ['Musul', 'Lozan’da Irak sınırı çizilemedi.', 'Haliç Konferansı (1924) sonuçsuz kaldı; Milletler Cemiyeti Musul’u Irak’a bıraktı (1925); 1926 Ankara Antlaşması ile Türkiye 25 yıl petrol gelirinin yüzde onunu aldı.', 'Gerçekçilik, barış'],
            ['Nüfus mübadelesi', 'Mübadelenin uygulanmasında (kimlerin “yerleşik” sayılacağı gibi) anlaşmazlıklar çıktı.', '10 Haziran 1930 Ankara Sözleşmesi ile sorunlar çözüldü; Ekim 1930’da Türk–Yunan dostluk antlaşması imzalandı.', 'Barış, mütekabiliyet'],
            ['Boğazlar (Montrö)', 'Lozan’da Boğazlar gayri askerî bölge oldu, geçişleri uluslararası bir komisyon denetledi.', '20 Temmuz 1936 Montrö: Komisyonun yetkileri Türkiye’ye geçti; Boğazlar yeniden askerleştirilebilecekti.', 'Tam bağımsızlık, akılcılık'],
          ],
          caption: 'Tabloyu satır satır oku: Her mesele için önce sorunu, sonra çözümü, en son hangi ilkeyle ilişkili olduğunu düşün.',
        },
        {
          id: `${SLUG}-sorunlar-anlatim`,
          type: 'prose',
          body:
            '**Musul neden savaşla değil antlaşmayla çözüldü?** Musul, Misakımillî sınırları içinde görülüyordu; bu yüzden onu bırakmak kolay değildi. Ama Türkiye aynı yıllarda Şeyh Said İsyanı gibi iç sorunlarla uğraşıyordu ve Musul’u elinde tutan İngiltere dönemin en büyük güçlerinden biriydi. Türkiye, Milletler Cemiyeti kararından sonra gerçekçi bir yol seçti: Antlaşmayı imzaladı, karşılığında petrol gelirinden pay ve güvenli bir güney sınırı elde etti. Tarihçiler bu kararı çoğunlukla “gerçekçilik” ilkesinin örneği olarak değerlendirir; bazıları ise Misakımillî’den bir kayıp olarak görür.\n\n' +
            '**Montrö neden bir başarıdır?** 1930’larda İtalya ve Almanya’nın yayılmacı politikaları nedeniyle Boğazların gayri askerî kalması Türkiye için tehlikeli hâle gelmişti. Türkiye bu durumu savaşla değil, Lozan’ı imzalayan devletlere başvurarak ve bir konferans toplanmasını sağlayarak değiştirdi. Sonuçta Boğazlar üzerinde tam egemenlik, uluslararası hukuka uygun biçimde kazanıldı.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste Nutuk’taki tam bağımsızlık tanımını, 1926 Ankara Antlaşması’nın bir maddesini ve Montrö Sözleşmesi’nden iki hükmü okuyacaksın. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Nutuk metni Vikikaynak’tan, 1926 Ankara Antlaşması Vikikaynak’taki Osmanlıca özgün metinden, Montrö Sözleşmesi Vikikaynak’taki Türkçe çeviriden alınmıştır.\n\n' +
      'İlk üç metin birebir alıntıdır. Dördüncü metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Nutuk: Tam bağımsızlık nedir?',
        kunye: 'Mustafa Kemal, Nutuk (1927), 12. bölüm: “Fransa hükûmeti ile temas ve Ankara İtilâfnamesi”. Mustafa Kemal’in 1921’de Fransız temsilci Franklin-Bouillon ile görüşmesinde söyledikleri. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı.',
        metin:
          'İstiklâli tâm denildiği zaman, bi’t-tabi siyasî, malî, iktisadî, adlî, askerî, harsî ve ilh... her hususta istiklâl-i tâm ve serbestî-i tâm demektir. Bu saydıklarımın herhangi birinde istiklâlden mahrumiyet, millet ve memleketin, mana-yı hakikîsiyle bütün istiklâlinden mahrumiyeti demektir.',
        soru: 'Mustafa Kemal tam bağımsızlığı nasıl tanımlıyor? Bu tanım yabancı okullar meselesine nasıl uygulanabilir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“İstiklal-i tam”: tam bağımsızlık. “Mali”: parasal. “İktisadi”: ekonomik. “Adli”: hukuki. “Harsi”: kültürel. “Serbesti”: özgürlük. “Mahrumiyet”: yoksunluk.' },
          { title: 'Tanımı bul', body: 'Tam bağımsızlık; siyasi, parasal, ekonomik, hukuki, askerî ve kültürel her alanda bağımsızlıktır. Bunlardan birinde bağımlılık, bütün bağımsızlığın kaybı demektir.' },
          { title: 'Uygula', body: 'Yabancı okulların devlet denetimi dışında eğitim yapması kültürel (harsi) bağımsızlığı zedeliyordu. Onları Türk kanunlarına bağlamak, tam bağımsızlığın kültür alanındaki uygulamasıdır.' },
        ],
        cevap: 'Mustafa Kemal tam bağımsızlığı siyasi, parasal, ekonomik, hukuki, askerî ve kültürel her alanda bağımsızlık olarak tanımlar ve birindeki eksikliğin bütün bağımsızlığı ortadan kaldıracağını söyler. Yabancı okulların Türk kanunlarına bağlanması, bu tanımın kültür ve eğitim alanındaki uygulamasıdır.',
        cikarim: 'Bir ilkenin tanımını bilmek, onu farklı olaylara uygulamanı sağlar. “Harsi” sözcüğü, kültürün de bağımsızlığın bir parçası sayıldığını gösterir.',
      },
      {
        tur: 'birincil',
        baslik: '1926 Ankara Antlaşması: petrol payı',
        kunye: 'Türkiye, İngiltere ve Irak Hükümetleri beyninde Ankara’da 5 Haziran 1926 tarihinde münakit hudut ve münasebat-ı hasene-i hemcivari muahedenamesi, 14. madde (ilk bölüm). Metin: Vikikaynak (Osmanlıca özgün metin).',
        nitelik: 'Birebir alıntı (maddenin girişi özetlenmiş, alıntı “yirmi beş sene” ile başlar).',
        metin:
          '… yirmi beş sene müddetle berveçhizir alacağı aidatın yüzde onunu Türkiye Hükümetine tesviye edecektir: a) 14 mart 1925 tarihli imtiyaz mukavelenamesinin onuncu maddesi mucibince «Türkiş Petroleum» kompani’den …',
        soru: 'Bu madde Musul meselesinin çözümünde Türkiye’ye ne sağlıyor? Bu, hangi dış politika ilkeleriyle ilişkilendirilebilir?',
        adimlar: [
          { title: 'Sözcükleri çöz', body: '“Berveçhizir”: aşağıda gösterildiği gibi. “Aidat”: gelir, pay. “Tesviye etmek”: ödemek. “İmtiyaz mukavelenamesi”: ayrıcalık sözleşmesi.' },
          { title: 'Maddeyi yorumla', body: 'Irak Hükümeti, 25 yıl boyunca petrol şirketlerinden alacağı gelirlerin yüzde onunu Türkiye’ye ödeyecektir.' },
          { title: 'İlkeyle bağla', body: 'Musul Irak’ta kalmıştır, ama Türkiye ekonomik bir kazanç elde etmiştir: gerçekçilik ve millî menfaati gözetme.' },
        ],
        cevap: 'Madde, Musul Irak’ta kalsa da Türkiye’ye 25 yıl boyunca petrol gelirinin yüzde onunu sağlar. Bu, gerçekçilik ve millî menfaatleri esas alma ilkeleriyle ilişkilendirilebilir.',
        cikarim: 'Bir antlaşmayı değerlendirirken yalnız kaybedileni değil, karşılığında elde edileni de görmek gerekir.',
      },
      {
        tur: 'birincil',
        baslik: 'Montrö Sözleşmesi’nden iki hüküm',
        kunye: 'Montrö Boğazlar Sözleşmesi, Montrö, 20 Temmuz 1936; 24. madde (ilk fıkra) ve ekli Protokol’ün 1. maddesi. Metin: Vikikaynak (Türkçe çeviri).',
        nitelik: 'Birebir alıntı (Türkçe çeviriden).',
        metin:
          'Boğazlar rejimine ilişkin 24 Temmuz 1923 tarihli Sözleşme gereğince kurulmuş olan Uluslararası Komisyonun yetkileri Türk Hükümetine aktarılmıştır. … Türkiye, işbu Sözleşmenin Başlangıç (Préambule) kesiminde tanımlandığı biçimde Boğazlar bölgesini hemen yeniden askerleştirebilecektir.',
        soru: 'Bu iki hüküm Lozan’daki Boğazlar düzenini nasıl değiştiriyor? Montrö hangi ilkeyle en çok ilişkilidir?',
        adimlar: [
          { title: 'Lozan’ı hatırla', body: 'Lozan’da Boğazlar gayri askerî bölgeydi ve geçişleri uluslararası bir komisyon denetliyordu.' },
          { title: 'Değişimi bul', body: '1) Komisyonun yetkileri Türk Hükümetine geçiyor. 2) Türkiye Boğazları hemen yeniden askerleştirebiliyor.' },
          { title: 'İlkeyle bağla', body: 'Boğazlar üzerinde egemenliğin tamamen Türkiye’ye geçmesi → tam bağımsızlık; bunun savaşla değil, uluslararası bir sözleşmeyle sağlanması → barış ve akılcılık.' },
        ],
        cevap: 'Hükümler, Lozan’daki uluslararası komisyonu kaldırıp yetkilerini Türkiye’ye verir ve Boğazların yeniden askerleştirilmesine izin verir. Montrö en çok tam bağımsızlık ilkesiyle, barışçı yöntemiyle de barış ve akılcılık ilkeleriyle ilişkilidir.',
        cikarim: 'Montrö, Lozan’ın “eksik” bıraktığı bir alanın barışçı yolla tamamlanmasının en açık örneğidir.',
      },
      {
        tur: 'ikincil',
        baslik: 'Musul üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Türkiye 1926 Ankara Antlaşması ile Musul’u Irak’a bıraktı. Bu karar, Türkiye’nin o yıllardaki iç sorunları ve İngiltere karşısındaki güç dengesi düşünüldüğünde gerçekçi bir karardır. Ancak Musul’un Misakımillî sınırları içinde görüldüğü de unutulmamalıdır.',
        soru: 'Metindeki olguyu ve yorumları ayır. Yazar kararı tek yönlü mü değerlendiriyor?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Sonradan yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguyu ayır', body: '1926 Ankara Antlaşması ile Musul’un Irak’ta kalması olgudur.' },
          { title: 'Yorumları ayır', body: '“Gerçekçi bir karardır” bir yorumdur; gerekçesi (iç sorunlar, güç dengesi) de verilmiştir.' },
          { title: 'Dengeyi değerlendir', body: 'Yazar, kararın gerçekçi yönünü savunurken Misakımillî açısından bir kayıp olduğunu da hatırlatıyor; tek yönlü değil, dengelidir.' },
        ],
        cevap: 'Olgu: Musul’un 1926 antlaşmasıyla Irak’ta kalması. Yorum: kararın gerçekçi olması (gerekçeleriyle). Yazar Misakımillî açısından kaybı da belirttiği için değerlendirme dengelidir.',
        cikarim: 'Tartışmalı kararlarda iyi bir yorum, hem gerekçeleri hem de bedelleri birlikte gösterir.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Olayı ilkeyle eşleştir',
      prompt: 'Aşağıdaki gelişmeleri en yakından ilgili oldukları dış politika ilkesiyle eşleştir: (1) Yabancı okulların Türk kanunlarına bağlanması, (2) Milletler Cemiyeti’ne davetle girilmesi, (3) Balkan Antantı, (4) Musul’da petrol payı karşılığında antlaşma yapılması.',
      steps: [
        { title: '1', body: 'Kültürel ve hukuki bağımsızlık → Tam bağımsızlık.' },
        { title: '2', body: 'Saygınlık ve dünya kamuoyu → Türk ve dünya kamuoyunu dikkate alma.' },
        { title: '3', body: 'Bölgesel barış ve iş birliği → Barış.' },
        { title: '4', body: 'Güç dengesine göre karar ve ekonomik kazanç → Gerçekçilik, millî menfaat.' },
      ],
      answer: '1–Tam bağımsızlık · 2–Kamuoyunu dikkate alma · 3–Barış · 4–Gerçekçilik ve millî menfaat.',
      takeaway: 'Bir olay birden fazla ilkeyle ilişkili olabilir; soruda “en yakından” deniyorsa olayın asıl amacını düşün.',
    },
    {
      title: 'Kronolojik sıraya koy',
      prompt: 'Montrö, Sadabat Paktı, Balkan Antantı ve Milletler Cemiyeti’ne giriş olaylarını sıraya koy.',
      steps: [
        { title: '1', body: 'Milletler Cemiyeti’ne giriş (18 Temmuz 1932).' },
        { title: '2', body: 'Balkan Antantı (9 Şubat 1934).' },
        { title: '3', body: 'Montrö (20 Temmuz 1936).' },
        { title: '4', body: 'Sadabat Paktı (8 Temmuz 1937).' },
      ],
      answer: 'Milletler Cemiyeti (1932) → Balkan Antantı (1934) → Montrö (1936) → Sadabat (1937).',
      takeaway: '“32–34–36–37” dizisini hatırla: çift yıllarda Cemiyet, Balkan ve Montrö; 1937’de Sadabat.',
    },
    {
      title: 'İleri görüşlülüğü açıkla',
      prompt: 'Atatürk’ün 1930’lardaki dış politika adımları neden “ileri görüşlülük” örneği olarak değerlendirilir?',
      steps: [
        { title: 'Tehlikeyi gör', body: 'İtalya ve Almanya’nın yayılmacı politikaları Avrupa’yı savaşa sürüklüyordu.' },
        { title: 'Adımları say', body: 'Balkan Antantı (1934), Montrö (1936), Sadabat Paktı (1937).' },
        { title: 'Sonucu bağla', body: 'Türkiye İkinci Dünya Savaşı başladığında (1939) güvenli sınırlara, Boğazlar üzerinde tam egemenliğe ve komşularıyla iyi ilişkilere sahipti.' },
      ],
      answer: 'Atatürk savaş tehlikesini erken fark ederek Türkiye’nin güvenliğini ittifaklar ve Montrö ile önceden güçlendirdi; bu adımlar savaş yıllarında Türkiye’nin işine yaradı.',
      takeaway: 'İleri görüşlülük sorularında “olaydan önce alınan önlem” ile “olay sırasında sağladığı yarar” arasında bağ kur.',
    },
  ],
  questionClue: {
    concept: 'Soruda hangi dış politika gelişmesinden ya da ilkesinden söz edildiğini nasıl anlarım?',
    statement: 'Soru bir antlaşma, bir tarih ya da bir karar verip ilkeyi veya gelişmeyi sorabilir.',
    clues: [
      '“Haliç Konferansı”, “petrol gelirinin yüzde onu” → Musul (1926)',
      '“Komisyonun yetkileri Türk Hükümetine”, “yeniden askerleştirme” → Montrö (1936)',
      '“Yunanistan, Yugoslavya, Romanya” → Balkan Antantı (1934)',
      '“İran, Irak, Afganistan” → Sadabat Paktı (1937)',
      '“Davet üzerine üye” → Milletler Cemiyeti (1932)',
      '“Türkçe, tarih, coğrafya Türk öğretmenlerce” → Yabancı okullar',
    ],
    reasoning: 'Önce olayın batıya mı doğuya mı, yoksa Lozan’dan kalan bir meseleye mi ait olduğunu belirle. Sonra tarihine bak.',
    boundary: 'Dikkat: Hatay meselesi de Atatürk dönemi dış politikasının parçasıdır; ama bir sonraki derste ayrıca işlenir.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'İTA.8.6.1 “açıklar”, İTA.8.6.2 “analiz eder” düzeyindedir. Sorular bir antlaşma maddesi, bir harita ya da bir kronoloji verip ilkeyi veya sonucu isteyebilir. Aşağıdaki kalıplar kazanımlarla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Bir dış politika olayını ilkeyle eşleştirme',
      'Lozan’dan kalan meselelerin çözümünü açıklama',
      'Balkan Antantı ile Sadabat Paktı’nı karşılaştırma',
      'Atatürk’ün ileri görüşlülüğüne kanıt gösterme',
    ],
  },
  checkpoints: [
    {
      prompt: '“Yurtta sulh, cihanda sulh” sözü iç politika ile dış politika arasında nasıl bir bağ kurar?',
      hint: 'İçeride barış olmadan dışarıda barış olur mu? Ya tersi?',
      answer: 'Söz, içerideki huzur ve kalkınma ile dışarıdaki barışın birbirine bağlı olduğunu anlatır. İnkılapların başarısı için dış barış, dış barışın sürmesi için de güçlü ve huzurlu bir iç düzen gerekir.',
    },
    {
      prompt: 'Türkiye neden Milletler Cemiyeti’ne başvurmak yerine davet edilmeyi bekledi?',
      answer: 'Musul kararından sonra Türkiye bu örgüte karşı temkinliydi. Davetle girmek hem ülkenin saygınlığını korudu hem de Türkiye’nin barışçı ve güvenilir bir devlet olarak görüldüğünü dünya kamuoyuna gösterdi.',
    },
    {
      prompt: 'Musul meselesinde Türkiye’nin kararı hangi açılardan eleştirilebilir, hangi açılardan savunulabilir?',
      answer: 'Musul’un Misakımillî sınırları içinde görülmesi açısından eleştirilebilir. İç sorunlar, İngiltere karşısındaki güç dengesi, barış ihtiyacı ve karşılığında petrol payı ile güvenli bir sınır elde edilmesi açısından ise gerçekçi bir karar olarak savunulabilir.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.6.1 Atatürk dönemi dış politikasının temel ilkelerini ve amaçlarını açıklamanı; İTA.8.6.2 ise bu dönemdeki gelişmeleri analiz etmeni ister. Açıklamalar Lozan’ın ilkelerle ilişkilendirilmesini, yabancı okullar, dış borçlar, Musul, mübadele ve Montrö meselelerini, Milletler Cemiyeti’ne girişte izlenen politikayı, Balkan Antantı’nı ve Sadabat Paktı’nı vurgular. Bu kazanımlara dayanan bir soru bir olay ya da madde verip ilkeyi veya sonucu isteyebilir.',
    measures: [
      'Yedi dış politika ilkesini örneklerle açıklama',
      'Lozan’dan kalan meselelerin çözümünü analiz etme',
      'Bölgesel ittifakları karşılaştırma',
      'Atatürk’ün ileri görüşlülüğüne kanıt gösterme',
    ],
  },
  simulation: {
    title: 'Mini LGS: Boğazlarda egemenlik',
    passage:
      'Lozan’da Boğazlar gayri askerî bölge olmuş ve geçişleri uluslararası bir komisyon denetlemişti. 1930’larda Avrupa’da savaş tehlikesi artınca Türkiye, Lozan’ı imzalayan devletlere başvurarak Boğazlar düzeninin değiştirilmesini istedi. 20 Temmuz 1936’da imzalanan Montrö Sözleşmesi ile komisyonun yetkileri Türk Hükümetine geçti ve Türkiye Boğazları yeniden askerleştirme hakkı kazandı.',
    question: 'Bu gelişme Atatürk dönemi dış politikasının hangi özelliğini en açık biçimde gösterir?',
    options: [
      { text: 'Tam bağımsızlığın barışçı yollarla ve uluslararası hukuka uygun biçimde sağlanması', explanation: 'Doğru. Egemenlik tamamlanmış (tam bağımsızlık), bu da savaşla değil sözleşmeyle (barış, akılcılık) gerçekleşmiştir.' },
      { text: 'Komşu ülkelerle bölgesel ittifak kurulması', explanation: 'Metin bir ittifaktan değil, Boğazlar düzeninin değişmesinden söz eder.' },
      { text: 'Uluslararası kuruluşlardan uzak durulması', explanation: 'Türkiye tersine, antlaşmayı imzalayan devletlere başvurarak uluslararası yolları kullanmıştır.' },
      { text: 'Sorunların askerî güçle çözülmesi', explanation: 'Metinde askerî güç kullanıldığına dair bilgi yoktur; değişiklik bir sözleşmeyle yapılmıştır.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “en açık biçimde” diyor. Metinde hem sonuç (egemenlik) hem yöntem (başvuru ve sözleşme) vardır; doğru seçenek ikisini birlikte verir.',
    critical_point: '“Yeniden askerleştirme” ifadesi dördüncü seçeneğe yönlendirebilir; ama askerleştirme hakkı savaşla değil, sözleşmeyle kazanılmıştır.',
    takeaway: 'Dış politika sorularında hem “ne kazanıldı?” hem “nasıl kazanıldı?” sorusunu sor.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Barış içinde tam bağımsızlık',
    range: '1923–1937',
    body:
      'Atatürk dönemi dış politikası tam bağımsızlık, gerçekçilik, akılcılık, mütekabiliyet, barış, millî menfaatleri esas alma ve kamuoyunu dikkate alma ilkelerine dayandı; Atatürk bunu 1931’de “Yurtta sulh, cihanda sulh” sözüyle özetledi. Lozan’dan kalan meseleler barışçı yollarla çözüldü: Yabancı okullar Türk kanunlarına bağlandı; Musul, Haliç Konferansı’nın (1924) sonuçsuz kalması ve Milletler Cemiyeti kararından (1925) sonra 5 Haziran 1926 Ankara Antlaşması ile Irak’ta kaldı, Türkiye 25 yıl petrol gelirinin yüzde onunu aldı; borçlar 1928 Paris anlaşmasıyla düzenlendi ve 1954’te bitti; mübadele sorunları 1930’da çözülerek Türk–Yunan dostluğu kuruldu. Türkiye 18 Temmuz 1932’de davetle Milletler Cemiyeti’ne girdi; 9 Şubat 1934’te Balkan Antantı’nı, 8 Temmuz 1937’de Sadabat Paktı’nı imzaladı; 20 Temmuz 1936 Montrö Sözleşmesi ile Boğazlar üzerinde tam egemenlik sağladı.',
    turning_points: [
      '5 Haziran 1926 · Ankara Antlaşması (Musul)',
      '18 Temmuz 1932 · Milletler Cemiyeti',
      '9 Şubat 1934 · Balkan Antantı',
      '20 Temmuz 1936 · Montrö',
      '8 Temmuz 1937 · Sadabat Paktı',
    ],
  },
  summary: [
    '**İlkeler:** Tam bağımsızlık, gerçekçilik, akılcılık, mütekabiliyet, barış (“Yurtta sulh, cihanda sulh”), millî menfaat, kamuoyunu dikkate alma.',
    '**Lozan’dan kalanlar:** Yabancı okullar (Türk kanunlarına bağlandı), dış borçlar (1928 Paris; son taksit 1954), Musul (1926 Ankara Antlaşması; petrolün %10’u, 25 yıl), mübadele (1930 çözüm ve Türk–Yunan dostluğu), Boğazlar (1936 Montrö).',
    '**Milletler Cemiyeti:** 18 Temmuz 1932’de davet üzerine üyelik.',
    '**Balkan Antantı (9 Şubat 1934, Atina):** Türkiye, Yunanistan, Yugoslavya, Romanya.',
    '**Sadabat Paktı (8 Temmuz 1937, Tahran):** Türkiye, İran, Irak, Afganistan.',
  ],
  quizzes: [
    {
      question: 'Musul meselesi hangi antlaşmayla sonuçlandırılmıştır?',
      options: ['1926 Ankara Antlaşması', 'Lozan Antlaşması', 'Montrö Sözleşmesi', 'Sadabat Paktı'],
      answer_index: 0,
      explanation: 'Musul, Lozan’da çözülemedi; 5 Haziran 1926’da Türkiye, İngiltere ve Irak arasında imzalanan Ankara Antlaşması ile Irak’ta kaldı.',
    },
    {
      question: 'Montrö Boğazlar Sözleşmesi ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['Boğazlar Komisyonu’nun yetkileri Türkiye’ye geçti.', 'Boğazlar gayri askerî bölge hâline getirildi.', 'Musul Türkiye’ye bırakıldı.', 'Türkiye Milletler Cemiyeti’ne üye oldu.'],
      answer_index: 0,
      explanation: 'Montrö’nün 24. maddesine göre komisyonun yetkileri Türk Hükümetine geçti ve Türkiye Boğazları yeniden askerleştirebildi.',
    },
    {
      question: 'Aşağıdaki ülkelerden hangisi Balkan Antantı’nın üyelerinden biri değildir?',
      options: ['Bulgaristan', 'Yunanistan', 'Yugoslavya', 'Romanya'],
      answer_index: 0,
      explanation: 'Balkan Antantı’nın üyeleri Türkiye, Yunanistan, Yugoslavya ve Romanya’dır.',
    },
    {
      question: 'Türkiye’nin Milletler Cemiyeti’ne davet üzerine üye olması en çok hangi ilkeyle ilişkilidir?',
      options: ['Türk ve dünya kamuoyunu dikkate alma', 'Mütekabiliyet', 'Devletçilik', 'Halkçılık'],
      answer_index: 0,
      explanation: 'Davetle girmek, Türkiye’nin saygınlığını ve barışçı bir devlet olduğunu dünya kamuoyuna gösterdi.',
    },
    {
      question: 'Sadabat Paktı’nın üyeleri aşağıdakilerden hangisinde doğru verilmiştir?',
      options: ['Türkiye, İran, Irak, Afganistan', 'Türkiye, Yunanistan, Romanya, Yugoslavya', 'Türkiye, İngiltere, Irak', 'Türkiye, Sovyet Rusya, İran'],
      answer_index: 0,
      explanation: 'Sadabat Paktı 8 Temmuz 1937’de Tahran’da Türkiye, İran, Irak ve Afganistan arasında imzalandı.',
    },
  ],
  next: ['Hatay’ın Anavatana Katılması', 'Atatürk’ün Ölümü ve Eserleri'],
})

export default lesson
