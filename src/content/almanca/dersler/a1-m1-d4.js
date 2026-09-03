/**
 * DERS — A1 / Modül 1 / Ders 4
 * "Soru sorma: W-Fragen ve evet/hayır soruları"
 *
 * Almancada soru kurmanın iki yolu vardır ve ikisi de FİİLİN YERİYLE
 * ilgilidir. Türkçede soru bir EKLE kurulur ("geliyor musun") ve kelime
 * sırası hiç değişmez; bu yüzden öğrenci Almancada da sırayı korumaya
 * çalışır ve "Du kommst?" der.
 *
 * Bu ders, önceki dersteki "fiil ikinci" kuralının doğal devamıdır:
 * W-sorusunda fiil yine ikinci, evet/hayır sorusunda ise BİRİNCİ sıradadır.
 */

export default {
  id: 'a1-m1-d4',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 4,
  baslik: 'Soru sorma: W-Fragen ve evet/hayır soruları',
  altBaslik: 'Soruyu ekle değil, fiilin yeriyle kur',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'gramer', 'dusunme'],
  amac: 'Bu dersin sonunda W-sorularını doğru sırayla kurabilecek, evet/hayır sorusunda fiili başa alabilecek ve tanıştığın birine beş farklı soru sorabileceksin.',
  kazanim: 'W-sorularında soru sözcüğü + fiil + özne sırasını kurar; evet/hayır sorusunda çekimli fiili başa alır; wo/woher/wohin ayrımını yapar.',
  onKosullar: ['a1-m1-d3'],
  sure: 14,
  baglam: {
    durum: 'Yeni tanıştığın biriyle sohbeti sürdürmen gerekiyor. Sadece kendini anlatmak yetmez; soru sorabilmelisin.',
    neden: 'Soru soramayan öğrenci konuşmayı sürdüremez. Soru, dili öğrenmenin de en hızlı yoludur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçede ek, Almancada sıra',
      metin:
        'Türkçede soru "mu/mü" ekiyle kurulur ve kelimeler yerinden oynamaz: "Geliyorsun." → "Geliyor musun?" Almancada ek yoktur; soruyu FİİLİN YERİ kurar.',
      maddeler: [
        'Du kommst. (Geliyorsun.) → Kommst du? (Geliyor musun?)',
        'Fiil öne geçti; başka hiçbir şey değişmedi.',
        'Bu yüzden "Du kommst?" yalnızca şaşkınlık ifadesidir, normal bir soru değildir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'İki soru türü, iki ayrı sıra',
      basliklar: ['Soru türü', 'Sıra', 'Örnek'],
      satirlar: [
        ['W-sorusu', '1. soru sözcüğü · 2. FİİL · 3. özne', 'Wo wohnst du?'],
        ['Evet/hayır', '1. FİİL · 2. özne', 'Wohnst du in Ankara?'],
        ['Bildirim', '1. özne · 2. FİİL', 'Du wohnst in Ankara.'],
      ],
    },
    {
      tur: 'tablo',
      baslik: 'En çok kullanılan soru sözcükleri',
      basliklar: ['Soru sözcüğü', 'Anlamı', 'Örnek', 'Cevap'],
      satirlar: [
        ['Wie', 'Nasıl / ne (ad)', 'Wie heißt du?', 'Ich heiße Ali.'],
        ['Wo', 'Nerede', 'Wo wohnst du?', 'In Izmir.'],
        ['Woher', 'Nereden', 'Woher kommst du?', 'Aus der Türkei.'],
        ['Wohin', 'Nereye', 'Wohin gehst du?', 'Nach Hause.'],
        ['Was', 'Ne', 'Was machst du?', 'Ich lerne Deutsch.'],
        ['Wer', 'Kim', 'Wer ist das?', 'Das ist Maya.'],
        ['Wann', 'Ne zaman', 'Wann kommst du?', 'Um acht Uhr.'],
        ['Warum', 'Neden', 'Warum lernst du Deutsch?', 'Weil es mir gefällt.'],
        ['Wie alt', 'Kaç yaşında', 'Wie alt bist du?', 'Ich bin 15.'],
        ['Wie viele', 'Kaç tane', 'Wie viele Geschwister hast du?', 'Zwei.'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Üçlüyü ayır: wo — woher — wohin',
      metin:
        'Türkçede bu üçü aynı kökün üç ekidir: nerede / nereden / nereye. Almancada üç ayrı kelimedir ve karıştırıldığında cümle anlamsız olur.',
      maddeler: [
        'Wo? → durma, bulunma. "Wo bist du?" (Neredesin?)',
        'Woher? → köken, çıkış. "Woher kommst du?" (Nerelisin?)',
        'Wohin? → varış, hedef. "Wohin gehst du?" (Nereye gidiyorsun?)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Wo du wohnst?',
      dogru: 'Wo wohnst du?',
      neden:
        'Türkçede "Nerede oturuyorsun?" derken sıra bozulmaz. Almancada soru sözcüğünden hemen sonra ÇEKİMLİ FİİL gelir, özne fiilin arkasına düşer.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Wie mi, Was mı?',
      dogal: 'Wie heißt du? / Wie ist dein Name? (Adın ne?)',
      yapay: 'Was ist dein Name? (dilbilgisi doğru ama Almancada doğal değil)',
      aciklama:
        'Türkçede "Adın NE?" diye sorarız, bu yüzden "Was" seçmek çok cazip gelir. Almancada ad "Wie" ile sorulur — kalıbı olduğu gibi ezberle.',
    },
    {
      tur: 'kalip',
      baslik: 'Tanışma sohbetini sürdüren beş soru',
      kaliplar: [
        { de: 'Wie heißt du?', kullanim: 'Ad', ornek: '— Wie heißt du? — Ich heiße Lena.' },
        { de: 'Woher kommst du?', kullanim: 'Köken', ornek: '— Woher kommst du? — Aus Italien.' },
        { de: 'Wie alt bist du?', kullanim: 'Yaş', ornek: '— Wie alt bist du? — Ich bin 16.' },
        { de: 'Was machst du gern?', kullanim: 'İlgi alanı', ornek: '— Was machst du gern? — Ich spiele gern Fußball.' },
        { de: 'Hast du Geschwister?', kullanim: 'Aile (evet/hayır sorusu)', ornek: '— Hast du Geschwister? — Ja, einen Bruder.' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Evet/hayır sorusuna cevap: ja, nein ve doch',
      metin:
        'Almancada üçüncü bir cevap sözcüğü vardır ve Türkçede karşılığı yoktur: doch. OLUMSUZ bir soruya olumlu cevap verirken kullanılır.',
      maddeler: [
        '— Kommst du? — Ja. (Evet, geliyorum.)',
        '— Kommst du? — Nein. (Hayır.)',
        '— Kommst du NICHT? — Doch! (Hayır öyle değil, geliyorum!)',
        'Türkçede bu son durumda "Yok, geliyorum" deriz; Almancada tek kelime yeter: Doch.',
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Tanışma sohbeti',
      metin:
        'Wie heißt du? Ich heiße Jonas. Woher kommst du? Ich komme aus Österreich. Wie alt bist du? Ich bin sechzehn. Hast du Geschwister? Ja, eine Schwester.',
      satirlar: [
        { kisi: 'A', de: 'Wie heißt du?' },
        { kisi: 'B', de: 'Ich heiße Jonas.' },
        { kisi: 'A', de: 'Woher kommst du?' },
        { kisi: 'B', de: 'Ich komme aus Österreich.' },
        { kisi: 'A', de: 'Wie alt bist du?' },
        { kisi: 'B', de: 'Ich bin sechzehn.' },
        { kisi: 'A', de: 'Hast du Geschwister?' },
        { kisi: 'B', de: 'Ja, eine Schwester.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d4-a1',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Kelimeleri sıralayarak soruyu kur.',
      parcalar: ['du', 'Wo', 'wohnst'],
      dogruSira: [1, 2, 0],
      aciklama: 'Soru sözcüğü (1) · fiil (2) · özne (3).',
    },
    {
      id: 'a1-m1-d4-a2',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Sorudaki hatayı bul ve düzelt.',
      cumle: 'Woher du kommst?',
      hataliParca: 'du kommst',
      dogruParca: 'kommst du',
      kabul: ['Woher kommst du', 'kommst du'],
      aciklama: 'Soru sözcüğünden sonra çekimli fiil gelir; özne arkaya geçer.',
      tuzaklar: [
        {
          kod: 'w-soru-sirasi',
          desen: /\b(wo|wie|was|woher|wohin|wann|warum)\s+(ich|du|er|sie|es|wir|ihr)\s+\w+/i,
          baslik: 'W-sorusunda sıra bozuk',
          aciklama: 'Türkçede soru sözcüğü cümlenin sırasını bozmaz; Almancada fiili öne çeker.',
          dogru: 'Wo wohnst du?',
          mikro: { yonerge: '"Nereye gidiyorsun?" sorusunu yaz.', kabul: ['Wohin gehst du'] },
        },
      ],
    },
    {
      id: 'a1-m1-d4-a3',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangi soru sözcüğü gelmeli?',
      soru: '____ gehst du? — Nach Hause.',
      secenekler: [
        { id: 'a', metin: 'Wohin' },
        { id: 'b', metin: 'Wo' },
        { id: 'c', metin: 'Woher' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"Wo" bulunma sorar; cevabı "zu Hause" olurdu.',
        c: '"Woher" köken sorar; cevabı "aus Berlin" olurdu.',
      },
      aciklama: 'Cevapta hareket var ("nach Hause"), demek ki soru "Wohin?" olmalı.',
    },
    {
      id: 'a1-m1-d4-a4',
      tur: 'eslestirme',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Soruyu doğru cevapla eşleştir.',
      sol: [
        { id: 's1', metin: 'Wie heißt du?' },
        { id: 's2', metin: 'Woher kommst du?' },
        { id: 's3', metin: 'Wo wohnst du?' },
        { id: 's4', metin: 'Wie alt bist du?' },
        { id: 's5', metin: 'Wann kommst du?' },
      ],
      sag: [
        { id: 'c1', metin: 'Ich heiße Elif.' },
        { id: 'c2', metin: 'Aus der Türkei.' },
        { id: 'c3', metin: 'In Bursa.' },
        { id: 'c4', metin: 'Ich bin vierzehn.' },
        { id: 'c5', metin: 'Um sieben Uhr.' },
      ],
      eslesme: { s1: 'c1', s2: 'c2', s3: 'c3', s4: 'c4', s5: 'c5' },
    },
    {
      id: 'a1-m1-d4-a5',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Evet/hayır sorularını kur (fiil başa!).',
      parcalar: [
        { bosluk: 0 }, ' du aus Deutschland? — Nein, aus Österreich.\n',
        { bosluk: 1 }, ' du Geschwister? — Ja, einen Bruder.',
      ],
      cevaplar: [
        { kabul: ['Kommst', 'kommst'], ipucu: 'kommen fiili, du' },
        { kabul: ['Hast', 'hast'], ipucu: 'haben fiili, du' },
      ],
      aciklama: 'Evet/hayır sorusunda çekimli fiil BİRİNCİ sıradadır.',
    },
    {
      id: 'a1-m1-d4-a6',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hangisi doğal Almanca?',
      baglam: 'Yeni tanıştığın birinin adını soruyorsun.',
      secenekler: [
        { id: 'a', metin: 'Wie heißt du?', dogal: true, neden: 'Almancanın doğal sorusu fiille kurulur ve "Wie" kullanılır.' },
        { id: 'b', metin: 'Was ist dein Name?', dogal: false, neden: 'Dilbilgisi doğru ama kitabidir; Türkçedeki "Adın ne?" kalıbının izini taşır.' },
      ],
    },
    {
      id: 'a1-m1-d4-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Bir arkadaşın "Kommst du nicht mit?" diye sordu ama sen geliyorsun. Tek kelimeyle cevap ver.',
      kabul: ['Doch', 'Doch!'],
      ornekCevap: 'Doch!',
      aciklama: 'Olumsuz soruya olumlu cevap "doch"tur. "Ja" demek burada yanlış anlaşılır.',
    },
    {
      id: 'a1-m1-d4-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Aynı bilgiyi üç ayrı soruya dönüştür.',
      adimlar: [
        { yonerge: 'Adını sor (samimi).', kabul: ['Wie heißt du'] },
        { yonerge: 'Aynı soruyu resmî biçimde sor.', kabul: ['Wie heißen Sie'] },
        { yonerge: 'Şimdi nereli olduğunu sor (samimi).', kabul: ['Woher kommst du'] },
      ],
      aciklama: 'Resmî biçimde hem zamir hem fiil değişir: du heißt → Sie heißen.',
    },
  ],

  ozet: [
    'Almancada soru ekle değil, FİİLİN YERİYLE kurulur.',
    'W-sorusu: soru sözcüğü · fiil · özne. (Wo wohnst du?)',
    'Evet/hayır sorusu: fiil · özne. (Wohnst du hier?)',
    'wo = nerede, woher = nereden, wohin = nereye — üç ayrı kelime.',
    'Ad "Wie" ile sorulur, "Was" ile değil.',
    'Olumsuz soruya olumlu cevap: doch.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d4-s1',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['du', 'kommst', 'Woher'],
      dogruSira: [2, 1, 0],
    },
    {
      id: 'a1-m1-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Hangisi doğru soru?',
      soru: '"Almanca konuşuyor musun?" nasıl sorulur?',
      secenekler: [
        { id: 'a', metin: 'Sprichst du Deutsch?' },
        { id: 'b', metin: 'Du sprichst Deutsch?' },
        { id: 'c', metin: 'Du Deutsch sprichst?' },
      ],
      dogruId: 'a',
      aciklama: 'Evet/hayır sorusunda fiil başa geçer.',
    },
    {
      id: 'a1-m1-d4-s3',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Soruya Almanca cevap ver.',
      soru: 'Wie alt bist du?',
      kabul: ['Ich bin', 'Ich bin 15', 'Ich bin 15 Jahre alt', 'Ich bin fünfzehn'],
      ornekCevap: 'Ich bin fünfzehn Jahre alt.',
    },
  ],

  kartlar: ['de-wohin', 'de-kommen', 'de-wohnen', 'de-heissen', 'de-sprechen'],
  not: null,
  sonraki: 'a1-m1-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
