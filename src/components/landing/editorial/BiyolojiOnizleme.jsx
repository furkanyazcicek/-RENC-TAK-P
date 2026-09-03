import { HucreKarsilastirmaMercegi } from '../../biyoloji/etkilesimler/HucreLaboratuvarlari'
import AtlasPreviewFrame from './AtlasPreviewFrame'

const HUCRE_TIPLERI = [['bitki', 'Bitki'], ['hayvan', 'Hayvan'], ['prokaryot', 'Prokaryot']]

function HucreOnizlemeSunumu({ tip, tipDegistir, secili, organelSec, hucre, organeller, bilgi, sahne }) {
  const tipAdi = HUCRE_TIPLERI.find(([id]) => id === tip)[1]
  return <>
    <div className="atlas-cell-tools">
      <div className="atlas-sample__segments" role="group" aria-label="Hücre tipi">
        {HUCRE_TIPLERI.map(([id, ad]) => <button key={id} type="button" aria-pressed={tip === id} onClick={() => tipDegistir(id)}>{ad}</button>)}
      </div>
      <span>Hücreyi seç, yapıların değişimini gözle.</span>
    </div>
    <div className="atlas-cell-study">
      <div className="atlas-cell-observation">
        <div className="atlas-cell-model">
          <div className="atlas-cell-model__heading"><span>HÜCRENİN İÇİNE BAK</span><strong>{tipAdi} hücresi</strong></div>
          {sahne}
        </div>
        <div className="atlas-cell-selector">
          <span className="atlas-sample__eyebrow">BİR YAPIYI İNCELE</span>
          <div className="atlas-cell-structures" role="group" aria-label="İncelenecek hücre yapısı">
            {organeller.map(([id, organel], index) => <button key={id} type="button" aria-pressed={secili === id} onClick={() => organelSec(id)}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{organel.ad}</button>)}
          </div>
        </div>
      </div>
      <div className="atlas-cell-detail" aria-live="polite" aria-atomic="true">
        <span className="atlas-sample__eyebrow">YAPI → İŞLEV</span>
        <h4>{bilgi.ad}</h4>
        <p>{bilgi.gorev}</p>
        <dl>
          <div><dt>Nerede bulunur?</dt><dd>{bilgi.kimde}</dd></div>
          <div><dt>Nasıl birlikte çalışır?</dt><dd>{tip === 'prokaryot' && secili === 'ribozom' ? 'Sitoplazmada protein üretir; granüllü ER bulunmaz.' : bilgi.isbirligi}</dd></div>
        </dl>
      </div>
    </div>
    <div className="atlas-cell-explore">
      <dl className="atlas-sample__measurements atlas-cell-comparison" aria-live="polite">
        {[["Hücre duvarı", hucre.duvar], ["Zarlı çekirdek", hucre.cekirdek], ["Kloroplast", hucre.kloroplast]].map(([ad, varMi]) => <div key={ad}><dt>{ad}</dt><dd><span aria-hidden="true">{varMi ? '+' : '−'}</span>{varMi ? 'Var' : 'Yok'}</dd></div>)}
      </dl>
      <p className="atlas-sample__insight">{tip === 'prokaryot' ? 'Zarlı çekirdek ve kloroplast yok, ribozom var. Protein sentezi için zarlı organel gerekmez.' : 'Prokaryot hücreyle karşılaştır: hücre duvarının bulunması, kloroplastın da bulunduğu anlamına gelir mi?'}</p>
    </div>
  </>
}

export default function BiyolojiOnizleme() {
  return <AtlasPreviewFrame ders="Biyoloji" baslik="Hücreyi değiştir. Farkı keşfet." hedef="/biyoloji-atlasi?bolge=hucre" sinif="atlas-sample--biology">
    <HucreKarsilastirmaMercegi onizleme onizlemeSunumu={HucreOnizlemeSunumu} />
    <p className="atlas-sample__note atlas-sample__inset">Biyoloji atlasının hücre karşılaştırma deneyi. Şekiller ve organel sayıları ölçekli değildir; bu önizleme ilerleme kaydetmez.</p>
  </AtlasPreviewFrame>
}
