import { tarih, tartismaliTarih } from './tipler.js'
import { ANLATIMLAR } from './anlatimlar.js'

/**
 * OSMAN GAZİ (1299 – 1324/1326)
 * ==================================================================
 * Kapsam: MEB Tarih 10. sınıf "Beylikten Devlete Osmanlı Siyaseti"
 * ünitesi ile TYT/AYT Tarih "Osmanlı Devleti Kuruluş Dönemi".
 *
 * Kaynak ayrışması NOT edilerek yazıldı. Kuruluş dönemi Osmanlı
 * tarihinin en az belgeli kısmıdır: çağdaş kayıt yok denecek kadar
 * azdır, elimizdeki kronikler olaylardan yaklaşık yüz yıl sonra
 * yazılmıştır. Bu yüzden tarihlerin bir bölümü "rivayet"tir ve
 * burada kesinmiş gibi sunulmaz.
 */
const osmanGazi = {
  id: 'osman-gazi',
  order: 1,
  detaySeviyesi: 'tam',
  name: 'Osman Gazi',
  epithet: 'Osmanlı Devleti’nin Kurucusu',
  reignStart: tartismaliTarih(1299, '1299', 'Bağımsızlık için verilen 1299 tarihi sembolik bir kabuldür; çağdaş bir belgeye dayanmaz. Ders kitapları bu tarihi esas alır.'),
  reignEnd: tartismaliTarih(1324, '1324/1326', 'Ölüm yılı kaynaklarda 1324 ve 1326 olarak geçer. Bursa’nın fethini görüp görmediği bu ayrımla ilgilidir.'),
  birth: 'Yaklaşık 1258 (rivayet)',
  death: '1324/1326 · Söğüt yakınlarında; türbesi Bursa’dadır',
  father: 'Ertuğrul Gazi',
  mother: 'Kaynaklarda Halime Hatun olarak anılır; kesin bilgi yoktur',
  predecessor: 'Ertuğrul Gazi (Selçuklu’ya bağlı uç beyi)',
  successor: 'Orhan Gazi',
  dynastyPeriod: 'Kuruluş Dönemi',
  openingHeadline: 'Bir Beylik Doğuyor',
  summary:
    'Anadolu Selçuklu Devleti’nin dağıldığı, İlhanlı baskısının arttığı ve Anadolu’nun beyliklere bölündüğü bir yüzyılın sonunda; Söğüt–Domaniç çevresindeki küçük bir uç beyliği, Bizans’ın zayıfladığı sınırda genişleyerek altı yüzyıl sürecek bir devletin çekirdeğini kurdu.',
  capitals: ['Söğüt (uç merkezi)', 'Karacahisar', 'Yenişehir (yönetim merkezi)'],

  /* ————— Dönemin niteliği. Uydurma puan yok; her satır delilli. ————— */
  traits: [
    { field: 'askeri', level: 'belirgin', label: 'Uçta genişleme', evidence: 'Karacahisar, Bilecik, Yarhisar, İnegöl ve Yenişehir’in alınması; Koyunhisar’da Bizans kuvvetlerinin yenilmesi.' },
    { field: 'devletlesme', level: 'baslangic', label: 'Beylikten devlete geçiş', evidence: 'Karacahisar’da hutbe okutulması, Dursun Fakih’in kadı olarak görevlendirilmesi, Yenişehir’in yönetim merkezi yapılması.' },
    { field: 'diplomasi', level: 'belirgin', label: 'Tekfurlarla ilişki yönetimi', evidence: 'Harmankaya tekfuru Köse Mihal’in müttefik olarak kazanılması; bazı tekfurlarla ticaret ve pazar düzeni kurulması.' },
    { field: 'ekonomi', level: 'baslangic', label: 'Pazar ve ticaret düzeni', evidence: 'Ahi teşkilatıyla kurulan bağ, alınan yerlerde pazar vergisi düzenlemesi ve konar-göçer nüfusun yerleşik hayata yönlendirilmesi.' },
  ],

  keyEvents: [
    {
      id: 'ertugrul-sonrasi', title: 'Uç beyliğinin başına geçiş', date: tartismaliTarih(1281, '1281 civarı', 'Ertuğrul Gazi’nin ölüm yılı da kesin değildir.'),
      summary: 'Osman Bey, babası Ertuğrul Gazi’den sonra Söğüt–Domaniç çevresindeki uç beyliğinin başına geçti.',
      detail: 'Bu, bir tahta çıkış değildir. Osman Bey bir devletin değil, Anadolu Selçuklu Devleti’ne bağlı bir uç bölgesinin yönetimini devraldı. "Uç", devletin merkezinden uzak, düşman sınırına bakan bölgedir; savaşçı nüfusu çeker ve merkezin denetimi zayıftır. Osmanlı’nın büyümesini açıklayan ilk koşul budur.',
      significance: 'Devletin kuruluşu tek bir günde olmadı; bir uç beyliğinin kademe kademe bağımsızlaşmasıyla oldu.',
      osym: 'Osmanlı’nın kurulduğu coğrafyanın "uç" olması; merkezî denetimin zayıflığı ve Bizans sınırına komşuluk büyümenin temel nedenleri arasında sorulur.',
      mapFocus: 'sogut',
    },
    {
      id: 'bagimsizlik', title: 'Bağımsızlık ve ilk devlet işaretleri', date: tartismaliTarih(1299, '1299', 'Sembolik kabul tarihidir.'), eventType: 'major',
      summary: 'Anadolu Selçuklu Devleti’nin fiilen sona ermesiyle Osman Bey kendi adına hutbe okutup kadı tayin etti.',
      detail: 'Bağımsızlığın ölçütü bayrak değil, egemenlik işaretleridir: hutbe okutmak, kadı atamak, vergi toplamak, para bastırmak. Osman Bey döneminde bunlardan hutbe ve kadı tayini görülür. Karacahisar’ın alınmasının ardından burada hutbe okutulmuş, Dursun Fakih ilk kadı olarak görevlendirilmiştir.',
      result: 'Uç beyliği, hukuken de kendi adına karar veren bir siyasi yapıya dönüştü.',
      osym: 'Hutbe ve kadı tayini bağımsızlık göstergesidir. Sikke (para) konusunda kaynaklar ayrışır: MEB kaynaklarında ilk gümüş akçe Orhan Gazi dönemine bağlanır.',
      mapFocus: 'karacahisar',
    },
    {
      id: 'seyh-edebali', title: 'Şeyh Edebali ve Ahi desteği', date: tartismaliTarih(1290, '1290’lar', 'Kesin tarih verilemez.'),
      summary: 'Osman Bey, Ahi teşkilatının önde gelen ismi Şeyh Edebali ile akrabalık bağı kurdu.',
      detail: 'Ahilik, esnaf ve zanaatkârları düzenleyen; ahlak, üretim ve dayanışmayı birlikte örgütleyen bir yapıdır. Uç bölgelerde hem ekonomik hem toplumsal ağırlığı vardı. Osman Bey’in bu çevreyle kurduğu bağ, fethedilen yerlerin yalnızca askerî olarak alınmasını değil, iskân edilip üretime katılmasını sağladı.',
      significance: 'Osmanlı büyümesi yalnız kılıçla değil; iskân, esnaf düzeni ve toplumsal meşruiyetle açıklanır.',
      osym: 'Ahilik, Osmanlı’nın kuruluşunda ekonomik–toplumsal destek unsuru olarak sorulur.',
    },
    {
      id: 'kose-mihal', title: 'Köse Mihal’in Osmanlı safına geçmesi', date: tartismaliTarih(1305, '1300’ler başı', 'Katılımın kesin yılı bilinmez; kronikler farklı zamanlar verir.'),
      summary: 'Harmankaya tekfuru Köse Mihal, Osman Bey’in müttefiki oldu; sonradan Müslüman olarak Osmanlı hizmetine girdi.',
      detail: 'Bu, kuruluşun anlaşılması için kilit örnektir: Osmanlı ilerlemesi yalnızca "fetih" değil, yerel güçlerle uzlaşma ve onları sisteme katma sürecidir. Köse Mihal’in soyundan gelen Mihaloğulları, sonraki yüzyıllarda Rumeli akınlarının önde gelen ailelerinden biri olacaktır.',
      significance: 'İstimâlet (yerel halkı ve yöneticileri kazanma) politikasının ilk açık örneklerindendir.',
      osym: 'Osmanlı’ya katılan ilk Bizans tekfuru olarak Köse Mihal sorulur.',
    },
    {
      id: 'bursa-ablukasi', title: 'Bursa’nın kuşatma altına alınması', date: tarih(1317, '1317’den itibaren'),
      summary: 'Bursa doğrudan saldırıyla değil, çevresi alınıp yolları kesilerek yıllar süren bir abluka altına alındı.',
      detail: 'Osman Bey’in elinde surlu bir şehri zapt edecek kuşatma tekniği ve ağır silah yoktu. Bunun yerine şehrin çevresindeki kaleler alındı, ikmal yolları kesildi ve şehir teslim olmaya zorlandı. Bu yöntem, Osmanlı’nın erken dönem askerî sınırlarını da gösterir.',
      result: 'Bursa, Osman Bey’in son yıllarında teslim olma noktasına geldi; şehir 1326’da Orhan Bey tarafından alındı.',
      osym: 'Bursa’nın fethi Orhan Gazi dönemine yazılır; kuşatmayı başlatan Osman Bey’dir. Bu ayrım sık sorulur.',
      mapFocus: 'bursa',
    },
  ],

  battles: [
    {
      id: 'koyunhisar', title: 'Koyunhisar (Bafeus) Savaşı', date: tartismaliTarih(1302, '1302', 'Bizans kaynaklarında 1302 (Bafeus); Osmanlı kroniklerinde tarih ve yer adı farklı verilebilir.'),
      eventType: 'major',
      summary: 'Osmanlı ile Bizans arasındaki ilk büyük meydan savaşı; Osman Bey galip geldi.',
      sides: ['Osman Bey kuvvetleri', 'Bizans İmparatorluğu (İzmit’i korumakla görevli kuvvetler ve müttefik tekfurlar)'],
      cause: 'Osmanlı akınlarının İznik ve İzmit’in ikmal yollarını tehdit etmesi üzerine Bizans’ın bölgeye kuvvet göndermesi.',
      detail: 'Bizans, İznik yönündeki baskıyı kırmak için İzmit körfezinin güneyine bir kuvvet sevk etti. Osman Bey açık arazide karşılaştığı bu kuvveti mağlup etti. Savaşın en önemli sonucu toprak kazancı değil, ANLAM kazancıdır: Osmanlı artık Bizans tarafından "sınırdaki akıncı grubu" olarak değil, ordu gönderilmesi gereken bir siyasi güç olarak görülüyordu.',
      result: 'Bizans yenildi; İznik ve İzmit çevresindeki Bizans denetimi zayıfladı, bölgedeki Hristiyan nüfusun bir bölümü şehirlere ve İstanbul’a çekildi.',
      significance: 'Osmanlı’nın bölgesel bir güç olarak tanınmasının başlangıcı; Marmara’nın güney kıyısının önünün açılması.',
      osym: 'Osmanlı Devleti ile Bizans arasındaki İLK savaş olarak kabul edilir. "İlk"leri soran sorularda Koyunhisar–Bizans eşleşmesi klasiktir.',
      figures: ['osman-bey', 'kose-mihal'],
      mapFocus: 'koyunhisar',
      atlas: { year: 1302, eventId: 'koyunhisar-savasi', focus: 'marmara', label: 'Koyunhisar çevresini atlasta aç' },
    },
    {
      id: 'dinboz', title: 'Dinboz (Domaniç) çarpışmaları', date: tartismaliTarih(1287, '1280’ler sonu', 'Kronikler dışında doğrulayıcı kayıt yoktur; rivayet düzeyindedir.'),
      summary: 'İnegöl ve çevresindeki tekfurlarla yapılan erken dönem çarpışmalar.',
      sides: ['Osman Bey kuvvetleri', 'İnegöl ve Karacahisar tekfurları'],
      result: 'Bölgedeki tekfur direnci kırıldı, Karacahisar yolu açıldı.',
      detail: 'Bu erken çarpışmalar meydan savaşı değil, uç bölgeye özgü baskın ve karşı baskınlardır. Sınav açısından ayrıntısı değil, Osmanlı’nın ilk genişlemesinin yöntemi önemlidir: küçük kuvvetlerle, kalelerin çevresini ele geçirerek ilerleme.',
      osym: 'Ayrıntısı nadiren sorulur; erken genişlemenin "kale çevresini alma" yöntemi olarak bilinmesi yeterlidir.',
    },
  ],

  conquests: [
    { id: 'karacahisar', title: 'Karacahisar', date: tartismaliTarih(1288, '1288 (rivayet)', 'Yalnızca sonraki yüzyıllarda yazılmış kroniklere dayanır; çağdaş kayıt yoktur.'), from: 'Bizans tekfuru', summary: 'Beyliğin ilk önemli kale kazanımı; burada hutbe okutulup kadı tayin edildi.', effect: 'Hutbe ve kadı ile egemenlik işaretleri ilk kez görüldü.', osym: 'Bağımsızlık göstergeleriyle birlikte sorulur.', mapFocus: 'karacahisar' },
    { id: 'bilecik', title: 'Bilecik', date: tartismaliTarih(1299, '1299 civarı', 'Bilecik–Yarhisar–İnegöl harekâtı aynı yıllara yerleştirilir; kesin tarih verilemez.'), from: 'Bizans tekfuru', summary: 'Beyliğin hazine ve ailelerinin emanet edildiği kale ele geçirildi.', effect: 'Söğüt–Yenişehir hattının güvenliği sağlandı.', mapFocus: 'bilecik' },
    { id: 'yarhisar', title: 'Yarhisar', date: tartismaliTarih(1299, '1299 civarı', 'Bilecik ile aynı harekâtın parçasıdır; ayrı bir tarih verilemez.'), from: 'Bizans tekfuru', summary: 'Bilecik ile aynı harekât içinde alındı.', effect: 'İznik yolu üzerindeki tekfur zinciri kırıldı.', mapFocus: 'yarhisar' },
    { id: 'inegol', title: 'İnegöl', date: tartismaliTarih(1299, '1299 civarı', 'Kaynaklar İnegöl’ün alınmasını farklı yıllara koyar.'), from: 'Bizans tekfuru', summary: 'Beyliğin batı yönündeki en inatçı direnç noktası alındı.', effect: 'Bursa ovasına açılan yol denetim altına girdi.', mapFocus: 'inegol' },
    { id: 'yenisehir', title: 'Yenişehir', date: tartismaliTarih(1300, '1300 civarı', 'Merkezin taşınması bir süreçtir; tek bir yıla bağlanamaz.'), from: 'Bizans tekfuru', summary: 'Alındıktan sonra beyliğin yönetim merkezi hâline getirildi.', effect: 'Merkez, dağlık Söğüt’ten ovaya taşındı; Bursa ve İznik’e aynı anda baskı kurulabildi.', osym: 'Kuruluşta merkezin Söğüt’ten Yenişehir’e taşınması, Bursa’dan önceki aşama olarak sorulabilir.', mapFocus: 'yenisehir' },
    { id: 'koprunisar', title: 'Köprühisar ve çevre kaleler', date: tartismaliTarih(1313, '1310’lar', 'Çevre kalelerin alınması yıllara yayılır; tek tarih verilemez.'), from: 'Bizans tekfurları', summary: 'Bursa ve İznik’i besleyen küçük kaleler tek tek alındı.', effect: 'Şehirlerin ikmal yolları kesildi; abluka stratejisi olgunlaştı.' },
  ],

  reforms: [
    { id: 'hutbe-kadi', title: 'Hutbe okutulması ve kadı tayini', date: tartismaliTarih(1299, '1299 civarı'), field: 'hukuk', summary: 'Karacahisar’da kendi adına hutbe okutuldu, Dursun Fakih kadı olarak görevlendirildi.', why: 'Egemenlik yalnız askerî değil hukuki olarak da ilan edilmeliydi.', osym: 'Bağımsızlık göstergesi olarak birinci derecede önemlidir.' },
    { id: 'pazar-duzeni', title: 'Pazar ve vergi düzenlemesi', field: 'ekonomi', summary: 'Alınan yerlerde pazar kurulması ve pazar vergisinin düzenlenmesi.', why: 'Fethedilen yerin üretime ve ticarete katılmadan elde tutulamayacağı erkenden görüldü.' },
    { id: 'iskan', title: 'İskân ve yerleşik düzene geçiş', field: 'yonetim', summary: 'Konar-göçer Türkmen nüfusun alınan bölgelere yerleştirilmesi.', why: 'Sınırda kalıcılık, ancak nüfusun yerleşmesiyle sağlanabilirdi.' },
  ],

  importantFigures: [
    { id: 'osman-bey', name: 'Osman Bey', role: 'Beyliğin kurucusu', side: 'osmanli', summary: 'Uç beyliğini bağımsız bir siyasi yapıya dönüştüren, hanedana adını veren kişi.' },
    { id: 'ertugrul-gazi', name: 'Ertuğrul Gazi', role: 'Uç beyi (Osman Bey’in babası)', side: 'osmanli', summary: 'Söğüt ve Domaniç çevresinin yönetimini Selçuklu’ya bağlı olarak yürüttü; Osmanlı’nın hareket alanını hazırladı.' },
    { id: 'seyh-edebali', name: 'Şeyh Edebali', role: 'Ahi önderi, âlim', side: 'osmanli', summary: 'Ahi çevresinin desteğini beyliğe taşıdı; Osman Bey ile akrabalık bağı kuruldu.' },
    { id: 'dursun-fakih', name: 'Dursun Fakih', role: 'İlk kadı', side: 'osmanli', summary: 'Karacahisar’da hutbe okuyup kadılık görevini üstlendi; hukuki egemenliğin ilk temsilcisidir.' },
    { id: 'kose-mihal', name: 'Köse Mihal', role: 'Harmankaya tekfuru', side: 'muttefik', summary: 'Osmanlı safına geçen ilk Bizans tekfuru; soyundan gelen Mihaloğulları akıncı ailesi oldu.' },
    { id: 'turgut-alp', name: 'Turgut Alp, Konur Alp, Akça Koca', role: 'Uç komutanları', side: 'osmanli', summary: 'İnegöl, Bolu ve Kocaeli yönlerindeki ilerlemeyi yürüten silah arkadaşları.' },
    { id: 'ikinci-andronikos', name: 'II. Andronikos', role: 'Bizans İmparatoru', side: 'rakip', summary: 'Anadolu’daki Bizans savunmasını ayakta tutmaya çalıştı; Koyunhisar yenilgisi onun döneminde yaşandı.' },
  ],

  osymHighlights: [
    'Osmanlı Beyliği’nin kurucusu Osman Bey’dir; devlete adını veren de odur.',
    'Osmanlı–Bizans arasındaki ilk savaş: Koyunhisar (Bafeus), 1302.',
    'Osmanlı’ya katılan ilk Bizans tekfuru: Köse Mihal.',
    'İlk kadı: Dursun Fakih. Hutbe + kadı tayini = bağımsızlık göstergesi.',
    'Merkez sırası: Söğüt → Karacahisar → Yenişehir. Bursa HENÜZ başkent değildir.',
    'Bursa’nın kuşatması Osman Bey döneminde başladı, fethi Orhan Gazi dönemindedir (1326).',
    'Kuruluş dönemi tarihleri (1299, ölüm yılı 1324/1326) kaynaklara göre değişir; "kesin tarih" isteyen soru kurgusu bu dönemde nadirdir.',
    'Osmanlı’nın hızlı büyümesinin nedenleri: uç bölgede kurulması, Bizans’ın zayıflığı, İlhanlı baskısından uzaklık, Türkmen göçü, gaza anlayışı, iskân ve istimâlet politikası.',
  ],

  mapState: {
    id: 'osman-1324',
    caption: 'Osman Gazi dönemi sonunda beylik, Bizans’ın Marmara şehirlerinin güneydoğusunda dar bir alanı denetliyordu.',
    highlight: ['sogut', 'bilecik', 'yenisehir', 'koyunhisar'],
  },

  portrait: {
    kind: 'image',
    src: '/lesson-assets/tarih/osmanli-padisahlari/osman-gazi.jpg',
    alt: 'Osman Gazi’nin dönem özelliklerinden esinlenen eğitim amaçlı temsili illüstrasyon; tarihî portre değildir.',
    tugra: 'ع',
    isim: 'Osman',
  },

  transitionOut: {
    transitionType: 'devir',
    year: '1324/1326',
    headline: 'Taht Orhan Gazi’ye Geçiyor',
    body: 'Osman Bey’in ölümüyle beyliğin başına oğlu Orhan geçti. Devir sancısız oldu; Osmanlı’nın ilk yüzyılındaki en büyük şansı, tahtın kavgasız el değiştirmesiydi. Osman Bey’in yıllardır kuşattığı Bursa, bu geçişin hemen ardından teslim olacaktı.',
  },

  /**
   * Seslendirme metni ortak kayıt defterinde tutulur
   * (anlatimlar.js). Sebebi: metin ekrandaki bilgiyi tekrar
   * etmemek zorunda ve bu kural tek bir yerden denetleniyor
   * (scripts/padisah-anlatim-denetle.mjs).
   */
  narration: ANLATIMLAR['osman-gazi'],

  sources: [
    { label: 'MEB Tarih 10 — Beylikten Devlete Osmanlı', note: 'Kazanım, kaynak eleştirisi ve terim çerçevesi.', url: 'https://tymm.meb.gov.tr/tarih-dersi/unite/39' },
    { label: 'TDV İslâm Ansiklopedisi — Osman I', note: 'Bafeus/Koyunhisar, erken fetihler ve kronoloji için akademik kontrol.', url: 'https://islamansiklopedisi.org.tr/osman-i' },
    { label: 'YKS Tarih konu-kazanım kapsamı — Osmanlı Kuruluş Dönemi', note: 'Sınavda sorulan ayırt edici bilgi seçimi.' },
    { label: 'Kuruluş dönemi kaynak eleştirisi', note: 'Çağdaş belge azlığı nedeniyle tarihlerin bir bölümü "rivayet" olarak işaretlendi.' },
  ],
}

export default osmanGazi
