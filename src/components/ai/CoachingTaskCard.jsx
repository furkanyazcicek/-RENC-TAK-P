import { useState } from 'react'
import { AlertTriangle, ArrowRight, CheckCircle2, CircleDot, Clock3, RotateCcw } from 'lucide-react'
import { AICoachError, runAction } from '../../lib/aiCoach'
import { Button, ProgressBar, useToast } from '../ui'

const STATUS = {
  accepted: 'Kabul edildi', planned: 'Planlandı', started: 'Başlandı', partial: 'Devam ediyor',
  user_reported_complete: 'Tamamladığını bildirdin', platform_verified: 'Platform doğruladı',
  evaluated: 'Sonuç değerlendirildi', postponed: 'Ertelendi', cancelled: 'İptal edildi', expired: 'Süresi geçti',
}

export default function CoachingTaskCard({ item, mode = 'ready', onChanged }) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(mode === 'error' ? 'Kanıt servisine şu anda ulaşılamıyor. Görevin kaybolmadı.' : null)
  const toast = useToast()

  if (mode === 'empty' || !item) {
    return (
      <div className="mb-4 rounded-card border border-line bg-surface-muted px-4 py-4 text-sm text-ink/65">
        Henüz etkin bir koçluk görevin yok. Kanıtın yeterli olduğunda burada tek bir öncelik göreceksin.
      </div>
    )
  }

  const progress = Math.round(Math.max(0, Math.min(1, Number(item.progress_ratio ?? 0))) * 100)
  const status = mode === 'complete' ? 'evaluated' : item.status ?? 'planned'

  async function update(toStatus, patch = {}) {
    if (mode !== 'ready') return
    setBusy(true); setError(null)
    try {
      const result = await runAction({
        type: 'transition_coaching_task',
        client_action_id: globalThis.crypto.randomUUID(),
        payload: { task_id: item.id ?? item.task_id, to_status: toStatus, patch },
      })
      toast.success(result.message ?? 'Görev güncellendi.')
      onChanged?.()
    } catch (err) {
      setError(err instanceof AICoachError ? err.message : 'Görev güncellenemedi. Tekrar dener misin?')
    } finally { setBusy(false) }
  }

  return (
    <section aria-label="Bugünkü koçluk görevi" className="mb-4 overflow-hidden rounded-card border border-brand-500/20 bg-surface shadow-card">
      <div className="flex items-start gap-3 px-4 py-4 sm:px-5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-700 ring-1 ring-inset ring-brand-500/15">
          {status === 'evaluated' ? <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> : <CircleDot className="h-5 w-5" aria-hidden="true" />}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-2xs font-bold uppercase tracking-[0.14em] text-brand-700">Bugünkü odak</p>
            <span className="text-2xs font-semibold text-ink/55">{STATUS[status] ?? 'Planlandı'}</span>
          </div>
          <h3 className="mt-1 font-display text-base font-extrabold text-ink">{item.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-ink/65">{item.detail}</p>
          {status === 'user_reported_complete' && (
            <p className="mt-2 text-xs font-semibold text-warning-700">Beyanın kaydedildi; platform sonucu henüz doğrulamadı.</p>
          )}
          {status === 'evaluated' && item.outcome && (
            <p className="mt-2 text-xs font-semibold text-success-700">{item.outcome}</p>
          )}
        </div>
      </div>

      {!['evaluated', 'cancelled'].includes(status) && (
        <div className="border-t border-line px-4 py-3 sm:px-5">
          <div className="flex items-center justify-between gap-3 text-2xs text-ink/55">
            <span>Kaydedilen ilerleme</span><span className="font-semibold tabular text-ink">%{progress}</span>
          </div>
          <ProgressBar value={progress} tone="aurora" className="mt-2" />
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line bg-surface-muted px-4 py-3 sm:px-5">
        {item.target?.status === 'available' && (
          <Button as="a" href={item.target.path} variant="secondary" size="sm" className="min-h-11" icon={ArrowRight}>Çalışmaya git</Button>
        )}
        {mode === 'ready' && !['evaluated', 'cancelled'].includes(status) && (
          <div className="ml-auto flex flex-wrap gap-1.5">
            {status === 'planned' && <Button variant="ghost" size="sm" className="min-h-11" onClick={() => update('started')} disabled={busy}>Başladım</Button>}
            <Button variant="ghost" size="sm" className="min-h-11" icon={Clock3} onClick={() => update('postponed', { work_window_end: new Date(Date.now() + 2 * 86_400_000).toISOString() })} disabled={busy}>Ertele</Button>
            <Button size="sm" className="min-h-11" onClick={() => update('user_reported_complete')} loading={busy}>Tamamladım</Button>
          </div>
        )}
        {mode === 'complete' && <span className="ml-auto flex items-center gap-1.5 text-xs text-ink/55"><RotateCcw className="h-4 w-4" aria-hidden="true" /> Sonraki ölçümde yeniden değerlendirilir</span>}
      </div>
      {error && <p role="alert" className="flex items-start gap-2 border-t border-line bg-danger-500/[0.06] px-4 py-3 text-xs text-danger-700"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />{error}</p>}
    </section>
  )
}
