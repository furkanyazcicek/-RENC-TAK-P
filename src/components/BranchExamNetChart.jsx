import { useMemo, useState } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { calcNet } from '../lib/examHelpers'

// Doğru/yanlış girilmişse net burada hesaplanır: veritabanındaki `net`
// generated column'u sabit /4 uygular, LGS'nin /3 katsayısını bilmez.
// Saklı değer yalnızca doğru/yanlışı olmayan eski kayıtlar için kullanılır.
// (Aynı kural BranchExamList#resolveNet içinde de geçerli.)
function resolveNet(exam) {
  if (exam.correct != null || exam.incorrect != null) {
    return calcNet(exam.correct, exam.incorrect, exam.exam_type)
  }
  return exam.net != null ? Number(exam.net) : null
}

export default function BranchExamNetChart({ exams }) {
  // Sadece net hesaplanabilen (doğru/yanlış girilmiş) branş denemeleri
  const netCapable = useMemo(
    () => (exams ?? []).filter((e) => resolveNet(e) != null),
    [exams]
  )

  const subjects = useMemo(() => {
    const set = new Set()
    netCapable.forEach((e) => set.add(e.topic))
    return Array.from(set).sort()
  }, [netCapable])

  const [subject, setSubject] = useState(null)
  const activeSubject = subject ?? subjects[0] ?? null

  const data = useMemo(() => {
    if (!activeSubject) return []
    return netCapable
      .filter((e) => e.topic === activeSubject)
      .sort((a, b) => new Date(a.exam_date) - new Date(b.exam_date))
      .map((e) => ({
        label: new Date(e.exam_date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }),
        net: resolveNet(e),
      }))
  }, [netCapable, activeSubject])

  if (subjects.length === 0) {
    return (
      <div className="h-56 grid place-items-center text-sm text-ink/55 text-center px-4">
        Henüz doğru/yanlış/boş girilmiş bir branş denemesi yok.
      </div>
    )
  }

  return (
    <div>
      <select
        value={activeSubject ?? ''}
        onChange={(e) => setSubject(e.target.value)}
        className="focus-ring rounded-lg border border-brand-100 bg-paper px-3 py-1.5 text-xs font-medium text-ink/70 mb-3"
      >
        {subjects.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E7E7F2" vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#6B6B85' }} axisLine={{ stroke: '#E7E7F2' }} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: '#6B6B85' }} axisLine={false} tickLine={false} width={32} />
          <Tooltip
            cursor={{ fill: '#F5F3FF' }}
            formatter={(value) => [value, 'Net']}
            contentStyle={{ borderRadius: 12, border: '1px solid #E7E7F2' }}
          />
          <Bar dataKey="net" radius={[6, 6, 0, 0]} maxBarSize={40} fill="#7C3AED" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
