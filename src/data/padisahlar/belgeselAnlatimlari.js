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
