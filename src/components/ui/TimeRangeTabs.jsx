import { Calendar, CalendarDays, CalendarRange, Sun } from 'lucide-react'
import { cn } from '../../lib/cn'

const ICONS = {
  day: Sun,
  week: CalendarDays,
  month: CalendarRange,
  year: Calendar,
}

/**
 * Analiz zaman aralığı seçicisi. Radyo grubu davranışı sayesinde ok
 * tuşlarıyla da kullanılabilir; hareket yalnız CSS ile yapılır.
 */
export default function TimeRangeTabs({ options, value, onChange, className }) {
  const activeIndex = Math.max(0, options.findIndex((option) => option.value === value))

  function handleKeyDown(event, index) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    let next = index
    if (event.key === 'ArrowLeft') next = (index - 1 + options.length) % options.length
    if (event.key === 'ArrowRight') next = (index + 1) % options.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = options.length - 1
    onChange(options[next].value)
    document.getElementById(`analytics-range-${options[next].value}`)?.focus()
  }

  return (
    <div className={cn('analytics-range-shell', className)}>
      <div className="analytics-range-copy">
        <span>Görünüm aralığı</span>
        <strong>{options[activeIndex]?.description}</strong>
      </div>
      <div
        className="analytics-range-tabs"
        role="radiogroup"
        aria-label="Analiz zaman aralığı"
        style={{ '--range-count': options.length, '--range-index': activeIndex }}
      >
        <span className="analytics-range-thumb" aria-hidden="true" />
        {options.map((option, index) => {
          const Icon = ICONS[option.value] ?? CalendarDays
          const active = option.value === value
          return (
            <button
              key={option.value}
              id={`analytics-range-${option.value}`}
              type="button"
              role="radio"
              aria-checked={active}
              tabIndex={active ? 0 : -1}
              onClick={() => onChange(option.value)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn('analytics-range-option', active && 'is-active')}
            >
              <Icon aria-hidden="true" />
              <span>{option.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
