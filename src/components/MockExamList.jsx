import { useState } from 'react'
import { ChevronDown, Target, Trash2 } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { cn } from '../lib/cn'
import { Badge, Card, EmptyState, IconButton } from './ui'

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
      <EmptyState
        icon={Target}
        title={readOnly ? 'Deneme sonucu yok' : 'Henüz deneme girmedin'}
        description={
          readOnly
            ? 'Bu öğrenci henüz bir deneme sonucu girmemiş.'
            : 'İlk deneme sonucunu girdiğinde net gelişimin burada birikmeye başlayacak.'
        }
        compact
      />
    )
  }

  return (
    <Card className="divide-y divide-line overflow-hidden">
      {exams.map((exam) => {
        const totalNet =
          exam.mock_exam_subjects?.reduce((sum, s) => sum + Number(s.net || 0), 0) ?? 0
        const isOpen = openId === exam.id
        return (
          <div key={exam.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : exam.id)}
              aria-expanded={isOpen}
              className={cn(
                'focus-ring flex w-full items-center justify-between gap-3 p-4 text-left transition-colors',
                isOpen ? 'bg-brand-500/[0.05]' : 'hover:bg-brand-500/[0.04]'
              )}
            >
              <div className="flex min-w-0 items-center gap-3">
                <Badge tone="brand" size="sm" className="shrink-0">
                  {exam.exam_type}
                </Badge>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">
                    {exam.exam_name || formatDate(exam.exam_date)}
                  </p>
                  <p className="text-xs text-ink/60">{formatDate(exam.exam_date)}</p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <span className="text-sm font-bold tabular text-brand-600">
                  {Math.round(totalNet * 100) / 100}
                  <span className="ml-1 text-xs font-medium text-ink/55">net</span>
                </span>
                {!readOnly && (
                  <IconButton
                    icon={Trash2}
                    label="Denemeyi sil"
                    size="xs"
                    onClick={(e) => handleDelete(exam.id, e)}
                    className="text-ink/40 hover:bg-danger-500/10 hover:text-danger-600"
                  />
                )}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 text-ink/45 transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </div>
            </button>

            {isOpen && (
              <div className="animate-slide-down px-4 pb-4">
                <table className="w-full text-sm tabular">
                  <thead>
                    <tr className="text-2xs uppercase tracking-wider text-ink/55">
                      <th className="py-1.5 text-left font-semibold">Ders</th>
                      <th className="py-1.5 text-center font-semibold text-success-700">D</th>
                      <th className="py-1.5 text-center font-semibold text-danger-600">Y</th>
                      <th className="py-1.5 text-center font-semibold">B</th>
                      <th className="py-1.5 text-right font-semibold">Net</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exam.mock_exam_subjects?.map((s) => (
                      <tr key={s.id} className="border-t border-line">
                        <td className="py-2 text-ink/80">{s.subject}</td>
                        <td className="py-2 text-center font-semibold text-success-700">{s.correct}</td>
                        <td className="py-2 text-center font-semibold text-danger-600">{s.incorrect}</td>
                        <td className="py-2 text-center text-ink/60">{s.empty}</td>
                        <td className="py-2 text-right font-bold text-brand-600">{s.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )
      })}
    </Card>
  )
}
