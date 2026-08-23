import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { BRAND, chartMargin, gridProps, lineProps, lineTooltipProps, xAxisProps, yAxisProps } from '../lib/chartTheme'

export default function TrendLineChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 grid place-items-center text-sm text-ink/55">
        Henüz deneme sonucu girilmemiş.
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={chartMargin}>
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="label" {...xAxisProps} />
        <YAxis domain={[0, 100]} {...yAxisProps} />
        <Tooltip {...lineTooltipProps} formatter={(value) => [`%${value}`, 'Net başarı']} />
        <Line
          {...lineProps}
          dataKey="success"
          stroke={BRAND}
          dot={{ ...lineProps.dot, fill: BRAND }}
          activeDot={{ ...lineProps.activeDot, fill: BRAND }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
