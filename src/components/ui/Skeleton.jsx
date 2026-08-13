import { cn } from '../../lib/cn'

/**
 * Skeleton — veri gelirken sayfanın iskeletini gösterir.
 * Boş bir spinner yerine bunu kullanmak arayüzü çok daha "oturmuş" gösterir.
 *
 *   <Skeleton className="h-4 w-32" />
 *   <SkeletonCard />
 *   <SkeletonTable rows={5} />
 */
export default function Skeleton({ className }) {
  return <div className={cn('skeleton h-4 w-full', className)} aria-hidden="true" />
}

export function SkeletonText({ lines = 3, className }) {
  return (
    <div className={cn('flex flex-col gap-2', className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn('h-3.5', i === lines - 1 && 'w-2/3')} />
      ))}
    </div>
  )
}

export function SkeletonCard({ className }) {
  return (
    <div className={cn('card p-5', className)} aria-hidden="true">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="mt-3 h-7 w-20" />
      <Skeleton className="mt-3 h-3 w-32" />
    </div>
  )
}

export function SkeletonTable({ rows = 4, className }) {
  return (
    <div className={cn('card overflow-hidden', className)} aria-hidden="true">
      <div className="border-b border-line px-5 py-3">
        <Skeleton className="h-3 w-28" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 border-b border-line px-5 py-4 last:border-0">
          <Skeleton className="h-9 w-9 shrink-0 rounded-full" />
          <Skeleton className="h-3.5 w-1/3" />
          <Skeleton className="ml-auto h-3.5 w-16" />
        </div>
      ))}
    </div>
  )
}
