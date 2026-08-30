/**
 * Müfredatın kilit tarihleri.
 *
 * Zaman çizelgesinde işaret olarak görünür; öğrenci yıl aramak yerine
 * olayın adına dokunarak o döneme gider.
 *
 * kademe → çizelgede hangi satırda görüneceği (üst üste binmesin diye)
 */

export const KILIT_TARIHLER = [
  { yil: 552, ad: 'I. Göktürk Kağanlığı', ozet: 'Bumin Kağan önderliğinde Göktürk siyasî birliği kuruldu.', kademe: 0 },
  { yil: 682, ad: 'II. Göktürk Kağanlığı', ozet: 'Kutluk Kağan döneminde Göktürk egemenliği yeniden kuruldu.', kademe: 1 },
  { yil: 744, ad: 'Uygur Kağanlığı', ozet: 'Uygur Kağanlığı Orhun havzasında yükseldi.', kademe: 0 },
  { yil: 840, ad: 'Uygur Kağanlığı’nın sonu', ozet: 'Orhun merkezli kağanlık dağıldı; Uygur toplulukları farklı bölgelere yöneldi.', kademe: 1 },
  { yil: 1040, ad: 'Dandanakan Savaşı', ozet: 'Büyük Selçuklu Devleti bağımsız siyasî güç olarak yükseldi.', kademe: 0 },
  { yil: 1071, ad: 'Malazgirt Savaşı', ozet: 'Anadolu\'nun kapıları Türklere açıldı.', kademe: 0 },
  { yil: 1176, ad: 'Miryokefalon Savaşı', ozet: 'Anadolu\'nun Türk yurdu olduğu kesinleşti.', kademe: 1 },
  { yil: 1243, ad: 'Kösedağ Savaşı', ozet: 'Anadolu Selçuklu, İlhanlı egemenliğine girdi.', kademe: 0 },
  { yil: 1299, ad: 'Osmanlı\'nın kuruluşu', ozet: 'Osman Bey Söğüt\'te beyliğini ilan etti.', kademe: 1 },
  { yil: 1354, ad: 'Rumeli\'ye geçiş', ozet: 'Çimpe Kalesi alındı, Balkanlara ilk adım.', kademe: 0 },
  { yil: 1402, ad: 'Ankara Savaşı', ozet: 'Timur galip geldi, Fetret Devri başladı.', kademe: 1 },
  { yil: 1453, ad: 'İstanbul\'un Fethi', ozet: 'Bizans sona erdi, Yükselme Devri başladı.', kademe: 0 },
  { yil: 1514, ad: 'Çaldıran Savaşı', ozet: 'Safevilere karşı kazanıldı, Doğu Anadolu alındı.', kademe: 1 },
  { yil: 1517, ad: 'Mısır\'ın Fethi', ozet: 'Memlükler yıkıldı, halifelik Osmanlı\'ya geçti.', kademe: 0 },
  { yil: 1526, ad: 'Mohaç Meydan Savaşı', ozet: 'Macaristan Osmanlı denetimine girdi.', kademe: 1 },
  { yil: 1529, ad: 'I. Viyana Kuşatması', ozet: 'Kuşatma sonuçsuz kaldı.', kademe: 0 },
  { yil: 1571, ad: 'İnebahtı Deniz Savaşı', ozet: 'Osmanlı donanması yakıldı, bir yılda yenilendi.', kademe: 1 },
  { yil: 1683, ad: 'II. Viyana Kuşatması', ozet: 'Bozgunla bitti, Gerileme Devri başladı.', kademe: 0 },
  { yil: 1699, ad: 'Karlofça Antlaşması', ozet: 'İlk büyük toprak kaybı yaşandı.', kademe: 1 },
  { yil: 1718, ad: 'Pasarofça Antlaşması', ozet: 'Lale Devri başladı.', kademe: 0 },
  { yil: 1774, ad: 'Küçük Kaynarca Antlaşması', ozet: 'Kırım bağımsız oldu, Rusya güçlendi.', kademe: 1 },
  { yil: 1826, ad: 'Yeniçeri Ocağı kaldırıldı', ozet: 'Vaka-i Hayriye ile ordu yenilendi.', kademe: 0 },
  { yil: 1839, ad: 'Tanzimat Fermanı', ozet: 'Hukuk ve yönetimde batılılaşma dönemi.', kademe: 1 },
  { yil: 1877, ad: '93 Harbi', ozet: 'Osmanlı-Rus Savaşı, Balkanlarda büyük kayıp.', kademe: 0 },
  { yil: 1912, ad: 'Balkan Savaşları', ozet: 'Balkanlardaki topraklar büyük ölçüde kaybedildi.', kademe: 1 },
  { yil: 1914, ad: 'I. Dünya Savaşı', ozet: 'Osmanlı savaşa girdi.', kademe: 0 },
  { yil: 1919, ad: 'Millî Mücadele başladı', ozet: 'Mustafa Kemal Samsun\'a çıktı.', kademe: 1 },
  { yil: 1923, ad: 'Cumhuriyet\'in ilanı', ozet: 'Türkiye Cumhuriyeti kuruldu.', kademe: 0 },
  { yil: 1938, ad: 'Atatürk\'ün vefatı', ozet: 'İsmet İnönü cumhurbaşkanı oldu.', kademe: 1 },
]

/** Seçilen yıla en yakın kilit tarihi bulur (30 yıl içinde). */
export function yakinKilitTarih(yil) {
  let enYakin = null
  let enKucukFark = 31
  for (const olay of KILIT_TARIHLER) {
    const fark = Math.abs(olay.yil - yil)
    if (fark < enKucukFark) { enKucukFark = fark; enYakin = olay }
  }
  return enYakin
}
