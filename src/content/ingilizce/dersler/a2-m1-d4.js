/**
 * DERS — A2 / Modül 1 / Ders 4
 * "Okuma ve yazma: unutamadığım bir gün"
 *
 * Modülün kapanış dersi. Önceki üç dersin hepsini tek göreve topluyor:
 * düzenli fiiller, düzensiz fiiller ve sıra belirteçleri. Öğrenci burada
 * kural çalışmıyor; öğrendiği kuralları kendi anısını anlatmak için
 * kullanıyor. A2'nin ölçütü budur: dil bilgisi değil, anlatabilme.
 */

export default {
  id: 'a2-m1-d4',
  surum: 1,
  dil: 'en',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 4,
  baslik: 'Okuma ve yazma: unutamadığım bir gün',
  altBaslik: 'Modülün kapanışı — bütün geçmiş zaman tek metinde',
  odakBeceri: 'yazma',
  beceriler: ['okuma', 'yazma', 'dusunme'],
  amac: 'Bu dersin sonunda geçmişte yaşadığın bir günü baştan sona, sıralı ve bağlantılı biçimde anlatabileceksin.',
  kazanim: 'Geçmiş zamanda en az 80 kelimelik bağlantılı bir anlatı yazar; sıra belirteçleri ve duygu ifadeleriyle metni kapatır.',
  onKosullar: ['a2-m1-d3'],
  sure: 25,
  baglam: {
    durum: 'Sınıfça bir "anı defteri" hazırlıyorsunuz. Herkes unutamadığı bir günü yazıyor; senin metnin de deftere girecek.',
    neden: 'Anı anlatmak A2 seviyesinin en gerçek görevidir: sınavda da, gerçek hayatta da en sık istenen budur.',
  },

  bloklar: [
    {
      tur: 'okuma',
      baslik: 'A day I will never forget',
      metin:
        'Two years ago my family and I went to Cappadocia for a short holiday. ' +
        'We left home very early because the journey took about eight hours by car. ' +
        'When we finally arrived, I was tired but very excited.\n\n' +
        'The next morning we woke up at four o\'clock. It was still dark and quite cold. ' +
        'First, a small bus took us to a big open field. Then we saw them: about fifty balloons on the ground. ' +
        'While the men were preparing the balloons, my brother took photos of everything.\n\n' +
        'After that, we got into the basket and the balloon slowly went up. ' +
        'Suddenly the sun came up behind the mountains and the whole valley turned orange. ' +
        'Nobody spoke for a minute. It was the most beautiful thing I ever saw.\n\n' +
        'Finally, after an hour, we landed in a field and the pilot gave us a small certificate. ' +
        'I still remember that morning very well, and I still have the certificate on my wall.',
      sozluk: [
        { en: 'balloon', tr: 'balon' },
        { en: 'basket', tr: 'sepet' },
        { en: 'valley', tr: 'vadi' },
        { en: 'land', tr: 'inmek (araç)' },
        { en: 'certificate', tr: 'belge, sertifika' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'İyi bir anının dört bölümü',
      metin:
        'Metni yeniden oku ve yapısına bak. Dört bölüm var; kendi yazında da bu dördünü kur:',
      maddeler: [
        '1. ZEMİN: ne zaman, nerede, kimlerle. ("Two years ago my family and I went to…")',
        '2. HAZIRLIK: olaydan hemen önce ne oldu. ("We woke up at four. It was still dark.")',
        '3. DORUK: asıl an. Burada "suddenly" ve duygu kelimeleri kullanılır.',
        '4. KAPANIŞ: bugün ne hissediyorsun. ("I still remember that morning very well.")',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Anı anlatmanın kalıpları',
      kaliplar: [
        { en: 'Two years ago / Last summer, …', kullanim: 'Zemin kurma', ornek: 'Two years ago we went to Cappadocia.' },
        { en: 'It was still dark / cold / early.', kullanim: 'Ortam betimleme', ornek: 'It was still dark and quite cold.' },
        { en: 'While … was …ing, …', kullanim: 'Arka plan', ornek: 'While the men were preparing the balloons, we waited.' },
        { en: 'Suddenly …', kullanim: 'Doruk noktası', ornek: 'Suddenly the sun came up behind the mountains.' },
        { en: 'I still remember … very well.', kullanim: 'Kapanış', ornek: 'I still remember that morning very well.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Anlatı yazarken en sık dört hata',
      yanlis: '1) "I was go to Ankara."  2) "Two years before we went…"  3) "I didn\'t saw the sun."  4) "It was very terrible."',
      dogru: '1) "I went to Ankara."  2) "Two years ago we went…"  3) "I didn\'t see the sun."  4) "It was terrible."',
      neden:
        'Birincisi iki fiili üst üste koymaktır; "was" ile "go" birlikte kullanılmaz. ' +
        'İkincisi Türkçedeki "iki yıl önce" sırasının aktarımıdır: İngilizcede "ago" sona gelir. ' +
        'Üçüncüsü geçmişin iki kez işaretlenmesidir. Dördüncüsü ise zaten uç anlam taşıyan bir sıfatı güçlendirmeye çalışmaktır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d4-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'ANA FİKİR.',
      soru: 'Metinde asıl anlatılan an hangisi?',
      secenekler: [
        { id: 'a', metin: 'Balonla gün doğumunu izlemek' },
        { id: 'b', metin: 'Sekiz saatlik araba yolculuğu' },
        { id: 'c', metin: 'Otelde geçen bir akşam' },
      ],
      dogruId: 'a',
      aciklama: 'Metnin doruk noktası "Suddenly the sun came up" cümlesidir; yolculuk ve otel yalnız zemin kurar.',
    },
    {
      id: 'a2-m1-d4-a2',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'AYRINTI.',
      soru: 'Aile neden çok erken yola çıktı?',
      secenekler: [
        { id: 'a', metin: 'Yolculuk arabayla yaklaşık sekiz saat sürdüğü için' },
        { id: 'b', metin: 'Hava çok sıcak olduğu için' },
        { id: 'c', metin: 'Otele erken varmaları gerektiği için' },
      ],
      dogruId: 'a',
      aciklama: 'Sebep "because" ile veriliyor: "because the journey took about eight hours".',
    },
    {
      id: 'a2-m1-d4-a3',
      tur: 'siralama',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metindeki olayları sıraya diz.',
      parcalar: [
        'Güneş dağların arkasından doğdu.',
        'Sabah dörtte uyandılar.',
        'Bir tarlaya indiler ve belge aldılar.',
        'Sepete binip havalandılar.',
      ],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Sırayı sıra belirteçleri veriyor: First → After that → Suddenly → Finally.',
    },
    {
      id: 'a2-m1-d4-a4',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Anlatıyı tamamla.',
      parcalar: [
        'Three years ', { bosluk: 0 }, ' we went to Izmir. ', { bosluk: 1 },
        ' we arrived, it was already dark. ', { bosluk: 2 }, ' we found a small hotel near the sea.',
      ],
      cevaplar: [
        { kabul: ['ago'], ipucu: 'sona gelen zaman kelimesi' },
        { kabul: ['When', 'when'], ipucu: 'kesen olay bağlacı' },
        { kabul: ['Finally', 'finally', 'In the end', 'in the end'], ipucu: 'kapanış belirteci' },
      ],
      aciklama: 'Üç boşluk modülün üç yapısını yokluyor: "ago" sırası, kesen olay bağlacı ve kapanış belirteci.',
    },
    {
      id: 'a2-m1-d4-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'İki hatayı bul ve cümleyi düzelt.',
      cumle: 'Two years before we was go to Cappadocia.',
      hataliParca: 'Two years before … was go',
      dogruParca: 'Two years ago … went',
      kabul: [
        'Two years ago we went to Cappadocia',
      ],
      aciklama: 'İki hata: "before" yerine "ago" ve "was go" yerine tek fiil "went".',
    },
    {
      id: 'a2-m1-d4-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'YAZMA GÖREVİ — modülün kapanış görevi. Aşama aşama ilerle.',
      gorev: 'Unutamadığın bir günü anlat. Dört bölümü de kur: zemin, hazırlık, doruk, kapanış. En az 80 kelime.',
      ornekMetin:
        'Last summer my cousin and I went to the Black Sea coast for three days. ' +
        'We took the night bus and arrived in the morning. It was cloudy and the air smelled of rain.\n\n' +
        'On the second day we decided to walk up to a small village in the mountains. ' +
        'First, we followed a narrow road for an hour. Then the road finished and we continued on a path. ' +
        'While we were walking, the fog came down and we could not see anything.\n\n' +
        'Suddenly we heard a dog and an old man appeared with a lamp. He showed us the way to the village. ' +
        'Finally we arrived and his wife gave us hot soup. ' +
        'I still remember that soup and the sound of the rain on the roof.',
      kaliplar: [
        'Last summer / Two years ago, …',
        'It was … and …',
        'First, … Then, … After that, …',
        'While we were …, …',
        'Suddenly …',
        'I still remember …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Bir anı anlatacaksın; dört bölüm ve en az 80 kelime.' },
        { ad: 'Örneği incele', aciklama: 'Yukarıdaki metinde zemin, hazırlık, doruk ve kapanış nerede başlıyor? İşaretle.' },
        { ad: 'Fikir üret', aciklama: 'Not al: ne zaman, nerede, kiminle; hangi an seni şaşırttı; bugün ne hissediyorsun.' },
        { ad: 'Taslak yaz', aciklama: 'Dört bölümü sırayla yaz. Hataya takılma, önce akışı kur.' },
        { ad: 'Geri bildirim al', aciklama: 'Sistem geçmiş zaman biçimlerini, sıra belirteçlerini ve Türkçe düşünme izlerini kontrol edecek.' },
        { ad: 'Düzelt ve son sürümü yaz', aciklama: 'İlk sürümle son sürümü yan yana göreceksin. Bu metin A2\'nin ilk somut kanıtı.' },
      ],
      olcut: [
        'Dört bölümü de kurdum mu? (zemin, hazırlık, doruk, kapanış)',
        'Bütün fiiller geçmiş zamanda mı?',
        'En az üç sıra belirteci kullandım mı?',
        'Bir "while" ya da "when" cümlesi var mı?',
        'Kapanışta bugünkü duygumu yazdım mı?',
        'Türkçeden birebir çevirdiğim bir cümle kaldı mı?',
      ],
      enAzKelime: 80,
      aranan: [
        { etiket: 'geçmiş zaman ifadesi (ago / last …)', desen: /\b(ago|last (summer|year|week|month|winter))\b/i },
        { etiket: 'sıra belirteci', desen: /\b(first|then|after that|finally|in the end)\b/i },
        { etiket: 'while / when cümlesi', desen: /\b(while|when)\b/i },
        { etiket: 'dönüm noktası (suddenly)', desen: /\bsuddenly\b/i },
        { etiket: 'kapanış (I still remember / I will never forget)', desen: /\b(still remember|never forget)\b/i },
      ],
      tuzaklar: [
        {
          kod: 'ago-sirasi',
          desen: /\b(ago|before)\s+(two|three|four|five|ten)\s+(years?|months?|weeks?|days?)\b/i,
          baslik: 'Zaman ifadesinin sırası ters',
          aciklama: 'Türkçede "iki yıl önce" derken "önce" sona gelir ve öğrenci bunu İngilizceye başa taşır. İngilizcede de "ago" SONA gelir: "two years ago".',
          dogru: 'Two years ago we went to Cappadocia.',
          mikro: { yonerge: '"Üç yıl önce İzmir\'e gittik." cümlesini yaz.', kabul: ['Three years ago we went to Izmir', 'We went to Izmir three years ago'] },
        },
        {
          kod: 'was-plus-fiil',
          desen: /\b(was|were)\s+(go|come|see|take|eat|do|make)\b/i,
          baslik: 'İki fiil üst üste',
          aciklama: 'Geçmiş zamanda tek fiil yeter: "went". "was go" gibi bir yapı yoktur.',
          dogru: 'I went to Ankara.',
          mikro: { yonerge: '"Ankara\'ya gittim." cümlesini yaz.', kabul: ['I went to Ankara'] },
        },
      ],
    },
  ],

  ozet: [
    'İyi bir anı dört bölümden oluşur: zemin, hazırlık, doruk, kapanış.',
    'Doruk noktası "suddenly" ile işaretlenir; kapanış bugünkü duyguyla yapılır.',
    '"ago" daima zaman ifadesinin sonuna gelir: two years ago.',
    'Geçmiş zamanda tek fiil yeter; "was go" gibi ikili yapı yoktur.',
    'Bu metin A2 seviyesindeki ilk somut kanıtındır: dil bilgisi değil, anlatabilme.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d4-s1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre doğru olanı seç.',
      soru: 'Balon turunun sonunda ne oldu?',
      secenekler: [
        { id: 'a', metin: 'Bir tarlaya indiler ve belge aldılar.' },
        { id: 'b', metin: 'Otele geri döndüler.' },
        { id: 'c', metin: 'Yağmur başladı.' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a2-m1-d4-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Kapanış cümlesini tamamla.',
      parcalar: ['I still ', { bosluk: 0 }, ' that morning very well.'],
      cevaplar: [
        { kabul: ['remember'], ipucu: 'hatırlamak' },
      ],
    },
    {
      id: 'a2-m1-d4-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'İki yıl önce Kapadokya\'ya gittiğini ve o günü hâlâ hatırladığını söyle.',
      kabul: [
        'Two years ago I went to Cappadocia and I still remember that day',
        'I went to Cappadocia two years ago and I still remember that day',
      ],
      ornekCevap: 'Two years ago I went to Cappadocia, and I still remember that day.',
    },
  ],

  kartlar: ['k-ago', 'k-journey', 'k-exciting', 'k-terrible', 'k-remember', 'k-suddenly'],
  not: null,
  sonraki: null,
  kaynak: { tur: 'ozgun', aciklama: 'Anı metinleri DRKOÇ için özgün yazılmıştır.' },
}
