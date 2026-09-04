/**
 * DERS — A1 / Modül 1 / Ders 6
 * "Soru sormanın üç yolu ve kendini tanıtan metin"
 *
 * Bu MODÜL KAPANIŞ dersidir: yeni bir konu yükler (soru kurma) ve sonra
 * modülün tamamını tek bir yazma göreviyle toplar.
 *
 * NEDEN ÜÇ YOL BİRLİKTE: öğrenci sınavda devrik biçimi, dizide ve
 * sokakta tonlamalı biçimi görecek. Yalnız birini öğretmek, diğerini
 * duyduğunda "bu yanlış mı?" diye düşündürür. Üçü aynı anda, KAYIT
 * farkıyla birlikte verilir.
 */

export default {
  id: 'a1-m1-d6',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 6,
  baslik: 'Soru sormanın üç yolu ve kendini tanıt',
  altBaslik: 'Tonlama · est-ce que · devrik — hangisi nerede kullanılır',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'gramer', 'yazma'],
  amac: 'Bu dersin sonunda aynı soruyu üç farklı biçimde sorabilecek, hangisinin nerede kullanıldığını bilecek ve kendini tanıtan bağlantılı bir metin yazabileceksin.',
  kazanim: 'Soru kurmanın üç yolunu üretir ve kayıt farkını açıklar; W-soru kelimelerini doğru yerleştirir; kendini tanıtan 5–6 cümlelik metin yazar.',
  onKosullar: ['a1-m1-d5'],
  sure: 16,
  baglam: {
    durum: 'Bir Fransız okuluyla yazışıyorsun. Hem soru soracaksın hem de kendini tanıtan kısa bir metin yazacaksın.',
    neden: 'Soru sormak, dili öğrenmenin motorudur. Soru soramayan öğrenci konuşmayı sürdüremez, yalnız cevap verir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Aynı soru, üç biçim',
      metin:
        'Türkçede soru "mi" ekiyle kurulur ve kelime sırası değişmez. Fransızcada üç ayrı yol vardır; üçü de doğrudur ama kullanıldıkları yer farklıdır.',
      maddeler: [
        '1) TONLAMA (konuşma dili): Tu parles français ? — Sesin sonda yükselir. En yaygın biçim.',
        '2) EST-CE QUE (her yerde güvenli): Est-ce que tu parles français ? — Kelime sırası bozulmaz.',
        '3) DEVRİK (yazı ve resmî): Parles-tu français ? — Fiil ile özne yer değiştirir, araya tire girer.',
        'Sınavda ve resmî yazışmada 2. ve 3. biçim beklenir; 1. biçim yalnız konuşmada uygundur.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Üç biçim yan yana',
      basliklar: ['Tonlama', 'est-ce que', 'Devrik'],
      satirlar: [
        ['Tu es turc ?', 'Est-ce que tu es turc ?', 'Es-tu turc ?'],
        ['Vous parlez français ?', 'Est-ce que vous parlez français ?', 'Parlez-vous français ?'],
        ['Tu habites où ?', 'Où est-ce que tu habites ?', 'Où habites-tu ?'],
        ['Il a quel âge ?', 'Quel âge est-ce qu’il a ?', 'Quel âge a-t-il ?'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Soru kelimeleri nereye gider?',
      metin:
        'Türkçede soru kelimesi cümlenin ortasında kalır ("Nerede oturuyorsun?" değil "Sen nerede oturuyorsun?"). Fransızcada soru kelimesi ya BAŞA gider ya SONA kalır — ortada kalmaz.',
      maddeler: [
        'qui = kim · que / quoi = ne · où = nerede · quand = ne zaman',
        'comment = nasıl · pourquoi = neden · combien = ne kadar · quel = hangi',
        'Konuşmada sona: Tu habites où ?',
        'Yazıda başa: Où habites-tu ? / Où est-ce que tu habites ?',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Où tu habites ? (yazılı sınavda)',
      dogru: 'Où est-ce que tu habites ? / Où habites-tu ?',
      neden:
        'Türkçedeki kelime sırası korunarak kurulan bu biçim konuşmada duyulur ama YAZIDA kabul edilmez. Öğrenci konuşmada duyduğu biçimi sınavda kullanınca puan kaybeder.',
    },
    {
      tur: 'anlatim',
      baslik: 'Devrik biçimde iki küçük kural',
      metin:
        'Devrik soru kurarken iki teknik ayrıntı var; ikisi de unutulursa cümle yanlış görünür.',
      maddeler: [
        'Fiil ile özne arasına TİRE konur: Parles-tu ? (Parles tu ? değil)',
        'Üçüncü kişide fiil sesli harfle bitiyorsa araya -t- girer: A-t-il ? / Parle-t-elle ?',
        'Bu -t- bir anlam taşımaz; yalnız iki sesli harfin çarpışmasını engeller.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Kendini tanıtan metnin iskeleti',
      kaliplar: [
        { fr: 'Je m’appelle…', kullanim: 'Ad', ornek: 'Je m’appelle Ada.' },
        { fr: 'J’ai … ans.', kullanim: 'Yaş', ornek: 'J’ai dix-sept ans.' },
        { fr: 'Je suis… / Je viens de…', kullanim: 'Milliyet ve köken', ornek: 'Je suis turque et je viens d’Izmir.' },
        { fr: 'J’habite à…', kullanim: 'Yaşadığın yer', ornek: 'J’habite à Izmir avec ma famille.' },
        { fr: 'Je parle…', kullanim: 'Diller', ornek: 'Je parle turc, anglais et un peu français.' },
        { fr: 'J’apprends le français parce que…', kullanim: 'Neden öğreniyorsun', ornek: 'J’apprends le français parce que j’aime cette langue.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Örnek tanıtım metni',
      metin:
        'Bonjour ! Je m’appelle Ada Yılmaz. J’ai dix-sept ans et je suis turque.\nJ’habite à Izmir avec ma famille. Je suis élève au lycée.\nJe parle turc, anglais et un peu français.\nJ’apprends le français parce que je voudrais étudier en France.\nEt vous ? Vous venez d’où ?',
      sozluk: [
        { fr: 'parce que', tr: 'çünkü' },
        { fr: 'je voudrais', tr: 'istiyorum (kibar)' },
        { fr: 'apprendre', tr: 'öğrenmek' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d6-a1',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Kelimeleri sıralayarak "est-ce que" ile soru kur.',
      parcalar: ['tu', 'Est-ce que', 'français', 'parles'],
      dogruSira: [1, 0, 3, 2],
      aciklama: '"Est-ce que" kalıbı cümlenin başına eklenir ve geri kalan sıra hiç değişmez. En güvenli soru biçimi budur.',
    },
    {
      id: 'a1-m1-d6-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Yazılı sınavda hangisi uygundur?',
      soru: 'Nerede oturduğunu soruyorsun (yazılı sınav).',
      secenekler: [
        { id: 'a', metin: 'Où est-ce que tu habites ?' },
        { id: 'b', metin: 'Où tu habites ?' },
        { id: 'c', metin: 'Tu habites où ?' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Konuşmada duyulur ama yazıda kabul edilmez.',
        c: 'Bu da konuşma dilidir; sınavda puan kaybettirir.',
      },
      aciklama: 'Üç biçim de anlaşılır, ama kayıt (resmiyet düzeyi) farklıdır. Yazıda est-ce que ya da devrik biçim kullanılır.',
    },
    {
      id: 'a1-m1-d6-a3',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Parles tu français ?',
      hataliParca: 'Parles tu',
      dogruParca: 'Parles-tu',
      kabul: ['Parles-tu français', 'Parles-tu français ?', 'Parles-tu'],
      aciklama: 'Devrik soruda fiil ile özne arasına tire konur. Tire yoksa cümle devrik sayılmaz.',
    },
    {
      id: 'a1-m1-d6-a4',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Devrik soruyu tamamla (araya gereken harfi unutma).',
      parcalar: ['Quel âge ', { bosluk: 0 }, ' ?'],
      cevaplar: [{ kabul: ['a-t-il', 'a-t-elle', 'as-tu', 'avez-vous'], ipucu: 'iki sesli çarpışırsa araya -t- girer' }],
      aciklama: '"a" ile "il" arasında iki sesli çarpışır; araya anlamsız bir -t- eklenir: a-t-il.',
    },
    {
      id: 'a1-m1-d6-a5',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Soru kelimesini anlamıyla eşleştir.',
      sol: [
        { id: 's1', metin: 'où' },
        { id: 's2', metin: 'quand' },
        { id: 's3', metin: 'pourquoi' },
        { id: 's4', metin: 'combien' },
        { id: 's5', metin: 'comment' },
      ],
      sag: [
        { id: 'a1', metin: 'nerede' },
        { id: 'a2', metin: 'ne zaman' },
        { id: 'a3', metin: 'neden' },
        { id: 'a4', metin: 'ne kadar' },
        { id: 'a5', metin: 'nasıl' },
      ],
      eslesme: { s1: 'a1', s2: 'a2', s3: 'a3', s4: 'a4', s5: 'a5' },
    },
    {
      id: 'a1-m1-d6-a6',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Her adımda cümleyi bir parça büyüt.',
      adimlar: [
        { yonerge: '"Adım Ada." de.', kabul: ['Je m’appelle Ada', "Je m'appelle Ada"] },
        { yonerge: 'Yaşını ekle (17).', kabul: ['Je m’appelle Ada et j’ai dix-sept ans', "Je m'appelle Ada et j'ai dix-sept ans", 'Je m’appelle Ada, j’ai dix-sept ans'] },
        { yonerge: 'Nerede oturduğunu ekle (Izmir).', kabul: ['Je m’appelle Ada, j’ai dix-sept ans et j’habite à Izmir', "Je m'appelle Ada, j'ai dix-sept ans et j'habite à Izmir"] },
      ],
      aciklama: 'Cümle uzarken her parçanın kendi öznesi ve fiili olmalı; "et" ile bağlanır.',
    },
    {
      id: 'a1-m1-d6-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Modülün kapanış görevi: kendini tanıt.',
      gorev: 'Écris un court texte pour te présenter : ton prénom, ton âge, ta nationalité, où tu habites, les langues que tu parles et pourquoi tu apprends le français.',
      ornekMetin: 'Bonjour ! Je m’appelle Ada. J’ai dix-sept ans et je suis turque. J’habite à Izmir avec ma famille. Je suis élève au lycée. Je parle turc, anglais et un peu français. J’apprends le français parce que je voudrais étudier en France.',
      kaliplar: ['Je m’appelle…', 'J’ai … ans', 'Je suis…', 'J’habite à…', 'Je parle…', 'parce que…'],
      asamalar: [
        { ad: 'Topla', aciklama: 'Altı bilgiyi listele: ad, yaş, milliyet, şehir, diller, neden.' },
        { ad: 'Yaz', aciklama: 'Her bilgiyi ayrı cümle yap. Her cümlede özne olsun.' },
        { ad: 'Bağla', aciklama: '"et", "mais", "parce que" ile cümleleri birbirine bağla.' },
        { ad: 'Kontrol et', aciklama: 'Yaş "avoir" ile mi? Milliyet küçük harfle mi? Özne düşmüş mü?' },
      ],
      olcut: [
        'Adımı ve yaşımı yazdım.',
        'Yaşı "avoir" ile söyledim.',
        'Milliyetimi küçük harfle yazdım.',
        'Nerede oturduğumu yazdım.',
        'Konuştuğum dilleri yazdım.',
        'Neden Fransızca öğrendiğimi yazdım.',
        'Her cümlede özne var.',
      ],
      enAzKelime: 30,
      aranan: [
        { etiket: 's’appeler kalıbı', desen: /je\s+m['’]?\s?appelle/i },
        { etiket: 'yaş (avoir ile)', desen: /j['’]?\s?ai\s+\w+\s+ans/i },
        { etiket: 'yer bildirme', desen: /j['’]?\s?habite\s+(à|a|en)/i },
        { etiket: 'dil bildirme', desen: /je\s+parle/i },
        { etiket: 'sebep bağlacı', desen: /parce\s+que/i },
      ],
    },
  ],

  ozet: [
    'Soru sormanın üç yolu vardır: tonlama, est-ce que, devrik.',
    'Konuşmada tonlama, yazıda est-ce que ya da devrik biçim kullanılır.',
    'Devrik soruda fiil ile özne arasına tire konur: Parles-tu ?',
    'İki sesli çarpışırsa araya anlamsız bir -t- girer: A-t-il ?',
    'Soru kelimesi ya başa gider ya sona kalır; ortada kalmaz.',
    'Kendini tanıtan metnin iskeleti: ad · yaş · milliyet · şehir · diller · sebep.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d6-s1',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Devrik soruyu kur.',
      parcalar: ['vous', 'Parlez', 'français'],
      dogruSira: [1, 0, 2],
    },
    {
      id: 'a1-m1-d6-s2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Kaç yaşında olduğunu resmî biçimde soruyorsun.',
      secenekler: [
        { id: 'a', metin: 'Quel âge avez-vous ?' },
        { id: 'b', metin: 'Vous avez quel âge ?' },
        { id: 'c', metin: 'Quel âge vous avez ?' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Doğru ama konuşma dilidir.',
        c: 'Bu biçim yazıda kabul edilmez.',
      },
    },
    {
      id: 'a1-m1-d6-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Kendini tanıt: adın, yaşın ve nerede oturduğun.',
      kabul: ['Je m’appelle', "Je m'appelle", 'Je suis'],
      ornekCevap: 'Je m’appelle Ada. J’ai dix-sept ans et j’habite à Izmir.',
    },
  ],

  kartlar: ['fr-comment', 'fr-ou', 'fr-appeler', 'fr-habiter', 'fr-parler'],
  not: 'not-a1-m1-calisma',
  sonraki: 'a1-m2-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
