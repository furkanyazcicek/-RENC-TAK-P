import { useNavigate } from 'react-router-dom'

function formatDuration(minutes) {
  if (minutes == null) return null
  if (minutes < 60) return `${minutes} Dk`
  const hours = Math.floor(minutes / 60)
  const remaining = minutes % 60
  return remaining > 0 ? `${hours} Saat ${remaining} Dk` : `${hours} Saat`
}

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
            <th className="px-5 py-3 font-semibold hidden sm:table-cell">Toplam Çalışma Süresi</th>
            <th className="px-5 py-3 font-semibold hidden md:table-cell">Toplam Çözülen Soru</th>
            <th className="px-5 py-3" />
          </tr>
        </thead>
        <tbody>
          {students.map((s) => {
            const durationLabel = formatDuration(s.totalMinutes)
            return (
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
                  {durationLabel ? (
                    <span className="font-semibold text-brand-600">{durationLabel}</span>
                  ) : (
                    <span className="text-ink/30">Veri yok</span>
                  )}
                </td>
                <td className="px-5 py-3 hidden md:table-cell">
                  {s.totalSolved != null ? (
                    <span className="font-semibold text-ink/70">{s.totalSolved}</span>
                  ) : (
                    <span className="text-ink/30">—</span>
                  )}
                </td>
                <td className="px-5 py-3 text-right text-brand-500 font-medium">İncele →</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
