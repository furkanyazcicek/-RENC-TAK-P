import { useEffect, useMemo, useState } from 'react'
import { MessageCircle, Search, Users } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { cn } from '../lib/cn'
import ChatThread from '../components/ChatThread'
import ExamSurveyDialog from '../components/ExamSurveyDialog'
import { AppShell, Avatar, EmptyState, Input } from '../components/ui'

export default function Messages() {
  const { user, role } = useAuth()
  const [contacts, setContacts] = useState([])
  const [selected, setSelected] = useState(null)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  const isTeacher = role === 'teacher'

  useEffect(() => {
    async function loadContacts() {
      const targetRole = isTeacher ? 'student' : 'teacher'
      // `*` bilinçli: sınav kolonları (migration_student_exam_profile.sql)
      // henüz eklenmemiş olabilir; adıyla seçmek sorguyu tümden hataya
      // düşürürdü. Anket kutusu alanın gelip gelmediğine bakarak davranır.
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('role', targetRole)
        .order('full_name')
      setContacts(data ?? [])
      if (data?.length === 1) setSelected(data[0])
      setLoading(false)
    }
    if (user) loadContacts()
  }, [user, isTeacher])

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('tr-TR')
    if (!q) return contacts
    return contacts.filter((c) => c.full_name?.toLocaleLowerCase('tr-TR').includes(q))
  }, [contacts, query])

  return (
    <AppShell
      title="Mesajlar"
      subtitle={isTeacher ? 'Öğrencilerinle birebir yaz' : 'Öğretmeninle birebir yaz'}
      loading={loading}
      loadingLabel="Kişiler yükleniyor…"
    >
      {contacts.length === 0 ? (
        <EmptyState
          icon={Users}
          title={isTeacher ? 'Henüz kayıtlı öğrenci yok' : 'Henüz kayıtlı bir öğretmen yok'}
          description={
            isTeacher
              ? 'Öğrencilerin sisteme kaydolduğunda burada listelenecek ve onlarla yazışabileceksin.'
              : 'Öğretmenin sisteme kaydolduğunda burada görünecek ve ona yazabileceksin.'
          }
        />
      ) : (
        <>
          {/* Öğretmene özel: sınav bilgisi eksik öğrencilere tek seferlik
              anket hatırlatması. Gönderme işini öğretmen başlatır. */}
          {isTeacher && <ExamSurveyDialog students={contacts} />}

          <div className="grid gap-5 lg:grid-cols-[16rem_1fr]">
          <aside className="card flex h-fit flex-col overflow-hidden">
            <div className="border-b border-line px-3 py-3">
              <p className="mb-2 px-1 text-2xs font-bold uppercase tracking-wider text-ink/55">
                {isTeacher ? 'Öğrenciler' : 'Öğretmenler'}
                <span className="ml-1.5 font-bold text-ink/45">{contacts.length}</span>
              </p>
              {contacts.length > 5 && (
                <Input
                  icon={Search}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="İsim ara…"
                  aria-label="Kişilerde ara"
                  className="h-10 py-0 text-sm"
                />
              )}
            </div>

            <div className="flex max-h-[60vh] gap-1 overflow-x-auto p-2 lg:max-h-[62vh] lg:flex-col lg:overflow-x-visible lg:overflow-y-auto">
              {filtered.length === 0 ? (
                <p className="px-2 py-3 text-sm text-ink/55">Aramanla eşleşen kişi yok.</p>
              ) : (
                filtered.map((c) => {
                  const active = selected?.id === c.id
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelected(c)}
                      aria-current={active ? 'true' : undefined}
                      className={cn(
                        'focus-ring flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-btn px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 lg:w-full lg:shrink',
                        active
                          ? 'bg-aurora-soft font-semibold text-brand-700 ring-1 ring-inset ring-brand-500/15'
                          : 'text-ink/65 hover:bg-ink/[0.04] hover:text-ink'
                      )}
                    >
                      <Avatar name={c.full_name} size="xs" />
                      <span className="truncate">{c.full_name}</span>
                    </button>
                  )
                })
              )}
            </div>
          </aside>

          {selected ? (
            <ChatThread key={selected.id} contact={selected} />
          ) : (
            <EmptyState
              icon={MessageCircle}
              title="Sohbet seç"
              description={
                isTeacher
                  ? 'Soldaki listeden bir öğrenci seçtiğinde yazışma burada açılır.'
                  : 'Soldaki listeden öğretmenini seçtiğinde yazışma burada açılır.'
              }
              className="min-h-[50vh] justify-center"
            />
          )}
          </div>
        </>
      )}
    </AppShell>
  )
}
