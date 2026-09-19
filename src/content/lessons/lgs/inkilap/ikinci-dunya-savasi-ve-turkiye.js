import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.7 Atatürk’ün Ölümü ve Sonrası · 2. ders
 * Kazanımlar : İTA.8.7.3 · İTA.8.7.4
 * Dayanak    : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMALARI
 *   8.7.3 İTA.8.6.1 kazanımı ile ilişkilendirilir.
 *   8.7.4 İkinci Dünya Savaşı’nın Türkiye’ye etkileri; siyasi, sosyal ve ekonomik
 *         yönden ele alınır.
 *
 * KAPSAM KARARI
 * Atatürk’ün savaş öncesi tespitleri için yalnız tarihi kesin belgeler kullanıldı:
 * 1936 ve 1938 Meclis açış konuşmaları (TBMM’nin günümüz Türkçesi metni; 1938
 * metni ayrıca Zabıt Ceridesi D. V, C. 27’deki aslıyla karşılaştırıldı). Atatürk’ün
 * 1932’de General MacArthur’a savaşı yıllarıyla önceden söylediğini anlatan yaygın
 * metin ilk kez 1951’de yayımlandığı ve araştırmacılarca (C. Akalın; U. Er)
 * sorgulandığı için belge olarak kullanılmadı; kaynak eleştirisi örneği olarak anıldı.
 * İnönü’nün 1 Kasım 1939 konuşması ve Millî Korunma Kanunu m. 1 özgün yazımıyla
 * verildi; PDF tarama hataları düzeltildi. Varlık Vergisi, eşitsiz uygulamasıyla
 * birlikte dengeli biçimde anlatıldı. Harita şematiktir.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 24.
 */

const SLUG = 'lgs-tarih-ikinci-dunya-savasi-ve-turkiye'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Atatürk’ün Ölümü ve Sonrası',
  order: 2,
  title: 'İkinci Dünya Savaşı ve Türkiye: Denge Siyaseti',
  subtitle:
    'Dünya yanarken savaşın dışında kalmak. Atatürk’ün uyarıları, İnönü’nün denge siyaseti ve savaşa girmeyen bir ülkenin yine de ödediği bedel.',
  minutes: 50,
  kazanimlar: ['İTA.8.7.3', 'İTA.8.7.4'],
  kapsamNotu:
    'Atatürk’ün savaş öncesi tespitleri için onun Meclis konuşmaları esas alınmıştır. Atatürk’ün 1932’de General MacArthur’a savaşı önceden söylediğini anlatan yaygın metin tartışmalı olduğu için belge olarak kullanılmamıştır. İnönü’nün 1939 konuşması ve Millî Korunma Kanunu özgün yazımıyla verilmiştir. Harita şematiktir.',
  prerequisites: [
    {
      topic: 'Atatürk dönemi dış politikası ve ilkeleri (İTA.8.6.1)',
      why: 'Program bu dersi, Atatürk dönemi dış politikasının ilkeleriyle ilişkilendirmeni ister.',
    },
    {
      topic: 'Montrö Boğazlar Sözleşmesi (1936)',
      why: 'Savaş yıllarında Boğazlar’ın nasıl korunduğunu anlamak için Montrö’yü bilmek gerekir.',
    },
  ],
  outcomes: [
    'Atatürk’ün İkinci Dünya Savaşı öncesindeki tespitlerini ve girişimlerini açıklayabileceksin.',
    'Bu tespit ve girişimleri Türkiye’nin savaşta izlediği denge siyasetiyle ilişkilendirebileceksin.',
    'Türkiye’nin savaş yıllarındaki başlıca dış politika adımlarını sıralayabileceksin.',
    'Savaşın Türkiye’ye siyasi, sosyal ve ekonomik etkilerini analiz edebileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Bir yıl arayla iki uyarı',
    lead:
      'Atatürk 1 Kasım 1938’deki son Meclis konuşmasında barışın “çetin bir sınav” geçirdiğini söyledi. On ay sonra, 1 Eylül 1939’da Almanya Polonya’ya saldırdı ve İkinci Dünya Savaşı başladı.',
    body:
      '1930’ların ikinci yarısında Avrupa hızla silahlanıyordu. Almanya ve İtalya sınırlarını genişletmek istiyor, Japonya Asya’da ilerliyordu. Atatürk 1936’da Meclis’te önümüzdeki yılın “görüşmeler ve silahlanma yarışları için, büyük bir hazırlık yılı” olacağını söylemiş; 1938’de ise barışın korunması için her milletin hazırlıklı olması gerektiğini vurgulamıştı. Bu sözler, bir yıl sonra başlayacak felaketi gören bir liderin uyarılarıydı.\n\n' +
      'Savaş başladığında Türkiye’nin cumhurbaşkanı İsmet İnönü’ydü. Türkiye altı yıl boyunca iki büyük cephe arasında kaldı: bir yanda İngiltere ve Fransa (sonra ABD ve Sovyetler Birliği), öbür yanda Almanya ve İtalya. Her iki taraf da Türkiye’yi kendi yanına çekmek istedi. Türkiye ise savaşın sonuna kadar fiilen savaşa girmedi. Bu derste bunun nasıl başarıldığını, Atatürk döneminin mirasıyla nasıl ilişkili olduğunu ve savaşa girmeyen bir ülkenin bile savaştan nasıl etkilendiğini göreceğiz.',
  },
  concepts: [
    { term: 'Denge siyaseti', body: 'Savaşan taraflar arasında dengeyi gözeterek, ülkenin çıkarlarını ve güvenliğini koruyup savaş dışında kalmayı amaçlayan dış politika.' },
    { term: 'Mihver Devletleri', body: 'İkinci Dünya Savaşı’nda Almanya, İtalya ve Japonya’nın oluşturduğu blok.' },
    { term: 'Müttefikler', body: 'Mihver Devletlerine karşı savaşan blok: İngiltere, Fransa, Sovyetler Birliği, ABD ve diğerleri.' },
    { term: 'Tarafsızlık (savaş dışı kalma)', body: 'Bir devletin savaşan taraflardan hiçbirinin yanında savaşa katılmaması.' },
    { term: 'Karaborsa', body: 'Kıt bulunan malların gizlice, resmî fiyatın çok üzerinde satılması.' },
    { term: 'Karne', body: 'Kıt olan temel malların (ekmek gibi) herkese belirli miktarda dağıtılması için verilen belge.' },
  ],
  why: {
    question: 'Savaşa girmeyen bir ülke savaştan neden etkilenir?',
    body:
      'Çünkü bir ülkenin savaşa girme ihtimali bile her şeyi değiştirir. Türkiye her an saldırıya uğrayabileceğini düşündüğü için yüz binlerce genci silah altına aldı, bütçesinin büyük kısmını orduya ayırdı. Tarlada çalışacak gençler askerde olunca üretim düştü; dış ticaret yolları kapanınca mal bulmak zorlaştı; fiyatlar yükseldi. Devlet bu sıkıntıları yönetmek için olağanüstü kanunlar çıkardı.\n\n' +
      'Savaş bittiğinde ise dünya değişmişti. Sovyetler Birliği Türkiye’den toprak ve Boğazlar’da üs istedi; Türkiye bu tehdit karşısında ABD ve Batı ile yakınlaştı. Demokrasinin kazandığı bir savaşın ardından Türkiye’de de çok partili hayata geçiş hızlandı. Yani savaşın etkileri siyasi, sosyal ve ekonomik alanlarda uzun yıllar sürdü.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Savaşın kıyısında altı yıl (1936–1945)',
    lead: 'Kronoloji Atatürk döneminin son girişimlerinden savaşın sonuna kadar uzanır. Savaşın gidişi değiştikçe Türkiye’nin adımlarının da değiştiğine dikkat et.',
    intro: 'İlk üç madde Atatürk dönemine, diğerleri İnönü dönemine aittir.',
    items: [
      { title: '20 Temmuz 1936 · Montrö', body: 'Boğazlar Türk egemenliğine geçti; savaş zamanında savaşan devletlerin savaş gemilerinin geçişi yasaklandı.' },
      { title: '8 Temmuz 1937 · Sadabat Paktı', body: 'Doğu sınırında İran, Irak ve Afganistan ile güvenlik iş birliği kuruldu.' },
      { title: '1 Kasım 1938 · Atatürk’ün son uyarısı', body: 'Barışın çetin bir sınav geçirdiğini, her ihtimale karşı hazırlıklı olmak gerektiğini söyledi.' },
      { title: '12 Mayıs ve 23 Haziran 1939 · Ortak bildiriler', body: 'Türkiye İngiltere (12 Mayıs) ve Fransa (23 Haziran) ile saldırı hâlinde yardımlaşma bildirileri yayımladı.' },
      { title: '1 Eylül 1939 · Savaş başladı', body: 'Almanya Polonya’ya saldırdı; İngiltere ve Fransa Almanya’ya savaş ilan etti.' },
      { title: '19 Ekim 1939 · Üçlü İttifak', body: 'Ankara’da Türk–İngiliz–Fransız Karşılıklı Yardım Antlaşması imzalandı. 2 numaralı protokolle Türkiye’nin Sovyetler Birliği ile savaşa sürüklenmemesi güvenceye alındı.' },
      { title: 'Haziran 1940 · Fransa yenildi', body: 'İtalya savaşa girdi, Fransa kısa sürede yenildi. Türkiye 2 numaralı protokole dayanarak savaşa girmedi.' },
      { title: '18 Haziran 1941 · Türk–Alman Saldırmazlık Antlaşması', body: 'Alman orduları Balkanlar’a inip Türkiye sınırına dayanınca Almanya ile saldırmazlık antlaşması imzalandı.' },
      { title: 'Ocak ve Aralık 1943 · Adana ve Kahire', body: 'Churchill Adana’da (30–31 Ocak), Roosevelt ve Churchill Kahire’de (Aralık) İnönü ile görüşüp Türkiye’yi savaşa sokmaya çalıştı.' },
      { title: '1944 · Almanya’dan uzaklaşma', body: 'Nisan’da Almanya’ya krom satışı durduruldu; 2 Ağustos’ta Almanya ile ilişkiler kesildi.' },
      { title: '23 Şubat 1945 · Savaş ilanı', body: 'Türkiye, Birleşmiş Milletler’in kuruluş konferansına katılabilmek için Almanya ve Japonya’ya savaş ilan etti; fiilen savaşa girmedi.' },
      { title: '19 Mart 1945 · Sovyet notası', body: 'Sovyetler Birliği 1925 Türk–Sovyet Dostluk ve Tarafsızlık Antlaşması’nı feshedeceğini bildirdi; ardından Boğazlar’da üs ve toprak istedi.' },
    ],
    takeaway:
      'Dikkat et: Türkiye 1939’da İngiltere ve Fransa ile ittifak yaptı, 1941’de Almanya ile saldırmazlık antlaşması imzaladı, 1944’te Almanya ile ilişkilerini kesti. Bu değişiklikler kararsızlık değil, savaşın gidişine göre ayarlanan bir denge siyasetiydi.',
    body:
      'Denge siyasetini anlamak için savaşın gidişine bakmak gerekir. **1939–1940**’ta Türkiye Batılı müttefiklerle anlaştı ama Sovyetler Birliği ile savaşmayacağını önceden güvenceye aldı. **1941**’de Almanya Balkanlar’ı ele geçirip Türkiye’nin sınırına gelince Türkiye, Almanya ile de bir saldırmazlık antlaşması yaparak kendini korudu. **1943**’ten sonra savaş Müttefikler lehine dönünce Türkiye onlara yaklaştı ama ordusunun hazır olmadığını ve yardım gerektiğini söyleyerek savaşa girmedi. **1944–1945**’te Almanya ile ilişkiler kesildi ve savaşın sonunda sembolik bir savaş ilanıyla Türkiye kazananların safında yer aldı.\n\n' +
      'Tarihçiler bu siyaseti farklı açılardan değerlendirir. Bazıları Türkiye’nin baştan beri savaş dışında kalmayı amaçladığını söyler; bazıları ise 1939 ittifakının Türkiye’nin gerekirse savaşa girmeyi de göze aldığını gösterdiğini vurgular. İki görüşün ortak noktası şudur: Türkiye her adımında ülkenin güvenliğini ve bağımsızlığını esas aldı.',
  },
  map: {
    title: 'Şematik atlas: Savaşın kıyısında Türkiye',
    intro: 'Katmanları aç: Türkiye’ye yaklaşan tehditler ve Türkiye’nin diplomasi görüşmeleri.',
    map_label: 'Şematik gösterim · sınır ve uzaklık göstermez',
    layers: [
      { id: 'tehdit', label: 'Yaklaşan tehditler', description: 'Balkanlar’da Alman orduları (1941), Boğazlar’a yönelik Sovyet istekleri (1945).', active: true },
      { id: 'diplomasi', label: 'Diplomasi', description: 'Adana ve Kahire görüşmeleri (1943).', active: true },
    ],
    regions: [
      { label: 'KARADENİZ', x: 58, y: 6, tone: 'water' },
      { label: 'AKDENİZ', x: 26, y: 64, tone: 'water' },
    ],
    locations: [
      { id: 'ankara', label: 'Ankara · 19 Ekim 1939', x: 64, y: 26, tone: 'brand', detail: 'Türk–İngiliz–Fransız Karşılıklı Yardım Antlaşması Ankara’da imzalandı. Savaş boyunca denge siyaseti Ankara’dan yürütüldü.' },
      { id: 'sofya', label: 'Sofya · 1941', x: 14, y: 8, layer: 'tehdit', tone: 'danger', detail: '1941 başında Alman birlikleri Bulgaristan’a girdi; Alman orduları Türkiye’nin Trakya sınırına dayandı.' },
      { id: 'atina', label: 'Atina · 1941', x: 16, y: 38, layer: 'tehdit', tone: 'danger', detail: 'Almanya 1941 baharında Yunanistan’ı ele geçirdi. Türkiye’nin batısındaki komşuların hepsi savaşın içine düşmüştü.' },
      { id: 'bogazlar', label: 'Boğazlar · 1945', x: 42, y: 18, layer: 'tehdit', tone: 'danger', detail: 'Savaş boyunca Montrö’ye göre savaşan devletlerin savaş gemilerinin geçişi yasaktı. 1945’te Sovyetler Birliği Boğazlar’da üs istedi; Türkiye reddetti.' },
      { id: 'adana', label: 'Adana · Ocak 1943', x: 76, y: 44, layer: 'diplomasi', tone: 'accent', detail: '30–31 Ocak 1943’te İngiltere Başbakanı Churchill Adana’da İnönü ile görüştü; Türkiye’yi savaşa sokmak istedi ama ikna edemedi.' },
      { id: 'kahire', label: 'Kahire · Aralık 1943', x: 54, y: 86, layer: 'diplomasi', tone: 'accent', detail: 'Aralık 1943’te İnönü, ABD Başkanı Roosevelt ve Churchill ile Kahire’de görüştü. Türkiye ilke olarak Müttefiklere yaklaştı ama savaşa girmedi.' },
    ],
    routes: [
      { from: 'ankara', to: 'adana', label: 'Ocak 1943', layer: 'diplomasi', tone: 'accent' },
      { from: 'ankara', to: 'kahire', label: 'Aralık 1943', layer: 'diplomasi', tone: 'accent' },
    ],
    insight:
      'Haritaya bak: 1941’de Türkiye’nin batısındaki bütün komşular savaşın içindeydi. Denge siyaseti, böyle bir coğrafyada ülkeyi savaşın dışında tutmanın yoluydu.',
    source_note:
      'Yerler ve tarihler; G. Sarıçoban (2020, ATASOBED), M. Özçelik (Gazi Ü.), ATAM Dergisi (2025, sayı 111) ve Montrö Sözleşmesi metni esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir; sınır ve cephe hattı çizilmemiştir.',
  },
  dataTable: {
    title: 'Savaşın Türkiye’ye etkileri',
    columns: ['Alan', 'Savaş yıllarında (1939–1945)', 'Savaştan sonra'],
    rows: [
      ['Siyasi', 'Denge siyaseti; ordunun sürekli hazır tutulması; basın ve yönetim üzerinde sıkı denetim', 'Birleşmiş Milletler’in kurucu üyeliği; Sovyet istekleri karşısında ABD ve Batı ile yakınlaşma (Truman Doktrini 1947, NATO 1952); çok partili hayata geçiş'],
      ['Sosyal', 'Gençlerin uzun süre askerde kalması; ekmek karnesi (Ocak 1942); karaborsa ve yoksulluk; halkın hayat şartlarının ağırlaşması', 'Savaş yıllarının sıkıntılarından doğan hoşnutsuzluk; siyasi değişim isteğinin artması'],
      ['Ekonomik', 'Askerî harcamaların artması; tarımsal üretimin düşmesi; dış ticaretin bozulması; Millî Korunma Kanunu (1940), Varlık Vergisi (1942), Toprak Mahsulleri Vergisi (1943)', 'Marshall Planı (1948) yardımları; Batı ile ekonomik iş birliği'],
    ],
    caption:
      'Program, savaşın Türkiye’ye etkilerinin siyasi, sosyal ve ekonomik yönden ele alınmasını ister. Etkiler birbirine bağlıdır: ekonomik sıkıntılar sosyal hoşnutsuzluğa, o da siyasi değişime yol açmıştır.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Atatürk’ün mirası ve denge siyaseti',
    lead: 'Zincir, Atatürk döneminin tespit ve girişimlerinin savaş yıllarındaki denge siyasetine nasıl zemin hazırladığını gösterir.',
    intro: 'Zincirin başında Atatürk döneminin mirası, ortasında savaş yılları, sonunda savaşın etkileri vardır.',
    steps: [
      { tur: 'sebep', title: 'Atatürk’ün tespitleri', body: 'Atatürk 1936’da silahlanma yarışına, 1938’de barışın sarsıldığına dikkat çekti ve her ihtimale karşı hazırlıklı olmayı istedi.' },
      { tur: 'sebep', title: 'Atatürk döneminin girişimleri', body: 'Balkan Antantı (1934), Montrö (1936), Sadabat Paktı (1937) ve silahlanma programı ile sınırlar ve Boğazlar güvenceye alındı.' },
      { tur: 'sebep', title: 'Gerçekçi dış politika geleneği', body: 'Barışçı, gerçekçi ve bağımsızlığa dayanan dış politika ilkeleri savaş yıllarında da esas alındı.' },
      { tur: 'gelisme', title: 'İttifak ve güvenceler (1939–1941)', body: 'Üçlü İttifak (1939) ve Türk–Alman Saldırmazlık Antlaşması (1941) ile iki tarafla da ilişki korundu.' },
      { tur: 'gelisme', title: 'Baskılara direnme (1943–1945)', body: 'Adana ve Kahire görüşmelerinde savaşa girme baskısına direnildi; savaşın sonunda Müttefiklerin safına geçildi.' },
      { tur: 'sonuc', title: 'Türkiye savaşa girmedi', body: 'Ülke işgal ve yıkımdan korundu; ama savaşın ağır ekonomik ve sosyal yükünü taşıdı.' },
      { tur: 'sonraki-etki', title: 'Yeni dönem', body: 'Sovyet istekleri Türkiye’yi Batı’ya yaklaştırdı; savaş yıllarının sıkıntıları çok partili hayata geçişi hızlandırdı.' },
    ],
    inference:
      'Temel çıkarım: Türkiye’nin savaş dışında kalabilmesi yalnızca savaş yıllarındaki kararlara değil, Atatürk döneminde kurulan güvenlik ağına ve barışçı–gerçekçi dış politika geleneğine de dayanıyordu.',
    body:
      'Burada tek nedenli bir açıklamadan kaçınmalıyız. Türkiye’nin savaş dışında kalmasında Atatürk döneminin mirası kadar başka etkenler de rol oynadı: İnönü hükûmetinin temkinli diplomasisi, ordunun savaşa hazır olmadığının bilinmesi, Türkiye’nin coğrafi konumunun iki tarafa da önemli olması ve savaşın gidişinin hiçbir tarafın Türkiye’ye saldırmasını zorunlu kılmaması.\n\n' +
      'Montrö örneği bu bağlantıyı en açık biçimde gösterir. Atatürk 1936’da Meclis’te “Bundan böyle savaşan herhangi bir devletin savaş gemilerinin Boğazlardan geçmesi yasaktır.” demişti. Savaş yıllarında bu hüküm, Boğazlar’ın savaşan donanmalara kapalı tutulmasını sağladı ve Türkiye’nin tarafsızlığını korumasına yardım etti.',
  },
  comparison: {
    title: 'Atatürk dönemi ve savaş yılları: süreklilik',
    columns: ['Atatürk dönemi (1936–1938)', 'Savaş yılları (1939–1945)'],
    rows: [
      { label: 'Barış anlayışı', values: ['“Yurtta sulh, cihanda sulh”; barış için hazırlıklı olmak', 'Ülkeyi savaşın dışında tutmak; savaşın yayılmasını önlemeye çalışmak'] },
      { label: 'Güvenlik yolu', values: ['Bölgesel paktlar: Balkan Antantı, Sadabat', 'İttifak ve saldırmazlık antlaşmaları: Üçlü İttifak, Türk–Alman Antlaşması'] },
      { label: 'Boğazlar', values: ['Montrö ile Türk egemenliği (1936)', 'Montrö’ye göre savaşan gemilere kapalı; Sovyet üs isteği reddedildi'] },
      { label: 'Hazırlık', values: ['Silahlanma programı, donanma ve hava kuvvetleri', 'Seferberlik, ordunun sürekli hazır tutulması'] },
      { label: 'Temel ilke', values: ['Gerçekçilik, barış, tam bağımsızlık', 'Gerçekçilik, barış, tam bağımsızlık'] },
    ],
    insight:
      'Yöntemler değişti ama ilkeler aynı kaldı. Atatürk 1938’de her milletin barışı “coğrafi ve politik” şartlarına göre koruması gerektiğini söylemişti; İnönü 1939’da neredeyse aynı düşünceyi tekrarladı.',
  },
  traps: [
    {
      title: 'Türkiye’nin savaştan hiç etkilenmediğini sanmak',
      wrong: 'Türkiye İkinci Dünya Savaşı’na girmediği için savaştan etkilenmedi.',
      right: 'Türkiye fiilen savaşa girmedi ama savaşın ağır etkilerini yaşadı: seferberlik, üretim düşüşü, ekmek karnesi, karaborsa, olağanüstü vergiler ve savaş sonrası Sovyet tehdidi.',
      body: 'İTA.8.7.4 tam da bu etkileri siyasi, sosyal ve ekonomik yönden analiz etmeni ister.',
    },
    {
      title: '1945 savaş ilanını fiilî savaş sanmak',
      wrong: 'Türkiye 1945’te Almanya’ya savaş ilan edip Avrupa’da savaştı.',
      right: 'Türkiye 23 Şubat 1945’te Almanya ve Japonya’ya savaş ilan etti ama hiçbir cephede savaşmadı. Amaç, Birleşmiş Milletler’in kuruluş konferansına katılabilmekti.',
      body: 'Savaş ilanı siyasi, savaşmamak ise fiilî bir durumdur.',
    },
    {
      title: 'Denge siyasetini kararsızlık sanmak',
      wrong: 'Türkiye bir İngiltere’ye bir Almanya’ya yanaşarak kararsız bir politika izledi.',
      right: 'Türkiye her adımında aynı amacı güttü: ülkeyi savaşın dışında tutmak ve bağımsızlığını korumak. Adımlar savaşın gidişine göre değişti ama amaç değişmedi.',
      body: 'Denge siyaseti, gerçekçilik ilkesinin savaş koşullarındaki uygulamasıdır.',
    },
    {
      title: 'Yaygın bir metni kontrol etmeden kanıt saymak',
      wrong: 'Atatürk’ün 1932’de General MacArthur’a savaşın başlayacağı yılları söylediğini anlatan metin, onun tespitlerinin en güçlü kanıtıdır.',
      right: 'Bu metin ilk kez 1951’de yayımlanmıştır ve araştırmacılar güvenilirliğini sorgulamıştır. Atatürk’ün tespitleri için tarihi kesin belgeler, örneğin 1936 ve 1938 Meclis konuşmaları kullanılmalıdır.',
      body: 'Bir kaynağın ne zaman, kim tarafından ve nerede yayımlandığını sormak tarihçinin ilk işidir.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Denge siyasetinin kişileri',
    lead: 'Savaş yıllarında Türkiye’nin dış politikasını yönetenler ve Türkiye’yi savaşa sokmaya çalışanlar.',
    intro: 'Kartlarda her kişinin savaş yıllarındaki kararlarını görürsün.',
    figures: [
      {
        name: 'İsmet İnönü',
        period: '1938–1950 · Cumhurbaşkanı',
        position: 'Cumhurbaşkanı',
        contribution: 'Denge siyasetinin mimarıdır. 1 Kasım 1939’da ülkeyi savaş bölgesinin dışında tutmayı istediklerini açıkladı; Adana ve Kahire’de savaşa girme baskılarına direndi.',
        connections: ['Üçlü İttifak', 'Adana Görüşmesi', 'Kahire Konferansı'],
        significance: 'Türkiye’nin savaş dışında kalmasında en belirleyici kişidir.',
      },
      {
        name: 'Dr. Refik Saydam',
        period: '1939–1942 · Başbakan',
        position: 'Başbakan',
        contribution: '19 Ekim 1939’da Üçlü İttifak’ı Türkiye adına imzaladı; savaşın ilk yıllarında hükûmeti yönetti ve Millî Korunma Kanunu onun hükûmeti döneminde çıkarıldı.',
        connections: ['Üçlü İttifak', 'Millî Korunma Kanunu'],
        significance: 'Savaşın en tehlikeli ilk yıllarında hükûmetin başındaydı.',
      },
      {
        name: 'Şükrü Saraçoğlu',
        period: '1938–1946',
        position: 'Dışişleri Bakanı (1938–1942), Başbakan (1942–1946)',
        contribution: '1939’da Moskova’da Sovyetlerle görüştü; 1942’den sonra başbakan olarak savaş ekonomisini yönetti. Varlık Vergisi onun hükûmeti döneminde çıkarıldı.',
        connections: ['Moskova görüşmeleri', 'Varlık Vergisi'],
        significance: 'Hem diplomaside hem savaş ekonomisinde önemli kararları verdi.',
      },
      {
        name: 'Winston Churchill',
        period: '1940–1945 · İngiltere Başbakanı',
        position: 'İngiltere Başbakanı',
        contribution: 'Ocak 1943’te Adana’ya gelerek İnönü’den Türkiye’nin savaşa girmesini ve Türk üslerinin kullanılmasını istedi; Türk heyetini ikna edemedi.',
        connections: ['Adana Görüşmesi', 'Kahire Konferansı'],
        significance: 'Türkiye’yi savaşa sokmak için en çok çaba harcayan Müttefik liderlerindendir.',
      },
    ],
    takeaway:
      'Denge siyaseti tek bir kararın değil, altı yıl boyunca sabırla verilen birçok kararın ürünüdür. Türk devlet adamları büyük güçlerin baskısı karşısında ülkenin çıkarını korumaya çalıştı.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-denge`,
      title: 'Denge siyaseti adım adım',
      lead: 'İTA.8.7.3, Atatürk’ün savaş öncesi tespit ve girişimlerini Türkiye’nin savaşta izlediği denge siyasetiyle ilişkilendirmeni ister. Önce savaşın gidişini, sonra Türkiye’nin adımlarını izle.',
      blocks: [
        {
          id: `${SLUG}-denge-tablo`,
          type: 'table',
          interactive: true,
          title: 'Savaşın gidişi ve Türkiye’nin adımları',
          columns: ['Yıl', 'Savaşın durumu', 'Türkiye’nin adımı', 'Amaç'],
          rows: [
            ['1939', 'Almanya–Sovyet anlaşması; savaş başladı', 'İngiltere ve Fransa ile Üçlü İttifak; 2 numaralı protokol', 'Güvenlik sağlamak ama Sovyetlerle savaşa sürüklenmemek'],
            ['1940', 'Fransa yenildi; İtalya savaşa girdi', '2 numaralı protokole dayanarak savaş dışı kalma', 'Hazırlıksız bir savaştan kaçınmak'],
            ['1941', 'Almanlar Balkanlar’da, Türk sınırında', 'Türk–Alman Saldırmazlık Antlaşması (18 Haziran)', 'Alman saldırısını önlemek'],
            ['1943', 'Savaş Müttefikler lehine dönüyor', 'Adana ve Kahire görüşmeleri; yardım isteyip savaşa girmeme', 'Ülkeyi korurken Müttefiklerle ilişkiyi sürdürmek'],
            ['1944', 'Almanya geriliyor', 'Krom satışını durdurma (Nisan); Almanya ile ilişkileri kesme (2 Ağustos)', 'Savaş sonrası düzende kazananların yanında olmak'],
            ['1945', 'Savaşın sonu', 'Almanya ve Japonya’ya savaş ilanı (23 Şubat)', 'Birleşmiş Milletler’in kurucu üyesi olmak'],
          ],
          caption: 'Tablodaki her satırda Türkiye’nin adımı değişiyor ama amaç sütunu hep aynı yöne işaret ediyor: ülkenin güvenliği ve bağımsızlığı.',
        },
        {
          id: `${SLUG}-denge-kaynak`,
          type: 'prose',
          body:
            '**Kaynak eleştirisi: MacArthur metni.** Bazı kitaplarda ve internet sitelerinde, Atatürk’ün 1932’de ABD Genelkurmay Başkanı General MacArthur ile görüşürken Avrupa’da çıkacak savaşı ve yıllarını önceden söylediği uzun bir metin aktarılır. Bu metin ilk kez 1951’de, Atatürk’ün ölümünden 13 yıl sonra bir gazetede yayımlanmıştır. Araştırmacılar, 1932 tarihli bir arşiv belgesinde görüşmenin farklı biçimde aktarıldığını belirterek metnin güvenilirliğini sorgulamıştır.\n\n' +
            'Bu yüzden bu derste Atatürk’ün savaş öncesi tespitleri için tarihi ve yeri kesin olan belgeler kullanılmıştır: 1936 ve 1938 Meclis açış konuşmaları. Bu belgeler de Atatürk’ün Avrupa’daki tehlikeyi gördüğünü ve Türkiye’yi hazırlamaya çalıştığını açıkça gösterir. Bir tespiti kanıtlamak için etkileyici ama şüpheli bir metne ihtiyaç yoktur; kesin belgeler yeterlidir.',
        },
        {
          id: `${SLUG}-denge-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: 39 – 41 – 43 – 44 – 45',
          body: '1939 İngiltere–Fransa ile ittifak · 1941 Almanya ile saldırmazlık · 1943 Adana ve Kahire · 1944 Almanya ile ilişkiler kesildi · 1945 savaş ilanı ve BM.',
        },
      ],
    },
    {
      id: `${SLUG}-etkiler`,
      title: 'Savaşa girmeden savaşı yaşamak: iç cephe',
      lead: 'İTA.8.7.4, savaşın Türkiye’ye etkilerini analiz etmeni ister. Etkileri üç başlıkta topla ve aralarındaki bağı kur.',
      blocks: [
        {
          id: `${SLUG}-etkiler-anlatim`,
          type: 'prose',
          body:
            '**Ekonomik etkiler.** Türkiye savaş boyunca büyük bir orduyu silah altında tuttu. Tarlada çalışması gereken gençler askerde olunca tarımsal üretim düştü; askerî harcamalar bütçeyi zorladı; dış ticaret yolları kapanınca ithal mallar bulunamaz oldu. Devlet 18 Ocak 1940’ta **Millî Korunma Kanunu**’nu çıkardı. Bu kanun hükûmete fiyatları belirleme, üretimi yönlendirme ve gerekirse vatandaşa iş yükümlülüğü getirme yetkisi verdi. Buna rağmen karaborsa önlenemedi.\n\n' +
            '**Varlık Vergisi.** 11 Kasım 1942’de çıkarılan Varlık Vergisi, savaş yıllarında servet ve olağanüstü kazanç sağlayanlardan bir defaya mahsus vergi almayı amaçlıyordu. Ancak vergi miktarlarını kanun değil yerel komisyonlar belirlediği için uygulama keyfî ve eşitsiz oldu: gayrimüslim vatandaşlar aynı servet için çok daha yüksek vergilerle karşılaştı. Vergisini ödeyemeyenlerin malları satıldı; bir kısmı Aşkale gibi yerlere çalışma yükümlülüğüne gönderildi. Vergi 15 Mart 1944’te kalan borçlar silinerek sona erdirildi. Tarihçiler Varlık Vergisi’ni, vatandaşlar arasında eşitlik ilkesine aykırı uygulamaları nedeniyle eleştirir.\n\n' +
            '**Sosyal etkiler.** Ocak 1942’de önce İstanbul ve Ankara’da, sonra başka şehirlerde **ekmek karnesi** uygulamasına geçildi; herkese günlük belirli miktarda ekmek verildi. Temel mallarda kıtlık, yüksek fiyatlar ve karaborsa halkın hayatını zorlaştırdı. Uzun yıllar askerde kalan gençlerin aileleri geçim sıkıntısı çekti.\n\n' +
            '**Siyasi etkiler.** Savaş yıllarında hükûmet basını ve yönetimi sıkı denetim altında tuttu. Savaşın sonunda ise tablo değişti: Türkiye Birleşmiş Milletler’in kurucu üyeleri arasına girdi; Sovyetler Birliği’nin toprak ve Boğazlar’da üs istekleri Türkiye’yi ABD ve Batı ile yakınlaştırdı (Truman Doktrini 1947, Marshall Planı 1948, NATO üyeliği 1952). Demokrasilerin kazandığı savaşın ardından, savaş yıllarının sıkıntılarının da etkisiyle Türkiye’de çok partili hayata geçiş hızlandı. Bu konuyu bir sonraki derste göreceğiz.',
        },
        {
          id: `${SLUG}-etkiler-harita`,
          type: 'concept_map',
          title: 'Etkiler zinciri',
          intro: 'Soldan sağa ilerle: savaşın bir etkisi bir sonrakini doğurur. Kutulara dokununca örnekleri okursun.',
          nodes: [
            { id: 'seferberlik', label: 'Seferberlik', detail: 'Büyük bir ordu yıllarca silah altında tutuldu; askerî harcamalar arttı.' },
            { id: 'uretim', label: 'Üretim düşüşü', detail: 'Tarlada çalışacak gençler askerdeydi; tarımsal üretim düştü, dış ticaret bozuldu.' },
            { id: 'kitlik', label: 'Kıtlık ve pahalılık', detail: 'Ekmek karnesi (1942), karaborsa, yüksek fiyatlar.' },
            { id: 'tedbir', label: 'Olağanüstü tedbirler', detail: 'Millî Korunma Kanunu (1940), Varlık Vergisi (1942), Toprak Mahsulleri Vergisi (1943).' },
            { id: 'hosnutsuzluk', label: 'Hoşnutsuzluk', detail: 'Halkın sıkıntıları ve eşitsiz uygulamalar tek parti yönetimine karşı eleştirileri artırdı.' },
            { id: 'degisim', label: 'Siyasi değişim', detail: 'Savaş sonrası çok partili hayata geçiş ve Batı ile yakınlaşma.' },
          ],
          links: [
            { from: 'seferberlik', to: 'uretim', label: 'gençler askerde' },
            { from: 'uretim', to: 'kitlik', label: 'mal azaldı' },
            { from: 'kitlik', to: 'tedbir', label: 'devlet müdahale etti' },
            { from: 'tedbir', to: 'hosnutsuzluk', label: 'yükler ve eşitsizlikler' },
            { from: 'hosnutsuzluk', to: 'degisim', label: 'değişim isteği' },
          ],
          caption: 'Zincir basitleştirilmiştir. Siyasi değişimin başka nedenleri de vardır; özellikle savaş sonrası uluslararası ortam. Bunu bir sonraki derste göreceğiz.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste üç belge okuyacaksın: Atatürk’ün 1938’deki son Meclis konuşmasından bir bölüm, İnönü’nün 1939’daki konuşmasından bir bölüm ve 1940 tarihli Millî Korunma Kanunu. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'İlk metin TBMM’nin yayımladığı günümüz Türkçesi metindir. İkinci ve üçüncü metinler özgün yazımıyla verilmiştir; eski kelimelerin anlamları adımlarda açıklanır. İlk iki metni yan yana okumak, Atatürk ile İnönü’nün barış anlayışı arasındaki sürekliliği görmeni sağlar.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Atatürk, 1 Kasım 1938: “Barış çetin bir sınav geçirdi”',
        kunye: 'Atatürk’ün TBMM 5. Dönem 4. Yasama Yılı Açılış Konuşması, 1 Kasım 1938 (Başbakan Celal Bayar okumuştur). Metin: TBMM’nin yayımladığı günümüz Türkçesi metin (Vikikaynak); aslı: TBMM Zabıt Ceridesi, D. V, C. 27.',
        nitelik: 'Birebir alıntı (sadeleştirilmiş metinden). Parantez içindekiler tutanağa geçen Meclis tepkileridir.',
        metin:
          'Son aylar içinde barış, çetin bir sınav geçirdi. Şimdi süresini ancak bir zaman sonra anlayabileceğimiz yeni bir sessizlik dönemi içindeyiz.\n\nBarış, ulusları refah ve mutluluğa eriştiren en iyi yoldur. Fakat bu kavram bir kez ele geçirilince sürekli özen, ilgi bekler ve her ulusun ayrı ayrı hazırlığını gerektirir.\n\nÜlkemizin her gün daha çok güçlenmesini sağlamak için her alanda her türlü ihtimale karşı koyabilecek bir durumda bulunmak ve dünya, olaylarının bütün gelişimini büyük bir dikkatle izlemek, barışsever politikamızın dayandığı kuralların başlıcalarıdır. (Bravo sesleri, alkışlar)',
        soru: 'Atatürk dünyadaki durumu nasıl değerlendiriyor? Barışı korumak için Türkiye’nin ne yapması gerektiğini söylüyor?',
        adimlar: [
          { title: 'Tespiti bul', body: '“Barış, çetin bir sınav geçirdi”; içinde bulunulan sessizliğin ne kadar süreceği belli değil. (Bu sözler, Eylül 1938’de Avrupa’da yaşanan büyük krizin hemen ardından söylenmiştir.)' },
          { title: 'Önerileri bul', body: 'Ülkeyi her gün daha çok güçlendirmek, her ihtimale karşı hazırlıklı olmak ve dünya olaylarını büyük bir dikkatle izlemek.' },
          { title: 'İlkeyle bağla', body: 'Barışı istemek ama hazırlıklı olmak → barış ve gerçekçilik ilkeleri.' },
        ],
        cevap: 'Atatürk barışın sarsıldığını ve geçici bir sessizlik döneminde olunduğunu tespit eder. Barışın korunması için Türkiye’nin her alanda güçlenmesini, her ihtimale karşı hazırlıklı olmasını ve dünya olaylarını dikkatle izlemesini ister.',
        cikarim: 'Atatürk barışı istemekle yetinmez, barışın hazırlık gerektirdiğini söyler. Bu anlayış, savaş yıllarında ordunun sürekli hazır tutulmasının ve dikkatli denge siyasetinin temelidir.',
      },
      {
        tur: 'birincil',
        baslik: 'İnönü, 1 Kasım 1939: “harb mıntakası haricinde”',
        kunye: 'Reisicumhur İsmet İnönü’nün TBMM 6. Devre 1. İçtima açış nutku, 1 Kasım 1939. TBMM Zabıt Ceridesi, D. VI, C. 6, 1. inikad, s. 3.',
        nitelik: 'Birebir alıntı (özgün yazım; PDF tarama hataları düzeltilmiştir). (…) işareti atlanan bölümleri gösterir.',
        metin:
          '19 teşrinievvelde imza edilen (…) muahede de; hiç bir Devletin aleyhinde olmıyarak, hiç olmazsa tesirimizin yetiştiği sahada beynelmilel sulh ve emniyete hizmet etmek suretile kendi emniyetimizi masun tutmak gayesine matuftur (Bravo sesleri, şiddetli alkışlar). Sulhu korumak ülküsü; her memlekete, kendi hususî bünyesi, coğrafî vaziyeti ve imkânlarına göre ayrı ayrı tedbirler ilham edebilir. (…) Bu gün olduğu gibi yarın da memleketimizi harb mıntakası haricinde bırakmayı, emniyet ve taahhüdlerimizi ihlâl etmemek şartile, milletimize karşı vazife icabı olarak cidden arzu ediyoruz (Bravo sesleri, alkışlar).',
        soru: 'İnönü’ye göre 19 Ekim 1939 antlaşmasının amacı nedir? Türkiye savaş karşısında nasıl bir tutum almak istemektedir?',
        adimlar: [
          { title: 'Eski kelimeleri çöz', body: 'teşrinievvel = ekim · muahede = antlaşma · beynelmilel sulh = uluslararası barış · emniyet = güvenlik · masun = korunmuş · matuf = yönelik · harb mıntakası = savaş bölgesi · haricinde = dışında.' },
          { title: 'Antlaşmanın amacını bul', body: 'Hiçbir devletin aleyhine olmadan, uluslararası barışa hizmet ederek Türkiye’nin güvenliğini korumak.' },
          { title: 'Tutumu bul', body: 'Ülkeyi savaş bölgesinin dışında tutmak; ama bunu güvenliği ve verilen sözleri çiğnemeden yapmak.' },
          { title: 'Atatürk’le karşılaştır', body: 'Atatürk 1938’de barışın her milletin “coğrafi ve politik” durumuna göre korunacağını söylemişti; İnönü de barışın her memlekete “coğrafi vaziyeti ve imkânlarına göre” farklı tedbirler gerektirdiğini söylüyor.' },
        ],
        cevap: 'İnönü’ye göre antlaşmanın amacı, hiçbir devletin aleyhine olmadan uluslararası barışa hizmet ederek Türkiye’nin güvenliğini korumaktır. Türkiye, verdiği sözleri ve güvenliğini bozmadan ülkeyi savaş bölgesinin dışında tutmak istemektedir.',
        cikarim: 'İnönü’nün sözleri, Atatürk’ün 1938’deki barış anlayışının devamıdır: Barış her ülkenin kendi koşullarına göre, gerçekçi tedbirlerle korunur. Denge siyaseti bu anlayışın savaş yıllarındaki uygulamasıdır.',
      },
      {
        tur: 'birincil',
        baslik: 'Millî Korunma Kanunu, 1940',
        kunye: 'Millî Korunma Kanunu, Kanun No. 3780, kabul tarihi 18 Ocak 1940, Resmî Gazete 26 Ocak 1940, sayı 4417, m. 1. Metin: TBMM kanun arşivi (Düstur).',
        nitelik: 'Birebir alıntı (özgün yazım; PDF tarama hataları düzeltilmiştir).',
        metin:
          'BİRİNCİ MADDE — Fevkalâde hallerde Devletin bünyesini iktısad ve millî müdafaa bakımından takviye maksadile İcra Vekilleri Heyetine, bu kanunda gösterilen şekil ve şartlar dairesinde vazife ve salâhiyetler verilmiştir.\nFevkalâde haller şunlardır:\nA - Umumî veya kısmî seferberlik,\nB - Devletin bir harbe girmesi ihtimali,\nC - Türkiye Cumhuriyetini de alâkalandıran yabancı Devletler arasındaki harb hali.',
        soru: 'Kanun hükûmete hangi durumlarda olağanüstü yetki veriyor? Bu maddeden Türkiye’nin savaşa girmediği hâlde savaştan etkilendiğine dair hangi çıkarım yapılabilir?',
        adimlar: [
          { title: 'Eski kelimeleri çöz', body: 'fevkalâde hal = olağanüstü durum · iktisad = ekonomi · millî müdafaa = ulusal savunma · takviye = güçlendirme · İcra Vekilleri Heyeti = Bakanlar Kurulu · salâhiyet = yetki · seferberlik = savaşa hazırlık için askere çağırma.' },
          { title: 'Durumları sırala', body: 'Seferberlik; devletin savaşa girme ihtimali; Türkiye’yi de ilgilendiren yabancı devletler arasındaki savaş.' },
          { title: 'Çıkarımı kur', body: 'C bendi, Türkiye savaşta olmasa bile başka devletler arasındaki savaşın olağanüstü tedbir gerektirdiğini gösterir.' },
        ],
        cevap: 'Kanun hükûmete seferberlikte, devletin savaşa girme ihtimali olduğunda ve Türkiye’yi de ilgilendiren yabancı devletler arasında savaş olduğunda olağanüstü yetkiler verir. C bendinden, Türkiye savaşa girmese bile başka devletlerin savaşının Türkiye’nin ekonomisini ve savunmasını etkilediği sonucu çıkar.',
        cikarim: 'Kanun 1940’ta, yani Türkiye savaşa girmemişken çıkarıldı. Bu, savaşa girmeyen bir ülkenin bile ekonomisini savaş koşullarına göre düzenlemek zorunda kaldığının belgesidir.',
      },
      {
        tur: 'ikincil',
        baslik: 'Bir değerlendirme: “Savaş dışında kalan kazançlı çıktı”',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Tek yönlü bir değerlendirmeyi göstermek için yazılmıştır.',
        metin:
          'Türkiye İkinci Dünya Savaşı’na fiilen girmedi. Bu sayede ülke savaşın bütün kötülüklerinden korundu ve savaş yıllarını hiçbir sıkıntı yaşamadan geçirdi.',
        soru: 'Metindeki olguyu ve yorumu ayır. Yorum kaynaklarla uyumlu mu?',
        adimlar: [
          { title: 'Olguyu ayır', body: 'Türkiye’nin savaşa fiilen girmemesi olgudur.' },
          { title: 'Yorumu ayır', body: '“Savaşın bütün kötülüklerinden korundu”, “hiçbir sıkıntı yaşamadan” ifadeleri yorumdur.' },
          { title: 'Kaynaklarla sına', body: 'Millî Korunma Kanunu (1940), ekmek karnesi (1942), Varlık Vergisi (1942) ve karaborsa, ağır sıkıntılar yaşandığını gösterir.' },
        ],
        cevap: 'Olgu: Türkiye’nin savaşa fiilen girmemesi. Yorum: ülkenin hiçbir sıkıntı yaşamadığı. Yorum kaynaklarla uyumlu değildir; Türkiye işgal ve yıkımdan korunmuş ama savaşın ağır ekonomik ve sosyal yüklerini yaşamıştır.',
        cikarim: 'Bir değerlendirmedeki “bütün”, “hiçbir” gibi kesin sözcükler çoğu zaman aşırı genellemeye işaret eder. Dengeli bir yorum hem kazanılanı hem ödenen bedeli birlikte görür.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Atatürk dönemiyle ilişkilendir',
      prompt: 'Montrö Sözleşmesi (1936) ile Türkiye’nin İkinci Dünya Savaşı’nda savaş dışında kalması arasında nasıl bir ilişki kurulabilir?',
      steps: [
        { title: 'Montrö’yü hatırla', body: 'Boğazlar Türk egemenliğine geçti; savaşta Türkiye tarafsızken savaşan devletlerin savaş gemilerinin geçişi yasaklandı.' },
        { title: 'Savaşa uygula', body: 'Savaş yıllarında Boğazlar savaşan donanmalara kapalı tutuldu.' },
        { title: 'İlişkiyi kur', body: 'Atatürk döneminin girişimi, savaş yıllarında Türkiye’nin tarafsızlığını korumasına yardım etti.' },
      ],
      answer: 'Montrö, Türkiye’ye Boğazlar üzerinde tam egemenlik ve savaşan gemileri geçirmeme hakkı verdi. Bu hak, savaş yıllarında Türkiye’nin tarafsızlığını korumasını kolaylaştırdı.',
      takeaway: '“İlişkilendir” sorularında önce Atatürk dönemindeki girişimi, sonra savaş yıllarındaki sonucunu yaz.',
    },
    {
      title: 'Denge siyasetini açıkla',
      prompt: 'Türkiye 1939’da İngiltere ve Fransa ile ittifak yaptı, 1941’de Almanya ile saldırmazlık antlaşması imzaladı. Bu iki adım birbiriyle çelişir mi?',
      steps: [
        { title: 'Koşulları karşılaştır', body: '1939’da savaş yeni başlamıştı; 1941’de Alman orduları Türk sınırındaydı.' },
        { title: 'Amacı bul', body: 'İki adımın amacı da Türkiye’nin güvenliğini sağlamak ve savaşa sürüklenmemekti.' },
        { title: 'Sonuca var', body: 'Adımlar koşullara göre değişti ama amaç aynı kaldı.' },
      ],
      answer: 'Çelişmez. İki adım da savaşın o anki durumuna göre Türkiye’nin güvenliğini korumaya ve savaş dışında kalmaya yönelikti. Bu, denge siyasetinin özüdür.',
      takeaway: 'Denge siyasetini “amaç sabit, yöntem esnek” diye özetleyebilirsin.',
    },
    {
      title: 'Etkileri sınıflandır',
      prompt: 'Şunları siyasi, sosyal ve ekonomik etkiler olarak sınıflandır: ekmek karnesi, Birleşmiş Milletler üyeliği, Millî Korunma Kanunu, karaborsa, NATO üyeliği, Varlık Vergisi.',
      steps: [
        { title: 'Siyasi', body: 'Birleşmiş Milletler üyeliği, NATO üyeliği.' },
        { title: 'Sosyal', body: 'Ekmek karnesi, karaborsa (halkın gündelik hayatını etkiledi).' },
        { title: 'Ekonomik', body: 'Millî Korunma Kanunu, Varlık Vergisi.' },
      ],
      answer: 'Siyasi: BM ve NATO üyeliği · Sosyal: ekmek karnesi, karaborsa · Ekonomik: Millî Korunma Kanunu, Varlık Vergisi.',
      takeaway: 'Bazı etkiler birden fazla alana girer; örneğin karaborsa hem ekonomik hem sosyaldir. Sınavda en belirgin yönüne bak.',
    },
  ],
  questionClue: {
    concept: 'Soruda Atatürk dönemi mi, savaş yılları mı soruluyor?',
    statement: 'Bu dersin iki kazanımı iki farklı soru türüne yol açar: ilişkilendirme ya da etki analizi.',
    clues: [
      'Montrö, Balkan Antantı, Sadabat, 1936–1938 konuşmaları → Atatürk’ün tespit ve girişimleri (İTA.8.7.3)',
      'Üçlü İttifak, Türk–Alman Antlaşması, Adana, Kahire → denge siyaseti (İTA.8.7.3)',
      'Ekmek karnesi, karaborsa, Millî Korunma Kanunu, Varlık Vergisi → savaşın iç etkileri (İTA.8.7.4)',
      'BM üyeliği, Sovyet istekleri, Truman Doktrini, NATO → savaş sonrası siyasi etkiler (İTA.8.7.4)',
    ],
    reasoning: 'Önce tarihe bak: 1939’dan önceyse Atatürk dönemi, 1939–1945 arasıysa savaş yılları, 1945’ten sonraysa savaşın sonuçlarıdır.',
    boundary: 'Dikkat: Türkiye 1945’te savaş ilan etti ama fiilen savaşmadı.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'İTA.8.7.3 bir ilişkilendirme, İTA.8.7.4 bir analiz kazanımıdır. Sorular bir konuşma bölümü, bir kronoloji ya da bir uygulama verip ilişki veya etki türü isteyebilir. Aşağıdaki kalıplar kazanımlarla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Atatürk’ün bir tespitini ya da girişimini denge siyasetiyle ilişkilendirme',
      'Türkiye’nin savaş yıllarındaki adımlarını sıralama',
      'Verilen bir uygulamanın siyasi, sosyal ya da ekonomik etki olduğunu belirleme',
      'Savaşa girmeyen Türkiye’nin savaştan nasıl etkilendiğini açıklama',
    ],
  },
  checkpoints: [
    {
      prompt: 'Türkiye 1939 antlaşmasına neden 2 numaralı protokolü (Sovyet çekincesi) koydurdu?',
      hint: 'Türkiye’nin kuzeydoğu komşusu kimdi?',
      answer: 'Türkiye, İngiltere ve Fransa ile ittifak yaparken güçlü komşusu Sovyetler Birliği ile savaşa sürüklenmek istemiyordu. Protokol, antlaşmadan doğan yükümlülüklerin Türkiye’yi Sovyetler Birliği ile savaşa sokmayacağını güvenceye aldı.',
    },
    {
      prompt: 'Türkiye neden 23 Şubat 1945’te, savaşın bitmesine az kala Almanya ve Japonya’ya savaş ilan etti?',
      answer: 'Müttefikler, Birleşmiş Milletler’in kuruluş konferansına yalnızca belirli bir tarihe kadar Mihver Devletlerine savaş ilan eden ülkeleri çağırmayı kararlaştırmıştı. Türkiye BM’nin kurucu üyesi olabilmek için savaş ilan etti.',
    },
    {
      prompt: 'Savaş sonrasında Türkiye’nin ABD ve Batı ile yakınlaşmasının temel nedeni neydi?',
      answer: 'Sovyetler Birliği’nin 1945’ten itibaren Türkiye’den toprak ve Boğazlar’da üs istemesi. Türkiye bu tehdide karşı Batı’nın desteğini aradı.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.7.3, Atatürk’ün İkinci Dünya Savaşı öncesi tespitleri ve girişimlerinin Türkiye’nin savaşta izlediği denge siyasetiyle ilişkilendirilmesini ister; açıklaması bunun İTA.8.6.1 (dış politikanın ilkeleri) ile ilişkilendirilmesini vurgular. İTA.8.7.4, savaştaki gelişmelerin ve savaşın sonuçlarının Türkiye’ye etkilerini analiz etmeni ister; açıklaması etkilerin siyasi, sosyal ve ekonomik yönden ele alınmasını söyler.',
    measures: [
      'Atatürk dönemi girişimlerini savaş yıllarıyla ilişkilendirme',
      'Denge siyasetinin adımlarını ve amacını açıklama',
      'Savaşın etkilerini siyasi, sosyal ve ekonomik olarak sınıflandırma',
      'Savaş sonrası dış politikanın değişim nedenlerini açıklama',
    ],
  },
  simulation: {
    title: 'Mini LGS: Bir kanun maddesi',
    passage:
      '18 Ocak 1940’ta kabul edilen Millî Korunma Kanunu’nun birinci maddesine göre hükûmete olağanüstü yetkiler verilen durumlardan biri şudur: “Türkiye Cumhuriyetini de alâkalandıran yabancı Devletler arasındaki harb hali.” Bu kanuna dayanılarak fiyatlar denetlendi, üretim yönlendirildi ve 1942’de ekmek karneye bağlandı.',
    question: 'Bu bilgilere göre aşağıdakilerden hangisine ulaşılabilir?',
    options: [
      { text: 'Türkiye savaşa girmediği hâlde savaş ekonomisini etkilemiştir.', explanation: 'Doğru. Kanun Türkiye’nin savaşta olmadığı bir dönemde, başka devletler arasındaki savaş nedeniyle çıkarılmış ve gündelik hayatı etkilemiştir.' },
      { text: 'Türkiye 1940’ta Almanya’ya savaş ilan etmiştir.', explanation: 'Metinde savaş ilanından söz edilmez; Türkiye savaş ilanını 1945’te yapmıştır.' },
      { text: 'Millî Korunma Kanunu yalnızca askerî konuları düzenlemiştir.', explanation: 'Metin fiyat, üretim ve ekmek gibi ekonomik ve sosyal konulardan söz eder.' },
      { text: 'Ekmek karnesi uygulaması savaştan önce başlamıştır.', explanation: 'Ekmek karnesi 1942’de, savaş sürerken başlamıştır.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “ulaşılabilir” diyor. Kanun maddesindeki “yabancı Devletler arasındaki harb hali” ifadesi ile ekmek karnesi bilgisini birleştir.',
    critical_point: 'Üçüncü seçenek, kanunun adındaki “korunma” sözcüğünden askerî bir kanun olduğunu düşündürerek çeldirici olur. Metin ekonomik ve sosyal uygulamalardan söz ediyor.',
    takeaway: 'Bir kanunun adına değil, maddesine ve uygulamasına bak.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Savaşın kıyısında Türkiye',
    range: '1936–1952',
    body:
      'Atatürk 1936’da silahlanma yarışına, 1938’de barışın sarsıldığına dikkat çekti; Balkan Antantı, Montrö ve Sadabat ile ülkenin güvenliğini sağlamaya, silahlanma programıyla orduyu güçlendirmeye çalıştı. Savaş 1 Eylül 1939’da başladı. İnönü döneminde Türkiye 19 Ekim 1939’da İngiltere ve Fransa ile Üçlü İttifak’ı imzaladı ama 2 numaralı protokolle Sovyetlerle savaşa sürüklenmemeyi güvenceye aldı. Fransa’nın yenilgisinden sonra savaş dışı kaldı; Alman orduları sınıra dayanınca 18 Haziran 1941’de Almanya ile saldırmazlık antlaşması yaptı. 1943’te Adana ve Kahire’de savaşa girme baskılarına direndi; 1944’te Almanya’ya krom satışını durdurup ilişkilerini kesti; 23 Şubat 1945’te Almanya ve Japonya’ya savaş ilan ederek Birleşmiş Milletler’in kurucu üyesi oldu. Savaş yıllarında seferberlik, üretim düşüşü, Millî Korunma Kanunu, Varlık Vergisi, ekmek karnesi ve karaborsa halkı zorladı. Savaştan sonra Sovyet istekleri Türkiye’yi Batı’ya yaklaştırdı (Truman Doktrini 1947, Marshall Planı 1948, NATO 1952) ve çok partili hayata geçiş hızlandı.',
    turning_points: [
      '1 Kasım 1938 · Atatürk’ün son uyarısı',
      '19 Ekim 1939 · Üçlü İttifak',
      '18 Haziran 1941 · Türk–Alman Saldırmazlık Antlaşması',
      '23 Şubat 1945 · Savaş ilanı ve BM yolu',
      '1947–1952 · Batı ile yakınlaşma',
    ],
  },
  summary: [
    '**Atatürk’ün tespitleri:** 1936 silahlanma yarışı uyarısı; 1938 “barış çetin bir sınav geçirdi”, her ihtimale karşı hazırlık.',
    '**Atatürk’ün girişimleri:** Balkan Antantı (1934), Montrö (1936), Sadabat (1937), silahlanma programı.',
    '**Denge siyaseti:** Üçlü İttifak ve 2 numaralı protokol (1939) → savaş dışı (1940) → Türk–Alman Antlaşması (1941) → Adana ve Kahire (1943) → Almanya ile ilişkiler kesildi (1944) → savaş ilanı (1945).',
    '**Ekonomik etkiler:** Askerî harcamalar, üretim düşüşü, Millî Korunma Kanunu (1940), Varlık Vergisi (1942), Toprak Mahsulleri Vergisi (1943).',
    '**Sosyal etkiler:** Ekmek karnesi (1942), karaborsa, geçim sıkıntısı; Varlık Vergisi’nin eşitsiz uygulaması.',
    '**Siyasi etkiler:** BM kurucu üyeliği; Sovyet istekleri → Batı ile yakınlaşma (Truman 1947, Marshall 1948, NATO 1952); çok partili hayata geçiş.',
  ],
  quizzes: [
    {
      question: 'Türkiye’nin İkinci Dünya Savaşı’nda izlediği dış politika aşağıdakilerden hangisiyle adlandırılır?',
      options: ['Denge siyaseti', 'Yayılmacılık', 'Sömürgecilik', 'Yalnızlık siyaseti'],
      answer_index: 0,
      explanation: 'Türkiye savaşan taraflar arasında dengeyi gözeterek güvenliğini korumaya ve savaş dışında kalmaya çalıştı; bu politikaya denge siyaseti denir.',
    },
    {
      question: '19 Ekim 1939 Üçlü İttifakı’na eklenen 2 numaralı protokolün amacı nedir?',
      options: ['Türkiye’nin Sovyetler Birliği ile savaşa sürüklenmemesi', 'Türkiye’nin Almanya’ya savaş ilan etmesi', 'Boğazların İngiltere’ye açılması', 'Hatay’ın Türkiye’ye katılması'],
      answer_index: 0,
      explanation: '2 numaralı protokol (Sovyet çekincesi), antlaşmadan doğan yükümlülüklerin Türkiye’yi Sovyetler Birliği ile savaşa sokmayacağını güvenceye aldı.',
    },
    {
      question: 'Aşağıdakilerden hangisi Atatürk döneminde yapılıp savaş yıllarında Türkiye’nin tarafsızlığını korumasına yardım eden bir girişimdir?',
      options: ['Montrö Boğazlar Sözleşmesi', 'Türk–Alman Saldırmazlık Antlaşması', 'Adana Görüşmesi', 'Truman Doktrini'],
      answer_index: 0,
      explanation: 'Montrö (1936), savaşta Türkiye tarafsızken savaşan devletlerin savaş gemilerinin Boğazlar’dan geçişini yasakladı. Diğer seçenekler Atatürk’ün ölümünden sonraki gelişmelerdir.',
    },
    {
      question: 'Aşağıdakilerden hangisi İkinci Dünya Savaşı’nın Türkiye’ye sosyal etkilerinden biridir?',
      options: ['Ekmeğin karneyle dağıtılması', 'Birleşmiş Milletler’e üye olunması', 'NATO’ya girilmesi', 'Montrö’nün imzalanması'],
      answer_index: 0,
      explanation: 'Ekmek karnesi (1942), halkın gündelik hayatını doğrudan etkileyen sosyal bir etkidir. BM ve NATO üyeliği siyasi etkilerdir; Montrö savaştan öncedir.',
    },
    {
      question: 'Savaştan sonra Türkiye’nin ABD ve Batı ile yakınlaşmasında en etkili gelişme hangisidir?',
      options: ['Sovyetler Birliği’nin Türkiye’den toprak ve Boğazlar’da üs istemesi', 'Almanya’nın savaşı kazanması', 'Türkiye’nin Balkan Antantı’ndan çıkması', 'İtalya’nın Türkiye’ye saldırması'],
      answer_index: 0,
      explanation: 'Sovyetler Birliği 1945’te 1925 antlaşmasını feshedeceğini bildirip toprak ve Boğazlar’da üs isteyince Türkiye Batı’nın desteğini aradı. Almanya savaşı kaybetti; diğer seçenekler gerçekleşmedi.',
    },
  ],
  next: ['Çok Partili Hayata Geçiş', 'Atatürk Dönemi Dış Politikası'],
})

export default lesson
