import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Eye, EyeOff, Search } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import MathRenderer, { MathText } from '../components/aiSolve/MathRenderer'
import { AuroraBackground, Button, Input, Select } from '../components/ui'

const TOPICS = [
  ['01_temel_kavramlar_ve_sayi_kumeleri', 'Temel Kavramlar ve Sayı Kümeleri'],
  ['02_sayi_basamaklari', 'Sayı Basamakları'],
  ['03_bolme_bolunebilme_ve_kalan', 'Bölme, Bölünebilme ve Kalan'],
  ['04_asal_sayilar_carpanlar_ve_bolen_sayisi', 'Asal Sayılar, Çarpanlar ve Bölen Sayısı'],
  ['05_ebob_ekok_ve_periyodik_durumlar', 'EBOB, EKOK ve Periyodik Durumlar'],
  ['06_rasyonel_sayilar_ve_ondalik_gosterimler', 'Rasyonel Sayılar ve Ondalık Gösterimler'],
  ['07_denklemler_ve_denklem_sistemleri', 'Denklemler ve Denklem Sistemleri'],
  ['08_esitsizlikler_ve_araliklar', 'Eşitsizlikler ve Aralıklar'],
  ['09_mutlak_deger', 'Mutlak Değer'],
  ['10_uslu_ifadeler_ve_bilimsel_gosterim', 'Üslü İfadeler ve Bilimsel Gösterim'],
  ['11_koklu_ifadeler_ve_irrasyonel_sayilar', 'Köklü İfadeler ve İrrasyonel Sayılar'],
  ['12_ozdeslikler_ve_carpanlara_ayirma', 'Özdeşlikler ve Çarpanlara Ayırma'],
  ['13_oran_oranti_ve_olcek', 'Oran, Orantı ve Ölçek'],
  ['14_problem_modelleme', 'Problem Modelleme'],
  ['15_kumeler', 'Kümeler'],
  ['16_kartezyen_carpim_ve_baginti', 'Kartezyen Çarpım ve Bağıntı'],
  ['17_mantik_ve_algoritmik_akil_yurutme', 'Mantık ve Akıl Yürütme'],
  ['18_fonksiyonlar', 'Fonksiyonlar'],
  ['19_polinomlar_ve_ikinci_dereceye_giris', 'Polinomlar ve İkinci Dereceye Giriş'],
  ['20_sayma_yontemleri_ve_permutasyon', 'Sayma Yöntemleri ve Permütasyon'],
  ['21_kombinasyon', 'Kombinasyon'],
  ['22_olasilik', 'Olasılık'],
  ['23_veri_ve_istatistik', 'Veri ve İstatistik'],
  ['24_geometri_temelleri_ve_acilar', 'Geometri Temelleri ve Açılar'],
  ['25_ucgenler', 'Üçgenler'],
  ['26_ucgende_yardimci_elemanlar_ve_alan', 'Üçgende Yardımcı Elemanlar ve Alan'],
  ['27_eslik_ve_benzerlik', 'Eşlik ve Benzerlik'],
  ['28_cokgenler', 'Çokgenler'],
  ['29_dortgenler', 'Dörtgenler'],
  ['30_cember_ve_daire', 'Çember ve Daire'],
  ['31_analitik_geometri', 'Analitik Geometri'],
  ['32_kati_cisimler', 'Katı Cisimler'],
].map(([slug, label], index) => ({ slug, label, number: index + 1 }))

const TOTAL_TESTS = TOPICS.length * 50
const TOTAL_QUESTIONS = TOTAL_TESTS * 10
const BANK_ROOT = '/TYT_Matematik_Soru_Bankasi'

function clamp(value, min, max) {
  return Math.min(Math.max(Number(value) || min, min), max)
}

function testName(test) {
  return `test_${String(test).padStart(2, '0')}`
}

function parseQuestionFile(source) {
  const chunks = String(source).split(/\n## Soru (\d+)\s*\n/)
  const questions = []

  for (let index = 1; index < chunks.length; index += 2) {
    const number = Number(chunks[index])
    const content = chunks[index + 1] ?? ''
    const id = content.match(/`([^`]+)`/)?.[1] ?? `Soru ${number}`
    const optionMatches = [...content.matchAll(/^([A-E])\)\s*(.+?)\s*$/gm)]
    const firstOptionIndex = optionMatches[0]?.index ?? content.length
    const body = content
      .slice(0, firstOptionIndex)
      .replace(/`[^`]+`\s*/, '')
      .trim()
    const options = optionMatches.map((match) => ({ letter: match[1], text: match[2].trim() }))
    questions.push({ number, id, body, options })
  }

  return questions
}

function field(content, label, nextLabels = []) {
  const alternatives = nextLabels.map((item) => `\\*\\*${item}:\\*\\*`).join('|')
  const end = alternatives ? `(?=\\n(?:${alternatives})|$)` : '$'
  return content.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*([\\s\\S]*?)${end}`, 'm'))?.[1]?.trim() ?? ''
}

function parseSolutionFile(source) {
  const chunks = String(source).split(/\n## Soru (\d+)\s*\n/)
  const solutions = new Map()

  for (let index = 1; index < chunks.length; index += 2) {
    const number = Number(chunks[index])
    const content = chunks[index + 1] ?? ''
    solutions.set(number, {
      answer: content.match(/\*\*Doğru cevap:\*\*\s*([A-E])/)?.[1] ?? '',
      skill: field(content, 'Kazanım', ['Çözüm']),
      solution: field(content, 'Çözüm', ['Neden doğru\\?', 'Çeldirici notu']),
      rationale: field(content, 'Neden doğru\\?', ['Çeldirici notu']),
      distractor: field(content, 'Çeldirici notu'),
    })
  }

  return solutions
}

function RichText({ text, imageBase }) {
  const parts = String(text ?? '').split(/(!\[[^\]]*\]\([^)]+\))/g)

  function renderMathText(value, keyPrefix) {
    return String(value).split(/(\$\$[\s\S]+?\$\$)/g).filter(Boolean).map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return <MathRenderer key={`${keyPrefix}-math-${index}`} latex={part.slice(2, -2)} display className="my-3" />
      }
      return <MathText key={`${keyPrefix}-text-${index}`} text={part} />
    })
  }

  function renderTable(value, keyPrefix) {
    const rows = String(value).split('\n').map((line) => line.trim()).filter(Boolean)
    const separator = rows[1]?.replace(/\s/g, '') ?? ''
    const isTable = rows.length >= 3
      && rows.every((line) => line.startsWith('|') && line.endsWith('|'))
      && /^\|(?::?-+:?\|)+$/.test(separator)

    if (!isTable) return null

    const cells = (line) => line.slice(1, -1).split('|').map((cell) => cell.trim())
    const header = cells(rows[0])
    const body = rows.slice(2).map(cells)

    return (
      <div key={keyPrefix} className="my-4 max-w-full overflow-x-auto rounded-input border border-line">
        <table className="w-full min-w-[420px] border-collapse text-center text-sm tabular-nums">
          <thead className="bg-surface-sunken text-ink">
            <tr>
              {header.map((cell, index) => (
                <th key={`${keyPrefix}-h-${index}`} scope="col" className="border-b border-line px-3 py-2.5 font-semibold">
                  {renderMathText(cell, `${keyPrefix}-h-${index}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, rowIndex) => (
              <tr key={`${keyPrefix}-r-${rowIndex}`} className="border-b border-line last:border-0">
                {row.map((cell, cellIndex) => (
                  <td key={`${keyPrefix}-${rowIndex}-${cellIndex}`} className="px-3 py-2.5 text-ink/80">
                    {renderMathText(cell, `${keyPrefix}-${rowIndex}-${cellIndex}`)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="space-y-3 text-[15px] leading-7 text-ink/85 sm:text-base">
      {parts.map((part, index) => {
        const image = part.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
        if (image) {
          const src = image[2].startsWith('/') ? image[2] : `${imageBase}/${image[2]}`
          return (
            <figure key={`${src}-${index}`} className="overflow-hidden rounded-card border border-line bg-surface-muted p-3">
              <img src={src} alt={image[1]} className="mx-auto max-h-[360px] max-w-full" />
              {image[1] && <figcaption className="mt-2 text-center text-xs text-ink/60">{image[1]}</figcaption>}
            </figure>
          )
        }

        return part
          .split(/\n{2,}/)
          .filter(Boolean)
          .map((paragraph, paragraphIndex) => {
            const key = `${index}-${paragraphIndex}`
            const table = renderTable(paragraph, key)
            if (table) return table
            return <div key={key}>{renderMathText(paragraph.replace(/\n/g, ' '), key)}</div>
          })
      })}
    </div>
  )
}

function QuestionCard({ question, solution, showSolutions, imageBase }) {
  return (
    <article id={question.id} className="scroll-mt-40 border-b border-line py-8 first:pt-0 last:border-0 last:pb-0">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 font-display text-sm font-bold text-brand-700 ring-1 ring-inset ring-brand-500/15">
            {question.number}
          </span>
          <code className="text-xs font-semibold text-ink/55">{question.id}</code>
        </div>
        {showSolutions && solution?.answer && (
          <span className="rounded-full bg-success-500/10 px-3 py-1 text-xs font-bold text-ink ring-1 ring-inset ring-success-500/20">
            Doğru cevap: {solution.answer}
          </span>
        )}
      </div>

      <RichText text={question.body} imageBase={imageBase} />

      <ol className="mt-6 grid gap-2.5 sm:grid-cols-2" aria-label={`${question.id} seçenekleri`}>
        {question.options.map((option) => {
          const correct = showSolutions && solution?.answer === option.letter
          return (
            <li
              key={option.letter}
              className={`flex min-h-12 items-center gap-3 rounded-input border px-4 py-3 text-sm leading-6 ${
                correct
                  ? 'border-success-500/35 bg-success-500/10 text-ink'
                  : 'border-line bg-surface-muted/70 text-ink/80'
              }`}
            >
              <span className="font-display font-bold text-ink">{option.letter}</span>
              <MathText text={option.text} />
            </li>
          )
        })}
      </ol>

      {showSolutions && solution && (
        <section className="mt-6 border-l-2 border-brand-500/35 pl-4 sm:pl-5" aria-label={`${question.id} çözümü`}>
          {solution.skill && <p className="mb-2 text-xs font-semibold text-ink/55">Kazanım: {solution.skill}</p>}
          <h3 className="mb-2 font-display text-sm font-bold text-ink">Çözüm</h3>
          <RichText text={solution.solution} imageBase={imageBase} />
          {solution.rationale && <p className="mt-3 text-sm text-ink/70"><strong>Neden doğru?</strong> <MathText text={solution.rationale} /></p>}
          {solution.distractor && <p className="mt-2 text-sm text-ink/70"><strong>Çeldirici notu:</strong> <MathText text={solution.distractor} /></p>}
        </section>
      )}
    </article>
  )
}

export default function QuestionBankReview() {
  const [searchParams, setSearchParams] = useSearchParams()
  const topicIndex = clamp(searchParams.get('konu'), 1, TOPICS.length) - 1
  const test = clamp(searchParams.get('test'), 1, 50)
  const topic = TOPICS[topicIndex]
  const [questions, setQuestions] = useState([])
  const [solutions, setSolutions] = useState(new Map())
  const [query, setQuery] = useState('')
  const [showSolutions, setShowSolutions] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const basePath = `${BANK_ROOT}/${topic.slug}`
  const fileStem = testName(test)
  const ordinal = topicIndex * 50 + test
  const progress = (ordinal / TOTAL_TESTS) * 100

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')
    setQuery('')

    Promise.all([
      fetch(`${basePath}/${fileStem}_questions.md`).then((response) => {
        if (!response.ok) throw new Error('Soru dosyası okunamadı.')
        return response.text()
      }),
      fetch(`${basePath}/${fileStem}_solutions.md`).then((response) => {
        if (!response.ok) throw new Error('Çözüm dosyası okunamadı.')
        return response.text()
      }),
    ])
      .then(([questionSource, solutionSource]) => {
        if (cancelled) return
        setQuestions(parseQuestionFile(questionSource))
        setSolutions(parseSolutionFile(solutionSource))
        setLoading(false)
        window.scrollTo({ top: 0, behavior: 'auto' })
      })
      .catch((fetchError) => {
        if (cancelled) return
        setError(fetchError.message || 'Dosyalar yüklenemedi.')
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [basePath, fileStem])

  const visibleQuestions = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('tr-TR')
    if (!normalized) return questions
    return questions.filter((question) =>
      `${question.id} ${question.body} ${question.options.map((option) => option.text).join(' ')}`
        .toLocaleLowerCase('tr-TR')
        .includes(normalized)
    )
  }, [query, questions])

  function navigate(nextTopicIndex, nextTest) {
    setSearchParams({ konu: String(nextTopicIndex + 1), test: String(nextTest) })
  }

  function move(direction) {
    let nextTopic = topicIndex
    let nextTest = test + direction
    if (nextTest > 50 && nextTopic < TOPICS.length - 1) {
      nextTopic += 1
      nextTest = 1
    } else if (nextTest < 1 && nextTopic > 0) {
      nextTopic -= 1
      nextTest = 50
    }
    navigate(nextTopic, clamp(nextTest, 1, 50))
  }

  const atStart = topicIndex === 0 && test === 1
  const atEnd = topicIndex === TOPICS.length - 1 && test === 50

  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <AuroraBackground />
      <header className="relative z-30 border-b border-line/80 bg-paper/90 backdrop-blur-xl lg:sticky lg:top-0">
        <div className="mx-auto max-w-[1480px] px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                Salt okunur editör önizlemesi
              </div>
              <h1 className="mt-1 truncate font-display text-xl font-bold text-ink sm:text-2xl">TYT Matematik Soru Bankası</h1>
              <p className="mt-1 text-xs text-ink/60 sm:text-sm">{TOTAL_QUESTIONS.toLocaleString('tr-TR')} soru · {TOPICS.length} konu · {TOTAL_TESTS.toLocaleString('tr-TR')} test</p>
            </div>

            <div className="grid min-w-0 gap-2 sm:grid-cols-[minmax(220px,1fr)_120px_auto] lg:w-[650px]">
              <Select
                aria-label="Konu seç"
                value={topicIndex}
                onChange={(event) => navigate(Number(event.target.value), 1)}
              >
                {TOPICS.map((item, index) => (
                  <option key={item.slug} value={index}>{String(item.number).padStart(2, '0')} · {item.label}</option>
                ))}
              </Select>
              <Select aria-label="Test seç" value={test} onChange={(event) => navigate(topicIndex, Number(event.target.value))}>
                {Array.from({ length: 50 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>Test {String(index + 1).padStart(2, '0')}</option>
                ))}
              </Select>
              <Button
                variant={showSolutions ? 'subtle' : 'secondary'}
                size="md"
                icon={showSolutions ? EyeOff : Eye}
                onClick={() => setShowSolutions((value) => !value)}
              >
                {showSolutions ? 'Çözümü gizle' : 'Çözümü göster'}
              </Button>
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-line/60"><div className="h-full bg-aurora-gradient transition-[width] duration-300" style={{ width: `${progress}%` }} /></div>
      </header>

      <main className="relative z-10 mx-auto grid max-w-[1480px] gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8 lg:py-8">
        <aside className="h-fit lg:sticky lg:top-36">
          <div className="rounded-card border border-line bg-surface/90 p-4 shadow-card backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink/55">Tarama konumu</p>
            <p className="mt-2 font-display text-lg font-bold leading-snug text-ink">{topic.label}</p>
            <p className="mt-1 text-sm text-ink/60">Test {String(test).padStart(2, '0')} · {ordinal}/{TOTAL_TESTS}</p>

            <div className="mt-5">
              <Input
                icon={Search}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Bu testte ara…"
                aria-label="Bu testte soru ara"
              />
            </div>

            <nav className="mt-5 grid grid-cols-5 gap-2" aria-label="Testteki sorular">
              {questions.map((question) => (
                <a
                  key={question.id}
                  href={`#${question.id}`}
                  className="focus-ring flex h-10 items-center justify-center rounded-xl border border-line bg-surface-muted text-xs font-bold text-ink/70 hover:border-brand-300 hover:text-brand-700"
                  aria-label={`${question.number}. soruya git`}
                >
                  {question.number}
                </a>
              ))}
            </nav>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button variant="ghost" size="sm" icon={ChevronLeft} disabled={atStart} onClick={() => move(-1)}>Geri</Button>
              <Button variant="secondary" size="sm" iconRight={ChevronRight} disabled={atEnd} onClick={() => move(1)}>Sonraki</Button>
            </div>
          </div>
        </aside>

        <section className="min-w-0 rounded-panel border border-line bg-surface/95 p-5 shadow-card backdrop-blur-sm sm:p-8 lg:p-10" aria-busy={loading}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-700">Konu {String(topic.number).padStart(2, '0')}</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">{topic.label}</h2>
              <p className="mt-2 text-sm text-ink/60">Test {String(test).padStart(2, '0')} · {questions.length || 10} soru</p>
            </div>
            {query && <p className="text-sm font-medium text-ink/60">{visibleQuestions.length} eşleşme</p>}
          </div>

          {loading && (
            <div className="space-y-5" role="status">
              <div className="h-5 w-40 animate-pulse rounded bg-surface-sunken" />
              <div className="h-4 w-full animate-pulse rounded bg-surface-sunken" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-surface-sunken" />
              <span className="sr-only">Sorular yükleniyor</span>
            </div>
          )}

          {!loading && error && (
            <div className="rounded-card border border-danger-500/25 bg-danger-500/10 p-5">
              <h3 className="font-display font-bold text-ink">Dosya yüklenemedi</h3>
              <p className="mt-1 text-sm text-ink/70">{error}</p>
            </div>
          )}

          {!loading && !error && visibleQuestions.length === 0 && (
            <div className="py-16 text-center">
              <p className="font-display text-lg font-bold text-ink">Eşleşen soru bulunamadı</p>
              <p className="mt-1 text-sm text-ink/60">Arama ifadesini değiştirin veya temizleyin.</p>
            </div>
          )}

          {!loading && !error && visibleQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              solution={solutions.get(question.number)}
              showSolutions={showSolutions}
              imageBase={basePath}
            />
          ))}

          {!loading && !error && visibleQuestions.length > 0 && (
            <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-ink/60">Test {String(test).padStart(2, '0')} tamamı görüntülendi.</p>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" icon={ChevronLeft} disabled={atStart} onClick={() => move(-1)}>Önceki test</Button>
                <Button variant="secondary" size="sm" iconRight={ChevronRight} disabled={atEnd} onClick={() => move(1)}>Sonraki test</Button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
