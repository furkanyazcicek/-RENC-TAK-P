import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CalendarPlus, CalendarX2, Radio, UserPlus, Video } from 'lucide-react'
import { AppShell, Alert, Button, Card, CardBody, EmptyState, Modal, PageSection, Tabs } from '../../components/ui'
import LessonRow from '../../components/liveLesson/LessonRow'
import NextLessonPanel from '../../components/liveLesson/NextLessonPanel'
import InviteStudentsPanel from '../../components/liveLesson/InviteStudentsPanel'
import InstantLessonDialog from '../../components/liveLesson/InstantLessonDialog'
import SchemaMissingNotice from '../../components/liveLesson/SchemaMissingNotice'
import { useLessonAuth } from '../../lib/liveLesson/preview'
import { fetchTeacherLessons, isSchemaMissing } from '../../lib/liveLesson/api'
import { ACTIVE_STATUSES, isActiveStatus } from '../../lib/liveLesson/status'
import { istanbulDayKey, relativeDayLabel } from '../../lib/liveLesson/time'

/**
 * Öğretmenin canlı ders takvimi.
 *
 * TASARIM: gün başlıkları + satırlar. Her ders kart değil; gün bloğu tek
 * bir yüzeyde toplanır. Böylece "bugün üç dersim var" bilgisi tek bakışta
 * okunur, yirmi gölgeli kutu arasında kaybolmaz.
 */
export default function TeacherLessons() {
  const { user } = useLessonAuth()
  const navigate = useNavigate()
  const [lessons, setLessons] = useState([])
  const [loading, setLoading] = useState(true)
  const [schemaMissing, setSchemaMissing] = useState(false)
  const [error, setError] = useState(null)
  const [tab, setTab] = useState('upcoming')
  const [inviteOpen, setInviteOpen] = useState(false)
  const [instantOpen, setInstantOpen] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const from = new Date(Date.now() - 45 * 86400000).toISOString()
      setLessons(await fetchTeacherLessons({ from, limit: 200 }))
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
    const active = lessons.filter((l) => isActiveStatus(l.status))
    const upcomingList = active
      .filter((l) => new Date(l.scheduled_end).getTime() > now - 60 * 60 * 1000)
      .sort((a, b) => new Date(a.scheduled_start) - new Date(b.scheduled_start))
    const pastList = lessons
      .filter((l) => !upcomingList.includes(l))
      .sort((a, b) => new Date(b.scheduled_start) - new Date(a.scheduled_start))
    // "Sıradaki": devam eden varsa o, yoksa en yakın gelecek ders.
    const live = upcomingList.find((l) => l.status === 'live' || l.status === 'lobby_open')
    return { upcoming: upcomingList, past: pastList, next: live ?? upcomingList[0] ?? null }
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
      title="Canlı Dersler"
      subtitle="Birebir özel ders takvimin"
      loading={loading}
      loadingLabel="Dersler yükleniyor…"
      headerAction={
        <div className="flex items-center gap-2">
          {/* Birincil eylem ANLIK ders: "şimdi bağlanalım" günlük iş,
              ileri tarihe planlama haftada bir yapılır. */}
          <Button icon={Radio} size="sm" onClick={() => setInstantOpen(true)}>
            <span className="hidden sm:inline">Hemen Başlat</span>
            <span className="sm:hidden">Başlat</span>
          </Button>
          <Button
            as={Link}
            to="/ogretmen/canli-dersler/yeni"
            icon={CalendarPlus}
            size="sm"
            variant="secondary"
          >
            <span className="hidden sm:inline">Ders Planla</span>
            <span className="sm:hidden">Planla</span>
          </Button>
        </div>
      }
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

          <NextLessonPanel
            session={next}
            role="teacher"
            counterpartName={next?.student?.full_name}
            createHref="/ogretmen/canli-dersler/yeni"
            studentProfileHref={next ? `/ogretmen/ogrenci/${next.student_id}` : null}
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <Tabs
              items={[
                { value: 'upcoming', label: 'Yaklaşan', count: upcoming.length },
                { value: 'past', label: 'Geçmiş', count: past.length },
              ]}
              value={tab}
              onChange={setTab}
            />
            <Button variant="secondary" size="sm" icon={UserPlus} onClick={() => setInviteOpen(true)}>
              Öğrenci Davet Et
            </Button>
          </div>

          {grouped.length === 0 ? (
            <EmptyState
              icon={tab === 'upcoming' ? Video : CalendarX2}
              title={tab === 'upcoming' ? 'Planlanmış ders yok' : 'Geçmiş ders kaydı yok'}
              description={
                tab === 'upcoming'
                  ? 'Bir öğrencine ders planladığında burada gün gün listelenir.'
                  : 'Tamamlanan ve iptal edilen dersler burada birikir.'
              }
              action={
                tab === 'upcoming' ? (
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button icon={Radio} onClick={() => setInstantOpen(true)}>
                      Hemen Ders Başlat
                    </Button>
                    <Button as={Link} to="/ogretmen/canli-dersler/yeni" variant="secondary" icon={CalendarPlus}>
                      İleri Tarihe Planla
                    </Button>
                  </div>
                ) : null
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
                        role="teacher"
                        counterpartName={lesson.student?.full_name}
                        onEdit={(s) => navigate(`/ogretmen/canli-dersler/${s.id}/duzenle`)}
                      />
                    ))}
                  </CardBody>
                </Card>
              </PageSection>
            ))
          )}
        </>
      )}

      <Modal
        open={inviteOpen}
        onClose={() => setInviteOpen(false)}
        title="Öğrencilerin"
        description="Davet bağlantısı oluştur, bekleyen davetleri yönet"
        maxWidth="max-w-2xl"
      >
        <InviteStudentsPanel onChanged={load} />
      </Modal>

      <InstantLessonDialog
        open={instantOpen}
        onClose={() => setInstantOpen(false)}
        teacherId={user?.id}
        onCreated={load}
      />
    </AppShell>
  )
}
