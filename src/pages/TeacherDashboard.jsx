import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { CalendarPlus, Clock, HelpCircle, Inbox, TrendingUp, UserPlus, Users } from 'lucide-react'

import StudentList from '../components/StudentList'
import QuestionInbox from '../components/QuestionInbox'
import NextLessonPanel from '../components/liveLesson/NextLessonPanel'
import InviteStudentsPanel from '../components/liveLesson/InviteStudentsPanel'
import { AppShell, Badge, Button, Modal, PageSection } from '../components/ui'
import { DashboardHero, MetricTile, Panel } from '../components/dashboard'
import { formatMinutes } from '../lib/insights'
import { fetchMyStudents, fetchTeacherLessons } from '../lib/liveLesson/api'
import { isActiveStatus } from '../lib/liveLesson/status'

export default function TeacherDashboard() {
  const { profile } = useAuth()
  const [students, setStudents] = useState([])
  const [questions, setQuestions] = useState([])
  const [dailyLogs, setDailyLogs] = useState([])
  const [nextLesson, setNextLesson] = useState(null)
  const [inviteOpen, setInviteOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  const loadData = useCallback(async () => {
    // Öğrenci listesi ARTIK "tüm öğrenciler" değil, öğretmenin kendi
    // öğrencileridir (teacher_students bağı). Göç henüz uygulanmadıysa
    // RPC bulunamaz; o durumda eski davranışa düşerek panel çalışmaya
    // devam eder — kurulum yapılmadan ekran boşalmasın.
    const ownStudents = await fetchMyStudents().catch(() => null)

    const [profilesRes, dailyLogsRes, questionsRes] = await Promise.all([
      ownStudents
        ? Promise.resolve({
            data: ownStudents.map((s) => ({ id: s.student_id, full_name: s.student_name, role: 'student' })),
          })
        : supabase.from('profiles').select('*').eq('role', 'student'),
      supabase.from('daily_logs').select('*'),
      supabase
        .from('questions')
        .select('*, profiles!questions_student_id_fkey(full_name)')
        .order('created_at', { ascending: false }),
    ])

    // Sıradaki canlı ders — panelin en üstündeki eylem bloğu için.
    fetchTeacherLessons({ from: new Date(Date.now() - 2 * 3600_000).toISOString(), limit: 20 })
      .then((lessons) => {
        const active = lessons
          .filter((l) => isActiveStatus(l.status))
          .sort((a, b) => new Date(a.scheduled_start) - new Date(b.scheduled_start))
        setNextLesson(active.find((l) => l.status === 'live' || l.status === 'lobby_open') ?? active[0] ?? null)
      })
      .catch(() => setNextLesson(null))

    const logs = dailyLogsRes.data ?? []

    // Son 7 gün ile önceki 7 günü karşılaştırıp öğrencinin eğilimini çıkarıyoruz
    const dayMs = 24 * 60 * 60 * 1000
    const key = (offset) => new Date(Date.now() - offset * dayMs).toISOString().slice(0, 10)
    const last7Start = key(6)
    const prev7Start = key(13)
    const prev7End = key(7)

    const enrichedStudents = (profilesRes.data ?? []).map((s) => {
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
    setQuestions(questionsRes.data ?? [])
    setLoading(false)
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
    >
      <DashboardHero
        eyebrow="Öğretmen Paneli"
        title={firstName ? `Hoş geldin ${firstName}` : 'Hoş geldin'}
        subtitle={
          summary.pending > 0
            ? `${summary.pending} soru yanıtını bekliyor.`
            : 'Bekleyen soru yok — sınıf güncel.'
        }
        avatar={initials}
        highlights={[
          { label: 'Öğrenci', value: students.length },
          { label: 'Sınıf çalışması', value: formatMinutes(summary.classMinutes) },
          { label: 'İsabet', value: summary.classAccuracy != null ? `%${summary.classAccuracy}` : '—' },
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
        <MetricTile label="Toplam Öğrenci" value={students.length} icon={Users} tone="brand" hint="sisteme kayıtlı" />
        <MetricTile
          label="Bekleyen Soru"
          value={summary.pending}
          icon={HelpCircle}
          tone="warning"
          hint={summary.pending ? 'yanıt bekliyor' : 'tümü yanıtlandı'}
        />
        <MetricTile label="Toplam Soru" value={questions.length} icon={Inbox} tone="accent" hint="tüm zamanlar" />
        <MetricTile
          label="7 Gündür Sessiz"
          value={summary.idle.length}
          icon={Clock}
          tone={summary.idle.length > 0 ? 'danger' : 'success'}
          hint={summary.idle.length > 0 ? 'öğrenci kayıt girmedi' : 'herkes aktif'}
        />
      </div>

      {/* Sessiz kalan öğrenciler — öğretmenin en çok ihtiyacı olan uyarı */}
      {summary.idle.length > 0 && (
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
        description="Detaylı analiz için bir öğrenciye tıkla"
        action={
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" size="sm" icon={UserPlus} onClick={() => setInviteOpen(true)}>
              Öğrenci Davet Et
            </Button>
            <Button as={Link} to="/ogretmen/canli-dersler/yeni" size="sm" icon={CalendarPlus}>
              Ders Planla
            </Button>
          </div>
        }
      >
        <StudentList students={students} />
      </PageSection>

      <PageSection
        title="Gelen Sorular"
        action={
          summary.pending > 0 ? (
            <Badge tone="warning" icon={TrendingUp}>
              {summary.pending} bekliyor
            </Badge>
          ) : null
        }
      >
        <QuestionInbox questions={questions} onChanged={loadData} />
      </PageSection>

      <Modal
        open={inviteOpen}
        onClose={() => setInviteOpen(false)}
        title="Öğrencilerin"
        description="Davet bağlantısı oluştur, bekleyen davetleri yönet"
        maxWidth="max-w-2xl"
      >
        <InviteStudentsPanel onChanged={loadData} />
      </Modal>
    </AppShell>
  )
}
