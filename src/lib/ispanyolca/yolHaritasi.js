/**
 * DRKOÇ — KİŞİSEL ÖĞRENME YOL HARİTASI
 * ==================================================================
 *
 * "Bugün ne yapmalıyım?" sorusunun tek ve net cevabını üretir.
 *
 * TASARIM KARARI — YAPAY ZEKÂ DEĞİL, AÇIKLANABİLİR KURAL: her önerinin
 * yanında NEDEN önerildiği yazar ("Bu ders son denemende %55'te kaldı",
 * "12 kelimenin tekrar vakti geldi"). Öğrenci sistemin kararını
 * anlayabilmeli; anlayamadığı bir plana uymaz.
 *
 * ÖNCELİK SIRASI (yukarıdan aşağı):
 *   1. Unutulmak üzere olan kelimeler        — kaybı önlemek yeni şey
 *   2. "Tekrar gerekli" işaretli dersler        öğrenmekten önemlidir
 *   3. En zayıf becerinin destek çalışması
 *   4. Sıradaki yeni ders
 *   5. İspanyolca düşünme antrenmanı
 *
 * CEZALANDIRMA YOK: kaçırılan gün için suçlayıcı dil kullanılmaz, plan
 * sessizce yeniden düzenlenir. Öğrenciye "3 gündür girmedin" denmez;
 * "kaldığın yer şurası" denir.
 */

import { DURUMLAR } from './ilerleme.js'
import { BECERILER, SEVIYE_SIRASI, seviyeIndeksi } from './seviyeler.js'
import { bekleyenSayisi } from './tekrar.js'

/** Haftalık süre seçeneği → günlük hedef dakika ve haftada kaç gün. */
export const YOGUNLUKLAR = {
  hafif: { ad: 'Hafif', haftalikDakika: 90, gun: 3, gunlukDakika: 30, aciklama: 'Haftada 3 gün, günde yarım saat' },
  duzenli: { ad: 'Düzenli', haftalikDakika: 175, gun: 5, gunlukDakika: 35, aciklama: 'Haftada 5 gün, günde 35 dakika' },
  yogun: { ad: 'Yoğun', haftalikDakika: 350, gun: 6, gunlukDakika: 60, aciklama: 'Haftada 6 gün, günde 1 saat' },
  sinav: { ad: 'Sınav temposu', haftalikDakika: 630, gun: 7, gunlukDakika: 90, aciklama: 'Her gün, günde 1,5 saat' },
}

/** Öğrencinin amacı → içerik ağırlığı. Yol haritası bu ağırlıkla kurulur. */
export const AMAC_AGIRLIKLARI = {
  okul: { kelime: 2, gramer: 3, okuma: 2, dinleme: 1, yazma: 2, telaffuz: 1, dizim: 2, dusunme: 1 },
  sinav: { kelime: 3, gramer: 3, okuma: 3, dinleme: 2, yazma: 1, telaffuz: 1, dizim: 2, dusunme: 1 },
  konusma: { kelime: 2, gramer: 1, okuma: 1, dinleme: 3, yazma: 1, telaffuz: 3, dizim: 2, dusunme: 3 },
  seyahat: { kelime: 3, gramer: 1, okuma: 1, dinleme: 3, yazma: 1, telaffuz: 2, dizim: 2, dusunme: 2 },
  akademik: { kelime: 3, gramer: 2, okuma: 3, dinleme: 2, yazma: 3, telaffuz: 1, dizim: 2, dusunme: 2 },
  meslek: { kelime: 3, gramer: 2, okuma: 2, dinleme: 2, yazma: 3, telaffuz: 2, dizim: 2, dusunme: 2 },
}

/** Görev türleri — arayüz bunları ikon ve renkle eşler. */
export const GOREV_TURLERI = {
  tekrar: { ad: 'Kelime tekrarı', rota: '/ispanyolca/tekrar' },
  ders: { ad: 'Ders', rota: '/ispanyolca/ders' },
  destek: { ad: 'Destek çalışması', rota: '/ispanyolca/ders' },
  dusunme: { ad: 'İspanyolca düşünme', rota: '/ispanyolca/dusunme' },
  telaffuz: { ad: 'Telaffuz', rota: '/ispanyolca/telaffuz' },
  degerlendirme: { ad: 'Seviye sonu değerlendirme', rota: '/ispanyolca/kutuphane' },
}

/**
 * Öğrencinin başlangıç seviyesini belirler. Tespit yapılmadıysa profildeki
 * beyanına göre en güvenli (bir alt) noktadan başlanır — öğrenciyi
 * anlamadığı bir yere koymak, kolay bir yerden başlatmaktan daha kötüdür.
 */
export function baslangicSeviyesi(ilerleme) {
  if (ilerleme?.tespit?.genelSeviye) return ilerleme.tespit.genelSeviye
  const beyan = ilerleme?.profil?.oncekiDeneyim
  if (beyan === 'hic') return 'Pre-A1'
  if (beyan === 'okul-temel') return 'A1'
  if (beyan === 'orta') return 'A2'
  if (beyan === 'ileri') return 'B1'
  return 'A1'
}

/**
 * Öğrencinin en zayıf becerisi. Hem tespit sonucundan hem de sonraki
 * alıştırma performansından beslenir.
 */
export function enZayifBeceri(ilerleme) {
  const puanlar = {}
  Object.entries(ilerleme?.beceriler ?? {}).forEach(([b, v]) => {
    if (Number.isFinite(v?.puan)) puanlar[b] = v.puan
  })
  const girisler = Object.entries(puanlar)
  if (!girisler.length) {
    // Ölçüm yoksa öğrencinin kendi beyanına düş.
    return ilerleme?.profil?.zorlandigiAlanlar?.[0] ?? null
  }
  girisler.sort((a, b) => a[1] - b[1])
  return girisler[0][0]
}

/**
 * Sıradaki dersi bulur: öğrencinin seviyesinde, ön koşulları karşılanmış,
 * henüz tamamlanmamış ilk ders.
 */
export function sonrakiDers(ilerleme, dersler) {
  const seviye = baslangicSeviyesi(ilerleme)
  const hedefIndeks = seviyeIndeksi(seviye)
  const durumlar = ilerleme?.dersler ?? {}

  const tamamlandiMi = (id) => {
    const d = durumlar[id]?.durum
    return d === DURUMLAR.TAMAMLANDI || d === DURUMLAR.GUCLENIYOR || d === DURUMLAR.USTALASILDI
  }

  /* Gelen liste zaten müfredat sırasındadır (bkz. content/ispanyolca/index.js).
     Burada yalnız seviyeye göre kararlı bir sıralama yapılır; ders `sira`sına
     göre yeniden sıralamak modülleri iç içe geçirirdi. */
  const sirali = [...dersler].sort(
    (a, b) => seviyeIndeksi(a.seviye) - seviyeIndeksi(b.seviye)
  )

  // Önce öğrencinin seviyesinden başla; orada bitmişse bir üste geç.
  const uygun = sirali.filter((d) => seviyeIndeksi(d.seviye) >= Math.max(0, hedefIndeks - 1))
  for (const ders of uygun) {
    if (tamamlandiMi(ders.id)) continue
    const onKosulEksik = (ders.onKosullar ?? []).some((id) => !tamamlandiMi(id))
    if (onKosulEksik) continue
    return ders
  }
  return sirali.find((d) => !tamamlandiMi(d.id)) ?? null
}

/** Tekrar edilmesi gereken dersler (son denemesi zayıf kalanlar). */
export function tekrarBekleyenDersler(ilerleme, dersler) {
  const durumlar = ilerleme?.dersler ?? {}
  return dersler.filter((d) => durumlar[d.id]?.durum === DURUMLAR.TEKRAR_GEREKLI)
}

/**
 * BUGÜNÜN GÖREVLERİ.
 *
 * @param {Object} ilerleme
 * @param {Object} kaynak  { dersler, kelimeler }
 * @returns {{gorevler:Array, toplamDakika:number, yogunluk:Object}}
 */
export function bugunPlani(ilerleme, kaynak) {
  const { dersler = [], kelimeler = [] } = kaynak ?? {}
  const yogunluk = YOGUNLUKLAR[ilerleme?.profil?.yogunluk] ?? YOGUNLUKLAR.duzenli
  const gorevler = []
  let dakika = 0

  const ekle = (gorev) => {
    if (dakika >= yogunluk.gunlukDakika + 10) return
    gorevler.push(gorev)
    dakika += gorev.dakika
  }

  // 1) Vakti gelen kelime tekrarı
  const bekleyen = bekleyenSayisi(ilerleme?.kartlar ?? {})
  if (bekleyen > 0) {
    ekle({
      id: 'tekrar',
      tur: 'tekrar',
      baslik: `${bekleyen} kelimenin tekrar vakti geldi`,
      neden: 'Bu kelimeleri bugün tekrar etmezsen unutma ihtimalin yükseliyor. Tekrar, yeni kelime öğrenmekten önce gelir.',
      rota: '/ispanyolca/tekrar',
      dakika: Math.min(12, Math.max(4, Math.ceil(bekleyen * 0.6))),
      oncelik: 1,
    })
  }

  // 2) Tekrar gerektiren ders
  const zayifDersler = tekrarBekleyenDersler(ilerleme, dersler)
  if (zayifDersler.length) {
    const ders = zayifDersler[0]
    const oran = ilerleme?.dersler?.[ders.id]?.oran ?? 0
    ekle({
      id: `ders-${ders.id}`,
      tur: 'destek',
      baslik: ders.baslik,
      neden: `Bu dersi son çözüşünde %${oran} doğruluk çıktı. Yeni konuya geçmeden bunu sağlamlaştırmak daha hızlı ilerletir.`,
      rota: `/ispanyolca/ders/${ders.id}`,
      dakika: ders.sure ?? 12,
      oncelik: 2,
    })
  }

  // 3) Sıradaki yeni ders
  const yeniDers = sonrakiDers(ilerleme, dersler)
  if (yeniDers && !gorevler.some((g) => g.id === `ders-${yeniDers.id}`)) {
    const durum = ilerleme?.dersler?.[yeniDers.id]?.durum
    ekle({
      id: `ders-${yeniDers.id}`,
      tur: 'ders',
      baslik: yeniDers.baslik,
      neden: durum === DURUMLAR.CALISILIYOR
        ? 'Bu derse başlamıştın, yarım kalmıştı. Kaldığın yerden devam et.'
        : `${yeniDers.seviye} seviyesinde sıradaki ders bu. ${yeniDers.amac}`,
      rota: `/ispanyolca/ders/${yeniDers.id}`,
      dakika: yeniDers.sure ?? 12,
      oncelik: 3,
    })
  }

  // 4) En zayıf beceriye destek
  const zayif = enZayifBeceri(ilerleme)
  if (zayif && dakika < yogunluk.gunlukDakika) {
    const beceriAdi = BECERILER[zayif]?.ad ?? zayif
    if (zayif === 'telaffuz') {
      ekle({
        id: 'telaffuz-destek',
        tur: 'telaffuz',
        baslik: 'Telaffuz laboratuvarı',
        neden: `Ölçümlerde en düşük alanın ${beceriAdi.toLowerCase()}. Günde 5 dakikalık ses çalışması bu alanı en hızlı yükselten şey.`,
        rota: '/ispanyolca/telaffuz',
        dakika: 6,
        oncelik: 4,
      })
    } else if (zayif === 'dusunme' || zayif === 'dizim') {
      ekle({
        id: 'dusunme-destek',
        tur: 'dusunme',
        baslik: 'İspanyolca düşünme antrenmanı',
        neden: `${beceriAdi} alanında zorlanıyorsun. Bu antrenman, cümleyi önce Türkçe kurup çevirme alışkanlığını kırmak için tasarlandı.`,
        rota: '/ispanyolca/dusunme',
        dakika: 7,
        oncelik: 4,
      })
    }
  }

  // 5) Gün hâlâ boşsa kelime çalışması
  if (dakika < yogunluk.gunlukDakika - 5 && kelimeler.length) {
    ekle({
      id: 'kelime-yeni',
      tur: 'tekrar',
      baslik: 'Yeni kelimeler',
      neden: 'Günlük hedefinde yer kaldı. Yeni kelimeler bugünün son işi olsun; önce tekrar, sonra yeni.',
      rota: '/ispanyolca/tekrar?mod=yeni',
      dakika: 8,
      oncelik: 5,
    })
  }

  return { gorevler, toplamDakika: dakika, yogunluk }
}

/**
 * HAFTALIK PLAN — hangi gün neye ağırlık verileceği.
 * Tahmini süre yerine "şu gün şu iş" der; öğrenci takvimini kurabilsin.
 */
export function haftalikPlan(ilerleme) {
  const yogunluk = YOGUNLUKLAR[ilerleme?.profil?.yogunluk] ?? YOGUNLUKLAR.duzenli
  const amac = AMAC_AGIRLIKLARI[ilerleme?.profil?.amac] ?? AMAC_AGIRLIKLARI.okul
  const zayif = enZayifBeceri(ilerleme)

  // Amaç ağırlığına göre en önemli üç beceri
  const oncelikli = Object.entries(amac)
    .sort((a, b) => b[1] - a[1])
    .map(([b]) => b)

  const gunler = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
  const plan = []
  /* Ders günleri arasında dönen sayaç: `i % 3` kullanılırsa tekrar
     günleri araya girdiği için üçüncü odak becerisi hiç görünmüyordu. */
  let dersGunuSayaci = 0

  for (let i = 0; i < 7; i += 1) {
    const calismaGunu = i < yogunluk.gun
    if (!calismaGunu) {
      plan.push({ gun: gunler[i], tur: 'dinlenme', baslik: 'Serbest gün', aciklama: 'Plan dışı. İstersen 3 dakikalık kelime tekrarı yapabilirsin.' })
      continue
    }
    const tekrarGunuMu = i === 2 || i === 5
    if (tekrarGunuMu) {
      plan.push({
        gun: gunler[i],
        tur: 'tekrar',
        baslik: 'Tekrar günü',
        aciklama: 'Yeni ders yok. Biriken kelimeler, zayıf kalan dersler ve hata defteri.',
      })
      continue
    }
    const odak = oncelikli[dersGunuSayaci % 3]
    dersGunuSayaci += 1
    plan.push({
      gun: gunler[i],
      tur: 'ders',
      baslik: `Yeni ders + ${BECERILER[odak]?.kisa ?? odak}`,
      aciklama: zayif === odak
        ? `Bu senin en zayıf alanın; bu güne biraz fazla pay ayrıldı.`
        : `${yogunluk.gunlukDakika} dakika: ders, alıştırma ve kısa tekrar.`,
    })
  }
  return { plan, yogunluk }
}

/**
 * İLK 30 GÜN HEDEFİ — öğrenciye somut ve ölçülebilir bir varış noktası.
 * Tahmini süre değil, PERFORMANSA dayalı ölçüt kullanılır.
 */
export function otuzGunHedefi(ilerleme, dersler) {
  const seviye = baslangicSeviyesi(ilerleme)
  const yogunluk = YOGUNLUKLAR[ilerleme?.profil?.yogunluk] ?? YOGUNLUKLAR.duzenli
  /* Hedef yalnız mevcut seviyenin dersleriyle sınırlı değil: bir seviyede
     az sayıda ders varsa öğrenci ayı boş geçirmesin diye bir üst seviyenin
     dersleri de hedefe dâhil edilir. */
  const hedefIndeks = seviyeIndeksi(seviye)
  const ulasilabilir = dersler.filter((d) => {
    const i = seviyeIndeksi(d.seviye)
    return i >= hedefIndeks && i <= hedefIndeks + 1
  })
  const dersHedefi = Math.max(1, Math.min(ulasilabilir.length, yogunluk.gun * 2))
  const kelimeHedefi = yogunluk.gun * 4 * 4 // hafta × gün × yeni kelime

  return {
    seviye,
    maddeler: [
      {
        baslik: dersHedefi === 1
          ? 'Sıradaki dersi "tamamlandı" durumuna getir'
          : `${dersHedefi} dersi "tamamlandı" durumuna getir`,
        olcut: 'Bir ders, alıştırmalarının en az %70\'i doğru olduğunda tamamlanmış sayılır.',
      },
      {
        baslik: `${kelimeHedefi} kelimeyi dört boyutta çalış`,
        olcut: 'Tanıma, bağlamda anlama, doğru yazma ve kendi cümlende kullanma.',
      },
      {
        baslik: 'En az iki yazma görevini taslaktan son sürüme getir',
        olcut: 'İlk sürümle son sürüm arasındaki farkı kendin görebileceksin.',
      },
      {
        baslik: 'Türkçe düşünme izlerinden en sık ikisini yarıya indir',
        olcut: 'Hata defterinde aynı iz iki hafta üst üste çıkmazsa düzelmiş sayılır.',
      },
      {
        baslik: `${seviye} seviye sonu değerlendirmesine gir`,
        olcut: 'Değerlendirme, seviyeyi tamamlayıp tamamlamadığını söyler; süreye değil performansa bakar.',
      },
    ],
  }
}

/** Bir üst seviyeye geçiş koşullarının ne kadarının karşılandığı. */
export function seviyeTamamlanmaDurumu(ilerleme, dersler, seviye) {
  const seviyeDersleri = dersler.filter((d) => d.seviye === seviye)
  if (!seviyeDersleri.length) return { oran: 0, tamam: 0, toplam: 0, hazir: false }
  const durumlar = ilerleme?.dersler ?? {}
  const tamam = seviyeDersleri.filter((d) => {
    const durum = durumlar[d.id]?.durum
    return durum === DURUMLAR.TAMAMLANDI || durum === DURUMLAR.GUCLENIYOR || durum === DURUMLAR.USTALASILDI
  }).length
  return {
    tamam,
    toplam: seviyeDersleri.length,
    oran: Math.round((tamam / seviyeDersleri.length) * 100),
    hazir: tamam / seviyeDersleri.length >= 0.8,
  }
}

/**
 * Aylık kontrol noktaları — öğrenci nerede duracağını ve neyin
 * ölçüleceğini baştan bilsin.
 */
export function kontrolNoktalari(ilerleme) {
  const seviye = baslangicSeviyesi(ilerleme)
  const ustIndeks = Math.min(SEVIYE_SIRASI.length - 1, seviyeIndeksi(seviye) + 1)
  return [
    {
      ad: '1. hafta sonu',
      olcum: 'Kısa bir ara ölçüm. Seviye tahmini yanlışsa burada düzeltilir.',
    },
    {
      ad: '1. ay sonu',
      olcum: `${seviye} seviyesindeki derslerin en az %80'i tamamlandıysa seviye sonu değerlendirmesi açılır.`,
    },
    {
      ad: '2. ay sonu',
      olcum: `Değerlendirmeyi geçtiysen ${SEVIYE_SIRASI[ustIndeks]} seviyesi açılır; geçemediysen eksik beceriye özel bir tekrar bloğu kurulur.`,
    },
    {
      ad: 'Her hafta',
      olcum: 'Hata defterindeki Türkçe düşünme izleri gözden geçirilir ve azalıp azalmadığı gösterilir.',
    },
  ]
}
