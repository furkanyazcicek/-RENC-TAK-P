export default function DateFilterControl({ value, onChange, label = 'Tarih filtrele' }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="date"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value || null)}
        aria-label={label}
        className="focus-ring rounded-lg border border-brand-100 px-2.5 py-1.5 text-xs text-ink/70 bg-paper"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange(null)}
          className="focus-ring text-xs font-semibold text-brand-600 hover:underline whitespace-nowrap"
        >
          Tüm Zamanlar
        </button>
      )}
    </div>
  )
}
