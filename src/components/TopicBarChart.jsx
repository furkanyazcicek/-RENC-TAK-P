import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function barColor(value) {
  if (value >= 75) return '#059669'
  if (value >= 50) return '#D97706'
  return '#E11D48'
}

export default function TopicBarChart({ data, tooltipLabel = 'Başarı', emptyText = 'Henüz konu bazlı veri yok.' }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 grid place-items-center text-sm text-ink/55">
        {emptyText}
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E7E7F2" vertical={false} />
        <XAxis
          dataKey="topic"
          tick={{ fontSize: 12, fill: '#6B6B85' }}
          axisLine={{ stroke: '#E7E7F2' }}
          tickLine={false}
        />
        <YAxis
          domain={[0, 100]}
          tick={{ fontSize: 12, fill: '#6B6B85' }}
          axisLine={false}
          tickLine={false}
          width={36}
        />
        <Tooltip
          cursor={{ fill: '#F5F3FF' }}
          formatter={(value) => [`%${value}`, tooltipLabel]}
          contentStyle={{ borderRadius: 12, border: '1px solid #E7E7F2' }}
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
