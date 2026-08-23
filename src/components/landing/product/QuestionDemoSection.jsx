import { useState } from 'react'
import { RotateCcw, Sparkles } from 'lucide-react'
import QuestionCard from '../../tests/QuestionCard'

const DEMO_QUESTION = {
  id: 'landing-demo-ph',
  questionText: 'pH değeri 3 olan bir çözeltinin pH değeri 5 olan çözeltiye göre H⁺ derişimi kaç kattır?',
  options: [
    { id: 'A', text: '2 kat' },
    { id: 'B', text: '10 kat' },
    { id: 'C', text: '100 kat' },
    { id: 'D', text: '1.000 kat' },
  ],
}

const CORRECT_OPTION = 'C'
const EXPLANATION = 'pH ölçeği logaritmiktir. İki pH birimlik fark, H⁺ derişiminde 10² yani 100 katlık fark oluşturur.'

export default function QuestionDemoSection() {
  const [selectedOption, setSelectedOption] = useState(null)
  const answered = selectedOption !== null
  const correct = selectedOption === CORRECT_OPTION

  return (
    <section id="sorular" className="scroll-mt-20 py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-600">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Sorular
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.04] text-ink sm:text-6xl">
              Okuduğunu,
              <span className="block text-ink/40">bildiğine dönüştür.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink/60 sm:text-lg sm:leading-8">
              Soru yalnızca sonucu söylemez. Seçimini değerlendirir, doğru düşünme yolunu açıklar ve konuyu yerine oturtur.
            </p>

            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-line">
              <span className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ${answered ? (correct ? 'bg-success-500' : 'bg-danger-500') : 'bg-brand-500 motion-safe:animate-pulse-soft'}`} />
              <div>
                <p className="text-sm font-bold text-ink">
                  {answered ? (correct ? 'Harika, doğru düşündün.' : 'Yaklaştın; çözüm yoluna birlikte bakalım.') : 'Şimdi sen dene.'}
                </p>
                <p className="mt-1 text-xs leading-5 text-ink/55">
                  Bu tanıtım sorusu hesabına, ilerlemene veya veritabanına kaydedilmez.
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0 rounded-panel bg-surface-sunken/80 p-2.5 ring-1 ring-line sm:p-4">
            <QuestionCard
              question={DEMO_QUESTION}
              index={0}
              selectedOptionId={selectedOption}
              onSelectOption={setSelectedOption}
              showCorrect={answered}
              correctOptionId={CORRECT_OPTION}
              explanation={EXPLANATION}
            />
            {answered && (
              <div className="flex justify-end px-2 pb-2 pt-3">
                <button
                  type="button"
                  onClick={() => setSelectedOption(null)}
                  className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-xl px-3 text-xs font-bold text-brand-700 transition-[background-color,transform] duration-200 hover:bg-brand-500/10 active:scale-[0.98] motion-reduce:transform-none"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  Yeniden dene
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
