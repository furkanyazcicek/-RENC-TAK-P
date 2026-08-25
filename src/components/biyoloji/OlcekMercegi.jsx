import { ArrowRight, ScanSearch } from 'lucide-react'
import { useState } from 'react'

const OLCEKLER = [
  { ad: 'Molekül', ornek: 'Glikoz', bolge: 'molekul', konum: '8% 28%', soru: 'Bu molekül hangi yapı ve enerji dönüşümlerine katılır?', sonuc: 'Karbon iskeleti hücrede yapı taşı olabilir veya tepkimelerle enerji aktarımına katılabilir.' },
  { ad: 'Organel', ornek: 'Mitokondri', bolge: 'enerji', konum: '43% 88%', soru: 'Aynı molekül organel düzeyinde nasıl izlenir?', sonuc: 'Glikozdan taşınan elektronların enerjisi ATP üretimiyle hücresel işlere bağlanır.' },
  { ad: 'Hücre', ornek: 'Kas hücresi', bolge: 'hucre', konum: '34% 53%', soru: 'Enerji aktarımı azalırsa hücrenin hangi işleri etkilenir?', sonuc: 'Kasılma, aktif taşıma ve sentez gibi ATP isteyen süreçlerin hızı düşebilir.' },
  { ad: 'Organizma', ornek: 'İnsan', bolge: 'yasam', konum: '63% 55%', soru: 'Hücredeki gereksinim bütün organizmada nasıl karşılanır?', sonuc: 'Solunum, sindirim ve dolaşım sistemleri hücrelerin madde ve enerji gereksinimleriyle birlikte çalışır.' },
  { ad: 'Popülasyon', ornek: 'Geyik popülasyonu', bolge: 'ekosistem', konum: '83% 33%', soru: 'Bireylerin enerji ihtiyacı popülasyon büyüklüğünü sınırlar mı?', sonuc: 'Besin ve yaşam alanı sınırlanınca çevre direnci artar; büyüme taşıma kapasitesine yaklaşır.' },
  { ad: 'Ekosistem', ornek: 'Orman ve sulak alan', bolge: 'ekosistem', konum: '92% 45%', soru: 'Enerji ve madde aynı biçimde mi hareket eder?', sonuc: 'Enerji trofik düzeylerde azalırken madde üretici, tüketici ve ayrıştırıcılar arasında döngü yapar.' },
]

export default function OlcekMercegi({ onBolgeSec }) {
  const [indeks, setIndeks] = useState(2)
  const olcek = OLCEKLER[indeks]
  return (
    <section className="ba-mercek-yeni" aria-labelledby="olcek-baslik">
      <div className="ba-mercek-yeni-ust">
        <div><span className="ba-etiket"><ScanSearch /> Ölçek merceği</span><h2 id="olcek-baslik">Aynı olayı altı biyolojik ölçekte izle</h2><p>Ölçeği değiştirince yalnız görüntü değil, sorulan soru ve gözlenecek neden–sonuç ilişkisi de değişir.</p></div>
        <div className="ba-mercek-sekmeler" role="tablist" aria-label="Canlılık ölçeği">{OLCEKLER.map((o, i) => <button key={o.ad} type="button" role="tab" aria-selected={indeks === i} className={indeks === i ? 'etkin' : ''} onClick={() => setIndeks(i)}><small>{String(i + 1).padStart(2, '0')}</small>{o.ad}</button>)}</div>
      </div>
      <div className="ba-mercek-yeni-govde">
        <div className="ba-mercek-gorsel" style={{ '--odak': olcek.konum }} aria-hidden="true"><span /><i /><b>{olcek.ornek}</b></div>
        <div className="ba-mercek-anlatim" aria-live="polite">
          <span className="ba-etiket">{olcek.ad} ölçeği</span>
          <h3>{olcek.soru}</h3>
          <p>{olcek.sonuc}</p>
          <button type="button" onClick={() => onBolgeSec?.(olcek.bolge)}>Bu ilişkiyi deneyde aç <ArrowRight /></button>
        </div>
      </div>
    </section>
  )
}
