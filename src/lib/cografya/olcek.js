export function gercekUzaklikKm(haritaCm, payda) {
  const cm = Number(haritaCm)
  const p = Number(payda)
  if (!Number.isFinite(cm) || !Number.isFinite(p) || cm < 0 || p <= 0) return null
  return (cm * p) / 100000
}

export function haritaUzakligiCm(gercekKm, payda) {
  const km = Number(gercekKm)
  const p = Number(payda)
  if (!Number.isFinite(km) || !Number.isFinite(p) || km < 0 || p <= 0) return null
  return (km * 100000) / p
}

export function olcekOzeti(payda) {
  const p = Number(payda)
  if (!Number.isFinite(p) || p <= 0) return null
  const sinif = p <= 200000 ? 'büyük ölçek' : p <= 1000000 ? 'orta ölçek' : 'küçük ölçek'
  return {
    sinif,
    alan: p <= 200000 ? 'dar alan' : p <= 1000000 ? 'orta genişlikte alan' : 'geniş alan',
    ayrinti: p <= 200000 ? 'yüksek ayrıntı' : p <= 1000000 ? 'orta ayrıntı' : 'az ayrıntı',
    genellestirme: p <= 200000 ? 'az' : p <= 1000000 ? 'orta' : 'fazla',
  }
}
