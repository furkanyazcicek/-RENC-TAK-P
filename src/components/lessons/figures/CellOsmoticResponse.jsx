import { FigureSvg, Marker, region } from './primitives'

/**
 * HÜCRELERİN OSMOTİK ORTAMLARA TEPKİSİ
 *
 * TYT'nin bu konudaki en çok sorulan görseli. Altı hücrenin hepsi tek
 * karede duruyor çünkü asıl öğrenilmesi gereken şey tek tek tepkiler
 * değil, ==aradaki fark==: aynı ortamda hayvan hücresi patlarken bitki
 * hücresi patlamıyor.
 *
 * Farkın tek sebebi hücre duvarı. Bu yüzden bitki sırasında duvar kalın
 * ve ayrı renkte çizildi; plazmolizde sitoplazma duvardan AYRILIYOR ama
 * duvar yerinde kalıyor — öğrencilerin en sık yanlış hatırladığı ayrıntı.
 */

const COLUMNS = [
  {
    key: 'hipotonik',
    n: 1,
    title: 'HİPOTONİK',
    sub: 'dış ortam daha sulu',
    arrow: 'in',
    animal: { r: 54, label: 'Şişer, patlayabilir', tone: 'danger' },
    plant: { inset: 4, label: 'Turgor — dik durur', tone: 'success' },
  },
  {
    key: 'izotonik',
    n: 2,
    title: 'İZOTONİK',
    sub: 'derişimler eşit',
    arrow: 'both',
    animal: { r: 44, label: 'Değişmez', tone: 'ink' },
    plant: { inset: 12, label: 'Gevşek', tone: 'ink' },
  },
  {
    key: 'hipertonik',
    n: 3,
    title: 'HİPERTONİK',
    sub: 'dış ortam daha derişik',
    arrow: 'out',
    animal: { r: 31, label: 'Büzüşür', tone: 'warning' },
    plant: { inset: 30, label: 'Plazmoliz', tone: 'warning' },
  },
]

const TONE = {
  danger: 'fill-danger-600',
  success: 'fill-success-700',
  warning: 'fill-warning-700',
  ink: 'fill-ink/60',
}

const CX = [176, 380, 584]
const ANIMAL_Y = 186
const PLANT_Y = 372

export default function CellOsmoticResponse({ activeRegion = null }) {
  return (
    <FigureSvg
      viewBox="0 0 760 500"
      title="Hayvan ve bitki hücresinin hipotonik, izotonik ve hipertonik ortamlardaki hâli"
      desc="Hipotonik ortamda hayvan hücresi şişip patlayabilirken bitki hücresi hücre duvarı sayesinde turgor durumuna geçer. Hipertonik ortamda hayvan hücresi büzüşür, bitki hücresinde sitoplazma duvardan ayrılarak plazmoliz görülür."
    >
      <defs>
        <marker id="co-in" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" className="fill-info-600" />
        </marker>
      </defs>

      {/* Satır etiketleri */}
      <text x="30" y={ANIMAL_Y - 66} className="fill-ink/45" fontSize="12" fontWeight="700" letterSpacing="1.3">
        HAYVAN HÜCRESİ
      </text>
      <text x="30" y={PLANT_Y - 66} className="fill-ink/45" fontSize="12" fontWeight="700" letterSpacing="1.3">
        BİTKİ HÜCRESİ
      </text>

      <line x1="24" y1="272" x2="736" y2="272" className="stroke-line-strong" strokeWidth="1" />

      {COLUMNS.map((col, i) => {
        const cx = CX[i]
        const dim = Boolean(activeRegion) && activeRegion !== col.key
        return (
          <g key={col.key} opacity={dim ? 0.25 : 1} style={{ transition: 'opacity .4s ease' }}>
            {/* Sütun başlığı */}
            <Marker n={col.n} x={cx - 76} y={40} regionKey={col.key} activeRegion={activeRegion} r={13} />
            <text x={cx - 56} y={45} className="fill-ink/75" fontSize="12.5" fontWeight="800" letterSpacing="1.1">
              {col.title}
            </text>
            <text x={cx} y={66} textAnchor="middle" className="fill-ink/50" fontSize="11.5">
              {col.sub}
            </text>

            {/* --- Hayvan hücresi --- */}
            <circle cx={cx} cy={ANIMAL_Y} r={col.animal.r} className="fill-accent-400/35 stroke-accent-500" strokeWidth="2.5" />
            {col.key === 'hipertonik' && (
              <path
                d={`M${cx - 31} ${ANIMAL_Y} q 8 -10 16 0 q 8 10 16 0 q 8 -10 16 0`}
                className="fill-none stroke-accent-500/60"
                strokeWidth="2"
              />
            )}
            <text x={cx} y={ANIMAL_Y + 76} textAnchor="middle" className={TONE[col.animal.tone]} fontSize="12.5" fontWeight="700">
              {col.animal.label}
            </text>

            {/* --- Bitki hücresi --- */}
            <rect x={cx - 66} y={PLANT_Y - 52} width="132" height="104" rx="8" className="fill-none stroke-ink/55" strokeWidth="4" />
            <rect
              x={cx - 66 + col.plant.inset + 5}
              y={PLANT_Y - 52 + col.plant.inset + 5}
              width={132 - 2 * (col.plant.inset + 5)}
              height={104 - 2 * (col.plant.inset + 5)}
              rx="7"
              className="fill-aqua-500/30 stroke-brand-600"
              strokeWidth="2.5"
            />
            <text x={cx} y={PLANT_Y + 76} textAnchor="middle" className={TONE[col.plant.tone]} fontSize="12.5" fontWeight="700">
              {col.plant.label}
            </text>

            {/* Su yönü okları */}
            {col.arrow === 'in' && (
              <>
                <line x1={cx - 92} y1={ANIMAL_Y} x2={cx - 62} y2={ANIMAL_Y} className="stroke-info-600" strokeWidth="2.5" markerEnd="url(#co-in)" />
                <line x1={cx + 92} y1={ANIMAL_Y} x2={cx + 62} y2={ANIMAL_Y} className="stroke-info-600" strokeWidth="2.5" markerEnd="url(#co-in)" />
              </>
            )}
            {col.arrow === 'out' && (
              <>
                <line x1={cx - 46} y1={ANIMAL_Y} x2={cx - 88} y2={ANIMAL_Y} className="stroke-info-600" strokeWidth="2.5" markerEnd="url(#co-in)" />
                <line x1={cx + 46} y1={ANIMAL_Y} x2={cx + 88} y2={ANIMAL_Y} className="stroke-info-600" strokeWidth="2.5" markerEnd="url(#co-in)" />
              </>
            )}
            {col.arrow === 'both' && (
              <>
                <line x1={cx - 94} y1={ANIMAL_Y - 8} x2={cx - 62} y2={ANIMAL_Y - 8} className="stroke-info-500/70" strokeWidth="2" markerEnd="url(#co-in)" />
                <line x1={cx - 62} y1={ANIMAL_Y + 8} x2={cx - 94} y2={ANIMAL_Y + 8} className="stroke-info-500/70" strokeWidth="2" markerEnd="url(#co-in)" />
              </>
            )}
          </g>
        )
      })}

      {/* Duvarın rolü */}
      <text x="30" y={PLANT_Y + 112} className="fill-ink/60" fontSize="12.5">
        Kalın dış çizgi hücre duvarıdır. Plazmolizde sitoplazma duvardan ayrılır — duvar yerinde kalır.
      </text>
      <text x="30" y={PLANT_Y + 130} className="fill-ink/60" fontSize="12.5">
        Bitki hücresinin hipotonik ortamda patlamamasının tek sebebi bu duvardır.
      </text>
    </FigureSvg>
  )
}
