/**
 * DRKOÇ — İNGİLİZCE MÜFREDAT HARİTASI
 * ==================================================================
 *
 * Seviye → modül → ders hiyerarşisinin üst iki katmanı. Dersler ayrı
 * dosyalarda tutulur (content/ingilizce/dersler/); burada modülün ne
 * öğrettiği, hangi işlevi kazandırdığı ve hangi gerçek yaşam durumunu
 * kapsadığı yazar.
 *
 * SIRALAMA GEREKÇESİ: modüller yalnız gramer sırasına göre değil, İŞLEV
 * sırasına göre dizildi. Öğrenci "present simple" öğrenmek için değil,
 * "kendini tanıtabilmek", "yol sorabilmek", "fikrini söyleyebilmek" için
 * çalışır. Gramer bu işlevlerin içine yerleştirildi. Bu, Avrupa Dil
 * Çerçevesi'nin işlevsel yaklaşımıyla da MEB kazanım listelerinin ortak
 * paydasıdır.
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
    amac: 'İngilizcenin seslerini tanı, adını harf harf söyleyebil, ilk 40 kelimeyi öğren.',
    islev: 'Alfabe, sesletim farkındalığı, sınıf içi ifadeler',
    kazanimlar: [
      'İngilizce alfabeyi söyler ve adını heceler.',
      'Yazıldığı gibi okunmadığını fark eder; ilk ses farklarını ayırt eder.',
      'Sınıf/uygulama yönergelerini anlar (Listen, Repeat, Look).',
    ],
    durum: 'hazir',
    dersler: ['prea1-m1-d1'],
  },
  {
    id: 'prea1-m2',
    seviye: 'Pre-A1',
    sira: 2,
    ad: 'Sayılar, renkler ve nesneler',
    amac: '0–100 sayıları, temel renkler ve çevrendeki nesneleri adlandır.',
    islev: 'Adlandırma, sayma, "What is this?" kalıbı',
    kazanimlar: [
      '0–100 arası sayıları duyar ve söyler.',
      'Çevresindeki nesneleri İngilizce adlandırır.',
      'This is / These are kalıbını kullanır.',
    ],
    durum: 'plan',
    dersler: [],
  },

  /* ---------------- A1 — temel kullanıcı ---------------- */
  {
    id: 'a1-m1',
    seviye: 'A1',
    sira: 1,
    ad: 'Merhaba: kendini tanıt',
    amac: 'Selamlaş, kendini tanıt, karşındakini tanı. İlk gerçek konuşmanı kur.',
    islev: 'Selamlaşma, tanışma, kişisel bilgi verme ve sorma',
    kazanimlar: [
      'Günün saatine uygun selamlaşma kalıbını seçer.',
      'am / is / are ile kendini ve başkasını tanıtır.',
      'Kişi zamirlerini doğru kullanır.',
      'Ülke ve milliyet ayrımını yapar (Turkey / Turkish).',
      'Where are you from? sorusunu kurar ve cevaplar.',
      'Kendini tanıtan kısa bir metin yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m1-d1', 'a1-m1-d2', 'a1-m1-d3', 'a1-m1-d4', 'a1-m1-d5', 'a1-m1-d6'],
  },
  {
    id: 'a1-m2',
    seviye: 'A1',
    sira: 2,
    ad: 'Ailem ve çevrem',
    amac: 'Aileni, arkadaşlarını ve eşyalarını anlat.',
    islev: 'Betimleme, sahiplik, aile ilişkileri',
    kazanimlar: [
      'have got / has got ile sahiplik anlatır.',
      'İyelik sıfatlarını (my, your, his…) kullanır.',
      'Aile üyelerini ve fiziksel özellikleri betimler.',
      'be ve have got arasında bağlama göre seçim yapar.',
      'Sıfatları doğru sırayla dizer.',
      'Ailesini tanıtan kısa bir e-posta yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m2-d1', 'a1-m2-d2', 'a1-m2-d3', 'a1-m2-d4', 'a1-m2-d5'],
  },
  {
    id: 'a1-m3',
    seviye: 'A1',
    sira: 3,
    ad: 'Günlük rutin',
    amac: 'Bir günü baştan sona anlat: kalkış, okul, yemek, uyku.',
    islev: 'Alışkanlık anlatma, saat söyleme, sıklık',
    kazanimlar: [
      'Present Simple ile rutinini anlatır.',
      'Alışkanlık ile şu an olan eylemi ayırt eder.',
      'Üçüncü tekil -s ekini yazımda ve seste doğru üretir.',
      'do / does ile soru ve olumsuz kurar.',
      'Saati söyler, at/in/on edatlarını doğru seçer.',
      'Sıklık zarflarını cümlede doğru yere koyar.',
      'Bir günü sırayla anlatan bağlantılı bir metin yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m3-d1', 'a1-m3-d2', 'a1-m3-d3', 'a1-m3-d4', 'a1-m3-d5', 'a1-m3-d6'],
  },
  {
    id: 'a1-m4',
    seviye: 'A1',
    sira: 4,
    ad: 'Okul ve derslerim',
    amac: 'Okulunu, derslerini ve sevdiğin konuları anlat.',
    islev: 'Tercih bildirme, karşılaştırma, okul yaşamı',
    kazanimlar: [
      'Okul eşyalarını ve dersleri adlandırır.',
      'subject / lesson / classroom ayrımını yapar.',
      'like/love/hate + -ing yapısını kullanır.',
      'can / can\'t ile yetenek, izin ve rica bildirir.',
      'Okulunu anlatan bağlantılı bir metin yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m4-d1', 'a1-m4-d2', 'a1-m4-d3', 'a1-m4-d4'],
  },
  {
    id: 'a1-m5',
    seviye: 'A1',
    sira: 5,
    ad: 'Yemek ve alışveriş',
    amac: 'Sipariş ver, fiyat sor, alışveriş yap.',
    islev: 'İstek bildirme, fiyat sorma, sayılabilir/sayılamaz',
    kazanimlar: [
      'Sayılabilen ve sayılamayan isimleri ayırır.',
      'a/an, çoğul eki ve miktar ifadelerini doğru seçer.',
      'some / any ayrımını cümle türüne göre yapar.',
      'there is / there are ile "var / yok" cümlesi kurar.',
      'Sipariş verir, fiyat sorar, hesabı ister.',
      'Yemek alışkanlıklarını anlatan bir metin yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m5-d1', 'a1-m5-d2', 'a1-m5-d3', 'a1-m5-d4', 'a1-m5-d5'],
  },
  {
    id: 'a1-m6',
    seviye: 'A1',
    sira: 6,
    ad: 'Şehir, yol ve yön',
    amac: 'Yol sor, tarif et, şehirde kaybolma.',
    islev: 'Yer bildirme, yön tarifi, edatlar',
    kazanimlar: [
      'Şehirdeki yerleri adlandırır.',
      'there is / there are ile çevresini anlatır.',
      'in / on / at yer edatlarını mekân türüne göre seçer.',
      'next to, opposite, between ile konum bildirir.',
      'Nazikçe yol sorar ve adım adım yol tarif eder.',
      'Yol tarifi dinlemesinde adımları doğru sırayla çıkarır.',
    ],
    durum: 'hazir',
    dersler: ['a1-m6-d1', 'a1-m6-d2', 'a1-m6-d3', 'a1-m6-d4', 'a1-m6-d5'],
  },

  /* ---------------- A2 ---------------- */
  {
    id: 'a2-m1',
    seviye: 'A2',
    sira: 1,
    ad: 'Geçmişi anlatmak',
    amac: 'Dün, geçen hafta, çocukluğun — olan bitenden söz et.',
    islev: 'Anlatı kurma, olay sıralama',
    kazanimlar: ['Past Simple düzenli ve düzensiz fiilleri çeker.', 'Bir olayı zaman sırasıyla anlatır.'],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'a2-m2',
    seviye: 'A2',
    sira: 2,
    ad: 'Plan ve gelecek',
    amac: 'Planını, niyetini ve tahminini ayırt ederek anlat.',
    islev: 'Plan yapma, öneri, randevu',
    kazanimlar: ['going to / will farkını kullanır.', 'Öneri ve teklif kalıplarını kurar.'],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'a2-m3',
    seviye: 'A2',
    sira: 3,
    ad: 'Sağlık ve beden',
    amac: 'Rahatsızlığını anlat, tavsiye al ve ver.',
    islev: 'Şikâyet bildirme, tavsiye verme',
    kazanimlar: ['should / shouldn\'t ile tavsiye verir.', 'Vücut ve rahatsızlık kelimelerini kullanır.'],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'a2-m4',
    seviye: 'A2',
    sira: 4,
    ad: 'Seyahat ve deneyim',
    amac: 'Gittiğin yerleri, yaptığın şeyleri anlat.',
    islev: 'Deneyim paylaşma, karşılaştırma',
    kazanimlar: ['Present Perfect ile deneyim anlatır.', 'Karşılaştırma ve üstünlük yapıları kurar.'],
    durum: 'plan',
    dersler: [],
  },

  /* ---------------- B1 ---------------- */
  {
    id: 'b1-m1',
    seviye: 'B1',
    sira: 1,
    ad: 'Görüş bildirme',
    amac: 'Fikrini söyle, gerekçelendir, katıl ya da katılma.',
    islev: 'Görüş, gerekçe, nezaketle karşı çıkma',
    kazanimlar: ['Görüş kalıplarını kullanır.', 'because / although ile gerekçe kurar.'],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'b1-m2',
    seviye: 'B1',
    sira: 2,
    ad: 'Koşullar ve olasılıklar',
    amac: '"Olsaydı ne olurdu" düşüncesini İngilizce kur.',
    islev: 'Koşul, olasılık, varsayım',
    kazanimlar: ['Koşul cümlelerinin ilk iki tipini kurar.'],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'b1-m3',
    seviye: 'B1',
    sira: 3,
    ad: 'Problem çözme ve şikâyet',
    amac: 'Bir sorunu anlat, çözüm iste, nazikçe şikâyet et.',
    islev: 'Sorun bildirme, çözüm önerme, kayıt (resmî/gündelik)',
    kazanimlar: ['Nezaket düzeyini bağlama göre ayarlar.'],
    durum: 'plan',
    dersler: [],
  },

  /* ---------------- B2 ---------------- */
  {
    id: 'b2-m1',
    seviye: 'B2',
    sira: 1,
    ad: 'Tartışma ve savunma',
    amac: 'Bir görüşün artı ve eksisini vererek savun.',
    islev: 'Tartışma, karşı görüş, örnekle destekleme',
    kazanimlar: ['Argüman kurar ve karşı argümanı ele alır.'],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'b2-m2',
    seviye: 'B2',
    sira: 2,
    ad: 'Doğallık ve eşdizim',
    amac: 'Doğru ama yapay cümleden doğal cümleye geç.',
    islev: 'Collocation, deyim, üslup',
    kazanimlar: ['Kelimeyi doğru eşdizimiyle seçer.', 'Yapay çeviri izlerini kendisi bulur.'],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'b2-m3',
    seviye: 'B2',
    sira: 3,
    ad: 'Sunum ve rapor',
    amac: 'Bilgi aktaran düzenli bir metin ve sunum kur.',
    islev: 'Sunum dili, rapor yapısı, veri anlatımı',
    kazanimlar: ['Edilgen yapıyı ve dolaylı anlatımı doğal kullanır.'],
    durum: 'plan',
    dersler: [],
  },

  /* ---------------- C1 ---------------- */
  {
    id: 'c1-m1',
    seviye: 'C1',
    sira: 1,
    ad: 'Akademik okuma ve özetleme',
    amac: 'Uzun akademik metni oku, özetle, eleştir.',
    islev: 'Akademik dil, özetleme, eleştirel okuma',
    kazanimlar: ['Metnin örtük anlamını ve yazarın tutumunu tanır.'],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'c1-m2',
    seviye: 'C1',
    sira: 2,
    ad: 'Üslup, nüans ve kayıt',
    amac: 'Aynı şeyi resmî, gündelik ve akademik biçimde söyle.',
    islev: 'Üslup yönetimi, ima, nezaket derecesi',
    kazanimlar: ['Okuyucuya göre üslup seçer.'],
    durum: 'plan',
    dersler: [],
  },

  /* ---------------- C2 ---------------- */
  {
    id: 'c2-m1',
    seviye: 'C2',
    sira: 1,
    ad: 'İnce anlam ve kültürel bağlam',
    amac: 'Deyim, ima, mizah ve kültürel göndermeleri çöz.',
    islev: 'Nüans, deyim, kültürler arası iletişim',
    kazanimlar: ['İnce anlam farklarını hem anlar hem üretir.'],
    durum: 'plan',
    dersler: [],
  },
]

/** Bir seviyenin modülleri (sıralı). */
export function seviyeModulleri(seviye) {
  return MODULLER.filter((m) => m.seviye === seviye).sort((a, b) => a.sira - b.sira)
}

/** Modülü koddan getirir. */
export function modulBul(id) {
  return MODULLER.find((m) => m.id === id) ?? null
}

/** İçeriği hazır modüller — arayüzde "şimdi çalışılabilir" olanlar. */
export function hazirModuller() {
  return MODULLER.filter((m) => m.durum === 'hazir')
}
