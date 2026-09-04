/**
 * DERS — A1 / Modül 6 / Ders 3
 * "Düzensiz geçmiş: fui, hice, tuve, estuve"
 *
 * A1'de gerçekten gereken düzensiz geçmiş biçimleri azdır ve ders bunu
 * söyleyerek başlar: dört fiil öğrenilirse hikâyelerin çoğu anlatılabilir.
 *
 * Bu grubun EN ÖNEMLİ ÖZELLİĞİ öğrenciyi rahatlatır: düzensiz geçmişlerde
 * AKSAN YOKTUR. Yani "fui", "hice", "tuve" yazarken aksan derdi biter.
 * Bu, bir önceki derste kurulan aksan kaygısını dengeler.
 *
 * Ayrıca "ser" ile "ir" fiillerinin geçmişi AYNIDIR (fui). Bu tuhaf görünür
 * ama bağlam her zaman ayırır ve öğrenilecek bir tablo azalır.
 */

export default {
  id: 'a1-m6-d3',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m6',
  sira: 3,
  baslik: 'Düzensiz geçmiş: fui, hice, tuve, estuve',
  altBaslik: 'Dört fiil, sıfır aksan',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'okuma', 'dinleme'],
  amac: 'Bu dersin sonunda en sık kullanılan düzensiz geçmiş biçimlerini kullanabilecek ve geçmişte nereye gittiğini, ne yaptığını anlatabileceksin.',
  kazanim: 'ir/ser, hacer, tener ve estar fiillerinin indefinido biçimlerini kurar; düzensiz geçmişte aksan kullanılmadığını uygular.',
  onKosullar: ['a1-m6-d2'],
  sure: 15,
  baglam: {
    durum: 'Tatilini anlatıyorsun: nereye gittin, ne yaptın, orada ne kadar kaldın.',
    neden: 'Bu dört fiil geçmiş zamanlı anlatıların iskeletidir. "gitmek", "yapmak", "olmak", "sahip olmak" olmadan hiçbir hikâye kurulamaz.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'İyi haber: aksan yok',
      metin:
        'Bir önceki derste birinci ve üçüncü tekil biçimlere aksan koyuyordun. Düzensiz geçmişlerde bu yük yoktur: hiçbirinde aksan bulunmaz.',
      maddeler: [
        'Düzenli: hablé, habló (aksanlı)',
        'Düzensiz: fui, fue, hice, hizo, tuve, tuvo (aksansız)',
        'Sebebi: bu biçimlerde vurgu son heceye düşmez.',
        'Yani düzensiz fiiller çekim olarak zor, yazım olarak kolaydır.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Dört temel düzensiz fiil',
      basliklar: ['Kişi', 'ir / ser', 'hacer', 'tener', 'estar'],
      satirlar: [
        ['(yo)', 'fui', 'hice', 'tuve', 'estuve'],
        ['(tú)', 'fuiste', 'hiciste', 'tuviste', 'estuviste'],
        ['(él/ella/usted)', 'fue', 'hizo', 'tuvo', 'estuvo'],
        ['(nosotros/as)', 'fuimos', 'hicimos', 'tuvimos', 'estuvimos'],
        ['(vosotros/as)', 'fuisteis', 'hicisteis', 'tuvisteis', 'estuvisteis'],
        ['(ellos/ustedes)', 'fueron', 'hicieron', 'tuvieron', 'estuvieron'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: '"ser" ve "ir" aynı geçmişe sahiptir',
      metin:
        'Bu ilk bakışta karışık görünür ama pratikte hiç sorun çıkarmaz: iki fiilin anlamları o kadar farklıdır ki bağlam her zaman ayırır.',
      maddeler: [
        'Fui a Madrid. → Madrid\'e gittim. (ir)',
        'Fui estudiante allí. → Orada öğrenciydim. (ser)',
        'Arkasında "a + yer" varsa "gitmek"tir.',
        'Arkasında bir isim ya da sıfat varsa "olmak"tır.',
        'Öğrenilecek bir tablo azalmış oldu.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Ayer hací los deberes. / Él hació la cena.',
      dogru: 'Ayer hice los deberes. / Él hizo la cena.',
      neden:
        'Öğrenci düzenli kuralı düzensiz fiile uygular. "hacer" fiilinin kökü geçmişte tamamen değişir: hic-. Üçüncü tekilde ayrıca c harfi z olur (hizo) çünkü "o" önünde c sesi sertleşirdi.',
    },
    {
      tur: 'karsilastirma',
      baslik: '"estuve" ile "fui" arasındaki fark',
      dogal: 'Estuve en Madrid tres días. (Madrid\'de üç gün kaldım.) · Fui a Madrid en tren. (Madrid\'e trenle gittim.)',
      yapay: 'İkisini aynı sanmak.',
      aciklama:
        '"ir" hareketi, "estar" bulunmayı anlatır. Türkçede "Madrid\'e gittim" ve "Madrid\'deydim" ayrımıyla aynıdır. Süre söylüyorsan "estar", yolculuk anlatıyorsan "ir" kullanılır.',
    },
    {
      tur: 'kalip',
      baslik: 'Geçmiş anlatma kalıpları',
      kaliplar: [
        { es: '¿Qué hiciste…?', kullanim: 'Ne yaptın?', ornek: '¿Qué hiciste el fin de semana?' },
        { es: 'Fui a…', kullanim: 'Nereye gittin', ornek: 'Fui a la playa con mi familia.' },
        { es: 'Estuve en… … días', kullanim: 'Ne kadar kaldın', ornek: 'Estuve en Madrid cinco días.' },
        { es: 'Lo pasé muy bien.', kullanim: 'İyi vakit geçirdim', ornek: 'Lo pasé muy bien en la fiesta.' },
        { es: 'Fue muy divertido.', kullanim: 'Yorum', ornek: 'Fue un viaje muy divertido.' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Tatil',
      metin: '¿Qué hiciste el verano pasado? Fui a Antalya con mi familia. Estuvimos allí dos semanas. Hicimos muchas cosas: nadamos, comimos pescado y visitamos la ciudad antigua. Lo pasamos muy bien.',
      satirlar: [
        { kisi: 'Marta', es: '¿Qué hiciste el verano pasado?' },
        { kisi: 'Kerem', es: 'Fui a Antalya con mi familia. Estuvimos allí dos semanas.' },
        { kisi: 'Kerem', es: 'Hicimos muchas cosas: nadamos, comimos pescado y visitamos la ciudad antigua.' },
        { kisi: 'Kerem', es: 'Lo pasamos muy bien.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Bu dört fiili tablo olarak değil, CÜMLE olarak ezberle: "Fui a…", "Hice…", "Tuve…", "Estuve en…". Cümle kalıbı hem çekimi hem kullanımı birlikte öğretir.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m6-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili geçmiş zamanda çek.',
      parcalar: ['El sábado ', { bosluk: 0 }, ' (yo/ir) al cine y ', { bosluk: 1 }, ' (yo/hacer) los deberes por la noche.'],
      cevaplar: [
        { kabul: ['fui'], ipucu: 'ir, birinci tekil' },
        { kabul: ['hice'], ipucu: 'hacer, birinci tekil' },
      ],
      aciklama: 'İkisinde de aksan yoktur; düzensiz geçmişlerin ortak özelliği budur.',
    },
    {
      id: 'a1-m6-d3-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Mi hermano hació la cena ayer.',
      hataliParca: 'hació',
      dogruParca: 'hizo',
      kabul: ['hizo'],
      aciklama: '"hacer" geçmişte kökünü değiştirir (hic-) ve üçüncü tekilde c harfi z olur: hizo.',
    },
    {
      id: 'a1-m6-d3-a3',
      tur: 'coktan-secmeli',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'Doğru fiili seç.',
      soru: '___ en Madrid una semana.',
      secenekler: [
        { id: 'a', metin: 'Estuve' },
        { id: 'b', metin: 'Fui' },
        { id: 'c', metin: 'Tuve' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"fui" hareketi anlatır ve "a" edatı ister.',
        c: '"tener" sahiplik bildirir.',
      },
      aciklama: 'Süre bildiriyorsan "estar": Estuve en Madrid una semana. Yolculuk anlatıyorsan "ir": Fui a Madrid.',
    },
    {
      id: 'a1-m6-d3-a4',
      tur: 'eslestirme',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Mastarı geçmiş biçimiyle eşleştir.',
      sol: [
        { id: 's1', metin: 'ir (yo)' },
        { id: 's2', metin: 'hacer (él)' },
        { id: 's3', metin: 'tener (yo)' },
        { id: 's4', metin: 'estar (nosotros)' },
      ],
      sag: [
        { id: 'g1', metin: 'fui' },
        { id: 'g2', metin: 'hizo' },
        { id: 'g3', metin: 'tuve' },
        { id: 'g4', metin: 'estuvimos' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Dört fiil, dört farklı kök: fu-, hic-, tuv-, estuv-. Ekler aynıdır: -e, -iste, -o, -imos, -isteis, -ieron.',
    },
    {
      id: 'a1-m6-d3-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangi anlama gelir? Doğru yorumu seç.',
      baglam: '"Fui estudiante en Madrid." cümlesini okudun.',
      secenekler: [
        { id: 'a', metin: 'Madrid\'de öğrenciydim.', dogal: true, neden: 'Doğru. Arkasında bir isim var, yani bu "ser" fiilidir.' },
        { id: 'b', metin: 'Madrid\'e öğrenci olarak gittim.', dogal: false, neden: '"gitmek" anlamı için "a" edatı gerekirdi: fui A Madrid.' },
        { id: 'c', metin: 'Madrid\'de öğrencim vardı.', dogal: false, neden: 'Bu "tuve" ile kurulurdu.' },
      ],
      aciklama: 'Ayırt etme kuralı: arkasında "a + yer" varsa "ir", isim veya sıfat varsa "ser".',
    },
    {
      id: 'a1-m6-d3-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Geçen yaz nereye gittiğini ve orada ne kadar kaldığını anlat.',
      kabul: ['Fui a', 'Estuve en', 'fui a'],
      ornekCevap: 'El verano pasado fui a Antalya. Estuve allí dos semanas.',
      aciklama: 'İki fiil bilinçli olarak birlikte kullanıldı: "ir" yolculuk, "estar" süre için.',
    },
  ],

  ozet: [
    'Düzensiz geçmiş biçimlerinde AKSAN YOKTUR.',
    'ir ve ser aynı geçmişe sahiptir: fui, fuiste, fue…',
    'Ayırt etme: "a + yer" varsa ir, isim/sıfat varsa ser.',
    'hacer geçmişte "hic-" kökünü alır; üçüncü tekilde "hizo" olur.',
    'tener → tuve · estar → estuve.',
    'Süre bildirirken "estar", yolculuk anlatırken "ir" kullanılır.',
  ],

  miniSinav: [
    {
      id: 'a1-m6-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['Ayer ', { bosluk: 0 }, ' (yo/ir) al mercado.'],
      cevaplar: [{ kabul: ['fui'], ipucu: 'ir, birinci tekil' }],
    },
    {
      id: 'a1-m6-d3-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: '¿Qué ___ el fin de semana?',
      secenekler: [
        { id: 'a', metin: 'hiciste' },
        { id: 'b', metin: 'haciste' },
        { id: 'c', metin: 'hacíste' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Kök "hic-" olur.', c: 'Düzensiz geçmişte aksan yoktur.' },
    },
    {
      id: 'a1-m6-d3-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Geçen hafta sonu iyi vakit geçirdiğini söyle.',
      kabul: ['Lo pasé', 'lo pasé', 'Lo pasamos'],
      ornekCevap: 'El fin de semana lo pasé muy bien.',
    },
  ],

  kartlar: ['es-ir', 'es-hacer', 'es-tener', 'es-estar', 'es-pasarlo-bien'],
  not: null,
  sonraki: 'a1-m6-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
