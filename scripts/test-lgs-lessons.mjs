/**
 * LGS İÇERİK KALİTE KAPISI
 * ==================================================================
 *
 *   npm run test:lgs
 *
 * Bu kapı yalnız LGS içeriklerini denetler; TYT/AYT/KPSS içeriklerine
 * hiç dokunmaz. Genel içerik denetimi (`npm run test:lesson-content`)
 * ayrı çalışır ve bu betik onun yerine geçmez.
 *
 * NE DENETLENİR?
 *  1. Tekrarlanan ders slug'ı, bölüm kimliği ve blok kimliği yok.
 *  2. Bütün ders belgeleri şemadan geçiyor.
 *  3. `placement.examType` LGS, `subject` resmî ders adı.
 *  4. `placement.topic` kütüphane konu ağacında tanımlı.
 *  5. LGS notlarında "TYT" ve "ÖSYM" ibaresi kalmamış.
 *  6. Her ders kazanım künyesi taşıyor ve kodlar resmî listede var.
 *  7. Her ölçülebilir kazanım en az bir derse bağlı (kapsam raporu).
 *  8. Kapsam dışı bırakılan her kazanımın gerekçesi yazılı.
 *  9. Her derste kazanım, ön koşul, çıktı, açıklama, uygulama, hata,
 *     etkin kontrol ve özet blokları bulunuyor.
 * 10. Ders sırası doğru: aynı konu içinde `order` tekrar etmiyor.
 * 11. Derinlik uyarıları Gold Standard için sert hatadır.
 * 12. Mini soruların cevap indeksi ve açıklaması tutarlı.
 * 13. Ders sırası kapısı: Türkçe bitmeden Fen, Fen bitmeden İnkılap
 *     "tamamlandı" sayılamaz.
 * 14. Görsel varlıklar gerçekten mevcut.
 */

import { existsSync } from 'node:fs'
import { LESSONS } from '../src/content/lessons/index.js'
import { LGS_LESSONS } from '../src/content/lessons/lgs/index.js'
import { auditLessonDepth, validateLessonDocument } from '../src/lib/lesson/schema.js'
import { resolveFigure } from '../src/components/lessons/figures/registry.js'
import {
  LGS_HEDEF,
  LGS_KAZANIMLAR,
  LGS_KONU_AGACI,
  LGS_SORU_SAYILARI,
  LGS_URETIM_SIRASI,
  konuTanimli,
  konuVeritabaninaEklenmeliMi,
  olculebilirKazanimlar,
} from '../src/content/lessons/lgs/mufredat.js'
import { FEN_KONU_KAVRAMLAR, FEN_RESMI_KAZANIMLAR } from '../src/content/lessons/lgs/fen/resmiProgram.js'
import { INKILAP_RESMI_KAZANIMLAR } from '../src/content/lessons/lgs/inkilap/resmiProgram.js'

let hata = 0
let uyari = 0

const hataVer = (mesaj) => {
  console.error(`  ✗ ${mesaj}`)
  hata += 1
}
const uyariVer = (mesaj) => {
  console.log(`  ⚠ ${mesaj}`)
  uyari += 1
}

console.log('\n=== DrKoç LGS içerik denetimi ===')
console.log(`Hedef: ${LGS_HEDEF.sinavYili} LGS · Kohort: ${LGS_HEDEF.kohort}`)
console.log(`Program dayanağı: ${LGS_HEDEF.programDayanagi}`)
console.log(`Kılavuz dayanağı: ${LGS_HEDEF.kilavuzDayanagi}`)
console.log(`Son doğrulama: ${LGS_HEDEF.sonDogrulama}\n`)

/* ------------------------------------------------------------------
   0) Müfredat kayıt defterinin kendi tutarlılığı
   ------------------------------------------------------------------ */
console.log('▸ Müfredat kayıt defteri')
for (const ders of LGS_URETIM_SIRASI) {
  const kazanimlar = LGS_KAZANIMLAR[ders]
  if (!Array.isArray(kazanimlar) || !kazanimlar.length) {
    hataVer(`${ders} için kazanım listesi boş.`)
    continue
  }
  const kodlar = kazanimlar.map((k) => k.kod)
  const tekrar = kodlar.filter((kod, index) => kodlar.indexOf(kod) !== index)
  if (tekrar.length) hataVer(`${ders} kazanım listesinde tekrar eden kod: ${[...new Set(tekrar)].join(', ')}`)

  kazanimlar.forEach((k) => {
    if (!k.metin || k.metin.length < 10) hataVer(`${k.kod} kazanım metni eksik.`)
    if (k.kapsam !== 'olculur' && k.kapsam !== 'disi') hataVer(`${k.kod} kapsam değeri geçersiz: ${k.kapsam}`)
    if (k.kapsam === 'disi' && !k.gerekce) {
      hataVer(`${k.kod} kapsam dışı bırakılmış ama gerekçesi yazılmamış.`)
    }
  })

  if (!LGS_KONU_AGACI[ders]?.length) hataVer(`${ders} için konu ağacı tanımlı değil.`)
  if (!LGS_SORU_SAYILARI[ders]) hataVer(`${ders} için resmî soru sayısı tanımlı değil.`)
}
console.log(`  ${LGS_URETIM_SIRASI.length} ders · kazanım listesi ve konu ağacı denetlendi\n`)

/* ------------------------------------------------------------------
   1) Ders bazlı denetim
   ------------------------------------------------------------------ */
const gorulenSluglar = new Set()
const gorulenBolumler = new Set()
const gorulenBloklar = new Set()
/** ders -> Set(kazanım kodu) */
const kapsananKazanimlar = new Map(LGS_URETIM_SIRASI.map((ders) => [ders, new Set()]))
/** ders -> Map(konu -> Set(order)) */
const konuSiralari = new Map()

const YASAK_IFADELER = [
  { desen: /\bÖSYM\b/, ad: 'ÖSYM' },
  { desen: /\bTYT\b/, ad: 'TYT' },
  { desen: /\bAYT\b/, ad: 'AYT' },
]

const GEREKLI_BLOK_ROLLERI = [
  { rol: 'explain', mesaj: 'anlatım (prose) bloğu' },
  { rol: 'concept', mesaj: 'kavram tanımı' },
  { rol: 'why', mesaj: '“neden böyle?” açıklaması' },
  { rol: 'mechanism', mesaj: 'adım adım süreç veya karar akışı' },
  { rol: 'visual', mesaj: 'görsel/şema bloğu' },
  { rol: 'example', mesaj: 'çözümlü örnek' },
  { rol: 'trap', mesaj: 'sık yapılan hata uyarısı' },
  { rol: 'exam', mesaj: 'sınavda nasıl ölçüldüğü' },
  { rol: 'active', mesaj: 'öğrenciye bir şey yaptıran durak (dur-düşün veya mini soru)' },
  { rol: 'summary', mesaj: 'kapanış özeti' },
  { rol: 'next', mesaj: 'sonraki adım önerisi' },
]

const BLOK_ROLU = {
  prose: 'explain', concept: 'concept', why: 'why', mechanism: 'mechanism', process: 'mechanism',
  decision_tree: 'mechanism', cause_effect: 'mechanism', argument_flow: 'mechanism',
  teacher_note: 'teacher', trap: 'trap', exam: 'exam', question_clue: 'exam', osym_insight: 'exam',
  philosopher: 'concept', connection: 'connection', memory: 'memory',
  figure: 'visual', concept_map: 'visual', timeline: 'visual', historical_map: 'visual',
  sentence_analysis: 'visual', formula: 'formula', table: 'data', compare: 'compare',
  period_summary: 'summary', historical_figures: 'people', example: 'example',
  worked_example: 'example', checkpoint: 'active', quiz: 'active', osym_simulation: 'active',
  summary: 'summary', next_step: 'next', audio_script: 'audio',
}

function metinleriTopla(deger, toplayici) {
  if (typeof deger === 'string') toplayici.push(deger)
  else if (Array.isArray(deger)) deger.forEach((item) => metinleriTopla(item, toplayici))
  else if (deger && typeof deger === 'object') Object.values(deger).forEach((item) => metinleriTopla(item, toplayici))
}

for (const ders of LGS_LESSONS) {
  const konu = ders.placement?.topic ?? '—'
  console.log(`▸ ${ders.title}`)
  console.log(`  ${ders.placement?.examType} · ${ders.placement?.subject} · ${konu} · sıra ${ders.order ?? 0}`)

  /* --- slug tekilliği --- */
  if (gorulenSluglar.has(ders.slug)) hataVer(`slug tekrar ediyor: ${ders.slug}`)
  gorulenSluglar.add(ders.slug)
  if (!ders.slug.startsWith('lgs-')) {
    hataVer(`LGS dersi slug'ı "lgs-" ile başlamalı: ${ders.slug}`)
  }

  /* --- yerleşim --- */
  if (ders.placement?.examType !== 'LGS') hataVer(`placement.examType "LGS" olmalı, bulunan: ${ders.placement?.examType}`)
  const dersAdi = ders.placement?.subject
  if (!LGS_URETIM_SIRASI.includes(dersAdi)) {
    hataVer(`placement.subject resmî LGS ders adlarından biri olmalı, bulunan: ${dersAdi}`)
  } else if (!konuTanimli(dersAdi, konu)) {
    hataVer(`placement.topic kütüphane konu ağacında yok: "${konu}" (${dersAdi})`)
  } else if (konuVeritabaninaEklenmeliMi(dersAdi, konu)) {
    uyariVer(`"${konu}" konusu henüz canlı veritabanında yok; seed betiği bu dersi atlar. Onay bekliyor (supabase/migration_lgs_konu_tamamlama.sql).`)
  }

  /* --- ders sırası tekilliği --- */
  if (!konuSiralari.has(dersAdi)) konuSiralari.set(dersAdi, new Map())
  const konuHaritasi = konuSiralari.get(dersAdi)
  if (!konuHaritasi.has(konu)) konuHaritasi.set(konu, new Set())
  const siralar = konuHaritasi.get(konu)
  const sira = ders.order ?? 0
  if (siralar.has(sira)) hataVer(`"${konu}" konusunda ${sira}. sıra iki kez kullanılmış.`)
  siralar.add(sira)

  /* --- şema --- */
  const { document, errors } = validateLessonDocument(ders.document)
  errors.forEach((error) => hataVer(error))

  /* --- kazanım künyesi --- */
  const kazanimKodlari = Array.isArray(ders.kazanimlar) ? ders.kazanimlar : []
  if (!kazanimKodlari.length) {
    hataVer('ders hiçbir resmî kazanıma bağlanmamış (`kazanimlar` boş).')
  }
  const resmiKodlar = new Set((LGS_KAZANIMLAR[dersAdi] ?? []).map((k) => k.kod))
  kazanimKodlari.forEach((kod) => {
    if (!resmiKodlar.has(kod)) hataVer(`tanımsız kazanım kodu: ${kod}`)
    else kapsananKazanimlar.get(dersAdi)?.add(kod)
  })

  /* --- ön koşul ve çıktılar --- */
  if (!document.prerequisites.length) hataVer('ön koşul tanımlanmamış.')
  if (!document.outcomes.length) hataVer('“bu dersin sonunda yapabileceklerin” tanımlanmamış.')
  if (!document.estimated_minutes) hataVer('tahmini çalışma süresi yok.')

  /* --- bölüm ve blok kimlikleri + roller --- */
  const roller = new Set()
  const bloklar = []
  document.sections.forEach((section) => {
    const bolumAnahtari = `${ders.slug}::${section.id}`
    if (gorulenBolumler.has(bolumAnahtari)) hataVer(`bölüm kimliği tekrar ediyor: ${section.id}`)
    gorulenBolumler.add(bolumAnahtari)
    if (gorulenBolumler.has(section.id)) hataVer(`bölüm kimliği başka bir derste de kullanılmış: ${section.id}`)
    gorulenBolumler.add(section.id)

    section.blocks.forEach((block) => {
      if (gorulenBloklar.has(block.id)) hataVer(`blok kimliği tekrar ediyor: ${block.id}`)
      gorulenBloklar.add(block.id)
      const rol = BLOK_ROLU[block.type]
      if (!rol) hataVer(`tanınmayan blok tipi: ${block.type}`)
      else roller.add(rol)
      bloklar.push(block)
    })
  })

  GEREKLI_BLOK_ROLLERI.forEach(({ rol, mesaj }) => {
    if (!roller.has(rol)) hataVer(`öğrenme omurgasında eksik: ${mesaj}`)
  })

  /* --- yasak bağlam ifadeleri --- */
  const metinler = []
  metinleriTopla(document, metinler)
  metinleriTopla(ders.title, metinler)
  metinleriTopla(ders.subtitle, metinler)
  YASAK_IFADELER.forEach(({ desen, ad }) => {
    const bulunan = metinler.find((metin) => desen.test(metin))
    if (bulunan) {
      hataVer(`LGS içeriğinde "${ad}" ibaresi geçiyor: “${bulunan.slice(0, 90)}…”`)
    }
  })

  /* --- mini soruların tutarlılığı --- */
  bloklar.filter((block) => block.type === 'quiz').forEach((quiz) => {
    if (quiz.options.length < 3) hataVer(`mini soruda en az üç seçenek olmalı: ${quiz.id}`)
    if (!Number.isInteger(quiz.answer_index) || quiz.answer_index < 0 || quiz.answer_index >= quiz.options.length) {
      hataVer(`mini sorunun cevap indeksi seçenek aralığında değil: ${quiz.id}`)
    }
    if (!quiz.explanation || quiz.explanation.length < 40) {
      hataVer(`mini sorunun çözüm açıklaması yok veya çok kısa: ${quiz.id}`)
    }
    if (new Set(quiz.options).size !== quiz.options.length) {
      hataVer(`mini soruda aynı seçenek iki kez yazılmış: ${quiz.id}`)
    }
  })

  bloklar.filter((block) => block.type === 'osym_simulation').forEach((sim) => {
    if (sim.exam !== 'LGS') hataVer(`simülasyon bloğunun sınav bağlamı LGS olmalı: ${sim.id}`)
    if (sim.options.length < 4) hataVer(`simülasyonda en az dört seçenek olmalı: ${sim.id}`)
    if (!Number.isInteger(sim.answer_index) || sim.answer_index < 0 || sim.answer_index >= sim.options.length) {
      hataVer(`simülasyonun cevap indeksi seçenek aralığında değil: ${sim.id}`)
    }
    const gerekceSiz = sim.options.filter((option) => !option.explanation || option.explanation.length < 30)
    if (gerekceSiz.length) {
      hataVer(`simülasyonda ${gerekceSiz.length} seçeneğin çeldirici gerekçesi eksik: ${sim.id}`)
    }
    if (!sim.stem_analysis) hataVer(`simülasyonda soru kökü çözümlemesi yok: ${sim.id}`)
    if (!sim.critical_point) hataVer(`simülasyonda kritik nokta açıklaması yok: ${sim.id}`)
  })

  bloklar.filter((block) => block.type === 'checkpoint').forEach((cp) => {
    if (!cp.answer || cp.answer.length < 30) hataVer(`dur-düşün durağının cevabı çok kısa: ${cp.id}`)
  })

  bloklar.filter((block) => block.type === 'osym_insight').forEach((insight) => {
    if (insight.exam !== 'LGS') hataVer(`ölçme bloğunun sınav bağlamı LGS olmalı: ${insight.id}`)
  })

  /* --- görseller gerçekten var mı --- */
  bloklar.filter((block) => block.type === 'figure').forEach((figure) => {
    if (figure.image_url) {
      const dosya = new URL(`../public${figure.image_url}`, import.meta.url)
      if (!existsSync(dosya)) hataVer(`bulunamayan ders görseli: ${figure.image_url}`)
      return
    }
    if (!figure.kind) {
      hataVer(`şeklin ne şeması ne görseli var: ${figure.title || figure.id}`)
      return
    }
    if (!resolveFigure(figure.kind)) hataVer(`kayıtlı olmayan şema: ${figure.kind}`)
  })

  /* --- derinlik --- */
  const denetim = auditLessonDepth(document, { profile: ders.qualityProfile })
  console.log(
    `  ${denetim.words.toLocaleString('tr-TR')} kelime · ${denetim.sections} bölüm · ${bloklar.length} blok · puan ${denetim.score}/100`
  )
  if (denetim.warnings.length) {
    if (ders.goldStandard) {
      denetim.warnings.forEach((w) => hataVer(`Gold Standard derinlik kapısı: ${w}`))
    } else {
      denetim.warnings.forEach((w) => uyariVer(w))
    }
  }
  if (ders.goldStandard) console.log('  ★ Gold Standard')
  console.log('')
}

/* ------------------------------------------------------------------
   2) Kazanım kapsama raporu
   ------------------------------------------------------------------ */
console.log('--- Kazanım kapsaması ---')
const dersDurumu = new Map()

for (const ders of LGS_URETIM_SIRASI) {
  const olculebilir = olculebilirKazanimlar(ders)
  const kapsanan = kapsananKazanimlar.get(ders) ?? new Set()
  const eksik = olculebilir.filter((kod) => !kapsanan.has(kod))
  const oran = olculebilir.length ? Math.round(((olculebilir.length - eksik.length) / olculebilir.length) * 100) : 0
  const tamam = eksik.length === 0 && olculebilir.length > 0

  dersDurumu.set(ders, { tamam, eksik, olculebilir: olculebilir.length, oran })
  console.log(
    `${tamam ? '✅' : '◻︎'} ${ders}: ${olculebilir.length - eksik.length}/${olculebilir.length} ölçülebilir kazanım bağlandı (%${oran})`
  )
  if (eksik.length && eksik.length <= 12) {
    console.log(`     sıradaki: ${eksik.slice(0, 6).join(', ')}${eksik.length > 6 ? ' …' : ''}`)
  } else if (eksik.length) {
    console.log(`     sıradaki: ${eksik.slice(0, 6).join(', ')} … (+${eksik.length - 6})`)
  }
}

/* ------------------------------------------------------------------
   3) ÜRETİM SIRASI KAPISI
   Türkçe bitmeden Fen, Fen bitmeden İnkılap "tamamlandı" sayılamaz.
   ------------------------------------------------------------------ */
console.log('\n--- Üretim sırası kapısı ---')
for (let index = 1; index < LGS_URETIM_SIRASI.length; index += 1) {
  const oncekiDers = LGS_URETIM_SIRASI[index - 1]
  const buDers = LGS_URETIM_SIRASI[index]
  const onceki = dersDurumu.get(oncekiDers)
  const bu = dersDurumu.get(buDers)
  if (!onceki.tamam && bu && bu.olculebilir - bu.eksik.length > 0) {
    hataVer(
      `${oncekiDers} tamamlanmadan ${buDers} üretimine geçilmiş. ` +
        `${oncekiDers} eksik kazanım: ${onceki.eksik.length}.`
    )
  }
}
const siradakiDers = LGS_URETIM_SIRASI.find((ders) => !dersDurumu.get(ders).tamam) ?? null
if (siradakiDers) {
  const durum = dersDurumu.get(siradakiDers)
  console.log(`Aktif ders: ${siradakiDers} · kalan kazanım: ${durum.eksik.length}`)
  console.log(`Sıradaki kesin kazanım: ${durum.eksik[0] ?? '—'}`)
} else {
  console.log('Üç dersin de ölçülebilir kazanımları kapsandı.')
}

/* ------------------------------------------------------------------
   4) Kütüphane ağacına eklenmesi gereken konular
   ------------------------------------------------------------------ */
const bekleyenKonular = LGS_URETIM_SIRASI.flatMap((ders) =>
  (LGS_KONU_AGACI[ders] ?? []).filter((konu) => konu.mevcut === false).map((konu) => `${ders} › ${konu.ad} (${konu.kazanim})`)
)
if (bekleyenKonular.length) {
  console.log('\n--- Veritabanına eklenmesi gereken konular (onay bekliyor) ---')
  bekleyenKonular.forEach((satir) => console.log(`  • ${satir}`))
  console.log('  Dosya: supabase/migration_lgs_konu_tamamlama.sql — canlı veritabanında ÇALIŞTIRILMADI.')
}

/* ------------------------------------------------------------------
   4b) Fen: resmî program metnine bağlılık
   Denetimde ders dosyalarındaki elle yazılmış kazanım cümlelerinin
   programdan kaydığı, bazı "program sınırı" notlarının programda
   bulunmadığı görüldü. Bu bölüm üç şeyi zorunlu kılar:
     a) resmiProgram.js ile mufredat.js aynı 61 kazanımı aynı metinle taşır;
     b) her Fen dersinin künyesi resmî cümleyi ve açıklamaları BİREBİR basar;
     c) programın "Konu / Kavramlar" satırındaki terimler, o alt başlığa
        bağlı derslerde geçer (geçmeyenler uyarı olarak listelenir).
   ------------------------------------------------------------------ */
console.log('\n--- Fen: resmî program metnine bağlılık ---')
{
  const norm = (m) => String(m).replace(/[’']/g, "'").replace(/\s+/g, ' ').trim()
  const fenListe = LGS_KAZANIMLAR['Fen Bilimleri']
  const resmiKodlar = Object.keys(FEN_RESMI_KAZANIMLAR)
  if (resmiKodlar.length !== fenListe.length) {
    hataVer(`resmiProgram.js ${resmiKodlar.length} kazanım, mufredat.js ${fenListe.length} kazanım taşıyor`)
  }
  for (const k of fenListe) {
    const r = FEN_RESMI_KAZANIMLAR[k.kod]
    if (!r) hataVer(`${k.kod} resmiProgram.js içinde yok`)
    else if (norm(r.metin) !== norm(k.metin)) hataVer(`${k.kod} metni resmiProgram.js ile mufredat.js arasında farklı`)
  }

  const fenDersleri = LGS_LESSONS.filter((d) => d.placement?.subject === 'Fen Bilimleri')
  for (const ders of fenDersleri) {
    const kunye = ders.document.sections
      .flatMap((b) => b.blocks)
      .find((b) => b.id === `${ders.slug}-olay-kazanim`)
    if (!kunye) {
      hataVer(`${ders.slug}: kazanım künyesi bloğu bulunamadı`)
      continue
    }
    const govde = norm(kunye.body)
    for (const kod of ders.kazanimlar) {
      const r = FEN_RESMI_KAZANIMLAR[kod]
      if (!r) continue
      if (!govde.includes(norm(r.metin))) hataVer(`${ders.slug}: ${kod} künyesi resmî cümleyi birebir basmıyor`)
      for (const a of r.aciklama) {
        if (!govde.includes(norm(a))) hataVer(`${ders.slug}: ${kod} açıklaması künyede yok → “${a.slice(0, 60)}…”`)
      }
    }
  }

  // c) Konu / Kavramlar kapsaması — yalnız dersi yazılmış alt başlıklar
  const kucuk = (m) => norm(m).toLocaleLowerCase('tr-TR').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ')
  let eksikTerim = 0
  for (const [altBaslik, satir] of Object.entries(FEN_KONU_KAVRAMLAR)) {
    const bagli = fenDersleri.filter((d) => d.kazanimlar.some((k) => k.startsWith(`${altBaslik}.`)))
    if (!bagli.length) continue
    const metin = kucuk(JSON.stringify(bagli.map((d) => d.document)))
    for (const terim of satir.split(',').map((t) => t.trim()).filter(Boolean)) {
      const t = kucuk(terim)
      if (metin.includes(t)) continue
      const kokler = t.split(' ').filter((w) => w.length >= 4).map((w) => w.slice(0, 5))
      if (kokler.length && kokler.every((k) => metin.includes(k))) continue
      uyariVer(`${altBaslik} konu/kavram listesindeki “${terim}” bağlı derslerde geçmiyor`)
      eksikTerim += 1
    }
  }
  console.log(`  ${fenDersleri.length} Fen dersi resmî metne karşı denetlendi · konu/kavram eksiği: ${eksikTerim}`)
}

/* ------------------------------------------------------------------
   4c) İnkılap Tarihi: resmî program metnine bağlılık + tarih kuralları
   Fen'de görülen kaymanın (Ç5) İnkılap'ta hiç yaşanmaması için künye
   baştan resmiProgram.js'e bağlandı. Bu bölüm ayrıca tarih notlarına
   özgü kuralları denetler:
     a) resmiProgram.js ile mufredat.js aynı 39 kazanımı aynı metinle taşır;
     b) her dersin künyesi resmî cümleyi ve açıklamaları BİREBİR basar;
     c) ders "history" derinlik profiliyle denetlenir;
     d) kronoloji, sebep–sonuç zinciri, şahsiyet, veri tablosu, birincil
        ve ikincil kaynak okuması ve dönem özeti bulunur;
     e) tarih haritası varsa "şematik" etiketi ve kaynak notu taşır.
   ------------------------------------------------------------------ */
console.log('\n--- İnkılap Tarihi: resmî program metni ve tarih kuralları ---')
{
  const norm = (m) => String(m).replace(/[’']/g, "'").replace(/\s+/g, ' ').trim()
  const liste = LGS_KAZANIMLAR['T.C. İnkılap Tarihi ve Atatürkçülük']
  const resmiKodlar = Object.keys(INKILAP_RESMI_KAZANIMLAR)
  if (resmiKodlar.length !== liste.length) {
    hataVer(`İnkılap resmiProgram.js ${resmiKodlar.length} kazanım, mufredat.js ${liste.length} kazanım taşıyor`)
  }
  for (const k of liste) {
    const r = INKILAP_RESMI_KAZANIMLAR[k.kod]
    if (!r) hataVer(`${k.kod} İnkılap resmiProgram.js içinde yok`)
    else if (norm(r.metin) !== norm(k.metin)) hataVer(`${k.kod} metni resmiProgram.js ile mufredat.js arasında farklı`)
  }

  const dersler = LGS_LESSONS.filter((d) => d.placement?.subject === 'T.C. İnkılap Tarihi ve Atatürkçülük')
  for (const ders of dersler) {
    const bloklar = ders.document.sections.flatMap((b) => b.blocks)
    const kunye = bloklar.find((b) => b.id === `${ders.slug}-baglam-kazanim`)
    if (!kunye) {
      hataVer(`${ders.slug}: kazanım künyesi bloğu bulunamadı`)
    } else {
      const govde = norm(kunye.body)
      for (const kod of ders.kazanimlar) {
        const r = INKILAP_RESMI_KAZANIMLAR[kod]
        if (!r) continue
        if (!govde.includes(norm(r.metin))) hataVer(`${ders.slug}: ${kod} künyesi resmî cümleyi birebir basmıyor`)
        for (const a of r.aciklama) {
          if (!govde.includes(norm(a))) hataVer(`${ders.slug}: ${kod} açıklaması künyede yok → “${a.slice(0, 60)}…”`)
        }
      }
    }

    if (ders.qualityProfile !== 'history') hataVer(`${ders.slug}: tarih dersi "history" derinlik profiliyle denetlenmiyor`)

    const tipler = new Set(bloklar.map((b) => b.type))
    const gerekli = [
      ['timeline', 'kronoloji'],
      ['cause_effect', 'sebep–gelişme–sonuç–sonraki etki zinciri'],
      ['historical_figures', 'şahsiyet–karar bağlantısı'],
      ['table', 'veri tablosu'],
      ['period_summary', 'dönem özeti'],
    ]
    gerekli.forEach(([tip, ad]) => {
      if (!tipler.has(tip)) hataVer(`${ders.slug}: tarih notunda ${ad} yok`)
    })
    const kaynaklar = bloklar.filter((b) => b.id.startsWith(`${ders.slug}-kaynak-belge-`))
    const birincil = kaynaklar.filter((b) => String(b.title).startsWith('Birincil kaynak'))
    const ikincil = kaynaklar.filter((b) => String(b.title).startsWith('İkincil kaynak'))
    if (!birincil.length || !ikincil.length) hataVer(`${ders.slug}: birincil ve ikincil kaynak okumasının ikisi de bulunmalı`)
    kaynaklar.forEach((b) => {
      if (!/Metnin niteliği:/.test(b.prompt)) hataVer(`${ders.slug}: ${b.id} metnin niteliğini (birebir/sadeleştirme/örnek) söylemiyor`)
    })

    bloklar.filter((b) => b.type === 'historical_map').forEach((harita) => {
      if (!/şematik/i.test(harita.map_label || '')) hataVer(`${ders.slug}: tarih haritası şematik olduğunu söylemiyor`)
      if (!harita.source_note) hataVer(`${ders.slug}: tarih haritasında kaynak notu yok`)
    })
  }
  console.log(`  ${dersler.length} İnkılap dersi resmî metne ve tarih kurallarına karşı denetlendi`)
}

/* ------------------------------------------------------------------
   5) Diğer sınavların içeriğine dokunulmadığının kontrolü
   ------------------------------------------------------------------ */
const digerDersler = LESSONS.filter((ders) => ders.placement?.examType !== 'LGS')
const lgsDersler = LESSONS.filter((ders) => ders.placement?.examType === 'LGS')
console.log(`\nKayıt defteri: ${LESSONS.length} ders · LGS ${lgsDersler.length} · diğer sınavlar ${digerDersler.length}`)
if (lgsDersler.length !== LGS_LESSONS.length) {
  hataVer(`LGS dersleri kayıt defterine tam bağlanmamış: kayıt defterinde ${lgsDersler.length}, LGS ağacında ${LGS_LESSONS.length}`)
}

console.log(`\n${hata ? '⚠' : '✅'} LGS denetimi: ${LGS_LESSONS.length} ders · ${hata} hata · ${uyari} uyarı\n`)
process.exitCode = hata ? 1 : 0
