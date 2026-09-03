/**
 * DERS — A1 / Modül 1 / Ders 5
 * "Sayılar, yaş, telefon ve heceleme"
 *
 * Almanca sayıların Türk öğrenci için tek gerçek zorluğu var: 21–99
 * arasında BİRLER ÖNCE söylenir. 21 = "bir ve yirmi". Bu, telefon
 * numarası ve fiyat dinlerken en sık hata kaynağıdır ve ancak bilinçli
 * çalışmayla oturur.
 *
 * Ders bu tek zorluğu merkeze alır; gerisi tekrar ve kullanımdır.
 */

export default {
  id: 'a1-m1-d5',
  surum: 1,
  dil: 'de',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 5,
  baslik: 'Sayılar, yaş, telefon ve heceleme',
  altBaslik: 'Almancada birler önce gelir: 21 = "bir ve yirmi"',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'dinleme', 'telaffuz'],
  amac: 'Bu dersin sonunda 0–100 arası sayıları söyleyebilecek, yaşını ve telefon numaranı verebilecek, adını Almanca harflerle heceleyebileceksin.',
  kazanim: '0–100 sayılarını üretir ve duyduğunda tanır; yaşını "sein" ile bildirir; telefon numarasını okur; adını alfabeyle heceler.',
  onKosullar: ['a1-m1-d4'],
  sure: 14,
  baglam: {
    durum: 'Bir kayıt formu dolduruyorsun: yaş, telefon, adın nasıl yazılıyor. Görevli hepsini soruyor.',
    neden: 'Sayı anlamayan öğrenci fiyat, saat, adres ve telefon konuşmalarının hiçbirini takip edemez. Sayılar dilin altyapısıdır.',
  },

  bloklar: [
    {
      tur: 'tablo',
      baslik: '0–20 — bunlar ezberlenir',
      basliklar: ['Sayı', 'Almanca', 'Sayı', 'Almanca'],
      satirlar: [
        ['0', 'null', '11', 'elf'],
        ['1', 'eins', '12', 'zwölf'],
        ['2', 'zwei', '13', 'dreizehn'],
        ['3', 'drei', '14', 'vierzehn'],
        ['4', 'vier', '15', 'fünfzehn'],
        ['5', 'fünf', '16', 'sechzehn'],
        ['6', 'sechs', '17', 'siebzehn'],
        ['7', 'sieben', '18', 'achtzehn'],
        ['8', 'acht', '19', 'neunzehn'],
        ['9', 'neun', '20', 'zwanzig'],
        ['10', 'zehn', '', ''],
      ],
    },
    {
      tur: 'anlatim',
      baslik: '13–19: sayı + zehn',
      metin:
        '13\'ten 19\'a kadar kural basittir: birim sayı + "zehn". İki istisna vardır ve ikisi de kısalmadır.',
      maddeler: [
        'drei + zehn → dreizehn ✓',
        'vier + zehn → vierzehn ✓',
        'sechs + zehn → sechzehn (s düşer!)',
        'sieben + zehn → siebzehn (en düşer!)',
      ],
    },
    {
      tur: 'anlatim',
      baslik: '21–99: BİRLER ÖNCE — Almancanın en şaşırtıcı kuralı',
      metin:
        'Türkçede 21 "yirmi bir"dir: önce onlar, sonra birler. Almancada TERSTİR: önce birler, sonra "und", sonra onlar. Hepsi TEK KELİME yazılır.',
      maddeler: [
        '21 = einundzwanzig ("bir ve yirmi")',
        '34 = vierunddreißig ("dört ve otuz")',
        '67 = siebenundsechzig ("yedi ve altmış")',
        '99 = neunundneunzig ("dokuz ve doksan")',
        'Dikkat: 21\'de "eins" değil "ein" kullanılır → einundzwanzig.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Onluklar',
      basliklar: ['Sayı', 'Almanca', 'Not'],
      satirlar: [
        ['20', 'zwanzig', '—'],
        ['30', 'dreißig', 'tek "ß" ile, -zig değil'],
        ['40', 'vierzig', '—'],
        ['50', 'fünfzig', '—'],
        ['60', 'sechzig', 's düşer'],
        ['70', 'siebzig', 'en düşer'],
        ['80', 'achtzig', '—'],
        ['90', 'neunzig', '—'],
        ['100', 'hundert', '(ein)hundert'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Dinlerken en sık yapılan hata',
      yanlis: '"vierundzwanzig" duyunca 42 anlamak.',
      dogru: 'vierundzwanzig = 24 (dört ve yirmi).',
      neden:
        'Türkçe sırayla dinleyen kulak ilk duyduğu sayıyı onlar hanesi sanar. Çözüm: sayıyı TERSTEN yaz. Önce "und"dan SONRAKİ sayıyı yerine koy, sonra öndekini.',
    },
    {
      tur: 'kalip',
      baslik: 'Yaş, telefon ve doğum yılı',
      kaliplar: [
        { de: 'Ich bin … Jahre alt.', kullanim: 'Yaş bildirme', ornek: 'Ich bin fünfzehn Jahre alt.' },
        { de: 'Wie alt bist du?', kullanim: 'Yaş sorma', ornek: '— Wie alt bist du? — Ich bin 16.' },
        { de: 'Meine Nummer ist …', kullanim: 'Telefon verme', ornek: 'Meine Nummer ist null-fünf-drei-zwei…' },
        { de: 'Wie ist deine Handynummer?', kullanim: 'Telefon sorma', ornek: '— Wie ist deine Handynummer?' },
        { de: 'Wie schreibt man das?', kullanim: 'Yazımı sorma', ornek: '— Yazçiçek. — Wie schreibt man das?' },
        { de: 'Können Sie das buchstabieren?', kullanim: 'Heceleme isteme', ornek: 'Können Sie das bitte buchstabieren?' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Yaş "haben" ile söylenmez',
      yanlis: 'Ich habe fünfzehn Jahre.',
      dogru: 'Ich bin fünfzehn Jahre alt.',
      neden:
        'Bu hata Fransızca ve İtalyancadan gelir ("j\'ai 15 ans"). Almanca yaşı "sein" ile söyler ve sonuna "alt" ekler. Kısaca "Ich bin fünfzehn." de doğrudur.',
    },
    {
      tur: 'telaffuz',
      baslik: 'Sayılarda ses tuzakları',
      sesler: [
        {
          ipa: '/ts/',
          aciklama: 'zwei, zehn, zwanzig — hepsi "ts" ile başlar. "zvay", "tseen", "tsvantsiç".',
          kelimeler: ['zwei', 'zehn', 'zwanzig', 'zwölf'],
        },
        {
          ipa: '/ç/',
          aciklama: '-zig ile biten bütün onluklar sonda "-tsiç" okunur, "-tsig" değil.',
          kelimeler: ['zwanzig', 'dreißig', 'vierzig', 'sechzig'],
        },
        {
          ipa: '/ks/',
          aciklama: '"sechs" (6) → "zeks". Ama "sechzehn" (16) ve "sechzig" (60) → "zeç…" olur; s düşer.',
          kelimeler: ['sechs', 'sechzehn', 'sechzig'],
        },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Telefon numarası dinlemesi',
      metin:
        'Meine Nummer ist null, fünf, drei, zwei, vier, sieben, neun, eins, zwei, drei.',
      satirlar: [
        { kisi: 'Görevli', de: 'Wie ist Ihre Telefonnummer?' },
        { kisi: 'Elif', de: 'Meine Nummer ist null fünf drei zwei — vier sieben neun — eins zwei drei.' },
        { kisi: 'Görevli', de: 'Und wie schreibt man Ihren Namen?' },
        { kisi: 'Elif', de: 'E wie Emil, L wie Ludwig, I wie Ida, F wie Friedrich.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Telefon numaraları Almancada çoğunlukla TEK TEK okunur (null-fünf-drei…). İkişerli okuma da duyulur ama tek tek okumak her zaman anlaşılır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d5-a1',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Sayıyı Almanca karşılığıyla eşleştir.',
      sol: [
        { id: 'n1', metin: '7' },
        { id: 'n2', metin: '12' },
        { id: 'n3', metin: '16' },
        { id: 'n4', metin: '30' },
        { id: 'n5', metin: '60' },
      ],
      sag: [
        { id: 'a1', metin: 'sieben' },
        { id: 'a2', metin: 'zwölf' },
        { id: 'a3', metin: 'sechzehn' },
        { id: 'a4', metin: 'dreißig' },
        { id: 'a5', metin: 'sechzig' },
      ],
      eslesme: { n1: 'a1', n2: 'a2', n3: 'a3', n4: 'a4', n5: 'a5' },
      aciklama: '16 ve 60\'ta "sechs"in s\'si düşer: sechzehn, sechzig.',
    },
    {
      id: 'a1-m1-d5-a2',
      tur: 'coktan-secmeli',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: '"vierundzwanzig" hangi sayıdır?',
      soru: 'vierundzwanzig = ?',
      secenekler: [
        { id: 'a', metin: '24' },
        { id: 'b', metin: '42' },
        { id: 'c', metin: '420' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Türkçe sırayla okunmuş. Almancada "und"dan SONRAKİ sayı onlar hanesidir.',
      },
      aciklama: 'vier (4) + und + zwanzig (20) = 24. Birler önce söylenir.',
    },
    {
      id: 'a1-m1-d5-a3',
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Sayıları Almanca yaz.',
      parcalar: [
        '21 = ', { bosluk: 0 }, '\n35 = ', { bosluk: 1 }, '\n78 = ', { bosluk: 2 },
      ],
      cevaplar: [
        { kabul: ['einundzwanzig'], ipucu: '"eins" değil "ein"' },
        { kabul: ['fünfunddreißig', 'fuenfunddreissig', 'fünfunddreissig'], ipucu: 'beş ve otuz' },
        { kabul: ['achtundsiebzig'], ipucu: 'sekiz ve yetmiş' },
      ],
      aciklama: 'Hepsi tek kelime, bitişik yazılır.',
    },
    {
      id: 'a1-m1-d5-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ich habe fünfzehn Jahre.',
      hataliParca: 'habe fünfzehn Jahre',
      dogruParca: 'bin fünfzehn Jahre alt',
      kabul: [
        'Ich bin fünfzehn Jahre alt', 'Ich bin fuenfzehn Jahre alt',
        'Ich bin fünfzehn', 'Ich bin 15 Jahre alt',
      ],
      aciklama: 'Almancada yaş "sein" ile söylenir ve genelde sonuna "alt" eklenir.',
      tuzaklar: [
        {
          kod: 'yas-haben',
          desen: /\bhabe\s+\w+\s*Jahre/i,
          baslik: 'Yaş "haben" ile söylenmiş',
          aciklama: 'Türkçede "15 yaşındayım" bir durumdur; Almanca da bunu "sein" ile kurar.',
          dogru: 'Ich bin 15 Jahre alt.',
          mikro: { yonerge: 'Yaşını Almanca yaz.', kabul: ['Ich bin', 'Ich bin 15 Jahre alt'] },
        },
      ],
    },
    {
      id: 'a1-m1-d5-a5',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru sayıyı seç.',
      seslendir: 'siebenundachtzig',
      secenekler: [
        { id: 'a', metin: '87' },
        { id: 'b', metin: '78' },
        { id: 'c', metin: '77' },
      ],
      dogruId: 'a',
      aciklama: 'sieben (7) + und + achtzig (80) = 87.',
    },
    {
      id: 'a1-m1-d5-a6',
      tur: 'dinle-yaz',
      beceri: 'dinleme',
      zorluk: 'zor',
      yonerge: 'Dinle ve duyduğun telefon numarasını RAKAMLA yaz (boşluksuz).',
      seslendir: 'null fünf drei zwei sieben eins neun',
      kabul: ['0532719'],
      aciklama: 'Telefon numaraları Almancada çoğunlukla tek tek okunur.',
    },
    {
      id: 'a1-m1-d5-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE.',
      durum: 'Görevli adını yazamadı. Adını harf harf söyleyeceğini belirtiyorsun.',
      kabul: ['Ich buchstabiere', 'Ich buchstabiere meinen Namen', 'Soll ich buchstabieren'],
      ornekCevap: 'Ich buchstabiere meinen Namen.',
    },
    {
      id: 'a1-m1-d5-a8',
      tur: 'soru-cevap',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Soruya Almanca cevap ver.',
      soru: 'Wie alt bist du?',
      kabul: ['Ich bin', 'Ich bin 15', 'Ich bin fünfzehn Jahre alt', 'Ich bin 16 Jahre alt'],
      ornekCevap: 'Ich bin fünfzehn Jahre alt.',
    },
  ],

  ozet: [
    '0–20 ezberlenir; 13–19 arası "sayı + zehn" kuralıyla kurulur.',
    '21–99 arasında BİRLER ÖNCE gelir: 24 = vierundzwanzig.',
    'Hepsi tek kelime, bitişik yazılır.',
    'sechs ve sieben kısalır: sechzehn, sechzig, siebzehn, siebzig.',
    'Yaş "sein" ile söylenir: Ich bin 15 Jahre alt.',
    'Telefon numaraları genelde tek tek okunur.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d5-s1',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: '43 Almancada nasıl yazılır?',
      soru: '43 = ?',
      secenekler: [
        { id: 'a', metin: 'dreiundvierzig' },
        { id: 'b', metin: 'vierunddreißig' },
        { id: 'c', metin: 'vierzigdrei' },
      ],
      dogruId: 'a',
      aciklama: 'drei (3) + und + vierzig (40) = 43. Seçenek b ise 34\'tür.',
    },
    {
      id: 'a1-m1-d5-s2',
      tur: 'dinle-sec',
      beceri: 'dinleme',
      zorluk: 'orta',
      yonerge: 'Dinle ve doğru sayıyı seç.',
      seslendir: 'einundsechzig',
      secenekler: [
        { id: 'a', metin: '61' },
        { id: 'b', metin: '16' },
        { id: 'c', metin: '16 ve 61 aynıdır' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m1-d5-s3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Yaş cümlesini tamamla.',
      parcalar: ['Ich ', { bosluk: 0 }, ' vierzehn Jahre ', { bosluk: 1 }, '.'],
      cevaplar: [
        { kabul: ['bin'], ipucu: 'sein fiili' },
        { kabul: ['alt'], ipucu: 'yaş kalıbının son kelimesi' },
      ],
    },
  ],

  kartlar: ['de-jahr', 'de-nummer', 'de-buchstabieren', 'de-adresse', 'de-name'],
  not: null,
  sonraki: 'a1-m1-d6',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
