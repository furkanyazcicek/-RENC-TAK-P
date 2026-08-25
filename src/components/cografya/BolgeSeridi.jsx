import { BookOpenCheck, Map, Trash2 } from 'lucide-react'
import { BOLGELER } from '../../data/cografya/bolgeler.js'
import { bolgeEtkilesimleri } from '../../data/cografya/kapsam.js'

export default function BolgeSeridi({ bolge, genel, yuzdeler, onSec, onSifirla }) {
  return (
    <nav className="ca-rota-seridi" aria-label="Coğrafya Atlası konu rotası">
      <div className="ca-rota-ust">
        <div><strong>Coğrafya rotası</strong><small>Kutu sırası = önerilen öğrenme akışı</small></div>
        <div className="ca-rota-araclar">
          <span className="ca-rota-genel"><i><b style={{ width: `${genel}%` }} /></i><em>%{genel}</em></span>
          <select aria-label="Coğrafya bölgesi seç" value={bolge} onChange={(event) => onSec(event.target.value)}>
            <option value="harita">Atlas rotası</option>
            <option value="mufredat">Müfredat kapsamı</option>
            {BOLGELER.map((b) => <option key={b.kod} value={b.kod}>{b.ad}</option>)}
          </select>
          <button type="button" className="ca-rota-sil" onClick={onSifirla} aria-label="Coğrafya Atlası ilerlemesini sıfırla"><Trash2 /></button>
        </div>
      </div>
      <div className="ca-rota-ray">
        <button type="button" className={`ca-rota-oge baslangic ${bolge === 'harita' ? 'etkin' : ''}`} aria-current={bolge === 'harita' ? 'page' : undefined} onClick={() => onSec('harita')}><Map/><span><small>00</small><strong>Atlas rotası</strong><em>Başlangıç sahnesi</em></span></button>
        <button type="button" className={`ca-rota-oge kapsam ${bolge === 'mufredat' ? 'etkin' : ''}`} aria-current={bolge === 'mufredat' ? 'page' : undefined} onClick={() => onSec('mufredat')}><BookOpenCheck/><span><small>K</small><strong>Müfredat</strong><em>2026 kapsamı</em></span></button>
        {BOLGELER.map((b, index) => {
          const izleniyor = bolgeEtkilesimleri(b.kod).length > 0
          return <button type="button" key={b.kod} className={`ca-rota-oge ${bolge === b.kod ? 'etkin' : ''}`} style={{ '--rota-renk': b.renk }} aria-current={bolge === b.kod ? 'page' : undefined} onClick={() => onSec(b.kod)}><i/><span><small>{String(index + 1).padStart(2, '0')}</small><strong>{b.kisaAd}</strong><em>{izleniyor ? `%${yuzdeler[b.kod]} tamamlandı` : 'Pekiştirme'}</em></span></button>
        })}
      </div>
    </nav>
  )
}
