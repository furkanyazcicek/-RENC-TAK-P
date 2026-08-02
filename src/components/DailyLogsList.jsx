import { supabase } from '../lib/supabaseClient'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    weekday: 'short',
  })
}

function calcNet(correct, incorrect) {
  const c = Number(correct) || 0
  const i = Number(incorrect) || 0
  const net = c - i * 0.25
  return Math.round(net * 100) / 100
}

export default function DailyLogsList({ logs, readOnly = false, onChanged, title = 'Çalışma Geçmişi' }) {
  async function handleDelete(id) {
    const { error } = await supabase.from('daily_logs').delete().eq('id', id)
    if (!error) onChanged?.()
  }

  if (!logs || logs.length === 0) {
    return (
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 text-sm text-ink/40">
        {readOnly ? 'Bu öğrenci henüz bir çalışma kaydı girmemiş.' : 'Henüz bir çalışma kaydın yok. Yukarıdan ilk kaydını ekle!'}
      </div>
    )
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 flex flex-col gap-4">
      <h3 className="font-display font-bold text-lg text-ink">{title}</h3>
      <ul className="flex flex-col gap-3 max-h-[520px] overflow-y-auto pr-1">
        {logs.map((log) => {
          const net = calcNet(log.correct, log.incorrect)
          return (
            <li
              key={log.id}
              className="rounded-xl border border-brand-50 p-4 flex flex-col gap-2 hover:border-brand-200 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-brand-50 text-brand-700 text-xs font-semibold px-2.5 py-1">
                    {log.topic}
                  </span>
                  <span className="text-xs text-ink/40 capitalize">{formatDate(log.study_date)}</span>
                </div>
                <div className="flex items-center gap-3">
                  {log.duration_minutes ? (
                    <span className="text-xs text-ink/50">⏱ {log.duration_minutes} dk</span>
                  ) : null}
                  {!readOnly && (
                    <button
                      onClick={() => handleDelete(log.id)}
                      className="focus-ring text-xs text-ink/30 hover:text-bad transition-colors"
                      aria-label="Kaydı sil"
                    >
                      Sil
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <span className="text-good font-semibold">{log.correct ?? 0} D</span>
                <span className="text-bad font-semibold">{log.incorrect ?? 0} Y</span>
                <span className="text-ink/40 font-semibold">{log.empty ?? 0} B</span>
                <span className="ml-auto text-brand-600 font-bold">Net: {net}</span>
              </div>

              {log.notes && <p className="text-sm text-ink/60 border-t border-brand-50 pt-2">{log.notes}</p>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
