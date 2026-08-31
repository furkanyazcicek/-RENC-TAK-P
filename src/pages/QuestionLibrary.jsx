import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  CheckSquare,
  ChevronRight,
  ClipboardList,
  FolderOpen,
  GraduationCap,
  Search,
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { colorForKey } from '../lib/chartTheme'
import { bundledQuestionSetsForTopic } from '../lib/questionLibrary'
import {
  withMathQuestionBankSubjects,
  withMathQuestionBankTopics,
} from '../content/tests/matematik/question-bank.js'
import { emekliKonuMu } from '../content/emekliKonular'
import { libraryPath, slugifyLibraryValue } from '../lib/libraryRoutes'
import {
  createGradeLibraryData,
  gradeCollectionFor,
  topicSourceIds,
} from '../data/highSchoolCurriculum'
import { AppShell, Badge, Button, EmptyState, Input } from '../components/ui'
import { DashboardHero, Panel } from '../components/dashboard'
import LibraryCategorySelector from '../components/library/LibraryCategorySelector'

const EXAM_TYPES = [
  { key: 'LGS', hint: 'Liselere Geçiş Sınavı', icon: GraduationCap },
  { key: 'TYT', hint: 'YKS — Temel Yeterlilik Testi', icon: BookOpen },
  { key: 'AYT', hint: 'YKS — Alan Yeterlilik Testi', icon: Award },
  { key: 'KPSS', hint: 'Kamu Personeli Seçme Sınavı', icon: Briefcase },
]

function Breadcrumb({ items }) {
  return <nav aria-label="Soru kütüphanesi yolu" className="flex flex-wrap items-center gap-1.5 text-sm">
    {items.map((item, index) => <span key={item.label} className="flex items-center gap-1.5">
      {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-ink/45" />}
      {index === items.length - 1 ? <span className="font-semibold text-accent" aria-current="page">{item.label}</span> : <button type="button" onClick={item.onClick} className="focus-ring rounded font-semibold text-ink/60 hover:text-accent">{item.label}</button>}
    </span>)}
  </nav>
}

export default function QuestionLibrary() {
  const navigate = useNavigate()
  const { examType: routeExamType, subjectSlug, topicSlug } = useParams()
  const [subjects, setSubjects] = useState([])
  const [topics, setTopics] = useState([])
  const [setsByTopic, setSetsByTopic] = useState({})
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const load = useCallback(async () => {
    const [subjectsRes, topicsRes, setsRes] = await Promise.all([
      supabase.from('library_subjects').select('*').order('exam_type').order('order_index'),
      supabase.from('library_topics').select('*').order('order_index'),
      supabase.from('library_question_sets').select('id, topic_id, title, description, difficulty, question_count, questions').eq('status', 'published').order('order_index'),
    ])
    const grouped = {}
    ;(setsRes.data ?? []).forEach((set) => { (grouped[set.topic_id] ??= []).push(set) })
    const remoteSubjects = subjectsRes.data ?? []
    const catalogSubjects = withMathQuestionBankSubjects(remoteSubjects)
    const remoteTopics = withMathQuestionBankTopics(catalogSubjects, topicsRes.data ?? [])
    const gradeData = createGradeLibraryData(catalogSubjects, remoteTopics)
    setSubjects([...catalogSubjects, ...gradeData.subjects])
    setTopics([...remoteTopics, ...gradeData.topics])
    setSetsByTopic(grouped)
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const examType = routeExamType?.toUpperCase() ?? null
  const currentCollection = gradeCollectionFor(examType)
  const selectedSubject = useMemo(() => subjects.find((subject) => subject.exam_type === examType && slugifyLibraryValue(subject.name) === subjectSlug), [subjects, examType, subjectSlug])
  const selectedTopic = useMemo(() => topics.find((topic) => topic.subject_id === selectedSubject?.id && slugifyLibraryValue(topic.name) === topicSlug), [topics, selectedSubject, topicSlug])
  const subjectsForExam = useMemo(() => subjects.filter((subject) => subject.exam_type === examType), [subjects, examType])
  const topicSetCount = useCallback((topic) => {
    const sourceIds = topicSourceIds(topic)
    const remoteCount = sourceIds.reduce((sum, id) => sum + (setsByTopic[id]?.length ?? 0), 0)
    const bundledIds = new Set()
    sourceIds.forEach((id) => {
      const sourceTopic = topics.find((candidate) => candidate.id === id)
      const sourceSubject = subjects.find((subject) => subject.id === (sourceTopic?.subject_id ?? topic.subject_id))
      bundledQuestionSetsForTopic(sourceTopic?.name ?? topic.name, {
        examType: sourceSubject?.exam_type,
        subjectName: sourceSubject?.name,
      }).forEach((set) => bundledIds.add(set.id))
    })
    return remoteCount + bundledIds.size
  }, [setsByTopic, subjects, topics])

  // Müfredattan düşmüş eski başlıklar listede yer kaplamasın; içinde soru
  // seti varsa yine görünür (bkz. src/content/emekliKonular.js).
  const topicsForSubject = useMemo(
    () =>
      topics.filter((topic) => {
        if (topic.subject_id !== selectedSubject?.id) return false
        if (
          !emekliKonuMu({
            examType: selectedSubject.exam_type,
            subject: selectedSubject.name,
            topic: topic.name,
          })
        )
          return true
        return topicSetCount(topic) > 0
      }),
    [topics, selectedSubject, topicSetCount]
  )
  const questionSets = useMemo(() => {
    if (!selectedTopic) return []
    const sourceIds = topicSourceIds(selectedTopic)
    const remote = sourceIds.flatMap((id) => setsByTopic[id] ?? [])
    const knownIds = new Set(remote.map((set) => set.id))
    const bundled = sourceIds.flatMap((id) => {
      const sourceTopic = topics.find((candidate) => candidate.id === id)
      return bundledQuestionSetsForTopic(sourceTopic?.name ?? selectedTopic.name, {
        examType,
        subjectName: selectedSubject?.name,
      })
    })
    return [...remote, ...bundled.filter((set) => !knownIds.has(set.id))].filter(
      (set, index, list) => list.findIndex((candidate) => candidate.id === set.id) === index
    )
  }, [selectedTopic, setsByTopic, topics, examType, selectedSubject])

  const q = search.trim().toLocaleLowerCase('tr-TR')
  const visibleSubjects = q ? subjectsForExam.filter((subject) => subject.name.toLocaleLowerCase('tr-TR').includes(q)) : subjectsForExam
  const visibleTopics = q ? topicsForSubject.filter((topic) => topic.name.toLocaleLowerCase('tr-TR').includes(q)) : topicsForSubject
  const go = (payload) => navigate(libraryPath('questions', payload))
  const statsForKey = useCallback((key) => {
    const subjectList = subjects.filter((subject) => subject.exam_type === key)
    const subjectIds = new Set(subjectList.map((subject) => subject.id))
    const topicList = topics.filter((topic) => subjectIds.has(topic.subject_id))
    return {
      subjects: subjectList.length,
      topics: topicList.length,
      items: topicList.reduce((sum, topic) => sum + topicSetCount(topic), 0),
    }
  }, [subjects, topicSetCount, topics])

  const crumbs = [{ label: 'Ders Kütüphanesi', onClick: () => navigate('/kutuphane') }, { label: 'Soru Kütüphanesi', onClick: () => go() }]
  if (examType) crumbs.push({ label: currentCollection?.label ?? examType, onClick: () => go({ examType }) })
  if (selectedSubject) crumbs.push({ label: selectedSubject.name, onClick: () => go({ examType, subject: selectedSubject }) })
  if (selectedTopic) crumbs.push({ label: selectedTopic.name })

  return <AppShell title="Soru Kütüphanesi" subtitle="Konu bazlı testler, kavrama soruları ve soru bankaları" loading={loading} loadingLabel="Soru kütüphanesi yükleniyor…">
    <DashboardHero eyebrow="Ders Kütüphanesi / Sorular" title={selectedTopic?.name ?? selectedSubject?.name ?? currentCollection?.label ?? examType ?? 'Soru Kütüphanesi'} subtitle={selectedTopic ? `${selectedSubject?.name} · ${currentCollection?.label ?? examType} · Test ve soru setleri` : 'Sınavını veya sınıfını seç, dersten konuya inerek testlere ulaş'} />
    <Breadcrumb items={crumbs} />

    {!examType && <LibraryCategorySelector examTypes={EXAM_TYPES} statsForKey={statsForKey} onSelect={(key) => go({ examType: key })} tone="accent" />}

    {examType && !selectedSubject && <Panel title={`${currentCollection?.label ?? examType} Dersleri`} description="Bir derse dokun, soru setleri olan konulara in" icon={ClipboardList} action={<Input icon={Search} value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Ders ara…" aria-label="Derslerde ara" className="h-9 w-full py-0 text-xs sm:w-44" />}>
      {visibleSubjects.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visibleSubjects.map((subject) => <button key={subject.id} type="button" onClick={() => go({ examType, subject })} className="card-interactive focus-ring group min-w-0 p-5 text-left"><div className="mb-3 grid h-11 w-11 place-items-center rounded-xl" style={{ background: `${colorForKey(subject.name)}1A`, color: colorForKey(subject.name) }}><ClipboardList className="h-5 w-5" /></div><h3 className="break-words font-display font-bold leading-6 text-ink">{subject.name}</h3><p className="mt-1 text-xs text-ink/55">Konu bazlı soru setleri</p></button>)}</div> : <EmptyState icon={ClipboardList} title="Bu kategori için ders yok" description="Dersler müfredat tanımlandığında burada görünecek." compact />}
    </Panel>}

    {selectedSubject && !selectedTopic && <Panel title={selectedSubject.name} description={`${topicsForSubject.length} konu · ${currentCollection?.label ?? examType}`} icon={FolderOpen} iconTone={colorForKey(selectedSubject.name)} padding={false} action={<Input icon={Search} value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Konu ara…" aria-label="Konularda ara" className="h-9 w-full py-0 text-xs sm:w-44" />}>
      {visibleTopics.length ? <ul className="divide-y divide-line border-t border-line">{visibleTopics.map((topic) => { const count = topicSetCount(topic); return <li key={topic.id}><button type="button" onClick={() => go({ examType, subject: selectedSubject, topic })} className="focus-ring flex w-full items-center gap-3 px-4 py-3.5 text-left hover:bg-surface-muted sm:px-5"><span className={count ? 'grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent' : 'grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-sunken text-ink/45'}><CheckSquare className="h-4 w-4" /></span><span className="min-w-0 flex-1 break-words font-medium leading-5 text-ink">{topic.name}</span>{count ? <Badge tone="accent" size="sm">{count} test</Badge> : <span className="shrink-0 text-2xs text-ink/45">soru yok</span>}<ChevronRight className="h-4 w-4 shrink-0 text-ink/45" /></button></li> })}</ul> : <div className="p-5"><EmptyState icon={FolderOpen} title="Bu ders için konu yok" description="Konular eklendiğinde testler burada sınıflanacak." compact /></div>}
    </Panel>}

    {selectedTopic && <Panel title={selectedTopic.name} description={`${selectedSubject.name} · Testler ve soru setleri`} icon={CheckSquare} iconTone={colorForKey(selectedSubject.name)} action={<Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => go({ examType, subject: selectedSubject })}>Konular</Button>}>
      {questionSets.length ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{questionSets.map((set) => <article key={set.id} className="card-interactive flex min-h-48 flex-col p-5"><div className="flex items-start justify-between gap-3"><CheckSquare className="h-5 w-5 text-accent" /><Badge tone="accent" size="sm">{set.difficulty === 'very_easy' ? 'Çok Kolay' : set.difficulty === 'easy' ? 'Kolay' : set.difficulty === 'hard' || set.type === 'mastery' ? 'Zor' : 'Orta'}</Badge></div><h3 className="mt-4 font-display font-bold text-ink">{set.title}</h3><p className="mt-1 text-sm text-ink/60">{set.description}</p><div className="mt-auto flex items-center justify-between pt-5 text-xs text-ink/50"><span>{set.question_count ?? set.questions?.length ?? 0} soru</span><Button size="sm" onClick={() => navigate(`/kutuphane/sorular/test/${slugifyLibraryValue(selectedTopic.name)}/${set.id}`, { state: { returnTo: libraryPath('questions', { examType, subject: selectedSubject, topic: selectedTopic }) } })}>Teste Git</Button></div></article>)}</div> : <EmptyState icon={CheckSquare} title="Bu konu için henüz soru seti hazırlanmadı." description="Yeni testler yayınlandığında burada listelenecek." compact />}
    </Panel>}
  </AppShell>
}
