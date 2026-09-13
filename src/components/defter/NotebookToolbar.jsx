import { Link } from 'react-router-dom'
import {
  ArrowLeft, Check, Circle, Eraser, Files, Hand, Highlighter, Mic, Minus, MoreVertical, MousePointer2,
  MoveUpRight, PenLine, Plus, Pointer, Redo2, Share, Shapes, Square, Type, Undo2,
} from 'lucide-react'
import { COLORS } from '../../lib/defter/model'
import { ActionMenu } from './NotebookDialogs'

export const SHAPE_TOOLS = [['line', 'Çizgi', Minus], ['arrow', 'Ok', MoveUpRight], ['rect', 'Dikdörtgen', Square], ['ellipse', 'Elips', Circle]]
const SHAPE_IDS = new Set(SHAPE_TOOLS.map(([id]) => id))
const TOOLS = [
  ['pen', 'Kalem', PenLine], ['hl', 'Fosforlu kalem', Highlighter], ['eraser', 'Silgi', Eraser],
  ['text', 'Metin', Type], ['select', 'Seç ve taşı', MousePointer2], ['shape', 'Şekil', Shapes], ['pan', 'Kaydır', Hand],
]
const WIDTHS = [[2, 'İnce'], [3, 'Orta'], [5, 'Kalın']]
const TOOL_HINTS = {
  eraser: 'Dokunduğun çizginin tamamı silinir. Geri al ile geri gelir.',
  text: 'Yazmak istediğin yere dokun.',
  select: 'Bir öğeye dokun, sürükleyerek taşı.',
  pan: 'Sürükleyerek sayfalar arasında gezin.',
}

/**
 * Yüzen araç çubuğu: solda geri, ortada araçlar, sağda geri al/paylaş/sayfalar.
 * Kalem, fosforlu ve şekil seçiliyken ikinci satırda renk ve kalınlık açılır.
 * Telefonda araç satırı yatay kayar; hiçbir düğme 44 px'ten küçük değildir.
 */
export default function NotebookToolbar({
  backTo, onBack, tool, onTool, onShape, color, onColor, width, onWidth, finger, onFinger,
  onInsert, audio, canUndo, canRedo, onUndo, onRedo, shareItems, onPages, onSettings,
}) {
  const isShape = SHAPE_IDS.has(tool)
  const inkRow = tool === 'pen' || tool === 'hl' || isShape
  return <div className="defter-bar">
    <Link to={backTo} onClick={onBack} className="defter-bar-back" aria-label="Notlarıma dön" title="Notlarıma dön"><ArrowLeft size={22} aria-hidden="true"/></Link>

    <div className="defter-bar-tools" role="toolbar" aria-label="Yazı ve çizim araçları">
      <div className="defter-bar-row defter-bar-scroll">
        {TOOLS.map(([id, label, Icon]) => {
          const pressed = id === 'shape' ? isShape : tool === id
          return <button key={id} type="button" className="defter-tool" aria-pressed={pressed} aria-label={label} title={label} onClick={() => onTool(id)}>
            <Icon size={22} aria-hidden="true"/>
          </button>
        })}
        <span className="defter-bar-sep" aria-hidden="true"/>
        <button type="button" className="defter-tool" aria-label="Ekle: PDF, fotoğraf, şekil, kütüphane" title="Ekle" onClick={onInsert}><Plus size={22} aria-hidden="true"/></button>
        <button type="button" className="defter-tool" aria-pressed={audio.open} aria-label={audio.label} title={audio.label} onClick={audio.onToggle}>
          <Mic size={22} aria-hidden="true"/>{audio.badge && <span className="defter-tool-badge">{audio.badge}</span>}
        </button>
        <button type="button" className="defter-tool" aria-pressed={finger} aria-label="Parmakla çiz" title={finger ? 'Parmakla çizim açık' : 'Parmakla çizim kapalı: parmak sayfayı kaydırır'} onClick={() => onFinger(!finger)}>
          <Pointer size={22} aria-hidden="true"/>
        </button>
      </div>
      {/* İkinci satır her araçta durur: araç değişince üst alanın yüksekliği, dolayısıyla yazılan sayfa zıplamaz. */}
      {!inkRow && <div className="defter-bar-row defter-bar-ink"><p className="defter-bar-hint">{TOOL_HINTS[tool] ?? ''}</p></div>}
      {inkRow && <div className="defter-bar-row defter-bar-ink defter-bar-scroll">
        {isShape && <>
          {SHAPE_TOOLS.map(([id, label, Icon]) => <button key={id} type="button" className="defter-tool defter-tool-small" aria-pressed={tool === id} aria-label={label} title={label} onClick={() => onShape(id)}>
            <Icon size={18} aria-hidden="true"/>
          </button>)}
          <span className="defter-bar-sep" aria-hidden="true"/>
        </>}
        <div className="defter-bar-group" role="group" aria-label="Mürekkep rengi">
          {COLORS.map(c => <button key={c.value} type="button" className="defter-swatch" aria-pressed={color === c.value} aria-label={`${c.name} mürekkep`} title={c.name} onClick={() => onColor(c.value)}>
            <span style={{ background: c.value }}>{color === c.value && <Check size={14} strokeWidth={3} className={c.name === 'Sarı' ? 'defter-swatch-dark' : ''} aria-hidden="true"/>}</span>
          </button>)}
        </div>
        <span className="defter-bar-sep" aria-hidden="true"/>
        <div className="defter-bar-group" role="group" aria-label="Kalınlık">
          {WIDTHS.map(([value, label]) => <button key={value} type="button" className="defter-width-dot" aria-pressed={width === value} aria-label={`${label} çizgi`} title={label} onClick={() => onWidth(value)}>
            <span style={{ width: 3 + value * 1.6, height: 3 + value * 1.6 }}/>
          </button>)}
        </div>
      </div>}
    </div>

    <div className="defter-bar-actions">
      <button type="button" aria-label="Geri al" title="Geri al" disabled={!canUndo} onClick={onUndo}><Undo2 size={21} aria-hidden="true"/></button>
      <button type="button" aria-label="Yinele" title="Yinele" disabled={!canRedo} onClick={onRedo}><Redo2 size={21} aria-hidden="true"/></button>
      <ActionMenu className="defter-bar-share" label="Paylaş ve indir" icon={Share} items={shareItems}/>
      <button type="button" aria-label="Sayfalar" title="Sayfalar" onClick={onPages}><Files size={21} aria-hidden="true"/></button>
      <button type="button" aria-label="Not ayarları" title="Not ayarları" onClick={onSettings}><MoreVertical size={21} aria-hidden="true"/></button>
    </div>
  </div>
}
