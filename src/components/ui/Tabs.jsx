import { cn } from '../../lib/cn'

/**
 * Tabs — sekme/filtre şeridi. Mobilde yatay kaydırılır, kaydırma çubuğu gizlidir.
 *
 *   <Tabs
 *     items={[{ value: 'LGS', label: 'LGS' }, { value: 'TYT', label: 'TYT', count: 4 }]}
 *     value={type}
 *     onChange={setType}
 *   />
 *
 * variant: pill (kapsül şerit) | underline (alt çizgi)
 *
 * Aktif sekme, Aurora'nın "seçili durum" dilini taşır: yumuşak gradient
 * zemin + ince halka. Dolu gradient kullanılmaz — sekme birincil aksiyon
 * değildir, düğmelerle yarışmamalı.
 */
export default function Tabs({ items = [], value, onChange, variant = 'pill', className }) {
  if (variant === 'underline') {
    return (
      <div
        role="tablist"
        className={cn('flex gap-1 overflow-x-auto hide-scrollbar border-b border-line', className)}
      >
        {items.map((item) => {
          const active = item.value === value
          return (
            <button
              key={item.value}
              role="tab"
              type="button"
              aria-selected={active}
              onClick={() => onChange?.(item.value)}
              className={cn(
                'focus-ring relative whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors duration-200',
                active ? 'text-brand-700' : 'text-ink/65 hover:text-ink'
              )}
            >
              {item.label}
              {item.count != null && (
                <span className="ml-1.5 text-xs font-bold opacity-60">{item.count}</span>
              )}
              {active && (
                <span
                  className="absolute inset-x-3 -bottom-px h-[2px] bg-brand-600"
                  aria-hidden="true"
                />
              )}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex gap-1 rounded-input bg-surface-sunken p-1 overflow-x-auto hide-scrollbar max-w-full',
        'ring-1 ring-inset ring-line',
        className
      )}
    >
      {items.map((item) => {
        const active = item.value === value
        return (
          <button
            key={item.value}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => onChange?.(item.value)}
            className={cn(
              'focus-ring whitespace-nowrap rounded-btn px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ease-smooth',
              active
                ? 'bg-surface text-brand-800 shadow-xs ring-1 ring-line-strong'
                : 'text-ink/65 hover:text-ink hover:bg-surface/70'
            )}
          >
            {item.label}
            {item.count != null && (
              <span
                className={cn(
                  'ml-1.5 rounded-full px-1.5 py-0.5 text-2xs font-bold',
                  active ? 'bg-brand-500/12 text-brand-700' : 'bg-ink/[0.06] text-ink/60'
                )}
              >
                {item.count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
