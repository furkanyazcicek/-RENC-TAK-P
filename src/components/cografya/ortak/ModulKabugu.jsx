import { useState } from 'react'
import { CheckCircle2, Compass, Lightbulb, TriangleAlert } from 'lucide-react'
import { kaynakBul } from '../../../data/cografya/kaynaklar.js'
import { yanilgiBul } from '../../../data/cografya/yanilgilar.js'
import { etkilesimTamamla, hataKaydet } from '../../../lib/cografya/ilerleme.js'

export function BolgeBasligi({ etiket = 'TYT Coğrafya', baslik, aciklama, renk, sayi }) {
  return (
    <section className="ca-bolge-baslik" style={{ '--bolge-renk': renk }}>
      <div><span>{etiket}</span><h1>{baslik}</h1><p>{aciklama}</p></div>
      {sayi ? <div className="ca-bolge-sayac"><strong>{sayi}</strong><small>etkileşimli durak</small></div> : null}
    </section>
  )
}

export default function ModulKabugu({
  id,
  bolge,
  baslik,
  aciklama,
  tahmin,
  kontrol,
  transfer,
  yanilgiId,
  kaynakIdleri = ['sematik-model'],
  modelNotu = 'Bu görsel öğretim amaçlı şematik bir modeldir; gerçek ölçek iddiası taşımaz.',
  children,
}) {
  const [tahminSecimi, setTahminSecimi] = useState(null)
  const [gorevYapildi, setGorevYapildi] = useState(false)
  const [kontrolSecimi, setKontrolSecimi] = useState(null)
  const [transferSecimi, setTransferSecimi] = useState(null)
  const [tamamlandi, setTamamlandi] = useState(false)
  const yanilgi = yanilgiBul(yanilgiId)
  const kontrolDogru = kontrolSecimi === kontrol?.cevap
  const transferDogru = transferSecimi === transfer?.cevap

  const kanitla = () => setGorevYapildi(true)
  const transferSec = (index) => {
    setTransferSecimi(index)
    if (index === transfer.cevap && gorevYapildi && kontrolDogru) {
      etkilesimTamamla(id, bolge, { tahmin: tahminSecimi !== null, gorev: true, kontrol: true })
      setTamamlandi(true)
    } else if (index !== transfer.cevap) {
      hataKaydet(`${id}-transfer`, index, yanilgi?.eksikKanit || 'mekânsal kanıt')
    }
  }

  return (
    <article className="ca-modul" id={id}>
      <header className="ca-modul-baslik">
        <div><span className="ca-etiket"><Compass size={13} /> Etkileşimli durak</span><h2>{baslik}</h2><p>{aciklama}</p></div>
        <span className={`ca-tamam-rozet ${tamamlandi ? 'tamam' : ''}`}><CheckCircle2 size={15} /> {tamamlandi ? 'Tamamlandı' : 'Kanıt bekliyor'}</span>
      </header>

      {tahmin ? (
        <section className="ca-soru-kutusu tahmin" aria-labelledby={`${id}-tahmin`}>
          <h3 id={`${id}-tahmin`}><Lightbulb size={16} /> Önce tahmin et</h3>
          <p>{tahmin.soru}</p>
          <div>{tahmin.secenekler.map((secenek, index) => <button key={secenek} type="button" className={tahminSecimi === index ? 'secili' : ''} aria-pressed={tahminSecimi === index} onClick={() => setTahminSecimi(index)}>{secenek}</button>)}</div>
          {tahminSecimi !== null ? <small>Tahminin kaydedildi. Şimdi kanıtı değiştirip sonucu gözle.</small> : null}
        </section>
      ) : null}

      <div className="ca-deney-alani">{typeof children === 'function' ? children({ kanitla, gorevYapildi }) : children}</div>

      {yanilgi ? <aside className="ca-yanilgi"><TriangleAlert size={17} /><div><span>Yanılgı durağı</span><strong>{yanilgi.iddia}</strong><p>{yanilgi.dogrusu} Atlanan kanıt: <b>{yanilgi.eksikKanit}</b>.</p></div></aside> : null}

      {kontrol ? (
        <section className="ca-soru-kutusu kontrol" aria-labelledby={`${id}-kontrol`}>
          <h3 id={`${id}-kontrol`}>Kanıt kontrolü</h3><p>{kontrol.soru}</p>
          <div>{kontrol.secenekler.map((secenek, index) => <button key={secenek} type="button" className={kontrolSecimi === index ? (index === kontrol.cevap ? 'dogru' : 'yanlis') : ''} onClick={() => { setKontrolSecimi(index); if (index !== kontrol.cevap) hataKaydet(`${id}-kontrol`, index, yanilgi?.eksikKanit || 'gerekli kanıt') }}>{secenek}</button>)}</div>
          {kontrolSecimi !== null ? <small className={kontrolDogru ? 'olumlu' : 'uyari'}>{kontrolDogru ? kontrol.aciklama : `Bu seçim gerekli kanıtın tamamını kullanmıyor. ${yanilgi?.eksikKanit || 'Değişkenleri'} yeniden kontrol et.`}</small> : null}
        </section>
      ) : null}

      {transfer ? (
        <section className="ca-soru-kutusu transfer" aria-labelledby={`${id}-transfer`}>
          <h3 id={`${id}-transfer`}>Yeni mekâna transfer</h3><p>{transfer.soru}</p>
          <div>{transfer.secenekler.map((secenek, index) => <button key={secenek} type="button" disabled={!gorevYapildi || !kontrolDogru} className={transferSecimi === index ? (index === transfer.cevap ? 'dogru' : 'yanlis') : ''} onClick={() => transferSec(index)}>{secenek}</button>)}</div>
          {!gorevYapildi ? <small className="uyari">Transferden önce modelde en az bir değişkeni değiştir.</small> : !kontrolDogru ? <small className="uyari">Transferi açmak için kanıt kontrolünü doğru tamamla.</small> : transferSecimi !== null ? <small className={transferDogru ? 'olumlu' : 'uyari'}>{transferDogru ? transfer.aciklama : 'Aynı ilkeyi yeni veride yeniden ara.'}</small> : null}
        </section>
      ) : null}

      <footer className="ca-model-notu">
        <span>{modelNotu}</span>
        <span>{kaynakIdleri.map(kaynakBul).filter(Boolean).map((kaynak) => `${kaynak.ad} (${kaynak.erisim})`).join(' · ')}</span>
      </footer>
    </article>
  )
}
