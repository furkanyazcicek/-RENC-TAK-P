import { useId, useMemo, useState } from 'react'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

/**
 * Fizik Atlası — Ortak grafik bileşeni
 * ==================================================================
 * Recharts yerine elle çizilmiş SVG kullanılıyor çünkü burada gereken
 * şey standart bir çizgi grafiği değil: eğri altındaki **işaretli alanı**
 * boyamak, animasyonla eş zamanlı ilerleyen bir imleç göstermek ve
 * belirli bir andaki değeri okutabilmek gerekiyor. Bunlar hazır grafik
 * kütüphanesinde ya yok ya da zorlama.
 *
 * Renk körlüğüne karşı: her seri yalnızca renkle değil, farklı çizgi
 * deseniyle (düz / kesikli / noktalı) de ayrılır ve göstergede adı yazar.
 */

const DESENLER = [null, '6 4', '2 3', '9 3 2 3']

export function Grafik({
  seriler,            // [{ ad, veri: [{x,y}], renk, birim }]
  xEtiket = 't (s)',
  yEtiket = '',
  baslik = null,
  imlecX = null,      // Animasyonla ilerleyen dikey imleç konumu
  alanGoster = false, // Eğri altını boya (yer değiştirme / iş gösterimi)
  yukseklik = 168,
  yAlt = null,
  yUst = null,
  sifirCizgisi = true,
}) {
  const id = useId()
  const [imlecUstunde, setImlecUstunde] = useState(null)

  const olcek = useMemo(() => {
    const tumNokta = seriler.flatMap((s) => s.veri)
    if (tumNokta.length === 0) return null
    const xler = tumNokta.map((n) => n.x)
    const yler = tumNokta.map((n) => n.y)
    const x0 = Math.min(...xler)
    const x1 = Math.max(...xler)
    let y0 = yAlt ?? Math.min(...yler, 0)
    let y1 = yUst ?? Math.max(...yler, 0)
    // Tamamen düz bir seride (sabit ivme gibi) grafiğin çökmemesi için
    // yapay bir aralık açılır.
    if (Math.abs(y1 - y0) < 1e-9) { y0 -= 1; y1 += 1 }
    const pay = (y1 - y0) * 0.1
    return { x0, x1: x1 === x0 ? x0 + 1 : x1, y0: y0 - pay, y1: y1 + pay }
  }, [seriler, yAlt, yUst])

  if (!olcek) return <div className="fa-bos">Grafik için henüz veri yok.</div>

  const G = 320
  const Y = yukseklik
  const kenar = { sol: 40, sag: 10, ust: 10, alt: 26 }
  const ic = { g: G - kenar.sol - kenar.sag, y: Y - kenar.ust - kenar.alt }

  const px = (x) => kenar.sol + ((x - olcek.x0) / (olcek.x1 - olcek.x0)) * ic.g
  const py = (y) => kenar.ust + ic.y - ((y - olcek.y0) / (olcek.y1 - olcek.y0)) * ic.y

  const sifirY = py(0)
  const sifirGorunur = sifirCizgisi && olcek.y0 <= 0 && olcek.y1 >= 0

  /** Belirli bir x değerine en yakın veri noktası — imleç okuması için. */
  const noktaBul = (seri, x) => {
    if (x === null || seri.veri.length === 0) return null
    let enYakin = seri.veri[0]
    let enKucukFark = Math.abs(seri.veri[0].x - x)
    for (const n of seri.veri) {
      const fark = Math.abs(n.x - x)
      if (fark < enKucukFark) { enKucukFark = fark; enYakin = n }
    }
    return enYakin
  }

  const aktifX = imlecUstunde ?? imlecX
  const okumalar = aktifX === null ? [] : seriler.map((s) => ({ seri: s, nokta: noktaBul(s, aktifX) }))

  return (
    <div className="fa-grafik">
      {baslik ? (
        <div className="fa-grafik-baslik">
          <span>{baslik}</span>
          {okumalar.length > 0 && okumalar[0].nokta ? (
            <span className="fa-grafik-okuma">
              {okumalar.map((o) => o.nokta ? `${o.seri.ad}=${sayiBicimle(o.nokta.y, 1)}` : '').filter(Boolean).join('  ')}
            </span>
          ) : null}
        </div>
      ) : null}

      <svg
        viewBox={`0 0 ${G} ${Y}`}
        role="img"
        aria-label={`${baslik ?? 'Grafik'}: yatay eksen ${xEtiket}, düşey eksen ${yEtiket}`}
        onPointerMove={(e) => {
          const kutu = e.currentTarget.getBoundingClientRect()
          const oran = (e.clientX - kutu.left) / kutu.width
          const svgX = oran * G
          if (svgX < kenar.sol || svgX > G - kenar.sag) { setImlecUstunde(null); return }
          setImlecUstunde(olcek.x0 + ((svgX - kenar.sol) / ic.g) * (olcek.x1 - olcek.x0))
        }}
        onPointerLeave={() => setImlecUstunde(null)}
      >
        {/* Izgara */}
        {[0, 0.25, 0.5, 0.75, 1].map((o) => (
          <line
            key={`yz${o}`}
            x1={kenar.sol} x2={G - kenar.sag}
            y1={kenar.ust + o * ic.y} y2={kenar.ust + o * ic.y}
            stroke="rgb(var(--fa-cizgi))" strokeWidth="0.6"
          />
        ))}
        {[0, 0.25, 0.5, 0.75, 1].map((o) => (
          <line
            key={`xz${o}`}
            y1={kenar.ust} y2={kenar.ust + ic.y}
            x1={kenar.sol + o * ic.g} x2={kenar.sol + o * ic.g}
            stroke="rgb(var(--fa-cizgi))" strokeWidth="0.6"
          />
        ))}

        {/* Eğri altındaki işaretli alan: pozitif ve negatif ayrı renkte */}
        {alanGoster && seriler[0] ? (
          <>
            <clipPath id={`${id}-ust`}>
              <rect x={kenar.sol} y={kenar.ust} width={ic.g} height={Math.max(0, sifirY - kenar.ust)} />
            </clipPath>
            <clipPath id={`${id}-alt`}>
              <rect x={kenar.sol} y={sifirY} width={ic.g} height={Math.max(0, kenar.ust + ic.y - sifirY)} />
            </clipPath>
            {['ust', 'alt'].map((yon) => (
              <path
                key={yon}
                d={`M ${px(seriler[0].veri[0].x)} ${sifirY} ${seriler[0].veri.map((n) => `L ${px(n.x)} ${py(n.y)}`).join(' ')} L ${px(seriler[0].veri[seriler[0].veri.length - 1].x)} ${sifirY} Z`}
                fill={yon === 'ust' ? 'rgb(var(--fa-olcum) / 0.22)' : 'rgb(var(--fa-hata) / 0.22)'}
                clipPath={`url(#${id}-${yon})`}
              />
            ))}
          </>
        ) : null}

        {/* Sıfır çizgisi — işaret değişimini görünür kılar */}
        {sifirGorunur ? (
          <line x1={kenar.sol} x2={G - kenar.sag} y1={sifirY} y2={sifirY} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.2" />
        ) : null}

        {/* Eksenler */}
        <line x1={kenar.sol} x2={kenar.sol} y1={kenar.ust} y2={kenar.ust + ic.y} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.2" />
        <line x1={kenar.sol} x2={G - kenar.sag} y1={kenar.ust + ic.y} y2={kenar.ust + ic.y} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.2" />

        {/* Eksen değerleri */}
        <text x={kenar.sol - 5} y={kenar.ust + 4} textAnchor="end" fontSize="9" fill="rgb(var(--fa-metin-3))">{sayiBicimle(olcek.y1, 1)}</text>
        <text x={kenar.sol - 5} y={kenar.ust + ic.y} textAnchor="end" fontSize="9" fill="rgb(var(--fa-metin-3))">{sayiBicimle(olcek.y0, 1)}</text>
        <text x={kenar.sol} y={Y - 6} textAnchor="start" fontSize="9" fill="rgb(var(--fa-metin-3))">{sayiBicimle(olcek.x0, 1)}</text>
        <text x={G - kenar.sag} y={Y - 6} textAnchor="end" fontSize="9" fill="rgb(var(--fa-metin-3))">{sayiBicimle(olcek.x1, 1)}</text>
        <text x={G / 2} y={Y - 6} textAnchor="middle" fontSize="9.5" fill="rgb(var(--fa-metin-2))" fontWeight="600">{xEtiket}</text>
        {yEtiket ? (
          <text x={10} y={kenar.ust + ic.y / 2} textAnchor="middle" fontSize="9.5" fill="rgb(var(--fa-metin-2))" fontWeight="600" transform={`rotate(-90 10 ${kenar.ust + ic.y / 2})`}>{yEtiket}</text>
        ) : null}

        {/* Seriler */}
        {seriler.map((s, i) => (
          <polyline
            key={s.ad}
            points={s.veri.map((n) => `${px(n.x)},${py(n.y)}`).join(' ')}
            fill="none"
            stroke={s.renk ?? 'rgb(var(--fa-vurgu))'}
            strokeWidth="2"
            strokeDasharray={DESENLER[i % DESENLER.length] ?? undefined}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}

        {/* İmleç ve okuma noktaları */}
        {aktifX !== null && aktifX >= olcek.x0 && aktifX <= olcek.x1 ? (
          <>
            <line x1={px(aktifX)} x2={px(aktifX)} y1={kenar.ust} y2={kenar.ust + ic.y} stroke="rgb(var(--fa-metin-3))" strokeWidth="1" strokeDasharray="3 3" />
            {okumalar.map((o) => o.nokta ? (
              <circle key={o.seri.ad} cx={px(o.nokta.x)} cy={py(o.nokta.y)} r="4" fill={o.seri.renk ?? 'rgb(var(--fa-vurgu))'} stroke="rgb(var(--fa-yuzey))" strokeWidth="1.5" />
            ) : null)}
          </>
        ) : null}
      </svg>

      {/* Gösterge: renk + desen + ad birlikte verilir (renk körlüğü için) */}
      {seriler.length > 1 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 4 }}>
          {seriler.map((s, i) => (
            <span key={s.ad} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11.5, color: 'rgb(var(--fa-metin-2))' }}>
              <svg width="20" height="8" aria-hidden="true">
                <line x1="0" y1="4" x2="20" y2="4" stroke={s.renk ?? 'rgb(var(--fa-vurgu))'} strokeWidth="2.4" strokeDasharray={DESENLER[i % DESENLER.length] ?? undefined} />
              </svg>
              {s.ad}{s.birim ? ` (${s.birim})` : ''}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Grafik
