export default function DailyLogsList({ logs, readOnly, title, allowTeacherEdit, onEditClick }) {
  if (!logs || logs.length === 0) {
    return (
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
        <h3 className="font-display font-bold text-lg text-ink mb-2">{title || "Çalışma Geçmişi"}</h3>
        <p className="text-sm text-ink/40">Henüz çalışma kaydı bulunmuyor.</p>
      </div>
    )
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
      <h3 className="font-display font-bold text-lg text-ink mb-4">{title || "Çalışma Geçmişi"}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-ink/5">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-ink/50 uppercase">Tarih</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-ink/50 uppercase">Ders / Konu</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-ink/50 uppercase">Süre</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-ink/50 uppercase">D/Y/B</th>
              {allowTeacherEdit && <th className="px-4 py-2 text-right text-xs font-medium text-ink/50 uppercase">İşlem</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/5">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-ink/5 transition-colors">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-ink font-medium">
                  {new Date(log.study_date).toLocaleDateString('tr-TR')}
                </td>
                <td className="px-4 py-3 text-sm text-ink">
                  <span className="font-semibold">{log.subject}</span><br/>
                  <span className="text-xs text-ink/50">{log.topic}</span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-ink">{log.duration_minutes || 0} dk</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-ink">
                  <span className="text-good font-medium">{log.correct || 0} D</span> /{' '}
                  <span className="text-warn font-medium">{log.incorrect || 0} Y</span> /{' '}
                  <span className="text-ink/40">{log.empty || 0} B</span>
                </td>
                {allowTeacherEdit && (
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => onEditClick && onEditClick(log)}
                      className="text-brand-600 hover:text-brand-700 focus:outline-none bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-lg transition-colors text-xs font-bold"
                    >
                      Düzenle
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}