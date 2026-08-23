/**
 * Osmanlı taşra teşkilatı — eyaletler (beylerbeylikler).
 *
 * Sınırlar nasıl üretiliyor:
 *   Tarihsel eyalet sınırlarının kesin koordinatları hiçbir açık veri
 *   setinde yok. Bunun yerine her eyaletin gerçek merkez ve ağırlık
 *   noktaları giriliyor; üretim betiği bu noktalardan en yakın komşu
 *   bölgeleri hesaplayıp Osmanlı'nın o dönemki sınırıyla kesiyor.
 *
 *   Sonuç: merkezler doğru, bölge dağılımı kabaca doğru, sınır çizgileri
 *   yaklaşık. Öğrenciye "Osmanlı eyaletlere bölünmüştü, Konya Karaman'ın
 *   merkeziydi" bilgisini vermek için yeterli; kadastro hassasiyeti iddia
 *   edilmiyor ve arayüzde bu açıkça yazıyor.
 *
 * Her eyalet:
 *   ad        → Osmanlı kaynaklarındaki adı
 *   merkez    → yönetim merkezi (bugünkü adıyla birlikte)
 *   kurulus   → beylerbeylik olarak örgütlendiği yıl
 *   bitis     → Osmanlı yönetiminden çıktığı yıl (yoksa 1699)
 *   not       → müfredat açısından bilinmesi gereken
 *   cekirdek  → [boylam, enlem] noktaları; eyaletin ağırlık merkezleri.
 *               Birden fazla nokta, eyaletin daha geniş alan almasını sağlar.
 */

export const EYALET_DONEMI = { baslangic: 1590, bitis: 1699 }

export const EYALETLER = [
  // ————— Rumeli tarafı —————
  {
    ad: 'Rumeli',
    merkez: 'Sofya',
    kurulus: 1362,
    not: 'İlk kurulan beylerbeylik. Balkanların tamamını kapsardı; Osmanlı’nın Avrupa’daki gücünün merkeziydi.',
    cekirdek: [[23.3, 42.7], [21.4, 42.0], [22.9, 40.6], [25.9, 41.4], [20.8, 40.6], [26.5, 42.9]],
  },
  {
    ad: 'Budin',
    merkez: 'Budin (Budapeşte)',
    kurulus: 1541,
    not: 'Mohaç’ın ardından Macaristan’ın Osmanlı’ya bağlanan bölümünde kuruldu. Karlofça ile kaybedildi.',
    cekirdek: [[19.0, 47.0], [18.0, 46.2], [20.1, 46.5]],
  },
  {
    ad: 'Temeşvar',
    merkez: 'Temeşvar (Timișoara)',
    kurulus: 1552,
    not: 'Budin’in doğu kanadını korumak için kuruldu.',
    cekirdek: [[21.2, 45.7], [22.2, 45.9]],
  },
  {
    ad: 'Bosna',
    merkez: 'Saraybosna',
    kurulus: 1580,
    not: 'Önce Rumeli’ye bağlı sancaktı; sınır boyu önem kazanınca eyalet oldu.',
    cekirdek: [[18.4, 43.9], [17.2, 44.6], [18.8, 42.9]],
  },
  {
    ad: 'Cezayir-i Bahr-i Sefid',
    merkez: 'Gelibolu',
    kurulus: 1533,
    not: 'Kaptan-ı Derya’nın eyaleti. Ege adaları ve kıyıların donanma yönetimindeki bölgesiydi.',
    cekirdek: [[26.4, 40.2], [25.3, 37.4], [27.3, 36.9], [23.6, 38.3]],
  },
  {
    ad: 'Kefe',
    merkez: 'Kefe (Feodosiya)',
    kurulus: 1475,
    not: 'Kırım Hanlığı Osmanlı’ya bağlandıktan sonra kıyı şeridi doğrudan yönetildi.',
    cekirdek: [[35.4, 45.0], [33.6, 44.8]],
  },
  {
    ad: 'Kıbrıs',
    merkez: 'Lefkoşa',
    kurulus: 1571,
    not: 'Venedik’ten alındıktan sonra eyalet yapıldı; Anadolu’dan Türk nüfus yerleştirildi.',
    cekirdek: [[33.4, 35.1]],
  },

  // ————— Anadolu —————
  {
    ad: 'Anadolu',
    merkez: 'Kütahya',
    kurulus: 1393,
    not: 'Anadolu’daki ilk beylerbeylik. Batı Anadolu’nun tamamını kapsardı.',
    cekirdek: [[29.9, 39.4], [28.0, 38.4], [30.6, 37.8], [31.2, 40.2], [27.6, 40.1]],
  },
  {
    ad: 'Karaman',
    merkez: 'Konya',
    kurulus: 1468,
    not: 'Karamanoğulları Beyliği alındıktan sonra kuruldu. İç Anadolu’nun güneyi.',
    cekirdek: [[32.5, 37.9], [34.0, 37.2], [33.3, 38.9]],
  },
  {
    ad: 'Rum',
    merkez: 'Sivas',
    kurulus: 1413,
    not: 'Orta ve Kuzey Anadolu. Kaynaklarda “Rum eyaleti” ya da “Sivas eyaleti” diye geçer.',
    cekirdek: [[37.0, 39.7], [35.8, 40.6], [38.3, 38.9], [35.5, 38.9]],
  },
  {
    ad: 'Trabzon',
    merkez: 'Trabzon',
    kurulus: 1461,
    not: 'Trabzon Rum İmparatorluğu’na son verildikten sonra kuruldu. Karadeniz ticaretinin kapısı.',
    cekirdek: [[39.7, 40.9], [37.9, 41.2], [41.3, 41.0]],
  },
  {
    ad: 'Erzurum',
    merkez: 'Erzurum',
    kurulus: 1533,
    not: 'Safevi sınırının kilit noktası. Doğu seferlerinin toplanma yeriydi.',
    cekirdek: [[41.3, 39.9], [42.8, 40.2], [40.3, 39.2]],
  },
  {
    ad: 'Van',
    merkez: 'Van',
    kurulus: 1548,
    not: 'Safevilerden alındıktan sonra kuruldu; doğu sınırının ileri karakolu.',
    cekirdek: [[43.3, 38.4], [42.5, 37.9]],
  },

  // ————— Kafkasya ve İran cephesi —————
  // 1578–1590 Osmanlı-Safevi savaşları sonunda kuruldu; 1603–1612 arasında
  // büyük bölümü geri kaybedildi. Müfredatta "Osmanlı-Safevi mücadelesi"
  // başlığı altında geçer.
  {
    ad: 'Çıldır',
    merkez: 'Ahıska',
    kurulus: 1578,
    not: 'Gürcistan seferlerinin ardından kuruldu; Kafkas geçitlerini tutardı.',
    cekirdek: [[42.7, 41.6], [41.8, 41.3]],
  },
  {
    ad: 'Kars',
    merkez: 'Kars',
    kurulus: 1580,
    not: 'İran seferlerinde ordunun toplanma ve ikmal noktasıydı.',
    cekirdek: [[43.1, 40.6]],
  },
  {
    ad: 'Revan',
    merkez: 'Revan (Erivan)',
    kurulus: 1583,
    not: 'Safevilerden alındı, 1604’te geri kaybedildi. Sık el değiştiren sınır eyaleti.',
    cekirdek: [[44.5, 40.2]],
  },
  {
    ad: 'Gence',
    merkez: 'Gence',
    kurulus: 1588,
    not: 'Karabağ bölgesini kapsardı; Ferhat Paşa Antlaşması ile Osmanlı’ya bırakıldı.',
    cekirdek: [[46.4, 40.7]],
  },
  {
    ad: 'Şirvan',
    merkez: 'Şamahı',
    kurulus: 1578,
    not: 'Hazar kıyısına ulaşan eyalet. İpek üretimiyle ünlüydü.',
    cekirdek: [[48.6, 40.6], [47.6, 41.2]],
  },
  {
    ad: 'Tebriz',
    merkez: 'Tebriz',
    kurulus: 1585,
    not: 'Safevi başkenti alındığında kuruldu; 1603’te geri kaybedildi.',
    cekirdek: [[46.3, 38.1], [45.2, 37.5]],
  },

  {
    ad: 'Silistre (Özi)',
    merkez: 'Silistre',
    kurulus: 1593,
    not: 'Karadeniz’in batı kıyısı ve Tuna ağzı. Kırım ile bağlantıyı sağlardı.',
    cekirdek: [[27.9, 44.1], [30.5, 46.0]],
  },
  {
    ad: 'Diyarbekir',
    merkez: 'Diyarbakır',
    kurulus: 1515,
    not: 'Çaldıran’ın ardından kuruldu; Doğu ve Güneydoğu Anadolu’nun yönetim merkezi.',
    cekirdek: [[40.2, 37.9], [38.8, 37.5], [41.5, 37.2], [39.5, 36.9]],
  },
  {
    ad: 'Maraş (Zülkadriye)',
    merkez: 'Maraş',
    kurulus: 1522,
    not: 'Dulkadiroğulları Beyliği’nin toprakları üzerinde kuruldu.',
    cekirdek: [[36.9, 37.6], [36.2, 38.3]],
  },

  // ————— Arap eyaletleri —————
  {
    ad: 'Halep',
    merkez: 'Halep',
    kurulus: 1516,
    not: 'Mercidabık’tan sonra alındı. İpek Yolu’nun Akdeniz’e açılan büyük ticaret şehri.',
    cekirdek: [[37.2, 36.2], [38.4, 35.7], [36.2, 35.5]],
  },
  {
    ad: 'Şam',
    merkez: 'Şam',
    kurulus: 1516,
    not: 'Hac yolunun düzeni ve güvenliği bu eyaletin sorumluluğundaydı.',
    cekirdek: [[36.3, 33.5], [37.5, 32.6], [35.6, 32.2], [36.8, 34.4]],
  },
  {
    ad: 'Trablusşam',
    merkez: 'Trablusşam (Trablus)',
    kurulus: 1579,
    not: 'Doğu Akdeniz kıyı şeridinin ayrı yönetilmesi için Şam’dan ayrıldı.',
    cekirdek: [[35.9, 34.6]],
  },
  {
    ad: 'Mısır',
    merkez: 'Kahire',
    kurulus: 1517,
    not: 'Memlükler yıkıldıktan sonra kuruldu. En zengin eyaletti; hazineye en çok geliri o gönderirdi.',
    cekirdek: [[31.2, 30.0], [31.4, 27.5], [33.5, 26.0], [29.0, 28.5], [27.0, 26.0], [33.9, 24.0]],
  },
  {
    ad: 'Bağdat',
    merkez: 'Bağdat',
    kurulus: 1535,
    not: 'Kanuni’nin Irakeyn Seferi ile alındı. Safevilerle uzun süre el değiştirdi.',
    cekirdek: [[44.4, 33.3], [43.3, 34.2], [45.5, 32.6]],
  },
  {
    ad: 'Basra',
    merkez: 'Basra',
    kurulus: 1546,
    not: 'Basra Körfezi’ne çıkışı sağladı; Portekiz’e karşı deniz üssü oldu.',
    cekirdek: [[47.5, 30.5], [46.3, 31.3]],
  },
  {
    ad: 'Musul',
    merkez: 'Musul',
    kurulus: 1535,
    not: 'Bağdat ile Diyarbekir arasındaki bağlantıyı sağlardı.',
    cekirdek: [[43.1, 36.3], [42.3, 35.5]],
  },
  {
    ad: 'Şehrizor',
    merkez: 'Kerkük',
    kurulus: 1554,
    not: 'Safevi sınırındaki dağlık bölgeyi denetlemek için kuruldu.',
    cekirdek: [[44.6, 35.5], [45.6, 35.0]],
  },
  {
    ad: 'Lahsa',
    merkez: 'Lahsa (Hufûf)',
    kurulus: 1555,
    not: 'Basra Körfezi’nin Arabistan kıyısı; Portekiz’e karşı ileri mevzi.',
    cekirdek: [[49.6, 25.4], [48.5, 27.5]],
  },
  {
    ad: 'Yemen',
    merkez: 'Sana',
    kurulus: 1538,
    not: 'Kızıldeniz ve Hint Okyanusu ticaret yolunun güney kapısı.',
    cekirdek: [[44.2, 15.4], [45.8, 14.0], [43.2, 17.0]],
  },
  {
    ad: 'Habeş',
    merkez: 'Sevakin',
    kurulus: 1555,
    not: 'Kızıldeniz’in Afrika kıyısı. Portekiz’in bölgeye girmesini engellemek için kuruldu.',
    cekirdek: [[37.3, 19.1], [39.0, 15.6], [35.5, 21.5]],
  },

  // ————— Kuzey Afrika (Garp Ocakları) —————
  {
    ad: 'Cezayir-i Garp',
    merkez: 'Cezayir',
    kurulus: 1519,
    not: 'Barbaros Hayreddin Paşa’nın Osmanlı’ya bağlanmasıyla kuruldu. Akdeniz’de donanma üssü.',
    cekirdek: [[3.1, 36.7], [0.5, 35.5], [5.5, 36.0], [2.0, 33.0]],
  },
  {
    ad: 'Trablusgarp',
    merkez: 'Trablus',
    kurulus: 1551,
    not: 'Turgut Reis’in fethiyle alındı. Orta Akdeniz’in denetimi için önemliydi.',
    cekirdek: [[13.2, 32.9], [15.5, 31.5], [20.0, 32.1], [11.0, 30.0]],
  },
  {
    ad: 'Tunus',
    merkez: 'Tunus',
    kurulus: 1574,
    not: 'İspanya’dan alındı. Akdeniz’de İspanyol üstünlüğüne son veren adımlardan biriydi.',
    cekirdek: [[10.2, 36.8], [9.3, 35.0], [10.6, 33.8]],
  },
]
