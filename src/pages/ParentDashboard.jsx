import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabaseClient'
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  Eye,
  Flame,
  ListChecks,
  LogOut,
  PieChart,
  ThumbsUp,
  TrendingUp,
  UserX,
  XCircle,
} from 'lucide-react'

import MockExamTrendChart from '../components/MockExamTrendChart'
import DailyLogsList from '../components/DailyLogsList'
import { AuroraBackground, Badge, Button, EmptyState, Logo, Modal, PageLoader } from '../components/ui'
import {
  ActivityStrip,
  DashboardHero,
  DonutChart,
  ExamAccordion,
  InsightBar,
  MetricTile,
  Panel,
  SubjectBars,
} from '../components/dashboard'
import {
  accuracy,
  buildInsights,
  formatMinutes,
  lastNDays,
  studyStreak,
  subjectBreakdown,
  totals,
  weekOverWeek,
} from '../lib/insights'

export default function ParentDashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const [studentProfile, setStudentProfile] = useState(null)
  const [dailyLogs, setDailyLogs] = useState([])
  const [mockExams, setMockExams] = useState([])
  const [homeworks, setHomeworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [notLinked, setNotLinked] = useState(false)

  const [detailModal, setDetailModal] = useState(null) // 'time' | 'solved' | 'correct' | 'wrong'
  const [selectedDate, setSelectedDate] = useState('')

  const load = useCallback(async () => {
    if (!user) return
    setLoading(true)
    setNotLinked(false)

    // 1) Velinin profilinden takip ettiği öğrencinin id'si
    const { data: parentProfile } = await supabase
      .from('profiles')
      .select('student_id')
      .eq('id', user.id)
      .single()

    const studentId = parentProfile?.student_id
    if (!studentId) {
      setNotLinked(true)
      setLoading(false)
      return
    }

    // 2) Sadece bu öğrenciye ait veriler
    const [studentRes, dailyLogsRes, mockExamsRes, mockExamSubjectsRes, homeworksRes] =
      await Promise.all([
        supabase.from('profiles').select('id, full_name').eq('id', studentId).single(),
        supabase
          .from('daily_logs')
          .select('*')
          .eq('student_id', studentId)
          .order('study_date', { ascending: false }),
        supabase
          .from('mock_exams')
          .select('*')
          .eq('student_id', studentId)
          .order('exam_date', { ascending: false }),
        supabase.from('mock_exam_subjects').select('*'),
        supabase
          .from('homeworks')
          .select('*')
          .eq('student_id', studentId)
          .order('due_date', { ascending: true, nullsFirst: false })
          .order('created_at', { ascending: false }),
      ])

    setStudentProfile(studentRes.data)
    setDailyLogs(dailyLogsRes.data ?? [])

    // Denemeleri alt ders netleriyle eşleştir
    const examsRaw = mockExamsRes.data ?? []
    const subjectsRaw = mockExamSubjectsRes.data ?? []
    setMockExams(
      examsRaw.map((exam) => ({
        ...exam,
        mock_exam_subjects: subjectsRaw.filter(
          (s) => s.mock_exam_id === exam.id || s.exam_id === exam.id
        ),
      }))
    )

    setHomeworks(homeworksRes.data ?? [])
    setLoading(false)
  }, [user])

  useEffect(() => {
    load()
  }, [load])

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  /* ---- Hesaplar ---- */
  const overall = useMemo(() => totals(dailyLogs), [dailyLogs])
  const wow = useMemo(() => weekOverWeek(dailyLogs), [dailyLogs])
  const streak = useMemo(() => studyStreak(dailyLogs), [dailyLogs])
  const last14 = useMemo(() => lastNDays(dailyLogs, 14), [dailyLogs])
  const overallAccuracy = useMemo(() => accuracy(dailyLogs), [dailyLogs])
  const subjects = useMemo(() => subjectBreakdown(dailyLogs), [dailyLogs])
  const insights = useMemo(
    () =>
      buildInsights(dailyLogs, { audience: 'parent', name: studentProfile?.full_name ?? '' }),
    [dailyLogs, studentProfile]
  )

  const byDay = useMemo(() => {
    const map = {}
    dailyLogs.forEach((l) => {
      const d = l.study_date
      if (!map[d]) map[d] = { date: d, minutes: 0, solved: 0, correct: 0, wrong: 0, items: [] }
      map[d].minutes += l.duration_minutes || 0
      map[d].solved += (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0)
      map[d].correct += l.correct || 0
      map[d].wrong += l.incorrect || 0
      map[d].items.push(l)
    })
    return Object.values(map).sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [dailyLogs])

  const availableDates = useMemo(
    () => [...new Set(dailyLogs.map((l) => l.study_date))].sort((a, b) => new Date(b) - new Date(a)),
    [dailyLogs]
  )

  const dayDistribution = useMemo(() => {
    if (!selectedDate) return []
    const map = {}
    dailyLogs
      .filter((l) => l.study_date === selectedDate)
      .forEach((l) => {
        const solved = (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0)
        if (solved <= 0) return
        const label = l.topic ? `${l.subject ?? ''} — ${l.topic}`.replace(/^ — /, '') : l.subject || 'Diğer'
        map[label] = (map[label] || 0) + solved
      })
    return Object.entries(map)
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count)
  }, [dailyLogs, selectedDate])

  const examRows = useMemo(
    () =>
      [...mockExams]
        .map((e) => ({
          id: e.id,
          date: e.exam_date,
          examType: e.exam_type,
          examName: e.exam_name,
          totalNet:
            Math.round((e.mock_exam_subjects ?? []).reduce((s, x) => s + Number(x.net || 0), 0) * 100) /
            100,
          subjects: e.mock_exam_subjects ?? [],
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date)),
    [mockExams]
  )

  const isHomeworkDone = (h) => h.status === 'Tamamlandı' || h.is_completed === true
  const pendingHomeworks = useMemo(() => homeworks.filter((h) => !isHomeworkDone(h)), [homeworks])
  const doneHomeworks = useMemo(() => homeworks.filter((h) => isHomeworkDone(h)), [homeworks])

  if (loading) return <PageLoader label="Panel hazırlanıyor…" />

  if (notLinked || !studentProfile) {
    return (
      <div className="relative grid min-h-screen place-items-center overflow-hidden px-4">
        <AuroraBackground variant="page" />
        <div className="relative z-10 w-full max-w-md">
          <EmptyState
            icon={UserX}
            title="Bağlı öğrenci bulunamadı"
            description="Hesabınıza bağlı bir öğrenci kaydı yok. Lütfen öğrenci koçunuzla iletişime geçin; bağlantı kurulduğunda paneliniz otomatik olarak dolacaktır."
            action={
              <Button variant="secondary" icon={LogOut} onClick={handleLogout}>
                Çıkış Yap
              </Button>
            }
          />
        </div>
      </div>
    )
  }

  const detailModalMeta = {
    time: { title: 'Günlük Çalışma Süresi Dökümü', field: 'minutes', format: formatMinutes, tone: 'text-brand-600' },
    solved: { title: 'Günlük Çözülen Soru Dökümü', field: 'solved', suffix: ' soru', tone: 'text-accent-600' },
    correct: { title: 'Günlük Doğru Sayısı Dökümü', field: 'correct', suffix: ' doğru', tone: 'text-success-600' },
    wrong: { title: 'Günlük Yanlış Sayısı Dökümü', field: 'wrong', suffix: ' yanlış', tone: 'text-danger-600' },
  }
  const activeMeta = detailModal ? detailModalMeta[detailModal] : null

  const initials =
    studentProfile.full_name
      ?.split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toLocaleUpperCase('tr-TR') || '?'

  const lastExamNet = examRows[0]?.totalNet ?? null
  const netSpark = [...examRows].slice(0, 8).map((e) => e.totalNet).reverse()

  return (
    /* Veli panelinin tek sayfası var; bu yüzden AppShell'in sidebar'ı yerine
       kendi ince üst şeridini taşır. Aurora zemini ve cam şerit sayesinde
       yine de uygulamanın geri kalanıyla aynı ürün gibi durur. */
    <div className="relative min-h-screen">
      <AuroraBackground variant="page" />

      <header className="sticky top-0 z-sticky border-b border-line glass pt-safe-top">
        <div className="mx-auto flex h-header max-w-content items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5">
            <Logo size="sm" markOnly />
            <div className="min-w-0">
              <h1 className="truncate font-display font-bold leading-tight text-ink">
                Veli Paneli
              </h1>
              <p className="flex items-center gap-1.5 truncate text-xs text-ink/60">
                <Eye className="h-3 w-3 shrink-0" strokeWidth={2.2} aria-hidden="true" />
                Dr. Koç · gözlemci modu
              </p>
            </div>
          </div>
          <Button variant="secondary" size="sm" icon={LogOut} onClick={handleLogout}>
            <span className="hidden xs:inline">Çıkış</span>
          </Button>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-content flex-col gap-5 px-4 py-6 animate-fade-in sm:gap-6 sm:px-6 lg:px-8 lg:py-8">
        {/* ---------- KARŞILAMA ---------- */}
        <DashboardHero
          eyebrow="Veli Paneli"
          title={studentProfile.full_name}
          subtitle="Aşağıdaki tablo yalnızca görüntülemeniz içindir; hiçbir kayıt değiştirilemez."
          avatar={initials}
          badge={{ label: 'Gözlemci modu', tone: 'glass' }}
          highlights={[
            { label: 'Kesintisiz seri', value: streak ? `${streak} gün` : '—' },
            { label: 'Bu hafta', value: formatMinutes(wow.thisWeek.minutes) },
            { label: 'İsabet', value: overallAccuracy != null ? `%${overallAccuracy}` : '—' },
          ]}
        />

        {/* ---------- İÇGÖRÜLER ---------- */}
        <InsightBar insights={insights} title="Bu haftanın özeti" />

        {/* ---------- METRİKLER ---------- */}
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-4">
          <MetricTile
            label="Toplam Çalışma"
            value={formatMinutes(overall.minutes)}
            icon={Clock}
            tone="brand"
            trend={last14.map((d) => d.minutes)}
            delta={
              wow.prevWeek.minutes > 0
                ? {
                    value: `${wow.minutesDelta >= 0 ? '+' : '−'}${formatMinutes(Math.abs(wow.minutesDelta))}`,
                    direction: wow.minutesDelta > 0 ? 'up' : wow.minutesDelta < 0 ? 'down' : 'flat',
                  }
                : null
            }
            hint="bu hafta / geçen hafta"
            onClick={() => setDetailModal('time')}
          />
          <MetricTile
            label="Çözülen Soru"
            value={overall.solved}
            icon={CheckCircle2}
            tone="accent"
            trend={last14.map((d) => d.solved)}
            hint="tüm zamanlar"
            onClick={() => setDetailModal('solved')}
          />
          <MetricTile
            label="Toplam Doğru"
            value={overall.correct}
            icon={ThumbsUp}
            tone="success"
            hint={overallAccuracy != null ? `%${overallAccuracy} isabet` : null}
            onClick={() => setDetailModal('correct')}
          />
          <MetricTile
            label="Toplam Yanlış"
            value={overall.incorrect}
            icon={XCircle}
            tone="danger"
            hint="üzerine çalışılacak alan"
            onClick={() => setDetailModal('wrong')}
          />
        </div>

        {/* ---------- ÇALIŞMA DÜZENİ + DERS DAĞILIMI ---------- */}
        <div className="grid lg:grid-cols-2 gap-5">
          <Panel
            title="Çalışma Düzeni"
            description="Son 14 gün — koyu kareler daha uzun çalışılan günler"
            icon={Flame}
            iconTone="#D97706"
            footnote={
              streak >= 2
                ? `Şu anda ${streak} günlük kesintisiz çalışma serisi var.`
                : 'Düzenlilik, tek bir günün süresinden daha belirleyicidir.'
            }
          >
            <ActivityStrip days={last14} />

            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
              <div>
                <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Bu hafta</p>
                <p className="mt-1 font-display text-lg font-bold tabular text-ink">
                  {formatMinutes(wow.thisWeek.minutes)}
                </p>
              </div>
              <div>
                <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Günlük ort.</p>
                <p className="mt-1 font-display text-lg font-bold tabular text-ink">
                  {formatMinutes(Math.round(wow.thisWeek.minutes / 7))}
                </p>
              </div>
              <div>
                <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Çözülen</p>
                <p className="mt-1 font-display text-lg font-bold tabular text-ink">
                  {wow.thisWeek.solved}
                </p>
              </div>
            </div>
          </Panel>

          <Panel
            title="Ders Bazlı Çalışma Dağılımı"
            description="Çözülen soruların derslere göre payı (tüm zamanlar)"
            icon={ListChecks}
            iconTone="#DB2777"
          >
            <SubjectBars
              data={subjects.slice(0, 6)}
              emptyText="Henüz çalışma kaydı bulunmuyor."
            />
          </Panel>
        </div>

        {/* ---------- GÜNLÜK DAĞILIM ---------- */}
        <Panel
          title="Günlük Ders/Konu Dağılımı"
          description="Bir tarih seçerek o günün soru dağılımını görebilirsiniz"
          icon={PieChart}
          iconTone="#0891B2"
          action={
            <input
              type="date"
              value={selectedDate}
              max={new Date().toISOString().slice(0, 10)}
              onChange={(e) => setSelectedDate(e.target.value)}
              list="parent-log-dates"
              aria-label="Tarih seç"
              className="input-base h-9 w-auto py-0 text-xs"
            />
          }
        >
          <datalist id="parent-log-dates">
            {availableDates.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>

          {!selectedDate ? (
            <EmptyState
              icon={CalendarDays}
              title="Bir tarih seçin"
              description="Sağ üstteki takvimden gün seçtiğinizde o günün ders ve konu bazlı soru dağılımı burada görünür."
              compact
              className="border-dashed shadow-none"
            />
          ) : dayDistribution.length === 0 ? (
            <EmptyState
              icon={CalendarDays}
              title="Bu tarihte kayıt yok"
              description={`${new Date(selectedDate).toLocaleDateString('tr-TR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })} tarihinde soru çözümü içeren bir çalışma kaydı bulunmuyor.`}
              compact
              className="border-dashed shadow-none"
            />
          ) : (
            <DonutChart data={dayDistribution} centerLabel="soru" />
          )}
        </Panel>

        {/* ---------- DENEMELER ---------- */}
        <section className="flex flex-col gap-5">
          <div className="flex items-end justify-between gap-3 flex-wrap">
            <div>
              <h2 className="section-title">Deneme Sınavı Sonuçları</h2>
              <p className="mt-0.5 text-sm text-ink/60">
                Bir denemeye tıklayarak ders bazlı net dökümünü açabilirsiniz.
              </p>
            </div>
            {lastExamNet != null && (
              <Badge tone="brand" icon={TrendingUp}>
                Son deneme {lastExamNet.toLocaleString('tr-TR')} net
              </Badge>
            )}
          </div>

          <Panel title="Net Gelişimi" icon={TrendingUp} iconTone="#059669">
            <MockExamTrendChart exams={mockExams} />
          </Panel>

          <ExamAccordion rows={examRows} />
        </section>

        {/* ---------- ÖDEVLER ---------- */}
        <section className="flex flex-col gap-3">
          <div className="flex items-end justify-between gap-3">
            <h2 className="section-title">Ödevler ve Görevler</h2>
            <div className="flex gap-2">
              {pendingHomeworks.length > 0 && (
                <Badge tone="warning">{pendingHomeworks.length} devam ediyor</Badge>
              )}
              {doneHomeworks.length > 0 && (
                <Badge tone="success">{doneHomeworks.length} tamamlandı</Badge>
              )}
            </div>
          </div>

          {homeworks.length === 0 ? (
            <EmptyState
              icon={ListChecks}
              title="Henüz ödev atanmamış"
              description="Koç tarafından ödev atandığında burada durumuyla birlikte görünecek."
              compact
            />
          ) : (
            <div className="card divide-y divide-line">
              {[...pendingHomeworks, ...doneHomeworks].map((h) => {
                const done = isHomeworkDone(h)
                return (
                  <div key={h.id} className="flex items-start justify-between gap-3 p-4 sm:p-5">
                    <div className="min-w-0 flex items-start gap-3">
                      <span
                        className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                          done ? 'bg-success-50 text-success-600' : 'bg-warning-50 text-warning-600'
                        }`}
                      >
                        {done ? (
                          <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.4} />
                        ) : (
                          <Clock className="h-3.5 w-3.5" strokeWidth={2.4} />
                        )}
                      </span>
                      <div className="min-w-0">
                        <p
                          className={`font-semibold ${done ? 'text-ink/55 line-through' : 'text-ink'}`}
                        >
                          {h.title}
                        </p>
                        {h.description && (
                          <p className="mt-0.5 text-sm text-ink/60 leading-relaxed">
                            {h.description}
                          </p>
                        )}
                        {h.due_date && (
                          <p className="mt-1.5 text-xs text-ink/50">
                            Son tarih:{' '}
                            {new Date(h.due_date).toLocaleDateString('tr-TR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                    <Badge tone={done ? 'success' : 'warning'} dot className="shrink-0">
                      {done ? 'Tamamlandı' : 'Devam ediyor'}
                    </Badge>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {/* ---------- ÇALIŞMA GEÇMİŞİ ---------- */}
        <section className="flex flex-col gap-3">
          <h2 className="section-title">Detaylı Çalışma Geçmişi</h2>
          <DailyLogsList logs={dailyLogs} readOnly title="" />
        </section>
      </main>

      {/* ---------- DETAY MODALI ---------- */}
      <Modal open={!!detailModal} onClose={() => setDetailModal(null)} title={activeMeta?.title ?? ''}>
        {byDay.length === 0 ? (
          <p className="text-sm text-ink/55">Henüz çalışma kaydı bulunmuyor.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-line">
            {byDay.map((d) => (
              <li key={d.date} className="py-3">
                <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                  <span className="font-semibold text-ink/70">
                    {new Date(d.date).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      weekday: 'long',
                    })}
                  </span>
                  {activeMeta && (
                    <span className={`font-bold tabular ${activeMeta.tone}`}>
                      {activeMeta.format
                        ? activeMeta.format(d[activeMeta.field])
                        : `${d[activeMeta.field]}${activeMeta.suffix ?? ''}`}
                    </span>
                  )}
                </div>
                <ul className="flex flex-col gap-1 border-l-2 border-line pl-3">
                  {d.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-2 text-xs text-ink/60"
                    >
                      <span className="truncate">
                        {item.subject}
                        {item.topic ? ` — ${item.topic}` : ''}
                      </span>
                      <span className="shrink-0 tabular text-ink/55">
                        {item.duration_minutes ? formatMinutes(item.duration_minutes) : ''}
                        {item.duration_minutes && (item.correct || item.incorrect || item.empty)
                          ? ' · '
                          : ''}
                        {item.correct ? `${item.correct}D` : ''}
                        {item.incorrect ? ` ${item.incorrect}Y` : ''}
                        {item.empty ? ` ${item.empty}B` : ''}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </div>
  )
}
