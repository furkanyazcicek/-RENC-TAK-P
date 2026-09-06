import { cn } from '../../lib/cn'

/** Menü simgesinin üzerinde uygulama rozeti gibi duran okunmamış sayacı. */
export default function UnreadBadge({ count, className }) {
  if (!count) return null

  const visibleCount = count > 99 ? '99+' : count

  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute -right-1.5 -top-1.5 grid min-h-[1.25rem] min-w-[1.25rem] place-items-center rounded-full',
        'bg-danger-500 px-1 text-[10px] font-extrabold leading-none text-white shadow-xs',
        'ring-2 ring-white tabular-nums',
        className
      )}
    >
      {visibleCount}
    </span>
  )
}
