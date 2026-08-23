import { FigureSvg, Marker, region } from './primitives'

/**
 * HÜCRE DÖNGÜSÜ
 *
 * Şemanın taşıdığı iki kritik bilgi:
 *
 *   1) İnterfaz döngünün ==neredeyse tamamıdır==. Öğrenciler mitozu
 *      hücrenin ana işi sanıyor; oysa mitoz döngünün küçük bir dilimi.
 *      Bu yüzden yaylar gerçek orana yakın çizildi.
 *   2) DNA ==S evresinde== eşlenir, mitozda değil. Bu ayrım sınavda
 *      doğrudan sorulan en yaygın hatadır, o yüzden S dilimi ayrı
 *      renkte ve etiketli.
 */

const CX = 246
const CY = 224
const R = 118

const pt = (angle, radius = R) => {
  const rad = ((angle - 90) * Math.PI) / 180
  return [CX + radius * Math.cos(rad), CY + radius * Math.sin(rad)]
}

const arc = (from, to, radius = R) => {
  const [x1, y1] = pt(from, radius)
  const [x2, y2] = pt(to, radius)
  const large = to - from > 180 ? 1 : 0
  return `M${x1} ${y1} A${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`
}

const SEGMENTS = [
  { key: 'g1', n: 1, from: 0, to: 144, label: 'G1', cls: 'stroke-brand-500/35' },
  { key: 's', n: 2, from: 144, to: 234, label: 'S', cls: 'stroke-brand-600' },
  { key: 'g2', n: 3, from: 234, to: 306, label: 'G2', cls: 'stroke-brand-500/35' },
  { key: 'm', n: 4, from: 306, to: 360, label: 'M', cls: 'stroke-aqua-500' },
]

/**
 * Sağdaki künyede yalnızca BAŞLIK var, açıklama yok.
 *
 * İlk sürümde açıklamalar da SVG içine yazılıyordu ve sabit karakter
 * sayısında kırpıldığı için kelimeler ortadan bölünüyordu ("krom-atitli").
 * SVG `<text>` otomatik satır kaydırmaz; elle kırpmak da kırılgan.
 * Aynı açıklamalar `LessonFigure` tarafından altta HTML olarak zaten
 * basılıyor ve orada düzgün akıyor — burada tekrar etmeye gerek yok.
 */
const NOTES = [
  { key: 'g1', title: 'G1 — büyüme' },
  { key: 's', title: 'S — DNA eşlenmesi' },
  { key: 'g2', title: 'G2 — son hazırlık' },
  { key: 'm', title: 'M — bölünme' },
]

export default function CellCycle({ activeRegion = null }) {
  return (
    <FigureSvg
      viewBox="0 0 760 440"
      title="Hücre döngüsü: interfaz ve bölünme evreleri"
      desc="Hücre döngüsünün büyük kısmını interfaz oluşturur. G1 evresinde hücre büyür, S evresinde DNA eşlenir, G2 evresinde bölünmeye hazırlanır. M evresinde mitoz ve sitokinez gerçekleşir."
    >
      <defs>
        <marker id="cc-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" className="fill-ink/45" />
        </marker>
      </defs>

      {/* Halka dilimleri */}
      {SEGMENTS.map((seg) => {
        const dim = Boolean(activeRegion) && activeRegion !== seg.key
        const mid = (seg.from + seg.to) / 2
        const [lx, ly] = pt(mid, R)
        return (
          <g key={seg.key} opacity={dim ? 0.22 : 1} style={{ transition: 'opacity .4s ease' }}>
            <path d={arc(seg.from, seg.to)} className={`fill-none ${seg.cls}`} strokeWidth="46" strokeLinecap="butt" />
            <text
              x={lx}
              y={ly + 7}
              textAnchor="middle"
              className={seg.key === 's' || seg.key === 'm' ? 'fill-white' : 'fill-ink'}
              fontSize="19"
              fontWeight="800"
            >
              {seg.label}
            </text>
          </g>
        )
      })}

      {/* İç etiketler */}
      <text x={CX} y={CY - 12} textAnchor="middle" className="fill-ink/45" fontSize="12.5" fontWeight="700" letterSpacing="1.4">
        HÜCRE DÖNGÜSÜ
      </text>
      <text x={CX} y={CY + 12} textAnchor="middle" className="fill-brand-700" fontSize="13.5" fontWeight="800">
        İNTERFAZ ≈ %90
      </text>
      <text x={CX} y={CY + 34} textAnchor="middle" className="fill-ink/50" fontSize="12">
        (G1 + S + G2)
      </text>

      {/* Dönüş yönü */}
      <path d={arc(318, 348, 168)} className="fill-none stroke-ink/45" strokeWidth="2" markerEnd="url(#cc-arrow)" />

      {/* Sağdaki künye */}
      {NOTES.map((note, i) => {
        const seg = SEGMENTS.find((s) => s.key === note.key)
        const y = 128 + i * 58
        const dim = Boolean(activeRegion) && activeRegion !== note.key
        return (
          <g key={note.key} opacity={dim ? 0.25 : 1} style={{ transition: 'opacity .4s ease' }}>
            <Marker n={seg.n} x={452} y={y} regionKey={note.key} activeRegion={activeRegion} r={13} />
            <text x={478} y={y + 5} className="fill-ink" fontSize="15" fontWeight="800">
              {note.title}
            </text>
          </g>
        )
      })}

      <text x="30" y="424" className="fill-ink/60" fontSize="12.5">
        DNA yalnızca S evresinde eşlenir — mitoz sırasında değil.
      </text>
    </FigureSvg>
  )
}
