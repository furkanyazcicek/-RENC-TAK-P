import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarX2, GraduationCap, Video } from 'lucide-react'
import { Alert, AppShell, Card, CardBody, EmptyState, PageSection, Tabs } from '../../components/ui'
import LessonRow from '../../components/liveLesson/LessonRow'
import NextLessonPanel from '../../components/liveLesson/NextLessonPanel'
import SchemaMissingNotice from '../../components/liveLesson/SchemaMissingNotice'
import { fetchStudentLessons, isSchemaMissing } from '../../lib/liveLesson/api'
import { isActiveStatus } from '../../lib/liveLesson/status'
import { istanbulDayKey, relativeDayLabel } from '../../lib/liveLesson/time'

/** Öğrencinin canlı ders takvimi. */
export default function StudentLessons() {
  const [lessons, setLessons] = useState([])
  const [loading, setLoading] = useState(true)
  const [schemaMissing, setSchemaMissing] = useState(false)
  const [error, setError] = useState(null)
  const [tab, setTab] = useState('upcoming')

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const from = new Date(Date.now() - 45 * 86400000).toISOString()
      setLessons(await fetchStudentLessons({ from, limit: 200 }))
    } catch (err) {
      if (isSchemaMissing(err.cause ?? err)) setSchemaMissing(true)
      else setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const { upcoming, past, next } = useMemo(() => {
    const now = Date.now()
    const active = lessons
      .filter((l) => isActiveStatus(l.status))
      .filter((l) => new Date(l.scheduled_end).getTime() > now - 60 * 60 * 1000)
      .sort((a, b) => new Date(a.scheduled_start) - new Date(b.scheduled_start))
    const rest = lessons
      .filter((l) => !active.includes(l))
      .sort((a, b) => new Date(b.scheduled_start) - new Date(a.scheduled_start))
    const live = active.find((l) => l.status === 'live' || l.status === 'lobby_open')
    return { upcoming: active, past: rest, next: live ?? active[0] ?? null }
  }, [lessons])

  const grouped = useMemo(() => {
    const source = tab === 'upcoming' ? upcoming : past
    const map = new Map()
    for (const lesson of source) {
      const key = istanbulDayKey(lesson.scheduled_start)
      if (!map.has(key)) map.set(key, { key, label: relativeDayLabel(lesson.scheduled_start), items: [] })
      map.get(key).items.push(lesson)
    }
    return [...map.values()]
  }, [tab, upcoming, past])

  return (
    <AppShell
      title="Canlı Derslerim"
      subtitle="Öğretmeninle birebir dersler"
      loading={loading}
      loadingLabel="Dersler yükleniyor…"
    >
      {schemaMissing ? (
        <SchemaMissingNotice />
      ) : (
        <>
          {error && (
            <Alert tone="danger" title="Dersler yüklenemedi">
              {error}
            </Alert>
          )}

          <NextLessonPanel session={next} role="student" counterpartName={next?.teacher?.full_name} />

          <Tabs
            items={[
              { value: 'upcoming', label: 'Yaklaşan', count: upcoming.length },
              { value: 'past', label: 'Geçmiş', count: past.length },
            ]}
            value={tab}
            onChange={setTab}
          />

          {grouped.length === 0 ? (
            <EmptyState
              icon={tab === 'upcoming' ? Video : CalendarX2}
              title={tab === 'upcoming' ? 'Yaklaşan dersin yok' : 'Geçmiş ders yok'}
              description={
                tab === 'upcoming'
                  ? 'Öğretmenin ders planladığında burada görürsün ve tek dokunuşla katılırsın.'
                  : 'Tamamlanan derslerin ve özetleri burada birikir.'
              }
            />
          ) : (
            grouped.map((group) => (
              <PageSection key={group.key} title={group.label}>
                <Card>
                  <CardBody padding="none" className="divide-y divide-line px-5">
                    {group.items.map((lesson) => (
                      <LessonRow
                        key={lesson.id}
                        session={lesson}
                        role="student"
                        counterpartName={lesson.teacher?.full_name}
                      />
                    ))}
                  </CardBody>
                </Card>
              </PageSection>
            ))
          )}

          {past.length > 0 && (
            <p className="text-sm text-ink/55">
              <GraduationCap className="mr-1.5 inline h-4 w-4 align-text-bottom" aria-hidden="true" />
              Tamamlanan bir dersin özetini görmek için satırındaki <strong>Özet</strong> düğmesine dokun.
            </p>
          )}
        </>
      )}
    </AppShell>
  )
}
