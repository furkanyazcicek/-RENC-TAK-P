import { useMemo } from 'react'
import { splitSubjectTopic } from '../lib/topicHelpers'

// dailyLogs içindeki benzersiz Ders ve (seçili derse bağlı) Konu listesini
// çıkarıp iki adet birbirine bağlı <select> render eder.
export default function DependentSubjectTopicSelect({ logs, subject, topic, onSubjectChange, onTopicChange }) {
  const subjects = useMemo(() => {
    const set = new Set()
    ;(logs ?? []).forEach((log) => set.add(splitSubjectTopic(log.topic).subject))
    return Array.from(set).sort()
  }, [logs])

  const topics = useMemo(() => {
    if (!subject) return []
    const set = new Set()
    ;(logs ?? []).forEach((log) => {
      const s = splitSubjectTopic(log.topic)
      if (s.subject === subject) set.add(s.topic)
    })
    return Array.from(set).sort()
  }, [logs, subject])

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <select
        value={subject ?? ''}
        onChange={(e) => onSubjectChange(e.target.value || null)}
        className="focus-ring rounded-lg border border-brand-100 bg-paper px-3 py-1.5 text-xs font-medium text-ink/70"
      >
        <option value="">Tüm Dersler</option>
        {subjects.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        value={topic ?? ''}
        onChange={(e) => onTopicChange(e.target.value || null)}
        disabled={!subject}
        className="focus-ring rounded-lg border border-brand-100 bg-paper px-3 py-1.5 text-xs font-medium text-ink/70 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <option value="">Tüm Konular</option>
        {topics.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  )
}
