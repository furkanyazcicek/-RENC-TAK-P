import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { BOLGELER, TYT_KONULARI } from '../src/data/cografya/bolgeler.js'
import { ETKILESIM_REGISTRY, KAPSAM } from '../src/data/cografya/kapsam.js'
import { MEB_CIKTILARI, MEB_COGRAFYA_2026, MUFREDAT_OZETI } from '../src/data/cografya/mufredat2026.js'
import { TYT_AYARLARI, TYT_KAPSAM_MATRISI, TYT_SORU_BANKASI } from '../src/data/cografya/tyt.js'
import { KAYNAKLAR } from '../src/data/cografya/kaynaklar.js'
import { MERCEK_NOKTALARI } from '../src/data/cografya/haritaNoktalari.js'
import { BOLGE_SAHNELERI, IMAGEGEN_VARLIKLARI, ZEMINLER, bolgeSahnesi } from '../src/data/cografya/gorseller.js'
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
dogrula('21 ana etkileşim kayıtlı', kayitlar.length === 21, kayitlar.length)
dogrula('etkileşim kimlikleri benzersiz', new Set(kayitlar.map((x) => x.id)).size === kayitlar.length)
dogrula('her etkileşim gerçek bir bölgeye bağlı', kayitlar.every((x) => BOLGELER.some((b) => b.kod === x.bolge)))
dogrula('her etkileşim transfer ve motor kimliği taşıyor', kayitlar.every((x) => x.transferGoreviId && x.motorId))
dogrula('müfredat alt başlıkları etkileşimlere bağlı', KAPSAM.length >= 55 && KAPSAM.every((x) => ETKILESIM_REGISTRY[x.etkilesimId]))
dogrula('14 kavram yanılgısı benzersiz', YANILGILAR.length === 14 && new Set(YANILGILAR.map((x) => x.id)).size === 14)
const alanlar = ['id','x','y','region','title','summary','significance','result','examTip']
dogrula('harita noktaları tam veri sözleşmesine uyuyor', MERCEK_NOKTALARI.length >= 5 && MERCEK_NOKTALARI.every((n) => alanlar.every((a) => n[a] !== undefined)))
dogrula('harita koordinatları normalize aralıkta', MERCEK_NOKTALARI.every((n) => n.x >= 0 && n.x <= 100 && n.y >= 0 && n.y <= 100))
dogrula('MEB modeli 28 resmî üniteyi kapsıyor', MEB_COGRAFYA_2026.length === 28, MEB_COGRAFYA_2026.length)
dogrula('MEB modeli 73 benzersiz öğrenme çıktısı taşıyor', MEB_CIKTILARI.length === 73 && new Set(MEB_CIKTILARI.map((x) => x.id)).size === 73, MEB_CIKTILARI.length)
dogrula('sınıf çıktı sayıları 18/17/19/19', [9,10,11,12].map((sinif) => MEB_CIKTILARI.filter((x) => x.sinif === sinif).length).join('/') === '18/17/19/19')
dogrula('her MEB çıktısı öğrenme zincirini taşıyor', MEB_CIKTILARI.every((x) => x.gorselTemsil && x.etkilesim && x.uygulamaSorusu && x.olcmeKaniti))
dogrula('müfredat özeti veriyle tutarlı', MUFREDAT_OZETI.ciktiSayisi === MEB_CIKTILARI.length && MUFREDAT_OZETI.uniteSayisi === MEB_COGRAFYA_2026.length)
dogrula('TYT kampı varsayılan 5 sorudur', TYT_AYARLARI.soruSayisi === 5, TYT_AYARLARI.soruSayisi)
dogrula('TYT kapsam matrisi 23 konudur', TYT_KAPSAM_MATRISI.length === 23, TYT_KAPSAM_MATRISI.length)
dogrula('TYT soruları ipucu, yanılgı ve ayrı transfer taşır', TYT_SORU_BANKASI.length >= 5 && TYT_SORU_BANKASI.every((x) => x.ipucu && x.yanilgi && x.transfer?.soru && x.transfer?.aciklama))
dogrula('kaynak kataloğunda kullanılan ve aday statüleri ayrıdır', Object.values(KAYNAKLAR).some((x) => x.durum === 'kullaniliyor') && Object.values(KAYNAKLAR).some((x) => x.durum === 'aday'))
dogrula('AFAD tehlike kaydı risk olmadığını açıklar', KAYNAKLAR['afad-deprem-tehlike'].sinirlar.includes('risk haritası değildir'))

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

bolum('4) Görsel katman: çizimler ve sahne kadrajı')
const cizimKaynagi = fs.readFileSync(path.join(kok, 'BolgeCizimi.jsx'), 'utf8')
dogrula('13 bölgenin de kendi çizimi var', BOLGELER.every((b) => cizimKaynagi.includes(`  '${b.kod}': {`) || cizimKaynagi.includes(`\n  ${b.kod}: {`)), BOLGELER.filter((b) => !(cizimKaynagi.includes(`  '${b.kod}': {`) || cizimKaynagi.includes(`\n  ${b.kod}: {`))).map((b) => b.kod).join(', '))
dogrula('13 bölgenin de kendi sahnesi var', BOLGELER.every((b) => BOLGE_SAHNELERI[b.kod]))
dogrula('her sahne var olan bir zemine bağlı', Object.values(BOLGE_SAHNELERI).every((s) => ZEMINLER[s.zemin]))
dogrula('her sahnenin üç kanıt katmanı var', Object.values(BOLGE_SAHNELERI).every((s) => s.katmanlar.length === 3))
dogrula('her katmanda en az iki kanıt noktası var', Object.values(BOLGE_SAHNELERI).every((s) => s.katmanlar.every((k) => s.odaklar.filter((o) => o.katman === k.id).length >= 2)))
dogrula('kanıt noktaları var olmayan katmana bağlanmıyor', Object.values(BOLGE_SAHNELERI).every((s) => s.odaklar.every((o) => s.katmanlar.some((k) => k.id === o.katman))))
/* Fotoğraf `object-fit: cover` ile kırpıldığı için kenarlara çok yakın
   noktalar ekranda görünmez. Güvenli kadraj: x 6–94, y 12–88. */
const kadrajDisi = Object.entries(BOLGE_SAHNELERI).flatMap(([kod, s]) => s.odaklar.filter((o) => o.x < 6 || o.x > 94 || o.y < 12 || o.y > 88).map((o) => `${kod}/${o.id}`))
dogrula('kanıt noktaları güvenli kadrajın içinde', kadrajDisi.length === 0, kadrajDisi.join(', '))
dogrula('kanıt kimlikleri sahne içinde benzersiz', Object.values(BOLGE_SAHNELERI).every((s) => new Set(s.odaklar.map((o) => o.id)).size === s.odaklar.length))
dogrula('bolgeSahnesi bilinmeyen kodda da çalışır', Boolean(bolgeSahnesi('olmayan-bolge')?.src))
/* Bölge adı ve rengi tek kaynaktan gelmeli; sayfada elle yazılırsa
   şeritteki adla sayfadaki ad birbirinden ayrışıyor. */
const elleYazilanKunye = dosyalar.filter((p) => p.includes('/bolgeler/')).filter((p) => /<BolgeBasligi[^/]*(baslik=|renk=)/.test(fs.readFileSync(p, 'utf8'))).map((p) => path.basename(p))
dogrula('bölge künyesi ad ve rengi elle yazmıyor', elleYazilanKunye.length === 0, elleYazilanKunye.join(', '))
dogrula('her bölgenin sınav künyesi var', BOLGELER.every((b) => b.sinavNotu?.siklik && b.sinavNotu?.tarz && b.ozet))
const imagegenDosyalari = Object.values(IMAGEGEN_VARLIKLARI).map((varlik) => path.join(root, 'public', varlik.src.replace(/^\//, '')))
dogrula('ImageGen varlıklarının dosyaları mevcut', imagegenDosyalari.every((p) => fs.existsSync(p)), imagegenDosyalari.filter((p) => !fs.existsSync(p)).join(', '))
dogrula('ImageGen varlıkları öğretim modeli sınırını taşıyor', Object.values(IMAGEGEN_VARLIKLARI).every((varlik) => varlik.statu && varlik.sinir && varlik.odaklar?.length >= 3))
dogrula('Harita Bilgisi ve Yerküre katmanları özgün zeminlere bağlı', Boolean(BOLGE_SAHNELERI['harita-bilgisi'].gorselKatmanlari?.kesit && BOLGE_SAHNELERI.yerkure.gorselKatmanlari?.asinim))

console.log(`\n${'─'.repeat(62)}`)
if (!hatalar.length) { console.log(`✅ Coğrafya Atlası denetimleri geçti (${gecen} kontrol).`); process.exit(0) }
console.error(`❌ ${hatalar.length} kontrol başarısız:`)
for (const hata of hatalar) console.error(` - ${hata}`)
process.exit(1)
