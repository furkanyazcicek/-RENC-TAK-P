import { ArrowHeads, FigureSvg, region } from './primitives'

/**
 * LGS FEN — SAF BİR MADDENİN ISINMA GRAFİĞİ
 * ==================================================================
 *
 * NEDEN BU ŞEMA VAR?
 * F.8.4.5.3 "Maddelerin hâl değişimi ve ısınma grafiğini çizerek
 * yorumlar." der; F.8.4.5.2'nin açıklaması da "Saf maddelerin hâl
 * değişimi sırasında sıcaklığının sabit kaldığına değinilir." diye
 * ekler. Öğrencinin grafikte görmesi gereken tek fikir şudur:
 *
 *   EĞİMLİ BÖLÜM  → tek hâl var, verilen ısı sıcaklığı artırıyor
 *   YATAY BÖLÜM   → iki hâl birlikte, verilen ısı hâl değiştiriyor,
 *                   sıcaklık SABİT
 *
 * Şema bu yüzden beş bölgeye ayrılır ve her bölge ayrı vurgulanabilir.
 * Yatay bölümler bilinçli olarak farklı tonda çizilir; öğrenci "düz
 * çizgi = hiçbir şey olmuyor" yanılgısına düşmesin diye her yatay
 * bölümün üstünde o anda hangi iki hâlin birlikte bulunduğu yazar.
 *
 * VERİ ODAKLI: varsayılan değerler deniz seviyesindeki saf su içindir;
 * ders başka bir saf madde için `data` ile sıcaklık ve etiket geçirebilir.
 * Sayısal ısı miktarı yazılmaz — program hesaplamaya girilmemesini ister.
 *
 * BÖLGE SIRASI (registry ile aynı olmak zorunda):
 *   kati → erime → sivi → kaynama → gaz
 */

const DEFAULT = {
  madde: 'Saf su (deniz seviyesinde)',
  baslangic: -20,
  erime: 0,
  kaynama: 100,
  bitis: 120,
  // Zaman noktaları (dakika) — yalnız biçim içindir, ölçüm iddiası taşımaz.
  zaman: [0, 3, 7, 12, 20, 23],
  etiketler: {
    kati: 'Katı ısınıyor',
    erime: 'Erime: katı + sıvı',
    sivi: 'Sıvı ısınıyor',
    kaynama: 'Kaynama: sıvı + gaz',
    gaz: 'Gaz ısınıyor',
  },
}

export default function ScienceHeatingCurve({ data, activeRegion }) {
  const model = { ...DEFAULT, ...(data ?? {}) }
  const etiket = { ...DEFAULT.etiketler, ...(model.etiketler ?? {}) }
  const zaman = Array.isArray(model.zaman) && model.zaman.length === 6 ? model.zaman.map(Number) : DEFAULT.zaman

  const T0 = Number(model.baslangic)
  const T1 = Number(model.erime)
  const T2 = Number(model.kaynama)
  const T3 = Number(model.bitis)

  /* ---------- ölçek ---------- */
  const X0 = 96
  const X1 = 716
  const Y0 = 370 // en düşük sıcaklığın çizildiği satır
  const Y1 = 64 // en yüksek sıcaklığın çizildiği satır
  const tMax = zaman[5]
  const tMin = zaman[0]
  const Tmin = T0 - 10
  const Tmax = T3 + 10
  const x = (t) => X0 + ((t - tMin) / (tMax - tMin)) * (X1 - X0)
  const y = (T) => Y0 - ((T - Tmin) / (Tmax - Tmin)) * (Y0 - Y1)

  const P = [
    [x(zaman[0]), y(T0)],
    [x(zaman[1]), y(T1)],
    [x(zaman[2]), y(T1)],
    [x(zaman[3]), y(T2)],
    [x(zaman[4]), y(T2)],
    [x(zaman[5]), y(T3)],
  ]

  const bolumler = [
    { key: 'kati', a: P[0], b: P[1], yatay: false, text: etiket.kati },
    { key: 'erime', a: P[1], b: P[2], yatay: true, text: etiket.erime },
    { key: 'sivi', a: P[2], b: P[3], yatay: false, text: etiket.sivi },
    { key: 'kaynama', a: P[3], b: P[4], yatay: true, text: etiket.kaynama },
    { key: 'gaz', a: P[4], b: P[5], yatay: false, text: etiket.gaz },
  ]

  const eksenAlt = Y0 + 16

  return (
    <FigureSvg
      viewBox="0 0 760 440"
      title="Saf bir maddenin ısınma grafiği"
      desc={
        `${model.madde} için sıcaklık–zaman grafiği. ${T0} °C'deki katı ısınarak ${T1} °C'ye gelir; ` +
        `erime boyunca sıcaklık ${T1} °C'de sabit kalır. Sıvı ${T2} °C'ye kadar ısınır; kaynama boyunca sıcaklık ` +
        `${T2} °C'de sabit kalır. Ardından gaz ${T3} °C'ye kadar ısınır. Eğimli bölümlerde tek hâl vardır ve ` +
        `sıcaklık artar; yatay bölümlerde iki hâl birlikte bulunur ve sıcaklık değişmez.`
      }
    >
      <ArrowHeads prefix="lgsisi" />

      {/* Başlık satırı */}
      <text x="736" y="28" textAnchor="end" className="fill-ink/50" fontSize="12" fontWeight="700" letterSpacing="0.08em">
        ISINMA GRAFİĞİ
      </text>
      <text x="736" y="48" textAnchor="end" className="fill-ink/75" fontSize="14" fontStyle="italic">
        {model.madde}
      </text>

      {/* Eksenler */}
      <line x1={X0} y1={eksenAlt} x2={X0} y2={Y1 - 34} className="stroke-ink/55" strokeWidth="1.6" markerEnd="url(#lgsisi-arrow)" />
      <line x1={X0} y1={eksenAlt} x2={X1 + 26} y2={eksenAlt} className="stroke-ink/55" strokeWidth="1.6" markerEnd="url(#lgsisi-arrow)" />
      <text x={X0 + 12} y={Y1 - 24} className="fill-ink/70" fontSize="13" fontWeight="650">
        Sıcaklık (°C)
      </text>
      <text x={X1 + 20} y={eksenAlt - 10} textAnchor="end" className="fill-ink/70" fontSize="13" fontWeight="650">
        Zaman (dakika)
      </text>

      {/* Sabit sıcaklık kılavuz çizgileri */}
      {[T0, T1, T2, T3].map((T) => (
        <g key={`kilavuz-${T}`}>
          <line x1={X0} y1={y(T)} x2={X1} y2={y(T)} className="stroke-ink/10" strokeWidth="1" strokeDasharray="4 5" />
          <text x={X0 - 10} y={y(T) + 4} textAnchor="end" className="fill-ink/65" fontSize="12.5">
            {T}
          </text>
        </g>
      ))}

      {/* Beş bölüm */}
      {bolumler.map((b, index) => {
        const ortaX = (b.a[0] + b.b[0]) / 2
        const ortaY = (b.a[1] + b.b[1]) / 2
        const stroke = b.yatay ? 'stroke-aqua-500' : 'stroke-brand-500'
        const fill = b.yatay ? 'fill-aqua-700' : 'fill-brand-700'
        // Yatay bölüm etiketi çizginin üstüne, eğimli bölüm etiketi çizginin
        // sağ altına yazılır. Son bölüm sağ kenara yakın olduğu için etiketi
        // bölümün bittiği noktanın ÜSTÜNE, sağa yaslı yazılır: sağ alta
        // yazılsa görünüm alanından taşar, sol alta yazılsa kaynama
        // çizgisinin üstüne biner.
        const sonBolum = index === bolumler.length - 1
        const etiketX = b.yatay ? ortaX : sonBolum ? b.b[0] - 2 : ortaX + 16
        const etiketY = b.yatay ? ortaY - 16 : sonBolum ? b.b[1] - 14 : ortaY + 22
        const anchor = b.yatay ? 'middle' : sonBolum ? 'end' : 'start'
        return (
          <g key={b.key} {...region(b.key, activeRegion)}>
            <line
              x1={b.a[0]}
              y1={b.a[1]}
              x2={b.b[0]}
              y2={b.b[1]}
              className={stroke}
              strokeWidth={b.yatay ? 5 : 4}
              strokeLinecap="round"
            />
            <circle cx={ortaX} cy={ortaY} r="11" className="fill-surface stroke-ink/25" strokeWidth="1.2" />
            <text x={ortaX} y={ortaY + 4} textAnchor="middle" className="fill-ink/80" fontSize="11.5" fontWeight="700">
              {index + 1}
            </text>
            <text x={etiketX} y={etiketY} textAnchor={anchor} className={fill} fontSize="12.5" fontWeight="650">
              {b.text}
            </text>
          </g>
        )
      })}

      {/* Okuma anahtarı */}
      <g>
        <line x1="120" y1="420" x2="148" y2="420" className="stroke-brand-500" strokeWidth="4" strokeLinecap="round" />
        <text x="156" y="424" className="fill-ink/70" fontSize="12.5">
          Eğimli: tek hâl, sıcaklık artıyor
        </text>
        <line x1="420" y1="420" x2="448" y2="420" className="stroke-aqua-500" strokeWidth="5" strokeLinecap="round" />
        <text x="456" y="424" className="fill-ink/70" fontSize="12.5">
          Yatay: iki hâl birlikte, sıcaklık sabit
        </text>
      </g>
    </FigureSvg>
  )
}
