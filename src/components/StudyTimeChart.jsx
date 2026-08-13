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

export default function StudyTimeChart({ logs, days = 14, onBarClick, selectedDate }) {
  const today = new Date()
  const buckets = []
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    buckets.push({
      date: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }),
      minutes: 0,
    })
  }

  ;(logs ?? []).forEach((log) => {
    const bucket = buckets.find((b) => b.date === log.study_date)
    if (bucket) bucket.minutes += log.duration_minutes || 0
  })

  return (
    <>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={buckets} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="label" {...xAxisProps} interval={1} />
          <YAxis {...yAxisProps} width={32} />
          <Tooltip {...tooltipProps} formatter={(value) => [`${value} dk`, 'Çalışma']} />
          <Bar
            {...barProps}
            dataKey="minutes"
            onClick={(data) => onBarClick?.(data)}
            style={{ cursor: onBarClick ? 'pointer' : 'default' }}
          >
            {buckets.map((b) => (
              <Cell key={b.date} fill={b.date === selectedDate ? HIGHLIGHT : BRAND} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {onBarClick && (
        <p className="text-xs text-ink/50 text-center mt-1">
          Detayları görmek için bir sütuna tıkla
        </p>
      )}
    </>
  )
}
