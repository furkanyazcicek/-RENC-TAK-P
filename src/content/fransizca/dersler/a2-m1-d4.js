/**
 * DERS — A2 / Modül 1 / Ders 4
 * "Okuma ve yazma: bir çocukluk anısı"
 *
 * Modülün kapanış dersi. Passé composé, imparfait ve sıra belirteçleri
 * tek görevde birleşiyor. Öğrenci burada kural çalışmıyor; iki geçmiş
 * zaman arasındaki seçimi kendi anısını anlatırken yapıyor. A2'nin
 * ölçütü budur: çekim bilmek değil, doğru zamanı seçebilmek.
 */

export default {
  id: 'a2-m1-d4',
  surum: 1,
  dil: 'fr',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 4,
  baslik: 'Okuma ve yazma: bir çocukluk anısı',
  altBaslik: 'Modülün kapanışı — iki geçmiş zaman tek metinde',
  odakBeceri: 'yazma',
  beceriler: ['okuma', 'yazma', 'dusunme'],
  amac: 'Bu dersin sonunda bir çocukluk anını arka planıyla birlikte, iki geçmiş zamanı doğru seçerek anlatabileceksin.',
  kazanim: 'En az 80 kelimelik bir anlatı yazar; arka planı imparfait, olayları passé composé ile kurar.',
  onKosullar: ['a2-m1-d3'],
  sure: 25,
  baglam: {
    durum: 'Sınıfça bir "anı defteri" hazırlıyorsunuz. Herkes bir çocukluk anısını yazıyor.',
    neden: 'Çocukluk anlatmak A2 sınavlarının klasik görevidir ve iki geçmiş zamanın ayrımını en iyi bu görev ölçer.',
  },

  bloklar: [
    {
      tur: 'okuma',
      baslik: 'Un jour que je n’oublierai jamais',
      metin:
        'Il y a deux ans, ma famille et moi sommes allés en Cappadoce pour un court séjour. ' +
        'Nous sommes partis très tôt parce que le voyage en voiture durait environ huit heures. ' +
        'Quand nous sommes enfin arrivés, j’étais fatigué mais très content.\n\n' +
        'Le lendemain matin, nous nous sommes levés à quatre heures. Il faisait encore nuit et il faisait froid. ' +
        'D’abord, un petit bus nous a emmenés dans un grand champ. Puis nous les avons vus : ' +
        'environ cinquante montgolfières sur le sol. Pendant que les hommes préparaient les ballons, ' +
        'mon frère prenait des photos.\n\n' +
        'Ensuite, nous sommes montés dans le panier et la montgolfière est montée lentement. ' +
        'Soudain, le soleil est apparu derrière les montagnes et toute la vallée est devenue orange. ' +
        'Personne n’a parlé pendant une minute.\n\n' +
        'Enfin, après une heure, nous avons atterri dans un champ et le pilote nous a donné un petit certificat. ' +
        'Je me souviens encore très bien de ce matin, et le certificat est toujours sur mon mur.',
      sozluk: [
        { fr: 'la montgolfière', tr: 'sıcak hava balonu' },
        { fr: 'le panier', tr: 'sepet' },
        { fr: 'la vallée', tr: 'vadi' },
        { fr: 'atterrir', tr: 'inmek (araç)' },
        { fr: 'le certificat', tr: 'belge, sertifika' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'İyi bir anının dört bölümü',
      metin:
        'Metni yeniden oku ve hangi cümlenin hangi zamanla kurulduğuna bak. Dört bölüm var:',
      maddeler: [
        '1. ZEMİN: ne zaman, nerede, kimlerle → passé composé ile başlar.',
        '2. ARKA PLAN: hava, ortam, duygu → imparfait ("Il faisait froid", "j’étais fatigué").',
        '3. DORUK: asıl an → passé composé ve "soudain".',
        '4. KAPANIŞ: bugün ne hissediyorsun → "Je me souviens encore de …".',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Anı anlatmanın kalıpları',
      kaliplar: [
        { fr: 'Il y a deux ans / L’été dernier …', kullanim: 'Zemin kurma', ornek: 'Il y a deux ans, nous sommes allés en Cappadoce.' },
        { fr: 'Il faisait … / Il y avait …', kullanim: 'Arka plan', ornek: 'Il faisait froid et il y avait du vent.' },
        { fr: 'Pendant que …ait, …', kullanim: 'Süren arka plan', ornek: 'Pendant que les hommes préparaient les ballons, nous attendions.' },
        { fr: 'Soudain, …', kullanim: 'Doruk noktası', ornek: 'Soudain, le soleil est apparu.' },
        { fr: 'Je me souviens encore de …', kullanim: 'Kapanış', ornek: 'Je me souviens encore de ce matin.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Anlatı yazarken en sık dört hata',
      yanlis: '1) "J’ai allé en Cappadoce."  2) "Deux ans il y a, nous …"  3) "Il a fait froid et j’ai été fatigué."  4) "Quand j’étais petit, j’ai joué chaque jour."',
      dogru: '1) "Je suis allé en Cappadoce."  2) "Il y a deux ans, nous …"  3) "Il faisait froid et j’étais fatigué."  4) "Quand j’étais petit, je jouais chaque jour."',
      neden:
        'Birincisi yardımcı fiil seçimidir. İkincisi Türkçedeki "iki yıl önce" sırasının aktarımıdır. ' +
        'Üçüncüsü arka planın passé composé ile kurulmasıdır; hava ve duygu daima imparfait ister. ' +
        'Dördüncüsü tekrar eden alışkanlığın yanlış zamanla verilmesidir.',
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
      aciklama: 'Doruk noktası "Soudain, le soleil est apparu" cümlesidir; yolculuk yalnız zemin kurar.',
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
      aciklama: 'Sebep "parce que" ile veriliyor ve süre imparfait ile: "le voyage durait environ huit heures".',
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
      aciklama: 'Sırayı belirteçler veriyor: d’abord → ensuite → soudain → enfin.',
    },
    {
      id: 'a2-m1-d4-a4',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Doğru geçmiş zamanı seç ve boşlukları doldur.',
      parcalar: [
        'Il ', { bosluk: 0 }, ' froid ce matin-là. Nous ', { bosluk: 1 },
        ' dans le panier et soudain le soleil ', { bosluk: 2 }, '.',
      ],
      cevaplar: [
        { kabul: ['faisait'], ipucu: 'arka plan: imparfait' },
        { kabul: ['sommes montés', 'sommes montées'], ipucu: 'olay: passé composé' },
        { kabul: ['est apparu'], ipucu: 'olay: passé composé' },
      ],
      aciklama: 'Hava arka plandır (imparfait), hareket ve dönüm noktası olaydır (passé composé).',
    },
    {
      id: 'a2-m1-d4-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'İki hatayı bul ve cümleyi düzelt.',
      cumle: 'Deux ans il y a, j’ai allé en Cappadoce.',
      hataliParca: 'Deux ans il y a … j’ai allé',
      dogruParca: 'Il y a deux ans … je suis allé',
      kabul: [
        "Il y a deux ans je suis allé en Cappadoce",
        "Il y a deux ans, je suis allé en Cappadoce",
        "Il y a deux ans je suis allée en Cappadoce",
      ],
      aciklama: 'İki hata: "il y a" başa gelmeli ve "aller" être ile çekilmeli.',
    },
    {
      id: 'a2-m1-d4-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'YAZMA GÖREVİ — modülün kapanış görevi. Aşama aşama ilerle.',
      gorev: 'Unutamadığın bir günü ya da bir çocukluk anını anlat. Arka planı imparfait, olayları passé composé ile kur. En az 80 kelime.',
      ornekMetin:
        'L’été dernier, mon cousin et moi sommes allés sur la côte de la mer Noire pour trois jours. ' +
        'Nous avons pris le bus de nuit et nous sommes arrivés le matin. Il faisait gris et l’air sentait la pluie.\n\n' +
        'Le deuxième jour, nous avons décidé de monter à un petit village dans les montagnes. ' +
        'D’abord, nous avons suivi une route étroite pendant une heure. Puis la route s’est terminée. ' +
        'Pendant que nous marchions, le brouillard est descendu et nous ne voyions plus rien.\n\n' +
        'Soudain, nous avons entendu un chien et un vieil homme est arrivé avec une lampe. ' +
        'Il nous a montré le chemin. Enfin, nous sommes arrivés au village et sa femme nous a donné une soupe chaude. ' +
        'Je me souviens encore de cette soupe et du bruit de la pluie sur le toit.',
      kaliplar: [
        'Il y a deux ans / L’été dernier, …',
        'Il faisait … et il y avait …',
        'D’abord … Puis … Ensuite …',
        'Pendant que nous …ions, …',
        'Soudain, …',
        'Je me souviens encore de …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Bir anı anlatacaksın; arka plan imparfait, olaylar passé composé.' },
        { ad: 'Örneği incele', aciklama: 'Yukarıdaki metinde hangi cümleler imparfait? Hepsi ortam ya da süren durum mu anlatıyor?' },
        { ad: 'Fikir üret', aciklama: 'Not al: ne zaman, nerede, kiminle; hava nasıldı; hangi an seni şaşırttı.' },
        { ad: 'Taslak yaz', aciklama: 'Önce olayları sırala, sonra aralarına arka plan cümleleri ekle.' },
        { ad: 'Geri bildirim al', aciklama: 'Sistem iki geçmiş zaman arasındaki seçimini ve yardımcı fiilleri kontrol edecek.' },
        { ad: 'Düzelt ve son sürümü yaz', aciklama: 'İlk sürümle son sürümü yan yana göreceksin. Bu metin A2\'nin ilk somut kanıtı.' },
      ],
      olcut: [
        'Arka plan cümlelerini imparfait ile kurdum mu? (hava, ortam, duygu)',
        'Olayları passé composé ile kurdum mu?',
        'Hareket fiillerinde être kullandım mı?',
        'En az üç sıra belirteci var mı?',
        'Kapanışta bugünkü duygumu yazdım mı?',
        'En az 80 kelime yazdım mı?',
      ],
      enAzKelime: 80,
      aranan: [
        { etiket: 'geçmiş zaman ifadesi (il y a / dernier)', desen: /\b(il y a|dernier|dernière|hier)\b/i },
        { etiket: 'imparfait (arka plan)', desen: /\b\w+(ais|ait|ions|iez|aient)\b/i },
        { etiket: 'passé composé (olay)', desen: /\b(ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|sont)\s+\w+(é|i|u|és|ée|ées)\b/i },
        { etiket: 'sıra belirteci', desen: /\b(d['’]abord|puis|ensuite|enfin|soudain)\b/i },
        { etiket: 'kapanış (je me souviens / je n’oublierai)', desen: /\b(souviens|oublierai)\b/i },
      ],
      tuzaklar: [
        {
          kod: 'il-y-a-sirasi',
          desen: /\b(deux|trois|quatre|cinq|dix)\s+(ans?|mois|semaines?|jours?)\s+il y a\b/i,
          baslik: 'Zaman ifadesinin sırası ters',
          aciklama: 'Türkçede "iki yıl önce" derken "önce" sona gelir ve öğrenci bunu Fransızcaya taşır. Fransızcada "il y a" BAŞA gelir.',
          dogru: 'Il y a deux ans, nous sommes allés en Cappadoce.',
          mikro: { yonerge: '"Üç yıl önce İzmir\'e gittik." cümlesini yaz.', kabul: ['Il y a trois ans nous sommes allés à Izmir', 'Il y a trois ans, nous sommes allés à Izmir'] },
        },
        {
          kod: 'arka-plan-passe-compose',
          desen: /\bil a fait (froid|chaud|beau|gris)\b/i,
          baslik: 'Arka plan passé composé ile kurulmuş',
          aciklama: 'Hava, ortam ve duygu bir olay değil arka plandır; Fransızcada bunlar daima imparfait ile verilir.',
          dogru: 'Il faisait froid.',
          mikro: { yonerge: '"Hava soğuktu ve yorgundum." cümlesini yaz.', kabul: ["Il faisait froid et j'étais fatigué", "Il faisait froid et j'étais fatiguée"] },
        },
      ],
    },
  ],

  ozet: [
    'İyi bir anı dört bölümden oluşur: zemin, arka plan, doruk, kapanış.',
    'Arka plan (hava, ortam, duygu) daima imparfait ile kurulur.',
    'Olaylar passé composé ile verilir; doruk noktası "soudain" ile işaretlenir.',
    '"il y a" zaman ifadesinin başına gelir: il y a deux ans.',
    'Bu metin A2 seviyesindeki ilk somut kanıtındır: çekim değil, seçim.',
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
      aciklama: 'Son paragrafta geçiyor: "nous avons atterri … le pilote nous a donné un petit certificat".',
    },
    {
      id: 'a2-m1-d4-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Kapanış cümlesini tamamla.',
      parcalar: ['Je me ', { bosluk: 0 }, ' encore très bien de ce matin.'],
      cevaplar: [
        { kabul: ['souviens'], ipucu: 'se souvenir' },
      ],
      aciklama: 'Dönüşlü fiildir ve "de" edatı alır: je me souviens de …',
    },
    {
      id: 'a2-m1-d4-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Hava soğuktu ve sen yorgundun; sonra güneş doğdu.',
      kabul: [
        "Il faisait froid et j'étais fatigué puis le soleil est apparu",
        "Il faisait froid et j'étais fatiguée puis le soleil est apparu",
        "Il faisait froid et j'étais fatigué, puis le soleil est apparu",
      ],
      ornekCevap: 'Il faisait froid et j’étais fatigué, puis le soleil est apparu.',
    },
  ],

  kartlar: ['fr-il-y-a', 'fr-voyage', 'fr-passionnant', 'fr-affreux', 'fr-se-souvenir', 'fr-enfin'],
  not: null,
  sonraki: null,
  kaynak: { tur: 'ozgun', aciklama: 'Anı metinleri DRKOÇ için özgün yazılmıştır.' },
}
