import { CheckCircle2, Circle, Trash2, CalendarClock } from 'lucide-react'
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
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-8 text-center text-sm text-ink/40">
        {role === 'teacher' ? 'Henüz atanmış görev yok.' : 'Şu anda sana atanmış bir görev yok. 🎉'}
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {homeworks.map((hw) => {
        const overdue = isOverdue(hw.due_date, hw.status)
        const done = hw.status === 'Tamamlandı'
        return (
          <div
            key={hw.id}
            className={`group rounded-xl2 bg-white shadow-card border p-5 flex gap-3 transition-all hover:shadow-elevated hover:-translate-y-0.5 ${
              done ? 'border-good/20' : overdue ? 'border-bad/20' : 'border-ink/5'
            }`}
          >
            <button
              onClick={() => toggleStatus(hw)}
              className="focus-ring flex-shrink-0 mt-0.5"
              aria-label={done ? 'Tamamlanmadı olarak işaretle' : 'Tamamlandı olarak işaretle'}
            >
              {done ? (
                <CheckCircle2 className="h-6 w-6 text-good" strokeWidth={2} />
              ) : (
                <Circle className="h-6 w-6 text-ink/20 group-hover:text-brand-400 transition-colors" strokeWidth={2} />
              )}
            </button>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h4 className={`font-semibold ${done ? 'text-ink/40 line-through' : 'text-ink'}`}>{hw.title}</h4>
                {role === 'teacher' && (
                  <button
                    onClick={() => handleDelete(hw.id)}
                    className="focus-ring flex-shrink-0 h-7 w-7 rounded-lg grid place-items-center text-ink/20 hover:text-bad hover:bg-bad/5 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Görevi sil"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              {showStudentName && hw.profiles?.full_name && (
                <p className="text-xs text-brand-600 font-medium mt-0.5">{hw.profiles.full_name}</p>
              )}
              {hw.description && (
                <p className={`text-sm mt-1.5 ${done ? 'text-ink/30' : 'text-ink/60'}`}>{hw.description}</p>
              )}
              {hw.due_date && (
                <p
                  className={`text-xs mt-2 font-medium inline-flex items-center gap-1 ${
                    overdue ? 'text-bad' : 'text-ink/40'
                  }`}
                >
                  <CalendarClock className="h-3.5 w-3.5" />
                  {formatDate(hw.due_date)} {overdue && '(gecikti)'}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
