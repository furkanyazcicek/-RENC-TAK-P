import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { LESSONS } from '../content/lessons'
import { auditLessonDepth, normalizeLessonDocument } from '../lib/lesson/schema'
import { FIGURES } from '../components/lessons/figures'
import LessonDocument from '../components/lessons/reader/LessonDocument'
import LessonMasthead from '../components/lessons/reader/LessonMasthead'
import TeacherVoice from '../components/lessons/reader/TeacherVoice'
import LessonNarrationPlayer from '../components/lessons/reader/LessonNarrationPlayer'
import { buildNarrationItems } from '../lib/lessonNarration'
import { Modal } from '../components/ui'

/**
 * TASARIM VE KALİTE ÖNİZLEMESİ  (/ders-notu-onizleme)
 *
 * Giriş yapmadan açılır. İki işi var:
 *
 *   1) DrKoç ders dilinin gerçek bir dersle nasıl göründüğünü göstermek.
 *      Bu sayfadaki içerik gerçek gold standard dersidir, kısaltılmış bir
 *      demo değil (§57) — çünkü tasarımı ancak gerçek uzunlukta bir metinle
 *      dürüstçe değerlendirebilirsin. 300 kelimelik bir demo her tasarımı
 *      güzel gösterir.
 *
 *   2) İçerik denetimini görünür kılmak: sayfanın altındaki künye, bu dersin
 *      derinlik denetiminden nasıl geçtiğini gösterir (§51–54).
 *
 * Kişiselleştirme burada ÖRNEKTİR (öğrenci verisi yok); gerçek sürümde
 * `src/lib/lesson/personalize.js` üretir.
 */

/**
 * Örnek kişiselleştirme katmanı.
 *
 * Bölüm notları AÇIK ADLA yazılamaz: önizlemede birden fazla ders var ve
 * her dersin bölüm kimlikleri farklı. Sabit kimlik yazsaydık ders
 * değiştirildiğinde notlar sessizce kaybolur, kişiselleştirme çalışmıyor
 * gibi görünürdü. Bu yüzden notlar seçili belgeden türetilir.
 *
 * Gerçek sürümde bu katmanı `src/lib/lesson/personalize.js` öğrencinin
 * kendi çalışma kayıtlarından üretir.
 */
function buildSampleOverlay(document) {
  const deepen = document.sections.filter((section) => section.kind === 'deepen')
  const target = deepen.length ? deepen : document.sections.slice(1, 3)

  const notes = {}
  const focus = []

  target.slice(0, 2).forEach((section, index) => {
    notes[section.id] = {
      body:
        index === 0
          ? 'Doğruluk oranının düştüğü yer genelde tam burası. Bu bölümü bir kez okuyup geçme; bitirdiğinde kapağı kapatıp kendi cümlenle özetlemeyi dene.'
          : 'Geçen ay çözdüğün denemede bu bölümden gelen soruyu boş bırakmıştın. Buraya iki kez bakmanı istiyorum.',
    }
    focus.push(section.id)
  })

  return {
    greeting: {
      heading: 'Ahmet, bu konuda temposunu düşürmeni istiyorum.',
      body: 'Bu konuyla ilgili çözdüğün 42 soruda doğruluk oranın %58. Bu, konuyu hiç bilmediğin anlamına gelmez — genelde tek bir ayrımın yanlış kurulduğu anlamına gelir. Bu yüzden bu derste "sık yapılan hata" bölümlerini atlamadan oku ve dur-düşün duraklarında cevabı görmeden önce gerçekten düşün.',
    },
    section_notes: notes,
    focus_sections: focus,
  }
}

export default function LessonPreview() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedSlug = searchParams.get('ders')
  const activeSlug = LESSONS.some((item) => item.slug === requestedSlug)
    ? requestedSlug
    : LESSONS[0]?.slug ?? null
  const [voicePanel, setVoicePanel] = useState(null)
  const [personalized, setPersonalized] = useState(true)
  const [completedSections, setCompletedSections] = useState(() => new Set())
  const [narrationOpen, setNarrationOpen] = useState(false)
  const [activeNarration, setActiveNarration] = useState(null)

  const source = useMemo(
    () => LESSONS.find((item) => item.slug === activeSlug) ?? LESSONS[0],
    [activeSlug]
  )

  const document = useMemo(() => normalizeLessonDocument(source.document), [source])
  const audit = useMemo(() => auditLessonDepth(document, { profile: source.qualityProfile }), [document, source.qualityProfile])
  const overlay = useMemo(() => buildSampleOverlay(document), [document])

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
  const narrationItems = useMemo(() => buildNarrationItems(document, source.slug), [document, source.slug])
  const isNarrationPilot = narrationItems.length > 0

  const lesson = {
    id: 'preview',
    title: source.title,
    subtitle: source.subtitle,
    status: 'published',
    learning_mode: source.learningMode ?? 'interactive',
    is_gold_standard: Boolean(source.goldStandard),
  }

  // Temel not, kişiselleştirilmiş müdahalelerden önce gelen sakin okuma
  // katmanıdır. Önizleme ders değişince ilgili aşamanın doğal görünümünü açar.
  useEffect(() => {
    setPersonalized((source.learningMode ?? 'interactive') !== 'foundation')
    setNarrationOpen(false)
    setActiveNarration(null)
    setVoicePanel(null)
  }, [source])

  useEffect(() => {
    const targetBlockId = activeNarration?.targetBlockId
    if (!targetBlockId) return
    window.document.getElementById(`lesson-block-${targetBlockId}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [activeNarration?.targetBlockId])

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto w-full max-w-[76rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/"
            className="focus-ring inline-flex items-center gap-2 rounded-btn px-2 py-1 text-sm font-semibold text-ink/60 hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" /> Ana sayfaya dön
          </Link>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {LESSONS.length > 1 && (
              <label className="flex items-center gap-2 text-sm text-ink/60">
                <span className="lesson-eyebrow">Ders</span>
                <select
                  value={activeSlug ?? ''}
                  onChange={(event) => {
                    const next = new URLSearchParams(searchParams)
                    next.set('ders', event.target.value)
                    setSearchParams(next, { replace: true })
                    setCompletedSections(new Set())
                    window.scrollTo(0, 0)
                  }}
                  className="focus-ring max-w-[16rem] rounded-btn border border-line bg-surface px-2.5 py-1.5 text-sm font-semibold text-ink"
                >
                  {LESSONS.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.placement.examType} · {item.placement.subject} — {item.title}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label className="flex cursor-pointer items-center gap-2 text-sm text-ink/60">
              <input
                type="checkbox"
                checked={personalized}
                onChange={(event) => setPersonalized(event.target.checked)}
                className="h-4 w-4 rounded border-line-strong text-brand-600"
              />
              Kişiselleştirme katmanını göster
            </label>
          </div>
        </div>

        <article>
          <LessonMasthead
            lesson={lesson}
            document={document}
            subjectName={source.placement.subject}
            examType={source.placement.examType}
            topicName={source.placement.topic}
            hasNarration={isNarrationPilot || narrationSections.length > 0}
            narrationReady={isNarrationPilot}
            onStartVoice={() => {
              if (isNarrationPilot) setNarrationOpen((open) => !open)
              else setVoicePanel({ kind: 'lesson', title: 'Hocayla Çalış', sections: narrationSections })
            }}
          />

          {isNarrationPilot && narrationOpen && (
            <LessonNarrationPlayer
              key={source.slug}
              lessonSlug={source.slug}
              items={narrationItems}
              onActiveBlockChange={setActiveNarration}
              onClose={() => setNarrationOpen(false)}
            />
          )}

          <LessonDocument
            document={document}
            overlay={personalized ? overlay : null}
            completedSections={completedSections}
            onSectionComplete={(id) => setCompletedSections((previous) => new Set([...previous, id]))}
            onExplainFigure={(block) =>
              setVoicePanel({ kind: 'figure', title: block.title || 'Görseli Hocayla İncele', script: block.audio_script })
            }
            activeNarrationBlockIds={activeNarration?.highlightBlockIds ?? []}
          />
        </article>

        <FigureGallery />
        <QualityFooter audit={audit} />
      </div>

      <Modal
        open={Boolean(voicePanel)}
        onClose={() => setVoicePanel(null)}
        title={voicePanel?.title ?? ''}
        maxWidth="max-w-2xl"
      >
        {voicePanel?.kind === 'lesson' ? (
          <div className="flex flex-col gap-6">
            {voicePanel.sections?.map((section) => (
              <section key={section.id}>
                <p className="lesson-eyebrow m-0">{section.title}</p>
                <div className="mt-2">
                  <TeacherVoice script={section.script} compact />
                </div>
              </section>
            ))}
          </div>
        ) : (
          <TeacherVoice script={voicePanel?.script} />
        )}
      </Modal>
    </div>
  )
}

/**
 * ŞEMA GALERİSİ
 *
 * Kayıtlı bütün bilimsel şemaları tek yerde gösterir. İki işe yarar:
 * ders yazarken hangi şemanın hazır olduğunu görürsünüz, ve bir şema
 * bozulduğunda burada hemen fark edilir — her ders tek tek açılmaz.
 */
function FigureGallery() {
  const entries = Object.entries(FIGURES)

  return (
    <section className="mx-auto mt-20 max-w-[46rem] border-t border-line pt-6">
      <p className="lesson-eyebrow m-0">Kayıtlı şemalar</p>
      <p className="m-0 mt-2 text-[0.9375rem] leading-relaxed text-ink/60">
        Ders içeriği bir şemayı adıyla ister; çizimi yazılım yapar. Aşağıdakiler şu an kullanıma hazır.
      </p>

      <div className="mt-6 flex flex-col gap-8">
        {entries.map(([kind, entry]) => {
          const Component = entry.Component
          return (
            <figure key={kind} className="lesson-figure m-0">
              <figcaption className="m-0 mb-2 flex flex-wrap items-baseline gap-x-3">
                <span className="text-[0.9375rem] font-bold text-ink">{entry.label}</span>
                <code className="rounded bg-surface-sunken px-1.5 py-0.5 font-mono text-[0.75rem] text-ink/60">{kind}</code>
              </figcaption>
              <div className="lesson-figure-plate">
                <div style={entry.minWidth ? { minWidth: entry.minWidth } : undefined}>
                  <Component />
                </div>
              </div>
            </figure>
          )
        })}
      </div>
    </section>
  )
}

/**
 * İçerik denetimi künyesi.
 * Bir dersin "güzel görünmesi" yetmez; öğrencinin onunla gerçekten
 * öğrenebilmesi gerekir. Bu künye, o kontrolün sonucunu saklamak yerine
 * açıkça gösterir.
 */
function QualityFooter({ audit }) {
  return (
    <div className="mx-auto mt-20 max-w-[46rem] border-t border-line pt-6">
      <p className="lesson-eyebrow m-0">İçerik denetimi</p>
      <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-[0.9375rem] text-ink/65">
        <span>
          <span className="font-bold text-ink">{audit.words.toLocaleString('tr-TR')}</span> kelime
        </span>
        <span>
          <span className="font-bold text-ink">{audit.sections}</span> bölüm
        </span>
        <span>
          Kapsanan pedagojik rol: <span className="font-bold text-ink">{audit.roles.length}</span>
        </span>
        <span>
          Hazırlık puanı: <span className="font-bold text-ink">{audit.score}/100</span>
        </span>
      </div>

      {audit.warnings.length > 0 ? (
        <ul className="m-0 mt-4 flex list-none flex-col gap-1.5 p-0">
          {audit.warnings.map((warning, index) => (
            <li key={index} className="text-[0.875rem] leading-relaxed text-warning-700">
              {warning}
            </li>
          ))}
        </ul>
      ) : (
        <p className="m-0 mt-4 text-[0.875rem] text-success-700">
          Derinlik denetiminden uyarısız geçti: ön koşul, neden, görsel, örnek, aktif öğrenme, hata uyarısı ve özet katmanlarının hepsi mevcut.
        </p>
      )}

      <p className="m-0 mt-6 text-[0.8125rem] leading-relaxed text-ink/40">
        Bu sayfa DrKoç ders dilinin tasarım ve içerik referansıdır. Kişiselleştirme örnekleri temsilîdir; gerçek derste öğrencinin kendi çalışma kayıtlarından üretilir.
      </p>
    </div>
  )
}
