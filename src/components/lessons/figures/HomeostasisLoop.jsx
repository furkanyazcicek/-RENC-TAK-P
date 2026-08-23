import { useEffect, useState } from 'react'
import { FigureSvg, Marker, region } from './primitives'

/**
 * HOMEOSTAZİ — NEGATİF GERİ BİLDİRİM
 *
 * Öğrenciler homeostaziyi "iç dengenin korunması" diye ezberliyor ama
 * ==negatif geri bildirimin neden "negatif" olduğunu== bilmiyor. Şemanın
 * tek işi bu: döngünün sonundaki ok başa dönüp sapmayı SÖNDÜRÜYOR.
 * Bu yüzden geri dönüş oku kesikli ve "−" işaretiyle çizilmiştir.
 *
 * Aynı şema AYT'de Endokrin Sistem, Üriner Sistem ve Sinir Sistemi
 * konularında da kullanılacak; `data` ile örnek metinleri değişir.
 */

const DEFAULT = {
  stimulus: 'Sapma\n(vücut sıcaklığı yükseldi)',
  receptor: 'Reseptör\nsapmayı algılar',
  control: 'Kontrol merkezi\ndeğerlendirir',
  effector: 'Efektör\nterleme başlar',
  result: 'Sapma azalır\nnormale dönülür',
}

const STAGE_DETAILS = {
  uyari: { x: 86, title: 'Sapma oluşur', note: 'Sıcaklık normal aralığın üzerine çıkar.' },
  reseptor: { x: 190, title: 'Sapma ölçülür', note: 'Reseptör değişimi algılar; henüz düzeltme başlamamıştır.' },
  kontrol: { x: 300, title: 'Karar verilir', note: 'Kontrol merkezi ölçümü normal değerle karşılaştırır.' },
  efektor: { x: 420, title: 'Yanıt başlar', note: 'Ter bezleri çalışır ve sıcaklık düşmeye başlar.' },
  sonuc: { x: 570, title: 'Normal aralığa dönüş', note: 'Sapma küçülür; iç ortam yeniden kararlı hâle gelir.' },
  'geri-bildirim': { x: 680, title: 'Sistem kendini kapatır', note: 'Uyarı ortadan kalkınca terleme azalır; bu nedenle geri bildirim negatiftir.' },
}

function focusedRegion(key, activeRegion) {
  const props = region(key, activeRegion)
  return {
    ...props,
    style: {
      ...props.style,
      transform: activeRegion === key ? 'scale(1.025)' : 'scale(1)',
      transformBox: 'fill-box',
      transformOrigin: 'center',
      transition: 'opacity .4s ease, transform .5s cubic-bezier(.22,1,.36,1)',
    },
  }
}

function MultilineText({ x, y, text, className, fontSize = 14, weight = '650', lineHeight = 18 }) {
  const lines = String(text).split('\n')
  return (
    <text x={x} y={y} textAnchor="middle" className={className} fontSize={fontSize} fontWeight={weight}>
      {lines.map((line, index) => (
        <tspan key={index} x={x} dy={index === 0 ? 0 : lineHeight}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

export default function HomeostasisLoop({ data = {}, activeRegion = null }) {
  const labels = { ...DEFAULT, ...data }
  const [detailRegion, setDetailRegion] = useState(null)

  useEffect(() => {
    setDetailRegion(null)
    if (!activeRegion) return undefined
    const timer = window.setTimeout(() => setDetailRegion(activeRegion), 460)
    return () => window.clearTimeout(timer)
  }, [activeRegion])

  const detail = STAGE_DETAILS[detailRegion]
  const detailX = detail?.x ?? 60

  const boxes = [
    { key: 'uyari', x: 30, label: labels.stimulus, tone: 'warning' },
    { key: 'reseptor', x: 200, label: labels.receptor, tone: 'plain' },
    { key: 'kontrol', x: 370, label: labels.control, tone: 'brand' },
    { key: 'efektor', x: 540, label: labels.effector, tone: 'plain' },
  ]

  const FILL = {
    warning: 'fill-warning-100',
    brand: 'fill-brand-500/20',
    plain: 'fill-surface-sunken',
  }

  return (
    <FigureSvg
      viewBox="0 0 760 472"
      title="Homeostazi: negatif geri bildirim döngüsü"
      desc="Bir sapma reseptör tarafından algılanır, kontrol merkezi değerlendirir, efektör tepki verir ve sapma azalır. Geri bildirim negatiftir çünkü sonuç, kendisini başlatan sapmayı söndürür."
    >
      <defs>
        <marker id="homeo-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-ink/50" />
        </marker>
        <marker id="homeo-arrow-danger" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-danger-500" />
        </marker>
      </defs>

      {boxes.map((box, index) => (
        <g key={box.key} {...focusedRegion(box.key, activeRegion)}>
          <rect x={box.x} y="60" width="150" height="76" rx="8" className={FILL[box.tone]} />
          <Marker n={index + 1} x={box.x + 14} y={52} regionKey={box.key} activeRegion={activeRegion} r={13} />
          <MultilineText x={box.x + 75} y="94" text={box.label} className="fill-ink" />
          {index < boxes.length - 1 && (
            <line x1={box.x + 156} y1="98" x2={box.x + 164} y2="98" className="stroke-ink/50" strokeWidth="2.5" markerEnd="url(#homeo-arrow)" />
          )}
        </g>
      ))}

      {/* Sonuç */}
      <g {...focusedRegion('sonuc', activeRegion)}>
        <rect x="285" y="196" width="190" height="72" rx="8" className="fill-success-50" />
        <Marker n={5} x={299} y={188} regionKey="sonuc" activeRegion={activeRegion} r={13} />
        <MultilineText x="380" y="228" text={labels.result} className="fill-success-700" weight="700" />
        <path d="M690 142 V 232 H 481" className="fill-none stroke-ink/50" strokeWidth="2.5" markerEnd="url(#homeo-arrow)" />
      </g>

      {/* Negatif geri bildirim — sapmayı söndüren dönüş */}
      <g {...focusedRegion('geri-bildirim', activeRegion)}>
        <path d="M279 232 H 105 V 142" className="fill-none stroke-danger-500" strokeWidth="2.5" strokeDasharray="7 5" markerEnd="url(#homeo-arrow-danger)" />
        <Marker n={6} x={104} y={190} regionKey="geri-bildirim" activeRegion={activeRegion} r={13} />
        <circle cx="150" cy="232" r="15" className="fill-danger-500" />
        <text x="150" y="239" textAnchor="middle" className="fill-white" fontSize="20" fontWeight="800">
          −
        </text>
        <text x="150" y="288" textAnchor="middle" className="fill-danger-600" fontSize="13.5" fontWeight="700">
          negatif geri bildirim
        </text>
        <text x="150" y="308" textAnchor="middle" className="fill-ink/55" fontSize="12.5">
          sonuç, kendini başlatan sapmayı söndürür
        </text>
      </g>

      <text x="30" y="34" className="fill-ink/40" fontSize="12.5" fontWeight="700" letterSpacing="1.5">
        DÖNGÜ SAAT YÖNÜNDE İLERLER
      </text>

      <g>
        <line x1="30" y1="330" x2="730" y2="330" className="stroke-line-strong" strokeWidth="1" />
        <text x="38" y="357" className="fill-ink/45" fontSize="12" fontWeight="800" letterSpacing="1.2">SAPMANIN ZAMANLA DEĞİŞİMİ</text>
        <rect x="60" y="388" width="650" height="18" className="fill-success-100/70" />
        <text x="704" y="402" textAnchor="end" className="fill-success-700" fontSize="11.5" fontWeight="750">normal aralık</text>
        <line x1="60" y1="430" x2="710" y2="430" className="stroke-ink/25" strokeWidth="1.3" />
        <line x1="60" y1="374" x2="60" y2="430" className="stroke-ink/25" strokeWidth="1.3" />
        <path
          d="M60 376 C130 369 178 372 232 380 C310 392 360 404 440 399 C520 394 615 397 710 397"
          className="fill-none stroke-brand-600"
          strokeWidth="3"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={detail ? 0 : 1}
          style={{ transition: 'stroke-dashoffset 1.1s cubic-bezier(.22,1,.36,1)' }}
        />
        <g opacity={detail ? 1 : 0} style={{ transition: 'opacity .3s ease .15s' }}>
          <line x1={detailX} y1="371" x2={detailX} y2="432" className="stroke-brand-400" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx={detailX} cy={detailRegion === 'uyari' ? 376 : detailRegion === 'reseptor' ? 374 : detailRegion === 'kontrol' ? 387 : 398} r="5" className="fill-brand-600 stroke-surface" strokeWidth="2" />
          <text x="60" y="459" className="fill-brand-800" fontSize="12.5" fontWeight="850">{detail?.title}</text>
          <text x="230" y="459" className="fill-ink/62" fontSize="12.5">{detail?.note}</text>
        </g>
      </g>
    </FigureSvg>
  )
}
