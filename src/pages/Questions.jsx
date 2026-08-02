import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import QuestionForm from '../components/QuestionForm'
import MyQuestionsList from '../components/MyQuestionsList'
import QuestionInbox from '../components/QuestionInbox'

function StudentQuestionsView({ questions, onSubmitted }) {
  const [tab, setTab] = useState('active') // 'active' | 'archive'

  const active = questions.filter((q) => q.status !== 'Çözüldü')
  const archive = questions.filter((q) => q.status === 'Çözüldü')

  return (
    <>
      <QuestionForm onSubmitted={onSubmitted} />

      <div className="flex bg-white rounded-xl2 shadow-card border border-ink/5 p-1 w-fit">
        <button
          onClick={() => setTab('active')}
          className={`focus-ring flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
            tab === 'active' ? 'bg-brand-50 text-brand-700' : 'text-ink/40 hover:text-ink/60'
          }`}
        >
          Aktif Sorular
          <span className="text-xs rounded-full bg-ink/5 px-1.5 py-0.5">{active.length}</span>
        </button>
        <button
          onClick={() => setTab('archive')}
          className={`focus-ring flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
            tab === 'archive' ? 'bg-brand-50 text-brand-700' : 'text-ink/40 hover:text-ink/60'
          }`}
        >
          📚 Arşiv (Çözülenler)
          <span className="text-xs rounded-full bg-ink/5 px-1.5 py-0.5">{archive.length}</span>
        </button>
      </div>

      {tab === 'active' ? (
        <MyQuestionsList questions={active} />
      ) : (
        <>
          <p className="text-sm text-ink/50 -mt-2">
            Geçmişte sorduğun ve öğretmeninin yanıtladığı tüm sorular — sınav öncesi tekrar için burada.
          </p>
          <MyQuestionsList questions={archive} />
        </>
      )}
    </>
  )
}

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
          <StudentQuestionsView questions={questions} onSubmitted={load} />
        )}
      </main>
    </div>
  )
}
