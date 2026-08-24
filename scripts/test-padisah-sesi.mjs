/**
 * PADİŞAH SESLENDİRME TESTLERİ
 * ------------------------------------------------------------------
 *     node scripts/test-padisah-sesi.mjs
 *
 * En kritik davranış şudur: anlatım metni düzeltildiğinde ESKİ ses
 * kaydı kendiliğinden devre dışı kalmalıdır. Aksi hâlde öğrenci
 * ekranda yeni metni okurken kulağında eski cümleleri duyar — sessiz
 * ve fark edilmesi çok zor bir hata. Bu dosya onu bekçiye bağlar.
 */
import assert from 'node:assert/strict'
import {
  anlatimCizelgesi, anlatimSuresi, anlatimMetni, anlatimSurumu, sesKaydiSec,
} from '../src/lib/padisahAnlatim.js'
import { PADISAHLAR, padisahBul } from '../src/data/padisahlar/index.js'
import { buildVoiceInstructions } from '../api/_lib/tts/index.js'

let hata = 0
async function kontrol(ad, islev) {
  try { await islev(); console.log(`✓ ${ad}`) }
  catch (e) { hata += 1; console.error(`✗ ${ad}\n   ${e.message}`) }
}

const bayezid = padisahBul('yildirim-bayezid')

await kontrol('Kaydı olmayan padişah sessiz moda düşer', () => {
  assert.equal(sesKaydiSec({}, bayezid), null)
})

await kontrol('Sürümü tutan kayıt kullanılır', () => {
  const defter = { 'yildirim-bayezid': { file: 'a.mp3', version: anlatimSurumu(bayezid), duration: 90 } }
  assert.equal(sesKaydiSec(defter, bayezid)?.file, 'a.mp3')
})

await kontrol('Metin değişince eski ses kaydı devre dışı kalır', () => {
  const defter = { 'yildirim-bayezid': { file: 'a.mp3', version: 'eskisurum', duration: 90 } }
  assert.equal(sesKaydiSec(defter, bayezid), null)
})

await kontrol('Anlatım metni bölümleri boş satırla ayırır', () => {
  const metin = anlatimMetni(bayezid)
  assert.ok(metin.includes('\n\n'), 'paragraf ayracı yok')
  assert.ok(!metin.includes('\n\n\n'), 'fazladan boş satır var')
})

await kontrol('Ses yokken çizelge tahmini sürelerle çalışır', () => {
  const cizelge = anlatimCizelgesi(bayezid)
  assert.equal(cizelge.length, bayezid.narration.length)
  assert.ok(anlatimSuresi(cizelge) > 0)
})

await kontrol('Gerçek ses süresi verilince çizelge tam ona oturur', () => {
  const cizelge = anlatimCizelgesi(bayezid, 100)
  assert.ok(Math.abs(anlatimSuresi(cizelge) - 100) < 0.01, 'toplam süre kayda eşit değil')
  assert.equal(cizelge[0].start, 0)
  for (let i = 1; i < cizelge.length; i += 1) {
    assert.ok(Math.abs(cizelge[i].start - cizelge[i - 1].end) < 1e-9, 'bölümler arasında boşluk var')
  }
})

await kontrol('Belgesel tonu öğretmen tonundan ayrıdır', () => {
  const belgesel = buildVoiceInstructions({ language: 'tr-TR', persona: 'belgesel' })
  const ogretmen = buildVoiceInstructions({ language: 'tr-TR' })
  assert.match(belgesel, /belgesel/i)
  assert.doesNotMatch(belgesel, /öğretmen gibi anlat\b/)
  assert.notEqual(belgesel, ogretmen)
})

await kontrol('Her padişahın seslendirilecek metni vardır', () => {
  for (const padisah of PADISAHLAR) {
    assert.ok(anlatimMetni(padisah).length > 400, `${padisah.id}: anlatım metni çok kısa`)
  }
})

console.log(hata ? `\n${hata} test başarısız.\n` : '\nTüm seslendirme testleri geçti.\n')
process.exit(hata ? 1 : 0)
