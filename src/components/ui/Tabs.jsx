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
        className={cn('panel-tabs panel-tabs--underline flex gap-1 overflow-x-auto hide-scrollbar border-b', className)}
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
                active ? 'text-[#426f66]' : 'text-ink/68 hover:text-ink'
              )}
            >
              {item.label}
              {item.count != null && (
                <span className="ml-1.5 text-xs font-bold opacity-60">{item.count}</span>
              )}
              {active && (
                <span
                  className="absolute inset-x-3 -bottom-px h-[3px] rounded-full bg-[#5f8c82]"
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
        'panel-tabs inline-flex max-w-full gap-1 overflow-x-auto rounded-xl p-1 hide-scrollbar',
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
              'focus-ring whitespace-nowrap rounded-btn px-3.5 py-2 text-sm font-semibold transition-all duration-200 ease-smooth',
              active
                ? 'bg-[#fffdf8] text-[#426f66] shadow-xs ring-1 ring-[#5f8c82]/20'
                : 'text-ink/68 hover:bg-white/55 hover:text-ink'
            )}
          >
            {item.label}
            {item.count != null && (
              <span
                className={cn(
                  'ml-1.5 rounded-full px-1.5 py-0.5 text-2xs font-bold',
                  active ? 'bg-[#dcebe5] text-[#426f66]' : 'bg-ink/[0.06] text-ink/60'
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
