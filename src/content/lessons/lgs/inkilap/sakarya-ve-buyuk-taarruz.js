import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.3 Millî Bir Destan · 3. ders
 * Kazanımlar: İTA.8.3.4 · İTA.8.3.5
 * Dayanak   : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   İTA.8.3.4 — Millî birlik, beraberlik ve dayanışma için sorumluluk almanın önemi vurgulanır.
 *   İTA.8.3.5 — Kars Antlaşması, Ankara Antlaşması ve Mudanya Ateşkes Antlaşması üzerinde durulur.
 *
 * KAPSAM KARARI
 * Başkumandanlık Kanunu (Kanun no 144) ve Gazilik–Müşirlik kanunu (no 153) TBMM
 * kanun arşivinden; Tekâlif-i Millîye emirleri, “Hatt-ı müdafaa” emri ve Büyük
 * Taarruz’un hazırlığı Nutuk’tan; Mudanya maddeleri TTK yayınındaki (İ. Soysal)
 * metinden alındı. Ankara Antlaşması’nın 7. maddesi yalnız özetlendi (elimizdeki
 * tam metin kaynak künyesi taşımıyor). Mustafa Kemal’in rolüne ilişkin
 * çıkarımlar, onun kendi kararlarına ve belgelere dayandırıldı.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 13.
 */

const SLUG = 'lgs-tarih-sakarya-ve-buyuk-taarruz'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Milli Bir Destan: Ya İstiklal Ya Ölüm',
  order: 3,
  title: 'Tekâlif-i Millîye, Sakarya ve Büyük Taarruz: Bütün Bir Milletin Savaşı',
  subtitle:
    'Ordu Sakarya’ya çekilmişti, düşman Ankara’ya yaklaşıyordu. Millet elindekini paylaştı, Mustafa Kemal ordunun başına geçti; önce Sakarya’da duruldu, bir yıl sonra Büyük Taarruz’la Akdeniz’e varıldı.',
  minutes: 50,
  kazanimlar: ['İTA.8.3.4', 'İTA.8.3.5'],
  kapsamNotu:
    'Başkumandanlık Kanunu TBMM arşivinden, Tekâlif-i Millîye emirleri ve “Hatt-ı müdafaa” emri Nutuk’tan, Mudanya maddeleri Türk Tarih Kurumu yayınından birebir alıntılanmıştır. Mustafa Kemal’in rolüne ilişkin çıkarımlar kendi kararlarına ve belgelere dayandırılmıştır.',
  prerequisites: [
    {
      topic: 'Batı Cephesi ve Kütahya–Eskişehir (önceki ders)',
      why: 'Bu ders, ordunun Sakarya’nın doğusuna çekildiği noktadan başlar.',
    },
    {
      topic: 'Misakımillî ve Sevr',
      why: 'Kars, Ankara ve Mudanya antlaşmalarının önemi, Misakımillî’ye ne kadar yaklaştırdıklarıyla ölçülür.',
    },
  ],
  outcomes: [
    'Tekâlif-i Millîye Emirleri’nin içeriğini, uygulanışını ve millî dayanışma açısından önemini analiz edebileceksin.',
    'Sakarya Meydan Muharebesi’nin kazanılmasında Mustafa Kemal’in kararlarının rolünü belgelere dayanarak açıklayabileceksin.',
    'Büyük Taarruz’un hazırlanışında ve başarısında Mustafa Kemal’in rolüne ilişkin çıkarım yapabileceksin.',
    'Kars, Ankara ve Mudanya antlaşmalarının Türkiye’ye kazandırdıklarını karşılaştırabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Temmuz 1921: Ordu Sakarya’nın doğusunda',
    lead:
      'Kütahya–Eskişehir’de yenilen Türk ordusu 25 Temmuz 1921’e kadar büyük kısmıyla Sakarya Nehri’nin doğusuna çekilmişti. Yunan ordusunun Ankara’ya yürümesi bekleniyordu.',
    body:
      'Geri çekilme, Mustafa Kemal’in bilerek verdiği bir karardı: Ordu dağılmadan toplanacak, düşman ise ikmal merkezlerinden uzaklaşacaktı. Ama Eskişehir gibi önemli bir şehrin bırakılması Meclis’te ve halk arasında büyük bir kaygı yarattı. Meclis’te ordunun başına Mustafa Kemal’in geçmesi istendi.\n\n' +
      'Mustafa Kemal **Başkomutanlığı** 5 Ağustos 1921’de, Meclis’in yetkilerini kullanmak ve **üç ayla sınırlı** olmak şartıyla kabul etti. Hemen ardından 7–8 Ağustos’ta **Tekâlif-i Millîye Emirleri**’ni yayımladı: Ordunun eksikleri, milletin elindekilerle tamamlanacaktı. 23 Ağustos–13 Eylül 1921’de 22 gün 22 gece süren **Sakarya Meydan Muharebesi** kazanıldı.\n\n' +
      'Sakarya’dan sonra diplomasi hızlandı: doğu sınırını kesinleştiren **Kars** ve Fransa’yı güneyden çeken **Ankara** antlaşmaları imzalandı. Bir yıl süren hazırlıktan sonra 26 Ağustos 1922’de **Büyük Taarruz** başladı; 9 Eylül’de İzmir’e girildi. 11 Ekim 1922’de imzalanan **Mudanya Ateşkesi** ile savaş sona erdi ve Doğu Trakya savaşmadan geri alındı.',
  },
  concepts: [
    { term: 'Başkomutan (Başkumandan)', body: 'Bütün orduların en üst komutanı. Meclis bu görevi 5 Ağustos 1921’de Mustafa Kemal’e, Meclis’in yetkilerini kullanmak üzere ve üç aylık süreyle verdi.' },
    { term: 'Tekâlif-i Millîye', body: 'Kelime anlamı “millî yükümlülükler”. Ordunun ihtiyaçlarını karşılamak için halktan istenen mal, hizmet ve katkıları düzenleyen emirler.' },
    { term: 'Meydan muharebesi', body: 'İki ordunun büyük kısmının katıldığı, geniş bir alanda yapılan ve savaşın gidişini belirleyen muharebe.' },
    { term: 'Taarruz', body: 'Saldırı. Büyük Taarruz, Türk ordusunun Yunan ordusunu Anadolu’dan çıkarmak için başlattığı genel saldırıdır.' },
    { term: 'Ateşkes (mütareke)', body: 'Savaşan tarafların çarpışmayı durdurmak için yaptığı anlaşma. Barış antlaşması değildir; kesin barış daha sonra yapılır.' },
  ],
  why: {
    question: 'Bir savaşı yalnız ordu mu kazanır?',
    body:
      'Mustafa Kemal’e göre hayır. Nutuk’ta savaşın “iki ordunun değil, iki milletin” bütün varlığıyla karşı karşıya gelmesi olduğunu söyler. Sakarya öncesinde ordunun giyecek, yiyecek, silah ve taşıt eksiği vardı; bu eksikleri devletin kasası değil, milletin kendisi karşıladı.\n\n' +
      'Bu yüzden bu derste iki şeyi birlikte inceleyeceğiz: **milletin sorumluluk alarak nasıl dayanıştığını** ve **Mustafa Kemal’in hangi kararlarla savaşı kazanılabilir hâle getirdiğini**.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Sakarya’dan Mudanya’ya (1921–1922)',
    lead: 'Kronoloji iki büyük muharebe ve üç antlaşma etrafında döner. Aralarındaki bir yıllık hazırlık dönemine dikkat et.',
    intro: 'Sakarya bir savunma savaşıdır; Büyük Taarruz ise bir saldırı. Aradaki bir yılda ordu yeniden kuruldu ve diplomaside önemli adımlar atıldı.',
    items: [
      { title: '18 Temmuz 1921 · Geri çekilme kararı', body: 'Mustafa Kemal Karacahisar’da İsmet Paşa’ya ordunun gerekirse Sakarya’nın doğusuna kadar çekilebileceği direktifini verdi.' },
      { title: '5 Ağustos 1921 · Başkumandanlık Kanunu', body: 'Meclis, Başkomutanlığı Mustafa Kemal’e Meclis’in yetkileriyle ve üç ay süreyle verdi.' },
      { title: '7–8 Ağustos 1921 · Tekâlif-i Millîye Emirleri', body: 'On emirle ordunun ihtiyaçları halktan karşılanmaya başlandı; her kazada Tekâlif-i Millîye Komisyonu kuruldu.' },
      { title: '23 Ağustos–13 Eylül 1921 · Sakarya Meydan Muharebesi', body: '22 gün 22 gece süren muharebeden sonra Yunan ordusu Sakarya’nın doğusundan çekildi.' },
      { title: '19 Eylül 1921 · Gazi ve Müşir', body: 'Büyük Millet Meclisi, Mustafa Kemal’e “Gazi” unvanını ve Müşir (Mareşal) rütbesini verdi.' },
      { title: '13 Ekim 1921 · Kars Antlaşması', body: 'Ermenistan, Azerbaycan ve Gürcistan Sovyet cumhuriyetleriyle, Sovyet Rusya’nın katılımıyla imzalandı; doğu sınırı kesinleşti.' },
      { title: '20 Ekim 1921 · Ankara Antlaşması', body: 'Fransa ile imzalandı; Fransız birlikleri güneyden çekildi ve Güney Cephesi kapandı.' },
      { title: 'Haziran 1922 · Taarruz kararı', body: 'Mustafa Kemal taarruza karar verdi; karar yalnız birkaç komutanla paylaşıldı ve gizli tutuldu.' },
      { title: '26 Ağustos 1922 · Büyük Taarruz', body: 'Mustafa Kemal’in Kocatepe’den yönettiği taarruz sabah 5.30’da topçu ateşiyle başladı.' },
      { title: '30 Ağustos 1922 · Başkomutan Meydan Muharebesi', body: 'Yunan ordusunun ana kuvvetleri kuşatılıp yok edildi; Yunan başkomutanı General Trikopis esir alındı.' },
      { title: '9 Eylül 1922 · İzmir', body: 'Türk ordusu İzmir’e girdi; Mustafa Kemal’in verdiği “ilk hedef” olan Akdeniz’e ulaşıldı.' },
      { title: '11 Ekim 1922 · Mudanya Ateşkesi', body: 'Savaş sona erdi; Doğu Trakya savaşmadan Büyük Millet Meclisi Hükûmeti’ne bırakıldı.' },
    ],
    takeaway:
      'Dikkat et: Sakarya (1921) bir savunma zaferi, Büyük Taarruz (1922) bir saldırı zaferidir. Sakarya’dan sonra Türk ordusu bir daha geri çekilmedi.',
    body:
      'Kronolojiyi “kim, neyi karşıladı?” sorusuyla oku. **Ağustos 1921’de** ordunun eksiklerini millet Tekâlif-i Millîye ile karşıladı; ordunun komutasını ise Meclis’in yetkileriyle Mustafa Kemal üstlendi. **Sakarya’dan sonra** kazanılan askerî güven diplomasiye yansıdı: Doğuda Kars, güneyde Ankara antlaşmaları imzalandı; böylece bütün güç batıda toplanabildi.\n\n' +
      '**1922’de** Mustafa Kemal taarruz için ordunun tam hazır olmasını bekledi. Meclis’te “ordu kıpırdayamaz” diyenler olsa da acele etmedi. Taarruz başladığında beş gün içinde kesin sonuç alındı, iki hafta içinde İzmir’e girildi ve ardından Mudanya’da savaş masada sona erdi.',
  },
  map: {
    title: 'Şematik atlas: Sakarya’dan Akdeniz’e, Akdeniz’den Mudanya’ya',
    intro: 'Katmanları sırayla aç: Önce Sakarya savunmasını, sonra Büyük Taarruz’u, en son Mudanya Ateşkesi’yle geri alınan Doğu Trakya’yı gör.',
    map_label: 'Şematik gösterim · cephe hattı, sınır ve uzaklık göstermez',
    layers: [
      { id: 'sakarya', label: 'Sakarya 1921', description: 'Yunan ilerleyişi ve Sakarya savunması.', active: true },
      { id: 'taarruz', label: 'Büyük Taarruz 1922', description: 'Kocatepe’den İzmir’e.', active: true },
      { id: 'mudanya', label: 'Mudanya 1922', description: 'Ateşkes ve Doğu Trakya.', active: false },
    ],
    regions: [
      { label: 'KARADENİZ', x: 56, y: 6, tone: 'water' },
      { label: 'MARMARA DENİZİ', x: 16, y: 30, tone: 'water' },
      { label: 'EGE DENİZİ', x: 1, y: 62, tone: 'water' },
      { label: 'DOĞU TRAKYA', x: 16, y: 14, tone: 'land' },
    ],
    locations: [
      { id: 'ankara', label: 'Ankara', x: 90, y: 48, tone: 'brand', detail: 'Büyük Millet Meclisi’nin merkezi. Sakarya’da Yunan ordusunun hedefi Ankara’ydı.' },
      { id: 'eskisehir', label: 'Eskişehir', x: 60, y: 52, layer: 'sakarya', tone: 'danger', detail: 'Kütahya–Eskişehir’den sonra Yunan ordusunun eline geçti. Yunan ordusu Ağustos 1921’de buradan doğuya, Sakarya’ya yürüdü.' },
      { id: 'sakarya', label: 'Sakarya', x: 76, y: 60, layer: 'sakarya', tone: 'brand', detail: '23 Ağustos–13 Eylül 1921: 22 gün 22 gece süren meydan muharebesi. Mustafa Kemal “Hatt-ı müdafaa yoktur, sath-ı müdafaa vardır” emrini verdi.' },
      { id: 'kocatepe', label: 'Kocatepe · 26 Ağustos 1922', x: 60, y: 84, layer: 'taarruz', tone: 'brand', detail: 'Mustafa Kemal Büyük Taarruz’u Afyonkarahisar’ın güneybatısındaki bu tepeden yönetti. Taarruz sabah 5.30’da başladı.' },
      { id: 'dumlupinar', label: 'Dumlupınar · 30 Ağustos', x: 46, y: 72, layer: 'taarruz', tone: 'brand', detail: 'Yunan ana kuvvetleri 30 Ağustos’ta bu bölgede kuşatılıp yok edildi. Bu muharebeye Başkomutan Meydan Muharebesi adı verildi.' },
      { id: 'izmir', label: 'İzmir · 9 Eylül 1922', x: 12, y: 86, layer: 'taarruz', tone: 'accent', detail: 'Türk ordusu 9 Eylül 1922’de İzmir’e girdi. “İlk hedef” olan Akdeniz’e ulaşılmıştı.' },
      { id: 'mudanya', label: 'Mudanya · 11 Ekim 1922', x: 36, y: 40, layer: 'mudanya', tone: 'accent', detail: 'İsmet Paşa ile İngiliz, Fransız ve İtalyan generalleri arasında ateşkes burada imzalandı.' },
      { id: 'istanbul', label: 'İstanbul', x: 40, y: 24, layer: 'mudanya', tone: 'danger', detail: 'Mudanya’ya göre İstanbul ve Boğazlar, barış yapılıncaya kadar İtilaf Devletleri’nin elinde kalacaktı.' },
      { id: 'edirne', label: 'Edirne', x: 6, y: 6, layer: 'mudanya', tone: 'accent', detail: 'Doğu Trakya, Edirne ile birlikte Meriç Nehri’ne kadar Türk yönetimine bırakıldı. Edirne’de Türk yönetimi 25 Kasım 1922’de kuruldu.' },
    ],
    routes: [
      { from: 'eskisehir', to: 'sakarya', label: 'Yunan ilerleyişi · Ağustos 1921', layer: 'sakarya' },
      { from: 'kocatepe', to: 'dumlupinar', label: '26–30 Ağustos', layer: 'taarruz' },
      { from: 'dumlupinar', to: 'izmir', label: 'Akdeniz’e', layer: 'taarruz', tone: 'accent' },
    ],
    insight:
      'Haritada iki hareketin yönünü karşılaştır: 1921’de düşman doğuya, Ankara’ya doğru ilerliyor; 1922’de Türk ordusu batıya, Akdeniz’e doğru ilerliyor. Bir yıl içinde savaşın yönü tamamen tersine döndü.',
    source_note:
      'Yerler ve tarihler; Nutuk (12–13. bölümler), Türk Tarih Kurumu yayını Mudanya Silah Bırakışımı Sözleşmesi metni ve tarihçesi (İ. Soysal), TBMM kanun arşivi ve Harita Genel Müdürlüğü yayını esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir.',
  },
  dataTable: {
    title: 'Tekâlif-i Millîye Emirleri: millet neyi, ne kadar verdi?',
    columns: ['Emir', 'Ne istendi?', 'Nasıl?', 'Neyi gösteriyor?'],
    rows: [
      ['1', 'Her kazada bir Tekâlif-i Millîye Komisyonu kurulması', 'Toplanan malzemenin orduya dağıtımını komisyonlar düzenleyecekti.', 'Yardımlar dağınık değil, düzenli bir örgütle toplandı.'],
      ['2', 'Her haneden bir kat çamaşır, bir çift çorap ve çarık', 'Her ev hazırlayıp komisyona teslim edecekti.', 'Yükü tek tek her aile paylaştı.'],
      ['3', 'Bez, kumaş, deri, nal, semer gibi malzemenin yüzde kırkı', 'Tüccar ve halktan; bedeli sonradan ödenmek üzere', 'Ordunun giyim ve donanım ihtiyacı karşılandı.'],
      ['4', 'Buğday, un, et, şeker, yağ, tuz gibi yiyeceklerin yüzde kırkı', 'Bedeli sonradan ödenmek üzere', 'Cephedeki askerin beslenmesi güvenceye alındı.'],
      ['5', 'Halkın elindeki taşıtlarla ayda bir kez 100 kilometreye kadar askerî taşıma', 'Ücretsiz', 'Ordunun ulaşım eksiği halkın arabalarıyla kapatıldı.'],
      ['6', 'Sahipsiz kalmış mallardan ordunun işine yarayanlar', 'Ordu adına el konuldu', 'Hiçbir kaynak boşa bırakılmadı.'],
      ['7', 'Halkın elindeki savaşa elverişli bütün silah ve cephane', 'Üç gün içinde teslim', 'Bütün silahlar tek bir orduda toplandı.'],
      ['8', 'Benzin, yağ, lastik, telefon malzemesi gibi teknik malzemenin yüzde kırkı', 'El konuldu', 'Modern savaşın teknik ihtiyaçları da düşünüldü.'],
      ['9', 'Demirci, marangoz, saraç gibi ustaların ve atölyelerin tespiti', 'Kayıt altına alındı', 'Esnafın emeği de savunmanın parçası oldu.'],
      ['10', 'Araba, kağnı ve yük hayvanlarının yüzde yirmisi', 'El konuldu', 'Cephane ve erzak cepheye taşınabildi.'],
    ],
    caption:
      'Tablo, Nutuk’taki emir listesinin sadeleştirilmiş özetidir. Emirlerin uygulanmasını denetlemek için İstiklal Mahkemeleri Kastamonu, Samsun, Konya, Eskişehir bölgelerine gönderildi ve Ankara’da da bir mahkeme bulunduruldu.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Sakarya zaferine giden yol: sebep, gelişme, sonuç',
    lead: 'Sakarya’nın kazanılması tek bir karara bağlı değildir. Zincir, askerî yenilgiden zafere ve oradan diplomasiye nasıl gidildiğini gösterir.',
    intro: 'Zincirin başı zor durumu, ortası alınan kararları ve muharebeyi, sonu da zaferin sonuçlarını anlatır.',
    steps: [
      { tur: 'sebep', title: 'Kütahya–Eskişehir yenilgisi', body: 'Ordu Sakarya’nın doğusuna çekildi; Eskişehir ve geniş bir bölge düşmana bırakıldı, Meclis’te kaygı büyüdü.' },
      { tur: 'sebep', title: 'Ordunun eksikleri', body: 'Mustafa Kemal’e göre Yunan ordusu asker, tüfek, makineli tüfek ve top bakımından üstündü; Türk tümenlerinin taşıtları eksik olduğu için hareket kabiliyetleri zayıftı.' },
      { tur: 'gelisme', title: 'Başkomutanlık', body: '5 Ağustos 1921’de Meclis yetkilerini üç aylığına Başkomutan Mustafa Kemal’e devretti; ordunun yönetimi tek elde toplandı.' },
      { tur: 'gelisme', title: 'Tekâlif-i Millîye', body: '7–8 Ağustos’ta yayımlanan on emirle ordunun giyim, yiyecek, silah ve taşıt eksikleri milletin katkısıyla tamamlanmaya başlandı.' },
      { tur: 'gelisme', title: 'Sakarya savunması', body: '23 Ağustos–13 Eylül 1921’de 22 gün 22 gece süren muharebede “sath-ı müdafaa” anlayışıyla direnildi, sonra karşı taarruza geçildi.' },
      { tur: 'sonuc', title: 'Yunan ordusu çekildi', body: 'Yunan ordusu taarruz gücünü yitirdi ve geri çekildi. Meclis Mustafa Kemal’e Gazi unvanını ve Müşir rütbesini verdi.' },
      { tur: 'sonraki-etki', title: 'Diplomasi hızlandı', body: 'Kars (13 Ekim) ve Ankara (20 Ekim 1921) antlaşmaları imzalandı. Türk ordusu Sakarya’dan sonra bir daha geri çekilmedi ve bir yıl sonra taarruza geçti.' },
    ],
    inference:
      'Temel çıkarım: Sakarya’yı üç şey birlikte kazandırdı: Meclis’in yetkilerini tek elde toplaması, milletin Tekâlif-i Millîye ile ordunun arkasında durması ve Mustafa Kemal’in savunma anlayışı. Bunlardan biri eksik olsaydı sonucun ne olacağını kesin bilemeyiz; ama üçünün birlikte olduğu açıktır.',
    body:
      'Sakarya’nın sonuçlarını maddeler hâlinde hatırla:\n\n' +
      '- **Askerî:** Yunan ordusu taarruz gücünü yitirdi; Türk ordusu savunmadan saldırıya geçme hazırlığına başladı.\n' +
      '- **Siyasi:** Meclis Mustafa Kemal’e Gazi unvanını ve Müşir rütbesini verdi (19 Eylül 1921).\n' +
      '- **Diplomatik:** Doğuda Kars Antlaşması, güneyde Fransa ile Ankara Antlaşması imzalandı.\n' +
      '- **Moral:** Kütahya–Eskişehir’den sonra sarsılan güven yeniden kuruldu.\n\n' +
      'Nutuk’ta Mustafa Kemal, Ankara Antlaşması’nın imzalanmasını Sakarya’ya bağlar: Fransız temsilcisinin kesin karar için “daha büyücek bir eser” beklediğini, antlaşmanın da Sakarya’dan 37 gün sonra imzalandığını yazar.',
  },
  comparison: {
    title: 'Sakarya ve Büyük Taarruz',
    columns: ['Sakarya Meydan Muharebesi', 'Büyük Taarruz'],
    rows: [
      { label: 'Zaman', values: ['23 Ağustos–13 Eylül 1921', '26 Ağustos–9 Eylül 1922'] },
      { label: 'Savaşın türü', values: ['Savunma, ardından karşı taarruz', 'Önceden planlanmış genel taarruz'] },
      { label: 'Mustafa Kemal’in kilit kararı', values: ['Geri çekilip orduyu korumak; “sath-ı müdafaa” anlayışı; Tekâlif-i Millîye', 'Ordu tam hazır olana kadar beklemek; taarruzu gizli hazırlamak; düşmanın en hassas kanadına yüklenmek'] },
      { label: 'Nereden yönetildi?', values: ['Cephede, kaburga kemiği kırık olmasına rağmen', 'Kocatepe’den'] },
      { label: 'Sonuç', values: ['Yunan ordusu çekildi; Gazi unvanı ve Müşir rütbesi', 'Yunan ordusu beş günde yenildi; İzmir’e girildi'] },
      { label: 'Diplomatik yansıma', values: ['Kars ve Ankara antlaşmaları', 'Mudanya Ateşkesi; Lozan’a giden yol'] },
    ],
    insight:
      'Asıl fark: Sakarya’da amaç düşmanı durdurmak, Büyük Taarruz’da ise düşmanı yok etmekti. Sakarya’da zaman kazanıldı, Büyük Taarruz’da bu zaman kullanıldı.',
  },
  traps: [
    {
      title: 'Tekâlif-i Millîye’yi bütün mallara el konulması sanmak',
      wrong: 'Tekâlif-i Millîye ile halkın bütün malına karşılıksız el konuldu.',
      right: 'Emirler belirli oranlar koydu: Birçok malın yüzde kırkı, taşıt ve hayvanların yüzde yirmisi istendi. Bez, kumaş ve yiyecek gibi malların bedeli sonradan ödenmek üzere alındı.',
      body: 'Tekâlif-i Millîye hem bir dayanışma hem de bir yükümlülüktü: Uygulanması İstiklal Mahkemeleri ile denetlendi. Sorularda bu iki yönü birlikte düşün.',
    },
    {
      title: 'Başkomutanlığı sınırsız bir yetki sanmak',
      wrong: 'Başkomutan Mustafa Kemal, Meclis’ten bağımsız ve süresiz bir yetkiyle ordunun başına geçti.',
      right: 'Meclis, yetkilerini Meclis adına kullanmak üzere ve üç ay süreyle devretti; bu süreyi Mustafa Kemal kendisi istedi. Meclis gerekirse yetkiyi süre dolmadan geri alabilecekti.',
      body: 'Mustafa Kemal bu süre sınırını, “millî egemenliğin en sadık hizmetkârı” olduğunu göstermek için istediğini söyler. Yetki daha sonra Meclis kararlarıyla uzatıldı.',
    },
    {
      title: 'Mudanya’yı barış antlaşması sanmak',
      wrong: 'Mudanya ile Türk–Yunan savaşı barışla sonuçlandı ve İstanbul Türklere teslim edildi.',
      right: 'Mudanya bir ateşkestir. Doğu Trakya Türklere bırakıldı; ama İstanbul ve Boğazlar barış yapılıncaya kadar İtilaf Devletleri’nin elinde kaldı. Kesin barış Lozan’da yapıldı.',
      body: 'Mudanya’nın büyük önemi, Doğu Trakya’nın savaşmadan geri alınmasıdır.',
    },
    {
      title: 'Sakarya ile Büyük Taarruz’u karıştırmak',
      wrong: 'Sakarya Meydan Muharebesi, Türk ordusunun Yunan ordusunu Anadolu’dan çıkardığı son taarruzdur.',
      right: 'Sakarya (1921) bir savunma savaşıdır. Yunan ordusunu Anadolu’dan çıkaran genel taarruz 26 Ağustos 1922’de başlayan Büyük Taarruz’dur.',
      body: '“Savunma”, “22 gün 22 gece”, “Gazi unvanı” → Sakarya. “Kocatepe”, “Başkomutan Meydan Muharebesi”, “İzmir” → Büyük Taarruz.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Kararları ve rolleriyle kişiler',
    lead: 'Bu dönemde savaşı ve diplomasiyi kimlerin yürüttüğünü, kararlarıyla birlikte gör.',
    intro: 'Kartlarda her kişinin görevi ve o görevde verdiği kararlar yer alır.',
    figures: [
      {
        name: 'Mustafa Kemal Paşa',
        period: '1921–1922 · Başkomutan',
        position: 'Büyük Millet Meclisi Başkanı ve Başkomutan',
        contribution: 'Başkomutanlığı üç aylık süre şartıyla kabul etti; Tekâlif-i Millîye Emirleri’ni yayımladı; Sakarya’yı cephede yönetti. 1922’de taarruz kararını gizlice verdi, planı hazırlattı ve Büyük Taarruz’u Kocatepe’den yönetti.',
        connections: ['Sakarya', 'Büyük Taarruz', 'Tekâlif-i Millîye'],
        significance: 'Sakarya’dan sonra Meclis tarafından “Gazi” unvanı ve Müşir rütbesi verilen Başkomutandır.',
      },
      {
        name: 'İsmet Paşa (İnönü)',
        period: '1921–1922 · Batı Cephesi Komutanı',
        position: 'Batı Cephesi Komutanı',
        contribution: 'Sakarya’da ve Büyük Taarruz’da cephe komutanı olarak görev yaptı. Mudanya’da Büyük Millet Meclisi Hükûmeti’ni temsil etti ve ateşkesi imzaladı.',
        connections: ['Büyük Taarruz', 'Mudanya Ateşkesi'],
        significance: 'Savaşın hem cephedeki hem de masadaki son aşamasında görev alan komutandır.',
      },
      {
        name: 'Fevzi Paşa (Çakmak)',
        period: '1921–1922 · Erkân-ı Harbiye-i Umumiye Reisi',
        position: 'Genelkurmay Başkanı',
        contribution: 'Büyük Taarruz planını İsmet Paşa ile birlikte inceledi; taarruz kararını bilen birkaç kişiden biriydi.',
        connections: ['Büyük Taarruz'],
        significance: 'Taarruzun planlanmasında Mustafa Kemal’in en yakın yardımcılarındandır.',
      },
      {
        name: 'Kâzım Karabekir Paşa',
        period: '1921 · Doğu Cephesi Komutanı',
        position: 'Kars Antlaşması’nda Türk heyetinin başkanı',
        contribution: 'Kars Antlaşması’nı Büyük Millet Meclisi Hükûmeti adına imzalayanların başındaydı.',
        connections: ['Kars Antlaşması'],
        significance: 'Doğu sınırını askerî zaferle açan ve diplomatik olarak kesinleştiren komutandır.',
      },
      {
        name: 'Franklin-Bouillon',
        period: '1921 · Fransız temsilci',
        position: 'Fransa hükümetinin temsilcisi',
        contribution: 'Haziran 1921’de Ankara’ya gelerek Mustafa Kemal ile görüştü; Sakarya’dan sonra 20 Ekim 1921’de Ankara Antlaşması’nı imzaladı.',
        connections: ['Ankara Antlaşması'],
        significance: 'Nutuk’a göre onun imzaladığı antlaşmayla millî amaçlar ilk kez bir Batılı devlet tarafından onaylandı.',
      },
      {
        name: 'General Trikopis',
        period: '1922 · Yunan ordusu komutanı',
        position: 'Yunan ordusunda başkomutanlık görevini yürüten general',
        contribution: 'Başkomutan Meydan Muharebesi’nden sonra esir alındı.',
        connections: ['Başkomutan Meydan Muharebesi'],
        significance: 'Esir düşmesi, Yunan ordusunun beş günde nasıl bir yenilgiye uğradığını gösterir.',
      },
    ],
    takeaway:
      'Bu dönemin kahramanları yalnız komutanlar değildir: Tekâlif-i Millîye ile çorabını, çarığını, buğdayını ve kağnısını cepheye gönderen milyonlarca insan da bu zaferin ortağıdır.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-tekalif`,
      title: 'Tekâlif-i Millîye’yi analiz et: dayanışma ve sorumluluk',
      lead: 'İTA.8.3.4 bir “analiz eder” kazanımıdır. Tekâlif-i Millîye’yi parçalarına ayırıp neyi, nasıl ve neden istediğini inceleyeceğiz.',
      blocks: [
        {
          id: `${SLUG}-tekalif-anlatim`,
          type: 'prose',
          body:
            '**Neden gerekti?** Kütahya–Eskişehir’den sonra ordunun asker, silah, giyecek, yiyecek ve özellikle taşıt eksiği vardı. Meclis hükümetinin bunları satın alacak parası yoktu. Tek kaynak milletin kendisiydi.\n\n' +
            '**Nasıl düzenlendi?** Mustafa Kemal, Başkomutan olarak Meclis’ten aldığı yetkiyle 7–8 Ağustos 1921’de on emir yayımladı. Her kazada bir komisyon kuruldu; istenecek mallar, oranlar ve süreler tek tek belirlendi. Bu emirler bir kanun gibi uygulandı; uygulanmasını denetlemek için İstiklal Mahkemeleri de görevlendirildi.\n\n' +
            '**Millet nasıl karşıladı?** Aileler çorap, çamaşır ve çarık hazırladı; köylüler buğdayını, esnaf kumaşını ve derisini, ustalar emeğini verdi; kağnılarla cepheye cephane ve erzak taşındı. Taşıma işinde kadınlar da büyük görev üstlendi.\n\n' +
            '**Ne gösteriyor?** Tekâlif-i Millîye üç şeyi birlikte gösterir:\n\n' +
            '- **Dayanışma:** Yük her haneye ve her mesleğe paylaştırıldı; bir kişinin değil, bütün milletin savaşı oldu.\n' +
            '- **Sorumluluk:** Cepheden uzaktaki köylü de “ben ne yapabilirim?” sorusuna cevap verdi. Nutuk’taki ifadeyle köyde, evinde, tarlasında bulunan herkes kendini savaşan asker gibi görevli hissedecekti.\n' +
            '- **Örgütlenme:** Yardımlar rastgele değil; oranları, süreleri ve komisyonlarıyla düzenli bir sistemle toplandı.\n\n' +
            'Program bu kazanımda **millî birlik, beraberlik ve dayanışma için sorumluluk almanın önemini** vurgular. Bugün de bir afet ya da zor günde toplumun dayanışması aynı ilkeye dayanır: Herkes gücü oranında sorumluluk alır.',
        },
        {
          id: `${SLUG}-tekalif-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: Kırk–yirmi–üç gün',
          body: 'Mal ve yiyeceklerin çoğunda yüzde kırk, taşıt ve hayvanlarda yüzde yirmi, silah ve cephanede üç gün. Her hane: bir kat çamaşır, bir çift çorap, bir çift çarık.',
        },
      ],
    },
    {
      id: `${SLUG}-buyuk-taarruz`,
      title: 'Büyük Taarruz: bir yıllık hazırlık, beş günlük sonuç',
      lead: 'İTA.8.3.5, Büyük Taarruz’un başarısında Mustafa Kemal’in rolüne ilişkin çıkarım yapmanı ister. Nutuk’taki bilgilerden onun kararlarını çıkaralım.',
      blocks: [
        {
          id: `${SLUG}-buyuk-taarruz-anlatim`,
          type: 'prose',
          body:
            '**Beklemek de bir karardı.** Sakarya’dan sonra Meclis’te taarruzun neden geciktiğini soranlar, hatta “ordu kıpırdayamaz” diyenler oldu. Mustafa Kemal ordunun eksiklerini tamamlamadan taarruz etmedi. Taarruz kararını Haziran 1922’nin ortalarında verdi ve bunu yalnız cephe komutanı, Genelkurmay Başkanı ve Millî Savunma Vekili ile paylaştı.\n\n' +
            '**Plan.** Nutuk’a göre plan, Türk ordusunun ana gücünü düşman cephesinin bir kanadında, Afyonkarahisar’ın güneyinde toplayarak düşmanı yok edecek bir meydan muharebesi yapmaktı. Mustafa Kemal düşmanın “en hassas ve mühim noktası”nın orası olduğunu yazar.\n\n' +
            '**Gizlilik.** Taarruzun bir baskın olması için hazırlık gizli tutuldu: Birlikler yalnız geceleri yürüdü, gündüzleri köylerde ve ağaç altlarında dinlendi; düşmanı yanıltmak için başka bölgelerde sahte hareketler yapıldı. Komutanlar Akşehir’de bir futbol maçını izleme bahanesiyle bir araya getirildi.\n\n' +
            '**Sonuç.** 26 Ağustos sabahı Kocatepe’den başlayan taarruzda iki günde düşmanın tahkimli cephesi düşürüldü; 30 Ağustos’ta Başkomutan Meydan Muharebesi ile Yunan ana kuvvetleri yok edildi. 1 Eylül 1922’de Mustafa Kemal ordulara “İlk hedefiniz Akdeniz’dir” emrini verdi; 9 Eylül’de İzmir’e girildi.\n\n' +
            '**Çıkarım:** Büyük Taarruz’un başarısında Mustafa Kemal’in rolü; doğru zamanı beklemesi, gizliliği sağlaması, düşmanın zayıf noktasını seçen planı onaylayıp yönetmesi ve savaşı bizzat cepheden yönetmesiyle açıklanabilir.',
        },
        {
          id: `${SLUG}-antlasmalar-tablo`,
          type: 'table',
          interactive: true,
          title: 'Kars, Ankara ve Mudanya: üç antlaşma, üç kazanç',
          columns: ['Antlaşma', 'Tarih', 'Kiminle?', 'Ne sağladı?'],
          rows: [
            ['Kars Antlaşması', '13 Ekim 1921', 'Ermenistan, Azerbaycan ve Gürcistan Sovyet cumhuriyetleri (Sovyet Rusya’nın katılımıyla)', 'Doğu sınırı kesinleşti; bu devletler Büyük Millet Meclisi’nin tanımadığı antlaşmaları tanımayacaklarını kabul etti.'],
            ['Ankara Antlaşması', '20 Ekim 1921', 'Fransa', 'Fransa güneyden çekildi, Güney Cephesi kapandı. İskenderun bölgesi için Türklerin kültürlerini geliştirebileceği ve Türkçenin resmî dil olacağı özel bir yönetim öngörüldü.'],
            ['Mudanya Ateşkesi', '11 Ekim 1922', 'İngiltere, Fransa, İtalya (Yunanistan sonradan katıldı)', 'Savaş sona erdi; Doğu Trakya, Edirne ile birlikte Meriç’e kadar savaşmadan geri alındı. İstanbul ve Boğazlar barışa kadar İtilaf Devletleri’nde kaldı.'],
          ],
          caption:
            'Nutuk’ta Mustafa Kemal, Ankara Antlaşması ile millî amaçların ilk kez bir Batılı devlet tarafından onaylandığını yazar. Hatay meselesini ilerideki bir derste ayrıca işleyeceğiz.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste bir kanun, iki Nutuk bölümü ve bir ateşkes metni okuyacaksın. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Mustafa Kemal’in rolüne ilişkin çıkarım yaparken onun hakkında söylenenlerden çok **verdiği kararlara ve yazdığı emirlere** bak. Belgeler bu kararları doğrudan gösterir.\n\n' +
      'İlk dört metin birebir alıntıdır. Beşinci metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Başkumandanlık Kanunu',
        kunye: 'Türkiye Büyük Millet Meclisi Reisi Mustafa Kemal Paşa Hazretlerine Başkumandanlık tevcihine dair kanun, Kanun no 144, 5 Ağustos 1921, 2. ve 3. maddeler. Metin: TBMM kanun arşivi.',
        nitelik: 'Birebir alıntı.',
        metin:
          'İKİNCİ MADDE — Başkumandan ordunun maddi ve mânevi kuvvetini âzami surette tezyit ve sevk ve idaresini bir kat daha tarsin hususunda Türkiye Büyük Millet Meclisinin buna mütaallik salâhiyetini Meclis namına fiilen istimale mezundur. ÜÇÜNCÜ MADDE — Müşarünileyhe balâdaki mevat ile mevdu sıfat ve salâhiyet üç ay müddetle mukayyeddir. Meclis lüzum gördüğü takdirde bu müddetin inkızasından evvel dahi bu sıfat ve salâhiyeti refedebilir.',
        soru: 'Başkomutana verilen yetkinin kaynağı, amacı ve sınırı nedir? Bu maddeler Meclis ile Başkomutan arasındaki ilişki hakkında ne gösterir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Tezyit”: artırmak. “Tarsin”: sağlamlaştırmak. “Salâhiyet”: yetki. “İstimal”: kullanmak. “Mezun”: izinli, yetkili. “Mukayyed”: sınırlı. “İnkıza”: sona erme. “Ref etmek”: kaldırmak.' },
          { title: 'Yetkinin kaynağını bul', body: 'Yetki Meclis’e aittir; Başkomutan onu “Meclis namına”, yani Meclis adına kullanır.' },
          { title: 'Amacını bul', body: 'Ordunun maddi ve manevi gücünü en üst düzeye çıkarmak ve yönetimini sağlamlaştırmak.' },
          { title: 'Sınırını bul', body: 'Yetki üç ayla sınırlıdır ve Meclis gerekirse süre dolmadan geri alabilir.' },
        ],
        cevap: 'Yetkinin kaynağı Meclis’tir; amacı ordunun gücünü artırmak ve yönetimini güçlendirmektir; sınırı ise üç aylık süre ve Meclis’in yetkiyi her an geri alabilmesidir. Maddeler, olağanüstü bir durumda bile son sözün Meclis’te, yani millî egemenlikte kaldığını gösterir.',
        cikarim: 'Nutuk’a göre üç aylık sınırı Mustafa Kemal kendisi istemişti. Bu, onun savaşın en zor anında bile millî egemenliği koruyan bir yol seçtiği çıkarımını destekler.',
      },
      {
        tur: 'birincil',
        baslik: 'Tekâlif-i Millîye Emirleri ve amacı',
        kunye: 'Mustafa Kemal, Nutuk (1927), 12. bölüm: “Tekâlif-i Milliye” ve “Bütün Türk milletini cephede bulunan ordu kadar fikren, hissen ve fiilen muharebe ile alâkadar etmeli idim” alt başlıklarından iki bölüm. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı. İki ayrı alt başlıktan alınan bölümler “…” ile birleştirilmiştir.',
        metin:
          '“2 numaralı” emrime nazaran vatanda her hane birer kat’ çamaşır, birer çift çorap ve çarık ihzâr edip Tekâlif-i Milliye Komisyonu’na teslim edecekti. … Bütün millet efrâdı, yalnız düşman karşısında bulunanlar değil, köyde, evinde, tarlasında bulunan herkes, silâhla vuruşan muharip gibi, kendini vazifedar hissederek, bütün mevcudiyetini mücadeleye hasredecekti.',
        soru: 'İkinci emir neden “her hane”den istiyor? İkinci cümle, Tekâlif-i Millîye’nin amacı hakkında ne söylüyor?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Nazaran”: göre. “Hane”: ev, aile. “İhzâr etmek”: hazırlamak. “Efrât”: bireyler. “Muharip”: savaşan asker. “Vazifedar”: görevli. “Mevcudiyet”: varlık. “Hasretmek”: ayırmak, adamak.' },
          { title: 'Emri yorumla', body: 'İstenen şey küçük ama her evden isteniyor. Böylece yük bütün milletin üzerine paylaştırılıyor ve her aile savaşın bir parçası oluyor.' },
          { title: 'Amacı bul', body: 'Mustafa Kemal cephede olmayan herkesin de kendini savaşan asker kadar görevli hissetmesini istiyor.' },
          { title: 'Kazanımla ilişkilendir', body: 'Bu, millî birlik ve dayanışma için herkesin sorumluluk alması demektir.' },
        ],
        cevap: 'Emir her haneden istiyor, çünkü amaç yükü herkese paylaştırmak ve her aileyi savaşın ortağı yapmaktır. İkinci cümle, Tekâlif-i Millîye’nin yalnız malzeme toplamak değil, bütün milletin kendini savaşan asker gibi sorumlu hissetmesini sağlamak amacı taşıdığını gösterir.',
        cikarim: 'Küçük katkıların herkesten istenmesi, dayanışmayı somut hâle getirir. Bir aile için bir çift çorap küçük bir şeydir; ama bütün milletten toplandığında bir orduyu giydirir.',
      },
      {
        tur: 'birincil',
        baslik: '“Hatt-ı müdafaa yoktur, sath-ı müdafaa vardır”',
        kunye: 'Mustafa Kemal’in Sakarya Meydan Muharebesi sırasında verdiği emir. Metin: Nutuk (1927), 12. bölüm: “Hatt-ı müdafaa yoktur, sath-ı müdafaa vardır”; Vikikaynak.',
        nitelik: 'Birebir alıntı (emrin ilk dört cümlesi).',
        metin:
          'Hatt-ı müdafaa yoktur, sath-ı müdafaa vardır. O satıh, bütün vatandır. Vatanın, her karış toprağı, vatandaşın kanıyla ıslanmadıkça, terk olunamaz. Onun için küçük, büyük her cüz’-i tâm, bulunduğu mevziden atılabilir. Fakat küçük, büyük her cüz’-i tâm, ilk durabildiği noktada, tekrar düşmana karşı cephe teşkil edip muharebeye devam eder.',
        soru: '“Hat” ile “satıh” arasındaki fark nedir? Bu emir Sakarya’daki savunmayı nasıl değiştirmiş olabilir?',
        adimlar: [
          { title: 'Sözcükleri çöz', body: '“Hatt-ı müdafaa”: savunma hattı, yani bir çizgi. “Sath-ı müdafaa”: savunma alanı, yani bir yüzey. “Cüz’-i tâm”: kendi başına savaşabilen birlik. “Mevzi”: birliğin savunduğu yer.' },
          { title: 'Farkı bul', body: 'Bir hat kırılınca bütün savunma çökebilir. Bir yüzeyde ise geri çekilen her birlik ilk durabildiği yerde yeniden cephe kurar; savunma bitmez.' },
          { title: 'Etkisini yorumla', body: 'Bir birliğin geri çekilmesi, yanındakilerin de çekilmesi anlamına gelmez. Böylece düşman her adımda yeniden direnişle karşılaşır ve yıpranır.' },
        ],
        cevap: 'Hat bir çizgidir ve kırılınca savunma çökebilir; satıh ise bütün vatandır ve her birlik geri çekilse bile ilk durduğu yerde yeniden savaşır. Bu emir, Sakarya’da düşmanın her adımda direnişle karşılaşmasını ve sonunda taarruz gücünü yitirmesini sağlamış olabilir.',
        cikarim: 'Mustafa Kemal’in rolü yalnız komuta etmek değil, savunmanın mantığını değiştirmekti. Nutuk’a göre bu anlayışla düşman yıpratıldı ve taarruza devam edemez hâle getirildi.',
      },
      {
        tur: 'birincil',
        baslik: 'Mudanya Ateşkesi’nden maddeler',
        kunye: 'Mudanya Askerî Sözleşmesi (Mudanya Ateşkesi), 11 Ekim 1922, 5. maddenin ilk cümlesi ve 7. madde. Metin: İsmail Soysal, Türkiye’nin Siyasal Antlaşmaları I (TTK, 1983).',
        nitelik: 'Birebir alıntı (günümüz Türkçesine çevrilmiş metinden).',
        metin:
          '5. Doğu Trakya’nın Yunan Kuvvetlerince boşaltılması işbu Sözleşmenin yürürlüğe girmesi üzerine başlıyacaktır. … 7. Türkiye Büyük Millet Meclisi Hükûmetinin, memurlarıyla birlikte, yerel düzen ve güvenliğin sürdürülmesi ve sınır ve demiryollarının korunması için, kesinlikle zorunluk duyulan sayıda, jandarma kuvvetleri de bulunacaktır. Bu kuvvetlerin toplamı, subaylarıyla birlikte, sekiz bini aşmayacaktır.',
        soru: 'Bu maddelere göre Mudanya, Doğu Trakya için ne sağlamıştır? 7. maddedeki sınırlama neyi gösterir?',
        adimlar: [
          { title: 'Kazancı bul', body: '5. madde: Yunan kuvvetleri Doğu Trakya’yı boşaltacaktır. Bölge savaşmadan Türklere geçecektir.' },
          { title: 'Sınırlamayı bul', body: '7. madde: Büyük Millet Meclisi Hükûmeti bölgede yalnız jandarma bulundurabilecek; bu sayı sekiz bini aşmayacaktır.' },
          { title: 'Yorumla', body: 'Sınırlama, bunun henüz kesin barış değil, bir ateşkes olduğunu gösterir. Bölgenin kesin durumu barış konferansına bırakılmıştır.' },
        ],
        cevap: 'Mudanya, Doğu Trakya’nın Yunan kuvvetlerince boşaltılmasını ve savaşmadan Türk yönetimine geçmesini sağladı. 7. maddedeki jandarma sınırı, bunun bir ateşkes olduğunu ve kesin düzenin barış antlaşmasına bırakıldığını gösterir.',
        cikarim: 'Askerî zafer, masada bir kazanca dönüştü: Doğu Trakya’ya tek kurşun atılmadan girildi. Ama ateşkes ile barış arasındaki farkı unutma; kesin sonuç Lozan’da alındı.',
      },
      {
        tur: 'ikincil',
        baslik: 'Sakarya üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Sakarya Meydan Muharebesi 22 gün 22 gece sürdü ve Yunan ordusunun geri çekilmesiyle sonuçlandı. Bazı tarihçiler Sakarya’yı, yüzyıllardır süren toprak kayıplarının durduğu yer olarak görür. Bu zafer, Türk milletinin bağımsızlığına olan inancını yeniden canlandırmıştır.',
        soru: 'Metindeki olguyu ve yorumları ayır. “Bazı tarihçiler … olarak görür” ifadesi neden önemlidir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaylardan sonra yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguyu ayır', body: 'Muharebenin 22 gün 22 gece sürmesi ve Yunan ordusunun geri çekilmesi olgudur; Nutuk da bunu yazar.' },
          { title: 'Yorumları ayır', body: '“Toprak kayıplarının durduğu yer” ve “inancı yeniden canlandırdı” ifadeleri değerlendirmedir.' },
          { title: 'Dili incele', body: '“Bazı tarihçiler … olarak görür” ifadesi, yazarın bu yorumu kesin bir gerçek gibi değil, bir görüş olarak sunduğunu gösterir. Bu dürüst ve dikkatli bir yazma biçimidir.' },
        ],
        cevap: 'Olgu: Muharebenin 22 gün 22 gece sürmesi ve Yunan ordusunun geri çekilmesi. Yorumlar: Sakarya’nın toprak kayıplarının durduğu yer olması ve bağımsızlık inancını canlandırması. “Bazı tarihçiler” ifadesi, yorumun bir görüş olarak sunulduğunu gösterir.',
        cikarim: 'İyi bir ikincil kaynak yorumunu kime ait olduğunu belirterek verir. “Herkes bilir ki” ile “bazı tarihçiler” arasındaki farka dikkat et.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Tekâlif-i Millîye emirlerini sınıflandır',
      prompt: 'Tekâlif-i Millîye emirlerini ordunun hangi ihtiyacını karşıladığına göre gruplandır: giyim, yiyecek, silah, ulaşım, üretim.',
      steps: [
        { title: 'Giyim', body: '2. emir (çamaşır, çorap, çarık) ve 3. emir (bez, kumaş, deri).' },
        { title: 'Yiyecek', body: '4. emir (buğday, un, et, yağ, tuz…).' },
        { title: 'Silah', body: '7. emir (bütün silah ve cephane üç gün içinde).' },
        { title: 'Ulaşım', body: '5. emir (ayda bir askerî taşıma) ve 10. emir (araba ve hayvanların yüzde yirmisi).' },
        { title: 'Üretim', body: '9. emir (ustaların ve atölyelerin tespiti) ve 8. emir (teknik malzeme).' },
      ],
      answer: 'Giyim: 2, 3 · Yiyecek: 4 · Silah: 7 · Ulaşım: 5, 10 · Üretim ve teknik malzeme: 8, 9. (1. emir düzenleyici komisyonları, 6. emir sahipsiz malları kapsar.)',
      takeaway: '“Analiz et” diyen sorularda bütünü parçalara ayır ve her parçanın hangi amaca hizmet ettiğini göster.',
    },
    {
      title: 'Mustafa Kemal’in Sakarya’daki rolünden çıkarım yap',
      prompt: 'Aşağıdaki bilgilerden Mustafa Kemal’in Sakarya’nın kazanılmasındaki rolüne ilişkin iki çıkarım yap: (1) Başkomutanlığı üç aylık süre şartıyla kabul etti. (2) Tekâlif-i Millîye Emirleri’ni yayımladı. (3) “Sath-ı müdafaa” emrini verdi.',
      steps: [
        { title: 'Bilgi 1', body: 'Yetkiyi Meclis adına ve süreli kullanması, millî egemenliğe bağlılığını gösterir.' },
        { title: 'Bilgi 2', body: 'Bütün milleti savaşa katarak ordunun eksiklerini kapattı; savaşı bir millet savaşına dönüştürdü.' },
        { title: 'Bilgi 3', body: 'Savunma anlayışını değiştirerek düşmanı yıprattı.' },
      ],
      answer: 'Mustafa Kemal hem askerî bir strateji geliştirdi (sath-ı müdafaa) hem de milleti ve Meclis’i savaşın arkasında birleştirdi (Tekâlif-i Millîye, süreli Başkomutanlık).',
      takeaway: 'Rol sorularında kişinin kararlarını sırala ve her kararın sonucunu yaz. Övgü cümleleri değil, kararlar puan getirir.',
    },
    {
      title: 'Üç antlaşmayı cepheyle eşleştir',
      prompt: 'Kars, Ankara ve Mudanya antlaşmalarını hangi cepheyi ya da bölgeyi kapattıklarına göre eşleştir.',
      steps: [
        { title: 'Kars', body: 'Doğu Cephesi’nin kesin sınırı → Doğu.' },
        { title: 'Ankara', body: 'Fransızların çekilmesi → Güney.' },
        { title: 'Mudanya', body: 'Yunan savaşının sona ermesi ve Doğu Trakya → Batı.' },
      ],
      answer: 'Kars–Doğu · Ankara–Güney · Mudanya–Batı ve Doğu Trakya.',
      takeaway: 'Her cephenin bir kapanış belgesi vardır: Doğu’da Gümrü sonra Kars, Güney’de Ankara, Batı’da Mudanya.',
    },
  ],
  questionClue: {
    concept: 'Soruda hangi olaydan söz edildiğini nasıl anlarım?',
    statement: 'Soru bir emir, bir kanun maddesi, bir tarih ya da bir sonuç verip olayı ya da Mustafa Kemal’in rolünü sorabilir.',
    clues: [
      '“Her haneden çamaşır, çorap, çarık”, “yüzde kırk”, “komisyon” → Tekâlif-i Millîye',
      '“Üç ay”, “Meclis adına”, “yetki” → Başkumandanlık Kanunu',
      '“Hatt-ı müdafaa yoktur”, “22 gün 22 gece”, “Gazi unvanı” → Sakarya',
      '“Kocatepe”, “Başkomutan Meydan Muharebesi”, “İlk hedefiniz Akdeniz” → Büyük Taarruz',
      '“Doğu sınırı kesinleşti” → Kars · “Fransa güneyden çekildi” → Ankara · “Doğu Trakya savaşmadan” → Mudanya',
    ],
    reasoning: 'Önce olayın savunma mı, saldırı mı, yoksa diplomasi mi olduğunu belirle. Sonra tarihine ve kilit ifadesine bak.',
    boundary: 'Dikkat: “Ankara Antlaşması” 1921’de Fransa ile imzalanan antlaşmadır. 1926’da İngiltere ile Musul için imzalanan Ankara Antlaşması başka bir konudur.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'İTA.8.3.4 bir “analiz eder”, İTA.8.3.5 bir “çıkarımlarda bulunur” kazanımıdır. Bu yüzden sorular çoğunlukla bir emir, bir belge ya da bir durum verip yorum isteyebilir. Aşağıdaki kalıplar kazanımlarla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Tekâlif-i Millîye emrinden millî dayanışmaya ilişkin çıkarım yapma',
      'Mustafa Kemal’in kararlarından rolüne ilişkin çıkarım yapma',
      'Sakarya ile Büyük Taarruz’u karşılaştırma',
      'Kars, Ankara ve Mudanya antlaşmalarının sonuçlarını eşleştirme',
    ],
  },
  checkpoints: [
    {
      prompt: 'Tekâlif-i Millîye’de mallar neden “bedeli sonradan ödenmek üzere” alınmış olabilir?',
      hint: 'Hükümetin elinde para var mıydı? Halkın güveni neden önemliydi?',
      answer: 'Hükümetin o anda ödeyecek parası yoktu; ama malın bedelinin sonradan ödeneceğinin söylenmesi halkın hakkının tanındığını gösterir ve halkın hükümete güvenini korur. Böylece katkı bir el koyma değil, milletin devletine verdiği bir borç gibi düzenlendi.',
    },
    {
      prompt: 'Mustafa Kemal’in Büyük Taarruz’u Meclis’teki baskılara rağmen hemen başlatmaması neyi gösterir?',
      answer: 'Ordunun tam hazır olmadan taarruz etmenin büyük bir felakete yol açabileceğini düşündüğünü, siyasi baskı yerine askerî gerekliliği esas aldığını ve sabırla doğru zamanı beklediğini gösterir.',
    },
    {
      prompt: 'Mudanya Ateşkesi’nin, Mondros Ateşkesi’nden farkı nedir?',
      answer: 'Mondros’u yenilen Osmanlı Devleti imzalamış ve ülkenin işgaline yol açmıştı. Mudanya’yı ise savaşı kazanan Büyük Millet Meclisi Hükûmeti imzaladı; Doğu Trakya savaşmadan geri alındı ve Sevr’in uygulanamayacağı kesinleşti.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.3.4, Tekâlif-i Millîye’yi millî birlik, beraberlik ve dayanışmanın bir örneği olarak analiz etmeni ister; açıklaması sorumluluk almanın önemini vurgular. İTA.8.3.5 ise Sakarya ve Büyük Taarruz’un başarısında Mustafa Kemal’in rolüne ilişkin çıkarım yapmanı ister; açıklaması Kars, Ankara ve Mudanya antlaşmalarına özellikle yer verir. Bu kazanımlara dayanan bir soru, bir emrin ya da bir kararın ne gösterdiğini sorabilir.',
    measures: [
      'Tekâlif-i Millîye’nin içeriğini ve amacını analiz etme',
      'Millî dayanışma ve sorumluluk kavramlarını olaylarla ilişkilendirme',
      'Mustafa Kemal’in kararlarından rolüne ilişkin çıkarım yapma',
      'Kars, Ankara ve Mudanya antlaşmalarının sonuçlarını açıklama',
    ],
  },
  simulation: {
    title: 'Mini LGS: Bir çift çorabın anlamı',
    passage:
      'Tekâlif-i Millîye Emirleri’ne göre ülkedeki her hane birer kat çamaşır, birer çift çorap ve çarık hazırlayıp komisyona teslim edecekti. Tüccarın ve halkın elindeki kumaş, deri ve yiyecek stoklarının yüzde kırkı, bedeli sonradan ödenmek üzere orduya ayrılacaktı. Halkın elindeki araba ve yük hayvanlarının yüzde yirmisi de ordunun hizmetine verilecekti.',
    question: 'Bu uygulamalar aşağıdakilerden hangisinin en açık örneğidir?',
    options: [
      { text: 'Ordunun ihtiyaçlarının karşılanmasında milletin sorumluluk alarak dayanışma göstermesi', explanation: 'Doğru. Her haneden ve her meslekten belirli katkılar istenmiş, yük bütün millete paylaştırılmıştır.' },
      { text: 'Savaş masraflarının dış borçlarla karşılanması', explanation: 'Metinde dış borçtan söz edilmez; ihtiyaçlar ülkenin içinden, halkın katkısıyla karşılanmaktadır.' },
      { text: 'Halkın elindeki bütün malların karşılıksız olarak alınması', explanation: 'Metin belirli oranlardan (yüzde kırk, yüzde yirmi) ve bedelin sonradan ödeneceğinden söz eder; “bütün” ve “karşılıksız” ifadeleri yanlıştır.' },
      { text: 'Ticaretin tamamen devlet tarafından yürütülmeye başlanması', explanation: 'Metinde ticaretin devlete geçtiğine dair bilgi yoktur; yalnız belirli stokların bir kısmı orduya ayrılmıştır.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “en açık örneği” diyor. Metindeki ortak nokta, yükün her haneye ve her kesime paylaştırılmasıdır.',
    critical_point: 'Üçüncü seçenek çekicidir, çünkü el koymadan söz eder. Ama metindeki “yüzde kırk”, “yüzde yirmi” ve “bedeli sonradan ödenmek üzere” ifadeleri bu seçeneği çürütür.',
    takeaway: 'Metinde oran ve koşul varsa, “bütün”, “tamamen”, “karşılıksız” gibi mutlak ifadeler içeren seçeneklere dikkat et.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Sakarya’dan Mudanya’ya',
    range: 'Temmuz 1921–Ekim 1922',
    body:
      'Kütahya–Eskişehir’den sonra ordu Sakarya’nın doğusuna çekildi. Meclis 5 Ağustos 1921’de Başkomutanlığı, kendi yetkileriyle ve üç ay süreyle Mustafa Kemal’e verdi. 7–8 Ağustos’ta yayımlanan Tekâlif-i Millîye Emirleri ile ordunun eksikleri milletin katkısıyla karşılandı. 23 Ağustos–13 Eylül 1921’de 22 gün 22 gece süren Sakarya Meydan Muharebesi kazanıldı; Meclis Mustafa Kemal’e Gazi unvanını ve Müşir rütbesini verdi. Ardından Kars (13 Ekim 1921) ve Ankara (20 Ekim 1921) antlaşmaları imzalandı. Mustafa Kemal’in Haziran 1922’de gizlice karar verdiği Büyük Taarruz 26 Ağustos 1922’de Kocatepe’den başladı; 30 Ağustos’ta Başkomutan Meydan Muharebesi kazanıldı ve 9 Eylül’de İzmir’e girildi. 11 Ekim 1922’de imzalanan Mudanya Ateşkesi ile savaş sona erdi ve Doğu Trakya savaşmadan geri alındı.',
    turning_points: [
      '5 Ağustos 1921 · Başkumandanlık Kanunu',
      '7–8 Ağustos 1921 · Tekâlif-i Millîye Emirleri',
      '13 Eylül 1921 · Sakarya zaferi',
      '13 ve 20 Ekim 1921 · Kars ve Ankara antlaşmaları',
      '26–30 Ağustos 1922 · Büyük Taarruz ve Başkomutan Meydan Muharebesi',
      '11 Ekim 1922 · Mudanya Ateşkesi',
    ],
  },
  summary: [
    '**Başkomutanlık (5 Ağustos 1921):** Meclis yetkilerini Meclis adına ve üç ay süreyle Mustafa Kemal’e verdi.',
    '**Tekâlif-i Millîye (7–8 Ağustos 1921):** On emir; her haneden çamaşır, çorap, çarık; birçok malın yüzde kırkı, taşıtların yüzde yirmisi; silahlar üç günde. Millî dayanışma ve sorumluluk örneği.',
    '**Sakarya (23 Ağustos–13 Eylül 1921):** 22 gün 22 gece; “Hatt-ı müdafaa yoktur, sath-ı müdafaa vardır.” Sonuç: Gazi unvanı ve Müşir rütbesi.',
    '**Kars (13 Ekim 1921):** Doğu sınırı kesinleşti. **Ankara (20 Ekim 1921):** Fransa güneyden çekildi.',
    '**Büyük Taarruz (26 Ağustos 1922):** Gizli hazırlık, Kocatepe, 30 Ağustos Başkomutan Meydan Muharebesi, 9 Eylül İzmir.',
    '**Mudanya (11 Ekim 1922):** Ateşkes; Doğu Trakya savaşmadan geri alındı; İstanbul ve Boğazlar barışa kadar İtilaf Devletleri’nde.',
  ],
  quizzes: [
    {
      question: 'Tekâlif-i Millîye Emirleri’nin temel amacı nedir?',
      options: ['Ordunun ihtiyaçlarını milletin katkısıyla karşılamak', 'Yeni bir vergi sistemi kurmak', 'Halkın silahlanmasını teşvik etmek', 'Dış ticareti geliştirmek'],
      answer_index: 0,
      explanation: 'Emirler, Sakarya öncesinde ordunun giyim, yiyecek, silah ve taşıt eksiklerini halkın katkısıyla karşılamak için yayımlandı. Halkın elindeki silahlar ise orduya teslim edildi.',
    },
    {
      question: 'Başkumandanlık Kanunu ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['Yetki üç ayla sınırlandırılmıştır.', 'Meclis kapatılmıştır.', 'Yetki süresiz verilmiştir.', 'Başkomutan Meclis’ten bağımsız hâle gelmiştir.'],
      answer_index: 0,
      explanation: 'Kanunun 3. maddesine göre yetki üç ayla sınırlıydı ve Meclis gerekirse süre dolmadan geri alabilirdi.',
    },
    {
      question: '“Hatt-ı müdafaa yoktur, sath-ı müdafaa vardır” emri hangi muharebede verilmiştir?',
      options: ['Sakarya Meydan Muharebesi', 'I. İnönü Muharebesi', 'Başkomutan Meydan Muharebesi', 'Kütahya–Eskişehir Muharebeleri'],
      answer_index: 0,
      explanation: 'Mustafa Kemal bu emri Sakarya Meydan Muharebesi sırasında verdi; Nutuk’un 12. bölümünde yer alır.',
    },
    {
      question: 'Aşağıdaki eşleştirmelerden hangisi yanlıştır?',
      options: ['Mudanya Ateşkesi – Doğu sınırının kesinleşmesi', 'Ankara Antlaşması – Fransızların güneyden çekilmesi', 'Kars Antlaşması – Doğu sınırının kesinleşmesi', 'Mudanya Ateşkesi – Doğu Trakya’nın savaşmadan geri alınması'],
      answer_index: 0,
      explanation: 'Doğu sınırı Kars Antlaşması ile kesinleşti. Mudanya’nın sonucu Doğu Trakya’nın geri alınması ve savaşın sona ermesidir.',
    },
    {
      question: 'Büyük Taarruz’un hazırlanması sırasında birliklerin geceleri yürüyüp gündüzleri köylerde dinlenmesi en çok neyi amaçlıyordu?',
      options: ['Taarruzun gizli kalmasını ve düşmanın baskına uğramasını', 'Askerlerin dinlenmesini', 'Halkın savaştan etkilenmemesini', 'Yolların onarılmasını'],
      answer_index: 0,
      explanation: 'Nutuk’a göre taarruz bir baskın olarak yapılacaktı; bu yüzden hazırlıkların gizli kalmasına önem verildi ve hareketler gece yapıldı.',
    },
  ],
  next: ['Lozan Antlaşması ve Millî Mücadele’nin Sanata Yansıması', 'Atatürk İlkeleri'],
})

export default lesson
