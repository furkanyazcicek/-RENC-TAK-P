import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import MockExamForm from '../components/MockExamForm'
import MockExamList from '../components/MockExamList'
import MockExamTrendChart from '../components/MockExamTrendChart'

export default function MockExams() {
  const { user } = useAuth()
  const [exams, setExams] = useState([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    if (!user) return
    const { data } = await supabase
      .from('mock_exams')
      .select('*, mock_exam_subjects(*)')
      .eq('student_id', user.id)
      .order('exam_date', { ascending: false })
    setExams(data ?? [])
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

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title="LGS / YKS Denemeleri" subtitle="Ders bazlı deneme sonuçların ve net gelişimin" />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
          <h3 className="font-display font-bold text-lg text-ink mb-2">Net Gelişimi</h3>
          <MockExamTrendChart exams={exams} />
        </div>

        <MockExamForm onSubmitted={load} />

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Geçmiş Denemeler</h2>
          <MockExamList exams={exams} onChanged={load} />
        </section>
      </main>
    </div>
  )
}
