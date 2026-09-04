/**
 * DERS — A1 / Modül 1 / Ders 3
 * "llamarse: adını söyle, sor ve hecele"
 *
 * Bu ders ilk DÖNÜŞLÜ FİİLİ tanıtır. Türk öğrenci için "me llamo"
 * ezberlenmiş bir kalıptır; oysa bir yapıdır ve çözüldüğünde Modül 3'teki
 * bütün rutin fiilleri (levantarse, acostarse) kolaylaştırır. Bu yüzden
 * kalıp olarak değil, YAPI olarak öğretilir.
 *
 * İkinci konu İspanyol ad sistemidir: iki soyadı. Bu, kültür bilgisi
 * değil, sınav ve form doldurma bilgisidir; okuma metinlerinde sürekli
 * karşılaşılır.
 */

export default {
  id: 'a1-m1-d3',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m1',
  sira: 3,
  baslik: 'llamarse: adını söyle, sor ve hecele',
  altBaslik: 'İlk dönüşlü fiilini çöz ve adını harf harf söyle',
  odakBeceri: 'gramer',
  beceriler: ['gramer', 'kelime', 'telaffuz', 'dinleme'],
  amac: 'Bu dersin sonunda adını "me llamo" ile söyleyebilecek, karşındakinin adını hem samimi hem resmî biçimde sorabilecek ve adını İspanyol alfabesiyle harf harf söyleyebileceksin.',
  kazanim: 'llamarse fiilini dönüşlü ekleriyle çeker; ad sorma kalıplarını tú/usted ayrımıyla kullanır; adını alfabeyle heceler.',
  onKosullar: ['a1-m1-d2'],
  sure: 13,
  baglam: {
    durum: 'Bir kursa kayıt oluyorsun. Görevli adını soruyor ve yazamayınca "¿Cómo se escribe?" diyor.',
    neden: 'Türkçe adlar İspanyol kulağına yabancıdır ve neredeyse her tanışmada hecelemen istenir. Alfabeyi bilmezsen ilk cümlede tıkanırsın.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: '"me llamo" bir kalıp değil, bir yapıdır',
      metin:
        'llamar "seslenmek, çağırmak" demektir. Sonuna gelen "se" onu kendine dönderir: llamarse = "kendine ... diye seslenmek", yani "adı ... olmak". Bu "se" kişiye göre değişir ve fiilin ÖNÜNE gelir.',
      maddeler: [
        '(yo) me llamo — adım …',
        '(tú) te llamas — adın …',
        '(él/ella/usted) se llama — adı … / adınız …',
        '(nosotros) nos llamamos — adlarımız …',
        '(vosotros) os llamáis — adlarınız …',
        '(ellos/ustedes) se llaman — adları … / adlarınız …',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Me llamo se Deniz. / Llamo Deniz.',
      dogru: 'Me llamo Deniz.',
      neden:
        'Dönüşlü ek fiilin önündedir ve kişiye göre değişir. "se" yalnız üçüncü kişide kullanılır; birinci tekilde "me" olur. Eki hiç kullanmamak ise fiili "birine seslenmek" anlamına düşürür.',
    },
    {
      tur: 'tablo',
      baslik: 'Aynı soru, üç hitap',
      basliklar: ['Kime?', 'Soru', 'Cevap'],
      satirlar: [
        ['Arkadaşa (tú)', '¿Cómo te llamas?', 'Me llamo Deniz.'],
        ['Yetişkine (usted)', '¿Cómo se llama?', 'Me llamo Deniz.'],
        ['Üçüncü kişi hakkında', '¿Cómo se llama tu hermano?', 'Se llama Kerem.'],
      ],
    },
    {
      tur: 'kalip',
      baslik: 'Ad ve yazım kalıpları',
      kaliplar: [
        { es: '¿Cómo te llamas?', kullanim: 'Ad sorma (samimi)', ornek: '— ¿Cómo te llamas? — Me llamo Elif.' },
        { es: '¿Cuál es tu nombre?', kullanim: 'Aynı soru, biraz daha resmî', ornek: '¿Cuál es tu nombre completo?' },
        { es: '¿Cómo se escribe?', kullanim: '"Nasıl yazılıyor?"', ornek: '— Yazçiçek. — ¿Cómo se escribe?' },
        { es: 'Se escribe…', kullanim: 'Heceleyerek cevap', ornek: 'Se escribe: e-ele-i-efe.' },
        { es: '¿Puedes repetir, por favor?', kullanim: 'Anlamadığında', ornek: 'Perdón, ¿puedes repetir?' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'İspanyol ad sistemi: iki soyadı',
      metin:
        'İspanyolca konuşulan ülkelerde herkesin İKİ soyadı vardır: önce babanınki, sonra annenninki. Bu, formlarda ve okuma metinlerinde sürekli karşına çıkar.',
      maddeler: [
        'nombre → ad: María',
        'primer apellido → babanın soyadı: García',
        'segundo apellido → annenin soyadı: López',
        'Tam ad: María García López',
        'Günlük hayatta yalnız BİRİNCİ soyadı kullanılır: "Señora García".',
        'Evlenince soyadı değişmez — bu, Türkiye\'dekinden farklıdır.',
      ],
    },
    {
      tur: 'telaffuz',
      baslik: 'Hecelerken en çok karışan harfler',
      sesler: [
        {
          ipa: '/ˈxo.ta/',
          aciklama: '"j" harfinin adı "jota"dır ve kendisi de gırtlaktan okunur. Türkçe adlardaki "c" sesini yazdırmak için genelde bu harf gerekir.',
          kelimeler: ['jota', 'jugar', 'hija'],
        },
        {
          ipa: '/ˈi ˈɡɾje.ɣa/',
          aciklama: '"y" harfinin adı "i griega" (Yunan i\'si) ya da yeni adıyla "ye"dir. Türkçe adlarda çok geçtiği için bunu ezberle.',
          kelimeler: ['i griega', 'yo', 'ya'],
        },
      ],
    },
    {
      tur: 'dinleme',
      baslik: 'Kayıt masası',
      metin: 'Buenos días. ¿Cómo se llama? Me llamo Elif Yazçiçek. ¿Cómo se escribe el apellido? Se escribe: i griega-a-zeta-ce-i-ce-e-ka.',
      satirlar: [
        { kisi: 'Görevli', es: 'Buenos días. ¿Cómo se llama?' },
        { kisi: 'Elif', es: 'Me llamo Elif Yazçiçek.' },
        { kisi: 'Görevli', es: '¿Cómo se escribe el apellido?' },
        { kisi: 'Elif', es: 'Se escribe: i griega, a, zeta, ce, i, ce, e, ka.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Kendi adını ve soyadını İspanyol alfabesiyle bir kez yazıp yüksek sesle çalış. Bu, ilk gerçek konuşmanda seni tıkanmaktan kurtaracak tek hazırlıktır.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m1-d3-a1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Dönüşlü eki ve fiili tamamla.',
      parcalar: ['Hola, ', { bosluk: 0 }, ' llamo Ayşe. ¿Y tú? ¿Cómo ', { bosluk: 1 }, ' llamas?'],
      cevaplar: [
        { kabul: ['me'], ipucu: 'birinci tekil dönüşlü ek' },
        { kabul: ['te'], ipucu: 'ikinci tekil dönüşlü ek' },
      ],
      aciklama: 'Dönüşlü ek fiilden ÖNCE gelir ve kişiye göre değişir: me, te, se, nos, os, se.',
    },
    {
      id: 'a1-m1-d3-a2',
      tur: 'coktan-secmeli',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Doğru soruyu seç.',
      soru: 'Yaşlı bir komşuna adını soruyorsun.',
      secenekler: [
        { id: 'a', metin: '¿Cómo se llama?' },
        { id: 'b', metin: '¿Cómo te llamas?' },
        { id: 'c', metin: '¿Cómo me llamo?' },
      ],
      dogruId: 'a',
      secenekNotu: {
        b: 'Bu "tú" biçimidir; tanımadığın bir yetişkine fazla samimi kaçar.',
        c: 'Bu "benim adım ne?" demektir.',
      },
      aciklama: 'usted üçüncü tekil gibi çekilir; dönüşlü ek de üçüncü kişininki olur: SE llama.',
    },
    {
      id: 'a1-m1-d3-a3',
      tur: 'eslestirme',
      beceri: 'telaffuz',
      zorluk: 'orta',
      yonerge: 'Harfi İspanyolcadaki adıyla eşleştir.',
      sol: [
        { id: 's1', metin: 'H' },
        { id: 's2', metin: 'J' },
        { id: 's3', metin: 'Y' },
        { id: 's4', metin: 'Ñ' },
      ],
      sag: [
        { id: 'g1', metin: 'hache' },
        { id: 'g2', metin: 'jota' },
        { id: 'g3', metin: 'i griega' },
        { id: 'g4', metin: 'eñe' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Türkçe adlarda en çok bu dört harf sorulur; ezberlenecek liste kısadır.',
    },
    {
      id: 'a1-m1-d3-a4',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümledeki hatayı bul ve düzelt.',
      cumle: 'Mi hermano me llama Kerem.',
      hataliParca: 'me llama',
      dogruParca: 'se llama',
      kabul: ['se llama', 'Se llama'],
      aciklama: 'Dönüşlü ek ÖZNEYE uyar. Özne "mi hermano" (üçüncü tekil) olduğu için ek "se" olmalıdır. "Me llama Kerem" ise "bana Kerem diye sesleniyor" demektir.',
    },
    {
      id: 'a1-m1-d3-a5',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE. Ne söylersin?',
      durum: 'Adını söyledin ama görevli yazamadı. Yardım etmek için ne dersin?',
      kabul: ['Se escribe', 'Te lo deletreo', 'Se lo deletreo', 'Se escribe así'],
      ornekCevap: 'Se escribe: e-ele-i-efe.',
      yaklasimNotu: 'Buradaki asıl beceri kelime bilmek değil, tıkanmayı çözecek kalıbı hatırlamaktır.',
      aciklama: '"Se escribe…" kalıbı hem soru hem cevap olarak kullanılır ve tanışmaların çoğunda gerekir.',
    },
    {
      id: 'a1-m1-d3-a6',
      tur: 'soru-cevap',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Soruyu cevapla.',
      soru: '¿Cómo se llama tu mejor amigo?',
      kabul: ['Se llama'],
      ornekCevap: 'Se llama Emre.',
      aciklama: 'Başkasından söz ederken ek "se"dir; "me" değil.',
    },
  ],

  ozet: [
    'llamarse dönüşlü bir fiildir; ek fiilden önce gelir ve kişiye göre değişir.',
    'me llamo · te llamas · se llama · nos llamamos · os llamáis · se llaman.',
    'usted için soru "¿Cómo se llama?"dır.',
    '"¿Cómo se escribe?" tanışmalarda en çok işine yarayacak sorudur.',
    'İspanyolca konuşulan ülkelerde iki soyadı vardır: önce babanınki, sonra annenninki.',
  ],

  miniSinav: [
    {
      id: 'a1-m1-d3-s1',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'kolay',
      yonerge: 'Boşluğu doldur.',
      parcalar: ['Mi profesora ', { bosluk: 0 }, ' llama Ana.'],
      cevaplar: [{ kabul: ['se'], ipucu: 'üçüncü tekil kişi' }],
    },
    {
      id: 'a1-m1-d3-s2',
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Doğru olanı seç.',
      soru: 'María García López adlı kişiye günlük hayatta nasıl hitap edilir?',
      secenekler: [
        { id: 'a', metin: 'Señora García' },
        { id: 'b', metin: 'Señora López' },
        { id: 'c', metin: 'Señora María' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Bu annenin soyadıdır; günlük hitapta kullanılmaz.', c: 'Ad ile "señora" birleşimi resmî hitapta kullanılmaz.' },
    },
    {
      id: 'a1-m1-d3-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Yeni bir sınıfa girdin ve adını söylüyorsun.',
      kabul: ['Me llamo'],
      ornekCevap: 'Hola, me llamo Zeynep.',
    },
  ],

  kartlar: ['es-llamarse', 'es-nombre', 'es-apellido', 'es-como'],
  not: null,
  sonraki: 'a1-m1-d4',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
