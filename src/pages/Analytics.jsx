import { useCallback, useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import {
  Activity,
  BookOpenCheck,
  CheckCircle2,
  Clock,
  Flame,
  HelpCircle,
  LineChart,
  ListChecks,
  PieChart,
  Target,
  TrendingUp,
} from 'lucide-react'

import StudyTimeChart from '../components/StudyTimeChart'
import MockExamTrendChart from '../components/MockExamTrendChart'
import BranchExamNetChart from '../components/BranchExamNetChart'
import TopicBarChart from '../components/TopicBarChart'
import TrendLineChart from '../components/TrendLineChart'
import QuestionDistributionChart from '../components/QuestionDistributionChart'
import TopicProgressTable from '../components/TopicProgressTable'
import TopicHierarchyAccordion from '../components/TopicHierarchyAccordion'
import SubjectNetTable from '../components/SubjectNetTable'
import DateFilterControl from '../components/DateFilterControl'
import DependentSubjectTopicSelect from '../components/DependentSubjectTopicSelect'
import ExamTypeTabs from '../components/ExamTypeTabs'
import DailyLogForm from '../components/DailyLogForm'
import DailyLogsList from '../components/DailyLogsList'
import QuestionForm from '../components/QuestionForm'
import MyQuestionsList from '../components/MyQuestionsList'

import AICoachCard from '../components/ai/AICoachCard'
import { AppShell, Badge, Modal, PageLoader } from '../components/ui'
import {
  ActivityStrip,
  DashboardHero,
  InsightBar,
  MetricTile,
  Panel,
} from '../components/dashboard'

import {
  buildDailyAccuracyTrend,
  buildNetTrend,
  buildSubjectDistribution,
  buildSubjectTopicHierarchy,
  buildTopicOptions,
  buildTopicStats,
  resolveCurriculumExamTypes,
} from '../lib/topicHelpers'
import { buildSubjectPerformance } from '../lib/examHelpers'
import {
  accuracy,
  buildInsights,
  formatMinutes,
  lastNDays,
  studyStreak,
  totals,
  weekOverWeek,
} from '../lib/insights'

export default function Analytics() {
  const { user, profile } = useAuth()
  const [dailyLogs, setDailyLogs] = useState([])
  const [mockExams, setMockExams] = useState([]) // genel denemeler (LGS/TYT/AYT/KPSS)
  const [branchExams, setBranchExams] = useState([]) // branş denemeleri (`exams` tablosu)
  const [questions, setQuestions] = useState([]) // sorunlu sorular
  const [librarySubjects, setLibrarySubjects] = useState([]) // müfredat dersleri
  const [libraryTopics, setLibraryTopics] = useState([]) // müfredat konuları
  const [loading, setLoading] = useState(true)

  // 1) Çalışma süresi sütununa tıklanınca o günün detayı
  const [selectedDay, setSelectedDay] = useState(null)
  // 2) Soru dağılımı için tarih filtresi (null = tüm zamanlar)
  const [distributionDate, setDistributionDate] = useState(null)
  // 3) Deneme türü sekmesi — türler asla aynı grafikte karışmaz
  const [examType, setExamType] = useState(null)
  // 4) Üst metrik kartlarına tıklanınca açılan detay modalı
  const [detailModal, setDetailModal] = useState(null)
  // 5) Gelişim grafiği için bağımlı Ders/Konu filtresi
  const [trendSubject, setTrendSubject] = useState(null)
  const [trendTopic, setTrendTopic] = useState(null)

  const loadData = useCallback(async () => {
    if (!user) return
    const [logsRes, mockRes, branchRes, questionsRes, librarySubjectsRes, libraryTopicsRes] =
      await Promise.all([
        supabase
          .from('daily_logs')
          .select('*')
          .eq('student_id', user.id)
          .order('study_date', { ascending: false }),
        supabase
          .from('mock_exams')
          .select('*, mock_exam_subjects(*)')
          .eq('student_id', user.id)
          .order('exam_date', { ascending: false }),
        supabase
          .from('exams')
          .select('*')
          .eq('student_id', user.id)
          .order('created_at', { ascending: false }),
        supabase
          .from('questions')
          .select('*')
          .eq('student_id', user.id)
          .order('created_at', { ascending: false }),
        supabase.from('library_subjects').select('*'),
        supabase.from('library_topics').select('*'),
      ])
    setDailyLogs(logsRes.data ?? [])
    setMockExams(mockRes.data ?? [])
    setBranchExams(branchRes.data ?? [])
    setQuestions(questionsRes.data ?? [])
    setLibrarySubjects(librarySubjectsRes.data ?? [])
    setLibraryTopics(libraryTopicsRes.data ?? [])
    setLoading(false)
  }, [user])

  useEffect(() => {
    loadData()
  }, [loadData])

  // Sekme seçilmemişse en son girilen türü varsayılan yap
  useEffect(() => {
    if (examType === null && mockExams.length > 0) setExamType(mockExams[0].exam_type)
  }, [mockExams, examType])

  const examCountsByType = useMemo(() => {
    const counts = {}
    mockExams.forEach((e) => {
      counts[e.exam_type] = (counts[e.exam_type] ?? 0) + 1
    })
    return counts
  }, [mockExams])

  const examsForType = useMemo(
    () => mockExams.filter((e) => e.exam_type === (examType ?? mockExams[0]?.exam_type)),
    [mockExams, examType]
  )

  const selectedDayLogs = useMemo(
    () => dailyLogs.filter((l) => l.study_date === selectedDay),
    [dailyLogs, selectedDay]
  )

  const distributionLogs = useMemo(
    () => (distributionDate ? dailyLogs.filter((l) => l.study_date === distributionDate) : dailyLogs),
    [dailyLogs, distributionDate]
  )
  const subjectDistribution = useMemo(
    () => buildSubjectDistribution(distributionLogs),
    [distributionLogs]
  )

  const hierarchy = useMemo(() => buildSubjectTopicHierarchy(dailyLogs), [dailyLogs])

  const curriculumExamTypes = useMemo(() => resolveCurriculumExamTypes(mockExams), [mockExams])
  const topicOptions = useMemo(
    () => buildTopicOptions(dailyLogs, librarySubjects, libraryTopics, curriculumExamTypes),
    [dailyLogs, librarySubjects, libraryTopics, curriculumExamTypes]
  )

  const filteredTrend = useMemo(
    () => buildNetTrend(dailyLogs, trendSubject, trendTopic),
    [dailyLogs, trendSubject, trendTopic]
  )

  /* ---- Özet ve içgörü hesapları ---- */
  const last14 = useMemo(() => lastNDays(dailyLogs, 14), [dailyLogs])
  const wow = useMemo(() => weekOverWeek(dailyLogs), [dailyLogs])
  const streak = useMemo(() => studyStreak(dailyLogs), [dailyLogs])
  const overall = useMemo(() => totals(dailyLogs), [dailyLogs])
  const overallAccuracy = useMemo(() => accuracy(dailyLogs), [dailyLogs])
  const insights = useMemo(() => buildInsights(dailyLogs, { audience: 'student' }), [dailyLogs])

  const studyByDay = useMemo(() => {
    const map = {}
    dailyLogs.forEach((l) => {
      map[l.study_date] = (map[l.study_date] ?? 0) + (l.duration_minutes || 0)
    })
    return Object.entries(map)
      .map(([date, minutes]) => ({ date, minutes }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [dailyLogs])

  const weeklySolvedBreakdown = useMemo(
    () =>
      lastNDays(dailyLogs, 7).map((d) => ({
        date: d.date,
        label: new Date(d.date).toLocaleDateString('tr-TR', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
        }),
        count: d.solved,
      })),
    [dailyLogs]
  )

  const allExamsSorted = useMemo(() => {
    const branch = branchExams.map((e) => ({
      id: `exam-${e.id}`,
      type: 'Branş',
      label: e.exam_name || e.topic,
      date: e.exam_date ?? e.created_at,
      detail: e.net != null ? `${Number(e.net).toFixed(2)} net` : `%${e.score}`,
    }))
    const general = mockExams.map((e) => ({
      id: `mock-${e.id}`,
      type: 'Genel',
      label: `${e.exam_type}${e.exam_name ? ' — ' + e.exam_name : ''}`,
      date: e.exam_date,
      detail: `${
        Math.round((e.mock_exam_subjects?.reduce((s, x) => s + Number(x.net || 0), 0) ?? 0) * 100) /
        100
      } net`,
    }))
    return [...branch, ...general].sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [branchExams, mockExams])

  if (loading) return <PageLoader label="Analizin hazırlanıyor…" />

  const lastExamOfType = examsForType[0]
  const lastExamNet = lastExamOfType
    ? Math.round(
        (lastExamOfType.mock_exam_subjects?.reduce((sum, s) => sum + Number(s.net || 0), 0) ?? 0) *
          100
      ) / 100
    : null

  // Bir önceki denemeye göre net değişimi
  const prevExamOfType = examsForType[1]
  const prevExamNet = prevExamOfType
    ? Math.round(
        (prevExamOfType.mock_exam_subjects?.reduce((sum, s) => sum + Number(s.net || 0), 0) ?? 0) *
          100
      ) / 100
    : null
  const netDelta = lastExamNet != null && prevExamNet != null ? lastExamNet - prevExamNet : null

  const subjectPerformance = buildSubjectPerformance(examsForType)
  const topicStats = buildTopicStats(dailyLogs)
  const dailyAccuracyTrend = buildDailyAccuracyTrend(dailyLogs)

  const totalExamCount = branchExams.length + mockExams.length
  const activeExamType = examType ?? mockExams[0]?.exam_type ?? 'TYT'
  const pendingQuestions = questions.filter((q) => q.status !== 'Çözüldü').length

  const selectedDayLabel = selectedDay
    ? new Date(selectedDay).toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long',
      })
    : ''

  const firstName = profile?.full_name?.split(' ')[0] ?? ''
  const netTrendSpark = examsForType
    .slice(0, 8)
    .map((e) => e.mock_exam_subjects?.reduce((s, x) => s + Number(x.net || 0), 0) ?? 0)
    .reverse()

  return (
    <AppShell title="Profil & Analiz" subtitle="Gelişimine tek bakışta bak" width="default">
      {/* ---------- KARŞILAMA ---------- */}
      <DashboardHero
        eyebrow="Profil & Analiz"
        title={firstName ? `Merhaba ${firstName}` : 'Merhaba'}
        subtitle="Aşağıdaki her kart tıklanabilir — detayına inebilirsin."
        avatar={
          profile?.full_name
            ?.split(' ')
            .map((p) => p[0])
            .slice(0, 2)
            .join('')
            .toLocaleUpperCase('tr-TR') || '?'
        }
        badge={mockExams.length ? { label: activeExamType, tone: 'glass' } : null}
        highlights={[
          { label: 'Kesintisiz seri', value: streak ? `${streak} gün` : '—' },
          { label: 'Bu hafta', value: formatMinutes(wow.thisWeek.minutes) },
          { label: 'İsabet', value: overallAccuracy != null ? `%${overallAccuracy}` : '—' },
        ]}
      />

      {/* ---------- AI KOÇ ---------- */}
      <AICoachCard />

      {/* ---------- İÇGÖRÜLER ---------- */}
      <InsightBar insights={insights} />

      {/* ---------- METRİKLER ---------- */}
      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-4">
        <MetricTile
          label="Bu Hafta Çalışma"
          value={formatMinutes(wow.thisWeek.minutes)}
          icon={Clock}
          tone="brand"
          trend={last14.slice(-7).map((d) => d.minutes)}
          delta={
            wow.prevWeek.minutes > 0
              ? {
                  value: `${wow.minutesDelta >= 0 ? '+' : '−'}${formatMinutes(Math.abs(wow.minutesDelta))}`,
                  direction: wow.minutesDelta > 0 ? 'up' : wow.minutesDelta < 0 ? 'down' : 'flat',
                }
              : null
          }
          hint={wow.prevWeek.minutes > 0 ? 'geçen haftaya göre' : 'ilk haftan'}
          onClick={() => setDetailModal('study')}
        />
        <MetricTile
          label="Bu Hafta Çözülen"
          value={wow.thisWeek.solved}
          icon={CheckCircle2}
          tone="accent"
          trend={last14.slice(-7).map((d) => d.solved)}
          delta={
            wow.prevWeek.solved > 0
              ? {
                  value: `${wow.solvedDelta >= 0 ? '+' : '−'}${Math.abs(wow.solvedDelta)}`,
                  direction: wow.solvedDelta > 0 ? 'up' : wow.solvedDelta < 0 ? 'down' : 'flat',
                }
              : null
          }
          hint="soru"
          onClick={() => setDetailModal('solved')}
        />
        <MetricTile
          label={`Son ${activeExamType} Neti`}
          value={lastExamNet != null ? lastExamNet.toLocaleString('tr-TR') : '—'}
          icon={Target}
          tone="success"
          trend={netTrendSpark.length > 1 ? netTrendSpark : null}
          delta={
            netDelta != null && netDelta !== 0
              ? {
                  value: `${netDelta > 0 ? '+' : '−'}${Math.abs(netDelta).toLocaleString('tr-TR')}`,
                  direction: netDelta > 0 ? 'up' : 'down',
                }
              : null
          }
          hint={netDelta != null ? 'önceki denemeye göre' : `${examsForType.length} deneme`}
          onClick={() => setDetailModal('lastExam')}
        />
        <MetricTile
          label="Toplam Deneme"
          value={totalExamCount}
          icon={ListChecks}
          tone="accent"
          hint={`${branchExams.length} branş · ${mockExams.length} genel`}
          onClick={() => setDetailModal('allExams')}
        />
      </div>

      {/* ---------- ÇALIŞMA DÜZENİ ---------- */}
      <div className="grid lg:grid-cols-[1.35fr_1fr] gap-5">
        <Panel
          title="Son 14 Günün Çalışma Süresi"
          description="Bir sütuna tıklayarak o günün detayına inebilirsin"
          icon={Clock}
        >
          <StudyTimeChart
            logs={dailyLogs}
            selectedDate={selectedDay}
            onBarClick={(bucket) => {
              if (bucket.minutes > 0) setSelectedDay(bucket.date)
            }}
          />
        </Panel>

        <Panel
          title="Çalışma Düzenin"
          description="Koyu kareler daha uzun çalıştığın günler"
          icon={Flame}
          iconTone="#D97706"
          footnote={
            streak >= 2
              ? `Şu anda ${streak} günlük kesintisiz bir serin var — bozma.`
              : 'Üst üste iki gün çalıştığında serin burada görünmeye başlar.'
          }
        >
          <ActivityStrip days={last14} />

          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
            <div>
              <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Toplam</p>
              <p className="mt-1 font-display text-lg font-bold tabular text-ink">
                {formatMinutes(overall.minutes)}
              </p>
            </div>
            <div>
              <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Doğru</p>
              <p className="mt-1 font-display text-lg font-bold tabular text-success-600">
                {overall.correct}
              </p>
            </div>
            <div>
              <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Yanlış</p>
              <p className="mt-1 font-display text-lg font-bold tabular text-danger-600">
                {overall.incorrect}
              </p>
            </div>
          </div>
        </Panel>
      </div>

      {/* ---------- GENEL GELİŞİM ---------- */}
      <div className="grid lg:grid-cols-2 gap-5">
        <Panel
          title="Genel Başarı Gelişimi"
          description="Günlük çalışmalardaki doğru/yanlış oranına göre"
          icon={TrendingUp}
          iconTone="#059669"
        >
          <TrendLineChart data={dailyAccuracyTrend} />
        </Panel>

        <Panel
          title="Derslere Göre Soru Dağılımı"
          description={
            distributionDate
              ? `${new Date(distributionDate).toLocaleDateString('tr-TR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })} tarihinde çözülen sorular`
              : 'Tüm zamanlar'
          }
          icon={PieChart}
          iconTone="#DB2777"
          action={<DateFilterControl value={distributionDate} onChange={setDistributionDate} />}
        >
          <QuestionDistributionChart data={subjectDistribution} />
        </Panel>
      </div>

      {/* ---------- KONULARA GÖRE BAŞARI ---------- */}
      <Panel
        title="Konulara Göre Başarı"
        description="Bir derse tıklayarak konu kırılımını görebilirsin"
        icon={BookOpenCheck}
        iconTone="#0891B2"
        footnote="Net Başarı % = Toplam Net / Toplam Soru × 100 — boş bırakılan sorular formülden çıkarılmaz."
      >
        <TopicHierarchyAccordion hierarchy={hierarchy} />
      </Panel>

      {/* ---------- DERS/KONU FİLTRELİ GELİŞİM ---------- */}
      <Panel
        title="Zaman İçindeki Gelişim"
        description={
          trendTopic
            ? `${trendSubject} — ${trendTopic} konusundaki net bazlı gelişim`
            : trendSubject
              ? `${trendSubject} dersindeki net bazlı gelişim`
              : 'Tüm derslerin genel net bazlı gelişimi'
        }
        icon={LineChart}
        action={
          <DependentSubjectTopicSelect
            logs={dailyLogs}
            subject={trendSubject}
            topic={trendTopic}
            onSubjectChange={(s) => {
              setTrendSubject(s)
              setTrendTopic(null)
            }}
            onTopicChange={setTrendTopic}
          />
        }
      >
        <TrendLineChart data={filteredTrend} />
      </Panel>

      {/* ---------- DENEME ANALİZİ ---------- */}
      <section className="flex flex-col gap-5">
        <div className="flex items-end justify-between gap-3 flex-wrap">
          <div>
            <h2 className="section-title">Deneme Analizi</h2>
            <p className="mt-0.5 text-sm text-ink/60">
              Grafikler yalnızca <strong className="text-ink/70">{activeExamType}</strong>{' '}
              denemelerini gösterir — türler birbirine karışmaz.
            </p>
          </div>
          <ExamTypeTabs value={activeExamType} onChange={setExamType} counts={examCountsByType} />
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <Panel title={`${activeExamType} Net Gelişimi`} icon={TrendingUp} iconTone="#059669">
            <MockExamTrendChart exams={examsForType} />
          </Panel>
          <Panel
            title={`${activeExamType} — Ders Başarısı`}
            icon={Target}
            footnote="Net Başarı Yüzdesi = (Ortalama Net / Toplam Soru Sayısı) × 100 — boş bırakılan sorular dışlanmaz."
          >
            <TopicBarChart
              data={subjectPerformance}
              tooltipLabel="Net Başarı"
              emptyText={`Henüz ${activeExamType} sonucu girilmemiş.`}
            />
          </Panel>
        </div>

        <SubjectNetTable data={subjectPerformance} />
      </section>

      {/* ---------- BRANŞ DENEMESİ ---------- */}
      <Panel
        title="Branş Denemesi Net Grafiği"
        description="Seçtiğin derse ait branş denemelerinin tarih bazlı net gelişimi"
        icon={Activity}
        iconTone="#E11D48"
      >
        <BranchExamNetChart exams={branchExams} />
      </Panel>

      {/* ---------- KONU BAZLI GELİŞİM ---------- */}
      <Panel
        title="Konu Bazlı Gelişim"
        description='Günlük kayıtlara girdiğin her konunun ("Matematik - Türev" gibi) doğru/yanlış dağılımı'
        icon={ListChecks}
        iconTone="#DB2777"
      >
        <TopicProgressTable stats={topicStats} />
      </Panel>

      {/* ---------- GÜNLÜK TAKİP ---------- */}
      <section className="flex flex-col gap-3">
        <div className="flex items-end justify-between gap-3">
          <h2 className="section-title">Günlük Çalışma Takibi</h2>
          <Badge tone="neutral">{dailyLogs.length} kayıt</Badge>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 items-start">
          <DailyLogForm onSubmitted={loadData} existingTopics={topicOptions} />
          <DailyLogsList logs={dailyLogs} onChanged={loadData} />
        </div>
      </section>

      {/* ---------- SORUNLU SORULAR ---------- */}
      <section className="flex flex-col gap-3">
        <div className="flex items-end justify-between gap-3">
          <h2 className="section-title">Sorunlu Sorular</h2>
          {pendingQuestions > 0 && (
            <Badge tone="warning" icon={HelpCircle}>
              {pendingQuestions} soru yanıt bekliyor
            </Badge>
          )}
        </div>
        <div className="grid lg:grid-cols-2 gap-5 items-start">
          <QuestionForm onSubmitted={loadData} />
          <MyQuestionsList questions={questions} />
        </div>
      </section>

      {/* ---------- MODALLAR ---------- */}
      <Modal open={!!selectedDay} onClose={() => setSelectedDay(null)} title={selectedDayLabel}>
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-surface-muted border border-line p-3">
            <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Çalışma</p>
            <p className="mt-1 font-display text-xl font-bold tabular text-ink">
              {formatMinutes(selectedDayLogs.reduce((s, l) => s + (l.duration_minutes || 0), 0))}
            </p>
          </div>
          <div className="rounded-xl bg-surface-muted border border-line p-3">
            <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Çözülen</p>
            <p className="mt-1 font-display text-xl font-bold tabular text-ink">
              {selectedDayLogs.reduce(
                (s, l) => s + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0),
                0
              )}{' '}
              <span className="text-xs font-semibold text-ink/55">soru</span>
            </p>
          </div>
        </div>
        <DailyLogsList logs={selectedDayLogs} readOnly title="" />
      </Modal>

      <Modal open={detailModal === 'study'} onClose={() => setDetailModal(null)} title="Çalışma Geçmişi">
        {studyByDay.length === 0 ? (
          <p className="text-sm text-ink/55">Henüz çalışma kaydı yok.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-line">
            {studyByDay.map((d) => (
              <li key={d.date} className="flex items-center justify-between py-2.5 text-sm">
                <span className="text-ink/70">
                  {new Date(d.date).toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    weekday: 'long',
                  })}
                </span>
                <span className="font-semibold tabular text-brand-600">
                  {formatMinutes(d.minutes)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Modal>

      <Modal
        open={detailModal === 'solved'}
        onClose={() => setDetailModal(null)}
        title="Bu Haftanın Soru Dağılımı"
      >
        <ul className="flex flex-col divide-y divide-line">
          {weeklySolvedBreakdown.map((d) => (
            <li key={d.date} className="flex items-center justify-between py-2.5 text-sm">
              <span className="capitalize text-ink/70">{d.label}</span>
              <span
                className={`font-semibold tabular ${d.count > 0 ? 'text-accent-600' : 'text-ink/45'}`}
              >
                {d.count} soru
              </span>
            </li>
          ))}
        </ul>
      </Modal>

      <Modal open={detailModal === 'allExams'} onClose={() => setDetailModal(null)} title="Tüm Denemeler">
        {allExamsSorted.length === 0 ? (
          <p className="text-sm text-ink/55">Henüz deneme girilmemiş.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-line">
            {allExamsSorted.map((e) => (
              <li key={e.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <Badge tone={e.type === 'Genel' ? 'brand' : 'accent'} size="sm">
                      {e.type}
                    </Badge>
                    <span className="truncate text-ink/70">{e.label}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-ink/50">
                    {new Date(e.date).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <span className="shrink-0 font-semibold tabular text-ink">{e.detail}</span>
              </li>
            ))}
          </ul>
        )}
      </Modal>

      <Modal
        open={detailModal === 'lastExam'}
        onClose={() => setDetailModal(null)}
        title={`Son ${activeExamType} — Ders Bazlı Net`}
      >
        {!lastExamOfType ? (
          <p className="text-sm text-ink/55">Henüz {activeExamType} sonucu girilmemiş.</p>
        ) : (
          <>
            <p className="mb-3 text-xs text-ink/55">
              {new Date(lastExamOfType.exam_date).toLocaleDateString('tr-TR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
              {lastExamOfType.exam_name ? ` — ${lastExamOfType.exam_name}` : ''}
            </p>
            <ul className="flex flex-col divide-y divide-line">
              {(lastExamOfType.mock_exam_subjects ?? []).map((s) => (
                <li key={s.id} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="text-ink/70">{s.subject}</span>
                  <span className="font-semibold tabular text-success-600">
                    {Number(s.net).toFixed(2)} net
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </Modal>

      <Modal
        open={detailModal === 'examCount'}
        onClose={() => setDetailModal(null)}
        title={`Tüm ${activeExamType} Denemeleri`}
      >
        {examsForType.length === 0 ? (
          <p className="text-sm text-ink/55">Henüz {activeExamType} sonucu girilmemiş.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-line">
            {examsForType.map((e) => {
              const totalNet = e.mock_exam_subjects?.reduce((sum, s) => sum + Number(s.net || 0), 0) ?? 0
              return (
                <li key={e.id} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="text-ink/70">
                    {new Date(e.exam_date).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                    {e.exam_name ? ` — ${e.exam_name}` : ''}
                  </span>
                  <span className="font-semibold tabular text-brand-600">
                    {Math.round(totalNet * 100) / 100} net
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </Modal>
    </AppShell>
  )
}
