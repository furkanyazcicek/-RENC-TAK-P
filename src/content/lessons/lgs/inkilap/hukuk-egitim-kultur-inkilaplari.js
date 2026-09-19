import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.4 Atatürkçülük ve Çağdaşlaşan Türkiye · 3. ders
 * Kazanımlar: İTA.8.4.3 · İTA.8.4.4
 * Dayanak   : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   İTA.8.4.3 — Hukuki düzenlemelerin gerekçeleri kısaca açıklanır. Türk Medeni
 *               Kanunu’nun aile yapısında ve kadının toplumsal statüsünde meydana
 *               getirdiği değişim vurgulanır.
 *   İTA.8.4.4 — Tevhid-i Tedrisat Kanunu, Harf İnkılabı, Millet Mektepleri, Türk Tarih
 *               Kurumu ve Türk Dil Kurumu ele alınır. 1933 Üniversite Reformu’ndan
 *               hareketle Atatürk’ün bilimsel gelişme ve kalkınmaya verdiği önem
 *               vurgulanır. Atatürk’ün güzel sanatlara ve spora verdiği önem
 *               örneklerle açıklanır.
 *
 * KAPSAM KARARI
 * Kanun metinleri (430, 469, 743, 1353, 2252) TBMM kanun arşivindeki özgün
 * metinlerden birebir alındı; Medeni Kanun’un 1926 tarihli ilk hâli kullanıldı
 * (sonraki değişikliklerle birleştirilmiş metin değil). Atatürk’e atfedilen sanat ve
 * spor sözleri güvenilir iki kaynakla birebir doğrulanamadığı için alıntılanmadı;
 * sanat ve spor, kurumlar ve kanunlar üzerinden örneklendi. Harita yoktur.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 17.
 */

const SLUG = 'lgs-tarih-hukuk-egitim-kultur-inkilaplari'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Atatürkçülük ve Çağdaşlaşan Türkiye',
  order: 3,
  title: 'Hukuk, Eğitim ve Kültür Alanında İnkılaplar',
  subtitle:
    'Mahkemeler birleşti, aile hukuku değişti, okullar tek çatı altında toplandı, yeni harflerle milyonlar okumayı öğrendi. Bu derste yeni devletin insanını yetiştiren inkılapları göreceksin.',
  minutes: 55,
  kazanimlar: ['İTA.8.4.3', 'İTA.8.4.4'],
  kapsamNotu:
    'Kanun metinleri TBMM kanun arşivindeki özgün metinlerden birebir alıntılanmıştır; Medeni Kanun’un 1926 tarihli ilk hâli kullanılmıştır. Atatürk’e atfedilen bazı sanat ve spor sözleri güvenilir kaynaklarla birebir doğrulanamadığı için alıntılanmamış, konu kurumlar ve kanunlar üzerinden örneklenmiştir.',
  prerequisites: [
    {
      topic: 'Siyasi inkılaplar (önceki ders)',
      why: '3 Mart 1924’te halifelikle aynı gün kabul edilen Tevhid-i Tedrisat Kanunu bu dersin başlangıç noktasıdır.',
    },
    {
      topic: 'Laiklik ve Milliyetçilik ilkeleri',
      why: 'Hukuk inkılapları en çok Laiklikle, eğitim ve kültür inkılapları en çok Milliyetçilik ve Laiklikle ilişkilidir.',
    },
  ],
  outcomes: [
    'Hukuk alanındaki düzenlemelerin gerekçelerini açıklayabileceksin.',
    'Türk Medeni Kanunu’nun aile yapısını ve kadının toplumsal statüsünü nasıl değiştirdiğini maddeleriyle gösterebileceksin.',
    'Tevhid-i Tedrisat, Harf İnkılabı ve Millet Mektepleri’nin amaç ve sonuçlarını açıklayabileceksin.',
    'Türk Tarih Kurumu, Türk Dil Kurumu ve 1933 Üniversite Reformu’nu bilimsel gelişmeyle ilişkilendirebileceksin.',
    'Atatürk döneminde güzel sanatlar ve spor alanındaki gelişmelere örnekler verebileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Yeni devlet, yeni kurallar, yeni okullar',
    lead:
      'Cumhuriyet ilan edilmişti; ama mahkemeler, okullar ve yazı hâlâ eski düzene aitti. Bir devletin yapısını değiştirmek yetmezdi; insanların gündelik hayatını düzenleyen kuralların da değişmesi gerekiyordu.',
    body:
      '**Hukukta** birlik yoktu. Şer’iye mahkemeleri, nizamiye mahkemeleri, azınlıkların cemaat mahkemeleri ve kapitülasyonların bıraktığı yabancı yargı izleri yan yana yaşıyordu. Aile hukuku büyük ölçüde dinî kurallara dayanıyordu. **Eğitimde** de birlik yoktu: Medreseler, eski usul mahalle mektepleri, yeni usul okullar, azınlık ve yabancı okulları farklı programlarla ve farklı amaçlarla öğrenci yetiştiriyordu. Okuma yazma bilenlerin sayısı çok azdı ve Arap harfleriyle Türkçe okuyup yazmak öğrenmesi zor bir işti.\n\n' +
      'Bu derste iki alanı birlikte inceleyeceğiz. **Hukuk alanında** (İTA.8.4.3): şer’iye mahkemelerinin kaldırılması ve 1926’da kabul edilen Medeni, Borçlar, Ceza ve Ticaret kanunları; özellikle Medeni Kanun’un aileye ve kadının statüsüne etkisi. **Eğitim ve kültür alanında** (İTA.8.4.4): Tevhid-i Tedrisat, Harf İnkılabı, Millet Mektepleri, Türk Tarih ve Türk Dil kurumları, 1933 Üniversite Reformu, güzel sanatlar ve spor.',
  },
  concepts: [
    { term: 'Hukuk birliği', body: 'Bir ülkede herkese aynı kanunların aynı mahkemelerde uygulanması.' },
    { term: 'Mecelle', body: 'Osmanlı’da 1870’lerde hazırlanan, borçlar ve alışveriş gibi konuları düzenleyen, dinî hukuka dayalı kanun derlemesi. Medeni ve Borçlar kanunlarıyla yürürlükten kalktı.' },
    { term: 'Tevhid-i Tedrisat', body: 'Öğretimin birleştirilmesi. Bütün okulların Maarif Vekâleti’ne (Millî Eğitim Bakanlığı) bağlanması.' },
    { term: 'Resmî nikâh', body: 'Evliliğin devletin yetkili memuru önünde, şahitler huzurunda kıyılması ve kayda geçirilmesi.' },
    { term: 'Darülfünun', body: 'Osmanlı’nın son döneminde İstanbul’da kurulan yükseköğretim kurumu. 1933’te kaldırılarak yerine İstanbul Üniversitesi kuruldu.' },
  ],
  why: {
    question: 'Bu inkılaplar neden gerekliydi?',
    body:
      'Çünkü Cumhuriyet’in hedefi olan **çağdaş uygarlık düzeyine ulaşmak**, ancak çağdaş kurallarla yaşayan ve okuyup yazan bir toplumla mümkündü. Farklı mahkemelerin farklı kurallar uyguladığı bir ülkede vatandaşlar kanun önünde eşit olamazdı. Farklı okulların farklı insanlar yetiştirdiği bir ülkede de millî birlik güçlenemezdi.\n\n' +
      'Bu inkılaplar bir de **sözün gereğini yerine getirmek** anlamı taşıyordu: Lozan’da kapitülasyonlar kaldırılmıştı; artık yabancılar da dahil herkese uygulanacak çağdaş kanunlara ihtiyaç vardı. 1924 Anayasası “Türkler kanun nazarında müsavi” demişti; bu eşitliğin aile hayatına da yansıması gerekiyordu.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Hukuk, eğitim ve kültür (1924–1938)',
    lead: 'Kronolojiyi iki renkte düşün: hukuk adımları ve eğitim–kültür adımları. İkisi birbirini besler.',
    intro: '1924 ve 1926 yılları hukukun, 1928–1933 yılları eğitim ve kültürün yoğunlaştığı yıllardır.',
    items: [
      { title: '3 Mart 1924 · Tevhid-i Tedrisat', body: 'Bütün bilim ve eğitim kurumları Maarif Vekâleti’ne bağlandı; medreseler de dahil.' },
      { title: '8 Nisan 1924 · Şer’iye mahkemeleri kaldırıldı', body: 'Mahkemeler tek bir yargı düzeni altında toplandı (1 Mayıs 1924’ten itibaren).' },
      { title: '1924 · Musiki Muallim Mektebi', body: 'Müzik öğretmeni yetiştirmek için Ankara’da kuruldu; 1936’da Devlet Konservatuvarı’na dönüştü.' },
      { title: '17 Şubat 1926 · Türk Medeni Kanunu', body: 'Kabul edildi; 4 Ekim 1926’da yürürlüğe girdi. İsviçre Medeni Kanunu esas alındı.' },
      { title: 'Mart–Mayıs 1926 · Diğer kanunlar', body: 'Ceza Kanunu (1 Mart), Borçlar Kanunu (22 Nisan) ve Ticaret Kanunu (29 Mayıs) kabul edildi.' },
      { title: '9 Ağustos 1928 · Sarayburnu', body: 'Mustafa Kemal İstanbul’da Sarayburnu’nda halka yeni Türk harflerini tanıttı.' },
      { title: '1 Kasım 1928 · Harf İnkılabı', body: 'Türk harflerinin kabul ve uygulanması hakkındaki kanun çıktı.' },
      { title: '1 Ocak 1929 · Millet Mektepleri', body: 'Yetişkinlere yeni harflerle okuma yazma öğretmek için açıldı; Mustafa Kemal teşkilatın “başöğretmeni” kabul edildi.' },
      { title: '15 Nisan 1931 · Türk Tarihi Tetkik Cemiyeti', body: 'Türk tarihini bilimsel yöntemlerle araştırmak için kuruldu; 1935’te Türk Tarih Kurumu adını aldı.' },
      { title: '12 Temmuz 1932 · Türk Dili Tetkik Cemiyeti', body: 'Türk dilini araştırmak ve geliştirmek için kuruldu; bugünkü Türk Dil Kurumu.' },
      { title: '1 Ağustos 1933 · Üniversite Reformu', body: 'Darülfünun kaldırıldı, yerine İstanbul Üniversitesi kuruldu.' },
      { title: '29 Haziran 1938 · Beden Terbiyesi Kanunu', body: 'Sporu ve beden eğitimini düzenlemek için Beden Terbiyesi Genel Müdürlüğü kuruldu.' },
    ],
    takeaway:
      'Dikkat et: Hukuk inkılaplarının çoğu 1924–1926’da, eğitim ve kültür inkılaplarının çoğu 1928–1933’te yapıldı. Önce kurallar değişti, sonra bu kuralları okuyup anlayacak bir toplum yetiştirildi.',
    body:
      'Kronolojideki sıralama rastgele değildir. **Tevhid-i Tedrisat** (1924) bütün okulları tek çatıda toplamasaydı, yeni harflerin (1928) bütün okullarda aynı anda öğretilmesi mümkün olmazdı. **Harf İnkılabı** olmasaydı, Millet Mektepleri (1929) milyonlarca yetişkine bu kadar kısa sürede okuma yazma öğretemezdi.\n\n' +
      'Hukukta da benzer bir sıra vardır: Önce **şer’iye mahkemeleri** kaldırılarak (1924) yargı birliği sağlandı; ardından bu mahkemelerde uygulanacak çağdaş kanunlar (1926) hazırlandı. 1931–1933’te ise bilim ve kültür kurumları kuruldu: Tarih ve dil kurumları ile üniversite reformu, yeni devletin kendi bilim insanlarını yetiştirme hedefinin parçasıydı.',
  },
  dataTable: {
    title: 'Türk Medeni Kanunu aile hayatında ve kadının statüsünde neyi değiştirdi?',
    columns: ['Konu', 'Önceki düzen (kısaca)', 'Medeni Kanun ile (1926)', 'Dayanak'],
    rows: [
      ['Evliliğin biçimi', 'Dinî kurallara göre erkek birden fazla kadınla evlenebiliyordu.', 'Tek eşlilik: Tekrar evlenmek isteyen, önceki evliliğinin sona erdiğini ispat etmek zorundadır.', 'Madde 93'],
      ['Nikâh', 'Evlilik dinî törenle ve çoğu zaman kayda geçmeden yapılabiliyordu.', 'Resmî nikâh: Evlilik iki reşit şahit önünde yetkili memur tarafından kıyılır; dinî tören ancak evlenme kâğıdı gösterildikten sonra yapılabilir.', 'Madde 108, 110'],
      ['Boşanma', 'Boşanma büyük ölçüde erkeğin iradesine bağlıydı.', 'Boşanma mahkeme kararıyla olur; kanunda sayılan sebeplerle karı ve kocadan her biri dava açabilir.', 'Madde 129 ve devamı'],
      ['Miras', 'Kız çocuğunun payı erkek çocuğun payının yarısıydı.', 'Çocuklar mirasçı olurken eşit pay alır.', 'Madde 439'],
      ['Hukukun dayanağı', 'Aile hukuku büyük ölçüde dinî kurallara dayanıyordu.', 'Kurallar toplumun ihtiyaçlarına ve çağdaş hukuka göre belirlendi; İsviçre Medeni Kanunu esas alındı.', 'Kanunun bütünü'],
    ],
    caption:
      '“Önceki düzen” sütunu genel bir özetdir. Osmanlı’nın son döneminde 1917 Hukuk-ı Aile Kararnamesi gibi bazı düzenlemeler de yapılmıştı; Medeni Kanun bu alanda köklü ve bütüncül bir değişiklik getirdi.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Hukuk ve eğitim inkılaplarına giden yol',
    lead: 'Bu inkılapların sebepleri ve sonuçları birbirine bağlıdır. Zincir, hukuk ve eğitimdeki dağınıklıktan birliğe giden yolu gösterir.',
    intro: 'Zincirin başı sorunları, ortası çözümleri, sonu da toplumda yarattığı değişimi anlatır.',
    steps: [
      { tur: 'sebep', title: 'Hukukta dağınıklık', body: 'Farklı mahkemeler farklı kurallar uyguluyordu; aile hukuku dinî kurallara dayanıyordu ve kadınla erkek eşit değildi.' },
      { tur: 'sebep', title: 'Eğitimde dağınıklık', body: 'Medrese, mektep, azınlık ve yabancı okulları farklı amaçlarla öğrenci yetiştiriyordu; okuma yazma oranı düşüktü.' },
      { tur: 'sebep', title: 'Çağdaşlaşma ve eşitlik hedefi', body: 'Laiklik, kanun önünde eşitlik ve çağdaş uygarlık hedefi yeni kurallar ve yeni bir eğitim düzeni gerektiriyordu.' },
      { tur: 'gelisme', title: '1924: Birleştirme', body: 'Tevhid-i Tedrisat ile okullar, şer’iye mahkemelerinin kaldırılmasıyla yargı tek çatıda toplandı.' },
      { tur: 'gelisme', title: '1926: Yeni kanunlar', body: 'Medeni, Borçlar, Ceza ve Ticaret kanunları kabul edildi.' },
      { tur: 'gelisme', title: '1928–1929: Yeni harfler', body: 'Harf İnkılabı yapıldı; Millet Mektepleri’nde yetişkinlere okuma yazma öğretildi.' },
      { tur: 'sonuc', title: 'Eşit vatandaşlar, okuyan toplum', body: 'Kadın aile hayatında ve kanun önünde güçlü haklar kazandı; eğitim birleşti ve yaygınlaştı.' },
      { tur: 'sonraki-etki', title: 'Bilim ve kültür kurumları', body: 'Türk Tarih ve Türk Dil kurumları, 1933 Üniversite Reformu ve sanat–spor kurumları bu zemin üzerine kuruldu.' },
    ],
    inference:
      'Temel çıkarım: Hukuk inkılapları vatandaşları kanun önünde eşitledi; eğitim inkılapları ise bu eşit vatandaşları okuyan, düşünen ve üreten bireyler olarak yetiştirmeyi amaçladı.',
    body:
      '**Hukuk inkılaplarının gerekçeleri** kısaca şöyle özetlenebilir:\n\n' +
      '- **Hukuk birliği:** Herkese aynı kanunların aynı mahkemelerde uygulanması.\n' +
      '- **Laik hukuk:** Kanunların dinî kurallara değil, toplumun ihtiyaçlarına göre yapılması.\n' +
      '- **Eşitlik:** 1924 Anayasası’ndaki kanun önünde eşitlik ilkesinin aile hayatına da yansıması.\n' +
      '- **Çağdaşlaşma ve güven:** Kapitülasyonlar kalktıktan sonra yabancılar dahil herkese uygulanabilecek çağdaş kanunlara sahip olmak.\n\n' +
      'Medeni Kanun’un gerekçesini yazan Adliye Vekili Mahmut Esat Bozkurt, dinî kuralların değişmediğini, oysa hayatın ve ihtiyaçların hızla değiştiğini vurgulamış; kanunların toplumun ihtiyaçlarına göre yapılması gerektiğini savunmuştu.',
  },
  comparison: {
    title: 'Üç eğitim inkılabı: sorun, çözüm, sonuç',
    columns: ['Tevhid-i Tedrisat (1924)', 'Harf İnkılabı ve Millet Mektepleri (1928–1929)', 'Üniversite Reformu (1933)'],
    rows: [
      { label: 'Sorun', values: ['Farklı okullar farklı amaçlarla, farklı programlarla öğrenci yetiştiriyordu.', 'Arap harfleriyle Türkçe okuyup yazmayı öğrenmek zordu; okuma yazma bilen azdı.', 'Darülfünun çağdaş bilimsel araştırma ve öğretimde yetersiz görülüyordu.'] },
      { label: 'Çözüm', values: ['Bütün okullar Maarif Vekâleti’ne bağlandı.', 'Latin esasına dayanan Türk harfleri kabul edildi; yetişkinler için Millet Mektepleri açıldı.', 'Darülfünun kaldırıldı; yabancı bilim insanlarının da katılımıyla İstanbul Üniversitesi kuruldu.'] },
      { label: 'Sonuç', values: ['Eğitimde birlik; laik ve millî eğitimin temeli.', 'Okuma yazma yaygınlaştı; yazı ile konuşma dili birbirine yaklaştı.', 'Bilimsel araştırma ve yükseköğretim yenilendi.'] },
      { label: 'İlgili ilke', values: ['Laiklik, Milliyetçilik', 'Milliyetçilik, Halkçılık, İnkılapçılık', 'İnkılapçılık, Laiklik'] },
    ],
    insight:
      'Asıl bağlantı: Üç inkılap bir merdivenin basamakları gibidir. Önce okullar birleşti, sonra herkes okumayı öğrendi, en sonunda bilim üretecek üniversite kuruldu.',
  },
  traps: [
    {
      title: 'Medeni Kanun’un dinî nikâhı yasakladığını sanmak',
      wrong: 'Medeni Kanun ile dinî nikâh tamamen yasaklandı.',
      right: 'Medeni Kanun resmî nikâhı zorunlu kıldı. 110. maddeye göre dinî tören ancak evlenme kâğıdı gösterildikten sonra yapılabilir; yani dinî tören yasaklanmadı, resmî nikâhtan sonraya bırakıldı.',
      body: 'Maddede evliliğin geçerliliğinin dinî törene bağlı olmadığı da yazar.',
    },
    {
      title: 'Harf İnkılabını dil inkılabıyla karıştırmak',
      wrong: 'Harf İnkılabı ile Türkçeden yabancı kelimeler çıkarıldı.',
      right: 'Harf İnkılabı yazıda kullanılan harfleri değiştirdi. Dili araştırma ve sadeleştirme çalışmaları 1932’de kurulan Türk Dili Tetkik Cemiyeti (Türk Dil Kurumu) ile yürütüldü.',
      body: '“Harf” yazının şeklidir; “dil” ise sözcükler ve kurallardır.',
    },
    {
      title: 'Tevhid-i Tedrisat’ın din eğitimini tamamen kaldırdığını sanmak',
      wrong: 'Tevhid-i Tedrisat Kanunu ile din eğitimi tamamen yasaklandı.',
      right: 'Kanunun 4. maddesine göre Maarif Vekâleti, din uzmanları yetiştirmek için Darülfünun’da bir İlahiyat fakültesi, imam ve hatip yetiştirmek için de ayrı okullar açacaktı.',
      body: 'Kanunun amacı din eğitimini kaldırmak değil, bütün eğitimi tek bir devlet kurumunun denetimine almaktı.',
    },
    {
      title: 'Millet Mektepleri’ni çocuk okulu sanmak',
      wrong: 'Millet Mektepleri, ilkokul çağındaki çocuklar için açılan yeni okullardı.',
      right: 'Millet Mektepleri, yeni harflerle okuma yazma öğretmek için yetişkinlere açılan kurslardı.',
      body: 'Çocuklar yeni harfleri zaten okullarda öğreniyordu; asıl sorun okul çağını geçmiş milyonlarca yetişkindi.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'İnkılapları hazırlayan ve yürütenler',
    lead: 'Kanunları kim hazırladı, harfleri kim öğretti, kurumları kim kurdu?',
    intro: 'Kartlarda her kişinin bu inkılaplardaki görevini görürsün.',
    figures: [
      {
        name: 'Mustafa Kemal Atatürk',
        period: '1924–1938 · Cumhurbaşkanı',
        position: 'Cumhurbaşkanı; Millet Mektepleri teşkilatının başöğretmeni',
        contribution: 'Yeni harfleri 9 Ağustos 1928’de Sarayburnu’nda halka tanıttı; Millet Mektepleri teşkilatının başı ve başöğretmeni kabul edildi. Türk Tarih ve Türk Dil kurumlarının kurulmasını sağladı.',
        connections: ['Harf İnkılabı', 'Millet Mektepleri', 'Türk Tarih Kurumu', 'Türk Dil Kurumu'],
        significance: 'Eğitim ve kültür inkılaplarını bizzat yürüten liderdir.',
      },
      {
        name: 'Mahmut Esat Bozkurt',
        period: '1924–1930 · Adliye Vekili',
        position: 'Adliye (Adalet) Vekili',
        contribution: 'Türk Medeni Kanunu’nun gerekçesini yazdı; hukuk inkılabının hazırlanmasında görev aldı.',
        connections: ['Türk Medeni Kanunu'],
        significance: 'Medeni Kanun’un neden gerekli olduğunu anlatan metnin yazarıdır.',
      },
      {
        name: 'Mustafa Necati',
        period: '1925–1929 · Maarif Vekili',
        position: 'Maarif (Eğitim) Vekili',
        contribution: 'Harf İnkılabı ve Millet Mektepleri’nin hazırlanmasında önemli rol üstlendi. Millet Mektepleri’nin açıldığı gün, 1 Ocak 1929’da hayatını kaybetti; açılış ertelenmedi.',
        connections: ['Harf İnkılabı', 'Millet Mektepleri'],
        significance: 'Okuma yazma seferberliğinin yöneticisidir.',
      },
      {
        name: 'Sâmih Rif’at',
        period: '1932 · Milletvekili, edebiyatçı',
        position: 'Türk Dili Tetkik Cemiyeti’nin ilk başkanı',
        contribution: 'Ruşen Eşref, Celâl Sâhir ve Yakup Kadri ile birlikte Türk Dili Tetkik Cemiyeti’nin kurucuları arasında yer aldı.',
        connections: ['Türk Dil Kurumu'],
        significance: 'Dil çalışmalarının ilk kurumsal önderidir.',
      },
      {
        name: 'Albert Malche',
        period: '1932 · İsviçreli eğitim bilimci',
        position: 'Darülfünun hakkında rapor hazırlayan uzman',
        contribution: 'Türk hükümetinin davetiyle Darülfünun’u inceledi ve bir rapor hazırladı; bu rapor 1933 Üniversite Reformu’nun hazırlığında kullanıldı.',
        connections: ['1933 Üniversite Reformu'],
        significance: 'Reformun bilimsel bir incelemeye dayandığını gösterir.',
      },
    ],
    takeaway:
      'İnkılaplar tek bir kişinin emriyle değil; hukukçuların, eğitimcilerin, edebiyatçıların, öğretmenlerin ve milyonlarca öğrencinin emeğiyle hayata geçti.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-egitim-kultur`,
      title: 'Eğitim ve kültür: harften üniversiteye',
      lead: 'İTA.8.4.4 beş kurumu ve inkılabı adıyla sayar; ayrıca üniversite reformu, sanat ve spor üzerinden Atatürk’ün bilime ve kalkınmaya verdiği önemin vurgulanmasını ister.',
      blocks: [
        {
          id: `${SLUG}-egitim-kultur-anlatim`,
          type: 'prose',
          body:
            '**Harf İnkılabı (1 Kasım 1928).** Bir Dil Encümeni yeni alfabeyi hazırladı. Mustafa Kemal 9 Ağustos 1928’de İstanbul’da Sarayburnu’nda halka yeni harfleri tanıttı; kendisi yurdun birçok yerini dolaşarak yeni harfleri öğretti. 1 Kasım 1928’de kabul edilen kanunla Arap harfleri yerine Latin esasına dayanan Türk harfleri kabul edildi. Devlet dairelerinin en geç 1 Ocak 1929’a kadar yeni harflere geçmesi, gazete ve dergilerin Aralık 1928’den, kitapların 1929 başından itibaren yeni harflerle basılması zorunlu oldu. Yeni harfler Türkçenin seslerine uygundu; bu yüzden okuma yazma öğrenmek kolaylaştı.\n\n' +
            '**Millet Mektepleri (1 Ocak 1929).** Okul çağını geçmiş yetişkinlere yeni harflerle okuma yazma öğretmek için açıldı. Bütün Türk kadın ve erkekleri bu teşkilatın üyesi, Mustafa Kemal ise başı ve başöğretmeni kabul edildi. Açılış günü Maarif Vekili Mustafa Necati hayatını kaybetti; buna rağmen açılış ertelenmedi.\n\n' +
            '**Türk Tarih Kurumu (1931) ve Türk Dil Kurumu (1932).** Türk Tarihi Tetkik Cemiyeti 15 Nisan 1931’de Türk tarihini bilimsel yöntemlerle, birinci elden kaynaklara dayanarak araştırmak için kuruldu; 1935’te Türk Tarih Kurumu adını aldı. Türk Dili Tetkik Cemiyeti ise 12 Temmuz 1932’de Türk dilini araştırmak ve geliştirmek amacıyla kuruldu. Bu iki kurum millî tarih bilincinin ve millî kültürün geliştirilmesi temel esaslarına hizmet eder.\n\n' +
            '**1933 Üniversite Reformu.** İsviçreli eğitim bilimci Albert Malche’nin Darülfünun hakkındaki raporundan sonra 31 Mayıs 1933’te çıkan kanunla Darülfünun 31 Temmuz 1933’te kaldırıldı ve 1 Ağustos 1933’te İstanbul Üniversitesi kuruldu. Kanun yabancı uzmanların görevlendirilmesine de imkân verdi. Aynı yıllarda Almanya’daki baskı rejiminden ayrılmak zorunda kalan çok sayıda bilim insanı Türkiye’ye geldi ve yeni üniversitede ders verdi. Reform, Atatürk’ün kalkınmanın ancak bilimle mümkün olduğu düşüncesinin somut bir örneğidir.\n\n' +
            '**Güzel sanatlar ve spor.** Müzik öğretmeni yetiştirmek için 1924’te Ankara’da Musiki Muallim Mektebi kuruldu ve 1936’da Ankara Devlet Konservatuvarı’na dönüştü. 1932’de açılan Halkevleri, müzik, tiyatro, spor ve kurslarla sanatı ve kültürü halka yaymaya çalıştı. Sporda ise 29 Haziran 1938’de kabul edilen Beden Terbiyesi Kanunu ile Beden Terbiyesi Genel Müdürlüğü kuruldu. Bu kurumlar, Atatürk’ün sanatı ve sporu sağlıklı, üretken ve çağdaş bir toplumun parçası olarak gördüğünü gösterir.',
        },
        {
          id: `${SLUG}-egitim-kultur-tablo`,
          type: 'table',
          interactive: true,
          title: 'Eğitim ve kültür kurumları: ne zaman, ne amaçla?',
          columns: ['Kurum ya da inkılap', 'Tarih', 'Amaç', 'İlgili temel esas'],
          rows: [
            ['Tevhid-i Tedrisat Kanunu', '3 Mart 1924', 'Bütün okulları tek bir devlet kurumuna bağlamak', 'Millî birlik ve beraberlik'],
            ['Harf İnkılabı', '1 Kasım 1928', 'Okuma yazmayı kolaylaştırmak, yazıyı Türkçenin seslerine uydurmak', 'Çağdaş uygarlık düzeyine ulaşma, millî kültür'],
            ['Millet Mektepleri', '1 Ocak 1929', 'Yetişkinlere okuma yazma öğretmek', 'Egemenliğin millete ait olması (bilinçli vatandaş)'],
            ['Türk Tarih Kurumu', '15 Nisan 1931', 'Türk tarihini bilimsel yöntemlerle araştırmak', 'Millî tarih bilinci'],
            ['Türk Dil Kurumu', '12 Temmuz 1932', 'Türk dilini araştırmak ve geliştirmek', 'Millî kültürün geliştirilmesi'],
            ['Halkevleri', '19 Şubat 1932', 'Kültürü, sanatı ve eğitimi halka yaymak', 'Millî kültür, millî birlik'],
            ['İstanbul Üniversitesi', '1 Ağustos 1933', 'Çağdaş bilimsel araştırma ve yükseköğretim', 'Çağdaş uygarlık düzeyinin üzerine çıkma'],
            ['Ankara Devlet Konservatuvarı', '1936', 'Müzik ve sahne sanatlarında eğitim', 'Millî kültür, çağdaş uygarlık'],
            ['Beden Terbiyesi Kanunu', '29 Haziran 1938', 'Beden eğitimini ve sporu düzenlemek', 'Çağdaş uygarlık; sağlıklı toplum'],
          ],
          caption:
            'Tablodaki “ilgili temel esas” sütunu, bir önceki derste öğrendiğin temel esaslarla bağlantı kurmana yardım eder. Bir kurum birden fazla esasa hizmet edebilir.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste dört kanundan maddeler okuyacaksın: Tevhid-i Tedrisat, Medeni Kanun, Harf Kanunu ve Darülfünun Kanunu. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Kanun metinleri TBMM kanun arşivindeki özgün metinlerdir. Medeni Kanun’un maddeleri 1926’daki ilk hâlinden alınmıştır.\n\n' +
      'İlk dört metin birebir alıntıdır. Beşinci metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Tevhid-i Tedrisat Kanunu',
        kunye: 'Tevhidi tedrisat kanunu, Kanun no 430, 3 Mart 1924, 1., 2. ve 4. maddeler. Metin: TBMM kanun arşivi.',
        nitelik: 'Birebir alıntı.',
        metin:
          'BİRİNCİ MADDE — Türkiye dahilindeki bütün müessesatı ilmiye ve tedrisiye Maarif vekâletine merbuttur. İKİNCİ MADDE — Şeriye ve Evkaf vekâleti veyahut hususi vakıflar tarafından idare olunan bilcümle medrese ve mektepler Maarif vekâletine devir ve raptedilmiştir. … DÖRDÜNCÜ MADDE — Maarif vekâleti yüksek diniyat mütehassısları yetiştirmek üzere Darülfünunda bir İlahiyat fakültesi tesis ve imamet ve hitabet gibi hidematı diniyenin ifası vazifesiyle mükellef memurların yetişmesi için de ayrı mektepler küşat edecektir.',
        soru: 'Kanun eğitimde neyi değiştiriyor? 4. madde, kanunun din eğitimine bakışı hakkında ne söylüyor?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Müessesat-ı ilmiye ve tedrisiye”: bilim ve eğitim kurumları. “Merbut”: bağlı. “Devir ve rapt”: devretme ve bağlama. “Diniyat mütehassısı”: din bilimleri uzmanı. “Hidemat-ı diniye”: din hizmetleri. “Küşat etmek”: açmak.' },
          { title: 'Değişimi bul', body: 'Medreseler dahil bütün okullar tek bir kuruma, Maarif Vekâleti’ne bağlanıyor.' },
          { title: '4. maddeyi yorumla', body: 'Din eğitimi kaldırılmıyor; din uzmanları üniversitede, din görevlileri ayrı okullarda, devletin denetiminde yetiştirilecek.' },
        ],
        cevap: 'Kanun bütün okulları Maarif Vekâleti’ne bağlayarak eğitimde birlik sağlar. 4. madde, din eğitiminin kaldırılmadığını; üniversitede bir İlahiyat fakültesi ve din görevlileri için ayrı okullarla devletin denetimine alındığını gösterir.',
        cikarim: 'Bir kanunun bütün maddelerini okumak, yaygın yanlış anlamaları düzeltir. “Birleştirme” ile “kaldırma” aynı şey değildir.',
      },
      {
        tur: 'birincil',
        baslik: 'Türk Medeni Kanunu’ndan maddeler (1926)',
        kunye: 'Türk Kanunu Medenisi, Kanun no 743, kabul 17 Şubat 1926; 93., 110. ve 439. maddeler (ilk hâli). Metin: TBMM kanun arşivi.',
        nitelik: 'Birebir alıntı.',
        metin:
          'DOKSAN ÜÇÜNCÜ MADDE — Tekrar evlenmek isteyen kimse, vefat veya boşanma ile yahut butlan hükmü ile evliliğinin zail olduğunu ispata mecburdur. … YÜZ ONUNCU MADDE — Evlendirme memuru, merasimin hitamı üzerine derhal karı ve kocaya bir evlenme kâğıdı verir. Evlenme kâğıdı ibraz edilmeden, evlenmenin dinî merasimi yapılamaz. … DÖRT YÜZ OTUZ DOKUZUNCU MADDE — Birinci derecede mirasçılar, müteveffanın füruudur. Çocuklar, müsavat üzere mirasçıdırlar.',
        soru: 'Bu üç madde aile hayatında ve kadının statüsünde hangi değişiklikleri getiriyor?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Butlan”: geçersizlik. “Zail olmak”: sona ermek. “İspata mecbur”: kanıtlamak zorunda. “İbraz”: gösterme. “Müteveffa”: ölen kişi. “Füru”: çocuklar ve torunlar. “Müsavat üzere”: eşit olarak.' },
          { title: '93. madde', body: 'Önceki evliliği sona ermeden yeniden evlenilemez → tek eşlilik. Bu, kadının aile içindeki konumunu güvenceye alır.' },
          { title: '110. madde', body: 'Önce resmî nikâh, sonra isteyene dinî tören → evlilik devletin kaydına ve korumasına girer.' },
          { title: '439. madde', body: 'Çocuklar mirastan eşit pay alır → kız ve erkek çocuk arasındaki eşitsizlik kalkar.' },
        ],
        cevap: '93. madde tek eşliliği, 110. madde resmî nikâhın önceliğini, 439. madde ise mirasta kız ve erkek çocukların eşitliğini getirir. Bu değişiklikler kadının aile içindeki ve toplumdaki konumunu hukuken güçlendirir.',
        cikarim: 'Kanun maddeleri, toplumsal değişimin hukuki kanıtıdır. Program Medeni Kanun’un “aile yapısında ve kadının toplumsal statüsünde” yaptığı değişimi sorar; bu maddeler o değişimin somut örnekleridir.',
      },
      {
        tur: 'birincil',
        baslik: 'Türk harflerinin kabulü hakkında kanun',
        kunye: 'Türk harflerinin kabul ve tatbiki hakkında kanun, Kanun no 1353, 1 Kasım 1928 (Resmî Gazete 3 Kasım 1928); 1. ve 9. maddeler. Metin: TBMM kanun arşivi.',
        nitelik: 'Birebir alıntı.',
        metin:
          'BİRİNCİ MADDE — Şimdiye kadar türkçe yazmak için kullanılan arap harfleri yerine Latin esasından alınan ve merbut cetvelde şekilleri gösterilen harfler (türk harfleri) unvanı ve hukuku ile kabul edilmiştir. … DOKUZUNCU MADDE — Bütün mekteplerin türkçe yapılan tedrisatında türk harfleri kullanılır. Eski harflerle matbu kitaplarla tedrisat icrası memnudur.',
        soru: 'Kanun yeni harflere hangi adı veriyor? 9. madde eğitimi nasıl etkiler?',
        adimlar: [
          { title: 'Sözcükleri çöz', body: '“Merbut cetvel”: ekli çizelge. “Unvan ve hukuk”: ad ve haklar. “Tedrisat”: öğretim. “Matbu”: basılı. “Memnu”: yasak.' },
          { title: 'Adı bul', body: 'Harfler Latin esasından alınmış ama “Türk harfleri” adıyla kabul edilmiş.' },
          { title: '9. maddeyi yorumla', body: 'Bütün okullarda Türkçe öğretim yeni harflerle yapılacak; eski harfli kitaplarla ders yasak. Böylece yeni nesiller doğrudan yeni harflerle yetişecek.' },
        ],
        cevap: 'Kanun yeni harflere “Türk harfleri” adını verir. 9. madde, bütün okullarda Türkçe öğretimin yeni harflerle yapılmasını zorunlu kılarak yeni nesillerin yeni yazıyla yetişmesini sağlar.',
        cikarim: 'Harflerin “Latin harfleri” değil “Türk harfleri” diye adlandırılması, inkılabın millî bir kimlikle sunulduğunu gösterir. Bu, Milliyetçilik ilkesiyle ilişkilendirilebilir.',
      },
      {
        tur: 'birincil',
        baslik: 'Darülfünun’un kaldırılması ve İstanbul Üniversitesi',
        kunye: 'İstanbul darülfünununun ilgasına ve Maarif vekâletince yeni bir Üniversite kurulmasına dair kanun, Kanun no 2252, kabul 31 Mayıs 1933; 1. ve 2. maddeler. Metin: TBMM kanun arşivi.',
        nitelik: 'Birebir alıntı.',
        metin:
          'BİRİNCİ MADDE — İstanbul darülfünunu ve ona bağlı bütün müesseseler kadro ve teşkilâtlarile beraber 31 temmuz 1933 tarihinden itibaren mülgadır. İKİNCİ MADDE — Maarif vekilliği 1 ağustos 1933 tarihinden itibaren İstanbulda (İstanbul üniversitesi) adı ile yeni bir müessese kurmağa memurdur.',
        soru: 'Kanun Darülfünun’u neden “kadro ve teşkilatlarıyla beraber” kaldırıyor olabilir? Bu, reformun niteliği hakkında ne söyler?',
        adimlar: [
          { title: 'Sözcükleri çöz', body: '“Mülga”: kaldırılmış. “Kadro”: çalışanların listesi. “Teşkilat”: örgüt yapısı. “Memur olmak”: görevli olmak.' },
          { title: 'Maddeyi yorumla', body: 'Yalnız adı değişmiyor; kurum bütün kadrosu ve yapısıyla kaldırılıyor ve ertesi gün yeni bir kurum kuruluyor.' },
          { title: 'Niteliği çıkar', body: 'Bu, eski kurumu onarmak yerine baştan yeni bir üniversite kurmayı seçen köklü bir reformdur.' },
        ],
        cevap: 'Kanun Darülfünun’u kadro ve teşkilatlarıyla birlikte kaldırıyor, çünkü amaç eski kurumu küçük değişikliklerle onarmak değil, çağdaş bilim anlayışına uygun yepyeni bir üniversite kurmaktı. Bu, reformun köklü bir yenilenme olduğunu gösterir.',
        cikarim: 'Bir kurumun “düzeltilmesi” ile “kaldırılıp yeniden kurulması” farklı şeylerdir. 1933 reformu ikinci yolu seçmiştir; bu da İnkılapçılık ilkesinin bir örneğidir.',
      },
      {
        tur: 'ikincil',
        baslik: 'Harf İnkılabı üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Harf İnkılabı 1 Kasım 1928’de kabul edildi ve 1 Ocak 1929’da Millet Mektepleri açıldı. Yeni harfler Türkçenin seslerine uygun olduğu için okuma yazma öğrenmek kolaylaştı. Harf İnkılabı, Cumhuriyet’in en başarılı inkılabıdır.',
        soru: 'Metindeki olguları ve yorumları ayır. Son cümle nasıl bir yargıdır?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Sonradan yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguları ayır', body: 'Kanunun 1 Kasım 1928’de kabul edilmesi ve Millet Mektepleri’nin 1 Ocak 1929’da açılması olgudur.' },
          { title: 'Gerekçeli yorumu ayır', body: '“Türkçenin seslerine uygun olduğu için okuma yazma kolaylaştı” gerekçesi olan ve kanıtla desteklenebilecek bir yorumdur.' },
          { title: 'Son cümleyi değerlendir', body: '“En başarılı inkılap” bir karşılaştırma yargısıdır; hangi ölçüte göre “en başarılı” olduğu belirtilmemiştir. Bu yüzden kişisel bir değerlendirmedir.' },
        ],
        cevap: 'Olgular: kanunun ve Millet Mektepleri’nin tarihleri. Yorumlar: yeni harflerin okuma yazmayı kolaylaştırması (gerekçeli yorum) ve Harf İnkılabı’nın en başarılı inkılap olması (ölçütü belirtilmemiş kişisel yargı).',
        cikarim: 'Yorumların hepsi aynı değerde değildir. Gerekçesi olan bir yorum ile ölçütü belirtilmemiş bir “en” yargısını ayırt etmeyi öğren.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Medeni Kanun’un etkisini açıkla',
      prompt: 'Bir aile düşün: Babaları öldüğünde bir kız ve bir erkek çocuk mirasçı oluyor. 1926 öncesi ve sonrası bu iki çocuğun mirastan aldığı pay nasıl değişti?',
      steps: [
        { title: 'Önceki düzen', body: 'Kız çocuğunun payı erkek çocuğun payının yarısıydı.' },
        { title: 'Medeni Kanun', body: '439. maddeye göre çocuklar eşit olarak mirasçıdır.' },
        { title: 'Sonuç', body: 'Kız ve erkek çocuk aynı payı alır.' },
      ],
      answer: '1926’dan sonra kız ve erkek çocuk mirastan eşit pay alır; bu, kadının ekonomik ve toplumsal konumunu güçlendiren bir değişikliktir.',
      takeaway: 'Kadının statüsüyle ilgili sorularda evlilik, boşanma ve miras konularındaki değişiklikleri hatırla.',
    },
    {
      title: 'İnkılapları sıraya koy ve ilişkilendir',
      prompt: 'Tevhid-i Tedrisat, Harf İnkılabı ve Millet Mektepleri’ni tarih sırasına koy ve birinin ötekini nasıl kolaylaştırdığını açıkla.',
      steps: [
        { title: 'Sıra', body: 'Tevhid-i Tedrisat (1924) → Harf İnkılabı (1928) → Millet Mektepleri (1929).' },
        { title: 'Bağlantı 1', body: 'Bütün okullar tek kuruma bağlı olduğu için yeni harfler bütün okullarda aynı anda öğretilebildi.' },
        { title: 'Bağlantı 2', body: 'Yeni harfler kolay öğrenilebildiği için Millet Mektepleri’nde yetişkinler kısa sürede okuma yazma öğrenebildi.' },
      ],
      answer: 'Tevhid-i Tedrisat eğitimi birleştirdi; bu birlik yeni harflerin her yerde öğretilmesini, yeni harfler de Millet Mektepleri’nde yetişkinlerin hızla okuma yazma öğrenmesini kolaylaştırdı.',
      takeaway: 'Sıralama sorularında yalnız tarihleri değil, olaylar arasındaki “kolaylaştırma” ilişkisini de düşün.',
    },
    {
      title: 'Kurumu temel esasla eşleştir',
      prompt: 'Türk Tarih Kurumu, Türk Dil Kurumu ve İstanbul Üniversitesi’ni en çok hizmet ettikleri temel esasla eşleştir.',
      steps: [
        { title: 'Türk Tarih Kurumu', body: 'Tarihi bilimsel yöntemle araştırmak → Millî tarih bilinci.' },
        { title: 'Türk Dil Kurumu', body: 'Dili araştırmak ve geliştirmek → Millî kültürün geliştirilmesi.' },
        { title: 'İstanbul Üniversitesi', body: 'Çağdaş bilimsel araştırma → Çağdaş uygarlık düzeyinin üzerine çıkma ideali.' },
      ],
      answer: 'Türk Tarih Kurumu–millî tarih bilinci · Türk Dil Kurumu–millî kültür · İstanbul Üniversitesi–çağdaş uygarlık ideali.',
      takeaway: 'Kurumların adındaki anahtar sözcüğü (tarih, dil, bilim) temel esasla eşleştir.',
    },
  ],
  questionClue: {
    concept: 'Soruda hangi inkılaptan söz edildiğini nasıl anlarım?',
    statement: 'Soru bir kanun maddesi, bir kurumun amacı ya da bir toplumsal değişim verip inkılabı sorabilir.',
    clues: [
      '“Bütün okullar Maarif Vekâleti’ne”, “medreseler” → Tevhid-i Tedrisat',
      '“Tek eşlilik”, “resmî nikâh”, “mirasta eşitlik” → Türk Medeni Kanunu',
      '“Latin esasından alınan harfler”, “Türk harfleri” → Harf İnkılabı',
      '“Yetişkinlere okuma yazma”, “başöğretmen” → Millet Mektepleri',
      '“Darülfünun kaldırıldı”, “yabancı bilim insanları” → 1933 Üniversite Reformu',
    ],
    reasoning: 'Önce değişimin hangi alanda olduğunu bul: hukuk mu, okul mu, yazı mı, bilim mi? Sonra tarihine ve kilit sözcüğüne bak.',
    boundary: 'Dikkat: Harf İnkılabı yazıyı değiştirdi; dili araştırma ve geliştirme çalışmaları Türk Dil Kurumu ile yürütüldü.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'İTA.8.4.3 ve İTA.8.4.4 “kavrar” düzeyinde kazanımlardır. Sorular çoğunlukla bir kanun maddesi, bir kurumun kuruluş amacı ya da bir aile ve toplum örneği verip değişimi sorabilir. Aşağıdaki kalıplar kazanımlarla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Medeni Kanun’un aile ve kadın üzerindeki etkisini bir örnek üzerinden açıklama',
      'Eğitim inkılaplarını amaçlarıyla eşleştirme',
      'İnkılapları kronolojik sıraya koyma ve aralarındaki ilişkiyi kurma',
      'Kurumları temel esaslarla ve ilkelerle ilişkilendirme',
    ],
  },
  checkpoints: [
    {
      prompt: 'Medeni Kanun’un 110. maddesi hem resmî nikâhı zorunlu kılıyor hem de dinî töreni yasaklamıyor. Bu iki yön laiklikle nasıl ilişkilidir?',
      hint: 'Laiklik din ile devlet işlerinin ayrılmasıdır; inanç özgürlüğü de onun parçasıdır.',
      answer: 'Evliliğin devletin memuru önünde kıyılması ve kayda geçmesi, aile hukukunun dinî kurallara değil devletin kanunlarına dayanması demektir. Dinî törenin yasaklanmaması ise isteyenin inancına göre tören yapabilmesi, yani inanç özgürlüğüdür. İkisi birlikte laikliğin iki yönünü gösterir.',
    },
    {
      prompt: 'Harf İnkılabı neden yalnız yazının değil, eğitimin de inkılabı sayılır?',
      answer: 'Çünkü yeni harfler Türkçenin seslerine uygun olduğu için okuma yazma öğrenmeyi kolaylaştırdı; bu da Millet Mektepleri’yle birlikte eğitimin geniş halk kitlelerine yayılmasını sağladı.',
    },
    {
      prompt: '1933 Üniversite Reformu’ndan Atatürk’ün kalkınmaya bakışı hakkında hangi çıkarımı yapabilirsin?',
      answer: 'Atatürk kalkınmanın yalnız fabrika ve yolla değil, bilimsel araştırma ve bilim insanı yetiştirmekle mümkün olduğunu düşünüyordu. Eski kurumun baştan yeniden kurulması ve yabancı bilim insanlarından yararlanılması, bilime verilen önemi gösterir.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.4.3, hukuk alanındaki gelişmelerin toplumsal hayata yansımalarını ister; açıklaması Medeni Kanun’un aile yapısında ve kadının toplumsal statüsünde yaptığı değişimi vurgular. İTA.8.4.4 ise Tevhid-i Tedrisat, Harf İnkılabı, Millet Mektepleri, Türk Tarih ve Türk Dil kurumlarını, 1933 Üniversite Reformu’nu ve sanat ile sporu kapsar. Bu kazanımlara dayanan bir soru bir kanun maddesi ya da bir örnek durum verip değişimi sorabilir.',
    measures: [
      'Hukuk düzenlemelerinin gerekçelerini açıklama',
      'Medeni Kanun’un aileye ve kadına etkisini açıklama',
      'Eğitim ve kültür inkılaplarının amaçlarını ve sonuçlarını açıklama',
      'Bilim, sanat ve spor alanındaki kurumları tanıma',
    ],
  },
  simulation: {
    title: 'Mini LGS: Bir evlilik, bir kanun',
    passage:
      '1926’da kabul edilen Türk Medeni Kanunu’na göre evlilik, iki reşit şahit önünde belediye ya da muhtarlıkta yetkili memur tarafından kıyılır. Memur, törenin sonunda eşlere bir evlenme kâğıdı verir. Evlenme kâğıdı gösterilmeden dinî tören yapılamaz; evliliğin geçerli olması da dinî törene bağlı değildir.',
    question: 'Bu düzenlemeyle ilgili aşağıdakilerden hangisi söylenebilir?',
    options: [
      { text: 'Evlilik devletin kaydına alınarak hukuki güvenceye kavuşturulmuştur.', explanation: 'Doğru. Evliliğin memur önünde kıyılması ve evlenme kâğıdı verilmesi, evliliğin devletin kaydına ve korumasına girmesi demektir.' },
      { text: 'Dinî tören tamamen yasaklanmıştır.', explanation: 'Metne göre dinî tören yasak değildir; yalnız evlenme kâğıdı gösterildikten sonra yapılabilir.' },
      { text: 'Evlilik yalnız dinî törenle geçerli olmaktadır.', explanation: 'Metin tam tersini söyler: Evliliğin geçerliliği dinî törene bağlı değildir.' },
      { text: 'Evlenmek için şahide gerek kalmamıştır.', explanation: 'Metin iki reşit şahidin gerekli olduğunu açıkça söyler.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “söylenebilir” diyor. Metindeki anahtar bilgi: memur, evlenme kâğıdı ve kayıt. Bunlar hukuki güvenceyi gösterir.',
    critical_point: 'İkinci seçenek sık yapılan bir yanlıştır. Metinde dinî törenin “yasak” değil, “sonraya bırakılmış” olduğu yazıyor.',
    takeaway: 'Metindeki koşul ifadelerine (“… gösterilmeden yapılamaz”) dikkat et: Koşul, yasak anlamına gelmez.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Hukuk, eğitim ve kültür',
    range: '1924–1938',
    body:
      '3 Mart 1924’te Tevhid-i Tedrisat Kanunu ile bütün okullar Maarif Vekâleti’ne bağlandı; 8 Nisan 1924’te şer’iye mahkemeleri kaldırılarak yargı birliği sağlandı. 1926’da Türk Medeni Kanunu (17 Şubat; yürürlük 4 Ekim), Ceza, Borçlar ve Ticaret kanunları kabul edildi. Medeni Kanun tek eşliliği, resmî nikâhı, mahkeme kararıyla boşanmayı ve mirasta eşitliği getirerek aileyi ve kadının statüsünü köklü biçimde değiştirdi. 1 Kasım 1928’de Türk harfleri kabul edildi; 1 Ocak 1929’da açılan Millet Mektepleri’nde yetişkinlere okuma yazma öğretildi. 1931’de Türk Tarihi Tetkik Cemiyeti, 1932’de Türk Dili Tetkik Cemiyeti ve Halkevleri kuruldu. 1933 Üniversite Reformu ile Darülfünun kaldırılıp İstanbul Üniversitesi kuruldu. Musiki Muallim Mektebi 1936’da Devlet Konservatuvarı’na dönüştü; 1938’de Beden Terbiyesi Kanunu kabul edildi.',
    turning_points: [
      '3 Mart 1924 · Tevhid-i Tedrisat',
      '17 Şubat 1926 · Türk Medeni Kanunu',
      '1 Kasım 1928 · Harf İnkılabı',
      '1 Ocak 1929 · Millet Mektepleri',
      '1931–1932 · Türk Tarih ve Türk Dil kurumları',
      '1 Ağustos 1933 · İstanbul Üniversitesi',
    ],
  },
  summary: [
    '**Hukuk:** Şer’iye mahkemeleri kaldırıldı (1924); Medeni (17 Şubat 1926), Ceza (1 Mart), Borçlar (22 Nisan), Ticaret (29 Mayıs 1926) kanunları. Gerekçe: hukuk birliği, laik hukuk, eşitlik, çağdaşlaşma.',
    '**Medeni Kanun ve kadın:** Tek eşlilik (m. 93), resmî nikâh (m. 108, 110), mahkeme kararıyla boşanma ve iki eşe dava hakkı, mirasta eşitlik (m. 439).',
    '**Eğitim:** Tevhid-i Tedrisat (3 Mart 1924) → Harf İnkılabı (1 Kasım 1928) → Millet Mektepleri (1 Ocak 1929; Atatürk başöğretmen).',
    '**Kültür ve bilim:** Türk Tarihi Tetkik Cemiyeti (15 Nisan 1931), Türk Dili Tetkik Cemiyeti (12 Temmuz 1932), 1933 Üniversite Reformu (İstanbul Üniversitesi, 1 Ağustos 1933).',
    '**Sanat ve spor:** Musiki Muallim Mektebi (1924) → Devlet Konservatuvarı (1936); Halkevleri (1932); Beden Terbiyesi Kanunu (1938).',
  ],
  quizzes: [
    {
      question: 'Tevhid-i Tedrisat Kanunu’nun temel amacı nedir?',
      options: ['Bütün okulları tek bir devlet kurumuna bağlamak', 'Din eğitimini tamamen kaldırmak', 'Yeni harfleri kabul etmek', 'Üniversiteyi yeniden kurmak'],
      answer_index: 0,
      explanation: 'Kanunun 1. maddesine göre bütün bilim ve eğitim kurumları Maarif Vekâleti’ne bağlandı. Din eğitimi kaldırılmadı; 4. madde İlahiyat fakültesi ve ayrı okullar açılmasını öngördü.',
    },
    {
      question: 'Türk Medeni Kanunu ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['Mirasta kız ve erkek çocuklar eşit pay alır.', 'Dinî nikâh tamamen yasaklanmıştır.', 'Boşanma yalnız erkeğin isteğine bağlanmıştır.', 'Birden fazla eşle evlilik serbest bırakılmıştır.'],
      answer_index: 0,
      explanation: '439. maddeye göre çocuklar eşit olarak mirasçıdır. Dinî tören yasaklanmadı, boşanma mahkemeye bağlandı ve tek eşlilik getirildi.',
    },
    {
      question: 'Millet Mektepleri’nin açılış amacı aşağıdakilerden hangisidir?',
      options: ['Yetişkinlere yeni harflerle okuma yazma öğretmek', 'İlkokul çağındaki çocukları okutmak', 'Üniversite öğrencisi yetiştirmek', 'Din görevlisi yetiştirmek'],
      answer_index: 0,
      explanation: 'Millet Mektepleri, okul çağını geçmiş yetişkinlere yeni harflerle okuma yazma öğretmek için açılan kurslardır.',
    },
    {
      question: '“Türk tarihini bilimsel yöntemlerle ve birinci elden kaynaklarla araştırmak” amacıyla kurulan kurum hangisidir?',
      options: ['Türk Tarih Kurumu', 'Türk Dil Kurumu', 'Halkevleri', 'Musiki Muallim Mektebi'],
      answer_index: 0,
      explanation: 'Türk Tarihi Tetkik Cemiyeti 15 Nisan 1931’de bu amaçla kuruldu ve 1935’te Türk Tarih Kurumu adını aldı.',
    },
    {
      question: '1933 Üniversite Reformu en çok hangi amaçla ilişkilidir?',
      options: ['Bilimsel araştırmayı ve yükseköğretimi çağdaşlaştırmak', 'Okuma yazma oranını artırmak', 'Hukuk birliğini sağlamak', 'Sporu yaygınlaştırmak'],
      answer_index: 0,
      explanation: 'Reformla Darülfünun kaldırılıp çağdaş bilimsel araştırma yapacak İstanbul Üniversitesi kuruldu.',
    },
  ],
  next: ['Toplumsal ve Ekonomik Alanda İnkılaplar', 'Atatürk Döneminde Sağlık Çalışmaları'],
})

export default lesson
