import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.4 Atatürkçülük ve Çağdaşlaşan Türkiye · 4. ders
 * Kazanımlar: İTA.8.4.5 · İTA.8.4.6 · İTA.8.4.7
 * Dayanak   : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   İTA.8.4.5 — Şapka ve kıyafet düzenlemeleri, tekke, zaviye ve türbelerin kapatılması,
 *               takvim, saat ve ölçülerde değişim ile Soyadı Kanunu ele alınır. Türk
 *               kadınına sağlanan haklar diğer ülkelerle karşılaştırılır.
 *   İTA.8.4.6 — İzmir İktisat Kongresi kararları millî iktisat anlayışı ve tasarruf
 *               bilinci açısından incelenir. Tarım, sanayi, ticaret ve denizcilik
 *               çalışmaları; 1929 Dünya Ekonomik Bunalımı’nın etkileri.
 *   İTA.8.4.7 — Sağlık çalışmaları devletin temel görevleriyle ilişkilendirilir
 *               (programda ayrıca açıklama yoktur).
 *
 * KAPSAM KARARI
 * Kanun metinleri (3, 552, 671, 677, 697, 698, 815, 839, 1055, 1593, 1782, 2525,
 * 2587, 2590, 2596, 2739) TBMM kanun arşivinden doğrulandı; birincil kaynak
 * bloklarındaki maddeler birebirdir. İnebolu ve İzmir İktisat Kongresi
 * konuşmaları Vikikaynak’taki metinden alındı ve künyede belirtildi. Ülkeler
 * arası kadın hakları karşılaştırmasında yalnız yaygın kabul gören yıllar kullanıldı.
 * Harita yoktur.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 18.
 */

const SLUG = 'lgs-tarih-toplumsal-ve-ekonomik-inkilaplar'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Atatürkçülük ve Çağdaşlaşan Türkiye',
  order: 4,
  title: 'Toplumsal Hayat, Ekonomi ve Sağlık: Gündelik Hayatta Cumhuriyet',
  subtitle:
    'Şapkadan soyadına, takvimden hafta tatiline, fabrikadan hıfzıssıhhaya… Cumhuriyet yalnız devletin yapısını değil, insanların giyinişini, çalışmasını, kazanmasını ve sağlığını da değiştirdi.',
  minutes: 60,
  kazanimlar: ['İTA.8.4.5', 'İTA.8.4.6', 'İTA.8.4.7'],
  kapsamNotu:
    'Kanunlar TBMM kanun arşivinden doğrulanmış, birincil kaynak bloklarındaki maddeler birebir alıntılanmıştır. İnebolu ve İzmir İktisat Kongresi konuşmaları Vikikaynak’taki metinden alınmıştır. Kadın hakları karşılaştırmasında yaygın kabul gören yıllar kullanılmıştır.',
  prerequisites: [
    {
      topic: 'Hukuk, eğitim ve kültür inkılapları (önceki ders)',
      why: 'Medeni Kanun’la başlayan kadın hakları bu derste siyasi haklarla tamamlanır.',
    },
    {
      topic: 'Halkçılık, Laiklik ve Devletçilik ilkeleri',
      why: 'Toplumsal inkılaplar en çok Halkçılık ve Laiklikle, ekonomik gelişmeler Devletçilikle ilişkilidir.',
    },
  ],
  outcomes: [
    'Şapka ve kıyafet, tekke–zaviye, takvim–saat–ölçü ve soyadı düzenlemelerinin amaçlarını açıklayabileceksin.',
    'Türk kadınına tanınan siyasi hakları kronolojik olarak sıralayıp diğer ülkelerle karşılaştırabileceksin.',
    'İzmir İktisat Kongresi kararlarını millî iktisat ve tasarruf bilinci açısından değerlendirebileceksin.',
    'Tarım, sanayi, ticaret ve denizcilik alanındaki çalışmaları ve 1929 bunalımının etkilerini açıklayabileceksin.',
    'Sağlık çalışmalarını devletin temel görevleriyle ilişkilendirebileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Cumhuriyet gündelik hayata giriyor',
    lead:
      'On yıl süren savaşlardan çıkan ülke yorgundu: Nüfus azalmış, köyler yıkılmış, salgın hastalıklar yayılmış, fabrikası ve sermayesi olmayan bir ekonomi kalmıştı.',
    body:
      'Cumhuriyet’in önünde üç büyük iş vardı. **Birincisi**, toplumun gündelik hayatını çağdaş dünyayla uyumlu hâle getirmekti: Nasıl giyinileceği, günün ve yılın nasıl sayılacağı, insanların nasıl adlandırılacağı, kadının toplumdaki yeri. **İkincisi**, siyasi bağımsızlığı ekonomik bağımsızlıkla tamamlamaktı: Tarımı canlandırmak, sanayiyi kurmak, ticareti ve denizciliği millîleştirmek. **Üçüncüsü**, milletin sağlığını korumaktı: Salgınlarla mücadele etmek ve sağlıklı nesiller yetiştirmek.\n\n' +
      'Bu ders programın üç kazanımını birlikte işler: **toplumsal alan** (İTA.8.4.5), **ekonomi** (İTA.8.4.6) ve **sağlık** (İTA.8.4.7). Üçü de aynı soruya cevap verir: Cumhuriyet, vatandaşın gündelik hayatına ne getirdi?',
  },
  concepts: [
    { term: 'Serpuş', body: 'Başa giyilen şey: fes, sarık, kalpak, şapka gibi.' },
    { term: 'Tekke ve zaviye', body: 'Tarikatların toplandığı, dinî törenlerin yapıldığı yerler. Türbe ise önemli kişilerin mezarlarının bulunduğu yapıdır.' },
    { term: 'Aşar', body: 'Tarım ürünlerinden alınan, ürünün onda biri oranındaki eski vergi. 1925’te kaldırıldı.' },
    { term: 'Kabotaj', body: 'Bir ülkenin kıyıları arasında yük ve yolcu taşıma hakkı. 1926’dan itibaren yalnız Türk bayraklı gemilere verildi.' },
    { term: 'Hıfzıssıhha', body: 'Sağlığı koruma; bugünkü “halk sağlığı”. Umumi Hıfzıssıhha Kanunu 1930’da çıktı.' },
  ],
  why: {
    question: 'Bu inkılaplar neden bu kadar geniş bir alana yayıldı?',
    body:
      'Çünkü Cumhuriyet’in hedefi yalnız yeni bir devlet kurmak değil, **çağdaş bir toplum** oluşturmaktı. Atatürk bunu farklı alanlarda farklı sözlerle anlattı: 1925’te İnebolu’da kıyafetin hem millî hem de medeni ve uluslararası olması gerektiğini söyledi; 1923’te İzmir İktisat Kongresi’nde siyasi ve askerî zaferlerin ekonomik zaferlerle taçlandırılmazsa kalıcı olamayacağını vurguladı.\n\n' +
      'Sağlık ise bir devletin en temel görevlerinden biri olarak görüldü: 1930’da çıkan Umumi Hıfzıssıhha Kanunu, milletin sağlığını korumayı “umumî Devlet hizmetlerinden” saydı. Yani toplumsal, ekonomik ve sağlık alanındaki inkılaplar aynı hedefin üç yüzüdür: **Çağdaş, bağımsız ve sağlıklı bir millet.**',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Toplum, ekonomi ve sağlık (1923–1935)',
    lead: 'Kronolojide üç alan iç içe ilerler. Her satırın hangi alana ait olduğunu düşün.',
    intro: '1925 toplumsal düzenlemelerin, 1929–1934 ekonomik ve siyasi hakların yoğunlaştığı yıllardır.',
    items: [
      { title: '17 Şubat–4 Mart 1923 · İzmir İktisat Kongresi', body: 'Çiftçi, tüccar, sanayici ve işçi temsilcileri millî ekonominin esaslarını belirledi.' },
      { title: '17 Şubat 1925 · Aşar kaldırıldı', body: 'Köylünün en ağır vergisi kaldırıldı.' },
      { title: '25–30 Kasım 1925 · Şapka ve tekkeler', body: 'Şapka Kanunu (25 Kasım) kabul edildi; tekke, zaviye ve türbeler kapatıldı (30 Kasım).' },
      { title: '26 Aralık 1925 · Saat ve takvim', body: 'Gün gece yarısından başlayıp 24 saate bölündü; uluslararası takvim kabul edildi (1 Ocak 1926’dan itibaren).' },
      { title: '19 Nisan 1926 · Kabotaj Kanunu', body: 'Kıyılar arasında taşımacılık Türk gemilerine bırakıldı (1 Temmuz 1926’dan itibaren).' },
      { title: '28 Mayıs 1927 · Teşvik-i Sanayi Kanunu', body: 'Özel sanayi girişimlerine devlet teşviki getirildi.' },
      { title: '1929 · Dünya Ekonomik Bunalımı', body: 'Dünya ticareti çöktü; Türkiye’de yerli malı ve tasarruf seferberliği başladı (Millî İktisat ve Tasarruf Cemiyeti, 14 Aralık 1929).' },
      { title: '1930 · Kadınlar ve sağlık', body: 'Kadınlara belediye seçimlerinde seçme ve seçilme hakkı tanındı (3 Nisan); Umumi Hıfzıssıhha Kanunu çıktı (Nisan).' },
      { title: '1931 · Ölçüler Kanunu', body: 'Metre sistemi kabul edildi.' },
      { title: '1933–1934 · Devletçi sanayileşme', body: 'Sümerbank kuruldu (1933); Birinci Beş Yıllık Sanayi Planı uygulanmaya başladı (1934).' },
      { title: '1934 · Soyadı ve siyasi haklar', body: 'Soyadı Kanunu (21 Haziran), unvanların kaldırılması (26 Kasım), kisve kanunu (3 Aralık), kadınlara milletvekili seçme ve seçilme hakkı (5 Aralık).' },
      { title: '1935 · İlk kadın milletvekilleri', body: '8 Şubat 1935 seçimlerinde 17 kadın milletvekili seçildi; hafta tatili pazar günü oldu (27 Mayıs 1935 kanunu).' },
    ],
    takeaway:
      'Dikkat et: Kadınların siyasi hakları adım adım genişledi: 1930 belediye → 1933 köy muhtarlığı ve ihtiyar heyeti → 1934 milletvekilliği. Sınavlarda bu sıra sıkça karıştırılır; yılları birlikte hatırla.',
    body:
      'Kronolojide iki dönüm noktası var. **1925**, toplumsal inkılapların yılıdır: Şapka, tekkeler, saat ve takvim aynı yılın son aylarında düzenlendi. **1929 bunalımı** ise ekonomide bir dönemeçtir: 1923’teki İzmir İktisat Kongresi özel girişimi desteklemeyi esas almıştı; ancak sermaye birikimi yetersiz kalınca ve dünya ticareti çökünce devlet ekonomide daha etkin bir rol üstlendi. Bu, bir önceki derste öğrendiğin **Devletçilik** ilkesinin uygulamaya geçişidir.\n\n' +
      'Sağlık ise bütün dönem boyunca süren bir çabadır: 1920’de Büyük Millet Meclisi’nin ilk hükümetinde Sıhhiye ve Muavenet-i İçtimaiye Vekâleti kuruldu; 1926’da Sıtma Mücadelesi Kanunu, 1928’de Hıfzıssıhha Enstitüsü, 1930’da Umumi Hıfzıssıhha Kanunu geldi.',
  },
  dataTable: {
    title: 'Toplumsal inkılaplar: ne değişti, neden?',
    columns: ['Düzenleme', 'Tarih', 'Ne değişti?', 'Amaç'],
    rows: [
      ['Şapka Kanunu', '25 Kasım 1925', 'Milletvekilleri ve memurların şapka giymesi zorunlu oldu; halkın genel başlığı şapka kabul edildi.', 'Kılık kıyafette çağdaş ve ortak bir görünüm; eski ile yeni arasındaki ikiliği kaldırmak'],
      ['Tekke, zaviye ve türbelerin kapatılması', '30 Kasım 1925', 'Tekke ve zaviyeler kapatıldı; şeyhlik, dervişlik, falcılık, büyücülük gibi unvan ve hizmetler yasaklandı.', 'Laiklik; din adına yapılan istismarı ve hurafeleri önlemek'],
      ['Saat', '26 Aralık 1925', 'Gün gece yarısından başlayıp 24 saate bölündü.', 'Dünya ile ortak zaman düzeni'],
      ['Takvim', '26 Aralık 1925', 'Uluslararası (miladi) takvim kabul edildi; Hicrî takvim özel durumlarda kullanılmaya devam etti.', 'Dünya ile ticaret ve iletişimde kolaylık'],
      ['Ölçüler Kanunu', '1931', 'Metre sistemi zorunlu oldu.', 'Ticarette ve üretimde birlik; dünya ile uyum'],
      ['Soyadı Kanunu', '21 Haziran 1934', 'Her Türk öz adından başka bir soyadı taşımak zorunda oldu.', 'Nüfus kayıtlarında düzen; eşitlik'],
      ['Unvanların kaldırılması', '26 Kasım 1934', 'Ağa, efendi, bey, paşa, hanım gibi lakap ve unvanlar kaldırıldı.', 'Halkçılık; kanun önünde eşitlik'],
      ['Bazı kisvelerin giyilemeyeceğine dair kanun', '3 Aralık 1934', 'Din adamlarının ibadet yerleri ve ayinler dışında dinî kıyafet giymesi yasaklandı.', 'Laiklik'],
      ['Hafta tatili', '27 Mayıs 1935', 'Hafta tatili pazar günü oldu.', 'Dünya ile çalışma ve ticaret düzeninde uyum'],
    ],
    caption:
      'Tarihler TBMM kanun arşivindeki kanun metinlerinden alınmıştır. Ölçüler Kanunu 1931’de kabul edilip Resmî Gazete’de 4 Nisan 1931’de yayımlandı.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Yıkımdan kalkınmaya: sebep, gelişme, sonuç',
    lead: 'Toplumsal, ekonomik ve sağlık alanındaki çalışmalar aynı başlangıç noktasından doğdu: Savaşlardan çıkmış yorgun bir ülke.',
    intro: 'Zincirin başı sorunları, ortası atılan adımları, sonu da ulaşılan sonucu anlatır.',
    steps: [
      { tur: 'sebep', title: 'Savaşların bıraktığı yıkım', body: 'Nüfus azalmış, salgınlar yayılmış, tarım ve ticaret çökmüştü; sanayi yok denecek kadar azdı.' },
      { tur: 'sebep', title: 'Ekonomik bağımlılık mirası', body: 'Kapitülasyonlar ve dış borçlar Osmanlı ekonomisini yabancılara bağımlı kılmıştı.' },
      { tur: 'sebep', title: 'Çağdaşlaşma hedefi', body: 'Cumhuriyet, gündelik hayatta da dünya ile uyumlu, eşit vatandaşlardan oluşan bir toplum istiyordu.' },
      { tur: 'gelisme', title: 'Millî iktisat ve toplumsal düzenlemeler', body: '1923’te İzmir İktisat Kongresi; 1925’te aşarın kaldırılması, şapka, tekkeler, saat ve takvim; 1926’da kabotaj.' },
      { tur: 'gelisme', title: '1929 bunalımı ve devletçilik', body: 'Dünya ticareti çökünce yerli malı ve tasarruf seferberliği başladı; devlet sanayide öncülük üstlendi.' },
      { tur: 'gelisme', title: 'Sağlık teşkilatı', body: 'Sıtma mücadelesi (1926), Hıfzıssıhha Enstitüsü (1928) ve Umumi Hıfzıssıhha Kanunu (1930).' },
      { tur: 'sonuc', title: 'Yeni gündelik hayat', body: 'Soyadı, eşitlik, kadınların siyasi hakları (1930–1934); devlet fabrikaları ve sanayi planı; yaygınlaşan sağlık hizmetleri.' },
      { tur: 'sonraki-etki', title: 'Devletin görev anlayışı', body: 'Vatandaşın sağlığı, eğitimi ve refahı devletin temel görevleri arasında sayıldı; bu anlayış bugünkü anayasada da yer alır.' },
    ],
    inference:
      'Temel çıkarım: Cumhuriyet’in toplumsal, ekonomik ve sağlık alanındaki adımları birbirinden ayrı değildir. Sağlıklı insanlar üretir, üreten ekonomi bağımsızlığı korur, eşit vatandaşlar da bu ekonomiye ve topluma katılır.',
    body:
      '**Sağlık çalışmaları ve devletin temel görevleri** (İTA.8.4.7) arasındaki ilişkiyi özellikle hatırla. 1930 tarihli Umumi Hıfzıssıhha Kanunu’nun ilk maddesi, memleketin sağlık şartlarını iyileştirmeyi, hastalıklarla mücadele etmeyi, gelecek nesillerin sağlıklı yetişmesini sağlamayı ve halka tıbbî ve sosyal yardım götürmeyi “umumî Devlet hizmetlerinden” sayar. Yani sağlık, bir iyilik ya da hayır işi değil, **devletin görevi** olarak tanımlandı.\n\n' +
      'Bu anlayış bugün de sürer: 1982 Anayasası’nın 5. maddesi, kişilerin ve toplumun refah, huzur ve mutluluğunu sağlamayı devletin temel amaç ve görevleri arasında sayar.',
  },
  comparison: {
    title: 'Üç alan, üç kazanım: toplum, ekonomi, sağlık',
    columns: ['Toplumsal alan (İTA.8.4.5)', 'Ekonomi (İTA.8.4.6)', 'Sağlık (İTA.8.4.7)'],
    rows: [
      { label: 'Temel sorun', values: ['Gündelik hayatın çağdaş dünyayla uyumsuzluğu; eşitsizlikler', 'Harap ekonomi, sermaye eksikliği, dışa bağımlılık', 'Salgınlar, yüksek ölüm oranları, sağlık personeli eksikliği'] },
      { label: 'Temel adımlar', values: ['Şapka, tekkeler, saat–takvim–ölçü, soyadı, unvanlar, kadınların siyasi hakları', 'İzmir İktisat Kongresi, aşarın kaldırılması, kabotaj, teşvik, devletçi sanayileşme', 'Sıhhiye Vekâleti, sıtma mücadelesi, Hıfzıssıhha Enstitüsü, Umumi Hıfzıssıhha Kanunu'] },
      { label: 'Kilit kanun', values: ['Soyadı Kanunu (1934)', 'Kabotaj Kanunu (1926)', 'Umumi Hıfzıssıhha Kanunu (1930)'] },
      { label: 'İlgili ilke', values: ['Halkçılık, Laiklik, İnkılapçılık', 'Devletçilik, Milliyetçilik', 'Halkçılık, Devletçilik'] },
      { label: 'Devletin rolü', values: ['Düzenleyici', 'Önce teşvik edici, 1929’dan sonra öncü', 'Görevli: sağlık “umumî Devlet hizmeti”'] },
    ],
    insight:
      'Asıl bağlantı: Üç alanda da devletin rolü genişledi. Ama amaç devleti büyütmek değil, vatandaşın hayatını iyileştirmekti; Halkçılık ilkesinin “halk için” vurgusu üç alanda da görülür.',
  },
  traps: [
    {
      title: 'Kadınların siyasi haklarını tek bir yılda sanmak',
      wrong: 'Türk kadınları 1934’te bir anda bütün seçimlerde seçme ve seçilme hakkı kazandı.',
      right: 'Haklar adım adım genişledi: 1930’da belediye seçimleri, 1933’te köy muhtarlığı ve ihtiyar heyeti, 1934’te milletvekilliği seçimleri.',
      body: '1935 seçimlerinde 17 kadın milletvekili seçildi; 1936’daki ara seçimle sayı 18’e çıktı.',
    },
    {
      title: 'İzmir İktisat Kongresi’ni devletçiliğin başlangıcı sanmak',
      wrong: 'İzmir İktisat Kongresi’nde bütün ekonominin devlet tarafından yönetilmesi kararlaştırıldı.',
      right: 'İzmir İktisat Kongresi özel girişimi desteklemeyi, yerli malını ve tasarrufu esas aldı. Devletin ekonomide öncü rol üstlenmesi 1929 bunalımından sonra, 1930’larda belirginleşti.',
      body: 'Sıralamayı hatırla: 1923 özel girişim + teşvik → 1929 bunalım → 1930’lar devletçilik.',
    },
    {
      title: 'Takvim değişikliğiyle Hicrî takvimin tamamen kaldırıldığını sanmak',
      wrong: '1925’teki kanunla Hicrî takvim tamamen yasaklandı.',
      right: 'Kanun devletin resmî takviminde uluslararası takvimi kabul etti; 3. maddeye göre Hicrî takvim “ahval-i mahsusada”, yani dinî günlerin belirlenmesi gibi özel durumlarda kullanılmaya devam etti.',
      body: 'Resmî takvim ile dinî günlerin hesaplanmasını karıştırma.',
    },
    {
      title: 'Soyadı Kanunu’nu yalnız bir isim meselesi sanmak',
      wrong: 'Soyadı Kanunu’nun toplumsal eşitlikle bir ilgisi yoktur.',
      right: 'Soyadı Kanunu nüfus kayıtlarında düzeni sağladı; ardından çıkan kanunla ağa, efendi, bey, paşa gibi unvanlar kaldırıldı ve herkes kanun önünde yalnız adıyla anılmaya başladı.',
      body: 'Bu iki düzenleme birlikte Halkçılık ilkesinin eşitlik anlayışını gösterir.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Gündelik hayatı değiştirenler',
    lead: 'Kongreyi yönetenler, sağlık teşkilatını kuranlar, Meclis’e giren ilk kadınlar…',
    intro: 'Kartlarda her kişinin bu alanlardaki rolünü görürsün.',
    figures: [
      {
        name: 'Mustafa Kemal Atatürk',
        period: '1923–1938',
        position: 'Cumhurbaşkanı',
        contribution: 'İzmir İktisat Kongresi’ni açtı; 1925’te Kastamonu ve İnebolu’da kıyafet konusunu halka anlattı. 24 Kasım 1934’te çıkan kanunla Büyük Millet Meclisi kendisine “Atatürk” soyadını verdi.',
        connections: ['İzmir İktisat Kongresi', 'Şapka', 'Soyadı'],
        significance: 'Toplumsal ve ekonomik inkılapları halka bizzat anlatan liderdir.',
      },
      {
        name: 'Kâzım Karabekir Paşa',
        period: '1923',
        position: 'İzmir İktisat Kongresi başkanı',
        contribution: '1.135 temsilcinin katıldığı kongreye başkanlık etti; kongrede Misak-ı İktisadi oy birliğiyle kabul edildi.',
        connections: ['İzmir İktisat Kongresi'],
        significance: 'Millî ekonominin esaslarının belirlendiği toplantının başkanıdır.',
      },
      {
        name: 'Dr. Refik Saydam',
        period: '1925–1937 · Sağlık Vekili',
        position: 'Sıhhat ve İçtimai Muavenet Vekili',
        contribution: 'Hıfzıssıhha Enstitüsü’nü ve okulunu kurdu (1928); aşı ve serum üretimini başlattı; koruyucu sağlık hizmetleriyle ilgili önemli kanunların hazırlanmasına öncülük etti.',
        connections: ['Hıfzıssıhha Enstitüsü', 'Umumi Hıfzıssıhha Kanunu'],
        significance: 'Cumhuriyet’in sağlık teşkilatının kurucusu sayılır.',
      },
      {
        name: 'Hatice Özgenel',
        period: '1936 · Milletvekili',
        position: 'Emekli öğretmen, Çankırı milletvekili',
        contribution: '1936’daki ara seçimle Çankırı milletvekili seçildi; böylece Meclis’teki kadın milletvekili sayısı 18’e çıktı.',
        connections: ['Kadınların siyasi hakları'],
        significance: 'Meclis’e giren ilk kadın milletvekillerinden biridir.',
      },
    ],
    takeaway:
      '1935’te Meclis’e giren 17 kadın milletvekili, birkaç yıl önce oy bile kullanamayan kadınların artık yasa yapan kişiler hâline geldiğini gösterir. Bu, toplumsal inkılapların en somut sonuçlarından biridir.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-kadin`,
      title: 'Türk kadınının hakları ve dünya ile karşılaştırma',
      lead: 'Program Türk kadınına eğitim, sosyal, kültürel ve siyasi alanlarda sağlanan hakların diğer ülkelerle karşılaştırılmasını ister.',
      blocks: [
        {
          id: `${SLUG}-kadin-anlatim`,
          type: 'prose',
          body:
            '**Eğitim:** Tevhid-i Tedrisat (1924) ile bütün okullar tek çatıda toplandı; Millet Mektepleri’nin (1929) üyeleri “her Türk kadın ve erkek vatandaş” sayıldı ve kadınlara da okuma yazma öğretildi.\n\n' +
            '**Sosyal ve hukuki:** Türk Medeni Kanunu (1926) tek eşliliği, resmî nikâhı, mahkemede boşanmayı ve mirasta eşitliği getirdi (bir önceki ders).\n\n' +
            '**Siyasi:** Kadınlar önce 3 Nisan 1930’da belediye seçimlerinde, 26 Ekim 1933’te köy muhtarlığı ve ihtiyar heyeti seçimlerinde, 5 Aralık 1934’te de milletvekili seçimlerinde seçme ve seçilme hakkı kazandı. 8 Şubat 1935 seçimlerinde 17 kadın milletvekili Meclis’e girdi; 1936’daki ara seçimle bu sayı 18 oldu.\n\n' +
            '**Karşılaştırma:** Kadınlara oy hakkı dünyada ilk olarak 1893’te Yeni Zelanda’da tanınmıştı. Ama birçok Avrupa ülkesi bu hakkı Türkiye’den sonra verdi: Fransa 1944’te, İtalya 1946’da, Yunanistan 1952’de. Yani Türk kadını siyasi haklarını pek çok gelişmiş ülkedeki kadınlardan önce kazandı.',
        },
        {
          id: `${SLUG}-kadin-tablo`,
          type: 'table',
          interactive: true,
          title: 'Kadınlara milletvekili seçimlerinde oy hakkı: bazı ülkeler',
          columns: ['Ülke', 'Yıl', 'Türkiye’ye göre'],
          rows: [
            ['Yeni Zelanda', '1893', 'Önce'],
            ['Türkiye', '1934', '—'],
            ['Fransa', '1944', 'Sonra (10 yıl)'],
            ['İtalya', '1946', 'Sonra (12 yıl)'],
            ['Yunanistan', '1952', 'Sonra (18 yıl)'],
          ],
          caption: 'Tablo yalnız birkaç örnek içerir. Ülkelerin bir kısmında haklar Türkiye’deki gibi aşamalı olarak (önce yerel, sonra ulusal seçimler) tanınmıştır.',
        },
      ],
    },
    {
      id: `${SLUG}-ekonomi`,
      title: 'Ekonomi: İzmir’den devletçiliğe',
      lead: 'İTA.8.4.6, İzmir İktisat Kongresi kararlarını millî iktisat ve tasarruf bilinci açısından; tarım, sanayi, ticaret ve denizcilik çalışmalarını ve 1929 bunalımının etkilerini ister.',
      blocks: [
        {
          id: `${SLUG}-ekonomi-anlatim`,
          type: 'prose',
          body:
            '**İzmir İktisat Kongresi (17 Şubat–4 Mart 1923).** Lozan görüşmeleri kesildiği günlerde, İzmir’de çiftçi, tüccar, sanayici ve işçileri temsil eden 1.135 kişi toplandı. Kongreyi Mustafa Kemal açtı, Kâzım Karabekir Paşa yönetti. Kabul edilen **Misak-ı İktisadi**’nin özü şuydu: Ekonomik bağımsızlıktan taviz verilmeyecek; yerli üretim ve yerli malı desteklenecek; israftan kaçınılıp tasarruf edilecek; zararlı olmamak şartıyla yabancı sermaye gelebilecek; çiftçiye kredi verilecek, girişimci teşvik edilecek. Kongre, **millî iktisat** (ekonomik bağımsızlık) ve **tasarruf bilinci** düşüncesinin temelini attı.\n\n' +
            '**Tarım:** Nüfusun büyük kısmı köylüydü. 1925’te ürünün onda birini vergi olarak alan **aşar** kaldırıldı; çiftçinin yükü hafifledi.\n\n' +
            '**Sanayi:** 1927’de **Teşvik-i Sanayi Kanunu** ile özel sanayiye devlet desteği getirildi. 1929 bunalımından sonra devlet sanayide öncü oldu: 1933’te **Sümerbank** kuruldu, 1934’te **Birinci Beş Yıllık Sanayi Planı** uygulanmaya başladı.\n\n' +
            '**Ticaret ve bankacılık:** 1924’te Türkiye İş Bankası, 1930’da çıkan kanunla **Türkiye Cumhuriyet Merkez Bankası** kuruldu. Para ve kredi işleri millî kurumlara geçti.\n\n' +
            '**Denizcilik:** 19 Nisan 1926’da kabul edilen **Kabotaj Kanunu** ile Türk kıyıları arasında yük ve yolcu taşımak yalnız Türk bayraklı gemilere bırakıldı. Kanunun yürürlüğe girdiği 1 Temmuz, Denizcilik ve Kabotaj Bayramı olarak kutlanır.\n\n' +
            '**1929 Dünya Ekonomik Bunalımı:** Dünya ticareti çökünce Türkiye’nin sattığı tarım ürünlerinin fiyatları düştü. Türkiye bu dönemde dışarıdan alımları sınırlamaya ve yerli üretimi artırmaya yöneldi. 14 Aralık 1929’da **Millî İktisat ve Tasarruf Cemiyeti** kuruldu; her yıl Aralık ayında **Yerli Malı Haftası** kutlanmaya başlandı. Özel sermayenin yetersizliği ve bunalımın etkisiyle devletçilik ekonomi politikasının esası oldu.',
        },
        {
          id: `${SLUG}-ekonomi-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: TaSaTiDe',
          body: 'Tarım (aşar 1925) · Sanayi (Teşvik 1927, Sümerbank 1933, Plan 1934) · Ticaret (İş Bankası 1924, Merkez Bankası 1930) · Denizcilik (Kabotaj 1926).',
        },
      ],
    },
    {
      id: `${SLUG}-saglik`,
      title: 'Sağlık: devletin temel görevi',
      lead: 'İTA.8.4.7, Atatürk döneminde sağlık alanında yapılan çalışmaları devletin temel görevleriyle ilişkilendirmeni ister.',
      blocks: [
        {
          id: `${SLUG}-saglik-anlatim`,
          type: 'prose',
          body:
            '**Savaş bile beklemedi:** 2 Mayıs 1920’de, Millî Mücadele sürerken, Büyük Millet Meclisi’nin ilk hükümetini kuran kanun on bir vekâlet saydı; bunlardan biri **Sıhhiye ve Muavenet-i İçtimaiye** (Sağlık ve Sosyal Yardım) Vekâleti’ydi. Yani sağlık, devletin daha kuruluş anında temel görevleri arasında yer aldı.\n\n' +
            '**Salgınlarla mücadele:** Sıtma, verem, frengi, trahom gibi hastalıklar yaygındı. 13 Mayıs 1926’da **Sıtma Mücadelesi Kanunu** çıktı. Sağlık Vekili Dr. Refik Saydam’ın öncülüğünde 1928’de **Hıfzıssıhha Enstitüsü** kuruldu ve aşı–serum üretimi başladı.\n\n' +
            '**Umumi Hıfzıssıhha Kanunu (1930):** Sağlık hizmetlerini bütüncül olarak düzenledi. İlk maddesi sağlığı korumayı, hastalıklarla mücadeleyi, gelecek nesillerin sağlıklı yetişmesini ve halka tıbbî ve sosyal yardımı “umumî Devlet hizmetlerinden” saydı. Doktor, hemşire, ebe ve sağlık memuru yetiştirmek için okullar açıldı.\n\n' +
            '**Neden devletin görevi?** Çünkü sağlıklı bir nüfus olmadan ne ekonomi kalkınabilir ne de ülke savunulabilirdi. Savaşlarda büyük kayıplar vermiş bir ülke için sağlıklı nesiller yetiştirmek, bağımsızlığın ve kalkınmanın ön şartıydı. Bu yüzden sağlık, Halkçılık ilkesinin “halkın yararı” anlayışıyla ve devletin temel görevleriyle doğrudan ilişkilidir.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste iki konuşma ve üç kanun okuyacaksın: İnebolu konuşması, İzmir İktisat Kongresi konuşması, Soyadı Kanunu, Unvanlar Kanunu ve Umumi Hıfzıssıhha Kanunu. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Konuşmalar Vikikaynak’taki metinlerden, kanunlar TBMM kanun arşivindeki özgün metinlerden alınmıştır. Konuşmaların bazı cümleleri farklı yayınlarda küçük yazım farklarıyla aktarılır.\n\n' +
      'İlk dört metin birebir alıntıdır. Beşinci metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'İnebolu konuşmasından (1925)',
        kunye: 'Mustafa Kemal’in İnebolu’da halka konuşması, Ağustos 1925 (Vikikaynak’taki kayda göre 27 Ağustos). Metin: Vikikaynak, “Atatürk’ün İnebolu Söylevi”.',
        nitelik: 'Birebir alıntı (Vikikaynak’taki metinden).',
        metin:
          '-Bizim kıyafetimiz milli midir? (Hayır, hayır sadaları) -Bizim kıyafetimiz medeni ve beynelmilel midir? (Hayır, hayır sadaları) … Ayakta iskarpin veya fotin, bacakta pantolon, yelek, gömlek, kravat, yakalık, caket ve bittabi bunların mütemmimi olmak üzere başta siperi şemsli serpuş, bunu çok açık söylemek isterim: Bu Serpuşun İsmine Şapka Denir.',
        soru: 'Mustafa Kemal kıyafette hangi iki özelliği arıyor? Konuşma ile üç ay sonra çıkan Şapka Kanunu arasında nasıl bir ilişki kurarsın?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Medeni ve beynelmilel”: çağdaş ve uluslararası. “Mütemmim”: tamamlayıcı. “Siperi şemsli serpuş”: güneşten koruyan siperli başlık.' },
          { title: 'İki özelliği bul', body: 'Kıyafet hem millî hem de medeni ve uluslararası olmalıdır.' },
          { title: 'İlişkiyi kur', body: 'Konuşma halkı hazırlayan bir açıklamadır; 25 Kasım 1925’te çıkan Şapka Kanunu ise bu düşünceyi kanuna dönüştürdü.' },
        ],
        cevap: 'Mustafa Kemal kıyafetin hem millî hem de çağdaş ve uluslararası olmasını istiyor. İnebolu’daki konuşma halkı bilgilendirip hazırlayan bir adım, üç ay sonra çıkan Şapka Kanunu ise bu düşüncenin hukuki sonucudur.',
        cikarim: 'İnkılaplar çoğu zaman önce halka anlatıldı, sonra kanunlaştı. Bir konuşma ile bir kanunun tarihlerini karşılaştırmak bu süreci görmeni sağlar.',
      },
      {
        tur: 'birincil',
        baslik: 'İzmir İktisat Kongresi’ni açış konuşmasından (1923)',
        kunye: 'Mustafa Kemal’in Türkiye İktisat Kongresi’ni açış konuşması, İzmir, 17 Şubat 1923. Metin: Vikikaynak, “Atatürk’ün İzmir İktisad Kongresi Konuşması”.',
        nitelik: 'Birebir alıntı (Vikikaynak’taki metinden). Bu cümleler farklı yayınlarda küçük yazım farklarıyla aktarılır.',
        metin:
          'İstiklal-i tam için şu düstur var: Hakimiyet-i Milliye, hakimiyet-i iktisadiye ile tarsin edilmelidir. … Siyasi ve askeri muzafferiyetler ne kadar büyük olursa olsun, iktisadi zaferle tetvic edilemezse semere, netice paydar olamaz.',
        soru: 'Mustafa Kemal siyasi bağımsızlık ile ekonomi arasında nasıl bir ilişki kuruyor? Bu fikir kongrenin kararlarına nasıl yansımış olabilir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“İstiklal-i tam”: tam bağımsızlık. “Düstur”: ilke. “Hâkimiyet-i milliye”: millî egemenlik. “Hâkimiyet-i iktisadiye”: ekonomik egemenlik. “Tarsin”: sağlamlaştırma. “Muzafferiyet”: zafer. “Tetviç”: taçlandırma. “Semere”: ürün, sonuç. “Payidar”: kalıcı.' },
          { title: 'İlişkiyi bul', body: 'Millî egemenlik ekonomik egemenlikle güçlendirilmelidir; askerî zaferler ekonomik zaferle taçlandırılmazsa kalıcı olmaz.' },
          { title: 'Kararlarla bağla', body: 'Misak-ı İktisadi’de ekonomik bağımsızlıktan taviz verilmemesi, yerli üretimin ve tasarrufun desteklenmesi bu düşüncenin sonucudur.' },
        ],
        cevap: 'Mustafa Kemal tam bağımsızlığın ancak ekonomik bağımsızlıkla mümkün olduğunu söyler: Askerî zaferler ekonomik zaferle tamamlanmazsa kalıcı olamaz. Kongrenin ekonomik bağımsızlığı, yerli malını ve tasarrufu öne çıkaran kararları bu düşünceyi yansıtır.',
        cikarim: 'Kongrenin Lozan görüşmelerinin kesildiği günlerde toplanması da anlamlıdır: Türkiye, kapitülasyonlara geri dönmeyeceğini ekonomik kararlarıyla da gösteriyordu.',
      },
      {
        tur: 'birincil',
        baslik: 'Soyadı Kanunu ve Unvanlar Kanunu (1934)',
        kunye: 'Soy adı kanunu, Kanun no 2525, kabul 21 Haziran 1934, 1. madde; Efendi, bey, paşa gibi lâkab ve unvanların kaldırıldığına dair kanun, Kanun no 2590, kabul 26 Kasım 1934, 1. madde. Metin: TBMM kanun arşivi.',
        nitelik: 'Birebir alıntı. İki kanundan alınan maddeler “…” ile birleştirilmiştir.',
        metin:
          'BİRİNCİ MADDE — Her Türk öz adından başka soy adını da taşımağa mecburdur. … BİRİNCİ MADDE — Ağa, hacı, hafız, hoca, molla, efendi, bey, beyefendi, paşa, hanım, hanımefendi ve hazretleri gibi lâkab ve unvanlar kaldırılmıştır. Erkek ve kadın vatandaşlar, kanunun karşısında ve resmî belgelerde yalnız adlarile anılırlar.',
        soru: 'İki kanun birlikte düşünüldüğünde toplumsal hayatta ne değişmiştir? Bu değişim hangi ilkeyle ilişkilidir?',
        adimlar: [
          { title: 'Birinci kanun', body: 'Herkes bir soyadı taşıyacak: Kişiler adı ve soyadıyla tanımlanacak, nüfus kayıtları düzenlenecek.' },
          { title: 'İkinci kanun', body: 'Toplumsal konum, meslek ya da ayrıcalık gösteren lakap ve unvanlar kaldırılıyor; kadın ve erkek herkes resmî belgelerde yalnız adıyla anılacak.' },
          { title: 'İlkeyle bağla', body: 'Unvan farkının ortadan kalkması, kanun önünde eşitliktir → Halkçılık.' },
        ],
        cevap: 'İki kanun birlikte, herkesin adı ve soyadıyla eşit biçimde tanımlandığı bir düzen kurdu; unvanlarla ortaya çıkan ayrıcalık ve farklar resmî hayattan kaldırıldı. Bu değişim en çok Halkçılık ilkesinin eşitlik anlayışıyla ilişkilidir.',
        cikarim: 'İkinci kanunda “erkek ve kadın vatandaşlar” diye ikisinin birlikte anılması da dikkat çekicidir: Eşitlik vurgusu kadınları da açıkça kapsar.',
      },
      {
        tur: 'birincil',
        baslik: 'Umumi Hıfzıssıhha Kanunu’nun 1. maddesi (1930)',
        kunye: 'Umumî hıfzıssıhha kanunu, Kanun no 1593, 1930 (Resmî Gazete 6 Mayıs 1930), 1. madde. Metin: TBMM kanun arşivi.',
        nitelik: 'Birebir alıntı.',
        metin:
          'BİRİNCİ MADDE — Memleketin sıhhî şartlarını ıslâh ve milletin sıhhatine zarar veren bütün hastalıklar veya sair muzır amillerle mücadele etmek ve müstakbel neslin sıhhatli olarak yetişmesini temin ve halkı tıbbî ve içtimaî muavenete mazhar eylemek umumî Devlet hidematındandır.',
        soru: 'Madde devlete hangi görevleri veriyor? Sağlığın “umumî Devlet hizmeti” sayılması ne anlama gelir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Sıhhî şartlar”: sağlık koşulları. “Islah”: iyileştirme. “Muzır âmil”: zararlı etken. “Müstakbel nesil”: gelecek kuşak. “Tıbbî ve içtimaî muavenet”: sağlık ve sosyal yardım. “Hidemat”: hizmetler.' },
          { title: 'Görevleri say', body: '1) Sağlık koşullarını iyileştirmek, 2) hastalıklar ve zararlı etkenlerle mücadele etmek, 3) gelecek kuşakların sağlıklı yetişmesini sağlamak, 4) halka sağlık ve sosyal yardım götürmek.' },
          { title: 'Anlamı çıkar', body: 'Sağlık, kişinin kendi imkânlarına ya da hayır kurumlarına bırakılmıyor; devletin yerine getirmekle yükümlü olduğu genel bir görev hâline geliyor.' },
        ],
        cevap: 'Madde devlete sağlık koşullarını iyileştirme, hastalıklarla mücadele, sağlıklı nesiller yetiştirme ve halka sağlık ve sosyal yardım götürme görevlerini verir. Sağlığın “umumî Devlet hizmeti” sayılması, sağlığın devletin temel görevleri arasında olduğu anlamına gelir.',
        cikarim: 'İTA.8.4.7’nin istediği ilişki tam olarak budur: Sağlık çalışmaları bir lütuf değil, devletin temel görevidir.',
      },
      {
        tur: 'ikincil',
        baslik: 'Toplumsal inkılaplar üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          '1925’te kabul edilen takvim ve saat kanunlarıyla Türkiye dünya ile aynı zaman düzenine geçti. Bu değişiklikler ticaret ve iletişimi kolaylaştırdı. Böylece Türkiye, bütün ekonomik sorunlarını birkaç yıl içinde çözmüş oldu.',
        soru: 'Metindeki olguyu ve yorumları ayır. Hangi yargı kanıtların ötesine geçiyor?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Sonradan yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguyu ayır', body: 'Takvim ve saat kanunlarının 1925’te kabul edilmesi olgudur (Kanun no 697, 698).' },
          { title: 'Makul yorumu ayır', body: '“Ticaret ve iletişimi kolaylaştırdı” gerekçelendirilebilir bir yorumdur: Ortak takvim ve saat, dış ticarette tarih ve saat karışıklığını azaltır.' },
          { title: 'Aşırı yargıyı bul', body: '“Bütün ekonomik sorunlarını birkaç yıl içinde çözdü” yargısı kanıtların ötesindedir: 1929 bunalımı, sermaye eksikliği ve sanayileşme sorunları 1930’larda da sürdü.' },
        ],
        cevap: 'Olgu: 1925’te takvim ve saat kanunlarının kabulü. Makul yorum: ticareti ve iletişimi kolaylaştırması. Aşırı yargı: “bütün ekonomik sorunları birkaç yılda çözdü”; 1929 bunalımı ve sonrasındaki gelişmeler bunun doğru olmadığını gösterir.',
        cikarim: 'Bir düzenlemenin olumlu etkisini kabul etmek, ona her şeyi çözme gücü yüklemek anlamına gelmez. Kronolojiyi bilmek, aşırı yargıları yakalamanın en iyi yoludur.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Kadınların siyasi haklarını sırala',
      prompt: 'Aşağıdaki gelişmeleri tarih sırasına koy: kadınların milletvekili seçme ve seçilme hakkı, belediye seçimlerinde seçme ve seçilme hakkı, köy muhtarlığı ve ihtiyar heyeti seçimlerinde seçme ve seçilme hakkı, ilk kadın milletvekillerinin Meclis’e girmesi.',
      steps: [
        { title: '1', body: 'Belediye seçimleri (3 Nisan 1930).' },
        { title: '2', body: 'Köy muhtarlığı ve ihtiyar heyeti (26 Ekim 1933).' },
        { title: '3', body: 'Milletvekilliği (5 Aralık 1934).' },
        { title: '4', body: 'İlk kadın milletvekilleri (8 Şubat 1935 seçimleri).' },
      ],
      answer: 'Belediye (1930) → köy (1933) → milletvekilliği hakkı (1934) → ilk kadın milletvekilleri (1935).',
      takeaway: 'Haklar yerelden ulusala doğru genişledi. Bu mantığı hatırlarsan sırayı karıştırmazsın.',
    },
    {
      title: 'Ekonomik adımları alanlarına göre ayır',
      prompt: 'Aşarın kaldırılması, Kabotaj Kanunu, Teşvik-i Sanayi Kanunu ve Merkez Bankası’nın kurulması hangi alanlara (tarım, sanayi, ticaret–bankacılık, denizcilik) aittir?',
      steps: [
        { title: 'Aşar', body: 'Tarım (1925).' },
        { title: 'Kabotaj', body: 'Denizcilik (1926).' },
        { title: 'Teşvik-i Sanayi', body: 'Sanayi (1927).' },
        { title: 'Merkez Bankası', body: 'Ticaret ve bankacılık (1930).' },
      ],
      answer: 'Aşar–tarım · Kabotaj–denizcilik · Teşvik-i Sanayi–sanayi · Merkez Bankası–ticaret ve bankacılık.',
      takeaway: 'Program dört alanı sayar: tarım, sanayi, ticaret, denizcilik. Her alan için en az bir örnek hatırla.',
    },
    {
      title: '1929 bunalımının etkisini açıkla',
      prompt: '1923’te özel girişimi desteklemeyi esas alan Türkiye, 1930’larda neden devletçiliğe yöneldi?',
      steps: [
        { title: 'Birinci sebep', body: 'Özel sermaye birikimi yetersizdi; 1923–1929 arasında beklenen sanayileşme gerçekleşmedi.' },
        { title: 'İkinci sebep', body: '1929 Dünya Ekonomik Bunalımı dünya ticaretini çökertti; tarım ürünlerinin fiyatları düştü.' },
        { title: 'Sonuç', body: 'Devlet sanayide öncü oldu: Sümerbank (1933), Birinci Beş Yıllık Sanayi Planı (1934); yerli malı ve tasarruf teşvik edildi.' },
      ],
      answer: 'Özel sermayenin yetersizliği ve 1929 bunalımının etkileri, devletin ekonomide öncü rol üstlenmesine yol açtı.',
      takeaway: 'Politika değişikliği sorularında hem iç sebebi (sermaye eksikliği) hem dış sebebi (dünya bunalımı) yaz.',
    },
  ],
  questionClue: {
    concept: 'Soruda hangi alandan söz edildiğini nasıl anlarım?',
    statement: 'Soru bir kanun maddesi, bir kongre kararı ya da gündelik hayattan bir durum verip alanı ya da amacı sorabilir.',
    clues: [
      '“Serpuş”, “kisve”, “soyadı”, “unvan”, “takvim”, “metre” → Toplumsal alan (İTA.8.4.5)',
      '“Yerli malı”, “tasarruf”, “Misak-ı İktisadi”, “aşar”, “kabotaj”, “Sümerbank” → Ekonomi (İTA.8.4.6)',
      '“Salgın”, “sıtma”, “hıfzıssıhha”, “aşı”, “sağlıklı nesil” → Sağlık (İTA.8.4.7)',
      '“1930 belediye, 1933 köy, 1934 milletvekili” → Kadınların siyasi hakları',
      '“Dünya ticareti çöktü”, “devlet öncülüğü” → 1929 bunalımı ve devletçilik',
    ],
    reasoning: 'Önce durumun gündelik hayatı mı, üretimi ve parayı mı, yoksa sağlığı mı ilgilendirdiğini belirle. Sonra tarihine ve ilgili ilkeye bak.',
    boundary: 'Dikkat: Medeni Kanun (1926) kadının aile ve hukuk alanındaki haklarıdır; seçme ve seçilme hakları ise 1930–1934 arasındaki siyasi haklardır.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'Bu üç kazanım “kavrar” ve “ilişkilendirir” düzeyindedir. Sorular bir kanun maddesi, bir kongre kararı, bir tablo ya da ülkeler arası karşılaştırma verip çıkarım isteyebilir. Aşağıdaki kalıplar kazanımlarla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Toplumsal düzenlemeyi amacıyla eşleştirme',
      'Kadınların haklarını sıralama ve başka ülkelerle karşılaştırma',
      'İzmir İktisat Kongresi kararlarından millî iktisat ve tasarruf anlayışını çıkarma',
      '1929 bunalımının etkilerini açıklama',
      'Sağlık çalışmalarını devletin görevleriyle ilişkilendirme',
    ],
  },
  checkpoints: [
    {
      prompt: 'Takvim, saat, ölçü ve hafta tatili düzenlemelerinin ortak amacı nedir?',
      hint: 'Bu değişiklikler Türkiye’yi kiminle “aynı düzene” soktu?',
      answer: 'Hepsi Türkiye’nin zaman, ölçü ve çalışma düzenini dünyanın geri kalanıyla uyumlu hâle getirdi. Böylece ticaret, iletişim ve üretimde karışıklıklar azaldı.',
    },
    {
      prompt: 'Kabotaj Kanunu neden ekonomik bağımsızlığın bir parçası sayılır?',
      answer: 'Çünkü Osmanlı döneminde yabancı gemiler Türk limanları arasında da taşımacılık yapabiliyordu. Kabotaj Kanunu bu hakkı yalnız Türk gemilerine vererek kıyı ticaretini millîleştirdi ve Türk denizciliğini geliştirdi.',
    },
    {
      prompt: 'Millî Mücadele sürerken 1920’de bir sağlık vekâletinin kurulması neyi gösterir?',
      answer: 'Sağlığın savaş bitene kadar bekletilecek bir konu değil, devletin en başından üstlendiği temel bir görev olarak görüldüğünü gösterir.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.4.5 toplumsal alandaki düzenlemeleri ve Türk kadınına tanınan hakların diğer ülkelerle karşılaştırılmasını; İTA.8.4.6 İzmir İktisat Kongresi kararlarını, tarım, sanayi, ticaret ve denizcilikteki çalışmaları ve 1929 bunalımının etkilerini; İTA.8.4.7 ise sağlık çalışmalarının devletin temel görevleriyle ilişkisini ister. Bu kazanımlara dayanan bir soru bir kanun maddesi, bir karar ya da bir tablo verip çıkarım isteyebilir.',
    measures: [
      'Toplumsal düzenlemelerin amaçlarını açıklama',
      'Kadın haklarını kronolojik ve karşılaştırmalı olarak değerlendirme',
      'Millî iktisat ve tasarruf bilincini örneklerle açıklama',
      'Sağlığı devletin temel görevleriyle ilişkilendirme',
    ],
  },
  simulation: {
    title: 'Mini LGS: Bir kanun, bir görev',
    passage:
      '1930’da kabul edilen Umumi Hıfzıssıhha Kanunu’na göre ülkenin sağlık koşullarını iyileştirmek, hastalıklarla mücadele etmek, gelecek nesillerin sağlıklı yetişmesini sağlamak ve halka tıbbî ve sosyal yardım götürmek genel devlet hizmetlerindendir. Aynı yıllarda sıtma ile mücadele için özel bir kanun çıkarılmış, aşı ve serum üreten bir enstitü kurulmuştu.',
    question: 'Bu bilgilerden aşağıdaki sonuçlardan hangisine ulaşılabilir?',
    options: [
      { text: 'Sağlık hizmetleri devletin temel görevleri arasında görülmüştür.', explanation: 'Doğru. Kanun sağlığı genel devlet hizmetlerinden sayar; sıtma kanunu ve enstitü de devletin bu görevi fiilen üstlendiğini gösterir.' },
      { text: 'Sağlık hizmetleri tamamen özel kişilere bırakılmıştır.', explanation: 'Metin bunun tersini söyler: Sağlık bir devlet hizmetidir.' },
      { text: 'Bu dönemde hiçbir salgın hastalık kalmamıştır.', explanation: 'Metinde salgınların tamamen bittiğine dair bilgi yoktur; tersine sıtma ile mücadele sürmektedir.' },
      { text: 'Sağlık çalışmaları yalnız büyük şehirlerle sınırlı tutulmuştur.', explanation: 'Metinde böyle bir sınırlama yoktur; kanun bütün “memleketin” sağlık koşullarından söz eder.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “ulaşılabilir” diyor. Metindeki “genel devlet hizmetlerindendir” ifadesi doğrudan doğru seçeneği destekler.',
    critical_point: 'Üçüncü seçenek çekici olabilir, çünkü yoğun bir sağlık çalışmasından söz edilir. Ama çalışma yapılması, sorunun tamamen çözüldüğü anlamına gelmez.',
    takeaway: 'Metinde bir çabanın anlatılması, o çabanın tam başarıya ulaştığını göstermez. “Hiç”, “tamamen” gibi mutlak ifadelere dikkat et.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Gündelik hayatta Cumhuriyet',
    range: '1920–1935',
    body:
      'Toplumsal alanda 1925’te Şapka Kanunu (25 Kasım), tekke, zaviye ve türbelerin kapatılması (30 Kasım), saat ve takvim kanunları (26 Aralık) kabul edildi; 1931’de metre sistemi, 1934’te Soyadı Kanunu, unvanların kaldırılması ve dinî kisvelerle ilgili kanun geldi; 1935’te hafta tatili pazar oldu. Kadınlar 1930’da belediye, 1933’te köy, 1934’te milletvekili seçimlerinde seçme ve seçilme hakkı kazandı ve 1935’te 17 kadın milletvekili Meclis’e girdi. Ekonomide 1923 İzmir İktisat Kongresi millî iktisat ve tasarruf anlayışını ortaya koydu; aşar kaldırıldı (1925), Kabotaj Kanunu (1926) ve Teşvik-i Sanayi Kanunu (1927) çıktı; 1929 bunalımından sonra yerli malı ve tasarruf seferberliği ile devletçi sanayileşme başladı. Sağlıkta 1920’de kurulan vekâletten sonra Sıtma Mücadelesi Kanunu (1926), Hıfzıssıhha Enstitüsü (1928) ve Umumi Hıfzıssıhha Kanunu (1930) ile sağlık devletin temel görevi olarak örgütlendi.',
    turning_points: [
      '17 Şubat 1923 · İzmir İktisat Kongresi',
      '25 Kasım 1925 · Şapka Kanunu',
      '19 Nisan 1926 · Kabotaj Kanunu',
      '1929 · Dünya Ekonomik Bunalımı',
      '1930 · Umumi Hıfzıssıhha Kanunu; kadınlara belediye seçimlerinde hak',
      '5 Aralık 1934 · Kadınlara milletvekili seçme ve seçilme hakkı',
    ],
  },
  summary: [
    '**Toplumsal:** Şapka (25 Kasım 1925), tekke–zaviye–türbeler (30 Kasım 1925), saat ve takvim (26 Aralık 1925), metre sistemi (1931), Soyadı (21 Haziran 1934), unvanlar (26 Kasım 1934), kisveler (3 Aralık 1934), hafta tatili pazar (1935).',
    '**Kadın hakları:** 1930 belediye → 1933 köy → 1934 milletvekili; 1935’te 17 kadın milletvekili. Fransa 1944, İtalya 1946, Yunanistan 1952.',
    '**Ekonomi:** İzmir İktisat Kongresi (1923; millî iktisat, yerli malı, tasarruf) · aşar kaldırıldı (1925) · Kabotaj (1926) · Teşvik-i Sanayi (1927) · Merkez Bankası (1930) · Sümerbank (1933) · Birinci Beş Yıllık Sanayi Planı (1934).',
    '**1929 bunalımı:** Dünya ticareti çöktü; Millî İktisat ve Tasarruf Cemiyeti ve Yerli Malı Haftası; devletçiliğe geçiş.',
    '**Sağlık:** Sıhhiye Vekâleti (1920), Sıtma Mücadelesi Kanunu (1926), Hıfzıssıhha Enstitüsü (1928), Umumi Hıfzıssıhha Kanunu (1930): sağlık “umumî Devlet hizmeti”.',
  ],
  quizzes: [
    {
      question: 'Türk kadınları milletvekili seçimlerinde seçme ve seçilme hakkını hangi yıl kazanmıştır?',
      options: ['1934', '1930', '1933', '1926'],
      answer_index: 0,
      explanation: '5 Aralık 1934’teki anayasa değişikliğiyle. 1930 belediye, 1933 köy seçimleridir; 1926 Medeni Kanun’un yılıdır.',
    },
    {
      question: 'İzmir İktisat Kongresi’nde alınan kararlar en çok hangi anlayışı yansıtır?',
      options: ['Millî iktisat ve tasarruf', 'Ekonominin tamamen devlet tarafından yönetilmesi', 'Kapitülasyonların sürdürülmesi', 'Yabancı sermayenin tamamen yasaklanması'],
      answer_index: 0,
      explanation: 'Kongre ekonomik bağımsızlığı, yerli malını ve tasarrufu esas aldı; zararlı olmamak şartıyla yabancı sermayeye de kapıyı açık bıraktı.',
    },
    {
      question: 'Aşağıdakilerden hangisi denizcilik alanında yapılan bir çalışmadır?',
      options: ['Kabotaj Kanunu', 'Aşarın kaldırılması', 'Teşvik-i Sanayi Kanunu', 'Soyadı Kanunu'],
      answer_index: 0,
      explanation: 'Kabotaj Kanunu (1926) Türk kıyıları arasındaki taşımacılığı Türk gemilerine bıraktı.',
    },
    {
      question: '1925’te kabul edilen takvim kanunu ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['Devletin resmî takviminde uluslararası takvim kabul edildi.', 'Hicrî takvimin kullanımı her alanda yasaklandı.', 'Gün güneşin batışıyla başlamaya devam etti.', 'Hafta tatili cuma günü oldu.'],
      answer_index: 0,
      explanation: 'Kanun resmî takvimde uluslararası takvimi kabul etti; Hicrî takvim özel durumlarda kullanılmaya devam etti. Günün gece yarısından başlaması saat kanunuyla getirildi; hafta tatili 1935’te pazar oldu.',
    },
    {
      question: 'Umumi Hıfzıssıhha Kanunu’nun sağlığı “umumî Devlet hizmeti” sayması en çok neyi gösterir?',
      options: ['Sağlığın devletin temel görevlerinden biri olarak görüldüğünü', 'Sağlığın yalnız hayır kurumlarına bırakıldığını', 'Hastanelerin kapatıldığını', 'Sağlık hizmetlerinin ücretli olmadığını'],
      answer_index: 0,
      explanation: 'Kanun sağlığı korumayı ve hastalıklarla mücadeleyi devletin genel görevi sayar; bu, İTA.8.4.7’nin istediği ilişkidir.',
    },
  ],
  next: ['Cumhuriyet’in Kazanımları ve Atatürk’ün Hedefleri', 'Demokratikleşme Çabaları'],
})

export default lesson
