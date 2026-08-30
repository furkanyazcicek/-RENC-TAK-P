/**
 * OSMANLI HANEDANI — KRONOLOJİ OMURGASI
 * ==================================================================
 *
 * Zaman çizelgesinin omurgası. 36 padişahın tamamı buradadır; çünkü
 * hükümdarlık süresinin GÖRSEL uzunluğu ancak bütün silsile bilinirse
 * doğru ölçeklenir. Gold Standard sürümünde yalnızca `hazir: true`
 * olanların tam içeriği vardır; kalanlar çizelgede soluk görünür ve
 * "içeriği hazırlanıyor" olarak işaretlenir.
 *
 * Tarihler tahta çıkış–tahttan iniş yıllarıdır. İki kez tahta çıkanlar
 * (I. Mustafa, II. Murad, Fatih) `araVerdi` alanıyla işaretlidir;
 * çizelge bunları tek bir blok olarak çizer, kartında ayrıntı verir.
 *
 * Fetret Devri bir padişah değildir; `tur: 'kesinti'` ile çizelgeye
 * girer. Bu ayrım bilinçlidir — öğrencinin en sık karıştırdığı yer.
 */

export const KRONOLOJI = [
  { id: 'osman-gazi', order: 1, ad: 'Osman Gazi', unvan: 'Kurucu', bas: 1299, bit: 1324, bitMetin: '1324/1326', hazir: true },
  { id: 'orhan-gazi', order: 2, ad: 'Orhan Gazi', unvan: 'Devletin kurucusu', bas: 1324, bit: 1362, basMetin: '1324/1326', hazir: true },
  { id: 'birinci-murad', order: 3, ad: 'I. Murad', unvan: 'Hüdavendigâr', bas: 1362, bit: 1389, hazir: true },
  { id: 'yildirim-bayezid', order: 4, ad: 'I. Bayezid', unvan: 'Yıldırım', bas: 1389, bit: 1402, hazir: true },
  { id: 'fetret-devri', tur: 'kesinti', ad: 'Fetret Devri', unvan: 'Taht mücadelesi', bas: 1402, bit: 1413 },
  { id: 'celebi-mehmed', order: 5, ad: 'I. Mehmed', unvan: 'Çelebi', bas: 1413, bit: 1421, hazir: true },
  { id: 'ikinci-murad', order: 6, ad: 'II. Murad', bas: 1421, bit: 1451, araVerdi: '1444–1446 arasında tahtı oğlu II. Mehmed’e bıraktı', hazir: true },
  { id: 'fatih-sultan-mehmed', order: 7, ad: 'II. Mehmed', unvan: 'Fatih', bas: 1444, bit: 1481, araVerdi: '1444–1446 ilk saltanatı; ikinci saltanatı 1451’de başladı', hazir: true },
  { id: 'ikinci-bayezid', order: 8, ad: 'II. Bayezid', unvan: 'Velî', bas: 1481, bit: 1512, hazir: true },
  { id: 'yavuz-sultan-selim', order: 9, ad: 'I. Selim', unvan: 'Yavuz', bas: 1512, bit: 1520, hazir: true },
  { id: 'kanuni-sultan-suleyman', order: 10, ad: 'I. Süleyman', unvan: 'Kanuni', bas: 1520, bit: 1566, hazir: true },
  { id: 'ikinci-selim', order: 11, ad: 'II. Selim', bas: 1566, bit: 1574, hazir: true },
  { id: 'ucuncu-murad', order: 12, ad: 'III. Murad', bas: 1574, bit: 1595, hazir: true },
  { id: 'ucuncu-mehmed', order: 13, ad: 'III. Mehmed', bas: 1595, bit: 1603, hazir: true },
  { id: 'birinci-ahmed', order: 14, ad: 'I. Ahmed', bas: 1603, bit: 1617, hazir: true },
  { id: 'birinci-mustafa', order: 15, ad: 'I. Mustafa', bas: 1617, bit: 1623, araVerdi: '1617–1618 ve 1622–1623 olmak üzere iki kez tahta çıktı', hazir: true },
  { id: 'genc-osman', order: 16, ad: 'II. Osman', unvan: 'Genç', bas: 1618, bit: 1622, hazir: true },
  { id: 'dorduncu-murad', order: 17, ad: 'IV. Murad', bas: 1623, bit: 1640, hazir: true },
  { id: 'sultan-ibrahim', order: 18, ad: 'İbrahim', bas: 1640, bit: 1648, hazir: true },
  { id: 'dorduncu-mehmed', order: 19, ad: 'IV. Mehmed', unvan: 'Avcı', bas: 1648, bit: 1687, hazir: true },
  { id: 'ikinci-suleyman', order: 20, ad: 'II. Süleyman', bas: 1687, bit: 1691, hazir: true },
  { id: 'ikinci-ahmed', order: 21, ad: 'II. Ahmed', bas: 1691, bit: 1695, hazir: true },
  { id: 'ikinci-mustafa', order: 22, ad: 'II. Mustafa', bas: 1695, bit: 1703, hazir: true },
  { id: 'ucuncu-ahmed', order: 23, ad: 'III. Ahmed', bas: 1703, bit: 1730, hazir: true },
  { id: 'birinci-mahmud', order: 24, ad: 'I. Mahmud', bas: 1730, bit: 1754, hazir: true },
  { id: 'ucuncu-osman', order: 25, ad: 'III. Osman', bas: 1754, bit: 1757, hazir: true },
  { id: 'ucuncu-mustafa', order: 26, ad: 'III. Mustafa', bas: 1757, bit: 1774, hazir: true },
  { id: 'birinci-abdulhamid', order: 27, ad: 'I. Abdülhamid', bas: 1774, bit: 1789, hazir: true },
  { id: 'ucuncu-selim', order: 28, ad: 'III. Selim', bas: 1789, bit: 1807, hazir: true },
  { id: 'dorduncu-mustafa', order: 29, ad: 'IV. Mustafa', bas: 1807, bit: 1808, hazir: true },
  { id: 'ikinci-mahmud', order: 30, ad: 'II. Mahmud', bas: 1808, bit: 1839, hazir: true },
  { id: 'abdulmecid', order: 31, ad: 'Abdülmecid', bas: 1839, bit: 1861, hazir: true },
  { id: 'abdulaziz', order: 32, ad: 'Abdülaziz', bas: 1861, bit: 1876, hazir: true },
  { id: 'besinci-murad', order: 33, ad: 'V. Murad', bas: 1876, bit: 1876, kisaSaltanat: 'Mayıs–Ağustos 1876', hazir: true },
  { id: 'ikinci-abdulhamid', order: 34, ad: 'II. Abdülhamid', bas: 1876, bit: 1909, hazir: true },
  { id: 'besinci-mehmed', order: 35, ad: 'V. Mehmed', unvan: 'Reşad', bas: 1909, bit: 1918, hazir: true },
  { id: 'altinci-mehmed', order: 36, ad: 'VI. Mehmed', unvan: 'Vahdettin', bas: 1918, bit: 1922, hazir: true },
]

/** İçeriği tamamlanmış padişahların kimlikleri — sıraya sadık. */
export const HAZIR_KIMLIKLER = KRONOLOJI.filter((k) => k.hazir).map((k) => k.id)

/** Çizelgenin gösterdiği aralık: hazır bölüm + hemen ardından gelen bir soluk halka. */
export function cizelgeAraligi(kuyrukAdedi = 2) {
  let sonHazirSira = -1
  KRONOLOJI.forEach((kayit, sira) => { if (kayit.hazir) sonHazirSira = sira })
  return KRONOLOJI.slice(0, sonHazirSira + 1 + kuyrukAdedi)
}

/** Hükümdarlık süresi — çizelgede görsel uzunluk buradan gelir. */
export function saltanatSuresi(kayit) {
  return Math.max(1, kayit.bit - kayit.bas)
}

export function kronolojiKaydi(id) {
  return KRONOLOJI.find((k) => k.id === id) ?? null
}
