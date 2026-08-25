export function Kaydirici({ etiket, deger, min, max, adim = 1, birim = '', onChange, alt, ust }) {
  return (
    <label className="ca-kaydirici">
      <span>{etiket}<output>{deger}{birim}</output></span>
      <input type="range" min={min} max={max} step={adim} value={deger} onChange={(event) => onChange(Number(event.target.value))} />
      <small><i>{alt ?? min}</i><i>{ust ?? max}</i></small>
    </label>
  )
}

export function Secim({ etiket, deger, secenekler, onChange }) {
  return (
    <fieldset className="ca-secim"><legend>{etiket}</legend><div>{secenekler.map((secenek) => { const value = typeof secenek === 'string' ? secenek : secenek.value; const label = typeof secenek === 'string' ? secenek : secenek.label; return <button key={value} type="button" className={deger === value ? 'etkin' : ''} aria-pressed={deger === value} onClick={() => onChange(value)}>{label}</button> })}</div></fieldset>
  )
}

export function Olcumler({ degerler }) {
  return <dl className="ca-olcumler">{degerler.map(({ etiket, deger, birim, vurgu }) => <div key={etiket} className={vurgu ? 'vurgu' : ''}><dt>{etiket}</dt><dd>{deger}<small>{birim}</small></dd></div>)}</dl>
}

export function Mekanizma({ children, tur = 'bilgi' }) {
  return <p className={`ca-mekanizma ${tur}`}>{children}</p>
}
