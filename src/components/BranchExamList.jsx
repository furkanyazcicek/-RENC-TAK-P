import { useState } from 'react'
import { FlaskConical, Trash2 } from 'lucide-react'
import useAcademicActivity from '../hooks/useAcademicActivity'
import { academicStatusMessage } from '../lib/learning/academicActivity/client'
import { calcNet } from '../lib/examHelpers'
import { colorForKey } from '../lib/chartTheme'
import { Alert, Badge, EmptyState, IconButton } from './ui'

// Doğru/yanlış girilmişse net HER ZAMAN burada hesaplanır. Veritabanındaki
// `net` generated column'u sabit /4 uygular, LGS'nin /3 katsayısını bilmez —
// ona güvenilirse LGS branş denemesi, formun gösterdiği önizlemeden farklı
// bir netle listelenir. Saklı değere yalnızca doğru/yanlışı olmayan eski
// kayıtlarda düşülür.
function resolveNet(exam) {
  if (exam.correct != null || exam.incorrect != null) {
    return calcNet(exam.correct, exam.incorrect, exam.exam_type)
  }
  return exam.net != null ? Number(exam.net) : null
}

/**
 * BranchExamList — tek ders üzerine yapılan branş denemelerinin listesi.
 *
 * Her satırın solundaki renk noktası dersin sabit rengidir (colorForKey),
 * böylece aynı ders uygulamanın her yerinde aynı renkte görünür.
 */
export default function BranchExamList({ exams, onChanged, readOnly = false, emptyAction }) {
  const academic = useAcademicActivity()
  const [error, setError] = useState('')
  async function handleDelete(id) {
    setError('')
    const response = await academic.perform('branch_exam_delete', { record_id: id })
    if (response.status === 'saved') onChanged?.()
    else setError(academicStatusMessage(response.status))
  }

  if (!exams || exams.length === 0) {
    return (
      <EmptyState
        icon={FlaskConical}
        title="Henüz branş denemesi yok"
        description="Tek bir dersten çözdüğün denemeleri buraya eklediğinde, o dersteki gelişimini ayrı ayrı takip edebilirsin."
        action={emptyAction}
        compact
      />
    )
  }

  return (
    <div className="card divide-y divide-line overflow-hidden">
      {error && <div className="p-3"><Alert tone="danger">{error}</Alert></div>}
      {exams.map((e) => {
        const net = resolveNet(e)
        const subject = String(e.topic ?? '').split('-')[0].trim() || 'Genel'

        return (
          <div
            key={e.id}
            className="group flex items-center justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-surface-muted"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: colorForKey(subject) }}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-semibold text-ink">{e.topic}</p>
                  {e.exam_type && (
                    <Badge tone="brand" size="sm">
                      {e.exam_type}
                    </Badge>
                  )}
                </div>
                <p className="text-2xs text-ink/55">
                  {new Date(e.exam_date).toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              {net != null ? (
                <div className="text-right">
                  <p className="font-display text-sm font-bold tabular text-ink leading-none">
                    {net.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                    <span className="ml-1 text-2xs font-semibold text-ink/55">net</span>
                  </p>
                  <p className="mt-1 text-2xs tabular text-ink/55">
                    <span className="font-semibold text-success-600">{e.correct ?? 0}</span>
                    <span className="mx-1 text-ink/45">/</span>
                    <span className="font-semibold text-danger-600">{e.incorrect ?? 0}</span>
                    <span className="mx-1 text-ink/45">/</span>
                    {e.empty ?? 0}
                  </p>
                </div>
              ) : (
                <span className="text-sm text-ink/55">%{e.score} (eski kayıt)</span>
              )}

              {!readOnly && (
                <IconButton
                  icon={Trash2}
                  label="Branş denemesini sil"
                  size="lg"
                  onClick={() => handleDelete(e.id)}
                  className="text-ink/45 hover:bg-danger-50 hover:text-danger-600 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
