import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '../lib/cn'

const MAX_SUGGESTIONS = 8

/**
 * TopicAutocomplete — serbest metin + öneri listesi birleşimi.
 *
 * Kullanıcı yazdıkça daha önce girilmiş (veya varsayılan) konuları filtreleyip
 * açılır liste olarak gösterir. Klavye (yukarı/aşağı/enter/esc) ve fare ile
 * seçim desteklenir. Alan görünümü tasarım sistemindeki `.input-base`
 * kalıbından gelir, böylece diğer form alanlarıyla birebir aynı durur.
 */
export default function TopicAutocomplete({ id, value, onChange, options, placeholder, required }) {
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(-1)
  const wrapRef = useRef(null)

  const filtered = useMemo(() => {
    const pool = options ?? []
    const q = value.trim().toLocaleLowerCase('tr-TR')
    if (!q) return pool.slice(0, MAX_SUGGESTIONS)
    return pool.filter((o) => o.toLocaleLowerCase('tr-TR').includes(q)).slice(0, MAX_SUGGESTIONS)
  }, [value, options])

  const exactMatch = filtered.some(
    (o) => o.toLocaleLowerCase('tr-TR') === value.trim().toLocaleLowerCase('tr-TR')
  )

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false)
        setHighlighted(-1)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setHighlighted(-1)
  }, [value])

  function selectOption(opt) {
    onChange(opt)
    setOpen(false)
    setHighlighted(-1)
  }

  function handleKeyDown(e) {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setOpen(true)
      return
    }
    if (!open || filtered.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted((i) => (i + 1) % filtered.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted((i) => (i <= 0 ? filtered.length - 1 : i - 1))
    } else if (e.key === 'Enter') {
      if (highlighted >= 0) {
        e.preventDefault()
        selectOption(filtered[highlighted])
      } else {
        setOpen(false)
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
      setHighlighted(-1)
    }
  }

  function renderLabel(text) {
    const q = value.trim()
    if (!q) return text
    const idx = text.toLocaleLowerCase('tr-TR').indexOf(q.toLocaleLowerCase('tr-TR'))
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <span className="font-bold text-brand-600">{text.slice(idx, idx + q.length)}</span>
        {text.slice(idx + q.length)}
      </>
    )
  }

  return (
    <div ref={wrapRef} className="relative">
      <input
        id={id}
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
        autoComplete="off"
        required={required}
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="input-base"
      />

      {open && filtered.length > 0 && (
        <ul
          role="listbox"
          className="absolute z-dropdown mt-1.5 max-h-56 w-full overflow-y-auto rounded-card border border-line bg-surface py-1.5 shadow-elevated animate-slide-down"
        >
          {!exactMatch && value.trim() && (
            <li className="mb-1 border-b border-line px-3.5 pb-1.5 text-2xs text-ink/55">
              Mevcut konular · yeni yazdığın metin de kaydedilebilir
            </li>
          )}
          {filtered.map((opt, i) => (
            <li
              key={opt}
              role="option"
              aria-selected={i === highlighted}
              onMouseDown={(e) => {
                e.preventDefault()
                selectOption(opt)
              }}
              onMouseEnter={() => setHighlighted(i)}
              className={cn(
                'mx-1.5 cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors',
                i === highlighted ? 'bg-brand-50 text-brand-700' : 'text-ink/70'
              )}
            >
              {renderLabel(opt)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
