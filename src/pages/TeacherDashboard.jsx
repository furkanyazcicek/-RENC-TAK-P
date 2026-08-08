import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { Users, HelpCircle, Inbox } from 'lucide-react'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import StudentList from '../components/StudentList'
import QuestionInbox from '../components/QuestionInbox'

export default function TeacherDashboard() {
  const { profile } = useAuth()
  const [students, setStudents] = useState([])
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  const loadData = useCallback(async () => {
    const [profilesRes, dailyLogsRes, questionsRes] = await Promise.all([
      supabase.from('profiles').select('*').eq('role', 'student'),
      supabase.from('daily_logs').select('*'),
      supabase
        .from('questions')
        .select('*, profiles!questions_student_id_fkey(full_name)')
        .order('created_at', { ascending: false }),
    ])

    const dailyLogs = dailyLogsRes.data ?? []
    const enrichedStudents = (profilesRes.data ?? []).map((s) => {
      const studentLogs = dailyLogs.filter((l) => l.student_id === s.id)
      const totalMinutes = studentLogs.reduce((sum, l) => sum + (l.duration_minutes || 0), 0)
      const totalSolved = studentLogs.reduce(
        (sum, l) => sum + (l.correct || 0) + (l.incorrect || 0) + (l.empty || 0),
        0
      )

      return {
        ...s,
        totalMinutes: studentLogs.length ? totalMinutes : null,
        totalSolved: studentLogs.length ? totalSolved : null,
      }
    })

    setStudents(enrichedStudents)
    setQuestions(questionsRes.data ?? [])
    setLoading(false)
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  const pendingCount = questions.filter((q) => q.status !== 'Çözüldü').length

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-paper">
        <div className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title={`Hoş geldin, ${profile?.full_name?.split(' ')[0] ?? ''}`} subtitle="Sınıfının genel görünümü" />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard label="Toplam Öğrenci" value={students.length} accent="brand" icon={Users} />
          <StatCard label="Bekleyen Sorular" value={pendingCount} accent="warn" icon={HelpCircle} />
          <StatCard label="Toplam Soru" value={questions.length} accent="accent" icon={Inbox} />
        </div>

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Öğrencilerim</h2>
          <StudentList students={students} />
        </section>

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Gelen Sorular</h2>
          <QuestionInbox questions={questions} onChanged={loadData} />
        </section>
      </main>
    </div>
  )
}
