/**
 * DERS — A2 / Modül 1 / Ders 1
 * "Pretérito indefinido: düzenli fiiller"
 *
 * A2'nin ilk dersi. İspanyolcada bitmiş bir olayı anlatmanın yolu
 * indefinido'dur ve yapı Türkçeye şaşırtıcı biçimde yakındır: tek fiil,
 * tek ek. Asıl zorluk VURGUDADIR: "hablo" (konuşuyorum) ile "habló"
 * (konuştu) arasındaki fark yalnız vurgu ve işarettir. Ders bu farkı
 * merkeze alır.
 */

export default {
  id: 'a2-m1-d1',
  surum: 1,
  dil: 'es',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 1,
  baslik: 'Pretérito indefinido: düzenli fiiller',
  altBaslik: 'Tek ek, tek fiil — ama vurgu her şeyi değiştirir',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'telaffuz', 'yazma'],
  amac: 'Bu dersin sonunda düzenli fiillerle geçmiş zaman cümleleri kurabilecek ve vurgu işaretlerini doğru koyabileceksin.',
  kazanim: 'Düzenli fiillerin indefinido çekimini üretir; vurgu işaretinin anlamı değiştirdiğini fark eder.',
  onKosullar: ['a1-m6-d5'],
  sure: 20,
  baglam: {
    durum: 'Hafta sonunu soran bir arkadaşına cevap veriyorsun.',
    neden: 'İspanyolcada bitmiş olayları anlatmanın tek yolu indefinido\'dur; anı, hikâye ve haber hep bu zamanla kurulur.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İyi haber: yapı Türkçeye benziyor',
      metin:
        'İspanyolca geçmişi tek fiille kurar, tıpkı Türkçe gibi. Yardımcı fiil yoktur, ' +
        'cümlenin sonuna ek bir parça gelmez. Yapılacak tek şey doğru eki seçmektir.',
      maddeler: [
        '-ar fiilleri: hablar → hablé, hablaste, habló, hablamos, hablasteis, hablaron',
        '-er ve -ir fiilleri aynı ekleri alır: comer → comí, comiste, comió, comimos, comisteis, comieron',
        'Birinci ve üçüncü tekil kişide vurgu işareti vardır: hablé, habló, comí, comió',
        'Bu işaret süs değildir: "hablo" şimdiki zaman, "habló" geçmiş zamandır.',
        'Olumsuz sadece "no" ile kurulur: "No hablé con él."',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'İki grup, aynı mantık',
      basliklar: ['Kişi', 'hablar (-ar)', 'comer / vivir (-er, -ir)'],
      satirlar: [
        ['yo', 'hablé', 'comí / viví'],
        ['tú', 'hablaste', 'comiste / viviste'],
        ['él, ella', 'habló', 'comió / vivió'],
        ['nosotros', 'hablamos', 'comimos / vivimos'],
        ['vosotros', 'hablasteis', 'comisteis / vivisteis'],
        ['ellos, ellas', 'hablaron', 'comieron / vivieron'],
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Vurgu anlamı değiştirir',
      metin:
        'İspanyolcada vurgu işareti yalnız yazım kuralı değildir; kelimenin zamanını belirler. ' +
        'Aynı harfler, farklı vurgu, farklı anlam:',
      maddeler: [
        'hablo → HA-blo = konuşuyorum (şimdiki zaman)',
        'habló → ha-BLÓ = konuştu (geçmiş zaman)',
        'estudio → es-TU-dio = çalışıyorum · estudió → es-tu-DIÓ = çalıştı',
        'Vurgu son hecede olduğunda geçmişi işaret eder.',
        'Yazarken işareti unutmak, konuşurken vurguyu kaydırmak demektir.',
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Bu derste kullanacağın kalıplar',
      kaliplar: [
        { es: 'Ayer + fiil-é / -í', kullanim: 'Olumlu anlatım', ornek: 'Ayer estudié mucho.' },
        { es: 'No + fiil', kullanim: 'Olumsuz', ornek: 'No vi la televisión.' },
        { es: '¿Qué hiciste …?', kullanim: 'Açık uçlu soru', ornek: '¿Qué hiciste el fin de semana?' },
        { es: 'Primero … luego …', kullanim: 'Sıralama', ornek: 'Primero comí y luego salí.' },
        { es: 'La semana pasada …', kullanim: 'Zaman ifadesi', ornek: 'La semana pasada trabajé mucho.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Türk öğrencinin en sık üç hatası',
      yanlis: '1) "Ayer yo hablo con él."  2) "El estudio mucho ayer."  3) "No hablé no con él."',
      dogru: '1) "Ayer hablé con él."  2) "Él estudió mucho ayer."  3) "No hablé con él."',
      neden:
        'Birincide zaman eki hiç kullanılmamış: "ayer" cümleyi geçmişe kilitler, fiil de geçmiş olmalıdır. ' +
        'İkincide vurgu işareti düşmüş ve cümle şimdiki zamana kaymış. ' +
        'Üçüncüde olumsuzluk iki kez konmuş; İspanyolcada tek "no" yeter.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d1-a1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Ayer ____ mucho para el examen.',
      secenekler: [
        { id: 'a', metin: 'estudié' },
        { id: 'b', metin: 'estudio' },
        { id: 'c', metin: 'estudiar' },
      ],
      dogruId: 'a',
      aciklama: '"Ayer" cümleyi geçmişe kilitler; birinci tekil kişi eki "-é"dir.',
    },
    {
      id: 'a2-m1-d1-a2',
      tur: 'coktan-secmeli',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Anlamı doğru veren biçimi seç.',
      soru: '"O dün çok çalıştı." cümlesi hangisidir?',
      secenekler: [
        { id: 'a', metin: 'Él estudió mucho ayer.' },
        { id: 'b', metin: 'Él estudio mucho ayer.' },
        { id: 'c', metin: 'Él estudiar mucho ayer.' },
      ],
      dogruId: 'a',
      aciklama: 'Vurgu işareti zamanı belirler: "estudio" şimdiki, "estudió" geçmiş zamandır.',
    },
    {
      id: 'a2-m1-d1-a3',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Fiilleri indefinido biçiminde yaz.',
      parcalar: [
        'El sábado ', { bosluk: 0 }, ' mi habitación, luego ',
        { bosluk: 1 }, ' con mi abuela y por la tarde ', { bosluk: 2 }, ' al fútbol.',
      ],
      cevaplar: [
        { kabul: ['limpié'], ipucu: 'limpiar' },
        { kabul: ['hablé'], ipucu: 'hablar' },
        { kabul: ['jugué'], ipucu: 'jugar' },
      ],
      aciklama: '"Jugar" yazımda küçük bir değişiklik ister: jugué (g → gu), okunuş korunsun diye.',
    },
    {
      id: 'a2-m1-d1-a4',
      tur: 'eslestirme',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Mastarı geçmiş biçimiyle eşleştir.',
      sol: ['hablar', 'comer', 'vivir', 'trabajar'],
      sag: ['habló', 'comió', 'vivió', 'trabajó'],
      eslesme: { hablar: 'habló', comer: 'comió', vivir: 'vivió', trabajar: 'trabajó' },
      aciklama: 'Üçüncü tekil kişide -ar fiilleri "-ó", -er ve -ir fiilleri "-ió" alır.',
    },
    {
      id: 'a2-m1-d1-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve cümleyi düzelt.',
      cumle: 'Ayer yo hablo con mi profesor.',
      hataliParca: 'hablo',
      dogruParca: 'hablé',
      kabul: [
        'Ayer hablé con mi profesor',
        'Ayer yo hablé con mi profesor',
      ],
      aciklama: '"Ayer" geçmiş zaman ister; şimdiki zaman biçimi cümleyi bozar.',
    },
    {
      id: 'a2-m1-d1-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Arkadaşına hafta sonu ne yaptığını sor.',
      kabul: [
        'Qué hiciste el fin de semana',
        'Qué hiciste este fin de semana',
      ],
      ornekCevap: '¿Qué hiciste el fin de semana?',
    },
    {
      id: 'a2-m1-d1-a7',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'YAZMA GÖREVİ — kısa ve odaklı.',
      gorev: 'Hafta sonunu anlatan beş cümle yaz. Hepsi indefinido olsun, en az bir olumsuz cümle kur. En az 40 kelime.',
      ornekMetin:
        'El fin de semana pasado me quedé en casa. El sábado por la mañana limpié mi habitación ' +
        'y ayudé a mi madre. Por la tarde estudié para el examen de matemáticas. ' +
        'No vi la televisión porque tuve mucho trabajo. ' +
        'El domingo jugué al fútbol con mis amigos y terminamos el día en una cafetería.',
      kaliplar: [
        'El fin de semana pasado …',
        'El sábado por la mañana …',
        'No … porque …',
        'Por la tarde …',
      ],
      asamalar: [
        { ad: 'Görevi anla', aciklama: 'Beş indefinido cümlesi, en az bir olumsuz.' },
        { ad: 'Fikir üret', aciklama: 'Hafta sonunda yaptığın üç işi ve yapmadığın bir şeyi not al.' },
        { ad: 'Taslak yaz', aciklama: 'Zaman ifadeleriyle başla: el sábado, por la tarde, el domingo.' },
        { ad: 'Kontrol et', aciklama: 'Vurgu işaretlerini koydun mu? "estudie" değil "estudié".' },
      ],
      olcut: [
        'Bütün fiiller indefinido biçiminde mi?',
        'Birinci ve üçüncü tekil kişide vurgu işaretini koydum mu?',
        'En az bir olumsuz cümle kurdum mu?',
        'En az 40 kelime yazdım mı?',
      ],
      enAzKelime: 40,
      aranan: [
        { etiket: 'indefinido eki (-é / -ó / -í / -ió)', desen: /\b\w+(é|ó|í|ió|aron|ieron)\b/i },
        { etiket: 'olumsuzluk (no)', desen: /\bno\s+\w+/i },
        { etiket: 'geçmiş zaman ifadesi', desen: /\b(ayer|anoche|el (sábado|domingo)|la semana pasada|el fin de semana pasado)\b/i },
      ],
      tuzaklar: [
        {
          kod: 'vurgu-dusmus',
          desen: /\b(ayer|anoche)\b[^.]*\b(hablo|estudio|trabajo|jugo|termino)\b/i,
          baslik: 'Vurgu işareti düşmüş',
          aciklama: 'İspanyolcada vurgu işareti zamanı belirler: "estudio" şimdiki, "estudió" geçmiştir. İşaret düşünce cümle başka bir zamana kayar.',
          dogru: 'Ayer estudió mucho.',
          mikro: { yonerge: '"Dün çok çalıştım." cümlesini yaz.', kabul: ['Ayer estudié mucho'] },
        },
      ],
    },
  ],

  ozet: [
    'İndefinido tek fiille kurulur; yardımcı fiil yoktur.',
    '-ar fiilleri "-é / -ó", -er ve -ir fiilleri "-í / -ió" alır.',
    'Vurgu işareti anlamı değiştirir: hablo (konuşuyorum) ≠ habló (konuştu).',
    'Olumsuz tek "no" ile kurulur ve fiilin önüne gelir.',
    '"Ayer", "la semana pasada" gibi ifadeler cümleyi geçmişe kilitler.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d1-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Nosotros ____ en un restaurante el domingo.',
      secenekler: [
        { id: 'a', metin: 'comimos' },
        { id: 'b', metin: 'comemos ayer' },
        { id: 'c', metin: 'comió' },
      ],
      dogruId: 'a',
      aciklama: '-er fiillerinde birinci çoğul kişi "-imos" alır.',
    },
    {
      id: 'a2-m1-d1-s2',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Cümleyi tamamla.',
      parcalar: ['Ayer ', { bosluk: 0 }, ' con mi hermano y ', { bosluk: 1 }, ' una película.'],
      cevaplar: [
        { kabul: ['hablé'], ipucu: 'hablar' },
        { kabul: ['vimos', 'vi'], ipucu: 'ver' },
      ],
      aciklama: '"Ver" fiili indefinido\'da vurgu işareti almaz: vi, vio.',
    },
    {
      id: 'a2-m1-d1-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün ders çalıştığını ama televizyon izlemediğini söyle.',
      kabul: [
        'Ayer estudié pero no vi la televisión',
        'Ayer estudié pero no vi la tele',
      ],
      ornekCevap: 'Ayer estudié, pero no vi la televisión.',
    },
  ],

  kartlar: ['es-la-semana-pasada', 'es-luego', 'es-despues'],
  not: null,
  sonraki: 'a2-m1-d2',
  kaynak: { tur: 'ozgun', aciklama: 'Örnek cümleler DRKOÇ için özgün yazılmıştır.' },
}
