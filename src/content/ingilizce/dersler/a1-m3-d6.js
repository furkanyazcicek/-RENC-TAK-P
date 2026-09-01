/**
 * DERS — A1 / Modül 3 / Ders 6
 * "Yazma: bir günüm"
 *
 * Modülü kapatan yazma dersi. Rutin anlatımı, A1 seviyesinde yazının en
 * doğal konusudur: öğrenci bildiği bir şeyi anlatır, bütün dikkati
 * YAPIYA verebilir. Bu yüzden geri bildirimde aranan yapılar Present
 * Simple, üçüncü tekil -s, sıklık zarfları ve zaman edatlarıdır.
 */

export default {
  id: 'a1-m3-d6',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 6,
  baslik: 'Okuma ve yazma: bir günüm',
  altBaslik: 'Bir günü sırayla ve bağlantılı anlatmak',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'okuma', 'dizim', 'dusunme'],
  amac: 'Bu dersin sonunda kendi gününü sırayla, bağlaçlarla bağlanmış ve doğru zaman ifadeleriyle anlatan bir metin yazabileceksin.',
  kazanim: 'Rutin anlatan en az 60 kelimelik bağlantılı bir metin yazar; Present Simple, sıklık zarfları ve zaman edatlarını doğru kullanır.',
  onKosullar: ['a1-m3-d4'],
  sure: 20,
  baglam: {
    durum: 'Okul dergisi için "Bir günüm" başlıklı kısa bir yazı isteniyor.',
    neden: 'Rutin anlatımı hem sınavlarda hem tanışmalarda en sık istenen yazma görevidir.',
  },

  bloklar: [
    {
      tur: 'okuma',
      baslik: 'My school day — Mert, 14',
      metin:
        'My name is Mert and I am fourteen. I want to tell you about my school day.\n\n' +
        'I get up at half past six. I do not like early mornings, but my school starts at eight. ' +
        'First I wash my face, then I have breakfast with my family. We usually have eggs, cheese and tea.\n\n' +
        'I leave home at quarter past seven and I walk to school with my friend Berk. It takes about twenty minutes. ' +
        'Our lessons start at eight and finish at three.\n\n' +
        'After school I am usually very hungry! I go home and have lunch. Then I do my homework. ' +
        'I always do my homework before dinner, because after dinner I am too tired.\n\n' +
        'In the evening I sometimes watch a film or play games with my brother. ' +
        'I go to bed at half past ten. At the weekend everything is different: I get up late and I never do homework on Saturday!',
      sozluk: [
        { en: 'wash my face', tr: 'yüzümü yıkamak' },
        { en: 'leave home', tr: 'evden çıkmak' },
        { en: 'It takes …', tr: '… sürer' },
        { en: 'hungry', tr: 'aç' },
        { en: 'tired', tr: 'yorgun' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Sırayı kuran kelimeler',
      metin:
        'Bir günü anlatırken en sık yapılan hata, cümleleri arka arkaya dizip aralarına hiçbir bağ koymamaktır. Şu kelimeler metni akıcı yapar:',
      maddeler: [
        'First / Then / After that — sıra: First I wash my face, then I have breakfast.',
        'Before / After — zaman ilişkisi: I do my homework before dinner.',
        'and / but / because — bağlantı: I get up early, but I do not like it.',
        'At the weekend … — farkı belirtme: At the weekend I get up late.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Rutin yazarken kullanacağın kalıplar',
      kaliplar: [
        { en: 'I get up at …', kullanim: 'Kalkış', ornek: 'I get up at half past six.' },
        { en: 'First … then …', kullanim: 'Sıra', ornek: 'First I wash my face, then I have breakfast.' },
        { en: 'I leave home at …', kullanim: 'Evden çıkış', ornek: 'I leave home at quarter past seven.' },
        { en: 'It takes about … minutes.', kullanim: 'Süre', ornek: 'It takes about twenty minutes.' },
        { en: 'After school I …', kullanim: 'Okul sonrası', ornek: 'After school I go home.' },
        { en: 'At the weekend …', kullanim: 'Hafta sonu farkı', ornek: 'At the weekend I get up late.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Rutin yazarken en sık yapılan üç hata',
      yanlis: '1) "I am going to school every day."  2) "My school start at eight."  3) "In the night I read."',
      dogru: '1) "I go to school every day."  2) "My school starts at eight."  3) "At night I read."',
      neden:
        'Üçü de Türkçeden aktarımdır: (1) "-yor" ekinin -ing sanılması, (2) üçüncü tekil ekinin düşmesi, (3) gece için yanlış edat.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d6-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'AYRINTI.',
      soru: 'Mert okula nasıl gidiyor?',
      secenekler: [
        { id: 'a', metin: 'Otobüsle' },
        { id: 'b', metin: 'Arkadaşıyla yürüyerek' },
        { id: 'c', metin: 'Babası bırakıyor' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m3-d6-a2',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'ÇIKARIM.',
      soru: 'Mert ödevini neden akşam yemeğinden önce yapıyor?',
      secenekler: [
        { id: 'a', metin: 'Akşam yemeğinden sonra çok yorgun oluyor.' },
        { id: 'b', metin: 'Akşam yemeğinden sonra dışarı çıkıyor.' },
        { id: 'c', metin: 'Ödevi az olduğu için.' },
      ],
      dogruId: 'a',
      aciklama: 'Metin sebebi "because" ile veriyor: "because after dinner I am too tired."',
    },
    {
      id: 'a1-m3-d6-a3',
      tur: 'eslestirme',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'DOĞRU / YANLIŞ.',
      sol: [
        { id: 'c1', metin: 'Mert erken kalkmayı seviyor.' },
        { id: 'c2', metin: 'Okul üçte bitiyor.' },
        { id: 'c3', metin: 'Cumartesi ödev yapıyor.' },
        { id: 'c4', metin: 'On buçukta yatıyor.' },
      ],
      sag: [
        { id: 'y', metin: 'Yanlış' },
        { id: 'd', metin: 'Doğru' },
        { id: 'y2', metin: 'Yanlış' },
        { id: 'd2', metin: 'Doğru' },
      ],
      eslesme: { c1: 'y', c2: 'd', c3: 'y2', c4: 'd2' },
      aciklama: 'Metin "I do not like early mornings" ve "I never do homework on Saturday" diyor.',
    },
    {
      id: 'a1-m3-d6-a4',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Boşlukları First, Then, After ya da because ile doldur.',
      parcalar: [
        { bosluk: 0 }, ' I get up, ', { bosluk: 1 },
        ' I have breakfast.\nI do my homework ', { bosluk: 2 },
        ' school.\nI go to bed early ', { bosluk: 3 }, ' I get up at six.',
      ],
      cevaplar: [
        { kabul: ['First', 'first'], ipucu: 'ilk' },
        { kabul: ['then', 'Then'], ipucu: 'sonra' },
        { kabul: ['after', 'After'], ipucu: '-den sonra' },
        { kabul: ['because'], ipucu: 'sebep' },
      ],
      aciklama: 'Bu dört kelime bir günü anlatan metni akıcı hâle getirmeye yeter.',
    },
    {
      id: 'a1-m3-d6-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'In the night I am reading a book.',
      hataliParca: 'In the night I am reading',
      dogruParca: 'At night I read',
      kabul: ['At night I read a book', 'At night I read books', 'I read a book at night'],
      aciklama: 'İki hata birden: gece için "at night" denir ve alışkanlık Present Simple ile anlatılır.',
    },
    {
      id: 'a1-m3-d6-a6',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz.',
      parcalar: ['before dinner', 'always', 'my homework', 'I', 'do'],
      dogruSira: [3, 1, 4, 2, 0],
      aciklama: 'Sıklık zarfı ana fiilden önce: I always do my homework before dinner.',
    },
    {
      id: 'a1-m3-d6-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'YAZMA GÖREVİ — aşama aşama ilerle.',
      gorev: 'Okul dergisi için "Bir günüm" yazısını yaz. En az 60 kelime.',
      ornekMetin:
        'My name is Ece and I am fifteen. I want to tell you about my day.\n\n' +
        'I usually get up at seven o\'clock. First I have breakfast with my mother, then I go to school by bus. ' +
        'It takes about fifteen minutes. My lessons start at half past eight and finish at three.\n\n' +
        'After school I go home and do my homework. I always do my homework before dinner. ' +
        'In the evening I sometimes read a book or listen to music. I go to bed at eleven.\n\n' +
        'At the weekend my day is different. I get up late and I never study on Sunday!',
      kaliplar: [
        'I usually get up at …',
        'First … then …',
        'I go to school by …',
        'It takes about … minutes.',
        'After school I …',
        'In the evening I sometimes …',
        'At the weekend …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Kendi gününü sırayla anlatacaksın. En az 60 kelime, hafta sonu farkını da yaz.' },
        { ad: 'Örneği incele', aciklama: 'Yukarıdaki örneği oku. Sıra hangi kelimelerle kurulmuş? Kaç tane sıklık zarfı var?' },
        { ad: 'Fikir üret', aciklama: 'Saatleri not al: kalkış, kahvaltı, okul başlangıcı, okul bitişi, ödev, yatma.' },
        { ad: 'Taslak yaz', aciklama: 'Hataya takılma; sırayla yaz.' },
        { ad: 'Geri bildirim al', aciklama: 'Sistem uzunluk, hedef yapılar ve Türkçe düşünme izlerini kontrol edecek.' },
        { ad: 'Düzelt ve son sürümü yaz', aciklama: 'İlk sürümle son sürümü yan yana göreceksin.' },
      ],
      olcut: [
        'Görevi yerine getirdim mi? (bir günümü anlattım, en az 60 kelime)',
        'Bütün fiillerim Present Simple mı? -ing biçimi kalmadı mı?',
        'Üçüncü tekil kullandıysam -s ekini koydum mu?',
        'En az iki sıklık zarfı (usually, always, sometimes, never) kullandım mı?',
        'Zaman edatları doğru mu? (at seven, in the evening, on Monday, at night)',
        'First / then / after ile sırayı kurdum mu?',
        'Hafta sonu farkını yazdım mı?',
      ],
      enAzKelime: 60,
      aranan: [
        { etiket: 'saat bildirme (at …)', desen: /\bat\s+(\w+|\d+)/i },
        { etiket: 'sıklık zarfı', desen: /\b(always|usually|often|sometimes|never)\b/i },
        { etiket: 'sıra kelimesi (first / then / after)', desen: /\b(first|then|after)\b/i },
        { etiket: 'günün bölümü (in the morning / evening)', desen: /\bin the (morning|afternoon|evening)\b/i },
        { etiket: 'bağlaç (and / but / because)', desen: /\b(and|but|because)\b/i },
      ],
      tuzaklar: [
        {
          kod: 'surekli-alıskanlik',
          desen: /\b(am|is|are)\s+\w+ing\b/i,
          baslik: 'Rutin şimdiki zamanla yazılmış',
          aciklama: 'Türkçedeki "-yor" eki hem alışkanlığı hem şu anı taşır. Rutin anlatırken İngilizcede Present Simple kullanılır; -ing biçimi "şu anda" demektir.',
          dogru: 'I get up at seven. (I am getting up değil)',
          mikro: { yonerge: '"Her gün otobüsle okula giderim." cümlesini yaz.', kabul: ['I go to school by bus every day', 'Every day I go to school by bus', 'I take the bus to school every day'] },
        },
      ],
    },
  ],

  ozet: [
    'Bir günü anlatırken First / Then / After that ile sırayı kur.',
    'because sebebi verir ve metni tek cümlede bağlar.',
    'Rutinin tamamı Present Simple ile yazılır.',
    '"At the weekend …" ile farkı belirtmek metni zenginleştirir.',
    'Zaman edatları: at + saat/gece, in + günün bölümü, on + gün.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d6-s1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre doğru olanı seç.',
      soru: 'Mert kaçta evden çıkıyor?',
      secenekler: [
        { id: 'a', metin: '7:15' },
        { id: 'b', metin: '7:45' },
        { id: 'c', metin: '6:30' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m3-d6-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Cümleyi tamamla.',
      parcalar: ['I ', { bosluk: 0 }, ' get up at seven, ', { bosluk: 1 }, ' I have breakfast.'],
      cevaplar: [
        { kabul: ['usually', 'always'], ipucu: 'sıklık zarfı' },
        { kabul: ['then'], ipucu: 'sonra' },
      ],
    },
    {
      id: 'a1-m3-d6-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Hafta sonu geç kalktığını ve hiç ders çalışmadığını söyle.',
      kabul: [
        'At the weekend I get up late and I never study',
        'At the weekend I get up late and I never study.',
        'At weekends I get up late and I never study',
        'At the weekend I get up late and I do not study',
        'On the weekend I get up late and I never study',
      ],
      ornekCevap: 'At the weekend I get up late and I never study.',
    },
  ],

  kartlar: ['k-get-up', 'k-go-to-bed', 'k-homework', 'k-always', 'k-never', 'k-weekend', 'k-early', 'k-late'],
  not: null,
  sonraki: 'a1-m4-d1',
  kaynak: { tur: 'ozgun', aciklama: 'Okuma metni DRKOÇ için özgün yazılmıştır.' },
}
