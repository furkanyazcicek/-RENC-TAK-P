import { useEffect, useId, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { Button, Field, Input, Modal, Select } from '../ui'
import { canMoveFolder, cleanName, flattenTree, folderTree, FOLDER_COLORS, MAX_DEPTH } from '../../lib/defter/folders'

export function FolderDot({ color, className = '' }) {
  return <span className={`defter-dot defter-folder-${color ?? 'gri'} ${className}`} aria-hidden="true"/>
}

/**
 * Küçük açılır menü. Dışarı dokunma ve Escape ile kapanır, oklarla gezilir,
 * kapanınca odak düğmeye döner.
 */
export function ActionMenu({ label, icon: Icon, text, items, align = 'end', className = '', buttonClassName = '' }) {
  const [open, setOpen] = useState(false)
  const root = useRef(null), button = useRef(null)
  const id = useId()
  useEffect(() => {
    if (!open) return
    const down = e => { if (!root.current?.contains(e.target)) setOpen(false) }
    const key = e => {
      if (e.key === 'Escape') { e.stopPropagation(); setOpen(false); button.current?.focus(); return }
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
      e.preventDefault()
      const list = [...root.current.querySelectorAll('[role="menuitem"]:not(:disabled)')]
      const at = list.indexOf(document.activeElement)
      list[(at + (e.key === 'ArrowDown' ? 1 : -1) + list.length) % list.length]?.focus()
    }
    document.addEventListener('pointerdown', down, true)
    document.addEventListener('keydown', key)
    const frame = requestAnimationFrame(() => root.current?.querySelector('[role="menuitem"]:not(:disabled)')?.focus())
    return () => { cancelAnimationFrame(frame); document.removeEventListener('pointerdown', down, true); document.removeEventListener('keydown', key) }
  }, [open])
  return <div ref={root} className={`defter-menu ${className}`} data-flow-control>
    <button ref={button} type="button" className={buttonClassName || 'defter-icon-btn'} aria-label={text ? undefined : label} title={label}
      aria-haspopup="menu" aria-expanded={open} aria-controls={open ? id : undefined} onClick={() => setOpen(v => !v)}>
      {Icon && <Icon size={20} aria-hidden="true"/>}{text && <span>{text}</span>}
    </button>
    {open && <div id={id} role="menu" aria-label={label} className={`defter-menu-list defter-menu-${align}`}>
      {items.filter(Boolean).map((item, i) => item.divider
        ? <div key={i} role="separator" className="defter-menu-divider"/>
        : <button key={i} type="button" role="menuitem" disabled={item.disabled} className={item.danger ? 'is-danger' : ''}
          onClick={() => { setOpen(false); item.onSelect() }}>
          {item.icon && <item.icon size={17} aria-hidden="true"/>}<span>{item.label}</span>{item.hint && <small>{item.hint}</small>}
        </button>)}
    </div>}
  </div>
}

export function FolderDialog({ open, onClose, folders, initial, onSave }) {
  const [name, setName] = useState(''), [color, setColor] = useState('mor'), [parentId, setParentId] = useState(''), [error, setError] = useState('')
  useEffect(() => {
    if (!open) return
    setName(initial?.name ?? ''); setColor(initial?.color ?? 'mor'); setParentId(initial?.parentId ?? ''); setError('')
  }, [open])
  const editing = Boolean(initial?.id)
  const options = flattenTree(folderTree(folders))
    .filter(n => n.depth < MAX_DEPTH - 1 && (!editing || canMoveFolder(folders, initial.id, n.folder.id)))
  function submit(e) {
    e.preventDefault()
    const clean = cleanName(name)
    if (!clean) { setError('Klasöre bir ad ver.'); return }
    onSave({ name: clean, color, parentId: parentId || null })
  }
  return <Modal open={open} onClose={onClose} title={editing ? 'Klasörü düzenle' : 'Yeni klasör'} description="Notlarını ders, öğrenci ya da dönem gibi gruplara ayır.">
    <form onSubmit={submit} className="space-y-5">
      <Field label="Klasör adı">
        <Input aria-label="Klasör adı" value={name} maxLength={60} onChange={e => { setName(e.target.value); setError('') }} placeholder="Örneğin: 8. Sınıf Matematik" autoFocus/>
      </Field>
      {error && <p role="alert" className="text-sm text-danger-700">{error}</p>}
      <fieldset className="defter-color-field">
        <legend>Renk</legend>
        <div className="defter-color-options" role="radiogroup" aria-label="Klasör rengi">
          {FOLDER_COLORS.map(c => <button type="button" key={c.key} role="radio" aria-checked={color === c.key} aria-label={c.name} title={c.name}
            className={`defter-folder-${c.key}`} onClick={() => setColor(c.key)}><span>{color === c.key && <Check size={16} aria-hidden="true"/>}</span></button>)}
        </div>
      </fieldset>
      <Field label="Üst klasör" hint="İsteğe bağlı. En fazla üç kat iç içe klasör açılabilir.">
        <Select aria-label="Üst klasör" value={parentId} onChange={e => setParentId(e.target.value)}>
          <option value="">Yok · ana klasör</option>
          {options.map(n => <option key={n.folder.id} value={n.folder.id}>{'— '.repeat(n.depth)}{n.folder.name}</option>)}
        </Select>
      </Field>
      <Button type="submit" fullWidth icon={Check}>{editing ? 'Kaydet' : 'Klasörü oluştur'}</Button>
    </form>
  </Modal>
}

export function MoveDialog({ open, onClose, folders, currentId, onMove, title = 'Notu taşı' }) {
  const [target, setTarget] = useState('')
  useEffect(() => { if (open) setTarget(currentId ?? '') }, [open])
  const nodes = flattenTree(folderTree(folders))
  return <Modal open={open} onClose={onClose} title={title} description="Notu bir klasöre koy ya da dosyalanmamış bırak.">
    <div className="defter-move-list" role="radiogroup" aria-label="Hedef klasör">
      <button type="button" role="radio" aria-checked={target === ''} onClick={() => setTarget('')}>
        <span className="defter-dot defter-dot-empty" aria-hidden="true"/><span>Dosyalanmamış</span>{target === '' && <Check size={16} aria-hidden="true"/>}
      </button>
      {nodes.map(n => <button type="button" key={n.folder.id} role="radio" aria-checked={target === n.folder.id} style={{ '--depth': n.depth }} onClick={() => setTarget(n.folder.id)}>
        <FolderDot color={n.folder.color}/><span>{n.folder.name}</span>{target === n.folder.id && <Check size={16} aria-hidden="true"/>}
      </button>)}
    </div>
    {!nodes.length && <p className="defter-help">Henüz klasörün yok. Kütüphanede “Klasörler” yanındaki + ile oluşturabilirsin.</p>}
    <Button className="mt-5" fullWidth icon={Check} onClick={() => onMove(target || null)}>Buraya taşı</Button>
  </Modal>
}

export function RenameDialog({ open, onClose, value, onSave, title = 'Yeniden adlandır', label = 'Not adı', maxLength = 120 }) {
  const [text, setText] = useState('')
  useEffect(() => { if (open) setText(value ?? '') }, [open])
  return <Modal open={open} onClose={onClose} title={title}>
    <form className="space-y-5" onSubmit={e => { e.preventDefault(); if (text.trim()) onSave(text.trim().slice(0, maxLength)) }}>
      <Field label={label}><Input aria-label={label} value={text} maxLength={maxLength} onChange={e => setText(e.target.value)} autoFocus/></Field>
      <Button type="submit" fullWidth icon={Check} disabled={!text.trim()}>Kaydet</Button>
    </form>
  </Modal>
}

export function ConfirmDialog({ open, onClose, title, description, confirmLabel, onConfirm, danger = false }) {
  return <Modal open={open} onClose={onClose} title={title} description={description}>
    <div className="defter-confirm-actions">
      <Button variant="ghost" onClick={onClose}>Vazgeç</Button>
      <Button variant={danger ? 'danger' : 'primary'} onClick={onConfirm}>{confirmLabel}</Button>
    </div>
  </Modal>
}
