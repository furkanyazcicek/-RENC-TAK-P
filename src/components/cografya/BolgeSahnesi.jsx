import { Eye, Layers3, MousePointer2, Orbit } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { bolgeBul } from '../../data/cografya/bolgeler.js'
import { bolgeSahnesi } from '../../data/cografya/gorseller.js'

export default function BolgeSahnesi({ bolgeKod }) {
  const sahne = useMemo(() => bolgeSahnesi(bolgeKod), [bolgeKod])
  const [katman, setKatman] = useState(sahne.ilkKatman)
  const [odakId, setOdakId] = useState(null)
  const tuvalRef = useRef(null)
  const bolge = bolgeBul(bolgeKod)

  const odaklar = sahne.odaklar.filter((odak) => odak.katman === katman)
  const seciliOdak = odaklar.find((odak) => odak.id === odakId) ?? odaklar[0]
  const seciliKatman = sahne.katmanlar.find((oge) => oge.id === katman) ?? sahne.katmanlar[0]

  useEffect(() => {
    setKatman(sahne.ilkKatman)
    setOdakId(null)
  }, [sahne.kod, sahne.ilkKatman])

  const katmanSec = (id) => {
    setKatman(id)
    setOdakId(null)
  }

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

  return <section className="ca-bolge-sahne" aria-labelledby="ca-sahne-baslik">
    <header className="ca-sahne-ust">
      <div><span><Eye/> Canlı coğrafya sahnesi</span><h2 id="ca-sahne-baslik">{sahne.baslik}</h2><p>{bolge?.ad} için görsel kanıt katmanını seç.</p></div>
      <div className="ca-sahne-katmanlar" role="group" aria-label="Görsel kanıt katmanı">
        {sahne.katmanlar.map((oge) => <button type="button" key={oge.id} aria-pressed={katman === oge.id} onClick={() => katmanSec(oge.id)}><Layers3/>{oge.ad}</button>)}
      </div>
    </header>
    <div ref={tuvalRef} className="ca-sahne-tuval" data-katman={katman} onPointerMove={derinlikVer} onPointerLeave={derinlikSifirla}>
      <img src={sahne.src} alt={sahne.alt} draggable="false" />
      <div className="ca-sahne-renk" aria-hidden="true" />
      {odaklar.map((odak, index) => <button
        type="button"
        key={odak.id}
        className={`ca-sahne-odak ${seciliOdak?.id === odak.id ? 'etkin' : ''}`}
        style={{ left: `${odak.x}%`, top: `${odak.y}%` }}
        onClick={() => setOdakId(odak.id)}
        aria-label={`${odak.baslik}: açıklamayı göster`}
        aria-pressed={seciliOdak?.id === odak.id}
      ><span>{String(index + 1).padStart(2, '0')}</span></button>)}
      {seciliOdak ? <article className="ca-sahne-bilgi" aria-live="polite">
        <small>{seciliKatman.ad} · {bolge?.kisaAd}</small>
        <strong>{seciliOdak.baslik}</strong>
        <p>{seciliOdak.metin}</p>
        <span><MousePointer2/> Noktalara dokun <i/> <Orbit/> Fareyle derinliği keşfet</span>
      </article> : null}
    </div>
    <footer className="ca-sahne-alt"><span>{seciliKatman.ad} katmanı</span><p>{seciliKatman.aciklama}</p><em>{odaklar.length} kanıt noktası</em></footer>
  </section>
}
