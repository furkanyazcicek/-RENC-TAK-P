import { useState } from 'react'
import { cn } from '../../lib/cn'
import { formatMinutes } from '../../lib/insights'

/**
 * ActivityStrip — son N günün çalışma yoğunluğunu tek satırda gösterir.
 *
 * Her gün bir kare; koyulaştıkça o gün daha çok çalışılmış demektir.
 * Bir grafik kadar yer kaplamadan "düzenli mi çalışıyor" sorusunu
 * tek bakışta cevaplar — panelin en çok konuşulan parçası genelde budur.
 */

/* Yoğunluk merdiveni — Aurora morunun açıktan koyuya tek hue'su.
   Tek hue kullanılır çünkü buradaki fark "daha çok / daha az", kategori değil. */
const LEVEL_CLASSES = [
  'bg-surface-sunken ring-1 ring-inset ring-line',
  'bg-brand-200',
  'bg-brand-400',
  'bg-brand-600',
  'bg-brand-800',
]

function levelFor(minutes, max) {
  if (!minutes) return 0
  if (max <= 0) return 0
  const ratio = minutes / max
  if (ratio > 0.75) return 4
  if (ratio > 0.5) return 3
  if (ratio > 0.25) return 2
  return 1
}

export default function ActivityStrip({ days = [], periodLabel, activeUnitLabel = 'günde', className }) {
  const [hovered, setHovered] = useState(null)
  const max = Math.max(...days.map((d) => d.minutes), 0)
  const activeCount = days.filter((d) => d.minutes > 0).length

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <div className="relative flex items-end gap-[3px] sm:gap-1">
        {days.map((d, i) => {
          const level = levelFor(d.minutes, max)
          const isHovered = hovered === i
          return (
            <div
              key={d.date}
              className="relative flex-1 min-w-0"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Balon */}
              <div
                className={cn(
                  'pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap',
                  'rounded-lg bg-ink px-2 py-1 text-center shadow-lg transition-all duration-150',
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                )}
              >
                <p className="text-2xs font-bold text-white leading-tight">
                  {d.minutes ? formatMinutes(d.minutes) : 'Çalışma yok'}
                </p>
                <p className="text-[9px] font-medium text-white/50 leading-tight">
                  {d.label}
                  {d.solved ? ` · ${d.solved} soru` : ''}
                </p>
              </div>

              <div
                className={cn(
                  'h-8 w-full rounded-md transition-all duration-200 cursor-default',
                  LEVEL_CLASSES[level],
                  isHovered && 'ring-2 ring-brand-400 ring-offset-1 ring-offset-surface scale-105'
                )}
              />
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-between gap-3 text-2xs text-ink/55">
        <span>
          {periodLabel ?? `Son ${days.length} gün`} içinde{' '}
          <strong className="font-bold text-ink/60">{activeCount}</strong> {activeUnitLabel} çalışma kaydı var
        </span>
        <span className="hidden xs:flex items-center gap-1.5">
          az
          {LEVEL_CLASSES.map((c) => (
            <span key={c} className={cn('h-2.5 w-2.5 rounded-sm', c)} aria-hidden="true" />
          ))}
          çok
        </span>
      </div>
    </div>
  )
}
