/**
 * Dr. Koç — soru fotoğrafı hazırlama (§44).
 *
 * NEDEN İSTEMCİDE KÜÇÜLTÜYORUZ
 * ----------------------------
 * Telefon kamerası 4000×3000 (≈4 MB) fotoğraf üretir. Bunu olduğu gibi
 * yüklemek üç şeyi birden bozar: mobil veride bekleme süresi, depolama
 * maliyeti ve en önemlisi Gemini'nin görüntü token'ı — yani her sorunun
 * fiyatı.
 *
 * SIKIŞTIRMA SINIRI — BU DOSYANIN ANA GERİLİMİ
 * --------------------------------------------
 * Agresif sıkıştırma matematik sembollerini yok eder. Üs (x²), indis (a₁),
 * kesir çizgisi, eksi işareti, karekök çengeli — hepsi birkaç piksellik
 * ince yapılardır. JPEG kalitesi 0.6'nın altına indiğinde "x²" ile "x2"
 * arasındaki fark kaybolabiliyor ve model soruyu YANLIŞ OKUYOR. Yanlış
 * okunan soru, yanlış çözülen sorudur.
 *
 * Bu yüzden:
 *   · uzun kenar 1600 px'de sabitlenir (2000'den fazlası okumaya katkı
 *     vermiyor, altı ise küçük indisleri eritiyor),
 *   · kalite 0.85'ten başlar ve boyut hedefine ulaşmak için EN FAZLA
 *     0.7'ye iner — daha aşağı inmektense büyük dosya yüklemek yeğdir,
 *   · küçültme yalnızca gerekiyorsa yapılır; zaten küçük bir ekran
 *     görüntüsü hiç yeniden kodlanmaz (her yeniden kodlama kayıptır).
 */

import { supabase } from '../supabaseClient'

/** Sunucudaki `SOLVE_PREFIX` ile aynı olmalı (api/_lib/solve/image.js). */
const PREFIX = 'ai-solve'
const BUCKET = 'question-images'

export const MAX_UPLOAD_BYTES = 6 * 1024 * 1024
const TARGET_BYTES = 900 * 1024
const MAX_EDGE = 1600
const QUALITY_START = 0.85
const QUALITY_FLOOR = 0.7

/** Kullanıcıya gösterilebilecek, teknik ayrıntı içermeyen hata. */
export class ImageError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ImageError'
  }
}

const ACCEPTED = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']

/**
 * Dosyayı doğrular. Sunucu aynı kontrolleri DOSYA İÇERİĞİNDEN tekrar
 * yapar (sihirli baytlar); buradaki kontrol kullanıcıya hızlı geri
 * bildirim içindir, güvenlik sınırı DEĞİLDİR.
 */
export function validateFile(file) {
  if (!file) throw new ImageError('Bir dosya seç.')

  // iOS bazen HEIC dosyalarına boş MIME türü veriyor; uzantıya da bakılır.
  const type = file.type || guessTypeFromName(file.name)
  if (!ACCEPTED.includes(type)) {
    throw new ImageError('Yalnızca fotoğraf yükleyebilirsin (JPEG, PNG veya WebP).')
  }
  if (file.size > MAX_UPLOAD_BYTES * 2) {
    throw new ImageError('Fotoğraf çok büyük. Daha küçük bir fotoğraf seçer misin?')
  }
  return type
}

function guessTypeFromName(name = '') {
  const ext = name.toLowerCase().split('.').pop()
  if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg'
  if (ext === 'png') return 'image/png'
  if (ext === 'webp') return 'image/webp'
  if (ext === 'heic') return 'image/heic'
  if (ext === 'heif') return 'image/heif'
  return ''
}

/**
 * Fotoğrafı küçültüp sıkıştırır.
 *
 * HEIC'e DOKUNULMAZ: tarayıcıların çoğu HEIC'i canvas'a çizemez, denemek
 * boş bir görsel üretir. Olduğu gibi yüklenir; Gemini HEIC'i kendisi
 * okuyabiliyor.
 *
 * Herhangi bir aşama başarısız olursa ORİJİNAL dosya döner. Sıkıştırma
 * bir iyileştirmedir; başarısızlığı akışı durdurmamalı.
 */
export async function prepareImage(file) {
  const type = validateFile(file)

  if (type === 'image/heic' || type === 'image/heif') {
    return { blob: file, ext: 'heic', width: null, height: null, compressed: false }
  }

  // Zaten küçükse yeniden kodlama YAPMA — her kodlama kayıptır.
  if (file.size <= TARGET_BYTES) {
    const size = await readSize(file).catch(() => null)
    if (!size || (size.width <= MAX_EDGE && size.height <= MAX_EDGE)) {
      return {
        blob: file,
        ext: type === 'image/png' ? 'png' : type === 'image/webp' ? 'webp' : 'jpg',
        width: size?.width ?? null,
        height: size?.height ?? null,
        compressed: false,
      }
    }
  }

  try {
    const bitmap = await loadBitmap(file)
    const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height))
    const width = Math.max(1, Math.round(bitmap.width * scale))
    const height = Math.max(1, Math.round(bitmap.height * scale))

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')
    // Küçültmede yüksek kalite şart: varsayılan (hızlı) örnekleme ince
    // çizgileri kırpıyor ve "1" ile "l" ayırt edilemez hâle geliyor.
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    // Beyaz zemin: şeffaf PNG'yi JPEG'e çevirirken saydam alanlar siyah
    // olur ve siyah zemin üzerine siyah yazı okunmaz hâle gelir.
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, width, height)
    ctx.drawImage(bitmap, 0, 0, width, height)
    bitmap.close?.()

    let quality = QUALITY_START
    let blob = await toBlob(canvas, 'image/jpeg', quality)

    // Hedefe ulaşana kadar kaliteyi düşür — ama TABANIN ALTINA İNME.
    while (blob && blob.size > TARGET_BYTES && quality > QUALITY_FLOOR) {
      quality = Math.max(QUALITY_FLOOR, quality - 0.05)
      blob = await toBlob(canvas, 'image/jpeg', quality)
    }

    if (!blob) return { blob: file, ext: 'jpg', width: null, height: null, compressed: false }

    return { blob, ext: 'jpg', width, height, compressed: true }
  } catch {
    // Küçültme başarısız — orijinali yükle.
    return { blob: file, ext: 'jpg', width: null, height: null, compressed: false }
  }
}

function toBlob(canvas, type, quality) {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality))
}

async function loadBitmap(file) {
  if (typeof createImageBitmap === 'function') {
    // `imageOrientation: 'from-image'` — telefonla yan çekilmiş fotoğraf
    // EXIF döndürme bilgisi taşır. Bunu uygulamazsak model soruyu 90°
    // dönük görür ve okuyamaz (§4'teki "döndürülmüş fotoğraf" durumu).
    return createImageBitmap(file, { imageOrientation: 'from-image' })
  }
  return loadViaImgElement(file)
}

function loadViaImgElement(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('görsel yüklenemedi'))
    }
    img.src = url
  })
}

async function readSize(file) {
  const bitmap = await loadBitmap(file)
  const size = { width: bitmap.width, height: bitmap.height }
  bitmap.close?.()
  return size
}

/* ==================================================================
   YÜKLEME
   ================================================================== */

/**
 * Hazırlanmış görseli Supabase Storage'a yükler ve DEPOLAMA YOLUNU döner.
 *
 * Yol biçimi `ai-solve/<kullanıcı-id>/<zaman>-<rastgele>.<uzantı>` olmak
 * ZORUNDA: sunucu bu öneki doğruluyor ve başkasının klasörüne işaret eden
 * yolu reddediyor (api/_lib/solve/image.js > validatePath).
 *
 * Public URL DÖNMEZ. Sunucuya yol gider; görüntüleme için URL gerektiğinde
 * `publicUrlFor()` istemcide üretilir.
 */
export async function uploadQuestionImage(blob, userId, ext) {
  const random = Math.random().toString(36).slice(2, 10)
  const path = `${PREFIX}/${userId}/${Date.now()}-${random}.${ext}`

  const { error } = await supabase.storage.from(BUCKET).upload(path, blob, {
    contentType: blob.type || 'image/jpeg',
    upsert: false,
  })

  if (error) {
    throw new ImageError('Fotoğraf yüklenemedi. Bağlantını kontrol edip tekrar dener misin?')
  }

  return path
}

/** Depolama yolundan görüntülenebilir URL üretir. */
export function publicUrlFor(path) {
  if (!path) return null
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path)
  return data?.publicUrl ?? null
}

/** Hazırla + yükle — çağıran tarafta tek adım. */
export async function prepareAndUpload(file, userId) {
  const prepared = await prepareImage(file)
  const path = await uploadQuestionImage(prepared.blob, userId, prepared.ext)
  return { path, ...prepared }
}
