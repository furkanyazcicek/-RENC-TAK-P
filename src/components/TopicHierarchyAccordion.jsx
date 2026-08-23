import { useState } from 'react'
import { ChevronDown, BookOpen, TrendingUp } from 'lucide-react'
import { EmptyState } from './ui'

/**
 * Başarı kademesi bir DURUM bildirir (iyi / orta / zayıf), seri rengi değil —
 * bu yüzden Aurora paletinden değil durum renklerinden beslenir.
 */
function tierFor(pct) {
  // Ölçülemeyen durum: yalnızca konu anlatımı çalışılmış, hiç soru çözülmemiş.
  // "Zayıf" (kırmızı) göstermek yanlış olur — ortada bir başarısızlık yok,
  // ölçülecek doğru/yanlış yok. Nötr bir gri kullanılır.
  if (pct == null) {
    return {
      bar: 'bg-ink/15',
      text: 'text-ink/45',
      badge: 'bg-ink/[0.06] text-ink/50 ring-ink/[0.06]',
      unmeasured: true,
    }
  }
  if (pct >= 75) {
    return {
      bar: 'bg-gradient-to-r from-success-500/70 to-success-500',
      text: 'text-success-700',
      badge: 'bg-success-500/10 text-success-600 ring-success-500/15',
    }
  }
  if (pct >= 50) {
    return {
      bar: 'bg-gradient-to-r from-warning-500/70 to-warning-500',
      text: 'text-warning-700',
      badge: 'bg-warning-500/12 text-warning-700 ring-warning-500/20',
    }
  }
  return {
    bar: 'bg-gradient-to-r from-danger-500/70 to-danger-500',
    text: 'text-danger-600',
    badge: 'bg-danger-500/10 text-danger-600 ring-danger-500/15',
  }
}

export default function TopicHierarchyAccordion({ hierarchy }) {
  const [openSubject, setOpenSubject] = useState(hierarchy?.[0]?.subject ?? null)

  if (!hierarchy || hierarchy.length === 0) {
    return (
      <EmptyState
        icon={TrendingUp}
        title="Henüz veri yok"
        description="Konulara göre başarını görmek için aşağıdan bir günlük çalışma kaydı ekle."
        compact
      />
    )
  }

  return (
    <div className="flex flex-col gap-2.5">
      {hierarchy.map((s) => {
        const open = openSubject === s.subject
        const tier = tierFor(s.netPct)
        return (
          <div
            key={s.subject}
            className={`overflow-hidden rounded-card border bg-surface transition-all duration-200 ${
              open
                ? 'border-brand-500/20 shadow-card-hover'
                : 'border-line shadow-card hover:border-brand-200 hover:shadow-card-hover'
            }`}
          >
            <button
              onClick={() => setOpenSubject(open ? null : s.subject)}
              aria-expanded={open}
              className="focus-ring w-full flex items-center justify-between gap-4 px-5 py-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`hidden sm:grid h-9 w-9 flex-shrink-0 place-items-center rounded-full ring-4 ${tier.badge}`}>
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="min-w-0 text-left">
                  <div className="font-display font-bold text-ink truncate">{s.subject}</div>
                  <div className="text-[11px] text-ink/50 mt-0.5">
                    {s.topics.length} konu · {s.totalQuestions} soru
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="hidden sm:block w-28 h-2 rounded-full bg-ink/[0.06] overflow-hidden">
                  <div
                    className={`h-full rounded-full ${tier.bar} transition-all duration-500`}
                    style={{ width: tier.unmeasured ? '0%' : `${Math.min(100, s.netPct)}%` }}
                  />
                </div>
                <span
                  className={`min-w-[3rem] text-right text-sm font-bold tabular-nums ${tier.text}`}
                  title={tier.unmeasured ? 'Bu derste henüz soru çözülmemiş' : undefined}
                >
                  {tier.unmeasured ? '—' : `%${s.netPct}`}
                </span>
                <ChevronDown className={`h-4 w-4 text-ink/45 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {open && (
              <div className="px-5 pb-4 flex flex-col gap-2 animate-slide-down">
                {s.topics.map((t) => {
                  const tTier = tierFor(t.netPct)
                  return (
                    <div
                      key={t.topic}
                      className="flex items-center gap-3 rounded-input border border-line bg-surface-muted px-3.5 py-2.5"
                    >
                      <span className="text-sm text-ink/70 flex-1 min-w-0 truncate">{t.topic}</span>
                      <span className="hidden sm:inline text-[11px] text-ink/45 flex-shrink-0">{t.sessions} kayıt</span>
                      <div className="w-20 sm:w-28 h-1.5 rounded-full bg-ink/[0.06] overflow-hidden flex-shrink-0">
                        <div
                          className={`h-full rounded-full ${tTier.bar} transition-all duration-500`}
                          style={{ width: tTier.unmeasured ? '0%' : `${Math.min(100, t.netPct)}%` }}
                        />
                      </div>
                      <span
                        className={`text-xs font-bold w-9 text-right flex-shrink-0 tabular-nums ${tTier.text}`}
                        title={tTier.unmeasured ? 'Bu konuda henüz soru çözülmemiş' : undefined}
                      >
                        {tTier.unmeasured ? '—' : `%${t.netPct}`}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
