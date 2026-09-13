/**
 * TAHTA ODAK MODU — tercih ve varsayılan.
 *
 * ═══════════════════════════════════════════════════════════════════
 * CİHAZ TAHMİN EDİLMEZ, ALAN ÖLÇÜLÜR
 * ═══════════════════════════════════════════════════════════════════
 * "Tablet mi?" sorusunu kullanıcı aracısından (user agent) cevaplamak
 * yanlış: iPadOS kendini masaüstü Safari gibi tanıtıyor, Android
 * tabletlerin dizesi ise telefondan ayırt edilemiyor. Bizi ilgilendiren
 * zaten cihazın adı değil, TAHTAYA KALAN ALAN.
 *
 * Eşik 1280 px: bunun altındaki her yatay tablet (1024×768, 1180×820,
 * 1112×834) ve dikey tablet, yardımcı arayüzleri sürekli açık tutacak
 * kadar geniş değil. 1280 ve üstü masaüstü gibi davranır; oradaki
 * kullanıcı "Tahtayı büyüt" ile aynı moda elle geçer.
 *
 * ═══════════════════════════════════════════════════════════════════
 * TERCİH CİHAZDA KALIR
 * ═══════════════════════════════════════════════════════════════════
 * Bu bir görünüm tercihidir; dersin veri modeline YAZILMAZ. Öğretmenin
 * tabletteki tercihi öğrencinin telefonunu bağlamaz.
 */

const KEY = 'drk-tahta-odak'

/** Yardımcı arayüzlerin sürekli açık kalabileceği en dar genişlik. */
export const MASAUSTU_ESIGI = 1280
/** Telefon düzeni (tek odak sekmeleri) bu eşiğin altında çalışır. */
export const TELEFON_ESIGI = 768

/** Ekran ölçüsüne göre odak modunun varsayılanı. */
export function odakVarsayilani(width = typeof window === 'undefined' ? 0 : window.innerWidth) {
  return width < MASAUSTU_ESIGI
}

/** Telefon mu? Telefonda odak modu değil, mevcut sekmeli düzen geçerlidir. */
export function telefonDuzeni(width = typeof window === 'undefined' ? 0 : window.innerWidth) {
  return width < TELEFON_ESIGI
}

/**
 * Kaydedilmiş tercih. Kullanıcı hiç dokunmadıysa `null` döner ve
 * varsayılan (ekran ölçüsü) geçerli olur — böylece tablet yatayken
 * kendiliğinden odak moduna girer, masaüstünde girmez.
 */
export function odakTercihiOku() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(KEY)
    if (raw === 'acik') return true
    if (raw === 'kapali') return false
    return null
  } catch {
    return null
  }
}

export function odakTercihiYaz(acik) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(KEY, acik ? 'acik' : 'kapali')
  } catch {
    /* gizli sekmede yazılamaz; ders yine çalışır */
  }
}

/** Kaydedilmiş tercihi ekran ölçüsüyle birleştirir. */
export function odakDurumu(width, tercih = odakTercihiOku()) {
  if (telefonDuzeni(width)) return false
  if (tercih !== null) return tercih
  return odakVarsayilani(width)
}
