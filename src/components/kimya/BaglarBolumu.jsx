import { useState } from 'react'
import { Info, Play, RotateCcw, Zap } from 'lucide-react'
import { ELEMENT_SOZLUGU } from '../../data/kimya/elementler.js'
import { formuluCozumle } from '../../lib/kimya/formulParser.js'
import { atomRengi } from '../../data/kimya/atomRenkleri.js'
import NedenKutusu from './NedenKutusu.jsx'

/* ————— 1) İyonik bağ: elektron aktarımı ————— */
function IyonikSahne() {
  const [adim, setAdim] = useState(0)
  const na = atomRengi('Na')
  const cl = atomRengi('Cl')

  const naX = adim >= 2 ? 118 : 90
  const clX = adim >= 2 ? 182 : 210
  const elektronX = adim >= 1 ? clX - 26 : naX + 26

  const aciklamalar = [
    'Sodyumun son katmanında 1 elektron var. Klorun son katmanında 7 elektron var; oktetini tamamlamak için 1 elektrona ihtiyacı var.',
    'Sodyum, son katmanındaki tek elektronu klora aktarır. Artık sodyumun elektron sayısı 10, klorun 18 oldu.',
    'Oluşan Na⁺ ve Cl⁻ iyonları zıt yüklüdür ve birbirini elektrostatik olarak çeker. Bu çekime iyonik bağ denir.',
  ]

  return (
    <div className="ka-kart">
      <div className="ka-ust-etiket"><Zap size={13} /> İyonik bağ — elektron aktarımı</div>
      <div className="ka-bag-sahne">
        <svg viewBox="0 0 300 150" role="img" aria-label="Sodyum ve klor arasında elektron aktarımı">
          {/* Sodyum */}
          <g>
            <circle cx={naX} cy="75" r="30" fill={na.dolgu} stroke={na.kenar} strokeWidth="1.5" />
            <text x={naX} y="75" textAnchor="middle" dominantBaseline="central" fontSize="19" fontWeight="750" fill={na.yazi}>Na</text>
            {adim >= 1 && (
              <text x={naX + 20} y="52" textAnchor="middle" fontSize="15" fontWeight="750" fill={na.yazi}>+</text>
            )}
            <text x={naX} y="122" textAnchor="middle" fontSize="10.5" fontWeight="650" fill="currentColor" opacity="0.75">
              {adim >= 1 ? '11p⁺ / 10e⁻ → Na⁺' : '11p⁺ / 11e⁻'}
            </text>
          </g>

          {/* Klor */}
          <g>
            <circle cx={clX} cy="75" r="35" fill={cl.dolgu} stroke={cl.kenar} strokeWidth="1.5" />
            <text x={clX} y="75" textAnchor="middle" dominantBaseline="central" fontSize="19" fontWeight="750" fill={cl.yazi}>Cl</text>
            {adim >= 1 && (
              <text x={clX + 24} y="50" textAnchor="middle" fontSize="15" fontWeight="750" fill={cl.yazi}>−</text>
            )}
            <text x={clX} y="126" textAnchor="middle" fontSize="10.5" fontWeight="650" fill="currentColor" opacity="0.75">
              {adim >= 1 ? '17p⁺ / 18e⁻ → Cl⁻' : '17p⁺ / 17e⁻'}
            </text>
          </g>

          {/* Aktarılan elektron */}
          <g className="ka-elektron-tasin" style={{ transform: `translateX(${elektronX - 116}px)` }}>
            <circle cx="116" cy="75" r="6" fill="rgb(var(--ka-vurgu))" stroke="rgb(var(--ka-yuzey))" strokeWidth="1.5" />
            <text x="116" y="60" textAnchor="middle" fontSize="9" fontWeight="700" fill="rgb(var(--ka-vurgu))">e⁻</text>
          </g>

          {/* Elektrostatik çekim */}
          {adim >= 2 && (
            <g>
              <path d="M 148 75 Q 150 62 152 75" stroke="rgb(var(--ka-turuncu))" strokeWidth="0" fill="none" />
              <line x1="140" y1="75" x2="160" y2="75" stroke="rgb(var(--ka-turuncu))" strokeWidth="2.5" strokeDasharray="4 4" className="ka-akan" />
              <text x="150" y="40" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgb(var(--ka-turuncu))">iyonik bağ</text>
            </g>
          )}
          {adim === 0 && (
            <g>
              <line x1="128" y1="75" x2="168" y2="75" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 4" />
            </g>
          )}
        </svg>
      </div>

      <div className="ka-adim" style={{ marginTop: 12 }}>
        <span className="ka-adim-no">{adim + 1}</span>
        <span>{aciklamalar[adim]}</span>
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        {adim < 2 ? (
          <button type="button" className="ka-dugme kucuk birincil" onClick={() => setAdim((a) => a + 1)}>
            <Play size={13} /> {adim === 0 ? 'Elektronu aktar' : 'Çekimi göster'}
          </button>
        ) : (
          <button type="button" className="ka-dugme kucuk" onClick={() => setAdim(0)}>
            <RotateCcw size={13} /> Baştan oynat
          </button>
        )}
      </div>

      <div className="ka-not" style={{ marginTop: 12 }}>
        <Info size={15} />
        <span>
          Elektronegatiflik farkı: 3,16 − 0,93 = <strong>2,23</strong>. Fark bu kadar büyükse elektron
          ortaklaşılmaz, <strong>aktarılır</strong>. Metal elektron verir, ametal alır.
        </span>
      </div>
    </div>
  )
}

/* ————— 2) Kovalent bağ: ortaklaşa elektron ————— */
const KOVALENT_ORNEKLER = [
  { kod: 'H2', ad: 'H₂', a: 'H', b: 'H', derece: 1, aciklama: 'İki hidrojen atomu birer elektron ortaklaşır. Her ikisi de 2 elektronlu kararlı yapıya (dublet) ulaşır.' },
  { kod: 'O2', ad: 'O₂', a: 'O', b: 'O', derece: 2, aciklama: 'İki oksijen atomu ikişer elektron ortaklaşır: çift bağ. Her oksijen 8 elektrona (oktet) ulaşır.' },
  { kod: 'N2', ad: 'N₂', a: 'N', b: 'N', derece: 3, aciklama: 'Üç elektron çifti ortaklaşılır: üçlü bağ. Bu, doğadaki en güçlü bağlardan biridir.' },
  { kod: 'HCl', ad: 'HCl', a: 'H', b: 'Cl', derece: 1, aciklama: 'Elektronlar ortaklaşılır ama eşit paylaşılmaz: klor daha elektronegatif olduğu için elektron bulutu ona kayar.' },
]

function KovalentSahne() {
  const [secili, setSecili] = useState('H2')
  const ornek = KOVALENT_ORNEKLER.find((o) => o.kod === secili)
  const ra = atomRengi(ornek.a)
  const rb = atomRengi(ornek.b)
  const enA = ELEMENT_SOZLUGU[ornek.a].elektronegatiflik
  const enB = ELEMENT_SOZLUGU[ornek.b].elektronegatiflik
  const fark = Math.round(Math.abs(enA - enB) * 100) / 100
  const polar = fark >= 0.4
  const kayma = polar ? (enB > enA ? 9 : -9) : 0

  const ciftler = Array.from({ length: ornek.derece })

  return (
    <div className="ka-kart">
      <div className="ka-ust-etiket">Kovalent bağ — elektronların ortaklaşılması</div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
        {KOVALENT_ORNEKLER.map((o) => (
          <button
            key={o.kod}
            type="button"
            className="ka-ornek-dugme"
            style={secili === o.kod ? { background: 'rgb(var(--ka-vurgu-yumusak))', borderColor: 'rgb(var(--ka-vurgu) / 0.45)', color: 'rgb(var(--ka-vurgu))' } : undefined}
            onClick={() => setSecili(o.kod)}
          >
            {o.ad}
          </button>
        ))}
      </div>

      <div className="ka-bag-sahne">
        <svg viewBox="0 0 300 140" role="img" aria-label={`${ornek.ad} molekülünde kovalent bağ`}>
          {/* Ortak elektron bulutu */}
          <ellipse
            cx={150 + kayma} cy="70" rx="52" ry="34"
            fill="rgb(var(--ka-vurgu))" opacity="0.16" className="ka-bulut"
          />

          <circle cx="100" cy="70" r={ornek.a === 'H' ? 22 : 30} fill={ra.dolgu} stroke={ra.kenar} strokeWidth="1.5" />
          <text x="100" y="70" textAnchor="middle" dominantBaseline="central" fontSize="17" fontWeight="750" fill={ra.yazi}>{ornek.a}</text>

          <circle cx="200" cy="70" r={ornek.b === 'H' ? 22 : 30} fill={rb.dolgu} stroke={rb.kenar} strokeWidth="1.5" />
          <text x="200" y="70" textAnchor="middle" dominantBaseline="central" fontSize="17" fontWeight="750" fill={rb.yazi}>{ornek.b}</text>

          {/* Ortaklaşılan elektron çiftleri */}
          {ciftler.map((_, i) => {
            const y = 70 + (i - (ornek.derece - 1) / 2) * 17
            return (
              <g key={i} className="ka-ortak-cift" style={{ animationDelay: `${i * 0.4}s` }}>
                <circle cx={144 + kayma} cy={y} r="4.5" fill="rgb(var(--ka-vurgu))" />
                <circle cx={156 + kayma} cy={y} r="4.5" fill="rgb(var(--ka-vurgu))" />
              </g>
            )
          })}

          {polar && (
            <g>
              <text x={enA > enB ? 100 : 200} y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="rgb(var(--ka-kirmizi))">δ−</text>
              <text x={enA > enB ? 200 : 100} y="26" textAnchor="middle" fontSize="14" fontWeight="700" fill="rgb(var(--ka-camgobegi))">δ+</text>
            </g>
          )}

          <text x="100" y="118" textAnchor="middle" fontSize="10" fontWeight="650" fill="currentColor" opacity="0.7">
            EN {String(enA).replace('.', ',')}
          </text>
          <text x="200" y="118" textAnchor="middle" fontSize="10" fontWeight="650" fill="currentColor" opacity="0.7">
            EN {String(enB).replace('.', ',')}
          </text>
        </svg>
      </div>

      <p style={{ fontSize: 13.5, color: 'rgb(var(--ka-metin-2))', marginTop: 12 }}>{ornek.aciklama}</p>

      <div className={`ka-not ${polar ? 'uyari' : 'olumlu'}`} style={{ marginTop: 10 }}>
        <Info size={15} />
        <span>
          Elektronegatiflik farkı <strong>{String(fark).replace('.', ',')}</strong> →{' '}
          {polar ? 'polar kovalent bağ (elektronlar eşit paylaşılmaz, kısmi yükler oluşur)' : 'apolar kovalent bağ (elektronlar eşit paylaşılır, kısmi yük oluşmaz)'}.
        </span>
      </div>
    </div>
  )
}

/* ————— 3) Metalik bağ ————— */
function MetalikSahne() {
  const iyonlar = []
  for (let sx = 0; sx < 5; sx += 1) {
    for (let sy = 0; sy < 3; sy += 1) {
      iyonlar.push({ x: 55 + sx * 48, y: 38 + sy * 34, id: `${sx}-${sy}` })
    }
  }
  const elektronlar = [
    { x: 78, y: 55, gecikme: 0 }, { x: 130, y: 40, gecikme: 1.2 }, { x: 175, y: 72, gecikme: 2.4 },
    { x: 220, y: 48, gecikme: 3.6 }, { x: 100, y: 90, gecikme: 0.8 }, { x: 195, y: 100, gecikme: 2 },
  ]
  const cu = atomRengi('Cu')

  return (
    <div className="ka-kart">
      <div className="ka-ust-etiket">Metalik bağ — elektron denizi</div>
      <div className="ka-bag-sahne">
        <svg viewBox="0 0 300 140" role="img" aria-label="Metal kafesinde delokalize elektronlar">
          <rect x="30" y="14" width="248" height="112" rx="12" fill="rgb(var(--ka-vurgu))" opacity="0.07" />
          {iyonlar.map((i) => (
            <g key={i.id}>
              <circle cx={i.x} cy={i.y} r="13" fill={cu.dolgu} stroke={cu.kenar} strokeWidth="1.2" />
              <text x={i.x} y={i.y} textAnchor="middle" dominantBaseline="central" fontSize="9.5" fontWeight="700" fill={cu.yazi}>Cu⁺</text>
            </g>
          ))}
          {elektronlar.map((e, i) => (
            <g key={i} className="ka-serbest-e" style={{ animationDelay: `${e.gecikme}s` }}>
              <circle cx={e.x} cy={e.y} r="4.5" fill="rgb(var(--ka-vurgu))" opacity="0.9" />
            </g>
          ))}
        </svg>
      </div>
      <p style={{ fontSize: 13.5, color: 'rgb(var(--ka-metin-2))', marginTop: 12 }}>
        Metal atomları değerlik elektronlarını bırakır; bu elektronlar tek bir atoma ait olmaz,
        tüm kafes boyunca serbestçe dolaşır (delokalize elektronlar). Pozitif metal iyonlarını bir
        arada tutan şey bu "elektron denizi"dir.
      </p>
      <div className="ka-not" style={{ marginTop: 10 }}>
        <Info size={15} />
        <span>
          Metallerin <strong>elektriği ve ısıyı iletmesi</strong>, <strong>dövülüp şekil alabilmesi</strong> ve
          <strong> parlaklığı</strong> bu serbest elektronlarla açıklanır.
        </span>
      </div>
    </div>
  )
}

export default function BaglarBolumu({ onFormulSec }) {
  return (
    <section>
      <div className="ka-bolum-basi">
        <div className="ka-ust-etiket">Bölüm 5</div>
        <h2>Kimyasal Bağlar</h2>
        <p>
          Atomlar neden ve nasıl bağlanır? Üç temel bağ türünü canlandırmalı olarak incele:
          elektron <strong>aktarılırsa</strong> iyonik, <strong>ortaklaşılırsa</strong> kovalent,
          <strong> serbest bırakılırsa</strong> metalik bağ oluşur.
        </p>
      </div>

      <div className="ka-izgara iki" style={{ marginBottom: 16 }}>
        <IyonikSahne />
        <KovalentSahne />
      </div>

      <div className="ka-izgara iki" style={{ marginBottom: 16 }}>
        <MetalikSahne />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div className="ka-kart">
            <div className="ka-ust-etiket">Bağ türünü nasıl anlarım?</div>
            <div className="ka-adimlar">
              <div className="ka-adim">
                <span className="ka-adim-no">1</span>
                <span><strong>Metal + ametal</strong> ve elektronegatiflik farkı büyükse (≈1,7 üzeri) → <strong>iyonik bağ</strong></span>
              </div>
              <div className="ka-adim">
                <span className="ka-adim-no">2</span>
                <span><strong>Ametal + ametal</strong>, fark 0,4’ten küçükse → <strong>apolar kovalent bağ</strong></span>
              </div>
              <div className="ka-adim">
                <span className="ka-adim-no">3</span>
                <span><strong>Ametal + ametal</strong>, fark 0,4 ile 1,7 arasındaysa → <strong>polar kovalent bağ</strong></span>
              </div>
              <div className="ka-adim">
                <span className="ka-adim-no">4</span>
                <span><strong>Metal + metal</strong> → <strong>metalik bağ</strong></span>
              </div>
            </div>
            <div className="ka-not uyari" style={{ marginTop: 12 }}>
              <Info size={15} />
              <span>
                Bu sayılar <strong>kesin sınır değildir</strong>. Örneğin HF’de fark 1,78’dir ama HF
                moleküler bir bileşiktir. Elektronegatiflik farkı tek başına yeterli değildir;
                metal–ametal ayrımıyla birlikte düşünülmelidir.
              </span>
            </div>
          </div>

          <NedenKutusu
            soru="Atomlar neden bağ yapar?"
            adimlar={[
              'Atomlar en kararlı hâle, yani en düşük enerjili duruma ulaşmak ister.',
              'Soy gazların son katmanı doludur ve bu yüzden çok kararlıdırlar.',
              'Diğer atomlar elektron alarak, vererek veya ortaklaşarak soy gaza benzer bir düzene ulaşmaya çalışır.',
            ]}
            sonuc="Bağ oluşumu **enerji açığa çıkarır**; bağ kırmak ise enerji gerektirir."
          />
        </div>
      </div>

      <div className="ka-kart">
        <div className="ka-ust-etiket">Bu bağları örneklerde gör</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {['NaCl', 'MgO', 'H2', 'O2', 'N2', 'HCl', 'H2O', 'CH4', 'CO2', 'NH3', 'CaCl2'].map((f) => (
            <button key={f} type="button" className="ka-ornek-dugme" onClick={() => onFormulSec?.(f)}>
              {formuluCozumle(f).bicimli ?? f}
            </button>
          ))}
        </div>
        <p className="ka-sessiz" style={{ marginTop: 8 }}>
          Bir örneğe tıkla; Bileşik Analiz Laboratuvarı'nda bağ türü, elektronegatiflik farkı ve
          yapısıyla birlikte açılsın.
        </p>
      </div>
    </section>
  )
}
