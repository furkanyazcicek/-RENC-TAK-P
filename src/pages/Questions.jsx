import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import QuestionForm from '../components/QuestionForm'
import MyQuestionsList from '../components/MyQuestionsList'
import QuestionInbox from '../components/QuestionInbox'

export default function Questions() {
  const { user, role } = useAuth()
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    if (!user) return
    if (role === 'teacher') {
      const { data } = await supabase
        .from('questions')
        .select('*, profiles!questions_student_id_fkey(full_name)')
        .order('created_at', { ascending: false })
      setQuestions(data ?? [])
    } else {
      const { data } = await supabase
        .from('questions')
        .select('*')
        .eq('student_id', user.id)
        .order('created_at', { ascending: false })
      setQuestions(data ?? [])
    }
    setLoading(false)
  }, [user, role])

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
      <Navbar
        title="Sorunlu Sorular"
        subtitle={role === 'teacher' ? 'Öğrencilerinden gelen sorular ve yanıtların' : 'Çözemediğin soruları buradan gönder'}
      />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        {role === 'teacher' ? (
          <QuestionInbox questions={questions} onChanged={load} />
        ) : (
          <>
            <QuestionForm onSubmitted={load} />
            <MyQuestionsList questions={questions} />
          </>
        )}
      </main>
    </div>
  )
}
