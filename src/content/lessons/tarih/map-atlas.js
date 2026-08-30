/**
 * TYT Tarih icin ogretici sematik atlaslar.
 * Bunlar siyasi sinir iddiasi tasimaz; cografi iliski, yon ve stratejik
 * dugumleri gostermek icin MEB konu-kazanim kronolojisine gore sadelestirilir.
 */

const layer = (id, label, description, active = true) => ({ id, label, description, active })
const region = (label, x, y, tone = 'land') => ({ label, x, y, tone })
const point = (id, label, x, y, layerId, detail, tone = 'brand') => ({ id, label, x, y, layer: layerId, detail, tone })
const route = (from, to, label, layerId, tone = 'brand') => ({ from, to, label, layer: layerId, tone })

function atlas(slug, config) {
  return {
    id: `${slug}-atlas`,
    type: 'historical_map',
    map_label: 'Şematik gösterim · ölçekli siyasi sınır haritası değildir',
    source_note: 'Konum, yön ve olay bağlantıları MEB 2026 YKS konu-kazanım kapsamı esas alınarak TYT düzeyinde sadeleştirilmiştir.',
    ...config,
  }
}

export const HISTORY_MAP_ATLAS = {
  'ilk-cag-uygarliklari': atlas('ilk-cag-uygarliklari', {
    title: 'İlk uygarlık havzaları: su, üretim ve ticaret',
    intro: 'Nehir havzalarıyla deniz ticareti merkezlerini ayrı katmanlarda incele; coğrafyanın üretim ve siyasi örgütlenmeyi nasıl etkilediğini karşılaştır.',
    layers: [layer('nehir', 'Nehir uygarlıkları', 'Tarım, sulama ve merkezî örgütlenme alanları.'), layer('deniz', 'Deniz ticareti', 'Limanlar, koloniler ve kültür aktarımı.', false), layer('aktarim', 'Yazı–alfabe–para', 'Bilginin ve ticaret araçlarının yayılma düğümleri.', false)],
    regions: [region('AKDENİZ', 32, 44, 'water'), region('MEZOPOTAMYA', 62, 54), region('MISIR', 42, 76), region('ANADOLU', 42, 27), region('HİNT–ÇİN', 88, 54)],
    locations: [
      point('nil', 'Nil · Mısır', 40, 72, 'nehir', 'Düzenli taşkın ve doğal sınırlar tarımı, vergi kaydını ve merkezî krallığı destekledi.'),
      point('firat', 'Fırat–Dicle', 63, 57, 'nehir', 'Sulama ihtiyacı ortak emek ve kayıt doğurdu; açık arazi şehir devletleri ve istilalarla ilişkilidir.'),
      point('indus', 'İndus', 82, 66, 'nehir', 'Planlı şehir ve uzak ticaret bağlantıları gelişti.'),
      point('sari', 'Sarı Irmak', 94, 39, 'nehir', 'Tarım havzası Çin siyasi merkezlerinin oluşumunu destekledi.'),
      point('fenike', 'Fenike', 52, 50, 'deniz', 'Doğu Akdeniz limanları ve koloniler, alfabenin geniş çevrelere taşınmasını kolaylaştırdı.', 'aqua'),
      point('iyon', 'İyonya', 31, 34, 'deniz', 'Ege limanları, koloni ticareti ve farklı kültürlerle temas düşünsel üretimi besledi.', 'aqua'),
      point('sumer', 'Sümer', 66, 63, 'aktarim', 'Çivi yazısı kayıt, vergi ve yönetimde kullanıldı.', 'accent'),
      point('lidya', 'Lidya', 35, 31, 'aktarim', 'Kral Yolu ve madeni para ticari değişimi hızlandırdı.', 'accent'),
    ],
    routes: [route('firat', 'nil', 'Bereketli Hilal ve bölgesel etkileşim', 'nehir'), route('fenike', 'iyon', 'Akdeniz ticaret ve alfabe aktarımı', 'deniz', 'aqua'), route('sumer', 'lidya', 'Kayıt ve ticaret araçlarının batıya aktarımı', 'aktarim', 'accent')],
    insight: 'Nehir su ve ürün fazlasıyla yönetim ihtiyacını büyütürken deniz, liman şehirlerini ticaret ve kültür aktarımına açtı. Coğrafya sonucu tek başına belirlemedi; toplumların örgütlenme probleminin biçimini etkiledi.',
  }),

  'ortacagda-dunya': atlas('ortacagda-dunya', {
    title: 'Orta Çağ bağlantıları: ticaret yolları ve Haçlı güzergâhları',
    intro: 'Avrupa, İslam dünyası ve Asya’yı birbirinden kopuk alanlar değil; kara ve deniz yollarıyla bağlı güç merkezleri olarak oku.',
    layers: [layer('ipek', 'İpek Yolu', 'Çin–Orta Asya–Akdeniz kara ticareti.'), layer('baharat', 'Baharat Yolu', 'Hint Okyanusu ve Doğu Akdeniz bağlantısı.', false), layer('hacli', 'Haçlı güzergâhları', 'Avrupa’dan Anadolu ve Doğu Akdeniz’e askerî hareket.', false)],
    regions: [region('AVRUPA', 12, 22), region('AKDENİZ', 30, 52, 'water'), region('ORTA ASYA', 65, 23), region('ÇİN', 93, 34), region('HİNDİSTAN', 77, 78)],
    locations: [
      point('venedik', 'Venedik', 18, 36, 'hacli', 'Akdeniz taşımacılığı ve Doğu ticaretinden yararlanan liman devleti.', 'aqua'),
      point('istanbul', 'İstanbul', 31, 39, 'ipek', 'Avrupa–Asya ve Karadeniz–Akdeniz geçişlerinin stratejik düğümü.'),
      point('antakya', 'Antakya', 39, 55, 'hacli', 'Anadolu’dan Levant’a inen Haçlı güzergâhının önemli merkezi.', 'danger'),
      point('kudus', 'Kudüs', 40, 68, 'hacli', 'Seferlerin dinî hedefi; Doğu Akdeniz hâkimiyeti mücadelesinin merkezi.', 'danger'),
      point('bagdat', 'Bağdat', 50, 60, 'ipek', 'Kara ticareti, bilim ve kültür aktarımının büyük merkezi.'),
      point('semerkant', 'Semerkant', 69, 41, 'ipek', 'Orta Asya kervan yollarının ve kültürel etkileşimin düğümü.'),
      point('xian', 'Çin içleri', 94, 35, 'ipek', 'İpek ve doğu mallarının kara ticaretine çıktığı merkezleri temsil eder.'),
      point('hind', 'Hindistan', 77, 76, 'baharat', 'Baharat ve değerli malların Hint Okyanusu ticaretine katıldığı alan.', 'accent'),
      point('iskenderiye', 'İskenderiye', 32, 72, 'baharat', 'Kızıldeniz ve Akdeniz arasındaki ticari aktarım merkezlerinden biri.', 'accent'),
    ],
    routes: [route('xian', 'semerkant', 'Doğudan Orta Asya’ya', 'ipek'), route('semerkant', 'bagdat', 'Kervan hattı', 'ipek'), route('bagdat', 'istanbul', 'Akdeniz ve Avrupa bağlantısı', 'ipek'), route('hind', 'iskenderiye', 'Hint Okyanusu–Kızıldeniz aktarımı', 'baharat', 'accent'), route('venedik', 'istanbul', 'Deniz ve kara geçişi', 'hacli', 'danger'), route('istanbul', 'antakya', 'Anadolu geçişi', 'hacli', 'danger'), route('antakya', 'kudus', 'Levant hattı', 'hacli', 'danger')],
    insight: 'Haçlı Seferleri askerî ve dinî hareketti; fakat aynı güzergâhlar tüccar, teknik bilgi ve ürünleri de taşıdı. Ticaret canlandıkça limanlar ve şehirli sınıflar güçlendi, Avrupa’daki yerel feodal bağlar dönüştü.',
  }),

  'islamiyet-oncesi-turk-tarihi': atlas('islamiyet-oncesi-turk-tarihi', {
    title: 'Bozkır dünyası: devlet merkezleri, ticaret ve göç yönleri',
    intro: 'Hun, Kök Türk ve Uygur merkezlerini; İpek Yolu rekabeti ve Kavimler Göçü güzergâhından ayırarak incele.',
    layers: [layer('devlet', 'Devlet merkezleri', 'Hun–Kök Türk–Uygur siyasi çekirdekleri.'), layer('ipek', 'İpek Yolu rekabeti', 'Çin, Sasani ve batı bağlantıları.', false), layer('goc', 'Batıya göç', 'Hun hareketliliğinin Avrupa’ya uzanan yönü.', false)],
    regions: [region('AVRUPA', 8, 32), region('KARADENİZ', 22, 48, 'water'), region('ORTA ASYA', 58, 34), region('ÇİN', 91, 55), region('İRAN', 51, 76)],
    locations: [
      point('otuken', 'Ötüken', 69, 34, 'devlet', 'Kök Türk ve Uygur siyasi-kutsal merkez alanı; bozkır yollarını denetlemeye elverişliydi.'),
      point('ordu', 'Ordu-Balık', 72, 29, 'devlet', 'Uygurların şehir ve yönetim merkezi; yerleşik kültürün güçlendiğini gösterir.', 'aqua'),
      point('hun', 'Asya Hun alanı', 77, 47, 'devlet', 'Mete döneminde boyların büyük siyasi birlik altında toplanmasını temsil eder.'),
      point('cin', 'Çin merkezleri', 93, 55, 'ipek', 'Ticaret, vergi, evlilik ve savaş ilişkilerinin başlıca karşı tarafı.', 'accent'),
      point('sogd', 'Soğd şehirleri', 57, 56, 'ipek', 'İpek Yolu ticaretinde aracı tüccarlar ve kültürel aktarım merkezleri.', 'accent'),
      point('sasani', 'Sasani İranı', 48, 74, 'ipek', 'Kök Türklerin ticaret yolları nedeniyle mücadele ve ittifak kurduğu güç.', 'accent'),
      point('itil', 'İtil–Karadeniz', 29, 48, 'goc', 'Batıya ilerleyen toplulukların Karadeniz kuzeyindeki geçiş alanı.', 'danger'),
      point('roma', 'Roma sınırı', 12, 38, 'goc', 'Hun baskısının Kavimler Göçü üzerinden Avrupa siyasi yapısını etkilediği alan.', 'danger'),
    ],
    routes: [route('cin', 'sogd', 'İpek ve doğu malları', 'ipek', 'accent'), route('sogd', 'sasani', 'Batı pazarlarına geçiş', 'ipek', 'accent'), route('hun', 'itil', 'Bozkır göç ve baskı hattı', 'goc', 'danger'), route('itil', 'roma', 'Kavimler Göçünü hızlandıran yön', 'goc', 'danger')],
    insight: 'Bozkır devletleri boşlukta kurulmadı: Ötüken siyasi merkez, Çin üretim ve rakip güç, Soğd şehirleri ticaret aracısı, batı bozkırları ise göç koridoruydu. İpek Yolu denetimi savaş ve diplomasinin ekonomik zeminidir.',
  }),

  'islam-tarihi-ve-uygarligi': atlas('islam-tarihi-ve-uygarligi', {
    title: 'İslam tarihinin genişleme ve bilgi merkezleri',
    intro: 'Hicreti, siyasi genişlemeyi ve bilimsel-kültürel merkezlerin oluşumunu ayrı katmanlarda izle.',
    layers: [layer('hicret', 'Hicret ve Arabistan', 'Mekke–Medine devletleşme hattı.'), layer('genisleme', 'Siyasi genişleme', 'Dört Halife, Emevi ve Abbasi yönleri.', false), layer('bilim', 'Bilgi merkezleri', 'Çeviri, bilim ve kültür üretim düğümleri.', false)],
    regions: [region('AKDENİZ', 31, 23, 'water'), region('ARABİSTAN', 53, 72), region('İRAN', 78, 48), region('KUZEY AFRİKA', 17, 65), region('ENDÜLÜS', 4, 32)],
    locations: [
      point('mekke', 'Mekke', 52, 77, 'hicret', 'Tebliğin başladığı ticaret ve Kâbe merkezi.'),
      point('medine', 'Medine', 50, 67, 'hicret', 'Hicret sonrası sözleşme, ortak savunma ve siyasi toplumun merkezi.'),
      point('sam', 'Şam', 48, 39, 'genisleme', 'Emevi başkenti; Akdeniz ve kara yollarına yakınlığı geniş yönetimi destekledi.', 'aqua'),
      point('bagdat', 'Bağdat', 66, 44, 'bilim', 'Abbasi başkenti; Beytülhikme, çeviri, ticaret ve bilim üretiminin merkezi.', 'accent'),
      point('kahire', 'Kahire çevresi', 37, 52, 'genisleme', 'Mısır’ın siyasi ve ekonomik merkezleri Afrika–Akdeniz bağlantısını kontrol etti.', 'aqua'),
      point('kurtuba', 'Kurtuba', 7, 34, 'bilim', 'Endülüs’te bilim, mimari ve kültürün Avrupa’ya temas merkezlerinden biri.', 'accent'),
      point('semerkant', 'Semerkant', 88, 33, 'bilim', 'Doğu İslam dünyasında astronomi, matematik ve ticaret bağlantılarını temsil eder.', 'accent'),
    ],
    routes: [route('mekke', 'medine', '622 Hicret', 'hicret'), route('medine', 'sam', 'Suriye yönündeki genişleme', 'genisleme', 'aqua'), route('medine', 'kahire', 'Mısır ve Kuzey Afrika yönü', 'genisleme', 'aqua'), route('kahire', 'kurtuba', 'Kuzey Afrika–Endülüs hattı', 'genisleme', 'aqua'), route('bagdat', 'kurtuba', 'Bilginin batıya dolaşımı', 'bilim', 'accent'), route('semerkant', 'bagdat', 'Doğu bilim ve ticaret ağı', 'bilim', 'accent')],
    insight: 'Hicret bir kaçıştan devletleşmeye, fetihler çok merkezli bir coğrafyaya, Bağdat ve Kurtuba ise siyasi genişlemeyi bilgi üretimine bağlayan medeniyet ağlarına dönüştü.',
  }),

  'osmanli-yukselme': atlas('osmanli-yukselme', {
    title: 'Dünya gücü Osmanlı: batı, doğu, güney ve deniz stratejisi',
    intro: 'Fetihleri tek çizgi hâlinde değil, farklı rakiplere karşı yürütülen dört eş zamanlı strateji olarak incele.',
    layers: [layer('bati', 'Habsburg–Balkan hattı', 'Belgrad, Mohaç ve Viyana yönü.'), layer('dogu', 'Safevi hattı', 'Çaldıran ve İran rekabeti.', false), layer('guney', 'Memlük ve ticaret', 'Suriye–Mısır–Kızıldeniz yönü.', false), layer('deniz', 'Akdeniz ve Hint', 'Preveze, Kıbrıs ve Hint seferleri.', false)],
    regions: [region('AVRUPA', 17, 20), region('AKDENİZ', 37, 60, 'water'), region('ANADOLU', 53, 43), region('İRAN', 81, 46), region('MISIR', 55, 79)],
    locations: [
      point('istanbul', 'İstanbul', 46, 38, 'bati', '1453 sonrası başkent ve iki kıta arasındaki stratejik merkez.'),
      point('belgrad', 'Belgrad', 31, 25, 'bati', 'Orta Avrupa ve Tuna yolunun kapısı.'),
      point('mohac', 'Mohaç', 27, 17, 'bati', '1526 zaferi Macar siyasi dengesini çökertti.'),
      point('viyana', 'Viyana', 20, 11, 'bati', 'Habsburg gücünün merkezi ve Osmanlı kara ilerleyişinin sınır eşiği.'),
      point('caldiran', 'Çaldıran', 72, 39, 'dogu', '1514’te Safevi baskısını sınırlayan doğu cephesi.'),
      point('kahire', 'Kahire', 54, 79, 'guney', '1517’de Memlük yönetiminin sona ermesiyle Osmanlı güney merkezine dönüştü.'),
      point('preveze', 'Preveze', 34, 47, 'deniz', '1538 deniz zaferi Akdeniz üstünlüğünü güçlendirdi.', 'aqua'),
      point('kibris', 'Kıbrıs', 50, 64, 'deniz', 'Doğu Akdeniz ticaret ve ikmal yolları için stratejik ada.', 'aqua'),
      point('aden', 'Aden–Hint yolu', 66, 91, 'deniz', 'Portekiz baskısına karşı Kızıldeniz ve Hint ticaretini koruma çabası.', 'aqua'),
    ],
    routes: [route('istanbul', 'belgrad', 'Tuna kapısına ilerleme', 'bati'), route('belgrad', 'mohac', 'Macaristan hattı', 'bati'), route('mohac', 'viyana', 'Habsburg merkezi yönü', 'bati'), route('istanbul', 'caldiran', 'Safevi rekabeti', 'dogu', 'danger'), route('istanbul', 'kahire', 'Suriye–Mısır seferi', 'guney', 'accent'), route('preveze', 'kibris', 'Akdeniz deniz hâkimiyeti', 'deniz', 'aqua'), route('kahire', 'aden', 'Kızıldeniz–Hint ticareti', 'deniz', 'aqua')],
    insight: 'Osmanlı büyümesi yalnız Avrupa’ya yürüyüş değildir. Habsburg dengesi, Safevi tehdidi, Memlük mirası ve Portekiz’in okyanus baskısı aynı anda kara, deniz, ticaret ve diplomasi araçlarıyla yönetildi.',
  }),

  'on-yedinci-yuzyil-osmanli': atlas('on-yedinci-yuzyil-osmanli', {
    title: '17. yüzyıl cepheleri: üç sınırda değişen denge',
    intro: 'Avusturya, İran ve kuzey cephelerini; yüzyıl sonundaki Kutsal İttifak baskısından ayır.',
    layers: [layer('bati', 'Avusturya cephesi', 'Zitvatorok, Viyana ve Karlofça hattı.'), layer('dogu', 'İran cephesi', 'Kasr-ı Şirin ile sınır dengesi.', false), layer('kuzey', 'Kuzey ve deniz', 'Kazak, Lehistan ve Karadeniz rekabeti.', false)],
    regions: [region('ORTA AVRUPA', 17, 17), region('KARADENİZ', 46, 33, 'water'), region('ANADOLU', 57, 56), region('İRAN', 84, 58), region('AKDENİZ', 38, 79, 'water')],
    locations: [point('viyana', 'Viyana', 18, 20, 'bati', '1683 kuşatmasının başarısızlığı Kutsal İttifak saldırılarını tetikledi.'), point('zitva', 'Zitvatorok', 28, 26, 'bati', '1606 antlaşması Avusturya ile diplomatik mütekabiliyet yönündeki değişimi gösterdi.'), point('karlofca', 'Karlofça', 25, 31, 'bati', '1699 büyük toprak kaybı ve savunma diplomasisi eşiği.'), point('bagdat', 'Bağdat', 70, 71, 'dogu', 'Osmanlı–Safevi rekabetinin stratejik merkezi.', 'danger'), point('kasr', 'Kasr-ı Şirin', 76, 62, 'dogu', '1639 antlaşması bugünkü Türkiye–İran sınırının ana çizgisini belirledi.', 'danger'), point('kirim', 'Kırım', 51, 20, 'kuzey', 'Karadeniz ve kuzey siyasetinde Osmanlı müttefik alanı.', 'aqua'), point('kamance', 'Kamaniçe', 34, 16, 'kuzey', 'Lehistan ve kuzey yönündeki mücadelelerin düğümü.', 'aqua'), point('girit', 'Girit', 41, 88, 'kuzey', 'Uzun kuşatma sonrası 1669’da alınan ada; deniz savaşının maliyetini gösterir.', 'aqua')],
    routes: [route('zitva', 'viyana', 'Avusturya rekabeti', 'bati'), route('viyana', 'karlofca', 'Kutsal İttifak sonrası geri çekilme', 'bati', 'danger'), route('bagdat', 'kasr', 'Doğu sınırının dengelenmesi', 'dogu', 'danger'), route('kirim', 'kamance', 'Kuzey yönelimi', 'kuzey', 'aqua')],
    insight: 'Doğuda Kasr-ı Şirin denge ve sınır istikrarı getirirken batıda II. Viyana sonrası çok devletli koalisyon Osmanlıyı savunmaya zorladı. Aynı yüzyılda bütün cepheler aynı yönde gelişmedi.',
  }),

  'on-sekizinci-yuzyil-osmanli': atlas('on-sekizinci-yuzyil-osmanli', {
    title: '18. yüzyıl güç dengesi: Rusya’nın Karadeniz’e inişi',
    intro: 'Karlofça sonrası geri alma siyasetini ve Rusya’nın güneye ilerlemesini antlaşma katmanlarıyla karşılaştır.',
    layers: [layer('geri', 'Toprakları geri alma', 'Prut ve Pasarofça dönemi.'), layer('rusya', 'Rusya’nın güneye inişi', 'Azak, Kırım ve Karadeniz yönü.'), layer('denge', 'Diplomatik denge', 'Belgrad ve Küçük Kaynarca sonuçları.', false)],
    regions: [region('RUSYA', 62, 6), region('KARADENİZ', 53, 38, 'water'), region('BALKANLAR', 28, 44), region('ANADOLU', 55, 68), region('AKDENİZ', 38, 89, 'water')],
    locations: [point('prut', 'Prut', 39, 25, 'geri', '1711’de Rus ordusunun sıkıştırılması Karlofça kayıplarını telafi umudunu güçlendirdi.'), point('pasarofca', 'Pasarofça', 29, 42, 'geri', '1718 sonrası Avrupa’yı gözlem ve seçici yenilik dönemi başladı.'), point('belgrad', 'Belgrad', 26, 35, 'denge', '1739 antlaşması Osmanlının batıda son avantajlı barışlarından biri.', 'accent'), point('azak', 'Azak', 58, 24, 'rusya', 'Rusya’nın Karadeniz’e çıkış mücadelesinin stratejik kapısı.', 'danger'), point('kirim', 'Kırım', 50, 29, 'rusya', 'Küçük Kaynarca ile Osmanlıdan siyasi olarak koparıldı; 1783’te Rusya ilhak etti.', 'danger'), point('cesme', 'Çeşme', 39, 67, 'rusya', '1770’te Rus donanmasının Osmanlı donanmasını yakması deniz tehdidini gösterdi.', 'danger'), point('kaynarca', 'Küçük Kaynarca', 42, 36, 'denge', '1774 antlaşması Rusya’ya diplomatik ve Karadeniz bağlantılı önemli avantajlar sağladı.', 'accent')],
    routes: [route('azak', 'kirim', 'Karadeniz’e ilerleme', 'rusya', 'danger'), route('kirim', 'cesme', 'Rus deniz gücünün Akdeniz’e uzanması', 'rusya', 'danger'), route('prut', 'pasarofca', 'Geri alma umudundan yeni dengeye', 'geri'), route('belgrad', 'kaynarca', 'Avantajlı barıştan ağır tavize', 'denge', 'accent')],
    insight: '18. yüzyılın coğrafi ana ekseni Rusya’nın kuzeyden Karadeniz ve Boğazlar yönüne inmesidir. Kırım’ın kopması yalnız toprak kaybı değil, Karadeniz güvenlik düzeninin değişmesidir.',
  }),

  'on-dokuzuncu-yuzyil-osmanli': atlas('on-dokuzuncu-yuzyil-osmanli', {
    title: '19. yüzyıl denge siyaseti: milliyetçilik, Boğazlar ve büyük güçler',
    intro: 'İç isyanların nasıl uluslararası soruna dönüştüğünü ve Osmanlının Rusya karşısında Avrupa dengesini neden kullandığını incele.',
    layers: [layer('milliyet', 'Milliyetçi hareketler', 'Sırp ve Yunan isyanlarının Balkan coğrafyası.'), layer('bogaz', 'Boğazlar sorunu', 'Rusya–İngiltere rekabeti ve geçiş rejimi.', false), layer('denge', 'Büyük güç dengesi', 'Kırım Savaşı ve Paris düzeni.', false)],
    regions: [region('AVRUPA', 18, 12), region('BALKANLAR', 35, 34), region('KARADENİZ', 58, 31, 'water'), region('ANADOLU', 58, 60), region('AKDENİZ', 42, 85, 'water')],
    locations: [point('sirbistan', 'Sırbistan', 30, 29, 'milliyet', '1804 isyanı, Balkan milliyetçiliğinin özerklik ve bağımsızlığa ilerleyen örneklerinden.'), point('mora', 'Mora–Yunanistan', 35, 60, 'milliyet', '1821 isyanı büyük güç müdahalesiyle uluslararası boyut kazandı.'), point('istanbul', 'İstanbul', 50, 48, 'bogaz', 'Başkent ve Boğazlar, Osmanlı varlığını Avrupa güç dengesi meselesine dönüştürdü.', 'aqua'), point('hunkar', 'Hünkâr İskelesi', 52, 43, 'bogaz', '1833 antlaşması Rusya’nın Boğazlar üzerindeki etkisini artırdı.', 'aqua'), point('londra', 'Londra', 6, 15, 'bogaz', '1841 sözleşmesi Boğazları uluslararası denge rejimine bağladı.', 'aqua'), point('kirim', 'Kırım', 62, 23, 'denge', '1853–1856 savaşında Rusya’ya karşı Osmanlı, İngiltere ve Fransa ortaklığı.', 'accent'), point('paris', 'Paris', 12, 22, 'denge', '1856 antlaşması Osmanlıyı Avrupa devletler hukukuna dahil etti.', 'accent'), point('berlin', 'Berlin', 23, 11, 'denge', '1878 kongresi 93 Harbi sonuçlarını yeniden düzenledi ve Osmanlı sorunlarını uluslararasılaştırdı.', 'accent')],
    routes: [route('sirbistan', 'mora', 'Balkan milliyetçiliğinin yayılması', 'milliyet', 'danger'), route('hunkar', 'istanbul', 'Rus nüfuzu ve Boğaz güvenliği', 'bogaz', 'aqua'), route('londra', 'istanbul', 'Uluslararası geçiş rejimi', 'bogaz', 'aqua'), route('kirim', 'paris', 'Savaştan Avrupa hukukuna', 'denge', 'accent'), route('istanbul', 'berlin', 'Osmanlı sorunlarının kongre diplomasisi', 'denge', 'accent')],
    insight: 'Balkan isyanları yerel başlayıp büyük güç müdahalesiyle uluslararasılaştı. Boğazların coğrafi konumu ise Osmanlının zayıflığını aynı zamanda İngiltere, Fransa ve Rusya arasında denge aracına dönüştürdü.',
  }),

  'balta-limani-ve-osmanli-ekonomisi': atlas('balta-limani-ve-osmanli-ekonomisi', {
    title: 'Balta Limanı sonrası ticaret akışı: fabrika malı ve ham madde',
    intro: 'İngiliz sanayi merkezlerinden Osmanlı limanlarına gelen mamul mallarla, iç bölgelerden limanlara yönelen ham madde akışını ayır.',
    layers: [layer('mamul', 'Fabrika malları', 'İngiltere’den Osmanlı pazarlarına ithalat.'), layer('hammadde', 'Ham madde ihracı', 'Anadolu ve Balkan üretiminin limanlara yönelmesi.'), layer('borc', 'Borç ve mali denetim', 'Londra–İstanbul–Düyun-ı Umumiye ilişkisi.', false)],
    regions: [region('İNGİLTERE', 7, 15), region('AKDENİZ', 34, 53, 'water'), region('BALKANLAR', 51, 27), region('ANADOLU', 67, 56), region('MISIR', 55, 86)],
    locations: [point('manchester', 'Manchester', 8, 17, 'mamul', 'Sanayi Devrimi’nin tekstil üretim merkezlerinden; seri ve ucuz mallar dış pazar aradı.'), point('londra', 'Londra', 10, 25, 'borc', 'Ticaret sermayesi ve sonraki dış borçlanmanın önemli finans merkezi.', 'danger'), point('istanbul', 'İstanbul', 58, 38, 'mamul', 'Antlaşmanın imzalandığı ve dış ticaret ağlarının büyük giriş merkezi.'), point('izmir', 'İzmir', 53, 56, 'mamul', 'Batı Anadolu tarım ürünlerinin ihracı ve ithal malların iç pazara dağıtımı için başlıca liman.'), point('selanik', 'Selanik', 48, 38, 'mamul', 'Balkan iç bölgelerini Akdeniz ticaretine bağlayan liman.'), point('adana', 'Çukurova', 68, 73, 'hammadde', 'Pamuk ve tarım ürünlerinin dış talebe bağlandığı üretim bölgesi.', 'accent'), point('anadolu', 'Anadolu iç pazarı', 70, 52, 'hammadde', 'Yerel zanaatların ithal fabrika malıyla rekabet ettiği; tarım ürünlerinin limana yöneldiği alan.', 'accent'), point('duyun', 'Düyun-ı Umumiye', 60, 34, 'borc', '1881’den sonra bazı Osmanlı gelirlerini yabancı alacaklılar adına toplayan mali denetim kurumu.', 'danger')],
    routes: [route('manchester', 'istanbul', 'Ucuz fabrika malı ithalatı', 'mamul'), route('manchester', 'izmir', 'Akdeniz limanlarına mamul mal', 'mamul'), route('selanik', 'anadolu', 'İthal malın iç pazara dağılımı', 'mamul'), route('adana', 'izmir', 'Ham madde ve tarım ürünü ihracı', 'hammadde', 'accent'), route('anadolu', 'istanbul', 'İç üretimin limana yönelmesi', 'hammadde', 'accent'), route('londra', 'duyun', 'Borçtan gelir denetimine', 'borc', 'danger')],
    insight: 'Ticaret hacminin artması tek başına kalkınma değildir. Osmanlı pazarı sanayi malı alırken ham madde satmaya yöneldi; yerli atölye rekabet baskısı gördü ve mali kriz dış borç denetimine dönüştü.',
  }),

  'trablusgarp-savasi': atlas('trablusgarp-savasi', {
    title: 'Trablusgarp: Osmanlı neden düzenli ordu gönderemedi?',
    intro: 'Deniz gücü, Mısır geçişi ve yerel direniş katmanlarını açarak savaşın coğrafi sınırlarını incele.',
    layers: [layer('italya', 'İtalyan saldırısı', 'İtalya–Libya deniz hattı.'), layer('ulasim', 'Osmanlı ulaşım engeli', 'Deniz ve Mısır üzerinden kapalı yollar.'), layer('direnis', 'Yerel direniş', 'Gönüllü subayların örgütlediği merkezler.', false)],
    regions: [region('İTALYA', 38, 9), region('AKDENİZ', 48, 39, 'water'), region('TRABLUSGARP', 42, 73), region('MISIR', 79, 72), region('OSMANLI', 82, 20)],
    locations: [point('italya', 'İtalya', 38, 14, 'italya', 'Geç siyasi birliğini tamamlayan İtalya sömürge ve prestij aradı.'), point('trablus', 'Trablus', 42, 69, 'italya', 'Kıyıdaki başlıca hedef ve Osmanlı vilayet merkezi.'), point('bingazi', 'Bingazi', 57, 72, 'italya', 'Doğu Libya kıyı merkezi; yerel direnişin çevresindeki alan.'), point('misir', 'Mısır geçişi', 78, 66, 'ulasim', 'İngiliz denetimi düzenli Osmanlı kara sevkiyatını engelledi.', 'danger'), point('istanbul', 'İstanbul', 82, 18, 'ulasim', 'Merkez ile cephe arasında doğrudan kara bağlantısı yoktu.', 'danger'), point('derne', 'Derne', 62, 66, 'direnis', 'Mustafa Kemal’in yerel kuvvetleri örgütlediği savunma merkezi.', 'aqua'), point('tobruk', 'Tobruk', 68, 65, 'direnis', 'Gönüllü subayların yerel kuvvetlerle direniş yürüttüğü alan.', 'aqua'), point('rodos', 'On İki Ada', 72, 38, 'italya', 'İtalya Osmanlıyı barışa zorlamak için adaları işgal etti.')],
    routes: [route('italya', 'trablus', 'Denizden çıkarma', 'italya'), route('italya', 'bingazi', 'Kıyı işgali', 'italya'), route('istanbul', 'misir', 'Kapalı kara yolu', 'ulasim', 'danger'), route('misir', 'derne', 'Gizli/gönüllü geçiş', 'direnis', 'aqua'), route('derne', 'tobruk', 'Yerel savunma hattı', 'direnis', 'aqua')],
    insight: 'Savaşın biçimini coğrafya belirledi: İtalya deniz üstünlüğüyle kıyıyı tuttu; Osmanlı düzenli ordu gönderemediği için gönüllü subaylar yerel halkı iç bölgelerde örgütledi.',
  }),

  'balkan-savaslari': atlas('balkan-savaslari', {
    title: 'Balkan Savaşları: ittifak, paylaşım ve Edirne’nin geri alınışı',
    intro: 'Birinci savaşta Osmanlıya yönelen saldırıları, ikinci savaşta eski müttefiklerin Bulgaristan’a dönüşünü ayır.',
    layers: [layer('birinci', 'I. Balkan Savaşı', 'Balkan ittifakının Osmanlıya saldırı yönleri.'), layer('ikinci', 'II. Balkan Savaşı', 'Paylaşım kavgasında Bulgaristan’a yönelen cepheler.', false), layer('osmanli', 'Osmanlı karşı hamlesi', 'Edirne’nin geri alınış yönü.', false)],
    regions: [region('BALKANLAR', 35, 30), region('KARADENİZ', 75, 20, 'water'), region('EGE', 35, 76, 'water'), region('ANADOLU', 78, 72)],
    locations: [point('sirbistan', 'Sırbistan', 28, 23, 'birinci', 'Balkan ittifakının kuzeybatı kara gücü.'), point('karadag', 'Karadağ', 17, 33, 'birinci', 'Osmanlıya ilk savaş ilan eden ittifak üyesi.'), point('yunan', 'Yunanistan', 29, 68, 'birinci', 'Güney ve Ege yönünde ilerledi; Selanik’i aldı.'), point('bulgar', 'Bulgaristan', 54, 31, 'birinci', 'Doğu Trakya yönündeki başlıca askerî baskı.'), point('edirne', 'Edirne', 62, 48, 'osmanli', 'İlk savaşta kaybedildi, ikinci savaş fırsatında geri alındı.', 'aqua'), point('istanbul', 'İstanbul', 73, 58, 'osmanli', 'Çatalca hattı başkentin son savunma eşiğiydi.', 'aqua'), point('romanya', 'Romanya', 56, 10, 'ikinci', 'İkinci savaşta Bulgaristan’a kuzeyden girdi.', 'danger'), point('selanik', 'Selanik', 36, 52, 'birinci', 'Yunanistan’ın aldığı büyük liman ve siyasi merkez.')],
    routes: [route('sirbistan', 'edirne', 'İttifak baskısı', 'birinci'), route('bulgar', 'istanbul', 'Doğu Trakya–Çatalca yönü', 'birinci'), route('yunan', 'selanik', 'Güney cephesi', 'birinci'), route('romanya', 'bulgar', 'Kuzeyden Bulgaristan’a', 'ikinci', 'danger'), route('sirbistan', 'bulgar', 'Eski müttefiklerin çatışması', 'ikinci', 'danger'), route('istanbul', 'edirne', 'Osmanlı karşı ilerleyişi', 'osmanli', 'aqua')],
    insight: 'I. savaş ortak düşmana karşı paylaşım ittifakı; II. savaş kazanılan alanın paylaşılamamasıdır. Edirne’nin geri alınması Osmanlının genel zaferinden değil, Bulgaristan’ın çok cepheli yalnızlığından doğdu.',
  }),

  'birinci-dunya-savasi': atlas('birinci-dunya-savasi', {
    title: 'I. Dünya Savaşı’nda Osmanlı cepheleri ve stratejik amaçlar',
    intro: 'Savunma, taarruz ve müttefike yardım cephelerini ayrı ayrı aç; her cephenin hangi yol, boğaz, petrol alanı veya sınırı koruduğunu incele.',
    layers: [layer('savunma', 'Savunma cepheleri', 'Çanakkale, Irak, Suriye–Filistin ve Hicaz.'), layer('taarruz', 'Taarruz cepheleri', 'Kafkas ve Kanal hedefleri.', false), layer('yardim', 'Yardım cepheleri', 'Galiçya, Romanya ve Makedonya.', false)],
    regions: [region('AVRUPA', 18, 13), region('KARADENİZ', 50, 28, 'water'), region('ANADOLU', 55, 46), region('AKDENİZ', 45, 67, 'water'), region('ORTA DOĞU', 69, 77)],
    locations: [
      point('istanbul', 'İstanbul', 43, 39, 'savunma', 'Başkent ve Boğazların merkezi; Çanakkale savunmasının nihai stratejik hedefi.'),
      point('canakkale', 'Çanakkale', 36, 45, 'savunma', 'İtilaf donanması Boğazı geçip İstanbul’a ve Rusya’ya ulaşmak istedi.'),
      point('sarıkamis', 'Sarıkamış', 74, 35, 'taarruz', 'Kafkas cephesindeki kış taarruzu; Rus baskısını kırma ve doğuda alan kazanma amacı taşıdı.', 'danger'),
      point('kanal', 'Süveyş Kanalı', 58, 77, 'taarruz', 'İngiltere’nin Hindistan ve sömürge bağlantısını kesme hedefi.', 'danger'),
      point('basra', 'Basra–Irak', 77, 75, 'savunma', 'İngiltere petrol alanlarını ve Basra Körfezi–Hindistan yolunu güvenceye almak istedi.'),
      point('filistin', 'Suriye–Filistin', 62, 67, 'savunma', 'Kanal ve Anadolu yönüne ilerleyen İngiliz ordusuna karşı savunma hattı.'),
      point('hicaz', 'Hicaz–Yemen', 65, 92, 'savunma', 'Kutsal bölgeler, Kızıldeniz ve yerel isyan baskısı altında tutulan güney cephesi.'),
      point('galicya', 'Galiçya', 29, 10, 'yardim', 'Osmanlı birliklerinin Avusturya-Macaristan’a destek verdiği Avrupa cephesi.', 'aqua'),
      point('romanya', 'Romanya', 34, 19, 'yardim', 'İttifak blokunun Avrupa savunmasına destek cephesi.', 'aqua'),
      point('makedonya', 'Makedonya', 27, 31, 'yardim', 'Balkanlarda müttefik kuvvetlere destek verilen cephe.', 'aqua'),
    ],
    routes: [route('canakkale', 'istanbul', 'Boğazı geçip başkente ulaşma hedefi', 'savunma'), route('istanbul', 'sarıkamis', 'Kafkas taarruzu', 'taarruz', 'danger'), route('filistin', 'kanal', 'Kanal harekâtı', 'taarruz', 'danger'), route('basra', 'filistin', 'İngiliz ilerleme baskısı', 'savunma'), route('hicaz', 'filistin', 'Güney hattının çözülmesi', 'savunma'), route('istanbul', 'galicya', 'Müttefike asker desteği', 'yardim', 'aqua'), route('istanbul', 'romanya', 'Avrupa yardım cephesi', 'yardim', 'aqua'), route('istanbul', 'makedonya', 'Balkan yardım cephesi', 'yardim', 'aqua')],
    insight: 'Cephe adını haritadan amaçla eşleştir: Çanakkale Boğaz ve başkent, Kafkas doğu sınırı ve Rusya, Kanal sömürge yolu, Irak petrol ve Körfez, Suriye–Filistin ise güneyden Anadolu’ya yaklaşan hattır.',
  }),

  'mondros-ve-isgaller': atlas('mondros-ve-isgaller', {
    title: 'Mondros sonrası işgaller: stratejik maddeden fiilî paylaşıma',
    intro: 'İşgalleri devletlere göre aç; liman, demiryolu, boğaz ve petrol bölgelerinin neden önce hedef olduğunu incele.',
    layers: [layer('ingiliz', 'İngiliz işgalleri', 'Musul ve stratejik ulaşım merkezleri.'), layer('fransiz', 'Fransız işgalleri', 'Çukurova ve Güneydoğu hattı.', false), layer('italyan', 'İtalyan işgalleri', 'Güneybatı Anadolu.', false), layer('yunan', 'Yunan işgali', 'İzmir’den Batı Anadolu içlerine.', false)],
    regions: [region('KARADENİZ', 48, 9, 'water'), region('ANADOLU', 50, 48), region('EGE', 8, 54, 'water'), region('AKDENİZ', 42, 87, 'water'), region('MUSUL', 88, 73)],
    locations: [point('istanbul', 'İstanbul–Boğazlar', 26, 27, 'ingiliz', 'Başkent, haberleşme ve boğaz denetimi; 1920’de resmen işgal edildi.'), point('musul', 'Musul', 88, 70, 'ingiliz', 'Ateşkes sonrası petrol ve Irak güvenliği nedeniyle işgal edildi.'), point('samsun', 'Samsun', 50, 17, 'ingiliz', 'Karadeniz limanı ve iç bölgelere ulaşım bağlantısı.'), point('adana', 'Adana–Çukurova', 58, 77, 'fransiz', 'Tarım, demiryolu ve Suriye bağlantısı nedeniyle Fransız nüfuz alanı.', 'aqua'), point('antep', 'Antep–Maraş–Urfa', 72, 69, 'fransiz', 'Yerel direnişin güçlü olduğu güney şehirleri.', 'aqua'), point('antalya', 'Antalya', 34, 78, 'italyan', 'İtalya’nın güneybatı Anadolu nüfuz alanı.', 'accent'), point('konya', 'Konya çevresi', 44, 58, 'italyan', 'İtalyan nüfuzunun iç bölgelere uzanma alanı.', 'accent'), point('izmir', 'İzmir', 15, 50, 'yunan', '15 Mayıs 1919 işgali ulusal tepkiyi ve Batı Anadolu direnişini hızlandırdı.', 'danger'), point('balikesir', 'Balıkesir–Aydın hattı', 19, 43, 'yunan', 'Yunan ilerleyişine karşı Kuvayımilliye cephelerinin oluştuğu alan.', 'danger')],
    routes: [route('izmir', 'balikesir', 'Yunan ilerleyişi ve yerel direniş', 'yunan', 'danger'), route('antalya', 'konya', 'İtalyan nüfuz yönü', 'italyan', 'accent'), route('adana', 'antep', 'Fransız işgal hattı', 'fransiz', 'aqua'), route('istanbul', 'samsun', 'Karadeniz denetimi', 'ingiliz')],
    insight: 'İşgal coğrafyası rastgele değildir: limanlar dış destek ve sevkiyat, demiryolları iç bölgelere erişim, Boğazlar uluslararası geçiş, Musul ise petrol ve Irak güvenliği açısından hedeflendi.',
  }),

  'milli-mucadele-hazirlik': atlas('milli-mucadele-hazirlik', {
    title: 'Millî Mücadele hazırlık rotası: yerel tepkiden Ankara’ya',
    intro: 'Mustafa Kemal’in hareket hattını, kongrelerin temsil alanını ve kararların neden bir sonraki merkeze taşındığını incele.',
    layers: [layer('rota', 'Mustafa Kemal’in rotası', 'İstanbul–Samsun–Havza–Amasya–Erzurum–Sivas–Ankara.'), layer('kongre', 'Kongrelerin kapsamı', 'Bölgesel ve ulusal temsil merkezleri.', false), layer('meclis', 'Meclise geçiş', 'İstanbul’dan Ankara’ya egemenlik merkezinin değişimi.', false)],
    regions: [region('KARADENİZ', 47, 7, 'water'), region('DOĞU ANADOLU', 78, 48), region('İÇ ANADOLU', 47, 51), region('MARMARA', 17, 31), region('AKDENİZ', 44, 90, 'water')],
    locations: [point('istanbul', 'İstanbul', 18, 31, 'rota', '9. Ordu Müfettişliği görevinin başladığı merkez; işgal baskısı altındaki hükümetin bulunduğu şehir.'), point('samsun', 'Samsun · 19 Mayıs', 47, 15, 'rota', 'Resmî görevin sahadaki başlangıcı; bölge raporu işgali haklı gösterecek asayiş iddialarını sorguladı.'), point('havza', 'Havza', 49, 24, 'rota', 'Miting ve protesto genelgesiyle resmî görev sınırının aşılmaya başladığı durak.'), point('amasya', 'Amasya', 55, 29, 'rota', 'Mücadelenin gerekçe, amaç ve yönteminin millet iradesiyle açıklandığı merkez.'), point('erzurum', 'Erzurum', 82, 40, 'kongre', 'Bölgesel toplanıp ulusal kararlar alan kongre; Mustafa Kemal sivil lider olarak katıldı.', 'aqua'), point('sivas', 'Sivas', 63, 40, 'kongre', 'Ulusal kongre; direniş cemiyetleri Anadolu ve Rumeli Müdafaa-i Hukuk çatısında birleşti.', 'aqua'), point('ankara', 'Ankara', 43, 46, 'meclis', 'Ulaşım, telgraf ve Batı Cephesi’ne yakınlık nedeniyle Temsil Heyeti ve TBMM merkezi.', 'accent'), point('mebusan', 'Son Osmanlı Meclisi', 18, 27, 'meclis', 'Misakımillî’yi kabul etti; İstanbul’un işgali Ankara’da yeni meclisi hızlandırdı.', 'accent')],
    routes: [route('istanbul', 'samsun', 'Resmî görevle çıkış', 'rota'), route('samsun', 'havza', 'Halkı tepkiye çağırma', 'rota'), route('havza', 'amasya', 'Ulusal programın ilanı', 'rota'), route('amasya', 'erzurum', 'Kongre örgütlenmesi', 'rota'), route('erzurum', 'sivas', 'Bölgeselden ulusal birliğe', 'kongre', 'aqua'), route('sivas', 'ankara', 'Temsil Heyetinin yönetim merkezine geçişi', 'meclis', 'accent'), route('mebusan', 'ankara', 'İşgal sonrası egemenlik merkezinin değişimi', 'meclis', 'accent')],
    insight: 'Rota tesadüf değildir: Karadeniz’e çıkış sahaya erişim, Amasya iletişim ve program, Erzurum doğu güvenliği, Sivas merkezi ulusal temsil, Ankara ise demiryolu–telgraf–cephe yakınlığı sağladı.',
  }),

  'kurtulus-savasi': atlas('kurtulus-savasi', {
    title: 'Kurtuluş Savaşı cepheleri: askerî başarıdan diplomatik sınıra',
    intro: 'Doğu, Güney ve Batı cephelerini ayrı aç; her askerî gelişmenin hangi antlaşma veya siyasi sonucu doğurduğunu izle.',
    layers: [layer('dogu', 'Doğu Cephesi', 'Ermenistan savaşı ve Gümrü–Kars sınırı.'), layer('guney', 'Güney Cephesi', 'Yerel direniş ve Ankara Antlaşması.', false), layer('bati', 'Batı Cephesi', 'İnönü’den Büyük Taarruz’a ana cephe.', false)],
    regions: [region('KARADENİZ', 48, 8, 'water'), region('DOĞU ANADOLU', 80, 44), region('İÇ ANADOLU', 47, 46), region('EGE', 8, 52, 'water'), region('AKDENİZ', 46, 90, 'water')],
    locations: [point('kars', 'Kars', 88, 31, 'dogu', 'Kazım Karabekir’in başarıları ve Kars Antlaşmasıyla doğu sınırının güvence alanı.'), point('gumru', 'Gümrü', 94, 25, 'dogu', 'TBMM’nin uluslararası alandaki ilk antlaşmasının yapıldığı merkez.'), point('antep', 'Antep–Maraş–Urfa', 67, 75, 'guney', 'Yerel direnişin Fransız işgalini maliyetli hâle getirdiği şehirler.', 'aqua'), point('ankara', 'Ankara', 47, 43, 'bati', 'TBMM, komuta ve diplomasi merkezi.'), point('inonu', 'İnönü', 30, 40, 'bati', 'Düzenli ordunun ilk savunma başarıları; meclis ve ordunun güvenini artırdı.', 'danger'), point('eskisehir', 'Kütahya–Eskişehir', 32, 48, 'bati', 'Geri çekilme sonrası ordunun Sakarya doğusuna alınmasına yol açtı.', 'danger'), point('sakarya', 'Sakarya', 43, 42, 'bati', '22 gün süren savunma Yunan taarruz gücünü kırdı ve diplomatik dengeyi değiştirdi.', 'danger'), point('afyon', 'Afyon', 29, 59, 'bati', 'Büyük Taarruzun yarma merkezi.', 'danger'), point('izmir', 'İzmir', 13, 55, 'bati', 'Yunan ordusunun Anadolu’dan çıkarılışının ve askerî sonucun simgesi.', 'danger'), point('mudanya', 'Mudanya', 25, 31, 'bati', 'Ateşkesle Doğu Trakya savaşsız alındı; Lozan yolunu açtı.', 'accent')],
    routes: [route('gumru', 'kars', 'Doğu sınırının kurulması', 'dogu'), route('antep', 'ankara', 'Yerel direnişin diplomatik sonuca dönüşmesi', 'guney', 'aqua'), route('inonu', 'eskisehir', 'Yunan taarruz baskısı', 'bati', 'danger'), route('eskisehir', 'sakarya', 'Stratejik geri çekilme', 'bati', 'danger'), route('sakarya', 'afyon', 'Savunmadan hazırlığa', 'bati', 'danger'), route('afyon', 'izmir', 'Büyük Taarruz ve takip', 'bati', 'danger'), route('izmir', 'mudanya', 'Askerî sonuçtan ateşkese', 'bati', 'accent')],
    insight: 'Doğu cephesi erken kapanarak kuvvet tasarrufu sağladı; güneyde yerel direniş diplomasiye dönüştü; savaşın ana sonucu Batı Cephesi’nde düzenli ordu, savunma derinliği ve Büyük Taarruzla alındı.',
  }),

  'ataturk-donemi-ic-dis-politika': atlas('ataturk-donemi-ic-dis-politika', {
    title: 'Atatürk dönemi dış politika: Lozan sorunları ve güvenlik kuşağı',
    intro: 'Çözülemeyen sınır sorunlarıyla barış ve ittifak yoluyla kurulan güvenlik çevresini ayrı katmanlarda incele.',
    layers: [layer('lozan', 'Lozan’dan kalan sorunlar', 'Musul, Boğazlar ve Hatay.'), layer('balkan', 'Balkan Antantı', 'Batı sınırında bölgesel güvenlik.', false), layer('sadabat', 'Sadabat Paktı', 'Doğu ve güneydoğu komşularıyla güvenlik.', false)],
    regions: [region('BALKANLAR', 28, 18), region('KARADENİZ', 52, 25, 'water'), region('TÜRKİYE', 53, 51), region('ORTA DOĞU', 75, 75), region('AKDENİZ', 43, 83, 'water')],
    locations: [point('bogaz', 'Boğazlar', 44, 35, 'lozan', 'Montrö ile asker bulundurma ve geçiş denetiminde Türkiye’nin egemenliği güçlendi.'), point('musul', 'Musul', 78, 66, 'lozan', 'İngiltere ve Milletler Cemiyeti dengesi nedeniyle Irak’a bırakıldı.', 'danger'), point('hatay', 'Hatay', 53, 76, 'lozan', 'Diplomasi ve halkoyu süreciyle 1939’da Türkiye’ye katıldı.', 'accent'), point('atina', 'Yunanistan', 31, 45, 'balkan', 'Balkan Antantının üyelerinden.'), point('belgrad', 'Yugoslavya', 29, 23, 'balkan', 'Batı sınır güvenliği işbirliği.', 'aqua'), point('bukres', 'Romanya', 42, 15, 'balkan', 'Balkan statükosunu koruma ortaklığı.', 'aqua'), point('tahran', 'İran', 87, 61, 'sadabat', 'Sadabat Paktının doğu komşusu ve imza merkezi.', 'accent'), point('bagdat', 'Irak', 77, 72, 'sadabat', 'Sınır ve bölgesel güvenlik işbirliği.', 'accent'), point('kabil', 'Afganistan', 96, 70, 'sadabat', 'Sadabat Paktının doğu üyesi.', 'accent')],
    routes: [route('bogaz', 'bukres', 'Karadeniz–Balkan güvenliği', 'balkan', 'aqua'), route('atina', 'belgrad', 'Balkan Antantı bağı', 'balkan', 'aqua'), route('belgrad', 'bukres', 'Statükoyu koruma', 'balkan', 'aqua'), route('bagdat', 'tahran', 'Sadabat bölgesel işbirliği', 'sadabat', 'accent'), route('tahran', 'kabil', 'Doğu güvenlik kuşağı', 'sadabat', 'accent')],
    insight: '“Yurtta sulh, cihanda sulh” pasiflik değildir: Boğazlarda egemenlik, Hatay’da diplomasi, Balkanlar ve doğuda bölgesel paktlarla barışçı fakat güvenlik odaklı denge kuruldu.',
  }),

  'ikinci-dunya-savasi-ve-sonrasi': atlas('ikinci-dunya-savasi-ve-sonrasi', {
    title: 'II. Dünya Savaşı’nda Türkiye’nin denge konumu ve savaş sonrası yöneliş',
    intro: 'Türkiye’nin savaş dışı kalma diplomasisini, Boğazlar ve Sovyet baskısını, ardından Batı ittifakına katılım hattını incele.',
    layers: [layer('denge', 'Savaşta denge', 'Mihver ve Müttefik baskısı arasında Türkiye.'), layer('sovyet', 'Sovyet baskısı', 'Boğazlar ve doğu sınırı talepleri.', false), layer('bati', 'Batı ittifakı', 'Truman, Marshall, Kore ve NATO.', false)],
    regions: [region('AVRUPA', 19, 18), region('SSCB', 67, 8), region('KARADENİZ', 54, 32, 'water'), region('TÜRKİYE', 51, 53), region('ORTA DOĞU', 70, 78)],
    locations: [point('ankara', 'Ankara', 50, 51, 'denge', 'Savaş dışı kalmak için taraflarla denge antlaşmaları ve görüşmeler yürütüldü.'), point('berlin', 'Berlin', 17, 14, 'denge', 'Almanya Balkanlara ve Türkiye sınırına yaklaşarak baskı oluşturdu.', 'danger'), point('londra', 'Londra', 5, 13, 'denge', 'İngiltere Türkiye’nin Müttefikler yanında savaşa girmesini istedi.', 'aqua'), point('kahire', 'Kahire', 49, 86, 'denge', 'Müttefik liderlerin Türkiye’yi savaşa katma görüşmelerinin merkezlerinden.'), point('bogaz', 'Boğazlar', 45, 39, 'sovyet', 'Savaş sonrası Sovyet talepleri Türkiye’nin güvenlik kaygısını artırdı.', 'danger'), point('kars', 'Kars–Ardahan', 70, 46, 'sovyet', 'Sovyetlerin doğu sınırına ilişkin talepleri Batı’ya yönelişi hızlandırdı.', 'danger'), point('washington', 'ABD desteği', 2, 60, 'bati', 'Truman Doktrini ve Marshall yardımı siyasi-ekonomik yakınlaşma sağladı.', 'accent'), point('kore', 'Kore', 96, 54, 'bati', 'Türkiye’nin asker göndermesi NATO üyeliği sürecinde askerî katkı göstergesi oldu.', 'accent'), point('nato', 'NATO · 1952', 18, 29, 'bati', 'Türkiye Batı güvenlik sistemine resmen katıldı.', 'accent')],
    routes: [route('berlin', 'ankara', 'Mihver baskısı ve dostluk diplomasisi', 'denge', 'danger'), route('londra', 'ankara', 'Müttefiklerin savaşa katılma baskısı', 'denge', 'aqua'), route('ankara', 'kahire', 'Adana–Kahire görüşmeleri', 'denge'), route('bogaz', 'ankara', 'Sovyet güvenlik baskısı', 'sovyet', 'danger'), route('kars', 'ankara', 'Doğu sınırı talepleri', 'sovyet', 'danger'), route('washington', 'nato', 'Siyasi ve ekonomik yakınlaşma', 'bati', 'accent'), route('ankara', 'kore', 'Askerî katkı', 'bati', 'accent'), route('nato', 'ankara', 'İttifaka üyelik', 'bati', 'accent')],
    insight: 'Türkiye’nin savaş dışı kalışı coğrafi baskıdan uzaklık değil, iki blok arasında zaman kazanma siyasetidir. Savaş sonrası Sovyet talepleri güvenlik hesabını değiştirdi ve ABD desteği–Kore–NATO zincirini hızlandırdı.',
  }),
}
