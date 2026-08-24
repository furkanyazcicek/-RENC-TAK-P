import { useMemo } from 'react'
import { yansit } from '../../lib/kimya/geometri3b.js'
import { atomRengi, atomYaricapi } from '../../data/kimya/atomRenkleri.js'
import { ELEMENT_SOZLUGU } from '../../data/kimya/elementler.js'

/**
 * Molekül içi bağ ile moleküller arası etkileşimi **yan yana** gösteren çizim.
 *
 * Öğrencinin en sık karıştırdığı yer burasıdır: "su kaynarken hangi bağ kopar?"
 * Bu görselde iki katman ayrı ayrı vurgulanabildiği için fark net görünür.
 */
const ALICI_ATOMLAR = ['O', 'N', 'F']

function molekuluYansit(yapi, { donusY, donusX, olcek, kaydirX }) {
  const noktalar = yapi.atomlar.map((atom) => {
    const p = yansit(atom.konum, { donusY, donusX, olcek })
    return { ...atom, x: p.x + kaydirX, y: p.y, z: p.z, olcekF: p.olcekF }
  })
  return { noktalar, sozluk: Object.fromEntries(noktalar.map((n) => [n.id, n])) }
}

export default function EtkilesimGorunumu({ yapi, tur, mod = 'arasi', yukseklik = 260 }) {
  const olcek = useMemo(() => {
    if (!yapi?.atomlar?.length) return 26
    const enBuyuk = Math.max(...yapi.atomlar.map((a) => Math.hypot(...a.konum)), 0.9)
    return 34 / (enBuyuk + 0.7)
  }, [yapi])

  const sol = useMemo(() => molekuluYansit(yapi, { donusY: 20, donusX: -10, olcek, kaydirX: -52 }), [yapi, olcek])
  const sag = useMemo(() => molekuluYansit(yapi, { donusY: 200, donusX: -10, olcek, kaydirX: 52 }), [yapi, olcek])

  /* Hangi atomlar arasında moleküller arası etkileşim çizilecek? */
  const kopru = useMemo(() => {
    if (!yapi?.atomlar?.length) return null
    // 1) Hidrojen bağı: H, doğrudan F/O/N'ye bağlıysa
    const hidrojenBagi = tur?.mai?.some((m) => m.ad === 'Hidrojen bağı')
    if (hidrojenBagi) {
      const hBag = yapi.baglar.find((b) => {
        const a = yapi.atomlar.find((x) => x.id === b.a)
        const c = yapi.atomlar.find((x) => x.id === b.b)
        return (a?.sembol === 'H' && ALICI_ATOMLAR.includes(c?.sembol)) || (c?.sembol === 'H' && ALICI_ATOMLAR.includes(a?.sembol))
      })
      if (hBag) {
        const hId = yapi.atomlar.find((x) => x.id === hBag.a)?.sembol === 'H' ? hBag.a : hBag.b
        const aliciId = yapi.atomlar.find((x) => ALICI_ATOMLAR.includes(x.sembol))?.id
        if (hId != null && aliciId != null) {
          return { solId: hId, sagId: aliciId, ad: 'Hidrojen bağı', renk: 'rgb(var(--ka-vurgu))' }
        }
      }
    }
    // 2) Dipol-dipol: en elektronegatif ↔ en elektropozitif atom
    const enler = yapi.atomlar.map((a) => ({ id: a.id, en: ELEMENT_SOZLUGU[a.sembol]?.elektronegatiflik ?? 2 }))
    const enYuksek = enler.reduce((t, x) => (x.en > t.en ? x : t), enler[0])
    const enDusuk = enler.reduce((t, x) => (x.en < t.en ? x : t), enler[0])
    const baskin = tur?.mai?.find((m) => m.baskin)?.ad ?? 'London dispersiyon kuvvetleri'
    return {
      solId: enDusuk.id,
      sagId: enYuksek.id,
      ad: baskin,
      renk: baskin === 'London dispersiyon kuvvetleri' ? 'rgb(var(--ka-metin-3))' : 'rgb(var(--ka-camgobegi))',
    }
  }, [yapi, tur])

  if (!yapi?.atomlar?.length) return null

  const molekulCiz = (taraf, anahtar) => (
    <g key={anahtar}>
      {yapi.baglar.map((bag, i) => {
        const a = taraf.sozluk[bag.a]
        const b = taraf.sozluk[bag.b]
        if (!a || !b) return null
        const vurgulu = mod === 'ici'
        const derece = bag.derece ?? 1
        const dx = b.x - a.x; const dy = b.y - a.y
        const boy = Math.hypot(dx, dy) || 1
        const nx = -dy / boy; const ny = dx / boy
        const kaymalar = derece === 2 ? [-1.6, 1.6] : derece === 3 ? [-2.6, 0, 2.6] : [0]
        return (
          <g key={`${anahtar}b${i}`}>
            {kaymalar.map((k, j) => (
              <line
                key={j}
                x1={a.x + nx * k} y1={a.y + ny * k} x2={b.x + nx * k} y2={b.y + ny * k}
                stroke={vurgulu ? 'rgb(var(--ka-turuncu))' : 'currentColor'}
                strokeOpacity={vurgulu ? 1 : 0.35}
                strokeWidth={vurgulu ? 4.2 : 3}
                strokeLinecap="round"
                className={vurgulu ? 'ka-nabiz' : undefined}
              />
            ))}
          </g>
        )
      })}
      {taraf.noktalar.map((atom) => {
        const renk = atomRengi(atom.sembol)
        const r = atomYaricapi(atom.sembol) * 9 * atom.olcekF
        return (
          <g key={`${anahtar}a${atom.id}`}>
            <circle cx={atom.x} cy={atom.y} r={r} fill={renk.dolgu} stroke={renk.kenar} strokeWidth="0.8" />
            <text x={atom.x} y={atom.y} textAnchor="middle" dominantBaseline="central" fontSize={r * 0.9} fontWeight="700" fill={renk.yazi}>
              {atom.sembol}
            </text>
          </g>
        )
      })}
    </g>
  )

  const solNokta = kopru ? sol.sozluk[kopru.solId] : null
  const sagNokta = kopru ? sag.sozluk[kopru.sagId] : null

  return (
    <div className="ka-molekul-alan" style={{ height: yukseklik, cursor: 'default' }}>
      <svg viewBox="-110 -70 220 140" style={{ height: '100%' }} role="img"
        aria-label="Molekül içi bağ ve moleküller arası etkileşim karşılaştırması">
        {molekulCiz(sol, 'sol')}
        {molekulCiz(sag, 'sag')}

        {kopru && solNokta && sagNokta && (
          <g>
            <line
              x1={solNokta.x} y1={solNokta.y} x2={sagNokta.x} y2={sagNokta.y}
              stroke={kopru.renk}
              strokeWidth={mod === 'arasi' ? 3 : 1.6}
              strokeDasharray="5 5"
              strokeOpacity={mod === 'arasi' ? 1 : 0.4}
              className={mod === 'arasi' ? 'ka-akan' : undefined}
              strokeLinecap="round"
            />
            <text
              x={(solNokta.x + sagNokta.x) / 2}
              y={Math.min(solNokta.y, sagNokta.y) - 12}
              textAnchor="middle" fontSize="8.5" fontWeight="700"
              fill={kopru.renk} opacity={mod === 'arasi' ? 1 : 0.45}
            >
              {kopru.ad}
            </text>
          </g>
        )}

        {mod === 'ici' && (
          <text x="0" y="60" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="rgb(var(--ka-turuncu))">
            Turuncu çizgiler: molekülün kendi atomlarını bağlayan güçlü bağlar
          </text>
        )}
      </svg>
    </div>
  )
}
