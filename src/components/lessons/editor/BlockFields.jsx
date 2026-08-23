import { Plus, Trash2 } from 'lucide-react'
import { figureOptions } from '../figures'
import { Input, Select, Textarea } from '../../ui'

/**
 * EDİTÖR ALAN BİLEŞENLERİ
 * ==================================================================
 *
 * Öğretmen hiçbir yerde JSON görmez (§41). Blok tipini seçtiğinde
 * karşısına o tipe ait alanlar çıkar; alan listesi tek kaynaktan gelir
 * (`BLOCK_FIELDS`, bkz. `src/lib/lesson/schema.js`).
 *
 * Liste ve adım gibi çok değerli alanlar için ayrı, küçük düzenleyiciler
 * var. Bunları "sen JSON yaz" diye bir metin kutusuna indirgemek kısa
 * yoldu ama öğretmenin bu editoru kullanmasını imkânsız kılardı.
 */

export default function BlockField({ field, value, onChange }) {
  const shared = { value, onChange }

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-xs font-semibold text-ink/60">{field.label}</label>
      </div>

      <div className="mt-1.5">
        {field.kind === 'textarea' && (
          <Textarea rows={field.rows ?? 4} value={value ?? ''} onChange={(event) => onChange(event.target.value)} className="text-sm" />
        )}

        {field.kind === 'text' && (
          <Input value={value ?? ''} onChange={(event) => onChange(event.target.value)} className="py-2 text-sm" />
        )}

        {field.kind === 'select' && (
          <Select value={value ?? field.options[0]?.value} onChange={(event) => onChange(event.target.value)} className="py-2 text-sm">
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        )}

        {field.kind === 'figure' && <FigureSelect {...shared} />}
        {field.kind === 'list' && <ListField {...shared} />}
        {field.kind === 'steps' && <StepsField {...shared} />}
        {field.kind === 'variables' && <VariablesField {...shared} />}
        {field.kind === 'tableRows' && <TableRowsField {...shared} />}
        {field.kind === 'compareRows' && <CompareRowsField {...shared} />}
        {field.kind === 'conceptNodes' && <ConceptNodesField {...shared} />}
        {field.kind === 'conceptLinks' && <ConceptLinksField {...shared} />}
        {field.kind === 'historicalFigures' && <HistoricalFiguresField {...shared} />}
      </div>

      {field.hint && <p className="mt-1 text-2xs leading-relaxed text-ink/45">{field.hint}</p>}
    </div>
  )
}

/* ------------------------------------------------------------------ */

function RowActions({ onRemove, label = 'Satırı sil' }) {
  return (
    <button
      type="button"
      onClick={onRemove}
      aria-label={label}
      className="focus-ring mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg text-ink/35 hover:bg-danger-50 hover:text-danger-600"
    >
      <Trash2 className="h-3.5 w-3.5" />
    </button>
  )
}

function AddButton({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus-ring mt-2 inline-flex items-center gap-1.5 rounded-lg border border-dashed border-line-strong px-2.5 py-1.5 text-xs font-semibold text-ink/55 hover:border-brand-400 hover:text-brand-700"
    >
      <Plus className="h-3.5 w-3.5" />
      {children}
    </button>
  )
}

/* ------------------------------------------------------------------ */

function FigureSelect({ value, onChange }) {
  const options = figureOptions()
  return (
    <>
      <Select value={value ?? ''} onChange={(event) => onChange(event.target.value)} className="py-2 text-sm">
        <option value="">— şema seçin —</option>
        {options.map((option) => (
          <option key={option.kind} value={option.kind}>
            {option.label}
          </option>
        ))}
      </Select>
      <p className="mt-1 text-2xs leading-relaxed text-ink/45">
        Aradığınız şema listede yoksa yazılım tarafında bir kez çizilmesi gerekir; o zaman bütün derslerde kullanılabilir olur.
      </p>
    </>
  )
}

function ListField({ value, onChange }) {
  const items = Array.isArray(value) ? value : []
  const update = (index, next) => onChange(items.map((item, current) => (current === index ? next : item)))

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="mt-1.5 flex gap-2 first:mt-0">
          <Input value={item} onChange={(event) => update(index, event.target.value)} className="py-2 text-sm" />
          <RowActions onRemove={() => onChange(items.filter((_, current) => current !== index))} />
        </div>
      ))}
      <AddButton onClick={() => onChange([...items, ''])}>Madde ekle</AddButton>
    </div>
  )
}

function StepsField({ value, onChange }) {
  const steps = Array.isArray(value) ? value : []
  const update = (index, patch) => onChange(steps.map((step, current) => (current === index ? { ...step, ...patch } : step)))

  return (
    <div className="flex flex-col gap-2">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-2 rounded-lg border border-line bg-surface p-2">
          <span className="mt-2 w-4 shrink-0 text-center font-mono text-xs font-bold text-ink/35">{index + 1}</span>
          <div className="min-w-0 flex-1">
            <Input
              value={step.title ?? ''}
              placeholder="Adım başlığı"
              onChange={(event) => update(index, { title: event.target.value })}
              className="py-1.5 text-sm"
            />
            <Textarea
              rows={2}
              value={step.body ?? ''}
              placeholder="Açıklama"
              onChange={(event) => update(index, { body: event.target.value })}
              className="mt-1.5 text-sm"
            />
          </div>
          <RowActions onRemove={() => onChange(steps.filter((_, current) => current !== index))} label="Adımı sil" />
        </div>
      ))}
      <AddButton onClick={() => onChange([...steps, { title: '', body: '' }])}>Adım ekle</AddButton>
    </div>
  )
}

function VariablesField({ value, onChange }) {
  const items = Array.isArray(value) ? value : []
  const update = (index, patch) => onChange(items.map((item, current) => (current === index ? { ...item, ...patch } : item)))

  return (
    <div className="flex flex-col gap-1.5">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <Input
            value={item.sym ?? ''}
            placeholder="Sembol"
            onChange={(event) => update(index, { sym: event.target.value })}
            className="w-24 shrink-0 py-2 font-mono text-sm"
          />
          <Input
            value={item.desc ?? ''}
            placeholder="Ne anlama geliyor?"
            onChange={(event) => update(index, { desc: event.target.value })}
            className="py-2 text-sm"
          />
          <RowActions onRemove={() => onChange(items.filter((_, current) => current !== index))} />
        </div>
      ))}
      <AddButton onClick={() => onChange([...items, { sym: '', desc: '' }])}>Değişken ekle</AddButton>
    </div>
  )
}

function TableRowsField({ value, onChange }) {
  const rows = Array.isArray(value) ? value : []
  const width = Math.max(2, ...rows.map((row) => (Array.isArray(row) ? row.length : 0)))

  const update = (rowIndex, cellIndex, next) =>
    onChange(rows.map((row, current) => (current === rowIndex ? row.map((cell, index) => (index === cellIndex ? next : cell)) : row)))

  return (
    <div className="flex flex-col gap-1.5">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1.5">
          {row.map((cell, cellIndex) => (
            <Input
              key={cellIndex}
              value={cell}
              onChange={(event) => update(rowIndex, cellIndex, event.target.value)}
              className="py-2 text-sm"
            />
          ))}
          <RowActions onRemove={() => onChange(rows.filter((_, current) => current !== rowIndex))} />
        </div>
      ))}
      <AddButton onClick={() => onChange([...rows, Array.from({ length: width }, () => '')])}>Satır ekle</AddButton>
    </div>
  )
}

function CompareRowsField({ value, onChange }) {
  const rows = Array.isArray(value) ? value : []
  const width = Math.max(2, ...rows.map((row) => row.values?.length ?? 0))

  const update = (index, patch) => onChange(rows.map((row, current) => (current === index ? { ...row, ...patch } : row)))

  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, index) => (
        <div key={index} className="flex gap-2 rounded-lg border border-line bg-surface p-2">
          <div className="min-w-0 flex-1">
            <Input
              value={row.label ?? ''}
              placeholder="Ayrım ekseni (örn. Geçirgenlik)"
              onChange={(event) => update(index, { label: event.target.value })}
              className="py-1.5 text-sm font-semibold"
            />
            <div className="mt-1.5 flex flex-col gap-1.5 sm:flex-row">
              {Array.from({ length: width }, (_, valueIndex) => (
                <Textarea
                  key={valueIndex}
                  rows={2}
                  value={row.values?.[valueIndex] ?? ''}
                  placeholder={`${valueIndex + 1}. sütun`}
                  onChange={(event) => {
                    const values = Array.from({ length: width }, (_, i) => row.values?.[i] ?? '')
                    values[valueIndex] = event.target.value
                    update(index, { values })
                  }}
                  className="text-sm"
                />
              ))}
            </div>
          </div>
          <RowActions onRemove={() => onChange(rows.filter((_, current) => current !== index))} />
        </div>
      ))}
      <AddButton onClick={() => onChange([...rows, { label: '', values: Array.from({ length: width }, () => '') }])}>
        Ayrım ekseni ekle
      </AddButton>
    </div>
  )
}

function ConceptNodesField({ value, onChange }) {
  const nodes = Array.isArray(value) ? value : []
  const update = (index, patch) => onChange(nodes.map((node, current) => (current === index ? { ...node, ...patch } : node)))

  return (
    <div className="flex flex-col gap-2">
      {nodes.map((node, index) => (
        <div key={index} className="flex gap-2 rounded-lg border border-line bg-surface p-2">
          <div className="min-w-0 flex-1 space-y-1.5">
            <Input value={node.id ?? ''} placeholder="Kısa kimlik (örn. atp)" onChange={(event) => update(index, { id: event.target.value })} className="py-1.5 text-sm" />
            <Input value={node.label ?? ''} placeholder="Kavram adı" onChange={(event) => update(index, { label: event.target.value })} className="py-1.5 text-sm font-semibold" />
            <Textarea rows={2} value={node.detail ?? ''} placeholder="Kısa açıklama" onChange={(event) => update(index, { detail: event.target.value })} className="text-sm" />
          </div>
          <RowActions onRemove={() => onChange(nodes.filter((_, current) => current !== index))} label="Kavramı sil" />
        </div>
      ))}
      <AddButton onClick={() => onChange([...nodes, { id: '', label: '', detail: '' }])}>Kavram ekle</AddButton>
    </div>
  )
}

function ConceptLinksField({ value, onChange }) {
  const links = Array.isArray(value) ? value : []
  const update = (index, patch) => onChange(links.map((link, current) => (current === index ? { ...link, ...patch } : link)))

  return (
    <div className="flex flex-col gap-2">
      {links.map((link, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input value={link.from ?? ''} placeholder="Başlangıç kimliği" onChange={(event) => update(index, { from: event.target.value })} className="min-w-0 py-2 text-sm" />
          <Input value={link.label ?? ''} placeholder="İlişki" onChange={(event) => update(index, { label: event.target.value })} className="min-w-0 py-2 text-sm" />
          <Input value={link.to ?? ''} placeholder="Bitiş kimliği" onChange={(event) => update(index, { to: event.target.value })} className="min-w-0 py-2 text-sm" />
          <RowActions onRemove={() => onChange(links.filter((_, current) => current !== index))} label="İlişkiyi sil" />
        </div>
      ))}
      <AddButton onClick={() => onChange([...links, { from: '', label: '', to: '' }])}>İlişki ekle</AddButton>
    </div>
  )
}

function HistoricalFiguresField({ value, onChange }) {
  const figures = Array.isArray(value) ? value : []
  const update = (index, patch) => onChange(figures.map((figure, current) => (current === index ? { ...figure, ...patch } : figure)))

  return (
    <div className="flex flex-col gap-2">
      {figures.map((figure, index) => (
        <div key={index} className="flex gap-2 rounded-lg border border-line bg-surface p-2">
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className="grid gap-1.5 sm:grid-cols-2">
              <Input value={figure.name ?? ''} placeholder="Adı" onChange={(event) => update(index, { name: event.target.value })} className="py-1.5 text-sm font-semibold" />
              <Input value={figure.period ?? ''} placeholder="Dönem / saltanat" onChange={(event) => update(index, { period: event.target.value })} className="py-1.5 text-sm" />
            </div>
            <Input value={figure.position ?? ''} placeholder="Görevi / konumu" onChange={(event) => update(index, { position: event.target.value })} className="py-1.5 text-sm" />
            <Textarea rows={3} value={figure.contribution ?? ''} placeholder="Olay içindeki rolü" onChange={(event) => update(index, { contribution: event.target.value })} className="text-sm" />
            <Textarea rows={3} value={(figure.connections ?? []).join('\n')} placeholder="Her satıra bir olay bağlantısı" onChange={(event) => update(index, { connections: event.target.value.split('\n') })} className="text-sm" />
            <Textarea rows={2} value={figure.significance ?? ''} placeholder="Tarihsel önemi" onChange={(event) => update(index, { significance: event.target.value })} className="text-sm" />
          </div>
          <RowActions onRemove={() => onChange(figures.filter((_, current) => current !== index))} label="Şahsiyeti sil" />
        </div>
      ))}
      <AddButton onClick={() => onChange([...figures, { name: '', period: '', position: '', contribution: '', connections: [], significance: '' }])}>Şahsiyet ekle</AddButton>
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** Quiz seçenekleri + doğru cevap tek yerde; ikisi ayrı düşerse soru bozulur. */
export function QuizOptionsField({ block, onChange }) {
  const options = Array.isArray(block.options) && block.options.length ? block.options : ['', '', '', '']

  return (
    <div className="flex flex-col gap-1.5">
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onChange({ answer_index: index })}
            aria-label={`${String.fromCharCode(65 + index)} şıkkını doğru cevap yap`}
            className={`focus-ring grid h-7 w-7 shrink-0 place-items-center rounded-full border text-2xs font-bold transition-colors ${
              block.answer_index === index
                ? 'border-success-500 bg-success-500 text-white'
                : 'border-line-strong text-ink/45 hover:border-success-500'
            }`}
          >
            {String.fromCharCode(65 + index)}
          </button>
          <Input
            value={option}
            onChange={(event) => {
              const next = [...options]
              next[index] = event.target.value
              onChange({ options: next })
            }}
            className="py-2 text-sm"
          />
          {options.length > 2 && (
            <RowActions
              label="Seçeneği sil"
              onRemove={() => {
                const next = options.filter((_, current) => current !== index)
                onChange({ options: next, answer_index: Math.min(block.answer_index ?? 0, next.length - 1) })
              }}
            />
          )}
        </div>
      ))}
      {options.length < 6 && <AddButton onClick={() => onChange({ options: [...options, ''] })}>Seçenek ekle</AddButton>}
      <p className="mt-1 text-2xs text-ink/45">Doğru cevabı işaretlemek için soldaki harfe tıklayın.</p>
    </div>
  )
}
