import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function MockExamList({ exams, readOnly = false, onChanged }) {
  const [openId, setOpenId] = useState(null)

  async function handleDelete(id, e) {
    e.stopPropagation()
    const { error } = await supabase.from('mock_exams').delete().eq('id', id)
    if (!error) onChanged?.()
  }

  if (!exams || exams.length === 0) {
    return (
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 text-sm text-ink/40">
        {readOnly ? 'Bu öğrenci henüz deneme sonucu girmemiş.' : 'Henüz bir deneme sonucu girmedin.'}
      </div>
    )
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 divide-y divide-brand-50">
      {exams.map((exam) => {
        const totalNet =
          exam.mock_exam_subjects?.reduce((sum, s) => sum + Number(s.net || 0), 0) ?? 0
        const isOpen = openId === exam.id
        return (
          <div key={exam.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : exam.id)}
              className="focus-ring w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-brand-50/40 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="rounded-full bg-brand-100 text-brand-700 text-xs font-bold px-2.5 py-1 flex-shrink-0">
                  {exam.exam_type}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink truncate">
                    {exam.exam_name || formatDate(exam.exam_date)}
                  </p>
                  <p className="text-xs text-ink/40">{formatDate(exam.exam_date)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-sm font-bold text-brand-600">Net: {Math.round(totalNet * 100) / 100}</span>
                {!readOnly && (
                  <button
                    onClick={(e) => handleDelete(exam.id, e)}
                    className="focus-ring text-xs text-ink/30 hover:text-bad transition-colors"
                  >
                    Sil
                  </button>
                )}
                <svg
                  className={`h-4 w-4 text-ink/30 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
            {isOpen && (
              <div className="px-4 pb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-xs text-ink/40">
                      <th className="text-left font-medium py-1">Ders</th>
                      <th className="text-center font-medium py-1 text-good">D</th>
                      <th className="text-center font-medium py-1 text-bad">Y</th>
                      <th className="text-center font-medium py-1">B</th>
                      <th className="text-right font-medium py-1">Net</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exam.mock_exam_subjects?.map((s) => (
                      <tr key={s.id} className="border-t border-brand-50">
                        <td className="py-1.5 text-ink/80">{s.subject}</td>
                        <td className="py-1.5 text-center text-good font-medium">{s.correct}</td>
                        <td className="py-1.5 text-center text-bad font-medium">{s.incorrect}</td>
                        <td className="py-1.5 text-center text-ink/50">{s.empty}</td>
                        <td className="py-1.5 text-right font-semibold text-brand-600">{s.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
