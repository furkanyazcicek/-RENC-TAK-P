import { useState } from 'react'
import { CalendarPlus, Check, ClipboardCheck, PenLine, Target } from 'lucide-react'
import { runAction, AICoachError } from '../../lib/aiCoach'
import { Button, useToast } from '../ui'
import { cn } from '../../lib/cn'

/**
 * ActionCard — AI'ın önerdiği işlemin onay kartı.
 *
 * ÖNEMLİ: AI hiçbir yazma işlemini kendi başına yapmaz. Sunucu, modelin
 * yazma aracı çağrısını "onay bekliyor" durumuna çevirip bu kartı üretir.
 * Gerçek kayıt YALNIZCA buradaki butona basıldığında, `/api/ai-coach/action`
 * üzerinden ve sunucuda yeniden doğrulanarak gerçekleşir.
 */

const ICONS = {
  create_study_plan: CalendarPlus,
  log_study_session: PenLine,
  update_student_memory: Target,
  complete_study_task: ClipboardCheck,
}

const ACTIVITY_LABELS = {
  soru_cozumu: 'soru çözümü',
  konu_tekrari: 'konu tekrarı',
  yanlis_analizi: 'yanlış analizi',
  deneme: 'deneme',
}

/** Plan maddelerini tarihe göre gruplar — "yarın 2 madde" gibi okunur olsun. */
function groupByDate(items) {
  const map = new Map()
  items.forEach((item) => {
    if (!map.has(item.planned_date)) map.set(item.planned_date, [])
    map.get(item.planned_date).push(item)
  })
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]))
}

function formatDay(dateStr) {
  const date = new Date(`${dateStr}T00:00:00`)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = Math.round((date - today) / 86_400_000)
  if (diff === 0) return 'Bugün'
  if (diff === 1) return 'Yarın'
  return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', weekday: 'long' })
}

export default function ActionCard({ action, onCompleted }) {
  const [state, setState] = useState('idle') // idle | running | done
  const [error, setError] = useState(null)
  const toast = useToast()

  const Icon = ICONS[action.type] ?? Check

  async function handleRun() {
    setState('running')
    setError(null)
    try {
      const result = await runAction(action)
      setState('done')
      toast.success(result.message ?? 'İşlem tamamlandı.')
      onCompleted?.(action, result)
    } catch (err) {
      setState('idle')
      setError(
        err instanceof AICoachError ? err.message : 'İşlem tamamlanamadı. Tekrar dener misin?'
      )
    }
  }

  const planItems = action.type === 'create_study_plan' ? (action.payload?.items ?? []) : null

  return (
    <div
      className={cn(
        'mt-3 overflow-hidden rounded-card border bg-surface transition-colors',
        state === 'done' ? 'border-success-500/30' : 'border-aurora'
      )}
    >
      <div className="flex items-start gap-3 px-4 pt-4">
        <span
          className={cn(
            'grid h-9 w-9 shrink-0 place-items-center rounded-xl ring-1 ring-inset',
            state === 'done'
              ? 'bg-success-500/10 text-success-600 ring-success-500/20'
              : 'bg-brand-500/10 text-brand-600 ring-brand-500/15'
          )}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-bold text-ink">{action.title}</p>
          {action.summary && <p className="mt-0.5 text-xs text-ink/60">{action.summary}</p>}
        </div>
      </div>

      {/* Plan maddeleri — kullanıcı neyi onayladığını görmeden onaylamamalı */}
      {planItems?.length > 0 && (
        <div className="mt-3 flex flex-col gap-3 px-4">
          {groupByDate(planItems).map(([date, items]) => (
            <div key={date}>
              <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">
                {formatDay(date)}
              </p>
              <ul className="mt-1.5 flex flex-col gap-1.5">
                {items.map((item, i) => (
                  <li
                    key={`${date}-${i}`}
                    className="rounded-input border border-line bg-surface-muted px-3 py-2"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="min-w-0 text-xs text-ink/80">
                        <span className="font-semibold text-ink">{item.subject}</span>
                        {item.topic ? ` – ${item.topic}` : ''}
                        <span className="text-ink/55">
                          {' · '}
                          {ACTIVITY_LABELS[item.activity] ?? item.activity}
                        </span>
                      </span>
                      <span className="shrink-0 font-display text-xs font-bold tabular text-brand-600">
                        {item.duration_minutes} dk
                      </span>
                    </div>
                    {/* "Neden bu konu, neden şimdi" — plan kara kutu olmasın.
                        AI bu alanı doldurmazsa satır hiç görünmez. */}
                    {item.reason && (
                      <p className="mt-1 text-2xs leading-snug text-ink/55">{item.reason}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <div className="mt-3 flex items-center justify-between gap-3 border-t border-line bg-surface-muted px-4 py-3">
        {state === 'done' ? (
          <p className="flex items-center gap-1.5 text-xs font-semibold text-success-600">
            <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            Kaydedildi
          </p>
        ) : (
          <>
            <p className="text-2xs text-ink/55">Onaylamadan hiçbir şey kaydedilmez.</p>
            <Button size="sm" loading={state === 'running'} onClick={handleRun}>
              {action.label ?? 'Onayla'}
            </Button>
          </>
        )}
      </div>

      {error && (
        <p className="border-t border-line bg-danger-500/[0.06] px-4 py-2.5 text-xs text-danger-600">
          {error}
        </p>
      )}
    </div>
  )
}
