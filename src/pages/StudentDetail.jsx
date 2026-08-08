import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { ClipboardList, Percent, AlertTriangle, HelpCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
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
import {
  buildCombinedNetPercentage,
  buildNetTrend,
  buildSubjectDistribution,
  buildSubjectTopicHierarchy,
  buildTopicStats,
} from '../lib/topicHelpers'
import { buildSubjectPerformance } from '../lib/examHelpers'

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

  // Bu iki useMemo, `if (loading) return ...` bloğundan ÖNCE tanımlanmalı.
  // Aksi halde loading=true renderında bu hook'lar hiç çağrılmaz, loading=false
  // olduğunda ise çağrılır — render'lar arası hook sayısı değişir ve React bunu
  // "Rendered fewer hooks than expected" (production'da minified Error #310)
  // olarak fırlatır. Kural: TÜM hook'lar erken return'den önce, koşulsuz çağrılmalı.
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

  const trendData = useMemo(
    () => buildNetTrend(dailyLogs, trendSubject, trendTopic),
    [dailyLogs, trendSubject, trendTopic]
  )

  const combinedNet = useMemo(() => buildCombinedNetPercentage(dailyLogs, mockExams, exams), [dailyLogs, mockExams, exams])

  const weakestTopicNet = useMemo(() => {
    const allTopics = hierarchy.flatMap((s) => s.topics.map((t) => ({ ...t, subject: s.subject })))
    if (allTopics.length === 0) return '—'
    const weakest = [...allTopics].sort((a, b) => a.netPct - b.netPct)[0]
    return `${weakest.subject} - ${weakest.topic}`
  }, [hierarchy])

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

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-paper">
        <div className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
      </div>
    )
  }

  const topicStats = buildTopicStats(dailyLogs)
  const subjectPerformance = buildSubjectPerformance(examsForType)
  const activeExamType = examType ?? mockExams[0]?.exam_type ?? 'TYT'

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title={studentProfile?.full_name ?? 'Öğrenci'} subtitle="Detaylı performans analizi" />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Link to="/ogretmen" className="text-sm font-medium text-brand-600 hover:underline w-fit">
            ← Tüm öğrencilere dön
          </Link>
          <Link
            to="/mesajlar"
            className="focus-ring text-sm font-semibold text-brand-600 border border-brand-200 rounded-xl px-4 py-2 hover:bg-brand-50 transition-colors"
          >
            💬 Mesaj Gönder
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <button onClick={() => setExamsModalOpen(true)} className="focus-ring text-left">
            <StatCard
              label="Toplam Deneme"
              value={exams.length + mockExams.length}
              hint={`${exams.length} branş · ${mockExams.length} genel`}
              accent="brand"
              icon={ClipboardList}
            />
          </button>
          <StatCard
            label="Genel Ortalama"
            value={combinedNet.netPct != null ? `%${combinedNet.netPct}` : '—'}
            hint="Toplam Net / Toplam Soru"
            accent="good"
            icon={Percent}
          />
          <StatCard label="En Zayıf Konu" value={weakestTopicNet} accent="warn" icon={AlertTriangle} />
          <StatCard label="Bekleyen Sorular" value={questions.filter((q) => q.status !== 'Çözüldü').length} accent="accent" icon={HelpCircle} />
        </div>

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Konulara Göre Başarı</h2>
          <p className="text-xs text-ink/40 -mt-2 mb-3">
            Net Başarı % = Toplam Net / Toplam Soru × 100 — boş bırakılan sorular formülden çıkarılmaz.
          </p>
          <TopicHierarchyAccordion hierarchy={hierarchy} />
        </section>

        <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
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
          <p className="text-xs text-ink/40 -mt-1 mb-2">
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
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
            <h3 className="font-display font-bold text-lg text-ink mb-2">Branş Denemesi Net Grafiği</h3>
            <BranchExamNetChart exams={exams} />
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
            <h2 className="font-display font-bold text-lg text-ink">LGS / YKS / KPSS Denemeleri</h2>
            <ExamTypeTabs value={activeExamType} onChange={setExamType} counts={examCountsByType} />
          </div>
          <p className="text-xs text-ink/40 -mt-2 mb-4">
            Aşağıdaki grafik ve tablolar sadece <strong>{activeExamType}</strong> denemelerini gösterir.
          </p>
          <div className="grid lg:grid-cols-2 gap-6 items-start mb-6">
            <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
              <h3 className="font-display font-bold text-lg text-ink mb-2">{activeExamType} Net Gelişimi</h3>
              <MockExamTrendChart exams={examsForType} />
            </div>
            <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
              <h3 className="font-display font-bold text-lg text-ink mb-2">Ders Bazlı Net Başarısı</h3>
              <p className="text-xs text-ink/40 -mt-1 mb-2">
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
            <DailyLogsList logs={dailyLogs} readOnly title="Bu Öğrencinin Çalışma Geçmişi" />
            <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
              <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                <h3 className="font-display font-bold text-lg text-ink">Derslere Göre Soru Dağılımı</h3>
                <DateFilterControl value={distributionDate} onChange={setDistributionDate} label="Dağılımı tarihe göre filtrele" />
              </div>
              <p className="text-xs text-ink/40 -mt-1 mb-2">
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
      </main>

      <Modal open={examsModalOpen} onClose={() => setExamsModalOpen(false)} title="Tüm Denemeler">
        {allExamsSorted.length === 0 ? (
          <p className="text-sm text-ink/40">Henüz deneme girilmemiş.</p>
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
                  <div className="text-xs text-ink/30">
                    {new Date(e.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
                <span className="font-semibold text-ink flex-shrink-0">{e.detail}</span>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </div>
  )
}
