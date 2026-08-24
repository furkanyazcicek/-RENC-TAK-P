import { useMemo, useState } from 'react'
import { AlertTriangle, ArrowRight, CheckCircle2, RotateCcw, Trophy, XCircle } from 'lucide-react'
import { testHazirla } from '../../data/kimya/testSorulari.js'

const HARFLER = ['A', 'B', 'C', 'D']

export default function MiniTest() {
  const [tur, setTur] = useState(0)
  const sorular = useMemo(() => testHazirla(8), [tur])
  const [indeks, setIndeks] = useState(0)
  const [cevaplar, setCevaplar] = useState([])
  const [secim, setSecim] = useState(null)

  const soru = sorular[indeks]
  const bitti = indeks >= sorular.length
  const dogruSayisi = cevaplar.filter((c) => c.dogruMu).length

  const cevapla = (i) => {
    if (secim != null) return
    setSecim(i)
    setCevaplar((c) => [...c, { konu: soru.konu, dogruMu: i === soru.dogru }])
  }

  const ilerle = () => { setSecim(null); setIndeks((i) => i + 1) }
  const yenidenBasla = () => { setTur((t) => t + 1); setIndeks(0); setCevaplar([]); setSecim(null) }

  if (bitti) {
    const oran = Math.round((dogruSayisi / sorular.length) * 100)
    const zayifKonular = [...new Set(cevaplar.filter((c) => !c.dogruMu).map((c) => c.konu))]
    return (
      <section>
        <div className="ka-bolum-basi">
          <div className="ka-ust-etiket">Bölüm 7</div>
          <h2>Mini Test</h2>
        </div>
        <div className="ka-kart" style={{ textAlign: 'center' }}>
          <Trophy size={40} style={{ color: 'rgb(var(--ka-vurgu))', margin: '0 auto 10px' }} />
          <h3 style={{ fontSize: 26 }}>{dogruSayisi} / {sorular.length} doğru</h3>
          <p className="ka-ozet-ad">Başarı oranın %{oran}</p>

          <div className="ka-ilerleme" style={{ margin: '16px auto', maxWidth: 380 }}>
            <div className="ka-ilerleme-dolu" style={{ width: `${oran}%` }} />
          </div>

          {zayifKonular.length > 0 ? (
            <div className="ka-not uyari" style={{ textAlign: 'left', maxWidth: 520, margin: '0 auto' }}>
              <AlertTriangle size={16} />
              <span>
                <strong>Tekrar etmen iyi olur: </strong>{zayifKonular.join(', ')}.
              </span>
            </div>
          ) : (
            <div className="ka-not olumlu" style={{ textAlign: 'left', maxWidth: 520, margin: '0 auto' }}>
              <CheckCircle2 size={16} />
              <span>Hepsi doğru. Kavramları yerine oturtmuşsun — daha zor formülleri laboratuvarda dene.</span>
            </div>
          )}

          <button type="button" className="ka-dugme birincil" style={{ marginTop: 18 }} onClick={yenidenBasla}>
            <RotateCcw size={15} /> Yeni sorularla tekrar dene
          </button>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className="ka-bolum-basi">
        <div className="ka-ust-etiket">Bölüm 7</div>
        <h2>Mini Test</h2>
        <p>Her cevabın ardından yalnızca doğru/yanlış değil, <strong>nedenini</strong> de göreceksin.</p>
      </div>

      <div className="ka-kart">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span className="ka-rozet mor">{soru.konu}</span>
          <span className="ka-sessiz">Soru {indeks + 1} / {sorular.length} · {dogruSayisi} doğru</span>
        </div>
        <div className="ka-ilerleme" style={{ marginBottom: 16 }}>
          <div className="ka-ilerleme-dolu" style={{ width: `${(indeks / sorular.length) * 100}%` }} />
        </div>

        <h3 style={{ fontSize: 18, marginBottom: 16 }}>{soru.soru}</h3>

        <div>
          {soru.secenekler.map((s, i) => {
            const durum = secim == null ? '' : (i === soru.dogru ? 'dogru' : (i === secim ? 'yanlis' : ''))
            return (
              <button
                key={i}
                type="button"
                className={`ka-secenek ${durum}`}
                onClick={() => cevapla(i)}
                disabled={secim != null}
              >
                <span className="ka-secenek-harf">{HARFLER[i]}</span>
                <span>{s}</span>
                {durum === 'dogru' && <CheckCircle2 size={17} style={{ marginLeft: 'auto', color: 'rgb(var(--ka-yesil))', flex: 'none' }} />}
                {durum === 'yanlis' && <XCircle size={17} style={{ marginLeft: 'auto', color: 'rgb(var(--ka-kirmizi))', flex: 'none' }} />}
              </button>
            )
          })}
        </div>

        {secim != null && (
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className={`ka-not ${secim === soru.dogru ? 'olumlu' : 'uyari'}`}>
              {secim === soru.dogru ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
              <span>
                <strong>{secim === soru.dogru ? 'Doğru. ' : `Doğru cevap: ${HARFLER[soru.dogru]}. `}</strong>
                {soru.aciklama}
              </span>
            </div>
            {soru.tuzak && (
              <div className="ka-not">
                <AlertTriangle size={15} />
                <span><strong>Sık yapılan hata: </strong>{soru.tuzak}</span>
              </div>
            )}
            <button type="button" className="ka-dugme birincil" style={{ alignSelf: 'flex-start' }} onClick={ilerle}>
              {indeks + 1 === sorular.length ? 'Sonucu gör' : 'Sonraki soru'} <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
