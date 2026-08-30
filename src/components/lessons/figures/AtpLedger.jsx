import { FigureSvg } from './primitives'

/**
 * ATP BİLANÇOSU
 *
 * Sayı ezberi değil, ORAN duygusu vermek için var: öğrenci "30–32 ATP"
 * rakamını ezberliyor ama bunun neredeyse tamamının iç zardan geldiğini
 * görmüyor. Çubuk bunu tek bakışta gösteriyor; kristanın önemi de böylece
 * kendiliğinden anlaşılıyor.
 *
 * Veriye bağlı çalışır: `data.segments` verilirse onu çizer, verilmezse
 * hücresel solunumun standart bilançosunu kullanır.
 */

const DEFAULT_SEGMENTS = [
  { label: 'Glikoliz', place: 'sitoplazma', atp: 2, tone: 'ink' },
  { label: 'Krebs döngüsü', place: 'matriks', atp: 2, tone: 'aqua' },
  { label: 'ETS + kemiozmoz', place: 'iç zar', atp: 28, tone: 'brand' },
]

const FILL = {
  brand: 'fill-brand-600',
  aqua: 'fill-aqua-500',
  ink: 'fill-ink/35',
}

const DOT = {
  brand: 'bg-brand-600',
  aqua: 'bg-aqua-500',
  ink: 'bg-ink/35',
}

export default function AtpLedger({ data = {} }) {
  const segments = Array.isArray(data.segments) && data.segments.length ? data.segments : DEFAULT_SEGMENTS
  const total = segments.reduce((sum, item) => sum + Number(item.atp ?? 0), 0)
  const outputRange = Array.isArray(data.range) && data.range.length === 2 ? data.range : [total, total]
  const rangeLabel = outputRange[0] === outputRange[1] ? String(outputRange[0]) : `${outputRange[0]}–${outputRange[1]}`
  const width = 720
  let cursor = 0

  return (
    <div className="flex flex-col gap-4">
      <FigureSvg
        viewBox="0 0 760 96"
        title={`Toplam ${rangeLabel} ATP'nin evrelere dağılımı`}
        desc="Çubuk 32 ATP'lik üst sınırı gösterir. Hücrede kullanılan sitoplazmik NADH mekiğine göre toplam verim 30 ATP'ye düşebilir; ATP'nin büyük çoğunluğu iç zardan gelir."
      >
        {segments.map((segment, index) => {
          const share = total ? (Number(segment.atp) / total) * width : 0
          const x = 20 + cursor
          cursor += share
          return (
            <g key={index}>
              <rect x={x} y="26" width={Math.max(share - 2, 2)} height="44" rx="4" className={FILL[segment.tone] ?? FILL.ink} />
              {share > 70 && (
                <text x={x + share / 2 - 1} y="55" textAnchor="middle" className="fill-white" fontSize="17" fontWeight="800">
                  {segment.atp} ATP
                </text>
              )}
            </g>
          )
        })}
        <text x="20" y="18" className="fill-ink/45" fontSize="12" fontWeight="700" letterSpacing="1.4">
          1 GLİKOZ
        </text>
        <text x="740" y="18" textAnchor="end" className="fill-ink/45" fontSize="12" fontWeight="700" letterSpacing="1.4">
          TOPLAM {rangeLabel} ATP
        </text>
      </FigureSvg>

      <ul className="m-0 grid list-none gap-2 p-0 sm:grid-cols-3">
        {segments.map((segment, index) => (
          <li key={index} className="flex items-baseline gap-2">
            <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-sm ${DOT[segment.tone] ?? DOT.ink}`} aria-hidden="true" />
            <span className="min-w-0">
              <span className="block text-[0.9375rem] font-bold leading-snug text-ink">
                {segment.label} · {segment.atp} ATP
              </span>
              <span className="block text-[0.8125rem] leading-snug text-ink/50">{segment.place}</span>
            </span>
          </li>
        ))}
      </ul>

      {data.range_note && (
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-line pt-3 text-[0.8125rem] text-ink/60">
          <span className="font-extrabold text-brand-800">30 ATP</span>
          <span className="relative block px-3 text-center leading-[1.45]">
            <span className="absolute left-0 right-0 top-1/2 -z-0 border-t border-dashed border-brand-300" aria-hidden="true" />
            <span className="relative bg-surface px-2">{data.range_note}</span>
          </span>
          <span className="font-extrabold text-brand-800">32 ATP</span>
        </div>
      )}
    </div>
  )
}
