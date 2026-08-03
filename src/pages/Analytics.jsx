import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { Clock, CheckCircle2, Target, ClipboardList } from 'lucide-react'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import StudyTimeChart from '../components/StudyTimeChart'
import MockExamTrendChart from '../components/MockExamTrendChart'
import TopicBarChart from '../components/TopicBarChart'
import TrendLineChart from '../components/TrendLineChart'
import QuestionDistributionChart from '../components/QuestionDistributionChart'
import TopicProgressTable from '../components/TopicProgressTable'
import SubjectNetTable from '../components/SubjectNetTable'
import DateFilterControl from '../components/DateFilterControl'
import Modal from '../components/Modal'
import DailyLogsList from '../components/DailyLogsList'
import { buildDailyAccuracyTrend, buildSubjectDistribution, buildTopicStats } from '../lib/topicHelpers'
import { buildSubjectPerformance } from '../lib/examHelpers'

export default function Analytics() {
  const { user } = useAuth()
  const [dailyLogs, setDailyLogs] = useState([])
  const [mockExams, setMockExams] = useState([])
  const [loading, setLoading] = useState(true)

  // 1) "Son 14 Günün Çalışma Süresi" sütununa tıklanınca o günün detayını tutar
  const [selectedDay, setSelectedDay] = useState(null)

  // 2) "Derslere Göre Soru Dağılımı" için tarih filtresi (null = Tüm Zamanlar)
  const [distributionDate, setDistributionDate] = useState(null)

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

  // Seçilen günün tüm çalışma kayıtları (modal içeriği)
  const selectedDayLogs = useMemo(
    () => dailyLogs.filter((l) => l.study_date === selectedDay),
    [dailyLogs, selectedDay]
  )

  // Tarih filtresine göre daraltılmış kayıtlar → pasta grafiği bunları kullanır
  const distributionLogs = useMemo(
    () => (distributionDate ? dailyLogs.filter((l) => l.study_date === distributionDate) : dailyLogs),
    [dailyLogs, distributionDate]
  )
  const subjectDistribution = useMemo(() => buildSubjectDistribution(distributionLogs), [distributionLogs])

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
  const dailyAccuracyTrend = buildDailyAccuracyTrend(dailyLogs)

  const totalSolved = dailyLogs.reduce((sum, l) => sum + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0), 0)

  const selectedDayLabel = selectedDay
    ? new Date(selectedDay).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' })
    : ''

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title="Profil & Analiz" subtitle="Genel gelişimine tek bakışta bak" />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Toplam Çalışma" value={`${totalMinutes} dk`} accent="brand" icon={Clock} />
          <StatCard label="Toplam Çözülen Soru" value={totalSolved} accent="accent" icon={CheckCircle2} />
          <StatCard label="Son Deneme Neti" value={lastExamNet != null ? lastExamNet : '—'} accent="good" icon={Target} />
          <StatCard label="Girilen Deneme" value={mockExams.length} accent="warn" icon={ClipboardList} />
        </div>

        <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
          <h3 className="font-display font-bold text-lg text-ink mb-2">Son 14 Günün Çalışma Süresi</h3>
          <StudyTimeChart
            logs={dailyLogs}
            selectedDate={selectedDay}
            onBarClick={(bucket) => {
              if (bucket.minutes > 0) setSelectedDay(bucket.date)
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
            <h3 className="font-display font-bold text-lg text-ink mb-2">Genel Başarı Gelişimi</h3>
            <p className="text-xs text-ink/40 -mt-1 mb-2">Günlük çalışmalardaki doğru/yanlış oranına göre</p>
            <TrendLineChart data={dailyAccuracyTrend} />
          </div>
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

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
            <h3 className="font-display font-bold text-lg text-ink mb-2">LGS / YKS / KPSS Net Gelişimi</h3>
            <MockExamTrendChart exams={mockExams} />
          </div>
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
            <h3 className="font-display font-bold text-lg text-ink mb-2">Deneme Sonuçlarına Göre Ders Başarısı</h3>
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

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-1">Ders Bazlı Net Tablosu</h2>
          <p className="text-sm text-ink/50 mb-3">
            Tüm denemelerindeki ders bazlı ortalama ve toplam netlerin dökümü.
          </p>
          <SubjectNetTable data={subjectPerformance} />
        </section>

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-1">Konu Bazlı Gelişim</h2>
          <p className="text-sm text-ink/50 mb-3">
            Günlük çalışma kayıtlarına girdiğin her konunun (örn. "Matematik - Türev") doğru/yanlış
            dağılımı ve başarı yüzdesi.
          </p>
          <TopicProgressTable stats={topicStats} />
        </section>
      </main>

      <Modal open={!!selectedDay} onClose={() => setSelectedDay(null)} title={selectedDayLabel}>
        <p className="text-sm text-ink/50 mb-3">
          Toplam {selectedDayLogs.reduce((s, l) => s + (l.duration_minutes || 0), 0)} dakika çalışma,{' '}
          {selectedDayLogs.reduce((s, l) => s + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0), 0)} soru çözüldü.
        </p>
        <DailyLogsList logs={selectedDayLogs} readOnly title="" />
      </Modal>
    </div>
  )
}
