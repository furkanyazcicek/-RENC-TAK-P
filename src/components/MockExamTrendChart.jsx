import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function MockExamTrendChart({ exams }) {
  const data = [...(exams ?? [])]
    .sort((a, b) => new Date(a.exam_date) - new Date(b.exam_date))
    .map((exam) => {
      const totalNet = exam.mock_exam_subjects?.reduce((sum, s) => sum + Number(s.net || 0), 0) ?? 0
      return {
        label: new Date(exam.exam_date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }),
        net: Math.round(totalNet * 100) / 100,
      }
    })

  if (data.length === 0) {
    return (
      <div className="h-64 grid place-items-center text-sm text-ink/40">
        Trend görebilmek için en az bir deneme sonucu gerekiyor.
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
        <YAxis tick={{ fontSize: 12, fill: '#64708A' }} axisLine={false} tickLine={false} width={36} />
        <Tooltip
          formatter={(value) => [value, 'Toplam Net']}
          contentStyle={{ borderRadius: 12, border: '1px solid #E4E7F0' }}
        />
        <Line
          type="monotone"
          dataKey="net"
          stroke="#D9A441"
          strokeWidth={3}
          dot={{ r: 4, fill: '#D9A441' }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
