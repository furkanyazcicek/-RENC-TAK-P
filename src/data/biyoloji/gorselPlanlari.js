const KOK = '/atlas-assets/biyoloji/imagegen/deney-sahneleri'

export const BOLGE_GORSEL_PLANLARI = Object.freeze({
  yasam: {
    anahtar: 'kontrollu-sera',
    src: `${KOK}/yasam-laboratuvari-v1.jpg`,
    odak: '50% 48%',
    ton: '#61d7b0',
  },
  molekul: {
    anahtar: 'aktif-merkez-limani',
    src: `${KOK}/molekul-laboratuvari-v1.jpg`,
    odak: '50% 48%',
    ton: '#ffb85c',
  },
  hucre: {
    anahtar: 'zar-kanyonu',
    src: `${KOK}/hucre-laboratuvari-v1.jpg`,
    odak: '50% 50%',
    ton: '#5fc8ff',
  },
  siniflandirma: {
    anahtar: 'canlilik-agaci',
    src: `${KOK}/siniflandirma-laboratuvari-v1.jpg`,
    odak: '50% 50%',
    ton: '#82dc78',
  },
  bolunme: {
    anahtar: 'bolunme-odasi',
    src: `${KOK}/bolunme-laboratuvari-v1.jpg`,
    odak: '50% 48%',
    ton: '#bb8cf2',
  },
  kalitim: {
    anahtar: 'kalitim-izleri',
    src: `${KOK}/kalitim-laboratuvari-v1.jpg`,
    odak: '50% 50%',
    ton: '#ee8bab',
  },
  enerji: {
    anahtar: 'enerji-koprusu',
    src: `${KOK}/enerji-laboratuvari-v1.jpg`,
    odak: '50% 50%',
    ton: '#ffd166',
  },
  ekosistem: {
    anahtar: 'ekosistem-havzasi',
    src: `${KOK}/ekosistem-laboratuvari-v1.jpg`,
    odak: '50% 50%',
    ton: '#39d2ce',
  },
})

export function bolgeGorselPlani(bolge) {
  return BOLGE_GORSEL_PLANLARI[bolge] ?? BOLGE_GORSEL_PLANLARI.yasam
}
