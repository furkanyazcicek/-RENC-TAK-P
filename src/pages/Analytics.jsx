import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import {
  Activity,
  BookOpenCheck,
  CheckCircle2,
  Clock,
  Flame,
  Home,
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
import DailyLogsList from '../components/DailyLogsList'

import { AppShell, Badge, Button, Modal, PageLoader, TimeRangeTabs } from '../components/ui'
import {
  ActivityStrip,
  DashboardHero,
  InsightBar,
  MetricTile,
  Panel,
  SourceNote,
} from '../components/dashboard'

import {
  buildDailyAccuracyTrend,
  buildNetTrend,
  buildSubjectDistribution,
  buildSubjectTopicHierarchy,
  buildTopicStats,
} from '../lib/topicHelpers'
import { buildSubjectPerformance } from '../lib/examHelpers'
import {
  buildAnalyticsCaptureData,
  captureStudentProfile,
  isProductCapture,
} from '../lib/productCapture'
import {
  accuracy,
  combineStudyEntries,
  formatMinutes,
  lastNDays,
  splitBySource,
  studyStreak,
  subjectBreakdown,
  totals,
} from '../lib/insights'

const ANALYTICS_RANGES = [
  { value: 'day', label: 'Günlük', description: 'Bugünün verileri', days: 1 },
  { value: 'week', label: 'Haftalık', description: 'Son 7 gün', days: 7 },
  { value: 'month', label: 'Aylık', description: 'Son 30 gün', days: 30 },
  { value: 'year', label: 'Yıllık', description: 'Son 12 ay', days: 365 },
]

function parseAnalyticsDate(value) {
  if (!value) return null
  const text = String(value)
  const date = /^\d{4}-\d{2}-\d{2}$/.test(text) ? new Date(`${text}T12:00:00`) : new Date(text)
  return Number.isNaN(date.getTime()) ? null : date
}

function isWithinRange(value, days) {
  const date = parseAnalyticsDate(value)
  if (!date) return false
  const today = new Date()
  today.setHours(23, 59, 59, 999)
  const start = new Date(today)
  start.setDate(start.getDate() - (days - 1))
  start.setHours(0, 0, 0, 0)
  return date >= start && date <= today
}

/**
 * Analiz — grafiklerin ve tabloların tamamı.
 *
 * Bu sayfa eskiden "Profil & Analiz" adıyla açılış sayfasıydı; öğrenci
 * daha giriş yapar yapmaz on beş grafiğin içine düşüyordu. Artık açılış
 * /anasayfa'da; buraya isteyerek gelinir. Karşılığında:
 *
 *   - AI Koç kartı Anasayfa'ya taşındı (öneri günlük iş, analiz değil).
 *   - Günlük kayıt ve soru gönderme formları buradan çıkarıldı; ikisinin
 *     de kendi sekmesi var (/gunluk-takip, /sorular). Aynı formu iki
 *     yerde tutmak sayfayı uzatmaktan başka işe yaramıyordu.
 *
 * Burada kalan tek şey okumaktır: ne oldu, nasıl gidiyor, nerede zayıfım.
 */
export default function Analytics() {
  const { user, profile } = useAuth()
  const captureMode = isProductCapture()
  const visibleProfile = profile ?? (captureMode ? captureStudentProfile() : null)
  const [dailyLogs, setDailyLogs] = useState([])
  const [mockExams, setMockExams] = useState([]) // genel denemeler (LGS/TYT/AYT/KPSS)
  const [branchExams, setBranchExams] = useState([]) // branş denemeleri (`exams` tablosu)
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
  // 6) Sayfanın tamamını süzen zaman aralığı — varsayılan mevcut haftalık görünüm.
  const [timeRange, setTimeRange] = useState('week')

  const loadData = useCallback(async () => {
    if (captureMode) {
      const captureData = buildAnalyticsCaptureData()
      setDailyLogs(captureData.dailyLogs)
      setMockExams(captureData.mockExams)
      setBranchExams(captureData.branchExams)
      setLoading(false)
      return
    }
    if (!user) return
    const [logsRes, mockRes, branchRes] = await Promise.all([
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
    ])
    setDailyLogs(logsRes.data ?? [])
    setMockExams(mockRes.data ?? [])
    setBranchExams(branchRes.data ?? [])
    setLoading(false)
  }, [captureMode, user])

  useEffect(() => {
    loadData()
  }, [loadData])

  // Sekme seçilmemişse en son girilen türü varsayılan yap
  useEffect(() => {
    if (examType === null && mockExams.length > 0) setExamType(mockExams[0].exam_type)
  }, [mockExams, examType])

  const activeRange = ANALYTICS_RANGES.find((range) => range.value === timeRange) ?? ANALYTICS_RANGES[1]

  const rangeDailyLogs = useMemo(
    () => dailyLogs.filter((log) => isWithinRange(log.study_date, activeRange.days)),
    [dailyLogs, activeRange.days]
  )

  const rangeMockExams = useMemo(
    () => mockExams.filter((exam) => isWithinRange(exam.exam_date, activeRange.days)),
    [mockExams, activeRange.days]
  )

  const rangeBranchExams = useMemo(
    () => branchExams.filter((exam) => isWithinRange(exam.exam_date ?? exam.created_at, activeRange.days)),
    [branchExams, activeRange.days]
  )

  const examCountsByType = useMemo(() => {
    const counts = {}
    rangeMockExams.forEach((e) => {
      counts[e.exam_type] = (counts[e.exam_type] ?? 0) + 1
    })
    return counts
  }, [rangeMockExams])

  const examsForType = useMemo(
    () => rangeMockExams.filter((e) => e.exam_type === (examType ?? mockExams[0]?.exam_type)),
    [rangeMockExams, mockExams, examType]
  )

  const selectedDayLogs = useMemo(
    () => rangeDailyLogs.filter((l) => l.study_date === selectedDay),
    [rangeDailyLogs, selectedDay]
  )

  const distributionLogs = useMemo(
    () => (distributionDate ? rangeDailyLogs.filter((l) => l.study_date === distributionDate) : rangeDailyLogs),
    [rangeDailyLogs, distributionDate]
  )
  const subjectDistribution = useMemo(
    () => buildSubjectDistribution(distributionLogs),
    [distributionLogs]
  )

  const hierarchy = useMemo(() => buildSubjectTopicHierarchy(rangeDailyLogs), [rangeDailyLogs])

  const filteredTrend = useMemo(
    () => buildNetTrend(rangeDailyLogs, trendSubject, trendTopic),
    [rangeDailyLogs, trendSubject, trendTopic]
  )

  /* ---- Özet ve içgörü hesapları ---- */
  /* Denemeler de çalışmadır: deneme soruları ve süreleri artık günlük
     istatistiklere katılır. Denemeleri günlük kayıt biçimine çeviren tek
     yer lib/insights.js; burada yalnızca birleştirip veriyoruz. */
  const studyEntries = useMemo(
    () => combineStudyEntries(rangeDailyLogs, rangeMockExams, rangeBranchExams),
    [rangeDailyLogs, rangeMockExams, rangeBranchExams]
  )
  const sourceSplit = useMemo(() => splitBySource(studyEntries), [studyEntries])

  const rangeDays = useMemo(
    () => lastNDays(studyEntries, activeRange.days),
    [studyEntries, activeRange.days]
  )
  const activityDays = useMemo(() => {
    if (timeRange !== 'year') return rangeDays
    const buckets = []
    const today = new Date()
    for (let offset = 11; offset >= 0; offset -= 1) {
      const month = new Date(today.getFullYear(), today.getMonth() - offset, 1)
      const key = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}`
      const monthTotals = totals(studyEntries.filter((entry) => entry.study_date?.startsWith(key)))
      buckets.push({
        date: key,
        label: month.toLocaleDateString('tr-TR', { month: 'short', year: '2-digit' }),
        minutes: monthTotals.minutes,
        solved: monthTotals.solved,
        correct: monthTotals.correct,
        incorrect: monthTotals.incorrect,
      })
    }
    return buckets
  }, [rangeDays, studyEntries, timeRange])
  const streak = useMemo(() => studyStreak(studyEntries), [studyEntries])
  const overall = useMemo(() => totals(studyEntries), [studyEntries])
  const overallAccuracy = useMemo(() => accuracy(studyEntries), [studyEntries])
  const rangeSubjects = useMemo(() => subjectBreakdown(studyEntries), [studyEntries])
  const insights = useMemo(() => {
    if (!studyEntries.length) return []

    const periodText = timeRange === 'day' ? 'Bugün' : `${activeRange.description} içinde`
    const topSubject = rangeSubjects[0]
    const result = [
      {
        tone: 'success',
        direction: 'up',
        text: `${periodText} toplam ${formatMinutes(overall.minutes)} çalıştın.`,
      },
      {
        tone: overallAccuracy >= 75 ? 'success' : 'brand',
        direction: overallAccuracy >= 75 ? 'up' : 'flat',
        text: `${overall.solved} soru çözdün; isabet oranın %${overallAccuracy}.`,
      },
    ]

    if (topSubject?.solved > 0) {
      result.push({
        tone: 'info',
        direction: 'flat',
        text: `En çok ${topSubject.subject} dersinde çalıştın: ${topSubject.solved} soru.`,
      })
    }

    return result
  }, [activeRange.description, overall, overallAccuracy, rangeSubjects, studyEntries.length, timeRange])

  // Süre grafiği de denemeleri kapsar — yoksa üstteki "Toplam Çalışma"
  // kartıyla altındaki grafik farklı iki rakam gösterirdi.
  const studyByDay = useMemo(() => {
    const map = {}
    studyEntries.forEach((l) => {
      map[l.study_date] = (map[l.study_date] ?? 0) + (l.duration_minutes || 0)
    })
    return Object.entries(map)
      .map(([date, minutes]) => ({ date, minutes }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [studyEntries])

  const rangeSolvedBreakdown = useMemo(() => {
    if (timeRange === 'year') {
      return activityDays.map((month) => ({
        date: month.date,
        label: month.label,
        count: month.solved,
      }))
    }
    return rangeDays.map((day) => ({
      date: day.date,
      label: new Date(`${day.date}T12:00:00`).toLocaleDateString('tr-TR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      }),
      count: day.solved,
    }))
  }, [activityDays, rangeDays, timeRange])

  const allExamsSorted = useMemo(() => {
    const branch = rangeBranchExams.map((e) => ({
      id: `exam-${e.id}`,
      type: 'Branş',
      label: e.exam_name || e.topic,
      date: e.exam_date ?? e.created_at,
      detail: e.net != null ? `${Number(e.net).toFixed(2)} net` : `%${e.score}`,
    }))
    const general = rangeMockExams.map((e) => ({
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
  }, [rangeBranchExams, rangeMockExams])

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
  const topicStats = buildTopicStats(rangeDailyLogs)
  const dailyAccuracyTrend = buildDailyAccuracyTrend(rangeDailyLogs)

  const totalExamCount = rangeBranchExams.length + rangeMockExams.length
  const activeExamType = examType ?? mockExams[0]?.exam_type ?? 'TYT'
  const examJourneyLabel = ['TYT', 'AYT'].includes(activeExamType) ? 'YKS' : activeExamType

  const selectedDayLabel = selectedDay
    ? new Date(selectedDay).toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long',
      })
    : ''

  const firstName = visibleProfile?.full_name?.split(' ')[0] ?? ''
  const netTrendSpark = examsForType
    .slice(0, 8)
    .map((e) => e.mock_exam_subjects?.reduce((s, x) => s + Number(x.net || 0), 0) ?? 0)
    .reverse()

  const rangeContextLabel = {
    day: 'Bugün',
    week: 'Son 7 Gün',
    month: 'Son 30 Gün',
    year: 'Son 12 Ay',
  }[activeRange.value]

  return (
    <AppShell
      title="Analiz"
      subtitle="Gelişimin, grafiklerle"
      width="default"
      headerAction={
        <Button as={Link} to="/anasayfa" variant="ghost" size="sm" icon={Home}>
          <span className="hidden sm:inline">Anasayfa</span>
        </Button>
      }
    >
      {/* ---------- KARŞILAMA ---------- */}
      <DashboardHero
        eyebrow="Analiz"
        title={firstName ? `${firstName}, gelişim tablon` : 'Gelişim tablon'}
        subtitle="Aşağıdaki her kart tıklanabilir — detayına inebilirsin."
        avatar={
          visibleProfile?.full_name
            ?.split(' ')
            .map((p) => p[0])
            .slice(0, 2)
            .join('')
            .toLocaleUpperCase('tr-TR') || '?'
        }
        badge={rangeMockExams.length ? { label: examJourneyLabel, tone: 'glass' } : null}
        compact
        highlights={[
          { label: 'Kesintisiz seri', value: streak ? `${streak} gün` : '—' },
          { label: `${rangeContextLabel} çalışma`, value: formatMinutes(overall.minutes) },
          { label: 'İsabet', value: overallAccuracy != null ? `%${overallAccuracy}` : '—' },
        ]}
      />

      <TimeRangeTabs
        options={ANALYTICS_RANGES}
        value={timeRange}
        onChange={(nextRange) => {
          setTimeRange(nextRange)
          setSelectedDay(null)
          setDistributionDate(null)
          setDetailModal(null)
        }}
      />

      {/* ---------- İÇGÖRÜLER ---------- */}
      <InsightBar insights={insights} />

      {/* ---------- METRİKLER ---------- */}
      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-4">
        <MetricTile
          label={`${rangeContextLabel} Çalışma`}
          value={formatMinutes(overall.minutes)}
          icon={Clock}
          tone="brand"
          trend={rangeDays.map((d) => d.minutes)}
          hint={activeRange.description}
          onClick={() => setDetailModal('study')}
        />
        <MetricTile
          label={`${rangeContextLabel} Çözülen`}
          value={overall.solved}
          icon={CheckCircle2}
          tone="accent"
          trend={rangeDays.map((d) => d.solved)}
          hint={`${activeRange.description.toLocaleLowerCase('tr-TR')} · soru`}
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
          hint={`${rangeBranchExams.length} branş · ${rangeMockExams.length} genel`}
          onClick={() => setDetailModal('allExams')}
        />
      </div>

      <SourceNote split={sourceSplit} />

      {/* ---------- ÇALIŞMA DÜZENİ ---------- */}
      <div className="grid lg:grid-cols-[1.35fr_1fr] gap-5">
        <Panel
          title={`${activeRange.label} Çalışma Süresi`}
          description={timeRange === 'year' ? 'Son 12 ay, aylık toplamlar halinde' : `${activeRange.description}, gün gün`}
          icon={Clock}
        >
          <StudyTimeChart
            logs={studyEntries}
            range={timeRange}
            selectedDate={selectedDay}
            onBarClick={(bucket) => {
              if (bucket.minutes > 0) setSelectedDay(bucket.date)
            }}
          />
        </Panel>

        <Panel
          title="Çalışma Düzenin"
          description={timeRange === 'year' ? 'Koyu kareler daha yoğun geçen ayları gösterir' : 'Koyu kareler daha uzun çalıştığın günleri gösterir'}
          icon={Flame}
          iconTone="#D97706"
          footnote={
            streak >= 2
              ? `Şu anda ${streak} günlük kesintisiz bir serin var — bozma.`
              : 'Üst üste iki gün çalıştığında serin burada görünmeye başlar.'
          }
        >
          <ActivityStrip
            days={activityDays}
            periodLabel={activeRange.description}
            activeUnitLabel={timeRange === 'year' ? 'ayda' : 'günde'}
          />

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
              : activeRange.description
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
            logs={rangeDailyLogs}
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
        <BranchExamNetChart exams={rangeBranchExams} />
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

      {/* ---------- VERİ GİRİŞİNE DÖNÜŞ ----------
          Formlar bu sayfadan çıkarıldı; kendi sekmelerine giden yol açık
          kalsın diye sayfanın sonunda tek satırlık bir köprü duruyor. */}
      <section
        className="flex flex-wrap items-center justify-between gap-4 rounded-panel border border-line
                   bg-surface-muted px-5 py-5"
      >
        <div className="min-w-0">
          <h2 className="font-display font-bold text-ink">Grafikler verilerinden besleniyor</h2>
          <p className="mt-1 text-sm text-ink/60">
            Yeni bir çalışma kaydı ya da deneme girdiğinde bu sayfa kendini günceller.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="neutral">{rangeDailyLogs.length} çalışma kaydı</Badge>
          <Button as={Link} to="/gunluk-takip" variant="secondary" size="sm" icon={Clock}>
            Çalışma kaydet
          </Button>
          <Button as={Link} to="/denemeler" variant="secondary" size="sm" icon={Target}>
            Deneme gir
          </Button>
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
        title={`${activeRange.label} Soru Dağılımı`}
      >
        <ul className="flex flex-col divide-y divide-line">
          {rangeSolvedBreakdown.map((d) => (
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
                <li key={s.id ?? s.subject} className="flex items-center justify-between py-2.5 text-sm">
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
