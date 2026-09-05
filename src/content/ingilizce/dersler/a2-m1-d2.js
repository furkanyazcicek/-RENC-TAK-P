/**
 * DERS — A2 / Modül 1 / Ders 2
 * "Düzensiz fiiller: ezberlenecek yirmi biçim"
 *
 * Düzensiz fiiller kuralla çözülmez, ama rastgele de değildir: ses
 * değişimine göre kümelenirler. Ders bu yüzden yirmi fiili tek tek değil
 * BEŞ KÜME hâlinde veriyor; öğrenci listeyi değil deseni öğreniyor.
 * Olumsuz ve soruda fiilin yalın hâle döndüğü kural burada tekrar
 * sınanır, çünkü düzensiz fiillerde bu hata iki kat sık yapılır.
 */

export default {
  id: 'a2-m1-d2',
  surum: 1,
  dil: 'en',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 2,
  baslik: 'Düzensiz fiiller: yirmi biçim, beş küme',
  altBaslik: 'Liste ezberi değil, ses deseni',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'okuma', 'dusunme'],
  amac: 'Bu dersin sonunda en sık kullanılan düzensiz fiillerin geçmiş biçimlerini tanıyacak ve cümlede doğru kullanabileceksin.',
  kazanim: 'En sık yirmi düzensiz fiilin Past Simple biçimini üretir; olumsuz ve soruda yalın hâle döndürür.',
  onKosullar: ['a2-m1-d1'],
  sure: 22,
  baglam: {
    durum: 'Dün başından geçen bir olayı anlatıyorsun; anlattığın her cümlede bir düzensiz fiil var.',
    neden: 'İngilizcede en sık kullanılan fiillerin neredeyse tamamı düzensizdir: go, come, see, take, get. Bunlar bilinmeden geçmiş anlatılamaz.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Neden düzensizler?',
      metin:
        'Düzensiz fiiller dilin en eski ve en çok kullanılan fiilleridir. Çok kullanıldıkları için ' +
        'eski biçimlerini korumuşlardır; -ed kuralı sonradan gelmiş ve yeni fiillere uygulanmıştır. ' +
        'Bu yüzden listeyi görünce yılmaya gerek yok: az sayıdadır ama sık geçer, yani kendiliğinden pekişir.',
      maddeler: [
        'Kural yoktur ama DESEN vardır: fiiller ses değişimine göre kümelenir.',
        'Kümeyi öğrenmek listeyi ezberlemekten kolaydır.',
        'Olumsuz ve soruda düzensiz fiil de yalın hâle döner: "I did not go", "Did you see?"',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Beş küme, yirmi fiil',
      basliklar: ['Küme', 'Fiiller', 'Desen'],
      satirlar: [
        ['1. Hiç değişmeyenler', 'put → put · cut → cut · read → read · let → let', 'Yazım aynı; "read" okunuşu değişir: /riːd/ → /red/'],
        ['2. Sonu -ought / -aught', 'buy → bought · think → thought · bring → brought · teach → taught · catch → caught', 'Beşi de aynı sesle biter'],
        ['3. i → a → u', 'begin → began · drink → drank · sing → sang · swim → swam', 'Ortadaki ünlü değişir'],
        ['4. Sonu -ew / -ent', 'know → knew · grow → grew · send → sent · spend → spent', 'İkişerli desen'],
        ['5. Tek tek öğrenilecekler', 'go → went · see → saw · take → took · get → got · have → had · do → did · come → came', 'En sık kullanılanlar bu kümede'],
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Aynı olay, beş kümeden birer fiil',
      ornekler: [
        { en: 'I went to my friend\'s house at four.', tr: 'Saat dörtte arkadaşımın evine gittim.' },
        { en: 'We drank tea and talked for an hour.', tr: 'Çay içtik ve bir saat konuştuk.' },
        { en: 'She brought a cake from the bakery.', tr: 'Fırından bir kek getirdi.' },
        { en: 'I did not see the message until the evening.', tr: 'Mesajı akşama kadar görmedim.' },
        { en: 'Did you take the bus or did you walk?', tr: 'Otobüse mi bindin yoksa yürüdün mü?' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'İki hata, tek sebep',
      yanlis: '1) "I didn\'t saw him."  2) "Did she went home?"',
      dogru: '1) "I didn\'t see him."  2) "Did she go home?"',
      neden:
        'Düzensiz fiilin geçmiş biçimi göze çok çarptığı için öğrenci onu olumsuz ve soruda da kullanmak ister. ' +
        'Oysa kural değişmez: "did" varsa geçmiş orada taşınır, fiil yalın hâle döner. ' +
        'Kendi kendini denetlemenin kısa yolu: cümlede "did" görüyorsan fiilin sözlükteki hâlini yaz.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d2-a1',
      tur: 'eslestirme',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Fiili geçmiş biçimiyle eşleştir.',
      sol: ['go', 'see', 'buy', 'drink'],
      sag: ['went', 'saw', 'bought', 'drank'],
      eslesme: { go: 'went', see: 'saw', buy: 'bought', drink: 'drank' },
      aciklama: '"buy" ikinci kümede (-ought), "drink" üçüncü kümededir (i → a).',
    },
    {
      id: 'a2-m1-d2-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Last summer we ____ to Antalya by bus.',
      secenekler: [
        { id: 'a', metin: 'went' },
        { id: 'b', metin: 'goed' },
        { id: 'c', metin: 'gone' },
      ],
      dogruId: 'a',
      aciklama: '"go" düzensizdir; "goed" diye bir biçim yoktur. "gone" ise başka bir zamanın parçasıdır.',
    },
    {
      id: 'a2-m1-d2-a3',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Fiilleri geçmiş biçimde yaz.',
      parcalar: [
        'Yesterday I ', { bosluk: 0 }, ' up at seven, ', { bosluk: 1 },
        ' breakfast and ', { bosluk: 2 }, ' the bus to school.',
      ],
      cevaplar: [
        { kabul: ['got'], ipucu: 'get' },
        { kabul: ['had'], ipucu: 'have' },
        { kabul: ['took'], ipucu: 'take' },
      ],
      aciklama: 'Üçü de beşinci kümededir: en sık kullanılan fiiller.',
    },
    {
      id: 'a2-m1-d2-a4',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Did you saw the new film at the weekend?',
      hataliParca: 'Did you saw',
      dogruParca: 'Did you see',
      kabul: [
        'Did you see the new film at the weekend',
      ],
      aciklama: '"Did" geçmişi taşır; düzensiz fiil de olsa asıl fiil yalın kalır.',
    },
    {
      id: 'a2-m1-d2-a5',
      tur: 'siralama',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Cümleleri olay sırasına diz.',
      parcalar: [
        'Then we drank tea in the garden.',
        'I went to my grandmother\'s house on Sunday.',
        'Finally I came home at eight.',
        'She made a big lunch for everyone.',
      ],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Sıralamayı fiiller değil zaman kelimeleri belirler: on Sunday → then → finally.',
    },
    {
      id: 'a2-m1-d2-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün arkadaşını görmediğini, çünkü okula gitmediğini söyle.',
      kabul: [
        'I did not see my friend yesterday because I did not go to school',
        "I didn't see my friend yesterday because I didn't go to school",
      ],
      ornekCevap: 'I did not see my friend yesterday because I did not go to school.',
    },
  ],

  ozet: [
    'Düzensiz fiiller kuralsız değil, desenlidir: beş küme hâlinde öğrenilir.',
    'En sık kullanılan fiiller (go, see, take, get, have, do, come) beşinci kümededir.',
    'Olumsuz ve soruda düzensiz fiil de yalın hâle döner: "did not go", "Did you see?"',
    '"read" yazımı değişmez ama okunuşu değişir: /riːd/ → /red/.',
    'Kendini denetleme yolu: cümlede "did" varsa fiili sözlükteki hâliyle yaz.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d2-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: 'He ____ me a message last night.',
      secenekler: [
        { id: 'a', metin: 'sent' },
        { id: 'b', metin: 'sended' },
        { id: 'c', metin: 'did sent' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a2-m1-d2-s2',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Olumsuz cümleyi tamamla.',
      parcalar: ['I ', { bosluk: 0 }, ' ', { bosluk: 1 }, ' anything at the shop.'],
      cevaplar: [
        { kabul: ['did not', "didn't"], ipucu: 'yardımcı fiil + olumsuz' },
        { kabul: ['buy'], ipucu: 'yalın hâl' },
      ],
    },
    {
      id: 'a2-m1-d2-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün gece geç yattığını ve sabah otobüsü kaçırdığını söyle.',
      kabul: [
        'I went to bed late last night and I missed the bus in the morning',
        'Last night I went to bed late and I missed the bus in the morning',
      ],
      ornekCevap: 'I went to bed late last night and I missed the bus in the morning.',
    },
  ],

  kartrehberi: 'Bu dersteki fiiller ders kartlarında değil, günlük kullanımda pekişir.',
  kartlar: ['k-happen', 'k-remember', 'k-journey'],
  not: null,
  sonraki: 'a2-m1-d3',
  kaynak: { tur: 'ozgun', aciklama: 'Fiil kümeleri sıklık listelerine göre DRKOÇ için düzenlenmiştir.' },
}
