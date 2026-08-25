import { Pause, Play, Redo2, RotateCcw, SkipBack, SkipForward } from 'lucide-react'

export function Kaydirici({ etiket, deger, birim='', min=0, max=100, step=1, onChange, disabled=false }) {
  return <label className="ba-kaydirici"><span>{etiket}<output>{deger}{birim ? ` ${birim}` : ''}</output></span><input type="range" aria-label={etiket} min={min} max={max} step={step} value={deger} disabled={disabled} onChange={(e)=>onChange(Number(e.target.value))}/><small><i>{min}{birim}</i><i>{max}{birim}</i></small></label>
}

export function SecimSeridi({ etiket, deger, secenekler, onChange }) {
  return <fieldset className="ba-secim-seridi"><legend>{etiket}</legend><div>{secenekler.map((s)=>{const value=typeof s==='string'?s:s.value; const label=typeof s==='string'?s:s.label; return <button key={value} type="button" className={deger===value?'etkin':''} aria-pressed={deger===value} onClick={()=>onChange(value)}>{label}</button>})}</div></fieldset>
}

export function Anahtar({ etiket, acik, onChange, acikMetin='Var', kapaliMetin='Yok' }) {
  return <label className="ba-anahtar"><span>{etiket}<small>{acik?acikMetin:kapaliMetin}</small></span><input type="checkbox" role="switch" checked={acik} onChange={(e)=>onChange(e.target.checked)}/><i/></label>
}

export function DurumRozeti({ durum='hazır' }) { return <span className={`ba-durum ${durum.replaceAll(' ','-')}`}><i/>{durum}</span> }

export function SimKontrol({ oynuyor, onOynat, onAdim, onGeri, onSifirla, hiz=1, onHiz, geri=true, ileri=true }) {
  return <div className="ba-sim-kontrol" aria-label="Simülasyon zaman kontrolleri">
    <button type="button" onClick={onSifirla} aria-label="Sıfırla"><RotateCcw/></button>
    <button type="button" onClick={onGeri} disabled={!geri} aria-label="Geri adımla"><SkipBack/></button>
    <button type="button" className="ana" onClick={onOynat} aria-label={oynuyor?'Duraklat':'Oynat'}>{oynuyor?<Pause/>:<Play/>}<span>{oynuyor?'Duraklat':'Çalıştır'}</span></button>
    <button type="button" onClick={onAdim} disabled={!ileri} aria-label="İleri adımla"><SkipForward/></button>
    {onHiz?<label>Hız<select aria-label="Simülasyon hızı" value={hiz} onChange={(e)=>onHiz(Number(e.target.value))}>{[.25,.5,1,2].map((x)=><option key={x} value={x}>{String(x).replace('.',',')}×</option>)}</select></label>:null}
  </div>
}

export function GeriAl({ onClick, disabled }) { return <button className="ba-geri-al" type="button" onClick={onClick} disabled={disabled}><Redo2/> Son işlemi geri al</button> }

