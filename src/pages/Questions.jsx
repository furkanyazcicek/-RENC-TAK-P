import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Archive,
  CheckCircle2,
  Filter,
  HelpCircle,
  Inbox,
  MessagesSquare,
  Plus,
  Presentation,
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { buildQuestionInsights, questionStats } from '../lib/insights'
import { BRAND, STATUS, colorForKey } from '../lib/chartTheme'
import QuestionForm from '../components/QuestionForm'
import MyQuestionsList from '../components/MyQuestionsList'
import QuestionInbox from '../components/QuestionInbox'
import SubjectTopicFilter, { useSubjectTopicFilter } from '../components/SubjectTopicFilter'
import { AppShell, Button, Modal, Tabs } from '../components/ui'
import { DashboardHero, DonutChart, InsightBar, MetricTile, Panel } from '../components/dashboard'

export default function Questions() {
  const { user, role } = useAuth()
  const [questions, setQuestions] = useState([])
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('active')
  const [formOpen, setFormOpen] = useState(false)

  const isTeacher = role === 'teacher'

  const load = useCallback(async () => {
    if (!user) return
    const query = isTeacher
      ? supabase
          .from('questions')
          .select('*, profiles!questions_student_id_fkey(full_name)')
          .order('created_at', { ascending: false })
      : supabase
          .from('questions')
          .select('*')
          .eq('student_id', user.id)
          .order('created_at', { ascending: false })

    const [{ data }, profileRes] = await Promise.all([
      query,
      supabase.from('profiles').select('full_name').eq('id', user.id).maybeSingle(),
    ])

    setQuestions(data ?? [])
    setProfile(profileRes.data ?? null)
    setLoading(false)
  }, [user, isTeacher])

  useEffect(() => {
    load()
  }, [load])

  /* --- Türetilen veriler --- */

  const stats = useMemo(() => questionStats(questions), [questions])
  const insights = useMemo(() => buildQuestionInsights(questions, role), [questions, role])

  // Aktif = henüz çözülmemiş, arşiv = çözülmüş. Filtre yalnızca görünen
  // listeye uygulanır; üstteki metrikler her zaman tümünü özetler.
  const currentList = useMemo(
    () => (tab === 'active' ? questions.filter((q) => q.status !== 'Çözüldü') : stats.solved),
    [questions, stats.solved, tab]
  )

  const { subject, topic, subjects, topics, filtered, selectSubject, selectTopic, reset } =
    useSubjectTopicFilter(currentList)

  // Sekme değişince ders/konu filtresi sıfırlanır — "Aktif"te seçilmiş bir
  // ders "Arşiv"de hiç bulunmayabilir ve kullanıcı boş listede kalırdı.
  useEffect(() => {
    reset()
    // reset kimliği her render'da değişmediği için tab yeterli bağımlılık
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const subjectCounts = useMemo(() => {
    const counts = {}
    currentList.forEach((q) => {
      if (q.subject) counts[q.subject] = (counts[q.subject] || 0) + 1
    })
    return counts
  }, [currentList])

  // Durum halkası kategorik paleti değil, durum renklerini kullanır —
  // bunlar karşılaştırılan seriler değil, sorunun bulunduğu aşamalardır.
  const statusSplit = [
    { label: 'İnceleniyor', count: stats.reviewing.length, color: STATUS.warning },
    { label: 'Derste çözülecek', count: stats.inClass.length, color: BRAND },
    { label: 'Çözüldü', count: stats.solved.length, color: STATUS.good },
  ].filter((d) => d.count > 0)

  // Ders halkasında her ders kendi sabit rengini alır; böylece aynı ders
  // uygulamanın her yerinde aynı renkte görünür.
  const subjectSplit = stats.subjects
    .slice(0, 6)
    .map((s) => ({ ...s, color: colorForKey(s.subject) }))

  const firstName = profile?.full_name?.split(' ')[0]

  const tabs = [
    {
      value: 'active',
      label: isTeacher ? 'Bekleyen' : 'Aktif',
      count: questions.length - stats.solved.length,
    },
    { value: 'archive', label: 'Arşiv', count: stats.solved.length },
  ]

  return (
    <AppShell
      title="Sorunlu Sorular"
      subtitle={
        isTeacher ? 'Öğrencilerinden gelen sorular ve yanıtların' : 'Çözemediğin soruları gönder'
      }
      showPageIntro={false}
      loading={loading}
      loadingLabel="Sorular yükleniyor…"
      headerAction={
        isTeacher ? null : (
          <Button size="sm" icon={Plus} onClick={() => setFormOpen(true)}>
            <span className="hidden sm:inline">Soru Gönder</span>
            <span className="sm:hidden">Gönder</span>
          </Button>
        )
      }
    >
      <DashboardHero
        asPageHeader
        eyebrow="Sorunlu Sorular"
        title={
          isTeacher
            ? 'Gelen soru kutusu'
            : firstName
              ? `${firstName}, soru arşivin`
              : 'Soru arşivin'
        }
        subtitle={
          questions.length
            ? `${questions.length} sorunun ${stats.solved.length} tanesi çözüldü`
            : isTeacher
              ? 'Öğrencilerinden soru geldiğinde burada toplanır'
              : 'Takıldığın soruyu gönderdiğinde burada birikir'
        }
        badge={
          stats.reviewing.length
            ? {
                label: isTeacher
                  ? `${stats.reviewing.length} yanıt bekliyor`
                  : `${stats.reviewing.length} inceleniyor`,
                tone: 'glass',
              }
            : null
        }
        highlights={
          questions.length
            ? [
                { label: 'Bekleyen', value: stats.reviewing.length },
                { label: 'Derste', value: stats.inClass.length },
                { label: 'Çözülen', value: stats.solved.length },
              ]
            : []
        }
        action={
          isTeacher ? null : (
            <Button variant="secondary" size="sm" icon={Plus} onClick={() => setFormOpen(true)}>
              Soru Gönder
            </Button>
          )
        }
      />

      <InsightBar insights={insights} title="Sorularında öne çıkanlar" />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricTile
          label="Toplam Soru"
          value={stats.total}
          hint={stats.thisWeek.length ? `bu hafta ${stats.thisWeek.length} yeni` : 'bu hafta yeni yok'}
          icon={MessagesSquare}
          tone="brand"
        />
        <MetricTile
          label={isTeacher ? 'Yanıt Bekleyen' : 'İnceleniyor'}
          value={stats.reviewing.length}
          hint={stats.reviewing.length ? 'öğretmende' : 'bekleyen yok'}
          icon={Inbox}
          tone={stats.reviewing.length ? 'warning' : 'success'}
        />
        <MetricTile
          label="Derste Çözülecek"
          value={stats.inClass.length}
          hint="ders için işaretlendi"
          icon={Presentation}
          tone="purple"
        />
        <MetricTile
          label="Çözülen"
          value={stats.solved.length}
          hint={stats.solvedPct != null ? `toplamın %${stats.solvedPct}'i` : '—'}
          icon={CheckCircle2}
          tone="success"
          onClick={stats.solved.length ? () => setTab('archive') : undefined}
        />
      </div>

      {/* İki halkanın koşulları ayrıdır: hepsi aynı durumdaki sorular
          durum halkasını anlamsız kılar ama ders dağılımı yine değerlidir. */}
      {(statusSplit.length > 1 || subjectSplit.length > 1) && (
        <div className="grid gap-6 lg:grid-cols-2">
          {statusSplit.length > 1 && (
            <Panel
              title="Durum Dağılımı"
              description="Soruların hangi aşamada olduğu"
              icon={HelpCircle}
            >
              <DonutChart data={statusSplit} centerLabel="soru" />
            </Panel>
          )}

          {subjectSplit.length > 1 && (
            <Panel
              title="Ders Dağılımı"
              description={
                isTeacher
                  ? 'Sorular hangi derslerden geliyor'
                  : 'En çok hangi derslerden soru sordun'
              }
              icon={Filter}
              footnote="Ders bilgisi girilmemiş sorular bu dağılıma dahil edilmez."
            >
              <DonutChart data={subjectSplit} centerLabel="soru" />
            </Panel>
          )}
        </div>
      )}

      <Panel
        title={isTeacher ? 'Gelen Kutusu' : 'Sorularım'}
        description={
          tab === 'archive'
            ? 'Yanıtlanmış sorular — sınav öncesi tekrar için burada duruyor'
            : isTeacher
              ? 'Yanıt bekleyen ve derste çözülecek sorular'
              : 'Öğretmeninin yanıtını beklediğin sorular'
        }
        icon={tab === 'archive' ? Archive : Inbox}
        action={<Tabs items={tabs} value={tab} onChange={setTab} />}
        padding={false}
      >
        <div className="flex flex-col gap-4 px-5 pb-5">
          {subjects.length > 0 && (
            <div className="rounded-card border border-line bg-surface-muted p-4">
              <SubjectTopicFilter
                subject={subject}
                topic={topic}
                subjects={subjects}
                topics={topics}
                counts={subjectCounts}
                onSelectSubject={selectSubject}
                onSelectTopic={selectTopic}
              />
            </div>
          )}

          {isTeacher ? (
            <QuestionInbox
              questions={filtered}
              onChanged={load}
              filterable={false}
              emptyTitle={
                subject
                  ? 'Bu ders/konuda soru yok'
                  : tab === 'archive'
                    ? 'Arşivde soru yok'
                    : 'Gelen kutunuz boş'
              }
              emptyDescription={
                subject
                  ? 'Filtreyi "Tümü" yaparak diğer soruları görebilirsiniz.'
                  : tab === 'archive'
                    ? 'Bir soruyu yanıtlayıp çözüldü olarak işaretlediğinizde buraya taşınır.'
                    : 'Öğrencilerinizden soru geldiğinde burada listelenecek.'
              }
            />
          ) : (
            <MyQuestionsList
              questions={filtered}
              bare
              emptyTitle={
                subject
                  ? 'Bu ders/konuda soru yok'
                  : tab === 'archive'
                    ? 'Arşivin henüz boş'
                    : 'Bekleyen sorun yok'
              }
              emptyDescription={
                subject
                  ? 'Filtreyi "Tümü" yaparak diğer sorularını görebilirsin.'
                  : tab === 'archive'
                    ? 'Öğretmenin bir soruyu yanıtladığında buraya taşınır.'
                    : 'Çözemediğin bir soruyu gönderdiğinde burada takip edebilirsin.'
              }
            />
          )}
        </div>
      </Panel>

      {!isTeacher && (
        <Modal
          open={formOpen}
          onClose={() => setFormOpen(false)}
          title="Çözemediğin bir soru mu var?"
          description="Sorunu yaz ya da fotoğrafını ekle — öğretmenine iletilsin."
          maxWidth="max-w-xl"
        >
          <QuestionForm
            bare
            onSubmitted={() => {
              load()
              setFormOpen(false)
            }}
          />
        </Modal>
      )}
    </AppShell>
  )
}
