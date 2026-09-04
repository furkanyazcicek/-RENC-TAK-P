import { useState } from 'react'
import {
  Atom,
  BookOpenText,
  Brain,
  Calculator,
  Dna,
  Earth,
  FlaskConical,
  Languages,
  Landmark,
  Library,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { colorForKey } from '../../lib/chartTheme'
import SoftIcon from '../ui/SoftIcon'

function subjectVisual(subject = '') {
  const key = subject.toLocaleLowerCase('tr-TR')
  if (key.includes('matematik') || key.includes('geometri')) return { Icon: Calculator, tone: 'amber' }
  if (key.includes('fizik')) return { Icon: Atom, tone: 'sky' }
  if (key.includes('kimya')) return { Icon: FlaskConical, tone: 'aqua' }
  if (key.includes('biyoloji') || key.includes('fen')) return { Icon: Dna, tone: 'sage' }
  if (key.includes('coğraf')) return { Icon: Earth, tone: 'teal' }
  if (key.includes('tarih')) return { Icon: Landmark, tone: 'coral' }
  if (key.includes('ingiliz') || key.includes('almanca') || key.includes('dil')) return { Icon: Languages, tone: 'indigo' }
  if (key.includes('felsefe') || key.includes('psikoloji')) return { Icon: Brain, tone: 'rose' }
  if (key.includes('türk') || key.includes('edebiyat')) return { Icon: BookOpenText, tone: 'peach' }
  return { Icon: Library, tone: 'slate' }
}

/**
 * SubjectBars — ders bazlı dağılım / başarı çubukları.
 *
 * Her ders sabit bir renk alır (aynı ders her panelde aynı renkte görünür).
 * İmleçle bir satırın üzerine gelince o ders öne çıkar, diğerleri soluklaşır
 * ve varsa isabet oranı belirir.
 */
export default function SubjectBars({
  data = [],
  valueKey = 'pct',
  showAccuracy = true,
  unit = 'soru',
  emptyText = 'Henüz kayıt bulunmuyor.',
  className,
}) {
  const [hovered, setHovered] = useState(null)

  if (!data.length) {
    return <p className="text-sm text-ink/55 py-2">{emptyText}</p>
  }

  return (
    <div className={cn('flex flex-col gap-3.5', className)}>
      {data.map((d, i) => {
        const pct = Math.max(0, Math.min(100, Number(d[valueKey]) || 0))
        const color = d.color ?? colorForKey(d.subject)
        const isHovered = hovered === i
        const { Icon, tone } = subjectVisual(d.subject)

        return (
          <div
            key={d.subject}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              'cursor-default transition-opacity duration-200',
              hovered != null && !isHovered ? 'opacity-45' : 'opacity-100'
            )}
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <span
                className={cn(
                  'flex min-w-0 items-center gap-2.5 text-sm font-semibold transition-colors',
                  isHovered ? 'text-ink' : 'text-ink/82'
                )}
              >
                <SoftIcon icon={Icon} tone={tone} size="xs" />
                <span className="truncate">{d.subject}</span>
              </span>

              <span className="shrink-0 text-sm font-bold tabular text-ink">
                %{pct}
                <span className="ml-1 font-normal text-ink/50">
                  · {d.solved ?? d.count} {unit}
                </span>
              </span>
            </div>

            <div className="subject-soft-track h-2.5 w-full overflow-hidden rounded-full">
              <div
                className="subject-soft-bar h-full rounded-full transition-all duration-500 ease-smooth"
                style={{
                  width: `${pct}%`,
                  '--subject-color': color,
                  transform: isHovered ? 'scaleY(1.25)' : 'scaleY(1)',
                  boxShadow: isHovered ? `0 4px 14px ${color}38` : 'none',
                }}
              />
            </div>

            {showAccuracy && d.accuracy != null && (
              <p
                className={cn(
                  'mt-1 text-2xs font-medium transition-opacity duration-200',
                  isHovered ? 'opacity-100' : 'opacity-0'
                )}
              >
                <span className="text-ink/55">İsabet oranı </span>
                <span
                  className={cn(
                    'font-bold',
                    d.accuracy >= 75
                      ? 'text-success-600'
                      : d.accuracy >= 55
                        ? 'text-brand-600'
                        : 'text-warning-600'
                  )}
                >
                  %{d.accuracy}
                </span>
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
