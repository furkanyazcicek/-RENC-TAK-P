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
import { PADISAH_SES_DEFTERI, PADISAH_SES_KOKU } from '../data/padisahlar/sesDefteri.js'
import { stableTextVersion } from './lessonNarration.js'

/**
 * Bir padişahın hazır ses kaydının adresi. Kayıt yoksa ya da metin
 * değiştiği için sürüm tutmuyorsa `null` döner — o zaman modül sessiz
 * moda düşer ve sanal saatle çalışır. Yani eksik ses hiçbir zaman
 * ekranı bozmaz, yalnızca sesi susturur.
 */
export function padisahSesAdresi(padisah) {
  const kayit = gecerliKayit(padisah)
  return kayit ? `${PADISAH_SES_KOKU}/${kayit.file}` : null
}

/** Kaydın gerçek uzunluğu (saniye). Kayıt yoksa ya da bayatsa `null`. */
export function padisahSesSuresi(padisah) {
  const sure = gecerliKayit(padisah)?.duration
  return Number.isFinite(sure) && sure > 0 ? sure : null
}

/** Bu padişahın sesi hazır mı — arayüzdeki "yakında" etiketi için. */
export function seslendirmeHazirMi(padisah) {
  return gecerliKayit(padisah) !== null
}

/** Seslendirilecek metnin tamamı. Üretici de okuyucu da aynı metni görür. */
export function anlatimMetni(padisah) {
  return (padisah?.narration ?? []).map((bolum) => bolum.text.trim()).join('\n\n')
}

/** Metinden hesaplanan sürüm damgası. Metin değişirse damga da değişir. */
export function anlatimSurumu(padisah) {
  return stableTextVersion(anlatimMetni(padisah))
}

/**
 * Deftere bakar ve kaydın GÜNCEL metne ait olduğunu doğrular. Doğrulama
 * olmasaydı bir anlatımı düzelttikten sonra öğrenci eski cümleleri
 * duymaya devam ederdi — sessiz ve fark edilmesi zor bir hata.
 */
export function sesKaydiSec(defter, padisah) {
  const id = typeof padisah === 'string' ? padisah : padisah?.id
  const kayit = defter?.[id]
  if (!kayit?.file) return null
  const metinVar = typeof padisah === 'object' && Array.isArray(padisah?.narration)
  if (metinVar && kayit.version !== anlatimSurumu(padisah)) return null
  return kayit
}

function gecerliKayit(padisah) {
  return sesKaydiSec(PADISAH_SES_DEFTERI, padisah)
}

/** Ekranda okunacak kadar bekleme payı — konuşma hızından bağımsız alt sınır. */
const EN_KISA_BOLUM = 8

/**
 * Anlatım bölümlerini kümülatif bir zaman çizelgesine çevirir.
 * `start`/`end` saniye cinsindendir; sahne animasyonları bu
 * aralıklara bakarak kendini açar.
 */
export function anlatimCizelgesi(padisah, gercekSure) {
  const bolumler = padisah?.narration ?? []
  const tahminler = bolumler.map((bolum) => Math.max(EN_KISA_BOLUM, bolum.seconds ?? tahminiSure(bolum.text)))

  /**
   * Gerçek ses kaydı varsa tahmini süreler o kaydın uzunluğuna ORANLANIR.
   * Sebep: sahne animasyonları bu çizelgeye bakıyor. Ölçeklemezsek tahmin
   * ile gerçek arasındaki fark birikir ve son bölümde ekrandaki vurgu
   * duyulan cümleden saniyelerce sapar.
   */
  const gercek = Number.isFinite(gercekSure) && gercekSure > 0 ? gercekSure : padisahSesSuresi(padisah)
  const tahminToplam = tahminler.reduce((toplam, sure) => toplam + sure, 0)
  const oran = gercek && tahminToplam > 0 ? gercek / tahminToplam : 1

  let imlec = 0
  return bolumler.map((bolum, sira) => {
    const sure = tahminler[sira] * oran
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
