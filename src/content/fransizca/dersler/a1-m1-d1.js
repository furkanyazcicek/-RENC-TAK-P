/**
 * DERS — A1 / Modül 1 / Ders 1
 * "Selamlaşma, nezaket ve tu/vous ayrımı"
 *
 * Bu ders KELİME DERSİ örneğidir. Kelime listesi ezberletmez; her ifadeyi
 * bir DURUMA bağlar. Öğrenci "bonjour = merhaba" değil, "sabah okulda
 * öğretmenini gördüğünde ne dersin" sorusunun cevabını öğrenir.
 *
 * FRANSIZCAYA ÖZGÜ EK YÜK: tu / vous ayrımı. Türkçede "sen / siz" farkı
 * vardır ve bu iyi bir başlangıç noktasıdır — ama Fransızcada bu fark
 * FİİL ÇEKİMİNİ de değiştirir ve yanlış seçim kabalık sayılır. Ayrıca
 * "vous" hem nezaket hem çoğul olduğu için Türkçedeki "siz" ile birebir
 * örtüşür; bu benzerlik öğrenciye açıkça söylenir, çünkü işini kolaylaştırır.
 */

export default {
  id: 'a1-m1-d1',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 1,
  baslik: 'Selamlaşma, nezaket ve tu/vous ayrımı',
  altBaslik: 'Günün saatine ve kişiye göre doğru selamı ve doğru hitabı seç',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dusunme', 'telaffuz'],
  amac: 'Bu dersin sonunda günün her saatinde doğru selamı verebilecek, karşındaki kişiye göre tu mu vous mu kullanacağını bilecek ve nezaket kalıplarını yerinde kullanabileceksin.',
  kazanim: 'Günün saatine uygun selamlaşma kalıbını seçer; tu/vous ayrımını bağlama göre doğru yapar; teşekkür, özür ve rica kalıplarını yerinde kullanır.',
  onKosullar: ['prea1-m1-d1'],
  sure: 13,
  baglam: {
    durum: 'Okulun ilk günü. Kapıda öğretmen var, sırada yeni bir arkadaş, öğle arasında kantinde biri sana yardım ediyor.',
    neden: 'Selamlaşma bir dilin ilk kapısıdır. Yanlış saatte yanlış selam vermek ya da öğretmene "tu" demek, kelimeyi hiç bilmemekten daha çok fark edilir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Fransızcada selam güne göre değişir, ama az',
      metin:
        'Türkçede "merhaba" günün her saatinde kullanılabilir. Fransızcada selam güne göre değişir ama sistem basittir: sınır akşam üstüdür ve öğrenmen gereken yalnızca iki kelime vardır.',
      maddeler: [
        'Sabahtan akşama kadar → Bonjour',
        'Akşam (yaklaşık 18:00 sonrası) → Bonsoir',
        'Her saatte, ama YALNIZ samimi ilişkide → Salut',
        'AYRILIRKEN, nazik → Au revoir · samimi → Salut / À plus',
        'YATMADAN ÖNCE → Bonne nuit (bu bir SELAM değil, VEDA’dır)',
        'Ayrılırken iyi dilek → Bonne journée (gündüz) / Bonne soirée (akşam)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Akşam biriyle karşılaşınca "Bonne nuit !" demek.',
      dogru: 'Akşam karşılaşınca "Bonsoir", ayrılırken ve yatmadan önce "Bonne nuit".',
      neden:
        'Türkçede "iyi geceler" hem karşılaşmada hem ayrılmada kullanılabilir. Fransızcada "Bonne nuit" YALNIZCA vedadır ve genelde yatmadan önce söylenir.',
    },
    {
      tur: 'anlatim',
      baslik: 'tu mu, vous mu? — Fransızcanın nezaket çizgisi',
      metin:
        'Bu konuda Türkçe sana yardım ediyor: Türkçedeki "sen / siz" ayrımı Fransızcadaki "tu / vous" ile neredeyse birebir örtüşür. Fark şu: Fransızcada bu seçim fiilin çekimini de değiştirir ve yanlış seçim daha çok fark edilir.',
      maddeler: [
        'tu → arkadaş, akran, aile, çocuklar. Fiil "tu" biçiminde çekilir: Comment tu t’appelles ?',
        'vous → öğretmen, satıcı, doktor, tanımadığın yetişkin. Fiil çoğul biçimde: Comment vous appelez-vous ?',
        'DİKKAT: "vous" aynı zamanda ÇOĞULDUR. Yani birden çok arkadaşa da "vous" denir — tıpkı Türkçedeki "siz" gibi.',
        'Emin değilsen "vous" ile başla. Karşı taraf isterse "On peut se tutoyer" (birbirimize sen diyebiliriz) der.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Aynı soru, iki hitap',
      basliklar: ['Ne soruyorsun?', 'tu (samimi)', 'vous (resmî)'],
      satirlar: [
        ['Adı', 'Comment tu t’appelles ?', 'Comment vous appelez-vous ?'],
        ['Nasılsın', 'Ça va ?', 'Comment allez-vous ?'],
        ['Nerelisin', 'Tu viens d’où ?', 'D’où venez-vous ?'],
        ['Yardım isteme', 'Tu peux m’aider ?', 'Pouvez-vous m’aider ?'],
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Tanışma kalıpları',
      kaliplar: [
        { fr: 'Comment tu t’appelles ?', kullanim: 'Adını sorarken (arkadaşa)', ornek: '— Comment tu t’appelles ? — Je m’appelle Selin.' },
        { fr: 'Je m’appelle… / Moi, c’est…', kullanim: 'Kendini tanıtırken', ornek: 'Salut, moi c’est Kerem.' },
        { fr: 'Enchanté(e) !', kullanim: 'İLK kez tanışırken — "memnun oldum"', ornek: '— Je suis Ali. — Enchantée, Ali.' },
        { fr: 'Ça va ?', kullanim: 'Hâl hatır sorma (samimi)', ornek: '— Ça va ? — Ça va bien, merci.' },
        { fr: 'Et toi ? / Et vous ?', kullanim: 'Topu geri atmak', ornek: '— Ça va bien. Et toi ?' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Nezaket kalıpları',
      kaliplar: [
        { fr: 'Merci / Merci beaucoup', kullanim: 'Teşekkür', ornek: 'Merci beaucoup pour ton aide.' },
        { fr: 'De rien / Je vous en prie', kullanim: '"Rica ederim" — ikincisi resmî', ornek: '— Merci ! — De rien !' },
        { fr: 'S’il vous plaît / S’il te plaît', kullanim: 'Lütfen — resmî ve samimi', ornek: 'Un café, s’il vous plaît.' },
        { fr: 'Excusez-moi / Pardon', kullanim: 'Bir şey SORMADAN ÖNCE, dikkat çekmek için', ornek: 'Excusez-moi, où est la gare ?' },
        { fr: 'Je suis désolé(e).', kullanim: 'Bir şey OLDUKTAN SONRA, özür dilerken', ornek: 'Je suis désolé, je suis en retard.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: '"Merci" her zaman kabul değildir',
      dogal: '— Vous voulez du thé ? — Oui, merci. (Evet, lütfen — KABUL)',
      yapay: '— Vous voulez du thé ? — Merci. (Fransızcada çoğunlukla "hayır, istemem" anlaşılır)',
      aciklama:
        'Türkçede "teşekkürler" hem kabul hem ret olabilir. Fransızcada bir teklife tek başına "merci" demek genelde REDDİR. Kabul için "oui, merci", ret için "non, merci" denir.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Bu dersin ses tuzakları',
      sesler: [
        {
          ipa: '/ʁ/',
          aciklama: '"bonjour", "merci", "au revoir" — üçünde de gırtlaktan "r" var. Dil ucun hareket etmemeli.',
          kelimeler: ['bonjour', 'merci', 'au revoir', 'bonsoir'],
        },
        {
          ipa: '/ɔ̃/',
          aciklama: '"bonjour" ve "bonsoir" kelimelerindeki ilk hece nazaldır: "bon" derken sondaki n ayrıca söylenmez.',
          kelimeler: ['bonjour', 'bonsoir', 'bonne nuit'],
        },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Kısa diyalog',
      metin:
        'Deniz : Bonjour, madame !\nMme Dubois : Bonjour, Deniz. Comment allez-vous ?\nDeniz : Ça va bien, merci. Et vous ?\nMme Dubois : Très bien, merci. Voici Maya. Elle est nouvelle dans la classe.\nDeniz : Salut, Maya. Enchanté !\nMaya : Enchantée !',
      sozluk: [
        { fr: 'Comment allez-vous ?', tr: 'Nasılsınız? (resmî)' },
        { fr: 'Et vous ?', tr: 'Ya siz?' },
        { fr: 'nouvelle dans la classe', tr: 'sınıfta yeni (dişil)' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d1-a1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE. Türkçe cümleyi çevirme; duruma bak ve Fransızca ne söyleneceğini yaz.',
      durum: 'Saat 08:30. Okula girdin, öğretmenini gördün.',
      kabul: ['Bonjour', 'Bonjour !', 'Bonjour madame', 'Bonjour monsieur'],
      ornekCevap: 'Bonjour, madame !',
      yaklasimNotu: 'Bu alıştırmada Türkçe cümle yok. Amaç, durumu görüp doğrudan Fransızca kalıba gitmek.',
      aciklama: 'Gündüz her zaman "Bonjour". Öğretmene "Salut" demek fazla samimi kaçar.',
    },
    {
      id: 'a1-m1-d1-a2',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Saat 19:00. Bir kafeye girdin, garson seni karşıladı. Ona ne dersin?',
      kabul: ['Bonsoir', 'Bonsoir !', 'Bonsoir monsieur', 'Bonsoir madame'],
      ornekCevap: 'Bonsoir.',
      aciklama: 'Akşam KARŞILAŞMA selamı "Bonsoir". "Bonne nuit" ise yalnızca ayrılırken kullanılır.',
      tuzaklar: [
        {
          kod: 'bonne-nuit-selam',
          desen: /bonne\s*nuit/i,
          baslik: '"Bonne nuit" selam değildir',
          aciklama: 'Türkçede "iyi geceler" hem karşılaşırken hem ayrılırken söylenebilir. Fransızcada "Bonne nuit" yalnızca AYRILIRKEN, çoğunlukla yatmadan önce kullanılır.',
          dogru: 'Bonsoir (karşılaşınca) / Bonne nuit (yatmadan önce)',
          mikro: { yonerge: 'Akşam bir kafeye girdin. Garsona ne dersin?', kabul: ['Bonsoir'] },
        },
      ],
    },
    {
      id: 'a1-m1-d1-a3',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Okul müdürüyle konuşuyorsun. Adını nasıl sorarsın?',
      secenekler: [
        { id: 'a', metin: 'Comment vous appelez-vous ?' },
        { id: 'b', metin: 'Comment tu t’appelles ?' },
        { id: 'c', metin: 'Qui es-tu ?' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"tu" arkadaşa ve akrana kullanılır; müdüre karşı fazla samimi ve kaba durur.',
        c: '"Sen kimsin?" demektir — sorgulayıcı, hatta tehditkâr duyulur.',
      },
      aciklama: 'Tanımadığın yetişkine her zaman "vous" ile başla. Fiil de ona göre çekilir.',
    },
    {
      id: 'a1-m1-d1-a4',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'İki cümle de dil bilgisi bakımından doğru. Hangisi bu durumda DOĞAL?',
      baglam: 'Birisi sana teşekkür etti: "Merci pour ton aide !"',
      secenekler: [
        {
          id: 'a',
          metin: 'De rien !',
          dogal: true,
          neden: 'Teşekküre verilen standart karşılık budur. Türkçedeki "bir şey değil"in yerini tutar.',
        },
        {
          id: 'b',
          metin: 'Bienvenue.',
          dogal: false,
          neden: '"Bienvenue" = "hoş geldin" demektir. Teşekküre karşılık olmaz; İngilizcedeki "You’re welcome" kalıbının yanlış aktarımıdır.',
        },
        {
          id: 'c',
          metin: 'Je demande.',
          dogal: false,
          neden: '"Rica ederim" ifadesinin kelime kelime çevirisi. Fransızcada böyle bir kalıp yoktur.',
        },
      ],
      aciklama: 'Kalıp ifadeler çevrilmez, olduğu gibi öğrenilir. "Rica ederim" → "De rien" ya da resmî biçimde "Je vous en prie".',
    },
    {
      id: 'a1-m1-d1-a5',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Diyalogdaki boşlukları kelime havuzundan doldur.',
      parcalar: [
        '— ', { bosluk: 0 }, ', Maya. Ça va ?\n— ',
        { bosluk: 1 }, ', ça va bien. Et toi ?\n— Ça va aussi. ',
        { bosluk: 2 }, ', c’est ton livre ?\n— Oui. ',
        { bosluk: 3 }, ' beaucoup !',
      ],
      havuz: ['Salut', 'Merci', 'Excuse-moi', 'Merci'],
      cevaplar: [
        { kabul: ['Salut', 'Bonjour', 'Bonsoir'], ipucu: 'selamlaşma' },
        { kabul: ['Merci', 'merci'], ipucu: 'teşekkür' },
        { kabul: ['Excuse-moi', 'excuse-moi', 'Pardon', 'Excusez-moi'], ipucu: 'bir şey sormadan önce' },
        { kabul: ['Merci', 'merci'], ipucu: 'teşekkür' },
      ],
      aciklama: 'Kelime havuzunda birden fazla doğru olabilir: "Salut", "Bonjour" ve "Bonsoir" bu diyalogda da geçerlidir.',
    },
    {
      id: 'a1-m1-d1-a6',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Her durumu doğru ifadeyle eşleştir.',
      sol: [
        { id: 'd1', metin: 'Biri sana yardım etti' },
        { id: 'd2', metin: 'Derse geç kaldın' },
        { id: 'd3', metin: 'Yeni biriyle tanıştın' },
        { id: 'd4', metin: 'Gece yatmadan önce ailene' },
        { id: 'd5', metin: 'Sokakta birine yol soracaksın' },
      ],
      sag: [
        { id: 'i1', metin: 'Merci beaucoup.' },
        { id: 'i2', metin: 'Je suis désolé, je suis en retard.' },
        { id: 'i3', metin: 'Enchanté !' },
        { id: 'i4', metin: 'Bonne nuit.' },
        { id: 'i5', metin: 'Excusez-moi, …' },
      ],
      eslesme: { d1: 'i1', d2: 'i2', d3: 'i3', d4: 'i4', d5: 'i5' },
      aciklama: 'Kalıpları durumla birlikte ezberle. "Hangi kelime?" değil, "hangi durumda?" diye düşün.',
    },
    {
      id: 'a1-m1-d1-a7',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Bonjour madame, comment tu t’appelles ?',
      hataliParca: 'tu t’appelles',
      dogruParca: 'vous appelez-vous',
      kabul: [
        'Bonjour madame, comment vous appelez-vous',
        'comment vous appelez-vous',
        'vous appelez-vous',
        'Comment vous appelez-vous',
      ],
      aciklama: '"Madame" diye hitap ettikten sonra "tu" kullanmak çelişkilidir. Hitap resmîyse fiil de resmî olmalı.',
      tuzaklar: [
        {
          kod: 'hitap-uyumsuz',
          desen: /madame.*\btu\b|monsieur.*\btu\b/i,
          baslik: 'Hitap ile fiil uyuşmuyor',
          aciklama: 'Fransızcada nezaket tek bir kelimeyle değil, bütün cümleyle kurulur. "Madame" dedikten sonra "tu" kullanmak, Türkçede "Hanımefendi, sen nasılsın?" demek gibidir.',
          dogru: 'Bonjour madame, comment vous appelez-vous ?',
          mikro: { yonerge: 'Öğretmenine resmî biçimde "Nasılsınız?" diye sor.', kabul: ['Comment allez-vous'] },
        },
      ],
    },
    {
      id: 'a1-m1-d1-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Fransızca soruya Fransızca cevap ver. Önce Türkçe kurma, doğrudan cevabı yaz.',
      soru: 'Ça va ?',
      kabul: [
        'Ça va', 'Ça va bien', 'Ça va bien merci', 'Oui ça va', 'Très bien merci',
        'Ça va, merci', 'Bien merci', 'Ça va pas mal', 'Oui, ça va bien',
      ],
      ornekCevap: 'Ça va bien, merci. Et toi ?',
      aciklama: '"Ça va ?" gerçek bir sağlık sorusu değil, bir nezaket kalıbıdır. Kısa cevap verip "Et toi ?" ile topu geri atmak en doğal karşılıktır.',
    },
  ],

  ozet: [
    'Selam güne göre değişir: Bonjour (gündüz), Bonsoir (akşam), Salut (samimi, her saat).',
    '"Bonne nuit" selam değil vedadır; yatmadan önce söylenir.',
    'tu = arkadaş/akran, vous = tanımadığın yetişkin VE çoğul. Emin değilsen vous.',
    'Hitap resmîyse fiil de resmî olmalı; "madame" deyip "tu" kullanılmaz.',
    'Excusez-moi = bir şey yapmadan ÖNCE. Je suis désolé = bir şey olduktan SONRA.',
    'Bir teklife tek başına "merci" demek çoğunlukla REDDİR; kabul için "oui, merci".',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d1-s1',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE.',
      durum: 'Saat 15:00. Bir mağazaya girdin, görevliyi selamlayacaksın.',
      kabul: ['Bonjour', 'Bonjour !', 'Bonjour madame', 'Bonjour monsieur'],
      ornekCevap: 'Bonjour.',
    },
    {
      id: 'a1-m1-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Boşluğa hangisi gelmeli?',
      soru: '____, où est la gare ?',
      secenekler: [
        { id: 'a', metin: 'Je suis désolé' },
        { id: 'b', metin: 'Excusez-moi' },
        { id: 'c', metin: 'De rien' },
      ],
      dogruId: 'b',
      secenekNotu: {
        a: 'Bu özür kalıbıdır; henüz bir şey olmadı.',
        c: '"De rien" teşekküre verilen karşılıktır.',
      },
      aciklama: 'Yol sorarken cümlenin ilk kelimesi neredeyse her zaman "Excusez-moi" ya da "Pardon" olur.',
    },
    {
      id: 'a1-m1-d1-s3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak doğru soruyu kur (resmî hitap).',
      parcalar: ['vous', 'Comment', 'allez'],
      dogruSira: [1, 2, 0],
    },
  ],

  kartlar: ['fr-bonjour', 'fr-salut', 'fr-merci', 'fr-sil-vous-plait', 'fr-excusez-moi', 'fr-au-revoir', 'fr-enchante'],
  not: 'not-a1-m1-d1',
  sonraki: 'a1-m1-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
