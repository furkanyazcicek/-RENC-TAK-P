import { BarChart3, Bot, CircleAlert, Target, TrendingUp } from 'lucide-react'
import { DashboardHero, ExamAccordion, Panel, SubjectBars } from '../../components/dashboard'
import { Badge, SoftIcon } from '../../components/ui'
import {
  EXPERIENCE_AI_SOLVES,
  EXPERIENCE_EXAMS,
  EXPERIENCE_PROBLEMS,
  EXPERIENCE_SUBJECTS,
} from './experienceData'
import { MonthlyProgress } from './ExperienceDashboard'

export default function ExperienceAnalytics() {
  return (
    <>
      <DashboardHero
        asPageHeader
        eyebrow="Öğrenme Analizi"
        title="Beş ayda 19,25 netlik gelişim"
        subtitle="Deniz’in Mayıs başlangıç denemesinden Eylül denemesine kadar oluşan sentetik çalışma örüntüsü. Rakamlar yalnız ürün deneyimini göstermek için hazırlanmıştır."
        badge={{ label: 'Mayıs—Eylül 2026', tone: 'glass' }}
        highlights={[
          { label: 'son TYT neti', value: '72,5' },
          { label: 'net artışı', value: '+19,25' },
          { label: 'güncel isabet', value: '%76' },
        ]}
      />

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(18rem,.85fr)]">
        <Panel title="Soru ve doğruluk eğrisi" description="Aylık soru sayısı ile isabet oranı birlikte" icon={TrendingUp} iconTone="#7667A8">
          <MonthlyProgress />
        </Panel>
        <Panel title="Ders bazlı isabet" description="Beş aylık toplam çözüm üzerinden" icon={Target} iconTone="#438F91">
          <SubjectBars data={EXPERIENCE_SUBJECTS} />
        </Panel>
      </section>

      <Panel title="Deneme gelişimi" description="Satıra dokunarak ders bazlı netleri açabilirsin" icon={BarChart3} iconTone="#B5813E" padding={false} footnote="Net = doğru − yanlış / 4. Bu sonuçların tamamı sentetik örnek veridir.">
        <div className="p-4 sm:p-6">
          <ExamAccordion rows={EXPERIENCE_EXAMS} />
        </div>
      </Panel>

      <section className="grid gap-5 xl:grid-cols-2">
        <Panel title="Sorunlu soru haritası" description="Tekrar kararı verilen beş kayıt" icon={CircleAlert} iconTone="#B5813E" padding={false}>
          <ul className="divide-y divide-line">
            {EXPERIENCE_PROBLEMS.map((item) => (
              <li key={item.id} className="flex items-start gap-3 px-5 py-4 sm:px-6">
                <SoftIcon icon={CircleAlert} tone={item.attempts >= 3 ? 'amber' : 'slate'} size="sm" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-ink">{item.topic}</p>
                      <p className="mt-0.5 text-xs font-bold text-ink/48">{item.subject}</p>
                    </div>
                    <Badge tone={item.attempts >= 3 ? 'warning' : 'neutral'} size="sm">{item.attempts} deneme</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ink/62">{item.note}</p>
                  <p className="mt-2 text-[11px] font-extrabold uppercase tracking-wide text-brand-700">{item.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="AI çözüm geçmişi" description="Farklı derslerden son örnek oturumlar" icon={Bot} iconTone="#5E88A7" padding={false}>
          <ul className="divide-y divide-line">
            {EXPERIENCE_AI_SOLVES.map((item, index) => (
              <li key={item.id} className="px-5 py-5 sm:px-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-info-50 text-xs font-extrabold text-info-700">{index + 1}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-semibold text-ink">{item.topic}</p>
                      <span className="text-[11px] tabular text-ink/45">{item.date} · {item.duration}</span>
                    </div>
                    <p className="mt-1 text-xs text-ink/55">{item.subject}</p>
                    <p className="mt-2 text-sm leading-5 text-ink/68">{item.result}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </section>
    </>
  )
}
