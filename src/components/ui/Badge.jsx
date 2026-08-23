import { cn } from '../../lib/cn'

/**
 * Badge — durum, etiket ve sayaç göstergesi.
 *
 *   <Badge tone="success">Çözüldü</Badge>
 *   <Badge tone="warning" dot>İnceleniyor</Badge>
 *   <Badge tone="aurora">Premium</Badge>
 *
 * tone: neutral | brand | accent | aqua | info | success | warning | danger | aurora
 *
 * Renkler saydam (`/10`) zemin + koyu metin olarak kurulur: neon değil,
 * yumuşak pastel. Zemin rengi temaya göre kaydığı için koyu temada da
 * kontrast korunur. `aurora` tonu yalnızca "Premium / Yeni / Öne çıkan"
 * gibi tekil vurgular içindir.
 */

const TONES = {
  neutral: 'bg-ink/[0.06] text-ink/70 ring-1 ring-inset ring-ink/[0.06]',
  brand: 'bg-brand-500/10 text-brand-700 ring-1 ring-inset ring-brand-500/15',
  accent: 'bg-accent-500/10 text-accent-700 ring-1 ring-inset ring-accent-500/15',
  aqua: 'bg-aqua-500/10 text-aqua-700 ring-1 ring-inset ring-aqua-500/15',
  info: 'bg-info-500/10 text-info-700 ring-1 ring-inset ring-info-500/15',
  success: 'bg-success-500/10 text-success-700 ring-1 ring-inset ring-success-500/15',
  warning: 'bg-warning-500/12 text-warning-700 ring-1 ring-inset ring-warning-500/20',
  danger: 'bg-danger-500/10 text-danger-700 ring-1 ring-inset ring-danger-500/15',
  aurora: 'bg-brand-700 text-white ring-1 ring-inset ring-brand-800',
}

/* Eski/alternatif adlar */
const ALIASES = { purple: 'brand', good: 'success', warn: 'warning', bad: 'danger' }

const DOT_TONES = {
  neutral: 'bg-ink/40',
  brand: 'bg-brand-500',
  accent: 'bg-accent-500',
  aqua: 'bg-aqua-500',
  info: 'bg-info-500',
  success: 'bg-success-500',
  warning: 'bg-warning-500',
  danger: 'bg-danger-500',
  aurora: 'bg-white',
}

const SIZES = {
  sm: 'px-2 py-0.5 text-2xs',
  md: 'px-2.5 py-1 text-xs',
}

export default function Badge({
  tone = 'neutral',
  size = 'md',
  dot = false,
  icon: Icon,
  className,
  children,
}) {
  const key = ALIASES[tone] ?? tone

  return (
    <span
      className={cn(
        'chip whitespace-nowrap',
        TONES[key] ?? TONES.neutral,
        SIZES[size] ?? SIZES.md,
        className
      )}
    >
      {dot && (
        <span
          className={cn('h-1.5 w-1.5 rounded-full', DOT_TONES[key] ?? DOT_TONES.neutral)}
          aria-hidden="true"
        />
      )}
      {Icon && <Icon className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />}
      {children}
    </span>
  )
}
