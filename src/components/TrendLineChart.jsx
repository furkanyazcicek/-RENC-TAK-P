import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function TrendLineChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 grid place-items-center text-sm text-ink/40">
        Henüz deneme sonucu girilmemiş.
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={{ top: 8, right: 16, left: -16, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E4E7F0" vertical={false} />
        <XAxis
          dataKey="label"
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
          formatter={(value) => [`%${value}`, 'Net başarı']}
          contentStyle={{ borderRadius: 12, border: '1px solid #E4E7F0' }}
        />
        <Line
          type="monotone"
          dataKey="success"
          stroke="#3253C3"
          strokeWidth={3}
          dot={{ r: 4, fill: '#3253C3' }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
