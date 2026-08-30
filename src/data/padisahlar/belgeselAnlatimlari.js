/**
 * BELGESEL MODU ANLATIMLARI — PANEL BAŞINA
 * ==================================================================
 *
 * KEŞİF MODUNDAN NEDEN AYRI
 * Keşif modunda öğrenci bilgiyi kendi hızında inceler; orada anlatım
 * padişah başına tek parçadır ve fonda akar (bkz. anlatimlar.js).
 * Belgesel modu ise SEYREDİLİR: ekran panel panel ilerler. Anlatımın
 * da panel panel ilerlemesi gerekir, yoksa anlatıcı bir olayı
 * anlatırken ekranda başka bir sahne durur.
 *
 * Bu yüzden burada her PANELİN kendi metni vardır. Panel, kendi kaydı
 * bitince ilerler; senkron tahminle değil sesin uzunluğuyla kurulur.
 *
 * PANEL TÜRÜNE GÖRE ANLATIM GÖREVİ
 *   kapi     → sahneyi açar, dönemin havasını kurar
 *   kunye    → hükümdar kimdi, tahta nasıl geldi, nasıl bir adamdı
 *   olay     → olayın nedeni, seyri ve neyi değiştirdiği
 *   karakter → dönemi yapısal olarak tanımlayan şey
 *   osym     → dönemden akılda kalması gerekenler, belgesel diliyle
 *   gecis    → devir ve anlamı; sonraki sahneye bağlanma
 *
 * ORTAK KURAL
 * Ses ekranı okumaz. Ekranda tarih, başlık ve olay adı zaten yazıyor;
 * anlatım bunları tekrar etmek yerine nedenini, sonucunu ve anlamını
 * verir. Fark şu: burada anlatım ekrandaki panelle AYNI KONUYA bakar,
 * yalnızca aynı cümleyi kurmaz.
 *
 * Kaydı olmayan panel sessizce eski tahmini süresiyle akar; eksik
 * metin belgeseli bozmaz.
 */

/**
 * Geçiş panellerinin belgesel modundaki başlıkları.
 *
 * Veri katmanındaki başlıklar bilgi ekranı için yazılmıştı ("Taht
 * Orhan Gazi'ye Geçiyor"). Belgeselde geçiş bir sahne kapanışıdır;
 * başlık da olayı değil ANLAMI duyurmalıdır. Kaydı olmayan padişah
 * kendi veri başlığını kullanmaya devam eder.
 * @type {Record<string, string>}
 */
export const BELGESEL_GECIS_BASLIKLARI = {
  'osman-gazi': 'Bir Beylik, Kavgasız Bir Devir',
  'orhan-gazi': 'Karşı Kıyıya İlk Adım',
  'birinci-murad': 'Devlet Artık Kurucusundan Büyük',
  'celebi-mehmed': 'İkinci Kuruluş Tamamlandı',
  'ikinci-murad': 'Büyük Teşebbüsün Eşiğinde',
  'fatih-sultan-mehmed': 'Bir Çağ Kapandı',
  'ikinci-bayezid': 'Sindirme Yılları Bitiyor',
  'yavuz-sultan-selim': 'Ağırlık Merkezi Güneye Kaydı',
  'kanuni-sultan-suleyman': 'Zirvenin Öbür Yüzü',
  'ikinci-selim': 'Vekilin Devleti',
  'ucuncu-murad': 'Çatlayan Denge',
  'ucuncu-mehmed': 'Savaş İçeri Taşındı',
  'birinci-ahmed': 'Kural Değişti',
  'birinci-mustafa': 'Padişahı Artık Başkası Seçiyor',
  'genc-osman': 'Bir Fikir Tehlikeli Hâle Geliyor',
  'dorduncu-murad': 'Bir Sınır Çizildi',
  'sultan-ibrahim': 'Bitmeyen Bir Savaş Devrediliyor',
  'dorduncu-mehmed': 'Avrupa Artık Birlikte',
  'ikinci-suleyman': 'Dayanma Gücüyle Ölçülen Devir',
  'ikinci-ahmed': 'Masaya Oturma Fikri Doğuyor',
  'ikinci-mustafa': 'Sınırlar Artık Masada Çiziliyor',
  'ucuncu-ahmed': 'Yeniliğin Henüz Dayanağı Yok',
  'birinci-mahmud': 'Diplomasi Orduyu Telafi Ediyor',
  'ucuncu-osman': 'Sükûnet Bir Çözüm Değil',
  'ucuncu-mustafa': 'Islahat Artık Bütün Devletin Meselesi',
  'birinci-abdulhamid': 'Müttefiksiz Kalmak',
  'ucuncu-selim': 'Fikir Yaşıyor, Programı Yok',
  'dorduncu-mustafa': 'Taşra Merkeze Yürüdü',
  'ikinci-mahmud': 'Güç Var, Peki Ne İçin?',
  'abdulmecid': 'Değişimin Faturası Büyüyor',
  'abdulaziz': 'Reform Kendi Eleştirmenini Üretti',
  'besinci-murad': 'Taht Bir Programın Aracı',
  'ikinci-abdulhamid': 'Kendi Yetiştirdikleri',
  'besinci-mehmed': 'Bir Ülkenin Geleceği',
  'yildirim-bayezid': 'On Bir Yıllık Boşluk',
}

/** @type {Record<string, string>} */
export const BELGESEL_ANLATIMLARI = {
  /* ————————————————— 1 · OSMAN GAZİ ————————————————— */
  'osman-gazi-kapi':
    'On üçüncü yüzyılın sonunda Anadolu, birbirine benzeyen onlarca küçük beyliğe bölünmüştü. Selçuklu otoritesi çökmüş, İlhanlı baskısı artmıştı. Bu kalabalığın içinde, Söğüt çevresindeki bir uç beyliğinin altı yüzyıl sürecek bir devlete dönüşeceğini o gün kimse söyleyemezdi.',

  'osman-gazi-kunye':
    'Osman Bey, babasından bir devlet değil bir sınır bölgesinin yönetimini devraldı. Uç dediğimiz yer, merkezden uzak ve düşman sınırına bakan bölgedir; savaşçıyı çeker, denetimi zayıftır. Elinde ne hazine vardı ne de sarayı. Sahip olduğu tek üstünlük, karşısındaki imparatorluğun bu bölgeyi artık savunamamasıydı.',

  'osman-gazi-olay-bagimsizlik':
    'Bir beyliğin bağımsızlığı bayrakla değil, egemenlik işaretleriyle ölçülür: kendi adına hutbe okutmak, kadı atamak, vergi toplamak. Karacahisar alındıktan sonra bunların ilk ikisi görüldü. Askerî bir kazanç gibi görünen bu adım aslında hukuki bir ilandı: burası artık kendi kararını kendi veren bir siyasi yapıydı.',

  'osman-gazi-olay-koyunhisar':
    'Bizans, İznik yönündeki baskıyı kırmak için bölgeye kuvvet gönderdi. Açık arazide yapılan çarpışmayı Osman Bey kazandı. Kazanılan asıl şey toprak değildi. Bizans o güne kadar bu beyliği sınırdaki bir akıncı grubu sayıyordu; artık karşısına ordu çıkarılması gereken bir siyasi güç olarak görüyordu. Tanınmak, kazanılan her kaleden önemliydi.',

  'osman-gazi-karakter':
    'Bu dönemi anlamak için üç şeye bakmak gerekir. Surlu şehirleri alacak kuşatma tekniği yoktu; bu yüzden çevredeki kaleler alınıp yollar kesildi ve şehirler yıllar içinde teslim olmaya zorlandı. Direnmeyen yerel yöneticiler yerlerinde bırakıldı, hatta orduya katıldı. Ve alınan topraklar, ahi çevreleriyle kurulan bağ sayesinde pazarı ve üretimi olan yerleşimlere dönüştü.',

  'osman-gazi-osym':
    'Bu dönemden akılda kalması gereken şudur: Osmanlı tek bir günde kurulmadı. Bağımsızlık için verilen tarih sembolik bir kabuldür, çağdaş bir belgeye dayanmaz. Elimizdeki anlatıların çoğu olaylardan yaklaşık yüz yıl sonra yazıldı. Bu yüzden kuruluş yıllarında kesin bilgi değil, ihtiyatlı bir tablo vardır.',

  'osman-gazi-gecis':
    'Osman Bey öldüğünde geride bir devlet değil, devletleşmeye başlamış bir beylik bıraktı. Ama asıl mirası bu değildi. Taht kavgasız el değiştirdi ve bu, Osmanlı’nın ilk yüzyılındaki en büyük şansı oldu. Yıllardır kuşatma altında tutulan Bursa da bu devrin hemen ardından teslim olacaktı.',


  /* ————— Sokollu Devri ————— */
  'ikinci-selim-kapi':
    'Bir imparatorluk, hükümdarı ordunun başında sefere çıkmadan da yönetilebilir mi? Önümüzdeki sekiz yıl, bu sorunun ilk açık cevabıdır.',
  'ikinci-selim-kunye':
    'Selim, babasının aksine sefere çıkmadı. Devlet artık tek bir insanın at üstünde takip edebileceği büyüklükte değildi; maliyesi, yazışması ve elçilik trafiğiyle sürekli çalışan bir merkez gerekiyordu. Yürütmenin ağırlığı saraydan sadrazamlığa kaydı ve devleti fiilen Sokollu Mehmed Paşa yönetti.',
  'ikinci-selim-olay-ikinci-selim-1':
    'Doğu Akdeniz’in ortasındaki büyük ada Venedik’in elindeydi ve Mısır ile başkent arasındaki hattın tam üstünde duruyordu. Ada alındı, Magosa kalesi bir yıl direndikten sonra düştü. Osmanlı için bu bir güvenlik meselesiydi; ama bu hamle Avrupa’nın deniz güçlerini uzun süredir başaramadıkları bir şeye zorladı: birlikte hareket etmeye.',
  'ikinci-selim-karakter':
    'Kurulan birleşik donanma İnebahtı körfezinde Osmanlı filosunu neredeyse tamamen yok etti. Yine de tersanelerin filoyu bir kış içinde yeniden kurabilmesi, kaybedilenin gemi olduğunu, kapasitenin ise ayakta kaldığını gösterdi. Telafi edilemeyen kayıp yetişmiş denizcilerdi; etkisi yıllar içinde hissedildi.',
  'ikinci-selim-osym':
    'Bu dönemden akılda kalması gereken şudur: gündeme gelen kanal tasarıları dönemin ölçeğini gösterir. Don ile Volga’yı, ardından Süveyş’i açarak donanmayı bir cepheden diğerine taşımayı düşünen bir devlet artık bölgesel değil, kıtalar arası düşünüyordu. Bu projeler mühendislik ve maliyet nedeniyle hayata geçmedi.',
  'ikinci-selim-gecis':
    'Dönem kapandığında sınırlar hemen hemen aynı kalmıştı. Değişen, devletin nasıl yönetildiğiydi. Bundan sonra Osmanlı tarihini padişahlar kadar sadrazamlar, saray dengeleri ve maliyenin durumu belirleyecekti.',

  /* ————— Uzayan Cepheler ————— */
  'ucuncu-murad-kapi':
    'Bir devletin sınırları en geniş hâline ulaşırken maliyesi neden çökmeye başlar? Önümüzdeki sahne, o iki eğrinin kesiştiği yerdir.',
  'ucuncu-murad-kunye':
    'Klasik Osmanlı düzeni basit bir dengeye dayanıyordu: toprağın geliri sipahiye veriliyor, sipahi de karşılığında atıyla ve adamlarıyla sefere gidiyordu. Bu denge, savaşların kısa ve yakın olduğu bir dünyaya göre kurulmuştu. Murad’ın döneminde o dünya değişti.',
  'ucuncu-murad-olay-ucuncu-murad-1':
    'Kafkasya’ya açılan cephe bu varsayımı yıktı. Seferler bir mevsimde bitmiyor, ordu yıllarca Şirvan ve Azerbaycan dağlarında kalıyordu. Üstelik artık ateşli silah taşıyan, maaşla çalışan piyadeye ihtiyaç vardı; yeniçeri sayısı hızla arttı. Toprak geliri sabitken savaşın maliyeti sürekli yükseldi.',
  'ucuncu-murad-karakter':
    'Aynı yıllarda Amerika’dan Avrupa’ya akan gümüş, Akdeniz üzerinden Osmanlı piyasalarına da girdi ve fiyatları uçurdu. Hazine paranın gümüş oranını düşürdü, yeni vergiler kondu, gelirler peşin para karşılığı iltizama verildi. Maaşı eriyen yeniçeri huzursuzlandı, geliri yetmeyen sipahi tımarını bıraktı.',
  'ucuncu-murad-osym':
    'Bu dönemden akılda kalması gereken şudur: doğuda ulaşılan geniş sınır haritada etkileyici görünür, ama o hattı beslemek korumaktan daha pahalıydı. Sınırın en geniş olduğu an, devletin en güçlü olduğu an değildir.',
  'ucuncu-murad-gecis':
    'Padişahın sefere çıkmaması sarayın ağırlığını artırdı; tayinler ve nüfuz mücadeleleri artık başkentin içinde yürütülüyordu. Dönem kapandığında imparatorluk en geniş sınırlarından birine ulaşmıştı, fakat bu sınırları ayakta tutan mali düzen çatlamıştı. Faturası birkaç yıl içinde Anadolu’nun içlerinde ödenecekti.',

  /* ————— Haçova’dan Celâli Krizine ————— */
  'ucuncu-mehmed-kapi':
    'Bir ordu modernleşirken kendi ülkesinde nasıl bir güvenlik sorunu doğurabilir? Önümüzdeki sahne bunun en açık örneğidir.',
  'ucuncu-mehmed-kunye':
    'Avusturya cephesindeki uzun savaş yeni bir gerçeği ortaya koydu: karşı taraf ateşli silahta ve tabya düzeninde Osmanlı’yı yakalamıştı. Artık zaferler süvarinin hızıyla değil, tüfekli piyadenin sayısıyla kazanılıyordu.',
  'ucuncu-mehmed-olay-ucuncu-mehmed-1':
    'Merkez bu ihtiyacı hızla karşılamak için Anadolu köylüsünden sekban ve sarıca adı verilen ücretli tüfekli bölükler topladı. Eğri kalesinin alınması ve Haçova’da kazanılan meydan savaşı bu tercihin işe yaradığını gösterdi; padişah bizzat sefere katıldı. Sorun, sefer bitince başladı.',
  'ucuncu-mehmed-karakter':
    'Terhis edilen bu adamlar köylerine değil, ellerindeki tüfekle yollara döndü. Ağır savaş vergileri yüzünden zaten toprağını terk etmiş kalabalıklarla birleştiler ve kasabaları haraca bağladılar. Anadolu’da yıllarca sürecek hareketlerin arkasında yalnızca isyan ruhu değil, bu somut mekanizma vardır.',
  'ucuncu-mehmed-osym':
    'Bu dönemden akılda kalması gereken şudur: devlet aynı anda iki cephede savaşıyordu. Biri Macaristan’da, diğeri kendi topraklarının ortasında. İkincisi kaybedilen bir kaleden çok daha pahalıya mal oluyordu — köyler boşaldı, üretim düştü, vergi toplanamadı.',
  'ucuncu-mehmed-gecis':
    'Bu dönemden sonra Osmanlı’nın asıl meselesi sınırları büyütmek değil, elindekini yönetilebilir hâlde tutmak olacaktı. Sonraki padişah, hem bu güvenlik krizini hem de hanedanın kendi kuralını yeniden düşünmek zorunda kalacaktı.',

  /* ————— Diplomaside Sayfa Dönüyor ————— */
  'birinci-ahmed-kapi':
    'Bir devletin kendini nasıl gördüğü, kaybettiği topraklardan daha çok şey anlatabilir. Önümüzdeki sahne böyle bir eşiktir.',
  'birinci-ahmed-kunye':
    'Ahmed tahta on üç yaşında çıktı ve hem dışarıda hem hanedan içinde iki köklü kuralı değiştirecekti. İkisi de toprakla değil, devletin kendini tanımlamasıyla ilgiliydi.',
  'birinci-ahmed-olay-birinci-ahmed-1':
    'On üç yıl süren savaşın sonundaki antlaşma, toprak bakımından yıkıcı değildi; asıl değişim metnin dilindeydi. Osmanlı o güne kadar Habsburg hükümdarına yalnızca “Viyana kralı” diye hitap ediyor, ondan yıllık vergi alıyordu. Bu kez karşı taraf denk bir imparator olarak tanındı, düzenli ödeme kaldırıldı ve görüşmeler başkentte değil sınır boyunda yürütüldü.',
  'birinci-ahmed-karakter':
    'İçeride ise hanedanın kendi kuralı değişti. Uzun süre taht, kardeşler arasındaki ölümcül bir rekabetin sonunda kazanılıyordu; bu yöntem acımasızdı ama tahta çıkan kişi yıllarca sancakta valilik yapmış, ordu yönetmiş biri oluyordu. Yeni anlayışla taht ailenin en yaşlı ve uygun üyesine geçmeye başladı.',
  'birinci-ahmed-osym':
    'Bu dönemden akılda kalması gereken şudur: kan dökülmesi azaldı, ama şehzadeler artık taşrada değil sarayın kafes denilen kapalı dairelerinde büyütüldü. Yönetim tecrübesi olmayan hükümdar, gücün sadrazam ve saray çevresine kaymasını hızlandırdı. Tarihçiler bu değişimin bilançosunu hâlâ tartışır.',
  'birinci-ahmed-gecis':
    'Aynı yıllarda başkentin siluetine eklenen büyük külliye, sarsılan bir devletin hâlâ nasıl bir kaynağı ve iddiası olduğunu gösteriyordu. Cephede üstünlüğü tartışılmaya başlanan devlet, mimaride iddiasını sürdürüyordu. Ama artık asıl mücadele sınırlarda değil, tahtın çevresinde yaşanacaktı.',

  /* ————— Tahtın Sahibi Kim? ————— */
  'birinci-mustafa-kapi':
    'Bazı saltanatlar yaptıklarıyla değil, ortaya çıkardıklarıyla önemlidir. Önümüzdeki kısa dönem de öyledir.',
  'birinci-mustafa-kunye':
    'Yeni veraset anlayışının ilk uygulaması buydu: taht babadan oğula değil, kardeşe geçti. Kural hanedan içindeki ölümcül rekabete son vermek için düşünülmüştü ve bu amacına ulaştı. Ama Mustafa on dört yılını sarayın kapalı dairelerinde, dış dünyayla teması kesilmiş hâlde geçirmişti.',
  'birinci-mustafa-olay-birinci-mustafa-1':
    'Hükümdar olacak kişi yönetmeye hazır değilse ne olur? Cevabı devlet kendi içinden verdi. Üç ay sonra sadrazam, şeyhülislam ve saray ağaları bir araya gelip tahtı boşalttı. Bir padişah, devlet işlerini yürütemediği gerekçesiyle ilk kez açıkça görevden alınmıştı.',
  'birinci-mustafa-karakter':
    'Kaynaklar Mustafa’nın ruh sağlığını ayrıntılı anlatır. Bugünün tarihçileri bu tasvirleri temkinli okur; çünkü aynı kayıtlar tahttan indirmeyi meşrulaştırmak için de yazılmıştır. Bir hükümdarın portresini çoğu zaman onu deviren taraf yazar.',
  'birinci-mustafa-osym':
    'Bu dönemden akılda kalması gereken şudur: dört yıl sonra aynı kişi ikinci kez tahta çıkarıldı ve bir yıl içinde yine indirildi. Bu tekrar tek başına talihsiz bir hikâyedir; bir arada bakıldığında ise padişahı belirleyenin artık doğum sırası değil, valide sultanın, ocak ağalarının ve ulemanın uzlaşması olduğunu gösterir.',
  'birinci-mustafa-gecis':
    'Osmanlı’da hükümdarın konumu bu yıllarda sessizce yeniden tanımlandı. Bundan sonra tahta çıkmak kadar tahtta kalabilmek de bir siyaset meselesi olacaktı. Bunu en sert biçimde bir sonraki genç padişah öğrenecekti.',

  /* ————— Reformun Bedeli ————— */
  'genc-osman-kapi':
    'Bir devleti kuran güç, zamanla o devletin önündeki en büyük engele dönüşebilir mi? Önümüzdeki sahne, bu sorunun ilk kez yüksek sesle sorulduğu ve çok ağır bir bedelle karşılandığı sahnedir.',
  'genc-osman-kunye':
    'Yeniçeri Ocağı bir zamanlar Avrupa’nın en disiplinli askerî gücüydü: evlenmesi ve ticaret yapması yasak, yalnızca padişaha bağlı bir birlik. Zaman içinde yapısı değişti. Mensupları evlendi, çarşıda dükkân açtı, maaş belgeleri alınıp satılan bir kâğıda dönüştü. Ordu, savaşan bir birlik olduğu kadar ayrıcalıkları olan büyük bir toplumsal gruba dönüşmüştü.',
  'genc-osman-olay-genc-osman-1':
    'Lehistan üzerine yapılan sefer bunu açıkça gösterdi. Kayıtlarda yazılı asker sayısı büyüktü ama sahaya çıkan çok daha azdı; kuşatma sonuç vermeden anlaşmayla bitti. Henüz on yedi yaşındaki padişah, sorunun komutanlarda değil sistemin kendisinde olduğu sonucuna vardı.',
  'genc-osman-karakter':
    'Tasarısı radikaldi: Anadolu ve Suriye’den toplanacak, doğrudan kendisine bağlı yeni bir ordu kurmak. Bu, bir orduyu yenilemekten fazlasıydı; başkentteki bütün dengeyi değiştirecekti. Hacca gideceğini açıklaması, asıl amacın asker toplamak olduğu şeklinde yorumlandı.',
  'genc-osman-osym':
    'Bu dönemden akılda kalması gereken şudur: ayaklanan ocak padişahı tahttan indirdi ve öldürdü. Osmanlı tarihinde bir ilkti. Bundan sonra iki yüzyıl boyunca askerî düzeni değiştirmek isteyen her padişah bu hatırayı hesaba katacaktı.',
  'genc-osman-gecis':
    'Reform fikri ölmedi; ama artık tehlikeli bir fikirdi. Hükümdarın dokunulmazlığının mutlak olmadığı da o gün anlaşıldı. Devletin önündeki soru artık şuydu: değişim, değişime direnen gücü aşmadan mümkün mü?',

  /* ————— Otoritenin Sert Dönüşü ————— */
  'dorduncu-murad-kapi':
    'Dağılan bir otorite geri getirilebilir mi? Önümüzdeki sahne sorunun cevabını verir; ama bunun hangi yöntemlerle yapıldığı bugün de tartışılır.',
  'dorduncu-murad-kunye':
    'Murad tahta on bir yaşında çıktı. İlk yıllarda kararları annesi, sadrazamlar ve ocak ağaları veriyordu. Başkentte maaş ayaklanmaları sıradanlaşmıştı; ayaklanan askerler bir sadrazamı sarayın avlusunda, padişahın gözü önünde öldürdü. Genç hükümdarın öğrendiği ilk ders, hükümdarlığın kendiliğinden bir güç getirmediğiydi.',
  'dorduncu-murad-olay-dorduncu-murad-1':
    'Yönetimi eline aldığında uyguladığı yöntem sertti. Gece devriyeleri çıkarıldı, tütün ve içki yasaklandı, kahvehaneler kapatıldı. Kahvehanelerin kapatılması ahlaki bir tedbirden çok siyasi bir hamleydi: buralar ordu ve saray dedikodusunun dolaştığı yerlerdi. Kaynaklar bu dönemi iki farklı şekilde anlatır; kimileri asayişi, kimileri baskının ağırlığını öne çıkarır.',
  'dorduncu-murad-karakter':
    'Doğuya yapılan iki büyük seferin amacı yalnızca şehir almak değildi. Bu sınır bir asırdır sürekli el değiştiriyor, her yeni hükümdar aynı yerleri yeniden fethetmek zorunda kalıyordu. Bu, hazineyi kanatan bir kısır döngüydü.',
  'dorduncu-murad-osym':
    'Bu dönemden akılda kalması gereken şudur: Kasr-ı Şirin’de varılan uzlaşma o döngüyü kırdı. Çizilen hat, iki devletin birbirini yenemeyeceğini kabul etmesi anlamına geliyordu. Öyle kalıcı oldu ki bugünkü doğu sınırının ana hatları hâlâ o uzlaşmanın izini taşır.',
  'dorduncu-murad-gecis':
    'Aynı yıllarda padişaha sunulan raporlar önemli bir yenilik getirdi: devlet ilk kez kendi bozulmasını yazılı olarak teşhis ediyordu. Ancak bu teşhis, yeni bir düzen kurmayı değil eski düzene dönmeyi öneriyordu. Bu bakış açısı sonraki iki yüzyılın ıslahat tartışmalarına damgasını vuracaktı.',


  /* ————— Girit ve Saray Krizi ————— */
  'sultan-ibrahim-kapi':
    'Kara imparatorluğu, denize hâkim bir rakiple nasıl savaşır? Önümüzdeki sahnede başlayan mücadele, bu sorunun cevabını çeyrek asırda verecek.',
  'sultan-ibrahim-kunye':
    'İbrahim tahta, kardeşinin ölümüyle ve hanedanın tek erkek üyesi olarak çıktı. Uzun yıllarını kapalı dairelerde geçirmişti. Devraldığı devlet ise yeni bir savaşın eşiğindeydi.',
  'sultan-ibrahim-olay-sultan-ibrahim-1':
    'Akdeniz’in en büyük adalarından Girit, Osmanlı deniz yollarının tam ortasında Venedik’in elindeydi. Bir hac kafilesine yönelik korsan saldırısı bahane oldu ve donanma adaya çıktı. Hanya kısa sürede alındı. Sefer açmak kolaydı; asıl mesele adayı beslemekti. Her asker, her top ve her çuval un, düşman gemilerinin dolaştığı sulardan geçmek zorundaydı.',
  'sultan-ibrahim-karakter':
    'Bu yüzden savaş bir mevsimde değil, bir kuşakta ölçüldü. Venedik donanması Çanakkale Boğazı’nın çıkışını kapatarak başkentin denizden ikmalini tehdit etti; İstanbul’da un ve et sıkıntısı yaşandı. Uzun kuşatmalar hazineyi kuruttu ve mesele bir süre sonra askerî olmaktan çıkıp iki tarafın da geri adım atamadığı bir prestij meselesine döndü.',
  'sultan-ibrahim-osym':
    'Bu dönemden akılda kalması gereken şudur: padişahı tahta çıkaran da indiren de artık aynı üçlüydü. Valide sultanın etrafındaki saray çevresi, şeyhülislamın temsil ettiği ulema ve ocak ağaları. Bu güçler bir araya geldiğinde hükümdarın direnme imkânı yoktu.',
  'sultan-ibrahim-gecis':
    'Geriye bitmeyen bir deniz savaşı, boşalmış bir hazine ve altı yaşında bir padişah kaldı. Devletin toparlanması tahttan değil sadrazamlık makamından gelecekti; o makam kısa süre sonra devletin gerçek yönetim merkezi hâline gelecekti.',

  /* ————— Köprülülerden Viyana’ya ————— */
  'dorduncu-mehmed-kapi':
    'Yorulmuş bir devlet kendini toparlayabilir mi? Önümüzdeki uzun saltanat, önce evet sonra hayır diyen iki ayrı yarıdan oluşur.',
  'dorduncu-mehmed-kunye':
    'Mehmed tahta altı yaşında çıktı. İlk yıllar saray içi çekişmelerle, boş hazineyle ve boğazı kapatan düşman donanmasıyla geçti. Devlet dibe vurmuştu ve çare beklenmedik bir yerden geldi.',
  'dorduncu-mehmed-olay-dorduncu-mehmed-1':
    'Seksen yaşındaki Köprülü Mehmed Paşa sadrazamlığı kabul etmeden önce şart koştu: kararlarına karışılmayacak, tayinlerine dokunulmayacak ve hakkındaki şikâyetlere itibar edilmeyecekti. Bu ayrıntı önemlidir; çünkü asıl sorun yetenek eksikliği değil, hiçbir sadrazamın işini bitirecek kadar uzun süre yerinde kalamamasıydı. Ondan önceki elli yılda makam kırktan fazla el değiştirmişti.',
  'dorduncu-mehmed-karakter':
    'Yetki güvenceye alınınca sonuç hızla geldi. Maliye disipline edildi, Anadolu’daki asayiş yeniden kuruldu, boğaz ablukası kırıldı. Oğlu döneminde Uyvar alındı ve çeyrek asırdır süren ada savaşı Kandiye’nin teslimiyle bitti. Bu yıllar, klasik düzenin doğru ellerde hâlâ çalışabildiğini gösterir.',
  'dorduncu-mehmed-osym':
    'Bu dönemden akılda kalması gereken şudur: Viyana önündeki başarısızlık ilk değildi. Bu kez farklı olan, Avrupa’nın tepkisiydi. Papa’nın girişimiyle Avusturya, Lehistan, Venedik ve sonra Rusya kalıcı bir ittifak kurdu; tek seferlik bir sefer ordusu değil, yıllarca birlikte savaşmayı taahhüt eden bir birlik.',
  'dorduncu-mehmed-gecis':
    'Osmanlı ilk kez aynı anda birden çok cephede, sonu görünmeyen bir savunma savaşına girdi. Sınırlar geriledikçe fatura başkente döndü ve kırk yıllık padişah tahtından indirildi. Bundan sonra Osmanlı diplomasisinin işi kazanmak değil, kaybı sınırlamak olacaktı.',

  /* ————— Savunmanın Dört Yılı ————— */
  'ikinci-suleyman-kapi':
    'Başlamadığınız ve bitiremeyeceğiniz bir savaşı devralmak nasıl bir şeydir? Önümüzdeki kısa saltanat bunun cevabıdır.',
  'ikinci-suleyman-kunye':
    'Süleyman tahta çıktığında kırk yılını sarayın kapalı dairelerinde geçirmişti; dışarıdaki dünyayı neredeyse hiç görmemişti. Devraldığı devlet ise Osmanlı’nın yüzyıllarca alışık olduğunun tersi bir durumdaydı.',
  'ikinci-suleyman-olay-ikinci-suleyman-1':
    'Savaş eskiden bir gelir kaynağıydı: sefer yapılır, toprak alınır, gelir artardı. Şimdi savaş yalnızca harcıyordu. Belgrad’ın düşmesiyle Tuna hattı kırıldı, cephe Balkanların içine doğru kaydı ve savaş ilk kez uzun süredir güvende olan bölgelerin kapısına dayandı.',
  'ikinci-suleyman-karakter':
    'Toparlanmanın yolu beklenmedik bir yerden geçti. Göreve gelen Köprülü Fazıl Mustafa Paşa, savaş yıllarında üst üste konmuş olağanüstü vergileri kaldırdı. Bu bir hayırseverlik değil, savaş tedbiriydi: tükenmiş bir köylüden ne asker ne vergi çıkardı. Yükü hafifletmek, cepheyi beslemenin tek yoluydu.',
  'ikinci-suleyman-osym':
    'Bu dönemden akılda kalması gereken şudur: kaybedilen her kale, geride vergi vermeyen bir bölge ve göç eden bir nüfus bırakıyordu. Sefer masrafı artık ganimetle değil iç vergilerle karşılanıyordu. Bu tersine dönüş, bütün mali mantığı altüst etti.',
  'ikinci-suleyman-gecis':
    'Bu anlayış kısa sürede karşılığını verdi ve kaybedilen hat bir ölçüde geri alındı. Ama padişahın ömrü savaşın sonunu görmeye yetmedi. Osmanlı artık zaferle değil, dayanma gücüyle ölçülen bir döneme girmişti.',

  /* ————— Tek Bir Savaşın İçinde ————— */
  'ikinci-ahmed-kapi':
    'Bazı saltanatların tamamı tek bir savaşın içinde geçer. Önümüzdeki dört yıl da öyledir.',
  'ikinci-ahmed-kunye':
    'Uzun savaşların en az konuşulan tarafı insan kaynağıdır. Bir devletin cepheye asker sürebilmesi için yalnızca paraya değil, o askeri toplayacak taşra düzenine, yolları güvenli tutan bir yönetime ve geride üretim yapan bir nüfusa ihtiyacı vardır. On yıllık savaş bunların hepsini aşındırmıştı.',
  'ikinci-ahmed-olay-ikinci-ahmed-1':
    'Cephede yaşanan kırılma bir başka zaafı da gösterdi. Toparlanmayı sağlayan Fazıl Mustafa Paşa, Salankamen’de ordunun başındayken öldü ve komuta dağıldı. Yetkiyi tek elde toplamak hızlı karar sağlıyordu; ama o el çekildiğinde yerini doldurmak yıllar alıyordu.',
  'ikinci-ahmed-karakter':
    'Macaristan ve Erdel’de Osmanlı yönetimi artık geri dönülmez biçimde çözülüyordu. Yerel eşraf taraf değiştiriyor, vergi düzeni işlemiyor, sınır boyundaki halk göç ediyordu. Harita üzerinde yavaş görünen bu çekilme, sahada çok daha hızlı yaşandı.',
  'ikinci-ahmed-osym':
    'Bu dönemden akılda kalması gereken şudur: hazineyi ayakta tutmak için vergi kaynakları ömür boyu kiralanmaya başlandı. Bu düzenleme kısa vadede para getirdi, uzun vadede merkezin taşra üzerindeki denetimini zayıflattı.',
  'ikinci-ahmed-gecis':
    'Savaş bitmeden saltanat sona erdi. Devlet artık kaybı durdurmayı değil, masaya oturup şartlarını konuşmayı düşünmeye başlamıştı. Önce kaybın büyüklüğünü kabul etmek gerekiyordu ve bu, askerî bir karardan çok siyasi bir olgunluk meselesiydi.',

  /* ————— Karlofça Eşiği ————— */
  'ikinci-mustafa-kapi':
    'Bir devlet, kaybettiğini ilk kez resmen kabul ettiğinde ne değişir? Önümüzdeki sahne, Osmanlı için o eşiktir.',
  'ikinci-mustafa-kunye':
    'Mustafa tahta çıktığında geleneksel yöntemi denedi: ordunun başında bizzat sefere çıkmak. Yayımladığı fermanda, atalarının yaptığı gibi rahatı bırakıp cepheye gideceğini duyurdu. Moral açısından güçlü bir mesajdı; ama sorun hükümdarın cephede olup olmaması değildi.',
  'ikinci-mustafa-olay-ikinci-mustafa-1':
    'Ordu Tisa nehrini geçerken Savoy prensi Eugen baskın verdi. Yarısı karşıya geçmiş, yarısı beride kalmış bir orduya yapılan bu saldırı on altı yıllık savaşın kaderini belirledi. Sadrazam dâhil pek çok komutan öldü, hazine ve top ele geçirildi. Baskının zamanlaması, karşı tarafın Osmanlı ordusunun her hareketini ne kadar yakından izlediğini de gösteriyordu.',
  'ikinci-mustafa-karakter':
    'Sonrasında imzalanan antlaşma, haritadaki kayıptan daha fazlasını ifade eder. Görüşmeler İngiltere ve Hollanda’nın arabuluculuğunda, her tarafa ayrı kapısı olan bir çadırda ve Avrupa diplomasisinin usulleriyle yürütüldü. Herkes elinde tuttuğu yeri koruyacaktı.',
  'ikinci-mustafa-osym':
    'Bu dönemden akılda kalması gereken şudur: Osmanlı ilk kez geniş bir toprağı kalıcı olarak bıraktığını yazılı biçimde kabul etti. Devletin kendine bakışı da o gün değişti; bundan sonra sınırlar sefer sonunda değil konferans masasında belirlenecekti.',
  'ikinci-mustafa-gecis':
    'Yenilginin faturası kısa sürede başkente döndü. Sarayın uzun süredir Edirne’de oturması, İstanbul esnafını ve maaşını alamayan askeri aynı safta birleştirdi. Ayaklanma bir taht değişikliğiyle bitti; ama asıl gösterdiği şey, artık başkentin kendisinin bir siyasi güç olduğuydu.',

  /* ————— Lale Devri ————— */
  'ucuncu-ahmed-kapi':
    'Yenilgiden sonra ne yapılır? Daha çok savaşmak mı, yoksa karşı tarafın neden kazandığını anlamaya çalışmak mı? Önümüzdeki sahne, Osmanlı’nın ikinci yolu ilk kez ciddiye aldığı sahnedir.',
  'ucuncu-ahmed-kunye':
    'Ahmed tahta bir ayaklanmanın ardından çıktı ve yirmi yedi yıl kalacaktı. Dönemin yönünü belirleyen isim ise damadı ve sadrazamı Nevşehirli Damat İbrahim Paşa oldu.',
  'ucuncu-ahmed-olay-ucuncu-ahmed-1':
    'Kuzeyde beklenmedik bir fırsat çıktı. İsveç kralı, Rus çarına yenilince Osmanlı’ya sığınmıştı; çarın onu takip etmesi savaşı başlattı. Ordu, Prut nehri kıyısında çarın kuvvetlerini kuşattı. Rus ordusu kuşatmayı yararak çıkamayacak durumdaydı, ama ağır şartlarla anlaşma imzalanıp bırakıldı. Bu kararın yeterince kullanılıp kullanılmadığı çağdaşları arasında da tartışıldı.',
  'ucuncu-ahmed-karakter':
    'Batıda kayıplar sürdü ve barış masasında yeni topraklar bırakıldı. Ama bu barış bilinçli bir tercihe dönüştü: savaşı kaybettiğimiz yerde tekrar denemek yerine, kazanan tarafın neyi farklı yaptığını öğrenmek. Paris’e gönderilen elçiden sıradan bir görüşme değil, gördüklerini yazması istendi. Aynı yıllarda kurulan matbaa Türkçe kitap basmaya başladı.',
  'ucuncu-ahmed-osym':
    'Bu dönem çoğu zaman lale bahçeleri ve eğlence hayatıyla anlatılır. Bu tablo eksiktir ve bir bölümü dönemi eleştirenlerin kaleminden çıkmıştır. Yine de saray çevresinin harcamalarının, doğuda kötü giden bir savaş sürerken göz önünde olması gerçek bir hoşnutsuzluk yarattı.',
  'ucuncu-ahmed-gecis':
    'Başkentte patlayan ayaklanma hem sadrazamı hem padişahı götürdü. Yenilik fikri ise ortadan kalkmadı; yalnızca onu taşıyacak toplumsal desteğin henüz bulunmadığı anlaşıldı. Bu ders, sonraki padişahların önünde duracaktı.',


  /* ————— Sessiz Islahat ————— */
  'birinci-mahmud-kapi':
    'Bir isyan yenilik hareketini devirdikten sonra, yenilik nasıl sürdürülür? Önümüzdeki sahnenin cevabı sessiz ve teknik bir yoldur.',
  'birinci-mahmud-kunye':
    'Mahmud tahta bir ayaklanmanın ardından çıktı ve öncekinin başına gelenler ortadaydı. Bu yüzden Yeniçeri Ocağı’na doğrudan dokunmadı. Bunun yerine onun yanına, Avrupa usulüyle eğitilen yeni teknik birlikler kurdu.',
  'birinci-mahmud-olay-birinci-mahmud-1':
    'Bu birlikleri düzenleyen kişi ilginç bir isimdi. Fransız asilzadesi Bonneval, kendi ülkesinde ve Avusturya’da subaylık yaptıktan sonra Osmanlı hizmetine girmiş, Müslüman olup Humbaracı Ahmed Paşa adını almıştı. Ocağı bölüklere ayırdı, düzenli maaş ve eğitim getirdi. Bilginin kitapla değil kişilerle taşındığı bir çağda bu tercih, dışarıdaki tecrübeyi içeri almanın en hızlı yoluydu.',
  'birinci-mahmud-karakter':
    'Bu yöntem bir buluş gibi görünmese de sonraki yüz yıl boyunca Osmanlı ıslahatının temel stratejisi oldu: eskiyi kaldırmak yerine yenisini yanına kurmak. Mühendislik eğitimi için ayrı bir okul açıldı, topçuluk elden geçirildi.',
  'birinci-mahmud-osym':
    'Bu dönemden akılda kalması gereken şudur: kuzeyde Rusya, batıda Avusturya ile aynı anda savaşmak kâğıt üzerinde umutsuzdu. Fakat bu iki devletin çıkarları her noktada örtüşmüyordu ve Osmanlı diplomasisi bunu iyi kullandı. Belgrad geri alındı ve bu, uzun yıllardan sonra batıda kazançla kapanan son antlaşma oldu.',
  'birinci-mahmud-gecis':
    'Görünmeyen bir bedeli vardı: arabuluculuk yapan Fransa’ya, o güne kadar her padişah değişiminde yenilenen ticari ayrıcalıklar kalıcı hâle getirildi. Kısa vadede kazanılan diplomatik başarı, uzun vadede ekonomik bağımlılığın kapısını araladı.',

  /* ————— Üç Yıllık Ara Dönem ————— */
  'ucuncu-osman-kapi':
    'Osmanlı tarihinde büyük savaşın olmadığı dönemler azdır. Önümüzdeki kısa saltanat o nadir aralıklardan biridir; ve tam da bu yüzden başka bir şeyi görmemizi sağlar.',
  'ucuncu-osman-kunye':
    'Osman tahta ellili yaşlarında, ömrünün büyük bölümünü kapalı dairelerde geçirdikten sonra çıktı. Saltanatı büyük bir dış savaş olmadan geçecekti; gündemi sınırlar değil başkentin kendisi belirledi.',
  'ucuncu-osman-olay-ucuncu-osman-1':
    'Dönemin en yıkıcı olayları başkentin içinde yaşandı. İstanbul büyük ölçüde ahşap bir şehirdi ve yangın burada sıradan bir felaket değildi. Çıkan büyük yangın binlerce evi kül etti; mahallelerle birlikte dükkânlar, atölyeler, depolar ve vergi kayıtları da yandı. Bir yangın, bir savaş kadar gelir kaybettirebiliyordu.',
  'ucuncu-osman-karakter':
    'Bu yüzden dönemin gündemi imar, iaşe ve harcamaları kısmak oldu. Devlet hazineyi savaşla değil şehirle uğraşarak korumaya çalıştı. Fiyat denetimi, un ve et tedariki, mahalle güvenliği; bir başkenti ayakta tutan işlerin çoğu bunlardı.',
  'ucuncu-osman-osym':
    'Bu dönemden akılda kalması gereken şudur: tamamlanan Nuruosmaniye külliyesinin kavisli avlusu ve süsleme anlayışı klasik Osmanlı mimarisinden ayrılıp Avrupa’daki barok üslubu takip eder. Değişimin ilk işaretleri çoğu zaman kanunlarda değil taşta görünür.',
  'ucuncu-osman-gecis':
    'Kısa ve olaysız bir dönemdi. Fakat bu sükûnet bir çözüm değil, bir aralıktı. Kuzeydeki komşu bu yıllarda hızla güçleniyordu; hesaplaşma sonraki padişahı bekliyordu.',

  /* ————— Yenilenme Arayışı ————— */
  'ucuncu-mustafa-kapi':
    'Yeni silahlar almak bir orduyu modernleştirmeye yeter mi? Önümüzdeki sahne, cevabın hayır olduğunu çok pahalı bir şekilde gösterecek.',
  'ucuncu-mustafa-kunye':
    'Mustafa sorunun farkındaydı. Harcamaları kıstı, hazineye kaynak ayırdı, topçuluğu yenileyecek uzmanlar getirtti. Bunların hepsi doğru yöndeydi.',
  'ucuncu-mustafa-olay-ucuncu-mustafa-1':
    'Macar asıllı Fransız subay Baron de Tott, Boğaz istihkâmlarını elden geçirdi, top dökümhanesini yeniledi ve hızlı ateş eden yeni bir birlik kurdu. Ama bu yenilikler, işleyişi değişmemiş bir yapının içine yerleştirildi. Komuta hâlâ liyakatten çok nüfuzla dağıtılıyor, birlikler ortak bir doktrinle eğitilmiyordu.',
  'ucuncu-mustafa-karakter':
    'Lehistan’ın iç işlerine Rus müdahalesi üzerine başlayan savaş bu boşluğu ortaya çıkardı. Karşıdaki devletin üstünlüğü yalnızca askerinde değildi; ikmalinde, haritacılığında ve merkezî planlamasındaydı. Savaş aynı anda Tuna boyunda, Kırım’da, Kafkaslarda ve Ege’de yürüyordu.',
  'ucuncu-mustafa-osym':
    'Bu dönemden akılda kalması gereken şudur: Rus donanması Baltık’tan yola çıkıp bütün Avrupa’yı dolaşarak Ege’ye geldi ve Çeşme limanına sıkışmış Osmanlı donanmasını bir gecede yaktı. Kaybedilen gemilerden çok, böyle bir hareketi öngöremeyen bir istihbarat ve komuta düzeniydi.',
  'ucuncu-mustafa-gecis':
    'Padişah savaşın sonunu göremeden öldü. Geride bıraktığı ders açıktı: ıslahat, orduya eklenen bir parça değil devletin bütününü ilgilendiren bir mesele hâline gelmişti. Ama faturayı ödemek haleflerine kalacaktı.',

  /* ————— Küçük Kaynarca’nın Mirası ————— */
  'birinci-abdulhamid-kapi':
    'Bazı antlaşmalar toprak kaybından çok daha fazlasını değiştirir. Önümüzdeki dönemin başındaki metin, Osmanlı tarihinde böyle bir metindir.',
  'birinci-abdulhamid-kunye':
    'Abdülhamid tahta çıktığında savaş kaybedilmişti ve şartları imzalamak ona düştü. Kırk yılını kapalı dairelerde geçirmiş bir hükümdar, devletin en ağır antlaşmalarından birini devraldı.',
  'birinci-abdulhamid-olay-birinci-abdulhamid-1':
    'Küçük Kaynarca’nın ağırlığı üç noktadaydı. Birincisi, Kırım Hanlığı bağımsız ilan edildi: Osmanlı ilk kez Müslüman nüfusun çoğunlukta olduğu geniş bir bölgeyi denetiminden çıkarıyordu. İkincisi, Rusya Karadeniz’de ticaret ve geçiş hakkı kazandı. Üçüncüsü ve en kalıcısı, metnin Ortodoks tebaayla ilgili muğlak ifadeleriydi; Rusya bunu sonraki yüzyıl boyunca iç işlere karışmanın hukuki dayanağı olarak kullandı.',
  'birinci-abdulhamid-karakter':
    'Dokuz yıl sonra Kırım doğrudan ilhak edildi. Karadeniz yüzyıllardır Osmanlı’nın iç deniziydi ve başkenti kuzeyden koruyan doğal bir tampondu. Bu üstünlük sona erdiğinde İstanbul ilk kez kuzeyden denizle gelebilecek bir tehdide açık hâle geldi. Kayıp aynı zamanda büyük bir göç dalgası başlattı.',
  'birinci-abdulhamid-osym':
    'Bu dönemden akılda kalması gereken şudur: yürütülen ıslahat gerçekti ama sessizdi. Sadrazam Halil Hamid Paşa orduda sayım yaptırıp kayıt dışı maaşları temizlemeye çalıştı; nüfuzunu kaybedenlerin şikâyetleri sonuç verdi ve görevden alınıp idam edildi. Islahatın hâlâ kurumlara değil kişilere bağlı olduğunu gösteren bir sondu bu.',
  'birinci-abdulhamid-gecis':
    'Saltanatın sonunda yeniden iki cepheli bir savaş vardı ve devlet bu kez yalnızdı. Müttefiksiz savaşmak, on dokuzuncu yüzyıl boyunca Osmanlı’nın en büyük stratejik zaafı olacaktı.',

  /* ————— Nizam-ı Cedid ————— */
  'ucuncu-selim-kapi':
    'Osmanlı’da ilk kez, tek tek tedbirler yerine bütünlüklü bir program denendi. Önümüzdeki sahne, o programın hem neyi doğru gördüğünün hem de neden yarıda kaldığının hikâyesidir.',
  'ucuncu-selim-kunye':
    'Selim tahta çıktığında savaş sürüyordu; önce masayı kapattı, sonra devlet adamlarından ülkenin durumu hakkında rapor istedi. Gelen yirmiden fazla layihanın ortak sonucu şuydu: parça parça tedbir işe yaramıyordu.',
  'ucuncu-selim-olay-ucuncu-selim-1':
    'Padişah üç şeyi aynı anda gördü. Yeni bir orduya ihtiyaç vardı. O ordunun kimsenin dokunamayacağı ayrı bir gelir kaynağı olmalıydı. Ve Avrupa’yı tanımak için sefer sonunda elçi göndermek yetmiyordu; orada sürekli kalıp izleyen kadrolar gerekiyordu. Bu üç ihtiyacı birlikte görmesi, onu kendisinden önceki yenilikçilerden ayırır.',
  'ucuncu-selim-karakter':
    'Yeni ordu Avrupa usulüyle talim etti, üniforma giydi, düzenli maaş aldı; masrafı için ayrı bir hazine kuruldu. Londra, Paris, Viyana ve Berlin’de daimî elçilikler açıldı. Bunlar yalnızca diplomasi değil bir bilgi ağıydı: oraya gönderilen genç kâtipler dil öğrenip döndüklerinde devletin Avrupa’yı okuma biçimini değiştirdiler.',
  'ucuncu-selim-osym':
    'Bu dönemden akılda kalması gereken şudur: programın zaafı yapısaldı. Yeni ordunun ağırlığı taşrada tutuldu, başkent eski dengelere bırakıldı. Ayrı hazine ise geliri azalan herkesi aynı safta topladı. Çıkan ayaklanma bu yüzden yalnızca askerî değil, geniş bir çıkar koalisyonunun tepkisiydi.',
  'ucuncu-selim-gecis':
    'Program dağıtıldı, padişah tahtından indirildi. Ama fikir yaşadı. Sonraki kuşak bu deneyden çok net bir ders çıkaracaktı: yeniliği kurmadan önce, ona karşı çıkacak gücü etkisiz hâle getirmek gerekiyordu.',

  /* ————— Tasfiye Yılı ————— */
  'dorduncu-mustafa-kapi':
    'Bir yenilik programı ortadan kaldırıldığında geriye ne kalır? Önümüzdeki kısa saltanat, o boşluğun cevabıdır.',
  'dorduncu-mustafa-kunye':
    'Mustafa tahta bir ayaklanmayla geldi ve saltanatı yenilik üretmekten çok, öncekinin yaptıklarını geri çevirmekle tanımlandı.',
  'dorduncu-mustafa-olay-dorduncu-mustafa-1':
    'Yeni ordu dağıtıldı, ona ayrılan gelirler geri alındı, program kadrosu görevden uzaklaştırıldı, kimileri öldürüldü. Fakat yerine konan bir şey yoktu. Rusya ile savaş sürerken devlet, düşman karşısına çıkarabileceği en iyi eğitimli birliklerden kendi kararıyla mahrum kaldı.',
  'dorduncu-mustafa-karakter':
    'Bu dönemin asıl gösterdiği şey başka bir yerdeydi. Devlet uzun süredir taşrada güç kazanmış yerel hanedanları denetleyemiyordu. Bu aileler kendi vergilerini topluyor, kendi askerlerini besliyordu. Merkez savaş zamanı asker ve para için onlara muhtaçtı; bu muhtaçlık onları birer siyasi aktöre dönüştürdü.',
  'dorduncu-mustafa-osym':
    'Bu dönemden akılda kalması gereken şudur: bu güçlerden birinin, tahttan indirilmiş padişahı yeniden yerine oturtmak için askeriyle başkente yürümesi Osmanlı tarihinde alışılmış bir sahne değildi. Kimin padişah olacağı artık taşrada da tartışılabiliyordu.',
  'dorduncu-mustafa-gecis':
    'Girişim kanlı bitti; kurtarılabilen tek şehzade tahta çıktı. Bu genç padişah hem yenilik hem tasfiye tecrübesini aynı anda görmüştü. Bundan sonrasını çok daha sabırlı bir sırayla planlayacaktı.',

  /* ————— Merkez Yeniden Kuruluyor ————— */
  'ikinci-mahmud-kapi':
    'Bir devlet kendi kurumlarını yıkıp yeniden kurabilir mi? Önümüzdeki otuz bir yıl, Osmanlı’nın bu soruyu ilk kez baştan sona uyguladığı yıllardır.',
  'ikinci-mahmud-kunye':
    'Genç padişah kendisinden önceki iki denemenin nasıl bittiğini yakından görmüştü. Bu yüzden yaptığı ilk şey yenilik ilan etmek olmadı; önce sabretti. Bu saltanatın asıl fikri, yapılan işlerden çok yapılış sırasıdır.',
  'ikinci-mahmud-olay-ikinci-mahmud-1':
    'İlk yıllarda taşradaki güçlü ailelerle imzalanan Sened-i İttifak, merkezin ne kadar zayıfladığını açıkça gösterir: devlet kendi topraklarındaki yerel güçlerle pazarlık yapmak zorunda kalmıştır. Mahmud bu metni bir hedef değil geçici bir mecburiyet olarak gördü ve sonraki yıllarda o ailelerin gücünü tek tek kırdı.',
  'ikinci-mahmud-karakter':
    'On sekiz yıl boyunca kadrosunu yerleştirdi, ulemayı yanına çekti, topçu ocağını güçlendirdi. Yeniçerilerin kaldırılması bu hazırlığın sonucuydu. Ancak zamanlama acımasızdı: Yunan bağımsızlık hareketi sürüyor, Rusya savaşa hazırlanıyordu. Devlet ordusunu yeni baştan kurarken en ağır sınavlara girdi.',
  'ikinci-mahmud-osym':
    'Bu dönemden akılda kalması gereken şudur: asıl dönüşüm sessizce sürdü. Divan düzeninin yerini uzmanlaşmış nezaretler aldı, memurluk bir meslek hâline geldi. Posta teşkilatı, nüfus sayımı ve ilk resmî gazete devletin kendi ülkesini görmesini sağladı. Kavuk yerine fes, kaftan yerine ceket geldi.',
  'ikinci-mahmud-gecis':
    'En büyük tehdit beklenmedik yerden geldi: Mısır valisinin ordusu Konya’da Osmanlı ordusunu yenip Kütahya’ya kadar ilerledi. Padişah, imparatorluğunu kendi valisine karşı korumak için Rusya’dan yardım istemek zorunda kaldı. Otuz bir yılın sonunda imparatorluk küçülmüş, ama merkezî yönetim yüzyıllardır olmadığı kadar güçlenmişti.',


  /* ————— Tanzimat ————— */
  'abdulmecid-kapi':
    'Bu döneme kadar Osmanlı ıslahatı hep orduyla ilgiliydi. Önümüzdeki sahnede ilk kez devletin insanlarla kurduğu ilişki yeniden yazılıyor.',
  'abdulmecid-kunye':
    'Abdülmecid tahta on altı yaşında, ordusunun yeni yenildiği ve donanmasının elden çıktığı bir anda çıktı. Devraldığı devlet hem dışarıda hem içeride kendini yeniden tanımlamak zorundaydı.',
  'abdulmecid-olay-abdulmecid-1':
    'Gülhane bahçesinde okunan ferman, padişahın kendi yetkisini kendi rızasıyla sınırladığını söylüyordu. Can ve mal güvenliği, verginin gelire göre ve kanunla alınması, yargılanmadan kimseye ceza verilmemesi, askerliğin belirli bir usule bağlanması. Bunlar bugün sıradan görünebilir; o gün için devletin tanımını değiştiren cümlelerdi.',
  'abdulmecid-karakter':
    'Bu ilkeleri uygulamak ilan etmekten çok daha zordu. Yeni mahkemeler, vilayet meclisleri ve vergi daireleri kuruldu; ceza ve ticaret kanunları uyarlandı. Aynı yıllarda kâğıt para denemesi yapıldı, telgraf hatları döşendi, ilk demiryolu inşa edildi. Yine de merkezin taşrada ne kadar hüküm sürdüğü uzun süre tartışmalı kaldı.',
  'abdulmecid-osym':
    'Bu dönemden akılda kalması gereken şudur: Kırım Savaşı Osmanlı’yı ilk kez Avrupa devletlerinin yanında bir müttefik olarak sahaya çıkardı ve Paris’te Avrupa devletler ailesinin üyesi sayıldı. Ama aynı savaş iki kalıcı sonuç bıraktı: tarihte ilk kez dışarıdan borç alındı ve müttefiklerin iç düzenlemelerle ilgili beklentileri arttı.',
  'abdulmecid-gecis':
    'Savaş sonrasında ilan edilen ikinci ferman gayrimüslim tebaanın haklarını genişletiyordu. İçeriği önceki ilkelerin devamıydı; fakat müttefiklerin beklentileriyle aynı döneme denk gelmesi, geniş kesimlerde dışarıdan dayatma olarak okundu. Bu algı sonraki siyasi tartışmaların önemli bir kaynağı oldu.',

  /* ————— Borçla Kalkınma ————— */
  'abdulaziz-kapi':
    'Modernleşme parayla olur. Peki o para yoksa? Önümüzdeki sahne, borçla kalkınmayı deneyen bir imparatorluğun hikâyesidir.',
  'abdulaziz-kunye':
    'Abdülaziz, ağabeyinin başlattığı reform çizgisini devraldı ve hızlandırdı. Yatırımlar gerçekti ve gerekliydi: demiryolu hatları, limanlar, telgraf ağı, yeni okullar. Donanmaya özel bir önem verildi; alınan zırhlılarla Osmanlı filosu kısa sürede dünyanın en büyükleri arasına girdi.',
  'abdulaziz-olay-abdulaziz-1':
    'Padişahın barış zamanında Avrupa’yı ziyaret etmesi, iki yüzyıl önce düşünülemeyecek bir sahneydi. Paris’teki dünya sergisini gezdi, Londra’da kraliçe tarafından karşılandı, Viyana’ya uğradı. Osmanlı artık yalnızca elçi göndermiyor, hükümdarı bizzat gidip görüyordu.',
  'abdulaziz-karakter':
    'Ancak borçlar üretken yatırımlara olduğu kadar cari harcamalara ve donanmaya gitti; gelirler borç servisinden daha yavaş büyüdü. Anadolu’daki kuraklık ve kıtlık yılları dünya piyasalarındaki daralmayla üst üste gelince devlet ödemelerini sürdüremeyeceğini açıkladı.',
  'abdulaziz-osym':
    'Bu dönemden akılda kalması gereken şudur: bir önceki kuşağın açtığı okullar, Avrupa’yı okuyan ve devletin nasıl yönetilmesi gerektiği hakkında fikri olan yeni bir aydın kuşağı yetiştirmişti. Bu çevre, kurtuluşu hükümdarın iyi niyetinde değil yazılı kurallarda arıyordu. Reform, kendi eleştirmenlerini üretmişti.',
  'abdulaziz-gecis':
    'Mali kriz, Balkanlardaki ayaklanmalar ve bu yeni siyasi talep birleştiğinde padişah bir grup devlet adamı tarafından tahttan indirildi; birkaç gün sonra ölü bulundu ve ölümünün nasıl gerçekleştiği bugün de tartışılır. Tartışma artık ıslahatın yapılıp yapılmayacağı değil, devletin bir anayasayla yönetilip yönetilmeyeceğiydi.',

  /* ————— Doksan Üç Gün ————— */
  'besinci-murad-kapi':
    'Üç aydan kısa süren bir saltanat, koca bir imparatorluk hakkında ne anlatabilir? Önümüzdeki sahnede beklenenden çoğunu.',
  'besinci-murad-kunye':
    'Murad, şehzadeliğinde Avrupa gezisine katılmış, Fransızca öğrenmiş, yeni fikirlere açık biri olarak tanınıyordu. Tahta çıkışı sıradan bir veraset değildi: onu getiren çevre, devletin bir anayasayla yönetilmesini isteyen ve bunu imzalayacak bir hükümdar arayan kadrolardı.',
  'besinci-murad-olay-besinci-murad-1':
    'Yani taht ilk kez açıkça bir siyasi programın aracı olarak görülüyordu. Hanedan içinde tahta kimin geçeceği hâlâ kurala bağlıydı; ama o tahtın ne işe yarayacağı artık tartışmalıydı.',
  'besinci-murad-karakter':
    'Yeni padişah üzerine yüklenen beklentiyi taşıyamadı. Amcasının tahttan indirilmesi ve birkaç gün sonra ölü bulunması, ardından yaşanan silahlı baskın onu derinden sarstı. Kaynaklar ağır bir ruhsal çöküntüden söz eder; bugünün tarihçileri bu tasvirleri temkinli okur, çünkü aynı kayıtlar taht değişikliğini haklı göstermek isteyen çevrelerin bakışını da taşır.',
  'besinci-murad-osym':
    'Bu dönemden akılda kalması gereken şudur: devletin en tepesindeki makam birkaç ay içinde iki kez el değiştirdi ve bu değişimleri yapan hanedan değil, bürokrasi ve ordu içindeki bir gruptu. Devlet artık kendi hükümdarını görevini yapabilirlik ölçütüyle değerlendiriyordu.',
  'besinci-murad-gecis':
    'Tahttan indirilen padişah ömrünün kalan yirmi sekiz yılını gözetim altında geçirdi. Padişahlık artık tek başına bir iktidar değil, üzerinde pazarlık yapılan bir kurumdu. Sıradaki hükümdar verdiği sözü tutacak; ama bunu kendi şartlarıyla yapacaktı.',

  /* ————— Merkezileşme ve Okullar ————— */
  'ikinci-abdulhamid-kapi':
    'Küçülen, borçlu ve her sınırında baskı altındaki bir imparatorluk nasıl ayakta tutulur? Önümüzdeki otuz üç yılın bütün tartışması, bu soruya verilen cevabın etrafında döner.',
  'ikinci-abdulhamid-kunye':
    'Abdülhamid tahta, anayasayı ilan edeceğine söz vererek çıktı ve sözünü tuttu: Kanun-ı Esasi ilan edildi, meclise imparatorluğun her yerinden farklı din ve dillerden mebuslar geldi. Osmanlı tarihinde bir ilkti. Ancak bu deneme uzun sürmedi.',
  'ikinci-abdulhamid-olay-ikinci-abdulhamid-1':
    'Rusya ile çıkan savaş her şeyi belirledi. Ordular hem Balkanlarda hem Kafkasya’da çöktü; Plevne’deki aylarca süren direniş gidişatı değiştirmedi ve Rus kuvvetleri Yeşilköy’e kadar geldi. Sırbistan, Karadağ ve Romanya bağımsız oldu, Bulgaristan fiilen ayrıldı, Kıbrıs İngiltere’ye bırakıldı. Aynı savaş büyük bir göç dalgası başlattı; nüfus yapısı kalıcı biçimde değişti.',
  'ikinci-abdulhamid-karakter':
    'Bunun ardından padişah meclisi süresiz tatil etti ve yönetimi saraya topladı. Tercih ettiği yol açıktı: büyük savaşlardan uzak durmak, güçler arasındaki rekabeti kullanarak zaman kazanmak ve elde kalan toprakları birbirine bağlamak. Bu strateji hem eleştirildi hem savunuldu; tarih yazımında hâlâ üzerinde uzlaşılmış bir hüküm yoktur.',
  'ikinci-abdulhamid-osym':
    'Bu dönemden akılda kalması gereken somut sonuçlar şunlardır: telgraf hatları ve Hicaz Demiryolu en uzak vilayetleri merkeze bağladı, orta ve yüksek okullar taşraya yayıldı. Öte yandan Düyun-ı Umumiye idaresi devletin bazı gelirlerini alacaklıların denetimine bıraktı ve basın sıkı bir sansüre tabi tutuldu.',
  'ikinci-abdulhamid-gecis':
    'Ve burada tarihin çarpıcı bir ironisi vardır: bu okullarda yetişen subaylar ve memurlar, anayasanın geri getirilmesini isteyen hareketin kadrosu oldu. Meclis yeniden açıldığında imparatorluk bambaşka bir siyasi çağa giriyordu.',

  /* ————— Sembolik Taht, Büyük Savaşlar ————— */
  'besinci-mehmed-kapi':
    'Bir padişahın yetkileri sınırlıyken imparatorluğun en yıkıcı on yılı yaşanırsa, tarih o dönemi kimin üzerine yazar? Önümüzdeki saltanat böyle bir sorunun içinde geçecek.',
  'besinci-mehmed-kunye':
    'Reşad altmış beş yaşında ve otuz yılını gözetim altında geçirmiş olarak tahta çıktı. Meşrutiyet düzeninde kararlar artık sarayda değil, hükümette ve mecliste alınıyordu; fiilî iktidar ise giderek tek bir siyasi hareketin elinde toplandı. Bu, Osmanlı tarihinde hükümdarın günlük siyasetin dışında kaldığı ilk uzun dönemdir.',
  'besinci-mehmed-olay-besinci-mehmed-1':
    'İtalya’nın Trablusgarp’a çıkması, deniz gücü olmayan bir imparatorluğun uzak eyaletlerini savunamayacağını gösterdi. Osmanlı oraya düzenli ordu bile gönderemedi; direniş büyük ölçüde yerel halkla ve gizlice giden birkaç subayla yürütüldü. Kuzey Afrika’daki son toprak ve Oniki Ada elden çıktı.',
  'besinci-mehmed-karakter':
    'Asıl sarsıntı hemen ardından Balkanlarda yaşandı. Osmanlı Devleti Avrupa’da doğmuş, ilk başkentlerini orada kurmuş, yönetici kadrosunun önemli bir bölümünü oradan çıkarmıştı. Birkaç ay içinde bu toprakların neredeyse tamamı kaybedildi ve yüz binlerce insan doğuya göç etti. Haritada bir bölgenin renginin değişmesi, aslında bir devletin kendini tanımladığı coğrafyayı yitirmesiydi.',
  'besinci-mehmed-osym':
    'Bu dönemden akılda kalması gereken şudur: iki yıl sonra imparatorluk kıtayı saran büyük savaşa girdi. Çanakkale’den Kafkasya’ya, Filistin’den Irak’a uzanan, birbirinden yüzlerce kilometre uzak cephelerde ve yetersiz demiryoluyla savaşıldı. Çanakkale’de deniz ve kara harekâtı durduruldu; başka cephelerde ağır kayıplar verildi.',
  'besinci-mehmed-gecis':
    'Padişah savaşın sonunu görmeden öldü. Devraldığından çok daha küçük ve savaşın ortasında bir ülke bıraktı. Geride kalan meseleler artık bir hanedanın değil, bir ülkenin geleceğiyle ilgiliydi.',

  /* ————— Son Perde ————— */
  'altinci-mehmed-kapi':
    'Altı yüz yıllık bir devlet nasıl sona erer? Önümüzdeki son sahnenin cevabı tek bir savaş meydanı değil, aynı ülkede iki ayrı iktidarın ortaya çıkışıdır.',
  'altinci-mehmed-kunye':
    'Vahdeddin tahta savaşın son aylarında, ellili yaşlarında çıktı. Devraldığı devletin orduları dağılmak üzereydi ve başkenti kısa süre sonra işgal edilecekti.',
  'altinci-mehmed-olay-altinci-mehmed-1':
    'Limni adasında imzalanan ateşkes yalnızca çarpışmaları durdurmuyordu; orduların terhisini, silahların teslimini ve gerektiğinde herhangi bir stratejik noktanın işgalini mümkün kılan bir madde içeriyordu. Bu madde sayesinde kısa süre içinde İstanbul dâhil pek çok bölge fiilen denetim altına girdi; İzmir’in işgali ise geniş bir tepkiyi ateşledi.',
  'altinci-mehmed-karakter':
    'Bu koşullarda başkentteki hükümetlerin hareket alanı çok dardı; şehir işgal altındaydı ve meclis basılıp dağıtıldı. Anadolu’da ise işgallere karşı örgütlenen bir direniş doğdu, kongrelerle birleşti ve Ankara’da kendi meclisini kurdu. Ülkede aynı anda iki ayrı otorite ortaya çıktı.',
  'altinci-mehmed-osym':
    'Bu dönemden akılda kalması gereken şudur: Sevr antlaşması imzalandı ama yürürlüğe girmedi; çünkü artık onu uygulatacak bir güç kalmamıştı. Anadolu’daki hareketin kazandığı askerî sonuçlar, masadaki dengeyi tamamen değiştirdi. Padişahın bu süreçteki tercihleri hem kendi zamanında hem sonrasında yoğun biçimde tartışıldı ve bu tartışma bugün de sürüyor.',

  /* ————————————————— 7 · FATİH SULTAN MEHMED ————————————————— */
  'fatih-sultan-mehmed-kapi':
    'Tek bir şehir, bir devletin kaderini bu kadar belirleyebilir mi? Önümüzdeki sahnenin cevabı açıktır. Osmanlı toprakları uzun süredir tuhaf biçimde ikiye ayrılmıştı ve tam ortasında başka bir devletin başkenti duruyordu.',
  'fatih-sultan-mehmed-kunye':
    'Mehmed tahta ikinci kez çıkıyordu; ilk denemesinde çocuk yaşta olduğu için devlet adamları babasını geri çağırmıştı. Bu aşağılanmayı unutmadı. Yirmi bir yaşında tahta döndüğünde, çevresindeki tecrübeli kadroya kendini kabul ettirmek için elinde tek bir yol vardı: kimsenin başaramadığı şeyi yapmak.',
  'fatih-sultan-mehmed-olay-fatih-sultan-mehmed-1':
    'Hazırlık iki yıl sürdü. Boğazın en dar yerine yapılan hisarla kuzeyden gelecek yardım kesildi; Urban adlı Macar ustanın döktüğü toplar surları yıkabilecek ilk ciddi ateş gücüydü. Savunanlar Haliç’in girişine zincir gerdi, Osmanlı gemileri karadan kızaklarla içeri indirildi. Cenevizli komutanın yaralanmasıyla savunma çözüldü ve son imparator çarpışmanın içinde kayboldu.',
  'fatih-sultan-mehmed-karakter':
    'Fetihten sonra yapılanlar hedefin ne kadar sistemli olduğunu gösterir. Sırbistan, Mora ve Bosna alındı; Karadeniz kıyısındaki ticaret kolonileri, Trabzon’daki Rum devleti ve Kırım Hanlığı tek tek düzene bağlandı. Doğuda Akkoyunlu hükümdarının Venedik’le kurduğu ittifak kırıldı. Karadeniz artık bir sınır değil, tek bir devletin denetlediği iç denizdi.',
  'fatih-sultan-mehmed-osym':
    'Bu dönemden akılda kalması gereken şudur: değişen sadece harita değildi. Hükümdar, beyleriyle aynı sofrada oturan bir uç lideri olmaktan çıkıp protokolün arkasına çekildi. Örfî hukuk yazıya geçirildi, komutan ve memur saray okullarında yetiştirilmeye başlandı. Kanunnamedeki hanedan içi rekabetle ilgili madde ise kendi zamanında da sonrasında da tartışıldı.',
  'fatih-sultan-mehmed-gecis':
    'Bu kadar hızlı bir dönüşümün bedeli maliyeydi. Kesintisiz sefer, büyük inşaatlar ve büyüyen merkez ordusu hazineyi zorladı; alınan mali tedbirler geniş bir hoşnutsuzluk bıraktı. Geriye üç kıtaya uzanmayı hedefleyen bir imparatorluğun kuralları kaldı — ve bu hızın sindirilip sindirilemeyeceği sorusu.',

  /* ————————————————— 8 · II. BAYEZİD ————————————————— */
  'ikinci-bayezid-kapi':
    'Bir devlet her zaman genişleyerek güçlenmez. Bazen kazandıklarını sindirmek için zamana ihtiyaç duyar. Önümüzdeki otuz bir yıl, Osmanlı’nın nefes aldığı ve sessizce başka bir alanda güçlendiği yıllardır.',
  'ikinci-bayezid-kunye':
    'Bayezid, babasının hızına yetişmeye çalışan değil, bıraktığı yükü taşımaya çalışan bir hükümdardı. Tahta çıkışı da kolay olmadı: kardeşiyle giriştiği mücadele sıradan bir taht kavgası olarak kalmadı ve yıllarca dış politikasını belirledi.',
  'ikinci-bayezid-olay-ikinci-bayezid-1':
    'Mücadeleyi kaybeden Cem önce Rodos şövalyelerine sığındı, oradan Fransa’ya, sonunda Roma’da papanın eline geçti. Osmanlı, serbest bırakılmaması için yıllarca yüklü bir yıllık ödeme yaptı. Böylece hanedanın iç sorunu, Avrupa’nın elinde tutulan bir baskı aracına dönüştü; batıya yönelik her hamlede bu ihtimal hesaba katıldı.',
  'ikinci-bayezid-karakter':
    'Bu dönemin asıl dönüşümü sessizce denizde yaşandı. Donanma, asker taşıyan bir nakliye gücü olmaktan çıkıp savaşabilen bir filoya dönüştü; Akdeniz’de yetişmiş kaptanlar devlet hizmetine alındı. Cem meselesi kapandıktan sonra Venedik’le girişilen mücadelede Mora’daki limanlar alındı. Osmanlı ilk kez denizde de karşılık verebiliyordu.',
  'ikinci-bayezid-osym':
    'Bu dönemden akılda kalması gereken iki şey var. Biri, İspanya’dan sürülen Yahudi cemaatlerinin Osmanlı şehirlerine yerleştirilmesi: hem insani hem ticari sonuçları olan bir tercihti. Diğeri, asıl tehdidin sınırda değil zihinlerde olmasıydı — doğuda yükselen yeni bir hanedan, Anadolu’daki tebaanın bir kısmına doğrudan hitap ediyordu.',
  'ikinci-bayezid-gecis':
    'Dönemin gerilimi yaşlanan padişahın tercihiyle değil, ona rağmen çözüldü. Oğulları arasındaki mücadeleyi kazanan Selim tahtı devraldı; Bayezid tahtını bırakıp yola çıktıktan kısa süre sonra öldü. Bekleyen sorun artık çok daha sert bir yöntemle ele alınacaktı.',

  /* ————————————————— 9 · YAVUZ SULTAN SELİM ————————————————— */
  'yavuz-sultan-selim-kapi':
    'Sekiz yıl, bir imparatorluğun ağırlık merkezini değiştirmeye yeter mi? Önümüzdeki sahnede Osmanlı, Balkanlar ve Anadolu’ya dayanan bir güç olmaktan çıkıp Arap coğrafyasını da kapsayan bir imparatorluğa dönüşecek.',
  'yavuz-sultan-selim-kunye':
    'Selim tahta, babasının rızasıyla değil kendi ısrarıyla geldi. Devraldığı en acil mesele ise bir sınır sorunu değildi: doğuda kurulan Safevî Devleti hem siyasi hem dinî bir iddia taşıyordu ve Anadolu’daki Türkmen nüfusun bir bölümüne ulaşabiliyordu. Bir cephe savaşından önce bir sadakat savaşı vardı.',
  'yavuz-sultan-selim-olay-yavuz-sultan-selim-1':
    'İki ordu Çaldıran ovasında karşılaştı. Belirleyici olan asker sayısı değil teçhizattı: Safevî süvarisi ateşli silahı küçümserken Osmanlı, topu ve tüfekli yeniçeriyi zincirlenmiş arabaların arkasına yerleştirmişti. Tebriz’e girildi ama şehir elde tutulamadı. Kazanılan üstünlük Anadolu üzerindeki hâkimiyeti tartışmaya kapadı; rakip devlet ise ortadan kalkmadı.',
  'yavuz-sultan-selim-karakter':
    'Asıl büyük değişim güneyde yaşandı. Ard arda kazanılan iki savaşla bölgenin köklü devleti tarihe karıştı ve sınırlar Suriye üzerinden Nil vadisine, oradan Kızıldeniz kıyılarına uzandı. Devletin nüfusu, geliri ve dinî konumu aynı anda değişti. Nüfusun büyük bölümü artık farklı dil ve geleneklerden geliyordu.',
  'yavuz-sultan-selim-osym':
    'Bu dönemden akılda kalması gereken şudur: kazanılan yalnızca toprak değil, ticaret yollarının düğüm noktalarıydı. Doğudan gelen baharat yolları artık tek bir yönetimin elindeydi. Mekke ve Medine’nin korunma sorumluluğu da bu dönemde Osmanlı’ya geçti; halifeliğin nasıl ve ne zaman devredildiği ise kaynaklarda tartışmalıdır.',
  'yavuz-sultan-selim-gecis':
    'Kısa ama yoğun bir saltanattı. Sekiz yılda imparatorluğun yüzü değişti. Ama bu kadar farklı coğrafyayı yönetecek hukuku ve düzeni kurmak, kendisinden sonrakinin işi olacaktı.',

  /* ————————————————— 10 · KANUNİ SULTAN SÜLEYMAN ————————————————— */
  'kanuni-sultan-suleyman-kapi':
    'Bir dönemi zirve yapan şey nedir: kazanılan savaşlar mı, geride bırakılan düzen mi? Önümüzdeki kırk altı yıl ikisini aynı anda temsil eder.',
  'kanuni-sultan-suleyman-kunye':
    'Süleyman, babasından çok büyümüş ama henüz tek bir hukuk ve maliye diliyle konuşmayan bir devlet devraldı. Dönemin en kalıcı işi savaşlar değil, Balkanlardan Mısır’a uzanan bu farklı bölgeleri ortak kurallara bağlamak oldu.',
  'kanuni-sultan-suleyman-olay-kanuni-sultan-suleyman-1':
    'Tahta çıkışının hemen ardından alınan Belgrad, Orta Avrupa’ya açılan kapıydı. Ardından Rodos alındı ve Doğu Akdeniz’deki son büyük engel kalktı. Bu iki hamle bir tesadüf değil, bir yol haritasıydı: önce kapılar, sonra ülkeler.',
  'kanuni-sultan-suleyman-karakter':
    'Batıdaki seferlerin mantığı çoğu zaman toprak almak değil denge kurmaktı. Mohaç ovasında Macar ordusu birkaç saat içinde dağıldı ve Macaristan’ın kimin olacağı sorusu Osmanlı’yı Habsburg hanedanıyla doğrudan karşı karşıya getirdi. Denizde ise Cezayir’de yetişen Barbaros Hayreddin’in devlet hizmetine girmesiyle Akdeniz uzun süre Osmanlı’nın etki alanında kaldı.',
  'kanuni-sultan-suleyman-osym':
    'Bu dönemden akılda kalması gereken şudur: aynı yıllar, sınırların ulaşabileceği mesafenin de görüldüğü yıllardır. Ordunun sefere çıkıp aynı mevsimde geri dönebileceği süre sınırlıydı; ne Orta Avrupa’da ne de İran’da belli bir hattın ötesine kalıcı olarak geçilebildi. İmparatorluk coğrafi sınırlarına yaklaşmıştı.',
  'kanuni-sultan-suleyman-gecis':
    'Uzun saltanatın sonunda geriye Mimar Sinan’ın eserleriyle biçimlenmiş bir mimari, oturmuş bir hukuk ve örnek alınan bir ordu kaldı. Ama saltanat, oğlunun ordugâhta idam edilmesi ve ardından gelen taht mücadelesiyle de gölgelendi. Bu düzen, kendisini var eden koşullar değiştiğinde ne yapacağını henüz bilmiyordu.',

  /* ————————————————— 2 · ORHAN GAZİ ————————————————— */
  'orhan-gazi-kapi':
    'Bir beylik ne zaman devlet olur? Toprak büyüdüğünde değil; iktidar tek bir insanın kişiliğine bağlı olmaktan çıktığında. Önümüzdeki otuz sekiz yıl, tam olarak o dönüşümün yıllarıdır.',
  'orhan-gazi-kunye':
    'Orhan, babasından bir sınır beyliği devraldı ama onu bir daha aynı şekilde bırakmadı. Kardeşi Alâeddin ile taht kavgasına girmedi; rivayete göre iş bölümü yaptılar. Osmanlı’nın ilk yüzyılındaki en büyük şansı buydu: taht kavgasız el değiştirdi ve enerji içeriye değil dışarıya harcandı.',
  'orhan-gazi-olay-bursa-baskent':
    'Babasının yıllarca kuşattığı şehir nihayet teslim oldu. Alınması kadar önemlisi, ne yapıldığıydı: burası artık bir üs değil, başkent oldu. Devletin kalbi dağlık Söğüt’ten ovadaki büyük bir şehre taşındı. Bir beyliğin şehri fethetmesi ayrı şeydir, o şehri yönetim merkezi hâline getirebilmesi ayrı.',
  'orhan-gazi-olay-iznik':
    'Alınan şehirde yapılan ilk iş bir okul açmaktı. Buradaki medreseye davet edilen Davud-i Kayserî, devletin ilk müderrisi oldu. Bu ayrıntı görünenden büyüktür: bir beylik artık yalnızca asker değil, kadı ve kâtip de yetiştirmeye başlamıştır. Fethedilen yer, ancak kendi yöneticisini üretebildiğinde elde tutulur.',
  'orhan-gazi-olay-karesi':
    'Batıdaki komşu beyliğin Osmanlı’ya katılması beklenmedik bir kapı açtı. Gelen yalnızca toprak değildi: gemiler ve denizi bilen komutanlar da geldi. O güne kadar karada ilerleyen bir beylik, ilk kez karşı kıyıya bakabilecek imkâna kavuştu.',
  'orhan-gazi-olay-cimpe':
    'Karşıya geçiş bir istila olarak başlamadı. Bizans’ın kendi iç taht kavgasında müttefik sıfatıyla gidildi ve bir kale üs olarak alındı. Ama bir kez tutunulan yer bırakılmadı. Kalıcılığı sağlayan da asker değil, aileleriyle birlikte karşıya taşınan yerleşimcilerdi: bir bölge yağmalandığında değil, ekilip iskân edildiğinde yurt hâline gelir.',
  'orhan-gazi-karakter':
    'Bu dönemi tanımlayan şey kurumlardır. Anlaşmazlıkları artık beyin kendisi değil, onun bile uymak zorunda olduğu kurallara göre karar veren bir kadı çözüyor. Basılan gümüş para hükümdarın adını en uzak pazara taşıyor. Bir divan, kararları o odadan çıkıldıktan sonra da yaşatıyor. Ve sefer zamanı toplanıp dağılan gönüllüler yerine, geçimi devletçe karşılanan hazır birlikler duruyor.',
  'orhan-gazi-osym':
    'Bu dönemden akılda kalması gereken tek bir cümle varsa şudur: burası ilklerin dönemidir. İlk başkent, ilk düzenli ordu, ilk medrese, ilk gümüş para, ilk divan. Hepsi aynı mantığın parçasıdır — bir beylik, kendi kurumlarını kurarak devlet olur.',
  'orhan-gazi-gecis':
    'Orhan Gazi öldüğünde elde kaleden fazlası vardı: başkenti, parası, ordusu, mahkemesi ve okulu olan bir düzen. Ama karşı kıyıda tutunulan yer henüz dar bir köprübaşıydı. Sıradaki soru, bu düzenin Avrupa toprağında ne kadar derine kök salabileceğiydi.',

  /* ————————————————— 3 · I. MURAD ————————————————— */
  'birinci-murad-kapi':
    'Bir devletin ağırlık merkezi yer değiştirebilir mi? Önümüzdeki yirmi yedi yılda Osmanlı, Anadolu’dan Avrupa’ya bakan bir beylik olmaktan çıkıp Avrupa’da kurulmuş, Anadolu’ya yaslanan bir güce dönüşecek.',
  'birinci-murad-kunye':
    'Murad tahta çıktığında elinde karşı kıyıda dar bir şerit vardı. Otuz yıl sonra devletin başkenti orada olacaktı. Onu seleflerinden ayıran şey cesaret değil yöntemdi: aynı anda iki farklı siyaset yürütmeyi bildi ve bunu bilinçli yaptı.',
  'birinci-murad-olay-edirne':
    'Başkentin karşı kıyıya taşınması, bu dönemin en sessiz ama en belirleyici kararıdır. Devletin kalbi artık ordunun gideceği yere en yakın noktadaydı. Bir devletin başkentini nereye koyduğu, önümüzdeki yüzyılda nereye bakacağını söyler.',
  'birinci-murad-olay-kapikulu':
    'Hükümdarın, yerel bir beye değil yalnızca kendisine bağlı askerlere ihtiyacı vardı. Savaş esirlerinden başlayan, sonra devşirme usulüyle süren bir düzenle merkeze bağlı daimî bir ordu kuruldu. Bu birlikler toprak sahibi değildi, maaşlıydı ve tek bir kişiye bağlıydı. Osmanlı’nın merkezî gücünün kaynağı budur.',
  'birinci-murad-olay-sirpsindigi':
    'Balkanlardaki ilerleyiş, bölge devletlerini ilk kez birlikte hareket etmeye zorladı. Fakat toplanan kuvvet baskına uğradı ve dağıldı. Osmanlı’nın buradaki üstünlüğü sayıdan çok hızdan ve istihbarattan geliyordu; karşısındaki krallıklar ise birbirleriyle de hesaplaşıyordu.',
  'birinci-murad-olay-cirmen':
    'Meriç boyunda kazanılan bu mücadeleyle Makedonya yolu açıldı ve Bulgar Krallığı Osmanlı’ya bağlandı. Bağlanmak yok olmak demek değildi: yerel bey yerinde kaldı, vergi verdi, sefere asker gönderdi. Osmanlı ilerlemesini hızlandıran sessiz sebep budur — direnmenin maliyeti, uzlaşmanın maliyetinden yüksekti.',
  'birinci-murad-karakter':
    'Dikkat çekici olan, iki yönde iki ayrı yöntem izlenmesidir. Batıda topraklar savaşla alınırken, doğuda büyüme neredeyse hiç kılıçla olmadı: evlilik, çeyiz ve satın alma tercih edildi. Çünkü Anadolu beylikleri de Müslümandı ve onlarla savaşmak, Osmanlı’nın uç beyi olarak taşıdığı meşruiyeti zedelerdi. Haritada aynı anda büyüyen iki bölge, aslında iki ayrı siyasetin ürünüdür.',
  'birinci-murad-osym':
    'Bu dönemden akılda kalması gereken şudur: hazinede askeri peşin parayla besleyecek kaynak yoktu. Bunun yerine toprağın vergi geliri doğrudan askere bırakıldı; mülkiyet devlette kaldı, gelir hizmet karşılığı verildi. Osmanlı’yı yüzyıllarca ayakta tutan askerî ve mali denge bu basit fikirden doğdu.',
  'birinci-murad-gecis':
    'Dönem, kazanılan büyük bir meydan savaşının hemen ardından hükümdarın savaş alanında öldürülmesiyle kapandı. Yine de ordu dağılmadı, taht sorunsuz devredildi. Belki de dönemin en önemli sonucu budur: devlet artık kurucusunun ömrüne bağlı değildi.',

  /* ————————————————— 5 · ÇELEBİ MEHMED ————————————————— */
  'celebi-mehmed-kapi':
    'Bir devlet, hükümdarını kaybettikten ve toprakları oğulları arasında paylaşıldıktan sonra nasıl yeniden bir araya gelir? Bu sahnenin konusu fetih değil, dağılmış bir siyasi yapının yeniden kurulmasıdır.',
  'celebi-mehmed-kunye':
    'Mehmed, dört kardeşten biriydi ve en güçlüsü değildi. Rumeli’yi Süleyman, sonra Musa tuttu; o Anadolu’da bekledi. On bir yıl süren mücadeleyi kazanması sabrının ve uç beyleriyle kurduğu ilişkinin sonucudur. Devraldığı miras yıkılmış değil, dağılmıştı.',
  'celebi-mehmed-olay-celebi-mehmed-1':
    'Bu yıllarda dikkat çekici olan şudur: hanedanın yerini alacak başka bir aile çıkmadı. Bizans imparatoru kavgada taraf tutarak kimin güçleneceğine karar vermeye çalıştı, Rumeli’deki uç beyleri desteklerini kâh birinden kâh diğerinden yana kullandı. Ama kimse Osmanlı hanedanının kendisini tartışmaya açmadı. Devlet bu yüzden yeniden kurulabildi.',
  'celebi-mehmed-karakter':
    'Bu dönemde harita neredeyse hiç büyümez ve bu bir başarısızlık değil, bilinçli bir tercihtir. Öncelik hazineyi, tımar kayıtlarını ve askerî düzeni yeniden işler hâle getirmekti. Komşularla gereksiz çatışmadan kaçınıldı, beyliklerle antlaşma savaşa tercih edildi. Devlet toparlanana kadar zaman kazanmak, toprak kazanmaktan değerliydi.',
  'celebi-mehmed-osym':
    'Bu dönemden akılda kalması gereken şudur: kargaşanın izleri toprakta değil insanlarda kalır. Vergi düzeni bozulmuş, tımarlar sahip değiştirmiş, merkeze güven sarsılmıştı. Şeyh Bedreddin’in çevresinde toplanan hareket bu boşlukta doğdu ve yalnızca bir inanç meselesi değildi; toprak ve adalet talebiyle iç içeydi.',
  'celebi-mehmed-gecis':
    'Kısa bir saltanattı ve büyük zaferlerle anılmaz. Yine de kendisinden sonra gelen padişahın artık savunmayı değil yeniden genişlemeyi düşünebilmesi, bu yılların eseridir. Devlet ikinci kez kurulmuştu.',

  /* ————————————————— 6 · II. MURAD ————————————————— */
  'ikinci-murad-kapi':
    'Osmanlı’nın Avrupa’daki varlığı kalıcı mıydı, yoksa geri çevrilebilir bir işgal miydi? Önümüzdeki otuz yıl, bu sorunun cevabının verildiği yıllardır.',
  'ikinci-murad-kunye':
    'Murad tahta on yedi yaşında çıktı ve hükümdarlığının ilk dersini hemen aldı: bir Osmanlı padişahının en tehlikeli rakibi, kendi hanedanından çıkabilirdi. Sonraki yıllarda kazanabileceği savaşları bile pazarlıkla bitirmeyi, sınırları antlaşmayla sabitlemeyi tercih edecekti.',
  'ikinci-murad-olay-ikinci-murad-1':
    'Yıldırım Bayezid’in oğlu olduğunu söyleyen bir taht iddiacısı, Bizans’ın desteğiyle Rumeli’de ayaklandı. Bu iddiaları beslemek komşular için ucuz bir yöntemdi: Osmanlı ailesini içeriden bölmek, orduyla karşısına çıkmaktan çok daha az maliyetliydi. İsyan bastırıldı, ama yöntem unutulmadı.',
  'ikinci-murad-karakter':
    'Bu dönemin karakteri ölçülü olmaktır. Sırp despotluğu ve Eflak gibi bölgeler doğrudan yönetilmek yerine vergi ve asker veren bağlı prenslikler hâlinde bırakıldı: gücü her yere yaymak yerine ucuz ve kalıcı biçimde kullanmak. Sonra çağdaşlarını şaşırtan bir şey yaptı ve tahtı henüz on iki yaşındaki oğluna bırakıp Manisa’ya çekildi. Kaynaklar bu kararın nedeni konusunda birleşmez.',
  'ikinci-murad-osym':
    'Bu dönemden akılda kalması gereken şudur: Varna ve ardından Kosova’da verilen mücadeleler haritada büyük bir değişiklik yaratmadı. Değiştirdikleri şey daha önemliydi — Balkanlardaki Osmanlı varlığı artık tartışılan değil, kabul edilmesi gereken bir gerçekti. Avrupa uzun süre saldırıyı bırakıp savunmayı düşündü.',
  'ikinci-murad-gecis':
    'Öldüğünde geride kalan yalnızca sınırlar değildi. Dolu bir hazine, savaş görmüş bir ordu ve artık savunmayı değil çok daha büyük bir teşebbüsü düşünebilecek bir devlet vardı. O teşebbüsü, bir kez tahttan indirilmiş olan oğlu yapacaktı.',

  /* ————————————————— 4 · YILDIRIM BAYEZİD ————————————————— */
  'yildirim-bayezid-kapi':
    'Bir devletin imparatorluğa en çok yaklaştığı yıllarla, yok olmanın eşiğine geldiği yıllar aynı hükümdarın dönemine sığabilir mi? Önümüzdeki on üç yıl, Osmanlı’nın hem en hızlı büyüdüğü hem de en sert biçimde durdurulduğu yıllardır.',

  'yildirim-bayezid-kunye':
    'Bayezid tahtı Kosova ovasında, babasının cenazesi daha kaldırılmadan devraldı. Devraldığı devlet artık sınır boylarında akın yapan bir beylik değildi. Ama Balkanlardaki üstünlüğü henüz kalıcı değildi ve arkasında, Germiyan’dan Karaman’a uzanan, kendisiyle boy ölçüşebilecek beyliklerden oluşan parçalı bir Anadolu duruyordu. Lakabı boşuna verilmedi: ordusunu beklenmedik bir hızla bir uçtan öbürüne taşıyordu.',

  'yildirim-bayezid-olay-yildirim-bayezid-1':
    'Selefleri Anadolu’da çoğunlukla bağlılık yemini, evlilik ve satın almayla yetinmişti. Bayezid doğrudan ilhakı seçti. Aydın, Saruhan, Menteşe ve Germiyan toprakları kısa sürede yönetime katıldı, Karamanoğulları’nın merkezi Konya’ya kadar ilerlendi. Amaç yalnızca toprak değildi: batıdaki gücün arkasında tek merkezden yönetilen bütünlüklü bir üs kurmaktı. Bu ona büyük bir askerî kaynak kazandırdı; ve ileride ödeyeceği faturayı da hazırladı.',

  'yildirim-bayezid-karakter':
    'Bu dönemin karakteri hızdır. Batıda Tuna boyuna kadar ilerlendi, Avrupa’nın birçok ülkesinden gelen şövalyelerden oluşan ordu geri püskürtüldü. Konstantinopolis yıllarca abluka altında tutuldu; surları aşacak topçu gücü olmadığı için şehir alınmak yerine boğulmaya çalışıldı. Aynı anda doğuda ilhaklar sürdü. Bir hükümdarın iki cepheyi birden yönetebileceği varsayımı, bu dönemde sınandı.',

  'yildirim-bayezid-osym':
    'Bu dönemden akılda kalması gereken şudur: hızlı genişleme ile kalıcı hâkimiyet aynı şey değildir. Anadolu’da kurulan birlik bir savaşta dağıldı, Balkanlardaki topraklar ise yerinde kaldı. Aradaki fark, birinin ilhakla, diğerinin yerleşme, tımar ve uzlaşmayla kurulmuş olmasıdır.',

  'yildirim-bayezid-gecis':
    'Ülkelerini kaybeden Anadolu beyleri doğuya, Timur’un yanına sığınmıştı. İki ordu Ankara Ovası’nda karşılaştığında, Osmanlı saflarındaki eski beyliklerin sipahileri karşıda kendi beylerini görünce taraf değiştirdi. Bozgunun bu kadar ağır olmasının sebebi budur. Bundan sonraki on bir yıl boyunca Osmanlı’nın sorusu ne kadar büyüyeceği değil, var olmayı sürdürüp sürdüremeyeceği olacaktı.',
}

export default BELGESEL_ANLATIMLARI
