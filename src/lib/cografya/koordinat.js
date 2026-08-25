export function yerelSaatFarki(boylamA, boylamB) {
  const a = Number(boylamA)
  const b = Number(boylamB)
  if (!Number.isFinite(a) || !Number.isFinite(b) || Math.abs(a) > 180 || Math.abs(b) > 180) return null
  const farkDerece = b - a
  return {
    farkDerece,
    dakika: Math.abs(farkDerece) * 4,
    yon: farkDerece === 0 ? 'aynı' : farkDerece > 0 ? 'B doğuda ve ileride' : 'B batıda ve geride',
    isaretliDakika: farkDerece * 4,
  }
}

export function koordinatOzeti(enlem, boylam) {
  const lat = Number(enlem)
  const lon = Number(boylam)
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) return null
  return {
    yarimKure: `${lat === 0 ? 'Ekvator' : lat > 0 ? 'Kuzey' : 'Güney'} / ${lon === 0 ? 'Başlangıç meridyeni' : lon > 0 ? 'Doğu' : 'Batı'}`,
    kusak: Math.abs(lat) < 23.5 ? 'Tropikal kuşak' : Math.abs(lat) < 66.5 ? 'Orta kuşak' : 'Kutup kuşağı',
    mutlakEnlem: Math.abs(lat),
    mutlakBoylam: Math.abs(lon),
  }
}
