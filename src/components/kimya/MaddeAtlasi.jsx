import { useState } from 'react'
import { AlertTriangle, ArrowRight, CheckCircle2, Lightbulb, XCircle } from 'lucide-react'
import { KAVRAMLAR, AYIRT_ETME_SORULARI } from '../../data/kimya/maddeKavramlari.js'
import TanecikGorseli from './TanecikGorseli.jsx'
import { kalinYap } from './NedenKutusu.jsx'

/** Ağaç bağlantılarını çizen ince SVG. */
function Baglanti({ kolSayisi = 2 }) {
  const genislik = 600
  const orta = genislik / 2
  const araliklar = kolSayisi === 2 ? [genislik * 0.25, genislik * 0.75] : [orta]
  return (
    <svg className="ka-agac-cizgi" viewBox={`0 0 ${genislik} 26`} preserveAspectRatio="none" aria-hidden="true">
      <path d={`M ${orta} 0 L ${orta} 13`} stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.5" fill="none" />
      <path d={`M ${araliklar[0]} 13 L ${araliklar[araliklar.length - 1]} 13`} stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.5" fill="none" />
      {araliklar.map((x, i) => (
        <path key={i} d={`M ${x} 13 L ${x} 26`} stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.5" fill="none" />
      ))}
    </svg>
  )
}

function Dugum({ kod, ad, secili, onSec, kok = false, alt = null }) {
  return (
    <button
      type="button"
      className={`ka-agac-dugum ${kok ? 'kok' : ''} ${secili === kod ? 'secili' : ''}`}
      onClick={() => onSec(kod)}
      aria-pressed={secili === kod}
    >
      <span className="ad">{ad}</span>
      {alt && <span className="alt">{alt}</span>}
    </button>
  )
}

function AyirtEtmeOyunu({ onKavram }) {
  const [indeks, setIndeks] = useState(0)
  const [cevap, setCevap] = useState(null)
  const soru = AYIRT_ETME_SORULARI[indeks]
  const dogruMu = cevap === soru.dogru

  return (
    <div className="ka-kart">
      <div className="ka-ust-etiket"><Lightbulb size={13} /> Hangi sınıfa girer?</div>
      <h3 style={{ fontSize: 18, marginBottom: 12 }}>{soru.madde}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {soru.secenekler.map((s) => {
          const secildi = cevap === s
          const durum = cevap == null ? '' : (s === soru.dogru ? 'dogru' : (secildi ? 'yanlis' : ''))
          return (
            <button
              key={s}
              type="button"
              className={`ka-dugme ${durum === 'dogru' ? 'secili' : ''}`}
              style={durum === 'yanlis' ? { borderColor: 'rgb(var(--ka-kirmizi))', color: 'rgb(var(--ka-kirmizi))' } : undefined}
              onClick={() => cevap == null && setCevap(s)}
              disabled={cevap != null}
            >
              {KAVRAMLAR[s].ad}
            </button>
          )
        })}
      </div>

      {cevap != null && (
        <div className={`ka-not ${dogruMu ? 'olumlu' : 'uyari'}`} style={{ marginTop: 12 }}>
          {dogruMu ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
          <span>
            <strong>{dogruMu ? 'Doğru. ' : 'Doğru cevap: ' + KAVRAMLAR[soru.dogru].ad + '. '}</strong>
            {soru.aciklama}
          </span>
        </div>
      )}

      <div style={{ display: 'flex', gap: 8, marginTop: 12, alignItems: 'center' }}>
        <button
          type="button"
          className="ka-dugme kucuk birincil"
          onClick={() => { setIndeks((i) => (i + 1) % AYIRT_ETME_SORULARI.length); setCevap(null) }}
        >
          Sıradaki <ArrowRight size={13} />
        </button>
        <span className="ka-sessiz">{indeks + 1} / {AYIRT_ETME_SORULARI.length}</span>
      </div>
    </div>
  )
}

export default function MaddeAtlasi({ onFormulSec }) {
  const [secili, setSecili] = useState('element')
  const kavram = KAVRAMLAR[secili]

  return (
    <section>
      <div className="ka-bolum-basi">
        <div className="ka-ust-etiket">Bölüm 1</div>
        <h2>Madde Atlası</h2>
        <p>Maddenin sınıflandırılması. Kutulara tıkla; tanımı, tanecik düzeyindeki görüntüsünü ve günlük hayattan örneklerini gör.</p>
      </div>

      <div className="ka-kart" style={{ marginBottom: 16 }}>
        <div className="ka-agac">
          <Dugum kod="madde" ad="MADDE" secili={secili} onSec={setSecili} kok alt="Kütlesi ve hacmi olan her şey" />
          <Baglanti kolSayisi={2} />
          <div className="ka-agac-kat">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, minWidth: 240 }}>
              <Dugum kod="safMadde" ad="Saf Madde" secili={secili} onSec={setSecili} alt="Tek tür tanecik" />
              <Baglanti kolSayisi={2} />
              <div className="ka-agac-kat">
                <Dugum kod="element" ad="Element" secili={secili} onSec={setSecili} alt="Tek tür atom" />
                <Dugum kod="bilesik" ad="Bileşik" secili={secili} onSec={setSecili} alt="Farklı elementler" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, minWidth: 240 }}>
              <Dugum kod="karisim" ad="Karışım" secili={secili} onSec={setSecili} alt="Birden çok madde" />
              <Baglanti kolSayisi={2} />
              <div className="ka-agac-kat">
                <Dugum kod="homojen" ad="Homojen" secili={secili} onSec={setSecili} alt="Her yeri aynı" />
                <Dugum kod="heterojen" ad="Heterojen" secili={secili} onSec={setSecili} alt="Bölgeler farklı" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ka-izgara iki" style={{ marginBottom: 16 }}>
        <div className="ka-kart">
          <h3 style={{ fontSize: 20, marginBottom: 4 }}>{kavram.ad}</h3>
          <p className="ka-sessiz" style={{ fontSize: 13.5, marginBottom: 12 }}>{kavram.kisa}</p>
          <p style={{ fontSize: 14, color: 'rgb(var(--ka-metin-2))', marginBottom: 12 }}>{kavram.tanim}</p>
          {kavram.ayrim && (
            <div className="ka-not" style={{ marginBottom: 12 }}>
              <Lightbulb size={15} />
              <span dangerouslySetInnerHTML={{ __html: kalinYap(kavram.ayrim) }} />
            </div>
          )}

          {kavram.ozellikler && (
            <>
              <div className="ka-ust-etiket" style={{ marginTop: 4 }}>Ayırt edici özellikler</div>
              <ul className="ka-liste">
                {kavram.ozellikler.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </>
          )}

          {kavram.yanlisKavram && (
            <div className="ka-not uyari" style={{ marginTop: 12 }}>
              <AlertTriangle size={15} />
              <span>
                <strong>{kavram.yanlisKavram.baslik}. </strong>
                <span dangerouslySetInnerHTML={{ __html: kalinYap(kavram.yanlisKavram.metin) }} />
              </span>
            </div>
          )}
        </div>

        <div className="ka-kart">
          <div className="ka-ust-etiket">Tanecik düzeyinde</div>
          <TanecikGorseli tur={kavram.tanecik} />

          {kavram.ornekler?.length > 0 && (
            <>
              <div className="ka-ust-etiket" style={{ marginTop: 16 }}>Örnekler</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {kavram.ornekler.map((o) => (
                  <button
                    key={o.formul + o.ad}
                    type="button"
                    className="ka-ornek-dugme"
                    onClick={() => onFormulSec?.(o.formul)}
                    title={o.ad}
                  >
                    {o.formul}
                  </button>
                ))}
              </div>
              <p className="ka-sessiz" style={{ marginTop: 7 }}>
                Bir örneğe tıklarsan Bileşik Analiz Laboratuvarı'nda açılır.
              </p>
            </>
          )}

          {kavram.gunluk?.length > 0 && (
            <>
              <div className="ka-ust-etiket" style={{ marginTop: 16 }}>Günlük hayattan</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {kavram.gunluk.map((g) => <span key={g} className="ka-rozet">{g}</span>)}
              </div>
            </>
          )}
        </div>
      </div>

      <AyirtEtmeOyunu />
    </section>
  )
}
