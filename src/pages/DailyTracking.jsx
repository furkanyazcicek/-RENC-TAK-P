import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  CalendarRange,
  CheckCircle2,
  Clock,
  Flame,
  PieChart,
  Target,
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { buildTopicOptions, resolveCurriculumExamTypes } from '../lib/topicHelpers'
import { STATUS } from '../lib/chartTheme'
import {
  accuracy,
  buildInsights,
  combineStudyEntries,
  formatMinutes,
  lastNDays,
  splitBySource,
  studyStreak,
  subjectBreakdown,
  totals,
  weekOverWeek,
} from '../lib/insights'
import DailyLogForm from '../components/DailyLogForm'
import DailyLogsList from '../components/DailyLogsList'
import { AppShell } from '../components/ui'
import {
  ActivityStrip,
  DashboardHero,
  DonutChart,
  InsightBar,
  MetricTile,
  Panel,
  SourceNote,
  SubjectBars,
} from '../components/dashboard'

export default function DailyTracking() {
  const { user } = useAuth()
  const [dailyLogs, setDailyLogs] = useState([])
  const [mockExams, setMockExams] = useState([]) // sınav türü + istatistiklere katkı
  const [branchExams, setBranchExams] = useState([]) // branş denemeleri de çalışmaya sayılır
  const [librarySubjects, setLibrarySubjects] = useState([]) // müfredat dersleri
  const [libraryTopics, setLibraryTopics] = useState([]) // müfredat konuları
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    if (!user) return
    const [
      logsRes,
      mockExamsRes,
      branchExamsRes,
      librarySubjectsRes,
      libraryTopicsRes,
      profileRes,
    ] = await Promise.all([
      supabase
        .from('daily_logs')
        .select('*')
        .eq('student_id', user.id)
        .order('study_date', { ascending: false }),
      // Sınav türünü belirlemenin yanı sıra artık istatistiklere de
      // giriyorlar; alt ders satırları ve süre bu yüzden gerekli.
      supabase
        .from('mock_exams')
        .select('exam_type, exam_date, exam_name, duration_minutes, mock_exam_subjects(*)')
        .eq('student_id', user.id)
        .order('exam_date', { ascending: false }),
      supabase
        .from('exams')
        .select('*')
        .eq('student_id', user.id)
        .order('exam_date', { ascending: false }),
      supabase.from('library_subjects').select('*'),
      supabase.from('library_topics').select('*'),
      supabase.from('profiles').select('full_name').eq('id', user.id).maybeSingle(),
    ])
    setDailyLogs(logsRes.data ?? [])
    setMockExams(mockExamsRes.data ?? [])
    setBranchExams(branchExamsRes.data ?? [])
    setLibrarySubjects(librarySubjectsRes.data ?? [])
    setLibraryTopics(libraryTopicsRes.data ?? [])
    setProfile(profileRes.data ?? null)
    setLoading(false)
  }, [user])

  useEffect(() => {
    load()
  }, [load])

  /* --- Türetilen veriler --- */

  /* Denemeler de çalışmadır (bkz. lib/insights.js).
     ALTTAKİ KAYIT LİSTESİ yalnızca günlük kayıtları gösterir — burası
     onların düzenlendiği sayfa, deneme satırı oraya karışmamalı. Ama
     ÜSTTEKİ ÖZET KARTLARI denemeleri de kapsar ki rakam Anasayfa,
     Analiz ve Veli Paneli'ndekiyle aynı olsun. */
  const studyEntries = useMemo(
    () => combineStudyEntries(dailyLogs, mockExams, branchExams),
    [dailyLogs, mockExams, branchExams]
  )
  const sourceSplit = useMemo(() => splitBySource(studyEntries), [studyEntries])

  const days = useMemo(() => lastNDays(studyEntries, 21), [studyEntries])
  const wow = useMemo(() => weekOverWeek(studyEntries), [studyEntries])
  const streak = useMemo(() => studyStreak(studyEntries), [studyEntries])
  const overall = useMemo(() => totals(studyEntries), [studyEntries])
  const overallAccuracy = useMemo(() => accuracy(studyEntries), [studyEntries])
  const subjects = useMemo(() => subjectBreakdown(studyEntries), [studyEntries])
  const insights = useMemo(
    () => buildInsights(studyEntries, { audience: 'student' }),
    [studyEntries]
  )

  const topicOptions = useMemo(
    () =>
      buildTopicOptions(
        dailyLogs,
        librarySubjects,
        libraryTopics,
        resolveCurriculumExamTypes(mockExams)
      ),
    [dailyLogs, librarySubjects, libraryTopics, mockExams]
  )

  const minutesTrend = days.slice(-7).map((d) => d.minutes)
  const solvedTrend = days.slice(-7).map((d) => d.solved)

  const minutesDelta =
    wow.prevWeek.minutes === 0 && wow.thisWeek.minutes === 0
      ? null
      : {
          value: formatMinutes(Math.abs(wow.minutesDelta)),
          direction:
            wow.minutesDelta > 0 ? 'up' : wow.minutesDelta < 0 ? 'down' : 'flat',
        }

  const solvedDelta =
    wow.prevWeek.solved === 0 && wow.thisWeek.solved === 0
      ? null
      : {
          value: `${Math.abs(wow.solvedDelta)} soru`,
          direction: wow.solvedDelta > 0 ? 'up' : wow.solvedDelta < 0 ? 'down' : 'flat',
        }

  // Doğru / yanlış / boş dağılımı — hepsi sıfırsa halka hiç çizilmez.
  // Burada kategorik palet yerine DURUM renkleri kullanılır: bunlar
  // karşılaştırılan seriler değil, doğrudan doğru/yanlış durumlarıdır;
  // "doğru"nun mavi, "yanlış"ın yeşil olması okuyucuyu yanıltırdı.
  const answerSplit = [
    { label: 'Doğru', count: overall.correct, color: STATUS.good },
    { label: 'Yanlış', count: overall.incorrect, color: STATUS.danger },
    { label: 'Boş', count: overall.empty, color: STATUS.neutral },
  ].filter((d) => d.count > 0)

  const firstName = profile?.full_name?.split(' ')[0]

  return (
    <AppShell
      title="Günlük Takip"
      subtitle="Her gün ne çalıştığını kaydet, gelişimini izle"
      loading={loading}
      loadingLabel="Çalışma kayıtların yükleniyor…"
      width="wide"
    >
      <DashboardHero
        eyebrow="Günlük Çalışma"
        title={firstName ? `${firstName}, bu haftaki temposu` : 'Bu haftaki tempon'}
        subtitle={
          dailyLogs.length
            ? `${dailyLogs.length} çalışma kaydı üzerinden hesaplandı`
            : 'İlk kaydını girdiğinde haftalık tempon burada görünecek'
        }
        badge={streak >= 2 ? { label: `${streak} günlük seri`, tone: 'amber' } : null}
        highlights={
          dailyLogs.length
            ? [
                { label: 'Bu hafta', value: formatMinutes(wow.thisWeek.minutes) },
                { label: 'Bu hafta soru', value: wow.thisWeek.solved },
                {
                  label: 'İsabet',
                  value: overallAccuracy != null ? `%${overallAccuracy}` : '—',
                },
              ]
            : []
        }
      />

      <InsightBar insights={insights} title="Çalışmanda öne çıkanlar" />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricTile
          label="Bu Hafta Çalışma"
          value={formatMinutes(wow.thisWeek.minutes)}
          hint="geçen haftaya göre"
          icon={Clock}
          tone="brand"
          delta={minutesDelta}
          trend={minutesTrend}
        />
        <MetricTile
          label="Bu Hafta Soru"
          value={wow.thisWeek.solved}
          hint="geçen haftaya göre"
          icon={CheckCircle2}
          tone="info"
          delta={solvedDelta}
          trend={solvedTrend}
        />
        <MetricTile
          label="Genel İsabet"
          value={overallAccuracy != null ? `%${overallAccuracy}` : '—'}
          hint={`${overall.correct + overall.incorrect} işaretlenen soruda`}
          icon={Target}
          tone={
            overallAccuracy == null
              ? 'brand'
              : overallAccuracy >= 75
                ? 'success'
                : overallAccuracy >= 55
                  ? 'accent'
                  : 'warning'
          }
        />
        <MetricTile
          label="Kesintisiz Seri"
          value={streak ? `${streak} gün` : '—'}
          hint={streak ? 'ara vermeden' : 'bugün başlayabilirsin'}
          icon={Flame}
          tone={streak >= 5 ? 'success' : 'purple'}
        />
      </div>

      <SourceNote split={sourceSplit} />

      <Panel
        title="Son 21 Gün"
        description="Her kare bir gün; koyulaştıkça o gün daha çok çalışılmış demektir"
        icon={CalendarRange}
        footnote="Kutunun üzerine gelince o günün süresi ve çözülen soru sayısı görünür."
      >
        <ActivityStrip days={days} />
      </Panel>

      <div className="grid gap-6 lg:grid-cols-2">
        {subjects.length > 0 && (
          <Panel
            title="Ders Dağılımı"
            description="Çözdüğün soruların derslere göre payı"
            icon={PieChart}
            footnote="Bir satırın üzerine gelince o dersteki isabet oranın belirir."
          >
            <SubjectBars data={subjects.slice(0, 8)} />
          </Panel>
        )}

        {answerSplit.length > 0 && (
          <Panel
            title="Doğru / Yanlış / Boş"
            description="Tüm kayıtlarının toplam dağılımı"
            icon={Target}
            footnote="Boşlar isabet oranına dahil edilmez; isabet = doğru ÷ (doğru + yanlış)."
          >
            <DonutChart data={answerSplit} centerLabel="soru" />
          </Panel>
        )}
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-2">
        <DailyLogForm onSubmitted={load} existingTopics={topicOptions} />
        <DailyLogsList logs={dailyLogs} />
      </div>
    </AppShell>
  )
}
