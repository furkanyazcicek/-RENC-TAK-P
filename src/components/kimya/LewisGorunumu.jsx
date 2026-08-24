import { useMemo, useState } from 'react'
import { ArrowLeftRight, Info } from 'lucide-react'
import { lewisKur } from '../../lib/kimya/lewis.js'
import { atomRengi } from '../../data/kimya/atomRenkleri.js'

const BIRIM = 46          // bir bağ uzunluğunun piksel karşılığı
const ATOM_BOSLUK = 0.26  // bağ çizgisinin atom yazısına değmemesi için pay

/**
 * Lewis yapısı çizimi.
 *
 * Bilinçli olarak dik açılı (sağ-sol-yukarı-aşağı) yerleşim kullanılır:
 * Lewis yapısı bağ ve elektron dağılımını gösterir, **geometriyi göstermez**.
 * Gerçek açılar için 3B model bölümüne bakılır.
 */
export default function LewisGorunumu({ tanimlar, netYuk = 0, baslik = null, rezonansNotu = null }) {
  const [indeks, setIndeks] = useState(0)
  const [formalGoster, setFormalGoster] = useState(false)

  const yapilar = useMemo(
    () => (tanimlar ?? []).map((t) => ({ tanim: t, lewis: lewisKur(t, netYuk) })),
    [tanimlar, netYuk],
  )
  if (!yapilar.length) return null

  const { lewis } = yapilar[Math.min(indeks, yapilar.length - 1)]
  const etiket = yapilar[Math.min(indeks, yapilar.length - 1)].tanim.etiket

  const sinirlar = lewis.atomlar.reduce(
    (s, a) => ({
      solX: Math.min(s.solX, a.x), sagX: Math.max(s.sagX, a.x),
      ustY: Math.min(s.ustY, a.y), altY: Math.max(s.altY, a.y),
    }),
    { solX: 0, sagX: 0, ustY: 0, altY: 0 },
  )
  const pay = 0.85
  const genislik = (sinirlar.sagX - sinirlar.solX + pay * 2) * BIRIM
  const yukseklik = (sinirlar.altY - sinirlar.ustY + pay * 2) * BIRIM
  const kaydirX = (-sinirlar.solX + pay) * BIRIM
  const kaydirY = (-sinirlar.ustY + pay) * BIRIM
  const parantezVar = netYuk !== 0

  const px = (a) => a.x * BIRIM + kaydirX
  const py = (a) => a.y * BIRIM + kaydirY

  return (
    <div>
      {baslik && <div className="ka-ust-etiket">{baslik}</div>}
      <div className="ka-lewis-alan">
        <svg viewBox={`0 0 ${genislik + (parantezVar ? 44 : 0)} ${yukseklik}`} role="img" aria-label="Lewis yapısı">
          {parantezVar && (
            <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55">
              <path d={`M ${18} ${yukseklik * 0.12} L ${8} ${yukseklik * 0.12} L ${8} ${yukseklik * 0.88} L ${18} ${yukseklik * 0.88}`} />
              <path d={`M ${genislik + 8} ${yukseklik * 0.12} L ${genislik + 18} ${yukseklik * 0.12} L ${genislik + 18} ${yukseklik * 0.88} L ${genislik + 8} ${yukseklik * 0.88}`} />
              <text
                x={genislik + 30} y={yukseklik * 0.16}
                fontSize="17" fontWeight="700" fill="currentColor" stroke="none" opacity="1"
                textAnchor="middle"
              >
                {`${Math.abs(netYuk) === 1 ? '' : Math.abs(netYuk)}${netYuk > 0 ? '+' : '−'}`}
              </text>
            </g>
          )}

          <g transform={parantezVar ? 'translate(14,0)' : undefined}>
            {/* Bağlar */}
            {lewis.baglar.map((bag, i) => {
              const a = lewis.atomlar[bag.a]
              const b = lewis.atomlar[bag.b]
              const x1 = px(a); const y1 = py(a); const x2 = px(b); const y2 = py(b)
              const dx = x2 - x1; const dy = y2 - y1
              const boy = Math.hypot(dx, dy) || 1
              const ux = dx / boy; const uy = dy / boy
              const bx1 = x1 + ux * ATOM_BOSLUK * BIRIM
              const by1 = y1 + uy * ATOM_BOSLUK * BIRIM
              const bx2 = x2 - ux * ATOM_BOSLUK * BIRIM
              const by2 = y2 - uy * ATOM_BOSLUK * BIRIM
              const nx = -uy; const ny = ux
              const aralik = 3.6
              const kaymalar = bag.derece === 2 ? [-aralik, aralik] : bag.derece === 3 ? [-aralik * 1.8, 0, aralik * 1.8] : [0]
              return (
                <g key={i}>
                  {kaymalar.map((k, j) => (
                    <line
                      key={j}
                      x1={bx1 + nx * k} y1={by1 + ny * k}
                      x2={bx2 + nx * k} y2={by2 + ny * k}
                      stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" opacity="0.8"
                    />
                  ))}
                </g>
              )
            })}

            {/* Atomlar + ortaklanmamış çiftler + formal yükler */}
            {lewis.atomlar.map((atom) => {
              const renk = atomRengi(atom.sembol)
              const x = px(atom); const y = py(atom)
              return (
                <g key={atom.id}>
                  <circle cx={x} cy={y} r={BIRIM * 0.24} fill="rgb(var(--ka-yuzey-2))" />
                  <text
                    x={x} y={y} textAnchor="middle" dominantBaseline="central"
                    fontSize="19" fontWeight="700" fill={renk.kenar}
                  >
                    {atom.sembol}
                  </text>

                  {atom.ciftAcilari.map((aci, i) => {
                    const rad = (aci * Math.PI) / 180
                    const cx = x + Math.cos(rad) * BIRIM * 0.4
                    const cy = y - Math.sin(rad) * BIRIM * 0.4
                    const dikX = -Math.sin(rad)
                    const dikY = -Math.cos(rad)
                    return (
                      <g key={i} fill="rgb(var(--ka-vurgu))">
                        <circle cx={cx + dikX * 4} cy={cy + dikY * 4} r="2.6" />
                        <circle cx={cx - dikX * 4} cy={cy - dikY * 4} r="2.6" />
                      </g>
                    )
                  })}

                  {formalGoster && atom.formalYuk !== 0 && (
                    <g>
                      <circle cx={x + BIRIM * 0.3} cy={y - BIRIM * 0.3} r="9.5" fill="none" stroke="rgb(var(--ka-turuncu))" strokeWidth="1.4" />
                      <text
                        x={x + BIRIM * 0.3} y={y - BIRIM * 0.3}
                        textAnchor="middle" dominantBaseline="central"
                        fontSize="11" fontWeight="700" fill="rgb(var(--ka-turuncu))"
                      >
                        {atom.formalYuk > 0 ? `+${atom.formalYuk}` : atom.formalYuk}
                      </text>
                    </g>
                  )}
                </g>
              )
            })}
          </g>
        </svg>
      </div>

      <div className="ka-rezonans-cubuk">
        <button
          type="button"
          className={`ka-dugme kucuk ${formalGoster ? 'secili' : ''}`}
          onClick={() => setFormalGoster((f) => !f)}
          aria-pressed={formalGoster}
        >
          Formal yükleri {formalGoster ? 'gizle' : 'göster'}
        </button>

        {yapilar.length > 1 && (
          <>
            <span className="ka-sessiz" style={{ marginLeft: 4 }}>Rezonans yapıları:</span>
            {yapilar.map((y, i) => (
              <button
                key={i}
                type="button"
                className={`ka-dugme kucuk ${i === indeks ? 'secili' : ''}`}
                onClick={() => setIndeks(i)}
              >
                {y.tanim.etiket ? y.tanim.etiket : `${i + 1}`}
              </button>
            ))}
            <ArrowLeftRight size={14} style={{ color: 'rgb(var(--ka-metin-3))' }} />
          </>
        )}
      </div>

      {etiket && <p className="ka-sessiz" style={{ marginTop: 6 }}>{etiket}</p>}

      {yapilar.length > 1 && (
        <div className="ka-not" style={{ marginTop: 10 }}>
          <Info size={15} />
          <span>
            {rezonansNotu ?? 'Gerçek yapı bu rezonans yapılarından yalnızca biri değildir; rezonans hibriti olarak düşünülmelidir.'}
          </span>
        </div>
      )}

      {!lewis.tutarli && (
        <div className="ka-not hata" style={{ marginTop: 10 }}>
          <Info size={15} />
          <span>Bu Lewis yapısında formal yükler toplamı ({lewis.toplamFormalYuk}) net yüke ({netYuk}) eşit değil.</span>
        </div>
      )}
    </div>
  )
}
