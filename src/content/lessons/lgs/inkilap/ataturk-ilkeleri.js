import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.4 Atatürkçülük ve Çağdaşlaşan Türkiye · 1. ders
 * Kazanımlar: İTA.8.4.1 · İTA.8.4.9
 * Dayanak   : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   İTA.8.4.1 — Altı ilke kavramsal düzeyde ele alınır.
 *   İTA.8.4.9 — İlkeler; millî tarih bilinci, bağımsızlık ve özgürlük, egemenliğin
 *               millete ait olması, millî kültürün geliştirilmesi, çağdaş uygarlık
 *               düzeyinin üzerine çıkarma ideali, millî birlik ve beraberlik ile
 *               ülke bütünlüğü bağlamında açıklanır.
 *
 * KAPSAM KARARI
 * İlkelerin tanımları 1931 Cumhuriyet Halk Fırkası Programı’ndan (akademik
 * aktarım üzerinden), anayasa maddeleri Anayasa Mahkemesi ve Resmî Gazete
 * arşivinden birebir alındı. Program “kavramsal düzey” dediği için her ilkenin
 * ayrıntılı inkılap listesi sonraki derslere bırakıldı; burada yalnız örnek
 * olarak anılır. Bu derste harita yoktur; görsel omurga kronoloji ve kavram
 * zinciridir.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 15.
 */

const SLUG = 'lgs-tarih-ataturk-ilkeleri'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Atatürkçülük ve Çağdaşlaşan Türkiye',
  order: 1,
  title: 'Atatürk İlkeleri ve Temel Esasları: Çağdaş Türkiye’nin Pusulası',
  subtitle:
    'Altı ilke bir gecede yazılmadı. Millî Mücadele’de doğdu, inkılaplarla şekillendi, 1931’de tanımlandı ve 1937’de anayasaya girdi. Bu derste her ilkenin ne anlama geldiğini ve hangi temel esaslara dayandığını göreceksin.',
  minutes: 45,
  kazanimlar: ['İTA.8.4.1', 'İTA.8.4.9'],
  kapsamNotu:
    'İlkelerin tanımları 1931 Cumhuriyet Halk Fırkası Programı’ndan, anayasa maddeleri resmî metinlerden birebir alıntılanmıştır. Program ilkeleri “kavramsal düzeyde” istediği için inkılapların ayrıntıları sonraki derslerde işlenir.',
  prerequisites: [
    {
      topic: 'Millî Mücadele (3. ünite)',
      why: 'İlkelerin çoğu, Millî Mücadele’de alınan kararlardan ve yaşanan deneyimlerden doğdu.',
    },
    {
      topic: 'Teşkilât-ı Esasiye (1921)',
      why: '“Hâkimiyet bilâkaydüşart milletindir” ilkesi, Cumhuriyetçilik ve Halkçılığın başlangıç noktasıdır.',
    },
  ],
  outcomes: [
    'Altı ilkenin her birini kendi cümlelerinle açıklayabileceksin.',
    'İlkelerin nasıl ortaya çıktığını ve anayasaya nasıl girdiğini kronolojik olarak sıralayabileceksin.',
    'Bir inkılabı ya da durumu ilgili ilkeyle eşleştirebileceksin.',
    'İlkelerin dayandığı temel esasları açıklayabileceksin.',
    'İlkeler hakkındaki yaygın yanlış anlamaları fark edebileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Bir devletin pusulası',
    lead:
      'Savaş kazanılmıştı. Ama yeni bir devlet kurmak, savaş kazanmaktan daha uzun bir yoldu. Bu yolda yön gösteren ilkelere ihtiyaç vardı.',
    body:
      'Atatürk ilkeleri, Türkiye Cumhuriyeti’nin nasıl bir devlet olacağını ve Türk toplumunun nereye yöneleceğini gösteren temel düşüncelerdir: **Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik ve İnkılapçılık.**\n\n' +
      'Bu ilkeler önceden yazılmış bir planın uygulanması değildir. Millî Mücadele’de “milletin istiklalini yine milletin azim ve kararı kurtaracaktır” denildiğinde millî egemenlik düşüncesi doğmuştu. Cumhuriyetin ilanı, hukuk ve eğitim inkılapları bu düşünceyi somutlaştırdı. İlkeler önce 1927’de Cumhuriyet Halk Fırkası’nın nizamnamesinde kısmen, sonra 1931 programında altısı birden tanımlandı. **5 Şubat 1937**’de anayasanın 2. maddesine girerek devletin temel nitelikleri oldu.\n\n' +
      'Program bu ilkelerin iki yönünü birlikte ister: İlkelerin **ne anlama geldiğini** (İTA.8.4.1) ve ilkelerin **hangi temel esaslara dayandığını** (İTA.8.4.9).',
  },
  concepts: [
    { term: 'İlke', body: 'Bir düşüncenin ya da davranışın dayandığı temel kural. Atatürk ilkeleri devletin ve toplumun yönünü belirleyen kurallardır.' },
    { term: 'İnkılap', body: 'Bir toplumun kurumlarında ve yaşayışında köklü değişiklik. Saltanatın kaldırılması, Harf İnkılabı gibi.' },
    { term: 'Egemenlik', body: 'Bir ülkeyi yönetme yetkisi. Cumhuriyetle birlikte egemenlik padişahtan alınıp millete verildi.' },
    { term: 'Temel esas', body: 'İlkelerin dayandığı ortak düşünce. Örneğin “egemenliğin millete ait olması” hem Cumhuriyetçiliğin hem Halkçılığın temelidir.' },
    { term: 'Çağdaş uygarlık', body: 'Bilim, akıl ve özgürlüğe dayanan, dünyanın en gelişmiş toplumlarının ulaştığı yaşam düzeyi. Atatürk bu düzeyin de üzerine çıkmayı hedef gösterdi.' },
  ],
  why: {
    question: 'Neden ilkelere ihtiyaç vardı?',
    body:
      'Çünkü inkılaplar birbirinden bağımsız kararlar olarak kalırsa kalıcı olamazdı. Saltanatı kaldırmak, yeni bir alfabe kabul etmek ya da kadınlara seçme hakkı vermek, ancak ortak bir düşünceye bağlandığında anlam kazanıyordu. İlkeler bu ortak düşünceyi adlandırdı.\n\n' +
      'İlkeler aynı zamanda bir ölçüydü: Yeni bir karar alınırken “Bu karar egemenliği millete mi veriyor? Bilime ve akla mı dayanıyor? Milletin bütününün yararına mı?” diye sorulabilecekti. Bu yüzden ilkelere çoğu zaman bir **pusula** benzetmesi yapılır: Nereye gidileceğini gösterir ama yolu her dönemde yeniden yürümek gerekir.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: İlkelerin doğuşu (1919–1937)',
    lead: 'İlkeler bir anda değil, adım adım ortaya çıktı. Her satırda hangi ilkenin tohumunun atıldığını düşün.',
    intro: 'Kronolojinin ilk yarısı ilkelerin uygulamada doğuşunu, ikinci yarısı ise yazıya ve anayasaya geçişini gösterir.',
    items: [
      { title: '22 Haziran 1919 · Amasya Genelgesi', body: '“Milletin istiklalini yine milletin azim ve kararı kurtaracaktır.” Millî egemenlik düşüncesi ilk kez açıkça dile geldi.' },
      { title: '23 Nisan 1920 · Büyük Millet Meclisi', body: 'Milletin seçtiği temsilcilerden oluşan Meclis açıldı.' },
      { title: '20 Ocak 1921 · Teşkilât-ı Esasiye', body: '“Hâkimiyet bilâkaydüşart milletindir.” Egemenliğin kaynağı anayasaya yazıldı.' },
      { title: '29 Ekim 1923 · Cumhuriyet', body: 'Devletin şekli cumhuriyet olarak ilan edildi. (Ayrıntısını bir sonraki derste işleyeceğiz.)' },
      { title: '20 Nisan 1924 · 1924 Anayasası', body: '“Türkiye Devleti bir Cumhuriyettir.” Ancak 2. maddede devletin dininin İslam olduğu da yazıyordu.' },
      { title: '1927 · Parti nizamnamesi', body: 'Cumhuriyet Halk Fırkası kendini cumhuriyetçi, halkçı ve milliyetçi olarak tanımladı; din ile dünya işlerinin ayrılmasını esas saydı.' },
      { title: '10 Nisan 1928 · Laikliğe doğru', body: 'Anayasadaki “Türkiye Devletinin dini, Dini İslâmdır” hükmü kaldırıldı.' },
      { title: '20 Nisan 1931 · Seçim beyannamesi', body: 'Mustafa Kemal, partinin cumhuriyetçi, milliyetçi, halkçı, devletçi, laik ve inkılapçı niteliklerini altısı bir arada saydı.' },
      { title: 'Mayıs 1931 · Parti programı', body: 'Cumhuriyet Halk Fırkası’nın Üçüncü Büyük Kongresi’nde altı ilke programa girdi ve tek tek tanımlandı.' },
      { title: '5 Şubat 1937 · Anayasaya giriş', body: 'Anayasanın 2. maddesi: “Türkiye Devleti, cumhuriyetçi, milliyetçi, halkçı, devletçi, lâik ve inkılâpçıdır.”' },
    ],
    takeaway:
      'Dikkat et: İlkeler önce uygulamada doğdu (1919–1928), sonra yazıya geçirildi (1927–1931), en son anayasaya girdi (1937). Uygulama, tanımdan önce geldi.',
    body:
      'Bu kronolojide bir desen var: Her ilke önce bir ihtiyaçtan ve bir karardan doğdu, sonra adlandırıldı. Örneğin **Cumhuriyetçilik**’in kökü 1919’daki millî egemenlik vurgusuna, 1921’deki anayasaya ve 1923’teki cumhuriyetin ilanına dayanır; ama “cumhuriyetçi” sözcüğü parti belgelerine 1927’de, anayasaya 1937’de girdi. **Laiklik** de böyledir: 1924 anayasasında devletin bir dini vardı; bu hüküm 1928’de kaldırıldı, “laik” sözcüğü ise 1937’de anayasaya yazıldı.\n\n' +
      'Bu ilkeler bugün de yaşamaktadır. 1982 Anayasası’nın 2. maddesi Türkiye Cumhuriyeti’ni “Atatürk milliyetçiliğine bağlı … demokratik, laik ve sosyal bir hukuk Devleti” olarak tanımlar; 4. maddesi de devletin şeklinin cumhuriyet olduğu hükmünün değiştirilemeyeceğini belirtir.',
  },
  dataTable: {
    title: 'Altı ilke: öz, dayandığı esas ve örnek',
    columns: ['İlke', 'Özü (kısaca)', 'Dayandığı temel esas', 'Örnek inkılap ya da gelişme'],
    rows: [
      ['Cumhuriyetçilik', 'Millî egemenliği en iyi temsil eden yönetim biçimi cumhuriyettir; cumhuriyet her tehlikeye karşı korunur.', 'Egemenliğin millete ait olması', 'Saltanatın kaldırılması, cumhuriyetin ilanı'],
      ['Milliyetçilik', 'Bütün çağdaş milletlerle uyum içinde ilerlerken Türk toplumunun kendine özgü karakterini ve bağımsız kimliğini korumak.', 'Millî birlik ve beraberlik, bağımsızlık, millî kültür', 'Harf İnkılabı, Türk Tarih ve Türk Dil kurumlarının kurulması'],
      ['Halkçılık', 'Egemenliğin kaynağı millettir; kanun önünde mutlak eşitlik, hiçbir kişiye, aileye, sınıfa ayrıcalık tanımamak.', 'Egemenliğin millete ait olması, millî birlik', 'Soyadı Kanunu ve unvanların kaldırılması, kadınlara siyasi haklar'],
      ['Devletçilik', 'Bireysel girişimi esas tutarak, milletin yararının gerektirdiği işlerde, özellikle ekonomide devletin fiilen yer alması.', 'Çağdaş uygarlık düzeyine ulaşma, bağımsızlık', 'Birinci Beş Yıllık Sanayi Planı ve devlet fabrikaları'],
      ['Laiklik', 'Kanunların bilime ve dünya ihtiyaçlarına göre yapılması; din vicdan işi olduğu için din ile devlet ve siyaset işlerinin ayrı tutulması.', 'Çağdaş uygarlık düzeyine ulaşma, millî birlik', 'Halifeliğin kaldırılması, Türk Medeni Kanunu, 1928 anayasa değişikliği'],
      ['İnkılapçılık', 'Milletin fedakârlıklarla yaptığı inkılaplara ve onlardan doğan ilkelere sadık kalmak ve onları korumak.', 'Çağdaş uygarlık düzeyinin üzerine çıkma ideali', 'Bütün inkılapların korunması ve geliştirilmesi'],
    ],
    caption:
      '“Özü” sütunu 1931 Cumhuriyet Halk Fırkası Programı’ndaki tanımların sadeleştirilmiş hâlidir. Örneklerin ayrıntılarını sonraki derslerde işleyeceğiz.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'İlkeler nasıl doğdu? Sebep, gelişme, sonuç',
    lead: 'İlkeler bir ihtiyaçtan doğdu. Zincir, bu ihtiyacın nereden geldiğini ve ilkelerin nasıl kalıcı hâle geldiğini gösterir.',
    intro: 'Zincirin başı ilkeleri gerekli kılan durumu, ortası uygulamayı ve tanımlanmayı, sonu da anayasaya girişi ve bugünkü etkisini anlatır.',
    steps: [
      { tur: 'sebep', title: 'Geri kalmış bir düzen', body: 'Osmanlı Devleti’nde egemenlik padişahtaydı; hukuk, eğitim ve ekonomi çağın gerisinde kalmış, kapitülasyonlar bağımsızlığı zedelemişti.' },
      { tur: 'sebep', title: 'Millî Mücadele deneyimi', body: 'İşgaller karşısında millet kendi kaderini kendisi belirledi; millî egemenlik ve tam bağımsızlık düşünceleri güçlendi.' },
      { tur: 'gelisme', title: 'İnkılaplar', body: 'Saltanatın kaldırılması, cumhuriyetin ilanı, halifeliğin kaldırılması, hukuk, eğitim ve toplumsal alandaki değişiklikler birbirini izledi.' },
      { tur: 'gelisme', title: 'İlkelerin adlandırılması', body: '1927’de partinin nizamnamesinde üç ilke yer aldı; 1931’de altı ilke programa girdi ve tek tek tanımlandı.' },
      { tur: 'sonuc', title: 'Anayasaya giriş', body: '5 Şubat 1937’de altı ilke anayasanın 2. maddesine yazıldı; bir partinin programı olmaktan çıkıp devletin temel niteliği oldu.' },
      { tur: 'sonraki-etki', title: 'Bugüne uzanan etki', body: 'Bugünkü anayasa Türkiye Cumhuriyeti’ni Atatürk milliyetçiliğine bağlı, demokratik, laik ve sosyal bir hukuk devleti olarak tanımlar; cumhuriyet hükmü değiştirilemez.' },
    ],
    inference:
      'Temel çıkarım: İlkeler soyut düşünceler olarak başlamadı; somut ihtiyaçlara verilen cevaplardan doğdu. Bu yüzden her ilkeyi, cevap verdiği sorunla birlikte öğrenmek en kalıcı yoldur.',
    body:
      'İlkeler birbirinden bağımsız değildir; birbirini tamamlar:\n\n' +
      '- **Cumhuriyetçilik ile Halkçılık** aynı kaynağa dayanır: Egemenlik milletindir. Cumhuriyetçilik bu egemenliğin **yönetim biçimini**, Halkçılık ise **eşitlik ve halkın yararını** öne çıkarır.\n' +
      '- **Milliyetçilik ile Laiklik** millî birliği güçlendirir: Vatandaşları din ya da soy farkıyla değil, ortak vatandaşlıkla bir araya getirir.\n' +
      '- **Devletçilik** ekonomik bağımsızlığın aracıdır: Özel sermayenin yetmediği yerde devlet devreye girer.\n' +
      '- **İnkılapçılık** diğer beşini korur: Yapılan inkılapların geri alınmamasını ve yeni ihtiyaçlara göre geliştirilmesini ister.',
  },
  comparison: {
    title: 'Eski düzen ve ilkelerle kurulan düzen',
    columns: ['Osmanlı Devleti’nin son dönemi', 'Atatürk ilkelerine göre Türkiye Cumhuriyeti'],
    rows: [
      { label: 'Egemenliğin kaynağı', values: ['Padişah ve hanedan', 'Millet (Cumhuriyetçilik, Halkçılık)'] },
      { label: 'Toplumu bir arada tutan bağ', values: ['Din ve hanedana bağlılık; ümmet anlayışı', 'Ortak vatandaşlık ve millet bilinci (Milliyetçilik)'] },
      { label: 'Hukukun kaynağı', values: ['Büyük ölçüde din kuralları ve ayrıcalıklar', 'Akıl, bilim ve toplumun ihtiyaçları (Laiklik)'] },
      { label: 'Toplumsal yapı', values: ['Unvanlar, ayrıcalıklı zümreler', 'Kanun önünde eşitlik (Halkçılık)'] },
      { label: 'Ekonomi', values: ['Kapitülasyonlar ve dış borç baskısı', 'Ekonomik bağımsızlık; gerektiğinde devletin öncülüğü (Devletçilik)'] },
      { label: 'Değişime bakış', values: ['Yeniliklerin yarım kalması, eski ile yeninin bir arada yaşaması', 'İnkılapları koruma ve geliştirme (İnkılapçılık)'] },
    ],
    insight:
      'Asıl fark: Eski düzende devlet bir hanedanın, yeni düzende ise bütün milletin devletidir. Altı ilkenin her biri bu dönüşümün bir yönünü adlandırır.',
  },
  traps: [
    {
      title: 'Laikliği dinsizlik sanmak',
      wrong: 'Laiklik, devletin dine karşı olması ve dini yasaklaması demektir.',
      right: 'Laiklik, din vicdan işi olduğu için din ile devlet ve siyaset işlerinin ayrı tutulması, kanunların bilime ve toplumun ihtiyaçlarına göre yapılmasıdır. Herkes inancında serbesttir.',
      body: '1931 programındaki tanımda “Din telâkkisi vicdanî olduğundan” ifadesi geçer: Din, kişinin vicdanına ait bir meseledir.',
    },
    {
      title: 'Devletçiliği özel teşebbüsün yasaklanması sanmak',
      wrong: 'Devletçilik ilkesine göre bütün ekonomik faaliyetleri devlet yapar; özel girişim yasaktır.',
      right: 'Devletçilik bireysel çalışmayı ve girişimi esas tutar. Devlet yalnız milletin yararının gerektirdiği ve özel sermayenin yetmediği işlerde, özellikle ekonomide fiilen yer alır.',
      body: '1931 programı devletçiliği “Ferdî mesai ve faaliyeti esas tutmakla beraber” diye başlatır.',
    },
    {
      title: 'Milliyetçiliği başka milletleri küçümsemek sanmak',
      wrong: 'Atatürk milliyetçiliği, başka milletlerle ilişkiyi reddeder ve onları düşman görür.',
      right: 'Atatürk milliyetçiliği, bütün çağdaş milletlerle uyum içinde ilerlerken Türk milletinin kendine özgü karakterini ve bağımsızlığını korumayı amaçlar.',
      body: '1931 programındaki tanımda “bütün muasır milletlere muvazi ve onlarla bir ahenkte yürümekle beraber” ifadesi geçer.',
    },
    {
      title: 'İlkelerle temel esasları karıştırmak',
      wrong: '“Millî tarih bilinci” ve “ülke bütünlüğü” de Atatürk’ün altı ilkesi arasındadır.',
      right: 'Altı ilke; Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik ve İnkılapçılıktır. Millî tarih bilinci, ülke bütünlüğü gibi kavramlar bu ilkelerin dayandığı temel esaslardır.',
      body: 'Sorularda “ilke” mi yoksa “temel esas” mı sorulduğuna dikkat et.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'İlkelerin arkasındaki kişiler',
    lead: 'İlkeler bir kişinin eseri olarak başladı ama onları tanımlayan, anlatan ve uygulayan başka kişiler de vardı.',
    intro: 'Kartlarda her kişinin ilkelerin ortaya çıkışındaki rolünü görürsün.',
    figures: [
      {
        name: 'Mustafa Kemal Atatürk',
        period: '1919–1938',
        position: 'Cumhurbaşkanı ve Cumhuriyet Halk Fırkası Genel Başkanı',
        contribution: 'Millî Mücadele’den itibaren millî egemenliği ve tam bağımsızlığı savundu; inkılapları başlattı. 20 Nisan 1931’deki seçim beyannamesinde altı niteliği bir arada saydı.',
        connections: ['Altı ilke', 'İnkılaplar'],
        significance: 'İlkelerin kurucusu ve uygulayıcısıdır.',
      },
      {
        name: 'İsmet Paşa (İnönü)',
        period: '1931 · Başvekil',
        position: 'Başvekil ve Cumhuriyet Halk Fırkası Genel Başkan Vekili',
        contribution: '1931 kongresinin açılış konuşmasında ilkeleri dile getirdi; ilkeler aynı kongrede parti programına girdi.',
        connections: ['1931 programı'],
        significance: 'İlkelerin programa ve devlet politikasına dönüşmesinde görev alan hükümet başkanıdır.',
      },
      {
        name: 'Afet İnan',
        period: '1930 · Tarihçi, öğretmen',
        position: 'Medenî Bilgiler kitabının hazırlayıcısı',
        contribution: 'Atatürk’ün el yazısıyla yazdığı notlardan oluşan Medenî Bilgiler kitabını hazırladı. Kitapta laiklik, 1931 programındakine çok yakın sözlerle tanımlanır.',
        connections: ['Laiklik', 'Medenî Bilgiler'],
        significance: 'İlkelerin okullarda nasıl anlatılacağını gösteren kitabın hazırlanmasında görev aldı.',
      },
      {
        name: 'Mustafa Şeref Bey',
        period: '1931 · İktisat Vekili',
        position: 'İktisat (Ekonomi) Vekili',
        contribution: '1931 kongresinde devletçiliğin sınırını anlattı: Devletçiliğin, devletin kâr amacıyla ticarete girmesi değil; düzenlemesi, denetlemesi, koruması ve gerektiğinde kamu hizmeti olarak işletmesi olduğunu söyledi.',
        connections: ['Devletçilik'],
        significance: 'Devletçiliğin o günkü anlamını birinci elden açıklayan konuşmanın sahibidir.',
      },
    ],
    takeaway:
      'İlkeleri anlamak için onları kimin, hangi ihtiyaçla ve hangi sözlerle tanımladığına bakmak gerekir. Tanımlar bize ilkelerin o gün ne anlama geldiğini gösterir.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-ilkeler`,
      title: 'Altı ilkeyi tek tek tanı',
      lead: 'Her ilkeyi üç soruyla incele: Ne demek? Neden gerekti? Hangi inkılapla somutlaştı?',
      blocks: [
        {
          id: `${SLUG}-ilkeler-anlatim`,
          type: 'prose',
          body:
            '**Cumhuriyetçilik.** Egemenliğin kayıtsız şartsız millete ait olduğunu ve bu egemenliği en iyi cumhuriyetin temsil ettiğini savunur. *Neden gerekti?* Saltanatta egemenlik bir ailenin elindeydi ve babadan oğula geçiyordu. *Somut örnek:* Saltanatın kaldırılması ve cumhuriyetin ilanı. Cumhuriyetçilik yalnız devletin adı değil, yöneticilerin seçimle belirlenmesi ve millete hesap vermesidir.\n\n' +
            '**Milliyetçilik.** Türk milletini ortak vatan, ortak tarih, ortak dil ve kültür etrafında birleştirmeyi; dünya milletleriyle uyum içinde ilerlerken bağımsızlığı ve millî kimliği korumayı amaçlar. *Neden gerekti?* Osmanlı’nın son döneminde farklı fikir akımları devleti kurtarmaya yetmemişti; Millî Mücadele ise millet bilinciyle kazanılmıştı. *Somut örnek:* Türk Tarih ve Türk Dil kurumlarının kurulması, dilde ve tarihte millî bilinç çalışmaları.\n\n' +
            '**Halkçılık.** Devletin halk için ve halkla birlikte yönetilmesini, kanun önünde eşitliği ve hiçbir kişiye, aileye, sınıfa ayrıcalık tanınmamasını savunur. *Neden gerekti?* Eski düzende unvanlar ve ayrıcalıklı zümreler vardı. *Somut örnek:* Unvanların kaldırılması, kadınlara seçme ve seçilme hakkı.\n\n' +
            '**Devletçilik.** Bireysel girişimi esas alır; ama milletin yararının gerektirdiği ve özel sermayenin yetmediği işlerde devletin ekonomide öncülük etmesini ister. *Neden gerekti?* Sermaye birikimi azdı; 1929 Dünya Ekonomik Bunalımı da özel girişimi zorlamıştı. *Somut örnek:* Devlet eliyle kurulan fabrikalar ve sanayi planları.\n\n' +
            '**Laiklik.** Kanunların din kurallarına göre değil, akla, bilime ve toplumun ihtiyaçlarına göre yapılmasını; din vicdan işi olduğu için din ile devlet işlerinin ayrı tutulmasını savunur. Devlet bütün inançlara eşit uzaklıktadır ve herkes inancında serbesttir. *Somut örnek:* Halifeliğin kaldırılması, Türk Medeni Kanunu, anayasadaki devlet dini hükmünün kaldırılması.\n\n' +
            '**İnkılapçılık.** Yapılan inkılaplara sadık kalmayı, onları korumayı ve çağın gereklerine göre geliştirmeyi savunur. *Neden gerekti?* Osmanlı’daki yenilik hareketleri çoğu zaman yarım kalmış ya da geri alınmıştı. İnkılapçılık, değişimin kalıcı olmasını ister; akıl ve bilimi yol gösterici kabul eder.',
        },
        {
          id: `${SLUG}-ilkeler-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: Altı ok',
          body: 'Cumhuriyet Halk Fırkası bu altı ilkeyi amblemindeki altı okla simgeledi. Sırayla hatırla: Cumhuriyetçilik (kim yönetir?), Milliyetçilik (kimiz?), Halkçılık (kimin için?), Devletçilik (ekonomi nasıl güçlenir?), Laiklik (kurallar neye dayanır?), İnkılapçılık (kazanımlar nasıl korunur?).',
        },
      ],
    },
    {
      id: `${SLUG}-temel-esaslar`,
      title: 'İlkelerin dayandığı temel esaslar',
      lead: 'İTA.8.4.9, ilkeleri yedi temel esas bağlamında açıklamanı ister. Temel esaslar, ilkelerin ortak köküdür; bir esas birden fazla ilkeyi besler.',
      blocks: [
        {
          id: `${SLUG}-temel-esaslar-harita`,
          type: 'concept_map',
          title: 'Yedi temel esas: birbirine bağlanan bir zincir',
          intro: 'Esasları sırayla izle. Her ok, bir esasın bir sonrakini nasıl hazırladığını gösterir. Bir esasa dokununca hangi ilkelerle ilişkili olduğunu okursun.',
          nodes: [
            { id: 'tarih', label: 'Millî tarih bilinci', detail: 'Milletin geçmişini bilmesi ve ondan güç alması. İlkeler: Milliyetçilik. Örnek: Türk Tarih Kurumu’nun kurulması.' },
            { id: 'bagimsizlik', label: 'Bağımsızlık ve özgürlük', detail: 'Milletin hiçbir yabancı güce bağımlı olmaması ve bireylerin özgür olması. İlkeler: Milliyetçilik, Devletçilik. Örnek: Kapitülasyonların kaldırılması.' },
            { id: 'egemenlik', label: 'Egemenliğin millete ait olması', detail: 'Ülkeyi yönetme yetkisinin bir kişiye ya da aileye değil, millete ait olması. İlkeler: Cumhuriyetçilik, Halkçılık. Örnek: Cumhuriyetin ilanı.' },
            { id: 'kultur', label: 'Millî kültürün geliştirilmesi', detail: 'Dilin, sanatın ve geleneklerin korunup geliştirilmesi. İlkeler: Milliyetçilik, İnkılapçılık. Örnek: Türk Dil Kurumu’nun kurulması.' },
            { id: 'cagdas', label: 'Çağdaş uygarlık düzeyinin üzerine çıkma ideali', detail: 'Akıl ve bilimle dünyanın en gelişmiş toplumlarının da ilerisine geçmek. İlkeler: Laiklik, İnkılapçılık, Devletçilik. Örnek: 1933 Üniversite Reformu.' },
            { id: 'birlik', label: 'Millî birlik ve beraberlik', detail: 'Vatandaşların ortak amaçlar etrafında bir arada olması. İlkeler: Milliyetçilik, Halkçılık, Laiklik. Örnek: Kanun önünde eşitlik.' },
            { id: 'butunluk', label: 'Ülke bütünlüğü', detail: 'Vatan topraklarının bölünmez bir bütün olması. İlkeler: Milliyetçilik, Cumhuriyetçilik. Örnek: Misakımillî sınırlarının korunması.' },
          ],
          links: [
            { from: 'tarih', to: 'bagimsizlik', label: 'geçmişini bilen millet bağımsızlığını korur' },
            { from: 'bagimsizlik', to: 'egemenlik', label: 'bağımsız millet kendi kendini yönetir' },
            { from: 'egemenlik', to: 'kultur', label: 'egemen millet kendi kültürünü geliştirir' },
            { from: 'kultur', to: 'cagdas', label: 'güçlü kültürle çağdaş uygarlığa yürür' },
            { from: 'cagdas', to: 'birlik', label: 'bu hedefe ancak birlikte ulaşılır' },
            { from: 'birlik', to: 'butunluk', label: 'birlik, vatanın bütünlüğünü korur' },
          ],
          caption: 'Zincirdeki sıra bir öğrenme yoludur, tek doğru sıra değildir. Önemli olan her esasın hangi ilkelerle bağlantılı olduğunu görebilmektir.',
        },
        {
          id: `${SLUG}-temel-esaslar-anlatim`,
          type: 'prose',
          body:
            'Temel esaslar bir inkılabın “neden” yapıldığını anlamanın anahtarıdır. Örneğin Harf İnkılabı’nı düşün: Okuma yazmayı kolaylaştırarak **çağdaş uygarlık düzeyine ulaşma** idealine, yazı dilini halkın konuştuğu Türkçeye yaklaştırarak **millî kültürün geliştirilmesi** esasına ve bütün vatandaşların aynı yazıyla okuyup yazması sayesinde **millî birlik ve beraberliğe** hizmet eder. Bir inkılap çoğu zaman birden fazla esasa dayanır.\n\n' +
            'Sınavda bir durum verildiğinde önce “Bu durum hangi temel esası güçlendiriyor?” diye sor, sonra “Bu esas hangi ilkeyle ilişkili?” diye ilerle.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste ilkelerin 1931’deki resmî tanımlarını ve 1937’deki anayasa maddesini okuyacaksın. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'İlk iki metin, 1931 Cumhuriyet Halk Fırkası Programı’ndaki tanımlardır; programın taranmış aslına ulaşamadığımız için akademik bir yayındaki aktarımdan alınmıştır. Laiklik tanımı, 1930’da hazırlanan Medenî Bilgiler kitabındaki tanımla da örtüşür.\n\n' +
      'İlk üç metin birebir alıntıdır. Dördüncü metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: '1931 programında Cumhuriyetçilik, Milliyetçilik ve Halkçılık',
        kunye: 'Cumhuriyet Halk Fırkası Nizamnamesi ve Programı (1931), s. 30–31. Aktaran: Hakan Uzun, “Tek Parti Döneminde Yapılan Cumhuriyet Halk Partisi Kongreleri…”, Çağdaş Türkiye Tarihi Araştırmaları Dergisi, IX/20-21 (2010).',
        nitelik: 'Birebir alıntı (akademik bir yayındaki aktarımdan). Üç ayrı tanım “…” ile birleştirilmiştir.',
        metin:
          'Fırka, Cümhuriyetin, millî hâkimiyet mefkûresini en iyi ve emin surette temsil ve tatbik eder devlet şekli olduğuna kanidir. … Fırka, terakki ve inkişaf yolunda ve beynelmilel temas ve münasebetlerde bütün muasır milletlere muvazi ve onlarla bir ahenkte yürümekle beraber Türk içtimaî heyetinin hususî seciyelerini ve başlı başına müstakil hüviyetini mahfuz tutmayı esas sayar. … Kanunlar önünde mutlak bir müsavat kabul eden ve hiçbir ferde, hiçbir aileye, hiçbir sınıfa, hiçbir cemaate imtiyaz tanımıyan fertleri halktan ve halkçı olarak kabul ederiz.',
        soru: 'Üç tanımda hangi ilkeler anlatılıyor? Her birinin en önemli sözcüğünü bul ve ilkenin özünü kendi cümlenle yaz.',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Fırka”: parti. “Hâkimiyet mefkûresi”: egemenlik ülküsü. “Kani”: inanmış. “Terakki ve inkişaf”: ilerleme ve gelişme. “Beynelmilel”: uluslararası. “Muasır”: çağdaş. “Muvazi”: paralel, uyumlu. “Seciye”: karakter. “Mahfuz tutmak”: korumak. “Müsavat”: eşitlik. “İmtiyaz”: ayrıcalık.' },
          { title: 'Birinci tanım', body: 'Cumhuriyet, millî egemenliği en iyi temsil eden devlet şeklidir → Cumhuriyetçilik. Anahtar: “millî hâkimiyet”.' },
          { title: 'İkinci tanım', body: 'Çağdaş milletlerle uyum içinde ilerlerken Türk toplumunun özgün karakterini ve bağımsız kimliğini korumak → Milliyetçilik. Anahtar: “müstakil hüviyet”.' },
          { title: 'Üçüncü tanım', body: 'Kanun önünde mutlak eşitlik; kişiye, aileye, sınıfa ayrıcalık yok → Halkçılık. Anahtar: “imtiyaz tanımayan”.' },
        ],
        cevap: 'Birinci tanım Cumhuriyetçiliği (millî egemenliği en iyi temsil eden devlet şekli cumhuriyettir), ikinci tanım Milliyetçiliği (çağdaş milletlerle uyum içinde ama özgün ve bağımsız kalmak), üçüncü tanım Halkçılığı (kanun önünde eşitlik, hiçbir zümreye ayrıcalık yok) anlatır.',
        cikarim: 'İkinci tanımdaki “bütün muasır milletlere muvazi ve onlarla bir ahenkte” ifadesi, Atatürk milliyetçiliğinin başka milletlere kapalı ya da düşmanca olmadığını belgeyle gösterir.',
      },
      {
        tur: 'birincil',
        baslik: '1931 programında Devletçilik, Laiklik ve İnkılapçılık',
        kunye: 'Cumhuriyet Halk Fırkası Nizamnamesi ve Programı (1931), s. 30–31. Aktaran: Hakan Uzun (2010). Laiklik tanımının benzeri: Afet İnan, Medenî Bilgiler ve M. Kemal Atatürk’ün El Yazıları (TTK, 1969).',
        nitelik: 'Birebir alıntı (akademik bir yayındaki aktarımdan). Üç ayrı tanım “…” ile birleştirilmiştir.',
        metin:
          'Ferdi mesai ve faaliyeti esas tutmakla beraber mümkün olduğu kadar az zaman içinde milleti refaha ve memleketi mamuriyete eriştirmek için milletin umumî ve yüksek menfaatlerinin icap ettirdiği işlerde –bilhassa iktisadî sahada– Devleti fiilen alâkadar etmek mühim esaslarımızdandır. … Din telâkkisi vicdanî olduğundan, Fırka, din fikirlerini Devlet ve dünya işlerinden ve siyasetten ayrı tutmayı milletimizin muasır terakkide başlıca muvaffakiyet amili görür. … Fırka, milletimizin birçok fedakârlıklarla yaptığı inkılâplardan doğan ve inkişaf eden prensiplere sadık kalmayı ve onları müdafaa etmeyi esas tutar.',
        soru: 'Devletçilik tanımında devletin ekonomideki rolü hangi şartla sınırlandırılmış? Laiklik tanımında dinin yeri nasıl belirlenmiş?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Ferdî mesai”: bireysel çalışma. “Refah”: bolluk, gönenç. “Mamuriyet”: bayındırlık. “İcap ettirmek”: gerektirmek. “İktisadî saha”: ekonomi alanı. “Telakki”: anlayış. “Vicdanî”: vicdana ait. “Muvaffakiyet âmili”: başarı etkeni. “Müdafaa”: savunma.' },
          { title: 'Devletçiliğin şartını bul', body: 'Bireysel çalışma esastır; devlet yalnız milletin genel ve yüksek yararının gerektirdiği işlerde, özellikle ekonomide devreye girer.' },
          { title: 'Laikliğin gerekçesini bul', body: 'Din vicdan işidir; bu yüzden din fikirleri devlet işlerinden ve siyasetten ayrı tutulur.' },
          { title: 'İnkılapçılığı özetle', body: 'Fedakârlıklarla yapılan inkılaplara ve onlardan doğan ilkelere sadık kalmak ve onları savunmak.' },
        ],
        cevap: 'Devletçilikte devletin rolü, bireysel çalışmanın esas olması ve devletin yalnız milletin yararının gerektirdiği işlere girmesi şartıyla sınırlandırılmıştır. Laiklikte din, kişinin vicdanına ait bir mesele olarak görülmüş ve devlet ile siyaset işlerinden ayrı tutulmuştur.',
        cikarim: 'Tanımlardaki şart cümleleri (“esas tutmakla beraber”, “vicdanî olduğundan”) ilkelerin sınırını gösterir. Bir ilkeyi yorumlarken bu sınırları dikkate almak, yanlış anlamaları önler.',
      },
      {
        tur: 'birincil',
        baslik: '1937 anayasa değişikliği',
        kunye: 'Teşkilâtı Esasiye Kanununun bazı maddelerinin değiştirilmesine dair kanun, Kanun no 3115, kabul 5 Şubat 1937, 1. madde. Metin: Resmî Gazete, 13 Şubat 1937, sayı 3533.',
        nitelik: 'Birebir alıntı.',
        metin:
          'Madde 1 — Teşkilâtı Esasiye Kanununun ikinci maddesi aşağıda yazılı şekilde değiştirilmiştir: Türkiye Devleti, cumhuriyetçi, milliyetçi, halkçı, devletçi, lâik ve inkılâpçıdır. Resmî dili Türkçedir. Makarrı Ankara şehridir.',
        soru: 'Bu değişiklikle ilkelerin niteliği nasıl değişti? 1924’teki özgün 2. maddeyle karşılaştır: “Türkiye Devletinin dini, Dini İslâmdır; resmî dili Türkçedir; makarrı Ankara şehridir.”',
        adimlar: [
          { title: 'Sözcüğü çöz', body: '“Makarr”: merkez, başkent.' },
          { title: 'İki metni karşılaştır', body: '1924 metninde devletin bir dini vardı; 1937 metninde bu hüküm yok (1928’de kaldırılmıştı) ve yerine altı ilke gelmiş.' },
          { title: 'Niteliği yorumla', body: '1931’de bir partinin programında yer alan ilkeler, 1937’de anayasaya girerek bütün devletin temel nitelikleri oldu.' },
        ],
        cevap: 'Değişiklikle ilkeler bir partinin programı olmaktan çıkıp devletin anayasal nitelikleri oldu. 1924’teki metinde devletin bir dini varken 1937 metninde devlet “lâik” olarak tanımlandı.',
        cikarim: 'Aynı maddenin farklı yıllardaki hâllerini karşılaştırmak, değişimi somut olarak gösterir. Bir anayasa maddesi, bir dönemin “aynası” gibidir.',
      },
      {
        tur: 'ikincil',
        baslik: 'İlkeler üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Altı ilke 1937’de anayasaya girdi. Bu ilkeler birbirinden bağımsız kurallar değil, birbirini tamamlayan bir bütündür. İlkelerin en önemlisi hiç şüphesiz Laikliktir; çünkü diğer bütün ilkeler ancak onunla var olabilir.',
        soru: 'Metindeki olguyu ve yorumları ayır. Son cümledeki yargı hakkında ne düşünüyorsun?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Sonradan yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguyu ayır', body: 'İlkelerin 1937’de anayasaya girmesi olgudur (Resmî Gazete, sayı 3533).' },
          { title: 'Yorumları ayır', body: '“Birbirini tamamlayan bir bütün” ve “en önemlisi Laikliktir” ifadeleri yorumdur.' },
          { title: 'Son cümleyi değerlendir', body: 'İlkelerin birbirini tamamladığı yorumu birçok kanıtla desteklenebilir. Ama bir ilkeyi “hiç şüphesiz en önemlisi” saymak ve diğerlerinin “ancak onunla var olabileceğini” söylemek, kanıtla kesinleştirilemeyen ve metnin kendi söylediği “bütünlük” düşüncesiyle de çelişen bir yargıdır.' },
        ],
        cevap: 'Olgu: ilkelerin 1937’de anayasaya girmesi. Yorumlar: ilkelerin birbirini tamamlayan bir bütün olması ve Laikliğin en önemli ilke olması. Son cümle, “hiç şüphesiz” gibi kesin bir ifadeyle kanıtlanamayan bir yargıda bulunuyor ve metnin önceki cümlesiyle çelişiyor.',
        cikarim: '“Hiç şüphesiz”, “kesinlikle”, “ancak” gibi sözcükler bir yargının gücünü abartabilir. İyi bir okur, bu sözcükleri görünce kanıtı arar.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'İnkılabı ilkeyle eşleştir',
      prompt: 'Aşağıdaki gelişmeleri en yakından ilgili oldukları ilkeyle eşleştir: (1) Saltanatın kaldırılması, (2) Unvanların kaldırılması, (3) Devlet eliyle fabrikalar kurulması, (4) Anayasadan devlet dini hükmünün çıkarılması.',
      steps: [
        { title: '1', body: 'Egemenlik bir hanedandan alınıp millete verildi → Cumhuriyetçilik.' },
        { title: '2', body: 'Toplumdaki ayrıcalıklar kaldırıldı, eşitlik sağlandı → Halkçılık.' },
        { title: '3', body: 'Özel sermayenin yetmediği yerde devlet ekonomiye girdi → Devletçilik.' },
        { title: '4', body: 'Din ile devlet işleri ayrıldı → Laiklik.' },
      ],
      answer: '1–Cumhuriyetçilik · 2–Halkçılık · 3–Devletçilik · 4–Laiklik.',
      takeaway: 'Bir inkılap birden fazla ilkeyle ilişkili olabilir. Sorularda “en yakından ilgili” olanı seç ve gerekçeni inkılabın sonucuna dayandır.',
    },
    {
      title: 'Durumdan temel esası bul',
      prompt: 'Bir okulda öğrencilere Türk tarihinin farklı dönemleri ve bu dönemlerde yaşanan başarılar anlatılıyor; öğrenciler de geçmişten ders çıkarıyor. Bu durum hangi temel esasla ve hangi ilkeyle en çok ilişkilidir?',
      steps: [
        { title: 'Temel esas', body: 'Geçmişi bilmek ve ondan güç almak → Millî tarih bilinci.' },
        { title: 'İlke', body: 'Millî tarih bilinci en çok Milliyetçilik ilkesini besler.' },
      ],
      answer: 'Temel esas: Millî tarih bilinci. İlke: Milliyetçilik.',
      takeaway: 'Önce esası, sonra ilkeyi bul. Esas “neden”, ilke “hangi yol” sorusunun cevabıdır.',
    },
    {
      title: 'İlkeler arasındaki ilişkiyi açıkla',
      prompt: 'Cumhuriyetçilik ile Halkçılık arasındaki ortak noktayı ve farkı açıkla.',
      steps: [
        { title: 'Ortak nokta', body: 'İkisi de egemenliğin millete ait olması esasına dayanır.' },
        { title: 'Fark', body: 'Cumhuriyetçilik bu egemenliğin yönetim biçimine (cumhuriyet, seçim) odaklanır; Halkçılık ise eşitliğe ve devletin halkın yararına çalışmasına odaklanır.' },
      ],
      answer: 'Ortak nokta millî egemenliktir. Cumhuriyetçilik yönetim biçimini, Halkçılık eşitliği ve halkın yararını öne çıkarır.',
      takeaway: 'İki ilkeyi karşılaştırırken önce ortak esası, sonra her birinin vurguladığı yönü yaz.',
    },
  ],
  questionClue: {
    concept: 'Soruda hangi ilkeden söz edildiğini nasıl anlarım?',
    statement: 'Soru bir inkılap, bir durum ya da bir tanım verip ilkeyi ya da temel esası sorabilir.',
    clues: [
      '“Egemenlik”, “seçim”, “yönetim biçimi” → Cumhuriyetçilik',
      '“Ortak dil, tarih, kültür”, “bağımsız kimlik” → Milliyetçilik',
      '“Eşitlik”, “ayrıcalıkların kaldırılması”, “halkın yararı” → Halkçılık',
      '“Ekonomide devlet öncülüğü”, “özel sermayenin yetmediği yer” → Devletçilik',
      '“Akıl ve bilim”, “din ile devlet işlerinin ayrılması”, “vicdan özgürlüğü” → Laiklik',
      '“İnkılapları korumak ve geliştirmek” → İnkılapçılık',
    ],
    reasoning: 'Önce verilen durumun hangi alanı etkilediğini belirle (yönetim, kimlik, eşitlik, ekonomi, hukuk, değişim). Sonra o alanın ilkesini seç.',
    boundary: 'Dikkat: “Millî tarih bilinci”, “ülke bütünlüğü” gibi kavramlar ilke değil, temel esastır.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'İTA.8.4.1 ve İTA.8.4.9 “açıklar” ve “kavrar” düzeyinde kazanımlardır. Sorular çoğunlukla bir inkılap ya da bir günlük hayat durumu verip ilgili ilkeyi ya da temel esası isteyebilir. Aşağıdaki kalıplar kazanımlarla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'İnkılabı ilkeyle eşleştirme',
      'Bir tanımdan ilkeyi bulma',
      'Bir durumdan temel esası bulma',
      'İlkeler hakkındaki yanlış yargıyı belirleme',
    ],
  },
  checkpoints: [
    {
      prompt: 'Neden ilkeler önce uygulamada ortaya çıktı, sonra yazıya geçirildi?',
      hint: 'Bir kural önce mi yazılır, yoksa bir ihtiyaçtan mı doğar?',
      answer: 'Çünkü ilkeler somut sorunlara verilen cevaplardan doğdu. Önce ihtiyaç ortaya çıktı ve inkılaplarla karşılandı; bu inkılapların ortak düşüncesi daha sonra adlandırılıp tanımlandı ve en son anayasaya yazıldı.',
    },
    {
      prompt: 'İnkılapçılık ilkesi, diğer beş ilke için neden önemlidir?',
      answer: 'Çünkü İnkılapçılık yapılan değişikliklerin korunmasını ve geri alınmamasını ister. Diğer ilkelerle yapılan inkılaplar ancak bu koruma sayesinde kalıcı olabilir.',
    },
    {
      prompt: 'Günlük hayatta Halkçılık ilkesine uygun bir örnek ver.',
      answer: 'Örneğin bir okulda bütün öğrencilere aileleri, maddi durumları ya da çevreleri ne olursa olsun aynı kuralların uygulanması ve eşit fırsat verilmesi Halkçılık ilkesinin eşitlik anlayışına uygundur.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.4.1, altı ilkenin kavramsal olarak açıklanmasını ister; İTA.8.4.9 ise ilkelerin yedi temel esas bağlamında kavranmasını ister. Bu kazanımlara dayanan bir soru, bir tanımı, bir inkılabı ya da günlük hayattan bir durumu verip hangi ilkeyle ya da temel esasla ilişkili olduğunu sorabilir.',
    measures: [
      'Altı ilkeyi tanımlarıyla tanıma',
      'İnkılapları ve durumları ilkelerle ilişkilendirme',
      'Temel esasları ilkelerle ilişkilendirme',
      'İlkeler hakkındaki yaygın yanlış anlamaları ayırt etme',
    ],
  },
  simulation: {
    title: 'Mini LGS: Bir tanım, bir ilke',
    passage:
      '1931 Cumhuriyet Halk Fırkası Programı’nda bir ilke şöyle tanımlanmıştır: “Fırka, devlet idaresinde bütün kanunların, nizamların ve usullerin ilim ve fenlerin muasır medeniyete temin ettiği esas ve şekillere ve dünya ihtiyaçlarına göre yapılmasını ve tatbik edilmesini prensip kabul etmiştir.”',
    question: 'Bu tanımda anlatılan ilke ve dayandığı temel esas aşağıdakilerden hangisinde birlikte verilmiştir?',
    options: [
      { text: 'Laiklik – Çağdaş uygarlık düzeyinin üzerine çıkma ideali', explanation: 'Doğru. Kanunların bilime ve dünya ihtiyaçlarına göre yapılması laikliktir; bu da bilim ve akılla çağdaş uygarlığa ulaşma idealine dayanır.' },
      { text: 'Devletçilik – Ülke bütünlüğü', explanation: 'Tanımda ekonomiden ya da devletin ekonomideki rolünden söz edilmez.' },
      { text: 'Halkçılık – Millî tarih bilinci', explanation: 'Tanımda eşitlikten ya da tarih bilincinden söz edilmez.' },
      { text: 'Cumhuriyetçilik – Egemenliğin millete ait olması', explanation: 'Tanımda yönetim biçiminden ya da egemenlikten söz edilmez.' },
    ],
    answer_index: 0,
    stem_analysis: 'Tanımın anahtar ifadeleri “ilim ve fen”, “muasır medeniyet” ve “dünya ihtiyaçları”dır. Bunlar kanunların din kurallarına değil, bilime ve çağın gereklerine dayanması demektir.',
    critical_point: 'Tanımda “din” sözcüğü geçmediği için laikliği fark etmek zor olabilir. Ama kanunların kaynağının bilim ve dünya ihtiyaçları olarak gösterilmesi, laikliğin hukuk alanındaki anlamıdır.',
    takeaway: 'Bir tanımda ilkenin adı geçmeyebilir. Anahtar kavramlara bak ve onları ilkenin özüyle eşleştir.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: İlkelerin doğuşu ve anayasaya girişi',
    range: '1919–1937',
    body:
      'Atatürk ilkeleri Millî Mücadele’nin millî egemenlik ve tam bağımsızlık düşüncesinden doğdu. 1921 Teşkilât-ı Esasiye’si egemenliğin kayıtsız şartsız millete ait olduğunu yazdı; 1923’te cumhuriyet ilan edildi. 1924 Anayasası devletin şeklini cumhuriyet olarak belirledi; devletin dininin İslam olduğu hükmü 1928’de kaldırıldı. Cumhuriyet Halk Fırkası 1927’de kendini cumhuriyetçi, halkçı ve milliyetçi olarak tanımladı; Mustafa Kemal 20 Nisan 1931’de altı niteliği bir arada saydı ve Mayıs 1931’de altı ilke parti programında tanımlandı. 5 Şubat 1937’de ilkeler anayasanın 2. maddesine girdi. İlkeler; millî tarih bilinci, bağımsızlık ve özgürlük, egemenliğin millete ait olması, millî kültürün geliştirilmesi, çağdaş uygarlık düzeyinin üzerine çıkma ideali, millî birlik ve beraberlik ile ülke bütünlüğü esaslarına dayanır.',
    turning_points: [
      '20 Ocak 1921 · Egemenlik millete',
      '29 Ekim 1923 · Cumhuriyet',
      '10 Nisan 1928 · Devlet dini hükmü kaldırıldı',
      'Mayıs 1931 · Altı ilke parti programında',
      '5 Şubat 1937 · Altı ilke anayasada',
    ],
  },
  summary: [
    '**Altı ilke:** Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık.',
    '**Doğuşu:** Önce uygulamada (1919–1928), sonra parti belgelerinde (1927, 1931), en son anayasada (5 Şubat 1937).',
    '**Özleri:** Millî egemenlik (Cumhuriyetçilik), çağdaş milletlerle uyumlu bağımsız kimlik (Milliyetçilik), eşitlik (Halkçılık), gerektiğinde devlet öncülüğü (Devletçilik), din ile devlet işlerinin ayrılığı (Laiklik), inkılapları koruma (İnkılapçılık).',
    '**Yedi temel esas:** Millî tarih bilinci; bağımsızlık ve özgürlük; egemenliğin millete ait olması; millî kültürün geliştirilmesi; çağdaş uygarlık düzeyinin üzerine çıkma ideali; millî birlik ve beraberlik; ülke bütünlüğü.',
    '**Dikkat:** Laiklik dinsizlik değildir; Devletçilik özel girişimi yasaklamaz; Milliyetçilik başka milletlere düşmanlık değildir.',
  ],
  quizzes: [
    {
      question: 'Atatürk ilkeleri hangi yıl anayasaya girmiştir?',
      options: ['1937', '1924', '1928', '1931'],
      answer_index: 0,
      explanation: 'İlkeler 5 Şubat 1937’de anayasanın 2. maddesine girdi. 1931’de parti programına girmiş, 1928’de devlet dini hükmü kaldırılmıştı.',
    },
    {
      question: 'Aşağıdakilerden hangisi Atatürk ilkelerinden biri değildir?',
      options: ['Ülke bütünlüğü', 'Halkçılık', 'Devletçilik', 'İnkılapçılık'],
      answer_index: 0,
      explanation: 'Ülke bütünlüğü bir ilke değil, ilkelerin dayandığı temel esaslardan biridir.',
    },
    {
      question: '“Kanun önünde hiçbir kişiye, aileye ve sınıfa ayrıcalık tanınmaz.” Bu ifade en çok hangi ilkeyle ilişkilidir?',
      options: ['Halkçılık', 'Devletçilik', 'İnkılapçılık', 'Laiklik'],
      answer_index: 0,
      explanation: 'Kanun önünde eşitlik ve ayrıcalıkların reddi Halkçılığın özüdür.',
    },
    {
      question: 'Devletçilik ilkesiyle ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['Bireysel girişimi esas tutar, gerektiğinde devleti ekonomide görevlendirir.', 'Özel teşebbüsü tamamen yasaklar.', 'Devletin ekonomiye hiç karışmamasını ister.', 'Yalnız tarım alanını kapsar.'],
      answer_index: 0,
      explanation: '1931 programına göre devletçilik “ferdî mesai ve faaliyeti esas tutmakla beraber” milletin yararının gerektirdiği işlerde devletin ekonomide yer almasıdır.',
    },
    {
      question: 'Türk Tarih Kurumu’nun kurulması en çok hangi temel esasa hizmet eder?',
      options: ['Millî tarih bilinci', 'Ülke bütünlüğü', 'Egemenliğin millete ait olması', 'Bağımsızlık ve özgürlük'],
      answer_index: 0,
      explanation: 'Türk tarihinin araştırılması ve öğretilmesi, milletin geçmişini tanımasını ve millî tarih bilinci kazanmasını sağlar.',
    },
  ],
  next: ['Siyasi Alanda İnkılaplar: Saltanatın Kaldırılması, Cumhuriyet ve 1924 Anayasası', 'Hukuk, Eğitim ve Kültür Alanında İnkılaplar'],
})

export default lesson
