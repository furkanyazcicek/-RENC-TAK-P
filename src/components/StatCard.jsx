export default function StatCard({ label, value, hint, accent = 'brand', icon: Icon }) {
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
  const iconBg = {
    brand: 'bg-brand-50 text-brand-600',
    good: 'bg-good/10 text-good',
    warn: 'bg-warn/10 text-warn',
    accent: 'bg-accent-400/10 text-accent-600',
  }
  return (
    <div className="relative rounded-xl2 bg-white shadow-card border border-ink/5 p-5 pl-6 flex flex-col gap-1 overflow-hidden hover:shadow-elevated transition-shadow">
      <span className={`absolute left-0 top-0 bottom-0 w-1 ${barColors[accent]}`} />
      <div className="flex items-start justify-between gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-ink/40">{label}</span>
        {Icon && (
          <span className={`rounded-lg p-1.5 ${iconBg[accent]}`}>
            <Icon className="h-4 w-4" strokeWidth={2} />
          </span>
        )}
      </div>
      <span className={`text-3xl font-display font-bold tracking-tight ${textColors[accent]}`}>
        {value}
      </span>
      {hint && <span className="text-xs text-ink/50">{hint}</span>}
    </div>
  )
}
