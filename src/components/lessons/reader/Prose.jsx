import { Fragment } from 'react'
import MathRenderer from '../../aiSolve/MathRenderer'

/**
 * DERS METNİ
 * ==================================================================
 *
 * Öğretmen ders yazarken HTML yazmaz. Bu yüzden içerik düz metindir ve
 * burada çok küçük, öğrenilmesi 10 saniye süren bir işaretleme dili
 * desteklenir:
 *
 *     **kalın**        kavramın adı, kritik terim
 *     ==vurgu==        "burayı kaçırma" işareti
 *     *eğik*           yumuşak vurgu, yabancı terim
 *     `kod`            sembol, kısaltma
 *     $x^2$            LaTeX (KaTeX ile basılır)
 *     - madde          liste
 *
 * DAHA FAZLASI BİLİNÇLİ OLARAK YOK. Markdown'ın tamamını açsaydık AI
 * üretimi başlık, tablo ve alıntı üretmeye başlar; sunum kararı yeniden
 * içeriğe kaçardı (§14). Başlık istiyorsan yeni bir bölüm açarsın; tablo
 * istiyorsan `table` bloğu kullanırsın.
 *
 * GÜVENLİK: hiçbir yerde `dangerouslySetInnerHTML` yok. Metin React
 * düğümlerine ayrıştırılır; içerikten gelen HTML asla yorumlanmaz.
 */

// Sıra önemli: `**` alternatifi `*` alternatifinden ÖNCE gelmeli.
const INLINE_PATTERN = /(\$[^$\n]+\$|\*\*[^*\n]+\*\*|==[^=\n]+==|`[^`\n]+`|\*[^*\n]+\*)/g

function renderInline(value, keyPrefix = 'i') {
  if (!value) return null
  const parts = String(value).split(INLINE_PATTERN)

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`
    if (!part) return null

    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      return <MathRenderer key={key} latex={part.slice(1, -1)} />
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{renderInline(part.slice(2, -2), key)}</strong>
    }
    if (part.startsWith('==') && part.endsWith('==')) {
      return <mark key={key}>{renderInline(part.slice(2, -2), key)}</mark>
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code key={key} className="rounded bg-surface-sunken px-1 py-0.5 font-mono text-[0.9em] text-ink/85">
          {part.slice(1, -1)}
        </code>
      )
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={key}>{renderInline(part.slice(1, -1), key)}</em>
    }
    return <Fragment key={key}>{part}</Fragment>
  })
}

/** Satır içi işaretlemeyi başlık, alt yazı gibi tek satırlık yerlerde kullanır. */
export function Inline({ text }) {
  return <>{renderInline(text)}</>
}

/**
 * Paragraf akışı.
 * `lead` ilk paragrafı biraz büyütür — bölüm açılışlarında öğretmenin
 * "şimdi şuraya bakıyoruz" cümlesini metnin geri kalanından ayırır.
 */
export default function Prose({ text, className = '', lead = false }) {
  if (!text) return null

  const blocks = String(text)
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <div className={`lesson-prose ${className}`}>
      {blocks.map((block, blockIndex) => {
        const lines = block.split('\n').map((line) => line.trim())
        const isList = lines.every((line) => line.startsWith('- '))

        if (isList) {
          return (
            <ul key={blockIndex} className={`m-0 flex list-none flex-col gap-2 p-0 ${blockIndex > 0 ? 'mt-4' : ''}`}>
              {lines.map((line, lineIndex) => (
                <li key={lineIndex} className="relative ps-5">
                  <span className="absolute left-0 top-[0.72em] h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
                  {renderInline(line.slice(2), `l-${blockIndex}-${lineIndex}`)}
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={blockIndex} className={lead && blockIndex === 0 ? 'text-[1.125rem] leading-[1.8]' : undefined}>
            {renderInline(block.replace(/\n/g, ' '), `p-${blockIndex}`)}
          </p>
        )
      })}
    </div>
  )
}
