/**
 * DERS — A1 / Modül 1 / Ders 6
 * "Okuma ve yazma: kendini tanıt"
 *
 * Bu ders hem TAM OKUMA ÇALIŞMASI hem TAM YAZMA ÇALIŞMASI örneğidir ve
 * modülü kapatır.
 *
 * OKUMA akışı: tahmin → anahtar kelimeler → metin → ana fikir → ayrıntı
 * → çıkarım → bağlamdan kelime tahmini → gönderim (referans) bulma →
 * doğru/yanlış → sıralama → özet.
 *
 * YAZMA akışı boş bir kutu değildir; on aşamalıdır (bkz. `yazma`
 * alıştırması): görevi anla → örneği incele → kalıpları gör → fikir üret
 * → taslak → ilk metin → geri bildirim → düzelt → son sürüm → karşılaştır.
 *
 * Geri bildirim öğrencinin metnini YENİDEN YAZMAZ. Yalnız sayılabilir
 * göstergeleri raporlar ve Türkçe düşünme izlerini işaretler; düzeltmeyi
 * öğrenci yapar.
 */

export default {
  id: 'a1-m1-d6',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 6,
  baslik: 'Okuma ve yazma: kendini tanıt',
  altBaslik: 'Önce bir tanıtım metnini çöz, sonra kendininkini yaz',
  odakBeceri: 'yazma',
  beceriler: ['okuma', 'yazma', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda kısa bir tanıtım metnini anlayabilecek, bilinmeyen kelimeyi bağlamdan tahmin edebilecek ve kendini tanıtan bağlantılı bir metni taslaktan son sürüme getirebileceksin.',
  kazanim: 'Kısa kişisel bir metinde ana fikri ve ayrıntıyı ayırır; kendisi hakkında en az 40 kelimelik bağlantılı bir metin yazar ve geri bildirime göre düzeltir.',
  onKosullar: ['a1-m1-d4'],
  sure: 22,
  baglam: {
    durum: 'Bir yazışma arkadaşı sitesine üye oldun. Önce başkalarının tanıtım yazılarını okuyorsun, sonra kendininkini yazıyorsun.',
    neden: 'Kendini yazılı tanıtmak, İngilizcede en sık istenen ilk görevdir: okul formu, e-posta, sosyal medya profili, sınav sorusu.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Okumadan önce tahmin et',
      metin:
        'Metnin başlığı "Hello from Ankara!". Okumadan önce şunu düşün: bu metinde büyük ihtimalle hangi bilgiler olacak?',
      maddeler: ['İsim', 'Yaş', 'Yaşadığı yer', 'Ailesi ya da arkadaşları', 'Sevdiği şeyler'],
    },
    {
      tur: 'anlatim',
      baslik: 'Metindeki anahtar kelimeler',
      metin: 'Metni okumadan önce bu kelimelere göz at; okurken takılmazsın.',
      maddeler: [
        'twin sister — ikiz kız kardeş',
        'neighbourhood — mahalle',
        'crowded — kalabalık',
        'get on well — iyi anlaşmak',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Hello from Ankara!',
      metin:
        'Hello! My name is Deniz Aydın and I am fifteen years old. I am from Turkey and I live in Ankara. ' +
        'Ankara is the capital city of Turkey. It is big and sometimes very crowded, but I like it.\n\n' +
        'I am a student at Cumhuriyet High School. My favourite subjects are English and biology. ' +
        'I am not very good at maths, but I am not bad at it either.\n\n' +
        'I have a twin sister. Her name is Defne. We are fifteen, but we are very different. ' +
        'She is quiet and I am not! We are in the same class and we get on well.\n\n' +
        'Our neighbourhood is small and quiet. My best friend Maya lives here too. ' +
        'She is from Izmir, but her family is in Ankara now.\n\n' +
        'I am happy to be here. Nice to meet you!',
      sozluk: [
        { en: 'capital city', tr: 'başkent' },
        { en: 'crowded', tr: 'kalabalık' },
        { en: 'subject', tr: 'ders (okul dersi)' },
        { en: 'twin', tr: 'ikiz' },
        { en: 'quiet', tr: 'sessiz, sakin' },
        { en: 'neighbourhood', tr: 'mahalle' },
        { en: 'get on well', tr: 'iyi anlaşmak' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Yazarken kullanacağın kalıplar',
      kaliplar: [
        { en: 'My name is … and I am … years old.', kullanim: 'Açılış', ornek: 'My name is Deniz and I am fifteen years old.' },
        { en: 'I am from … and I live in …', kullanim: 'Memleket ve yaşanan yer', ornek: 'I am from Turkey and I live in Ankara.' },
        { en: 'I am a student at …', kullanim: 'Okul', ornek: 'I am a student at Cumhuriyet High School.' },
        { en: 'My favourite … is/are …', kullanim: 'Sevdiğin şeyler', ornek: 'My favourite subject is English.' },
        { en: 'I have a … / I have got a …', kullanim: 'Sahiplik', ornek: 'I have a twin sister.' },
        { en: 'I am good at … / I am not very good at …', kullanim: 'Yeteneklerin', ornek: 'I am good at English.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Yazarken en sık yapılan üç hata',
      yanlis: '1) "Am fifteen years old."  2) "I am fifteen year old."  3) "I very like English."',
      dogru: '1) "I am fifteen years old."  2) "years" çoğul.  3) "I like English very much." / "I really like English."',
      neden:
        'Üçü de Türkçe cümle yapısından geliyor: özne düşürme, sayıdan sonra çoğul yapmama ve "çok" kelimesini Türkçedeki yere koyma.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d6-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'ANA FİKİR. Metin genel olarak neyi anlatıyor?',
      soru: 'Metnin ana konusu ne?',
      secenekler: [
        { id: 'a', metin: 'Ankara şehrinin tarihi' },
        { id: 'b', metin: 'Deniz\'in kendini ve yakın çevresini tanıtması' },
        { id: 'c', metin: 'Bir okulun ders programı' },
      ],
      dogruId: 'b',
      aciklama: 'Ana fikir metnin tamamını kapsar. Ankara ve okul metinde geçer ama ikisi de ayrıntıdır, konu değildir.',
    },
    {
      id: 'a1-m1-d6-a2',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'AYRINTI. Metne göre doğru olanı seç.',
      soru: 'Defne kimdir?',
      secenekler: [
        { id: 'a', metin: 'Deniz\'in en yakın arkadaşı' },
        { id: 'b', metin: 'Deniz\'in ikiz kız kardeşi' },
        { id: 'c', metin: 'Deniz\'in öğretmeni' },
      ],
      dogruId: 'b',
      secenekNotu: { a: 'En yakın arkadaş Maya. İki farklı kişiyi karıştırmamak için metne geri dön.' },
    },
    {
      id: 'a1-m1-d6-a3',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'ÇIKARIM. Metinde açıkça yazmıyor; ama metne göre en mantıklı sonuç hangisi?',
      soru: 'Deniz ile Defne\'nin ilişkisi hakkında ne söylenebilir?',
      secenekler: [
        { id: 'a', metin: 'Birbirlerinden hoşlanmıyorlar.' },
        { id: 'b', metin: 'Çok farklı karakterdeler ama araları iyi.' },
        { id: 'c', metin: 'Farklı okullara gidiyorlar.' },
      ],
      dogruId: 'b',
      aciklama:
        'Metin "we are very different" ve "we get on well" diyor. Çıkarım, iki bilgiyi birleştirmektir: farklılar AMA anlaşıyorlar.',
    },
    {
      id: 'a1-m1-d6-a4',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'BAĞLAMDAN KELİME TAHMİNİ. Sözlüğe bakmadan, cümleye göre tahmin et.',
      soru: '"It is big and sometimes very crowded, but I like it." — "crowded" ne anlama geliyor?',
      secenekler: [
        { id: 'a', metin: 'içinde çok insan olan' },
        { id: 'b', metin: 'çok eski' },
        { id: 'c', metin: 'çok pahalı' },
      ],
      dogruId: 'a',
      aciklama:
        'İpucu "big and sometimes very crowded" bağlantısındadır: büyük şehirle birlikte anılan bir özellik. Her bilinmeyen kelimeye sözlükten bakmak okuma hızını öldürür; önce bağlamdan tahmin et.',
    },
    {
      id: 'a1-m1-d6-a5',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'GÖNDERİM (referans) BULMA.',
      soru: '"She is from Izmir, but her family is in Ankara now." — Buradaki "she" kim?',
      secenekler: [
        { id: 'a', metin: 'Defne' },
        { id: 'b', metin: 'Maya' },
        { id: 'c', metin: 'Deniz' },
      ],
      dogruId: 'b',
      aciklama:
        'Zamirler bir önceki cümledeki kişiye gönderme yapar. Önceki cümle "My best friend Maya lives here too." — dolayısıyla "she" = Maya.',
    },
    {
      id: 'a1-m1-d6-a6',
      tur: 'eslestirme',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'DOĞRU / YANLIŞ. Her cümleyi doğru etiketle eşleştir.',
      sol: [
        { id: 'c1', metin: 'Deniz matematikte çok iyi.' },
        { id: 'c2', metin: 'Deniz ve Defne aynı sınıftalar.' },
        { id: 'c3', metin: 'Maya İzmir\'de yaşıyor.' },
        { id: 'c4', metin: 'Deniz\'in mahallesi sakin.' },
      ],
      sag: [
        { id: 'y', metin: 'Yanlış' },
        { id: 'd', metin: 'Doğru' },
        { id: 'y2', metin: 'Yanlış' },
        { id: 'd2', metin: 'Doğru' },
      ],
      eslesme: { c1: 'y', c2: 'd', c3: 'y2', c4: 'd2' },
      aciklama: 'Maya İzmirli ama ailesi ŞU AN Ankara\'da; "from" ile "live in" farkını metin özellikle kuruyor.',
    },
    {
      id: 'a1-m1-d6-a7',
      tur: 'siralama',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metindeki bilgilerin veriliş sırasını kur.',
      parcalar: ['Mahalle ve arkadaş', 'İsim ve yaş', 'Okul ve dersler', 'İkiz kardeş'],
      dogruSira: [1, 2, 3, 0],
      aciklama:
        'İyi bir tanıtım metni genelden özele gider: kim → nerede okuyor → ailesi → çevresi. Kendi metnini yazarken de bu sırayı kullanabilirsin.',
    },
    {
      id: 'a1-m1-d6-a8',
      tur: 'soru-cevap',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'ÖZET. Metni tek cümleyle özetle (İngilizce).',
      soru: 'Summarise the text in one sentence.',
      kabul: [
        'Deniz is a fifteen year old student from Ankara',
        'Deniz is a student from Ankara',
        'Deniz is a fifteen-year-old student from Ankara',
        'Deniz is a student in Ankara and she has a twin sister',
        'Deniz is fifteen and she lives in Ankara',
        'Deniz is a high school student who lives in Ankara with her twin sister',
      ],
      ornekCevap: 'Deniz is a fifteen-year-old student from Ankara who has a twin sister.',
      ipucu: 'Tek cümle: kim + nerede + en önemli bir ayrıntı.',
    },
    {
      id: 'a1-m1-d6-a9',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'YAZMA GÖREVİ — aşama aşama ilerle. Her aşamayı tamamlamadan sonrakine geçme.',
      gorev: 'Yazışma arkadaşı sitesine kendini tanıtan bir metin yaz. En az 40 kelime.',
      ornekMetin:
        'Hello! My name is Deniz and I am fifteen years old. I am from Turkey and I live in Ankara. ' +
        'I am a student at Cumhuriyet High School. My favourite subject is English. ' +
        'I have a twin sister. Her name is Defne and she is very quiet. ' +
        'My best friend is Maya. She is from Izmir. Nice to meet you!',
      kaliplar: [
        'My name is … and I am … years old.',
        'I am from … and I live in …',
        'I am a student at …',
        'My favourite … is …',
        'I have a …',
        'Nice to meet you!',
      ],
      asamalar: [
        {
          ad: 'Görevi anla',
          aciklama: 'Kendini tanıtan bir metin yazacaksın. Okuyucu seni hiç tanımıyor. En az 40 kelime, en az 5 cümle.',
        },
        {
          ad: 'Örneği incele',
          aciklama: 'Yukarıdaki örnek metni oku. Hangi bilgiler hangi sırada verilmiş? Cümleler nasıl bağlanmış?',
        },
        {
          ad: 'Fikir üret',
          aciklama: 'Kendin hakkında şu beş şeyi not al: isim, yaş, şehir, okul/ders, bir kişi (kardeş ya da arkadaş).',
        },
        {
          ad: 'Taslak yaz',
          aciklama: 'Notlarını cümlelere çevir. Şimdilik hataya takılma; önce hepsini yaz.',
        },
        {
          ad: 'Geri bildirim al',
          aciklama: 'Sistem uzunluk, hedef yapılar ve Türkçe düşünme izleri açısından metnini kontrol edecek. Sana yeniden yazmayacak; nereye bakacağını söyleyecek.',
        },
        {
          ad: 'Düzelt ve son sürümü yaz',
          aciklama: 'Geri bildirime göre metnini düzelt. İlk sürümünle son sürümünü yan yana göreceksin.',
        },
      ],
      olcut: [
        'Görevi yerine getirdim mi? (kendimi tanıttım, en az 40 kelime)',
        'Her cümlede özne var mı? ("Am a student" gibi bir cümle kalmadı mı?)',
        'am / is / are doğru mu?',
        'Meslek ve tekil isimlerde a/an var mı?',
        'Cümlelerimi and, but, because ile bağladım mı?',
        'Ülke, milliyet ve dil adlarını büyük harfle yazdım mı?',
        'Türkçeden birebir çevirdiğim bir yer var mı?',
      ],
      enAzKelime: 40,
      aranan: [
        { etiket: 'be fiili (am/is/are)', desen: /\b(am|is|are)\b/i },
        { etiket: 'I am from …', desen: /\b(i am|i'm)\s+from\b/i },
        { etiket: 'yaş bildirme', desen: /\b(years old|i am \w+ years|i'm \w+ years|i am \d+|i'm \d+)\b/i },
        { etiket: 'bir bağlaç (and / but / because)', desen: /\b(and|but|because)\b/i },
        { etiket: 'başka bir kişiden söz etme (my … / her … / his …)', desen: /\b(my|her|his)\s+\w+/i },
      ],
      tuzaklar: [
        {
          kod: 'ozne-dusmesi',
          desen: /(^|\.\s+)(am|is|are)\s+\w/i,
          baslik: 'Bir cümlede özne düşmüş',
          aciklama: 'Türkçede "on beş yaşındayım" derken özne ekte gizlidir. İngilizce cümle özne olmadan başlayamaz.',
          dogru: 'I am fifteen years old.',
          mikro: { yonerge: '"On beş yaşındayım." cümlesini yaz.', kabul: ['I am fifteen years old', "I'm fifteen years old", 'I am 15 years old', "I'm 15 years old"] },
        },
      ],
    },
  ],

  ozet: [
    'Okumadan önce tahmin et; tahmin anlamayı hızlandırır.',
    'Ana fikir metnin tamamını kapsar; ayrıntı tek bir cümlededir.',
    'Bilinmeyen kelimeyi önce bağlamdan tahmin et, sonra sözlüğe bak.',
    'Zamirler (she, it, they) bir önceki cümledeki kişiye ya da şeye gönderme yapar.',
    'Yazma tek seferde bitmez: taslak → geri bildirim → düzeltme → son sürüm.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d6-s1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre doğru olanı seç.',
      soru: 'Deniz\'in en sevdiği dersler hangileri?',
      secenekler: [
        { id: 'a', metin: 'Matematik ve biyoloji' },
        { id: 'b', metin: 'İngilizce ve biyoloji' },
        { id: 'c', metin: 'İngilizce ve matematik' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m1-d6-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Tanıtım metninin ilk cümlesini tamamla.',
      parcalar: ['My name ', { bosluk: 0 }, ' Ece and I ', { bosluk: 1 }, ' fourteen ', { bosluk: 2 }, ' old.'],
      cevaplar: [
        { kabul: ['is'] },
        { kabul: ['am'] },
        { kabul: ['years'], ipucu: 'Çoğul olmalı' },
      ],
      aciklama: 'Yaş bildirirken "years" çoğuldur: fourteen yearS old.',
    },
    {
      id: 'a1-m1-d6-s3',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'I very like English.',
      hataliParca: 'very like',
      dogruParca: 'like … very much / really like',
      kabul: ['I like English very much', 'I really like English', 'I like English a lot'],
      aciklama:
        'Türkçede "çok seviyorum" derken "çok" fiilin önüne gelir. İngilizcede "very" fiili niteleyemez: ya "very much" cümlenin sonuna gider ya da "really" kullanılır.',
    },
  ],

  kartlar: ['k-friend', 'k-student', 'k-live', 'k-country'],
  not: 'not-a1-m1-d6',
  sonraki: 'a1-m2-d1',
  kaynak: {
    tur: 'ozgun',
    aciklama: 'Okuma metni DRKOÇ için özgün yazılmıştır; telif hakkı korunan hiçbir metinden alıntı içermez.',
  },
}
