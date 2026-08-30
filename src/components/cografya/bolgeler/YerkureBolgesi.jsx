import { useState } from 'react'
import { BolgeBasligi, Mekanizma, ModulKabugu, Olcumler, Secim } from '../ortak/index.js'
import YerSekilleriLaboratuvari from './YerSekilleriLaboratuvari.jsx'

const SINIRLAR = {
  yaklasan: { ad: 'Yaklaşan levhalar', hareket: '→ ←', urun: 'Sıkışma, kıvrım/volkanizma ve deprem', renk: '#ef8b65' },
  uzaklasan: { ad: 'Uzaklaşan levhalar', hareket: '← →', urun: 'Yeni kabuk ve okyanus sırtı', renk: '#5cc9b2' },
  transform: { ad: 'Yanal hareket', hareket: '⇄', urun: 'Fay boyunca deprem', renk: '#b597ef' },
}

export default function YerkureBolgesi() {
  const [sinir, setSinir] = useState('yaklasan')
  const aktif = SINIRLAR[sinir]
  return <div className="ca-bolge"><BolgeBasligi bolge="yerkure" aciklama="Yer şekillerini ezberlenmiş adlardan değil; enerji, süreç ve zaman ilişkisinden çöz."/>
    <ModulKabugu id="levha-surecleri" bolge="yerkure" baslik="Levha sınırları laboratuvarı" aciklama="Hareket yönünü değiştir; oluşabilecek yer şekli ve afet zincirini kanıtla." yanilgiId="sekil-ad" tahmin={{soru:'İki levha birbirine yaklaştığında hangi süreç daha olasıdır?',secenekler:['Sıkışma','Yeni kabuk açılması','Süreç oluşmaz']}} kontrol={{soru:'Transform sınırın en doğrudan sonucu hangisidir?',secenekler:['Yanal faylanma ve deprem','Mercan oluşumu','Delta büyümesi'],cevap:0,aciklama:'Yanal hareket fay boyunca gerilim biriktirir ve boşaltır.'}} transfer={{soru:'Okyanus ortası sırtında genç kayaçların bulunması neyi destekler?',secenekler:['Levhaların uzaklaştığını','Levhaların durduğunu','Akarsu aşındırmasını'],cevap:0,aciklama:'Uzaklaşan levhalar arasından yükselen magma yeni kabuk oluşturur.'}}>{({kanitla})=><div className="ca-sim-grid"><div className="ca-kontrol-panel"><Secim etiket="Levha sınırı" deger={sinir} secenekler={Object.entries(SINIRLAR).map(([value,v])=>({value,label:v.ad}))} onChange={v=>{setSinir(v);kanitla()}}/><Mekanizma tur="bilgi">Manto hareketleri → levha hareketi → gerilim/boşalma → yer şekli ve deprem/volkanizma</Mekanizma><Olcumler degerler={[{etiket:'Hareket',deger:aktif.hareket,vurgu:true},{etiket:'Olası sonuç',deger:aktif.urun}]}/></div><div className={`ca-levha-sahne ${sinir}`} style={{'--levha-renk':aktif.renk}}><div className="levha sol"><span>{aktif.hareket.split(' ')[0]}</span></div><i/><div className="levha sag"><span>{aktif.hareket.split(' ')[1] || '⇄'}</span></div><strong>{aktif.ad}</strong><p>{aktif.urun}</p></div></div>}</ModulKabugu>
    <ModulKabugu id="dis-kuvvetler" bolge="yerkure" baslik="Aşınım–taşınım–birikim" aciklama="Aynı kurgusal havzada yağış, eğim, akış gücü, kayaç, bitki ve zamanı değiştir; coğrafi kanıtı gözünle takip et." yanilgiId="akarsu-guney" tahmin={{soru:'Eğim ve yağış artarken bitki örtüsü azalırsa yüzey aşındırması ne olur?',secenekler:['Genellikle artar','Kesin azalır','Değişmez']}} kontrol={{soru:'Bir akarsuyun akış yönünü belirleyen temel kanıt nedir?',secenekler:['Kuzey-güney yönü','Yükselti farkı ve eğim','Kentin nüfusu'],cevap:1,aciklama:'Su, pusula yönünden bağımsız olarak yüksekten alçağa akar.'}} transfer={{soru:'Aynı yağışta ormanlaştırılan yamaçta hangi değişim beklenir?',secenekler:['Yüzey akışı ve erozyon azalabilir','Eğim aniden artar','Akarsu ters akar'],cevap:0,aciklama:'Bitki kökleri toprağı tutar, yüzey akışını yavaşlatır.'}} modelNotu="Fotoğraf ImageGen ile üretilmiş kurgusal bir havzadır; renkli çizgiler, indeksler ve profil deterministik öğretim modelidir. Gerçek koordinat, DEM, akarsu debisi veya ölçülmüş sediment bütçesi değildir.">{({kanitla}) => <YerSekilleriLaboratuvari kanitla={kanitla} />}</ModulKabugu>
  </div>
}
