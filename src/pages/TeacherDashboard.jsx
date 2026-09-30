import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { hydrateAcademicQuestionMedia } from '../lib/learning/academicActivity/media'
import { CalendarPlus, Clock, HelpCircle, Inbox, Radio, Settings2, TrendingUp, Users } from 'lucide-react'

import StudentList from '../components/StudentList'
import QuestionInbox from '../components/QuestionInbox'
import NextLessonPanel from '../components/liveLesson/NextLessonPanel'
import InviteStudentsPanel from '../components/liveLesson/InviteStudentsPanel'
import PendingStudentsPanel from '../components/liveLesson/PendingStudentsPanel'
import InstantLessonDialog from '../components/liveLesson/InstantLessonDialog'
import { Alert, AppShell, Badge, Button, Modal, PageSection } from '../components/ui'
import { DashboardHero, MetricTile, Panel } from '../components/dashboard'
import { formatMinutes } from '../lib/insights'
import { fetchMyStudents, fetchTeacherLessons } from '../lib/liveLesson/api'
import { isLessonPreview, useLessonAuth } from '../lib/liveLesson/preview'
import { isActiveStatus } from '../lib/liveLesson/status'

export default function TeacherDashboard() {
  const { profile, user } = useLessonAuth()
  const [students, setStudents] = useState([])
  const [questions, setQuestions] = useState([])
  const [dailyLogs, setDailyLogs] = useState([])
  const [nextLesson, setNextLesson] = useState(null)
  const [inviteOpen, setInviteOpen] = useState(false)
  const [instantOpen, setInstantOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listError, setListError] = useState(null)
  const [dataError, setDataError] = useState(false)

  const loadData = useCallback(async () => {
    setListError(null)
    setDataError(false)

    try {
      // Bağ listesi okunamadığında bütün profillere düşmek, öğretmene ait
      // olmayan öğrencileri yanlışlıkla "Öğrencilerim" altında gösterir.
      const ownStudents = await fetchMyStudents()
      const studentIds = ownStudents.map((s) => s.student_id)
      const activeIds = new Set(studentIds)
      // Eski bir öğrencinin planlanmış dersi, bağ sonlandırıldıktan sonra
      // panelin en üstünde yeniden görünmemeli.
      fetchTeacherLessons({ from: new Date(Date.now() - 2 * 3600_000).toISOString(), limit: 20 })
        .then((lessons) => {
          const active = lessons
            .filter((lesson) => activeIds.has(lesson.student_id) && isActiveStatus(lesson.status))
            .sort((a, b) => new Date(a.scheduled_start) - new Date(b.scheduled_start))
          setNextLesson(active.find((lesson) => lesson.status === 'live' || lesson.status === 'lobby_open') ?? active[0] ?? null)
        })
        .catch(() => setNextLesson(null))
      const [dailyLogsRes, questionsRes] = studentIds.length && !isLessonPreview()
        ? await Promise.all([
            supabase.from('daily_logs').select('*').in('student_id', studentIds),
            supabase
              .from('questions')
              .select('*, profiles!questions_student_id_fkey(full_name)')
              .in('student_id', studentIds)
              .order('created_at', { ascending: false }),
          ])
        : [{ data: [], error: null }, { data: [], error: null }]

      setDataError(Boolean(dailyLogsRes.error || questionsRes.error))
      const logs = dailyLogsRes.error ? [] : dailyLogsRes.data ?? []

      // Son 7 gün ile önceki 7 günü karşılaştırıp öğrencinin eğilimini çıkarıyoruz
      const dayMs = 24 * 60 * 60 * 1000
      const key = (offset) => new Date(Date.now() - offset * dayMs).toISOString().slice(0, 10)
      const last7Start = key(6)
      const prev7Start = key(13)
      const prev7End = key(7)

      const enrichedStudents = ownStudents.map((link) => {
        const s = { id: link.student_id, full_name: link.student_name }
        const studentLogs = logs.filter((l) => l.student_id === s.id)
        const totalMinutes = studentLogs.reduce((sum, l) => sum + (l.duration_minutes || 0), 0)
        const totalSolved = studentLogs.reduce(
          (sum, l) => sum + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0),
          0
        )

        const recent = studentLogs
          .filter((l) => l.study_date >= last7Start)
          .reduce((sum, l) => sum + (l.duration_minutes || 0), 0)
        const previous = studentLogs
          .filter((l) => l.study_date >= prev7Start && l.study_date <= prev7End)
          .reduce((sum, l) => sum + (l.duration_minutes || 0), 0)

        let trend = 'new'
        if (studentLogs.length === 0) trend = 'none'
        else if (recent === 0) trend = 'idle'
        else if (previous === 0) trend = 'up'
        else if (recent >= previous * 1.1) trend = 'up'
        else if (recent <= previous * 0.75) trend = 'down'
        else trend = 'steady'

        return {
          ...s,
          totalMinutes: studentLogs.length ? totalMinutes : null,
          totalSolved: studentLogs.length ? totalSolved : null,
          recentMinutes: recent,
          trend,
        }
      })

      setStudents(enrichedStudents)
      setDailyLogs(logs)
      try {
        setQuestions(questionsRes.error ? [] : await hydrateAcademicQuestionMedia(questionsRes.data ?? []))
      } catch {
        setQuestions([])
        setDataError(true)
      }
    } catch (error) {
      setStudents([])
      setDailyLogs([])
      setQuestions([])
      setNextLesson(null)
      setDataError(false)
      setListError(error.message || 'Öğrenciler alınamadı. Lütfen tekrar dene.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  /* ---- Sınıf geneli özet ---- */
  const summary = useMemo(() => {
    const pending = questions.filter((q) => q.status !== 'Çözüldü').length
    const classMinutes = dailyLogs.reduce((s, l) => s + (l.duration_minutes || 0), 0)
    const correct = dailyLogs.reduce((s, l) => s + (l.correct || 0), 0)
    const incorrect = dailyLogs.reduce((s, l) => s + (l.incorrect || 0), 0)
    const classAccuracy = correct + incorrect > 0 ? Math.round((correct / (correct + incorrect)) * 100) : null

    // Son 7 günde hiç kaydı olmayan öğrenciler
    const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
    const activeIds = new Set(dailyLogs.filter((l) => l.study_date >= cutoff).map((l) => l.student_id))
    const idle = students.filter((s) => !activeIds.has(s.id))

    return { pending, classMinutes, classAccuracy, idle }
  }, [questions, dailyLogs, students])

  const firstName = profile?.full_name?.split(' ')[0] ?? ''
  const initials =
    profile?.full_name
      ?.split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toLocaleUpperCase('tr-TR') || '?'

  return (
    <AppShell
      title="Öğretmen Paneli"
      subtitle="Sınıfının genel görünümü"
      loading={loading}
      loadingLabel="Panel hazırlanıyor…"
      showPageIntro={false}
    >
      <DashboardHero
        asPageHeader
        eyebrow="Öğretmen Paneli"
        title={firstName ? `Hoş geldin ${firstName}` : 'Hoş geldin'}
        subtitle={
          dataError
            ? 'Çalışma ve soru özeti şu anda alınamıyor.'
            : summary.pending > 0
            ? `${summary.pending} soru yanıtını bekliyor.`
            : 'Bekleyen soru yok — sınıf güncel.'
        }
        avatar={initials}
        highlights={[
          { label: 'Öğrenci', value: students.length },
          { label: 'Sınıf çalışması', value: dataError ? '—' : formatMinutes(summary.classMinutes) },
          { label: 'İsabet', value: !dataError && summary.classAccuracy != null ? `%${summary.classAccuracy}` : '—' },
        ]}
      />

      {/* Sıradaki canlı ders — öğretmenin panele girer girmez göreceği
          birincil eylem. Ders yoksa planlama yönlendirmesi gösterilir. */}
      <NextLessonPanel
        session={nextLesson}
        role="teacher"
        counterpartName={nextLesson?.student?.full_name}
        createHref="/ogretmen/canli-dersler/yeni"
        studentProfileHref={nextLesson ? `/ogretmen/ogrenci/${nextLesson.student_id}` : null}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricTile label="Toplam Öğrenci" value={students.length} icon={Users} tone="brand" hint="listemde aktif" />
        <MetricTile
          label="Bekleyen Soru"
          value={dataError ? '—' : summary.pending}
          icon={HelpCircle}
          tone="warning"
          hint={dataError ? 'veri alınamadı' : summary.pending ? 'yanıt bekliyor' : 'tümü yanıtlandı'}
        />
        <MetricTile label="Toplam Soru" value={dataError ? '—' : questions.length} icon={Inbox} tone="accent" hint={dataError ? 'veri alınamadı' : 'tüm zamanlar'} />
        <MetricTile
          label="7 Gündür Sessiz"
          value={dataError ? '—' : summary.idle.length}
          icon={Clock}
          tone={summary.idle.length > 0 ? 'danger' : 'success'}
          hint={dataError ? 'veri alınamadı' : summary.idle.length > 0 ? 'öğrenci kayıt girmedi' : 'herkes aktif'}
        />
      </div>

      {/* Yeni kaydolmuş ama henüz listeye alınmamış öğrenciler.
          Kuyruk boşsa bileşen hiçbir şey çizmez. */}
      <PendingStudentsPanel onChanged={loadData} />

      {listError && (
        <Alert tone="danger" title="Öğrenci listesi yüklenemedi">
          {listError} <Button variant="link" onClick={loadData}>Yeniden dene</Button>
        </Alert>
      )}

      {dataError && (
        <Alert tone="warning" title="Çalışma özeti alınamadı">
          Öğrenci listesini yönetebilirsin. Çalışma ve soru bilgileri için <Button variant="link" onClick={loadData}>yeniden dene</Button>.
        </Alert>
      )}

      {/* Sessiz kalan öğrenciler — öğretmenin en çok ihtiyacı olan uyarı */}
      {!dataError && summary.idle.length > 0 && (
        <Panel
          title="Son 7 gündür kayıt girmeyen öğrenciler"
          description="Bir öğrenciye tıklayarak geçmişini inceleyebilirsin"
          icon={Clock}
          iconTone="#E11D48"
        >
          <div className="flex flex-wrap gap-2">
            {summary.idle.map((s) => (
              <Badge key={s.id} tone="danger" dot>
                {s.full_name}
              </Badge>
            ))}
          </div>
        </Panel>
      )}

      <PageSection
        title="Öğrencilerim"
        description="Yalnızca seninle bağlantısı aktif olan öğrenciler burada görünür."
        stackAction
        action={
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" size="sm" icon={Settings2} className="min-h-11" onClick={() => setInviteOpen(true)}>
              Öğrencileri Yönet
            </Button>
            <Button size="sm" icon={Radio} onClick={() => setInstantOpen(true)}>
              Hemen Ders Başlat
            </Button>
            <Button as={Link} to="/ogretmen/canli-dersler/yeni" size="sm" variant="secondary" icon={CalendarPlus}>
              Ders Planla
            </Button>
          </div>
        }
      >
        {!listError && <StudentList students={students} />}
      </PageSection>

      <PageSection
        title="Gelen Sorular"
        action={
          !dataError && summary.pending > 0 ? (
            <Badge tone="warning" icon={TrendingUp}>
              {summary.pending} bekliyor
            </Badge>
          ) : null
        }
      >
        {!dataError && <QuestionInbox questions={questions} onChanged={loadData} />}
      </PageSection>

      <Modal
        open={inviteOpen}
        onClose={() => setInviteOpen(false)}
        title="Öğrencileri Yönet"
        description="Listenden çıkar veya yeni öğrenci davet et."
        maxWidth="max-w-2xl"
      >
        <InviteStudentsPanel onChanged={loadData} />
      </Modal>

      <InstantLessonDialog
        open={instantOpen}
        onClose={() => setInstantOpen(false)}
        teacherId={user?.id}
        onCreated={loadData}
      />
    </AppShell>
  )
}
