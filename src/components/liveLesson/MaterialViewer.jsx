import { useState } from 'react'
import { ExternalLink, FileText, ImageOff, Loader2, PenLine } from 'lucide-react'
import { Button, EmptyState } from '../ui'
import PdfViewer from '../PdfViewer'
import { materialKindLabel } from '../../lib/liveLesson/status'

/**
 * Merkez çalışma alanında açılan materyal.
 *
 * TASARIM KARARI — MATERYAL DE KAHRAMANDIR
 * ----------------------------------------
 * Materyal açıldığında tahtayla aynı alanı kaplar; küçük bir önizleme
 * penceresine sıkıştırılmaz. Öğrenci soruyu okuyamıyorsa materyalin
 * derste bir işlevi yoktur.
 *
 * Harici bağlantılar iframe'e GÖMÜLMEZ: çoğu site çerçevelenmeyi
 * engelliyor ve öğretmen boş beyaz bir kutuya bakıyor. Bunun yerine ne
 * olacağı açıkça yazılır ve yeni sekmede açılır.
 */
export default function MaterialViewer({ material, onSendToBoard, onClose }) {
  const [imageFailed, setImageFailed] = useState(false)

  if (!material) return null

  const imageUrl = material.meta?.imageUrl ?? (material.kind === 'image' ? material.url : null)
  const isPdf = material.kind === 'pdf' || /\.pdf($|\?)/i.test(material.url ?? '')
  const isImage = Boolean(imageUrl) || /\.(png|jpe?g|webp|gif)($|\?)/i.test(material.url ?? '')
  const src = imageUrl ?? material.url

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-2xs font-bold uppercase tracking-wide text-ink/45">
            {materialKindLabel(material.kind)}
          </p>
          <h2 className="truncate font-display text-base font-semibold text-ink">{material.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          {isImage && onSendToBoard && (
            <Button size="sm" variant="secondary" icon={PenLine} onClick={() => onSendToBoard(material)}>
              Tahtaya aktar
            </Button>
          )}
          {onClose && (
            <Button size="sm" variant="ghost" onClick={onClose}>
              Tahtaya dön
            </Button>
          )}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-auto rounded-card bg-surface">
        {isPdf && material.url ? (
          <PdfViewer url={material.url} title={material.title} />
        ) : isImage && src && !imageFailed ? (
          <div className="flex min-h-full items-start justify-center p-3">
            <img
              src={src}
              alt={material.title}
              onError={() => setImageFailed(true)}
              className="max-w-full rounded-card shadow-card"
            />
          </div>
        ) : material.kind === 'question' ? (
          <div className="p-5">
            <p className="whitespace-pre-wrap text-base leading-relaxed text-ink">{material.title}</p>
          </div>
        ) : material.url ? (
          <div className="grid min-h-full place-items-center p-6 text-center">
            <div className="max-w-sm">
              <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/10 text-brand-600">
                <ExternalLink className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <p className="font-display text-base font-bold text-ink">{material.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                Bu materyal yeni bir sekmede açılır. Ders penceresi kapanmaz — sekmeler arasında
                geçiş yapabilirsin.
              </p>
              <Button
                as="a"
                href={material.url}
                target="_blank"
                rel="noreferrer"
                icon={ExternalLink}
                className="mt-5"
              >
                Yeni sekmede aç
              </Button>
            </div>
          </div>
        ) : (
          <EmptyState
            compact
            icon={imageFailed ? ImageOff : FileText}
            title={imageFailed ? 'Materyal açılamadı' : 'Görüntülenecek içerik yok'}
            description={
              imageFailed
                ? 'Dosyaya ulaşılamadı. Bağlantını kontrol et veya materyali yeniden ekle.'
                : 'Bu materyalin açılabilir bir dosyası veya bağlantısı bulunmuyor.'
            }
          />
        )}
      </div>
    </div>
  )
}
