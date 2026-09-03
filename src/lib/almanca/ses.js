/**
 * DRKOÇ — ALMANCA SESLENDİRME KÖPRÜSÜ
 * ==================================================================
 *
 * DÜRÜSTLÜK KURALI: Bu bölümde sahte oynatıcı yoktur. Ses ya gerçekten
 * çıkar ya da öğrenciye "bu cihazda Almanca ses bulunamadı" denir ve
 * dinleme alıştırması yazılı biçimiyle sunulur.
 *
 * NEDEN TARAYICININ KENDİ SESİ: cihazın içindeki konuşma sentezi
 * (Web Speech API) ücretsizdir, hesap gerektirmez, çevrimdışı çalışır ve
 * öğrencinin sesi sunucuya gitmez. Ücretli bir seslendirme servisi
 * bağlamak için önce izin almak gerekir; o gün geldiğinde yalnız bu
 * dosyadaki `seslendir` gövdesi değişir, ekranlar aynı kalır.
 *
 * SINIR: Bu ses, kayıt stüdyosunda okunmuş insan sesi değildir. Cihazın
 * Almanca sesi kuruluysa kalitesi iyidir; kurulu değilse hiç ses çıkmaz.
 * Arayüz bu farkı gizlemez.
 *
 * BÖLGE: Almanca üç ülkede resmî dildir ve sesletim gerçekten farklıdır
 * (Almanya / Avusturya / İsviçre). Cihazda o bölgenin sesi varsa
 * kullanılır, yoksa sessizce en yakın Almanca sese düşülür — öğrenciye
 * "Avusturya sesi çalıyorum" denip Almanya sesi çalınmaz.
 *
 * iOS NOTU: Safari, ses çalmayı ancak kullanıcının dokunmasıyla başlayan
 * bir olay içinde kabul eder. Bu yüzden hiçbir yerde otomatik oynatma
 * yoktur; her ses bir düğmeye basılarak başlar.
 */

const TERCIH_SIRASI = [
  // Tarayıcı ve işletim sistemlerinin en doğal Almanca sesleri.
  'Anna', 'Petra', 'Markus', 'Yannick', 'Helena',
  'Google Deutsch', 'Microsoft Katja', 'Microsoft Hedda',
  'Microsoft Stefan', 'Microsoft Conrad', 'Eddy (Deutschland)',
]

/** Bölge kodu → cihaz ses etiketi deseni. */
const BOLGELER = {
  de: /de[-_]DE/i,
  at: /de[-_]AT/i,
  ch: /de[-_]CH/i,
}

export const BOLGE_ADLARI = {
  de: 'Almanya',
  at: 'Avusturya',
  ch: 'İsviçre',
}

let seslerYuklendi = false
let sesListesi = []

/** Tarayıcı konuşma sentezini destekliyor mu? */
export function sesDesteginiKontrolEt() {
  return typeof window !== 'undefined'
    && 'speechSynthesis' in window
    && typeof window.SpeechSynthesisUtterance === 'function'
}

/**
 * Ses listesini yükler. Chrome listeyi eşzamansız doldurur; ilk çağrıda
 * boş dönebilir, bu yüzden `voiceschanged` olayı da dinlenir.
 */
export function sesleriYukle() {
  if (!sesDesteginiKontrolEt()) return Promise.resolve([])
  if (seslerYuklendi && sesListesi.length) return Promise.resolve(sesListesi)

  return new Promise((cozumle) => {
    const oku = () => {
      sesListesi = window.speechSynthesis.getVoices() ?? []
      if (sesListesi.length) {
        seslerYuklendi = true
        cozumle(sesListesi)
        return true
      }
      return false
    }
    if (oku()) return
    const dinleyici = () => {
      if (oku()) window.speechSynthesis.removeEventListener('voiceschanged', dinleyici)
    }
    window.speechSynthesis.addEventListener('voiceschanged', dinleyici)
    // Bazı tarayıcılarda olay hiç gelmiyor; kısa bir süre sonra pes et.
    window.setTimeout(() => {
      window.speechSynthesis.removeEventListener('voiceschanged', dinleyici)
      cozumle(sesListesi)
    }, 1200)
  })
}

/** Cihazda kullanılabilir Almanca sesler. */
export function almancaSesler(hepsi = sesListesi) {
  return (hepsi ?? []).filter((s) => /^de([-_]|$)/i.test(s.lang ?? ''))
}

/** Bölgeye göre en uygun sesi seçer; o bölge yoksa genel Almanca sese düşer. */
function sesSec(bolge = 'de') {
  const adaylar = almancaSesler()
  if (!adaylar.length) return null
  const desen = BOLGELER[bolge] ?? BOLGELER.de
  const bolgesel = adaylar.filter((s) => desen.test(s.lang))
  const havuz = bolgesel.length ? bolgesel : adaylar
  for (const ad of TERCIH_SIRASI) {
    const bulunan = havuz.find((s) => s.name?.includes(ad))
    if (bulunan) return bulunan
  }
  return havuz[0]
}

/**
 * Metni seslendirir.
 *
 * @param {string} metin
 * @param {Object} [secenek]
 * @param {'de'|'at'|'ch'} [secenek.bolge]
 * @param {number} [secenek.hiz]  0.5 (yavaş) … 1 (doğal)
 * @param {Function} [secenek.bitince]
 * @returns {{basarili:boolean, sebep?:string}}
 */
export function seslendir(metin, secenek = {}) {
  const { bolge = 'de', hiz = 1, bitince } = secenek
  if (!sesDesteginiKontrolEt()) {
    return { basarili: false, sebep: 'destek-yok' }
  }
  const ses = sesSec(bolge)
  if (!ses) {
    return { basarili: false, sebep: 'almanca-ses-yok' }
  }
  try {
    window.speechSynthesis.cancel()
    const konusma = new window.SpeechSynthesisUtterance(String(metin ?? ''))
    konusma.voice = ses
    konusma.lang = ses.lang
    konusma.rate = Math.max(0.4, Math.min(1.2, hiz))
    konusma.pitch = 1
    if (typeof bitince === 'function') {
      konusma.onend = bitince
      konusma.onerror = bitince
    }
    window.speechSynthesis.speak(konusma)
    return { basarili: true }
  } catch {
    return { basarili: false, sebep: 'hata' }
  }
}

export function sesiDurdur() {
  if (sesDesteginiKontrolEt()) {
    try { window.speechSynthesis.cancel() } catch { /* yok say */ }
  }
}

/**
 * Ekranların tek çağrıda soracağı özet durum.
 * `hazir` false ise arayüz dinleme alıştırmasını YAZILI biçimde sunar ve
 * durumu açıkça söyler; ses düğmesi hiç görünmez.
 */
export async function sesDurumu() {
  if (!sesDesteginiKontrolEt()) {
    return {
      hazir: false,
      sebep: 'destek-yok',
      mesaj: 'Bu tarayıcı Almanca seslendirmeyi desteklemiyor. Dinleme çalışmaları yazılı biçimde açılacak.',
    }
  }
  const sesler = await sesleriYukle()
  const almanca = almancaSesler(sesler)
  if (!almanca.length) {
    return {
      hazir: false,
      sebep: 'almanca-ses-yok',
      mesaj: 'Cihazında kurulu bir Almanca ses bulunamadı. Dinleme çalışmaları yazılı biçimde açılacak.',
      cozum: 'Telefonda Ayarlar → Erişilebilirlik → Konuşma bölümünden Almanca (Deutsch) ses indirebilirsin.',
    }
  }
  return {
    hazir: true,
    sesSayisi: almanca.length,
    bolgeler: {
      de: almanca.some((s) => BOLGELER.de.test(s.lang)),
      at: almanca.some((s) => BOLGELER.at.test(s.lang)),
      ch: almanca.some((s) => BOLGELER.ch.test(s.lang)),
    },
  }
}
