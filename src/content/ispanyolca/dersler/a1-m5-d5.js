/**
 * DERS — A1 / Modül 5 / Ders 5
 * "Menü ve alışveriş listesi: okuma ve yazma"
 *
 * Modülün kapanışı. Yeni gramer yoktur; modülün dört dersi bir OKUMA ve
 * bir YAZMA görevinde birleşir.
 *
 * Ders bir okuma becerisi de öğretir: BİLMEDİĞİN KELİMELERİ ATLAMAK.
 * Gerçek bir menüde öğrencinin bilmediği onlarca kelime olur; hepsini
 * anlamaya çalışmak öğrenciyi durdurur. Oysa menüden gereken bilgi
 * (ne var, kaç para, hangi bölümde) az sayıda ipucuyla çıkarılabilir.
 */

export default {
  id: 'a1-m5-d5',
  surum: 1,
  dil: 'es',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 5,
  baslik: 'Menü ve alışveriş listesi: okuma ve yazma',
  altBaslik: 'Bilmediğin kelimeyi atla, gereken bilgiyi yakala',
  odakBeceri: 'okuma',
  beceriler: ['okuma', 'yazma', 'kelime', 'dusunme'],
  amac: 'Bu dersin sonunda bir menüyü ya da alışveriş ilanını bütününü anlamadan okuyabilecek ve kendi alışveriş listeni miktarlarıyla yazabileceksin.',
  kazanim: 'Menü ve liste türü metinlerden hedef bilgiyi seçerek çıkarır; miktar ifadeleriyle bir alışveriş listesi üretir.',
  onKosullar: ['a1-m5-d4'],
  sure: 16,
  baglam: {
    durum: 'Bir restoranın menüsü elinde. Bütün kelimeleri bilmiyorsun ama sipariş vermen gerekiyor.',
    neden: 'Gerçek hayatta hiçbir metni tamamen anlamazsın; önemli olan İHTİYACIN OLAN bilgiyi bulmaktır. Bu beceri A1 okuma sınavının da ölçtüğü şeydir.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Menü okumanın üç ipucu',
      metin:
        'Bir menüyü okumak için bütün kelimeleri bilmene gerek yok. Üç ipucu neredeyse her zaman yeterlidir.',
      maddeler: [
        'BÖLÜM BAŞLIKLARI → primeros, segundos, postres, bebidas',
        '"con" ve "de" → içindekileri söyler: pollo CON arroz, tarta DE queso',
        'FİYAT → sayı ve € işareti; kelimeyi bilmesen de fiyatı görürsün',
        'Tanıdık kökler: ensalada (salata), sopa (çorba), fruta (meyve)',
        'Bilmediğin kelimede durma; bölüm ve fiyat bilgisi çoğu zaman yeter.',
      ],
    },
    {
      tur: 'okuma',
      baslik: 'Menú del día — 14 €',
      metin:
        'PRIMEROS\nEnsalada mixta\nSopa de verduras\nGazpacho andaluz\n\nSEGUNDOS\nPollo con arroz\nPescado del día con patatas\nPasta con tomate y queso\n\nPOSTRES\nFruta del tiempo\nHelado de vainilla\nTarta de queso\n\nBEBIDAS\nAgua · Refresco · Zumo de naranja\n\nPan y bebida incluidos.',
      sozluk: [
        { es: 'las verduras', tr: 'sebzeler' },
        { es: 'del tiempo', tr: 'mevsiminde olan' },
        { es: 'incluido', tr: 'dâhil' },
      ],
    },
    {
      tur: 'anlatim',
      baslik: 'Alışveriş listesi nasıl yazılır?',
      metin:
        'Liste yazmak da bir metin türüdür ve kendi kuralları vardır. İspanyolcada miktar önce gelir ve ürünle "de" ile bağlanır.',
      maddeler: [
        'MİKTAR + de + ÜRÜN: un kilo de tomates',
        'Sayılabilir ürünlerde "de" gerekmez: dos manzanas, tres botellas',
        'Belirsiz miktar: un poco de pan, algo de fruta',
        'Listelerde artikel kullanılmaz: "pan" yeter, "el pan" değil',
        'Sonuna not düşülebilir: "si hay" (varsa), "si no hay…" (yoksa…)',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'En sık yapılan hata',
      yanlis: 'Comprar el pan, la leche y dos kilos tomates.',
      dogru: 'Comprar pan, leche y dos kilos de tomates.',
      neden:
        'İki hata: (1) listede genel anlamda ürün yazılırken artikel kullanılmaz; (2) miktar varsa "de" zorunludur. Türkçede ne artikel ne bağ olduğu için ikisi de gözden kaçar.',
    },
    {
      tur: 'karsilastirma',
      baslik: 'Anlamadığın kelimede ne yapmalı?',
      dogal: '"Gazpacho" nedir bilmiyorum ama PRIMEROS bölümünde ve bir çorba adı gibi duruyor. Başlangıç olarak sipariş edebilirim.',
      yapay: '"Gazpacho" kelimesini sözlükten bulana kadar menüyü okumayı bırakmak.',
      aciklama:
        'Okuma sınavlarında da gerçek hayatta da başarı, bilmediğin kelimeyi ATLAYIP metnin yapısından bilgi çıkarabilmektir. Bölüm başlığı, edatlar ve fiyat sana gerekeni söyler.',
    },
    {
      tur: 'kalip',
      baslik: 'Liste ve alışveriş kalıpları',
      kaliplar: [
        { es: 'Tengo que comprar…', kullanim: 'Almam gerekenler', ornek: 'Tengo que comprar pan y leche.' },
        { es: 'Necesito…', kullanim: 'İhtiyaç bildirme', ornek: 'Necesito medio kilo de queso.' },
        { es: '¿Algo más?', kullanim: 'Satıcının sorusu', ornek: '— ¿Algo más? — No, nada más, gracias.' },
        { es: 'Nada más, gracias.', kullanim: 'Alışverişi bitirme', ornek: 'Nada más, gracias.' },
        { es: 'Si no hay…, …', kullanim: 'Alternatif belirtme', ornek: 'Si no hay naranjas, manzanas.' },
      ],
    },
    {
      tur: 'ipucu',
      metin:
        'Menü okurken önce BÖLÜM BAŞLIKLARINI bul, sonra her bölümden tanıdığın bir kelime seç. Böylece hiçbir kelimeyi sözlükten aramadan sipariş verebilirsin.',
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d5-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'Yukarıdaki menüye göre cevapla.',
      soru: '"Tarta de queso" menünün hangi bölümündedir?',
      secenekler: [
        { id: 'a', metin: 'Postres' },
        { id: 'b', metin: 'Primeros' },
        { id: 'c', metin: 'Bebidas' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Primeros başlangıçlardır.', c: 'Bebidas içeceklerdir.' },
      aciklama: 'Kelimeyi bilmesen bile bölüm başlığı sana ne olduğunu söyler: postres = tatlılar.',
    },
    {
      id: 'a1-m5-d5-a2',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Menüye göre cevapla.',
      soru: 'Menüde ekmek ve içecek ayrıca ödenir mi?',
      secenekler: [
        { id: 'a', metin: 'Hayır, fiyata dâhil.' },
        { id: 'b', metin: 'Evet, ayrıca ödenir.' },
        { id: 'c', metin: 'Yalnız ekmek dâhildir.' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Menüde "incluidos" yazıyor.', c: 'İkisi de dâhildir.' },
      aciklama: '"incluido/incluidos" kelimesi menülerde çok geçer ve "dâhil" demektir; tanıması kolay bir ipucudur.',
    },
    {
      id: 'a1-m5-d5-a3',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Listedeki hatayı bul ve düzelt.',
      cumle: 'Comprar dos kilos tomates y una botella agua.',
      hataliParca: 'dos kilos tomates',
      dogruParca: 'dos kilos de tomates',
      kabul: ['dos kilos de tomates'],
      aciklama: 'Miktar varsa "de" zorunludur. Aynı hata "una botella de agua" için de geçerlidir.',
    },
    {
      id: 'a1-m5-d5-a4',
      tur: 'eslestirme',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Menü bölümünü Türkçe karşılığıyla eşleştir.',
      sol: [
        { id: 's1', metin: 'primeros' },
        { id: 's2', metin: 'segundos' },
        { id: 's3', metin: 'postres' },
        { id: 's4', metin: 'bebidas' },
      ],
      sag: [
        { id: 'g1', metin: 'başlangıçlar' },
        { id: 'g2', metin: 'ana yemekler' },
        { id: 'g3', metin: 'tatlılar' },
        { id: 'g4', metin: 'içecekler' },
      ],
      eslesme: { s1: 'g1', s2: 'g2', s3: 'g3', s4: 'g4' },
      aciklama: 'Bu dört başlık İspanya\'daki hemen her menüde aynıdır; ezberlemek okuma hızını ikiye katlar.',
    },
    {
      id: 'a1-m5-d5-a5',
      tur: 'dogal-secim',
      beceri: 'dusunme',
      zorluk: 'zor',
      yonerge: 'Menüde bilmediğin bir kelime gördün. Ne yapmalısın?',
      baglam: '"Gazpacho andaluz" yazıyor ve ne olduğunu bilmiyorsun.',
      secenekler: [
        { id: 'a', metin: 'Bölüm başlığına bakarım: PRIMEROS bölümünde, yani bir başlangıç.', dogal: true, neden: 'Doğru strateji. Metnin yapısı bilmediğin kelimeyi konumlandırır.' },
        { id: 'b', metin: 'Anlamadığım için menüyü okumayı bırakırım.', dogal: false, neden: 'Gerçek metinlerde her zaman bilinmeyen kelime olur; durmak okumayı bitirir.' },
        { id: 'c', metin: 'Garsona bütün kelimeleri tek tek sorarım.', dogal: false, neden: 'Bir iki soru doğaldır ama bütün menüyü sormak işini görmez ve zaman kaybettirir.' },
      ],
      aciklama: 'İstersen tek bir soru yeterlidir: "¿Qué es el gazpacho?" Ama önce yapıdan çıkarım yapmayı dene.',
    },
    {
      id: 'a1-m5-d5-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Bir alışveriş listesi ve kısa bir not yaz. Aşamaları sırayla tamamla.',
      gorev: 'Evde olmayanları alman gerekiyor. Bir liste yaz ve altına iki cümlelik not ekle.',
      ornekMetin: 'LISTA DE LA COMPRA\n- un kilo de tomates\n- medio kilo de queso\n- dos botellas de agua\n- pan\n- fruta (manzanas o naranjas)\n\nVoy al mercado por la mañana porque es más barato. Si no hay naranjas, compro manzanas.',
      kaliplar: ['un kilo de…', 'medio kilo de…', 'dos botellas de…', 'Si no hay…', 'porque…'],
      asamalar: [
        'Listeye en az beş ürün yaz.',
        'En az üç ürüne miktar ekle ve "de" edatını kullan.',
        'Listede artikel kullanma.',
        'Altına nereye ve ne zaman gideceğini yazan bir cümle ekle.',
        'Bir gerekçe ("porque") ya da bir alternatif ("si no hay…") ekle.',
      ],
      olcut: [
        'En az beş ürün var mı?',
        'Miktar ifadelerinde "de" kullanılmış mı?',
        'Listede gereksiz artikel var mı?',
        'Not bölümünde en az iki cümle var mı?',
        'Bir gerekçe ya da alternatif belirtilmiş mi?',
      ],
      enAzKelime: 35,
      aranan: [
        { etiket: 'Miktar + de', desen: 'kilo de|botella|poco de|litro de' },
        { etiket: 'Gerekçe/alternatif', desen: 'porque|si no hay' },
        { etiket: 'Plan', desen: 'voy|compro|tengo que' },
      ],
      aciklama: 'Bu görev modülün tamamını çalıştırır: miktar, fiyat, beğeni ve bağlaçlar.',
    },
  ],

  ozet: [
    'Menüde bölüm başlıkları en güçlü ipuçlarıdır: primeros, segundos, postres, bebidas.',
    '"con" ve "de" içindekileri söyler.',
    'Bilmediğin kelimede durma; yapıdan çıkarım yap.',
    'Listede genel ürün adları artikelsiz yazılır.',
    'Miktar varsa "de" zorunludur.',
    '"Si no hay…" alternatif belirtmenin en kısa yoludur.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d5-s1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'Doğru olanı seç.',
      soru: '"Zumo de naranja" nedir?',
      secenekler: [
        { id: 'a', metin: 'Portakal suyu' },
        { id: 'b', metin: 'Portakallı tatlı' },
        { id: 'c', metin: 'Portakal salatası' },
      ],
      dogruId: 'a',
      secenekNotu: { b: 'Menüde BEBIDAS bölümünde yazıyor.', c: 'Salata "ensalada"dır.' },
    },
    {
      id: 'a1-m5-d5-s2',
      tur: 'hata-bul',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'Hatayı düzelt.',
      cumle: 'Necesito un poco pan.',
      hataliParca: 'un poco pan',
      dogruParca: 'un poco de pan',
      kabul: ['un poco de pan'],
    },
    {
      id: 'a1-m5-d5-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Bir cümle yaz.',
      durum: 'Bir kilo elma ve bir şişe su alman gerektiğini söyle.',
      kabul: ['un kilo de manzanas', 'una botella de agua'],
      ornekCevap: 'Necesito un kilo de manzanas y una botella de agua.',
    },
  ],

  kartlar: ['es-pan', 'es-leche', 'es-fruta', 'es-kilo', 'es-restaurante'],
  not: 'not-a1-m5-calisma',
  sonraki: 'a1-m6-d1',
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
