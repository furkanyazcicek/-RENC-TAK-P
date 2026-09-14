import { useState } from 'react'
import { CheckCircle2, Circle, Trash2, CalendarClock, ClipboardList, PartyPopper } from 'lucide-react'
import useAcademicActivity from '../hooks/useAcademicActivity'
import { academicStatusMessage } from '../lib/learning/academicActivity/client'
import { cn } from '../lib/cn'
import { isHomeworkOverdue } from '../lib/insights'
import { Alert, Badge, EmptyState, IconButton } from './ui'

function formatDate(dateStr) {
  if (!dateStr) return null
  return new Date(dateStr).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })
}

/** Teslim tarihine kalan günü insan diliyle söyler. */
function dueLabel(dateStr, done) {
  if (!dateStr) return null
  const due = new Date(dateStr)
  due.setHours(0, 0, 0, 0)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = Math.round((due - today) / (24 * 60 * 60 * 1000))

  if (done) return formatDate(dateStr)
  if (diff < 0) return `${formatDate(dateStr)} • ${Math.abs(diff)} gün gecikti`
  if (diff === 0) return 'Bugün teslim'
  if (diff === 1) return 'Yarın teslim'
  if (diff <= 7) return `${formatDate(dateStr)} • ${diff} gün kaldı`
  return formatDate(dateStr)
}

const EMPTY_STATES = {
  overdue: {
    icon: PartyPopper,
    title: 'Geciken ödev yok',
    description: 'Teslim tarihi geçmiş, tamamlanmamış bir ödev bulunmuyor.',
  },
  done: {
    icon: ClipboardList,
    title: 'Henüz tamamlanan ödev yok',
    description: 'Bir ödevi tamamlandı olarak işaretlediğinde burada birikmeye başlar.',
  },
}

export default function HomeworkList({
  homeworks,
  role,
  onChanged,
  showStudentName = false,
  emptyVariant = 'pending',
}) {
  const academic = useAcademicActivity()
  const [error, setError] = useState('')
  async function toggleStatus(hw) {
    const nextStatus = hw.status === 'Tamamlandı' ? 'Yapılıyor' : 'Tamamlandı'
    setError('')
    const response = await academic.perform('homework_status', { record_id: hw.id, status: nextStatus })
    if (response.status === 'saved') onChanged?.()
    else setError(academicStatusMessage(response.status))
  }

  async function handleDelete(id) {
    setError('')
    const response = await academic.perform('homework_delete', { record_id: id })
    if (response.status === 'saved') onChanged?.()
    else setError(academicStatusMessage(response.status))
  }

  if (!homeworks || homeworks.length === 0) {
    const preset = EMPTY_STATES[emptyVariant]
    return (
      <EmptyState
        icon={preset?.icon ?? ClipboardList}
        title={
          preset?.title ??
          (role === 'teacher' ? 'Henüz atanmış ödev yok' : 'Bekleyen ödevin yok')
        }
        description={
          preset?.description ??
          (role === 'teacher'
            ? 'Bir öğrencine ilk ödevi atadığında burada listelenecek.'
            : 'Öğretmenin sana yeni bir ödev atadığında burada görünecek.')
        }
        compact
      />
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {error && <div className="sm:col-span-2"><Alert tone="danger">{error}</Alert></div>}
      {homeworks.map((hw) => {
        const overdue = isHomeworkOverdue(hw)
        const done = hw.status === 'Tamamlandı'
        const label = dueLabel(hw.due_date, done)

        return (
          <div
            key={hw.id}
            className={cn(
              'card-interactive group flex gap-3 p-5',
              done && 'border-success-100 bg-success-50/30',
              overdue && !done && 'border-danger-100'
            )}
          >
            <button
              type="button"
              onClick={() => toggleStatus(hw)}
              className="focus-ring mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full"
              aria-label={done ? 'Tamamlanmadı olarak işaretle' : 'Tamamlandı olarak işaretle'}
            >
              {done ? (
                <CheckCircle2 className="h-6 w-6 text-success-500" strokeWidth={2} />
              ) : (
                <Circle
                  className="h-6 w-6 text-ink/40 transition-colors group-hover:text-brand-400"
                  strokeWidth={2}
                />
              )}
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h4
                  className={cn(
                    'font-semibold leading-snug',
                    done ? 'text-ink/55 line-through' : 'text-ink'
                  )}
                >
                  {hw.title}
                </h4>
                {role === 'teacher' && (
                  <IconButton
                    icon={Trash2}
                    label="Ödevi sil"
                    size="lg"
                    onClick={() => handleDelete(hw.id)}
                    className="-mr-1 -mt-0.5 shrink-0 text-ink/45 hover:bg-danger-50 hover:text-danger-600 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
                  />
                )}
              </div>

              {showStudentName && hw.profiles?.full_name && (
                <p className="mt-1 text-xs font-semibold text-brand-600">{hw.profiles.full_name}</p>
              )}

              {hw.description && (
                <p
                  className={cn(
                    'mt-1.5 text-sm leading-relaxed',
                    done ? 'text-ink/45' : 'text-ink/60'
                  )}
                >
                  {hw.description}
                </p>
              )}

              {label && (
                <div className="mt-3">
                  <Badge
                    tone={overdue ? 'danger' : done ? 'success' : 'neutral'}
                    size="sm"
                    icon={CalendarClock}
                  >
                    {label}
                  </Badge>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
