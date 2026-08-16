import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { ArrowLeft, ClipboardList, HelpCircle, Clock, CheckCircle2, Flame, MessageCircle } from 'lucide-react'
import { AppShell, Badge, Button, PageLoader } from '../components/ui'
import { DashboardHero, InsightBar, MetricTile, Panel } from '../components/dashboard'
import { ActivityStrip } from '../components/dashboard'
import TopicBarChart from '../components/TopicBarChart'
import TrendLineChart from '../components/TrendLineChart'
import MyQuestionsList from '../components/MyQuestionsList'
import AddExamForm from '../components/AddExamForm'
import DailyLogsList from '../components/DailyLogsList'
import MockExamList from '../components/MockExamList'
import MockExamTrendChart from '../components/MockExamTrendChart'
import HomeworkForm from '../components/HomeworkForm'
import HomeworkList from '../components/HomeworkList'
import TopicProgressTable from '../components/TopicProgressTable'
import SubjectNetTable from '../components/SubjectNetTable'
import QuestionDistributionChart from '../components/QuestionDistributionChart'
import DependentSubjectTopicSelect from '../components/DependentSubjectTopicSelect'
import TopicHierarchyAccordion from '../components/TopicHierarchyAccordion'
import BranchExamNetChart from '../components/BranchExamNetChart'
import Modal from '../components/Modal'
import DateFilterControl from '../components/DateFilterControl'
import ExamTypeTabs from '../components/ExamTypeTabs'
import DailyLogEditModal from '../components/DailyLogEditModal' // YENİ EKLENDİ
import {
  buildNetTrend,
  buildSubjectDistribution,
  buildSubjectTopicHierarchy,
  buildTopicStats,
  formatDuration,
} from '../lib/topicHelpers'
import { buildSubjectPerformance } from '../lib/examHelpers'
import {
  accuracy,
  buildInsights,
  combineStudyEntries,
  formatMinutes,
  lastNDays,
  studyStreak,
} from '../lib/insights'

export default function StudentDetail() {
  const { studentId } = useParams()
  const [studentProfile, setStudentProfile] = useState(null)
  const [exams, setExams] = useState([])
  const [questions, setQuestions] = useState([])
  const [dailyLogs, setDailyLogs] = useState([])
  const [mockExams, setMockExams] = useState([])
  const [homeworks, setHomeworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [distributionDate, setDistributionDate] = useState(null)
  const [examType, setExamType] = useState(null)
  const [trendSubject, setTrendSubject] = useState(null)
  const [trendTopic, setTrendTopic] = useState(null)
  const [examsModalOpen, setExamsModalOpen] = useState(false)
  const [studyModalOpen, setStudyModalOpen] = useState(false)
  const [solvedModalOpen, setSolvedModalOpen] = useState(false)
  
  // YENİ EKLENDİ - Düzenlenen kaydı tutan state
  const [editingLog, setEditingLog] = useState(null)

  const load = useCallback(async () => {
    const [profileRes, examsRes, questionsRes, dailyLogsRes, mockExamsRes, homeworksRes] = await Promise.all([
      supabase.from('profiles').select('*').eq('id', studentId).single(),
      supabase
        .from('exams')
        .select('*')
        .eq('student_id', studentId)
        .order('created_at', { ascending: true }),
      supabase
        .from('questions')
        .select('*')
        .eq('student_id', studentId)
        .order('created_at', { ascending: false }),
      supabase
        .from('daily_logs')
        .select('*')
        .eq('student_id', studentId)
        .order('study_date', { ascending: false }),
      supabase
        .from('mock_exams')
        .select('*, mock_exam_subjects(*)')
        .eq('student_id', studentId)
        .order('exam_date', { ascending: false }),
      supabase
        .from('homeworks')
        .select('*')
        .eq('student_id', studentId)
        .order('created_at', { ascending: false }),
    ])
    setStudentProfile(profileRes.data)
    setExams(examsRes.data ?? [])
    setQuestions(questionsRes.data ?? [])
    setDailyLogs(dailyLogsRes.data ?? [])
    setMockExams(mockExamsRes.data ?? [])
    setHomeworks(homeworksRes.data ?? [])
    setLoading(false)
  }, [studentId])

  useEffect(() => {
    load()
  }, [load])

  const distributionLogs = useMemo(
    () => (distributionDate ? dailyLogs.filter((l) => l.study_date === distributionDate) : dailyLogs),
    [dailyLogs, distributionDate]
  )
  const subjectDistribution = useMemo(() => buildSubjectDistribution(distributionLogs), [distributionLogs])

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

  const hierarchy = useMemo(() => buildSubjectTopicHierarchy(dailyLogs), [dailyLogs])

  const trendData = useMemo(() => {
    // Sadece soru çözülen (doğru, yanlış veya boş girilen) kayıtları filtreliyoruz
    // Böylece sadece konu çalışılan günler başarı grafiğini aşağı çekmiyor
    const logsWithQuestions = dailyLogs.filter(
      (log) => (log.correct || 0) + (log.incorrect || 0) + (log.empty || 0) > 0
    );
    
    return buildNetTrend(logsWithQuestions, trendSubject, trendTopic);
  }, [dailyLogs, trendSubject, trendTopic]);

  const totalStudyMinutes = useMemo(
    () => dailyLogs.reduce((sum, l) => sum + (l.duration_minutes || 0), 0),
    [dailyLogs]
  )
  const totalSolved = useMemo(
    () => dailyLogs.reduce((sum, l) => sum + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0), 0),
    [dailyLogs]
  )

  const studyByDay = useMemo(() => {
    const map = {}
    dailyLogs.forEach((l) => {
      map[l.study_date] = (map[l.study_date] ?? 0) + (l.duration_minutes || 0)
    })
    return Object.entries(map)
      .map(([date, minutes]) => ({ date, minutes }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [dailyLogs])

  const solvedByDay = useMemo(() => {
    const map = {}
    dailyLogs.forEach((l) => {
      map[l.study_date] = (map[l.study_date] ?? 0) + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0)
    })
    return Object.entries(map)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [dailyLogs])

  const allExamsSorted = useMemo(() => {
    const branch = exams.map((e) => ({
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
      detail: `${Math.round((e.mock_exam_subjects?.reduce((s, x) => s + Number(x.net || 0), 0) ?? 0) * 100) / 100} net`,
    }))
    return [...branch, ...general].sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [exams, mockExams])

  if (loading) return <PageLoader label="Öğrenci verileri yükleniyor…" />

  const topicStats = buildTopicStats(dailyLogs)
  const subjectPerformance = buildSubjectPerformance(examsForType)
  const activeExamType = examType ?? mockExams[0]?.exam_type ?? 'TYT'

  /* Denemeler de çalışmadır (bkz. lib/insights.js). Öğretmenin gördüğü
     rakam, öğrencinin kendi panelinde gördüğüyle aynı olmalı. */
  const studyEntries = useMemo(
    () => combineStudyEntries(dailyLogs, mockExams, exams),
    [dailyLogs, mockExams, exams]
  )

  const last14 = lastNDays(studyEntries, 14)
  const streak = studyStreak(studyEntries)
  const studentAccuracy = accuracy(studyEntries)
  const insights = buildInsights(studyEntries, {
    audience: 'parent',
    name: studentProfile?.full_name ?? '',
  })
  const initials =
    studentProfile?.full_name
      ?.split(' ')
      .map((x) => x[0])
      .slice(0, 2)
      .join('')
      .toLocaleUpperCase('tr-TR') || '?'
  const pendingQuestions = questions.filter((q) => q.status !== 'Çözüldü').length

  return (
    <AppShell title={studentProfile?.full_name ?? 'Öğrenci'} subtitle="Detaylı performans analizi">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <Button as={Link} to="/ogretmen" variant="ghost" size="sm" icon={ArrowLeft}>
          Tüm öğrencilere dön
        </Button>
        <Button as={Link} to="/mesajlar" variant="secondary" size="sm" icon={MessageCircle}>
          Mesaj Gönder
        </Button>
      </div>

      <DashboardHero
        eyebrow="Öğrenci Detayı"
        title={studentProfile?.full_name ?? 'Öğrenci'}
        subtitle="Aşağıdaki kartlara tıklayarak dökümlere inebilirsin."
        avatar={initials}
        badge={mockExams.length ? { label: activeExamType, tone: 'amber' } : null}
        highlights={[
          { label: 'Kesintisiz seri', value: streak ? `${streak} gün` : '—' },
          { label: 'Toplam çalışma', value: formatMinutes(totalStudyMinutes) },
          { label: 'İsabet', value: studentAccuracy != null ? `%${studentAccuracy}` : '—' },
        ]}
      />

      <InsightBar insights={insights} title="Öğrenci özeti" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricTile
          label="Toplam Deneme"
          value={exams.length + mockExams.length}
          hint={`${exams.length} branş · ${mockExams.length} genel`}
          tone="brand"
          icon={ClipboardList}
          onClick={() => setExamsModalOpen(true)}
        />
        <MetricTile
          label="Toplam Çalışma"
          value={formatMinutes(totalStudyMinutes)}
          tone="success"
          icon={Clock}
          trend={last14.map((d) => d.minutes)}
          onClick={() => setStudyModalOpen(true)}
        />
        <MetricTile
          label="Çözülen Soru"
          value={totalSolved}
          tone="accent"
          icon={CheckCircle2}
          trend={last14.map((d) => d.solved)}
          onClick={() => setSolvedModalOpen(true)}
        />
        <MetricTile
          label="Bekleyen Soru"
          value={pendingQuestions}
          tone={pendingQuestions > 0 ? 'warning' : 'success'}
          icon={HelpCircle}
          hint={pendingQuestions ? 'yanıt bekliyor' : 'tümü yanıtlandı'}
        />
      </div>

      <Panel
        title="Çalışma Düzeni"
        description="Son 14 gün — koyu kareler daha uzun çalışılan günler"
        icon={Flame}
        iconTone="#D97706"
      >
        <ActivityStrip days={last14} />
      </Panel>

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Konulara Göre Başarı</h2>
          <p className="text-xs text-ink/55 -mt-2 mb-3">
            Net Başarı % = Toplam Net / Toplam Soru × 100 — boş bırakılan sorular formülden çıkarılmaz.
          </p>
          <TopicHierarchyAccordion hierarchy={hierarchy} />
        </section>

        <div className="card p-5">
          <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
            <h3 className="font-display font-bold text-lg text-ink">Zaman İçindeki Gelişim</h3>
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
          </div>
          <p className="text-xs text-ink/55 -mt-1 mb-2">
            {trendTopic
              ? `${trendSubject} — ${trendTopic} konusundaki net bazlı gelişim`
              : trendSubject
                ? `${trendSubject} dersindeki net bazlı gelişim`
                : 'Tüm derslerin genel net bazlı gelişimi'}
          </p>
          <TrendLineChart data={trendData} />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <AddExamForm studentId={studentId} onAdded={load} />
          <div className="card p-5">
            <h3 className="font-display font-bold text-lg text-ink mb-2">Ders Bazlı Net Grafiği</h3>
            <p className="text-xs text-ink/55 -mt-1 mb-2">
              Seçilen derse ait branş denemelerinin tarih bazlı net gelişimi.
            </p>
            <BranchExamNetChart exams={exams} />
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
            <h2 className="font-display font-bold text-lg text-ink">LGS / YKS / KPSS Denemeleri</h2>
            <ExamTypeTabs value={activeExamType} onChange={setExamType} counts={examCountsByType} />
          </div>
          <p className="text-xs text-ink/55 -mt-2 mb-4">
            Aşağıdaki grafik ve tablolar sadece <strong>{activeExamType}</strong> denemelerini gösterir.
          </p>
          <div className="grid lg:grid-cols-2 gap-6 items-start mb-6">
            <div className="card p-5">
              <h3 className="font-display font-bold text-lg text-ink mb-2">{activeExamType} Net Gelişimi</h3>
              <MockExamTrendChart exams={examsForType} />
            </div>
            <div className="card p-5">
              <h3 className="font-display font-bold text-lg text-ink mb-2">Ders Bazlı Net Başarısı</h3>
              <p className="text-xs text-ink/55 -mt-1 mb-2">
                Net Başarı Yüzdesi = (Ortalama Net / Toplam Soru Sayısı) × 100 — boşlar dışlanmaz.
              </p>
              <TopicBarChart
                data={subjectPerformance}
                tooltipLabel="Net Başarı"
                emptyText={`Henüz ${activeExamType} sonucu girilmemiş.`}
              />
            </div>
          </div>
          <SubjectNetTable data={subjectPerformance} />
          <div className="mt-6">
            <MockExamList exams={examsForType} readOnly />
          </div>
        </section>

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Ödevler</h2>
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <HomeworkForm defaultStudentId={studentId} onAssigned={load} />
            <HomeworkList homeworks={homeworks} role="teacher" onChanged={load} />
          </div>
        </section>

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Günlük Çalışma Kayıtları</h2>
          <div className="grid lg:grid-cols-2 gap-6 items-start mb-6">
            {/* YENİ EKLENDİ - Öğretmene özel Edit butonu aktifleştirildi */}
            <DailyLogsList 
              logs={dailyLogs} 
              readOnly 
              title="Bu Öğrencinin Çalışma Geçmişi" 
              allowTeacherEdit={true}
              onEditClick={(log) => setEditingLog(log)}
            />
            <div className="card p-5">
              <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                <h3 className="font-display font-bold text-lg text-ink">Derslere Göre Soru Dağılımı</h3>
                <DateFilterControl value={distributionDate} onChange={setDistributionDate} label="Dağılımı tarihe göre filtrele" />
              </div>
              <p className="text-xs text-ink/55 -mt-1 mb-2">
                {distributionDate
                  ? `${new Date(distributionDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })} tarihinde çözülen sorular`
                  : 'Tüm zamanlar'}
              </p>
              <QuestionDistributionChart data={subjectDistribution} />
            </div>
          </div>
          <h3 className="font-display font-bold text-base text-ink mb-2">Konu Bazlı Gelişim</h3>
          <TopicProgressTable stats={topicStats} />
        </section>

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Sorunlu Sorular</h2>
          <MyQuestionsList questions={questions} />
        </section>

      <Modal open={examsModalOpen} onClose={() => setExamsModalOpen(false)} title="Tüm Denemeler">
        {allExamsSorted.length === 0 ? (
          <p className="text-sm text-ink/55">Henüz deneme girilmemiş.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-ink/5">
            {allExamsSorted.map((e) => (
              <li key={e.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                <div className="min-w-0">
                  <span
                    className={`inline-block text-[10px] font-bold rounded-full px-2 py-0.5 mr-2 ${
                      e.type === 'Genel' ? 'bg-brand-50 text-brand-600' : 'bg-accent-400/10 text-accent-600'
                    }`}
                  >
                    {e.type}
                  </span>
                  <span className="text-ink/70">{e.label}</span>
                  <div className="text-xs text-ink/45">
                    {new Date(e.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
                <span className="font-semibold text-ink flex-shrink-0">{e.detail}</span>
              </li>
            ))}
          </ul>
        )}
      </Modal>
      <Modal open={studyModalOpen} onClose={() => setStudyModalOpen(false)} title="Günlük Çalışma Süresi">
        {studyByDay.length === 0 ? (
          <p className="text-sm text-ink/55">Henüz çalışma kaydı yok.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-ink/5">
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
                <span className="font-semibold text-success-700">{formatDuration(d.minutes)}</span>
              </li>
            ))}
          </ul>
        )}
      </Modal>

      <Modal open={solvedModalOpen} onClose={() => setSolvedModalOpen(false)} title="Günlük Çözülen Soru Sayısı">
        {solvedByDay.length === 0 ? (
          <p className="text-sm text-ink/55">Henüz çalışma kaydı yok.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-ink/5">
            {solvedByDay.map((d) => (
              <li key={d.date} className="flex items-center justify-between py-2.5 text-sm">
                <span className="text-ink/70">
                  {new Date(d.date).toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    weekday: 'long',
                  })}
                </span>
                <span className="font-semibold text-warning-700">{d.count} soru</span>
              </li>
            ))}
          </ul>
        )}
      </Modal>

      {/* YENİ EKLENDİ - Düzenleme Modalı */}
      {editingLog && (
        <DailyLogEditModal
          log={editingLog}
          onClose={() => setEditingLog(null)}
          onUpdated={() => {
            setEditingLog(null);
            load(); // Veriyi Supabase'den tekrar çekip tabloyu yeniler
          }}
        />
      )}
    </AppShell>
  )
}
