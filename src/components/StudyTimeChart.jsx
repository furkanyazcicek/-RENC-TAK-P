import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function StudyTimeChart({ logs, days = 14, onBarClick, selectedDate }) {
  const today = new Date()
  const buckets = []
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    buckets.push({ date: d.toISOString().slice(0, 10), label: d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }), minutes: 0 })
  }

  ;(logs ?? []).forEach((log) => {
    const bucket = buckets.find((b) => b.date === log.study_date)
    if (bucket) bucket.minutes += log.duration_minutes || 0
  })

  return (
    <>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={buckets} margin={{ top: 8, right: 8, left: -16, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E4E7F0" vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#64708A' }} axisLine={{ stroke: '#E4E7F0' }} tickLine={false} interval={1} />
          <YAxis tick={{ fontSize: 12, fill: '#64708A' }} axisLine={false} tickLine={false} width={32} />
          <Tooltip
            cursor={{ fill: '#EEF2FC' }}
            formatter={(value) => [`${value} dk`, 'Çalışma']}
            contentStyle={{ borderRadius: 12, border: '1px solid #E4E7F0' }}
          />
          <Bar
            dataKey="minutes"
            radius={[6, 6, 0, 0]}
            maxBarSize={28}
            onClick={(data) => onBarClick?.(data)}
            style={{ cursor: onBarClick ? 'pointer' : 'default' }}
          >
            {buckets.map((b) => (
              <Cell key={b.date} fill={b.date === selectedDate ? '#D9A441' : '#3253C3'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {onBarClick && (
        <p className="text-xs text-ink/30 text-center mt-1">Detayları görmek için bir sütuna tıkla</p>
      )}
    </>
  )
}
