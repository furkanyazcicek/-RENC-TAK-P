import { ArrowHeads, FigureSvg, region } from './primitives'

/**
 * LGS FEN — YÜK DURUMLARI VE TOPRAKLAMA
 * ==================================================================
 *
 * NEDEN BU ŞEMA VAR?
 * F.8.7.2.1'in açıklaması: "Özellikle nötr cismin, yüksüz cisim anlamına
 * gelmediği; nötr cisimlerde pozitif ve negatif yük miktarlarının eşit
 * olduğu vurgusu yapılır." Öğrenci bunu en kolay, üç cismi yan yana
 * görüp içlerindeki işaretleri sayarak kavrar: nötr cisimde de işaret
 * VARDIR, yalnız sayıları eşittir.
 *
 * Dördüncü panel F.8.7.2.2'ye (topraklama) bağlanır: negatif yüklü bir
 * cisim toprağa bağlandığında fazla elektronlar toprağa akar ve cisim
 * nötr olur. Program elektroskobun çalışma prensibine girilmemesini
 * istediği için elektroskop bu şemada yoktur.
 *
 * BÖLGE SIRASI (registry ile aynı olmak zorunda):
 *   pozitif → notr → negatif → topraklama
 */

function Isaret({ x, y, eksi }) {
  return (
    <text x={x} y={y} textAnchor="middle" className={eksi ? 'fill-brand-700' : 'fill-accent-700'} fontSize="15" fontWeight="700">
      {eksi ? '−' : '+'}
    </text>
  )
}

function Cisim({ cx, arti, eksi }) {
  // Artılar üst satırlarda, eksiler alt satırlarda; sayıları okunabilir kalsın diye düzenli yerleşir.
  const arti_ = Array.from({ length: arti }, (_, i) => [cx - 36 + (i % 4) * 24, 108 + Math.floor(i / 4) * 20])
  const eksi_ = Array.from({ length: eksi }, (_, i) => [cx - 36 + (i % 4) * 24, 160 + Math.floor(i / 4) * 20])
  return (
    <g>
      <rect x={cx - 56} y="82" width="112" height="118" rx="12" className="fill-surface stroke-ink/35" strokeWidth="1.4" />
      {arti_.map(([x, y], i) => (
        <Isaret key={`a${i}`} x={x} y={y} />
      ))}
      {eksi_.map(([x, y], i) => (
        <Isaret key={`e${i}`} x={x} y={y} eksi />
      ))}
    </g>
  )
}

function Panel({ x0, baslik, alt, children, regionKey, activeRegion }) {
  return (
    <g {...region(regionKey, activeRegion)}>
      <rect x={x0} y="12" width="176" height="300" rx="10" className="fill-surface-sunken stroke-ink/15" strokeWidth="1.2" />
      <text x={x0 + 88} y="40" textAnchor="middle" className="fill-ink" fontSize="15" fontWeight="700">
        {baslik}
      </text>
      <text x={x0 + 88} y="60" textAnchor="middle" className="fill-ink/55" fontSize="11.5">
        {alt}
      </text>
      {children}
    </g>
  )
}

export default function ScienceChargeStates({ activeRegion }) {
  return (
    <FigureSvg
      viewBox="0 0 760 324"
      title="Yük durumları ve topraklama"
      desc={
        'Dört panel. Pozitif yüklü cisimde artı işaretleri eksi işaretlerinden fazladır. Nötr cisimde artı ve eksi işaretleri eşit sayıdadır; nötr cisim yüksüz değildir. ' +
        'Negatif yüklü cisimde eksi işaretleri artı işaretlerinden fazladır. Topraklamada negatif yüklü cisim toprağa bağlanır, fazla elektronlar toprağa akar ve cisim nötr olur.'
      }
    >
      <ArrowHeads prefix="lgstop" />

      <Panel x0={12} baslik="Pozitif yüklü" alt="+ sayısı − sayısından fazla" regionKey="pozitif" activeRegion={activeRegion}>
        <Cisim cx={100} arti={6} eksi={3} />
        <text x="100" y="232" textAnchor="middle" className="fill-accent-700" fontSize="12" fontWeight="650">6 artı, 3 eksi</text>
        <text x="100" y="256" textAnchor="middle" className="fill-ink/60" fontSize="11.5">Elektron eksikliği var.</text>
      </Panel>

      <Panel x0={200} baslik="Nötr" alt="+ sayısı − sayısına eşit" regionKey="notr" activeRegion={activeRegion}>
        <Cisim cx={288} arti={4} eksi={4} />
        <text x="288" y="232" textAnchor="middle" className="fill-ink/80" fontSize="12" fontWeight="650">4 artı, 4 eksi</text>
        <text x="288" y="256" textAnchor="middle" className="fill-ink/60" fontSize="11.5">Yükler var, ama eşit.</text>
        <text x="288" y="274" textAnchor="middle" className="fill-ink/60" fontSize="11.5">Nötr ≠ yüksüz</text>
      </Panel>

      <Panel x0={388} baslik="Negatif yüklü" alt="− sayısı + sayısından fazla" regionKey="negatif" activeRegion={activeRegion}>
        <Cisim cx={476} arti={3} eksi={6} />
        <text x="476" y="232" textAnchor="middle" className="fill-brand-700" fontSize="12" fontWeight="650">3 artı, 6 eksi</text>
        <text x="476" y="256" textAnchor="middle" className="fill-ink/60" fontSize="11.5">Elektron fazlalığı var.</text>
      </Panel>

      <Panel x0={576} baslik="Topraklama" alt="Fazla yük toprağa akar" regionKey="topraklama" activeRegion={activeRegion}>
        {/* Negatif yüklü küçük cisim */}
        <rect x="620" y="82" width="88" height="56" rx="10" className="fill-surface stroke-ink/35" strokeWidth="1.4" />
        <Isaret x={642} y={116} eksi />
        <Isaret x={664} y={116} eksi />
        <Isaret x={686} y={116} eksi />
        {/* İletken tel */}
        <line x1="664" y1="138" x2="664" y2="218" className="stroke-ink/55" strokeWidth="2" />
        {/* Elektron akış oku */}
        <line x1="684" y1="150" x2="684" y2="206" className="stroke-brand-500" strokeWidth="2.4" markerEnd="url(#lgstop-arrow-brand)" />
        <text x="692" y="182" className="fill-brand-700" fontSize="11" fontWeight="650">e⁻</text>
        {/* Toprak simgesi */}
        <line x1="640" y1="218" x2="688" y2="218" className="stroke-ink/70" strokeWidth="2.4" />
        <line x1="648" y1="226" x2="680" y2="226" className="stroke-ink/70" strokeWidth="2.2" />
        <line x1="656" y1="234" x2="672" y2="234" className="stroke-ink/70" strokeWidth="2" />
        <text x="664" y="258" textAnchor="middle" className="fill-ink/60" fontSize="11.5">toprak</text>
        <text x="664" y="282" textAnchor="middle" className="fill-ink/60" fontSize="11.5">Cisim nötr hâle gelir.</text>
      </Panel>
    </FigureSvg>
  )
}
