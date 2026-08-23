import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  ChevronRight,
  FileStack,
  FolderOpen,
  GraduationCap,
  Library as LibraryIcon,
  NotebookPen,
  Plus,
  Search,
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { cn } from '../lib/cn'
import { colorForKey } from '../lib/chartTheme'
import { buildLibraryInsights } from '../lib/insights'
import { libraryPath, slugifyLibraryValue } from '../lib/libraryRoutes'
import { LESSONS } from '../content/lessons'
import LibraryNoteForm from '../components/LibraryNoteForm'
import LibraryNoteCard from '../components/LibraryNoteCard'
import LessonEditor from '../components/lessons/LessonEditor'
import StructuredLessonCard from '../components/lessons/StructuredLessonCard'
import { AppShell, Badge, Button, EmptyState, Input, Modal } from '../components/ui'
import { DashboardHero, InsightBar, Panel } from '../components/dashboard'

const EXAM_TYPES = [
  { key: 'LGS', label: 'LGS', hint: 'Liselere Geçiş Sınavı', icon: GraduationCap },
  { key: 'TYT', label: 'TYT', hint: 'YKS — Temel Yeterlilik Testi', icon: BookOpen },
  { key: 'AYT', label: 'AYT', hint: 'YKS — Alan Yeterlilik Testi', icon: Award },
  { key: 'KPSS', label: 'KPSS', hint: 'Kamu Personeli Seçme Sınavı', icon: Briefcase },
]

/** Gezinme yolunu (breadcrumb) tek düzende toplar. */
function Breadcrumb({ items }) {
  return (
    <nav aria-label="Kütüphane yolu" className="flex flex-wrap items-center gap-1.5 text-sm">
      {items.map((item, i) => {
        const last = i === items.length - 1
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-ink/45" aria-hidden="true" />}
            {last || !item.onClick ? (
              <span className="font-semibold text-brand-700" aria-current="page">
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={item.onClick}
                className="focus-ring rounded font-semibold text-ink/60 transition-colors hover:text-brand-600"
              >
                {item.label}
              </button>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default function Library() {
  const navigate = useNavigate()
  const { examType: routeExamType, subjectSlug, topicSlug } = useParams()
  const { role } = useAuth()
  const isTeacher = role === 'teacher'

  const [subjects, setSubjects] = useState([])
  const [topics, setTopics] = useState([])
  const [noteCounts, setNoteCounts] = useState({}) // topic_id -> adet
  const [notesByTopic, setNotesByTopic] = useState({})
  const [lessonsByTopic, setLessonsByTopic] = useState({})
  const [bundledLessonsByTopic, setBundledLessonsByTopic] = useState({})
  const [loading, setLoading] = useState(true)

  const [examType, setExamType] = useState(null)
  const [subjectId, setSubjectId] = useState(null)
  const [topicId, setTopicId] = useState(null)
  const [search, setSearch] = useState('')
  const [noteFormOpen, setNoteFormOpen] = useState(false)
  const [lessonEditorOpen, setLessonEditorOpen] = useState(false)
  const [editingLesson, setEditingLesson] = useState(null)

  const load = useCallback(async () => {
    const [subjectsRes, topicsRes, notesRes, lessonsRes] = await Promise.all([
      supabase.from('library_subjects').select('*').order('exam_type').order('order_index'),
      supabase.from('library_topics').select('*').order('order_index'),
      supabase.from('library_notes').select('topic_id'),
      supabase.from('structured_lessons').select('id, topic_id, title'),
    ])

    const subjectRows = subjectsRes.data ?? []
    const topicRows = [...(topicsRes.data ?? [])]
    const bundledMap = {}

    // İçerik kayıt defteri uygulamanın yayınlanan ders kaynağıdır. Veritabanı
    // henüz seed edilmemiş olsa bile yerel/önizleme ortamında bu dersler
    // kütüphaneden kaybolmamalı. Eksik konu başlığını yalnız görünüm katmanında
    // üretir; veritabanına sessizce konu yazmaz.
    LESSONS.forEach((lesson) => {
      if (
        lesson.placement.examType !== 'TYT' ||
        lesson.placement.subject !== 'Türkçe'
      ) return

      const subject = subjectRows.find(
        (row) =>
          row.exam_type === lesson.placement.examType &&
          row.name === lesson.placement.subject
      )
      if (!subject) return

      const bundledTopicOrder =
        [
          ...new Set(
            LESSONS.filter(
              (item) =>
                item.placement.examType === lesson.placement.examType &&
                item.placement.subject === lesson.placement.subject
            ).map((item) => item.placement.topic)
          ),
        ].indexOf(lesson.placement.topic) + 1

      let topic = topicRows.find(
        (row) =>
          row.subject_id === subject.id &&
          row.name === lesson.placement.topic
      )
      if (!topic) {
        topic = {
          id:
            'bundled-topic-' +
            lesson.placement.examType +
            '-' +
            slugifyLibraryValue(subject.name) +
            '-' +
            slugifyLibraryValue(lesson.placement.topic),
          subject_id: subject.id,
          name: lesson.placement.topic,
          order_index: bundledTopicOrder,
          is_bundled: true,
        }
        topicRows.push(topic)
      } else {
        // Kayıt defterindeki sıra, yerel görünümde eski curriculum seed'inin
        // sırasını devralmasın. Bu yalnız istemci görünümünü düzenler.
        topic.order_index = bundledTopicOrder
      }

      if (!bundledMap[topic.id]) bundledMap[topic.id] = []
      bundledMap[topic.id].push({
        id: 'bundled-' + lesson.slug,
        title: lesson.title,
        subtitle: lesson.subtitle,
        document: lesson.document,
        learning_mode: lesson.learningMode ?? 'interactive',
        order_index: lesson.order ?? 0,
        part_label: lesson.partLabel ?? null,
        status: 'published',
        is_gold_standard: Boolean(lesson.goldStandard),
        is_bundled: true,
      })
    })

    Object.values(bundledMap).forEach((list) => {
      list.sort((a, b) => a.order_index - b.order_index)
    })
    topicRows.sort((a, b) => (a.order_index ?? 999) - (b.order_index ?? 999))

    const counts = {}
    ;(notesRes.data ?? []).forEach((n) => {
      counts[n.topic_id] = (counts[n.topic_id] || 0) + 1
    })
    ;(lessonsRes.data ?? []).forEach((lesson) => {
      counts[lesson.topic_id] = (counts[lesson.topic_id] || 0) + 1
    })
    Object.entries(bundledMap).forEach(([id, bundled]) => {
      const databaseTitles = new Set(
        (lessonsRes.data ?? [])
          .filter((lesson) => lesson.topic_id === id)
          .map((lesson) => lesson.title)
      )
      const missingFromDatabase = bundled.filter((lesson) => !databaseTitles.has(lesson.title)).length
      counts[id] = (counts[id] || 0) + missingFromDatabase
    })

    setSubjects(subjectRows)
    setTopics(topicRows)
    setBundledLessonsByTopic(bundledMap)
    setNoteCounts(counts)
    setLoading(false)
  }, [])

  useEffect(() => {
    load()
  }, [load])

  // URL kütüphanedeki gerçek konumu temsil eder. Böylece not bağlantısı
  // paylaşılabilir ve geri/ileri tuşları önceki seçimlere döner.
  useEffect(() => {
    const nextExam = routeExamType?.toUpperCase() ?? null
    const nextSubject = subjects.find(
      (subject) => subject.exam_type === nextExam && slugifyLibraryValue(subject.name) === subjectSlug
    )
    const nextTopic = topics.find(
      (topic) => topic.subject_id === nextSubject?.id && slugifyLibraryValue(topic.name) === topicSlug
    )
    setExamType(nextExam)
    setSubjectId(nextSubject?.id ?? null)
    setTopicId(nextTopic?.id ?? null)
  }, [routeExamType, subjectSlug, topicSlug, subjects, topics])

  const loadNotesForTopic = useCallback(async (id) => {
    if (String(id).startsWith('bundled-topic-')) {
      setNotesByTopic((prev) => ({ ...prev, [id]: [] }))
      setLessonsByTopic((prev) => ({ ...prev, [id]: [] }))
      setNoteCounts((prev) => ({ ...prev, [id]: (bundledLessonsByTopic[id] ?? []).length }))
      return
    }

    const [{ data: notes }, { data: lessons }] = await Promise.all([
      supabase
      .from('library_notes')
      .select('*')
      .eq('topic_id', id)
      .order('created_at', { ascending: false }),
      // Konu içi sıra `order_index`ten gelir. Eskiden `updated_at desc`
      // ile diziliyordu: öğretmen eski bir dersi düzeltince o ders listenin
      // başına fırlıyor, öğrenci alt konuları ters sırada görüyordu.
      supabase
        .from('structured_lessons')
        .select('*')
        .eq('topic_id', id)
        .order('order_index', { ascending: true })
        .order('created_at', { ascending: true }),
    ])
    setNotesByTopic((prev) => ({ ...prev, [id]: notes ?? [] }))
    setLessonsByTopic((prev) => ({ ...prev, [id]: lessons ?? [] }))
    const bundled = bundledLessonsByTopic[id] ?? []
    const bundledTitles = new Set(bundled.map((lesson) => lesson.title))
    const databaseOnly = (lessons ?? []).filter((lesson) => !bundledTitles.has(lesson.title))
    setNoteCounts((prev) => ({ ...prev, [id]: (notes ?? []).length + bundled.length + databaseOnly.length }))
  }, [bundledLessonsByTopic])

  useEffect(() => {
    if (topicId) loadNotesForTopic(topicId)
  }, [topicId, loadNotesForTopic])

  // Seviye değişince arama kutusu sıfırlanır — bir önceki seviyenin
  // aramasının yeni listeyi boş göstermesi kafa karıştırıcı olurdu.
  useEffect(() => {
    setSearch('')
  }, [examType, subjectId, topicId])

  /* --- Türetilen veriler --- */

  const topicsBySubject = useMemo(() => {
    const map = {}
    topics.forEach((t) => {
      if (!map[t.subject_id]) map[t.subject_id] = []
      map[t.subject_id].push(t)
    })
    return map
  }, [topics])

  const statsFor = useCallback(
    (subjectList) => {
      const subjectIds = new Set(subjectList.map((s) => s.id))
      const relevantTopics = topics.filter((t) => subjectIds.has(t.subject_id))
      const notes = relevantTopics.reduce((sum, t) => sum + (noteCounts[t.id] || 0), 0)
      return { topics: relevantTopics.length, notes }
    },
    [topics, noteCounts]
  )

  const subjectsForExam = useMemo(
    () => subjects.filter((s) => s.exam_type === examType),
    [subjects, examType]
  )

  const topicsForSubject = useMemo(
    () => topicsBySubject[subjectId] ?? [],
    [topicsBySubject, subjectId]
  )

  const selectedSubject = subjects.find((s) => s.id === subjectId)
  const selectedTopic = topics.find((t) => t.id === topicId)
  const currentNotes = notesByTopic[topicId] ?? []
  const currentLessons = useMemo(() => {
    const bundled = bundledLessonsByTopic[topicId] ?? []
    const bundledTitles = new Set(bundled.map((lesson) => lesson.title))
    const databaseOnly = (lessonsByTopic[topicId] ?? []).filter(
      (lesson) => !bundledTitles.has(lesson.title)
    )
    return [...bundled, ...databaseOnly].sort(
      (a, b) => (a.order_index ?? 0) - (b.order_index ?? 0)
    )
  }, [bundledLessonsByTopic, lessonsByTopic, topicId])
  const totalCurrentItems = currentNotes.length + currentLessons.length

  const insights = useMemo(
    () => buildLibraryInsights({ subjects, topics, noteCounts }),
    [subjects, topics, noteCounts]
  )

  const q = search.trim().toLocaleLowerCase('tr-TR')
  const visibleSubjects = q
    ? subjectsForExam.filter((s) => s.name?.toLocaleLowerCase('tr-TR').includes(q))
    : subjectsForExam
  const visibleTopics = q
    ? topicsForSubject.filter((t) => t.name?.toLocaleLowerCase('tr-TR').includes(q))
    : topicsForSubject

  function go(payload) {
    navigate(libraryPath('notes', payload))
  }

  function resetToRoot() { navigate('/kutuphane/notlar') }

  const crumbs = [
    { label: 'Ders Kütüphanesi', onClick: () => navigate('/kutuphane') },
    { label: 'Not Kütüphanesi', onClick: resetToRoot },
  ]
  if (examType) {
    crumbs.push({
      label: examType,
      onClick: () => go({ examType }),
    })
  }
  if (selectedSubject) {
    crumbs.push({ label: selectedSubject.name, onClick: () => go({ examType, subject: selectedSubject }) })
  }
  if (selectedTopic) crumbs.push({ label: selectedTopic.name })

  const totalNotes = Object.values(noteCounts).reduce((s, n) => s + (n || 0), 0)

  return (
    <AppShell
      title="Not Kütüphanesi"
      subtitle="Sınav türüne, derse ve konuya göre düzenlenmiş kaynaklar"
      loading={loading}
      loadingLabel="Kütüphane yükleniyor…"
    >
      <DashboardHero
        eyebrow="Ders Kütüphanesi / Notlar"
        title={selectedTopic?.name ?? selectedSubject?.name ?? examType ?? 'Not Kütüphanesi'}
        subtitle={
          selectedTopic
            ? `${selectedSubject?.name} · ${examType}`
            : 'Sınav türünü seç, dersten konuya inerek notlara ulaş'
        }
        badge={examType && !selectedTopic ? { label: examType, tone: 'amber' } : null}
        highlights={[
          { label: 'Ders', value: subjects.length },
          { label: 'Konu', value: topics.length },
          { label: 'Not', value: totalNotes },
        ]}
      />

      {!examType && <InsightBar insights={insights} title="Kütüphanede" />}

      <Breadcrumb items={crumbs} />

      {/* LEVEL 1 — Sınav Türü */}
      {!examType && (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {EXAM_TYPES.map(({ key, label, hint, icon: Icon }) => {
            const list = subjects.filter((s) => s.exam_type === key)
            const s = statsFor(list)
            return (
              <button
                key={key}
                type="button"
                onClick={() => go({ examType: key })}
                className="card-interactive focus-ring group p-5 text-left"
              >
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-ink">{label}</h3>
                <p className="mt-0.5 text-xs text-ink/55">{hint}</p>
                <p className="mt-3 text-2xs font-semibold text-ink/55">
                  {list.length} ders · {s.topics} konu
                  {s.notes > 0 && (
                    <span className="text-brand-600"> · {s.notes} not</span>
                  )}
                </p>
              </button>
            )
          })}
        </div>
      )}

      {/* LEVEL 2 — Dersler */}
      {examType && !subjectId && (
        <Panel
          title={`${examType} Dersleri`}
          description="Bir derse dokun, konuları açılsın"
          icon={LibraryIcon}
          action={
            subjectsForExam.length > 6 ? (
              <Input
                icon={Search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Ders ara…"
                aria-label="Derslerde ara"
                className="h-9 w-44 py-0 text-xs"
              />
            ) : (
              <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={resetToRoot}>
                Sınav türleri
              </Button>
            )
          }
        >
          {visibleSubjects.length === 0 ? (
            <EmptyState
              icon={LibraryIcon}
              title={q ? 'Aramanla eşleşen ders yok' : 'Bu sınav türü için ders eklenmemiş'}
              description={
                q
                  ? 'Arama kutusunu temizleyerek tüm dersleri görebilirsin.'
                  : 'Öğretmenin ders ve konuları tanımladığında burada listelenecek.'
              }
              compact
            />
          ) : (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {visibleSubjects.map((s) => {
                const subjectTopics = topicsBySubject[s.id] ?? []
                const notes = subjectTopics.reduce((sum, t) => sum + (noteCounts[t.id] || 0), 0)
                const color = colorForKey(s.name)
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => go({ examType, subject: s })}
                    className="card-interactive focus-ring group p-5 text-left"
                  >
                    <div
                      className="mb-3 grid h-11 w-11 place-items-center rounded-xl transition-transform duration-200 group-hover:scale-110"
                      style={{ background: `${color}1A`, color }}
                    >
                      <NotebookPen className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-bold text-ink">{s.name}</h3>
                    <p className="mt-0.5 text-xs text-ink/55">
                      {subjectTopics.length} konu
                      {notes > 0 && <span className="text-brand-600"> · {notes} not</span>}
                    </p>
                  </button>
                )
              })}
            </div>
          )}
        </Panel>
      )}

      {/* LEVEL 3 — Konular */}
      {subjectId && !topicId && (
        <Panel
          title={selectedSubject?.name}
          description={`${topicsForSubject.length} konu · ${examType}`}
          icon={FolderOpen}
          iconTone={colorForKey(selectedSubject?.name)}
          padding={false}
          action={
            topicsForSubject.length > 8 ? (
              <Input
                icon={Search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Konu ara…"
                aria-label="Konularda ara"
                className="h-9 w-44 py-0 text-xs"
              />
            ) : (
              <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => go({ examType })}>
                {examType} dersleri
              </Button>
            )
          }
        >
          {visibleTopics.length === 0 ? (
            <div className="px-5 pb-5">
              <EmptyState
                icon={FolderOpen}
                title={q ? 'Aramanla eşleşen konu yok' : 'Bu ders için konu eklenmemiş'}
                description={
                  q
                    ? 'Arama kutusunu temizleyerek tüm konuları görebilirsin.'
                    : 'Konular tanımlandığında ders notları buraya bağlanabilir.'
                }
                compact
              />
            </div>
          ) : (
            <ul className="divide-y divide-line border-t border-line">
              {visibleTopics.map((t) => {
                const count = noteCounts[t.id] || 0
                return (
                  <li key={t.id}>
                    <button
                      type="button"
                      onClick={() => go({ examType, subject: selectedSubject, topic: t })}
                      className="focus-ring flex w-full items-center gap-3 px-5 py-3.5 text-left transition-colors hover:bg-surface-muted"
                    >
                      <span
                        className={cn(
                          'grid h-9 w-9 shrink-0 place-items-center rounded-lg',
                          count > 0 ? 'bg-brand-50 text-brand-600' : 'bg-surface-sunken text-ink/45'
                        )}
                      >
                        <FolderOpen className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1 truncate font-medium text-ink">{t.name}</span>
                      {count > 0 ? (
                        <Badge tone="brand" size="sm" icon={FileStack}>
                          {count} not
                        </Badge>
                      ) : (
                        <span className="text-2xs text-ink/45">not yok</span>
                      )}
                      <ChevronRight className="h-4 w-4 shrink-0 text-ink/45" aria-hidden="true" />
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </Panel>
      )}

      {/* LEVEL 4 — İçerik / Notlar */}
      {topicId && (
        <Panel
          title={selectedTopic?.name}
          description={`${selectedSubject?.name} · ${totalCurrentItems} ders notu`}
          icon={FileStack}
          iconTone={colorForKey(selectedSubject?.name)}
          action={
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => go({ examType, subject: selectedSubject })}>
                <span className="hidden sm:inline">Konular</span>
              </Button>
              {isTeacher && (
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" icon={Plus} onClick={() => setNoteFormOpen(true)}>
                    <span className="hidden sm:inline">Dosya notu</span>
                  </Button>
                  <Button size="sm" icon={Plus} onClick={() => { setEditingLesson(null); setLessonEditorOpen(true) }}>
                    Ders oluştur
                  </Button>
                </div>
              )}
            </div>
          }
        >
          {totalCurrentItems === 0 ? (
            <EmptyState
              icon={FileStack}
              title="Bu konu için ders notu yok"
              description={
                isTeacher
                  ? 'Bu konuya bir özet, formül kâğıdı veya PDF ekleyerek başlayabilirsin.'
                  : 'Öğretmenin bu konuya not eklediğinde burada görünecek.'
              }
              action={
                isTeacher ? (
                  <Button icon={Plus} onClick={() => { setEditingLesson(null); setLessonEditorOpen(true) }}>
                    Bu Konuya Ders Oluştur
                  </Button>
                ) : null
              }
              compact
            />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {currentLessons.map((lesson) => (
                <StructuredLessonCard
                  key={lesson.id}
                  lesson={lesson}
                  canManage={isTeacher && !lesson.is_bundled}
                  onEdit={(selected) => { setEditingLesson(selected); setLessonEditorOpen(true) }}
                />
              ))}
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
        </Panel>
      )}

      {isTeacher && (
        <Modal
          open={noteFormOpen}
          onClose={() => setNoteFormOpen(false)}
          title="Yeni Ders Notu"
          description={
            selectedTopic ? `${selectedSubject?.name} · ${selectedTopic.name}` : undefined
          }
          maxWidth="max-w-xl"
        >
          <LibraryNoteForm
            topicId={topicId}
            onAdded={() => {
              setNoteFormOpen(false)
              loadNotesForTopic(topicId)
            }}
          />
        </Modal>
      )}

      {isTeacher && (
        <Modal
          open={lessonEditorOpen}
          onClose={() => setLessonEditorOpen(false)}
          title={editingLesson ? 'Ders Notunu Düzenle' : 'Yeni Structured Ders'}
          description={selectedTopic ? `${selectedSubject?.name} · ${selectedTopic.name}` : undefined}
          maxWidth="max-w-3xl"
        >
          <LessonEditor
            topicId={topicId}
            lesson={editingLesson}
            onCancel={() => setLessonEditorOpen(false)}
            onSaved={() => {
              setLessonEditorOpen(false)
              setEditingLesson(null)
              loadNotesForTopic(topicId)
            }}
          />
        </Modal>
      )}
    </AppShell>
  )
}
