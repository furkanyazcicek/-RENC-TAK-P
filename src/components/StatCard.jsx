export default function StatCard({ label, value, hint, accent = 'brand' }) {
  const barColors = {
    brand: 'bg-brand-500',
    good: 'bg-good',
    warn: 'bg-warn',
    accent: 'bg-accent-500',
  }
  const textColors = {
    brand: 'text-brand-700',
    good: 'text-good',
    warn: 'text-warn',
    accent: 'text-accent-600',
  }
  return (
    <div className="relative rounded-xl2 bg-white shadow-card border border-ink/5 p-5 pl-6 flex flex-col gap-1 overflow-hidden">
      <span className={`absolute left-0 top-0 bottom-0 w-1 ${barColors[accent]}`} />
      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink/40">{label}</span>
      <span className={`text-3xl font-display font-bold tracking-tight ${textColors[accent]}`}>
        {value}
      </span>
      {hint && <span className="text-xs text-ink/50">{hint}</span>}
    </div>
  )
}
