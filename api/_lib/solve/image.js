/**
 * AI Soru Çözüm Merkezi — görsel alma ve doğrulama (§44, §46).
 *
 * NEDEN GÖRSEL İSTEK GÖVDESİNDE GELMİYOR?
 * ---------------------------------------
 * İstemci fotoğrafı önce Supabase Storage'a yükler, sunucuya yalnızca
 * DEPOLAMA YOLUNU gönderir. Üç sebep:
 *
 *   1. Vercel sunucusuz fonksiyonlarının istek gövdesi sınırı var
 *      (~4.5 MB). Telefonla çekilmiş bir fotoğrafın base64'ü bunu rahat
 *      aşar — istemci küçültse bile sınıra yakın çalışmak kırılgandır.
 *   2. Görsel zaten saklanmalı: öğrenci çözümü sonradan açtığında soruyu
 *      görmeli, "Neden?" sorularında bağlam gerekiyor.
 *   3. Yükleme, öğrencinin KENDİ oturumuyla yapılır; sunucu dosyayı yine
 *      öğrencinin JWT'siyle indirir. Yani erişim iki kez RLS'ten geçer.
 *
 * YOL DOĞRULAMASI KRİTİK
 * ----------------------
 * İstemciden gelen yol GÜVENİLMEZ. `ai-solve/<kendi kullanıcı id'si>/`
 * önekiyle başlamıyorsa reddedilir. Bu olmadan bir öğrenci başkasının
 * yüklediği görseli kendi oturumunda çözdürebilirdi (bilgi sızıntısı).
 */

import { solveConfig } from './config.js'
import { GeminiError } from './gemini.js'

/** Öğrencinin soru görsellerinin yaşadığı klasör öneki. */
export const SOLVE_PREFIX = 'ai-solve'

/**
 * Mevcut `question-images` kovası yeniden kullanılıyor (§4 "mevcut DrKoç
 * storage altyapısını kullan"). Kova PUBLIC READ'tir — bu, öğrencinin
 * öğretmene gönderdiği soru fotoğrafları için zaten geçerli olan
 * davranıştır. Yolu tahmin etmek pratikte zor (uuid + zaman damgası) ama
 * gizli DEĞİLDİR; raporda bilinen sınır olarak belirtildi.
 */
export const SOLVE_BUCKET = 'question-images'

/** Bu öğrencinin yazabileceği yol öneki. */
export function pathPrefixFor(userId) {
  return `${SOLVE_PREFIX}/${userId}/`
}

/**
 * İstemciden gelen depolama yolunu doğrular.
 * @returns {string|null} güvenli yol ya da null
 */
export function validatePath(path, userId) {
  if (typeof path !== 'string') return null
  const clean = path.trim()
  if (!clean || clean.length > 300) return null
  // Dizin tırmanma ve mutlak URL denemeleri.
  if (clean.includes('..') || clean.startsWith('/') || /^[a-z]+:/i.test(clean)) return null
  if (!clean.startsWith(pathPrefixFor(userId))) return null
  return clean
}

/**
 * Görseli depodan indirir ve Gemini'nin beklediği biçime çevirir.
 *
 * @param {import('@supabase/supabase-js').SupabaseClient} supabase  öğrencinin JWT'siyle
 * @param {string} path  `validatePath`ten geçmiş yol
 * @returns {Promise<{ base64: string, mimeType: string, bytes: number }>}
 */
export async function fetchImageForModel(supabase, path) {
  const { data, error } = await supabase.storage.from(SOLVE_BUCKET).download(path)

  if (error || !data) {
    throw new GeminiError('solve_invalid_image', {
      kind: 'image_rejected',
      detail: error?.message ?? 'indirilemedi',
    })
  }

  const buffer = Buffer.from(await data.arrayBuffer())

  if (buffer.byteLength === 0) {
    throw new GeminiError('solve_invalid_image', { kind: 'image_rejected', detail: 'boş dosya' })
  }
  if (buffer.byteLength > solveConfig.image.maxBytes) {
    throw new GeminiError('solve_image_too_large', {
      kind: 'image_rejected',
      detail: `${buffer.byteLength} bayt`,
    })
  }

  // MIME türü DOSYA İÇERİĞİNDEN okunur, `data.type`tan değil: Storage
  // metadata'sı yüklerken istemci tarafından belirlenir ve dolayısıyla
  // saldırgan kontrolündedir. Sihirli baytlar yalan söyleyemez.
  const mimeType = sniffMime(buffer) ?? (solveConfig.image.allowedTypes.includes(data.type) ? data.type : null)

  if (!mimeType) {
    throw new GeminiError('solve_invalid_image', {
      kind: 'image_rejected',
      detail: 'tanınmayan görsel biçimi',
    })
  }

  return { base64: buffer.toString('base64'), mimeType, bytes: buffer.byteLength }
}

/**
 * Dosyanın ilk baytlarından biçimini belirler.
 * Yalnızca beyaz listedeki biçimler tanınır; tanınmayan her şey reddedilir.
 */
function sniffMime(buffer) {
  if (buffer.length < 12) return null

  // JPEG: FF D8 FF
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return 'image/jpeg'

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a
  ) {
    return 'image/png'
  }

  // RIFF....WEBP
  if (
    buffer.toString('ascii', 0, 4) === 'RIFF' &&
    buffer.toString('ascii', 8, 12) === 'WEBP'
  ) {
    return 'image/webp'
  }

  // ISO-BMFF: ....ftypheic / heix / mif1 (iPhone HEIC)
  if (buffer.toString('ascii', 4, 8) === 'ftyp') {
    const brand = buffer.toString('ascii', 8, 12)
    if (['heic', 'heix', 'hevc', 'heim', 'heis', 'mif1', 'msf1'].includes(brand)) {
      return 'image/heic'
    }
  }

  return null
}
