/**
 * DERS — A2 / Modül 1 / Ders 1
 * "Past Simple: düzenli fiiller ve -ed"
 *
 * A2'nin ilk dersi. A1 boyunca öğrenci yalnız şimdiki zamanda konuştu;
 * burada ilk kez geçmişe geçiyor. Türkçe geçmişi tek ekle kurduğu için
 * (-di) öğrenci -ed ekini kolay kabul eder; asıl kırılma OLUMSUZ ve SORU
 * cümlelerindedir: Türkçede ek yerinde kalır, İngilizcede geçmiş
 * "did"e taşınır ve fiil yalın hâle döner. Ders bu tek noktaya odaklanır.
 */

export default {
  id: 'a2-m1-d1',
  surum: 1,
  dil: 'en',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 1,
  baslik: 'Past Simple: düzenli fiiller ve -ed',
  altBaslik: 'Dün ne yaptığını anlatmanın ilk adımı',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'yazma', 'dusunme'],
  amac: 'Bu dersin sonunda düzenli fiillerle geçmiş zamanda olumlu, olumsuz ve soru cümlesi kurabileceksin.',
  kazanim: 'Düzenli fiillerin Past Simple biçimini kurar; olumsuz ve soruda yardımcı fiil "did" ile fiili yalın bırakır.',
  onKosullar: ['a1-m6-d5'],
  sure: 20,
  baglam: {
    durum: 'Hafta sonu ne yaptığını soran bir arkadaşına cevap veriyorsun.',
    neden: 'Geçmiş zaman, bir dilde gerçekten sohbet edebilmenin eşiğidir: anı, hikâye ve deneyim hep geçmişte anlatılır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Tek kural: fiile -ed ekle',
      metin:
        'Düzenli fiillerde geçmiş zaman tek bir ekle kurulur ve özne ne olursa olsun biçim değişmez. ' +
        'Present Simple\'daki "he/she/it → -s" derdi burada yoktur; herkes için aynı biçim kullanılır.',
      maddeler: [
        'work → worked   ·   play → played   ·   watch → watched',
        'I worked / you worked / he worked / we worked / they worked — hepsi aynı.',
        'Sessizle biten bazı fiiller son harfi ikiler: stop → stopped, plan → planned.',
        '"e" ile bitenlere yalnız -d eklenir: like → liked, decide → decided.',
        'Ünsüz + y ile bitenlerde y düşer, -ied gelir: study → studied, try → tried.',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Asıl kırılma noktası: olumsuz ve soru',
      metin:
        'Türkçede geçmiş eki her hâlde fiilin üzerinde kalır: "çalıştım / çalışmadım / çalıştın mı?" ' +
        'İngilizcede ise olumsuz ve soruda geçmiş yardımcı fiile taşınır ve ASIL FİİL YALIN HÂLE DÖNER.',
      satirlar: [
        { sol: 'Olumlu: I worked yesterday.', sag: 'Fiilde -ed var.' },
        { sol: 'Olumsuz: I did not work yesterday.', sag: 'Geçmiş "did"te; fiil yalın: work.' },
        { sol: 'Soru: Did you work yesterday?', sag: 'Geçmiş "did"te; fiil yalın: work.' },
        { sol: 'YANLIŞ: I did not worked.', sag: 'Geçmiş iki yerde birden olamaz.' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Bu derste kullanacağın kalıplar',
      kaliplar: [
        { en: 'I + fiil-ed + zaman ifadesi', kullanim: 'Olumlu anlatım', ornek: 'I studied English yesterday.' },
        { en: 'I did not + yalın fiil', kullanim: 'Olumsuz', ornek: 'I did not watch television.' },
        { en: 'Did you + yalın fiil …?', kullanim: 'Soru', ornek: 'Did you play football at the weekend?' },
        { en: 'Yes, I did. / No, I did not.', kullanim: 'Kısa cevap', ornek: 'Did you finish it? — Yes, I did.' },
        { en: 'What did you do …?', kullanim: 'Açık uçlu soru', ornek: 'What did you do last night?' },
      ],
    },
    {
      tur: 'telaffuz',
      baslik: '-ed ekinin üç okunuşu',
      metin:
        'Yazım hep aynıdır ama okunuş üçe ayrılır. Bu ayrım kuralla değil, önceki sesle belirlenir:',
      maddeler: [
        '/t/ okunur: sessiz seslerden sonra — worked, watched, stopped, liked.',
        '/d/ okunur: ötümlü seslerden ve ünlülerden sonra — played, listened, cleaned.',
        '/ɪd/ okunur: yalnız /t/ ve /d/ sesinden sonra — wanted, decided, visited.',
        'Sadece üçüncü grup fazladan hece katar: "wanted" iki hecedir, "worked" tek hece.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Türk öğrencinin en sık üç hatası',
      yanlis: '1) "I didn\'t went to school."  2) "Did you saw the film?"  3) "Yesterday I go to the cinema."',
      dogru: '1) "I didn\'t go to school."  2) "Did you see the film?"  3) "Yesterday I went to the cinema."',
      neden:
        'İlk ikisi geçmişi iki kez işaretlemekten doğar: "did" zaten geçmişi taşır, fiil yalın kalmalıdır. ' +
        'Üçüncüsü ise Türkçedeki serbestlikten gelir: Türkçede "dün" varsa ek yine de düşmez; İngilizcede zaman ifadesi fiili geçmişe zorlar.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d1-a1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Yesterday I ____ my homework after dinner.',
      secenekler: [
        { id: 'a', metin: 'finished' },
        { id: 'b', metin: 'finish' },
        { id: 'c', metin: 'finishing' },
      ],
      dogruId: 'a',
      aciklama: '"Yesterday" cümleyi geçmişe kilitler; düzenli fiil -ed alır.',
    },
    {
      id: 'a2-m1-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Olumsuz cümlenin doğru biçimini seç.',
      soru: 'We ____ television last night.',
      secenekler: [
        { id: 'a', metin: 'did not watch' },
        { id: 'b', metin: 'did not watched' },
        { id: 'c', metin: 'not watched' },
      ],
      dogruId: 'a',
      aciklama: 'Geçmiş "did"e taşındı; asıl fiil yalın kalır.',
    },
    {
      id: 'a2-m1-d1-a3',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Fiilleri doğru biçimde yaz.',
      parcalar: [
        'Last weekend I ', { bosluk: 0 }, ' my grandmother and we ',
        { bosluk: 1 }, ' in the garden. In the evening I ', { bosluk: 2 }, ' a film.',
      ],
      cevaplar: [
        { kabul: ['visited'], ipucu: 'visit' },
        { kabul: ['worked'], ipucu: 'work' },
        { kabul: ['watched'], ipucu: 'watch' },
      ],
      aciklama: 'Üçü de düzenli fiildir; ek aynı, yalnız okunuşları farklıdır.',
    },
    {
      id: 'a2-m1-d1-a4',
      tur: 'eslestirme',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: '-ed ekinin okunuşuna göre eşleştir.',
      sol: ['worked', 'played', 'wanted'],
      sag: ['/t/ okunur', '/d/ okunur', '/ɪd/ okunur ve hece ekler'],
      eslesme: { worked: '/t/ okunur', played: '/d/ okunur', wanted: '/ɪd/ okunur ve hece ekler' },
      aciklama: 'Yalnız /t/ ve /d/ sesinden sonra fazladan hece doğar.',
    },
    {
      id: 'a2-m1-d1-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve cümleyi düzelt.',
      cumle: 'I did not finished my homework yesterday.',
      hataliParca: 'did not finished',
      dogruParca: 'did not finish',
      kabul: [
        'I did not finish my homework yesterday',
        "I didn't finish my homework yesterday",
      ],
      aciklama: 'Geçmiş iki yerde birden işaretlenemez: "did" varsa fiil yalın kalır.',
    },
    {
      id: 'a2-m1-d1-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE. Soruyu geçmiş zamanda kur.',
      durum: 'Arkadaşına dün akşam filmi izleyip izlemediğini sor.',
      kabul: [
        'Did you watch the film last night',
        'Did you watch the film yesterday evening',
      ],
      ornekCevap: 'Did you watch the film last night?',
    },
    {
      id: 'a2-m1-d1-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'YAZMA GÖREVİ — kısa ve odaklı.',
      gorev: 'Hafta sonunu anlatan beş cümle yaz. En az üç düzenli fiil ve bir olumsuz cümle kullan. En az 40 kelime.',
      ornekMetin:
        'Last weekend I stayed at home. On Saturday morning I cleaned my room and helped my mother. ' +
        'In the afternoon I studied for the maths test. I did not watch television because I was busy. ' +
        'On Sunday I played football with my friends and we finished the day in a café.',
      kaliplar: [
        'Last weekend I …',
        'On Saturday morning I …',
        'I did not … because …',
        'In the evening I …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Beş cümle, en az üç düzenli fiil, bir olumsuz cümle.' },
        { ad: 'Fikir üret', aciklama: 'Hafta sonunda yaptığın üç işi ve yapmadığın bir şeyi not al.' },
        { ad: 'Taslak yaz', aciklama: 'Zaman ifadeleriyle başla: Last weekend, On Saturday, In the evening.' },
        { ad: 'Kontrol et', aciklama: 'Olumsuz cümlende fiil yalın mı? "did not" sonrası -ed kalmasın.' },
      ],
      olcut: [
        'En az üç düzenli fiili -ed ile doğru yazdım mı?',
        'Olumsuz cümlede fiili yalın bıraktım mı?',
        'Zaman ifadesi kullandım mı? (last weekend, on Saturday)',
        'En az 40 kelime yazdım mı?',
      ],
      enAzKelime: 40,
      aranan: [
        { etiket: 'düzenli fiil (-ed)', desen: /\b\w+ed\b/i },
        { etiket: 'olumsuz geçmiş (did not / didn\'t)', desen: /\b(did not|didn't)\b/i },
        { etiket: 'geçmiş zaman ifadesi', desen: /\b(last (weekend|week|night|Saturday|Sunday)|yesterday)\b/i },
      ],
      tuzaklar: [
        {
          kod: 'cift-gecmis',
          desen: /\b(did not|didn't|did)\s+\w+ed\b/i,
          baslik: 'Geçmiş iki kez işaretlenmiş',
          aciklama: 'Türkçede ek fiilde kalır ("yapmadım"), İngilizcede geçmiş "did"e taşınır ve fiil yalın döner.',
          dogru: 'I did not finish my homework.',
          mikro: { yonerge: '"Dün televizyon izlemedim." cümlesini yaz.', kabul: ['I did not watch television yesterday', "I didn't watch television yesterday", 'I did not watch TV yesterday', "I didn't watch TV yesterday"] },
        },
      ],
    },
  ],

  ozet: [
    'Düzenli fiillerde geçmiş tek ekle kurulur: -ed. Özne biçimi değiştirmez.',
    'Olumsuz ve soruda geçmiş "did"e taşınır; asıl fiil yalın hâle döner.',
    '-ed üç türlü okunur: /t/, /d/ ve /ɪd/. Yalnız üçüncüsü hece ekler.',
    'Zaman ifadesi (yesterday, last night, two days ago) cümleyi geçmişe kilitler.',
    'En sık hata geçmişi iki kez işaretlemektir: "did not went" yerine "did not go".',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Doğru biçimi seç.',
      soru: 'She ____ to music for two hours.',
      secenekler: [
        { id: 'a', metin: 'listened' },
        { id: 'b', metin: 'listen' },
        { id: 'c', metin: 'did listened' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a2-m1-d1-s2',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Soru cümlesini tamamla.',
      parcalar: [{ bosluk: 0 }, ' you ', { bosluk: 1 }, ' the exercises yesterday?'],
      cevaplar: [
        { kabul: ['Did', 'did'], ipucu: 'yardımcı fiil' },
        { kabul: ['finish'], ipucu: 'yalın hâl' },
      ],
    },
    {
      id: 'a2-m1-d1-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün ders çalıştığını ama televizyon izlemediğini söyle.',
      kabul: [
        'I studied yesterday but I did not watch television',
        "I studied yesterday but I didn't watch television",
        'I studied yesterday but I did not watch TV',
        "I studied yesterday but I didn't watch TV",
      ],
      ornekCevap: 'I studied yesterday, but I did not watch television.',
    },
  ],

  kartlar: ['k-yesterday', 'k-last-night', 'k-ago', 'k-decide', 'k-happen'],
  not: null,
  sonraki: 'a2-m1-d2',
  kaynak: { tur: 'ozgun', aciklama: 'Örnek cümleler DRKOÇ için özgün yazılmıştır.' },
}
