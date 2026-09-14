import canlilarinOrtakOzellikleri from './biyoloji/canlilarin-ortak-ozellikleri.js'
import canlilarinTemelBilesenleri from './biyoloji/canlilarin-temel-bilesenleri.js'
import bitkiBiyolojisi from './biyoloji/bitki-biyolojisi.js'
import bolunmeDonguMitoz from './biyoloji/bolunme-1-dongu-mitoz.js'
import canlilarVeCevre from './biyoloji/canlilar-ve-cevre.js'
import canlilarinOrtakOzellikleriTemel from './biyoloji/canlilarin-ortak-ozellikleri-temel.js'
import canlilarinSiniflandirilmasiTemel from './biyoloji/canlilarin-siniflandirilmasi-temel.js'
import canlilarinTemelBilesenleriTemel from './biyoloji/canlilarin-temel-bilesenleri-temel.js'
import destekHareketSistemiTemel from './biyoloji/destek-hareket-sistemi-temel.js'
import destekHareketSistemi from './biyoloji/destek-hareket-sistemi.js'
import dolasimBagisiklikSistemi from './biyoloji/dolasim-bagisiklik-sistemi.js'
import duyuOrganlariTemel from './biyoloji/duyu-organlari-temel.js'
import duyuOrganlari from './biyoloji/duyu-organlari.js'
import ekosistemEkolojisi from './biyoloji/ekosistem-ekolojisi.js'
import ekosistemEkolojisiTemel from './biyoloji/ekosistem-ekolojisi-temel.js'
import endokrinSistemTemel from './biyoloji/endokrin-sistem-temel.js'
import endokrinSistem from './biyoloji/endokrin-sistem.js'
import fotosentezKemosentez from './biyoloji/fotosentez-kemosentez.js'
import { turkceTests } from './turkce/index.js'
import { kimyaTests } from './kimya/index.js'

/**
 * Eski JS soru setlerinin tek paketli kayıt noktası.
 *
 * Soru kütüphanesi ile Faz 3 manifest üreticisi aynı nesneyi okur;
 * böylece kimlik/sayım için ikinci, elle tutulan bir katalog oluşmaz.
 */
export const LEGACY_BUNDLED_QUESTION_SETS = Object.freeze({
  ...Object.fromEntries(Object.entries(turkceTests).map(([key, value]) => [key, { tests: value }])),
  ...Object.fromEntries(Object.entries(kimyaTests).map(([key, value]) => [key, { tests: value }])),
  'kimyanin-temel-kanunlari': {
    tests: (kimyaTests['kimyanin-temel-kanunlari-ve-kimyasal-hesaplamalar'] || []).slice(0, 15),
  },
  'mol-kavrami': {
    tests: (kimyaTests['kimyanin-temel-kanunlari-ve-kimyasal-hesaplamalar'] || []).slice(15, 30),
  },
  'asit-baz-ve-tuz': { tests: kimyaTests['asitler-bazlar-ve-tuzlar'] || [] },
  'yapi-bilgisi': { tests: turkceTests['sozcuk-yapisi'] || [] },
  'sozcuk-turleri': {
    tests: [
      ...(turkceTests.isimler || []),
      ...(turkceTests.sifatlar || []),
      ...(turkceTests.zarflar || []),
      ...(turkceTests.zamirler || []),
      ...(turkceTests['edat-baglac-unlem'] || []),
    ],
  },
  fiilimsi: { tests: turkceTests.fiilimsiler || [] },
  'paragrafta-anlam-ve-yapi': { tests: turkceTests['paragrafta-anlam'] || [] },
  'paragrafta-dusunceyi-gelistirme-yollari': { tests: turkceTests['dusunceyi-gelistirme'] || [] },
  'canlilarin-ortak-ozellikleri': canlilarinOrtakOzellikleri,
  'canlilarin-temel-bilesenleri': canlilarinTemelBilesenleri,
  'bitki-biyolojisi': bitkiBiyolojisi,
  'bolunme-1-dongu-mitoz': { tests: bolunmeDonguMitoz },
  'canlilar-ve-cevre': { tests: canlilarVeCevre },
  'canlilarin-ortak-ozellikleri-temel': { tests: canlilarinOrtakOzellikleriTemel },
  'canlilarin-siniflandirilmasi-temel': { tests: canlilarinSiniflandirilmasiTemel },
  'canlilarin-temel-bilesenleri-temel': { tests: canlilarinTemelBilesenleriTemel },
  'destek-hareket-sistemi-temel': { tests: destekHareketSistemiTemel },
  'destek-hareket-sistemi': { tests: destekHareketSistemi },
  'dolasim-bagisiklik-sistemi': { tests: dolasimBagisiklikSistemi },
  'duyu-organlari-temel': { tests: duyuOrganlariTemel },
  'duyu-organlari': { tests: duyuOrganlari },
  'ekosistem-ekolojisi': { tests: ekosistemEkolojisi },
  'ekosistem-ekolojisi-temel': { tests: ekosistemEkolojisiTemel },
  'endokrin-sistem-temel': { tests: endokrinSistemTemel },
  'endokrin-sistem': { tests: endokrinSistem },
  'fotosentez-kemosentez': { tests: fotosentezKemosentez },
})

export function legacyBundledQuestionSetsForTopic(topicSlug) {
  return LEGACY_BUNDLED_QUESTION_SETS[topicSlug]?.tests ?? []
}
