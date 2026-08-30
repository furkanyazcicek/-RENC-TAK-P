import InteractiveGeoImage from './InteractiveGeoImage'

function GeoIcon({ name }) {
  const paths = {
    dagilis: <><circle cx="12" cy="10" r="3" /><path d="M12 22s6-6.4 6-12A6 6 0 0 0 6 10c0 5.6 6 12 6 12Z" /></>,
    neden: <><circle cx="11" cy="11" r="7" /><path d="m16.2 16.2 4 4M8.6 9a2.5 2.5 0 1 1 3.3 2.4c-.7.3-.9.8-.9 1.6M11 16h.01" /></>,
    ilgi: <><path d="M8 7h8a4 4 0 0 1 0 8h-2M16 17H8a4 4 0 0 1 0-8h2" /><path d="m7 12 3-3-3-3m10 6-3 3 3 3" /></>,
    mekan: <><path d="M3 18 8.2 6l5.2 7L16 9l5 9H3Z" /><path d="M3 18h18" /></>,
    olanak: <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16.5 8" /></>,
    zincir: <><path d="M5 7h10M9 4l-4 3 4 3M19 17H9m6-3 4 3-4 3" /></>,
    alternatif: <><path d="M4 7h7a5 5 0 0 1 5 5v6M20 17l-4 3-4-3" /><path d="M4 17h5" /></>,
  }
  return <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name] || paths.ilgi}</svg>
}

/** Dağılış → neden → karşılıklı ilgi refleksini tek vaka üzerinde öğretir. */
export function GeoReadingRoute({ data = {} }) {
  const steps = Array.isArray(data.steps) ? data.steps.slice(0, 3) : []
  return (
    <div className="geo-reading-route">
      <InteractiveGeoImage src={data.image} alt={data.imageAlt} hotspots={data.hotspots} label="Orografik yağış sahnesini keşfet" />
      <div className="geo-reading-route__scene" aria-label="Kıyı, dağ, yağış ve yerleşme ilişkisini gösteren şematik görünüm">
        <svg viewBox="0 0 820 285" role="img">
          <rect width="820" height="285" fill="rgb(var(--c-aqua-50))" />
          <path d="M0 205h820v80H0Z" fill="rgb(var(--c-aqua-300) / .46)" />
          <path d="M120 220 322 58l190 177Z" fill="rgb(var(--c-brand-200) / .72)" stroke="rgb(var(--c-brand-600) / .26)" />
          <path d="m279 92 43-34 50 43-32-5-19 25-18-25Z" fill="rgb(var(--c-surface))" />
          <path d="M30 205c90-15 144-7 225 20 104 35 176 12 268 9 82-3 163 12 297 2v49H0Z" fill="rgb(var(--c-success-500) / .28)" />
          <g fill="rgb(var(--c-ink) / .55)"><path d="M560 198h42v37h-42zM610 184h52v51h-52zM674 204h35v31h-35z" /></g>
          <path d="M406 137c42 25 51 53 90 90" fill="none" stroke="rgb(var(--c-aqua-600))" strokeWidth="4" strokeDasharray="7 6" />
          <path d="M73 66h130c25 0 31-36 8-45-22-9-36 2-42 16-24-13-58 3-57 29Z" fill="rgb(var(--c-surface))" stroke="rgb(var(--c-aqua-500) / .35)" />
          <path d="m107 82-12 27m49-27-12 27m49-27-12 27" stroke="rgb(var(--c-aqua-600))" strokeWidth="3" />
          <g className="geo-reading-route__labels"><text x="66" y="135">Nemli hava</text><text x="262" y="148">Yükselme</text><text x="435" y="167">Yağış</text><text x="574" y="166">Yerleşme</text></g>
        </svg>
        <div className="geo-reading-route__case"><span>Örnek vaka</span><strong>{data.caseTitle}</strong><p>{data.caseBody}</p></div>
      </div>
      <ol className="geo-reading-route__steps">{steps.map((step, index) => <li key={step.id || step.title}><span><GeoIcon name={step.icon} /><b>{index + 1}</b></span><small>{step.question}</small><strong>{step.title}</strong><p>{step.body}</p></li>)}</ol>
      {data.tyt && <TytInsight label="TYT’de nasıl yorumlanır?" text={data.tyt} />}
    </div>
  )
}

/** Doğal ve beşerî ortamı aynı peyzajda ayırır; bağı koparmaz. */
export function EnvironmentContrast({ data = {} }) {
  const pairs = Array.isArray(data.pairs) ? data.pairs.slice(0, 4) : []
  return (
    <div className="geo-environment">
      <InteractiveGeoImage src={data.image} alt={data.imageAlt} hotspots={data.hotspots} label="Peyzajdaki doğal ve beşerî unsurları keşfet" />
      <div className="geo-environment__scene"><svg viewBox="0 0 880 330" role="img" aria-label="Doğal ve beşerî unsurların birlikte gösterildiği coğrafi peyzaj"><rect width="880" height="330" fill="rgb(var(--c-aqua-50))" /><path d="M0 194 135 77l92 84 117-119 146 159 101-87 155 107 134-52v161H0Z" fill="rgb(var(--c-brand-200) / .62)" /><path d="M0 242c137-46 248-24 360-2 119 24 276 4 520-13v103H0Z" fill="rgb(var(--c-success-500) / .32)" /><path d="M288 184c12 51 66 62 119 73 67 14 112 44 143 73" fill="none" stroke="rgb(var(--c-aqua-600))" strokeWidth="22" /><g fill="rgb(var(--c-success-700) / .72)"><path d="m90 182-28 63h56Zm48-15-31 70h62Zm550 13-27 62h54Z" /></g><g fill="rgb(var(--c-ink) / .55)"><path d="M587 224h48v42h-48zM645 207h57v59h-57zM713 231h39v35h-39z" /></g><g stroke="rgb(var(--c-ink) / .65)" strokeWidth="6" fill="none"><path d="M348 244h117M362 244v37m89-37v49" /></g><g stroke="rgb(var(--c-warning-700) / .72)" strokeWidth="3"><path d="M72 278h180M80 292h170M96 306h147" /><path d="M85 267v50m40-55v55m42-55v55m42-48v48" /></g><g className="geo-environment__labels"><text x="55" y="54">DOĞAL ORTAM</text><text x="585" y="54">BEŞERÎ ORTAM</text><text x="120" y="139">yer şekli</text><text x="249" y="161">akarsu</text><text x="72" y="254">bitki</text><text x="108" y="326">tarla</text><text x="367" y="231">köprü</text><text x="598" y="196">yerleşme</text></g><path d="M438 62v128" stroke="rgb(var(--c-line-strong))" strokeDasharray="5 7" /><text x="453" y="102" className="geo-environment__bridge-label">aynı mekânda</text><text x="453" y="121" className="geo-environment__bridge-label">birlikte işler</text></svg></div>
      <div className="geo-environment__pairs">{pairs.map((pair) => <div key={pair.natural}><span>{pair.natural}</span><i>etkiler ↔ dönüşür</i><strong>{pair.human}</strong></div>)}</div>
      {data.tyt && <TytInsight label="TYT’de dikkat" text={data.tyt} />}
    </div>
  )
}

/** Neden–sonuç zincirini ve geri etkiyi semantik oklarla görünür kılar. */
export function GeoCauseEffectFlow({ data = {} }) {
  const steps = Array.isArray(data.steps) ? data.steps.slice(0, 5) : []
  return (
    <div className="geo-cause-flow">
      {data.image
        ? <InteractiveGeoImage src={data.image} alt={data.imageAlt} hotspots={data.hotspots} label="Kıyı ovasındaki neden ve sonuç bölgelerini keşfet" />
        : data.visual === 'coast' && <svg viewBox="0 0 840 220" role="img" aria-label="Akarsu, kıyı ovası, tarım ve yerleşmeyi gösteren kesit"><rect width="840" height="220" fill="rgb(var(--c-aqua-50))" /><path d="M0 145c128-23 214-3 321 13 137 21 270 5 519-23v85H0Z" fill="rgb(var(--c-success-500) / .3)" /><path d="M0 174h840v46H0Z" fill="rgb(var(--c-aqua-400) / .4)" /><path d="M210 125c85 18 130 36 190 95" fill="none" stroke="rgb(var(--c-aqua-700))" strokeWidth="12" /><g fill="rgb(var(--c-ink) / .55)"><path d="M520 126h45v39h-45zM575 112h54v53h-54zM641 132h39v33h-39z" /></g><g stroke="rgb(var(--c-warning-700) / .7)" strokeWidth="2"><path d="M62 144h118M70 157h110" /><path d="M80 127v45m35-49v49m35-42v42" /></g><g className="geo-cause-flow__labels"><text x="64" y="111">verimli ova</text><text x="217" y="103">akarsu</text><text x="534" y="96">yerleşme + sanayi</text><text x="690" y="188">deniz</text></g></svg>}
      <ol>{steps.map((step, index) => <li key={step.title} className={`tone-${step.tone || index + 1}`}><span>{index + 1}</span><small>{step.role}</small><strong>{step.title}</strong><p>{step.body}</p></li>)}</ol>
      {data.inference && <div className="geo-cause-flow__inference"><span>Coğrafi çıkarım</span><strong>{data.inference}</strong></div>}
    </div>
  )
}

/** İnsan–doğa kararını dört aşamalı, tekrar kullanılabilir değerlendirme rotasına dönüştürür. */
export function GeoProcessDiagram({ data = {} }) {
  const steps = Array.isArray(data.steps) ? data.steps.slice(0, 5) : []
  return <div className="geo-process"><div className="geo-process__heading"><span>Karar merceği</span><strong>{data.title}</strong><p>{data.intro}</p></div><ol>{steps.map((step, index) => <li key={step.title}><span><GeoIcon name={step.icon} /><b>{String(index + 1).padStart(2, '0')}</b></span><strong>{step.title}</strong><p>{step.body}</p></li>)}</ol>{data.tyt && <TytInsight label="TYT’de karar kuralı" text={data.tyt} />}</div>
}

function TytInsight({ label, text }) {
  return <div className="geo-tyt-insight"><span>{label}</span><strong>{text}</strong></div>
}

/** Her yeni konuda aynı erişilebilir hotspot dilini kullanan genel atlas yüzeyi. */
export function GeoAnnotatedAtlas({ data = {} }) {
  return (
    <div className="geo-annotated-atlas">
      <InteractiveGeoImage
        src={data.image}
        alt={data.imageAlt}
        hotspots={data.hotspots}
        label={data.label || 'Görsel üzerindeki coğrafi ilişkileri keşfet'}
      />
      {data.tyt && <TytInsight label={data.tytLabel || 'TYT’de ana çıkarım'} text={data.tyt} />}
    </div>
  )
}
