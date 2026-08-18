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
import ExamSetupCard, { isExamSetupSnoozed } from '../components/ExamSetupCard'
import QuestionFeed from '../components/QuestionFeed'
import { AppShell, Badge, Button, EmptyState } from '../components/ui'
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
    { to: '/soru-coz', label: 'AI Soru Çöz', description: 'Fotoğraftan çözüm', icon: ScanText },
    {
      to: '/gunluk-takip',
      label: 'Çalışma Kaydet',
      description: 'Bugün ne çalıştın?',
      icon: CalendarDays,
    },
    { to: '/denemeler', label: 'Deneme Gir', description: 'Net ve ders dökümü', icon: Target },
    { to: '/sorular', label: 'Soru Sor', description: 'Öğretmenine gönder', icon: HelpCircle },
    { to: '/ai-koc', label: 'AI Koç', description: 'Plan ve öneri al', icon: Sparkles },
    { to: '/notlar', label: 'Ders Notları', description: 'Konu anlatımları', icon: Library },
    { to: '/mesajlar', label: 'Mesajlar', description: 'Öğretmeninle konuş', icon: MessageCircle },
  ]

  return (
    <AppShell
      title="Anasayfa"
      loading={loading}
      loadingLabel="Anasayfan hazırlanıyor…"
      headerAction={
        <Button as={Link} to="/analiz" variant="secondary" size="sm" icon={BarChart3}>
          <span className="hidden sm:inline">Analize git</span>
          <span className="sm:hidden">Analiz</span>
        </Button>
      }
    >
      {/* ---------- KARŞILAMA ---------- */}
      <DashboardHero
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

      {/* ---------- SINAV ANKETİ ----------
          Yalnızca sınav bilgisi hiç girilmemiş öğrencilere görünür. */}
      {showSetup && (
        <ExamSetupCard
          onSaved={() => setSetupSnoozed(false)}
          onSnooze={() => setSetupSnoozed(true)}
        />
      )}

      {/* ---------- GERİ SAYIM + AI KOÇ ----------
          Geri sayım solda sabit genişlikte durur, AI Koç kalan alanı alır;
          mobilde alt alta geçerler. */}
      {countdown ? (
        <div className="grid gap-5 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <Panel
            title="Sınava kalan süre"
            description={
              countdown.passed
                ? 'Hedefini Profil sayfasından güncelle'
                : 'Halka, öğretim yılının geçen kısmını gösterir'
            }
            icon={CalendarDays}
            iconTone="#7C3AED"
            bodyClassName="flex items-center justify-center pb-6"
          >
            <CountdownRing countdown={countdown} />
          </Panel>

          <AICoachCard />
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
                  <span
                    className={
                      item.tone === 'danger'
                        ? 'grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-danger-500/10 text-danger-600'
                        : item.tone === 'warning'
                          ? 'grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-warning-500/12 text-warning-700'
                          : 'grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600'
                    }
                  >
                    <item.icon className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden="true" />
                  </span>
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
        icon={Sparkles}
        iconTone="#7C3AED"
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {quickActions.map(({ to, label, description, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="focus-ring group flex flex-col gap-2 rounded-card border border-line bg-surface
                         p-4 shadow-card transition-all duration-200 ease-smooth
                         hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
            >
              <span
                className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/10 text-brand-600
                           ring-1 ring-inset ring-brand-500/15 transition-transform duration-200 group-hover:scale-110"
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-sm font-bold text-ink">
                  {label}
                </span>
                <span className="mt-0.5 block truncate text-xs text-ink/60">{description}</span>
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
