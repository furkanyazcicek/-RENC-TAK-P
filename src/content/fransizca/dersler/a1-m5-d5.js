/**
 * DERS — A1 / Modül 5 / Ders 5
 * "Menü okumak ve alışveriş listesi yazmak"
 *
 * MODÜL KAPANIŞ dersi. Bu modülün asıl kazanımı (artikel seçimi) bir
 * okuma ve bir yazma göreviyle sınanır.
 *
 * OKUMA NEDEN ÖNEMLİ: menü, öğrencinin karşılaşacağı ilk gerçek Fransızca
 * metindir ve tamamı isim öbeğinden oluşur. Artikelleri ve "de" yapılarını
 * doğal ortamında görmek, kuralı kalıcı kılar.
 */

export default {
  id: 'a1-m5-d5',
  surum: 1,
  dil: 'fr',
  seviye: 'A1',
  modul: 'a1-m5',
  sira: 5,
  baslik: 'Menü oku, liste yaz',
  altBaslik: 'Gerçek bir menüde artikelleri ve "de" yapılarını gör',
  odakBeceri: 'okuma',
  beceriler: ['okuma', 'yazma', 'kelime'],
  amac: 'Bu dersin sonunda bir Fransız menüsünü okuyup anlayabilecek, sipariş seçebilecek ve doğru artikellerle bir alışveriş listesi yazabileceksin.',
  kazanim: 'Menüdeki isim öbeklerini çözer; "de" ile kurulan tamlamaları anlar; artikelleri doğru seçerek liste ve sipariş metni yazar.',
  onKosullar: ['a1-m5-d4'],
  sure: 16,
  baglam: {
    durum: 'Elinde bir Fransız restoranının menüsü var. Ne yiyeceğine karar verecek, sonra da eve dönüp alışveriş listesi yazacaksın.',
    neden: 'Menü, günlük hayatta karşılaşılan en yoğun isim öbeği metnidir; artikel ve tamlama pratiği için doğal bir alandır.',
  },

  bloklar: [
    {
      tur: 'anlatim',
      baslik: 'Menüde "de" ne iş yapar?',
      metin:
        'Fransızca menülerde neredeyse her yemek adı bir tamlamadır ve tamlama "de" ile kurulur. Türkçedeki sıranın TERSİDİR.',
      maddeler: [
        'Türkçe: domates çorbası → Fransızca: soupe DE tomates (çorba + de + domates)',
        'Türkçe: portakal suyu → Fransızca: jus D’orange',
        'Türkçe: günün menüsü → Fransızca: menu DU jour (de + le)',
        'Kural: önce ANA şey, sonra "de", sonra niteleyen şey.',
      ],
    },
    {
      tur: 'tablo',
      baslik: 'Menü bölümleri',
      basliklar: ['Fransızca', 'Türkçe', 'Örnek'],
      satirlar: [
        ['l’entrée', 'başlangıç', 'salade de tomates'],
        ['le plat principal', 'ana yemek', 'poulet aux légumes'],
        ['le dessert', 'tatlı', 'tarte aux pommes'],
        ['la boisson', 'içecek', 'jus d’orange'],
        ['le menu du jour', 'günün menüsü', 'entrée + plat + dessert'],
        ['la carte', 'yemek listesi', 'bütün yemekler'],
      ],
    },
    {
      tur: 'anlatim',
      baslik: '"aux" menülerde ne demek?',
      metin:
        'Menülerde çok gördüğün "aux" biçimi, "à + les" kaynaşmasıdır ve "…lı, …lı olarak" anlamına gelir.',
      maddeler: [
        'tarte aux pommes = elmalı turta',
        'poulet aux légumes = sebzeli tavuk',
        'glace à la vanille = vanilyalı dondurma (dişil → à la)',
        'Yani "à" burada "ile hazırlanmış" demektir.',
      ],
    },
    {
      tur: 'tuzak',
      baslik: 'Menüde en sık yanlış anlaşılan',
      yanlis: '"entrée" = giriş ücreti ya da ana yemek',
      dogru: '"entrée" = BAŞLANGIÇ yemeği (çorba, salata)',
      neden:
        'İngilizcede "entrée" ana yemek anlamına gelir; bu, Fransızcadan İngilizceye geçerken anlam kaymış bir kelimedir. Fransızcada başlangıçtır.',
    },
    {
      tur: 'okuma',
      baslik: 'Menu du jour — 15 €',
      metin:
        'ENTRÉES\nSalade de tomates\nSoupe de légumes\n\nPLATS\nPoulet aux légumes\nPoisson du jour avec du riz\nPâtes à la crème\n\nDESSERTS\nTarte aux pommes\nGlace à la vanille\n\nBOISSONS\nEau minérale · Jus d’orange · Café',
      sozluk: [
        { fr: 'les pâtes', tr: 'makarna (hep çoğul)' },
        { fr: 'la crème', tr: 'krema' },
        { fr: 'le riz', tr: 'pirinç, pilav' },
      ],
    },
  ],

  alistirmalar: [
    {
      id: 'a1-m5-d5-a1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'Menüye bak ve cevapla.',
      soru: '"Tarte aux pommes" nedir?',
      secenekler: [
        { id: 'a', metin: 'Elmalı turta (tatlı)' },
        { id: 'b', metin: 'Patatesli turta (ana yemek)' },
        { id: 'c', metin: 'Elma suyu (içecek)' },
      ],
      dogruId: 'a',
      secenekNotu: { b: '"pomme" elma, "pomme de terre" patatestir.' },
      aciklama: '"aux" = "à + les" → "…lı" demektir: elmalı.',
    },
    {
      id: 'a1-m5-d5-a2',
      tur: 'eslestirme',
      beceri: 'okuma',
      zorluk: 'orta',
      yonerge: 'Yemeği bölümüyle eşleştir.',
      sol: [
        { id: 'y1', metin: 'Soupe de légumes' },
        { id: 'y2', metin: 'Poulet aux légumes' },
        { id: 'y3', metin: 'Glace à la vanille' },
        { id: 'y4', metin: 'Jus d’orange' },
      ],
      sag: [
        { id: 'b1', metin: 'Entrée (başlangıç)' },
        { id: 'b2', metin: 'Plat principal (ana yemek)' },
        { id: 'b3', metin: 'Dessert (tatlı)' },
        { id: 'b4', metin: 'Boisson (içecek)' },
      ],
      eslesme: { y1: 'b1', y2: 'b2', y3: 'b3', y4: 'b4' },
      aciklama: 'Fransız menüsü her zaman aynı sırayla dizilir: entrée → plat → dessert → boisson. Bu sırayı bilmek, hiç bilmediğin bir yemeğin ne olduğunu tahmin ettirir.',
    },
    {
      id: 'a1-m5-d5-a3',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Tamlamayı tamamla (de / d’ / du / aux).',
      parcalar: ['une soupe ', { bosluk: 0 }, ' légumes · un jus ', { bosluk: 1 }, ' orange · une tarte ', { bosluk: 2 }, ' pommes'],
      cevaplar: [
        { kabul: ['de'], ipucu: 'tamlama' },
        { kabul: ["d'", 'd’'], ipucu: 'sesli harften önce' },
        { kabul: ['aux'], ipucu: 'à + les' },
      ],
      aciklama: 'Menü dilinin tamamı bu üç yapıdan oluşur: de, d’, aux.',
    },
    {
      id: 'a1-m5-d5-a4',
      tur: 'durum-ifade',
      beceri: 'dusunme',
      zorluk: 'orta',
      yonerge: 'DURUM → İFADE. Menüden seçim yap.',
      durum: 'Garson sipariş soruyor. Başlangıç olarak sebze çorbası istiyorsun.',
      kabul: ['Je voudrais une soupe de légumes', 'Je prends une soupe de légumes', 'Une soupe de légumes, s’il vous plaît'],
      ornekCevap: 'Je voudrais une soupe de légumes, s’il vous plaît.',
      aciklama: 'Menüden seçerken porsiyon istediğin için belirsiz artikel kullanılır: UNE soupe.',
    },
    {
      id: 'a1-m5-d5-a5',
      tur: 'hata-bul',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Cümlede bir hata var. Doğru biçimini yaz.',
      cumle: 'Je voudrais un jus de orange.',
      hataliParca: 'de orange',
      dogruParca: 'd’orange',
      kabul: ["Je voudrais un jus d'orange", 'Je voudrais un jus d’orange', "d'orange"],
      aciklama: 'Sesli harften önce "de" elizyona girer ve "d’" olur.',
    },
    {
      id: 'a1-m5-d5-a6',
      tur: 'yazma',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'Modülün kapanış görevi: alışveriş listesi ve kısa mesaj.',
      gorev: 'Tu vas faire les courses. Écris un message à ton frère : dis ce que tu vas acheter (avec les quantités), ce qu’il n’y a plus à la maison, et ce que tu ne vas pas acheter.',
      ornekMetin: 'Salut ! Je vais au marché cet après-midi. Je vais acheter un kilo de pommes, un peu de fromage et une bouteille d’eau. À la maison, il n’y a plus de pain et il n’y a pas de lait, alors je prends aussi du pain et du lait. Je n’achète pas de viande cette semaine, c’est trop cher. Tu veux quelque chose ?',
      kaliplar: ['Je vais acheter…', 'un kilo de… / un peu de…', 'Il n’y a plus de…', 'Je n’achète pas de…', 'Tu veux quelque chose ?'],
      asamalar: [
        { ad: 'Listele', aciklama: 'Alacağın üç şeyi ve miktarlarını yaz.' },
        { ad: 'Eksikleri söyle', aciklama: 'Evde ne kalmadığını olumsuz cümleyle yaz.' },
        { ad: 'Almayacağını ekle', aciklama: 'Bir şeyi neden almayacağını söyle.' },
        { ad: 'Kontrol et', aciklama: 'Miktardan sonra "de" var mı? Olumsuzda "de" var mı? Kısmi artikeller doğru mu?' },
      ],
      olcut: [
        'En az iki miktar ifadesi kullandım (un kilo de, un peu de).',
        'Miktar ifadelerinden sonra "de" yazdım.',
        'En az bir olumsuz cümle kurdum.',
        'Olumsuzda artikeli "de" yaptım.',
        'En az bir kısmi artikel kullandım (du / de la / de l’).',
        'Yakın gelecek kullandım (je vais acheter).',
      ],
      enAzKelime: 45,
      aranan: [
        { etiket: 'miktar ifadesi', desen: /\b(un\s+kilo\s+de|un\s+peu\s+de|beaucoup\s+de|une\s+bouteille\s+d)/i },
        { etiket: 'kısmi artikel', desen: /\b(du|de\s+la|de\s+l['’])\s*\w/i },
        { etiket: 'olumsuzda de', desen: /\bpas\s+d[e’']/i },
        { etiket: 'yakın gelecek', desen: /\b(vais|va|allons|vont)\s+\w+er\b/i },
        { etiket: 'liste bağlacı', desen: /\b(et|aussi|alors)\b/i },
      ],
    },
  ],

  ozet: [
    'Menü dilinin omurgası "de" ile kurulan tamlamalardır: soupe DE légumes.',
    'Tamlamada sıra Türkçenin tersidir: önce ana şey, sonra niteleyen.',
    '"aux" = à + les → "…lı": tarte aux pommes.',
    'Dişilde "à la" kalır: glace à la vanille.',
    '"entrée" başlangıç yemeğidir, ana yemek değil.',
    'Sesli harften önce "de" → "d’": jus d’orange.',
  ],

  miniSinav: [
    {
      id: 'a1-m5-d5-s1',
      tur: 'coktan-secmeli',
      beceri: 'okuma',
      zorluk: 'kolay',
      yonerge: 'Menüye göre cevapla.',
      soru: '"Poulet aux légumes" hangi bölümdedir?',
      secenekler: [
        { id: 'a', metin: 'Plat principal (ana yemek)' },
        { id: 'b', metin: 'Dessert (tatlı)' },
        { id: 'c', metin: 'Boisson (içecek)' },
      ],
      dogruId: 'a',
    },
    {
      id: 'a1-m5-d5-s2',
      tur: 'bosluk',
      beceri: 'gramer',
      zorluk: 'orta',
      yonerge: 'Tamlamayı tamamla.',
      parcalar: ['une glace ', { bosluk: 0 }, ' vanille'],
      cevaplar: [{ kabul: ['à la', 'a la'], ipucu: 'vanille dişildir' }],
    },
    {
      id: 'a1-m5-d5-s3',
      tur: 'durum-ifade',
      beceri: 'yazma',
      zorluk: 'zor',
      yonerge: 'DURUM → İFADE. İki cümle yaz.',
      durum: 'Bir kilo domates alacağını ve evde ekmek kalmadığını söyle.',
      kabul: ['Je vais acheter un kilo de tomates', "Je vais acheter un kilo de tomates et il n'y a plus de pain"],
      ornekCevap: 'Je vais acheter un kilo de tomates. Il n’y a plus de pain à la maison.',
    },
  ],

  kartlar: ['fr-menu', 'fr-restaurant', 'fr-pomme', 'fr-legume', 'fr-eau', 'fr-poisson'],
  not: 'not-a1-m5-calisma',
  sonraki: null,
  kaynak: { tur: 'ozgun', aciklama: 'DRKOÇ için özgün üretilmiştir.' },
}
