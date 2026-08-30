/**
 * Coğrafya Atlası — Bölge Çizimleri
 * ==================================================================
 * On üç bölgenin her biri için elle çizilmiş SVG sahnesi.
 *
 * Neden: Tarih Atlasında (Padişah Geçidi) her hükümdarın bir portresi
 * var; öğrenci listeye baktığında kimin kim olduğunu resimden çıkarıyor.
 * Coğrafya Atlasında bölgeler yalnızca renkli nokta + metindi, hepsi
 * birbirine benziyordu. Fizik Atlasındaki bölge çizimleriyle aynı
 * mantık buraya taşındı.
 *
 * KURAL — bunlar süs değil, **küçültülmüş ders şeması**:
 *   · Her çizim o bölgenin ana ilişkisini doğru gösterir
 *     (izohipsler sıklaştıkça eğim artar, eksen eğikliği 23°27',
 *      boylam farkı 15° = 1 saat, dış kuvvet aşındırır–taşır–biriktirir…).
 *   · Renk yalnızca bölgenin kendi rengidir; kalan her şey temayla
 *     değişen nötr değişkenlerden gelir, açık temada da okunur kalır.
 *   · Ölçü ve etiketler Türkçedir.
 *
 * Ekran okuyucular için her çizim `role="img"` ve resmin ne anlattığını
 * söyleyen bir `<title>` taşır.
 */

const G = 320   // çizim genişliği
const Y = 168   // çizim yüksekliği

/* Temayla değişen nötr renkler — on üç çizimin ortak paleti. */
const METIN = 'var(--ca-yazi)'
const SOLUK = 'var(--ca-soluk)'
const CIZGI = 'var(--ca-cizgi)'
const ZEMIN = 'var(--ca-yuzey2)'
const YAZI_TIPI = 'ui-sans-serif, system-ui, "DM Sans", sans-serif'

/** Harita karesi dokusu — on üç çizimi aynı aileden gösteren ortak zemin. */
function Izgara({ ad }) {
  return (
    <>
      <defs>
        <pattern id={`ca-kagit-${ad}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M16 0 L0 0 0 16" fill="none" stroke={SOLUK} strokeWidth="0.5" opacity="0.16" />
        </pattern>
      </defs>
      <rect x="0" y="0" width={G} height={Y} fill={ZEMIN} />
      <rect x="0" y="0" width={G} height={Y} fill={`url(#ca-kagit-${ad})`} />
    </>
  )
}

/** Ok başlı çizgi — akış, kuvvet ve yön oku olarak kullanılır. */
function Ok({ x1, y1, x2, y2, renk = SOLUK, kalinlik = 1.6, kesikli = false, opaklik = 1, bas = 6.5 }) {
  const dx = x2 - x1
  const dy = y2 - y1
  const boy = Math.hypot(dx, dy) || 1
  const bx = dx / boy
  const by = dy / boy
  const b = Math.min(bas, boy * 0.36)
  const gx = x2 - bx * b
  const gy = y2 - by * b
  return (
    <g opacity={opaklik}>
      <line
        x1={x1} y1={y1} x2={gx} y2={gy}
        stroke={renk} strokeWidth={kalinlik} strokeLinecap="round"
        strokeDasharray={kesikli ? '4 3' : undefined}
      />
      <polygon
        points={`${x2},${y2} ${gx - by * b * 0.55},${gy + bx * b * 0.55} ${gx + by * b * 0.55},${gy - bx * b * 0.55}`}
        fill={renk}
      />
    </g>
  )
}

/** Eğri ok — döngü ve geri etki oklarında. */
function EgriOk({ d, renk = SOLUK, kalinlik = 1.5, kesikli = false, ucX, ucY, aci = 0 }) {
  return (
    <g>
      <path d={d} fill="none" stroke={renk} strokeWidth={kalinlik} strokeLinecap="round" strokeDasharray={kesikli ? '4 3' : undefined} />
      <polygon points="0,-3.4 7,0 0,3.4" fill={renk} transform={`translate(${ucX} ${ucY}) rotate(${aci})`} />
    </g>
  )
}

/** Çizim içi etiket. */
function Etiket({ x, y, children, renk = METIN, boyut = 8.5, kalin = true, hiza = 'middle', opaklik = 1 }) {
  return (
    <text
      x={x} y={y} fontSize={boyut} fontWeight={kalin ? 700 : 500}
      fill={renk} textAnchor={hiza} opacity={opaklik}
      fontFamily={YAZI_TIPI} letterSpacing="0.02em"
    >
      {children}
    </text>
  )
}

/** Küçük çerçeveli başlık — çizimi ikiye bölen bölüm adları için. */
function Bolum({ x, y, children, renk = SOLUK }) {
  return (
    <text x={x} y={y} fontSize="7.5" fontWeight="800" fill={renk} textAnchor="start"
      fontFamily={YAZI_TIPI} letterSpacing="0.14em">{children}</text>
  )
}

/* ══════════════════════════════════════════════════════════════════
   1) DÜNYA SİSTEMLERİ — dört küre ve insan kararının geri etkisi
   ══════════════════════════════════════════════════════════════════ */
function SahneSistemler({ r }) {
  return (
    <>
      <Bolum x={12} y={20}>DÖRT KÜRE</Bolum>

      {/* Atmosfer bandı */}
      <rect x="10" y="26" width="176" height="42" rx="4" fill={r} fillOpacity="0.07" stroke={r} strokeOpacity="0.32" strokeWidth="0.9" />
      <path d="M30 46 q7 -9 16 -3 q9 -8 17 3 q9 1 6 8 H28 q-4 -6 2 -8 Z" fill={SOLUK} opacity="0.32" />
      <path d="M118 42 q8 -10 18 -3 q10 -8 18 4 q9 2 5 9 H116 q-5 -7 2 -10 Z" fill={SOLUK} opacity="0.24" />
      <Etiket x={178} y={38} renk={r} boyut={7.5} hiza="end">ATMOSFER</Etiket>

      {/* Hidrosfer — deniz */}
      <path d="M10 68 H86 V116 H10 Z" fill={r} fillOpacity="0.15" />
      <path d="M12 76 q9 -4 18 0 t18 0 t18 0 t18 0" fill="none" stroke={r} strokeWidth="1" opacity="0.7" />
      <path d="M12 86 q9 -4 18 0 t18 0 t18 0 t18 0" fill="none" stroke={r} strokeWidth="0.8" opacity="0.45" />
      <Etiket x={46} y={104} renk={r} boyut={7.5}>HİDROSFER</Etiket>

      {/* Litosfer — kara ve yer altı */}
      <path d="M86 68 q22 -12 44 2 q26 14 56 -4 v50 H86 Z" fill={SOLUK} opacity="0.2" />
      <path d="M10 116 H186 V158 H10 Z" fill={SOLUK} opacity="0.13" />
      <path d="M10 128 H186 M10 142 H186" stroke={SOLUK} strokeWidth="0.7" opacity="0.4" />
      <Etiket x={134} y={140} renk={SOLUK} boyut={7.5}>LİTOSFER</Etiket>

      {/* Biyosfer — ince yaşam kuşağı */}
      <g stroke={r} strokeWidth="1.3" strokeLinecap="round" fill="none">
        <path d="M104 78 v-11 M104 70 l-5 -5 M104 72 l5 -5" />
        <path d="M132 74 v-11 M132 66 l-5 -5 M132 68 l5 -5" />
        <path d="M160 76 v-11 M160 68 l-5 -5 M160 70 l5 -5" />
      </g>
      <Etiket x={132} y={92} renk={r} boyut={7.5}>BİYOSFER</Etiket>

      {/* Küreler arası su döngüsü — kürelerin ayrı değil bağlı olduğu kanıtı */}
      <Ok x1={40} y1={72} x2={40} y2={54} renk={r} kalinlik={1.2} opaklik={0.9} bas={5} />
      <Ok x1={140} y1={50} x2={140} y2={64} renk={r} kalinlik={1.2} opaklik={0.9} bas={5} />
      <Ok x1={92} y1={78} x2={70} y2={82} renk={r} kalinlik={1.2} opaklik={0.75} bas={5} />

      {/* Ayraç */}
      <line x1="196" y1="18" x2="196" y2="152" stroke={CIZGI} strokeWidth="1" strokeDasharray="3 4" />

      {/* Geri etki döngüsü */}
      <Bolum x={206} y={20}>GERİ ETKİ</Bolum>
      <g>
        <rect x="222" y="30" width="80" height="24" rx="6" fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.5" strokeWidth="0.9" />
        <Etiket x={262} y={45} renk={METIN} boyut={8}>Doğal koşul</Etiket>

        <rect x="246" y="76" width="66" height="24" rx="6" fill={r} fillOpacity="0.16" stroke={r} strokeWidth="1" />
        <Etiket x={279} y={91} renk={r} boyut={8}>İnsan kararı</Etiket>

        <rect x="206" y="122" width="80" height="24" rx="6" fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.5" strokeWidth="0.9" />
        <Etiket x={246} y={137} renk={METIN} boyut={8}>Yeni sonuç</Etiket>
      </g>
      <EgriOk d="M296 54 q14 10 -1 22" renk={SOLUK} ucX={293} ucY={74} aci={125} />
      <EgriOk d="M258 100 q-8 12 -8 20" renk={SOLUK} ucX={250} ucY={120} aci={98} />
      <EgriOk d="M208 122 q-8 -44 12 -66" renk={r} kesikli ucX={222} ucY={54} aci={-52} />
      <Etiket x={200} y={92} renk={r} boyut={7} hiza="start" opaklik={0.9}>geri</Etiket>
      <Etiket x={200} y={101} renk={r} boyut={7} hiza="start" opaklik={0.9}>besleme</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   2) GEZEGEN SAATİ — eksen eğikliği, paralel ışın, aydınlanma çemberi
   ══════════════════════════════════════════════════════════════════ */
function SahneGezegen({ r }) {
  const cx = 236
  const cy = 86
  const R = 50
  return (
    <>
      {/* Güneş */}
      <circle cx="30" cy="86" r="17" fill={r} fillOpacity="0.75" />
      <g stroke={r} strokeWidth="1.3" strokeLinecap="round" opacity="0.7">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
          const t = (a * Math.PI) / 180
          return <line key={a} x1={30 + Math.cos(t) * 21} y1={86 + Math.sin(t) * 21} x2={30 + Math.cos(t) * 27} y2={86 + Math.sin(t) * 27} />
        })}
      </g>
      <Etiket x={30} y={132} renk={r} boyut={8}>Güneş</Etiket>

      {/* Paralel gelen ışınlar */}
      {[52, 74, 96, 120].map((y, i) => (
        <Ok key={y} x1={62} y1={y} x2={cy === y ? 178 : 172} y2={y} renk={r} kalinlik={1.1} opaklik={0.55 + i * 0.05} bas={5} />
      ))}
      <Etiket x={118} y={40} renk={SOLUK} boyut={7.5}>ışınlar paralel gelir</Etiket>

      {/* Dünya */}
      <circle cx={cx} cy={cy} r={R} fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.55" strokeWidth="1.1" />
      {/* Gece yarısı — aydınlanma çemberinin sağı */}
      <path d={`M ${cx} ${cy - R} A ${R} ${R} 0 0 1 ${cx} ${cy + R} Z`} fill={SOLUK} opacity="0.3" />
      {/* Aydınlanma çemberi */}
      <line x1={cx} y1={cy - R - 8} x2={cx} y2={cy + R + 8} stroke={r} strokeWidth="1.2" strokeDasharray="4 3" />

      {/* Eksen: kuzey kutbu Güneş'e doğru eğik (21 Haziran) */}
      <g transform={`rotate(-23.5 ${cx} ${cy})`}>
        <line x1={cx} y1={cy - R - 13} x2={cx} y2={cy + R + 13} stroke={METIN} strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx={cx} cy={cy} rx={R} ry="12" fill="none" stroke={METIN} strokeWidth="1.2" opacity="0.85" />
        <ellipse cx={cx} cy={cy - 20} rx={R * 0.92} ry="10" fill="none" stroke={r} strokeWidth="1.1" />
        <ellipse cx={cx} cy={cy + 20} rx={R * 0.92} ry="10" fill="none" stroke={SOLUK} strokeWidth="0.9" strokeDasharray="3 3" opacity="0.8" />
      </g>
      {/* Dik ekseni ve eğikliği gösteren açı */}
      <line x1={cx} y1={cy - R - 13} x2={cx} y2={cy - R - 26} stroke={SOLUK} strokeWidth="0.9" strokeDasharray="3 3" />
      <path d={`M ${cx} ${cy - R - 18} a 18 18 0 0 0 -7.2 1.5`} fill="none" stroke={r} strokeWidth="1.1" />
      <Etiket x={cx - 36} y={cy - R - 20} renk={r} boyut={8.5} hiza="end">23°27′</Etiket>

      <Etiket x={cx + 4} y={cy + 6} renk={METIN} boyut={7.5} hiza="start" opaklik={0.9}>Ekvator</Etiket>
      <Etiket x={cx} y={cy + R + 24} renk={r} boyut={8}>21 Haziran · kuzeyde yaz</Etiket>
      <Etiket x={cx + R + 8} y={cy - 30} renk={SOLUK} boyut={7} hiza="end">gece</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   3) KONUM LABORATUVARI — enlem/boylam ağı ve yerel saat farkı
   ══════════════════════════════════════════════════════════════════ */
function SahneKonum({ r }) {
  const sol = 28
  const ust = 30
  const gen = 150
  const yuk = 112
  const dikey = [0, 1, 2, 3, 4, 5, 6].map((i) => sol + (gen / 6) * i)
  const yatay = [0, 1, 2, 3, 4].map((i) => ust + (yuk / 4) * i)
  return (
    <>
      <Bolum x={sol} y={20}>KOORDİNAT</Bolum>

      <rect x={sol} y={ust} width={gen} height={yuk} rx="5" fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.4" strokeWidth="0.9" />
      {dikey.map((x, i) => (
        <line key={`d${x}`} x1={x} y1={ust} x2={x} y2={ust + yuk}
          stroke={i === 3 ? r : SOLUK} strokeWidth={i === 3 ? 1.4 : 0.7} opacity={i === 3 ? 1 : 0.4} />
      ))}
      {yatay.map((y, i) => (
        <line key={`y${y}`} x1={sol} y1={y} x2={sol + gen} y2={y}
          stroke={i === 2 ? r : SOLUK} strokeWidth={i === 2 ? 1.4 : 0.7} opacity={i === 2 ? 1 : 0.4} />
      ))}
      <Etiket x={dikey[3] + 4} y={ust - 5} renk={r} boyut={7} hiza="start">0° boylam</Etiket>
      <Etiket x={sol - 4} y={yatay[2] + 3} renk={r} boyut={7} hiza="end">0°</Etiket>
      <Etiket x={sol - 4} y={yatay[1] + 3} renk={SOLUK} boyut={6.5} hiza="end">30°K</Etiket>

      {/* Aynı enlem, farklı boylam */}
      <circle cx={dikey[2]} cy={yatay[1]} r="4.6" fill={r} />
      <circle cx={dikey[4]} cy={yatay[1]} r="4.6" fill={METIN} opacity="0.75" />
      <Etiket x={dikey[2]} y={yatay[1] - 9} renk={r} boyut={8}>A</Etiket>
      <Etiket x={dikey[4]} y={yatay[1] - 9} renk={METIN} boyut={8}>B</Etiket>
      <path d={`M ${dikey[2]} ${yatay[1] + 12} H ${dikey[4]}`} stroke={r} strokeWidth="1" strokeDasharray="3 2" />
      <Etiket x={(dikey[2] + dikey[4]) / 2} y={yatay[1] + 23} renk={r} boyut={7.5}>Δ boylam 30°</Etiket>
      <Etiket x={(dikey[2] + dikey[4]) / 2} y={ust + yuk + 14} renk={SOLUK} boyut={7.5}>aynı enlem · aynı ışın açısı</Etiket>

      {/* Saatler */}
      <line x1="196" y1="18" x2="196" y2="152" stroke={CIZGI} strokeWidth="1" strokeDasharray="3 4" />
      <Bolum x={206} y={20}>YEREL SAAT</Bolum>
      {[{ x: 232, saat: 12, dk: 0, ad: 'A', renk: r }, { x: 288, saat: 14, dk: 0, ad: 'B', renk: METIN }].map((s) => {
        const acS = (s.saat % 12) * 30 - 90
        return (
          <g key={s.ad}>
            <circle cx={s.x} cy="66" r="21" fill={ZEMIN} stroke={s.renk} strokeWidth="1.2" strokeOpacity="0.8" />
            {[0, 3, 6, 9].map((i) => {
              const t = ((i * 30 - 90) * Math.PI) / 180
              return <line key={i} x1={s.x + Math.cos(t) * 16} y1={66 + Math.sin(t) * 16} x2={s.x + Math.cos(t) * 19} y2={66 + Math.sin(t) * 19} stroke={SOLUK} strokeWidth="1" />
            })}
            <line x1={s.x} y1="66" x2={s.x + Math.cos((acS * Math.PI) / 180) * 11} y2={66 + Math.sin((acS * Math.PI) / 180) * 11} stroke={s.renk} strokeWidth="1.8" strokeLinecap="round" />
            <line x1={s.x} y1="66" x2={s.x} y2="50" stroke={s.renk} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            <circle cx={s.x} cy="66" r="1.8" fill={s.renk} />
            <Etiket x={s.x} y="100" renk={s.renk} boyut={8}>{`${s.ad} · ${String(s.saat).padStart(2, '0')}.00`}</Etiket>
          </g>
        )
      })}
      <Ok x1={256} y1={66} x2={264} y2={66} renk={SOLUK} kalinlik={1.2} bas={5} />
      <rect x="206" y="112" width="106" height="34" rx="7" fill={r} fillOpacity="0.13" stroke={r} strokeWidth="1" />
      <Etiket x={259} y={126} renk={r} boyut={8.5}>15° = 1 saat</Etiket>
      <Etiket x={259} y={138} renk={SOLUK} boyut={7.5}>1° = 4 dakika</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   4) HARİTA ATÖLYESİ — izohips sıklığı ve topografik profil
   ══════════════════════════════════════════════════════════════════ */
function SahneHarita({ r }) {
  const halkalar = [
    { cx: 76, rx: 56, ry: 40, deger: '100' },
    { cx: 81, rx: 43, ry: 30, deger: '200' },
    { cx: 86, rx: 30, ry: 21, deger: '300' },
    { cx: 91, rx: 17, ry: 12, deger: '400' },
  ]
  /* Profil: solda seyrek izohips → yatık yamaç, sağda sık → dik yamaç. */
  const profil = 'M 190 142 L 200 134 L 210 122 L 222 106 L 234 84 L 244 60 L 252 76 L 258 98 L 264 118 L 272 132 L 300 140'
  return (
    <>
      <Bolum x={12} y={20}>İZOHİPS HARİTASI</Bolum>
      {halkalar.map((h, i) => (
        <g key={h.deger}>
          <ellipse cx={h.cx} cy="88" rx={h.rx} ry={h.ry} fill={i === 3 ? r : 'none'} fillOpacity={i === 3 ? 0.22 : 0}
            stroke={r} strokeWidth={i === 0 ? 1.4 : 1} strokeOpacity={0.5 + i * 0.14} />
          <text x={h.cx} y={88 - h.ry - 3.5} fontSize="7" fontWeight="700" fill={r} opacity="0.9"
            textAnchor="middle" fontFamily={YAZI_TIPI}>{h.deger}</text>
        </g>
      ))}
      {/* Kesit hattı */}
      <line x1="14" y1="88" x2="146" y2="88" stroke={METIN} strokeWidth="1.3" strokeDasharray="5 3" />
      <circle cx="14" cy="88" r="3.4" fill={METIN} />
      <circle cx="146" cy="88" r="3.4" fill={METIN} />
      <Etiket x={14} y={80} renk={METIN} boyut={8.5}>A</Etiket>
      <Etiket x={146} y={80} renk={METIN} boyut={8.5}>B</Etiket>
      <Etiket x={40} y={140} renk={SOLUK} boyut={7}>seyrek → yatık</Etiket>
      <Etiket x={126} y={140} renk={r} boyut={7}>sık → dik</Etiket>

      <line x1="166" y1="18" x2="166" y2="152" stroke={CIZGI} strokeWidth="1" strokeDasharray="3 4" />

      {/* Profil */}
      <Bolum x={182} y={20}>TOPOĞRAFİK PROFİL</Bolum>
      <line x1="184" y1="142" x2="308" y2="142" stroke={SOLUK} strokeWidth="1" opacity="0.7" />
      <line x1="184" y1="142" x2="184" y2="34" stroke={SOLUK} strokeWidth="1" opacity="0.7" />
      {[{ y: 128, e: '100' }, { y: 108, e: '200' }, { y: 84, e: '300' }, { y: 60, e: '400' }].map((k) => (
        <g key={k.e}>
          <line x1="184" y1={k.y} x2="308" y2={k.y} stroke={SOLUK} strokeWidth="0.6" strokeDasharray="2 3" opacity="0.45" />
          <text x="181" y={k.y + 3} fontSize="6.5" fontWeight="700" fill={SOLUK} textAnchor="end" fontFamily={YAZI_TIPI}>{k.e}</text>
        </g>
      ))}
      <path d={`${profil} L 300 142 L 190 142 Z`} fill={r} fillOpacity="0.16" />
      <path d={profil} fill="none" stroke={r} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="190" cy="142" r="3" fill={METIN} />
      <circle cx="300" cy="140" r="3" fill={METIN} />
      <Etiket x={190} y={154} renk={METIN} boyut={8}>A</Etiket>
      <Etiket x={300} y={154} renk={METIN} boyut={8}>B</Etiket>
      <Etiket x={246} y={46} renk={SOLUK} boyut={7}>aynı arazi · iki gösterim</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   5) ATMOSFER GÖZLEMEVİ — orografik yağış ve yağış gölgesi
   ══════════════════════════════════════════════════════════════════ */
function SahneIklim({ r }) {
  const aylar = [30, 26, 22, 14, 8, 4, 3, 5, 11, 20, 28, 33]
  const sicak = [6, 7, 10, 14, 19, 24, 27, 27, 23, 17, 11, 7]
  return (
    <>
      <Bolum x={12} y={18}>OROGRAFİK YAĞIŞ</Bolum>

      {/* Deniz */}
      <path d="M8 124 H62 V152 H8 Z" fill={r} fillOpacity="0.2" />
      <path d="M10 130 q8 -4 16 0 t16 0 t16 0" fill="none" stroke={r} strokeWidth="0.9" opacity="0.75" />
      <Etiket x={34} y={146} renk={r} boyut={7}>deniz</Etiket>

      {/* Dağ */}
      <path d="M62 152 L138 42 L214 152 Z" fill={SOLUK} opacity="0.22" />
      <path d="M62 152 L138 42 L214 152" fill="none" stroke={SOLUK} strokeWidth="1.2" strokeOpacity="0.7" strokeLinejoin="round" />
      <path d="M138 42 L124 62 L132 70 L120 84 L138 42 Z" fill={METIN} opacity="0.18" />

      {/* Yükselen nemli hava */}
      <Ok x1={58} y1={118} x2={84} y2={92} renk={r} kalinlik={1.5} bas={6} />
      <Ok x1={86} y1={96} x2={112} y2={70} renk={r} kalinlik={1.5} bas={6} />
      <Etiket x={62} y={104} renk={r} boyut={7} hiza="start">nemli hava</Etiket>

      {/* Bulut ve yağış — rüzgâr önü yamaç */}
      <path d="M96 58 q7 -13 19 -6 q10 -12 21 1 q12 0 8 12 q2 8 -8 8 H98 q-11 -1 -2 -15 Z" fill={r} fillOpacity="0.55" />
      {[104, 114, 124, 134].map((x, i) => (
        <line key={x} x1={x} y1={76 + i} x2={x - 5} y2={90 + i} stroke={r} strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
      ))}
      <Etiket x={110} y={117} renk={r} boyut={7.5}>yağış</Etiket>

      {/* Alçalan kuru hava — yağış gölgesi */}
      <Ok x1={158} y1={64} x2={188} y2={104} renk={SOLUK} kalinlik={1.5} bas={6} />
      <circle cx="196" cy="46" r="9" fill={SOLUK} opacity="0.4" />
      <g stroke={SOLUK} strokeWidth="1" opacity="0.4" strokeLinecap="round">
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const t = (a * Math.PI) / 180
          return <line key={a} x1={196 + Math.cos(t) * 12} y1={46 + Math.sin(t) * 12} x2={196 + Math.cos(t) * 16} y2={46 + Math.sin(t) * 16} />
        })}
      </g>
      <path d="M170 152 H214 M178 146 H210 M186 140 H206" stroke={SOLUK} strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      <Etiket x={192} y={124} renk={SOLUK} boyut={7}>yağış gölgesi</Etiket>
      <Etiket x={192} y={134} renk={SOLUK} boyut={7} opaklik={0.8}>alçalan hava ısınır</Etiket>

      <line x1="226" y1="16" x2="226" y2="154" stroke={CIZGI} strokeWidth="1" strokeDasharray="3 4" />

      {/* İklim grafiği */}
      <Bolum x={238} y={18}>İKLİM GRAFİĞİ</Bolum>
      <line x1="238" y1="130" x2="312" y2="130" stroke={SOLUK} strokeWidth="0.9" opacity="0.7" />
      {aylar.map((mm, i) => (
        <rect key={i} x={238 + i * 6.2} y={130 - mm * 1.9} width="4.4" height={mm * 1.9} rx="1" fill={r} fillOpacity="0.55" />
      ))}
      <path d={sicak.map((s, i) => `${i === 0 ? 'M' : 'L'} ${240 + i * 6.2} ${124 - s * 2.5}`).join(' ')}
        fill="none" stroke={METIN} strokeWidth="1.5" strokeLinejoin="round" />
      {sicak.map((s, i) => <circle key={i} cx={240 + i * 6.2} cy={124 - s * 2.5} r="1.3" fill={METIN} />)}
      <Etiket x={238} y={142} renk={r} boyut={6.5} hiza="start">mm</Etiket>
      <Etiket x={312} y={142} renk={METIN} boyut={6.5} hiza="end">°C</Etiket>
      <Etiket x={275} y={152} renk={SOLUK} boyut={7}>yaz kurak → Akdeniz</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   6) YERKÜRE DİNAMİKLERİ — iç kuvvet yapar, dış kuvvet biçimlendirir
   ══════════════════════════════════════════════════════════════════ */
function SahneYerkure({ r }) {
  return (
    <>
      <Bolum x={12} y={18} renk={r}>İÇ KUVVET · YAPAR</Bolum>

      {/* Okyanusal levha */}
      <path d="M8 96 H74 L108 138 L108 152 L8 152 Z" fill={SOLUK} opacity="0.24" />
      <path d="M8 96 H74 L108 138" fill="none" stroke={SOLUK} strokeWidth="1.2" strokeOpacity="0.75" />
      <path d="M8 88 H74 Q60 96 40 96 H8 Z" fill={r} fillOpacity="0.22" />
      <Etiket x={34} y={84} renk={r} boyut={7}>okyanus</Etiket>

      {/* Kıtasal levha */}
      <path d="M150 152 V92 q14 -16 30 -4 v64 Z" fill={SOLUK} opacity="0.3" />
      <path d="M78 152 V104 H150 V152 Z" fill={SOLUK} opacity="0.3" />
      <path d="M78 104 H150 q14 -16 30 -4 V152" fill="none" stroke={SOLUK} strokeWidth="1.2" strokeOpacity="0.75" />

      {/* Dalma-batma ve yaklaşan levha okları */}
      <Ok x1={30} y1={118} x2={62} y2={118} renk={r} kalinlik={1.6} bas={6} />
      <Ok x1={148} y1={130} x2={120} y2={130} renk={r} kalinlik={1.6} bas={6} />
      <path d="M74 96 L112 148" stroke={r} strokeWidth="1.4" strokeDasharray="4 3" />

      {/* Deprem odağı */}
      <g transform="translate(98 128)">
        <path d="M0 -7 L2 -2 L7 0 L2 2 L0 7 L-2 2 L-7 0 L-2 -2 Z" fill={r} />
      </g>
      <Etiket x={92} y={146} renk={r} boyut={7}>odak</Etiket>

      {/* Volkan */}
      <path d="M150 92 q14 -16 30 -4" fill="none" stroke={r} strokeWidth="1.4" />
      <path d="M158 86 q4 -14 12 -12" fill="none" stroke={r} strokeWidth="1.2" opacity="0.7" />
      <path d="M152 84 q10 -22 22 -14" fill="none" stroke={r} strokeWidth="1" opacity="0.45" />
      <Etiket x={172} y={74} renk={r} boyut={7} hiza="start">volkan</Etiket>

      <line x1="196" y1="16" x2="196" y2="154" stroke={CIZGI} strokeWidth="1" strokeDasharray="3 4" />

      {/* Dış kuvvet */}
      <Bolum x={206} y={18}>DIŞ KUVVET · BOZAR</Bolum>
      <path d="M204 152 L232 62 L256 108 L280 74 L312 152 Z" fill={SOLUK} opacity="0.2" />
      <path d="M204 152 L232 62 L256 108 L280 74 L312 152" fill="none" stroke={SOLUK} strokeWidth="1.1" strokeOpacity="0.7" strokeLinejoin="round" />
      {/* Vadi ve akarsu */}
      <path d="M244 84 Q252 110 250 126 Q248 140 262 148" fill="none" stroke={r} strokeWidth="2" strokeLinecap="round" />
      {/* Birikim yelpazesi */}
      <path d="M262 148 q22 -8 36 4 q-18 8 -36 -4 Z" fill={r} fillOpacity="0.45" />
      <Etiket x={228} y={92} renk={SOLUK} boyut={7} hiza="start">aşınım</Etiket>
      <Etiket x={238} y={124} renk={SOLUK} boyut={7} hiza="start">taşınım</Etiket>
      <Etiket x={292} y={140} renk={r} boyut={7}>birikim</Etiket>
      <Ok x1={222} y1={72} x2={236} y2={96} renk={SOLUK} kalinlik={1.1} opaklik={0.7} bas={5} />
      <Ok x1={264} y1={112} x2={276} y2={132} renk={SOLUK} kalinlik={1.1} opaklik={0.7} bas={5} />
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   7) YAŞAM KUŞAKLARI — havza, toprak profili ve bitki kuşağı
   ══════════════════════════════════════════════════════════════════ */
function SahneYasam({ r }) {
  const horizonlar = [
    { ad: 'O', y: 42, h: 12, o: 0.62, not: 'ölü örtü' },
    { ad: 'A', y: 54, h: 22, o: 0.46, not: 'humus' },
    { ad: 'B', y: 76, h: 26, o: 0.3, not: 'birikim' },
    { ad: 'C', y: 102, h: 22, o: 0.18, not: 'ayrışan' },
  ]
  return (
    <>
      <Bolum x={12} y={18}>HAVZA</Bolum>
      {/* Su bölümü çizgisi */}
      <path d="M14 42 Q46 26 78 44 Q104 58 128 40" fill="none" stroke={SOLUK} strokeWidth="1.2" strokeDasharray="5 3" opacity="0.85" />
      <Etiket x={70} y={34} renk={SOLUK} boyut={7}>su bölümü çizgisi</Etiket>

      {/* Kollar ve ana akarsu */}
      <g fill="none" stroke={r} strokeLinecap="round">
        <path d="M26 54 Q40 74 58 88" strokeWidth="1.2" />
        <path d="M52 52 Q56 74 62 88" strokeWidth="1.2" />
        <path d="M84 54 Q76 74 66 90" strokeWidth="1.2" />
        <path d="M112 50 Q96 78 74 96" strokeWidth="1.4" />
        <path d="M58 88 Q70 104 74 96 Q86 116 74 128 Q66 140 84 148" strokeWidth="2.4" />
      </g>
      {/* Deniz */}
      <path d="M84 148 H150 V158 H70 Z" fill={r} fillOpacity="0.22" />
      <path d="M74 140 H150 V158 H62 Z" fill={r} fillOpacity="0.14" />
      <Etiket x={120} y={152} renk={r} boyut={7}>ağız</Etiket>
      <Etiket x={30} y={116} renk={SOLUK} boyut={7} hiza="start">kollar tek havzada birleşir</Etiket>

      <line x1="158" y1="16" x2="158" y2="154" stroke={CIZGI} strokeWidth="1" strokeDasharray="3 4" />

      {/* Toprak profili — horizon adları sütunun içinde */}
      <Bolum x={168} y={18}>TOPRAK</Bolum>
      {horizonlar.map((h) => (
        <g key={h.ad}>
          <rect x="168" y={h.y} width="46" height={h.h} fill={r} fillOpacity={h.o} stroke={SOLUK} strokeOpacity="0.35" strokeWidth="0.6" />
          <text x="174" y={h.y + h.h / 2 + 3} fontSize="8" fontWeight="800" fill={METIN} fontFamily={YAZI_TIPI}>{h.ad}</text>
          <text x="209" y={h.y + h.h / 2 + 3} fontSize="6" fontWeight="600" fill={METIN} opacity="0.7"
            textAnchor="end" fontFamily={YAZI_TIPI}>{h.not}</text>
        </g>
      ))}
      <path d="M168 124 h46 v14 h-46 Z" fill={SOLUK} opacity="0.34" />
      <path d="M172 130 l6 6 M184 128 l6 8 M198 130 l6 6" stroke={METIN} strokeWidth="0.8" opacity="0.5" />
      <text x="211" y="135" fontSize="6" fontWeight="600" fill={METIN} opacity="0.7" textAnchor="end" fontFamily={YAZI_TIPI}>anakaya</text>
      {/* Toprağın üstündeki bitki — horizon adlarının üstünü kapatmasın diye
          kök ağı çizilmedi; asıl anlatılan horizon sırası. */}
      <path d="M191 42 v-16 M191 32 q-9 -6 -13 -13 M191 34 q10 -5 14 -13" stroke={METIN} strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Bitki kuşağı — yağış arttıkça */}
      <Bolum x={240} y={18}>BİTKİ</Bolum>
      {[
        { ad: 'çöl', y: 130, o: 0.16 },
        { ad: 'bozkır', y: 106, o: 0.34 },
        { ad: 'maki', y: 82, o: 0.52 },
        { ad: 'orman', y: 58, o: 0.75 },
      ].map((k) => (
        <g key={k.ad}>
          <rect x="242" y={k.y} width="68" height="20" rx="3" fill={r} fillOpacity={k.o} />
          <text x="276" y={k.y + 13} fontSize="7.5" fontWeight="700" fill={METIN} textAnchor="middle" fontFamily={YAZI_TIPI}>{k.ad}</text>
        </g>
      ))}
      <Ok x1={226} y1={148} x2={226} y2={58} renk={SOLUK} kalinlik={1.1} bas={5} />
      <text x="235" y="106" fontSize="6.5" fontWeight="700" fill={SOLUK} textAnchor="middle"
        fontFamily={YAZI_TIPI} transform="rotate(-90 235 106)">yağış artar</text>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   8) NÜFUS MERCEĞİ — piramit ve yoğunluk ≠ gelişmişlik
   ══════════════════════════════════════════════════════════════════ */
function SahneNufus({ r }) {
  const bantlar = [
    { g: 40, ad: '0–14' },
    { g: 34, ad: '15–29' },
    { g: 27, ad: '30–44' },
    { g: 19, ad: '45–59' },
    { g: 11, ad: '60–74' },
    { g: 5, ad: '75+' },
  ]
  const kutular = [
    { x: 178, sayi: 6, deger: '12', not: 'dağlık' },
    { x: 226, sayi: 14, deger: '85', not: 'ova' },
    { x: 274, sayi: 26, deger: '340', not: 'kıyı kenti' },
  ]
  return (
    <>
      <Bolum x={12} y={18}>NÜFUS PİRAMİDİ</Bolum>
      <line x1="84" y1="34" x2="84" y2="140" stroke={SOLUK} strokeWidth="0.9" opacity="0.6" />
      {bantlar.map((b, i) => {
        const y = 34 + i * 17
        return (
          <g key={b.ad}>
            <rect x={84 - b.g} y={y} width={b.g} height="13" rx="1.5" fill={r} fillOpacity="0.55" />
            <rect x="86" y={y} width={b.g - 3} height="13" rx="1.5" fill={r} fillOpacity="0.3" />
            <text x={84 - b.g - 4} y={y + 10} fontSize="6.5" fontWeight="700" fill={SOLUK} textAnchor="end" fontFamily={YAZI_TIPI}>{b.ad}</text>
          </g>
        )
      })}
      <Etiket x={62} y={150} renk={r} boyut={7}>erkek</Etiket>
      <Etiket x={108} y={150} renk={r} boyut={7} opaklik={0.75}>kadın</Etiket>
      <Etiket x={128} y={44} renk={SOLUK} boyut={7} hiza="start">geniş taban</Etiket>
      <Etiket x={128} y={54} renk={SOLUK} boyut={7} hiza="start">= genç nüfus</Etiket>
      <Ok x1={126} y1={48} x2={112} y2={44} renk={SOLUK} kalinlik={1} opaklik={0.7} bas={4.5} />

      <line x1="160" y1="16" x2="160" y2="154" stroke={CIZGI} strokeWidth="1" strokeDasharray="3 4" />

      {/* Aynı alan, farklı yoğunluk */}
      <Bolum x={172} y={18}>FARKLI YOĞUNLUK</Bolum>
      {kutular.map((k) => {
        const noktalar = []
        for (let i = 0; i < k.sayi; i += 1) {
          const sut = Math.ceil(Math.sqrt(k.sayi))
          const gx = k.x + 5 + (i % sut) * (28 / sut)
          const gy = 40 + Math.floor(i / sut) * (28 / sut)
          noktalar.push(<circle key={i} cx={gx} cy={gy} r="1.7" fill={r} />)
        }
        return (
          <g key={k.deger}>
            <rect x={k.x} y="32" width="38" height="38" rx="4" fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.45" strokeWidth="0.9" />
            {noktalar}
            <text x={k.x + 19} y="84" fontSize="8.5" fontWeight="800" fill={r} textAnchor="middle" fontFamily={YAZI_TIPI}>{k.deger}</text>
            <text x={k.x + 19} y="94" fontSize="6.5" fontWeight="600" fill={SOLUK} textAnchor="middle" fontFamily={YAZI_TIPI}>kişi/km²</text>
            <text x={k.x + 19} y="106" fontSize="7" fontWeight="700" fill={METIN} textAnchor="middle" fontFamily={YAZI_TIPI}>{k.not}</text>
          </g>
        )
      })}
      <rect x="172" y="118" width="140" height="30" rx="7" fill={r} fillOpacity="0.12" stroke={r} strokeWidth="1" />
      <Etiket x={242} y={131} renk={r} boyut={8}>Yoğunluk ≠ gelişmişlik</Etiket>
      <Etiket x={242} y={142} renk={SOLUK} boyut={6.8}>yoğunluk yalnız kişi/alan oranıdır</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   9) YERLEŞME AĞLARI — kuruluş yeri kararı ve yerleşme dokusu
   ══════════════════════════════════════════════════════════════════ */
function SahneYerlesme({ r }) {
  const Ev = ({ x, y, s = 1, renk }) => (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-5 0 L0 -5 L5 0 V6 H-5 Z" fill={renk} />
    </g>
  )
  const dokular = [
    { ad: 'toplu', noktalar: [[10, 10], [16, 8], [22, 12], [13, 17], [19, 18], [25, 6]] },
    { ad: 'dağınık', noktalar: [[6, 6], [24, 8], [12, 18], [26, 20], [17, 11], [7, 21]] },
    { ad: 'çizgisel', noktalar: [[6, 16], [12, 14], [18, 12], [24, 10], [30, 8], [9, 20]] },
  ]
  return (
    <>
      <Bolum x={12} y={18}>KURULUŞ YERİ KARARI</Bolum>
      {/* Yamaç */}
      <path d="M8 152 L8 96 Q34 62 74 66 L74 152 Z" fill={SOLUK} opacity="0.2" />
      <path d="M8 96 Q34 62 74 66" fill="none" stroke={SOLUK} strokeWidth="1.2" strokeOpacity="0.7" />
      {/* Taraça — taşkın düzlüğünün üstü */}
      <path d="M74 66 H128 V90 H74 Z" fill={SOLUK} opacity="0.26" />
      <path d="M74 66 H128 V90" fill="none" stroke={SOLUK} strokeWidth="1.1" strokeOpacity="0.7" />
      {/* Taşkın düzlüğü */}
      <path d="M128 90 H176 V152 H74 V90 Z" fill={r} fillOpacity="0.1" />
      <path d="M128 90 H176" stroke={SOLUK} strokeWidth="1" strokeOpacity="0.6" />
      <g stroke={r} strokeWidth="0.7" opacity="0.4">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => <line key={i} x1={130 + i * 8} y1="152" x2={146 + i * 8} y2="94" />)}
      </g>
      {/* Akarsu */}
      <path d="M150 92 Q142 118 158 152" fill="none" stroke={r} strokeWidth="4" strokeLinecap="round" opacity="0.85" />
      <Etiket x={158} y={110} renk={r} boyut={7} hiza="start">akarsu</Etiket>
      <Etiket x={124} y={140} renk={r} boyut={7} hiza="end">taşkın alanı</Etiket>

      {/* Yerleşme taraçada */}
      <Ev x={86} y={58} renk={r} />
      <Ev x={100} y={58} renk={r} />
      <Ev x={114} y={58} renk={r} />
      <Etiket x={100} y={44} renk={r} boyut={7.5}>yerleşme</Etiket>
      <path d="M78 78 H176" stroke={METIN} strokeWidth="1.4" strokeDasharray="6 4" opacity="0.6" />
      <Etiket x={40} y={86} renk={SOLUK} boyut={7}>eğim fazla</Etiket>
      <Etiket x={101} y={100} renk={SOLUK} boyut={7}>düz + taşkın üstü</Etiket>

      <line x1="192" y1="16" x2="192" y2="154" stroke={CIZGI} strokeWidth="1" strokeDasharray="3 4" />

      {/* Doku tipleri */}
      <Bolum x={202} y={18}>YERLEŞME DOKUSU</Bolum>
      {dokular.map((d, i) => (
        <g key={d.ad} transform={`translate(206 ${30 + i * 42})`}>
          <rect x="0" y="0" width="102" height="30" rx="5" fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.4" strokeWidth="0.8" />
          {d.ad === 'çizgisel' ? <line x1="6" y1="20" x2="66" y2="6" stroke={SOLUK} strokeWidth="1.4" opacity="0.6" /> : null}
          {d.noktalar.map(([x, y], j) => <circle key={j} cx={x + 2} cy={y + 2} r="2.1" fill={r} />)}
          <text x="96" y="19" fontSize="7.5" fontWeight="700" fill={METIN} textAnchor="end" fontFamily={YAZI_TIPI}>{d.ad}</text>
        </g>
      ))}
      <Etiket x={257} y={158} renk={SOLUK} boyut={6.8}>doku · arazinin izini taşır</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   10) ÜRETİM VE BAĞLANTILAR — değer zinciri ve liman hinterlandı
   ══════════════════════════════════════════════════════════════════ */
function SahneEkonomi({ r }) {
  return (
    <>
      <Bolum x={12} y={18}>DEĞER ZİNCİRİ</Bolum>

      {/* Hammadde — maden */}
      <g>
        <path d="M14 74 L38 44 L62 74 Z" fill={SOLUK} opacity="0.28" />
        <path d="M14 74 L38 44 L62 74" fill="none" stroke={SOLUK} strokeWidth="1.1" strokeOpacity="0.7" />
        <rect x="30" y="62" width="16" height="12" rx="2" fill={r} fillOpacity="0.6" />
        <Etiket x={38} y={90} renk={METIN} boyut={7.5}>hammadde</Etiket>
        <Etiket x={38} y={100} renk={SOLUK} boyut={6.5}>I. sektör</Etiket>
      </g>

      {/* Sanayi */}
      <g>
        <rect x="94" y="54" width="46" height="20" rx="2" fill={SOLUK} opacity="0.3" />
        <rect x="100" y="42" width="8" height="14" fill={SOLUK} opacity="0.36" />
        <rect x="114" y="46" width="8" height="10" fill={SOLUK} opacity="0.36" />
        <path d="M102 40 q5 -8 -1 -12 M118 44 q5 -7 -1 -11" fill="none" stroke={SOLUK} strokeWidth="1" opacity="0.5" />
        <rect x="98" y="60" width="9" height="9" fill={r} fillOpacity="0.5" />
        <rect x="112" y="60" width="9" height="9" fill={r} fillOpacity="0.5" />
        <rect x="126" y="60" width="9" height="9" fill={r} fillOpacity="0.5" />
        <Etiket x={117} y={90} renk={METIN} boyut={7.5}>sanayi</Etiket>
        <Etiket x={117} y={100} renk={SOLUK} boyut={6.5}>II. sektör</Etiket>
      </g>

      {/* Pazar */}
      <g>
        <rect x="170" y="58" width="12" height="24" fill={SOLUK} opacity="0.3" />
        <rect x="185" y="44" width="14" height="38" fill={SOLUK} opacity="0.36" />
        <rect x="202" y="52" width="11" height="30" fill={SOLUK} opacity="0.3" />
        <g fill={r} fillOpacity="0.65">
          {[62, 70].map((y) => [173, 188, 191, 205].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="4" height="4" />))}
        </g>
        <Etiket x={192} y={96} renk={METIN} boyut={7.5}>pazar</Etiket>
        <Etiket x={192} y={106} renk={SOLUK} boyut={6.5}>III. sektör</Etiket>
      </g>

      <Ok x1={66} y1={64} x2={90} y2={64} renk={r} kalinlik={1.6} bas={6} />
      <Ok x1={144} y1={64} x2={166} y2={64} renk={r} kalinlik={1.6} bas={6} />
      <Etiket x={78} y={56} renk={SOLUK} boyut={6.5}>ulaşım</Etiket>
      <Etiket x={155} y={56} renk={SOLUK} boyut={6.5}>ulaşım</Etiket>

      {/* Liman ve hinterlant */}
      <path d="M8 124 H150 V158 H8 Z" fill={SOLUK} opacity="0.14" />
      <path d="M150 124 H312 V158 H150 Z" fill={r} fillOpacity="0.16" />
      <line x1="150" y1="118" x2="150" y2="158" stroke={METIN} strokeWidth="1.6" />
      <rect x="142" y="112" width="17" height="8" rx="1.5" fill={METIN} opacity="0.75" />
      <Etiket x={150} y={108} renk={METIN} boyut={7.5}>liman</Etiket>
      {[{ x: 62, y: 130 }, { x: 54, y: 142 }, { x: 84, y: 150 }].map((h, i) => (
        <Ok key={i} x1={142} y1={132 + i * 6} x2={h.x} y2={h.y} renk={SOLUK} kalinlik={1.1} opaklik={0.7} bas={5} />
      ))}
      <Etiket x={64} y={122} renk={SOLUK} boyut={7}>hinterlant</Etiket>
      <path d="M228 138 h30 l-5 8 h-20 Z" fill={METIN} opacity="0.6" />
      <line x1="243" y1="138" x2="243" y2="126" stroke={METIN} strokeWidth="1.2" opacity="0.6" />
      <Etiket x={243} y={122} renk={r} boyut={7}>deniz yolu · ucuz, yavaş</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   11) AFET VE SÜRDÜRÜLEBİLİRLİK — tehlike, maruziyet, kırılganlık
   ══════════════════════════════════════════════════════════════════ */
function SahneAfet({ r }) {
  return (
    <>
      <Bolum x={12} y={18}>AYNI TEHLİKE · FARKLI SONUÇ</Bolum>
      {/* Zemin kesiti */}
      <path d="M8 108 H150 V152 H8 Z" fill={SOLUK} opacity="0.16" />
      <path d="M8 108 H78 V152 H8 Z" fill={r} fillOpacity="0.14" />
      <g stroke={r} strokeWidth="0.6" opacity="0.4">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <line key={i} x1={10 + i * 9} y1="152" x2={22 + i * 9} y2="110" />)}
      </g>
      <Etiket x={42} y={146} renk={r} boyut={7}>gevşek zemin</Etiket>
      <Etiket x={114} y={146} renk={SOLUK} boyut={7}>sağlam zemin</Etiket>
      {/* Fay */}
      <path d="M8 132 L36 128 L62 136 L92 126 L124 134 L150 128" fill="none" stroke={r} strokeWidth="1.6" strokeDasharray="6 3" />
      <Etiket x={150} y={124} renk={r} boyut={7} hiza="end">fay hattı</Etiket>
      {/* Yapılar */}
      <g transform="translate(38 108) rotate(-9)">
        <rect x="-11" y="-34" width="22" height="34" rx="1.5" fill={SOLUK} opacity="0.5" />
        <path d="M-11 -20 H11 M-11 -10 H11" stroke={ZEMIN} strokeWidth="1" />
      </g>
      <g transform="translate(112 108)">
        <rect x="-11" y="-34" width="22" height="34" rx="1.5" fill={SOLUK} opacity="0.5" />
        <path d="M-11 -20 H11 M-11 -10 H11" stroke={ZEMIN} strokeWidth="1" />
      </g>
      <Etiket x={38} y={62} renk={r} boyut={7}>kırılgan</Etiket>
      <Etiket x={112} y={62} renk={SOLUK} boyut={7}>dirençli</Etiket>

      <line x1="166" y1="16" x2="166" y2="154" stroke={CIZGI} strokeWidth="1" strokeDasharray="3 4" />

      {/* Risk üçlüsü */}
      <Bolum x={178} y={18}>RİSK ÜÇLÜSÜ</Bolum>
      <g opacity="0.9">
        <circle cx="222" cy="66" r="36" fill={r} fillOpacity="0.16" stroke={r} strokeWidth="1" />
        <circle cx="266" cy="66" r="36" fill={r} fillOpacity="0.16" stroke={r} strokeWidth="1" />
        <circle cx="244" cy="102" r="36" fill={r} fillOpacity="0.16" stroke={r} strokeWidth="1" />
      </g>
      <circle cx="244" cy="80" r="15" fill={r} fillOpacity="0.55" />
      <Etiket x={244} y={84} renk={ZEMIN} boyut={9}>RİSK</Etiket>
      <Etiket x={206} y={40} renk={METIN} boyut={7.5}>tehlike</Etiket>
      <Etiket x={282} y={40} renk={METIN} boyut={7.5}>maruziyet</Etiket>
      <Etiket x={244} y={134} renk={METIN} boyut={7.5}>kırılganlık</Etiket>
      <Etiket x={244} y={152} renk={SOLUK} boyut={6.8}>üçü birlikte olmadan afet olmaz</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   12) KAVRAM PUSULASI — kanıt yönü, yanılgı yönü
   ══════════════════════════════════════════════════════════════════ */
function SahnePusula({ r }) {
  const cx = 86
  const cy = 88
  const kanitlar = ['harita', 'grafik', 'kesit', 'tablo']
  return (
    <>
      <Bolum x={12} y={18}>KANIT PUSULASI</Bolum>
      <circle cx={cx} cy={cy} r="58" fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.4" strokeWidth="1" />
      <circle cx={cx} cy={cy} r="45" fill="none" stroke={SOLUK} strokeOpacity="0.28" strokeWidth="0.7" strokeDasharray="3 4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
        const t = ((a - 90) * Math.PI) / 180
        return <line key={a} x1={cx + Math.cos(t) * 50} y1={cy + Math.sin(t) * 50} x2={cx + Math.cos(t) * 58} y2={cy + Math.sin(t) * 58} stroke={SOLUK} strokeWidth={a % 90 === 0 ? 1.3 : 0.7} opacity="0.7" />
      })}
      {/* İğne */}
      <polygon points={`${cx},${cy - 44} ${cx - 9},${cy} ${cx},${cy + 8} ${cx + 9},${cy}`} fill={r} />
      <polygon points={`${cx},${cy + 44} ${cx - 9},${cy} ${cx},${cy - 8} ${cx + 9},${cy}`} fill={SOLUK} opacity="0.42" />
      <circle cx={cx} cy={cy} r="3.6" fill={ZEMIN} stroke={METIN} strokeWidth="1.2" />
      <Etiket x={cx} y={cy - 50} renk={r} boyut={8.5}>KANIT</Etiket>
      <Etiket x={cx} y={cy + 58} renk={SOLUK} boyut={8.5}>YANILGI</Etiket>

      <line x1="164" y1="16" x2="164" y2="154" stroke={CIZGI} strokeWidth="1" strokeDasharray="3 4" />

      <Bolum x={176} y={18}>DÖRT KANIT TÜRÜ</Bolum>
      {kanitlar.map((k, i) => (
        <g key={k} transform={`translate(${176 + (i % 2) * 70} ${30 + Math.floor(i / 2) * 42})`}>
          <rect x="0" y="0" width="62" height="32" rx="5" fill={r} fillOpacity="0.12" stroke={r} strokeOpacity="0.5" strokeWidth="0.9" />
          <text x="31" y="20" fontSize="8" fontWeight="700" fill={METIN} textAnchor="middle" fontFamily={YAZI_TIPI}>{k}</text>
        </g>
      ))}
      <rect x="176" y="116" width="132" height="34" rx="7" fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.4" strokeWidth="0.9" />
      <path d="M186 133 l4 5 l8 -10" fill="none" stroke={r} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <Etiket x={206} y={130} renk={METIN} boyut={7.5} hiza="start">Hangi kanıtı atladım?</Etiket>
      <Etiket x={206} y={141} renk={SOLUK} boyut={6.8} hiza="start">yanılgı defterin bunu tutar</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   13) TYT KAMPI — dört kanıt türü karışık turda
   ══════════════════════════════════════════════════════════════════ */
function SahneKamp({ r }) {
  return (
    <>
      <Bolum x={12} y={18}>KARIŞIK TUR</Bolum>

      {/* Kart 1 — harita */}
      <g transform="translate(12 28)">
        <rect x="0" y="0" width="70" height="54" rx="6" fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.4" strokeWidth="0.9" />
        <ellipse cx="35" cy="28" rx="24" ry="16" fill="none" stroke={r} strokeWidth="1" opacity="0.6" />
        <ellipse cx="36" cy="28" rx="15" ry="10" fill="none" stroke={r} strokeWidth="1" opacity="0.75" />
        <ellipse cx="37" cy="28" rx="7" ry="4.5" fill={r} fillOpacity="0.35" stroke={r} strokeWidth="1" />
        <text x="35" y="50" fontSize="7" fontWeight="700" fill={SOLUK} textAnchor="middle" fontFamily={YAZI_TIPI}>harita</text>
      </g>

      {/* Kart 2 — grafik */}
      <g transform="translate(92 28)">
        <rect x="0" y="0" width="70" height="54" rx="6" fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.4" strokeWidth="0.9" />
        {[10, 20, 30, 40, 50].map((x, i) => (
          <rect key={x} x={x} y={38 - [10, 18, 26, 14, 22][i]} width="7" height={[10, 18, 26, 14, 22][i]} rx="1" fill={r} fillOpacity="0.5" />
        ))}
        <path d="M13 26 L23 20 L33 10 L43 18 L53 12" fill="none" stroke={METIN} strokeWidth="1.3" />
        <text x="35" y="50" fontSize="7" fontWeight="700" fill={SOLUK} textAnchor="middle" fontFamily={YAZI_TIPI}>grafik</text>
      </g>

      {/* Kart 3 — kesit */}
      <g transform="translate(12 90)">
        <rect x="0" y="0" width="70" height="54" rx="6" fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.4" strokeWidth="0.9" />
        <path d="M8 38 L22 16 L36 30 L50 12 L62 38 Z" fill={r} fillOpacity="0.28" />
        <path d="M8 38 L22 16 L36 30 L50 12 L62 38" fill="none" stroke={r} strokeWidth="1.3" strokeLinejoin="round" />
        <line x1="8" y1="38" x2="62" y2="38" stroke={SOLUK} strokeWidth="0.9" opacity="0.7" />
        <text x="35" y="50" fontSize="7" fontWeight="700" fill={SOLUK} textAnchor="middle" fontFamily={YAZI_TIPI}>kesit</text>
      </g>

      {/* Kart 4 — tablo */}
      <g transform="translate(92 90)">
        <rect x="0" y="0" width="70" height="54" rx="6" fill={ZEMIN} stroke={SOLUK} strokeOpacity="0.4" strokeWidth="0.9" />
        <rect x="9" y="10" width="52" height="8" rx="1.5" fill={r} fillOpacity="0.45" />
        {[22, 30].map((y) => <rect key={y} x="9" y={y} width="52" height="6" rx="1.5" fill={SOLUK} opacity="0.28" />)}
        <line x1="26" y1="10" x2="26" y2="36" stroke={ZEMIN} strokeWidth="1.4" />
        <line x1="44" y1="10" x2="44" y2="36" stroke={ZEMIN} strokeWidth="1.4" />
        <text x="35" y="50" fontSize="7" fontWeight="700" fill={SOLUK} textAnchor="middle" fontFamily={YAZI_TIPI}>tablo</text>
      </g>

      <line x1="178" y1="16" x2="178" y2="154" stroke={CIZGI} strokeWidth="1" strokeDasharray="3 4" />

      {/* Süre halkası */}
      <Bolum x={190} y={18}>SÜRE BASKISI</Bolum>
      <circle cx="248" cy="76" r="34" fill="none" stroke={SOLUK} strokeOpacity="0.3" strokeWidth="6" />
      <circle cx="248" cy="76" r="34" fill="none" stroke={r} strokeWidth="6" strokeLinecap="round"
        strokeDasharray="152 214" transform="rotate(-90 248 76)" />
      <Etiket x={248} y={74} renk={METIN} boyut={13}>45</Etiket>
      <Etiket x={248} y={86} renk={SOLUK} boyut={6.8}>saniye/soru</Etiket>
      <rect x="190" y="120" width="118" height="30" rx="7" fill={r} fillOpacity="0.12" stroke={r} strokeWidth="1" />
      <Etiket x={249} y={133} renk={r} boyut={8}>Konu sırası yok</Etiket>
      <Etiket x={249} y={144} renk={SOLUK} boyut={6.8}>hangi kanıt istendiğini önce bul</Etiket>
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   Kayıt defteri
   ══════════════════════════════════════════════════════════════════ */
const CIZIMLER = {
  sistemler: { ciz: SahneSistemler, anlat: 'Atmosfer, hidrosfer, litosfer ve biyosferin aynı kesitte birbirini beslediği görünüm; yanında doğal koşul, insan kararı ve geri etki döngüsü.' },
  gezegen: { ciz: SahneGezegen, anlat: 'Güneş’ten paralel gelen ışınlar, 23°27′ eğik eksen, aydınlanma çemberi ve kuzey yarım kürenin Güneş’e döndüğü 21 Haziran konumu.' },
  konum: { ciz: SahneKonum, anlat: 'Enlem–boylam ağında aynı enlemde ama farklı boylamdaki iki nokta ve aralarındaki iki saatlik yerel saat farkı; 15° = 1 saat.' },
  'harita-bilgisi': { ciz: SahneHarita, anlat: 'İzohips haritası ve aynı araziden çıkarılan topoğrafik profil; izohipsler sıklaştığı yerde profil dikleşiyor.' },
  iklim: { ciz: SahneIklim, anlat: 'Dağa çarpan nemli havanın rüzgâr önü yamaçta yağış bırakması, arka yamaçta yağış gölgesi oluşması ve yaz kurak iklim grafiği.' },
  yerkure: { ciz: SahneYerkure, anlat: 'Solda yaklaşan levhalar, dalma-batma, deprem odağı ve volkan; sağda akarsuyun aşındırma, taşıma ve birikim yaparak aynı araziyi biçimlendirmesi.' },
  'yasam-kusaklari': { ciz: SahneYasam, anlat: 'Su bölümü çizgisiyle sınırlanan havza ve kolların birleşmesi, O–A–B–C toprak horizonları ve yağış arttıkça çölden ormana geçen bitki kuşakları.' },
  nufus: { ciz: SahneNufus, anlat: 'Geniş tabanlı genç nüfus piramidi ve eşit alanlı üç karede farklı nokta sayısıyla gösterilen nüfus yoğunluğu.' },
  yerlesme: { ciz: SahneYerlesme, anlat: 'Taşkın düzlüğünün üstündeki taraçaya kurulan yerleşme ve toplu, dağınık, çizgisel doku örnekleri.' },
  ekonomi: { ciz: SahneEkonomi, anlat: 'Hammadde, sanayi ve pazarı birbirine bağlayan değer zinciri ile limandan iç bölgelere uzanan hinterlant okları.' },
  afet: { ciz: SahneAfet, anlat: 'Aynı fay hattında gevşek ve sağlam zeminde farklı sonuç veren iki yapı; yanında tehlike, maruziyet ve kırılganlığın kesiştiği risk şeması.' },
  pusula: { ciz: SahnePusula, anlat: 'İğnesi kanıtı gösteren, ters ucu yanılgıyı işaret eden pusula ve harita, grafik, kesit, tablo kanıt türleri.' },
  kamp: { ciz: SahneKamp, anlat: 'Harita, grafik, kesit ve tablo kartlarının karışık geldiği tur ile soru başına düşen süreyi gösteren halka.' },
}

/**
 * Bölge çizimi.
 *
 * @param {string} kod    Bölge kodu (BOLGELER içindeki `kod`).
 * @param {string} renk   Bölgenin rengi.
 * @param {string} sinif  Ek CSS sınıfı.
 */
export default function BolgeCizimi({ kod, renk, sinif = '' }) {
  const cizim = CIZIMLER[kod]
  if (!cizim) return null
  const Ciz = cizim.ciz
  return (
    <svg
      className={`ca-bolge-cizim ${sinif}`.trim()}
      viewBox={`0 0 ${G} ${Y}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={cizim.anlat}
    >
      <title>{cizim.anlat}</title>
      <Izgara ad={kod} />
      <Ciz r={renk} />
    </svg>
  )
}

/** Bir bölgenin çizimi var mı? */
export const cizimVarMi = (kod) => Boolean(CIZIMLER[kod])

/** Çizim açıklaması — kart alt yazısı, künye ya da test için. */
export const cizimAnlatimi = (kod) => CIZIMLER[kod]?.anlat ?? null

export { CIZIMLER }
