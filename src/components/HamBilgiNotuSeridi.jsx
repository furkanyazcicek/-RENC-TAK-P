import { Download, FileText, Printer } from 'lucide-react'
import { Badge } from './ui'

/**
 * HamBilgiNotuSeridi — bir konunun yazdırılabilir çalışma notu.
 *
 * Etkileşimli ders notu öğretir; bu PDF **tekrar ettirir**. İkisi aynı
 * konuda yan yana durduğu için kart ızgarasına karışmaz: derslerin
 * üstünde kendi şeridinde, tek ve belirgin bir çağrı olarak görünür.
 *
 * Dosya `public/kutuphane-notlari/` altında durur ve siteyle birlikte
 * yayına gider; indirme için ağ isteği veya oturum gerekmez.
 */
export default function HamBilgiNotuSeridi({ not }) {
  if (!not) return null

  return (
    <section className="mb-4 overflow-hidden rounded-card bg-brand-500/[0.06] ring-1 ring-inset ring-brand-500/15">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-5">
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-700 ring-1 ring-inset ring-brand-500/15"
          aria-hidden="true"
        >
          <FileText className="h-6 w-6" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-display text-base font-bold leading-snug text-ink">
              {not.baslik} — Çalışma Notu
            </h4>
            <Badge tone="brand" size="sm">PDF</Badge>
          </div>
          <p className="mt-1 text-sm leading-6 text-ink/65">{not.ozet}</p>
          <p className="mt-1.5 text-2xs font-semibold text-ink/50">
            {not.sayfa} sayfa · {not.boyutKB} KB · yazdırmaya hazır
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2">
          <a
            href={not.dosya}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-btn border border-line-strong bg-surface px-4 text-sm font-semibold text-ink transition-colors hover:border-brand-400 hover:text-brand-700"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            Aç
          </a>
          <a
            href={not.dosya}
            download
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-btn bg-brand-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            İndir
          </a>
        </div>
      </div>
    </section>
  )
}
