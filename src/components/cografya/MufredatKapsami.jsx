import { CheckCircle2, Circle } from 'lucide-react'
import { BOLGELER } from '../../data/cografya/bolgeler.js'
import { KAPSAM, bolgeEtkilesimleri } from '../../data/cografya/kapsam.js'

export default function MufredatKapsami({ kapsam, ilerleme, onSec }) {
  const filtre = (oge) => kapsam === 'tum' || oge.kapsam === 'ortak' || oge.kapsam === kapsam
  return <section className="ca-mufredat"><div className="ca-sayfa-bas"><span>Müfredat Kapsamı</span><h1>Her başlık bir kanıt görevine bağlı.</h1><p>TYT çekirdeği ve 2026 TYMM beceri katmanı aynı mekânsal düşünme rotasında buluşur.</p></div><div className="ca-mufredat-liste">{BOLGELER.slice(0, 11).filter(filtre).map((bolge, index) => { const etkilesimler = bolgeEtkilesimleri(bolge.kod).filter(filtre); const altlar = KAPSAM.filter((k) => k.bolge === bolge.kod && filtre(k)); return <article key={bolge.kod} style={{ '--bolge-renk': bolge.renk }}><header><span>{String(index + 1).padStart(2, '0')}</span><div><small>{bolge.konu}</small><h2>{bolge.ad}</h2></div><b>{altlar.length} başlık</b></header><div>{etkilesimler.map((etkilesim) => { const bitti = Boolean(ilerleme.tamamlananlar[etkilesim.id]); return <button key={etkilesim.id} type="button" onClick={() => onSec({ bolge: bolge.kod, id: etkilesim.id })}>{bitti ? <CheckCircle2/> : <Circle/>}<span><strong>{etkilesim.baslik}</strong><small>{etkilesim.altBasliklar.join(' · ')}</small></span><em>{etkilesim.kapsam === 'tymm' ? '2026 TYMM' : 'TYT + TYMM'}</em></button> })}</div></article> })}</div></section>
}
