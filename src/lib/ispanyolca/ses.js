/**
 * DRKOÇ — İSPANYOLCA SESLENDİRME KÖPRÜSÜ
 * ==================================================================
 *
 * DÜRÜSTLÜK KURALI: Bu bölümde sahte oynatıcı yoktur. Ses ya gerçekten
 * çıkar ya da öğrenciye "bu cihazda İspanyolca ses bulunamadı" denir ve
 * dinleme alıştırması yazılı biçimiyle sunulur.
 *
 * NEDEN TARAYICININ KENDİ SESİ: cihazın içindeki konuşma sentezi
 * (Web Speech API) ücretsizdir, hesap gerektirmez, çevrimdışı çalışır ve
 * öğrencinin sesi sunucuya gitmez. Ücretli bir seslendirme servisi
 * bağlamak için önce izin almak gerekir; o gün geldiğinde yalnız bu
 * dosyadaki `seslendir` gövdesi değişir, ekranlar aynı kalır.
 *
 * SINIR: Bu ses, kayıt stüdyosunda okunmuş insan sesi değildir. Cihazın
 * İspanyolca sesi kuruluysa kalitesi iyidir; kurulu değilse hiç ses çıkmaz.
 * Arayüz bu farkı gizlemez.
 *
 * BÖLGE: İspanyolca yirmiden fazla ülkenin resmî dilidir ve sesletim
 * gerçekten farklıdır. En belirgin fark "c/z" harflerindedir: İspanya'da
 * peltek "th" sesi verilir, Latin Amerika'da "s" okunur. Cihazda o bölgenin
 * sesi varsa kullanılır, yoksa sessizce en yakın İspanyolca sese düşülür —
 * öğrenciye "Meksika sesi çalıyorum" denip İspanya sesi çalınmaz.
 *
 * VARSAYILAN: es-ES. Türkiye'deki ders kitapları, DELE sınavı ve Instituto
 * Cervantes kaynakları İspanya İspanyolcasını temel alır.
 *
 * iOS NOTU: Safari, ses çalmayı ancak kullanıcının dokunmasıyla başlayan
 * bir olay içinde kabul eder. Bu yüzden hiçbir yerde otomatik oynatma
 * yoktur; her ses bir düğmeye basılarak başlar.
 */

const TERCIH_SIRASI = [
  // Tarayıcı ve işletim sistemlerinin en doğal İspanyolca sesleri.
  'Mónica', 'Monica', 'Jorge', 'Marisol', 'Diego', 'Paulina', 'Juan',
  'Google español', 'Microsoft Helena', 'Microsoft Laura',
  'Microsoft Pablo', 'Microsoft Elvira', 'Eddy (español (España))',
  'Flo (español (España))', 'Reed (español (España))',
]

/** Bölge kodu → cihaz ses etiketi deseni. */
const BOLGELER = {
  es: /es[-_]ES/i,
  mx: /es[-_]MX/i,
  ar: /es[-_]AR/i,
  us: /es[-_]US/i,
}

export const BOLGE_ADLARI = {
  es: 'İspanya',
  mx: 'Meksika',
  ar: 'Arjantin',
  us: 'ABD (Latin Amerika)',
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

/** Cihazda kullanılabilir İspanyolca sesler. */
export function ispanyolcaSesler(hepsi = sesListesi) {
  return (hepsi ?? []).filter((s) => /^es([-_]|$)/i.test(s.lang ?? ''))
}

/** Bölgeye göre en uygun sesi seçer; o bölge yoksa genel İspanyolca sese düşer. */
function sesSec(bolge = 'es') {
  const adaylar = ispanyolcaSesler()
  if (!adaylar.length) return null
  const desen = BOLGELER[bolge] ?? BOLGELER.es
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
 * @param {'es'|'mx'|'ar'|'us'} [secenek.bolge]
 * @param {number} [secenek.hiz]  0.5 (yavaş) … 1 (doğal)
 * @param {Function} [secenek.bitince]
 * @returns {{basarili:boolean, sebep?:string}}
 */
export function seslendir(metin, secenek = {}) {
  const { bolge = 'es', hiz = 1, bitince } = secenek
  if (!sesDesteginiKontrolEt()) {
    return { basarili: false, sebep: 'destek-yok' }
  }
  const ses = sesSec(bolge)
  if (!ses) {
    return { basarili: false, sebep: 'ispanyolca-ses-yok' }
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
      mesaj: 'Bu tarayıcı İspanyolca seslendirmeyi desteklemiyor. Dinleme çalışmaları yazılı biçimde açılacak.',
    }
  }
  const sesler = await sesleriYukle()
  const ispanyolca = ispanyolcaSesler(sesler)
  if (!ispanyolca.length) {
    return {
      hazir: false,
      sebep: 'ispanyolca-ses-yok',
      mesaj: 'Cihazında kurulu bir İspanyolca ses bulunamadı. Dinleme çalışmaları yazılı biçimde açılacak.',
      cozum: 'Telefonda Ayarlar → Erişilebilirlik → Konuşma bölümünden İspanyolca (Español) ses indirebilirsin.',
    }
  }
  return {
    hazir: true,
    sesSayisi: ispanyolca.length,
    bolgeler: {
      es: ispanyolca.some((s) => BOLGELER.es.test(s.lang)),
      mx: ispanyolca.some((s) => BOLGELER.mx.test(s.lang)),
      ar: ispanyolca.some((s) => BOLGELER.ar.test(s.lang)),
      us: ispanyolca.some((s) => BOLGELER.us.test(s.lang)),
    },
  }
}
