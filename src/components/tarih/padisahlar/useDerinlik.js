import { useEffect, useRef } from 'react'

/**
 * DERİNLİK (PARALLAX) YAZICISI
 *
 * Ana sayfadaki `DepthScene` ile aynı mantık: kaydırma ilerlemesi React
 * durumuna değil, doğrudan CSS değişkenlerine yazılır. Böylece her
 * kaydırma karesinde bileşen yeniden çizilmez.
 *
 * Her panel kendi `--pg-p` değerini alır: panel ekranın altındayken +1,
 * tam ortadayken 0, üstünden çıkarken -1. Katmanlar bu tek sayıyı farklı
 * çarpanlarla kullanır; arka plan yavaş, ön plan hızlı kayar.
 *
 * PERFORMANS
 * Akışta 200'den fazla panel var. Her karede hepsinin konumunu ölçmek
 * kaydırmayı düşürürdü; bu yüzden yalnızca ekrana YAKIN paneller
 * (IntersectionObserver ile izlenen küme) ölçülür.
 */
export default function useDerinlik(kapsayiciRef, { kapali = false } = {}) {
  const cerceveRef = useRef(0)

  useEffect(() => {
    const kapsayici = kapsayiciRef.current
    if (!kapsayici || typeof window === 'undefined') return undefined

    // Hareket azaltma isteği veya zayıf cihaz: parallax hiç çalışmaz,
    // panel yine okunur — yalnızca katmanlar sabit durur.
    const hareketAzalt = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const zayifCihaz = navigator.deviceMemory !== undefined && navigator.deviceMemory <= 2
    if (kapali || hareketAzalt || zayifCihaz) return undefined

    const yakindakiler = new Set()

    const yaz = () => {
      cerceveRef.current = 0
      const kapKutu = kapsayici.getBoundingClientRect()
      const yukseklik = kapKutu.height || window.innerHeight || 1

      yakindakiler.forEach((panel) => {
        const kutu = panel.getBoundingClientRect()
        const merkez = kutu.top - kapKutu.top + kutu.height / 2
        const ilerleme = Math.max(-1.4, Math.min(1.4, (merkez - yukseklik / 2) / yukseklik))
        panel.style.setProperty('--pg-p', ilerleme.toFixed(3))
      })
    }

    const planla = () => {
      if (cerceveRef.current === 0) cerceveRef.current = window.requestAnimationFrame(yaz)
    }

    const gozlemci = new IntersectionObserver(
      (girisler) => {
        girisler.forEach((giris) => {
          if (giris.isIntersecting) yakindakiler.add(giris.target)
          else yakindakiler.delete(giris.target)
        })
        planla()
      },
      { root: kapsayici, rootMargin: '120% 0px' }
    )

    const paneller = kapsayici.querySelectorAll('[data-derinlik-panel]')
    paneller.forEach((panel) => gozlemci.observe(panel))

    kapsayici.addEventListener('scroll', planla, { passive: true })
    window.addEventListener('resize', planla, { passive: true })
    planla()

    return () => {
      gozlemci.disconnect()
      kapsayici.removeEventListener('scroll', planla)
      window.removeEventListener('resize', planla)
      if (cerceveRef.current) window.cancelAnimationFrame(cerceveRef.current)
    }
  }, [kapali, kapsayiciRef])
}
