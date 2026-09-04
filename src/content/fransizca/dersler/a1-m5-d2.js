/**
 * DERS — A1 / Modül 5 / Ders 2
 * "Restoranda: sipariş vermek"
 *
 * İşlevsel ders. Yeni yapı olarak yalnız "je voudrais" kalıbını yükler
 * ama onu bir NEZAKET meselesi olarak öğretir: Türkçede "istiyorum"
 * gayet kibardır, Fransızcada "je veux" emir gibi duyulur. Bu fark
 * öğrenciye anlatılmazsa kaba konuşur ve nedenini anlamaz.
 */

export default {
  id: 'a1-m5-d2',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 2,
  baslik: 'Restoranda sipariş vermek',
  altBaslik: '"Je veux" değil "je voudrais": nezaket bir kalıptır',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dinleme', 'dusunme'],
  amac: 'Bu dersin sonunda restoranda kibarca sipariş verebilecek, garsonun sorularını anlayabilecek ve hesabı isteyebileceksin.',
  kazanim: '"je voudrais" ile kibar istek kurar; sipariş diyaloğunu baştan sona yürütür; kabul ve ret kalıplarını doğru kullanır.',
  onKosullar: ['a1-m5-d1'],
  sure: 15,
  baglam: {
    durum: 'Bir Fransız restoranındasın. Garson geliyor, sipariş veriyorsun ve sonunda hesabı istiyorsun.',
    neden: 'Sipariş vermek, dilin en sık kullanılan işlevlerinden biridir ve nezaket kalıpları burada en çok fark edilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Neden "je voudrais"?',
      metin:
        'Türkçede "bir kahve istiyorum" cümlesi kibardır. Fransızcada "je veux" (istiyorum) doğrudan ve sert duyulur; neredeyse emir gibidir. Kibar biçim "je voudrais"dir.',
      maddeler: [
        'je veux = istiyorum (sert, çocukların ya da çok samimi ortamın dili)',
        'je voudrais = istiyordum / rica etsem (standart kibar biçim)',
        '"je voudrais" bir koşul biçimidir ama A1’de KALIP olarak öğrenilir; çekimi ezberlenmez.',
        'Alternatif: "Je prends…" — kararını söylerken çok doğaldır.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Sipariş diyaloğunun kalıpları',
      kaliplar: [
        { fr: 'Vous désirez ?', kullanim: 'Garson sorar', ornek: '— Bonjour, vous désirez ?' },
        { fr: 'Je voudrais…', kullanim: 'Kibar istek', ornek: 'Je voudrais une salade, s’il vous plaît.' },
        { fr: 'Je prends…', kullanim: 'Karar bildirme', ornek: 'Je prends le menu à quinze euros.' },
        { fr: 'Et comme boisson ?', kullanim: 'İçecek sorusu', ornek: '— Et comme boisson ? — De l’eau, s’il vous plaît.' },
        { fr: 'L’addition, s’il vous plaît.', kullanim: 'Hesap isteme', ornek: 'L’addition, s’il vous plaît !' },
        { fr: 'C’était très bon.', kullanim: 'Beğeni', ornek: 'Merci, c’était très bon.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan iki hata',
      yanlis: 'Je veux un café. / — Vous voulez du sucre ? — Merci.',
      dogru: 'Je voudrais un café. / — Oui, merci. ya da — Non, merci.',
      neden:
        'Birincisi nezaket hatası. İkincisi anlam hatası: Fransızcada bir teklife tek başına "merci" demek REDDİR. Türkçede "teşekkürler" hem kabul hem ret olabildiği için öğrenci yanlış anlaşılır.',
    },
    {
      tur: 'anlatim',
      baslik: 'Bir fincan kahve mi, bir miktar kahve mi?',
      metin:
        'Sipariş verirken kısmi artikel değil, belirsiz artikel kullanılır; çünkü bir PORSİYON istiyorsun.',
      maddeler: [
        'Sipariş: "un café" (bir fincan), "une salade" (bir porsiyon)',
        'Genel içme: "je bois du café" (kahve içerim)',
        'İçecek sorusunda kısmi kalır: "de l’eau, s’il vous plaît"',
        'Şişe/bardak belirtirsen "de" gelir: "une bouteille d’eau".',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Restoranda',
      metin:
        '— Bonjour, vous désirez ?\n— Bonjour. Je voudrais le menu à quinze euros, s’il vous plaît.\n— Très bien. Et comme boisson ?\n— De l’eau, s’il vous plaît.\n— Vous voulez du pain ?\n— Oui, merci.\n(Après le repas)\n— L’addition, s’il vous plaît !\n— Voilà. Ça fait dix-huit euros cinquante.',
      sozluk: [
        { fr: 'Vous désirez ?', tr: 'Ne arzu edersiniz?' },
        { fr: 'comme boisson', tr: 'içecek olarak' },
        { fr: 'Ça fait…', tr: '… tutuyor' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d2-a1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Garson geldi. Bir kahve istiyorsun (kibar biçimde).',
      kabul: ['Je voudrais un café', "Je voudrais un café s'il vous plaît", 'Un café, s’il vous plaît', "Un café s'il vous plaît"],
      ornekCevap: 'Je voudrais un café, s’il vous plaît.',
      aciklama: '"Un café, s’il vous plaît" da tamamen doğaldır ve çok kullanılır.',
      tuzaklar: [
        {
          kod: 'je-veux-sert',
          desen: /\bje\s+veux\b/i,
          baslik: '"Je veux" fazla sert',
          aciklama: 'Türkçede "istiyorum" kibardır. Fransızcada "je veux" emir gibi duyulur; restoranda ve mağazada "je voudrais" kullanılır.',
          dogru: 'Je voudrais un café, s’il vous plaît.',
          mikro: { yonerge: 'Kibar biçimde bir çay iste.', kabul: ['Je voudrais un thé', "Je voudrais un thé s'il vous plaît"] },
        },
      ],
    },
    {
      id: 'a1-m5-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Garson "Vous voulez du sucre ?" diye sordu. Şeker İSTİYORSUN. Ne dersin?',
      secenekler: [
        { id: 'a', metin: 'Oui, merci.' },
        { id: 'b', metin: 'Merci.' },
        { id: 'c', metin: 'Non, merci.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Tek başına "merci" Fransızcada çoğunlukla RET anlamına gelir.',
        c: 'Bu açıkça rettir.',
      },
      aciklama: 'Kabul için "oui, merci", ret için "non, merci". Tek başına "merci" belirsizdir ve genelde ret sayılır.',
    },
    {
      id: 'a1-m5-d2-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Cümleyi kim söyler?',
      sol: [
        { id: 'c1', metin: 'Vous désirez ?' },
        { id: 'c2', metin: 'Je voudrais une salade.' },
        { id: 'c3', metin: 'Et comme boisson ?' },
        { id: 'c4', metin: 'L’addition, s’il vous plaît.' },
      ],
      sag: [
        { id: 'k1', metin: 'Garson' },
        { id: 'k2', metin: 'Müşteri' },
        { id: 'k3', metin: 'Garson' },
        { id: 'k4', metin: 'Müşteri' },
      ],
      eslesme: { c1: 'k1', c2: 'k2', c3: 'k3', c4: 'k4' },
    },
    {
      id: 'a1-m5-d2-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Artikeli yaz.',
      parcalar: ['Je voudrais ', { bosluk: 0 }, ' café et ', { bosluk: 1 }, ' eau, s’il vous plaît.'],
      cevaplar: [
        { kabul: ['un'], ipucu: 'bir fincan' },
        { kabul: ["de l'", 'de l’'], ipucu: 'bir miktar su' },
      ],
      aciklama: 'Porsiyon istiyorsan belirsiz artikel, miktar istiyorsan kısmi artikel kullanılır.',
    },
    {
      id: 'a1-m5-d2-a5',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru bilgiyi seç.',
      seslendir: 'Ça fait dix-huit euros cinquante.',
      secenekler: [
        { id: 'a', metin: '18,50 €' },
        { id: 'b', metin: '80,15 €' },
        { id: 'c', metin: '18,15 €' },
      ],
      dogruId: 'a',
      aciklama: '"dix-huit" = 18, "cinquante" = 50. Fiyatlarda kuruş için ayrıca kelime söylenmez.',
    },
    {
      id: 'a1-m5-d2-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yemek bitti. Hesabı istiyorsun.',
      kabul: ["L'addition s'il vous plaît", 'L’addition, s’il vous plaît', "L'addition", 'Je voudrais l’addition'],
      ornekCevap: 'L’addition, s’il vous plaît !',
    },
    {
      id: 'a1-m5-d2-a7',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Garsonun sorusuna Fransızca cevap ver.',
      soru: 'Et comme boisson, qu’est-ce que vous prenez ?',
      kabul: ['Je voudrais', 'Je prends', "De l'eau", 'De l’eau', 'Un café'],
      ornekCevap: 'Je prends de l’eau, s’il vous plaît.',
    },
  ],

  ozet: [
    'Kibar istek: "je voudrais" — "je veux" sert duyulur.',
    '"Je prends…" kararını bildirmenin doğal yoludur.',
    'Bir teklife tek başına "merci" demek REDDİR; kabul için "oui, merci".',
    'Sipariş verirken porsiyon için belirsiz artikel kullanılır: un café.',
    'İçecek sorusunda kısmi artikel kalabilir: de l’eau.',
    'Hesap isteme: "L’addition, s’il vous plaît."',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d2-s1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Kibar biçimde bir salata iste.',
      kabul: ['Je voudrais une salade', "Je voudrais une salade s'il vous plaît", 'Une salade, s’il vous plaît'],
      ornekCevap: 'Je voudrais une salade, s’il vous plaît.',
    },
    {
      id: 'a1-m5-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hangisi ret anlamına gelir?',
      soru: '— Vous voulez du pain ? — ____',
      secenekler: [
        { id: 'a', metin: 'Merci.' },
        { id: 'b', metin: 'Oui, merci.' },
        { id: 'c', metin: 'Oui, s’il vous plaît.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Bu kabuldür.', c: 'Bu da kabuldür.' },
    },
    {
      id: 'a1-m5-d2-s3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Sipariş cümlesini kur.',
      parcalar: ['un café', 'Je', 's’il vous plaît', 'voudrais'],
      dogruSira: [1, 3, 0, 2],
    },
  ],

  kartlar: ['fr-restaurant', 'fr-addition', 'fr-menu', 'fr-cafe', 'fr-vouloir'],
  not: null,
  sonraki: 'a1-m5-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
