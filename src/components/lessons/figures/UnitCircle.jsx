import { FigureSvg, region } from './primitives'

/**
 * BİRİM ÇEMBER
 *
 * Eski sürümde bu çizim koyu lacivert bir "görsel laboratuvar" panelinin
 * içindeydi ve yanında üç renkli mini kart vardı. O düzen dersin geri
 * kalanıyla aynı dili konuşmuyordu. Burada çizim sayfanın kendi kâğıdında
 * durur; açıklama kartları yerine çizimin üstündeki gerçek etiketler ve
 * dersin metni iş görür.
 */
export default function UnitCircle({ activeRegion = null }) {
  return (
    <FigureSvg
      viewBox="0 0 620 400"
      title="Birim çemberde bir açının kosinüs ve sinüs izdüşümleri"
      desc="Yarıçapı 1 olan çemberde açının ucundaki noktanın x koordinatı kosinüs, y koordinatı sinüs değerini verir."
    >
      <defs>
        <marker id="uc-arrow" markerWidth="9" markerHeight="9" refX="7.5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" className="fill-ink/40" />
        </marker>
      </defs>

      {/* Eksenler */}
      <line x1="40" y1="200" x2="580" y2="200" className="stroke-ink/30" strokeWidth="1.5" markerEnd="url(#uc-arrow)" />
      <line x1="310" y1="370" x2="310" y2="30" className="stroke-ink/30" strokeWidth="1.5" markerEnd="url(#uc-arrow)" />
      <text x="572" y="222" className="fill-ink/45" fontSize="14">x</text>
      <text x="288" y="42" className="fill-ink/45" fontSize="14">y</text>

      {/* Bölge numaraları — işaret tuzağının kaynağı */}
      <text x="430" y="88" className="fill-ink/25" fontSize="26" fontWeight="800">I</text>
      <text x="182" y="88" className="fill-ink/25" fontSize="26" fontWeight="800">II</text>
      <text x="176" y="330" className="fill-ink/25" fontSize="26" fontWeight="800">III</text>
      <text x="428" y="330" className="fill-ink/25" fontSize="26" fontWeight="800">IV</text>

      {/* Çember */}
      <circle cx="310" cy="200" r="130" className="fill-none stroke-brand-500" strokeWidth="2.5" />

      {/* Açı ve yarıçap */}
      <line x1="310" y1="200" x2="422" y2="135" className="stroke-ink/70" strokeWidth="2.5" />
      <path d="M356 200 A46 46 0 0 0 337 163" className="fill-none stroke-ink/55" strokeWidth="2" />
      <text x="362" y="180" className="fill-ink/75" fontSize="17" fontWeight="700">θ</text>
      <text x="352" y="152" className="fill-ink/45" fontSize="13">r = 1</text>

      {/* İzdüşümler */}
      <g {...region('cos', activeRegion)}>
        <line x1="310" y1="200" x2="422" y2="200" className="stroke-accent-500" strokeWidth="3" />
        <line x1="422" y1="135" x2="422" y2="200" className="stroke-accent-500/40" strokeWidth="1.5" strokeDasharray="5 4" />
        <text x="352" y="224" className="fill-accent-600" fontSize="15" fontWeight="700">cos θ</text>
      </g>
      <g {...region('sin', activeRegion)}>
        <line x1="310" y1="200" x2="310" y2="135" className="stroke-aqua-600" strokeWidth="3" />
        <line x1="310" y1="135" x2="422" y2="135" className="stroke-aqua-600/40" strokeWidth="1.5" strokeDasharray="5 4" />
        <text x="252" y="168" className="fill-aqua-700" fontSize="15" fontWeight="700">sin θ</text>
      </g>

      <circle cx="422" cy="135" r="6.5" className="fill-ink" />
      <text x="436" y="128" className="fill-ink" fontSize="15" fontWeight="700">(cos θ, sin θ)</text>
    </FigureSvg>
  )
}
