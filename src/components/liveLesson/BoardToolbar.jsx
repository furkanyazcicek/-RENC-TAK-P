import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Circle,
  CloudOff,
  Eraser,
  FileUp,
  Hand,
  Highlighter,
  LassoSelect,
  Loader2,
  Maximize,
  Minus,
  MoreHorizontal,
  Pen,
  Plus,
  Redo2,
  Settings2,
  Square,
  Trash2,
  Type,
  Undo2,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { BOARD_COLORS, BOARD_TOOLS, BOARD_WIDTHS, HIGHLIGHT_COLORS } from '../../lib/liveLesson/board/model'

/**
 * TAHTA ARAÇ ÇUBUĞU — TEK SATIR, AYRINTILAR İSTENDİĞİNDE.
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN İKİNCİ SATIR KALDIRILDI
 * ═══════════════════════════════════════════════════════════════════
 * Renk, kalınlık, basınç ve "parmakla çiz" sürekli açık ikinci bir satır
 * oluşturuyordu. 1024 px genişlikte bu satır sarılıyor ve 80 piksele
 * çıkıyordu; araç çubuğunun toplam yüksekliği 142 piksele varıyor,
 * tahtaya kalan alanı yiyordu.
 *
 * Yeni kural: ÇUBUK HER ZAMAN TEK SATIRDIR. Seçili aracın ayrıntıları
 * yalnız istendiğinde, tahtanın ÜSTÜNDE YÜZEN bir panelde açılır. Panel
 * mutlak konumlandırılmıştır: açılıp kapanması tahtanın ölçüsünü
 * değiştirmez, yerleşimi zıplatmaz.
 *
 * ═══════════════════════════════════════════════════════════════════
 * PANEL AÇMANIN İKİ YOLU
 * ═══════════════════════════════════════════════════════════════════
 *   1. Seçili araca TEKRAR dokunmak
 *   2. Yanındaki sabit "ayarlar" düğmesine basmak
 * İkinci düğmenin yeri sabittir; araç değiştikçe çubuk yana kaymaz.
 *
 * Panel dışarı dokunma ve Escape ile kapanır; kapanınca odak onu açan
 * düğmeye döner. Kalem tahtaya değdiği anda da kapanır — açık bir panel
 * Apple Pencil'in yazdığı yerin üstünde unutulmaz.
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

const AYAR_BASLIKLARI = {
  [BOARD_TOOLS.PEN]: 'Kalem ayarları',
  [BOARD_TOOLS.HIGHLIGHT]: 'Fosforlu ayarları',
  [BOARD_TOOLS.ERASER]: 'Silgi ayarları',
  [BOARD_TOOLS.LASSO]: 'Seçim',
  [BOARD_TOOLS.TEXT]: 'Metin ayarları',
  [BOARD_TOOLS.LINE]: 'Şekil ayarları',
  [BOARD_TOOLS.RECT]: 'Şekil ayarları',
  [BOARD_TOOLS.ELLIPSE]: 'Şekil ayarları',
  [BOARD_TOOLS.ARROW]: 'Şekil ayarları',
}

function ToolButton({ active, label, Icon, onClick, disabled, badge, expanded, hasPanel, className, buttonRef }) {
  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-pressed={active}
      aria-haspopup={hasPanel ? 'dialog' : undefined}
      aria-expanded={hasPanel ? expanded : undefined}
      title={label}
      className={cn(
        'tahta-araclari__dugme focus-ring relative grid h-11 w-11 shrink-0 place-items-center rounded-btn transition-[transform,background-color,color,box-shadow] duration-150 active:scale-[0.96]',
        'disabled:cursor-not-allowed disabled:opacity-40',
        active
          ? 'bg-brand-600 text-white shadow-xs ring-1 ring-inset ring-brand-400/30'
          : 'text-ink/62 hover:bg-surface-muted hover:text-ink',
        className
      )}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
      {badge}
    </button>
  )
}

/** Seçili renk/kalınlık, panel KAPALIYKEN de görünür kalsın. */
function RenkIsareti({ color }) {
  return (
    <span
      aria-hidden="true"
      className="absolute bottom-1 right-1 h-2 w-2 rounded-full ring-1 ring-white/70"
      style={{ background: color }}
    />
  )
}

function Ayirici() {
  return <span className="mx-0.5 h-6 w-px shrink-0 bg-line" aria-hidden="true" />
}

/**
 * Bağlamsal ayrıntı paneli.
 *
 * MUTLAK KONUMLU: açılınca tahtanın yüksekliği değişmez. Açan düğmenin
 * altına hizalanır; dar ekranda kabın içinde kalması için sağdan/soldan
 * sınırlanır.
 */
function AyarPaneli({ id, baslik, anchorLeft, onClose, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    // Panel açılınca ilk denetime odaklan: klavye kullanıcısı doğrudan
    // ayarların içine girer.
    const ilk = el.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ilk?.focus?.({ preventScroll: true })
    return undefined
  }, [])

  return (
    <div
      ref={ref}
      id={id}
      role="dialog"
      aria-label={baslik}
      data-tahta-panel="acik"
      className="tahta-araclari__panel absolute top-full z-30 mt-1.5 flex max-w-[min(30rem,calc(100vw-1.5rem))] flex-wrap items-center gap-2 rounded-card border border-line p-2 shadow-elevated"
      style={{ left: Math.max(0, anchorLeft) }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          e.stopPropagation()
          onClose()
        }
      }}
    >
      {children}
    </div>
  )
}

function RenkSecici({ palette, color, onColor }) {
  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Renk">
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
            'focus-ring grid h-11 w-11 place-items-center rounded-btn transition-colors',
            color === c.value ? 'bg-brand-500/10 ring-1 ring-inset ring-brand-500/25' : 'hover:bg-ink/[0.05]'
          )}
        >
          <span
            className={cn('h-5 w-5 rounded-full border border-black/10', color === c.value && 'ring-2 ring-brand-500 ring-offset-2 ring-offset-surface')}
            style={{ background: c.value }}
          />
        </button>
      ))}
    </div>
  )
}

function KalinlikSecici({ widthKey, onWidth, label }) {
  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label={label}>
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
            'focus-ring grid h-11 w-11 place-items-center rounded-btn transition-colors',
            widthKey === w.key ? 'bg-brand-500/12 text-brand-700' : 'text-ink/55 hover:bg-ink/[0.05]'
          )}
        >
          <span className="rounded-full bg-current" style={{ width: 4 + i * 4, height: 4 + i * 4 }} aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}

function AcKapaDugme({ acik, onClick, children, label }) {
  return (
    <button
      type="button"
      aria-pressed={acik}
      aria-label={label}
      onClick={onClick}
      className={cn(
        'focus-ring min-h-11 rounded-btn px-3 text-xs font-semibold transition-colors',
        acik ? 'bg-brand-500/12 text-brand-700' : 'bg-ink/[0.04] text-ink/60 hover:bg-ink/[0.07]'
      )}
    >
      {children}
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
  zoom = 1,
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
  pageIndex = 0,
  pageCount = 1,
  onPrevPage,
  onNextPage,
  onAddPage,
  saveState = 'saved',
  showSaveState = false,
  className,
}) {
  const [panel, setPanel] = useState(null) // 'ayar' | 'daha' | null
  const [anchor, setAnchor] = useState(0)
  const kapsayiciRef = useRef(null)
  const ayarDugmeRef = useRef(null)
  const dahaDugmeRef = useRef(null)
  const panelId = useId()

  const drawing = tool === BOARD_TOOLS.PEN || tool === BOARD_TOOLS.HIGHLIGHT
  const erasing = tool === BOARD_TOOLS.ERASER
  const shaping = SHAPES.some((s) => s.key === tool)
  const palette = tool === BOARD_TOOLS.HIGHLIGHT ? HIGHLIGHT_COLORS : BOARD_COLORS
  const ayarliArac = drawing || erasing || shaping || tool === BOARD_TOOLS.TEXT || tool === BOARD_TOOLS.LASSO
  const renkliArac = drawing || shaping || tool === BOARD_TOOLS.TEXT

  const kapat = useCallback(
    (odakGeri = true) => {
      setPanel((acik) => {
        if (!acik) return null
        if (odakGeri) {
          const hedef = acik === 'ayar' ? ayarDugmeRef.current : dahaDugmeRef.current
          hedef?.focus?.({ preventScroll: true })
        }
        return null
      })
    },
    []
  )

  /**
   * DIŞARI DOKUNMA VE ESCAPE PANELİ KAPATIR.
   *
   * `pointerdown` dinleniyor, `click` değil: kalem tahtaya değdiği anda
   * panel kapanmalı. Olay ENGELLENMEZ — kapanma yüzünden kullanıcının
   * ilk kalem darbesi kaybolmaz, çizgi normal başlar.
   */
  useEffect(() => {
    if (!panel) return undefined
    const disari = (e) => {
      if (kapsayiciRef.current?.contains(e.target)) return
      kapat(false)
    }
    const kacis = (e) => {
      if (e.key === 'Escape') kapat(true)
    }
    window.addEventListener('pointerdown', disari, true)
    window.addEventListener('keydown', kacis)
    return () => {
      window.removeEventListener('pointerdown', disari, true)
      window.removeEventListener('keydown', kacis)
    }
  }, [panel, kapat])

  /* Araç değişince açık panel o araca ait değildir; kapat. */
  useEffect(() => {
    setPanel(null)
  }, [tool])

  function panelAc(tur, dugme) {
    const kap = kapsayiciRef.current?.getBoundingClientRect()
    const kutu = dugme?.getBoundingClientRect()
    if (kap && kutu) setAnchor(Math.min(kutu.left - kap.left, Math.max(0, kap.width - 320)))
    setPanel((acik) => (acik === tur ? null : tur))
  }

  function aracaDokun(key) {
    if (key === tool && ayarliArac) {
      panelAc('ayar', ayarDugmeRef.current)
      return
    }
    onTool(key)
  }

  const saveLabel =
    saveState === 'saving'
      ? { text: 'Kaydediliyor…', Icon: Loader2, tone: 'text-ink/50', spin: true }
      : saveState === 'error'
        ? { text: 'Kaydedilemedi', Icon: CloudOff, tone: 'text-danger-600' }
        : saveState === 'dirty'
          ? { text: 'Değişiklik var', Icon: Loader2, tone: 'text-ink/45' }
          : { text: 'Kaydedildi', Icon: Check, tone: 'text-ink/45' }

  const girisIpucu = fingerDraw
    ? 'Tek parmak çizer · iki parmak kaydırır ve yakınlaştırır'
    : 'Kalem çizer · tek parmak sayfayı kaydırır · iki parmak yakınlaştırır'

  return (
    <div ref={kapsayiciRef} className={cn('tahta-araclari relative flex-shrink-0', className)}>
      <div
        className="tahta-araclari__ana hide-scrollbar flex items-center gap-1 overflow-x-auto rounded-card border border-line px-1.5 py-1.5 shadow-card"
        role="toolbar"
        aria-label="Tahta araçları"
      >
        {!readOnly && (
          <>
            {/* Ana not alma araçları yatay kaydırmada bile sabit kalır.
                iPad'de şekil/zoom ararken kalemin ekrandan kaybolması akışı kesiyordu. */}
            <div className="sticky left-0 z-10 flex shrink-0 items-center gap-1 rounded-btn bg-surface/95 pr-1 backdrop-blur-xl">
              {TOOLS.map((t) => (
                <ToolButton
                  key={t.key}
                  active={tool === t.key}
                  label={tool === t.key && ayarliArac ? `${t.label} — ayarlarını aç` : t.label}
                  Icon={t.Icon}
                  onClick={() => aracaDokun(t.key)}
                  hasPanel={tool === t.key && ayarliArac}
                  expanded={tool === t.key && panel === 'ayar'}
                  badge={
                    tool === t.key && renkliArac ? <RenkIsareti color={color} /> : null
                  }
                />
              ))}

              {/* Ayarlar düğmesinin YERİ SABİT: araç değiştikçe çubuk kaymaz. */}
              <ToolButton
                buttonRef={ayarDugmeRef}
                label={AYAR_BASLIKLARI[tool] ?? 'Araç ayarları'}
                Icon={Settings2}
                disabled={!ayarliArac}
                hasPanel
                expanded={panel === 'ayar'}
                onClick={() => panelAc('ayar', ayarDugmeRef.current)}
                className={cn(panel === 'ayar' && 'bg-ink/[0.07] text-ink')}
              />
            </div>

            <Ayirici />

            <ToolButton label="Geri al" Icon={Undo2} onClick={onUndo} disabled={!canUndo} />
            <ToolButton label="İleri al" Icon={Redo2} onClick={onRedo} disabled={!canRedo} />
          </>
        )}

        <Ayirici />

        {/* Sayfa gezinmesi ARTIK ANA ÇUBUKTA: altta ayrı bir şerit yok. */}
        <div className="flex shrink-0 items-center gap-0.5">
          <ToolButton label="Önceki sayfa" Icon={ChevronLeft} onClick={onPrevPage} disabled={pageIndex === 0} />
          <span className="min-w-[3.25rem] text-center text-xs font-semibold tabular-nums text-ink/65">
            {pageIndex + 1}/{pageCount}
          </span>
          <ToolButton
            label="Sonraki sayfa"
            Icon={ChevronRight}
            onClick={onNextPage}
            disabled={pageIndex >= pageCount - 1}
          />
          {!readOnly && <ToolButton label="Akışın sonuna yeni sayfa ekle" Icon={Plus} onClick={onAddPage} />}
        </div>

        <Ayirici />

        <button
          type="button"
          ref={dahaDugmeRef}
          onClick={() => panelAc('daha', dahaDugmeRef.current)}
          aria-haspopup="dialog"
          aria-expanded={panel === 'daha'}
          aria-label="Şekil, belge ve görünüm araçları"
          title="Şekil, belge ve görünüm araçları"
          className={cn(
            'tahta-araclari__dugme focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-btn transition-colors',
            panel === 'daha' ? 'bg-ink/[0.07] text-ink' : 'text-ink/62 hover:bg-surface-muted hover:text-ink'
          )}
        >
          <MoreHorizontal className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
        </button>

        {/* Sağ uç: yakınlaştırma oranı ve kayıt durumu — okunur, tıklanmaz.
            `sticky`: çubuk dar ekranda yatay kaydığında bu bilgi ekranın
            dışına taşmasın. */}
        <span className="sticky right-0 ml-auto flex shrink-0 items-center gap-2 bg-surface pl-3 pr-1 text-2xs">
          {showSaveState && (
            <span className={cn('hidden items-center gap-1 lg:inline-flex', saveLabel.tone)}>
              <saveLabel.Icon className={cn('h-3.5 w-3.5', saveLabel.spin && 'animate-spin')} aria-hidden="true" />
              {saveLabel.text}
            </span>
          )}
          <span className="tabular-nums text-ink/40">%{Math.round(zoom * 100)}</span>
        </span>
      </div>

      {panel === 'ayar' && ayarliArac && (
        <AyarPaneli
          id={`${panelId}-ayar`}
          baslik={AYAR_BASLIKLARI[tool] ?? 'Araç ayarları'}
          anchorLeft={anchor}
          onClose={() => kapat(true)}
        >
          {renkliArac && <RenkSecici palette={palette} color={color} onColor={onColor} />}
          {renkliArac && (drawing || shaping || tool === BOARD_TOOLS.TEXT) && (
            <span className="h-7 w-px bg-line" aria-hidden="true" />
          )}

          {(drawing || erasing || shaping || tool === BOARD_TOOLS.TEXT) && (
            <KalinlikSecici widthKey={widthKey} onWidth={onWidth} label={erasing ? 'Silgi boyutu' : 'Kalınlık'} />
          )}

          {erasing && (
            <>
              <span className="h-7 w-px bg-line" aria-hidden="true" />
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
                      'focus-ring min-h-11 rounded-[10px] px-3 text-xs font-semibold transition-colors',
                      eraserMode === option.value ? 'bg-surface text-ink shadow-xs' : 'text-ink/55 hover:text-ink'
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {shaping && (
            <>
              <span className="h-7 w-px bg-line" aria-hidden="true" />
              <div className="flex items-center gap-1" role="radiogroup" aria-label="Şekil türü">
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
            </>
          )}

          {tool === BOARD_TOOLS.PEN && (
            <AcKapaDugme
              acik={pressureEnabled}
              label={`Basınca duyarlı kalem ${pressureEnabled ? 'açık' : 'kapalı'}`}
              onClick={() => onPressureEnabled?.(!pressureEnabled)}
            >
              Basınç {pressureEnabled ? 'açık' : 'kapalı'}
            </AcKapaDugme>
          )}

          {(drawing || erasing) && (
            <AcKapaDugme
              acik={fingerDraw}
              label={`Parmakla çizme ${fingerDraw ? 'açık' : 'kapalı'}`}
              onClick={() => onFingerDraw?.(!fingerDraw)}
            >
              Parmakla çiz {fingerDraw ? 'açık' : 'kapalı'}
            </AcKapaDugme>
          )}

          {tool === BOARD_TOOLS.LASSO && (
            selectionCount > 0 ? (
              <div className="flex items-center gap-1.5">
                <span className="px-1 text-xs font-semibold text-ink/65">{selectionCount} nesne seçili</span>
                <button
                  type="button"
                  onClick={onDuplicateSelection}
                  className="focus-ring min-h-11 rounded-btn bg-ink/[0.04] px-3 text-xs font-semibold text-ink/70 hover:bg-ink/[0.07]"
                >
                  Kopyala
                </button>
                <button
                  type="button"
                  onClick={onDeleteSelection}
                  className="focus-ring min-h-11 rounded-btn px-3 text-xs font-semibold text-danger-600 hover:bg-danger-500/[0.08]"
                >
                  Sil
                </button>
              </div>
            ) : (
              <p className="px-1 text-xs text-ink/55">Taşımak istediğin alanı kalemle çevrele.</p>
            )
          )}

          {/* Giriş kuralı: kalem mi parmak mı çizer — tek cümle. */}
          {(drawing || erasing) && (
            <p className="w-full px-1 text-2xs leading-relaxed text-ink/50">{girisIpucu}</p>
          )}
        </AyarPaneli>
      )}

      {panel === 'daha' && (
        <AyarPaneli
          id={`${panelId}-daha`}
          baslik="Şekil, belge ve görünüm araçları"
          anchorLeft={anchor}
          onClose={() => kapat(true)}
        >
          {!readOnly && (
            <div className="flex items-center gap-1" role="radiogroup" aria-label="Şekil araçları">
              {SHAPES.map((s) => (
                <ToolButton
                  key={s.key}
                  active={tool === s.key}
                  label={s.label}
                  Icon={s.Icon}
                  onClick={() => {
                    onTool(s.key)
                    kapat(false)
                  }}
                />
              ))}
            </div>
          )}

          <span className="h-7 w-px bg-line" aria-hidden="true" />

          <ToolButton
            active={tool === BOARD_TOOLS.PAN}
            label="Kaydır"
            Icon={Hand}
            onClick={() => {
              onTool(BOARD_TOOLS.PAN)
              kapat(false)
            }}
          />
          <ToolButton label="Uzaklaştır" Icon={ZoomOut} onClick={onZoomOut} />
          <ToolButton label="Sayfa genişliğine sığdır" Icon={Maximize} onClick={onFit} />
          <ToolButton label="Yakınlaştır" Icon={ZoomIn} onClick={onZoomIn} />

          {onImportPdf && !readOnly && (
            <>
              <span className="h-7 w-px bg-line" aria-hidden="true" />
              <button
                type="button"
                onClick={() => {
                  onImportPdf()
                  kapat(false)
                }}
                disabled={importingPdf}
                className="focus-ring inline-flex min-h-11 shrink-0 items-center gap-2 rounded-btn bg-brand-500/10 px-3 text-xs font-semibold text-brand-700 ring-1 ring-inset ring-brand-500/15 transition-colors hover:bg-brand-500/15 disabled:cursor-wait disabled:opacity-60"
              >
                <FileUp className={cn('h-[18px] w-[18px]', importingPdf && 'animate-pulse')} strokeWidth={2} aria-hidden="true" />
                {importingPdf ? 'Açılıyor…' : 'PDF aç'}
              </button>
            </>
          )}

          {!readOnly && (
            <>
              <span className="h-7 w-px bg-line" aria-hidden="true" />
              <button
                type="button"
                onClick={() => {
                  kapat(false)
                  onClear?.()
                }}
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-btn px-3 text-xs font-semibold text-danger-600 transition-colors hover:bg-danger-500/[0.08]"
              >
                <Trash2 className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
                Sayfayı temizle
              </button>
            </>
          )}
        </AyarPaneli>
      )}
    </div>
  )
}
