import { BookOpenCheck, CalendarRange } from 'lucide-react'
import { GRADE_COLLECTIONS } from '../../data/highSchoolCurriculum'

function CategoryCard({ title, hint, meta, Icon, tone, onClick }) {
  const accent = tone === 'accent'
  return (
    <button
      type="button"
      onClick={onClick}
      className="card-interactive focus-ring group flex min-h-44 min-w-0 flex-col p-5 text-left"
    >
      <span
        className={
          accent
            ? 'mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white'
            : 'mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white'
        }
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="font-display font-bold leading-6 text-ink">{title}</span>
      <span className="mt-1 text-xs leading-5 text-ink/55">{hint}</span>
      <span className="mt-auto pt-4 text-2xs font-semibold text-ink/55">{meta}</span>
    </button>
  )
}

export default function LibraryCategorySelector({ examTypes, statsForKey, onSelect, tone = 'brand' }) {
  return (
    <div className="space-y-8">
      <section aria-labelledby={`exam-libraries-${tone}`}>
        <div className="mb-3 flex items-center gap-2">
          <BookOpenCheck className={tone === 'accent' ? 'h-5 w-5 text-accent' : 'h-5 w-5 text-brand-600'} aria-hidden="true" />
          <div>
            <h2 id={`exam-libraries-${tone}`} className="font-display text-lg font-bold text-ink">Sınava hazırlanıyorum</h2>
            <p className="text-xs leading-5 text-ink/55">Sınav türüne göre ders ve konular</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {examTypes.map(({ key, label = key, hint, icon: Icon }) => {
            const stats = statsForKey(key)
            return (
              <CategoryCard
                key={key}
                title={label}
                hint={hint}
                meta={`${stats.subjects} ders · ${stats.topics} konu${stats.items ? ` · ${stats.items} içerik` : ''}`}
                Icon={Icon}
                tone={tone}
                onClick={() => onSelect(key)}
              />
            )
          })}
        </div>
      </section>

      <section aria-labelledby={`grade-libraries-${tone}`}>
        <div className="mb-3 flex items-center gap-2">
          <CalendarRange className={tone === 'accent' ? 'h-5 w-5 text-accent' : 'h-5 w-5 text-brand-600'} aria-hidden="true" />
          <div>
            <h2 id={`grade-libraries-${tone}`} className="font-display text-lg font-bold text-ink">Sınıf derslerime çalışıyorum</h2>
            <p className="text-xs leading-5 text-ink/55">9–12. sınıf MEB programına göre</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {GRADE_COLLECTIONS.map((collection) => {
            const stats = statsForKey(collection.key)
            return (
              <CategoryCard
                key={collection.key}
                title={collection.label}
                hint="Ders, ünite ve tema başlıkları"
                meta={`${stats.subjects} ders · ${stats.topics} konu${stats.items ? ` · ${stats.items} içerik` : ''}`}
                Icon={CalendarRange}
                tone={tone}
                onClick={() => onSelect(collection.key)}
              />
            )
          })}
        </div>
        <p className="mt-3 text-2xs leading-5 text-ink/45">
          Kaynak: MEB Türkiye Yüzyılı Maarif Modeli · 2026 resmî öğretim programları
        </p>
      </section>
    </div>
  )
}
