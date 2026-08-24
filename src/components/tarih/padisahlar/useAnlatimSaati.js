import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * ANLATIM SAATİ
 *
 * Sahnedeki her şey (portre girişi, bilgilerin sırayla açılması,
 * haritanın değişmesi) TEK bir saate bağlıdır. Bugün bu saat sanaldır:
 * requestAnimationFrame ile ilerler ve bölüm süreleri metinden
 * tahmin edilir.
 *
 * SES GELDİĞİNDE
 * `sesAdresi` dolu geldiğinde saat, <audio> öğesinin `currentTime`
 * değerinden beslenir. Sahne bileşenlerinin hiçbiri değişmez;
 * yalnızca saatin kaynağı değişir. Senkron sorunu bu yüzden tek
 * yerde çözülür.
 */
export default function useAnlatimSaati({ cizelge, toplam, sesAdresi = null, otomatik = false, hiz = 1 }) {
  const [an, setAn] = useState(0)
  const [calisiyor, setCalisiyor] = useState(otomatik)
  const [bitti, setBitti] = useState(false)
  const sesRef = useRef(null)
  const cerceveRef = useRef(0)
  const sonZamanRef = useRef(0)

  // Yeni bir padişaha geçildiğinde saat sıfırlanır.
  useEffect(() => {
    setAn(0)
    setBitti(false)
    setCalisiyor(otomatik)
    if (sesRef.current) {
      sesRef.current.pause()
      sesRef.current.currentTime = 0
    }
  }, [cizelge, otomatik])

  // Sanal saat — ses yokken kullanılan yol.
  useEffect(() => {
    if (sesAdresi || !calisiyor || !toplam) return undefined

    sonZamanRef.current = performance.now()
    const adim = (simdi) => {
      const gecen = ((simdi - sonZamanRef.current) / 1000) * hiz
      sonZamanRef.current = simdi
      setAn((onceki) => {
        const yeni = onceki + gecen
        if (yeni >= toplam) {
          setCalisiyor(false)
          setBitti(true)
          return toplam
        }
        return yeni
      })
      cerceveRef.current = requestAnimationFrame(adim)
    }
    cerceveRef.current = requestAnimationFrame(adim)
    return () => cancelAnimationFrame(cerceveRef.current)
  }, [calisiyor, hiz, sesAdresi, toplam])

  // Gerçek ses bağlandığında sanal saatin yerini doğrudan sesin
  // currentTime değeri alır. requestAnimationFrame altyazı ve sahne
  // geçişlerini `timeupdate` olayından daha akıcı tutar.
  useEffect(() => {
    const ses = sesRef.current
    if (!sesAdresi || !ses || !calisiyor) {
      if (ses && !calisiyor) ses.pause()
      return undefined
    }

    ses.playbackRate = hiz
    void ses.play().catch(() => setCalisiyor(false))

    const guncelle = () => {
      setAn(Math.min(toplam, ses.currentTime || 0))
      if (!ses.paused && !ses.ended) cerceveRef.current = requestAnimationFrame(guncelle)
    }
    cerceveRef.current = requestAnimationFrame(guncelle)
    return () => cancelAnimationFrame(cerceveRef.current)
  }, [calisiyor, hiz, sesAdresi, toplam])

  useEffect(() => {
    const ses = sesRef.current
    if (!sesAdresi || !ses) return undefined

    const tamamla = () => {
      setAn(toplam)
      setCalisiyor(false)
      setBitti(true)
    }
    const hata = () => setCalisiyor(false)
    ses.addEventListener('ended', tamamla)
    ses.addEventListener('error', hata)
    return () => {
      ses.removeEventListener('ended', tamamla)
      ses.removeEventListener('error', hata)
    }
  }, [sesAdresi, toplam])

  // Sekme arkaya alınınca anlatım durur — pil ve dikkat için.
  useEffect(() => {
    const gorunurluk = () => {
      if (document.hidden) setCalisiyor(false)
    }
    document.addEventListener('visibilitychange', gorunurluk)
    return () => document.removeEventListener('visibilitychange', gorunurluk)
  }, [])

  const oynatDurdur = useCallback(() => {
    setCalisiyor((onceki) => {
      const yeni = !onceki
      if (yeni && bitti) {
        setAn(0)
        setBitti(false)
        if (sesRef.current) sesRef.current.currentTime = 0
      }
      return yeni
    })
  }, [bitti])

  const bolumeGit = useCallback((sira) => {
    const bolum = cizelge[sira]
    if (!bolum) return
    setAn(bolum.start)
    setBitti(false)
    if (sesRef.current) sesRef.current.currentTime = bolum.start
  }, [cizelge])

  const sifirla = useCallback(() => {
    setAn(0)
    setBitti(false)
    if (sesRef.current) sesRef.current.currentTime = 0
  }, [])

  return { an, calisiyor, bitti, sesRef, oynatDurdur, bolumeGit, sifirla, setCalisiyor }
}
