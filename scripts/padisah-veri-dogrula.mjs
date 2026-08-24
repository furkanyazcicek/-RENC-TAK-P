/**
 * PADİŞAH VERİSİ DOĞRULAMA
 * ------------------------------------------------------------------
 * Yeni padişah eklendiğinde çalıştırılır:
 *
 *     node scripts/padisah-veri-dogrula.mjs
 *
 * Ne kontrol eder?
 *  • Zorunlu alanlar dolu mu
 *  • Kimlikler benzersiz mi, kronoloji ile uyuşuyor mu
 *  • Selef/halef zinciri kopuk mu
 *  • Haritada tanımsız bir mevki gösteriliyor mu
 *  • Atlas bağlantısı atlasın kapsadığı yıl aralığında mı
 *  • Nitelikler delilli mi (delilsiz nitelik ekrana çıkmamalı)
 */
import { PADISAHLAR } from '../src/data/padisahlar/index.js'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { KRONOLOJI, kronolojiKaydi } from '../src/data/padisahlar/kronoloji.js'
import { DONEM_HARITALARI } from '../src/data/padisahlar/donemHaritalari.js'
import { MEVKILER } from '../src/data/padisahlar/cografya.js'
import { ATLAS_YIL_ARALIGI } from '../src/lib/padisahAtlas.js'

const hatalar = []
const uyarilar = []

const ZORUNLU = ['id', 'order', 'name', 'reignStart', 'reignEnd', 'dynastyPeriod', 'summary', 'mapState', 'traits', 'osymHighlights', 'narration']

const kimlikler = new Set()

for (const padisah of PADISAHLAR) {
  const yer = padisah.id ?? '(kimliksiz)'

  for (const alan of ZORUNLU) {
    if (padisah[alan] === undefined || padisah[alan] === null) hatalar.push(`${yer}: zorunlu alan eksik → ${alan}`)
  }

  if (kimlikler.has(padisah.id)) hatalar.push(`${yer}: kimlik iki kez kullanılmış`)
  kimlikler.add(padisah.id)

  const kayit = kronolojiKaydi(padisah.id)
  if (!kayit) hatalar.push(`${yer}: kronoloji omurgasında karşılığı yok (kronoloji.js)`)
  else {
    if (!kayit.hazir) hatalar.push(`${yer}: kronolojide "hazir: true" işaretlenmemiş`)
    if (kayit.bas !== padisah.reignStart.year) hatalar.push(`${yer}: tahta çıkış yılı kronoloji ile uyuşmuyor (${kayit.bas} ≠ ${padisah.reignStart.year})`)
    if (kayit.bit !== padisah.reignEnd.year) hatalar.push(`${yer}: tahttan iniş yılı kronoloji ile uyuşmuyor (${kayit.bit} ≠ ${padisah.reignEnd.year})`)
  }

  if (padisah.reignEnd.year < padisah.reignStart.year) hatalar.push(`${yer}: bitiş yılı başlangıçtan küçük`)

  const harita = DONEM_HARITALARI[padisah.mapState?.id]
  if (!harita) hatalar.push(`${yer}: dönem haritası bulunamadı → ${padisah.mapState?.id}`)
  else {
    for (const alan of harita.alanlar ?? []) {
      if (!alan.aciklama?.trim()) hatalar.push(`${yer}: etkileşimli harita alanının açıklaması yok → ${alan.id}`)
    }
    for (const mevki of harita.isaretler ?? []) {
      if (!MEVKILER[mevki]) hatalar.push(`${yer}: haritada tanımsız mevki → ${mevki}`)
    }
    for (const vurgu of padisah.mapState.highlight ?? []) {
      if (!harita.isaretler?.includes(vurgu)) uyarilar.push(`${yer}: vurgulanan "${vurgu}" haritanın işaret listesinde yok`)
    }
  }

  if (padisah.mapState?.startMapId && !DONEM_HARITALARI[padisah.mapState.startMapId]) {
    hatalar.push(`${yer}: dönem başı karşılaştırma haritası bulunamadı → ${padisah.mapState.startMapId}`)
  }

  if (padisah.portrait?.kind === 'image') {
    const portreYolu = resolve(process.cwd(), 'public', padisah.portrait.src.replace(/^\//, ''))
    if (!existsSync(portreYolu)) hatalar.push(`${yer}: portre görseli bulunamadı → ${padisah.portrait.src}`)
  }

  for (const nitelik of padisah.traits ?? []) {
    if (!nitelik.evidence?.trim()) hatalar.push(`${yer}: delilsiz nitelik → ${nitelik.label}`)
  }

  const tumOlaylar = [...(padisah.keyEvents ?? []), ...(padisah.battles ?? []), ...(padisah.conquests ?? []), ...(padisah.treaties ?? [])]
  for (const olay of tumOlaylar) {
    if (!olay.date?.year) hatalar.push(`${yer}/${olay.id}: tarih alanı eksik`)
    if (olay.date?.disputed && !olay.date.note) hatalar.push(`${yer}/${olay.id}: tartışmalı tarih için açıklama yazılmamış`)
    if (olay.mapFocus && !MEVKILER[olay.mapFocus]) hatalar.push(`${yer}/${olay.id}: tanımsız harita odağı → ${olay.mapFocus}`)
    if (olay.atlas) {
      const { year } = olay.atlas
      if (year < ATLAS_YIL_ARALIGI.enAz || year > ATLAS_YIL_ARALIGI.enCok) {
        hatalar.push(`${yer}/${olay.id}: atlas bağlantısı kapsam dışı yıl (${year})`)
      }
    }
  }

  const anlatimTur = new Set((padisah.narration ?? []).map((b) => b.kind))
  if (!anlatimTur.has('intro')) uyarilar.push(`${yer}: anlatımda giriş bölümü (intro) yok`)
}

// Selef–halef zinciri
for (let i = 0; i < PADISAHLAR.length - 1; i += 1) {
  const bu = PADISAHLAR[i]
  const sonraki = PADISAHLAR[i + 1]
  const sonrakiKisaAd = sonraki.name.replace(/^[IVX]+\.\s*/, '')
  if (bu.successor && !bu.successor.includes(sonraki.name) && !bu.successor.includes(sonrakiKisaAd)) {
    uyarilar.push(`${bu.id}: "yerine geçen" alanı bir sonraki padişahla eşleşmiyor gibi → "${bu.successor}"`)
  }
  if (!bu.transitionOut) uyarilar.push(`${bu.id}: geçiş sahnesi (transitionOut) tanımlanmamış`)
}

const hazirSayisi = KRONOLOJI.filter((k) => k.hazir).length
console.log(`Kronoloji omurgası: ${KRONOLOJI.length} kayıt · içeriği hazır: ${hazirSayisi}`)
console.log(`Yüklenen padişah verisi: ${PADISAHLAR.length}`)

if (uyarilar.length) {
  console.log('\nUYARILAR')
  uyarilar.forEach((u) => console.log('  ·', u))
}

if (hatalar.length) {
  console.error('\nHATALAR')
  hatalar.forEach((h) => console.error('  ✗', h))
  process.exit(1)
}

console.log('\nTamam — padişah verisi tutarlı.')
