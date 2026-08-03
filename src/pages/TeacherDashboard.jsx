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
    const [profilesRes, examsRes, questionsRes] = await Promise.all([
      supabase.from('profiles').select('*').eq('role', 'student'),
      supabase.from('exams').select('*'),
      supabase
        .from('questions')
        .select('*, profiles!questions_student_id_fkey(full_name)')
        .order('created_at', { ascending: false }),
    ])

    const exams = examsRes.data ?? []
    const enrichedStudents = (profilesRes.data ?? []).map((s) => {
      const studentExams = exams.filter((e) => e.student_id === s.id)
      const average = studentExams.length
        ? Math.round(studentExams.reduce((a, e) => a + e.score, 0) / studentExams.length)
        : null

      const topicMap = {}
      studentExams.forEach((e) => {
        if (!topicMap[e.topic]) topicMap[e.topic] = []
        topicMap[e.topic].push(e.score)
      })
      const topicAverages = Object.entries(topicMap).map(([topic, scores]) => ({
        topic,
        avg: scores.reduce((a, b) => a + b, 0) / scores.length,
      }))
      const weakestTopic = topicAverages.length
        ? [...topicAverages].sort((a, b) => a.avg - b.avg)[0].topic
        : null

      return { ...s, average, weakestTopic }
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
