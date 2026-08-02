import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import HomeworkForm from '../components/HomeworkForm'
import HomeworkList from '../components/HomeworkList'

export default function Homeworks() {
  const { user, role } = useAuth()
  const [homeworks, setHomeworks] = useState([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    if (!user) return
    let query = supabase
      .from('homeworks')
      .select(role === 'teacher' ? '*, profiles!homeworks_student_id_fkey(full_name)' : '*')
      .order('due_date', { ascending: true, nullsFirst: false })
      .order('created_at', { ascending: false })

    if (role !== 'teacher') query = query.eq('student_id', user.id)

    const { data } = await query
    setHomeworks(data ?? [])
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

  const pending = homeworks.filter((h) => h.status !== 'Tamamlandı')
  const done = homeworks.filter((h) => h.status === 'Tamamlandı')

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title="Ödevler" subtitle={role === 'teacher' ? 'Öğrencilerine ödev ata ve takip et' : 'Sana atanan ödevler'} />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        {role === 'teacher' && <HomeworkForm onAssigned={load} />}

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">
            Devam Eden ({pending.length})
          </h2>
          <HomeworkList homeworks={pending} role={role} onChanged={load} showStudentName={role === 'teacher'} />
        </section>

        {done.length > 0 && (
          <section>
            <h2 className="font-display font-bold text-lg text-ink mb-3">Tamamlanan ({done.length})</h2>
            <HomeworkList homeworks={done} role={role} onChanged={load} showStudentName={role === 'teacher'} />
          </section>
        )}
      </main>
    </div>
  )
}
