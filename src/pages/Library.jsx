import { useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  Calculator,
  ChevronRight,
  FolderOpen,
  GraduationCap,
  Plus,
  Triangle,
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import LibraryNoteForm from '../components/LibraryNoteForm'
import LibraryNoteCard from '../components/LibraryNoteCard'

const EXAM_TYPES = [
  { key: 'LGS', label: 'LGS', hint: 'Liselere Geçiş Sınavı', icon: GraduationCap },
  { key: 'TYT', label: 'TYT', hint: 'YKS — Temel Yeterlilik Testi', icon: BookOpen },
  { key: 'AYT', label: 'AYT', hint: 'YKS — Alan Yeterlilik Testi', icon: Award },
  { key: 'KPSS', label: 'KPSS', hint: 'Kamu Personeli Seçme Sınavı', icon: Briefcase },
]

function subjectIcon(name) {
  return name?.toLowerCase().includes('geometri') ? Triangle : Calculator
}

export default function Library() {
  const { role } = useAuth()
  const isTeacher = role === 'teacher'

  const [subjects, setSubjects] = useState([])
  const [topics, setTopics] = useState([])
  const [notesByTopic, setNotesByTopic] = useState({})
  const [loading, setLoading] = useState(true)

  const [examType, setExamType] = useState(null)
  const [subjectId, setSubjectId] = useState(null)
  const [topicId, setTopicId] = useState(null)
  const [showNoteForm, setShowNoteForm] = useState(false)

  useEffect(() => {
    async function load() {
      const [subjectsRes, topicsRes] = await Promise.all([
        supabase.from('library_subjects').select('*').order('exam_type').order('order_index'),
        supabase.from('library_topics').select('*').order('order_index'),
      ])
      setSubjects(subjectsRes.data ?? [])
      setTopics(topicsRes.data ?? [])
      setLoading(false)
    }
    load()
  }, [])

  async function loadNotesForTopic(id) {
    const { data } = await supabase
      .from('library_notes')
      .select('*')
      .eq('topic_id', id)
      .order('created_at', { ascending: false })
    setNotesByTopic((prev) => ({ ...prev, [id]: data ?? [] }))
  }

  useEffect(() => {
    if (topicId) loadNotesForTopic(topicId)
  }, [topicId])

  const subjectsForExam = useMemo(
    () => subjects.filter((s) => s.exam_type === examType),
    [subjects, examType]
  )
  const topicsForSubject = useMemo(
    () => topics.filter((t) => t.subject_id === subjectId),
    [topics, subjectId]
  )
  const selectedSubject = subjects.find((s) => s.id === subjectId)
  const selectedTopic = topics.find((t) => t.id === topicId)
  const currentNotes = notesByTopic[topicId] ?? []

  function resetToRoot() {
    setExamType(null)
    setSubjectId(null)
    setTopicId(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-paper">
        <div className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title="Ders Notları Kütüphanesi" subtitle="Sınav türüne, derse ve konuya göre düzenlenmiş kaynaklar" />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-sm flex-wrap">
          <button onClick={resetToRoot} className="focus-ring font-semibold text-ink/50 hover:text-brand-600 transition-colors">
            Kütüphane
          </button>
          {examType && (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-ink/30" />
              <button
                onClick={() => {
                  setSubjectId(null)
                  setTopicId(null)
                }}
                className="focus-ring font-semibold text-ink/50 hover:text-brand-600 transition-colors"
              >
                {examType}
              </button>
            </>
          )}
          {selectedSubject && (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-ink/30" />
              <button
                onClick={() => setTopicId(null)}
                className="focus-ring font-semibold text-ink/50 hover:text-brand-600 transition-colors"
              >
                {selectedSubject.name}
              </button>
            </>
          )}
          {selectedTopic && (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-ink/30" />
              <span className="font-semibold text-brand-700">{selectedTopic.name}</span>
            </>
          )}
        </div>

        {/* LEVEL 1 — Sınav Türü */}
        {!examType && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {EXAM_TYPES.map(({ key, label, hint, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setExamType(key)}
                className="focus-ring group text-left rounded-xl2 bg-white shadow-card border border-ink/5 p-5 hover:shadow-elevated hover:-translate-y-0.5 transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-ink">{label}</h3>
                <p className="text-xs text-ink/40 mt-0.5">{hint}</p>
              </button>
            ))}
          </div>
        )}

        {/* LEVEL 2 — Dersler */}
        {examType && !subjectId && (
          <>
            <button
              onClick={resetToRoot}
              className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 hover:text-brand-600 w-fit transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Sınav türlerine dön
            </button>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {subjectsForExam.length === 0 && (
                <p className="text-sm text-ink/40 col-span-full">Bu sınav türü için henüz ders eklenmemiş.</p>
              )}
              {subjectsForExam.map((s) => {
                const Icon = subjectIcon(s.name)
                const topicCount = topics.filter((t) => t.subject_id === s.id).length
                return (
                  <button
                    key={s.id}
                    onClick={() => setSubjectId(s.id)}
                    className="focus-ring group text-left rounded-xl2 bg-white shadow-card border border-ink/5 p-5 hover:shadow-elevated hover:-translate-y-0.5 transition-all"
                  >
                    <div className="h-11 w-11 rounded-xl bg-accent-400/15 text-accent-600 grid place-items-center mb-3 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-ink">{s.name}</h3>
                    <p className="text-xs text-ink/40 mt-0.5">{topicCount} konu</p>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {/* LEVEL 3 — Konular */}
        {subjectId && !topicId && (
          <>
            <button
              onClick={() => setSubjectId(null)}
              className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 hover:text-brand-600 w-fit transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> {examType} derslerine dön
            </button>
            <div className="rounded-xl2 bg-white shadow-card border border-ink/5 divide-y divide-ink/5">
              {topicsForSubject.length === 0 && (
                <p className="text-sm text-ink/40 p-5">Bu ders için henüz konu eklenmemiş.</p>
              )}
              {topicsForSubject.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTopicId(t.id)}
                  className="focus-ring w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-brand-50/50 transition-colors"
                >
                  <div className="h-9 w-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center flex-shrink-0">
                    <FolderOpen className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-ink flex-1">{t.name}</span>
                  <ChevronRight className="h-4 w-4 text-ink/30" />
                </button>
              ))}
            </div>
          </>
        )}

        {/* LEVEL 4 — İçerik / Notlar */}
        {topicId && (
          <>
            <button
              onClick={() => setTopicId(null)}
              className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 hover:text-brand-600 w-fit transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> {selectedSubject?.name} konularına dön
            </button>

            {isTeacher && !showNoteForm && (
              <button
                onClick={() => setShowNoteForm(true)}
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-brand-500 text-white px-4 py-2.5 text-sm font-semibold w-fit hover:bg-brand-600 transition-colors"
              >
                <Plus className="h-4 w-4" /> Bu Konuya Not Ekle
              </button>
            )}

            {isTeacher && showNoteForm && (
              <LibraryNoteForm
                topicId={topicId}
                onCancel={() => setShowNoteForm(false)}
                onAdded={() => {
                  setShowNoteForm(false)
                  loadNotesForTopic(topicId)
                }}
              />
            )}

            {currentNotes.length === 0 ? (
              <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-8 text-center text-sm text-ink/40">
                Bu konu için henüz bir ders notu eklenmemiş.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {currentNotes.map((note) => (
                  <LibraryNoteCard
                    key={note.id}
                    note={note}
                    canManage={isTeacher}
                    onDeleted={() => loadNotesForTopic(topicId)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
