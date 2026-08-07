import { useCallback, useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { ClipboardList, Percent, AlertTriangle, HelpCircle, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import TrendLineChart from '../components/TrendLineChart'
import DependentSubjectTopicSelect from '../components/DependentSubjectTopicSelect'
import TopicHierarchyAccordion from '../components/TopicHierarchyAccordion'
import Modal from '../components/Modal'
import QuestionForm from '../components/QuestionForm'
import MyQuestionsList from '../components/MyQuestionsList'
import DailyLogForm from '../components/DailyLogForm'
import DailyLogsList from '../components/DailyLogsList'
import { buildCombinedNetPercentage, buildNetTrend, buildSubjectTopicHierarchy } from '../lib/topicHelpers'

export default function StudentDashboard() {
  const { user, profile } = useAuth()
  const [exams, setExams] = useState([]) // branş denemeleri (eski `exams` tablosu, konu/puan)
  const [mockExams, setMockExams] = useState([]) // genel denemeler (LGS/TYT/AYT/KPSS)
  const [questions, setQuestions] = useState([])
  const [dailyLogs, setDailyLogs] = useState([])
  const [loading, setLoading] = useState(true)

  // 1) Zaman İçindeki Gelişim grafiği için bağımlı Ders/Konu filtresi
  const [trendSubject, setTrendSubject] = useState(null)
  const [trendTopic, setTrendTopic] = useState(null)

  // 3) "Toplam Deneme" kartına tıklanınca açılan detay modalı
  const [examsModalOpen, setExamsModalOpen] = useState(false)

  const loadData = useCallback(async () => {
    if (!user) return
    const [examsRes, mockExamsRes, questionsRes, dailyLogsRes] = await Promise.all([
      supabase.from('exams').select('*').eq('student_id', user.id).order('created_at', { ascending: false }),
      supabase
        .from('mock_exams')
        .select('*, mock_exam_subjects(*)')
        .eq('student_id', user.id)
        .order('exam_date', { ascending: false }),
      supabase.from('questions').select('*').eq('student_id', user.id).order('created_at', { ascending: false }),
      supabase.from('daily_logs').select('*').eq('student_id', user.id).order('study_date', { ascending: false }),
    ])
    setExams(examsRes.data ?? [])
    setMockExams(mockExamsRes.data ?? [])
    setQuestions(questionsRes.data ?? [])
    setDailyLogs(dailyLogsRes.data ?? [])
    setLoading(false)
  }, [user])

  useEffect(() => {
    loadData()
  }, [loadData])

  // 2) Ders -> Konu hiyerarşisi, net bazlı (boşlar formülden çıkarılmaz)
  const hierarchy = useMemo(() => buildSubjectTopicHierarchy(dailyLogs), [dailyLogs])

  // 1) Seçili Ders/Konu'ya (veya hiçbiri seçili değilse tüm derslere) göre net trendi
  const trendData = useMemo(
    () => buildNetTrend(dailyLogs, trendSubject, trendTopic),
    [dailyLogs, trendSubject, trendTopic]
  )

  // 4) Net / Toplam Soru formülüyle tek bir genel başarı yüzdesi
  const combinedNet = useMemo(() => buildCombinedNetPercentage(dailyLogs, mockExams), [dailyLogs, mockExams])

  // En zayıf konu — net bazlı hiyerarşideki tüm konular arasından en düşük net %
  const weakestTopic = useMemo(() => {
    const allTopics = hierarchy.flatMap((s) => s.topics.map((t) => ({ ...t, subject: s.subject })))
    if (allTopics.length === 0) return '—'
    const weakest = [...allTopics].sort((a, b) => a.netPct - b.netPct)[0]
    return `${weakest.subject} - ${weakest.topic}`
  }, [hierarchy])

  // 3) Branş denemeleri + genel denemeler, tarihe göre birleşik liste
  const allExamsSorted = useMemo(() => {
    const branch = exams.map((e) => ({
      id: `exam-${e.id}`,
      type: 'Branş',
      label: e.exam_name || e.topic,
      date: e.created_at,
      detail: `%${e.score}`,
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
          <StatCard label="En Zayıf Konu" value={weakestTopic} accent="warn" icon={AlertTriangle} />
          <StatCard label="Bekleyen Sorular" value={questions.filter((q) => q.status !== 'Çözüldü').length} accent="accent" icon={HelpCircle} />
          <StatCard label="Bu Hafta Çalışma" value={`${weeklyMinutes} dk`} accent="brand" icon={Clock} />
        </div>

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Konulara Göre Başarı</h2>
          <p className="text-xs text-ink/40 -mt-2 mb-3">
            Net Başarı % = Toplam Net / Toplam Soru × 100 — boş bırakılan sorular formülden çıkarılmaz.
            Bir derse tıklayarak konularına göre kırılımı görebilirsin.
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
