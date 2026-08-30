import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, Compass, HeartCrack, Lightbulb } from 'lucide-react'
import { YANILGILAR } from '../../../data/biyoloji/yanilgilar.js'
import { etkilesimTamamla } from '../../../lib/biyoloji/ilerleme.js'
import BolgeBasligi from '../ortak/BolgeBasligi.jsx'

export default function PusulaBolgesi() {
  const [secili,setSecili]=useState(YANILGILAR[0].id);const [asama,setAsama]=useState(0);const [yanit,setYanit]=useState(null)
  const y=useMemo(()=>YANILGILAR.find((x)=>x.id===secili),[secili])
  const adimlar=[['Neden cazip?',y.nedenCazip],['Kanıt ne diyor?',y.kanit],['Modeli düzelt',y.duzeltme],['Transfer et',y.transferSorusu]]
  const tamamla=(i)=>{setYanit(i);if(asama===3&&i===0){etkilesimTamamla('kavram-pusulasi','pusula',{tahmin:true,gorev:true,kontrol:true});window.dispatchEvent(new CustomEvent('biyoloji-ilerleme'))}}
  return <div className="ba-bolge"><BolgeBasligi no="09" kapsam="Tüm kapsamlara yayılır" baslik="Kavram Pusulası" aciklama="Yanlışını kanıt zinciriyle teşhis et, modeli düzelt ve yeni bağlama aktar." renk="#ff9f6e" deney={1}/><section className="ba-pusula-panel"><aside><label htmlFor="yanilgi">Hedef yanılgı</label><select id="yanilgi" value={secili} onChange={(e)=>{setSecili(e.target.value);setAsama(0);setYanit(null)}}>{YANILGILAR.map((x)=><option key={x.id} value={x.id}>{x.yanilgi}</option>)}</select><div className="ba-pusula-gosterge"><Compass/><span style={{transform:`rotate(${asama*42-62}deg)`}}/><b>{asama+1}/4</b></div></aside><main><span className="ba-etiket"><HeartCrack/> Yanılgı teşhisi</span><h2>{y.yanilgi}</h2><div className="ba-pusula-adimlar">{adimlar.map(([a],i)=><button key={a} onClick={()=>{setAsama(i);setYanit(null)}} className={i===asama?'etkin':i<asama?'bitti':''}><span>{i<asama?<CheckCircle2/>:i+1}</span>{a}</button>)}</div><article><Lightbulb/><div><h3>{adimlar[asama][0]}</h3><p>{adimlar[asama][1]}</p></div></article>{asama===3?<><div className="ba-secimler"><button onClick={()=>tamamla(0)}>Kanıt ve mekanizmayla yanıtlarım</button><button onClick={()=>tamamla(1)}>Eski kuralı aynen uygularım</button></div>{yanit!==null?<p className={`ba-mekanizma ${yanit===0?'olumlu':'uyari'}`}>{yanit===0?'Yanılgı aşıldı ve ilerlemene kaydedildi.':'Transferde bağlamı ve değişen süreci yeniden izle.'}</p>:null}</>:<button className="ba-ana-dugme" onClick={()=>setAsama((a)=>Math.min(3,a+1))}>Sonraki kanıt <ArrowRight/></button>}</main></section></div>
}
