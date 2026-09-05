/**
 * DERS — A2 / Modül 1 / Ders 1
 * "Perfekt: haben ile geçmiş"
 *
 * A2'nin ilk dersi. Almancada günlük konuşmanın geçmişi Perfekt'tir ve
 * yapı Türkçeden köklü biçimde ayrılır: geçmiş TEK yerde değil İKİ yerde
 * kurulur. Yardımcı fiil ikinci sırada, asıl fiil (Partizip II) cümlenin
 * EN SONUNDA durur. Türk öğrencinin ilk refleksi cümleyi sonunu boş
 * bırakarak bitirmektir; ders bu tek noktaya odaklanır.
 */

export default {
  id: 'a2-m1-d1',
  surum: 1,
  dil: 'de',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 1,
  baslik: 'Perfekt: haben ile geçmiş',
  altBaslik: 'Cümlenin sonunu boş bırakma',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'yazma', 'dusunme'],
  amac: 'Bu dersin sonunda haben ile kurulan Perfekt cümlelerini doğru sırayla yazabileceksin.',
  kazanim: 'Düzenli fiillerin Partizip II biçimini üretir; haben yardımcı fiilini ikinci sıraya, Partizip II\'yi cümle sonuna koyar.',
  onKosullar: ['a1-m6-d5'],
  sure: 22,
  baglam: {
    durum: 'Hafta sonunu soran bir arkadaşına cevap veriyorsun.',
    neden: 'Almancada konuşurken geçmiş neredeyse her zaman Perfekt ile anlatılır; Präteritum çoğunlukla yazı dilinde kalır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Geçmiş iki parçalıdır',
      metin:
        'Türkçede geçmiş tek ekle kurulur: "çalıştım". Almancada ise iki parça gerekir: ' +
        'yardımcı fiil (haben) çekilir ve İKİNCİ sırada durur; asıl fiil Partizip II biçimine girip ' +
        'cümlenin EN SONUNA gider. Cümlenin sonu bu yüzden hiçbir zaman boş kalmaz.',
      maddeler: [
        'Ich habe gestern viel gelernt. → habe (2. sıra) … gelernt (son)',
        'Düzenli fiil: ge- + kök + -t → machen → gemacht, lernen → gelernt, spielen → gespielt',
        '-ieren ile bitenler "ge-" almaz: telefonieren → telefoniert, studieren → studiert',
        'Ayrılabilir fiilde "ge-" ORTAYA girer: einkaufen → eingekauft, aufräumen → aufgeräumt',
        'Ayrılmayan ön ekli fiiller "ge-" almaz: besuchen → besucht, verkaufen → verkauft',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Dört fiil, dört desen',
      basliklar: ['Fiil', 'Partizip II', 'Kural'],
      satirlar: [
        ['machen', 'gemacht', 'ge- + kök + -t (düzenli)'],
        ['telefonieren', 'telefoniert', '-ieren fiilleri ge- almaz'],
        ['einkaufen', 'eingekauft', 'Ayrılabilir: ön ek + ge- + kök'],
        ['besuchen', 'besucht', 'Ayrılmayan ön ek: ge- yok'],
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Cümle sırası: Türkçe ile Almanca',
      metin:
        'Türkçede fiil zaten sonda olduğu için öğrenci Almancada da tek fiil bekler. ' +
        'Oysa Almanca cümlede fiil ikiye bölünür ve bu iki parça cümlenin iki ucunu tutar.',
      satirlar: [
        { sol: 'Türkçe: Dün ödevimi yaptım.', sag: 'Tek fiil, sonda.' },
        { sol: 'Almanca: Gestern habe ich meine Hausaufgaben gemacht.', sag: 'habe → 2. sıra, gemacht → son.' },
        { sol: 'YANLIŞ: Gestern ich habe gemacht meine Hausaufgaben.', sag: 'Hem özne yeri hem Partizip yeri bozulmuş.' },
        { sol: 'Olumsuz: Ich habe gestern nicht gelernt.', sag: '"nicht" Partizip\'ten hemen önce durur.' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Bu derste kullanacağın kalıplar',
      kaliplar: [
        { de: 'Ich habe … gemacht.', kullanim: 'Olumlu anlatım', ornek: 'Ich habe meine Hausaufgaben gemacht.' },
        { de: 'Gestern habe ich …', kullanim: 'Zaman ifadesiyle başlangıç', ornek: 'Gestern habe ich Fußball gespielt.' },
        { de: 'Ich habe nicht … gelernt.', kullanim: 'Olumsuz', ornek: 'Ich habe gestern nicht gelernt.' },
        { de: 'Hast du … gemacht?', kullanim: 'Soru', ornek: 'Hast du deine Hausaufgaben gemacht?' },
        { de: 'Was hast du am Wochenende gemacht?', kullanim: 'Açık uçlu soru', ornek: 'Was hast du am Wochenende gemacht?' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Türk öğrencinin en sık üç hatası',
      yanlis: '1) "Ich habe gemacht die Hausaufgaben."  2) "Gestern ich habe gelernt."  3) "Ich habe telefoniert gestern mit meiner Mutter."',
      dogru: '1) "Ich habe die Hausaufgaben gemacht."  2) "Gestern habe ich gelernt."  3) "Ich habe gestern mit meiner Mutter telefoniert."',
      neden:
        'Üçünün de kaynağı aynı: Partizip II\'nin cümle sonundaki yerinin korunmaması. ' +
        'İkinci cümlede ayrıca "fiil ikinci sırada" kuralı bozulmuş: cümle bir zaman ifadesiyle başlarsa özne fiilin ARKASINA geçer.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d1-a1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Doğru Partizip II biçimini seç.',
      soru: 'Ich habe gestern viel ____ .',
      secenekler: [
        { id: 'a', metin: 'gelernt' },
        { id: 'b', metin: 'lernen' },
        { id: 'c', metin: 'gelernen' },
      ],
      dogruId: 'a',
      aciklama: 'Düzenli fiilde desen sabittir: ge- + kök + -t.',
    },
    {
      id: 'a2-m1-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru cümle sırasını seç.',
      soru: 'Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: 'Gestern habe ich meine Hausaufgaben gemacht.' },
        { id: 'b', metin: 'Gestern ich habe meine Hausaufgaben gemacht.' },
        { id: 'c', metin: 'Gestern habe ich gemacht meine Hausaufgaben.' },
      ],
      dogruId: 'a',
      aciklama: 'Cümle zaman ifadesiyle başlıyorsa fiil yine ikinci sırada kalır ve özne arkaya geçer.',
    },
    {
      id: 'a2-m1-d1-a3',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Partizip II biçimlerini yaz.',
      parcalar: [
        'Am Samstag habe ich mein Zimmer ', { bosluk: 0 }, ', dann habe ich mit meiner Oma ',
        { bosluk: 1 }, ' und am Abend habe ich Fußball ', { bosluk: 2 }, '.',
      ],
      cevaplar: [
        { kabul: ['aufgeräumt'], ipucu: 'aufräumen — ayrılabilir' },
        { kabul: ['telefoniert'], ipucu: 'telefonieren — ge- almaz' },
        { kabul: ['gespielt'], ipucu: 'spielen — düzenli' },
      ],
      aciklama: 'Üç fiil üç farklı deseni gösteriyor: ayrılabilir, -ieren ve düzenli.',
    },
    {
      id: 'a2-m1-d1-a4',
      tur: 'eslestirme',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Fiili Partizip II biçimiyle eşleştir.',
      sol: ['machen', 'studieren', 'einkaufen', 'besuchen'],
      sag: ['gemacht', 'studiert', 'eingekauft', 'besucht'],
      eslesme: { machen: 'gemacht', studieren: 'studiert', einkaufen: 'eingekauft', besuchen: 'besucht' },
      aciklama: 'Yalnız birinci fiil klasik "ge-…-t" desenini izler; diğer üçü istisnadır.',
    },
    {
      id: 'a2-m1-d1-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve cümleyi düzelt.',
      cumle: 'Ich habe gemacht meine Hausaufgaben.',
      hataliParca: 'habe gemacht meine Hausaufgaben',
      dogruParca: 'habe meine Hausaufgaben gemacht',
      kabul: [
        'Ich habe meine Hausaufgaben gemacht',
      ],
      aciklama: 'Partizip II daima cümlenin sonundadır; nesne onun önüne girer.',
    },
    {
      id: 'a2-m1-d1-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Arkadaşına hafta sonu ne yaptığını sor.',
      kabul: [
        'Was hast du am Wochenende gemacht',
      ],
      ornekCevap: 'Was hast du am Wochenende gemacht?',
    },
    {
      id: 'a2-m1-d1-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'YAZMA GÖREVİ — kısa ve odaklı.',
      gorev: 'Hafta sonunu anlatan beş cümle yaz. Hepsi Perfekt olsun, en az bir olumsuz cümle kur. En az 40 kelime.',
      ornekMetin:
        'Am Wochenende bin ich zu Hause geblieben. Am Samstagmorgen habe ich mein Zimmer aufgeräumt ' +
        'und meiner Mutter geholfen. Am Nachmittag habe ich für die Mathearbeit gelernt. ' +
        'Ich habe nicht ferngesehen, weil ich viel zu tun hatte. ' +
        'Am Sonntag habe ich mit meinen Freunden Fußball gespielt.',
      kaliplar: [
        'Am Wochenende habe ich …',
        'Am Samstagmorgen habe ich …',
        'Ich habe nicht … , weil …',
        'Am Abend habe ich …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Beş Perfekt cümlesi, en az bir olumsuz.' },
        { ad: 'Fikir üret', aciklama: 'Hafta sonunda yaptığın üç işi ve yapmadığın bir şeyi not al.' },
        { ad: 'Taslak yaz', aciklama: 'Her cümlede önce yardımcı fiili, sonra sonu düşün: cümlen Partizip ile bitmeli.' },
        { ad: 'Kontrol et', aciklama: 'Her cümlenin sonunda bir Partizip II var mı?' },
      ],
      olcut: [
        'Bütün cümlelerde yardımcı fiil ikinci sırada mı?',
        'Her cümle Partizip II ile bitiyor mu?',
        'En az bir olumsuz cümle kurdum mu?',
        'En az 40 kelime yazdım mı?',
      ],
      enAzKelime: 40,
      aranan: [
        { etiket: 'Perfekt yardımcı fiili (habe / hast / hat)', desen: /\b(habe|hast|hat|haben|habt)\b/i },
        { etiket: 'Partizip II (ge-…-t)', desen: /\bge\w+t\b/i },
        { etiket: 'olumsuzluk (nicht / kein)', desen: /\b(nicht|kein|keine)\b/i },
      ],
      tuzaklar: [
        {
          kod: 'partizip-ortada',
          desen: /\b(habe|hast|hat)\s+ge\w+t\s+\w+/i,
          baslik: 'Partizip II cümlenin ortasında kalmış',
          aciklama: 'Türkçede fiil zaten sonda olduğu için öğrenci Almancada tek fiil bekler. Oysa Partizip II cümlenin sonuna gider; nesne onun önündedir.',
          dogru: 'Ich habe meine Hausaufgaben gemacht.',
          mikro: { yonerge: '"Ödevlerimi yaptım." cümlesini yaz.', kabul: ['Ich habe meine Hausaufgaben gemacht'] },
        },
      ],
    },
  ],

  ozet: [
    'Almancada konuşma dilinin geçmişi Perfekt\'tir: haben/sein + Partizip II.',
    'Yardımcı fiil ikinci sırada, Partizip II cümlenin en sonundadır.',
    'Düzenli desen: ge- + kök + -t (machen → gemacht).',
    '-ieren fiilleri ve ayrılmayan ön ekli fiiller "ge-" almaz.',
    'Ayrılabilir fiillerde "ge-" ön ekle kök arasına girer: eingekauft.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Wir haben gestern im Supermarkt ____ .',
      secenekler: [
        { id: 'a', metin: 'eingekauft' },
        { id: 'b', metin: 'geeinkauft' },
        { id: 'c', metin: 'einkaufen' },
      ],
      dogruId: 'a',
      aciklama: 'Ayrılabilir fiilde "ge-" ön ekten sonra gelir.',
    },
    {
      id: 'a2-m1-d1-s2',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Soru cümlesini tamamla.',
      parcalar: [{ bosluk: 0 }, ' du gestern Fußball ', { bosluk: 1 }, '?'],
      cevaplar: [
        { kabul: ['Hast', 'hast'], ipucu: 'yardımcı fiil' },
        { kabul: ['gespielt'], ipucu: 'Partizip II' },
      ],
      aciklama: 'Soruda yardımcı fiil başa geçer; Partizip yine sonda kalır.',
    },
    {
      id: 'a2-m1-d1-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün ders çalıştığını ama televizyon izlemediğini söyle.',
      kabul: [
        'Gestern habe ich gelernt aber ich habe nicht ferngesehen',
        'Ich habe gestern gelernt aber ich habe nicht ferngesehen',
      ],
      ornekCevap: 'Gestern habe ich gelernt, aber ich habe nicht ferngesehen.',
    },
  ],

  kartlar: ['de-gestern', 'de-letzte-woche', 'de-dann'],
  not: null,
  sonraki: 'a2-m1-d2',
  kaynak: { tur: 'ozgun', aciklama: 'Örnek cümleler DRKOÇ için özgün yazılmıştır.' },
}
