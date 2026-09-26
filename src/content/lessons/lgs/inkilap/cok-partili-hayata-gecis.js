import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.7 Atatürk’ün Ölümü ve Sonrası · 3. ders
 * Kazanım : İTA.8.7.5
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   Konu işlenişi, 1946 yılında gerçekleştirilen ilk çok partili genel seçime
 *   değinilerek bitirilir.
 *
 * KAPSAM KARARI
 * Anlatı 21 Temmuz 1946 seçimi ve seçim tutanaklarının Meclis’te görüşülmesiyle
 * (Ağustos 1946) bitirildi; sonraki dönem programın sınırı dışında bırakıldı.
 * Birincil kaynaklar: Dörtlü Takrir (7 Haziran 1945; Vikikaynak metni, I. Tuna
 * 2015’teki BCA alıntılarıyla karşılaştırıldı), İnönü’nün 1 Kasım 1945 söylevi
 * (TBMM Tutanak Dergisi D. VII, C. 20) ve Adnan Menderes’in 26 Ağustos 1946
 * konuşması (D. VIII, C. 1). Menderes’in sözleri muhalefet görüşü olarak
 * etiketlendi; aynı oturumdaki iktidar partisi cevabı özetlendi. 1946 seçiminin
 * il ve ülke düzeyinde oy sayıları yayımlanmadığı için yalnız milletvekili
 * dağılımı verildi (Akandere 2010; AA).
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 25.
 */

const SLUG = 'lgs-tarih-cok-partili-hayata-gecis'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: "Atatürk'ün Ölümü ve Sonrası",
  order: 3,
  title: 'Çok Partili Siyasi Hayata Geçiş',
  subtitle:
    'Bir önerge, bir konuşma, yeni partiler ve tartışmalı bir ilk seçim. Demokrasinin gerekleri 1945–1946’da nasıl konuşuldu ve ne kadarı karşılandı?',
  minutes: 45,
  kazanimlar: ['İTA.8.7.5'],
  kapsamNotu:
    'Anlatı, programın istediği gibi 1946 genel seçimiyle bitirilmiştir. Dörtlü Takrir, İnönü’nün 1 Kasım 1945 söylevi ve Adnan Menderes’in 26 Ağustos 1946 konuşması özgün metinlerinden alıntılanmıştır. Menderes’in sözleri muhalefetin görüşüdür; iktidar partisinin cevabı da ayrıca verilmiştir.',
  prerequisites: [
    {
      topic: 'Demokratikleşme çabaları: Terakkiperver Cumhuriyet Fırkası ve Serbest Cumhuriyet Fırkası',
      why: 'Çok partili hayata geçiş denemeleri 1924 ve 1930’da da yapılmıştı; 1945’te bu deneyimler hatırlandı.',
    },
    {
      topic: 'İkinci Dünya Savaşı ve Türkiye (önceki ders)',
      why: 'Savaşın siyasi, sosyal ve ekonomik etkileri çok partili hayata geçişi hızlandırdı.',
    },
  ],
  outcomes: [
    'Türkiye’de çok partili hayata geçişi hızlandıran iç ve dış gelişmeleri açıklayabileceksin.',
    'Dörtlü Takrir’in isteklerini ve önemini açıklayabileceksin.',
    'Demokrasinin gereklerini sayıp 1945–1946 gelişmelerini bu gereklere göre değerlendirebileceksin.',
    '1946 genel seçiminin nasıl yapıldığını ve neden tartışıldığını açıklayabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Savaş bitti, soru değişti',
    lead:
      'Mayıs 1945’te Avrupa’da savaş sona erdi. Demokrasilerin kazandığı bu savaşın ardından Türkiye’de de tek bir soru öne çıktı: Tek partili yönetim devam edecek mi?',
    body:
      'Türkiye 1925’ten beri, 1930’daki kısa bir deneme dışında, tek parti olan Cumhuriyet Halk Partisi (CHP) tarafından yönetiliyordu. 1924’te kurulan Terakkiperver Cumhuriyet Fırkası 1925’te kapatılmış, 1930’da kurulan Serbest Cumhuriyet Fırkası birkaç ay sonra kendini feshetmişti. Savaş yıllarında ise olağanüstü koşullar gerekçesiyle siyasi hayat daha da sıkı denetim altına alınmıştı.\n\n' +
      '1945’te tablo hızla değişti. İnönü 19 Mayıs 1945’te savaş dönemi tedbirleri kalktıkça siyasi hayatta demokrasinin daha geniş yer alacağını söyledi. Bir ay sonra dört CHP milletvekili demokratik hakların genişletilmesini isteyen bir önerge verdi. Yıl sonuna kadar yeni partiler kuruldu ve Temmuz 1946’da Türkiye ilk çok partili genel seçimini yaptı. Bu derste bu hızlı değişimin nedenlerini ve demokrasinin gerekleri açısından ne kadar ilerlendiğini inceleyeceğiz.',
  },
  concepts: [
    { term: 'Çok partili hayat', body: 'Birden fazla siyasi partinin serbestçe kurulabildiği, seçimlere katılıp iktidar için yarışabildiği siyasi düzen.' },
    { term: 'Muhalefet', body: 'İktidarda olmayan, hükûmeti denetleyen ve eleştiren siyasi taraf.' },
    { term: 'Takrir', body: 'Önerge; bir kurula yazılı olarak sunulan teklif. Dörtlü Takrir, dört milletvekilinin imzasıyla verildi.' },
    { term: 'Tek dereceli seçim', body: 'Seçmenlerin milletvekillerini doğrudan seçtiği seçim. Daha önce seçmenler önce ikinci seçmenleri, onlar da milletvekillerini seçiyordu.' },
    { term: 'Açık oy, gizli tasnif', body: '1946 seçimini eleştirenlerin kullandığı ifade: Oyun başkalarının görebileceği koşullarda verilmesi, sayımın ise herkese açık ve denetlenebilir biçimde yapılmaması.' },
    { term: 'Demokrasinin gerekleri', body: 'Serbest ve gizli oyla seçim, açık sayım, birden fazla parti, söz ve basın özgürlüğü, Meclis denetimi, hukukun üstünlüğü gibi temel şartlar.' },
  ],
  why: {
    question: 'Çok partili hayata geçiş neden 1945’te hızlandı?',
    body:
      'Tek bir nedeni yoktur; iç ve dış gelişmeler birbirini güçlendirdi. Dışarıda, İkinci Dünya Savaşı’nı demokrasiler kazanmıştı ve tek parti yönetimleri itibar kaybediyordu. Türkiye, Birleşmiş Milletler’in kurucu üyesi olmuştu; Sovyet tehdidi karşısında da Batı demokrasileriyle yakınlaşmak istiyordu.\n\n' +
      'İçeride, savaş yıllarının ekonomik sıkıntıları, hayat pahalılığı, karaborsa ve vergilerdeki adaletsizlikler halkın ve bazı milletvekillerinin hükûmete yönelik eleştirilerini artırmıştı. Meclis’te toprak reformu ve bütçe tartışmalarında bir muhalefet oluşmaya başladı. Cumhurbaşkanı İnönü de çok partili hayata açık olduğunu gösteren konuşmalar yaptı. Bu gelişmeler birleşince değişim kaçınılmaz hâle geldi.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Tek partiden çok partiye (1945–1946)',
    lead: 'Kronoloji, Mayıs 1945’ten Ağustos 1946’ya kadar geçen yaklaşık on beş ayı gösterir.',
    intro: 'Önceki denemeler için ilk iki maddeye, 1945–1946 için diğerlerine bak.',
    items: [
      { title: '1924–1925 · Terakkiperver Cumhuriyet Fırkası', body: 'Cumhuriyet’in ilk muhalefet partisi; 1925’te kapatıldı.' },
      { title: '1930 · Serbest Cumhuriyet Fırkası', body: 'Atatürk’ün isteğiyle kuruldu; birkaç ay sonra kendini feshetti.' },
      { title: '19 Mayıs 1945 · İnönü’nün konuşması', body: 'İnönü, savaş dönemi tedbirleri kalktıkça siyasi hayatta demokrasinin daha geniş yer alacağını söyledi.' },
      { title: '7 Haziran 1945 · Dörtlü Takrir', body: 'Celal Bayar, Adnan Menderes, Refik Koraltan ve Fuat Köprülü, demokratik hakların genişletilmesini isteyen önergeyi CHP Meclis Grubuna verdi.' },
      { title: '11 Haziran 1945 · Çiftçiyi Topraklandırma Kanunu', body: 'Topraksız çiftçiye toprak verilmesini öngören kanun, Meclis’te sert tartışmalarla kabul edildi.' },
      { title: '12 Haziran 1945 · Takrir reddedildi', body: 'CHP Meclis Grubu önergeyi reddetti; imza sahipleri görüşlerini basında savunmayı sürdürdü.' },
      { title: '26 Haziran 1945 · Birleşmiş Milletler Antlaşması', body: 'Türkiye, insan haklarına ve temel özgürlüklere saygıyı vurgulayan antlaşmayı kurucu üye olarak imzaladı.' },
      { title: '1945 · Millî Kalkınma Partisi', body: 'Nuri Demirağ’ın kurduğu parti, çok partili döneme geçişte kurulan ilk muhalefet partisi oldu (başvuru 18 Temmuz, onay 5 Eylül 1945).' },
      { title: '1 Kasım 1945 · “Tek eksiğimiz”', body: 'İnönü Meclis’te, Türkiye’deki tek eksikliğin hükûmet partisi karşısında bir parti olmaması olduğunu söyledi.' },
      { title: '7 Ocak 1946 · Demokrat Parti', body: 'Dörtlü Takrir’in sahipleri Demokrat Parti’yi kurdu; genel başkan Celal Bayar oldu.' },
      { title: '5 Haziran 1946 · Tek dereceli seçim', body: 'Yeni Milletvekilleri Seçimi Kanunu ile seçmenler milletvekillerini doğrudan seçecekti.' },
      { title: '21 Temmuz 1946 · İlk çok partili genel seçim', body: 'Seçim öne alınarak yapıldı. CHP 397, DP 61, bağımsızlar 7 milletvekilliği kazandı; seçim usulü ve sonuçları tartışıldı.' },
    ],
    takeaway:
      'Dikkat et: İnönü Kasım 1945’te seçimin 1947’de yapılacağını söylemişti. Seçim öne alınarak Temmuz 1946’da yapıldı. Değişimin hızı, dönemin baskı ve beklentilerini gösterir.',
    body:
      'Kronolojide iki çizgi yan yana ilerler. Birincisi **muhalefetin doğuşudur**: Meclis’teki tartışmalar, Dörtlü Takrir, takririn reddi, imza sahiplerinin partiden ayrılması ve Demokrat Parti’nin kuruluşu. İkincisi **iktidarın açılımıdır**: İnönü’nün konuşmaları, yeni partilerin kurulmasına izin verilmesi ve seçimlerin tek dereceli hâle getirilmesi.\n\n' +
      'Bu iki çizgi 21 Temmuz 1946’da buluştu. Türkiye ilk kez birden fazla partinin katıldığı bir genel seçim yaptı. Ancak seçimin yapılış biçimi, demokrasinin gereklerinin henüz tam karşılanmadığını da gösterdi. Seçim tutanakları Ağustos 1946’da Meclis’te görüşülürken iktidar ve muhalefet sert biçimde tartıştı.',
  },
  dataTable: {
    title: 'Demokrasinin gerekleri ve 1945–1946 gelişmeleri',
    columns: ['Demokrasinin gereği', '1945–1946’da ne oldu?', 'Değerlendirme'],
    rows: [
      ['Birden fazla partinin serbestçe kurulması', 'Millî Kalkınma Partisi (1945) ve Demokrat Parti (1946) kuruldu', 'Karşılandı'],
      ['Milletin temsilcilerini doğrudan seçmesi', '1946 kanunu ile seçim tek dereceli oldu', 'Karşılandı'],
      ['Gizli oy, açık ve denetlenebilir sayım', 'Seçim, eleştirmenlerin “açık oy, gizli tasnif” dediği koşullarda yapıldı', 'Karşılanmadı'],
      ['Söz, basın ve örgütlenme özgürlüğü', 'İnönü söz ve yazı özgürlüğünü demokrasinin ortak temeli saydı; kısıtlayıcı kanunların değiştirilmesini istedi', 'Kısmen'],
      ['Meclis denetimi ve muhalefet', 'Dörtlü Takrir Meclis denetimini istedi; 1946’da Meclis’e muhalefet milletvekilleri girdi', 'Başladı'],
      ['Seçim sonuçlarına toplumun güveni', 'Muhalefet seçimde yolsuzluk olduğunu savundu; iktidar iddiaları kanıtlanmamış buldu', 'Tartışmalı'],
    ],
    caption:
      'Tablo, İTA.8.7.5’in istediği analizi yapar: Gelişmeleri demokrasinin gerekleri açısından değerlendirir. 1946 seçimi önemli bir adımdı ama bütün gerekleri karşılamadı.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Çok partili hayata geçiş: sebep, gelişme, sonuç',
    lead: 'Zincir, çok partili hayata geçişi hızlandıran gelişmeleri ve 1946 seçimini gösterir.',
    intro: 'Sebepler dış ve iç olarak ikiye ayrılır; gelişmeler 1945–1946’da hızla birbirini izler.',
    steps: [
      { tur: 'sebep', title: 'Dış ortam', body: 'Savaşı demokrasiler kazandı; Türkiye BM’nin kurucu üyesi oldu ve Sovyet tehdidine karşı Batı ile yakınlaşmak istedi.' },
      { tur: 'sebep', title: 'Savaş yıllarının sıkıntıları', body: 'Hayat pahalılığı, karaborsa ve vergilerdeki adaletsizlikler hoşnutsuzluğu artırdı.' },
      { tur: 'sebep', title: 'Meclis içindeki tartışmalar', body: 'Toprak reformu ve bütçe görüşmelerinde bir grup milletvekili hükûmeti açıkça eleştirdi.' },
      { tur: 'gelisme', title: 'Dörtlü Takrir ve İnönü’nün tutumu', body: 'Takrir reddedildi ama tartışma kamuoyuna taşındı; İnönü yeni partilerin kurulmasına açık olduğunu söyledi.' },
      { tur: 'gelisme', title: 'Yeni partiler ve yeni seçim kanunu', body: 'Millî Kalkınma Partisi (1945) ve Demokrat Parti (1946) kuruldu; seçim tek dereceli oldu.' },
      { tur: 'sonuc', title: '21 Temmuz 1946 seçimi', body: 'Türkiye ilk çok partili genel seçimini yaptı; muhalefet Meclis’e girdi.' },
      { tur: 'sonraki-etki', title: 'Demokrasinin gerekleri tartışması', body: 'Seçimin “açık oy, gizli tasnif” koşullarında yapılması gizli oy ve açık sayım isteğini güçlendirdi; seçim güvenliği sonraki yılların temel tartışma konusu oldu.' },
    ],
    inference:
      'Temel çıkarım: Çok partili hayata geçiş, dış ortamın ve iç sıkıntıların birlikte yarattığı bir değişimdi. 1946 seçimi demokrasiye doğru önemli bir adımdı ama demokrasinin bütün gereklerini henüz karşılamıyordu.',
    body:
      'Bu konuda iki tek yönlü anlatıdan kaçınmak gerekir. Birincisi “çok partili hayat yalnızca dış baskıyla geldi” anlatısıdır; oysa Meclis’teki muhalefet, halkın sıkıntıları ve İnönü’nün tutumu da belirleyiciydi. İkincisi “1946’da demokrasi tamamlandı” anlatısıdır; oysa seçimin yapılış biçimi ciddi eleştirilere konu oldu.\n\n' +
      'Dengeli bir değerlendirme şöyle olabilir: 1945–1946’da Türkiye, birden fazla partinin kurulabildiği ve milletin temsilcilerini doğrudan seçtiği bir düzene geçti. Ancak oyların gizliliği, sayımın denetlenebilirliği ve seçim sonuçlarına toplumun güveni gibi gerekler henüz sağlanamamıştı.',
  },
  comparison: {
    title: 'Önceki denemeler ve 1945–1946',
    columns: ['1924 ve 1930 denemeleri', '1945–1946 geçişi'],
    rows: [
      { label: 'Partiler', values: ['Terakkiperver Cumhuriyet Fırkası (1924), Serbest Cumhuriyet Fırkası (1930)', 'Millî Kalkınma Partisi (1945), Demokrat Parti (1946)'] },
      { label: 'Dış ortam', values: ['Avrupa’da tek parti ve otoriter yönetimler güçleniyordu', 'Savaşı demokrasiler kazanmıştı; BM kurulmuştu'] },
      { label: 'Karşılaşılan sorun', values: ['Rejime yönelik tepkiler ve güvenlik kaygıları: 1925’te Şeyh Said İsyanı; 1930’da Serbest Fırka çevresinde yaşanan sert gerginlikler', 'Seçim usulünün demokratik olmaması, seçim güvenliği tartışması'] },
      { label: 'Sonuç', values: ['Kısa sürede sona erdi; tek parti yönetimi sürdü', 'Muhalefet kalıcı oldu ve Meclis’e girdi'] },
    ],
    insight:
      'İnönü de 1945’te önceki iki denemeyi hatırlatıp bunların başarısızlığını “talihsizlik” olarak niteledi. Farkı yaratan en önemli etken, 1945’teki uluslararası ortam ve muhalefetin kalıcı bir parti olarak örgütlenmesiydi.',
  },
  traps: [
    {
      title: 'İlk muhalefet partisini karıştırmak',
      wrong: 'Türkiye Cumhuriyeti’nin ilk muhalefet partisi Demokrat Parti’dir.',
      right: 'Cumhuriyet’in ilk muhalefet partisi Terakkiperver Cumhuriyet Fırkası’dır (1924). 1945’te çok partili döneme geçişte kurulan ilk parti Millî Kalkınma Partisi’dir. Demokrat Parti 7 Ocak 1946’da kuruldu.',
      body: 'Soruda “Cumhuriyet’in ilk” mi, “1945 sonrası ilk” mi sorulduğuna dikkat et.',
    },
    {
      title: '1946’da iktidarın değiştiğini sanmak',
      wrong: '1946 seçimlerini Demokrat Parti kazandı.',
      right: '1946 seçimlerinde CHP 397, DP 61, bağımsızlar 7 milletvekilliği kazandı. CHP iktidarda kaldı.',
      body: 'Program konuyu 1946 seçimiyle bitirir; sonraki gelişmeler bu dersin dışındadır.',
    },
    {
      title: '1946 seçimini tam demokratik saymak',
      wrong: '1946 seçimi demokrasinin bütün gereklerine uygun yapıldı.',
      right: 'Seçim çok partili ve tek dereceliydi ama oy verme ve sayma usulü eleştirildi (“açık oy, gizli tasnif”). Muhalefet yolsuzluk olduğunu savundu.',
      body: 'Demokrasinin gerekleri sorulduğunda gizli oy ve açık sayımı unutma.',
    },
    {
      title: 'Tek bir nedene bağlamak',
      wrong: 'Türkiye çok partili hayata yalnızca ABD’nin baskısı yüzünden geçti.',
      right: 'Dış ortam (savaşın sonucu, BM, Batı ile yakınlaşma) ile iç gelişmeler (ekonomik sıkıntılar, Meclis’teki muhalefet, Dörtlü Takrir, İnönü’nün tutumu) birlikte etkili oldu.',
      body: 'Program, geçişi “hızlandıran gelişmeleri” analiz etmeni ister; birden fazla gelişme vardır.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Geçişin kişileri',
    lead: 'İktidarın başındaki cumhurbaşkanı, muhalefeti örgütleyenler ve ilk muhalefet partisinin kurucusu.',
    intro: 'Kartlarda her kişinin 1945–1946’daki kararlarını görürsün.',
    figures: [
      {
        name: 'İsmet İnönü',
        period: '1938–1950 · Cumhurbaşkanı',
        position: 'Cumhurbaşkanı ve CHP Genel Başkanı',
        contribution: '1945’te yaptığı konuşmalarla çok partili hayata açık olduğunu gösterdi; 1 Kasım 1945’te hükûmet partisi karşısında bir partinin olmamasını “tek eksiğimiz” olarak niteledi.',
        connections: ['19 Mayıs 1945 konuşması', '1 Kasım 1945 söylevi'],
        significance: 'İktidarın başında olduğu hâlde muhalefetin kurulmasının yolunu açtı.',
      },
      {
        name: 'Celal Bayar',
        period: '1946 · Demokrat Parti Genel Başkanı',
        position: 'İzmir milletvekili; eski başbakan',
        contribution: 'Dörtlü Takrir’i imzaladı; CHP’den ayrıldıktan sonra 7 Ocak 1946’da Demokrat Parti’yi kurup genel başkanı oldu.',
        connections: ['Dörtlü Takrir', 'Demokrat Parti'],
        significance: 'Yeni muhalefet partisinin lideridir.',
      },
      {
        name: 'Adnan Menderes',
        period: '1945–1946',
        position: 'Aydın milletvekili; 1946’da Kütahya’dan seçildi',
        contribution: 'Çiftçiyi Topraklandırma Kanunu’na ve bütçeye karşı çıktı; Dörtlü Takrir’i imzaladı. Fuat Köprülü ile birlikte CHP’den çıkarıldı (21 Eylül 1945). 1946 seçiminden sonra Meclis’te seçim yolsuzluklarını dile getirdi.',
        connections: ['Dörtlü Takrir', 'Demokrat Parti', '1946 seçim tartışmaları'],
        significance: 'Meclis içindeki muhalefetin en güçlü seslerindendir.',
      },
      {
        name: 'Nuri Demirağ',
        period: '1945 · Millî Kalkınma Partisi',
        position: 'İş insanı ve sanayici',
        contribution: '1945’te Millî Kalkınma Partisi’ni kurdu; parti programında tek dereceli seçim gibi öneriler yer aldı.',
        connections: ['Millî Kalkınma Partisi'],
        significance: 'Çok partili döneme geçişte kurulan ilk muhalefet partisinin kurucusudur.',
      },
    ],
    takeaway:
      'Çok partili hayata geçişte hem iktidarın hem muhalefetin kararları belirleyici oldu. Muhalefet istedi, iktidarın başındaki İnönü de bu yolu açtı.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-hizlandiran`,
      title: 'Geçişi hızlandıran gelişmeler',
      lead: 'İTA.8.7.5, çok partili hayata geçişi hızlandıran gelişmeleri demokrasinin gerekleri açısından analiz etmeni ister. Önce gelişmeleri bir zincir olarak gör.',
      blocks: [
        {
          id: `${SLUG}-hizlandiran-harita`,
          type: 'concept_map',
          title: 'Hızlandıran gelişmeler zinciri',
          intro: 'Soldan sağa ilerle. Her halka bir sonrakini güçlendirdi. Kutulara dokununca ayrıntıları okursun.',
          nodes: [
            { id: 'dis', label: 'Değişen dünya', detail: 'Savaşı demokrasiler kazandı; BM Antlaşması (26 Haziran 1945) insan haklarını ve temel özgürlükleri vurguladı; Türkiye Batı ile yakınlaşmak istiyordu.' },
            { id: 'ic', label: 'İç sıkıntılar', detail: 'Savaş yıllarının hayat pahalılığı, karaborsa ve vergilerdeki adaletsizlikler hoşnutsuzluk yarattı.' },
            { id: 'meclis', label: 'Meclis’te eleştiri', detail: 'Çiftçiyi Topraklandırma Kanunu ve bütçe görüşmelerinde bazı milletvekilleri hükûmeti açıkça eleştirdi.' },
            { id: 'takrir', label: 'Dörtlü Takrir', detail: '7 Haziran 1945: Meclis denetimi, siyasi hak ve özgürlükler, parti çalışmalarının yeniden düzenlenmesi istendi.' },
            { id: 'partiler', label: 'Yeni partiler', detail: 'Millî Kalkınma Partisi (1945), Demokrat Parti (7 Ocak 1946).' },
            { id: 'secim', label: '1946 seçimi', detail: '21 Temmuz 1946: ilk çok partili genel seçim; tek dereceli ama “açık oy, gizli tasnif” koşullarında.' },
          ],
          links: [
            { from: 'dis', to: 'ic', label: 'beklentiler yükseldi' },
            { from: 'ic', to: 'meclis', label: 'eleştiri Meclis’e taşındı' },
            { from: 'meclis', to: 'takrir', label: 'muhalefet ortak istek yazdı' },
            { from: 'takrir', to: 'partiler', label: 'ret, yeni partiyi doğurdu' },
            { from: 'partiler', to: 'secim', label: 'partiler sandığa gitti' },
          ],
          caption: 'Zincirde İnönü’nün tutumu ayrı bir halka olarak gösterilmedi ama her aşamada etkiliydi: 1945 konuşmaları muhalefeti cesaretlendirdi, yeni partilerin kurulmasına izin verildi.',
        },
        {
          id: `${SLUG}-hizlandiran-anlatim`,
          type: 'prose',
          body:
            '**Dörtlü Takrir neden önemlidir?** Takrir, tek parti içinden yükselen güçlü ve yazılı bir demokrasi isteğiydi. İmza sahipleri Cumhuriyet’e ya da Atatürk’e karşı çıkmıyor, tam tersine 1921 ve 1924 anayasalarının “demokratik ruhu”na ve Atatürk’ün idealine dayanıyordu. Üç istekleri vardı: Meclis denetiminin anayasanın ruhuna uygun işlemesi, vatandaşların siyasi hak ve özgürlüklerini kullanabilmesi ve parti çalışmalarının bu esaslara göre yeniden düzenlenmesi.\n\n' +
            '**İnönü’nün tutumu neden önemlidir?** İktidarın başındaki kişinin muhalefete kapıyı açması, geçişin barışçı olmasını sağladı. İnönü 1 Kasım 1945’te önceki iki denemenin başarısızlığını “talihsizlik” olarak nitelendirdi ve yeni partilerin kurulabileceğini söyledi. Ayrıca söz ve yazı özgürlüğünü “her halk idaresinin söz götürmez ortak temeli” saydı.\n\n' +
            '**1946 seçimi neden tartışıldı?** Seçim çok partili ve tek dereceliydi; bu iki yön önemli ilerlemelerdi. Ama oy verilirken gizliliğin korunmadığı, sayımın ise muhalefetin denetimine açık olmadığı ileri sürüldü. Bu yüzden eleştirmenler seçimi “açık oy, gizli tasnif” diye tanımladı. Ülke ve il düzeyinde ayrıntılı oy sayılarının yayımlanmaması da güvensizliği artırdı. Seçim tutanakları Meclis’te görüşülürken muhalefet yolsuzluk iddialarını dile getirdi, iktidar partisi ise bu iddiaların kanıtlanmadığını savundu.',
        },
        {
          id: `${SLUG}-hizlandiran-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: 7 Haziran – 1 Kasım – 7 Ocak – 21 Temmuz',
          body: '7 Haziran 1945 Dörtlü Takrir · 1 Kasım 1945 “tek eksiğimiz” · 7 Ocak 1946 Demokrat Parti · 21 Temmuz 1946 ilk çok partili seçim.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste üç belge okuyacaksın: Dörtlü Takrir, İnönü’nün 1 Kasım 1945 söylevi ve 1946 seçimi üzerine Meclis’te yapılan bir muhalefet konuşması. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Üç belge de özgün yazımıyla verilmiştir; eski kelimelerin anlamları adımlarda açıklanır. Üçüncü belge bir muhalefet milletvekilinin görüşüdür; aynı oturumda iktidar partisinin verdiği cevap da adımlarda özetlenmiştir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Dörtlü Takrir, 7 Haziran 1945',
        kunye: 'Celal Bayar, Refik Koraltan, Adnan Menderes ve Fuat Köprülü’nün CHP Meclis Grubu Başkanlığına verdiği önerge, 7 Haziran 1945. Metin: Vikikaynak; aynı ifadeler I. Tuna (2015, ÇTTAD) tarafından Cumhuriyet Arşivi belgesinden aktarılmıştır.',
        nitelik: 'Birebir alıntı. (…) işareti atlanan bölümleri gösterir.',
        metin:
          'Bütün dünyada hürriyet ve demokrasi cereyanlarının tam bir zafer kazandığı, demokratik hürriyetlere riayet prensibinin milletlerarası teminata bağlanmak üzere bulunduğu şu günlerde (…)\n\n1. Milli hâkimiyetin en tabii neticesi ve aynı zamanda dayanağı olan Meclis murakabesini, Anayasamızın yalnız şekline değil, ruhuna da tamamıyla uygun olarak tecellisini sağlayacak tedbirlerin aranması.\n\n2. Yurttaşların siyasi hak ve hürriyetlerinin, daha ilk Teşkilat-ı Esasiye Kanunumuzun gerektirdiği kullanılabilme imkânlarının sağlanması.\n\n3. Bütün Parti çalışmalarının, yukarıdaki esaslara tamamıyla uygun bir şekilde yeni baştan tanzimi.',
        soru: 'Takririn istekleri demokrasinin hangi gerekleriyle ilgilidir? Takrir sahipleri dünyadaki hangi gelişmeye dayanıyor?',
        adimlar: [
          { title: 'Eski kelimeleri çöz', body: 'cereyan = akım · riayet = uyma · teminat = güvence · murakabe = denetim · tecelli = ortaya çıkma · tanzim = düzenleme.' },
          { title: 'İstekleri demokrasiyle eşleştir', body: '1. madde → Meclis denetimi · 2. madde → siyasi hak ve özgürlükler · 3. madde → parti yapısının demokratikleşmesi.' },
          { title: 'Dış gelişmeyi bul', body: '“Bütün dünyada hürriyet ve demokrasi cereyanlarının tam bir zafer kazandığı” günler: savaşın demokrasilerin zaferiyle bitmesi ve BM’nin kurulması.' },
        ],
        cevap: 'Takrir; Meclis denetimi, siyasi hak ve özgürlükler ve partinin demokratik esaslara göre yeniden düzenlenmesi isteklerini içerir. Takrir sahipleri, savaşın demokrasilerin zaferiyle bitmesine ve demokratik özgürlüklerin uluslararası güvenceye bağlanmak üzere olmasına dayanır.',
        cikarim: 'Takrir, çok partili hayata geçişi hızlandıran iç ve dış etkenleri aynı metinde birleştirir: Dünyadaki demokrasi rüzgârı ile Türkiye’deki anayasal hakların tam kullanılması isteği.',
      },
      {
        tur: 'birincil',
        baslik: 'İnönü, 1 Kasım 1945: “Bizim tek eksiğimiz”',
        kunye: 'Cumhurbaşkanı İsmet İnönü’nün söylevi, TBMM Tutanak Dergisi, Dönem VII, Cilt 20, 1. birleşim, 1 Kasım 1945.',
        nitelik: 'Birebir alıntı (özgün yazım; PDF tarama hataları düzeltilmiştir). (…) işareti atlanan bölümleri gösterir.',
        metin:
          'Bizim tek eksiğimiz, Hükümet Partisinin karşısında bir parti bulunmamasıdır. Bu yolda, memlekette geçmiş tecrübeler vardır. Hattâ iktidarda bulunanlar tarafından teşvik olunarak teşebbüse girişilmiştir. İki defa memlekette çıkan tepkiler karşısında teşebbüsün muvaffak olmaması bir talihsizliktir. Fakat memleketin ihtiyaçları şevkiyle, hürriyet ve demokrasi havasının tabiî işlemesi sayesinde, başka siyasi partinin de kurulması mümkün olacaktır. (…)\n\nSöz ve yazı hürriyeti, şüphe yoktur ki, her halk idaresinin söz götürmez ortak temelidir. (…)\n\nTek dereceli olmasını dilediğimiz 1947 seçiminde, milletin çoklukla vereceği oylar gelecek iktidarı tâyin edecektir.',
        soru: 'İnönü Türk demokrasisinin eksiğini nasıl tanımlıyor? Konuşmada demokrasinin hangi gereklerinden söz ediliyor?',
        adimlar: [
          { title: 'Eski kelimeleri çöz', body: 'teşebbüs = girişim · muvaffak olmak = başarılı olmak · halk idaresi = demokrasi · tâyin etmek = belirlemek.' },
          { title: 'Eksiği bul', body: 'Hükûmet partisinin karşısında bir parti bulunmaması: muhalefet eksikliği.' },
          { title: 'Önceki denemeleri tanı', body: '“İki defa” yapılan girişim: Terakkiperver Cumhuriyet Fırkası (1924) ve Serbest Cumhuriyet Fırkası (1930).' },
          { title: 'Gerekleri listele', body: 'Birden fazla parti; söz ve yazı özgürlüğü; tek dereceli seçim; iktidarın milletin çoğunluk oyuyla belirlenmesi.' },
        ],
        cevap: 'İnönü, Türk demokrasisinin tek eksiğinin hükûmet partisi karşısında bir parti olmaması olduğunu söyler. Konuşmada demokrasinin şu gereklerinden söz edilir: birden fazla parti, söz ve yazı özgürlüğü, tek dereceli seçim ve iktidarın milletin oylarıyla belirlenmesi.',
        cikarim: 'İktidarın başındaki kişinin muhalefetin kurulmasını istemesi, geçişin barışçı biçimde gerçekleşmesinde önemli bir etkendi. Dikkat: İnönü seçimin 1947’de yapılacağını söylemişti; seçim öne alınarak 1946’da yapıldı.',
      },
      {
        tur: 'birincil',
        baslik: 'Menderes, 26 Ağustos 1946: bir muhalefet görüşü',
        kunye: 'Adnan Menderes’in (Kütahya) seçim tutanaklarının görüşülmesi sırasındaki konuşması, TBMM Tutanak Dergisi, Dönem VIII, Cilt 1, 6. birleşim, 26 Ağustos 1946, s. 202–203.',
        nitelik: 'Birebir alıntı (özgün yazım; PDF tarama hataları düzeltilmiştir). Bir muhalefet milletvekilinin görüşüdür.',
        metin:
          'Muhterem arkadaşlar; kim ne derse desin 21 Temmuz tarihinde yapılan milletvekili seçimlerinde birçok yolsuzluklar ve kanunsuzluklar olduğu hakkında teessüs eden kanaat umumidir. (…) Bu itibarla denilebilir ki, mazbatalarını tetkik ve müzakere etmekte olduğumuz son milletvekili seçimlerinin millî iradeyi tecelli ettiremediğine dair olan en hakikî delil, Türk Milletinin vicdanında yerleşmiş olan bu kanaattir. İktidar Partisinin Sayın Genelbaşkanı İnönünün son seçim nutkunda bu hakikat şöylece ifade olunmuştu: «Dâvanın esası milletin serbest iradesinin meydana çıktığına milletin kendisinin inanmasıdır.»',
        soru: 'Menderes 1946 seçimini nasıl değerlendiriyor? İnönü’den yaptığı alıntı demokrasinin hangi gereğini vurgular?',
        adimlar: [
          { title: 'Eski kelimeleri çöz', body: 'teessüs etmek = yerleşmek · kanaat = görüş, inanç · umumî = genel · mazbata = seçim sonucunu gösteren resmî belge · millî irade = milletin isteği.' },
          { title: 'Değerlendirmeyi bul', body: 'Seçimde yolsuzluk ve kanunsuzluk olduğu kanaati geneldir; seçim millî iradeyi yansıtmamıştır.' },
          { title: 'Alıntıyı yorumla', body: 'Demokrasinin gereği yalnız seçim yapmak değil, milletin seçimin serbest olduğuna inanmasıdır: seçim sonuçlarına güven.' },
          { title: 'Öbür tarafı da dinle', body: 'Aynı oturumda iktidar partisinden Trabzon milletvekili Faik Ahmet Barutçu, Trabzon seçimi için sunulan şikâyet belgelerinin seçim kanununa göre tutulmuş resmî tutanaklar olmadığını, bir kısmının imzasız ya da tarihsiz olduğunu söyleyerek iddiaların kanıtlanmadığını savundu.' },
        ],
        cevap: 'Menderes, seçimde yolsuzluk ve kanunsuzluk yapıldığı kanaatinin genel olduğunu ve seçimin millî iradeyi yansıtmadığını savunur. İnönü’den yaptığı alıntı, seçim sonuçlarına toplumun güvenmesinin demokrasinin temel gereği olduğunu vurgular. İktidar partisi ise bu iddiaların kanıtlanmadığını savunmuştur.',
        cikarim: 'Bir tartışmalı olayı değerlendirirken iki tarafın da görüşünü okumak gerekir. Tartışmanın kendisi, 1946’da seçim güvenliğinin henüz sağlanamadığını ve demokrasinin gereklerinin tam karşılanmadığını gösterir.',
      },
      {
        tur: 'ikincil',
        baslik: 'Bir değerlendirme: “Yalnızca dış baskı”',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Tek nedenli bir açıklamayı göstermek için yazılmıştır.',
        metin:
          'Türkiye 1946’da ilk çok partili genel seçimini yaptı. Bu değişimin tek nedeni, savaştan sonra ABD ve İngiltere’nin Türkiye’ye yaptığı baskıdır; Türkiye’nin içinde değişim isteyen kimse yoktu.',
        soru: 'Metindeki olguyu ve yorumu ayır. Yorum bu dersteki birincil kaynaklarla uyumlu mu?',
        adimlar: [
          { title: 'Olguyu ayır', body: 'Türkiye’nin 1946’da ilk çok partili genel seçimi yapması olgudur.' },
          { title: 'Yorumu ayır', body: '“Tek nedeni dış baskıdır”, “içinde değişim isteyen kimse yoktu” yorumdur.' },
          { title: 'Birincil kaynaklarla sına', body: 'Dörtlü Takrir (dört milletvekilinin isteği) ve İnönü’nün 1945 söylevi, Türkiye’nin içinden de güçlü değişim istekleri olduğunu gösterir.' },
        ],
        cevap: 'Olgu: 1946’da ilk çok partili genel seçimin yapılması. Yorum: değişimin tek nedeninin dış baskı olduğu ve içeride değişim isteyen kimse olmadığı. Yorum birincil kaynaklarla uyumlu değildir; Dörtlü Takrir ve İnönü’nün söylevi iç değişim isteklerinin de güçlü olduğunu gösterir.',
        cikarim: 'Dış ortam önemli bir etkendi ama tek etken değildi. Tek nedenli açıklamalar, “tek nedeni”, “kimse yoktu” gibi kesin ifadelerle kendini ele verir.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Gelişmeleri iç ve dış olarak ayır',
      prompt: 'Şu gelişmeleri iç ve dış etkenler olarak sınıflandır: savaşın demokrasilerin zaferiyle bitmesi, Dörtlü Takrir, BM Antlaşması, savaş yıllarının hayat pahalılığı, Sovyet tehdidi karşısında Batı ile yakınlaşma isteği, Çiftçiyi Topraklandırma Kanunu tartışmaları.',
      steps: [
        { title: 'Dış etkenler', body: 'Savaşın demokrasilerin zaferiyle bitmesi; BM Antlaşması; Batı ile yakınlaşma isteği.' },
        { title: 'İç etkenler', body: 'Dörtlü Takrir; hayat pahalılığı; toprak kanunu tartışmaları.' },
        { title: 'Bağlantıyı kur', body: 'Dış ortam, içerideki değişim isteklerini güçlendirdi.' },
      ],
      answer: 'Dış: savaşın sonucu, BM Antlaşması, Batı ile yakınlaşma · İç: Dörtlü Takrir, hayat pahalılığı, toprak kanunu tartışmaları.',
      takeaway: '“Hızlandıran gelişmeler” sorusunda hem iç hem dış etkenleri yaz.',
    },
    {
      title: '1946 seçimini demokrasinin gerekleriyle değerlendir',
      prompt: '1946 seçiminin demokrasinin gereklerine uygun yönlerini ve eksik yönlerini belirt.',
      steps: [
        { title: 'Uygun yönler', body: 'Birden fazla parti yarıştı; seçim tek dereceliydi.' },
        { title: 'Eksik yönler', body: 'Oyların gizliliği ve sayımın denetlenebilirliği sağlanmadı (“açık oy, gizli tasnif”); sonuçlara güven tartışmalı oldu.' },
        { title: 'Sonuç', body: 'Önemli bir adım ama tamamlanmış bir demokrasi değil.' },
      ],
      answer: 'Uygun: çok partili ve tek dereceli seçim. Eksik: gizli oy ve açık sayım yoktu; seçim güvenliği tartışmalıydı.',
      takeaway: 'Demokrasinin gerekleri sorularında yalnız “seçim yapıldı mı?” değil, “seçim nasıl yapıldı?” diye de sor.',
    },
    {
      title: 'Doğru partiyi bul',
      prompt: 'Aşağıdaki bilgilerin hangi partiye ait olduğunu belirt: (a) 1924’te kuruldu, 1925’te kapatıldı; (b) 1945’te Nuri Demirağ kurdu; (c) 7 Ocak 1946’da Dörtlü Takrir’in sahipleri kurdu.',
      steps: [
        { title: '(a)', body: 'Terakkiperver Cumhuriyet Fırkası.' },
        { title: '(b)', body: 'Millî Kalkınma Partisi.' },
        { title: '(c)', body: 'Demokrat Parti.' },
      ],
      answer: '(a) Terakkiperver Cumhuriyet Fırkası · (b) Millî Kalkınma Partisi · (c) Demokrat Parti.',
      takeaway: 'Partileri kuruluş yıllarıyla birlikte öğren: 1924 – 1930 – 1945 – 1946.',
    },
  ],
  questionClue: {
    concept: 'Soruda hangi gelişmeden ya da hangi demokratik gerekten söz ediliyor?',
    statement: 'Bu kazanımdaki sorular bir gelişmeyi verip onun demokrasinin hangi gereğiyle ilgili olduğunu sorabilir.',
    clues: [
      '“Meclis murakabesi”, “siyasi hak ve hürriyetler” → Dörtlü Takrir (7 Haziran 1945)',
      '“Tek eksiğimiz… bir parti bulunmamasıdır” → İnönü, 1 Kasım 1945',
      '“Nuri Demirağ” → Millî Kalkınma Partisi (1945)',
      '“Bayar, Menderes, Köprülü, Koraltan” → Dörtlü Takrir ve Demokrat Parti',
      '“Açık oy, gizli tasnif” → 1946 seçiminin eleştirilen yönü',
      '“Tek dereceli” → 1946 seçim kanunu',
    ],
    reasoning: 'Önce gelişmeyi tanı, sonra “bu gelişme demokrasinin hangi gereğini karşılıyor ya da eksik bırakıyor?” diye sor.',
    boundary: 'Dikkat: 1946 seçimini CHP kazandı; program konuyu bu seçimle bitirir.',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'İTA.8.7.5 bir analiz kazanımıdır. Sorular bir belge, bir kronoloji ya da bir durum verip çok partili hayata geçişi hızlandıran gelişmeyi veya demokrasinin gereğini sorabilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Çok partili hayata geçişi hızlandıran iç ve dış gelişmeleri belirleme',
      'Dörtlü Takrir’in isteklerini demokrasinin gerekleriyle ilişkilendirme',
      '1946 seçiminin demokratik ve eksik yönlerini değerlendirme',
      'Partileri kuruluş yılları ve kurucularıyla eşleştirme',
    ],
  },
  checkpoints: [
    {
      prompt: 'Dörtlü Takrir reddedildiği hâlde neden çok partili hayata geçişte önemli bir adım sayılır?',
      hint: 'Takririn sahipleri sonra ne yaptı?',
      answer: 'Takrir, tek parti içinden yükselen güçlü ve yazılı bir demokrasi isteğiydi. Reddedilmesi tartışmayı kamuoyuna taşıdı; takririn sahipleri partiden ayrılıp Demokrat Parti’yi kurdu.',
    },
    {
      prompt: 'İnönü’nün 1945’teki tutumu çok partili hayata geçişi nasıl etkiledi?',
      answer: 'İktidarın başındaki kişi olarak muhalefetin kurulmasına açık olduğunu söyledi; bu, yeni partilerin kurulmasını ve geçişin barışçı biçimde gerçekleşmesini kolaylaştırdı.',
    },
    {
      prompt: '“Açık oy, gizli tasnif” ifadesi demokrasinin hangi gereğinin eksik olduğunu gösterir?',
      answer: 'Oyların gizli verilmesi ve sayımın herkese açık, denetlenebilir biçimde yapılması gereğinin eksik olduğunu gösterir. Bu eksiklik seçim sonuçlarına güveni azalttı.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.7.5, Türkiye’de çok partili siyasi hayata geçişi hızlandıran gelişmeleri demokrasinin gerekleri açısından analiz etmeni ister; açıklaması konunun 1946’da yapılan ilk çok partili genel seçime değinilerek bitirilmesini söyler. Bu kazanıma dayanan bir soru bir belge ya da durum verip gelişmeyi veya demokratik gereği sorabilir.',
    measures: [
      'Çok partili hayata geçişi hızlandıran iç ve dış gelişmeleri belirleme',
      'Dörtlü Takrir ve İnönü’nün tutumunu açıklama',
      'Demokrasinin gereklerini sayma ve gelişmelerle ilişkilendirme',
      '1946 seçimini değerlendirme',
    ],
  },
  simulation: {
    title: 'Mini LGS: Bir önerge',
    passage:
      '7 Haziran 1945’te dört milletvekilinin verdiği önergede şu istekler yer alır: Meclis denetiminin anayasanın ruhuna uygun olarak işlemesi, yurttaşların siyasi hak ve özgürlüklerini kullanabilmesi ve parti çalışmalarının bu esaslara göre yeniden düzenlenmesi. Önergede bu isteklerin, “bütün dünyada hürriyet ve demokrasi cereyanlarının tam bir zafer kazandığı” günlerde dile getirildiği belirtilir.',
    question: 'Bu önergeye göre aşağıdakilerden hangisine ulaşılabilir?',
    options: [
      { text: 'Çok partili hayata geçiş isteğinde dünyadaki gelişmeler de etkili olmuştur.', explanation: 'Doğru. Önerge, isteklerini dünyadaki demokrasi akımlarının zaferine bağlar.' },
      { text: 'Önerge sahipleri Cumhuriyet’in kaldırılmasını istemiştir.', explanation: 'Önerge anayasanın ruhuna uygun bir düzen ister; Cumhuriyet’e karşı değildir.' },
      { text: 'Önerge Meclis’te kabul edilmiş ve hemen uygulanmıştır.', explanation: 'Metinde önergenin sonucundan söz edilmez; ayrıca önerge 12 Haziran 1945’te reddedilmiştir.' },
      { text: 'Önerge sahipleri Meclis’in denetim yetkisinin azaltılmasını istemiştir.', explanation: 'Önerge tam tersine Meclis denetiminin güçlendirilmesini ister.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “ulaşılabilir” diyor. Metnin son cümlesi dış gelişmelerle bağlantıyı açıkça kurar.',
    critical_point: 'Dördüncü seçenek metnin tersini söyler. “Meclis denetimi” ifadesinin denetimin artırılması anlamına geldiğine dikkat et.',
    takeaway: 'Metindeki isteğin yönünü (artırma mı, azaltma mı) dikkatle oku.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Tek partiden çok partiye',
    range: '1945–1946',
    body:
      'Türkiye 1925’ten beri, 1930’daki kısa bir deneme dışında, tek parti tarafından yönetiliyordu; 1924’te kurulan ilk muhalefet partisi de 1925’te kapatılmıştı. İkinci Dünya Savaşı’nın demokrasilerin zaferiyle bitmesi, BM Antlaşması ve Batı ile yakınlaşma isteği dışarıda; savaş yıllarının ekonomik sıkıntıları ve Meclis’teki eleştiriler içeride çok partili hayata geçişi hızlandırdı. İnönü 19 Mayıs 1945’te demokrasinin genişleyeceğini söyledi. 7 Haziran 1945’te Celal Bayar, Adnan Menderes, Refik Koraltan ve Fuat Köprülü, Meclis denetimi ile siyasi hak ve özgürlüklerin genişletilmesini isteyen Dörtlü Takrir’i verdi; önerge 12 Haziran’da reddedildi. 1945’te Nuri Demirağ Millî Kalkınma Partisi’ni kurdu. İnönü 1 Kasım 1945’te hükûmet partisi karşısında bir parti olmamasını “tek eksiğimiz” diye niteledi. 7 Ocak 1946’da Demokrat Parti kuruldu; 5 Haziran 1946’da seçim tek dereceli hâle getirildi. 21 Temmuz 1946’da yapılan ilk çok partili genel seçimde CHP 397, DP 61, bağımsızlar 7 milletvekilliği kazandı. Seçimin “açık oy, gizli tasnif” koşullarında yapılması ve yolsuzluk iddiaları, demokrasinin gereklerinin henüz tam karşılanmadığını gösterdi.',
    turning_points: [
      '7 Haziran 1945 · Dörtlü Takrir',
      '1 Kasım 1945 · İnönü: “tek eksiğimiz”',
      '7 Ocak 1946 · Demokrat Parti',
      '5 Haziran 1946 · Tek dereceli seçim',
      '21 Temmuz 1946 · İlk çok partili genel seçim',
    ],
  },
  summary: [
    '**Önceki denemeler:** Terakkiperver Cumhuriyet Fırkası (1924–1925), Serbest Cumhuriyet Fırkası (1930).',
    '**Dış etkenler:** Savaşı demokrasilerin kazanması, BM Antlaşması (1945), Batı ile yakınlaşma isteği.',
    '**İç etkenler:** Savaş yıllarının ekonomik sıkıntıları, Meclis’teki eleştiriler, İnönü’nün tutumu.',
    '**Dörtlü Takrir (7 Haziran 1945):** Meclis denetimi, siyasi hak ve özgürlükler, parti çalışmalarının yeniden düzenlenmesi; 12 Haziran’da reddedildi.',
    '**Yeni partiler:** Millî Kalkınma Partisi (1945, Nuri Demirağ), Demokrat Parti (7 Ocak 1946).',
    '**1946 seçimi (21 Temmuz):** Çok partili ve tek dereceli; CHP 397, DP 61, bağımsız 7; “açık oy, gizli tasnif” eleştirisi.',
  ],
  quizzes: [
    {
      question: 'Dörtlü Takrir’i veren milletvekilleri aşağıdakilerden hangisinde doğru verilmiştir?',
      options: ['Celal Bayar, Adnan Menderes, Refik Koraltan, Fuat Köprülü', 'İsmet İnönü, Celal Bayar, Nuri Demirağ, Fethi Okyar', 'Kâzım Karabekir, Rauf Orbay, Ali Fuat Cebesoy, Refet Bele', 'Refik Saydam, Şükrü Saraçoğlu, Adnan Menderes, Nuri Demirağ'],
      answer_index: 0,
      explanation: 'Dörtlü Takrir 7 Haziran 1945’te Celal Bayar, Adnan Menderes, Refik Koraltan ve Fuat Köprülü tarafından verildi. Üçüncü seçenekteki isimler Terakkiperver Cumhuriyet Fırkası’nın kurucularındandır.',
    },
    {
      question: 'Çok partili döneme geçişte (1945) kurulan ilk muhalefet partisi hangisidir?',
      options: ['Millî Kalkınma Partisi', 'Demokrat Parti', 'Serbest Cumhuriyet Fırkası', 'Terakkiperver Cumhuriyet Fırkası'],
      answer_index: 0,
      explanation: 'Millî Kalkınma Partisi 1945’te Nuri Demirağ tarafından kuruldu. Demokrat Parti 1946’da kuruldu; diğer ikisi önceki denemelerdir.',
    },
    {
      question: '1946 genel seçimiyle ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['İlk çok partili genel seçimdir ve tek dereceli yapılmıştır.', 'Demokrat Parti iktidara gelmiştir.', 'Gizli oy, açık tasnif ilkesiyle yapılmıştır.', 'Yalnızca CHP katılmıştır.'],
      answer_index: 0,
      explanation: '21 Temmuz 1946 seçimi ilk çok partili ve tek dereceli genel seçimdir. CHP iktidarda kaldı; seçim “açık oy, gizli tasnif” koşullarında yapıldığı için eleştirildi.',
    },
    {
      question: 'Aşağıdakilerden hangisi çok partili hayata geçişi hızlandıran dış gelişmelerden biridir?',
      options: ['İkinci Dünya Savaşı’nın demokrasilerin zaferiyle sona ermesi', 'Çiftçiyi Topraklandırma Kanunu tartışmaları', 'Savaş yıllarının hayat pahalılığı', 'Dörtlü Takrir’in verilmesi'],
      answer_index: 0,
      explanation: 'Savaşın demokrasilerin zaferiyle bitmesi dış bir gelişmedir. Diğer seçenekler Türkiye’nin içindeki gelişmelerdir.',
    },
    {
      question: '“Açık oy, gizli tasnif” eleştirisi demokrasinin hangi gereğinin eksik olduğunu gösterir?',
      options: ['Oyların gizli verilmesi ve sayımın açık yapılması', 'Birden fazla partinin kurulması', 'Seçimin tek dereceli olması', 'Meclis’in açılması'],
      answer_index: 0,
      explanation: 'Demokratik seçimde oy gizli verilir, sayım ise herkesin denetimine açık yapılır. 1946 seçimi bu yönden eleştirildi; çok partili ve tek dereceli olma şartları ise karşılanmıştı.',
    },
  ],
  next: ['Demokratikleşme Çabaları', 'İkinci Dünya Savaşı ve Türkiye'],
})

export default lesson
