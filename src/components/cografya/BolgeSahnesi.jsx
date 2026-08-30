/**
 * Coğrafya Atlası — Bölge sahnesi
 * ==================================================================
 * Bölgenin fotogerçekçi zemini + o bölgeye ait kanıt noktaları.
 *
 * Padişah Geçidi'nde sahne, anlatımın üzerinde durduğu zemindi; burada
 * da öyle: fotoğraf süs değil, üzerinde soru sorulan kanıt yüzeyi.
 *
 * İki davranış kuralı:
 *   · Bilgi kartı seçili noktanın **karşı köşesine** yerleşir. Önceden
 *     hep sol üstteydi ve çoğu zaman anlattığı noktanın üstünü örtüyordu.
 *   · Noktalar arasında alttaki düğmelerle sırayla gezilebilir; kaçıncı
 *     kanıtta olunduğu her zaman yazılıdır.
 */

import { ChevronLeft, ChevronRight, Eye, Layers3, MousePointer2 } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { bolgeBul } from '../../data/cografya/bolgeler.js'
import { bolgeSahnesi } from '../../data/cografya/gorseller.js'

export default function BolgeSahnesi({ bolgeKod }) {
  const sahne = useMemo(() => bolgeSahnesi(bolgeKod), [bolgeKod])
  const [katman, setKatman] = useState(sahne.ilkKatman)
  const [odakId, setOdakId] = useState(null)
  const tuvalRef = useRef(null)
  const gorselRef = useRef(null)
  const [kadraj, setKadraj] = useState(null)
  const [darEkran, setDarEkran] = useState(() => (typeof window !== 'undefined'
    ? window.matchMedia('(max-width: 700px)').matches
    : false))
  const bolge = bolgeBul(bolgeKod)
  const gorsel = useMemo(() => sahne.gorselKatmanlari?.[katman] ?? {
    src: sahne.src,
    alt: sahne.alt,
  }, [sahne, katman])

  /* Telefonda bilgi kartı fotoğrafın üstünde durunca kanıt noktalarının
     çoğunu örtüyordu; orada kart fotoğrafın altına, altyazı gibi iner. */
  useEffect(() => {
    const olcut = window.matchMedia('(max-width: 700px)')
    const dinle = (olay) => setDarEkran(olay.matches)
    olcut.addEventListener('change', dinle)
    return () => olcut.removeEventListener('change', dinle)
  }, [])

  /**
   * Kanıt noktaları fotoğrafın **kendi** yüzdesine göre tanımlı, ama
   * fotoğraf `object-fit: cover` ile kırpılarak yerleşiyor. Kırpma
   * hesaba katılmazsa nokta, anlattığı ayrıntının yanına düşer.
   * Burada çizilen görselin kutu içindeki gerçek dikdörtgeni bulunur.
   */
  useEffect(() => {
    const tuval = tuvalRef.current
    const gorsel = gorselRef.current
    if (!tuval || !gorsel) return undefined
    const hesapla = () => {
      const kg = tuval.clientWidth
      const ky = tuval.clientHeight
      const gg = gorsel.naturalWidth
      const gy = gorsel.naturalHeight
      if (!kg || !ky || !gg || !gy) return
      const olcek = Math.max(kg / gg, ky / gy)
      const g = gg * olcek
      const y = gy * olcek
      setKadraj({ sol: (kg - g) / 2, ust: (ky - y) / 2, gen: g, yuk: y })
    }
    hesapla()
    const gozlemci = new ResizeObserver(hesapla)
    gozlemci.observe(tuval)
    gorsel.addEventListener('load', hesapla)
    return () => { gozlemci.disconnect(); gorsel.removeEventListener('load', hesapla) }
  }, [gorsel.src])

  const odakYeri = useCallback((odak) => (kadraj
    ? { left: `${kadraj.sol + (odak.x / 100) * kadraj.gen}px`, top: `${kadraj.ust + (odak.y / 100) * kadraj.yuk}px` }
    : { left: `${odak.x}%`, top: `${odak.y}%` }), [kadraj])

  const odaklar = useMemo(() => sahne.odaklar.filter((odak) => odak.katman === katman), [sahne, katman])
  const seciliSira = Math.max(0, odaklar.findIndex((odak) => odak.id === odakId))
  const seciliOdak = odaklar[seciliSira] ?? null
  const seciliKatman = sahne.katmanlar.find((oge) => oge.id === katman) ?? sahne.katmanlar[0]

  useEffect(() => {
    setKatman(sahne.ilkKatman)
    setOdakId(null)
  }, [sahne.kod, sahne.ilkKatman])

  const katmanSec = (id) => {
    setKatman(id)
    setOdakId(null)
  }
  const odakKaydir = useCallback((yon) => {
    if (!odaklar.length) return
    const yeni = (seciliSira + yon + odaklar.length) % odaklar.length
    setOdakId(odaklar[yeni].id)
  }, [odaklar, seciliSira])

  /* Bilgi kartı, seçili noktanın karşı köşesine gider. */
  const kartYeri = seciliOdak
    ? `${seciliOdak.y < 55 ? 'alt' : 'ust'}-${seciliOdak.x < 50 ? 'sag' : 'sol'}`
    : 'ust-sol'

  const derinlikVer = (event) => {
    const tuval = tuvalRef.current
    if (!tuval || event.pointerType === 'touch') return
    const alan = tuval.getBoundingClientRect()
    const x = ((event.clientX - alan.left) / alan.width - 0.5) * 12
    const y = ((event.clientY - alan.top) / alan.height - 0.5) * 8
    tuval.style.setProperty('--sahne-x', `${x}px`)
    tuval.style.setProperty('--sahne-y', `${y}px`)
  }
  const derinlikSifirla = () => {
    tuvalRef.current?.style.setProperty('--sahne-x', '0px')
    tuvalRef.current?.style.setProperty('--sahne-y', '0px')
  }

  const kart = seciliOdak ? (
    <article className="ca-sahne-bilgi" aria-live="polite">
      <small>{seciliKatman.ad} · {bolge?.kisaAd}</small>
      <strong>{seciliOdak.baslik}</strong>
      <p>{seciliOdak.metin}</p>
      <div className="ca-sahne-gezinme">
        <button type="button" onClick={() => odakKaydir(-1)} aria-label="Önceki kanıt"><ChevronLeft /></button>
        <em>{String(seciliSira + 1).padStart(2, '0')} / {String(odaklar.length).padStart(2, '0')} kanıt</em>
        <button type="button" onClick={() => odakKaydir(1)} aria-label="Sonraki kanıt"><ChevronRight /></button>
      </div>
    </article>
  ) : null

  return <section className="ca-bolge-sahne" aria-labelledby="ca-sahne-baslik">
    <header className="ca-sahne-ust">
      <div>
        <span><Eye /> Canlı coğrafya sahnesi</span>
        <h2 id="ca-sahne-baslik">{sahne.baslik}</h2>
        <p>{bolge?.ad} için görsel kanıt katmanını seç.</p>
      </div>
      <div className="ca-sahne-katmanlar" role="group" aria-label="Görsel kanıt katmanı">
        {sahne.katmanlar.map((oge) => (
          <button type="button" key={oge.id} aria-pressed={katman === oge.id} onClick={() => katmanSec(oge.id)}>
            <Layers3 />{oge.ad}
          </button>
        ))}
      </div>
    </header>

    <div
      ref={tuvalRef}
      className="ca-sahne-tuval"
      data-katman={katman}
      data-kart={kartYeri}
      onPointerMove={derinlikVer}
      onPointerLeave={derinlikSifirla}
    >
      <div className="ca-sahne-kadraj">
        <img ref={gorselRef} src={gorsel.src} alt={gorsel.alt} draggable="false" />
        <div className="ca-sahne-renk" aria-hidden="true" />
        {odaklar.map((odak, index) => (
          <button
            type="button"
            key={odak.id}
            className={`ca-sahne-odak ${seciliOdak?.id === odak.id ? 'etkin' : ''}`}
            style={odakYeri(odak)}
            onClick={() => setOdakId(odak.id)}
            aria-label={`${index + 1}. kanıt — ${odak.baslik}`}
            aria-pressed={seciliOdak?.id === odak.id}
          ><span>{String(index + 1).padStart(2, '0')}</span></button>
        ))}
      </div>

      {seciliOdak && !darEkran ? kart : null}
      {!seciliOdak ? (
        <p className="ca-sahne-ipucu"><MousePointer2 /> Numaralı noktalara dokun · {odaklar.length} kanıt var</p>
      ) : null}
    </div>

    {seciliOdak && darEkran ? kart : null}

    <footer className="ca-sahne-alt">
      <span>{seciliKatman.ad} katmanı</span>
      <p>{seciliKatman.aciklama}</p>
      <em>{odaklar.length} kanıt noktası · fotogerçekçi öğretim zemini</em>
    </footer>
  </section>
}
