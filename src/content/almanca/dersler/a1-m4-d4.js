/**
 * DERS — A1 / Modül 4 / Ders 4
 * "Kişi zamirleri nesne olunca: mich, dich, ihn…"
 *
 * Türkçede zamir de isim gibi ek alır: ben-i, sen-i, on-u. Almancada
 * zamirin nesne biçimi AYRI BİR KELİMEDİR ve ezberlenir.
 *
 * Ayrıca Almancanın Türkçeye benzeyen bir yanı burada görünür: bazı
 * fiiller Dativ ister ("bana yardım et") ve bu, Türkçedeki yönelme
 * ekiyle örtüşür. Ders bu köprüyü kurar.
 */

export default {
  id: 'a1-m4-d4',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 4,
  baslik: 'Kişi zamirleri nesne olunca',
  altBaslik: 'mich, dich, ihn — ve Dativ isteyen fiiller',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda kişi zamirlerinin nesne biçimlerini kullanabilecek ve Dativ isteyen sık fiillerde doğru zamiri seçebileceksin.',
  kazanim: 'Akkusativ ve Dativ zamirlerini ayırt eder; helfen, danken, gefallen gibi fiillerde Dativ kullanır.',
  onKosullar: ['a1-m4-d3'],
  sure: 14,
  baglam: {
    durum: 'Sınıfta yardımlaşıyorsunuz: "Beni anlıyor musun?", "Sana yardım edeyim mi?", "Onu tanıyorum."',
    neden: 'Zamirler her cümlede geçer; nesne biçimini bilmeyen öğrenci en basit cümlede takılır.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: 'Zamirlerin üç biçimi',
      basliklar: ['Özne (Nominativ)', 'Nesne -i (Akkusativ)', 'Nesne -e (Dativ)', 'Türkçe'],
      satirlar: [
        ['ich', 'mich', 'mir', 'ben / beni / bana'],
        ['du', 'dich', 'dir', 'sen / seni / sana'],
        ['er', 'ihn', 'ihm', 'o / onu / ona (erkek)'],
        ['sie', 'sie', 'ihr', 'o / onu / ona (kadın)'],
        ['es', 'es', 'ihm', 'o / onu / ona (nötr)'],
        ['wir', 'uns', 'uns', 'biz / bizi / bize'],
        ['ihr', 'euch', 'euch', 'siz / sizi / size'],
        ['sie', 'sie', 'ihnen', 'onlar / onları / onlara'],
        ['Sie', 'Sie', 'Ihnen', 'siz (resmî)'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Türkçe sana yardım ediyor',
      metin:
        'Türkçedeki iki ek Almancadaki iki hâle neredeyse birebir karşılık gelir. Bu, İngilizceden gelmeyen bir avantajdır.',
      maddeler: [
        'Türkçe "-i" hâli → Akkusativ: beni gördü → er sah MICH',
        'Türkçe "-e" hâli → Dativ: bana verdi → er gab MIR',
        'Yani "bana / sana / ona" duyduğunda Dativ, "beni / seni / onu" duyduğunda Akkusativ düşün.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Bazı fiiller DATIV ister — ezberlenir',
      metin:
        'Türkçede "yardım etmek" yönelme eki alır ("sana yardım"), bu yüzden bu fiillerin çoğunda Türkçe sezgin doğru çalışır. Ama çeviri sırasında nesne "-i" hâline kayabiliyor.',
      maddeler: [
        'helfen → Ich helfe DIR. (sana yardım ediyorum)',
        'danken → Ich danke DIR. (sana teşekkür ediyorum)',
        'gefallen → Das gefällt MIR. (bu bana hoş geliyor)',
        'gehören → Das Buch gehört MIR. (bu kitap bana ait)',
        'antworten → Ich antworte DIR. (sana cevap veriyorum)',
        'schmecken → Das schmeckt MIR. (bu bana lezzetli geliyor)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Ich helfe dich.',
      dogru: 'Ich helfe dir.',
      neden:
        '"helfen" Dativ ister. Türkçede "sana yardım ediyorum" derken zaten yönelme eki kullanırsın — sezgin doğru, ama Almanca cümleyi kurarken "dich"e kayıyorsun çünkü nesne olduğunu düşünüyorsun.',
    },
    {
      tur: 'anlatim',
      baslik: 'gefallen ve schmecken: özne yer değiştirir',
      metin:
        'Bu iki fiilde ÖZNE, beğenilen şeydir; kişi ise Dativ\'e girer. Türkçede de benzer bir yapı vardır ("bana hoş geldi"), bu yüzden mantığı yabancı değildir.',
      maddeler: [
        'Das Buch gefällt mir. → Kitabı beğendim. (özne: kitap)',
        'Die Bücher gefallen mir. → Kitapları beğendim. (özne çoğul → fiil çoğul)',
        'Das Essen schmeckt mir. → Yemeği beğendim.',
        '"Ich gefalle das Buch" ✗ — özne yanlış yerde.',
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Sınıf içi yardımlaşma',
      satirlar: [
        { de: 'Verstehst du mich?', tr: 'Beni anlıyor musun?', not: 'verstehen → Akkusativ' },
        { de: 'Ja, ich verstehe dich gut.', tr: 'Evet, seni iyi anlıyorum.', not: 'Akkusativ' },
        { de: 'Kann ich dir helfen?', tr: 'Sana yardım edebilir miyim?', not: 'helfen → Dativ' },
        { de: 'Das Buch gehört ihm.', tr: 'Kitap ona ait.', not: 'gehören → Dativ' },
        { de: 'Ich kenne ihn seit der Grundschule.', tr: 'Onu ilkokuldan beri tanıyorum.', not: 'kennen → Akkusativ' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Aynı kişi, iki ayrı biçim',
      dogal: 'Ich sehe ihn. (onu görüyorum) · Ich helfe ihm. (ona yardım ediyorum)',
      yapay: 'Ich helfe ihn. (yanlış — helfen Dativ ister)',
      aciklama:
        'Fiil hangi hâli istiyorsa zamir o biçime girer. Bu yüzden fiil öğrenirken hâlini de öğrenmek gerekir: "helfen + Dativ".',
    },
    {
      tur: 'dinleme',
      baslik: 'Kısa diyalog',
      metin:
        'Kannst du mir bitte helfen? Ja, natürlich. Was brauchst du? Ich verstehe die Aufgabe nicht. Kein Problem, ich erkläre sie dir.',
      satirlar: [
        { kisi: 'A', de: 'Kannst du mir bitte helfen?' },
        { kisi: 'B', de: 'Ja, natürlich. Was brauchst du?' },
        { kisi: 'A', de: 'Ich verstehe die Aufgabe nicht.' },
        { kisi: 'B', de: 'Kein Problem, ich erkläre sie dir.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru zamiri yaz.',
      parcalar: [
        'Verstehst du ', { bosluk: 0 }, '? (ben)\nIch kenne ', { bosluk: 1 },
        '. (o — erkek)\nIch helfe ', { bosluk: 2 }, '. (sen)',
      ],
      cevaplar: [
        { kabul: ['mich'], ipucu: 'Akkusativ' },
        { kabul: ['ihn'], ipucu: 'Akkusativ, eril' },
        { kabul: ['dir'], ipucu: 'helfen → Dativ' },
      ],
    },
    {
      id: 'a1-m4-d4-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Kannst du ____ helfen?',
      secenekler: [
        { id: 'a', metin: 'mir' },
        { id: 'b', metin: 'mich' },
        { id: 'c', metin: 'ich' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"helfen" Akkusativ değil Dativ ister.',
        c: 'Bu özne biçimidir.',
      },
      aciklama: 'helfen + Dativ. Türkçede de "bana yardım" dersin — sezgin doğru.',
      tuzaklar: [
        {
          kod: 'dativ-fiil',
          desen: /\b(helfe|hilft|helfen)\s+(mich|dich|ihn|uns|euch)\b/i,
          baslik: 'Dativ isteyen fiile Akkusativ verilmiş',
          aciklama: 'helfen, danken, gefallen, gehören, antworten fiilleri Dativ ister.',
          dogru: 'Ich helfe dir.',
          mikro: { yonerge: '"Sana yardım ediyorum." cümlesini yaz.', kabul: ['Ich helfe dir'] },
        },
      ],
    },
    {
      id: 'a1-m4-d4-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Özne biçimini nesne biçimiyle eşleştir (Akkusativ).',
      sol: [
        { id: 'z1', metin: 'ich' },
        { id: 'z2', metin: 'du' },
        { id: 'z3', metin: 'er' },
        { id: 'z4', metin: 'wir' },
        { id: 'z5', metin: 'ihr' },
      ],
      sag: [
        { id: 'a1', metin: 'mich' },
        { id: 'a2', metin: 'dich' },
        { id: 'a3', metin: 'ihn' },
        { id: 'a4', metin: 'uns' },
        { id: 'a5', metin: 'euch' },
      ],
      eslesme: { z1: 'a1', z2: 'a2', z3: 'a3', z4: 'a4', z5: 'a5' },
    },
    {
      id: 'a1-m4-d4-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Das Buch gefällt mich sehr.',
      hataliParca: 'mich',
      dogruParca: 'mir',
      kabul: ['Das Buch gefällt mir sehr', 'mir', 'Das Buch gefaellt mir sehr'],
      aciklama: '"gefallen" Dativ ister ve özne beğenilen şeydir.',
    },
    {
      id: 'a1-m4-d4-a5',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru?',
      soru: '"Bu kitabı beğendim." nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'Das Buch gefällt mir.' },
        { id: 'b', metin: 'Ich gefalle das Buch.' },
        { id: 'c', metin: 'Ich mag das Buch gern.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Özne yanlış yerde: beğenilen şey öznedir.',
        c: '"mögen" ve "gern" birlikte kullanılmaz; ikisi aynı işi yapar.',
      },
      aciklama: 'gefallen fiilinde özne beğenilen şeydir, kişi Dativ\'e girer.',
    },
    {
      id: 'a1-m4-d4-a6',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Doğru zamiri yaz (fiilin hâline dikkat).',
      parcalar: [
        'Ich danke ', { bosluk: 0 }, '. (siz — resmî)\nDas Handy gehört ',
        { bosluk: 1 }, '. (o — kadın)\nIch sehe ', { bosluk: 2 }, ' morgen. (siz — çoğul samimi)',
      ],
      cevaplar: [
        { kabul: ['Ihnen'], ipucu: 'danken → Dativ, resmî büyük harf' },
        { kabul: ['ihr'], ipucu: 'gehören → Dativ, dişil' },
        { kabul: ['euch'], ipucu: 'sehen → Akkusativ' },
      ],
    },
    {
      id: 'a1-m4-d4-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Bir arkadaşın zorlanıyor. Yardım teklif ediyorsun.',
      kabul: ['Kann ich dir helfen', 'Soll ich dir helfen', 'Brauchst du Hilfe'],
      ornekCevap: 'Kann ich dir helfen?',
    },
    {
      id: 'a1-m4-d4-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Soruya Almanca cevap ver.',
      soru: 'Wie gefällt dir Deutsch?',
      kabul: ['Deutsch gefällt mir', 'Es gefällt mir', 'Deutsch gefaellt mir'],
      ornekCevap: 'Deutsch gefällt mir sehr gut.',
      aciklama: 'Cevapta da özne "Deutsch"tur, kişi Dativ\'dedir.',
    },
  ],

  ozet: [
    'Almancada zamirin nesne biçimi ayrı bir kelimedir: ich → mich → mir.',
    'Türkçe "-i" hâli ≈ Akkusativ, "-e" hâli ≈ Dativ.',
    'helfen, danken, gefallen, gehören, antworten, schmecken → DATIV ister.',
    'gefallen ve schmecken fiillerinde özne, beğenilen şeydir.',
    'Fiili öğrenirken hangi hâli istediğini de öğren.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d4-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğa hangisi gelir?',
      soru: 'Ich kenne ____ gut. (o — erkek)',
      secenekler: [
        { id: 'a', metin: 'ihn' },
        { id: 'b', metin: 'ihm' },
        { id: 'c', metin: 'er' },
      ],
      dogruId: 'a',
      aciklama: 'kennen Akkusativ ister → ihn.',
    },
    {
      id: 'a1-m4-d4-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru zamiri yaz.',
      parcalar: ['Das Essen schmeckt ', { bosluk: 0 }, ' sehr gut. (ben)'],
      cevaplar: [{ kabul: ['mir'], ipucu: 'schmecken → Dativ' }],
    },
    {
      id: 'a1-m4-d4-s3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich danke dich für deine Hilfe.',
      hataliParca: 'dich',
      dogruParca: 'dir',
      kabul: ['Ich danke dir für deine Hilfe', 'dir'],
      aciklama: 'danken Dativ ister.',
    },
  ],

  kartlar: ['de-fragen', 'de-antworten', 'de-verstehen', 'de-schmecken', 'de-nett'],
  not: null,
  sonraki: 'a1-m4-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
