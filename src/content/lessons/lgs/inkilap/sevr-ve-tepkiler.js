import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.2 Millî Uyanış · 7. ders
 * Kazanım : İTA.8.2.8
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   Bu kazanımın açıklaması yoktur.
 *
 * KAPSAM KARARI
 * "Değerlendirir" kazanımı olduğu için ders, Sevr'in maddelerini ezberletmek
 * yerine maddelerin Misakımillî ile karşılaştırılmasını ve tepkilerin
 * gerekçesini öne çıkarır. Maddeler TTK'nin yayımladığı resmî Türkçe metinden
 * (Nihat Erim, 1953) sadeleştirildi; 155. madde ve Mustafa Kemal'in Nutuk'taki
 * sözü birebir alıntılandı. Aynı gün İngiltere, Fransa ve İtalya arasında
 * imzalanan nüfuz bölgeleri antlaşması Sevr'in maddesi değildir; derste bu
 * ayrım açıkça söylenir.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 10.
 */

const SLUG = 'lgs-tarih-sevr-ve-tepkiler'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar',
  order: 7,
  title: 'Sevr Antlaşması ve Tepkiler: Kâğıt Üzerinde Kalan Bir Paylaşım',
  subtitle:
    'Sevr, Anadolu’yu paylaşan bir antlaşmaydı; ama onu uygulayacak bir güç bulunamadı. Türk milleti Sevr’e imzayla değil, Misakımillî ve silahla cevap verdi.',
  minutes: 44,
  kazanimlar: ['İTA.8.2.8'],
  kapsamNotu:
    'Maddeler Türk Tarih Kurumu’nun yayımladığı resmî metinden sadeleştirilmiştir; ordu sınırını belirleyen madde ve Mustafa Kemal’in Nutuk’taki sözü birebir alıntıdır. Aynı gün imzalanan nüfuz bölgeleri antlaşması Sevr’in maddesi değildir ve derste ayrı gösterilir.',
  prerequisites: [
    {
      topic: 'Misakımillî ve Büyük Millet Meclisi (önceki ders)',
      why: 'Sevr’i değerlendirmenin ölçüsü Misakımillî’dir; iki belgeyi karşılaştırmadan tepkilerin gerekçesi anlaşılmaz.',
    },
    {
      topic: 'Mondros Ateşkes Antlaşması',
      why: 'Mondros ateşkesti; Sevr ise bu ateşkesin ardından hazırlanan barış antlaşmasıydı.',
    },
  ],
  outcomes: [
    'Sevr Antlaşması’nın imzalanma koşullarını ve önemli maddelerini açıklayabileceksin.',
    'Sevr’i Misakımillî ile madde madde karşılaştırabileceksin.',
    'Mustafa Kemal’in, Büyük Millet Meclisi’nin ve Türk milletinin Sevr’e tepkisini değerlendirebileceksin.',
    'Sevr’in neden uygulanamadığını gerekçeleriyle açıklayabileceksin.',
    'Bir antlaşma maddesinden egemenlik ve bağımsızlık üzerine çıkarım yapabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Paris yakınında bir imza, Ankara’da bir ret',
    lead:
      '10 Ağustos 1920’de Paris yakınlarındaki Sevr kasabasında Osmanlı hükümetinin temsilcileri bir barış antlaşması imzaladı. Aynı günlerde Ankara’daki Meclis bu antlaşmayı tanımayacağını açıkça gösterdi.',
    body:
      'Birinci Dünya Savaşı’nın galipleri, yenilen devletlerle barış antlaşmaları imzalıyordu. Osmanlı Devleti ile yapılacak antlaşma uzun görüşmelerden sonra hazırlandı ve İstanbul hükümetine sunuldu. Padişah Vahdettin, antlaşmanın imzalanıp imzalanmaması konusunda devletin önde gelenlerinden oluşan **Saltanat Şurası**’nı topladı; şura, imzalanmasını uygun buldu. Osmanlı temsilcileri 10 Ağustos 1920’de **Sevr Antlaşması**’nı imzaladı.\n\n' +
      'Sevr, Osmanlı Devleti’ne bırakılan toprakları Anadolu’nun orta ve kuzey kesimine indiriyordu. Doğu Trakya ve İzmir’in yönetimi Yunanistan’a veriliyor, doğuda bir Ermenistan devleti tanınıyor, Fırat’ın doğusunda özerk bir Kürt bölgesi öngörülüyor, Boğazlar uluslararası bir komisyona bırakılıyordu. Ordu 50.000 kişiyle sınırlanıyor, maliye ve yargı yabancı denetimine açılıyordu.\n\n' +
      'Program bu kazanımda Mustafa Kemal’in ve Türk milletinin Sevr’e karşı tepkilerini **değerlendirmeni** ister. Değerlendirmenin ölçüsü Misakımillî’dir: Sevr’in her maddesi, milletin beş ay önce ilan ettiği sınırlar ve bağımsızlık şartlarıyla karşılaştırıldığında tepkilerin gerekçesi açıkça görülür.',
  },
  concepts: [
    { term: 'Barış antlaşması', body: 'Savaşan devletlerin savaşı resmen bitirdiği, sınırları ve diğer şartları kesin olarak belirlediği antlaşma. Ateşkesten (Mondros) farklıdır.' },
    { term: 'Saltanat Şurası', body: 'Padişahın, Sevr’in imzalanması konusunda görüş almak için topladığı, devletin önde gelenlerinden oluşan kurul (Temmuz 1920). Şura imzalanmasını uygun buldu.' },
    { term: 'Onay (tasdik)', body: 'Bir antlaşmanın yürürlüğe girmesi için devletlerin yetkili organlarınca kabul edilmesi. Sevr, Osmanlı Meclis-i Mebusanı kapalı olduğu için onaylanamadı.' },
    { term: 'Özerklik', body: 'Bir bölgenin bir devletin içinde kalmakla birlikte kendi iç işlerini yönetme hakkı. Sevr, Fırat’ın doğusunda özerk bir Kürt bölgesi öngörüyordu.' },
    { term: 'Boğazlar Komisyonu', body: 'Sevr’e göre Boğazların yönetimini üstlenecek uluslararası komisyon. Boğazlar savaşta ve barışta bütün gemilere açık olacaktı.' },
    { term: 'Kapitülasyon', body: 'Yabancılara tanınan hukuki ve ekonomik ayrıcalıklar. Sevr, kaldırılmış olan kapitülasyonların yerine yabancı denetimli bir yargı düzeni öngörüyordu.' },
  ],
  why: {
    question: 'Sevr imzalandığı hâlde neden hiçbir zaman uygulanamadı?',
    body:
      'Bir antlaşmanın uygulanması için iki şey gerekir: hukuken geçerli olması ve onu uygulayacak bir gücün bulunması. Sevr ikisinden de yoksundu.\n\n' +
      '**Hukuken:** Antlaşmanın yürürlüğe girmesi için Türkiye’nin onaylaması gerekiyordu. Oysa Osmanlı Meclis-i Mebusanı kapatılmıştı; antlaşmayı onaylayacak bir meclis yoktu. Ankara’daki Büyük Millet Meclisi ise Sevr’i tanımadı. **Fiilen:** Sevr’in şartlarını Anadolu’da uygulamak için bir ordunun Millî Mücadele’yi yenmesi gerekiyordu. Türk milleti Sevr’i kabul etmeyip savaştı ve kazandı. Bu yüzden Sevr, kâğıt üzerinde kalan bir antlaşma olarak tarihe geçti; yerini 1923’te Lozan Antlaşması aldı.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Sevr’den Lozan’a (1920–1923)',
    lead: 'Sevr’in hikâyesi imzayla başlar ama imzayla bitmez. Her satırda Sevr’in biraz daha geçersizleştiğini gör.',
    intro: 'Önce Sevr’in hazırlanışı ve imzalanışı, sonra tepkiler, en son Sevr’i fiilen ortadan kaldıran gelişmeler.',
    items: [
      { title: 'Ocak 1919–1920 · Paris’te paylaşım görüşmeleri', body: 'Galip devletler Paris Barış Konferansı’nda yenilen devletlerle yapılacak antlaşmaları görüştü; Osmanlı topraklarının paylaşımı da masadaydı.' },
      { title: '28 Ocak 1920 · Misakımillî', body: 'Son Osmanlı Meclis-i Mebusanı milletin sınırlarını ve bağımsızlık şartlarını ilan etti.' },
      { title: 'Temmuz 1920 · Saltanat Şurası', body: 'Padişah Vahdettin’in topladığı Saltanat Şurası, antlaşmanın imzalanmasını uygun buldu.' },
      { title: '10 Ağustos 1920 · Sevr imzalandı', body: 'Osmanlı temsilcileri Hadi Paşa, Rıza Tevfik ve Reşat Halis beyler antlaşmayı Sevr’de imzaladı. Aynı gün İngiltere, Fransa ve İtalya Anadolu’daki nüfuz bölgelerini ayrı bir antlaşmayla paylaştı.' },
      { title: 'Ağustos 1920 · Ankara’nın cevabı', body: 'Büyük Millet Meclisi Sevr’i tanımadı; antlaşmayı imzalayanları ve imzalanmasını onaylayanları vatan haini saydı.' },
      { title: 'Aralık 1920 · Gümrü Antlaşması', body: 'Doğu Cephesi’ndeki zaferin ardından Ermenistan ile imzalanan antlaşmayla Sevr’in doğudaki hükümleri fiilen geçersiz kaldı.' },
      { title: '1921 · Tanınma ve antlaşmalar', body: 'İnönü zaferleri, Moskova ve Ankara antlaşmaları, Büyük Millet Meclisi’nin uluslararası alanda tanınmasını sağladı; Sevr giderek anlamını yitirdi.' },
      { title: '1922 · Büyük Taarruz ve Mudanya', body: 'Büyük Taarruz ile Anadolu kurtarıldı; Mudanya Ateşkesi ile Doğu Trakya savaşmadan geri alındı.' },
      { title: '24 Temmuz 1923 · Lozan Antlaşması', body: 'Sevr’in yerini Türkiye’nin bağımsızlığını tanıyan Lozan Antlaşması aldı.' },
    ],
    takeaway:
      'Dikkat et: Sevr imzalandı ama hiç onaylanmadı ve uygulanmadı. Onu ortadan kaldıran bir antlaşmadan önce, milletin mücadelesi oldu.',
    body:
      'Kronolojide iki belge arasındaki gerilimi izle: **Misakımillî** (Ocak 1920) milletin istediği sınırları ve bağımsızlığı ilan etti; **Sevr** (Ağustos 1920) bunların tam tersini öngördü. Büyük Millet Meclisi’nin bütün sonraki adımları, Sevr’i geçersiz kılıp Misakımillî’yi gerçekleştirmeye yönelikti.\n\n' +
      'Sevr’in fiilen geçersizleşmesi adım adım oldu: Gümrü Antlaşması ile doğudaki hükümleri, Ankara Antlaşması ile güneydeki hükümleri, Büyük Taarruz ile batıdaki hükümleri uygulanamaz hâle geldi. Lozan bu durumu hukuken kayda geçirdi.',
  },
  map: {
    title: 'Şematik atlas: Sevr’e göre paylaşım',
    intro: 'Katmanlarla Sevr’in maddelerini ve aynı gün yapılan nüfuz bölgeleri antlaşmasını ayrı ayrı gör. Noktalar bir bölgeyi temsil eder; sınır çizilmemiştir.',
    map_label: 'Şematik gösterim · sınır çizmez, yalnız bölgeleri işaret eder',
    layers: [
      { id: 'sevr', label: 'Sevr’in maddeleri', description: 'Yunanistan, Ermenistan, özerk Kürt bölgesi, Boğazlar Komisyonu, şartlı başkent.', active: true },
      { id: 'nufuz', label: 'Nüfuz bölgeleri (ayrı antlaşma)', description: 'Aynı gün İngiltere, Fransa ve İtalya arasında imzalanan ayrı antlaşmayla belirlenen İtalyan ve Fransız nüfuz bölgeleri.', active: false },
      { id: 'millet', label: 'Türk milletinin cevabı', description: 'Ankara ve Millî Mücadele.', active: true },
    ],
    regions: [
      { label: 'KARADENİZ', x: 40, y: 4, tone: 'water' },
      { label: 'AKDENİZ', x: 30, y: 92, tone: 'water' },
      { label: 'EGE', x: 2, y: 64, tone: 'water' },
    ],
    locations: [
      { id: 'bogazlar', label: 'Boğazlar · komisyon', x: 10, y: 26, layer: 'sevr', tone: 'accent', detail: 'Sevr’e göre Boğazlar savaşta ve barışta bütün gemilere açık olacak, yönetimi uluslararası bir Boğazlar Komisyonu’na bırakılacaktı (37–38. maddeler).' },
      { id: 'istanbul', label: 'İstanbul · şartlı başkent', x: 12, y: 14, layer: 'sevr', tone: 'accent', detail: 'İstanbul başkent olarak kalacaktı; ama azınlık haklarına uyulmazsa galip devletler bu hükmü değiştirme hakkını saklı tutuyordu (36. madde).' },
      { id: 'trakya', label: 'Doğu Trakya · Yunanistan', x: 4, y: 6, layer: 'sevr', tone: 'danger', detail: 'Türkiye, Avrupa’daki topraklarından (İstanbul çevresi dışında) Yunanistan lehine vazgeçecekti; İmroz ve Bozcaada da Yunanistan’a bırakılacaktı (84. madde).' },
      { id: 'izmir', label: 'İzmir · Yunan yönetimi', x: 6, y: 50, layer: 'sevr', tone: 'danger', detail: 'İzmir ve çevresi kâğıt üzerinde Osmanlı egemenliğinde kalacak, ama yönetimi Yunanistan’a bırakılacaktı (69. madde). Beş yıl sonra bölgenin Yunanistan’a katılması istenebilecekti (83. madde).' },
      { id: 'ermenistan', label: 'Ermenistan', x: 78, y: 22, layer: 'sevr', tone: 'danger', detail: 'Türkiye bağımsız bir Ermenistan devletini tanıyacaktı (88. madde); Erzurum, Trabzon, Van ve Bitlis vilayetlerindeki sınırı ABD başkanının hakemliği belirleyecekti (89. madde).' },
      { id: 'kurt', label: 'Özerk Kürt bölgesi', x: 66, y: 56, layer: 'sevr', tone: 'danger', detail: 'Fırat’ın doğusunda özerk bir Kürt bölgesi kurulacaktı (62. madde); bir yıl sonra bu bölgenin bağımsızlığı istenebilecekti (64. madde).' },
      { id: 'italya', label: 'İtalyan nüfuzu', x: 26, y: 72, layer: 'nufuz', tone: 'muted', detail: 'Sevr’in maddesi değildir: Aynı gün İngiltere, Fransa ve İtalya arasında imzalanan ayrı bir antlaşmayla bu bölge İtalya’nın nüfuz alanı sayıldı.' },
      { id: 'fransa', label: 'Fransız nüfuzu', x: 52, y: 76, layer: 'nufuz', tone: 'muted', detail: 'Sevr’in maddesi değildir: Aynı gün yapılan ayrı antlaşmayla Adana’dan güneydoğuya uzanan bölge Fransa’nın nüfuz alanı sayıldı.' },
      { id: 'ankara', label: 'Ankara · Büyük Millet Meclisi', x: 36, y: 36, layer: 'millet', tone: 'brand', detail: 'Büyük Millet Meclisi Sevr’i tanımadı; antlaşmayı imzalayanları ve onaylayanları vatan haini saydı. Sevr’e cevap Millî Mücadele’nin zaferleriyle verildi.' },
    ],
    routes: [],
    insight:
      'Haritaya bak: Sevr’e göre Türklere yalnız Anadolu’nun orta ve kuzey kesimi bırakılıyordu. Kıyılar, Boğazlar, doğu ve güney ya başka devletlere veriliyor ya da yabancı denetimine bırakılıyordu. Ankara’nın bulunduğu iç bölge, Sevr’e karşı direnişin merkezi oldu.',
    source_note:
      'Sevr’in maddeleri Türk Tarih Kurumu’nun yayımladığı resmî Türkçe metinden (Nihat Erim, Devletlerarası Hukuku ve Siyasi Tarih Metinleri, 1953) alınmıştır. Nüfuz bölgeleri aynı gün imzalanan ayrı bir antlaşmaya aittir. Noktalar yalnız bölgeleri işaret eder; sınır ya da ölçek bilgisi taşımaz.',
  },
  dataTable: {
    title: 'Sevr ile Misakımillî yan yana',
    columns: ['Konu', 'Sevr (Ağustos 1920)', 'Misakımillî (Ocak 1920)', 'Çelişki'],
    rows: [
      ['Doğu Anadolu', 'Bağımsız Ermenistan; sınırı ABD başkanı belirleyecek', 'Türk-İslam çoğunluğunun yaşadığı yerler bölünmez bir bütündür', 'Vatanın bütünlüğüne aykırı'],
      ['Fırat’ın doğusu', 'Özerk Kürt bölgesi; bir yıl sonra bağımsızlık yolu', 'Bölünmez bütün', 'Vatanın bütünlüğüne aykırı'],
      ['İzmir ve çevresi', 'Yönetim Yunanistan’a; beş yıl sonra katılma yolu', 'Bölünmez bütün', 'Vatanın bütünlüğüne aykırı'],
      ['Doğu Trakya', 'Yunanistan’a bırakılıyor', 'Batı Trakya için bile halk oylaması isteniyor', 'Ulusal egemenliğe aykırı'],
      ['Boğazlar ve İstanbul', 'Uluslararası komisyon; başkent şartlı', 'İstanbul ve Marmara’nın güvenliği sağlanmalı', 'Bağımsızlığa ve güvenliğe aykırı'],
      ['Ordu', 'En fazla 50.000 kişi (ayrıca 700 kişilik saray muhafızı)', '—', 'Kendini savunma hakkı sınırlanıyor'],
      ['Yargı ve maliye', 'Yabancı denetimli yargı düzeni ve mali denetim', 'Siyasi, adli, mali gelişmeyi engelleyen kayıtlara karşıyız', 'Tam bağımsızlığa aykırı'],
    ],
    caption:
      'Tablo, tepkilerin gerekçesini gösterir: Sevr’in hemen her maddesi, Misakımillî’nin üç temel ilkesinden (vatanın bütünlüğü, ulusal egemenlik, tam bağımsızlık) en az biriyle çelişiyordu.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Sevr neden reddedildi ve neden uygulanamadı?',
    lead: 'Sevr’in reddinin de, uygulanamamasının da birden çok sebebi var. İkisini aynı zincirde gör.',
    intro: 'Zincirin başı Sevr’in neden bu kadar ağır olduğunu, ortası tepkileri, sonu da Sevr’in nasıl geçersizleştiğini anlatır.',
    steps: [
      { tur: 'sebep', title: 'Galiplerin paylaşım planları', body: 'İtilaf Devletleri savaş sırasında Osmanlı topraklarını paylaşmak için gizli antlaşmalar yapmıştı; Sevr bu planları tek bir belgede topladı.' },
      { tur: 'sebep', title: 'İstanbul hükümetinin zayıflığı', body: 'İşgal altındaki İstanbul hükümeti ve padişah, galip devletlere karşı koyacak güçte değildi; Saltanat Şurası imzayı uygun buldu.' },
      { tur: 'sebep', title: 'Misakımillî ile çelişki', body: 'Sevr’in maddeleri milletin beş ay önce ilan ettiği sınırlar ve bağımsızlık şartlarıyla açıkça çelişiyordu.' },
      { tur: 'gelisme', title: 'Ankara’nın reddi', body: 'Büyük Millet Meclisi Sevr’i tanımadı; imzalayanları ve onaylayanları vatan haini saydı. Mustafa Kemal Sevr’i Türk milleti için bir idam kararnamesi olarak değerlendirdi.' },
      { tur: 'gelisme', title: 'Milletin tepkisi', body: 'Sevr, işgallerin amacını herkese açıkça gösterdi; halkın Büyük Millet Meclisi’ne desteği arttı, millî birlik güçlendi.' },
      { tur: 'sonuc', title: 'Sevr uygulanamadı', body: 'Osmanlı Meclis-i Mebusanı kapalı olduğu için onaylanamadı; Millî Mücadele’nin zaferleri onu fiilen geçersiz kıldı.' },
      { tur: 'sonraki-etki', title: 'Lozan', body: 'Sevr’in yerini 1923’te Türkiye’nin tam bağımsızlığını tanıyan Lozan Antlaşması aldı.' },
    ],
    inference:
      'Temel çıkarım: Bir antlaşmanın gücü, altındaki imzadan çok arkasındaki iradeye ve güce bağlıdır. Sevr’i imzalayan hükümetin arkasında milletin iradesi yoktu; Misakımillî’nin arkasında ise vardı.',
    body:
      'Program Mustafa Kemal’in ve Türk milletinin tepkilerini **değerlendirmeni** ister. Değerlendirmek, tepkiyi yalnız anlatmak değil, gerekçesini ve sonucunu tartmaktır.\n\n' +
      '**Mustafa Kemal’in tepkisi:** Sevr’i hiçbir zaman görüşme konusu yapmadı; Nutuk’ta aktardığı bir görüşmede Sevr’in adının bile anılmasını istemediğini söyler. Bu tutumun gerekçesi Misakımillî’dir: Milletin ilan ettiği şartlarla bağdaşmayan bir belge pazarlığa açılamazdı. Tutumun sonucu da önemlidir: Sevr’i reddetmek, Ankara’nın bütün görüşmelerde Misakımillî’yi temel almasını sağladı.\n\n' +
      '**Büyük Millet Meclisi’nin tepkisi:** Meclis Sevr’i tanımadı; imzalayanları ve imzalanmasını onaylayanları vatan haini saydı. Bu karar, Meclis’in kendisini milletin tek meşru temsilcisi olarak gördüğünü açıkça gösteriyordu.\n\n' +
      '**Türk milletinin tepkisi:** Sevr, İstanbul hükümetine güveni büsbütün sarstı ve halkın Ankara’ya desteğini artırdı. Sevr’in şartları öğrenildikçe, işgallerin geçici bir ateşkes uygulaması olmadığı, kalıcı bir paylaşım olduğu anlaşıldı. Bu, millî birliği güçlendirdi ve Millî Mücadele’ye katılımı artırdı.',
  },
  comparison: {
    title: 'Üç belge: Mondros, Sevr, Misakımillî',
    columns: ['Mondros (Ekim 1918)', 'Sevr (Ağustos 1920)', 'Misakımillî (Ocak 1920)'],
    rows: [
      { label: 'Türü', values: ['Ateşkes antlaşması', 'Barış antlaşması', 'Meclis kararı (millî ant)'] },
      { label: 'Kim imzaladı / kabul etti?', values: ['Osmanlı hükümeti ile İtilaf adına İngiltere', 'Osmanlı hükümeti ile galip devletler', 'Son Osmanlı Meclis-i Mebusanı'] },
      { label: 'Temel özelliği', values: ['Savunmasız bıraktı, işgale kapı açtı', 'Paylaşımı kesinleştirmek istedi', 'Milletin sınırlarını ve bağımsızlık şartlarını ilan etti'] },
      { label: 'Uygulandı mı?', values: ['Evet; işgaller bu antlaşmaya dayandırıldı', 'Hayır; onaylanmadı ve fiilen geçersizleşti', 'Millî Mücadele’nin hedefi oldu; Lozan’da büyük ölçüde gerçekleşti'] },
    ],
    insight:
      'Mondros işgalin kapısını açtı, Sevr işgali kalıcı bir paylaşıma çevirmek istedi, Misakımillî ise buna karşı milletin cevabını ilan etti. Üçünü birlikte okuyan öğrenci Millî Mücadele’nin neden ve ne için yapıldığını görür.',
  },
  traps: [
    {
      title: 'Sevr’i uygulanmış bir antlaşma sanmak',
      wrong: 'Sevr Antlaşması imzalandığı için Osmanlı toprakları bu antlaşmaya göre paylaşıldı.',
      right: 'Sevr imzalandı ama onaylanmadı ve uygulanamadı. Türk milleti Millî Mücadele ile Sevr’i geçersiz kıldı; yerini Lozan Antlaşması aldı.',
      body: 'Soruda “Sevr’in sonucu” sorulursa, “kâğıt üzerinde kaldı” ve “Millî Mücadele’yi hızlandırdı” seçeneklerini düşün.',
    },
    {
      title: 'Nüfuz bölgelerini Sevr’in maddesi sanmak',
      wrong: 'Sevr’in maddelerine göre Antalya çevresi İtalya’ya, Adana çevresi Fransa’ya verildi.',
      right: 'Antalya ve Adana çevresindeki İtalyan ve Fransız nüfuz bölgeleri, Sevr ile aynı gün İngiltere, Fransa ve İtalya arasında imzalanan ayrı bir antlaşmayla belirlendi.',
      body: 'Bu ayrım ince ama önemlidir: Sevr’i Osmanlı hükümeti imzaladı; nüfuz bölgeleri antlaşmasına ise Osmanlı taraf değildi.',
    },
    {
      title: 'Sevr ile Mondros’u karıştırmak',
      wrong: 'Sevr, Osmanlı ordusunun terhisini ve savaş gemilerinin teslimini öngören ateşkes antlaşmasıdır.',
      right: 'Terhis ve gemi teslimi Mondros Ateşkes Antlaşması’nın maddeleridir. Sevr bir barış antlaşmasıdır ve sınırları, orduyu, Boğazları ve mali düzeni kalıcı olarak belirlemek istemiştir.',
      body: 'Ayırt etme ipucu: “Ateşkes”, “terhis”, “stratejik nokta” → Mondros; “Ermenistan”, “Boğazlar Komisyonu”, “50.000 kişilik ordu” → Sevr.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Sevr’in ve tepkilerin şahsiyetleri',
    lead: 'Sevr’i imzalayanlar, imzalanmasını onaylayanlar ve ona karşı çıkanlar farklı sorumluluklar taşıdı.',
    intro: 'Her kartta kişinin kararını ve bu kararın tarihteki yerini gör.',
    figures: [
      {
        name: 'Mustafa Kemal',
        period: '1920–1923',
        position: 'Büyük Millet Meclisi Başkanı',
        contribution: 'Sevr’i hiçbir zaman tanımadı ve görüşme konusu yapmadı. Bütün görüşmelerde Misakımillî’yi ölçü aldı. Nutuk’ta Sevr’i Türk milleti için bir idam kararnamesi olarak nitelendirir.',
        connections: ['Sevr’in reddi', 'Misakımillî', 'Lozan’a giden süreç'],
        significance: 'Tutumu, tam bağımsızlık ilkesinden hiçbir koşulda vazgeçmeme kararlılığının örneğidir.',
      },
      {
        name: 'Sultan Vahdettin',
        period: 'Temmuz–Ağustos 1920',
        position: 'Padişah',
        contribution: 'Sevr’in imzalanması konusunda Saltanat Şurası’nı topladı; şura imzalanmasını uygun buldu.',
        connections: ['Saltanat Şurası', 'Sevr’in imzalanması'],
        significance: 'Sevr’in imzalanması, İstanbul yönetimi ile millet arasındaki bağın büsbütün koptuğu anlardan biri oldu.',
      },
      {
        name: 'Hadi Paşa, Rıza Tevfik ve Reşat Halis',
        period: '10 Ağustos 1920',
        position: 'Sevr’i imzalayan Osmanlı temsilcileri',
        contribution: 'İstanbul hükümeti adına antlaşmayı Sevr’de imzaladılar.',
        connections: ['Sevr Antlaşması'],
        significance: 'Büyük Millet Meclisi, antlaşmayı imzalayanları vatan haini saydı.',
      },
      {
        name: 'Damat Ferit Paşa',
        period: '1920 · sadrazam',
        position: 'Sevr’i imzalatan hükümetin başı',
        contribution: 'Galip devletlerle anlaşmanın devleti kurtaracağını savundu; Sevr’in imzalanmasını sağladı.',
        connections: ['Sevr Antlaşması', 'Ankara’ya karşı tutum'],
        significance: 'Sevr, onun galip devletlere güvenen siyasetinin sonucunu açıkça gösterdi.',
      },
    ],
    takeaway:
      'Sevr’e “evet” diyenler de “hayır” diyenler de devleti kurtarmaktan söz ediyordu. Aralarındaki fark, kurtuluşu galip devletlerin iyi niyetinde mi yoksa milletin iradesinde mi aradıklarıydı.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-degerlendirme`,
      title: 'Tepkileri değerlendirmek: haklı mıydı, etkili miydi?',
      lead: 'Program bu kazanımda “değerlendirir” fiilini kullanır. Bir tepkiyi değerlendirmek için iki soru sorulur: Gerekçesi haklı mıydı? Sonucu etkili miydi?',
      blocks: [
        {
          id: `${SLUG}-degerlendirme-anlatim`,
          type: 'prose',
          body:
            '**Gerekçe açısından:** Sevr’in reddi keyfî bir karar değildi. Milletin seçtiği temsilciler beş ay önce Misakımillî’yi kabul etmişti; Sevr bu kararın neredeyse her maddesiyle çelişiyordu. Üstelik antlaşmayı imzalayan hükümet işgal altındaki bir başkentteydi ve milletin temsilcilerinin onayını almamıştı. Bu yüzden Sevr’in reddi, ulusal egemenlik ilkesinin doğal sonucuydu.\n\n' +
            '**Sonuç açısından:** Sevr’in reddi tek başına bir şey değiştirmezdi; reddin arkasında onu savunacak bir güç gerekiyordu. Millî Mücadele’nin askerî ve diplomatik başarıları bu gücü sağladı: Doğu’da Gümrü, güneyde Ankara Antlaşması, batıda Büyük Taarruz Sevr’in hükümlerini birer birer geçersiz kıldı. Lozan’da Türkiye’nin bağımsızlığının tanınması, bu tepkinin sonuç açısından da haklı çıktığını gösterdi.\n\n' +
            '**Farklı bir bakış:** İstanbul’da Sevr’i imzalayanlar, direnmenin daha ağır sonuçlar doğuracağını düşünüyordu. Bu kaygı o günün şartlarında anlaşılabilir bir kaygıydı; işgal altındaki bir başkentte hareket alanı çok dardı. Ama sonraki olaylar, milletin iradesine dayanan bir direnişin galip devletlerin dayattığı şartları değiştirebildiğini gösterdi. Tarihçi, geçmişteki insanları kendi şartları içinde anlamaya çalışır; ama kararlarının sonuçlarını da değerlendirir.',
        },
        {
          id: `${SLUG}-degerlendirme-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: Sevr “ölü doğdu”',
          body: 'İmzalandı ama onaylanmadı, onaylanmadığı için yürürlüğe girmedi, yürürlüğe girmediği için uygulanmadı. Tarih kitaplarında bu yüzden “ölü doğmuş bir antlaşma” diye anılır.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste Sevr’in bir maddesini ve Mustafa Kemal’in Sevr hakkındaki bir sözünü özgün metinlerinden okuyacaksın.',
    intro:
      'Bir antlaşmanın ağırlığını anlamak için bazen tek bir sayı yeter. Sevr’in ordu sınırını belirleyen maddesi buna iyi bir örnektir. Mustafa Kemal’in sözü ise bu maddelerin bir devlet adamı tarafından nasıl değerlendirildiğini gösterir.\n\n' +
      'İlk iki metin birebir alıntıdır; üçüncü metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Sevr’in 155. maddesi',
        kunye: 'Sevr Antlaşması, 10 Ağustos 1920. Metin: Nihat Erim, Devletlerarası Hukuku ve Siyasi Tarih Metinleri, cilt 1, Ankara 1953; Türk Tarih Kurumu yayını.',
        nitelik: 'Birebir alıntı. Resmî Türkçe metnin 155. maddesidir.',
        metin:
          '152 nci maddenin ikinci ve üçüncü fıkralarında tadat olunan kuvanın umum yekûnu erkân-ı harplar, zabitan, mekâtib-i askeriye heyet-i talimiyesi ve idariyeleri ve depo kıtaatı dahil olduğu halde 50.000 neferi tecavüz etmiyecektir.',
        soru: 'Bu madde Türkiye’nin ordusunu nasıl sınırlıyor? 152. maddeye göre bu kuvvetlerin görevleri iç güvenlik ve sınır gözetimiyle sınırlıysa, bu sınırlamanın bağımsızlık açısından anlamı nedir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Tadat olunan”: sayılan. “Umum yekûn”: toplam. “Erkân-ı harp”: kurmaylar. “Zabitan”: subaylar. “Mekâtib-i askeriye”: askerî okullar. “Tecavüz etmiyecektir”: aşmayacaktır.' },
          { title: 'Maddenin söylediğini çıkar', body: 'Jandarma ve iç güvenlik kuvvetlerinin toplamı; kurmaylar, subaylar, askerî okulların kadroları ve depo birlikleri dahil 50.000 kişiyi geçemeyecektir.' },
          { title: 'Bağlamı ekle', body: '152. maddeye göre Türkiye yalnız saray muhafızı, jandarma ve gerekirse sınır gözetimi yapacak birlikler bulundurabilecekti; yani saldırıya karşı savunma yapacak bir ordu kurulamayacaktı.' },
          { title: 'Yorumla', body: 'Kendini savunacak ordusu olmayan bir devlet, sınırlarını ve bağımsızlığını başkalarının iyi niyetine bırakmış olur.' },
        ],
        cevap: 'Madde, subaylar ve askerî okullar dahil bütün kuvvetleri 50.000 kişiyle sınırlar ve bunların görevini iç güvenlik ve sınır gözetimine indirir. Bu, Türkiye’nin kendini savunma hakkını fiilen ortadan kaldırır ve tam bağımsızlıkla bağdaşmaz.',
        cikarim: 'Bir antlaşmadaki sayıyı değerlendirirken sayının kendisine değil, neyi kapsadığına ve hangi görevle sınırlandığına bak. “Subaylar ve okullar dahil” ifadesi sayıyı daha da küçültür.',
      },
      {
        tur: 'birincil',
        baslik: 'Mustafa Kemal’in Sevr hakkındaki sözü',
        kunye: 'Mustafa Kemal, Nutuk (1927), 12. bölüm: Fransız temsilcisi Franklin-Bouillon ile Ankara’daki görüşmesini anlattığı bölüm. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı. Mustafa Kemal’in görüşmede söylediğini Nutuk’ta aktardığı sözlerdir.',
        metin:
          'Sevr Muâhedesi, Türk milleti için o kadar meş’ûm bir idam kararnamesidir ki onun bir dost ağzından çıkmamasını talep ederiz. Bu mükâlememiz esnasında dahi Sevr Muâhedesi’ni telaffuz etmek istemem.',
        soru: 'Mustafa Kemal Sevr’i neden “idam kararnamesi”ne benzetiyor? Görüşmede Sevr’in adının bile anılmasını istememesi, onun diplomasi anlayışı hakkında ne söyler?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Muâhede”: antlaşma. “Meş’ûm”: uğursuz. “İdam kararnamesi”: ölüm kararı. “Mükâleme”: görüşme. “Telaffuz etmek”: söylemek, adını anmak.' },
          { title: 'Benzetmeyi çöz', body: 'İdam, bir varlığın sona ermesidir. Sevr, Türk milletinin bağımsız bir devlet olarak varlığını sona erdirecek şartlar içerdiği için ölüm kararına benzetilmiştir.' },
          { title: 'Diplomatik tutumu yorumla', body: 'Sevr’in adının bile anılmasını istememesi, onu pazarlığın başlangıç noktası olarak kabul etmediğini gösterir. Görüşmeler Sevr’den değil, Misakımillî’den başlamalıydı.' },
          { title: 'Kaynağın özelliğini hesaba kat', body: 'Söz, Mustafa Kemal’in 1927’de Nutuk’ta aktardığı biçimiyle elimizdedir. Görüşmenin öbür tarafının kayıtlarıyla karşılaştırmak ayrıntıları doğrulamak için yararlı olur; ama Mustafa Kemal’in Sevr’e karşı tutumu, bütün davranışlarıyla tutarlıdır.' },
        ],
        cevap: 'Mustafa Kemal Sevr’i, Türk milletinin bağımsız varlığını sona erdireceği için idam kararnamesine benzetir. Sevr’in adını bile anmak istememesi, görüşmelerde Sevr’i başlangıç noktası olarak kabul etmediğini ve Misakımillî’yi ölçü aldığını gösterir.',
        cikarim: 'Diplomaside neyin konuşulduğu kadar neyin konuşulmadığı da önemlidir: Bir belgeyi görüşme konusu yapmamak, onu tanımamanın bir yoludur.',
      },
      {
        tur: 'ikincil',
        baslik: 'Sevr’in etkisi üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Sevr Antlaşması, galip devletlerin amacı bakımından bir paylaşım belgesiydi; ama sonucu bakımından Millî Mücadele’nin en güçlü propagandası oldu. Sevr’in şartlarını öğrenen halk, işgallerin geçici olmadığını gördü ve Ankara’ya daha sıkı bağlandı.',
        soru: 'Metindeki olguları ve yorumları ayır. “En güçlü propaganda” yargısını hangi kanıtlarla sınayabilirsin?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaylardan sonra yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguyu ayır', body: 'Sevr’in Osmanlı topraklarının paylaşımını öngörmesi, antlaşmanın maddeleriyle doğrulanabilir bir olgudur.' },
          { title: 'Yorumları ayır', body: '“En güçlü propaganda oldu” ve “halk Ankara’ya daha sıkı bağlandı” yazarın değerlendirmeleridir.' },
          { title: 'Yargıyı sına', body: 'Sınamak için Sevr’den sonra Millî Mücadele’ye katılımın ve Meclis’e desteğin artıp artmadığına, dönemin gazetelerine ve Meclis tutanaklarına bakmak gerekir. “En güçlü” gibi üstünlük bildiren ifadeler, başka etkenlerle karşılaştırma gerektirir.' },
        ],
        cevap: 'Olgu: Sevr’in paylaşımı öngörmesi. Yorumlar: Sevr’in Millî Mücadele için en güçlü propaganda olduğu ve halkın Ankara’ya daha sıkı bağlandığı. Bu yargılar, Sevr sonrası katılım ve destekle ilgili kanıtlarla sınanmalıdır.',
        cikarim: '“En”, “tek”, “asıl” gibi sözcükler bir yargıyı güçlendirir ama sınanmasını da zorlaştırır; böyle bir yargıya katılmadan önce karşılaştırma yapılıp yapılmadığına bak.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Maddeyi ilkeye göre değerlendir',
      prompt:
        'Sevr’in aşağıdaki hükümlerinin Misakımillî’nin hangi ilkesine aykırı olduğunu belirle:\n\n- a) Doğu Anadolu’da bağımsız bir Ermenistan kurulması\n- b) Boğazların uluslararası bir komisyona bırakılması\n- c) Yargının yabancı denetimli bir düzene bağlanması',
      steps: [
        { title: 'a', body: 'Türk-İslam çoğunluğunun yaşadığı yerlerin bölünmesi → vatanın bütünlüğüne aykırı.' },
        { title: 'b', body: 'Başkentin ve Marmara’nın güvenliğinin yabancı bir komisyona bırakılması → bağımsızlığa ve güvenliğe aykırı.' },
        { title: 'c', body: 'Adli gelişmeyi engelleyen yabancı kayıtlar → tam bağımsızlığa aykırı.' },
      ],
      answer: 'a) vatanın bütünlüğü · b) bağımsızlık ve güvenlik · c) tam bağımsızlık.',
      takeaway: 'Sevr ile ilgili “değerlendir” sorularında ölçü her zaman Misakımillî’dir.',
    },
    {
      title: 'Sevr neden hukuken geçersizdi?',
      prompt: 'Sevr Antlaşması Osmanlı temsilcileri tarafından imzalandığı hâlde neden hukuken geçerli sayılmaz? İki gerekçe yaz.',
      steps: [
        { title: 'Birinci gerekçe', body: 'Antlaşmanın yürürlüğe girmesi için Türkiye’nin onaylaması gerekiyordu; Osmanlı Meclis-i Mebusanı kapatılmış olduğu için antlaşma onaylanamadı.' },
        { title: 'İkinci gerekçe', body: 'Milletin tek meşru temsilcisi olan Büyük Millet Meclisi Sevr’i tanımadı; imzalayanları vatan haini saydı.' },
      ],
      answer: 'Sevr, onayı yapacak Osmanlı meclisi kapalı olduğu için onaylanamadı ve milletin temsilcisi Büyük Millet Meclisi tarafından tanınmadı.',
      takeaway: 'İmza ile onay farklıdır: Bir antlaşma imzalanabilir ama onaylanmadan yürürlüğe girmez.',
    },
    {
      title: 'Tepkiyi kavramla eşleştir',
      prompt: 'Büyük Millet Meclisi’nin Sevr’i imzalayanları vatan haini sayması, Meclis’in kendisini nasıl gördüğünü gösterir?',
      steps: [
        { title: 'Kararı çöz', body: 'Meclis, milletin iradesine aykırı bir antlaşmayı imzalamayı vatana ihanet saydı.' },
        { title: 'Kavramı bul', body: 'Bu, Meclis’in kendisini milletin tek meşru temsilcisi ve egemenliğin sahibi olarak gördüğünü gösterir: ulusal egemenlik.' },
      ],
      answer: 'Meclis kendisini milletin tek meşru temsilcisi olarak görüyordu; bu tutum ulusal egemenlik ilkesine dayanır.',
      takeaway: 'Bir kararın kimi suçladığına bakmak, kararı verenin kendini nasıl gördüğünü anlamanın yoludur.',
    },
  ],
  questionClue: {
    concept: 'Soruda Sevr’i nasıl tanırım?',
    statement: 'Soru bir antlaşma hükmü verip hangi antlaşmaya ait olduğunu ya da neden reddedildiğini sorabilir.',
    clues: [
      '“Ermenistan’ın tanınması”, “ABD başkanının hakemliği” → Sevr',
      '“Boğazlar Komisyonu”, “Boğazlar bütün gemilere açık” → Sevr',
      '“50.000 kişilik ordu”, “jandarma” → Sevr',
      '“İzmir’in yönetiminin Yunanistan’a bırakılması” → Sevr',
      '“Saltanat Şurası”, “imzalayanlar vatan haini” → Sevr’e verilen tepki',
    ],
    reasoning: 'Sevr kalıcı bir paylaşım öngörür; Mondros ateşkes şartlarını düzenler. Hükmün kalıcı mı yoksa geçici mi olduğuna bakarak iki antlaşmayı ayırt edebilirsin.',
    boundary: 'Dikkat: İtalyan ve Fransız nüfuz bölgeleri Sevr ile aynı gün yapılan ayrı bir antlaşmaya aittir; bir seçenekte “Sevr’in maddesi” olarak geçerse dikkatli ol.',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'Bu kazanım bir Sevr maddesi, Sevr ile Misakımillî karşılaştırması, bir harita ya da Mustafa Kemal’in bir sözü verilerek sorulabilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Sevr maddesinin hangi ilkeye aykırı olduğunu bulma',
      'Sevr’in neden uygulanamadığını açıklama',
      'Tepkileri kavramlarla (ulusal egemenlik, tam bağımsızlık) ilişkilendirme',
      'Mondros, Sevr ve Misakımillî’yi ayırt etme',
      'Bir sözden Mustafa Kemal’in tutumu hakkında çıkarım yapma',
    ],
  },
  checkpoints: [
    {
      prompt: 'Sevr’in imzalanması, halkın İstanbul hükümetine ve Ankara’ya bakışını nasıl etkilemiş olabilir?',
      hint: 'Halk Sevr’in şartlarını öğrendiğinde neyi anladı?',
      answer: 'Halk, İstanbul hükümetinin galip devletlerin şartlarını kabul ettiğini ve işgallerin kalıcı bir paylaşıma dönüştürülmek istendiğini gördü. Bu, İstanbul hükümetine güveni sarstı ve Ankara’daki Meclis’e desteği artırdı.',
    },
    {
      prompt: 'Sevr’in doğudaki hükümleri hangi gelişmeyle fiilen geçersiz kaldı?',
      answer: 'Doğu Cephesi’ndeki zaferden sonra Aralık 1920’de Ermenistan ile imzalanan Gümrü Antlaşması ile Sevr’in Ermenistan’la ilgili hükümleri fiilen geçersiz kaldı. Bunu bir sonraki derste işleyeceğiz.',
    },
    {
      prompt: 'Saltanat Şurası’nın Sevr’in imzalanmasını uygun bulması ile Büyük Millet Meclisi’nin Sevr’i reddetmesi arasındaki fark neyi gösterir?',
      answer: 'İki kurum arasındaki fark, egemenliğin kimde olduğu sorusuyla ilgilidir. Saltanat Şurası padişahın danışma kuruluydu ve kararı padişahın otoritesine dayanıyordu; Büyük Millet Meclisi ise milletin seçtiği temsilcilerden oluşuyordu. Sevr’e verilen iki farklı cevap, padişah egemenliği ile millî egemenlik arasındaki ayrılığı açıkça gösterdi.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.2.8 bir “değerlendirir” kazanımıdır: öğrenciden Mustafa Kemal’in ve Türk milletinin Sevr’e tepkilerini gerekçeleri ve sonuçlarıyla birlikte tartmasını ister. Bu kazanıma dayanan bir soru bir Sevr maddesi ya da bir tepki verip hangi ilkeyle ilişkili olduğunu veya hangi sonuca ulaşılabileceğini sorabilir.',
    measures: [
      'Sevr maddelerini Misakımillî ile karşılaştırma',
      'Tepkilerin gerekçesini açıklama',
      'Sevr’in neden uygulanamadığını açıklama',
      'Mondros, Sevr ve Misakımillî’yi ayırt etme',
    ],
  },
  simulation: {
    title: 'Mini LGS: Sevr’in iki hükmü',
    passage:
      'Sevr Antlaşması’nın iki hükmü şöyledir (sadeleştirilmiş): “Boğazlar savaşta ve barışta bütün ticaret ve savaş gemilerine açık olacak; yönetimi bir Boğazlar Komisyonu’na bırakılacaktır.” “Türkiye’nin bulunduracağı kuvvetler, subaylar ve askerî okullar dahil 50.000 kişiyi geçmeyecektir.”',
    question: 'Bu hükümler Misakımillî’nin hangi maddesinde dile getirilen düşünceyle en açık biçimde çelişir?',
    options: [
      { text: 'İstanbul ve Marmara’nın güvenliğinin her türlü tehlikeden korunması gerektiğini söyleyen madde', explanation: 'Doğru. Boğazların yabancı bir komisyona bırakılması ve ordunun savunma yapamayacak ölçüde küçültülmesi, İstanbul ve Marmara’nın güvenliğini doğrudan tehlikeye atar.' },
      { text: 'Batı Trakya’nın durumunun halk oylamasıyla belirlenmesini isteyen madde', explanation: 'Verilen hükümler Batı Trakya ile ilgili değildir.' },
      { text: 'Kars, Ardahan ve Batum için halk oylamasına başvurulabileceğini söyleyen madde', explanation: 'Verilen hükümler bu bölgelerle ilgili değildir.' },
      { text: 'Azınlık haklarının karşılıklılık esasıyla güvence altına alınacağını söyleyen madde', explanation: 'Verilen hükümler azınlık haklarıyla ilgili değildir.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru iki hükmün ortak etkisini soruyor: Biri Boğazları, öbürü orduyu ilgilendiriyor. İkisinin ortak sonucu, başkentin ve Boğazların savunulamaz hâle gelmesidir.',
    critical_point: 'Çeldiricilerin hepsi Misakımillî’nin gerçek maddeleridir; ama verilen hükümlerle ilgili değildir. “Hangi maddeyle çelişir?” sorularında maddenin doğru olmasına değil, hükümle aynı konuyu ele almasına bak.',
    takeaway: 'Karşılaştırma sorularında önce konuyu eşleştir (Boğazlar ↔ İstanbul ve Marmara), sonra çelişkiyi ara.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Sevr ve cevabı',
    range: 'Ağustos 1920–Temmuz 1923',
    body:
      'Saltanat Şurası’nın onayıyla Osmanlı temsilcileri 10 Ağustos 1920’de Sevr Antlaşması’nı imzaladı. Sevr, Doğu Trakya ve İzmir’in yönetimini Yunanistan’a veriyor, doğuda Ermenistan’ı tanıyor, Fırat’ın doğusunda özerk bir Kürt bölgesi öngörüyor, Boğazları uluslararası bir komisyona bırakıyor, orduyu 50.000 kişiyle sınırlıyor, yargı ve maliyeyi yabancı denetimine açıyordu. Büyük Millet Meclisi Sevr’i tanımadı ve imzalayanları vatan haini saydı; Mustafa Kemal Sevr’i Türk milleti için bir idam kararnamesi olarak değerlendirdi. Osmanlı Meclis-i Mebusanı kapalı olduğu için onaylanamayan Sevr, Millî Mücadele’nin zaferleriyle fiilen geçersizleşti ve yerini Lozan Antlaşması’na bıraktı.',
    turning_points: [
      '28 Ocak 1920 · Misakımillî',
      'Temmuz 1920 · Saltanat Şurası',
      '10 Ağustos 1920 · Sevr imzalandı',
      'Ağustos 1920 · Büyük Millet Meclisi Sevr’i tanımadı',
      'Aralık 1920 · Gümrü Antlaşması',
      '24 Temmuz 1923 · Lozan Antlaşması',
    ],
  },
  summary: [
    '**Sevr (10 Ağustos 1920):** Osmanlı hükümetinin imzaladığı barış antlaşması; Saltanat Şurası imzalanmasını uygun buldu.',
    '**Önemli hükümler:** Doğu Trakya ve İzmir’in yönetimi Yunanistan’a; bağımsız Ermenistan; Fırat’ın doğusunda özerk Kürt bölgesi; Boğazlar Komisyonu; 50.000 kişilik ordu; yabancı denetimli yargı ve maliye.',
    '**Ayrı antlaşma:** İtalyan ve Fransız nüfuz bölgeleri aynı gün imzalanan başka bir antlaşmayla belirlendi.',
    '**Misakımillî ile çelişki:** vatanın bütünlüğü, ulusal egemenlik ve tam bağımsızlık ilkelerinin hepsiyle çelişiyordu.',
    '**Tepkiler:** Büyük Millet Meclisi tanımadı ve imzalayanları vatan haini saydı; Mustafa Kemal “idam kararnamesi” olarak nitelendirdi; halkın Ankara’ya desteği arttı.',
    '**Sonuç:** Onaylanmadı, uygulanamadı (“ölü doğdu”); Gümrü, Ankara Antlaşması ve Büyük Taarruz ile fiilen geçersizleşti; yerini Lozan aldı.',
  ],
  quizzes: [
    {
      question: 'Sevr Antlaşması’nın hukuken geçerli sayılmamasının sebeplerinden biri aşağıdakilerden hangisidir?',
      options: ['Osmanlı Meclis-i Mebusanı tarafından onaylanmamış olması', 'Galip devletlerin antlaşmayı imzalamaması', 'Padişahın antlaşmaya karşı çıkması', 'Antlaşmanın Ankara’da imzalanması'],
      answer_index: 0,
      explanation: 'Sevr’in yürürlüğe girmesi için Türkiye’nin onaylaması gerekiyordu; Osmanlı Meclis-i Mebusanı kapatılmış olduğu için antlaşma onaylanamadı. Galip devletler antlaşmayı imzaladı; padişah imzalanmasına onay veren Saltanat Şurası’nı topladı; antlaşma Sevr’de imzalandı.',
    },
    {
      question: 'Sevr’in “Türkiye’nin bulunduracağı kuvvetler 50.000 kişiyi geçmeyecektir” hükmü en çok hangi ilkeyle çelişir?',
      options: ['Tam bağımsızlık', 'Laiklik', 'Halkçılık', 'Devletçilik'],
      answer_index: 0,
      explanation: 'Kendini savunacak bir ordu kuramamak, bir devletin bağımsızlığını başkalarının iyi niyetine bırakması demektir; bu tam bağımsızlıkla çelişir.',
    },
    {
      question: 'Aşağıdakilerden hangisi Sevr Antlaşması’nın hükümlerinden biri değildir?',
      options: ['Ermenistan’ın bağımsız bir devlet olarak tanınması', 'Boğazların bir komisyona bırakılması', 'Osmanlı ordusunun ateşkesin hemen ardından terhis edilmesi', 'İzmir’in yönetiminin Yunanistan’a bırakılması'],
      answer_index: 2,
      explanation: 'Ateşkesin ardından ordunun terhis edilmesi Mondros Ateşkes Antlaşması’nın (5. madde) hükmüdür. Diğer üçü Sevr’in hükümleridir.',
    },
    {
      question: 'Büyük Millet Meclisi’nin Sevr’i imzalayanları vatan haini sayması en çok hangi ilkeyle ilişkilidir?',
      options: ['Ulusal egemenlik', 'Devletçilik', 'Laiklik', 'İnkılapçılık'],
      answer_index: 0,
      explanation: 'Meclis, milletin iradesine aykırı bir antlaşmayı imzalamayı vatana ihanet saydı; bu, egemenliğin millete ait olduğu ve milletin temsilcisinin Meclis olduğu düşüncesine dayanır.',
    },
  ],
  next: ['Doğu ve Güney Cepheleri', 'Batı Cephesi: Düzenli Ordu ve İnönü Muharebeleri'],
})

export default lesson
