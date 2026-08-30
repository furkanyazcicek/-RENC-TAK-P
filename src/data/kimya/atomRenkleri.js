/**
 * Dr. Koç — Kimya Atlası / Atom Renkleri
 * CPK renk geleneğine dayanır (H beyaz, O kırmızı, N mavi, C gri…).
 * Koyu temada da okunur kalması için tonlar hafifçe koyulaştırıldı.
 */
export const ATOM_RENKLERI = {
  H: { dolgu: '#f4f5fb', kenar: '#b9bed3', yazi: '#1b1b33' },
  C: { dolgu: '#454b5c', kenar: '#2b3040', yazi: '#ffffff' },
  N: { dolgu: '#3b6ef0', kenar: '#254bb0', yazi: '#ffffff' },
  O: { dolgu: '#e2453c', kenar: '#a82a24', yazi: '#ffffff' },
  F: { dolgu: '#66d17a', kenar: '#3d9e52', yazi: '#12331a' },
  Cl: { dolgu: '#4fc07a', kenar: '#2f8a53', yazi: '#0f2b1a' },
  Br: { dolgu: '#a4522c', kenar: '#763515', yazi: '#ffffff' },
  I: { dolgu: '#8b5cf6', kenar: '#6532d8', yazi: '#ffffff' },
  S: { dolgu: '#f0c53b', kenar: '#bb9312', yazi: '#3a2c00' },
  P: { dolgu: '#f08a3b', kenar: '#c05f13', yazi: '#3a1a00' },
  B: { dolgu: '#f0a3a3', kenar: '#c26a6a', yazi: '#3a1010' },
  Si: { dolgu: '#c8a06a', kenar: '#96723f', yazi: '#2b1c05' },
  Na: { dolgu: '#7c5cf0', kenar: '#5333c9', yazi: '#ffffff' },
  K: { dolgu: '#8b46d6', kenar: '#6521ad', yazi: '#ffffff' },
  Li: { dolgu: '#9d7bf5', kenar: '#6f4ad0', yazi: '#ffffff' },
  Mg: { dolgu: '#3fbf8f', kenar: '#238f68', yazi: '#04291d' },
  Ca: { dolgu: '#4fae86', kenar: '#2c7f5e', yazi: '#ffffff' },
  Al: { dolgu: '#a0a6b8', kenar: '#737a8f', yazi: '#1b1b33' },
  Fe: { dolgu: '#d2703a', kenar: '#a04a1a', yazi: '#ffffff' },
  Cu: { dolgu: '#c97f3a', kenar: '#94551a', yazi: '#ffffff' },
  Zn: { dolgu: '#8ea0b5', kenar: '#61728a', yazi: '#ffffff' },
  Ag: { dolgu: '#c0c6d4', kenar: '#8f97a9', yazi: '#1b1b33' },
  Ba: { dolgu: '#3fa06a', kenar: '#237045', yazi: '#ffffff' },
  He: { dolgu: '#ec86c8', kenar: '#c2569c', yazi: '#3a0d29' },
  Ne: { dolgu: '#f2a0d8', kenar: '#c46aa8', yazi: '#3a0d29' },
  Ar: { dolgu: '#e585c9', kenar: '#b45699', yazi: '#3a0d29' },
}

export function atomRengi(sembol) {
  return ATOM_RENKLERI[sembol] ?? { dolgu: '#9aa2b8', kenar: '#6b7288', yazi: '#ffffff' }
}

/** Çizimde kullanılan görsel yarıçap (van der Waals oranlarına yakın, sadeleştirilmiş). */
const YARICAP = {
  H: 0.42, He: 0.44, Li: 0.9, Be: 0.72, B: 0.66, C: 0.62, N: 0.58, O: 0.56, F: 0.52,
  Ne: 0.5, Na: 0.98, Mg: 0.88, Al: 0.8, Si: 0.76, P: 0.72, S: 0.7, Cl: 0.68, Ar: 0.62,
  K: 1.1, Ca: 1.0, Fe: 0.82, Cu: 0.8, Zn: 0.78, Br: 0.76, Ag: 0.86, I: 0.86, Ba: 1.08,
}

export function atomYaricapi(sembol) {
  return YARICAP[sembol] ?? 0.72
}
