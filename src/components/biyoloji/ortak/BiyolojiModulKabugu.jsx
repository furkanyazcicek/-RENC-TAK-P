import { CheckCircle2, Heart, Info, Lightbulb, LockKeyhole, Scale, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { etkilesimTamamla, favoriDegistir, ilerlemeOku } from '../../../lib/biyoloji/ilerleme.js'
import { etkilesimKaydi } from '../../../data/biyoloji/etkilesimler.js'

export default function BiyolojiModulKabugu({ id, bolge, baslik, soru, tahminler, aciklama, yanilgi, modelVarsayimi, olcek='Temsili hücre/organizma ölçeği', gorevTamam=false, kontrol, children }) {
  const kayit=useMemo(()=>etkilesimKaydi(id),[id])
  const [seviye,setSeviye]=useState('kesfet'); const [tahmin,setTahmin]=useState(null); const [yanit,setYanit]=useState(null); const [hata,setHata]=useState(0)
  const [favori,setFavori]=useState(()=>ilerlemeOku().favoriler.includes(id)); const [tamam,setTamam]=useState(()=>Boolean(ilerlemeOku().tamamlananlar[id]))
  const kontrolDogru=yanit===kontrol?.dogru
  const cevapla=(i)=>{setYanit(i); if(i!==kontrol?.dogru){setHata(h=>h+1);return} if(gorevTamam&&!tamam){etkilesimTamamla(id,bolge,{tahmin:tahmin!==null,gorev:true,kontrol:true});setTamam(true);window.dispatchEvent(new CustomEvent('biyoloji-ilerleme'))}}
  return <article className="ba-modul" id={id} data-component-key={kayit?.componentKey} data-engine-key={kayit?.engineKey} data-interaction-type={kayit?.interactionType}>
    <header className="ba-modul-baslik"><div><span className="ba-etiket">{kayit?.interactionType.replaceAll('-',' ')} · gerçek öğrenme alanı</span><h2>{baslik}</h2><p>{soru}</p></div><div className="ba-modul-eylem"><button className={favori?'etkin':''} aria-label={favori?'Favorilerden çıkar':'Favoriye ekle'} onClick={()=>{const p=favoriDegistir(id);setFavori(p.favoriler.includes(id))}}><Heart fill={favori?'currentColor':'none'}/></button>{tamam?<span><CheckCircle2/> Tamamlandı</span>:<span><LockKeyhole/> Görev bekliyor</span>}</div></header>
    <nav className="ba-seviye" aria-label="Öğrenme seviyesi">{[['kesfet','Keşfet'],['ogren','Öğren'],['ustalas','Ustalaş']].map(([k,a])=><button key={k} className={seviye===k?'etkin':''} onClick={()=>setSeviye(k)}>{a}</button>)}</nav>
    {seviye!=='kesfet'?<section className="ba-tahmin"><h3><Lightbulb/> Önce tahmin et</h3><div>{tahminler.map((x,i)=><button key={x} className={tahmin===i?'secili':''} onClick={()=>setTahmin(i)}>{x}</button>)}</div>{tahmin!==null?<p className={tahmin===0?'olumlu':'uyari'}>{tahmin===0?aciklama:yanilgi}</p>:null}</section>:null}
    <div className="ba-deney-alani">{children}</div>
    {seviye==='ustalas'?<section className="ba-kontrol"><h3><Star/> Öğrenme kontrolü</h3><p>{kontrol.soru}</p><div>{kontrol.secenekler.map((x,i)=><button key={x} className={yanit===i?(i===kontrol.dogru?'dogru':'yanlis'):''} onClick={()=>cevapla(i)}>{x}</button>)}</div>{hata===1&&!kontrolDogru?<p className="ipucu"><Lightbulb/> İpucu: {kontrol.ipucu}</p>:null}{hata>=2&&!kontrolDogru?<p className="cozum"><Info/> Çözüm yaklaşımı: {kontrol.cozum}</p>:null}{kontrolDogru&&!gorevTamam?<p className="uyari">Kontrol doğru; tamamlanmak için laboratuvardaki hedef durumu da oluştur.</p>:null}{kontrolDogru&&gorevTamam?<p className="olumlu"><CheckCircle2/> Görev ve kontrol birlikte tamamlandı; ilerlemeye kaydedildi.</p>:null}</section>:null}
    <footer className="ba-model-not"><span><Scale/> <b>Temsil ölçeği:</b> {olcek}</span><span><Info/> <b>Model varsayımı:</b> {modelVarsayimi}</span></footer>
  </article>
}
