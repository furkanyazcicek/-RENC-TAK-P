import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabaseClient'
import { Clock, CheckCircle2, ThumbsUp, XCircle, LogOut, ListChecks } from 'lucide-react'
import StatCard from '../components/StatCard'
import MockExamList from '../components/MockExamList'
import MockExamTrendChart from '../components/MockExamTrendChart'
import DailyLogsList from '../components/DailyLogsList'
import { formatDuration } from '../lib/topicHelpers'

export default function ParentDashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const [studentProfile, setStudentProfile] = useState(null)
  const [dailyLogs, setDailyLogs] = useState([])
  const [mockExams, setMockExams] = useState([])
  const [homeworks, setHomeworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [notLinked, setNotLinked] = useState(false)

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

    // 2) Sadece bu öğrenciye ait veriler — güvenli, tek yönlü (salt okunur) sorgular
    const [studentRes, dailyLogsRes, mockExamsRes, homeworksRes] = await Promise.all([
      supabase.from('profiles').select('id, full_name').eq('id', studentId).single(),
      supabase
        .from('daily_logs')
        .select('*')
        .eq('student_id', studentId)
        .order('study_date', { ascending: false }),
      supabase
        .from('mock_exams')
        .select('*, mock_exam_subjects(*)')
        .eq('student_id', studentId)
        .order('exam_date', { ascending: false }),
      supabase
        .from('homeworks')
        .select('*')
        .eq('student_id', studentId)
        .order('due_date', { ascending: true, nullsFirst: false })
        .order('created_at', { ascending: false }),
    ])

    setStudentProfile(studentRes.data)
    setDailyLogs(dailyLogsRes.data ?? [])
    setMockExams(mockExamsRes.data ?? [])
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

  // Özet istatistikler
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

  // Ders bazlı çalışma dağılımı — yüzdelik ilerleme çubukları için
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

  // Ödevler: devam eden / tamamlanan (hem `status` hem `is_completed` şemasını destekler)
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
          <StatCard label="Toplam Çalışma Süresi" value={formatDuration(totalMinutes) ?? '—'} accent="brand" icon={Clock} />
          <StatCard label="Toplam Çözülen Soru" value={totalSolved} accent="accent" icon={CheckCircle2} />
          <StatCard label="Toplam Doğru" value={totalCorrect} accent="good" icon={ThumbsUp} />
          <StatCard label="Toplam Yanlış" value={totalWrong} accent="warn" icon={XCircle} />
        </div>

        {/* Ders bazlı çalışma dağılımı */}
        <section className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
          <h2 className="font-display font-bold text-lg text-ink mb-1">Ders Bazlı Çalışma Dağılımı</h2>
          <p className="text-xs text-ink/40 mb-4">Çözülen soruların derslere göre yüzdelik dağılımı</p>
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
                    <div
                      className="h-full rounded-full bg-brand-500 transition-all"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
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
          <MockExamList exams={mockExams} readOnly />
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
                        {new Date(h.due_date).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
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
    </div>
  )
}
