import { useState } from 'react'
import { ArrowRight, Check, CornerDownRight, X } from 'lucide-react'
import MathRenderer from '../../aiSolve/MathRenderer'
import Prose, { Inline } from './Prose'

/**
 * BLOK SUNUMLARI
 * ==================================================================
 *
 * TEK KURAL: her blok tipi KENDİ görsel çözümünü alır.
 *
 * Önceki sürümde 23 blok tipinin hepsi aynı kalıba giriyordu — yuvarlak
 * kart + ikon çipi + BÜYÜK HARF etiket + renkli zemin — yalnızca rengi
 * değişiyordu. Altı bloklu bir bölüm, altı renkli kartın alt alta dizildiği
 * bir listeye dönüşüyordu. "AI yapmış" hissinin kaynağı buydu (§9, §11).
 *
 * Burada:
 *   · Anlatım, kavram, neden, örnek → SAYFANIN DOĞAL AKIŞINDA metin.
 *   · Tuzak, sınav, bağlantı → tipografik işaret (çizgi, band, etiket).
 *   · Şekil, tablo, formül → kendi levhası.
 *   · Durak ve quiz → yüzeyi olan tek nesneler, çünkü öğrenci burada
 *     gerçekten DURUR ve bir şey yapar.
 *
 * Kart yalnızca gerçekten ayrı bir bilgi nesnesi olduğunda kullanılır.
 */

/* ==================================================================
   Ortak parçalar
   ================================================================== */

function Eyebrow({ children, tone = 'muted' }) {
  const toneClass =
    tone === 'danger'
      ? 'text-danger-600'
      : tone === 'exam'
        ? 'text-aqua-700'
        : tone === 'brand'
          ? 'text-brand-700'
          : tone === 'success'
            ? 'text-success-700'
            : 'text-ink/45'
  return <p className={`lesson-eyebrow m-0 ${toneClass}`}>{children}</p>
}

function BlockTitle({ children, size = 'md' }) {
  if (!children) return null
  return (
    <h3
      className={`m-0 mt-1.5 font-display font-bold leading-snug tracking-tight text-ink ${
        size === 'sm' ? 'text-[1.0625rem]' : 'text-[1.1875rem] sm:text-[1.3125rem]'
      }`}
    >
      <Inline text={children} />
    </h3>
  )
}

/** Numaralı adım rayı — süreç, mekanizma ve çözümlü örnek paylaşır. */
function StepRail({ steps, startAt = 1 }) {
  if (!steps?.length) return null
  return (
    <ol className="lesson-steps m-0 mt-4 flex list-none flex-col gap-4 p-0">
      {steps.map((step, index) => (
        <li key={index} className="relative">
          <span className="lesson-step-marker" aria-hidden="true">
            {startAt + index}
          </span>
          {step.title && (
            <p className="m-0 text-[1rem] font-bold leading-snug text-ink">
              <Inline text={step.title} />
            </p>
          )}
          {step.body && <Prose text={step.body} className={step.title ? 'mt-1 text-[0.9375rem] leading-[1.75]' : 'text-[0.9375rem] leading-[1.75]'} />}
        </li>
      ))}
    </ol>
  )
}

/* ==================================================================
   Taşıyıcı anlatım — kutu yok
   ================================================================== */

export function ProseBlock({ block }) {
  return <Prose text={block.body} />
}

export function ConceptBlock({ block }) {
  return (
    <div>
      {block.term && <p className="m-0"><span className="lesson-term"><Inline text={block.term} /></span></p>}
      <Prose text={block.body} className={block.term ? 'mt-3.5' : ''} />
    </div>
  )
}

export function WhyBlock({ block }) {
  return (
    <div>
      {block.question && (
        <p className="lesson-why-question m-0">
          <Inline text={block.question} />
        </p>
      )}
      <Prose text={block.body} className={block.question ? 'mt-2.5' : ''} />
    </div>
  )
}

export function MechanismBlock({ block }) {
  return (
    <div>
      <BlockTitle>{block.title}</BlockTitle>
      <Prose text={block.body} className={block.title ? 'mt-2.5' : ''} />
      <StepRail steps={block.steps} />
    </div>
  )
}

export function ProcessBlock({ block }) {
  return (
    <div>
      <Eyebrow>İşlem sırası</Eyebrow>
      <BlockTitle>{block.title}</BlockTitle>
      <Prose text={block.intro} className="mt-2.5" />
      <StepRail steps={block.steps} />
    </div>
  )
}

export function ExampleBlock({ block }) {
  return (
    <div>
      <Eyebrow>Örnek</Eyebrow>
      <BlockTitle size="sm">{block.title}</BlockTitle>
      <Prose text={block.body} className="mt-2" />
    </div>
  )
}

/* ==================================================================
   Öğretmen katmanı — tipografik işaret, kutu değil
   ================================================================== */

const NOTE_LABEL = {
  note: 'Hoca notu',
  warning: 'Dikkat',
  exam: 'Sınav notu',
  connection: 'Bağlantı',
}

const NOTE_CLASS = {
  note: '',
  warning: 'lesson-note-warning',
  exam: 'lesson-note-exam',
  connection: 'lesson-note-connection',
}

export function TeacherNoteBlock({ block }) {
  return (
    <aside className={`lesson-note ${NOTE_CLASS[block.tone] ?? ''}`}>
      <p className="lesson-eyebrow m-0 mb-1 text-ink/40">{NOTE_LABEL[block.tone] ?? NOTE_LABEL.note}</p>
      <Prose text={block.body} className="text-[inherit] leading-[inherit]" />
    </aside>
  )
}

export function TrapBlock({ block }) {
  return (
    <div>
      <Eyebrow tone="danger">Öğrencilerin en sık yaptığı hata</Eyebrow>
      <BlockTitle>{block.title}</BlockTitle>
      {(block.wrong || block.right) && (
        <div className="mt-3.5 flex flex-col gap-3">
          {block.wrong && (
            <div className="lesson-wrong">
              <p className="lesson-eyebrow m-0 mb-0.5 text-danger-600">Yanlış kurulan mantık</p>
              <Prose text={block.wrong} className="text-[0.9375rem] leading-[1.75]" />
            </div>
          )}
          {block.right && (
            <div className="lesson-right">
              <p className="lesson-eyebrow m-0 mb-0.5 text-success-700">Doğrusu</p>
              <Prose text={block.right} className="text-[0.9375rem] leading-[1.75]" />
            </div>
          )}
        </div>
      )}
      <Prose text={block.body} className="mt-3" />
    </div>
  )
}

export function ExamBlock({ block }) {
  return (
    <div className="lesson-band">
      <Eyebrow tone="exam">Sınavda nasıl gelir?</Eyebrow>
      <BlockTitle size="sm">{block.title}</BlockTitle>
      <Prose text={block.body} className="mt-2 text-[0.9375rem] leading-[1.75]" />
      {block.patterns?.length > 0 && (
        <ul className="m-0 mt-3 flex list-none flex-col gap-2 p-0">
          {block.patterns.map((pattern, index) => (
            <li key={index} className="flex gap-2 text-[0.9375rem] leading-[1.7] text-ink/75">
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-aqua-600" aria-hidden="true" />
              <span>
                <Inline text={pattern} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function QuestionClueBlock({ block }) {
  return (
    <div className="lesson-band">
      <Eyebrow tone="exam">Soruda nasıl tanırım?</Eyebrow>
      <BlockTitle size="sm">{block.concept && `Soruda ${block.concept} nasıl tanınır?`}</BlockTitle>
      {block.statement && (
        <div className="mt-3 border-s-2 border-aqua-500/45 ps-4">
          <Prose text={block.statement} className="text-[0.9375rem] italic leading-[1.75]" />
        </div>
      )}
      {block.clues?.length > 0 && (
        <ul className="m-0 mt-3 flex list-none flex-wrap gap-2 p-0">
          {block.clues.map((clue, index) => (
            <li key={index} className="rounded-full border border-line-strong bg-surface px-2.5 py-1 text-[0.8125rem] font-semibold text-ink/70">
              <Inline text={clue} />
            </li>
          ))}
        </ul>
      )}
      {block.reasoning && (
        <div className="mt-4">
          <Eyebrow>Neden bu sonuca gider?</Eyebrow>
          <Prose text={block.reasoning} className="mt-1 text-[0.9375rem] leading-[1.75]" />
        </div>
      )}
      {block.boundary && (
        <div className="mt-3 border-t border-line pt-3">
          <Eyebrow tone="danger">Kör ezber yapma</Eyebrow>
          <Prose text={block.boundary} className="mt-1 text-[0.875rem] leading-[1.7] text-ink/65" />
        </div>
      )}
    </div>
  )
}

export function OsyMInsightBlock({ block }) {
  return (
    <aside className="border-y border-line py-5">
      <Eyebrow tone="brand">ÖSYM bu konuda neyi ölçüyor?</Eyebrow>
      <BlockTitle size="sm">{block.title}</BlockTitle>
      <Prose text={block.body} className="mt-2 text-[0.9375rem] leading-[1.75]" />
      {block.measures?.length > 0 && (
        <ul className="m-0 mt-3 grid list-none gap-2 p-0 sm:grid-cols-2">
          {block.measures.map((measure, index) => (
            <li key={index} className="flex gap-2 text-[0.875rem] leading-[1.65] text-ink/70">
              <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-500" aria-hidden="true" />
              <span><Inline text={measure} /></span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export function PhilosopherBlock({ block }) {
  return (
    <div className="border-s-2 border-brand-400 ps-4">
      <Eyebrow>Filozof → görüş → anahtar mantık</Eyebrow>
      <BlockTitle size="sm">{block.name}</BlockTitle>
      <Prose text={block.view} className="mt-2 text-[0.9375rem] leading-[1.75]" />
      {block.logic && (
        <p className="m-0 mt-2 text-[0.9375rem] leading-[1.7] text-ink/75">
          <span className="font-bold text-ink">Anahtar mantık: </span><Inline text={block.logic} />
        </p>
      )}
      {block.clues?.length > 0 && (
        <p className="m-0 mt-2 text-[0.875rem] leading-[1.7] text-ink/55">
          <span className="font-semibold text-ink/70">Paragrafta ara: </span>{block.clues.map((clue, index) => <span key={index}>{index > 0 && ' · '}<Inline text={clue} /></span>)}
        </p>
      )}
      {block.contrast && <Prose text={`**Karşısında:** ${block.contrast}`} className="mt-2 text-[0.875rem] leading-[1.7] text-ink/60" />}
    </div>
  )
}

export function ArgumentFlowBlock({ block }) {
  return (
    <div>
      <Eyebrow>Argüman akışı</Eyebrow>
      <BlockTitle>{block.title}</BlockTitle>
      <Prose text={block.claim} className="mt-2.5" />
      <StepRail steps={block.steps} />
      {block.conclusion && (
        <div className="mt-4 border-s-2 border-success-500/60 ps-4">
          <Eyebrow tone="success">Varılan sonuç</Eyebrow>
          <Prose text={block.conclusion} className="mt-1 text-[0.9375rem] leading-[1.75]" />
        </div>
      )}
      {block.counter && (
        <div className="mt-3 border-s-2 border-danger-500/45 ps-4">
          <Eyebrow tone="danger">Karşı itiraz</Eyebrow>
          <Prose text={block.counter} className="mt-1 text-[0.875rem] leading-[1.7] text-ink/65" />
        </div>
      )}
    </div>
  )
}

export function ConnectionBlock({ block }) {
  return (
    <div className="border-s-2 border-info-500/50 ps-4">
      <Eyebrow>Bu bilgi nereye bağlanıyor?</Eyebrow>
      <BlockTitle size="sm">{block.title}</BlockTitle>
      <Prose text={block.body} className="mt-2 text-[0.9375rem] leading-[1.75]" />
      {block.links?.length > 0 && (
        <p className="m-0 mt-2.5 text-[0.875rem] text-ink/55">
          {block.links.map((link, index) => (
            <span key={index}>
              {index > 0 && <span className="mx-2 text-ink/25">·</span>}
              <Inline text={link} />
            </span>
          ))}
        </p>
      )}
    </div>
  )
}

export function MemoryBlock({ block }) {
  return (
    <div className="border-s-2 border-accent-400/60 ps-4">
      <Eyebrow>Aklında kalsın</Eyebrow>
      <p className="m-0 mt-1 text-[1rem] italic leading-[1.75] text-ink/80">
        <Inline text={block.body} />
      </p>
    </div>
  )
}

/* ==================================================================
   Veri ve formül
   ================================================================== */

export function FormulaBlock({ block }) {
  return (
    <div>
      {block.title && <Eyebrow>{block.title}</Eyebrow>}
      {block.latex && (
        <div className={`lesson-formula ${block.title ? 'mt-2' : ''}`}>
          <MathRenderer latex={block.latex} display />
        </div>
      )}
      {block.variables?.length > 0 && (
        <dl className="m-0 mt-3 grid gap-x-4 gap-y-1.5 text-[0.9375rem] sm:grid-cols-[auto_1fr]">
          {block.variables.map((variable, index) => (
            <div key={index} className="flex gap-2 sm:contents">
              <dt className="font-mono font-bold text-ink/85 sm:text-right">{variable.sym}</dt>
              <dd className="m-0 text-ink/65">
                <Inline text={variable.desc} />
              </dd>
            </div>
          ))}
        </dl>
      )}
      <Prose text={block.meaning} className="mt-3" />
    </div>
  )
}

export function TableBlock({ block }) {
  const [head, ...body] = block.columns?.length ? [block.columns, ...block.rows] : block.rows ?? []
  const [selectedRow, setSelectedRow] = useState(null)
  if (!head) return null
  const selected = selectedRow === null ? null : body[selectedRow]

  return (
    <div>
      {block.title && <Eyebrow>{block.title}</Eyebrow>}
      <div className={`overflow-x-auto ${block.title ? 'mt-2' : ''}`}>
        <table className="lesson-table">
          <thead>
            <tr>
              {head.map((cell, index) => (
                <th key={index} scope="col">
                  <Inline text={cell} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`transition-[opacity,background-color] ${block.interactive && selectedRow === rowIndex ? 'bg-brand-50/80' : ''} ${block.interactive && selectedRow !== null && selectedRow !== rowIndex ? 'opacity-35' : ''}`}
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    {block.interactive && cellIndex === 0 ? (
                      <button
                        type="button"
                        onClick={() => setSelectedRow(selectedRow === rowIndex ? null : rowIndex)}
                        aria-pressed={selectedRow === rowIndex}
                        className={`focus-ring flex w-full items-center gap-2 rounded text-start font-semibold ${selectedRow === rowIndex ? 'text-brand-800' : 'text-ink'}`}
                      >
                        <span className={`h-5 w-0.5 shrink-0 rounded-full ${selectedRow === rowIndex ? 'bg-brand-700' : 'bg-line-strong'}`} aria-hidden="true" />
                        <Inline text={cell} />
                      </button>
                    ) : (
                      <Inline text={cell} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.interactive && selected && (
        <div className="mt-4 border-s-2 border-brand-400 py-1 ps-4" aria-live="polite">
          <Eyebrow tone="brand">Seçilen satır · {selected[0]}</Eyebrow>
          <dl className="m-0 mt-2 grid gap-3 sm:grid-cols-2">
            {head.slice(1).map((column, index) => (
              <div key={column}>
                <dt className="text-[0.6875rem] font-extrabold uppercase tracking-wider text-ink/45"><Inline text={column} /></dt>
                <dd className="m-0 mt-1 text-[0.9375rem] leading-relaxed text-ink/80"><Inline text={selected[index + 1]} /></dd>
              </div>
            ))}
          </dl>
        </div>
      )}
      {block.caption && <p className="m-0 mt-2.5 text-[0.875rem] leading-relaxed text-ink/55"><Inline text={block.caption} /></p>}
    </div>
  )
}

export function CompareBlock({ block }) {
  const columnCount = block.columns.length
  const [selectedRow, setSelectedRow] = useState(null)
  const selected = selectedRow === null ? null : block.rows[selectedRow]
  return (
    <div>
      <BlockTitle>{block.title}</BlockTitle>

      <div className="mt-4 overflow-x-auto">
        <table className="lesson-table" style={{ minWidth: columnCount > 2 ? '34rem' : '26rem' }}>
          <thead>
            <tr>
              <th scope="col" className="w-[7.5rem]">
                <span className="sr-only">Ayrım</span>
              </th>
              {block.columns.map((column, index) => (
                <th key={index} scope="col" className="!text-[0.8125rem] !normal-case !tracking-normal !text-ink">
                  <Inline text={column} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`transition-[opacity,background-color] ${block.interactive && selectedRow === rowIndex ? 'bg-brand-50/80' : ''} ${block.interactive && selectedRow !== null && selectedRow !== rowIndex ? 'opacity-35' : ''}`}
              >
                <th scope="row" className="!border-b-line !py-2.5 !pe-3 align-top !text-[0.6875rem] font-bold !text-ink/50">
                  {block.interactive ? (
                    <button
                      type="button"
                      onClick={() => setSelectedRow(selectedRow === rowIndex ? null : rowIndex)}
                      aria-pressed={selectedRow === rowIndex}
                      className={`focus-ring flex w-full items-center gap-2 rounded text-start ${selectedRow === rowIndex ? 'text-brand-800' : ''}`}
                    >
                      <span className={`h-5 w-0.5 shrink-0 rounded-full ${selectedRow === rowIndex ? 'bg-brand-700' : 'bg-line-strong'}`} aria-hidden="true" />
                      <Inline text={row.label} />
                    </button>
                  ) : (
                    <Inline text={row.label} />
                  )}
                </th>
                {row.values.map((value, valueIndex) => (
                  <td key={valueIndex} className="!font-normal !text-ink/80">
                    <Inline text={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {block.interactive && selected && (
        <div className="mt-4 border-s-2 border-brand-400 py-1 ps-4" aria-live="polite">
          <Eyebrow tone="brand">Seçilen ayrım · {selected.label}</Eyebrow>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {block.columns.map((column, index) => (
              <div key={column} className="border-s-2 border-line-strong ps-3">
                <p className="m-0 text-[0.75rem] font-extrabold uppercase tracking-wider text-ink/45"><Inline text={column} /></p>
                <p className="m-0 mt-1 text-[0.9375rem] leading-relaxed text-ink/80"><Inline text={selected.values[index]} /></p>
              </div>
            ))}
          </div>
        </div>
      )}

      {block.insight && (
        <div className="mt-4 border-s-2 border-brand-400 ps-4">
          <Eyebrow tone="brand">Asıl ayrım</Eyebrow>
          <Prose text={block.insight} className="mt-1 text-[0.9375rem] leading-[1.75]" />
        </div>
      )}
    </div>
  )
}

/**
 * Harita, dar ekranlarda yatay kaydırılabilen tek bir ilişki zinciridir.
 * Böylece oklar ve kavram sırası PDF'de ya da mobilde kaybolmaz.
 */
export function ConceptMapBlock({ block }) {
  const [activeNode, setActiveNode] = useState(null)
  const nodes = new Map((block.nodes ?? []).map((node) => [node.id, node]))
  const links = (block.links ?? []).filter((link) => nodes.has(link.from) && nodes.has(link.to))

  return (
    <figure className="lesson-concept-map m-0">
      {block.title && <Eyebrow>Kavram haritası</Eyebrow>}
      <BlockTitle>{block.title}</BlockTitle>
      {block.intro && <Prose text={block.intro} className="mt-2.5" />}
      <div className="lesson-concept-map-flow mt-5" aria-label={block.title || 'Kavram haritası'}>
        {(block.nodes ?? []).map((node) => {
          const next = links.find((link) => link.from === node.id)
          return (
            <div key={node.id} className="lesson-concept-map-item">
              <button
                type="button"
                className={`lesson-concept-map-node focus-ring text-start ${activeNode === node.id ? 'is-active' : ''}`}
                aria-expanded={activeNode === node.id}
                onClick={() => setActiveNode((current) => (current === node.id ? null : node.id))}
              >
                <p className="m-0 font-display text-[0.9375rem] font-bold leading-snug text-ink"><Inline text={node.label} /></p>
                {node.detail && (
                  <p className={`m-0 mt-1 text-[0.8125rem] leading-relaxed text-ink/60 ${activeNode === node.id ? '' : 'line-clamp-2'}`}>
                    <Inline text={node.detail} />
                  </p>
                )}
                <span className="mt-2 block font-mono text-[0.625rem] font-bold uppercase tracking-wider text-brand-700/70">
                  {activeNode === node.id ? 'Açıklamayı daralt' : 'Açıklamayı incele'}
                </span>
              </button>
              {next && (
                <div className="lesson-concept-map-arrow" aria-label={`${node.label} ${next.label || 'ile ilişkilidir'} ${nodes.get(next.to)?.label ?? ''}`}>
                  <span>{next.label || '→'}</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
      {block.caption && <figcaption><Inline text={block.caption} /></figcaption>}
    </figure>
  )
}

/**
 * Tarihsel sinir iddiasi tasimayan, katmanlari ve konum aciklamalari
 * etkileşimli bir sematik atlas. Cizgiler DOM/CSS ile kurulur; mobilde
 * harita yatay kaydirilabilir ve her hedef en az 44 px dokunma alanidir.
 */
export function HistoricalMapBlock({ block }) {
  const [activeLayers, setActiveLayers] = useState(() => new Set((block.layers ?? []).filter((layer) => layer.active).map((layer) => layer.id)))
  const [activeLocation, setActiveLocation] = useState(null)
  const locations = new Map((block.locations ?? []).map((location) => [location.id, location]))
  const visible = (item) => !item.layer || activeLayers.has(item.layer)

  const toggleLayer = (id) => {
    setActiveLayers((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
    setActiveLocation(null)
  }

  return (
    <figure className="lesson-historical-map m-0">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Eyebrow tone="brand">Etkileşimli tarih atlası</Eyebrow>
          <BlockTitle>{block.title}</BlockTitle>
        </div>
        <span className="lesson-map-schematic-label">{block.map_label || 'Şematik gösterim'}</span>
      </div>
      {block.intro && <Prose text={block.intro} className="mt-2.5" />}

      {block.layers?.length > 0 && (
        <div className="lesson-map-layer-controls mt-4" aria-label="Harita katmanları">
          {block.layers.map((layer) => (
            <button
              key={layer.id}
              type="button"
              className="focus-ring lesson-map-layer-button"
              aria-pressed={activeLayers.has(layer.id)}
              onClick={() => toggleLayer(layer.id)}
              title={layer.description}
            >
              <span aria-hidden="true" />{layer.label}
            </button>
          ))}
        </div>
      )}

      <div className="lesson-map-scroll mt-4">
        <div className="lesson-map-canvas" role="img" aria-label={`${block.title}. ${block.map_label || 'Şematik gösterim'}.`}>
          {(block.regions?.length ? block.regions : [
            { label: 'BALKANLAR', x: 8, y: 10, tone: 'land' },
            { label: 'MARMARA DENİZİ', x: 37, y: 39, tone: 'water' },
            { label: 'ANADOLU', x: 78, y: 82, tone: 'land' },
          ]).map((region, index) => (
            <div
              key={`${region.label}-${index}`}
              className={`lesson-map-region tone-${region.tone || 'muted'}`}
              style={{ left: `${region.x}%`, top: `${region.y}%` }}
            >
              {region.label}
            </div>
          ))}

          {(block.routes ?? []).filter(visible).map((route, index) => {
            const from = locations.get(route.from)
            const to = locations.get(route.to)
            if (!from || !to || !visible(from) || !visible(to)) return null
            const dx = to.x - from.x
            const dy = to.y - from.y
            const length = Math.hypot(dx, dy)
            const angle = Math.atan2(dy, dx) * (180 / Math.PI)
            return (
              <span
                key={`${route.from}-${route.to}-${index}`}
                className={`lesson-map-route tone-${route.tone || 'brand'}`}
                style={{ left: `${from.x}%`, top: `${from.y}%`, width: `${length}%`, transform: `rotate(${angle}deg)` }}
                title={route.label}
                aria-hidden="true"
              />
            )
          })}

          {(block.locations ?? []).filter(visible).map((location) => (
            <button
              key={location.id}
              type="button"
              className={`focus-ring lesson-map-point tone-${location.tone || 'brand'} ${activeLocation === location.id ? 'is-active' : ''}`}
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              aria-pressed={activeLocation === location.id}
              onClick={() => setActiveLocation((current) => (current === location.id ? null : location.id))}
            >
              <span aria-hidden="true" />
              <strong>{location.label}</strong>
            </button>
          ))}
        </div>
      </div>

      {activeLocation && locations.get(activeLocation) && (
        <div className="lesson-map-detail" role="status">
          <strong><Inline text={locations.get(activeLocation).label} /></strong>
          <Prose text={locations.get(activeLocation).detail} className="mt-1 text-[0.9rem] leading-[1.7]" />
        </div>
      )}
      {block.insight && <figcaption className="lesson-map-insight"><Inline text={block.insight} /></figcaption>}
      {block.source_note && <p className="lesson-map-source"><Inline text={block.source_note} /></p>}
    </figure>
  )
}

export function HistoricalFiguresBlock({ block }) {
  const [activeFigure, setActiveFigure] = useState(null)
  if (!block.figures?.length) return null

  return (
    <section className="lesson-historical-figures">
      <Eyebrow tone="brand">Hükümdar · şahsiyet · olay</Eyebrow>
      <BlockTitle>{block.title || 'Dönemin belirleyici şahsiyetleri'}</BlockTitle>
      {block.intro && <Prose text={block.intro} className="mt-2.5" />}
      <div className="lesson-figure-grid mt-5">
        {block.figures.map((figure, index) => {
          const open = activeFigure === index
          return (
            <article key={`${figure.name}-${index}`} className={`lesson-person-record ${open ? 'is-active' : ''}`}>
              <button
                type="button"
                className="focus-ring block w-full text-start"
                aria-expanded={open}
                onClick={() => setActiveFigure((current) => (current === index ? null : index))}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h4 className="m-0 font-display text-[1rem] font-bold leading-snug text-ink"><Inline text={figure.name} /></h4>
                  {figure.period && <span className="font-mono text-[0.68rem] font-bold text-brand-700"><Inline text={figure.period} /></span>}
                </div>
                {figure.position && <p className="m-0 mt-1 text-[0.78rem] font-semibold text-ink/48"><Inline text={figure.position} /></p>}
                {figure.contribution && <Prose text={figure.contribution} className={`mt-2 text-[0.88rem] leading-[1.65] ${open ? '' : 'line-clamp-3'}`} />}
                <span className="mt-2 block font-mono text-[0.62rem] font-bold uppercase tracking-wider text-brand-700/65">
                  {open ? 'Bağlantıları daralt' : 'Olay bağlantılarını aç'}
                </span>
              </button>
              {open && (
                <div className="lesson-person-details mt-3 border-t border-line pt-3">
                  {figure.connections?.length > 0 && (
                    <ul className="m-0 grid list-none gap-1.5 p-0">
                      {figure.connections.map((connection, connectionIndex) => (
                        <li key={connectionIndex} className="flex gap-2 text-[0.84rem] leading-[1.6] text-ink/68">
                          <span className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-500" aria-hidden="true" />
                          <Inline text={connection} />
                        </li>
                      ))}
                    </ul>
                  )}
                  {figure.significance && <Prose text={figure.significance} className="mt-3 border-s-2 border-brand-400 ps-3 text-[0.86rem] leading-[1.65]" />}
                </div>
              )}
            </article>
          )
        })}
      </div>
      {block.takeaway && <Prose text={block.takeaway} className="mt-4 border-t border-line pt-4 font-semibold text-ink" />}
    </section>
  )
}

export function TimelineBlock({ block }) {
  if (!block.items?.length) return null
  return (
    <figure className="lesson-history-rail m-0">
      <Eyebrow>Kısa kronoloji</Eyebrow>
      <BlockTitle>{block.title}</BlockTitle>
      {block.intro && <Prose text={block.intro} className="mt-2.5" />}
      <ol className="m-0 mt-5 list-none p-0" aria-label={block.title || 'Kısa kronoloji'}>
        {block.items.map((item, index) => (
          <li key={index} className="lesson-history-event">
            <span className="lesson-history-dot" aria-hidden="true" />
            {item.title && <p className="m-0 font-mono text-[0.75rem] font-bold text-brand-700"><Inline text={item.title} /></p>}
            {item.body && <Prose text={item.body} className="mt-1 text-[0.9375rem] leading-[1.7]" />}
          </li>
        ))}
      </ol>
      {block.takeaway && (
        <figcaption className="mt-3 border-s-2 border-brand-400 ps-4 text-[0.9375rem] leading-[1.7] text-ink/70">
          <Inline text={block.takeaway} />
        </figcaption>
      )}
    </figure>
  )
}

export function CauseEffectBlock({ block }) {
  if (!block.steps?.length) return null
  return (
    <div className="lesson-cause-effect">
      <Eyebrow>Neden-sonuç</Eyebrow>
      <BlockTitle>{block.title}</BlockTitle>
      {block.intro && <Prose text={block.intro} className="mt-2.5" />}
      <ol className="lesson-cause-effect-flow m-0 mt-5 list-none p-0">
        {block.steps.map((step, index) => (
          <li key={index} className="lesson-cause-effect-item">
            <span className="lesson-cause-effect-index" aria-hidden="true">{index + 1}</span>
            <div>
              {step.title && <p className="m-0 text-[0.75rem] font-extrabold uppercase tracking-wider text-ink/45"><Inline text={step.title} /></p>}
              {step.body && <Prose text={step.body} className="mt-1 text-[0.9375rem] leading-[1.7]" />}
            </div>
          </li>
        ))}
      </ol>
      {block.inference && (
        <div className="mt-4 border-s-2 border-aqua-500 ps-4">
          <Eyebrow tone="exam">Bu bilgiden ne çıkar?</Eyebrow>
          <Prose text={block.inference} className="mt-1 text-[0.9375rem] leading-[1.7]" />
        </div>
      )}
    </div>
  )
}

export function PeriodSummaryBlock({ block }) {
  return (
    <aside className="lesson-period-summary">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <Eyebrow>Dönem özeti</Eyebrow>
          <BlockTitle size="sm">{block.title}</BlockTitle>
        </div>
        {block.range && <span className="font-mono text-[0.75rem] font-bold text-brand-700"><Inline text={block.range} /></span>}
      </div>
      {block.body && <Prose text={block.body} className="mt-3 text-[0.9375rem] leading-[1.7]" />}
      {block.turning_points?.length > 0 && (
        <ul className="m-0 mt-3 grid list-none gap-2 p-0 sm:grid-cols-2">
          {block.turning_points.map((point, index) => (
            <li key={index} className="flex gap-2 text-[0.875rem] leading-[1.6] text-ink/70">
              <span className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
              <Inline text={point} />
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

const SENTENCE_TONES = {
  brand: 'border-brand-400 bg-brand-50/60 text-brand-800',
  aqua: 'border-aqua-400 bg-aqua-50/60 text-aqua-800',
  accent: 'border-accent-400 bg-accent-50/60 text-accent-800',
  success: 'border-success-400 bg-success-50/60 text-success-800',
  danger: 'border-danger-400 bg-danger-50/60 text-danger-700',
  muted: 'border-ink/25 bg-ink/[0.035] text-ink/70',
}

/** Cümleyi renkli anlam/görev birimlerine ayıran dil çözümleme levhası. */
export function SentenceAnalysisBlock({ block }) {
  return (
    <section className="border-y border-line py-5 sm:py-6">
      <Eyebrow tone="brand">Cümleyi parçala</Eyebrow>
      <BlockTitle>{block.title}</BlockTitle>
      {block.prompt && (
        <div className="mt-4 border-s-4 border-brand-400 ps-4 font-display text-[1.0625rem] font-semibold leading-[1.8] text-ink sm:text-[1.1875rem]">
          <Inline text={block.prompt} />
        </div>
      )}
      {block.segments?.length > 0 && (
        <ol className="m-0 mt-5 grid list-none gap-3 p-0 sm:grid-cols-2">
          {block.segments.map((segment, index) => (
            <li key={index} className={`border-s-4 px-4 py-3 ${SENTENCE_TONES[segment.tone] ?? SENTENCE_TONES.brand}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="m-0 font-semibold leading-[1.6]"><Inline text={segment.text} /></p>
                {segment.label && <span className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.12em] opacity-70"><Inline text={segment.label} /></span>}
              </div>
              {segment.explanation && <Prose text={segment.explanation} className="mt-1.5 text-[0.875rem] leading-[1.65] text-ink/70" />}
            </li>
          ))}
        </ol>
      )}
      {block.takeaway && (
        <div className="mt-4 border-s-2 border-brand-400 ps-4">
          <Eyebrow tone="brand">Cümlenin hükmü</Eyebrow>
          <Prose text={block.takeaway} className="mt-1 text-[0.9375rem] leading-[1.75]" />
        </div>
      )}
    </section>
  )
}

/** Her düğümde iki sonucun da görünür olduğu sınav karar algoritması. */
export function DecisionTreeBlock({ block }) {
  return (
    <section>
      <Eyebrow tone="brand">Karar ağacı</Eyebrow>
      <BlockTitle>{block.title}</BlockTitle>
      {block.intro && <Prose text={block.intro} className="mt-2.5" />}
      {block.checks?.length > 0 && (
        <ol className="m-0 mt-5 flex list-none flex-col gap-5 p-0">
          {block.checks.map((check, index) => (
            <li key={index} className="relative ps-10 sm:ps-12">
              {index < block.checks.length - 1 && <span className="absolute start-[0.9rem] top-8 h-[calc(100%+0.75rem)] w-px bg-line-strong sm:start-[1.15rem]" aria-hidden="true" />}
              <span className="absolute start-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-brand-300 bg-brand-50 font-mono text-[0.75rem] font-bold text-brand-700 sm:h-9 sm:w-9">{index + 1}</span>
              <p className="m-0 font-semibold leading-[1.65] text-ink"><Inline text={check.question} /></p>
              <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                <div className="border-s-2 border-success-400 bg-success-50/45 px-3 py-2 text-[0.875rem] leading-[1.6] text-ink/75"><strong className="me-1 text-success-700">EVET:</strong><Inline text={check.yes || 'Sonraki kontrole geç.'} /></div>
                <div className="border-s-2 border-danger-400 bg-danger-50/45 px-3 py-2 text-[0.875rem] leading-[1.6] text-ink/75"><strong className="me-1 text-danger-600">HAYIR:</strong><Inline text={check.no || 'Seçeneği ele.'} /></div>
              </div>
            </li>
          ))}
        </ol>
      )}
      {block.takeaway && <Prose text={block.takeaway} className="mt-5 border-t border-line pt-4 font-semibold text-ink" />}
    </section>
  )
}

/* ==================================================================
   Uygulama
   ================================================================== */

export function WorkedExampleBlock({ block }) {
  return (
    <div>
      <Eyebrow tone="brand">Çözümlü örnek</Eyebrow>
      <BlockTitle size="sm">{block.title}</BlockTitle>
      {block.prompt && (
        <div className="mt-3 border-s-2 border-ink/20 ps-4">
          <Prose text={block.prompt} className="text-[1rem] leading-[1.8]" />
        </div>
      )}
      <StepRail steps={block.steps} />
      {block.answer && (
        <p className="m-0 mt-4 flex gap-2.5 text-[1rem] font-semibold leading-[1.7] text-ink">
          <CornerDownRight className="mt-1 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
          <span>
            <Inline text={block.answer} />
          </span>
        </p>
      )}
      {block.takeaway && (
        <div className="mt-3.5 border-s-2 border-brand-400 ps-4">
          <Eyebrow tone="brand">Buradan ne öğrendik?</Eyebrow>
          <Prose text={block.takeaway} className="mt-1 text-[0.9375rem] leading-[1.75]" />
        </div>
      )}
    </div>
  )
}

export function CheckpointBlock({ block, onAnswered }) {
  const [revealed, setRevealed] = useState(false)
  const [hintOpen, setHintOpen] = useState(false)

  function reveal() {
    setRevealed(true)
    onAnswered?.({ blockId: block.id, kind: 'checkpoint' })
  }

  return (
    <section className="lesson-stop">
      <Eyebrow tone="brand">Şimdi sen karar ver</Eyebrow>
      <p className="m-0 mt-2 font-display text-[1.125rem] font-bold leading-snug tracking-tight text-ink sm:text-[1.25rem]">
        <Inline text={block.prompt} />
      </p>

      {block.hint && (
        <div className="mt-3">
          {hintOpen ? (
            <p className="m-0 text-[0.9375rem] leading-[1.7] text-ink/65">
              <Inline text={block.hint} />
            </p>
          ) : (
            <button type="button" onClick={() => setHintOpen(true)} className="focus-ring rounded text-[0.875rem] font-semibold text-ink/50 underline underline-offset-4 hover:text-ink/75">
              Küçük bir ipucu ver
            </button>
          )}
        </div>
      )}

      {!revealed ? (
        <button
          type="button"
          onClick={reveal}
          className="focus-ring mt-4 inline-flex items-center gap-2 rounded-btn border border-line-strong bg-surface px-3.5 py-2 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-brand-400 hover:text-brand-700"
        >
          Düşündüm, cevabı göster
        </button>
      ) : (
        <div className="mt-4 border-t border-line pt-4">
          <Eyebrow tone="success">Cevap</Eyebrow>
          <Prose text={block.answer} className="mt-1.5 text-[0.9375rem] leading-[1.8]" />
        </div>
      )}
    </section>
  )
}

const QUIZ_PURPOSE = {
  recall: 'Bilgi kontrolü',
  concept: 'Kavram kontrolü',
  apply: 'Uygulama',
  error: 'Hata tespiti',
}

export function QuizBlock({ block, onAnswered }) {
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const correct = submitted && selected === block.answer_index

  function submit() {
    if (selected == null || submitted) return
    setSubmitted(true)
    onAnswered?.({ blockId: block.id, kind: 'quiz', correct: selected === block.answer_index })
  }

  return (
    <section className="lesson-stop">
      <Eyebrow tone="brand">{QUIZ_PURPOSE[block.purpose] ?? QUIZ_PURPOSE.concept}</Eyebrow>
      <p className="m-0 mt-2 font-display text-[1.0625rem] font-bold leading-snug tracking-tight text-ink sm:text-[1.1875rem]">
        <Inline text={block.question} />
      </p>

      <ul className="m-0 mt-4 flex list-none flex-col p-0">
        {block.options.map((option, index) => {
          const isAnswer = index === block.answer_index
          const isPicked = index === selected
          const state = submitted
            ? isAnswer
              ? 'answer'
              : isPicked
                ? 'wrong'
                : 'idle'
            : isPicked
              ? 'picked'
              : 'idle'

          return (
            <li key={index} className="border-t border-line last:border-b">
              <button
                type="button"
                disabled={submitted}
                onClick={() => setSelected(index)}
                className={`focus-ring flex w-full items-start gap-3 py-3 text-start text-[0.9375rem] leading-[1.7] transition-colors disabled:cursor-default ${
                  state === 'answer'
                    ? 'text-success-700'
                    : state === 'wrong'
                      ? 'text-danger-600'
                      : state === 'picked'
                        ? 'text-brand-800'
                        : 'text-ink/75 hover:text-brand-700'
                }`}
              >
                <span
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[0.6875rem] font-bold ${
                    state === 'answer'
                      ? 'border-success-500 bg-success-500 text-white'
                      : state === 'wrong'
                        ? 'border-danger-500 bg-danger-500 text-white'
                        : state === 'picked'
                          ? 'border-brand-500 bg-brand-500 text-white'
                          : 'border-line-strong text-ink/45'
                  }`}
                  aria-hidden="true"
                >
                  {state === 'answer' ? <Check className="h-3 w-3" /> : state === 'wrong' ? <X className="h-3 w-3" /> : String.fromCharCode(65 + index)}
                </span>
                <span>
                  <Inline text={option} />
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      {!submitted ? (
        <button
          type="button"
          disabled={selected == null}
          onClick={submit}
          className="focus-ring mt-4 inline-flex items-center gap-2 rounded-btn border border-line-strong bg-surface px-3.5 py-2 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-brand-400 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-45"
        >
          Cevabımı kontrol et
        </button>
      ) : (
        <div className="mt-4 border-t border-line pt-4">
          <Eyebrow tone={correct ? 'success' : 'danger'}>{correct ? 'Doğru' : 'Burada bir daha düşün'}</Eyebrow>
          <Prose text={block.explanation} className="mt-1.5 text-[0.9375rem] leading-[1.8]" />
        </div>
      )}
    </section>
  )
}

export function OsyMSimulationBlock({ block, onAnswered }) {
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)

  function reveal() {
    if (selected == null || revealed) return
    setRevealed(true)
    onAnswered?.({ blockId: block.id, kind: 'osym_simulation', correct: selected === block.answer_index })
  }

  return (
    <section className="lesson-stop">
      <Eyebrow tone="exam">Mini ÖSYM simülasyonu</Eyebrow>
      <BlockTitle>{block.title}</BlockTitle>
      {block.passage && <div className="mt-4 border-s-2 border-aqua-400 ps-4"><Prose text={block.passage} className="text-[1rem] leading-[1.85]" /></div>}
      <p className="m-0 mt-4 font-display text-[1.0625rem] font-bold leading-[1.65] text-ink"><Inline text={block.question} /></p>

      <ol className="m-0 mt-4 flex list-none flex-col p-0">
        {block.options.map((option, index) => {
          const isAnswer = index === block.answer_index
          const isPicked = index === selected
          return (
            <li key={index} className="border-t border-line last:border-b">
              <button
                type="button"
                disabled={revealed}
                onClick={() => setSelected(index)}
                className={`focus-ring flex w-full items-start gap-3 py-3 text-start text-[0.9375rem] leading-[1.7] disabled:cursor-default ${revealed && isAnswer ? 'text-success-700' : revealed && isPicked ? 'text-danger-600' : isPicked ? 'text-brand-800' : 'text-ink/75 hover:text-brand-700'}`}
              >
                <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[0.6875rem] font-bold ${revealed && isAnswer ? 'border-success-500 bg-success-500 text-white' : revealed && isPicked ? 'border-danger-500 bg-danger-500 text-white' : isPicked ? 'border-brand-500 bg-brand-500 text-white' : 'border-line-strong text-ink/45'}`} aria-hidden="true">
                  {revealed && isAnswer ? <Check className="h-3 w-3" /> : revealed && isPicked ? <X className="h-3 w-3" /> : String.fromCharCode(65 + index)}
                </span>
                <span><Inline text={option.text} /></span>
              </button>
              {revealed && (
                <div className={`mb-3 ms-8 border-s-2 ps-3 text-[0.875rem] leading-[1.65] ${isAnswer ? 'border-success-400 text-success-800' : 'border-ink/20 text-ink/65'}`}>
                  <strong>{isAnswer ? 'Doğru seçenek: ' : 'Neden elenir? '}</strong>
                  <Inline text={option.explanation || (isAnswer ? 'Metnin ölçütünü karşılar.' : 'Metnin ölçütünü tam karşılamaz.')} />
                </div>
              )}
            </li>
          )
        })}
      </ol>

      {!revealed ? (
        <button type="button" disabled={selected == null} onClick={reveal} className="focus-ring mt-4 inline-flex min-h-11 items-center rounded-btn border border-line-strong bg-surface px-4 py-2.5 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-brand-400 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-45">Çözümü göster</button>
      ) : (
        <div className="mt-5 border-t border-line pt-4">
          {block.stem_analysis && <div><Eyebrow>Soru kökü ne istiyor?</Eyebrow><Prose text={block.stem_analysis} className="mt-1.5 text-[0.9375rem] leading-[1.75]" /></div>}
          {block.critical_point && <div className="mt-4"><Eyebrow tone="danger">Kritik nokta</Eyebrow><Prose text={block.critical_point} className="mt-1.5 text-[0.9375rem] leading-[1.75]" /></div>}
          {block.takeaway && <div className="mt-4 border-s-2 border-brand-400 ps-4"><Eyebrow tone="brand">Sınav refleksi</Eyebrow><Prose text={block.takeaway} className="mt-1.5 text-[0.9375rem] leading-[1.75]" /></div>}
        </div>
      )}
    </section>
  )
}

/* ==================================================================
   Kapanış
   ================================================================== */

export function SummaryBlock({ block }) {
  return (
    <div>
      <Eyebrow>{block.title || 'Bu bölümde ne oldu?'}</Eyebrow>
      {block.points?.length > 0 && (
        <ol className="m-0 mt-3 flex list-none flex-col gap-2.5 p-0">
          {block.points.map((point, index) => (
            <li key={index} className="flex gap-3 text-[0.9375rem] leading-[1.75] text-ink/80">
              <span className="mt-0.5 shrink-0 font-mono text-[0.8125rem] font-bold text-brand-500">{String(index + 1).padStart(2, '0')}</span>
              <span>
                <Inline text={point} />
              </span>
            </li>
          ))}
        </ol>
      )}
      <Prose text={block.body} className="mt-3" />
    </div>
  )
}

export function NextStepBlock({ block }) {
  return (
    <div className="border-t border-line pt-5">
      <Eyebrow>Sıradaki adımın</Eyebrow>
      <Prose text={block.body} className="mt-2" />
      {block.topics?.length > 0 && (
        <ul className="m-0 mt-3 flex list-none flex-wrap gap-x-4 gap-y-1.5 p-0">
          {block.topics.map((topic, index) => (
            <li key={index} className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-700">
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Inline text={topic} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { StepRail, Eyebrow, BlockTitle }
