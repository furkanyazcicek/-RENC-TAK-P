import { useMemo, useState } from 'react'

const clamp = (value) => Math.min(96, Math.max(4, Number(value) || 50))

export default function KatmanliHarita({ points = [], baslik = 'Katmanlı Dünya', aktifKatman = 'dogal', onSecim }) {
  const temiz = useMemo(() => points.filter((p) => p?.id && p?.title).slice(0, 8), [points])
  const [aktifId, setAktifId] = useState(temiz[0]?.id)
  const aktif = temiz.find((p) => p.id === aktifId) ?? temiz[0]
  const sec = (point) => { setAktifId(point.id); onSecim?.(point) }
  return (
    <div className="ca-katmanli-harita">
      <div className="ca-harita-bas"><div><span>Haritada gör</span><strong>{baslik}</strong></div><small>{aktifKatman} katmanı · {temiz.length} nokta</small></div>
      <div className="ca-harita-grid">
        <div className={`ca-dunya tone-${aktifKatman}`}>
          <svg viewBox="0 0 1000 520" role="img" aria-label={`${baslik}; konumlar öğretim amaçlı şematiktir`}>
            <rect width="1000" height="520" rx="22" className="okyanus"/><g className="izgara"><path d="M0 130H1000M0 260H1000M0 390H1000M250 0V520M500 0V520M750 0V520"/></g>
            <g className="kara"><path d="M70 102 143 54l111 17 102 47 33 63-90 24-38 48-79-22-42-56-72-34Z"/><path d="m280 255 75 30 20 72-45 138-43-72 13-70-35-57Z"/><path d="m445 113 58-50 102 18 53 40 156-10 124 44-9 56-112 31-88-18-54 22-55-47-68 19-75-36-56 10Z"/><path d="m505 230 83-16 70 43-6 84-45 94-62-28-23-82-44-49Z"/><path d="m794 343 75-29 76 39-19 66-80 7-51-32Z"/></g>
          </svg>
          {temiz.map((point, index) => <button key={point.id} type="button" className={point.id === aktif?.id ? 'aktif' : ''} style={{ left: `${clamp(point.x)}%`, top: `${clamp(point.y)}%` }} aria-label={`${point.title}: bilgi kartını aç`} aria-pressed={point.id === aktif?.id} onClick={() => sec(point)}><span>{index + 1}</span></button>)}
          <em>Konumlar şematiktir</em>
        </div>
        {aktif ? <aside aria-live="polite"><span>{aktif.region}</span><h3>{aktif.title}</h3><p>{aktif.summary}</p><dl><dt>Neden burada?</dt><dd>{aktif.significance}</dd><dt>Sonuç</dt><dd>{aktif.result}</dd></dl><strong>TYT ipucu</strong><p>{aktif.examTip}</p></aside> : null}
      </div>
      <div className="ca-harita-mobil">{temiz.map((point, index) => <button key={point.id} type="button" aria-pressed={point.id === aktif?.id} onClick={() => sec(point)}><span>{index + 1}</span>{point.title}</button>)}</div>
    </div>
  )
}
