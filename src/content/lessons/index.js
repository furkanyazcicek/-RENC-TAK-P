/**
 * DERS İÇERİĞİ KAYIT DEFTERİ
 * ==================================================================
 *
 * Bütün yayınlanabilir ders içerikleri burada toplanır. Tek kaynak
 * ilkesi: aynı ders hem önizleme sayfasında, hem şema doğrulamasında,
 * hem de veritabanına yazan betikte BU dosyadan okunur. İçeriği bir de
 * SQL INSERT'ünün içine kopyalasaydık iki kaynak oluşur ve kaçınılmaz
 * olarak birbirinden ayrılırlardı.
 *
 * YENİ DERS EKLEME
 *   1. `src/content/lessons/<ders>/<konu-slug>.js` dosyasını yaz.
 *   2. Aşağıdaki listeye ekle.
 *   3. `node scripts/test-lesson-content.mjs` ile doğrula.
 *   4. `node scripts/seed-lessons.mjs` ile veritabanına yaz.
 *
 * DERS MODÜLÜ SÖZLEŞMESİ
 *   slug        benzersiz kısa ad (dosya adıyla aynı tutun)
 *   placement   { examType, subject, topic } — kütüphanedeki yeri.
 *               `topic` MEVCUT bir konu adıyla BİREBİR aynı olmalı;
 *               aksi hâlde seed betiği ağaca yeni bir konu ekler ve
 *               müfredat ağacı sessizce bozulur.
 *   order       aynı konu içindeki sıra (küçük olan önce)
 *   learningMode `foundation` (önce temelini kur) veya `interactive`
 *               (mevcut görsel/sesli pekiştirme). Belirtilmezse interactive.
 *   partLabel   öğrenciye görünen kısa bölüm etiketi (isteğe bağlı)
 *   title       ders başlığı
 *   subtitle    öğretmenin vaadi — tek cümle
 *   goldStandard  kalite referansı mı
 *   document    `src/lib/lesson/schema.js` şemasına uygun belge
 *
 * SIRALAMA HAKKINDA
 * Buradaki dizi sırası ÖNEMLİ DEĞİLDİR. Kütüphanedeki sırayı
 * `placement.topic` + `order` belirler; öğrenme sırasını ise
 * `src/lib/curriculum/graph.js` yönetir. Üçü ayrı işlerdir.
 */

import bolunmeDonguMitoz from './biyoloji/bolunme-1-dongu-mitoz.js'
import bitkiBiyolojisi from './biyoloji/bitki-biyolojisi.js'
import bitkiBiyolojisiTemel from './biyoloji/bitki-biyolojisi-temel.js'
import canlilarVeCevre from './biyoloji/canlilar-ve-cevre.js'
import canlilarVeCevreTemel from './biyoloji/canlilar-ve-cevre-temel.js'
import canlilarinOrtakOzellikleri from './biyoloji/canlilarin-ortak-ozellikleri.js'
import canlilarinOrtakOzellikleriTemel from './biyoloji/canlilarin-ortak-ozellikleri-temel.js'
import canlilarinTemelBilesenleriTemel from './biyoloji/canlilarin-temel-bilesenleri-temel.js'
import canlilarinSiniflandirilmasiTemel from './biyoloji/canlilarin-siniflandirilmasi-temel.js'
import duyuOrganlari from './biyoloji/duyu-organlari.js'
import duyuOrganlariTemel from './biyoloji/duyu-organlari-temel.js'
import destekHareketSistemi from './biyoloji/destek-hareket-sistemi.js'
import destekHareketSistemiTemel from './biyoloji/destek-hareket-sistemi-temel.js'
import dolasimBagisiklikSistemi from './biyoloji/dolasim-bagisiklik-sistemi.js'
import dolasimBagisiklikSistemiTemel from './biyoloji/dolasim-bagisiklik-sistemi-temel.js'
import ekosistemEkolojisi from './biyoloji/ekosistem-ekolojisi.js'
import ekosistemEkolojisiTemel from './biyoloji/ekosistem-ekolojisi-temel.js'
import endokrinSistem from './biyoloji/endokrin-sistem.js'
import endokrinSistemTemel from './biyoloji/endokrin-sistem-temel.js'
import fotosentezKemosentez from './biyoloji/fotosentez-kemosentez.js'
import fotosentezKemosentezTemel from './biyoloji/fotosentez-kemosentez-temel.js'
import hucreAktifTasima from './biyoloji/hucre-3-aktif-toplu-tasima.js'
import hucreTemel from './biyoloji/hucre-temel.js'
import hucreCekirdek from './biyoloji/hucre-5-cekirdek-hucre-tipleri.js'
import hucreBolunmeleriTemel from './biyoloji/hucre-bolunmeleri-temel.js'
import hucreOrganeller from './biyoloji/hucre-4-organeller.js'
import hucreOsmoz from './biyoloji/hucre-2-osmoz.js'
import hucreZarPasifTasima from './biyoloji/hucre-1-zar-pasif-tasima.js'
import hucreselSolunum from './biyoloji/hucresel-solunum.js'
import gendenProteine from './biyoloji/genden-proteine.js'
import gendenProteineTemel from './biyoloji/genden-proteine-temel.js'
import kalitimTemel from './biyoloji/kalitim-temel.js'
import kalitim from './biyoloji/kalitim.js'
import komunitePopulasyonEkolojisi from './biyoloji/komunite-populasyon-ekolojisi.js'
import komunitePopulasyonEkolojisiTemel from './biyoloji/komunite-populasyon-ekolojisi-temel.js'
import siniflandirma from './biyoloji/siniflandirma.js'
import sinirSistemiTemel from './biyoloji/sinir-sistemi-temel.js'
import sinirSistemi from './biyoloji/sinir-sistemi.js'
import sindirimSistemi from './biyoloji/sindirim-sistemi.js'
import sindirimSistemiTemel from './biyoloji/sindirim-sistemi-temel.js'
import solunumSistemi from './biyoloji/solunum-sistemi.js'
import solunumSistemiTemel from './biyoloji/solunum-sistemi-temel.js'
import temelBilesenlerInorganik from './biyoloji/temel-bilesenler-1-inorganik.js'
import temelBilesenlerKarbonhidratLipit from './biyoloji/temel-bilesenler-2-karbonhidrat-lipit.js'
import temelBilesenlerNukleikAsit from './biyoloji/temel-bilesenler-4-nukleik-asit-vitamin-atp.js'
import temelBilesenlerProteinEnzim from './biyoloji/temel-bilesenler-3-protein-enzim.js'
import urinerSistem from './biyoloji/uriner-sistem.js'
import urinerSistemTemel from './biyoloji/uriner-sistem-temel.js'
import uremeSistemiEmbriyonikGelisim from './biyoloji/ureme-sistemi-embriyonik-gelisim.js'
import uremeSistemiEmbriyonikGelisimTemel from './biyoloji/ureme-sistemi-embriyonik-gelisim-temel.js'
import { philosophyLessons } from './felsefe/index.js'
import fizikBilimineGiris from './fizik/fizik-bilimine-giris.js'
import maddeVeOzellikleri from './fizik/madde-ve-ozellikleri.js'
import sivilarinKaldirmaKuvveti from './fizik/sivilarin-kaldirma-kuvveti.js'
import basinc from './fizik/basinc.js'
import isiSicaklikGenlesme from './fizik/isi-sicaklik-genlesme.js'
import hareketVeKuvvet from './fizik/hareket-ve-kuvvet.js'
import isGucEnerji from './fizik/is-guc-enerji.js'
import elektrostatik from './fizik/elektrostatik.js'
import elektrikDevreleri from './fizik/elektrik-devreleri.js'
import manyetizma from './fizik/manyetizma.js'
import dalgalar from './fizik/dalgalar.js'
import { TYT_HISTORY_LESSONS } from './tarih/tyt-tarih-kutuphanesi.js'
import { TYT_RELIGION_LESSONS } from './din-kulturu/topics.js'
import { TURKISH_LESSONS } from './turkce/catalog.js'
import kimyaBilimi from './kimya/kimya-bilimi.js'
import atomVePeriyodikSistem from './kimya/atom-ve-periyodik-sistem.js'
import kimyasalTurlerArasiEtkilesimler from './kimya/kimyasal-turler-arasi-etkilesimler.js'
import maddeninHalleri from './kimya/maddenin-halleri.js'
import dogaVeKimya from './kimya/doga-ve-kimya.js'
import dogaVeInsan from './cografya/doga-ve-insan.js'

export const LESSONS = [
  ...philosophyLessons,
  fizikBilimineGiris,
  maddeVeOzellikleri,
  sivilarinKaldirmaKuvveti,
  basinc,
  isiSicaklikGenlesme,
  hareketVeKuvvet,
  isGucEnerji,
  elektrostatik,
  elektrikDevreleri,
  manyetizma,
  dalgalar,
  ...TURKISH_LESSONS,
  ...TYT_RELIGION_LESSONS,
  kimyaBilimi,
  atomVePeriyodikSistem,
  kimyasalTurlerArasiEtkilesimler,
  maddeninHalleri,
  dogaVeKimya,
  dogaVeInsan,
  canlilarinOrtakOzellikleriTemel,
  canlilarinOrtakOzellikleri,
  canlilarinTemelBilesenleriTemel,
  temelBilesenlerInorganik,
  temelBilesenlerKarbonhidratLipit,
  temelBilesenlerProteinEnzim,
  temelBilesenlerNukleikAsit,
  hucreTemel,
  hucreZarPasifTasima,
  hucreOsmoz,
  hucreAktifTasima,
  hucreOrganeller,
  hucreCekirdek,
  canlilarinSiniflandirilmasiTemel,
  siniflandirma,
  hucreBolunmeleriTemel,
  bolunmeDonguMitoz,
  fotosentezKemosentezTemel,
  fotosentezKemosentez,
  hucreselSolunum,
  bitkiBiyolojisiTemel,
  bitkiBiyolojisi,
  canlilarVeCevreTemel,
  canlilarVeCevre,
  kalitimTemel,
  kalitim,
  ekosistemEkolojisiTemel,
  ekosistemEkolojisi,
  sinirSistemiTemel,
  sinirSistemi,
  endokrinSistemTemel,
  endokrinSistem,
  duyuOrganlariTemel,
  duyuOrganlari,
  destekHareketSistemiTemel,
  destekHareketSistemi,
  sindirimSistemiTemel,
  sindirimSistemi,
  dolasimBagisiklikSistemiTemel,
  dolasimBagisiklikSistemi,
  solunumSistemiTemel,
  solunumSistemi,
  urinerSistemTemel,
  urinerSistem,
  uremeSistemiEmbriyonikGelisimTemel,
  uremeSistemiEmbriyonikGelisim,
  gendenProteineTemel,
  gendenProteine,
  komunitePopulasyonEkolojisiTemel,
  komunitePopulasyonEkolojisi,
  ...TYT_HISTORY_LESSONS,
]

/** Belirli bir dersi slug ile getirir. */
export function lessonBySlug(slug) {
  return LESSONS.find((lesson) => lesson.slug === slug) ?? null
}

/** Kütüphane yerleşimine göre gruplar — üretim durumunu görmek için. */
export function lessonsByPlacement() {
  const map = new Map()
  LESSONS.forEach((lesson) => {
    const key = `${lesson.placement.examType} · ${lesson.placement.subject} · ${lesson.placement.topic}`
    const list = map.get(key) ?? []
    list.push(lesson)
    map.set(key, list)
  })
  map.forEach((list) => list.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)))
  return map
}
