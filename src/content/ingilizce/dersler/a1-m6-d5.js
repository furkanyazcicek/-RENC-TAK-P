/**
 * DERS — A1 / Modül 6 / Ders 5
 * "Okuma ve yazma: mahallemi tarif ediyorum"
 *
 * A1 seviyesinin SON dersi. Bu yüzden yazma görevi yalnız bu modülün
 * değil, bütün A1'in yapılarını istiyor: there is/are, yer edatları,
 * Present Simple, sıklık zarfları, like + -ing, can ve bağlaçlar.
 * Öğrenci burada seviyeyi bitirdiğini somut olarak görüyor.
 */

export default {
  id: 'a1-m6-d5',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 5,
  baslik: 'Okuma ve yazma: mahallemi tarif ediyorum',
  altBaslik: 'A1 seviyesinin son dersi — öğrendiğin her şey tek metinde',
  odakBeceri: 'yazma',
  beceriler: ['okuma', 'yazma', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda mahalleni tanıtan ve oraya nasıl gelineceğini tarif eden bağlantılı bir metin yazabileceksin.',
  kazanim: 'Mahalle tanıtımı ve yol tarifi içeren en az 70 kelimelik bağlantılı bir metin yazar; A1 yapılarını bir arada kullanır.',
  onKosullar: ['a1-m6-d3'],
  sure: 22,
  baglam: {
    durum: 'Yurt dışından bir arkadaşın seni ziyarete geliyor. Ona mahalleni anlatan ve otogardan evine nasıl geleceğini tarif eden bir e-posta yazıyorsun.',
    neden: 'Bu görev A1\'in bütün yapılarını tek metinde topluyor: var/yok, yer edatları, rutin, tercih, yetenek ve yol tarifi.',
  },

  bloklar: [
    {
      tur: 'okuma',
      baslik: 'From: kerem@mail.com — Subject: Come and visit me!',
      metin:
        'Hi Anna!\n\n' +
        'I am so happy that you are coming to Bursa. Let me tell you about my neighbourhood.\n\n' +
        'I live in a quiet area near the city centre. There is a big park at the end of our street ' +
        'and there are two supermarkets nearby. There is also a small café opposite my building. ' +
        'I go there with my friends at the weekend because they make very good hot chocolate.\n\n' +
        'Unfortunately there is not a cinema in my neighbourhood, but the city centre is only ' +
        'fifteen minutes by bus.\n\n' +
        'Now, how do you get to my house from the bus station? It is easy. ' +
        'Go out of the station and turn left. Go straight on for about two hundred metres and go past a big mosque. ' +
        'Then take the second street on the right. My building is on your left, next to the café. It is number 24.\n\n' +
        'It is about ten minutes on foot. If you get lost, call me!\n\n' +
        'See you soon!\nKerem',
      sozluk: [
        { en: 'area', tr: 'bölge, semt' },
        { en: 'nearby', tr: 'yakınlarda' },
        { en: 'building', tr: 'bina' },
        { en: 'go out of', tr: '…dan dışarı çıkmak' },
        { en: 'get lost', tr: 'kaybolmak' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Metnin iki bölümü var',
      metin:
        'Bu e-posta iki iş yapıyor ve ikisi de ayrı bir dil gerektiriyor. Kendi yazında da bu ikisini ayır:',
      maddeler: [
        '1. MAHALLE TANITIMI → there is / there are, yer edatları, Present Simple, sebep (because)',
        '2. YOL TARİFİ → emir kipi: Go… Turn… Take… It is on your…',
        'İkisi arasında bir geçiş cümlesi kur: "Now, how do you get to my house?"',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Bu görevde kullanacağın kalıplar',
      kaliplar: [
        { en: 'I live in a quiet / busy area near …', kullanim: 'Bölge tanıtımı', ornek: 'I live in a quiet area near the city centre.' },
        { en: 'There is a … and there are two …', kullanim: 'Var', ornek: 'There is a park and there are two supermarkets.' },
        { en: 'Unfortunately there is not a …', kullanim: 'Yok', ornek: 'Unfortunately there is not a cinema.' },
        { en: 'Go out of … and turn left / right.', kullanim: 'Tarif başlangıcı', ornek: 'Go out of the station and turn left.' },
        { en: 'Take the … street on the …', kullanim: 'Sokak', ornek: 'Take the second street on the right.' },
        { en: 'It is on your left, next to the …', kullanim: 'Varış', ornek: 'My building is on your left, next to the café.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'A1 boyunca en çok tekrarlanan beş hata',
      yanlis: '1) "In my street is a park."  2) "I am in the bus."  3) "My school have 400 students."  4) "I very like this area."  5) "It is ten minutes by foot."',
      dogru: '1) "There is a park in my street."  2) "I am on the bus."  3) "My school has 400 students."  4) "I really like this area."  5) "It is ten minutes on foot."',
      neden:
        'Beşi de Türkçeden aktarımdır: "var" yapısı, yer edatı, üçüncü tekil eki, "çok + fiil" sırası ve kalıp edatı. Son metnini yazmadan önce bu beşini bir kez daha oku.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d5-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'ANA FİKİR.',
      soru: 'Kerem bu e-postada ne yapıyor?',
      secenekler: [
        { id: 'a', metin: 'Mahallesini tanıtıyor ve evine nasıl gelineceğini tarif ediyor.' },
        { id: 'b', metin: 'Yeni bir eve taşındığını anlatıyor.' },
        { id: 'c', metin: 'Bursa\'nın tarihini anlatıyor.' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m6-d5-a2',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'AYRINTI.',
      soru: 'Kerem kafeye neden gidiyor?',
      secenekler: [
        { id: 'a', metin: 'Çok iyi sıcak çikolata yaptıkları için' },
        { id: 'b', metin: 'Ucuz olduğu için' },
        { id: 'c', metin: 'Evine en yakın yer olduğu için' },
      ],
      dogruId: 'a',
      aciklama: 'Sebep "because" ile veriliyor: "because they make very good hot chocolate".',
    },
    {
      id: 'a1-m6-d5-a3',
      tur: 'siralama',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Kerem\'in tarifindeki adımları sıraya diz.',
      parcalar: [
        'İkinci sokaktan sağa sap.',
        'İstasyondan çık ve sola dön.',
        'Büyük caminin önünden geç.',
        'Yaklaşık iki yüz metre düz git.',
      ],
      dogruSira: [1, 3, 2, 0],
    },
    {
      id: 'a1-m6-d5-a4',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'BAĞLAMDAN KELİME TAHMİNİ.',
      soru: '"If you get lost, call me!" — "get lost" ne anlama geliyor?',
      secenekler: [
        { id: 'a', metin: 'kaybolmak' },
        { id: 'b', metin: 'geç kalmak' },
        { id: 'c', metin: 'yorulmak' },
      ],
      dogruId: 'a',
      aciklama: 'İpucu bağlamdadır: yol tarifinin hemen ardından ve "call me" ile birlikte geliyor.',
    },
    {
      id: 'a1-m6-d5-a5',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Boşlukları doldur. (Kelime havuzu yok.)',
      parcalar: [
        { bosluk: 0 }, ' a park near my house and ', { bosluk: 1 },
        ' two supermarkets. Go out of the station and ', { bosluk: 2 },
        ' left. My building is ', { bosluk: 3 }, ' your right.',
      ],
      cevaplar: [
        { kabul: ['There is', 'there is', "There's"], ipucu: 'tekil' },
        { kabul: ['there are'], ipucu: 'çoğul' },
        { kabul: ['turn'], ipucu: 'emir kipi' },
        { kabul: ['on'] },
      ],
      aciklama: 'Bu dört boşluk modülün üç yapısını birden yokluyor: there is/are, emir kipi ve konum edatı.',
    },
    {
      id: 'a1-m6-d5-a6',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'In my neighbourhood is a big park and I very like it.',
      hataliParca: 'In my neighbourhood is … very like',
      dogruParca: 'There is … in my neighbourhood … really like',
      kabul: [
        'There is a big park in my neighbourhood and I really like it',
        'There is a big park in my neighbourhood and I like it very much',
        "There's a big park in my neighbourhood and I really like it",
      ],
      aciklama: 'İki hata birden: "there" eksik ve "very" fiilin önüne konmuş.',
    },
    {
      id: 'a1-m6-d5-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'YAZMA GÖREVİ — A1\'in son görevi. Aşama aşama ilerle.',
      gorev: 'Bir arkadaşına e-posta yaz: mahalleni tanıt ve otogardan evine nasıl geleceğini tarif et. En az 70 kelime.',
      ornekMetin:
        'Hi Anna!\n\n' +
        'I am very happy that you are coming. Let me tell you about my neighbourhood.\n\n' +
        'I live in a quiet area in Ankara. There is a small park near my house and there are three shops in our street. ' +
        'There is also a good café next to the park. I go there every Saturday because I love their cakes. ' +
        'Unfortunately there is not a cinema here, but the city centre is only twenty minutes by bus.\n\n' +
        'Now, how do you get to my house from the bus station? Go out of the station and turn right. ' +
        'Go straight on for about three hundred metres and go past a big hospital. Then take the first street on the left. ' +
        'My building is on your right, opposite the park. It is number 12.\n\n' +
        'It is about fifteen minutes on foot. See you soon!\n\nDeniz',
      kaliplar: [
        'I live in a quiet / busy area in …',
        'There is a … and there are …',
        'Unfortunately there is not a …',
        'Go out of the station and turn left / right.',
        'Go straight on for about … metres.',
        'Take the first / second street on the …',
        'My building is on your left, next to / opposite the …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'İki iş yapacaksın: mahalleni tanıt ve yol tarif et. En az 70 kelime.' },
        { ad: 'Örneği incele', aciklama: 'Yukarıdaki örneği oku. İki bölüm arasında geçiş nasıl yapılmış? Tarif hangi kalıplarla verilmiş?' },
        { ad: 'Fikir üret', aciklama: 'Not al: mahallende ne var, ne yok, nereye gidersin ve neden; sonra otogardan evine giden yolu adım adım çıkar.' },
        { ad: 'Taslak yaz', aciklama: 'Önce tanıtım, sonra tarif. Hataya takılma.' },
        { ad: 'Geri bildirim al', aciklama: 'Sistem A1\'in bütün hedef yapılarını ve Türkçe düşünme izlerini kontrol edecek.' },
        { ad: 'Düzelt ve son sürümü yaz', aciklama: 'İlk sürümle son sürümü yan yana göreceksin. Bu, A1 seviyesindeki gelişimini gösteren metin.' },
      ],
      olcut: [
        'Görevi yerine getirdim mi? (tanıtım + tarif, en az 70 kelime)',
        'there is / there are ayrımını doğru yaptım mı?',
        'Yer edatları doğru mu? (in / on / at / next to / opposite)',
        'Tarifi emir kipiyle verdim mi? (Go… Turn… Take…)',
        'En az bir "because" ile sebep yazdım mı?',
        '"on foot" ve "by bus" kalıplarını doğru kullandım mı?',
        'Türkçeden birebir çevirdiğim bir cümle kaldı mı?',
      ],
      enAzKelime: 70,
      aranan: [
        { etiket: 'there is / there are', desen: /\bthere\s+(is|are|isn't|aren't|is not|are not)\b/i },
        { etiket: 'yer edatı (next to / opposite / near)', desen: /\b(next to|opposite|near|between)\b/i },
        { etiket: 'yol tarifi emir kipi (go / turn / take)', desen: /\b(go straight|turn (left|right)|take the)\b/i },
        { etiket: 'sebep bildirme (because)', desen: /\bbecause\b/i },
        { etiket: 'ulaşım kalıbı (on foot / by bus)', desen: /\b(on foot|by bus|by car|by train)\b/i },
      ],
      tuzaklar: [
        {
          kod: 'there-is-eksik',
          desen: /(^|\.\s+)(in|on|at|near)\s+(my|the|our)\s+\w+\s+(is|are)\b/i,
          baslik: '"There" düşmüş',
          aciklama: 'Türkçede "Mahallemde bir park var." yapısında yer bildirimi başa gelir ve "var" tek başına yeter. İngilizcede cümle "There is / There are" ile başlar.',
          dogru: 'There is a park in my neighbourhood.',
          mikro: { yonerge: '"Sokağımızda üç dükkân var." cümlesini yaz.', kabul: ['There are three shops in our street', 'There are three shops on our street'] },
        },
      ],
    },
  ],

  ozet: [
    'Mahalle tanıtımı ve yol tarifi iki farklı dil ister: biri "there is/are", diğeri emir kipi.',
    'İki bölüm arasında geçiş cümlesi kur: "Now, how do you get to my house?"',
    'A1\'in beş klasik hatası: there eksikliği, yanlış yer edatı, üçüncü tekil eki, "very + fiil", "by foot".',
    'Sebep ("because") her metni güçlendirir.',
    'Bu ders A1 seviyesinin son dersidir; yazdığın metin seviyenin somut kanıtıdır.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d5-s1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre doğru olanı seç.',
      soru: 'Kerem\'in binası nerede?',
      secenekler: [
        { id: 'a', metin: 'Kafenin yanında, solda' },
        { id: 'b', metin: 'Caminin karşısında, sağda' },
        { id: 'c', metin: 'Parkın içinde' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m6-d5-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Tarifi tamamla.',
      parcalar: ['Go ', { bosluk: 0 }, ' of the station and ', { bosluk: 1 }, ' right.'],
      cevaplar: [
        { kabul: ['out'], ipucu: 'dışarı' },
        { kabul: ['turn'] },
      ],
    },
    {
      id: 'a1-m6-d5-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Mahallende bir park olduğunu ama sinema olmadığını söyle; sonra evinin parkın karşısında olduğunu ekle.',
      kabul: [
        "There is a park in my neighbourhood but there isn't a cinema My house is opposite the park",
        "There is a park in my neighbourhood but there isn't a cinema. My house is opposite the park",
        'There is a park in my neighbourhood but there is no cinema. My house is opposite the park',
        "There's a park in my neighbourhood but there isn't a cinema. My house is opposite the park",
      ],
      ornekCevap: "There is a park in my neighbourhood, but there isn't a cinema. My house is opposite the park.",
    },
  ],

  kartlar: ['k-street', 'k-park', 'k-near', 'k-opposite', 'k-next-to', 'k-go-straight', 'k-turn-left', 'k-how-far'],
  not: null,
  sonraki: null,
  kaynak: { tur: 'ozgun', aciklama: 'E-posta metni DRKOÇ için özgün yazılmıştır.' },
}
