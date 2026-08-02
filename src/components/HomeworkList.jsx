import { supabase } from '../lib/supabaseClient'

function formatDate(dateStr) {
  if (!dateStr) return null
  return new Date(dateStr).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })
}

function isOverdue(dueDate, status) {
  if (!dueDate || status === 'Tamamlandı') return false
  return new Date(dueDate) < new Date(new Date().toDateString())
}

export default function HomeworkList({ homeworks, role, onChanged, showStudentName = false }) {
  async function toggleStatus(hw) {
    const nextStatus = hw.status === 'Tamamlandı' ? 'Yapılıyor' : 'Tamamlandı'
    const { error } = await supabase.from('homeworks').update({ status: nextStatus }).eq('id', hw.id)
    if (!error) onChanged?.()
  }

  async function handleDelete(id) {
    const { error } = await supabase.from('homeworks').delete().eq('id', id)
    if (!error) onChanged?.()
  }

  if (!homeworks || homeworks.length === 0) {
    return (
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 text-sm text-ink/40">
        {role === 'teacher' ? 'Henüz atanmış ödev yok.' : 'Şu anda sana atanmış bir ödev yok. 🎉'}
      </div>
    )
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 divide-y divide-brand-50">
      {homeworks.map((hw) => {
        const overdue = isOverdue(hw.due_date, hw.status)
        return (
          <div key={hw.id} className="p-5 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-semibold text-ink">{hw.title}</h4>
                {showStudentName && hw.profiles?.full_name && (
                  <span className="text-xs text-ink/40">— {hw.profiles.full_name}</span>
                )}
              </div>
              {hw.description && <p className="text-sm text-ink/60 mt-1">{hw.description}</p>}
              {hw.due_date && (
                <p className={`text-xs mt-1 font-medium ${overdue ? 'text-bad' : 'text-ink/40'}`}>
                  Son tarih: {formatDate(hw.due_date)} {overdue && '(gecikti)'}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => toggleStatus(hw)}
                className={`focus-ring rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  hw.status === 'Tamamlandı'
                    ? 'bg-good/10 text-good hover:bg-good/20'
                    : 'bg-warn/10 text-warn hover:bg-warn/20'
                }`}
              >
                {hw.status === 'Tamamlandı' ? '✓ Tamamlandı' : '⏳ Yapılıyor'}
              </button>
              {role === 'teacher' && (
                <button
                  onClick={() => handleDelete(hw.id)}
                  className="focus-ring text-xs text-ink/30 hover:text-bad transition-colors"
                >
                  Sil
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
