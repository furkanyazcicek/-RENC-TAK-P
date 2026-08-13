import { useState } from 'react'
// `Image` global adıyla karışmasın diye ImageIcon olarak alınır.
import { FileText, Trash2, Download, Image as ImageIcon } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import ImageLightbox from './ImageLightbox'
import { Badge, Button, IconButton } from './ui'

/**
 * LibraryNoteCard — bir konuya eklenmiş tek ders notu.
 *
 * Ek türü (görsel / PDF) küçük bir rozetle söylenir; öğrenci karta bakarak
 * içeriğin ne olduğunu açmadan anlar.
 */
export default function LibraryNoteCard({ note, canManage, onDeleted }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)

  async function handleDelete() {
    setDeleting(true)
    const { error } = await supabase.from('library_notes').delete().eq('id', note.id)
    setDeleting(false)
    if (!error) onDeleted?.()
  }

  const isImage = note.file_url && note.file_type === 'image'
  const isPdf = note.file_url && note.file_type === 'pdf'

  return (
    <article className="card-interactive group flex flex-col gap-3 p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h4 className="font-display font-bold leading-snug text-ink">{note.title}</h4>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            {isPdf && (
              <Badge tone="danger" size="sm" icon={FileText}>
                PDF
              </Badge>
            )}
            {isImage && (
              <Badge tone="info" size="sm" icon={ImageIcon}>
                Görsel
              </Badge>
            )}
            <span className="text-2xs text-ink/55">
              {new Date(note.created_at).toLocaleDateString('tr-TR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
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

      {isImage && (
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="focus-ring w-fit overflow-hidden rounded-xl border border-line"
          aria-label={`${note.title} görselini büyüt`}
        >
          <img
            src={note.file_url}
            alt={note.title}
            className="h-32 w-auto object-cover transition-transform duration-200 hover:scale-[1.03]"
          />
        </button>
      )}

      {isPdf && (
        <Button
          as="a"
          href={note.file_url}
          target="_blank"
          rel="noreferrer"
          variant="subtle"
          size="sm"
          icon={FileText}
          iconRight={Download}
          className="w-fit"
        >
          PDF'i Görüntüle
        </Button>
      )}

      {lightboxOpen && (
        <ImageLightbox src={note.file_url} alt={note.title} onClose={() => setLightboxOpen(false)} />
      )}
    </article>
  )
}
