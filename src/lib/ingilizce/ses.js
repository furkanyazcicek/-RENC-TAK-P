/**
 * DRKOÇ — İNGİLİZCE SESLENDİRME KÖPRÜSÜ
 * ==================================================================
 *
 * DÜRÜSTLÜK KURALI: Bu bölümde sahte oynatıcı yoktur. Ses ya gerçekten
 * çıkar ya da öğrenciye "bu cihazda İngilizce ses bulunamadı" denir ve
 * dinleme alıştırması yazılı biçimiyle sunulur.
 *
 * NEDEN TARAYICININ KENDİ SESİ: cihazın içindeki konuşma sentezi
 * (Web Speech API) ücretsizdir, hesap gerektirmez, çevrimdışı çalışır ve
 * öğrencinin sesi sunucuya gitmez. Ücretli bir seslendirme servisi
 * bağlamak için önce izin almak gerekir; o gün geldiğinde yalnız bu
 * dosyadaki `seslendir` gövdesi değişir, ekranlar aynı kalır.
 *
 * SINIR: Bu ses, kayıt stüdyosunda okunmuş insan sesi değildir. Cihazın
 * İngilizce sesi kuruluysa kalitesi iyidir; kurulu değilse hiç ses
 * çıkmaz. Arayüz bu farkı gizlemez.
 *
 * iOS NOTU: Safari, ses çalmayı ancak kullanıcının dokunmasıyla başlayan
 * bir olay içinde kabul eder. Bu yüzden hiçbir yerde otomatik oynatma
 * yoktur; her ses bir düğmeye basılarak başlar.
 */

const TERCIH_SIRASI = [
  // Adı geçen sesler, tarayıcıların İngilizce için en doğal seslerinden.
  'Samantha', 'Daniel', 'Karen', 'Moira', 'Google US English',
  'Google UK English Female', 'Google UK English Male', 'Microsoft Aria',
  'Microsoft Guy', 'Microsoft Zira', 'Microsoft David',
]

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

/** Cihazda kullanılabilir İngilizce sesler. */
export function ingilizceSesler(hepsi = sesListesi) {
  return (hepsi ?? []).filter((s) => /^en([-_]|$)/i.test(s.lang ?? ''))
}

/** Aksana göre en uygun sesi seçer. */
function sesSec(aksan = 'usa') {
  const adaylar = ingilizceSesler()
  if (!adaylar.length) return null
  const bolge = aksan === 'ing' ? /en[-_]GB/i : /en[-_]US/i
  const bolgesel = adaylar.filter((s) => bolge.test(s.lang))
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
 * @param {'usa'|'ing'} [secenek.aksan]
 * @param {number} [secenek.hiz]  0.5 (yavaş) … 1 (doğal)
 * @param {Function} [secenek.bitince]
 * @returns {{basarili:boolean, sebep?:string}}
 */
export function seslendir(metin, secenek = {}) {
  const { aksan = 'usa', hiz = 1, bitince } = secenek
  if (!sesDesteginiKontrolEt()) {
    return { basarili: false, sebep: 'destek-yok' }
  }
  const ses = sesSec(aksan)
  if (!ses) {
    return { basarili: false, sebep: 'ingilizce-ses-yok' }
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
      mesaj: 'Bu tarayıcı İngilizce seslendirmeyi desteklemiyor. Dinleme çalışmaları yazılı biçimde açılacak.',
    }
  }
  const sesler = await sesleriYukle()
  const ingilizce = ingilizceSesler(sesler)
  if (!ingilizce.length) {
    return {
      hazir: false,
      sebep: 'ingilizce-ses-yok',
      mesaj: 'Cihazında kurulu bir İngilizce ses bulunamadı. Dinleme çalışmaları yazılı biçimde açılacak.',
      cozum: 'Telefonda Ayarlar → Erişilebilirlik → Konuşma bölümünden İngilizce ses indirebilirsin.',
    }
  }
  return {
    hazir: true,
    sesSayisi: ingilizce.length,
    aksanlar: {
      usa: ingilizce.some((s) => /en[-_]US/i.test(s.lang)),
      ing: ingilizce.some((s) => /en[-_]GB/i.test(s.lang)),
    },
  }
}
