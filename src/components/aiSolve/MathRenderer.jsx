import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn'

/**
 * MathRenderer — LaTeX ifadelerini KaTeX ile basar (§6).
 *
 * ═══════════════════════════════════════════════════════════════════
 * GÜVENLİK: `dangerouslySetInnerHTML` KULLANILMIYOR
 * ═══════════════════════════════════════════════════════════════════
 * KaTeX'in iki API'si var: `renderToString` (HTML metni döner, React'te
 * dangerouslySetInnerHTML gerektirir) ve `render` (gerçek DOM düğümleri
 * kurup elemente ekler). İkincisini kullanıyoruz.
 *
 * `renderToString` + dangerouslySetInnerHTML de KaTeX'in kendi güvenlik
 * modeline göre güvenlidir (`trust: false` iken \href ve \htmlClass gibi
 * uzantılar kapalıdır) — ama o yol kod tabanına "AI çıktısını innerHTML'e
 * basmak normaldir" örneği bırakırdı. Bir sonraki geliştirici o satırı
 * kopyalayıp KaTeX'siz bir yere yapıştırdığında XSS doğar. §46 bunu
 * yasaklıyor; en güvenli kural, o deseni kod tabanına HİÇ SOKMAMAK.
 *
 * `trust: false` ayrıca AÇIKÇA yazıldı: varsayılan olsa da, bir gün
 * varsayılan değişirse ya da biri "linkler çalışsın" diye açmak isterse
 * buradaki yorum niyeti gösterir.
 *
 * ═══════════════════════════════════════════════════════════════════
 * TEMBEL YÜKLEME
 * ═══════════════════════════════════════════════════════════════════
 * KaTeX + fontları ~300 KB. Uygulamayı yalnızca ödev takibi için açan
 * öğrenciye bunu indirtmenin anlamı yok. Dinamik `import()` ile ayrı bir
 * parçaya (chunk) çıkıyor ve yalnızca tahta açıldığında yükleniyor.
 * Yüklenene kadar ham LaTeX gösterilir — boş kutu göstermekten iyidir.
 */

/** Modül düzeyinde tek seferlik yükleme sözü. */
let katexPromise = null

function loadKatex() {
  if (!katexPromise) {
    katexPromise = Promise.all([import('katex'), import('katex/dist/katex.min.css')])
      .then(([mod]) => mod.default ?? mod)
      .catch((error) => {
        // Yükleme başarısızsa bir daha denenebilsin diye sözü sıfırla:
        // aksi halde tek bir ağ hatası tahtayı kalıcı olarak bozardı.
        katexPromise = null
        throw error
      })
  }
  return katexPromise
}

const KATEX_OPTIONS = {
  // Hatalı LaTeX çözümü tamamen çökertmemeli; hatalı kısım kırmızı
  // gösterilip devam edilir.
  throwOnError: false,
  errorColor: '#E11D48',
  // Bilinmeyen komutlarda uyarı basıp devam et (varsayılan 'warn' zaten
  // budur ama modele bağlı bir girdide açıkça yazmak doğru).
  strict: false,
  // \href, \htmlClass, \includegraphics KAPALI. Bkz. dosya başlığı.
  trust: false,
  // Türkçe içerikte "$" işareti para birimi olarak geçebiliyor; KaTeX
  // zaten yalnızca bize verilen ifadeyi işliyor, sınırlayıcı aramıyor.
  output: 'htmlAndMathml',
}

/**
 * Tek bir LaTeX ifadesi.
 *
 * @param {object} props
 * @param {string} props.latex
 * @param {boolean} [props.display]  Blok (ortalanmış, büyük) mü satır içi mi
 */
export default function MathRenderer({ latex, display = false, className }) {
  const ref = useRef(null)
  const [failed, setFailed] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const node = ref.current
    if (!node || !latex) return undefined

    loadKatex()
      .then((katex) => {
        if (cancelled || !ref.current) return
        // `katex.render` hedef düğümü temizleyip kendi DOM ağacını kurar;
        // hiçbir noktada HTML METNİ enterpole edilmez.
        katex.render(latex, ref.current, { ...KATEX_OPTIONS, displayMode: display })
        setReady(true)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
    }
  }, [latex, display])

  if (!latex) return null

  // Yüklenmeden önce ve hata durumunda ham LaTeX. React metin düğümü
  // olarak basılır — yani HTML olarak yorumlanmaz.
  return (
    <span
      className={cn(
        display ? 'block text-center' : 'inline-block',
        'max-w-full overflow-x-auto overflow-y-hidden align-middle hide-scrollbar',
        className
      )}
    >
      <span ref={ref} className={cn(!ready && 'hidden')} />
      {!ready && (
        <span
          className={cn(
            'font-mono text-[0.95em] text-ink/80',
            failed && 'text-danger-600'
          )}
        >
          {latex}
        </span>
      )}
    </span>
  )
}

/**
 * Türkçe metnin İÇİNDEKİ matematiği basar: "x'i yalnız bırakmak için $2$'ye böleriz".
 *
 * Model, anlatım alanlarında matematiği `$...$` arasına almakla görevli
 * (bkz. api/_lib/solve/prompts.js). Burada metin `$` sınırlayıcılarına
 * göre parçalanır; matematik parçaları KaTeX'e, düz metin parçaları
 * React metin düğümü olarak basılır.
 *
 * Tek sayıda `$` varsa (model kapatmayı unutmuşsa) son parça düz metin
 * kalır — yarım bir formülü matematik sanıp bozuk render etmektense
 * olduğu gibi göstermek daha iyi.
 */
export function MathText({ text, className }) {
  if (typeof text !== 'string' || !text) return null

  const parts = text.split('$')
  // Tek sayıda `$` → sınırlayıcılardan biri kapanmamış. O durumda son
  // parça matematik SAYILMAZ.
  const balanced = parts.length % 2 === 1

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (!part) return null
        const isMath = i % 2 === 1 && (balanced || i !== parts.length - 1)
        return isMath ? (
          <MathRenderer key={i} latex={part} />
        ) : (
          <span key={i}>{part}</span>
        )
      })}
    </span>
  )
}
