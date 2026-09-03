/**
 * DRKOÇ — TELAFFUZ KAYDI
 * ==================================================================
 *
 * Öğrenci kendi söyleyişini kaydeder, geri dinler ve örnek sesle
 * karşılaştırır. Telaffuz öğrenmenin en etkili yolu budur: kişi kendi
 * sesini duymadan hatasını fark edemez.
 *
 * GİZLİLİK — ÖNEMLİ: kayıt tarayıcının belleğinde kalır. Hiçbir sunucuya,
 * hiçbir servise gönderilmez; sayfa kapanınca silinir. Ses tanıma
 * (konuşmayı otomatik puanlama) altyapısı YOKTUR ve sahtesi yapılmaz —
 * öğrenciye "telaffuzun %87 doğru" gibi uydurma bir puan gösterilmez.
 * Bunun yerine kendi kaydını örnekle karşılaştıracağı somut bir kontrol
 * listesi verilir.
 *
 * Mikrofon izni yalnızca öğrenci "Kaydet" düğmesine bastığında istenir.
 */

/** Tarayıcı ses kaydını destekliyor mu? */
export function kayitDesteginiKontrolEt() {
  return typeof window !== 'undefined'
    && typeof navigator !== 'undefined'
    && Boolean(navigator.mediaDevices?.getUserMedia)
    && typeof window.MediaRecorder === 'function'
}

/** Tarayıcının desteklediği ilk ses biçimini seçer. */
function bicimSec() {
  const adaylar = ['audio/webm', 'audio/webm;codecs=opus', 'audio/mp4', 'audio/ogg;codecs=opus']
  for (const tur of adaylar) {
    try {
      if (window.MediaRecorder.isTypeSupported?.(tur)) return tur
    } catch { /* yok say */ }
  }
  return ''
}

/**
 * Kayıt oturumu açar.
 *
 * @returns {Promise<{durdur: () => Promise<{url:string, blob:Blob, sure:number}>, iptal: () => void}>}
 * @throws {Error} izin verilmediğinde ya da destek yoksa — mesajı Türkçedir
 */
export async function kayitBaslat() {
  if (!kayitDesteginiKontrolEt()) {
    throw new Error('Bu tarayıcı ses kaydını desteklemiyor.')
  }

  let akis
  try {
    akis = await navigator.mediaDevices.getUserMedia({ audio: true })
  } catch (hata) {
    if (hata?.name === 'NotAllowedError' || hata?.name === 'SecurityError') {
      throw new Error('Mikrofon izni verilmedi. Kaydetmek için tarayıcının izin sorusuna "İzin ver" demen gerekiyor.')
    }
    if (hata?.name === 'NotFoundError') {
      throw new Error('Cihazda mikrofon bulunamadı.')
    }
    throw new Error('Mikrofon açılamadı. Başka bir uygulama mikrofonu kullanıyor olabilir.')
  }

  const bicim = bicimSec()
  const kaydedici = new window.MediaRecorder(akis, bicim ? { mimeType: bicim } : undefined)
  const parcalar = []
  const baslangic = Date.now()

  kaydedici.addEventListener('dataavailable', (olay) => {
    if (olay.data?.size > 0) parcalar.push(olay.data)
  })
  kaydedici.start()

  const akisiKapat = () => akis.getTracks().forEach((iz) => iz.stop())

  return {
    durdur: () =>
      new Promise((cozumle, reddet) => {
        kaydedici.addEventListener(
          'stop',
          () => {
            akisiKapat()
            try {
              const blob = new Blob(parcalar, { type: bicim || 'audio/webm' })
              cozumle({
                blob,
                url: URL.createObjectURL(blob),
                sure: Math.round((Date.now() - baslangic) / 100) / 10,
              })
            } catch (hata) {
              reddet(hata)
            }
          },
          { once: true }
        )
        try {
          kaydedici.stop()
        } catch (hata) {
          akisiKapat()
          reddet(hata)
        }
      }),
    iptal: () => {
      try { kaydedici.stop() } catch { /* yok say */ }
      akisiKapat()
    },
  }
}

/** Blob adresini serbest bırakır — bellek sızıntısı olmasın. */
export function kaydiBirak(url) {
  if (url) {
    try { URL.revokeObjectURL(url) } catch { /* yok say */ }
  }
}
