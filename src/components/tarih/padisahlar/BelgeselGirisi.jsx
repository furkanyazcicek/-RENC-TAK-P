import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { PADISAHLAR } from '../../../data/padisahlar'

/**
 * BELGESEL GİRİŞİ — sabitlenmiş açılış sekansı
 * ==================================================================
 *
 * Shopify Editions (Spring '26) açılışının çözümlemesinden uyarlandı.
 * Oradan ALINAN fikirler:
 *   • Açılış, ekranda sabitlenip birkaç ekran boyu kaydırma süresince
 *     yaşar (orada 1.6 ekran; burada 2 ekran).
 *   • Kompozisyonun ölçüsü `vmin` ile verilir — halka telefonda da
 *     masaüstünde de aynı oranda durur.
 *   • Merkezde bir HALKA vardır ve kaydırdıkça yarıçapı büyüyerek
 *     izleyicinin içinden geçer.
 *
 * ALINMAYAN kısım: onların halkası WebGL2 parçacık sistemi (2560×1440
 * tuval, sürekli GPU yükü). Öğrencilerin çoğu telefondan giriyor;
 * aynı hissi 36 portreden kurulu bir CSS halkasıyla, tuval açmadan
 * veriyoruz. Hareket yalnızca transform ve opacity üzerinden yürür.
 *
 * İlerleme (`--pg-giris`, 0→1) tek bir sayıdır; bütün katmanlar onu
 * farklı çarpanlarla okur.
 */

/**
 * Halkadaki portreler ekranda en fazla 66 piksel genişliğinde duruyor;
 * oraya 720×960'lık dosyaları yüklemek anlamsız. `kucuk/` altındaki
 * 160 piksellik sürümler kullanılır: 36 portrenin tamamı 6,7 MB yerine
 * ~288 KB. Bu sayede halka GEÇ yüklenen boş çerçeveler yerine ilk
 * karede bütün olarak görünür — açılış ekranı ilk izlenimdir.
 */
function kucukGorsel(src) {
  if (!src) return null
  const ayrac = src.lastIndexOf('/')
  return ayrac === -1 ? src : `${src.slice(0, ayrac)}/kucuk${src.slice(ayrac)}`
}

/** Halkada gösterilecek portreler — silsilenin tamamı. */
const HALKA = PADISAHLAR.map((padisah, sira) => ({
  id: padisah.id,
  ad: padisah.name,
  gorsel: padisah.portrait?.kind === 'image' ? kucukGorsel(padisah.portrait.src) : null,
  tamGorsel: padisah.portrait?.kind === 'image' ? padisah.portrait.src : null,
  aci: (360 / PADISAHLAR.length) * sira,
  sira,
  order: padisah.order,
  yil: `${padisah.reignStart.value}–${padisah.reignEnd.value}`,
})).filter((oge) => oge.gorsel)

export default function BelgeselGirisi({ onBasla, onPadisahSec }) {
  const [ustundeki, setUstundeki] = useState(null)
  const kapsayiciRef = useRef(null)
  const cerceveRef = useRef(0)

  useEffect(() => {
    const kapsayici = kapsayiciRef.current
    if (!kapsayici) return undefined
    const kaydirici = kapsayici.closest('.pgb-akis')
    if (!kaydirici) return undefined

    const hareketAzalt = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (hareketAzalt) {
      kapsayici.style.setProperty('--pg-giris', '0')
      return undefined
    }

    const yaz = () => {
      // Bayrak önce sıfırlanır ki bir kare düşse bile akış donmasın.
      cerceveRef.current = 0
      const kutu = kapsayici.getBoundingClientRect()
      const gorunenYukseklik = Math.min(kaydirici.getBoundingClientRect().height || Infinity, window.innerHeight) || 1
      const yol = Math.max(1, kutu.height - gorunenYukseklik)
      // Açılış bloğunun tepesi ne kadar yukarı kaydı?
      const gecilen = Math.max(kaydirici.getBoundingClientRect().top, 0) - kutu.top
      const ilerleme = Math.max(0, Math.min(1, gecilen / yol))
      kapsayici.style.setProperty('--pg-giris', ilerleme.toFixed(4))
    }

    const planla = () => {
      if (cerceveRef.current === 0) cerceveRef.current = window.requestAnimationFrame(yaz)
    }

    // Kaydıran öğe düzene göre değişebiliyor (dar ekranda sayfanın
    // kendisi kayıyor); olay yakalama evresinde dinlenir.
    /**
     * İŞARETÇİ DERİNLİĞİ
     * Kaydırmaya bağlı hareket, kaydırma kabı düzene göre değiştiği için
     * kırılgan çıktı. Fare/parmak hareketi ise her zaman gelir: sahne
     * katmanları imlecin tersine kayar ve derinlik anında hissedilir.
     */
    const isaretciYaz = (olay) => {
      const kutu = kapsayici.getBoundingClientRect()
      const x = ((olay.clientX - kutu.left) / Math.max(1, kutu.width) - 0.5) * 2
      const y = ((olay.clientY - kutu.top) / Math.max(1, kutu.height) - 0.5) * 2
      kapsayici.style.setProperty('--pg-fx', `${(x * 16).toFixed(1)}px`)
      kapsayici.style.setProperty('--pg-fy', `${(y * 12).toFixed(1)}px`)
    }
    const isaretciSifirla = () => {
      kapsayici.style.setProperty('--pg-fx', '0px')
      kapsayici.style.setProperty('--pg-fy', '0px')
    }

    document.addEventListener('scroll', planla, { passive: true, capture: true })
    window.addEventListener('resize', planla, { passive: true })
    document.addEventListener('visibilitychange', planla)
    kapsayici.addEventListener('pointermove', isaretciYaz, { passive: true })
    kapsayici.addEventListener('pointerleave', isaretciSifirla)
    planla()

    return () => {
      document.removeEventListener('scroll', planla, { capture: true })
      window.removeEventListener('resize', planla)
      document.removeEventListener('visibilitychange', planla)
      kapsayici.removeEventListener('pointermove', isaretciYaz)
      kapsayici.removeEventListener('pointerleave', isaretciSifirla)
      if (cerceveRef.current) window.cancelAnimationFrame(cerceveRef.current)
    }
  }, [])

  return (
    <section className="pgg" ref={kapsayiciRef} aria-label="Belgesel açılışı">
      <div className="pgg-sahne">
        {/* Halka: silsilenin bütünü tek karede. Kaydırdıkça açılır. */}
        {/*
          Halka yalnızca süs değil, bir gezinme aracı: üzerine gelince
          dönüş durur, portre öne çıkar ve adı merkezde okunur; tıklayınca
          anlatım o padişaha atlar. Bu yüzden gerçek düğmelerden kuruldu —
          klavyeyle de gezilebilir.
        */}
        <div className="pgg-halka" role="list" aria-label="Osmanlı padişahları halkası">
          {HALKA.map((oge) => (
            <button
              type="button"
              key={oge.id}
              className="pgg-halka-oge"
              style={{ '--pg-aci': `${oge.aci}deg`, '--pg-sira': oge.sira }}
              aria-label={`${oge.order}. padişah ${oge.ad}, ${oge.yil}. Anlatımda bu padişaha git.`}
              onMouseEnter={() => setUstundeki(oge)}
              onMouseLeave={() => setUstundeki(null)}
              onFocus={() => setUstundeki(oge)}
              onBlur={() => setUstundeki(null)}
              onClick={() => onPadisahSec?.(oge.id)}
            >
              {/* İç sarmalayıcı halkanın sürekli dönüşünü geri alır,
                  portreler dik kalır. */}
              <span className="pgg-halka-ic">
              <img
                src={oge.gorsel}
                alt=""
                width="120"
                height="160"
                loading="eager"
                decoding="async"
                /* Küçük sürüm bir sebeple yoksa tam boy dosyaya düşer. */
                onError={(olay) => {
                  if (oge.tamGorsel && olay.currentTarget.src !== oge.tamGorsel) {
                    olay.currentTarget.src = oge.tamGorsel
                  }
                }}
              />
              </span>
            </button>
          ))}
        </div>

        <div className="pgg-merkez">
          <p className="pgg-ustyazi">Dr. Koç · Tarih</p>
          <h1 className="pgg-ad">Osmanlı Padişahları</h1>
          <p className="pgg-alt" aria-live="polite">
            {ustundeki
              ? `${ustundeki.order}. ${ustundeki.ad} · ${ustundeki.yil}`
              : 'Otuz altı hükümdar, altı yüz yıl, tek bir akış'}
          </p>

          <div className="pgg-yil" aria-hidden="true">
            <span>1299</span>
            <small>Bir beylik doğuyor</small>
          </div>

          <button type="button" className="pgg-dugme" onClick={onBasla}>
            Anlatımı başlat
          </button>

          <p className="pgg-ipucu">
            <ChevronDown size={14} aria-hidden="true" />
            Kaydırarak ilerle
          </p>
        </div>
      </div>
    </section>
  )
}
