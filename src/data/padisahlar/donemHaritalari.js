/**
 * DÖNEM HÂKİMİYET ALANLARI — ŞEMATİK
 * ==================================================================
 *
 * Her padişahın hükümdarlığının SONUNDAKİ durum kabaca gösterilir.
 * Bunlar sınır haritası DEĞİL, hâkimiyet krokisidir:
 *
 *   • Kenarlar yumuşatılmıştır; kilometre doğruluğu iddiası yoktur.
 *   • Uç bölgelerde denetim dönemin kendisinde de kesin çizgili değildi;
 *     akıncı hareketi, vergiye bağlama ve doğrudan yönetim iç içeydi.
 *   • Bu yüzden "doğrudan" ve "bağlı (vergiye bağlı/vassal)" ayrımı
 *     ayrı tonlarla verilir — öğrencinin en çok karıştırdığı fark budur.
 *
 * Tartışmalı veya ince denetimli yerler (Ankara gibi) büyük bir blok
 * yerine küçük ayrı alan + şehir işareti olarak gösterilir; böylece
 * harita, dönemin gerçekte olduğundan daha derli toplu görünmez.
 */

export const DONEM_HARITALARI = {
  /* ————— Osman Gazi dönemi sonu ————— */
  'osman-1324': {
    baslik: 'Uç beyliğinden ilk çekirdeğe',
    alanlar: [
      {
        id: 'bizans', ad: 'Bizans', tur: 'bizans',
        kiyi: [[28.4, 40.45], [29.3, 40.6], [30.05, 40.9], [30.5, 40.62], [30.15, 40.38], [29.6, 40.28], [29.2, 40.0], [28.7, 39.98], [28.35, 40.2]],
      },
      {
        id: 'bizans-baskent', ad: 'Konstantinopolis', tur: 'bizans',
        kiyi: [[27.6, 41.8], [28.7, 42.0], [29.3, 41.35], [29.0, 40.95], [28.2, 40.92], [27.4, 40.9], [27.1, 41.3]],
      },
      {
        id: 'osmanli', ad: 'Osmanlı uç beyliği', tur: 'osmanli',
        kiyi: [[29.3, 40.45], [29.95, 40.42], [30.75, 40.1], [30.85, 39.7], [30.2, 39.48], [29.45, 39.66], [29.15, 40.05], [29.2, 40.32]],
      },
    ],
    isaretler: ['sogut', 'bilecik', 'yenisehir', 'inegol', 'karacahisar', 'yarhisar', 'domanic', 'koyunhisar', 'bursa', 'iznik', 'izmit', 'konstantinopolis'],
    okuma: 'Beylik, Bizans’ın Marmara’daki şehir zincirinin hemen güneydoğusunda, dağlık uç bölgede kuruldu. Bursa, İznik ve İzmit henüz Bizans elindedir; Osman Bey bu şehirleri kuşatma ve ablukayla yıpratma yolunu seçti.',
  },

  /* ————— Orhan Gazi dönemi sonu ————— */
  'orhan-1362': {
    baslik: 'Marmara’nın iki yakası',
    alanlar: [
      {
        id: 'bizans-baskent', ad: 'Bizans', tur: 'bizans',
        kiyi: [[27.5, 41.9], [28.5, 42.05], [29.2, 41.35], [28.9, 40.95], [28.2, 40.9], [27.4, 40.85], [27.0, 41.2]],
      },
      {
        id: 'osmanli', ad: 'Osmanlı', tur: 'osmanli',
        kiyi: [[29.95, 40.85], [30.6, 40.5], [31.0, 40.05], [30.9, 39.5], [30.0, 39.2], [29.2, 39.15], [28.2, 39.28], [27.6, 39.6], [27.4, 40.05], [27.75, 40.28], [28.8, 40.42], [29.45, 40.62]],
      },
      {
        id: 'ankara', ad: 'Ankara çevresi', tur: 'osmanli', ince: true,
        kiyi: [[32.3, 40.1], [32.9, 40.15], [33.2, 39.85], [32.9, 39.65], [32.4, 39.7], [32.15, 39.9]],
      },
      {
        id: 'rumeli-koprubasi', ad: 'Rumeli köprübaşı', tur: 'osmanli',
        kiyi: [[26.62, 40.58], [26.98, 40.46], [26.82, 40.18], [26.45, 40.08], [26.28, 40.32]],
      },
    ],
    isaretler: ['bursa', 'iznik', 'izmit', 'karesi', 'maltepe', 'ankara', 'cimpe', 'gelibolu', 'konstantinopolis', 'sogut'],
    okuma: 'Bursa, İznik ve İzmit alınınca beylik Marmara’nın güney kıyısına yerleşti. Karesi’nin katılmasıyla gelen gemiler ve komutanlar, 1352/1353’te Çimpe’de Rumeli’ye ilk adımı mümkün kıldı. Ankara çevresi ince denetimli bir uçtur; bloklu bir hâkimiyet olarak okunmamalıdır.',
  },

  /* ————— I. Murad dönemi sonu ————— */
  'murad-1389': {
    baslik: 'Ağırlık merkezi Rumeli’ye kayıyor',
    alanlar: [
      {
        id: 'karaman', ad: 'Karamanoğulları', tur: 'rakip',
        kiyi: [[31.5, 38.3], [32.8, 38.5], [34.2, 38.2], [34.5, 37.2], [33.5, 36.6], [32.2, 36.6], [31.4, 37.3]],
      },
      {
        id: 'sirbistan', ad: 'Sırp despotluğu (bağlı)', tur: 'bagli',
        kiyi: [[20.4, 42.6], [21.5, 43.3], [21.2, 44.3], [19.9, 44.5], [19.2, 43.9], [19.4, 43.0]],
      },
      {
        id: 'bulgaristan', ad: 'Bulgar krallığı (bağlı)', tur: 'bagli',
        kiyi: [[24.2, 43.2], [25.5, 43.6], [27.1, 43.4], [27.6, 42.75], [26.3, 42.3], [25.0, 42.7]],
      },
      {
        id: 'bizans-baskent', ad: 'Bizans', tur: 'bizans',
        kiyi: [[28.5, 41.35], [29.2, 41.3], [29.3, 41.0], [28.9, 40.85], [28.4, 40.95], [28.3, 41.2]],
      },
      {
        id: 'osmanli-anadolu', ad: 'Osmanlı — Anadolu', tur: 'osmanli',
        kiyi: [[29.95, 40.9], [31.5, 40.6], [32.6, 40.2], [33.4, 39.8], [33.2, 39.2], [32.0, 38.5], [31.0, 38.1], [30.0, 38.3], [29.0, 38.7], [28.0, 39.1], [27.4, 39.6], [27.3, 40.1], [27.8, 40.3], [28.8, 40.44], [29.5, 40.65]],
      },
      {
        id: 'osmanli-rumeli', ad: 'Osmanlı — Rumeli', tur: 'osmanli',
        kiyi: [[26.6, 40.5], [25.6, 40.78], [24.5, 40.9], [23.4, 40.5], [22.6, 40.7], [21.6, 41.6], [21.3, 42.4], [21.7, 43.3], [22.8, 43.2], [23.8, 42.9], [24.8, 42.5], [26.0, 42.1], [27.0, 41.6], [27.3, 41.1], [26.95, 40.72]],
      },
    ],
    isaretler: ['edirne', 'filibe', 'sofya', 'nis', 'selanik', 'sirpsindigi', 'cirmen', 'kosova', 'gelibolu', 'bursa', 'kutahya', 'aksehir', 'ankara', 'konstantinopolis', 'konya'],
    okuma: 'Rumeli artık köprübaşı değil, devletin ağırlık merkezidir: Edirne başkent olmuş, Filibe–Sofya–Niş hattı açılmıştır. Sırbistan ve Bulgaristan doğrudan yönetime değil, vergiye ve askerî yükümlülüğe bağlanmıştır — haritada bu yüzden ayrı tonda. Konstantinopolis, çevresi tamamen Osmanlı olan bir şehir devletine dönüşmüştür.',
  },
}

/** Alan tonlarının anlamı — harita göstergesinde (lejant) aynen görünür. */
export const ALAN_TONLARI = [
  { tur: 'osmanli', ad: 'Osmanlı — doğrudan yönetim' },
  { tur: 'bagli', ad: 'Bağlı (vergiye bağlanmış)' },
  { tur: 'bizans', ad: 'Bizans' },
  { tur: 'rakip', ad: 'Rakip / bağımsız beylik' },
]

export function donemHaritasi(id) {
  return DONEM_HARITALARI[id] ?? null
}
