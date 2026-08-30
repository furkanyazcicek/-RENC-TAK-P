/**
 * DERS GÖRSELLERİ — ORTAK ÇİZİM PARÇALARI
 * ==================================================================
 *
 * NEDEN SVG, NEDEN ÜRETİLMİŞ GÖRSEL DEĞİL
 * ---------------------------------------
 * Spesifikasyon §16: bilimsel diyagramlarda AI ile üretilmiş görsel
 * kullanılmaz. İki somut sebebi var:
 *   1) Üretilmiş görsellerdeki yazılar bozuk çıkar ve "krista" yerine
 *      "kirstaa" yazan bir biyoloji şeması dersi çürütür.
 *   2) Üretilmiş görsel ölü bir pikseldir: temayı takip etmez, ekrana
 *      göre ölçeklenmez, bir bölgesi vurgulanamaz, ekran okuyucu okuyamaz.
 *
 * Buradaki çizimler gerçek SVG'dir: etiketler `<text>` düğümüdür, renkler
 * tasarım sistemi token'larından gelir (koyu tema kendiliğinden çalışır),
 * ve her anlamlı bölge `data-region` ile adreslenebilir.
 *
 * BÖLGE VURGUSU (§31)
 * -------------------
 * `activeRegion` verildiğinde o bölge dışındaki her şey söner. "Görseli
 * Hocayla İncele" anlatımı ilerledikçe ses zaman çizelgesi bu değeri
 * değiştirir; ses gelmeden önce de öğrenci odak listesine dokunarak aynı
 * vurguyu elle kullanabilir. Yani altyapı ses olmadan da işe yarar.
 */

/** Bölgeye ait SVG grubuna vurgu/sönme davranışı ekler. */
export function region(name, activeRegion) {
  const dimmed = Boolean(activeRegion) && activeRegion !== name
  const active = activeRegion === name
  return {
    'data-region': name,
    opacity: dimmed ? 0.15 : 1,
    style: {
      transform: active ? 'scale(1.018)' : 'scale(1)',
      transformBox: 'fill-box',
      transformOrigin: 'center',
      transition: 'opacity .4s ease, transform .55s cubic-bezier(.22,1,.36,1)',
    },
  }
}

/** Ok uçları — her figürde yeniden tanımlamamak için tek yerde. */
export function ArrowHeads({ prefix = 'drk' }) {
  return (
    <defs>
      <marker id={`${prefix}-arrow`} markerWidth="9" markerHeight="9" refX="7.5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" className="fill-ink/55" />
      </marker>
      <marker id={`${prefix}-arrow-brand`} markerWidth="9" markerHeight="9" refX="7.5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" className="fill-brand-500" />
      </marker>
      <marker id={`${prefix}-arrow-aqua`} markerWidth="9" markerHeight="9" refX="7.5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" className="fill-aqua-500" />
      </marker>
      <marker id={`${prefix}-arrow-danger`} markerWidth="9" markerHeight="9" refX="7.5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" className="fill-danger-500" />
      </marker>
    </defs>
  )
}

/**
 * Çıkma çizgisi + etiket (leader line).
 * Anatomi şemalarında etiketi yapının ÜSTÜNE yazmak yerine dışarı çekip
 * ince bir çizgiyle bağlamak, hem çizimi hem yazıyı okunur bırakır.
 */
export function Leader({ from, to, label, sub, anchor = 'start', tone = 'ink' }) {
  const toneClass =
    tone === 'brand' ? 'stroke-brand-400' : tone === 'aqua' ? 'stroke-aqua-500' : tone === 'accent' ? 'stroke-accent-400' : 'stroke-ink/30'
  const dx = anchor === 'end' ? -8 : 8
  return (
    <g>
      <polyline
        points={`${from[0]},${from[1]} ${to[0]},${to[1]}`}
        className={toneClass}
        strokeWidth="1"
        fill="none"
      />
      <circle cx={from[0]} cy={from[1]} r="2.5" className={tone === 'aqua' ? 'fill-aqua-500' : tone === 'brand' ? 'fill-brand-500' : 'fill-ink/40'} />
      <text x={to[0] + dx} y={to[1] + 1} textAnchor={anchor} className="fill-ink/85" fontSize="13" fontWeight="650">
        {label}
      </text>
      {sub && (
        <text x={to[0] + dx} y={to[1] + 16} textAnchor={anchor} className="fill-ink/50" fontSize="11.5">
          {sub}
        </text>
      )}
    </g>
  )
}

/** Şema içi küçük başlık şeridi — kutu değil, yalnız yazı + ince çizgi. */
export function FigureBandLabel({ x, y, width, children }) {
  return (
    <g>
      <line x1={x} y1={y + 5} x2={x + width} y2={y + 5} className="stroke-line-strong" strokeWidth="1" />
      <text x={x} y={y} className="fill-ink/50" fontSize="10.5" fontWeight="700" letterSpacing="1.4">
        {children}
      </text>
    </g>
  )
}

/**
 * Duyarlı SVG kabuğu.
 * `viewBox` sabit, genişlik %100 — böylece 320 px telefonda da, geniş
 * masaüstünde de aynı çizim doğru oranla ölçeklenir. Yazı boyutları
 * viewBox biriminde tanımlıdır; çok küçük ekranda okunmaz hâle gelmemesi
 * için figürler bilinçli olarak geniş viewBox ve büyük punto kullanır.
 */
export function FigureSvg({ viewBox, title, desc, children, className = '' }) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={title}
      className={`h-auto w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title}</title>
      {desc && <desc>{desc}</desc>}
      {children}
    </svg>
  )
}

/**
 * Mitokondri levhasıyla aynı iki aşamalı etkileşim:
 * önce seçili bölge odaklanır, ardından aynı bilimsel çizim yakın görünüm
 * olarak büyür. Kod tabanlı şemalarda ikinci bir raster üretmek yerine
 * mevcut deterministik SVG büyütülür; etiket ve oranlar bozulmaz.
 */
export function InteractiveFigureSvg({ viewBox, title, desc, detail = null, children, className = '' }) {
  const [, , width = 760, height = 400] = String(viewBox).split(/\s+/).map(Number)
  const zoom = detail?.zoom
  const zoomStyle = {
    transform: detail && zoom ? `scale(${zoom.scale})` : 'scale(1)',
    transformOrigin: `${zoom?.x ?? 50}% ${zoom?.y ?? 50}%`,
  }

  return (
    <div
      className="relative isolate overflow-hidden rounded-[0.3rem] bg-[#fbf5e8]"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none"
        style={zoomStyle}
      >
        <FigureSvg viewBox={viewBox} title={title} desc={desc} className={`absolute inset-0 h-full w-full ${className}`}>
          {children}
        </FigureSvg>
      </div>

      {detail && (
        <div className="pointer-events-none absolute inset-0" aria-live="polite">
          <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-ink/85 px-4 py-2 text-[clamp(.72rem,1.7vw,.95rem)] font-extrabold tracking-wide text-white shadow-lg backdrop-blur-sm">
            Yakın görünüm · {detail.title}
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent px-5 pb-4 pt-16 text-white">
            <p className="m-0 text-[clamp(.68rem,1.5vw,.84rem)] font-semibold leading-relaxed text-white/90">{detail.note}</p>
            <p className="m-0 mt-1 text-right text-[clamp(.62rem,1.35vw,.76rem)] font-bold text-white/70">
              Ana görsele dönmek için aynı maddeye tekrar dokun.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Numaralı işaret.
 *
 * Şemadaki numara ile alttaki künyedeki numara BİREBİR aynı olmalıdır;
 * künyede "1" yazıp çizimde karşılığı olmayan bir şema, öğrenciyi
 * aradığı yeri bulmak için boş yere uğraştırır. Bu yüzden `registry.js`
 * içinde `markers: 'numbered'` diyen her şema bu işareti kullanır.
 */
export function Marker({ n, x, y, activeRegion, regionKey, r = 14 }) {
  const dimmed = Boolean(activeRegion) && activeRegion !== regionKey
  return (
    <g opacity={dimmed ? 0.22 : 1} style={{ transition: 'opacity .4s ease' }}>
      <circle cx={x} cy={y} r={r} className="fill-brand-600 stroke-surface" strokeWidth="2.5" />
      <text x={x} y={y + 5} textAnchor="middle" className="fill-white" fontSize={r} fontWeight="800">
        {n}
      </text>
    </g>
  )
}
