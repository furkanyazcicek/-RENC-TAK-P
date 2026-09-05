/**
 * DERS — A2 / Modül 1 / Ders 2
 * "Düzensiz indefinido: fui, hice, tuve, estuve"
 *
 * İspanyolcanın en sık kullanılan fiilleri düzensizdir ve bu fiillerin
 * ortak bir özelliği vardır: hiçbirinde VURGU İŞARETİ YOKTUR. Öğrenci
 * bir önceki derste "işaret koy" diye öğrendiği için buraya da koyar.
 * Ders bu iki kuralı yan yana getirir ve ayrımı görünür kılar.
 */

export default {
  id: 'a2-m1-d2',
  surum: 1,
  dil: 'es',
  seviye: 'A2',
  modul: 'a2-m1',
  sira: 2,
  baslik: 'Düzensiz indefinido: en sık kullanılan fiiller',
  altBaslik: 'fui, hice, tuve, estuve — ve vurgu işareti yok',
  odakBeceri: 'dizim',
  beceriler: ['dizim', 'okuma', 'dusunme'],
  amac: 'Bu dersin sonunda en sık kullanılan düzensiz fiillerin geçmiş biçimlerini tanıyacak ve doğru kullanabileceksin.',
  kazanim: 'ser/ir, hacer, tener, estar, poder fiillerinin indefinido çekimini üretir; bu fiillerde vurgu işareti kullanmaz.',
  onKosullar: ['a2-m1-d1'],
  sure: 22,
  baglam: {
    durum: 'Dün nereye gittiğini, ne yaptığını ve nasıl bir gün geçirdiğini anlatıyorsun.',
    neden: 'Günlük anlatının fiilleri en çok kullanılan fiillerdir: gitmek, yapmak, olmak. Bunların hepsi düzensizdir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İki kural yan yana',
      metin:
        'Bir önceki derste düzenli fiillerde vurgu işareti gerektiğini öğrendin: hablé, habló. ' +
        'Düzensiz fiillerde ise işaret YOKTUR: fui, hice, tuve. Bu bir istisna değil, düzenli bir kuraldır: ' +
        'düzensiz fiillerin vurgusu zaten sondan bir önceki hecededir.',
      maddeler: [
        'Düzenli: hablé, habló, comí, comió → işaret var',
        'Düzensiz: fui, fue, hice, hizo, tuve, tuvo → işaret yok',
        '"ser" ve "ir" fiillerinin indefinido biçimi AYNIDIR: fui, fuiste, fue',
        'Hangisi olduğunu bağlam söyler: "Fui a Madrid" (gittim) · "Fue difícil" (zordu)',
        'Yazımda küçük değişiklikler olur: hacer → hice, hizo (c → z, sesi korumak için)',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Beş fiil, beş kök',
      basliklar: ['Mastar', 'Kök', 'Örnek çekim'],
      satirlar: [
        ['ser / ir', 'fu-', 'fui, fuiste, fue, fuimos, fueron'],
        ['hacer', 'hic- / hiz-', 'hice, hiciste, hizo, hicimos, hicieron'],
        ['tener', 'tuv-', 'tuve, tuviste, tuvo, tuvimos, tuvieron'],
        ['estar', 'estuv-', 'estuve, estuviste, estuvo, estuvimos, estuvieron'],
        ['poder', 'pud-', 'pude, pudiste, pudo, pudimos, pudieron'],
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Un martes normal',
      metin:
        'El martes me levanté a las seis y media. Desayuné muy rápido y fui a la parada del autobús. ' +
        'Por desgracia, el autobús llegó demasiado pronto y no pude subir. ' +
        'Estuve veinte minutos en el frío. En el instituto hice dos exámenes ' +
        'y después fui a la biblioteca con Ali. Por la noche volví muy cansado a casa ' +
        'y tuve que acostarme temprano.',
      sozluk: [
        { es: 'la parada', tr: 'durak' },
        { es: 'por desgracia', tr: 'maalesef' },
        { es: 'subir', tr: 'binmek' },
        { es: 'acostarse', tr: 'yatmak' },
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık iki hata',
      yanlis: '1) "Ayer fuí al cine."  2) "Yo hací mis deberes."',
      dogru: '1) "Ayer fui al cine."  2) "Yo hice mis deberes."',
      neden:
        'Birincisinde öğrenci bir önceki dersin kuralını buraya taşımış: düzensiz fiillerde vurgu işareti yoktur. ' +
        'İkincisinde ise düzenli ek düzensiz köke eklenmiş. Düzensiz fiillerde hem kök hem ek farklıdır: "hice", "hacé" değil.',
    },
  ],

  alistirmalar: [
    {
      id: 'a2-m1-d2-a1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'kolay',
      yonerge: 'Doğru biçimi seç.',
      soru: 'El verano pasado ____ a Antalya con mi familia.',
      secenekler: [
        { id: 'a', metin: 'fui' },
        { id: 'b', metin: 'fuí' },
        { id: 'c', metin: 'iré' },
      ],
      dogruId: 'a',
      aciklama: 'Düzensiz fiillerde vurgu işareti kullanılmaz: fui, fue, hice.',
    },
    {
      id: 'a2-m1-d2-a2',
      tur: 'eslestirme',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Mastarı geçmiş biçimiyle eşleştir.',
      sol: ['hacer', 'tener', 'estar', 'poder'],
      sag: ['hice', 'tuve', 'estuve', 'pude'],
      eslesme: { hacer: 'hice', tener: 'tuve', estar: 'estuve', poder: 'pude' },
      aciklama: 'Dördünde de kök tamamen değişiyor; ekler ise ortaktır.',
    },
    {
      id: 'a2-m1-d2-a3',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Fiilleri geçmiş biçimde yaz.',
      parcalar: [
        'Ayer ', { bosluk: 0 }, ' mucho trabajo, por eso no ',
        { bosluk: 1 }, ' salir. Al final ', { bosluk: 2 }, ' en casa toda la tarde.',
      ],
      cevaplar: [
        { kabul: ['tuve'], ipucu: 'tener' },
        { kabul: ['pude'], ipucu: 'poder' },
        { kabul: ['estuve'], ipucu: 'estar' },
      ],
      aciklama: 'Üçü de düzensiz köklerle kurulur: tuv-, pud-, estuv-.',
    },
    {
      id: 'a2-m1-d2-a4',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Bağlama göre anlamı seç.',
      soru: '"Fue muy difícil." cümlesinde "fue" hangi fiildir?',
      secenekler: [
        { id: 'a', metin: 'ser — çok zordu' },
        { id: 'b', metin: 'ir — çok zora gitti' },
        { id: 'c', metin: 'hacer — çok zor yaptı' },
      ],
      dogruId: 'a',
      aciklama: '"ser" ve "ir" aynı biçimi paylaşır; ardından sıfat geliyorsa "ser"dir.',
    },
    {
      id: 'a2-m1-d2-a5',
      tur: 'hata-bul',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Hatayı bul ve düzelt.',
      cumle: 'Ayer yo hací mis deberes en la biblioteca.',
      hataliParca: 'hací',
      dogruParca: 'hice',
      kabul: [
        'Ayer hice mis deberes en la biblioteca',
        'Ayer yo hice mis deberes en la biblioteca',
      ],
      aciklama: '"hacer" düzensizdir: kök "hic-" olur ve ek işaret almaz.',
    },
    {
      id: 'a2-m1-d2-a6',
      tur: 'siralama',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Metne göre olayları sıraya diz.',
      parcalar: [
        'Otobüse binemedi.',
        'Altı buçukta kalktı.',
        'Gece çok yorgun eve döndü.',
        'Okulda iki sınava girdi.',
      ],
      dogruSira: [1, 0, 3, 2],
      aciklama: 'Sırayı zaman ifadeleri veriyor: a las seis y media → por desgracia → en el instituto → por la noche.',
    },
    {
      id: 'a2-m1-d2-a7',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün sinemaya gittiğini ve filmin çok iyi olduğunu söyle.',
      kabul: [
        'Ayer fui al cine y la película fue muy buena',
        'Ayer fui al cine y la película estuvo muy bien',
      ],
      ornekCevap: 'Ayer fui al cine y la película fue muy buena.',
    },
  ],

  ozet: [
    'En sık kullanılan fiiller düzensizdir: ser/ir, hacer, tener, estar, poder.',
    'Düzensiz fiillerde vurgu işareti KULLANILMAZ: fui, hice, tuve.',
    '"ser" ve "ir" aynı biçimi paylaşır; anlamı bağlam belirler.',
    'Düzensizlik kökte olur, ekler ortaktır: -e, -iste, -o, -imos, -ieron.',
    'Yazım küçük değişiklikler gösterebilir: hacer → hizo (c → z).',
  ],

  miniSinav: [
    {
      id: 'a2-m1-d2-s1',
      tur: 'coktan-secmeli',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Doğru biçimi seç.',
      soru: 'Mi hermana ____ que estudiar todo el fin de semana.',
      secenekler: [
        { id: 'a', metin: 'tuvo' },
        { id: 'b', metin: 'tení' },
        { id: 'c', metin: 'tenió' },
      ],
      dogruId: 'a',
      aciklama: '"tener que" zorunluluk bildirir ve indefinido kökü "tuv-"dur.',
    },
    {
      id: 'a2-m1-d2-s2',
      tur: 'bosluk',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Cümleyi tamamla.',
      parcalar: ['El sábado ', { bosluk: 0 }, ' a casa de mi abuela y ', { bosluk: 1 }, ' un pastel.'],
      cevaplar: [
        { kabul: ['fui'], ipucu: 'ir' },
        { kabul: ['hice', 'comí'], ipucu: 'hacer / comer' },
      ],
      aciklama: 'Her ikisi de sık kullanılan fiillerdir; birincisi düzensiz, ikincisi seçime göre değişir.',
    },
    {
      id: 'a2-m1-d2-s3',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE.',
      durum: 'Dün çok işin olduğunu ve bu yüzden dışarı çıkamadığını söyle.',
      kabul: [
        'Ayer tuve mucho trabajo y por eso no pude salir',
        'Ayer tuve mucho trabajo por eso no pude salir',
      ],
      ornekCevap: 'Ayer tuve mucho trabajo y por eso no pude salir.',
    },
  ],

  kartlar: ['es-suceder', 'es-viaje', 'es-de-repente'],
  not: null,
  sonraki: 'a2-m1-d3',
  kaynak: { tur: 'ozgun', aciklama: 'Okuma metni DRKOÇ için özgün yazılmıştır.' },
}
