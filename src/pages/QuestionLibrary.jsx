import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  AlertCircle,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  ClipboardList,
  Clock3,
  FolderOpen,
  GraduationCap,
  Search,
} from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { colorForKey } from '../lib/chartTheme'
import {
  bundledQuestionSetsForTopic,
  loadQuestionProgressForSets,
} from '../lib/questionLibrary'
import { createQuestionLibraryCatalog } from '../lib/questionLibraryCatalog'
import {
  indexLatestQuestionProgress,
  progressForQuestionSet,
  summarizeQuestionProgress,
} from '../lib/questionProgress'

import { emekliKonuMu } from '../content/emekliKonular'
import { useAuth } from '../context/AuthContext'
import { libraryPath, slugifyLibraryValue } from '../lib/libraryRoutes'
import {
  createGradeLibraryData,
  gradeCollectionFor,
  topicSourceIds,
} from '../data/highSchoolCurriculum'
import {
  AppShell,
  Badge,
  Button,
  EmptyState,
  Input,
  ProgressBar,
  Skeleton,
} from '../components/ui'
import { DashboardHero, Panel } from '../components/dashboard'
import LibraryCategorySelector from '../components/library/LibraryCategorySelector'

const EXAM_TYPES = [
  { key: 'LGS', hint: 'Liselere Geçiş Sınavı', icon: GraduationCap },
  { key: 'TYT', hint: 'YKS — Temel Yeterlilik Testi', icon: BookOpen },
  { key: 'AYT', hint: 'YKS — Alan Yeterlilik Testi', icon: Award },
  { key: 'KPSS', hint: 'Kamu Personeli Seçme Sınavı', icon: Briefcase },
]

const DIFFICULTY_LABELS = {
  very_easy: 'Çok Kolay',
  easy: 'Kolay',
  medium: 'Orta',
  hard: 'Zor',
}

function Breadcrumb({ items }) {
  return <nav aria-label="Soru kütüphanesi yolu" className="flex flex-wrap items-center gap-1.5 text-sm">
    {items.map((item, index) => <span key={item.label} className="flex items-center gap-1.5">
      {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-ink/45" />}
      {index === items.length - 1 ? <span className="font-semibold text-accent" aria-current="page">{item.label}</span> : <button type="button" onClick={item.onClick} className="focus-ring rounded font-semibold text-ink/60 hover:text-accent">{item.label}</button>}
    </span>)}
  </nav>
}

function TopicProgressOverview({ state, summary }) {
  if (state === 'loading') {
    return (
      <div className="mb-6 border-b border-line pb-5" aria-label="Test ilerlemesi yükleniyor">
        <div className="mb-3 flex items-center justify-between gap-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-2.5 rounded-full" />
      </div>
    )
  }

  if (state === 'unavailable') {
    return (
      <div className="mb-6 border-b border-line pb-5" role="status">
        <p className="text-sm font-semibold text-ink">Test ilerlemen şu anda görüntülenemiyor.</p>
        <p className="mt-1 text-xs leading-relaxed text-ink/60">İstersen testlere devam edebilirsin; kayıtlı sonuçların silinmedi.</p>
      </div>
    )
  }

  if (state !== 'ready' || summary.total === 0) return null

  return (
    <div className="mb-6 border-b border-line pb-5" role="status" aria-live="polite">
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-bold text-ink">Bu konudaki ilerlemen</p>
          <p className="mt-0.5 text-xs text-ink/60">
            {summary.completed} test tamamlandı
            {summary.inProgress > 0 ? ` · ${summary.inProgress} test devam ediyor` : ''}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {summary.inProgress > 0 && <Badge tone="aqua" size="sm" icon={Clock3}>{summary.inProgress} devam ediyor</Badge>}
          <Badge tone="neutral" size="sm">{summary.notStarted} başlanmadı</Badge>
        </div>
      </div>
      <ProgressBar
        value={summary.completed}
        max={summary.total}
        tone="aqua"
        size="sm"
        label={`${summary.completed} / ${summary.total} test tamamlandı`}
        showValue
      />
    </div>
  )
}

function QuestionSetCard({ questionSet, progress, progressState, onOpen }) {
  const catalogTotal = questionSet.question_count ?? questionSet.questions?.length ?? 0
  const totalCount = progress?.totalCount || catalogTotal
  const completed = progress?.status === 'completed'
  const inProgress = progress?.status === 'in_progress'
  const buttonLabel = completed ? 'Sonucu Gör' : inProgress ? 'Devam Et' : 'Teste Başla'
  const buttonVariant = completed ? 'secondary' : 'primary'
  const difficulty = questionSet.difficulty === 'hard' || questionSet.type === 'mastery'
    ? 'Zor'
    : DIFFICULTY_LABELS[questionSet.difficulty] ?? 'Orta'

  return (
    <article className="card-interactive flex min-h-56 min-w-0 flex-col p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        {progressState === 'loading' ? (
          <Skeleton className="h-5 w-24 rounded-full" />
        ) : progressState === 'ready' && completed ? (
          <Badge tone="success" size="sm" icon={CheckCircle2}>Tamamlandı</Badge>
        ) : progressState === 'ready' && inProgress ? (
          <Badge tone="aqua" size="sm" icon={Clock3}>Devam ediyor</Badge>
        ) : progressState === 'ready' ? (
          <Badge tone="neutral" size="sm" dot>Başlanmadı</Badge>
        ) : (
          <CheckSquare className="h-5 w-5 text-accent" aria-hidden="true" />
        )}
        <Badge tone="accent" size="sm">{difficulty}</Badge>
      </div>

      <h3 className="mt-4 break-words font-display font-bold leading-snug text-ink">{questionSet.title}</h3>
      {questionSet.description && <p className="mt-1 text-sm leading-relaxed text-ink/60">{questionSet.description}</p>}

      <div className="mt-auto pt-5">
        {progressState === 'loading' ? (
          <div aria-hidden="true">
            <Skeleton className="mb-2 h-3 w-36" />
            <Skeleton className="h-1.5 rounded-full" />
          </div>
        ) : inProgress ? (
          <ProgressBar
            value={progress.answeredCount}
            max={totalCount}
            tone="aqua"
            size="sm"
            label={`${progress.answeredCount} / ${totalCount} soru yanıtlandı`}
            showValue
          />
        ) : completed ? (
          <div>
            <p className="text-2xs font-semibold uppercase tracking-wide text-ink/50">Son deneme</p>
            <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-ink/70">
              <span><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-success-500" aria-hidden="true" />{progress.correctCount} doğru</span>
              <span><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-danger-500" aria-hidden="true" />{progress.wrongCount} yanlış</span>
              <span><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-ink/25" aria-hidden="true" />{progress.emptyCount} boş</span>
            </p>
          </div>
        ) : progressState === 'ready' ? (
          <p className="text-xs leading-relaxed text-ink/55">Henüz bu teste başlanmadı.</p>
        ) : null}

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="shrink-0 text-xs text-ink/50">{catalogTotal} soru</span>
          <Button className="min-h-11" size="sm" variant={buttonVariant} onClick={onOpen}>{buttonLabel}</Button>
        </div>
      </div>
    </article>
  )
}

export default function QuestionLibrary() {
  const navigate = useNavigate()
  const { examType: routeExamType, subjectSlug, topicSlug } = useParams()
  const [searchParams] = useSearchParams()
  const { user, role, loading: authLoading } = useAuth()
  const visualProgressPreview = import.meta.env.DEV
    && searchParams.get('ilerleme-onizleme') === '1'
  const [subjects, setSubjects] = useState([])
  const [topics, setTopics] = useState([])
  const [setsByTopic, setSetsByTopic] = useState({})
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [search, setSearch] = useState('')
  const [progressView, setProgressView] = useState({
    scope: null,
    state: 'idle',
    progressByKey: {},
  })

  const load = useCallback(async () => {
    setLoading(true)
    setLoadError(false)

    try {
      const [subjectsRes, topicsRes, setsRes] = await Promise.all([
        supabase.from('library_subjects').select('*').order('exam_type').order('order_index'),
        supabase.from('library_topics').select('*').order('order_index'),
        supabase.from('library_question_sets').select('id, topic_id, title, description, difficulty, question_count, questions').eq('status', 'published').order('order_index'),
      ])
      const requestError = subjectsRes.error ?? topicsRes.error ?? setsRes.error
      if (requestError) throw requestError

      const grouped = {}
      ;(setsRes.data ?? []).forEach((set) => { (grouped[set.topic_id] ??= []).push(set) })
      const catalog = createQuestionLibraryCatalog(subjectsRes.data ?? [], topicsRes.data ?? [])
      const gradeData = createGradeLibraryData(catalog.subjects, catalog.topics)
      setSubjects([...catalog.subjects, ...gradeData.subjects])
      setTopics([...catalog.topics, ...gradeData.topics])
      setSetsByTopic(grouped)
    } catch (error) {
      console.error('Soru kütüphanesi yüklenemedi:', error)
      setLoadError(true)
    } finally {
      setLoading(false)
    }
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
    const remote = sourceIds
      .flatMap((id) => setsByTopic[id] ?? [])
      .map((set) => ({ ...set, source_code: 'db_question_test', content_id: String(set.id) }))
    const knownIds = new Set(remote.map((set) => set.id))
    const bundled = sourceIds.flatMap((id) => {
      const sourceTopic = topics.find((candidate) => candidate.id === id)
      return bundledQuestionSetsForTopic(sourceTopic?.name ?? selectedTopic.name, {
        examType,
        subjectName: selectedSubject?.name,
      }).map((set) => ({
        ...set,
        source_code: 'bundled_question_test',
        content_id: String(set.id),
      }))
    })
    return [...remote, ...bundled.filter((set) => !knownIds.has(set.id))].filter(
      (set, index, list) => list.findIndex((candidate) => candidate.id === set.id) === index
    )
  }, [selectedTopic, setsByTopic, topics, examType, selectedSubject])

  const showStudentProgress = role === 'student' || visualProgressPreview
  const progressScope = selectedTopic?.id && (user?.id || visualProgressPreview)
    ? `${visualProgressPreview ? 'preview' : user.id}:${selectedTopic.id}`
    : null

  useEffect(() => {
    if (visualProgressPreview && selectedTopic) {
      const previewRows = questionSets.slice(0, 2).map((questionSet, index) => ({
        id: index === 0
          ? '00000000-0000-4000-8000-000000000401'
          : '00000000-0000-4000-8000-000000000402',
        source_code: questionSet.source_code,
        content_id: questionSet.content_id ?? questionSet.id,
        content_revision: 'gorsel-onizleme',
        status: index === 0 ? 'completed' : 'in_progress',
        marked_count: index === 0 ? 9 : 4,
        total_count: questionSet.question_count ?? questionSet.questions?.length ?? 10,
        correct_count: index === 0 ? 6 : 0,
        wrong_count: index === 0 ? 3 : 0,
        empty_count: index === 0 ? 1 : 0,
        started_at: `2026-09-13T10:0${index}:00.000Z`,
        updated_at: `2026-09-13T10:1${index}:00.000Z`,
      }))
      setProgressView({
        scope: progressScope,
        state: 'ready',
        progressByKey: indexLatestQuestionProgress(previewRows),
      })
      return undefined
    }
    if (authLoading) return undefined
    if (role !== 'student' || !user?.id || !selectedTopic) {
      setProgressView({ scope: null, state: 'idle', progressByKey: {} })
      return undefined
    }

    let active = true
    setProgressView({ scope: progressScope, state: 'loading', progressByKey: {} })

    loadQuestionProgressForSets(user.id, questionSets).then((result) => {
      if (!active) return
      setProgressView({
        scope: progressScope,
        state: result.status === 'available' ? 'ready' : 'unavailable',
        progressByKey: result.progressByKey,
      })
    })

    return () => { active = false }
  }, [authLoading, progressScope, questionSets, role, selectedTopic, user?.id, visualProgressPreview])

  const progressState = progressView.scope === progressScope
    ? progressView.state
    : showStudentProgress && selectedTopic
      ? 'loading'
      : 'idle'
  const progressByKey = progressView.scope === progressScope ? progressView.progressByKey : {}
  const progressSummary = useMemo(
    () => summarizeQuestionProgress(questionSets, progressByKey),
    [progressByKey, questionSets]
  )

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

  if (loadError) {
    return (
      <AppShell title="Soru Kütüphanesi" subtitle="Konu bazlı testler, kavrama soruları ve soru bankaları">
        <EmptyState
          icon={AlertCircle}
          title="Soru kütüphanesi yüklenemedi"
          description="Bağlantını kontrol edip yeniden deneyebilirsin. Kayıtlı test sonuçların bu durumdan etkilenmedi."
          action={<Button onClick={load}>Yeniden dene</Button>}
        />
      </AppShell>
    )
  }

  return <AppShell title="Soru Kütüphanesi" subtitle="Konu bazlı testler, kavrama soruları ve soru bankaları" loading={loading} loadingLabel="Soru kütüphanesi yükleniyor…" showPageIntro={false}>
    <DashboardHero asPageHeader eyebrow="Ders Kütüphanesi / Sorular" title={selectedTopic?.name ?? selectedSubject?.name ?? currentCollection?.label ?? examType ?? 'Soru Kütüphanesi'} subtitle={selectedTopic ? `${selectedSubject?.name} · ${currentCollection?.label ?? examType} · Test ve soru setleri` : 'Sınavını veya sınıfını seç, dersten konuya inerek testlere ulaş'} />
    <Breadcrumb items={crumbs} />

    {!examType && <LibraryCategorySelector examTypes={EXAM_TYPES} statsForKey={statsForKey} onSelect={(key) => go({ examType: key })} tone="accent" />}

    {examType && !selectedSubject && <Panel title={`${currentCollection?.label ?? examType} Dersleri`} description="Bir derse dokun, soru setleri olan konulara in" icon={ClipboardList} action={<Input icon={Search} value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Ders ara…" aria-label="Derslerde ara" className="h-9 w-full py-0 text-xs sm:w-44" />}>
      {visibleSubjects.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visibleSubjects.map((subject) => <button key={subject.id} type="button" onClick={() => go({ examType, subject })} className="card-interactive focus-ring group min-w-0 p-5 text-left"><div className="mb-3 grid h-11 w-11 place-items-center rounded-xl" style={{ background: `${colorForKey(subject.name)}1A`, color: colorForKey(subject.name) }}><ClipboardList className="h-5 w-5" /></div><h3 className="break-words font-display font-bold leading-6 text-ink">{subject.name}</h3><p className="mt-1 text-xs text-ink/55">Konu bazlı soru setleri</p></button>)}</div> : <EmptyState icon={ClipboardList} title="Bu kategori için ders yok" description="Dersler müfredat tanımlandığında burada görünecek." compact />}
    </Panel>}

    {selectedSubject && !selectedTopic && <Panel title={selectedSubject.name} description={`${topicsForSubject.length} konu · ${currentCollection?.label ?? examType}`} icon={FolderOpen} iconTone={colorForKey(selectedSubject.name)} padding={false} action={<Input icon={Search} value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Konu ara…" aria-label="Konularda ara" className="h-9 w-full py-0 text-xs sm:w-44" />}>
      {visibleTopics.length ? <ul className="divide-y divide-line border-t border-line">{visibleTopics.map((topic) => { const count = topicSetCount(topic); return <li key={topic.id}><button type="button" onClick={() => go({ examType, subject: selectedSubject, topic })} className="focus-ring flex w-full items-center gap-3 px-4 py-3.5 text-left hover:bg-surface-muted sm:px-5"><span className={count ? 'grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent' : 'grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-sunken text-ink/45'}><CheckSquare className="h-4 w-4" /></span><span className="min-w-0 flex-1 break-words font-medium leading-5 text-ink">{topic.name}</span>{count ? <Badge tone="accent" size="sm">{count} test</Badge> : <span className="shrink-0 text-2xs text-ink/45">soru yok</span>}<ChevronRight className="h-4 w-4 shrink-0 text-ink/45" /></button></li> })}</ul> : <div className="p-5"><EmptyState icon={FolderOpen} title="Bu ders için konu yok" description="Konular eklendiğinde testler burada sınıflanacak." compact /></div>}
    </Panel>}

    {selectedTopic && <Panel title={selectedTopic.name} description={`${selectedSubject.name} · Testler ve soru setleri`} icon={CheckSquare} iconTone={colorForKey(selectedSubject.name)} action={<Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => go({ examType, subject: selectedSubject })}>Konular</Button>}>
      {questionSets.length ? (
        <>
          {visualProgressPreview && (
            <p className="mb-5 rounded-xl border border-brand-500/20 bg-brand-500/[0.07] px-4 py-3 text-sm text-ink/70" role="status">
              İlerleme görsel doğrulama örneği; canlı öğrenci verisi kullanılmaz.
            </p>
          )}
          {showStudentProgress && (
            <TopicProgressOverview state={progressState} summary={progressSummary} />
          )}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {questionSets.map((set) => {
              const progress = progressForQuestionSet(progressByKey, set)
              const basePath = `/kutuphane/sorular/test/${slugifyLibraryValue(selectedTopic.name)}/${set.id}`
              const destination = progress?.status === 'completed'
                ? `${basePath}/result?attempt=${progress.attemptId}`
                : progress?.status === 'in_progress'
                  ? `${basePath}?attempt=${progress.attemptId}`
                  : basePath
              const openPath = visualProgressPreview
                ? `${destination}${destination.includes('?') ? '&' : '?'}capture=reels&faz3-onizleme=${progress?.status === 'completed' ? 'sonuc' : 'coz'}`
                : destination

              return (
                <QuestionSetCard
                  key={set.id}
                  questionSet={set}
                  progress={progress}
                  progressState={showStudentProgress ? progressState : 'idle'}
                  onOpen={() => navigate(openPath, {
                    state: {
                      returnTo: libraryPath('questions', {
                        examType,
                        subject: selectedSubject,
                        topic: selectedTopic,
                      }),
                    },
                  })}
                />
              )
            })}
          </div>
        </>
      ) : <EmptyState icon={CheckSquare} title="Bu konu için henüz soru seti hazırlanmadı." description="Yeni testler yayınlandığında burada listelenecek." compact />}
    </Panel>}
  </AppShell>
}
