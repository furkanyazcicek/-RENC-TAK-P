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
import ExamTypeTabs from '../components/ExamTypeTabs'
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

  // 3) Deneme türü sekmesi — farklı sınav türleri asla aynı grafikte karışmaz
  const [examType, setExamType] = useState(null)

  // 4) Üst özet kartlarına tıklanınca açılan detay modalı
  const [detailModal, setDetailModal] = useState(null) // 'study' | 'solved' | 'lastExam' | 'examCount' | null

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

  // Deneme sekmesi henüz seçilmemişse, öğrencinin en son girdiği türü varsayılan yap
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

  // SEÇİLİ deneme türüne ait sınavlar — tüm grafikler ve kartlar SADECE bunu kullanır
  const examsForType = useMemo(
    () => mockExams.filter((e) => e.exam_type === (examType ?? mockExams[0]?.exam_type)),
    [mockExams, examType]
  )

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

  // "Toplam Çalışma" kartı → tarihe göre gruplanmış çalışma geçmişi
  const studyByDay = useMemo(() => {
    const map = {}
    dailyLogs.forEach((l) => {
      map[l.study_date] = (map[l.study_date] ?? 0) + (l.duration_minutes || 0)
    })
    return Object.entries(map)
      .map(([date, minutes]) => ({ date, minutes }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [dailyLogs])

  // "Toplam Çözülen Soru" kartı → son 7 günün gün gün soru dağılımı
  const weeklySolvedBreakdown = useMemo(() => {
    const days = []
    for (let i = 6; i >= 0; i--) {
      const d = new Date()
      d.setDate(d.getDate() - i)
      const dateStr = d.toISOString().slice(0, 10)
      const count = dailyLogs
        .filter((l) => l.study_date === dateStr)
        .reduce((s, l) => s + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0), 0)
      days.push({ date: dateStr, label: d.toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long' }), count })
    }
    return days
  }, [dailyLogs])

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-paper">
        <div className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
      </div>
    )
  }

  const totalMinutes = dailyLogs.reduce((sum, l) => sum + (l.duration_minutes || 0), 0)
  const lastExamOfType = examsForType[0]
  const lastExamNet = lastExamOfType
    ? Math.round((lastExamOfType.mock_exam_subjects?.reduce((sum, s) => sum + Number(s.net || 0), 0) ?? 0) * 100) / 100
    : null

  // Gerçek deneme sonuçlarından (SADECE seçili sınav türü) ana ders bazlı başarı — net temelli
  const subjectPerformance = buildSubjectPerformance(examsForType)

  // Günlük çalışma kayıtlarından (daily_logs) konu bazlı detaylı istatistik
  const topicStats = buildTopicStats(dailyLogs)
  const dailyAccuracyTrend = buildDailyAccuracyTrend(dailyLogs)

  const totalSolved = dailyLogs.reduce((sum, l) => sum + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0), 0)
  const weeklySolvedTotal = weeklySolvedBreakdown.reduce((s, d) => s + d.count, 0)

  const selectedDayLabel = selectedDay
    ? new Date(selectedDay).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' })
    : ''

  const activeExamType = examType ?? mockExams[0]?.exam_type ?? 'TYT'

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title="Profil & Analiz" subtitle="Genel gelişimine tek bakışta bak" />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <button onClick={() => setDetailModal('study')} className="focus-ring text-left">
            <StatCard label="Toplam Çalışma" value={`${totalMinutes} dk`} accent="brand" icon={Clock} />
          </button>
          <button onClick={() => setDetailModal('solved')} className="focus-ring text-left">
            <StatCard label="Haftalık Çözülen Soru" value={weeklySolvedTotal} accent="accent" icon={CheckCircle2} />
          </button>
          <button onClick={() => setDetailModal('lastExam')} className="focus-ring text-left">
            <StatCard
              label={`Son ${activeExamType} Neti`}
              value={lastExamNet != null ? lastExamNet : '—'}
              accent="good"
              icon={Target}
            />
          </button>
          <button onClick={() => setDetailModal('examCount')} className="focus-ring text-left">
            <StatCard label={`Girilen ${activeExamType} Sayısı`} value={examsForType.length} accent="warn" icon={ClipboardList} />
          </button>
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

        <section>
          <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
            <h2 className="font-display font-bold text-lg text-ink">Deneme Analizi</h2>
            <ExamTypeTabs value={activeExamType} onChange={setExamType} counts={examCountsByType} />
          </div>
          <p className="text-xs text-ink/40 -mt-2 mb-4">
            Aşağıdaki grafikler sadece <strong>{activeExamType}</strong> denemelerini gösterir — farklı sınav
            türleri birbirine karışmaz.
          </p>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
              <h3 className="font-display font-bold text-lg text-ink mb-2">{activeExamType} Net Gelişimi</h3>
              <MockExamTrendChart exams={examsForType} />
            </div>
            <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
              <h3 className="font-display font-bold text-lg text-ink mb-2">{activeExamType} — Ders Başarısı</h3>
              <p className="text-xs text-ink/40 -mt-1 mb-2">
                Net Başarı Yüzdesi = (Ortalama Net / Toplam Soru Sayısı) × 100 — boş bırakılan sorular
                dışlanmaz, doğrudan toplam nete dayanır.
              </p>
              <TopicBarChart
                data={subjectPerformance}
                tooltipLabel="Net Başarı"
                emptyText={`Henüz ${activeExamType} sonucu girilmemiş.`}
              />
            </div>
          </div>
          <div className="mt-6">
            <SubjectNetTable data={subjectPerformance} />
          </div>
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

      <Modal open={detailModal === 'study'} onClose={() => setDetailModal(null)} title="Çalışma Geçmişi">
        {studyByDay.length === 0 ? (
          <p className="text-sm text-ink/40">Henüz çalışma kaydı yok.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-ink/5">
            {studyByDay.map((d) => (
              <li key={d.date} className="flex items-center justify-between py-2.5 text-sm">
                <span className="text-ink/70">
                  {new Date(d.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' })}
                </span>
                <span className="font-semibold text-brand-600">{d.minutes} dk</span>
              </li>
            ))}
          </ul>
        )}
      </Modal>

      <Modal open={detailModal === 'solved'} onClose={() => setDetailModal(null)} title="Bu Haftanın Soru Dağılımı">
        <ul className="flex flex-col divide-y divide-ink/5">
          {weeklySolvedBreakdown.map((d) => (
            <li key={d.date} className="flex items-center justify-between py-2.5 text-sm">
              <span className="text-ink/70 capitalize">{d.label}</span>
              <span className={`font-semibold ${d.count > 0 ? 'text-accent-600' : 'text-ink/30'}`}>{d.count} soru</span>
            </li>
          ))}
        </ul>
      </Modal>

      <Modal open={detailModal === 'lastExam'} onClose={() => setDetailModal(null)} title={`Son ${activeExamType} — Ders Bazlı Net`}>
        {!lastExamOfType ? (
          <p className="text-sm text-ink/40">Henüz {activeExamType} sonucu girilmemiş.</p>
        ) : (
          <>
            <p className="text-xs text-ink/40 mb-3">
              {new Date(lastExamOfType.exam_date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
              {lastExamOfType.exam_name ? ` — ${lastExamOfType.exam_name}` : ''}
            </p>
            <ul className="flex flex-col divide-y divide-ink/5">
              {(lastExamOfType.mock_exam_subjects ?? []).map((s) => (
                <li key={s.id} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="text-ink/70">{s.subject}</span>
                  <span className="font-semibold text-good">{Number(s.net).toFixed(2)} net</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </Modal>

      <Modal open={detailModal === 'examCount'} onClose={() => setDetailModal(null)} title={`Tüm ${activeExamType} Denemeleri`}>
        {examsForType.length === 0 ? (
          <p className="text-sm text-ink/40">Henüz {activeExamType} sonucu girilmemiş.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-ink/5">
            {examsForType.map((e) => {
              const totalNet = e.mock_exam_subjects?.reduce((sum, s) => sum + Number(s.net || 0), 0) ?? 0
              return (
                <li key={e.id} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="text-ink/70">
                    {new Date(e.exam_date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    {e.exam_name ? ` — ${e.exam_name}` : ''}
                  </span>
                  <span className="font-semibold text-brand-600">{Math.round(totalNet * 100) / 100} net</span>
                </li>
              )
            })}
          </ul>
        )}
      </Modal>
    </div>
  )
}
