import { BookOpen, Clock3, Layers, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { normalizeLessonDocument } from '../../lib/lesson/schema'
import { Badge } from '../ui'

export default function StructuredLessonCard({ lesson, canManage, onEdit }) {
  const document = normalizeLessonDocument(lesson.document)
  const foundation = lesson.learning_mode === 'foundation'
  return (
    <article className="card-interactive group flex min-h-52 flex-col overflow-hidden">
      <Link to={`/kutuphane/notlar/ders/${lesson.id}`} className="focus-ring flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <span className={`grid h-11 w-11 place-items-center rounded-xl ring-1 ring-inset ${foundation ? 'bg-aqua-50 text-aqua-700 ring-aqua-500/10' : 'bg-brand-50 text-brand-600 ring-brand-500/10'}`}>
            {foundation ? <Layers className="h-5 w-5" aria-hidden="true" /> : <BookOpen className="h-5 w-5" aria-hidden="true" />}
          </span>
          <div className="flex flex-wrap justify-end gap-1">
            {lesson.is_gold_standard && <Badge tone="warning" size="sm" icon={Sparkles}>Referans</Badge>}
            <Badge tone={foundation ? 'info' : 'brand'} size="sm">{foundation ? 'Temel öğrenme' : 'Etkileşimli not'}</Badge>
            {canManage && lesson.status !== 'published' && <Badge tone="warning" size="sm">Taslak</Badge>}
          </div>
        </div>
        {lesson.part_label && (
          <p className="mt-4 text-2xs font-bold uppercase tracking-wider text-brand-600">{lesson.part_label}</p>
        )}
        <h4 className={`font-display text-lg font-bold leading-snug text-ink ${lesson.part_label ? 'mt-1' : 'mt-4'}`}>
          {lesson.title}
        </h4>
        <p className="mt-1 line-clamp-3 text-sm leading-6 text-ink/60">{lesson.subtitle || (foundation ? 'Konuya sıfırdan hazırlayan temel öğrenme notu.' : 'Öğretmen kalitesinde, etkileşimli ders notu.')}</p>
        <div className="mt-auto flex items-center gap-3 pt-4 text-2xs font-semibold text-ink/55">
          <span>{document.sections.length} bölüm</span>
          <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> {document.estimated_minutes} dk</span>
        </div>
      </Link>
      {canManage && (
        <div className="border-t border-line bg-surface-muted px-4 py-2.5">
          <button type="button" className="focus-ring rounded text-xs font-bold text-brand-700 hover:text-brand-800" onClick={() => onEdit?.(lesson)}>
            Dersi düzenle
          </button>
        </div>
      )}
    </article>
  )
}
