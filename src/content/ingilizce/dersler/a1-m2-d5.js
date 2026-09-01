/**
 * DERS — A1 / Modül 2 / Ders 5
 * "Okuma ve yazma: ailemi tanıtıyorum"
 *
 * Modülü kapatan ders. Okuma parçası bir e-postadır (gerçek bir tür),
 * yazma görevi de aynı türde bir cevap yazmaktır — öğrenci okuduğu şeyin
 * aynısını üretiyor, bu en etkili yazma öğretimidir.
 */

export default {
  id: 'a1-m2-d5',
  surum: 1,
  dil: 'en',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 5,
  baslik: 'Okuma ve yazma: ailemi tanıtıyorum',
  altBaslik: 'Bir e-posta oku, aynısını sen yaz',
  odakBeceri: 'yazma',
  beceriler: ['okuma', 'yazma', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda aileni tanıtan kısa bir e-posta yazabilecek, cümlelerini bağlaçlarla birleştirebilecek ve yazdığını geri bildirime göre düzeltebileceksin.',
  kazanim: 'Aileyi tanıtan en az 50 kelimelik bağlantılı bir metin yazar; have got ve be yapılarını doğru kullanır.',
  onKosullar: ['a1-m2-d3'],
  sure: 20,
  baglam: {
    durum: 'Yurt dışından bir yazışma arkadaşın sana ailesini anlatan bir e-posta göndermiş. Şimdi sen cevap yazacaksın.',
    neden: 'E-posta, İngilizcede en sık yazılan metin türüdür. Okulda, sınavda ve iş hayatında karşına çıkar.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Okumadan önce tahmin et',
      metin: 'Başlık "My family". Okumadan önce düşün: bu metinde hangi bilgiler olacak?',
      maddeler: ['Kaç kişilik aile', 'Kardeşler ve yaşları', 'Anne babanın işi', 'Kimin nasıl göründüğü', 'Evcil hayvan'],
    },
    {
      tur: 'okuma',
      baslik: 'From: lucy@mail.com — Subject: My family',
      metin:
        'Hi!\n\n' +
        'Thanks for your email. Now I want to tell you about my family.\n\n' +
        'There are five people in my family: my mother, my father, my two brothers and me. ' +
        'We live in a small house near the sea.\n\n' +
        'My mother is a nurse and she works at a hospital. She is short and she has got curly red hair. ' +
        'Everybody says she is very kind. My father is a cook. He is tall and he has got a big smile.\n\n' +
        'My brothers are twins! Their names are Tom and Ben and they are nine years old. ' +
        'They look the same but they are very different. Tom is quiet and he reads a lot, but Ben is loud and he loves football.\n\n' +
        'We have also got a dog. Her name is Rosie and she is three.\n\n' +
        'Now please tell me about your family. How many people are there? Have you got any brothers or sisters?\n\n' +
        'Write soon!\nLucy',
      sozluk: [
        { en: 'near the sea', tr: 'denize yakın' },
        { en: 'twins', tr: 'ikizler' },
        { en: 'look the same', tr: 'aynı görünmek' },
        { en: 'a lot', tr: 'çok' },
        { en: 'loud', tr: 'gürültücü, sesi yüksek' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'E-posta kalıpları',
      kaliplar: [
        { en: 'Hi! / Dear …,', kullanim: 'Açılış', ornek: 'Hi Lucy!' },
        { en: 'Thanks for your email.', kullanim: 'Teşekkür', ornek: 'Thanks for your email. It was very nice.' },
        { en: 'Now I want to tell you about…', kullanim: 'Konuya girme', ornek: 'Now I want to tell you about my family.' },
        { en: 'There are … people in my family.', kullanim: 'Aile büyüklüğü', ornek: 'There are four people in my family.' },
        { en: 'Please tell me about…', kullanim: 'Karşı soru', ornek: 'Please tell me about your school.' },
        { en: 'Write soon! / Bye for now,', kullanim: 'Kapanış', ornek: 'Write soon! Deniz' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Cümleleri birleştir: and, but, because',
      metin:
        'Kısa cümleleri arka arkaya dizmek metni kopuk yapar. Üç bağlaç A1 düzeyinde her şeyi çözer.',
      maddeler: [
        'and — ekleme: She is short and she has got red hair.',
        'but — karşıtlık: Tom is quiet but Ben is loud.',
        'because — sebep: I like my brother because he is funny.',
        'YANLIŞ: "She is short. She has red hair. She is kind." → üç kopuk cümle, aynı bilgi.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Aile büyüklüğü söylerken',
      yanlis: 'My family is five people.  ·  We are five person.',
      dogru: 'There are five people in my family.  ·  There are five of us.',
      neden:
        'Türkçedeki "Ailemiz beş kişi." yapısı birebir çevrilince yanlış çıkar. İngilizcede sayıyı bildirmek için "there are" kalıbı kullanılır ve "person" çoğulu "people"dır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d5-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'ANA FİKİR.',
      soru: 'Lucy bu e-postada ne yapıyor?',
      secenekler: [
        { id: 'a', metin: 'Ailesini tanıtıyor ve karşısındakinin ailesini soruyor.' },
        { id: 'b', metin: 'Bir eve taşınmaktan söz ediyor.' },
        { id: 'c', metin: 'Okulundaki dersleri anlatıyor.' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m2-d5-a2',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'AYRINTI.',
      soru: 'Lucy\'nin ailesinde kaç kişi var?',
      secenekler: [
        { id: 'a', metin: 'Dört' },
        { id: 'b', metin: 'Beş' },
        { id: 'c', metin: 'Altı' },
      ],
      dogruId: 'b',
      secenekNotu: { c: 'Köpek Rosie aileden sayılmıyor; metin "five people" diyor.' },
    },
    {
      id: 'a1-m2-d5-a3',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'ÇIKARIM. Metinde açıkça yazmıyor; en mantıklı sonuç hangisi?',
      soru: 'Tom ve Ben hakkında ne söylenebilir?',
      secenekler: [
        { id: 'a', metin: 'Görünüşleri aynı ama karakterleri farklı.' },
        { id: 'b', metin: 'Farklı yaşlardalar.' },
        { id: 'c', metin: 'İkisi de futbolu seviyor.' },
      ],
      dogruId: 'a',
      aciklama: 'Metin "They look the same but they are very different" diyor. Çıkarım iki bilgiyi birleştirmektir.',
    },
    {
      id: 'a1-m2-d5-a4',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'zor',
      yonerge: 'BAĞLAMDAN KELİME TAHMİNİ. Sözlüğe bakmadan tahmin et.',
      soru: '"Ben is loud and he loves football." — "loud" ne anlama geliyor?',
      secenekler: [
        { id: 'a', metin: 'sesi yüksek, gürültücü' },
        { id: 'b', metin: 'çok uzun boylu' },
        { id: 'c', metin: 'çok çalışkan' },
      ],
      dogruId: 'a',
      aciklama:
        'İpucu bir önceki cümlededir: "Tom is quiet BUT Ben is loud." — "but" karşıtlık kurar, yani loud, quiet\'ın zıddıdır.',
    },
    {
      id: 'a1-m2-d5-a5',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Boşlukları and, but ya da because ile doldur.',
      parcalar: [
        'My sister is quiet ', { bosluk: 0 }, ' my brother is very loud.\nI like my grandmother ',
        { bosluk: 1 }, ' she is very kind.\nMy father is tall ', { bosluk: 2 }, ' he has got dark hair.',
      ],
      cevaplar: [
        { kabul: ['but'], ipucu: 'karşıtlık' },
        { kabul: ['because'], ipucu: 'sebep' },
        { kabul: ['and'], ipucu: 'ekleme' },
      ],
      aciklama: 'and ekler, but karşıtlık kurar, because sebep bildirir. Üçü A1 düzeyinde metni akıcı yapmaya yeter.',
    },
    {
      id: 'a1-m2-d5-a6',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'My family is four people.',
      hataliParca: 'My family is four people',
      dogruParca: 'There are four people in my family',
      kabul: [
        'There are four people in my family', 'There are four of us',
        'There are four people in my family.',
      ],
      aciklama: 'Türkçedeki "Ailemiz dört kişi." yapısı birebir çevrilmez; İngilizcede "There are … in my family" kalıbı kullanılır.',
    },
    {
      id: 'a1-m2-d5-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'YAZMA GÖREVİ — aşama aşama ilerle.',
      gorev: "Lucy'ye cevap yaz ve kendi aileni tanıt. En az 50 kelime.",
      ornekMetin:
        'Hi Lucy!\n\n' +
        'Thanks for your email. Now I want to tell you about my family.\n\n' +
        'There are four people in my family: my mother, my father, my sister and me. We live in Ankara.\n\n' +
        'My mother is a teacher and my father works in an office. My sister is thirteen. ' +
        'She is tall and she has got long dark hair. She is quiet but she is very clever.\n\n' +
        'We have not got a pet, but I want a dog!\n\n' +
        'Please tell me about your school.\n\nWrite soon!\nDeniz',
      kaliplar: [
        'Thanks for your email.',
        'There are … people in my family.',
        'My mother is … and my father …',
        'He/She is … and he/she has got …',
        '… is quiet but … is loud.',
        'Please tell me about…',
        'Write soon!',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Lucy\'ye cevap yazacaksın. En az 50 kelime, aile üyelerini tanıt ve sonunda ona bir soru sor.' },
        { ad: 'Örneği incele', aciklama: 'Yukarıdaki örnek cevabı oku. Hangi bilgiler hangi sırada verilmiş? Cümleler nasıl bağlanmış?' },
        { ad: 'Fikir üret', aciklama: 'Not al: kaç kişisiniz, kim ne iş yapıyor, kardeşin varsa nasıl biri, evcil hayvan var mı.' },
        { ad: 'Taslak yaz', aciklama: 'Hataya takılma; önce hepsini yaz.' },
        { ad: 'Geri bildirim al', aciklama: 'Sistem uzunluk, hedef yapılar ve Türkçe düşünme izlerini kontrol edecek.' },
        { ad: 'Düzelt ve son sürümü yaz', aciklama: 'İlk sürümle son sürümü yan yana göreceksin.' },
      ],
      olcut: [
        'Görevi yerine getirdim mi? (aileyi tanıttım, en az 50 kelime)',
        'Aile büyüklüğünü "There are … in my family" ile söyledim mi?',
        'be ve have got yapılarını doğru yerde kullandım mı?',
        'his / her seçimlerim doğru mu?',
        'En az bir and, bir but kullandım mı?',
        'Sonunda karşı tarafa bir soru sordum mu?',
        'Türkçeden birebir çevirdiğim bir cümle var mı?',
      ],
      enAzKelime: 50,
      aranan: [
        { etiket: 'There are … in my family', desen: /\bthere\s+(are|is)\b/i },
        { etiket: 'have got / has got', desen: /\b(have|has)\s+(got\s+)?\w+/i },
        { etiket: 'iyelik sıfatı (my / his / her)', desen: /\b(my|his|her|our|their)\s+\w+/i },
        { etiket: 'bağlaç (and / but / because)', desen: /\b(and|but|because)\b/i },
        { etiket: 'karşı tarafa soru', desen: /\?/ },
      ],
      tuzaklar: [
        {
          kod: 'aile-sayisi',
          desen: /\bmy family (is|are) \w+ (people|person)/i,
          baslik: 'Aile büyüklüğü Türkçe kalıpla yazılmış',
          aciklama: 'Türkçedeki "Ailemiz dört kişi." birebir çevrilince "My family is four people" çıkıyor. İngilizcede bu bilgi "There are four people in my family" kalıbıyla verilir.',
          dogru: 'There are four people in my family.',
          mikro: { yonerge: '"Ailemiz beş kişi." cümlesini yaz.', kabul: ['There are five people in my family', 'There are five of us'] },
        },
      ],
    },
  ],

  ozet: [
    'E-posta kalıpları: Hi! → Thanks for your email → konu → karşı soru → Write soon!',
    'Aile büyüklüğü: "There are … people in my family." — "My family is …" değil.',
    '"person" çoğulu "people"dır.',
    'and ekler, but karşıtlık kurar, because sebep bildirir.',
    'Bilinmeyen kelimeyi bağlamdan tahmin et: "but" varsa zıt anlam ara.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d5-s1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre doğru olanı seç.',
      soru: 'Lucy\'nin annesi nasıl biri?',
      secenekler: [
        { id: 'a', metin: 'Uzun boylu, düz sarı saçlı' },
        { id: 'b', metin: 'Kısa boylu, kıvırcık kızıl saçlı' },
        { id: 'c', metin: 'Kısa boylu, düz siyah saçlı' },
      ],
      dogruId: 'b',
    },
    {
      id: 'a1-m2-d5-s2',
      tur: 'bosluk',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'E-postanın ilk cümlesini tamamla.',
      parcalar: ['There ', { bosluk: 0 }, ' four ', { bosluk: 1 }, ' in my family.'],
      cevaplar: [
        { kabul: ['are'] },
        { kabul: ['people'], ipucu: 'person kelimesinin çoğulu' },
      ],
    },
    {
      id: 'a1-m2-d5-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Kız kardeşin sessiz, erkek kardeşin gürültücü. Bunu tek cümlede söyle.',
      kabul: [
        'My sister is quiet but my brother is loud',
        'My sister is quiet but my brother is noisy',
        'My brother is loud but my sister is quiet',
        'My sister is quiet, but my brother is loud',
      ],
      ornekCevap: 'My sister is quiet but my brother is loud.',
    },
  ],

  kartlar: ['k-family', 'k-parents', 'k-quiet', 'k-funny', 'k-kind'],
  not: null,
  sonraki: 'a1-m3-d1',
  kaynak: {
    tur: 'ozgun',
    aciklama: 'E-posta metni DRKOÇ için özgün yazılmıştır; telif hakkı korunan hiçbir kaynaktan alıntı içermez.',
  },
}
