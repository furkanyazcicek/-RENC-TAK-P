/**
 * DRKOÇ — YAZDIRILABİLİR FRANSIZCA DERS NOTLARI VE ÇALIŞMA KÂĞITLARI
 * ==================================================================
 *
 * NEDEN EKRAN GÖRÜNTÜSÜ DEĞİL, GERÇEK METİN: PDF'ler tarayıcının kendi
 * yazdırma motoruyla üretilir (Yazdır → PDF olarak kaydet). Böylece:
 *
 *  • Metin gerçek metindir — seçilebilir, aranabilir, ekran okuyucu okur.
 *  • Türkçe ve Fransızca karakterler (ğ, ş, ı, İ, é, è, ê, ç, œ) eksiksiz
 *    çıkar; ayrı bir yazı tipi gömmek ya da ücretli bir PDF kütüphanesi
 *    eklemek gerekmez.
 *  • A4 sayfa düzeni, kenar boşlukları ve sayfa sonları CSS ile kontrol
 *    edilir (bkz. src/styles/fransizca-yazdir.css).
 *
 * İKİ SÜRÜM: her kâğıdın öğrenci ve öğretmen sürümü vardır. Öğretmen
 * sürümünde cevap anahtarı ve öğretim notları görünür; öğrenci sürümünde
 * görünmez ve o alan boş bırakılmaz — sayfa düzeni ikisinde de tutarlıdır.
 *
 * BÖLÜM TÜRLERİ
 *   { tur: 'hedef',    maddeler: [] }
 *   { tur: 'ozet',     baslik, maddeler: [] }
 *   { tur: 'kural',    baslik, metin, maddeler?: [] }
 *   { tur: 'tablo',    baslik, basliklar: [], satirlar: [[]] }
 *   { tur: 'ornek',    baslik, satirlar: [{ fr, tr }] }
 *   { tur: 'kelime',   baslik, kelimeler: [{ fr, ipa, tr }] }
 *   { tur: 'telaffuz', baslik, maddeler: [] }
 *   { tur: 'hata',     baslik, satirlar: [{ yanlis, dogru, neden }] }
 *   { tur: 'dusunme',  baslik, maddeler: [] }
 *   { tur: 'alistirma',baslik, yonerge, sorular: [{ no, metin, satir? }] }
 *   { tur: 'notAlani', baslik, satir: n }
 *   { tur: 'kontrol',  baslik, maddeler: [] }
 */

export const NOTLAR = [
  /* ---------------------------------------------------------------- */
  {
    id: 'not-prea1-m1-d1',
    dil: 'fr',
    seviye: 'Pre-A1',
    modul: 'prea1-m1',
    ders: 'prea1-m1-d1',
    baslik: 'Fransız sesleri ve alfabe',
    altBaslik: 'Pre-A1 · Modül 1 · Ders 1 — Çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Fransızcada yazı ile sesin neden ayrıştığını anlamak',
          'Adını Fransız alfabesiyle hecelemek',
          'Türkçede olmayan sesleri tanımak: nazal ünlüler ve gırtlaktan /ʁ/',
          'Türkçede zaten var olan sesleri fark etmek: ü, ö, ş, j',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Temel kural',
        metin:
          'Fransızca YAZILDIĞI GİBİ OKUNMAZ. Ama okunuş rastgele de değildir: harf gruplarının sesleri sabittir. Birkaç grubu öğrendiğinde hiç görmediğin bir kelimeyi bile doğru okuyabilirsin.',
        maddeler: [
          'Kelime sonundaki e, s, t, d, x, z harfleri genelde OKUNMAZ.',
          'Kelime sonundaki c, r, f, l harfleri genelde OKUNUR.',
          'Harf grupları tek ses verir: ou → u, u → ü, eu → ö, oi → ua, ch → ş, ai → e.',
          'ü, ö, ş, j sesleri Türkçede zaten var — bu senin avantajın.',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Harf grubu → ses',
        basliklar: ['Yazılış', 'Okunuş', 'Örnek'],
        satirlar: [
          ['ou', 'u', 'bonjour, vous, tout'],
          ['u', 'ü', 'tu, rue, salut'],
          ['eu / œu', 'ö', 'deux, sœur, peur'],
          ['oi', 'ua', 'moi, trois, voiture'],
          ['ai / ei', 'e', 'maison, treize'],
          ['ch', 'ş', 'chat, chambre'],
          ['j / ge / gi', 'j', 'jour, manger'],
          ['on / om', 'nazal "on"', 'bonjour, nom'],
          ['an / en', 'nazal "an"', 'enfant, temps'],
          ['in / ain / ein', 'nazal "en"', 'vin, pain, plein'],
        ],
      },
      {
        tur: 'telaffuz',
        baslik: 'En çok zorlanacağın üç şey',
        maddeler: [
          'NAZAL ÜNLÜLER: Türkçede burundan çıkan ünlü yoktur. "bon" derken sondaki n’yi AYRICA söyleme; o harf, ünlünün burundan çıkacağını gösterir.',
          'GIRTLAKTAN R: Türkçe r dil ucuyla, Fransızca r boğazın arkasıyla çıkar. Gargara yapar gibi.',
          'OKUNMAYAN SON HARFLER: "petit" → "pöti". Türkçedeki okuma alışkanlığını bilerek bırakman gerekir.',
        ],
      },
      {
        tur: 'kelime',
        baslik: 'Sınıf yönergeleri — bunları duyunca ne yapacaksın',
        kelimeler: [
          { fr: 'Écoute / Écoutez', ipa: '/e.kut/', tr: 'Dinle / Dinleyin' },
          { fr: 'Répète / Répétez', ipa: '/ʁe.pɛt/', tr: 'Tekrar et / Tekrar edin' },
          { fr: 'Regarde / Regardez', ipa: '/ʁə.ɡaʁd/', tr: 'Bak / Bakın' },
          { fr: 'Ouvre ton livre', ipa: '/uvʁ tɔ̃ livʁ/', tr: 'Kitabını aç' },
          { fr: 'Lis / Lisez', ipa: '/li/', tr: 'Oku / Okuyun' },
          { fr: 'Écris / Écrivez', ipa: '/e.kʁi/', tr: 'Yaz / Yazın' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma',
        yonerge: 'Kelimelerin okunuşunu Türkçe harflerle yaz.',
        sorular: [
          { no: 1, metin: 'bonjour → ______________________', satir: 1 },
          { no: 2, metin: 'salut → ______________________', satir: 1 },
          { no: 3, metin: 'petit → ______________________', satir: 1 },
          { no: 4, metin: 'trois → ______________________', satir: 1 },
          { no: 5, metin: 'chat → ______________________', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Kendi notların', satir: 5 },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'bonjur (son r okunur, "on" nazal)' },
      { soru: 2, cevap: 'salü (sondaki t okunmaz, u → ü)' },
      { soru: 3, cevap: 'pöti (sondaki t okunmaz)' },
      { soru: 4, cevap: 'trua (oi → ua, s okunmaz)' },
      { soru: 5, cevap: 'şa (ch → ş, t okunmaz)' },
    ],
    kontrolListesi: [
      'Son sessizlerin okunmadığını uyguluyor mu?',
      'ou/u ayrımını yapabiliyor mu (tout / tu)?',
      'Nazal seste sondaki n’yi ayrıca söylüyor mu?',
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m1-d1',
    dil: 'fr',
    seviye: 'A1',
    modul: 'a1-m1',
    ders: 'a1-m1-d1',
    baslik: 'Selamlaşma ve tu/vous ayrımı',
    altBaslik: 'A1 · Modül 1 · Ders 1 — Çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Günün saatine uygun selamı seçmek',
          'tu ile vous arasında doğru seçimi yapmak',
          'Nezaket kalıplarını yerinde kullanmak',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Ne zaman ne denir',
        basliklar: ['Durum', 'Kalıp'],
        satirlar: [
          ['Gündüz, herkese', 'Bonjour'],
          ['Akşam (≈18:00 sonrası)', 'Bonsoir'],
          ['Arkadaşa, her saatte', 'Salut'],
          ['Ayrılırken, nazik', 'Au revoir'],
          ['Ayrılırken, samimi', 'Salut / À plus'],
          ['Yatmadan önce', 'Bonne nuit'],
        ],
      },
      {
        tur: 'kural',
        baslik: 'tu mu, vous mu?',
        metin:
          'Türkçedeki "sen/siz" ayrımına benzer ama Fransızcada bu ayrım FİİL ÇEKİMİNİ de değiştirir ve yanlış seçim kabalık sayılır.',
        maddeler: [
          'tu → arkadaş, akran, aile, çocuklar.',
          'vous → öğretmen, satıcı, doktor, tanımadığın yetişkin; ayrıca ÇOĞUL.',
          'Emin değilsen "vous" ile başla. Karşı taraf isterse "On peut se tutoyer" der.',
          'Dikkat: "vous" hem nezaket hem çoğuldur; Türkçedeki "siz" gibi.',
        ],
      },
      {
        tur: 'ornek',
        baslik: 'Aynı soru, iki hitap',
        satirlar: [
          { fr: 'Comment tu t’appelles ? / Comment vous appelez-vous ?', tr: 'Adın ne? / Adınız ne?' },
          { fr: 'Ça va ? / Comment allez-vous ?', tr: 'Nasılsın? / Nasılsınız?' },
          { fr: 'Tu viens d’où ? / D’où venez-vous ?', tr: 'Nerelisin? / Nerelisiniz?' },
        ],
      },
      {
        tur: 'hata',
        baslik: 'Sık yapılan hatalar',
        satirlar: [
          { yanlis: 'Bonne nuit ! (biriyle karşılaşınca)', dogru: 'Bonsoir !', neden: 'Bonne nuit yalnız AYRILIRKEN, çoğunlukla yatmadan önce söylenir.' },
          { yanlis: 'Salut, madame.', dogru: 'Bonjour, madame.', neden: '"Salut" yalnız samimi ilişkide kullanılır.' },
          { yanlis: '— Vous voulez du thé ? — Merci.', dogru: '— Oui, merci. / — Non, merci.', neden: 'Tek başına "merci" çoğu zaman RET anlamına gelir.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma',
        yonerge: 'Duruma uygun kalıbı yaz.',
        sorular: [
          { no: 1, metin: 'Saat 08:30, okulda öğretmenini gördün: ______________________', satir: 1 },
          { no: 2, metin: 'Saat 19:00, kafeye girdin: ______________________', satir: 1 },
          { no: 3, metin: 'Müdüre adını soruyorsun: ______________________', satir: 1 },
          { no: 4, metin: 'Arkadaşına adını soruyorsun: ______________________', satir: 1 },
          { no: 5, metin: 'Biri sana teşekkür etti, karşılık ver: ______________________', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Kendi notların', satir: 5 },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Bonjour (madame/monsieur)' },
      { soru: 2, cevap: 'Bonsoir' },
      { soru: 3, cevap: 'Comment vous appelez-vous ?' },
      { soru: 4, cevap: 'Comment tu t’appelles ?' },
      { soru: 5, cevap: 'De rien. / Je vous en prie.' },
    ],
    kontrolListesi: [
      'tu/vous seçimini bağlama göre yapabiliyor mu?',
      'Bonsoir ile bonne nuit ayrımı oturdu mu?',
      'Teklife "merci" demenin ret olduğunu biliyor mu?',
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'not-a1-m2-d1',
    dil: 'fr',
    seviye: 'A1',
    modul: 'a1-m2',
    ders: 'a1-m2-d1',
    baslik: 'İsimlerin cinsiyeti — le / la',
    altBaslik: 'A1 · Modül 2 · Ders 1 — Çalışma kâğıdı',
    bolumler: [
      {
        tur: 'hedef',
        maddeler: [
          'Her ismin bir cinsiyeti olduğunu kabul etmek',
          'Cinsiyeti tahmin ettiren son ekleri tanımak',
          'Kelimeyi artikeliyle birlikte öğrenme alışkanlığını kurmak',
        ],
      },
      {
        tur: 'kural',
        baslik: 'Neden bu konu bu kadar önemli?',
        metin:
          'Fransızcada cinsiyet yalnız artikeli değiştirmez. Sıfat uyumu, iyelik sıfatı ve zamir seçimi — hepsi cinsiyete bağlıdır. Cinsiyeti bilinmeyen kelime, hiçbir cümlede doğru kullanılamaz.',
        maddeler: [
          'Kelimeyi asla yalnız öğrenme: "table" değil, "LA table".',
          'Sesli harfle başlayan isimlerde artikel "l’" olur ve cinsiyeti GİZLER: l’école (dişil), l’hôtel (eril).',
          'Türkçede cinsiyet olmadığı için bu bilgi sezgiyle gelmez; ezberlenmesi gerekir.',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Son ek → çoğunlukla cinsiyet',
        basliklar: ['Son ek', 'Cins', 'Örnek'],
        satirlar: [
          ['-tion / -sion', 'dişil', 'la nation, la télévision'],
          ['-té', 'dişil', 'la beauté, la liberté'],
          ['-ette', 'dişil', 'la baguette'],
          ['-ance / -ence', 'dişil', 'la chance, la science'],
          ['-age', 'eril', 'le fromage, le voyage'],
          ['-ment', 'eril', 'le moment, le document'],
          ['-eau', 'eril', 'le bateau, le gâteau'],
          ['-isme', 'eril', 'le tourisme'],
        ],
      },
      {
        tur: 'hata',
        baslik: 'Sık yapılan hatalar',
        satirlar: [
          { yanlis: 'le maison', dogru: 'la maison', neden: 'Cinsiyet ezberlenmediğinde öğrenci varsayılan olarak "le" kullanıyor.' },
          { yanlis: 'Je lis livre.', dogru: 'Je lis un livre.', neden: 'Türkçede artikel yok; Fransızcada sayılabilir isim neredeyse hiç yalın durmaz.' },
          { yanlis: 'la problème', dogru: 'le problème', neden: '-ème ile biten Yunanca kökenli kelimeler erildir: le problème, le système, le thème.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Alıştırma',
        yonerge: 'Doğru artikeli yaz (le / la / l’).',
        sorular: [
          { no: 1, metin: '____ voiture', satir: 1 },
          { no: 2, metin: '____ fromage', satir: 1 },
          { no: 3, metin: '____ école', satir: 1 },
          { no: 4, metin: '____ télévision', satir: 1 },
          { no: 5, metin: '____ moment', satir: 1 },
          { no: 6, metin: '____ liberté', satir: 1 },
        ],
      },
      { tur: 'notAlani', baslik: 'Cinsiyetini karıştırdığın kelimeler', satir: 6 },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'la voiture (dişil)' },
      { soru: 2, cevap: 'le fromage (-age → eril)' },
      { soru: 3, cevap: 'l’école (dişil — artikel cinsiyeti gizler)' },
      { soru: 4, cevap: 'la télévision (-sion → dişil)' },
      { soru: 5, cevap: 'le moment (-ment → eril)' },
      { soru: 6, cevap: 'la liberté (-té → dişil)' },
    ],
    kontrolListesi: [
      'Kelimeyi artikeliyle birlikte söylüyor mu?',
      'l’ ile başlayan isimlerde cinsiyeti ayrıca not ediyor mu?',
      'Son ek kurallarını tahmin için kullanabiliyor mu?',
    ],
  },

  /* ------------------- Modül kapanış çalışma kâğıtları ------------- */
  {
    id: 'not-a1-m1-calisma',
    dil: 'fr',
    seviye: 'A1',
    modul: 'a1-m1',
    ders: null,
    baslik: 'Modül 1 kapanış — Kendini tanıt',
    altBaslik: 'A1 · Modül 1 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          'Selamlaşma ve tu/vous ayrımı',
          'être fiilinin çekimi ve zorunlu özne',
          's’appeler ile ad söyleme ve sorma',
          'Ülke, milliyet, dil ayrımı',
          '0–69 sayıları ve yaş (avoir ile)',
          'Soru sormanın üç yolu',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'être — ezberlenmesi zorunlu',
        basliklar: ['Kişi', 'Çekim', 'Türkçe'],
        satirlar: [
          ['je', 'suis', 'ben …im'],
          ['tu', 'es', 'sen …sin'],
          ['il / elle / on', 'est', 'o …dır'],
          ['nous', 'sommes', 'biz …iz'],
          ['vous', 'êtes', 'siz …siniz'],
          ['ils / elles', 'sont', 'onlar …dır'],
        ],
      },
      {
        tur: 'dusunme',
        baslik: 'Fransızca düşünme',
        maddeler: [
          'Türkçede özne eke gizlenir; Fransızcada her cümlede ayrı bir özne zamiri olmalı.',
          'Yaş "avoir" ile söylenir: j’ai 17 ans. "Je suis 17 ans" yanlıştır.',
          'Meslek söylerken artikel kullanılmaz: "Je suis élève".',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Kendini tanıtan 5 cümle yaz. Ad, yaş, şehir, milliyet ve konuştuğun diller geçsin.',
        sorular: [
          { no: 1, metin: '', satir: 8 },
        ],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['Her cümlede özne var mı?', 'Yaşı "avoir" ile mi söyledim?', 'Milliyet sıfatını küçük harfle mi yazdım?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: Bonjour ! Je m’appelle Ada. J’ai dix-sept ans. Je suis turque. J’habite à Izmir. Je parle turc, anglais et un peu français.' },
    ],
    kontrolListesi: [
      'être çekimi eksiksiz mi?',
      'Özne düşürme hatası kalmadı mı?',
      'Yaş ifadesinde avoir kullanıyor mu?',
    ],
  },
  {
    id: 'not-a1-m2-calisma',
    dil: 'fr',
    seviye: 'A1',
    modul: 'a1-m2',
    ders: null,
    baslik: 'Modül 2 kapanış — Ailem ve eşyalarım',
    altBaslik: 'A1 · Modül 2 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          'le / la / l’ / les — cinsiyet ve belirlilik',
          'un / une / des ve "il y a"',
          'avoir ile sahiplik ve aile üyeleri',
          'İyelik sıfatları: mon / ma / mes',
          'Sıfatın uyumu ve yeri',
          'ne … pas ve olumsuzda "de" dönüşümü',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'İyelik sıfatı — İSMİN cinsine uyar, sahibin değil',
        basliklar: ['Sahip', 'Eril isim', 'Dişil isim', 'Çoğul isim'],
        satirlar: [
          ['ben', 'mon frère', 'ma sœur', 'mes parents'],
          ['sen', 'ton frère', 'ta sœur', 'tes parents'],
          ['o', 'son frère', 'sa sœur', 'ses parents'],
        ],
      },
      {
        tur: 'hata',
        baslik: 'Bu modülün tuzakları',
        satirlar: [
          { yanlis: 'sa frère', dogru: 'son frère', neden: 'İyelik sıfatı sahibin değil, İSMİN cinsine uyar. "frère" eril olduğu için "son".' },
          { yanlis: 'une rouge voiture', dogru: 'une voiture rouge', neden: 'Renkler isimden SONRA gelir.' },
          { yanlis: 'Je n’ai pas un frère.', dogru: 'Je n’ai pas de frère.', neden: 'Olumsuzda belirsiz artikel "de"ye döner.' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Aileni tanıtan 6 cümle yaz. En az iki sıfat ve bir olumsuz cümle kullan.',
        sorular: [{ no: 1, metin: '', satir: 8 }],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['Sıfatları isme uydurdum mu?', 'Olumsuzda "de" kullandım mı?', 'İyelik sıfatını ismin cinsine göre seçtim mi?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: Ma famille est petite. J’ai un frère et une sœur. Mon frère est grand et ma sœur est très gentille. Mon père est ingénieur. Ma mère travaille à l’hôpital. Je n’ai pas de chien.' },
    ],
    kontrolListesi: [
      'Cinsiyet hataları azaldı mı?',
      'Sıfatın yeri doğru mu?',
      'Olumsuzda artikel dönüşümü yapılıyor mu?',
    ],
  },
  {
    id: 'not-a1-m3-calisma',
    dil: 'fr',
    seviye: 'A1',
    modul: 'a1-m3',
    ders: null,
    baslik: 'Modül 3 kapanış — Günüm',
    altBaslik: 'A1 · Modül 3 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          '-er fiillerinin çekimi',
          'Saat sorma ve söyleme',
          'Dönüşlü fiiller: se lever, se coucher',
          'aller, faire, prendre düzensiz fiilleri',
          'Sıklık zarfları ve gün adları',
        ],
      },
      {
        tur: 'tablo',
        baslik: '-er fiili örneği: parler',
        basliklar: ['Kişi', 'Çekim', 'Okunuş notu'],
        satirlar: [
          ['je', 'parle', 'sondaki -e okunmaz'],
          ['tu', 'parles', 'aynı okunur'],
          ['il / elle', 'parle', 'aynı okunur'],
          ['nous', 'parlons', 'nazal "on"'],
          ['vous', 'parlez', '"parle" + "e"'],
          ['ils / elles', 'parlent', 'sondaki -ent OKUNMAZ'],
        ],
      },
      {
        tur: 'dusunme',
        baslik: 'Fransızca düşünme',
        maddeler: [
          'Dört çekim (je, tu, il, ils) AYNI okunur; fark yalnız yazıdadır.',
          'Dönüşlü fiilde zamir özneye göre değişir: je ME lève, tu TE lèves.',
          'Saat söylerken kişisiz "il" kullanılır: Il est sept heures.',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Bir gününü sırayla anlat. En az 6 cümle, en az üç saat ifadesi kullan.',
        sorular: [{ no: 1, metin: '', satir: 9 }],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['Dönüşlü zamiri özneye uydurdum mu?', 'Saatleri "il est" ile mi söyledim?', 'Sıklık zarfını fiilden sonra mı koydum?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: Je me lève à sept heures. Je prends le petit-déjeuner à sept heures et demie. Ensuite, je vais au lycée. Les cours commencent à huit heures et quart. Je rentre à la maison à cinq heures. Le soir, je fais mes devoirs et je me couche à onze heures.' },
    ],
    kontrolListesi: [
      '-er çekimi otomatikleşti mi?',
      'Dönüşlü fiil zamiri doğru mu?',
      'Saat ifadeleri doğru kuruluyor mu?',
    ],
  },
  {
    id: 'not-a1-m4-calisma',
    dil: 'fr',
    seviye: 'A1',
    modul: 'a1-m4',
    ders: null,
    baslik: 'Modül 4 kapanış — Şehirde',
    altBaslik: 'A1 · Modül 4 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          'à / en / au / aux edatları',
          'Kaynaşma: au, du, aux, des',
          'futur proche: aller + mastar',
          'Ulaşım ve bilet kalıpları',
          'Yol sorma ve tarif etme',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Kaynaşma — ezberlenmesi zorunlu',
        basliklar: ['Yazılamaz', 'Doğru biçim', 'Örnek'],
        satirlar: [
          ['à + le', 'au', 'Je vais au cinéma.'],
          ['à + les', 'aux', 'Je parle aux élèves.'],
          ['de + le', 'du', 'Je viens du parc.'],
          ['de + les', 'des', 'C’est la voiture des voisins.'],
          ['à + la', 'à la (değişmez)', 'Je vais à la gare.'],
          ['à + l’', 'à l’ (değişmez)', 'Je vais à l’école.'],
        ],
      },
      {
        tur: 'hata',
        baslik: 'Bu modülün tuzakları',
        satirlar: [
          { yanlis: 'Je vais à le cinéma.', dogru: 'Je vais au cinéma.', neden: '"à le" biçimi Fransızcada yoktur; kaynaşma zorunludur.' },
          { yanlis: 'Je vais à France.', dogru: 'Je vais en France.', neden: 'Dişil ülkelerde "en", eril ülkelerde "au" kullanılır.' },
          { yanlis: 'Je vais avec le bus.', dogru: 'Je vais en bus.', neden: 'Ulaşım aracında "en" kullanılır ("à pied" hariç).' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Evinden okula nasıl gittiğini anlat. En az iki kaynaşmış biçim (au/du/aux/des) kullan.',
        sorular: [{ no: 1, metin: '', satir: 8 }],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['"à le" yazdım mı? (yazmamalıyım)', 'Ülke adında doğru edatı seçtim mi?', 'Ulaşım aracında "en" kullandım mı?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: Le matin, je sors de la maison à sept heures et demie. Je vais à l’arrêt de bus et je prends le bus. Je descends près du lycée. Ensuite, je marche cinq minutes et j’arrive au lycée.' },
    ],
    kontrolListesi: [
      'Kaynaşma otomatikleşti mi?',
      'Ülke/şehir edatları doğru mu?',
      'futur proche kurulabiliyor mu?',
    ],
  },
  {
    id: 'not-a1-m5-calisma',
    dil: 'fr',
    seviye: 'A1',
    modul: 'a1-m5',
    ders: null,
    baslik: 'Modül 5 kapanış — Yemek ve alışveriş',
    altBaslik: 'A1 · Modül 5 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          'Kısmi artikel: du / de la / de l’ / des',
          'je voudrais ile kibar istek',
          'Miktar ifadelerinden sonra "de"',
          'Olumsuzda "pas de"',
          'Fiyat sorma ve para',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Hangi artikel ne zaman?',
        basliklar: ['Durum', 'Artikel', 'Örnek'],
        satirlar: [
          ['Belirli bir şey', 'le / la / les', 'Je mange le gâteau. (o pasta)'],
          ['Bir tane, sayılabilir', 'un / une / des', 'Je mange une pomme.'],
          ['Bir miktar, sayılamaz', 'du / de la / de l’', 'Je mange du pain.'],
          ['Miktar belirtilmiş', 'de', 'un kilo de pommes'],
          ['Olumsuz', 'de', 'Je ne mange pas de pain.'],
        ],
      },
      {
        tur: 'dusunme',
        baslik: 'Fransızca düşünme',
        maddeler: [
          'Türkçede "ekmek yiyorum" derken miktar yoktur; Fransızcada "bir kısmını" demek zorundasın: du pain.',
          '"Je veux" değil "je voudrais" — istek kibar biçimde kurulur.',
          'Olumsuzda artikel her zaman "de"ye döner; bu kuralın istisnası "être" fiilidir (Ce n’est pas un problème).',
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Bir kafede sipariş verdiğin kısa bir diyalog yaz (en az 6 replik).',
        sorular: [{ no: 1, metin: '', satir: 10 }],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['Kısmi artikeli doğru seçtim mi?', '"je voudrais" kullandım mı?', 'Olumsuzda "de" yazdım mı?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: — Bonjour, vous désirez ? — Bonjour, je voudrais un café et un croissant, s’il vous plaît. — Très bien. Vous voulez du sucre ? — Non merci, pas de sucre. — Ça fait quatre euros cinquante. — Voilà. Merci, au revoir !' },
    ],
    kontrolListesi: [
      'Kısmi artikel oturdu mu?',
      'Kibar istek kalıbı kullanılıyor mu?',
      'Fiyat sorma kalıbı biliniyor mu?',
    ],
  },
  {
    id: 'not-a1-m6-calisma',
    dil: 'fr',
    seviye: 'A1',
    modul: 'a1-m6',
    ders: null,
    baslik: 'Modül 6 kapanış — Boş zaman ve dün',
    altBaslik: 'A1 · Modül 6 — Genel tekrar kâğıdı',
    bolumler: [
      {
        tur: 'ozet',
        baslik: 'Bu modülde ne öğrendin',
        maddeler: [
          'faire du / de la ve jouer à / de',
          'Passé composé — avoir ile',
          'Passé composé — être ile ve özneyle uyum',
          'Hava durumu ve mevsimler',
        ],
      },
      {
        tur: 'tablo',
        baslik: 'Être ile çekilen fiiller (hareket ve durum değişimi)',
        basliklar: ['Fiil', 'Ortaç', 'Örnek'],
        satirlar: [
          ['aller', 'allé', 'Je suis allé au parc.'],
          ['venir', 'venu', 'Elle est venue hier.'],
          ['partir', 'parti', 'Ils sont partis tôt.'],
          ['arriver', 'arrivé', 'Nous sommes arrivés à midi.'],
          ['rester', 'resté', 'Je suis resté à la maison.'],
          ['naître', 'né', 'Elle est née en 2008.'],
        ],
      },
      {
        tur: 'hata',
        baslik: 'Bu modülün tuzakları',
        satirlar: [
          { yanlis: 'J’ai allé au parc.', dogru: 'Je suis allé au parc.', neden: 'Hareket bildiren bu fiiller "être" ile çekilir.' },
          { yanlis: 'Elle est allé.', dogru: 'Elle est allée.', neden: 'Être ile çekilen fiillerde ortaç özneye uyar.' },
          { yanlis: 'Je joue du football.', dogru: 'Je joue au football.', neden: 'Spor için "jouer à", enstrüman için "jouer de".' },
        ],
      },
      {
        tur: 'alistirma',
        baslik: 'Yazma görevi',
        yonerge: 'Geçen hafta sonunu anlat. En az iki "avoir" ve iki "être" ile kurulmuş geçmiş zaman cümlesi olsun.',
        sorular: [{ no: 1, metin: '', satir: 10 }],
      },
      { tur: 'kontrol', baslik: 'Kendini kontrol et', maddeler: ['Yardımcı fiili doğru seçtim mi?', 'Être ile uyum yaptım mı?', 'Ortaç biçimleri doğru mu?'] },
    ],
    cevapAnahtari: [
      { soru: 1, cevap: 'Örnek: Samedi, je suis allé au parc avec mes amis. Nous avons joué au football. Le soir, j’ai regardé un film. Dimanche, je suis resté à la maison et j’ai fait mes devoirs.' },
    ],
    kontrolListesi: [
      'avoir/être seçimi doğru mu?',
      'Être ile uyum yapılıyor mu?',
      'A1 kapanış metni bağlantılı mı (ensuite, après, le soir)?',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Arama yardımcıları                                                  */
/* ------------------------------------------------------------------ */

export function notBul(id) {
  return NOTLAR.find((n) => n.id === id) ?? null
}

export function modulNotlari(modulId) {
  return NOTLAR.filter((n) => n.modul === modulId)
}
