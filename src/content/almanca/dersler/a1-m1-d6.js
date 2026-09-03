/**
 * DERS — A1 / Modül 1 / Ders 6
 * "Kendini tanıtan bir metin yaz"
 *
 * Bu ders YAZMA DERSİ örneğidir ve modülü kapatır. Öğrenci beş derste
 * öğrendiklerini tek bir metinde birleştirir.
 *
 * Yazma burada "serbest kompozisyon" değildir: aşamalı ilerler
 * (plan → taslak → bağlama → kontrol). Boş sayfaya bakıp donmak,
 * A1 öğrencisinin en sık yaşadığı şeydir; aşamalar bunu engeller.
 */

export default {
  id: 'a1-m1-d6',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 6,
  baslik: 'Kendini tanıtan bir metin yaz',
  altBaslik: 'Beş dersin bilgisini tek metinde birleştir',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'dizim', 'gramer'],
  amac: 'Bu dersin sonunda kendini tanıtan, cümleleri birbirine bağlanmış 6–8 cümlelik bir Almanca metin yazabileceksin.',
  kazanim: 'Kişisel bilgilerini sırayla ve bağlaçlarla bağlayarak yazar; fiili ikinci sırada tutar; isimleri büyük harfle yazar.',
  onKosullar: ['a1-m1-d5'],
  sure: 16,
  baglam: {
    durum: 'Bir Alman okuluyla mektup arkadaşlığı başlıyor. İlk mesajında kendini tanıtacaksın.',
    neden: 'Konuşmadan önce yazmak, cümleyi düzeltme fırsatı verir. Yazarken doğru kurulan cümle, konuşurken daha çabuk çıkar.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Önce plan, sonra cümle',
      metin:
        'Boş sayfaya bakıp "ne yazsam" diye düşünmek zaman kaybıdır. Almanca metin yazmanın en hızlı yolu, önce BİLGİLERİ sıralamak sonra her birini bir cümleye dönüştürmektir.',
      maddeler: [
        '1. Ad → Ich heiße …',
        '2. Yaş → Ich bin … Jahre alt.',
        '3. Köken → Ich komme aus …',
        '4. Yer → Ich wohne in …',
        '5. Okul/sınıf → Ich bin Schüler(in) in der … Klasse.',
        '6. Aile → Ich habe … Geschwister.',
        '7. Diller → Ich spreche …',
        '8. Sebep → Ich lerne Deutsch, weil …',
      ],
    },
    {
      tur: 'ornek',
      baslik: 'Örnek metin — bunu kopyalama, yapısını al',
      satirlar: [
        { de: 'Hallo! Ich heiße Elif Demir.', tr: 'Merhaba! Adım Elif Demir.', not: 'Selam + ad' },
        { de: 'Ich bin fünfzehn Jahre alt und ich komme aus der Türkei.', tr: 'On beş yaşındayım ve Türkiyeliyim.', not: 'İki bilgi "und" ile bağlandı' },
        { de: 'Ich wohne in Bursa.', tr: 'Bursa\'da oturuyorum.', not: 'wohnen in' },
        { de: 'Ich bin Schülerin in der neunten Klasse.', tr: 'Dokuzuncu sınıf öğrencisiyim.', not: 'Kız öğrenci: Schülerin' },
        { de: 'Ich habe einen Bruder und eine Schwester.', tr: 'Bir erkek, bir kız kardeşim var.', not: 'Akkusativ: einen / eine' },
        { de: 'Ich spreche Türkisch, Englisch und ein bisschen Deutsch.', tr: 'Türkçe, İngilizce ve biraz Almanca konuşuyorum.', not: 'Diller artikelsiz' },
        { de: 'Ich lerne Deutsch, weil ich Deutschland besuchen möchte.', tr: 'Almanca öğreniyorum, çünkü Almanya\'yı ziyaret etmek istiyorum.', not: 'weil → fiil sonda' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Cümleleri birbirine bağlayan kelimeler',
      kaliplar: [
        { de: 'und', kullanim: 'Ekleme — en sık kullanılan bağlaç', ornek: 'Ich bin 15 und ich wohne in Bursa.' },
        { de: 'aber', kullanim: 'Karşıtlık', ornek: 'Ich spreche Englisch, aber nicht sehr gut.' },
        { de: 'auch', kullanim: '"da/de" — özneden sonra gelir', ornek: 'Mein Bruder lernt auch Deutsch.' },
        { de: 'weil', kullanim: 'Sebep — fiil SONA gider', ornek: 'Ich lerne Deutsch, weil es mir gefällt.' },
        { de: 'zuerst … dann …', kullanim: 'Sıralama', ornek: 'Zuerst gehe ich zur Schule, dann mache ich Hausaufgaben.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Yazarken en çok kaçırılan iki şey',
      yanlis: 'ich heiße elif und ich wohne in bursa.',
      dogru: 'Ich heiße Elif und ich wohne in Bursa.',
      neden:
        'Almancada BÜTÜN isimler ve özel adlar büyük harfle başlar; cümle başı da öyle. Türkçede böyle genel bir kural olmadığı için gözden kaçar. İkinci sık hata: "und"dan sonra özneyi tekrar yazmayı unutmak.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Kopuk cümle mi, bağlı metin mi?',
      dogal: 'Ich bin fünfzehn Jahre alt und ich komme aus der Türkei. Ich wohne in Bursa, aber meine Familie kommt aus Rize.',
      yapay: 'Ich bin fünfzehn. Ich komme aus der Türkei. Ich wohne in Bursa. Meine Familie kommt aus Rize.',
      aciklama:
        'İkinci metin yanlış değil ama liste gibi duruyor. Bağlaç kullanmak metni "cümle yığını" olmaktan çıkarır. A1 seviyesinde bile bu fark görülür.',
    },
    {
      tur: 'ipucu',
      metin:
        'Bilmediğin kelimeyi arama, BİLDİĞİNLE anlat. "Mühendis" kelimesini bilmiyorsan "Mein Vater arbeitet in einer Firma" yaz. Metin akıcı kalsın.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d6-a1',
      tur: 'siralama',
      beceri: 'yazma',
      zorluk: 'kolay',
      yonerge: 'Cümleleri mantıklı bir tanıtım sırasına diz.',
      parcalar: [
        'Ich wohne in Izmir.',
        'Hallo! Ich heiße Kerem.',
        'Ich lerne Deutsch, weil ich Musik mag.',
        'Ich bin vierzehn Jahre alt.',
      ],
      dogruSira: [1, 3, 0, 2],
      aciklama: 'Tanıtım metni genelde şu sırayı izler: selam+ad → yaş → yer → sebep.',
    },
    {
      id: 'a1-m1-d6-a2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Bağlaçları yerleştir.',
      parcalar: [
        'Ich bin fünfzehn ', { bosluk: 0 }, ' ich wohne in Ankara. Ich spreche Englisch, ',
        { bosluk: 1 }, ' nicht sehr gut. Ich lerne Deutsch, ', { bosluk: 2 }, ' es mir gefällt.',
      ],
      havuz: ['und', 'aber', 'weil'],
      cevaplar: [
        { kabul: ['und'], ipucu: 'Ekleme' },
        { kabul: ['aber'], ipucu: 'Karşıtlık' },
        { kabul: ['weil'], ipucu: 'Sebep' },
      ],
      aciklama: '"weil"den sonra fiil sona gider: "…weil es mir gefällt."',
    },
    {
      id: 'a1-m1-d6-a3',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Cümledeki yazım hatasını bul ve düzelt.',
      cumle: 'Ich habe einen bruder und eine schwester.',
      hataliParca: 'bruder und eine schwester',
      dogruParca: 'Bruder und eine Schwester',
      kabul: ['Ich habe einen Bruder und eine Schwester', 'Bruder und eine Schwester'],
      aciklama: 'Almancada bütün isimler büyük harfle başlar — cümlenin ortasında da.',
    },
    {
      id: 'a1-m1-d6-a4',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Kendi tanıtımını adım adım kur.',
      adimlar: [
        { yonerge: 'Adını yaz.', kabul: ['Ich heiße', 'Ich bin'] },
        { yonerge: 'Yaşını ekleyerek yeni bir cümle yaz.', kabul: ['Ich bin', 'Ich bin 15 Jahre alt'] },
        { yonerge: 'Nerede oturduğunu yaz.', kabul: ['Ich wohne in'] },
        { yonerge: 'İki cümleyi "und" ile birleştir.', kabul: ['und'] },
      ],
    },
    {
      id: 'a1-m1-d6-a5',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Aşağıdaki görevi aşama aşama tamamla. Her aşamayı bitirmeden diğerine geçme.',
      gorev: 'Schreib einen kurzen Text über dich: Name, Alter, Herkunft, Wohnort, Schule, Familie, Sprachen und warum du Deutsch lernst.',
      ornekMetin:
        'Hallo! Ich heiße Elif Demir. Ich bin fünfzehn Jahre alt und ich komme aus der Türkei. Ich wohne in Bursa. Ich bin Schülerin in der neunten Klasse. Ich habe einen Bruder und eine Schwester. Ich spreche Türkisch, Englisch und ein bisschen Deutsch. Ich lerne Deutsch, weil ich Deutschland besuchen möchte.',
      kaliplar: [
        'Ich heiße …',
        'Ich bin … Jahre alt.',
        'Ich komme aus …',
        'Ich wohne in …',
        'Ich bin Schüler(in) in der … Klasse.',
        'Ich habe … Geschwister.',
        'Ich spreche …',
        'Ich lerne Deutsch, weil …',
      ],
      asamalar: [
        { ad: 'Plan', aciklama: 'Sekiz bilgiyi Türkçe olarak alt alta yaz. Henüz cümle kurma.' },
        { ad: 'Taslak', aciklama: 'Her bilgiyi bir Almanca cümleye dönüştür. Kısa tut; şimdilik bağlaç kullanma.' },
        { ad: 'Bağlama', aciklama: 'Cümleleri und, aber, weil ile birleştir. En az bir "weil" cümlesi olsun.' },
        { ad: 'Kontrol', aciklama: 'İsimler büyük harfle mi? Her cümlede fiil ikinci sırada mı? weil cümlesinde fiil sonda mı?' },
      ],
      olcut: [
        'Adımı ve yaşımı yazdım.',
        'Nereli olduğumu ve nerede oturduğumu yazdım.',
        'Okulumdan ya da sınıfımdan söz ettim.',
        'Ailemle ilgili bir bilgi verdim.',
        'Konuştuğum dilleri yazdım.',
        'En az bir "weil" cümlesi kurdum ve fiili sona koydum.',
        'Bütün isimleri büyük harfle yazdım.',
      ],
      enAzKelime: 40,
      aranan: [
        { etiket: 'sein fiili', desen: /\b(bin|ist|sind)\b/i },
        { etiket: 'kommen aus', desen: /komme\s+aus/i },
        { etiket: 'wohnen in', desen: /wohne\s+in/i },
        { etiket: 'bağlaç (und/aber)', desen: /\b(und|aber)\b/i },
        { etiket: 'weil cümlesi', desen: /\bweil\b/i },
      ],
    },
  ],

  ozet: [
    'Yazmadan önce bilgileri sırala; boş sayfaya bakıp düşünme.',
    'Cümleleri und, aber, weil ile bağla — liste gibi durmasın.',
    '"weil"den sonra çekimli fiil SONA gider.',
    'Almancada bütün isimler büyük harfle başlar.',
    'Bilmediğin kelimeyi arama, bildiğinle anlat.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d6-s1',
      tur: 'hata-bul',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich lerne Deutsch, weil ich mag die Sprache.',
      hataliParca: 'ich mag die Sprache',
      dogruParca: 'ich die Sprache mag',
      kabul: [
        'Ich lerne Deutsch, weil ich die Sprache mag',
        'ich die Sprache mag',
        'Ich lerne Deutsch weil ich die Sprache mag',
      ],
      aciklama: 'weil yan cümlesinde çekimli fiil sona gider.',
    },
    {
      id: 'a1-m1-d6-s2',
      tur: 'coktan-secmeli',
      beceri: 'yazma',
      zorluk: 'kolay',
      yonerge: 'Hangi cümle doğru yazılmış?',
      soru: 'Yazım kurallarına göre hangisi doğrudur?',
      secenekler: [
        { id: 'a', metin: 'Ich habe eine Schwester und einen Bruder.' },
        { id: 'b', metin: 'Ich habe eine schwester und einen bruder.' },
        { id: 'c', metin: 'ich habe eine Schwester und einen Bruder.' },
      ],
      dogruId: 'a',
      aciklama: 'Hem cümle başı hem isimler büyük harfle yazılır.',
    },
    {
      id: 'a1-m1-d6-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Almanca öğrenme sebebini tek cümlede yazacaksın (weil kullan).',
      kabul: ['Ich lerne Deutsch, weil', 'Ich lerne Deutsch weil'],
      ornekCevap: 'Ich lerne Deutsch, weil ich in Deutschland studieren möchte.',
    },
  ],

  kartlar: ['de-heissen', 'de-kommen', 'de-wohnen', 'de-jahr', 'de-schueler', 'de-sprache'],
  not: 'not-a1-m1-d6',
  sonraki: 'a1-m2-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
