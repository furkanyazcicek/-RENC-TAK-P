/**
 * DRKOÇ — FRANSIZCA MÜFREDAT HARİTASI
 * ==================================================================
 *
 * Seviye → modül → ders hiyerarşisinin üst iki katmanı. Dersler ayrı
 * dosyalarda tutulur (content/fransizca/dersler/); burada modülün ne
 * öğrettiği, hangi işlevi kazandırdığı ve hangi gerçek yaşam durumunu
 * kapsadığı yazar.
 *
 * SIRALAMA GEREKÇESİ: modüller yalnız gramer sırasına göre değil, İŞLEV
 * sırasına göre dizildi. Öğrenci "partitif artikel" öğrenmek için değil,
 * "kendini tanıtabilmek", "sipariş verebilmek", "yol sorabilmek" için
 * çalışır. Gramer bu işlevlerin içine yerleştirildi. Bu, Avrupa Dil
 * Çerçevesi'nin işlevsel yaklaşımı, DELF A1 sınav çerçevesi ve MEB
 * Fransızca dersi kazanımlarının ortak paydasıdır.
 *
 * FRANSIZCAYA ÖZGÜ SIRA KARARLARI — bunlar Almanca ve İngilizce
 * müfredatından bilinçli olarak ayrılır:
 *
 *  1. CİNSİYET (le/la) İKİNCİ MODÜLÜN İLK DERSİDİR. Fransızcada bir ismi
 *     cinsiyetsiz öğrenmek, onu hiçbir cümlede doğru kullanamamak
 *     demektir: sıfat uyumu, iyelik sıfatı, zamir — hepsi cinsiyete
 *     bağlıdır. Sonraya bırakılmaz.
 *  2. OLUMSUZLUK ERKEN VE ÇOK TEKRARLA verilir. Türkçede olumsuzluk tek
 *     ektir; Fransızcada fiili saran İKİ parçadır (ne … pas). Bu yapı
 *     M2'de girer ve her modülde yeniden çalışılır.
 *  3. ELİZYON VE LİAİSON birinci modülden itibaren her derste vardır.
 *     Türkçede kelimeler birbirine karışmaz; Fransızcada karışır. Bu
 *     ayrı bir "konu" değil, sürekli bir alışkanlıktır.
 *  4. GEÇMİŞ ZAMAN A1'in SONUNDADIR (M6). Passé composé'nin iki yardımcı
 *     fiili (avoir/être) ve uyum kuralı, önce şimdiki zamanın oturmasını
 *     gerektirir.
 *  5. SORU SORMANIN ÜÇ YOLU (tonlama · est-ce que · devrik) tek derste
 *     birlikte verilir. Öğrenci sınavda devriği, konuşmada tonlamayı
 *     görecek; birini öğrenip diğerini görmemek kafa karıştırır.
 *
 * `durum` alanı dürüstlük içindir:
 *   'hazir' → dersleri yazılmış, baştan sona çözülebilir
 *   'plan'  → müfredatta yeri belli, içeriği henüz üretilmedi
 * Arayüz bu farkı gizlemez; öğrenci nereye gideceğini bilir.
 */

export const MODULLER = [
  /* ---------------- Pre-A1 — sıfırdan başlangıç ---------------- */
  {
    id: 'prea1-m1',
    seviye: 'Pre-A1',
    sira: 1,
    ad: 'Sesler, harfler ve ilk kelimeler',
    amac: 'Fransızcanın seslerini tanı, adını harf harf söyleyebil, ilk kalıpları öğren.',
    islev: 'Alfabe, aksanlar, nazal sesler, okunmayan son harfler, sınıf içi ifadeler',
    kazanimlar: [
      'Fransız alfabesini söyler ve adını heceler (é, è, ê, ç dâhil).',
      'Yazıldığı gibi OKUNMADIĞINI fark eder; son sessizlerin çoğunun okunmadığını bilir.',
      'ou/u, é/è, on/an/in nazal seslerini ayırt eder.',
      'Sınıf/uygulama yönergelerini anlar (Écoute, Répète, Regarde, Ouvre ton livre).',
      'İlk selamlaşma ve nezaket kalıplarını kullanır.',
    ],
    durum: 'hazir',
    dersler: ['prea1-m1-d1'],
  },
  {
    id: 'prea1-m2',
    seviye: 'Pre-A1',
    sira: 2,
    ad: 'Sayılar, renkler ve nesneler',
    amac: '0–20 sayıları, temel renkler ve çevrendeki nesneleri adlandır.',
    islev: 'Adlandırma, sayma, "Qu\'est-ce que c\'est ?" kalıbı',
    kazanimlar: [
      '0–20 arası sayıları duyar ve söyler.',
      'Çevresindeki nesneleri artikeliyle birlikte adlandırır.',
      "C'est / Ce sont kalıbını kullanır.",
    ],
    durum: 'plan',
    dersler: [],
  },

  /* ---------------- A1 — temel kullanıcı ---------------- */
  {
    id: 'a1-m1',
    seviye: 'A1',
    sira: 1,
    ad: 'Bonjour ! Kendini tanıt',
    amac: 'Selamlaş, kendini tanıt, karşındakini tanı. İlk gerçek konuşmanı kur.',
    islev: 'Selamlaşma, tanışma, kişisel bilgi verme ve sorma, tu/vous ayrımı',
    kazanimlar: [
      'Günün saatine ve kişiye uygun selamlaşma kalıbını seçer (bonjour / bonsoir / salut).',
      'tu ve vous arasında duruma göre doğru seçimi yapar.',
      '"être" fiilini bütün kişilerde çeker ve özneyi ASLA düşürmez.',
      "s'appeler fiiliyle adını söyler ve sorar; adını Fransız alfabesiyle heceler.",
      'Ülke, milliyet ve dil ayrımını yapar (la Turquie / turc-turque / le turc).',
      '0–69 sayılarını söyler; yaşını "avoir" ile verir.',
      'Soru sormanın üç yolunu (tonlama · est-ce que · devrik) tanır ve kullanır.',
      'Kendini tanıtan kısa bir metin yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m1-d1', 'a1-m1-d2', 'a1-m1-d3', 'a1-m1-d4', 'a1-m1-d5', 'a1-m1-d6'],
  },
  {
    id: 'a1-m2',
    seviye: 'A1',
    sira: 2,
    ad: 'Ailem ve eşyalarım',
    amac: 'Aileni, arkadaşlarını ve eşyalarını anlat. Fransızcanın belkemiği olan cinsiyeti kur.',
    islev: 'Betimleme, sahiplik, aile ilişkileri, cinsiyet ve çoğul, olumsuzluk',
    kazanimlar: [
      "le/la/l'/les ayrımını yapar; cinsiyeti tahmin ettiren son ek kurallarını kullanır.",
      'un/une/des belirsiz artikellerini ve "il y a" kalıbını kullanır.',
      '"avoir" ile sahiplik anlatır ve aile üyelerini tanıtır.',
      'İyelik sıfatlarını ismin cinsine göre çeker (mon/ma/mes).',
      'Sıfatı ismin cinsine ve sayısına uydurur; sıfatın YERİNİ doğru seçer.',
      'ne … pas ile olumsuz cümle kurar ve olumsuzda artikelin "de"ye dönüştüğünü bilir.',
      'Ailesini tanıtan kısa bir e-posta yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m2-d1', 'a1-m2-d2', 'a1-m2-d3', 'a1-m2-d4', 'a1-m2-d5', 'a1-m2-d6'],
  },
  {
    id: 'a1-m3',
    seviye: 'A1',
    sira: 3,
    ad: 'Günüm',
    amac: 'Bir günü baştan sona anlat: kalkış, okul, yemek, uyku.',
    islev: 'Alışkanlık anlatma, saat söyleme, sıklık, günlük akış',
    kazanimlar: [
      '-er ile biten düzenli fiilleri altı kişide de çeker.',
      'Saati sorar ve söyler; günlük programını saatlerle anlatır.',
      'Dönüşlü fiillerle (se lever, se coucher) rutinini anlatır.',
      'aller, faire, prendre düzensiz fiillerini doğru çeker.',
      'Sıklık zarflarını ve gün adlarını doğru yerde kullanır.',
      'Bir gününü anlatan bağlantılı bir metin yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m3-d1', 'a1-m3-d2', 'a1-m3-d3', 'a1-m3-d4', 'a1-m3-d5', 'a1-m3-d6'],
  },
  {
    id: 'a1-m4',
    seviye: 'A1',
    sira: 4,
    ad: 'Şehirde',
    amac: 'Şehirde yolunu bul: yer sor, tarif et, ulaşımı kullan.',
    islev: 'Yer bildirme, yol tarifi, ulaşım, yakın gelecek',
    kazanimlar: [
      'à / en / au / aux edatlarını şehir ve ülke adlarıyla doğru seçer.',
      'Edat ile artikelin kaynaşmasını (au, du, aux, des) kurar.',
      'futur proche (aller + mastar) ile planını anlatır.',
      'Ulaşım araçlarını ve bilet alma kalıplarını kullanır.',
      'Yol sorar, aldığı tarifi anlar ve kendisi tarif eder.',
    ],
    durum: 'hazir',
    dersler: ['a1-m4-d1', 'a1-m4-d2', 'a1-m4-d3', 'a1-m4-d4', 'a1-m4-d5'],
  },
  {
    id: 'a1-m5',
    seviye: 'A1',
    sira: 5,
    ad: 'Yemek ve alışveriş',
    amac: 'Sipariş ver, alışveriş yap, fiyat sor. Miktarı Fransızca düşün.',
    islev: 'Sipariş verme, miktar bildirme, fiyat sorma, tercih anlatma',
    kazanimlar: [
      "Kısmi artikeli (du / de la / de l' / des) sayılamayan isimlerle kullanır.",
      '"je voudrais" ile kibar istek kurar ve restoranda sipariş verir.',
      'Miktar ifadelerinden sonra "de" geldiğini bilir (un kilo de, beaucoup de).',
      'Olumsuz cümlede artikelin "de"ye döndüğünü uygular (pas de pain).',
      'Fiyat sorar, para birimini ve sayıları doğru söyler.',
      'Menü ve alışveriş listesi okuyup yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m5-d1', 'a1-m5-d2', 'a1-m5-d3', 'a1-m5-d4', 'a1-m5-d5'],
  },
  {
    id: 'a1-m6',
    seviye: 'A1',
    sira: 6,
    ad: 'Boş zaman ve dün',
    amac: 'Sevdiğin şeyleri anlat ve olup biteni geçmiş zamanda söyle.',
    islev: 'Hobiler, hava durumu, geçmiş olay anlatma',
    kazanimlar: [
      'faire du/de la ve jouer à/de ayrımını yapar.',
      'Passé composé\'yi "avoir" yardımcı fiiliyle kurar.',
      'Être ile çekilen fiilleri tanır ve özneyle uyumu yapar.',
      'Hava durumunu ve mevsimleri anlatır.',
      'Hafta sonunu anlatan geçmiş zamanlı bir metin yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m6-d1', 'a1-m6-d2', 'a1-m6-d3', 'a1-m6-d4', 'a1-m6-d5'],
  },

  /* ---------------- A2 — planlanan ---------------- */
  {
    id: 'a2-m1',
    seviye: 'A2',
    sira: 1,
    ad: 'Anılar ve alışkanlıklar',
    amac: 'Geçmişte olan olayla, geçmişte süren durumu ayır.',
    islev: 'imparfait, passé composé ile karşılaştırma, çocukluk anlatma',
    kazanimlar: [
      'imparfait çekimini kurar.',
      'Olay ile betimlemeyi bağlama göre ayırır.',
      'Çocukluğunu anlatan bir metin yazar.',
      'passé composé\'de avoir ve être seçimini doğru yapar.',
      'être ile çekilen fiillerde participe passé uyumunu kurar.',
    ],
    durum: 'hazir',
    dersler: ['a2-m1-d1', 'a2-m1-d2', 'a2-m1-d3', 'a2-m1-d4'],
  },
  {
    id: 'a2-m2',
    seviye: 'A2',
    sira: 2,
    ad: 'Zamirler ve akıcılık',
    amac: 'Aynı kelimeyi tekrar etmeden konuş.',
    islev: 'COD, COI, y, en, göreli zamirler',
    kazanimlar: [
      'COD ve COI zamirlerini fiilin önüne koyar.',
      'y ve en zamirlerini yerinde kullanır.',
      'qui / que ile cümleleri birleştirir.',
    ],
    durum: 'plan',
    dersler: [],
  },
]

/** Modülü kimliğinden getirir. */
export function modulBul(id) {
  return MODULLER.find((m) => m.id === id) ?? null
}

/** Bir seviyenin modülleri, müfredat sırasında. */
export function seviyeModulleri(seviye) {
  return MODULLER.filter((m) => m.seviye === seviye).sort((a, b) => (a.sira ?? 0) - (b.sira ?? 0))
}
