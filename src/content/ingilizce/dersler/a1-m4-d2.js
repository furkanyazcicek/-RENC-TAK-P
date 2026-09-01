/**
 * DERS — A1 / Modül 4 / Ders 2
 * "like / love / hate + -ing — neyi sevdiğini söylemek"
 *
 * Türkçede "yüzmeyi severim" cümlesinde fiil mastar ekiyle isimleşir.
 * İngilizcede bu iş -ing ile yapılır ve öğrenci Türkçedeki "-mek/-mak"
 * mastarını "to" ile eşleştirdiği için "I like to swimming" gibi karma
 * biçimler üretir. Ders bu noktaya odaklanıyor.
 */

export default {
  id: 'a1-m4-d2',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 2,
  baslik: 'like / love / hate + -ing',
  altBaslik: 'Türkçedeki "-mek" eki İngilizcede -ing olur',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda neyi sevip sevmediğini doğru yapıyla anlatabilecek ve tercihini gerekçelendirebileceksin.',
  kazanim: 'like/love/hate + -ing yapısını kurar; tercihini gerekçesiyle birlikte ifade eder.',
  onKosullar: ['a1-m4-d1'],
  sure: 14,
  baglam: {
    durum: 'Yeni arkadaşınla ortak noktalarınızı arıyorsunuz: hangi dersleri seviyorsun, boş vaktinde ne yapmayı seversin?',
    neden: 'Tercih bildirmek, tanışmanın hemen ardından gelen ikinci konudur. Bu yapı olmadan sohbet ilerlemez.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Fiili isimleştirmek: -mek → -ing',
      metin:
        'Türkçede "yüzmek" fiili "-mek" ekiyle isim gibi kullanılır: "Yüzmeyi severim." İngilizcede bu iş -ing ile yapılır.',
      maddeler: [
        'Türkçe: yüz-MEK → yüzmeyi severim',
        'İngilizce: swim + ING → I like swimming.',
        'YANLIŞ: "I like to swimming." — "to" ve "-ing" birlikte kullanılmaz.',
        'YANLIŞ: "I like swim." — fiil çıplak kalamaz.',
        'NOT: "I like to swim" da doğrudur ama A1\'de tek biçim öğrenmek daha güvenli: -ing.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Sevgi ölçeği',
      basliklar: ['Yapı', 'Anlam', 'Örnek'],
      satirlar: [
        ['love + -ing', 'bayılmak', 'I love playing football.'],
        ['like + -ing', 'sevmek', 'I like reading books.'],
        ["don't like + -ing", 'sevmemek', "I don't like getting up early."],
        ['hate + -ing', 'nefret etmek', 'I hate doing homework.'],
        ['do not mind + -ing', 'sorun etmemek', "I don't mind waiting."],
      ],
    },
    {
      tur: 'anlatim',
      baslik: '-ing yazım kuralları',
      metin: 'Çoğu fiile doğrudan -ing eklenir, ama üç durumda yazım değişir:',
      maddeler: [
        'Çoğu fiil: + ing  →  read → reading, play → playing',
        'Sessiz -e ile bitenler: e düşer  →  write → writing, dance → dancing',
        'Tek heceli, ünlü + tek ünsüz: ünsüz iki kez  →  swim → swimming, run → running, get → getting',
        'AMA -w, -x, -y iki kez yazılmaz: play → playing, fix → fixing',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Üçüncü tekilde de kural aynı',
      metin: 'Başkasından söz ederken like/love/hate fiilleri -s alır ama ikinci fiil yine -ing kalır.',
      maddeler: [
        'She likes reading.  ✓',
        'He loves playing basketball.  ✓',
        "She doesn't like cooking.  ✓  (doesn't varken like yalın)",
        'She likes to reading.  ✗',
      ],
    },
    {
      tur: 'tuzak',
      baslik: '"very like" tuzağı',
      yanlis: 'I very like football.',
      dogru: 'I really like football.  ·  I like football very much.',
      neden:
        'Türkçede "çok severim" derken "çok" fiilin önündedir. İngilizcede "very" bir fiili niteleyemez; ya "really" kullanılır ya da "very much" cümlenin sonuna gider.',
    },
    {
      tur: 'ornek',
      satirlar: [
        { en: 'I love listening to music.', tr: 'Müzik dinlemeye bayılırım.' },
        { en: "I don't like getting up early.", tr: 'Erken kalkmayı sevmem.' },
        { en: 'My sister hates doing homework at the weekend.', tr: 'Kız kardeşim hafta sonu ödev yapmaktan nefret eder.' },
        { en: 'I really like biology because it is interesting.', tr: 'Biyolojiyi gerçekten severim çünkü ilgi çekici.' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiilleri -ing biçimiyle yaz.',
      parcalar: [
        'I like ', { bosluk: 0 }, ' (read) books. My brother loves ',
        { bosluk: 1 }, ' (swim). I hate ', { bosluk: 2 },
        ' (get) up early. She likes ', { bosluk: 3 }, ' (write) stories.',
      ],
      cevaplar: [
        { kabul: ['reading'] },
        { kabul: ['swimming'], ipucu: 'ünsüz iki kez' },
        { kabul: ['getting'], ipucu: 'ünsüz iki kez' },
        { kabul: ['writing'], ipucu: 'e düşer' },
      ],
      aciklama: 'swim → swimming (tek heceli, ünlü + tek ünsüz). write → writing (sessiz e düşer).',
    },
    {
      id: 'a1-m4-d2-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'I like to playing football.',
      hataliParca: 'to playing',
      dogruParca: 'playing',
      kabul: ['I like playing football', 'I like to play football'],
      aciklama: '"to" ve "-ing" birlikte kullanılmaz. İkisinden biri seçilir.',
      tuzaklar: [
        {
          kod: 'to-ing',
          desen: /\bto\s+\w+ing\b/i,
          baslik: '"to" ile "-ing" birlikte kullanılmış',
          aciklama: 'Türkçedeki "-mek/-mak" mastarı "to" ile eşleştirilince, üstüne bir de -ing eklenince iki mastar üst üste biniyor. İngilizcede ya "to + yalın fiil" ya da yalnız "-ing" kullanılır.',
          dogru: 'I like playing football. / I like to play football.',
          mikro: { yonerge: '"Kitap okumayı severim." cümlesini yaz.', kabul: ['I like reading books', 'I like reading', 'I like to read books'] },
        },
      ],
    },
    {
      id: 'a1-m4-d2-a3',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'I very like music.',
      hataliParca: 'very like',
      dogruParca: 'really like / like … very much',
      kabul: ['I really like music', 'I like music very much', 'I love music', 'I like music a lot'],
      aciklama: '"very" bir fiili niteleyemez. Türkçedeki "çok severim" sırası birebir aktarılamaz.',
      tuzaklar: [
        {
          kod: 'very-like',
          desen: /\bvery\s+(like|love|want|need)\b/i,
          baslik: '"very" fiilin önüne konmuş',
          aciklama: 'Türkçede "çok" fiilin hemen önündedir ("çok severim"). İngilizcede "very" yalnız sıfat ve zarfları niteler; fiil için "really" ya da cümle sonunda "very much" kullanılır.',
          dogru: 'I really like music. / I like music very much.',
          mikro: { yonerge: '"Futbolu çok severim." cümlesini yaz.', kabul: ['I really like football', 'I like football very much', 'I love football', 'I like football a lot'] },
        },
      ],
    },
    {
      id: 'a1-m4-d2-a4',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Üçüncü tekil için cümleleri tamamla.',
      parcalar: [
        'My sister ', { bosluk: 0 }, ' (like) drawing.\nMy brother ',
        { bosluk: 1 }, ' (not like) cooking.',
      ],
      cevaplar: [
        { kabul: ['likes'], ipucu: 'üçüncü tekil -s' },
        { kabul: ["doesn't like", 'does not like'], ipucu: "doesn't + yalın fiil" },
      ],
      aciklama: 'doesn\'t varken ana fiil yalın kalır: "doesn\'t like" — "doesn\'t likes" değil.',
    },
    {
      id: 'a1-m4-d2-a5',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz.',
      parcalar: ['early', 'getting up', 'like', "don't", 'I'],
      dogruSira: [4, 3, 2, 1, 0],
      aciklama: "I don't like getting up early. — olumsuzluk fiilden önce, -ing biçimi sonra.",
    },
    {
      id: 'a1-m4-d2-a6',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'İngilizce soruya İngilizce cevap ver. Sebebini de ekle.',
      soru: 'What do you like doing at the weekend?',
      kabul: [
        'I like playing football', 'I like reading books', 'I like watching films',
        'I love playing games', 'I like listening to music',
        'I like playing football because it is fun',
        'I like reading because it is relaxing',
        'I love watching films with my family',
        'I like meeting my friends',
      ],
      ornekCevap: 'I like playing football because it is fun.',
    },
    {
      id: 'a1-m4-d2-a7',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğal İngilizce?',
      baglam: 'Erken kalkmayı sevmediğini söylüyorsun.',
      secenekler: [
        { id: 'a', metin: "I don't like getting up early.", dogal: true, neden: 'Standart ve doğal kalıp: olumsuz + like + -ing.' },
        { id: 'b', metin: "I don't like to wake up early in the mornings.", dogal: false, neden: 'Dilbilgisel olarak yanlış değil ama "in the mornings" gereksiz (early zaten sabahı ima eder) ve "wake up" ile "get up" karıştırılmış.' },
        { id: 'c', metin: 'I am not liking early get up.', dogal: false, neden: '"like" -ing biçiminde kullanılmaz ve "get up" isim gibi kullanılamaz. Türkçedeki "erken kalkmak hoşuma gitmiyor" yapısı birebir aktarılmış.' },
      ],
    },
    {
      id: 'a1-m4-d2-a8',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'CÜMLEYİ ADIM ADIM BÜYÜT.',
      adimlar: [
        { yonerge: '1. "Müzik dinlemeyi severim." yaz.', kabul: ['I like listening to music', 'I love listening to music'] },
        { yonerge: '2. Ne zaman olduğunu ekle: "Akşamları müzik dinlemeyi severim."', kabul: [
          'I like listening to music in the evening', 'I love listening to music in the evening',
          'In the evening I like listening to music', 'I like listening to music in the evenings',
        ] },
        { yonerge: '3. Sevmediğin bir şeyi de ekle: "…ama ödev yapmaktan nefret ederim."', kabul: [
          'I like listening to music in the evening but I hate doing homework',
          'I like listening to music in the evening, but I hate doing homework',
          'I love listening to music in the evening but I hate doing homework',
          'I like listening to music in the evenings but I hate doing homework',
        ] },
      ],
    },
  ],

  ozet: [
    'Türkçedeki "-mek/-mak" eki İngilizcede -ing olur: yüzmeyi severim → I like swimming.',
    '"to" ile "-ing" birlikte kullanılmaz.',
    '-ing yazımı: sessiz e düşer (write → writing), tek heceli fiilde ünsüz iki kez (swim → swimming).',
    'Üçüncü tekilde like -s alır ama ikinci fiil -ing kalır: She likes reading.',
    '"very" fiili niteleyemez: "really like" ya da "like … very much".',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d2-s1',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru cümleyi seç.',
      soru: 'Hangisi doğru?',
      secenekler: [
        { id: 'a', metin: 'She likes to swimming.' },
        { id: 'b', metin: 'She likes swimming.' },
        { id: 'c', metin: 'She like swimming.' },
      ],
      dogruId: 'b',
      secenekNotu: { c: 'Üçüncü tekilde like -s alır.' },
    },
    {
      id: 'a1-m4-d2-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Fiili -ing biçimiyle yaz.',
      parcalar: ['I hate ', { bosluk: 0 }, ' (run) in the rain.'],
      cevaplar: [{ kabul: ['running'], ipucu: 'ünsüz iki kez' }],
    },
    {
      id: 'a1-m4-d2-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Ödev yapmaktan hoşlanmadığını söyle.',
      kabul: [
        "I don't like doing homework", 'I do not like doing homework',
        'I hate doing homework', "I don't like homework",
      ],
      ornekCevap: "I don't like doing homework.",
    },
  ],

  kartlar: ['k-favourite', 'k-subject', 'k-boring', 'k-interesting', 'k-good-at'],
  not: null,
  sonraki: 'a1-m4-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
