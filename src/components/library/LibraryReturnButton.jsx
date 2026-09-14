import { ArrowLeft } from 'lucide-react'
import { Button } from '../ui'

const LABELS = {
  notes: 'Konu kütüphanesine dön',
  questions: 'Soru kütüphanesine dön',
}

/** Uzun içerikte de yapışkan üst çubukta kalan ortak çıkış kontrolü. */
export default function LibraryReturnButton({ kind = 'notes', onClick }) {
  const label = LABELS[kind] ?? 'Kütüphaneye dön'

  return (
    <Button
      variant="ghost"
      size="md"
      icon={ArrowLeft}
      onClick={onClick}
      aria-label={label}
      className="shrink-0 px-3 sm:px-4"
    >
      <span className="sm:hidden" aria-hidden="true">Geri</span>
      <span className="hidden sm:inline" aria-hidden="true">{label}</span>
    </Button>
  )
}
