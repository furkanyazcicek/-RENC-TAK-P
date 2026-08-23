import { FigureSvg, Marker, region } from './primitives'

/**
 * MAYOZUN AKIŞI
 *
 * Şemanın tek amacı iki bölünmeyi ==birbirinden ayırt ettirmek==:
 *
 *   Mayoz I  → metafazda ÇİFT SIRA · anafazda HOMOLOGLAR ayrılır
 *   Mayoz II → metafazda TEK SIRA  · anafazda KROMATİTLER ayrılır
 *
 * İki renk (anneden / babadan gelen homologlar) bütün şema boyunca
 * korunuyor. Mayoz I'de renkler ayrılıyor, mayoz II'de aynı renk
 * ikiye bölünüyor — öğrenci farkı renkten okuyabiliyor.
 *
 * Metafaz I'in çift sırası, mitoz şemasındaki tek sırayla bilinçli
 * olarak karşıtlık kuruyor.
 */

function Chr({ x, y, color, h = 30, split = false, gap = 0 }) {
  const w = 5
  if (split) {
    return (
      <g>
        <rect x={x - gap - w} y={y - h / 2} width={w} height={h} rx={w / 2} className={color} />
        <rect x={x + gap} y={y - h / 2} width={w} height={h} rx={w / 2} className={color} />
      </g>
    )
  }
  return (
    <g>
      <rect x={x - 7} y={y - h / 2} width={w} height={h} rx={w / 2} className={color} />
      <rect x={x + 2} y={y - h / 2} width={w} height={h} rx={w / 2} className={color} />
      <circle cx={x - 0.5} cy={y} r="3.4" className="fill-ink/55" />
    </g>
  )
}

const RED = 'fill-accent-500'
const BLUE = 'fill-brand-600'

export default function MeiosisFlow({ activeRegion = null }) {
  return (
    <FigureSvg
      viewBox="0 0 760 480"
      title="Mayoz I ve mayoz II'nin akışı"
      desc="Mayoz I'de homolog kromozomlar çift sıra hâlinde dizilip birbirinden ayrılır ve kromozom sayısı yarıya iner. Mayoz II'de kardeş kromatitler ayrılır ve toplam dört haploit hücre oluşur."
    >
      <defs>
        <marker id="mf-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-ink/45" />
        </marker>
      </defs>

      {/* ================= MAYOZ I ================= */}
      <g {...region('mayoz-1', activeRegion)}>
        <Marker n={1} x={42} y={44} regionKey="mayoz-1" activeRegion={activeRegion} r={13} />
        <text x={64} y={49} className="fill-ink/75" fontSize="12.5" fontWeight="800" letterSpacing="1.1">
          MAYOZ I — İNDİRGENME
        </text>

        {/* Başlangıç: 2n, homolog çiftler */}
        <ellipse cx="112" cy="140" rx="62" ry="54" className="fill-aqua-500/10 stroke-brand-600" strokeWidth="2.4" />
        <Chr x={92} y={126} color={RED} />
        <Chr x={110} y={126} color={BLUE} />
        <Chr x={96} y={168} color={RED} h={22} />
        <Chr x={132} y={160} color={BLUE} h={22} />
        <text x="112" y="212" textAnchor="middle" className="fill-ink/60" fontSize="11.5">2n · DNA eşlenmiş</text>

        <line x1="184" y1="140" x2="222" y2="140" className="stroke-ink/45" strokeWidth="2.2" markerEnd="url(#mf-arrow)" />

        {/* Metafaz I: çift sıra */}
        <ellipse cx="330" cy="140" rx="72" ry="54" className="fill-aqua-500/10 stroke-brand-600" strokeWidth="2.4" />
        <line x1="272" y1="140" x2="388" y2="140" className="stroke-ink/25" strokeWidth="1.5" strokeDasharray="5 5" />
        <Chr x={302} y={122} color={RED} h={26} />
        <Chr x={302} y={158} color={BLUE} h={26} />
        <Chr x={358} y={122} color={BLUE} h={26} />
        <Chr x={358} y={158} color={RED} h={26} />
        <text x="330" y="212" textAnchor="middle" className="fill-danger-600" fontSize="11.5" fontWeight="800">Metafaz I · ÇİFT SIRA</text>

        <line x1="412" y1="140" x2="450" y2="140" className="stroke-ink/45" strokeWidth="2.2" markerEnd="url(#mf-arrow)" />

        {/* Anafaz I: homologlar ayrılıyor */}
        <ellipse cx="576" cy="140" rx="86" ry="54" className="fill-aqua-500/10 stroke-brand-600" strokeWidth="2.4" />
        <Chr x={520} y={126} color={RED} h={26} />
        <Chr x={520} y={160} color={BLUE} h={26} />
        <Chr x={632} y={126} color={BLUE} h={26} />
        <Chr x={632} y={160} color={RED} h={26} />
        <line x1="556" y1="140" x2="530" y2="140" className="stroke-ink/35" strokeWidth="1.8" />
        <line x1="596" y1="140" x2="622" y2="140" className="stroke-ink/35" strokeWidth="1.8" />
        <text x="576" y="212" textAnchor="middle" className="fill-danger-600" fontSize="11.5" fontWeight="800">Anafaz I · HOMOLOGLAR ayrılır</text>
        <text x="576" y="228" textAnchor="middle" className="fill-ink/50" fontSize="11">kardeş kromatitler hâlâ birlikte</text>
      </g>

      <line x1="24" y1="250" x2="736" y2="250" className="stroke-line-strong" strokeWidth="1" />

      {/* ================= MAYOZ II ================= */}
      <g {...region('mayoz-2', activeRegion)}>
        <Marker n={2} x={42} y={282} regionKey="mayoz-2" activeRegion={activeRegion} r={13} />
        <text x={64} y={287} className="fill-ink/75" fontSize="12.5" fontWeight="800" letterSpacing="1.1">
          MAYOZ II — MİTOZA BENZER
        </text>

        {/* İki haploit hücre */}
        <ellipse cx="86" cy="368" rx="46" ry="42" className="fill-aqua-500/10 stroke-brand-600" strokeWidth="2.2" />
        <Chr x={76} y={358} color={RED} h={24} />
        <Chr x={100} y={380} color={BLUE} h={20} />
        <ellipse cx="188" cy="368" rx="46" ry="42" className="fill-aqua-500/10 stroke-brand-600" strokeWidth="2.2" />
        <Chr x={178} y={358} color={BLUE} h={24} />
        <Chr x={202} y={380} color={RED} h={20} />
        <text x="137" y="428" textAnchor="middle" className="fill-ink/60" fontSize="11.5">2 hücre · n</text>
        <text x="137" y="444" textAnchor="middle" className="fill-brand-700" fontSize="11" fontWeight="700">DNA tekrar EŞLENMEZ</text>

        <line x1="244" y1="368" x2="282" y2="368" className="stroke-ink/45" strokeWidth="2.2" markerEnd="url(#mf-arrow)" />

        {/* Metafaz II: tek sıra */}
        <ellipse cx="360" cy="368" rx="58" ry="44" className="fill-aqua-500/10 stroke-brand-600" strokeWidth="2.2" />
        <line x1="312" y1="368" x2="408" y2="368" className="stroke-ink/25" strokeWidth="1.5" strokeDasharray="5 5" />
        <Chr x={340} y={368} color={RED} h={26} />
        <Chr x={382} y={368} color={BLUE} h={26} />
        <text x="360" y="428" textAnchor="middle" className="fill-success-700" fontSize="11.5" fontWeight="800">Metafaz II · TEK SIRA</text>

        <line x1="428" y1="368" x2="466" y2="368" className="stroke-ink/45" strokeWidth="2.2" markerEnd="url(#mf-arrow)" />

        {/* 4 haploit hücre */}
        <g {...region('sonuc', activeRegion)}>
          {[[518, 344], [592, 344], [518, 396], [592, 396]].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="26" className="fill-aqua-500/10 stroke-brand-600" strokeWidth="2.2" />
              <Chr x={cx - 6} y={cy} color={i % 2 === 0 ? RED : BLUE} h={18} split gap={0} />
            </g>
          ))}
          <Marker n={3} x={652} y={370} regionKey="sonuc" activeRegion={activeRegion} r={13} />
          <text x="556" y="440" textAnchor="middle" className="fill-brand-700" fontSize="12" fontWeight="800">
            4 hücre · n · birbirinden FARKLI
          </text>
        </g>
      </g>

      <text x="24" y="470" className="fill-ink/60" fontSize="12.5">
        Kromozom sayısı mayoz I’de yarıya iner — mayoz II’de değil.
      </text>
    </FigureSvg>
  )
}
