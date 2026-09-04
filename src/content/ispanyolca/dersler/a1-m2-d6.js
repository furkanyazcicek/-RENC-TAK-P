/**
 * DERS — A1 / Modül 2 / Ders 6
 * "Olumsuzluk, çift olumsuzluk ve ailemi anlatan e-posta"
 *
 * Bu ders Türk öğrenciye BİR ARMAĞAN verir: İspanyolcada çift olumsuzluk
 * DOĞRUDUR ve Türkçedeki mantıkla birebir aynıdır. "No veo nada" =
 * "hiçbir şey görmüyorum" — Türkçede de iki olumsuz vardır ("hiç" ve
 * "-me"). İngilizce ve Fransızca öğrenirken bastırılan bu içgüdü burada
 * serbest bırakılır ve öğrenci rahatlar.
 *
 * Modülün kapanışı yazma göreviyle yapılır: ailesini tanıtan bir e-posta.
 * Modülün altı dersinin kazanımı tek metinde birleşir.
 */

export default {
  id: 'a1-m2-d6',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 6,
  baslik: 'Olumsuzluk, çift olumsuzluk ve ailemi anlatan e-posta',
  altBaslik: 'Tek "no" ile olumsuzla, iki olumsuzdan korkma',
  odakBeceri: 'yazma',
  beceriler: ['yazma', 'gramer', 'dusunme'],
  amac: 'Bu dersin sonunda olumsuz cümle kurabilecek, çift olumsuzluğu doğru kullanabilecek ve aileni tanıtan kısa bir e-posta yazabileceksin.',
  kazanim: 'Tek "no" ile olumsuz cümle kurar; nada/nunca/nadie kelimeleriyle çift olumsuzluk kurar; ailesini tanıtan bağlantılı bir metin yazar.',
  onKosullar: ['a1-m2-d5'],
  sure: 18,
  baglam: {
    durum: 'Bir yazışma arkadaşına ailenle ilgili bir e-posta yazıyorsun ve neyin olup neyin olmadığını anlatıyorsun.',
    neden: 'Olumsuzluk her metinde geçer. Çift olumsuzluk ise Türkçe konuşan öğrencinin doğal içgüdüsüne uyduğu için burada avantaj sağlanır — ama kuralı bilinmezse öğrenci kendi doğru cümlesinden şüphe eder.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Olumsuzluk tek kelimeyle kurulur',
      metin:
        'Fransızcada iki parça (ne … pas) gerekir; İngilizcede yardımcı fiil gerekir. İspanyolcada yalnız fiilin önüne "no" konur. Bu, Türkçedeki "-me/-ma" ekinden bile daha basittir.',
      maddeler: [
        'Hablo español. → No hablo español.',
        'Tengo hermanos. → No tengo hermanos.',
        '"no" her zaman fiilin HEMEN ÖNÜNDE durur.',
        'Soruya olumsuz cevap verirken iki "no" olur: — ¿Eres turco? — No, no soy turco.',
        'Birincisi cevap ("hayır"), ikincisi olumsuzluk ekidir.',
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Çift olumsuzluk DOĞRUDUR — tıpkı Türkçedeki gibi',
      metin:
        'Türkçede "hiçbir şey görmüyorum" deriz: hem "hiç" hem "-müyorum" olumsuzdur. İspanyolca da tam olarak böyle çalışır. İngilizcede yasak olan bu yapı burada kuraldır.',
      maddeler: [
        'No veo nada. → Hiçbir şey görmüyorum.',
        'No conozco a nadie. → Kimseyi tanımıyorum.',
        'No voy nunca al cine. → Sinemaya hiç gitmiyorum.',
        'No tengo ningún problema. → Hiçbir sorunum yok.',
        'Türkçe ile İspanyolca burada AYNI mantıkta çalışır; içgüdüne güvenebilirsin.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Olumsuz kelime nereye gelirse ne olur?',
      basliklar: ['Yapı', 'Örnek', 'Not'],
      satirlar: [
        ['no + fiil + olumsuz kelime', 'No como nada.', 'En yaygın biçim'],
        ['olumsuz kelime + fiil', 'Nunca como carne.', '"no" GEREKMEZ'],
        ['no + fiil + nunca', 'No como nunca carne.', 'Aynı anlam, "no" gerekir'],
        ['Nadie + fiil', 'Nadie está en casa.', 'Özne olunca "no" olmaz'],
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'No nunca voy al cine.',
      dogru: 'Nunca voy al cine. / No voy nunca al cine.',
      neden:
        'Olumsuz kelime fiilden ÖNCE gelirse "no" kullanılmaz; fiilden SONRA gelirse "no" gerekir. İkisini birden kullanmak fazlalık olur. Kural basittir: cümlede olumsuzluk fiilin solunda bir kez görünür.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'İngilizceden gelen alışkanlık',
      dogal: 'No tengo nada. (Hiçbir şeyim yok.)',
      yapay: 'No tengo algo. (İngilizcedeki "I don\'t have anything" mantığı.)',
      aciklama:
        'İngilizcede olumsuz cümlede "anything" kullanılır ve iki olumsuz yasaktır. İspanyolcada olumsuz cümlede olumsuz kelime kullanılır: "nada". Türkçe içgüdün burada İngilizceden daha çok işine yarar.',
    },
    {
      tur: 'kalip',
      baslik: 'E-posta kalıpları',
      kaliplar: [
        { es: '¡Hola, …!', kullanim: 'Samimi açılış', ornek: '¡Hola, Marta!' },
        { es: '¿Qué tal?', kullanim: 'Hâl hatır', ornek: '¡Hola! ¿Qué tal?' },
        { es: 'Te escribo para…', kullanim: 'Amaç bildirme', ornek: 'Te escribo para hablarte de mi familia.' },
        { es: 'Y tú, ¿…?', kullanim: 'Soru sorup topu atma', ornek: 'Y tú, ¿tienes hermanos?' },
        { es: 'Un abrazo / Hasta pronto', kullanim: 'Samimi kapanış', ornek: 'Un abrazo, Zeynep.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Örnek e-posta',
      metin:
        '¡Hola, Marta! ¿Qué tal?\n\nTe escribo para hablarte de mi familia. En mi familia somos cuatro: mi padre, mi madre, mi hermana y yo. Mi padre se llama Murat y es ingeniero. Mi madre es profesora de matemáticas. Mi hermana tiene diez años y es muy divertida.\n\nVivimos en una casa pequeña en Esmirna. No tenemos jardín, pero hay una terraza grande. También tenemos un gato; se llama Duman.\n\nY tú, ¿tienes hermanos? ¿Cómo es tu familia?\n\nUn abrazo,\nZeynep',
      sozluk: [
        { es: 'Te escribo para…', tr: 'Sana … için yazıyorum' },
        { es: 'pero', tr: 'ama' },
        { es: 'Un abrazo', tr: 'Sarılıyorum (samimi kapanış)' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Yazmadan önce kâğıda üç sütun çiz: KİM (aile üyeleri), NASIL (sıfatlar), NE VAR/YOK (hay / no hay). Metni bu üç sütundan kur; hem daha hızlı yazarsın hem de modülün bütün kazanımlarını kullanırsın.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d6-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Cümleyi olumsuz yap.',
      parcalar: ['Yo ', { bosluk: 0 }, ' tengo hermanos.'],
      cevaplar: [{ kabul: ['no'], ipucu: 'Olumsuzluk fiilin hemen önüne gelir.' }],
      aciklama: 'İspanyolcada olumsuzluk için tek kelime yeter ve o kelime fiilin hemen önündedir.',
    },
    {
      id: 'a1-m2-d6-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru cümleyi seç.',
      soru: '"Hiçbir şey yemiyorum" nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'No como nada.' },
        { id: 'b', metin: 'Como nada.' },
        { id: 'c', metin: 'No como algo.' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: '"nada" fiilden sonra gelirse "no" zorunludur.',
        c: 'İngilizce mantığı; İspanyolcada olumsuz cümlede olumsuz kelime kullanılır.',
      },
      aciklama: 'Türkçedeki "hiçbir şey yemiyorum" cümlesinde de iki olumsuz vardır. İspanyolca burada Türkçeyle aynı çalışır.',
    },
    {
      id: 'a1-m2-d6-a3',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki fazlalığı bul ve düzelt.',
      cumle: 'No nunca voy al cine.',
      hataliParca: 'No nunca',
      dogruParca: 'Nunca',
      kabul: ['Nunca', 'nunca'],
      aciklama: 'Olumsuz kelime fiilden önce gelirse "no" kullanılmaz. "No voy nunca al cine" de doğrudur ama o zaman sıralama değişir.',
    },
    {
      id: 'a1-m2-d6-a4',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi doğru? Gerekçeleri oku.',
      baglam: '"Evde kimse yok." demek istiyorsun.',
      secenekler: [
        { id: 'a', metin: 'No hay nadie en casa.', dogal: true, neden: 'Doğru. "nadie" fiilden sonra geldiği için "no" gerekir.' },
        { id: 'b', metin: 'Hay nadie en casa.', dogal: false, neden: 'Olumsuz kelime fiilden sonra geldiğinde "no" zorunludur.' },
        { id: 'c', metin: 'No hay alguien en casa.', dogal: false, neden: 'Olumsuz cümlede "alguien" değil "nadie" kullanılır.' },
      ],
      aciklama: 'Alternatif doğru biçim: "Nadie está en casa." Burada olumsuz kelime öznedir ve fiilden önce geldiği için "no" gerekmez.',
    },
    {
      id: 'a1-m2-d6-a5',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Cümleyi adım adım genişlet.',
      adimlar: [
        { yonerge: 'Ailende kaç kişi olduğunuzu söyle.', kabul: ['somos', 'Somos'] },
        { yonerge: 'Evinizde bahçe olmadığını ekle.', kabul: ['No tenemos jardín', 'no hay jardín', 'No hay jardín'] },
        { yonerge: 'Ama bir kediniz olduğunu ekle.', kabul: ['tenemos un gato', 'Tenemos un gato', 'pero tenemos un gato'] },
      ],
      aciklama: 'Olumsuz ile olumluyu "pero" (ama) ile bağlamak, metni tek cümlelik listeden kurtarır.',
    },
    {
      id: 'a1-m2-d6-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Aileni tanıtan bir e-posta yaz. Aşamaları sırayla tamamla.',
      gorev: 'Yazışma arkadaşına ailenden söz eden bir e-posta yaz.',
      ornekMetin: '¡Hola, Marta! ¿Qué tal? Te escribo para hablarte de mi familia. En mi familia somos cuatro. Mi padre es ingeniero y mi madre es profesora. Mi hermana tiene diez años y es muy divertida. Vivimos en una casa pequeña. No tenemos jardín, pero hay una terraza grande. Y tú, ¿tienes hermanos? Un abrazo, Zeynep.',
      kaliplar: ['¡Hola, …!', 'En mi familia somos…', 'Mi … se llama…', 'No tenemos…', 'pero', 'Y tú, ¿…?', 'Un abrazo'],
      asamalar: [
        'Samimi bir açılışla başla ve hâl hatır sor.',
        'Ailende kaç kişi olduğunuzu söyle.',
        'En az iki kişiyi tanıt: adı, mesleği ya da yaşı, bir sıfat.',
        'Evinizi anlat: "hay" ile ne var, "no hay" ile ne yok.',
        'Karşındakine bir soru sor ve samimi bir kapanışla bitir.',
      ],
      olcut: [
        'En az altı cümle var mı?',
        'Aile üyeleri doğru artikel ve iyelikle yazılmış mı?',
        'Sıfatlar cinse ve sayıya uydurulmuş mu?',
        'En az bir olumsuz cümle var mı?',
        'Açılış ve kapanış kalıpları kullanılmış mı?',
      ],
      enAzKelime: 45,
      aranan: [
        { etiket: 'Aile büyüklüğü', desen: 'somos' },
        { etiket: 'İyelik', desen: '\\bmi\\b|\\bmis\\b' },
        { etiket: 'Olumsuz cümle', desen: '\\bno\\b' },
        { etiket: 'Soru', desen: '¿' },
      ],
      aciklama: 'Bu görev modülün altı dersini birleştirir: artikel, çoğul, tener, iyelik, sıfat uyumu ve olumsuzluk.',
    },
  ],

  ozet: [
    'Olumsuzluk tek kelimeyle kurulur: fiilin önüne "no".',
    'Soruya olumsuz cevapta iki "no" bulunması normaldir.',
    'Çift olumsuzluk DOĞRUDUR: No veo nada.',
    'Olumsuz kelime fiilden önce gelirse "no" kullanılmaz: Nunca como carne.',
    'İngilizcedeki "algo/alguien" mantığı İspanyolcada olumsuz cümlede kullanılmaz.',
    'E-posta kalıpları: ¡Hola! · Te escribo para… · Y tú, ¿…? · Un abrazo.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d6-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['— ¿Tienes hermanos? — ', { bosluk: 0 }, ', no tengo.'],
      cevaplar: [{ kabul: ['No', 'no'], ipucu: 'Cevap kelimesi.' }],
    },
    {
      id: 'a1-m2-d6-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru cümleyi seç.',
      soru: '"Kimseyi tanımıyorum" nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'No conozco a nadie.' },
        { id: 'b', metin: 'Conozco a nadie.' },
        { id: 'c', metin: 'No conozco a alguien.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"no" eksik.', c: 'Olumsuz cümlede "nadie" kullanılır.' },
    },
    {
      id: 'a1-m2-d6-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Evinizde bahçe olmadığını söyle.',
      kabul: ['No tenemos jardín', 'No hay jardín', 'no hay jardín', 'No tenemos jardin'],
      ornekCevap: 'No tenemos jardín.',
    },
  ],

  kartlar: ['es-no', 'es-hay', 'es-tambien', 'es-familia', 'es-casa'],
  not: 'not-a1-m2-calisma',
  sonraki: 'a1-m3-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
