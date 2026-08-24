/**
 * SES ÜRETİMİ ORTAK YARDIMCILARI
 * ==================================================================
 * Hem ders hem padişah ses üreticisi aynı iki işi yapar: üretilen mp3'ün
 * uzunluğunu ölçmek ve anahtarları `.env.local` dosyasından ortama almak.
 * Aynı kodun iki yerde durması, birinde düzeltilen hatanın diğerinde
 * kalmasına yol açardı; bu yüzden tek dosyada tutulur.
 */
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'

/**
 * MP3 süresini çerçeve başlıklarından hesaplar. ffmpeg gibi bir dış araca
 * bağımlı olmamak için: kurulum gerektiren bir adım, bu betiği kullanılmaz
 * hâle getirirdi. Okunamayan bir dosyada `null` döner ve tarayıcı süreyi
 * kendisi hesaplar — yani hata durumunda hiçbir şey bozulmaz.
 */
export function mp3Suresi(tampon) {
  try {
    let konum = 0
    if (tampon.slice(0, 3).toString('latin1') === 'ID3') {
      const boyut =
        (tampon[6] & 0x7f) * 0x200000 + (tampon[7] & 0x7f) * 0x4000 + (tampon[8] & 0x7f) * 0x80 + (tampon[9] & 0x7f)
      konum = 10 + boyut
    }

    const BITRATE_V1_L3 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0]
    const BITRATE_V2_L3 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0]
    const ORNEKLEME = { 3: [44100, 48000, 32000], 2: [22050, 24000, 16000], 0: [11025, 12000, 8000] }

    let toplamSaniye = 0
    let cerceve = 0

    while (konum + 4 <= tampon.length) {
      if (tampon[konum] !== 0xff || (tampon[konum + 1] & 0xe0) !== 0xe0) {
        konum += 1
        continue
      }
      const surum = (tampon[konum + 1] >> 3) & 0x03
      const katman = (tampon[konum + 1] >> 1) & 0x03
      const bitrateIndeks = (tampon[konum + 2] >> 4) & 0x0f
      const ornekIndeks = (tampon[konum + 2] >> 2) & 0x03
      const dolgu = (tampon[konum + 2] >> 1) & 0x01

      const ornekleme = ORNEKLEME[surum]?.[ornekIndeks]
      const bitrate = (surum === 3 ? BITRATE_V1_L3 : BITRATE_V2_L3)[bitrateIndeks]
      if (katman !== 1 || !ornekleme || !bitrate) {
        konum += 1
        continue
      }

      const ornekSayisi = surum === 3 ? 1152 : 576
      const uzunluk = Math.floor(((surum === 3 ? 144 : 72) * bitrate * 1000) / ornekleme) + dolgu
      if (uzunluk <= 4) break

      toplamSaniye += ornekSayisi / ornekleme
      cerceve += 1
      konum += uzunluk
    }

    return cerceve > 0 ? toplamSaniye : null
  } catch {
    return null
  }
}

/** `.env.local` ve `.env` dosyalarındaki TTS anahtarlarını ortama taşır. */
export async function ortamDegiskenleriniYukle() {
  const ilgiliAnahtarlar = [
    'TTS_PROVIDER', 'TTS_API_KEY', 'TTS_MODEL', 'TTS_VOICE_ID', 'TTS_BASE_URL',
    'TTS_RESPONSE_FORMAT', 'TTS_OUTPUT_FORMAT', 'TTS_STABILITY', 'TTS_SIMILARITY',
    'TTS_STYLE', 'OPENAI_API_KEY', 'OPENAI_BASE_URL', 'ELEVENLABS_API_KEY',
  ]

  for (const dosya of ['.env.local', '.env']) {
    if (!existsSync(dosya)) continue
    const metin = (await readFile(dosya, 'utf8')).replace(/^﻿/, '')
    for (const satir of metin.split(/\r?\n/)) {
      const eslesme = satir.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
      if (!eslesme) continue
      const [, ad, hamDeger] = eslesme
      if (!ilgiliAnahtarlar.includes(ad) || process.env[ad]) continue
      const deger = hamDeger.trim().replace(/^["']|["']$/g, '')
      if (deger) process.env[ad] = deger
    }
  }
}
