import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabaseClient'
import { Clock, CheckCircle2, ThumbsUp, XCircle, LogOut, ListChecks, ChevronDown, PieChart } from 'lucide-react'
import StatCard from '../components/StatCard'
import MockExamTrendChart from '../components/MockExamTrendChart'
import DailyLogsList from '../components/DailyLogsList'
import Modal from '../components/Modal'
import { formatDuration } from '../lib/topicHelpers'

// Donut grafiği için sabit renk paleti
const DONUT_COLORS = ['#6366f1', '#f59e0b', '#10b981', '#f43f5e', '#0ea5e9', '#a855f7', '#84cc16', '#ec4899']

export default function ParentDashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const [studentProfile, setStudentProfile] = useState(null)
  const [dailyLogs, setDailyLogs] = useState([])
  const [mockExams, setMockExams] = useState([])
  const [homeworks, setHomeworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [notLinked, setNotLinked] = useState(false)

  // İstatistik kartı detay modalı: 'time' | 'solved' | 'correct' | 'wrong' | null
  const [detailModal, setDetailModal] = useState(null)

  // Tarih filtreli daire grafiği için seçili tarih (YYYY-MM-DD)
  const [selectedDate, setSelectedDate] = useState('')

  // Deneme sonuçları tablosunda ders bazlı net dökümünün açık olduğu satır
  const [expandedExamId, setExpandedExamId] = useState(null)

  const load = useCallback(async () => {
    if (!user) return
    setLoading(true)
    setNotLinked(false)

    // 1) Velinin kendi profilinden takip ettiği öğrencinin id'sini al
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

    // 2) Sadece bu öğrenciye ait veriler — güvenli, ayrı ayrı çekip JS ile eşleştiriyoruz
    const [studentRes, dailyLogsRes, mockExamsRes, mockExamSubjectsRes, homeworksRes] = await Promise.all([
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
      supabase
        .from('mock_exam_subjects')
        .select('*'),
      supabase
        .from('homeworks')
        .select('*')
        .eq('student_id', studentId)
        .order('due_date', { ascending: true, nullsFirst: false })
        .order('created_at', { ascending: false }),
    ])

    setStudentProfile(studentRes.data)
    setDailyLogs(dailyLogsRes.data ?? [])
    
    // Denemeler ile alt ders netlerini güvenli bir şekilde eşleştiriyoruz
    const examsRaw = mockExamsRes.data ?? []
    const subjectsRaw = mockExamSubjectsRes.data ?? []
    
    const examsWithSubjects = examsRaw.map(exam => {
      const matchSubjects = subjectsRaw.filter(s => s.mock_exam_id === exam.id || s.exam_id === exam.id)
      return {
        ...exam,
        mock_exam_subjects: matchSubjects
      }
    })

    setMockExams(examsWithSubjects)
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

  // ---- Özet istatistikler ----
  const totalMinutes = useMemo(
    () => dailyLogs.reduce((sum, l) => sum + (l.duration_minutes || 0), 0),
    [dailyLogs]
  )
  const totalCorrect = useMemo(() => dailyLogs.reduce((sum, l) => sum + (l.correct || 0), 0), [dailyLogs])
  const totalWrong = useMemo(() => dailyLogs.reduce((sum, l) => sum + (l.incorrect || 0), 0), [dailyLogs])
  const totalSolved = useMemo(
    () => dailyLogs.reduce((sum, l) => sum + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0), 0),
    [dailyLogs]
  )

  // ---- Ders bazlı çalışma dağılımı (tüm zamanlar) — yüzdelik ilerleme çubukları ----
  const subjectDistribution = useMemo(() => {
    const map = {}
    let total = 0
    dailyLogs.forEach((l) => {
      const solved = (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0)
      if (!l.subject || solved <= 0) return
      map[l.subject] = (map[l.subject] || 0) + solved
      total += solved
    })
    return Object.entries(map)
      .map(([subject, count]) => ({
        subject,
        count,
        pct: total > 0 ? Math.round((count / total) * 100) : 0,
      }))
      .sort((a, b) => b.count - a.count)
  }, [dailyLogs])

  // ---- Gün bazlı kırılım ----
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

  // ---- Seçili tarihe göre günlük ders/konu dağılımı (donut grafik) ----
  const availableDates = useMemo(
    () => [...new Set(dailyLogs.map((l) => l.study_date))].sort((a, b) => new Date(b) - new Date(a)),
    [dailyLogs]
  )

  const dayDistribution = useMemo(() => {
    if (!selectedDate) return { total: 0, slices: [] }
    const logsForDay = dailyLogs.filter((l) => l.study_date === selectedDate)
    const map = {}
    let total = 0
    logsForDay.forEach((l) => {
      const solved = (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0)
      const label = l.topic ? `${l.subject} — ${l.topic}` : l.subject || 'Diğer'
      if (solved <= 0) return
      map[label] = (map[label] || 0) + solved
      total += solved
    })
    const slices = Object.entries(map)
      .map(([label, count]) => ({ label, count, pct: total > 0 ? Math.round((count / total) * 100) : 0 }))
      .sort((a, b) => b.count - a.count)
    return { total, slices }
  }, [dailyLogs, selectedDate])

  const donutGradient = useMemo(() => {
    if (dayDistribution.slices.length === 0) return null
    let cumulative = 0
    const stops = dayDistribution.slices.map((s, i) => {
      const start = cumulative
      cumulative += s.pct
      return `${DONUT_COLORS[i % DONUT_COLORS.length]} ${start}% ${cumulative}%`
    })
    if (cumulative < 100) stops.push(`${DONUT_COLORS[(dayDistribution.slices.length - 1) % DONUT_COLORS.length]} ${cumulative}% 100%`)
    return `conic-gradient(${stops.join(', ')})`
  }, [dayDistribution])

  // ---- Deneme sonuçları: mock_exam_subjects netlerinin toplamı ----
  const examRows = useMemo(() => {
    return [...mockExams]
      .map((e) => {
        const subjects = e.mock_exam_subjects ?? []
        const totalNet = Math.round(subjects.reduce((s, x) => s + Number(x.net || 0), 0) * 100) / 100
        return {
          id: e.id,
          date: e.exam_date,
          examType: e.exam_type,
          examName: e.exam_name,
          totalNet,
          subjects,
        }
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [mockExams])

  // ---- Ödevler ----
  const isHomeworkDone = (h) => h.status === 'Tamamlandı' || h.is_completed === true
  const pendingHomeworks = useMemo(() => homeworks.filter((h) => !isHomeworkDone(h)), [homeworks])
  const doneHomeworks = useMemo(() => homeworks.filter((h) => isHomeworkDone(h)), [homeworks])

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-paper">
        <div className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
      </div>
    )
  }

  if (notLinked || !studentProfile) {
    return (
      <div className="min-h-screen bg-paper flex flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-sm font-semibold text-warn">
          Hesabınıza bağlı bir öğrenci kaydı bulunamadı. Lütfen okul koçunuzla iletişime geçin.
        </p>
        <button
          onClick={handleLogout}
          className="focus-ring inline-flex items-center gap-2 rounded-xl bg-red-50 text-red-600 px-4 py-2.5 text-sm font-bold hover:bg-red-100 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Çıkış Yap
        </button>
      </div>
    )
  }

  const detailModalMeta = {
    time: { title: 'Günlük Çalışma Süresi Dökümü', field: 'minutes', suffix: ' dk', accentClass: 'text-brand-600' },
    solved: { title: 'Günlük Çözülen Soru Dökümü', field: 'solved', suffix: ' soru', accentClass: 'text-accent-600' },
    correct: { title: 'Günlük Doğru Sayısı Dökümü', field: 'correct', suffix: ' doğru', accentClass: 'text-good' },
    wrong: { title: 'Günlük Yanlış Sayısı Dökümü', field: 'wrong', suffix: ' yanlış', accentClass: 'text-warn' },
  }
  const activeMeta = detailModal ? detailModalMeta[detailModal] : null

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-ink/[0.06] bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex items-center justify-between gap-3 flex-wrap">
          <div>
            <h1 className="font-display font-bold text-lg sm:text-xl text-ink">Dr. Koç Veli Paneli</h1>
            <p className="text-sm text-ink/50">
              Öğrenci: <span className="font-semibold text-brand-600">{studentProfile.full_name}</span>
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="focus-ring inline-flex items-center gap-2 rounded-xl bg-red-50 text-red-600 px-4 py-2.5 text-sm font-bold hover:bg-red-100 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Çıkış Yap
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Özet istatistik kartları */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <button onClick={() => setDetailModal('time')} className="focus-ring text-left">
            <StatCard label="Toplam Çalışma Süresi" value={formatDuration(totalMinutes) ?? '—'} accent="brand" icon={Clock} />
          </button>
          <button onClick={() => setDetailModal('solved')} className="focus-ring text-left">
            <StatCard label="Toplam Çözülen Soru" value={totalSolved} accent="accent" icon={CheckCircle2} />
          </button>
          <button onClick={() => setDetailModal('correct')} className="focus-ring text-left">
            <StatCard label="Toplam Doğru" value={totalCorrect} accent="good" icon={ThumbsUp} />
          </button>
          <button onClick={() => setDetailModal('wrong')} className="focus-ring text-left">
            <StatCard label="Toplam Yanlış" value={totalWrong} accent="warn" icon={XCircle} />
          </button>
        </div>

        {/* Ders bazlı çalışma dağılımı */}
        <section className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
          <h2 className="font-display font-bold text-lg text-ink mb-1">Ders Bazlı Çalışma Dağılımı</h2>
          <p className="text-xs text-ink/40 mb-4">Çözülen soruların derslere göre yüzdelik dağılımı (tüm zamanlar)</p>
          {subjectDistribution.length === 0 ? (
            <p className="text-sm text-ink/40">Henüz çalışma kaydı bulunmuyor.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {subjectDistribution.map((s) => (
                <div key={s.subject}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="font-semibold text-ink/70">{s.subject}</span>
                    <span className="font-bold text-ink">
                      %{s.pct} <span className="font-normal text-ink/30">· {s.count} soru</span>
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-paper overflow-hidden">
                    <div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Tarih seçmeli konu/ders dağılımı */}
        <section className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
          <div className="flex items-center justify-between gap-3 flex-wrap mb-1">
            <h2 className="font-display font-bold text-lg text-ink flex items-center gap-2">
              <PieChart className="h-5 w-5 text-brand-600" />
              Günlük Ders/Konu Dağılımı
            </h2>
            <input
              type="date"
              value={selectedDate}
              max={new Date().toISOString().slice(0, 10)}
              onChange={(e) => setSelectedDate(e.target.value)}
              list="parent-dashboard-log-dates"
              className="rounded-xl border border-ink/10 px-3 py-2 text-sm font-medium text-ink focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none"
            />
            <datalist id="parent-dashboard-log-dates">
              {availableDates.map((d) => (
                <option key={d} value={d} />
              ))}
            </datalist>
          </div>
          <p className="text-xs text-ink/40 mb-4">
            Bir tarih seçerek o günün ders/konu bazlı soru dağılımını görebilirsiniz.
          </p>

          {!selectedDate ? (
            <p className="text-sm text-ink/40">Grafiği görmek için yukarıdan bir tarih seçin.</p>
          ) : dayDistribution.slices.length === 0 ? (
            <p className="text-sm text-ink/40">
              {new Date(selectedDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}{' '}
              tarihinde soru çözümü içeren bir kayıt bulunmuyor.
            </p>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative h-40 w-40 flex-shrink-0 rounded-full" style={{ background: donutGradient }}>
                <div className="absolute inset-3 rounded-full bg-white grid place-items-center text-center">
                  <span className="text-lg font-bold text-ink">{dayDistribution.total}</span>
                  <span className="text-[11px] text-ink/40 -mt-0.5">soru</span>
                </div>
              </div>
              <ul className="flex flex-col gap-2 w-full">
                {dayDistribution.slices.map((s, i) => (
                  <li key={s.label} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        className="h-2.5 w-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: DONUT_COLORS[i % DONUT_COLORS.length] }}
                      />
                      <span className="text-ink/70 truncate">{s.label}</span>
                    </span>
                    <span className="font-semibold text-ink flex-shrink-0">
                      %{s.pct} <span className="font-normal text-ink/30">· {s.count}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Deneme sınavı sonuçları */}
        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Deneme Sınavı Sonuçları</h2>
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 mb-4">
            <h3 className="font-display font-bold text-base text-ink mb-2">Net Gelişimi</h3>
            <MockExamTrendChart exams={mockExams} />
          </div>

          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 overflow-hidden">
            {examRows.length === 0 ? (
              <p className="text-sm text-ink/40 p-5">Henüz deneme sonucu girilmemiş.</p>
            ) : (
              <div className="divide-y divide-ink/5">
                {examRows.map((e) => (
                  <div key={e.id}>
                    <button
                      onClick={() => setExpandedExamId((cur) => (cur === e.id ? null : e.id))}
                      className="focus-ring w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left hover:bg-brand-50/40 transition-colors"
                    >
                      <div className="min-w-0">
                        <span className="text-xs font-bold rounded-full bg-brand-50 text-brand-600 px-2 py-0.5 mr-2">
                          {e.examType}
                        </span>
                        <span className="text-ink/70 text-sm">{e.examName || '—'}</span>
                        <div className="text-xs text-ink/30 mt-0.5">
                          {e.date
                            ? new Date(e.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
                            : '—'}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="font-bold text-ink">{e.totalNet} net</span>
                        <ChevronDown
                          className={`h-4 w-4 text-ink/30 transition-transform ${expandedExamId === e.id ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </button>
                    {expandedExamId === e.id && (
                      <div className="px-5 pb-4">
                        {e.subjects.length === 0 ? (
                          <p className="text-xs text-ink/40">Ders bazlı net kaydı bulunmuyor.</p>
                        ) : (
                          <ul className="rounded-xl bg-paper divide-y divide-ink/5 overflow-hidden">
                            {e.subjects.map((s, i) => (
                              <li key={i} className="flex items-center justify-between px-3.5 py-2 text-sm">
                                <span className="text-ink/60">{s.subject}</span>
                                <span className="font-semibold text-ink">{Number(s.net).toFixed(2)} net</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Ödevler / görevler */}
        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3 flex items-center gap-2">
            <ListChecks className="h-5 w-5 text-brand-600" />
            Ödevler ve Görevler
          </h2>
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 divide-y divide-ink/5">
            {homeworks.length === 0 ? (
              <p className="text-sm text-ink/40 p-5">Henüz ödev atanmamış.</p>
            ) : (
              [...pendingHomeworks, ...doneHomeworks].map((h) => (
                <div key={h.id} className="flex items-start justify-between gap-3 p-4 sm:p-5">
                  <div className="min-w-0">
                    <p className="font-semibold text-ink truncate">{h.title}</p>
                    {h.description && <p className="text-sm text-ink/50 mt-0.5">{h.description}</p>}
                    {h.due_date && (
                      <p className="text-xs text-ink/30 mt-1">
                        Son tarih:{' '}
                        {new Date(h.due_date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    )}
                  </div>
                  <span
                    className={`flex-shrink-0 text-[11px] font-bold rounded-full px-2.5 py-1 ${
                      isHomeworkDone(h) ? 'bg-good/10 text-good' : 'bg-accent-400/10 text-accent-600'
                    }`}
                  >
                    {isHomeworkDone(h) ? 'Tamamlandı' : 'Devam Ediyor'}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Detaylı çalışma geçmişi */}
        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Detaylı Çalışma Geçmişi</h2>
          <DailyLogsList logs={dailyLogs} readOnly title="" />
        </section>
      </main>

      {/* Özet kartlara tıklanınca açılan gün bazlı detay modalı */}
      <Modal open={!!detailModal} onClose={() => setDetailModal(null)} title={activeMeta?.title ?? ''}>
        {byDay.length === 0 ? (
          <p className="text-sm text-ink/40">Henüz çalışma kaydı bulunmuyor.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-ink/5">
            {byDay.map((d) => (
              <li key={d.date} className="py-3">
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="font-semibold text-ink/70">
                    {new Date(d.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' })}
                  </span>
                  {activeMeta && (
                    <span className={`font-bold ${activeMeta.accentClass}`}>
                      {d[activeMeta.field]}
                      {activeMeta.suffix}
                    </span>
                  )}
                </div>
                <ul className="flex flex-col gap-1 pl-3 border-l-2 border-ink/5">
                  {d.items.map((item, i) => (
                    <li key={i} className="text-xs text-ink/50 flex items-center justify-between gap-2">
                      <span className="truncate">
                        {item.subject}
                        {item.topic ? ` — ${item.topic}` : ''}
                      </span>
                      <span className="flex-shrink-0 text-ink/40">
                        {item.duration_minutes ? `${item.duration_minutes} dk` : ''}
                        {item.duration_minutes && (item.correct || item.incorrect || item.empty) ? ' · ' : ''}
                        {item.correct ? `${item.correct} D` : ''}
                        {item.incorrect ? ` ${item.correct ? '/' : ''} ${item.incorrect} Y` : ''}
                        {item.empty ? ` / ${item.empty} B` : ''}
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
