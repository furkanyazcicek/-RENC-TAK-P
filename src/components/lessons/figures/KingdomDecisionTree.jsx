import { FigureSvg, Marker, region } from './primitives'

/**
 * ÂLEM BELİRLEME KARAR AĞACI
 *
 * Altı âlemi yan yana tablo hâlinde vermek yerine ==karar ağacı== olarak
 * vermenin sebebi: sınavda sana âlemin adı verilmiyor, özellikleri
 * veriliyor ve âlemi senin bulman isteniyor.
 *
 * Ağaç üç soruyla bütün ayrımı yapıyor:
 *   1) Çekirdek var mı?        → prokaryot / ökaryot
 *   2) Hücre duvarı var mı?    → hayvanı ayırır
 *   3) Duvar neyden yapılmış?  → bitkiyi mantardan ayırır
 *
 * Protista bilinçli olarak ağacın yanında duruyor: o bir "artık grup",
 * yani diğer üç ökaryot âleme uymayan canlıların toplandığı yer. Ağacın
 * içine yerleştirmek yanlış bir kesinlik verirdi.
 */

function Box({ x, y, w, h, label, sub, tone = 'plain', italic = false }) {
  const fill =
    tone === 'q'
      ? 'fill-surface-sunken'
      : tone === 'result'
        ? 'fill-brand-600'
        : tone === 'soft'
          ? 'fill-brand-500/22'
          : 'fill-surface-sunken'
  return (
    <g>
      <rect x={x - w / 2} y={y} width={w} height={h} rx="9" className={`${fill} ${tone === 'q' ? 'stroke-line-strong' : ''}`} strokeWidth="1.5" />
      <text
        x={x}
        y={sub ? y + h / 2 - 2 : y + h / 2 + 5}
        textAnchor="middle"
        className={tone === 'result' ? 'fill-white' : 'fill-ink'}
        fontSize={tone === 'result' ? 14 : 13}
        fontWeight={tone === 'result' ? '800' : '700'}
        fontStyle={italic ? 'italic' : undefined}
      >
        {label}
      </text>
      {sub && (
        <text x={x} y={y + h / 2 + 15} textAnchor="middle" className={tone === 'result' ? 'fill-white/75' : 'fill-ink/55'} fontSize="11">
          {sub}
        </text>
      )}
    </g>
  )
}

export default function KingdomDecisionTree({ activeRegion = null }) {
  return (
    <FigureSvg
      viewBox="0 0 760 470"
      title="Bir canlıyı âleme yerleştirme karar ağacı"
      desc="Önce çekirdek varlığına bakılır: yoksa bakteri veya arke. Varsa hücre duvarına bakılır: yoksa hayvan. Duvar varsa yapısına bakılır: selüloz ise bitki, kitin ise mantar. Bu üçüne uymayan ökaryotlar protista sayılır."
    >
      <defs>
        <marker id="kd-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" className="fill-ink/45" />
        </marker>
      </defs>

      <text x="30" y="34" className="fill-ink/45" fontSize="12.5" fontWeight="700" letterSpacing="1.5">
        ÜÇ SORU, ALTI ÂLEM
      </text>

      {/* --- Soru 1 --- */}
      <Box x={380} y={54} w={288} h={44} label="Çekirdeği var mı?" tone="q" />

      {/* Dallar */}
      <path d="M300 98 L 176 132" className="stroke-ink/45" strokeWidth="2" markerEnd="url(#kd-arrow)" fill="none" />
      <text x="222" y="108" className="fill-danger-600" fontSize="12" fontWeight="800">HAYIR</text>
      <path d="M460 98 L 566 132" className="stroke-ink/45" strokeWidth="2" markerEnd="url(#kd-arrow)" fill="none" />
      <text x="510" y="108" className="fill-success-700" fontSize="12" fontWeight="800">EVET</text>

      {/* --- Prokaryot kolu --- */}
      <g {...region('prokaryot', activeRegion)}>
        <Box x={150} y={140} w={196} h={40} label="PROKARYOT" tone="soft" />
        <Marker n={1} x={44} y={160} regionKey="prokaryot" activeRegion={activeRegion} r={13} />

        <path d="M110 180 L 82 216" className="stroke-ink/45" strokeWidth="2" markerEnd="url(#kd-arrow)" fill="none" />
        <path d="M190 180 L 220 216" className="stroke-ink/45" strokeWidth="2" markerEnd="url(#kd-arrow)" fill="none" />

        <Box x={76} y={224} w={124} h={52} label="Bakteriler" sub="peptidoglikan duvar" tone="result" />
        <Box x={224} y={224} w={124} h={52} label="Arkeler" sub="peptidoglikan YOK" tone="result" />
      </g>

      {/* --- Ökaryot kolu: Soru 2 --- */}
      <Box x={566} y={140} w={244} h={44} label="Hücre duvarı var mı?" tone="q" />

      <path d="M660 184 L 692 220" className="stroke-ink/45" strokeWidth="2" markerEnd="url(#kd-arrow)" fill="none" />
      <text x="694" y="208" className="fill-danger-600" fontSize="12" fontWeight="800">HAYIR</text>
      <path d="M480 184 L 442 220" className="stroke-ink/45" strokeWidth="2" markerEnd="url(#kd-arrow)" fill="none" />
      <text x="404" y="208" className="fill-success-700" fontSize="12" fontWeight="800">EVET</text>

      <g {...region('hayvan', activeRegion)}>
        <Box x={686} y={228} w={126} h={52} label="Hayvanlar" sub="heterotrof" tone="result" />
        <Marker n={2} x={686} y={300} regionKey="hayvan" activeRegion={activeRegion} r={13} />
      </g>

      {/* --- Soru 3 --- */}
      <Box x={430} y={228} w={216} h={44} label="Duvar neyden yapılmış?" tone="q" />

      <path d="M370 272 L 330 312" className="stroke-ink/45" strokeWidth="2" markerEnd="url(#kd-arrow)" fill="none" />
      <text x="292" y="300" className="fill-success-700" fontSize="12" fontWeight="800">SELÜLOZ</text>
      <path d="M492 272 L 536 312" className="stroke-ink/45" strokeWidth="2" markerEnd="url(#kd-arrow)" fill="none" />
      <text x="546" y="300" className="fill-warning-700" fontSize="12" fontWeight="800">KİTİN</text>

      <g {...region('bitki', activeRegion)}>
        <Box x={322} y={320} w={130} h={52} label="Bitkiler" sub="ototrof · kloroplast" tone="result" />
        <Marker n={3} x={322} y={392} regionKey="bitki" activeRegion={activeRegion} r={13} />
      </g>

      <g {...region('mantar', activeRegion)}>
        <Box x={556} y={320} w={130} h={52} label="Mantarlar" sub="heterotrof · saprofit" tone="result" />
        <Marker n={4} x={556} y={392} regionKey="mantar" activeRegion={activeRegion} r={13} />
      </g>

      {/* --- Protista: artık grup --- */}
      <g {...region('protista', activeRegion)}>
        <line x1="30" y1="330" x2="248" y2="330" className="stroke-line-strong" strokeWidth="1" strokeDasharray="6 5" />
        <Marker n={5} x={44} y={366} regionKey="protista" activeRegion={activeRegion} r={13} />
        <text x="66" y="371" className="fill-ink/70" fontSize="12.5" fontWeight="800">
          Protista
        </text>
        <text x="30" y="396" className="fill-ink/55" fontSize="11.5">
          Ökaryot olduğu hâlde diğer üç âlemin
        </text>
        <text x="30" y="412" className="fill-ink/55" fontSize="11.5">
          hiçbirine tam uymayan canlılar burada
        </text>
        <text x="30" y="428" className="fill-ink/45" fontSize="11.5">
          toplanır: amip, öglena, algler…
        </text>
      </g>

      <text x="380" y="456" textAnchor="middle" className="fill-ink/60" fontSize="12.5">
        Sınavda âlemin adı değil özellikleri verilir — bu üç soruyu sırayla sorman yeterli.
      </text>
    </FigureSvg>
  )
}
