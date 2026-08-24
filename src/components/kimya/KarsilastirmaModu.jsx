import { useMemo, useState } from 'react'
import { ArrowLeftRight, Info } from 'lucide-react'
import { karsilastir } from '../../lib/kimya/analiz.js'
import MolekulGorunumu from './MolekulGorunumu.jsx'

const HAZIR_CIFTLER = [
  ['H2O', 'CO2'],
  ['CO2', 'SO2'],
  ['H2O', 'H2S'],
  ['NaCl', 'HCl'],
  ['CH4', 'NH3'],
  ['O2', 'O3'],
]

export default function KarsilastirmaModu() {
  const [sol, setSol] = useState('H2O')
  const [sag, setSag] = useState('CO2')
  const [solGirdi, setSolGirdi] = useState('H₂O')
  const [sagGirdi, setSagGirdi] = useState('CO₂')

  const sonuc = useMemo(() => karsilastir(sol, sag), [sol, sag])

  const uygula = () => { setSol(solGirdi); setSag(sagGirdi) }

  return (
    <section>
      <div className="ka-bolum-basi">
        <div className="ka-ust-etiket">Karşılaştırma modu</div>
        <h2>İki türü yan yana koy</h2>
        <p>Benzer görünen iki maddenin nerede ayrıştığını görmek, kavramı ezberlemekten daha kalıcıdır.</p>
      </div>

      <div className="ka-kart" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 9, alignItems: 'center', flexWrap: 'wrap' }}>
          <input
            className="ka-formul-giris"
            style={{ flex: '1 1 160px', fontSize: 15 }}
            value={solGirdi}
            onChange={(e) => setSolGirdi(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') uygula() }}
            aria-label="Birinci formül"
            spellCheck={false}
          />
          <ArrowLeftRight size={18} style={{ color: 'rgb(var(--ka-metin-3))', flex: 'none' }} />
          <input
            className="ka-formul-giris"
            style={{ flex: '1 1 160px', fontSize: 15 }}
            value={sagGirdi}
            onChange={(e) => setSagGirdi(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') uygula() }}
            aria-label="İkinci formül"
            spellCheck={false}
          />
          <button type="button" className="ka-dugme birincil" onClick={uygula}>Karşılaştır</button>
        </div>

        <div className="ka-ornekler">
          {HAZIR_CIFTLER.map(([a, b]) => (
            <button
              key={`${a}-${b}`}
              type="button"
              className="ka-ornek-dugme"
              onClick={() => { setSol(a); setSag(b); setSolGirdi(a); setSagGirdi(b) }}
            >
              {a} ↔ {b}
            </button>
          ))}
        </div>
      </div>

      {!sonuc.basarili ? (
        <div className="ka-kart">
          <div className="ka-not hata">
            <Info size={16} />
            <span>
              Formüllerden biri okunamadı:{' '}
              {!sonuc.a.basarili ? sonuc.a.hata : sonuc.b.hata}
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="ka-izgara iki" style={{ marginBottom: 16 }}>
            {[sonuc.a, sonuc.b].map((taraf, i) => (
              <div className="ka-kart" key={i}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
                  <span className="ka-formul" style={{ fontSize: 26 }}>{taraf.bicimli}</span>
                  <span className="ka-sessiz">{taraf.ad ?? taraf.sinifAdi}</span>
                </div>
                {taraf.yapi
                  ? <MolekulGorunumu yapi={taraf.yapi} yukseklik={230} delokalize={Boolean(taraf.tur?.delokalize)} otomatikDon={false} />
                  : (
                    <div className="ka-not">
                      <Info size={15} />
                      <span>Bu tür için 3B model yok (iyonik örgü ya da yapı verisi bulunmuyor).</span>
                    </div>
                  )}
              </div>
            ))}
          </div>

          <div className="ka-kart">
            <div className="ka-tablo-sarmal">
              <table className="ka-tablo">
                <thead>
                  <tr>
                    <th>Özellik</th>
                    <th>{sonuc.a.bicimli}</th>
                    <th>{sonuc.b.bicimli}</th>
                  </tr>
                </thead>
                <tbody>
                  {sonuc.satirlar.map((s) => (
                    <tr key={s.ozellik}>
                      <td style={{ color: 'rgb(var(--ka-metin-3))' }}>{s.ozellik}</td>
                      <td className={s.farkli && s.vurgu ? 'farkli' : ''}>{s.a}</td>
                      <td className={s.farkli && s.vurgu ? 'farkli' : ''}>{s.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ka-sessiz" style={{ marginTop: 10 }}>
              Mor renkli hücreler iki tür arasındaki <strong>anlamlı farkları</strong> gösterir.
              "—" işareti, o bilginin yapı verisi gerektirdiğini ve bu tür için bulunmadığını belirtir.
            </p>
          </div>
        </>
      )}
    </section>
  )
}
