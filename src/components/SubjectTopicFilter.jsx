import { useMemo, useState } from 'react'

// questions dizisinden Ders -> Konu filtreleme state'ini ve daraltılmış
// listeyi üreten paylaşılan hook. Hem öğretmen gelen kutusunda hem
// öğrencinin kendi soru arşivinde aynı davranış için kullanılır.
export function useSubjectTopicFilter(questions) {
  const [subject, setSubject] = useState(null)
  const [topic, setTopic] = useState(null)

  const subjects = useMemo(() => {
    const set = new Set()
    ;(questions ?? []).forEach((q) => q.subject && set.add(q.subject))
    return Array.from(set).sort()
  }, [questions])

  const topics = useMemo(() => {
    if (!subject) return []
    const set = new Set()
    ;(questions ?? []).forEach((q) => q.subject === subject && q.topic && set.add(q.topic))
    return Array.from(set).sort()
  }, [questions, subject])

  const filtered = useMemo(() => {
    return (questions ?? []).filter((q) => {
      if (subject && q.subject !== subject) return false
      if (topic && q.topic !== topic) return false
      return true
    })
  }, [questions, subject, topic])

  function selectSubject(s) {
    setSubject(s)
    setTopic(null) // ders değişince konu seçimi sıfırlanır
  }

  return { subject, topic, subjects, topics, filtered, selectSubject, selectTopic: setTopic }
}

export default function SubjectTopicFilter({ subject, topic, subjects, topics, onSelectSubject, onSelectTopic }) {
  if (subjects.length === 0) return null

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold text-ink/40 mr-1">Ders:</span>
        <button
          onClick={() => onSelectSubject(null)}
          className={`focus-ring rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
            !subject ? 'bg-brand-500 text-white' : 'bg-ink/5 text-ink/50 hover:bg-ink/10'
          }`}
        >
          Tümü
        </button>
        {subjects.map((s) => (
          <button
            key={s}
            onClick={() => onSelectSubject(s)}
            className={`focus-ring rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
              subject === s ? 'bg-brand-500 text-white' : 'bg-ink/5 text-ink/50 hover:bg-ink/10'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {subject && topics.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-ink/40 mr-1">Konu:</span>
          <button
            onClick={() => onSelectTopic(null)}
            className={`focus-ring rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
              !topic ? 'bg-accent-500 text-white' : 'bg-ink/5 text-ink/50 hover:bg-ink/10'
            }`}
          >
            Tümü
          </button>
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => onSelectTopic(t)}
              className={`focus-ring rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                topic === t ? 'bg-accent-500 text-white' : 'bg-ink/5 text-ink/50 hover:bg-ink/10'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
