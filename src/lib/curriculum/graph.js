/**
 * MÜFREDAT BAĞIMLILIK GRAFİĞİ — tek kaynak.
 *
 * NEDEN VAR?
 * ----------
 * `library_subjects` / `library_topics` tabloları müfredatı DÜZ BİR LİSTE
 * olarak tutar: hangi derste hangi konular var, o kadar. Bu liste "öğrenci
 * bu konuyu ŞU AN öğrenebilir mi?" sorusunu cevaplayamaz. Fotosentez eksik
 * olabilir ama öğrenci daha Hücre'yi bilmiyorsa fotosentez önermek kötü
 * koçluktur.
 *
 * Bu dosya o eksik bilgiyi taşır: her konunun ÖN KOŞULLARI, sınav ağırlığı,
 * tahmini öğrenme süresi ve tekrar ihtiyacı.
 *
 * VERİTABANINA DEĞİL KODA YAZILMASININ SEBEBİ
 * -------------------------------------------
 * Bağımlılıklar öğrenciye göre değişmez; müfredatın kendi doğasıdır. Ayrıca
 * öğretmen panelinde "ön koşul" diye bir ekran yok ve olsaydı bile her
 * kurumun bunu baştan girmesi gerekirdi. Kodda durunca sürümlenebilir,
 * gözden geçirilebilir ve migration gerektirmez. Öğretmen Kütüphane'den yeni
 * bir konu eklerse grafik onu tanımaz — bu bir hata değildir: tanınmayan
 * konu "ön koşulu bilinmiyor" sayılır ve ENGELLENMEZ (bkz. readiness.js).
 *
 * KONU ADLARI
 * -----------
 * Buradaki adlar `supabase/seed_library_curriculum*.sql` dosyalarındaki
 * resmî adlarla BİREBİR aynıdır. Öğrencinin günlük kayıtta yazdığı serbest
 * metin ("fotosentez", "obeb okek") `readiness.js` içindeki eşleştirici ve
 * aşağıdaki `alias` alanları sayesinde yine de doğru düğüme bağlanır.
 *
 * DİZİ SIRASI = VARSAYILAN ÖĞRENME YOLU
 * -------------------------------------
 * Her dersin dizisi topolojik olarak sıralıdır (ön koşul her zaman önce
 * gelir). Kütüphanedeki `order_index` ile birebir aynı olmak zorunda
 * değildir; oradaki sıra ünite sırası, buradaki sıra ÖĞRENME sırasıdır.
 * `pre` yalnızca GERÇEK kavramsal ön koşulları içerir — sırf "müfredatta
 * önce geliyor" diye bağ kurulmaz, yoksa sistem öğrenciyi gereksiz yere
 * geriye döndürür (bkz. spesifikasyon §8 ve §17).
 *
 * ALAN AÇIKLAMALARI
 *   name  konu adı (resmî)
 *   pre   ön koşullar. Üç biçim:
 *           'Konu'                  → aynı sınav türü, aynı ders
 *           'Ders > Konu'           → aynı sınav türü, başka ders
 *           'TYT > Ders > Konu'     → başka sınav türü (TYT → AYT geçişi)
 *   w     sınav ağırlığı / önemi (1-5)
 *   h     tahmini ilk öğrenme süresi (saat)
 *   d     zorluk (1-5) — verilmezse süreden tahmin edilmez, null kalır
 *   rep   tekrar gereksinimi: 'düşük' | 'orta' | 'yüksek' (varsayılan 'orta')
 *   alias öğrencinin yazabileceği yaygın kısa adlar
 */

/** Tek satırlık düğüm üreticisi — dosyanın okunabilir kalması için. */
const t = (name, pre = [], w = 3, h = 4, extra = {}) => ({
  name,
  pre,
  w,
  h,
  d: null,
  rep: 'orta',
  alias: [],
  ...extra,
})

/* ==================================================================
   LGS
   ================================================================== */

const LGS = {
  Matematik: [
    t('Çarpanlar ve Katlar', [], 4, 4, { d: 2, alias: ['EBOB EKOK', 'Asal Çarpanlar'] }),
    t('Üslü İfadeler', ['Çarpanlar ve Katlar'], 4, 3, { d: 2 }),
    t('Kareköklü İfadeler', ['Üslü İfadeler'], 4, 4, { d: 3 }),
    t('Veri Analizi', [], 3, 2, { d: 1 }),
    t('Olasılık', ['Veri Analizi'], 3, 3, { d: 2 }),
    t('Cebirsel İfadeler ve Özdeşlikler', ['Çarpanlar ve Katlar', 'Üslü İfadeler'], 5, 5, {
      d: 3,
      rep: 'yüksek',
      alias: ['Özdeşlikler', 'Cebirsel İfadeler'],
    }),
    t('Doğrusal Denklemler', ['Cebirsel İfadeler ve Özdeşlikler'], 5, 5, { d: 3, rep: 'yüksek' }),
    t('Eşitsizlikler', ['Doğrusal Denklemler'], 3, 3, { d: 3 }),
  ],

  Geometri: [
    t('Üçgenler', ['Matematik > Kareköklü İfadeler'], 4, 5, { d: 3, rep: 'yüksek' }),
    t('Eşlik ve Benzerlik', ['Üçgenler'], 4, 4, { d: 3 }),
    t('Dönüşüm Geometrisi', ['Üçgenler'], 3, 3, { d: 2 }),
    t('Geometrik Cisimler', ['Üçgenler', 'Eşlik ve Benzerlik'], 3, 4, { d: 3 }),
  ],

  Türkçe: [
    t('Sözcükte Anlam', [], 5, 3, { d: 2 }),
    t('Cümlede Anlam', ['Sözcükte Anlam'], 5, 3, { d: 2 }),
    t('Paragrafta Anlam', ['Cümlede Anlam'], 5, 10, {
      d: 3,
      rep: 'yüksek',
      alias: ['Paragraf'],
    }),
    t('Söz Sanatları', ['Sözcükte Anlam'], 2, 2, { d: 2 }),
    t('Fiilimsiler', [], 4, 3, { d: 3, alias: ['Fiilimsi'] }),
    t('Cümlenin Öğeleri', ['Fiilimsiler'], 4, 4, { d: 3 }),
    t('Fiilde Çatı', ['Cümlenin Öğeleri'], 3, 3, { d: 3 }),
    t('Yazım Kuralları', [], 3, 3, { d: 2 }),
    t('Noktalama İşaretleri', ['Yazım Kuralları'], 3, 2, { d: 1 }),
    t('Metin Türleri', ['Paragrafta Anlam'], 2, 2, { d: 1 }),
  ],

  'Fen Bilimleri': [
    t('Mevsimler ve İklim', [], 3, 3, { d: 2 }),
    t('DNA ve Genetik Kod', [], 4, 4, { d: 3, rep: 'yüksek', alias: ['DNA', 'Genetik'] }),
    t('Basınç', [], 4, 4, { d: 3 }),
    t('Madde ve Endüstri', [], 4, 5, { d: 3, alias: ['Periyodik Sistem', 'Asit Baz'] }),
    t('Basit Makineler', [], 3, 3, { d: 2 }),
    t('Enerji Dönüşümleri ve Çevre Bilimi', ['DNA ve Genetik Kod'], 3, 4, {
      d: 3,
      alias: ['Fotosentez', 'Besin Zinciri'],
    }),
    t('Elektrik Yükleri ve Elektrik Enerjisi', [], 4, 4, { d: 3, alias: ['Elektrik'] }),
  ],

  'T.C. İnkılap Tarihi ve Atatürkçülük': [
    t('Bir Kahraman Doğuyor', [], 3, 3, { d: 1, rep: 'yüksek' }),
    t('Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar', ['Bir Kahraman Doğuyor'], 4, 4, {
      d: 2,
      rep: 'yüksek',
      alias: ['Milli Uyanış'],
    }),
    t(
      'Milli Bir Destan: Ya İstiklal Ya Ölüm',
      ['Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar'],
      4,
      4,
      { d: 2, rep: 'yüksek', alias: ['Milli Bir Destan', 'Kurtuluş Savaşı'] }
    ),
    t('Atatürkçülük ve Çağdaşlaşan Türkiye', ['Milli Bir Destan: Ya İstiklal Ya Ölüm'], 4, 4, {
      d: 2,
      rep: 'yüksek',
      alias: ['Atatürkçülük', 'İnkılaplar'],
    }),
    t('Demokratikleşme Çabaları', ['Atatürkçülük ve Çağdaşlaşan Türkiye'], 3, 3, { d: 2 }),
    t('Atatürk Dönemi Türk Dış Politikası', ['Atatürkçülük ve Çağdaşlaşan Türkiye'], 3, 3, {
      d: 2,
      alias: ['Dış Politika'],
    }),
    t("Atatürk'ün Ölümü ve Sonrası", ['Atatürk Dönemi Türk Dış Politikası'], 2, 2, { d: 1 }),
  ],

  İngilizce: [
    t('Friendship', [], 3, 2, { d: 2 }),
    t('Teen Life', [], 3, 2, { d: 2 }),
    t('In the Kitchen', [], 3, 2, { d: 2 }),
    t('On the Phone', [], 3, 2, { d: 2 }),
    t('The Internet', [], 3, 2, { d: 2 }),
    t('Adventures', [], 3, 2, { d: 2 }),
    t('Tourism', [], 3, 2, { d: 2 }),
    t('Chores', [], 3, 2, { d: 2 }),
    t('Science', [], 3, 2, { d: 2 }),
    t('Natural Forces', [], 3, 2, { d: 2 }),
  ],

  'Din Kültürü ve Ahlak Bilgisi': [
    t('Kader İnancı', [], 3, 3, { d: 2, rep: 'yüksek' }),
    t('Zekat ve Sadaka', [], 3, 2, { d: 1 }),
    t('Din ve Hayat', [], 3, 2, { d: 1 }),
    t("Hz. Muhammed'in Örnekliği", [], 3, 2, { d: 1 }),
    t("Kur'an-ı Kerim ve Özellikleri", [], 3, 2, { d: 1 }),
  ],
}

/* ==================================================================
   TYT
   ================================================================== */

const TYT = {
  Matematik: [
    t('Temel Kavramlar', [], 5, 4, { d: 1, rep: 'yüksek', alias: ['Sayılar', 'Temel Kavram'] }),
    t('Sayı Basamakları', ['Temel Kavramlar'], 4, 3, { d: 2 }),
    t('Bölme ve Bölünebilme', ['Temel Kavramlar', 'Sayı Basamakları'], 4, 4, {
      d: 3,
      alias: ['Bölünebilme'],
    }),
    t('OBEB - OKEK', ['Bölme ve Bölünebilme'], 3, 3, {
      d: 3,
      alias: ['OBEB OKEK', 'EBOB EKOK', 'EBOB - EKOK'],
    }),
    t('Rasyonel Sayılar', ['Temel Kavramlar', 'Bölme ve Bölünebilme'], 3, 3, { d: 2 }),
    t('Basit Eşitsizlikler', ['Temel Kavramlar', 'Rasyonel Sayılar'], 3, 3, { d: 2 }),
    t('Mutlak Değer', ['Basit Eşitsizlikler'], 3, 3, { d: 3 }),
    t('Üslü Sayılar', ['Temel Kavramlar', 'Rasyonel Sayılar'], 4, 3, { d: 2, alias: ['Üslü'] }),
    t('Köklü Sayılar', ['Üslü Sayılar'], 4, 3, { d: 3, alias: ['Köklü'] }),
    t('Çarpanlara Ayırma', ['Üslü Sayılar', 'Köklü Sayılar'], 4, 4, {
      d: 3,
      rep: 'yüksek',
      alias: ['Özdeşlikler', 'Cebirsel İfadeler'],
    }),
    t('Oran - Orantı', ['Rasyonel Sayılar'], 4, 3, { d: 2, alias: ['Oran Orantı'] }),
    t('Denklem Çözme', ['Çarpanlara Ayırma', 'Oran - Orantı'], 4, 3, { d: 3, alias: ['Denklemler'] }),
    t('Problemler', ['Denklem Çözme', 'Oran - Orantı'], 5, 12, {
      d: 4,
      rep: 'yüksek',
      alias: ['Problem', 'Sayı Problemleri', 'Yaş Problemleri', 'Hız Problemleri'],
    }),
    t('Kümeler', ['Temel Kavramlar'], 3, 3, { d: 2 }),
    t('Fonksiyonlar (Temel)', ['Kümeler', 'Denklem Çözme'], 4, 5, {
      d: 3,
      rep: 'yüksek',
      alias: ['Fonksiyonlar', 'Fonksiyon'],
    }),
    t('Permütasyon - Kombinasyon - Olasılık', ['Kümeler'], 4, 5, {
      d: 4,
      rep: 'yüksek',
      alias: ['Permütasyon', 'Kombinasyon', 'Olasılık', 'Permütasyon Kombinasyon'],
    }),
    t('İstatistik ve Veri Analizi', ['Temel Kavramlar'], 3, 2, { d: 1, alias: ['İstatistik'] }),
  ],

  Geometri: [
    t('Temel Kavramlar ve Doğruda Açılar', [], 4, 3, { d: 2, alias: ['Doğruda Açılar'] }),
    t('Üçgende Açılar', ['Temel Kavramlar ve Doğruda Açılar'], 5, 4, { d: 3 }),
    t('Özel Üçgenler (Dik, İkizkenar, Eşkenar)', ['Üçgende Açılar', 'Matematik > Köklü Sayılar'], 5, 5, {
      d: 3,
      rep: 'yüksek',
      alias: ['Özel Üçgenler', 'Dik Üçgen', 'Pisagor'],
    }),
    t('Üçgende Alan', ['Özel Üçgenler (Dik, İkizkenar, Eşkenar)'], 5, 4, { d: 3 }),
    t('Açıortay ve Kenarortay', ['Üçgende Açılar'], 4, 4, { d: 4 }),
    t('Eşlik ve Benzerlik', ['Üçgende Alan', 'Açıortay ve Kenarortay'], 4, 4, { d: 3 }),
    t('Çokgenler', ['Eşlik ve Benzerlik'], 3, 3, { d: 3, alias: ['Dörtgenler'] }),
    t('Çember ve Daire', ['Üçgende Açılar', 'Çokgenler'], 4, 5, { d: 4, alias: ['Çember'] }),
    t('Katı Cisimler', ['Çokgenler', 'Çember ve Daire'], 3, 4, { d: 3 }),
    t('Analitik Geometri (Nokta - Doğru)', ['Matematik > Fonksiyonlar (Temel)'], 4, 5, {
      d: 3,
      alias: ['Analitik Geometri', 'Analitik'],
    }),
  ],

  Türkçe: [
    t('Sözcükte Anlam', [], 4, 3, { d: 2 }),
    t('Cümlede Anlam', ['Sözcükte Anlam'], 4, 3, { d: 2 }),
    t('Paragrafta Anlam ve Yapı', ['Cümlede Anlam'], 5, 12, {
      d: 3,
      rep: 'yüksek',
      alias: ['Paragraf', 'Paragrafta Anlam'],
    }),
    t('Paragrafta Düşünceyi Geliştirme Yolları', ['Paragrafta Anlam ve Yapı'], 3, 3, { d: 2 }),
    t('Ses Bilgisi', [], 3, 3, { d: 2 }),
    t('Yapı Bilgisi', ['Ses Bilgisi'], 3, 4, { d: 3, alias: ['Sözcükte Yapı'] }),
    t('Fiilimsi', ['Yapı Bilgisi'], 4, 3, { d: 3, alias: ['Fiilimsiler'] }),
    t('Cümlenin Öğeleri', ['Fiilimsi'], 4, 4, { d: 3 }),
    t('Cümle Türleri', ['Cümlenin Öğeleri'], 3, 3, { d: 3 }),
    t('Anlatım Bozuklukları', ['Cümlenin Öğeleri'], 4, 4, { d: 3, rep: 'yüksek' }),
    t('Yazım Kuralları', [], 3, 3, { d: 2 }),
    t('Noktalama İşaretleri', ['Yazım Kuralları'], 3, 2, { d: 1 }),
  ],

  Fizik: [
    t('Fizik Bilimine Giriş', [], 2, 2, { d: 1 }),
    t('Madde ve Özellikleri', ['Fizik Bilimine Giriş'], 3, 3, { d: 2 }),
    t('Basınç', ['Madde ve Özellikleri'], 3, 4, { d: 3 }),
    t('Sıvıların Kaldırma Kuvveti', ['Basınç'], 3, 3, { d: 3, alias: ['Kaldırma Kuvveti'] }),
    t('Isı, Sıcaklık ve Genleşme', ['Madde ve Özellikleri'], 3, 3, { d: 2, alias: ['Isı ve Sıcaklık'] }),
    t('Hareket ve Kuvvet', ['Fizik Bilimine Giriş'], 5, 6, {
      d: 3,
      rep: 'yüksek',
      alias: ['Hareket', 'Kuvvet'],
    }),
    t('İş, Güç ve Enerji', ['Hareket ve Kuvvet'], 4, 5, { d: 3, alias: ['Enerji'] }),
    t('Elektrostatik', ['Fizik Bilimine Giriş'], 3, 3, { d: 3 }),
    t('Elektrik Devreleri', ['Elektrostatik'], 4, 5, { d: 3, alias: ['Elektrik'] }),
    t('Manyetizma', ['Elektrik Devreleri'], 2, 2, { d: 2 }),
    t('Dalgalar', ['Hareket ve Kuvvet'], 4, 5, { d: 3 }),
    t('Optik', ['Dalgalar'], 4, 5, { d: 3 }),
  ],

  Kimya: [
    t('Kimya Bilimi', [], 2, 2, { d: 1 }),
    t('Atom ve Periyodik Sistem', ['Kimya Bilimi'], 5, 5, {
      d: 3,
      rep: 'yüksek',
      alias: ['Atom', 'Periyodik Sistem'],
    }),
    t('Kimyasal Türler Arası Etkileşimler', ['Atom ve Periyodik Sistem'], 4, 4, {
      d: 3,
      alias: ['Kimyasal Türler', 'Bağlar'],
    }),
    t('Maddenin Halleri', ['Kimyasal Türler Arası Etkileşimler'], 3, 4, { d: 2 }),
    t('Doğa ve Kimya', ['Kimyasal Türler Arası Etkileşimler'], 2, 2, { d: 1 }),
    t('Kimyanın Temel Kanunları', ['Atom ve Periyodik Sistem'], 3, 3, { d: 2 }),
    t('Mol Kavramı', ['Kimyanın Temel Kanunları'], 5, 6, {
      d: 4,
      rep: 'yüksek',
      alias: ['Mol', 'Mol Hesapları'],
    }),
    t('Karışımlar', ['Mol Kavramı', 'Maddenin Halleri'], 4, 4, { d: 3 }),
    t('Asit, Baz ve Tuz', ['Karışımlar'], 4, 4, { d: 3, alias: ['Asit Baz'] }),
    t('Kimya Her Yerde', ['Asit, Baz ve Tuz'], 2, 2, { d: 1 }),
  ],

  Biyoloji: [
    t('Canlıların Ortak Özellikleri', [], 3, 2, { d: 1 }),
    t('Canlıların Temel Bileşenleri', ['Canlıların Ortak Özellikleri'], 4, 5, {
      d: 3,
      rep: 'yüksek',
      alias: ['Temel Bileşenler', 'Enzimler', 'Organik Bileşikler', 'ATP'],
    }),
    t('Hücre', ['Canlıların Temel Bileşenleri'], 5, 5, {
      d: 3,
      rep: 'yüksek',
      alias: ['Organeller', 'Hücre Zarı', 'Madde Geçişleri', 'Kloroplast'],
    }),
    t('Canlıların Sınıflandırılması', ['Hücre'], 3, 3, { d: 2, alias: ['Sınıflandırma', 'Alemler'] }),
    t('Hücre Bölünmeleri', ['Hücre'], 5, 5, { d: 3, rep: 'yüksek', alias: ['Mitoz', 'Mayoz'] }),
    t('Kalıtım', ['Hücre Bölünmeleri'], 5, 6, { d: 4, rep: 'yüksek', alias: ['Genetik'] }),
    t('Ekosistem Ekolojisi', ['Canlıların Sınıflandırılması'], 3, 3, { d: 2, alias: ['Ekoloji'] }),
  ],

  Tarih: [
    t('Tarih ve Zaman', [], 2, 2, { d: 1 }),
    t('İnsanlığın İlk Dönemleri', ['Tarih ve Zaman'], 3, 3, { d: 2, rep: 'yüksek' }),
    t('Ortaçağda Dünya', ['İnsanlığın İlk Dönemleri'], 3, 3, { d: 2 }),
    t('İlk ve Orta Çağlarda Türk Dünyası', ['İnsanlığın İlk Dönemleri'], 4, 4, {
      d: 2,
      rep: 'yüksek',
      alias: ['İlk Türk Devletleri'],
    }),
    t('İslam Medeniyeti ve Türkler', ['İlk ve Orta Çağlarda Türk Dünyası'], 4, 4, {
      d: 2,
      rep: 'yüksek',
    }),
    t('Türk-İslam Devletleri', ['İslam Medeniyeti ve Türkler'], 4, 4, { d: 2, rep: 'yüksek' }),
    t('Beylikten Devlete Osmanlı', ['Türk-İslam Devletleri'], 4, 4, {
      d: 2,
      rep: 'yüksek',
      alias: ['Osmanlı Kuruluş'],
    }),
    t('Dünya Gücü Osmanlı', ['Beylikten Devlete Osmanlı'], 4, 4, {
      d: 2,
      rep: 'yüksek',
      alias: ['Osmanlı Yükselme'],
    }),
    t('Arayış Yılları', ['Dünya Gücü Osmanlı'], 3, 3, { d: 2 }),
    t('Devrimler Çağında Değişen Devlet-Toplum İlişkileri', ['Arayış Yılları'], 3, 3, { d: 2 }),
  ],

  Coğrafya: [
    t('Doğa ve İnsan', [], 2, 2, { d: 1 }),
    t("Dünya'nın Şekli ve Hareketleri", [], 4, 3, { d: 3, alias: ['Dünyanın Şekli ve Hareketleri'] }),
    t('Coğrafi Konum', ["Dünya'nın Şekli ve Hareketleri"], 4, 3, { d: 3 }),
    t('Harita Bilgisi', ['Coğrafi Konum'], 4, 4, { d: 3, alias: ['Haritalar'] }),
    t('Atmosfer ve İklim', ['Coğrafi Konum'], 5, 5, { d: 3, rep: 'yüksek', alias: ['İklim'] }),
    t('Yerin Şekillenmesi (İç ve Dış Kuvvetler)', ['Harita Bilgisi'], 4, 5, {
      d: 3,
      alias: ['İç Kuvvetler', 'Dış Kuvvetler', 'Yer Şekilleri'],
    }),
    t(
      'Su, Toprak ve Bitkiler',
      ['Atmosfer ve İklim', 'Yerin Şekillenmesi (İç ve Dış Kuvvetler)'],
      3,
      3,
      { d: 2 }
    ),
    t('Nüfus', [], 4, 3, { d: 2 }),
    t('Yerleşme', ['Nüfus'], 3, 3, { d: 2 }),
    t('Ekonomik Faaliyetler', ['Yerleşme'], 3, 3, { d: 2 }),
  ],

  Felsefe: [
    t('Felsefenin Konusu', [], 3, 2, { d: 2, alias: ['Felsefeye Giriş'] }),
    t('Bilgi Felsefesi', ['Felsefenin Konusu'], 4, 3, { d: 3 }),
    t('Varlık Felsefesi', ['Bilgi Felsefesi'], 3, 3, { d: 3 }),
    t('Ahlak Felsefesi', ['Felsefenin Konusu'], 3, 3, { d: 2 }),
    t('Sanat Felsefesi', ['Felsefenin Konusu'], 3, 2, { d: 2 }),
    t('Din Felsefesi', ['Felsefenin Konusu'], 3, 2, { d: 2 }),
    t('Siyaset Felsefesi', ['Felsefenin Konusu'], 3, 2, { d: 2 }),
    t('Bilim Felsefesi', ['Bilgi Felsefesi'], 3, 2, { d: 3 }),
  ],

  'Din Kültürü ve Ahlak Bilgisi': [
    t('Bilgi ve İnanç', [], 3, 2, { d: 2 }),
    t('İslam ve İbadet', ['Bilgi ve İnanç'], 3, 3, { d: 2 }),
    t('Gençlik ve Değerler', [], 3, 2, { d: 1 }),
    t('Din ve Hayat', [], 3, 2, { d: 1 }),
    t('Ahlaki Tutum ve Davranışlar', [], 3, 2, { d: 1 }),
    t('Din, Kültür ve Sanat', [], 3, 2, { d: 1 }),
  ],
}

/* ==================================================================
   AYT
   TYT'ye bağlı konularda ön koşul açıkça 'TYT > Ders > Konu' yazılır.
   Öğrenci TYT tarafını bitirmeden AYT'ye geçmemeli — spesifikasyonun
   asıl derdi budur.
   ================================================================== */

const AYT = {
  Matematik: [
    t('Fonksiyonlar (İleri)', ['TYT > Matematik > Fonksiyonlar (Temel)'], 5, 6, {
      d: 4,
      rep: 'yüksek',
      alias: ['Fonksiyonlar', 'Fonksiyon'],
    }),
    t('Polinomlar', ['TYT > Matematik > Çarpanlara Ayırma'], 4, 5, { d: 3 }),
    t('İkinci Dereceden Denklemler', ['Polinomlar'], 5, 6, {
      d: 4,
      rep: 'yüksek',
      alias: ['2. Dereceden Denklemler', 'İkinci Derece Denklemler'],
    }),
    t('Karmaşık Sayılar', ['İkinci Dereceden Denklemler'], 3, 4, { d: 4 }),
    t('Eşitsizlikler (İleri)', ['İkinci Dereceden Denklemler'], 3, 4, {
      d: 4,
      alias: ['Eşitsizlikler'],
    }),
    t('Parabol', ['İkinci Dereceden Denklemler', 'Fonksiyonlar (İleri)'], 4, 5, { d: 4 }),
    t('Trigonometri', ['Fonksiyonlar (İleri)'], 5, 8, { d: 4, rep: 'yüksek' }),
    t('Logaritma', ['Fonksiyonlar (İleri)', 'TYT > Matematik > Üslü Sayılar'], 4, 5, {
      d: 4,
      rep: 'yüksek',
    }),
    t('Diziler', ['Fonksiyonlar (İleri)'], 3, 4, { d: 3 }),
    t('Limit ve Süreklilik', ['Fonksiyonlar (İleri)', 'Trigonometri', 'Logaritma'], 4, 6, {
      d: 4,
      alias: ['Limit'],
    }),
    t('Türev', ['Limit ve Süreklilik'], 5, 10, { d: 5, rep: 'yüksek' }),
    t('İntegral', ['Türev'], 5, 10, { d: 5, rep: 'yüksek' }),
  ],

  Geometri: [
    t(
      'Üçgende Trigonometri',
      ['TYT > Geometri > Üçgende Alan', 'Matematik > Trigonometri'],
      4,
      5,
      { d: 4 }
    ),
    t('Çemberde Açı ve Uzunluk', ['TYT > Geometri > Çember ve Daire'], 4, 5, {
      d: 4,
      alias: ['Çemberde Açı'],
    }),
    t(
      'Analitik Geometri (Doğru - Çember)',
      ['TYT > Geometri > Analitik Geometri (Nokta - Doğru)', 'Çemberde Açı ve Uzunluk'],
      4,
      5,
      { d: 4, alias: ['Analitik Geometri'] }
    ),
    t('Vektörler', ['Analitik Geometri (Doğru - Çember)'], 3, 3, { d: 3 }),
    t('Uzay Geometri (Katı Cisimler İleri)', ['TYT > Geometri > Katı Cisimler'], 3, 4, {
      d: 4,
      alias: ['Uzay Geometri', 'Katı Cisimler'],
    }),
    t('Dönüşümler', ['Analitik Geometri (Doğru - Çember)'], 2, 3, { d: 3, alias: ['Dönüşüm Geometrisi'] }),
  ],

  Edebiyat: [
    t('Anlam Bilgisi', [], 4, 3, { d: 2, alias: ['Sözcükte Anlam', 'Cümlede Anlam'] }),
    t('Söz Sanatları', ['Anlam Bilgisi'], 4, 3, { d: 3, alias: ['Edebi Sanatlar'] }),
    t('Şiir Bilgisi', ['Söz Sanatları'], 4, 4, { d: 3, alias: ['Nazım Biçimleri'] }),
    t('Edebi Akımlar', ['Şiir Bilgisi'], 3, 3, { d: 3 }),
    t('İslamiyet Öncesi Türk Edebiyatı', ['Şiir Bilgisi'], 3, 3, { d: 2, rep: 'yüksek' }),
    t('Halk Edebiyatı', ['İslamiyet Öncesi Türk Edebiyatı'], 4, 4, { d: 3, rep: 'yüksek' }),
    t('Divan Edebiyatı', ['İslamiyet Öncesi Türk Edebiyatı'], 4, 5, { d: 4, rep: 'yüksek' }),
    t('Tanzimat Edebiyatı', ['Divan Edebiyatı', 'Edebi Akımlar'], 4, 4, { d: 3, rep: 'yüksek' }),
    t('Servet-i Fünun ve Fecr-i Ati', ['Tanzimat Edebiyatı'], 3, 3, {
      d: 3,
      rep: 'yüksek',
      alias: ['Servet-i Fünun'],
    }),
    t('Milli Edebiyat', ['Servet-i Fünun ve Fecr-i Ati'], 4, 3, { d: 3, rep: 'yüksek' }),
    t('Cumhuriyet Dönemi Türk Edebiyatı', ['Milli Edebiyat'], 5, 5, {
      d: 3,
      rep: 'yüksek',
      alias: ['Cumhuriyet Dönemi'],
    }),
    t('Dünya Edebiyatı', ['Edebi Akımlar'], 2, 2, { d: 2 }),
  ],

  Fizik: [
    t('Vektörler', ['TYT > Fizik > Hareket ve Kuvvet'], 4, 3, { d: 3 }),
    t('Bağıl Hareket', ['Vektörler'], 3, 3, { d: 4 }),
    t('Bir Boyutta Sabit İvmeli Hareket', ['Vektörler'], 5, 5, {
      d: 4,
      rep: 'yüksek',
      alias: ['Sabit İvmeli Hareket', 'Kinematik'],
    }),
    t("Newton'un Hareket Yasaları", ['Bir Boyutta Sabit İvmeli Hareket'], 5, 6, {
      d: 4,
      rep: 'yüksek',
      alias: ['Newton Yasaları', 'Dinamik'],
    }),
    t('Atışlar', ["Newton'un Hareket Yasaları", 'Bağıl Hareket'], 4, 4, { d: 4 }),
    t('İş, Güç ve Enerji', ["Newton'un Hareket Yasaları"], 4, 5, { d: 4, alias: ['Enerji'] }),
    t('Çembersel Hareket', ["Newton'un Hareket Yasaları"], 4, 5, { d: 4 }),
    t('Kütle Çekim ve Kepler Yasaları', ['Çembersel Hareket'], 3, 3, { d: 3, alias: ['Kepler'] }),
    t('Basit Harmonik Hareket', ['Çembersel Hareket', 'İş, Güç ve Enerji'], 3, 4, { d: 4 }),
    t('Dalga Mekaniği', ['TYT > Fizik > Dalgalar', 'Basit Harmonik Hareket'], 3, 4, { d: 4 }),
    t('Elektrik Alan ve Potansiyel', ['TYT > Fizik > Elektrostatik', 'Vektörler'], 4, 6, {
      d: 4,
      alias: ['Elektrik Alan'],
    }),
    t('Manyetik Alan', ['Elektrik Alan ve Potansiyel', 'TYT > Fizik > Manyetizma'], 4, 5, { d: 4 }),
    t('İndüksiyon', ['Manyetik Alan'], 3, 4, { d: 4 }),
    t('Alternatif Akım', ['İndüksiyon'], 3, 3, { d: 4 }),
    t('Atom Fiziğine Giriş ve Radyoaktivite', ['TYT > Fizik > Elektrostatik'], 3, 4, {
      d: 3,
      alias: ['Radyoaktivite', 'Atom Fiziği'],
    }),
    t('Modern Fizik', ['Atom Fiziğine Giriş ve Radyoaktivite'], 4, 5, { d: 4, rep: 'yüksek' }),
  ],

  Kimya: [
    t('Kimya Bilimi', [], 1, 1, { d: 1 }),
    t('Atom ve Periyodik Sistem', ['TYT > Kimya > Atom ve Periyodik Sistem'], 4, 4, {
      d: 3,
      alias: ['Atom', 'Periyodik Sistem'],
    }),
    t('Gazlar', ['TYT > Kimya > Mol Kavramı'], 4, 5, { d: 4 }),
    t(
      'Sıvı Çözeltiler ve Çözünürlük',
      ['TYT > Kimya > Karışımlar', 'TYT > Kimya > Mol Kavramı'],
      4,
      5,
      { d: 4, alias: ['Çözeltiler', 'Çözünürlük'] }
    ),
    t('Kimyasal Tepkimelerde Enerji', ['TYT > Kimya > Mol Kavramı'], 4, 4, {
      d: 4,
      alias: ['Termokimya'],
    }),
    t('Kimyasal Tepkimelerde Hız', ['Kimyasal Tepkimelerde Enerji'], 4, 4, {
      d: 4,
      alias: ['Tepkime Hızı'],
    }),
    t('Kimyasal Tepkimelerde Denge', ['Kimyasal Tepkimelerde Hız'], 5, 6, {
      d: 5,
      rep: 'yüksek',
      alias: ['Denge'],
    }),
    t('Asit-Baz Dengesi', ['Kimyasal Tepkimelerde Denge', 'TYT > Kimya > Asit, Baz ve Tuz'], 5, 5, {
      d: 4,
      rep: 'yüksek',
      alias: ['Asit Baz Dengesi'],
    }),
    t('Çözünürlük Dengesi', ['Asit-Baz Dengesi'], 3, 3, { d: 4 }),
    t('Elektrokimya', ['Kimyasal Tepkimelerde Enerji'], 4, 5, { d: 4, rep: 'yüksek' }),
    t('Karbon Kimyasına Giriş', ['TYT > Kimya > Kimyasal Türler Arası Etkileşimler'], 4, 4, {
      d: 3,
      alias: ['Karbon Kimyası'],
    }),
    t('Organik Kimya', ['Karbon Kimyasına Giriş'], 5, 8, { d: 4, rep: 'yüksek' }),
    t('Enerji Kaynakları ve Bilimsel Gelişmeler', ['Organik Kimya'], 2, 2, { d: 1 }),
  ],

  Biyoloji: [
    t('Sinir Sistemi', ['TYT > Biyoloji > Hücre'], 4, 5, { d: 4, rep: 'yüksek' }),
    t('Endokrin Sistem ve Hormonlar', ['Sinir Sistemi'], 4, 4, { d: 3, alias: ['Hormonlar'] }),
    t('Duyu Organları', ['Sinir Sistemi'], 3, 3, { d: 2 }),
    t('Destek ve Hareket Sistemi', ['TYT > Biyoloji > Hücre'], 3, 3, { d: 2 }),
    t('Sindirim Sistemi', ['TYT > Biyoloji > Canlıların Temel Bileşenleri'], 4, 4, { d: 3 }),
    t('Dolaşım ve Bağışıklık Sistemi', ['Sindirim Sistemi'], 4, 5, {
      d: 3,
      alias: ['Dolaşım Sistemi', 'Bağışıklık'],
    }),
    t('Solunum Sistemi', ['Dolaşım ve Bağışıklık Sistemi'], 3, 3, { d: 2 }),
    t('Üriner Sistem', ['Dolaşım ve Bağışıklık Sistemi'], 3, 3, { d: 3, alias: ['Boşaltım Sistemi'] }),
    t(
      'Üreme Sistemi ve Embriyonik Gelişim',
      ['TYT > Biyoloji > Hücre Bölünmeleri', 'Endokrin Sistem ve Hormonlar'],
      4,
      4,
      { d: 3, alias: ['Üreme Sistemi'] }
    ),
    t('Genden Proteine', ['TYT > Biyoloji > Kalıtım', 'TYT > Biyoloji > Canlıların Temel Bileşenleri'], 5, 6, {
      d: 4,
      rep: 'yüksek',
      alias: ['Protein Sentezi', 'DNA'],
    }),
    t('Komünite ve Popülasyon Ekolojisi', ['TYT > Biyoloji > Ekosistem Ekolojisi'], 3, 3, {
      d: 2,
      alias: ['Popülasyon Ekolojisi', 'Komünite'],
    }),
    t(
      'Canlılarda Enerji Dönüşümleri (Fotosentez - Kemosentez)',
      ['TYT > Biyoloji > Hücre', 'TYT > Biyoloji > Canlıların Temel Bileşenleri'],
      5,
      7,
      {
        d: 5,
        rep: 'yüksek',
        alias: ['Fotosentez', 'Kemosentez', 'Canlılarda Enerji Dönüşümleri', 'Solunum'],
      }
    ),
    t('Bitki Biyolojisi', ['Canlılarda Enerji Dönüşümleri (Fotosentez - Kemosentez)'], 4, 6, {
      d: 4,
      rep: 'yüksek',
      alias: ['Bitkiler'],
    }),
    t('Canlılar ve Çevre', ['Komünite ve Popülasyon Ekolojisi'], 2, 2, { d: 1 }),
  ],

  Tarih: [
    t('Türk-İslam Devletlerinde Toplum ve Ekonomi', ['TYT > Tarih > Türk-İslam Devletleri'], 3, 3, {
      d: 2,
      rep: 'yüksek',
    }),
    t('Türkiye Tarihi (11-13. Yüzyıl)', ['Türk-İslam Devletlerinde Toplum ve Ekonomi'], 3, 3, {
      d: 2,
      rep: 'yüksek',
    }),
    t('Beylikten Devlete Osmanlı Medeniyeti', ['Türkiye Tarihi (11-13. Yüzyıl)'], 4, 4, {
      d: 2,
      rep: 'yüksek',
    }),
    t('Dünya Gücü Osmanlı Devleti', ['Beylikten Devlete Osmanlı Medeniyeti'], 4, 4, {
      d: 2,
      rep: 'yüksek',
    }),
    t('Değişen Dünya Dengeleri Karşısında Osmanlı Siyaseti', ['Dünya Gücü Osmanlı Devleti'], 4, 4, {
      d: 3,
      rep: 'yüksek',
    }),
    t(
      'Uluslararası İlişkilerde Denge Stratejisi',
      ['Değişen Dünya Dengeleri Karşısında Osmanlı Siyaseti'],
      3,
      3,
      { d: 3, rep: 'yüksek' }
    ),
    t(
      'XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya',
      ['Uluslararası İlişkilerde Denge Stratejisi'],
      4,
      4,
      { d: 3, rep: 'yüksek' }
    ),
    t('Milli Mücadele', ['XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya'], 5, 5, {
      d: 3,
      rep: 'yüksek',
      alias: ['Kurtuluş Savaşı'],
    }),
    t('Atatürkçülük ve Türk İnkılabı', ['Milli Mücadele'], 5, 5, {
      d: 3,
      rep: 'yüksek',
      alias: ['İnkılaplar', 'Atatürkçülük'],
    }),
    t('İki Savaş Arası Dönemde Türkiye ve Dünya', ['Atatürkçülük ve Türk İnkılabı'], 3, 3, { d: 3 }),
    t('II. Dünya Savaşı Sonrası Dünya ve Türkiye', ['İki Savaş Arası Dönemde Türkiye ve Dünya'], 3, 3, {
      d: 3,
      alias: ['Soğuk Savaş'],
    }),
  ],

  Coğrafya: [
    t('Ekosistem', ['TYT > Coğrafya > Su, Toprak ve Bitkiler'], 4, 4, { d: 3 }),
    t('Biyoçeşitlilik', ['Ekosistem'], 3, 2, { d: 2 }),
    t('Nüfus Politikaları', ['TYT > Coğrafya > Nüfus'], 3, 3, { d: 2 }),
    t('Şehirler ve Etki Alanı', ['TYT > Coğrafya > Yerleşme'], 3, 3, { d: 2 }),
    t('Türkiye Ekonomisi', ['TYT > Coğrafya > Ekonomik Faaliyetler'], 4, 4, { d: 3 }),
    t("Türkiye'de Tarım, Sanayi ve Ticaret", ['Türkiye Ekonomisi'], 4, 4, {
      d: 3,
      rep: 'yüksek',
      alias: ['Türkiye Tarım', 'Sanayi'],
    }),
    t('Bölgeler ve Ülkeler', ["Türkiye'de Tarım, Sanayi ve Ticaret"], 3, 3, { d: 3 }),
    t('Küresel Ortam: Bölgeler ve Ülkeler', ['Bölgeler ve Ülkeler'], 3, 3, { d: 3 }),
    t('Doğal Afetler', ['TYT > Coğrafya > Yerin Şekillenmesi (İç ve Dış Kuvvetler)'], 3, 2, { d: 2 }),
    t('Çevre ve Toplum', ['Ekosistem'], 3, 2, { d: 2 }),
  ],

  'Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)': [
    t('Felsefeyle Tanışma', [], 3, 2, { d: 2, alias: ['Felsefeye Giriş', 'Felsefenin Konusu'] }),
    t('Bilgi Felsefesi', ['Felsefeyle Tanışma'], 4, 3, { d: 3 }),
    t('Bilim Felsefesi', ['Bilgi Felsefesi'], 3, 3, { d: 3 }),
    t('Ahlak Felsefesi', ['Felsefeyle Tanışma'], 3, 3, { d: 3 }),
    t('Din, Sanat ve Siyaset Felsefesi', ['Ahlak Felsefesi'], 3, 3, { d: 3 }),
    t('Psikoloji Bilimini Tanıma', [], 3, 2, { d: 2, alias: ['Psikolojiye Giriş'] }),
    t('Psikolojinin Temel Süreçleri', ['Psikoloji Bilimini Tanıma'], 3, 3, { d: 3 }),
    t('Öğrenme, Bellek, Düşünme', ['Psikolojinin Temel Süreçleri'], 3, 3, { d: 3 }),
    t('Ruh Sağlığının Temelleri', ['Öğrenme, Bellek, Düşünme'], 3, 2, { d: 2 }),
    t('Sosyolojiye Giriş', [], 3, 2, { d: 2 }),
    t('Birey ve Toplum', ['Sosyolojiye Giriş'], 3, 2, { d: 2 }),
    t('Toplumsal Yapı', ['Birey ve Toplum'], 3, 3, { d: 3 }),
    t('Toplumsal Değişme ve Gelişme', ['Toplumsal Yapı'], 3, 2, { d: 2 }),
    t('Mantığa Giriş', [], 3, 2, { d: 3 }),
    t('Klasik Mantık', ['Mantığa Giriş'], 3, 3, { d: 4 }),
    t('Mantık ve Dil', ['Mantığa Giriş'], 3, 2, { d: 3 }),
  ],

  'Din Kültürü ve Ahlak Bilgisi': [
    t('İnanç', [], 3, 3, { d: 2 }),
    t('İbadet', ['İnanç'], 3, 3, { d: 2 }),
    t('Gençlik, Din ve Değerler', [], 3, 2, { d: 1 }),
    t('İslam Düşüncesinde Yorumlar', ['İnanç'], 3, 3, { d: 3, rep: 'yüksek' }),
    t('Hint ve Çin Dinleri', [], 3, 2, { d: 2, rep: 'yüksek' }),
    t('Yahudilik ve Hristiyanlık', ['Hint ve Çin Dinleri'], 3, 2, { d: 2, rep: 'yüksek' }),
    t('Güncel Dini Meseleler', ['İslam Düşüncesinde Yorumlar'], 3, 2, { d: 2 }),
    t('Hukuki ve Ahlaki Boyutuyla Aile', [], 3, 2, { d: 1 }),
  ],
}

/* ==================================================================
   KPSS
   ================================================================== */

const KPSS = {
  Matematik: [
    t('Temel Kavramlar', [], 5, 4, { d: 1, rep: 'yüksek', alias: ['Sayılar'] }),
    t('Sayı Basamakları', ['Temel Kavramlar'], 4, 3, { d: 2 }),
    t('Bölme ve Bölünebilme', ['Temel Kavramlar', 'Sayı Basamakları'], 4, 4, {
      d: 3,
      alias: ['Bölünebilme'],
    }),
    t('OBEB - OKEK', ['Bölme ve Bölünebilme'], 3, 3, { d: 3, alias: ['OBEB OKEK', 'EBOB EKOK'] }),
    t('Rasyonel Sayılar', ['Temel Kavramlar', 'Bölme ve Bölünebilme'], 3, 3, { d: 2 }),
    t('Basit Eşitsizlikler', ['Rasyonel Sayılar'], 3, 3, { d: 2 }),
    t('Mutlak Değer', ['Basit Eşitsizlikler'], 3, 3, { d: 3 }),
    t('Üslü - Köklü Sayılar', ['Rasyonel Sayılar'], 4, 4, {
      d: 3,
      alias: ['Üslü Sayılar', 'Köklü Sayılar', 'Üslü Köklü Sayılar'],
    }),
    t('Çarpanlara Ayırma', ['Üslü - Köklü Sayılar'], 4, 4, { d: 3, rep: 'yüksek' }),
    t('Oran - Orantı', ['Rasyonel Sayılar'], 4, 3, { d: 2, alias: ['Oran Orantı'] }),
    t('Problemler', ['Çarpanlara Ayırma', 'Oran - Orantı'], 5, 12, {
      d: 4,
      rep: 'yüksek',
      alias: ['Problem'],
    }),
    t('Kümeler', ['Temel Kavramlar'], 3, 3, { d: 2 }),
    t('Permütasyon - Kombinasyon - Olasılık', ['Kümeler'], 4, 5, {
      d: 4,
      alias: ['Permütasyon', 'Kombinasyon', 'Olasılık'],
    }),
    t('İstatistik ve Grafik Yorumlama', ['Temel Kavramlar'], 4, 3, {
      d: 2,
      alias: ['İstatistik', 'Grafik Yorumlama', 'Tablo Grafik'],
    }),
  ],

  Geometri: [
    t('Temel Kavramlar', [], 3, 3, { d: 2, alias: ['Doğruda Açılar'] }),
    t('Üçgenler', ['Temel Kavramlar', 'Matematik > Üslü - Köklü Sayılar'], 4, 5, { d: 3 }),
    t('Çokgenler', ['Üçgenler'], 3, 3, { d: 3, alias: ['Dörtgenler'] }),
    t('Çember ve Daire', ['Üçgenler'], 3, 4, { d: 3, alias: ['Çember'] }),
    t('Analitik Geometri (Temel)', ['Üçgenler'], 3, 4, { d: 3, alias: ['Analitik Geometri'] }),
  ],

  Türkçe: [
    t('Sözcükte Anlam', [], 4, 3, { d: 2 }),
    t('Cümlede Anlam', ['Sözcükte Anlam'], 4, 3, { d: 2 }),
    t('Paragraf', ['Cümlede Anlam'], 5, 12, { d: 3, rep: 'yüksek', alias: ['Paragrafta Anlam'] }),
    t('Ses Bilgisi', [], 3, 3, { d: 2 }),
    t('Yapı Bilgisi', ['Ses Bilgisi'], 3, 4, { d: 3 }),
    t('Cümlenin Öğeleri', ['Yapı Bilgisi'], 4, 4, { d: 3 }),
    t('Anlatım Bozuklukları', ['Cümlenin Öğeleri'], 4, 4, { d: 3, rep: 'yüksek' }),
    t('Yazım Kuralları', [], 4, 3, { d: 2 }),
    t('Noktalama İşaretleri', ['Yazım Kuralları'], 4, 2, { d: 1 }),
  ],

  Tarih: [
    t('İlk ve Orta Çağlarda Türk Tarihi', [], 4, 4, { d: 2, rep: 'yüksek', alias: ['İlk Türk Devletleri'] }),
    t('İslamiyet ve Türkler', ['İlk ve Orta Çağlarda Türk Tarihi'], 4, 4, { d: 2, rep: 'yüksek' }),
    t('Türkiye Selçuklu Devleti', ['İslamiyet ve Türkler'], 3, 3, { d: 2, rep: 'yüksek' }),
    t('Osmanlı Kuruluş ve Yükseliş Dönemi', ['Türkiye Selçuklu Devleti'], 4, 4, {
      d: 2,
      rep: 'yüksek',
    }),
    t('Osmanlı Duraklama ve Gerileme Dönemi', ['Osmanlı Kuruluş ve Yükseliş Dönemi'], 4, 4, {
      d: 2,
      rep: 'yüksek',
    }),
    t('XX. Yüzyılda Osmanlı Devleti', ['Osmanlı Duraklama ve Gerileme Dönemi'], 4, 3, { d: 3 }),
    t('Milli Mücadele Dönemi', ['XX. Yüzyılda Osmanlı Devleti'], 5, 5, {
      d: 3,
      rep: 'yüksek',
      alias: ['Kurtuluş Savaşı', 'Milli Mücadele'],
    }),
    t('Atatürk İlke ve İnkılapları', ['Milli Mücadele Dönemi'], 5, 5, {
      d: 3,
      rep: 'yüksek',
      alias: ['İnkılaplar', 'Atatürk İlkeleri'],
    }),
    t('Atatürk Sonrası Türkiye ve Dünya', ['Atatürk İlke ve İnkılapları'], 3, 3, { d: 3 }),
  ],

  Coğrafya: [
    t("Türkiye'nin Yer Şekilleri", [], 4, 4, { d: 3, alias: ['Yer Şekilleri'] }),
    t('İklim ve Bitki Örtüsü', ["Türkiye'nin Yer Şekilleri"], 4, 4, { d: 3, alias: ['İklim'] }),
    t('Nüfus ve Yerleşme', ['İklim ve Bitki Örtüsü'], 4, 3, { d: 2 }),
    t('Tarım, Hayvancılık ve Ormancılık', ['İklim ve Bitki Örtüsü'], 4, 4, { d: 3, alias: ['Tarım'] }),
    t('Sanayi, Ulaşım ve Ticaret', ['Tarım, Hayvancılık ve Ormancılık'], 4, 4, { d: 3, alias: ['Sanayi'] }),
    t('Bölgeler', ['Sanayi, Ulaşım ve Ticaret'], 3, 3, { d: 3 }),
    t("Türkiye'nin Jeopolitik Konumu", ['Bölgeler'], 3, 2, { d: 2, alias: ['Jeopolitik'] }),
  ],

  Vatandaşlık: [
    t('Hukukun Temel Kavramları', [], 4, 3, { d: 2, alias: ['Hukuk'] }),
    t('Devlet Şekilleri ve Yönetim Biçimleri', ['Hukukun Temel Kavramları'], 3, 2, { d: 2 }),
    t(
      'Anayasa Hukukuna Giriş ve Türk Anayasa Tarihi',
      ['Devlet Şekilleri ve Yönetim Biçimleri'],
      4,
      4,
      { d: 3, rep: 'yüksek', alias: ['Anayasa Tarihi'] }
    ),
    t('Temel Hak ve Ödevler', ['Anayasa Hukukuna Giriş ve Türk Anayasa Tarihi'], 4, 3, {
      d: 3,
      rep: 'yüksek',
    }),
    t('Yasama', ['Temel Hak ve Ödevler'], 5, 4, { d: 3, rep: 'yüksek' }),
    t('Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)', ['Yasama'], 5, 4, {
      d: 3,
      rep: 'yüksek',
      alias: ['Yürütme'],
    }),
    t('Yargı', ['Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)'], 5, 4, { d: 3, rep: 'yüksek' }),
    t('İdare Hukukuna Giriş ve Türk İdari Teşkilatı', ['Yargı'], 4, 3, {
      d: 3,
      rep: 'yüksek',
      alias: ['İdare Hukuku'],
    }),
    t('Uluslararası Kuruluşlar', [], 3, 2, { d: 2, rep: 'yüksek' }),
  ],
}

export const CURRICULUM_GRAPH = { LGS, TYT, AYT, KPSS }

export const GRAPH_EXAM_TYPES = Object.keys(CURRICULUM_GRAPH)

/**
 * Öğrencinin hedef sınavına göre hangi müfredat havuzlarının açılacağı.
 *
 * YKS tek bir sınav değildir: TYT'ye hazırlanan öğrenci AYT konularını da
 * görmek zorundadır (ve AYT'ye hazırlanan öğrencinin TYT temeli olmadan
 * ilerlemesi zaten imkânsızdır — AYT düğümlerinin ön koşulları TYT'ye
 * bakar). Bu yüzden ikisi birlikte döner; SIRA önemlidir, önce TYT.
 */
export function examTypesFor(examType) {
  if (examType === 'LGS') return ['LGS']
  if (examType === 'KPSS') return ['KPSS']
  if (examType === 'TYT' || examType === 'AYT') return ['TYT', 'AYT']
  return ['TYT', 'AYT']
}
