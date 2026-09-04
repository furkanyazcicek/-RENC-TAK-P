/**
 * DERS — A1 / Modül 3 / Ders 2
 * "Saat sorma ve söyleme"
 *
 * Saat, A1'in en çok kullanılan ama en çok unutulan becerisidir.
 * Fransızcada iki ayrı sistem var: günlük konuşmadaki 12 saatlik sistem
 * (et quart, et demie, moins le quart) ve resmî 24 saatlik sistem
 * (quatorze heures trente). Öğrenci ikisini de duyacak; ikisi de verilir.
 *
 * TÜRKÇEDEN FARK: Türkçede "saat üç buçuk" derken "saat" kelimesi
 * düşebilir. Fransızcada "heures" ASLA düşmez ve kişisiz "il est"
 * kalıbı zorunludur.
 */

export default {
  id: 'a1-m3-d2',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 2,
  baslik: 'Saat sorma ve söyleme',
  altBaslik: 'Günlük ve resmî iki sistem — ikisini de tanı',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dinleme', 'gramer'],
  amac: 'Bu dersin sonunda saati sorabilecek, günlük ve resmî biçimde söyleyebilecek ve bir programı saatlerle anlatabileceksin.',
  kazanim: 'Saati "il est" kalıbıyla söyler; et quart / et demie / moins le quart yapılarını kullanır; 24 saatlik resmî biçimi okur.',
  onKosullar: ['a1-m3-d1'],
  sure: 14,
  baglam: {
    durum: 'Tren istasyonundasın. Kalkış saatleri anonsta 24 saatlik sistemle söyleniyor ama yanındaki kişi sana günlük dille cevap veriyor.',
    neden: 'Saat anlaşılmadan randevu, ders, tren ve buluşma konuşulamaz. İki sistemi de tanımayan öğrenci yarısını kaçırır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Saat kişisiz "il" ile söylenir',
      metin:
        'Türkçede "saat üç" derken özne yoktur. Fransızcada her cümlede özne gerektiği için kişisiz bir "il" kullanılır — bu "o" değildir, kimseyi göstermez.',
      maddeler: [
        'Quelle heure est-il ? → Saat kaç?',
        'Il est trois heures. → Saat üç.',
        '"heures" kelimesi ASLA düşmez: "Il est trois" anlamsızdır.',
        'Saat bir için tekil: Il est une heure. (une, un değil — heure dişildir)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Günlük sistem',
      basliklar: ['Saat', 'Fransızca', 'Anlamı'],
      satirlar: [
        ['3:00', 'Il est trois heures.', 'tam'],
        ['3:15', 'Il est trois heures et quart.', 'çeyrek geçe'],
        ['3:30', 'Il est trois heures et demie.', 'buçuk'],
        ['3:45', 'Il est quatre heures moins le quart.', 'çeyrek kala (bir sonraki saatten)'],
        ['3:10', 'Il est trois heures dix.', 'on geçe'],
        ['3:50', 'Il est quatre heures moins dix.', 'on kala'],
        ['12:00', 'Il est midi.', 'öğlen'],
        ['00:00', 'Il est minuit.', 'gece yarısı'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Il est trois heures quarante-cinq. (günlük konuşmada)',
      dogru: 'Il est quatre heures moins le quart.',
      neden:
        'Türkçede "üç kırk beş" demek doğaldır. Fransızcada günlük konuşmada yarım saatten sonrası BİR SONRAKİ saatten geri sayılır. "Trois heures quarante-cinq" yanlış değildir ama resmî/yazılı sisteme aittir.',
    },
    {
      tur: 'anlatim',
      baslik: 'Resmî 24 saatlik sistem',
      metin:
        'Tren, uçak, sinema, randevu ve televizyon programlarında 24 saatlik sistem kullanılır. Burada "et quart" gibi ifadeler YOKTUR; sayı olduğu gibi okunur.',
      maddeler: [
        '14:30 → quatorze heures trente',
        '20:45 → vingt heures quarante-cinq',
        '08:05 → huit heures cinq',
        'Resmî sistemde "midi" ve "minuit" yerine "douze heures" ve "zéro heure" denir.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Saatle ilgili kalıplar',
      kaliplar: [
        { fr: 'Quelle heure est-il ?', kullanim: 'Saati sorma', ornek: 'Excusez-moi, quelle heure est-il ?' },
        { fr: 'Il est … heures.', kullanim: 'Saati söyleme', ornek: 'Il est sept heures et demie.' },
        { fr: 'À quelle heure… ?', kullanim: 'Ne zaman?', ornek: 'À quelle heure commence le cours ?' },
        { fr: 'à … heures', kullanim: 'Saatte', ornek: 'Le film commence à vingt heures.' },
        { fr: 'vers … heures', kullanim: 'Civarında', ornek: 'On se voit vers cinq heures.' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Liaison saatlerde zorunludur',
      sesler: [
        {
          ipa: '/z/ /t/',
          aciklama: 'Sayının son sessizi "heures" kelimesine bağlanır: "deux heures" → "dö-zör", "trois heures" → "trua-zör", "huit heures" → "üi-tör", "neuf heures" → "növ-ör" (f → v).',
          kelimeler: ['deux heures', 'trois heures', 'six heures', 'huit heures', 'neuf heures'],
        },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Programım',
      metin:
        'Je me lève à sept heures. Je prends le petit-déjeuner à sept heures et quart.\nLes cours commencent à huit heures et demie et finissent à cinq heures moins le quart.\nLe soir, je fais mes devoirs vers sept heures et je me couche à onze heures.',
      sozluk: [
        { fr: 'vers', tr: 'civarında' },
        { fr: 'commencer', tr: 'başlamak' },
        { fr: 'finir', tr: 'bitmek' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d2-a1',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Saati Fransızcasıyla eşleştir.',
      sol: [
        { id: 's1', metin: '4:00' },
        { id: 's2', metin: '4:15' },
        { id: 's3', metin: '4:30' },
        { id: 's4', metin: '4:45' },
        { id: 's5', metin: '12:00 (öğlen)' },
      ],
      sag: [
        { id: 'f1', metin: 'quatre heures' },
        { id: 'f2', metin: 'quatre heures et quart' },
        { id: 'f3', metin: 'quatre heures et demie' },
        { id: 'f4', metin: 'cinq heures moins le quart' },
        { id: 'f5', metin: 'midi' },
      ],
      eslesme: { s1: 'f1', s2: 'f2', s3: 'f3', s4: 'f4', s5: 'f5' },
      aciklama: '45 dakikada bir sonraki saatten geri sayılır: 4:45 = "beşe çeyrek kala".',
    },
    {
      id: 'a1-m3-d2-a2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Saati tamamla.',
      parcalar: ['Il est ', { bosluk: 0 }, ' heures et ', { bosluk: 1 }, ' . (7:30)'],
      cevaplar: [
        { kabul: ['sept'], ipucu: '7' },
        { kabul: ['demie'], ipucu: 'buçuk' },
      ],
      aciklama: '"demie" burada dişildir çünkü "heure" dişildir. "midi et demi" derken ise erildir.',
    },
    {
      id: 'a1-m3-d2-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Il est trois.',
      hataliParca: 'trois',
      dogruParca: 'trois heures',
      kabul: ['Il est trois heures', 'trois heures'],
      aciklama: 'Türkçede "saat üç" derken "saat" düşebilir; Fransızcada "heures" asla düşmez.',
      tuzaklar: [
        {
          kod: 'heures-dusmesi',
          desen: /\bil\s+est\s+(une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze)\s*[.!?]?\s*$/i,
          baslik: '"heures" kelimesi düşmüş',
          aciklama: 'Türkçede "saat üç" ifadesinde birim kelimesi düşebilir. Fransızcada "heures" cümlenin zorunlu parçasıdır.',
          dogru: 'Il est trois heures.',
          mikro: { yonerge: '"Saat beş." cümlesini yaz.', kabul: ['Il est cinq heures'] },
        },
      ],
    },
    {
      id: 'a1-m3-d2-a4',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Tren anonsu "dix-huit heures quarante" diyor. Saat kaç?',
      secenekler: [
        { id: 'a', metin: '18:40' },
        { id: 'b', metin: '8:40' },
        { id: 'c', metin: '18:14' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"dix-huit" = 18, "huit" = 8.' },
      aciklama: 'Resmî sistemde sayı olduğu gibi okunur; "et quart / moins" ifadeleri kullanılmaz.',
    },
    {
      id: 'a1-m3-d2-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Sokakta birine saati soracaksın (kibar biçimde).',
      kabul: ['Quelle heure est-il', 'Excusez-moi quelle heure est-il', 'Vous avez l’heure', "Excusez-moi, quelle heure est-il"],
      ornekCevap: 'Excusez-moi, quelle heure est-il ?',
      aciklama: 'Günlük dilde "Vous avez l’heure ?" da çok kullanılır.',
    },
    {
      id: 'a1-m3-d2-a6',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve duyduğun cümleyi yaz.',
      seslendir: 'Le cours commence à huit heures et demie.',
      kabul: ['Le cours commence à huit heures et demie', 'Le cours commence a huit heures et demie'],
      aciklama: '"huit heures" bağlanarak "üi-tör" diye duyulur; bu liaison saatlerde zorunludur.',
    },
    {
      id: 'a1-m3-d2-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver.',
      soru: 'À quelle heure est-ce que tu te lèves ?',
      kabul: ['Je me lève à', 'Je me leve a', 'Je me lève'],
      ornekCevap: 'Je me lève à sept heures.',
    },
  ],

  ozet: [
    'Saat kişisiz "il est" ile söylenir: Il est trois heures.',
    '"heures" kelimesi asla düşmez.',
    'Günlük sistem: et quart · et demie · moins le quart.',
    'Yarım saatten sonrası bir sonraki saatten geri sayılır.',
    'Resmî sistem 24 saatliktir ve sayı olduğu gibi okunur.',
    'Sayı ile "heures" arasında liaison zorunludur: deux heures → "dö-zör".',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d2-s1',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Saati yaz (9:15).',
      parcalar: ['Il est neuf heures ', { bosluk: 0 }, ' .'],
      cevaplar: [{ kabul: ['et quart'], ipucu: 'çeyrek geçe' }],
    },
    {
      id: 'a1-m3-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi 10:45’i anlatır?',
      soru: 'Günlük konuşmada 10:45 nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'onze heures moins le quart' },
        { id: 'b', metin: 'dix heures quarante-cinq' },
        { id: 'c', metin: 'dix heures et quart' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Doğru ama resmî/yazılı sisteme aittir.',
        c: 'Bu 10:15 demektir.',
      },
    },
    {
      id: 'a1-m3-d2-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Derslerin saat sekiz buçukta başladığını söyle.',
      kabul: ['Les cours commencent à huit heures et demie', 'Le cours commence à huit heures et demie'],
      ornekCevap: 'Les cours commencent à huit heures et demie.',
    },
  ],

  kartlar: ['fr-heure', 'fr-matin', 'fr-soir', 'fr-commencer', 'fr-finir'],
  not: null,
  sonraki: 'a1-m3-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
