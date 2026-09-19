import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.4 Atatürkçülük ve Çağdaşlaşan Türkiye · 2. ders
 * Kazanım : İTA.8.4.2
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   a) Saltanatın kaldırılması, Ankara’nın başkent oluşu, Cumhuriyet’in ilan edilmesi,
 *      Halifeliğin kaldırılması, Şeriye ve Evkâf Vekâleti’nin kaldırılması ile Erkân-ı
 *      Harbiye Vekâleti’nin kaldırılmasının neden ve sonuçları ele alınır.
 *   b) 1924 Anayasası’nın kabulüne değinilir.
 *
 * KAPSAM KARARI
 * Kanun metinleri TBMM kanun arşivinden (no 364, 429, 431), 1924 Anayasası
 * Anayasa Mahkemesi’nin yayımladığı metinden, saltanat ve Ankara ile ilgili
 * açıklamalar Nutuk’tan birebir alındı. Bu derste harita yoktur; görsel omurga
 * kronolojidir. Muhalefet partileri ve ayaklanmalar İTA.8.5 dersinin konusudur.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 16.
 */

const SLUG = 'lgs-tarih-siyasi-inkilaplar'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Atatürkçülük ve Çağdaşlaşan Türkiye',
  order: 2,
  title: 'Siyasi Alanda İnkılaplar: Saltanattan Cumhuriyete',
  subtitle:
    'On sekiz ay içinde altı yüzyıllık saltanat kaldırıldı, Ankara başkent oldu, Cumhuriyet ilan edildi ve halifelik sona erdi. Her adımın bir sebebi, her sebebin bir sonucu vardı.',
  minutes: 45,
  kazanimlar: ['İTA.8.4.2'],
  kapsamNotu:
    'Kanun metinleri TBMM kanun arşivinden, 1924 Anayasası Anayasa Mahkemesi’nin yayımladığı metinden, saltanat ve Ankara ile ilgili açıklamalar Nutuk’tan birebir alıntılanmıştır. Muhalefet partileri ve ayaklanmalar ilerideki bir derste işlenir.',
  prerequisites: [
    {
      topic: 'Atatürk ilkeleri (önceki ders)',
      why: 'Siyasi inkılapları Cumhuriyetçilik, Laiklik ve Halkçılık ilkeleriyle ilişkilendireceğiz.',
    },
    {
      topic: 'Lozan Konferansı’na davet',
      why: 'Saltanatın kaldırılmasının en yakın sebebi, Lozan’a iki ayrı hükümetin çağrılmasıydı.',
    },
  ],
  outcomes: [
    'Saltanatın kaldırılmasının, Ankara’nın başkent oluşunun ve Cumhuriyet’in ilanının neden ve sonuçlarını açıklayabileceksin.',
    'Halifeliğin, Şer’iye ve Evkaf Vekâleti’nin ve Erkân-ı Harbiye Vekâleti’nin kaldırılmasının neden ve sonuçlarını açıklayabileceksin.',
    '1924 Anayasası’nın temel özelliklerini belirleyebileceksin.',
    'Siyasi inkılapları Atatürk ilkeleriyle ilişkilendirebileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'İki başlı bir ülkeden tek bir devlete',
    lead:
      'Millî Mücadele kazanıldığında ülkede iki ayrı güç vardı: Ankara’da milletin seçtiği Büyük Millet Meclisi, İstanbul’da ise padişah ve onun hükümeti.',
    body:
      'Büyük Millet Meclisi 1921 Teşkilât-ı Esasiye’siyle “Hâkimiyet bilâkaydüşart milletindir” demişti. Ama İstanbul’da hâlâ bir padişah vardı ve saltanat hukuken ortadan kalkmamıştı. Bu ikilik savaş sırasında ertelenebilirdi; barış masasına gelince ertelenemezdi.\n\n' +
      'Bu derste **Kasım 1922 ile Nisan 1924 arasındaki** yaklaşık on sekiz ayda yapılan siyasi inkılapları inceleyeceğiz: saltanatın kaldırılması (1 Kasım 1922), Ankara’nın başkent oluşu (13 Ekim 1923), Cumhuriyet’in ilanı (29 Ekim 1923), halifeliğin, Şer’iye ve Evkaf Vekâleti’nin ve Erkân-ı Harbiye Vekâleti’nin kaldırılması (3 Mart 1924) ve 1924 Anayasası (20 Nisan 1924).\n\n' +
      'Program her inkılabın **neden** yapıldığını ve **hangi sonuçları** doğurduğunu sorar. Bu yüzden her adımı bir önceki adımla birlikte okuyacağız: Her inkılap bir sorunu çözerken bir sonrakinin zeminini hazırladı.',
  },
  concepts: [
    { term: 'Saltanat', body: 'Egemenliğin bir hanedana ait olduğu ve babadan oğula geçtiği yönetim. Osmanlı’da padişahlık.' },
    { term: 'Halifelik', body: 'İslam dünyasının dinî ve siyasi önderliği iddiasını taşıyan makam. Osmanlı padişahları 16. yüzyıldan beri halife unvanını da kullanıyordu.' },
    { term: 'Cumhuriyet', body: 'Egemenliğin millete ait olduğu, devlet başkanının seçimle belirlendiği yönetim biçimi.' },
    { term: 'Vekâlet', body: 'Bakanlık. Şer’iye ve Evkaf Vekâleti din ve vakıf işlerine, Erkân-ı Harbiye-i Umumiye Vekâleti ise ordunun komutasına bakan bakanlıklardı.' },
    { term: 'Anayasa (Teşkilât-ı Esasiye)', body: 'Devletin temel yapısını, yönetim biçimini ve vatandaşların temel haklarını belirleyen en üst kanun.' },
  ],
  why: {
    question: 'Bu inkılaplar neden bu kadar kısa sürede peş peşe yapıldı?',
    body:
      'Çünkü hepsi aynı sorunun parçalarıydı: **Egemenlik kimindir?** 1920’den beri Büyük Millet Meclisi milletin egemenliğini fiilen kullanıyordu. Ama saltanat, halifelik ve devlet başkanının kim olduğu gibi sorular cevapsız kalmıştı.\n\n' +
      'Savaş bittiğinde bu belirsizlik tehlikeli hâle geldi. Lozan’a iki hükümetin çağrılması, bakanların seçimi üzerine çıkan hükümet bunalımı, devletin başkanının belli olmaması ve halifenin bir padişah gibi davranması, her biri çözüm bekleyen somut sorunlardı. Her inkılap bu sorunlardan birine verilen cevaptı.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Saltanattan Cumhuriyete (1922–1924)',
    lead: 'On sekiz aylık bu dönemi adım adım izle. Her adımın bir öncekine nasıl bağlandığına dikkat et.',
    intro: 'Kronolojide üç kilit gün var: 1 Kasım 1922, 29 Ekim 1923 ve 3 Mart 1924.',
    items: [
      { title: 'Ekim 1922 · Lozan’a çifte davet', body: 'İtilaf Devletleri barış konferansına hem Ankara’yı hem İstanbul’u çağırdı.' },
      { title: '1 Kasım 1922 · Saltanatın kaldırılması', body: 'Büyük Millet Meclisi saltanat ile halifeliği birbirinden ayırdı ve saltanatı kaldırdı. Halifelik bir süre daha bırakıldı.' },
      { title: '17 Kasım 1922 · Vahdettin ülkeden ayrıldı', body: 'Son padişah Vahdettin, İngiliz himayesine sığınarak bir İngiliz savaş gemisiyle İstanbul’dan ayrıldı.' },
      { title: 'Kasım 1922 · Yeni halife', body: 'Büyük Millet Meclisi Vahdettin’i halifelikten düşürdü ve yerine Abdülmecid Efendi’yi halife seçti.' },
      { title: '13 Ekim 1923 · Ankara başkent oldu', body: '“Türkiye Devleti’nin makarr-ı idâresi, Ankara şehridir.”' },
      { title: 'Ekim 1923 · Hükümet bunalımı', body: 'Bakanların seçiminde yaşanan sorunlar ve devletin başkanının belli olmaması, yönetim biçiminin açıkça adlandırılması gereğini gösterdi.' },
      { title: '29 Ekim 1923 · Cumhuriyet’in ilanı', body: 'Meclis “Türkiye Devletinin şekli Hükümeti, Cumhuriyettir” maddesini kabul etti; Mustafa Kemal oy birliğiyle ilk Cumhurbaşkanı seçildi.' },
      { title: '1 Mart 1924 · Meclis’i açış konuşması', body: 'Mustafa Kemal, Cumhuriyet’in korunması ve eğitimin birleştirilmesi gereğini vurguladı.' },
      { title: '3 Mart 1924 · Üç kanun', body: 'Halifelik kaldırıldı; Şer’iye ve Evkaf Vekâleti ile Erkân-ı Harbiye-i Umumiye Vekâleti kaldırıldı; aynı gün Tevhid-i Tedrisat Kanunu kabul edildi.' },
      { title: '20 Nisan 1924 · 1924 Anayasası', body: 'Cumhuriyet’in ilk anayasası kabul edildi.' },
    ],
    takeaway:
      'Dikkat et: Saltanat ile halifelik aynı gün kaldırılmadı. Önce 1922’de saltanat kaldırıldı ve halifelik ondan ayrıldı; halifelik ancak 1924’te, Cumhuriyet ilan edildikten sonra kaldırıldı.',
    body:
      'Bu sıralamanın bir mantığı vardır. Mustafa Kemal Nutuk’ta, Lozan’a yapılan “müşterek davet”in saltanatın kaldırılmasını kesinleştirdiğini yazar. Saltanat kaldırılırken halifelik bırakıldı; çünkü halifelik o gün hâlâ halkın ve Meclis’in bir kısmı için önemli bir kurumdu.\n\n' +
      'Cumhuriyet ilan edildikten sonra ise halifelik yeni bir sorun oldu: Halife, bir padişah gibi törenler düzenliyor, yabancı temsilcilerle ilişki kuruyor ve Cumhuriyet’e karşı olanlar için bir toplanma noktası hâline geliyordu. 3 Mart 1924’teki kanun, halifeliğin “Hükümet ve Cumhuriyet mâna ve mefhumunda esasen mündemiç” olduğunu, yani Cumhuriyet’in içinde zaten bulunduğunu söyleyerek makamı kaldırdı.',
  },
  dataTable: {
    title: 'Siyasi inkılaplar: neden, sonuç ve ilke',
    columns: ['İnkılap', 'Tarih', 'Neden?', 'Sonuç', 'İlgili ilke'],
    rows: [
      ['Saltanatın kaldırılması', '1 Kasım 1922', 'Lozan’a iki hükümetin çağrılması; egemenliğin millete ait olduğu ilkesiyle saltanatın bağdaşmaması', 'Osmanlı Devleti hukuken sona erdi; Lozan’da Türkiye’yi yalnız Ankara temsil etti; halifelik saltanattan ayrıldı', 'Cumhuriyetçilik'],
      ['Ankara’nın başkent oluşu', '13 Ekim 1923', 'Coğrafi ve stratejik konumu; Millî Mücadele’nin merkezi olması; başkentin İstanbul mu Ankara mı olacağı tartışmasına son verme ihtiyacı', 'Başkent sorunu kanunla çözüldü; yeni devletin merkezi Anadolu oldu', 'Cumhuriyetçilik, Milliyetçilik'],
      ['Cumhuriyet’in ilanı', '29 Ekim 1923', 'Hükümet bunalımı; devlet başkanının belli olmaması; devletin yönetim biçiminin adlandırılmaması', 'Devletin adı ve rejimi belirlendi; Mustafa Kemal Cumhurbaşkanı, İsmet Paşa Başbakan oldu', 'Cumhuriyetçilik'],
      ['Halifeliğin kaldırılması', '3 Mart 1924', 'Halifenin bir padişah gibi davranması ve Cumhuriyet karşıtlarının etrafında toplanması; halifeliğin Cumhuriyet ve laiklikle bağdaşmaması', 'Hanedan üyeleri yurt dışına çıkarıldı; laikliğin önü açıldı', 'Laiklik, Cumhuriyetçilik'],
      ['Şer’iye ve Evkaf Vekâleti’nin kaldırılması', '3 Mart 1924', 'Din işlerinin hükümet içinde bir bakanlıkla yürütülmesinin laik devlet anlayışına uymaması', 'Diyanet İşleri Reisliği ve Evkaf Umum Müdürlüğü Başvekâlete bağlı kuruldu', 'Laiklik'],
      ['Erkân-ı Harbiye Vekâleti’nin kaldırılması', '3 Mart 1924', 'Ordu komutanlığının hükümet içinde siyasi bir bakanlık olarak kalması', 'Erkân-ı Harbiye-i Umumiye Riyaseti kuruldu; ordunun komutası bakanlar kurulunun dışına alındı', 'Cumhuriyetçilik'],
      ['1924 Anayasası', '20 Nisan 1924', 'Cumhuriyet’in kurumlarını ve vatandaşların haklarını tek bir anayasada toplama ihtiyacı', 'Egemenlik millete; yasama ve yürütme Meclis’te; yargı bağımsız mahkemelerde; kanun önünde eşitlik', 'Cumhuriyetçilik, Halkçılık'],
    ],
    caption:
      'Tablodaki “neden” ve “sonuç” sütunları Nutuk’a ve kanun metinlerine dayanır. “İlgili ilke” sütunu, bir önceki dersteki ilkelerle bağlantı kurmana yardım etmek içindir.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Egemenlik kimindir? Sorudan cevaba giden zincir',
    lead: 'Bütün siyasi inkılaplar aynı soruya verilen adım adım cevaplardır. Zincir bu adımları gösterir.',
    intro: 'Zincirin başı sorunun kaynağını, ortası inkılapları, sonu da 1924 Anayasası’yla ulaşılan sonucu ve sonraki etkisini anlatır.',
    steps: [
      { tur: 'sebep', title: 'İki başlılık', body: 'Ankara’da milletin Meclisi, İstanbul’da padişah ve hükümeti vardı; 1921 anayasası egemenliği millete vermiş ama saltanatı hukuken kaldırmamıştı.' },
      { tur: 'sebep', title: 'Lozan’a çifte davet', body: 'İtilaf Devletleri barış konferansına iki hükümeti birden çağırınca kimin Türkiye’yi temsil edeceği sorusu acil hâle geldi.' },
      { tur: 'gelisme', title: 'Saltanatın kaldırılması', body: '1 Kasım 1922’de saltanat kaldırıldı ve halifelikten ayrıldı.' },
      { tur: 'gelisme', title: 'Başkent ve Cumhuriyet', body: '13 Ekim 1923’te Ankara başkent oldu; 29 Ekim 1923’te hükümet bunalımı ve devlet başkanı sorunu Cumhuriyet’in ilanıyla çözüldü.' },
      { tur: 'gelisme', title: '3 Mart 1924 kanunları', body: 'Halifelik, Şer’iye ve Evkaf Vekâleti ve Erkân-ı Harbiye Vekâleti kaldırıldı.' },
      { tur: 'sonuc', title: '1924 Anayasası', body: '“Hâkimiyet bilâ kaydü şart Milletindir.” Egemenliğin kaynağı, devletin yapısı ve vatandaşların hakları tek bir anayasada toplandı.' },
      { tur: 'sonraki-etki', title: 'Yeni inkılapların zemini', body: 'Din ve devlet işlerinin ayrılması hukuk, eğitim ve toplumsal alandaki inkılapların önünü açtı; aynı süreç muhalefetin de ortaya çıkmasına yol açtı.' },
    ],
    inference:
      'Temel çıkarım: Siyasi inkılaplar, 1919’da başlayan “millî egemenlik” düşüncesinin hukuki sonuçlarıdır. Her adım, egemenliği bir kişiden ya da hanedandan alıp millete veren sürecin bir halkasıdır.',
    body:
      'Nutuk’ta saltanatın kaldırılması tartışılırken Mustafa Kemal Meclis encümenine şöyle seslenir: Egemenlik ve saltanat kimseye ilim gereği diye müzakere ile verilmez; Osmanoğulları onu zorla almıştı, şimdi millet de onu fiilen kendi eline almıştır. Yani saltanatın kaldırılması, zaten gerçekleşmiş bir durumun hukuken kabul edilmesiydi.\n\n' +
      'Cumhuriyet için de benzer bir durum vardı. Nutuk’a göre Cumhuriyet’in ilanını görüşen toplantıda Abdurrahman Şeref Bey, egemenliğin kayıtsız şartsız millete ait olduğu söylendikten sonra bunun adının zaten cumhuriyet olduğunu anlatmak için “Doğan çocuğun adıdır” demişti.',
  },
  comparison: {
    title: 'Saltanat, Halifelik ve Cumhuriyet',
    columns: ['Saltanat', 'Halifelik', 'Cumhuriyet'],
    rows: [
      { label: 'Egemenliğin kaynağı', values: ['Hanedan; babadan oğula', 'Dinî önderlik iddiası', 'Millet'] },
      { label: 'Başındaki kişi nasıl belirlenir?', values: ['Hanedan içinden', 'Osmanlı hanedanından; 1922–1924 arasında Meclis seçti', 'Meclis tarafından seçilen Cumhurbaşkanı'] },
      { label: 'Tarih', values: ['1 Kasım 1922’de kaldırıldı', '3 Mart 1924’te kaldırıldı', '29 Ekim 1923’te ilan edildi'] },
      { label: 'Neden?', values: ['Millî egemenlikle bağdaşmıyordu; Lozan’a çifte davet', 'Cumhuriyet ve laiklikle bağdaşmıyordu; muhalefetin toplanma noktası olmuştu', 'Hükümet bunalımı ve devlet başkanı sorunu; rejimin adlandırılması'] },
      { label: 'Sonuç', values: ['Osmanlı Devleti hukuken sona erdi', 'Hanedan yurt dışına çıkarıldı; laikliğe geçişin önü açıldı', 'Türkiye Cumhuriyeti kuruldu'] },
    ],
    insight:
      'Asıl fark: Saltanat ve halifelik bir hanedana ya da dinî bir iddiaya dayanıyordu; Cumhuriyet ise egemenliği millete dayandırır. Bu yüzden Cumhuriyet ile saltanat ve halifelik uzun süre bir arada yaşayamazdı.',
  },
  traps: [
    {
      title: 'Saltanat ile halifeliği aynı anda kaldırılmış sanmak',
      wrong: 'Saltanat ve halifelik 1 Kasım 1922’de birlikte kaldırıldı.',
      right: '1 Kasım 1922’de yalnız saltanat kaldırıldı ve halifelikten ayrıldı. Halifelik 3 Mart 1924’te kaldırıldı.',
      body: 'Aradaki sürede Meclis Abdülmecid Efendi’yi halife seçmişti; halife yalnız dinî bir makam olarak bırakılmıştı.',
    },
    {
      title: 'Cumhuriyet’in ilanını yalnız bir isim değişikliği sanmak',
      wrong: 'Cumhuriyet’in ilanı yalnız devletin adını değiştirdi; yönetimde hiçbir şey değişmedi.',
      right: 'Cumhuriyet’in ilanıyla devletin başkanı belirlendi (Cumhurbaşkanı), hükümetin kuruluş biçimi düzenlendi ve hükümet bunalımı çözüldü.',
      body: 'Kanun no 364, Cumhurbaşkanının Meclis tarafından seçileceğini ve Başbakanı onun seçeceğini de düzenledi.',
    },
    {
      title: 'Şer’iye ve Evkaf Vekâleti kaldırılınca din işlerine hiçbir kurumun bakmadığını sanmak',
      wrong: 'Şer’iye ve Evkaf Vekâleti kaldırıldıktan sonra din işleri tamamen sahipsiz kaldı.',
      right: 'Aynı kanunla Başvekâlete bağlı Diyanet İşleri Reisliği kuruldu; vakıflar için de Evkaf Umum Müdürlüğü oluşturuldu.',
      body: 'Değişen şey, din işlerinin hükümet içinde siyasi bir bakanlık tarafından değil, idari bir kurum tarafından yürütülmesiydi.',
    },
    {
      title: '1924 Anayasası’nın başından laik olduğunu sanmak',
      wrong: '1924 Anayasası kabul edildiğinde devletin laik olduğu yazıyordu.',
      right: '1924 Anayasası’nın ilk hâlinde “Türkiye Devletinin dini, Dini İslâmdır” hükmü vardı. Bu hüküm 1928’de kaldırıldı; “laik” sözcüğü 1937’de anayasaya girdi.',
      body: 'Anayasanın ilk hâli ile sonraki değişikliklerini karıştırma.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Siyasi inkılapların kişileri',
    lead: 'Bu dönemde kimler karar verdi, kimler itiraz etti, kimler tahttan indi?',
    intro: 'Kartlarda her kişinin bu süreçteki rolünü görürsün.',
    figures: [
      {
        name: 'Mustafa Kemal Paşa',
        period: '1922–1924',
        position: 'Büyük Millet Meclisi Başkanı; 29 Ekim 1923’ten itibaren Cumhurbaşkanı',
        contribution: 'Saltanatın kaldırılmasını Meclis’te savundu; Cumhuriyet’in ilanına ait kanun teklifini hazırladı; halifeliğin kaldırılması kararını verdi.',
        connections: ['Saltanat', 'Cumhuriyet', 'Halifelik'],
        significance: '158 milletvekilinin oy birliğiyle seçilen ilk Cumhurbaşkanıdır.',
      },
      {
        name: 'İsmet Paşa (İnönü)',
        period: '1923–1924',
        position: 'Hariciye Vekili, ardından Başvekil',
        contribution: 'Ankara’nın başkent olmasına dair kanun teklifini 9 Ekim 1923’te Meclis’e verdi. Cumhuriyet’in ilanından sonra ilk hükümeti kurdu.',
        connections: ['Ankara’nın başkent oluşu', 'Cumhuriyet'],
        significance: 'Cumhuriyet’in ilk Başbakanıdır.',
      },
      {
        name: 'Vahdettin (VI. Mehmed)',
        period: '1918–1922',
        position: 'Son Osmanlı padişahı',
        contribution: 'Saltanatın kaldırılmasından sonra 17 Kasım 1922’de İngiliz himayesine sığınarak bir İngiliz savaş gemisiyle İstanbul’dan ayrıldı.',
        connections: ['Saltanatın kaldırılması'],
        significance: 'Osmanlı hanedanının son padişahıdır.',
      },
      {
        name: 'Abdülmecid Efendi',
        period: '1922–1924',
        position: 'Son halife',
        contribution: 'Kasım 1922’de Meclis tarafından halife seçildi; 3 Mart 1924’te halifelik kaldırılınca hanedanın diğer üyeleriyle birlikte yurt dışına çıkarıldı.',
        connections: ['Halifeliğin kaldırılması'],
        significance: 'Meclis tarafından seçilen tek ve son halifedir.',
      },
      {
        name: 'Abdurrahman Şeref Bey',
        period: '1923 · Milletvekili, tarihçi',
        position: 'Son Osmanlı vakanüvisi ve milletvekili',
        contribution: 'Cumhuriyet’in ilanı görüşülürken egemenliğin millete ait olduğunu söyledikten sonra bunun adının cumhuriyet olduğunu “Doğan çocuğun adıdır” sözüyle anlattı.',
        connections: ['Cumhuriyet’in ilanı'],
        significance: 'Cumhuriyet’in, zaten var olan millî egemenliğin adı olduğunu en kısa biçimde anlatan kişidir.',
      },
      {
        name: 'Refet Paşa (Bele)',
        period: '1923 · İstanbul milletvekili',
        position: 'Milletvekili',
        contribution: 'Nutuk’a göre başkentin İstanbul’da kalmasını savunanların başında geliyordu.',
        connections: ['Ankara’nın başkent oluşu'],
        significance: 'Başkent tartışmasının öbür tarafını temsil eder; kararın tartışılarak alındığını gösterir.',
      },
    ],
    takeaway:
      'İnkılaplar tartışmasız alınmış kararlar değildi. Başkent, Cumhuriyet ve halifelik konularında farklı görüşler vardı; kararlar Meclis’te tartışılarak kanunlaştı.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-anayasa`,
      title: '1924 Anayasası: Cumhuriyet’in ilk anayasası',
      lead: 'Program 1924 Anayasası’nın kabulüne değinilmesini ister. Anayasanın temel maddeleriyle Cumhuriyet’in nasıl bir devlet olduğunu görelim.',
      blocks: [
        {
          id: `${SLUG}-anayasa-anlatim`,
          type: 'prose',
          body:
            '**Ne zaman ve neden?** 1924 Anayasası 20 Nisan 1924’te kabul edildi (Kanun no 491). 1921 Teşkilât-ı Esasiye’si savaş koşullarında yazılmış kısa bir metindi; Cumhuriyet’in ilanı ve 3 Mart kanunlarından sonra devletin kurumlarını ve vatandaşların haklarını ayrıntılı biçimde düzenleyen yeni bir anayasaya ihtiyaç vardı.\n\n' +
            '**Temel özellikleri:**\n\n' +
            '- **Egemenlik:** “Hâkimiyet bilâ kaydü şart Milletindir.” (3. madde)\n' +
            '- **Meclis:** Büyük Millet Meclisi milletin tek ve gerçek temsilcisidir; yasama ve yürütme yetkisi Meclis’tedir. Meclis yürütme yetkisini kendi seçtiği Cumhurbaşkanı ve onun atadığı bakanlar kurulu eliyle kullanır ve hükümeti her zaman denetleyebilir. (4–7. maddeler)\n' +
            '- **Yargı:** Yargı yetkisi millet adına bağımsız mahkemelerce kullanılır. (8. madde)\n' +
            '- **Cumhurbaşkanı:** Meclis tarafından, milletvekilleri arasından seçilir. (31. madde)\n' +
            '- **Temel haklar:** “Her Türk hür doğar, hür yaşar.” Kanun önünde eşitlik; zümre, sınıf, aile ve kişi ayrıcalıkları yasaktır. (68–69. maddeler)\n' +
            '- **Vatandaşlık:** Türkiye halkına din ve ırk farkı olmaksızın vatandaşlık bakımından “Türk” denir. (88. madde)\n\n' +
            '**Sonradan yapılan değişiklikler:** 1928’de devlet dini hükmü kaldırıldı; 1934’te kadınlara milletvekili seçme ve seçilme hakkı tanındı; 1937’de altı ilke anayasaya girdi. Yani 1924 Anayasası, inkılaplarla birlikte değişen yaşayan bir metindi.',
        },
        {
          id: `${SLUG}-anayasa-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: 1-13-29-3-20',
          body: '1 Kasım 1922 saltanat · 13 Ekim 1923 Ankara · 29 Ekim 1923 Cumhuriyet · 3 Mart 1924 halifelik ve iki vekâlet · 20 Nisan 1924 Anayasa.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste Mustafa Kemal’in saltanat hakkındaki sözlerini, Cumhuriyet ve halifelik kanunlarını ve 1924 Anayasası’ndan maddeleri okuyacaksın. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Kanun metinleri TBMM kanun arşivindeki resmî metinlerdir; dili eski olduğu için sözcük açıklamalarını kullan.\n\n' +
      'İlk dört metin birebir alıntıdır. Beşinci metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Mustafa Kemal’in saltanat hakkındaki sözleri',
        kunye: 'Mustafa Kemal, Nutuk (1927), 14. bölüm: “Müşterek Encümen’e anlattığım hakikat”. Saltanatın kaldırılması görüşülürken Meclis’in üç encümeninin ortak toplantısında yaptığı konuşma. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı.',
        metin:
          'Efendiler, dedim. Hâkimiyet ve saltanat hiç kimse tarafından hiç kimseye, ilim icabıdır diye, müzakere ile, münakaşa ile verilmez. Hâkimiyet, saltanat kuvvetle, kudretle ve zorla alınır. Osmanoğulları, zorla Türk milletinin hâkimiyet ve saltanatına, vâzıü’l-yed olmuşlardı ve bu tasallutlarını altı asırdan beri idâme eylemişlerdi. Şimdi de Türk milleti bu mütecâvizlerin hadlerini ihtar ederek, hâkimiyet ve saltanatını, isyan ederek kendi eline, bi’l-fiil almış bulunuyor. Bu bir emr-i vâkidir.',
        soru: 'Mustafa Kemal saltanatın kaldırılmasını nasıl gerekçelendiriyor? “Bu bir emr-i vâkidir” sözü neyi anlatıyor?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Hâkimiyet”: egemenlik. “İcap”: gerek. “Vâzıü’l-yed olmak”: el koymak. “Tasallut”: zorbalıkla hükmetme. “İdâme etmek”: sürdürmek. “Mütecâviz”: saldırgan. “Hadlerini ihtar etmek”: haddini bildirmek. “Bi’l-fiil”: fiilen. “Emr-i vâki”: olup bitmiş, gerçekleşmiş durum.' },
          { title: 'Gerekçeyi bul', body: 'Egemenlik tartışmayla verilmez, güçle alınır. Osmanoğulları onu altı yüzyıl önce zorla almıştı; şimdi millet onu Millî Mücadele ile kendi eline almıştır.' },
          { title: 'Emr-i vâkiyi yorumla', body: 'Millet egemenliği zaten fiilen kullanıyor. Meclis’in yapacağı şey, gerçekleşmiş bu durumu hukuken kabul etmektir.' },
        ],
        cevap: 'Mustafa Kemal, egemenliğin tartışmayla değil güçle el değiştirdiğini, milletin Millî Mücadele ile egemenliği zaten kendi eline aldığını söyler. “Emr-i vâki” sözüyle saltanatın kaldırılmasının yeni bir karar değil, gerçekleşmiş bir durumun hukuken tanınması olduğunu anlatır.',
        cikarim: 'Siyasi inkılaplar çoğu zaman fiilen gerçekleşmiş bir durumun hukuka geçirilmesidir. Bu konuşma, 1920’den beri egemenliği kullanan Meclis’in bunu resmîleştirdiğini gösterir.',
      },
      {
        tur: 'birincil',
        baslik: 'Cumhuriyet’in ilanı: Kanun no 364',
        kunye: 'Teşkilâtı esasiye kanununun bazı mevaddının tavzihan tadiline dair kanun, Kanun no 364, 29 Ekim 1923, 1. madde. Metin: TBMM kanun arşivi.',
        nitelik: 'Birebir alıntı.',
        metin:
          'BİRİNCİ MADDE — Hâkimiyet, bilâkaydü şart milletindir, idare usulü halkın mukadderatını bizzat ve bilfiil idare etmesi esasına müstenittir. Türkiye Devletinin şekli Hükümeti, Cumhuriyettir.',
        soru: 'Bu maddenin ilk cümlesi 1921 Teşkilât-ı Esasiye’sinin 1. maddesiyle aynıdır. Kanunun yeni eklediği şey nedir ve bu neden önemlidir?',
        adimlar: [
          { title: 'Sözcükleri çöz', body: '“Mukadderat”: gelecek, kader. “Bizzat ve bilfiil”: kendisi ve fiilen. “Müstenit”: dayanan. “Şekl-i hükümet”: yönetim biçimi.' },
          { title: 'Aynı olanı bul', body: 'Egemenliğin kayıtsız şartsız millete ait olduğu ve halkın kendi geleceğini kendisinin yönettiği 1921’den beri anayasadaydı.' },
          { title: 'Yeni olanı bul', body: '“Türkiye Devletinin şekli Hükümeti, Cumhuriyettir.” Yönetim biçimi ilk kez adıyla yazıldı.' },
          { title: 'Önemini yorumla', body: 'Yönetim biçiminin adlandırılması, devletin başkanının seçilmesini ve hükümetin kurulmasını hukuken mümkün kıldı; iç ve dış belirsizliklere son verdi.' },
        ],
        cevap: 'Kanun, zaten var olan millî egemenlik ilkesine yönetim biçiminin adını ekledi: Cumhuriyet. Bu, devlet başkanının seçilmesini ve hükümet bunalımının çözülmesini sağladı ve devletin niteliğini hem içeride hem dünyaya açıkça ilan etti.',
        cikarim: 'Aynı cümlenin iki kanunda tekrarlanması, Cumhuriyet’in 1921’den beri var olan millî egemenliğin devamı olduğunu gösterir. Abdurrahman Şeref Bey’in “Doğan çocuğun adıdır” sözü bu yüzden yerindedir.',
      },
      {
        tur: 'birincil',
        baslik: 'Halifeliğin ve iki vekâletin kaldırılması',
        kunye: 'Hilafetin ilgasına ve Hanedanı Osmaninin Türkiye Cumhuriyeti memaliki haricine çıkarılmasına dair kanun (Kanun no 431), 1. madde; Şeriye ve Evkaf ve Erkânı harbiyei umumiye vekâletlerinin ilgasına dair kanun (Kanun no 429), 2. ve 8. maddeler; 3 Mart 1924. Metin: TBMM kanun arşivi.',
        nitelik: 'Birebir alıntı. İki kanundan alınan maddeler “…” ile birleştirilmiştir.',
        metin:
          'BİRİNCİ MADDE — Halife haledilmiştir. Hilâfet, Hükümet ve Cumhuriyet mâna ve mefhumunda esasen mündemiç olduğundan hilâfet makamı mülgadır. … İKİNCİ MADDE — Şeriye ve Evkaf vekâleti mülgadır. … SEKİZİNCİ MADDE — Erkânı harbiyei umumiye vekâleti mülgadır.',
        soru: 'Halifelik hangi gerekçeyle kaldırılıyor? Aynı gün üç kurumun kaldırılması neyi gösterir?',
        adimlar: [
          { title: 'Sözcükleri çöz', body: '“Hal’ edilmek”: görevden düşürülmek. “Mâna ve mefhum”: anlam ve kavram. “Esasen mündemiç”: zaten içinde bulunan. “Mülga”: kaldırılmış.' },
          { title: 'Gerekçeyi bul', body: 'Kanuna göre halifeliğin anlamı zaten hükümet ve Cumhuriyet kavramının içinde vardır; bu yüzden ayrı bir makama gerek yoktur.' },
          { title: 'Üç kurumu yorumla', body: 'Halifelik ve Şer’iye ve Evkaf Vekâleti din ile devlet işlerinin iç içe olduğu kurumlardı; Erkân-ı Harbiye Vekâleti ise orduyu hükümetin siyasi yapısı içinde tutuyordu. Üçünün aynı gün kaldırılması, din ile devletin ve ordu ile siyasetin ayrılmasını amaçlayan bütüncül bir düzenlemeyi gösterir.' },
        ],
        cevap: 'Halifelik, anlamının Cumhuriyet ve hükümet kavramı içinde zaten bulunduğu gerekçesiyle kaldırıldı. Aynı gün üç kurumun kaldırılması; din ile devlet işlerinin ayrılmasını ve ordunun siyasetin dışında tutulmasını hedefleyen planlı ve bütüncül bir adımı gösterir.',
        cikarim: 'Aynı tarihte çıkan kanunları birlikte okumak, tek tek okumaktan daha çok şey anlatır. 3 Mart 1924’te aynı gün Tevhid-i Tedrisat Kanunu’nun da kabul edildiğini unutma.',
      },
      {
        tur: 'birincil',
        baslik: '1924 Anayasası’ndan üç madde',
        kunye: 'Teşkilâtı Esasiye Kanunu (1924 Anayasası), Kanun no 491, kabul 20 Nisan 1924; 3., 68. ve 69. maddeler. Metin: Anayasa Mahkemesi, önceki anayasalar.',
        nitelik: 'Birebir alıntı.',
        metin:
          'Madde 3.- Hâkimiyet bilâ kaydü şart Milletindir. … Madde 68.- Her Türk hür doğar, hür yaşar. … Madde 69.- Türkler kanun nazarında müsavi ve bilâistisna kanuna riayetle mükelleftirler. Her türlü zümre, sınıf, aile ve fert imtiyazları mülga ve memnudur.',
        soru: 'Bu üç madde hangi Atatürk ilkeleriyle ilişkilidir? 69. madde Osmanlı toplum düzenine göre neyi değiştiriyor?',
        adimlar: [
          { title: 'Sözcükleri çöz', body: '“Müsavi”: eşit. “Bilâistisna”: istisnasız. “Riayetle mükellef”: uymakla yükümlü. “Zümre”: topluluk. “İmtiyaz”: ayrıcalık. “Mülga ve memnu”: kaldırılmış ve yasak.' },
          { title: '3. madde', body: 'Egemenliğin millete ait olması → Cumhuriyetçilik.' },
          { title: '68 ve 69. maddeler', body: 'Özgürlük ve kanun önünde eşitlik; ayrıcalıkların yasaklanması → Halkçılık.' },
          { title: 'Değişimi bul', body: 'Osmanlı’da hanedan, bazı zümreler ve unvan sahipleri ayrıcalıklıydı. 69. madde her türlü ayrıcalığı kaldırıp yasaklar.' },
        ],
        cevap: '3. madde Cumhuriyetçilikle, 68 ve 69. maddeler Halkçılıkla ilişkilidir. 69. madde, Osmanlı’daki zümre, sınıf, aile ve kişi ayrıcalıklarını kaldırarak bütün vatandaşları kanun önünde eşit kılar.',
        cikarim: 'Bir anayasa maddesi, bir ilkenin hukuka nasıl geçtiğini gösterir. İlkeler 1937’de anayasaya adlarıyla girmeden önce, 1924’te maddelerin içinde zaten vardı.',
      },
      {
        tur: 'ikincil',
        baslik: 'Siyasi inkılaplar üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Cumhuriyet 29 Ekim 1923’te ilan edildi ve Mustafa Kemal oy birliğiyle Cumhurbaşkanı seçildi. Cumhuriyet’in ilanı, Türk milletinin yüzyıllardır beklediği bir karardı. Bu karar sayesinde Türkiye’de bütün sorunlar bir anda çözüldü.',
        soru: 'Metindeki olguları ve yorumları ayır. Hangi yargı aşırı genellemedir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Sonradan yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguları ayır', body: 'Cumhuriyet’in 29 Ekim 1923’te ilan edilmesi ve Mustafa Kemal’in oy birliğiyle seçilmesi olgudur (Kanun no 364; Nutuk).' },
          { title: 'Yorumları ayır', body: '“Yüzyıllardır beklediği” ve “bütün sorunlar bir anda çözüldü” ifadeleri yorumdur.' },
          { title: 'Aşırı genellemeyi bul', body: '“Bütün sorunlar bir anda çözüldü” yargısı yanlıştır: Halifelik sorunu 1924’e, anayasa 1924’e kaldı; muhalefet ve ayaklanmalar sonraki yıllarda da sürdü.' },
        ],
        cevap: 'Olgular: Cumhuriyet’in 29 Ekim 1923’te ilanı ve Mustafa Kemal’in oy birliğiyle seçilmesi. Yorumlar: yüzyıllardır beklenen bir karar olması ve bütün sorunları çözmesi. “Bütün sorunlar bir anda çözüldü” aşırı bir genellemedir; halifelik ve anayasa gibi konular sonraki aylarda ele alındı.',
        cikarim: '“Bütün”, “bir anda”, “hiç” gibi sözcükler çoğu zaman aşırı genellemenin işaretidir. Kronolojiyi hatırlamak bu tür yargıları sınamanın en iyi yoludur.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'İnkılapları neden–sonuç ile eşleştir',
      prompt: 'Aşağıdaki nedenleri ilgili inkılapla eşleştir: (a) Lozan’a iki hükümetin çağrılması, (b) hükümet bunalımı ve devlet başkanının belli olmaması, (c) halifenin bir padişah gibi davranması, (d) başkentin İstanbul mu Ankara mı olacağı tartışması.',
      steps: [
        { title: 'a', body: 'Saltanatın kaldırılması (1 Kasım 1922).' },
        { title: 'b', body: 'Cumhuriyet’in ilanı (29 Ekim 1923).' },
        { title: 'c', body: 'Halifeliğin kaldırılması (3 Mart 1924).' },
        { title: 'd', body: 'Ankara’nın başkent oluşu (13 Ekim 1923).' },
      ],
      answer: 'a–Saltanat · b–Cumhuriyet · c–Halifelik · d–Ankara.',
      takeaway: 'Neden–sonuç sorularında önce her inkılabın “en yakın sebebini” hatırla; sonra daha genel sebepleri (millî egemenlik) ekle.',
    },
    {
      title: 'Kronolojik sıraya koy',
      prompt: 'Şu gelişmeleri tarih sırasına koy: Cumhuriyet’in ilanı, halifeliğin kaldırılması, saltanatın kaldırılması, Ankara’nın başkent oluşu, 1924 Anayasası.',
      steps: [
        { title: '1', body: 'Saltanatın kaldırılması (1 Kasım 1922).' },
        { title: '2', body: 'Ankara’nın başkent oluşu (13 Ekim 1923).' },
        { title: '3', body: 'Cumhuriyet’in ilanı (29 Ekim 1923).' },
        { title: '4', body: 'Halifeliğin kaldırılması (3 Mart 1924).' },
        { title: '5', body: '1924 Anayasası (20 Nisan 1924).' },
      ],
      answer: 'Saltanat → Ankara → Cumhuriyet → Halifelik → Anayasa.',
      takeaway: 'Ankara’nın başkent oluşu Cumhuriyet’ten 16 gün öncedir. Bu ikisini karıştırma.',
    },
    {
      title: 'Bir inkılabı ilkeyle ilişkilendir',
      prompt: 'Erkân-ı Harbiye-i Umumiye Vekâleti’nin kaldırılıp yerine bakanlar kurulunun dışında bir Genelkurmay Başkanlığı kurulmasını hangi amaçla ve hangi ilkeyle ilişkilendirirsin?',
      steps: [
        { title: 'Değişimi bul', body: 'Ordunun komutası hükümet içindeki bir bakanlıktan alınıp Cumhurbaşkanı adına görev yapan ayrı bir makama verildi.' },
        { title: 'Amacı bul', body: 'Ordunun günlük siyasetin dışında tutulması.' },
        { title: 'İlkeyle bağla', body: 'Siyasetin milletin seçtiği temsilcilere ait olması → Cumhuriyetçilik.' },
      ],
      answer: 'Amaç, ordunun siyasetin dışında tutulmasıdır; bu, siyasi kararların seçilmiş temsilcilere ait olduğu Cumhuriyetçilik anlayışıyla ilişkilidir.',
      takeaway: 'Aynı gün yapılan üç değişikliği birlikte düşün: Din–devlet ayrılığı (Laiklik) ve ordu–siyaset ayrılığı (Cumhuriyetçilik).',
    },
  ],
  questionClue: {
    concept: 'Soruda hangi siyasi inkılaptan söz edildiğini nasıl anlarım?',
    statement: 'Soru bir tarih, bir kanun maddesi ya da bir sonuç verip inkılabı sorabilir.',
    clues: [
      '“Lozan’a iki hükümet”, “Osmanlı Devleti hukuken sona erdi” → Saltanatın kaldırılması',
      '“Makarr-ı idâre”, “merkezî konum”, “İstanbul tartışması” → Ankara’nın başkent oluşu',
      '“Devlet başkanı sorunu”, “hükümet bunalımı”, “şekl-i hükümet” → Cumhuriyet’in ilanı',
      '“Hanedan yurt dışına”, “Diyanet İşleri Reisliği” → 3 Mart 1924 kanunları',
      '“Her Türk hür doğar”, “imtiyazlar yasak” → 1924 Anayasası',
    ],
    reasoning: 'Önce olayın egemenlik, başkent, rejim, din–devlet ya da temel haklar konularından hangisiyle ilgili olduğunu belirle. Sonra tarihine bak.',
    boundary: 'Dikkat: 3 Mart 1924’te aynı gün kabul edilen Tevhid-i Tedrisat Kanunu bir eğitim inkılabıdır; siyasi inkılaplarla aynı gün olsa da ayrı bir derste işlenir.',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'İTA.8.4.2 bir “kavrar” kazanımıdır ve inkılapların neden ve sonuçlarını ister. Sorular bir kanun maddesi, bir Nutuk bölümü ya da bir kronoloji verip çıkarım isteyebilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'İnkılabın nedenini ya da sonucunu belirleme',
      'Siyasi inkılapları kronolojik sıraya koyma',
      'Bir kanun maddesinden çıkarım yapma',
      'Siyasi inkılapları Atatürk ilkeleriyle ilişkilendirme',
    ],
  },
  checkpoints: [
    {
      prompt: 'Saltanat kaldırılırken halifelik neden bir süre daha bırakılmış olabilir?',
      hint: 'O gün halifelik halkın ve Meclis’in bir kısmı için ne anlam taşıyordu?',
      answer: 'Halifelik o gün halkın ve Meclis’in önemli bir kısmı için dinî bir anlam taşıyordu; iki makamın birden kaldırılması büyük bir tepkiye yol açabilirdi. Bu yüzden önce saltanat kaldırılıp halifelikten ayrıldı, halifelik ise ancak Cumhuriyet ilan edildikten ve halifenin davranışları bir sorun hâline geldikten sonra kaldırıldı.',
    },
    {
      prompt: 'Ankara’nın başkent olması neden Cumhuriyet’in ilanından önce kanunlaştırıldı?',
      answer: 'Lozan’dan sonra işgal sona ermiş ve yeni devletin merkezinin neresi olacağı tartışılmaya başlanmıştı. İstanbul’da kalmasını isteyenler vardı. Nutuk’a göre iç ve dış tereddütlere son vermek için başkent kanunla belirlendi; böylece yeni rejim, eski başkentten ayrı bir merkezde kuruldu.',
    },
    {
      prompt: '1924 Anayasası’nın 88. maddesindeki “din ve ırk farkı olmaksızın” ifadesi hangi ilkeyle ilişkilidir?',
      answer: 'Vatandaşlığın din ve soy farkına göre değil, ortak vatandaşlık bağına göre tanımlanması Milliyetçilik ve Laiklik ilkeleriyle, herkesin eşit sayılması da Halkçılıkla ilişkilidir.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.4.2 bir “kavrar” kazanımıdır: Programın açıklaması saltanatın kaldırılması, Ankara’nın başkent oluşu, Cumhuriyet’in ilanı, halifeliğin, Şer’iye ve Evkaf Vekâleti’nin ve Erkân-ı Harbiye Vekâleti’nin kaldırılmasının neden ve sonuçlarının ele alınmasını, 1924 Anayasası’na da değinilmesini ister. Bu kazanıma dayanan bir soru bir kanun maddesi ya da bir olay verip neden ya da sonuç sorabilir.',
    measures: [
      'Siyasi inkılapların nedenlerini açıklama',
      'Siyasi inkılapların sonuçlarını açıklama',
      'İnkılapları kronolojik olarak sıralama',
      '1924 Anayasası’nın temel özelliklerini tanıma',
    ],
  },
  simulation: {
    title: 'Mini LGS: Aynı gün üç kanun',
    passage:
      '3 Mart 1924’te Türkiye Büyük Millet Meclisi aynı gün üç önemli karar aldı: Halifelik kaldırıldı ve Osmanlı hanedanı üyeleri yurt dışına çıkarıldı. Şer’iye ve Evkaf Vekâleti kaldırılarak yerine Başvekâlete bağlı Diyanet İşleri Reisliği kuruldu. Erkân-ı Harbiye-i Umumiye Vekâleti kaldırılarak ordunun komutası bakanlar kurulunun dışında bir makama verildi.',
    question: 'Bu kararların ortak amacı aşağıdakilerden hangisidir?',
    options: [
      { text: 'Cumhuriyet’i güçlendirmek ve devlet yönetimini din ve ordu etkisinden ayırmak', explanation: 'Doğru. Halifelik ve Şer’iye ve Evkaf Vekâleti din ile devleti, Erkân-ı Harbiye Vekâleti ise ordu ile siyaseti iç içe tutuyordu. Üç karar da bu ayrımı hedefler.' },
      { text: 'Dinî hizmetleri tamamen ortadan kaldırmak', explanation: 'Metinde Diyanet İşleri Reisliği’nin kurulduğu açıkça yazıyor; dinî hizmetler kaldırılmadı, yeni bir kurumla yürütüldü.' },
      { text: 'Orduyu küçültmek ve askerî harcamaları azaltmak', explanation: 'Metinde ordunun küçültülmesinden söz edilmiyor; yalnız komutanın hükümetteki yeri değişti.' },
      { text: 'Başkenti İstanbul’dan Ankara’ya taşımak', explanation: 'Başkent 13 Ekim 1923’te zaten Ankara olmuştu; metinde bununla ilgili bilgi yok.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “ortak amaç” diyor. Üç kararın her birinde neyin neyden ayrıldığını bul: din–devlet ve ordu–siyaset.',
    critical_point: 'İkinci seçenek çekicidir, çünkü din ile ilgili iki kurum kaldırılmıştır. Ama metin Diyanet İşleri Reisliği’nin kurulduğunu da söyler.',
    takeaway: '“Ortak amaç” sorularında her kararı ayrı ayrı özetle, sonra ortak noktayı bul.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Saltanattan Cumhuriyete',
    range: 'Kasım 1922–Nisan 1924',
    body:
      'Lozan’a hem Ankara’nın hem İstanbul’un çağrılması üzerine Büyük Millet Meclisi 1 Kasım 1922’de saltanatı kaldırdı ve halifelikten ayırdı; Vahdettin 17 Kasım’da bir İngiliz savaş gemisiyle ülkeden ayrıldı ve Meclis Abdülmecid Efendi’yi halife seçti. 13 Ekim 1923’te Ankara kanunla başkent oldu. Hükümet bunalımı ve devlet başkanı sorunu üzerine 29 Ekim 1923’te Cumhuriyet ilan edildi; Mustafa Kemal oy birliğiyle ilk Cumhurbaşkanı, İsmet Paşa ilk Başbakan oldu. 3 Mart 1924’te halifelik, Şer’iye ve Evkaf Vekâleti ve Erkân-ı Harbiye-i Umumiye Vekâleti kaldırıldı. 20 Nisan 1924’te kabul edilen anayasa, egemenliğin kayıtsız şartsız millete ait olduğunu, yasama ve yürütmenin Meclis’te toplandığını ve bütün vatandaşların kanun önünde eşit olduğunu yazdı.',
    turning_points: [
      '1 Kasım 1922 · Saltanatın kaldırılması',
      '13 Ekim 1923 · Ankara başkent',
      '29 Ekim 1923 · Cumhuriyet',
      '3 Mart 1924 · Halifelik ve iki vekâlet kaldırıldı',
      '20 Nisan 1924 · 1924 Anayasası',
    ],
  },
  summary: [
    '**Saltanat (1 Kasım 1922):** Neden: Lozan’a çifte davet, millî egemenlik. Sonuç: Osmanlı Devleti hukuken sona erdi; halifelik ayrıldı.',
    '**Ankara (13 Ekim 1923):** Neden: coğrafi ve stratejik konum, Millî Mücadele’nin merkezi, başkent tartışması. İsmet Paşa’nın teklifi.',
    '**Cumhuriyet (29 Ekim 1923):** Neden: hükümet bunalımı, devlet başkanı sorunu. Sonuç: Mustafa Kemal Cumhurbaşkanı, İsmet Paşa Başbakan.',
    '**3 Mart 1924:** Halifelik kaldırıldı, hanedan yurt dışına; Şer’iye ve Evkaf Vekâleti yerine Diyanet İşleri Reisliği; Erkân-ı Harbiye Vekâleti yerine Genelkurmay Başkanlığı.',
    '**1924 Anayasası (20 Nisan 1924):** Egemenlik millete; yasama ve yürütme Meclis’te; bağımsız yargı; “Her Türk hür doğar, hür yaşar”; ayrıcalıklar yasak.',
  ],
  quizzes: [
    {
      question: 'Saltanatın kaldırılmasının en yakın sebebi aşağıdakilerden hangisidir?',
      options: ['Lozan Konferansı’na hem Ankara’nın hem İstanbul’un çağrılması', 'Halifenin yurt dışına çıkması', 'Cumhuriyet’in ilan edilmesi', 'Ankara’nın başkent olması'],
      answer_index: 0,
      explanation: 'Nutuk’a göre Lozan’a yapılan “müşterek davet”, saltanatın kaldırılmasını kesinleştirdi. Diğer seçeneklerdeki olaylar saltanatın kaldırılmasından sonradır.',
    },
    {
      question: 'Cumhuriyet’in ilanı ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['Mustafa Kemal oy birliğiyle ilk Cumhurbaşkanı seçilmiştir.', 'Aynı gün halifelik de kaldırılmıştır.', 'Aynı gün Ankara başkent olmuştur.', 'Aynı gün 1924 Anayasası kabul edilmiştir.'],
      answer_index: 0,
      explanation: 'Nutuk’a göre 158 milletvekili oy birliğiyle Mustafa Kemal’i Cumhurbaşkanı seçti. Halifelik 3 Mart 1924’te kaldırıldı, Ankara 13 Ekim 1923’te başkent oldu, anayasa 20 Nisan 1924’te kabul edildi.',
    },
    {
      question: 'Şer’iye ve Evkaf Vekâleti kaldırıldıktan sonra din işleri hangi kuruma verilmiştir?',
      options: ['Diyanet İşleri Reisliği', 'Maarif Vekâleti', 'Genelkurmay Başkanlığı', 'Dahiliye Vekâleti'],
      answer_index: 0,
      explanation: 'Kanun no 429 ile Başvekâlete bağlı Diyanet İşleri Reisliği kuruldu.',
    },
    {
      question: '“Her türlü zümre, sınıf, aile ve fert imtiyazları mülga ve memnudur.” 1924 Anayasası’ndaki bu hüküm en çok hangi ilkeyle ilişkilidir?',
      options: ['Halkçılık', 'Devletçilik', 'İnkılapçılık', 'Laiklik'],
      answer_index: 0,
      explanation: 'Ayrıcalıkların kaldırılması ve kanun önünde eşitlik Halkçılık ilkesinin özüdür.',
    },
    {
      question: 'Aşağıdakilerden hangisi 3 Mart 1924’te kaldırılan kurumlardan biri değildir?',
      options: ['Saltanat', 'Halifelik', 'Şer’iye ve Evkaf Vekâleti', 'Erkân-ı Harbiye-i Umumiye Vekâleti'],
      answer_index: 0,
      explanation: 'Saltanat 1 Kasım 1922’de kaldırılmıştı. Diğer üçü 3 Mart 1924’te kaldırıldı.',
    },
  ],
  next: ['Hukuk, Eğitim ve Kültür Alanında İnkılaplar', 'Toplumsal ve Ekonomik Alanda İnkılaplar'],
})

export default lesson
