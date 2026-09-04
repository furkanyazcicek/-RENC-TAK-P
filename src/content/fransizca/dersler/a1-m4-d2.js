/**
 * DERS — A1 / Modül 4 / Ders 2
 * "Kaynaşma (au, du, aux, des) ve yol tarifi"
 *
 * KAYNAŞMA, Fransızcanın en mekanik ama en çok ihmal edilen kuralıdır:
 * "à le" ve "de le" biçimleri Fransızcada YOKTUR. Türkçede ek doğrudan
 * kelimeye eklenir ve başka hiçbir şey değişmez; bu yüzden öğrenci
 * kaynaşmayı görmez.
 *
 * Ders kuralı yol tarifi bağlamına yerleştirir: gerçek hayatta bu
 * biçimler en çok orada geçer.
 */

export default {
  id: 'a1-m4-d2',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m4',
  sira: 2,
  baslik: 'Kaynaşma ve yol tarifi',
  altBaslik: '"à le" diye bir şey yoktur: au, du, aux, des',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dinleme'],
  amac: 'Bu dersin sonunda edat ile artikeli doğru biçimde kaynaştırabilecek, yol sorabilecek ve aldığın tarifi anlayabileceksin.',
  kazanim: 'à/de edatlarını artikellerle kaynaştırır; yol tarifi kalıplarını anlar ve üretir; yer belirten ifadeleri kullanır.',
  onKosullar: ['a1-m4-d1'],
  sure: 15,
  baglam: {
    durum: 'Bir Fransız şehrinde kayboldun. Yol soruyorsun ve aldığın cevabı takip etmen gerekiyor.',
    neden: 'Yol tarifi, dilin en pratik kullanımıdır. Ayrıca kaynaşmış biçimler bu tariflerin her cümlesinde geçer.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Kaynaşma zorunludur, seçenek değildir',
      metin:
        'Fransızcada "à" ve "de" edatları, "le" ve "les" artikelleriyle yan yana gelemez. Birleşip tek kelime olurlar. Bu bir üslup tercihi değil, kuraldır.',
      maddeler: [
        'à + le = au → Je vais AU cinéma.',
        'à + les = aux → Je parle AUX élèves.',
        'de + le = du → Je viens DU parc.',
        'de + les = des → C’est la voiture DES voisins.',
        'DEĞİŞMEYENLER: à la, à l’, de la, de l’ — bunlar olduğu gibi kalır.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Kaynaşma tablosu',
      basliklar: ['Yazılamaz', 'Doğru', 'Örnek'],
      satirlar: [
        ['à le', 'au', 'Je vais au lycée.'],
        ['à les', 'aux', 'Je pense aux vacances.'],
        ['de le', 'du', 'Je viens du magasin.'],
        ['de les', 'des', 'près des magasins'],
        ['à la', 'à la (değişmez)', 'Je vais à la gare.'],
        ['à l’', 'à l’ (değişmez)', 'Je vais à l’école.'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Tek istisna: mastar önündeki "le"',
      yanlis: '"J’ai décidé du faire" (kaynaştırılmış)',
      dogru: 'J’ai décidé de le faire.',
      neden:
        'Buradaki "le" artikel değil, NESNE ZAMİRİDİR ("onu"). Zamirle kaynaşma olmaz. Ayrım kolay: arkasından mastar geliyorsa kaynaşma yapma.',
    },
    {
      tur: 'kalip',
      baslik: 'Yol sorma ve tarif etme',
      kaliplar: [
        { fr: 'Excusez-moi, où est … ?', kullanim: 'Yer sorma', ornek: 'Excusez-moi, où est la gare ?' },
        { fr: 'Pour aller à … , s’il vous plaît ?', kullanim: 'Yol sorma (en yaygın)', ornek: 'Pour aller au musée, s’il vous plaît ?' },
        { fr: 'C’est loin d’ici ?', kullanim: 'Mesafe sorma', ornek: '— C’est loin ? — Non, c’est à cinq minutes.' },
        { fr: 'Allez tout droit.', kullanim: 'Düz devam', ornek: 'Allez tout droit jusqu’au feu.' },
        { fr: 'Tournez à droite / à gauche.', kullanim: 'Dönüş', ornek: 'Tournez à gauche après la banque.' },
        { fr: 'C’est en face de / à côté de…', kullanim: 'Konum', ornek: 'C’est en face de la poste.' },
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Konum bildiren ifadeler',
      basliklar: ['Fransızca', 'Türkçe', 'Not'],
      satirlar: [
        ['à côté de', 'yanında', 'de + le = du olur: à côté DU parc'],
        ['en face de', 'karşısında', 'en face DE LA gare'],
        ['près de', 'yakınında', 'près DU lycée'],
        ['loin de', 'uzağında', 'loin DE LA ville'],
        ['devant', 'önünde', 'devant la banque (de yok)'],
        ['derrière', 'arkasında', 'derrière l’école (de yok)'],
        ['entre … et …', 'arasında', 'entre la poste et la banque'],
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Yol tarifi',
      metin:
        '— Excusez-moi, pour aller à la gare, s’il vous plaît ?\n— Alors, allez tout droit jusqu’au feu. Ensuite, tournez à droite.\n— C’est loin d’ici ?\n— Non, c’est à dix minutes à pied. La gare est en face du grand magasin.\n— Merci beaucoup !\n— Je vous en prie. Bonne journée !',
      sozluk: [
        { fr: 'jusqu’au feu', tr: 'ışığa kadar' },
        { fr: 'en face du', tr: '…in karşısında' },
        { fr: 'Je vous en prie', tr: 'Rica ederim (resmî)' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m4-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Kaynaştırarak yaz (au / à la / du / de la).',
      parcalar: ['Je vais ', { bosluk: 0 }, ' cinéma, puis ', { bosluk: 1 }, ' banque. Je reviens ', { bosluk: 2 }, ' parc.'],
      cevaplar: [
        { kabul: ['au'], ipucu: 'à + le' },
        { kabul: ['à la', 'a la'], ipucu: 'dişil — değişmez' },
        { kabul: ['du'], ipucu: 'de + le' },
      ],
      aciklama: 'Kaynaşma yalnız "le" ve "les" ile olur; "la" ve "l’" değişmez.',
    },
    {
      id: 'a1-m4-d2-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Le lycée est à côté de le parc.',
      hataliParca: 'de le',
      dogruParca: 'du',
      kabul: ['Le lycée est à côté du parc', 'du', 'à côté du parc'],
      aciklama: '"à côté de" ifadesindeki "de" de kaynaşır: de + le = du.',
      tuzaklar: [
        {
          kod: 'kaynasma-yok',
          desen: /(?:^|\s)(à|de)\s+(le|les)\s+(?![a-zà-ÿ']+(?:er|ir|re|oir)\b)/i,
          baslik: 'Edat ile artikel kaynaşmamış',
          aciklama: 'Türkçede "parkın yanında" derken hiçbir şey değişmez. Fransızcada "de" ile "le" birleşmek zorundadır.',
          dogru: 'à côté du parc',
          mikro: { yonerge: '"Sinemanın yanında" ifadesini yaz.', kabul: ['à côté du cinéma', 'a côté du cinéma', 'à côté du cinema'] },
        },
      ],
    },
    {
      id: 'a1-m4-d2-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Tarifi Türkçesiyle eşleştir.',
      sol: [
        { id: 't1', metin: 'Allez tout droit.' },
        { id: 't2', metin: 'Tournez à droite.' },
        { id: 't3', metin: 'Traversez la rue.' },
        { id: 't4', metin: 'C’est en face de la poste.' },
        { id: 't5', metin: 'C’est à côté du parc.' },
      ],
      sag: [
        { id: 'y1', metin: 'Dosdoğru gidin.' },
        { id: 'y2', metin: 'Sağa dönün.' },
        { id: 'y3', metin: 'Caddeyi geçin.' },
        { id: 'y4', metin: 'Postanenin karşısında.' },
        { id: 'y5', metin: 'Parkın yanında.' },
      ],
      eslesme: { t1: 'y1', t2: 'y2', t3: 'y3', t4: 'y4', t5: 'y5' },
    },
    {
      id: 'a1-m4-d2-a4',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: 'Hangisinde kaynaşma YAPILMAZ?',
      soru: 'Aşağıdakilerden hangisi doğrudur?',
      secenekler: [
        { id: 'a', metin: 'J’ai décidé de le faire.' },
        { id: 'b', metin: 'J’ai décidé du faire.' },
        { id: 'c', metin: 'J’ai décidé au faire.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Buradaki "le" artikel değil, nesne zamiridir; zamirle kaynaşma olmaz.',
        c: '"au" hiç uygun değil.',
      },
      aciklama: 'Ayrım kolay: arkasından MASTAR geliyorsa "le" zamirdir ve kaynaşmaz.',
    },
    {
      id: 'a1-m4-d2-a5',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru tarifi seç.',
      seslendir: 'Allez tout droit, puis tournez à gauche après la banque.',
      secenekler: [
        { id: 'a', metin: 'Düz git, bankadan sonra sola dön.' },
        { id: 'b', metin: 'Sağa dön, sonra düz git.' },
        { id: 'c', metin: 'Bankanın önünde dur.' },
      ],
      dogruId: 'a',
      aciklama: '"tout droit" (dosdoğru) ile "à droite" (sağa) karıştırılmamalı.',
    },
    {
      id: 'a1-m4-d2-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Sokakta birine gara nasıl gideceğini soruyorsun (kibar biçimde).',
      kabul: ['Pour aller à la gare', 'Excusez-moi, pour aller à la gare', 'Où est la gare', 'Excusez-moi, où est la gare'],
      ornekCevap: 'Excusez-moi, pour aller à la gare, s’il vous plaît ?',
    },
    {
      id: 'a1-m4-d2-a7',
      tur: 'genisletme',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Tarifi adım adım büyüt.',
      adimlar: [
        { yonerge: '"Dosdoğru gidin" de.', kabul: ['Allez tout droit', 'Continuez tout droit'] },
        { yonerge: 'Sonra sağa dönmesini söyle.', kabul: ['Allez tout droit, puis tournez à droite', 'Allez tout droit puis tournez à droite', 'Ensuite tournez à droite'] },
        { yonerge: 'Yerin bankanın karşısında olduğunu ekle.', kabul: ["C'est en face de la banque", 'C’est en face de la banque'] },
      ],
      aciklama: 'Yol tarifi üç parçadan oluşur: yön → dönüş → konum. Üçü de kalıplaşmıştır.',
    },
  ],

  ozet: [
    'à + le = au · à + les = aux · de + le = du · de + les = des.',
    'à la, à l’, de la, de l’ biçimleri DEĞİŞMEZ.',
    '"à le" ve "de le" biçimleri Fransızcada yoktur.',
    'İstisna: mastar önündeki "le" zamirdir ve kaynaşmaz (de le faire).',
    'Konum ifadeleri "de" ile kurulur: à côté du, en face de la, près du.',
    'devant ve derrière "de" almaz: devant la banque.',
  ],

  miniSinav: [
    {
      id: 'a1-m4-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Kaynaştırarak yaz.',
      parcalar: ['La pharmacie est en face ', { bosluk: 0 }, ' lycée.'],
      cevaplar: [{ kabul: ['du'], ipucu: 'de + le' }],
    },
    {
      id: 'a1-m4-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"Öğrencilerle konuşuyorum." nasıl denir?',
      secenekler: [
        { id: 'a', metin: 'Je parle aux élèves.' },
        { id: 'b', metin: 'Je parle à les élèves.' },
        { id: 'c', metin: 'Je parle des élèves.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"à les" biçimi yoktur; "aux" olur.',
        c: '"des élèves" = öğrenciler HAKKINDA demektir.',
      },
    },
    {
      id: 'a1-m4-d2-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümlelik tarif ver.',
      durum: 'Biri sana lisenin yerini sordu: düz gidip sağa dönmeli, lise parkın yanında.',
      kabul: ['Allez tout droit', 'Continuez tout droit'],
      ornekCevap: 'Allez tout droit, puis tournez à droite. Le lycée est à côté du parc.',
    },
  ],

  kartlar: ['fr-gare', 'fr-rue', 'fr-droite', 'fr-gauche', 'fr-tout-droit', 'fr-tourner', 'fr-traverser'],
  not: null,
  sonraki: 'a1-m4-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
