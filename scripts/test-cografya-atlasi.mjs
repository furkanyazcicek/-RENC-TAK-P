import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { BOLGELER, TYT_KONULARI } from '../src/data/cografya/bolgeler.js'
import { ETKILESIM_REGISTRY, KAPSAM } from '../src/data/cografya/kapsam.js'
import { MERCEK_NOKTALARI } from '../src/data/cografya/haritaNoktalari.js'
import { YANILGILAR } from '../src/data/cografya/yanilgilar.js'
import { iklimOzeti, bagilNemOzeti } from '../src/lib/cografya/iklim.js'
import { profilUret, ortalamaEgimYuzde } from '../src/lib/cografya/izohips.js'
import { koordinatOzeti, yerelSaatFarki } from '../src/lib/cografya/koordinat.js'
import { gunesModeli, riskPuani, yerSecimPuani } from '../src/lib/cografya/modeller.js'
import { piramitOzeti, yogunluklar } from '../src/lib/cografya/nufus.js'
import { gercekUzaklikKm, haritaUzakligiCm, olcekOzeti } from '../src/lib/cografya/olcek.js'
import { tamamlanabilirMi } from '../src/lib/cografya/ilerleme.js'

let gecen = 0
const hatalar = []
const bolum = (ad) => console.log(`\n${ad}`)
function dogrula(ad, kosul, detay = '') { if (kosul) { gecen += 1; console.log(`  ✓ ${ad}`) } else { hatalar.push(`${ad}${detay ? ` — ${detay}` : ''}`); console.log(`  ✗ ${ad}`) } }
const yakin = (a, b, tolerans = .001) => Math.abs(a - b) <= tolerans

bolum('1) Müfredat ve veri sözleşmeleri')
const kayitlar = Object.values(ETKILESIM_REGISTRY)
dogrula('10 TYT ana konusu var', TYT_KONULARI.length === 10, TYT_KONULARI.length)
dogrula('13 atlas bölgesi var', BOLGELER.length === 13, BOLGELER.length)
dogrula('20 ana etkileşim kayıtlı', kayitlar.length === 20, kayitlar.length)
dogrula('etkileşim kimlikleri benzersiz', new Set(kayitlar.map((x) => x.id)).size === kayitlar.length)
dogrula('her etkileşim gerçek bir bölgeye bağlı', kayitlar.every((x) => BOLGELER.some((b) => b.kod === x.bolge)))
dogrula('her etkileşim transfer ve motor kimliği taşıyor', kayitlar.every((x) => x.transferGoreviId && x.motorId))
dogrula('müfredat alt başlıkları etkileşimlere bağlı', KAPSAM.length >= 55 && KAPSAM.every((x) => ETKILESIM_REGISTRY[x.etkilesimId]))
dogrula('14 kavram yanılgısı benzersiz', YANILGILAR.length === 14 && new Set(YANILGILAR.map((x) => x.id)).size === 14)
const alanlar = ['id','x','y','region','title','summary','significance','result','examTip']
dogrula('harita noktaları tam veri sözleşmesine uyuyor', MERCEK_NOKTALARI.length >= 5 && MERCEK_NOKTALARI.every((n) => alanlar.every((a) => n[a] !== undefined)))
dogrula('harita koordinatları normalize aralıkta', MERCEK_NOKTALARI.every((n) => n.x >= 0 && n.x <= 100 && n.y >= 0 && n.y <= 100))

bolum('2) Saf hesap motorları')
dogrula('15° doğu yerel saati 60 dakika ilerletir', yerelSaatFarki(30,45).isaretliDakika === 60)
dogrula('koordinat özeti yarım küreleri ayırır', koordinatOzeti(-25,40).yarimKure === 'Güney / Doğu')
dogrula('1/500.000 haritada 6 cm = 30 km', yakin(gercekUzaklikKm(6,500000),30))
dogrula('ölçek uzaklık hesabı tersine çevrilebilir', yakin(haritaUzakligiCm(30,500000),6))
dogrula('küçük payda daha ayrıntılıdır', olcekOzeti(100000).ayrinti !== olcekOzeti(2000000).ayrinti)
const profil = profilUret([100,200,350,200],12)
dogrula('profil başlangıç ve bitiş mesafesini korur', profil[0].mesafe === 0 && profil.at(-1).mesafe === 12)
dogrula('egim hesabı sonlu ve mutlak değer üretir', Number.isFinite(ortalamaEgimYuzde(100,350,5000)) && ortalamaEgimYuzde(100,350,5000) === 5)
const iklim = iklimOzeti([25,24,20,15,11,8,7,9,13,17,21,24],[20,25,30,40,50,60,70,65,50,40,30,25])
dogrula('iklim motoru Güney Yarım Küre desenini bulur', iklim.yarimKure === 'Güney Yarım Küre olası')
dogrula('bağıl nem kapasiteye oranlanır ve 100 ile sınırlanır', bagilNemOzeti(10,12,10).bagilNem === 100)
dogrula('Kuzey ve Güney mevsimleri ters çalışır', gunesModeli(40,6).mevsim === 'yaz' && gunesModeli(-40,6).mevsim === 'kış')
dogrula('hazırlık arttığında risk azalır', riskPuani({tehlike:80,maruziyet:70,kirilganlik:60,hazirlik:80}) < riskPuani({tehlike:80,maruziyet:70,kirilganlik:60,hazirlik:0}))
dogrula('ağırlıklı yer puanı beklenen aralıkta', yerSecimPuani({zemin:100,ulasim:50},{zemin:2,ulasim:1}) > 60)
const yogunluk = yogunluklar({nufus:1e6,toplamAlan:10000,tarimAlani:2000,ciftciNufusu:100000})
dogrula('fizyolojik yoğunluk aritmetikten büyüktür', yogunluk.fizyolojik > yogunluk.aritmetik)
dogrula('genç piramit doğru sınıflanır', piramitOzeti({genc:50,calisma:42,yasli:8}).tip === 'genç ve hızlı büyüyen')

bolum('3) Render ve öğrenme kapısı')
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const kok = path.join(root, 'src/components/cografya')
const dosyalar = []
const gez = (d) => { for (const ad of fs.readdirSync(d)) { const p = path.join(d, ad); if (fs.statSync(p).isDirectory()) gez(p); else if (p.endsWith('.jsx')) dosyalar.push(p) } }
gez(kok)
const kaynak = dosyalar.map((p) => fs.readFileSync(p, 'utf8')).join('\n')
for (const kayit of kayitlar) dogrula(`${kayit.id}: gerçek JSX durağı var`, kaynak.includes(`id=\"${kayit.id}\"`))
dogrula('tamamlanma yalnız görevle açılmaz', !tamamlanabilirMi({gorev:true,kontrol:false}))
dogrula('tamamlanma yalnız kontrolle açılmaz', !tamamlanabilirMi({gorev:false,kontrol:true}))
dogrula('tamamlanma model görevi + kontrol ister', tamamlanabilirMi({gorev:true,kontrol:true}))
dogrula('her bölge dosyası ayrı yüklenebilir', BOLGELER.every((b) => b.kod === 'pusula' || b.kod === 'kamp' || kaynak.includes(`bolge=\"${b.kod}\"`)))

console.log(`\n${'─'.repeat(62)}`)
if (!hatalar.length) { console.log(`✅ Coğrafya Atlası denetimleri geçti (${gecen} kontrol).`); process.exit(0) }
console.error(`❌ ${hatalar.length} kontrol başarısız:`)
for (const hata of hatalar) console.error(` - ${hata}`)
process.exit(1)
