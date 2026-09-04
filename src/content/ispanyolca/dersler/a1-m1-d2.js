/**
 * DERS — A1 / Modül 1 / Ders 2
 * "ser fiili ve düşen özne"
 *
 * Bu ders İspanyolcanın belkemiğini kurar ve aynı zamanda Türk öğrenciye
 * en büyük hediyesini verir: ÖZNE ZAMİRİ GEREKMEZ. Türkçede de "geliyorum"
 * derken "ben" demeyiz. Bu benzerlik erken söylenirse öğrenci hem rahatlar
 * hem de İngilizceden gelen "yo" fazlalığından baştan korunur.
 *
 * "ser" burada YALNIZ kimlik/nitelik için verilir. Yer bildirme (estar)
 * bilinçli olarak Modül 4'e bırakılmıştır; ikisi birlikte verilirse
 * hiçbiri oturmaz.
 */

export default {
  id: 'a1-m1-d2',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 2,
  baslik: 'ser fiili ve düşen özne',
  altBaslik: 'Kim olduğunu söyle — ve gereksiz "yo" deme',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'dusunme', 'yazma'],
  amac: 'Bu dersin sonunda "ser" fiilini altı kişide de çekebilecek, kim olduğunu ve ne iş yaptığını söyleyebilecek ve özne zamirini yalnız gerektiğinde kullanacaksın.',
  kazanim: 'ser fiilini bütün kişilerde doğru çeker; özne zamirinin düşmesini uygular; meslek ve nitelik cümlelerini artikelsiz kurar.',
  onKosullar: ['a1-m1-d1'],
  sure: 15,
  baglam: {
    durum: 'Yeni bir sınıfa girdin. Herkes sırayla kendini tanıtıyor: adı, nereli olduğu, ne yaptığı.',
    neden: '"ser" İspanyolcada en çok kullanılan fiildir. Kimlik, meslek, milliyet, nitelik — hepsi bu fiille kurulur. Çekimi ilk haftada oturmazsa sonraki her ders zorlaşır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Önce iyi haber: "ben, sen, o" demene gerek yok',
      metin:
        'İspanyolcada fiil kişiye göre değişir. Çekim zaten kimin konuştuğunu söylediği için özne zamiri gereksizdir — tıpkı Türkçedeki gibi. "Soy Deniz" demek yeter; "Yo soy Deniz" demek Türkçede "Ben Deniz\'im ben" demek gibi ağır durur.',
      maddeler: [
        'Türkçe: "geliyorum" — "ben" demeye gerek yok. İspanyolca: "soy" — "yo" demeye gerek yok.',
        'Zamir yalnız VURGU ya da KARŞILAŞTIRMA için kullanılır: "Yo soy turco, él es español."',
        'İngilizce alışkanlığı buraya taşınırsa her cümlede fazladan bir "yo" çıkar; bu hemen fark edilir.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'ser — çekim ve kişi zamirleri',
      basliklar: ['Zamir (gerekmez)', 'ser', 'Türkçe'],
      satirlar: [
        ['(yo)', 'soy', 'benim / -im'],
        ['(tú)', 'eres', 'sensin / -sin'],
        ['(él / ella / usted)', 'es', 'o / siz (resmî)'],
        ['(nosotros/as)', 'somos', 'biziz'],
        ['(vosotros/as)', 'sois', 'sizsiniz (samimi çoğul, İspanya)'],
        ['(ellos / ellas / ustedes)', 'son', 'onlar / siz (resmî çoğul)'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'ser neyi anlatır?',
      metin:
        '"ser" kalıcı ve tanımlayıcı olan her şeyi anlatır: kim olduğun, nereli olduğun, ne iş yaptığın, nasıl biri olduğun. Bu derste yalnız bu kullanımlar var; "nerede olduğunu" söylemek için başka bir fiil (estar) vardır ve ona Modül 4\'te geleceğiz.',
      maddeler: [
        'KİMLİK: Soy Deniz. / Ella es mi hermana.',
        'MİLLİYET: Somos turcos.',
        'MESLEK: Mi padre es médico.',
        'NİTELİK: El libro es interesante.',
        'SAAT ve GÜN: Son las tres. / Hoy es lunes.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Soy un estudiante.',
      dogru: 'Soy estudiante.',
      neden:
        'İngilizcedeki "I am a student" alışkanlığı buraya taşınır. İspanyolcada meslek ve rol söylenirken artikel KULLANILMAZ. Artikel ancak sıfat eklenirse gelir: "Soy un estudiante turco" (bu da doğrudur ama farklı bir vurgudur).',
    },
    {
      tur: 'ornek',
      satirlar: [
        { es: 'Soy Deniz. Soy estudiante.', tr: 'Ben Deniz. Öğrenciyim.', not: 'İki cümlede de "yo" yok.' },
        { es: '¿Eres turco?', tr: 'Türk müsün?', not: 'Soru sözcüğü yok; ton yeter.' },
        { es: 'Mi madre es profesora.', tr: 'Annem öğretmen.', not: 'Meslek artikelsiz.' },
        { es: 'Somos cinco en mi familia.', tr: 'Ailemde beş kişiyiz.', not: 'Sayı doğrudan gelir.' },
        { es: 'Ellos son mis amigos.', tr: 'Onlar arkadaşlarım.', not: 'Burada zamir vurgu için var.' },
      ],
    },
    {
      tur: 'karsilastirma',
      baslik: 'Gereksiz zamir kulağı tırmalar',
      dogal: '— ¿Cómo te llamas? — Me llamo Ali. Soy de Ankara.',
      yapay: '— ¿Cómo te llamas? — Yo me llamo Ali. Yo soy de Ankara.',
      aciklama:
        'İkinci cevap dilbilgisi olarak yanlış değildir ama her cümlede "yo" tekrarı yapay durur — Türkçede "Ben adım Ali, ben Ankaralıyım ben" demek gibidir. Zamiri yalnız karşılaştırma yaparken kullan.',
    },
    {
      tur: 'kalip',
      baslik: 'Kendini tanıtma kalıpları',
      kaliplar: [
        { es: 'Soy…', kullanim: 'Ad ya da meslek', ornek: 'Soy Elif. Soy estudiante.' },
        { es: 'Soy de…', kullanim: 'Nereli olduğun', ornek: 'Soy de Estambul.' },
        { es: 'Es mi…', kullanim: 'Birini tanıtma', ornek: 'Es mi hermano.' },
        { es: 'Somos…', kullanim: 'Grup olarak tanıtma', ornek: 'Somos compañeros de clase.' },
        { es: '¿Eres…?', kullanim: 'Doğrulama sorusu', ornek: '¿Eres de Madrid?' },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Sınıf tanışması',
      metin: 'Hola, me llamo Marta. Soy de Valencia y soy estudiante. Mi padre es médico y mi madre es profesora. Somos cuatro en casa.',
      satirlar: [
        { kisi: 'Marta', es: 'Hola, me llamo Marta.' },
        { kisi: 'Marta', es: 'Soy de Valencia y soy estudiante.' },
        { kisi: 'Marta', es: 'Mi padre es médico y mi madre es profesora.' },
        { kisi: 'Marta', es: 'Somos cuatro en casa.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        '"ser" çekimini ezberlerken zamirleri parantez içinde düşün: (yo) soy, (tú) eres… Böylece hem çekimi öğrenirsin hem de zamirin gerekmediğini beynine yazarsın.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d2-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: '"ser" fiilini doğru çek.',
      parcalar: ['Yo ', { bosluk: 0 }, ' estudiante y mi hermana ', { bosluk: 1 }, ' profesora.'],
      cevaplar: [
        { kabul: ['soy'], ipucu: 'birinci tekil' },
        { kabul: ['es'], ipucu: 'üçüncü tekil' },
      ],
      aciklama: 'Çekim kişiyi gösterdiği için ikinci cümlecikte "ella" demeye gerek kalmadı.',
    },
    {
      id: 'a1-m1-d2-a2',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Mi padre es un médico.',
      hataliParca: 'un médico',
      dogruParca: 'médico',
      kabul: ['médico', 'medico'],
      aciklama: 'Meslek söylerken artikel kullanılmaz: es médico, es profesora, es estudiante.',
    },
    {
      id: 'a1-m1-d2-a3',
      tur: 'siralama',
      beceri: 'dizim',
      zorluk: 'orta',
      yonerge: 'Kelimeleri doğru sıraya diz.',
      parcalar: ['Marta', 'y', 'es', 'de', 'Valencia'],
      dogruSira: [0, 2, 3, 4, 1],
      ipucu: '"y" cümleyi bağlamak için sonda kalabilir; önce "Marta es de Valencia" kur.',
      aciklama: 'İspanyolcada cümle sırası özne-fiil-tümleçtir; yüklem sona gitmez. Türkçedeki sıradan farkı budur.',
    },
    {
      id: 'a1-m1-d2-a4',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Hangisi daha doğal? Gerekçeleri oku.',
      baglam: 'Biri sana adını sordu. Cevap veriyorsun.',
      secenekler: [
        { id: 'a', metin: 'Me llamo Deniz. Soy de Ankara.', dogal: true, neden: 'Doğal. Fiil kişiyi zaten gösteriyor; zamir gereksiz.' },
        { id: 'b', metin: 'Yo me llamo Deniz. Yo soy de Ankara.', dogal: false, neden: 'Dilbilgisi doğru ama her cümlede "yo" tekrar edince yapay durur.' },
        { id: 'c', metin: 'Yo Deniz. Yo Ankara.', dogal: false, neden: 'Fiil yok. İspanyolcada fiilsiz cümle kurulmaz.' },
      ],
      aciklama: 'Zamiri yalnız karşılaştırmada kullan: "Yo soy turco, él es español."',
    },
    {
      id: 'a1-m1-d2-a5',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'zor',
      yonerge: '"ser" fiilini doğru çek. Kişilere dikkat et.',
      parcalar: ['Nosotros ', { bosluk: 0 }, ' de Turquía, pero ellos ', { bosluk: 1 }, ' de España. ¿Tú de dónde ', { bosluk: 2 }, '?'],
      cevaplar: [
        { kabul: ['somos'], ipucu: 'biz' },
        { kabul: ['son'], ipucu: 'onlar' },
        { kabul: ['eres'], ipucu: 'sen' },
      ],
      aciklama: 'Burada zamirler bilinçli olarak var: iki grup KARŞILAŞTIRILIYOR. Karşılaştırma varsa zamir kullanmak doğaldır.',
    },
    {
      id: 'a1-m1-d2-a6',
      tur: 'soru-cevap',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Soruyu İspanyolca cevapla.',
      soru: '¿Eres estudiante?',
      kabul: ['Sí, soy estudiante', 'Sí soy estudiante', 'No, no soy estudiante'],
      ornekCevap: 'Sí, soy estudiante.',
      aciklama: 'Olumsuz cevapta iki "no" olur ve bu doğrudur: "No, no soy estudiante." Birincisi cevap, ikincisi olumsuzluk ekidir.',
    },
  ],

  ozet: [
    'ser çekimi: soy · eres · es · somos · sois · son.',
    'Özne zamiri gerekmez — Türkçedeki gibi. Yalnız vurgu ve karşılaştırmada kullanılır.',
    'ser kimlik, milliyet, meslek, nitelik, saat ve gün için kullanılır.',
    'Meslek söylerken artikel yoktur: Soy estudiante.',
    'usted "siz" demektir ama üçüncü tekil gibi çekilir: usted es.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d2-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Fiili çek.',
      parcalar: ['Mis padres ', { bosluk: 0 }, ' profesores.'],
      cevaplar: [{ kabul: ['son'], ipucu: 'üçüncü çoğul' }],
    },
    {
      id: 'a1-m1-d2-s2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Hangisi doğru?',
      soru: 'Mesleğini söylüyorsun.',
      secenekler: [
        { id: 'a', metin: 'Soy estudiante.' },
        { id: 'b', metin: 'Soy un estudiante.' },
        { id: 'c', metin: 'Yo estudiante.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Meslekte artikel kullanılmaz.', c: 'Fiil eksik.' },
    },
    {
      id: 'a1-m1-d2-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Kendini tanıt: adın ve nereli olduğun.',
      kabul: ['Soy', 'Me llamo'],
      ornekCevap: 'Me llamo Kerem. Soy de Bursa.',
    },
  ],

  kartlar: ['es-ser', 'es-estudiante', 'es-profesor', 'es-amigo', 'es-no'],
  not: null,
  sonraki: 'a1-m1-d3',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
