/**
 * Okul yazilisi + TYT/AYT icin 24 dersin tamaminda kisi, es zamanlilik ve
 * ezberlenmesi gereken cekirdek bilgiyi gorunur kilan ikinci katman.
 */

const f = (name, period, position, contribution, connections, significance) => ({ name, period, position, contribution, connections, significance })
const row = (place, development, connection) => [place, development, connection]

export const HISTORY_SCHOOL_STANDARD = {
  'tarih-bilimi-ve-zaman': {
    figures: [
      f('Herodotos', 'MÖ 5. yüzyıl', 'Antik Yunan tarihçisi', 'Savaşları, toplumları ve anlatıları derleyerek tarih yazımının erken örneklerinden birini verdi.', ['Pers–Yunan savaşları hakkında anlatılar', 'Sözlü bilgi ve gözlemi birlikte kullanması'], '“Tarihin babası” ifadesi önemlidir; fakat modern kaynak eleştirisi ölçütleriyle çalıştığı söylenemez.'),
      f('Thukydides', 'MÖ 5. yüzyıl', 'Tarihçi ve komutan', 'Peloponnesos Savaşlarını siyasal nedenler ve insan davranışları üzerinden açıklamaya çalıştı.', ['Neden-sonuca vurgu', 'Mitolojik açıklamadan uzaklaşma'], 'Eleştirel ve nedensel tarih yazımının önemli erken temsilcisidir.'),
      f('İbn Haldun', '1332–1406', 'Tarihçi ve düşünür', 'Toplum ve devletlerin yükseliş–çözülüşünü asabiyet, ekonomi ve çevreyle ilişkilendirdi.', ['Mukaddime', 'Toplumsal yapı ile siyasi değişim bağlantısı'], 'Tarihî haberi eleştirme ve toplumsal yasalar arama yaklaşımıyla öne çıkar.'),
    ],
    sameTime: [row('Avrupa', 'Miladi takvim güneş yılı esaslı geliştirildi.', 'Takvimler toplumların dinî ve idari ihtiyaçlarına göre değişir.'), row('İslam dünyası', 'Hicri takvim 622 Hicret’i başlangıç aldı.', 'Ay yılı nedeniyle mevsimlerle sabit ilerlemez.'), row('Osmanlı', 'Rumi takvim mali işlerde kullanıldı.', 'Aynı devlet farklı ihtiyaçlar için birden fazla takvim kullanabilir.')],
    school: ['Olay–olgu ayrımını örnekle açıklayabil.', 'Birinci el kaynağın neden otomatik olarak tarafsız olmadığını yazabil.', 'Yüzyıl hesaplama ve MÖ sıralamasına dikkat et.', 'Tarama–tasnif–tahlil–tenkit–sentez sırasını bil.'],
    mustKnow: ['Olay kısa süreli ve tekil; olgu uzun süreli ve geneldir.', 'Kronoloji neden ile sonucu ters kurmayı engeller.', 'MÖ tarihlerde sayı küçüldükçe günümüze yaklaşılır.', 'Hicri takvim ay, Miladi takvim güneş yılına dayanır.', 'Birinci el kaynak döneme aittir; yine de eleştirilir.', 'Tarihsel bilgi yeni kanıtla değişebilir.', 'Anakronizm bugünün kavramını geçmişe uygunsuz taşımaktır.', 'Tarihçi deney yapmaz; kanıtları karşılaştırır.'],
  },
  'ilk-cag-uygarliklari': {
    figures: [
      f('Hammurabi', 'MÖ 18. yüzyıl', 'Babil hükümdarı', 'Yazılı kanunlarla suç, borç, aile ve mülkiyet ilişkilerini düzenledi.', ['Merkezî krallık', 'Kısas ve sınıfsal ceza farklılıkları'], 'Yazılı hukuk keyfîliği sınırlar; modern eşit hukuk anlamına gelmez.'),
      f('Urukagina', 'MÖ 24. yüzyıl', 'Sümer şehir yöneticisi', 'Borç ve yönetici baskısını sınırlamaya dönük düzenlemelerle anılır.', ['Sümer şehir devleti', 'Erken hukuk reformu'], 'Hukukun toplumsal ve ekonomik sorunlara cevap olarak doğduğunu gösterir.'),
      f('İskender', 'MÖ 356–323', 'Makedonya kralı', 'Doğu Akdeniz’den İran ve Hindistan yönüne ilerleyerek Helenistik kültür alanını kurdu.', ['Doğu–Batı kültür etkileşimi', 'İmparatorluk ve şehir merkezleri'], 'Fetihleri siyasi olduğu kadar kültürel sentez sonuçları doğurdu.'),
    ],
    sameTime: [row('Mezopotamya', 'Şehir devletleri, yazı ve sulama bürokrasisi gelişti.', 'Açık coğrafya siyasi parçalanma ve istilaları artırdı.'), row('Mısır', 'Nil çevresinde merkezî krallık güçlendi.', 'Düzenli taşkın ve doğal sınırlar yönetim istikrarını destekledi.'), row('Doğu Akdeniz–Ege', 'Fenike ticareti ve İyon düşüncesi yayıldı.', 'Deniz bağlantısı kültürel aktarımı hızlandırdı.')],
    school: ['Neolitik dönüşümün sonuçlarını zincir hâlinde yaz.', 'Uygarlık–buluş eşleştirmelerini bil.', 'Coğrafyanın siyasi yapıya etkisini Mısır–Mezopotamya ile karşılaştır.', 'Yazılı hukukun amacı ile modern hukuk arasındaki farkı koru.'],
    mustKnow: ['Göbeklitepe erken inanç ve örgütlenme; Çayönü–Çatalhöyük yerleşme örnekleridir.', 'Tarım ürün fazlası, iş bölümü ve sınıflaşmayı destekledi.', 'Sümerler yazıyı kullandı.', 'Fenikeliler alfabeyi yaydı.', 'Lidyalılar madeni parayı ticarette kullandı.', 'İyonlar özgür düşünce ortamıyla bilinir.', 'Roma hukuk mirası bıraktı.', 'Yazı tarih çağlarını başlatır; insanlık tarihini değil.'],
  },
  'ortacagda-dunya': {
    figures: [
      f('Justinianus', '527–565', 'Bizans imparatoru', 'Roma hukukunu derletti ve merkezî imparatorluk düzenini güçlendirmeye çalıştı.', ['Corpus Juris Civilis', 'Ayasofya ve Bizans gücü'], 'Roma hukuk mirasının Orta Çağ ve sonraki Avrupa hukukuna aktarımında önemlidir.'),
      f('Cengiz Han', 'yak. 1162–1227', 'Moğol hükümdarı', 'Bozkır boylarını birleştirerek geniş imparatorluk ve yasa düzeni kurdu.', ['Yasa/Yasak', 'Avrasya ticaret yolları'], 'Fetihler yıkım kadar kıtalar arası hareket ve temas da doğurdu.'),
      f('Yurtsuz John', '1166–1216', 'İngiltere kralı', '1215 Magna Carta’yı soyluların baskısıyla kabul etti.', ['Kral yetkisinin sınırlandırılması', 'Vergi ve hukuk güvencesi'], 'Belge modern demokrasi değildir; keyfî krallığın sınırlandırılmasında tarihsel eşiktir.'),
    ],
    sameTime: [row('Batı Avrupa', 'Feodalite ve kilise otoritesi güçlüydü.', 'Merkezî otorite ve para ekonomisi sınırlıydı.'), row('Bizans–İslam dünyası', 'Şehir, ticaret ve merkezî kurumlar devam etti.', 'Orta Çağ’ın her bölgesi aynı ekonomik düzeyde değildi.'), row('Asya', 'Moğol siyasi ağı Avrasya’yı bağladı.', 'Ticaretle birlikte teknoloji ve salgınlar da taşındı.')],
    school: ['Feodaliteyi toprak–koruma–bağlılık ilişkisiyle tanımla.', 'Magna Carta’nın tarihsel sınırını bil.', 'Haçlı Seferlerinin dinî, siyasi, ekonomik ve kültürel sonuçlarını ayır.', 'Kara Ölümün emek ve toplum yapısına etkisini açıklayabil.'],
    mustKnow: ['375 Kavimler Göçü İlk Çağ’ın sonu kabul edilir.', '476 Batı Roma yıkıldı.', 'Feodalite merkezî otorite zayıflığıyla ilişkilidir.', 'Skolastik düşüncede dinî otorite belirleyicidir.', 'Haçlı Seferleri 1096’da başladı.', 'Ticaret şehirleri ve burjuvaziyi güçlendirdi.', 'Magna Carta kral yetkisini sınırlayan eşiktir.', 'Barutlu silahlar derebeyi kalelerini zayıflattı.'],
  },
  'islamiyet-oncesi-turk-tarihi': {
    figures: [
      f('Mete Han', 'MÖ 209–174', 'Asya Hun hükümdarı', 'Boyları birleştirdi ve onlu askerî teşkilatı sistemleştirdi.', ['Çin siyaseti', 'Ordu–millet ve hareketli savaş'], 'Türk askerî teşkilat geleneğinin sembol hükümdarıdır.'),
      f('Bumin Kağan', '552', 'I. Kök Türk kurucusu', 'Avar egemenliğine son vererek Türk adını devlet adı yapan siyasi yapıyı kurdu.', ['Ötüken merkezli kağanlık', 'İpek Yolu rekabeti'], '“Türk” adının devlet adı olarak kullanılmasıyla önemlidir.'),
      f('Bilge Kağan–Kül Tigin–Tonyukuk', '8. yüzyıl', 'II. Kök Türk liderleri', 'Bağımsızlığı yeniden kurdu; Orhun Yazıtlarında devlet–halk ilişkisini anlattı.', ['Çin politikasına eleştiri', 'Birlik, bağımsızlık ve yöneticinin sorumluluğu'], 'Yazıtlar ilk Türkçe siyasi öz değerlendirme metinlerindendir.'),
    ],
    sameTime: [row('Çin', 'Merkezî imparatorluk ve tarım ekonomisi güçlüydü.', 'Türk devletleri savaş, ticaret ve evlilik diplomasisi yürüttü.'), row('İran–Bizans', 'İpek Yolu ve sınır rekabeti sürüyordu.', 'Kök Türkler denge ittifakları kurdu.'), row('Avrupa', 'Hun baskısı Kavimler Göçünü hızlandırdı.', 'Avrupa siyasi yapısı ve feodalite zemini değişti.')],
    school: ['Kut, töre, kurultay ve ikili teşkilatı görevleriyle açıkla.', 'Hun–Kök Türk–Uygur kronolojisini bil.', 'Bozkır coğrafyasının ekonomi ve orduya etkisini yaz.', 'Uygurlardaki değişimi “devlet geleneği bitti” diye yorumlama.'],
    mustKnow: ['MÖ 209 Mete Han ve onlu sistem.', '552 Kök Türk; Türk adı devlet adı oldu.', '682 II. Kök Türk bağımsızlığı yeniden kurdu.', 'Orhun Yazıtları Bilge, Kül Tigin ve Tonyukuk ile ilişkilidir.', 'Kut yönetme yetkisi; töre hükümdarı da bağlar.', 'Kurultay danışma organıdır.', 'Uygurlar yerleşik şehir ve ticarette gelişti.', 'Maniheizm Uygur savaşçılığını etkiledi.'],
  },
  'islam-tarihi-ve-uygarligi': {
    figures: [
      f('Hz. Muhammed', '571–632', 'İslam peygamberi ve Medine lideri', 'Tebliğ, Hicret, Medine Sözleşmesi ve Arabistan’daki siyasi birliği yönetti.', ['610 ilk vahiy', '622 Hicret', '630 Mekke’nin fethi'], 'Dinî topluluğu kabile üstü siyasi ve toplumsal düzene dönüştürdü.'),
      f('Hz. Ömer', '634–644', 'İkinci halife', 'Genişleyen topraklarda divan, adli ve idarî düzenlemeleri geliştirdi.', ['Suriye, Irak, Mısır fetihleri', 'Beytülmal ve eyalet yönetimi'], 'Fetih devletini kurumsal yönetime dönüştüren halifedir.'),
      f('Harun Reşid–Me’mun', '8–9. yüzyıl', 'Abbasi halifeleri', 'Bağdat’ın ticaret, çeviri ve bilim merkezi olmasını destekledi.', ['Beytülhikme', 'Tercüme ve aklî bilimler'], 'Abbasi kültürel yükselişinin önemli isimleridir.'),
    ],
    sameTime: [row('Bizans–Sasani', 'Uzun savaşlarla yıpranmışlardı.', 'İslam fetihlerinin hızlı ilerlemesini kolaylaştıran dış koşuldu.'), row('Emeviler', 'Şam merkezli Arap hanedan yönetimi kuruldu.', 'Mevali politikası toplumsal muhalefet doğurdu.'), row('Abbasiler', 'Bağdat merkezli çok unsurlu yapı gelişti.', 'Türkler askerî-idarî görevlerde yükseldi.')],
    school: ['Hicretin dinî başlangıç değil devletleşme eşiği olduğunu açıkla.', 'Dört Halife–Emevi–Abbasi yönetim farklarını bil.', 'Medine Sözleşmesinin ortak savunma ve hukuk yönünü yaz.', 'Bilim insanını alanıyla eşleştir.'],
    mustKnow: ['610 ilk vahiy.', '622 Hicret ve Hicri takvimin başlangıcı.', 'Medine Sözleşmesi kabile üstü siyasi düzen kurdu.', 'Dört Halife döneminde seçim/danışma öne çıktı.', 'Emeviler saltanat ve Arap üstünlüğü eğilimiyle bilinir.', 'Abbasiler mevaliye daha kapsayıcıydı.', 'Beytülhikme çeviri ve bilim merkezidir.', 'Farabi felsefe, İbn Sina tıp-felsefe, Harezmî matematikle ilişkilidir.'],
  },
  'turk-islam-devletleri': {
    figures: [
      f('Satuk Buğra Han', '10. yüzyıl', 'Karahanlı hükümdarı', 'İslamiyet’in Karahanlı saray ve toplumunda yayılmasının sembol ismidir.', ['İlk Müslüman Türk devleti', 'Türkçe–İslami kültür sentezi'], 'İslamlaşmanın siyasi koruyucu kazanmasında önemlidir.'),
      f('Tuğrul Bey', '990–1063', 'Büyük Selçuklu kurucusu', 'Dandanakan sonrası devleti kurdu ve 1055’te Bağdat’a girerek Abbasi halifesini korudu.', ['1040 Dandanakan', 'Sultan–halife iş bölümü'], 'Selçukluyu Horasan gücünden İslam dünyası liderliğine taşıdı.'),
      f('Alp Arslan–Nizamülmülk', '1063–1072 / 1018–1092', 'Sultan ve vezir', 'Alp Arslan askerî genişlemeyi, Nizamülmülk ikta, divan ve Nizamiye düzenini güçlendirdi.', ['1071 Malazgirt', 'Siyasetname ve medrese'], 'Askerî başarı ile kurumlaşmanın birlikte çalıştığını gösteren ikilidir.'),
    ],
    sameTime: [row('Maveraünnehir', 'Karahanlı kültürü ve Türkçe eserler gelişti.', 'İslamlaşma Türk dilini ortadan kaldırmadı.'), row('Horasan–İran', 'Gazneli ve Selçuklu rekabeti yaşandı.', 'Dandanakan yeni güç merkezini belirledi.'), row('Bağdat–Anadolu', 'Halifelik meşruiyeti ve Bizans sınırı iki ayrı hedef oluşturdu.', 'Selçuklu hem İslam dünyasını korudu hem batıya yöneldi.')],
    school: ['Talas’ı toplu İslamlaşma tarihi gibi yazma.', 'Dandanakan–Pasinler–Malazgirt sonuçlarını ayır.', 'İkta, gulam, atabey, melik ve Nizamiye işlevlerini bil.', 'Kutadgu Bilig–DLT–Divan-ı Hikmet yazar ve amaçlarını eşleştir.'],
    mustKnow: ['Karahanlılar ilk Müslüman Türk devletidir.', 'Gazneliler Hindistan seferleriyle bilinir.', '1040 Dandanakan Büyük Selçukluyu kurdu.', '1055 Bağdat Selçuklu siyasi liderliğini güçlendirdi.', '1071 Malazgirt Anadolu yerleşmesini hızlandırdı.', 'İkta gelir-hizmet sistemidir, özel mülk değildir.', 'Nizamiye medreseleri Nizamülmülk ile ilişkilidir.', 'Melik geniş yetkilidir; hutbe ve sikke bağımsızlık göstergesidir.'],
  },
  'turkiye-tarihi-selcuklular-beylikler': {
    figures: [
      f('Süleyman Şah', '1077–1086', 'Türkiye Selçuklu kurucusu', 'İznik merkezli devlet kurarak Anadolu’daki Türk siyasi örgütlenmesini kalıcılaştırdı.', ['İznik başkenti', 'Bizans ve boğazlar çevresi siyaseti'], 'Anadolu’da merkezî Türk devleti kurma sürecinin başlangıç ismidir.'),
      f('II. Kılıç Arslan', '1156–1192', 'Türkiye Selçuklu sultanı', '1176 Miryokefalon’da Bizans taarruzunu durdurdu.', ['Anadolu’daki Türk kalıcılığı', 'Siyasi birlik çabası'], 'Bizans’ın Anadolu’yu geri alma umudunu büyük ölçüde kırdı.'),
      f('I. Alaeddin Keykubad', '1220–1237', 'Türkiye Selçuklu sultanı', 'Liman, tersane, kervansaray ve sınır güvenliğiyle siyasi-ekonomik zirveyi güçlendirdi.', ['Alanya ve Sinop', 'Yassıçemen', 'Ticaret güvenliği'], 'Parlak dönem aynı zamanda yaklaşan Moğol tehdidi öncesindeki son güçlü dengedir.'),
    ],
    sameTime: [row('Bizans', 'Anadolu’yu geri alma girişimleri sürüyordu.', 'Miryokefalon bu kapasiteyi zayıflattı.'), row('Haçlı dünyası', 'Anadolu güzergâhı askerî baskı altındaydı.', 'Merkezin İznik’ten Konya’ya taşınmasında etkili oldu.'), row('Moğol dünyası', '13. yüzyılda batıya genişledi.', 'Babaîler sonrası zayıf Selçuklu Kösedağ’da yenildi.')],
    school: ['İlk beylikleri bölge ve eserleriyle eşleştir.', 'Malazgirt–Miryokefalon–Kösedağ farkını yaz.', 'Liman ve kervansarayların ekonomik amacını açıkla.', 'Babaîler–Kösedağ–II. Beylikler zincirini kur.'],
    mustKnow: ['1077 Türkiye Selçuklu Devleti.', 'İznik ilk, Konya uzun süreli başkenttir.', '1176 Miryokefalon Türk kalıcılığını güçlendirdi.', 'Antalya ve Sinop deniz ticaretine açılmayı sağladı.', '1230 Yassıçemen tampon gücü zayıflattı.', '1240 Babaîler merkezî yapıyı yıprattı.', '1243 Kösedağ Moğol üstünlüğünü başlattı.', '1308 Selçuklu hanedanı sona erdi; kurum mirası sürdü.'],
  },
  'osmanli-devleti-kurulus': {
    figures: [
      f('Osman Bey', 'yak. 1299–1324', 'Osmanlı hanedanının kurucusu', 'Uç bölgesindeki savaşçı ve yerel destek ağını Koyunhisar başarısıyla siyasi çekim merkezine dönüştürdü.', ['1302 Koyunhisar', 'Bizans tekfurlarıyla mücadele'], 'Beyliğin hanedan adı ve ilk siyasi meşruiyet merkezidir.'),
      f('Orhan Bey', '1324–1362', 'İkinci Osmanlı hükümdarı', 'Bursa’yı başkent yaptı; düzenli ordu, medrese, para ve divan kurumlarını geliştirdi; Rumeli’ye geçişi sağladı.', ['1326 Bursa', 'Karesi', '1353 Çimpe'], 'Uç beyliğini kurumları ve şehir geliri olan devlete dönüştürdü.'),
      f('I. Murad–Yıldırım Bayezid', '1362–1402', 'Rumeli ve Anadolu birliği hükümdarları', 'Edirne merkezli Balkan hâkimiyeti, kapıkulu düzeni ve Anadolu birliği girişimlerini büyüttüler.', ['I. Kosova', 'Niğbolu', 'Ankara Savaşı'], 'Hızlı merkezileşme ve genişlemenin Fetret kriziyle sınandığı dönemdir.'),
      f('Çelebi Mehmet–II. Murad', '1413–1451', 'Toparlanma hükümdarları', 'Fetret sonrası birliği kurup Varna ve II. Kosova ile Balkan güvenliğini sağladılar.', ['1413 yeniden birlik', '1444 Varna', '1448 II. Kosova'], 'İstanbul’un fethi için siyasi ve askerî zemini yeniden kurdular.'),
    ],
    sameTime: [row('Anadolu', 'Beylikler ve İlhanlı sonrası otorite boşluğu vardı.', 'Osmanlı doğudaki güçlü beylikler yerine Bizans ucuna yöneldi.'), row('Bizans', 'Taht mücadeleleri ve tekfur parçalanması yaşanıyordu.', 'Osmanlı ittifak, evlilik ve savaşı birlikte kullandı.'), row('Balkanlar', 'Sırp, Bulgar ve yerel güçler bölünmüştü.', 'Çimpe–Edirne hattı hızlı ilerleme alanı açtı.')],
    school: ['Kuruluş nedenlerini tek nedene indirmeden sınıflandır.', 'Hükümdar–olay eşleştirmelerini yaz.', 'İskân–istimalet–tımar farkını bil.', 'Ankara Savaşı ile Fetret ve toparlanma bağını açıkla.'],
    mustKnow: ['1302 Koyunhisar Osman Bey.', '1326 Bursa Orhan Bey ve kurumlaşma.', 'Karesi Rumeli için denizci ve komutan birikimi sağladı.', '1353 Çimpe kalıcı Rumeli üssüdür.', 'Edirne I. Murad döneminde Balkan merkezidir.', '1389 I. Kosova, 1396 Niğbolu.', '1402 Ankara Savaşı Fetret’i doğurdu.', 'Çelebi Mehmet ikinci kurucu; II. Murad Balkan güvenliğini sağladı.'],
  },
  'osmanli-yukselme': {
    figures: [
      f('Fatih Sultan Mehmet', '1451–1481', 'Osmanlı padişahı', 'İstanbul’u fethetti; Balkan, Karadeniz ve Anadolu birliğini güçlendirip merkezî kanun ve saray düzenini geliştirdi.', ['1453 İstanbul', '1473 Otlukbeli', '1475 Kırım', '1480 Otranto'], 'Osmanlıyı güçlü başkent ve imparatorluk iddiası olan merkezî devlete dönüştürdü.'),
      f('Yavuz Sultan Selim', '1512–1520', 'Osmanlı padişahı', 'Safevi tehdidini sınırladı; Suriye ve Mısır’ı alarak Osmanlıyı İslam dünyasının başlıca siyasi gücü yaptı.', ['1514 Çaldıran', '1516 Mercidabık', '1517 Ridaniye'], 'Doğu ve güney siyaseti ticaret, güvenlik ve meşruiyet dengesini değiştirdi.'),
      f('Kanuni Sultan Süleyman–Barbaros', '1520–1566', 'Padişah ve kaptanıderya', 'Kanuni kara ve hukuk düzenini; Barbaros Akdeniz deniz gücünü zirveye taşıdı.', ['1526 Mohaç', '1538 Preveze', 'Habsburg–Safevi dengesi'], 'Osmanlı kara, deniz ve diplomasi araçlarını aynı dünya stratejisinde birleştirdi.'),
      f('Sokullu Mehmet Paşa', '1565–1579 sadrazamlık', 'Sadrazam', 'Don–Volga ve Süveyş projeleriyle ticaret yolları ve kuzey-güney stratejik bağlantılar düşündü.', ['II. Selim ve III. Murad dönemleri', 'Kanal projeleri', 'İnebahtı sonrası donanma'], 'Osmanlı dış politikasında uzun vadeli ulaştırma ve denge vizyonunu temsil eder.'),
    ],
    sameTime: [row('Avrupa', 'Rönesans, Reform ve Habsburg gücü yükseldi.', 'Osmanlı Fransa ve Protestanlarla Habsburg karşıtı denge kurdu.'), row('İran', 'Safevi Devleti Şiî siyasi merkez oldu.', 'Çaldıran ve doğu seferleri mezhep kadar jeopolitik rekabetti.'), row('Okyanuslar', 'Portekiz Hint ticaret yoluna girdi.', 'Osmanlı Kızıldeniz ve Hint seferleriyle cevap verdi.')],
    school: ['Fatih, Yavuz, Kanuni dönemlerini olaylarla eşleştir.', 'İstanbul’un fethinin hazırlık ve sonuçlarını sınıflandır.', 'Mohaç–Preveze farkını kara/deniz gücüyle açıkla.', 'Kapitülasyonların ilk amacı ile sonraki etkisini ayır.'],
    mustKnow: ['1453 İstanbul Fatih dönemidir.', '1473 Otlukbeli Akkoyunlu tehdidini sınırladı.', '1475 Kırım Karadeniz denetimini güçlendirdi.', '1514 Çaldıran Safevi cephesidir.', '1516–1517 Memlük Devleti sona erdi.', '1526 Mohaç Macar siyasi yapısını çökertti.', '1538 Preveze Akdeniz üstünlüğünü güçlendirdi.', 'Kapitülasyon ilk dönemde diplomatik-ticari araçtı.'],
  },
  'osmanli-kultur-ve-medeniyeti': {
    figures: [
      f('Mimar Sinan', 'yak. 1490–1588', 'Başmimar', 'Şehzade, Süleymaniye ve Selimiye ile Osmanlı klasik mimarisinin mekân ve mühendislik anlayışını geliştirdi.', ['Külliye ve şehir hayatı', 'Vakıf finansmanı', 'Klasik çağ estetiği'], 'Mimariyi dinî yapıdan ibaret değil sosyal hizmet ve şehir düzeniyle birlikte temsil eder.'),
      f('Ebussuud Efendi', '1490–1574', 'Şeyhülislam', 'Şer‘î hukuk ile padişahın örfi kanunlarını uyumlaştıran fetvalar verdi.', ['Kanuni dönemi hukuk düzeni', 'İlmiye sınıfı'], 'Osmanlı hukukunda dinî ve örfi alanın birlikte işleyişini gösterir.'),
      f('Ali Kuşçu', '1403–1474', 'Astronom ve matematikçi', 'Fatih’in davetiyle İstanbul’a geldi; medrese bilim geleneğine katkı sağladı.', ['Sahn-ı Seman', 'Astronomi ve matematik'], 'Bilim insanı dolaşımının imparatorluk kültürü üzerindeki etkisini gösterir.'),
    ],
    sameTime: [row('Saray', 'Enderun devlet adamı, Divan yönetim kararı üretti.', 'Merkezî yönetim ve eğitim aynı mekânda örgütlendi.'), row('Kırsal alan', 'Çift-hane ve tımar üretim–vergi–asker bağını kurdu.', 'Miri toprak yerel soylulaşmayı sınırlamayı amaçladı.'), row('Şehir', 'Lonca, narh, mahalle ve vakıf gündelik hayatı düzenledi.', 'Ekonomi ile sosyal hizmet birbirinden kopuk değildi.')],
    school: ['Seyfiye–ilmiye–kalemiye görevlerini eşleştir.', 'Miri, tımar, has, zeamet kavramlarını ayır.', 'Lonca–narh–gedik işlevlerini yaz.', 'Vakıf ve millet sistemini modern kavramlarla karıştırma.'],
    mustKnow: ['Divan-ı Hümayun merkezî danışma-yönetim organıdır.', 'Enderun saray içi yönetici okuludur.', 'Seyfiye asker-yönetim, ilmiye hukuk-eğitim, kalemiye bürokrasidir.', 'Miri arazinin mülkiyeti devlete aittir.', 'Tımar gelir karşılığı askerî hizmettir.', 'Lonca üretim, kalite ve meslek eğitimini düzenler.', 'Narh fiyat denetimidir.', 'Vakıf kalıcı gelirle sosyal hizmet sağlar.'],
  },
  'on-yedinci-yuzyil-osmanli': {
    figures: [
      f('IV. Murad', '1623–1640', 'Osmanlı padişahı', 'İç düzeni sert tedbirlerle sağlamaya çalıştı; Bağdat’ı geri aldı ve Kasr-ı Şirin’e giden dengeyi kurdu.', ['1638 Bağdat', '1639 Kasr-ı Şirin'], 'Kişiye bağlı disiplinin kısa vadeli sonuç ve kalıcılık sınırını gösterir.'),
      f('Köprülü Mehmet Paşa', '1656–1661 sadrazamlık', 'Sadrazam', 'Geniş yetki şartıyla maliye, ordu ve yönetimde düzen sağlamaya çalıştı.', ['Köprülüler dönemi', 'Girit ve merkezî otorite'], 'Islahatın hanedan değil güçlü sadrazam ailesi eliyle yürütülmesinin örneğidir.'),
      f('Koçi Bey–Kâtip Çelebi', '17. yüzyıl', 'Layiha yazarı ve bilgin', 'Koçi Bey eski düzene dönüş önerileri, Kâtip Çelebi ise coğrafya ve maliye dahil daha analitik gözlemler sundu.', ['Risale/layiha geleneği', 'Cihannüma ve Mizanü’l-Hak'], 'Dönemin kendi sorunlarını fark edip çözüm aradığını gösterir.'),
    ],
    sameTime: [row('Avrupa', 'Askerî Devrim ve merkantilizm gelişti.', 'Osmanlı daha çok nakit ve ateşli silahlı asker ihtiyacı duydu.'), row('Atlantik', 'Sömürge ticareti ve gümüş akışı büyüdü.', 'Fiyat Devrimi Osmanlı maliyesini etkiledi.'), row('Osmanlı taşrası', 'Celali hareketleri ve Büyük Kaçgun yaşandı.', 'Vergi, savaş ve güvenlik krizi üretimi sarstı.')],
    school: ['Zitvatorok–Kasr-ı Şirin–Karlofça önemlerini ayır.', 'Celali nedenlerini yalnız eşkıyalıkla açıklama.', 'Tımar–iltizam–malikâne dönüşümünü mali ihtiyaçla bağla.', 'Islahatçı ve eser eşleştirmelerini bil.'],
    mustKnow: ['1606 Zitvatorok mütekabiliyet yönünde değişimdir.', '1639 Kasr-ı Şirin doğu sınırının ana çizgisidir.', '1683 II. Viyana Kutsal İttifakı tetikledi.', '1699 Karlofça büyük toprak kaybı ve savunma diplomasisi eşiğidir.', 'Celaliler ekonomik-sosyal-siyasi nedenlidir.', 'Ekber-erşed veraset krizini azaltmayı amaçladı.', 'İltizam nakit gelir ihtiyacıyla genişledi.', 'Köprülüler kişi/ailenin gücüne bağlı ıslah örneğidir.'],
  },
  'on-sekizinci-yuzyil-osmanli': {
    figures: [
      f('III. Ahmed–Nevşehirli Damat İbrahim Paşa', '1703–1730', 'Padişah ve sadrazam', 'Pasarofça sonrası elçilik, matbaa, imar ve seçici Avrupa gözlemini desteklediler.', ['Lale Devri', 'Yirmisekiz Çelebi Mehmet', 'İbrahim Müteferrika'], 'Dönemi yalnız eğlence olarak okumamak gerekir; kültürel ve teknik aktarım denemesidir.'),
      f('Humbaracı Ahmed Paşa', '1675–1747', 'Askerî uzman', 'Humbaracı Ocağını modern talim ve teknikle düzenledi.', ['Topçu ve mühendislik', 'Avrupalı uzmanlardan yararlanma'], 'Askerî yeniliğin teknik bilgi ve kurum aktarımıyla yürütüldüğünü gösterir.'),
      f('III. Selim', '1789–1807', 'Osmanlı padişahı', 'Nizam-ı Cedit ordusu, İrad-ı Cedit ve daimi elçiliklerle programlı reform denedi.', ['Daimi elçilikler', 'Yeni ordu ve mali kaynak', 'Kabakçı Mustafa İsyanı'], 'Askerî reformun maliye ve diplomasiyle birlikte kurulması gerektiğini gördü.'),
    ],
    sameTime: [row('Rusya', 'Karadeniz ve Boğazlar yönünde büyüdü.', 'Küçük Kaynarca ve Kırım kaybı güvenliği değiştirdi.'), row('Avrupa', 'Aydınlanma, bilim ve askerî teknik gelişti.', 'Osmanlı elçilik ve uzmanlarla seçici aktarım yaptı.'), row('İstanbul', 'Matbaa ve yeni tüketim kültürü tartışma yarattı.', 'Yenilikler statü ve çıkar dengelerine dokundu.')],
    school: ['Prut–Pasarofça–Belgrad–Küçük Kaynarca sırasını bil.', 'Lale Devri yeniliklerini kişiyle eşleştir.', 'Nizam-ı Cedit–İrad-ı Cedit bağını açıkla.', 'Kırım’ın kaybının dinî ve stratejik önemini yaz.'],
    mustKnow: ['1711 Prut Rusya’ya karşı başarıdır.', '1718 Pasarofça Lale Devri’ni başlattı.', 'İbrahim Müteferrika Türkçe eser basan matbaayla ilişkilidir.', '1739 Belgrad batıda son avantajlı antlaşmalardandır.', '1774 Küçük Kaynarca ağır Rus avantajları doğurdu.', 'Kırım Osmanlıdan koparıldı, 1783’te Rusya ilhak etti.', 'III. Selim Nizam-ı Cedit ve daimi elçiliklerdir.', 'Reformun mali ayağı İrad-ı Cedit’tir.'],
  },
  'on-dokuzuncu-yuzyil-osmanli': {
    figures: [
      f('II. Mahmud', '1808–1839', 'Osmanlı padişahı', 'Yeniçeriyi kaldırdı; yeni ordu, nezaretler, posta, nüfus ve eğitim düzenlemeleriyle merkezileşti.', ['1826 Vakayıhayriye', 'Asakir-i Mansure', 'Sened-i İttifak'], 'Modern merkezî devlet araçlarının temelini attı.'),
      f('Mustafa Reşit Paşa', '1800–1858', 'Diplomat ve devlet adamı', 'Tanzimat Fermanı’nın hazırlanması ve Avrupa diplomasisinde rol aldı.', ['1839 Tanzimat', 'Hukuk ve idare reformu'], 'Reformu dış siyaset ve iç merkezileşmeyle birlikte yürüttü.'),
      f('Mithat Paşa', '1822–1884', 'Devlet adamı', 'Vilayet reformları ve Kanun-ı Esasi’nin hazırlanmasında etkili oldu.', ['1876 I. Meşrutiyet', 'Taşra yönetimi'], 'Anayasal yönetim ve modern idare arayışının önemli ismidir.'),
      f('II. Abdülhamid', '1876–1909', 'Osmanlı padişahı', 'Meclisi kapattı; eğitim, haberleşme ve denge siyasetiyle merkezi denetimi geliştirdi.', ['İstibdat dönemi tartışması', 'Okullar ve Hicaz Demiryolu', '1908 II. Meşrutiyet'], 'Modern kurumlaşma ile otoriter merkezileşmenin birlikte yürüdüğü dönemi temsil eder.'),
    ],
    sameTime: [row('Avrupa', 'Fransız İhtilali ve Sanayi Devrimi etkileri yayıldı.', 'Milliyetçilik ve üretim rekabeti Osmanlıyı zorladı.'), row('Balkanlar', 'İsyanlar büyük güç desteğiyle uluslararasılaştı.', 'Osmanlıcılık ve eşit yurttaşlık arayışını güçlendirdi.'), row('Osmanlı', 'Ordu, hukuk, eğitim ve temsil reformları yapıldı.', 'Amaç dağılmayı önlemek ve merkezî kapasiteyi artırmaktı.')],
    school: ['Sened-i İttifak, Tanzimat, Islahat ve Kanun-ı Esasi farklarını yaz.', 'II. Mahmud yeniliklerini kurumlarla eşleştir.', 'I–II. Meşrutiyet tarih ve sonuçlarını ayır.', 'Telgraf–demiryolu–okulun merkezileşmeye etkisini açıkla.'],
    mustKnow: ['1808 Sened-i İttifak ayan–merkez ilişkisidir.', '1826 Yeniçeri Ocağı kaldırıldı.', '1839 Tanzimat can-mal-namus ve kurallı vergi/askerliktir.', '1856 Islahat özellikle gayrimüslim haklarını genişletti.', '1876 Kanun-ı Esasi ve I. Meşrutiyet.', '1908 II. Meşrutiyet.', 'Ferman anayasa değildir.', 'Modernleşme merkezî devletin topluma erişimini artırdı.'],
  },
  'balta-limani-ve-osmanli-ekonomisi': {
    figures: [
      f('II. Mahmud', '1808–1839', 'Osmanlı padişahı', 'Mehmet Ali Paşa krizinde İngiliz desteği ararken 1838 ticaret antlaşmasını onayladı.', ['Mısır sorunu', 'Yed-i vahidin kaldırılması'], 'Ekonomik tavizin güvenlik ve diplomasi ihtiyacından bağımsız olmadığını gösterir.'),
      f('Mehmet Ali Paşa', '1769–1849', 'Mısır valisi', 'Mısır’da güçlü ordu ve ekonomi kurarak Osmanlı merkezine karşı genişledi.', ['Kütahya Antlaşması', 'Nizip ve Hünkâr İskelesi', 'Balta Limanı bağlamı'], 'Yerel valinin merkez karşısında güçlenmesi uluslararası krize dönüştü.'),
      f('Düyun-ı Umumiye yöneticileri', '1881 sonrası', 'Alacaklı devlet temsilcileri', 'Belirli Osmanlı gelirlerini dış borçların ödenmesi için topladı.', ['Muharrem Kararnamesi', 'Tuz, tütün ve bazı vergi gelirleri'], 'Mali egemenliğin sınırlandırılmasının kurumsal göstergesidir.'),
    ],
    sameTime: [row('İngiltere', 'Sanayi üretimi pazar ve ham madde arıyordu.', 'Serbest ticaret antlaşmalarını teşvik etti.'), row('Osmanlı pazarı', 'Lonca ve küçük üretici fabrika malıyla rekabet etti.', 'Koruma ve tekel araçları zayıfladı.'), row('Devlet maliyesi', 'Savaş harcamaları dış borcu büyüttü.', '1854 borçlanması 1881 dış denetimine uzandı.')],
    school: ['Yed-i vahidin ne olduğunu bil.', 'Antlaşmanın diplomatik bağlamını yaz.', 'İthalat artışı ile refahı aynı sayma.', '1854 dış borç–1875 mali kriz–1881 Düyun sırasını kur.'],
    mustKnow: ['1838 Balta Limanı İngiltere ile yapıldı.', 'Mehmet Ali Paşa krizi siyasi zemindir.', 'Yed-i vahid devlet tekelidir.', 'Yabancı tüccarın iç pazara erişimi genişledi.', 'Yerli atölye ucuz fabrika malıyla rekabet etti.', '1854 ilk dış borç Kırım Savaşı sırasında alındı.', '1875 mali iflas ilanı geldi.', '1881 Düyun-ı Umumiye mali denetimi kuruldu.'],
  },
  'yirminci-yuzyil-baslarinda-osmanli': {
    figures: [
      f('Namık Kemal', '1840–1888', 'Yazar ve Genç Osmanlı', 'Vatan, hürriyet ve anayasal yönetim fikirlerini savundu.', ['Osmanlıcılık', 'Kanun-ı Esasi düşüncesi'], 'Ortak yurttaşlık ve anayasal vatan fikrinin önemli temsilcisidir.'),
      f('II. Abdülhamid', '1876–1909', 'Osmanlı padişahı', 'İslam birliği, eğitim ve denge siyasetiyle imparatorluğu tutmaya çalıştı.', ['Halifelik siyaseti', '1908 II. Meşrutiyet'], 'İslamcılık ile modern merkezî kurumların birlikte kullanılmasını gösterir.'),
      f('Ziya Gökalp–Yusuf Akçura', '1876–1924 / 1876–1935', 'Düşünürler', 'Türkçülük, millet ve modernleşme üzerine farklı programlar geliştirdiler.', ['Üç Tarz-ı Siyaset', 'Dil ve kültür birliği'], 'İmparatorluk çözümleri içinden millî devlet fikrine geçişi temsil ederler.'),
    ],
    sameTime: [row('Balkanlar', 'Milliyetçi devletler genişledi.', 'Osmanlıcılığın uygulama alanı daraldı.'), row('İslam dünyası', 'Sömürge baskısı arttı.', 'Halifelik ve ümmet dayanışması siyasi araç oldu.'), row('Avrupa', 'Bilim, sanayi ve ulus devlet kurumları güçlendi.', 'Baticılık kurum ve düşünce yenilenmesini tartıştı.')],
    school: ['Osmanlıcılık–İslamcılık–Türkçülük–Batıcılık temel bağını ayır.', 'Jön Türk, İttihat ve Terakki kavramlarını bil.', '31 Mart Olayı ile takvim tarihini karıştırma.', 'Fikir akımlarının ortak amacının devleti kurtarmak olduğunu yaz.'],
    mustKnow: ['Osmanlıcılık ortak hukuki yurttaşlıktır.', 'İslamcılık ümmet ve halifelik bağıdır.', 'Türkçülük dil-kültür-millet vurgusudur.', 'Batıcılık bilim ve kurum yenilenmesini savunur.', 'Akimlar tamamen yalıtılmış bloklar değildir.', '1908 II. Meşrutiyet yeniden ilan edildi.', '31 Mart Olayı 13 Nisan 1909’dur.', 'Hareket Ordusu isyanı bastırdı.'],
  },
  'trablusgarp-savasi': {
    figures: [
      f('Mustafa Kemal', '1911–1912', 'Kurmay subay', 'Gizlice bölgeye geçip Derne ve Tobruk çevresinde yerel direnişi örgütledi.', ['Gayrinizami savaş', 'Yerel halkın eğitimi'], 'Merkezî lojistik olmadan örgütleme ve araziye uyum becerisini gösterdi.'),
      f('Enver Bey', '1911–1912', 'Kurmay subay', 'Bingazi çevresindeki direniş güçlerini örgütledi.', ['Gönüllü subaylar', 'Senusi desteği'], 'Savaşın düzenli cepheden yerel direnişe dönüşmesinde rol aldı.'),
      f('V. Mehmet Reşad–Giolitti', '1909–1918 / 1903–1914', 'Osmanlı padişahı ve İtalya başbakanı', 'İki devletin siyasi karar merkezlerini temsil ettiler; İtalya sömürge hedefiyle saldırdı.', ['İtalyan milliyetçiliği ve sömürgecilik', 'Uşi Antlaşması'], 'Savaşın yerel değil Avrupa sömürge rekabetinin parçası olduğunu gösterir.'),
    ],
    sameTime: [row('İtalya', 'Geç birliğini tamamlayıp sömürge arıyordu.', 'Libya yakın ve savunması zor hedefti.'), row('Mısır', 'İngiliz denetimindeydi.', 'Osmanlı kara yoluyla düzenli ordu gönderemedi.'), row('Balkanlar', 'Devletler Osmanlıya karşı savaşa hazırlanıyordu.', 'Osmanlıyı Uşi barışına zorladı.')],
    school: ['İtalya’nın nedenlerini sınıflandır.', 'Osmanlının ordu gönderememe nedenini haritayla açıkla.', 'Mustafa Kemal–Derne/Tobruk eşleştirmesini bil.', 'Uşi maddeleri ile On İki Ada meselesini yaz.'],
    mustKnow: ['1911–1912 Trablusgarp Savaşı.', 'İtalya Osmanlının son Afrika toprağına saldırdı.', 'Mısır İngiliz denetimindeydi.', 'Donanma yetersizliği deniz sevkiyatını engelledi.', 'Mustafa Kemal Derne–Tobrukta görev yaptı.', 'Yerel halk gönüllü subaylarca örgütlendi.', 'Uşi ile Trablusgarp–Bingazi kaybedildi.', 'On İki Ada geçici bırakıldı, geri alınamadı.'],
  },
  'balkan-savaslari': {
    figures: [
      f('V. Mehmet Reşad', '1909–1918', 'Osmanlı padişahı', 'Savaşlar sırasında anayasal monarşinin hükümdarıydı; siyasi ve askerî kararlar hükümetlerce yürütüldü.', ['İttihatçı–İtilafçı çekişmesi', 'Ordu siyaseti'], 'Hükümdar adını bilmek gerekir; fakat sonucu tek başına padişah kararıyla açıklamak yanlıştır.'),
      f('Enver Bey', '1881–1922', 'İttihatçı subay', 'Babıali Baskını ve Edirne’nin geri alınış sürecinde öne çıktı.', ['1913 Babıali Baskını', 'II. Balkan Savaşı'], 'Asker-siyaset ilişkisinin dönem üzerindeki etkisini temsil eder.'),
      f('Balkan hükümdar ve hükümetleri', '1912–1913', 'Bulgar, Sırp, Yunan ve Karadağ liderlikleri', 'Rus teşviki ve paylaşım hedefiyle Osmanlıya karşı ittifak; sonra birbirlerine karşı savaş yürüttüler.', ['I. savaş ittifakı', 'II. savaş paylaşım kavgası'], 'Devletler arası ittifakın kalıcı dostluk değil çıkar dengesi olduğunu gösterir.'),
    ],
    sameTime: [row('Osmanlı ordusu', 'Sevk, ikmal ve siyaset sorunları yaşadı.', 'Hızlı toprak kaybını büyüttü.'), row('Balkan ittifakı', 'Ortak düşmana karşı birleşti.', 'İlk savaş sonrası paylaşımda dağıldı.'), row('Anadolu', 'Balkan göçmenleri geldi.', 'Nüfus, ekonomi ve millî kimlik üzerinde kalıcı etki yarattı.')],
    school: ['I ve II. Balkan Savaşı taraflarını ayır.', 'Londra ve Bükreş sonuçlarını bil.', 'Edirne’nin hangi savaşta kaybedilip geri alındığını yaz.', 'Göç ve fikir akımlarına etkisini açıkla.'],
    mustKnow: ['1912 I. Balkan Savaşı Osmanlıya karşı ittifaktır.', 'Bulgaristan Çatalca’ya kadar ilerledi.', 'Londra ile Midye–Enez sınırı oluştu.', 'Arnavutluk bağımsız oldu.', 'Selanik Yunanistan’a geçti.', '1913 II. savaş paylaşım kavgasıdır.', 'Osmanlı Edirne ve Kırklareli’ni geri aldı.', 'Balkan kaybı Osmanlıcılığı zayıflattı.'],
  },
  'birinci-dunya-savasi': {
    figures: [
      f('Enver Paşa', '1914–1918', 'Harbiye Nazırı ve başkomutan vekili', 'Almanya’ya yakın ittifak, Kafkas taarruzu ve savaş yönetiminde belirleyici rol oynadı.', ['Goeben–Breslau', 'Sarıkamış Harekâtı'], 'Kişisel rolü önemlidir; Osmanlının savaşa girişini tek kişinin kararıyla açıklamak eksiktir.'),
      f('Mustafa Kemal', '1915–1918', 'Cephe komutanı', 'Çanakkale’de kara savunması, Muş–Bitlis ve Suriye’de komuta görevleri yürüttü.', ['Anafartalar', 'Savunma ve geri çekilme kararları'], 'Millî Mücadele liderliğinden önceki askerî tecrübesinin önemli bölümünü bu savaşta kazandı.'),
      f('Liman von Sanders–Cemal Paşa', '1914–1918', 'Alman askerî danışman ve Osmanlı komutanı', 'Çanakkale savunması ile Kanal/Suriye cephelerinin üst yönetiminde rol aldılar.', ['İttifakın askerî etkisi', 'Cephe stratejileri'], 'Komuta yapısında Osmanlı ve Alman etkisinin birlikte bulunduğunu gösterir.'),
    ],
    sameTime: [row('Avrupa', 'Batı ve Doğu cephelerinde yıpratma savaşı sürdü.', 'Osmanlı cepheleri küresel kaynak dağılımını etkiledi.'), row('Rusya', '1917 devrimleriyle savaştan çekildi.', 'Kafkas cephesinde Brest-Litovsk sonucu doğdu.'), row('ABD', '1917’de savaşa katıldı.', 'İtilafın kaynak üstünlüğünü ve savaş sonu ilkelerini etkiledi.')],
    school: ['Genel neden–tetikleyici neden ayrımını yap.', 'Osmanlı cephelerini taarruz/savunma/yardım diye sınıflandır.', 'Cephe–komutan–amaç eşleştirmelerini bil.', 'Wilson İlkeleri ile barış antlaşmalarının farkını açıkla.'],
    mustKnow: ['Saraybosna suikasti tetikleyicidir.', 'Osmanlı Goeben–Breslau sonrası savaşa girdi.', 'Kafkas ve Kanal taarruz cepheleridir.', 'Çanakkale Boğaz ve başkent savunmasıdır.', 'Irak petrol ve Körfez yoluyla ilgilidir.', 'Mustafa Kemal Çanakkale’de öne çıktı.', 'Rusya 1917 devrimi sonrası çekildi.', 'Mondros Osmanlı için savaşı bitirdi.'],
  },
  'mondros-ve-isgaller': {
    figures: [
      f('Ahmet İzzet Paşa', '1918', 'Sadrazam', 'Mondros görüşmelerini Osmanlı adına yürüten hükümetin başındaydı.', ['30 Ekim 1918', 'Ateşkes ve terhis'], 'Ateşkesin siyasi sorumluluk bağlamını gösterir.'),
      f('Rauf Orbay', '1881–1964', 'Bahriye Nazırı ve başdelege', 'Mondros’u Osmanlı adına imzaladı; sonra Millî Mücadele’ye katıldı.', ['Ateşkes heyeti', 'Sivas ve TBMM'], 'Bir kişinin farklı tarihsel evrelerde değişen rolünü gösterir.'),
      f('Hasan Tahsin', '1888–1919', 'Gazeteci', 'İzmir işgali sırasında ilk silahlı tepkinin sembol isimlerinden oldu.', ['15 Mayıs 1919 İzmir', 'Ulusal tepkinin büyümesi'], 'İşgallerin yerel direniş ve kamuoyu üzerindeki etkisini simgeler.'),
    ],
    sameTime: [row('Paris Barış Konferansı', 'Galipler Osmanlı topraklarını paylaşıyordu.', 'İzmir’in Yunanistan’a verilmesi rekabet ürünüdür.'), row('Anadolu', 'Yerel cemiyet ve Kuvayımilliye oluştu.', 'Merkezî ordunun terhisi yerel direnişi zorunlu kıldı.'), row('İstanbul hükümetleri', 'Teslimiyet ve farklı kurtuluş çözümleri tartışıldı.', 'Millî egemenlik seçeneği henüz tek merkez değildi.')],
    school: ['Mondros’un 7. maddesini yorumla.', 'İlk işgal ve ilk kurşun gibi müfredat kabullerini bil.', 'Yararlı/zararlı cemiyetleri amaçlarıyla ayır.', 'Kuvayımilliyenin yarar ve sınırlarını yaz.'],
    mustKnow: ['30 Ekim 1918 Mondros.', '7. madde belirsiz güvenlik gerekçesiyle işgal imkânı verdi.', 'Ordu terhis edildi.', 'Musul İngilizlerce işgal edildi.', 'İzmir 15 Mayıs 1919’da Yunanistan tarafından işgal edildi.', 'Cemiyetler ilk aşamada bölgeseldi.', 'Kuvayımilliye yerel direnişti.', 'Ateşkes savaşı bitirdi, uygulama işgali genişletti.'],
  },
  'milli-mucadele-hazirlik': {
    figures: [
      f('Mustafa Kemal Paşa', '1919–1920', '9. Ordu Müfettişi ve Temsil Heyeti başkanı', 'Samsun’dan Ankara’ya yerel direnişi millî egemenlik programına dönüştürdü.', ['Havza–Amasya', 'Erzurum–Sivas', 'TBMM'], 'Resmî görevden sivil millî liderliğe geçişin merkez ismidir.'),
      f('Kazım Karabekir', '1882–1948', '15. Kolordu Komutanı', 'Mustafa Kemal’in askerlikten ayrılması sonrası desteğini sürdürdü; Erzurum Kongresi ve doğu güvenliğinde belirleyici oldu.', ['Erzurum Kongresi', 'Doğu Cephesi'], 'Ordunun millî harekete desteğinin kritik örneğidir.'),
      f('Rauf Orbay–Bekir Sami Bey', '1919–1920', 'Temsil Heyeti ve diplomasi kadrosu', 'Amasya, kongreler ve görüşmelerde millî hareketin siyasi örgütlenmesine katkı verdiler.', ['Amasya Genelgesi', 'Sivas Kongresi', 'Amasya Görüşmeleri'], 'Mücadelenin tek kişilik değil kadrolu bir siyasi hareket olduğunu gösterir.'),
    ],
    sameTime: [row('İstanbul', 'Hükümet ve son Mebusan Meclisi vardı.', 'Amasya Görüşmeleri meşruiyet bağını kurdu.'), row('Anadolu', 'Yerel cemiyetler ve kongreler gelişti.', 'Sivas’ta ulusal çatıya dönüştü.'), row('İtilaf Devletleri', 'İşgaller ve İstanbul baskısı arttı.', 'Misakımillî sonrası işgal TBMM’yi hızlandırdı.')],
    school: ['Samsun–Havza–Amasya işlevlerini ayır.', 'Erzurum ve Sivas Kongrelerini karşılaştır.', 'Temsil Heyetinin yürütme niteliğini açıkla.', 'Misakımillî–İstanbul’un işgali–TBMM zincirini kur.'],
    mustKnow: ['19 Mayıs 1919 Samsun.', 'Havza halkı miting ve protestoya çağırdı.', 'Amasya gerekçe–amaç–yöntemi açıkladı.', 'Erzurum bölgesel toplanıp ulusal karar aldı.', 'Sivas ulusal toplandı ve cemiyetleri birleştirdi.', 'Temsil Heyeti yürütme gibi çalıştı.', 'Misakımillî son Osmanlı Meclisinde kabul edildi.', '23 Nisan 1920 TBMM açıldı.'],
  },
  'kurtulus-savasi': {
    figures: [
      f('Mustafa Kemal', '1920–1922', 'TBMM Başkanı ve Başkomutan', 'Meclis otoritesi, Sakarya savunması ve Büyük Taarruz stratejisinde belirleyici oldu.', ['Başkomutanlık', 'Tekâlif-i Milliye', 'Sakarya ve Büyük Taarruz'], 'Siyasi egemenlik ile askerî komutayı aynı hedefte birleştirdi.'),
      f('İsmet Paşa', '1884–1973', 'Batı Cephesi komutanı ve diplomat', 'İnönü savaşlarında düzenli orduyu yönetti; Mudanya ve Lozan’da başdelege oldu.', ['I–II. İnönü', 'Mudanya', 'Lozan'], 'Askerî başarının diplomatik sonuca çevrilmesinde rol aldı.'),
      f('Kazım Karabekir–Fevzi Paşa', '1920–1922', 'Doğu Cephesi ve Genelkurmay komutanları', 'Doğuda sınırı güvenceye alma ve Batı Cephesi savaş planlarının kurulmasında rol aldılar.', ['Gümrü–Kars', 'Sakarya ve Büyük Taarruz hazırlığı'], 'Cepheler arası kuvvet ve komuta bütünlüğünü temsil ederler.'),
    ],
    sameTime: [row('Doğu', 'Ermenistan savaşı erken sonuçlandı.', 'Batı cephesine kaynak aktarımı kolaylaştı.'), row('Güney', 'Yerel direniş Fransa’yı anlaşmaya yöneltti.', 'Ankara Antlaşması siyasi tanınmayı güçlendirdi.'), row('Batı', 'Yunan ordusuna karşı düzenli ordu savaştı.', 'Askerî zafer Mudanya ve Lozan’a dönüştü.')],
    school: ['1921 Anayasasının egemenlik ve güçler birliği yönünü yaz.', 'Cephe–komutan–antlaşma eşleştirmelerini bil.', 'İnönü–Sakarya–Büyük Taarruz sırasını kur.', 'Mudanya ile Lozan arasındaki farkı açıkla.'],
    mustKnow: ['1921 Anayasası egemenliği millete verdi.', 'Kuvayımilliyeden düzenli orduya geçildi.', 'Gümrü TBMM’nin ilk uluslararası antlaşmasıdır.', 'İnönü zaferleri meclis ve ordu güvenini artırdı.', 'Sakarya savunmadan taarruza geçiş zeminidir.', '26 Ağustos 1922 Büyük Taarruz başladı.', 'Mudanya silahlı çatışmayı bitirdi.', 'Lozan bağımsızlığı uluslararası hukukta tanıttı.'],
  },
  'ataturk-ilke-ve-inkilaplari': {
    figures: [
      f('Mustafa Kemal Atatürk', '1923–1938', 'Cumhurbaşkanı', 'Siyasi egemenlik, hukuk, eğitim, kültür ve ekonomi reformlarının ana yönünü belirledi.', ['Cumhuriyet ve laikleşme', 'Eğitim-kültür reformları', 'Devletçilik'], 'İnkılapları tek tek değil millî egemenlik ve çağdaşlaşma programı içinde okumak gerekir.'),
      f('İsmet İnönü', '1923–1937 başbakanlık dönemleri', 'Başbakan', 'İnkılap kanunları, ekonomi ve dış politikada uygulama sorumluluğu üstlendi.', ['Lozan sonrası kurumlaşma', 'Devletçilik ve sanayi planları'], 'Yeni devletin kararlarını idarî programa dönüştüren başlıca isimdir.'),
      f('Mahmut Esat Bozkurt–Mustafa Necati', '1920’ler', 'Adalet ve eğitim bakanları', 'Medeni Kanun ve eğitim/alfabe uygulamalarında rol aldılar.', ['Hukuk birliği', 'Millet Mektepleri ve eğitim'], 'Reformların uzman kadro ve kurumlarla uygulandığını gösterir.'),
    ],
    sameTime: [row('Avrupa', 'Ulus devlet, laik hukuk ve ekonomik krizler tartışılıyordu.', 'Türkiye seçici hukuk ve kurum aktarımı yaptı.'), row('Türkiye toplumu', 'Okuryazarlık, hukuk ve yurttaşlık yapısı değiştirildi.', 'Reformların toplumsal etkisi zamana yayıldı.'), row('Ekonomi', 'Özel sermaye sınırlıydı, 1929 krizi yaşandı.', 'Karma ekonomi ve devletçilik güçlendi.')],
    school: ['İnkılapları alan–ilke–amaç şeklinde eşleştir.', 'Saltanat ve halifelik kaldırılma gerekçelerini ayır.', 'Tevhid-i Tedrisat ile Harf İnkılabını karıştırma.', 'Devletçiliği özel mülkiyeti kaldıran sistem sayma.'],
    mustKnow: ['1922 saltanat kaldırıldı.', '29 Ekim 1923 Cumhuriyet ilan edildi.', '1924 halifelik kaldırıldı ve eğitim birleştirildi.', '1925 tekke-zaviye kapatıldı.', '1926 Medeni Kanun kabul edildi.', '1928 yeni Türk harfleri kabul edildi.', 'Kabotaj ekonomik bağımsızlıktır.', 'Devletçilik karma ekonomi aracıdır.'],
  },
  'ataturk-donemi-ic-dis-politika': {
    figures: [
      f('Mustafa Kemal Atatürk', '1923–1938', 'Cumhurbaşkanı', 'Tam bağımsızlık, karşılıklılık ve barış ilkeleriyle dış politikanın yönünü belirledi.', ['Musul, Montrö, Hatay', 'Balkan ve Sadabat paktları'], 'Barışçılığı güvenlik ve egemenlikten vazgeçmek değil diplomatik araçla korumak olarak uyguladı.'),
      f('Tevfik Rüştü Aras', '1925–1938', 'Dışişleri Bakanı', 'Milletler Cemiyeti, Balkan Antantı, Sadabat ve Montrö süreçlerinde diplomasi yürüttü.', ['Bölgesel paktlar', 'Montrö Boğazlar Sözleşmesi'], 'Dış politikanın kurumsal ve süreklilik taşıyan diplomasi ayağını temsil eder.'),
      f('Ali Fethi Okyar–Kazım Karabekir', '1920–1930’lar', 'Muhalefet liderleri', 'Serbest Cumhuriyet ve Terakkiperver partilerinde çok partili hayat denemelerine öncülük ettiler.', ['1924 TCF', '1930 SCF'], 'Muhalefet ihtiyacı ile rejim güvenliği kaygısının birlikte yaşandığını gösterir.'),
    ],
    sameTime: [row('Avrupa', 'Faşizm ve revizyonist devletler yükseldi.', 'Türkiye bölgesel güvenlik paktlarını destekledi.'), row('Sovyetler–İngiltere', 'Boğazlar ve güvenlik dengesi değişti.', 'Montrö için uygun uluslararası ortam oluştu.'), row('Fransa–Suriye', 'Manda düzeni çözülmeye başladı.', 'Hatay diplomasi ve halkoyuyla Türkiye’ye katıldı.')],
    school: ['TCF ve SCF kuruluş/kapanış şartlarını ayır.', 'Musul–Boğazlar–Hatay sonuçlarını karşılaştır.', 'Balkan Antantı ve Sadabat üyelerini bil.', 'Yurtta sulh ilkesini pasiflik diye yorumlama.'],
    mustKnow: ['1924 TCF, 1930 SCF denemeleridir.', 'Musul 1926 Ankara Antlaşmasıyla Irak’a bırakıldı.', 'Türkiye 1932 Milletler Cemiyetine girdi.', '1934 Balkan Antantı batı güvenliğidir.', '1936 Montrö Boğazlarda egemenliği güçlendirdi.', '1937 Sadabat doğu-güneydoğu güvenliğidir.', 'Hatay 1939’da Türkiye’ye katıldı.', 'Dış politikada barış ve tam bağımsızlık birlikte izlendi.'],
  },
  'ikinci-dunya-savasi-ve-sonrasi': {
    figures: [
      f('İsmet İnönü', '1938–1950', 'Cumhurbaşkanı', 'Türkiye’yi savaş dışında tutmaya çalıştı; savaş ekonomisi ve çok partili geçişi yönetti.', ['Adana–Kahire görüşmeleri', 'Millî Korunma ve Varlık Vergisi', '1946 çok partili seçim'], 'Denge siyasetinin ağır ekonomik-toplumsal maliyetle yürüdüğünü gösterir.'),
      f('Churchill–Roosevelt–Stalin', '1939–1945', 'Müttefik liderler', 'Türkiye’nin savaşa katılımı ve savaş sonrası düzen üzerinde farklı baskı ve kararlar ürettiler.', ['Adana/Kahire', 'Yalta ve yeni dünya düzeni'], 'Türkiye’nin kararlarının küresel güç pazarlığından bağımsız olmadığını gösterir.'),
      f('Celal Bayar–Adnan Menderes', '1946 sonrası', 'Demokrat Parti liderleri', 'Çok partili rekabeti büyüttü ve 1950 seçimleriyle iktidara geldi.', ['Dörtlü Takrir', '1946 ve 1950 seçimleri'], 'İktidarın seçimle barışçıl değişmesinin başlıca aktörleridir.'),
    ],
    sameTime: [row('Avrupa', 'Mihver–Müttefik savaşı ve büyük yıkım yaşandı.', 'Türkiye seferberlik ve kıtlık baskısı altında kaldı.'), row('SSCB', 'Savaş sonrası Boğaz ve sınır talepleri yükseldi.', 'Türkiye Batı güvenlik sistemine yöneldi.'), row('ABD', 'Truman, Marshall ve NATO sistemi kuruldu.', 'Ekonomik yardım ve askerî ittifak farklı araçlar oldu.')],
    school: ['Türkiye’nin neden savaş dışında kaldığını yaz.', 'Savaş ekonomisi uygulamalarını toplum etkisiyle açıkla.', 'Savaş ilanı ile fiilî cepheye girmeyi ayır.', 'Truman–Marshall–Kore–NATO zincirini kur.'],
    mustKnow: ['Türkiye savaş boyunca dengeyle savaş dışı kaldı.', 'Millî Korunma Kanunu ekonomiye devlet müdahalesidir.', 'Varlık ve Toprak Mahsulleri vergileri toplumsal sorun yarattı.', '1945 savaş ilanı fiilî cephe açmadı.', 'Türkiye BM kurucu düzenine katıldı.', 'Truman askerî-siyasi, Marshall ekonomik destektir.', 'Kore’ye asker NATO sürecini destekledi.', '1950 iktidar seçimle barışçıl değişti.'],
  },
}

