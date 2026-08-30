import { useState } from 'react'
import { Layers3, Search } from 'lucide-react'
import { MERCEK_NOKTALARI } from '../../data/cografya/haritaNoktalari.js'
import { KatmanliHarita, Secim } from './ortak/index.js'

const OLCEKLER = ['yerel', 'bölgesel', 'Türkiye', 'kıtasal', 'küresel']
const KATMANLAR = ['doğal', 'beşerî', 'ekonomik', 'risk', 'bağlantı']
const KANITLAR = ['harita', 'kesit', 'grafik', 'tablo', 'peyzaj']

export default function CografiMercek({ kompakt = false }) {
  const [olcek, setOlcek] = useState('Türkiye')
  const [katman, setKatman] = useState('doğal')
  const [kanit, setKanit] = useState('harita')
  const soru = olcek === 'yerel' ? 'Bu noktada hangi süreç işliyor?' : olcek === 'küresel' ? 'Bu dağılışın ortak deseni ne?' : 'Bu bölgede neden farklılaşma var?'
  return (
    <section className={`ca-mercek ${kompakt ? 'kompakt' : ''}`}>
      <div className="ca-mercek-aciklama"><span className="ca-etiket"><Search size={14}/> Birleştirici araç</span><h2>Coğrafi Mercek</h2><p>Ölçek, katman ve kanıt değiştiğinde sorulabilecek soru da değişir.</p><div className="ca-mercek-sonuc"><Layers3 size={17}/><span><small>{olcek} · {katman} · {kanit}</small><strong>{soru}</strong></span></div></div>
      <div className="ca-mercek-kontroller"><Secim etiket="Ölçek" deger={olcek} secenekler={OLCEKLER} onChange={setOlcek}/><Secim etiket="Katman" deger={katman} secenekler={KATMANLAR} onChange={setKatman}/><Secim etiket="Kanıt" deger={kanit} secenekler={KANITLAR} onChange={setKanit}/></div>
      {!kompakt ? <KatmanliHarita points={MERCEK_NOKTALARI} baslik={`${olcek} ölçekte ${katman} kanıt`} aktifKatman={katman}/> : null}
    </section>
  )
}
