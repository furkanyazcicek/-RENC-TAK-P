import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.5 Demokratikleşme Çabaları · 1. ders
 * Kazanımlar: İTA.8.5.1 · İTA.8.5.2 · İTA.8.5.3
 * Dayanak   : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   İTA.8.5.1 — Cumhuriyet Halk Fırkası, Terakkiperver Cumhuriyet Fırkası ve Serbest
 *               Cumhuriyet Fırkası ele alınır. Demokratikleşme çabalarına ilişkin olarak
 *               Büyük Nutuk’ta yer alan kısımlardan kanıtlar gösterilir.
 *   İTA.8.5.2 ve İTA.8.5.3 için ayrıca açıklama yoktur.
 *
 * KAPSAM KARARI
 * Nutuk’tan alınan bölümler Mustafa Kemal’in kendi siyasi değerlendirmesi olarak
 * etiketlendi; muhalefetin bakış açısı ve tarihçiler arasındaki tartışma ayrıca
 * belirtildi (tek nedenli anlatıdan kaçınmak için). Takrir-i Sükûn Kanunu TBMM
 * arşivinden birebir alındı. İzmir suikastının planlandığı gün kaynaklarda farklı
 * verildiği için “Haziran 1926” yazıldı; idam edilenlerin sayısı yazılmadı.
 * Harita yoktur.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 20.
 */

const SLUG = 'lgs-tarih-demokratiklesme-cabalari'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Demokratikleşme Çabaları',
  order: 1,
  title: 'Demokratikleşme Çabaları: Partiler, Suikast Girişimi ve Tehditler',
  subtitle:
    'Cumhuriyet’in ilk yıllarında iki kez çok partili hayata geçilmek istendi; iki deneme de kısa sürdü. Aynı yıllarda bir isyan, bir suikast girişimi ve bir irtica olayı Cumhuriyet’i sınadı.',
  minutes: 50,
  kazanimlar: ['İTA.8.5.1', 'İTA.8.5.2', 'İTA.8.5.3'],
  kapsamNotu:
    'Nutuk’tan alınan bölümler Mustafa Kemal’in kendi siyasi değerlendirmesi olarak sunulmuş; muhalefetin bakış açısı ve tarihçiler arasındaki farklı yorumlar ayrıca belirtilmiştir. Kaynaklar arasında gün farkı olan bilgiler ay ve yıl düzeyinde yazılmıştır.',
  prerequisites: [
    {
      topic: 'Siyasi inkılaplar ve Cumhuriyet’in ilanı',
      why: 'Muhalefet partisi, Cumhuriyet’in ilanı ve halifeliğin kaldırılması tartışmalarının ardından kuruldu.',
    },
    {
      topic: 'Laiklik ve Halkçılık ilkeleri',
      why: 'Partiler arasındaki tartışmaların önemli bir kısmı din–devlet ilişkisi ve millî egemenlik üzerineydi.',
    },
  ],
  outcomes: [
    'Cumhuriyet Halk Fırkası, Terakkiperver Cumhuriyet Fırkası ve Serbest Cumhuriyet Fırkası’nı kuruluş, program ve sonuçlarıyla karşılaştırabileceksin.',
    'Nutuk’tan demokratikleşme çabalarına ilişkin kanıtlar gösterebileceksin.',
    'İzmir suikast girişimini sebep ve sonuçlarıyla analiz edebileceksin.',
    'Cumhuriyet’in ilk yıllarındaki iç tehditleri (Şeyh Said İsyanı, Menemen Olayı) analiz edebileceksin.',
    'Olayların farklı yorumlarını ayırt edebileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Tek parti mi, çok parti mi?',
    lead:
      'Demokrasi yalnız seçim yapmak değildir; farklı görüşlerin partiler hâlinde örgütlenip iktidarı denetleyebilmesidir. Cumhuriyet’in ilk yıllarında bu düzen nasıl kurulacaktı?',
    body:
      'Mustafa Kemal 1922’nin sonunda “halkçılık esasına müstenid” bir parti kurmak istediğini açıkladı; **Halk Fırkası** 9 Eylül 1923’te kuruldu ve 10 Kasım 1924’te **Cumhuriyet Halk Fırkası** adını aldı. Kısa süre sonra, Millî Mücadele’nin önde gelen isimlerinden bazıları ilk muhalefet partisi olan **Terakkiperver Cumhuriyet Fırkası**’nı kurdu (17 Kasım 1924).\n\n' +
      'Ancak 1925’te Doğu Anadolu’da çıkan **Şeyh Said İsyanı** her şeyi değiştirdi: Takrir-i Sükûn Kanunu çıkarıldı ve muhalefet partisi kapatıldı. 1926’da Mustafa Kemal’e yönelik **İzmir suikast girişimi** ortaya çıkarıldı. 1930’da Mustafa Kemal’in teşvikiyle **Serbest Cumhuriyet Fırkası** kuruldu; ama üç aydan kısa sürede kendini kapattı. Aynı yılın sonunda **Menemen Olayı** yaşandı.\n\n' +
      'Bu derste üç soruya cevap arayacağız: Demokratikleşme için hangi adımlar atıldı (İTA.8.5.1)? İzmir suikast girişimi neyi amaçladı ve neye yol açtı (İTA.8.5.2)? Cumhuriyet’e yönelik tehditler nelerdi (İTA.8.5.3)?',
  },
  concepts: [
    { term: 'Fırka', body: 'Parti. Cumhuriyet’in ilk yıllarında siyasi partilere “fırka” denirdi.' },
    { term: 'Muhalefet', body: 'İktidarı eleştiren ve denetleyen, onun yerine gelmeye aday olan siyasi güç. Demokrasinin temel unsurlarından biridir.' },
    { term: 'Çok partili hayat', body: 'Birden fazla partinin serbestçe kurulup seçimlerde yarıştığı siyasi düzen.' },
    { term: 'İrtica', body: 'Gericilik; inkılaplarla kaldırılan eski düzeni, özellikle din adına, geri getirmeye çalışma.' },
    { term: 'Takrir-i Sükûn', body: 'Kelime anlamı “huzurun sağlanması”. 1925’te çıkarılan ve hükümete olağanüstü yetkiler veren kanun.' },
  ],
  why: {
    question: 'Çok partili denemeler neden kısa sürdü?',
    body:
      'Bu sorunun tek bir cevabı yoktur ve tarihçiler farklı ağırlıklar verir. **Birinci etken**, inkılapların çok hızlı yapıldığı bir dönemde muhalefetin bir kısmının inkılaplara karşı olanların toplandığı bir yer hâline gelmesi endişesidir; Mustafa Kemal Nutuk’ta Terakkiperver Cumhuriyet Fırkası’nı bu açıdan sert biçimde eleştirir. **İkinci etken**, Şeyh Said İsyanı ve İzmir suikast girişimi gibi olayların yarattığı güvenlik kaygısıdır. **Üçüncü etken**, demokratik kültürün ve kurumların henüz yeni olmasıdır: Seçim, muhalefet ve iktidar değişimi toplumun alışık olmadığı kavramlardı.\n\n' +
      'Muhalefet partilerinin kurucuları ise kendilerini Cumhuriyet’in karşısında değil, iktidarın uygulamalarının karşısında görüyordu. Bu yüzden olayları değerlendirirken hem iktidarın hem de muhalefetin bakış açısını görmek gerekir.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Demokratikleşme ve tehditler (1922–1930)',
    lead: 'Kronolojide parti kuruluşları ile tehditler iç içe ilerler. Birinin ötekini nasıl etkilediğine dikkat et.',
    intro: 'İki çok partili deneme (1924–1925 ve 1930), iki büyük tehdidin (1925 isyanı ve 1930 Menemen Olayı) gölgesinde kaldı.',
    items: [
      { title: '7 Aralık 1922 · Parti kurma duyurusu', body: 'Mustafa Kemal halkçılık esasına dayanan bir “Halk Fırkası” kurmak istediğini açıkladı.' },
      { title: '9 Eylül 1923 · Halk Fırkası', body: 'Parti kuruldu; 10 Kasım 1924’te “Cumhuriyet Halk Fırkası” adını aldı.' },
      { title: '17 Kasım 1924 · Terakkiperver Cumhuriyet Fırkası', body: 'İlk muhalefet partisi kuruldu.' },
      { title: 'Şubat 1925 · Şeyh Said İsyanı', body: 'Doğu Anadolu’da din adına çıkarılan geniş çaplı isyan başladı; Nisan 1925’te bastırıldı.' },
      { title: '4 Mart 1925 · Takrir-i Sükûn Kanunu', body: 'Hükümete iki yıllığına olağanüstü yetkiler verildi.' },
      { title: '3 Haziran 1925 · Terakkiperver kapatıldı', body: 'Takrir-i Sükûn Kanunu’na dayanılarak muhalefet partisi kapatıldı.' },
      { title: 'Haziran 1926 · İzmir suikast girişimi', body: 'Mustafa Kemal’e İzmir’de yapılması planlanan suikast, son anda yapılan bir ihbarla ortaya çıkarıldı.' },
      { title: '15–20 Ekim 1927 · Nutuk', body: 'Mustafa Kemal Nutuk’ta Terakkiperver Cumhuriyet Fırkası’nı, isyanı ve suikastı kendi bakış açısından değerlendirdi.' },
      { title: '12 Ağustos 1930 · Serbest Cumhuriyet Fırkası', body: 'Mustafa Kemal’in isteğiyle Fethi (Okyar) Bey tarafından kuruldu.' },
      { title: '17 Kasım 1930 · Serbest Fırka kendini kapattı', body: 'Kurucuları partiyi feshetti.' },
      { title: '23 Aralık 1930 · Menemen Olayı', body: 'Şeriat isteyen bir grup, yedek subay öğretmen Kubilay’ı ve iki bekçiyi şehit etti.' },
    ],
    takeaway:
      'Dikkat et: İki muhalefet partisi de kısa ömürlü oldu. Terakkiperver kapatıldı (1925); Serbest Fırka kendini kapattı (1930). “Kapatıldı” ile “kendini kapattı” arasındaki farkı unutma.',
    body:
      'Kronolojide bir desen görülür: Her çok partili denemenin arkasından bir tehdit geldi ya da deneme bir tehditle birlikte anıldı. Terakkiperver Cumhuriyet Fırkası kurulduktan üç ay sonra Şeyh Said İsyanı çıktı ve parti isyanla ilişkilendirilerek kapatıldı. Serbest Cumhuriyet Fırkası’nın kapanmasından bir ay sonra Menemen Olayı yaşandı.\n\n' +
      'Bu yüzden 1930’dan 1946’ya kadar Türkiye’de tek parti dönemi sürdü. Çok partili hayata kalıcı geçiş 1946’da gerçekleşti; bunu ilerideki bir derste işleyeceğiz.',
  },
  dataTable: {
    title: 'Cumhuriyet’e yönelik iç tehditler: analiz',
    columns: ['Olay', 'Tarih', 'Niteliği', 'Devletin tepkisi', 'Sonucu'],
    rows: [
      ['Şeyh Said İsyanı', 'Şubat–Nisan 1925', 'Din adına çıkarılan, geniş bir bölgeye yayılan silahlı isyan', 'Takrir-i Sükûn Kanunu; İstiklal Mahkemeleri; askerî harekât', 'İsyan bastırıldı; Terakkiperver Cumhuriyet Fırkası kapatıldı; inkılaplar hızlandı'],
      ['İzmir suikast girişimi', 'Haziran 1926', 'Cumhurbaşkanına yönelik planlı suikast girişimi', 'İstiklal Mahkemesi’nde geniş yargılama', 'Suikastçılar ve bağlantılı görülen bazı kişiler cezalandırıldı; muhalefet tasfiye edildi'],
      ['Menemen Olayı', '23 Aralık 1930', 'Şeriat isteyen bir grubun ayaklanması; öğretmen Kubilay’ın şehit edilmesi', 'Olayın sorumluları yargılandı', 'Laiklik ilkesinin korunmasına daha fazla önem verildi'],
    ],
    caption:
      'Tabloyu “niteliği” sütununa göre oku: Tehditlerin ortak noktası, inkılaplara ve Cumhuriyet’in temel ilkelerine yönelmeleridir. Olayların sebepleri üzerine tarihçiler arasında farklı yorumlar vardır; tek bir sebebe indirgemekten kaçın.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Çok partili denemeler neden kalıcı olamadı?',
    lead: 'Zincir, 1923–1930 arasındaki demokratikleşme çabalarının sebeplerini, gelişmelerini ve sonuçlarını gösterir.',
    intro: 'Zincirin başı çok partili hayatı hem gerekli kılan hem de zorlaştıran şartları, ortası denemeleri ve tehditleri, sonu da sonuçları anlatır.',
    steps: [
      { tur: 'sebep', title: 'Demokrasi ihtiyacı', body: 'Millî egemenliğe dayanan bir Cumhuriyet’te iktidarı denetleyecek bir muhalefete ihtiyaç vardı.' },
      { tur: 'sebep', title: 'Hızlı inkılaplar ve tepkiler', body: 'Saltanat, halifelik ve eski kurumların kaldırılması, bu değişimlere karşı olan kesimlerde tepki doğurdu.' },
      { tur: 'sebep', title: 'Yeni ve kırılgan kurumlar', body: 'Seçim, muhalefet ve iktidar değişimi toplumun alışık olmadığı kavramlardı.' },
      { tur: 'gelisme', title: 'İlk deneme (1924–1925)', body: 'Terakkiperver Cumhuriyet Fırkası kuruldu; Şeyh Said İsyanı üzerine çıkan Takrir-i Sükûn Kanunu’na dayanılarak kapatıldı.' },
      { tur: 'gelisme', title: 'Suikast girişimi (1926)', body: 'İzmir suikast girişimi ortaya çıkarıldı; yargılamalar muhalefetin tasfiyesiyle sonuçlandı.' },
      { tur: 'gelisme', title: 'İkinci deneme (1930)', body: 'Serbest Cumhuriyet Fırkası kuruldu; kısa sürede büyük ilgi gördü, ama inkılap karşıtlarının da ona yönelmesi üzerine kurucuları partiyi kapattı.' },
      { tur: 'sonuc', title: 'Tek parti dönemi', body: '1930’dan 1946’ya kadar Cumhuriyet Halk Partisi tek parti olarak kaldı; Menemen Olayı laikliğin korunması kaygısını güçlendirdi.' },
      { tur: 'sonraki-etki', title: '1946’ya giden yol', body: 'Denemeler başarısız olsa da demokrasi hedefi bırakılmadı; kalıcı çok partili hayata 1946’da geçildi.' },
    ],
    inference:
      'Temel çıkarım: Demokratikleşme çabaları, Cumhuriyet’i ve inkılapları koruma kaygısı ile iktidarı denetleme ihtiyacı arasında sıkıştı. İki deneme de kısa sürdü; ama çok partili hayat hedefi bir “vazgeçilen” değil, “ertelenen” hedef oldu.',
    body:
      '**Nutuk’tan demokratikleşme kanıtları** (İTA.8.5.1) şunlardır:\n\n' +
      '- Mustafa Kemal 7 Aralık 1922’de basın aracılığıyla halkçılık esasına dayanan bir “Halk Fırkası” kurmak istediğini açıkladı ve programı için “bi’l-cümle vatanperverânın, erbâb-ı ilm ü fennin” görüşüne başvurdu.\n' +
      '- Nutuk’ta Takrir-i Sükûn Kanunu ve İstiklal Mahkemeleri için “kanunun fevkine çıkmak için vasıta olarak kullanmadık” der ve bu tedbirlerin gerek kalmayınca bırakıldığını savunur.\n' +
      '- Aynı Nutuk, Terakkiperver Cumhuriyet Fırkası’nı “din bayrağı” altında inkılaplara karşı çıkmakla suçlar. Bu, iktidarın bakış açısıdır; muhalefetin kurucuları bu suçlamaları kabul etmiyordu.\n\n' +
      'Nutuk’u kanıt olarak kullanırken onun bir tarafın, iktidarın değerlendirmesi olduğunu unutma. İyi bir tarih analizi, farklı tarafların bakış açılarını birlikte değerlendirir.',
  },
  comparison: {
    title: 'Üç parti: Cumhuriyet Halk, Terakkiperver ve Serbest Cumhuriyet',
    columns: ['Cumhuriyet Halk Fırkası', 'Terakkiperver Cumhuriyet Fırkası', 'Serbest Cumhuriyet Fırkası'],
    rows: [
      { label: 'Kuruluş', values: ['9 Eylül 1923 (Halk Fırkası); 10 Kasım 1924’te bugünkü adı', '17 Kasım 1924', '12 Ağustos 1930'] },
      { label: 'Önde gelen isimler', values: ['Mustafa Kemal (Genel Başkan), İsmet Paşa', 'Kâzım Karabekir (Başkan), Rauf (Orbay), Ali Fuat (Cebesoy), Refet (Bele), Adnan (Adıvar)', 'Fethi (Okyar)'] },
      { label: 'Öne çıkan özellik', values: ['İnkılapları yapan ve yürüten iktidar partisi', 'Programında liberal ekonomi, yerinden yönetim ve dinî inançlara saygı vurgusu', 'Mustafa Kemal’in isteğiyle kurulan, ekonomide liberal görüşlere yakın muhalefet partisi'] },
      { label: 'Sonu', values: ['1946’ya kadar tek parti olarak kaldı', '3 Haziran 1925’te Takrir-i Sükûn Kanunu’na dayanılarak kapatıldı', '17 Kasım 1930’da kurucuları tarafından feshedildi'] },
      { label: 'Demokrasiye katkısı', values: ['Cumhuriyet’in kurumlarını kurdu', 'İlk muhalefet deneyimi', 'Muhalefet ihtiyacını ve halkın ilgisini gösterdi'] },
    ],
    insight:
      'Asıl fark: Terakkiperver Cumhuriyet Fırkası iktidara rağmen kuruldu ve kapatıldı; Serbest Cumhuriyet Fırkası ise iktidarın başındaki Mustafa Kemal’in isteğiyle kuruldu ve kendini kapattı. İkisi de çok partili hayatın o günkü koşullarda ne kadar zor olduğunu gösterir.',
  },
  traps: [
    {
      title: 'İki muhalefet partisinin sonunu karıştırmak',
      wrong: 'Serbest Cumhuriyet Fırkası hükümet kararıyla kapatıldı.',
      right: 'Serbest Cumhuriyet Fırkası 17 Kasım 1930’da kurucuları tarafından feshedildi. Hükümet kararıyla kapatılan parti, 1925’te Takrir-i Sükûn Kanunu’na dayanılarak kapatılan Terakkiperver Cumhuriyet Fırkası’dır.',
      body: '“Kapatıldı” ile “kendini feshetti” farkı sınavlarda sıkça sorulur.',
    },
    {
      title: 'Serbest Fırka’yı Mustafa Kemal’e rağmen kurulmuş sanmak',
      wrong: 'Serbest Cumhuriyet Fırkası, Mustafa Kemal’e karşı çıkan muhalifler tarafından onun isteği dışında kuruldu.',
      right: 'Serbest Cumhuriyet Fırkası, Mustafa Kemal’in isteğiyle yakın arkadaşı Fethi (Okyar) Bey tarafından kuruldu.',
      body: 'Bu, Mustafa Kemal’in denetimli bir muhalefeti demokrasi için gerekli gördüğünün kanıtı olarak değerlendirilir.',
    },
    {
      title: 'Tehditleri tek bir sebebe bağlamak',
      wrong: 'Şeyh Said İsyanı’nın tek sebebi dış güçlerin kışkırtmasıdır.',
      right: 'İsyanın sebepleri üzerine farklı yorumlar vardır: İnkılaplara, özellikle halifeliğin kaldırılmasına tepki, bölgesel ve toplumsal etkenler ile dönemin dış politika gerginlikleri birlikte değerlendirilir.',
      body: 'Nutuk isyanı “irticaî” olarak niteler ve bir muhalefet partisiyle ilişkilendirir; tarihçiler sebeplerin ağırlığı konusunda tartışır.',
    },
    {
      title: 'Takrir-i Sükûn’u süresiz bir kanun sanmak',
      wrong: 'Takrir-i Sükûn Kanunu süresiz olarak çıkarıldı.',
      right: 'Kanunun 2. maddesine göre kanun iki yıllığına çıkarıldı; süre dolunca yeniden Meclis’e getirildi ve Meclis kararıyla uzatıldı.',
      body: 'Nutuk’ta Mustafa Kemal, kanunun süresi dolunca yeniden Meclis’e getirildiğini vurgular.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Partilerin, olayların ve tartışmaların kişileri',
    lead: 'Bu dönemin kişileri, bir zamanlar Millî Mücadele’de yan yana olan, sonra farklı siyasi yollara ayrılan insanlardır.',
    intro: 'Kartlarda her kişinin bu dönemdeki rolünü görürsün.',
    figures: [
      {
        name: 'Mustafa Kemal Atatürk',
        period: '1922–1930',
        position: 'Cumhurbaşkanı; Cumhuriyet Halk Fırkası Genel Başkanı',
        contribution: 'Halk Fırkası’nı kurdu; 1930’da Serbest Cumhuriyet Fırkası’nın kurulmasını istedi. Nutuk’ta muhalefeti, isyanı ve suikastı kendi bakış açısından değerlendirdi.',
        connections: ['Cumhuriyet Halk Fırkası', 'Serbest Cumhuriyet Fırkası', 'İzmir suikast girişimi'],
        significance: 'Hem muhalefete kapı açan hem de inkılapları koruma kaygısıyla hareket eden liderdir.',
      },
      {
        name: 'Kâzım Karabekir Paşa',
        period: '1924–1925',
        position: 'Terakkiperver Cumhuriyet Fırkası Başkanı',
        contribution: 'Doğu Cephesi’nin zafer komutanıydı; 1924’te ilk muhalefet partisinin başkanı oldu. Parti 1925’te kapatıldı.',
        connections: ['Terakkiperver Cumhuriyet Fırkası'],
        significance: 'Millî Mücadele’nin kahramanlarının siyasette nasıl farklı yollara ayrıldığını gösterir.',
      },
      {
        name: 'Rauf Bey (Orbay)',
        period: '1924–1925',
        position: 'Terakkiperver Cumhuriyet Fırkası’nın kurucularından',
        contribution: 'Mondros’u imzalayan heyetin başkanıydı; Millî Mücadele’de Mustafa Kemal’in yanında yer aldı. Cumhuriyet’in ilanının aceleye getirildiğini düşünüyordu; muhalefet partisinin kurucuları arasında yer aldı.',
        connections: ['Terakkiperver Cumhuriyet Fırkası'],
        significance: 'Nutuk’ta en çok eleştirilen isimlerden biridir; iktidar ile muhalefet arasındaki kopuşu temsil eder.',
      },
      {
        name: 'Fethi Bey (Okyar)',
        period: '1930',
        position: 'Serbest Cumhuriyet Fırkası kurucusu',
        contribution: 'Mustafa Kemal’in isteğiyle 12 Ağustos 1930’da Serbest Cumhuriyet Fırkası’nı kurdu; 17 Kasım 1930’da partiyi feshetti.',
        connections: ['Serbest Cumhuriyet Fırkası'],
        significance: 'İkinci çok partili denemenin öncüsüdür.',
      },
      {
        name: 'Mustafa Fehmi Kubilay',
        period: '1930',
        position: 'Öğretmen, yedek subay',
        contribution: '23 Aralık 1930’da Menemen’de şeriat isteyen bir grubun saldırısında iki bekçiyle birlikte şehit edildi.',
        connections: ['Menemen Olayı'],
        significance: 'Laik Cumhuriyet’e yönelik tehditlerin simgesi hâline gelen “devrim şehidi”dir.',
      },
    ],
    takeaway:
      'Bu dönemin en çarpıcı yönü, Millî Mücadele’yi birlikte kazanan arkadaşların siyasette karşı karşıya gelmesidir. Tarihi anlamak için onları “kahraman” ya da “hain” diye ikiye ayırmak yerine, her birinin hangi kaygıyla hareket ettiğini görmek gerekir.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-izmir`,
      title: 'İzmir suikast girişimini analiz et',
      lead: 'İTA.8.5.2 bir “analiz eder” kazanımıdır. Olayı sebep, gelişme, sonuç ve yorumlarıyla parçalara ayıralım.',
      blocks: [
        {
          id: `${SLUG}-izmir-anlatim`,
          type: 'prose',
          body:
            '**Ne oldu?** Haziran 1926’da Mustafa Kemal’in İzmir ziyareti sırasında ona suikast yapılması planlandı. Plan, suikastçıları kaçıracak olan motorculardan Giritli Şevki’nin yetkililere haber vermesiyle ortaya çıktı. Suikastçılar yakalandı; kaldıkları otelde silah ve bombalar bulundu.\n\n' +
            '**Kimler?** Suikastçıların başında eski milletvekili Ziya Hurşit vardı. Soruşturma genişletildi; bazı eski İttihat ve Terakki üyeleri ve kapatılan Terakkiperver Cumhuriyet Fırkası’nın bazı mensupları da suikastla ilişkilendirilerek İstiklal Mahkemesi’nde yargılandı.\n\n' +
            '**Sonuçları:** Suikastçılar ve bağlantılı görülen bazı kişiler idam edildi. Millî Mücadele’nin önde gelen bazı komutanları da yargılandı; ancak bunların çoğu beraat etti. Bu yargılamalarla muhalefet büyük ölçüde tasfiye edildi. Nutuk’ta Mustafa Kemal suikastı “Cumhuriyet düşmanlarının son nâmerdâne teşebbüsü” olarak niteler.\n\n' +
            '**Nasıl yorumlanmalı?** Olay, Cumhuriyet’in ve liderinin hedef alındığı gerçek bir tehditti. Aynı zamanda yargılamaların kapsamının genişliği, dönemin siyasi gerginliğini de gösterir. Bu yüzden bazı tarihçiler yargılamaları Cumhuriyet’i korumanın bir gereği olarak, bazıları ise muhalefeti tasfiye etme fırsatı olarak değerlendirir. İki yorumu da kanıtlarıyla bilmek, olayı tek yönlü okumaktan korur.\n\n' +
            'Suikast girişiminin ortaya çıkmasından sonra Mustafa Kemal’in yaptığı açıklamadaki şu söz yaygın olarak aktarılır: “Benim naçiz vücudum elbet bir gün toprak olacaktır, fakat Türkiye Cumhuriyeti ilelebet payidar kalacaktır.” Bu söz, Cumhuriyet’in bir kişiye değil millete ait olduğu düşüncesini anlatır.',
        },
        {
          id: `${SLUG}-izmir-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: 24–25–26–30',
          body: '1924 Terakkiperver kuruldu · 1925 Şeyh Said ve Takrir-i Sükûn, parti kapatıldı · 1926 İzmir suikast girişimi · 1930 Serbest Fırka ve Menemen.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste Nutuk’tan üç bölüm ve Takrir-i Sükûn Kanunu’nu okuyacaksın. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Nutuk, olayların içinde yer almış ve iktidarı yönetmiş bir liderin kendi bakış açısıdır. Özellikle muhalefetle ilgili bölümleri okurken metnin bir tarafın değerlendirmesi olduğunu unutma; muhalefetin kurucularının bu suçlamaları kabul etmediğini de hatırla.\n\n' +
      'İlk dört metin birebir alıntıdır. Beşinci metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Nutuk: Halk Fırkası’nı kurma teşebbüsü',
        kunye: 'Mustafa Kemal, Nutuk (1927), 15. bölüm: “Halk Fırkasını teşkil teşebbüsü”. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı.',
        metin:
          'Muhterem Efendiler, her yerde siyasî fırka teşkili hakkında da halk ile uzun hasb-i hallerde bulundum. 7 Kânunuevvel 1922 tarihinde, Ankara matbûatı vasıtasıyla halkçılık esasına müstenid ve “Halk Fırkası” namıyla siyasî bir fırka teşkil etmek niyetinde olduğumu beyan ederek bu fırkanın nasıl bir program takip etmesi lâzım geleceği hakkında bi’l-cümle vatanperverânın, erbâb-ı ilm ü fennin müzaheret ve müşâreketine mürâcaat etmiştim.',
        soru: 'Mustafa Kemal partiyi kurmadan önce ne yapmış? Bu davranışı demokratikleşme açısından nasıl değerlendirirsin?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Hasb-i hal”: sohbet, dertleşme. “Matbuat”: basın. “Müstenid”: dayanan. “Bi’l-cümle vatanperveran”: bütün vatanseverler. “Erbab-ı ilm ü fen”: bilim insanları. “Müzaheret ve müşareket”: destek ve katılım.' },
          { title: 'Yapılanı bul', body: 'Halkla parti hakkında konuşmuş; niyetini basın yoluyla açıklamış; programın hazırlanması için bütün vatanseverlerin ve bilim insanlarının görüşünü istemiş.' },
          { title: 'Değerlendir', body: 'Partinin programını tek başına değil, toplumun farklı kesimlerinin görüşüne başvurarak hazırlama isteği, katılımcı bir yaklaşımı gösterir.' },
        ],
        cevap: 'Mustafa Kemal partiyi kurmadan önce halkla konuşmuş, niyetini basın yoluyla duyurmuş ve programın hazırlanması için vatanseverlerin ve bilim insanlarının görüşlerini istemiştir. Bu, siyasi hayatın halkın katılımıyla örgütlenmesi yönünde bir adım olarak değerlendirilebilir.',
        cikarim: 'Programın bu kazanımda istediği “Nutuk’tan kanıt” budur: Nutuk, partinin kuruluşunun halka açık bir süreçle başladığını gösterir.',
      },
      {
        tur: 'birincil',
        baslik: 'Nutuk: Terakkiperver Cumhuriyet Fırkası hakkında',
        kunye: 'Mustafa Kemal, Nutuk (1927), 18. bölüm: “Terakkiperver Cumhuriyet Fırkası ve en hain dimağların mahsulü olan programı”. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı. Mustafa Kemal’in muhalefet partisi hakkındaki siyasi değerlendirmesidir.',
        metin:
          'Rauf Bey ve arkadaşlarının teşkil ettikleri fırka, muhafazakâr unvanı altında meydana çıksaydı, belki manası olurdu. Fakat bizden daha ziyade Cumhuriyetçi ve bizden daha ziyade terakkiperver olduklarını iddiaya kalkışmaları, bi’t-tabi doğru değildi. “Fırka efkâr ve i’tikadât-ı diniyeye hürmetkârdır.” düstûrunu bayrak olarak eline alan zevâttan hüsn-i niyete intizâr olunabilir midi?',
        soru: 'Mustafa Kemal Terakkiperver Cumhuriyet Fırkası’nı hangi noktalarda eleştiriyor? Bu metin neden tek başına yeterli bir kanıt değildir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Muhafazakâr”: eskiyi korumak isteyen. “Terakkiperver”: ilerlemeden yana. “Efkâr ve itikadat-ı diniye”: dinî düşünce ve inançlar. “Hürmetkâr”: saygılı. “Düstur”: ilke. “Hüsn-i niyet”: iyi niyet. “İntizar”: bekleme.' },
          { title: 'Eleştiriyi bul', body: '1) Parti adındaki “cumhuriyetçi” ve “ilerici” iddiasını samimi bulmuyor. 2) Programdaki dinî inançlara saygı maddesinin inkılap karşıtlarını çekeceğini düşünüyor.' },
          { title: 'Kaynağı değerlendir', body: 'Metin, iktidarın başındaki kişinin rakip parti hakkındaki görüşüdür. Muhalefetin kurucuları kendilerini Cumhuriyet’e bağlı görüyordu. Tarafsız bir değerlendirme için muhalefetin kendi açıklamalarına ve tarihçilerin çalışmalarına da bakmak gerekir.' },
        ],
        cevap: 'Mustafa Kemal partinin cumhuriyetçi ve ilerici olma iddiasını samimi bulmaz ve dinî inançlara saygı maddesinin inkılap karşıtlarının toplanmasına yol açacağını savunur. Bu metin bir tarafın siyasi değerlendirmesi olduğu için tek başına yeterli değildir; muhalefetin görüşleri ve diğer kaynaklarla karşılaştırılmalıdır.',
        cikarim: 'Birincil kaynak “olay anında yazılmış” demektir, “tarafsız” demek değildir. İyi bir tarihçi birincil kaynağı da sorgular.',
      },
      {
        tur: 'birincil',
        baslik: 'Takrir-i Sükûn Kanunu',
        kunye: 'Takriri sükun kanunu, Kanun no 578, 4 Mart 1925, 1. ve 2. maddeler. Metin: TBMM kanun arşivi.',
        nitelik: 'Birebir alıntı.',
        metin:
          'BİRİNCİ MADDE — İrticaa ve isyana ve memleketin nizamı içtimaisini ve huzur ve sükûnunu ve emniyet ve asayişini ihlâle bâis bilûmum teşkilât ve tahrikât ve teşvikat ve teşebbüsat ve neşriyatı Hükümet, Reisicumhurun tasdikiyle, re’sen ve idareten men’e mezundur. İşbu efal erbabını Hükümet İstiklâl mahkemesine tevdi edebilir. İKİNCİ MADDE — İşbu kanun tarihi neşrinden itibaren iki sene müddetle mer’iyülicradır.',
        soru: 'Kanun hükümete hangi yetkiyi veriyor ve bu yetkiyi nasıl sınırlıyor?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“İrtica”: gericilik. “Nizam-ı içtimai”: toplum düzeni. “Tahrikat”: kışkırtma. “Neşriyat”: yayın. “Re’sen ve idareten”: kendiliğinden ve idari kararla. “Men’e mezun”: yasaklamaya yetkili. “Tevdi”: gönderme.' },
          { title: 'Yetkiyi bul', body: 'Hükümet, gericiliğe, isyana ve düzeni bozmaya yol açan her türlü örgütü, kışkırtmayı ve yayını mahkeme kararı olmadan yasaklayabilir; sorumluları İstiklal Mahkemesi’ne gönderebilir.' },
          { title: 'Sınırı bul', body: 'Yetki Cumhurbaşkanının onayına bağlıdır ve kanun iki yıllık süreyle sınırlıdır.' },
        ],
        cevap: 'Kanun hükümete, düzeni ve Cumhuriyet’i tehdit eden örgüt, kışkırtma ve yayınları idari kararla yasaklama ve sorumluları İstiklal Mahkemesi’ne gönderme yetkisi verir. Bu yetki Cumhurbaşkanının onayına ve iki yıllık süreye bağlanmıştır.',
        cikarim: 'Olağanüstü yetkiler güvenliği sağlarken özgürlükleri de sınırlar. Bu kanun sayesinde bir yandan isyan bastırıldı, öte yandan muhalefet partisi ve bazı gazeteler kapatıldı; iki etkiyi birlikte görmek gerekir.',
      },
      {
        tur: 'birincil',
        baslik: 'Nutuk: Olağanüstü tedbirler hakkında',
        kunye: 'Mustafa Kemal, Nutuk (1927), 18. bölüm: “Memlekette sükûn ve asayiş tesisi için tatbik edilen fevkalâde tedbirlerin feyizli neticeleri”. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı. Mustafa Kemal’in kendi uygulamalarını savunmasıdır.',
        metin:
          'Takrir-i Sükûn Kanunu’nu ve İstiklâl Mahkemelerini, vasıta-i istibdat olarak kullanacağımız fikrini ortaya atanlar ve bu fikri telkine çalışanlar oldu. … Biz, fevkalâde ittihâz olunan ve fakat kanunî olan tedbirleri, hiçbir vakit ve hiçbir suretle, kanunun fevkine çıkmak için vasıta olarak kullanmadık.',
        soru: 'Bu metin hangi eleştiriye cevap veriyor? Mustafa Kemal hangi gerekçeyle kendini savunuyor?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Vasıta-i istibdat”: baskı aracı. “Telkin”: aşılama. “Fevkalade ittihaz olunan”: olağanüstü alınan. “Kanunun fevkine çıkmak”: kanunun üstüne çıkmak.' },
          { title: 'Eleştiriyi bul', body: 'Olağanüstü tedbirlerin bir baskı (istibdat) aracı olarak kullanılacağı eleştirisi.' },
          { title: 'Savunmayı bul', body: 'Tedbirlerin olağanüstü ama kanuni olduğu ve hiçbir zaman kanunun üstüne çıkmak için kullanılmadığı.' },
        ],
        cevap: 'Metin, Takrir-i Sükûn Kanunu’nun ve İstiklal Mahkemelerinin baskı aracı olarak kullanılacağı eleştirisine cevap verir. Mustafa Kemal tedbirlerin olağanüstü ama kanuni olduğunu ve kanunun üstüne çıkmak için kullanılmadığını söyleyerek kendini savunur.',
        cikarim: 'Bir metin bir eleştiriye cevap veriyorsa, o eleştirinin o dönemde var olduğunu da kanıtlar. Bu bölüm, olağanüstü tedbirlerin tartışıldığını gösteren bir kanıttır.',
      },
      {
        tur: 'ikincil',
        baslik: 'Demokratikleşme çabaları üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Serbest Cumhuriyet Fırkası 12 Ağustos 1930’da Mustafa Kemal’in isteğiyle kuruldu ve 17 Kasım 1930’da kendini feshetti. Bu deneme, Mustafa Kemal’in muhalefete kapıyı açık tuttuğunu gösterir. Ancak denemenin kısa sürmesi, dönemin koşullarında çok partili hayatın henüz yerleşemediğini de gösterir.',
        soru: 'Metindeki olguları ve yorumları ayır. Yazarın yargısı dengeli midir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Sonradan yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguları ayır', body: 'Partinin kuruluş ve fesih tarihleri, Mustafa Kemal’in isteğiyle kurulması olgudur.' },
          { title: 'Yorumları ayır', body: '“Muhalefete kapıyı açık tuttuğunu gösterir” ve “çok partili hayatın henüz yerleşemediğini gösterir” yorumdur.' },
          { title: 'Dengeyi değerlendir', body: 'Yazar hem denemenin olumlu yönünü (muhalefete açıklık) hem de sınırını (kısa sürmesi) kanıtlarla birlikte söylüyor. Bu dengeli bir yargıdır.' },
        ],
        cevap: 'Olgular: kuruluş ve fesih tarihleri, Mustafa Kemal’in isteğiyle kurulması. Yorumlar: muhalefete kapıyı açık tutması ve çok partili hayatın yerleşememesi. Yazar olumlu ve sınırlı yönleri birlikte verdiği için yargı dengelidir.',
        cikarim: 'Dengeli bir tarih yorumu, bir olayın hem başarılı hem başarısız yanlarını kanıtlarıyla birlikte gösterir.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Partileri karşılaştır',
      prompt: 'Terakkiperver Cumhuriyet Fırkası ile Serbest Cumhuriyet Fırkası’nı “kim kurdu?” ve “nasıl sona erdi?” ölçütlerine göre karşılaştır.',
      steps: [
        { title: 'Kim kurdu?', body: 'Terakkiperver: Kâzım Karabekir, Rauf (Orbay), Ali Fuat (Cebesoy) gibi Millî Mücadele komutanları, iktidara rağmen. Serbest: Fethi (Okyar), Mustafa Kemal’in isteğiyle.' },
        { title: 'Nasıl sona erdi?', body: 'Terakkiperver: 3 Haziran 1925’te Takrir-i Sükûn Kanunu’na dayanılarak kapatıldı. Serbest: 17 Kasım 1930’da kurucuları tarafından feshedildi.' },
      ],
      answer: 'Terakkiperver iktidara rağmen kuruldu ve hükümet kararıyla kapatıldı; Serbest Fırka iktidarın başındaki Mustafa Kemal’in isteğiyle kuruldu ve kendini feshetti.',
      takeaway: 'Karşılaştırma sorularında aynı ölçütleri iki taraf için ayrı ayrı yaz.',
    },
    {
      title: 'Bir tehdidi analiz et',
      prompt: 'Menemen Olayı’nı “ne oldu?”, “neye yönelikti?” ve “sonucu ne oldu?” sorularıyla analiz et.',
      steps: [
        { title: 'Ne oldu?', body: '23 Aralık 1930’da Menemen’de şeriat isteyen bir grup ayaklandı; yedek subay öğretmen Kubilay ve iki bekçi şehit edildi.' },
        { title: 'Neye yönelikti?', body: 'Laik Cumhuriyet’e ve inkılaplara.' },
        { title: 'Sonucu', body: 'Sorumlular yargılandı; laikliğin korunmasına daha fazla önem verildi.' },
      ],
      answer: 'Menemen Olayı laik Cumhuriyet’e yönelik bir irtica olayıdır; sonucunda laikliğin korunması kaygısı güçlendi.',
      takeaway: 'Analiz sorularında olayı parçalarına ayır: olay, hedef, sonuç.',
    },
    {
      title: 'Nutuk’tan kanıt göster',
      prompt: 'Nutuk’ta demokratikleşme çabalarına kanıt olarak gösterilebilecek bir bölümü açıkla.',
      steps: [
        { title: 'Bölümü seç', body: '“Halk Fırkasını teşkil teşebbüsü” bölümü.' },
        { title: 'Kanıtı açıkla', body: 'Mustafa Kemal parti kurma niyetini basın yoluyla duyurmuş ve programı için vatanseverlerin ve bilim insanlarının görüşüne başvurmuştur.' },
        { title: 'Kazanıma bağla', body: 'Siyasi hayatın bir parti çatısı altında ve halkın katılımıyla örgütlenmesi demokratikleşme yolunda bir adımdır.' },
      ],
      answer: 'Nutuk’un “Halk Fırkasını teşkil teşebbüsü” bölümü, partinin kuruluşunun basın yoluyla duyurulduğunu ve programın hazırlanmasında toplumun görüşüne başvurulduğunu gösterir.',
      takeaway: 'Kanıt sorularında kaynağın hangi bölümünü kullandığını ve bu bölümün neyi kanıtladığını açıkça yaz.',
    },
  ],
  questionClue: {
    concept: 'Soruda hangi parti ya da olaydan söz edildiğini nasıl anlarım?',
    statement: 'Soru bir tarih, bir kişi, bir program maddesi ya da bir olay verip partiyi, tehdidi ya da sonucu sorabilir.',
    clues: [
      '“1924”, “Kâzım Karabekir”, “ilk muhalefet”, “dinî inançlara saygı” → Terakkiperver Cumhuriyet Fırkası',
      '“1930”, “Fethi Okyar”, “Mustafa Kemal’in isteği”, “kendini feshetti” → Serbest Cumhuriyet Fırkası',
      '“Takrir-i Sükûn”, “1925” → Şeyh Said İsyanı ve Terakkiperver’in kapatılması',
      '“Giritli Şevki”, “Ziya Hurşit”, “1926” → İzmir suikast girişimi',
      '“Kubilay”, “23 Aralık 1930” → Menemen Olayı',
    ],
    reasoning: 'Önce yılı belirle (1924–1926 mı, 1930 mu?). Sonra olayın bir parti mi, bir isyan mı, bir suikast mı olduğuna bak.',
    boundary: 'Dikkat: Nutuk bir tarafın değerlendirmesidir. Bir soruda Nutuk’tan bir bölüm verilirse, onun Mustafa Kemal’in bakış açısını yansıttığını unutma.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'İTA.8.5.1 “açıklar”, İTA.8.5.2 ve İTA.8.5.3 “analiz eder” düzeyindedir. Sorular bir kronoloji, bir Nutuk bölümü ya da bir kanun maddesi verip çıkarım isteyebilir. Aşağıdaki kalıplar kazanımlarla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Partileri kuruluş, kurucular ve sonları bakımından karşılaştırma',
      'Nutuk’tan demokratikleşme çabalarına kanıt gösterme',
      'İzmir suikast girişimini sebep ve sonuçlarıyla analiz etme',
      'Cumhuriyet’e yönelik tehditleri ortak özellikleriyle değerlendirme',
    ],
  },
  checkpoints: [
    {
      prompt: 'Takrir-i Sükûn Kanunu hem isyanın bastırılmasına hem de muhalefet partisinin kapatılmasına yol açtı. Bu durum “güvenlik” ile “özgürlük” arasındaki ilişki hakkında ne düşündürür?',
      hint: 'Olağanüstü yetkiler kime, ne kadar süre ve hangi denetimle verilmeli?',
      answer: 'Olağanüstü yetkiler bir tehdidi ortadan kaldırmada etkili olabilir, ama aynı yetkiler özgürlükleri ve muhalefeti de sınırlayabilir. Bu yüzden bu tür yetkilerin süreli olması, bir makamın onayına bağlanması ve gerekince kaldırılması önemlidir; kanun da iki yıllık süreyle çıkarılmıştı.',
    },
    {
      prompt: 'Mustafa Kemal neden kendi iktidarına karşı bir muhalefet partisinin kurulmasını istemiş olabilir?',
      answer: 'Tek partili bir sistemde iktidar yeterince denetlenemez. Bir muhalefet partisi hükümetin hatalarını gösterebilir, halkın farklı görüşlerini temsil edebilir ve demokrasinin gelişmesine katkı sağlayabilir. Serbest Fırka’nın kurulması bu ihtiyacın görüldüğünü gösterir.',
    },
    {
      prompt: 'Menemen Olayı neden laik Cumhuriyet’e yönelik bir tehdit olarak değerlendirilir?',
      answer: 'Çünkü olayı çıkaranlar din adına şeriatın geri getirilmesini istiyor ve bu amaçla şiddete başvuruyordu. Hedefleri, din ile devlet işlerinin ayrıldığı laik düzen ve inkılaplardı.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.5.1, Atatürk döneminde demokratikleşme yolunda atılan adımları açıklamanı ister; açıklaması Cumhuriyet Halk Fırkası, Terakkiperver Cumhuriyet Fırkası ve Serbest Cumhuriyet Fırkası’nın ele alınmasını ve Nutuk’tan kanıt gösterilmesini ister. İTA.8.5.2 İzmir suikast girişimini, İTA.8.5.3 ise Cumhuriyet’in ilk yıllarındaki tehditleri analiz etmeni ister. Bu kazanımlara dayanan bir soru bir kronoloji ya da bir metin verip karşılaştırma veya çıkarım isteyebilir.',
    measures: [
      'Üç partiyi karşılaştırma',
      'Nutuk’tan kanıt gösterme ve bu kanıtın bakış açısını fark etme',
      'İzmir suikast girişimini sebep ve sonuçlarıyla açıklama',
      'Cumhuriyet’e yönelik tehditlerin ortak özelliklerini belirleme',
    ],
  },
  simulation: {
    title: 'Mini LGS: İki parti, iki son',
    passage:
      'Terakkiperver Cumhuriyet Fırkası 17 Kasım 1924’te Millî Mücadele’nin önde gelen komutanlarından bazıları tarafından kuruldu. Şubat 1925’te başlayan Şeyh Said İsyanı üzerine Takrir-i Sükûn Kanunu çıkarıldı ve parti 3 Haziran 1925’te bu kanuna dayanılarak kapatıldı. Serbest Cumhuriyet Fırkası ise 12 Ağustos 1930’da Mustafa Kemal’in isteğiyle kuruldu ve 17 Kasım 1930’da kurucuları tarafından feshedildi.',
    question: 'Bu bilgilere göre aşağıdakilerden hangisine ulaşılabilir?',
    options: [
      { text: 'Cumhuriyet’in ilk yıllarında çok partili hayata geçiş denemeleri kalıcı olamamıştır.', explanation: 'Doğru. İki muhalefet partisi de bir yıldan kısa sürede sona ermiştir.' },
      { text: 'Serbest Cumhuriyet Fırkası hükümet kararıyla kapatılmıştır.', explanation: 'Metne göre Serbest Fırka kurucuları tarafından feshedilmiştir.' },
      { text: 'Terakkiperver Cumhuriyet Fırkası Mustafa Kemal’in isteğiyle kurulmuştur.', explanation: 'Metinde bu bilgi Serbest Fırka için verilmiştir; Terakkiperver için değil.' },
      { text: 'Şeyh Said İsyanı’nın tek sebebi Terakkiperver Cumhuriyet Fırkası’dır.', explanation: 'Metin isyanın sebepleri hakkında bilgi vermez; ayrıca olayları tek bir sebebe bağlamak doğru değildir.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “bu bilgilere göre” diyor. İki partinin de kısa sürede sona erdiği bilgisi ortak bir sonuca götürür.',
    critical_point: 'İkinci ve üçüncü seçenekler iki partinin bilgilerini birbirine karıştırır. Metinde hangi bilginin hangi partiye ait olduğuna dikkat et.',
    takeaway: 'İki olayı anlatan metinlerde bilgileri tabloya dökmek karıştırmayı önler.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Demokratikleşme çabaları ve tehditler',
    range: '1922–1930',
    body:
      'Mustafa Kemal 7 Aralık 1922’de halkçılık esasına dayanan bir parti kuracağını açıkladı; Halk Fırkası 9 Eylül 1923’te kuruldu ve 10 Kasım 1924’te Cumhuriyet Halk Fırkası adını aldı. 17 Kasım 1924’te Kâzım Karabekir, Rauf (Orbay), Ali Fuat (Cebesoy) gibi isimlerin kurduğu Terakkiperver Cumhuriyet Fırkası ilk muhalefet partisi oldu. Şubat 1925’te başlayan Şeyh Said İsyanı üzerine 4 Mart 1925’te Takrir-i Sükûn Kanunu çıkarıldı ve parti 3 Haziran 1925’te kapatıldı. Haziran 1926’da ortaya çıkarılan İzmir suikast girişimi üzerine yapılan yargılamalarla muhalefet büyük ölçüde tasfiye edildi. 12 Ağustos 1930’da Mustafa Kemal’in isteğiyle Fethi (Okyar) Bey’in kurduğu Serbest Cumhuriyet Fırkası 17 Kasım 1930’da kendini feshetti; 23 Aralık 1930’da Menemen Olayı yaşandı. Çok partili hayata kalıcı geçiş 1946’ya kaldı.',
    turning_points: [
      '17 Kasım 1924 · Terakkiperver Cumhuriyet Fırkası',
      '4 Mart 1925 · Takrir-i Sükûn Kanunu',
      'Haziran 1926 · İzmir suikast girişimi',
      '12 Ağustos 1930 · Serbest Cumhuriyet Fırkası',
      '23 Aralık 1930 · Menemen Olayı',
    ],
  },
  summary: [
    '**Cumhuriyet Halk Fırkası:** 9 Eylül 1923’te Halk Fırkası olarak kuruldu; 10 Kasım 1924’te bugünkü adını aldı.',
    '**Terakkiperver Cumhuriyet Fırkası (17 Kasım 1924):** İlk muhalefet partisi; Kâzım Karabekir başkan. Şeyh Said İsyanı üzerine Takrir-i Sükûn Kanunu’na dayanılarak 3 Haziran 1925’te kapatıldı.',
    '**Serbest Cumhuriyet Fırkası (12 Ağustos 1930):** Mustafa Kemal’in isteğiyle Fethi (Okyar) kurdu; 17 Kasım 1930’da kendini feshetti.',
    '**İzmir suikast girişimi (Haziran 1926):** İhbarla ortaya çıkarıldı; İstiklal Mahkemesi’nde yargılamalar; muhalefetin tasfiyesi.',
    '**Tehditler:** Şeyh Said İsyanı (1925), İzmir suikast girişimi (1926), Menemen Olayı (23 Aralık 1930).',
    '**Nutuk’tan kanıtlar:** Halk Fırkası’nın kuruluş duyurusu; olağanüstü tedbirlerin savunusu; muhalefete yönelik eleştiriler (iktidarın bakış açısı).',
  ],
  quizzes: [
    {
      question: 'Türkiye’nin ilk muhalefet partisi aşağıdakilerden hangisidir?',
      options: ['Terakkiperver Cumhuriyet Fırkası', 'Serbest Cumhuriyet Fırkası', 'Cumhuriyet Halk Fırkası', 'Ahali Cumhuriyet Fırkası'],
      answer_index: 0,
      explanation: 'Terakkiperver Cumhuriyet Fırkası 17 Kasım 1924’te kurulan ilk muhalefet partisidir. Serbest Cumhuriyet Fırkası 1930’da kurulmuştur.',
    },
    {
      question: 'Serbest Cumhuriyet Fırkası ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['Mustafa Kemal’in isteğiyle kurulmuştur.', 'Takrir-i Sükûn Kanunu ile kapatılmıştır.', '1924’te kurulmuştur.', 'Kâzım Karabekir tarafından kurulmuştur.'],
      answer_index: 0,
      explanation: 'Serbest Cumhuriyet Fırkası 1930’da Mustafa Kemal’in isteğiyle Fethi (Okyar) tarafından kuruldu ve kendini feshetti.',
    },
    {
      question: 'Takrir-i Sükûn Kanunu hangi olay üzerine çıkarılmıştır?',
      options: ['Şeyh Said İsyanı', 'Menemen Olayı', 'İzmir suikast girişimi', 'Serbest Fırka’nın kurulması'],
      answer_index: 0,
      explanation: 'Kanun, Şubat 1925’te başlayan Şeyh Said İsyanı üzerine 4 Mart 1925’te çıkarıldı.',
    },
    {
      question: 'İzmir suikast girişiminin ortaya çıkarılmasında kimin ihbarı etkili olmuştur?',
      options: ['Giritli Şevki', 'Ziya Hurşit', 'Kubilay', 'Fethi Okyar'],
      answer_index: 0,
      explanation: 'Suikastçıları kaçıracak olan motorculardan Giritli Şevki yetkililere haber verdi. Ziya Hurşit suikastçıların başıydı.',
    },
    {
      question: 'Menemen Olayı en çok hangi ilkeye yönelik bir tehdit olarak değerlendirilir?',
      options: ['Laiklik', 'Devletçilik', 'Milliyetçilik', 'Halkçılık'],
      answer_index: 0,
      explanation: 'Olayı çıkaranlar şeriat istiyordu; hedefleri laik düzen ve inkılaplardı.',
    },
  ],
  next: ['Atatürk Dönemi Türk Dış Politikası: İlkeler ve Gelişmeler', 'Hatay’ın Anavatana Katılması'],
})

export default lesson
