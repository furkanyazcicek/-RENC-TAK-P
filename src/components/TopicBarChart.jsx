import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function barColor(value) {
  if (value >= 75) return '#1E9E6E'
  if (value >= 50) return '#D9762B'
  return '#D14343'
}

export default function TopicBarChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 grid place-items-center text-sm text-ink/40">
        Henüz konu bazlı veri yok.
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E4E7F0" vertical={false} />
        <XAxis
          dataKey="topic"
          tick={{ fontSize: 12, fill: '#64708A' }}
          axisLine={{ stroke: '#E4E7F0' }}
          tickLine={false}
        />
        <YAxis
          domain={[0, 100]}
          tick={{ fontSize: 12, fill: '#64708A' }}
          axisLine={false}
          tickLine={false}
          width={36}
        />
        <Tooltip
          cursor={{ fill: '#EEF2FC' }}
          formatter={(value) => [`%${value}`, 'Başarı']}
          contentStyle={{ borderRadius: 12, border: '1px solid #E4E7F0' }}
        />
        <Bar dataKey="success" radius={[8, 8, 0, 0]} maxBarSize={48}>
          {data.map((entry, i) => (
            <Cell key={i} fill={barColor(entry.success)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
