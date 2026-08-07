import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function barColor(pct) {
  if (pct >= 75) return 'bg-good'
  if (pct >= 50) return 'bg-warn'
  return 'bg-bad'
}

function textColor(pct) {
  if (pct >= 75) return 'text-good'
  if (pct >= 50) return 'text-warn'
  return 'text-bad'
}

export default function TopicHierarchyAccordion({ hierarchy }) {
  const [openSubject, setOpenSubject] = useState(hierarchy?.[0]?.subject ?? null)

  if (!hierarchy || hierarchy.length === 0) {
    return (
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 text-sm text-ink/40">
        Konulara göre başarıyı görmek için günlük çalışma kaydı gerekiyor.
      </div>
    )
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 divide-y divide-ink/5">
      {hierarchy.map((s) => {
        const open = openSubject === s.subject
        return (
          <div key={s.subject}>
            <button
              onClick={() => setOpenSubject(open ? null : s.subject)}
              className="focus-ring w-full flex items-center justify-between gap-3 px-5 py-4 hover:bg-paper/60 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <ChevronDown className={`h-4 w-4 text-ink/30 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
                <span className="font-display font-bold text-ink truncate">{s.subject}</span>
                <span className="text-xs text-ink/30 flex-shrink-0">({s.topics.length} konu)</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="hidden sm:block w-24 h-2 rounded-full bg-ink/5 overflow-hidden">
                  <div className={`h-full rounded-full ${barColor(s.netPct)}`} style={{ width: `${Math.min(100, s.netPct)}%` }} />
                </div>
                <span className={`text-sm font-bold ${textColor(s.netPct)}`}>%{s.netPct}</span>
              </div>
            </button>

            {open && (
              <div className="px-5 pb-4 flex flex-col gap-3">
                {s.topics.map((t) => (
                  <div key={t.topic} className="flex items-center gap-3">
                    <span className="text-sm text-ink/70 w-40 flex-shrink-0 truncate">{t.topic}</span>
                    <div className="flex-1 h-2.5 rounded-full bg-ink/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${barColor(t.netPct)} transition-all`}
                        style={{ width: `${Math.min(100, t.netPct)}%` }}
                      />
                    </div>
                    <span className={`text-xs font-bold w-10 text-right flex-shrink-0 ${textColor(t.netPct)}`}>
                      %{t.netPct}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
