/**
 * DERS — A1 / Modül 3 / Ders 6
 * "Bir gününü anlatan metin yaz"
 *
 * Modülü kapatan YAZMA dersi. Öğrenci Präsens çekimi, ayrılabilen fiil,
 * saat, sıklık zarfı ve TeKaMoLo sırasını tek metinde birleştirir.
 *
 * Metnin OMURGASI zaman sırasıdır; bu yüzden ders sıralama bağlaçlarını
 * (zuerst, dann, danach, zum Schluss) merkeze alır.
 */

export default {
  id: 'a1-m3-d6',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 6,
  baslik: 'Bir gününü anlatan metin yaz',
  altBaslik: 'Zaman sırasıyla akan, bağlanmış bir metin kur',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'dizim', 'gramer'],
  amac: 'Bu dersin sonunda bir gününü baştan sona anlatan, zaman sırasıyla akan 8–10 cümlelik bir metin yazabileceksin.',
  kazanim: 'Sıralama bağlaçlarını kullanır; ayrılabilen fiilleri metinde doğru kurar; saat ve sıklık bilgilerini doğru yere yerleştirir.',
  onKosullar: ['a1-m3-d5'],
  sure: 16,
  baglam: {
    durum: 'Mektup arkadaşın "Wie sieht dein Tag aus?" diye sordu. Sabahtan akşama gününü anlatacaksın.',
    neden: 'Günlük rutin, A1 sınavlarında ve gerçek sohbetlerde en çok istenen anlatımdır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Metnin omurgası: zaman sırası',
      metin:
        'Bir günü anlatan metin, olayları OLDUĞU SIRAYLA verir. Okuyucunun kafası karışmasın diye her adım bir sıralama sözcüğüyle işaretlenir.',
      maddeler: [
        'zuerst → önce',
        'dann / danach → sonra',
        'später → daha sonra',
        'am Nachmittag / am Abend → öğleden sonra / akşam',
        'zum Schluss / am Ende → en sonunda',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Sıralama sözcüğü cümle başındaysa fiil hemen arkasından gelir',
      yanlis: 'Dann ich frühstücke.',
      dogru: 'Dann frühstücke ich.',
      neden:
        'zuerst, dann, danach gibi sözcükler cümlenin BİRİNCİ öğesidir. Fiil ikinci sırayı korur, özne arkaya geçer. Bu, metnin en sık hata veren yeridir çünkü her cümle bu sözcüklerle başlar.',
    },
    {
      tur: 'ornek',
      baslik: 'Örnek metin — yapısını al',
      satirlar: [
        { de: 'Mein Tag beginnt früh.', tr: 'Günüm erken başlıyor.', not: 'Giriş cümlesi' },
        { de: 'Zuerst stehe ich um halb sieben auf.', tr: 'Önce altı buçukta kalkıyorum.', not: 'zuerst + ayrılabilen fiil' },
        { de: 'Dann dusche ich und frühstücke mit meiner Familie.', tr: 'Sonra duş alıyorum ve ailemle kahvaltı yapıyorum.', not: 'dann → fiil ikinci' },
        { de: 'Um acht Uhr fahre ich mit dem Bus zur Schule.', tr: 'Sekizde otobüsle okula gidiyorum.', not: 'zaman → biçim → yer' },
        { de: 'Der Unterricht dauert bis halb drei.', tr: 'Ders iki buçuğa kadar sürüyor.', not: 'bis + saat' },
        { de: 'Am Nachmittag mache ich meine Hausaufgaben.', tr: 'Öğleden sonra ödevlerimi yapıyorum.', not: 'Zaman başta' },
        { de: 'Danach spiele ich manchmal Fußball mit meinen Freunden.', tr: 'Sonra bazen arkadaşlarımla futbol oynuyorum.', not: 'sıklık zarfı fiilden sonra' },
        { de: 'Am Abend sehe ich ein bisschen fern und lese.', tr: 'Akşam biraz televizyon izliyorum ve okuyorum.', not: 'ayrılabilen fiil' },
        { de: 'Um elf Uhr gehe ich ins Bett.', tr: 'On birde yatıyorum.', not: 'Kapanış' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Gün anlatırken gereken kalıplar',
      kaliplar: [
        { de: 'Mein Tag beginnt um …', kullanim: 'Giriş', ornek: 'Mein Tag beginnt um sechs Uhr.' },
        { de: 'Zuerst … , dann … , danach …', kullanim: 'Sıralama', ornek: 'Zuerst stehe ich auf, dann frühstücke ich.' },
        { de: 'Der Unterricht beginnt / dauert bis …', kullanim: 'Okul saatleri', ornek: 'Der Unterricht dauert bis 15 Uhr.' },
        { de: 'Ich fahre mit dem … zur Schule.', kullanim: 'Ulaşım', ornek: 'Ich fahre mit dem Fahrrad zur Schule.' },
        { de: 'Ich gehe ins Bett.', kullanim: 'Kapanış', ornek: 'Um elf gehe ich ins Bett.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Liste mi, metin mi?',
      dogal: 'Zuerst stehe ich auf. Dann frühstücke ich. Danach fahre ich zur Schule.',
      yapay: 'Ich stehe auf. Ich frühstücke. Ich fahre zur Schule.',
      aciklama:
        'İkinci metin dilbilgisi olarak doğru ama bağlantısızdır. Sıralama sözcükleri metni bir "cümle listesi" olmaktan çıkarır; A1\'de bile bu fark puana yansır.',
    },
    {
      tur: 'ipucu',
      metin:
        'Metnini bitirdikten sonra şu üç kontrolü yap: (1) her cümlede fiil ikinci sırada mı, (2) ayrılabilen fiillerin ön eki sonda mı, (3) isimler büyük harfle mi başlıyor.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d6-a1',
      aciklama: 'Gün anlatımında sıra zaman sırasıdır: kalkış → kahvaltı → okul → akşam.',
      tur: 'siralama',
      beceri: 'yazma',
      zorluk: 'kolay',
      yonerge: 'Cümleleri günün akışına göre sırala.',
      parcalar: [
        'Am Abend sehe ich fern.',
        'Zuerst stehe ich um sieben Uhr auf.',
        'Um acht fahre ich zur Schule.',
        'Dann frühstücke ich.',
      ],
      dogruSira: [1, 3, 2, 0],
    },
    {
      id: 'a1-m3-d6-a2',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Dann ich frühstücke mit meiner Familie.',
      hataliParca: 'ich frühstücke',
      dogruParca: 'frühstücke ich',
      kabul: [
        'Dann frühstücke ich mit meiner Familie',
        'frühstücke ich',
        'Dann fruehstuecke ich mit meiner Familie',
      ],
      aciklama: '"Dann" birinci öğedir; fiil ikinci sırada kalmalı.',
      tuzaklar: [
        {
          kod: 'fiil-ucuncu-dann',
          desen: /\b(dann|danach|zuerst|später)\s+(ich|du|er|sie|wir)\s+\w+/i,
          baslik: 'Fiil ikinci sırada değil',
          aciklama: 'Sıralama sözcüğü cümlenin birinci öğesidir; özne fiilin arkasına geçer.',
          dogru: 'Dann frühstücke ich.',
          mikro: { yonerge: '"Sonra kahvaltı yapıyorum." cümlesini "Dann" ile yaz.', kabul: ['Dann frühstücke ich', 'Dann fruehstuecke ich'] },
        },
      ],
    },
    {
      id: 'a1-m3-d6-a3',
      aciklama: 'Üç sıralama sözcüğü de cümlenin BİRİNCİ öğesidir; arkalarından fiil gelir.',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Sıralama sözcüklerini yerleştir.',
      parcalar: [
        { bosluk: 0 }, ' stehe ich auf. ', { bosluk: 1 }, ' frühstücke ich. ',
        { bosluk: 2 }, ' fahre ich zur Schule.',
      ],
      havuz: ['Zuerst', 'Dann', 'Danach'],
      cevaplar: [
        { kabul: ['Zuerst', 'zuerst'], ipucu: 'ilk adım' },
        { kabul: ['Dann', 'dann', 'Danach', 'danach'], ipucu: 'ikinci adım' },
        { kabul: ['Danach', 'danach', 'Dann', 'dann', 'Später', 'später'], ipucu: 'üçüncü adım' },
      ],
    },
    {
      id: 'a1-m3-d6-a4',
      aciklama: 'Kendi metnini kurarken de aynı sıra işler: önce fiili yerleştir, sonra ayrıntıları ekle.',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Sabahını adım adım anlat.',
      adimlar: [
        { yonerge: 'Kaçta kalktığını yaz (fiili ayır).', kabul: ['Ich stehe um', 'Zuerst stehe ich um'] },
        { yonerge: '"Dann" ile başlayan ikinci cümleyi yaz.', kabul: ['Dann'] },
        { yonerge: 'Okula nasıl gittiğini yaz.', kabul: ['Ich fahre mit dem', 'Ich gehe zu Fuß', 'Ich gehe zur Schule'] },
      ],
    },
    {
      id: 'a1-m3-d6-a5',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Görevi aşama aşama tamamla.',
      gorev: 'Schreib über deinen Tag: Wann stehst du auf? Was machst du am Morgen, am Nachmittag und am Abend? Wann gehst du ins Bett?',
      ornekMetin:
        'Mein Tag beginnt früh. Zuerst stehe ich um halb sieben auf. Dann dusche ich und frühstücke mit meiner Familie. Um acht Uhr fahre ich mit dem Bus zur Schule. Der Unterricht dauert bis halb drei. Am Nachmittag mache ich meine Hausaufgaben. Danach spiele ich manchmal Fußball mit meinen Freunden. Am Abend sehe ich ein bisschen fern und lese. Um elf Uhr gehe ich ins Bett.',
      kaliplar: [
        'Mein Tag beginnt um …',
        'Zuerst … / Dann … / Danach …',
        'Ich stehe um … auf.',
        'Ich fahre mit dem … zur Schule.',
        'Am Nachmittag … / Am Abend …',
        'Um … Uhr gehe ich ins Bett.',
      ],
      asamalar: [
        { ad: 'Plan', aciklama: 'Gününü Türkçe olarak saatleriyle listele: 7:00 kalkış, 8:00 okul…' },
        { ad: 'Taslak', aciklama: 'Her satırı bir Almanca cümleye çevir. Şimdilik bağlaçsız yaz.' },
        { ad: 'Sıralama', aciklama: 'Cümlelerin başına zuerst, dann, danach, am Abend ekle. Fiili ikinci sırada tut!' },
        { ad: 'Zenginleştirme', aciklama: 'En az bir sıklık zarfı (immer, manchmal, oft) ekle.' },
        { ad: 'Kontrol', aciklama: 'Ayrılabilen fiillerin ön eki sonda mı? İsimler büyük harf mi? Zaman yerden önce mi?' },
      ],
      olcut: [
        'Kaçta kalktığımı yazdım ve fiili ayırdım.',
        'En az üç sıralama sözcüğü kullandım.',
        'Sıralama sözcüğünden sonra fiili ikinci sırada tuttum.',
        'Okula nasıl gittiğimi yazdım.',
        'Öğleden sonra ve akşam ne yaptığımı yazdım.',
        'En az bir sıklık zarfı kullandım.',
        'Kaçta yattığımı yazdım.',
      ],
      enAzKelime: 55,
      aranan: [
        { etiket: 'ayrılabilen fiil', desen: /\b(stehe|räume|kaufe|rufe|sehe)\b.*\b(auf|ein|an|fern)\b/i },
        { etiket: 'sıralama sözcüğü', desen: /\b(zuerst|dann|danach|später)\b/i },
        { etiket: 'saat bilgisi', desen: /\bum\s+(\d+|ein|zwei|drei|vier|fünf|sechs|sieben|acht|neun|zehn|elf|zwölf|halb)/i },
        { etiket: 'sıklık zarfı', desen: /\b(immer|oft|manchmal|meistens|selten|nie)\b/i },
        { etiket: 'günün bölümü', desen: /\b(am morgen|am nachmittag|am abend|morgens|abends)\b/i },
      ],
    },
  ],

  ozet: [
    'Gün anlatımının omurgası zaman sırasıdır.',
    'zuerst → dann → danach → später → am Abend → zum Schluss.',
    'Sıralama sözcüğü cümle başındaysa fiil hemen arkasından gelir.',
    'Ayrılabilen fiillerin ön eki cümlenin sonundadır.',
    'Sıklık zarfı çekimli fiilden sonra gelir.',
    'Bağlantısız cümle listesi değil, akan bir metin yaz.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d6-s1',
      aciklama: '"Am Abend" birinci öğedir; özne fiilin arkasına geçer.',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Am Abend ich sehe fern.',
      hataliParca: 'ich sehe',
      dogruParca: 'sehe ich',
      kabul: ['Am Abend sehe ich fern', 'sehe ich'],
    },
    {
      id: 'a1-m3-d6-s2',
      aciklama: 'Zuerst (1) · stehe (2) · ich (3) · auf (4). Ayrılabilen fiilin ön eki en sonda.',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri sıraya diz.',
      parcalar: ['auf', 'Zuerst', 'ich', 'stehe'],
      dogruSira: [1, 3, 2, 0],
    },
    {
      id: 'a1-m3-d6-s3',
      aciklama: 'Saat bilgisi "um" ile verilir; cümle saatle başlarsa fiil hemen arkasından gelir.',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Kaçta yattığını tek cümlede yaz.',
      kabul: ['Ich gehe um', 'Um', 'Ich gehe ins Bett'],
      ornekCevap: 'Um elf Uhr gehe ich ins Bett.',
    },
  ],

  kartlar: ['de-aufstehen', 'de-fruehstuecken', 'de-gehen', 'de-fahren', 'de-schlafen', 'de-abend'],
  not: null,
  sonraki: 'a1-m4-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
