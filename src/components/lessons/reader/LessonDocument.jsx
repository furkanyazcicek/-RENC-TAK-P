import { useMemo } from 'react'
import LessonBlock from './LessonBlock'
import Prose, { Inline } from './Prose'

/**
 * DERS BELGESİ
 * ==================================================================
 *
 * Master içeriği ekrana basar ve varsa kişiselleştirme katmanını ÜSTÜNE
 * serper — içine karıştırmaz (§18, §21).
 *
 * KİŞİSELLEŞTİRME NASIL GİRİYOR?
 * Öğrenciye göre değişen tek şey, bölümlerin başına eklenen kısa hoca
 * notlarıdır. Bilimsel anlatımın tek bir cümlesi bile öğrenciye göre
 * yeniden yazılmaz. Sebebi basit: master içerik doğrulanmıştır, öğrenci
 * başına yeniden üretilen içerik doğrulanamaz. Ayrıca 1000 öğrenci için
 * 1000 kez model çağırmanın maliyeti savunulamaz (§45).
 *
 * Kişisel not GÖRSEL OLARAK da master hoca notundan ayrılmaz; yalnızca
 * etiketi "sana özel" der. Böylece öğrenci "bu bana yazılmış" hisseder
 * ama sayfa iki farklı tasarım diline bölünmez.
 *
 * ŞEKİL NUMARALARI
 * Ders boyunca kesintisiz ilerler (Şekil 1, 2, 3…). Numaralandırma
 * içerikte tutulmaz; burada hesaplanır. Öğretmen araya yeni bir şekil
 * eklediğinde elle numara düzeltmek zorunda kalmaz.
 */

const SECTION_KIND_LABEL = {
  opening: 'Başlangıç',
  build: 'Kavramı kur',
  deepen: 'Derinleş',
  practice: 'Uygula',
  close: 'Topla',
}

export default function LessonDocument({
  document,
  overlay = null,
  onExplainFigure,
  onInteraction,
  onSectionComplete,
  completedSections,
  activeNarrationBlockId = null,
}) {
  /* Şekil numaraları tek geçişte hesaplanır. */
  const figureNumbers = useMemo(() => {
    const map = new Map()
    let counter = 0
    document.sections.forEach((section) => {
      section.blocks.forEach((block) => {
        if (block.type === 'figure') {
          counter += 1
          map.set(block.id, counter)
        }
      })
    })
    return map
  }, [document])

  const personalNotes = overlay?.section_notes ?? {}
  const focusSections = new Set(overlay?.focus_sections ?? [])

  return (
    <div className="lesson-doc">
      <div className="lesson-body">
        {/* --------- Derse giriş: ön koşul + kazanım --------- */}
        <LessonOpening document={document} overlay={overlay} />

        {document.sections.map((section, index) => {
          const personal = personalNotes[section.id]
          const done = completedSections?.has(section.id)

          return (
            <section
              key={section.id}
              id={section.id}
              className={`lesson-spine scroll-mt-28 ${index === 0 ? 'mt-12' : 'mt-16'}`}
            >
              <span className="lesson-spine-node" aria-hidden="true" />

              <header className="lesson-flow">
                <p className="lesson-eyebrow m-0">
                  Bölüm {index + 1}
                  {SECTION_KIND_LABEL[section.kind] && (
                    <span className="text-ink/30"> · {SECTION_KIND_LABEL[section.kind]}</span>
                  )}
                  {focusSections.has(section.id) && (
                    <span className="text-brand-600"> · sana özel odak</span>
                  )}
                </p>
                <h2 className="lesson-section-title mt-2">
                  <Inline text={section.title} />
                </h2>
                {section.lead && <Prose text={section.lead} className="lesson-lead mt-3.5" />}
              </header>

              {/* Bloklar `.lesson-flow`un DOĞRUDAN çocuğu olmalı: kenar notu
                  yerleşimi ve geniş şerit kuralları doğrudan çocuk seçicisiyle
                  tanımlı. Araya sarmalayıcı bir div koyulursa hoca notları
                  kenar sütununa düşmez, metnin içine iner. */}
              <div className="lesson-flow mt-7">
                {/* Öğrenciye özel giriş notu — master içeriğe dokunmaz */}
                {personal?.body && (
                  <div className="lesson-margin-item">
                    <aside className="lesson-note lesson-note-connection">
                      <p className="lesson-eyebrow m-0 mb-1 text-brand-600">Sana özel</p>
                      <Prose text={personal.body} className="text-[inherit] leading-[inherit]" />
                    </aside>
                  </div>
                )}

                {section.blocks.map((block, blockIndex) => (
                  <LessonBlock
                    key={block.id}
                    block={block}
                    first={blockIndex === 0}
                    figureIndex={figureNumbers.get(block.id)}
                    onExplainFigure={onExplainFigure}
                    onInteraction={onInteraction}
                    activeNarration={activeNarrationBlockId === block.id}
                  />
                ))}
              </div>

              {onSectionComplete && (
                <div className="lesson-flow mt-9 clear-both">
                  <div className="border-t border-line pt-4">
                  <button
                    type="button"
                    onClick={() => onSectionComplete(section.id)}
                    disabled={done}
                    className={`focus-ring inline-flex items-center gap-2 rounded-btn px-3 py-1.5 text-[0.875rem] font-semibold transition-colors ${
                      done
                        ? 'cursor-default text-success-700'
                        : 'border border-line-strong bg-surface text-ink/70 hover:border-brand-400 hover:text-brand-700'
                    }`}
                  >
                    {done ? 'Bu bölümü bitirdin' : 'Bu bölümü anladım'}
                  </button>
                  </div>
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}

/**
 * Dersin açılışı: "buraya girmeden önce şunu bilmelisin" ve "bittiğinde
 * şunları yapabileceksin". Bu iki blok olmadan öğrenci nereden başlayacağını
 * ve ne zaman bitirdiğini bilemez (§66, soru 1 ve 9).
 */
function LessonOpening({ document, overlay }) {
  const hasPrerequisites = document.prerequisites?.length > 0
  const hasOutcomes = document.outcomes?.length > 0
  const greeting = overlay?.greeting

  if (!hasPrerequisites && !hasOutcomes && !greeting) return null

  return (
    <div className="lesson-flow lesson-spine">
      <span className="lesson-spine-node" aria-hidden="true" />

      {greeting?.body && (
        <div>
          {greeting.heading && (
            <p className="m-0 font-display text-[1.1875rem] font-bold tracking-tight text-ink sm:text-[1.3125rem]">
              <Inline text={greeting.heading} />
            </p>
          )}
          <Prose text={greeting.body} className="mt-2 text-[1.0625rem] leading-[1.8] text-ink/78" />
        </div>
      )}

      {(hasPrerequisites || hasOutcomes) && (
        <div className={`grid gap-x-10 gap-y-6 sm:grid-cols-2 ${greeting?.body ? 'mt-8' : ''}`}>
          {hasPrerequisites && (
            <div>
              <p className="lesson-eyebrow m-0">Bu dersten önce bilmen gerekenler</p>
              <ul className="m-0 mt-2.5 flex list-none flex-col gap-2 p-0">
                {document.prerequisites.map((item, index) => (
                  <li key={index} className="text-[0.9375rem] leading-[1.7]">
                    <span className="font-semibold text-ink">{item.topic}</span>
                    {item.why && <span className="text-ink/55"> — {item.why}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasOutcomes && (
            <div>
              <p className="lesson-eyebrow m-0">Ders bitince yapabileceklerin</p>
              <ul className="m-0 mt-2.5 flex list-none flex-col gap-2 p-0">
                {document.outcomes.map((item, index) => (
                  <li key={index} className="relative ps-5 text-[0.9375rem] leading-[1.7] text-ink/75">
                    <span className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-aqua-500" aria-hidden="true" />
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
