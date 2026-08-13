import { useState } from 'react'
import { ChevronDown, FileText, Trash2 } from 'lucide-react'
import { cn } from '../../lib/cn'
import { colorForKey } from '../../lib/chartTheme'
import { EmptyState, IconButton } from '../ui'

/**
 * ExamAccordion — deneme sonuçları listesi; bir satıra tıklayınca o denemenin
 * ders bazlı net dökümü açılır.
 *
 * Netler yalnızca sayı olarak değil, o denemedeki en yüksek nete göre
 * ölçeklenmiş çubuklarla gösterilir — hangi dersin çektiği tek bakışta görünür.
 *
 * rows: [{ id, date, examType, examName, totalNet, subjects: [{subject, net, correct?, incorrect?, empty?}] }]
 *
 * `onDelete` verilirse her satırın sağında bir silme düğmesi çıkar. Öğretmenin
 * veli/öğrenci gözüyle baktığı yerlerde bu prop verilmez, liste salt okunur olur.
 */
export default function ExamAccordion({
  rows = [],
  onDelete,
  emptyTitle = 'Henüz deneme sonucu yok',
  emptyDescription = 'Deneme sonuçları girildiğinde net gelişimi ve ders bazlı dökümü burada görünecek.',
  emptyAction,
  className,
}) {
  const [openId, setOpenId] = useState(null)

  if (!rows.length) {
    return (
      <EmptyState
        icon={FileText}
        title={emptyTitle}
        description={emptyDescription}
        action={emptyAction}
        compact
      />
    )
  }

  // Önceki denemeye göre değişimi hesaplayabilmek için tarihe göre eskiden yeniye
  const chronological = [...rows].sort((a, b) => new Date(a.date) - new Date(b.date))
  const prevNetById = {}
  chronological.forEach((row, i) => {
    prevNetById[row.id] = i > 0 ? chronological[i - 1].totalNet : null
  })

  return (
    <div className={cn('card overflow-hidden divide-y divide-line', className)}>
      {rows.map((e) => {
        const open = openId === e.id
        const prev = prevNetById[e.id]
        const delta = prev != null ? Math.round((e.totalNet - prev) * 100) / 100 : null
        const maxNet = Math.max(...(e.subjects ?? []).map((s) => Number(s.net) || 0), 1)

        return (
          <div key={e.id} className="group/row relative">
            <button
              type="button"
              onClick={() => setOpenId((cur) => (cur === e.id ? null : e.id))}
              aria-expanded={open}
              className={cn(
                'focus-ring flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors',
                open ? 'bg-brand-50/50' : 'hover:bg-surface-muted'
              )}
            >
              <div className="min-w-0 flex items-center gap-3">
                <span className="rounded-full bg-brand-50 px-2 py-0.5 text-2xs font-bold text-brand-700 shrink-0">
                  {e.examType}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">
                    {e.examName || 'İsimsiz deneme'}
                  </p>
                  <p className="text-2xs text-ink/55">
                    {e.date
                      ? new Date(e.date).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })
                      : '—'}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2.5">
                {delta != null && delta !== 0 && (
                  <span
                    className={cn(
                      'rounded-full px-1.5 py-0.5 text-2xs font-bold',
                      delta > 0 ? 'bg-success-50 text-success-700' : 'bg-danger-50 text-danger-600'
                    )}
                  >
                    {delta > 0 ? '↑' : '↓'} {Math.abs(delta).toLocaleString('tr-TR')}
                  </span>
                )}
                <span className="font-display text-base font-bold tabular text-ink">
                  {e.totalNet.toLocaleString('tr-TR')}
                  <span className="ml-1 text-2xs font-semibold text-ink/55">net</span>
                </span>
                {onDelete && <span className="w-7" aria-hidden="true" />}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 text-ink/45 transition-transform duration-200',
                    open && 'rotate-180'
                  )}
                  aria-hidden="true"
                />
              </div>
            </button>

            {onDelete && (
              <IconButton
                icon={Trash2}
                label="Denemeyi sil"
                size="xs"
                onClick={() => onDelete(e.id)}
                className="absolute right-11 top-1/2 -translate-y-1/2 text-ink/45 hover:text-danger-600 hover:bg-danger-50 opacity-100 sm:opacity-0 sm:group-hover/row:opacity-100 sm:focus-visible:opacity-100"
              />
            )}

            {open && (
              <div className="px-5 pb-5 animate-slide-down">
                {(e.subjects ?? []).length === 0 ? (
                  <p className="text-xs text-ink/55">Bu deneme için ders bazlı net kaydı yok.</p>
                ) : (
                  <ul className="flex flex-col gap-2.5">
                    {e.subjects.map((s, i) => {
                      const net = Number(s.net) || 0
                      const color = colorForKey(s.subject)
                      const hasDetail =
                        s.correct != null || s.incorrect != null || s.empty != null
                      return (
                        <li key={`${s.subject}-${i}`}>
                          <div className="mb-1 flex items-baseline justify-between gap-2">
                            <span className="text-xs font-semibold text-ink/70">{s.subject}</span>
                            <span className="text-xs font-bold tabular text-ink">
                              {hasDetail && (
                                <span className="mr-2 font-normal text-ink/55">
                                  <span className="text-success-600">{s.correct ?? 0}</span>
                                  {' · '}
                                  <span className="text-danger-600">{s.incorrect ?? 0}</span>
                                  {' · '}
                                  {s.empty ?? 0}
                                </span>
                              )}
                              {net.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                              <span className="ml-1 font-normal text-ink/50">net</span>
                            </span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-sunken">
                            <div
                              className="h-full rounded-full transition-all duration-500 ease-smooth"
                              style={{
                                width: `${Math.max((net / maxNet) * 100, 2)}%`,
                                background: color,
                              }}
                            />
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
