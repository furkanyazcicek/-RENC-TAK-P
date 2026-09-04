/**
 * DİL KARTLARI — DESTE KAYIT DEFTERİ (İngilizce)
 * ==================================================================
 *
 * Kartlar müfredattan BAĞIMSIZ bir kanaldır ve bu bilinçlidir.
 *
 * Müfredat (kelime/ klasörü) SEVİYEYE göre ilerler: A1 öğrencisi A1
 * kelimesi görür, sırayı motor belirler. Kartlar ise İLGİYE göre
 * seçilir: futbol seven öğrenci futbol destesini açar, sırayı kendi
 * belirler. İkisi aynı havuzdan beslenseydi ya müfredat bozulur ya da
 * desteler yapay kalırdı.
 *
 * NEDEN İLGİ ALANI: kelime ezberi, ilgi duyulmayan bir alanda iki kat
 * yavaş ilerler. Öğrenci zaten futbol izliyorsa "kelime" kelimesini
 * ertesi gün duyar ve kart kendiliğinden pekişir. Ders kitabı sırası
 * bunu yapamaz.
 *
 * Yeni deste eklemek: dosyayı `kartlar/` altına yaz, aşağıdaki listeye
 * ekle. Hiçbir ekran dosyası değişmez.
 */

import futbolSpor from './futbol-spor.js'
import muzikDizi from './muzik-dizi.js'
import oyunTeknoloji from './oyun-teknoloji.js'
import yemek from './yemek.js'
import seyahat from './seyahat.js'
import okulArkadaslik from './okul-arkadaslik.js'
import gunlukKonusma from './gunluk-konusma.js'
import hayvanlarDoga from './hayvanlar-doga.js'

/** Desteler ekranda bu sırayla görünür. */
export const DESTELER = [
  futbolSpor,
  muzikDizi,
  oyunTeknoloji,
  yemek,
  seyahat,
  okulArkadaslik,
  gunlukKonusma,
  hayvanlarDoga,
]

/** Bütün kartlar tek düzlemde — arama ve sayım için. */
export const KART_HAVUZU = DESTELER.flatMap((d) =>
  d.kartlar.map((k) => ({ ...k, desteId: d.id, desteAd: d.ad })))

export function desteBul(id) {
  return DESTELER.find((d) => d.id === id) ?? null
}

export function kartBul(id) {
  return KART_HAVUZU.find((k) => k.id === id) ?? null
}
