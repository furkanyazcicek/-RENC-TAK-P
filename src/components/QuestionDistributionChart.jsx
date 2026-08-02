import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const COLORS = ['#3253C3', '#D9A441', '#1E9E6E', '#D9762B', '#7F9AE6', '#B3822B', '#4F6FD6', '#D14343']

export default function QuestionDistributionChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 grid place-items-center text-sm text-ink/40">
        Henüz soru çözüm verisi girilmemiş.
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={2}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name) => [`${value} soru`, name]}
          contentStyle={{ borderRadius: 12, border: '1px solid #E4E7F0' }}
        />
        <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: 12 }} />
      </PieChart>
    </ResponsiveContainer>
  )
}
