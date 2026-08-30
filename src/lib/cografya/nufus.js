export function yogunluklar({ nufus, toplamAlan, tarimAlani, ciftciNufusu }) {
  const n = Number(nufus)
  const alan = Number(toplamAlan)
  const tarim = Number(tarimAlani)
  const ciftci = Number(ciftciNufusu)
  if (![n, alan, tarim, ciftci].every(Number.isFinite) || n < 0 || alan <= 0 || tarim <= 0 || ciftci < 0) return null
  return {
    aritmetik: n / alan,
    fizyolojik: n / tarim,
    tarimsal: ciftci / tarim,
  }
}

export function piramitOzeti({ genc, calisma, yasli }) {
  const degerler = [genc, calisma, yasli].map(Number)
  if (degerler.some((v) => !Number.isFinite(v) || v < 0) || degerler.reduce((a, b) => a + b, 0) <= 0) return null
  const [g, c, y] = degerler
  const toplam = g + c + y
  return {
    paylar: [g, c, y].map((v) => (v / toplam) * 100),
    bagimlilik: ((g + y) / Math.max(1, c)) * 100,
    tip: g > y * 2 ? 'genç ve hızlı büyüyen' : y > g ? 'yaşlanan' : 'dengeli/geçiş',
  }
}
