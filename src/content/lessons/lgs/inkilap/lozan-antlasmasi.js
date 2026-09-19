import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.3 Millî Bir Destan · 4. ders
 * Kazanımlar: İTA.8.3.6 · İTA.8.3.7
 * Dayanak   : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 * Programda iki kazanım için de ayrıca açıklama yoktur.
 *
 * KAPSAM KARARI
 * Lozan’ın 3. ve 28. maddeleri Düstur’daki (III. Tertip, C. 5) resmî metinden,
 * Sevr–Lozan karşılaştırması Nutuk’un 15. bölümünden, İstiklal Marşı’nın 3. ve
 * 4. kıtaları Cerîde-i Resmiye’de yayımlanan 1921 metninden birebir alıntılandı.
 * Musul, Boğazlar ve Hatay meselelerinin sonraki çözümleri Atatürk dönemi dış
 * politika dersinin konusudur; burada yalnız “çözülemeyen” olarak anılır.
 * Sanat ve edebiyat eserleri yalnız varlıkları, tarihleri ve konuları
 * doğrulanarak anıldı; telifli eserlerden alıntı yapılmadı.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 14.
 */

const SLUG = 'lgs-tarih-lozan-antlasmasi'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Milli Bir Destan: Ya İstiklal Ya Ölüm',
  order: 4,
  title: 'Lozan Antlaşması ve Millî Mücadele’nin Sanata Yansıması',
  subtitle:
    'Cephede kazanılan bağımsızlık Lozan’da uluslararası bir belgeye dönüştü. Aynı yıllarda yaşananlar bir marşa, romanlara ve bir anıta da dönüştü.',
  minutes: 50,
  kazanimlar: ['İTA.8.3.6', 'İTA.8.3.7'],
  kapsamNotu:
    'Lozan’ın maddeleri resmî Düstur metninden, Sevr–Lozan karşılaştırması Nutuk’tan, İstiklal Marşı 1921 tarihli resmî metinden birebir alıntılanmıştır. Çözülemeyen meselelerin sonraki gelişmeleri ilerideki bir derste işlenir.',
  prerequisites: [
    {
      topic: 'Sevr Antlaşması ve Misakımillî',
      why: 'Lozan’ın kazanımları, Sevr ile karşılaştırılarak ve Misakımillî ile ölçülerek analiz edilir.',
    },
    {
      topic: 'Büyük Taarruz ve Mudanya (önceki ders)',
      why: 'Lozan masasına Türkiye, Büyük Taarruz’un zaferi ve Mudanya Ateşkesi ile oturdu.',
    },
  ],
  outcomes: [
    'Lozan Konferansı’nın nasıl toplandığını ve hangi aşamalardan geçtiğini açıklayabileceksin.',
    'Lozan Antlaşması’nın kazanımlarını Sevr ve Misakımillî ile karşılaştırarak analiz edebileceksin.',
    'Lozan’da çözülemeyen meseleleri belirleyebileceksin.',
    'Millî Mücadele’nin olaylarının sanat ve edebiyat eserlerine yansımasına kanıtlar gösterebileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Masaya galip olarak oturmak',
    lead:
      'Mudanya Ateşkesi ile silahlar sustu. Sıra, savaşın sonucunu kalıcı bir barış antlaşmasına dönüştürmeye gelmişti.',
    body:
      'İtilaf Devletleri barış konferansı için Lozan’a hem Ankara’daki Büyük Millet Meclisi Hükûmeti’ni hem de İstanbul hükümetini çağırdı. İki ayrı hükümetin masaya oturması, milletin tek temsilcisi kim sorusunu yeniden gündeme getirdi. Büyük Millet Meclisi Kasım 1922’de saltanatı kaldırdı; Lozan’a Türkiye adına yalnız Ankara’nın heyeti gitti. Heyetin başında Hariciye Vekili **İsmet Paşa** vardı; yanında Rıza Nur Bey ve Hasan Bey bulunuyordu.\n\n' +
      '**Lozan Konferansı** 20 Kasım 1922’de açıldı. Görüşmeler çok çetin geçti; 4 Şubat 1923’te kesildi ve 23 Nisan 1923’te yeniden başladı. Sekiz ay süren iki dönemin sonunda **24 Temmuz 1923**’te Lozan Barış Antlaşması imzalandı ve Büyük Millet Meclisi antlaşmayı 23 Ağustos 1923’te onayladı.\n\n' +
      'Bu derste iki soruya cevap arayacağız: **Lozan Türkiye’ye neler kazandırdı, neler çözülemeden kaldı?** ve **Millî Mücadele’nin yaşananları sanata ve edebiyata nasıl yansıdı?**',
  },
  concepts: [
    { term: 'Konferans ve antlaşma', body: 'Konferans, devletlerin görüştüğü toplantıdır. Antlaşma ise bu görüşmelerin sonunda imzalanan ve tarafları bağlayan belgedir.' },
    { term: 'Kapitülasyon', body: 'Osmanlı Devleti’nin yabancılara verdiği ayrıcalıklar. Zamanla yabancıların Osmanlı mahkemelerinde yargılanmaması, bazı vergilerden muaf olması gibi bağımsızlığı zedeleyen haklara dönüşmüştü.' },
    { term: 'Azınlık', body: 'Bir ülkede sayıca az olan topluluk. Lozan’a göre Türkiye’de azınlık yalnız gayrimüslim (Müslüman olmayan) Türk vatandaşlarıdır.' },
    { term: 'Nüfus mübadelesi', body: 'İki ülke arasında belirli halkların karşılıklı olarak yer değiştirmesi. Türkiye ile Yunanistan 30 Ocak 1923’te ayrı bir sözleşme imzaladı.' },
    { term: 'Gayri askerî bölge', body: 'Asker, silah ve tahkimat bulundurulması sınırlanan bölge. Lozan’da Boğazlar ve Trakya sınırının iki yanı böyle bölgeler hâline getirildi.' },
  ],
  why: {
    question: 'Lozan neden Sevr’den bu kadar farklı oldu?',
    body:
      'Çünkü Sevr, yenilmiş ve işgal altındaki bir devlete masada dikte ettirilmişti. Lozan’a ise Türkiye, Sakarya’yı ve Büyük Taarruz’u kazanmış, doğu ve güney sınırlarını antlaşmalarla güvenceye almış bir devlet olarak gitti.\n\n' +
      'Mustafa Kemal Nutuk’ta bunu şöyle anlatır: Konferans masasında istenen şey, “zaten istihsal edilmiş olan” hakların usulen kabul edilmesinden başka bir şey değildi. Yani Lozan’daki kazanımların temeli cephede atılmıştı.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Mudanya’dan Lozan’a (1922–1923)',
    lead: 'Lozan tek bir gün değil, sekiz ay süren bir süreçtir. Aradaki kesintiye ve Meclis’teki tartışmalara dikkat et.',
    intro: 'Kronolojinin son satırları Lozan’dan sonra gelen gelişmeleri gösterir; bunların bazılarını ilerideki derslerde ayrıntılı işleyeceğiz.',
    items: [
      { title: '11 Ekim 1922 · Mudanya Ateşkesi', body: 'Savaş sona erdi; Doğu Trakya savaşmadan geri alındı.' },
      { title: 'Ekim–Kasım 1922 · Barış konferansına davet', body: 'İtilaf Devletleri hem Ankara’yı hem İstanbul’u Lozan’a çağırdı.' },
      { title: 'Kasım 1922 · Saltanatın kaldırılması', body: 'Büyük Millet Meclisi saltanatı kaldırdı; Türkiye’yi yalnız Ankara temsil edecekti. (Bu inkılabı ilerideki bir derste işleyeceğiz.)' },
      { title: '20 Kasım 1922 · Konferans açıldı', body: 'Türk heyetine İsmet Paşa başkanlık etti; İngiltere adına Lord Curzon konferansın başkanlığını üstlendi.' },
      { title: '30 Ocak 1923 · Mübadele sözleşmesi', body: 'Türkiye ile Yunanistan arasında nüfus mübadelesi sözleşmesi imzalandı.' },
      { title: '4 Şubat 1923 · Görüşmeler kesildi', body: 'Musul, kapitülasyonlar ve ekonomik meselelerde anlaşılamadı; Türk heyeti yurda döndü ve konu Meclis’te sert tartışmalara yol açtı.' },
      { title: '23 Nisan 1923 · İkinci dönem', body: 'Görüşmeler yeniden başladı; bu kez ekonomik ve malî konular öne çıktı.' },
      { title: '24 Temmuz 1923 · Lozan Barış Antlaşması', body: 'Antlaşma ve ekleri Lozan’da imzalandı.' },
      { title: '23 Ağustos 1923 · Meclis’in onayı', body: 'Büyük Millet Meclisi antlaşmayı ve eklerini onayladı (Kanun no 340).' },
      { title: 'Ekim 1923 · İstanbul’un boşaltılması', body: 'Barış yapıldıktan sonra İtilaf kuvvetleri İstanbul ve Boğazlar bölgesinden çekildi.' },
    ],
    takeaway:
      'Dikkat et: Lozan’da görüşmelerin kesilmesi bir başarısızlık değil, bir pazarlık gücü göstergesiydi. Türk heyeti Misakımillî’ye aykırı bir metni imzalamayı reddetti.',
    body:
      'Kronolojiyi iki dönem olarak oku. **Birinci dönemde** (Kasım 1922–Şubat 1923) İngiltere’nin temsilcisi Lord Curzon, Türk heyetine hazırlanmış bir metni kabul ettirmek istedi. İsmet Paşa ülkesini esarete mahkûm edecek bir belgeyi imzalamayacağını söyledi ve görüşmeler kesildi. **İkinci dönemde** (Nisan–Temmuz 1923) anlaşmazlıkların çoğu çözüldü; çözülemeyenler ise ileriye bırakıldı.\n\n' +
      'Konferans sürerken Ankara’da da bir tartışma yaşandı: Bazı milletvekilleri heyeti Misakımillî’den taviz vermekle suçladı. Bu tartışmalar, Lozan’ın her maddesinin Misakımillî ile ölçüldüğünü gösterir.',
  },
  map: {
    title: 'Şematik atlas: Lozan’da sınırlar, adalar, Boğazlar',
    intro: 'Katmanları sırayla aç: sınırlar, adalar ve Boğazlar. Kırmızı noktalar Lozan’da çözülemeyen ya da Türkiye dışında kalan yerleri gösterir.',
    map_label: 'Şematik gösterim · sınır ve uzaklık göstermez',
    layers: [
      { id: 'sinir', label: 'Sınırlar', description: 'Trakya, Suriye ve Irak sınırları.', active: true },
      { id: 'adalar', label: 'Adalar', description: 'Ege adaları ve Onikiadalar.', active: true },
      { id: 'bogazlar', label: 'Boğazlar', description: 'Gayri askerî bölge ve Boğazlar Komisyonu.', active: false },
    ],
    regions: [
      { label: 'KARADENİZ', x: 44, y: 6, tone: 'water' },
      { label: 'AKDENİZ', x: 30, y: 94, tone: 'water' },
      { label: 'ANADOLU', x: 60, y: 50, tone: 'land' },
    ],
    locations: [
      { id: 'ankara', label: 'Ankara', x: 38, y: 36, tone: 'brand', detail: 'Büyük Millet Meclisi’nin merkezi. Antlaşma 23 Ağustos 1923’te burada onaylandı.' },
      { id: 'edirne', label: 'Edirne · Karaağaç', x: 5, y: 9, layer: 'sinir', tone: 'brand', detail: 'Trakya sınırı Meriç Nehri oldu. Nutuk’a göre Karaağaç da Türkiye’de kaldı; ayrı bir protokolle düzenlendi.' },
      { id: 'hatay', label: 'Hatay', x: 55, y: 88, layer: 'sinir', tone: 'danger', detail: 'Suriye sınırı için 1921 Ankara Antlaşması’ndaki sınır kabul edildi. Bu yüzden Hatay sınırın dışında, Fransız yönetimindeki Suriye’de kaldı.' },
      { id: 'musul', label: 'Musul', x: 88, y: 86, layer: 'sinir', tone: 'danger', detail: 'Irak sınırı Lozan’da çözülemedi: Türkiye ile İngiltere dokuz ay içinde anlaşamazsa mesele Cemiyet-i Akvam’a götürülecekti.' },
      { id: 'imroz', label: 'İmroz ve Bozcaada', x: 2, y: 40, layer: 'adalar', tone: 'brand', detail: 'Çanakkale Boğazı’nın girişindeki bu iki ada Türkiye’de kaldı. Kıyıdan üç milden yakın adalar da Türkiye’ye ait olacaktı.' },
      { id: 'ege', label: 'Ege adaları · Yunanistan', x: 4, y: 54, layer: 'adalar', tone: 'danger', detail: 'Limni, Semadirek, Midilli, Sakız, Sisam ve Nikarya gibi adalar Yunanistan’a bırakıldı; bu adalarda askerî üs kurulması yasaklandı.' },
      { id: 'onikiada', label: 'Onikiadalar · İtalya', x: 14, y: 84, layer: 'adalar', tone: 'danger', detail: 'Rodos ve çevresindeki adalar ile Meis İtalya’ya bırakıldı.' },
      { id: 'istanbul', label: 'İstanbul Boğazı', x: 18, y: 19, layer: 'bogazlar', tone: 'accent', detail: 'Boğazların iki yakası gayri askerî bölge oldu; İstanbul’da 12.000 kişiyi geçmeyen bir kuvvet bulundurulabilecekti. Geçişleri denetleyecek uluslararası Boğazlar Komisyonu’nun başkanı bir Türk olacaktı.' },
      { id: 'canakkale', label: 'Çanakkale Boğazı', x: 6, y: 30, layer: 'bogazlar', tone: 'accent', detail: 'Çanakkale Boğazı’nın iki yakası da gayri askerî bölge oldu. Boğazlar Sözleşmesi Lozan’da ayrı bir belge olarak imzalandı.' },
    ],
    routes: [],
    insight:
      'Haritadaki kırmızı noktalara bak: Hatay, Musul ve bazı adalar Türkiye’nin dışında kaldı. Lozan büyük bir kazanımdır ama Misakımillî’nin bütün hedeflerini gerçekleştirmemiştir. İyi bir analiz ikisini birlikte görür.',
    source_note:
      'Yerler; Lozan Barış Antlaşması’nın Düstur’daki resmî metni (2, 3, 6, 12 ve 15. maddeler; Boğazlar Mukavelenamesi), Nutuk (15. bölüm) ve TDV İslâm Ansiklopedisi “Lozan Antlaşması” maddesi esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir.',
  },
  dataTable: {
    title: 'Lozan’ın kazanımlarını analiz et: konu konu',
    columns: ['Konu', 'Lozan’da ne kararlaştırıldı?', 'Misakımillî ile karşılaştır'],
    rows: [
      ['Trakya sınırı', 'Meriç Nehri sınır oldu; Karaağaç Türkiye’de kaldı.', 'Doğu Trakya kazanıldı; Batı Trakya dışarıda kaldı.'],
      ['Suriye sınırı', '1921 Ankara Antlaşması’ndaki sınır kabul edildi.', 'Hatay Suriye’de kaldı; mesele sonraya kaldı.'],
      ['Irak sınırı (Musul)', 'Türkiye ile İngiltere dokuz ay içinde görüşecek, anlaşamazlarsa Cemiyet-i Akvam’a gidilecekti.', 'Çözülemedi; ileriye bırakıldı.'],
      ['Adalar', 'İmroz, Bozcaada ve kıyıya üç milden yakın adalar Türkiye’de; diğer Ege adaları Yunanistan’a, Onikiadalar İtalya’ya bırakıldı.', 'Kısmen gerçekleşti.'],
      ['Kapitülasyonlar', 'Tamamen kaldırıldı (28. madde).', 'Tam bağımsızlık ilkesi gerçekleşti.'],
      ['Osmanlı borçları', 'Osmanlı’dan ayrılan devletler arasında paylaştırıldı; Türkiye’ye düşen pay taksitlerle ödenecekti.', 'Borçlar paylaştırılarak ödeme yükü hafifletildi.'],
      ['Azınlıklar', 'Yalnız gayrimüslim Türk vatandaşları azınlık sayıldı; hakları Türkiye tarafından güvence altına alındı.', 'Misakımillî’de kabul edilen çerçeveye uygun.'],
      ['Ordu', 'Trakya ve Boğazlar’daki gayri askerî bölgeler dışında hiçbir sınırlama konmadı.', 'Sevr’in ordu sınırlamaları tamamen ortadan kalktı.'],
      ['Boğazlar', 'Gayri askerî bölge; geçişleri başkanı Türk olan uluslararası bir komisyon denetleyecekti.', 'Egemenlik sınırlı kaldı; mesele sonra yeniden ele alınacaktı.'],
      ['Savaş tazminatı', 'Yunanistan Anadolu’da verdiği zararları tamir etmesi gerektiğini kabul etti; Türkiye tazminat isteğinden vazgeçti.', 'Meclis’te eleştirilen konulardan biri oldu.'],
    ],
    caption:
      'Tabloyu satır satır oku: Her satırda Lozan’ın kararını Misakımillî ile karşılaştır. Böylece “kazanılan”, “kısmen kazanılan” ve “çözülemeyen” konuları kendin ayırabilirsin.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Lozan’a giden yol ve sonuçları',
    lead: 'Lozan’ın kazanımları, masadan önce cephede hazırlanmıştı. Zincir, askerî zaferden kalıcı barışa giden yolu gösterir.',
    intro: 'Zincirin başı Lozan’ın neden toplandığını, ortası konferansın seyrini, sonu da antlaşmanın sonuçlarını anlatır.',
    steps: [
      { tur: 'sebep', title: 'Askerî zafer', body: 'Büyük Taarruz ve Mudanya ile Türkiye savaşı kazanmış, Sevr’in uygulanamayacağı kesinleşmişti.' },
      { tur: 'sebep', title: 'Kalıcı barış ihtiyacı', body: 'İstanbul ve Boğazlar hâlâ İtilaf kuvvetlerinin elindeydi; bu ancak bir barış antlaşmasıyla sona erebilirdi.' },
      { tur: 'gelisme', title: 'Davet ve saltanatın kaldırılması', body: 'İtilaf Devletleri iki hükümeti de çağırınca Meclis saltanatı kaldırdı; Türkiye’yi yalnız Ankara temsil etti.' },
      { tur: 'gelisme', title: 'Çetin görüşmeler', body: 'Birinci dönemde kapitülasyonlar, Musul ve ekonomik meselelerde anlaşılamadı; görüşmeler 4 Şubat 1923’te kesildi, 23 Nisan’da yeniden başladı.' },
      { tur: 'sonuc', title: 'Lozan Barış Antlaşması', body: '24 Temmuz 1923’te imzalandı; yeni Türk devletinin bağımsızlığı ve sınırları uluslararası alanda kabul edildi.' },
      { tur: 'sonraki-etki', title: 'Yeni devletin önü açıldı', body: 'İtilaf kuvvetleri Ekim 1923’te İstanbul’dan çekildi; Cumhuriyet ilan edilerek yeni devletin kuruluşu tamamlandı. Çözülemeyen meseleler sonraki yıllarda ele alındı.' },
    ],
    inference:
      'Temel çıkarım: Lozan, Millî Mücadele’nin askerî zaferini hukuki bir belgeye dönüştürdü. Sevr kâğıt üzerinde kalmıştı; Lozan ise yeni Türk devletinin uluslararası tapusu gibi oldu.',
    body:
      'Lozan’ın önemi üç başlıkta özetlenebilir:\n\n' +
      '- **Bağımsızlık:** Kapitülasyonlar kaldırıldı, orduya sınırlama konmadı, maliye yabancı denetiminden kurtuldu. Türkiye siyasi, ekonomik ve hukuki olarak tam bağımsız bir devlet olarak tanındı.\n' +
      '- **Sınırlar:** Doğu Trakya dahil bugünkü Türkiye topraklarının büyük kısmı güvenceye alındı; Sevr’deki Ermenistan ve özerk bölge hükümleri tamamen ortadan kalktı.\n' +
      '- **Açık kalan meseleler:** Musul (Irak sınırı), Hatay (Suriye sınırının sonucu) ve Boğazlar üzerindeki sınırlı egemenlik sonraya bırakıldı.\n\n' +
      'Dengeli bir analiz, Lozan’ı ne “her şeyin kazanıldığı” ne de “kaybedilen” bir antlaşma olarak görür. Lozan, günün şartları içinde Misakımillî’nin büyük ölçüde gerçekleştirildiği bir barıştır.',
  },
  comparison: {
    title: 'Sevr ve Lozan (Nutuk’taki karşılaştırmaya göre)',
    columns: ['Sevr (1920)', 'Lozan (1923)'],
    rows: [
      { label: 'Trakya sınırı', values: ['Çatalca’nın biraz ilerisi', 'Karaağaç dahil Meriç hattı'] },
      { label: 'İzmir', values: ['Yönetimi Yunanistan’a devredilecek, beş yıl sonra ilhak edilebilecekti', 'Bu mesele gündeme bile gelmedi'] },
      { label: 'Doğu Anadolu', values: ['Ermenistan sınırı ABD başkanının hakemliğine bırakıldı', 'Mesele tamamen ortadan kalktı'] },
      { label: 'Kapitülasyonlar', values: ['Yabancı bir komisyonun hazırlayacağı düzen kabul edilecekti', 'Hiçbir kapitülasyon kaydı yok'] },
      { label: 'Ordu', values: ['Toplam 50.700 kişilik jandarma ve özel birlik; yabancı kontrol komisyonları', 'Trakya ve Boğazlar’daki gayri askerî bölgeler dışında hiçbir sınırlama ve kontrol yok'] },
      { label: 'Maliye', values: ['Bütçe yabancı bir maliye komisyonunun onayına bağlı', 'Maliye üzerinde yabancı denetim yok; borçlar paylaştırıldı'] },
      { label: 'Boğazlar', values: ['Geniş bir bölgede asker bulundurma hakkı yalnız İtilaf Devletleri’nde', 'Gayri askerî bölge; hiçbir yerde İtilaf işgal kuvveti kalmayacak'] },
    ],
    insight:
      'Asıl fark: Sevr Türkiye’yi yabancı denetimine bağlıyordu; Lozan ise Türkiye’yi eşit bir devlet olarak tanıdı. Mustafa Kemal bu karşılaştırmayı Nutuk’ta madde madde yapar.',
  },
  traps: [
    {
      title: 'Lozan’da Misakımillî’nin tamamen gerçekleştiğini sanmak',
      wrong: 'Lozan Antlaşması ile Misakımillî’nin bütün hedefleri gerçekleşti.',
      right: 'Misakımillî’nin büyük bölümü gerçekleşti; ama Musul çözülemedi, Hatay Suriye sınırında kaldı, Batı Trakya ve bazı adalar dışarıda kaldı, Boğazlar üzerindeki egemenlik sınırlı oldu.',
      body: '“Büyük ölçüde” ile “tamamen” arasındaki farka dikkat et. Analiz sorularında çözülemeyen meseleleri de hatırla.',
    },
    {
      title: 'Lozan’daki azınlık tanımını karıştırmak',
      wrong: 'Lozan’a göre Türkiye’deki bütün etnik gruplar azınlık sayıldı.',
      right: 'Lozan’a göre Türkiye’de azınlık yalnız gayrimüslim (Müslüman olmayan) Türk vatandaşlarıdır.',
      body: 'Nutuk’ta bu düzenlemenin Misakımillî’de kabul edilen çerçeveye uygun olduğu belirtilir.',
    },
    {
      title: 'Mudanya ile Lozan’ı karıştırmak',
      wrong: 'İstanbul, Mudanya Ateşkesi ile İtilaf kuvvetlerinden kurtuldu.',
      right: 'Mudanya’ya göre İstanbul ve Boğazlar barışa kadar İtilaf kuvvetlerinde kaldı. İtilaf kuvvetleri Lozan’dan sonra, Ekim 1923’te çekildi.',
      body: 'Mudanya bir ateşkestir; Lozan ise kesin barıştır.',
    },
    {
      title: 'Millî Mücadele edebiyatını yalnız savaş sonrasına ait sanmak',
      wrong: 'Millî Mücadele’yi anlatan eserlerin hepsi savaş bittikten yıllar sonra yazıldı.',
      right: 'İstiklal Marşı 1921’de, Ateşten Gömlek 1922’de, savaş sürerken yazıldı. Yaban (1932) ve Kurtuluş Savaşı Destanı (yayımı 1965) gibi eserler ise sonraki yıllarda Millî Mücadele’yi yeniden anlattı.',
      body: 'Bir eserin olayla aynı dönemde mi, sonra mı yazıldığı, onu nasıl bir kanıt olarak kullanacağımızı etkiler.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Masadaki ve eserlerdeki kişiler',
    lead: 'Bir yanda Lozan’da pazarlık edenler, öbür yanda Millî Mücadele’yi sanata dönüştürenler.',
    intro: 'Kartlarda kişilerin görevlerini ve yaptıklarını görürsün.',
    figures: [
      {
        name: 'İsmet Paşa (İnönü)',
        period: '1922–1923 · Hariciye Vekili',
        position: 'Lozan’da Türk heyetinin başkanı',
        contribution: 'Misakımillî’ye aykırı bir metni imzalamayı reddetti; görüşmelerin kesilmesini göze aldı ve ikinci dönemde antlaşmayı imzaladı.',
        connections: ['Lozan Konferansı'],
        significance: 'Cephedeki zaferleri masada kalıcı kazanımlara dönüştüren başmüzakerecidir.',
      },
      {
        name: 'Rıza Nur Bey',
        period: '1922–1923 · Sinop milletvekili',
        position: 'Lozan’da Türk heyetinin üyesi',
        contribution: 'Heyetin ikinci temsilcisi olarak görüşmelere katıldı.',
        connections: ['Lozan Konferansı'],
        significance: 'Nutuk’ta Lozan heyetinin üyeleri arasında anılır.',
      },
      {
        name: 'Lord Curzon',
        period: '1922–1923 · İngiltere Dışişleri Bakanı',
        position: 'Lozan Konferansı’nın başkanı',
        contribution: 'Birinci dönemde Türk heyetine hazırlanmış bir metni kabul ettirmeye çalıştı; Türk heyeti reddedince konferanstan ayrıldı.',
        connections: ['Lozan Konferansı'],
        significance: 'Karşı tarafın en güçlü temsilcisidir; görüşmelerin ne kadar çetin geçtiğini simgeler.',
      },
      {
        name: 'Mehmet Âkif (Ersoy)',
        period: '1921 · Şair',
        position: 'İstiklal Marşı’nın şairi',
        contribution: 'İstiklal Marşı’nı “Kahraman Ordumuza” ithafıyla yazdı; şiir 12 Mart 1921’de Meclis’te kabul edildi.',
        connections: ['İstiklal Marşı'],
        significance: 'Millî Mücadele’nin inancını ve bağımsızlık kararlılığını savaşın içinde dizelere döken şairdir.',
      },
      {
        name: 'Halide Edib (Adıvar)',
        period: '1922 · Romancı',
        position: 'Ateşten Gömlek’in yazarı',
        contribution: 'Millî Mücadele’yi anlatan ilk roman olan Ateşten Gömlek’i savaş sürerken, 1922’de gazetede tefrika etti.',
        connections: ['Ateşten Gömlek'],
        significance: 'Millî Mücadele’yi yaşadığı günlerde romana dönüştüren yazardır.',
      },
      {
        name: 'Yakup Kadri (Karaosmanoğlu)',
        period: '1921–1932 · Romancı',
        position: 'Yaban ve Sodom ve Gomore’nin yazarı',
        contribution: 'İstanbul’da Millî Mücadele’yi destekleyen yazılar yazdı, 1921’de Anadolu’ya geçti. Sodom ve Gomore’de işgal yıllarının İstanbul’unu, Yaban’da Anadolu köylüsünü ve aydın ile halk arasındaki uzaklığı anlattı.',
        connections: ['Sodom ve Gomore', 'Yaban'],
        significance: 'Millî Mücadele’yi hem şehir hem köy açısından anlatan yazardır.',
      },
    ],
    takeaway:
      'Lozan’daki pazarlık ile romanlardaki anlatım aynı gerçeğe iki farklı yerden bakar: Biri bağımsızlığın hukukunu, öteki bağımsızlığın insanlarını anlatır.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-sanat`,
      title: 'Millî Mücadele sanata ve edebiyata nasıl yansıdı?',
      lead: 'İTA.8.3.7, Millî Mücadele’nin siyasi, sosyal ve kültürel olaylarının sanat ve edebiyat eserlerine yansımasına kanıt göstermeni ister. Kanıt, bir eserde olayın izini göstermektir.',
      blocks: [
        {
          id: `${SLUG}-sanat-anlatim`,
          type: 'prose',
          body:
            '**Bir eser nasıl kanıt olur?** Bir şiirde, romanda ya da anıtta bir olayın, bir duygunun ya da bir toplumsal değişimin izini bulabiliyorsak, o eser olayın sanata yansıdığının kanıtıdır. Ama dikkat: Sanat eseri bir tarih kitabı değildir. Olayları olduğu gibi değil, sanatçının duygusu ve bakışıyla anlatır. Bu yüzden eserler bize en çok **dönemin duygusunu ve insanların deneyimini** gösterir.\n\n' +
            '**Savaşın içinde yazılanlar.** İstiklal Marşı 1921’de, savaş sürerken yazıldı ve ilk kez “Kahraman Ordumuza” ithafıyla yayımlandı. Savaş yıllarında farklı bölgelerde farklı bestelerle okundu; bugünkü bestesi 1930’da resmîleşti. Halide Edib’in Ateşten Gömlek romanı 1922’de, Büyük Taarruz’dan hemen önceki aylarda gazetede tefrika edildi ve Millî Mücadele’yi anlatan ilk roman oldu.\n\n' +
            '**Sonradan geriye bakanlar.** Yakup Kadri’nin Sodom ve Gomore’si (1928) işgal altındaki İstanbul’un çözülüşünü, Yaban’ı (1932) ise Anadolu köyünde savaşı yaşayan köylüyü ve ona yabancı kalan aydını anlatır. Nâzım Hikmet’in Kurtuluş Savaşı Destanı (yayımı 1965) Millî Mücadele’yi destan biçiminde yeniden anlatır.\n\n' +
            '**Taşa ve bronza dönüşen hafıza.** Ankara Ulus’taki Zafer Anıtı, Avusturyalı heykeltıraş Heinrich Krippel tarafından yapıldı ve 24 Kasım 1927’de açıldı. Anıtta at üstünde Mustafa Kemal’in yanında iki asker ve sırtında top mermisi taşıyan bir kadın figürü vardır. Bu kadın figürü, Tekâlif-i Millîye’nin ve cepheye cephane taşıyan Anadolu kadınlarının taşa işlenmiş hâlidir.',
        },
        {
          id: `${SLUG}-sanat-tablo`,
          type: 'table',
          interactive: true,
          title: 'Olaydan esere: yansımanın kanıtları',
          columns: ['Olay ya da durum', 'Eser', 'Yansıma (kanıt)'],
          rows: [
            ['İşgaller ve bağımsızlık mücadelesi', 'İstiklal Marşı (Mehmet Âkif, 1921)', '“Hangi çılgın bana zincir uracakmış?” dizesi esarete karşı direnişi; “Garbın âfâkını sarmışsa çelik zırhlı duvar” dizesi Batılı devletlerin askerî gücünü anlatır.'],
            ['Cephe, fedakârlık ve yaralı gaziler', 'Ateşten Gömlek (Halide Edib, 1922)', 'Roman, savaşta ağır yaralanan bir askerin hastanede yazdığı hatıralar biçiminde kurulmuştur.'],
            ['İşgal altındaki İstanbul', 'Sodom ve Gomore (Yakup Kadri, 1928)', 'Mütareke yıllarının İstanbul’unu ve işgalcilerle iş birliği yapanların çöküşünü anlatır.'],
            ['Anadolu köylüsü ve savaş', 'Yaban (Yakup Kadri, 1932)', 'Savaşı Anadolu köyünde yaşayan köylüleri ve aydın ile halk arasındaki uzaklığı anlatır.'],
            ['Halkın ve kadınların cepheye desteği', 'Zafer Anıtı (Heinrich Krippel, Ankara, 1927)', 'Sırtında top mermisi taşıyan kadın figürü, halkın cepheye desteğini simgeler.'],
            ['Bütün Millî Mücadele', 'Kurtuluş Savaşı Destanı (Nâzım Hikmet, yayımı 1965)', 'Millî Mücadele’yi destan biçiminde yeniden anlatır.'],
          ],
          caption:
            'Tablodaki “yansıma” sütunu, eserde olayın nasıl göründüğünü söyler. Kendi kanıtını bulmak için bir eserde olayın, mekânın ya da duygunun izini ara.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste Lozan’dan iki madde, Nutuk’tan bir karşılaştırma ve İstiklal Marşı’ndan iki kıta okuyacaksın. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Lozan’ın maddeleri 1923’te Düstur’da yayımlanan resmî metinden alınmıştır; dili eski olduğu için sözcük açıklamalarını kullan. İstiklal Marşı’nın metni, 21 Mart 1921’de Cerîde-i Resmiye’de yayımlanan metindir.\n\n' +
      'İlk dört metin birebir alıntıdır. Beşinci metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Lozan Antlaşması’nın 28. maddesi',
        kunye: 'Lozan Sulh Muahedenamesi, 24 Temmuz 1923, 28. madde. Metin: Düstur, III. Tertip, Cilt 5 (resmî Türkçe metin).',
        nitelik: 'Birebir alıntı.',
        metin:
          'MADDE 28 — Tarafeyni Aliyeyni âkideyn Türkiyede Kapitülâsyonların kâffei nokatı nazardan tamamen ilgasını her biri kendisine taallûku cihetinden kabul ettiklerini beyan ederler.',
        soru: 'Bu madde neyi kaldırıyor? Neden Lozan’ın en önemli kazanımlarından biri sayılır?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Tarafeyn-i âliyeyn-i âkideyn”: antlaşmayı imzalayan yüksek taraflar. “Kâffe-i nokta-i nazar”: bütün bakımlardan. “İlga”: kaldırma. “Taallûk”: ilgili olma. “Beyan etmek”: açıklamak.' },
          { title: 'Söyleneni bul', body: 'Antlaşmayı imzalayan devletlerin her biri, Türkiye’deki kapitülasyonların bütün bakımlardan tamamen kaldırıldığını kabul ediyor.' },
          { title: 'Önemini yorumla', body: 'Kapitülasyonlar yabancılara yargı ve vergi ayrıcalıkları tanıyordu. Bunların kalkması, Türkiye’nin kendi ülkesinde herkese kendi yasalarını uygulayabilmesi, yani hukuki ve ekonomik bağımsızlık demektir.' },
        ],
        cevap: 'Madde, Türkiye’deki kapitülasyonları bütün bakımlardan kaldırır. Kapitülasyonlar yüzyıllardır bağımsızlığı zedelediği için bu madde, Türkiye’nin hukuki ve ekonomik olarak tam bağımsız bir devlet olarak tanınması anlamına gelir.',
        cikarim: 'Nutuk’ta Mustafa Kemal Lozan için “Kapitüler hiçbir kayıt yoktur!” diye yazar. Ünlem işareti bile bu kazanıma verilen değeri gösterir.',
      },
      {
        tur: 'birincil',
        baslik: 'Nutuk’ta Sevr ile Lozan’ın ordu hükümleri',
        kunye: 'Mustafa Kemal, Nutuk (1927), 15. bölüm: “Mondros Mütarekesi’nden sonra Türkiye’ye yapılan dört sulh teklifi arasında bir mukayese”, 8. başlık (Ahkâm-ı askeriye). Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı. Aynı başlığın Sevr ve Lozan bölümlerinden alınan cümleler “…” ile birleştirilmiştir.',
        metin:
          'Sevr’de: a) Türkiye’nin kuvâ-yı müsellahası şu erkamı tecavüz etmeyecektir. … Jandarma zâbitânı meyânında 1.500’ü geçmemek üzere ecnebi zâbitân bulunacaktır. … Lozan’da: Trakya ve Boğazlar’da gayr-i askerî hale ifrâğ olunan menâtıka ait tahdîdattan mâadâ hiçbir kayıt yoktur. Hatta Boğaziçi’nin iki tarafındaki gayr-i askerî mıntıkada 12.000 asker bulundurabilmek hakkını muhafaza etmişizdir. Bu menâtık için bile hiçbir kontrol kabul edilmemiştir.',
        soru: 'Sevr ile Lozan arasında ordu konusundaki fark nedir? Mustafa Kemal bu farkı neden bu kadar ayrıntılı göstermek istemiş olabilir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Kuvâ-yı müsellaha”: silahlı kuvvetler. “Erkam”: sayılar. “Tecavüz etmemek”: aşmamak. “Ecnebi zâbitân”: yabancı subaylar. “Gayr-i askerî hale ifrâğ olunan menâtık”: askerden arındırılan bölgeler. “Tahdîdat”: sınırlamalar. “Mâada”: dışında.' },
          { title: 'Sevr’i özetle', body: 'Sevr ordunun sayısını sınırlıyor ve jandarmaya yabancı subaylar yerleştiriyordu.' },
          { title: 'Lozan’ı özetle', body: 'Lozan’da yalnız Trakya ve Boğazlar’daki bazı bölgeler askerden arındırıldı; bunun dışında hiçbir sınırlama ve hiçbir yabancı kontrol yoktu. Boğaziçi’nde bile 12.000 asker bulundurma hakkı korundu.' },
          { title: 'Amacı yorumla', body: 'Mustafa Kemal, Lozan’ın bir “taviz” değil, Sevr’e göre çok büyük bir kazanç olduğunu belgelerle göstermek istemiş olabilir.' },
        ],
        cevap: 'Sevr Türk ordusunu sayıca sınırlıyor ve yabancı subayların denetimine bağlıyordu; Lozan’da ise gayri askerî bölgeler dışında hiçbir sınırlama ve hiçbir yabancı kontrol yoktu. Mustafa Kemal bu karşılaştırmayla Lozan’ın Sevr’e göre ne kadar büyük bir kazanç olduğunu somut olarak göstermek istemiştir.',
        cikarim: 'Bir antlaşmanın değerini ölçmenin iyi bir yolu, onu önceki tekliflerle karşılaştırmaktır. Nutuk’taki bu karşılaştırma, Lozan’ın kazanımlarını analiz etmek için birinci elden bir araçtır.',
      },
      {
        tur: 'birincil',
        baslik: 'Lozan Antlaşması’nın 3. maddesi (Irak sınırı)',
        kunye: 'Lozan Sulh Muahedenamesi, 24 Temmuz 1923, 3. madde, “Saniyen — Irak ile” bölümü. Metin: Düstur, III. Tertip, Cilt 5 (resmî Türkçe metin).',
        nitelik: 'Birebir alıntı.',
        metin:
          'Saniyen — Irak ile: Türkiye ile Irak arasındaki hudut dokuz ay zarfında Türkiye ile Büyük Britanya arasında sureti muslihanede tayin edilecektir. Tayin olunan müddet zarfında iki Hükümet arasında itilâf husule gelemediği takdirde, ihtilâf Cemiyeti Akvam Meclisine ârzolunacaktır.',
        soru: 'Bu madde Musul meselesi hakkında ne söylüyor? Bu maddeden Lozan’ın her konuyu çözmediği sonucuna nasıl ulaşırsın?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Saniyen”: ikinci olarak. “Hudut”: sınır. “Zarfında”: içinde. “Suret-i musalihane”: barışçı yol, uzlaşma. “İtilâf husule gelmek”: anlaşma sağlanmak. “İhtilaf”: anlaşmazlık. “Cemiyet-i Akvam”: Milletler Cemiyeti.' },
          { title: 'Söyleneni bul', body: 'Irak sınırı Lozan’da çizilmemiş; Türkiye ile İngiltere’nin dokuz ay içinde görüşmesi, anlaşamazlarsa meselenin Milletler Cemiyeti’ne götürülmesi kararlaştırılmıştır.' },
          { title: 'Sonucu çıkar', body: 'Sınırın ileriye bırakılması, Musul meselesinin Lozan’da çözülemediğini gösterir.' },
        ],
        cevap: 'Madde Irak sınırını çizmiyor; meseleyi Türkiye ile İngiltere arasındaki görüşmelere, anlaşma olmazsa Milletler Cemiyeti’ne bırakıyor. Bu da Musul meselesinin Lozan’da çözülemediğini gösterir.',
        cikarim: 'Bir antlaşmada bir konunun “ileride belirlenecek” diye bırakılması, o konunun çözülemediğinin kanıtıdır. Nutuk da Irak sınırı için “Lozan’da: Halli tehir edilmiştir” der.',
      },
      {
        tur: 'birincil',
        baslik: 'İstiklal Marşı’ndan iki kıta',
        kunye: 'Mehmet Âkif, İstiklal Marşı, 3. ve 4. kıtalar. Metin: 21 Mart 1921’de Cerîde-i Resmiye’de yayımlanan resmî metin (TBMM yayını, 2021; Vikikaynak).',
        nitelik: 'Birebir alıntı.',
        metin:
          'Ben ezelden beridir hür yaşadım, hür yaşarım / Hangi çılgın bana zincir uracakmış? Şaşarım! / Kükremiş sel gibiyim; bendimi çiğner aşarım; / Yırtarım dağları, enginlere sığmam, taşarım. // Garbın âfâkını sarmışsa çelik zırhlı duvar, / Benim iman dolu göğsüm gibi serhaddim var. / Ulusun, korkma! Nasıl böyle bir imanı boğar, / “Medeniyet” dediğin tek dişi kalmış canavar?',
        soru: 'Bu iki kıtada Millî Mücadele’nin hangi olaylarının ve duygularının izlerini görüyorsun? Kanıt olarak hangi dizeleri gösterirsin?',
        adimlar: [
          { title: 'Sözcükleri çöz', body: '“Ezel”: başlangıcı olmayan zaman. “Bent”: set, engel. “Garp”: Batı. “Âfâk”: ufuklar. “Serhat”: sınır. “Medeniyet”: uygarlık.' },
          { title: 'Olayla eşleştir', body: '“Hangi çılgın bana zincir uracakmış?” dizesi, işgallere ve Sevr’in öngördüğü esarete karşı direnişi yansıtır.' },
          { title: 'Olayla eşleştir', body: '“Garbın âfâkını sarmışsa çelik zırhlı duvar” dizesi, Batılı devletlerin güçlü ordularını ve donanmalarını; “iman dolu göğsüm gibi serhaddim var” dizesi, silah eksikliğine rağmen inançla direnen milleti anlatır.' },
          { title: 'Duyguyu bul', body: 'Kıtalarda korkusuzluk, bağımsızlık tutkusu ve düşmanın gücüne rağmen kazanılacağına olan inanç vardır.' },
        ],
        cevap: 'Kıtalarda işgallere ve esarete karşı direniş (“zincir”), Batılı devletlerin askerî gücü (“çelik zırhlı duvar”) ve silah eksikliğine rağmen inançla direnen millet (“iman dolu göğsüm”) yansır. Bu dizeler, Millî Mücadele’nin olaylarının ve duygusunun şiire yansımasının kanıtıdır.',
        cikarim: 'Bir şiiri tarihsel kanıt olarak kullanırken olayları değil, olaylar karşısındaki duyguyu arıyoruz. Şiirin savaş sürerken yazılmış olması, o günlerin duygusunu birinci elden yansıttığını gösterir.',
      },
      {
        tur: 'ikincil',
        baslik: 'Lozan üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Lozan Antlaşması 24 Temmuz 1923’te imzalandı ve kapitülasyonları kaldırdı. Antlaşma, yeni Türk devletinin bağımsızlığını bütün dünyaya kabul ettirdi. Ancak Musul ve Boğazlar gibi bazı meselelerin ileriye bırakılması, Lozan’ın bir başarısızlık olduğunu gösterir.',
        soru: 'Metindeki olguları ve yorumları ayır. Son cümledeki yargı dengeli midir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaylardan sonra yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguları ayır', body: 'Antlaşmanın 24 Temmuz 1923’te imzalanması ve kapitülasyonları kaldırması olgudur (Lozan, 28. madde).' },
          { title: 'Yorumları ayır', body: '“Bağımsızlığı bütün dünyaya kabul ettirdi” ve “bir başarısızlık olduğunu gösterir” yargılardır.' },
          { title: 'Son cümleyi değerlendir', body: 'Bazı meselelerin ileriye bırakılması, antlaşmanın eksik yanlarını gösterir ama bütün antlaşmayı “başarısızlık” saymak için yeterli değildir. Kapitülasyonların kalkması, ordu ve maliye üzerinde hiçbir yabancı denetim kalmaması ve Sevr’in ortadan kalkması gibi kazanımlar görmezden gelinmiştir. Yargı dengeli değildir.' },
        ],
        cevap: 'Olgular: 24 Temmuz 1923’te imzalanması ve kapitülasyonları kaldırması. Yorumlar: bağımsızlığı dünyaya kabul ettirdiği ve başarısızlık olduğu. Son cümle dengeli değildir; eksik yanları doğru tespit eder ama büyük kazanımları görmezden gelerek aşırı bir sonuca varır.',
        cikarim: 'Bir parçadaki eksiklikten bütün hakkında hüküm vermek aşırı genellemedir. Dengeli analiz, kazanımları ve eksikleri birlikte tartar.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Kazanımları sınıflandır',
      prompt: 'Lozan’ın şu sonuçlarını “siyasi”, “ekonomik” ve “hukuki” olarak sınıflandır: kapitülasyonların kaldırılması, Osmanlı borçlarının paylaştırılması, Trakya sınırının Meriç olması, yabancıların Türk yasalarına tabi olması.',
      steps: [
        { title: 'Siyasi', body: 'Trakya sınırının Meriç olması (sınırlar ve toprak).' },
        { title: 'Ekonomik', body: 'Osmanlı borçlarının paylaştırılması; kapitülasyonların vergi ayrıcalıklarının kalkması.' },
        { title: 'Hukuki', body: 'Kapitülasyonların yargı ayrıcalıklarının kalkması; yabancıların Türk yasalarına tabi olması.' },
      ],
      answer: 'Siyasi: Meriç sınırı · Ekonomik: borçların paylaştırılması, vergi ayrıcalıklarının kalkması · Hukuki: yargı ayrıcalıklarının kalkması, yabancıların Türk yasalarına tabi olması.',
      takeaway: 'Kapitülasyonların kalkması hem ekonomik hem hukuki bir kazanımdır. Bazı sonuçlar birden fazla gruba girebilir; gerekçeni yaz.',
    },
    {
      title: 'Çözülemeyen meseleleri belirle',
      prompt: 'Lozan’da çözülemeyen ya da Türkiye açısından sınırlı kalan üç meseleyi yaz ve her birinin nedenini belirt.',
      steps: [
        { title: 'Musul', body: 'Irak sınırı dokuz aylık görüşmeye, anlaşma olmazsa Milletler Cemiyeti’ne bırakıldı (3. madde).' },
        { title: 'Hatay', body: 'Suriye sınırı olarak 1921 Ankara Antlaşması’ndaki sınır kabul edildiği için Hatay dışarıda kaldı.' },
        { title: 'Boğazlar', body: 'Boğazlar gayri askerî bölge oldu ve geçişleri uluslararası bir komisyon denetledi; Türkiye’nin egemenliği sınırlı kaldı.' },
      ],
      answer: 'Musul (sınır ileriye bırakıldı), Hatay (1921 sınırı kabul edildi), Boğazlar (uluslararası komisyon ve gayri askerî bölge).',
      takeaway: 'Bu meselelerin sonraki yıllarda nasıl çözüldüğünü Atatürk dönemi dış politika dersinde göreceğiz.',
    },
    {
      title: 'Bir esere kanıt göster',
      prompt: 'Ankara’daki Zafer Anıtı’nda sırtında top mermisi taşıyan bir kadın figürü vardır. Bu figür Millî Mücadele’nin hangi olayının ya da durumunun sanata yansımasına kanıttır?',
      steps: [
        { title: 'Figürü tanımla', body: 'Sırtında top mermisi taşıyan bir kadın.' },
        { title: 'Olayla eşleştir', body: 'Millî Mücadele’de kadınlar kağnılarla ve sırtlarında cepheye cephane taşıdı; Tekâlif-i Millîye ile halk cepheyi destekledi.' },
        { title: 'Kanıtı ifade et', body: 'Figür, halkın ve özellikle kadınların cepheye desteğinin heykele yansımasıdır.' },
      ],
      answer: 'Halkın, özellikle kadınların cepheye cephane taşıyarak Millî Mücadele’ye katılmasının ve Tekâlif-i Millîye ile gösterilen dayanışmanın heykele yansımasıdır.',
      takeaway: '“Kanıt göster” diyen sorularda eserin hangi ayrıntısının hangi olaya karşılık geldiğini açıkça eşleştir.',
    },
  ],
  questionClue: {
    concept: 'Soruda Lozan’ın hangi yönü soruluyor?',
    statement: 'Soru bir madde, bir karşılaştırma ya da bir eser verip kazanım, eksiklik ya da yansıma sorabilir.',
    clues: [
      '“Kapitülasyonlar kaldırıldı”, “yabancı denetim yok” → tam bağımsızlık kazanımı',
      '“Dokuz ay”, “Milletler Cemiyeti”, “Irak sınırı” → Musul, çözülemeyen mesele',
      '“Başkanı Türk olan komisyon”, “gayri askerî bölge” → Boğazlar',
      '“Yalnız gayrimüslimler” → Lozan’daki azınlık tanımı',
      '“Zincir”, “çelik zırhlı duvar”, “Kahraman Ordumuza” → İstiklal Marşı’nda Millî Mücadele’nin yansıması',
    ],
    reasoning: 'Önce sorunun kazanım mı, eksiklik mi, yoksa sanata yansıma mı sorduğunu belirle. Sonra verilen bilgiyi Sevr ya da Misakımillî ile karşılaştır.',
    boundary: 'Dikkat: Lozan’ı değerlendirirken “Misakımillî’nin tamamı gerçekleşti” ya da “Lozan başarısızdır” gibi mutlak yargılardan kaçın.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'İTA.8.3.6 bir “analiz eder”, İTA.8.3.7 bir “kanıtlar gösterir” kazanımıdır. Bu yüzden sorular bir madde, bir karşılaştırma tablosu ya da bir eserden bölüm verip yorum isteyebilir. Aşağıdaki kalıplar kazanımlarla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Lozan’ın bir maddesinden kazanım çıkarma',
      'Sevr ile Lozan’ı karşılaştırma',
      'Lozan’da çözülemeyen meseleleri belirleme',
      'Bir şiir, roman ya da anıttaki ayrıntıyı Millî Mücadele’nin bir olayıyla eşleştirme',
    ],
  },
  checkpoints: [
    {
      prompt: 'İtilaf Devletleri’nin Lozan’a hem Ankara’yı hem İstanbul’u çağırması hangi sonucu doğurdu?',
      hint: 'Bir millet masaya iki ayrı hükümetle oturabilir mi?',
      answer: 'Bu davet, milleti kimin temsil ettiği sorusunu gündeme getirdi. Büyük Millet Meclisi Kasım 1922’de saltanatı kaldırdı ve Türkiye’yi Lozan’da yalnız Ankara’nın heyeti temsil etti.',
    },
    {
      prompt: 'Nutuk’taki “zaten istihsal edilmiş olan hususâtın usulen ifade ve tasdiki” ifadesi Lozan hakkında neyi anlatır?',
      answer: 'Lozan’da istenen hakların cephede zaten kazanıldığını, masada yalnız bunların resmen kabul edilmesinin istendiğini anlatır. Yani Lozan’ın başarısının temeli askerî zaferdir.',
    },
    {
      prompt: 'İstiklal Marşı’nın 1921’de, Ateşten Gömlek’in 1922’de yazılmış olması onları kanıt olarak neden değerli kılar?',
      answer: 'Çünkü bu eserler savaş sürerken, olayları yaşayan insanlar tarafından yazıldı. Bu yüzden dönemin duygusunu, korkusunu ve umudunu birinci elden yansıtırlar.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.3.6, Lozan’ın sağladığı kazanımları analiz etmeni ister: kazanımları konu konu ayırmanı, Sevr ve Misakımillî ile karşılaştırmanı. İTA.8.3.7 ise Millî Mücadele’nin olaylarının sanat ve edebiyat eserlerine yansımasına kanıt göstermeni ister. Bu kazanımlara dayanan bir soru, bir madde ya da bir eserden alınmış bir bölüm verip yorum isteyebilir.',
    measures: [
      'Lozan’ın siyasi, ekonomik ve hukuki kazanımlarını ayırt etme',
      'Lozan’ı Sevr ve Misakımillî ile karşılaştırma',
      'Çözülemeyen meseleleri belirleme',
      'Bir eserdeki ayrıntıyı Millî Mücadele’nin bir olayıyla eşleştirme',
    ],
  },
  simulation: {
    title: 'Mini LGS: Bir madde, bir kazanım',
    passage:
      'Lozan Antlaşması’nın 28. maddesine göre antlaşmayı imzalayan devletler, Türkiye’deki kapitülasyonların bütün bakımlardan tamamen kaldırıldığını kabul etmiştir. Osmanlı Devleti döneminde yabancılar kapitülasyonlar sayesinde Osmanlı mahkemelerinde yargılanmıyor ve bazı vergileri ödemiyordu.',
    question: 'Bu bilgilere göre 28. maddenin Türkiye’ye sağladığı kazanım aşağıdakilerden hangisidir?',
    options: [
      { text: 'Türkiye, ülkesinde bulunan herkese kendi yasalarını uygulayabilir hâle gelmiştir.', explanation: 'Doğru. Yargı ve vergi ayrıcalıklarının kalkması, Türk yasalarının yabancılar dahil herkese uygulanması demektir.' },
      { text: 'Türkiye’nin bütün sınırları kesinleşmiştir.', explanation: '28. madde sınırlarla ilgili değildir; üstelik Irak sınırı Lozan’da kesinleşmemiştir.' },
      { text: 'Osmanlı borçlarının tamamı silinmiştir.', explanation: 'Metinde borçlardan söz edilmez; Lozan’da borçlar silinmemiş, paylaştırılmıştır.' },
      { text: 'Türkiye’de yabancıların bulunması yasaklanmıştır.', explanation: 'Madde yabancıların ayrıcalıklarını kaldırır, Türkiye’de bulunmalarını yasaklamaz.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü maddenin “kazanımını” soruyor. Metindeki ikinci cümle, kapitülasyonların neyi engellediğini söyler; kazanım bu engelin kalkmasıdır.',
    critical_point: 'Dördüncü seçenek çekicidir, çünkü yabancılarla ilgilidir. Ama madde ayrıcalıkları kaldırır, yabancıları değil.',
    takeaway: 'Madde sorularında maddenin kapsamının dışına çıkma: Kapitülasyon maddesi sınır ya da borç hakkında bilgi vermez.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Lozan ve Millî Mücadele’nin hafızası',
    range: '1921–1932 ve sonrası',
    body:
      'Mudanya’dan sonra İtilaf Devletleri Lozan’a Ankara ile birlikte İstanbul’u da çağırdı; Büyük Millet Meclisi saltanatı kaldırdı ve Türkiye’yi yalnız Ankara temsil etti. İsmet Paşa başkanlığındaki heyetle 20 Kasım 1922’de açılan konferans 4 Şubat 1923’te kesildi, 23 Nisan’da yeniden başladı ve 24 Temmuz 1923’te Lozan Barış Antlaşması imzalandı; Meclis antlaşmayı 23 Ağustos 1923’te onayladı. Kapitülasyonlar kaldırıldı, orduya ve maliyeye yabancı denetim kalmadı, Trakya sınırı Meriç oldu, Osmanlı borçları paylaştırıldı. Musul, Hatay ve Boğazlar meseleleri ise ileriye kaldı. Millî Mücadele; savaş içinde yazılan İstiklal Marşı ve Ateşten Gömlek’te, sonraki yıllarda Yaban, Sodom ve Gomore ve Kurtuluş Savaşı Destanı gibi eserlerde, Ankara’daki Zafer Anıtı’nda sanata dönüştü.',
    turning_points: [
      '12 Mart 1921 · İstiklal Marşı',
      '1922 · Ateşten Gömlek',
      '20 Kasım 1922 · Lozan Konferansı açıldı',
      '24 Temmuz 1923 · Lozan Barış Antlaşması',
      '24 Kasım 1927 · Zafer Anıtı',
      '1932 · Yaban',
    ],
  },
  summary: [
    '**Lozan Konferansı:** 20 Kasım 1922’de açıldı; 4 Şubat 1923’te kesildi; 23 Nisan’da yeniden başladı. Türk heyeti: İsmet Paşa, Rıza Nur, Hasan Bey.',
    '**Antlaşma:** 24 Temmuz 1923’te imzalandı; Meclis 23 Ağustos 1923’te onayladı.',
    '**Kazanımlar:** Kapitülasyonlar kaldırıldı; orduya ve maliyeye yabancı denetim yok; Trakya sınırı Meriç (Karaağaç dahil); borçlar paylaştırıldı; azınlık yalnız gayrimüslimler.',
    '**Çözülemeyenler:** Musul (Irak sınırı ileriye bırakıldı), Hatay (1921 sınırı), Boğazlar (uluslararası komisyon, gayri askerî bölge).',
    '**Sanata yansıma:** İstiklal Marşı (1921), Ateşten Gömlek (1922), Sodom ve Gomore (1928), Yaban (1932), Kurtuluş Savaşı Destanı (yayımı 1965), Zafer Anıtı (1927).',
  ],
  quizzes: [
    {
      question: 'Lozan Antlaşması ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['Kapitülasyonlar tamamen kaldırılmıştır.', 'Musul Türkiye sınırları içinde kalmıştır.', 'Türk ordusunun sayısı sınırlandırılmıştır.', 'Hatay Türkiye’ye katılmıştır.'],
      answer_index: 0,
      explanation: '28. maddeye göre kapitülasyonlar tamamen kaldırıldı. Musul meselesi ileriye bırakıldı, orduya sınırlama konmadı, Hatay Suriye sınırında kaldı.',
    },
    {
      question: 'Lozan’da Türkiye ile Irak arasındaki sınır nasıl düzenlenmiştir?',
      options: ['Türkiye ile İngiltere arasında görüşmeye bırakılmıştır.', 'Kesin olarak çizilmiştir.', 'Fransa’nın hakemliğine bırakılmıştır.', 'Misakımillî’ye göre çizilmiştir.'],
      answer_index: 0,
      explanation: '3. maddeye göre sınır dokuz ay içinde Türkiye ile İngiltere arasında belirlenecek, anlaşma olmazsa Milletler Cemiyeti’ne götürülecekti.',
    },
    {
      question: 'Lozan’a göre Türkiye’de kimler azınlık sayılmıştır?',
      options: ['Gayrimüslim Türk vatandaşları', 'Bütün etnik gruplar', 'Yalnız yabancı uyruklular', 'Müslüman olmayan yabancılar'],
      answer_index: 0,
      explanation: 'Lozan’a göre azınlık yalnız Müslüman olmayan Türk vatandaşlarıdır.',
    },
    {
      question: 'Aşağıdaki eserlerden hangisi Millî Mücadele sürerken yazılmıştır?',
      options: ['Ateşten Gömlek', 'Yaban', 'Sodom ve Gomore', 'Kurtuluş Savaşı Destanı'],
      answer_index: 0,
      explanation: 'Ateşten Gömlek 1922’de, savaş sürerken tefrika edildi. Sodom ve Gomore 1928’de, Yaban 1932’de yayımlandı; Kurtuluş Savaşı Destanı 1965’te yayımlandı.',
    },
    {
      question: '“Garbın âfâkını sarmışsa çelik zırhlı duvar” dizesi Millî Mücadele’nin hangi durumunu yansıtır?',
      options: ['Batılı devletlerin güçlü ordu ve donanmalarını', 'Tekâlif-i Millîye’yi', 'Maarif Kongresi’ni', 'Nüfus mübadelesini'],
      answer_index: 0,
      explanation: '“Garp” Batı, “çelik zırhlı duvar” ise Batılı devletlerin güçlü askerî gücü anlamına gelir. Dize, bu güce karşı inançla direnen milleti anlatır.',
    },
  ],
  next: ['Atatürk İlkeleri', 'Siyasi Alanda İnkılaplar: Saltanatın Kaldırılması ve Cumhuriyet'],
})

export default lesson
