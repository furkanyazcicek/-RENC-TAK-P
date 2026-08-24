/**
 * SESLİ ANLATIM DENETİMİ — "ses ekranı okumasın"
 * ------------------------------------------------------------------
 *     node scripts/padisah-anlatim-denetle.mjs
 *
 * Elle yazılan anlatım metinlerinin temel kuralı şudur: ekranda zaten
 * görünen bilgi seslendirmede TEKRAR EDİLMEZ. Bu betik o kuralı
 * gözle değil makineyle kontrol eder.
 *
 * Ne bakar?
 *  • Metinde rakamla yıl geçiyor mu (ekranda tarih zaten yazıyor)
 *  • Ekrandaki olay/antlaşma/savaş başlıklarının özel adları
 *    seslendirmede tekrar ediliyor mu
 *  • Seslendirme süresi 75–100 saniye aralığında mı
 *  • Aynı anlatım bölümü kimliği iki kez kullanılmış mı
 */
import { PADISAHLAR } from '../src/data/padisahlar/index.js'
import { ANLATIMLAR } from '../src/data/padisahlar/anlatimlar.js'
import { anlatimCizelgesi, anlatimSuresi } from '../src/lib/padisahAnlatim.js'

const EN_KISA = 75
const EN_UZUN = 100

/** Başlıklarda geçen ama özel ad sayılmayacak sıradan kelimeler. */
const SIRADAN = new Set([
  'Osmanlı', 'Savaşı', 'Seferi', 'Antlaşması', 'Kuşatması', 'Devleti', 'Fethi',
  'İsyanı', 'Ocağı', 'Paşa’nın', 'Paşa', 'Devri', 'Vakası', 'Baskını', 'Harbi',
  'Meşrutiyet', 'Camii’nin', 'Camii', 'Sultanisi', 'Hisarı', 'Saltanatın', 'Tahta',
  'Deniz', 'Rum', 'İmparatorluğu’nun', 'Yeni', 'Büyük', 'Kısa', 'İlk', 'İkinci',
  /* Coğrafya adları tekrar sayılmaz: anlatım bir bölgeden söz etmeden
     olayın anlamını veremez. Yasak olan, ekrandaki OLAYIN adını
     tekrar etmektir — bölgenin değil. */
  'Anadolu', 'Avrupa', 'Balkan', 'Balkanlar', 'İstanbul', 'Edirne', 'Rumeli',
  'Karadeniz', 'Akdeniz', 'Tahttan', 'Mısır’ın', 'Kırım’ın',
])

/** "Mercidâbık Savaşı" → ["Mercidâbık"] gibi ayırt edici özel adlar. */
function ozelAdlar(baslik) {
  return String(baslik ?? '')
    .split(/[\s,;:–—-]+/)
    .map((k) => k.replace(/[’'".()]+$/g, ''))
    .filter((k) => k.length >= 5 && /^[A-ZÇĞİÖŞÜ]/.test(k) && !SIRADAN.has(k))
}

const hatalar = []
const uyarilar = []
const kimlikler = new Set()

for (const padisah of PADISAHLAR) {
  const anlatim = ANLATIMLAR[padisah.id]
  if (!anlatim) continue

  const metin = anlatim.map((b) => b.text).join(' ')

  for (const bolum of anlatim) {
    if (kimlikler.has(bolum.id)) hatalar.push(`${padisah.id}: anlatım bölümü kimliği iki kez → ${bolum.id}`)
    kimlikler.add(bolum.id)
    if (!bolum.text?.trim()) hatalar.push(`${padisah.id}: boş anlatım bölümü → ${bolum.id}`)
  }

  // 1) Rakamla yıl — ekranda zaten yazıyor.
  const yillar = metin.match(/\b1[0-9]{3}\b|\b20[0-9]{2}\b/g)
  if (yillar) hatalar.push(`${padisah.id}: seslendirmede rakamla yıl geçiyor → ${[...new Set(yillar)].join(', ')}`)

  // 2) Ekrandaki başlıkların özel adları.
  const ekrandakiler = [
    ...(padisah.keyEvents ?? []), ...(padisah.battles ?? []),
    ...(padisah.conquests ?? []), ...(padisah.treaties ?? []),
  ]
  const tekrar = new Set()
  for (const olay of ekrandakiler) {
    for (const ad of ozelAdlar(olay.title)) {
      if (metin.includes(ad)) tekrar.add(ad)
    }
  }
  if (tekrar.size) uyarilar.push(`${padisah.id}: ekrandaki başlık adı seslendirmede de geçiyor → ${[...tekrar].join(', ')}`)

  // 3) Süre.
  const sure = anlatimSuresi(anlatimCizelgesi(padisah))
  if (sure < EN_KISA || sure > EN_UZUN) {
    hatalar.push(`${padisah.id}: seslendirme süresi aralık dışı → ${sure} sn (hedef ${EN_KISA}–${EN_UZUN})`)
  }
}

const kapsam = PADISAHLAR.filter((p) => ANLATIMLAR[p.id]).length
console.log(`Elle yazılmış anlatımı olan padişah: ${kapsam} / ${PADISAHLAR.length}`)

if (uyarilar.length) {
  console.log('\nUYARILAR')
  uyarilar.forEach((u) => console.log('  · ' + u))
}
if (hatalar.length) {
  console.log('\nHATALAR')
  hatalar.forEach((h) => console.log('  ✗ ' + h))
  process.exit(1)
}
console.log('\nTamam — seslendirme ekrandaki bilgiyi tekrar etmiyor.')
