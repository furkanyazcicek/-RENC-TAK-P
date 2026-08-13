import { X } from 'lucide-react'
import { Input } from './ui'

/** Grafiklerin sağ üstündeki tarih filtresi. */
export default function DateFilterControl({ value, onChange, label = 'Tarih filtrele' }) {
  return (
    <div className="flex items-center gap-1.5">
      <Input
        type="date"
        value={value ?? ''}
        max={new Date().toISOString().slice(0, 10)}
        onChange={(e) => onChange(e.target.value || null)}
        aria-label={label}
        className="h-9 w-auto py-0 text-xs"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange(null)}
          className="focus-ring inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-ink/60 hover:bg-ink/[0.06] hover:text-ink transition-colors whitespace-nowrap"
        >
          <X className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
          Tümü
        </button>
      )}
    </div>
  )
}
