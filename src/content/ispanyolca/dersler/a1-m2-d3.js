/**
 * DERS — A1 / Modül 2 / Ders 3
 * "Ailem: tener ile tanıtma"
 *
 * "tener" Modül 1'de yaş için verilmişti; burada asıl işiyle, SAHİPLİK ile
 * geri gelir. Aile tanıtma A1'in en çok sorulan konusudur.
 *
 * Türk öğrencinin buradaki özel zorluğu akrabalık adlarının Türkçede daha
 * ayrıntılı olmasıdır: "amca / dayı" ayrımı İspanyolcada yoktur (ikisi de
 * "tío"), "abla / kız kardeş" ayrımı da yoktur (ikisi de "hermana").
 * Ders bu daralmayı açıkça söyler; yoksa öğrenci karşılığı olmayan bir
 * kelime arar durur.
 */

export default {
  id: 'a1-m2-d3',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m2',
  sira: 3,
  baslik: 'Ailem: tener ile tanıtma',
  altBaslik: 'Aileni tanıt ve Türkçedeki akrabalık ayrımlarının kaybolduğunu gör',
  odakBeceri: 'kelime',
  beceriler: ['kelime', 'gramer', 'okuma'],
  amac: 'Bu dersin sonunda aileni tanıtabilecek, kaç kardeşin olduğunu söyleyebilecek ve akrabalık adlarını doğru cinste kullanabileceksin.',
  kazanim: 'Aile üyelerini adlandırır; tener fiiliyle sahiplik kurar; eril çoğulun karışık grubu kapsadığını uygular.',
  onKosullar: ['a1-m2-d2'],
  sure: 14,
  baglam: {
    durum: 'İspanyol bir arkadaşın sana ailesinin fotoğrafını gösteriyor ve seninkini soruyor.',
    neden: 'Aile, A1 konuşma ve yazma sınavlarının değişmez konusudur. Ayrıca cinsiyet, çoğul ve iyelik konularının hepsini bir arada çalıştırır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Türkçedeki bazı ayrımlar İspanyolcada yok',
      metin:
        'Türkçe akrabalıkta çok ayrıntılıdır. İspanyolca değildir. Bunu bilmezsen olmayan bir kelimeyi ararsın.',
      maddeler: [
        'amca / dayı → ikisi de "el tío"',
        'hala / teyze → ikisi de "la tía"',
        'abla / kız kardeş → ikisi de "la hermana"',
        'ağabey / erkek kardeş → ikisi de "el hermano"',
        'Yaş farkı gerekirse ayrıca söylenir: mi hermana mayor (büyük), mi hermano menor (küçük)',
        'anneanne / babaanne → ikisi de "la abuela"',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Aile üyeleri — eril ve dişil',
      basliklar: ['Eril', 'Dişil', 'Çoğul (karışık)'],
      satirlar: [
        ['el padre', 'la madre', 'los padres (anne baba)'],
        ['el hermano', 'la hermana', 'los hermanos (kardeşler)'],
        ['el hijo', 'la hija', 'los hijos (çocuklar)'],
        ['el abuelo', 'la abuela', 'los abuelos (dede ve nine)'],
        ['el tío', 'la tía', 'los tíos (amca/dayı ve eşi)'],
        ['el primo', 'la prima', 'los primos (kuzenler)'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Eril çoğul karışık grubu kapsar',
      metin:
        'Bir grupta tek bir erkek bile varsa çoğul ERİL olur. Bu kural şaşırtıcı gelebilir ama istisnasızdır ve çok işe yarar: iki kelimeyle koca bir grubu anlatırsın.',
      maddeler: [
        'los padres = anne + baba (ya da birden çok baba)',
        'los hermanos = erkek ve kız kardeşler birlikte',
        'los abuelos = dede + nine',
        'Yalnız kızlardan oluşan grup dişil kalır: las hermanas = kız kardeşler',
        'Bağlamdan hangisi olduğu anlaşılır; gerekirse açıklanır.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Tengo dos hermanos: un hermano y un hermana.',
      dogru: 'Tengo dos hermanos: un hermano y una hermana.',
      neden:
        'Belirsiz artikel cinsiyete uyar. "hermana" dişildir ve "una" alır. Türkçede "bir" tek biçimli olduğu için öğrenci artikeli sabit sanır.',
    },
    {
      tur: 'kalip',
      baslik: 'Aile tanıtma kalıpları',
      kaliplar: [
        { es: 'En mi familia somos…', kullanim: 'Aile büyüklüğü', ornek: 'En mi familia somos cinco.' },
        { es: 'Tengo … hermanos', kullanim: 'Kardeş sayısı', ornek: 'Tengo dos hermanos.' },
        { es: 'No tengo hermanos.', kullanim: 'Tek çocuksan', ornek: 'Soy hijo único, no tengo hermanos.' },
        { es: 'Mi … se llama…', kullanim: 'Bir üyeyi tanıtma', ornek: 'Mi hermana se llama Ela.' },
        { es: 'Mi … es…', kullanim: 'Meslek ya da nitelik', ornek: 'Mi padre es ingeniero.' },
      ],
    },
    {
      tur: 'ornek',
      satirlar: [
        { es: 'En mi familia somos cuatro.', tr: 'Ailemde dört kişiyiz.', not: '"somos" ile sayı verilir.' },
        { es: 'Tengo un hermano y una hermana.', tr: 'Bir erkek, bir kız kardeşim var.', not: 'İki farklı artikel.' },
        { es: 'Mis padres son profesores.', tr: 'Annem babam öğretmen.', not: 'los padres = anne baba.' },
        { es: 'Mi abuela tiene setenta años.', tr: 'Babaannem yetmiş yaşında.', not: 'Yaş yine "tener" ile.' },
        { es: 'Soy hija única.', tr: 'Tek çocuğum (kız).', not: 'Cinse göre: único / única.' },
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Bir aile tanıtımı',
      metin:
        'Hola, me llamo Pablo. En mi familia somos cinco: mi padre, mi madre, mis dos hermanas y yo. Mi padre se llama Antonio y es médico. Mi madre se llama Carmen y es profesora de historia. Mis hermanas se llaman Lucía y Sara. Lucía tiene veinte años y Sara tiene doce. También tenemos un perro; se llama Toby.',
      sozluk: [
        { es: 'somos cinco', tr: 'beş kişiyiz' },
        { es: 'también', tr: 'ayrıca, de' },
        { es: 'profesora de historia', tr: 'tarih öğretmeni' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Kendi aileni bir kâğıda çiz ve her kişinin altına İspanyolca adını ARTİKELİYLE yaz. Böylece hem kelimeleri hem cinsiyetleri tek seferde öğrenirsin.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m2-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Belirsiz artikeli doğru yaz.',
      parcalar: ['Tengo ', { bosluk: 0 }, ' hermano y ', { bosluk: 1 }, ' hermana.'],
      cevaplar: [
        { kabul: ['un'], ipucu: 'eril' },
        { kabul: ['una'], ipucu: 'dişil' },
      ],
      aciklama: 'Aynı cümlede iki farklı artikel; cinsiyet farkını en net gösteren örnek budur.',
    },
    {
      id: 'a1-m2-d3-a2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'kolay',
      yonerge: 'Doğru karşılığı seç.',
      soru: '"Dayım" İspanyolcada nasıl söylenir?',
      secenekler: [
        { id: 'a', metin: 'mi tío' },
        { id: 'b', metin: 'mi primo' },
        { id: 'c', metin: 'mi hermano' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"primo" kuzen demektir.', c: '"hermano" kardeş demektir.' },
      aciklama: 'İspanyolcada amca ve dayı ayrımı yoktur; ikisi de "tío"dur.',
    },
    {
      id: 'a1-m2-d3-a3',
      tur: 'eslestirme',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'İspanyolca çoğulu Türkçe karşılığıyla eşleştir.',
      sol: [
        { id: 's1', metin: 'los padres' },
        { id: 's2', metin: 'los abuelos' },
        { id: 's3', metin: 'los hijos' },
        { id: 's4', metin: 'las hermanas' },
      ],
      sag: [
        { id: 'g1', metin: 'anne ve baba' },
        { id: 'g2', metin: 'dede ve nine' },
        { id: 'g3', metin: 'çocuklar' },
        { id: 'g4', metin: 'kız kardeşler' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Eril çoğul karışık grubu kapsar; yalnız kızlardan oluşan grup dişil kalır.',
    },
    {
      id: 'a1-m2-d3-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Mi hermana es doce años.',
      hataliParca: 'es',
      dogruParca: 'tiene',
      kabul: ['tiene'],
      aciklama: 'Yaş "tener" ile kurulur — Modül 1\'deki kural burada da geçerli.',
    },
    {
      id: 'a1-m2-d3-a5',
      tur: 'genisletme',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Cümleyi adım adım genişlet.',
      adimlar: [
        { yonerge: 'Kardeşin olduğunu söyle.', kabul: ['Tengo un hermano', 'Tengo una hermana', 'Tengo dos hermanos'] },
        { yonerge: 'Adını ekle.', kabul: ['se llama'] },
        { yonerge: 'Yaşını ekle.', kabul: ['tiene', 'años'] },
      ],
      aciklama: 'Üç adım birleşince tam bir tanıtım çıkar: "Tengo una hermana. Se llama Ela. Tiene diez años."',
    },
    {
      id: 'a1-m2-d3-a6',
      tur: 'soru-cevap',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Soruyu cevapla.',
      soru: '¿Cuántas personas sois en tu familia?',
      kabul: ['Somos', 'somos'],
      ornekCevap: 'En mi familia somos cuatro.',
      aciklama: 'Aile büyüklüğü "ser" ile söylenir: "Somos cuatro" — "Tenemos cuatro" değil.',
    },
  ],

  ozet: [
    'İspanyolcada amca/dayı, hala/teyze, abla/kız kardeş ayrımı yoktur.',
    'Eril çoğul karışık grubu kapsar: los padres, los hermanos, los abuelos.',
    'Kardeş sayısı "tener" ile, aile büyüklüğü "ser" ile söylenir.',
    'Belirsiz artikel cinsiyete uyar: un hermano / una hermana.',
    'Yaş her zaman "tener" ile kurulur.',
  ],

  miniSinav: [
    {
      id: 'a1-m2-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['En mi familia ', { bosluk: 0 }, ' cinco.'],
      cevaplar: [{ kabul: ['somos'], ipucu: 'ser, birinci çoğul' }],
    },
    {
      id: 'a1-m2-d3-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: '"los abuelos" ne demektir?',
      secenekler: [
        { id: 'a', metin: 'dede ve nine' },
        { id: 'b', metin: 'yalnız dedeler' },
        { id: 'c', metin: 'anne ve baba' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Eril çoğul karışık grubu kapsar.', c: 'O "los padres"tir.' },
    },
    {
      id: 'a1-m2-d3-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Kaç kardeşin olduğunu ve birinin adını söyle.',
      kabul: ['Tengo', 'se llama'],
      ornekCevap: 'Tengo una hermana. Se llama Ela.',
    },
  ],

  kartlar: ['es-familia', 'es-padre', 'es-madre', 'es-hermano', 'es-hijo', 'es-abuelo', 'es-tener'],
  not: null,
  sonraki: 'a1-m2-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
