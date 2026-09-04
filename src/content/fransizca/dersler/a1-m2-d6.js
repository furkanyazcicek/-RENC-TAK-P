/**
 * DERS — A1 / Modül 2 / Ders 6
 * "Olumsuzluk: ne … pas ve 'pas de'"
 *
 * MODÜL KAPANIŞ dersi. Yeni konu olarak olumsuzluğu yükler, sonra
 * modülün tamamını bir yazma göreviyle toplar.
 *
 * FRANSIZCAYA ÖZGÜ EK YÜK — İKİ PARÇALI OLUMSUZLUK: Türkçede olumsuzluk
 * tek bir ektir ve fiilin İÇİNDEDİR ("bilmiyorum"). Fransızcada iki ayrı
 * kelime fiili SARAR (ne … pas). Öğrenci sürekli birini düşürür:
 * konuşmada "ne", yazmaya çalışırken "pas".
 *
 * İKİNCİ ZORLUK: olumsuzda artikel "de"ye döner. Türkçede böyle bir
 * değişim hiç yoktur, bu yüzden görünmez bir kuraldır ve ayrıca çalışılır.
 */

export default {
  id: 'a1-m2-d6',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 6,
  baslik: 'Olumsuzluk: ne … pas ve "pas de"',
  altBaslik: 'İki parçalı olumsuzluk ve olumsuzda değişen artikel',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dizim', 'yazma'],
  amac: 'Bu dersin sonunda olumsuz cümleyi iki parçasıyla birlikte kurabilecek, olumsuzda artikelin "de"ye döndüğünü uygulayabilecek ve aileni tanıtan bir metin yazabileceksin.',
  kazanim: 'ne … pas yapısını fiili sararak kurar; olumsuzda belirsiz ve kısmi artikeli "de"ye çevirir; olumlu ve olumsuz cümleleri bir metinde birleştirir.',
  onKosullar: ['a1-m2-d5'],
  sure: 16,
  baglam: {
    durum: 'Kendini ve aileni anlatırken sahip OLMADIĞIN şeyleri de söylemen gerekiyor: kardeşin yok, araban yok, evcil hayvanın yok.',
    neden: 'Bir dilde "hayır" diyemeyen kişi yarım konuşur. Olumsuzluk, olumlu cümle kadar sık kullanılır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Olumsuzluk iki parçadır ve fiili sarar',
      metin:
        'Türkçede olumsuzluk tek bir ektir ve fiilin içine girer: "bil-mi-yorum". Fransızcada iki ayrı kelime vardır ve bunlar fiili ortaya alır.',
      maddeler: [
        'Yapı: özne + ne + FİİL + pas + geri kalan',
        'Je comprends. → Je NE comprends PAS.',
        'Sesli harften önce "ne" elizyona girer: Je N’ai PAS de frère.',
        'İki parça da yazıda zorunludur; birini yazmamak hatadır.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Olumludan olumsuza',
      basliklar: ['Olumlu', 'Olumsuz', 'Not'],
      satirlar: [
        ['Je parle français.', 'Je ne parle pas français.', 'fiil sarılır'],
        ['J’ai un frère.', 'Je n’ai pas de frère.', 'elizyon + artikel "de"ye döner'],
        ['Il y a du pain.', 'Il n’y a pas de pain.', 'kısmi artikel de "de" olur'],
        ['C’est un problème.', 'Ce n’est pas un problème.', 'être ile artikel DEĞİŞMEZ'],
        ['Elle est turque.', 'Elle n’est pas turque.', 'sıfatta artikel yok'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Konuşmada "ne" düşer — ama yazıda düşmez',
      metin:
        'Fransızlar günlük konuşmada "ne" kelimesini çoğunlukla söylemez: "Je sais pas." Bu, dilin gerçeğidir ve dizilerde sürekli duyarsın. Ama YAZIDA ve sınavda "ne" zorunludur.',
      maddeler: [
        'Konuşma: Je sais pas. / J’ai pas faim.',
        'Yazı ve sınav: Je ne sais pas. / Je n’ai pas faim.',
        'Bu bir "yanlış" değil, KAYIT farkıdır; ikisini de tanı ama yazarken tam biçimi kullan.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan iki hata',
      yanlis: 'Je comprends pas. (yazıda) · Je n’ai pas un frère.',
      dogru: 'Je ne comprends pas. · Je n’ai pas de frère.',
      neden:
        'Birincisi: Türkçede tek ek olduğu için öğrenci tek kelimeyle yetiniyor. İkincisi: olumsuzda artikelin değiştiğini bilmiyor — Türkçede böyle bir kural olmadığı için akla gelmiyor.',
    },
    {
      tur: 'anlatim',
      baslik: 'Neden "pas de"? Ve tek istisnası',
      metin:
        'Olumsuz cümlede "bir tane" ya da "bir miktar" fikri tamamen ortadan kalkar. Fransızca bunu artikeli "de"ye çevirerek gösterir.',
      maddeler: [
        'un / une / des → de : Je n’ai pas DE frère. / Il n’y a pas DE chaises.',
        'du / de la / de l’ → de : Je ne bois pas DE lait.',
        'Sesli harften önce "d’" olur: Je n’ai pas D’argent.',
        'İSTİSNA: "être" fiilinde artikel değişmez → Ce n’est pas UN problème.',
        'İSTİSNA: belirli artikel değişmez → Je n’aime pas LE café.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Sık kullanılan olumsuz kalıplar',
      kaliplar: [
        { fr: 'Je ne sais pas.', kullanim: 'Bilmiyorum', ornek: '— Où est Kaan ? — Je ne sais pas.' },
        { fr: 'Je ne comprends pas.', kullanim: 'Anlamıyorum', ornek: 'Pardon, je ne comprends pas.' },
        { fr: 'Je n’ai pas de…', kullanim: 'Yok (sahiplik)', ornek: 'Je n’ai pas de voiture.' },
        { fr: 'Il n’y a pas de…', kullanim: 'Yok (varlık)', ornek: 'Il n’y a pas de pain.' },
        { fr: 'Ce n’est pas…', kullanim: 'Bu … değil', ornek: 'Ce n’est pas mon sac.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Ailem hakkında',
      metin:
        'Ma famille n’est pas très grande. Je n’ai pas de frère, mais j’ai deux sœurs.\nNous n’avons pas de voiture ; nous prenons le bus.\nMon père ne travaille pas le week-end.\nCe n’est pas une grande maison, mais elle est très jolie.',
      sozluk: [
        { fr: 'mais', tr: 'ama' },
        { fr: 'prendre le bus', tr: 'otobüse binmek' },
        { fr: 'le week-end', tr: 'hafta sonu' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d6-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Olumsuzluğun iki parçasını da yaz.',
      parcalar: ['Je ', { bosluk: 0 }, ' comprends ', { bosluk: 1 }, ' la question.'],
      cevaplar: [
        { kabul: ['ne', 'n’', "n'"], ipucu: 'birinci parça' },
        { kabul: ['pas'], ipucu: 'ikinci parça' },
      ],
      aciklama: 'İki parça fiili sarar; araya yalnız fiil girer.',
    },
    {
      id: 'a1-m2-d6-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je n’ai pas un frère.',
      hataliParca: 'pas un',
      dogruParca: 'pas de',
      kabul: ['Je n’ai pas de frère', "Je n'ai pas de frère", 'pas de', 'Je n’ai pas de frere'],
      aciklama: 'Olumsuzda belirsiz artikel "de"ye döner. Bu kuralın istisnası yalnız "être" fiilidir.',
      tuzaklar: [
        {
          kod: 'olumsuz-artikel',
          desen: /\bpas\s+(un|une|des|du|de\s+la)\s+(?!problème|probleme)\w+/i,
          baslik: 'Olumsuzda artikel değişmemiş',
          aciklama: 'Türkçede olumsuz cümlede hiçbir şey değişmez ("kardeşim yok"). Fransızcada belirsiz ve kısmi artikel "de"ye döner.',
          dogru: 'Je n’ai pas de frère.',
          mikro: { yonerge: '"Arabam yok." cümlesini yaz.', kabul: ["Je n'ai pas de voiture", 'Je n’ai pas de voiture'] },
        },
      ],
    },
    {
      id: 'a1-m2-d6-a3',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Bu bir sorun değil." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'Ce n’est pas un problème.' },
        { id: 'b', metin: 'Ce n’est pas de problème.' },
        { id: 'c', metin: 'Ce n’est pas problème.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"être" fiilinde artikel değişmez; bu kuralın tek istisnasıdır.',
        c: 'Artikel düşürülemez.',
      },
      aciklama: 'Kural: "avoir" ve "il y a" ile artikel "de"ye döner; "être" ile dönmez.',
    },
    {
      id: 'a1-m2-d6-a4',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak olumsuz cümle kur.',
      parcalar: ['pas', 'ne', 'Je', 'français', 'parle'],
      dogruSira: [2, 1, 4, 0, 3],
      aciklama: 'Sıra: özne → ne → fiil → pas → geri kalan.',
    },
    {
      id: 'a1-m2-d6-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Biri sana "Tu as un chien ?" diye sordu. Köpeğin yok.',
      kabul: ["Je n'ai pas de chien", 'Je n’ai pas de chien', 'Non je n’ai pas de chien', "Non, je n'ai pas de chien"],
      ornekCevap: 'Non, je n’ai pas de chien.',
    },
    {
      id: 'a1-m2-d6-a6',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Her adımda cümleyi büyüt. Olumsuzluğun iki parçasını da koru.',
      adimlar: [
        { yonerge: '"Bilmiyorum" de.', kabul: ['Je ne sais pas'] },
        { yonerge: 'Neyi bilmediğini ekle (cevabı).', kabul: ['Je ne sais pas la réponse', 'Je ne sais pas la reponse'] },
        { yonerge: '"henüz" anlamında "encore" ekle.', kabul: ['Je ne sais pas encore la réponse', 'Je ne sais pas encore la reponse'] },
      ],
      aciklama: 'Cümle uzasa da "ne" ile "pas" fiili sarmaya devam eder.',
    },
    {
      id: 'a1-m2-d6-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Modülün kapanış görevi: aileni tanıt.',
      gorev: 'Écris un court e-mail à un correspondant français : présente ta famille. Dis combien de frères et sœurs tu as, ce que font tes parents, décris une personne avec deux adjectifs et écris une chose que vous n’avez pas.',
      ornekMetin: 'Salut ! Je te présente ma famille. Nous sommes quatre : mes parents, ma sœur et moi. Je n’ai pas de frère. Mon père est ingénieur et ma mère est professeure. Ma sœur s’appelle Elif ; elle est petite et très drôle. Nous avons un chat noir, mais nous n’avons pas de chien. Et toi ? Tu as des frères et sœurs ?',
      kaliplar: ['Nous sommes …', 'J’ai … / Je n’ai pas de …', 'Mon père est …', 'Elle est … et …', 'Et toi ?'],
      asamalar: [
        { ad: 'Topla', aciklama: 'Kaç kişisiniz, kim var, kim yok, meslekler neler?' },
        { ad: 'Yaz', aciklama: 'Her cümlede özne olsun. En az bir olumsuz cümle kur.' },
        { ad: 'Süsle', aciklama: 'İki sıfat ekle ve isme uydur.' },
        { ad: 'Kontrol et', aciklama: 'İyelik sıfatı ismin cinsine uydu mu? Olumsuzda "de" var mı?' },
      ],
      olcut: [
        'Kaç kişi olduğunuzu yazdım.',
        'En az bir olumsuz cümle kurdum.',
        'Olumsuzda artikeli "de" yaptım.',
        'İyelik sıfatlarını ismin cinsine göre seçtim.',
        'En az iki sıfat kullandım ve isme uydurdum.',
        'Sonunda karşı tarafa bir soru sordum.',
      ],
      enAzKelime: 35,
      aranan: [
        { etiket: 'olumsuz yapı', desen: /\bn[e’']\s?\w+\s+pas\b/i },
        { etiket: 'olumsuzda "de"', desen: /\bpas\s+d[e’']/i },
        { etiket: 'iyelik sıfatı', desen: /\b(mon|ma|mes|notre|nos)\b/i },
        { etiket: 'sıfat kullanımı', desen: /\b(petit|petite|grand|grande|gentil|gentille|drôle|drole|jeune|beau|belle)\b/i },
        { etiket: 'karşıya soru', desen: /\bet\s+toi\b|\btu\s+as\b/i },
      ],
    },
  ],

  ozet: [
    'Olumsuzluk iki parçalıdır ve fiili sarar: ne + fiil + pas.',
    'Sesli harften önce "ne" → "n’" olur.',
    'Konuşmada "ne" düşer ama yazıda ve sınavda zorunludur.',
    'Olumsuzda belirsiz ve kısmi artikel "de"ye döner: pas de frère.',
    'İstisna: "être" fiilinde artikel değişmez (Ce n’est pas un problème).',
    'İstisna: belirli artikel değişmez (Je n’aime pas le café).',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d6-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Il n’y a pas ', { bosluk: 0 }, ' pain à la maison.'],
      cevaplar: [{ kabul: ['de', "d'", 'd’'], ipucu: 'olumsuzda artikel neye döner?' }],
    },
    {
      id: 'a1-m2-d6-s2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je comprends pas cette question.',
      hataliParca: 'comprends pas',
      dogruParca: 'ne comprends pas',
      kabul: ['Je ne comprends pas cette question', 'ne comprends pas', 'Je ne comprends pas'],
    },
    {
      id: 'a1-m2-d6-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE. İki cümle yaz: biri olumlu, biri olumsuz.',
      durum: 'Bir kız kardeşin var ama erkek kardeşin yok.',
      kabul: ["J'ai une sœur", 'J’ai une sœur', "J'ai une soeur"],
      ornekCevap: 'J’ai une sœur, mais je n’ai pas de frère.',
    },
  ],

  kartlar: ['fr-il-y-a', 'fr-avoir', 'fr-famille', 'fr-frere', 'fr-soeur'],
  not: 'not-a1-m2-calisma',
  sonraki: null,
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
