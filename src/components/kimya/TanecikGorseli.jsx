import { useMemo } from 'react'
import { atomRengi } from '../../data/kimya/atomRenkleri.js'

/**
 * Tanecik düzeyinde görseller.
 * Amaç: "saf madde" ile "karışım" farkını sözle değil, tanecik dizilimiyle
 * göstermek. Yerleşim sabit bir tohumla üretilir; her çizimde aynı görünür.
 */
function rastgeleUret(tohum) {
  let x = tohum
  return () => {
    x = (x * 1103515245 + 12345) % 2147483648
    return x / 2147483648
  }
}

const GENISLIK = 300
const YUKSEKLIK = 170

function kureler(adet, tohum, kutu = { x0: 12, y0: 12, x1: GENISLIK - 12, y1: YUKSEKLIK - 12 }) {
  const rast = rastgeleUret(tohum)
  const noktalar = []
  let deneme = 0
  while (noktalar.length < adet && deneme < adet * 220) {
    deneme += 1
    const x = kutu.x0 + rast() * (kutu.x1 - kutu.x0)
    const y = kutu.y0 + rast() * (kutu.y1 - kutu.y0)
    if (noktalar.every((n) => Math.hypot(n.x - x, n.y - y) > 21)) noktalar.push({ x, y })
  }
  return noktalar
}

function Kure({ x, y, sembol, r = 8.5 }) {
  const renk = atomRengi(sembol)
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={renk.dolgu} stroke={renk.kenar} strokeWidth="1" />
      <circle cx={x - r * 0.3} cy={y - r * 0.32} r={r * 0.32} fill="#fff" opacity="0.42" />
    </g>
  )
}

function IkiliMolekul({ x, y, a, b, aci = 0 }) {
  const dx = Math.cos(aci) * 8
  const dy = Math.sin(aci) * 8
  return (
    <g>
      <line x1={x - dx} y1={y - dy} x2={x + dx} y2={y + dy} stroke="currentColor" strokeOpacity="0.35" strokeWidth="3.5" />
      <Kure x={x - dx} y={y - dy} sembol={a} r={7.5} />
      <Kure x={x + dx} y={y + dy} sembol={b} r={7.5} />
    </g>
  )
}

function SuMolekulu({ x, y, aci = 0 }) {
  const d = 9
  const yariAci = (104.5 / 2) * (Math.PI / 180)
  const h1 = [x + Math.cos(aci - yariAci) * d, y + Math.sin(aci - yariAci) * d]
  const h2 = [x + Math.cos(aci + yariAci) * d, y + Math.sin(aci + yariAci) * d]
  return (
    <g>
      <line x1={x} y1={y} x2={h1[0]} y2={h1[1]} stroke="currentColor" strokeOpacity="0.35" strokeWidth="3" />
      <line x1={x} y1={y} x2={h2[0]} y2={h2[1]} stroke="currentColor" strokeOpacity="0.35" strokeWidth="3" />
      <Kure x={h1[0]} y={h1[1]} sembol="H" r={5.5} />
      <Kure x={h2[0]} y={h2[1]} sembol="H" r={5.5} />
      <Kure x={x} y={y} sembol="O" r={8.5} />
    </g>
  )
}

export default function TanecikGorseli({ tur, yukseklik = YUKSEKLIK }) {
  const icerik = useMemo(() => {
    switch (tur) {
      case 'element': {
        const n = kureler(11, 7)
        return { cizim: n.map((p, i) => <Kure key={i} {...p} sembol="Fe" />), aciklama: 'Tek tür atom (Fe) — element' }
      }
      case 'elementMolekulu': {
        const n = kureler(7, 21)
        return {
          cizim: n.map((p, i) => <IkiliMolekul key={i} x={p.x} y={p.y} a="O" b="O" aci={(i * 1.1) % Math.PI} />),
          aciklama: 'Aynı tür atomlardan oluşan moleküller (O₂) — hem element hem molekül',
        }
      }
      case 'bilesik': {
        const n = kureler(7, 33)
        return {
          cizim: n.map((p, i) => <SuMolekulu key={i} x={p.x} y={p.y} aci={(i * 0.9) % (Math.PI * 2)} />),
          aciklama: 'Farklı elementlerin belirli oranda bağlandığı moleküller (H₂O) — bileşik',
        }
      }
      case 'iyonik': {
        const kareler = []
        for (let sx = 0; sx < 6; sx += 1) {
          for (let sy = 0; sy < 4; sy += 1) {
            const katyon = (sx + sy) % 2 === 0
            kareler.push(
              <g key={`${sx}-${sy}`}>
                <Kure x={52 + sx * 38} y={32 + sy * 34} sembol={katyon ? 'Na' : 'Cl'} r={katyon ? 8 : 11} />
                <text x={52 + sx * 38} y={32 + sy * 34 - (katyon ? 11 : 14)} textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor" opacity="0.65">
                  {katyon ? '+' : '−'}
                </text>
              </g>,
            )
          }
        }
        return { cizim: kareler, aciklama: 'Zıt yüklü iyonların düzenli örgüsü (NaCl) — molekül değil, formül birimi' }
      }
      case 'homojen': {
        const cozucu = kureler(13, 51)
        const cozunen = kureler(5, 99, { x0: 26, y0: 26, x1: GENISLIK - 26, y1: YUKSEKLIK - 26 })
        return {
          cizim: [
            ...cozucu.map((p, i) => <SuMolekulu key={`s${i}`} x={p.x} y={p.y} aci={(i * 1.3) % (Math.PI * 2)} />),
            ...cozunen.map((p, i) => (
              <g key={`c${i}`}>
                <Kure x={p.x} y={p.y} sembol={i % 2 ? 'Na' : 'Cl'} r={7.5} />
              </g>
            )),
          ],
          aciklama: 'Çözünen tanecikler her yere eşit dağılmış — homojen karışım (tuzlu su)',
        }
      }
      case 'heterojen': {
        const ust = kureler(8, 77, { x0: 14, y0: 12, x1: GENISLIK - 14, y1: 70 })
        const alt = kureler(10, 123, { x0: 14, y0: 96, x1: GENISLIK - 14, y1: YUKSEKLIK - 12 })
        return {
          cizim: [
            <rect key="ayrim" x="0" y="82" width={GENISLIK} height="2" fill="currentColor" opacity="0.22" />,
            ...ust.map((p, i) => <Kure key={`u${i}`} {...p} sembol="C" r={9} />),
            ...alt.map((p, i) => <SuMolekulu key={`a${i}`} x={p.x} y={p.y} aci={(i * 1.7) % (Math.PI * 2)} />),
          ],
          aciklama: 'Tanecikler ayrı bölgelerde toplanmış — heterojen karışım (yağ + su)',
        }
      }
      case 'atom':
      default: {
        return {
          cizim: [<Kure key="a" x={GENISLIK / 2} y={yukseklik / 2} sembol="He" r={16} />],
          aciklama: 'Tek bir atom — maddenin en küçük yapı taşı',
        }
      }
    }
  }, [tur, yukseklik])

  return (
    <figure style={{ margin: 0 }}>
      <svg className="ka-tanecik" viewBox={`0 0 ${GENISLIK} ${YUKSEKLIK}`} role="img" aria-label={icerik.aciklama}>
        {icerik.cizim}
      </svg>
      <figcaption className="ka-sessiz" style={{ marginTop: 6 }}>{icerik.aciklama}</figcaption>
    </figure>
  )
}
