import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react'
import { cn } from '../../lib/cn'
import { publicUrlFor } from '../../lib/whiteboard/imagePrep'
import FigureRenderer from './FigureRenderer'
import MathRenderer, { MathText } from './MathRenderer'

/**
 * ActionRenderer — tahta action'larını ekrana basar (§45).
 *
 * MİMARİ KURAL
 * ------------
 * Her action türünün KENDİ bileşeni var ve dağıtım tek bir `switch` ile
 * yapılıyor. Bilinmeyen bir tür gelirse `null` döner — patlamaz, ama
 * bir şey de göstermez.
 *
 * Bu dosya, `src/lib/whiteboard/actions.js` doğrulayıcısıyla ikili bir
 * savunma oluşturur:
 *   · Doğrulayıcı: "bu alan var mı, tipi doğru mu, sınırda mı"
 *   · Renderer:    "bu alanı nasıl gösteririm"
 * İkisini ayırmak, güvenlik kontrolünün sunum değişikliklerinde kazara
 * silinmesini engeller.
 *
 * HİÇBİR YERDE `dangerouslySetInnerHTML` YOK. Metin React metin düğümü,
 * matematik KaTeX'in DOM API'si, şekiller SVG. AI'dan gelen hiçbir string
 * işaretleme (markup) olarak yorumlanmıyor (§46).
 */

const TONE_CLASSES = {
  brand: {
    box: 'border-brand-500/35 bg-brand-500/[0.07]',
    text: 'text-brand-700',
    mark: 'bg-brand-500/20',
    line: 'decoration-brand-500',
  },
  success: {
    box: 'border-success-500/40 bg-success-500/[0.08]',
    text: 'text-success-700',
    mark: 'bg-success-500/20',
    line: 'decoration-success-500',
  },
  warning: {
    box: 'border-warning-500/40 bg-warning-500/[0.10]',
    text: 'text-warning-700',
    mark: 'bg-warning-500/25',
    line: 'decoration-warning-500',
  },
  danger: {
    box: 'border-danger-500/40 bg-danger-500/[0.08]',
    text: 'text-danger-700',
    mark: 'bg-danger-500/20',
    line: 'decoration-danger-500',
  },
  info: {
    box: 'border-info-500/40 bg-info-500/[0.08]',
    text: 'text-info-700',
    mark: 'bg-info-500/20',
    line: 'decoration-info-500',
  },
}

function tone(name) {
  return TONE_CLASSES[name] ?? TONE_CLASSES.brand
}

export default function ActionRenderer({ action }) {
  switch (action.type) {
    case 'write':
      return <WriteAction action={action} />
    case 'text':
      return <TextAction action={action} />
    case 'emphasis':
      return <EmphasisAction action={action} />
    case 'highlight':
      return <HighlightAction action={action} />
    case 'underline':
      return <UnderlineAction action={action} />
    case 'circle':
      return <CircleAction action={action} />
    case 'box':
      return <BoxAction action={action} />
    case 'arrow':
      return <ArrowAction action={action} />
    case 'line':
      return <LineAction />
    case 'erase':
      return <EraseAction action={action} />
    case 'move':
      return <MoveAction action={action} />
    case 'graph':
    case 'shape':
    case 'table':
    case 'flow':
    case 'numberline':
      return <FigureRenderer figure={action.figure} />
    case 'image':
      return <ImageAction action={action} />
    case 'pause':
      // Yalnızca zamanlama içindir; görsel karşılığı yok.
      return null
    default:
      return null
  }
}

/* ==================================================================
   METİN VE MATEMATİK
   ================================================================== */

function Content({ value, format, className }) {
  if (format === 'text') return <span className={className}>{value}</span>
  return <MathRenderer latex={value} display className={className} />
}

function WriteAction({ action }) {
  return (
    <div className="my-2 w-full text-center">
      <div className="text-lg leading-relaxed text-ink sm:text-xl">
        <Content value={action.content} format={action.format} />
      </div>
      {action.emphasis && (
        <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-brand-500/[0.08] px-2.5 py-1 text-2xs font-semibold text-brand-700 ring-1 ring-inset ring-brand-500/15">
          <span aria-hidden="true">↑</span>
          <MathRenderer latex={action.emphasis} />
        </p>
      )}
    </div>
  )
}

function TextAction({ action }) {
  const toneClass =
    action.tone === 'muted'
      ? 'text-ink/60'
      : action.tone === 'note'
        ? 'rounded-input bg-surface-sunken px-3.5 py-2.5 text-ink/80 ring-1 ring-inset ring-line'
        : 'text-ink/80'

  return (
    <p className={cn('my-2 text-center text-sm leading-relaxed sm:text-base', toneClass)}>
      <MathText text={action.content} />
    </p>
  )
}

/* ==================================================================
   VURGULAR
   ================================================================== */

function EmphasisAction({ action }) {
  const t = tone(action.tone)
  return (
    <div className="my-2 text-center">
      <span className={cn('inline-block text-lg font-semibold sm:text-xl', t.text)}>
        <Content value={action.target} format={action.format} />
      </span>
      {action.label && <p className="mt-1 text-xs text-ink/60">{action.label}</p>}
    </div>
  )
}

function HighlightAction({ action }) {
  const t = tone(action.tone)
  return (
    <div className="my-2 text-center">
      {/* Fosforlu kalem etkisi: metnin ARKASINA renk, metne değil —
          böylece kontrast korunur (DESIGN_SYSTEM §2 metin rengi kuralı). */}
      <span className={cn('inline-block rounded px-2 py-0.5 text-lg sm:text-xl', t.mark)}>
        <Content value={action.target} format={action.format} />
      </span>
      {action.label && <p className="mt-1 text-xs text-ink/60">{action.label}</p>}
    </div>
  )
}

function UnderlineAction({ action }) {
  const t = tone(action.tone)
  return (
    <div className="my-2 text-center">
      <span
        className={cn(
          'inline-block pb-1 text-lg underline decoration-2 underline-offset-[6px] sm:text-xl',
          t.line
        )}
      >
        <Content value={action.target} format={action.format} />
      </span>
      {action.label && <p className="mt-1 text-xs text-ink/60">{action.label}</p>}
    </div>
  )
}

function CircleAction({ action }) {
  const t = tone(action.tone)
  return (
    <div className="my-2 text-center">
      <span
        className={cn(
          'inline-block rounded-[50%] border-2 px-5 py-2 text-lg sm:text-xl',
          t.box,
          'border-dashed'
        )}
      >
        <Content value={action.target} format={action.format} />
      </span>
      {action.label && <p className="mt-1 text-xs text-ink/60">{action.label}</p>}
    </div>
  )
}

function BoxAction({ action }) {
  const t = tone(action.tone)
  return (
    <div className="my-3 text-center">
      <span
        className={cn(
          'inline-block rounded-input border-2 px-5 py-2.5 text-xl font-semibold sm:text-2xl',
          t.box
        )}
      >
        <Content value={action.target} format={action.format} />
      </span>
      {action.label && <p className="mt-1.5 text-xs text-ink/60">{action.label}</p>}
    </div>
  )
}

/* ==================================================================
   BAĞLAYICILAR
   ================================================================== */

const ARROW_ICONS = { down: ArrowDown, up: ArrowUp, left: ArrowLeft, right: ArrowRight }

function ArrowAction({ action }) {
  const Icon = ARROW_ICONS[action.direction] ?? ArrowDown
  return (
    <div className="my-1 flex flex-col items-center gap-0.5">
      <Icon className="h-5 w-5 text-brand-500/70" strokeWidth={2.4} aria-hidden="true" />
      {action.label && <span className="text-2xs font-semibold text-brand-700">{action.label}</span>}
    </div>
  )
}

function LineAction() {
  return <hr className="my-3 w-full border-t border-dashed border-line-strong" />
}

function EraseAction({ action }) {
  return (
    <div className="my-2 text-center">
      {/* Silinen ifade: üstü çizili ve soluk. Tamamen kaldırmak yerine
          göstermek pedagojik — öğrenci NEYİN gittiğini görmeli. */}
      <span className="inline-block text-lg text-ink/35 line-through decoration-danger-500/60 decoration-2 sm:text-xl">
        <MathRenderer latex={action.target} display />
      </span>
    </div>
  )
}

function MoveAction({ action }) {
  return (
    <div className="my-2 flex flex-col items-center gap-1">
      <div className="text-lg text-ink sm:text-xl">
        <MathRenderer latex={action.content} display />
      </div>
      {(action.from || action.to) && (
        <p className="text-2xs font-semibold text-brand-700">
          {action.from ?? '?'} <span aria-hidden="true">→</span> {action.to ?? '?'}
        </p>
      )}
    </div>
  )
}

/* ==================================================================
   GÖRSEL
   ================================================================== */

function ImageAction({ action }) {
  // URL, YOLDAN İSTEMCİDE üretilir. Model bir URL veremez; `actions.js`
  // `path` alanında protokol içeren değerleri zaten reddediyor. Yani
  // buradan üçüncü taraf bir adrese istek çıkması mümkün değil.
  const url = publicUrlFor(action.path)
  if (!url) return null

  return (
    <div className="my-3 flex justify-center">
      <img
        src={url}
        alt={action.alt}
        loading="lazy"
        className="max-h-64 w-auto max-w-full rounded-input border border-line object-contain"
      />
    </div>
  )
}
