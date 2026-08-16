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
  Link2,
  ListChecks,
  LogOut,
  PieChart,
  ShieldCheck,
  ThumbsUp,
  Trash2,
  TrendingUp,
  UserCheck,
  UserX,
  XCircle,
} from 'lucide-react'

import MockExamTrendChart from '../components/MockExamTrendChart'
import BranchExamNetChart from '../components/BranchExamNetChart'
import ExamTypeTabs from '../components/ExamTypeTabs'
import DailyLogsList from '../components/DailyLogsList'
import ParentCodeRedeemPanel from '../components/parent/ParentCodeRedeemPanel'
import {
  AuroraBackground,
  Badge,
  Button,
  EmptyState,
  Logo,
  Modal,
  PageLoader,
  Tabs,
  useToast,
} from '../components/ui'
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
import { listParentLinkedStudents, revokeParentLink } from '../lib/parentLink'
import { splitSubjectTopic } from '../lib/topicHelpers'
import {
  accuracy,
  buildInsights,
  formatMinutes,
  lastNDays,
  mockExamRows,
  studyStreak,
  subjectBreakdown,
  totals,
  weekOverWeek,
} from '../lib/insights'

/**
 * Veli Paneli.
 *
 * HANGİ ÖĞRENCİ GÖSTERİLİR
 * Kaynak `parent_links` tablosudur ve yalnızca `status = 'active'` satırlar
 * sayılır — yani öğrencinin kendi profilinden ONAYLADIĞI bağlar. Eski
 * `profiles.student_id` kolonuna artık BAKILMAZ; o kolon veli tarafından
 * yazılabildiği için eşleşmeyi belirlemeye uygun değildi.
 *
 * GÜVENLİK
 * Aşağıdaki sorgular `student_id`'yi filtre olarak geçirir ama bu bir
 * güvenlik sınırı DEĞİLDİR, yalnızca gereksiz veri çekmemek içindir.
 * Gerçek sınır RLS'tedir: her tablonun politikası
 * `is_linked_parent_of(student_id)` üzerinden geçer. Tarayıcı konsolundan
 * başka bir öğrencinin id'si yazılsa da sorgular boş döner.
 *
 * VERİ DOĞRULUĞU
 * Metrikler öğrenci panelindekiyle aynı fonksiyonlardan (`lib/insights`,
 * `lib/topicHelpers`) hesaplanır ki iki panel aynı sayıyı göstersin.
 * Ders adı `daily_logs.topic` içinden `splitSubjectTopic` ile çıkarılır —
 * tabloda `subject` diye bir kolon yoktur.
 */
export default function ParentDashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()

  /* ---- Bağlantılar ---- */
  const [activeLinks, setActiveLinks] = useState([])
  const [pendingLinks, setPendingLinks] = useState([])
  const [selectedStudentId, setSelectedStudentId] = useState(null)
  const [linksLoading, setLinksLoading] = useState(true)
  const [linkModal, setLinkModal] = useState(false)
  const [revokingId, setRevokingId] = useState(null)

  /* ---- Seçili öğrencinin verileri ---- */
  const [dailyLogs, setDailyLogs] = useState([])
  const [mockExams, setMockExams] = useState([])
  const [branchExams, setBranchExams] = useState([])
  const [homeworks, setHomeworks] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  const [detailModal, setDetailModal] = useState(null) // 'time' | 'solved' | 'correct' | 'wrong'
  const [selectedDate, setSelectedDate] = useState('')
  const [examType, setExamType] = useState(null) // null = öğrencinin en yeni deneme türü

  /* ================================================================
     1) BAĞLANTILAR
     ================================================================ */
  const loadLinks = useCallback(async () => {
    if (!user) return
    setLinksLoading(true)

    const res = await listParentLinkedStudents()
    const active = res.active ?? []
    setActiveLinks(active)
    setPendingLinks(res.pending ?? [])

    // Seçili öğrenci hâlâ onaylı listede mi? Bağlantı kaldırılmışsa
    // ekranda eski öğrencinin verisi asılı kalmasın.
    setSelectedStudentId((current) => {
      if (current && active.some((l) => l.student_id === current)) return current
      return active[0]?.student_id ?? null
    })

    setLinksLoading(false)
  }, [user])

  useEffect(() => {
    loadLinks()
  }, [loadLinks])

  /* ================================================================
     2) SEÇİLİ ÖĞRENCİNİN VERİLERİ
     ================================================================ */
  const loadStudentData = useCallback(async () => {
    if (!selectedStudentId) {
      setDailyLogs([])
      setMockExams([])
      setBranchExams([])
      setHomeworks([])
      return
    }

    setDataLoading(true)
    // Öğrenci değişirken önceki öğrencinin tarihi/deneme türü seçili kalmasın.
    setSelectedDate('')
    setExamType(null)

    const [logsRes, mockRes, branchRes, homeworkRes] = await Promise.all([
      supabase
        .from('daily_logs')
        .select('*')
        .eq('student_id', selectedStudentId)
        .order('study_date', { ascending: false }),
      // Alt ders netleri GÖMÜLÜ sorguyla gelir. Eskiden
      // `.from('mock_exam_subjects').select('*')` ile FİLTRESİZ çekilip
      // istemcide eşleştiriliyordu; hem gereksiz veri hem de yanlış
      // eşleşme kaynağıydı (olmayan bir `exam_id` kolonuna bakılıyordu).
      supabase
        .from('mock_exams')
        .select('*, mock_exam_subjects(*)')
        .eq('student_id', selectedStudentId)
        .order('exam_date', { ascending: false }),
      supabase
        .from('exams')
        .select('*')
        .eq('student_id', selectedStudentId)
        .order('exam_date', { ascending: false }),
      supabase
        .from('homeworks')
        .select('*')
        .eq('student_id', selectedStudentId)
        .order('due_date', { ascending: true, nullsFirst: false })
        .order('created_at', { ascending: false }),
    ])

    setDailyLogs(logsRes.data ?? [])
    setMockExams(mockRes.data ?? [])
    setBranchExams(branchRes.data ?? [])
    setHomeworks(homeworkRes.data ?? [])
    setDataLoading(false)
  }, [selectedStudentId])

  useEffect(() => {
    loadStudentData()
  }, [loadStudentData])

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  async function handleRevoke(link) {
    setRevokingId(link.link_id)
    const res = await revokeParentLink(link.link_id)
    setRevokingId(null)

    if (res.error) {
      toast.error('Bağlantı kaldırılamadı', { description: res.error })
      return
    }
    toast.success(`${link.student_name} bağlantısı kaldırıldı`)
    loadLinks()
  }

  /* ================================================================
     3) HESAPLAR — öğrenci panelindekiyle aynı fonksiyonlar
     ================================================================ */
  const selectedLink = activeLinks.find((l) => l.student_id === selectedStudentId) ?? null
  const studentName = selectedLink?.student_name ?? ''

  const overall = useMemo(() => totals(dailyLogs), [dailyLogs])
  const wow = useMemo(() => weekOverWeek(dailyLogs), [dailyLogs])
  const streak = useMemo(() => studyStreak(dailyLogs), [dailyLogs])
  const last14 = useMemo(() => lastNDays(dailyLogs, 14), [dailyLogs])
  const overallAccuracy = useMemo(() => accuracy(dailyLogs), [dailyLogs])
  const subjects = useMemo(() => subjectBreakdown(dailyLogs), [dailyLogs])
  const insights = useMemo(
    () => buildInsights(dailyLogs, { audience: 'parent', name: studentName }),
    [dailyLogs, studentName]
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
        // `l.subject` diye bir kolon YOK — ders adı topic içinden çıkar.
        const { subject, topic } = splitSubjectTopic(l.topic)
        const label = topic ? `${subject} — ${topic}` : subject || 'Diğer'
        map[label] = (map[label] || 0) + solved
      })
    return Object.entries(map)
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count)
  }, [dailyLogs, selectedDate])

  /* Deneme türleri ASLA aynı grafikte karışmaz — TYT 120, AYT 80, LGS 90
     net üzerinden hesaplanır. Hepsini tek çizgiye dizmek, öğrenci
     türler arası geçiş yaptıkça var olmayan bir "düşüş/yükseliş"
     gösteriyordu. Öğrenci panelindeki (Analytics.jsx) davranışın aynısı. */
  const examCountsByType = useMemo(() => {
    const counts = {}
    mockExams.forEach((e) => {
      counts[e.exam_type] = (counts[e.exam_type] ?? 0) + 1
    })
    return counts
  }, [mockExams])

  const activeExamType = examType ?? mockExams[0]?.exam_type ?? null

  const examsForType = useMemo(
    () => mockExams.filter((e) => e.exam_type === activeExamType),
    [mockExams, activeExamType]
  )

  // Deneme satırları öğrenci panelindekiyle aynı yardımcıdan üretilir.
  const examRows = useMemo(() => mockExamRows(examsForType), [examsForType])

  const isHomeworkDone = (h) => h.status === 'Tamamlandı' || h.is_completed === true
  const pendingHomeworks = useMemo(() => homeworks.filter((h) => !isHomeworkDone(h)), [homeworks])
  const doneHomeworks = useMemo(() => homeworks.filter((h) => isHomeworkDone(h)), [homeworks])

  /* ================================================================
     4) EKRANLAR
     ================================================================ */
  if (linksLoading) return <PageLoader label="Panel hazırlanıyor…" />

  const header = (
    <header className="sticky top-0 z-sticky border-b border-line glass pt-safe-top">
      <div className="mx-auto flex h-header max-w-content items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <Logo size="sm" markOnly />
          <div className="min-w-0">
            <h1 className="truncate font-display font-bold leading-tight text-ink">Veli Paneli</h1>
            <p className="flex items-center gap-1.5 truncate text-xs text-ink/60">
              <Eye className="h-3 w-3 shrink-0" strokeWidth={2.2} aria-hidden="true" />
              Dr. Koç · gözlemci modu
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button variant="secondary" size="sm" icon={Link2} onClick={() => setLinkModal(true)}>
            <span className="hidden xs:inline">Bağlantılar</span>
          </Button>
          <Button variant="ghost" size="sm" icon={LogOut} onClick={handleLogout}>
            <span className="hidden sm:inline">Çıkış</span>
          </Button>
        </div>
      </div>
    </header>
  )

  /* ---------- ONAYLI ÖĞRENCİ YOK ---------- */
  if (activeLinks.length === 0) {
    return (
      <div className="relative min-h-screen">
        <AuroraBackground variant="page" />
        {header}

        <main className="relative z-10 mx-auto flex w-full max-w-2xl flex-col gap-5 px-4 py-8 animate-fade-in sm:px-6">
          {pendingLinks.length > 0 && (
            <EmptyState
              icon={Clock}
              title="Öğrenci onayı bekleniyor"
              description={`${pendingLinks
                .map((l) => l.student_name)
                .join(', ')} adına gönderdiğiniz bağlantı isteği henüz onaylanmadı. Öğrenci kendi profilindeki "Veli Doğrula" bölümünden onayladığında paneliniz otomatik olarak dolacak.`}
              compact
              action={
                <Button variant="secondary" onClick={loadLinks}>
                  Durumu yenile
                </Button>
              }
            />
          )}

          <ParentCodeRedeemPanel onLinked={loadLinks} />

          <EmptyState
            icon={UserX}
            title="Henüz bağlı öğrenci yok"
            description="Öğrencinizin verilerini görebilmek için yukarıdaki alana, öğrencinin kendi profilinden oluşturduğu doğrulama kodunu girin. Bağlantı öğrenci onayladıktan sonra aktifleşir."
            compact
            className="border-dashed shadow-none"
          />
        </main>
      </div>
    )
  }

  /* ---------- PANEL ---------- */
  const detailModalMeta = {
    time: { title: 'Günlük Çalışma Süresi Dökümü', field: 'minutes', format: formatMinutes, tone: 'text-brand-600' },
    solved: { title: 'Günlük Çözülen Soru Dökümü', field: 'solved', suffix: ' soru', tone: 'text-accent-600' },
    correct: { title: 'Günlük Doğru Sayısı Dökümü', field: 'correct', suffix: ' doğru', tone: 'text-success-600' },
    wrong: { title: 'Günlük Yanlış Sayısı Dökümü', field: 'wrong', suffix: ' yanlış', tone: 'text-danger-600' },
  }
  const activeMeta = detailModal ? detailModalMeta[detailModal] : null

  const initials =
    studentName
      ?.split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toLocaleUpperCase('tr-TR') || '?'

  const lastExamNet = examRows[0]?.totalNet ?? null

  return (
    /* Veli panelinin tek sayfası var; bu yüzden AppShell'in sidebar'ı yerine
       kendi ince üst şeridini taşır. Aurora zemini ve cam şerit sayesinde
       yine de uygulamanın geri kalanıyla aynı ürün gibi durur. */
    <div className="relative min-h-screen">
      <AuroraBackground variant="page" />
      {header}

      <main className="relative z-10 mx-auto flex w-full max-w-content flex-col gap-5 px-4 py-6 animate-fade-in sm:gap-6 sm:px-6 lg:px-8 lg:py-8">
        {/* ---------- ÖĞRENCİ SEÇİCİ (birden fazla çocuk varsa) ----------
            Her öğrencinin verisi ayrı yüklenir; iki çocuğun kaydı asla
            aynı hesapta toplanmaz. */}
        {activeLinks.length > 1 && (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-2xs font-bold uppercase tracking-wider text-ink/55">Öğrenci</span>
            <Tabs
              items={activeLinks.map((l) => ({ value: l.student_id, label: l.student_name }))}
              value={selectedStudentId}
              onChange={setSelectedStudentId}
            />
          </div>
        )}

        {dataLoading ? (
          <div className="grid gap-4">
            <div className="h-40 animate-pulse rounded-card bg-surface-sunken" />
            <div className="h-28 animate-pulse rounded-card bg-surface-sunken" />
          </div>
        ) : (
          <>
            {/* ---------- KARŞILAMA ---------- */}
            <DashboardHero
              eyebrow="Veli Paneli"
              title={studentName}
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
                    Son {activeExamType} denemesi {lastExamNet.toLocaleString('tr-TR')} net
                  </Badge>
                )}
              </div>

              {mockExams.length > 0 && (
                <ExamTypeTabs
                  value={activeExamType}
                  onChange={setExamType}
                  counts={examCountsByType}
                />
              )}

              <Panel
                title="Net Gelişimi"
                description={
                  activeExamType
                    ? `${activeExamType} denemelerinin net seyri — türler ayrı gösterilir`
                    : undefined
                }
                icon={TrendingUp}
                iconTone="#059669"
              >
                <MockExamTrendChart exams={examsForType} />
              </Panel>

              <ExamAccordion rows={examRows} />

              {/* Branş denemeleri öğrenci panelinde vardı, veli panelinde
                  hiç yüklenmiyordu — "aynı öğrenci, farklı tablo" farkının
                  kaynaklarından biriydi. */}
              {branchExams.length > 0 && (
                <Panel
                  title="Branş Denemeleri"
                  description="Tek ders üzerine çözülen denemelerin net gelişimi"
                  icon={TrendingUp}
                  iconTone="#7C3AED"
                >
                  <BranchExamNetChart exams={branchExams} />
                </Panel>
              )}
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
              <DailyLogsList logs={dailyLogs} title="Çalışma Geçmişi" />
            </section>
          </>
        )}
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
                  {d.items.map((item, i) => {
                    const { subject, topic } = splitSubjectTopic(item.topic)
                    return (
                      <li
                        key={item.id ?? i}
                        className="flex items-center justify-between gap-2 text-xs text-ink/60"
                      >
                        <span className="truncate">
                          {subject}
                          {topic ? ` — ${topic}` : ''}
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
                    )
                  })}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </Modal>

      {/* ---------- BAĞLANTI YÖNETİMİ ---------- */}
      <Modal open={linkModal} onClose={() => setLinkModal(false)} title="Öğrenci Bağlantıları">
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-2xs font-bold uppercase tracking-wider text-ink/55">
              Onaylı öğrenciler
            </p>
            <ul className="flex flex-col gap-2">
              {activeLinks.map((link) => (
                <li
                  key={link.link_id}
                  className="flex items-center justify-between gap-3 rounded-card border border-line p-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-success-500/10 text-success-600">
                      <UserCheck className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden="true" />
                    </span>
                    <p className="truncate font-semibold text-ink">{link.student_name}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={Trash2}
                    loading={revokingId === link.link_id}
                    onClick={() => handleRevoke(link)}
                  >
                    Kaldır
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {pendingLinks.length > 0 && (
            <div>
              <p className="mb-3 text-2xs font-bold uppercase tracking-wider text-ink/55">
                Onay bekleyenler
              </p>
              <ul className="flex flex-col gap-2">
                {pendingLinks.map((link) => (
                  <li
                    key={link.link_id}
                    className="flex items-center gap-3 rounded-card border border-warning-500/30 bg-warning-50/50 p-3"
                  >
                    <Clock className="h-4 w-4 shrink-0 text-warning-600" strokeWidth={2.2} />
                    <p className="min-w-0 truncate text-sm text-ink/75">
                      <span className="font-semibold text-ink">{link.student_name}</span> onayı
                      bekleniyor
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t border-line pt-5">
            <p className="mb-3 flex items-center gap-2 text-2xs font-bold uppercase tracking-wider text-ink/55">
              <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
              Yeni öğrenci ekle
            </p>
            <ParentCodeRedeemPanel
              compact
              onLinked={() => {
                loadLinks()
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}
