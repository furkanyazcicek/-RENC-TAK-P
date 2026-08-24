import { useEffect, useRef, useState } from 'react'
import { ATLAS_MUZIGI, atlasMuzikAdresi } from '../../../data/padisahlar/muzik.js'

const DEPO_ANAHTARI = 'drkoc:padisah-muzik:v1'

/**
 * ATLAS FON MÜZİĞİ
 * ==================================================================
 *
 * Anlatımdan AYRI bir ses kanalıdır. Öğrenci müziği kapatıp anlatımı
 * dinlemeye devam edebilir; tersi de mümkündür.
 *
 * ÜÇ KURAL
 *
 * 1) KISILMA. Anlatıcı konuşurken müzik belirgin biçimde kısılır,
 *    sustuğunda geri yükselir. Belgesellerde ses karışımı böyle yapılır;
 *    sabit seviyede duran müzik konuşmayı boğar.
 *
 * 2) KENDİLİĞİNDEN BAŞLAMAZ. Tarayıcılar kullanıcı bir şeye dokunmadan
 *    ses çalmayı engeller — engellemeseler bile sayfayı açar açmaz müzik
 *    başlaması rahatsız edicidir. Müzik ancak öğrenci anlatımı
 *    başlattıktan sonra devreye girer.
 *
 * 3) TERCİH HATIRLANIR. Kapatan öğrenci her padişahta yeniden kapatmak
 *    zorunda kalmaz.
 */
export default function useFonMuzigi({ calisiyor }) {
  const adres = atlasMuzikAdresi()
  const sesRef = useRef(null)
  const yumusatmaRef = useRef(null)
  const [acik, setAcik] = useState(() => okunanTercih())
  // Öğrenci anlatımı bir kez başlattıysa artık ses çalma izni vardır.
  const [izinVar, setIzinVar] = useState(false)

  useEffect(() => {
    if (calisiyor) setIzinVar(true)
  }, [calisiyor])

  /* Çalma / durdurma. */
  useEffect(() => {
    const ses = sesRef.current
    if (!ses || !adres) return undefined

    if (acik && izinVar) {
      ses.volume = 0
      // Otomatik oynatma engellenirse sessizce vazgeç; sayfa bozulmasın.
      ses.play?.().catch(() => {})
    } else {
      ses.pause?.()
    }
    return undefined
  }, [acik, izinVar, adres])

  /* Seviye: anlatım konuşurken kısık, aralarda normal. */
  useEffect(() => {
    const ses = sesRef.current
    if (!ses || !adres || !acik || !izinVar) return undefined

    const hedef = calisiyor ? ATLAS_MUZIGI.kisikSeviye : ATLAS_MUZIGI.sesSeviyesi
    clearInterval(yumusatmaRef.current)

    const adim = 40
    const toplamAdim = Math.max(1, Math.round((ATLAS_MUZIGI.yumusamaSaniye * 1000) / adim))
    const baslangic = ses.volume
    let sayac = 0

    yumusatmaRef.current = setInterval(() => {
      sayac += 1
      const oran = Math.min(1, sayac / toplamAdim)
      ses.volume = Math.max(0, Math.min(1, baslangic + (hedef - baslangic) * oran))
      if (oran >= 1) clearInterval(yumusatmaRef.current)
    }, adim)

    return () => clearInterval(yumusatmaRef.current)
  }, [calisiyor, acik, izinVar, adres])

  useEffect(() => () => clearInterval(yumusatmaRef.current), [])

  function degistir() {
    setAcik((eski) => {
      const yeni = !eski
      tercihYaz(yeni)
      return yeni
    })
  }

  return {
    /** Müzik dosyası tanımlı mı — düğmenin aktif olup olmayacağı. */
    muzikVar: Boolean(adres),
    adres,
    acik,
    degistir,
    sesRef,
  }
}

function okunanTercih() {
  try {
    return window.localStorage.getItem(DEPO_ANAHTARI) !== 'kapali'
  } catch {
    return true
  }
}

function tercihYaz(acik) {
  try {
    window.localStorage.setItem(DEPO_ANAHTARI, acik ? 'acik' : 'kapali')
  } catch {
    /* Gizli sekmede depolama kapalı olabilir; tercih o oturumda yaşar. */
  }
}
