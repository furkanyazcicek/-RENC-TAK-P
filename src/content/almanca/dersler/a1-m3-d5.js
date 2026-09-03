/**
 * DERS — A1 / Modül 3 / Ders 5
 * "Sıklık zarfları ve cümle içi sıra (TeKaMoLo)"
 *
 * Türkçede cümle öğelerinin sırası serbesttir çünkü EKLER görevi
 * gösterir. Almancada ekler bu işi yapmadığı için sıra bilgi taşır ve
 * belli bir düzen izlenir: ZAMAN → SEBEP → BİÇİM → YER.
 *
 * Bu ders, öğrencinin cümlelerinin "doğru ama tuhaf" durmasını bitirir.
 */

export default {
  id: 'a1-m3-d5',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 5,
  baslik: 'Sıklık zarfları ve cümle içi sıra',
  altBaslik: 'Önce zaman, sonra yer — TeKaMoLo kuralı',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda sıklık zarflarını doğru yere koyabilecek ve cümlede zaman-biçim-yer sırasını kurabileceksin.',
  kazanim: 'Sıklık zarflarını fiilden sonra yerleştirir; TeKaMoLo sırasını uygular; haftanın günleriyle rutin anlatır.',
  onKosullar: ['a1-m3-d4'],
  sure: 14,
  baglam: {
    durum: 'Haftalık programını anlatıyorsun: pazartesi spor, çarşamba müzik, hafta sonu arkadaşlar.',
    neden: 'Cümlelerin doğru ama "yabancı" durmasının en yaygın sebebi öğe sırasıdır. Bu ders o farkı kapatır.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'Sıklık zarfları — çoktan aza',
      basliklar: ['Zarf', 'Anlamı', 'Yaklaşık sıklık'],
      satirlar: [
        ['immer', 'her zaman', '%100'],
        ['meistens', 'çoğunlukla', '%80'],
        ['oft', 'sık sık', '%70'],
        ['manchmal', 'bazen', '%40'],
        ['selten', 'nadiren', '%10'],
        ['nie', 'hiçbir zaman', '%0'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Sıklık zarfı nereye gider?',
      metin:
        'Sıklık zarfı çekimli fiilden HEMEN SONRA gelir. Cümle başına da alınabilir; o zaman fiil yine ikinci sırada kalır ve özne arkaya geçer.',
      maddeler: [
        'Ich gehe immer zu Fuß. ✓ (fiilden sonra)',
        'Immer gehe ich zu Fuß. ✓ (başta — özne arkaya geçti)',
        'Immer ich gehe zu Fuß. ✗ (fiil üçüncü sıraya düştü)',
        'Ich immer gehe zu Fuß. ✗ (fiil ikinci sırada değil)',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'TeKaMoLo — cümle içi sıranın anahtarı',
      metin:
        'Fiilden sonra birden çok bilgi varsa şu sıra izlenir. Kısaltması TeKaMoLo\'dur ve Almanca öğretiminde standart olarak kullanılır.',
      maddeler: [
        'Te = temporal → ZAMAN (wann? — heute, um acht, jeden Tag)',
        'Ka = kausal → SEBEP (warum? — wegen des Wetters)',
        'Mo = modal → BİÇİM/ARAÇ (wie? — mit dem Bus, gern, schnell)',
        'Lo = lokal → YER (wo/wohin? — in die Schule, nach Hause)',
        'Örnek: Ich fahre [heute] [mit dem Bus] [in die Stadt].',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan sıra hatası',
      yanlis: 'Ich gehe in die Schule jeden Tag.',
      dogru: 'Ich gehe jeden Tag in die Schule.',
      neden:
        'Türkçede "okula her gün gidiyorum" da "her gün okula gidiyorum" da doğaldır; sıra serbesttir. Almancada zaman bilgisi yerden ÖNCE gelir. Bu, cümleyi anlaşılmaz yapmaz ama hemen "yabancı" gösterir.',
    },
    {
      tur: 'tablo',
      baslik: 'Haftanın günleri ve zaman ifadeleri',
      basliklar: ['Almanca', 'Türkçe', 'Kalıp'],
      satirlar: [
        ['der Montag', 'pazartesi', 'am Montag'],
        ['der Dienstag', 'salı', 'am Dienstag'],
        ['der Mittwoch', 'çarşamba', 'am Mittwoch'],
        ['der Donnerstag', 'perşembe', 'am Donnerstag'],
        ['der Freitag', 'cuma', 'am Freitag'],
        ['der Samstag', 'cumartesi', 'am Samstag'],
        ['der Sonntag', 'pazar', 'am Sonntag'],
        ['das Wochenende', 'hafta sonu', 'am Wochenende'],
        ['jeden Tag', 'her gün', '— (edat yok)'],
        ['montags', 'pazartesileri', '— (düzenli tekrar)'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'am Montag mı, montags mı?',
      metin:
        'İkisi farklı şey söyler ve karıştırılır.',
      maddeler: [
        'am Montag → BELİRLİ bir pazartesi ("bu pazartesi").',
        'montags → HER pazartesi, düzenli tekrar ("pazartesileri").',
        'Küçük harfle ve -s ile yazılır: montags, dienstags, sonntags.',
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Haftalık program',
      satirlar: [
        { de: 'Montags spiele ich Basketball.', tr: 'Pazartesileri basketbol oynarım.', not: 'düzenli tekrar' },
        { de: 'Am Mittwoch habe ich Musikunterricht.', tr: 'Çarşamba müzik dersim var.', not: 'belirli gün' },
        { de: 'Ich fahre jeden Tag mit dem Bus zur Schule.', tr: 'Her gün otobüsle okula gidiyorum.', not: 'zaman → biçim → yer' },
        { de: 'Am Wochenende treffe ich meistens meine Freunde.', tr: 'Hafta sonu çoğunlukla arkadaşlarımla buluşurum.', not: 'zaman başta, sıklık fiilden sonra' },
        { de: 'Ich gehe nie ohne Frühstück aus dem Haus.', tr: 'Kahvaltı etmeden asla evden çıkmam.', not: 'nie fiilden sonra' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Haftam',
      metin:
        'Montags und mittwochs habe ich Sport. Am Dienstag gehe ich zum Musikunterricht. Ich fahre immer mit dem Fahrrad. Am Wochenende schlafe ich lange und treffe manchmal meine Freunde.',
      satirlar: [
        { de: 'Montags und mittwochs habe ich Sport.' },
        { de: 'Am Dienstag gehe ich zum Musikunterricht.' },
        { de: 'Ich fahre immer mit dem Fahrrad.' },
        { de: 'Am Wochenende schlafe ich lange und treffe manchmal meine Freunde.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d5-a1',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri TeKaMoLo sırasına diz.',
      parcalar: ['in die Schule', 'Ich', 'jeden Tag', 'gehe'],
      dogruSira: [1, 3, 2, 0],
      aciklama: 'Ich (1) · gehe (2) · jeden Tag [ZAMAN] (3) · in die Schule [YER] (4).',
    },
    {
      id: 'a1-m3-d5-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Hangi cümle doğru sıradadır?',
      secenekler: [
        { id: 'a', metin: 'Ich fahre heute mit dem Bus in die Stadt.' },
        { id: 'b', metin: 'Ich fahre in die Stadt mit dem Bus heute.' },
        { id: 'c', metin: 'Ich fahre mit dem Bus heute in die Stadt.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Yer başa, zaman sona gitmiş — sıra tamamen ters.',
        c: 'Biçim (mit dem Bus) zamandan önce gelmiş.',
      },
      aciklama: 'Sıra: ZAMAN (heute) → BİÇİM (mit dem Bus) → YER (in die Stadt).',
    },
    {
      id: 'a1-m3-d5-a3',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich gehe in die Schule jeden Tag.',
      hataliParca: 'in die Schule jeden Tag',
      dogruParca: 'jeden Tag in die Schule',
      kabul: ['Ich gehe jeden Tag in die Schule', 'jeden Tag in die Schule'],
      aciklama: 'Zaman bilgisi yerden önce gelir.',
      tuzaklar: [
        {
          kod: 'zaman-yer-sirasi',
          desen: /\b(gehe|fahre|komme)\s+(in die|zur|zum|nach)\s+\w+\s+(jeden\s+Tag|immer|oft)/i,
          baslik: 'Zaman ve yer ters sırada',
          aciklama: 'Türkçede sıra serbesttir; Almancada zaman → biçim → yer sırası izlenir.',
          dogru: 'Ich gehe jeden Tag in die Schule.',
          mikro: { yonerge: '"Her gün okula gidiyorum." cümlesini yaz.', kabul: ['Ich gehe jeden Tag in die Schule', 'Ich gehe jeden Tag zur Schule'] },
        },
      ],
    },
    {
      id: 'a1-m3-d5-a4',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Sıklık zarflarını yerleştir.',
      parcalar: [
        'Ich stehe ', { bosluk: 0 }, ' früh auf. (%100)\nIch esse ', { bosluk: 1 },
        ' Fisch. (%0)\nWir gehen ', { bosluk: 2 }, ' ins Kino. (%40)',
      ],
      havuz: ['immer', 'nie', 'manchmal'],
      cevaplar: [
        { kabul: ['immer'], ipucu: 'her zaman' },
        { kabul: ['nie'], ipucu: 'hiçbir zaman' },
        { kabul: ['manchmal'], ipucu: 'bazen' },
      ],
    },
    {
      id: 'a1-m3-d5-a5',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Aradaki fark ne?',
      soru: '"Montags spiele ich Fußball." ne demektir?',
      secenekler: [
        { id: 'a', metin: 'Her pazartesi futbol oynarım.' },
        { id: 'b', metin: 'Bu pazartesi futbol oynayacağım.' },
        { id: 'c', metin: 'Geçen pazartesi futbol oynadım.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Bunun için "am Montag" denir.',
      },
      aciklama: 'Küçük harf + "-s" = düzenli tekrar. "am Montag" ise belirli bir günü gösterir.',
    },
    {
      id: 'a1-m3-d5-a6',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Kelimeleri sıraya diz (cümle "Am Wochenende" ile başlıyor).',
      parcalar: ['meine Freunde', 'Am Wochenende', 'meistens', 'treffe', 'ich'],
      dogruSira: [1, 3, 4, 2, 0],
      aciklama: 'Am Wochenende (1) · treffe (2) · ich (3) · meistens (4) · meine Freunde (5).',
    },
    {
      id: 'a1-m3-d5-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Hafta sonu genelde ne yaptığını anlatıyorsun (bir sıklık zarfı kullan).',
      kabul: ['Am Wochenende', 'Ich', 'Am Wochenende treffe ich'],
      ornekCevap: 'Am Wochenende treffe ich meistens meine Freunde.',
    },
    {
      id: 'a1-m3-d5-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Cümleyi adım adım büyüt; sırayı bozma.',
      adimlar: [
        { yonerge: '"Okula gidiyorum." yaz.', kabul: ['Ich gehe zur Schule', 'Ich gehe in die Schule'] },
        { yonerge: '"her gün" ekle (zaman, yerden önce).', kabul: ['Ich gehe jeden Tag zur Schule', 'Ich gehe jeden Tag in die Schule'] },
        { yonerge: '"otobüsle" ekle (biçim, zaman ile yer arasına).', kabul: [
          'Ich fahre jeden Tag mit dem Bus zur Schule',
          'Ich gehe jeden Tag mit dem Bus zur Schule',
          'Ich fahre jeden Tag mit dem Bus in die Schule',
        ] },
      ],
      aciklama: 'Araç eklendiğinde fiil de değişti: yürüyorsan gehen, taşıtla gidiyorsan fahren.',
    },
  ],

  ozet: [
    'Sıklık zarfı çekimli fiilden hemen sonra gelir.',
    'Cümle başına alınırsa özne fiilin arkasına geçer.',
    'Cümle içi sıra: ZAMAN → SEBEP → BİÇİM → YER (TeKaMoLo).',
    'Zaman bilgisi her zaman yerden ÖNCE gelir.',
    'am Montag = belirli gün · montags = her pazartesi.',
    'Sıklık sırası: immer > meistens > oft > manchmal > selten > nie.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d5-s1',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['nach Hause', 'Ich', 'um vier Uhr', 'gehe'],
      dogruSira: [1, 3, 2, 0],
    },
    {
      id: 'a1-m3-d5-s2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Hangi cümlede sıklık zarfı doğru yerdedir?',
      secenekler: [
        { id: 'a', metin: 'Ich trinke morgens immer Tee.' },
        { id: 'b', metin: 'Ich immer trinke morgens Tee.' },
        { id: 'c', metin: 'Immer ich trinke morgens Tee.' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m3-d5-s3',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Doğru ifadeyi yaz.',
      parcalar: [{ bosluk: 0 }, ' Wochenende schlafe ich lange.'],
      cevaplar: [{ kabul: ['Am', 'am'], ipucu: 'hafta sonu için edat' }],
    },
  ],

  kartlar: ['de-immer', 'de-oft', 'de-manchmal', 'de-nie', 'de-woche', 'de-wochenende'],
  not: null,
  sonraki: 'a1-m3-d6',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
