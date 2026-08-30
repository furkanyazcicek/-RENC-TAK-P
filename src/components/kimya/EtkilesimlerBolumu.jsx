import { useState } from 'react'
import { Info, Waves } from 'lucide-react'
import { TUR_SOZLUGU } from '../../data/kimya/turler.js'
import { atomRengi } from '../../data/kimya/atomRenkleri.js'
import EtkilesimGorunumu from './EtkilesimGorunumu.jsx'

/* ————— Etkileşim türleri ————— */
const ETKILESIMLER = [
  {
    kod: 'london',
    ad: 'London dispersiyon kuvvetleri',
    guc: 1,
    kimde: 'Bütün taneciklerde bulunur; apolar moleküllerde tek etkileşim türüdür.',
    nasil: 'Elektronlar sürekli hareket ettiği için bir an için molekülün bir tarafında yoğunlaşabilir. Bu anlık dipol, komşu molekülde de bir dipol oluşturur (indüklenmiş dipol) ve iki molekül birbirini çeker.',
    ornekler: ['H₂', 'O₂', 'N₂', 'CH₄', 'CO₂', 'Cl₂'],
    kural: 'Molekülün elektron sayısı (mol kütlesi) arttıkça London kuvvetleri güçlenir: F₂ gaz, Cl₂ gaz, Br₂ sıvı, I₂ katıdır.',
  },
  {
    kod: 'dipol',
    ad: 'Dipol-dipol etkileşimi',
    guc: 2,
    kimde: 'Kalıcı dipolü olan, yani polar moleküller arasında görülür.',
    nasil: 'Polar moleküllerin bir ucu δ+, diğer ucu δ−’dir. Moleküller, zıt uçlar karşı karşıya gelecek biçimde dizilir ve birbirini çeker.',
    ornekler: ['HCl', 'SO₂', 'H₂S', 'CO'],
    kural: 'Aynı büyüklükteki polar molekül, apolar molekülden daha yüksek sıcaklıkta kaynar.',
  },
  {
    kod: 'hidrojen',
    ad: 'Hidrojen bağı',
    guc: 3,
    kimde: 'Hidrojenin doğrudan F, O veya N’ye bağlı olduğu moleküllerde.',
    nasil: 'Çok elektronegatif atoma bağlı hidrojen neredeyse çıplak bir proton gibi davranır ve komşu moleküldeki F/O/N atomunun ortaklanmamış elektron çiftine güçlü biçimde çekilir.',
    ornekler: ['H₂O', 'NH₃', 'HF', 'C₂H₅OH', 'CH₃COOH'],
    kural: 'Moleküller arası etkileşimlerin en güçlüsüdür. Suyun 100 °C’de kaynamasının, buzun sudan hafif olmasının ve DNA’nın çift sarmal yapısının nedeni budur.',
  },
  {
    kod: 'iyonDipol',
    ad: 'İyon-dipol etkileşimi',
    guc: 4,
    kimde: 'Bir iyon ile polar bir molekül arasında (örneğin tuzun suda çözünmesi).',
    nasil: 'Su molekülleri, katyonun etrafını δ− oksijen uçlarıyla; anyonun etrafını δ+ hidrojen uçlarıyla sarar. Bu çekim, iyonik örgüyü çözecek kadar güçlüdür.',
    ornekler: ['Na⁺ ··· H₂O', 'Cl⁻ ··· H₂O'],
    kural: 'Tuzun suda çözünmesini açıklayan etkileşimdir. "Benzer benzeri çözer" kuralının temeli.',
  },
]

/* ————— İyon-dipol için özel çizim: çözünme ————— */
function CozunmeSahnesi() {
  const su = (x, y, aci, anahtar) => {
    const d = 13
    const yariAci = (104.5 / 2) * (Math.PI / 180)
    const h1 = [x + Math.cos(aci - yariAci) * d, y + Math.sin(aci - yariAci) * d]
    const h2 = [x + Math.cos(aci + yariAci) * d, y + Math.sin(aci + yariAci) * d]
    const ro = atomRengi('O')
    const rh = atomRengi('H')
    return (
      <g key={anahtar}>
        <line x1={x} y1={y} x2={h1[0]} y2={h1[1]} stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
        <line x1={x} y1={y} x2={h2[0]} y2={h2[1]} stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
        <circle cx={h1[0]} cy={h1[1]} r="6" fill={rh.dolgu} stroke={rh.kenar} strokeWidth="0.8" />
        <circle cx={h2[0]} cy={h2[1]} r="6" fill={rh.dolgu} stroke={rh.kenar} strokeWidth="0.8" />
        <circle cx={x} cy={y} r="10" fill={ro.dolgu} stroke={ro.kenar} strokeWidth="0.8" />
      </g>
    )
  }

  const naRenk = atomRengi('Na')
  const clRenk = atomRengi('Cl')
  const cevre = (mx, my, r, ters) => [0, 72, 144, 216, 288].map((derece, i) => {
    const rad = (derece * Math.PI) / 180
    const x = mx + Math.cos(rad) * r
    const y = my + Math.sin(rad) * r
    return su(x, y, ters ? rad : rad + Math.PI, `${mx}-${i}`)
  })

  return (
    <div className="ka-bag-sahne">
      <svg viewBox="0 0 300 170" role="img" aria-label="Suda çözünen sodyum ve klorür iyonlarının su molekülleriyle etkileşimi">
        {cevre(80, 85, 42, false)}
        {cevre(220, 85, 44, true)}
        <circle cx="80" cy="85" r="15" fill={naRenk.dolgu} stroke={naRenk.kenar} strokeWidth="1.4" />
        <text x="80" y="85" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="750" fill={naRenk.yazi}>Na⁺</text>
        <circle cx="220" cy="85" r="17" fill={clRenk.dolgu} stroke={clRenk.kenar} strokeWidth="1.4" />
        <text x="220" y="85" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="750" fill={clRenk.yazi}>Cl⁻</text>
        <text x="80" y="160" textAnchor="middle" fontSize="9.5" fontWeight="650" fill="currentColor" opacity="0.7">
          Oksijen uçları (δ−) katyona döner
        </text>
        <text x="220" y="160" textAnchor="middle" fontSize="9.5" fontWeight="650" fill="currentColor" opacity="0.7">
          Hidrojen uçları (δ+) anyona döner
        </text>
      </svg>
    </div>
  )
}

/* ————— Kaynama noktası karşılaştırması ————— */
const KAYNAMA = [
  { ad: 'H₂O', deger: 100, etkilesim: 'Hidrojen bağı', molKutlesi: 18 },
  { ad: 'HF', deger: 20, etkilesim: 'Hidrojen bağı', molKutlesi: 20 },
  { ad: 'NH₃', deger: -33, etkilesim: 'Hidrojen bağı', molKutlesi: 17 },
  { ad: 'H₂S', deger: -60, etkilesim: 'Dipol-dipol', molKutlesi: 34 },
  { ad: 'HCl', deger: -85, etkilesim: 'Dipol-dipol', molKutlesi: 36.5 },
  { ad: 'CH₄', deger: -162, etkilesim: 'London', molKutlesi: 16 },
]

function KaynamaGrafigi() {
  const enDusuk = -180
  const enYuksek = 120
  const oran = (d) => ((d - enDusuk) / (enYuksek - enDusuk)) * 100
  const renkler = { 'Hidrojen bağı': 'var(--ka-vurgu)', 'Dipol-dipol': 'var(--ka-camgobegi)', London: 'var(--ka-metin-3)' }

  return (
    <div className="ka-kart">
      <div className="ka-ust-etiket">Etkileşim gücü kaynama noktasını nasıl etkiler?</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 10 }}>
        {KAYNAMA.map((k) => (
          <div key={k.ad}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
              <span style={{ fontWeight: 700 }}>{k.ad}<span className="ka-sessiz" style={{ fontWeight: 400 }}> · {k.molKutlesi} g/mol</span></span>
              <span className="ka-sessiz">{k.deger} °C · {k.etkilesim}</span>
            </div>
            <div className="ka-ilerleme">
              <div
                className="ka-ilerleme-dolu"
                style={{ width: `${oran(k.deger)}%`, background: `rgb(${renkler[k.etkilesim]})` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="ka-not" style={{ marginTop: 12 }}>
        <Info size={15} />
        <span>
          H₂S’in mol kütlesi sudan büyüktür ama çok daha düşük sıcaklıkta kaynar. Sebep:
          <strong> su hidrojen bağı yapar, H₂S yapamaz.</strong> Yani kaynama noktasını belirleyen
          şey yalnızca kütle değil, <strong>moleküller arası etkileşimin gücüdür</strong>.
        </span>
      </div>
    </div>
  )
}

export default function EtkilesimlerBolumu() {
  const [secili, setSecili] = useState('hidrojen')
  const [mod, setMod] = useState('arasi')
  const etkilesim = ETKILESIMLER.find((e) => e.kod === secili)
  const su = TUR_SOZLUGU.H2O
  const suYapi = su.yapi()

  return (
    <section>
      <div className="ka-bolum-basi">
        <div className="ka-ust-etiket">Bölüm 6</div>
        <h2>Moleküller Arası Etkileşimler</h2>
        <p>
          Molekülün <strong>içindeki</strong> bağlar ile moleküllerin <strong>arasındaki</strong> çekimler
          farklı şeylerdir. Bu bölüm tam olarak o farkı gösterir.
        </p>
      </div>

      {/* Molekül içi ↔ moleküller arası */}
      <div className="ka-kart" style={{ marginBottom: 16 }}>
        <div className="ka-ust-etiket"><Waves size={13} /> Su örneği: iki katman yan yana</div>
        <div className="ka-sekmeler" style={{ marginBottom: 12, maxWidth: 'min(100%, 520px)' }}>
          <button type="button" className="ka-sekme" aria-selected={mod === 'ici'} onClick={() => setMod('ici')}>
            Molekül içi bağları göster
          </button>
          <button type="button" className="ka-sekme" aria-selected={mod === 'arasi'} onClick={() => setMod('arasi')}>
            Moleküller arası etkileşimleri göster
          </button>
        </div>

        <EtkilesimGorunumu yapi={suYapi} tur={su} mod={mod} yukseklik={260} />

        <div className="ka-izgara iki" style={{ marginTop: 14 }}>
          <div className={`ka-kart sade dar ${mod === 'ici' ? '' : ''}`} style={mod === 'ici' ? { borderColor: 'rgb(var(--ka-turuncu) / 0.5)' } : undefined}>
            <strong style={{ fontSize: 14 }}>Molekül içi: O–H bağı</strong>
            <p style={{ fontSize: 13, color: 'rgb(var(--ka-metin-2))', marginTop: 5 }}>
              Polar kovalent bağdır. Suyun kendi atomlarını bir arada tutar. Kopması için çok yüksek
              enerji gerekir (≈464 kJ/mol) — bu, suyun kimyasal olarak parçalanması demektir.
            </p>
          </div>
          <div className="ka-kart sade dar" style={mod === 'arasi' ? { borderColor: 'rgb(var(--ka-vurgu) / 0.5)' } : undefined}>
            <strong style={{ fontSize: 14 }}>Moleküller arası: H₂O ··· H₂O hidrojen bağı</strong>
            <p style={{ fontSize: 13, color: 'rgb(var(--ka-metin-2))', marginTop: 5 }}>
              Ayrı su moleküllerini birbirine çeker. Çok daha zayıftır (≈20 kJ/mol). Su kaynarken
              kopan bağ budur — molekül parçalanmaz, sadece birbirinden ayrılır.
            </p>
          </div>
        </div>

        <div className="ka-not uyari" style={{ marginTop: 12 }}>
          <Info size={15} />
          <span>
            <strong>Sınav tuzağı: </strong>"Su buharlaşırken hangi bağ kopar?" sorusunun cevabı
            <strong> hidrojen bağıdır</strong>, O–H kovalent bağı değil. Buhar hâlindeki tanecik de
            hâlâ H₂O molekülüdür.
          </span>
        </div>
      </div>

      {/* Etkileşim türleri */}
      <div className="ka-kart" style={{ marginBottom: 16 }}>
        <div className="ka-sekmeler" style={{ marginBottom: 14 }}>
          {ETKILESIMLER.map((e) => (
            <button key={e.kod} type="button" className="ka-sekme" aria-selected={secili === e.kod} onClick={() => setSecili(e.kod)}>
              {e.ad}
            </button>
          ))}
        </div>

        <div className="ka-izgara iki">
          <div>
            <h3 style={{ fontSize: 18, marginBottom: 4 }}>{etkilesim.ad}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
              <span className="ka-sessiz">Bağıl güç:</span>
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 22, height: 6, borderRadius: 3,
                    background: i <= etkilesim.guc ? 'rgb(var(--ka-vurgu))' : 'rgb(var(--ka-cizgi))',
                  }}
                />
              ))}
            </div>

            <dl style={{ margin: 0 }}>
              <div className="ka-ozellik-satir" style={{ display: 'block' }}>
                <dt style={{ marginBottom: 3 }}>Kimlerde görülür?</dt>
                <dd style={{ textAlign: 'left', fontWeight: 400, color: 'rgb(var(--ka-metin-2))' }}>{etkilesim.kimde}</dd>
              </div>
              <div className="ka-ozellik-satir" style={{ display: 'block' }}>
                <dt style={{ marginBottom: 3 }}>Nasıl oluşur?</dt>
                <dd style={{ textAlign: 'left', fontWeight: 400, color: 'rgb(var(--ka-metin-2))' }}>{etkilesim.nasil}</dd>
              </div>
            </dl>

            <div className="ka-not" style={{ marginTop: 12 }}>
              <Info size={15} />
              <span>{etkilesim.kural}</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
              {etkilesim.ornekler.map((o) => <span key={o} className="ka-rozet mor">{o}</span>)}
            </div>
          </div>

          <div>
            {etkilesim.kod === 'iyonDipol'
              ? <CozunmeSahnesi />
              : (
                <EtkilesimGorunumu
                  yapi={etkilesim.kod === 'hidrojen' ? suYapi : (TUR_SOZLUGU[etkilesim.kod === 'dipol' ? 'HCl' : 'CH4'].yapi())}
                  tur={etkilesim.kod === 'hidrojen' ? su : TUR_SOZLUGU[etkilesim.kod === 'dipol' ? 'HCl' : 'CH4']}
                  mod="arasi"
                  yukseklik={240}
                />
              )}
            <p className="ka-sessiz" style={{ marginTop: 6 }}>
              Kesikli çizgi moleküller arası etkileşimi gösterir — bu bir kimyasal bağ değil,
              çekim kuvvetidir.
            </p>
          </div>
        </div>
      </div>

      <KaynamaGrafigi />
    </section>
  )
}
