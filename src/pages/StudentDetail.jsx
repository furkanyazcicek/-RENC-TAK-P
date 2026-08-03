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
import DateFilterControl from '../components/DateFilterControl'
import { buildSubjectDistribution, buildTopicStats } from '../lib/topicHelpers'
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

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-paper">
        <div className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
      </div>
    )
  }

  const topicMap = {}
  exams.forEach((e) => {
    if (!topicMap[e.topic]) topicMap[e.topic] = []
    topicMap[e.topic].push(e.score)
  })
  const topicData = Object.entries(topicMap).map(([topic, scores]) => ({
    topic,
    success: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
  }))
  const trendData = exams.map((e, i) => ({
    label: e.exam_name || `Deneme ${i + 1}`,
    success: e.score,
  }))
  const overallAverage = exams.length
    ? Math.round(exams.reduce((a, e) => a + e.score, 0) / exams.length)
    : null
  const weakestTopic = topicData.length
    ? [...topicData].sort((a, b) => a.success - b.success)[0].topic
    : '—'

  const topicStats = buildTopicStats(dailyLogs)
  const distributionLogs = useMemo(
    () => (distributionDate ? dailyLogs.filter((l) => l.study_date === distributionDate) : dailyLogs),
    [dailyLogs, distributionDate]
  )
  const subjectDistribution = useMemo(() => buildSubjectDistribution(distributionLogs), [distributionLogs])
  const subjectPerformance = buildSubjectPerformance(mockExams)

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
          <StatCard label="Toplam Deneme" value={exams.length} accent="brand" icon={ClipboardList} />
          <StatCard label="Genel Ortalama" value={overallAverage != null ? `%${overallAverage}` : '—'} accent="good" icon={Percent} />
          <StatCard label="En Zayıf Konu" value={weakestTopic} accent="warn" icon={AlertTriangle} />
          <StatCard label="Bekleyen Sorular" value={questions.filter((q) => q.status !== 'Çözüldü').length} accent="accent" icon={HelpCircle} />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
            <h3 className="font-display font-bold text-lg text-ink mb-2">Konulara Göre Başarı</h3>
            <TopicBarChart data={topicData} />
          </div>
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
            <h3 className="font-display font-bold text-lg text-ink mb-2">Zaman İçindeki Gelişim</h3>
            <TrendLineChart data={trendData} />
          </div>
        </div>

        <AddExamForm studentId={studentId} onAdded={load} />

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">LGS / YKS / KPSS Denemeleri</h2>
          <div className="grid lg:grid-cols-2 gap-6 items-start mb-6">
            <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
              <h3 className="font-display font-bold text-lg text-ink mb-2">Net Gelişimi</h3>
              <MockExamTrendChart exams={mockExams} />
            </div>
            <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
              <h3 className="font-display font-bold text-lg text-ink mb-2">Ders Bazlı Net Başarısı</h3>
              <p className="text-xs text-ink/40 -mt-1 mb-2">
                Net Başarı Yüzdesi = (Ortalama Net / Toplam Soru Sayısı) × 100
              </p>
              <TopicBarChart
                data={subjectPerformance}
                tooltipLabel="Net Başarı"
                emptyText="Henüz deneme sonucu girilmemiş."
              />
            </div>
          </div>
          <SubjectNetTable data={subjectPerformance} />
          <div className="mt-6">
            <MockExamList exams={mockExams} readOnly />
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
    </div>
  )
}
