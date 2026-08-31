import { useEffect, useState } from 'react'
import { ClipboardList, HelpCircle, Loader2, Lock, Save, Target, TrendingDown } from 'lucide-react'
import { supabase } from '../../lib/supabaseClient'
import { Alert, Badge, Button, Field, Textarea } from '../ui'
import { accuracy, formatMinutes, totals } from '../../lib/insights'
import { splitSubjectTopic } from '../../lib/topicHelpers'
import { fetchPrivateNote, savePrivateNote } from '../../lib/liveLesson/api'
import { formatLessonDate } from '../../lib/liveLesson/time'

/**
 * Öğretmenin ders sırasında açtığı öğrenci bağlamı.
 *
 * ÇEKMECE, KALICI SÜTUN DEĞİL: bu paneli sürekli açık bir yan sütun
 * yapmak tahtanın alanını daraltırdı. Öğretmen "bu çocuk son denemede
 * neyi kaçırmıştı" diye merak ettiği an açar, kapatır.
 *
 * ÖZEL NOT: burada düzenlenen not `lesson_private_notes` tablosuna gider.
 * O tabloda öğrenciye tek satır bile açan bir politika YOKTUR — öğrenci
 * ekranında bu notu yükleyen hiçbir sorgu da bulunmaz.
 */
export default function StudentContextPanel({ sessionId, teacherId, studentId, studentName }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [note, setNote] = useState('')
  const [savingNote, setSavingNote] = useState(false)
  const [noteState, setNoteState] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    async function load() {
      const since = new Date(Date.now() - 45 * 86400000).toISOString().slice(0, 10)
      const [logs, exams, homeworks, questions, previous, privateNote] = await Promise.all([
        supabase
          .from('daily_logs')
          .select('study_date, topic, duration_minutes, correct, incorrect, empty')
          .eq('student_id', studentId)
          .gte('study_date', since)
          .order('study_date', { ascending: false }),
        supabase
          .from('mock_exams')
          .select('id, exam_type, exam_name, exam_date, mock_exam_subjects(subject, correct, incorrect, empty, net)')
          .eq('student_id', studentId)
          .order('exam_date', { ascending: false })
          .limit(3),
        supabase
          .from('homeworks')
          .select('id, title, status, due_date')
          .eq('student_id', studentId)
          .order('created_at', { ascending: false })
          .limit(5),
        supabase
          .from('questions')
          .select('id, content, status, subject, topic')
          .eq('student_id', studentId)
          .neq('status', 'Çözüldü')
          .order('created_at', { ascending: false })
          .limit(5),
        supabase
          .from('lesson_summaries')
          .select('lesson_session_id, covered_topics, next_goal, public_note, updated_at')
          .eq('student_id', studentId)
          .neq('lesson_session_id', sessionId)
          .order('updated_at', { ascending: false })
          .limit(1)
          .maybeSingle(),
        fetchPrivateNote(sessionId).catch(() => null),
      ])

      if (cancelled) return
      setData({
        logs: logs.data ?? [],
        exams: exams.data ?? [],
        homeworks: homeworks.data ?? [],
        questions: questions.data ?? [],
        previous: previous.data ?? null,
      })
      setNote(privateNote?.prep_note ?? '')
      setLoading(false)
    }

    load().catch(() => {
      if (!cancelled) setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [studentId, sessionId])

  async function handleSaveNote() {
    setSavingNote(true)
    setNoteState(null)
    try {
      await savePrivateNote(sessionId, teacherId, { prep_note: note.trim() || null })
      setNoteState({ tone: 'success', text: 'Özel not kaydedildi.' })
    } catch (err) {
      setNoteState({ tone: 'danger', text: err.message })
    } finally {
      setSavingNote(false)
    }
  }

  if (loading) {
    return (
      <p className="flex items-center gap-2 py-6 text-sm text-ink/55">
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        {studentName} verisi yükleniyor…
      </p>
    )
  }

  const logTotals = totals(data.logs)
  const rate = accuracy(data.logs)

  /* Zayıf konular: son 45 günde isabet oranı en düşük üç konu. */
  const byTopic = new Map()
  for (const log of data.logs) {
    const { topic } = splitSubjectTopic(log.topic)
    const key = log.topic
    const entry = byTopic.get(key) ?? { key, topic, correct: 0, incorrect: 0 }
    entry.correct += log.correct || 0
    entry.incorrect += log.incorrect || 0
    byTopic.set(key, entry)
  }
  const weakTopics = [...byTopic.values()]
    .filter((t) => t.correct + t.incorrect >= 5)
    .map((t) => ({ ...t, rate: Math.round((t.correct / (t.correct + t.incorrect)) * 100) }))
    .sort((a, b) => a.rate - b.rate)
    .slice(0, 3)

  const lastExam = data.exams[0]

  return (
    <div className="flex flex-col gap-5">
      {/* Özet sayılar — kart değil, ince ızgara */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: '45 gün çalışma', value: formatMinutes(logTotals.minutes) },
          { label: 'İsabet', value: rate != null ? `%${rate}` : '—' },
          { label: 'Çözülen soru', value: logTotals.solved ?? 0 },
        ].map((s) => (
          <div key={s.label} className="rounded-input bg-surface-muted px-3 py-2.5">
            <p className="font-display text-lg font-bold tabular-nums leading-none text-ink">{s.value}</p>
            <p className="mt-1 text-2xs leading-tight text-ink/55">{s.label}</p>
          </div>
        ))}
      </div>

      {weakTopics.length > 0 && (
        <section>
          <h3 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/50">
            <TrendingDown className="h-3.5 w-3.5" aria-hidden="true" />
            Zayıf konular
          </h3>
          <ul className="flex flex-col gap-1.5">
            {weakTopics.map((t) => (
              <li key={t.key} className="flex items-center justify-between gap-3 text-sm">
                <span className="min-w-0 truncate text-ink/80">{t.topic}</span>
                <Badge tone={t.rate < 50 ? 'danger' : 'warning'} size="sm">
                  %{t.rate}
                </Badge>
              </li>
            ))}
          </ul>
        </section>
      )}

      {lastExam && (
        <section>
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-ink/50">Son deneme</h3>
          <p className="text-sm text-ink/80">
            {lastExam.exam_name || lastExam.exam_type} · {formatLessonDate(lastExam.exam_date)}
          </p>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {(lastExam.mock_exam_subjects ?? []).map((s) => (
              <li key={s.subject}>
                <Badge tone="neutral" size="sm">
                  {s.subject}: {Number(s.net ?? 0).toFixed(2)} net
                </Badge>
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.questions.length > 0 && (
        <section>
          <h3 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/50">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Bekleyen sorular
          </h3>
          <ul className="flex flex-col gap-1.5">
            {data.questions.map((q) => (
              <li key={q.id} className="text-sm text-ink/75">
                <span className="line-clamp-2">{q.content || 'Görselli soru'}</span>
                <span className="text-xs text-ink/45">
                  {[q.subject, q.topic].filter(Boolean).join(' · ') || q.status}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.homeworks.length > 0 && (
        <section>
          <h3 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/50">
            <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
            Son ödevler
          </h3>
          <ul className="flex flex-col gap-1.5">
            {data.homeworks.map((h) => (
              <li key={h.id} className="flex items-center justify-between gap-3 text-sm">
                <span className="min-w-0 truncate text-ink/80">{h.title}</span>
                <Badge tone={h.status === 'Tamamlandı' ? 'success' : 'warning'} size="sm">
                  {h.status}
                </Badge>
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.previous && (
        <section>
          <h3 className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/50">
            <Target className="h-3.5 w-3.5" aria-hidden="true" />
            Önceki dersten
          </h3>
          {data.previous.covered_topics && (
            <p className="text-sm text-ink/75">İşlenen: {data.previous.covered_topics}</p>
          )}
          {data.previous.next_goal && (
            <p className="mt-1 text-sm font-medium text-brand-700">Hedef: {data.previous.next_goal}</p>
          )}
        </section>
      )}

      {/* Öğretmene özel not */}
      <section className="rounded-card border border-line bg-surface-muted p-3.5">
        <Field
          label={
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Bu ders için özel notun
            </span>
          }
          hint="Yalnızca sen görürsün. Öğrenciye hiçbir ekranda gösterilmez."
        >
          {({ id, describedBy }) => (
            <Textarea
              id={id}
              aria-describedby={describedBy}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="Örn. Zincir kuralında zorlanıyor, aceleye getirmemeli."
            />
          )}
        </Field>
        <div className="mt-2 flex items-center gap-2">
          <Button size="sm" variant="secondary" icon={Save} loading={savingNote} onClick={handleSaveNote}>
            Notu kaydet
          </Button>
          {noteState && (
            <span className={noteState.tone === 'success' ? 'text-xs text-success-700' : 'text-xs text-danger-600'}>
              {noteState.text}
            </span>
          )}
        </div>
      </section>

      {data.logs.length === 0 && (
        <Alert tone="info" title="Çalışma kaydı yok">
          Öğrenci son 45 günde günlük çalışma kaydı girmemiş.
        </Alert>
      )}
    </div>
  )
}
