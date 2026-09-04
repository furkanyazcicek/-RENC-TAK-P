/**
 * DERS — Pre-A1 / Modül 1 / Ders 1
 * "İspanyolcayı okumak: sesler, harfler ve vurgu"
 *
 * Bu ders bilinçli olarak CESARET VEREN bir dersle başlar, çünkü
 * İspanyolca Türk öğrenci için gerçekten kolay başlayan bir dildir:
 * yazıldığı gibi okunur, tıpkı Türkçe gibi. Bu avantaj ilk cümlede
 * söylenir; öğrenci "zor dil" korkusuyla başlamamalıdır.
 *
 * Buna karşılık üç ses Türkçede YOKTUR (gırtlaktan j, titrek rr, peltek
 * z/c) ve dördü Türkçeden FARKLI okunur (h, ll, ñ, qu). Ders bu iki
 * listeyi ayrı ayrı verir; karıştırılırsa öğrenci neyi zaten bildiğini
 * göremez.
 */

export default {
  id: 'prea1-m1-d1',
  surum: 1,
  dil: 'es',
  seviye: 'Pre-A1',
  modul: 'prea1-m1',
  sira: 1,
  baslik: 'İspanyolcayı okumak: sesler, harfler ve vurgu',
  altBaslik: 'Gördüğün her kelimeyi ilk seferde doğru oku',
  odakBeceri: 'telaffuz',
  beceriler: ['telaffuz', 'kelime', 'dinleme'],
  amac: 'Bu dersin sonunda İspanyolca herhangi bir kelimeyi görünce doğru okuyabilecek, vurgunun hangi heceye düştüğünü kuralla bulabilecek ve adını İspanyol alfabesiyle heceleyebileceksin.',
  kazanim: 'İspanyolcanın yazıldığı gibi okunduğunu uygular; h/j/ll/ñ/qu/z harflerini doğru seslendirir; vurgu kuralını ve aksanın işlevini açıklar.',
  onKosullar: [],
  sure: 14,
  baglam: {
    durum: 'Elinde İspanyolca bir menü ya da şarkı sözü var. Hiç ders görmedin ama okuman gerekiyor.',
    neden: 'İspanyolcada okuma kuralları bir günde öğrenilir ve ömür boyu işe yarar. Bu kuralları öğrenmeden ezberlenen her kelime yanlış sesle kaydedilir; sonradan düzeltmek iki kat zaman alır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İyi haber: İspanyolca da yazıldığı gibi okunur',
      metin:
        'Türkçe ile İspanyolca bu konuda kardeştir: bir harf bir sestir. İngilizcedeki "read/read" ya da Fransızcadaki okunmayan harfler burada yoktur. Kuralı bir kez öğrenirsen hiç görmediğin bir kelimeyi bile doğru okursun.',
      maddeler: [
        'a, e, i, o, u sesleri Türkçedekiyle neredeyse aynıdır ve hep aynı okunur.',
        'Kelime sonundaki harfler okunur — Fransızcadaki gibi yutulmaz.',
        'Vurgu düzenlidir ve kuralı vardır; tahmin etmek gerekmez.',
        'Türkçede olmayan ses sayısı yalnızca ÜÇTÜR. Gerisi tanıdıktır.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Farklı okunan yedi harf — listenin tamamı bu',
      metin:
        'Aşağıdaki yedi maddeyi öğrenirsen İspanyolca okuman biter. Başka sürpriz yoktur.',
      maddeler: [
        'h → HİÇ OKUNMAZ: hola = "ola", hospital = "ospital", hora = "ora"',
        'j → gırtlaktan sert "h": jugar = "hugar", jueves = "hueves"',
        'g (yalnız ge/gi\'de) → aynı gırtlak sesi: gente = "hente", girar = "hirar"',
        'll → Türkçedeki "y": calle = "kaye", llamar = "yamar"',
        'ñ → Türkçedeki "ny": mañana = "manyana", año = "anyo"',
        'qu → "k", aradaki u OKUNMAZ: queso = "keso", quiero = "kiero"',
        'z ve ce/ci → İspanya\'da peltek "th", Latin Amerika\'da "s": gracias',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: '"hola" kelimesini "hola" diye, baştaki h\'yi söyleyerek okumak.',
      dogru: '"hola" → "ola". Baştaki h sessizdir.',
      neden:
        'Türkçede h her zaman okunur ve bu alışkanlık çok güçlüdür. İspanyolcada h HİÇBİR ZAMAN okunmaz — tek istisnası yoktur. Bu tek kural, ilk dersteki kelimelerin yarısını düzeltir.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Türkçede olmayan üç ses',
      sesler: [
        {
          ipa: '/x/',
          aciklama:
            'GIRTLAKTAN J. Türkçedeki "j" (jandarma) DEĞİLDİR. Boğazın arkasından çıkan sert bir "h"dir; Türkçedeki "hı" sesine yakındır. Aynı ses "ge" ve "gi" hecelerinde de vardır.',
          kelimeler: ['jugar', 'trabajar', 'lejos', 'gente', 'girar'],
        },
        {
          ipa: '/r/',
          aciklama:
            'TİTREK ÇİFT R. Dil ucu damakta birkaç kez titrer. Kelime başındaki tek "r" de titrektir. Bu ses anlam ayırır: "caro" (pahalı) ≠ "carro" (araba), "pero" (ama) ≠ "perro" (köpek).',
          kelimeler: ['perro', 'arroz', 'barrio', 'Roma', 'rojo'],
        },
        {
          ipa: '/θ/',
          aciklama:
            'PELTEK Z. Dil ucu üst dişlerin arasından hafifçe çıkar; İngilizcedeki "think" sesidir. Bu ses YALNIZ İspanya\'dadır; Latin Amerika\'da aynı harfler "s" okunur. İkisi de doğrudur.',
          kelimeler: ['gracias', 'plaza', 'cinco', 'zapato'],
        },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Vurgu: üç satırlık bir kural',
      metin:
        'İspanyolcada vurgunun nereye düşeceği tahmin işi değildir. Aksan işareti yoksa iki kural yeter; aksan varsa zaten yeri gösterilmiştir.',
      maddeler: [
        'Kelime ünlü, n ya da s ile bitiyorsa → vurgu SONDAN İKİNCİ hecede: casa, hablan, libros',
        'Kelime başka bir sessizle bitiyorsa → vurgu SON hecede: hospital, español, comer',
        'Aksan (´) varsa → kural geçersiz, vurgu aksanın olduğu hecededir: café, música, teléfono',
        'Yani aksan bir süs değil, "kural burada geçmiyor" işaretidir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'İspanyol alfabesi — adını hecelemek için',
      basliklar: ['Harf', 'Okunuşu', 'Harf', 'Okunuşu'],
      satirlar: [
        ['A', 'a', 'N', 'ene'],
        ['B', 'be', 'Ñ', 'eñe'],
        ['C', 'ce', 'O', 'o'],
        ['D', 'de', 'P', 'pe'],
        ['E', 'e', 'Q', 'cu'],
        ['F', 'efe', 'R', 'erre'],
        ['G', 'ge', 'S', 'ese'],
        ['H', 'hache', 'T', 'te'],
        ['I', 'i', 'U', 'u'],
        ['J', 'jota', 'V', 'uve'],
        ['K', 'ka', 'W', 'uve doble'],
        ['L', 'ele', 'X', 'equis'],
        ['M', 'eme', 'Y', 'i griega'],
        ['Z', 'zeta', '—', '—'],
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Uygulamada duyacağın ilk yönergeler',
      kaliplar: [
        { es: '¡Escucha!', kullanim: 'Dinle', ornek: 'Escucha y repite.' },
        { es: '¡Repite!', kullanim: 'Tekrar et', ornek: 'Repite después de mí.' },
        { es: '¡Mira!', kullanim: 'Bak', ornek: 'Mira la pizarra.' },
        { es: 'Abre el libro.', kullanim: 'Kitabı aç', ornek: 'Abre el libro en la página diez.' },
        { es: 'No entiendo.', kullanim: 'Anlamıyorum — en çok işine yarayacak cümle', ornek: 'Perdón, no entiendo.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'İlk okuma denemesi',
      metin:
        '¡Hola! Me llamo Lucía.\nVivo en Madrid.\nSoy estudiante.\n¿Y tú? ¿Cómo te llamas?',
      sozluk: [
        { es: 'Me llamo…', tr: 'Adım …' },
        { es: 'Vivo en…', tr: '… oturuyorum' },
        { es: '¿Y tú?', tr: 'Ya sen?' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Yeni bir kelimeyi ASLA yalnız yazıyla kaydetme. Önce sesini duy, sonra yazımını gör. İspanyolcada bu iş kolaydır çünkü yazı ile ses birbirini tutar — bu avantajı ilk günden kullan.',
    },
  ],

  alistirmalar: [
    {
      id: 'prea1-m1-d1-a1',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: 'Doğru okunuşu seç.',
      soru: '"hola" kelimesi nasıl okunur?',
      secenekler: [
        { id: 'a', metin: 'ola' },
        { id: 'b', metin: 'hola' },
        { id: 'c', metin: 'holla' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Baştaki "h" İspanyolcada hiç okunmaz.',
        c: 'Kelimede çift "l" yoktur; ayrıca "ll" olsaydı "y" okunurdu.',
      },
      aciklama: 'İspanyolcada "h" sessiz harftir ve istisnası yoktur: hola → "ola", hospital → "ospital".',
    },
    {
      id: 'prea1-m1-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: 'Doğru okunuşu seç.',
      soru: '"queso" kelimesi nasıl okunur?',
      secenekler: [
        { id: 'a', metin: 'keso' },
        { id: 'b', metin: 'kueso' },
        { id: 'c', metin: 'çeso' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"qu" grubunda "u" hiç okunmaz.',
        c: '"qu" her zaman "k" sesidir, "ç" değil.',
      },
      aciklama: '"qu" grubu yalnız "que" ve "qui" hecelerinde bulunur ve her ikisinde de "u" sessizdir: queso = "keso", quiero = "kiero".',
    },
    {
      id: 'prea1-m1-d1-a3',
      tur: 'eslestirme',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Harf grubunu Türkçedeki karşılığıyla eşleştir.',
      sol: [
        { id: 's1', metin: 'll' },
        { id: 's2', metin: 'ñ' },
        { id: 's3', metin: 'j' },
        { id: 's4', metin: 'ch' },
      ],
      sag: [
        { id: 'g1', metin: 'y (kaye)' },
        { id: 'g2', metin: 'ny (manyana)' },
        { id: 'g3', metin: 'gırtlaktan h (hugar)' },
        { id: 'g4', metin: 'ç (noçe)' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Bu dört harf grubunu ezberlersen İspanyolca okuman tamamlanır; geri kalan bütün harfler Türkçedeki gibi okunur.',
    },
    {
      id: 'prea1-m1-d1-a4',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Vurgu kuralını uygula.',
      soru: '"hospital" kelimesinde vurgu hangi hecededir?',
      secenekler: [
        { id: 'a', metin: 'hos-pi-TAL (son hece)' },
        { id: 'b', metin: 'hos-PI-tal (ortadaki hece)' },
        { id: 'c', metin: 'HOS-pi-tal (ilk hece)' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Bu, ünlü/n/s ile biten kelimelerin kuralıdır; "hospital" l ile biter.',
        c: 'İlk heceye vurgu ancak aksan varsa düşer.',
      },
      aciklama: 'Kelime ünlü, n ya da s DIŞINDA bir sessizle bitiyorsa vurgu son hecededir: hospital, español, comer, trabajar.',
    },
    {
      id: 'prea1-m1-d1-a5',
      tur: 'dogal-secim',
      beceri: 'telaffuz',
      zorluk: 'zor',
      yonerge: 'Hangi okunuş doğru? Neden olduğunu da oku.',
      baglam: '"gente" kelimesini yüksek sesle okuyacaksın.',
      secenekler: [
        { id: 'a', metin: 'hente', dogal: true, neden: 'Doğru. "g" harfi "e" ve "i" önünde gırtlaktan çıkan sert bir "h" sesi verir.' },
        { id: 'b', metin: 'gente', dogal: false, neden: 'Yanlış. "g" yalnız "ga, go, gu" hecelerinde Türkçedeki "g" gibi okunur.' },
        { id: 'c', metin: 'jente', dogal: false, neden: 'Yanlış. İspanyolcada Türkçedeki yumuşak "j" sesi (jandarma) hiç yoktur.' },
      ],
      aciklama: 'Kural çifttir: "ge/gi" gırtlaktan okunur, "ga/go/gu" ise normal "g"dir. Aynı gırtlak sesi "j" harfinde her ünlüyle birlikte bulunur.',
    },
    {
      id: 'prea1-m1-d1-a6',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Duyduğun kelimeyi yaz.',
      seslendir: 'mañana',
      kabul: ['mañana', 'manana'],
      ipucu: 'İçinde "ny" sesi var.',
      aciklama: '"ñ" harfi Türkçede tek harf değildir ama ses tanıdıktır: "manyana". Yazarken üstteki dalgayı unutma.',
    },
  ],

  ozet: [
    'İspanyolca yazıldığı gibi okunur — tıpkı Türkçe gibi.',
    'h hiç okunmaz. j ve ge/gi gırtlaktan çıkar. ll = y, ñ = ny, qu = k.',
    'Türkçede olmayan üç ses: gırtlaktan j, titrek rr, peltek z.',
    'Vurgu: ünlü/n/s ile bitiyorsa sondan ikinci, başka sessizle bitiyorsa son hece.',
    'Aksan bir süs değil, "kural burada geçmiyor" işaretidir.',
  ],

  miniSinav: [
    {
      id: 'prea1-m1-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'kolay',
      yonerge: 'Doğru okunuşu seç.',
      soru: '"calle" nasıl okunur?',
      secenekler: [
        { id: 'a', metin: 'kaye' },
        { id: 'b', metin: 'kalle' },
        { id: 'c', metin: 'çaye' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"ll" tek sestir, çift "l" değil.', c: '"c" harfi "a" önünde "k" okunur.' },
    },
    {
      id: 'prea1-m1-d1-s2',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Vurguyu bul.',
      soru: '"casa" kelimesinde vurgu nerededir?',
      secenekler: [
        { id: 'a', metin: 'CA-sa' },
        { id: 'b', metin: 'ca-SA' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Kelime ünlüyle bitiyor; vurgu sondan ikinci hecededir.' },
    },
    {
      id: 'prea1-m1-d1-s3',
      tur: 'tanim-kelime',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Tanıma uyan kalıbı yaz.',
      tanim: 'Anlamadığında söyleyeceğin cümle.',
      kabul: ['No entiendo', 'no entiendo'],
      ilkHarf: 'N',
    },
  ],

  kartlar: ['es-hola', 'es-gracias', 'es-por-favor', 'es-adios'],
  not: 'not-prea1-m1-d1',
  sonraki: 'a1-m1-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
