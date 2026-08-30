/**
 * Fizik Atlası — Dalgalar ve ses
 * ==================================================================
 * Dalga bir **enerji aktarımıdır**; ortam taşınmaz, taneciklerin
 * titreşimi ilerler. Bu ayrım simülasyonda görsel olarak vurgulanır:
 * işaretli bir tanecik yerinde kalıp titreşirken dalga ilerler.
 */

/** Dalga hızı: v = λ·f */
export const dalgaHizi = (dalgaBoyu, frekans) => dalgaBoyu * frekans
/** Dalga boyu: λ = v / f */
export function dalgaBoyu(hiz, frekans) {
  if (!frekans || frekans <= 0) return null
  return hiz / frekans
}
/** Frekans: f = 1 / T */
export function frekans(periyot) {
  if (!periyot || periyot <= 0) return null
  return 1 / periyot
}
/** Periyot: T = 1 / f */
export function periyot(f) {
  if (!f || f <= 0) return null
  return 1 / f
}

/**
 * Ortam değişince **frekans değişmez**, hız ve dalga boyu değişir.
 * Frekansı kaynak belirler; ortam yalnızca dalganın ne kadar hızlı
 * ilerleyeceğini belirler. TYT'de en sık sorulan ayrım budur.
 */
export function ortamDegisimi({ frekans: f, ilkHiz, yeniHiz }) {
  return {
    frekans: f, // Değişmez.
    ilkDalgaBoyu: dalgaBoyu(ilkHiz, f),
    yeniDalgaBoyu: dalgaBoyu(yeniHiz, f),
    hizOrani: ilkHiz === 0 ? null : yeniHiz / ilkHiz,
  }
}

/** Farklı ortamlarda ses hızı (m/s, ~20 °C). */
export const SES_HIZLARI = {
  hava: { ad: 'Hava (20 °C)', hiz: 343, hal: 'gaz', renk: '#7dd3fc' },
  havaSicak: { ad: 'Sıcak hava (40 °C)', hiz: 355, hal: 'gaz', renk: '#fbbf24' },
  helyum: { ad: 'Helyum', hiz: 972, hal: 'gaz', renk: '#c4b5fd' },
  su: { ad: 'Su', hiz: 1482, hal: 'sivi', renk: '#38bdf8' },
  denizSuyu: { ad: 'Deniz suyu', hiz: 1522, hal: 'sivi', renk: '#0ea5e9' },
  tahta: { ad: 'Tahta', hiz: 3850, hal: 'kati', renk: '#b45309' },
  cam: { ad: 'Cam', hiz: 4540, hal: 'kati', renk: '#a5f3fc' },
  demir: { ad: 'Demir', hiz: 5120, hal: 'kati', renk: '#94a3b8' },
  boslukYok: { ad: 'Boşluk (vakum)', hiz: 0, hal: 'yok', renk: '#475569' },
}

/** Havada sıcaklığa bağlı ses hızı: v ≈ 331 + 0,6·T (°C) */
export const havadaSesHizi = (sicaklikC) => 331 + 0.6 * sicaklikC

/**
 * Yankı: sesin engelden dönüp kulağa ulaşması. Ses gidip geldiği için
 * yol iki katıdır: 2x = v·t
 */
export function yanki({ uzaklik, sesHizi }) {
  const sure = (2 * uzaklik) / sesHizi
  return {
    sure,
    // Kulak, iki sesi ayırt edebilmek için ~0,1 s ara ister.
    duyulurMu: sure >= 0.1,
    enYakinUzaklik: (0.1 * sesHizi) / 2,
  }
}

/**
 * İlerleyen dalganın t anındaki, x konumundaki yer değiştirmesi:
 *   y(x,t) = A·sin(2π(x/λ − t/T) + φ)
 * Yön +1 sağa, −1 sola ilerleyen dalgadır.
 */
export function dalgaProfili({ genlik, dalgaBoyu: lam, periyot: T, t, x, faz = 0, yon = 1 }) {
  if (!lam || !T) return 0
  return genlik * Math.sin(2 * Math.PI * (x / lam - (yon * t) / T) + faz)
}

/**
 * İki dalganın üst üste binmesi (süperpozisyon).
 * Yer değiştirmeler **cebirsel** toplanır: tepe+tepe yapıcı, tepe+çukur
 * yıkıcı girişim verir. Dalgalar birbirini bozmadan yollarına devam eder.
 */
export function ustUsteBinme(dalgalar, x, t) {
  return dalgalar.reduce((toplam, d) => toplam + dalgaProfili({ ...d, x, t }), 0)
}

/**
 * Uçtan yansıma.
 *  - **Sabit uç**: dalga ters dönerek yansır (faz 180° değişir). İp ucu
 *    sabit olduğu için hareketsiz kalmak zorundadır; bunu ancak zıt bir
 *    atma üreterek başarır.
 *  - **Serbest uç**: aynı yönde yansır (faz değişmez).
 */
export function yansimaFazi(ucTuru) {
  return ucTuru === 'sabit'
    ? { fazDegisimi: 180, tersDoner: true, aciklama: 'Sabit uçta atma ters dönerek yansır: tepe geldiyse çukur olarak döner.' }
    : { fazDegisimi: 0, tersDoner: false, aciklama: 'Serbest uçta atma aynı yönde yansır: tepe geldiyse tepe olarak döner.' }
}

/**
 * İnce bir ipteki dalga hızı: v = √(F/μ)
 * Gerilme arttıkça hızlanır, ip kalınlaştıkça (μ artar) yavaşlar.
 */
export function ipteDalgaHizi({ gerilme, cizgiselYogunluk }) {
  if (!cizgiselYogunluk || cizgiselYogunluk <= 0) return null
  return Math.sqrt(gerilme / cizgiselYogunluk)
}

/**
 * Duran dalga / rezonans: iki ucu sabit ipte oluşabilen frekanslar.
 *   fₙ = n·v / (2L)   (n = 1, 2, 3, …)
 * Sürücü frekans bu değerlerden birine yaklaştıkça genlik büyür.
 */
export function rezonansFrekanslari({ uzunluk, hiz, adet = 5 }) {
  if (!uzunluk || uzunluk <= 0) return []
  return Array.from({ length: adet }, (_, i) => ({
    mod: i + 1,
    frekans: ((i + 1) * hiz) / (2 * uzunluk),
    dalgaBoyu: (2 * uzunluk) / (i + 1),
    dugumSayisi: i + 2,
    karinSayisi: i + 1,
  }))
}

/**
 * Rezonans tepkisi: sürücü frekans doğal frekansa ne kadar yakınsa
 * genlik o kadar büyür. Sönümlü rezonans eğrisi (Lorentz biçimi).
 */
export function rezonansGenligi({ surucuFrekans, dogalFrekans, sonum = 0.05 }) {
  const oran = surucuFrekans / dogalFrekans
  const payda = Math.sqrt((1 - oran * oran) ** 2 + (2 * sonum * oran) ** 2)
  return payda === 0 ? Infinity : 1 / payda
}

/**
 * Su dalgalarında kırılma: derinden sığa geçen dalga yavaşlar,
 * dalga boyu kısalır, normale yaklaşır. sin i / sin r = v₁ / v₂
 */
export function dalgaKirilmasi({ gelisAcisi, hiz1, hiz2 }) {
  const i = (gelisAcisi * Math.PI) / 180
  const oran = (Math.sin(i) * hiz2) / hiz1
  if (Math.abs(oran) > 1) return { tamYansima: true, kirilmaAcisi: null, sinirAcisi: (Math.asin(hiz1 / hiz2) * 180) / Math.PI }
  return {
    tamYansima: false,
    kirilmaAcisi: (Math.asin(oran) * 180) / Math.PI,
    normaleYaklasti: hiz2 < hiz1,
  }
}

/**
 * Sesin nitelikleri:
 *  - Frekans → **incelik/kalınlık** (yükseklik). Yüksek frekans = ince ses.
 *  - Genlik → **şiddet** (gürlük). Büyük genlik = gür ses.
 * İkisi bağımsızdır; ince ses gür olmak zorunda değildir.
 */
export function sesNiteligi({ frekans: f, genlik }) {
  return {
    yukseklik: f < 250 ? 'kalın' : f < 1000 ? 'orta' : 'ince',
    siddet: genlik < 0.33 ? 'hafif' : genlik < 0.66 ? 'orta' : 'gür',
    insanDuyarMi: f >= 20 && f <= 20000,
    bolge: f < 20 ? 'ses altı (infrasound)' : f > 20000 ? 'ses üstü (ultrasound)' : 'duyulabilir',
  }
}
