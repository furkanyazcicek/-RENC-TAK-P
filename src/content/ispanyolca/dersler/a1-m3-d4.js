/**
 * DERS — A1 / Modül 3 / Ders 4
 * "Dönüşlü fiiller: günlük rutin"
 *
 * "me llamo" Modül 1'de kalıp olarak verilmişti; burada YAPI olarak
 * genişletilir. Dönüşlü fiiller günlük rutinin omurgasıdır ve Türkçede
 * karşılığı EKTİR (yıka-N-mak, giy-İN-mek). Bu benzerlik söylenirse
 * öğrenci kavramı hemen yakalar; söylenmezse "se" gereksiz bir süs gibi
 * görünür ve atlanır.
 *
 * Ek olarak kök değişimi (o → ue, e → ie) burada ilk kez sistemli biçimde
 * verilir; çünkü rutin fiillerinin çoğu kök değiştirir.
 */

export default {
  id: 'a1-m3-d4',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m3',
  sira: 4,
  baslik: 'Dönüşlü fiiller: günlük rutin',
  altBaslik: '"se" bir süs değil; Türkçedeki "-in-" ekinin karşılığı',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda dönüşlü fiilleri doğru ekle çekebilecek, günlük rutinini baştan sona anlatabilecek ve kök değişimini tanıyabileceksin.',
  kazanim: 'Dönüşlü ekleri kişiye göre seçer ve fiilden önce yazar; kök değişimli fiilleri doğru çeker; günlük rutinini sırayla anlatır.',
  onKosullar: ['a1-m3-d3'],
  sure: 15,
  baglam: {
    durum: 'Bir arkadaşına sabah rutinini anlatıyorsun: kaçta kalkıyorsun, ne yapıyorsun, kaçta çıkıyorsun.',
    neden: 'Rutin anlatma A1\'in en tipik konuşma görevidir. Dönüşlü ek atlanırsa cümle anlamını kaybeder: "levanto" tek başına "bir şeyi kaldırıyorum" demektir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: '"se" nedir? Türkçede zaten var',
      metin:
        'Türkçede bazı fiiller kendine döner ve bunu bir EKLE gösterir: yıkamak → yıkanmak, giymek → giyinmek. İspanyolcada aynı iş AYRI BİR KELİMEYLE yapılır ve o kelime kişiye göre değişir.',
      maddeler: [
        'lavar = yıkamak → lavarse = yıkanmak',
        'levantar = kaldırmak → levantarse = kalkmak',
        'llamar = seslenmek → llamarse = adı … olmak',
        'Ek fiilden ÖNCE gelir: me lavo, te lavas, se lava…',
        'Mastar hâlinde ek SONA yapışır: lavarse, levantarse',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'levantarse — çekim',
      basliklar: ['Kişi', 'Ek', 'Çekim'],
      satirlar: [
        ['(yo)', 'me', 'me levanto'],
        ['(tú)', 'te', 'te levantas'],
        ['(él/ella/usted)', 'se', 'se levanta'],
        ['(nosotros/as)', 'nos', 'nos levantamos'],
        ['(vosotros/as)', 'os', 'os levantáis'],
        ['(ellos/ustedes)', 'se', 'se levantan'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Rutin fiillerinin çoğu kök değiştirir',
      metin:
        'Bazı fiillerde vurgu köke düştüğünde kökteki ünlü değişir. Bu, düzensizlik değil, DÜZENLİ bir ses olayıdır ve kuralı vardır: değişim yalnız vurgulu hecelerde olur, "nosotros" ve "vosotros" biçimlerinde OLMAZ.',
      maddeler: [
        'o → ue: dormir → duermo · volver → vuelvo · acostarse → me acuesto',
        'e → ie: empezar → empiezo · despertarse → me despierto · querer → quiero',
        'e → i: vestirse → me visto · pedir → pido',
        'DEĞİŞMEYEN İKİ KİŞİ: nosotros ve vosotros → dormimos, volvéis, nos acostamos',
        'Buna "bot kuralı" denir: çekim tablosunda değişenler bir bot şekli oluşturur.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Levanto a las siete. / Me levanto se a las siete.',
      dogru: 'Me levanto a las siete.',
      neden:
        'İlk cümlede ek yok: "bir şeyi kaldırıyorum" anlamına gelir. İkincisinde ek iki kez var. Kural tektir: ek fiilden önce, bir kez ve kişiye uygun biçimde bulunur.',
    },
    {
      tur: 'kalip',
      baslik: 'Günlük rutin fiilleri',
      kaliplar: [
        { es: 'despertarse', kullanim: 'uyanmak', ornek: 'Me despierto a las seis y media.' },
        { es: 'levantarse', kullanim: 'kalkmak', ornek: 'Me levanto a las siete.' },
        { es: 'ducharse', kullanim: 'duş almak', ornek: 'Me ducho por la mañana.' },
        { es: 'vestirse', kullanim: 'giyinmek', ornek: 'Me visto rápido.' },
        { es: 'acostarse', kullanim: 'yatmak', ornek: 'Me acuesto a las once.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Aynı fiil, ek olunca başka anlam',
      dogal: 'Lavo los platos. (Bulaşıkları yıkıyorum.) · Me lavo las manos. (Ellerimi yıkıyorum.)',
      yapay: 'İkisini de "lavo" ile kurmak.',
      aciklama:
        'Ek olmadan eylem BAŞKASINA yönelir, ek varsa KENDİNE döner. Ayrıca dikkat: vücut bölümlerinde iyelik kullanılmaz, artikel kullanılır — "me lavo LAS manos" (mis manos değil), çünkü "me" zaten kimin elleri olduğunu söyler.',
    },
    {
      tur: 'dinleme',
      baslik: 'Sabah rutini',
      metin: 'Me despierto a las seis y media, pero me levanto a las siete. Me ducho, me visto y desayuno con mi hermana. Salgo de casa a las siete y media. Por la noche me acuesto a las once.',
      satirlar: [
        { kisi: 'Elif', es: 'Me despierto a las seis y media, pero me levanto a las siete.' },
        { kisi: 'Elif', es: 'Me ducho, me visto y desayuno con mi hermana.' },
        { kisi: 'Elif', es: 'Salgo de casa a las siete y media.' },
        { kisi: 'Elif', es: 'Por la noche me acuesto a las once.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Rutin anlatırken cümleleri sıra bağlaçlarıyla bağla: primero (önce), luego / después (sonra), finalmente (sonunda). Bu üç kelime metnini listeden anlatıya çevirir.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m3-d4-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Dönüşlü eki yaz.',
      parcalar: ['Yo ', { bosluk: 0 }, ' levanto a las siete y mi hermano ', { bosluk: 1 }, ' levanta a las ocho.'],
      cevaplar: [
        { kabul: ['me'], ipucu: 'birinci tekil' },
        { kabul: ['se'], ipucu: 'üçüncü tekil' },
      ],
      aciklama: 'Ek özneye uyar ve fiilin hemen önünde durur.',
    },
    {
      id: 'a1-m3-d4-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru çekimi seç.',
      soru: 'Yo ___ a las once.',
      secenekler: [
        { id: 'a', metin: 'me acuesto' },
        { id: 'b', metin: 'me acosto' },
        { id: 'c', metin: 'acuesto' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Kök değişimi yapılmamış: o → ue.',
        c: 'Dönüşlü ek eksik.',
      },
      aciklama: 'İki kural birden: dönüşlü ek + kök değişimi. acostarse → me acuesto.',
    },
    {
      id: 'a1-m3-d4-a3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Kök değişimine dikkat ederek çek.',
      parcalar: ['Yo ', { bosluk: 0 }, ' (dormir) ocho horas, pero nosotros ', { bosluk: 1 }, ' (dormir) poco los lunes.'],
      cevaplar: [
        { kabul: ['duermo'], ipucu: 'vurgulu → o değişir' },
        { kabul: ['dormimos'], ipucu: 'nosotros → değişmez' },
      ],
      aciklama: '"Bot kuralı": nosotros ve vosotros biçimlerinde kök DEĞİŞMEZ.',
    },
    {
      id: 'a1-m3-d4-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Me lavo mis manos antes de comer.',
      hataliParca: 'mis manos',
      dogruParca: 'las manos',
      kabul: ['las manos'],
      aciklama: 'Dönüşlü ek kimin olduğunu zaten söyler; vücut bölümlerinde iyelik yerine artikel kullanılır.',
    },
    {
      id: 'a1-m3-d4-a5',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'zor',
      yonerge: 'Rutini doğru sıraya diz.',
      parcalar: ['Me despierto a las seis.', 'Me levanto a las siete.', 'Me ducho.', 'Desayuno.', 'Salgo de casa.'],
      dogruSira: [0, 1, 2, 3, 4],
      ipucu: 'Uyanmak ile kalkmak aynı şey değildir.',
      aciklama: 'İspanyolcada "despertarse" (uyanmak) ve "levantarse" (kalkmak) ayrı fiillerdir; Türkçede ikisi de "kalkmak" sanılır.',
    },
    {
      id: 'a1-m3-d4-a6',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Üç cümle yaz.',
      durum: 'Sabah rutinini sırayla anlat.',
      kabul: ['Me levanto', 'Me despierto', 'me levanto'],
      ornekCevap: 'Me despierto a las seis y media. Luego me ducho y desayuno. Salgo de casa a las siete y media.',
      yaklasimNotu: '"Luego" ve "después" kelimelerini kullanarak cümleleri bağla.',
      aciklama: 'Dönüşlü ek her cümlede tekrar edilir; bir kez yazıp diğerlerinde atlamak yanlıştır.',
    },
  ],

  ozet: [
    'Dönüşlü ek Türkçedeki "-in-" ekinin karşılığıdır ve fiilden önce gelir.',
    'Ekler: me · te · se · nos · os · se.',
    'Mastar hâlinde ek sona yapışır: levantarse.',
    'Kök değişimi: o → ue, e → ie, e → i.',
    'Kök nosotros ve vosotros biçimlerinde DEĞİŞMEZ ("bot kuralı").',
    'Vücut bölümlerinde iyelik değil artikel kullanılır: me lavo las manos.',
  ],

  miniSinav: [
    {
      id: 'a1-m3-d4-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Eki yaz.',
      parcalar: ['¿A qué hora ', { bosluk: 0 }, ' levantas?'],
      cevaplar: [{ kabul: ['te'], ipucu: 'ikinci tekil' }],
    },
    {
      id: 'a1-m3-d4-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'Nosotros ___ tarde los domingos.',
      secenekler: [
        { id: 'a', metin: 'nos acostamos' },
        { id: 'b', metin: 'nos acuestamos' },
        { id: 'c', metin: 'se acostamos' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'nosotros biçiminde kök değişmez.', c: 'Ek yanlış kişide.' },
    },
    {
      id: 'a1-m3-d4-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Kaçta yattığını söyle.',
      kabul: ['Me acuesto'],
      ornekCevap: 'Me acuesto a las once.',
    },
  ],

  kartlar: ['es-levantarse', 'es-acostarse', 'es-dormir', 'es-salir', 'es-volver'],
  not: null,
  sonraki: 'a1-m3-d5',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
