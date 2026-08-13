import { Fragment } from 'react'
import { cn } from '../../lib/cn'

/**
 * Markdown — modelin ürettiği metnin küçük ve GÜVENLİ bir alt kümesini basar.
 *
 * Neden hazır bir kütüphane yok? İhtiyaç duyulan biçimler (başlık, kalın,
 * madde listesi, numaralı liste) toplam yüz satırlık bir işi görüyor;
 * bunun için 40 KB'lık bir bağımlılık eklemek pakete yük olurdu.
 *
 * GÜVENLİK: Çıktı React elemanı olarak üretilir, `dangerouslySetInnerHTML`
 * KULLANILMAZ. Model ne üretirse üretsin (HTML etiketi, <script>, olay
 * özniteliği) React onu metin olarak basar; XSS yüzeyi yoktur.
 *
 * Desteklenenler: ### başlık · **kalın** · *italik* · `kod` · - madde ·
 * 1. numaralı · --- ayraç · boş satırla paragraf.
 */

/* ---------- Satır içi biçimlendirme ---------- */

// Sıra önemli: önce kalın (**), sonra italik (*) — aksi halde `*` kalını böler.
const INLINE_RE = /(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`\n]+`)/g

function renderInline(text, keyPrefix) {
  const parts = String(text).split(INLINE_RE)

  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`
    if (!part) return null

    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={key} className="font-bold text-ink">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={key} className="italic">
          {part.slice(1, -1)}
        </em>
      )
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={key}
          className="rounded-md bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-ink"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    return <Fragment key={key}>{part}</Fragment>
  })
}

/* ---------- Blok ayrıştırma ---------- */

const BULLET_RE = /^\s*[-*•]\s+(.*)$/
const ORDERED_RE = /^\s*(\d+)[.)]\s+(.*)$/
const HEADING_RE = /^\s*(#{1,4})\s+(.*)$/
const RULE_RE = /^\s*([-*_])\1{2,}\s*$/

function parseBlocks(source) {
  const lines = String(source ?? '').replace(/\r\n/g, '\n').split('\n')
  const blocks = []
  let paragraph = []

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: 'p', text: paragraph.join(' ') })
      paragraph = []
    }
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]

    if (!line.trim()) {
      flushParagraph()
      continue
    }

    if (RULE_RE.test(line)) {
      flushParagraph()
      blocks.push({ type: 'hr' })
      continue
    }

    const heading = line.match(HEADING_RE)
    if (heading) {
      flushParagraph()
      blocks.push({ type: 'h', level: heading[1].length, text: heading[2] })
      continue
    }

    if (BULLET_RE.test(line)) {
      flushParagraph()
      const items = []
      while (i < lines.length && BULLET_RE.test(lines[i])) {
        items.push(lines[i].match(BULLET_RE)[1])
        i += 1
      }
      i -= 1
      blocks.push({ type: 'ul', items })
      continue
    }

    if (ORDERED_RE.test(line)) {
      flushParagraph()
      const items = []
      while (i < lines.length && ORDERED_RE.test(lines[i])) {
        items.push(lines[i].match(ORDERED_RE)[2])
        i += 1
      }
      i -= 1
      blocks.push({ type: 'ol', items })
      continue
    }

    paragraph.push(line.trim())
  }

  flushParagraph()
  return blocks
}

export default function Markdown({ children, className }) {
  const blocks = parseBlocks(children)

  return (
    <div className={cn('flex flex-col gap-2.5 text-sm leading-relaxed text-ink/85', className)}>
      {blocks.map((block, i) => {
        const key = `b-${i}`

        if (block.type === 'hr') {
          return <hr key={key} className="my-1 border-line" />
        }

        if (block.type === 'h') {
          // Sohbet balonu içinde h1/h2 çok iri durur; hepsi aynı ölçüde
          // ama kalınlıkla ayrışan bir başlık stiline indirgenir.
          return (
            <p
              key={key}
              className={cn(
                'font-display font-bold text-ink',
                block.level <= 2 ? 'text-[0.95rem]' : 'text-sm'
              )}
            >
              {renderInline(block.text, key)}
            </p>
          )
        }

        if (block.type === 'ul') {
          return (
            <ul key={key} className="flex flex-col gap-1.5 pl-1">
              {block.items.map((item, j) => (
                <li key={`${key}-${j}`} className="flex gap-2.5">
                  <span
                    className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/60"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">{renderInline(item, `${key}-${j}`)}</span>
                </li>
              ))}
            </ul>
          )
        }

        if (block.type === 'ol') {
          return (
            <ol key={key} className="flex flex-col gap-1.5 pl-1">
              {block.items.map((item, j) => (
                <li key={`${key}-${j}`} className="flex gap-2.5">
                  <span className="mt-px shrink-0 font-display text-xs font-bold tabular text-brand-600">
                    {j + 1}.
                  </span>
                  <span className="min-w-0">{renderInline(item, `${key}-${j}`)}</span>
                </li>
              ))}
            </ol>
          )
        }

        return <p key={key}>{renderInline(block.text, key)}</p>
      })}
    </div>
  )
}
