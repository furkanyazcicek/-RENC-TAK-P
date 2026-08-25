import { sayiBicimle } from '../../../lib/fizik/birimler.js'

/**
 * Fizik Atlası — SVG çizim yardımcıları
 * ==================================================================
 * DİKKAT — koordinat dönüşümü: fizik hesapları y ekseni **yukarı**
 * artan matematik koordinatında yapılır; SVG'de y **aşağı** artar.
 * Çevirme işi burada, tek noktada yapılır. Bileşenler ekran
 * koordinatlarını hazır alır.
 */

/** Fizik koordinatını SVG koordinatına çeviren yardımcı üretir. */
export function eksenKur({ genislik, yukseklik, x0, x1, y0, y1 }) {
  const sx = genislik / (x1 - x0)
  const sy = yukseklik / (y1 - y0)
  return {
    px: (x) => (x - x0) * sx,
    py: (y) => yukseklik - (y - y0) * sy,
    // Uzunluk ölçeği (ok boyu gibi yönsüz büyüklükler için).
    ol: (u) => u * sx,
    tersX: (p) => x0 + p / sx,
    tersY: (p) => y0 + (yukseklik - p) / sy,
    sx,
    sy,
  }
}

/**
 * Vektör oku. Ok başı, çizgi kalınlığından bağımsız sabit oranda çizilir
 * ki kısa vektörlerde başı gövdesini yutmasın.
 *
 * Renk körlüğü için: her vektör okunun yanında **adı yazılır**; ayrım
 * yalnızca renge bırakılmaz.
 */
export function VektorOku({
  x1, y1, x2, y2, renk = 'rgb(var(--fa-vektor))', kalinlik = 2.4,
  etiket = null, kesikli = false, opaklik = 1, etiketKaydir = 0,
}) {
  const dx = x2 - x1
  const dy = y2 - y1
  const boy = Math.hypot(dx, dy)
  if (boy < 0.5) return null

  const bx = dx / boy
  const by = dy / boy
  // Ok başı uzunluğu: vektör kısaldıkça küçülür, ama en az 4 piksel.
  const basBoyu = Math.max(4, Math.min(11, boy * 0.3))
  const basGen = basBoyu * 0.55
  // Gövde, ok başının dibinde biter; uç uca binme olmaz.
  const gx = x2 - bx * basBoyu
  const gy = y2 - by * basBoyu

  return (
    <g opacity={opaklik}>
      <line
        x1={x1} y1={y1} x2={gx} y2={gy}
        stroke={renk} strokeWidth={kalinlik} strokeLinecap="round"
        strokeDasharray={kesikli ? '5 4' : undefined}
      />
      <polygon
        points={`${x2},${y2} ${gx - by * basGen},${gy + bx * basGen} ${gx + by * basGen},${gy - bx * basGen}`}
        fill={renk}
      />
      {etiket ? (
        <text
          x={x2 + bx * 12 + etiketKaydir}
          y={y2 + by * 12 + 4}
          fontSize="11.5"
          fontWeight="700"
          fill={renk}
          textAnchor="middle"
          style={{ paintOrder: 'stroke', stroke: 'rgb(var(--fa-zemin-2))', strokeWidth: 3, strokeLinejoin: 'round' }}
        >
          {etiket}
        </text>
      ) : null}
    </g>
  )
}

/** Koordinat düzlemi: eksenler, ızgara ve ölçek işaretleri. */
export function KoordinatDuzlemi({
  genislik, yukseklik, eksen, izgaraAdimi = 1,
  xEtiket = 'x (m)', yEtiket = 'y (m)', sayilariGoster = true,
}) {
  const cizgiler = []
  const { px, py, tersX, tersY } = eksen

  const xBas = Math.ceil(tersX(0) / izgaraAdimi) * izgaraAdimi
  const xSon = tersX(genislik)
  for (let x = xBas; x <= xSon; x += izgaraAdimi) {
    const p = px(x)
    const anaEksen = Math.abs(x) < izgaraAdimi / 1000
    cizgiler.push(
      <line key={`gx${x}`} x1={p} x2={p} y1={0} y2={yukseklik}
        stroke={anaEksen ? 'rgb(var(--fa-cizgi-guclu))' : 'rgb(var(--fa-cizgi))'}
        strokeWidth={anaEksen ? 1.4 : 0.6} />,
    )
  }

  const yBas = Math.ceil(tersY(yukseklik) / izgaraAdimi) * izgaraAdimi
  const ySon = tersY(0)
  for (let y = yBas; y <= ySon; y += izgaraAdimi) {
    const p = py(y)
    const anaEksen = Math.abs(y) < izgaraAdimi / 1000
    cizgiler.push(
      <line key={`gy${y}`} y1={p} y2={p} x1={0} x2={genislik}
        stroke={anaEksen ? 'rgb(var(--fa-cizgi-guclu))' : 'rgb(var(--fa-cizgi))'}
        strokeWidth={anaEksen ? 1.4 : 0.6} />,
    )
  }

  return (
    <g aria-hidden="true">
      {cizgiler}
      {sayilariGoster ? (
        <>
          <text x={genislik - 6} y={py(0) - 6} textAnchor="end" fontSize="10" fill="rgb(var(--fa-metin-3))">{xEtiket}</text>
          <text x={px(0) + 6} y={12} fontSize="10" fill="rgb(var(--fa-metin-3))">{yEtiket}</text>
        </>
      ) : null}
    </g>
  )
}

/** Açı yayı — iki doğrultu arasındaki açıyı derece değeriyle gösterir. */
export function AciYayi({ merkezX, merkezY, yaricap = 26, baslangicAci, bitisAci, renk = 'rgb(var(--fa-vurgu-2))', etiket = null }) {
  const rad = (d) => (d * Math.PI) / 180
  const x1 = merkezX + yaricap * Math.cos(rad(baslangicAci))
  const y1 = merkezY - yaricap * Math.sin(rad(baslangicAci))
  const x2 = merkezX + yaricap * Math.cos(rad(bitisAci))
  const y2 = merkezY - yaricap * Math.sin(rad(bitisAci))
  let fark = bitisAci - baslangicAci
  while (fark < 0) fark += 360
  const buyukYay = fark > 180 ? 1 : 0
  const ortaAci = baslangicAci + fark / 2

  return (
    <g>
      <path
        d={`M ${x1} ${y1} A ${yaricap} ${yaricap} 0 ${buyukYay} 0 ${x2} ${y2}`}
        fill="none" stroke={renk} strokeWidth="1.6" strokeDasharray="3 2"
      />
      <text
        x={merkezX + (yaricap + 13) * Math.cos(rad(ortaAci))}
        y={merkezY - (yaricap + 13) * Math.sin(rad(ortaAci)) + 4}
        fontSize="11" fontWeight="700" fill={renk} textAnchor="middle"
        style={{ paintOrder: 'stroke', stroke: 'rgb(var(--fa-zemin-2))', strokeWidth: 3, strokeLinejoin: 'round' }}
      >
        {etiket ?? `${sayiBicimle(fark, 0)}°`}
      </text>
    </g>
  )
}

/**
 * Sürüklenebilir tutamak. Dokunmatik ekranda da çalışması için
 * pointer olayları kullanılır ve `touch-action: none` sahnede kapalıdır.
 * Klavye kullanıcıları ok tuşlarıyla oynatabilsin diye odaklanabilir.
 */
export function Tutamak({
  x, y, r = 9, renk = 'rgb(var(--fa-vurgu))', etiket = '',
  onSurukle, adim = 4, secili = false,
}) {
  const klavye = (e) => {
    const kaydir = { ArrowLeft: [-adim, 0], ArrowRight: [adim, 0], ArrowUp: [0, -adim], ArrowDown: [0, adim] }[e.key]
    if (!kaydir) return
    e.preventDefault()
    onSurukle?.({ x: x + kaydir[0], y: y + kaydir[1] })
  }

  return (
    <g
      tabIndex={0}
      role="button"
      aria-label={etiket || 'Sürüklenebilir nokta'}
      onKeyDown={klavye}
      style={{ cursor: 'grab', outline: 'none' }}
    >
      <circle cx={x} cy={y} r={r + 7} fill="transparent" />
      <circle cx={x} cy={y} r={r} fill={renk} stroke="rgb(var(--fa-yuzey))" strokeWidth="2" opacity={secili ? 1 : 0.9} />
      {secili ? <circle cx={x} cy={y} r={r + 4} fill="none" stroke={renk} strokeWidth="1.5" opacity="0.5" /> : null}
    </g>
  )
}

/**
 * Sahnede işaretli bir tanecik izi (iz bırakma).
 * Eski noktalar soluklaşarak kaybolur; hareketin geçmişi görünür kalır.
 */
export function Iz({ noktalar, renk = 'rgb(var(--fa-vurgu-2))', kalinlik = 1.6 }) {
  if (noktalar.length < 2) return null
  return (
    <polyline
      points={noktalar.map((n) => `${n.x},${n.y}`).join(' ')}
      fill="none" stroke={renk} strokeWidth={kalinlik} strokeDasharray="4 4" opacity="0.55"
      strokeLinecap="round"
    />
  )
}

/** Sahne üstünde duran küçük bilgi rozeti (birim ve anlık değer). */
export function SahneRozeti({ metin, tur = 'olcum' }) {
  return <span className={`fa-rozet ${tur}`}>{metin}</span>
}
