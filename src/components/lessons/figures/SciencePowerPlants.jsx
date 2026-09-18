import { ArrowHeads, FigureSvg, region } from './primitives'

/**
 * LGS FEN — GÜÇ SANTRALLERİNİN ORTAK ZİNCİRİ
 * ==================================================================
 *
 * NEDEN BU ŞEMA VAR?
 * F.8.7.3.3'ün açıklaması hidroelektrik, termik, rüzgâr, jeotermal ve
 * nükleer santrallere değinilmesini ister. Öğrenciler beş santrali beş
 * ayrı makine gibi ezberliyor. Oysa beşi de AYNI zincirin sonunu paylaşır:
 * bir şey türbini döndürür, türbin jeneratörü döndürür, jeneratör hareket
 * enerjisini elektrik enerjisine dönüştürür. Santralleri ayıran tek şey
 * türbini NEYİN döndürdüğüdür. Şema bu yüzden beş kaynağı solda, ortak
 * zinciri sağda gösterir.
 *
 * Sayısal verim ya da güç değeri yoktur.
 *
 * BÖLGE SIRASI (registry ile aynı olmak zorunda):
 *   hidroelektrik → termik → ruzgar → jeotermal → nukleer
 */

const KAYNAKLAR = [
  { key: 'hidroelektrik', ad: 'Hidroelektrik', not: 'Barajdan akan su' },
  { key: 'termik', ad: 'Termik', not: 'Yakıtla ısıtılan suyun buharı' },
  { key: 'ruzgar', ad: 'Rüzgâr', not: 'Esen rüzgâr' },
  { key: 'jeotermal', ad: 'Jeotermal', not: 'Yer altındaki sıcak su ve buhar' },
  { key: 'nukleer', ad: 'Nükleer', not: 'Çekirdek tepkimesinin ısıttığı buhar' },
]

function Asama({ x, y, baslik, alt, ton }) {
  const renk = ton === 'aqua' ? 'fill-aqua-50 stroke-aqua-500' : 'fill-brand-50 stroke-brand-400'
  return (
    <g>
      <rect x={x} y={y} width="148" height="74" rx="10" className={renk} strokeWidth="1.6" />
      <text x={x + 74} y={y + 30} textAnchor="middle" className="fill-ink" fontSize="14" fontWeight="700">
        {baslik}
      </text>
      <text x={x + 74} y={y + 50} textAnchor="middle" className="fill-ink/60" fontSize="11.5">
        {alt}
      </text>
    </g>
  )
}

export default function SciencePowerPlants({ activeRegion }) {
  const ortaY = 206
  return (
    <FigureSvg
      viewBox="0 0 760 420"
      title="Güç santrallerinin ortak zinciri"
      desc={
        'Solda beş santral türü: hidroelektrikte barajdan akan su, termikte yakıtla ısıtılan suyun buharı, rüzgârda esen rüzgâr, ' +
        'jeotermalde yer altındaki sıcak su ve buhar, nükleerde çekirdek tepkimesiyle ısıtılan suyun buharı türbini döndürür. ' +
        'Sağda ortak zincir: türbin döner, jeneratör hareket enerjisini elektrik enerjisine dönüştürür, elektrik iletim hatlarıyla evlere ulaşır.'
      }
    >
      <ArrowHeads prefix="lgssan" />

      <text x="24" y="30" className="fill-ink/50" fontSize="11.5" fontWeight="700" letterSpacing="0.06em">
        TÜRBİNİ NE DÖNDÜRÜYOR?
      </text>

      {KAYNAKLAR.map((k, i) => {
        const y = 48 + i * 72
        return (
          <g key={k.key} {...region(k.key, activeRegion)}>
            <rect x="24" y={y} width="236" height="58" rx="10" className="fill-surface-sunken stroke-ink/25" strokeWidth="1.3" />
            <text x="40" y={y + 24} className="fill-ink" fontSize="14" fontWeight="700">
              {`${i + 1}. ${k.ad}`}
            </text>
            <text x="40" y={y + 43} className="fill-ink/60" fontSize="11.5">
              {k.not}
            </text>
            <path
              d={`M262,${y + 29} C300,${y + 29} 300,${ortaY} 322,${ortaY}`}
              fill="none"
              className="stroke-ink/35"
              strokeWidth="1.6"
              markerEnd="url(#lgssan-arrow)"
            />
          </g>
        )
      })}

      {/* Ortak zincir */}
      <text x="332" y="150" className="fill-ink/50" fontSize="11.5" fontWeight="700" letterSpacing="0.06em">
        BEŞİNDE DE AYNI
      </text>
      <Asama x={330} y={ortaY - 37} baslik="Türbin döner" alt="Hareket enerjisi" />
      <line x1="480" y1={ortaY} x2="500" y2={ortaY} className="stroke-ink/45" strokeWidth="2" markerEnd="url(#lgssan-arrow)" />
      <Asama x={506} y={ortaY - 37} baslik="Jeneratör" alt="Hareket → elektrik" />
      <line x1="580" y1={ortaY + 39} x2="580" y2={ortaY + 76} className="stroke-ink/45" strokeWidth="2" markerEnd="url(#lgssan-arrow)" />
      <Asama x={506} y={ortaY + 82} baslik="Elektrik enerjisi" alt="İletim hatlarıyla evlere" ton="aqua" />

      <text x="330" y="398" className="fill-ink/60" fontSize="11.5">
        Santralleri ayıran tek şey türbini neyin döndürdüğüdür.
      </text>
    </FigureSvg>
  )
}
