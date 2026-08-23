import { FigureSvg, Marker, region } from './primitives'

const GROUPS = [
  {
    key: 'yapi-taslari',
    title: 'Canlı değil · yapı taşları',
    levels: ['Atom', 'Molekül', 'Organel'],
    y: 62,
    tone: 'sub',
    summary: 'Tek başlarına metabolizma ve homeostazi kuramazlar.',
  },
  {
    key: 'hucre',
    title: 'Canlılık eşiği',
    levels: ['Hücre'],
    y: 164,
    tone: 'cell',
    summary: 'Canlılık özelliği gösteren en küçük ve ilk düzey.',
  },
  {
    key: 'birey',
    title: 'Bir bireyin içindeki düzeyler',
    levels: ['Doku', 'Organ', 'Sistem', 'Organizma'],
    y: 266,
    tone: 'organism',
    summary: 'Çok hücrelilerde hücreler iş bölümüyle bir bireyi kurar.',
  },
  {
    key: 'ekolojik',
    title: 'Organizma üstü düzeyler',
    levels: ['Popülasyon', 'Komünite', 'Ekosistem', 'Biyosfer'],
    y: 368,
    tone: 'eco',
    summary: 'Artık tek birey değil; bireyler, türler ve çevre birlikte incelenir.',
  },
]

const TONES = {
  sub: { band: 'fill-ink/[0.045] stroke-ink/15', node: 'fill-ink/10', text: 'fill-ink/60' },
  cell: { band: 'fill-brand-500/10 stroke-brand-500', node: 'fill-brand-600', text: 'fill-white' },
  organism: { band: 'fill-brand-500/[0.055] stroke-brand-300', node: 'fill-brand-500/22', text: 'fill-ink/85' },
  eco: { band: 'fill-aqua-500/[0.055] stroke-aqua-400', node: 'fill-aqua-500/20', text: 'fill-ink/85' },
}

export default function OrganizationLevels({ activeRegion = null }) {
  const selected = GROUPS.find((group) => group.key === activeRegion)

  return (
    <FigureSvg
      viewBox="0 0 820 540"
      title="Biyolojik organizasyon düzeyleri: canlılığın başladığı sınır"
      desc="Atom, molekül ve organel canlı değildir. Hücre canlılık özelliği gösteren ilk düzeydir. Doku, organ, sistem ve organizma bireyi; popülasyon, komünite, ekosistem ve biyosfer organizma üstü düzeyleri kurar."
    >
      <defs>
        <marker id="org-level-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-ink/35" />
        </marker>
      </defs>

      <text x="54" y="30" className="fill-ink/45" fontSize="13" fontWeight="800" letterSpacing="1.7">
        KAPSAM VE ÖRGÜTLENME DÜZEYİ BÜYÜR
      </text>
      <line x1="350" y1="26" x2="770" y2="26" className="stroke-ink/25" strokeWidth="2" markerEnd="url(#org-level-arrow)" />

      {GROUPS.map((group, groupIndex) => {
        const tone = TONES[group.tone]
        const active = activeRegion === group.key
        const nodeWidth = group.levels.length === 1 ? 210 : 148
        const gap = 12
        const startX = 75
        const regionProps = region(group.key, activeRegion)

        return (
          <g
            key={group.key}
            {...regionProps}
            style={{
              ...regionProps.style,
              transform: active ? 'scale(1.018)' : 'scale(1)',
              transformBox: 'fill-box',
              transformOrigin: 'center',
              transition: 'opacity .4s ease, transform .55s cubic-bezier(.22,1,.36,1)',
            }}
          >
            <rect x="46" y={group.y} width="728" height="82" rx="10" className={tone.band} strokeWidth={active ? 2.5 : 1.25} />
            <Marker n={groupIndex + 1} x={46} y={group.y + 18} regionKey={group.key} activeRegion={activeRegion} r={14} />
            <text x="75" y={group.y + 23} className="fill-ink/55" fontSize="12.5" fontWeight="800" letterSpacing="1.1">
              {group.title.toLocaleUpperCase('tr-TR')}
            </text>

            {group.levels.map((level, index) => {
              const x = startX + index * (nodeWidth + gap)
              return (
                <g key={level}>
                  <rect x={x} y={group.y + 36} width={nodeWidth} height="34" rx="5" className={tone.node} />
                  <text x={x + nodeWidth / 2} y={group.y + 58} textAnchor="middle" className={tone.text} fontSize="15" fontWeight="800">
                    {level}
                  </text>
                  {index < group.levels.length - 1 && (
                    <path d={`M${x + nodeWidth + 2} ${group.y + 53} H${x + nodeWidth + gap - 2}`} className="stroke-ink/30" strokeWidth="1.8" />
                  )}
                </g>
              )
            })}
          </g>
        )
      })}

      <line x1="30" y1="155" x2="790" y2="155" className="stroke-brand-600" strokeWidth="2.5" strokeDasharray="8 6" />
      <rect x="530" y="142" width="245" height="27" rx="13.5" className="fill-surface stroke-brand-400" strokeWidth="1.5" />
      <text x="652" y="160" textAnchor="middle" className="fill-brand-800" fontSize="12.5" fontWeight="850">
        CANLILIK BU SINIRDA BAŞLAR
      </text>

      <g opacity={selected ? 1 : 0} style={{ transition: 'opacity .35s ease' }}>
        <line x1="46" y1="478" x2="774" y2="478" className="stroke-line-strong" strokeWidth="1" />
        <text x="54" y="505" className="fill-brand-700" fontSize="14" fontWeight="850">
          {selected?.title}
        </text>
        <text x="54" y="529" className="fill-ink/65" fontSize="14">
          {selected?.summary}
        </text>
      </g>
    </FigureSvg>
  )
}
