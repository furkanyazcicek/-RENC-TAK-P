import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import {
  BRAND,
  HIGHLIGHT,
  barProps,
  chartMargin,
  gridProps,
  tooltipProps,
  xAxisProps,
  yAxisProps,
} from '../lib/chartTheme'

const RANGE_DAYS = { day: 1, week: 7, month: 30 }

function localDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export default function StudyTimeChart({ logs, range = 'week', onBarClick, selectedDate }) {
  const today = new Date()
  const buckets = []

  if (range === 'year') {
    for (let i = 11; i >= 0; i -= 1) {
      const month = new Date(today.getFullYear(), today.getMonth() - i, 1)
      buckets.push({
        date: `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}`,
        label: month.toLocaleDateString('tr-TR', { month: 'short' }),
        minutes: 0,
        monthBucket: true,
      })
    }
  } else {
    const days = RANGE_DAYS[range] ?? 7
    for (let i = days - 1; i >= 0; i -= 1) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      buckets.push({
        date: localDateKey(date),
        label: range === 'day' ? 'Bugün' : date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }),
        minutes: 0,
        monthBucket: false,
      })
    }
  }

  ;(logs ?? []).forEach((log) => {
    const key = range === 'year' ? log.study_date?.slice(0, 7) : log.study_date
    const bucket = buckets.find((b) => b.date === key)
    if (bucket) bucket.minutes += log.duration_minutes || 0
  })

  const xInterval = range === 'month' ? 4 : 0
  const canOpenDay = range !== 'year' && typeof onBarClick === 'function'

  return (
    <>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={buckets} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="label" {...xAxisProps} interval={xInterval} />
          <YAxis {...yAxisProps} width={32} />
          <Tooltip {...tooltipProps} formatter={(value) => [`${value} dk`, 'Çalışma']} />
          <Bar
            {...barProps}
            dataKey="minutes"
            onClick={(data) => canOpenDay && onBarClick?.(data)}
            style={{ cursor: canOpenDay ? 'pointer' : 'default' }}
          >
            {buckets.map((b) => (
              <Cell key={b.date} fill={b.date === selectedDate ? HIGHLIGHT : BRAND} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {canOpenDay && (
        <p className="text-xs text-ink/50 text-center mt-1">
          Detayları görmek için bir sütuna tıkla
        </p>
      )}
    </>
  )
}
