import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { ETKILESIM_REGISTRY } from '../../data/cografya/kapsam.js'

export default function GlobalArama({ onSec }) {
  const [arama, setArama] = useState('')
  const sonuclar = useMemo(() => {
    const q = arama.trim().toLocaleLowerCase('tr')
    if (q.length < 2) return []
    return Object.values(ETKILESIM_REGISTRY).filter((e) => `${e.baslik} ${e.altBasliklar.join(' ')}`.toLocaleLowerCase('tr').includes(q)).slice(0, 7)
  }, [arama])
  return <div className="ca-global-arama"><label><Search size={16}/><input value={arama} onChange={(event) => setArama(event.target.value)} placeholder="Kavram, harita veya süreç ara" aria-label="Coğrafya Atlasında ara"/></label>{sonuclar.length ? <div className="ca-arama-sonuclar">{sonuclar.map((sonuc) => <button key={sonuc.id} type="button" onClick={() => { onSec(sonuc); setArama('') }}><Search/><span><strong>{sonuc.baslik}</strong><small>{sonuc.altBasliklar.join(' · ')}</small></span></button>)}</div> : null}</div>
}
