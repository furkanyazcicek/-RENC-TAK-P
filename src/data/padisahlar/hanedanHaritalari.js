/**
 * DÖRDÜNCÜ PADİŞAHTAN SONRAKİ ŞEMATİK DÖNEM HARİTALARI
 *
 * Haritalar modern sınır iddiası taşımaz. Amaç, öğrencinin her saltanatı
 * imparatorluğun büyüme/daralma hikâyesindeki doğru aşamaya yerleştirmesidir.
 * Aynı siyasi coğrafyayı devralan kısa saltanatlar aynı dönem katmanını paylaşır.
 */

const ANADOLU = [[26.2, 41.1], [29.2, 41.3], [34.5, 42.0], [40.8, 40.4], [42.5, 37.7], [39.0, 35.8], [33.5, 35.5], [28.5, 36.2], [26.0, 38.4]]
const RUMELI = [[19.2, 44.8], [22.2, 45.8], [27.8, 45.2], [29.2, 42.0], [27.0, 40.0], [23.0, 39.4], [20.1, 41.2]]
const CEKIRDEK = [[26.0, 42.2], [30.0, 42.1], [35.0, 41.5], [37.8, 38.6], [35.5, 36.2], [29.0, 36.4], [25.2, 39.0]]
const BALKAN_DAR = [[21.0, 44.0], [24.0, 45.2], [28.6, 44.0], [29.3, 41.0], [26.5, 39.5], [22.5, 40.0]]
const BOGAZLAR = [[26.0, 42.2], [29.6, 42.1], [30.3, 40.3], [27.2, 39.7], [25.6, 40.6]]
const ISTANBUL = [[28.1, 41.7], [29.7, 41.7], [30.0, 40.5], [28.1, 40.4], [27.5, 41.0]]

const alan = (id, ad, tur, aciklama, kiyi, ince = false) => ({ id, ad, tur, aciklama, kiyi, ince })

function harita(baslik, okuma, osmanliAlanlari, ekAlanlar = [], isaretler = ['istanbul', 'edirne', 'bursa', 'konya']) {
  return {
    baslik,
    okuma,
    alanlar: [
      ...osmanliAlanlari.map((oge, sira) => alan(`osmanli-${sira + 1}`, oge.ad, 'osmanli', oge.aciklama, oge.kiyi, oge.ince)),
      ...ekAlanlar,
    ],
    isaretler,
  }
}

export const EK_DONEM_HARITALARI = {
  'bayezid-1402': harita(
    'Balkanlar ile Anadolu arasında hızlı genişleme',
    'I. Bayezid döneminin sonunda Osmanlı, Balkan vassalları ile Anadolu beyliklerini aynı siyasi merkez altında toplamaya yaklaşmıştı; Ankara yenilgisi bu bütünlüğü parçaladı.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Beyliklerin önemli bölümü yıldırım hızındaki seferlerle Osmanlı yönetimine alındı; doğu sınırı Ankara Savaşı öncesinde Timur nüfuzuyla karşılaştı.', kiyi: ANADOLU },
      { ad: 'Osmanlı — Rumeli', aciklama: 'Tuna’ya yaklaşan Balkan hâkimiyeti Niğbolu zaferiyle güçlendi; bazı bölgeler doğrudan, bazıları bağlı yönetim altındaydı.', kiyi: RUMELI },
    ],
    [alan('timur', 'Timur hâkimiyet alanı', 'rakip', 'Ankara Savaşı’nda Osmanlı ordusunu yenerek Anadolu’daki siyasi birliği dağıtan doğu gücü.', [[36.5, 42.0], [43.5, 43.0], [44.0, 35.0], [37.0, 35.0]])],
    ['edirne', 'bursa', 'ankara', 'konya', 'kosova']
  ),

  'mehmed-1421': harita(
    'Fetret’ten sonra yeniden birleşen devlet',
    'Çelebi Mehmed, 1402 sonrasında parçalanan Osmanlı ülkesini yeniden tek merkezde birleştirdi; bu yüzden “ikinci kurucu” olarak anılır.',
    [{ ad: 'Yeniden birleşen Osmanlı', aciklama: 'Rumeli çekirdeği ile Batı ve Orta Anadolu’daki Osmanlı toprakları yeniden aynı hükümdarın yönetiminde birleşti.', kiyi: CEKIRDEK }],
    [alan('karaman', 'Karamanoğulları', 'rakip', 'Anadolu birliği mücadelesindeki başlıca bağımsız rakip.', [[31.0, 39.2], [35.0, 39.0], [36.0, 36.2], [31.0, 36.0]])]
  ),

  'murad-1451': harita(
    'İstanbul çevresinde sıkılaşan Osmanlı kuşağı',
    'II. Murad’ın Varna ve II. Kosova zaferleri Balkan hâkimiyetini kalıcılaştırdı; Konstantinopolis artık Osmanlı topraklarının ortasında kalan bir ada görünümündeydi.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Batı ve Orta Anadolu’daki doğrudan Osmanlı yönetimi.', kiyi: CEKIRDEK },
      { ad: 'Osmanlı — Rumeli', aciklama: 'Varna ve II. Kosova sonrasında Balkan geçitlerini ve ana yolları denetleyen Osmanlı alanı.', kiyi: RUMELI },
    ],
    [alan('bizans', 'Bizans', 'bizans', 'Konstantinopolis ve yakın çevresine daralmış Bizans İmparatorluğu.', ISTANBUL, true)],
    ['edirne', 'bursa', 'konstantinopolis', 'kosova', 'selanik']
  ),

  'fatih-1481': harita(
    'İstanbul merkezli imparatorluk',
    'İstanbul’un fethi, Balkan ve Anadolu seferleri ile Karadeniz siyasetinin birleşmesi Osmanlı’yı bölgesel beylikten merkezî imparatorluğa dönüştürdü.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Karaman toprakları ve Karadeniz kıyılarındaki kazanımlarla Anadolu’daki merkezî denetim genişledi.', kiyi: ANADOLU },
      { ad: 'Osmanlı — Balkanlar', aciklama: 'Sırbistan, Mora, Bosna ve Arnavutluk yönündeki seferlerle Balkan hâkimiyeti genişledi.', kiyi: RUMELI },
    ],
    [],
    ['konstantinopolis', 'edirne', 'bursa', 'konya', 'selanik']
  ),

  'bayezid-1512': harita(
    'İmparatorluğun doğu ve batı sınavı',
    'II. Bayezid devrinde Osmanlı, Fatih’in geniş imparatorluğunu korurken Venedik’le deniz rekabeti ve doğuda Safevî etkisiyle karşılaştı.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Anadolu’nun büyük bölümünü kapsayan merkezî alan; doğuda Safevî nüfuzu yeni bir siyasi gerilim oluşturdu.', kiyi: ANADOLU },
      { ad: 'Osmanlı — Balkanlar', aciklama: 'Balkan eyaletleri ve Adriyatik’e yönelen deniz siyaseti.', kiyi: RUMELI },
    ]
  ),

  'selim-1520': harita(
    'Doğu ve güneyde büyük sıçrama',
    'Çaldıran’dan Mısır’ın fethine uzanan sekiz yıllık seferler, Osmanlı’nın doğu ve güney ufkunu değiştirdi; harita çekirdek coğrafyayı gösterir.',
    [
      { ad: 'Osmanlı — Anadolu ve doğu geçitleri', aciklama: 'Çaldıran sonrasında Doğu Anadolu’daki Osmanlı üstünlüğünü ve İran sınırına açılan geçitleri temsil eder.', kiyi: [[26.0, 41.5], [43.8, 42.0], [44.0, 35.0], [28.0, 35.0]] },
      { ad: 'Osmanlı — Balkanlar', aciklama: 'Yavuz devrinde korunarak Kanuni’ye devredilen Balkan çekirdeği.', kiyi: RUMELI },
    ],
    [],
    ['istanbul', 'edirne', 'konya', 'ankara']
  ),

  'kanuni-1566': harita(
    'Üç kıtaya yayılan imparatorluğun çekirdek görünümü',
    'Kanuni devrinde Orta Avrupa, Akdeniz, Irak ve Kuzey Afrika’ya uzanan imparatorluk en geniş etki alanlarından birine ulaştı; bu krokide Anadolu–Balkan çekirdeği gösterilir.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Irak ve doğu sınırına uzanan seferlerin dayandığı Anadolu eyaletleri.', kiyi: [[25.5, 42.0], [43.8, 42.5], [44.0, 34.5], [26.0, 34.5]] },
      { ad: 'Osmanlı — Balkanlar', aciklama: 'Belgrad ve Macaristan yönünde genişleyen, Tuna hattına dayanan Avrupa eyaletleri.', kiyi: [[18.5, 46.5], [29.5, 46.5], [29.8, 40.0], [21.0, 38.8], [18.0, 42.0]] },
    ],
    [],
    ['istanbul', 'edirne', 'bursa', 'konya', 'nis', 'sofya']
  ),

  'klasik-1648': harita(
    'Geniş imparatorluk, uzun cepheler',
    '16. yüzyıl sonundan 17. yüzyıl ortasına kadar Osmanlı geniş bir Anadolu–Balkan çekirdeğini korudu; uzun Avusturya ve Safevî savaşları kaynakları zorladı.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Safevî sınırına uzanan Anadolu eyaletleri ve doğu sefer yolları.', kiyi: ANADOLU },
      { ad: 'Osmanlı — Balkanlar', aciklama: 'Tuna ve Orta Avrupa yönündeki uzun savaşların dayandığı Rumeli eyaletleri.', kiyi: RUMELI },
    ]
  ),

  'koprulu-1687': harita(
    'Köprülüler devri ve İkinci Viyana eşiği',
    'Girit’in alınması ve Orta Avrupa seferleri genişlemeyi sürdürdü; 1683 sonrasında Kutsal İttifak savaşları uzun bir geri çekilme dönemini başlattı.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'İmparatorluğun insan ve vergi kaynağı olan Anadolu eyaletleri.', kiyi: ANADOLU },
      { ad: 'Osmanlı — Balkanlar', aciklama: '1683 öncesinde Orta Avrupa’ya uzanan, savaş sonrasında baskı altına giren geniş Rumeli alanı.', kiyi: RUMELI },
    ]
  ),

  'karlofca-1703': harita(
    'Karlofça sonrası daralan Avrupa sınırı',
    '1699 Karlofça Antlaşması, Osmanlı’nın Orta Avrupa’daki büyük toprak kayıplarını kabul ettiği dönüm noktası oldu.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Anadolu’daki merkezî alan büyük ölçüde korunurken savaşın ağırlığı Avrupa sınırındaydı.', kiyi: ANADOLU },
      { ad: 'Osmanlı — daralan Balkan alanı', aciklama: 'Macaristan’ın büyük bölümünün kaybından sonra Tuna’nın güneyine çekilen Avrupa sınırı.', kiyi: BALKAN_DAR },
    ]
  ),

  'lale-1757': harita(
    'Diplomasi ve savunma dengesi',
    '18. yüzyılın ilk yarısında Osmanlı, Avrupa’daki sınırlarını savaş kadar diplomasi ve teknik yenilenmeyle korumaya çalıştı.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Merkezî Anadolu alanı ve doğu sınırına uzanan eyaletler.', kiyi: ANADOLU },
      { ad: 'Osmanlı — Balkanlar', aciklama: 'Karlofça sonrası daralan fakat Belgrad Antlaşması’yla savunulan Balkan alanı.', kiyi: BALKAN_DAR },
    ]
  ),

  'nizam-1807': harita(
    'Kırım’ın kaybından Nizam-ı Cedid’e',
    'Rusya karşısındaki kayıplar Karadeniz dengesini değiştirdi; merkez, yeni ordu ve diplomasi kurumlarıyla sınırlarını korumaya çalıştı.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Anadolu merkezli doğrudan yönetim alanı.', kiyi: ANADOLU },
      { ad: 'Osmanlı — Balkanlar', aciklama: 'Milliyetçilik ve büyük güç rekabeti baskısı altındaki Balkan eyaletleri.', kiyi: BALKAN_DAR },
    ]
  ),

  'mahmud-1839': harita(
    'Merkezileşme ve ayrılık hareketleri',
    'Yunan bağımsızlığı ve Mısır meselesi imparatorluğun alanını daraltırken II. Mahmud merkezî yönetimi yeniden kurmaya çalıştı.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Merkezî reformların dayandığı Anadolu alanı; doğu ve güneyde valilerle merkez arasındaki gerilim sürüyordu.', kiyi: ANADOLU },
      { ad: 'Osmanlı — Balkanlar', aciklama: 'Yunanistan’ın ayrılmasından sonra kalan Balkan eyaletleri; özerklik hareketleriyle çevrelenmişti.', kiyi: BALKAN_DAR },
    ]
  ),

  'tanzimat-1876': harita(
    'Tanzimat imparatorluğu',
    'Tanzimat ve Islahat fermanları ortak vatandaşlık ve merkezî hukuk hedefi kurarken Balkan milliyetçilikleri ve dış borç baskısı büyüdü.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Tanzimat kurumlarının taşraya yayılmaya çalışıldığı Anadolu eyaletleri.', kiyi: ANADOLU },
      { ad: 'Osmanlı — Balkanlar', aciklama: 'Özerk prenslikler ve milliyetçi hareketler arasında daralan Avrupa toprakları.', kiyi: BALKAN_DAR },
    ]
  ),

  'mesrutiyet-1909': harita(
    '93 Harbi sonrası imparatorluk',
    'Berlin Antlaşması sonrasında Balkan alanı belirgin biçimde daraldı; II. Abdülhamid merkezi eğitim, haberleşme ve demiryolu ağlarıyla güçlendirmeye çalıştı.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'İmparatorluğun merkezî kara çekirdeği ve reform ağlarının ana sahası.', kiyi: ANADOLU },
      { ad: 'Osmanlı — sınırlı Balkan alanı', aciklama: 'Makedonya, Arnavutluk ve Trakya çevresinde kalan Avrupa toprakları.', kiyi: [[20.0, 42.8], [24.5, 43.4], [29.0, 42.2], [28.2, 39.7], [22.0, 39.5]] },
    ]
  ),

  'resad-1918': harita(
    'Balkan Savaşları ve Dünya Savaşı sonrası',
    'Balkan Savaşları Avrupa topraklarını Doğu Trakya’ya kadar daralttı; Birinci Dünya Savaşı sonunda Arap vilayetleri de Osmanlı denetiminden çıktı.',
    [
      { ad: 'Osmanlı — Anadolu', aciklama: 'Savaşın sonunda işgal tehdidi altındaki Anadolu çekirdeği.', kiyi: ANADOLU },
      { ad: 'Osmanlı — Doğu Trakya', aciklama: 'Balkan Savaşları sonrasında Avrupa’da kalan ana doğrudan yönetim alanı.', kiyi: BOGAZLAR, ince: true },
    ],
    [],
    ['istanbul', 'edirne', 'ankara', 'konya']
  ),

  'vahdeddin-1922': harita(
    'Saltanatın sonu: iki siyasi merkez',
    'İstanbul’daki Osmanlı hükümeti işgal koşullarında hareket ederken Ankara’daki TBMM Millî Mücadele’yi yönetti; 1 Kasım 1922’de saltanat kaldırıldı.',
    [{ ad: 'İstanbul hükümetinin fiilî alanı', aciklama: 'İtilaf Devletleri işgali altındaki başkent çevresinde sınırlı Osmanlı hükümeti otoritesi.', kiyi: ISTANBUL, ince: true }],
    [alan('tbmm', 'Ankara merkezli Millî Mücadele', 'rakip', '23 Nisan 1920’de açılan TBMM’nin yönettiği ve askerî mücadeleyle genişleyen millî egemenlik alanı.', ANADOLU)],
    ['istanbul', 'ankara', 'edirne']
  ),
}
