export function CizgiGrafigi({ veriler, xEtiket = 'Ay', yEtiket = 'Değer', renk = '#55b7e8', birim = '', aciklama }) {
  const width = 620; const height = 250; const pad = 34
  const sayilar = veriler.map((v) => Number(v)).filter(Number.isFinite)
  const min = Math.min(0, ...sayilar); const max = Math.max(1, ...sayilar)
  const points = veriler.map((v, i) => {
    const x = pad + (i / Math.max(1, veriler.length - 1)) * (width - pad * 2)
    const y = height - pad - ((Number(v) - min) / Math.max(1, max - min)) * (height - pad * 2)
    return `${x},${y}`
  }).join(' ')
  return (
    <figure className="ca-grafik">
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={aciklama || `${xEtiket} ve ${yEtiket} ilişkisi`}>
        <g className="grid">{[0, 1, 2, 3, 4].map((i) => <line key={i} x1={pad} x2={width - pad} y1={pad + i * ((height - pad * 2) / 4)} y2={pad + i * ((height - pad * 2) / 4)} />)}</g>
        <line className="eksen" x1={pad} y1={height - pad} x2={width - pad} y2={height - pad}/><line className="eksen" x1={pad} y1={pad} x2={pad} y2={height - pad}/>
        <polyline points={points} fill="none" stroke={renk} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
        {points.split(' ').map((point, i) => { const [x, y] = point.split(','); return <circle key={i} cx={x} cy={y} r="4" fill={renk}><title>{`${i + 1}: ${veriler[i]}${birim}`}</title></circle> })}
        <text x={width / 2} y={height - 5} textAnchor="middle">{xEtiket}</text><text transform={`translate(12 ${height / 2}) rotate(-90)`} textAnchor="middle">{yEtiket} {birim}</text>
      </svg>
      <figcaption>{aciklama || `${veriler.length} noktalı veri serisi. En düşük ${min}${birim}, en yüksek ${max}${birim}.`}</figcaption>
    </figure>
  )
}

export function SutunGrafigi({ veriler, etiketler, renk = '#69c6a3', birim = '%', aciklama }) {
  const max = Math.max(1, ...veriler.map(Number))
  return <figure className="ca-sutun-grafik" role="img" aria-label={aciklama}><div>{veriler.map((deger, index) => <span key={`${etiketler[index]}-${index}`}><i style={{ height: `${(Number(deger) / max) * 100}%`, background: renk }}><b>{Number(deger).toFixed(1)}{birim}</b></i><small>{etiketler[index]}</small></span>)}</div><figcaption>{aciklama}</figcaption></figure>
}
