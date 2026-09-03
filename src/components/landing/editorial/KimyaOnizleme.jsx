import { useState } from 'react'
import { ElementHucre } from '../../kimya/PeriyodikSistem'
import BohrModeli from '../../kimya/BohrModeli'
import { ELEMENTLER, KATEGORILER, KATEGORI_SOZLUGU, HAL_ADI } from '../../../data/kimya/elementler'
import AtlasPreviewFrame from './AtlasPreviewFrame'

export default function KimyaOnizleme() {
  const [secili, setSecili] = useState(ELEMENTLER[7])
  const [kategori, setKategori] = useState('hepsi')
  const renk = KATEGORI_SOZLUGU[secili.kategori]
  return <AtlasPreviewFrame ders="Kimya" baslik="118 element. Keşfedilecek bir düzen." hedef="/kimya-atlasi?bolum=periyodik" sinif="atlas-sample--chemistry">
    <div className="atlas-periodic-tools"><label>Element ailesi<select value={kategori} onChange={(e) => setKategori(e.target.value)}><option value="hepsi">Tüm elementler</option>{KATEGORILER.map((k) => <option key={k.kod} value={k.kod}>{k.ad}</option>)}</select></label><span aria-live="polite"><strong>{secili.ad}</strong> · Atom no {secili.atomNo} · Katmanlar {secili.katmanlar.join('–')}</span></div>
    <div className="atlas-periodic-scroll" tabIndex={0} role="region" aria-label="118 elementli periyodik cetvel; dar ekranda yatay kaydırılabilir">
      <div className="atlas-periodic">
        {ELEMENTLER.map((e) => <ElementHucre key={e.atomNo} element={e} secili={secili.atomNo === e.atomNo} sonuk={kategori !== 'hepsi' && kategori !== e.kategori} onSec={setSecili} degerlikGoster={false} />)}
        <span className="atlas-periodic-fblock" style={{ gridRow: 9 }}>Lantanitler</span><span className="atlas-periodic-fblock" style={{ gridRow: 10 }}>Aktinitler</span>
      </div>
    </div>
    <p className="atlas-periodic-hint">Cetvelin tamamı için yatay kaydırabilirsin. Element adları klavyeyle de seçilebilir.</p>
    <div className="atlas-element-detail" aria-live="polite">
      <div className="atlas-element-identity"><div className="atlas-element-symbol" style={{ background: renk.renk, color: renk.metin }}><small>{secili.atomNo}</small><strong>{secili.sembol}</strong></div><div><span>{renk.ad}</span><h4>{secili.ad}</h4><p>{secili.periyot}. periyot · {secili.grup ? `${secili.grup}. grup` : `${secili.blok} bloğu`} · {HAL_ADI[secili.hal]}</p></div></div>
      <BohrModeli element={secili} boyut={180} hareketli={false} />
      <dl><div><dt>Elektron dizilimi</dt><dd>{secili.dizilimMetni}</dd></div><div><dt>Katman dağılımı</dt><dd>{secili.katmanlar.join(' · ')}</dd></div><div><dt>Nötr atomda proton / elektron</dt><dd>{secili.atomNo} / {secili.atomNo}</dd></div></dl>
    </div>
    <p className="atlas-sample__note atlas-sample__inset">Kimya atlasının element verileri ve Bohr modeli kullanılır. Bu model katman dağılımını anlatır; elektronların gerçek yörüngesi değildir.</p>
  </AtlasPreviewFrame>
}
