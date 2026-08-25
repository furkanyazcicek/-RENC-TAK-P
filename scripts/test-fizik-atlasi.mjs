#!/usr/bin/env node
/**
 * Fizik Atlası — bilimsel doğruluk testleri
 * ------------------------------------------------------------------
 * Çalıştırma:  npm run test:fizik
 *
 * Bu testler arayüzü değil, **fizik motorlarını** denetler. Bir öğrenciye
 * yanlış sayı göstermek, arayüzün bozuk görünmesinden çok daha ağır bir
 * hatadır; bu yüzden her hesap fonksiyonu bilinen doğru sonuçlarla,
 * korunum yasalarıyla ve bağımsız ikinci bir yöntemle karşılaştırılır.
 */

import {
  DONUSUM, cevir, duyarlilikYuvarla, sayiBicimle, sicakligaCevir, sinirla,
} from '../src/lib/fizik/birimler.js'
import {
  aci, arasindakiAci, bileske, buyukluk, cikar, dengeleyici, izdusum,
  kosinusBuyuklugu, kutupsaldan, rotaOlc, skalerCarp, ters, topla,
} from '../src/lib/fizik/vektor.js'
import {
  G_MUFREDAT, alinanYol, donusAni, grafikVerisi, hiz, hizEgimi, hizKaresi,
  hizZamanAlani, konum, konumEgimi, surtunmeliHareket, yerDegistirme,
} from '../src/lib/fizik/hareket.js'
import {
  direncliYorunge, dusmeSuresi, enIyiAci, idealAtis, idealDurum,
} from '../src/lib/fizik/atislar.js'
import {
  egikDuzlemEnerji, guc, is, kinetikEnerji, kuvvetKonumAlani, potansiyelEnerji,
  surtunmeIsisi, trenEnerjisi, verim, yayEnerjisi, yaylaFirlatma,
} from '../src/lib/fizik/enerji.js'
import {
  MADDE_ISI, bimetal, boycaGenlesme, hacimceGenlesme, isi, isilDenge,
  isinmaEgrisi, yuzeyceGenlesme,
} from '../src/lib/fizik/isi.js'
import {
  SIVILAR, barometre, geminBatmasi, hidrolikPres, kaldirmaKuvveti,
  katiBasinci, sividaBasinc, sividakiDurum,
} from '../src/lib/fizik/basinc.js'
import { kilcalYukselme, karisimOzkutlesi, ozkutle } from '../src/lib/fizik/madde.js'
import {
  K_COULOMB, coulombBuyuklugu, coulombVektoru, dokunmaylaPaylasim,
  elektrikAlan, etkiyleElektriklenme, toplamKuvvet,
} from '../src/lib/fizik/elektrik.js'
import {
  devreCoz, elektrikGucu, ohmAkim, ohmGerilim, paralelEsdeger, seriEsdeger,
} from '../src/lib/fizik/devre.js'
import {
  MU0, bobinAlani, halkaMerkezAlani, indüksiyonEmk, manyetikAki, sagElKurali,
  telinAlani, teleEtkiyenKuvvet,
} from '../src/lib/fizik/manyetizma.js'
import {
  SES_HIZLARI, dalgaBoyu, dalgaHizi, havadaSesHizi, ipteDalgaHizi,
  ortamDegisimi, periyot, rezonansFrekanslari, rezonansGenligi, ustUsteBinme,
  yanki, yansimaFazi,
} from '../src/lib/fizik/dalga.js'
import {
  ISIK_HIZI, aydinlanma, duzlemAyna, filtredenGecen, golgeHesabi,
  goruntuBoyu, goruntuKonumu, isikKarisimi, kirilma, kureselAynaOdagi,
  ortamdaIsikHizi, prizmaAyrismasi, sinirAcisi,
} from '../src/lib/fizik/optik.js'
import { BUYUKLUKLER, bagilHata, olcumYap } from '../src/lib/fizik/olcme.js'
import { readFileSync } from 'node:fs'
import { bolgeYuzdesi, bosIlerleme, genelYuzde, hakEdilenRozetler } from '../src/lib/fizik/ilerleme.js'
import { BAGLANTILAR, BOLGELER, DEVRE_ARIZALARI, ROZETLER, TOPLAM_DENEY } from '../src/data/fizik/bolgeler.js'
import { ICERIK } from '../src/data/fizik/icerik.js'

let gecen = 0
let kalan = 0
const hatalar = []

function dogrula(baslik, kosul, ayrinti = '') {
  if (kosul) { gecen += 1 } else { kalan += 1; hatalar.push(`${baslik}${ayrinti ? ' — ' + ayrinti : ''}`) }
}
/** Kayan nokta karşılaştırması: tam eşitlik aramak anlamsızdır. */
function yakin(baslik, a, b, tolerans = 1e-9) {
  dogrula(baslik, Math.abs(a - b) <= tolerans, `${a} ≠ ${b} (fark ${Math.abs(a - b).toExponential(2)})`)
}
function bolum(ad) { console.log(`\n${ad}`) }

/* ════════ 1) Birim sistemi ════════ */
bolum('1) Birim sistemi ve sayı biçimlendirme')
yakin('72 km/sa = 20 m/s', cevir(72, 'km/sa', 'm/s'), 20, 1e-12)
yakin('1 kWh = 3,6 MJ', cevir(1, 'kWh', 'J'), 3.6e6, 1)
yakin('1 atm = 101325 Pa', cevir(1, 'atm', 'Pa'), 101325, 1e-9)
yakin('1 g/cm³ = 1000 kg/m³', cevir(1, 'g/cm³', 'kg/m³'), 1000, 1e-9)
yakin('1 L = 1000 cm³', cevir(1, 'L', 'cm³'), 1000, 1e-9)
dogrula('Farklı gruplar dönüşmez (kg → m)', cevir(5, 'kg', 'm') === null)
dogrula('Bilinmeyen birim reddedilir', cevir(5, 'xyz', 'm') === null)
yakin('25 °C = 298,15 K', sicakligaCevir(25, '°C', 'K'), 298.15, 1e-9)
yakin('0 °C = 32 °F', sicakligaCevir(0, '°C', '°F'), 32, 1e-9)
yakin('-40 °C = -40 °F', sicakligaCevir(-40, '°C', '°F'), -40, 1e-9)
dogrula('Kayan nokta kalıntısı gösterilmez', sayiBicimle(0.1 + 0.2, 2) === '0,3', sayiBicimle(0.1 + 0.2, 2))
// Sondaki sıfırlar YALNIZCA ondalık kısımdan kırpılmalı. Tam sayının
// basamakları kırpılırsa 90° ekranda 9° görünür — bu hata bir kez yaşandı,
// bir daha dönmesin diye buraya kalıcı olarak yazıldı.
for (const [deger, basamak, beklenen] of [
  [90, 0, '90'], [180, 0, '180'], [360, 0, '360'], [30, 0, '30'], [60, 0, '60'],
  [10, 0, '10'], [100, 0, '100'], [1000, 0, '1000'], [2700, 0, '2700'], [0, 0, '0'],
  [-90, 0, '-90'], [1030, 0, '1030'], [4180, 0, '4180'], [20, 0, '20'],
  [100, 1, '100'], [20.5, 1, '20,5'], [3.5, 2, '3,5'], [4.0, 2, '4'],
  [12.30, 2, '12,3'], [0.917, 3, '0,917'], [0.5, 2, '0,5'], [9.81, 2, '9,81'],
]) {
  dogrula(`sayiBicimle(${deger}, ${basamak}) = "${beklenen}"`,
    sayiBicimle(deger, basamak) === beklenen, `"${sayiBicimle(deger, basamak)}" geldi`)
}
dogrula('Eksi sıfır temizlenir', sayiBicimle(-0.0001, 2) === '0', sayiBicimle(-0.0001, 2))
dogrula('Türkçe ondalık ayracı', sayiBicimle(3.5, 2) === '3,5', sayiBicimle(3.5, 2))
yakin('Duyarlılık yuvarlama 2,37 → 2,4', duyarlilikYuvarla(2.37, 0.1), 2.4, 1e-12)
yakin('Sınırlama alt', sinirla(-5, 0, 10), 0)
yakin('Sınırlama üst', sinirla(50, 0, 10), 10)
dogrula('SI birimleri kendi kendine dönüşür', Object.entries(DONUSUM).every(([k, d]) => cevir(1, k, k) === 1))
console.log(`   ${Object.keys(DONUSUM).length} birim tanımlı, dönüşümler tutarlı.`)

/* ════════ 2) Vektörler ════════ */
bolum('2) Vektör matematiği')
const vA = { x: 3, y: 4 }
const vB = { x: -1, y: 2 }
yakin('|A| = 5 (3-4-5 üçgeni)', buyukluk(vA), 5, 1e-12)
yakin('Toplama x', topla(vA, vB).x, 2)
yakin('Toplama y', topla(vA, vB).y, 6)
yakin('Çıkarma x', cikar(vA, vB).x, 4)
yakin('Çıkarma y', cikar(vA, vB).y, 2)
dogrula('A − B = A + (−B)', JSON.stringify(cikar(vA, vB)) === JSON.stringify(topla(vA, ters(vB))))
yakin('Skalerle çarpma büyüklüğü', buyukluk(skalerCarp(vA, 3)), 15, 1e-12)
yakin('Negatif skaler yönü çevirir', aci(skalerCarp(vA, -1)), (aci(vA) + 180) % 360, 1e-9)
yakin('Kutupsal → dik: 10 birim, 30°', kutupsaldan(10, 30).x, 10 * Math.cos(Math.PI / 6), 1e-12)
yakin('Kutupsal → dik y', kutupsaldan(10, 30).y, 5, 1e-12)
yakin('Açı normalleştirmesi (negatif → 0-360)', aci({ x: 1, y: -1 }), 315, 1e-9)
yakin('Dik vektörler arası açı', arasindakiAci({ x: 1, y: 0 }, { x: 0, y: 1 }), 90, 1e-9)
yakin('Zıt vektörler arası açı', arasindakiAci({ x: 1, y: 0 }, { x: -1, y: 0 }), 180, 1e-9)
{
  // Bileşen yöntemi ile kosinüs teoremi aynı sonucu vermeli.
  for (const [b1, a1, b2, a2] of [[6, 0, 8, 90], [5, 30, 5, 150], [12, 45, 7, 200], [3, 0, 3, 180]]) {
    const u = kutupsaldan(b1, a1)
    const v = kutupsaldan(b2, a2)
    yakin(`Kosinüs teoremi (${b1}@${a1}, ${b2}@${a2})`, buyukluk(topla(u, v)), kosinusBuyuklugu(u, v), 1e-9)
  }
}
yakin('6N + 8N dik → 10 N', buyukluk(topla(kutupsaldan(6, 0), kutupsaldan(8, 90))), 10, 1e-9)
yakin('6N + 8N aynı yön → 14 N', buyukluk(topla(kutupsaldan(6, 0), kutupsaldan(8, 0))), 14, 1e-9)
yakin('6N + 8N zıt yön → 2 N', buyukluk(topla(kutupsaldan(6, 0), kutupsaldan(8, 180))), 2, 1e-9)
{
  const dizi = [kutupsaldan(5, 0), kutupsaldan(5, 120), kutupsaldan(5, 240)]
  yakin('Eşit üç vektör 120° → bileşke 0', buyukluk(bileske(dizi)), 0, 1e-9)
  yakin('Dengeleyici bileşkenin zıttıdır', buyukluk(topla(bileske([vA, vB]), dengeleyici([vA, vB]))), 0, 1e-12)
}
yakin('İzdüşüm', izdusum({ x: 10, y: 0 }, { x: 1, y: 1 }), 10 / Math.SQRT2, 1e-12)
{
  const kapali = rotaOlc([{ x: 0, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 4 }, { x: 0, y: 4 }, { x: 0, y: 0 }])
  yakin('Kapalı rota: yol 14', kapali.yol, 14, 1e-12)
  yakin('Kapalı rota: yer değiştirme 0', kapali.yerDegistirmeBuyuklugu, 0, 1e-12)
  dogrula('Kapalı rota işaretlenir', kapali.kapali)
  const acik = rotaOlc([{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 3 }])
  yakin('Açık rota: yol 7', acik.yol, 7, 1e-12)
  yakin('Açık rota: yer değiştirme 5', acik.yerDegistirmeBuyuklugu, 5, 1e-12)
}

/* ════════ 3) Hareket ════════ */
bolum('3) Sabit ivmeli hareket')
yakin('x = x₀ + v₀t + ½at²', konum(10, 5, 2, 4), 10 + 20 + 16, 1e-12)
yakin('v = v₀ + at', hiz(5, 2, 4), 13, 1e-12)
yakin('Δx = v₀t + ½at²', yerDegistirme(20, -4, 8), 32, 1e-12)
yakin('Zamansız denklem v² ', hizKaresi(0, 5, 10), 100, 1e-12)
yakin('Dönüş anı (v₀=20, a=-4)', donusAni(20, -4), 5, 1e-12)
dogrula('İvme sıfırsa dönüş yok', donusAni(10, 0) === null)
yakin('Alınan yol (dönüşlü)', alinanYol(20, -4, 8), 50 + 18, 1e-12)
yakin('Alınan yol (dönüşsüz)', alinanYol(20, 4, 3), Math.abs(yerDegistirme(20, 4, 3)), 1e-12)
{
  // Sayısal alan ile analitik yer değiştirme birebir uyuşmalı.
  for (const [v0, a, t] of [[10, -4, 5], [0, 9.8, 3], [-6, 2, 7], [15, 0, 4]]) {
    yakin(`v-t alanı = Δx (v₀=${v0}, a=${a}, t=${t})`, hizZamanAlani(v0, a, 0, t), yerDegistirme(v0, a, t), 1e-6)
  }
  // Sayısal türev ile analitik hız/ivme birebir uyuşmalı.
  for (const t of [0.5, 2, 4.7]) {
    yakin(`x-t eğimi = v (t=${t})`, konumEgimi(0, 12, -3, t), hiz(12, -3, t), 1e-5)
    yakin(`v-t eğimi = a (t=${t})`, hizEgimi(12, -3, t), -3, 1e-5)
  }
}
{
  const g = grafikVerisi({ x0: 5, v0: 10, a: -2, sure: 6, adim: 60 })
  dogrula('Grafik nokta sayısı', g.length === 61, `${g.length}`)
  yakin('Grafik ilk konum', g[0].x, 5, 1e-12)
  yakin('Grafik son konum', g[60].x, konum(5, 10, -2, 6), 1e-9)
  dogrula('İvme grafiği sabit', g.every((n) => n.a === -2))
}
bolum('   Sürtünme')
{
  // Statik sürtünme bir tepkidir: uygulanana eşittir, sınıra kadar.
  const durgun = surtunmeliHareket({ kutle: 10, uygulanan: 30, muS: 0.4, muK: 0.3, g: 10 })
  dogrula('30 N < 40 N sınırı → hareket yok', !durgun.hareketVar)
  yakin('Sürtünme tam uygulanana eşit', Math.abs(durgun.surtunme), 30, 1e-12)
  yakin('Net kuvvet sıfır', durgun.netKuvvet, 0, 1e-12)
  yakin('Statik sınır μs·N', durgun.statikSinir, 40, 1e-12)

  const hareketli = surtunmeliHareket({ kutle: 10, uygulanan: 50, muS: 0.4, muK: 0.3, g: 10 })
  dogrula('50 N > 40 N sınırı → hareket var', hareketli.hareketVar)
  yakin('Kinetik sürtünme μk·N', Math.abs(hareketli.surtunme), 30, 1e-12)
  yakin('Net kuvvet 50−30', hareketli.netKuvvet, 20, 1e-12)
  yakin('İvme = F/m', hareketli.ivme, 2, 1e-12)

  // Eğik düzlem: kritik açının tanjantı statik katsayıya eşittir.
  const kritik = (Math.atan(0.5) * 180) / Math.PI
  const altinda = surtunmeliHareket({ kutle: 5, uygulanan: 0, muS: 0.5, muK: 0.4, g: 10, aciDerece: kritik - 1 })
  const ustunde = surtunmeliHareket({ kutle: 5, uygulanan: 0, muS: 0.5, muK: 0.4, g: 10, aciDerece: kritik + 1 })
  dogrula('Kritik açının altında durur', !altinda.hareketVar)
  dogrula('Kritik açının üstünde kayar', ustunde.hareketVar)
  yakin('Eğik düzlemde normal = mg·cosθ', surtunmeliHareket({ kutle: 5, uygulanan: 0, muS: 0.5, muK: 0.4, g: 10, aciDerece: 30 }).normal, 5 * 10 * Math.cos(Math.PI / 6), 1e-12)
}

/* ════════ 4) Atışlar ════════ */
bolum('4) Atış hareketleri')
{
  const p = { v0: 20, aciDerece: 45, y0: 0, g: 10 }
  const i = idealAtis(p)
  yakin('45° menzil = v₀²/g', i.menzil, 40, 1e-9)
  yakin('Tepe yüksekliği', i.tepeYuksekligi, 10, 1e-9)
  yakin('Uçuş süresi = 2·t_tepe', i.ucusSuresi, 2 * i.tepeSuresi, 1e-9)
  yakin('Çarpma hızı = ilk hız (aynı yükseklik)', i.carpmaHizi, 20, 1e-9)
  // Tümler açılar aynı menzili verir.
  yakin('30° ve 60° menzilleri eşit',
    idealAtis({ v0: 25, aciDerece: 30, y0: 0, g: 10 }).menzil,
    idealAtis({ v0: 25, aciDerece: 60, y0: 0, g: 10 }).menzil, 1e-9)
  // Yatay hız sabittir.
  const durumlar = [0, 0.5, 1, 1.5, 2].map((t) => idealDurum(p, t))
  dogrula('Yatay hız sabit', durumlar.every((d) => Math.abs(d.vx - durumlar[0].vx) < 1e-12))
  yakin('Tepede düşey hız sıfır', idealDurum(p, i.tepeSuresi).vy, 0, 1e-9)
  dogrula('İvme her an −g', durumlar.every((d) => d.ay === -10))
  // Yatay atışta düşme süresi, ilk hızdan bağımsızdır.
  const y0 = 45
  yakin('Yatay atış süresi = serbest düşme süresi',
    idealAtis({ v0: 30, aciDerece: 0, y0, g: 10 }).ucusSuresi,
    dusmeSuresi({ h0: y0, g: 10 }).sure, 1e-9)
  yakin('v₀ değişse de süre aynı',
    idealAtis({ v0: 5, aciDerece: 0, y0, g: 10 }).ucusSuresi,
    idealAtis({ v0: 50, aciDerece: 0, y0, g: 10 }).ucusSuresi, 1e-9)
  // En iyi açı: y₀ = 0 iken tam 45°.
  yakin('y₀=0 için en iyi açı 45°', enIyiAci({ v0: 20, y0: 0, g: 10 }).aci, 45, 1e-9)
  dogrula('y₀>0 iken en iyi açı 45° altına iner', enIyiAci({ v0: 20, y0: 20, g: 10 }).aci < 45)
  // Sayısal çözücü, direnç sıfırken analitik sonucu vermeli.
  const sayisal = direncliYorunge({ ...p, k: 0 })
  yakin('RK4 (k=0) menzili = analitik', sayisal.menzil, i.menzil, 0.02)
  yakin('RK4 (k=0) süresi = analitik', sayisal.ucusSuresi, i.ucusSuresi, 0.01)
  const direncli = direncliYorunge({ ...p, k: 0.02 })
  dogrula('Hava direnci menzili kısaltır', direncli.menzil < i.menzil)
  dogrula('Hava direnci tepeyi alçaltır', direncli.tepeYuksekligi < i.tepeYuksekligi)
  dogrula('Hava direnciyle iniş daha dik', Math.abs(direncli.carpmaAcisi) > Math.abs(i.carpmaAcisi))
}

/* ════════ 5) İş, güç ve enerji ════════ */
bolum('5) İş, güç ve enerji')
yakin('W = F·Δx·cos0°', is(10, 5, 0), 50, 1e-12)
yakin('W = F·Δx·cos60°', is(10, 4, 60), 20, 1e-12)
yakin('90°de iş sıfır', is(100, 50, 90), 0, 1e-12)
dogrula('180°de iş negatif', is(10, 5, 180) < 0)
yakin('P = W/t', guc(600, 3), 200, 1e-12)
yakin('Ek = ½mv²', kinetikEnerji(4, 5), 50, 1e-12)
yakin('Hız 3 kat → enerji 9 kat', kinetikEnerji(2, 30) / kinetikEnerji(2, 10), 9, 1e-12)
yakin('Ep = mgh', potansiyelEnerji(2, 10, 10), 200, 1e-12)
yakin('E_yay = ½kx²', yayEnerjisi(800, 0.2), 16, 1e-12)
yakin('Sıkışma 2 kat → enerji 4 kat', yayEnerjisi(800, 0.4) / yayEnerjisi(800, 0.2), 4, 1e-12)
yakin('Verim yüzdesi', verim(30, 120), 25, 1e-12)
dogrula('Sıfır girdide verim tanımsız', verim(10, 0) === null)
yakin('Sürtünme ısısı = f·yol', surtunmeIsisi(-12, -5), 60, 1e-12)
{
  // Enerji korunumu: girdi = çıktı, her koşulda.
  for (const kosul of [
    { kutle: 2, yukseklik: 5, aciDerece: 30, muK: 0.2, v0: 0 },
    { kutle: 10, yukseklik: 12, aciDerece: 45, muK: 0.35, v0: 3 },
    { kutle: 0.5, yukseklik: 2, aciDerece: 60, muK: 0, v0: 8 },
    { kutle: 4, yukseklik: 8, aciDerece: 20, muK: 0.9, v0: 0 },
  ]) {
    const e = egikDuzlemEnerji({ ...kosul, g: 10 })
    yakin(`Eğik düzlem enerji dengesi (θ=${kosul.aciDerece}, μ=${kosul.muK})`, e.denge, 0, 1e-9)
    dogrula(`Isı negatif olamaz (θ=${kosul.aciDerece})`, e.isiyaDonusen >= 0)
    dogrula(`Kinetik enerji negatif olamaz (θ=${kosul.aciDerece})`, e.ekBitis >= 0)
  }
  // Sürtünmesiz eğik düzlemde v = √(2gh) olmalı.
  const surtunmesiz = egikDuzlemEnerji({ kutle: 3, yukseklik: 5, aciDerece: 30, muK: 0, v0: 0, g: 10 })
  yakin('Sürtünmesiz son hız = √(2gh)', surtunmesiz.sonHiz, Math.sqrt(2 * 10 * 5), 1e-9)
  yakin('Sürtünmesizde ısı sıfır', surtunmesiz.isiyaDonusen, 0, 1e-12)
}
{
  // Tren: sürtünmesizde toplam enerji her noktada sabit.
  for (const h of [0, 5, 10, 18]) {
    const t = trenEnerjisi({ kutle: 500, baslangicYuksekligi: 20, noktaYuksekligi: h, g: 10 })
    yakin(`Tren toplam enerjisi sabit (h=${h})`, t.kinetik + t.potansiyel, 500 * 10 * 20, 1e-9)
  }
  dogrula('Yüksek tepe aşılamaz', !trenEnerjisi({ kutle: 500, baslangicYuksekligi: 20, noktaYuksekligi: 25, g: 10 }).gecebilir)
  const isili = trenEnerjisi({ kutle: 500, baslangicYuksekligi: 20, noktaYuksekligi: 10, katEdilenYol: 100, surtunmeKuvveti: 200, g: 10 })
  yakin('Sürtünmeli trende toplam korunur', isili.kinetik + isili.potansiyel + isili.isi, 500 * 10 * 20, 1e-9)
}
{
  const f = yaylaFirlatma({ yaySabiti: 1000, sikisma: 0.2, kutle: 2, surtunmeKuvveti: 5, mesafe: 2 })
  yakin('Yay enerjisi', f.yayEnerjisi, 20, 1e-12)
  yakin('Isı', f.isiyaDonusen, 10, 1e-12)
  yakin('Kinetik = yay − ısı', f.kinetikEnerji, 10, 1e-12)
  yakin('Hız = √(2E/m)', f.firlatmaHizi, Math.sqrt(10), 1e-12)
  yakin('Enerji korunumu', f.yayEnerjisi - (f.kinetikEnerji + f.isiyaDonusen), 0, 1e-12)
}
{
  // Sabit kuvvette alan yöntemi formülle aynı sonucu vermeli.
  const sabit = Array.from({ length: 51 }, (_, i) => ({ x: (i / 50) * 8, F: 12 }))
  yakin('F-x alanı (sabit kuvvet) = F·Δx', kuvvetKonumAlani(sabit), 96, 1e-9)
  // Yay: doğrusal kuvvet altında alan = ½kx²
  const yay = Array.from({ length: 201 }, (_, i) => { const x = (i / 200) * 0.3; return { x, F: 500 * x } })
  yakin('F-x alanı (yay) = ½kx²', kuvvetKonumAlani(yay), yayEnerjisi(500, 0.3), 1e-6)
}

/* ════════ 6) Isı ════════ */
bolum('6) Isı, ısıl denge ve genleşme')
yakin('Q = mcΔT', isi(2, 4180, 30), 250800, 1e-9)
{
  // Aynı madde: denge, kütlelerle ağırlıklı ortalama.
  const d1 = isilDenge([{ kutle: 1, ozIsi: 4180, sicaklik: 80 }, { kutle: 3, ozIsi: 4180, sicaklik: 20 }])
  yakin('1 kg 80° + 3 kg 20° → 35 °C', d1.dengeSicakligi, 35, 1e-9)
  yakin('Alınan = verilen (toplam 0)', d1.isiDengesi, 0, 1e-6)
  // Farklı maddeler: öz ısı ağırlık yapar.
  const d2 = isilDenge([
    { kutle: 1, ozIsi: MADDE_ISI.su.ozIsi, sicaklik: 20 },
    { kutle: 1, ozIsi: MADDE_ISI.demir.ozIsi, sicaklik: 100 },
  ])
  dogrula('Denge suya yakın çıkar (öz ısı büyük)', d2.dengeSicakligi < 60, `${d2.dengeSicakligi}`)
  yakin('Farklı maddede de ısı dengesi 0', d2.isiDengesi, 0, 1e-6)
  // Denge her zaman başlangıç aralığında kalmalı.
  for (const kume of [
    [{ kutle: 5, ozIsi: 900, sicaklik: -10 }, { kutle: 2, ozIsi: 450, sicaklik: 120 }],
    [{ kutle: 0.3, ozIsi: 128, sicaklik: 300 }, { kutle: 4, ozIsi: 4180, sicaklik: 15 }],
    [{ kutle: 1, ozIsi: 385, sicaklik: 50 }, { kutle: 1, ozIsi: 385, sicaklik: 50 }],
  ]) {
    const d = isilDenge(kume)
    const enD = Math.min(...kume.map((c) => c.sicaklik))
    const enY = Math.max(...kume.map((c) => c.sicaklik))
    dogrula('Denge sıcaklığı aralık içinde', d.dengeSicakligi >= enD - 1e-9 && d.dengeSicakligi <= enY + 1e-9,
      `${d.dengeSicakligi} ∉ [${enD}, ${enY}]`)
  }
}
{
  const e = isinmaEgrisi({ maddeKodu: 'su', kutle: 0.1, baslangicSicakligi: -20, isiticiGucu: 500, sure: 700, adim: 700 })
  const erime = e.noktalar.filter((n) => n.hal === 'erime')
  const kaynama = e.noktalar.filter((n) => n.hal === 'kaynama')
  dogrula('Erime platosu var', erime.length > 0)
  dogrula('Kaynama platosu var', kaynama.length > 0)
  dogrula('Erimede sıcaklık sabit 0 °C', erime.every((n) => Math.abs(n.sicaklik - 0) < 1e-9))
  dogrula('Kaynamada sıcaklık sabit 100 °C', kaynama.every((n) => Math.abs(n.sicaklik - 100) < 1e-9))
  dogrula('Sıcaklık hiç azalmaz (ısıtma sürüyor)',
    e.noktalar.every((n, i) => i === 0 || n.sicaklik >= e.noktalar[i - 1].sicaklik - 1e-9))
  // Buharlaşma ısısı erime ısısından çok büyük → kaynama platosu daha uzun.
  dogrula('Kaynama platosu erimeden uzun', kaynama.length > erime.length)
}
yakin('Boyca genleşme ΔL = L₀λΔT', boycaGenlesme(2, 12e-6, 100), 2 * 12e-6 * 100, 1e-15)
yakin('Yüzeyce genleşme = 2λ', yuzeyceGenlesme(1, 12e-6, 100), 2 * 12e-6 * 100, 1e-15)
yakin('Hacimce genleşme = 3λ', hacimceGenlesme(1, 12e-6, 100), 3 * 12e-6 * 100, 1e-15)
{
  const b = bimetal({ ustKod: 'aluminyum', altKod: 'demir', uzunluk: 0.2, deltaT: 100 })
  dogrula('Alüminyum daha çok genleşir → aşağı kıvrılır', b.yon === 'asagi', b.yon)
  const ters2 = bimetal({ ustKod: 'demir', altKod: 'aluminyum', uzunluk: 0.2, deltaT: 100 })
  dogrula('Metaller yer değişince yön terslenir', ters2.yon === 'yukari', ters2.yon)
  const ayni = bimetal({ ustKod: 'demir', altKod: 'demir', uzunluk: 0.2, deltaT: 100 })
  dogrula('Aynı metalde kıvrılma yok', ayni.yon === 'duz', ayni.yon)
}

/* ════════ 7) Basınç ve kaldırma kuvveti ════════ */
bolum('7) Basınç ve kaldırma kuvveti')
yakin('P = F/A', katiBasinci(600, 0.02), 30000, 1e-9)
yakin('Alan yarıya inince basınç 2 katı', katiBasinci(600, 0.01) / katiBasinci(600, 0.02), 2, 1e-12)
dogrula('Sıfır alan reddedilir', katiBasinci(600, 0) === null)
yakin('P = hdg', sividaBasinc(2, 1000, 10), 20000, 1e-9)
dogrula('Basınç derinlikle doğru orantılı',
  Math.abs(sividaBasinc(4, 1000, 10) / sividaBasinc(2, 1000, 10) - 2) < 1e-12)
{
  const h = hidrolikPres({ kucukAlan: 0.01, buyukAlan: 0.5, girisKuvveti: 100, girisYolu: 0.5 })
  yakin('Çıkış kuvveti F₂ = F₁·A₂/A₁', h.cikisKuvveti, 5000, 1e-9)
  yakin('Kuvvet kazancı', h.kuvvetKazanci, 50, 1e-12)
  yakin('İş korunur (giriş = çıkış)', h.girisIsi - h.cikisIsi, 0, 1e-9)
  yakin('Basınç her yerde aynı', h.basinc, h.cikisKuvveti / 0.5, 1e-9)
}
{
  // Yüzen cisimde batan oran = özkütle oranı.
  const buz = sividakiDurum({ cismikutlesi: 917, cisimHacmi: 1, sivinOzkutlesi: 1000, g: 10 })
  yakin('Buzun %91,7si batar', buz.batanOran, 0.917, 1e-9)
  dogrula('Buz yüzer', buz.durum === 'yuzer')
  yakin('Yüzerken ağırlık = kaldırma', buz.agirlik - buz.kaldirmaKuvveti, 0, 1e-9)
  const askida = sividakiDurum({ cismikutlesi: 1000, cisimHacmi: 1, sivinOzkutlesi: 1000, g: 10 })
  dogrula('Eşit özkütle → askıda', askida.durum === 'askida')
  const batan = sividakiDurum({ cismikutlesi: 7860, cisimHacmi: 1, sivinOzkutlesi: 1000, g: 10 })
  dogrula('Demir batar', batan.durum === 'batar')
  yakin('Batan cisimde F_k = d·V·g', batan.kaldirmaKuvveti, kaldirmaKuvveti(1000, 1, 10), 1e-9)
  dogrula('Görünen ağırlık gerçekten küçük', batan.gorunenAgirlik < batan.agirlik)
  // Sıvı yoğunlaştıkça batan oran azalır.
  const tahta = { cismikutlesi: 800, cisimHacmi: 1 }
  dogrula('Tuzlu suda daha az batar',
    sividakiDurum({ ...tahta, sivinOzkutlesi: SIVILAR.tuzluSu.ozkutle, g: 10 }).batanOran
    < sividakiDurum({ ...tahta, sivinOzkutlesi: SIVILAR.su.ozkutle, g: 10 }).batanOran)
}
{
  const g1 = geminBatmasi({ gemiKutlesi: 5000, yukKutlesi: 0, tabanAlani: 200, sivinOzkutlesi: 1000 })
  const g2 = geminBatmasi({ gemiKutlesi: 5000, yukKutlesi: 5000, tabanAlani: 200, sivinOzkutlesi: 1000 })
  yakin('Yük iki katına → batma iki katı', g2.batmaDerinligi / g1.batmaDerinligi, 2, 1e-12)
}
yakin('Cıva barometresi ~0,76 m (g=9,81)', barometre({ sivinOzkutlesi: 13600, g: 9.81 }).yukseklik, 0.7596, 1e-3)
dogrula('Su barometresi ~10 m', Math.abs(barometre({ sivinOzkutlesi: 1000, g: 9.81 }).yukseklik - 10.33) < 0.05)
yakin('Özkütle d = m/V', ozkutle(2.7, 0.001), 2700, 1e-9)
dogrula('Sıfır hacim reddedilir', ozkutle(1, 0) === null)
yakin('Karışım özkütlesi = Σm / ΣV',
  karisimOzkutlesi([{ kutle: 1, hacim: 0.001 }, { kutle: 2, hacim: 0.001 }]), 1500, 1e-9)
{
  const dar = kilcalYukselme({ yuzeyGerilimi: 0.0728, temasAcisiDerece: 20, ozkutleDegeri: 1000, yaricap: 0.0001 })
  const genis = kilcalYukselme({ yuzeyGerilimi: 0.0728, temasAcisiDerece: 20, ozkutleDegeri: 1000, yaricap: 0.0002 })
  yakin('Yarıçap yarıya → yükselme 2 katı', dar.yukselme / genis.yukselme, 2, 1e-9)
  dogrula('Su yükselir (θ<90)', dar.yon === 'yukselir')
  const civa = kilcalYukselme({ yuzeyGerilimi: 0.487, temasAcisiDerece: 140, ozkutleDegeri: 13600, yaricap: 0.0002 })
  dogrula('Cıva alçalır (θ>90)', civa.yon === 'alcalir')
  dogrula('Cıvada kohezyon baskın', civa.baskinKuvvet === 'kohezyon')
}

/* ════════ 8) Elektrostatik ════════ */
bolum('8) Elektrostatik')
yakin('F = kq₁q₂/r²', coulombBuyuklugu(1e-6, 1e-6, 0.1), (K_COULOMB * 1e-12) / 0.01, 1e-9)
yakin('Uzaklık 2 kat → kuvvet 1/4',
  coulombBuyuklugu(1e-6, 1e-6, 0.2) / coulombBuyuklugu(1e-6, 1e-6, 0.1), 0.25, 1e-12)
yakin('Uzaklık 3 kat → kuvvet 1/9',
  coulombBuyuklugu(1e-6, 1e-6, 0.3) / coulombBuyuklugu(1e-6, 1e-6, 0.1), 1 / 9, 1e-12)
yakin('Yükler 2 kat → kuvvet 4 kat',
  coulombBuyuklugu(2e-6, 2e-6, 0.1) / coulombBuyuklugu(1e-6, 1e-6, 0.1), 4, 1e-12)
dogrula('Sıfır uzaklık reddedilir', coulombBuyuklugu(1e-6, 1e-6, 0) === null)
{
  // Aynı işaretli yükler iter: kuvvet diğerinden uzağa bakar.
  const itme = coulombVektoru({ x: 0, y: 0, q: 1e-6 }, { x: 1, y: 0, q: 1e-6 })
  dogrula('Aynı işaret → itme (−x yönü)', itme.x < 0)
  const cekme = coulombVektoru({ x: 0, y: 0, q: 1e-6 }, { x: 1, y: 0, q: -1e-6 })
  dogrula('Zıt işaret → çekme (+x yönü)', cekme.x > 0)
  // Newton III: iki yükün birbirine uyguladığı kuvvetler eşit ve zıt.
  const a = coulombVektoru({ x: 0, y: 0, q: 3e-6 }, { x: 0.2, y: 0, q: -5e-6 })
  const b = coulombVektoru({ x: 0.2, y: 0, q: -5e-6 }, { x: 0, y: 0, q: 3e-6 })
  yakin('Etki-tepki büyüklükleri eşit', a.buyukluk, b.buyukluk, 1e-15)
  yakin('Etki-tepki yönleri zıt', a.x + b.x, 0, 1e-15)
  // Simetrik iki yükün ortasında net kuvvet sıfır.
  const yukler = [{ x: -0.1, y: 0, q: 1e-6 }, { x: 0.1, y: 0, q: 1e-6 }]
  const orta = toplamKuvvet({ x: 0, y: 0, q: 1e-9 }, yukler)
  yakin('Simetrik merkezde net kuvvet 0', orta.buyukluk, 0, 1e-12)
  // İki eşit zıt yükün ortasında alan sıfır DEĞİL (dipol).
  const dipol = elektrikAlan({ x: 0, y: 0 }, [{ x: -0.1, y: 0, q: 1e-6 }, { x: 0.1, y: 0, q: -1e-6 }])
  dogrula('Dipol merkezinde alan sıfır değil', dipol.buyukluk > 0)
}
{
  const p = dokunmaylaPaylasim([6, -2])
  yakin('Toplam yük korunur', p.toplam, 4, 1e-12)
  dogrula('Özdeş küreler eşit paylaşır', p.sonYukler[0] === 2 && p.sonYukler[1] === 2)
  dogrula('Etki+toprak: pozitif çubuk → negatif yük', etkiyleElektriklenme({ cubugunYuku: 1, topraklandi: true }).netYuk < 0)
  dogrula('Etki+toprak: negatif çubuk → pozitif yük', etkiyleElektriklenme({ cubugunYuku: -1, topraklandi: true }).netYuk > 0)
  dogrula('Topraksız etkide net yük sıfır', etkiyleElektriklenme({ cubugunYuku: 1, topraklandi: false }).netYuk === 0)
}

/* ════════ 9) Devreler ════════ */
bolum('9) Elektrik devreleri')
yakin('V = I·R', ohmGerilim(2, 6), 12, 1e-12)
yakin('I = V/R', ohmAkim(12, 4), 3, 1e-12)
dogrula('Sıfır dirençte akım tanımsız', ohmAkim(12, 0) === null)
yakin('P = V·I', elektrikGucu(12, 2), 24, 1e-12)
yakin('Seri eşdeğer', seriEsdeger([2, 4, 6]), 12, 1e-12)
yakin('Paralel eşdeğer 6||3 = 2', paralelEsdeger([6, 3]), 2, 1e-12)
yakin('Paralel eşdeğer 4||4 = 2', paralelEsdeger([4, 4]), 2, 1e-12)
dogrula('Paralel sonuç en küçükten küçük', paralelEsdeger([10, 20, 30]) < 10)
yakin('Kısa devre kolu → eşdeğer 0', paralelEsdeger([5, 0]), 0, 1e-12)
{
  // Seri devre: akım her yerde aynı, gerilim dirençle orantılı.
  const seri = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 12 },
    { id: 'r1', tur: 'direnc', a: 'n1', b: 'n2', direnc: 2 },
    { id: 'r2', tur: 'direnc', a: 'n2', b: 'n0', direnc: 4 },
  ] })
  const r1 = seri.elemanlar.find((e) => e.id === 'r1')
  const r2 = seri.elemanlar.find((e) => e.id === 'r2')
  yakin('Seri: I = 12/6 = 2 A', r1.akim, 2, 1e-9)
  yakin('Seri: akım her yerde aynı', r1.akim - r2.akim, 0, 1e-9)
  yakin('Seri: R1 gerilimi 4 V', r1.gerilim, 4, 1e-9)
  yakin('Seri: R2 gerilimi 8 V', r2.gerilim, 8, 1e-9)
  yakin('Seri: gerilimler toplamı = EMK', r1.gerilim + r2.gerilim, 12, 1e-9)
  yakin('Seri: eşdeğer direnç 6 Ω', seri.esdegerDirenc, 6, 1e-9)

  // Paralel devre: gerilim aynı, akım dirençle ters orantılı.
  const par = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 12 },
    { id: 'r1', tur: 'direnc', a: 'n1', b: 'n0', direnc: 6 },
    { id: 'r2', tur: 'direnc', a: 'n1', b: 'n0', direnc: 3 },
  ] })
  const p1 = par.elemanlar.find((e) => e.id === 'r1')
  const p2 = par.elemanlar.find((e) => e.id === 'r2')
  yakin('Paralel: eşdeğer 2 Ω', par.esdegerDirenc, 2, 1e-9)
  yakin('Paralel: I₁ = 2 A', p1.akim, 2, 1e-9)
  yakin('Paralel: I₂ = 4 A', p2.akim, 4, 1e-9)
  yakin('Paralel: gerilimler eşit', p1.gerilim - p2.gerilim, 0, 1e-9)
  yakin('Paralel: kol akımları toplamı = ana akım', p1.akim + p2.akim, 6, 1e-9)

  // Karışık devre
  const kar = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 12 },
    { id: 'r0', tur: 'direnc', a: 'n1', b: 'n2', direnc: 2 },
    { id: 'r1', tur: 'direnc', a: 'n2', b: 'n0', direnc: 6 },
    { id: 'r2', tur: 'direnc', a: 'n2', b: 'n0', direnc: 3 },
  ] })
  yakin('Karışık: eşdeğer 2 + (6||3) = 4 Ω', kar.esdegerDirenc, 4, 1e-9)
  yakin('Karışık: ana akım 3 A', kar.elemanlar.find((e) => e.id === 'r0').akim, 3, 1e-9)

  // Wheatstone köprüsü — seri/paralel indirgemeyle çözülemez, MNA çözer.
  const kopru = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'A', b: 'B', emk: 10 },
    { id: 'r1', tur: 'direnc', a: 'A', b: 'C', direnc: 10 },
    { id: 'r2', tur: 'direnc', a: 'A', b: 'D', direnc: 20 },
    { id: 'r3', tur: 'direnc', a: 'C', b: 'B', direnc: 30 },
    { id: 'r4', tur: 'direnc', a: 'D', b: 'B', direnc: 40 },
    { id: 'r5', tur: 'direnc', a: 'C', b: 'D', direnc: 50 },
  ] })
  // Elle çözüm (B ucu sıfır alınarak): V_C ≈ 7,41176 ; V_D ≈ 6,82353
  // Çözücü toprak düğümünü kendi seçtiği için mutlak gerilimler kayabilir;
  // fiziksel olarak anlamlı olan POTANSİYEL FARKLARIDIR, onlar denetlenir.
  const vB = kopru.dugumGerilimleri.B
  yakin('Köprü: C–B potansiyel farkı', kopru.dugumGerilimleri.C - vB, 7.411765, 1e-4)
  yakin('Köprü: D–B potansiyel farkı', kopru.dugumGerilimleri.D - vB, 6.823529, 1e-4)
  yakin('Köprü: A–B farkı = EMK', kopru.dugumGerilimleri.A - vB, 10, 1e-9)
  yakin('Köprü: köprü kolu akımı', kopru.elemanlar.find((e) => e.id === 'r5').akim, 0.011765, 1e-5)
  yakin('Köprü: eşdeğer direnç', kopru.esdegerDirenc, 23.9437, 1e-3)

  // Dengeli köprüde köprü kolundan akım geçmez.
  const dengeli = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'A', b: 'B', emk: 10 },
    { id: 'r1', tur: 'direnc', a: 'A', b: 'C', direnc: 10 },
    { id: 'r2', tur: 'direnc', a: 'A', b: 'D', direnc: 20 },
    { id: 'r3', tur: 'direnc', a: 'C', b: 'B', direnc: 30 },
    { id: 'r4', tur: 'direnc', a: 'D', b: 'B', direnc: 60 },
    { id: 'r5', tur: 'direnc', a: 'C', b: 'D', direnc: 50 },
  ] })
  yakin('Dengeli köprüde köprü akımı sıfır', dengeli.elemanlar.find((e) => e.id === 'r5').akim, 0, 1e-9)

  // Kirchhoff düğüm yasası: her düğüme giren = çıkan.
  {
    const toplamlar = {}
    for (const e of kar.elemanlar) {
      if (e.akim === null || e.tur === 'voltmetre') continue
      const isaret = e.tur === 'pil' ? -1 : 1
      toplamlar[e.a] = (toplamlar[e.a] ?? 0) - isaret * e.akim
      toplamlar[e.b] = (toplamlar[e.b] ?? 0) + isaret * e.akim
    }
    dogrula('Kirchhoff düğüm yasası sağlanır',
      Object.values(toplamlar).every((v) => Math.abs(v) < 1e-6),
      JSON.stringify(toplamlar))
  }

  // İç dirençli üreteç: uçlar gerilimi = EMK − I·r
  const icDirencli = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 12, icDirenc: 1 },
    { id: 'r', tur: 'direnc', a: 'n1', b: 'n0', direnc: 5 },
  ] })
  yakin('İç dirençli: I = 12/6 = 2 A', icDirencli.elemanlar.find((e) => e.id === 'r').akim, 2, 1e-9)
  yakin('İç dirençli: uçlar gerilimi 10 V', icDirencli.elemanlar.find((e) => e.id === 'p').gerilim, 10, 1e-9)

  // Ampermetre seri bağlanınca doğru akımı okur.
  const amper = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 12 },
    { id: 'A', tur: 'ampermetre', a: 'n1', b: 'n2' },
    { id: 'r', tur: 'direnc', a: 'n2', b: 'n0', direnc: 4 },
  ] })
  yakin('Ampermetre 3 A okur', amper.elemanlar.find((e) => e.id === 'A').akim, 3, 1e-9)

  // Voltmetre paralel bağlanınca elemanın gerilimini okur, devreyi bozmaz.
  const volt = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 12 },
    { id: 'r1', tur: 'direnc', a: 'n1', b: 'n2', direnc: 2 },
    { id: 'r2', tur: 'direnc', a: 'n2', b: 'n0', direnc: 4 },
    { id: 'V', tur: 'voltmetre', a: 'n2', b: 'n0' },
  ] })
  yakin('Voltmetre 8 V okur', volt.elemanlar.find((e) => e.id === 'V').gerilim, 8, 1e-9)
  yakin('Voltmetre devreyi bozmaz (I hâlâ 2 A)', volt.elemanlar.find((e) => e.id === 'r1').akim, 2, 1e-9)
  yakin('İdeal voltmetreden akım geçmez', volt.elemanlar.find((e) => e.id === 'V').akim, 0, 1e-12)

  // Voltmetre seri bağlanırsa devre açık kalır ve uyarı verilir.
  const voltSeri = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 12 },
    { id: 'V', tur: 'voltmetre', a: 'n1', b: 'n2' },
    { id: 'r', tur: 'direnc', a: 'n2', b: 'n0', direnc: 4 },
  ] })
  dogrula('Seri voltmetre uyarısı verilir', voltSeri.uyarilar.some((u) => u.tur === 'voltmetreSeri'))
  dogrula('Seri voltmetrede akım yok', Math.abs(voltSeri.elemanlar.find((e) => e.id === 'r').akim) < 1e-6)

  // Açık anahtar devreyi keser.
  const acik = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 12 },
    { id: 's', tur: 'anahtar', a: 'n1', b: 'n2', kapali: false },
    { id: 'r', tur: 'direnc', a: 'n2', b: 'n0', direnc: 4 },
  ] })
  // Açık devrede akım TAM sıfır okunmalı. Çözücü matrisi tekil olmaktan
  // kurtarmak için küçük bir toprak iletkenliği kullanıyor; bu sayısal kaçak
  // ekrana "6×10⁻¹² A" olarak sızmıştı, bir daha sızmasın.
  dogrula('Açık anahtarda akım tam sıfır', acik.elemanlar.find((e) => e.id === 'r').akim === 0,
    `${acik.elemanlar.find((e) => e.id === 'r').akim}`)
  dogrula('Açık devrede toplam akım tam sıfır', acik.toplamAkim === 0, `${acik.toplamAkim}`)
  dogrula('Açık devre uyarısı verilir', acik.uyarilar.some((u) => u.tur === 'acikDevre'))
  // Eşik gerçek küçük akımları yutmamalı: 1 V / 100 kΩ = 10 µA okunabilmeli.
  {
    const mikroAkim = devreCoz({ elemanlar: [
      { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 1 },
      { id: 'r', tur: 'direnc', a: 'n1', b: 'n0', direnc: 100000 },
    ] })
    yakin('Gerçek 10 µA akım korunur', mikroAkim.elemanlar.find((e) => e.id === 'r').akim, 1e-5, 1e-12)
  }

  // Kapatılınca akım geri gelir.
  const kapali = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 12 },
    { id: 's', tur: 'anahtar', a: 'n1', b: 'n2', kapali: true },
    { id: 'r', tur: 'direnc', a: 'n2', b: 'n0', direnc: 4 },
  ] })
  yakin('Anahtar kapalıyken I = 3 A', kapali.elemanlar.find((e) => e.id === 'r').akim, 3, 1e-9)

  // Kısa devre yakalanır.
  const kisa = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 12 },
    { id: 'w', tur: 'kablo', a: 'n1', b: 'n0' },
    { id: 'r', tur: 'direnc', a: 'n1', b: 'n0', direnc: 4 },
  ] })
  dogrula('Kısa devre işaretlenir', kisa.kisaDevre)
  dogrula('Kısa devre uyarısı verilir', kisa.uyarilar.some((u) => u.tur === 'kisaDevre'))

  // Ampul parlaklığı: paralel bağlı ampuller seri bağlıdan parlak.
  const seriAmpul = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 6 },
    { id: 'L1', tur: 'ampul', tip: 'orta', a: 'n1', b: 'n2', direnc: 12 },
    { id: 'L2', tur: 'ampul', tip: 'orta', a: 'n2', b: 'n0', direnc: 12 },
  ] })
  const parAmpul = devreCoz({ elemanlar: [
    { id: 'p', tur: 'pil', a: 'n1', b: 'n0', emk: 6 },
    { id: 'L1', tur: 'ampul', tip: 'orta', a: 'n1', b: 'n0', direnc: 12 },
    { id: 'L2', tur: 'ampul', tip: 'orta', a: 'n1', b: 'n0', direnc: 12 },
  ] })
  dogrula('Paralel ampuller seriden parlak',
    parAmpul.elemanlar.find((e) => e.id === 'L1').parlaklik > seriAmpul.elemanlar.find((e) => e.id === 'L1').parlaklik)
  yakin('Seri ampulde güç 0,75 W', seriAmpul.elemanlar.find((e) => e.id === 'L1').guc, 0.75, 1e-9)
  yakin('Paralel ampulde güç 3 W', parAmpul.elemanlar.find((e) => e.id === 'L1').guc, 3, 1e-9)

  // Güç korunumu: üretecin verdiği güç, tüketicilerin topladığına eşit.
  {
    const toplamTuketim = kar.elemanlar
      .filter((e) => e.tur === 'direnc' || e.tur === 'ampul' || e.tur === 'reosta')
      .reduce((t, e) => t + (e.guc ?? 0), 0)
    const pil = kar.elemanlar.find((e) => e.tur === 'pil')
    yakin('Üretilen güç = tüketilen güç', Math.abs(pil.gerilim * pil.akim), toplamTuketim, 1e-6)
  }
}

/* ════════ 10) Manyetizma ════════ */
bolum('10) Manyetizma')
yakin('B = μ₀I/(2πr)', telinAlani(10, 0.1), (MU0 * 10) / (2 * Math.PI * 0.1), 1e-15)
yakin('Uzaklık 2 kat → B yarıya (1/r)', telinAlani(10, 0.2) / telinAlani(10, 0.1), 0.5, 1e-12)
dogrula('Sıfır uzaklıkta tanımsız', telinAlani(10, 0) === null)
yakin('Bobin B = μ₀nI', bobinAlani({ sarimSayisi: 500, uzunluk: 0.25, akim: 2 }).alan, MU0 * 2000 * 2, 1e-15)
yakin('Sarım 2 kat → B 2 kat',
  bobinAlani({ sarimSayisi: 400, uzunluk: 0.2, akim: 1 }).alan / bobinAlani({ sarimSayisi: 200, uzunluk: 0.2, akim: 1 }).alan, 2, 1e-12)
yakin('Halka merkezi B = μ₀I/2R', halkaMerkezAlani(4, 0.05), (MU0 * 4) / 0.1, 1e-15)
yakin('F = BIL·sin90°', teleEtkiyenKuvvet({ alan: 0.5, akim: 4, uzunluk: 0.3, aciDerece: 90 }), 0.6, 1e-12)
yakin('F = 0 (θ = 0°)', teleEtkiyenKuvvet({ alan: 0.5, akim: 4, uzunluk: 0.3, aciDerece: 0 }), 0, 1e-12)
{
  // Sağ el kuralı: I × B vektörel çarpımı
  dogrula('I sağ, B dışarı → F aşağı', sagElKurali('sag', 'disari').yon === 'asagi', sagElKurali('sag', 'disari').yon)
  dogrula('I sağ, B içeri → F yukarı', sagElKurali('sag', 'iceri').yon === 'yukari')
  dogrula('I yukarı, B dışarı → F sağ', sagElKurali('yukari', 'disari').yon === 'sag', sagElKurali('yukari', 'disari').yon)
  dogrula('Paralel akım-alan → kuvvet yok', sagElKurali('sag', 'sag').paralel)
  dogrula('Zıt paralel → kuvvet yok', sagElKurali('sag', 'sol').paralel)
}
yakin('Φ = BAcos0°', manyetikAki(0.5, 0.02, 0), 0.01, 1e-15)
yakin('Φ = 0 (θ = 90°)', manyetikAki(0.5, 0.02, 90), 0, 1e-15)
{
  const artan = indüksiyonEmk({ sarimSayisi: 100, akiIlk: 0.001, akiSon: 0.003, sure: 0.1 })
  const azalan = indüksiyonEmk({ sarimSayisi: 100, akiIlk: 0.003, akiSon: 0.001, sure: 0.1 })
  yakin('ε = −NΔΦ/Δt', artan.emk, -100 * 0.002 / 0.1, 1e-12)
  dogrula('Akı artarken EMK negatif (Lenz)', artan.emk < 0)
  dogrula('Akı azalırken EMK pozitif', azalan.emk > 0)
  dogrula('Değişim yoksa EMK sıfır', indüksiyonEmk({ sarimSayisi: 100, akiIlk: 0.002, akiSon: 0.002, sure: 0.1 }).emk === -0 || indüksiyonEmk({ sarimSayisi: 100, akiIlk: 0.002, akiSon: 0.002, sure: 0.1 }).emk === 0)
  yakin('Sarım 2 kat → EMK 2 kat',
    indüksiyonEmk({ sarimSayisi: 200, akiIlk: 0.001, akiSon: 0.003, sure: 0.1 }).emk / artan.emk, 2, 1e-12)
}

/* ════════ 11) Dalgalar ════════ */
bolum('11) Dalgalar ve ses')
yakin('v = λf', dalgaHizi(0.68, 500), 340, 1e-12)
yakin('λ = v/f', dalgaBoyu(340, 500), 0.68, 1e-12)
yakin('T = 1/f', periyot(4), 0.25, 1e-12)
dogrula('Sıfır frekans reddedilir', periyot(0) === null && dalgaBoyu(340, 0) === null)
{
  // Ortam değişiminde frekans sabit kalır, λ hız oranıyla değişir.
  const o = ortamDegisimi({ frekans: 500, ilkHiz: SES_HIZLARI.hava.hiz, yeniHiz: SES_HIZLARI.su.hiz })
  dogrula('Frekans değişmez', o.frekans === 500)
  yakin('λ oranı = hız oranı', o.yeniDalgaBoyu / o.ilkDalgaBoyu, o.hizOrani, 1e-12)
  dogrula('Suda dalga boyu uzar', o.yeniDalgaBoyu > o.ilkDalgaBoyu)
  // Ses katılarda en hızlı, gazlarda en yavaş.
  dogrula('Katıda > sıvıda > gazda', SES_HIZLARI.demir.hiz > SES_HIZLARI.su.hiz && SES_HIZLARI.su.hiz > SES_HIZLARI.hava.hiz)
  dogrula('Boşlukta ses yayılmaz', SES_HIZLARI.boslukYok.hiz === 0)
  yakin('Havada 20 °C ses hızı ≈ 343', havadaSesHizi(20), 343, 0.5)
  dogrula('Sıcak havada ses daha hızlı', havadaSesHizi(40) > havadaSesHizi(0))
}
{
  const y = yanki({ uzaklik: 171.5, sesHizi: 343 })
  yakin('Yankı süresi 2x/v', y.sure, 1, 1e-9)
  dogrula('1 s yankı duyulur', y.duyulurMu)
  dogrula('Çok yakın engelde yankı duyulmaz', !yanki({ uzaklik: 5, sesHizi: 343 }).duyulurMu)
  yakin('En yakın yankı uzaklığı', y.enYakinUzaklik, (0.1 * 343) / 2, 1e-9)
}
{
  const f = yansimaFazi('sabit')
  dogrula('Sabit uçta 180° faz değişimi', f.fazDegisimi === 180 && f.tersDoner)
  dogrula('Serbest uçta faz değişmez', yansimaFazi('serbest').fazDegisimi === 0)
}
yakin('İpte v = √(F/μ)', ipteDalgaHizi({ gerilme: 100, cizgiselYogunluk: 0.01 }), 100, 1e-12)
dogrula('Sıfır yoğunluk reddedilir', ipteDalgaHizi({ gerilme: 100, cizgiselYogunluk: 0 }) === null)
{
  const m = rezonansFrekanslari({ uzunluk: 1, hiz: 100, adet: 4 })
  yakin('Temel frekans v/2L', m[0].frekans, 50, 1e-12)
  dogrula('Harmonikler tam katlar', m.every((x, i) => Math.abs(x.frekans - (i + 1) * 50) < 1e-9))
  dogrula('n. modda n karın, n+1 düğüm', m.every((x) => x.karinSayisi === x.mod && x.dugumSayisi === x.mod + 1))
  yakin('λₙ = 2L/n', m[1].dalgaBoyu, 1, 1e-12)
  // Rezonans: tam uyumda genlik zirveye çıkar.
  const tam = rezonansGenligi({ surucuFrekans: 50, dogalFrekans: 50, sonum: 0.05 })
  const uzak = rezonansGenligi({ surucuFrekans: 20, dogalFrekans: 50, sonum: 0.05 })
  dogrula('Rezonansta genlik çok büyür', tam > uzak * 5, `${tam} vs ${uzak}`)
}
{
  // Süperpozisyon: zıt fazlı eşit dalgalar birbirini söndürür.
  const yapici = ustUsteBinme([
    { genlik: 1, dalgaBoyu: 2, periyot: 2, yon: 1, faz: 0 },
    { genlik: 1, dalgaBoyu: 2, periyot: 2, yon: 1, faz: 0 },
  ], 0.5, 0)
  const yikici = ustUsteBinme([
    { genlik: 1, dalgaBoyu: 2, periyot: 2, yon: 1, faz: 0 },
    { genlik: 1, dalgaBoyu: 2, periyot: 2, yon: 1, faz: Math.PI },
  ], 0.5, 0)
  yakin('Yapıcı girişim: genlik iki katı', yapici, 2, 1e-9)
  yakin('Yıkıcı girişim: sönüm', yikici, 0, 1e-9)
}

/* ════════ 12) Optik ════════ */
bolum('12) Optik')
yakin('Ortamda hız v = c/n', ortamdaIsikHizi(1.5), ISIK_HIZI / 1.5, 1e-6)
{
  // Snell yasası: n₁sin(i) = n₂sin(r)
  for (const [i, n1, n2] of [[30, 1, 1.5], [45, 1, 1.33], [20, 1.5, 1], [60, 1, 2.42]]) {
    const k = kirilma({ gelmeAcisi: i, n1, n2 })
    if (k.tamYansima) continue
    yakin(`Snell (i=${i}, ${n1}→${n2})`,
      n1 * Math.sin((i * Math.PI) / 180), n2 * Math.sin((k.kirilmaAcisi * Math.PI) / 180), 1e-9)
  }
  dogrula('Yoğuna geçişte normale yaklaşır', kirilma({ gelmeAcisi: 40, n1: 1, n2: 1.5 }).kirilmaAcisi < 40)
  dogrula('Aza geçişte normalden uzaklaşır', kirilma({ gelmeAcisi: 20, n1: 1.5, n2: 1 }).kirilmaAcisi > 20)
  yakin('Aynı indiste sapma yok', kirilma({ gelmeAcisi: 35, n1: 1.5, n2: 1.5 }).kirilmaAcisi, 35, 1e-9)
  // Sınır açısı
  yakin('Su–hava sınır açısı ≈ 48,75°', sinirAcisi(1.33, 1), 48.7535, 1e-3)
  yakin('Cam–hava sınır açısı ≈ 41,81°', sinirAcisi(1.5, 1), 41.8103, 1e-3)
  yakin('Elmas–hava sınır açısı ≈ 24,41°', sinirAcisi(2.42, 1), 24.4074, 1e-3)
  dogrula('Aza geçiş yoksa sınır açısı tanımsız', sinirAcisi(1, 1.5) === null)
  dogrula('Sınır açısı üstünde tam yansıma', kirilma({ gelmeAcisi: 50, n1: 1.33, n2: 1 }).tamYansima)
  dogrula('Sınır açısı altında kırılma var', !kirilma({ gelmeAcisi: 40, n1: 1.33, n2: 1 }).tamYansima)
}
{
  // Ayna/mercek denklemi ve büyütme
  const g1 = goruntuKonumu({ odak: 10, cisimUzakligi: 30 })
  yakin('1/f = 1/d₀ + 1/dᵢ', 1 / 10, 1 / 30 + 1 / g1.goruntuUzakligi, 1e-9)
  yakin('dᵢ = 15 cm', g1.goruntuUzakligi, 15, 1e-9)
  yakin('m = −dᵢ/d₀ = −0,5', g1.buyutme, -0.5, 1e-9)
  dogrula('Gerçek, ters, küçük', g1.tur === 'gercek' && g1.yon === 'ters' && g1.boyut === 'kucuk')
  yakin('Görüntü boyu m·h', goruntuBoyu(4, g1.buyutme), -2, 1e-9)

  const g2 = goruntuKonumu({ odak: 10, cisimUzakligi: 5 })
  dogrula('f içinde: sanal, düz, büyük', g2.tur === 'sanal' && g2.yon === 'duz' && g2.boyut === 'buyuk')
  yakin('Sanal görüntü uzaklığı negatif', g2.goruntuUzakligi, -10, 1e-9)

  const g3 = goruntuKonumu({ odak: 10, cisimUzakligi: 20 })
  yakin('2f: görüntü de 2f\'de', g3.goruntuUzakligi, 20, 1e-9)
  yakin('2f: büyütme −1', g3.buyutme, -1, 1e-9)
  dogrula('2f: eşit boy', g3.boyut === 'esit')

  dogrula('Odakta görüntü oluşmaz', goruntuKonumu({ odak: 10, cisimUzakligi: 10 }).sonsuz)

  // Dağıtıcılar her zaman sanal, düz, küçük
  for (const d0 of [3, 10, 25, 60]) {
    const t = goruntuKonumu({ odak: -12, cisimUzakligi: d0 })
    dogrula(`Tümsek/kalın kenar hep sanal-düz-küçük (d₀=${d0})`,
      t.tur === 'sanal' && t.yon === 'duz' && t.boyut === 'kucuk')
  }
  yakin('Çukur ayna f = R/2', kureselAynaOdagi(30, 'cukur'), 15, 1e-12)
  yakin('Tümsek ayna f = −R/2', kureselAynaOdagi(30, 'tumsek'), -15, 1e-12)
  // Düzlem ayna
  const d = duzlemAyna(2)
  dogrula('Düzlem ayna: sanal, düz, eşit', d.tur === 'sanal' && d.yon === 'duz' && d.boyut === 'esit')
  yakin('Düzlem ayna: büyütme 1', d.buyutme, 1, 1e-12)
  yakin('Cisim–görüntü uzaklığı 2d', d.aradakiUzaklik, 4, 1e-12)
}
{
  // Gölge: nokta kaynakta yarı gölge yok
  const nokta = golgeHesabi({ kaynakBoyu: 0, engelBoyu: 0.2, kaynakEngelUzakligi: 1, engelPerdeUzakligi: 1 })
  yakin('Nokta kaynak: tam gölge = engel × oran', nokta.tamGolgeBoyu, 0.4, 1e-9)
  yakin('Nokta kaynak: yarı gölge yok', nokta.yariGolgeGenisligi, 0, 1e-9)
  const yaygin = golgeHesabi({ kaynakBoyu: 0.3, engelBoyu: 0.2, kaynakEngelUzakligi: 1, engelPerdeUzakligi: 1 })
  dogrula('Yaygın kaynak: yarı gölge oluşur', yaygin.yariGolgeGenisligi > 0)
  dogrula('Yaygın kaynak: tam gölge daha küçük', yaygin.tamGolgeBoyu < nokta.tamGolgeBoyu)
  // Kaynak yeterince büyükse tam gölge kaybolur.
  dogrula('Çok büyük kaynakta tam gölge kalmaz',
    !golgeHesabi({ kaynakBoyu: 2, engelBoyu: 0.2, kaynakEngelUzakligi: 1, engelPerdeUzakligi: 3 }).tamGolgeVarMi)
}
yakin('Aydınlanma E = I/d²', aydinlanma(100, 2), 25, 1e-12)
yakin('Uzaklık 2 kat → aydınlanma 1/4', aydinlanma(100, 4) / aydinlanma(100, 2), 0.25, 1e-12)
{
  // Prizma: mor en çok sapar, kırmızı en az.
  const p = prizmaAyrismasi({ gelmeAcisi: 45, prizmaAcisi: 60 }).filter((r) => r.cikabildi)
  dogrula('Prizmada tüm renkler çıkabildi', p.length === 7, `${p.length}/7`)
  dogrula('Mor kırmızıdan çok sapar', p[6].sapma > p[0].sapma)
  dogrula('Sapma sırası dalga boyuyla ters', p.every((r, i) => i === 0 || r.sapma >= p[i - 1].sapma - 1e-9))
}
{
  dogrula('K+Y = Sarı', isikKarisimi({ kirmizi: 1, yesil: 1, mavi: 0 }).ad === 'Sarı')
  dogrula('K+M = Macenta', isikKarisimi({ kirmizi: 1, yesil: 0, mavi: 1 }).ad === 'Macenta')
  dogrula('Y+M = Camgöbeği', isikKarisimi({ kirmizi: 0, yesil: 1, mavi: 1 }).ad.startsWith('Camgöbeği'))
  dogrula('K+Y+M = Beyaz', isikKarisimi({ kirmizi: 1, yesil: 1, mavi: 1 }).ad === 'Beyaz')
  dogrula('Işıksız = Siyah', isikKarisimi({ kirmizi: 0, yesil: 0, mavi: 0 }).hex === '#000000')
  // Filtre çıkarır, eklemez.
  dogrula('Kırmızı ışık + mavi filtre = siyah',
    filtredenGecen({ gelenRenkler: ['kirmizi'], filtreRengi: 'mavi' }).sonuc.hex === '#000000')
  dogrula('Beyaz + sarı filtre = sarı',
    filtredenGecen({ gelenRenkler: ['kirmizi', 'yesil', 'mavi'], filtreRengi: 'sari' }).sonuc.ad === 'Sarı')
  dogrula('Kırmızı ışık + kırmızı filtre = kırmızı',
    filtredenGecen({ gelenRenkler: ['kirmizi'], filtreRengi: 'kirmizi' }).sonuc.ad === 'Kırmızı')
}

/* ════════ 13) Ölçme ════════ */
bolum('13) Ölçme ve belirsizlik')
{
  const o = olcumYap({ gercekDeger: 12.347, duyarlilik: 0.1 })
  yakin('0,1 duyarlılıkta okunan 12,3', o.okunanDeger, 12.3, 1e-9)
  yakin('Belirsizlik = duyarlılık/2', o.belirsizlik, 0.05, 1e-12)
  dogrula('Gerçek değer aralık içinde', 12.347 >= o.altSinir && 12.347 <= o.ustSinir)
  const hassas = olcumYap({ gercekDeger: 12.347, duyarlilik: 0.001 })
  dogrula('Daha hassas araç daha dar aralık', hassas.ustSinir - hassas.altSinir < o.ustSinir - o.altSinir)
  dogrula('Daha hassas araç gerçeğe daha yakın', hassas.okumaFarki <= o.okumaFarki)
  yakin('Bağıl hata yüzdesi', bagilHata(12.3, 12.3), 0, 1e-12)
  dogrula('Sıfır gerçek değerde tanımsız', bagilHata(1, 0) === null)
}
{
  const skaler = BUYUKLUKLER.filter((b) => b.tur === 'skaler')
  const vektorel = BUYUKLUKLER.filter((b) => b.tur === 'vektorel')
  dogrula('Skaler listesi dolu', skaler.length >= 8, `${skaler.length}`)
  dogrula('Vektörel listesi dolu', vektorel.length >= 6, `${vektorel.length}`)
  dogrula('Her büyüklüğün gerekçesi var', BUYUKLUKLER.every((b) => b.neden && b.neden.length > 20))
  dogrula('Kuvvet vektörel', BUYUKLUKLER.find((b) => b.ad === 'Kuvvet').tur === 'vektorel')
  dogrula('Enerji skaler', BUYUKLUKLER.find((b) => b.ad === 'Enerji').tur === 'skaler')
  dogrula('Elektrik yükü skaler (işaret ≠ yön)', BUYUKLUKLER.find((b) => b.ad === 'Elektrik yükü').tur === 'skaler')
}

/* ════════ 14) İlerleme sistemi ════════ */
bolum('14) İlerleme takibi')
{
  const bos = bosIlerleme()
  yakin('Boş ilerleme %0', bolgeYuzdesi(bos, 'vektorler', 2), 0, 1e-12)
  const yarim = { ...bos, tamamlanan: { vektorler: { a: true, b: true } }, seviyeler: { vektorler: { kesfet: true } } }
  // 2 deney + 1 seviye = 3, toplam 2 + 3 = 5 → %60
  yakin('Kısmi ilerleme yüzdesi', bolgeYuzdesi(yarim, 'vektorler', 2), 60, 1e-9)
  const tam = {
    ...bos,
    tamamlanan: { vektorler: { a: true, b: true } },
    seviyeler: { vektorler: { kesfet: true, ogren: true, ustalas: true } },
  }
  yakin('Tam ilerleme %100', bolgeYuzdesi(tam, 'vektorler', 2), 100, 1e-9)
  dogrula('Genel yüzde 0-100 aralığında',
    genelYuzde(yarim, BOLGELER.map((b) => ({ kod: b.kod, deneySayisi: b.deneyler.length }))) >= 0)
}

/* ════════ 15) İçerik bütünlüğü ════════ */
bolum('15) Bölge ve içerik bütünlüğü')
{
  dogrula('13 bölge tanımlı', BOLGELER.length === 13, `${BOLGELER.length}`)
  dogrula('Toplam 36 deney', TOPLAM_DENEY === 36, `${TOPLAM_DENEY}`)
  const kodlar = new Set(BOLGELER.map((b) => b.kod))
  dogrula('Bölge kodları benzersiz', kodlar.size === BOLGELER.length)
  dogrula('Ön koşul bağlantıları geçerli', BAGLANTILAR.every((l) => kodlar.has(l.from) && kodlar.has(l.to)))
  dogrula('Hiçbir bölge kendine bağlı değil', BAGLANTILAR.every((l) => l.from !== l.to))
  dogrula('Her bölgenin içeriği var', BOLGELER.every((b) => ICERIK[b.kod]))
  dogrula('Fazla içerik yok', Object.keys(ICERIK).every((k) => kodlar.has(k)))

  for (const b of BOLGELER) {
    const i = ICERIK[b.kod]
    dogrula(`${b.kisaAd}: giriş metni var`, typeof i.giris === 'string' && i.giris.length > 60)
    dogrula(`${b.kisaAd}: tahmin sorusu var`, !!i.tahmin?.soru)
    dogrula(`${b.kisaAd}: tahminde tam bir doğru şık var`,
      i.tahmin.secenekler.filter((s) => s.dogru).length === 1)
    dogrula(`${b.kisaAd}: tahmin açıklaması var`, i.tahmin.aciklama?.length > 40)
    dogrula(`${b.kisaAd}: açıklama bölümleri var`, i.aciklama?.length >= 3)
    dogrula(`${b.kisaAd}: formüller var`, i.formuller?.length >= 2)
    dogrula(`${b.kisaAd}: her formülün sembol listesi var`,
      i.formuller.every((f) => Array.isArray(f.semboller) && f.semboller.length >= 1))
    dogrula(`${b.kisaAd}: her sembolün birimi var`,
      i.formuller.every((f) => f.semboller.every((s) => s.birim && s.anlam)))
    dogrula(`${b.kisaAd}: günlük hayat örnekleri var`, i.gunlukHayat?.length >= 2)
    dogrula(`${b.kisaAd}: sık hatalar var`, i.sikHata?.length >= 3)
    dogrula(`${b.kisaAd}: her hatanın nedeni var`, i.sikHata.every((h) => h.yanlis && h.dogru && h.neden))
    dogrula(`${b.kisaAd}: mini görev var`, !!i.miniGorev?.baslik && !!i.miniGorev?.metin)
    dogrula(`${b.kisaAd}: kontrol soruları var`, i.kontrol?.length >= 3)
    dogrula(`${b.kisaAd}: kazanımlar var`, b.kazanimlar?.length >= 3)
    dogrula(`${b.kisaAd}: deneyler tanımlı`, b.deneyler.every((d) => d.kod && d.ad && d.tanim))

    for (const [n, s] of i.kontrol.entries()) {
      dogrula(`${b.kisaAd} S${n + 1}: doğru şık indeksi geçerli`,
        Number.isInteger(s.dogru) && s.dogru >= 0 && s.dogru < s.secenekler.length)
      dogrula(`${b.kisaAd} S${n + 1}: en az 4 şık`, s.secenekler.length >= 4)
      dogrula(`${b.kisaAd} S${n + 1}: şıklar benzersiz`, new Set(s.secenekler).size === s.secenekler.length)
      dogrula(`${b.kisaAd} S${n + 1}: ipucu var`, s.ipucu?.length > 15)
      dogrula(`${b.kisaAd} S${n + 1}: çözüm açıklaması var`, s.cozum?.length > 40)
      dogrula(`${b.kisaAd} S${n + 1}: yanılgı kodu var`, !!s.yanilgi)
    }
  }
  const toplamSoru = Object.values(ICERIK).reduce((t, i) => t + i.kontrol.length, 0)
  console.log(`   ${BOLGELER.length} bölge, ${TOPLAM_DENEY} deney, ${toplamSoru} kontrol sorusu denetlendi.`)
}

/* ════════ 16) Sınav notu ve bölge çizimleri ════════ */
bolum('16) Sınav notu ve bölge çizimleri')
{
  for (const b of BOLGELER) {
    const n = b.sinavNotu
    dogrula(`${b.kisaAd}: sınav notu var`, !!n)
    dogrula(`${b.kisaAd}: sınav sıklığı yazılmış`, typeof n?.siklik === 'string' && n.siklik.length > 8)
    dogrula(`${b.kisaAd}: soru tarzı anlatılmış`, typeof n?.tarz === 'string' && n.tarz.length > 60)
    dogrula(`${b.kisaAd}: tuzak yazılmış`, typeof n?.tuzak === 'string' && n.tuzak.length > 40)
  }

  // Çizimler JSX olduğu için burada çalıştırılamaz; kayıt defterinin her
  // bölgeyi kapsadığı kaynak dosyadan doğrulanır. Bir bölge eklenip
  // çizimi unutulursa kart resimsiz kalır, bu test onu yakalar.
  const sahneKaynak = readFileSync(
    new URL('../src/components/fizik/BolgeSahnesi.jsx', import.meta.url), 'utf8',
  )
  const defter = sahneKaynak.slice(
    sahneKaynak.indexOf('const SAHNELER = {'),
    sahneKaynak.indexOf('export default function BolgeSahnesi'),
  )
  dogrula('Sahne kayıt defteri bulundu', defter.length > 200)
  for (const b of BOLGELER) {
    const anahtar = /^[a-z]+$/.test(b.kod) ? `${b.kod}:` : `'${b.kod}':`
    dogrula(`${b.kisaAd}: bölge çizimi tanımlı`, defter.includes(anahtar))
  }
  const anlatimSayisi = (defter.match(/anlat: '/g) ?? []).length
  dogrula('Her çizimin ekran okuyucu açıklaması var', anlatimSayisi === BOLGELER.length,
    `${anlatimSayisi}/${BOLGELER.length}`)
  console.log(`   ${BOLGELER.length} bölgenin sınav notu ve çizimi denetlendi.`)
}

/* ════════ 17) Rozet kuralları ════════ */
bolum('17) Rozet kuralları')
{
  // Rozetler uzun süre hiçbir yerde verilmiyordu: sekiz rozet de öğrenci
  // ne yaparsa yapsın sönük kalıyordu. Bu bölüm her rozetin gerçekten
  // ulaşılabilir olduğunu doğrular.
  dogrula('Boş kayıtta hiç rozet yok', hakEdilenRozetler(bosIlerleme()).length === 0)

  const ilk = bosIlerleme()
  ilk.tamamlanan = { olcme: { 'olcum-tezgahi': true } }
  dogrula('İlk deney "İlk Adım" rozetini getirir', hakEdilenRozetler(ilk).includes('ilk-adim'))

  const vektor = bosIlerleme()
  vektor.seviyeler = { vektorler: { kesfet: true, ogren: true, ustalas: true } }
  dogrula('Vektörler üç seviye "Vektör Ustası" getirir', hakEdilenRozetler(vektor).includes('vektor-ustasi'))

  const enerji = bosIlerleme()
  enerji.seviyeler = { enerji: { kesfet: true, ogren: true, ustalas: true } }
  dogrula('Enerji üç seviye "Enerji Dedektifi" getirir', hakEdilenRozetler(enerji).includes('enerji-dedektifi'))

  const grafik = bosIlerleme()
  grafik.basarimlar = { 'hatasiz:kuvvet-hareket': true }
  dogrula('Hatasız hareket kontrolü "Grafik Okuru" getirir', hakEdilenRozetler(grafik).includes('grafik-okuru'))

  const nisan = bosIlerleme()
  nisan.basarimlar = { nisanci: true }
  dogrula('Hedefi vurmak "Nişancı" getirir', hakEdilenRozetler(nisan).includes('nisanci'))

  const devreEksik = bosIlerleme()
  devreEksik.basarimlar = Object.fromEntries(
    DEVRE_ARIZALARI.slice(0, -1).map((k) => [`devre-ariza:${k}`, true]),
  )
  dogrula('Eksik arıza "Devre Tamircisi" getirmez', !hakEdilenRozetler(devreEksik).includes('devre-tamircisi'))
  const devreTam = bosIlerleme()
  devreTam.basarimlar = Object.fromEntries(DEVRE_ARIZALARI.map((k) => [`devre-ariza:${k}`, true]))
  dogrula('Bütün arızalar "Devre Tamircisi" getirir', hakEdilenRozetler(devreTam).includes('devre-tamircisi'))

  const kasif = bosIlerleme()
  kasif.seviyeler = Object.fromEntries(BOLGELER.map((b) => [b.kod, { kesfet: true }]))
  dogrula('Her bölgeye uğramak "Kâşif" getirir', hakEdilenRozetler(kasif).includes('kasif'))
  dogrula('Bir bölge eksikken "Kâşif" yok', !hakEdilenRozetler({
    ...bosIlerleme(),
    seviyeler: Object.fromEntries(BOLGELER.slice(1).map((b) => [b.kod, { kesfet: true }])),
  }).includes('kasif'))

  // Tam bitirilmiş atlas: her bölgede üç seviye ve bütün deneyler.
  const tam = bosIlerleme()
  tam.seviyeler = Object.fromEntries(
    BOLGELER.map((b) => [b.kod, { kesfet: true, ogren: true, ustalas: true }]),
  )
  tam.tamamlanan = Object.fromEntries(
    BOLGELER.map((b) => [b.kod, Object.fromEntries(b.deneyler.map((d) => [d.kod, true]))]),
  )
  tam.basarimlar = {
    nisanci: true,
    'hatasiz:kuvvet-hareket': true,
    ...Object.fromEntries(DEVRE_ARIZALARI.map((k) => [`devre-ariza:${k}`, true])),
  }
  const hepsi = hakEdilenRozetler(tam)
  dogrula('Atlas tamamlanınca "Atlas Ustası" gelir', hepsi.includes('atlas-ustasi'))
  for (const r of ROZETLER) {
    dogrula(`Rozet ulaşılabilir: ${r.ad}`, hepsi.includes(r.kod))
  }
  dogrula('Tanımsız rozet verilmiyor', hepsi.every((k) => ROZETLER.some((r) => r.kod === k)))

  // Arıza kodları deneyle aynı kalmalı; biri değişirse rozet asla gelmez.
  const devreKaynak = readFileSync(
    new URL('../src/components/fizik/bolgeler/DevreBolgesi.jsx', import.meta.url), 'utf8',
  )
  for (const k of DEVRE_ARIZALARI) {
    dogrula(`Arıza kodu deneyde var: ${k}`, devreKaynak.includes(`kod: '${k}'`))
  }
  console.log(`   ${ROZETLER.length} rozetin tamamı ulaşılabilir.`)
}

/* ════════ Özet ════════ */
console.log(`\n${'─'.repeat(58)}`)
if (kalan === 0) {
  console.log(`✓ Tüm testler geçti — ${gecen} denetim başarılı.`)
  process.exit(0)
} else {
  console.log(`✗ ${kalan} denetim başarısız (${gecen} başarılı):\n`)
  for (const h of hatalar.slice(0, 40)) console.log(`   • ${h}`)
  if (hatalar.length > 40) console.log(`   … ve ${hatalar.length - 40} tane daha`)
  process.exit(1)
}
