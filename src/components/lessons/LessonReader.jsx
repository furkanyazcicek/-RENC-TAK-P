import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import { useAuth } from '../../context/AuthContext'
import { normalizeLessonDocument } from '../../lib/lesson/schema'
import { buildPersonalization } from '../../lib/lesson/personalize'
import { findAudio, loadLessonAudio, signedAudioUrl } from '../../lib/lessonAudio'
import { lessonBySlug } from '../../content/lessons'
import LessonDocument from './reader/LessonDocument'
import LessonMasthead from './reader/LessonMasthead'
import TeacherVoice from './reader/TeacherVoice'
import { AppShell, Button, EmptyState, Modal, PageLoader } from '../ui'

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

  const [lesson, setLesson] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [overlay, setOverlay] = useState(null)
  const [audioAssets, setAudioAssets] = useState([])
  const [completedSections, setCompletedSections] = useState(() => new Set())
  const [voicePanel, setVoicePanel] = useState(null)

  const articleRef = useRef(null)

  /* ---------------- Master içerik ---------------- */
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    const bundledSource = lessonId?.startsWith('bundled-')
      ? lessonBySlug(lessonId.slice('bundled-'.length))
      : null

    if (bundledSource) {
      setLesson({
        id: lessonId,
        title: bundledSource.title,
        subtitle: bundledSource.subtitle,
        document: bundledSource.document,
        status: 'published',
        learning_mode: bundledSource.learningMode ?? 'interactive',
        part_label: bundledSource.partLabel ?? null,
        is_gold_standard: Boolean(bundledSource.goldStandard),
        is_bundled: true,
        library_topics: {
          name: bundledSource.placement.topic,
          library_subjects: {
            name: bundledSource.placement.subject,
            exam_type: bundledSource.placement.examType,
          },
        },
      })
      setLoading(false)
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
        setLesson(data)
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [lessonId])

  /* ---------------- Yan katmanlar (okumayı bekletmez) ---------------- */
  useEffect(() => {
    if (!lesson?.id || lesson.is_bundled) return

    // Telemetri asla notu açmayı engellemez.
    if (role === 'student' && user?.id) {
      void supabase.from('lesson_activity_events').insert({
        lesson_id: lesson.id,
        student_id: user.id,
        event_name: 'lesson_opened',
      })
    }

    void loadLessonAudio(lesson.id).then(setAudioAssets)
  }, [lesson?.id, lesson?.is_bundled, role, user?.id])

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

  const recordEvent = useCallback(
    (eventName, payload = {}) => {
      if (role !== 'student' || !user?.id || !lesson?.id || lesson.is_bundled) return
      void supabase.from('lesson_activity_events').insert({
        lesson_id: lesson.id,
        student_id: user.id,
        event_name: eventName,
        block_id: payload.blockId ?? null,
        metadata: payload.metadata ?? null,
      })
    },
    [lesson?.id, lesson?.is_bundled, role, user?.id]
  )

  const openFigureVoice = useCallback(
    async (block) => {
      recordEvent('visual_audio_clicked', { blockId: block.id })
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
    [audioAssets, recordEvent]
  )

  const openLessonVoice = useCallback(async () => {
    recordEvent('audio_started')
    const asset = findAudio(audioAssets, { scope: 'master' })
    const url = asset ? await signedAudioUrl(asset.storage_path) : null
    setVoicePanel({
      kind: 'lesson',
      title: 'Hocayla Çalış',
      sections: narrationSections,
      audioUrl: url,
      durationSeconds: asset?.duration_seconds ?? null,
    })
  }, [audioAssets, narrationSections, recordEvent])

  function handleInteraction(result) {
    if (result?.kind === 'quiz') {
      recordEvent('quiz_answered', { blockId: result.blockId, metadata: { correct: result.correct } })
    } else if (result?.kind === 'osym_simulation') {
      recordEvent('osym_simulation_answered', { blockId: result.blockId, metadata: { correct: result.correct } })
    }
  }

  function completeSection(sectionId) {
    setCompletedSections((previous) => {
      const next = new Set(previous)
      next.add(sectionId)
      if (next.size === document.sections.length) recordEvent('lesson_completed')
      return next
    })
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

  return (
    <AppShell title="Ders Notu" subtitle={subject ? `${subject.name} · ${subject.exam_type}` : 'DrKoç ders materyali'}>
      <Button variant="ghost" size="sm" icon={ArrowLeft} className="w-fit" onClick={() => navigate('/kutuphane/notlar')}>
        Not Kütüphanesi'ne dön
      </Button>

      <ReadingProgress targetRef={articleRef} />

      <article ref={articleRef}>
        <LessonMasthead
          lesson={lesson}
          document={document}
          subjectName={subject?.name}
          examType={subject?.exam_type}
          topicName={topic?.name}
          hasNarration={narrationSections.length > 0 || Boolean(findAudio(audioAssets, { scope: 'master' }))}
          narrationReady={Boolean(findAudio(audioAssets, { scope: 'master' }))}
          onStartVoice={openLessonVoice}
        />

        <LessonDocument
          document={document}
          overlay={overlay}
          completedSections={completedSections}
          onSectionComplete={completeSection}
          onExplainFigure={openFigureVoice}
          onInteraction={handleInteraction}
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
            <TeacherVoice script="" audioUrl={voicePanel.audioUrl} durationSeconds={voicePanel.durationSeconds} />
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
