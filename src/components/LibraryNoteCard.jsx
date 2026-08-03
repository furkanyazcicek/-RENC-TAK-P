import { useState } from 'react'
import { FileText, Trash2, Download } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import ImageLightbox from './ImageLightbox'

export default function LibraryNoteCard({ note, canManage, onDeleted }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)

  async function handleDelete() {
    setDeleting(true)
    const { error } = await supabase.from('library_notes').delete().eq('id', note.id)
    setDeleting(false)
    if (!error) onDeleted?.()
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 flex flex-col gap-3 hover:shadow-elevated transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-display font-bold text-ink leading-snug">{note.title}</h4>
        {canManage && (
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="focus-ring flex-shrink-0 h-8 w-8 rounded-lg grid place-items-center text-ink/30 hover:text-bad hover:bg-bad/5 transition-colors"
            aria-label="Notu sil"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </div>

      {note.content && <p className="text-sm text-ink/60 whitespace-pre-line">{note.content}</p>}

      {note.file_url && note.file_type === 'image' && (
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="focus-ring w-fit rounded-xl overflow-hidden border border-ink/10"
        >
          <img src={note.file_url} alt={note.title} className="h-32 w-auto object-cover hover:opacity-80 transition-opacity" />
        </button>
      )}

      {note.file_url && note.file_type === 'pdf' && (
        <a
          href={note.file_url}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-xl bg-brand-50 text-brand-700 px-3 py-2 text-sm font-semibold w-fit hover:bg-brand-100 transition-colors"
        >
          <FileText className="h-4 w-4" />
          PDF'i Görüntüle
          <Download className="h-3.5 w-3.5 opacity-60" />
        </a>
      )}

      <span className="text-xs text-ink/30">
        {new Date(note.created_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
      </span>

      {lightboxOpen && <ImageLightbox src={note.file_url} alt={note.title} onClose={() => setLightboxOpen(false)} />}
    </div>
  )
}
