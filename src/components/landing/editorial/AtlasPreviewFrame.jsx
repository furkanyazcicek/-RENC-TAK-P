import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AtlasPreviewFrame({ ders, baslik, hedef, sinif = '', children }) {
  return <section className={`atlas-sample ${sinif}`} aria-label={`${ders} atlası önizlemesi`}>
    <header className="atlas-sample__header">
      <div><span>{ders.toLocaleUpperCase('tr')} ATLASI / DENE VE KEŞFET</span><h3>{baslik}</h3></div>
      <Link to={hedef}>Tam atlası aç <ArrowUpRight size={17} aria-hidden="true" /></Link>
    </header>
    {children}
  </section>
}

export function OnizlemeKaydirici({ ad, deger, alt, ust, adim = 1, birim, degistir }) {
  return <label className="atlas-sample__range">
    <span>{ad}<output>{new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 1 }).format(deger)} {birim}</output></span>
    <input type="range" aria-label={ad} min={alt} max={ust} step={adim} value={deger} onChange={(event) => degistir(Number(event.target.value))} />
  </label>
}
