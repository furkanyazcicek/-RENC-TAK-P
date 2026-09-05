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

/**
 * MODÜL → DESTE KÖPRÜSÜ
 *
 * Desteler müfredattan bağımsızdır ve öyle kalmalıdır (yukarıdaki nota
 * bakınız). Ama öğrenci bir dersi bitirdiğinde, o dersin konusuyla
 * ilgilenen destenin varlığından haberdar olmalı; yoksa kartlar ayrı bir
 * sekmede durur ve hiç açılmaz. Bu eşleme YALNIZCA bir öneri köprüsüdür:
 * dersin içeriğini belirlemez, sadece "bu konuyu sevdiysen şu desteye de
 * bak" der.
 */
const MODUL_DESTE = {
  'prea1-m1': 'gunluk-konusma',
  'prea1-m2': 'gunluk-konusma',
  'a1-m1': 'gunluk-konusma',
  'a1-m2': 'okul-arkadaslik',
  'a1-m3': 'gunluk-konusma',
  'a1-m4': 'okul-arkadaslik',
  'a1-m5': 'yemek',
  'a1-m6': 'seyahat',
  'a2-m1': 'seyahat',
  'a2-m2': 'gunluk-konusma',
  'a2-m3': 'gunluk-konusma',
  'a2-m4': 'seyahat',
}

/** Bir modülün konusuna en yakın deste. Eşleşme yoksa günlük konuşma. */
export function modulDestesi(modulId) {
  return desteBul(MODUL_DESTE[modulId] ?? 'gunluk-konusma')
}
