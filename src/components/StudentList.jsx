import { useNavigate } from 'react-router-dom'

export default function StudentList({ students }) {
  const navigate = useNavigate()

  if (!students || students.length === 0) {
    return (
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 text-sm text-ink/40">
        Sisteme kayıtlı öğrenci bulunamadı.
      </div>
    )
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-ink/40 border-b border-brand-50">
            <th className="px-5 py-3 font-semibold">Öğrenci</th>
            <th className="px-5 py-3 font-semibold hidden sm:table-cell">Ortalama Başarı</th>
            <th className="px-5 py-3 font-semibold hidden md:table-cell">En Zayıf Konu</th>
            <th className="px-5 py-3" />
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr
              key={s.id}
              onClick={() => navigate(`/ogretmen/ogrenci/${s.id}`)}
              className="cursor-pointer border-b border-brand-50 last:border-0 hover:bg-brand-50/60 transition-colors"
            >
              <td className="px-5 py-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-brand-500 text-white grid place-items-center text-xs font-semibold font-display flex-shrink-0">
                  {s.full_name?.charAt(0)?.toUpperCase() ?? '?'}
                </div>
                <span className="font-medium text-ink">{s.full_name}</span>
              </td>
              <td className="px-5 py-3 hidden sm:table-cell">
                {s.average != null ? (
                  <span
                    className={
                      s.average >= 75
                        ? 'text-good font-semibold'
                        : s.average >= 50
                        ? 'text-warn font-semibold'
                        : 'text-bad font-semibold'
                    }
                  >
                    %{s.average}
                  </span>
                ) : (
                  <span className="text-ink/30">Veri yok</span>
                )}
              </td>
              <td className="px-5 py-3 hidden md:table-cell text-ink/60">
                {s.weakestTopic ?? '—'}
              </td>
              <td className="px-5 py-3 text-right text-brand-500 font-medium">İncele →</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
