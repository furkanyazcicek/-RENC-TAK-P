import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpenText, Clock3, TestTube2 } from 'lucide-react'
import LessonDocument from '../../components/lessons/reader/LessonDocument'
import TeacherVoice from '../../components/lessons/reader/TeacherVoice'
import { Badge, Button, EmptyState, Modal, PageLoader } from '../../components/ui'
import { normalizeLessonDocument } from '../../lib/lesson/schema'
import { experienceContentById, loadExperienceLesson } from './experienceData'

export default function ExperienceLesson() {
  const { contentId } = useParams()
  const content = experienceContentById(contentId)
  const [state, setState] = useState({ status: 'loading', lesson: null })
  const [voicePanel, setVoicePanel] = useState(null)

  useEffect(() => {
    let cancelled = false
    setState({ status: 'loading', lesson: null })
    window.scrollTo({ top: 0, behavior: 'instant' })

    loadExperienceLesson(contentId)
      .then((lesson) => {
        if (!cancelled) setState({ status: lesson ? 'ready' : 'missing', lesson })
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error', lesson: null })
      })

    return () => { cancelled = true }
  }, [contentId])

  const document = useMemo(
    () => normalizeLessonDocument(state.lesson?.document),
    [state.lesson?.document]
  )

  if (state.status === 'loading') return <PageLoader label="Konu açılıyor…" />

  if (!content || !state.lesson) {
    return (
      <EmptyState
        icon={BookOpenText}
        title="Bu konu bulunamadı"
        description="Konu kütüphanesindeki dört hazır dersten birini açabilirsin."
        action={<Button as={Link} to="/deneyim/konu-kutuphanesi">Konu kütüphanesine dön</Button>}
      />
    )
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button as={Link} to="/deneyim/konu-kutuphanesi" variant="ghost" size="sm" icon={ArrowLeft}>Konu kütüphanesine dön</Button>
        <Button as={Link} to={`/deneyim/test/${content.id}`} variant="secondary" size="sm" icon={TestTube2}>Bu konunun testini çöz</Button>
      </div>

      <article>
        <header className="panel-editorial-sheet relative overflow-hidden px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={content.subject === 'Kimya' ? 'aqua' : 'accent'}>{content.subjectCode}</Badge>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink/48"><Clock3 className="h-3.5 w-3.5" /> {document.estimated_minutes} dk</span>
            </div>
            <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.15em] text-brand-700">{content.topic}</p>
            <h1 className="mt-2 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-4xl">{state.lesson.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-ink/62">{state.lesson.subtitle}</p>
          </div>
        </header>

        <div className="mt-6 panel-editorial-sheet px-4 py-8 sm:px-7 sm:py-10 lg:px-10">
          <LessonDocument
            document={document}
            onInteraction={() => {}}
            onExplainFigure={setVoicePanel}
            completedSections={new Set()}
          />
        </div>
      </article>

      <Modal
        open={Boolean(voicePanel)}
        onClose={() => setVoicePanel(null)}
        title={voicePanel?.title || 'Görseli Hocayla İncele'}
        maxWidth="max-w-2xl"
      >
        <TeacherVoice script={voicePanel?.audio_script} />
      </Modal>
    </>
  )
}
