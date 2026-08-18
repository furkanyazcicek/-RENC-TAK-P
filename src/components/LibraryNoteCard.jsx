import { useCallback, useState } from 'react'
// `Image` global adıyla karışmasın diye ImageIcon olarak alınır.
import { FileText, Image as ImageIcon, Maximize2, Trash2 } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import ImageLightbox from './ImageLightbox'
import PdfThumbnail from './PdfThumbnail'
import PdfViewer from './PdfViewer'
import { IconButton } from './ui'

/**
 * LibraryNoteCard — bir konuya eklenmiş tek ders notu.
 *
 * KAPAK MANTIĞI: not ne olursa olsun (fotoğraf ya da PDF) kartın üstünde
 * aynı ölçüde bir kapak görseli durur ve tıklanınca tam ekran açılır.
 * Eskiden PDF notlar yalnızca "PDF'i Görüntüle" bağlantısıydı: öğrenci
 * içinde ne olduğunu görmeden dosyayı açmak zorundaydı ve kartlar
 * birbirinden farklı yükseklikte, dağınık görünüyordu. Kapak hem içeriği
 * ele veriyor hem de ızgarayı hizalıyor.
 *
 * Kapak oranı 4:3 ve üstten hizalı: dikey bir A4'ün başlığı ve ilk satırları
 * görünür — dosya adına bakmadan hangi not olduğu anlaşılır.
 */
export default function LibraryNoteCard({ note, canManage, onDeleted }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [pageCount, setPageCount] = useState(null)
  const [deleting, setDeleting] = useState(false)

  async function handleDelete() {
    setDeleting(true)
    const { error } = await supabase.from('library_notes').delete().eq('id', note.id)
    setDeleting(false)
    if (!error) onDeleted?.()
  }

  // PdfThumbnail her render'da yeni bir fonksiyon görürse çizimi baştan alır.
  const handlePdfMeta = useCallback((meta) => setPageCount(meta.pageCount), [])

  const isImage = note.file_url && note.file_type === 'image'
  const isPdf = note.file_url && note.file_type === 'pdf'
  const hasCover = isImage || isPdf

  return (
    <article className="card-interactive group flex flex-col overflow-hidden">
      {hasCover && (
        <button
          type="button"
          onClick={() => (isPdf ? setViewerOpen(true) : setLightboxOpen(true))}
          className="focus-ring relative block aspect-[4/3] w-full overflow-hidden bg-surface-sunken"
          aria-label={`${note.title} — ${isPdf ? 'PDF' : 'görsel'} olarak aç`}
        >
          {isPdf ? (
            <PdfThumbnail url={note.file_url} alt={`${note.title} önizlemesi`} onMeta={handlePdfMeta} />
          ) : (
            <img
              src={note.file_url}
              alt={note.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 ease-smooth group-hover:scale-[1.04]"
            />
          )}

          {/* Tür rozeti — kapak üstünde okunaklı kalsın diye koyu cam zemin. */}
          <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-ink/60 px-2 py-1 text-2xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
            {isPdf ? (
              <FileText className="h-3 w-3" aria-hidden="true" />
            ) : (
              <ImageIcon className="h-3 w-3" aria-hidden="true" />
            )}
            {isPdf ? 'PDF' : 'Görsel'}
          </span>

          {isPdf && pageCount > 0 && (
            <span className="absolute bottom-2.5 right-2.5 rounded-full bg-ink/60 px-2 py-1 text-2xs font-bold tabular text-white backdrop-blur-sm">
              {pageCount} sayfa
            </span>
          )}

          {/* Açma katmanı: masaüstünde üzerine gelince belirir, dokunmatikte
              zaten kapağın tamamı tıklanabilir olduğu için gizli kalması sorun değil. */}
          <span
            className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-ink/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:flex"
            aria-hidden="true"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-ink shadow-card">
              <Maximize2 className="h-3.5 w-3.5" />
              Aç
            </span>
          </span>
        </button>
      )}

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h4 className="font-display font-bold leading-snug text-ink">{note.title}</h4>
            <p className="mt-1 text-2xs text-ink/55">
              {!hasCover && <span className="font-semibold text-brand-600">Yazılı not · </span>}
              {new Date(note.created_at).toLocaleDateString('tr-TR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>

          {canManage && (
            <IconButton
              icon={Trash2}
              label="Notu sil"
              size="xs"
              disabled={deleting}
              onClick={handleDelete}
              className="-mr-1 -mt-0.5 shrink-0 text-ink/45 hover:bg-danger-50 hover:text-danger-600 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
            />
          )}
        </div>

        {note.content && (
          <p className="whitespace-pre-line text-sm leading-relaxed text-ink/60">{note.content}</p>
        )}
      </div>

      {lightboxOpen && (
        <ImageLightbox src={note.file_url} alt={note.title} onClose={() => setLightboxOpen(false)} />
      )}

      {viewerOpen && (
        <PdfViewer url={note.file_url} title={note.title} onClose={() => setViewerOpen(false)} />
      )}
    </article>
  )
}
