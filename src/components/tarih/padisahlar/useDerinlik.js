import { useEffect, useRef } from 'react'

/**
 * DERİNLİK (PARALLAX) YAZICISI
 *
 * Kaydırma ilerlemesi React durumuna değil, doğrudan CSS
 * değişkenlerine yazılır; böylece her kaydırma karesinde bileşen
 * yeniden çizilmez.
 *
 * Her panel kendi `--pg-p` değerini alır: panel ekranın altındayken +1,
 * tam ortadayken 0, üstünden çıkarken -1. Katmanlar bu tek sayıyı farklı
 * çarpanlarla kullanır; arka plan yavaş, ön plan hızlı kayar.
 *
 * ÖNCEKİ SÜRÜMDE İKİ HATA VARDI — ikisi de parallax'ın sessizce
 * ölmesine yol açıyordu:
 *
 *   1. Kaydırma dinleyicisi yalnızca `.pgb-akis` öğesine bağlanıyordu.
 *      Dar ekranda düzen değişip sayfanın kendisi kaydırıcı olunca o
 *      öğe hiç "scroll" olayı üretmiyor ve hiçbir şey kımıldamıyordu.
 *      Çözüm: olay, yakalama evresinde `document` üzerinde dinlenir —
 *      hangi öğe kayarsa kaysın yakalanır.
 *
 *   2. Kare planlayıcı tek bir bayrak kullanıyordu. requestAnimationFrame
 *      herhangi bir sebeple düşerse (sekme arka plana alınır, cihaz
 *      yavaşlar) bayrak sıfırlanmadığı için bir daha ASLA kare
 *      planlanmıyordu; parallax kalıcı olarak duruyordu.
 *      Çözüm: bayrak karenin başında sıfırlanır, ayrıca görünürlük
 *      değişiminde ve boyut değişiminde yeniden hesaplanır.
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
      // Bayrak ÖNCE sıfırlanır: bu karede bir hata olsa bile bir
      // sonraki kaydırma yeni kare planlayabilsin.
      cerceveRef.current = 0
      if (!yakindakiler.size) return
      const kapKutu = kapsayici.getBoundingClientRect()
      // Kaydırıcı sayfanın kendisi olduğunda kapsayıcı ekrandan uzun
      // olabilir; ölçü her zaman GÖRÜNEN yükseklik üzerinden alınır.
      const yukseklik = Math.min(kapKutu.height || Infinity, window.innerHeight) || 1
      const ustSinir = Math.max(kapKutu.top, 0)

      yakindakiler.forEach((panel) => {
        const kutu = panel.getBoundingClientRect()
        const merkez = kutu.top - ustSinir + kutu.height / 2
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
          else {
            yakindakiler.delete(giris.target)
            // Ekrandan çıkan panel son değerinde donmasın.
            giris.target.style.removeProperty('--pg-p')
          }
        })
        planla()
      },
      { root: null, rootMargin: '80% 0px' }
    )

    const paneller = kapsayici.querySelectorAll('[data-derinlik-panel]')
    paneller.forEach((panel) => gozlemci.observe(panel))

    // Yakalama evresi: scroll olayı köpürmez, ama yakalanabilir.
    // Böylece kaydıran öğe hangisi olursa olsun haberdar oluruz.
    document.addEventListener('scroll', planla, { passive: true, capture: true })
    window.addEventListener('resize', planla, { passive: true })
    document.addEventListener('visibilitychange', planla)
    planla()

    return () => {
      gozlemci.disconnect()
      document.removeEventListener('scroll', planla, { capture: true })
      window.removeEventListener('resize', planla)
      document.removeEventListener('visibilitychange', planla)
      if (cerceveRef.current) window.cancelAnimationFrame(cerceveRef.current)
    }
  }, [kapali, kapsayiciRef])
}
