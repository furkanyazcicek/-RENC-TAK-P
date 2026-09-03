/**
 * DRKOÇ — ALMANCA MÜFREDAT HARİTASI
 * ==================================================================
 *
 * Seviye → modül → ders hiyerarşisinin üst iki katmanı. Dersler ayrı
 * dosyalarda tutulur (content/almanca/dersler/); burada modülün ne
 * öğrettiği, hangi işlevi kazandırdığı ve hangi gerçek yaşam durumunu
 * kapsadığı yazar.
 *
 * SIRALAMA GEREKÇESİ: modüller yalnız gramer sırasına göre değil, İŞLEV
 * sırasına göre dizildi. Öğrenci "Akkusativ" öğrenmek için değil,
 * "kendini tanıtabilmek", "sipariş verebilmek", "yol sorabilmek" için
 * çalışır. Gramer bu işlevlerin içine yerleştirildi. Bu, Avrupa Dil
 * Çerçevesi'nin işlevsel yaklaşımı, Goethe-Institut A1 (Fit in Deutsch 1 /
 * Start Deutsch 1) sınav çerçevesi ve MEB Almanca dersi kazanımlarının
 * ortak paydasıdır.
 *
 * ALMANCAYA ÖZGÜ SIRA KARARLARI — bunlar İngilizce müfredatından
 * bilinçli olarak ayrılır:
 *
 *  1. ARTİKEL ERKEN GELİR. Almancada bir ismi artikelsiz öğrenmek, o
 *     kelimeyi hiçbir cümlede doğru kullanamamak demektir. Bu yüzden
 *     der/die/das ikinci modülün ilk dersidir; sonraya bırakılmaz.
 *  2. CÜMLE SIRASI (fiil ikinci) BİRİNCİ MODÜLDE VERİLİR. Türkçede
 *     yüklem sonda olduğu için bu kural en erken ve en çok tekrarla
 *     yerleşmelidir.
 *  3. HÂLLER (Akkusativ/Dativ) TEK SEFERDE DEĞİL, İŞLEVE YAYILARAK
 *     öğretilir: Akkusativ "sahip olmak / almak" ile (M2, M4), Dativ
 *     "yer bildirme" ile (M6) gelir. Tablo ezberi yerine kullanım.
 *  4. AYRILABİLEN FİİLLER günlük rutin modülünde verilir; çünkü
 *     aufstehen, einkaufen, anfangen zaten o bağlamın fiilleridir.
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
    amac: 'Almancanın seslerini tanı, adını harf harf söyleyebil, ilk kalıpları öğren.',
    islev: 'Alfabe, umlaut, ß, sesletim farkındalığı, sınıf içi ifadeler',
    kazanimlar: [
      'Almanca alfabeyi söyler ve adını heceler (ä, ö, ü, ß dâhil).',
      'Yazıldığı gibi okunduğunu fark eder; ei/ie, sch, ch, z, w, v seslerini ayırt eder.',
      'Sınıf/uygulama yönergelerini anlar (Hör zu, Sprich nach, Schau).',
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
    amac: '0–100 sayıları, temel renkler ve çevrendeki nesneleri adlandır.',
    islev: 'Adlandırma, sayma, "Was ist das?" kalıbı',
    kazanimlar: [
      '0–100 arası sayıları duyar ve söyler (birler-onlar ters sırasıyla).',
      'Çevresindeki nesneleri artikeliyle birlikte adlandırır.',
      'Das ist / Das sind kalıbını kullanır.',
    ],
    durum: 'plan',
    dersler: [],
  },

  /* ---------------- A1 — temel kullanıcı ---------------- */
  {
    id: 'a1-m1',
    seviye: 'A1',
    sira: 1,
    ad: 'Hallo! Kendini tanıt',
    amac: 'Selamlaş, kendini tanıt, karşındakini tanı. İlk gerçek konuşmanı kur.',
    islev: 'Selamlaşma, tanışma, kişisel bilgi verme ve sorma, du/Sie ayrımı',
    kazanimlar: [
      'Günün saatine uygun selamlaşma kalıbını seçer (Guten Morgen / Guten Tag / Guten Abend).',
      'du ve Sie arasında duruma göre doğru seçimi yapar.',
      '"sein" fiilini bütün kişilerde çeker ve kendini tanıtır.',
      'Çekimli fiili cümlenin İKİNCİ sırasına koyar.',
      'Ülke, milliyet ve dil ayrımını yapar (die Türkei / Türke-Türkin / Türkisch).',
      'W-sorularını (Wie? Wo? Woher? Was?) kurar ve cevaplar.',
      '0–100 sayılarını söyler, yaşını ve telefonunu verir.',
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
    amac: 'Aileni, arkadaşlarını ve eşyalarını anlat. Almancanın belkemiği olan artikeli kur.',
    islev: 'Betimleme, sahiplik, aile ilişkileri, cinsiyet ve çoğul',
    kazanimlar: [
      'der/die/das ayrımını yapar; cinsiyeti tahmin ettiren son ek kurallarını kullanır.',
      '"haben" ile sahiplik anlatır ve Akkusativ artikelini doğru seçer (einen/eine/ein).',
      'İyelik sözcüklerini (mein, dein, sein, ihr…) isme göre çeker.',
      'Çoğul biçimlerinin beş ana grubunu tanır ve kelimeyle birlikte öğrenir.',
      'kein ile isim, nicht ile fiil/sıfat olumsuzlar.',
      'Aile üyelerini ve kişileri sıfatlarla betimler.',
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
      'Präsens\'te düzenli fiilleri bütün kişilerde çeker.',
      'Saati hem gündelik hem resmî biçimde söyler.',
      'um / am / im edatlarını zaman türüne göre seçer.',
      'Ayrılabilen fiilleri ana cümlede ikiye ayırır (Ich stehe … auf).',
      'Kök ünlüsü değişen fiilleri (fahren → fährt) doğru çeker.',
      'Sıklık zarflarını ve zaman-yer sırasını (TeKaMoLo) doğru kurar.',
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
    islev: 'Tercih bildirme, yetenek ve zorunluluk, okul yaşamı',
    kazanimlar: [
      'Okul eşyalarını ve dersleri artikeliyle adlandırır.',
      'können / müssen / dürfen ile yetenek, zorunluluk ve izin bildirir.',
      'Cümle çerçevesini (Satzklammer) kurar: modal ikinci, mastar sonda.',
      'mögen ve "gern" ile tercihini iki farklı yoldan söyler.',
      'Akkusativ kişi zamirlerini (mich, dich, ihn…) kullanır.',
      'Okulunu anlatan bağlantılı bir metin yazar.',
    ],
    durum: 'hazir',
    dersler: ['a1-m4-d1', 'a1-m4-d2', 'a1-m4-d3', 'a1-m4-d4', 'a1-m4-d5'],
  },
  {
    id: 'a1-m5',
    seviye: 'A1',
    sira: 5,
    ad: 'Yemek ve alışveriş',
    amac: 'Sipariş ver, fiyat sor, alışveriş yap.',
    islev: 'İstek bildirme, miktar, fiyat sorma, nezaket',
    kazanimlar: [
      'Yiyecek ve içecekleri artikeli ve çoğuluyla adlandırır.',
      '"es gibt" yapısını Akkusativ ile doğru kurar.',
      'Miktar ifadelerini kullanır (ein Kilo, eine Flasche, 200 Gramm).',
      'Fiyat sorar ve Euro/Cent okur.',
      '"Ich hätte gern / Ich möchte" ile nazikçe sipariş verir.',
      'Emir kipini nezaket biçiminde kurar (Nehmen Sie… / Nimm…).',
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
    islev: 'Yer bildirme, yön tarifi, Dativ ve Akkusativ edatları',
    kazanimlar: [
      'Şehirdeki yerleri artikeliyle adlandırır.',
      '"Wo?" sorusuna Dativ ile cevap verir (in der Stadt, am Bahnhof).',
      '"Wohin?" sorusunda nach / zu / in ayrımını yapar.',
      'Konum edatlarını kullanır (neben, zwischen, gegenüber, hinter).',
      'Nazikçe yol sorar ve adım adım yol tarif eder.',
      'Ulaşım araçlarını "mit dem/der" kalıbıyla söyler.',
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
    kazanimlar: [
      'Perfekt kurar ve haben/sein seçimini doğru yapar.',
      'Partizip II biçimlerini düzenli ve düzensiz fiillerde üretir.',
      'sein / haben / Modalverben için Präteritum kullanır.',
    ],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'a2-m2',
    seviye: 'A2',
    sira: 2,
    ad: 'Plan, randevu ve gelecek',
    amac: 'Planını ve niyetini anlat, randevu al, teklif et.',
    islev: 'Plan yapma, öneri, randevu',
    kazanimlar: [
      'Gelecek için Präsens + zaman ifadesi ve "werden" kullanımını ayırt eder.',
      'Nazik teklif ve öneri kalıplarını kurar (Wollen wir…? Sollen wir…?).',
      'Randevu alır ve erteler.',
    ],
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
    kazanimlar: [
      'Vücut ve rahatsızlık kelimelerini kullanır.',
      '"Mir tut … weh" kalıbını Dativ ile kurar.',
      'sollen ile tavsiye verir.',
    ],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'a2-m4',
    seviye: 'A2',
    sira: 4,
    ad: 'Ev, eşya ve karşılaştırma',
    amac: 'Evini anlat, eşya tarif et, karşılaştırma yap.',
    islev: 'Betimleme, karşılaştırma, tercih',
    kazanimlar: [
      'Sıfat çekimini belirli ve belirsiz artikelle kurar.',
      'Karşılaştırma ve üstünlük derecelerini kullanır (größer als, am größten).',
      'Wechselpräpositionen\'ı hareket/duruş ayrımıyla kullanır.',
    ],
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
    kazanimlar: [
      'Görüş kalıplarını kullanır (Meiner Meinung nach…).',
      'weil / obwohl / deshalb ile gerekçe ve sonuç kurar.',
      'Yan cümlede fiil sırasını hatasız uygular.',
    ],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'b1-m2',
    seviye: 'B1',
    sira: 2,
    ad: 'Koşullar ve dilekler',
    amac: '"Olsaydı ne olurdu" düşüncesini Almanca kur.',
    islev: 'Koşul, olasılık, nazik ricalar',
    kazanimlar: [
      'Konjunktiv II ile dilek ve nazik rica kurar (Ich würde…, Könnten Sie…).',
      'wenn cümlelerini gerçek ve gerçek dışı ayrımıyla kullanır.',
    ],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'b1-m3',
    seviye: 'B1',
    sira: 3,
    ad: 'Problem çözme ve şikâyet',
    amac: 'Bir sorunu anlat, çözüm iste, nazikçe şikâyet et.',
    islev: 'Sorun bildirme, çözüm önerme, resmî/gündelik kayıt',
    kazanimlar: [
      'Nezaket düzeyini bağlama göre ayarlar.',
      'Resmî e-posta ve dilekçe yapısını kurar.',
    ],
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
    kazanimlar: ['Argüman kurar ve karşı argümanı ele alır.', 'Bağlaç ve bağlayıcıları çeşitlendirir.'],
    durum: 'plan',
    dersler: [],
  },
  {
    id: 'b2-m2',
    seviye: 'B2',
    sira: 2,
    ad: 'Doğallık ve eşdizim',
    amac: 'Doğru ama yapay cümleden doğal cümleye geç.',
    islev: 'Kollokasyon, deyim, üslup',
    kazanimlar: [
      'Fiil-isim ikililerini (Feste Verbindungen) doğru seçer.',
      'Yapay çeviri izlerini kendisi bulur.',
    ],
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
    kazanimlar: ['Edilgen yapıyı (Passiv) doğal kullanır.', 'Nominal üslubu tanır ve çözer.'],
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
    kazanimlar: ['Okuyucuya göre üslup seçer.', 'Modalpartikeln (doch, mal, ja) ile ton kurar.'],
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
    kazanimlar: ['İnce anlam farklarını hem anlar hem üretir.', 'Bölgesel farkları (DE/AT/CH) tanır.'],
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
