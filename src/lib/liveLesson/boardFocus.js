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
 * Yalnız genişliğe bakmak yetmez. 1280×720 bir bilgisayarda veya
 * tarayıcının varsayılan yazısı 18–20 px'e çıkarılmış bir ekranda, ölçülen
 * CSS genişliği masaüstü gibi görünse bile araç şeritleri tahtayı daraltır.
 * Bu yüzden kullanılabilir genişlik ve yükseklik, kök yazı boyutuna göre
 * 16 px'lik tasarım ölçeğine çevrilir. 1280 px genişlik ya da 800 px'den
 * kısa alan odak görünümüyle başlar; geniş ve yüksek masaüstünde kullanıcı
 * isterse "Tahtayı büyüt" ile aynı moda elle geçer.
 *
 * ═══════════════════════════════════════════════════════════════════
 * TERCİH CİHAZDA KALIR
 * ═══════════════════════════════════════════════════════════════════
 * Bu bir görünüm tercihidir; dersin veri modeline YAZILMAZ. Öğretmenin
 * tabletteki tercihi öğrencinin telefonunu bağlamaz.
 */

const KEY = 'drk-tahta-odak'

/** Yardımcı arayüzlerin sürekli açık kalabileceği en dar etkin genişlik. */
export const MASAUSTU_ESIGI = 1280
/** Normal stüdyo kromunun tahtadan fazla yükseklik aldığı eşik. */
export const KISA_EKRAN_ESIGI = 800
/** Tasarım sisteminin hedeflediği tarayıcı kök yazı boyutu. */
export const STANDART_YAZI_BOYUTU = 16
/** Telefon düzeni (tek odak sekmeleri) bu eşiğin altında çalışır. */
export const TELEFON_ESIGI = 768

/**
 * Varsayılan yazı büyütülmüşse, arayüzün gerçekten kullanabildiği alanı
 * tasarımın 16 px tabanına çevir. Küçük yazı kullanan bir bilgisayarın
 * alanını yapay olarak büyütmüyoruz; yalnız büyümenin tahta üzerindeki
 * maliyetini hesaba katıyoruz.
 */
export function etkinAlan(olcu, kokYaziBoyutu = STANDART_YAZI_BOYUTU) {
  const guvenliOlcu = Number.isFinite(olcu) ? Math.max(0, olcu) : 0
  const guvenliYazi = Number.isFinite(kokYaziBoyutu) ? kokYaziBoyutu : STANDART_YAZI_BOYUTU
  const katsayi = Math.max(1, guvenliYazi / STANDART_YAZI_BOYUTU)
  return guvenliOlcu / katsayi
}

/** Ekran ölçüsü ve yazı ölçeğine göre odak modunun varsayılanı. */
export function odakVarsayilani(
  width = typeof window === 'undefined' ? 0 : window.innerWidth,
  height = typeof window === 'undefined' ? 900 : window.innerHeight,
  rootFontSize =
    typeof window === 'undefined'
      ? STANDART_YAZI_BOYUTU
      : Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize)
) {
  return (
    etkinAlan(width, rootFontSize) <= MASAUSTU_ESIGI ||
    etkinAlan(height, rootFontSize) < KISA_EKRAN_ESIGI
  )
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
export function odakDurumu(
  width,
  tercih = odakTercihiOku(),
  height = typeof window === 'undefined' ? 900 : window.innerHeight,
  rootFontSize =
    typeof window === 'undefined'
      ? STANDART_YAZI_BOYUTU
      : Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize)
) {
  if (telefonDuzeni(width)) return false
  if (tercih !== null) return tercih
  return odakVarsayilani(width, height, rootFontSize)
}
