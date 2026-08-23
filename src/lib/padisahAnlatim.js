/**
 * SESLENDİRME ZAMAN ÇİZELGESİ
 * ==================================================================
 *
 * Modül bugün SESSİZ çalışır: gerçek ses dosyası yoktur, anlatım
 * metinleri tahminî sürelerle sanal bir saat üzerinde ilerler.
 * Animasyonlar bu saate bağlıdır — ses geldiğinde saat değişir,
 * animasyonlar değişmez.
 *
 * SES EKLENDİĞİNDE YAPILACAK TEK ŞEY
 *   `padisahSesAdresi()` fonksiyonunun `null` yerine bir adres
 *   döndürmesi. Oynatıcı adres varsa <audio> öğesinin gerçek
 *   zamanını, yoksa sanal saati kullanır. Başka hiçbir yer
 *   değişmez. (Sunucu tarafında da bir izin listesi gerekir; bkz.
 *   api/lessons/narrate.js — orada ders slug'ı sunucuda doğrulanır,
 *   uç nokta genel amaçlı bir TTS servisine dönüşmez.)
 */

/** Sesli anlatım henüz bağlanmadı. Bağlanana kadar `null` döner. */
export function padisahSesAdresi() {
  return null
}

export function seslendirmeHazirMi() {
  return padisahSesAdresi() !== null
}

/** Ekranda okunacak kadar bekleme payı — konuşma hızından bağımsız alt sınır. */
const EN_KISA_BOLUM = 8

/**
 * Anlatım bölümlerini kümülatif bir zaman çizelgesine çevirir.
 * `start`/`end` saniye cinsindendir; sahne animasyonları bu
 * aralıklara bakarak kendini açar.
 */
export function anlatimCizelgesi(padisah) {
  let imlec = 0
  return (padisah?.narration ?? []).map((bolum) => {
    const sure = Math.max(EN_KISA_BOLUM, bolum.seconds ?? tahminiSure(bolum.text))
    const kayit = { ...bolum, start: imlec, end: imlec + sure, seconds: sure }
    imlec += sure
    return kayit
  })
}

/** Toplam anlatım süresi (saniye). */
export function anlatimSuresi(cizelge) {
  return cizelge.length ? cizelge[cizelge.length - 1].end : 0
}

/**
 * Türkçe için kabaca dakikada 150 kelime. Gerçek ses geldiğinde bu
 * tahmin kullanılmaz; yalnızca sessiz demo modunda geçerlidir.
 */
export function tahminiSure(metin) {
  const kelime = String(metin ?? '').trim().split(/\s+/).filter(Boolean).length
  return Math.round((kelime / 150) * 60)
}

/** Verilen ana denk gelen bölüm. */
export function aktifBolum(cizelge, an) {
  return cizelge.find((bolum) => an >= bolum.start && an < bolum.end) ?? cizelge[cizelge.length - 1] ?? null
}

export function bolumSirasi(cizelge, an) {
  const bolum = aktifBolum(cizelge, an)
  return bolum ? cizelge.indexOf(bolum) : -1
}

/**
 * Sahne öğelerinin sırayla açılması için: bilgi satırının kaçıncı
 * saniyede görünmesi gerektiğini hesaplar. Bilgiler aynı anda değil,
 * anlatımla birlikte gelir.
 */
export function kademeliGorunum(adet, baslangic = 0.6, aralik = 0.34) {
  return Array.from({ length: adet }, (_, sira) => baslangic + sira * aralik)
}

export function anlatimDepoAnahtari(padisahId) {
  return `drkoc:padisah-gecidi:v1:${padisahId}`
}
