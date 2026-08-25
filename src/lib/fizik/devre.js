/**
 * Fizik Atlası — Sanal devre laboratuvarı çözücüsü
 * ==================================================================
 * Öğrencinin sürükle-bırakla kurduğu **her topolojiyi** (seri, paralel,
 * karışık, açık, kısa devre) çözebilmek için "düğüm gerilimi yöntemi"
 * (Modified Nodal Analysis) uygulanır. Seri/paralel indirgeme yapmayız;
 * o yöntem köprü devrelerinde çalışmaz ve öğrenci istediği gibi
 * bağlayabilmelidir.
 *
 * Modelleme kararları:
 *  - Kablo ve kapalı anahtar: dirençsizdir, düğümler birleştirilir.
 *  - Ampermetre: ideal (0 Ω) kabul edilir ama üzerinden geçen akımı
 *    okuyabilmek için "0 volt üreteç" olarak modellenir.
 *  - Voltmetre: ideal (∞ Ω) kabul edilir, devreye hiç girmez; yalnızca
 *    iki düğüm arasındaki gerilim farkını okur. Seri bağlanırsa devre
 *    açık kalır — bu kasıtlıdır, öğrenci hatayı sonuçtan görür.
 *  - Açık anahtar: eleman devreden çıkarılır.
 *  - Üretecin iç direnci varsayılan 0'dır (müfredattaki "ideal üreteç").
 *    İdeal üreteç kısa devre edilirse denklem takımı çözümsüz kalır;
 *    o durumda çok küçük bir iç dirençle yeniden çözülür ve sonuç
 *    "kısa devre" olarak işaretlenir.
 */

/** Ampullerin anma değerleri: parlaklık bunlara göre ölçeklenir. */
export const AMPUL_TIPLERI = {
  kucuk: { ad: 'Küçük ampul', direnc: 6, anmaGucu: 1.5, anmaGerilimi: 3 },
  orta: { ad: 'Orta ampul', direnc: 12, anmaGucu: 3, anmaGerilimi: 6 },
  buyuk: { ad: 'Büyük ampul', direnc: 24, anmaGucu: 6, anmaGerilimi: 12 },
}

/* ————— Temel bağıntılar (doğrudan test edilir) ————— */

/** Ohm yasası: V = I·R */
export const ohmGerilim = (akim, direnc) => akim * direnc
/** I = V / R */
export function ohmAkim(gerilim, direnc) {
  if (!direnc || direnc <= 0) return null
  return gerilim / direnc
}
/** Elektriksel güç: P = V·I = I²R = V²/R */
export const elektrikGucu = (gerilim, akim) => gerilim * akim
/** Tüketilen enerji: E = P·t (jul). kWh'ye çevirmek için birimler.js kullanılır. */
export const elektrikEnerjisi = (guc, sure) => guc * sure

/** Seri eşdeğer direnç: R = R₁ + R₂ + … */
export const seriEsdeger = (dirençler) => dirençler.reduce((t, r) => t + r, 0)

/**
 * Paralel eşdeğer direnç: 1/R = 1/R₁ + 1/R₂ + …
 * Sonuç her zaman en küçük dirençten **küçüktür**; test bunu denetler.
 * Listede 0 Ω varsa (kısa devre kolu) eşdeğer 0'dır.
 */
export function paralelEsdeger(dirençler) {
  if (dirençler.length === 0) return Infinity
  if (dirençler.some((r) => r === 0)) return 0
  const toplam = dirençler.reduce((t, r) => t + 1 / r, 0)
  return toplam === 0 ? Infinity : 1 / toplam
}

/* ————— Doğrusal denklem çözücü ————— */

/**
 * Gauss eliminasyonu (kısmi pivotlama ile). Matris tekilse `null` döner
 * — bu, devrenin fiziksel olarak çözümsüz olduğu (örneğin ideal üretecin
 * kısa devre edildiği) anlamına gelir.
 */
function gaussCoz(A, b) {
  const n = b.length
  const M = A.map((satir, i) => [...satir, b[i]])

  for (let s = 0; s < n; s += 1) {
    // En büyük mutlak değerli satırı pivot yap: sayısal kararlılık için.
    let enBuyuk = s
    for (let i = s + 1; i < n; i += 1) {
      if (Math.abs(M[i][s]) > Math.abs(M[enBuyuk][s])) enBuyuk = i
    }
    if (Math.abs(M[enBuyuk][s]) < 1e-14) return null
    ;[M[s], M[enBuyuk]] = [M[enBuyuk], M[s]]

    for (let i = s + 1; i < n; i += 1) {
      const carpan = M[i][s] / M[s][s]
      if (carpan === 0) continue
      for (let j = s; j <= n; j += 1) M[i][j] -= carpan * M[s][j]
    }
  }

  const x = new Array(n).fill(0)
  for (let i = n - 1; i >= 0; i -= 1) {
    let toplam = M[i][n]
    for (let j = i + 1; j < n; j += 1) toplam -= M[i][j] * x[j]
    x[i] = toplam / M[i][i]
  }
  return x
}

/** Birleştir–bul (union-find): kabloyla bağlı düğümleri tek düğüm yapar. */
function birlestirmeKur(dugumler) {
  const kok = new Map(dugumler.map((d) => [d, d]))
  const bul = (d) => {
    let k = d
    while (kok.get(k) !== k) k = kok.get(k)
    // Yol sıkıştırma
    let g = d
    while (kok.get(g) !== g) { const s = kok.get(g); kok.set(g, k); g = s }
    return k
  }
  const birlestir = (a, b) => { const ka = bul(a); const kb = bul(b); if (ka !== kb) kok.set(ka, kb) }
  return { bul, birlestir }
}

/**
 * Devreyi çözer.
 *
 * @param {object} devre
 * @param {Array} devre.elemanlar Her eleman: { id, tur, a, b, ...özellikler }
 *   tur ∈ 'pil' | 'direnc' | 'ampul' | 'reosta' | 'kablo' | 'anahtar' |
 *          'ampermetre' | 'voltmetre'
 * @returns {{
 *   basarili: boolean, uyarilar: object[], dugumGerilimleri: object,
 *   elemanlar: object[], toplamAkim: number, esdegerDirenc: number|null,
 *   toplamGuc: number, kisaDevre: boolean
 * }}
 */
export function devreCoz(devre, { zorunluIcDirenc = 0, icKontrol = false } = {}) {
  const elemanlar = devre.elemanlar ?? []
  const uyarilar = []

  // — 1) Etkin elemanları süz: açık anahtar ve voltmetre devrede yoktur.
  const etkin = elemanlar.filter((e) => {
    if (e.tur === 'anahtar' && !e.kapali) return false
    if (e.tur === 'voltmetre') return false
    return true
  })

  // — 2) Düğümleri topla ve dirençsiz bağlantıları birleştir.
  const tumDugumler = [...new Set(elemanlar.flatMap((e) => [e.a, e.b]))]
  if (tumDugumler.length === 0) {
    return { basarili: false, uyarilar: [{ tur: 'bos', mesaj: 'Devrede hiç eleman yok.' }], elemanlar: [], dugumGerilimleri: {}, toplamAkim: 0, esdegerDirenc: null, toplamGuc: 0, kisaDevre: false }
  }
  const { bul, birlestir } = birlestirmeKur(tumDugumler)
  for (const e of etkin) {
    if (e.tur === 'kablo' || (e.tur === 'anahtar' && e.kapali)) birlestir(e.a, e.b)
  }

  const dugumler = [...new Set(tumDugumler.map(bul))]
  const toprak = dugumler[0]
  const indeks = new Map(dugumler.filter((d) => d !== toprak).map((d, i) => [d, i]))
  const dugumSayisi = indeks.size

  /**
   * Gerilim kaynağı gibi davranan dallar (ekstra akım bilinmeyeni gerekir):
   *  - iç direnci sıfır olan piller
   *  - ampermetreler (0 V kaynak)
   */
  const cozumDene = (icDirencZoru) => {
    const kaynakDallari = []
    for (const e of etkin) {
      if (e.tur === 'pil') {
        const r = e.icDirenc ?? icDirencZoru
        if (r > 0) continue // Dirençli pil, Norton eşdeğeriyle çözülür (aşağıda).
        kaynakDallari.push({ eleman: e, gerilim: e.emk ?? 0 })
      } else if (e.tur === 'ampermetre') {
        kaynakDallari.push({ eleman: e, gerilim: 0 })
      }
    }

    const n = dugumSayisi + kaynakDallari.length
    // Bütün düğümler tek noktada birleşmişse çözülecek bilinmeyen kalmaz:
    // bu bir hata değil, "tüm gerilimler toprakla aynı" çözümüdür.
    if (n === 0) return { x: [], kaynakDallari }

    const A = Array.from({ length: n }, () => new Array(n).fill(0))
    const b = new Array(n).fill(0)

    // Düğüm denklemlerinde kayan düğüm kalmasın diye çok küçük bir
    // toprak iletkenliği eklenir (SPICE'ın "gmin" tekniği). Sonucu
    // ölçülebilir biçimde değiştirmez, matrisi tekil olmaktan kurtarır.
    for (let i = 0; i < dugumSayisi; i += 1) A[i][i] += 1e-12

    const direncEkle = (d1, d2, R) => {
      if (R <= 0) return
      const G = 1 / R
      const i1 = indeks.get(d1)
      const i2 = indeks.get(d2)
      if (i1 !== undefined) A[i1][i1] += G
      if (i2 !== undefined) A[i2][i2] += G
      if (i1 !== undefined && i2 !== undefined) { A[i1][i2] -= G; A[i2][i1] -= G }
    }
    const akimKaynagiEkle = (dCikis, dGiris, I) => {
      // I akımı dCikis'ten çıkıp dGiris'e girer.
      const i1 = indeks.get(dCikis)
      const i2 = indeks.get(dGiris)
      if (i1 !== undefined) b[i1] -= I
      if (i2 !== undefined) b[i2] += I
    }

    for (const e of etkin) {
      const a = bul(e.a)
      const c = bul(e.b)
      if (e.tur === 'direnc' || e.tur === 'ampul' || e.tur === 'reosta') {
        // 0 Ω direnç fiziksel olarak kablodur; bölme hatası olmasın diye
        // çok küçük bir değere sabitlenir.
        direncEkle(a, c, Math.max(e.direnc ?? 0, 1e-9))
      } else if (e.tur === 'pil') {
        const r = e.icDirenc ?? icDirencZoru
        if (r > 0) {
          // Thevenin → Norton: r'ye paralel (emk/r) akım kaynağı.
          // Akımın yönü b ucundan a ucuna doğrudur; çünkü a artı uçtur ve
          // üreteç dış devreye akımı a'dan verir.
          direncEkle(a, c, r)
          akimKaynagiEkle(c, a, (e.emk ?? 0) / r)
        }
      }
    }

    // Gerilim kaynağı dalları: V(a) − V(b) = E
    kaynakDallari.forEach((dal, k) => {
      const sutun = dugumSayisi + k
      const a = bul(dal.eleman.a)
      const c = bul(dal.eleman.b)
      const ia = indeks.get(a)
      const ic = indeks.get(c)
      if (ia !== undefined) { A[ia][sutun] += 1; A[sutun][ia] += 1 }
      if (ic !== undefined) { A[ic][sutun] -= 1; A[sutun][ic] -= 1 }
      b[sutun] = dal.gerilim
    })

    return { x: gaussCoz(A, b), kaynakDallari }
  }

  let { x, kaynakDallari } = cozumDene(zorunluIcDirenc)
  let kisaDevre = false

  if (x === null || x?.some((v) => !Number.isFinite(v))) {
    // İdeal üreteç kısa devre edilmiş olabilir: küçük bir iç dirençle
    // yeniden çözüp öğrenciye ne olduğunu göstermek, hata ekranı
    // göstermekten daha öğreticidir.
    ;({ x, kaynakDallari } = cozumDene(0.05))
    kisaDevre = true
    if (x === null) {
      return {
        basarili: false,
        uyarilar: [{ tur: 'cozumsuz', baslik: 'Devre çözülemedi', mesaj: 'Bağlantılar çelişkili. Birbirine zıt iki üreteci doğrudan uç uca bağlamış olabilirsin.' }],
        elemanlar: [], dugumGerilimleri: {}, toplamAkim: 0, esdegerDirenc: null, toplamGuc: 0, kisaDevre: true,
      }
    }
  }

  // Yapısal kısa devre: üretecin iki ucu dirençsiz bir yolla aynı düğüme
  // düşmüşse, denklem takımı çözülebilmiş olsa bile devre kısa devredir.
  for (const e of etkin) {
    if (e.tur === 'pil' && bul(e.a) === bul(e.b) && (e.emk ?? 0) !== 0) kisaDevre = true
  }

  // — 3) Düğüm gerilimlerini oku.
  const gerilim = (dugum) => {
    const k = bul(dugum)
    if (k === toprak) return 0
    const i = indeks.get(k)
    return i === undefined ? 0 : x[i]
  }

  const dugumGerilimleri = {}
  for (const d of tumDugumler) dugumGerilimleri[d] = gerilim(d)

  // — 4) Her elemanın akım, gerilim ve gücünü hesapla.
  const sonuclar = []
  let toplamKaynakAkimi = 0
  let toplamGuc = 0

  for (const e of elemanlar) {
    const va = gerilim(e.a)
    const vb = gerilim(e.b)
    const dV = va - vb
    let akim = 0
    let calisiyor = true

    if (e.tur === 'anahtar' && !e.kapali) {
      calisiyor = false
    } else if (e.tur === 'direnc' || e.tur === 'ampul' || e.tur === 'reosta') {
      akim = dV / Math.max(e.direnc ?? 0, 1e-9)
    } else if (e.tur === 'pil') {
      const r = e.icDirenc ?? (kisaDevre ? 0.05 : zorunluIcDirenc)
      if (r > 0) {
        // Norton kolundan geçen gerçek akım: (E − ΔV) / r
        akim = ((e.emk ?? 0) - dV) / r
      } else {
        const dal = kaynakDallari.findIndex((d) => d.eleman.id === e.id)
        akim = dal >= 0 ? -x[dugumSayisi + dal] : 0
      }
      toplamKaynakAkimi += Math.abs(akim)
    } else if (e.tur === 'ampermetre') {
      // Ampermetre pasif elemandır: akım a ucundan b ucuna doğru pozitif sayılır.
      // (Pilde ters işaret kullanılır çünkü orada dışarıya verilen akım okunur.)
      const dal = kaynakDallari.findIndex((d) => d.eleman.id === e.id)
      akim = dal >= 0 ? x[dugumSayisi + dal] : 0
    } else if (e.tur === 'voltmetre') {
      akim = 0 // İdeal voltmetreden akım geçmez.
    } else if (e.tur === 'kablo' || (e.tur === 'anahtar' && e.kapali)) {
      akim = null // Kablodaki akım tek başına tanımlı değildir (düğüm birleşik).
    }

    const guc = akim === null ? null : Math.abs(dV * akim)
    if (e.tur !== 'pil' && guc) toplamGuc += guc

    const kayit = {
      ...e,
      gerilim: e.tur === 'voltmetre' ? dV : dV,
      akim,
      guc,
      calisiyor,
    }

    if (e.tur === 'ampul') {
      const tip = AMPUL_TIPLERI[e.tip] ?? { anmaGucu: e.anmaGucu ?? 3, anmaGerilimi: e.anmaGerilimi ?? 6 }
      const gercekGuc = Math.abs(dV * akim)
      // Parlaklık, anma gücüne oranla ölçeklenir; göz güç algısını
      // doğrusal görmediği için karekök ile yumuşatılır.
      const oran = tip.anmaGucu > 0 ? gercekGuc / tip.anmaGucu : 0
      kayit.parlaklik = Math.min(1, Math.sqrt(Math.max(0, oran)))
      kayit.gucOrani = oran
      kayit.yanmisMi = oran > 2.2 // Anma gücünün iki katını aşarsa filaman kopar.
      kayit.anmaGucu = tip.anmaGucu
      if (kayit.yanmisMi) {
        uyarilar.push({ tur: 'ampulYandi', baslik: 'Ampul dayanamaz', mesaj: `${e.etiket ?? 'Ampul'} anma gücünün ${oran.toFixed(1)} katı güç çekiyor. Gerçek devrede filaman kopardı.` })
      }
    }

    sonuclar.push(kayit)
  }

  // — 5) Eşdeğer direnç: tek üreteçli devrelerde uçlarındaki gerilimin
  //      çektiği akıma oranı. Akım yoksa devre açıktır.
  const piller = sonuclar.filter((e) => e.tur === 'pil')
  let esdegerDirenc = null
  if (piller.length === 1) {
    const p = piller[0]
    esdegerDirenc = Math.abs(p.akim) > 1e-9 ? Math.abs(p.gerilim / p.akim) : Infinity
  }

  // — 6) Uyarılar: öğrenciye "yanlış" demek yerine nedenini söyle.
  if (piller.length === 0) {
    uyarilar.push({ tur: 'urectecYok', baslik: 'Üreteç yok', mesaj: 'Devrede pil bulunmuyor. Akımın oluşabilmesi için bir potansiyel farkı kaynağı gerekir.' })
  } else if (piller.every((p) => Math.abs(p.akim) < 1e-9)) {
    uyarilar.push({ tur: 'acikDevre', baslik: 'Devre açık', mesaj: 'Hiçbir yerden akım geçmiyor. Anahtar açık olabilir, bir kablo eksik olabilir ya da seri bağlı bir voltmetre yolu kesiyor olabilir.' })
  }
  if (kisaDevre) {
    uyarilar.push({ tur: 'kisaDevre', baslik: 'Kısa devre', mesaj: 'Üretecin iki ucu dirençsiz bir yolla birleşmiş. Gerçek devrede akım tehlikeli biçimde büyür, kablolar ısınır ve sigorta atar. Üreteci ampule vardırmayan bu kısa yolu kaldır.' })
  }

  // Seri bağlı voltmetre denetimi: ideal voltmetre sonsuz dirençlidir, seri
  // bağlanırsa devreyi keser. "Yanlış" demek yerine nedenini gösterebilmek
  // için voltmetreyi kablo sayıp devreyi bir kez daha çözer, akım doğuyorsa
  // hatanın kaynağı bulunmuş olur. `icKontrol` sonsuz özyinelemeyi keser.
  if (!icKontrol && piller.length > 0 && piller.every((p) => Math.abs(p.akim) < 1e-9)) {
    for (const v of elemanlar.filter((e) => e.tur === 'voltmetre')) {
      const deneme = devreCoz(
        { ...devre, elemanlar: elemanlar.map((e) => (e.id === v.id ? { ...e, tur: 'kablo' } : e)) },
        { zorunluIcDirenc, icKontrol: true },
      )
      const akimDogdu = deneme.basarili && deneme.elemanlar.some((e) => (e.tur === 'pil') && Math.abs(e.akim) > 1e-6)
      if (akimDogdu) {
        uyarilar.push({
          tur: 'voltmetreSeri',
          baslik: 'Voltmetre seri bağlanmış',
          mesaj: `${v.etiket ?? 'Voltmetre'} devrenin içine, akımın geçmesi gereken yola konmuş. Voltmetrenin direnci çok büyüktür; seri bağlanınca akımı keser. Voltmetre, gerilimini ölçmek istediğin elemana PARALEL bağlanır.`,
        })
      }
    }
  }

  return {
    basarili: true,
    uyarilar,
    dugumGerilimleri,
    elemanlar: sonuclar,
    toplamAkim: toplamKaynakAkimi,
    esdegerDirenc,
    toplamGuc,
    kisaDevre,
  }
}

/**
 * Ampermetre yanlış bağlanmış mı? İdeal ampermetre bir elemanla paralel
 * bağlanırsa o elemanı kısa devre eder ve eleman çalışmaz.
 */
export function ampermetreParalelMi(devre, ampermetreId) {
  const amper = devre.elemanlar.find((e) => e.id === ampermetreId)
  if (!amper) return false
  return devre.elemanlar.some(
    (e) =>
      e.id !== amper.id &&
      (e.tur === 'ampul' || e.tur === 'direnc' || e.tur === 'reosta' || e.tur === 'pil') &&
      ((e.a === amper.a && e.b === amper.b) || (e.a === amper.b && e.b === amper.a)),
  )
}
