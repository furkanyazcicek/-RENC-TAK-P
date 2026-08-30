#!/usr/bin/env node
/**
 * Kimya Atlası — bilimsel tutarlılık testleri
 * ------------------------------------------------------------------
 * Çalıştırma:  npm run test:kimya
 *
 * Denetlenenler:
 *  1. 118 elementin elektron dizilimi ve katman dağılımı atom numarasına eşit mi?
 *  2. Formül çözümleyici, zorunlu örneklerde doğru atom sayısını veriyor mu?
 *  3. Veri tabanındaki her türün Lewis yapısında formal yükler toplamı
 *     türün net yüküne eşit mi? (Lewis yapısı yanlışsa burada yakalanır.)
 *  4. 3B yapıdaki atom bileşimi, formülden hesaplanan bileşimle aynı mı?
 *  5. Bildirilen bağ açısı, kurulan 3B yapıdan ölçülen açıyla uyuşuyor mu?
 */

import { ELEMENTLER } from '../src/data/kimya/elementler.js'
import { formuluCozumle } from '../src/lib/kimya/formulParser.js'
import { lewisKur } from '../src/lib/kimya/lewis.js'
import { TURLER } from '../src/data/kimya/turler.js'
import { bagAcisi } from '../src/lib/kimya/geometri3b.js'

let gecen = 0
let kalan = 0
const hatalar = []

function dogrula(baslik, kosul, ayrinti = '') {
  if (kosul) { gecen += 1 } else { kalan += 1; hatalar.push(`${baslik}${ayrinti ? ' — ' + ayrinti : ''}`) }
}

/* ————— 1) Element verisi ————— */
console.log('\n1) Element verisi (118 element)')
for (const e of ELEMENTLER) {
  const elektron = e.dizilim.reduce((t, a) => t + a.sayi, 0)
  const katman = e.katmanlar.reduce((t, a) => t + a, 0)
  dogrula(`${e.sembol} dizilim toplamı`, elektron === e.atomNo, `${elektron} ≠ ${e.atomNo}`)
  dogrula(`${e.sembol} katman toplamı`, katman === e.atomNo, `${katman} ≠ ${e.atomNo}`)
  dogrula(`${e.sembol} nötron sayısı`, e.notron >= 0, `${e.notron}`)
}
console.log(`   ${ELEMENTLER.length} element denetlendi.`)

/* ————— 2) Formül çözümleyici ————— */
console.log('\n2) Formül çözümleyici (zorunlu örnekler)')
const BEKLENEN = [
  ['H2O', { H: 2, O: 1 }, 3, 0],
  ['CO2', { C: 1, O: 2 }, 3, 0],
  ['NH3', { N: 1, H: 3 }, 4, 0],
  ['CH4', { C: 1, H: 4 }, 5, 0],
  ['O2', { O: 2 }, 2, 0],
  ['N2', { N: 2 }, 2, 0],
  ['HCl', { H: 1, Cl: 1 }, 2, 0],
  ['NaCl', { Na: 1, Cl: 1 }, 2, 0],
  ['NO3-', { N: 1, O: 3 }, 4, -1],
  ['NH4+', { N: 1, H: 4 }, 5, 1],
  ['CO3^2-', { C: 1, O: 3 }, 4, -2],
  ['SO4^2-', { S: 1, O: 4 }, 5, -2],
  ['Ca(OH)2', { Ca: 1, O: 2, H: 2 }, 5, 0],
  ['Al2(SO4)3', { Al: 2, S: 3, O: 12 }, 17, 0],
  ['Fe2(SO4)3', { Fe: 2, S: 3, O: 12 }, 17, 0],
  ['C2H5OH', { C: 2, H: 6, O: 1 }, 9, 0],
  ['CH3COOH', { C: 2, H: 4, O: 2 }, 8, 0],
  ['CuSO4·5H2O', { Cu: 1, S: 1, O: 9, H: 10 }, 21, 0],
  ['K4[Fe(CN)6]', { K: 4, Fe: 1, C: 6, N: 6 }, 17, 0],
  ['PO43-', { P: 1, O: 4 }, 5, -3],
]
for (const [formul, atomlar, toplam, yuk] of BEKLENEN) {
  const s = formuluCozumle(formul)
  dogrula(`${formul} çözümlendi`, s.basarili, s.hata)
  if (!s.basarili) continue
  for (const [sembol, adet] of Object.entries(atomlar)) {
    dogrula(`${formul} → ${sembol}`, s.atomHaritasi[sembol] === adet, `${s.atomHaritasi[sembol]} ≠ ${adet}`)
  }
  dogrula(`${formul} toplam atom`, s.toplamAtom === toplam, `${s.toplamAtom} ≠ ${toplam}`)
  dogrula(`${formul} net yük`, s.yuk === yuk, `${s.yuk} ≠ ${yuk}`)
  console.log(`   ${formul.padEnd(13)} → ${s.bicimli.padEnd(15)} ${s.toplamAtom} atom, yük ${s.yuk}`)
}

console.log('\n   Hatalı girdiler reddediliyor mu?')
for (const kotu of ['H2O)', 'Ca(OH2', 'Xx2', '', 'H2()O', '2', '@#']) {
  const s = formuluCozumle(kotu)
  dogrula(`"${kotu}" reddedildi`, !s.basarili, 'hatalı formül kabul edildi')
}

/* ————— 3) Lewis yapıları ————— */
console.log('\n3) Lewis yapıları — formal yük toplamı = net yük')
for (const tur of TURLER) {
  const cozum = formuluCozumle(tur.anahtar)
  if (!cozum.basarili) { dogrula(`${tur.anahtar} anahtarı çözümlenebilir`, false, cozum.hata); continue }
  const netYuk = cozum.yuk
  const tanimlar = tur.rezonans ?? (tur.lewis ? [tur.lewis] : [])
  for (const [i, tanim] of tanimlar.entries()) {
    const lewis = lewisKur(tanim, netYuk)
    dogrula(
      `${tur.anahtar} Lewis${tanimlar.length > 1 ? ` (rezonans ${i + 1})` : ''}`,
      lewis.tutarli,
      `formal yük toplamı ${lewis.toplamFormalYuk}, net yük ${netYuk}`,
    )
    // Lewis'teki atom bileşimi formülle uyuşmalı
    const sayim = {}
    for (const a of tanim.atomlar) sayim[a.sembol] = (sayim[a.sembol] || 0) + 1
    for (const [sembol, adet] of Object.entries(cozum.atomHaritasi)) {
      dogrula(`${tur.anahtar} Lewis bileşimi (${sembol})`, sayim[sembol] === adet, `${sayim[sembol] ?? 0} ≠ ${adet}`)
    }
  }
}

/* ————— 4) 3B yapı bileşimi ————— */
console.log('\n4) 3B yapı — atom bileşimi formülle uyuşuyor mu?')
for (const tur of TURLER) {
  if (!tur.yapi || tur.kafes) continue
  const yapi = tur.yapi()
  const cozum = formuluCozumle(tur.anahtar)
  const sayim = {}
  for (const a of yapi.atomlar) sayim[a.sembol] = (sayim[a.sembol] || 0) + 1
  for (const [sembol, adet] of Object.entries(cozum.atomHaritasi)) {
    dogrula(`${tur.anahtar} 3B bileşimi (${sembol})`, sayim[sembol] === adet, `${sayim[sembol] ?? 0} ≠ ${adet}`)
  }
}

/* ————— 5) Bağ açıları ————— */
console.log('\n5) Bağ açısı denetimi')
const ACI_TESTLERI = [
  ['H2O', 104.5], ['NH3', 107], ['CH4', 109.5], ['CO2', 180],
  ['NO3^-', 120], ['CO3^2-', 120], ['SO4^2-', 109.5], ['NH4^+', 109.5],
  ['SO2', 119], ['BF3', 120], ['CCl4', 109.5], ['N2', 180], ['O3', 117],
]
for (const [anahtar, beklenen] of ACI_TESTLERI) {
  const tur = TURLER.find((t) => t.anahtar === anahtar)
  if (!tur?.yapi) { dogrula(`${anahtar} yapısı var`, false); continue }
  const yapi = tur.yapi()
  const merkezId = 0
  const komsular = yapi.baglar.filter((b) => b.a === merkezId).map((b) => b.b)
  if (komsular.length < 2) continue
  const olculen = bagAcisi(yapi, merkezId, komsular[0], komsular[1])
  dogrula(`${anahtar} bağ açısı`, Math.abs(olculen - beklenen) < 1.5, `ölçülen ${olculen.toFixed(1)}°, beklenen ${beklenen}°`)
  console.log(`   ${anahtar.padEnd(9)} ${olculen.toFixed(1)}°  (beklenen ${beklenen}°)`)
}

/* ————— Sonuç ————— */
console.log('\n' + '─'.repeat(60))
if (kalan === 0) {
  console.log(`✅ Tüm denetimler geçti (${gecen} kontrol).`)
  process.exit(0)
} else {
  console.log(`❌ ${kalan} denetim başarısız (${gecen} geçti):`)
  for (const h of hatalar.slice(0, 40)) console.log('   • ' + h)
  if (hatalar.length > 40) console.log(`   … ve ${hatalar.length - 40} tane daha`)
  process.exit(1)
}
