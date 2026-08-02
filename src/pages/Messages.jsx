import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import ChatThread from '../components/ChatThread'

export default function Messages() {
  const { user, role } = useAuth()
  const [contacts, setContacts] = useState([])
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadContacts() {
      const targetRole = role === 'teacher' ? 'student' : 'teacher'
      const { data } = await supabase.from('profiles').select('id, full_name').eq('role', targetRole)
      setContacts(data ?? [])
      if (data?.length === 1) setSelected(data[0])
      setLoading(false)
    }
    if (user) loadContacts()
  }, [user, role])

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-paper">
        <div className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title="Mesajlar" subtitle={role === 'teacher' ? 'Öğrencilerinle birebir yaz' : 'Öğretmeninle birebir yaz'} />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6">
        {contacts.length === 0 ? (
          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 text-sm text-ink/40">
            {role === 'teacher' ? 'Henüz kayıtlı öğrenci yok.' : 'Henüz kayıtlı bir öğretmen yok.'}
          </div>
        ) : (
          <div className="grid sm:grid-cols-[220px_1fr] gap-4">
            <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-2 flex sm:flex-col gap-1 h-fit overflow-x-auto sm:overflow-visible">
              {contacts.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className={`focus-ring flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-left whitespace-nowrap transition-colors ${
                    selected?.id === c.id ? 'bg-brand-50 text-brand-700' : 'text-ink/60 hover:bg-paper'
                  }`}
                >
                  <div className="h-7 w-7 rounded-full bg-brand-500 text-white grid place-items-center text-xs font-semibold font-display flex-shrink-0">
                    {c.full_name?.charAt(0)?.toUpperCase() ?? '?'}
                  </div>
                  {c.full_name}
                </button>
              ))}
            </div>

            {selected ? (
              <ChatThread contact={selected} />
            ) : (
              <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 grid place-items-center text-sm text-ink/40 h-[70vh]">
                Sohbet etmek için soldan birini seç.
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
