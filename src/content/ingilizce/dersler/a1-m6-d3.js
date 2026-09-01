/**
 * DERS — A1 / Modül 6 / Ders 3
 * "Yol sormak ve yol tarif etmek"
 *
 * Odak beceri: İngilizce düşünme. Yol tarifi tamamen kalıplarla döner ve
 * kalıp sayısı azdır — beş cümle bütün tarifleri karşılar. Öğrenci burada
 * cümle kurmayı değil, REFLEKSİ öğrenir. Ayrıca yol tarifinde emir kipi
 * doğaldır; bu, Türk öğrencilerin "kaba mı acaba" diye tereddüt ettiği
 * bir noktadır ve açıkça söylenmesi gerekir.
 */

export default {
  id: 'a1-m6-d3',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 3,
  baslik: 'Yol sormak ve yol tarif etmek',
  altBaslik: 'Beş kalıp bütün tarifleri karşılar',
  odakBeceri: 'dusunme',
  beceriler: ['dusunme', 'dizim', 'kelime'],
  amac: 'Bu dersin sonunda bir yabancıdan nazikçe yol sorabilecek ve birine adım adım yol tarif edebileceksin.',
  kazanim: 'Yol sorma ve tarif etme kalıplarını duruma göre doğru üretir; emir kipini bu bağlamda uygun kullanır.',
  onKosullar: ['a1-m6-d2'],
  sure: 15,
  baglam: {
    durum: 'Yabancı bir şehirdesin ve postaneyi arıyorsun. Sonra biri sana yol soruyor ve bu kez tarif etme sırası sende.',
    neden: 'Yolunu bulamamak, yurt dışında karşılaşılan ilk gerçek sorundur. Bu kalıplar hazır gelmezse konuşma başlamaz.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Yol sorma: üç açılış',
      metin:
        'Doğrudan "Where is the bank?" diye başlamak kaba duyulur. Her zaman bir nezaket açılışı gelir.',
      maddeler: [
        'Excuse me, where is the post office?',
        'Excuse me, is there a bank near here?',
        'Excuse me, how do I get to the station?',
        'Sonuna eklenebilir: "…, please?"',
        'Cevap alınca mutlaka teşekkür edilir: "Thank you very much."',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Yol tarif etme: beş kalıp yeter',
      kaliplar: [
        { en: 'Go straight on.', kullanim: 'Düz devam', ornek: 'Go straight on for about two hundred metres.' },
        { en: 'Turn left / right.', kullanim: 'Dönüş', ornek: 'Turn left at the traffic lights.' },
        { en: 'Take the first / second street on the left.', kullanim: 'Kaçıncı sokak', ornek: 'Take the second street on the right.' },
        { en: 'Go past the …', kullanim: 'Geçme', ornek: 'Go past the supermarket.' },
        { en: 'It is on your left / right.', kullanim: 'Varış', ornek: 'It is on your left, opposite the park.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Yol tarifinde emir kipi kaba DEĞİLDİR',
      yanlis: 'Can you turn left and then can you go straight on?',
      dogru: 'Turn left and then go straight on.',
      neden:
        'Türkçede "sola dön" biraz sert durabilir, bu yüzden öğrenci "can you" ekleyerek yumuşatmaya çalışır ve cümle garipleşir. İngilizcede yol tarifi emir kipiyle verilir ve bu tamamen normaldir — çünkü karşı taraf zaten yardım istemiştir.',
    },
    {
      tur: 'anlatim',
      baslik: 'Mesafe ve süre',
      metin: 'Cevapta mesafe genelde SÜREYLE verilir; metre kullanmak daha az yaygındır.',
      maddeler: [
        'It is about five minutes on foot. — Yürüyerek yaklaşık beş dakika.',
        'It is ten minutes by bus. — Otobüsle on dakika.',
        'It is not far. — Uzak değil.',
        'It is quite far. You should take a bus. — Oldukça uzak, otobüse binsen iyi olur.',
        'DİKKAT: yürüyerek "on foot" denir; "by foot" yaygın bir hatadır.',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Sokakta bir konuşma',
      metin:
        'Tourist: Excuse me, is there a post office near here?\n' +
        'Local: Yes, there is one on Bahar Street.\n' +
        'Tourist: How do I get there?\n' +
        'Local: Go straight on to the traffic lights, then turn left. Go past the supermarket and take the first street on the right. ' +
        'The post office is on your left, opposite a small park.\n' +
        'Tourist: Is it far?\n' +
        'Local: No, it is about five minutes on foot.\n' +
        'Tourist: Thank you very much!\n' +
        'Local: You are welcome.',
      sozluk: [
        { en: 'traffic lights', tr: 'trafik ışıkları' },
        { en: 'go past', tr: 'geçmek, önünden geçmek' },
        { en: 'take the first street', tr: 'ilk sokağa sap' },
        { en: 'on your left', tr: 'solunda' },
        { en: 'Is it far?', tr: 'Uzak mı?' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d3-a1',
      aciklama: 'Yabancı birine soru sorarken önce "Excuse me" gelir; bu, İngilizcede zorunlu bir nezaket adımıdır.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'kolay',
      yonerge: 'DURUM → İFADE. Türkçe cümle yok; duruma bak ve İngilizce yaz.',
      durum: 'Yabancı bir şehirdesin. Bir kişiden postanenin yerini nazikçe sor.',
      kabul: [
        'Excuse me where is the post office', 'Excuse me, where is the post office?',
        'Excuse me is there a post office near here',
        'Excuse me, is there a post office near here?',
        'Excuse me how do I get to the post office',
        'Excuse me, where is the post office, please?',
      ],
      ornekCevap: 'Excuse me, where is the post office?',
      tuzaklar: [
        {
          kod: 'nezaket-yok',
          desen: /^where\s+is\s+the/i,
          baslik: 'Nezaket açılışı yok',
          aciklama: 'Doğrudan "Where is…?" diye başlamak İngilizcede sert duyulur. Yabancı birine soruyorsan önce "Excuse me" gelir.',
          dogru: 'Excuse me, where is the post office?',
          mikro: { yonerge: 'Bir yabancıdan istasyonun yerini sor.', kabul: ['Excuse me where is the station', 'Excuse me, where is the station?', 'Excuse me, how do I get to the station?'] },
        },
      ],
    },
    {
      id: 'a1-m6-d3-a2',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Tarif adımlarını doğru sıraya diz.',
      parcalar: [
        'The post office is on your left.',
        'Go straight on to the traffic lights.',
        'Take the first street on the right.',
        'Then turn left.',
      ],
      dogruSira: [1, 3, 2, 0],
      aciklama: 'Yol tarifi sırayla verilir: düz git → dön → sap → varış. Sıra bozulursa tarif işe yaramaz.',
    },
    {
      id: 'a1-m6-d3-a3',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tarifteki boşlukları doldur. (Kelime havuzu yok.)',
      parcalar: [
        'Go ', { bosluk: 0 }, ' on to the traffic lights, then ',
        { bosluk: 1 }, ' left. Go ', { bosluk: 2 },
        ' the supermarket. The bank is ', { bosluk: 3 }, ' your right.',
      ],
      cevaplar: [
        { kabul: ['straight'], ipucu: 'düz' },
        { kabul: ['turn'], ipucu: 'dön' },
        { kabul: ['past'], ipucu: 'geç' },
        { kabul: ['on'], ipucu: '… your right' },
      ],
      aciklama: '"on your right/left" kalıptır; "in your right" ya da "at your right" yanlıştır.',
    },
    {
      id: 'a1-m6-d3-a4',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'It is about ten minutes by foot.',
      hataliParca: 'by foot',
      dogruParca: 'on foot',
      kabul: ['It is about ten minutes on foot', "It's about ten minutes on foot"],
      aciklama: 'Ulaşım araçları "by" alır (by bus, by car) ama yürüyerek "on foot"tur. Kalıp olarak öğrenilir.',
      tuzaklar: [
        {
          kod: 'by-foot',
          desen: /\bby\s+foot\b/i,
          baslik: 'Kalıp yanlış kurulmuş',
          aciklama: 'Araçlar için "by" doğru olduğu için yürümek de "by foot" sanılıyor. İngilizcede bu kalıbın edatı "on"dur.',
          dogru: 'on foot',
          mikro: { yonerge: '"Okula yürüyerek giderim." cümlesini yaz.', kabul: ['I go to school on foot', 'I walk to school'] },
        },
      ],
    },
    {
      id: 'a1-m6-d3-a5',
      aciklama: 'Yol tarifinde emir kipi standarttır; yumuşatmaya çalışmak cümleyi bozar.',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hangisi doğal İngilizce?',
      baglam: 'Birine yol tarif ediyorsun.',
      secenekler: [
        { id: 'a', metin: 'Turn left and then go straight on.', dogal: true, neden: 'Yol tarifinde emir kipi standarttır ve kaba durmaz; karşı taraf zaten yardım istemiştir.' },
        { id: 'b', metin: 'Can you turn left and can you go straight on?', dogal: false, neden: 'Türkçedeki yumuşatma refleksiyle "can you" eklenmiş; tarif garip ve dolambaçlı duruyor.' },
        { id: 'c', metin: 'You must turn to left.', dogal: false, neden: '"must" burada fazla sert; ayrıca "turn to left" değil "turn left" denir.' },
      ],
    },
    {
      id: 'a1-m6-d3-a6',
      aciklama: 'Varış bilgisi her zaman en sonda verilir: "on your left, opposite a small park".',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Diyaloğa göre doğru olanı seç.',
      soru: 'Postane nerede?',
      secenekler: [
        { id: 'a', metin: 'Küçük bir parkın karşısında, solda' },
        { id: 'b', metin: 'Süpermarketin yanında, sağda' },
        { id: 'c', metin: 'Trafik ışıklarının hemen yanında' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m6-d3-a7',
      aciklama: 'Mesafe İngilizcede genelde süreyle verilir, metreyle değil.',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Biri sana istasyonun uzak olup olmadığını sordu. Yürüyerek beş dakika.',
      kabul: [
        'It is about five minutes on foot', "It's about five minutes on foot",
        'No it is not far It is about five minutes on foot',
        "No, it isn't far. It's about five minutes on foot",
        'It is five minutes on foot', 'No, it is not far',
      ],
      ornekCevap: "No, it isn't far. It's about five minutes on foot.",
    },
    {
      id: 'a1-m6-d3-a8',
      aciklama: 'Tarif üç parçadan oluşur: düz git → dön → varış. Bu sıra hiç değişmez.',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'TARİFİ ADIM ADIM BÜYÜT.',
      adimlar: [
        { yonerge: '1. "Düz git." yaz.', kabul: ['Go straight on', 'Go straight', 'Go straight ahead'] },
        { yonerge: '2. Dönüşü ekle: "Düz git ve sonra sola dön."', kabul: [
          'Go straight on and then turn left', 'Go straight and then turn left',
          'Go straight on, then turn left', 'Go straight ahead and then turn left',
        ] },
        { yonerge: '3. Varışı ekle: "…Banka solunda olacak."', kabul: [
          'Go straight on and then turn left The bank is on your left',
          'Go straight on and then turn left. The bank is on your left',
          'Go straight and then turn left. The bank is on your left',
          'Go straight on, then turn left. The bank is on your left',
        ] },
      ],
    },
  ],

  ozet: [
    'Yol sorarken önce "Excuse me" gelir; doğrudan soru sert duyulur.',
    'Beş kalıp bütün tarifleri karşılar: go straight on · turn left/right · take the … street · go past · it is on your left/right.',
    'Yol tarifinde emir kipi doğaldır ve kaba değildir.',
    'Yürüyerek "on foot" denir, "by foot" değil.',
    'Mesafe genelde süreyle verilir: "about five minutes on foot".',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d3-s1',
      aciklama: 'İki açılış da doğrudur: "Where is…?" ve "Is there a … near here?"',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Bir yabancıdan buralarda banka olup olmadığını sor.',
      kabul: [
        'Excuse me is there a bank near here', 'Excuse me, is there a bank near here?',
        'Excuse me where is the bank', 'Excuse me, is there a bank near here',
      ],
      ornekCevap: 'Excuse me, is there a bank near here?',
    },
    {
      id: 'a1-m6-d3-s2',
      aciklama: '"go past" bir yerin önünden geçmek demektir; "on your left/right" ise varış bildirir.',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Boşlukları doldur.',
      parcalar: ['Turn right and go ', { bosluk: 0 }, ' the school. The park is ', { bosluk: 1 }, ' your left.'],
      cevaplar: [
        { kabul: ['past'], ipucu: 'geçmek' },
        { kabul: ['on'] },
      ],
    },
    {
      id: 'a1-m6-d3-s3',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı düzelt.',
      cumle: 'Where is the station?',
      hataliParca: 'Where is',
      dogruParca: 'Excuse me, where is',
      kabul: [
        'Excuse me where is the station', 'Excuse me, where is the station?',
        'Excuse me, where is the station',
      ],
      aciklama: 'Dilbilgisi doğru; eksik olan nezaket açılışı.',
    },
  ],

  kartlar: ['k-excuse-me-directions', 'k-turn-left', 'k-go-straight', 'k-how-far', 'k-corner'],
  not: null,
  sonraki: 'a1-m6-d4',
  kaynak: { tur: 'ozgun', aciklama: 'Diyalog DRKOÇ için özgün yazılmıştır.' },
}
