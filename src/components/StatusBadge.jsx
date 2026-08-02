const STATUS_STYLES = {
  'İnceleniyor': 'bg-warn/10 text-warn',
  'Derste Çözülecek': 'bg-brand-100 text-brand-700',
  'Çözüldü': 'bg-good/10 text-good',
}

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
        STATUS_STYLES[status] ?? 'bg-ink/5 text-ink/50'
      }`}
    >
      {status}
    </span>
  )
}
