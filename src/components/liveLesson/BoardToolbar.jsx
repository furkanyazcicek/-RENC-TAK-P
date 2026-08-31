import {
  ArrowUpRight,
  Circle,
  Eraser,
  Hand,
  Highlighter,
  Image as ImageIcon,
  Maximize,
  Minus,
  Pen,
  Plus,
  Redo2,
  Square,
  Trash2,
  Type,
  Undo2,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { IconButton } from '../ui'
import { BOARD_COLORS, BOARD_TOOLS, BOARD_WIDTHS, HIGHLIGHT_COLORS } from '../../lib/liveLesson/board/model'

/**
 * Tahta araç çubuğu.
 *
 * TASARIM KARARI
 * --------------
 * Tek satır, ince, cam yüzey. Araçlar tahtanın ÜSTÜNDE yüzer ama
 * tahtayı kapatmaz; renk şeridi yalnızca çizim aracı seçiliyken açılır.
 * Bütün olası ayarı sürekli açık tutmak tahtayı küçültürdü.
 *
 * Her düğme en az 40×40 px ve erişilebilir ada sahip. Seçili araç
 * yalnız renkle değil, dolu zemin + kalın çerçeveyle de belli olur.
 */

const TOOLS = [
  { key: BOARD_TOOLS.PEN, label: 'Kalem', Icon: Pen },
  { key: BOARD_TOOLS.HIGHLIGHT, label: 'Fosforlu', Icon: Highlighter },
  { key: BOARD_TOOLS.ERASER, label: 'Silgi', Icon: Eraser },
  { key: BOARD_TOOLS.TEXT, label: 'Metin', Icon: Type },
]

const SHAPES = [
  { key: BOARD_TOOLS.LINE, label: 'Çizgi', Icon: Minus },
  { key: BOARD_TOOLS.RECT, label: 'Dikdörtgen', Icon: Square },
  { key: BOARD_TOOLS.ELLIPSE, label: 'Elips', Icon: Circle },
  { key: BOARD_TOOLS.ARROW, label: 'Ok', Icon: ArrowUpRight },
]

function ToolButton({ active, label, Icon, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-pressed={active}
      title={label}
      className={cn(
        'focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-btn transition-colors duration-150',
        'disabled:cursor-not-allowed disabled:opacity-40',
        active
          ? 'bg-brand-600 text-white shadow-xs'
          : 'text-ink/70 hover:bg-ink/[0.06] hover:text-ink'
      )}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
    </button>
  )
}

export default function BoardToolbar({
  tool,
  onTool,
  color,
  onColor,
  widthKey,
  onWidth,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onClear,
  onZoomIn,
  onZoomOut,
  onFit,
  onAddImage,
  readOnly = false,
  className,
}) {
  const drawing = tool === BOARD_TOOLS.PEN || tool === BOARD_TOOLS.HIGHLIGHT
  const shaping = SHAPES.some((s) => s.key === tool)
  const palette = tool === BOARD_TOOLS.HIGHLIGHT ? HIGHLIGHT_COLORS : BOARD_COLORS
  const activeShape = SHAPES.find((s) => s.key === tool) ?? SHAPES[0]

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <div className="glass hide-scrollbar flex items-center gap-1 overflow-x-auto rounded-btn border border-line px-1.5 py-1.5 shadow-card">
        {/* SIRALAMA BİLİNÇLİ: dar ekranda çubuk yatay kayıyor, bu yüzden
            en sık kullanılanlar (kalem, silgi, geri al) başa alındı.
            Şekil ve yakınlaştırma sonda; onlara ulaşmak için kaydırmak
            kabul edilebilir, "geri al"a ulaşamamak değil. */}
        {!readOnly && (
          <>
            {TOOLS.map((t) => (
              <ToolButton key={t.key} active={tool === t.key} label={t.label} Icon={t.Icon} onClick={() => onTool(t.key)} />
            ))}

            <span className="mx-0.5 h-6 w-px shrink-0 bg-line" aria-hidden="true" />

            <ToolButton label="Geri al" Icon={Undo2} onClick={onUndo} disabled={!canUndo} />
            <ToolButton label="İleri al" Icon={Redo2} onClick={onRedo} disabled={!canRedo} />

            <span className="mx-0.5 h-6 w-px shrink-0 bg-line" aria-hidden="true" />

            <div className="flex items-center rounded-btn bg-ink/[0.03] p-0.5">
              {SHAPES.map((s) => (
                <ToolButton
                  key={s.key}
                  active={tool === s.key}
                  label={s.label}
                  Icon={s.Icon}
                  onClick={() => onTool(s.key)}
                />
              ))}
            </div>

            <span className="mx-0.5 h-6 w-px shrink-0 bg-line" aria-hidden="true" />
          </>
        )}

        <ToolButton active={tool === BOARD_TOOLS.PAN} label="Kaydır" Icon={Hand} onClick={() => onTool(BOARD_TOOLS.PAN)} />
        <ToolButton label="Uzaklaştır" Icon={ZoomOut} onClick={onZoomOut} />
        <ToolButton label="Ekrana sığdır" Icon={Maximize} onClick={onFit} />
        <ToolButton label="Yakınlaştır" Icon={ZoomIn} onClick={onZoomIn} />

        {!readOnly && (
          <>
            <span className="mx-0.5 h-6 w-px shrink-0 bg-line" aria-hidden="true" />
            {onAddImage && <ToolButton label="Görsel ekle" Icon={ImageIcon} onClick={onAddImage} />}
            <IconButton
              icon={Trash2}
              label="Sayfayı temizle"
              variant="ghost"
              size="md"
              onClick={onClear}
              className="text-danger-600 hover:bg-danger-500/[0.08]"
            />
          </>
        )}
      </div>

      {/* Renk ve kalınlık — yalnızca gerektiğinde */}
      {!readOnly && (drawing || shaping || tool === BOARD_TOOLS.TEXT) && (
        <div className="glass flex flex-wrap items-center gap-2.5 rounded-btn border border-line px-2.5 py-2 shadow-card">
          <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Kalem rengi">
            {palette.map((c) => (
              <button
                key={c.key}
                type="button"
                role="radio"
                aria-checked={color === c.value}
                aria-label={c.label}
                title={c.label}
                onClick={() => onColor(c.value)}
                className={cn(
                  'focus-ring grid h-8 w-8 place-items-center rounded-full transition-transform duration-150',
                  color === c.value ? 'ring-2 ring-brand-500 ring-offset-2 ring-offset-surface' : 'hover:scale-110'
                )}
              >
                <span className="h-5 w-5 rounded-full border border-black/10" style={{ background: c.value }} />
              </button>
            ))}
          </div>

          <span className="h-5 w-px bg-line" aria-hidden="true" />

          <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Kalınlık">
            {BOARD_WIDTHS.map((w, i) => (
              <button
                key={w.key}
                type="button"
                role="radio"
                aria-checked={widthKey === w.key}
                aria-label={w.label}
                title={w.label}
                onClick={() => onWidth(w.key)}
                className={cn(
                  'focus-ring grid h-8 w-8 place-items-center rounded-btn transition-colors',
                  widthKey === w.key ? 'bg-brand-500/12 text-brand-700' : 'text-ink/55 hover:bg-ink/[0.05]'
                )}
              >
                <span
                  className="rounded-full bg-current"
                  style={{ width: 4 + i * 4, height: 4 + i * 4 }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          <span className="ml-auto hidden text-2xs text-ink/45 sm:block">
            {activeShape && shaping ? `${activeShape.label} çizmek için sürükleyin` : 'Yazmak için tahtaya dokunun'}
          </span>
        </div>
      )}
    </div>
  )
}
