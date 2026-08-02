export default function SubjectNetTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 text-sm text-ink/40">
        Henüz deneme sonucu girilmemiş.
      </div>
    )
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 overflow-x-auto">
      <table className="w-full text-sm min-w-[480px]">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-ink/40 border-b border-ink/5">
            <th className="px-4 py-3 font-semibold">Ders</th>
            <th className="px-4 py-3 font-semibold text-center">Deneme Sayısı</th>
            <th className="px-4 py-3 font-semibold text-center">Ortalama Net</th>
            <th className="px-4 py-3 font-semibold text-center">Toplam Net</th>
            <th className="px-4 py-3 font-semibold text-right">Net Başarı %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.subject} className="border-b border-ink/5 last:border-0">
              <td className="px-4 py-3 font-medium text-ink">{row.subject}</td>
              <td className="px-4 py-3 text-center text-ink/50">{row.examCount}</td>
              <td className="px-4 py-3 text-center font-semibold text-brand-600">{row.avgNet}</td>
              <td className="px-4 py-3 text-center text-ink/60">{row.totalNet}</td>
              <td className="px-4 py-3 text-right">
                <span
                  className={`font-semibold ${
                    row.success >= 75 ? 'text-good' : row.success >= 50 ? 'text-warn' : 'text-bad'
                  }`}
                >
                  %{row.success}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
