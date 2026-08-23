import { supabase } from './supabaseClient'
import canlilarinOrtakOzellikleri from '../content/tests/biyoloji/canlilarin-ortak-ozellikleri'
import canlilarinTemelBilesenleri from '../content/tests/biyoloji/canlilarin-temel-bilesenleri'
import bitkiBiyolojisi from '../content/tests/biyoloji/bitki-biyolojisi'
import bolunmeDonguMitoz from '../content/tests/biyoloji/bolunme-1-dongu-mitoz.js'
import canlilarVeCevre from '../content/tests/biyoloji/canlilar-ve-cevre.js'
import canlilarinOrtakOzellikleriTemel from '../content/tests/biyoloji/canlilarin-ortak-ozellikleri-temel.js'
import canlilarinSiniflandirilmasiTemel from '../content/tests/biyoloji/canlilarin-siniflandirilmasi-temel.js'
import canlilarinTemelBilesenleriTemel from '../content/tests/biyoloji/canlilarin-temel-bilesenleri-temel.js'
import destekHareketSistemiTemel from '../content/tests/biyoloji/destek-hareket-sistemi-temel.js'
import destekHareketSistemi from '../content/tests/biyoloji/destek-hareket-sistemi.js'
import dolasimBagisiklikSistemi from '../content/tests/biyoloji/dolasim-bagisiklik-sistemi.js'
import duyuOrganlariTemel from '../content/tests/biyoloji/duyu-organlari-temel.js'
import duyuOrganlari from '../content/tests/biyoloji/duyu-organlari.js'
import { slugifyLibraryValue } from './libraryRoutes'
import { turkceTests } from '../content/tests/turkce/index.js'

// Geçiş döneminde mevcut kod tabanındaki testler kaybolmasın. Yeni testler
// `library_question_sets` tablosuna yazılır; bu sabit kaynak yalnızca eski
// pilot içeriğin uyumluluk köprüsüdür.
const BUNDLED_SETS = {
  ...Object.fromEntries(Object.entries(turkceTests).map(([k, v]) => [k, { tests: v }])),
  'sozcuk-turleri': { tests: [...(turkceTests['isimler']||[]), ...(turkceTests['sifatlar']||[]), ...(turkceTests['zarflar']||[]), ...(turkceTests['zamirler']||[]), ...(turkceTests['edat-baglac-unlem']||[])] },
  'fiilimsi': { tests: turkceTests['fiilimsiler'] || [] },
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
}

export function bundledQuestionSetsForTopic(topicName) {
  return BUNDLED_SETS[slugifyLibraryValue(topicName)]?.tests ?? []
}

export async function loadQuestionSet(testId, topicSlug) {
  const bundled = BUNDLED_SETS[topicSlug]?.tests?.find((test) => test.id === testId)
  if (bundled) return bundled

  const { data, error } = await supabase
    .from('library_question_sets')
    .select('id, title, description, difficulty, questions, question_count')
    .eq('id', testId)
    .eq('status', 'published')
    .maybeSingle()

  // Migration henüz uygulanmadıysa eski test deneyimi bozulmasın.
  if (error || !data) return null
  return { ...data, questions: data.questions ?? [] }
}
