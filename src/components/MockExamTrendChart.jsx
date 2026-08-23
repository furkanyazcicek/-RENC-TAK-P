import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { TrendingUp } from 'lucide-react'
import { EmptyState } from './ui'
import {
  BRAND,
  chartMargin,
  gridProps,
  lineProps,
  lineTooltipProps,
  STATUS,
  xAxisProps,
  yAxisProps,
} from '../lib/chartTheme'

/**
 * MockExamTrendChart — deneme netlerinin zaman içindeki seyri.
 *
 * Renk ve eksen ayarları `lib/chartTheme` üzerinden gelir; bu dosyada
 * hex kodu yoktur (bkz. DESIGN_SYSTEM.md § Grafikler).
 *
 * Ortalama çizgisi bilinçli olarak eklendi: tek başına bir çizgi "iyi mi
 * kötü mü" sorusunu cevaplamaz, ortalamaya göre konum cevaplar.
 */
export default function MockExamTrendChart({ exams, height = 280 }) {
  const data = [...(exams ?? [])]
    .sort((a, b) => new Date(a.exam_date) - new Date(b.exam_date))
    .map((exam) => {
      const totalNet = exam.mock_exam_subjects?.reduce((sum, s) => sum + Number(s.net || 0), 0) ?? 0
      return {
        label: new Date(exam.exam_date).toLocaleDateString('tr-TR', {
          day: 'numeric',
          month: 'short',
        }),
        name: exam.exam_name || exam.exam_type,
        net: Math.round(totalNet * 100) / 100,
      }
    })

  if (data.length === 0) {
    return (
      <EmptyState
        icon={TrendingUp}
        title="Gelişim çizgisi için deneme gerekiyor"
        description="İlk deneme sonucunu girdiğinde netlerin buraya işlenmeye başlar."
        compact
      />
    )
  }

  const average =
    Math.round((data.reduce((s, d) => s + d.net, 0) / data.length) * 100) / 100

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={chartMargin}>
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="label" {...xAxisProps} />
        <YAxis {...yAxisProps} />
        <Tooltip
          {...lineTooltipProps}
          formatter={(value) => [value, 'Toplam net']}
          labelFormatter={(label, payload) => payload?.[0]?.payload?.name ?? label}
        />
        {data.length > 1 && (
          <ReferenceLine
            y={average}
            stroke={STATUS.neutral}
            strokeDasharray="4 4"
            strokeWidth={1.25}
            label={{
              value: `ort. ${average.toLocaleString('tr-TR')}`,
              position: 'insideTopRight',
              fill: STATUS.neutral,
              fontSize: 11,
            }}
          />
        )}
        <Line {...lineProps} dataKey="net" stroke={BRAND} />
      </LineChart>
    </ResponsiveContainer>
  )
}
