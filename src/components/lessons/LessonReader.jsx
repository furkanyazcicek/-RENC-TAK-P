import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BookOpen } from 'lucide-react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import { useAuth } from '../../context/AuthContext'
import { normalizeLessonDocument } from '../../lib/lesson/schema'
import { buildPersonalization } from '../../lib/lesson/personalize'
import { findAudio, loadLessonAudio, signedAudioUrl } from '../../lib/lessonAudio'
import { lessonBySlug } from '../../content/lessons'
import LessonDocument from './reader/LessonDocument'
import LessonMasthead from './reader/LessonMasthead'
import TeacherVoice from './reader/TeacherVoice'
import LessonNarrationPlayer from './reader/LessonNarrationPlayer'
import { buildNarrationItems } from '../../lib/lessonNarration'
import { AppShell, Button, EmptyState, Modal, PageLoader } from '../ui'
import LibraryReturnButton from '../library/LibraryReturnButton'
import SaveStatus from '../learning/SaveStatus'
import { describeBundledLesson } from '../../lib/learning/contentActivity/identity.js'
import { createClientActionId, sessionActionId, useContentActivity } from '../../hooks/useContentActivity.js'
import { libraryPath, libraryReturnPath } from '../../lib/libraryRoutes.js'

/**
 * DERS OKUYUCUSU
 * ==================================================================
 *
 * SIRALAMA BİLİNÇLİ: master içerik ÖNCE gelir.
 * Ders açıldığı anda okunacak metin ekrandadır. Kişiselleştirme, ses ve
 * telemetri arkadan gelir ve hiçbiri okumayı bekletmez (§49, §50). Bir
 * yardımcı özellik başarısız olursa ders yine çalışır.
 */
export default function LessonReader() {
  const { lessonId } = useParams()
  const { profile, user, role } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const { status: saveStatus, perform, flush } = useContentActivity(user?.id)

  const [lesson, setLesson] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [overlay, setOverlay] = useState(null)
  const [audioAssets, setAudioAssets] = useState([])
  const [completedSections, setCompletedSections] = useState(() => new Set())
  const [voicePanel, setVoicePanel] = useState(null)
  const [narrationOpen, setNarrationOpen] = useState(false)
  const [activeNarration, setActiveNarration] = useState(null)

  const articleRef = useRef(null)

  /* ---------------- Master içerik ---------------- */
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    const structuredVisualPreview = import.meta.env.DEV
      && lessonId === 'faz3-yapilandirilmis-onizleme'
    const bundledSource = structuredVisualPreview
      ? lessonBySlug('asit-baz-ve-tuz')
      : lessonId?.startsWith('bundled-')
        ? lessonBySlug(lessonId.slice('bundled-'.length))
        : null

    if (bundledSource) {
      void describeBundledLesson(bundledSource)
        .then((descriptor) => {
          if (cancelled) return
          setLesson({
            id: structuredVisualPreview ? '00000000-0000-4000-8000-000000000315' : lessonId,
            content_id: structuredVisualPreview ? '00000000-0000-4000-8000-000000000315' : bundledSource.slug,
            content_revision: structuredVisualPreview ? 'db-preview-1' : descriptor.content_revision,
            content_hash: descriptor.content_hash,
            title: bundledSource.title,
            subtitle: bundledSource.subtitle,
            slug: bundledSource.slug,
            document: bundledSource.document,
            status: 'published',
            learning_mode: bundledSource.learningMode ?? 'interactive',
            part_label: bundledSource.partLabel ?? null,
            is_gold_standard: Boolean(bundledSource.goldStandard),
            is_bundled: !structuredVisualPreview,
            is_visual_preview: structuredVisualPreview,
            library_topics: {
              name: bundledSource.placement.topic,
              library_subjects: {
                name: bundledSource.placement.subject,
                exam_type: bundledSource.placement.examType,
              },
            },
          })
          setLoading(false)
        })
        .catch(() => {
          if (cancelled) return
          setError('Bu dersin içerik kimliği doğrulanamadı.')
          setLoading(false)
        })
      return () => {
        cancelled = true
      }
    }

    supabase
      .from('structured_lessons')
      .select('*, library_topics(name, library_subjects(name, exam_type))')
      .eq('id', lessonId)
      .single()
      .then(({ data, error: loadError }) => {
        if (cancelled) return
        if (loadError || !data) {
          setError('Bu ders notu şu anda açılamıyor.')
          setLoading(false)
          return
        }
        setLesson({
          ...data,
          content_id: data.id,
          content_revision: `db-${data.current_revision}`,
        })
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [lessonId])

  useEffect(() => {
    setNarrationOpen(false)
    setActiveNarration(null)
    setVoicePanel(null)
  }, [lessonId])

  /* ---------------- Yan katmanlar (okumayı bekletmez) ---------------- */
  useEffect(() => {
    if (!lesson?.id || lesson.is_bundled || lesson.is_visual_preview) return
    void loadLessonAudio(lesson.id).then(setAudioAssets)
  }, [lesson?.id, lesson?.is_bundled, lesson?.is_visual_preview])

  useEffect(() => {
    if (!lesson || lesson.is_bundled || role !== 'student' || !user?.id) return
    let cancelled = false
    buildPersonalization({ lesson, studentId: user.id, fullName: profile?.full_name ?? '' })
      .then((result) => {
        if (!cancelled) setOverlay(result)
      })
      .catch(() => {
        // Kişiselleştirme başarısızsa öğrenci master dersi okumaya devam eder.
        if (!cancelled) setOverlay(null)
      })
    return () => {
      cancelled = true
    }
  }, [lesson, profile?.full_name, role, user?.id])

  const document = useMemo(() => normalizeLessonDocument(lesson?.document), [lesson?.document])

  const recordEvent = useCallback(
    (eventName, payload = {}, options = {}) => {
      if (role !== 'student' || !user?.id || !lesson?.id || !lesson.content_revision) return Promise.resolve(null)
      const type = lesson.is_bundled ? 'bundled_lesson_event' : 'structured_lesson_event'
      const eventPayload = lesson.is_bundled
        ? {
            content_id: lesson.content_id,
            content_revision: lesson.content_revision,
            event_name: eventName,
            block_id: payload.blockId,
            section_id: payload.sectionId,
            selected_option_id: payload.selectedOptionId,
          }
        : {
            lesson_id: lesson.id,
            content_revision: lesson.content_revision,
            event_name: eventName,
            block_id: payload.blockId,
            section_id: payload.sectionId,
            selected_option_id: payload.selectedOptionId,
          }
      return perform(type, eventPayload, {
        actionId: options.actionId ?? createClientActionId(),
      })
    },
    [lesson, perform, role, user?.id]
  )

  useEffect(() => {
    if (!lesson?.content_revision || role !== 'student' || !user?.id) return
    const actionId = sessionActionId(
      `${user.id}:${lesson.is_bundled ? 'bundled' : 'structured'}:${lesson.content_id}:lesson_opened:${location.key}`
    )
    void recordEvent('lesson_opened', {}, { actionId })
  }, [lesson?.content_id, lesson?.content_revision, lesson?.is_bundled,
    location.key, recordEvent, role, user?.id])

  useEffect(() => {
    if (!lesson?.content_revision || role !== 'student' || !user?.id) return
    let cancelled = false
    supabase
      .from('student_lesson_progress')
      .select('completed_section_ids')
      .eq('source_code', lesson.is_bundled ? 'bundled_lesson_activity' : 'structured_lesson_activity')
      .eq('content_id', lesson.content_id)
      .eq('content_revision', lesson.content_revision)
      .maybeSingle()
      .then(({ data }) => {
        if (!cancelled && Array.isArray(data?.completed_section_ids)) {
          setCompletedSections(new Set(data.completed_section_ids))
        }
      })
    return () => { cancelled = true }
  }, [lesson?.content_id, lesson?.content_revision, lesson?.is_bundled, role, user?.id])

  const narrationSections = useMemo(
    () =>
      document.sections
        .map((section) => ({
          id: section.id,
          title: section.title,
          script: section.blocks.find((block) => block.type === 'audio_script')?.body ?? '',
        }))
        .filter((section) => section.script),
    [document]
  )
  const narrationItems = useMemo(() => buildNarrationItems(document, lesson?.slug), [document, lesson?.slug])
  const isNarrationPilot = narrationItems.length > 0

  // Anlatım yeni bir parçaya geçtiğinde konuşulan yer ekrana getirilir.
  // Öğrenci elle kaydırdıysa bu, onu her saniye geri çekmez: etki yalnızca
  // hedef blok DEĞİŞTİĞİNDE çalışır.
  useEffect(() => {
    const targetBlockId = activeNarration?.targetBlockId
    if (!targetBlockId) return
    window.document.getElementById(`lesson-block-${targetBlockId}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [activeNarration?.targetBlockId])

  const openFigureVoice = useCallback(
    async (block) => {
      if (!lesson?.is_bundled) void recordEvent('visual_audio_clicked', { blockId: block.id })
      const asset = findAudio(audioAssets, { scope: 'visual', blockId: block.id })
      const url = asset ? await signedAudioUrl(asset.storage_path) : null
      setVoicePanel({
        kind: 'figure',
        title: block.title || 'Görseli Hocayla İncele',
        script: block.audio_script,
        audioUrl: url,
        durationSeconds: asset?.duration_seconds ?? null,
      })
    },
    [audioAssets, lesson?.is_bundled, recordEvent]
  )

  const openLessonVoice = useCallback(async () => {
    if (isNarrationPilot) {
      setNarrationOpen((open) => !open)
      return
    }
    const asset = findAudio(audioAssets, { scope: 'master' })
    const url = asset ? await signedAudioUrl(asset.storage_path) : null
    setVoicePanel({
      kind: 'lesson',
      title: 'Hocayla Çalış',
      sections: narrationSections,
      audioUrl: url,
      durationSeconds: asset?.duration_seconds ?? null,
    })
  }, [audioAssets, isNarrationPilot, narrationSections])

  function handleInteraction(result) {
    const sectionId = document.sections.find((section) =>
      section.blocks.some((block) => block.id === result?.blockId))?.id
    if (result?.kind === 'quiz') {
      void recordEvent('quiz_answered', {
        blockId: result.blockId,
        sectionId,
        selectedOptionId: result.selectedOptionId,
      })
    } else if (result?.kind === 'osym_simulation') {
      void recordEvent('osym_simulation_answered', {
        blockId: result.blockId,
        sectionId,
        selectedOptionId: result.selectedOptionId,
      })
    }
  }

  function completeSection(sectionId) {
    const next = new Set(completedSections)
    const wasComplete = next.size === document.sections.length
    next.add(sectionId)
    setCompletedSections(next)
    const type = lesson.is_bundled ? 'bundled_lesson_progress' : 'structured_lesson_progress'
    const progressPayload = lesson.is_bundled
      ? {
          content_id: lesson.content_id,
          content_revision: lesson.content_revision,
          section_id: sectionId,
          completed_section_ids: [...next],
        }
      : {
          lesson_id: lesson.id,
          content_revision: lesson.content_revision,
          section_id: sectionId,
          completed_section_ids: [...next],
        }
    void perform(type, progressPayload, { actionId: createClientActionId() })
    if (!wasComplete && next.size === document.sections.length) {
      const actionId = sessionActionId(
        `${user?.id}:${lesson.is_bundled ? 'bundled' : 'structured'}:${lesson.content_id}:lesson_completed:${location.key}`
      )
      void recordEvent('lesson_completed', {}, { actionId })
    }
  }

  if (loading) return <PageLoader label="Ders açılıyor…" />

  if (error || !lesson) {
    return (
      <AppShell title="Ders Notu" width="narrow">
        <EmptyState
          icon={BookOpen}
          title="Ders notu açılamadı"
          description={error ?? 'Tekrar deneyin.'}
          action={<Button onClick={() => navigate('/kutuphane/notlar')}>Not Kütüphanesi'ne dön</Button>}
        />
      </AppShell>
    )
  }

  const topic = lesson.library_topics
  const subject = topic?.library_subjects
  const topicLibraryPath = subject && topic
    ? libraryPath('notes', { examType: subject.exam_type, subject, topic })
    : '/kutuphane/notlar'
  const returnTo = libraryReturnPath('notes', location.state?.returnTo, topicLibraryPath)

  return (
    <AppShell
      title="Ders Notu"
      subtitle={subject ? `${subject.name} · ${subject.exam_type}` : 'DrKoç ders materyali'}
      headerAction={<LibraryReturnButton kind="notes" onClick={() => navigate(returnTo)} />}
    >
      <ReadingProgress targetRef={articleRef} />
      <div className="flex min-h-8 justify-end py-1">
        <SaveStatus status={saveStatus} onRetry={flush} />
      </div>

      {lesson.is_visual_preview ? (
        <p className="mx-auto mb-4 max-w-3xl rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-900" role="status">
          Yapılandırılmış ders görsel doğrulama örneği; canlı veritabanı okunmaz ve kayıt yazılmaz.
        </p>
      ) : null}

      <article ref={articleRef}>
        <LessonMasthead
          lesson={lesson}
          document={document}
          subjectName={subject?.name}
          examType={subject?.exam_type}
          topicName={topic?.name}
          hasNarration={isNarrationPilot || narrationSections.length > 0 || Boolean(findAudio(audioAssets, { scope: 'master' }))}
          narrationReady={isNarrationPilot || Boolean(findAudio(audioAssets, { scope: 'master' }))}
          onStartVoice={openLessonVoice}
        />

        {isNarrationPilot && narrationOpen && (
          <LessonNarrationPlayer
            key={lesson.slug}
            lessonSlug={lesson.slug}
            items={narrationItems}
            onActiveBlockChange={setActiveNarration}
            onClose={() => setNarrationOpen(false)}
          />
        )}

        <LessonDocument
          document={document}
          overlay={overlay}
          completedSections={completedSections}
          onSectionComplete={completeSection}
          onExplainFigure={openFigureVoice}
          onInteraction={handleInteraction}
          activeNarrationBlockIds={activeNarration?.highlightBlockIds ?? []}
        />
        
      </article>

      <Modal
        open={Boolean(voicePanel)}
        onClose={() => setVoicePanel(null)}
        title={voicePanel?.title ?? ''}
        maxWidth="max-w-2xl"
      >
        {voicePanel?.kind === 'lesson' ? (
          <div className="flex flex-col gap-6">
            <TeacherVoice
              script=""
              audioUrl={voicePanel.audioUrl}
              durationSeconds={voicePanel.durationSeconds}
              onAudioStart={!lesson.is_bundled ? () => void recordEvent('audio_started') : undefined}
              onAudioComplete={!lesson.is_bundled ? () => void recordEvent('audio_completed') : undefined}
            />
            {voicePanel.sections?.length ? (
              voicePanel.sections.map((section) => (
                <section key={section.id}>
                  <p className="lesson-eyebrow m-0">{section.title}</p>
                  <div className="mt-2">
                    <TeacherVoice script={section.script} compact />
                  </div>
                </section>
              ))
            ) : (
              <p className="m-0 text-[0.9375rem] leading-relaxed text-ink/60">
                Bu ders için öğretmen anlatımı henüz hazırlanmadı. Notu okumaya devam edebilirsin.
              </p>
            )}
          </div>
        ) : (
          <TeacherVoice
            script={voicePanel?.script}
            audioUrl={voicePanel?.audioUrl}
            durationSeconds={voicePanel?.durationSeconds}
          />
        )}
      </Modal>
    </AppShell>
  )
}

/**
 * OKUMA İLERLEMESİ
 *
 * Bölüm sayacı yerine gerçek okuma ilerlemesi gösterilir; uzun bir belgede
 * öğrencinin "ne kadar kaldı?" sorusunu cevaplayan şey budur. Görsel
 * olarak tek bir saç teli çizgidir — üstte duran bir kart değil (§11).
 */
function ReadingProgress({ targetRef }) {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    function update() {
      const node = targetRef.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) {
        setPercent(100)
        return
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      setPercent(Math.round((scrolled / total) * 100))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [targetRef])

  return (
    <div
      className="sticky top-[calc(var(--app-header-height)+0.25rem)] z-20 h-0.5 w-full rounded-full bg-line"
      role="progressbar"
      aria-label="Ders okuma ilerlemesi"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="h-0.5 rounded-full bg-brand-500 transition-[width] duration-150" style={{ width: `${percent}%` }} />
    </div>
  )
}
