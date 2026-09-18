import { ArrowHeads, FigureSvg, region } from './primitives'

/**
 * LGS FEN — ELEKTRİKLENME ÇEŞİTLERİ
 * ==================================================================
 *
 * NEDEN BU ŞEMA VAR?
 * F.8.7.1.3: "Deneyler yaparak elektriklenme çeşitlerini fark eder."
 * Üç çeşit (sürtünme, dokunma, etki) öğrencilerin en çok karıştırdığı
 * konudur; çünkü üçünde de "yük" var ama yükün nereye gittiği farklıdır.
 * Şema her panelde ÖNCE ve SONRA durumunu yan yana gösterir; yük
 * işaretlerinin sayısı yükün korunduğunu hissettirecek biçimde seçildi
 * (sayısal yük hesabı yoktur).
 *
 * BÖLGE SIRASI (registry ile aynı olmak zorunda):
 *   surtunme → dokunma → etki
 */

function Isaretler({ noktalar, isaret }) {
  const eksi = isaret === '-'
  return noktalar.map(([x, y], i) => (
    <text
      key={`${isaret}-${i}-${x}-${y}`}
      x={x}
      y={y}
      textAnchor="middle"
      className={eksi ? 'fill-brand-700' : 'fill-accent-700'}
      fontSize="15"
      fontWeight="700"
    >
      {eksi ? '−' : '+'}
    </text>
  ))
}

function Panel({ x0, baslik, children, not, regionKey, activeRegion }) {
  return (
    <g {...region(regionKey, activeRegion)}>
      <rect x={x0} y="12" width="232" height="306" rx="10" className="fill-surface-sunken stroke-ink/15" strokeWidth="1.2" />
      <text x={x0 + 16} y="40" className="fill-ink" fontSize="15.5" fontWeight="700">
        {baslik}
      </text>
      {children}
      <text x={x0 + 116} y="296" textAnchor="middle" className="fill-ink/60" fontSize="11.5">
        {not}
      </text>
    </g>
  )
}

export default function ScienceChargingTypes({ activeRegion }) {
  return (
    <FigureSvg
      viewBox="0 0 760 330"
      title="Elektriklenme çeşitleri"
      desc={
        'Üç panel. Sürtünme ile elektriklenme: plastik çubuk yün kumaşa sürtülünce çubuk eksi, kumaş artı yüklenir; yükler eşit miktarda ve zıt cinstir. ' +
        'Dokunma ile elektriklenme: eksi yüklü bir iletken küre nötr iletken küreye dokunduğunda elektronların bir kısmı geçer; iki küre de eksi yüklenir. ' +
        'Etki ile elektriklenme: eksi yüklü çubuk nötr iletken küreye dokunmadan yaklaştırılınca kürenin yakın ucunda artı, uzak ucunda eksi yükler toplanır.'
      }
    >
      <ArrowHeads prefix="lgsyuk" />

      {/* 1 — Sürtünme */}
      <Panel x0={12} baslik="Sürtünme ile" not="Zıt cins ve eşit miktarda yük" regionKey="surtunme" activeRegion={activeRegion}>
        <text x="28" y="66" className="fill-ink/50" fontSize="11" fontWeight="700" letterSpacing="0.05em">ÖNCE</text>
        <rect x="40" y="78" width="120" height="16" rx="8" className="fill-ink/25" />
        <rect x="170" y="70" width="46" height="32" rx="6" className="fill-aqua-100 stroke-aqua-500" strokeWidth="1.2" />
        <text x="100" y="118" textAnchor="middle" className="fill-ink/60" fontSize="11">plastik çubuk</text>
        <text x="193" y="118" textAnchor="middle" className="fill-ink/60" fontSize="11">yün</text>
        <text x="128" y="150" textAnchor="middle" className="fill-ink/55" fontSize="12">sürtünür ↓</text>
        <text x="28" y="182" className="fill-ink/50" fontSize="11" fontWeight="700" letterSpacing="0.05em">SONRA</text>
        <rect x="40" y="194" width="120" height="16" rx="8" className="fill-ink/25" />
        <Isaretler noktalar={[[58, 207], [82, 207], [106, 207], [130, 207]]} isaret="-" />
        <rect x="170" y="186" width="46" height="32" rx="6" className="fill-aqua-100 stroke-aqua-500" strokeWidth="1.2" />
        <Isaretler noktalar={[[182, 202], [204, 202], [182, 216], [204, 216]]} isaret="+" />
        <text x="100" y="236" textAnchor="middle" className="fill-brand-700" fontSize="11.5" fontWeight="650">çubuk: eksi</text>
        <text x="193" y="236" textAnchor="middle" className="fill-accent-700" fontSize="11.5" fontWeight="650">yün: artı</text>
        <text x="128" y="262" textAnchor="middle" className="fill-ink/60" fontSize="11.5">Elektronlar yünden çubuğa geçti.</text>
      </Panel>

      {/* 2 — Dokunma */}
      <Panel x0={264} baslik="Dokunma ile" not="İki cisim de aynı cins yükle yüklenir" regionKey="dokunma" activeRegion={activeRegion}>
        <text x="280" y="66" className="fill-ink/50" fontSize="11" fontWeight="700" letterSpacing="0.05em">ÖNCE</text>
        <circle cx="330" cy="112" r="26" className="fill-brand-50 stroke-brand-400" strokeWidth="1.4" />
        <Isaretler noktalar={[[320, 106], [340, 106], [320, 124], [340, 124]]} isaret="-" />
        <circle cx="414" cy="112" r="26" className="fill-surface stroke-ink/35" strokeWidth="1.4" />
        <text x="414" y="117" textAnchor="middle" className="fill-ink/55" fontSize="11.5">nötr</text>
        <text x="372" y="160" textAnchor="middle" className="fill-ink/55" fontSize="12">dokundurulur, ayrılır ↓</text>
        <text x="280" y="182" className="fill-ink/50" fontSize="11" fontWeight="700" letterSpacing="0.05em">SONRA</text>
        <circle cx="330" cy="222" r="26" className="fill-brand-50 stroke-brand-400" strokeWidth="1.4" />
        <Isaretler noktalar={[[320, 226], [340, 226]]} isaret="-" />
        <circle cx="414" cy="222" r="26" className="fill-brand-50 stroke-brand-400" strokeWidth="1.4" />
        <Isaretler noktalar={[[404, 226], [424, 226]]} isaret="-" />
        <text x="372" y="270" textAnchor="middle" className="fill-ink/60" fontSize="11.5">Elektronların bir kısmı geçti.</text>
      </Panel>

      {/* 3 — Etki */}
      <Panel x0={516} baslik="Etki ile" not="Dokunmadan: yükler ayrışır" regionKey="etki" activeRegion={activeRegion}>
        <text x="532" y="66" className="fill-ink/50" fontSize="11" fontWeight="700" letterSpacing="0.05em">YAKLAŞTIRILINCA</text>
        {/* Eksi yüklü çubuk */}
        <rect x="536" y="150" width="64" height="16" rx="8" className="fill-ink/25" />
        <Isaretler noktalar={[[550, 163], [568, 163], [586, 163]]} isaret="-" />
        <text x="568" y="190" textAnchor="middle" className="fill-ink/60" fontSize="11">yüklü çubuk</text>
        {/* Nötr iletken küre: yakın uç artı, uzak uç eksi */}
        <circle cx="672" cy="158" r="44" className="fill-surface stroke-ink/35" strokeWidth="1.4" />
        <Isaretler noktalar={[[640, 146], [638, 164], [640, 182]]} isaret="+" />
        <Isaretler noktalar={[[704, 146], [706, 164], [704, 182]]} isaret="-" />
        <line x1="606" y1="158" x2="622" y2="158" className="stroke-ink/40" strokeWidth="1.4" strokeDasharray="3 3" />
        <text x="672" y="226" textAnchor="middle" className="fill-ink/60" fontSize="11">nötr iletken küre</text>
        <text x="632" y="252" textAnchor="middle" className="fill-ink/60" fontSize="11.5">Yakın uç zıt, uzak uç aynı</text>
        <text x="632" y="268" textAnchor="middle" className="fill-ink/60" fontSize="11.5">cins yükle yüklenir.</text>
      </Panel>
    </FigureSvg>
  )
}
