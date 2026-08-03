import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { Clock, CheckCircle2, TrendingUp, ListChecks } from 'lucide-react'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import DailyLogForm from '../components/DailyLogForm'
import DailyLogsList from '../components/DailyLogsList'

export default function DailyTracking() {
  const { user } = useAuth()
  const [dailyLogs, setDailyLogs] = useState([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    if (!user) return
    const { data } = await supabase
      .from('daily_logs')
      .select('*')
      .eq('student_id', user.id)
      .order('study_date', { ascending: false })
    setDailyLogs(data ?? [])
    setLoading(false)
  }, [user])

  useEffect(() => {
    load()
  }, [load])

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-paper">
        <div className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
      </div>
    )
  }

  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const weeklyMinutes = dailyLogs
    .filter((log) => new Date(log.study_date) >= sevenDaysAgo)
    .reduce((sum, log) => sum + (log.duration_minutes || 0), 0)
  const totalSolved = dailyLogs.reduce(
    (sum, l) => sum + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0),
    0
  )
  const totalCorrect = dailyLogs.reduce((sum, l) => sum + (l.correct || 0), 0)
  const totalAnswered = dailyLogs.reduce((sum, l) => sum + (l.correct || 0) + (l.incorrect || 0), 0)
  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : null

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title="Günlük Çalışma ve Soru Takibi" subtitle="Her gün ne çalıştığını kaydet, gelişimini izle" />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Bu Hafta Çalışma" value={`${weeklyMinutes} dk`} accent="brand" icon={Clock} />
          <StatCard label="Toplam Çözülen Soru" value={totalSolved} accent="accent" icon={CheckCircle2} />
          <StatCard label="Genel Başarı" value={overallAccuracy != null ? `%${overallAccuracy}` : '—'} accent="good" icon={TrendingUp} />
          <StatCard label="Toplam Kayıt" value={dailyLogs.length} accent="warn" icon={ListChecks} />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <DailyLogForm onSubmitted={load} />
          <DailyLogsList logs={dailyLogs} onChanged={load} />
        </div>
      </main>
    </div>
  )
}
