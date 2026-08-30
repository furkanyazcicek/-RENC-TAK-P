export const MOLEKULLER = {
  oksijen: { ad: 'O₂', tur: 'küçük-apolar' }, karbondioksit: { ad: 'CO₂', tur: 'küçük-apolar' },
  su: { ad: 'Su', tur: 'su' }, glikoz: { ad: 'Glikoz', tur: 'polar' }, iyon: { ad: 'İyon', tur: 'iyon' }, protein: { ad: 'Protein', tur: 'büyük' },
}

export const ZAR_BASLANGIC = Object.freeze({ molekul: 'oksijen', dis: 18, ic: 4, kanal: true, atp: false, hedef: 'iceri' })

export function zarMekanizmasi({ molekul, dis, ic, kanal, atp, hedef }) {
  const oz = MOLEKULLER[molekul] ?? MOLEKULLER.oksijen
  const hedefeGradyan = hedef === 'iceri' ? dis > ic : ic > dis
  if (oz.tur === 'büyük') return { ad: hedef === 'iceri' ? 'Endositoz' : 'Ekzositoz', izin: atp, enerji: true, neden: atp ? 'Zar yükü sararak vezikül oluşturur.' : 'Büyük yükün vezikülle taşınması için ATP gerekir.' }
  if (oz.tur === 'su') return { ad: 'Ozmoz', izin: dis !== ic, enerji: false, neden: 'Su, çözünen derişimi yüksek bölmeye doğru net hareket eder.' }
  if (hedefeGradyan && oz.tur === 'küçük-apolar') return { ad: 'Basit difüzyon', izin: true, enerji: false, neden: 'Küçük apolar molekül fosfolipitlerin arasından gradyana doğru geçer.' }
  if (hedefeGradyan) return { ad: 'Kolaylaştırılmış difüzyon', izin: kanal, enerji: false, neden: kanal ? 'Kanal/taşıyıcı gradyana doğru geçiş sağlar.' : 'Polar veya yüklü tanecik için uygun protein gerekir.' }
  return { ad: 'Aktif taşıma', izin: Boolean(atp && kanal), enerji: true, neden: atp && kanal ? 'Taşıyıcı ATP kullanarak gradyana karşı çalışır.' : 'Gradyana karşı geçiş için hem ATP hem uygun taşıyıcı gerekir.' }
}

export function zarBaslat(ayarlar = {}) {
  const girdi = { ...ZAR_BASLANGIC, ...ayarlar }
  return { ...girdi, zaman: 0, netAkis: 0, toplamHareket: 0, grafik: [{ x: 0, dis: girdi.dis, ic: girdi.ic, net: 0 }], durum: 'hazır', faz: 0 }
}

export function zarAdim(durum, dt = 1) {
  const mekanizma = zarMekanizmasi(durum)
  const fark = Math.abs(durum.dis - durum.ic)
  const denge = fark <= 1 && mekanizma.ad !== 'Aktif taşıma'
  let yon = durum.hedef
  if (mekanizma.ad !== 'Aktif taşıma' && mekanizma.ad !== 'Endositoz' && mekanizma.ad !== 'Ekzositoz') yon = durum.dis >= durum.ic ? 'iceri' : 'disari'
  const miktar = mekanizma.izin && !denge ? Math.max(0.25, Math.min(2, fark * 0.16)) * dt : 0
  const dis = Math.max(0, durum.dis + (yon === 'iceri' ? -miktar : miktar))
  const ic = Math.max(0, durum.ic + (yon === 'iceri' ? miktar : -miktar))
  const net = yon === 'iceri' ? miktar : -miktar
  const zaman = durum.zaman + dt
  // Dinamik dengede iki yönde eşit geçiş vardır: net sıfır, moleküler hareket sıfır değildir.
  const toplamHareket = durum.toplamHareket + (denge ? 2 * dt : Math.abs(net))
  return {
    ...durum, dis, ic, zaman, netAkis: denge ? 0 : net, toplamHareket, mekanizma, faz: durum.faz + 1,
    grafik: [...durum.grafik, { x: zaman, dis, ic, net: denge ? 0 : net }].slice(-31),
    durum: !mekanizma.izin ? 'koşul uygun değil' : denge ? 'dengeye ulaştı' : 'çalışıyor',
  }
}

export const zarSifirla = (ayarlar = {}) => zarBaslat(ayarlar)

export function tonisiteAdim({ ortam = 'izotonik', hucre = 'hayvan', adim = 0 }) {
  const yon = ortam === 'hipotonik' ? 1 : ortam === 'hipertonik' ? -1 : 0
  const hacim = Math.max(0.55, Math.min(1.5, 1 + yon * adim * 0.06))
  const durum = hucre === 'bitki'
    ? (ortam === 'hipotonik' ? 'turgor artar' : ortam === 'hipertonik' ? 'plazmoliz gelişir' : 'denge')
    : (ortam === 'hipotonik' ? (hacim > 1.38 ? 'lizis riski' : 'şişiyor') : ortam === 'hipertonik' ? 'büzülüyor' : 'denge')
  return { hacim, durum, suYonu: yon > 0 ? 'hücre içine' : yon < 0 ? 'hücre dışına' : 'iki yönde eşit' }
}

