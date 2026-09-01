import {
  ArrowUpRight,
  Circle,
  Eraser,
  FileUp,
  Hand,
  Highlighter,
  LassoSelect,
  Maximize,
  Minus,
  Pen,
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
  { key: BOARD_TOOLS.LASSO, label: 'Seç ve taşı', Icon: LassoSelect },
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
        'focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-btn transition-colors duration-150 active:scale-[0.96]',
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
  onImportPdf,
  importingPdf = false,
  eraserMode = 'partial',
  onEraserMode,
  pressureEnabled = true,
  onPressureEnabled,
  fingerDraw = false,
  onFingerDraw,
  selectionCount = 0,
  onDeleteSelection,
  onDuplicateSelection,
  readOnly = false,
  className,
}) {
  const drawing = tool === BOARD_TOOLS.PEN || tool === BOARD_TOOLS.HIGHLIGHT
  const erasing = tool === BOARD_TOOLS.ERASER
  const shaping = SHAPES.some((s) => s.key === tool)
  const palette = tool === BOARD_TOOLS.HIGHLIGHT ? HIGHLIGHT_COLORS : BOARD_COLORS
  const activeShape = SHAPES.find((s) => s.key === tool) ?? SHAPES[0]

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <div className="glass hide-scrollbar flex items-center gap-1 overflow-x-auto rounded-card border border-line px-1.5 py-1.5 shadow-card">
        {/* SIRALAMA BİLİNÇLİ: dar ekranda çubuk yatay kayıyor, bu yüzden
            en sık kullanılanlar (kalem, silgi, geri al) başa alındı.
            Şekil ve yakınlaştırma sonda; onlara ulaşmak için kaydırmak
            kabul edilebilir, "geri al"a ulaşamamak değil. */}
        {!readOnly && (
          <>
            {/* Ana not alma araçları yatay kaydırmada bile sabit kalır.
                iPad'de şekil/zoom ararken kalemin ekrandan kaybolması akışı kesiyordu. */}
            <div className="sticky left-0 z-10 flex shrink-0 items-center gap-1 bg-surface/95 pr-1 backdrop-blur-xl">
              {TOOLS.map((t) => (
                <ToolButton key={t.key} active={tool === t.key} label={t.label} Icon={t.Icon} onClick={() => onTool(t.key)} />
              ))}

              <span className="mx-0.5 h-6 w-px shrink-0 bg-line" aria-hidden="true" />

              {onImportPdf && (
                <button
                  type="button"
                  onClick={onImportPdf}
                  disabled={importingPdf}
                  className="focus-ring inline-flex h-11 shrink-0 items-center gap-2 rounded-btn bg-brand-600 px-3 text-xs font-semibold text-white shadow-xs transition-[transform,background-color] duration-150 active:scale-[0.98] disabled:cursor-wait disabled:opacity-60"
                >
                  <FileUp className={cn('h-[18px] w-[18px]', importingPdf && 'animate-pulse')} strokeWidth={2} aria-hidden="true" />
                  <span>{importingPdf ? 'Açılıyor…' : 'PDF aç'}</span>
                </button>
              )}

              <span className="mx-0.5 h-6 w-px shrink-0 bg-line" aria-hidden="true" />
            </div>

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
      {!readOnly && (drawing || erasing || shaping || tool === BOARD_TOOLS.TEXT || tool === BOARD_TOOLS.LASSO) && (
        <div className="glass flex min-h-11 flex-wrap items-center gap-2.5 rounded-card border border-line px-2.5 py-2 shadow-card">
          {(drawing || shaping || tool === BOARD_TOOLS.TEXT) && (
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
          )}

          {(drawing || shaping || tool === BOARD_TOOLS.TEXT) && <span className="h-5 w-px bg-line" aria-hidden="true" />}

          {(drawing || erasing || shaping || tool === BOARD_TOOLS.TEXT) && (
            <div className="flex items-center gap-1.5" role="radiogroup" aria-label={erasing ? 'Silgi boyutu' : 'Kalınlık'}>
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
          )}

          {erasing && (
            <>
              <span className="h-5 w-px bg-line" aria-hidden="true" />
              <div className="flex rounded-btn bg-ink/[0.045] p-0.5" role="radiogroup" aria-label="Silgi türü">
                {[
                  { value: 'partial', label: 'Parça sil' },
                  { value: 'stroke', label: 'Çizgiyi sil' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={eraserMode === option.value}
                    onClick={() => onEraserMode?.(option.value)}
                    className={cn(
                      'focus-ring min-h-9 rounded-[10px] px-3 text-xs font-semibold transition-colors',
                      eraserMode === option.value ? 'bg-surface text-ink shadow-xs' : 'text-ink/55 hover:text-ink'
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {tool === BOARD_TOOLS.PEN && (
            <button
              type="button"
              aria-pressed={pressureEnabled}
              onClick={() => onPressureEnabled?.(!pressureEnabled)}
              className={cn(
                'focus-ring min-h-9 rounded-btn px-3 text-xs font-semibold transition-colors',
                pressureEnabled ? 'bg-brand-500/12 text-brand-700' : 'bg-ink/[0.04] text-ink/55'
              )}
            >
              Basınç {pressureEnabled ? 'açık' : 'kapalı'}
            </button>
          )}

          {(drawing || erasing) && (
            <button
              type="button"
              aria-pressed={fingerDraw}
              onClick={() => onFingerDraw?.(!fingerDraw)}
              className={cn(
                'focus-ring min-h-9 rounded-btn px-3 text-xs font-semibold transition-colors',
                fingerDraw ? 'bg-brand-500/12 text-brand-700' : 'bg-ink/[0.04] text-ink/55'
              )}
            >
              Parmakla çiz {fingerDraw ? 'açık' : 'kapalı'}
            </button>
          )}

          {tool === BOARD_TOOLS.LASSO && selectionCount > 0 && (
            <div className="flex items-center gap-1.5">
              <span className="px-1 text-xs font-semibold text-ink/65">{selectionCount} nesne seçili</span>
              <button type="button" onClick={onDuplicateSelection} className="focus-ring min-h-9 rounded-btn bg-ink/[0.04] px-3 text-xs font-semibold text-ink/70 hover:bg-ink/[0.07]">
                Kopyala
              </button>
              <button type="button" onClick={onDeleteSelection} className="focus-ring min-h-9 rounded-btn px-3 text-xs font-semibold text-danger-600 hover:bg-danger-500/[0.08]">
                Sil
              </button>
            </div>
          )}

          <span className="ml-auto hidden text-2xs text-ink/45 sm:block">
            {tool === BOARD_TOOLS.LASSO
              ? selectionCount
                ? 'Seçimi sürükleyerek taşı'
                : 'Taşımak istediğin alanı çevrele'
              : erasing
                ? eraserMode === 'partial' ? 'Kalemin bir bölümünü siler' : 'Dokunduğun çizginin tamamını siler'
                : activeShape && shaping
                  ? `${activeShape.label} çizmek için sürükleyin`
                  : fingerDraw ? 'Kalem veya parmakla yaz' : 'Kalemle yaz, parmakla sayfayı kaydır'}
          </span>
        </div>
      )}
    </div>
  )
}
