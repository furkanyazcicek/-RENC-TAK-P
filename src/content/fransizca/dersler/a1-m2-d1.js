/**
 * DERS — A1 / Modül 2 / Ders 1
 * "İsimlerin cinsiyeti: le, la, l', les"
 *
 * Bu ders Fransızca öğrenen bir Türk öğrencinin karşılaştığı EN YABANCI
 * kavramı verir: cinsiyet. Türkçede isimlerin cinsiyeti yoktur; "o"
 * zamiri bile cinsiyetsizdir. Bu yüzden öğrenci cinsiyeti "gereksiz bir
 * süs" gibi görür ve ezberlemez.
 *
 * DERSİN ANA ARGÜMANI: cinsiyet süs değil, ALTYAPIDIR. Sıfat uyumu,
 * iyelik sıfatı, zamir seçimi ve geçmiş zaman uyumu — hepsi buna bağlıdır.
 * Cinsiyeti bilinmeyen kelime, hiçbir cümlede doğru kullanılamaz. Bu
 * gerekçe derste açıkça kurulur; kural ezberletilmeden önce ikna edilir.
 */

export default {
  id: 'a1-m2-d1',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 1,
  baslik: 'İsimlerin cinsiyeti: le, la, l’, les',
  altBaslik: 'Fransızcada bir ismi bilmek, cinsiyetini de bilmek demektir',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'yazma'],
  amac: 'Bu dersin sonunda her yeni ismi artikeliyle birlikte öğrenme alışkanlığını kuracak, cinsiyeti tahmin ettiren son ekleri tanıyacak ve belirli artikeli doğru seçebileceksin.',
  kazanim: 'le/la/l’/les artikellerini doğru seçer; son eklerden cinsiyeti tahmin eder; sesli harfle başlayan isimlerde elizyon yapar.',
  onKosullar: ['a1-m1-d6'],
  sure: 15,
  baglam: {
    durum: 'Yeni kelimeler öğreniyorsun ve defterine yazıyorsun. Nasıl yazdığın, o kelimeyi doğru kullanıp kullanamayacağını belirleyecek.',
    neden: 'Cinsiyeti yanlış öğrenilen bir kelime, sonraki her cümlede yanlış kullanılır. Bu, sonradan düzeltilmesi en zor hatadır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Neden cinsiyet öğrenmek zorundasın?',
      metin:
        'Türkçede isimlerin cinsiyeti yoktur, "o" bile cinsiyetsizdir. Bu yüzden cinsiyet gereksiz görünür. Ama Fransızcada cinsiyet tek bir kelimeyi değil, CÜMLENİN TAMAMINI değiştirir.',
      maddeler: [
        'Artikel değişir: le livre / la table',
        'Sıfat değişir: un livre intéressant / une histoire intéressante',
        'İyelik sıfatı değişir: mon frère / ma sœur',
        'Zamir değişir: il / elle',
        'Geçmiş zamanda uyum değişir: il est allé / elle est allée',
        'Yani: cinsiyet bilmeyen öğrenci beş ayrı yerde hata yapar.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Belirli artikel',
      basliklar: ['Biçim', 'Ne zaman', 'Örnek'],
      satirlar: [
        ['le', 'eril tekil, sessizle başlıyorsa', 'le livre, le frère'],
        ['la', 'dişil tekil, sessizle başlıyorsa', 'la table, la sœur'],
        ['l’', 'sesli harf ya da sessiz h ile başlıyorsa (her iki cins)', 'l’ami, l’école, l’hôtel'],
        ['les', 'çoğul (her iki cins)', 'les livres, les tables'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sinsi tuzak: l’ cinsiyeti gizler',
      yanlis: 'l’école → "artikel l’, demek ki cinsiyeti yok"',
      dogru: 'l’école DİŞİLDİR (la école → l’école). l’hôtel ERİLDİR (le hôtel → l’hôtel).',
      neden:
        'Sesli harfle başlayan isimlerde artikel elizyona girer ve cinsiyeti göstermez. Öğrenci bu kelimeleri cinsiyetsiz sanır, sonra sıfat uyumunda hata yapar. Bu kelimelerin cinsiyeti AYRICA öğrenilmelidir.',
    },
    {
      tur: 'tablo',
      baslik: 'Son ek → çoğunlukla cinsiyet',
      basliklar: ['Son ek', 'Cins', 'Örnek'],
      satirlar: [
        ['-tion / -sion', 'dişil', 'la nation, la télévision'],
        ['-té', 'dişil', 'la beauté, la liberté'],
        ['-ette', 'dişil', 'la baguette, la fourchette'],
        ['-ance / -ence', 'dişil', 'la chance, la science'],
        ['-ure', 'dişil', 'la voiture, la nature'],
        ['-age', 'eril', 'le fromage, le voyage'],
        ['-ment', 'eril', 'le moment, le document'],
        ['-eau', 'eril', 'le bateau, le gâteau'],
        ['-isme', 'eril', 'le tourisme, le réalisme'],
        ['-eur (meslek)', 'eril', 'le professeur, l’ingénieur'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Bu kurallar kesin mi?',
      metin:
        'Hayır — bunlar EĞİLİMDİR, kesin kural değil. Ama işe yarar: bir kelimenin cinsiyetini bilmiyorsan bu listeye bakarak %80 doğru tahmin edersin. İstisnaları ayrıca öğrenirsin.',
      maddeler: [
        'Sık istisnalar: le musée, le lycée (-ée ama eril)',
        'le problème, le système, le thème (-ème → eril)',
        'la plage, la page, l’image (-age ama dişil)',
        'İstisnaları ezberleme; karşına çıktıkça not al.',
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Kelime defterine kelimeyi ASLA yalnız yazma. "table" değil, "LA table" yaz. Beyin ikisini tek parça olarak kaydeder ve cinsiyet ayrı bir yük olmaktan çıkar. Sesli harfle başlayanlarda cinsi parantezle ekle: "l’école (dişil)".',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Aynı kelime, iki cins, iki anlam',
      dogal: 'le livre = kitap · la livre = yarım kilo / sterlin',
      yapay: '(tek bir "livre" varmış gibi düşünmek)',
      aciklama:
        'Bazı kelimelerde cinsiyet ANLAMI değiştirir: le tour (tur) / la tour (kule), le mode (yöntem) / la mode (moda). Cinsiyet burada süs değil, sözlük bilgisidir.',
    },
    {
      tur: 'okuma',
      baslik: 'Odamda ne var?',
      metin:
        'Voici ma chambre. Il y a un lit, une table et une chaise.\nSur la table, il y a le livre de français et l’ordinateur de mon frère.\nLa fenêtre est grande et le mur est blanc. J’aime beaucoup ma chambre.',
      sozluk: [
        { fr: 'le lit', tr: 'yatak (eril)' },
        { fr: 'la chaise', tr: 'sandalye (dişil)' },
        { fr: 'la fenêtre', tr: 'pencere (dişil)' },
        { fr: 'le mur', tr: 'duvar (eril)' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d1-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru artikeli yaz (le / la / l’).',
      parcalar: [{ bosluk: 0 }, ' voiture · ', { bosluk: 1 }, ' fromage · ', { bosluk: 2 }, ' école'],
      havuz: ['la', 'le', 'l’'],
      cevaplar: [
        { kabul: ['la'], ipucu: '-ure → dişil' },
        { kabul: ['le'], ipucu: '-age → eril' },
        { kabul: ['l’', "l'", 'l'], ipucu: 'sesli harfle başlıyor' },
      ],
      aciklama: 'Son ek kuralları tahmin için kullanılır; "école" sesli harfle başladığı için artikel elizyona girer (dişil olduğu hâlde).',
    },
    {
      id: 'a1-m2-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: '"l’école" kelimesinin cinsiyeti nedir?',
      secenekler: [
        { id: 'a', metin: 'Dişil (la école → l’école)' },
        { id: 'b', metin: 'Eril (le école → l’école)' },
        { id: 'c', metin: 'Cinsiyeti yok, artikeli l’' },
      ],
      dogruId: 'a',
      secenekNotu: {
        c: 'Fransızcada cinsiyetsiz isim yoktur; "l’" yalnızca cinsiyeti GİZLER.',
      },
      aciklama: 'Cinsiyeti sıfattan anlarsın: "une grande école" (dişil). Bu yüzden bu kelimeleri cinsiyetiyle not almak şarttır.',
    },
    {
      id: 'a1-m2-d1-a3',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Son eki cinsiyetiyle eşleştir.',
      sol: [
        { id: 'e1', metin: '-tion' },
        { id: 'e2', metin: '-age' },
        { id: 'e3', metin: '-té' },
        { id: 'e4', metin: '-ment' },
        { id: 'e5', metin: '-ure' },
      ],
      sag: [
        { id: 'c1', metin: 'dişil (la nation)' },
        { id: 'c2', metin: 'eril (le fromage)' },
        { id: 'c3', metin: 'dişil (la liberté)' },
        { id: 'c4', metin: 'eril (le moment)' },
        { id: 'c5', metin: 'dişil (la voiture)' },
      ],
      eslesme: { e1: 'c1', e2: 'c2', e3: 'c3', e4: 'c4', e5: 'c5' },
    },
    {
      id: 'a1-m2-d1-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Le maison de mes parents est grande.',
      hataliParca: 'Le maison',
      dogruParca: 'La maison',
      kabul: ['La maison de mes parents est grande', 'La maison', 'la maison'],
      aciklama: '"maison" dişildir. Cümlenin sonundaki "grande" da zaten dişil; artikel ile sıfat birbirini doğrular.',
      tuzaklar: [
        {
          kod: 'cinsiyet-varsayilan-le',
          desen: /\ble\s+(maison|table|voiture|chambre|fenêtre|fenetre|école|ecole|famille|sœur|soeur)\b/i,
          baslik: 'Bilinmeyen isme varsayılan olarak "le" verilmiş',
          aciklama: 'Cinsiyet ezberlenmediğinde öğrenci hep "le" kullanıyor. Fransızcada isimlerin yaklaşık yarısı dişildir; varsayılan seçmek yarı yarıya hata demektir.',
          dogru: 'la maison, la table, la voiture',
          mikro: { yonerge: '"Ev büyük." cümlesini yaz.', kabul: ['La maison est grande'] },
        },
      ],
    },
    {
      id: 'a1-m2-d1-a5',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru?',
      soru: '"la tour" ne demek?',
      secenekler: [
        { id: 'a', metin: 'kule' },
        { id: 'b', metin: 'tur, gezi' },
        { id: 'c', metin: 'sıra' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"tur, gezi" anlamı ERİL biçimdedir: le tour.' },
      aciklama: 'Bu kelimelerde cinsiyet anlamı belirler: la tour Eiffel (kule) / le Tour de France (bisiklet turu).',
    },
    {
      id: 'a1-m2-d1-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Odandaki masayı gösteriyorsun ve "masa büyük" demek istiyorsun.',
      kabul: ['La table est grande', 'la table est grande'],
      ornekCevap: 'La table est grande.',
      aciklama: 'Hem artikel hem sıfat dişil olmalı: la … grande.',
    },
    {
      id: 'a1-m2-d1-a7',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıralayarak cümleyi kur.',
      parcalar: ['de français', 'Le', 'est sur la table', 'livre'],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Sahiplik ve niteleme "de" ile kurulur ve isimden SONRA gelir: le livre DE français.',
    },
  ],

  ozet: [
    'Fransızcada her ismin bir cinsiyeti vardır; cinsiyetsiz isim yoktur.',
    'Cinsiyet artikeli, sıfatı, iyelik sıfatını, zamiri ve uyumu değiştirir.',
    'le (eril) · la (dişil) · l’ (sesli harften önce) · les (çoğul).',
    '"l’" cinsiyeti GİZLER; bu kelimelerin cinsi ayrıca öğrenilmelidir.',
    'Son ekler cinsiyeti tahmin ettirir: -tion/-té/-ure dişil, -age/-ment/-eau eril.',
    'Kelimeyi defterine artikeliyle birlikte yaz: "la table", "le livre".',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d1-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Doğru artikeli yaz.',
      parcalar: [{ bosluk: 0 }, ' télévision est dans le salon.'],
      cevaplar: [{ kabul: ['La', 'la'], ipucu: '-sion → dişil' }],
    },
    {
      id: 'a1-m2-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Aşağıdakilerden hangisi ERİLDİR?',
      secenekler: [
        { id: 'a', metin: 'le voyage' },
        { id: 'b', metin: 'la voyage' },
        { id: 'c', metin: 'l’voyage' },
      ],
      dogruId: 'a',
      secenekNotu: { c: 'Elizyon yalnız sesli harfle başlayan kelimelerde olur; "v" sessizdir.' },
    },
    {
      id: 'a1-m2-d1-s3',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tanımı okuyup kelimeyi ARTİKELİYLE yaz.',
      tanim: 'C’est la pièce où on dort.',
      ilkHarf: 'l',
      kabul: ['la chambre', 'chambre'],
    },
  ],

  kartlar: ['fr-maison', 'fr-chambre', 'fr-table', 'fr-livre', 'fr-voiture'],
  not: 'not-a1-m2-d1',
  sonraki: 'a1-m2-d2',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
