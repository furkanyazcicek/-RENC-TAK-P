import { ArrowHeads, FigureSvg, region } from './primitives'

/**
 * LGS FEN — KARBON VE OKSİJEN DÖNGÜSÜ
 * ==================================================================
 *
 * NEDEN BU ŞEMA VAR?
 * F.8.6.3.1: "Madde döngülerini şema üzerinde göstererek açıklar."
 * Kazanım şemayı açıkça ister. Karbon ve oksijen döngüsü aynı şemada
 * gösterilir; çünkü ikisini birbirine bağlayan olaylar aynıdır:
 * fotosentez, solunum, ayrıştırma ve yanma. Bu şema bir sonraki adımda
 * küresel iklim değişikliğine köprü kurar: yanma okunun kalınlaşması,
 * havaya karışan karbondioksitin artması demektir.
 *
 * Şemada sayı ve oran yoktur; yön ve süreç vardır.
 *
 * BÖLGE SIRASI (registry ile aynı olmak zorunda):
 *   fotosentez → solunum → ayristirma → yanma
 */

function Kutu({ x, y, w, h, baslik, alt, ton }) {
  const renk =
    ton === 'aqua' ? 'fill-aqua-50 stroke-aqua-500' : ton === 'brand' ? 'fill-brand-50 stroke-brand-400' : 'fill-surface-sunken stroke-ink/30'
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10" className={renk} strokeWidth="1.6" />
      <text x={x + w / 2} y={y + 26} textAnchor="middle" className="fill-ink" fontSize="14" fontWeight="700">
        {baslik}
      </text>
      {alt && (
        <text x={x + w / 2} y={y + 45} textAnchor="middle" className="fill-ink/60" fontSize="12">
          {alt}
        </text>
      )}
    </g>
  )
}

function Etiket({ x, y, metin, anchor = 'middle', ton = 'ink' }) {
  const renk = ton === 'aqua' ? 'fill-aqua-700' : ton === 'brand' ? 'fill-brand-700' : ton === 'accent' ? 'fill-accent-700' : 'fill-ink/75'
  return (
    <text x={x} y={y} textAnchor={anchor} className={renk} fontSize="12.5" fontWeight="650">
      {metin}
    </text>
  )
}

export default function ScienceCarbonCycle({ activeRegion }) {
  return (
    <FigureSvg
      viewBox="0 0 760 430"
      title="Karbon ve oksijen döngüsü"
      desc={
        'Karbon ve oksijen döngüsü şeması. Üstte hava: karbondioksit ve oksijen. Bitkiler fotosentezle havadan karbondioksit alır, havaya oksijen verir. ' +
        'Bitkiler ve hayvanlar solunumla havadan oksijen alır, havaya karbondioksit verir. Ayrıştırıcılar ölü canlıları ayrıştırırken havaya karbondioksit verir. ' +
        'Fosil yakıtların yakılması havaya karbondioksit verir ve oksijen harcar.'
      }
    >
      <ArrowHeads prefix="lgsdon" />

      {/* Hava */}
      <Kutu x={200} y={18} w={360} h={62} baslik="Hava" alt="Karbondioksit ve oksijen" ton="aqua" />

      {/* Canlılar ve kaynaklar */}
      <Kutu x={24} y={200} w={160} h={62} baslik="Bitkiler" alt="Üreticiler" ton="brand" />
      <Kutu x={214} y={200} w={160} h={62} baslik="Hayvanlar" alt="Tüketiciler" ton="brand" />
      <Kutu x={404} y={300} w={160} h={62} baslik="Ayrıştırıcılar" alt="Bakteri ve mantarlar" />
      <Kutu x={592} y={200} w={148} h={62} baslik="Fosil yakıtlar" alt="Kömür, petrol, doğal gaz" />

      {/* Besin ve ölüm okları — döngünün iç bağlantıları */}
      <line x1="184" y1="231" x2="208" y2="231" className="stroke-ink/40" strokeWidth="1.8" markerEnd="url(#lgsdon-arrow)" />
      <text x="196" y="222" textAnchor="middle" className="fill-ink/55" fontSize="11">besin</text>
      <path d="M104,262 C104,330 300,331 398,331" fill="none" className="stroke-ink/30" strokeWidth="1.6" strokeDasharray="5 4" markerEnd="url(#lgsdon-arrow)" />
      <path d="M294,262 C294,300 360,318 398,322" fill="none" className="stroke-ink/30" strokeWidth="1.6" strokeDasharray="5 4" markerEnd="url(#lgsdon-arrow)" />
      <text x="232" y="350" className="fill-ink/55" fontSize="11">ölü canlılar ve atıklar</text>

      {/* 1 — Fotosentez */}
      <g {...region('fotosentez', activeRegion)}>
        <line x1="236" y1="82" x2="120" y2="194" className="stroke-brand-500" strokeWidth="2.6" markerEnd="url(#lgsdon-arrow-brand)" />
        <line x1="92" y1="194" x2="206" y2="84" className="stroke-aqua-500" strokeWidth="2.6" markerEnd="url(#lgsdon-arrow-aqua)" />
        <Etiket x={40} y={118} metin="1 · Fotosentez" anchor="start" ton="brand" />
        <text x="40" y="136" className="fill-ink/60" fontSize="11.5">karbondioksit alır,</text>
        <text x="40" y="151" className="fill-ink/60" fontSize="11.5">oksijen verir</text>
      </g>

      {/* 2 — Solunum */}
      <g {...region('solunum', activeRegion)}>
        <line x1="330" y1="84" x2="310" y2="194" className="stroke-aqua-500" strokeWidth="2.6" markerEnd="url(#lgsdon-arrow-aqua)" />
        <line x1="278" y1="194" x2="298" y2="84" className="stroke-brand-500" strokeWidth="2.6" markerEnd="url(#lgsdon-arrow-brand)" />
        <Etiket x={340} y={124} metin="2 · Solunum" anchor="start" ton="brand" />
        <text x="340" y="142" className="fill-ink/60" fontSize="11.5">oksijen alır,</text>
        <text x="340" y="157" className="fill-ink/60" fontSize="11.5">karbondioksit verir</text>
      </g>

      {/* 3 — Ayrıştırma */}
      <g {...region('ayristirma', activeRegion)}>
        <line x1="484" y1="296" x2="444" y2="86" className="stroke-brand-500" strokeWidth="2.6" markerEnd="url(#lgsdon-arrow-brand)" />
        <Etiket x={474} y={196} metin="3 · Ayrıştırma" anchor="start" ton="brand" />
        <text x="474" y="214" className="fill-ink/60" fontSize="11.5">karbondioksit</text>
        <text x="474" y="229" className="fill-ink/60" fontSize="11.5">verir</text>
      </g>

      {/* 4 — Yanma */}
      <g {...region('yanma', activeRegion)}>
        <line x1="666" y1="196" x2="560" y2="70" className="stroke-accent-500" strokeWidth="3.4" markerEnd="url(#lgsdon-arrow)" />
        <Etiket x={740} y={120} metin="4 · Yanma" anchor="end" ton="accent" />
        <text x="740" y="138" textAnchor="end" className="fill-ink/60" fontSize="11.5">karbondioksit verir,</text>
        <text x="740" y="153" textAnchor="end" className="fill-ink/60" fontSize="11.5">oksijen harcar</text>
      </g>

      {/* Okuma anahtarı */}
      <g>
        <line x1="40" y1="404" x2="68" y2="404" className="stroke-brand-500" strokeWidth="2.6" />
        <text x="76" y="408" className="fill-ink/65" fontSize="12">karbondioksit yönü</text>
        <line x1="236" y1="404" x2="264" y2="404" className="stroke-aqua-500" strokeWidth="2.6" />
        <text x="272" y="408" className="fill-ink/65" fontSize="12">oksijen yönü</text>
        <line x1="400" y1="404" x2="428" y2="404" className="stroke-accent-500" strokeWidth="3.4" />
        <text x="436" y="408" className="fill-ink/65" fontSize="12">insan etkisi: yanma</text>
      </g>
    </FigureSvg>
  )
}
