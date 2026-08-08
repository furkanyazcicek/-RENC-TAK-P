import { supabase } from '../lib/supabaseClient'

export default function BranchExamList({ exams, onChanged, readOnly = false }) {
  async function handleDelete(id) {
    const { error } = await supabase.from('exams').delete().eq('id', id)
    if (!error) onChanged?.()
  }

  if (!exams || exams.length === 0) {
    return (
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 text-sm text-ink/40">
        Henüz branş denemesi eklenmemiş.
      </div>
    )
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 divide-y divide-brand-50">
      {exams.map((e) => (
        <div key={e.id} className="px-5 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="font-medium text-ink">{e.topic}</span>
            <span className="text-xs text-ink/40 ml-2">
              {new Date(e.exam_date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {e.net != null ? (
              <span className="text-sm text-ink/50">
                {e.correct} D · {e.incorrect} Y · {e.empty} B ={' '}
                <strong className="text-brand-600">{Number(e.net).toFixed(2)} net</strong>
              </span>
            ) : (
              <span className="text-sm text-ink/50">%{e.score} (eski kayıt)</span>
            )}
            {!readOnly && (
              <button
                onClick={() => handleDelete(e.id)}
                className="focus-ring text-xs text-ink/30 hover:text-bad transition-colors"
                aria-label="Sil"
              >
                Sil
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
