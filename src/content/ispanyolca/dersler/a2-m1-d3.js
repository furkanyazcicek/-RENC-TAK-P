/**
 * DERS — A2 / Modül 1 / Ders 3
 * "Imperfecto: geçmişte süren durum"
 *
 * Modülün asıl kavramı burada. İspanyolca geçmişi ikiye ayırır:
 * indefinido OLAYI, imperfecto DURUMU ve ALIŞKANLIĞI anlatır. Türkçe bu
 * ayrımı zorunlu kılmadığı için öğrenci her şeyi indefinido ile kurar ve
 * metin cansız kalır. Ders ayrımı tek soruya bağlar: "Bu cümle bir olay
 * mı anlatıyor, yoksa arka planı mı çiziyor?"
 */

export default {
  id: 'a2-m1-d3',
  surum: 1,
  dil: 'es',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 3,
  baslik: 'Imperfecto: geçmişte süren durum',
  altBaslik: 'Olay mı, arka plan mı?',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'okuma', 'yazma'],
  amac: 'Bu dersin sonunda imperfecto çekimini kurabilecek ve olay ile arka planı ayırt edebileceksin.',
  kazanim: 'Imperfecto çekimini üretir; indefinido ile imperfecto arasında bağlama göre seçim yapar.',
  onKosullar: ['a2-m1-d2'],
  sure: 24,
  baglam: {
    durum: 'Çocukluğunda yaz tatillerini nasıl geçirdiğini anlatıyorsun.',
    neden: 'Anı anlatmak yalnız olayları sıralamak değildir; ortamı, havayı ve alışkanlıkları da çizmek gerekir. Bunu imperfecto yapar.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Imperfecto nasıl kurulur?',
      metin:
        'Imperfecto İspanyolcanın en düzenli zamanıdır: yalnız üç istisnası vardır. ' +
        'Ekler doğrudan mastar köküne eklenir ve kökte hiçbir değişiklik olmaz.',
      maddeler: [
        '-ar fiilleri: hablar → hablaba, hablabas, hablaba, hablábamos, hablaban',
        '-er ve -ir fiilleri: comer → comía, comías, comía, comíamos, comían',
        'Üç istisna: ser → era, ir → iba, ver → veía',
        'Birinci ve üçüncü tekil kişi aynıdır: "yo hablaba" ve "él hablaba"',
        'Bu yüzden özne zamiri çoğu zaman söylenir: "yo iba", "él iba".',
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Indefinido mu, imperfecto mu?',
      metin:
        'Seçim tek soruyla yapılır: bu cümle BİR OLAY mı anlatıyor, yoksa ARKA PLANI mı çiziyor? ' +
        'Olay ise indefinido, arka plan ya da alışkanlık ise imperfecto.',
      satirlar: [
        { sol: 'Olay (bir kez oldu, bitti)', sag: 'Ayer vi un accidente. → indefinido' },
        { sol: 'Arka plan (ortam, hava, duygu)', sag: 'Llovía y hacía frío. → imperfecto' },
        { sol: 'Alışkanlık (tekrar ederdi)', sag: 'Cuando era pequeño, iba a la playa cada verano. → imperfecto' },
        { sol: 'İkisi bir arada', sag: 'Veía la tele cuando sonó el teléfono.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Mis veranos de infancia',
      metin:
        'Cuando era pequeño, siempre íbamos a casa de mi abuela, junto al mar. ' +
        'La casa era vieja y había una higuera grande en el jardín. ' +
        'Por la mañana me levantaba temprano y bajaba a la playa con mi primo. ' +
        'El agua estaba fría, pero nadábamos durante horas.\n\n' +
        'Un día, mientras nadábamos, vimos una tortuga marina. ' +
        'Pasó justo a nuestro lado y desapareció bajo el agua. ' +
        'Aquel día volvimos muy tarde y mi abuela estaba preocupada.',
      sozluk: [
        { es: 'la higuera', tr: 'incir ağacı' },
        { es: 'nadar', tr: 'yüzmek' },
        { es: 'la tortuga marina', tr: 'deniz kaplumbağası' },
        { es: 'preocupado', tr: 'endişeli' },
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Ayrımı kuran kalıplar',
      kaliplar: [
        { es: 'Cuando era pequeño, …aba / …ía', kullanim: 'Çocukluk alışkanlığı', ornek: 'Cuando era pequeño, iba a la playa.' },
        { es: 'Hacía … / Había …', kullanim: 'Ortam çizme', ornek: 'Hacía frío y había mucho viento.' },
        { es: 'Mientras …aba, … + indefinido', kullanim: 'Süren + kesen', ornek: 'Mientras leía, sonó el teléfono.' },
        { es: 'Un día, …', kullanim: 'Olaya geçiş', ornek: 'Un día vimos una tortuga.' },
        { es: 'cada verano / todos los días', kullanim: 'Tekrar işareti', ornek: 'Cada verano íbamos al mismo pueblo.' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık iki hata',
      yanlis: '1) "Cuando era pequeño, fui a la playa cada verano."  2) "Ayer llovió mucho y hizo frío toda la tarde."',
      dogru: '1) "Cuando era pequeño, iba a la playa cada verano."  2) "Ayer llovía y hacía frío toda la tarde."',
      neden:
        'Birincide tekrar eden bir alışkanlık indefinido ile kurulmuş; "cada verano" zaten tekrarı işaret eder. ' +
        'İkincide hava durumu bir arka plandır ve süreklidir; imperfecto ister.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d3-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'ANA FİKİR.',
      soru: 'Metinde ne anlatılıyor?',
      secenekler: [
        { id: 'a', metin: 'Çocukluk yazlarının alışkanlıkları ve bir gün yaşanan olay' },
        { id: 'b', metin: 'Bir okul gezisi' },
        { id: 'c', metin: 'Deniz kaplumbağalarının yaşamı' },
      ],
      dogruId: 'a',
      aciklama: 'İlk bölüm imperfecto ile alışkanlığı, ikinci bölüm indefinido ile tek bir olayı anlatıyor.',
    },
    {
      id: 'a2-m1-d3-a2',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru zamanı seç.',
      soru: 'Cuando era pequeño, ____ al fútbol todos los sábados.',
      secenekler: [
        { id: 'a', metin: 'jugaba' },
        { id: 'b', metin: 'jugué' },
        { id: 'c', metin: 'juego' },
      ],
      dogruId: 'a',
      aciklama: '"todos los sábados" tekrarı gösterir; tekrar eden alışkanlık imperfecto ister.',
    },
    {
      id: 'a2-m1-d3-a3',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Imperfecto biçimlerini yaz.',
      parcalar: [
        { bosluk: 0 }, ' frío y ', { bosluk: 1 },
        ' mucho viento. Nosotros ', { bosluk: 2 }, ' en casa.',
      ],
      cevaplar: [
        { kabul: ['Hacía', 'hacía'], ipucu: 'hacer' },
        { kabul: ['había'], ipucu: 'haber' },
        { kabul: ['estábamos'], ipucu: 'estar' },
      ],
      aciklama: 'Üçü de ortam çizen cümlelerdir; ortam daima imperfecto ile verilir.',
    },
    {
      id: 'a2-m1-d3-a4',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Doğru ikiliyi seç.',
      soru: '____ la tele cuando ____ el teléfono.',
      secenekler: [
        { id: 'a', metin: 'Veía … sonó' },
        { id: 'b', metin: 'Vi … sonaba' },
        { id: 'c', metin: 'Veía … sonaba' },
      ],
      dogruId: 'a',
      aciklama: 'Süren eylem imperfecto, kesen olay indefinido ile kurulur.',
    },
    {
      id: 'a2-m1-d3-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Cuando era pequeño, fui a la playa cada verano.',
      hataliParca: 'fui … cada verano',
      dogruParca: 'iba … cada verano',
      kabul: [
        'Cuando era pequeño iba a la playa cada verano',
        'Cuando era pequeño, iba a la playa cada verano',
      ],
      aciklama: '"cada verano" tekrarı gösterir; tekrar eden alışkanlık imperfecto ister.',
    },
    {
      id: 'a2-m1-d3-a6',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Küçükken her yaz büyükannende kaldığını söyle.',
      kabul: [
        'Cuando era pequeño me quedaba en casa de mi abuela cada verano',
        'Cuando era pequeña me quedaba en casa de mi abuela cada verano',
        'Cuando era pequeño, me quedaba en casa de mi abuela cada verano',
      ],
      ornekCevap: 'Cuando era pequeño, me quedaba en casa de mi abuela cada verano.',
    },
  ],

  ozet: [
    'Imperfecto İspanyolcanın en düzenli zamanıdır: -aba / -ía ekleri.',
    'Yalnız üç istisna vardır: ser → era, ir → iba, ver → veía.',
    'Indefinido olayı, imperfecto arka planı ve alışkanlığı anlatır.',
    '"cada verano", "todos los días", "siempre" gibi ifadeler imperfecto ister.',
    'Süren eylem imperfecto, onu kesen olay indefinido ile kurulur.',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d3-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: '____ buen tiempo y estábamos contentos.',
      secenekler: [
        { id: 'a', metin: 'Hacía' },
        { id: 'b', metin: 'Hizo' },
        { id: 'c', metin: 'Hace' },
      ],
      dogruId: 'a',
      aciklama: 'Hava durumu bir arka plandır; imperfecto ile verilir.',
    },
    {
      id: 'a2-m1-d3-s2',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'İki zamanı doğru yerleştir.',
      parcalar: ['Mientras yo ', { bosluk: 0 }, ', mi hermano ', { bosluk: 1 }, ' a casa.'],
      cevaplar: [
        { kabul: ['leía', 'estudiaba', 'dormía'], ipucu: 'süren eylem: imperfecto' },
        { kabul: ['llegó', 'volvió'], ipucu: 'kesen olay: indefinido' },
      ],
      aciklama: 'Süren eylem imperfecto, kesen olay indefinido ile kurulur.',
    },
    {
      id: 'a2-m1-d3-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Yağmur yağdığını ve senin evde kaldığını söyle.',
      kabul: [
        'Llovía y me quedé en casa',
        'Llovía y yo me quedé en casa',
      ],
      ornekCevap: 'Llovía y me quedé en casa.',
    },
  ],

  kartlar: ['es-recuerdo', 'es-horrible', 'es-hace-dos-anos'],
  not: null,
  sonraki: 'a2-m1-d4',
  kaynak: { tur: 'ozgun', aciklama: 'Çocukluk metni DRKOÇ için özgün yazılmıştır.' },
}
