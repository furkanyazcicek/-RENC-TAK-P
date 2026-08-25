import { CheckCircle2, Circle, ExternalLink } from 'lucide-react'
import { KAPSAM_MANIFESTI } from '../../data/biyoloji/kapsam.js'

export default function MufredatKapsami({ kapsam, ilerleme, onSec }) {
  const uniteler = KAPSAM_MANIFESTI.filter((u) => kapsam === 'tum' || u.kapsam === kapsam)
  return <div className="ba-bolge"><div className="ba-bolge-hero kapsam"><span className="ba-etiket">Canlı kapsam matrisi</span><h1>Müfredat kapsamı</h1><p>Her alt başlık bir etkileşim, girdiye özel geri bildirim ve transfer göreviyle eşleşir. Sayfayı açmak değil, kontrol noktasını bitirmek tamamlanma sayılır.</p></div><div className="ba-mufredat">{uniteler.map((unite) => { const biten = unite.altBasliklar.filter((k) => ilerleme.tamamlananlar[k.etkilesimId]).length; return <section key={unite.id}><header><div><span className="ba-etiket">{unite.kapsam === 'tymm' ? 'Yeni program / Enerji' : 'TYT sınav çekirdeği'} · {unite.sinif}. sınıf</span><h2>{unite.baslik}</h2><p>{unite.kazanim}</p></div><b>{biten}/{unite.altBasliklar.length}</b></header><div>{unite.altBasliklar.map((k) => { const tamam = Boolean(ilerleme.tamamlananlar[k.etkilesimId]); return <button key={k.id} onClick={() => onSec({ bolge: unite.bolge, id: k.etkilesimId })}>{tamam ? <CheckCircle2/> : <Circle/>}<span><b>{k.baslik}</b><small>{k.kazanim}</small></span><em>{k.kapsam === 'tymm' ? 'TYMM' : 'TYT'}</em><ExternalLink/></button> })}</div></section> })}</div></div>
}

