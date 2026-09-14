import { useState } from 'react'
import { CalendarPlus, Check, ClipboardCheck, ExternalLink, Info, PenLine, Target, X } from 'lucide-react'
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
  accept_coaching_recommendation: Target,
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
  const [state, setState] = useState(action.preview_state === 'done' ? 'done' : 'idle') // idle | running | done | rejected
  const [error, setError] = useState(null)
  const [editing, setEditing] = useState(false)
  const [editedAmount, setEditedAmount] = useState(action.payload?.recommendation?.suggested_amount?.value ?? '')
  const toast = useToast()

  const Icon = ICONS[action.type] ?? Check

  async function handleRun() {
    setState('running')
    setError(null)
    try {
      const nextAction = action.type === 'accept_coaching_recommendation' && editing
        ? {
            ...action,
            payload: {
              ...action.payload,
              recommendation: {
                ...action.payload.recommendation,
                recommendation_version: Number(action.payload.recommendation.recommendation_version ?? 1) + 1,
                suggested_amount: {
                  ...action.payload.recommendation.suggested_amount,
                  value: Math.max(1, Math.min(240, Math.floor(Number(editedAmount) || 1))),
                },
                decision: 'edited',
                status: 'edited',
              },
            },
          }
        : action
      if (action.preview_state === 'error') throw new AICoachError('Hedef içerik artık erişilebilir değil. Alternatif bir çalışma seçebilirsin.', 'target_unavailable')
      const result = await runAction(nextAction)
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

  async function handleReject() {
    if (action.preview_state) {
      setState('rejected')
      return
    }
    setState('running')
    setError(null)
    try {
      const result = await runAction({
        type: 'reject_coaching_recommendation',
        client_action_id: globalThis.crypto.randomUUID(),
        payload: { ...action.payload, reason_code: 'not_relevant' },
      })
      setState('rejected')
      toast.success(result.message ?? 'Öneri kaldırıldı.')
      onCompleted?.(action, result)
    } catch (err) {
      setState('idle')
      setError(err instanceof AICoachError ? err.message : 'Öneri kaldırılamadı. Tekrar dener misin?')
    }
  }

  const planItems = action.type === 'create_study_plan' ? (action.payload?.items ?? []) : null
  const recommendation = action.type === 'accept_coaching_recommendation'
    ? action.payload?.recommendation
    : null

  if (recommendation) {
    const confidence = { high: 'Yüksek güven', medium: 'Orta güven', low: 'Düşük güven', insufficient: 'Ön ölçüm gerekli' }[recommendation.confidence_level]
    const amount = recommendation.suggested_amount
    const unit = amount?.kind === 'minutes' ? 'dakika' : amount?.kind === 'questions' ? 'soru' : 'etkinlik'
    const target = recommendation.target
    return (
      <div className={cn(
        'mt-3 overflow-hidden rounded-card border bg-surface shadow-card transition-colors',
        state === 'done' ? 'border-success-500/30' : state === 'rejected' ? 'border-line' : 'border-brand-500/25'
      )}>
        <div className="h-1 bg-aurora-line" aria-hidden="true" />
        <div className="px-4 py-4 sm:px-5">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-700 ring-1 ring-inset ring-brand-500/15">
              <Target className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-2xs font-bold uppercase tracking-[0.14em] text-brand-700">Önerilen çalışma</p>
              <p className="mt-1 font-display text-base font-extrabold text-ink">{action.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">{recommendation.reason_summary}</p>
            </div>
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-line py-3 text-xs sm:grid-cols-3">
            <div>
              <dt className="text-ink/55">Çalışma</dt>
              <dd className="mt-0.5 font-semibold text-ink">{amount ? `${editing ? editedAmount : amount.value} ${unit}` : 'Kısa görev'}</dd>
            </div>
            <div>
              <dt className="text-ink/55">Güven</dt>
              <dd className="mt-0.5 font-semibold text-ink">{confidence}</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-ink/55">Tamamlanma</dt>
              <dd className="mt-0.5 font-semibold text-ink">{recommendation.success_criteria?.description}</dd>
            </div>
          </dl>

          {editing && amount && (
            <label className="mt-3 block text-xs font-semibold text-ink">
              Miktarı düzenle
              <span className="mt-1.5 flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="240"
                  value={editedAmount}
                  onChange={(event) => setEditedAmount(event.target.value)}
                  className="input-base h-11 w-24"
                />
                <span className="font-normal text-ink/60">{unit}</span>
              </span>
            </label>
          )}

          <details className="mt-3 rounded-input bg-surface-muted px-3 py-2.5">
            <summary className="focus-ring -m-1 flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-btn p-1 text-xs font-semibold text-ink/75">
              <Info className="h-4 w-4 text-brand-600" aria-hidden="true" />
              Neye göre?
            </summary>
            <div className="pb-1 pt-2 text-xs leading-relaxed text-ink/65">
              <p>{recommendation.evidence_refs?.length ?? 0} doğrulanmış kanıt bağı kullanıldı.</p>
              {recommendation.data_limitations?.length > 0 && (
                <p className="mt-1">Sınır: {recommendation.data_limitations.join(' ')}</p>
              )}
              <p className="mt-1">Öğrenci beyanı, platformun doğruladığı sonuçla aynı sayılmaz.</p>
            </div>
          </details>

          {target?.status === 'available' ? (
            <p className="mt-3 flex items-center gap-2 text-xs text-ink/65">
              <ExternalLink className="h-4 w-4 text-brand-600" aria-hidden="true" />
              Onaydan sonra: <span className="font-semibold text-ink">{target.label}</span>
            </p>
          ) : (
            <p className="mt-3 text-xs text-warning-700">Uygun içerik hedefi yok: {target?.unavailable_reason}</p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line bg-surface-muted px-4 py-3 sm:px-5">
          {state === 'done' ? (
            <p className="flex min-h-10 items-center gap-2 text-xs font-semibold text-success-700">
              <Check className="h-4 w-4" aria-hidden="true" /> Görev planlandı
            </p>
          ) : state === 'rejected' ? (
            <p className="flex min-h-10 items-center gap-2 text-xs font-semibold text-ink/65">
              <X className="h-4 w-4" aria-hidden="true" /> Öneri kaldırıldı
            </p>
          ) : (
            <>
              <div className="flex flex-wrap gap-1.5">
                <Button variant="ghost" size="sm" className="min-h-11" onClick={handleReject} disabled={state === 'running'}>İlgili değil</Button>
                {amount && (
                  <Button variant="secondary" size="sm" className="min-h-11" onClick={() => setEditing((value) => !value)} disabled={state === 'running'}>
                    {editing ? 'Düzenlemeyi kapat' : 'Düzenle'}
                  </Button>
                )}
              </div>
              <Button size="sm" className="min-h-11" loading={state === 'running'} onClick={handleRun}>{action.label ?? 'Görevi Planla'}</Button>
            </>
          )}
        </div>
        {error && <p role="alert" className="border-t border-line bg-danger-500/[0.06] px-4 py-2.5 text-xs text-danger-700">{error}</p>}
      </div>
    )
  }

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
