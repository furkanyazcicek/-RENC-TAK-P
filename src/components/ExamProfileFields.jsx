import { cn } from '../lib/cn'
import {
  defaultExamYear,
  estimateExamDate,
  GRADES,
  suggestForGrade,
  TARGET_EXAMS,
} from '../lib/examProfile'
import { Field, Select, Input } from './ui'

/**
 * ExamProfileFields — "hangi sınava hazırlanıyorsun" alanları.
 *
 * Üç yerde birden kullanılır: kayıt formu, Anasayfa'daki tek seferlik
 * anket ve Profil sayfası. Alanları tek bileşende toplamanın sebebi,
 * aralarındaki TÜREME KURALLARININ tek yerde durması:
 *
 *   sınıf değişti      → hedef sınav + sınav senesi mi yeniden önerilir
 *   sınav senesi/hedef → sınav yılı yeniden hesaplanır
 *
 * Bu kurallar üç ayrı sayfaya kopyalansaydı, birinde düzeltilen bir hata
 * diğer ikisinde kalırdı. Bileşen kontrollüdür: durumu çağıran tutar,
 * burada yalnızca kurallar işletilir.
 *
 *   <ExamProfileFields value={form} onChange={setForm} />
 *
 * value: { grade, target_exam, is_exam_year, exam_year, exam_date }
 */
export default function ExamProfileFields({
  value,
  onChange,
  showExamDate = false,
  className,
}) {
  const v = value ?? {}

  function patch(next) {
    onChange({ ...v, ...next })
  }

  function handleGrade(raw) {
    const grade = raw ? Number(raw) : null
    if (!grade) {
      patch({ grade: null })
      return
    }
    const { targetExam, isExamYear } = suggestForGrade(grade)
    patch({
      grade,
      target_exam: targetExam,
      is_exam_year: isExamYear,
      exam_year: defaultExamYear(grade, targetExam, isExamYear),
    })
  }

  function handleExamYearMode(isExamYear) {
    patch({
      is_exam_year: isExamYear,
      exam_year: defaultExamYear(v.grade, v.target_exam, isExamYear),
    })
  }

  function handleTargetExam(targetExam) {
    patch({
      target_exam: targetExam,
      exam_year:
        targetExam === 'YOK'
          ? null
          : defaultExamYear(v.grade, targetExam, v.is_exam_year),
    })
  }

  // Sınav yılı seçenekleri: bu yıldan başlayarak beş yıl. Ara sınıf bir
  // öğrenci için hesaplanan yıl listenin dışında kalabilir; o yüzden
  // hesaplanan değer her zaman listeye katılır.
  const thisYear = new Date().getFullYear()
  const yearOptions = Array.from(new Set([...Array(5).keys()].map((i) => thisYear + i).concat(
    v.exam_year ? [Number(v.exam_year)] : []
  ))).sort((a, b) => a - b)

  const noExam = v.target_exam === 'YOK'
  const estimated = !noExam && v.target_exam && v.exam_year
    ? estimateExamDate(v.target_exam, v.exam_year)
    : null

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Field label="Kaçıncı sınıftasın?" required>
        {({ id }) => (
          <Select
            id={id}
            value={v.grade ?? ''}
            onChange={(e) => handleGrade(e.target.value)}
          >
            <option value="">— Sınıf seç —</option>
            {GRADES.map((g) => (
              <option key={g.value} value={g.value}>
                {g.label}
              </option>
            ))}
          </Select>
        )}
      </Field>

      <Field
        label="Bu yıl sınava giriyor musun?"
        hint="Ara sınıftaysan geri sayım yine çalışır, sadece hedef yılın ileri alınır."
        required
      >
        <div className="mt-1 grid grid-cols-2 gap-2">
          {[
            { value: true, label: 'Sınav senesindeyim', hint: 'Bu yıl gireceğim' },
            { value: false, label: 'Ara sınıftayım', hint: 'Sonraki yıllarda' },
          ].map((opt) => {
            const active = v.is_exam_year === opt.value
            return (
              <button
                key={String(opt.value)}
                type="button"
                onClick={() => handleExamYearMode(opt.value)}
                aria-pressed={active}
                className={cn(
                  'focus-ring rounded-card border px-3 py-2.5 text-left transition-all duration-200 ease-smooth',
                  active
                    ? 'border-brand-300 bg-aurora-soft shadow-[inset_0_0_0_1px_rgb(var(--c-brand-500)/0.15)]'
                    : 'border-line bg-surface hover:border-brand-200 hover:bg-brand-50/40'
                )}
              >
                <span
                  className={cn(
                    'block text-sm font-semibold',
                    active ? 'text-brand-700' : 'text-ink'
                  )}
                >
                  {opt.label}
                </span>
                <span className="mt-0.5 block text-xs text-ink/60">{opt.hint}</span>
              </button>
            )
          })}
        </div>
      </Field>

      <Field label="Hangi sınava hazırlanıyorsun?" required>
        {({ id }) => (
          <Select
            id={id}
            value={v.target_exam ?? ''}
            onChange={(e) => handleTargetExam(e.target.value)}
          >
            <option value="">— Sınav seç —</option>
            {TARGET_EXAMS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.hint ? `${t.label} — ${t.hint}` : t.label}
              </option>
            ))}
          </Select>
        )}
      </Field>

      {!noExam && v.target_exam && (
        <Field
          label="Sınava gireceğin yıl"
          hint={
            estimated
              ? `Tahmini sınav tarihi: ${estimated.toLocaleDateString('tr-TR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}. Kesin tarih açıklandığında güncelleyebilirsin.`
              : undefined
          }
          required
        >
          {({ id }) => (
            <Select
              id={id}
              value={v.exam_year ?? ''}
              onChange={(e) => patch({ exam_year: e.target.value ? Number(e.target.value) : null })}
            >
              <option value="">— Yıl seç —</option>
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </Select>
          )}
        </Field>
      )}

      {showExamDate && !noExam && v.target_exam && (
        <Field
          label="Kesin sınav tarihi (opsiyonel)"
          hint="ÖSYM tarihi açıkladıysa buraya yaz — geri sayım tahmin yerine bu tarihi kullanır."
        >
          {({ id }) => (
            <Input
              id={id}
              type="date"
              value={v.exam_date ?? ''}
              onChange={(e) => patch({ exam_date: e.target.value || null })}
            />
          )}
        </Field>
      )}
    </div>
  )
}
