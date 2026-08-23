import { ArrowUpRight } from 'lucide-react'
import { QUICK_PROMPTS } from '../../lib/aiCoach'
import { cn } from '../../lib/cn'

/**
 * QuickActions — hazır sorular.
 *
 * Bunlar dekoratif DEĞİLDİR: her biri gerçek bir AI isteği gönderir,
 * sabit/hazır bir cevap göstermez.
 *
 * Mobilde yatay kaydırılan tek satır, masaüstünde sarmalanan ızgara.
 * Yatay şeritte `overflow-x-auto` çalışabilsin diye kapsayıcıya
 * `min-w-0` verilmesi şart (bkz. DESIGN_SYSTEM.md §9).
 */
export default function QuickActions({ onSelect, disabled = false, variant = 'row', className }) {
  const items = variant === 'compact' ? QUICK_PROMPTS.slice(0, 4) : QUICK_PROMPTS

  return (
    <div className={cn('min-w-0', className)}>
      <div
        className={cn(
          'flex gap-2',
          variant === 'grid'
            ? 'flex-wrap'
            : '-mx-4 snap-x snap-mandatory overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0'
        )}
      >
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(item.prompt)}
            className={cn(
              'group flex shrink-0 snap-start items-center gap-1.5 rounded-full border border-line',
              'bg-surface px-3.5 py-2 text-xs font-medium text-ink/75',
              'transition-all duration-200 ease-smooth',
              'hover:border-line-strong hover:bg-surface-muted hover:text-brand-800',
              'focus-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0'
            )}
          >
            <span className="whitespace-nowrap">{item.label}</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 shrink-0 text-ink/35 transition-colors group-hover:text-brand-500"
              strokeWidth={2.2}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
