import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  AlarmClock,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  ListTodo,
  Plus,
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { buildHomeworkInsights, homeworkStats, isHomeworkOverdue } from '../lib/insights'
import HomeworkForm from '../components/HomeworkForm'
import HomeworkList from '../components/HomeworkList'
import { AppShell, Button, Modal, ProgressBar, Tabs } from '../components/ui'
import { DashboardHero, InsightBar, MetricTile, Panel } from '../components/dashboard'

export default function Homeworks() {
  const { user, role } = useAuth()
  const [homeworks, setHomeworks] = useState([])
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('pending')
  const [formOpen, setFormOpen] = useState(false)

  const isTeacher = role === 'teacher'

  const load = useCallback(async () => {
    if (!user) return
    let query = supabase
      .from('homeworks')
      .select(isTeacher ? '*, profiles!homeworks_student_id_fkey(full_name)' : '*')
      .order('due_date', { ascending: true, nullsFirst: false })
      .order('created_at', { ascending: false })

    if (!isTeacher) query = query.eq('student_id', user.id)

    const [{ data }, profileRes] = await Promise.all([
      query,
      supabase.from('profiles').select('full_name').eq('id', user.id).maybeSingle(),
    ])

    setHomeworks(data ?? [])
    setProfile(profileRes.data ?? null)
    setLoading(false)
  }, [user, isTeacher])

  useEffect(() => {
    load()
  }, [load])

  /* --- Türetilen veriler --- */

  const stats = useMemo(() => homeworkStats(homeworks), [homeworks])
  const insights = useMemo(() => buildHomeworkInsights(homeworks, role), [homeworks, role])

  // Geciken ödevler listenin başında dursun — en acil olan en üstte
  const pendingSorted = useMemo(() => {
    return [...stats.pending].sort((a, b) => {
      const aLate = isHomeworkOverdue(a) ? 0 : 1
      const bLate = isHomeworkOverdue(b) ? 0 : 1
      if (aLate !== bLate) return aLate - bLate
      if (!a.due_date) return 1
      if (!b.due_date) return -1
      return new Date(a.due_date) - new Date(b.due_date)
    })
  }, [stats.pending])

  const visible =
    tab === 'pending' ? pendingSorted : tab === 'overdue' ? stats.overdue : stats.done

  const firstName = profile?.full_name?.split(' ')[0]

  const tabs = [
    { value: 'pending', label: 'Devam eden', count: stats.pending.length },
    { value: 'overdue', label: 'Geciken', count: stats.overdue.length },
    { value: 'done', label: 'Tamamlanan', count: stats.done.length },
  ]

  return (
    <AppShell
      title="Ödevler"
      subtitle={isTeacher ? 'Öğrencilerine ödev ata ve takip et' : 'Sana atanan ödevler'}
      loading={loading}
      loadingLabel="Ödevler yükleniyor…"
      showPageIntro={false}
      headerAction={
        isTeacher ? (
          <Button size="sm" icon={Plus} onClick={() => setFormOpen(true)}>
            <span className="hidden sm:inline">Ödev Ata</span>
            <span className="sm:hidden">Ata</span>
          </Button>
        ) : null
      }
    >
      <DashboardHero
        asPageHeader
        eyebrow="Ödevler"
        title={
          isTeacher
            ? 'Atadığın ödevlerin durumu'
            : firstName
              ? `${firstName}, ödev tablon`
              : 'Ödev tablon'
        }
        subtitle={
          homeworks.length
            ? `${homeworks.length} ödevin ${stats.done.length} tanesi tamamlandı`
            : isTeacher
              ? 'İlk ödevi atadığında takip tablosu burada oluşur'
              : 'Öğretmenin ödev atadığında burada görünecek'
        }
        badge={
          stats.overdue.length
            ? { label: `${stats.overdue.length} gecikmiş`, tone: 'glass' }
            : null
        }
        highlights={
          homeworks.length
            ? [
                { label: 'Devam eden', value: stats.pending.length },
                { label: 'Bu hafta', value: stats.dueThisWeek.length },
                {
                  label: 'Tamamlanma',
                  value: stats.completionPct != null ? `%${stats.completionPct}` : '—',
                },
              ]
            : []
        }
      />

      <InsightBar insights={insights} title="Ödevlerinde öne çıkanlar" />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricTile
          label="Devam Eden"
          value={stats.pending.length}
          hint={stats.pending.length ? 'tamamlanmayı bekliyor' : 'bekleyen yok'}
          icon={ListTodo}
          tone="brand"
        />
        <MetricTile
          label="Bugün Teslim"
          value={stats.dueToday.length}
          hint={stats.dueThisWeek.length ? `bu hafta ${stats.dueThisWeek.length} ödev` : 'bugün için yok'}
          icon={CalendarClock}
          tone={stats.dueToday.length ? 'warning' : 'info'}
        />
        <MetricTile
          label="Geciken"
          value={stats.overdue.length}
          hint={stats.overdue.length ? 'teslim tarihi geçti' : 'gecikme yok'}
          icon={AlarmClock}
          tone={stats.overdue.length ? 'danger' : 'success'}
          onClick={stats.overdue.length ? () => setTab('overdue') : undefined}
        />
        <MetricTile
          label="Tamamlanan"
          value={stats.done.length}
          hint={stats.completionPct != null ? `toplamın %${stats.completionPct}'i` : '—'}
          icon={CheckCircle2}
          tone="success"
        />
      </div>

      {stats.completionPct != null && homeworks.length > 1 && (
        <Panel
          title="Tamamlanma Oranı"
          description={
            isTeacher
              ? 'Atadığın tüm ödevler içinde tamamlananların payı'
              : 'Sana atanan tüm ödevler içinde tamamladıklarının payı'
          }
          icon={CheckCircle2}
          iconTone="#059669"
        >
          <ProgressBar
            value={stats.completionPct}
            tone={
              stats.completionPct >= 75
                ? 'success'
                : stats.completionPct >= 40
                  ? 'brand'
                  : 'warning'
            }
            size="lg"
            label={`${stats.done.length} / ${homeworks.length} ödev`}
            showValue
          />
        </Panel>
      )}

      <Panel
        title="Ödev Listesi"
        description="Daireye dokunarak bir ödevi tamamlandı olarak işaretleyebilirsin"
        icon={ClipboardList}
        action={<Tabs items={tabs} value={tab} onChange={setTab} />}
        footnote={
          tab === 'pending'
            ? 'Geciken ödevler listenin başında gösterilir.'
            : tab === 'overdue'
              ? 'Teslim tarihi bugünden önce olan ve hâlâ tamamlanmamış ödevler.'
              : null
        }
      >
        <HomeworkList
          homeworks={visible}
          role={role}
          onChanged={load}
          showStudentName={isTeacher}
          emptyVariant={tab}
        />
      </Panel>

      {isTeacher && (
        <Modal
          open={formOpen}
          onClose={() => setFormOpen(false)}
          title="Yeni Ödev Ata"
          description="Öğrenciyi seç, başlığı yaz ve istersen teslim tarihi belirle."
          maxWidth="max-w-xl"
        >
          <HomeworkForm
            bare
            onAssigned={() => {
              load()
              setFormOpen(false)
            }}
          />
        </Modal>
      )}
    </AppShell>
  )
}
