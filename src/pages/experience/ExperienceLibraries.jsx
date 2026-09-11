import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpenCheck,
  BookOpenText,
  CheckSquare2,
  Clock3,
  FlaskConical,
  Languages,
  TestTube2,
} from 'lucide-react'
import { DashboardHero, Panel } from '../../components/dashboard'
import { SoftIcon } from '../../components/ui'
import { EXPERIENCE_CONTENT } from './experienceData'

function SubjectMark({ subject }) {
  const chemistry = subject === 'Kimya'
  return <SoftIcon icon={chemistry ? FlaskConical : Languages} tone={chemistry ? 'aqua' : 'peach'} size="lg" />
}

function ContentCard({ item, kind }) {
  const isLesson = kind === 'lesson'
  const to = isLesson ? `/deneyim/konu/${item.id}` : `/deneyim/test/${item.id}`
  const detail = isLesson
    ? `${item.lessonMinutes} dk · Etkileşimli konu anlatımı`
    : `${item.questionCount} soru · ${item.test?.title ?? 'Kavrama testi'}`

  return (
    <Link
      to={to}
      className="card-interactive focus-ring group flex min-h-60 flex-col p-5 sm:p-6"
      aria-label={`${item.subjectCode}, ${item.topic}: ${isLesson ? 'konu anlatımını aç' : 'testi başlat'}`}
    >
      <SubjectMark subject={item.subject} />
      <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-ink/46">{item.subjectCode}</p>
      <h3 className="mt-1 font-display text-xl font-extrabold leading-7 text-ink">{item.topic}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/60">{isLesson ? item.lessonTitle : item.test?.description}</p>
      <div className="mt-auto flex items-end justify-between gap-3 pt-6">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-ink/48">
          {isLesson ? <Clock3 className="h-3.5 w-3.5" /> : <CheckSquare2 className="h-3.5 w-3.5" />}
          {detail}
        </span>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-hover:translate-x-1 group-hover:bg-brand-100 motion-reduce:transform-none">
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

function LibraryPage({ kind }) {
  const isLesson = kind === 'lesson'
  const grouped = ['Türkçe', 'Kimya'].map((subject) => ({
    subject,
    items: EXPERIENCE_CONTENT.filter((item) => item.subject === subject),
  }))

  return (
    <>
      <DashboardHero
        asPageHeader
        eyebrow={`Ders Kütüphanesi / ${isLesson ? 'Konular' : 'Sorular'}`}
        title={isLesson ? 'Dört konu hazır' : 'Dört test hazır'}
        badge={{ label: 'TYT · 2 ders · 4 konu', tone: 'glass' }}
        highlights={[
          { label: isLesson ? 'açık konu' : 'açık test', value: '4' },
          { label: 'Türkçe konusu', value: '2' },
          { label: 'Kimya konusu', value: '2' },
        ]}
      />

      <div className="flex justify-end">
        <Link
          to={isLesson ? '/deneyim/soru-kutuphanesi' : '/deneyim/konu-kutuphanesi'}
          className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-btn px-3 text-sm font-extrabold text-brand-700 hover:bg-brand-50"
        >
          {isLesson ? <TestTube2 className="h-4 w-4" /> : <BookOpenText className="h-4 w-4" />}
          {isLesson ? 'Sorulara geç' : 'Konulara geç'}
        </Link>
      </div>

      {grouped.map(({ subject, items }) => (
        <Panel
          key={subject}
          title={`TYT ${subject}`}
          description={`İlk 2 konu · her konuda ${isLesson ? '1 anlatım' : '1 test'}`}
          icon={subject === 'Kimya' ? FlaskConical : isLesson ? BookOpenCheck : TestTube2}
          iconTone={subject === 'Kimya' ? '#438F91' : '#BB7168'}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item) => <ContentCard key={item.id} item={item} kind={kind} />)}
          </div>
        </Panel>
      ))}
    </>
  )
}

export function ExperienceTopicLibrary() {
  return <LibraryPage kind="lesson" />
}

export function ExperienceQuestionLibrary() {
  return <LibraryPage kind="test" />
}
