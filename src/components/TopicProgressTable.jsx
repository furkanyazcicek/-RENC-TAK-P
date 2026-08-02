function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })
}

export default function TopicProgressTable({ stats }) {
  if (!stats || stats.length === 0) {
    return (
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 text-sm text-ink/40">
        Konu bazlı gelişimi görebilmek için günlük çalışma kaydı gerekiyor.
      </div>
    )
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 overflow-x-auto">
      <table className="w-full text-sm min-w-[560px]">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-ink/40 border-b border-brand-50">
            <th className="px-4 py-3 font-semibold">Ders</th>
            <th className="px-4 py-3 font-semibold">Konu</th>
            <th className="px-4 py-3 font-semibold text-center">Çalışma</th>
            <th className="px-4 py-3 font-semibold text-center text-good">D</th>
            <th className="px-4 py-3 font-semibold text-center text-bad">Y</th>
            <th className="px-4 py-3 font-semibold text-center">Başarı</th>
            <th className="px-4 py-3 font-semibold text-right">Son Çalışma</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((row) => (
            <tr key={row.key} className="border-b border-brand-50 last:border-0">
              <td className="px-4 py-3 text-ink/70">{row.subject}</td>
              <td className="px-4 py-3 font-medium text-ink">{row.topic}</td>
              <td className="px-4 py-3 text-center text-ink/50">{row.sessions}</td>
              <td className="px-4 py-3 text-center text-good font-medium">{row.correct}</td>
              <td className="px-4 py-3 text-center text-bad font-medium">{row.incorrect}</td>
              <td className="px-4 py-3 text-center">
                {row.accuracy != null ? (
                  <span
                    className={`font-semibold ${
                      row.accuracy >= 75 ? 'text-good' : row.accuracy >= 50 ? 'text-warn' : 'text-bad'
                    }`}
                  >
                    %{row.accuracy}
                  </span>
                ) : (
                  <span className="text-ink/30">—</span>
                )}
              </td>
              <td className="px-4 py-3 text-right text-ink/40">{formatDate(row.lastDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
