export const sinirla = (deger, alt, ust) => Math.min(ust, Math.max(alt, Number(deger)))

export function enzimHizi({ sicaklik = 37, ph = 7, enzim = 50, substrat = 50 }) {
  const sicaklikCarpani = sicaklik <= 37 ? Math.max(0, sicaklik / 37) : Math.exp(-((sicaklik - 37) ** 2) / 180)
  const phCarpani = Math.exp(-((ph - 7) ** 2) / 4.5)
  const doygunluk = substrat / (substrat + 35)
  const hiz = 100 * sicaklikCarpani * phCarpani * (enzim / 50) * doygunluk
  return { hiz: sinirla(hiz, 0, 100), denature: sicaklik >= 50, sicaklikCarpani, phCarpani, doygunluk }
}

export function zarTasimaKarari({ molekul = 'oksijen', dis = 80, ic = 20, atp = true, kanal = true, hedef = 'iceri' }) {
  const kucukApolar = ['oksijen', 'karbondioksit'].includes(molekul)
  const su = molekul === 'su'
  const buyuk = ['protein', 'nisasta'].includes(molekul)
  const gradyanaDogru = hedef === 'iceri' ? dis >= ic : ic >= dis
  if (buyuk) return { tur: hedef === 'iceri' ? 'Endositoz' : 'Ekzositoz', atp: true, olur: atp, neden: 'Büyük yükler vezikülle taşınır ve enerji gerektirir.' }
  if (su) return { tur: 'Ozmoz', atp: false, olur: true, neden: 'Seçici geçirgen zarda net su hareketi su derışimi farkına bağlıdır.' }
  if (!gradyanaDogru) return { tur: 'Aktif taşıma', atp: true, olur: atp && kanal, neden: 'Derişim farkına karşı taşıma ATP ve uygun taşıyıcı ister.' }
  if (kucukApolar) return { tur: 'Basit difüzyon', atp: false, olur: true, neden: 'Küçük apolar molekül fosfolipit tabakadan gradyana doğru geçebilir.' }
  return { tur: 'Kolaylaştırılmış difüzyon', atp: false, olur: kanal, neden: 'Polar veya iyonik tanecik gradyana doğru giderken kanal/taşıyıcı kullanır.' }
}

const EVRELER = {
  mitoz: [
    { ad: 'G1', kromozom: 2, dna: 2, kromatit: 2, hucre: 1, olay: 'Hücre büyür.' },
    { ad: 'S', kromozom: 2, dna: 4, kromatit: 4, hucre: 1, olay: 'DNA eşlenir; kromozom sayısı değişmez.' },
    { ad: 'Metafaz', kromozom: 2, dna: 4, kromatit: 4, hucre: 1, olay: 'Kromozomlar tek sıra dizilir.' },
    { ad: 'Anafaz', kromozom: 4, dna: 4, kromatit: 4, hucre: 1, olay: 'Kardeş kromatitler ayrı kromozom olur.' },
    { ad: 'Sitokinez', kromozom: 2, dna: 2, kromatit: 2, hucre: 2, olay: 'İki hücre oluşur.' },
  ],
  mayoz: [
    { ad: 'G1', kromozom: 2, dna: 2, kromatit: 2, hucre: 1, olay: 'Diploit ana hücre.' },
    { ad: 'Profaz I', kromozom: 2, dna: 4, kromatit: 4, hucre: 1, olay: 'Homologlar eşleşir; crossing-over olabilir.' },
    { ad: 'Anafaz I', kromozom: 2, dna: 4, kromatit: 4, hucre: 1, olay: 'Homolog kromozomlar ayrılır.' },
    { ad: 'Mayoz I sonu', kromozom: 1, dna: 2, kromatit: 2, hucre: 2, olay: 'İki haploit hücre.' },
    { ad: 'Mayoz II sonu', kromozom: 1, dna: 1, kromatit: 1, hucre: 4, olay: 'Dört haploit ve çeşitli hücre.' },
  ],
}
export const bolunmeDurumu = (tur, indeks) => (EVRELER[tur] ?? EVRELER.mitoz)[sinirla(indeks, 0, (EVRELER[tur] ?? EVRELER.mitoz).length - 1)]
export const bolunmeEvreleri = (tur) => EVRELER[tur] ?? EVRELER.mitoz

export const gametler = (genotip) => [...new Set(String(genotip).split(''))]
export function punnett(genotipA = 'Aa', genotipB = 'Aa') {
  const a = gametler(genotipA); const b = gametler(genotipB)
  const hucreler = a.flatMap((x) => b.map((y) => [x, y].sort((m, n) => (m === m.toUpperCase() ? -1 : 1) - (n === n.toUpperCase() ? -1 : 1)).join('')))
  const sayim = hucreler.reduce((t, g) => ({ ...t, [g]: (t[g] ?? 0) + 1 }), {})
  return { gametA: a, gametB: b, hucreler, olasiliklar: Object.fromEntries(Object.entries(sayim).map(([g, n]) => [g, n / hucreler.length])) }
}

export function fotosentezHizi({ isik = 60, co2 = 60, sicaklik = 25, su = 60 }) {
  const sicaklikPuani = Math.max(0, 100 - Math.abs(sicaklik - 25) * 5)
  const faktorler = { Işık: isik, 'CO₂': co2, Sıcaklık: sicaklikPuani, Su: su }
  const sinirlayici = Object.entries(faktorler).sort((a, b) => a[1] - b[1])[0]
  return { hiz: sinirlayici[1], sinirlayici: sinirlayici[0], faktorler }
}

export function lojistikPopulasyon({ baslangic = 30, dogum = 12, olum = 5, goc = 0, kapasite = 100, adim = 18 }) {
  let n = Math.max(1, baslangic); const noktalar = [{ t: 0, n }]
  const r = (dogum - olum + goc) / 100
  for (let t = 1; t <= adim; t += 1) { n = Math.max(0, n + r * n * (1 - n / Math.max(1, kapasite))); noktalar.push({ t, n }) }
  return noktalar
}

export function besinAgiEtkisi({ baslangic = 'tavsan', degisim = 20 } = {}) {
  const baglar = { ot: { tavsan: -0.55, cekirge: -0.4 }, tavsan: { ot: -0.45, tilki: 0.6, kartal: 0.35 }, cekirge: { ot: -0.3, kurbaga: 0.55 }, kurbaga: { cekirge: -0.4, yilan: 0.5 }, yilan: { kurbaga: -0.35, kartal: 0.45 }, tilki: { tavsan: -0.45 }, kartal: { tavsan: -0.25, yilan: -0.35 } }
  const etkiler = { [baslangic]: degisim }
  for (let tur = 0; tur < 2; tur += 1) for (const [kaynak, etki] of Object.entries(etkiler)) for (const [hedef, katsayi] of Object.entries(baglar[kaynak] ?? {})) etkiler[hedef] = (etkiler[hedef] ?? 0) + etki * katsayi * (tur ? 0.45 : 1)
  return Object.fromEntries(Object.entries(etkiler).map(([k, v]) => [k, Math.round(v)]))
}

export function ustalikHesapla({ dogru = 0, deneme = 0, transfer = false, tekrar = 0 }) {
  if (!deneme) return 0
  return Math.round(sinirla((dogru / deneme) * 65 + (transfer ? 25 : 0) + Math.min(10, tekrar * 2), 0, 100))
}

