/**
 * Fizik Atlası — Bölge Sahneleri
 * ==================================================================
 * Her bölgenin kendi "yüzü" olan, elle çizilmiş SVG sahneleri.
 *
 * Tarih Atlasında her padişahın bir portresi var; öğrenci listeye
 * baktığında kimin kim olduğunu resimden çıkarıyor. Fizik Atlasında
 * bölgeler yalnızca ikon + metindi, hepsi birbirine benziyordu.
 * Buradaki 13 sahne o boşluğu dolduruyor.
 *
 * KURAL — bunlar süs değil, **küçültülmüş ders şeması**:
 *   · Her sahne o bölgenin ana ilişkisini doğru gösterir
 *     (eğik atışta yatay hız sabit, ısınma eğrisinde platolar düz,
 *      kılcallıkta ince boruda sıvı daha yüksek…).
 *   · Renk yalnızca bölgenin kendi rengidir; geri kalan her şey
 *     temayla birlikte değişen nötr değişkenlerden gelir. Böylece
 *     açık temada da okunur kalır.
 *   · Ölçü ve etiketler Türkçedir.
 *
 * Ekran okuyucular için: sahne `role="img"` ve `<title>` taşır; süslü
 * bir tekrar değil, resmin ne anlattığını söyleyen bir cümle.
 */

const G = 320   // sahne genişliği
const Y = 168   // sahne yüksekliği

/* Temayla değişen nötr renkler — sahnelerin ortak paleti. */
const CIZGI = 'rgb(var(--fa-cizgi-guclu))'
const SOLUK = 'rgb(var(--fa-metin-3))'
const METIN = 'rgb(var(--fa-metin-2))'
const ZEMIN = 'rgb(var(--fa-yuzey-2))'

/** Milimetrik kâğıt dokusu — 13 sahneyi aynı aileden gösteren ortak zemin. */
function Izgara({ ad }) {
  return (
    <>
      <defs>
        <pattern id={`fa-kagit-${ad}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M16 0 L0 0 0 16" fill="none" stroke={CIZGI} strokeWidth="0.5" opacity="0.35" />
        </pattern>
      </defs>
      <rect x="0" y="0" width={G} height={Y} fill={ZEMIN} />
      <rect x="0" y="0" width={G} height={Y} fill={`url(#fa-kagit-${ad})`} />
    </>
  )
}

/** Ok başlı çizgi — sahnelerde kuvvet/hız oku olarak kullanılır. */
function Ok({ x1, y1, x2, y2, renk, kalinlik = 2, kesikli = false, opaklik = 1 }) {
  const dx = x2 - x1
  const dy = y2 - y1
  const boy = Math.hypot(dx, dy) || 1
  const bx = dx / boy
  const by = dy / boy
  const bas = Math.min(7, boy * 0.34)
  const gx = x2 - bx * bas
  const gy = y2 - by * bas
  return (
    <g opacity={opaklik}>
      <line
        x1={x1} y1={y1} x2={gx} y2={gy}
        stroke={renk} strokeWidth={kalinlik} strokeLinecap="round"
        strokeDasharray={kesikli ? '4 3' : undefined}
      />
      <polygon
        points={`${x2},${y2} ${gx - by * bas * 0.5},${gy + bx * bas * 0.5} ${gx + by * bas * 0.5},${gy - bx * bas * 0.5}`}
        fill={renk}
      />
    </g>
  )
}

/** Sahne içi küçük etiket. */
function Etiket({ x, y, children, renk = METIN, boyut = 9, kalin = true, hiza = 'middle' }) {
  return (
    <text
      x={x} y={y} fontSize={boyut} fontWeight={kalin ? 700 : 500}
      fill={renk} textAnchor={hiza}
      fontFamily="ui-monospace, Menlo, monospace"
    >
      {children}
    </text>
  )
}

/* ══════════════════════════════════════════════════════════════════
   1) ÖLÇME — cetvel, kronometre, terazi ve belirsizlik aralığı
   ══════════════════════════════════════════════════════════════════ */
function SahneOlcme({ r }) {
  const centikler = []
  for (let i = 0; i <= 20; i += 1) {
    const x = 24 + i * 9
    const uzun = i % 5 === 0
    centikler.push(
      <line key={i} x1={x} y1={112} x2={x} y2={uzun ? 98 : 105}
        stroke={uzun ? METIN : SOLUK} strokeWidth={uzun ? 1.2 : 0.8} />,
    )
  }
  return (
    <>
      {/* Cetvel gövdesi */}
      <rect x="18" y="96" width="192" height="20" rx="3" fill="none" stroke={CIZGI} strokeWidth="1.2" />
      {centikler}
      <Etiket x={24} y={126} renk={SOLUK} boyut={8}>0</Etiket>
      <Etiket x={114} y={126} renk={SOLUK} boyut={8}>5</Etiket>
      <Etiket x={204} y={126} renk={SOLUK} boyut={8}>10 cm</Etiket>

      {/* Ölçülen çubuk */}
      <rect x="24" y="76" width="119" height="13" rx="3" fill={r} fillOpacity="0.28" stroke={r} strokeWidth="1.4" />

      {/* Belirsizlik aralığı: son bölmenin yarısı */}
      <line x1="143" y1="70" x2="143" y2="96" stroke={r} strokeWidth="1" strokeDasharray="3 2" />
      <line x1="138" y1="66" x2="148" y2="66" stroke={r} strokeWidth="1.4" />
      <line x1="138" y1="62" x2="138" y2="70" stroke={r} strokeWidth="1.4" />
      <line x1="148" y1="62" x2="148" y2="70" stroke={r} strokeWidth="1.4" />
      <Etiket x={143} y={56} renk={r} boyut={9}>±0,5 mm</Etiket>

      {/* Kronometre */}
      <circle cx="262" cy="70" r="27" fill="none" stroke={CIZGI} strokeWidth="1.4" />
      <circle cx="262" cy="70" r="2.2" fill={r} />
      <line x1="262" y1="70" x2="278" y2="57" stroke={r} strokeWidth="2" strokeLinecap="round" />
      <line x1="262" y1="43" x2="262" y2="48" stroke={METIN} strokeWidth="1.4" />
      <line x1="289" y1="70" x2="284" y2="70" stroke={METIN} strokeWidth="1.4" />
      <line x1="262" y1="97" x2="262" y2="92" stroke={METIN} strokeWidth="1.4" />
      <line x1="235" y1="70" x2="240" y2="70" stroke={METIN} strokeWidth="1.4" />
      <rect x="256" y="36" width="12" height="6" rx="2" fill={CIZGI} />

      {/* Terazi */}
      <line x1="228" y1="146" x2="296" y2="146" stroke={METIN} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="262" y1="146" x2="262" y2="126" stroke={METIN} strokeWidth="1.6" />
      <path d="M254 158 L262 146 L270 158 Z" fill="none" stroke={CIZGI} strokeWidth="1.2" />
      <rect x="221" y="147" width="14" height="8" rx="2" fill={r} fillOpacity="0.35" stroke={r} strokeWidth="1" />
      <rect x="289" y="147" width="14" height="8" rx="2" fill="none" stroke={CIZGI} strokeWidth="1" />

      <Etiket x={20} y={152} renk={SOLUK} boyut={8.5} hiza="start">uzunluk · süre · kütle</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   2) VEKTÖRLER — bileşke, bileşenler ve açı
   ══════════════════════════════════════════════════════════════════ */
function SahneVektorler({ r }) {
  const ox = 48
  const oy = 140
  const A = { x: 188, y: 112 }   // yatayla ~11°
  const B = { x: 104, y: 70 }    // dik yukarı-sağ
  const R = { x: A.x + B.x - ox, y: A.y + B.y - oy }   // (244, 42)
  return (
    <>
      {/* Eksenler */}
      <line x1={ox} y1={oy} x2={300} y2={oy} stroke={CIZGI} strokeWidth="1.2" />
      <line x1={ox} y1={oy} x2={ox} y2={26} stroke={CIZGI} strokeWidth="1.2" />

      {/* Paralelkenar */}
      <line x1={A.x} y1={A.y} x2={R.x} y2={R.y} stroke={SOLUK} strokeWidth="1" strokeDasharray="4 3" />
      <line x1={B.x} y1={B.y} x2={R.x} y2={R.y} stroke={SOLUK} strokeWidth="1" strokeDasharray="4 3" />

      {/* R'nin dik bileşenleri */}
      <line x1={R.x} y1={R.y} x2={R.x} y2={oy} stroke={r} strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
      <line x1={R.x} y1={R.y} x2={ox} y2={R.y} stroke={r} strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
      <Etiket x={R.x + 14} y={92} renk={r} boyut={8.5} hiza="start">Ry</Etiket>
      <Etiket x={146} y={36} renk={r} boyut={8.5}>Rx</Etiket>

      {/* Bileşke — bölgenin rengi */}
      <Ok x1={ox} y1={oy} x2={R.x} y2={R.y} renk={r} kalinlik={3} />
      <Etiket x={R.x + 2} y={R.y - 9} renk={r} boyut={11}>R</Etiket>

      {/* İki vektör */}
      <Ok x1={ox} y1={oy} x2={A.x} y2={A.y} renk={METIN} kalinlik={2.2} />
      <Etiket x={A.x - 4} y={A.y + 15} renk={METIN}>A</Etiket>
      <Ok x1={ox} y1={oy} x2={B.x} y2={B.y} renk={METIN} kalinlik={2.2} />
      <Etiket x={B.x - 13} y={B.y - 2} renk={METIN}>B</Etiket>

      {/* Açı yayı — bileşkenin yatayla yaptığı açı */}
      <path d={`M ${ox + 36} ${oy} A 36 36 0 0 0 ${ox + 32} ${oy - 16}`} fill="none" stroke={METIN} strokeWidth="1.2" strokeDasharray="3 2" />
      <Etiket x={ox + 46} y={oy - 6} renk={METIN} boyut={9}>θ</Etiket>

      <Etiket x={300} y={160} renk={SOLUK} boyut={8.5} hiza="end">R² = Rx² + Ry²</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   3) MADDE — özkütle, kılcallık ve yüzey gerilimi
   ══════════════════════════════════════════════════════════════════ */
function SahneMadde({ r }) {
  return (
    <>
      {/* Dereceli silindir */}
      <path d="M22 40 L22 142 Q22 150 30 150 L58 150 Q66 150 66 142 L66 40"
        fill="none" stroke={CIZGI} strokeWidth="1.4" />
      <path d="M22 84 L22 142 Q22 150 30 150 L58 150 Q66 150 66 142 L66 84 Z" fill={r} fillOpacity="0.3" />
      <line x1="22" y1="84" x2="66" y2="84" stroke={r} strokeWidth="1.6" />
      {[52, 68, 100, 116, 132].map((y) => (
        <line key={y} x1="22" y1={y} x2="33" y2={y} stroke={SOLUK} strokeWidth="0.9" />
      ))}
      <Etiket x={44} y={36} renk={METIN} boyut={9}>V</Etiket>

      {/* Kılcal borular: ince boruda sıvı daha yüksek (h ~ 1/r) */}
      <rect x="112" y="52" width="16" height="98" fill="none" stroke={CIZGI} strokeWidth="1.3" />
      <rect x="112" y="96" width="16" height="54" fill={r} fillOpacity="0.34" />
      <path d="M112 96 Q120 90 128 96" fill="none" stroke={r} strokeWidth="1.5" />

      <rect x="150" y="52" width="8" height="98" fill="none" stroke={CIZGI} strokeWidth="1.3" />
      <rect x="150" y="70" width="8" height="80" fill={r} fillOpacity="0.34" />
      <path d="M150 70 Q154 64 158 70" fill="none" stroke={r} strokeWidth="1.5" />

      {/* Yükseklik farkı ölçüsü */}
      <line x1="168" y1="70" x2="168" y2="96" stroke={METIN} strokeWidth="1" strokeDasharray="3 2" />
      <line x1="164" y1="70" x2="172" y2="70" stroke={METIN} strokeWidth="1.2" />
      <line x1="164" y1="96" x2="172" y2="96" stroke={METIN} strokeWidth="1.2" />
      <Etiket x={186} y={86} renk={METIN} boyut={8.5}>Δh</Etiket>
      <Etiket x={135} y={164} renk={SOLUK} boyut={8}>boru inceldikçe yükselir</Etiket>

      {/* Yüzey gerilimi: yüzeyde duran damla */}
      <line x1="212" y1="112" x2="300" y2="112" stroke={r} strokeWidth="1.6" />
      <path d="M212 112 Q256 104 300 112" fill={r} fillOpacity="0.18" stroke="none" />
      <ellipse cx="256" cy="104" rx="18" ry="13" fill={r} fillOpacity="0.4" stroke={r} strokeWidth="1.4" />
      <Ok x1={238} y1={90} x2={228} y2={100} renk={METIN} kalinlik={1.4} />
      <Ok x1={274} y1={90} x2={284} y2={100} renk={METIN} kalinlik={1.4} />
      <Etiket x={256} y={80} renk={METIN} boyut={8.5}>yüzey gerilimi</Etiket>
      <Etiket x={256} y={132} renk={SOLUK} boyut={8.5}>d = m / V</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   4) KUVVET VE HAREKET — eğik düzlem, serbest cisim, v–t grafiği
   ══════════════════════════════════════════════════════════════════ */
function SahneHareket({ r }) {
  return (
    <>
      {/* Eğik düzlem */}
      <path d="M18 146 L154 146 L18 78 Z" fill={CIZGI} fillOpacity="0.25" stroke={CIZGI} strokeWidth="1.3" />
      <path d="M46 146 A 30 30 0 0 0 46 132" fill="none" stroke={SOLUK} strokeWidth="1" strokeDasharray="3 2" />
      <Etiket x={58} y={142} renk={SOLUK} boyut={8.5}>α</Etiket>

      {/* Blok — eğime oturmuş */}
      <g transform="translate(78 106) rotate(-26.6)">
        <rect x="-15" y="-13" width="30" height="13" rx="2" fill={r} fillOpacity="0.35" stroke={r} strokeWidth="1.5" />
      </g>

      {/* Serbest cisim diyagramı okları */}
      <Ok x1={74} y1={100} x2={74} y2={140} renk={METIN} kalinlik={2} />
      <Etiket x={66} y={148} renk={METIN} boyut={8.5}>G</Etiket>
      <Ok x1={74} y1={100} x2={100} y2={87} renk={r} kalinlik={2} />
      <Etiket x={110} y={84} renk={r} boyut={8.5}>N</Etiket>
      <Ok x1={74} y1={100} x2={100} y2={113} renk={SOLUK} kalinlik={2} />
      <Etiket x={110} y={120} renk={SOLUK} boyut={8.5}>f</Etiket>

      {/* v–t grafiği */}
      <line x1="196" y1="132" x2="300" y2="132" stroke={CIZGI} strokeWidth="1.2" />
      <line x1="196" y1="132" x2="196" y2="40" stroke={CIZGI} strokeWidth="1.2" />
      <line x1="196" y1="126" x2="292" y2="52" stroke={r} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M196 126 L292 52 L292 132 L196 132 Z" fill={r} fillOpacity="0.14" />
      <Etiket x={244} y={100} renk={SOLUK} boyut={8}>alan = Δx</Etiket>
      <Etiket x={190} y={38} renk={METIN} boyut={8.5} hiza="end">v</Etiket>
      <Etiket x={302} y={144} renk={METIN} boyut={8.5} hiza="end">t</Etiket>
      <Etiket x={248} y={34} renk={r} boyut={8.5}>eğim = a</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   5) ATIŞLAR — parabol, sabit yatay hız, değişen düşey hız
   ══════════════════════════════════════════════════════════════════ */
function SahneAtislar({ r }) {
  // y = -4h/R² · (x - R/2)² + h  →  gerçek eğik atış yörüngesi
  const x0 = 30
  const x1 = 288
  const taban = 140
  const tepe = 44
  const nokta = (t) => {
    const x = x0 + (x1 - x0) * t
    const u = 2 * t - 1
    return { x, y: taban - (taban - tepe) * (1 - u * u) }
  }
  const yol = Array.from({ length: 41 }, (_, i) => {
    const p = nokta(i / 40)
    return `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
  }).join(' ')

  const isaretler = [0.12, 0.5, 0.88].map((t) => nokta(t))
  return (
    <>
      <line x1="18" y1={taban} x2="302" y2={taban} stroke={CIZGI} strokeWidth="1.3" />
      <path d={yol} fill="none" stroke={r} strokeWidth="2.4" strokeLinecap="round" />

      {/* Hız bileşenleri: vx her noktada aynı boyda, vy işaret değiştirir */}
      {isaretler.map((p, i) => (
        <g key={i}>
          <Ok x1={p.x} y1={p.y} x2={p.x + 26} y2={p.y} renk={METIN} kalinlik={1.7} />
          {i !== 1 ? (
            <Ok x1={p.x} y1={p.y} x2={p.x} y2={p.y + (i === 0 ? -24 : 24)} renk={SOLUK} kalinlik={1.7} />
          ) : null}
          <circle cx={p.x} cy={p.y} r="3.4" fill={r} />
        </g>
      ))}
      <Etiket x={isaretler[0].x + 30} y={isaretler[0].y - 4} renk={METIN} boyut={8.5} hiza="start">vx</Etiket>
      <Etiket x={isaretler[0].x - 8} y={isaretler[0].y - 26} renk={SOLUK} boyut={8.5} hiza="end">vy</Etiket>
      <Etiket x={isaretler[1].x} y={isaretler[1].y - 10} renk={r} boyut={8.5}>vy = 0</Etiket>

      {/* Yerçekimi ivmesi her noktada aynı */}
      <Ok x1={252} y1={58} x2={252} y2={82} renk={r} kalinlik={1.8} kesikli />
      <Etiket x={266} y={74} renk={r} boyut={8.5} hiza="start">g</Etiket>

      {/* Atış açısı */}
      <path d={`M ${x0 + 26} ${taban} A 26 26 0 0 0 ${x0 + 18} ${taban - 19}`} fill="none" stroke={METIN} strokeWidth="1.1" strokeDasharray="3 2" />
      <Etiket x={x0 + 34} y={taban - 6} renk={METIN} boyut={8.5}>θ</Etiket>

      {/* Menzil */}
      <line x1={x0} y1={taban + 12} x2={x1} y2={taban + 12} stroke={SOLUK} strokeWidth="1" strokeDasharray="3 2" />
      <Etiket x={(x0 + x1) / 2} y={taban + 24} renk={SOLUK} boyut={8.5}>menzil</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   6) ENERJİ — parkur, Ep ↔ Ek dönüşümü ve sürtünme ısısı
   ══════════════════════════════════════════════════════════════════ */
function SahneEnerji({ r }) {
  const yol = 'M22 46 C 62 46, 74 132, 118 132 C 158 132, 168 66, 208 66 C 246 66, 258 138, 300 138'
  const sutun = (x, ep, ek, isi) => {
    const t = 46
    const h = (v) => (v / 100) * t
    return (
      <g>
        <rect x={x} y={158 - h(ep)} width="9" height={h(ep)} rx="1.5" fill={r} fillOpacity="0.85" />
        <rect x={x + 11} y={158 - h(ek)} width="9" height={h(ek)} rx="1.5" fill={METIN} opacity="0.7" />
        {isi > 0 ? <rect x={x + 22} y={158 - h(isi)} width="9" height={h(isi)} rx="1.5" fill={SOLUK} opacity="0.65" /> : null}
      </g>
    )
  }
  return (
    <>
      <path d={yol} fill="none" stroke={CIZGI} strokeWidth="2.6" strokeLinecap="round" />
      <path d={`${yol} L300 160 L22 160 Z`} fill={CIZGI} fillOpacity="0.12" />

      {/* Tren, tepe noktasında */}
      <g transform="translate(22 40)">
        <rect x="-11" y="-11" width="22" height="12" rx="3" fill={r} fillOpacity="0.4" stroke={r} strokeWidth="1.5" />
        <circle cx="-6" cy="2" r="2.6" fill={r} />
        <circle cx="6" cy="2" r="2.6" fill={r} />
      </g>

      {/* Üç konumda enerji sütunları — toplam her yerde eşit */}
      {sutun(38, 100, 0, 0)}
      {sutun(112, 18, 76, 6)}
      {sutun(266, 62, 26, 12)}

      <Etiket x={52} y={36} renk={r} boyut={8.5}>Ep</Etiket>
      <Etiket x={128} y={100} renk={METIN} boyut={8.5}>Ek</Etiket>
      <Etiket x={282} y={56} renk={SOLUK} boyut={8}>ısı</Etiket>
      <Etiket x={160} y={164} renk={SOLUK} boyut={8.5}>Ep + Ek + ısı = sabit</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   7) ISI — ısınma eğrisi (hâl değişiminde sıcaklık sabit) + termometre
   ══════════════════════════════════════════════════════════════════ */
function SahneIsi({ r }) {
  return (
    <>
      {/* Eksenler */}
      <line x1="76" y1="140" x2="302" y2="140" stroke={CIZGI} strokeWidth="1.3" />
      <line x1="76" y1="140" x2="76" y2="28" stroke={CIZGI} strokeWidth="1.3" />
      <Etiket x={70} y={30} renk={METIN} boyut={8.5} hiza="end">T</Etiket>
      <Etiket x={302} y={154} renk={METIN} boyut={8.5} hiza="end">verilen ısı</Etiket>

      {/* Isınma eğrisi: eğik – düz – eğik – düz – eğik */}
      <path
        d="M76 124 L108 104 L152 104 L184 72 L246 72 L286 44"
        fill="none" stroke={r} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Platolar vurgulanır */}
      <line x1="108" y1="104" x2="152" y2="104" stroke={r} strokeWidth="5" opacity="0.28" strokeLinecap="round" />
      <line x1="184" y1="72" x2="246" y2="72" stroke={r} strokeWidth="5" opacity="0.28" strokeLinecap="round" />
      <line x1="76" y1="104" x2="108" y2="104" stroke={SOLUK} strokeWidth="0.8" strokeDasharray="3 2" />
      <line x1="76" y1="72" x2="184" y2="72" stroke={SOLUK} strokeWidth="0.8" strokeDasharray="3 2" />
      <Etiket x={130} y={98} renk={r} boyut={8}>erime</Etiket>
      <Etiket x={215} y={66} renk={r} boyut={8}>kaynama</Etiket>
      <Etiket x={215} y={90} renk={SOLUK} boyut={7.5}>sıcaklık sabit</Etiket>

      {/* Termometre */}
      <rect x="30" y="34" width="14" height="90" rx="7" fill="none" stroke={CIZGI} strokeWidth="1.4" />
      <circle cx="37" cy="132" r="12" fill={r} fillOpacity="0.5" stroke={r} strokeWidth="1.5" />
      <rect x="33.5" y="72" width="7" height="56" fill={r} fillOpacity="0.7" />
      {[46, 60, 74, 88, 102].map((y) => (
        <line key={y} x1="44" y1={y} x2="50" y2={y} stroke={SOLUK} strokeWidth="0.9" />
      ))}
      <Etiket x={37} y={26} renk={METIN} boyut={8.5}>°C</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   8) BASINÇ — derinlikle artan basınç, yüzme ve batma
   ══════════════════════════════════════════════════════════════════ */
function SahneBasinc({ r }) {
  const suUst = 58
  return (
    <>
      {/* Kap ve sıvı */}
      <path d="M20 30 L20 150 L164 150 L164 30" fill="none" stroke={CIZGI} strokeWidth="1.6" />
      <rect x="20" y={suUst} width="144" height={150 - suUst} fill={r} fillOpacity="0.2" />
      <line x1="20" y1={suUst} x2="164" y2={suUst} stroke={r} strokeWidth="1.8" />

      {/* Yüzen cisim: batan hacim oranı = d_cisim / d_sıvı */}
      <rect x="38" y={suUst - 9} width="38" height="26" rx="3" fill={ZEMIN} stroke={METIN} strokeWidth="1.4" />
      <rect x="38" y={suUst} width="38" height="17" fill={METIN} opacity="0.18" />
      <Ok x1={57} y1={96} x2={57} y2={78} renk={r} kalinlik={2} />
      <Etiket x={57} y={108} renk={r} boyut={8.5}>Fk</Etiket>

      {/* Batan cisim: Fk < G */}
      <rect x="112" y="106" width="28" height="26" rx="3" fill={METIN} opacity="0.35" stroke={METIN} strokeWidth="1.3" />
      <Ok x1={126} y1={106} x2={126} y2={88} renk={r} kalinlik={1.8} />
      <Ok x1={126} y1={132} x2={126} y2={148} renk={METIN} kalinlik={1.8} />
      <Etiket x={126} y={84} renk={r} boyut={8}>Fk</Etiket>

      {/* Derinlikle artan basınç — iç duvarda büyüyen oklar */}
      {[82, 102, 122, 142].map((y, i) => (
        <Ok key={y} x1={160} y1={y} x2={160 - (11 + i * 8)} y2={y} renk={r} kalinlik={1.5} opaklik={0.85} />
      ))}
      <line x1="94" y1={suUst} x2="94" y2="142" stroke={SOLUK} strokeWidth="0.9" strokeDasharray="3 2" />
      <Etiket x={88} y={104} renk={SOLUK} boyut={8.5} hiza="end">h</Etiket>
      <Etiket x={92} y={166} renk={SOLUK} boyut={8.5}>P = h·d·g</Etiket>

      {/* Hidrolik pres: kuvvet kazancı var, iş kazancı yok */}
      <path d="M200 104 L200 134 L284 134 L284 78" fill="none" stroke={CIZGI} strokeWidth="1.5" />
      <path d="M200 104 L200 134 L284 134 L284 78 L262 78 L262 118 L218 118 L218 104 Z" fill={r} fillOpacity="0.2" />
      <rect x="198" y="96" width="22" height="9" rx="2" fill={r} fillOpacity="0.6" stroke={r} strokeWidth="1.2" />
      <rect x="260" y="70" width="40" height="9" rx="2" fill={r} fillOpacity="0.6" stroke={r} strokeWidth="1.2" />
      <Ok x1={209} y1={74} x2={209} y2={93} renk={METIN} kalinlik={1.7} />
      <Ok x1={280} y1={48} x2={280} y2={66} renk={METIN} kalinlik={2.6} />
      <Etiket x={209} y={68} renk={METIN} boyut={8.5}>F₁</Etiket>
      <Etiket x={280} y={42} renk={METIN} boyut={8.5}>F₂</Etiket>
      <Etiket x={244} y={152} renk={SOLUK} boyut={8.5}>P₁ = P₂</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   9) ELEKTROSTATİK — iki zıt yük ve alan çizgileri
   ══════════════════════════════════════════════════════════════════ */
function SahneElektrostatik({ r }) {
  const sol = { x: 96, y: 88 }
  const sag = { x: 220, y: 88 }
  const yaricap = 16
  // Yüklerin arasından geçen çizgiler: alan artıdan çıkar, eksiye girer.
  const araCizgiler = [-64, -38, -16, 0, 16, 38, 64]
  // Yüklerin üstünden ve altından dolanan uzak alan çizgileri.
  const disCizgiler = [
    { d: `M ${sol.x - 4} ${sol.y - 15} C 48 8, 268 8, ${sag.x + 4} ${sag.y - 15}`, oky: 30 },
    { d: `M ${sol.x - 4} ${sol.y + 15} C 48 168, 268 168, ${sag.x + 4} ${sag.y + 15}`, oky: 146 },
  ]
  return (
    <>
      {araCizgiler.map((k) => (
        <path
          key={k}
          d={`M ${sol.x + yaricap} ${sol.y} Q 158 ${sol.y + k} ${sag.x - yaricap} ${sag.y}`}
          fill="none" stroke={r} strokeWidth={k === 0 ? 1.7 : 1.2} opacity={k === 0 ? 0.9 : 0.5}
        />
      ))}
      {araCizgiler.map((k) => (
        <Ok key={`ok${k}`} x1={150} y1={sol.y + k / 2} x2={166} y2={sol.y + k / 2} renk={r} kalinlik={1.2} opaklik={0.75} />
      ))}
      {disCizgiler.map((c) => (
        <g key={c.oky}>
          <path d={c.d} fill="none" stroke={r} strokeWidth="1.1" opacity="0.4" />
          <Ok x1={150} y1={c.oky} x2={166} y2={c.oky} renk={r} kalinlik={1.1} opaklik={0.6} />
        </g>
      ))}

      {/* Artı yük */}
      <circle cx={sol.x} cy={sol.y} r={yaricap} fill={r} fillOpacity="0.3" stroke={r} strokeWidth="1.9" />
      <line x1={sol.x - 7} y1={sol.y} x2={sol.x + 7} y2={sol.y} stroke={r} strokeWidth="2.4" />
      <line x1={sol.x} y1={sol.y - 7} x2={sol.x} y2={sol.y + 7} stroke={r} strokeWidth="2.4" />

      {/* Eksi yük */}
      <circle cx={sag.x} cy={sag.y} r={yaricap} fill={METIN} fillOpacity="0.18" stroke={METIN} strokeWidth="1.9" />
      <line x1={sag.x - 7} y1={sag.y} x2={sag.x + 7} y2={sag.y} stroke={METIN} strokeWidth="2.4" />

      {/* Coulomb kuvveti — zıt yükler birbirini çeker */}
      <Ok x1={sol.x + 26} y1={54} x2={sol.x + 50} y2={54} renk={METIN} kalinlik={1.8} />
      <Ok x1={sag.x - 26} y1={54} x2={sag.x - 50} y2={54} renk={METIN} kalinlik={1.8} />
      <Etiket x={158} y={48} renk={METIN} boyut={9}>F</Etiket>

      {/* Uzaklık */}
      <line x1={sol.x} y1={122} x2={sag.x} y2={122} stroke={SOLUK} strokeWidth="1" strokeDasharray="3 2" />
      <line x1={sol.x} y1={118} x2={sol.x} y2={126} stroke={SOLUK} strokeWidth="1.2" />
      <line x1={sag.x} y1={118} x2={sag.x} y2={126} stroke={SOLUK} strokeWidth="1.2" />
      <Etiket x={158} y={118} renk={SOLUK} boyut={8.5}>d</Etiket>
      <Etiket x={158} y={162} renk={SOLUK} boyut={8.5}>F = k·q₁·q₂ / d²</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   10) DEVRELER — seri + paralel şema, ampermetre ve voltmetre
   ══════════════════════════════════════════════════════════════════ */
function SahneDevreler({ r }) {
  const direnc = (x, y, w = 34) => (
    <path
      d={`M${x} ${y} l4 -7 l6 14 l6 -14 l6 14 l6 -14 l4 7 h${w - 32}`}
      fill="none" stroke={r} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"
    />
  )
  return (
    <>
      {/* Ana çerçeve — üst rayın ortası paralel kola ayrılıyor */}
      <path d="M40 56 H132 M188 56 H280 M280 56 V136 M280 136 H40 M40 136 V56"
        fill="none" stroke={CIZGI} strokeWidth="1.8" strokeLinecap="round" />

      {/* Pil */}
      <path d="M40 56 V84 M40 110 V136" fill="none" stroke={CIZGI} strokeWidth="1.8" />
      <g transform="translate(40 97)">
        <line x1="-10" y1="-13" x2="10" y2="-13" stroke={METIN} strokeWidth="2.6" />
        <line x1="-5" y1="-4" x2="5" y2="-4" stroke={METIN} strokeWidth="1.6" />
        <line x1="-10" y1="5" x2="10" y2="5" stroke={METIN} strokeWidth="2.6" />
        <line x1="-5" y1="14" x2="5" y2="14" stroke={METIN} strokeWidth="1.6" />
      </g>
      <Etiket x={22} y={100} renk={METIN} boyut={9.5}>V</Etiket>

      {/* Seri direnç */}
      {direnc(68, 56, 40)}
      <Etiket x={88} y={44} renk={r} boyut={8.5}>R₁</Etiket>

      {/* Paralel kol — iki dal, ana rayın altında ve üstünde */}
      <path d="M132 56 V88 H188 V56 M132 56 V26 H188 V56" fill="none" stroke={CIZGI} strokeWidth="1.8" />
      {direnc(142, 26, 36)}
      {direnc(142, 88, 36)}
      <Etiket x={160} y={17} renk={r} boyut={8.5}>R₂</Etiket>
      <Etiket x={160} y={104} renk={r} boyut={8.5}>R₃</Etiket>

      {/* Ampermetre — devreye seri */}
      <circle cx="280" cy="97" r="13" fill={ZEMIN} stroke={METIN} strokeWidth="1.6" />
      <Etiket x={280} y={101} renk={METIN} boyut={10}>A</Etiket>

      {/* Ampul */}
      <circle cx="160" cy="136" r="14" fill={r} fillOpacity="0.28" stroke={r} strokeWidth="1.6" />
      <path d="M150 126 L170 146 M170 126 L150 146" stroke={r} strokeWidth="1.3" />

      {/* Akım yönü */}
      <Ok x1={222} y1={136} x2={202} y2={136} renk={METIN} kalinlik={1.8} />
      <Etiket x={238} y={132} renk={METIN} boyut={8.5}>I</Etiket>
      <Etiket x={300} y={162} renk={SOLUK} boyut={8.5} hiza="end">V = I·R</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   11) MANYETİZMA — çubuk mıknatıs alanı ve indüksiyon
   ══════════════════════════════════════════════════════════════════ */
function SahneManyetizma({ r }) {
  return (
    <>
      {/* Çubuk mıknatıs */}
      <rect x="60" y="74" width="34" height="24" fill={r} fillOpacity="0.45" stroke={r} strokeWidth="1.4" />
      <rect x="94" y="74" width="34" height="24" fill={METIN} fillOpacity="0.22" stroke={METIN} strokeWidth="1.4" />
      <Etiket x={77} y={91} renk={r} boyut={11}>N</Etiket>
      <Etiket x={111} y={91} renk={METIN} boyut={11}>S</Etiket>

      {/* Alan çizgileri: N'den çıkar, S'ye girer */}
      {[26, 44, 62].map((a, i) => (
        <g key={a}>
          <path
            d={`M60 ${86 - i * 2} C ${30 - i * 8} ${86 - a}, ${124 + i * 8} ${86 - a}, 128 ${86 - i * 2}`}
            fill="none" stroke={r} strokeWidth="1.2" opacity="0.6"
          />
          <path
            d={`M60 ${86 + i * 2} C ${30 - i * 8} ${86 + a}, ${124 + i * 8} ${86 + a}, 128 ${86 + i * 2}`}
            fill="none" stroke={r} strokeWidth="1.2" opacity="0.6"
          />
        </g>
      ))}

      {/* Bobin + galvanometre: mıknatıs yaklaşınca akım doğar */}
      <g stroke={METIN} strokeWidth="1.8" fill="none" strokeLinecap="round">
        {[0, 1, 2, 3].map((i) => (
          <ellipse key={i} cx={216 + i * 15} cy="88" rx="6" ry="26" />
        ))}
      </g>
      <path d="M212 114 L212 140 L292 140 L292 114" fill="none" stroke={CIZGI} strokeWidth="1.6" />
      <circle cx="252" cy="140" r="12" fill={ZEMIN} stroke={METIN} strokeWidth="1.5" />
      <line x1="252" y1="140" x2="259" y2="132" stroke={r} strokeWidth="1.8" strokeLinecap="round" />
      <Etiket x={252} y={162} renk={SOLUK} boyut={8}>indüksiyon akımı</Etiket>

      <Ok x1={148} y1={62} x2={196} y2={62} renk={METIN} kalinlik={2} />
      <Etiket x={172} y={54} renk={METIN} boyut={8.5}>hareket</Etiket>
      <Etiket x={94} y={130} renk={SOLUK} boyut={8.5}>B</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   12) DALGALAR — genlik, dalga boyu ve girişim
   ══════════════════════════════════════════════════════════════════ */
function SahneDalgalar({ r }) {
  const eksen = 92
  const genlik = 30
  const dalgaBoyu = 72
  const nokta = (x) => eksen - genlik * Math.sin((2 * Math.PI * (x - 26)) / dalgaBoyu)
  const yol = Array.from({ length: 121 }, (_, i) => {
    const x = 26 + (i / 120) * 268
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${nokta(x).toFixed(1)}`
  }).join(' ')
  // İkinci dalga: yarım dalga boyu kaymış (zıt fazlı) — girişim örneği
  const yol2 = Array.from({ length: 121 }, (_, i) => {
    const x = 26 + (i / 120) * 268
    const y = eksen - genlik * 0.5 * Math.sin((2 * Math.PI * (x - 26)) / dalgaBoyu + Math.PI)
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
  return (
    <>
      <line x1="20" y1={eksen} x2="302" y2={eksen} stroke={CIZGI} strokeWidth="1.2" strokeDasharray="4 3" />
      <path d={yol2} fill="none" stroke={SOLUK} strokeWidth="1.6" opacity="0.65" />
      <path d={yol} fill="none" stroke={r} strokeWidth="2.6" strokeLinecap="round" />

      {/* Genlik ölçüsü */}
      <line x1="44" y1={eksen} x2="44" y2={eksen - genlik} stroke={METIN} strokeWidth="1" strokeDasharray="3 2" />
      <line x1="40" y1={eksen - genlik} x2="48" y2={eksen - genlik} stroke={METIN} strokeWidth="1.2" />
      <Etiket x={54} y={eksen - genlik + 4} renk={METIN} boyut={8.5} hiza="start">genlik</Etiket>

      {/* Dalga boyu ölçüsü: tepe → tepe */}
      <line x1="44" y1="36" x2={44 + dalgaBoyu} y2="36" stroke={r} strokeWidth="1.2" />
      <line x1="44" y1="32" x2="44" y2="40" stroke={r} strokeWidth="1.4" />
      <line x1={44 + dalgaBoyu} y1="32" x2={44 + dalgaBoyu} y2="40" stroke={r} strokeWidth="1.4" />
      <Etiket x={44 + dalgaBoyu / 2} y="28" renk={r} boyut={9}>λ</Etiket>

      <Etiket x={20} y={158} renk={SOLUK} boyut={8.5} hiza="start">v = λ · f</Etiket>
      <Etiket x={302} y={158} renk={SOLUK} boyut={8.5} hiza="end">üst üste binme</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   13) OPTİK — prizmada ayrışma ve ince kenarlı mercek
   ══════════════════════════════════════════════════════════════════ */
function SahneOptik({ r }) {
  const tayf = ['#ef4444', '#f97316', '#facc15', '#4ade80', '#38bdf8', '#818cf8', '#c084fc']
  return (
    <>
      {/* Beyaz ışın */}
      <line x1="18" y1="62" x2="62" y2="72" stroke={r} strokeWidth="2.4" strokeLinecap="round" />

      {/* Prizma */}
      <path d="M86 34 L118 96 L54 96 Z" fill={r} fillOpacity="0.16" stroke={r} strokeWidth="1.6" strokeLinejoin="round" />

      {/* Ayrışan tayf — kısa dalga boyu daha çok sapar */}
      {tayf.map((renk, i) => (
        <line
          key={renk}
          x1="100" y1="80"
          x2="164" y2={62 + i * 7}
          stroke={renk} strokeWidth="2" strokeLinecap="round" opacity="0.9"
        />
      ))}
      <Etiket x={140} y={124} renk={SOLUK} boyut={8}>mor en çok sapar</Etiket>

      {/* İnce kenarlı mercek */}
      <path d="M232 34 Q248 88 232 142 Q216 88 232 34 Z" fill={r} fillOpacity="0.2" stroke={r} strokeWidth="1.6" />
      <line x1="186" y1="88" x2="308" y2="88" stroke={CIZGI} strokeWidth="1" strokeDasharray="4 3" />

      {/* Işınlar: eksene paralel gelen ışın odaktan geçer */}
      <line x1="186" y1="54" x2="232" y2="54" stroke={METIN} strokeWidth="1.6" />
      <line x1="232" y1="54" x2="300" y2="88" stroke={METIN} strokeWidth="1.6" />
      <line x1="186" y1="122" x2="232" y2="122" stroke={METIN} strokeWidth="1.6" />
      <line x1="232" y1="122" x2="300" y2="88" stroke={METIN} strokeWidth="1.6" />
      <circle cx="278" cy="88" r="3.2" fill={r} />
      <Etiket x={278} y={104} renk={r} boyut={8.5}>F</Etiket>
      <Etiket x={232} y={158} renk={SOLUK} boyut={8.5}>1/f = 1/d₀ + 1/dᵢ</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   Kayıt defteri
   ══════════════════════════════════════════════════════════════════ */
const SAHNELER = {
  olcme: { ciz: SahneOlcme, anlat: 'Cetvel, kronometre ve terazi; ölçümün yanında ±0,5 mm belirsizlik aralığı.' },
  vektorler: { ciz: SahneVektorler, anlat: 'İki vektör, paralelkenar yöntemiyle bulunan bileşke ve bileşkenin dik bileşenleri.' },
  madde: { ciz: SahneMadde, anlat: 'Dereceli silindir, farklı çapta iki kılcal boru — ince boruda sıvı daha yükseğe çıkıyor — ve yüzey gerilimiyle duran damla.' },
  'kuvvet-hareket': { ciz: SahneHareket, anlat: 'Eğik düzlemdeki bloğun serbest cisim diyagramı ve yanında hız–zaman grafiği; eğim ivmeyi, alan yer değiştirmeyi veriyor.' },
  atislar: { ciz: SahneAtislar, anlat: 'Eğik atış yörüngesi; yatay hız her noktada aynı, düşey hız tepe noktasında sıfır, ivme her yerde aşağı doğru g.' },
  enerji: { ciz: SahneEnerji, anlat: 'Lunapark treni parkuru ve üç konumda potansiyel, kinetik ve ısı enerjisi sütunları; toplam her yerde eşit.' },
  isi: { ciz: SahneIsi, anlat: 'Isınma eğrisi; erime ve kaynama sırasında sıcaklığın sabit kaldığı düz platolar ve termometre.' },
  basinc: { ciz: SahneBasinc, anlat: 'Derinlikle artan sıvı basıncı, yüzen ve batan cisimlerde kaldırma kuvveti, hidrolik pres.' },
  elektrostatik: { ciz: SahneElektrostatik, anlat: 'Zıt işaretli iki nokta yük, artıdan eksiye giden elektrik alan çizgileri ve çekme kuvveti.' },
  devreler: { ciz: SahneDevreler, anlat: 'Pil, seri bağlı direnç, paralel bağlı iki direnç, ampul ve devreye seri bağlanmış ampermetre.' },
  manyetizma: { ciz: SahneManyetizma, anlat: 'Çubuk mıknatısın alan çizgileri ve mıknatıs yaklaştıkça bobinde doğan indüksiyon akımı.' },
  dalgalar: { ciz: SahneDalgalar, anlat: 'Genliği ve dalga boyu işaretlenmiş periyodik dalga ile üzerine binen ikinci bir dalga.' },
  optik: { ciz: SahneOptik, anlat: 'Prizmada beyaz ışığın renklerine ayrılması ve ince kenarlı mercekte paralel ışınların odakta toplanması.' },
}

/**
 * Bölge sahnesi.
 *
 * @param {string} kod    Bölge kodu (BOLGELER içindeki `kod`).
 * @param {string} renk   Bölgenin rengi.
 * @param {string} sinif  Ek CSS sınıfı.
 */
export default function BolgeSahnesi({ kod, renk, sinif = '' }) {
  const sahne = SAHNELER[kod]
  if (!sahne) return null
  const Ciz = sahne.ciz
  return (
    <svg
      className={`fa-bolge-cizim ${sinif}`.trim()}
      viewBox={`0 0 ${G} ${Y}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={sahne.anlat}
    >
      <title>{sahne.anlat}</title>
      <Izgara ad={kod} />
      <Ciz r={renk} />
    </svg>
  )
}

/** Bir bölgenin sahnesi var mı? */
export const sahneVarMi = (kod) => Boolean(SAHNELER[kod])

/** Sahne açıklaması — kart alt yazısı ya da test için. */
export const sahneAnlatimi = (kod) => SAHNELER[kod]?.anlat ?? null

export { SAHNELER }
