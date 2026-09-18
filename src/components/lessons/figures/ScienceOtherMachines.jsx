import { FigureSvg, region } from './primitives'

/**
 * LGS FEN — DİŞLİ ÇARK, VİDA VE KASNAK
 * ==================================================================
 *
 * NEDEN BU ŞEMA VAR?
 * F.8.5.1.1'in açıklaması: "Dişli çarklar, vida ve kasnakların da birer
 * basit makine olduğu görsellerle belirtilir, ayrıntıya girilmez."
 * Program burada bilinçli olarak YALNIZ tanıma ister. Şema bu yüzden
 * sade tutuldu: üç makine, her birinin tek cümlelik işi ve günlük örneği.
 * Dişli oranı, vida adımı gibi ayrıntılar kasıtlı olarak yoktur.
 *
 * BÖLGE SIRASI (registry ile aynı olmak zorunda):
 *   disli → vida → kasnak
 */

function Disli({ cx, cy, r, dis, faz = 0 }) {
  // Dişler: dairenin çevresine eşit aralıkla yerleşmiş küçük dikdörtgenler.
  const disler = Array.from({ length: dis }, (_, i) => (360 / dis) * i + faz)
  return (
    <g>
      {disler.map((aci) => (
        <rect
          key={aci}
          x={cx - 5}
          y={cy - r - 9}
          width="10"
          height="12"
          rx="2"
          className="fill-brand-400"
          transform={`rotate(${aci} ${cx} ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={r} className="fill-brand-100 stroke-brand-500" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="5" className="fill-brand-500" />
    </g>
  )
}

export default function ScienceOtherMachines({ activeRegion }) {
  return (
    <FigureSvg
      viewBox="0 0 760 290"
      title="Dişli çark, vida ve kasnak"
      desc={
        'Üç basit makine yan yana. Dişli çark: dişleri birbirine geçen iki tekerlek; biri dönünce öbürü ters yönde döner. ' +
        'Vida: bir silindirin çevresine sarılmış eğik düzlem. Kasnak: bir kayışla birbirine bağlı iki tekerlek; biri dönünce öbürü de aynı yönde döner.'
      }
    >
      {/* 1 — Dişli çark */}
      <g {...region('disli', activeRegion)}>
        <rect x="12" y="12" width="232" height="266" rx="10" className="fill-surface-sunken stroke-ink/15" strokeWidth="1.2" />
        <text x="28" y="40" className="fill-ink" fontSize="15.5" fontWeight="700">Dişli çark</text>
        <Disli cx={92} cy={128} r={38} dis={12} />
        <Disli cx={170} cy={128} r={28} dis={9} faz={20} />
        <text x="128" y="218" textAnchor="middle" className="fill-ink/70" fontSize="12">Dişler birbirine geçer;</text>
        <text x="128" y="235" textAnchor="middle" className="fill-ink/70" fontSize="12">hareketi aktarır.</text>
        <text x="128" y="262" textAnchor="middle" className="fill-ink/55" fontSize="11.5" fontStyle="italic">Bisiklet, saat, el matkabı</text>
      </g>

      {/* 2 — Vida */}
      <g {...region('vida', activeRegion)}>
        <rect x="264" y="12" width="232" height="266" rx="10" className="fill-surface-sunken stroke-ink/15" strokeWidth="1.2" />
        <text x="280" y="40" className="fill-ink" fontSize="15.5" fontWeight="700">Vida</text>
        {/* Baş */}
        <rect x="342" y="62" width="76" height="16" rx="4" className="fill-ink/60" />
        {/* Gövde */}
        <rect x="364" y="78" width="32" height="104" className="fill-ink/15 stroke-ink/40" strokeWidth="1.2" />
        {/* Diş çizgileri: sarılmış eğik düzlem */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={i} x1="360" y1={86 + i * 14} x2="400" y2={96 + i * 14} className="stroke-accent-500" strokeWidth="2.4" strokeLinecap="round" />
        ))}
        {/* Uç */}
        <path d="M364,182 L396,182 L380,202 Z" className="fill-ink/40" />
        <text x="380" y="226" textAnchor="middle" className="fill-ink/70" fontSize="12">Silindire sarılmış</text>
        <text x="380" y="243" textAnchor="middle" className="fill-ink/70" fontSize="12">bir eğik düzlemdir.</text>
        <text x="380" y="266" textAnchor="middle" className="fill-ink/55" fontSize="11.5" fontStyle="italic">Vida, kavanoz kapağı, burgu</text>
      </g>

      {/* 3 — Kasnak */}
      <g {...region('kasnak', activeRegion)}>
        <rect x="516" y="12" width="232" height="266" rx="10" className="fill-surface-sunken stroke-ink/15" strokeWidth="1.2" />
        <text x="532" y="40" className="fill-ink" fontSize="15.5" fontWeight="700">Kasnak</text>
        {/* Kayış: iki tekerleğin dış teğetleri */}
        <line x1="578" y1="92" x2="688" y2="106" className="stroke-ink/55" strokeWidth="3" />
        <line x1="578" y1="164" x2="688" y2="150" className="stroke-ink/55" strokeWidth="3" />
        <circle cx="578" cy="128" r="36" className="fill-aqua-100 stroke-aqua-500" strokeWidth="2" />
        <circle cx="578" cy="128" r="5" className="fill-aqua-500" />
        <circle cx="688" cy="128" r="22" className="fill-aqua-100 stroke-aqua-500" strokeWidth="2" />
        <circle cx="688" cy="128" r="4" className="fill-aqua-500" />
        <text x="632" y="218" textAnchor="middle" className="fill-ink/70" fontSize="12">Tekerlekler bir kayışla</text>
        <text x="632" y="235" textAnchor="middle" className="fill-ink/70" fontSize="12">birbirine bağlıdır.</text>
        <text x="632" y="262" textAnchor="middle" className="fill-ink/55" fontSize="11.5" fontStyle="italic">Dikiş makinesi, çamaşır makinesi</text>
      </g>
    </FigureSvg>
  )
}
