/**
 * DERS — A1 / Modül 5 / Ders 5
 * "Okuma ve yazma: yemek alışkanlıklarım"
 *
 * Modülü kapatan ders. Okuma parçası bir blog yazısıdır; yazma görevi
 * de aynı türde. Görevin dil hedefi bilinçli: sayılabilen/sayılamayan
 * ayrımı, some/any ve sıklık zarfları bir arada kullanılacak — yani
 * Modül 3 ile Modül 5 aynı metinde birleşiyor.
 */

export default {
  id: 'a1-m5-d5',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 5,
  baslik: 'Okuma ve yazma: yemek alışkanlıklarım',
  altBaslik: 'Ne yersin, ne içersin, nereden alırsın?',
  odakBeceri: 'yazma',
  beceriler: ['okuma', 'yazma', 'gramer', 'dusunme'],
  amac: 'Bu dersin sonunda yemek alışkanlıklarını anlatan bağlantılı bir metin yazabilecek, sayılabilen/sayılamayan ayrımını ve some/any kullanımını metinde doğru uygulayabileceksin.',
  kazanim: 'Yemek alışkanlıkları hakkında en az 60 kelimelik bağlantılı bir metin yazar; miktar ifadelerini doğru kullanır.',
  onKosullar: ['a1-m5-d2'],
  sure: 20,
  baglam: {
    durum: 'Okulun İngilizce blogunda "Yemek alışkanlıklarım" başlıklı yazılar paylaşılıyor. Sen de bir yazı göndereceksin.',
    neden: 'Yemek, her kültürde konuşulan ilk konulardan biridir ve sayılabilen/sayılamayan ayrımını en doğal biçimde çalıştırır.',
  },

  bloklar: [
    {
      tur: 'okuma',
      baslik: 'What I eat in a day — Berk, 14',
      metin:
        'Hi! I am Berk and I want to tell you about my food habits.\n\n' +
        'I always have breakfast at home. I usually have some bread, cheese, olives and a glass of tea. ' +
        'I do not like eggs very much, so I only eat them at the weekend.\n\n' +
        'At school we have a lunch break at half past twelve. I usually buy a sandwich from the school canteen. ' +
        'It is not very expensive: a cheese sandwich is thirty lira. Sometimes I take a lunch box from home.\n\n' +
        'In the evening my family and I have dinner together at about eight. My mother is a very good cook. ' +
        'She makes wonderful soup. We usually have soup, rice and salad.\n\n' +
        'I drink a lot of water but I do not drink any coffee, because I am too young for it! ' +
        'I love chocolate, but my mother says it is not healthy.\n\n' +
        'What about you? What do you usually have for breakfast?',
      sozluk: [
        { en: 'food habits', tr: 'yemek alışkanlıkları' },
        { en: 'olives', tr: 'zeytin' },
        { en: 'canteen', tr: 'kantin' },
        { en: 'lunch box', tr: 'beslenme çantası' },
        { en: 'cook (isim)', tr: 'aşçı' },
        { en: 'healthy', tr: 'sağlıklı' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Metinde hangi yapılar var?',
      metin:
        'Bu kısa metin, modülün ve önceki modüllerin bütün yapılarını içeriyor. Kendi yazında da bunları kullanacaksın:',
      maddeler: [
        'Sıklık zarfları: always, usually, sometimes, only',
        'some / any: some bread · not any coffee',
        'Sayılamaz isimler: bread, cheese, rice, water, chocolate',
        'Sayılabilir isimler: eggs, olives, a sandwich, a glass',
        'Sebep: "because I am too young for it"',
        'Karşı soru: "What about you?"',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Yemek alışkanlığı yazarken kullanacağın kalıplar',
      kaliplar: [
        { en: 'I usually have … for breakfast.', kullanim: 'Öğün', ornek: 'I usually have bread and cheese for breakfast.' },
        { en: 'I do not like … very much.', kullanim: 'Sevmeme', ornek: 'I do not like eggs very much.' },
        { en: 'I drink a lot of …', kullanim: 'Miktar', ornek: 'I drink a lot of water.' },
        { en: 'I never / rarely eat …', kullanim: 'Sıklık', ornek: 'I never eat fast food.' },
        { en: 'My favourite food is … because …', kullanim: 'Tercih + sebep', ornek: 'My favourite food is pizza because it is delicious.' },
        { en: 'What about you?', kullanim: 'Karşı soru', ornek: 'What about you? What do you have for dinner?' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Yemek yazarken sık yapılan üç hata',
      yanlis: '1) "I eat a bread."  2) "I don\'t drink no coffee."  3) "I very like chocolate."',
      dogru: '1) "I eat some bread." / "I eat a slice of bread."  2) "I do not drink any coffee."  3) "I really like chocolate."',
      neden:
        'Üçü de bu modülün ve önceki modüllerin çalıştığı noktalar: sayılamaz isme artikel, çift olumsuzluk ve "very + fiil".',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d5-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'AYRINTI.',
      soru: 'Berk kahvaltıda ne yiyor?',
      secenekler: [
        { id: 'a', metin: 'Ekmek, peynir, zeytin ve çay' },
        { id: 'b', metin: 'Yumurta ve süt' },
        { id: 'c', metin: 'Sandviç ve kahve' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m5-d5-a2',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'ÇIKARIM.',
      soru: 'Berk neden kahve içmiyor?',
      secenekler: [
        { id: 'a', metin: 'Sevmediği için' },
        { id: 'b', metin: 'Kendisi için fazla genç olduğunu düşündüğü için' },
        { id: 'c', metin: 'Pahalı olduğu için' },
      ],
      dogruId: 'b',
      aciklama: 'Sebep "because" ile veriliyor: "because I am too young for it".',
    },
    {
      id: 'a1-m5-d5-a3',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'BAĞLAMDAN KELİME TAHMİNİ.',
      soru: '"I usually buy a sandwich from the school canteen." — "canteen" ne olabilir?',
      secenekler: [
        { id: 'a', metin: 'okulda yemek satılan yer' },
        { id: 'b', metin: 'okul bahçesi' },
        { id: 'c', metin: 'öğretmenler odası' },
      ],
      dogruId: 'a',
      aciklama: 'İpucu cümlenin içindedir: "buy a sandwich from…" — yiyecek satın alınan bir yer olmalı.',
    },
    {
      id: 'a1-m5-d5-a4',
      tur: 'eslestirme',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'DOĞRU / YANLIŞ.',
      sol: [
        { id: 'c1', metin: 'Berk her gün yumurta yiyor.' },
        { id: 'c2', metin: 'Öğle arası 12:30\'da.' },
        { id: 'c3', metin: 'Akşam yemeğini ailesiyle yiyor.' },
        { id: 'c4', metin: 'Berk kahve içiyor.' },
      ],
      sag: [
        { id: 'y', metin: 'Yanlış' },
        { id: 'd', metin: 'Doğru' },
        { id: 'd2', metin: 'Doğru' },
        { id: 'y2', metin: 'Yanlış' },
      ],
      eslesme: { c1: 'y', c2: 'd', c3: 'd2', c4: 'y2' },
      aciklama: 'Yumurtayı yalnız hafta sonu yiyor; kahve hiç içmiyor.',
    },
    {
      id: 'a1-m5-d5-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları doldur. (Kelime havuzu yok.)',
      parcalar: [
        'I usually have ', { bosluk: 0 }, ' bread for breakfast, but I do not eat ',
        { bosluk: 1 }, ' eggs. I drink a ', { bosluk: 2 },
        ' of water every day and I ', { bosluk: 3 }, ' drink coffee.',
      ],
      cevaplar: [
        { kabul: ['some'], ipucu: 'olumlu + sayılamaz' },
        { kabul: ['any'], ipucu: 'olumsuz' },
        { kabul: ['lot'], ipucu: 'a … of water' },
        { kabul: ['never', "don't", 'do not'], ipucu: 'hiç' },
      ],
      aciklama: 'Olumlu → some, olumsuz → any. "a lot of" hem sayılabilir hem sayılamaz isimle kullanılır.',
    },
    {
      id: 'a1-m5-d5-a6',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: "I don't drink no milk.",
      hataliParca: "don't drink no",
      dogruParca: "don't drink any",
      kabul: [
        "I don't drink any milk", 'I do not drink any milk', 'I drink no milk',
        'I never drink milk',
      ],
      aciklama: 'Bir cümlede tek olumsuzluk taşınır.',
    },
    {
      id: 'a1-m5-d5-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'YAZMA GÖREVİ — aşama aşama ilerle.',
      gorev: 'Okul blogu için "Yemek alışkanlıklarım" yazısını yaz. En az 60 kelime.',
      ornekMetin:
        'Hi! I am Ece and I want to tell you about my food habits.\n\n' +
        'I usually have breakfast at home at half past seven. I have some bread, cheese and a glass of milk. ' +
        'I do not like olives, so I never eat them.\n\n' +
        'At school we have a break at twelve. I sometimes buy a sandwich, but I usually take a lunch box from home.\n\n' +
        'In the evening we have dinner together at about eight. We usually have soup, chicken and salad. ' +
        'My favourite food is pasta because it is delicious and easy to cook.\n\n' +
        'I drink a lot of water, but I do not drink any fizzy drinks. My mother says they are not healthy.\n\n' +
        'What about you? What do you usually have for breakfast?',
      kaliplar: [
        'I usually have … for breakfast.',
        'I do not like … , so I never eat …',
        'I sometimes buy … / I usually take …',
        'My favourite food is … because …',
        'I drink a lot of … but I do not drink any …',
        'What about you?',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Yemek alışkanlıklarını anlatacaksın: kahvaltı, öğle, akşam. En az 60 kelime ve sonunda bir soru.' },
        { ad: 'Örneği incele', aciklama: 'Yukarıdaki örneği oku. Kaç tane sıklık zarfı var? "some" ve "any" nerede kullanılmış?' },
        { ad: 'Fikir üret', aciklama: 'Not al: kahvaltıda ne yersin, okulda ne yersin, akşam ne yenir, en sevdiğin yemek, ne içmezsin.' },
        { ad: 'Taslak yaz', aciklama: 'Hataya takılma; önce hepsini yaz.' },
        { ad: 'Geri bildirim al', aciklama: 'Sistem hedef yapıları ve Türkçe düşünme izlerini kontrol edecek.' },
        { ad: 'Düzelt ve son sürümü yaz', aciklama: 'İlk sürümle son sürümü yan yana göreceksin.' },
      ],
      olcut: [
        'Görevi yerine getirdim mi? (üç öğünü de yazdım, en az 60 kelime)',
        'Sayılamaz isimlere yanlışlıkla "a" koydum mu? (a bread ✗)',
        'Sayılamaz isimleri çoğul yaptım mı? (breads ✗)',
        'some ve any\'yi doğru yerde kullandım mı?',
        'En az iki sıklık zarfı kullandım mı?',
        'En sevdiğim yemeği SEBEBİYLE yazdım mı?',
        'Sonunda karşı tarafa bir soru sordum mu?',
      ],
      enAzKelime: 60,
      aranan: [
        { etiket: 'some ya da any', desen: /\b(some|any)\b/i },
        { etiket: 'sıklık zarfı', desen: /\b(always|usually|often|sometimes|never)\b/i },
        { etiket: 'miktar ifadesi (a lot of / a glass of)', desen: /\b(a lot of|a glass of|a cup of|a slice of|a piece of)\b/i },
        { etiket: 'sebep bildirme (because)', desen: /\bbecause\b/i },
        { etiket: 'karşı tarafa soru', desen: /\?/ },
      ],
      tuzaklar: [
        {
          kod: 'sayilamayan-artikel',
          desen: /\ba\s+(bread|water|milk|rice|cheese|sugar|money|coffee|tea)\b/i,
          baslik: 'Sayılamaz isme "a" konmuş',
          aciklama: 'Türkçede "bir ekmek" doğaldır. İngilizcede bread sayılamaz olduğu için "a bread" denmez; "some bread" ya da "a slice of bread" kullanılır.',
          dogru: 'some bread · a slice of bread',
          mikro: { yonerge: '"Biraz ekmek yiyorum." cümlesini yaz.', kabul: ['I eat some bread', 'I am eating some bread', "I'm eating some bread"] },
        },
      ],
    },
  ],

  ozet: [
    'Yemek alışkanlığı anlatırken sıklık zarfları metnin omurgasıdır.',
    'Olumlu → some · olumsuz ve soru → any.',
    'Sayılamaz isimler a/an almaz ve çoğul olmaz.',
    'Miktar ölçüyle verilir: a glass of, a slice of, a lot of.',
    'Sebep ("because") ve karşı soru ("What about you?") metni tamamlar.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d5-s1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre doğru olanı seç.',
      soru: 'Okul kantininde peynirli sandviç kaç lira?',
      secenekler: [
        { id: 'a', metin: '13 lira' },
        { id: 'b', metin: '30 lira' },
        { id: 'c', metin: '50 lira' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m5-d5-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Boşlukları doldur.',
      parcalar: ['I have ', { bosluk: 0 }, ' cheese for breakfast but I do not eat ', { bosluk: 1 }, ' olives.'],
      cevaplar: [
        { kabul: ['some'] },
        { kabul: ['any'] },
      ],
    },
    {
      id: 'a1-m5-d5-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Çok su içtiğini ama hiç kahve içmediğini söyle.',
      kabul: [
        'I drink a lot of water but I do not drink any coffee',
        "I drink a lot of water but I don't drink any coffee",
        'I drink a lot of water but I never drink coffee',
        'I drink a lot of water, but I never drink coffee',
      ],
      ornekCevap: "I drink a lot of water but I don't drink any coffee.",
    },
  ],

  kartlar: ['k-bread', 'k-milk', 'k-water', 'k-some', 'k-any', 'k-hungry', 'k-shop'],
  not: null,
  sonraki: 'a1-m6-d1',
  kaynak: { tur: 'ozgun', aciklama: 'Okuma metni DRKOÇ için özgün yazılmıştır.' },
}
