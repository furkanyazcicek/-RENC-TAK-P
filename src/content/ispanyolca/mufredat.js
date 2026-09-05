/**
 * DRKOÇ — İSPANYOLCA MÜFREDAT HARİTASI
 * ==================================================================
 *
 * Seviye → modül → ders hiyerarşisinin üst iki katmanı. Dersler ayrı
 * dosyalarda tutulur (content/ispanyolca/dersler/); burada modülün ne
 * öğrettiği, hangi işlevi kazandırdığı ve hangi gerçek yaşam durumunu
 * kapsadığı yazar.
 *
 * SIRALAMA GEREKÇESİ: modüller yalnız gramer sırasına göre değil, İŞLEV
 * sırasına göre dizildi. Öğrenci "subjuntivo" öğrenmek için değil,
 * "kendini tanıtabilmek", "sipariş verebilmek", "yol sorabilmek" için
 * çalışır. Gramer bu işlevlerin içine yerleştirildi. Bu, Avrupa Dil
 * Çerçevesi'nin işlevsel yaklaşımı, DELE A1 sınav çerçevesi ve Instituto
 * Cervantes müfredatının ortak paydasıdır.
 *
 * İSPANYOLCAYA ÖZGÜ SIRA KARARLARI — bunlar Fransızca, Almanca ve
 * İngilizce müfredatlarından bilinçli olarak ayrılır:
 *
 *  1. SER / ESTAR AYRIMI İKİYE BÖLÜNDÜ. Türk öğrencinin en büyük engeli
 *     budur ve tek derste verilemez. "ser" birinci modülde kimlik için,
 *     "estar" dördüncü modülde yer için verilir; ikisinin karşılaştırması
 *     ayrı bir derste yapılır. Baştan birlikte verilirse öğrenci ikisini
 *     de öğrenemez.
 *  2. GUSTAR KENDİ DERSİNİ ALIR (M5). Bu yapı Türkçenin tam tersine
 *     çalışır: sevilen şey özne olur. Bir kalıp gibi geçiştirilirse
 *     öğrenci her cümlede yeniden yanılır.
 *  3. ÖZNENİN DÜŞMESİ BİRİNCİ MODÜLDE, AVANTAJ OLARAK verilir. Türkçede
 *     de özne düşer; bu benzerlik erken söylenirse öğrencinin özgüveni
 *     artar ve İngilizceden gelen "yo" fazlalığı baştan engellenir.
 *  4. ÇİFT OLUMSUZLUK KURAL OLARAK öğretilir (M2). Fransızcada yanlış
 *     olan bu yapı İspanyolcada doğrudur ve Türkçeyle aynı mantıktadır.
 *  5. GEÇMİŞ ZAMAN A1'in SONUNDADIR (M6) ve yalnız indefinido verilir.
 *     Imperfecto ile karşılaştırma A2 konusudur; ikisi birlikte verilirse
 *     hiçbiri oturmaz.
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
    amac: 'İspanyolcanın seslerini tanı, adını harf harf söyleyebil, ilk kalıpları öğren.',
    islev: 'Alfabe, ñ ve ll sesleri, vurgu kuralları, sınıf içi ifadeler',
    kazanimlar: [
      'İspanyolcanın yazıldığı gibi okunduğunu fark eder ve okuma güvenini kazanır.',
      'Türkçede olmayan üç sesi tanır: gırtlaktan "j", çift "rr", peltek "z/c".',
      'ñ, ll ve ch harflerinin seslerini ayırt eder.',
      'Vurgunun nereye düştüğünü kuralla bulur ve aksanın ne işe yaradığını bilir.',
      'Sınıf/uygulama yönergelerini anlar (Escucha, Repite, Mira, Abre el libro).',
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
    islev: 'Adlandırma, sayma, "¿Qué es esto?" kalıbı',
    kazanimlar: [
      '0–20 arası sayıları duyar ve söyler.',
      'Çevresindeki nesneleri artikeliyle birlikte adlandırır.',
      'Es / Son kalıbını kullanır.',
    ],
    durum: 'plan',
    dersler: [],
  },

  /* ---------------- A1 — temel kullanıcı ---------------- */
  {
    id: 'a1-m1',
    seviye: 'A1',
    sira: 1,
    ad: '¡Hola! Kendini tanıt',
    amac: 'Selamlaş, kendini tanıt, karşındakini tanı. İlk gerçek konuşmanı kur.',
    islev: 'Selamlaşma, tanışma, kişisel bilgi verme ve sorma, tú/usted ayrımı',
    kazanimlar: [
      'Günün saatine uygun selamlaşma kalıbını seçer (buenos días / buenas tardes / buenas noches).',
      'tú ve usted arasında duruma göre doğru seçimi yapar.',
      '"ser" fiilini bütün kişilerde çeker ve özne zamirini GEREKSİZ yere kullanmaz.',
      'llamarse fiiliyle adını söyler ve sorar; adını İspanyol alfabesiyle heceler.',
      'Ülke, milliyet ve dil ayrımını yapar (Turquía / turco-turca / el turco).',
      '0–100 sayılarını söyler; yaşını "tener" ile verir.',
      'Soruyu ters işaretle yazar ve soru kelimelerini aksanıyla kullanır.',
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
    amac: 'Aileni, arkadaşlarını ve eşyalarını anlat. İspanyolcanın belkemiği olan cinsiyeti kur.',
    islev: 'Betimleme, sahiplik, aile ilişkileri, cinsiyet ve çoğul, olumsuzluk',
    kazanimlar: [
      'el/la/los/las ayrımını yapar; cinsiyeti tahmin ettiren son ek kurallarını kullanır.',
      'un/una/unos/unas belirsiz artikellerini ve "hay" kalıbını kullanır.',
      '"tener" ile sahiplik anlatır ve aile üyelerini tanıtır.',
      'İyelik sıfatlarını sayıya göre çeker (mi/mis, tu/tus, su/sus).',
      'Sıfatı ismin cinsine ve sayısına uydurur; sıfatın YERİNİ doğru seçer.',
      'Tek "no" ile olumsuz cümle kurar ve çift olumsuzluğun doğru olduğunu bilir.',
      'Ailesini tanıtan kısa bir e-posta yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m2-d1', 'a1-m2-d2', 'a1-m2-d3', 'a1-m2-d4', 'a1-m2-d5', 'a1-m2-d6'],
  },
  {
    id: 'a1-m3',
    seviye: 'A1',
    sira: 3,
    ad: 'Mi día — Günüm',
    amac: 'Bir günü baştan sona anlat: kalkış, okul, yemek, uyku.',
    islev: 'Alışkanlık anlatma, saat söyleme, sıklık, günlük akış',
    kazanimlar: [
      '-ar, -er ve -ir ile biten düzenli fiilleri altı kişide de çeker.',
      'Saati sorar ve söyler; günlük programını saatlerle anlatır.',
      'Dönüşlü fiillerle (levantarse, acostarse) rutinini anlatır.',
      'ir, hacer ve tener düzensiz fiillerini doğru çeker.',
      'Sıklık zarflarını ve gün adlarını doğru yerde ve doğru yazımla kullanır.',
      'Bir gününü anlatan bağlantılı bir metin yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m3-d1', 'a1-m3-d2', 'a1-m3-d3', 'a1-m3-d4', 'a1-m3-d5', 'a1-m3-d6'],
  },
  {
    id: 'a1-m4',
    seviye: 'A1',
    sira: 4,
    ad: 'En la ciudad — Şehirde',
    amac: 'Şehirde yolunu bul: yer sor, tarif et, ulaşımı kullan.',
    islev: 'Yer bildirme, ser/estar ayrımı, yol tarifi, ulaşım, yakın gelecek',
    kazanimlar: [
      '"estar" fiilini çeker ve yer bildirmede kullanır.',
      'ser ile estar arasındaki farkı bağlama göre seçer.',
      'Edat ile artikelin kaynaşmasını (al, del) kurar.',
      'ir a + mastar ile planını anlatır.',
      'Ulaşım araçlarını ve bilet alma kalıplarını kullanır.',
      'Emir kipiyle yol tarif eder.',
    ],
    durum: 'hazir',
    dersler: ['a1-m4-d1', 'a1-m4-d2', 'a1-m4-d3', 'a1-m4-d4', 'a1-m4-d5'],
  },
  {
    id: 'a1-m5',
    seviye: 'A1',
    sira: 5,
    ad: 'Comida y compras — Yemek ve alışveriş',
    amac: 'Sipariş ver, alışveriş yap, neyi sevdiğini söyle.',
    islev: 'Beğeni bildirme, sipariş verme, miktar, fiyat sorma',
    kazanimlar: [
      '"gustar" yapısını ters kuruluşuyla birlikte kurar ve fiili özneye uydurur.',
      '"querer" ve "quisiera" ile kibar istek kurar; restoranda sipariş verir.',
      'muy ile mucho arasındaki farkı doğru seçer.',
      'Miktar ifadelerini kullanır (un kilo de, un poco de).',
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
    ad: 'Tiempo libre y ayer — Boş zaman ve dün',
    amac: 'Sevdiğin şeyleri anlat ve olup biteni geçmiş zamanda söyle.',
    islev: 'Hobiler, hava durumu, geçmiş olay anlatma',
    kazanimlar: [
      'jugar a, tocar ve hacer ayrımını yapar.',
      'Pretérito indefinido\'yu düzenli fiillerde kurar.',
      'En sık kullanılan düzensiz geçmiş biçimlerini tanır (fui, hice, tuve, estuve).',
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
    islev: 'imperfecto, indefinido ile karşılaştırma, çocukluk anlatma',
    kazanimlar: [
      'Imperfecto çekimini kurar.',
      'Olay ile betimlemeyi bağlama göre ayırır.',
      'Çocukluğunu anlatan bir metin yazar.',
      'Indefinido çekimini düzenli ve düzensiz fiillerde kurar.',
      'Vurgu işaretinin zamanı belirlediğini fark eder.',
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
    islev: 'Nesne zamirleri, çift zamir, se le kalıbı',
    kazanimlar: [
      'Doğrudan ve dolaylı nesne zamirlerini ayırır.',
      'İki zamiri bir arada kullanır (se lo).',
      'Zamiri mastara ve gerundio\'ya bitişik yazar.',
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
