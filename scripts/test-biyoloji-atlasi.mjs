import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ALT_BASLIKLAR, KAPSAM_MANIFESTI } from '../src/data/biyoloji/kapsam.js'
import { E, ETKILESIM_KAYITLARI } from '../src/data/biyoloji/etkilesimler.js'
import { MOTOR_KAYITLARI, motorBul } from '../src/lib/biyoloji/motorKayitlari.js'
import { enzimAdim, enzimBaslat, enzimHizModeli } from '../src/lib/biyoloji/enzim.js'
import { zarAdim, zarBaslat, zarMekanizmasi } from '../src/lib/biyoloji/zar.js'
import { BOLUNME_Evreleri, bolunmeAdim, bolunmeBaslat, dnaGrafikDogrula } from '../src/lib/biyoloji/bolunme.js'
import { BESIN_BAGLARI, besinAgiAdim, besinOkuDogrula, fotosentezAdim, fotosentezBaslat, fotosentezModeli, homeostaziAdim, homeostaziBaslat, populasyonAdim, populasyonBaslat } from '../src/lib/biyoloji/sistemler.js'
import { punnett } from '../src/lib/biyoloji/modeller.js'
import { tamamlanabilirMi } from '../src/lib/biyoloji/ilerleme.js'

let gecen = 0
const hata = []
const bolum = (ad) => console.log(`\n${ad}`)
function dogrula(ad, kosul, detay='') { if (kosul) { gecen += 1; console.log(`  ✓ ${ad}`) } else { hata.push(`${ad}${detay ? ` — ${detay}` : ''}`); console.log(`  ✗ ${ad}`) } }
const yakin = (a,b,t=.001) => Math.abs(a-b) <= t
const ayni = (a,b) => JSON.stringify(a) === JSON.stringify(b)

bolum('1) Manifest ↔ gerçek bileşen/motor kayıt sözleşmesi')
dogrula('44 müfredat alt başlığı var', ALT_BASLIKLAR.length === 44, ALT_BASLIKLAR.length)
dogrula('44 bağımsız etkileşim kaydı var', ETKILESIM_KAYITLARI.length === 44, ETKILESIM_KAYITLARI.length)
const manifestIds = ALT_BASLIKLAR.map((x)=>x.etkilesimId)
const kayitIds = ETKILESIM_KAYITLARI.map((x)=>x.id)
dogrula('manifest kimlikleri benzersiz', new Set(manifestIds).size === manifestIds.length)
dogrula('registry kimlikleri benzersiz', new Set(kayitIds).size === kayitIds.length)
dogrula('manifest ve registry bire bir aynı kimlik kümesi', ayni([...manifestIds].sort(), [...kayitIds].sort()))
dogrula('componentKey alanları bire bir', new Set(ETKILESIM_KAYITLARI.map(x=>x.componentKey)).size === ETKILESIM_KAYITLARI.length)
dogrula('davranış testleri konuya özgü ve benzersiz', new Set(ETKILESIM_KAYITLARI.map(x=>x.davranisTesti)).size === ETKILESIM_KAYITLARI.length)
for (const k of ETKILESIM_KAYITLARI) {
  dogrula(`${k.id}: componentKey`, Boolean(k.componentKey))
  dogrula(`${k.id}: engineKey kayıtlı`, Boolean(MOTOR_KAYITLARI[k.engineKey]), k.engineKey)
  dogrula(`${k.id}: interactionType`, Boolean(k.interactionType))
}
for (const unite of KAPSAM_MANIFESTI) dogrula(`${unite.id}: ön koşul dizisi`, Array.isArray(unite.onKosullar))

bolum('2) Kayıtlı her motorun başlangıç → girdi → ara durum → reset davranışı')
const anaOlay = {
  enzim:{type:'input',patch:{sicaklik:60}}, zar:{type:'input',patch:{molekul:'iyon',dis:4,ic:18,hedef:'iceri',atp:true,kanal:true}}, bolunme:{type:'input',tur:'mayoz'},
  homeostazi:{type:'input',patch:{baslangic:41,hedef:37}}, fotosentez:{type:'input',patch:{co2:20}}, populasyon:{type:'input',patch:{kapasite:70}},
  'besin-agi':{type:'input',tur:'ot',degisim:40}, punnett:{type:'input',patch:{a:'AA',b:'aa'}},
}
for (const engineKey of new Set(ETKILESIM_KAYITLARI.map(x=>x.engineKey))) {
  const motor = motorBul(engineKey)
  const ilk = motor.baslangic()
  const girdili = motor.gecis(ilk, anaOlay[engineKey] ?? {type:'input',value:7})
  const ara = motor.gecis(girdili, {type:'run',dt:1})
  const reset = motor.gecis(ara, {type:'reset',tur:'mitoz'})
  dogrula(`${engineKey}: girdi state'i değiştirir`, !ayni(ilk,girdili))
  dogrula(`${engineKey}: çalıştırma ara durum üretir`, !ayni(girdili,ara))
  dogrula(`${engineKey}: reset canonical başlangıç`, ayni(reset,motor.baslangic()))
}

bolum('3) Enzim motoru değişmezleri ve karşılaştırmalı deney')
const e37 = Array.from({length:8}).reduce((s)=>enzimAdim(s,1),enzimBaslat({sicaklik:37}),)
const e60 = Array.from({length:8}).reduce((s)=>enzimAdim(s,1),enzimBaslat({sicaklik:60}),)
dogrula('37 °C ürünü 60 °C ürününden fazladır', e37.urun > e60.urun, `${e37.urun}/${e60.urun}`)
dogrula('60 °C denatürasyon gösterir', enzimHizModeli({sicaklik:60,ph:7,enzim:40,substrat:70}).denature)
dogrula('optimumdan sonra hız düşer', enzimHizModeli({sicaklik:37,ph:7,enzim:40,substrat:70}).hiz > enzimHizModeli({sicaklik:55,ph:7,enzim:40,substrat:70}).hiz)
dogrula('substrat doygunluğu artışı sınırlanır', enzimHizModeli({sicaklik:37,ph:7,enzim:40,substrat:1000}).hiz < 19)
dogrula('hız negatif olmaz', enzimHizModeli({sicaklik:0,ph:1,enzim:0,substrat:0}).hiz >= 0)
dogrula('enzim reset ürün/grafik/zamanı temizler', enzimBaslat().urun===0 && enzimBaslat().zaman===0 && enzimBaslat().grafik.length===1)

bolum('4) Zar motoru: gradyan, ATP, kanal, denge ve büyük molekül')
const o2ilk=zarBaslat({molekul:'oksijen',dis:18,ic:4,atp:false,hedef:'iceri'});const o2=zarAdim(o2ilk)
dogrula('O₂ ATP olmadan gradyana doğru geçer', o2.ic>o2ilk.ic && o2.dis<o2ilk.dis)
const iyonKapali=zarAdim(zarBaslat({molekul:'iyon',dis:4,ic:18,hedef:'iceri',atp:false,kanal:true}))
dogrula('iyon gradyana karşı ATP yokken hareket etmez', yakin(iyonKapali.ic,18) && iyonKapali.durum==='koşul uygun değil')
const iyonAcik=zarAdim(zarBaslat({molekul:'iyon',dis:4,ic:18,hedef:'iceri',atp:true,kanal:true}))
dogrula('ATP açılınca aktif taşıma başlar', iyonAcik.ic>18 && iyonAcik.mekanizma.ad==='Aktif taşıma')
const denge=zarAdim(zarBaslat({molekul:'su',dis:10,ic:10,atp:false}))
dogrula('denge sonrası net akış sıfırdır', yakin(denge.netAkis,0))
dogrula('denge sonrası moleküler hareket sürer', denge.toplamHareket>0)
dogrula('büyük molekül ATP olmadan vezikülle taşınmaz', !zarMekanizmasi({molekul:'protein',dis:10,ic:2,hedef:'iceri',atp:false,kanal:true}).izin)

bolum('5) Homeostazi ve bölünme sayaçları')
const h0=homeostaziBaslat({baslangic:41,hedef:37});const h8=Array.from({length:8}).reduce((s)=>homeostaziAdim(s),h0)
dogrula('homeostazi sapmayı hedefe yaklaştırır', Math.abs(h8.deger-37)<Math.abs(h0.deger-37))
dogrula('mitoz S evresinde kromozom sabit, DNA iki kat', BOLUNME_Evreleri.mitoz[1].kromozom===2 && BOLUNME_Evreleri.mitoz[1].dna===4)
dogrula('mitoz anafazda kardeş kromatit ayrılır', BOLUNME_Evreleri.mitoz.find(x=>x.ad==='Anafaz').ayrilan==='kardeş kromatit')
dogrula('mayoz I sonunda homologlar ayrılmış ve hücre haploit', BOLUNME_Evreleri.mayoz.find(x=>x.ad==='Mayoz I sonu').ploidy==='n')
dogrula('mayoz II sonunda 4 haploit hücre', BOLUNME_Evreleri.mayoz.at(-1).hucre===4 && BOLUNME_Evreleri.mayoz.at(-1).ploidy==='n')
dogrula('bölünme reset G1', bolunmeBaslat('mitoz').ad==='G1')
dogrula('doğru DNA grafiği kabul edilir', dnaGrafikDogrula('mitoz',BOLUNME_Evreleri.mitoz.map(x=>x.dna)).dogru)
dogrula('hatalı DNA grafiği evreyi gösterir', dnaGrafikDogrula('mitoz',[2,2,4,4,4,2]).ilkHata===1)

bolum('6) Kalıtım, fotosentez, popülasyon ve besin ağı motorları')
for (const [a,b] of [['Aa','Aa'],['AA','aa'],['aa','aa']]) { const p=punnett(a,b); const toplam=Object.values(p.olasiliklar).reduce((x,y)=>x+y,0); dogrula(`${a}×${b}: Punnett toplam olasılık 1`, yakin(toplam,1)) }
const fDusuk=fotosentezModeli({isik:100,co2:20,sicaklik:25,su:100});const fOpt=fotosentezModeli({isik:100,co2:100,sicaklik:25,su:100});const fSicak=fotosentezModeli({isik:100,co2:100,sicaklik:45,su:100})
dogrula('CO₂ sınırlayıcı faktör olarak bulunur', fDusuk.sinirlayici==='CO₂')
dogrula('uygun koşul düşük CO₂’den hızlıdır', fOpt.hiz>fDusuk.hiz)
dogrula('aşırı sıcaklık fotosentez hızını düşürür', fSicak.hiz<fOpt.hiz)
const foto5=Array.from({length:5}).reduce((s)=>fotosentezAdim(s),fotosentezBaslat());dogrula('fotosentez yalnız çalıştırılınca zaman/O₂ üretir', foto5.zaman===5 && foto5.oksijen>0)
const p0=populasyonBaslat({n:20,kapasite:100});const p30=Array.from({length:30}).reduce((s)=>populasyonAdim(s),p0);dogrula('popülasyon negatif olmaz', p30.n>=0);dogrula('popülasyon kapasiteye yaklaşır', Math.abs(p30.n-100)<Math.abs(p0.n-100))
const pK=Array.from({length:30}).reduce((s)=>populasyonAdim(s),populasyonBaslat({n:20,kapasite:60}));dogrula('kapasite değişimi uzun dönem sonucu değiştirir', pK.n<p30.n)
dogrula('besin oku doğru yönde kabul edilir', besinOkuDogrula('ot','tavşan').dogru)
dogrula('besin oku ters yönde neden ile reddedilir', !besinOkuDogrula('tavşan','ot').dogru && /ters/.test(besinOkuDogrula('tavşan','ot').mesaj))
const ag1=besinAgiAdim({tavşan:30},1);const ag2=besinAgiAdim(ag1,2);dogrula('doğrudan etki ilk adımda yayılır', ag1.ot<0 && ag1.tilki>0);dogrula('dolaylı etki ikinci adımda güvenli kalır', Object.values(ag2).every(Number.isFinite) && Object.values(ag2).every(x=>Math.abs(x)<=100))
dogrula('besin ağı kanonik bağlantıları benzersiz', new Set(BESIN_BAGLARI.map(x=>x.join('>'))).size===BESIN_BAGLARI.length)

bolum('7) Render kapsamı, ilerleme kapısı ve sahte jenerik kalıp yasağı')
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const jsxDir=path.join(root,'src/components/biyoloji')
const jsxFiles=[];const gez=(d)=>{for(const n of fs.readdirSync(d)){const p=path.join(d,n);if(fs.statSync(p).isDirectory())gez(p);else if(p.endsWith('.jsx'))jsxFiles.push(p)}};gez(jsxDir)
const kaynak=jsxFiles.map(p=>fs.readFileSync(p,'utf8')).join('\n')
const enumKey=Object.fromEntries(Object.entries(E).map(([k,v])=>[v,k]))
for(const id of kayitIds) dogrula(`${id}: gerçek JSX render kaydı`, kaynak.includes(`E.${enumKey[id]}`))
dogrula('KapsamAlanlari sahte üreticisi silindi', !fs.existsSync(path.join(jsxDir,'ortak/KapsamAlanlari.jsx')))
dogrula('tamamlanma yalnız kontrolle verilmez', !tamamlanabilirMi({kontrol:true,gorev:false}))
dogrula('tamamlanma yalnız görevle verilmez', !tamamlanabilirMi({kontrol:false,gorev:true}))
dogrula('tamamlanma görev + kontrol ister', tamamlanabilirMi({kontrol:true,gorev:true}))
dogrula('ortak kabuk component/engine/type kimliği render eder', /data-component-key/.test(kaynak) && /data-engine-key/.test(kaynak) && /data-interaction-type/.test(kaynak))

console.log(`\n${'─'.repeat(62)}`)
if (!hata.length) { console.log(`✅ Biyoloji Atlası motor ve mimari denetimleri geçti (${gecen} davranış kontrolü).`); process.exit(0) }
console.error(`❌ ${hata.length} kontrol başarısız:`);for(const x of hata)console.error(` - ${x}`);process.exit(1)
