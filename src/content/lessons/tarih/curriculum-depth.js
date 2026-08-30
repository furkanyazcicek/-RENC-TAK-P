/**
 * 2026 YKS'ye esas MEB konu-kazanim listesi ile 2024 Tarih Dersi Ogretim
 * Programinin ortak omurgasi. Her satir "adi bil" yerine "islevi ve siniri
 * acikla" mantigiyla yazildi. Bu dosya, ana ders metnini ansiklopedik bir
 * yigin haline getirmeden eksik alt kazanimi gorunur kilar.
 */

export const HISTORY_CURRICULUM_DEPTH = {
  'tarih-bilimi-ve-zaman': {
    focus: 'Tarihsel bilginin nasil uretildigini, takvim ve kronolojinin neden yalnizca tarih ezberi olmadigini kavra.',
    coverage: [
      ['Kaynak ve kanit', 'Yazili, sozlu, gorsel ve maddi kaynaklari; birinci ve ikinci el kaynak ayrimini tanir.', 'Kaynak doneme yakin olsa bile amaci, yazari ve temsil gucu sorgulanir.'],
      ['Tarihçinin yontemi', 'Tarama, tasnif, tahlil, tenkit ve sentez basamaklarini bir arastirma sorusu uzerinde kurar.', 'Belge toplamak son degil; belgeler arasindaki uyumu ve celiskiyi aciklamak gerekir.'],
      ['Zaman ve takvim', 'On iki hayvanli Turk, Hicri, Celali, Rumi ve Miladi takvimlerin baslangic ve kullanim farklarini bilir.', 'Takvim degisikligi toplumlarin dinî, iktisadi veya idari ihtiyaclariyla iliskilendirilir.'],
      ['Donemlendirme', 'Milat, yuzyil, cag ve donem kavramlarini kullanir; tarihsel anakronizmden kacinir.', 'Bugunun degerlerini gecmise aynen tasimak tarihsel baglami bozar.'],
    ],
    analysis: 'Bir metnin “olay sirasinda yazilmis” olmasi onu degerli bir birinci el kaynak yapar; fakat dogru ve eksiksiz oldugunu garanti etmez. Tarihci, metnin hitap ettigi kisiyi, yazilma amacini, sustugu noktalar ile baska kanitlari birlikte inceler. Kronoloji de olaylari dizmekten fazlasidir: bir gelismenin baska bir gelismenin nedeni sayilabilmesi icin ondan once gerceklesmesi gerekir. YKS bu nedenle tanimdan cok, verilen arastirma isleminin hangi basamaga veya hangi sinira isaret ettigini sorar.',
    source: ['Bir hukumdar kitabesinde kazandigi savaslari ayrintili anlatirken yenilgilerinden hic soz etmemektedir.', 'Kitabe olayla ayni donemde uretilmistir; bu nedenle birinci eldir.', 'Hukumdarin mesruiyetini guclendirme amaci secici bir anlatim uretebilir.', 'Kaynak reddedilmez; rakip kayitlari, arkeolojik bulgular ve sonraki sonuclarla karsilastirilir.'],
  },
  'ilk-cag-uygarliklari': {
    focus: 'Yerlesme, uretim fazlasi, yazı, hukuk ve siyasi orgutlenmeyi ayni donusum zincirinde oku.',
    coverage: [
      ['Yazidan once', 'Gobelklitepe, Cayonu ve Catalhoyuk uzerinden yerlesme ve uretimin farkli asamalarini ayirir.', 'Yerlesik yasam her yerde ayni anda ve ayni nedenle baslamadi.'],
      ['Uretim ve yonetim', 'Tarim, sulama, arti urun, is bolumu, vergi ve burokrasi arasindaki bagi kurar.', 'Arti urun hem uzmanlasmayi hem dagitim ve guvenlik sorununu buyuttu.'],
      ['Uygarlik havzalari', 'Mezopotamya, Misir, Anadolu, Dogu Akdeniz, Ege, Hint ve Cin cevrelerini cografya ile iliskilendirir.', 'Nehir veya deniz avantaj yaratir; siyasal sonucu tek basina belirlemez.'],
      ['Hukuk ve mesruiyet', 'Urukagina, Hammurabi, Hitit ve Roma hukukunun duzen kurma bicimlerini karsilastirir.', 'Yazili hukuk keyfîligi sinirlayabilir; esitlikci oldugu sonucu otomatik cikmaz.'],
    ],
    analysis: 'Tarima gecis, yalnizca daha fazla yiyecek anlamina gelmedi. Topragin ve suyun paylasimi, urunun depolanmasi, emegin orgutlenmesi ve yerlesmenin savunulmasi yeni otorite bicimleri dogurdu. Yazı once bu karmasik yapinin kaydini kolaylastirdi; vergi, borc, mulkiyet ve ticaret izlenebilir oldu. Sehir devletleri ile imparatorluklar ayni soruna farkli olcekte cevap verdi. Sinavda bir bulusun “kime ait” oldugundan cok hangi toplumsal ihtiyaci karsiladigi ve hangi kurumu guclendirdigi belirleyicidir.',
    source: ['Bir kazida ayni doneme ait tahil ambarlari, muhurlu kaplar, olcu agirliklari ve is bolumunu gosteren atolyeler bulunmustur.', 'Ambarlar uretim fazlasi ve depolamayi gosterir.', 'Muhurlu kaplar ile standart agirliklar denetim ve ticaretin kurallastigina kanittir.', 'Bu bulgular sehirlesme ve yonetsel orgutlenmeyi destekler; tek basina monarsi oldugunu kanitlamaz.'],
  },
  'ortacagda-dunya': {
    focus: 'Orta Cag siyasi yapilarini toprak, emek, ticaret, hukuk ve askerî teknolojiyle birlikte degerlendir.',
    coverage: [
      ['Siyasi yapilar', 'Sasani, Bizans, feodal Avrupa ve Mogol siyasi orgutlenmelerini otoritenin dagilimi acisindan ayirir.', 'Orta Cag dunyasi yalniz Avrupa feodalitesinden ibaret degildir.'],
      ['Toprak ve toplum', 'Artı urun, toprak mulkiyeti, serflik ve kast gibi yapilarin toplumsal tabakalasmaya etkisini aciklar.', 'Uretimi kontrol eden kesim siyasal ve askerî guc de biriktirebilir.'],
      ['Ticaret aglari', 'Ipek ve Baharat yollarini; liman, han, pazar ve kervanlarin islevini kavrar.', 'Ticaret sadece mal degil bilgi, din, hastalik ve teknoloji de tasir.'],
      ['Hukuk ve kirilma', 'Justinianus, Cengiz Yasasi, Magna Carta ve parlamentoyu iktidarin duzenlenmesi baglaminda okur.', 'Magna Carta modern demokrasi degil, kral yetkisinin sinirlanmasinda tarihsel bir esiktir.'],
    ],
    analysis: 'Batı Roma sonrasi guvenlik acigi Avrupa’da yerel senyorlari guclendirirken Bizans, Islam dunyasi ve Asya’da merkezi veya imparatorluk olceginde yapilar varligini surdurdu. Kara Olum emek miktarini azaltarak ucret ve toprak iliskilerini sarsti; sehir ve ticaretin canlanmasi para ekonomisini genisletti. Barutlu silahlar ile vergi geliri, krallarin yerel soylulara bagimliligini azaltti. Bu nedenle feodalitenin zayiflamasi tek bir savasla degil ekonomik, demografik ve teknolojik degisimlerin birikimiyle aciklanir.',
    source: ['Bir belgede koylunun senyore urun ve emek verdigi, karsiliginda korunma ve topragi kullanma hakki elde ettigi yazmaktadir.', 'Iliski para ucretinden cok toprak, hizmet ve korumaya dayanir.', 'Yerel gucun guvenlik saglamasi merkezi otoritenin zayifligina isaret eder.', 'Belge feodal bagliligi destekler; butun Orta Cag toplumlarinin ayni duzende oldugunu gostermez.'],
  },
  'islamiyet-oncesi-turk-tarihi': {
    focus: 'Bozkir cografyasi, devlet, toplum, ordu ve ekonomi arasindaki karsilikli etkiyi acikla.',
    coverage: [
      ['Siyasi kronoloji', 'Asya Hun, Avrupa Hun, Kok Turk ve Uygur devletlerini kurulus, guc ve dagilma baglaminda siralar.', 'Devlet adlarini ezberlemek yerine kurumlarda sureklilik aranir.'],
      ['Mesruiyet ve yonetim', 'Kut, ulus, ikili teskilat, kurultay, ulus ve tore kavramlarinin yetki-sorumluluk dengesini kurar.', 'Kurultay danisma organidir; modern halk egemenligi sayilamaz.'],
      ['Bozkir ve ordu', 'At, kosum takimi, yay, onlu sistem, Turan taktigi ve ordu-millet anlayisini yasam bicimiyle baglar.', 'Hareketlilik genislemeyi kolaylastirirken boy baglari merkezilesmeyi zorlastirabilir.'],
      ['Dis iliskiler', 'Cin, Sasani ve Bizans ile ticaret, ittifak ve mucadeleyi Ipek Yolu denetimi uzerinden yorumlar.', 'Savas ve diplomasi ekonomik cikarlardan bagimsiz degildir.'],
    ],
    analysis: 'Bozkir, tarimin hic yapilmadigi bos bir alan degil; otlaklarin mevsimsel kullanildigi, hayvancilik ve ticaretin belirleyici oldugu bir ekosistemdi. Atli birlikler uzak alanlari hizla denetleyebildi; onlu sistem komuta birligini sagladi. Buna karsilik devletin hanedanin ortak sorumlulugu sayilmasi ve boy beylerinin agirligi veraset krizlerini buyutebildi. Uygurlarin sehir ve ticarete yonelmesi Turk siyasal geleneginin sona ermesi degil, farkli cografya ve inanca uyarlanmasidir.',
    source: ['Bir kagana ait metinde “gece uyumadim, gunduz oturmadim; ac milleti doyurdum” denilmektedir.', 'Metin hukumdarin halkin refahindan sorumlu sayildigini gosterir.', 'Kut, yalniz hak degil basari ve hizmet beklentisi de uretir.', 'Bu ifade yoneticinin sinirsiz oldugunu degil, mesruiyetini gorevle korudugunu destekler.'],
  },
  'islam-tarihi-ve-uygarligi': {
    focus: 'Islam toplumunun dogusunu, siyasi ayrismalari ve bilim-kultur uretimini tek bir medeniyet sureci olarak izle.',
    coverage: [
      ['Arabistan ve teblig', 'Kabile, Kâbe, ticaret, sosyal esitsizlik ve Haniflik ortamini Islam’in ilkeleriyle iliskilendirir.', 'Yeni inanc hem dinî hem toplumsal bir donusum iddiasi tasidi.'],
      ['Medine duzeni', 'Hicret, Medine Sozlesmesi, Bedir-Uhud-Hendek ve Hudeybiye’yi devletlesme acisindan yorumlar.', 'Hicret dinin baslangici degil siyasi toplumun kurulma esigidir.'],
      ['Halifelik ve ayrisma', 'Dort Halife, Emevi ve Abbasi donemlerini secim, saltanat, mevali ve merkez politikasi acisindan ayirir.', 'Genisleme siyasi birlik kadar yonetim ve temsil sorunlari da dogurdu.'],
      ['Bilim ve kultur', 'Beytulhikme, medrese, tercume; Farabi, Ibn Sina, Gazali ve Ibn Rusd gibi isimlerin katkisini baglama yerlestirir.', 'Bilgi yalniz aktarilmadi; elestirildi, gelistirildi ve yeniden dolasima sokuldu.'],
    ],
    analysis: 'Medine Sozlesmesi farkli topluluklarin ortak savunma ve hukuk sorumluluklarini belirleyerek kabile ustu siyasi duzeni guclendirdi. Fetihler buyudukce vergi, yonetim ve temsil meseleleri cesitlendi. Emevilerin Arap merkezli politikasi mevali tepkisini; Abbasilerin daha kapsayici kadro siyaseti ise Turk ve Iran unsurlarinin etkinligini artirdi. Bağdat’taki tercume faaliyeti, Antik birikimin kopyalanmasindan ibaret degildi: matematik, tip, astronomi ve felsefede yeni sorular ve eserler uretildi.',
    source: ['Bir yonetim metni, sehirdeki farkli dinî topluluklarin saldiri halinde birlikte savunma yapacagini ve herkesin kendi inancini koruyacagini belirtmektedir.', 'Ortak savunma siyasi topluluk ve aidiyet olusturur.', 'Inanc ozgurlugunun korunmasi farkli gruplarin hukuk icinde tanindigini gosterir.', 'Metin tam esitlik iddiasini tek basina kanitlamaz; fakat kabile ustu duzenin izini verir.'],
  },
  'turk-islam-devletleri': {
    focus: 'Turk devlet gelenegi ile Islamî mesruiyet, burokrasi, egitim ve toprak sisteminin nasil sentezlendigini acikla.',
    coverage: [
      ['Islamlasma sureci', 'Talas’i bir baslangic temasi olarak gorur; ticaret, sufiler, Abbasiler ve siyasi yakinlasmanin uzun etkisini aciklar.', 'Toplu ve ani din degistirme anlatimindan kacinilir.'],
      ['Devletler ve donumler', 'Karahanli, Gazneli ve Buyuk Selcukluyu; Dandanakan, Pasinler ve Malazgirt ile kronolojik baglar.', 'Her savasin sonucu ayni degildir: kurulus, Bizans’la temas ve yerlesme ayirilir.'],
      ['Kurumlar', 'Sultan-halife, divan, vezir, ikta, gulam ve atabeyligin islev ve sinirlarini kavrar.', 'Melik yonetebilir ve ordu kurabilir; bagimsiz para ve hutbe mesruiyet siniridir.'],
      ['Kultur ve egitim', 'Kutadgu Bilig, Divanu Lugati’t-Turk, Atabetu’l Hakayik, Divan-i Hikmet ve Nizamiye’yi amaclariyla eslestirir.', 'Dil, ahlak, yonetim ve tasavvuf ayni kultur cevresinin farkli alanlaridir.'],
    ],
    analysis: 'Buyuk Selcuklu genis topraklari dogrudan merkezden maasli memur ve askerle yonetemezdi. Ikta, vergi gelirini hizmete baglayarak uretimin surmesini ve atli asker yetismesini sagladi; topragin mulkiyeti devlette kaldigi icin ikta sahibinin bagimsiz bir derebeyine donusmesi teorik olarak sinirlandi. Nizamiye medreseleri de yalniz din egitimi vermedi; devletin ihtiyac duydugu ortak hukuk ve burokrasi kulturunu guclendirdi. Kurumlari bu “cozdugu sorun” uzerinden okumak YKS cikarimlarinin anahtaridir.',
    source: ['Bir melik eyaletinde asker toplamakta ve vergi duzenlemekte; ancak kendi adina hutbe okutamamaktadir.', 'Asker ve vergi yetkisi tasra yonetiminde genis hareket alani oldugunu gosterir.', 'Hutbenin sultan adina okunmasi en ust mesruiyetin merkezde kaldigini gosterir.', 'Melikin guclu olmasi bagimsiz hukumdar oldugu anlamina gelmez.'],
  },
  'turkiye-tarihi-selcuklular-beylikler': {
    focus: 'Anadolu’nun fethini, yerlesmesini, ekonomik aglarini ve siyasi parcalanmayi farkli surecler olarak ayir.',
    coverage: [
      ['Fetih ve yerlesme', 'Malazgirt sonrasi Danişmentli, Saltuklu, Mengucekli ve Artuklularin rolunu aciklar.', 'Askerî zafer kapiyi acti; kalici Turklesme nufus, kurum ve kulturle gerceklesti.'],
      ['Türkiye Selcuklulari', 'Iznik-Konya merkez degisimi, Miryokefalon, liman fetihleri ve kervansaraylari devlet stratejisiyle baglar.', 'Miryokefalon Bizans’in Anadolu’yu geri alma umudunu buyuk olcude kirdi.'],
      ['Hacli ve Mogol baskisi', 'Hacli Seferleri, Babaîler Isyani ve Kosedag’i ic-dis etkileriyle yorumlar.', 'Kosedag sonrasi Selcuklu varligi hemen bitmedi; Ilhanli bagimliligi artti.'],
      ['Toplum ve kultur', 'Ahi, baciyan, dervis, medrese, darussifa ve vakiflarin yerlesmeye katkisini aciklar.', 'Turklesme yalniz etnik degil, ekonomik ve kulturel orgutlenme surecidir.'],
    ],
    analysis: 'Anadolu’nun Turk yurdu olmasi tek bir savasin sonucu degildir. Uc bolgelere yerlesen topluluklar guvenligi saglarken beylikler cami, medrese, kopru ve kervansaraylarla kaliciligi destekledi. Türkiye Selcuklulari Antalya ve Sinop gibi limanlarla deniz ticaretine, kervansaraylarla kara ticaretine yoneldi; sigorta benzeri zarar karsilama uygulamalari tuccari tesvik etti. Kosedag’dan sonra merkez zayiflarken uc beylikleri guclendi ve Osmanli dahil yeni siyasi yapilar icin alan acildi.',
    source: ['Bir sultan, ulkesinden gecen tuccarin esyasi eskiya saldirisinda kaybolursa zararin hazineden odenecegini ilan etmistir.', 'Devlet ticaret yolunun guvenligini kamusal sorumluluk saymistir.', 'Zarar telafisi tuccarin riskini azaltir ve uluslararasi ticareti ceker.', 'Bu uygulama modern sigortayla ayni kurum degil; benzer bir ekonomik islev gorur.'],
  },
  'osmanli-devleti-kurulus': {
    focus: 'Uc beyiginin buyumesini cografya, gaza, diplomasi, iskân, askerî kurum ve rakiplerin durumuyla cok nedenli acikla.',
    coverage: [
      ['Siyasi kronoloji', 'Koyunhisar, Bursa, Palekanon, Karesi, Cimpe, Edirne, Kosova, Nigbolu, Ankara, Fetret ve Varna-II. Kosova bagini kurar.', 'Tarihler ezber degil beylikten Rumeli gucune gecisin duraklaridir.'],
      ['Kurulus tartismasi', 'Uc konumu, Bizans’in parcalanmasi, gaza, ahiler-dervisler ve esnek ittifaklari birlikte degerlendirir.', 'Tek nedenli “yalniz gaza” veya “yalniz cografya” aciklamasi yetersizdir.'],
      ['Rumeli politikasi', 'Istimalet, iskân, tahrir ve vakiflarla fethedilen alanin nasil kalici yonetime donustugunu aciklar.', 'Fetih askerî; hâkimiyet demografik, ekonomik ve idari bir surectir.'],
      ['Ordu ve toprak', 'Yaya-musellem, timarli sipahi, devsirme ve Yenicerinin merkezilesmedeki yerini ayirir.', 'Timar toprak mulkiyeti degil, vergi geliri ve hizmet bagidir.'],
      ['Kriz ve toparlanma', 'Ankara Savasi, Fetret, Seyh Bedreddin, Varna ve II. Kosova’yi devlet dayanikliligi acisindan yorumlar.', 'Fetret yikilis degil, hanedan ve kurumlarin sinandigi bir ic savas donemidir.'],
    ],
    analysis: 'Osmanli buyumesi, Bizans sinirindaki uc ortaminda ganimet ve hareket alani bulunmasiyla basladi; fakat kalicilik yalniz savasla saglanmadi. Istimalet yerel halkin dinî ve iktisadi hayatini bir anda bozmamayi, iskân stratejik bolgelere nufus yerlestirmeyi, timar ise vergi ile askerî hizmeti baglamayi sagladi. Karesi’nin alinmasi denizcilik birikimi ve Rumeli’ye gecis kapasitesi kazandirdi. Ankara yenilgisi merkezi sarssa da burokrasi, yerel cikar aglari ve Osmanli hanedaninin mesruiyeti toparlanmayi mümkün kildi.',
    source: ['Bir tahrir kaydinda yeni alinan kasabadaki kilisenin faaliyetine devam ettigi, bazi vergilerin bir sure azaltildigi ve yakina Turk ailelerin yerlestirildigi gorulmektedir.', 'Vergi kolayligi ve ibadetin surmesi istimalet politikasina kanittir.', 'Yeni nufus yerlestirilmesi iskân ve guvenlik amacini gosterir.', 'Iki politika birlikte, fethi kalici idare ve demografik dengeye donusturur.'],
  },
  'osmanli-yukselme': {
    focus: '1453-1595 arasindaki genislemeyi kara-deniz stratejisi, rakipler, ticaret ve merkezî teskilatla birlikte analiz et.',
    coverage: [
      ['Fatih ve imparatorluk', 'Istanbul’un fethi, Karadeniz-Ege siyaseti, Otlukbeli ve kanunnameleri kurumsallasma ile baglar.', 'Fetih hem baskent hem ticaret-duzen hem de imparatorluk mesruiyeti kazandirdi.'],
      ['Yavuz ve Islam dunyasi', 'Caldiran, Mercidabik ve Ridaniye’yi Safevi-Memluk rekabeti ve ticaret yollariyla yorumlar.', 'Dogu ve guney siyaseti yalniz toprak kazanimi degildir.'],
      ['Kanuni ve Avrupa', 'Belgrad, Mohac, Viyana, Istanbul Antlasmasi ve Fransa iliskisini Habsburg dengesiyle aciklar.', 'Kapitülasyonlar donemin stratejik ortakligi ve ticaret siyaseti icinde okunur.'],
      ['Deniz ve okyanus', 'Preveze, Kibris, Inebahti ve Hint Deniz Seferlerini Akdeniz-Portekiz rekabetiyle baglar.', 'Bir deniz yenilgisi donanmanin veya hâkimiyetin ayni anda tamamen bittigi anlamina gelmez.'],
    ],
    analysis: 'Osmanli “dunya gucu” olurken tek cephede ilerlemedi. Batida Habsburglari sinirlarken Fransa ve Protestanlarla cikara dayali iliskiler kurdu; doguda Safevi baskisini, guneyde Memluk mirasi ve Hint ticaret yolunu hesaba katti. Istanbul’un alinmasi Karadeniz ile Akdeniz arasindaki merkezin denetimini ve devlet teskilatinin yeniden kurulmasini sagladi. Kapitülasyon, Ortodokslarin korunmasi veya Hint seferleri birbirinden kopuk olaylar degil, rakip koalisyonlari bolme ve ticaret akisini koruma stratejisinin araclaridir.',
    source: ['Osmanli hukumdari, Habsburg baskisi altindaki bir Avrupa devletine ticaret kolayligi vermis ve onunla diplomatik yakinlik kurmustur.', 'Ekonomik taviz tek basina askerî zayiflik kaniti degildir.', 'Rakibin rakibiyle ortaklik Habsburg gucunu dengelemeyi amaclar.', 'Karar, ticaret ve diplomasinin uzun vadeli stratejide birlikte kullanildigini gosterir.'],
  },
  'osmanli-kultur-ve-medeniyeti': {
    focus: 'Osmanli kurumlarini ad listesiyle degil merkez, tasra, toprak, ekonomi ve sosyal hizmet arasindaki sistemle ogren.',
    coverage: [
      ['Merkez teskilati', 'Padişah, Divan-i Humayun, seyfiye, ilmiye, kalemiye, Enderun ve veraseti islevleriyle ayirir.', 'Saray konut olmanin yaninda yonetim ve insan kaynagi merkezidir.'],
      ['Toprak ve uretim', 'Miri arazi, cift-hane, timar ve tahririn uretim-vergi-asker bagini kurar.', 'Timarli sipahi vergi gelirini kullanir; topragin sahibi olmaz.'],
      ['Sehir ekonomisi', 'Lonca, narh, gedik; bedesten, kapan, liman ve kervansarayin islevini aciklar.', 'Yonetim yalniz ureticiyi degil arz ve fiyat denetimiyle tuketiciyi de korumaya calisir.'],
      ['Toplum ve hizmet', 'Millet, mahalle ve vakif sistemlerini birlikte yasama ve kamusal hizmet acisindan yorumlar.', 'Vakıf devlet disi olabilir; hukuk, denetim ve gelir tahsisiyle kamu duzeninin parcasidir.'],
    ],
    analysis: 'Klasik sistemde merkez, toprak gelirini tahrirle kayda alip hizmet karsiligi dagitir; tasrada uretimin surmesini ve asker cikmasini beklerdi. Sehirde loncalar kalite ve meslek egitimini, narh ise temel mallarda fiyat denetimini destekledi. Vakiflar imaret, kopru, okul, hastane ve su yolu gibi hizmetleri belirli bir gelir kaynagina bagladi. Millet sistemi modern ulus milliyeti degil, dinî cemaatlerin hukuk ve temsil cercevesidir. Kurumlar tek tek degil, devletin sinirli nakit ve personelle genis alan yonetme problemi icinde okunmalidir.',
    source: ['Bir vakfiyede dukkan kiralarinin bir darussifanin ilaci, calisan ucreti ve yoksul hastalarin yemegi icin ayrildigi yazmaktadir.', 'Gelir kaynagi ile hizmet kalici bir hukuk metniyle birbirine baglanmistir.', 'Saglik ve sosyal yardim yalniz merkez hazinesine yuklenmemistir.', 'Vakıf gonullu bir hayirdir; fakat kurallari ve denetimi olan kurumsal bir hizmet modelidir.'],
  },
  'on-yedinci-yuzyil-osmanli': {
    focus: '1595-1700 krizlerini “bozulma” etiketi yerine askerî, mali, demografik ve diplomatik donusum olarak acikla.',
    coverage: [
      ['Diplomatik denge', 'Zitvatorok, Kasr-i Sirin, II. Viyana ve Karlofcayi guc dengesi degisimiyle yorumlar.', 'Karlofca ilk kayip degil, buyuk olcekli toprak kaybi ve savunma diplomasisi esigidir.'],
      ['Askerî donusum', 'Atesli silahlar, uzun savaslar, Yenicerinin artisi, timarin zayiflamasi ve kadirga-kalyon gecisini baglar.', 'Eski sistem “bir anda bozulmadi”; savas finansmani ve teknoloji degisti.'],
      ['Mali ve toplumsal kriz', 'Fiyat devrimi, iltizam, avariz, Celali ve buyuk kacgunu neden-sonuc zincirinde kurar.', 'Isyanin nedeni yalniz yonetici yetersizligi degil vergi ve guvenlik baskisidir.'],
      ['Cozum arayislari', 'Ekber-erşed, kafes, Koçi Bey layihasi ve Koprululeri merkezin verdigi farkli cevaplar olarak ayirir.', 'Islahatlar cogu kez eski duzeni onarma amacli ve kisiye bagimlidir.'],
    ],
    analysis: 'Avrupa’ya akan gumus fiyatlari yukseltti; uzun ve masrafli savaslar daha cok nakit istedi. Timarli sipahinin mevsimlik yapisi atesli silah kullanan surekli piyade ihtiyacina tam cevap veremeyince Yeniçeri sayisi ve nakit vergi baskisi artti. Iltizam kisa vadede hazineye para sagladi, ancak vergi toplamada yerel baski riski dogurdu. Celali hareketleri, bu mali ve askerî donusumun Anadolu’daki guvenlik ve uretim krizleriyle birlesmesidir. Dolayisiyla donem duraganlik degil zorlayici bir yeniden yapilanmadir.',
    source: ['Bir layihada “kanun-i kadime donulmesi” ve gorevlerin ehil kisilere verilmesi onerilmektedir.', 'Yazar sorunun kaynagini geleneksel duzenden sapmada gormektedir.', 'Cozum yenilik uretmekten cok eski dengeyi onarmaya yoneliktir.', 'Belge gercek durumu tarafsiz fotograflamaz; yazarinin ideal duzen anlayisini da yansitir.'],
  },
  'on-sekizinci-yuzyil-osmanli': {
    focus: '1700-1800 arasinda savas, diplomasi, teknik aktarim ve modernlesmenin yon degisimini izle.',
    coverage: [
      ['Siyasi kronoloji', 'Prut, Pasarofca, Belgrad, Cesme ve Kucuk Kaynarcayi Rusya-Avusturya rekabetiyle baglar.', '1774 Kırım’in hukuki kopusu ve Rusya’nin mudahale iddialari acisindan esiktir.'],
      ['Lale Devri', 'Elcilik, matbaa, tulumbacilar, imar ve tuketim kulturunu ilk surekli gozlem siyasetiyle yorumlar.', 'Donem yalniz eglence degil, secici aktarim ve toplumsal gerilim donemidir.'],
      ['Askerî-teknik yenilik', 'Humbaraci, Hendesehane, suraat topculugu ve muhendishaneleri ihtiyacla eslestirir.', 'Aktarim once askerî alanda yogunlasti; kurumlasma zamanla egitime yayildi.'],
      ['Nizam-i Cedit', 'III. Selim’in yeni ordu, Irad-i Cedit ve daimi elciliklerini birbirini destekleyen program olarak okur.', 'Yeni kurum yeni gelir ister; cikar kaybeden gruplarin direnci reformun siniridir.'],
    ],
    analysis: 'Pasarofca sonrasi Osmanli, Avrupa’nin yalniz askerî rakip degil bilgi ve teknik kaynagi oldugunu daha sistemli kabul etti. Yirmisekiz Celebi Mehmet’in gozlemleri, matbaa ve teknik uzmanlar bu zihniyet degisiminin gostergeleridir. Ancak yeni ordu kurmak; subay, talim, silah ve ayri gelir gerektiriyordu. Nizam-i Cedit ile Irad-i Cedit bu nedenle birlikte tasarlandi. Yeniliklerin dirençle karsilasmasi, toplumun degisime tumden kapali olmasindan cok mevcut gelir, statu ve yetki aglarinin tehdit edilmesiyle ilgilidir.',
    source: ['Yeni usulde egitilecek bir ordunun masraflari icin mevcut hazineden ayri bir gelir hazinesi kurulmustur.', 'Askerî reformun mali kaynak olmadan surmeyecegi kabul edilmistir.', 'Ayri hazine, reformun programli ve kurumsal oldugunu gosterir.', 'Bu adim basariyi garanti etmez; cikar gruplari ve siyasi destek de belirleyicidir.'],
  },
  'on-dokuzuncu-yuzyil-osmanli': {
    focus: 'Merkezilesme, yurttaslik, hukuk, egitim ve temsil reformlarini ic ve dis baskilarla birlikte degerlendir.',
    coverage: [
      ['II. Mahmud', 'Sened-i Ittifak, Vakayi Hayriye, Asakir-i Mansure, nezaretler, posta ve kiyafet duzenlemelerini merkezilesmeyle baglar.', 'Ayanlarla uzlasma ile ayan gucunu sinirlama ayni surecin farkli evreleridir.'],
      ['Tanzimat-Islahat', 'Can-mal-namus, vergi-askerlik-hukuk guvencesi ile gayrimuslim haklarini amac ve dis etki acisindan ayirir.', 'Fermanlar anayasa degildir; hukumdarin iradesiyle ilan edilen hukuki taahhutlerdir.'],
      ['Mesrutiyet', 'Kanun-i Esasi, Mebusan ve Ayan meclisleri, I ve II. Mesrutiyeti temsil ve yetki sinirlariyla yorumlar.', 'Meclis vardir; egemenligin tumu halka gecmis degildir.'],
      ['Modern devlet', 'Nufus sayimi, telgraf, demiryolu, okul, hastane ve sosyal yardimi devletin topluma erisim kapasitesiyle baglar.', 'Modernlesme yalniz Batililasma degil, merkezi idarenin bilgi ve hizmet agini genisletmesidir.'],
    ],
    analysis: 'Yeniçeri Ocagi’nin kaldirilmasi yeni bir ordu kurmanin yaninda merkezilesmenin onundeki silahli baski grubunu da ortadan kaldirdi. Nezaretler, posta, telgraf ve nufus kaydi merkezin tasrayi daha hizli izlemesini sagladi. Tanzimat, vergi ve askerligin kurala baglanmasini; Islahat, gayrimuslimlerin hukuki konumunu daha acik duzenlemeyi hedefledi. Mesrutiyet ise temsil kurumunu getirdi fakat padisahin fesih ve atama yetkileri surdu. Reformlar bu nedenle “tam demokrasi” degil, mutlak yonetimden kuralli ve temsili yonetime dogru sinirli adimlardir.',
    source: ['Bir fermanda verginin herkesin gelirine gore alinacagi ve kimsenin yargilanmadan cezalandirilmayacagi bildirilmektedir.', 'Verginin kurala baglanmasi keyfîligi azaltma hedefidir.', 'Yargilama guvencesi hukuk devleti yonunde bir taahhuttur.', 'Metnin ilan edilmesi uygulamanin eksiksiz oldugunu kanitlamaz; hedef ile sonuc ayrilmalidir.'],
  },
  'balta-limani-ve-osmanli-ekonomisi': {
    focus: '1838 antlasmasini sanayilesme, tekel, dis ticaret, borclanma ve mali egemenlik zincirinde cozumle.',
    coverage: [
      ['Antlasmanin kosulu', 'Mehmet Ali Pasa krizi ve Ingiliz destegi ihtiyacini diplomatik tavizle iliskilendirir.', 'Ekonomik karar, donemin guvenlik ve ittifak arayisindan bagimsiz degildir.'],
      ['Yed-i vahid', 'Devlet tekellerinin kaldirilmasi ve yabanci tuccarin ic ticarete erisiminin etkisini aciklar.', 'Tekelin kalkmasi serbestlik getirirken yerli ureticinin korunmasini zayiflatti.'],
      ['Sanayi ve ticaret', 'Ucuz fabrika mali, kapitülasyon ve ham madde ihracinin yerli atolye uzerindeki baskisini yorumlar.', 'Osmanli ekonomisi bir anda cokmedi; rekabet kosullari giderek esitsizlesti.'],
      ['Borc ve denetim', '1854 dis borcu, mali kriz, Muharrem Kararnamesi ve Duyun-i Umumiyeyi mali egemenlikle baglar.', 'Borc almakla gelir kaynaklarinin yabanci denetime verilmesi ayni asama degildir.'],
    ],
    analysis: 'Sanayilesmis Ingiltere daha cok pazar ve ham madde ararken Osmanli, Mehmet Ali Pasa karsisinda diplomatik destek ariyordu. Balta Limani, yabanci tuccarin ic pazara erisimini genisletti ve devlet tekellerini kaldirdi. Yerli zanaatkar, seri ve ucuz fabrika mallariyla korumasiz rekabete girdi; devletin gumruk ve tekel araclari daraldi. Sonraki savas harcamalari dis borclanmayi buyuttu. 1881’de Duyun-i Umumiye bazi gelirleri alacaklilar adina topladi; bu ekonomik bagimliligin kurumsallasmasidir.',
    source: ['Bir antlasma yabanci tuccara ulkenin her yerinde mal alip satma hakki verirken devletin belirli mallardaki alım tekelini kaldirmaktadir.', 'Yabanci tuccarin ic ticarete dogrudan girisi aracilik ve denetim yapisini degistirir.', 'Tekelin kalkmasi devletin fiyat ve gelir araclarini daraltir.', '“Ticaret artti” yargisi tek basina refah artisini kanitlamaz; kazancin kimde toplandigi incelenmelidir.'],
  },
  'yirminci-yuzyil-baslarinda-osmanli': {
    focus: 'Dagilmayi onlemeye yonelik fikir akimlarini, yonetim krizini ve milliyetcilik baskisini tarihsel sonucuyla karsilastir.',
    coverage: [
      ['Osmanlicilik', 'Esit yurttaslikla farkli unsurlari ortak siyasi kimlikte tutma hedefini aciklar.', 'Balkan milliyetcilikleri ve buyuk guc mudahalesi uygulama alanini daraltti.'],
      ['Islamcilik', 'Halifelik ve ummet bagiyla Musluman topluluklari bir arada tutma amacini yorumlar.', 'Arap milliyetciligi ve I. Dunya Savasi deneyimi sinirlarini gosterdi.'],
      ['Turkculuk-Baticilik', 'Kultur-millet vurgusu ile bilim, teknik ve kurum aktarimi tartismalarini ayirir.', 'Akimlar her konuda birbirinin tam tersi bloklar degildir.'],
      ['Yonetim ve hareketler', 'II. Mesrutiyet, 31 Mart, Hareket Ordusu ve Ittihat-Terakkiyi anayasal duzen mucadelesiyle baglar.', '31 Mart takvim adi; olay 13 Nisan 1909’da gerceklesmistir.'],
    ],
    analysis: 'Fikir akimlari soyut felsefe degil, cok uluslu devletin nasil korunacagi sorusuna verilen siyasi cevaplardi. Osmanlicilik hukuk onunde esitligi, Islamcilik dinî dayanismayi, Turkculuk ortak dil-kultur ve giderek milli devleti, Baticilik ise bilimsel ve kurumsal yenilenmeyi one cikardi. Aydinlar bazen birden fazla akimdan unsur aldi. Bu nedenle paragraftaki ipucunu “kim soyledi” ezberiyle degil, birlik icin hangi bagin temel alindigiyla tanimak gerekir.',
    source: ['Bir dusunur, devletin butun yurttaslarinin din farki gozetilmeksizin ayni hak ve gorevlere sahip olmasini savunmaktadir.', 'Birlik zemini din veya soy degil hukuki yurttasliktir.', 'Esit temsil ve ortak vatan vurgusu Osmanliciliga yaklastirir.', 'Bati tekniginden yararlanma ifadesi tek basina Baticilik icin yeterli olmaz; ana siyasi bag aranir.'],
  },
  'trablusgarp-savasi': {
    focus: 'Savasi somurgecilik, ulasim-imkân siniri, yerel direnis ve Balkan krizine etkisiyle birlikte analiz et.',
    coverage: [
      ['Nedenler', 'Italya’nin gec birligi, somurge arayisi, Trablusgarp’in yakinligi ve buyuk devlet onayini baglar.', 'Saldiri yalniz toprak istegi degil, prestij ve pazar rekabetidir.'],
      ['Osmanli siniri', 'Misir’in Ingiliz denetimi ve donanma yetersizliginin duzenli ordu gondermeyi engellemesini aciklar.', 'Direnis yoklugu degil, ulasim ve guc projeksiyonu sorunudur.'],
      ['Gonullu subaylar', 'Mustafa Kemal ve Enver Bey’in yerel halki orgutlemesini gayrinizami savas ornegi olarak yorumlar.', 'Basari tam zafer degil, Italyan ilerlemesini kiyida sinirlama etkisidir.'],
      ['Usi sonucu', 'Trablusgarp-Bingazi kaybi ile On Iki Ada’nin gecici birakilmasini ve Balkan Savasi baskisini ayirir.', 'Adalarin geciciligi sonraki kosullarda kalicilasmistir.'],
    ],
    analysis: 'Osmanli Devleti denizden Italyan donanmasini asacak guce sahip degildi; karadan gecis ise Ingiliz denetimindeki Misir nedeniyle kapaliydi. Bu nedenle subaylar kimlik degistirerek bolgeye ulasti ve yerel direnis aglari kurdu. Italyanlar Osmanliyi barisa zorlamak icin On Iki Ada’yi isgal edip Bogazlari tehdit etti. Balkan devletlerinin savasa hazirlanmasi Istanbul’un ayni anda iki krizi yurutmesini imkansizlastirdi ve Usi Antlasmasi’ni hizlandirdi.',
    source: ['Merkezî hukumet bolgeye birlik gonderemezken subaylar yerel halki egitip kucuk hareketli birlikler kurmustur.', 'Merkezden lojistik destek sinirlidir.', 'Yerel insan ve arazi bilgisi direnis kapasitesine donusturulmustur.', 'Bu durum tam duzenli savas degil, orgutleme ve gayrinizami mucadele becerisine kanittir.'],
  },
  'balkan-savaslari': {
    focus: 'Balkan ittifakinin kurulusunu, iki savasin farkini ve kayiplarin demografik-siyasi etkisini ayir.',
    coverage: [
      ['I. Balkan Savasi', 'Milliyetcilik, Rus tesviki, Osmanli zayifligi ve ordudaki siyasetlesmeyi yenilgiyle baglar.', 'Dort Balkan devleti Osmanliya karsi birlikte hareket etti.'],
      ['Londra duzeni', 'Midye-Enez siniri, Arnavutluk ve Ege adalari sorununu cografi sonucuyla kavrar.', 'Edirne ilk savas sonunda kaybedildi.'],
      ['II. Balkan Savasi', 'Bulgaristan’in paylasimdaki ustunlugune karsi eski muttefiklerin donmesini aciklar.', 'Osmanli firsattan yararlanarak Edirne ve Kirklareli’ni geri aldi.'],
      ['Toplumsal sonuc', 'Goc, nufus degisimi, Osmanliciligin zayiflamasi ve orduda reform ihtiyacini yorumlar.', 'Toprak kaybi kadar kitlesel travma ve Anadolu’ya nufus aktarimi da onemlidir.'],
    ],
    analysis: 'I. Balkan Savasi ortak dusmana karsi ittifak, II. Balkan Savasi ise kazanilan topraklarin paylasilamamasi uzerine eski ortaklar arasinda catismadir. Osmanli ordusundaki sevk, ikmal ve komuta sorunlari hizli yenilgiyi buyuttu. Londra sonrasi Bulgaristan’in genis payi Sirbistan ve Yunanistan’i rahatsiz etti; Romanya’nin katilimi dengeyi degistirdi. Osmanli bu firsatta Edirne’yi geri aldi. Gocmenlerin Anadolu’ya gelisi nufus ve toplumsal yapiyi degistirdi; kayiplar millî devlet fikrini guclendirdi.',
    source: ['Bir savasta ayni devletler Osmanliya karsi ittifak kurarken birkac ay sonra birbirleriyle savasmistir.', 'Ilk ittifakin ortak hedefi Osmanli topraklarini paylasmaktir.', 'Ortak dusman kalkinca pay ve guc dengesi catismasi ortaya cikmistir.', 'Ittifaklar kalici dostluktan cok donemsel cikarlara dayanabilir.'],
  },
  'birinci-dunya-savasi': {
    focus: 'Kuresel nedenleri, ittifaklari, Osmanli cephelerini ve savas sonu duzenini neden-sonuc agi olarak kur.',
    coverage: [
      ['Kuresel zemin', 'Somurgecilik, silahlanma, milliyetcilik, bloklasma ve Balkan gerilimini Saraybosna suikastiyla ayirir.', 'Suikast temel neden degil, birikmis krizi baslatan tetiktir.'],
      ['Osmanlinin katilisi', 'Yalnizlik, kayip topraklari alma, Alman zaferine inanma, ekonomik baski ve Goeben-Breslau olayini baglar.', 'Katilim tek kisinin ani karariyla aciklanamaz.'],
      ['Cepheler', 'Kafkas, Kanal, Canakkale, Irak, Suriye-Filistin, Hicaz-Yemen ile yardim cephelerini amac-sonucla eslestirir.', 'Canakkale savunma; Kanal taarruz cephesidir.'],
      ['Sonuclar', 'ABD’nin katilisi, Rusya’nin cekilisi, Wilson Ilkeleri ve imparatorluklarin dagilmasini yeni duzenle baglar.', 'Savas biterken baris metinleri yeni sinir ve azinlik sorunlari dogurdu.'],
    ],
    analysis: 'Sanayilesmis devletlerin pazar ve ham madde rekabeti, milliyetcilik sorunlari ve silahlanma Avrupa’yi iki bloga ayirdi. Saraybosna suikasti bu yapiyi harekete geciren bahaneydi. Osmanli icin Almanya kara baglantisi ve askerî destek sunuyor, yoneticiler Rus baskisina karsi guvence ve kayiplari telafi umudu goruyordu. Cephelerin her biri ayni amaca sahip degildi: Canakkale baskenti ve Bogazlari savundu; Kanal Ingiliz somurge yolunu kesmeyi; Kafkas Rusya’ya karsi alan kazanmayi hedefledi.',
    source: ['Bir cephede Osmanli savunmasi, muttefik donanmasinin Bogazlari gecip baskente ulasmasini ve Rusya’ya yardim tasimasini engellemistir.', 'Bogazlar jeopolitik gecis noktasi olarak savunulmustur.', 'Rusya’ya yardimin aksamasinin ekonomik ve siyasi etkileri vardir.', 'Cephe sonucu savasin tek nedeni degil; savasin suresi ve Rusya’daki krizi etkileyen unsurlardan biridir.'],
  },
  'mondros-ve-isgaller': {
    focus: 'Mondros maddelerini hukuki metin, guc dengesi ve fiilî isgal arasindaki iliskiyle yorumla.',
    coverage: [
      ['Kritik maddeler', '7. madde, Bogazlar, haberlesme, ordunun terhisi ve Toros tunellerinin denetimini egemenlikle baglar.', '7. madde belirsiz “guvenlik” gerekcesiyle isgale acik kapi birakti.'],
      ['Uygulama', 'Musul, Hatay-Dortyol, Izmir ve diger isgalleri kronoloji ve isgalci devletlerle eslestirir.', 'Ateşkes savasi durdurdu; uygulamasi egemenligi asindirdi.'],
      ['Tepkiler', 'Teslimiyet, mandacilik, bolgesel cemiyetler, Kuvayimilliye ve mitingleri farkli cozum arayislari olarak ayirir.', 'Her cemiyet ayni amac ve yonteme sahip degildir.'],
      ['Paris ve Izmir', 'Gizli paylasim planlari, Wilson ilkeleri, Yunan iddialari ve Izmir isgalini diplomatik rekabetle aciklar.', 'Italya ile anlasmazlik, paylasimin galipler arasinda da cekismeli oldugunu gosterir.'],
    ],
    analysis: 'Ateşkes metinleri normalde silahli catismayi durdurur; Mondros’un genis ve belirsiz maddeleri ise Itilaf Devletlerine stratejik noktalar, ulasim ve haberlesme uzerinde denetim imkâni verdi. Ordunun terhisi isgale karsi merkezî savunmayi zayiflatti. Buna tepki ilk asamada bolgeseldi: cemiyetler kendi bolgesinin haklarini nufus, tarih ve belgeyle savundu; Kuvayimilliye yerel silahli direnis sagladi. Hazirlik doneminin temel donusumu bu yerel tepkiyi ulusal program ve meclis otoritesine cevirmektir.',
    source: ['Bir ateskes maddesi, galip devletlere “guvenliklerini tehdit eden bir durum” ortaya cikarsa herhangi bir stratejik yeri isgal etme hakki vermektedir.', 'Tehdidin olcutu acik tanimlanmamistir.', 'Karari uygulayacak guc galiplerde oldugu icin madde tek tarafli yorumlanabilir.', 'Hukuki belirsizlik fiilî isgale mesruiyet goruntusu saglayan bir araca donusur.'],
  },
  'milli-mucadele-hazirlik': {
    focus: 'Mustafa Kemal’in resmî gorevden millî irade liderligine gecisini genelge, kongre ve temsil kurumlariyla izle.',
    coverage: [
      ['Samsun-Havza', '9. Ordu mufettisligi gorevi, Samsun raporu ve Havza Genelgesini tepkinin orgutlenmesiyle baglar.', 'Havza, Mustafa Kemal’in resmî gorev sinirlarini asan millî cagri esigidir.'],
      ['Amasya Genelgesi', 'Gerekce, amac ve yontemi “milletin istiklalini yine milletin azim ve karari kurtaracaktir” ilkesiyle cozumler.', 'Millî egemenlik dusuncesi ilk kez acik program cumlesine donusur.'],
      ['Kongreler', 'Erzurum ve Sivas’i toplanis bicimi, kararlar ve temsil gucu bakimindan karsilastirir.', 'Erzurum bolgesel toplanip ulusal karar; Sivas ulusal toplanip cemiyet birligi sagladi.'],
      ['Meclise gecis', 'Amasya Gorusmeleri, Son Osmanli Mebusan Meclisi, Misakimillî, Istanbul’un isgali ve TBMM’yi baglar.', 'Temsil Heyeti gecici yurutme gibi calisirken TBMM kurucu iktidar oldu.'],
    ],
    analysis: 'Samsun’a cikis mevcut devlet gorevi icindeydi; Havza’da miting ve protesto cagrisiyla bu sinir asildi. Amasya Genelgesi, vatanin butunlugu ve merkezî hukumetin yetersizligi tespitinden millet iradesine dayali cozum cikardi. Erzurum Kongresi Mustafa Kemal’in askerlikten ayrilarak sivil liderlige gecisini, Sivas cemiyetlerin tek catida birlesmesini sagladi. Misakimillî’nin kabulunden sonra Istanbul’un isgali, egemenlik merkezinin Ankara’da yeni meclis olarak kurulmasini hizlandirdi.',
    source: ['Bir genelgede yurdun her yerinde isgalleri protesto eden mitingler yapilmasi ve tepkilerin hukumetle yabanci temsilcilere iletilmesi istenmektedir.', 'Emir asayisi saglamaktan cikarak halki siyasi tepkiye cagirmaktadir.', 'Yerel tepkiler ortak ve gorunur bir kamuoyuna donusturulmektedir.', 'Bu nedenle belge, resmî gorev cercevesinden millî mucadele liderligine gecisin kanitidir.'],
  },
  'kurtulus-savasi': {
    focus: 'TBMM’nin mesruiyet ve duzenli ordu kurma surecini cepheler ile diplomatik kazanclarla birlikte analiz et.',
    coverage: [
      ['Meclis ve egemenlik', '1921 Teskilat-i Esasiye, gucler birligi, meclis hukumeti ve egemenlik ilkesini savas kosullariyla baglar.', 'Kisa anayasa devletin dinini veya rejim adini ayrintili duzenlemekten cok yetki kaynagini belirledi.'],
      ['Ic guvenlik', 'Ayaklanmalar, Hiyanet-i Vataniye, Istiklal Mahkemeleri ve Kuvayimilliyeden duzenli orduya gecisi yorumlar.', 'Yerel direnis gerekliydi; ortak komuta ve disiplin icin yetersizdi.'],
      ['Cepheler', 'Dogu’da Gumru, Guney’de yerel direnis-Ankara, Batı’da Inonu-Kutahya Eskisehir-Sakarya-Buyuk Taarruz dizisini kurar.', 'Her askerî basarinin diplomatik sonucu ayrica izlenir.'],
      ['Diplomasi', 'Moskova, Kars, Ankara, Mudanya ve Lozan’i taninma, sinir ve savasin bitisi acisindan ayirir.', 'Mudanya silahli catismayi; Lozan uluslararasi hukuki duzeni kurdu.'],
    ],
    analysis: 'TBMM bir yandan dis isgale karsi savasirken bir yandan kendi otoritesini kurdu. Kuvayimilliye isgali yavaslatti fakat bolgesel komuta, disiplin ve ikmal sorunu duzenli orduyu zorunlu kildi. Inonu zaferleri askerî olcekten cok yeni ordunun ve meclisin mesruiyetini guclendirdi. Sakarya savunmadan taarruz inisiyatifine gecis zemini, Buyuk Taarruz ise askerî sonuc oldu. Diplomatik antlasmalar cephe basarisini taninma ve sinira cevirdi; Lozan yeni devletin bagimsizligini uluslararasi hukukta tescil etti.',
    source: ['1921 tarihli anayasa “Hâkimiyet bilâ kaydü şart milletindir; idare usulü halkin mukadderatini bizzat ve bilfiil idare etmesi esasina dayanir” demektedir.', 'Egemenligin kaynagi hanedan degil millet olarak tanimlanmistir.', 'Meclis hem yasama hem yurutme yetkisini kullanarak gucler birligi kurmustur.', 'Metin savas kosullarinda hizli karar ve yeni mesruiyet ihtiyacina cevap verir.'],
  },
  'ataturk-ilke-ve-inkilaplari': {
    focus: 'Her inkilabi hedefledigi sorun, dayandigi ilke ve toplumsal sonuc uzerinden eslestir.',
    coverage: [
      ['Siyasi-hukuki', 'Saltanat, cumhuriyet, halifelik, 1924 Anayasasi ve cok partili denemeleri millî egemenlikle baglar.', 'Saltanat egemenlik ikiligini; halifelik laiklesme ve otorite ikiligini ilgilendirir.'],
      ['Hukuk ve toplum', 'Medeni Kanun, tekke-zaviye, kiyafet ve soyadi duzenlemelerini hukuk birligi ve esitlikle yorumlar.', 'Toplumsal degisim yalniz sembol degil statü ve hak duzenlemesidir.'],
      ['Egitim-kultur', 'Tevhid-i Tedrisat, Harf Inkilabi, Millet Mektepleri, Turk Tarih ve Dil kurumlarini uluslasmayla baglar.', 'Amaç okuryazarlik, egitim birligi ve ortak kultur uretimidir.'],
      ['Ekonomi ve ilkeler', 'Izmir Iktisat, asar, kabotaj, devletcilik ve sanayi planlarini bagimsizlik-kalkinmayla eslestirir.', 'Devletcilik ozel mulkiyeti kaldiran sosyalizm degil karma ekonomi aracidir.'],
    ],
    analysis: 'Inkilaplari tarihlere dizmek yerine “hangi ikiligi veya esitsizligi giderdi?” diye okumak gerekir. Saltanatin kaldirilmasi Lozan oncesi temsil sorununu ve egemenlik ikiligini; Tevhid-i Tedrisat farkli egitim otoritelerini; Medeni Kanun aile ve kisi hukukundaki dinî-cemaat farklarini hedefledi. Devletcilik, ozel sermayenin zayif oldugu kosullarda sanayilesmeyi hizlandirma araciydi. Ilkeler de tek bir inkilabin etiketi degil, farkli duzenlemeleri ayni hedefe baglayan yorum cerceveleridir.',
    source: ['Bir kanunla farkli makamlara bagli butun okullar egitim bakanligina devredilmistir.', 'Idari birlik egitim programi ve denetiminde ortaklik kurar.', 'Medrese-mektep ikiligi sona erdirilerek laik ve ulusal egitim zemini guclenir.', 'Duzenleme dogrudan alfabe degisikligi degil Tevhid-i Tedrisat kapsamindadir.'],
  },
  'ataturk-donemi-ic-dis-politika': {
    focus: 'Ic siyasette kurumlasma ve guvenlik dengesini, dis siyasette tam bagimsizlik ve baris ilkeleriyle birlikte degerlendir.',
    coverage: [
      ['Cok partili denemeler', 'Terakkiperver ve Serbest Cumhuriyet Firkasini kurulus, muhalefet rolu ve kapanis kosullariyla ayirir.', 'Iki deneyim ayni nedenle ve ayni ortamda sona ermedi.'],
      ['Ic guvenlik', 'Seyh Sait, Takrir-i Sukun, Izmir Suikasti ve Menemen’i rejim-kamu duzeni gerilimiyle yorumlar.', 'Guvenlik tedbirinin varligi butun muhalefetin rejim dusmani oldugunu gostermez.'],
      ['Lozan sorunlari', 'Musul, nufus mubadelesi, yabanci okullar, dis borclar ve Boğazlari cozum ve tavizleriyle karsilastirir.', 'Musul aleyhte; Boğazlar Montrö ile egemenlik lehine yeniden duzenlendi.'],
      ['Bolgesel baris', 'Milletler Cemiyeti, Balkan Antanti, Sadabat Pakti ve Hatay’i “Yurtta sulh, cihanda sulh”la baglar.', 'Barisçilik pasiflik degil hukuk, ittifak ve caydiriciligi birlikte kullanmaktir.'],
    ],
    analysis: 'Yeni rejim muhalefet kanallari acmayi denedi, fakat isyan ve rejim karsiti hareketlerle parti faaliyetlerinin birbirine karistigi kosullarda denemeler kisa surdu. Dis politikada Lozan’dan kalan sorunlar ayni yontemle cozulmedi: Musul’da Ingiltere ve Milletler Cemiyeti dengesi aleyhteydi; Boğazlarda degisen Avrupa guvenligi Montrö icin firsat yaratti; Hatay ise diplomasi, halkoyu ve uluslararasi hukukla katildi. Tam bagimsizlik hedefi, kosullara gore muzakereden bolgesel ittifaka uzanan esnek araclarla izlendi.',
    source: ['Turkiye, sinir guvenligi icin komsu devletlerle saldirmazlik ve dayanisma pakti kurarken ayni donemde Boğazlarin silahlandirilmasini diplomatik yolla kabul ettirmistir.', 'Bolgesel pakt ortak guvenlik ve statu korunmasi saglar.', 'Bogazlar duzenlemesi egemenlik ve savunma kapasitesini artirir.', 'Barisçi politika askerî guvenlikten vazgecmek degil, onu hukuk ve diplomasiyle kurmaktir.'],
  },
  'ikinci-dunya-savasi-ve-sonrasi': {
    focus: 'Turkiye’nin savas disi kalma siyasetini, savas ekonomisini ve 1945 sonrasi ic-dis yon degisimini birlikte analiz et.',
    coverage: [
      ['Denge diplomasisi', 'Ingiltere-Fransa ittifaki, Alman dostluk paktı, Adana-Kahire gorusmeleri ve savas ilanini zamanlamayla yorumlar.', '1945’teki ilan fiilî cephe savasi degil yeni orgutlara katilim kosuludur.'],
      ['Savas ekonomisi', 'Millî Korunma, Varlik Vergisi, Toprak Mahsulleri Vergisi, karne ve seferberligi toplum etkisiyle degerlendirir.', 'Tarafsizlik maliyetsizlik degildir; ordu ve kitlik butceyi baskiladi.'],
      ['Yeni dunya duzeni', 'BM, iki kutup, Truman Doktrini, Marshall Plani ve NATO’yu Sovyet baskisi ve Batı ittifakiyla baglar.', 'Ekonomik yardim ile askerî ittifak ayni arac degildir.'],
      ['Cok partili hayat', 'Dortlu Takrir, Demokrat Parti, 1946 ve 1950 secimlerini demokratik rekabetin kurumsallasmasiyla izler.', '1950 iktidarin secimle bariscil el degistirmesi acisindan esiktir.'],
    ],
    analysis: 'Turkiye hem Mihver hem Muttefik baskisina ragmen askerî ve ekonomik yetersizlik nedeniyle savas disi kalmaya calisti; taraflarla antlasmalar zaman kazandiran denge araclariydi. Buna ragmen uzun seferberlik, uretim ve dagitim sorunlari toplumu agir etkiledi. Savas sonunda Sovyetlerin Bogazlar ve sinir talepleri Batı ittifakina yonelisi hizlandirdi. BM’ye katilim, Truman ve Marshall destekleri, Kore’ye asker gonderme ve NATO ayni yonelisin diplomatik, ekonomik ve askerî basamaklaridir. Ic siyasette cok partili rekabet de bu yeni ortam ve toplumsal taleplerle genisledi.',
    source: ['Turkiye savasin bitimine haftalar kala Almanya ve Japonya’ya savas ilan etmis, ancak fiilî bir cephe acmamistir.', 'Zamanlama askerî sonuc alma amacina uygun degildir.', 'Birlesmis Milletlerin kurucu duzenine katilmak icin siyasi-hukuki kosul yerine getirilmistir.', '“Savas ilan etti” bilgisi tek basina aktif savasa girdigi anlamina gelmez.'],
  },
}

