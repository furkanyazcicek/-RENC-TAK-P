import { useEffect, useMemo, useState } from 'react'
import { cn } from '../lib/cn'
import { colorForKey } from '../lib/chartTheme'

/**
 * questions dizisinden Ders -> Konu filtreleme state'ini ve daraltılmış
 * listeyi üreten paylaşılan hook. Hem öğretmen gelen kutusunda hem
 * öğrencinin kendi soru arşivinde aynı davranış için kullanılır.
 */
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

  function reset() {
    setSubject(null)
    setTopic(null)
  }

  // Seçili ders, listede artık yoksa filtre kendini bırakır. Aksi halde
  // (ör. sekme değişince) filtre şeridi ekrandan kalkar ama seçim state'te
  // kalır; kullanıcı boş bir listeye bakar ve geri dönecek düğme bulamaz.
  useEffect(() => {
    if (subject && !subjects.includes(subject)) reset()
  }, [subject, subjects])

  return {
    subject,
    topic,
    subjects,
    topics,
    filtered,
    selectSubject,
    selectTopic: setTopic,
    reset,
  }
}

/**
 * Chip — filtre şeridindeki tek bir seçenek.
 * Seçili değilken dersin sabit rengi küçük bir nokta olarak taşınır; metin
 * her zaman ink tonlarında kalır, böylece kontrast garanti olur.
 */
function Chip({ active, dotColor, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'focus-ring inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-150',
        active
          ? 'bg-brand-500 text-white shadow-xs'
          : 'bg-surface-sunken text-ink/60 hover:bg-ink/[0.08] hover:text-ink'
      )}
    >
      {dotColor && !active && (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: dotColor }}
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  )
}

export default function SubjectTopicFilter({
  subject,
  topic,
  subjects,
  topics,
  onSelectSubject,
  onSelectTopic,
  counts = {},
}) {
  if (!subjects || subjects.length === 0) return null

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-0.5 text-2xs font-bold uppercase tracking-wider text-ink/55">Ders</span>
        <Chip active={!subject} onClick={() => onSelectSubject(null)}>
          Tümü
        </Chip>
        {subjects.map((s) => (
          <Chip
            key={s}
            active={subject === s}
            dotColor={colorForKey(s)}
            onClick={() => onSelectSubject(s)}
          >
            {s}
            {counts[s] != null && (
              <span className={cn('font-bold', subject === s ? 'text-white/70' : 'text-ink/50')}>
                {counts[s]}
              </span>
            )}
          </Chip>
        ))}
      </div>

      {subject && topics.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3">
          <span className="mr-0.5 text-2xs font-bold uppercase tracking-wider text-ink/55">
            Konu
          </span>
          <Chip active={!topic} onClick={() => onSelectTopic(null)}>
            Tümü
          </Chip>
          {topics.map((t) => (
            <Chip key={t} active={topic === t} onClick={() => onSelectTopic(t)}>
              {t}
            </Chip>
          ))}
        </div>
      )}
    </div>
  )
}
