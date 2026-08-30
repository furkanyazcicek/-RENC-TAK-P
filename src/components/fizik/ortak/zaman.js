/**
 * Fizik Atlası — Simülasyon zamanı
 * ==================================================================
 * Ekran yenileme hızı ile fizik zamanı **birbirinden ayrıdır**. 60 Hz
 * ekranda da 120 Hz ekranda da aynı fizik çıksın diye:
 *
 *  - Kare süresi gerçek saatten ölçülür (performance.now).
 *  - Sekme arka plana atılıp geri dönerse aradaki devasa boşluk
 *    kırpılır (yoksa cisim bir karede ekranın dışına fırlar).
 *  - Hız çarpanı fizik zamanını ölçekler; kare sayısını değil.
 */

import { useCallback, useEffect, useRef, useState } from 'react'

/** Bir karede ilerlenebilecek en uzun fizik süresi (saniye). */
const EN_UZUN_ADIM = 0.05

/**
 * @param {object} ayar
 * @param {number} [ayar.bitis] Bu süreye gelince otomatik durur (saniye).
 * @param {boolean} [ayar.dongu] Bitişte başa sarsın mı?
 * @param {number} [ayar.baslangicHizi] Zaman çarpanı (1 = gerçek zaman).
 */
export function useSimulasyonZamani({ bitis = null, dongu = false, baslangicHizi = 1 } = {}) {
  const [zaman, setZaman] = useState(0)
  const [calisiyor, setCalisiyor] = useState(false)
  const [hiz, setHiz] = useState(baslangicHizi)

  const cerceve = useRef(0)
  const sonAn = useRef(0)
  const hizRef = useRef(hiz)
  const bitisRef = useRef(bitis)
  const donguRef = useRef(dongu)

  hizRef.current = hiz
  bitisRef.current = bitis
  donguRef.current = dongu

  useEffect(() => {
    if (!calisiyor) return undefined
    sonAn.current = performance.now()

    const adim = (simdi) => {
      // Gerçek geçen süre; sekme uyuduysa kırpılır.
      const gercekDt = Math.min((simdi - sonAn.current) / 1000, EN_UZUN_ADIM)
      sonAn.current = simdi
      setZaman((t) => {
        const yeni = t + gercekDt * hizRef.current
        const son = bitisRef.current
        if (son !== null && yeni >= son) {
          if (donguRef.current) return yeni - son
          setCalisiyor(false)
          return son
        }
        return yeni
      })
      cerceve.current = requestAnimationFrame(adim)
    }

    cerceve.current = requestAnimationFrame(adim)
    return () => cancelAnimationFrame(cerceve.current)
  }, [calisiyor])

  const oynat = useCallback(() => {
    setZaman((t) => (bitisRef.current !== null && t >= bitisRef.current ? 0 : t))
    setCalisiyor(true)
  }, [])
  const duraklat = useCallback(() => setCalisiyor(false), [])
  const sifirla = useCallback(() => { setCalisiyor(false); setZaman(0) }, [])

  /** Tek kare ilerlet — duraklatılmışken adım adım incelemek için. */
  const adimla = useCallback((dt = 0.1) => {
    setCalisiyor(false)
    setZaman((t) => {
      const yeni = t + dt
      return bitisRef.current !== null ? Math.min(yeni, bitisRef.current) : yeni
    })
  }, [])

  const geriAdimla = useCallback((dt = 0.1) => {
    setCalisiyor(false)
    setZaman((t) => Math.max(0, t - dt))
  }, [])

  return { zaman, setZaman, calisiyor, oynat, duraklat, sifirla, adimla, geriAdimla, hiz, setHiz }
}
