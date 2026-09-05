/**
 * DERS — A2 / Modül 1 / Ders 4
 * "Okuma ve yazma: unutamadığım bir gün"
 *
 * Modülün kapanış dersi. Perfekt (haben ve sein), Präteritum ve sıra
 * belirteçleri tek görevde birleşiyor. Öğrenci burada kural çalışmıyor;
 * öğrendiği yapıları kendi anısını anlatmak için kullanıyor. A2'nin
 * ölçütü budur: dil bilgisi bilmek değil, anlatabilmek.
 */

export default {
  id: 'a2-m1-d4',
  surum: 1,
  dil: 'de',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 4,
  baslik: 'Okuma ve yazma: unutamadığım bir gün',
  altBaslik: 'Modülün kapanışı — bütün geçmiş zaman tek metinde',
  odakBeceri: 'yazma',
  beceriler: ['okuma', 'yazma', 'dusunme'],
  amac: 'Bu dersin sonunda geçmişte yaşadığın bir günü baştan sona, sıralı ve bağlantılı biçimde anlatabileceksin.',
  kazanim: 'Geçmiş zamanda en az 80 kelimelik bağlantılı bir anlatı yazar; haben/sein seçimini ve sıra belirteçlerini doğru kullanır.',
  onKosullar: ['a2-m1-d3'],
  sure: 25,
  baglam: {
    durum: 'Sınıfça bir "anı defteri" hazırlıyorsunuz. Herkes unutamadığı bir günü yazıyor.',
    neden: 'Anı anlatmak A2 sınavlarının da gerçek hayatın da en sık istediği görevdir.',
  },

  bloklar: [
    {
      tur: 'okuma',
      baslik: 'Ein Tag, den ich nie vergesse',
      metin:
        'Vor zwei Jahren sind meine Familie und ich nach Kappadokien gefahren. ' +
        'Wir sind sehr früh losgefahren, weil die Reise mit dem Auto ungefähr acht Stunden gedauert hat. ' +
        'Als wir endlich angekommen sind, war ich müde, aber sehr aufgeregt.\n\n' +
        'Am nächsten Morgen sind wir um vier Uhr aufgestanden. Es war noch dunkel und ziemlich kalt. ' +
        'Zuerst hat uns ein kleiner Bus zu einem großen Feld gebracht. Dann haben wir sie gesehen: ' +
        'ungefähr fünfzig Ballons auf dem Boden. Während die Männer die Ballons vorbereitet haben, ' +
        'hat mein Bruder alles fotografiert.\n\n' +
        'Danach sind wir in den Korb gestiegen und der Ballon ist langsam nach oben gefahren. ' +
        'Plötzlich ist die Sonne hinter den Bergen aufgegangen und das ganze Tal wurde orange. ' +
        'Eine Minute lang hat niemand gesprochen.\n\n' +
        'Schließlich sind wir nach einer Stunde auf einem Feld gelandet und der Pilot hat uns eine kleine Urkunde gegeben. ' +
        'Ich erinnere mich noch gut an diesen Morgen, und die Urkunde hängt immer noch an meiner Wand.',
      sozluk: [
        { de: 'der Ballon', tr: 'balon' },
        { de: 'der Korb', tr: 'sepet' },
        { de: 'das Tal', tr: 'vadi' },
        { de: 'landen', tr: 'inmek (araç)' },
        { de: 'die Urkunde', tr: 'belge, sertifika' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'İyi bir anının dört bölümü',
      metin:
        'Metni yeniden oku ve yapısına bak. Dört bölüm var; kendi yazında da bu dördünü kur:',
      maddeler: [
        '1. ZEMİN: ne zaman, nerede, kimlerle. ("Vor zwei Jahren sind wir nach … gefahren.")',
        '2. HAZIRLIK: olaydan hemen önce ne oldu. ("Es war noch dunkel und ziemlich kalt.")',
        '3. DORUK: asıl an. Burada "plötzlich" ve duygu kelimeleri kullanılır.',
        '4. KAPANIŞ: bugün ne hissediyorsun. ("Ich erinnere mich noch gut an diesen Morgen.")',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Anı anlatmanın kalıpları',
      kaliplar: [
        { de: 'Vor zwei Jahren / Letzten Sommer …', kullanim: 'Zemin kurma', ornek: 'Vor zwei Jahren sind wir nach Kappadokien gefahren.' },
        { de: 'Es war noch dunkel / kalt / früh.', kullanim: 'Ortam betimleme', ornek: 'Es war noch dunkel und ziemlich kalt.' },
        { de: 'Während … , …', kullanim: 'Arka plan', ornek: 'Während die Männer gearbeitet haben, haben wir gewartet.' },
        { de: 'Plötzlich …', kullanim: 'Doruk noktası', ornek: 'Plötzlich ist die Sonne aufgegangen.' },
        { de: 'Ich erinnere mich noch gut an …', kullanim: 'Kapanış', ornek: 'Ich erinnere mich noch gut an diesen Morgen.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Anlatı yazarken en sık dört hata',
      yanlis: '1) "Ich habe nach Ankara gefahren."  2) "Zwei Jahre vor sind wir …"  3) "Wenn ich klein war …"  4) "Ich bin gewesen sehr müde."',
      dogru: '1) "Ich bin nach Ankara gefahren."  2) "Vor zwei Jahren sind wir …"  3) "Als ich klein war …"  4) "Ich war sehr müde."',
      neden:
        'Birincisi yardımcı fiil seçimidir: hareket varsa sein. ' +
        'İkincisi Türkçedeki "iki yıl önce" sırasının aktarımıdır; Almancada "vor" başa gelir. ' +
        'Üçüncüsü tek seferlik geçmiş olayda "als" gerektirir. ' +
        'Dördüncüsü ise sein fiilinin konuşmada Präteritum kullanılmasıdır: "war".',
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
      aciklama: 'Doruk noktası "Plötzlich ist die Sonne aufgegangen" cümlesidir; yolculuk yalnız zemin kurar.',
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
      aciklama: 'Sebep "weil" ile veriliyor: "weil die Reise … acht Stunden gedauert hat".',
    },
    {
      id: 'a2-m1-d4-a3',
      tur: 'siralama',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metindeki olayları sıraya diz.',
      parcalar: [
        'Güneş dağların arkasından doğdu.',
        'Sabah dörtte kalktılar.',
        'Bir tarlaya indiler ve belge aldılar.',
        'Sepete binip havalandılar.',
      ],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Sırayı belirteçler veriyor: zuerst → danach → plötzlich → schließlich.',
    },
    {
      id: 'a2-m1-d4-a4',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Anlatıyı tamamla.',
      parcalar: [
        { bosluk: 0 }, ' drei Jahren sind wir nach Izmir gefahren. ', { bosluk: 1 },
        ' wir angekommen sind, war es schon dunkel. ', { bosluk: 2 }, ' haben wir ein kleines Hotel am Meer gefunden.',
      ],
      cevaplar: [
        { kabul: ['Vor', 'vor'], ipucu: 'başa gelen zaman edatı' },
        { kabul: ['Als', 'als'], ipucu: 'tek seferlik geçmiş olay' },
        { kabul: ['Schließlich', 'schließlich', 'Am Ende', 'am Ende'], ipucu: 'kapanış belirteci' },
      ],
      aciklama: 'Üç boşluk modülün üç yapısını yokluyor: "vor" sırası, "als" bağlacı ve kapanış belirteci.',
    },
    {
      id: 'a2-m1-d4-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'İki hatayı bul ve cümleyi düzelt.',
      cumle: 'Zwei Jahre vor haben wir nach Kappadokien gefahren.',
      hataliParca: 'Zwei Jahre vor … haben … gefahren',
      dogruParca: 'Vor zwei Jahren … sind … gefahren',
      kabul: [
        'Vor zwei Jahren sind wir nach Kappadokien gefahren',
      ],
      aciklama: 'İki hata: "vor" başa gelmeli ve hareket fiili sein ile çekilmeli.',
    },
    {
      id: 'a2-m1-d4-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'YAZMA GÖREVİ — modülün kapanış görevi. Aşama aşama ilerle.',
      gorev: 'Unutamadığın bir günü anlat. Dört bölümü de kur: zemin, hazırlık, doruk, kapanış. En az 80 kelime.',
      ornekMetin:
        'Letzten Sommer sind mein Cousin und ich für drei Tage an die Schwarzmeerküste gefahren. ' +
        'Wir haben den Nachtbus genommen und sind am Morgen angekommen. Es war bewölkt und die Luft hat nach Regen gerochen.\n\n' +
        'Am zweiten Tag haben wir entschieden, zu einem kleinen Dorf in den Bergen zu laufen. ' +
        'Zuerst sind wir eine Stunde auf einer schmalen Straße gegangen. Dann ist die Straße zu Ende gewesen. ' +
        'Während wir gelaufen sind, ist der Nebel gekommen und wir konnten nichts mehr sehen.\n\n' +
        'Plötzlich haben wir einen Hund gehört und ein alter Mann ist mit einer Lampe gekommen. ' +
        'Er hat uns den Weg gezeigt. Schließlich sind wir im Dorf angekommen und seine Frau hat uns heiße Suppe gegeben. ' +
        'Ich erinnere mich noch gut an diese Suppe und an den Regen auf dem Dach.',
      kaliplar: [
        'Letzten Sommer / Vor zwei Jahren …',
        'Es war … und …',
        'Zuerst … Dann … Danach …',
        'Während wir …, …',
        'Plötzlich …',
        'Ich erinnere mich noch gut an …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Bir anı anlatacaksın; dört bölüm ve en az 80 kelime.' },
        { ad: 'Örneği incele', aciklama: 'Yukarıdaki metinde zemin, hazırlık, doruk ve kapanış nerede başlıyor? İşaretle.' },
        { ad: 'Fikir üret', aciklama: 'Not al: ne zaman, nerede, kiminle; hangi an seni şaşırttı; bugün ne hissediyorsun.' },
        { ad: 'Taslak yaz', aciklama: 'Dört bölümü sırayla yaz. Hataya takılma, önce akışı kur.' },
        { ad: 'Geri bildirim al', aciklama: 'Sistem haben/sein seçimini, Partizip yerini ve Türkçe düşünme izlerini kontrol edecek.' },
        { ad: 'Düzelt ve son sürümü yaz', aciklama: 'İlk sürümle son sürümü yan yana göreceksin. Bu metin A2\'nin ilk somut kanıtı.' },
      ],
      olcut: [
        'Dört bölümü de kurdum mu? (zemin, hazırlık, doruk, kapanış)',
        'Hareket fiillerinde sein, nesneli fiillerde haben kullandım mı?',
        'Her Perfekt cümlesi Partizip II ile bitiyor mu?',
        'En az üç sıra belirteci kullandım mı?',
        'Kapanışta bugünkü duygumu yazdım mı?',
        'Türkçeden birebir çevirdiğim bir cümle kaldı mı?',
      ],
      enAzKelime: 80,
      aranan: [
        { etiket: 'geçmiş zaman ifadesi (vor … / letzten …)', desen: /\b(vor (zwei|drei|einem|einer)|letzten|letzte|gestern)\b/i },
        { etiket: 'sıra belirteci', desen: /\b(zuerst|dann|danach|schließlich|am ende)\b/i },
        { etiket: 'sein ile Perfekt', desen: /\b(bin|ist|sind)\s+\w*(gefahren|gegangen|gekommen|angekommen|geblieben|aufgestanden)\b/i },
        { etiket: 'dönüm noktası (plötzlich)', desen: /\bplötzlich\b/i },
        { etiket: 'kapanış (ich erinnere mich / ich vergesse nie)', desen: /\b(erinnere mich|vergesse)\b/i },
      ],
      tuzaklar: [
        {
          kod: 'vor-sirasi',
          desen: /\b(zwei|drei|vier|fünf|zehn)\s+(jahre|monate|wochen|tage)\s+vor\b/i,
          baslik: 'Zaman ifadesinin sırası ters',
          aciklama: 'Türkçede "iki yıl önce" derken "önce" sona gelir ve öğrenci bunu Almancaya taşır. Almancada "vor" BAŞA gelir ve Dativ ister: "vor zwei Jahren".',
          dogru: 'Vor zwei Jahren sind wir nach Kappadokien gefahren.',
          mikro: { yonerge: '"Üç yıl önce İzmir\'e gittik." cümlesini yaz.', kabul: ['Vor drei Jahren sind wir nach Izmir gefahren'] },
        },
        {
          kod: 'haben-hareket-fiili',
          desen: /\b(habe|hast|hat|haben)\s+\w*\s*(gefahren|gegangen|gekommen|angekommen|aufgestanden)\b/i,
          baslik: 'Hareket fiilinde yanlış yardımcı fiil',
          aciklama: 'Türkçede yardımcı fiil seçimi yoktur; öğrenci her yere "haben" koyar. Yer ya da durum değişimi varsa "sein" gerekir.',
          dogru: 'Ich bin nach Hause gegangen.',
          mikro: { yonerge: '"Eve gittim." cümlesini yaz.', kabul: ['Ich bin nach Hause gegangen'] },
        },
      ],
    },
  ],

  ozet: [
    'İyi bir anı dört bölümden oluşur: zemin, hazırlık, doruk, kapanış.',
    'Doruk noktası "plötzlich" ile işaretlenir; kapanış bugünkü duyguyla yapılır.',
    '"vor" zaman ifadesinin başına gelir ve Dativ ister: vor zwei Jahren.',
    'Hareket fiilleri sein, nesne alan fiiller haben ile çekilir.',
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
      aciklama: 'Son paragrafta geçiyor: "sind … gelandet und der Pilot hat uns eine Urkunde gegeben".',
    },
    {
      id: 'a2-m1-d4-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Kapanış cümlesini tamamla.',
      parcalar: ['Ich ', { bosluk: 0 }, ' mich noch gut an diesen Morgen.'],
      cevaplar: [
        { kabul: ['erinnere'], ipucu: 'sich erinnern' },
      ],
      aciklama: 'Dönüşlü fiildir: "ich erinnere mich an …".',
    },
    {
      id: 'a2-m1-d4-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'İki yıl önce Kapadokya\'ya gittiğini ve o günü hâlâ hatırladığını söyle.',
      kabul: [
        'Vor zwei Jahren bin ich nach Kappadokien gefahren und ich erinnere mich noch an diesen Tag',
        'Vor zwei Jahren bin ich nach Kappadokien gefahren und ich erinnere mich noch gut an diesen Tag',
      ],
      ornekCevap: 'Vor zwei Jahren bin ich nach Kappadokien gefahren, und ich erinnere mich noch gut an diesen Tag.',
    },
  ],

  kartlar: ['de-vor-jahren', 'de-reise', 'de-aufregend', 'de-schrecklich', 'de-sich-erinnern', 'de-erlebnis'],
  not: null,
  sonraki: null,
  kaynak: { tur: 'ozgun', aciklama: 'Anı metinleri DRKOÇ için özgün yazılmıştır.' },
}
