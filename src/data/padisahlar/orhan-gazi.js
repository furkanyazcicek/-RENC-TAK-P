import { tarih, tartismaliTarih } from './tipler.js'

/**
 * ORHAN GAZİ (1324/1326 – 1362)
 * ==================================================================
 * Kuruluş döneminin "kurumlaşma" halkası. Sınavda bu padişah
 * neredeyse tamamen "İLK"ler üzerinden sorulur; içerik buna göre
 * kurgulandı: her ilk, hangi ihtiyaçtan doğduğuyla birlikte verildi.
 */
const orhanGazi = {
  id: 'orhan-gazi',
  order: 2,
  name: 'Orhan Gazi',
  epithet: 'Beyliği Devlete Dönüştüren',
  reignStart: tartismaliTarih(1324, '1324/1326', 'Osman Bey’in ölüm yılındaki ayrışma, tahta çıkış yılına da yansır.'),
  reignEnd: tarih(1362),
  birth: 'Yaklaşık 1281',
  death: '1362 · Bursa',
  father: 'Osman Gazi',
  mother: 'Kaynaklarda Malhun (Mal) Hatun olarak anılır',
  predecessor: 'Osman Gazi',
  successor: 'I. Murad',
  dynastyPeriod: 'Kuruluş Dönemi',
  openingHeadline: 'Beylik Devlet Oluyor',
  summary:
    'Otuz sekiz yıllık hükümdarlığında Osmanlı, kale alan bir uç beyliği olmaktan çıkıp başkenti, düzenli ordusu, medresesi, parası ve divanı olan bir devlete dönüştü. Aynı dönemde Karesi’nin katılmasıyla gelen gemiler ve komutanlar, Osmanlı’yı Rumeli’ye taşıdı.',
  capitals: ['Bursa (1326’dan itibaren başkent)'],

  traits: [
    { field: 'devletlesme', level: 'belirleyici', label: 'Kurumsallaşma', evidence: 'İlk düzenli ordu (yaya ve müsellem), ilk divan teşkilatı, ilk vezir, ilk medrese, ilk gümüş akçe, ilk vakıf ve imarethaneler.' },
    { field: 'askeri', level: 'belirgin', label: 'Marmara’nın güney kıyısının alınması', evidence: 'Bursa (1326), İznik (1331), İzmit (1337) ve Karesi topraklarının katılması.' },
    { field: 'denizcilik', level: 'baslangic', label: 'Denizle ilk temas', evidence: 'Karesioğulları’nın gemileri ve denizci komutanlarının Osmanlı hizmetine girmesi; Rumeli’ye geçişin bu imkânla sağlanması.' },
    { field: 'diplomasi', level: 'belirgin', label: 'Bizans iç çekişmesinden yararlanma', evidence: 'Bizans taht mücadelesinde Kantakuzenos’a destek verilmesi ve bu ittifak üzerinden Rumeli’ye geçiş imkânı elde edilmesi.' },
    { field: 'ilim', level: 'baslangic', label: 'İlmî hayatın kurulması', evidence: 'İznik’te ilk Osmanlı medresesinin açılması, Davud-i Kayserî’nin ilk müderris olarak görevlendirilmesi.' },
  ],

  keyEvents: [
    {
      id: 'bursa-baskent', title: 'Bursa’nın alınması ve başkent olması', date: tarih(1326), eventType: 'major',
      summary: 'Yıllardır abluka altındaki Bursa teslim oldu ve devletin başkenti yapıldı.',
      detail: 'Bursa surlu, büyük ve ovaya hâkim bir şehirdi. Alınması yalnızca toprak kazancı değil, yönetim kapasitesinde sıçramadır: bir uç beyliğinin merkezi köy ölçeğindeki bir yerleşimken, artık pazarı, hanları, gelir kaynakları olan bir şehir yönetiliyordu. Başkentin buraya taşınmasıyla vergi, hukuk ve ordu düzeni de şehir ölçeğine geçti.',
      result: 'Devletin ilk gerçek başkenti kuruldu; Osmanlı’nın idari merkezi ovaya indi.',
      significance: 'Devletleşmenin somut eşiği. Kurumların çoğu bu şehirde kuruldu.',
      osym: 'Başkent sırası sorulur: Söğüt/Yenişehir → BURSA → Edirne → İstanbul. Bursa’nın fethi Orhan, kuşatmanın başlatılması Osman Bey dönemidir.',
      mapFocus: 'bursa',
      atlas: { year: 1326, eventId: 'bursa-fethi', focus: 'bursa', label: 'Bursa çevresini atlasta aç' },
    },
    {
      id: 'iznik', title: 'İznik’in alınması ve ilk medrese', date: tarih(1331), eventType: 'major',
      summary: 'İznik alındı; burada ilk Osmanlı medresesi açıldı.',
      detail: 'İznik, Bizans için sıradan bir şehir değildi — bir dönem imparatorluğun merkezi olmuştu. Alınmasının ardından şehirdeki bir yapı medreseye çevrildi ve başına Davud-i Kayserî getirildi. Bu, Osmanlı’nın yalnızca toprak değil, kadro da üretmeye başlaması demektir: kadılar, müderrisler ve kâtipler artık dışarıdan değil, içeriden yetişecekti.',
      result: 'Devletin ilmî kadro kaynağı oluşmaya başladı.',
      osym: 'İlk Osmanlı medresesi: İznik, Orhan Gazi dönemi. İlk müderris: Davud-i Kayserî.',
      mapFocus: 'iznik',
    },
    {
      id: 'palekanon', title: 'Palekanon (Maltepe) Savaşı', date: tarih(1329), eventType: 'normal',
      summary: 'İznik’i kurtarmaya gelen Bizans ordusu yenildi.',
      sides: ['Orhan Bey kuvvetleri', 'Bizans ordusu (İmparator III. Andronikos komutasında)'],
      cause: 'Bizans’ın, kuşatma altındaki İznik ve İzmit’i kurtarmak için son kez sefer düzenlemesi.',
      result: 'Bizans yenildi; imparator savaş alanında yaralandı. Bizans, Anadolu’daki şehirlerini kurtarmak için bir daha büyük ordu göndermedi.',
      significance: 'Anadolu’daki Bizans varlığının fiilen sona ermesinin dönüm noktasıdır.',
      osym: 'İznik ve İzmit’in alınmasının önünü açan savaş olarak sorulabilir.',
      mapFocus: 'maltepe',
    },
    {
      id: 'karesi', title: 'Karesioğulları’nın Osmanlı’ya katılması', date: tartismaliTarih(1345, '1345/1346', 'İlhak süreci birkaç yıla yayılır; kaynaklar farklı yıl verir.'), eventType: 'major',
      summary: 'Osmanlı topraklarına katılan ilk Türk beyliği; donanması ve komutanları Osmanlı hizmetine girdi.',
      detail: 'Karesioğulları, Balıkesir–Çanakkale hattında hüküm süren ve DENİZE kıyısı olan bir beylikti. Beylik içindeki taht mücadelesi Osmanlı’ya müdahale imkânı verdi. Katılımla birlikte Osmanlı üç şey kazandı: Ege ve Marmara kıyısı, gemiler ve Hacı İlbey, Evrenos Bey, Ece Halil gibi tecrübeli komutanlar. Rumeli’ye geçişi mümkün kılan asıl gelişme budur.',
      result: 'Osmanlı ilk kez denize ve deniz gücüne sahip oldu.',
      osym: 'Osmanlı’ya katılan İLK Türk beyliği: Karesioğulları. Rumeli’ye geçiş bu katılımın sonucudur — bu neden-sonuç bağı en sık sorulan bağlantılardan biridir.',
      mapFocus: 'karesi',
    },
    {
      id: 'bizans-ittifak', title: 'Bizans taht kavgasına ortak olma', date: tarih(1346),
      summary: 'Orhan Bey, Bizans’taki taht mücadelesinde Kantakuzenos’u destekledi ve kızı Teodora ile evlendi.',
      detail: 'Bizans içindeki iç savaşta bir tarafa asker desteği verilmesi, Osmanlı kuvvetlerinin Rumeli topraklarına meşru biçimde geçmesini sağladı. Bu geçişler önce geçici seferlerdi; kalıcı yerleşim için bir üs gerekiyordu.',
      result: 'Osmanlı kuvvetleri Rumeli’yi tanıdı; kalıcı geçiş için zemin oluştu.',
      osym: 'Rumeli’ye geçişin yalnız askerî değil, diplomatik bir zemini olduğu vurgulanır.',
    },
    {
      id: 'cimpe', title: 'Çimpe Kalesi’nin alınması', date: tartismaliTarih(1353, '1352/1353', 'Ders kitaplarında çoğunlukla 1353 verilir; bazı kaynaklar 1352 der.'), eventType: 'major',
      summary: 'Rumeli’deki ilk Osmanlı toprağı; Balkanlara açılan kapı.',
      detail: 'Süleyman Paşa komutasındaki kuvvetler, Gelibolu yarımadasındaki Çimpe Kalesi’ni üs olarak elde etti. Ertesi yıl bölgede yaşanan büyük deprem surları yıkınca Gelibolu ve çevresi de alındı. Ardından Anadolu’dan Türk nüfusu bölgeye yerleştirildi — Rumeli’de kalıcılığı sağlayan, savaş değil bu iskân politikasıdır.',
      result: 'Osmanlı, Avrupa yakasında kalıcı olarak yerleşti.',
      significance: 'Osmanlı’nın Balkan devleti hâline gelmesinin başlangıcı.',
      osym: 'Rumeli’deki ilk Osmanlı toprağı: Çimpe Kalesi. Kalıcılığı sağlayan unsur: İSKÂN politikası. İkisi birlikte sorulur.',
      mapFocus: 'cimpe',
      atlas: { year: 1354, eventId: 'cimpe-kalesi', focus: 'gelibolu', label: 'Rumeli’ye geçişi atlasta aç' },
    },
    {
      id: 'suleyman-pasa', title: 'Süleyman Paşa’nın ölümü', date: tarih(1357),
      summary: 'Rumeli fetihlerini yürüten veliaht şehzade bir av kazasında öldü.',
      detail: 'Süleyman Paşa, Orhan Bey’in büyük oğlu ve Rumeli harekâtının komutanıydı. Ölümü hem babasını derinden sarstı hem de veraseti değiştirdi: yerine kardeşi Murad geçti.',
      result: 'Tahtın varisi Şehzade Murad oldu.',
      osym: 'Rumeli fetihlerinin ilk komutanı olarak Süleyman Paşa sorulur.',
    },
    {
      id: 'ankara-1354', title: 'Ankara’nın alınması', date: tartismaliTarih(1354, '1354 civarı', 'Şehrin el değiştirmesi birkaç kez tekrarlanmıştır.'),
      summary: 'Ankara, Ahi yönetiminden Osmanlı denetimine geçti.',
      detail: 'Batıda Rumeli’ye açılırken doğuda da Anadolu içlerine doğru bir adım atıldı. Ancak buradaki denetim, batıdaki kadar sıkı değildi; şehir sonraki yıllarda birkaç kez el değiştirdi. Haritada bu yüzden ayrı ve ince bir alan olarak gösterilir.',
      osym: 'Ayrıntısı nadiren sorulur; Osmanlı’nın aynı dönemde iki yöne birden genişlediğinin örneğidir.',
      mapFocus: 'ankara',
    },
  ],

  battles: [
    {
      id: 'palekanon-savas', title: 'Palekanon (Maltepe) Savaşı', date: tarih(1329), eventType: 'normal',
      summary: 'Bizans’ın Anadolu’daki son büyük kurtarma seferi başarısız oldu.',
      sides: ['Orhan Bey kuvvetleri', 'Bizans ordusu — III. Andronikos ve Kantakuzenos'],
      cause: 'İznik ve İzmit’in Osmanlı ablukası altında olması.',
      result: 'Bizans ordusu yenildi ve geri çekildi; iki şehrin düşmesi kaçınılmaz hâle geldi.',
      significance: 'Bu yenilgiden sonra Bizans, Anadolu’daki toprakları için bir daha meydan savaşı göze alamadı.',
      osym: 'İznik (1331) ve İzmit’in (1337) fethiyle sebep-sonuç ilişkisi içinde sorulur.',
      figures: ['orhan-bey', 'kantakuzenos'],
      mapFocus: 'maltepe',
    },
  ],

  conquests: [
    { id: 'bursa', title: 'Bursa', date: tarih(1326), from: 'Bizans', summary: 'Uzun ablukanın ardından teslim alındı ve başkent yapıldı.', effect: 'Devletin idari, ticari ve dinî merkezi kuruldu.', osym: 'İlk Osmanlı başkenti.', mapFocus: 'bursa' },
    { id: 'iznik-fetih', title: 'İznik', date: tarih(1331), from: 'Bizans', summary: 'Palekanon yenilgisinden sonra teslim oldu.', effect: 'İlk Osmanlı medresesi burada açıldı.', osym: 'İlk medrese ile eşleştirilir.', mapFocus: 'iznik' },
    { id: 'izmit-fetih', title: 'İzmit (Nikomedia)', date: tarih(1337), from: 'Bizans', summary: 'Marmara’nın doğu kıyısındaki son büyük Bizans şehri alındı.', effect: 'Bizans, Anadolu yakasında fiilen tasfiye edildi.', mapFocus: 'izmit' },
    { id: 'karesi-ilhak', title: 'Karesi toprakları', date: tartismaliTarih(1345, '1345/1346'), from: 'Karesioğulları Beyliği', summary: 'Osmanlı’ya katılan ilk Türk beyliği.', effect: 'Donanma, denizci komutanlar ve Ege–Marmara kıyısı kazanıldı; Rumeli’ye geçiş mümkün oldu.', osym: 'İlk katılan beylik + Rumeli’ye geçişin sebebi.', mapFocus: 'karesi' },
    { id: 'cimpe-fetih', title: 'Çimpe Kalesi', date: tartismaliTarih(1353, '1352/1353'), from: 'Bizans', summary: 'Rumeli’deki ilk Osmanlı toprağı.', effect: 'Balkan fetihlerinin üssü oldu.', osym: 'Rumeli’deki ilk toprak.', mapFocus: 'cimpe' },
    { id: 'gelibolu-fetih', title: 'Gelibolu ve çevresi', date: tarih(1354), from: 'Bizans', summary: 'Depremde surları yıkılan şehir ve çevresi alındı.', effect: 'Boğazın Rumeli yakasındaki geçiş noktası denetime girdi; iskânla kalıcılık sağlandı.', mapFocus: 'gelibolu' },
  ],

  reforms: [
    { id: 'yaya-musellem', title: 'İlk düzenli ordu: Yaya ve Müsellem', date: tartismaliTarih(1328, '1320’ler sonu'), field: 'ordu', summary: 'Maaşlı/dirlikli, sürekli hazır piyade (yaya) ve atlı (müsellem) birlikler kuruldu.', why: 'Sefer zamanı toplanan aşiret kuvvetleri, kuşatma ve uzun harekât için yetersizdi; devletin sürekli askere ihtiyacı vardı.', osym: 'İlk düzenli Osmanlı ordusu Orhan Gazi dönemindedir. Kapıkulu ile KARIŞTIRILMAMALIDIR — Kapıkulu I. Murad dönemidir.' },
    { id: 'divan', title: 'İlk divan teşkilatı ve ilk vezir', field: 'yonetim', summary: 'Devlet işlerinin görüşüldüğü divan kuruldu; ilk vezir Orhan Gazi döneminde görevlendirildi.', why: 'Beylik ölçeğinde bey tek başına karar verebilirdi; şehirler, vergi ve ordu büyüyünce yazılı ve kurullu yönetim zorunlu oldu.', osym: 'İlk divan ve ilk vezir Orhan Gazi dönemine yazılır.' },
    { id: 'akce', title: 'İlk gümüş para: akçe', date: tarih(1327), field: 'maliye', summary: 'Orhan Bey adına gümüş akçe bastırıldı.', why: 'Kendi parasını basmak hem egemenlik göstergesi hem de vergi ve ticareti düzenleme aracıdır.', osym: 'MEB kaynaklarında ilk Osmanlı akçesi Orhan Gazi dönemine bağlanır. Bazı kitaplarda Osman Bey adına sikke iddiası geçer; bu tartışmalıdır.' },
    { id: 'medrese', title: 'İlk medrese (İznik)', date: tarih(1331), field: 'ilim', summary: 'İznik’te açılan medresenin başına Davud-i Kayserî getirildi.', why: 'Kadı, müderris ve kâtip ihtiyacı dışarıdan karşılanamazdı.', osym: 'İlk medrese: İznik. İlk müderris: Davud-i Kayserî.' },
    { id: 'kadi-subasi', title: 'Kadı ve subaşı ile taşra yönetimi', field: 'yonetim', summary: 'Alınan yerlere kadı (hukuk) ve subaşı (güvenlik/yönetim) atanması düzenli hâle geldi.', why: 'Fethedilen yerin yönetilmesi, alınmasından daha zordu.' },
    { id: 'vakif', title: 'İlk vakıflar ve imarethaneler', field: 'kurum', summary: 'Cami, medrese ve aşevlerinin gelirini karşılayan vakıflar kuruldu.', why: 'Kamu hizmetinin sürekliliği hazineye değil, vakıf gelirine bağlandı.' },
  ],

  importantFigures: [
    { id: 'orhan-bey', name: 'Orhan Bey', role: 'İkinci Osmanlı hükümdarı', side: 'osmanli', summary: 'Beyliği kurumları olan bir devlete dönüştüren hükümdar.' },
    { id: 'alaeddin-pasa', name: 'Alaeddin Paşa', role: 'Vezir (Orhan Bey’in kardeşi)', side: 'osmanli', summary: 'Ordu ve teşkilat düzenlemelerinde adı geçen ilk vezir olarak anılır.' },
    { id: 'candarli-kara-halil', name: 'Çandarlı Kara Halil', role: 'Kadı, sonra vezir', side: 'osmanli', summary: 'Yaya ve müsellem düzeninin kurulmasında etkili oldu; ailesi bir asır boyunca devlete vezir verdi.' },
    { id: 'suleyman-pasa-kisi', name: 'Süleyman Paşa', role: 'Şehzade, Rumeli komutanı', side: 'osmanli', summary: 'Çimpe ve Gelibolu harekâtını yürüttü; 1357’de öldü.' },
    { id: 'haci-ilbey', name: 'Hacı İlbey, Evrenos Bey, Ece Halil', role: 'Karesi kökenli komutanlar', side: 'osmanli', summary: 'Beyliğin katılmasıyla Osmanlı hizmetine girdiler; Rumeli fetihlerinin öncü isimleri oldular.' },
    { id: 'davud-i-kayseri', name: 'Davud-i Kayserî', role: 'İlk müderris', side: 'ilim', summary: 'İznik Medresesi’nin ilk başmüderrisi; Osmanlı ilim geleneğinin başlangıcı sayılır.' },
    { id: 'kantakuzenos', name: 'VI. İoannis Kantakuzenos', role: 'Bizans’ta taht iddiacısı, sonra imparator', side: 'rakip', summary: 'Osmanlı desteğiyle tahtı elde etti; bu ittifak Rumeli’ye geçişin kapısını araladı.' },
    { id: 'ucuncu-andronikos', name: 'III. Andronikos', role: 'Bizans İmparatoru', side: 'rakip', summary: 'Palekanon’da yenildi; Anadolu’daki Bizans şehirlerini kurtaramadı.' },
  ],

  osymHighlights: [
    'İlk Osmanlı başkenti: BURSA (1326).',
    'İlk düzenli Osmanlı ordusu: yaya ve müsellem — Orhan Gazi dönemi. (Kapıkulu/Yeniçeri I. Murad dönemidir; en sık karıştırılan yer burasıdır.)',
    'İlk Osmanlı medresesi: İznik. İlk müderris: Davud-i Kayserî.',
    'İlk gümüş para (akçe): Orhan Gazi dönemi.',
    'İlk divan teşkilatı ve ilk vezir: Orhan Gazi dönemi.',
    'Osmanlı’ya katılan ilk Türk beyliği: Karesioğulları — donanmasıyla birlikte.',
    'Rumeli’deki ilk Osmanlı toprağı: Çimpe Kalesi (1352/1353).',
    'Rumeli’de kalıcılığı sağlayan politika: İSKÂN (Anadolu’dan Türk nüfusun yerleştirilmesi).',
    'Bizans’ın Anadolu’daki son büyük direnişi: Palekanon (Maltepe) Savaşı, 1329.',
    'Bu dönemin bir cümlelik özeti: "İlk"lerin dönemidir — beylik devletleşmiştir.',
  ],

  mapState: {
    id: 'orhan-1362',
    caption: 'Dönem sonunda Osmanlı, Marmara’nın güney kıyısını bütünüyle denetliyor ve Rumeli’de bir köprübaşı tutuyordu.',
    highlight: ['bursa', 'iznik', 'izmit', 'karesi', 'cimpe'],
  },

  portrait: { kind: 'monogram', alt: 'Orhan Gazi’yi temsil eden sembolik pano.', tugra: 'ا', isim: 'Orhan' },

  transitionOut: {
    transitionType: 'devir',
    year: '1362',
    headline: 'Taht I. Murad’a Geçiyor',
    body: 'Orhan Gazi öldüğünde Osmanlı’nın bir başkenti, düzenli ordusu, medresesi ve parası vardı. Ama devletin ağırlık merkezi hâlâ Anadolu’daydı. Yerine geçen oğlu Murad, bu merkezi Rumeli’ye taşıyacak ve devleti Balkan siyasetinin belirleyici gücü hâline getirecekti.',
  },

  narration: [
    {
      id: 'orhan-intro', kind: 'intro', seconds: 20,
      text: 'Orhan Bey tahta geçtiğinde elinde bir devlet değil, güçlü bir uç beyliği vardı. Otuz sekiz yıl sonra bıraktığı şey ise başkenti, düzenli ordusu, medresesi, parası ve divanı olan bir devletti. Osmanlı tarihinde "ilk" diye bilinen kurumların büyük bölümü bu dönemde kuruldu.',
    },
    {
      id: 'orhan-reign', kind: 'reign', seconds: 28,
      text: 'Bin üç yüz yirmi altıda Bursa teslim oldu ve başkent yapıldı. Bin üç yüz yirmi dokuzda Palekanon’da yenilen Bizans, Anadolu’daki şehirlerini kurtarmak için bir daha ordu gönderemedi; İznik ve ardından İzmit alındı. İznik’te açılan medresenin başına Davud-i Kayserî getirildi. Aynı yıllarda yaya ve müsellem adıyla ilk düzenli ordu kuruldu, Orhan Bey adına gümüş akçe bastırıldı ve devlet işleri için divan toplanmaya başladı.',
    },
    {
      id: 'orhan-karesi', kind: 'event', targetId: 'karesi', seconds: 22,
      text: 'Osmanlı’nın önündeki asıl engel denizdi. Bu engel bir savaşla değil, bir katılımla aşıldı. Karesioğulları Beyliği Osmanlı topraklarına katıldığında yalnız toprak değil; gemiler, kıyı ve Hacı İlbey, Evrenos Bey gibi tecrübeli komutanlar da geldi. Osmanlı’ya katılan ilk Türk beyliği budur ve Rumeli’ye geçişin asıl sebebidir.',
    },
    {
      id: 'orhan-cimpe', kind: 'event', targetId: 'cimpe', seconds: 20,
      text: 'Bin üç yüz elli iki ya da elli üçte, Süleyman Paşa komutasındaki kuvvetler Gelibolu yarımadasında Çimpe Kalesi’ni elde etti. Bu, Rumeli’deki ilk Osmanlı toprağıdır. Ertesi yılki deprem çevredeki surları yıkınca Gelibolu da alındı. Ama bölgeyi kalıcı kılan şey fetih değil, Anadolu’dan getirilen nüfusun buraya yerleştirilmesi, yani iskân politikasıydı.',
    },
    {
      id: 'orhan-outro', kind: 'transition', seconds: 16,
      text: 'Bin üç yüz altmış ikide Orhan Gazi öldüğünde Osmanlı artık bir devletti. Ancak ağırlık merkezi hâlâ Anadolu’daydı. Yerine geçen oğlu Murad, bu merkezi Rumeli’ye taşıyacaktı.',
    },
  ],

  sources: [
    { label: 'MEB Tarih 10 — Beylikten Devlete Osmanlı Siyaseti', note: 'Kurumların ve "ilk"lerin çerçevesi.' },
    { label: 'YKS Tarih konu-kazanım kapsamı — Osmanlı Kuruluş Dönemi', note: 'Sık karıştırılan bilgilerin seçimi.' },
  ],
}

export default orhanGazi
