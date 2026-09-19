import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.7 Atatürk’ün Ölümü ve Sonrası · 1. ders
 * Kazanımlar : İTA.8.7.1 · İTA.8.7.2
 * Dayanak    : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMALARI
 *   8.7.1 Atatürk’ün ölümüne ilişkin yerli ve yabancı basında çıkan haber ve
 *         yorumlara değinilir. İsmet İnönü’nün cumhurbaşkanı seçilmesine değinilir.
 *   8.7.2 Atatürk’ün “En büyük eserim Türkiye Cumhuriyeti’dir.” sözüne ve yazılı
 *         eserlerine değinilir.
 *
 * KAPSAM KARARI
 * Birincil kaynaklar özgün yazımıyla verildi: Resmî Gazete 10 Kasım 1938 (sayı 4059)
 * hükûmet tebliği, TBMM Zabıt Ceridesi 11 Kasım 1938 (D. V, C. 27, 3. inikad) ve
 * Türk Tarih Kurumunun yayımladığı 5 Eylül 1938 tarihli vasiyetname. Gazete
 * manşetleri C. Akseki (2016) ve İ. Bayram (2025) makalelerindeki aktarımlardan
 * alındı; yabancı gazetelerin sözleri Türkçe çeviri olarak etiketlendi. “En büyük
 * eserim Türkiye Cumhuriyeti’dir.” sözü programda geçtiği için verildi; özgün
 * kaynağı belirsiz olduğundan Atatürk’e atfedilen söz olarak sunuldu ve 1938
 * hükûmet tebliğindeki belgelenmiş ifadeyle desteklendi. Harita kullanılmadı:
 * kazanım coğrafi değil; görsel omurga kronoloji ve eser haritasıdır.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 23.
 */

const SLUG = 'lgs-tarih-ataturkun-olumu-ve-eserleri'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Atatürk’ün Ölümü ve Sonrası',
  order: 1,
  title: 'Atatürk’ün Ölümü ve Bıraktığı Eserler',
  subtitle:
    'Bir milletin yası, dünyanın saygısı ve bir günde sarsılmadan devam eden bir devlet. Atatürk’ün en büyük eseri neden Cumhuriyet’tir?',
  minutes: 45,
  kazanimlar: ['İTA.8.7.1', 'İTA.8.7.2'],
  kapsamNotu:
    'Resmî Gazete (10 Kasım 1938), Meclis tutanağı (11 Kasım 1938) ve vasiyetname özgün yazımıyla verilmiştir. Yabancı gazetelerin ifadeleri Türkçe çeviridir. “En büyük eserim Türkiye Cumhuriyeti’dir.” sözünün özgün kaynağı belirsiz olduğu için “Atatürk’e atfedilen söz” olarak sunulmuştur.',
  prerequisites: [
    {
      topic: 'Atatürk ilkeleri ve inkılaplar',
      why: 'Atatürk’ün eserlerinden söz ederken inkılapları ve ilkeleri de eser olarak göreceğiz.',
    },
    {
      topic: 'Hatay’ın anavatana katılması (önceki ders)',
      why: 'Atatürk’ün son aylarını ve 1 Kasım 1938 konuşmasının Başbakan tarafından okunmasını orada gördük.',
    },
  ],
  outcomes: [
    'Atatürk’ün ölümünün yerli ve yabancı basına nasıl yansıdığını açıklayabileceksin.',
    'Bu yansımalardan Atatürk’ün fikir ve eserlerinin evrensel değerine ilişkin çıkarım yapabileceksin.',
    'İsmet İnönü’nün cumhurbaşkanı seçilme sürecini anayasaya dayanarak anlatabileceksin.',
    'Atatürk’ün yazılı eserlerinden ve Türk milletine bıraktığı diğer eserlerden örnekler verebileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: '10 Kasım 1938, saat dokuzu beş geçe',
    lead:
      'Atatürk, 10 Kasım 1938 Perşembe sabahı İstanbul’da Dolmabahçe Sarayı’nda hayatını kaybetti. Haber aynı gün hükûmetin resmî tebliğiyle millete duyuruldu.',
    body:
      'Atatürk’ün sağlığı 1937’den itibaren bozulmuştu. Ekim 1938’in ortasından itibaren gazeteler hastalığıyla ilgili resmî tebliğleri düzenli olarak yayımlıyordu. 1 Kasım 1938’de Meclis’i açamamış, açış konuşması Başbakan Celal Bayar tarafından okunmuştu. 10 Kasım sabahı saat 9.05’te hayatını kaybetti. Doktorlarının raporu ve hükûmetin tebliği aynı gün **Resmî Gazete**’de yayımlandı.\n\n' +
      'Bu derste iki soruya cevap arayacağız. Birincisi: Atatürk’ün ölümü Türkiye’de ve dünyada nasıl karşılandı, bu tepkiler onun fikir ve eserlerinin değeri hakkında bize ne söyler? İkincisi: Atatürk Türk milletine hangi eserleri bıraktı? Göreceğiz ki bu iki sorunun cevabı birbirine bağlıdır: Atatürk öldükten sonraki gün devletin anayasaya göre, sarsılmadan yeni cumhurbaşkanını seçmesi, onun en büyük eserinin ayakta olduğunun kanıtıdır.',
  },
  concepts: [
    { term: 'Tebliğ', body: 'Resmî bir kurumun bir durumu kamuoyuna duyurmak için yayımladığı bildiri. Hükûmet, Atatürk’ün ölümünü 10 Kasım 1938’de bir tebliğle duyurdu.' },
    { term: 'Vekâleten', body: 'Birinin yerine geçici olarak görev yapma. Meclis Başkanı Abdülhalik Renda, yeni cumhurbaşkanı seçilene kadar cumhurbaşkanlığına vekâlet etti.' },
    { term: 'Katafalk', body: 'Cenaze törenlerinde tabutun konulduğu yüksek, süslü sehpa.' },
    { term: 'Manşet', body: 'Gazetenin birinci sayfasındaki en büyük ve en önemli başlık.' },
    { term: 'Vasiyetname', body: 'Bir kişinin ölümünden sonra mallarının ve isteklerinin nasıl yerine getirileceğini yazdığı belge. Atatürk vasiyetnamesini 5 Eylül 1938’de kendi el yazısıyla yazdı.' },
    { term: 'Evrensel değer', body: 'Yalnızca bir millet için değil, bütün insanlık için önemli ve geçerli olan değer.' },
  ],
  why: {
    question: 'Bir liderin ölümüne verilen tepkiler neden tarih için önemlidir?',
    body:
      'Çünkü tepkiler, o liderin yaşarken yaptıklarının nasıl değerlendirildiğini gösteren kanıtlardır. Türk gazetelerinin Atatürk’ü “kurtarıcı” ve “baba” olarak anması, milletin ona duyduğu bağlılığı; yabancı gazetelerin onu “Modern Türkiye’nin Mimarı” olarak anması ise yaptıklarının dünyada da tanındığını gösterir.\n\n' +
      'Ama tarihçi bir kaynağı okurken dikkatli olmalıdır. Övgü dolu bir haber, bütün dünyanın her konuda aynı düşündüğü anlamına gelmez. Bu yüzden tek bir gazeteye değil, farklı ülkelerden ve farklı türden kaynaklara birlikte bakarız: resmî belgeler, Meclis tutanakları, gazeteler ve yıllar sonra alınan uluslararası kararlar. Hepsi aynı yönü gösteriyorsa, çıkarımımız güçlü demektir.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Veda ve sonrası (1938–1981)',
    lead: 'Aşağıdaki tarihler Atatürk’ün son aylarından, eserlerinin dünyada tanındığı 1981 yılına kadar uzanır.',
    intro: 'İlk dokuz madde yaklaşık üç ay içinde yaşandı; son üç madde ise yıllar sonrasına aittir.',
    items: [
      { title: '5 Eylül 1938 · Vasiyetname', body: 'Atatürk vasiyetnamesini kendi el yazısıyla yazdı; gelirlerinden kalanın yarı yarıya Türk Tarih ve Türk Dil kurumlarına verilmesini istedi.' },
      { title: '1 Kasım 1938 · Son Meclis konuşması', body: 'Atatürk hasta olduğu için Meclis açış konuşmasını Başbakan Celal Bayar okudu.' },
      { title: '10 Kasım 1938 · Ölüm ve tebliğ', body: 'Atatürk saat 9.05’te Dolmabahçe’de öldü. Hükûmet tebliği yayımlandı; Meclis Başkanı Abdülhalik Renda cumhurbaşkanlığına vekâlet etti.' },
      { title: '11 Kasım 1938 · Yeni cumhurbaşkanı', body: 'TBMM, İsmet İnönü’yü 348 oyla, oybirliğiyle cumhurbaşkanı seçti. İnönü aynı gün yemin edip konuşma yaptı.' },
      { title: '11 Kasım 1938 · Yas manşetleri', body: 'Gazeteler siyah başlıklarla çıktı. Yabancı gazeteler de ölüm haberini ve Atatürk hakkında değerlendirmeleri yayımladı.' },
      { title: '16–18 Kasım 1938 · Dolmabahçe’de veda', body: 'Halk Dolmabahçe’de katafalkın önünden geçerek Atatürk’e veda etti; 17 Kasım’daki izdihamda 11 kişi hayatını kaybetti.' },
      { title: '19 Kasım 1938 · İstanbul’dan uğurlama', body: 'Cenaze namazından sonra naaş top arabasıyla Sarayburnu’na, oradan Yavuz gemisiyle İzmit’e, İzmit’ten özel trenle Ankara’ya götürüldü.' },
      { title: '20 Kasım 1938 · Ankara', body: 'Naaş Ankara’da karşılandı ve TBMM önünde hazırlanan katafalka konuldu.' },
      { title: '21 Kasım 1938 · Cenaze töreni', body: 'Yabancı devletlerin temsilcilerinin ve askerî birliklerinin de katıldığı törenle naaş, Etnografya Müzesi’ndeki geçici kabrine konuldu.' },
      { title: '10 Kasım 1953 · Anıtkabir', body: 'Atatürk’ün naaşı, kendisi için yapılan Anıtkabir’e nakledildi.' },
      { title: '1978 · UNESCO kararı', body: 'UNESCO Genel Konferansı, Atatürk’ün doğumunun 100. yılını anma ve kutlama programına aldı.' },
      { title: '1981 · Atatürk Yılı', body: 'Atatürk’ün doğumunun 100. yılı olan 1981, UNESCO kararıyla dünyada “Atatürk Yılı” olarak anıldı.' },
    ],
    takeaway:
      'Dikkat et: Atatürk 10 Kasım’da öldü, yeni cumhurbaşkanı ertesi gün seçildi. Devlet bir gün bile başsız kalmadı; aradaki bir günde Meclis Başkanı vekâlet etti.',
    body:
      'Kronolojideki ilk iki gün, bu dersin en önemli iki gününü oluşturur. **10 Kasım**’da hükûmet tebliği, 1924 Anayasası’nın (Teşkilât-ı Esasiye Kanunu) 33. maddesine göre Meclis Başkanının cumhurbaşkanlığına vekâlet edeceğini ve 34. maddesine göre Meclisin “derhal” yeni cumhurbaşkanını seçeceğini duyurdu. **11 Kasım**’da Meclis toplandı, Atatürk’ün hatırasına beş dakika ayakta saygı duruşu yaptı ve seçime geçti. Katılan 348 milletvekilinin 348’i de oyunu İsmet İnönü’ye verdi.\n\n' +
      'Bu hız ve düzen tesadüf değildi. Atatürk’ün kurduğu Meclis, anayasa ve hükûmet düzeni, onun yokluğunda da çalışıyordu. Birkaç gün sonra başlayan cenaze törenlerinde ise milletin derin yası ve dünyanın saygısı birlikte görüldü: İstanbul’dan Ankara’ya uzanan yolda halk geceyi meşalelerle aydınlattı, Ankara’daki törene yabancı devletler askerî birlikleriyle katıldı.',
  },
  dataTable: {
    title: 'Yerli ve yabancı basında Atatürk’ün ölümü',
    columns: ['Kaynak', 'Tarih', 'Ne yazdı?', 'Neyi vurguluyor?'],
    rows: [
      ['Resmî Gazete (hükûmet tebliği)', '10 Kasım 1938', '“Türk vatanı büyük yapıcısını, Türk Milleti Ulu Şefini, insanlık büyük evlâdını kaybetti.”', 'Atatürk’ün hem millete hem insanlığa ait olduğu'],
      ['Ulus', '11 Kasım 1938', '“Kurtarıcını ve En Büyük Evlâdını Kaybettin. Türk Milleti Sen sağ ol!”', 'Kurtarıcılık; millete güven'],
      ['Tan', '11 Kasım 1938', '“Babamızı Kaybettik”', 'Milletle lider arasındaki duygusal bağ'],
      ['Son Posta', '11 Kasım 1938', '“Onun arkasından yalnız Türk yurdu değil, bütün dünya ağlıyor!”', 'Kaybın evrensel olduğu'],
      ['The New York Times (ABD)', '11 Kasım 1938', 'Ölüm haberini birinci sayfada verdi; Türk hükûmetinin tebliğini aktardı.', 'Uluslararası ilgi'],
      ['The Washington Post (ABD)', '11 Kasım 1938', 'Atatürk’ü “Modern Türkiye’nin Mimarı” olarak niteledi (çeviri).', 'Kuruculuk ve çağdaşlaşma'],
    ],
    caption:
      'Türk gazetelerinin manşetleri C. Akseki’nin (2016), Amerikan gazetelerinin ifadeleri İ. Bayram’ın (2025) araştırmasındaki aktarımlardan alınmıştır. Yabancı gazetelerin ifadeleri Türkçe çeviridir.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Bir liderin ölümü, bir devletin devamı',
    lead: 'Zincir, Atatürk’ün ölümünden sonra devletin nasıl sarsılmadan devam ettiğini ve eserlerinin nasıl yaşatıldığını gösterir.',
    intro: 'Zincirin başında devletin hazırlığı, ortasında 10–21 Kasım günleri, sonunda yıllar sonraki etkiler vardır.',
    steps: [
      { tur: 'sebep', title: 'Anayasal düzen hazırdı', body: '1924 Anayasası, cumhurbaşkanlığı boşaldığında Meclis Başkanının vekâlet etmesini (m. 33) ve Meclisin derhal yeni cumhurbaşkanını seçmesini (m. 34) öngörüyordu.' },
      { tur: 'sebep', title: 'Kurumlar güçlüydü', body: 'Meclis, hükûmet ve ordu Atatürk’ün kurduğu düzen içinde çalışıyordu; hastalık döneminde de devlet işleri yürüyordu.' },
      { tur: 'gelisme', title: '10–11 Kasım 1938', body: 'Hükûmet tebliği yayımlandı; Abdülhalik Renda vekâlet etti; ertesi gün İsmet İnönü oybirliğiyle cumhurbaşkanı seçildi.' },
      { tur: 'gelisme', title: 'Yas ve cenaze törenleri', body: 'Yerli ve yabancı basın ölümü geniş biçimde yazdı; İstanbul ve Ankara’daki törenlere halk ve yabancı devletler katıldı.' },
      { tur: 'sonuc', title: 'Devlet sarsılmadan devam etti', body: 'Yönetim değişikliği anayasaya uygun, barışçı ve hızlı biçimde gerçekleşti.' },
      { tur: 'sonraki-etki', title: 'Eserler yaşatıldı', body: 'Vasiyetnameyle Türk Tarih ve Türk Dil kurumları desteklendi; 1953’te Anıtkabir tamamlandı; 1981 UNESCO kararıyla Atatürk Yılı olarak anıldı.' },
    ],
    inference:
      'Temel çıkarım: Bir liderin ölümünden sonra devletin karışıklığa düşmeden devam etmesi, o liderin kişiye değil kurumlara dayanan bir düzen kurduğunu gösterir. Atatürk’ün en büyük eserinin Cumhuriyet olduğu bu yüzden söylenir.',
    body:
      'Burada tek nedenli bir anlatıdan kaçınmak gerekir. Devletin sarsılmadan devam etmesinin tek nedeni Atatürk’ün kişisel etkisi değildir. Anayasanın açık hükümleri, Meclisin ve hükûmetin çalışır durumda olması, ordunun düzene bağlı kalması ve milletin yas içinde bile düzeni koruması birlikte etkili olmuştur.\n\n' +
      'Hükûmet tebliği de bu duruma dikkat çeker: Türk milletinin, yeni cumhurbaşkanının etrafında hükûmetiyle ve ordusuyla “sarsılmaz bir varlık olarak” toplanacağını söyler. Yani 1938’deki yöneticiler de devletin devamını, Atatürk’ün kurduğu düzenin sağlamlığına bağlıyordu.',
  },
  comparison: {
    title: 'Yerli ve yabancı basın: benzerlikler ve farklar',
    columns: ['Yerli basın', 'Yabancı basın'],
    rows: [
      { label: 'Genel ton', values: ['Derin yas; siyah başlıklar, tam sayfa Atatürk fotoğrafları', 'Saygılı ve değerlendirici; ölüm haberi ve hayat hikâyesi'] },
      { label: 'Öne çıkan nitelendirme', values: ['Kurtarıcı, baba, en büyük evlat, Ulu Önder', 'Modern Türkiye’nin mimarı, kurucusu'] },
      { label: 'Vurgulanan yönler', values: ['Millî Mücadele, inkılaplar, hatıralar, Nutuk’tan alıntılar', 'İnkılaplar: laiklik, Latin harfleri, kadın hakları, yeni kanunlar'] },
      { label: 'Geleceğe bakış', values: ['Milletin onun izinde yürüyeceği', 'Türkiye’nin iç ve dış politikasını sürdürmesinin beklendiği'] },
      { label: 'Ortak nokta', values: ['Atatürk modern Türkiye’nin kurucusudur', 'Atatürk modern Türkiye’nin kurucusudur'] },
    ],
    insight:
      'İki basın farklı duygularla yazsa da aynı sonuçta buluşur: Atatürk, yıkılmış bir imparatorluğun yerine çağdaş bir devlet kurmuştur. Farklı ülkelerden kaynakların aynı noktada buluşması, bu değerlendirmenin güvenilirliğini artırır.',
  },
  traps: [
    {
      title: 'İnönü’nün halk tarafından seçildiğini sanmak',
      wrong: 'Atatürk’ün ölümünden sonra yapılan genel seçimde halk İsmet İnönü’yü cumhurbaşkanı seçti.',
      right: 'İsmet İnönü’yü 11 Kasım 1938’de TBMM seçti. 1924 Anayasası’na göre cumhurbaşkanını Meclis seçiyordu.',
      body: 'Oylamaya katılan 348 milletvekilinin tamamı İnönü’ye oy verdi.',
    },
    {
      title: 'Naaşın hemen Anıtkabir’e konulduğunu sanmak',
      wrong: 'Atatürk’ün naaşı 1938’de Anıtkabir’e defnedildi.',
      right: 'Naaş 21 Kasım 1938’de Ankara Etnografya Müzesi’ndeki geçici kabrine konuldu. Anıtkabir’e 10 Kasım 1953’te nakledildi.',
      body: 'Anıtkabir 1938’de henüz yoktu; yapımı yıllar sürdü.',
    },
    {
      title: 'Atatürk’ün eserlerini yalnızca kitaplar sanmak',
      wrong: 'Atatürk’ün eserleri denince yalnızca yazdığı kitaplar anlaşılır.',
      right: 'Atatürk’ün eserleri; Türkiye Cumhuriyeti, inkılaplar, kurduğu kurumlar, ilkeleri ve yazılı eserlerinin hepsidir. Program en büyük eser olarak Cumhuriyet’i vurgular.',
      body: 'Soru “eser” dediğinde önce hangi tür eserin sorulduğuna bak.',
    },
    {
      title: 'Bütün kitapların Atatürk adıyla yayımlandığını sanmak',
      wrong: 'Geometri ve Medeni Bilgiler kitapları Atatürk’ün adıyla yayımlandı.',
      right: 'Medeni Bilgiler 1930’da Afet (İnan) adıyla, Geometri 1937’de yazar adı olmadan yayımlandı. İkisinin de Atatürk tarafından yazıldığı sonradan belgelerle ortaya kondu.',
      body: 'Bu iki kitap, Atatürk’ün kendi adını öne çıkarmadan eğitime katkı yaptığını gösterir.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Devri gerçekleştirenler',
    lead: 'Atatürk’ün ölümünden sonraki ilk günlerde görev alanlar ve eserlerinin yaşatılmasına katkı yapanlar.',
    intro: 'Kartlarda her kişinin 10–11 Kasım 1938 günlerindeki ya da Atatürk’ün eserleriyle ilgili rolünü görürsün.',
    figures: [
      {
        name: 'İsmet İnönü',
        period: '1938 · Cumhurbaşkanı',
        position: 'Malatya milletvekili; 11 Kasım 1938’de cumhurbaşkanı seçildi',
        contribution: 'Millî Mücadele’de Batı Cephesi komutanı, Lozan’da Türk heyetinin başkanıydı; uzun yıllar başbakanlık yaptı. Cumhurbaşkanı seçildiği gün Meclis’te yaptığı konuşmada Atatürk’ün hizmetlerinin Türk Devleti’nde eserler olarak somutlaştığını söyledi.',
        connections: ['11 Kasım 1938 seçimi', 'Lozan', 'İnönü Muharebeleri'],
        significance: 'Türkiye Cumhuriyeti’nin ikinci cumhurbaşkanıdır.',
      },
      {
        name: 'Mustafa Abdülhalik Renda',
        period: '1938 · TBMM Başkanı',
        position: 'Meclis Başkanı; 10–11 Kasım 1938’de cumhurbaşkanı vekili',
        contribution: 'Anayasanın 33. maddesine göre cumhurbaşkanlığına vekâlet etti; 11 Kasım oturumunu yönetti ve seçimi başlattı.',
        connections: ['1924 Anayasası m. 33–34'],
        significance: 'Devletin başsız kalmamasını sağlayan anayasal geçişin yürütücüsüdür.',
      },
      {
        name: 'Celal Bayar',
        period: '1938 · Başbakan',
        position: 'Başbakan (Başvekil)',
        contribution: 'Atatürk’ün ölümünü Meclis’e bildiren resmî yazıyı imzaladı; 1 Kasım 1938 açış konuşmasını Atatürk adına okumuştu.',
        connections: ['Başvekâlet tezkeresi', '1938 Meclis açış konuşması'],
        significance: 'Atatürk’ün son günlerinde hükûmetin başındaydı.',
      },
      {
        name: 'Afet İnan',
        period: '1930 · Medeni Bilgiler',
        position: 'Tarihçi; Atatürk’ün manevi kızı',
        contribution: 'Atatürk’ün yazdığı Medeni Bilgiler, 1930’da onun adıyla yayımlandı. Türk Tarih Kurumunun çalışmalarında da görev aldı.',
        connections: ['Medeni Bilgiler', 'Türk Tarih Kurumu'],
        significance: 'Atatürk’ün yazılı eserlerinden birinin yayımlanmasında aracı olmuştur.',
      },
    ],
    takeaway:
      'Bu kişilerin rolleri gösteriyor ki Atatürk’ten sonraki geçiş bir kişinin değil, kurumların işiydi: Meclis Başkanı vekâlet etti, Başbakan bildirdi, Meclis seçti.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-eserler`,
      title: 'Atatürk’ün eserleri: Cumhuriyet’ten kitaplara',
      lead: 'İTA.8.7.2, Atatürk’ün Türk milletine bıraktığı eserlerden örnekler vermeni ister. Eser kavramını geniş düşün: bir devlet, bir kurum, bir ilke ve bir kitap.',
      blocks: [
        {
          id: `${SLUG}-eserler-harita`,
          type: 'concept_map',
          title: 'Eserlerin haritası',
          intro: 'Soldan sağa ilerle. Her eser bir sonrakini mümkün kılar. Bir kutuya dokununca örneklerini okursun.',
          nodes: [
            { id: 'cumhuriyet', label: 'Türkiye Cumhuriyeti', detail: 'Atatürk’e atfedilen “En büyük eserim Türkiye Cumhuriyeti’dir.” sözündeki eser. Bağımsız, egemenliği millete ait, çağdaş bir devlet.' },
            { id: 'inkilaplar', label: 'İnkılaplar', detail: 'Siyasi, hukuk, eğitim, kültür, toplumsal ve ekonomik alanlardaki yenilikler: saltanatın kaldırılması, Medeni Kanun, Harf İnkılabı, kadınlara seçme ve seçilme hakkı…' },
            { id: 'kurumlar', label: 'Kurumlar', detail: 'TBMM, Türk Tarih Kurumu (1931), Türk Dil Kurumu (1932), Halkevleri, İş Bankası, Sümerbank, Ankara ve İstanbul’daki yükseköğretim kurumları…' },
            { id: 'ilkeler', label: 'İlkeler', detail: 'Cumhuriyetçilik, milliyetçilik, halkçılık, devletçilik, laiklik ve inkılapçılık. Devletin yolunu gösteren düşünce sistemi.' },
            { id: 'yazili', label: 'Yazılı eserler', detail: 'Askerlikle ilgili kitaplar, Zabit ve Kumandan ile Hasbihal, Nutuk, Medeni Bilgiler, Geometri ve binlerce sayfalık konuşma, yazı ve belge.' },
          ],
          links: [
            { from: 'cumhuriyet', to: 'inkilaplar', label: 'Cumhuriyet, inkılapların zeminidir' },
            { from: 'inkilaplar', to: 'kurumlar', label: 'inkılaplar kurumlarla kalıcı olur' },
            { from: 'kurumlar', to: 'ilkeler', label: 'kurumlar ilkelere göre çalışır' },
            { from: 'ilkeler', to: 'yazili', label: 'ilkeler yazılı eserlerde açıklanır' },
          ],
          caption: 'Eserler birbirinden ayrı değildir. Cumhuriyet ortadan kalksaydı inkılaplar, kurumlar ve ilkeler de yaşayamazdı. Bu yüzden Cumhuriyet “en büyük eser” olarak görülür.',
        },
        {
          id: `${SLUG}-eserler-soz`,
          type: 'prose',
          body:
            '**“En büyük eserim Türkiye Cumhuriyeti’dir.”** Program bu söze değinilmesini ister. Söz, Atatürk’e atfedilir ve yaygın biçimde aktarılır; ancak hangi gün, nerede söylendiğine dair kesin bir belge bulunamamıştır. Bu yüzden onu “Atatürk’e atfedilen söz” olarak öğreniriz.\n\n' +
            'Bu sözün anlattığı düşünce ise belgelerde açıkça görülür. Atatürk’ün öldüğü gün yayımlanan hükûmet tebliği şöyle der: “ölmez olan onun büyük eseri Cumhuriyet Türkiyesidir.” Ertesi gün Meclis’te konuşan İsmet İnönü de Atatürk’ün hizmetlerinin “bu günkü Türk Devletinin bünyesinde tam ve temiz eserler olarak” somutlaştığını söyler. Yani 1938’de devleti yönetenler de Atatürk’ün en büyük eserinin Cumhuriyet olduğunu düşünüyordu.\n\n' +
            'Neden Cumhuriyet en büyük eserdir? Çünkü diğer bütün eserler onun üzerinde yükselir. Cumhuriyet olmasaydı egemenlik millete geçmez, inkılaplar yapılamaz, kurumlar kurulamazdı. Atatürk bu eseri, Gençliğe Hitabe’de de Türk gençliğine emanet etmişti.',
        },
        {
          id: `${SLUG}-eserler-tablo`,
          type: 'table',
          interactive: true,
          title: 'Atatürk’ün yazılı eserlerinden örnekler',
          columns: ['Eser', 'Yıl', 'Ne anlatır?'],
          rows: [
            ['Takımın Muharebe Talimi', '1908', 'Almancadan yaptığı çeviri; küçük bir askerî birliğin savaşta nasıl eğitileceği'],
            ['Cumalı Ordugâhı', '1909', 'Katıldığı süvari tatbikatındaki gözlemleri ve eleştirileri'],
            ['Tâbiye Tatbikat ve Seyahati', '1911', 'Subayların arazide yetiştirilmesi ve tatbikatların önemi'],
            ['Zabit ve Kumandan ile Hasbihal', '1918', 'Subay ve komutanın taşıması gereken nitelikler; 1914’te Sofya’da yazdı'],
            ['Nutuk', '1927', '1919–1927 arasında yaşananların belgelerle anlatımı; sonunda Gençliğe Hitabe'],
            ['Vatandaş İçin Medeni Bilgiler', '1930', 'Vatandaşlık, seçim, askerlik, vergi gibi konular; Afet (İnan) adıyla yayımlandı'],
            ['Geometri', '1937', 'Geometri öğretmenleri için kılavuz; açı, çap gibi Türkçe terimler; yazar adı olmadan yayımlandı'],
          ],
          caption: 'Tablo, Atatürk’ün askerlikten tarihe, vatandaşlıktan matematiğe uzanan geniş ilgisini gösterir. Yıllar ilk yayım yılıdır; Zabit ve Kumandan ile Hasbihal 1914’te yazılmış, 1918’de yayımlanmıştır.',
        },
        {
          id: `${SLUG}-eserler-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: asker → kurucu → öğretmen',
          body: 'Askerken askerlik kitapları (1908–1918) · kurucuyken Nutuk (1927) · başöğretmenken Medeni Bilgiler (1930) ve Geometri (1937).',
        },
      ],
    },
    {
      id: `${SLUG}-evrensel`,
      title: 'Evrensel değer: Atatürk’ü dünya neden anıyor?',
      lead: 'İTA.8.7.1, ölümüne ilişkin yansımalardan hareketle Atatürk’ün fikir ve eserlerinin evrensel değerine ilişkin çıkarım yapmanı ister.',
      blocks: [
        {
          id: `${SLUG}-evrensel-anlatim`,
          type: 'prose',
          body:
            'Bir fikrin evrensel değerde olduğunu nasıl anlarız? Farklı ülkelerden ve farklı zamanlardan kaynakların o fikre değer verdiğini görürsek. Atatürk için bu kanıtları üç grupta toplayabiliriz.\n\n' +
            '**1) 1938’deki basın:** The New York Times ölüm haberini birinci sayfada verdi; The Washington Post onu “Modern Türkiye’nin Mimarı” olarak andı. Yabancı gazetelerin çoğu onun yaptığı inkılapları tek tek saydı: laiklik, Latin harfleri, kadın hakları, yeni kanunlar. Yani dünya, Atatürk’ün en çok çağdaşlaşma alanındaki eserlerine dikkat çekti.\n\n' +
            '**2) 1938’deki törenler:** Dönemin gazetelerine göre Atatürk’ün naaşını taşıyan Yavuz gemisine İstanbul’da İngiltere, Sovyetler Birliği, Yunanistan, Fransa ve Romanya savaş gemileri eşlik etti. 21 Kasım’da Ankara’daki törene de birçok yabancı devlet askerî birlikleriyle katıldı. Millî Mücadele’de karşı karşıya gelinen devletlerin askerlerinin de onu selamlaması dikkat çekicidir.\n\n' +
            '**3) 1978–1981:** Ölümünden 40 yıl sonra UNESCO, Atatürk’ün doğumunun 100. yılını anma programına aldı ve 1981 dünyada “Atatürk Yılı” olarak anıldı. UNESCO bu kararın gerekçesinde onu uluslararası anlayış, iş birliği ve barış için çaba gösteren, sömürgeciliğe karşı mücadele eden bir önder olarak tanımladı.\n\n' +
            'Bu üç grup kanıt, farklı ülkelerden ve farklı zamanlardan gelir ama aynı yönü gösterir: Atatürk’ün bağımsızlık, barış ve çağdaşlaşma fikirleri yalnızca Türkiye için değil, dünya için de değerli bulunmuştur.',
        },
        {
          id: `${SLUG}-evrensel-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: 10 – 11 – 21 – 53 – 81',
          body: '10 Kasım ölüm · 11 Kasım İnönü · 21 Kasım cenaze töreni · 1953 Anıtkabir · 1981 Atatürk Yılı.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste 1938’den üç belge okuyacaksın: hükûmetin tebliği, Meclis tutanağı ve Atatürk’ün vasiyetnamesi. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Üç birincil kaynak da özgün yazımıyla verilmiştir; eski kelimelerin anlamları soruların altındaki adımlarda açıklanır. Dördüncü metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Hükûmet tebliği: “ölmez olan onun büyük eseri”',
        kunye: 'Türkiye Cumhuriyeti Hükümetinin resmî tebliği, Resmî Gazete, 10 Teşrinisani (Kasım) 1938, sayı 4059, s. 1.',
        nitelik: 'Birebir alıntı (özgün yazım). (…) işareti atlanan bölümleri gösterir.',
        metin:
          'Bu acı hadise ile Türk vatanı büyük yapıcısını, Türk Milleti Ulu Şefini, insanlık büyük evlâdını kaybetti. (…) Kederlerimizin tesellisini ancak ve ancak onun büyük eserine bağlılıkta ve aziz vatanımızın hizmetinde ararız. Şurasını da her şeyden evvel beyan etmeliyiz ki, ölmez olan onun büyük eseri Cumhuriyet Türkiyesidir. (…) Ebedî Türk Milleti onun eserlerini ebediyetle yaşatacaktır. Türk gençliği onun kıymetli vediası olan Türkiye Cumhuriyetini daima koruyacak ve onun izinde yürüyecektir.',
        soru: 'Tebliğe göre Atatürk’ün en büyük eseri nedir? Tebliğ, Atatürk’ün yalnızca Türk milletine değil insanlığa da ait olduğunu hangi ifadeyle gösteriyor?',
        adimlar: [
          { title: 'Eski kelimeleri çöz', body: 'hadise = olay · beyan etmek = açıkça söylemek · vedia = emanet · ebedî = sonsuz.' },
          { title: 'Eseri bul', body: '“ölmez olan onun büyük eseri Cumhuriyet Türkiyesidir.”' },
          { title: 'Evrensel ifadeyi bul', body: '“insanlık büyük evlâdını kaybetti.”' },
          { title: 'Gençliği bağla', body: 'Cumhuriyet gençliğe “emanet” olarak bırakılır; bu, Gençliğe Hitabe’deki düşünceyle aynıdır.' },
        ],
        cevap: 'Tebliğe göre Atatürk’ün ölmez büyük eseri Cumhuriyet Türkiyesidir. “İnsanlık büyük evlâdını kaybetti” ifadesi, Atatürk’ün yalnızca Türk milletine değil bütün insanlığa ait bir değer olarak görüldüğünü gösterir.',
        cikarim: 'Atatürk’e atfedilen “En büyük eserim Türkiye Cumhuriyeti’dir.” sözündeki düşünce, onun öldüğü gün devletin resmî belgesinde de yer almıştır.',
      },
      {
        tur: 'birincil',
        baslik: 'Meclis tutanağı: 11 Kasım 1938',
        kunye: 'TBMM Zabıt Ceridesi, Devre V, Cilt 27, 3. inikad, 11 Kasım 1938, s. 17–18.',
        nitelik: 'Birebir alıntı (özgün yazım). Parantez içindekiler tutanağa geçen Meclis tepkileridir.',
        metin:
          'BAŞKAN — Neticei arayı arzediyorum. Reisicumhur intihabı için 348 arkadaş iştirak etmiştir. 348 reyle ve müttefikan Malatya mebusu İsmet İnönü Reisicumhur intihab edilmiştir. (Şiddetli ve sürekli alkışlar) (…)\n\nREİSİCUMHUR İSMET İNÖNÜ — (…) Atatürkün fevkalâde hizmetlerini bu günkü Türk Devletinin bünyesinde tam ve temiz eserler olarak tecessüm etmiş görüyoruz (Alkışlar). Kadir bilen ve büyük evlâd yetiştiren milletimizin yüreğinde, (Kemal Atatürk) adı, sevgi ve hürmet içinde ebedî olarak yaşıyacaktır.',
        soru: 'İnönü nasıl seçilmiştir? İnönü’nün konuşmasına göre Atatürk’ün hizmetleri nerede görülmektedir?',
        adimlar: [
          { title: 'Eski kelimeleri çöz', body: 'intihab = seçim · rey = oy · müttefikan = oybirliğiyle · mebus = milletvekili · tecessüm etmek = somutlaşmak, cisimleşmek · kadir bilen = değer bilen.' },
          { title: 'Seçimi oku', body: 'Oylamaya 348 milletvekili katılmış, 348’i de İnönü’ye oy vermiştir: oybirliği.' },
          { title: 'Eseri bul', body: 'İnönü, Atatürk’ün hizmetlerinin “bu günkü Türk Devletinin bünyesinde” eserler olarak somutlaştığını söyler.' },
        ],
        cevap: 'İsmet İnönü, Meclis’te yapılan oylamaya katılan 348 milletvekilinin oybirliğiyle cumhurbaşkanı seçilmiştir. Konuşmasına göre Atatürk’ün hizmetleri, Türk Devleti’nin yapısında eserler olarak somutlaşmıştır.',
        cikarim: 'Atatürk’ün ölümünden bir gün sonra yeni cumhurbaşkanının Meclis’te, anayasaya göre ve oybirliğiyle seçilmesi, Cumhuriyet’in kurumlarının bir liderin ölümünden sonra da işlediğini gösterir.',
      },
      {
        tur: 'birincil',
        baslik: 'Vasiyetname: Tarih ve dil kurumlarına',
        kunye: 'Mustafa Kemal Atatürk’ün 5 Eylül 1938 tarihli el yazısı vasiyetnamesi. Metin: Türk Tarih Kurumu, “Atatürk’ün Vasiyeti”.',
        nitelik: 'Birebir alıntı (özgün yazım). (…) işareti atlanan maddeleri gösterir.',
        metin:
          'Malik olduğum bütün nukut ve hisse senetleriyle Çankaya’daki menkul ve gayrimenkul emvalimi Cumhuriyet Halk Partisi’ne atideki şartlarla terk ve vasiyet ediyorum:\n1) Nukut ve hisse senetleri, şimdiki gibi, İş Bankası tarafından nemalandırılacaktır. (…)\n6) Her sene nemadan mütebaki miktar yarı yarıya, Türk Tarih ve Dil kurumlarına tahsis edilecektir.',
        soru: 'Atatürk gelirlerinden geriye kalanı hangi kurumlara bırakmıştır? Bu tercih onun hangi değerlere önem verdiğini gösterir?',
        adimlar: [
          { title: 'Eski kelimeleri çöz', body: 'nukut = nakit para · emval = mallar · atideki = aşağıdaki · nema = gelir · mütebaki = geriye kalan · tahsis etmek = ayırmak.' },
          { title: 'Kurumları bul', body: 'Geriye kalan gelir yarı yarıya Türk Tarih ve Türk Dil kurumlarına ayrılmıştır.' },
          { title: 'Değeri çıkar', body: 'Tarih ve dil, millî kültürün temelidir; bu kurumlar bilimsel araştırma yapar.' },
        ],
        cevap: 'Atatürk gelirlerinden geriye kalanı yarı yarıya Türk Tarih Kurumu ile Türk Dil Kurumuna bırakmıştır. Bu tercih, onun millî kültüre, tarih bilincine ve bilime verdiği önemi gösterir.',
        cikarim: 'Atatürk’ün eserleri yalnızca yaşarken yaptıklarıyla sınırlı değildir; vasiyetiyle bazı eserlerinin ölümünden sonra da yaşamasını güvenceye almıştır.',
      },
      {
        tur: 'ikincil',
        baslik: 'Bir değerlendirme: “Bütün dünya aynı düşündü”',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir kaynağı değerlendirirken yapılabilecek genelleme hatasını göstermek için yazılmıştır.',
        metin:
          'Atatürk öldüğünde bir Amerikan gazetesi ölüm haberini birinci sayfada verdi, bir diğeri onu “Modern Türkiye’nin Mimarı” olarak andı. Bu, o dönemde dünyadaki bütün insanların ve bütün devletlerin Atatürk’ün her fikrini benimsediğini kanıtlar.',
        soru: 'Metindeki olguyu ve yorumu ayır. Yorum kaynakların söylediğiyle uyumlu mu?',
        adimlar: [
          { title: 'Olguyu ayır', body: 'İki Amerikan gazetesinin ölüm haberini öne çıkarması ve Atatürk’ü “Modern Türkiye’nin Mimarı” olarak anması olgudur.' },
          { title: 'Yorumu ayır', body: '“Bütün insanların ve bütün devletlerin Atatürk’ün her fikrini benimsediği” yorumdur.' },
          { title: 'Uyumu sına', body: 'Birkaç gazetenin saygılı haberi, bütün dünyanın her fikirde aynı düşündüğünü kanıtlamaz. Gazeteler bir değerlendirme yapar; bir devletin tüm halkının görüşünü temsil etmez.' },
        ],
        cevap: 'Olgu: İki Amerikan gazetesinin haberi öne çıkarması ve Atatürk’ü “Modern Türkiye’nin Mimarı” olarak anması. Yorum: bütün dünyanın her fikrini benimsediği. Yorum aşırı bir genellemedir; kaynaklar Atatürk’e duyulan saygıyı ve ilgiyi gösterir ama herkesin her konuda aynı düşündüğünü göstermez.',
        cikarim: 'Evrensel değere ilişkin çıkarım yaparken “bütün”, “her” gibi kesin sözcüklerden kaçın. Güçlü çıkarım, farklı ülkelerden ve farklı zamanlardan gelen kaynakların aynı yönü göstermesine dayanır.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Basından evrensel değere çıkarım',
      prompt: 'Son Posta 11 Kasım 1938’de “Onun arkasından yalnız Türk yurdu değil, bütün dünya ağlıyor!” manşetini attı. The Washington Post ise Atatürk’ü “Modern Türkiye’nin Mimarı” olarak andı. Bu iki kaynaktan hangi çıkarım yapılabilir?',
      steps: [
        { title: 'Kaynakları tanı', body: 'Biri yerli, biri yabancı gazetedir; farklı ülkelerden iki kaynak.' },
        { title: 'Ortak noktayı bul', body: 'İkisi de Atatürk’ün öneminin Türkiye sınırlarını aştığını gösterir.' },
        { title: 'Çıkarımı kur', body: 'Atatürk’ün modern Türkiye’yi kurma başarısı dünyada da tanınmıştır.' },
      ],
      answer: 'Atatürk’ün kurduğu modern Türkiye ve yaptığı inkılaplar yalnızca Türkiye’de değil, dünyada da değerli bulunmuştur.',
      takeaway: 'Evrensel değer çıkarımı için en az iki farklı ülkeden kaynak kullan.',
    },
    {
      title: 'Anayasal geçişi açıkla',
      prompt: 'Atatürk 10 Kasım’da öldü, İnönü 11 Kasım’da seçildi. Aradaki sürede cumhurbaşkanlığı görevini kim yürüttü? Bu geçiş neyi gösterir?',
      steps: [
        { title: 'Anayasaya bak', body: '1924 Anayasası m. 33: Cumhurbaşkanlığı boşalırsa Meclis Başkanı vekâlet eder.' },
        { title: 'Kişiyi bul', body: 'Meclis Başkanı Mustafa Abdülhalik Renda.' },
        { title: 'Anlamını çıkar', body: 'Devlet kurallara göre işledi; kişiye değil kurumlara dayanıyordu.' },
      ],
      answer: 'Görevi Meclis Başkanı Abdülhalik Renda vekâleten yürüttü. Bu geçiş, Cumhuriyet’in kurumlarının güçlü olduğunu ve devletin anayasaya göre işlediğini gösterir.',
      takeaway: 'Kurumların işlemesi, “En büyük eserim Türkiye Cumhuriyeti’dir” sözünün somut kanıtıdır.',
    },
    {
      title: 'Eserleri sınıflandır',
      prompt: 'Şunları sınıflandır: Nutuk, Türk Dil Kurumu, laiklik, Harf İnkılabı, Geometri, Türk Tarih Kurumu.',
      steps: [
        { title: 'Yazılı eser', body: 'Nutuk, Geometri.' },
        { title: 'Kurum', body: 'Türk Dil Kurumu, Türk Tarih Kurumu.' },
        { title: 'İlke / inkılap', body: 'Laiklik (ilke), Harf İnkılabı (inkılap).' },
      ],
      answer: 'Yazılı eserler: Nutuk, Geometri · Kurumlar: TDK, TTK · İlke: laiklik · İnkılap: Harf İnkılabı. Hepsi Atatürk’ün Türk milletine bıraktığı eserlerdir.',
      takeaway: 'Sınavda “eser” sorusu gelirse seçeneklerde farklı türde eserler olabileceğini unutma.',
    },
  ],
  questionClue: {
    concept: 'Soruda hangi kazanımın sorulduğunu nasıl anlarım?',
    statement: 'Bu dersin iki kazanımı iki farklı soru türüne yol açar: basın yansımalarından çıkarım ya da eser örneği.',
    clues: [
      'Bir gazete manşeti ya da yabancı bir değerlendirme verilmişse → İTA.8.7.1: evrensel değer çıkarımı',
      '“Meclis”, “348 oy”, “Renda”, “vekâlet” → İnönü’nün seçilmesi ve anayasal geçiş',
      '“En büyük eserim…” sözü → Türkiye Cumhuriyeti',
      'Nutuk, Geometri, Medeni Bilgiler, Zabit ve Kumandan ile Hasbihal → yazılı eserler',
      '“Vasiyet”, “Türk Tarih ve Dil kurumları” → eserlerin yaşatılması',
    ],
    reasoning: 'Çıkarım sorularında metinde yazanın ötesine geçme; ama metnin işaret ettiği değeri (kuruculuk, çağdaşlaşma, barış) adlandır.',
    boundary: 'Dikkat: İnönü halk tarafından değil, TBMM tarafından seçildi.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'İTA.8.7.1 bir çıkarım kazanımı, İTA.8.7.2 bir örnek verme kazanımıdır. Sorular bir gazete manşeti, bir tutanak bölümü ya da bir eser listesi verip çıkarım veya sınıflandırma isteyebilir. Aşağıdaki kalıplar kazanımlarla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Yerli ya da yabancı basından bir alıntıdan evrensel değere ilişkin çıkarım',
      'İnönü’nün seçilme sürecini anayasayla açıklama',
      'Verilen eserlerden hangisinin yazılı eser, kurum ya da inkılap olduğunu belirleme',
      '“En büyük eserim Türkiye Cumhuriyeti’dir.” sözünü yorumlama',
    ],
  },
  checkpoints: [
    {
      prompt: 'Atatürk’ün ölümünden bir gün sonra yeni cumhurbaşkanının seçilmesi Cumhuriyet hakkında neyi gösterir?',
      hint: 'Seçimi kim, hangi kurala göre yaptı?',
      answer: 'Cumhuriyet’in kişiye değil kurumlara dayandığını gösterir. Meclis, anayasanın hükmüne göre derhal toplanıp yeni cumhurbaşkanını seçmiş, devlet sarsılmadan devam etmiştir.',
    },
    {
      prompt: 'Atatürk’ün vasiyetinde gelirlerini tarih ve dil kurumlarına ayırması, onun hangi eserlerinin ölümünden sonra da yaşamasını istediğini gösterir?',
      answer: 'Kültür ve bilim alanındaki eserlerinin, özellikle Türk Tarih ve Türk Dil kurumlarının çalışmalarını sürdürmesini istediğini gösterir.',
    },
    {
      prompt: 'Geometri kitabının yazar adı olmadan yayımlanması Atatürk hakkında neyi düşündürür?',
      answer: 'Atatürk’ün amacının kendi adını öne çıkarmak değil, eğitime ve Türkçenin bilim dili olarak gelişmesine katkı yapmak olduğunu düşündürür.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.7.1, Atatürk’ün ölümüne ilişkin yansıma ve değerlendirmelerden hareketle onun fikir ve eserlerinin evrensel değerine ilişkin çıkarım yapmanı ister; açıklaması yerli ve yabancı basına ve İsmet İnönü’nün cumhurbaşkanı seçilmesine değinir. İTA.8.7.2, Atatürk’ün Türk milletine bıraktığı eserlerden örnekler vermeni ister; açıklaması “En büyük eserim Türkiye Cumhuriyeti’dir.” sözüne ve yazılı eserlerine değinir.',
    measures: [
      'Basın yansımalarından evrensel değere ilişkin çıkarım yapma',
      'İnönü’nün seçilme sürecini açıklama',
      'Atatürk’ün yazılı eserlerini tanıma',
      'Cumhuriyet’in neden en büyük eser olarak görüldüğünü açıklama',
    ],
  },
  simulation: {
    title: 'Mini LGS: Bir tebliğ',
    passage:
      'Atatürk’ün öldüğü gün yayımlanan hükûmet tebliğinde şu ifadeler yer alır: “Bu acı hadise ile Türk vatanı büyük yapıcısını, Türk Milleti Ulu Şefini, insanlık büyük evlâdını kaybetti. (…) Şurasını da her şeyden evvel beyan etmeliyiz ki, ölmez olan onun büyük eseri Cumhuriyet Türkiyesidir.”',
    question: 'Bu metinden aşağıdaki sonuçlardan hangisine ulaşılabilir?',
    options: [
      { text: 'Atatürk’ün en büyük eseri olarak Türkiye Cumhuriyeti görülmüştür.', explanation: 'Doğru. Tebliğ, “ölmez olan onun büyük eseri Cumhuriyet Türkiyesidir” diyerek bunu açıkça belirtir.' },
      { text: 'Atatürk’ün ölümünden sonra yeni cumhurbaşkanı halk tarafından seçilmiştir.', explanation: 'Metinde seçimden söz edilmez; ayrıca cumhurbaşkanını TBMM seçmiştir.' },
      { text: 'Atatürk’ün ölümü yalnızca Türkiye’de yankı uyandırmıştır.', explanation: 'Metin “insanlık büyük evlâdını kaybetti” der; kaybı insanlığa ait görür.' },
      { text: 'Atatürk’ün naaşı Anıtkabir’e defnedilmiştir.', explanation: 'Metinde defin yerinden söz edilmez; Anıtkabir’e nakil 1953’tedir.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “ulaşılabilir” diyor. Metinde açıkça yazan ya da metinden doğrudan çıkan bilgiyi ara; metinde olmayan bilgiyi (seçim, defin yeri) eleyerek ilerle.',
    critical_point: 'Üçüncü seçenek metnin tam tersini söyler: tebliğ, kaybın insanlığa ait olduğunu vurgular. Tersini söyleyen seçenekler sık kullanılan çeldiricilerdir.',
    takeaway: '“Ulaşılabilir” sorularında önce metinde olmayan bilgiyi içeren seçenekleri ele.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Veda ve miras',
    range: '1938–1981',
    body:
      'Atatürk 5 Eylül 1938’de vasiyetnamesini yazdı; 1 Kasım 1938’deki Meclis açış konuşmasını hastalığı nedeniyle Başbakan Celal Bayar okudu. 10 Kasım 1938’de saat 9.05’te Dolmabahçe Sarayı’nda öldü. Hükûmet tebliği onun “ölmez” büyük eserinin Cumhuriyet Türkiyesi olduğunu duyurdu; Meclis Başkanı Abdülhalik Renda anayasaya göre cumhurbaşkanlığına vekâlet etti. 11 Kasım’da TBMM, İsmet İnönü’yü oylamaya katılan 348 milletvekilinin oybirliğiyle cumhurbaşkanı seçti. Yerli basın siyah başlıklarla yasını, yabancı basın Atatürk’ü modern Türkiye’nin kurucusu olarak değerlendiren yazılarını yayımladı. 16–18 Kasım’da halk Dolmabahçe’de ona veda etti; 19 Kasım’da naaş Yavuz gemisiyle İzmit’e, oradan trenle Ankara’ya götürüldü; 21 Kasım’da yabancı devletlerin de katıldığı törenle Etnografya Müzesi’ndeki geçici kabrine konuldu. 10 Kasım 1953’te Anıtkabir’e nakledildi. UNESCO’nun 1978 kararıyla 1981 yılı dünyada Atatürk Yılı olarak anıldı.',
    turning_points: [
      '10 Kasım 1938 · Atatürk’ün ölümü',
      '11 Kasım 1938 · İnönü’nün seçilmesi',
      '21 Kasım 1938 · Ankara’da cenaze töreni',
      '10 Kasım 1953 · Anıtkabir',
      '1981 · UNESCO Atatürk Yılı',
    ],
  },
  summary: [
    '**Ölüm:** 10 Kasım 1938, saat 9.05, Dolmabahçe Sarayı. Hükûmet tebliği: “ölmez olan onun büyük eseri Cumhuriyet Türkiyesidir.”',
    '**Geçiş:** Meclis Başkanı Abdülhalik Renda vekâlet etti (Anayasa m. 33); 11 Kasım’da TBMM İsmet İnönü’yü 348 oyla, oybirliğiyle seçti (m. 34).',
    '**Basın:** Yerli basın yas ve bağlılık (“Babamızı Kaybettik”); yabancı basın kuruculuk ve çağdaşlaşma (“Modern Türkiye’nin Mimarı”).',
    '**Cenaze:** Dolmabahçe’de veda (16–18 Kasım) → Yavuz ile İzmit, trenle Ankara (19–20 Kasım) → Etnografya Müzesi (21 Kasım) → Anıtkabir (1953).',
    '**Eserler:** Türkiye Cumhuriyeti, inkılaplar, kurumlar, ilkeler; yazılı eserler: askerlik kitapları, Zabit ve Kumandan ile Hasbihal, Nutuk, Medeni Bilgiler, Geometri.',
    '**Evrensel değer:** Yabancı basın ve törenler (1938), UNESCO kararı ve Atatürk Yılı (1981).',
  ],
  quizzes: [
    {
      question: 'Atatürk’ün ölümünden sonra İsmet İnönü’yü cumhurbaşkanı seçen kurum hangisidir?',
      options: ['Türkiye Büyük Millet Meclisi', 'Bakanlar Kurulu', 'Halk (genel seçimle)', 'Cumhuriyet Halk Partisi Kurultayı'],
      answer_index: 0,
      explanation: '1924 Anayasası’na göre cumhurbaşkanını TBMM seçiyordu. İnönü 11 Kasım 1938’de Meclis’te oybirliğiyle seçildi.',
    },
    {
      question: 'Atatürk’ün ölümüyle İnönü’nün seçilmesi arasındaki sürede cumhurbaşkanlığına kim vekâlet etmiştir?',
      options: ['TBMM Başkanı Abdülhalik Renda', 'Başbakan Celal Bayar', 'Genelkurmay Başkanı', 'Dışişleri Bakanı'],
      answer_index: 0,
      explanation: 'Anayasanın 33. maddesine göre cumhurbaşkanlığı boşaldığında Meclis Başkanı vekâlet eder; bu görevi Abdülhalik Renda yürüttü.',
    },
    {
      question: 'Aşağıdakilerden hangisi Atatürk’ün yazılı eserlerinden biri değildir?',
      options: ['İstiklal Marşı', 'Nutuk', 'Geometri', 'Zabit ve Kumandan ile Hasbihal'],
      answer_index: 0,
      explanation: 'Nutuk, Geometri ve Zabit ve Kumandan ile Hasbihal Atatürk’ün yazılı eserlerindendir. İstiklal Marşı’nı Mehmet Akif Ersoy yazmıştır.',
    },
    {
      question: 'Atatürk vasiyetnamesinde gelirlerinden geriye kalanı hangi kurumlara bırakmıştır?',
      options: ['Türk Tarih Kurumu ve Türk Dil Kurumu', 'İstanbul ve Ankara üniversiteleri', 'Halkevleri ve Köy Enstitüleri', 'Kızılay ve Çocuk Esirgeme Kurumu'],
      answer_index: 0,
      explanation: 'Vasiyetnamenin 6. maddesine göre gelirden geriye kalan yarı yarıya Türk Tarih ve Türk Dil kurumlarına ayrılacaktır.',
    },
    {
      question: 'UNESCO’nun 1981 yılını “Atatürk Yılı” olarak anması aşağıdakilerden hangisini gösterir?',
      options: ['Atatürk’ün fikir ve eserlerinin evrensel değerde görüldüğünü', 'Atatürk’ün UNESCO’yu kurduğunu', 'Türkiye’nin 1981’de UNESCO’ya üye olduğunu', 'Atatürk’ün 1981’de doğduğunu'],
      answer_index: 0,
      explanation: '1981, Atatürk’ün doğumunun 100. yılıdır. UNESCO’nun bu yılı Atatürk Yılı olarak anması, onun fikir ve eserlerine dünyada değer verildiğini gösterir.',
    },
  ],
  next: ['İkinci Dünya Savaşı ve Türkiye', 'Çok Partili Hayata Geçiş'],
})

export default lesson
