import { cn } from '../../lib/cn'

/**
 * AuroraBackground — sayfaların arkasındaki ışık atmosferi.
 *
 *   <AuroraBackground />                    → tüm sayfa (fixed, çok hafif)
 *   <AuroraBackground variant="hero" />     → hero bölümü (absolute, belirgin)
 *   <AuroraBackground variant="panel" />    → tek bir kartın içi
 *
 * Tasarım kararları — bilinçli:
 *
 * 1) **z-index 0 + içerik z-10.** Blob'lar negatif z-index'e alınırsa, üst
 *    öğenin `bg-paper` gibi bir blok arka planı onları örter (boyama sırası:
 *    negatif z-index katmanı, blok arka planlarından ÖNCE çizilir). Bu yüzden
 *    katman 0'da durur, içerik `relative z-10` ile üstüne biner.
 *
 * 2) **Sarmalayıcıda `overflow-hidden`.** Blob'lar ekranın dışına taşacak
 *    kadar büyük; kırpılmazsa yatay kaydırma çubuğu doğar.
 *
 * 3) **Yalnızca transform/opacity animasyonu** (bkz. index.css). Blur değeri
 *    statiktir, animasyon edilmez — aksi hâlde her karede yeniden blur
 *    hesaplanır ve mobil cihaz düşer. Mobilde animasyon tamamen kapalıdır.
 *
 * 4) Katman `aria-hidden` ve `pointer-events-none` — tamamen dekoratiftir,
 *    ekran okuyucuya ve tıklamaya görünmez.
 */

const VARIANTS = {
  /* Panel/dashboard zemini — "var olduğu fark edilmeyen" atmosfer */
  page: {
    wrapper: 'fixed inset-0',
    blobs: [
      {
        className: 'aurora-blob-a',
        style: {
          top: '-18%',
          left: '-10%',
          width: '52rem',
          height: '52rem',
          background:
            'radial-gradient(circle, rgb(var(--c-aurora-purple) / 0.20) 0%, transparent 68%)',
          filter: 'blur(80px)',
        },
      },
      {
        className: 'aurora-blob-b',
        style: {
          top: '-10%',
          right: '-12%',
          width: '46rem',
          height: '46rem',
          background:
            'radial-gradient(circle, rgb(var(--c-aurora-blue) / 0.18) 0%, transparent 68%)',
          filter: 'blur(90px)',
        },
      },
      {
        className: 'aurora-blob-c',
        style: {
          bottom: '-24%',
          left: '28%',
          width: '44rem',
          height: '44rem',
          background:
            'radial-gradient(circle, rgb(var(--c-aurora-cyan) / 0.14) 0%, transparent 70%)',
          filter: 'blur(100px)',
        },
      },
    ],
  },

  /* Hero — Aurora'nın en belirgin olduğu yer, yine de neon değil */
  hero: {
    wrapper: 'absolute inset-0',
    blobs: [
      {
        className: 'aurora-blob-a',
        style: {
          top: '-30%',
          left: '-5%',
          width: '55rem',
          height: '55rem',
          background:
            'radial-gradient(circle, rgb(var(--c-aurora-purple) / 0.32) 0%, transparent 65%)',
          filter: 'blur(90px)',
        },
      },
      {
        className: 'aurora-blob-b',
        style: {
          top: '-20%',
          right: '-8%',
          width: '48rem',
          height: '48rem',
          background:
            'radial-gradient(circle, rgb(var(--c-aurora-blue) / 0.28) 0%, transparent 65%)',
          filter: 'blur(90px)',
        },
      },
      {
        className: 'aurora-blob-c',
        style: {
          bottom: '-40%',
          left: '25%',
          width: '50rem',
          height: '50rem',
          background:
            'radial-gradient(circle, rgb(var(--c-aurora-cyan) / 0.22) 0%, transparent 68%)',
          filter: 'blur(100px)',
        },
      },
      {
        className: 'aurora-blob-a',
        style: {
          top: '20%',
          right: '20%',
          width: '30rem',
          height: '30rem',
          background:
            'radial-gradient(circle, rgb(var(--c-aurora-pink) / 0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '-12s',
        },
      },
    ],
  },

  /* Kart içi ışıma — AI paneli, öne çıkan istatistik kartı */
  panel: {
    wrapper: 'absolute inset-0',
    blobs: [
      {
        className: 'aurora-blob-a',
        style: {
          top: '-60%',
          left: '-10%',
          width: '28rem',
          height: '28rem',
          background:
            'radial-gradient(circle, rgb(var(--c-aurora-purple) / 0.30) 0%, transparent 68%)',
          filter: 'blur(60px)',
        },
      },
      {
        className: 'aurora-blob-b',
        style: {
          bottom: '-70%',
          right: '-10%',
          width: '26rem',
          height: '26rem',
          background:
            'radial-gradient(circle, rgb(var(--c-aurora-cyan) / 0.24) 0%, transparent 68%)',
          filter: 'blur(60px)',
        },
      },
    ],
  },
}

export default function AuroraBackground({ variant = 'page', className }) {
  const placement = variant === 'page' ? 'fixed inset-0' : 'absolute inset-0'
  const surface =
    variant === 'panel'
      ? 'bg-[linear-gradient(135deg,rgb(var(--c-brand-900)/0.04),transparent_55%)]'
      : 'bg-[linear-gradient(180deg,rgb(var(--c-surface))_0%,rgb(var(--c-paper))_100%)]'

  return <div aria-hidden="true" className={cn('pointer-events-none z-0', placement, surface, className)} />
}
