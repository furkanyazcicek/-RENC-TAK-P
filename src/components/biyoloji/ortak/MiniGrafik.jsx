export default function MiniGrafik({ noktalar, x = 'x', y = 'y', etiket = 'Veri grafiği', renk = '#45d6ad', ust = null }) {
  const veri = noktalar?.length ? noktalar : [{ [x]: 0, [y]: 0 }]
  const maxY = ust ?? Math.max(1, ...veri.map((n) => Number(n[y]) || 0))
  const yol = veri.map((n, i) => `${i ? 'L' : 'M'} ${(i / Math.max(1, veri.length - 1)) * 280 + 10} ${110 - ((Number(n[y]) || 0) / maxY) * 92}`).join(' ')
  return <svg className="ba-mini-grafik" viewBox="0 0 300 125" role="img" aria-label={etiket}><title>{etiket}</title><desc>Değişkenlere göre hesaplanan temsili veri eğrisi.</desc><path className="izgara" d="M10 18H290M10 64H290M10 110H290M10 18V110M150 18V110M290 18V110"/><path d={yol} fill="none" stroke={renk} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />{veri.map((n, i) => <circle key={`${n[x]}-${i}`} cx={(i / Math.max(1, veri.length - 1)) * 280 + 10} cy={110 - ((Number(n[y]) || 0) / maxY) * 92} r="3" fill={renk}><title>{`${n[x]}: ${Number(n[y]).toFixed(1)}`}</title></circle>)}</svg>
}

