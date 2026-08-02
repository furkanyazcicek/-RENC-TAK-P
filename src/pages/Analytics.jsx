import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import StudyTimeChart from '../components/StudyTimeChart'
import MockExamTrendChart from '../components/MockExamTrendChart'
import TopicBarChart from '../components/TopicBarChart'
import TrendLineChart from '../components/TrendLineChart'
import QuestionDistributionChart from '../components/QuestionDistributionChart'
import TopicProgressTable from '../components/TopicProgressTable'
import { buildDailyAccuracyTrend, buildSubjectDistribution, buildTopicStats } from '../lib/topicHelpers'
import { buildSubjectPerformance } from '../lib/examHelpers'

export default function Analytics() {
  const { user } = useAuth()
  const [dailyLogs, setDailyLogs] = useState([])
  const [mockExams, setMockExams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (!user) return
      const [logsRes, mockRes] = await Promise.all([
        supabase.from('daily_logs').select('*').eq('student_id', user.id),
        supabase
          .from('mock_exams')
          .select('*, mock_exam_subjects(*)')
          .eq('student_id', user.id)
          .order('exam_date', { ascending: false }),
      ])
      setDailyLogs(logsRes.data ?? [])
      setMockExams(mockRes.data ?? [])
      setLoading(false)
    }
    load()
  }, [user])

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-paper">
        <div className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
      </div>
    )
  }

  const totalMinutes = dailyLogs.reduce((sum, l) => sum + (l.duration_minutes || 0), 0)
  const lastExamNet = mockExams.length
    ? Math.round(
        (mockExams[0].mock_exam_subjects?.reduce((sum, s) => sum + Number(s.net || 0), 0) ?? 0) * 100
      ) / 100
    : null

  // Gerçek LGS/YKS/KPSS deneme sonuçlarından (mock_exams) ana ders bazlı başarı
  const subjectPerformance = buildSubjectPerformance(mockExams)

  // Günlük çalışma kayıtlarından (daily_logs) konu bazlı detaylı istatistik
  const topicStats = buildTopicStats(dailyLogs)
  const subjectDistribution = buildSubjectDistribution(dailyLogs)
  const dailyAccuracyTrend = buildDailyAccuracyTrend(dailyLogs)

  const totalSolved = dailyLogs.reduce((sum, l) => sum + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0), 0)

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title="Profil & Analiz" subtitle="Genel gelişimine tek bakışta bak" />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Toplam Çalışma" value={`${totalMinutes} dk`} accent="brand" />
          <StatCard label="Toplam Çözülen Soru" value={totalSolved} accent="accent" />
          <StatCard label="Son Deneme Neti" value={lastExamNet != null ? lastExamNet : '—'} accent="good" />
          <StatCard label="Girilen Deneme" value={mockExams.length} accent="warn" />
        </div>

        <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
          <h3 className="font-display font-bold text-lg text-ink mb-2">Son 14 Günün Çalışma Süresi</h3>
          <StudyTimeChart logs={dailyLogs} />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
            <h3 className="font-display font-bold text-lg text-ink mb-2">Genel Başarı Gelişimi</h3>
            <p className="text-xs text-ink/40 -mt-1 mb-2">Günlük çalışmalardaki doğru/yanlış oranına göre</p>
            <TrendLineChart data={dailyAccuracyTrend} />
          </div>
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
            <h3 className="font-display font-bold text-lg text-ink mb-2">Derslere Göre Soru Dağılımı</h3>
            <QuestionDistributionChart data={subjectDistribution} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
            <h3 className="font-display font-bold text-lg text-ink mb-2">LGS / YKS / KPSS Net Gelişimi</h3>
            <MockExamTrendChart exams={mockExams} />
          </div>
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
            <h3 className="font-display font-bold text-lg text-ink mb-2">Deneme Sonuçlarına Göre Ders Başarısı</h3>
            <p className="text-xs text-ink/40 -mt-1 mb-2">
              Girdiğin tüm deneme sınavlarındaki doğru/yanlış oranına göre, ana ders bazında
            </p>
            <TopicBarChart data={subjectPerformance} />
          </div>
        </div>

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-1">Konu Bazlı Gelişim</h2>
          <p className="text-sm text-ink/50 mb-3">
            Günlük çalışma kayıtlarına girdiğin her konunun (örn. "Matematik - Türev") doğru/yanlış
            dağılımı ve başarı yüzdesi.
          </p>
          <TopicProgressTable stats={topicStats} />
        </section>
      </main>
    </div>
  )
}
