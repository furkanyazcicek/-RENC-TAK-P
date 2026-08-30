import { PADISAHLAR, padisahAkisi, saltanatMetni, sonrakiPadisah } from './index.js'

/**
 * BELGESEL AKIŞI — sahne listesi üreticisi
 * ==================================================================
 *
 * Belgesel modu, sekmeli bilgi ekranı DEĞİLDİR. Öğrenci kaydırdıkça
 * ilerleyen bir anlatı olarak kurulur: her padişah birkaç "panel"e
 * bölünür, paneller kronolojik sırada akar ve iki padişah arasına
 * geçiş paneli girer.
 *
 * Panel tipleri
 *   kapi     → yıl + dönemin başlığı (sahnenin açılışı)
 *   kunye    → portre + hanedan/hükümdarlık bilgileri
 *   olay     → dönemin dönüm noktası (harita odağıyla)
 *   karakter → dönemin nitelikleri
 *   osym     → sınavda ayırt edici bilgiler
 *   gecis    → tahtın el değiştirmesi; sonraki portre sahneye girer
 *
 * Panel sayısı padişahın verisine göre değişir; içeriği olmayan panel
 * hiç üretilmez. Böylece özet kayıtlı padişahlarda boş sahne olmaz.
 */

/** Bir padişahın anlatı panelleri. */
export function padisahPanelleri(padisah) {
  const paneller = []
  const gorsel = padisah.portrait?.kind === 'image' ? padisah.portrait.src : null

  paneller.push({
    id: `${padisah.id}-kapi`,
    tur: 'kapi',
    padisahId: padisah.id,
    yil: padisah.reignStart.value,
    baslik: padisah.openingHeadline,
    metin: padisah.summary,
    gorsel,
  })

  paneller.push({
    id: `${padisah.id}-kunye`,
    tur: 'kunye',
    padisahId: padisah.id,
    yil: `${padisah.reignStart.value} – ${padisah.reignEnd.value}`,
    baslik: padisah.name,
    altBaslik: padisah.epithet,
    metin: saltanatMetni(padisah),
    gorsel,
    kunye: [
      { etiket: 'Babası', deger: padisah.father },
      { etiket: 'Yerine geçtiği', deger: padisah.predecessor },
      { etiket: 'Yerine geçen', deger: padisah.successor },
      { etiket: 'Yönetim merkezi', deger: padisah.capitals?.join(' · ') },
      { etiket: 'Dönem', deger: padisah.dynastyPeriod },
    ].filter((satir) => satir.deger),
  })

  // Dönüm noktaları önce; yoksa akışın ilk üç halkası.
  const akis = padisahAkisi(padisah)
  const donumNoktalari = akis.filter((olay) => olay.eventType === 'major')
  const secilenler = (donumNoktalari.length ? donumNoktalari : akis).slice(0, 4)

  secilenler.forEach((olay) => {
    paneller.push({
      id: `${padisah.id}-olay-${olay.id}`,
      tur: 'olay',
      padisahId: padisah.id,
      yil: olay.date.value,
      tartismali: olay.date.disputed ? olay.date.note : null,
      baslik: olay.title,
      metin: olay.detail || olay.summary,
      vurgu: olay.significance || olay.result || olay.effect,
      osym: olay.osym,
      gorsel,
      haritaId: padisah.mapState?.id,
      odak: olay.mapFocus,
      olay,
    })
  })

  if (padisah.traits?.length) {
    paneller.push({
      id: `${padisah.id}-karakter`,
      tur: 'karakter',
      padisahId: padisah.id,
      yil: padisah.reignEnd.value,
      baslik: 'Dönemin karakteri',
      metin: padisah.mapState?.caption,
      gorsel,
      traits: padisah.traits,
      haritaId: padisah.mapState?.id,
      vurgular: padisah.mapState?.highlight,
    })
  }

  if (padisah.osymHighlights?.length) {
    paneller.push({
      id: `${padisah.id}-osym`,
      tur: 'osym',
      padisahId: padisah.id,
      yil: padisah.reignEnd.value,
      baslik: 'Sınavda ayırt et',
      maddeler: padisah.osymHighlights.slice(0, 5),
      gorsel,
    })
  }

  const sonrakiKayit = sonrakiPadisah(padisah.id)
  if (padisah.transitionOut) {
    paneller.push({
      id: `${padisah.id}-gecis`,
      tur: 'gecis',
      padisahId: padisah.id,
      yil: padisah.transitionOut.year,
      baslik: padisah.transitionOut.headline,
      metin: padisah.transitionOut.body,
      gecisTuru: padisah.transitionOut.transitionType,
      gorsel,
      sonrakiGorsel: sonrakiKayit?.portrait?.kind === 'image' ? sonrakiKayit.portrait.src : null,
      sonrakiAd: sonrakiKayit?.name,
      sonrakiId: sonrakiKayit?.id,
    })
  }

  return paneller
}

/** Bütün silsilenin tek akışı — belgesel modu bunu kaydırır. */
export function belgeselAkisi(padisahlar = PADISAHLAR) {
  return padisahlar.flatMap(padisahPanelleri)
}

/** Panelin ekranda ne kadar duracağı (saniye) — otomatik oynatma için. */
export function panelSuresi(panel) {
  const temel = { kapi: 9, kunye: 10, olay: 13, karakter: 10, osym: 12, gecis: 8 }
  return temel[panel.tur] ?? 10
}
