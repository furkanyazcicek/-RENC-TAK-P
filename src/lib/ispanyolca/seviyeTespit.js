/**
 * DRKOÇ — UYARLANABİLİR SEVİYE TESPİTİ
 * ==================================================================
 *
 * Sınav sabit bir soru listesi değildir. Öğrenci doğru cevapladıkça
 * sorular zorlaşır, zorlandıkça kolaylaşır. Böylece:
 *
 *  • Sıfırdan başlayan öğrenci 20 tane anlamadığı soruyla yıpranmaz,
 *  • İleri seviyedeki öğrenci kolay sorularla yanlış yere konulmaz,
 *  • Aynı güvenilirlik daha az soruyla elde edilir.
 *
 * ÖLÇÜLEN BECERİLER: kelime, gramer, dizim (cümle kurma), okuma, dinleme,
 * yazma, telaffuz farkındalığı ve İspanyolca düşünme (Türkçeden birebir
 * çeviri eğilimi).
 *
 * DÜRÜSTLÜK: bir beceriden yeterli veri toplanmadıysa o beceri için puan
 * ÜRETİLMEZ. Sonuç ekranı "ölçülemedi" der ve nasıl ölçüleceğini söyler.
 * Dinleme, cihazda İspanyolca ses yoksa hiç sorulmaz ve ölçülmemiş sayılır.
 *
 * TAHMİN YÖNTEMİ (açıklanabilir olsun diye kasten basit):
 *   Her cevaplanan sorunun seviye indeksine, doğruysa +0.6, yanlışsa −0.6
 *   eklenir. Bunların ortalaması öğrencinin yetenek tahminidir; en yakın
 *   seviyeye yuvarlanır. Yani "üç soruyu A2'de doğru yaptın, B1'de ikisini
 *   kaçırdın" cümlesi doğrudan sonuca dönüşür.
 */

import { alistirmaKontrol, DURUM, yazmaGeriBildirim } from './cevap.js'
import {
  BECERI_ANAHTARLARI,
  SEVIYE_SIRASI,
  seviyeIndeksi,
} from './seviyeler.js'

/** Sınavda sorulacak azami soru sayısı (yazma görevi hariç). */
export const SORU_BUTCESI = 18
/** Bir beceri için tahmin üretmeye yeten en az gözlem sayısı. */
export const EN_AZ_GOZLEM = 2
/** Sınavın başladığı seviye — ortadan başlamak en az soruyla en çok bilgi verir. */
const BASLANGIC_INDEKSI = seviyeIndeksi('A2')
/** Sınav en fazla C1 sorar; C2 tahmini C1 hâkimiyetinden türetilir. */
const EN_UST_INDEKS = seviyeIndeksi('C1')

export function bosOturum() {
  return {
    adim: 0,
    seviyeIndeks: BASLANGIC_INDEKSI,
    ustusteDogru: 0,
    ustusteYanlis: 0,
    gecmis: [],
    sorulanIdler: [],
    yazma: null,
    bitti: false,
  }
}

/**
 * Sıradaki soruyu seçer.
 *
 * Seçim iki ölçüte bakar: (1) hedef zorluk seviyesi, (2) hangi beceriden
 * en az gözlem var. Böylece sınav yalnız gramer sorusuna dönüşmez;
 * okuma, dinleme, dizim ve İspanyolca düşünme de yer bulur.
 *
 * @param {Object} oturum
 * @param {Object[]} banka  madde bankası
 * @param {Object} secenek  { dinlemeAcik }
 */
export function sonrakiSoru(oturum, banka, secenek = {}) {
  const { dinlemeAcik = true } = secenek
  if (oturum.bitti || oturum.adim >= SORU_BUTCESI) return null

  const sorulan = new Set(oturum.sorulanIdler)
  const gozlem = {}
  BECERI_ANAHTARLARI.forEach((b) => { gozlem[b] = 0 })
  oturum.gecmis.forEach((g) => { gozlem[g.beceri] = (gozlem[g.beceri] ?? 0) + 1 })

  const uygunMu = (soru) => {
    if (sorulan.has(soru.id)) return false
    if (!dinlemeAcik && soru.beceri === 'dinleme') return false
    return true
  }

  // Hedef seviyeden başlayıp dışa doğru genişleyen arama: tam seviyede soru
  // kalmadıysa bir alt/üst seviyeye bakılır, sınav kilitlenmez.
  for (const sapma of [0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6]) {
    const indeks = oturum.seviyeIndeks + sapma
    if (indeks < 0 || indeks > EN_UST_INDEKS) continue
    const seviye = SEVIYE_SIRASI[indeks]
    const adaylar = banka.filter((s) => s.seviye === seviye && uygunMu(s))
    if (!adaylar.length) continue
    // En az gözlenen beceriye öncelik ver.
    adaylar.sort((a, b) => (gozlem[a.beceri] ?? 0) - (gozlem[b.beceri] ?? 0))
    return adaylar[0]
  }
  return null
}

/**
 * Cevabı işler ve oturumu ilerletir.
 * Uyarlama kuralı: üst üste iki doğru → bir seviye yukarı;
 * üst üste iki yanlış → bir seviye aşağı.
 */
export function cevapIsle(oturum, soru, cevap) {
  const sonuc = alistirmaKontrol(soru, cevap)
  const dogruMu = sonuc.durum === DURUM.DOGRU || sonuc.durum === DURUM.YAKIN

  const ustusteDogru = dogruMu ? oturum.ustusteDogru + 1 : 0
  const ustusteYanlis = dogruMu ? 0 : oturum.ustusteYanlis + 1

  let seviyeIndeks = oturum.seviyeIndeks
  if (ustusteDogru >= 2) seviyeIndeks = Math.min(EN_UST_INDEKS, seviyeIndeks + 1)
  if (ustusteYanlis >= 2) seviyeIndeks = Math.max(0, seviyeIndeks - 1)

  const gecmis = [
    ...oturum.gecmis,
    {
      soruId: soru.id,
      seviye: soru.seviye,
      beceri: soru.beceri,
      dogruMu,
      durum: sonuc.durum,
      izKodu: sonuc.teshis?.kod ?? null,
    },
  ]

  return {
    ...oturum,
    adim: oturum.adim + 1,
    seviyeIndeks,
    ustusteDogru: ustusteDogru >= 2 ? 0 : ustusteDogru,
    ustusteYanlis: ustusteYanlis >= 2 ? 0 : ustusteYanlis,
    gecmis,
    sorulanIdler: [...oturum.sorulanIdler, soru.id],
  }
}

/** Yazma görevini oturuma ekler. */
export function yazmaEkle(oturum, gorev, metin) {
  return { ...oturum, yazma: { gorev: gorev.id, metin, analiz: yazmaGeriBildirim(metin, gorev) } }
}

/**
 * Yetenek tahmini → seviye indeksi (ondalıklı).
 *
 * Ağırlıklar bilinçli olarak SİMETRİK DEĞİL: doğru cevap +0.6, yanlış
 * cevap −1.2. Sebebi şu — bir soruyu doğru yapmak "en az bu seviyedeyim"
 * demektir, ama yanlış yapmak "bu seviyenin altındayım" demektir ve bu
 * daha güçlü bir kanıttır. Simetrik ağırlıkta, hiçbir soruyu doğru
 * yapamayan öğrenci bile A1 çıkabiliyordu; öğrenciye olmadığı bir seviye
 * söylemek, sistemin verebileceği en zararlı yanlıştır.
 */
function yetenekTahmini(kayitlar) {
  if (!kayitlar.length) return null
  const toplam = kayitlar.reduce((acc, k) => {
    const taban = seviyeIndeksi(k.seviye)
    return acc + taban + (k.dogruMu ? 0.6 : -1.2)
  }, 0)
  return toplam / kayitlar.length
}

function indeksToSeviye(deger) {
  const yuvarlanmis = Math.round(Math.max(0, Math.min(SEVIYE_SIRASI.length - 1, deger)))
  return SEVIYE_SIRASI[yuvarlanmis]
}

/** 0–100 arası okunabilir puan (yalnız görselleştirme için). */
function puanaCevir(deger) {
  const oran = (deger + 1.2) / (SEVIYE_SIRASI.length - 1 + 1.2)
  return Math.max(0, Math.min(100, Math.round(oran * 100)))
}

/**
 * Sınavı sonuçlandırır.
 *
 * @param {Object} oturum
 * @param {Object} profil  başlangıç akışında toplanan hedefler
 * @param {Object} secenek { dinlemeOlculdu }
 */
export function sonucla(oturum, profil = null, secenek = {}) {
  const { dinlemeOlculdu = true } = secenek
  const gecmis = oturum.gecmis ?? []

  const genelTahmin = yetenekTahmini(gecmis)
  const yazmaAnaliz = oturum.yazma?.analiz ?? null

  /* Beceri bazlı tahminler. Yeterli gözlem yoksa null — sahte kesinlik yok. */
  const beceriTahminleri = {}
  const beceriPuanlari = {}
  const olculemeyenler = []

  BECERI_ANAHTARLARI.forEach((beceri) => {
    if (beceri === 'yazma') return
    if (beceri === 'dinleme' && !dinlemeOlculdu) {
      olculemeyenler.push({
        beceri,
        sebep: 'Cihazında İspanyolca ses bulunamadığı için dinleme soruları sorulmadı.',
        nasil: 'Cihaz ayarlarından bir İspanyolca ses indirdikten sonra dinleme çalışmalarına girebilirsin.',
      })
      return
    }
    const kayitlar = gecmis.filter((g) => g.beceri === beceri)
    if (kayitlar.length < EN_AZ_GOZLEM) {
      olculemeyenler.push({
        beceri,
        sebep: 'Bu beceriden yeterli soru sorulmadı, güvenilir bir tahmin üretmiyoruz.',
        nasil: 'İlk modülün alıştırmalarını çözdükçe bu alan kendiliğinden ölçülecek.',
      })
      return
    }
    const tahmin = yetenekTahmini(kayitlar)
    beceriTahminleri[beceri] = indeksToSeviye(tahmin)
    beceriPuanlari[beceri] = puanaCevir(tahmin)
  })

  /* Yazma, sorulardan değil metinden değerlendirilir ve kesinlik iddiası
     taşımaz: yalnız sayılabilir göstergeler raporlanır. */
  let yazmaSeviyesi = null
  if (yazmaAnaliz) {
    const k = yazmaAnaliz.kelimeSayisi
    const yapiOrani = yazmaAnaliz.kullanilanYapilar.length
      / Math.max(1, yazmaAnaliz.kullanilanYapilar.length + yazmaAnaliz.eksikYapilar.length)
    const aktarimHatasi = yazmaAnaliz.bulgular.filter((b) => b.tur === 'aktarim').length
    let indeks = 0
    if (k >= 15) indeks = 1
    if (k >= 35 && yapiOrani >= 0.5) indeks = 2
    if (k >= 60 && yapiOrani >= 0.7 && aktarimHatasi === 0) indeks = 3
    if (k >= 100 && yapiOrani >= 0.8 && aktarimHatasi === 0) indeks = 4
    yazmaSeviyesi = SEVIYE_SIRASI[indeks]
    beceriTahminleri.yazma = yazmaSeviyesi
    beceriPuanlari.yazma = puanaCevir(indeks)
  } else {
    olculemeyenler.push({
      beceri: 'yazma',
      sebep: 'Yazma görevi tamamlanmadı.',
      nasil: 'Kısa bir tanıtım metni yazdığında yazma alanın da ölçülecek.',
    })
  }

  const genelSeviye = genelTahmin == null ? 'Pre-A1' : indeksToSeviye(genelTahmin)

  /* Güçlü ve gelişmesi gereken alanlar — genel seviyeye göre. */
  const genelIndeks = seviyeIndeksi(genelSeviye)
  const guclu = []
  const gelisim = []
  Object.entries(beceriTahminleri).forEach(([beceri, seviye]) => {
    const fark = seviyeIndeksi(seviye) - genelIndeks
    if (fark > 0) guclu.push({ beceri, seviye })
    else if (fark < 0) gelisim.push({ beceri, seviye })
  })
  gelisim.sort((a, b) => seviyeIndeksi(a.seviye) - seviyeIndeksi(b.seviye))

  /* Türkçe düşünme izleri — hem yanlış cevaplardan hem yazma metninden. */
  const izKodlari = new Set()
  gecmis.forEach((g) => { if (g.izKodu) izKodlari.add(g.izKodu) })
  ;(yazmaAnaliz?.bulgular ?? []).forEach((b) => { if (b.iz?.kod) izKodlari.add(b.iz.kod) })

  const dogruSayisi = gecmis.filter((g) => g.dogruMu).length

  /* Güven düzeyi: kaç soru soruldu ve sonuç ne kadar tutarlı?
     Az soru + dalgalı cevap = düşük güven, ekranda açıkça söylenir. */
  const soruSayisi = gecmis.length
  const dalgalanma = gecmis.length > 1
    ? gecmis.slice(1).filter((g, i) => g.dogruMu !== gecmis[i].dogruMu).length / (gecmis.length - 1)
    : 1
  const guven = soruSayisi >= 14 && dalgalanma < 0.5
    ? 'yuksek'
    : soruSayisi >= 8
      ? 'orta'
      : 'dusuk'

  return {
    genelSeviye,
    genelPuan: genelTahmin == null ? 0 : puanaCevir(genelTahmin),
    beceriSeviyeleri: beceriTahminleri,
    beceriPuanlari,
    olculemeyenler,
    guclu,
    gelisim,
    izler: [...izKodlari],
    soruSayisi,
    dogruSayisi,
    guven,
    yazma: oturum.yazma
      ? { metin: oturum.yazma.metin, analiz: yazmaAnaliz, seviye: yazmaSeviyesi }
      : null,
    profil,
    /* Sonucun NEDEN böyle çıktığını öğrenciye anlatan cümleler. */
    gerekce: gerekceUret({ gecmis, genelSeviye, dogruSayisi, soruSayisi, guven }),
  }
}

function gerekceUret({ gecmis, genelSeviye, dogruSayisi, soruSayisi, guven }) {
  const satirlar = []
  satirlar.push(
    `${soruSayisi} sorudan ${dogruSayisi} tanesini doğru yaptın. Sorular cevaplarına göre zorlaşıp kolaylaştı; sonuç bu iniş çıkışın oturduğu noktadır.`
  )

  const seviyeBazli = {}
  gecmis.forEach((g) => {
    seviyeBazli[g.seviye] = seviyeBazli[g.seviye] ?? { dogru: 0, toplam: 0 }
    seviyeBazli[g.seviye].toplam += 1
    if (g.dogruMu) seviyeBazli[g.seviye].dogru += 1
  })
  const dokum = SEVIYE_SIRASI
    .filter((s) => seviyeBazli[s])
    .map((s) => `${s}: ${seviyeBazli[s].dogru}/${seviyeBazli[s].toplam}`)
    .join(' · ')
  if (dokum) satirlar.push(`Seviyelere göre dağılım — ${dokum}.`)

  if (guven === 'dusuk') {
    satirlar.push(
      'Az sayıda soru cevaplandığı için bu tahmin kesin değil. İlk modülü çalıştıkça sistem seviyeni kendiliğinden düzeltecek.'
    )
  } else if (guven === 'orta') {
    satirlar.push(
      `Tahmin ${genelSeviye} çevresinde oturdu ama sınırda. İlk hafta sonunda yeniden değerlendirilecek.`
    )
  }
  return satirlar
}
