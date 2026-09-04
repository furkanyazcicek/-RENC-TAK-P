import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AlarmClock,
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock,
  Flame,
  HelpCircle,
  Library,
  MessageCircle,
  ScanText,
  Sparkles,
  Target,
} from 'lucide-react'

import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { splitSubjectTopic } from '../lib/topicHelpers'
import { needsExamSetup, resolveExamCountdown } from '../lib/examProfile'
import { fetchStudentLessons } from '../lib/liveLesson/api'
import { isActiveStatus } from '../lib/liveLesson/status'
import {
  accuracy,
  buildInsights,
  combineStudyEntries,
  examStats,
  formatMinutes,
  formatNumber,
  homeworkStats,
  lastNDays,
  questionStats,
  splitBySource,
  studyStreak,
  toKey,
  totals,
  weekOverWeek,
} from '../lib/insights'

import AICoachCard from '../components/ai/AICoachCard'
import NextLessonPanel from '../components/liveLesson/NextLessonPanel'
import ExamSetupCard, { isExamSetupSnoozed } from '../components/ExamSetupCard'
import QuestionFeed from '../components/QuestionFeed'
import { AppShell, Badge, Button, EmptyState, SoftIcon } from '../components/ui'
import {
  CountdownRing,
  DashboardHero,
  InsightBar,
  MetricTile,
  Panel,
  SourceNote,
} from '../components/dashboard'

/**
 * Anasayfa — öğrencinin giriş yaptığında düştüğü sakin ekran.
 *
 * Buradaki kural şu: BU SAYFADA GRAFİK YOKTUR. Eskiden açılış sayfası
 * "Profil & Analiz" idi ve öğrenci daha ilk saniyede on beş grafiğin
 * içine düşüyordu. Grafiklerin tamamı /analiz'e taşındı; burada yalnızca
 * "bugün ne yapmalıyım" sorusunu yanıtlayan üç şey durur:
 *
 *   1. AI Koç'un günlük önerisi
 *   2. Bekleyenler (ödev, soru, deneme) — dikkat isteyen işler
 *   3. Hızlı işlemler — bir dokunuşta doğru sekmeye gitmek
 *
 * Metrik kartları özet olarak kalır ama tıklanınca modal açmaz; ilgili
 * sekmeye götürür. Derine inmek isteyen "Analize git" ile /analiz'e gider.
 */
export default function Home() {
  const { user, profile } = useAuth()
  const [dailyLogs, setDailyLogs] = useState([])
  const [mockExams, setMockExams] = useState([])
  const [branchExams, setBranchExams] = useState([])
  const [homeworks, setHomeworks] = useState([])
  const [questions, setQuestions] = useState([])
  const [nextLesson, setNextLesson] = useState(null)
  const [loading, setLoading] = useState(true)
  // "Sonra" denince kart bu oturumda gizlenir (kalıcısı localStorage'da).
  const [setupSnoozed, setSetupSnoozed] = useState(() => isExamSetupSnoozed())

  const load = useCallback(async () => {
    if (!user) return
    const [logsRes, examsRes, branchExamsRes, homeworkRes, questionRes] = await Promise.all([
      supabase
        .from('daily_logs')
        .select('*')
        .eq('student_id', user.id)
        .order('study_date', { ascending: false }),
      // Denemeler artık günlük istatistiklere de katıldığı için TAMAMI
      // gerekiyor: limit(12) kalsaydı "toplam çalışma" son 12 denemeyle
      // sınırlı kalır, /analiz'deki rakamla tutmazdı. Alt ders satırları
      // da net'in yanı sıra doğru/yanlış/boş taşımak zorunda.
      supabase
        .from('mock_exams')
        .select('id, exam_type, exam_name, exam_date, duration_minutes, mock_exam_subjects(*)')
        .eq('student_id', user.id)
        .order('exam_date', { ascending: false }),
      supabase
        .from('exams')
        .select('*')
        .eq('student_id', user.id)
        .order('exam_date', { ascending: false }),
      supabase
        .from('homeworks')
        .select('id, title, status, due_date')
        .eq('student_id', user.id),
      // Soru akışı görselleri de gösterdiği için burada tam satır gerekir.
      supabase
        .from('questions')
        .select('*')
        .eq('student_id', user.id)
        .order('created_at', { ascending: false }),
    ])
    setDailyLogs(logsRes.data ?? [])
    setMockExams(examsRes.data ?? [])
    setBranchExams(branchExamsRes.data ?? [])
    setHomeworks(homeworkRes.data ?? [])
    setQuestions(questionRes.data ?? [])
    setLoading(false)

    // Yaklaşan canlı ders — anasayfanın en üstündeki katılım eylemi.
    // Anasayfanın açılışını bekletmesin diye ayrı ve sessizce yüklenir;
    // canlı ders altyapısı kurulmamışsa panel görünmez.
    fetchStudentLessons({ from: new Date(Date.now() - 2 * 3600_000).toISOString(), limit: 20 })
      .then((lessons) => {
        const active = lessons
          .filter((l) => isActiveStatus(l.status))
          .sort((a, b) => new Date(a.scheduled_start) - new Date(b.scheduled_start))
        setNextLesson(active.find((l) => l.status === 'live' || l.status === 'lobby_open') ?? active[0] ?? null)
      })
      .catch(() => setNextLesson(null))
  }, [user])

  useEffect(() => {
    load()
  }, [load])

  /* ---- Türetilen veriler ---- */

  /* Denemeler de çalışmadır — soru sayıları ve süreleri günlük
     istatistiklere katılır (bkz. lib/insights.js). */
  const studyEntries = useMemo(
    () => combineStudyEntries(dailyLogs, mockExams, branchExams),
    [dailyLogs, mockExams, branchExams]
  )
  const sourceSplit = useMemo(() => splitBySource(studyEntries), [studyEntries])

  const todayKey = toKey(new Date())
  const todayLogs = useMemo(
    () => studyEntries.filter((l) => l.study_date === todayKey),
    [studyEntries, todayKey]
  )
  const todayTotals = useMemo(() => totals(todayLogs), [todayLogs])

  const last14 = useMemo(() => lastNDays(studyEntries, 14), [studyEntries])
  const wow = useMemo(() => weekOverWeek(studyEntries), [studyEntries])
  const streak = useMemo(() => studyStreak(studyEntries), [studyEntries])
  const overallAccuracy = useMemo(() => accuracy(studyEntries), [studyEntries])
  const insights = useMemo(
    () => buildInsights(studyEntries, { audience: 'student' }),
    [studyEntries]
  )

  // "Son deneme neti" karşılaştırılabilir olsun diye yalnızca EN SON
  // girilen türün denemelerine bakar — TYT ile AYT neti yan yana konmaz.
  const latestExamType = mockExams[0]?.exam_type ?? null
  const exams = useMemo(
    () => examStats(mockExams.filter((e) => e.exam_type === latestExamType)),
    [mockExams, latestExamType]
  )

  const hw = useMemo(() => homeworkStats(homeworks), [homeworks])
  const q = useMemo(() => questionStats(questions), [questions])

  const recentLogs = useMemo(() => dailyLogs.slice(0, 5), [dailyLogs])
  // Akışta en yeni sorular önde; on tanesi bir oturumda göz gezdirmek için yeterli.
  const feedQuestions = useMemo(() => questions.slice(0, 10), [questions])

  // Sınav geri sayımı — profil eksikse null döner, o zaman anket kartı çıkar.
  const countdown = useMemo(() => resolveExamCountdown(profile), [profile])
  const showSetup = needsExamSetup(profile) && !setupSnoozed

  const firstName = profile?.full_name?.split(' ')[0] ?? ''
  const avatarInitials =
    profile?.full_name
      ?.split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toLocaleUpperCase('tr-TR') || '?'

  // Dikkat isteyen işler — sıfır olanlar listeye hiç girmez.
  const todo = [
    hw.overdue.length && {
      key: 'overdue',
      to: '/odevler',
      icon: AlarmClock,
      tone: 'danger',
      title: `${hw.overdue.length} ödevin gecikmiş`,
      hint: 'Önce bunlara bak.',
    },
    hw.dueToday.length && {
      key: 'dueToday',
      to: '/odevler',
      icon: ClipboardList,
      tone: 'warning',
      title: `${hw.dueToday.length} ödevin bugün teslim`,
      hint: 'Gün bitmeden tamamla.',
    },
    !hw.overdue.length &&
      !hw.dueToday.length &&
      hw.pending.length && {
        key: 'pending',
        to: '/odevler',
        icon: ClipboardList,
        tone: 'brand',
        title: `${hw.pending.length} ödevin bekliyor`,
        hint: 'Teslim tarihi gelmedi.',
      },
    q.reviewing.length && {
      key: 'questions',
      to: '/sorular',
      icon: HelpCircle,
      tone: 'brand',
      title: `${q.reviewing.length} sorun öğretmeninde`,
      hint: 'Yanıt bekleniyor.',
    },
    !todayTotals.minutes && {
      key: 'today',
      to: '/gunluk-takip',
      icon: CalendarDays,
      tone: 'brand',
      title: 'Bugünün kaydını girmedin',
      hint: streak ? `${streak} günlük serini bozma.` : 'Ne çalıştığını yaz.',
    },
  ].filter(Boolean)

  // Açıklamalar tek satırda kırpılıyor (truncate); iki kelimeyi geçmemeleri
  // ve birbirini tekrar etmemeleri gerekiyor — "AI Soru Çöz" ile "Soru Sor"
  // aynı cümleyi taşıyınca hangisinin ne yaptığı kayboluyordu.
  const quickActions = [
    { to: '/soru-coz', label: 'AI Soru Çöz', description: 'Fotoğraftan çözüm', icon: ScanText, tone: 'sky' },
    {
      to: '/gunluk-takip',
      label: 'Çalışma Kaydet',
      description: 'Bugün ne çalıştın?',
      icon: CalendarDays,
      tone: 'sage',
    },
    { to: '/denemeler', label: 'Deneme Gir', description: 'Net ve ders dökümü', icon: Target, tone: 'orange' },
    { to: '/sorular', label: 'Soru Sor', description: 'Öğretmenine gönder', icon: HelpCircle, tone: 'raspberry' },
    { to: '/ai-koc', label: 'AI Koç', description: 'Plan ve öneri al', icon: Sparkles, tone: 'amber' },
    { to: '/kutuphane', label: 'Ders Kütüphanesi', description: 'Not veya test seç', icon: Library, tone: 'indigo' },
    { to: '/mesajlar', label: 'Mesajlar', description: 'Öğretmeninle konuş', icon: MessageCircle, tone: 'aqua' },
  ]

  return (
    <AppShell
      title="Anasayfa"
      subtitle="Günün özeti"
      loading={loading}
      loadingLabel="Anasayfan hazırlanıyor…"
      showPageIntro={false}
      headerAction={
        <Button as={Link} to="/analiz" variant="secondary" size="sm" icon={BarChart3}>
          <span className="hidden sm:inline">Analize git</span>
          <span className="sm:hidden">Analiz</span>
        </Button>
      }
    >
      {/* ---------- KARŞILAMA ---------- */}
      <DashboardHero
        asPageHeader
        eyebrow="Anasayfa"
        title={firstName ? `Merhaba ${firstName}` : 'Merhaba'}
        subtitle={
          todayTotals.minutes
            ? `Bugün ${formatMinutes(todayTotals.minutes)} çalıştın — böyle devam.`
            : 'Bugün için henüz kaydın yok.'
        }
        avatar={avatarInitials}
        badge={streak >= 2 ? { label: `${streak} günlük seri`, tone: 'glass' } : null}
        highlights={[
          { label: 'Bugün', value: formatMinutes(todayTotals.minutes) },
          { label: 'Bu hafta', value: formatMinutes(wow.thisWeek.minutes) },
          { label: 'İsabet', value: overallAccuracy != null ? `%${overallAccuracy}` : '—' },
        ]}
      />

      {/* ---------- YAKLAŞAN CANLI DERS ----------
          Kasten hero'nun HEMEN ALTINDA: ders katılım düğmesi metrik
          kartlarının arasında kaybolmamalı. Ders yoksa hiç render edilmez —
          anasayfanın sakinliği korunur (grafik yok kuralıyla aynı gerekçe). */}
      {nextLesson && (
        <NextLessonPanel
          session={nextLesson}
          role="student"
          counterpartName={nextLesson.teacher?.full_name}
        />
      )}

      {/* ---------- SINAV ANKETİ ----------
          Yalnızca sınav bilgisi hiç girilmemiş öğrencilere görünür. */}
      {showSetup && (
        <ExamSetupCard
          onSaved={() => setSetupSnoozed(false)}
          onSnooze={() => setSetupSnoozed(true)}
        />
      )}

      {/* ---------- AI KOÇ + KOMPAKT GERİ SAYIM ----------
          Günün ana aksiyonu soldaki geniş alanda kalır. Geri sayım sağda
          kısa bir bilgi kartıdır; `items-start` iki kartın yüksekliğini
          birbirine eşitleyip gereksiz boşluk oluşturmasını engeller. */}
      {countdown ? (
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <AICoachCard />

          <Panel
            title="Sınava kalan süre"
            description={
              countdown.passed
                ? 'Hedefini Profil sayfasından güncelle'
                : `${countdown.label} ${countdown.year}`
            }
            icon={CalendarDays}
            iconTone="#7C3AED"
            className="self-start"
            bodyClassName="flex items-center justify-center pb-5"
          >
            <CountdownRing countdown={countdown} size={108} stroke={8} compact />
          </Panel>
        </div>
      ) : (
        <AICoachCard />
      )}

      {/* ---------- İÇGÖRÜLER ---------- */}
      <InsightBar insights={insights.slice(0, 3)} title="Bugün öne çıkanlar" />

      {/* ---------- ÖZET METRİKLER ----------
          Grafik değil, dört sayı. Tıklanınca modal değil, ilgili sekme. */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricTile
          label="Bugün Çalışma"
          value={formatMinutes(todayTotals.minutes)}
          hint={todayTotals.solved ? `${todayTotals.solved} soru` : 'kayıt bekliyor'}
          icon={Clock}
          tone="brand"
        />
        <MetricTile
          label="Bu Hafta"
          value={formatMinutes(wow.thisWeek.minutes)}
          hint={wow.prevWeek.minutes > 0 ? 'geçen haftaya göre' : 'ilk haftan'}
          icon={CheckCircle2}
          tone="info"
          trend={last14.slice(-7).map((d) => d.minutes)}
          delta={
            wow.prevWeek.minutes > 0
              ? {
                  value: formatMinutes(Math.abs(wow.minutesDelta)),
                  direction:
                    wow.minutesDelta > 0 ? 'up' : wow.minutesDelta < 0 ? 'down' : 'flat',
                }
              : null
          }
        />
        <MetricTile
          label={latestExamType ? `Son ${latestExamType} Neti` : 'Son Deneme Neti'}
          value={exams.lastNet != null ? formatNumber(exams.lastNet) : '—'}
          hint={exams.count ? `${exams.count} deneme` : 'henüz deneme yok'}
          icon={Target}
          tone="success"
          trend={exams.series.length > 1 ? exams.series : null}
          delta={
            exams.delta
              ? {
                  value: formatNumber(Math.abs(exams.delta)),
                  direction: exams.delta > 0 ? 'up' : 'down',
                }
              : null
          }
        />
        <MetricTile
          label="Kesintisiz Seri"
          value={streak ? `${streak} gün` : '—'}
          hint={streak ? 'ara vermeden' : 'bugün başlayabilirsin'}
          icon={Flame}
          tone={streak >= 5 ? 'success' : 'accent'}
        />
      </div>

      <SourceNote split={sourceSplit} />

      {/* ---------- BEKLEYENLER ---------- */}
      <Panel
        title="Dikkatini bekleyenler"
        description="Bugün yapılacaklar"
        icon={AlarmClock}
        iconTone="#D97706"
      >
        {todo.length === 0 ? (
          <EmptyState
            icon={CheckCircle2}
            title="Bekleyen bir şey yok"
            description="Ödevlerin tamam, soruların yanıtlanmış, bugünü de kaydettin."
            compact
          />
        ) : (
          <ul className="flex flex-col gap-2">
            {todo.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.to}
                  className="focus-ring group flex items-center gap-3 rounded-card border border-line
                             bg-surface-muted px-4 py-3 transition-all duration-200 ease-smooth
                             hover:-translate-y-0.5 hover:border-brand-200 hover:bg-surface"
                >
                  <SoftIcon
                    icon={item.icon}
                    tone={item.tone === 'danger' ? 'rose' : item.tone === 'warning' ? 'amber' : 'sky'}
                    size="md"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-ink">
                      {item.title}
                    </span>
                    <span className="block truncate text-xs text-ink/60">{item.hint}</span>
                  </span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-ink/35 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-500"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Panel>

      {/* ---------- SORU AKIŞI ----------
          Soru ve öğretmen çözümü yan yana, kaydırılabilir kartlarda. */}
      <Panel
        title="Sorularım"
        description="Solda sorun, sağda öğretmeninin çözümü"
        icon={HelpCircle}
        iconTone="#DB2777"
        action={
          questions.length > 0 ? (
            <Button as={Link} to="/sorular" variant="ghost" size="xs" iconRight={ArrowRight}>
              Tümü
            </Button>
          ) : null
        }
      >
        <QuestionFeed questions={feedQuestions} />
      </Panel>

      {/* ---------- HIZLI İŞLEMLER ---------- */}
      <Panel
        title="Hızlı işlemler"
        description="En sık yaptığın işler"
        icon={Sparkles}
        iconTone="#7C3AED"
      >
        <div className="panel-action-grid grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map(({ to, label, description, icon: Icon, tone }, index) => (
            <Link
              key={to}
              to={to}
              data-tone={tone}
              className="panel-quick-action focus-ring group relative flex min-h-[8.5rem] flex-col justify-between gap-4
                         overflow-hidden rounded-[1.2rem] p-4 transition-all duration-200 ease-smooth hover:-translate-y-1"
            >
              <span className="flex items-start justify-between gap-3">
                <SoftIcon icon={Icon} tone={tone} size="lg" className="group-hover:scale-105" />
                <span className="font-display text-xs font-extrabold tabular text-ink/28">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </span>
              <span className="flex min-w-0 items-end justify-between gap-3">
                <span className="min-w-0">
                  <span className="block truncate font-display text-sm font-extrabold text-ink">{label}</span>
                  <span className="mt-1 block truncate text-xs font-medium text-ink/62">{description}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-ink/30 transition-transform group-hover:translate-x-1 group-hover:text-ink/60" />
              </span>
            </Link>
          ))}
        </div>
      </Panel>

      {/* ---------- SON ÇALIŞMALAR ---------- */}
      <Panel
        title="Son çalışmaların"
        description="Son 5 kayıt"
        icon={CalendarDays}
        iconTone="#0891B2"
        action={
          <Button as={Link} to="/gunluk-takip" variant="ghost" size="xs" iconRight={ArrowRight}>
            Tümü
          </Button>
        }
      >
        {recentLogs.length === 0 ? (
          <EmptyState
            icon={CalendarDays}
            title="Henüz çalışma kaydın yok"
            description="Günlük Takip'ten ilk kaydını ekle."
            compact
          />
        ) : (
          <ul className="flex flex-col divide-y divide-line">
            {recentLogs.map((log) => {
              const { subject, topic } = splitSubjectTopic(log.topic)
              return (
                <li key={log.id} className="flex items-center justify-between gap-3 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">{subject}</p>
                    <p className="truncate text-xs text-ink/60">
                      {new Date(log.study_date).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'long',
                      })}
                      {topic ? ` · ${topic}` : ''}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-display text-sm font-bold tabular text-ink">
                      {formatMinutes(log.duration_minutes)}
                    </p>
                    <p className="text-2xs tabular text-ink/55">
                      <span className="font-semibold text-success-600">{log.correct || 0}</span>
                      {' / '}
                      <span className="font-semibold text-danger-600">{log.incorrect || 0}</span>
                      {' / '}
                      {log.empty || 0}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </Panel>

      {/* ---------- ANALİZE GEÇİŞ ---------- */}
      <section
        className="flex flex-wrap items-center justify-between gap-4 rounded-panel border border-line
                   bg-surface-muted px-5 py-5"
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="font-display font-bold text-ink">Derinlemesine bakmak ister misin?</h2>
          </div>
          <p className="mt-1 text-sm text-ink/60">
            Net gelişimi, ders ve konu bazlı başarı — tüm grafikler Analiz sayfasında.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {dailyLogs.length > 0 && (
            <Badge tone="neutral">{dailyLogs.length} çalışma kaydı</Badge>
          )}
          <Button as={Link} to="/analiz" icon={BarChart3}>
            Analize git
          </Button>
        </div>
      </section>
    </AppShell>
  )
}
