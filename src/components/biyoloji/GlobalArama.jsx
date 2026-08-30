import { useMemo, useState } from 'react'
import { FlaskConical, MapPin, Search } from 'lucide-react'
import { ALT_BASLIKLAR } from '../../data/biyoloji/kapsam.js'
import { BOLGELER } from '../../data/biyoloji/bolgeler.js'

const norm = (m) => String(m ?? '').toLocaleLowerCase('tr').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
export default function GlobalArama({ onSec }) {
  const [sorgu, setSorgu] = useState('')
  const [acik, setAcik] = useState(false)
  const sonuclar = useMemo(() => {
    const n = norm(sorgu)
    if (!n) return []
    return [
      ...BOLGELER.map((b) => ({ tur: 'bolge', ad: b.ad, alt: b.amac, bolge: b.kod, id: null })),
      ...ALT_BASLIKLAR.map((k) => ({ tur: 'etkilesim', ad: k.baslik, alt: k.uniteBaslik, bolge: k.bolge, id: k.etkilesimId })),
    ].filter((x) => norm(`${x.ad} ${x.alt}`).includes(n)).slice(0, 8)
  }, [sorgu])
  return <div className="ba-global-arama"><label className="ba-arama"><Search size={15}/><input value={sorgu} onFocus={() => setAcik(true)} onChange={(e) => { setSorgu(e.target.value); setAcik(true) }} onKeyDown={(e) => { if (e.key === 'Escape') setAcik(false) }} placeholder="Kavram, organel, süreç veya deney ara…" aria-label="Biyoloji Atlası içinde ara" aria-expanded={acik && sonuclar.length > 0}/></label>{acik && sonuclar.length > 0 ? <div className="ba-arama-sonuclar" role="listbox">{sonuclar.map((s, i) => <button key={`${s.bolge}-${s.id}-${i}`} onClick={() => { onSec(s); setSorgu(''); setAcik(false) }}><span>{s.tur === 'bolge' ? <MapPin/> : <FlaskConical/>}</span><b>{s.ad}<small>{s.alt}</small></b></button>)}</div> : null}</div>
}

