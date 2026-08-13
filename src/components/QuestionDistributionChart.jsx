import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const COLORS = ['#7C3AED', '#EC4899', '#059669', '#D97706', '#A78BFA', '#DB2777', '#8B5CF6', '#E11D48']

export default function QuestionDistributionChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 grid place-items-center text-sm text-ink/55">
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
          contentStyle={{ borderRadius: 12, border: '1px solid #E7E7F2' }}
        />
        <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: 12 }} />
      </PieChart>
    </ResponsiveContainer>
  )
}
