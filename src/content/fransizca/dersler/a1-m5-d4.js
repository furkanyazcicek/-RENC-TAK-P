/**
 * DERS — A1 / Modül 5 / Ders 4
 * "Alışveriş, fiyat ve para"
 *
 * İşlevsel ders. Yeni dil bilgisi yükü azdır; modülün yapılarını (kısmi
 * artikel, miktar, kibar istek) gerçek bir alışveriş akışında çalıştırır.
 *
 * DERSİN ÖZEL KATKISI: FİYAT SORMANIN KAYIT FARKI. "Quel est le prix ?"
 * kitabi, "C'est combien ?" günlüktür. Öğrenci ders kitaplarında birinciyi
 * görür, sokakta ikinciyi duyar ve şaşırır.
 */

export default {
  id: 'a1-m5-d4',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 4,
  baslik: 'Alışveriş, fiyat ve para',
  altBaslik: 'Fiyat sor, pazarlık yap, ödeme biçimini söyle',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dinleme', 'dusunme'],
  amac: 'Bu dersin sonunda fiyat sorabilecek, sayıları doğru duyabilecek ve ödeme biçimini söyleyebileceksin.',
  kazanim: 'Fiyat sorma kalıplarını kayıt farkıyla kullanır; euro ve kuruşu doğru söyler; ödeme biçimini bildirir.',
  onKosullar: ['a1-m5-d3'],
  sure: 14,
  baglam: {
    durum: 'Pazardasın ve bir mağazadasın: fiyat soruyorsun, miktar söylüyorsun, ödeme yapıyorsun.',
    neden: 'Alışveriş, bir ülkede günlük hayatın en sık tekrarlanan konuşmasıdır ve sayıları duymayı gerektirir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Fiyat sormanın üç yolu',
      metin:
        'Üçü de doğrudur ama kayıtları farklıdır. Öğrenci kitapta birini, sokakta diğerini duyar; ikisini de tanımalı.',
      maddeler: [
        'C’est combien ? → en yaygın, günlük, her yerde geçer.',
        'Ça coûte combien ? → aynı anlam, biraz daha vurgulu.',
        'Ça fait combien ? → toplam tutar sorulurken (kasada).',
        'Quel est le prix de… ? → resmî ve kitabi; konuşmada nadirdir.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Alışveriş kalıpları',
      kaliplar: [
        { fr: 'Vous avez … ?', kullanim: 'Bir şey var mı?', ornek: 'Vous avez des pommes ?' },
        { fr: 'Je voudrais un kilo de…', kullanim: 'Miktar isteme', ornek: 'Je voudrais un kilo de tomates.' },
        { fr: 'C’est combien ?', kullanim: 'Fiyat sorma', ornek: '— C’est combien ? — Trois euros le kilo.' },
        { fr: 'Ça fait combien ?', kullanim: 'Toplam', ornek: 'Ça fait combien en tout ?' },
        { fr: 'Je paie par carte / en espèces.', kullanim: 'Ödeme biçimi', ornek: 'Je paie par carte, s’il vous plaît.' },
        { fr: 'C’est trop cher.', kullanim: 'Pahalı bulma', ornek: 'Désolé, c’est trop cher pour moi.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Je paie avec la carte. / Ça coûte cinq euros et cinquante centimes.',
      dogru: 'Je paie par carte. / Ça coûte cinq euros cinquante.',
      neden:
        'Birincisi: Türkçedeki "kartla" ifadesi "avec"e çevriliyor; doğru edat "par"dır. İkincisi: Fransızcada kuruş için ayrıca kelime söylenmez, sayı doğrudan eklenir.',
    },
    {
      tur: 'tablo',
      baslik: 'Fiyat söyleme',
      basliklar: ['Yazılış', 'Söyleniş', 'Not'],
      satirlar: [
        ['3 €', 'trois euros', 'tam sayı'],
        ['5,50 €', 'cinq euros cinquante', '"centimes" söylenmez'],
        ['12,90 €', 'douze euros quatre-vingt-dix', 'kuruş doğrudan eklenir'],
        ['3 €/kg', 'trois euros le kilo', 'birim fiyatı'],
        ['0,80 €', 'quatre-vingts centimes', 'bir euronun altında "centimes" denir'],
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Pazarda',
      metin:
        '— Bonjour ! Vous avez des tomates ?\n— Oui, elles sont très bonnes aujourd’hui. Trois euros le kilo.\n— Alors, je voudrais deux kilos, s’il vous plaît. Et un peu de basilic.\n— Voilà. Avec ça ?\n— C’est tout, merci. Ça fait combien ?\n— Six euros cinquante.\n— Je paie par carte, c’est possible ?\n— Bien sûr. Merci et bonne journée !',
      sozluk: [
        { fr: 'Avec ça ?', tr: 'Başka? (satıcının sorusu)' },
        { fr: 'C’est tout', tr: 'Hepsi bu' },
        { fr: 'c’est possible ?', tr: 'mümkün mü?' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d4-a1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Bir çantanın fiyatını soruyorsun (günlük dille).',
      kabul: ["C'est combien", 'C’est combien', 'Ça coûte combien', 'Combien ça coûte'],
      ornekCevap: 'C’est combien ?',
      aciklama: 'Günlük dilde en yaygın biçim budur; "Quel est le prix ?" kitabi kalır.',
    },
    {
      id: 'a1-m5-d4-a2',
      tur: 'hata-bul',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je paie avec la carte.',
      hataliParca: 'avec la carte',
      dogruParca: 'par carte',
      kabul: ['Je paie par carte', 'par carte', 'Je paye par carte'],
      aciklama: 'Ödeme biçimi "par carte" ya da "en espèces" olarak söylenir; "avec" kullanılmaz.',
      tuzaklar: [
        {
          kod: 'odeme-avec',
          desen: /\bavec\s+(la\s+)?carte\b/i,
          baslik: 'Ödemede "avec" kullanılmış',
          aciklama: 'Türkçedeki "kartla" ifadesi doğrudan "avec"e çevriliyor. Fransızcada ödeme biçimi "par" ya da "en" edatıyla söylenir.',
          dogru: 'Je paie par carte.',
          mikro: { yonerge: '"Nakit ödüyorum." cümlesini yaz.', kabul: ['Je paie en espèces', 'Je paye en espèces'] },
        },
      ],
    },
    {
      id: 'a1-m5-d4-a3',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru fiyatı seç.',
      seslendir: 'Ça fait six euros cinquante.',
      secenekler: [
        { id: 'a', metin: '6,50 €' },
        { id: 'b', metin: '16,50 €' },
        { id: 'c', metin: '6,15 €' },
      ],
      dogruId: 'a',
      aciklama: '"six" (6) ile "seize" (16) karıştırılmamalı; ikisi çok yakın duyulur.',
    },
    {
      id: 'a1-m5-d4-a4',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'İfadeyi anlamıyla eşleştir.',
      sol: [
        { id: 'f1', metin: 'C’est combien ?' },
        { id: 'f2', metin: 'Ça fait combien ?' },
        { id: 'f3', metin: 'C’est trop cher.' },
        { id: 'f4', metin: 'Je paie en espèces.' },
        { id: 'f5', metin: 'Avec ça ?' },
      ],
      sag: [
        { id: 'g1', metin: 'Bu ne kadar?' },
        { id: 'g2', metin: 'Toplam ne kadar tuttu?' },
        { id: 'g3', metin: 'Çok pahalı.' },
        { id: 'g4', metin: 'Nakit ödüyorum.' },
        { id: 'g5', metin: 'Başka bir şey? (satıcı)' },
      ],
      eslesme: { f1: 'g1', f2: 'g2', f3: 'g3', f4: 'g4', f5: 'g5' },
    },
    {
      id: 'a1-m5-d4-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları doldur.',
      parcalar: ['Je voudrais deux kilos ', { bosluk: 0 }, ' tomates. Ça fait ', { bosluk: 1 }, ' ?'],
      cevaplar: [
        { kabul: ['de'], ipucu: 'miktar ifadesi' },
        { kabul: ['combien'], ipucu: 'ne kadar' },
      ],
      aciklama: 'Miktar belirtildiği için artikel değil "de" gelir.',
    },
    {
      id: 'a1-m5-d4-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Bir kilo elma istiyorsun (kibar biçimde).',
      kabul: ['Je voudrais un kilo de pommes', "Je voudrais un kilo de pommes s'il vous plaît", 'Un kilo de pommes, s’il vous plaît'],
      ornekCevap: 'Je voudrais un kilo de pommes, s’il vous plaît.',
    },
    {
      id: 'a1-m5-d4-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Satıcının sorusuna Fransızca cevap ver.',
      soru: 'Vous payez comment, par carte ou en espèces ?',
      kabul: ['Par carte', 'En espèces', 'Je paie par carte', 'Je paie en espèces'],
      ornekCevap: 'Par carte, s’il vous plaît.',
      aciklama: 'Kısa cevap yeterlidir; tam cümle kurmak zorunda değilsin.',
    },
  ],

  ozet: [
    'Fiyat sorma: C’est combien ? (günlük) · Quel est le prix ? (resmî).',
    'Toplam sorma: Ça fait combien ?',
    'Kuruş için ayrıca kelime söylenmez: cinq euros cinquante.',
    'Bir euronun altında "centimes" denir: quatre-vingts centimes.',
    'Ödeme biçimi: par carte / en espèces — "avec" kullanılmaz.',
    'Birim fiyatı: trois euros LE kilo.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d4-s1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Kasada toplam tutarı soruyorsun.',
      kabul: ['Ça fait combien', 'Ça fait combien ?', "C'est combien"],
      ornekCevap: 'Ça fait combien ?',
    },
    {
      id: 'a1-m5-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Nakit ödüyorum." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'Je paie en espèces.' },
        { id: 'b', metin: 'Je paie avec argent.' },
        { id: 'c', metin: 'Je paie par argent.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"avec" ödemede kullanılmaz.', c: 'Kalıp "en espèces"tir.' },
    },
    {
      id: 'a1-m5-d4-s3',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve duyduğun cümleyi yaz.',
      seslendir: 'Ça fait douze euros cinquante.',
      kabul: ['Ça fait douze euros cinquante', 'Ca fait douze euros cinquante'],
    },
  ],

  kartlar: ['fr-prix', 'fr-euro', 'fr-payer', 'fr-acheter', 'fr-marche', 'fr-boulangerie'],
  not: null,
  sonraki: 'a1-m5-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
