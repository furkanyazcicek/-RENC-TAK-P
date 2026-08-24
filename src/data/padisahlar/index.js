/**
 * PADİŞAH KAYIT DEFTERİ
 * ==================================================================
 * Arayüz yalnızca bu dosyayı tanır. Yeni padişah eklemek = yeni veri
 * dosyası yazıp aşağıdaki listeye eklemek. Bileşenlerde hiçbir
 * padişah adı geçmez.
 */

import osmanGazi from './osman-gazi.js'
import orhanGazi from './orhan-gazi.js'
import birinciMurad from './birinci-murad.js'
import { TAM_HANEDAN_PADISAHLARI } from './tamHanedan.js'
import { KRONOLOJI, kronolojiKaydi, cizelgeAraligi, saltanatSuresi } from './kronoloji.js'

/** İçeriği tamamlanmış padişahlar — kronolojik sırada. */
export const PADISAHLAR = [osmanGazi, orhanGazi, birinciMurad, ...TAM_HANEDAN_PADISAHLARI]

export { KRONOLOJI, kronolojiKaydi, cizelgeAraligi, saltanatSuresi }

export function padisahBul(id) {
  return PADISAHLAR.find((p) => p.id === id) ?? null
}

export function padisahSirasi(id) {
  return PADISAHLAR.findIndex((p) => p.id === id)
}

export function sonrakiPadisah(id) {
  const sira = padisahSirasi(id)
  return sira >= 0 ? PADISAHLAR[sira + 1] ?? null : null
}

export function oncekiPadisah(id) {
  const sira = padisahSirasi(id)
  return sira > 0 ? PADISAHLAR[sira - 1] ?? null : null
}

/** Hükümdarlık süresi — "38 yıl" gibi ekranda görünen metin. */
export function saltanatMetni(padisah) {
  if (padisah.reignDuration) return padisah.reignDuration
  const sure = padisah.reignEnd.year - padisah.reignStart.year
  const belirsiz = padisah.reignStart.disputed || padisah.reignEnd.disputed
  return belirsiz ? `yaklaşık ${sure} yıl` : `${sure} yıl`
}

/**
 * Bir padişahın bütün olaylarını tek bir kronolojik akışta toplar.
 * Sekmeler ayrı ayrı gösterse de, zaman çizelgesi ve seslendirme
 * tek bir sıralı akışa ihtiyaç duyar.
 */
export function padisahAkisi(padisah) {
  const kayitlar = [
    ...(padisah.keyEvents ?? []).map((o) => ({ ...o, kaynak: 'olay' })),
    ...(padisah.battles ?? []).map((o) => ({ ...o, kaynak: 'savas' })),
    ...(padisah.conquests ?? []).map((o) => ({ ...o, kaynak: 'fetih' })),
    ...(padisah.treaties ?? []).map((o) => ({ ...o, kaynak: 'antlasma' })),
  ]
  // Aynı olay hem "önemli olay" hem "savaş" olarak girilmiş olabilir;
  // akışta tek kez görünmeli (ör. Palekanon).
  const gorulen = new Set()
  return kayitlar
    .filter((kayit) => {
      const anahtar = `${kayit.title}·${kayit.date.year}`
      if (gorulen.has(anahtar)) return false
      gorulen.add(anahtar)
      return true
    })
    .sort((a, b) => a.date.year - b.date.year)
}

/** Sekmelerin hangileri gösterilecek — boş sekme asla açılmaz. */
export function padisahSekmeleri(padisah) {
  const sekmeler = [{ kod: 'genel', ad: 'Genel Bakış' }]
  // ÖSYM sekmesi bilerek ikinci sırada: sınav tekrarı bu modülün en
  // çok işe yarayan parçası, fakat şeridin sonundayken masaüstünde bile
  // sağa taşıp görünmez kalıyordu.
  if (padisah.osymHighlights?.length) sekmeler.push({ kod: 'osym', ad: 'ÖSYM’de Bil', adet: padisah.osymHighlights.length })
  if (padisah.battles?.length) sekmeler.push({ kod: 'savaslar', ad: 'Savaşlar', adet: padisah.battles.length })
  if (padisah.conquests?.length) sekmeler.push({ kod: 'fetihler', ad: 'Fetihler', adet: padisah.conquests.length })
  if (padisah.treaties?.length) sekmeler.push({ kod: 'antlasmalar', ad: 'Antlaşmalar', adet: padisah.treaties.length })
  if (padisah.reforms?.length) sekmeler.push({ kod: 'devlet', ad: 'Devlet & Yönetim', adet: padisah.reforms.length })
  if (padisah.importantFigures?.length) sekmeler.push({ kod: 'kisiler', ad: 'Önemli Kişiler', adet: padisah.importantFigures.length })
  if (padisah.mapState) sekmeler.push({ kod: 'harita', ad: 'Harita' })
  return sekmeler
}
