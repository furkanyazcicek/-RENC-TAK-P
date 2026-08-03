import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { ClipboardList, Percent, AlertTriangle, HelpCircle, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import TopicBarChart from '../components/TopicBarChart'
import TrendLineChart from '../components/TrendLineChart'
import QuestionForm from '../components/QuestionForm'
import MyQuestionsList from '../components/MyQuestionsList'
import DailyLogForm from '../components/DailyLogForm'
import DailyLogsList from '../components/DailyLogsList'

export default function StudentDashboard() {
  const { user, profile } = useAuth()
  const [exams, setExams] = useState([])
  const [questions, setQuestions] = useState([])
  const [dailyLogs, setDailyLogs] = useState([])
  const [loading, setLoading] = useState(true)

  const loadData = useCallback(async () => {
    if (!user) return
    const [examsRes, questionsRes, dailyLogsRes] = await Promise.all([
      supabase
        .from('exams')
        .select('*')
        .eq('student_id', user.id)
        .order('created_at', { ascending: true }),
      supabase
        .from('questions')
        .select('*')
        .eq('student_id', user.id)
        .order('created_at', { ascending: false }),
      supabase
        .from('daily_logs')
        .select('*')
        .eq('student_id', user.id)
        .order('study_date', { ascending: false }),
    ])
    setExams(examsRes.data ?? [])
    setQuestions(questionsRes.data ?? [])
    setDailyLogs(dailyLogsRes.data ?? [])
    setLoading(false)
  }, [user])

  useEffect(() => {
    loadData()
  }, [loadData])

  // Konuya göre ortalama başarı yüzdesi
  const topicMap = {}
  exams.forEach((e) => {
    if (!topicMap[e.topic]) topicMap[e.topic] = []
    topicMap[e.topic].push(e.score)
  })
  const topicData = Object.entries(topicMap).map(([topic, scores]) => ({
    topic,
    success: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
  }))

  // Zamana göre genel başarı trendi
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

  // Son 7 gün içindeki toplam çalışma süresi
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const weeklyMinutes = dailyLogs
    .filter((log) => new Date(log.study_date) >= sevenDaysAgo)
    .reduce((sum, log) => sum + (log.duration_minutes || 0), 0)

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-paper">
        <div className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title={`Merhaba, ${profile?.full_name?.split(' ')[0] ?? ''} 👋`} subtitle="İşte genel durumun" />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard label="Toplam Deneme" value={exams.length} accent="brand" icon={ClipboardList} />
          <StatCard
            label="Genel Ortalama"
            value={overallAverage != null ? `%${overallAverage}` : '—'}
            accent="good"
            icon={Percent}
          />
          <StatCard label="En Zayıf Konu" value={weakestTopic} accent="warn" icon={AlertTriangle} />
          <StatCard label="Bekleyen Sorular" value={questions.filter((q) => q.status !== 'Çözüldü').length} accent="accent" icon={HelpCircle} />
          <StatCard label="Bu Hafta Çalışma" value={`${weeklyMinutes} dk`} accent="brand" icon={Clock} />
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

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Günlük Çalışma Takibi</h2>
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <DailyLogForm onSubmitted={loadData} />
            <DailyLogsList logs={dailyLogs} onChanged={loadData} />
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <QuestionForm onSubmitted={loadData} />
          <MyQuestionsList questions={questions} />
        </div>
      </main>
    </div>
  )
}
