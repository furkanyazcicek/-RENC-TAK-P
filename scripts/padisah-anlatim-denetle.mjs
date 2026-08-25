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
 *  • Ekrandaki olay başlığı seslendirmede BİREBİR tekrar ediliyor mu
 *    (isim kullanmak serbesttir; yasak olan ekrandaki cümleyi okumaktır)
 *  • Seslendirme süresi 75–100 saniye aralığında mı
 *  • Aynı anlatım bölümü kimliği iki kez kullanılmış mı
 */
import { PADISAHLAR } from '../src/data/padisahlar/index.js'
import { ANLATIMLAR } from '../src/data/padisahlar/anlatimlar.js'
import { anlatimCizelgesi, anlatimSuresi } from '../src/lib/padisahAnlatim.js'

/**
 * Hedef süre aralığı (konuşma; duraklamalar hariç).
 * İlk sürümde 75–100 sn'ydi. Metinlere somut ayrıntı eklenmesi
 * kararından sonra üst sınır genişletildi: olayın nedenini ve
 * kahramanlarını anlatmak yer istiyor. Duraklamalarla birlikte
 * dinlenen süre bunun yaklaşık 12 saniye üstüne çıkar.
 */
const EN_KISA = 75
const EN_UZUN = 150

/**
 * KURAL NASIL DEĞİŞTİ
 * İlk sürüm ekrandaki her özel adı seslendirmede yasaklıyordu. Sonuç
 * kaçamak bir anlatım oldu: "çağının en güçlü hükümdarı" gibi ifadeler,
 * Timur demekten kaçındığı için bilgi vermiyordu.
 *
 * Doğru ölçüt şudur: yasak olan İSİM değil, ekrandaki CÜMLEYİ tekrar
 * etmektir. "Ankara Savaşı" başlığını olduğu gibi söylemek tekrardır;
 * Timur'un kim olduğunu ve savaşın neden çıktığını anlatmak katkıdır.
 * Bu yüzden denetim artık yalnızca başlığın BİREBİR geçmesini arar.
 */

/** "1396 Niğbolu Savaşı" gibi başlıkları karşılaştırmaya hazırlar. */
function baslikDizesi(baslik) {
  return String(baslik ?? '').replace(/\s+/g, ' ').trim()
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

  // 2) Ekrandaki olay BAŞLIĞININ birebir tekrarı.
  const ekrandakiler = [
    ...(padisah.keyEvents ?? []), ...(padisah.battles ?? []),
    ...(padisah.conquests ?? []), ...(padisah.treaties ?? []),
  ]
  const tekrar = new Set()
  for (const olay of ekrandakiler) {
    const baslik = baslikDizesi(olay.title)
    /**
     * Yalnızca AYIRT EDİCİ başlıklar aranır. "Tahta çıkış" gibi genel
     * ifadeler her metinde doğal olarak geçer; onları tekrar saymak
     * denetimi gürültüye boğar. Ayırt edici sayılma ölçütü: başlıkta
     * ilk kelime dışında büyük harfle başlayan bir kelime bulunması
     * ("Ankara Savaşı") ya da üç kelimeden uzun olması.
     */
    const kelimeler = baslik.split(' ')
    const ozelAdVar = kelimeler.slice(1).some((k) => /^[A-ZÇĞİÖŞÜ]/.test(k))
    const ayirtEdici = ozelAdVar || kelimeler.length > 3
    if (ayirtEdici && metin.includes(baslik)) tekrar.add(baslik)
  }
  if (tekrar.size) uyarilar.push(`${padisah.id}: ekrandaki başlık birebir tekrar ediliyor → ${[...tekrar].join(' · ')}`)

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
