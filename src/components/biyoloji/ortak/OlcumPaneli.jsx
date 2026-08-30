export default function OlcumPaneli({ olcumler=[] }) { return <dl className="ba-olcum-paneli">{olcumler.map(({etiket,deger,birim='',vurgu})=><div key={etiket} className={vurgu?'vurgu':''}><dt>{etiket}</dt><dd>{deger}<small>{birim}</small></dd></div>)}</dl> }

