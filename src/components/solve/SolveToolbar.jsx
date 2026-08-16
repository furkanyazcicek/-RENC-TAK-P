import { Eraser, Hand, Highlighter, Maximize, PenLine, Redo2, Trash2, Undo2, ZoomIn, ZoomOut } from 'lucide-react'
import { cn } from '../../lib/cn'
import { HIGHLIGHT_COLORS, PEN_COLORS, WIDTHS } from '../../lib/solutionCanvas'

/**
 * SolveToolbar — çizim tahtasının araç çubuğu.
 *
 * Koyu zemin üstünde durur: tahta beyaz, çubuk koyu. Tablet yatayda tek
 * satıra sığar, dar ekranda yatay kayar (sarmalayıp yüksekliği yemez —
 * çizim alanı her pikseli hak ediyor).
 *
 * Dokunma hedefleri en az 40px: öğretmen bunu kalemle değil parmağıyla,
 * çoğu zaman elinde kalemle dengede dururken kullanacak.
 */

const TOOLS = [
  { key: 'pen', label: 'Kalem', icon: PenLine },
  { key: 'hl', label: 'Fosforlu', icon: Highlighter },
  { key: 'eraser', label: 'Silgi', icon: Eraser },
]

export default function SolveToolbar({
  tool,
  onTool,
  penColor,
  highlightColor,
  onColor,
  widthKey,
  onWidth,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onClear,
  zoom,
  onZoomIn,
  onZoomOut,
  onFit,
  fingerDraws,
  onToggleFinger,
}) {
  const palette = tool === 'hl' ? HIGHLIGHT_COLORS : PEN_COLORS
  const activeColor = tool === 'hl' ? highlightColor : penColor
  const colorsDisabled = tool === 'eraser'

  return (
    <div
      className="flex shrink-0 items-center gap-1 overflow-x-auto overscroll-x-contain border-b border-white/10
                 bg-ink/95 px-2 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-1.5 sm:px-3"
      role="toolbar"
      aria-label="Çizim araçları"
    >
      {/* --- Araçlar --- */}
      {TOOLS.map((t) => (
        <ToolButton
          key={t.key}
          icon={t.icon}
          label={t.label}
          active={tool === t.key}
          onClick={() => onTool(t.key)}
        />
      ))}

      <Divider />

      {/* --- Kalınlık --- */}
      {WIDTHS.map((w) => (
        <button
          key={w.key}
          type="button"
          onClick={() => onWidth(w.key)}
          title={w.label}
          aria-label={`${w.label} uç`}
          aria-pressed={widthKey === w.key}
          className={cn(
            'focus-ring grid h-10 w-9 shrink-0 place-items-center rounded-lg transition-colors',
            widthKey === w.key ? 'bg-white/20' : 'hover:bg-white/10'
          )}
        >
          <span
            className="rounded-full bg-white"
            style={{ width: 20, height: Math.max(2, w.pen) }}
          />
        </button>
      ))}

      <Divider />

      {/* --- Renkler --- */}
      <div className={cn('flex shrink-0 items-center gap-1', colorsDisabled && 'pointer-events-none opacity-30')}>
        {palette.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => onColor(c.value)}
            title={c.label}
            aria-label={`${c.label} renk`}
            aria-pressed={activeColor === c.value}
            className={cn(
              'focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors',
              activeColor === c.value ? 'bg-white/20' : 'hover:bg-white/10'
            )}
          >
            <span
              className={cn(
                'h-5 w-5 rounded-full border-2 transition-transform',
                activeColor === c.value ? 'scale-110 border-white' : 'border-white/35'
              )}
              style={{ background: c.value }}
            />
          </button>
        ))}
      </div>

      <Divider />

      {/* --- Geçmiş --- */}
      <ToolButton icon={Undo2} label="Geri al" onClick={onUndo} disabled={!canUndo} />
      <ToolButton icon={Redo2} label="İleri al" onClick={onRedo} disabled={!canRedo} />
      <ToolButton icon={Trash2} label="Tüm çizimleri temizle" onClick={onClear} disabled={!canUndo && !canRedo} danger />

      <Divider />

      {/* --- Görünüm --- */}
      <ToolButton icon={ZoomOut} label="Uzaklaştır" onClick={onZoomOut} />
      <span className="w-12 shrink-0 select-none text-center text-2xs font-bold tabular text-white/70">
        %{Math.round(zoom * 100)}
      </span>
      <ToolButton icon={ZoomIn} label="Yakınlaştır" onClick={onZoomIn} />
      <ToolButton icon={Maximize} label="Ekrana sığdır" onClick={onFit} />

      <Divider />

      {/* --- Parmak davranışı ---
          Varsayılan: parmak gezdirir, kalem çizer. Stylus'u olmayan
          öğretmen tabletiyle mahsur kalmasın diye tek dokunuşla
          değiştirilebiliyor. */}
      <button
        type="button"
        onClick={onToggleFinger}
        aria-pressed={fingerDraws}
        title={fingerDraws ? 'Parmak çiziyor — gezmeye al' : 'Parmak gezdiriyor — çizmeye al'}
        className={cn(
          'focus-ring flex h-10 shrink-0 items-center gap-1.5 rounded-lg px-2.5 text-2xs font-bold transition-colors',
          fingerDraws ? 'bg-brand-500 text-white' : 'text-white/70 hover:bg-white/10'
        )}
      >
        <Hand className="h-4 w-4" aria-hidden="true" />
        <span className="hidden whitespace-nowrap sm:inline">
          {fingerDraws ? 'Parmak: çizer' : 'Parmak: gezer'}
        </span>
      </button>
    </div>
  )
}

function ToolButton({ icon: Icon, label, active, disabled, danger, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      aria-pressed={active}
      className={cn(
        'focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors',
        active ? 'bg-white text-ink' : 'text-white/80 hover:bg-white/10 hover:text-white',
        danger && !active && 'hover:bg-danger-500/25 hover:text-white',
        'disabled:opacity-30 disabled:hover:bg-transparent'
      )}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden="true" />
    </button>
  )
}

function Divider() {
  return <span className="mx-0.5 h-6 w-px shrink-0 bg-white/15" aria-hidden="true" />
}
