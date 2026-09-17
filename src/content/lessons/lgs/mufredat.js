/**
 * LGS RESMÎ MÜFREDAT KAYIT DEFTERİ
 * ==================================================================
 *
 * Bu dosya, 2027 LGS'ye girecek kohortun (2026-2027 eğitim öğretim yılı
 * 8. sınıf) sorumlu olduğu resmî kazanımların ve kütüphane konu ağacının
 * TEK makine-okunur kaynağıdır. Belge tarafı:
 *
 *   docs/lgs-kutuphanesi/LGS_MUFREDAT_KAZANIM_MATRISI.md
 *   docs/lgs-kutuphanesi/LGS_KAYNAK_KAYDI.md
 *
 * NEDEN AYRI BİR DOSYA?
 * Kazanım kodları ders dosyalarının içine serpiştirilirse "her kazanım
 * en az bir derse bağlandı mı?" sorusu bir daha cevaplanamaz. Buradaki
 * liste sabit kalır, dersler ona bağlanır, test iki tarafı karşılaştırır.
 *
 * DAYANAK (bkz. LGS_KAYNAK_KAYDI.md)
 *   K1  Türkçe Dersi Öğretim Programı, MEB TTKB, Ankara 2019
 *   K2  Fen Bilimleri Dersi Öğretim Programı, MEB TTKB, Ankara 2018
 *   K3  T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, MEB TTKB, Ankara 2018
 *   K4  Merkezî Sınav Başvuru ve Uygulama Kılavuzu 2026, MEB ÖDSGM
 *
 * UYARI — 2028 LGS
 * Türkiye Yüzyılı Maarif Modeli 2026-2027'de 8. sınıfta uygulanmıyor
 * (MEB TEGM/OGM duyuruları, 03.09.2026). Kademeli geçiş sürerse
 * 2027-2028'de 8. sınıf da modele geçer ve bu dosya yeniden yazılır.
 */

export const LGS_HEDEF = {
  sinavYili: 2027,
  kohort: '2026-2027 eğitim öğretim yılı 8. sınıf',
  programDayanagi: '2018/2019 MEB öğretim programları',
  kilavuzDayanagi: 'Merkezî Sınav Başvuru ve Uygulama Kılavuzu 2026 (ÖDSGM) — 2027 kılavuzu henüz yayımlanmadı',
  sonDogrulama: '2026-09-18',
}

/** Resmî soru sayıları — K4, Tablo-1. Sıklık iddiası yerine bu sayı kullanılır. */
export const LGS_SORU_SAYILARI = {
  Türkçe: 20,
  'T.C. İnkılap Tarihi ve Atatürkçülük': 10,
  'Din Kültürü ve Ahlak Bilgisi': 10,
  'Yabancı Dil': 10,
  Matematik: 20,
  'Fen Bilimleri': 20,
}

/* ==================================================================
   KÜTÜPHANE KONU AĞACI
   ------------------------------------------------------------------
   `mevcut: true`  → supabase/seed_library_curriculum_v2.sql içinde var,
                     canlı veritabanında bulunuyor.
   `mevcut: false` → resmî kazanımı olduğu hâlde ağaçta yok; eklenmesi
                     supabase/migration_lgs_konu_tamamlama.sql ile
                     hazırlandı, KULLANICI ONAYI bekliyor.

   `placement.topic` değeri bu listedeki `ad` ile BİREBİR eşleşmek
   zorundadır; aksi hâlde seed betiği dersi atlar.
   ================================================================== */

export const LGS_KONU_AGACI = {
  Türkçe: [
    { ad: 'Sözcükte Anlam', mevcut: true },
    { ad: 'Cümlede Anlam', mevcut: true },
    { ad: 'Paragrafta Anlam', mevcut: true },
    { ad: 'Söz Sanatları', mevcut: true },
    { ad: 'Fiilimsiler', mevcut: true },
    { ad: 'Cümlenin Öğeleri', mevcut: true },
    { ad: 'Fiilde Çatı', mevcut: true },
    { ad: 'Yazım Kuralları', mevcut: true },
    { ad: 'Noktalama İşaretleri', mevcut: true },
    { ad: 'Metin Türleri', mevcut: true },
    { ad: 'Anlatım Bozuklukları', mevcut: false, kazanim: 'T.8.3.8' },
    { ad: 'Cümle Türleri', mevcut: false, kazanim: 'T.8.4.19' },
    { ad: 'Görsel Okuma', mevcut: false, kazanim: 'T.8.3.27 · T.8.3.32' },
  ],
  'Fen Bilimleri': [
    { ad: 'Mevsimler ve İklim', mevcut: true },
    { ad: 'DNA ve Genetik Kod', mevcut: true },
    { ad: 'Basınç', mevcut: true },
    { ad: 'Madde ve Endüstri', mevcut: true },
    { ad: 'Basit Makineler', mevcut: true },
    { ad: 'Enerji Dönüşümleri ve Çevre Bilimi', mevcut: true },
    { ad: 'Elektrik Yükleri ve Elektrik Enerjisi', mevcut: true },
  ],
  // Konu adları veritabanındaki hâliyle yazıldı. Resmî programdaki imla
  // ("Millî", "…Ölüm!") ders başlığında kullanılır; konu adı canlı
  // kütüphaneyi kırmamak için DEĞİŞTİRİLMEZ (bkz. matris §4).
  'T.C. İnkılap Tarihi ve Atatürkçülük': [
    { ad: 'Bir Kahraman Doğuyor', mevcut: true },
    { ad: 'Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar', mevcut: true, resmiAd: 'Millî Uyanış: Bağımsızlık Yolunda Atılan Adımlar' },
    { ad: 'Milli Bir Destan: Ya İstiklal Ya Ölüm', mevcut: true, resmiAd: 'Millî Bir Destan: Ya İstiklal Ya Ölüm!' },
    { ad: 'Atatürkçülük ve Çağdaşlaşan Türkiye', mevcut: true },
    { ad: 'Demokratikleşme Çabaları', mevcut: true },
    { ad: 'Atatürk Dönemi Türk Dış Politikası', mevcut: true },
    { ad: 'Atatürk’ün Ölümü ve Sonrası', mevcut: true },
  ],
}

/* ==================================================================
   KAZANIMLAR
   ------------------------------------------------------------------
   `kapsam: 'olculur'`    → LGS'de çoktan seçmeli soruyla ölçülebilir;
                            en az bir ders notuna bağlanmak ZORUNDA.
   `kapsam: 'disi'`       → ölçülemez; `gerekce` yazılmak ZORUNDA.
   Test her iki kuralı da denetler.
   ================================================================== */

export const LGS_KAZANIMLAR = {
  Türkçe: [
    // --- T.8.1 DİNLEME/İZLEME ---
    { kod: 'T.8.1.1', metin: 'Dinlediklerinde/izlediklerinde geçen olayların gelişimi ve sonucu hakkında tahminde bulunur.', kapsam: 'disi', gerekce: 'Sesli/görüntülü uyaran gerektirir; yazılı çoktan seçmeli sınavda ölçülemez.' },
    { kod: 'T.8.1.2', metin: 'Dinlediklerinde/izlediklerinde geçen bilmediği kelimelerin anlamını tahmin eder.', kapsam: 'olculur' },
    { kod: 'T.8.1.3', metin: 'Dinlediklerini/izlediklerini özetler.', kapsam: 'disi', gerekce: 'Dinleme kanalına bağlı performans kazanımı.' },
    { kod: 'T.8.1.4', metin: 'Dinledikleri/izlediklerine yönelik sorulara cevap verir.', kapsam: 'disi', gerekce: 'Dinleme kanalına bağlı performans kazanımı.' },
    { kod: 'T.8.1.5', metin: 'Dinlediklerinin/izlediklerinin konusunu tespit eder.', kapsam: 'disi', gerekce: 'Dinleme kanalına bağlı performans kazanımı; bilgi tarafı T.8.3.16 ile aynıdır.' },
    { kod: 'T.8.1.6', metin: 'Dinlediklerinin/izlediklerinin ana fikrini/ana duygusunu tespit eder.', kapsam: 'disi', gerekce: 'Dinleme kanalına bağlı; bilgi tarafı T.8.3.17 ile aynıdır.' },
    { kod: 'T.8.1.7', metin: 'Dinlediklerine/izlediklerine yönelik farklı başlıklar önerir.', kapsam: 'disi', gerekce: 'Dinleme kanalına bağlı; bilgi tarafı T.8.3.19 ile aynıdır.' },
    { kod: 'T.8.1.8', metin: 'Dinlediği/izlediği hikâye edici metinleri canlandırır.', kapsam: 'disi', gerekce: 'Sınıf içi drama etkinliği.' },
    { kod: 'T.8.1.9', metin: 'Dinlediklerinde/izlediklerinde tutarlılığı sorgular.', kapsam: 'disi', gerekce: 'Dinleme kanalına bağlı performans kazanımı.' },
    { kod: 'T.8.1.10', metin: 'Dinledikleriyle/izledikleriyle ilgili görüşlerini bildirir.', kapsam: 'disi', gerekce: 'Sözlü üretim kazanımı.' },
    { kod: 'T.8.1.11', metin: 'Dinledikleri/izledikleri medya metinlerini değerlendirir.', kapsam: 'olculur' },
    { kod: 'T.8.1.12', metin: 'Dinlediklerinde/izlediklerinde başvurulan düşünceyi geliştirme yollarını tespit eder.', kapsam: 'olculur' },
    { kod: 'T.8.1.13', metin: 'Konuşmacının sözlü olmayan mesajlarını kavrar.', kapsam: 'disi', gerekce: 'Beden dili gözlemi gerektirir.' },
    { kod: 'T.8.1.14', metin: 'Dinleme stratejilerini uygular.', kapsam: 'disi', gerekce: 'Dinleme kanalına bağlı strateji uygulaması.' },

    // --- T.8.2 KONUŞMA ---
    { kod: 'T.8.2.1', metin: 'Hazırlıklı konuşma yapar.', kapsam: 'disi', gerekce: 'Sözlü performans kazanımı.' },
    { kod: 'T.8.2.2', metin: 'Hazırlıksız konuşma yapar.', kapsam: 'disi', gerekce: 'Sözlü performans kazanımı.' },
    { kod: 'T.8.2.3', metin: 'Konuşma stratejilerini uygular.', kapsam: 'disi', gerekce: 'Sözlü performans kazanımı.' },
    { kod: 'T.8.2.4', metin: 'Konuşmalarında beden dilini etkili bir şekilde kullanır.', kapsam: 'disi', gerekce: 'Sözlü performans kazanımı.' },
    { kod: 'T.8.2.5', metin: 'Kelimeleri anlamlarına uygun kullanır.', kapsam: 'disi', gerekce: 'Sözlü üretim kazanımı; bilgi tarafı T.8.3.5 ile örtüşür.' },
    { kod: 'T.8.2.6', metin: 'Konuşmalarında yabancı dillerden alınmış, dilimize henüz yerleşmemiş kelimelerin Türkçelerini kullanır.', kapsam: 'disi', gerekce: 'Sözlü üretim kazanımı.' },
    { kod: 'T.8.2.7', metin: 'Konuşmalarında uygun geçiş ve bağlantı ifadelerini kullanır.', kapsam: 'disi', gerekce: 'Sözlü üretim kazanımı; bilgi tarafı T.8.3.10 ile örtüşür.' },

    // --- T.8.3 OKUMA ---
    { kod: 'T.8.3.1', metin: 'Noktalama işaretlerine dikkat ederek sesli ve sessiz okur.', kapsam: 'olculur' },
    { kod: 'T.8.3.2', metin: 'Metni türün özelliklerine uygun biçimde okur.', kapsam: 'olculur' },
    { kod: 'T.8.3.3', metin: 'Farklı yazı karakterleri ile yazılmış yazıları okur.', kapsam: 'disi', gerekce: 'Akıcı okuma becerisidir; çoktan seçmeli soruyla ölçülmez.' },
    { kod: 'T.8.3.4', metin: 'Okuma stratejilerini kullanır.', kapsam: 'olculur' },
    { kod: 'T.8.3.5', metin: 'Bağlamdan yararlanarak bilmediği kelime ve kelime gruplarının anlamını tahmin eder.', kapsam: 'olculur' },
    { kod: 'T.8.3.6', metin: 'Deyim, atasözü ve özdeyişlerin metne katkısını belirler.', kapsam: 'olculur' },
    { kod: 'T.8.3.7', metin: 'Metindeki söz sanatlarını tespit eder.', kapsam: 'olculur' },
    { kod: 'T.8.3.8', metin: 'Metindeki anlatım bozukluklarını belirler.', kapsam: 'olculur' },
    { kod: 'T.8.3.9', metin: 'Fiilimsilerin cümledeki işlevlerini kavrar.', kapsam: 'olculur' },
    { kod: 'T.8.3.10', metin: 'Geçiş ve bağlantı ifadelerinin metnin anlamına olan katkısını değerlendirir.', kapsam: 'olculur' },
    { kod: 'T.8.3.11', metin: 'Metindeki anlatım biçimlerini belirler.', kapsam: 'olculur' },
    { kod: 'T.8.3.12', metin: 'Görsel ve başlıktan hareketle okuyacağı metnin konusunu tahmin eder.', kapsam: 'olculur' },
    { kod: 'T.8.3.13', metin: 'Okuduklarını özetler.', kapsam: 'olculur' },
    { kod: 'T.8.3.14', metin: 'Metinle ilgili soruları cevaplar.', kapsam: 'olculur' },
    { kod: 'T.8.3.15', metin: 'Metinle ilgili sorular sorar.', kapsam: 'disi', gerekce: 'Üretimsel kazanım; öğrencinin soru yazmasını ister.' },
    { kod: 'T.8.3.16', metin: 'Metnin konusunu belirler.', kapsam: 'olculur' },
    { kod: 'T.8.3.17', metin: 'Metnin ana fikrini/ana duygusunu belirler.', kapsam: 'olculur' },
    { kod: 'T.8.3.18', metin: 'Metindeki yardımcı fikirleri belirler.', kapsam: 'olculur' },
    { kod: 'T.8.3.19', metin: 'Metnin içeriğine uygun başlık/başlıklar belirler.', kapsam: 'olculur' },
    { kod: 'T.8.3.20', metin: 'Okuduğu metinlerdeki hikâye unsurlarını belirler.', kapsam: 'olculur' },
    { kod: 'T.8.3.21', metin: 'Metnin içeriğini yorumlar.', kapsam: 'olculur' },
    { kod: 'T.8.3.22', metin: 'Metinde ele alınan sorunlara farklı çözümler üretir.', kapsam: 'disi', gerekce: 'Üretimsel kazanım; açık uçlu çözüm önerisi ister.' },
    { kod: 'T.8.3.23', metin: 'Metinler arasında karşılaştırma yapar.', kapsam: 'olculur' },
    { kod: 'T.8.3.24', metin: 'Metindeki gerçek ve kurgusal unsurları ayırt eder.', kapsam: 'olculur' },
    { kod: 'T.8.3.25', metin: 'Okudukları ile ilgili çıkarımlarda bulunur.', kapsam: 'olculur' },
    { kod: 'T.8.3.26', metin: 'Metin türlerini ayırt eder.', kapsam: 'olculur' },
    { kod: 'T.8.3.27', metin: 'Görsellerle ilgili soruları cevaplar.', kapsam: 'olculur' },
    { kod: 'T.8.3.28', metin: 'Metinde önemli noktaların vurgulanış biçimlerini kavrar.', kapsam: 'olculur' },
    { kod: 'T.8.3.29', metin: 'Medya metinlerini analiz eder.', kapsam: 'olculur' },
    { kod: 'T.8.3.30', metin: 'Bilgi kaynaklarını etkili bir şekilde kullanır.', kapsam: 'olculur' },
    { kod: 'T.8.3.31', metin: 'Bilgi kaynaklarının güvenilirliğini sorgular.', kapsam: 'olculur' },
    { kod: 'T.8.3.32', metin: 'Grafik, tablo ve çizelgeyle sunulan bilgileri yorumlar.', kapsam: 'olculur' },
    { kod: 'T.8.3.33', metin: 'Edebî eserin yazılı metni ile medya sunumunu karşılaştırır.', kapsam: 'olculur' },
    { kod: 'T.8.3.34', metin: 'Okuduklarında kullanılan düşünceyi geliştirme yollarını belirler.', kapsam: 'olculur' },
    { kod: 'T.8.3.35', metin: 'Metindeki iş ve işlem basamaklarını kavrar.', kapsam: 'olculur' },

    // --- T.8.4 YAZMA ---
    { kod: 'T.8.4.1', metin: 'Şiir yazar.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı.' },
    { kod: 'T.8.4.2', metin: 'Bilgilendirici metin yazar.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı.' },
    { kod: 'T.8.4.3', metin: 'Hikâye edici metin yazar.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı.' },
    { kod: 'T.8.4.4', metin: 'Yazma stratejilerini uygular.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı.' },
    { kod: 'T.8.4.5', metin: 'Anlatımı desteklemek için grafik ve tablo kullanır.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı; okuma tarafı T.8.3.32 olarak işlenir.' },
    { kod: 'T.8.4.6', metin: 'Bir işi işlem basamaklarına göre yazar.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı; okuma tarafı T.8.3.35 olarak işlenir.' },
    { kod: 'T.8.4.7', metin: 'Yazılarını zenginleştirmek için atasözleri, deyimler ve özdeyişler kullanır.', kapsam: 'olculur' },
    { kod: 'T.8.4.8', metin: 'Yazılarında mizahi ögeler kullanır.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı.' },
    { kod: 'T.8.4.9', metin: 'Yazılarında anlatım biçimlerini kullanır.', kapsam: 'olculur' },
    { kod: 'T.8.4.10', metin: 'Yazdıklarında yabancı dillerden alınmış, dilimize henüz yerleşmemiş kelimelerin Türkçelerini kullanır.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı.' },
    { kod: 'T.8.4.11', metin: 'Formları yönergelerine uygun doldurur.', kapsam: 'disi', gerekce: 'Uygulama etkinliğidir.' },
    { kod: 'T.8.4.12', metin: 'Kısa metinler yazar.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı.' },
    { kod: 'T.8.4.13', metin: 'Yazdıklarının içeriğine uygun başlık belirler.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı; okuma tarafı T.8.3.19 olarak işlenir.' },
    { kod: 'T.8.4.14', metin: 'Araştırmalarının sonuçlarını yazılı olarak sunar.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı.' },
    { kod: 'T.8.4.15', metin: 'Yazılarında uygun geçiş ve bağlantı ifadelerini kullanır.', kapsam: 'disi', gerekce: 'Üretimsel yazma kazanımı; okuma tarafı T.8.3.10 olarak işlenir.' },
    { kod: 'T.8.4.16', metin: 'Yazdıklarını düzenler.', kapsam: 'olculur' },
    { kod: 'T.8.4.17', metin: 'Yazdıklarını paylaşır.', kapsam: 'disi', gerekce: 'Sınıf içi paylaşım etkinliği.' },
    { kod: 'T.8.4.18', metin: 'Cümlenin ögelerini ayırt eder.', kapsam: 'olculur' },
    { kod: 'T.8.4.19', metin: 'Cümle türlerini tanır.', kapsam: 'olculur' },
    { kod: 'T.8.4.20', metin: 'Fiillerin çatı özelliklerinin anlama olan katkısını kavrar.', kapsam: 'olculur' },
  ],

  'Fen Bilimleri': [
    { kod: 'F.8.1.1.1', metin: 'Mevsimlerin oluşumuna yönelik tahminlerde bulunur.', kapsam: 'olculur' },
    { kod: 'F.8.1.2.1', metin: 'İklim ve hava olayları arasındaki farkı açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.1.2.2', metin: 'İklim biliminin (klimatoloji) bir bilim dalı olduğunu ve bu alanda çalışan uzmanlara iklim bilimci (klimatolog) adı verildiğini söyler.', kapsam: 'olculur' },
    { kod: 'F.8.2.1.1', metin: 'Nükleotid, gen, DNA ve kromozom kavramlarını açıklayarak bu kavramlar arasında ilişki kurar.', kapsam: 'olculur' },
    { kod: 'F.8.2.1.2', metin: 'DNA’nın yapısını model üzerinde gösterir.', kapsam: 'olculur' },
    { kod: 'F.8.2.1.3', metin: 'DNA’nın kendini nasıl eşlediğini ifade eder.', kapsam: 'olculur' },
    { kod: 'F.8.2.2.1', metin: 'Kalıtım ile ilgili kavramları tanımlar.', kapsam: 'olculur' },
    { kod: 'F.8.2.2.2', metin: 'Tek karakter çaprazlamaları ile ilgili problemler çözerek sonuçlar hakkında yorum yapar.', kapsam: 'olculur' },
    { kod: 'F.8.2.2.3', metin: 'Akraba evliliklerinin genetik sonuçlarını tartışır.', kapsam: 'olculur' },
    { kod: 'F.8.2.3.1', metin: 'Örneklerden yola çıkarak mutasyonu açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.2.3.2', metin: 'Örneklerden yola çıkarak modifikasyonu açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.2.3.3', metin: 'Mutasyonla modifikasyon arasındaki farklar ile ilgili çıkarımda bulunur.', kapsam: 'olculur' },
    { kod: 'F.8.2.4.1', metin: 'Canlıların yaşadıkları çevreye uyumlarını gözlem yaparak açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.2.5.1', metin: 'Genetik mühendisliğini ve biyoteknolojiyi ilişkilendirir.', kapsam: 'olculur' },
    { kod: 'F.8.2.5.2', metin: 'Biyoteknolojik uygulamalar kapsamında oluşturulan ikilemlerle bu uygulamaların insanlık için yararlı ve zararlı yönlerini tartışır.', kapsam: 'olculur' },
    { kod: 'F.8.2.5.3', metin: 'Gelecekteki genetik mühendisliği ve biyoteknoloji uygulamalarının neler olabileceği hakkında tahminde bulunur.', kapsam: 'olculur' },
    { kod: 'F.8.3.1.1', metin: 'Katı basıncını etkileyen değişkenleri deneyerek keşfeder.', kapsam: 'olculur' },
    { kod: 'F.8.3.1.2', metin: 'Sıvı basıncını etkileyen değişkenleri tahmin eder ve tahminlerini test eder.', kapsam: 'olculur' },
    { kod: 'F.8.3.1.3', metin: 'Katı, sıvı ve gazların basınç özelliklerinin günlük yaşam ve teknolojideki uygulamalarına örnekler verir.', kapsam: 'olculur' },
    { kod: 'F.8.4.1.1', metin: 'Periyodik sistemde, grup ve periyotların nasıl oluşturulduğunu açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.4.1.2', metin: 'Elementleri periyodik tablo üzerinde metal, yarımetal ve ametal olarak sınıflandırır.', kapsam: 'olculur' },
    { kod: 'F.8.4.2.1', metin: 'Fiziksel ve kimyasal değişim arasındaki farkları, çeşitli olayları gözlemleyerek açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.4.3.1', metin: 'Bileşiklerin kimyasal tepkime sonucunda oluştuğunu bilir.', kapsam: 'olculur' },
    { kod: 'F.8.4.4.1', metin: 'Asit ve bazların genel özelliklerini ifade eder.', kapsam: 'olculur' },
    { kod: 'F.8.4.4.2', metin: 'Asit ve bazlara günlük yaşamdan örnekler verir.', kapsam: 'olculur' },
    { kod: 'F.8.4.4.3', metin: 'Günlük hayatta ulaşılabilecek malzemeleri asit-baz ayracı olarak kullanır.', kapsam: 'olculur' },
    { kod: 'F.8.4.4.4', metin: 'Maddelerin asitlik ve bazlık durumlarına ilişkin pH değerlerini kullanarak çıkarımda bulunur.', kapsam: 'olculur' },
    { kod: 'F.8.4.4.5', metin: 'Asit ve bazların çeşitli maddeler üzerindeki etkilerini gözlemler.', kapsam: 'olculur' },
    { kod: 'F.8.4.4.6', metin: 'Asit ve bazların temizlik malzemesi olarak kullanılması esnasında oluşabilecek tehlikelerle ilgili gerekli tedbirleri alır.', kapsam: 'olculur' },
    { kod: 'F.8.4.4.7', metin: 'Asit yağmurlarının önlenmesine yönelik çözüm önerileri sunar.', kapsam: 'olculur' },
    { kod: 'F.8.4.5.1', metin: 'Isınmanın maddenin cinsine, kütlesine ve/veya sıcaklık değişimine bağlı olduğunu deney yaparak keşfeder.', kapsam: 'olculur' },
    { kod: 'F.8.4.5.2', metin: 'Hâl değiştirmek için gerekli ısının maddenin cinsi ve kütlesiyle ilişkili olduğunu deney yaparak keşfeder.', kapsam: 'olculur' },
    { kod: 'F.8.4.5.3', metin: 'Maddelerin hâl değişimi ve ısınma grafiğini çizerek yorumlar.', kapsam: 'olculur' },
    { kod: 'F.8.4.5.4', metin: 'Günlük yaşamda meydana gelen hâl değişimleri ile ısı alışverişini ilişkilendirir.', kapsam: 'olculur' },
    { kod: 'F.8.4.6.1', metin: 'Geçmişten günümüze Türkiye’deki kimya endüstrisinin gelişimini araştırır.', kapsam: 'olculur' },
    { kod: 'F.8.4.6.2', metin: 'Kimya endüstrisinde meslek dallarını araştırır ve gelecekteki yeni meslek alanları hakkında öneriler sunar.', kapsam: 'olculur' },
    { kod: 'F.8.5.1.1', metin: 'Basit makinelerin sağladığı avantajları örnekler üzerinden açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.5.1.2', metin: 'Basit makinelerden yararlanarak günlük yaşamda iş kolaylığı sağlayacak bir düzenek tasarlar.', kapsam: 'olculur' },
    { kod: 'F.8.6.1.1', metin: 'Besin zincirindeki üretici, tüketici, ayrıştırıcılara örnekler verir.', kapsam: 'olculur' },
    { kod: 'F.8.6.2.1', metin: 'Bitkilerde besin üretiminde fotosentezin önemini fark eder.', kapsam: 'olculur' },
    { kod: 'F.8.6.2.2', metin: 'Fotosentez hızını etkileyen faktörler ile ilgili çıkarımlarda bulunur.', kapsam: 'olculur' },
    { kod: 'F.8.6.2.3', metin: 'Canlılarda solunumun önemini belirtir.', kapsam: 'olculur' },
    { kod: 'F.8.6.3.1', metin: 'Madde döngülerini şema üzerinde göstererek açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.6.3.2', metin: 'Madde döngülerinin yaşam açısından önemini sorgular.', kapsam: 'olculur' },
    { kod: 'F.8.6.3.3', metin: 'Küresel iklim değişikliklerinin nedenlerini ve olası sonuçlarını tartışır.', kapsam: 'olculur' },
    { kod: 'F.8.6.4.1', metin: 'Kaynakların kullanımında tasarruflu davranmaya özen gösterir.', kapsam: 'olculur' },
    { kod: 'F.8.6.4.2', metin: 'Kaynakların tasarruflu kullanımına yönelik proje tasarlar.', kapsam: 'olculur' },
    { kod: 'F.8.6.4.3', metin: 'Geri dönüşüm için katı atıkların ayrıştırılmasının önemini açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.6.4.4', metin: 'Geri dönüşümün ülke ekonomisine katkısına ilişkin araştırma verilerini kullanarak çözüm önerileri sunar.', kapsam: 'olculur' },
    { kod: 'F.8.6.4.5', metin: 'Kaynakların tasarruflu kullanılmaması durumunda gelecekte karşılaşılabilecek problemleri belirterek çözüm önerileri sunar.', kapsam: 'olculur' },
    { kod: 'F.8.7.1.1', metin: 'Elektriklenmeyi, bazı doğa olayları ve teknolojideki uygulama örnekleri ile açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.7.1.2', metin: 'Elektrik yüklerini sınıflandırarak aynı ve farklı cins elektrik yüklerinin birbirlerine etkisini açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.7.1.3', metin: 'Deneyler yaparak elektriklenme çeşitlerini fark eder.', kapsam: 'olculur' },
    { kod: 'F.8.7.2.1', metin: 'Cisimleri, sahip oldukları elektrik yükleri bakımından sınıflandırır.', kapsam: 'olculur' },
    { kod: 'F.8.7.2.2', metin: 'Topraklamayı açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.7.3.1', metin: 'Elektrik enerjisinin ısı, ışık ve hareket enerjisine dönüştüğü uygulamalara örnekler verir.', kapsam: 'olculur' },
    { kod: 'F.8.7.3.2', metin: 'Elektrik enerjisinin ısı, ışık veya hareket enerjisine dönüşümünü temel alan bir model tasarlar.', kapsam: 'olculur' },
    { kod: 'F.8.7.3.3', metin: 'Güç santrallerinde elektrik enerjisinin nasıl üretildiğini açıklar.', kapsam: 'olculur' },
    { kod: 'F.8.7.3.4', metin: 'Güç santrallerinin avantaj ve dezavantajları konusunda fikirler üretir.', kapsam: 'olculur' },
    { kod: 'F.8.7.3.5', metin: 'Elektrik enerjisinin bilinçli ve tasarruflu kullanılmasının aile ve ülke ekonomisi bakımından önemini tartışır.', kapsam: 'olculur' },
    { kod: 'F.8.7.3.6', metin: 'Evlerde elektriği tasarruflu kullanmaya özen gösterir.', kapsam: 'olculur' },
  ],

  'T.C. İnkılap Tarihi ve Atatürkçülük': [
    { kod: 'İTA.8.1.1', metin: 'Avrupa’daki gelişmelerin yansımaları bağlamında Osmanlı Devleti’nin yirminci yüzyılın başlarındaki siyasi ve sosyal durumunu kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.1.2', metin: 'Mustafa Kemal’in çocukluk ve öğrenim hayatından hareketle onun kişilik özelliklerinin oluşumu hakkında çıkarımlarda bulunur.', kapsam: 'olculur' },
    { kod: 'İTA.8.1.3', metin: 'Gençlik döneminde Mustafa Kemal’in fikir hayatını etkileyen önemli kişileri ve olayları kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.1.4', metin: 'Mustafa Kemal’in askerlik hayatı ile ilgili olayları ve olguları onun kişilik özellikleri ile ilişkilendirir.', kapsam: 'olculur' },
    { kod: 'İTA.8.2.1', metin: 'Birinci Dünya Savaşı’nın sebeplerini ve savaşın başlamasına yol açan gelişmeleri kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.2.2', metin: 'Birinci Dünya Savaşı’nda Osmanlı Devleti’nin durumu hakkında çıkarımlarda bulunur.', kapsam: 'olculur' },
    { kod: 'İTA.8.2.3', metin: 'Mondros Ateşkes Antlaşması’nın imzalanması ve uygulanması karşısında Osmanlı yönetiminin, Mustafa Kemal’in ve halkın tutumunu analiz eder.', kapsam: 'olculur' },
    { kod: 'İTA.8.2.4', metin: 'Kuvâ-yı Millîye’nin oluşum sürecini ve sonrasında meydana gelen gelişmeleri kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.2.5', metin: 'Millî Mücadele’nin hazırlık döneminde Mustafa Kemal’in yaptığı çalışmaları analiz eder.', kapsam: 'olculur' },
    { kod: 'İTA.8.2.6', metin: 'Misakımilli’nin kabulünü ve Büyük Millet Meclisinin açılışını vatanın bütünlüğü esası ile “ulusal egemenlik” ve “tam bağımsızlık” ilkeleri ile ilişkilendirir.', kapsam: 'olculur' },
    { kod: 'İTA.8.2.7', metin: 'Büyük Millet Meclisine karşı ayaklanmalar ile ayaklanmaların bastırılması için alınan tedbirleri analiz eder.', kapsam: 'olculur' },
    { kod: 'İTA.8.2.8', metin: 'Mustafa Kemal’in ve Türk milletinin Sevr Antlaşması’na karşı tepkilerini değerlendirir.', kapsam: 'olculur' },
    { kod: 'İTA.8.3.1', metin: 'Millî Mücadele Dönemi’nde Doğu Cephesi ve Güney Cephesi’nde meydana gelen gelişmeleri kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.3.2', metin: 'Millî Mücadele Dönemi’nde Batı Cephesi’nde meydana gelen gelişmeleri kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.3.3', metin: 'Millî Mücadele’nin zor bir döneminde Maarif Kongresi yapan Atatürk’ün, millî ve çağdaş eğitime verdiği önemi kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.3.4', metin: 'Türk milletinin millî birlik, beraberlik ve dayanışmasının bir örneği olarak Tekalif-i Millîye Emirleri doğrultusunda yapılan uygulamaları analiz eder.', kapsam: 'olculur' },
    { kod: 'İTA.8.3.5', metin: 'Sakarya Meydan Savaşı’nın kazanılmasında ve Büyük Taarruz’un başarılı olmasında Mustafa Kemal’in rolüne ilişkin çıkarımlarda bulunur.', kapsam: 'olculur' },
    { kod: 'İTA.8.3.6', metin: 'Lozan Antlaşması’nın sağladığı kazanımları analiz eder.', kapsam: 'olculur' },
    { kod: 'İTA.8.3.7', metin: 'Millî Mücadele Dönemi’nin siyasi, sosyal ve kültürel olaylarının sanat ve edebiyat ürünlerine yansımalarına kanıtlar gösterir.', kapsam: 'olculur' },
    { kod: 'İTA.8.4.1', metin: 'Çağdaşlaşan Türkiye’nin temeli olan Atatürk ilkelerini açıklar.', kapsam: 'olculur' },
    { kod: 'İTA.8.4.2', metin: 'Siyasi alanda meydana gelen gelişmeleri kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.4.3', metin: 'Hukuk alanında meydana gelen gelişmelerin toplumsal hayata yansımalarını kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.4.4', metin: 'Eğitim ve kültür alanında yapılan inkılapları ve gelişmeleri kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.4.5', metin: 'Toplumsal alanda yapılan inkılapları ve meydana gelen gelişmeleri kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.4.6', metin: 'Ekonomi alanında meydana gelen gelişmeleri kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.4.7', metin: 'Atatürk Dönemi’nde sağlık alanında yapılan çalışmaları devletin temel görevleri ile ilişkilendirir.', kapsam: 'olculur' },
    { kod: 'İTA.8.4.8', metin: 'Cumhuriyet’in sağladığı kazanımları ve Atatürk’ün Türk milleti için gösterdiği hedefleri analiz eder.', kapsam: 'olculur' },
    { kod: 'İTA.8.4.9', metin: 'Atatürk ilke ve inkılaplarını oluşturan temel esasları kavrar.', kapsam: 'olculur' },
    { kod: 'İTA.8.5.1', metin: 'Atatürk Dönemi’ndeki demokratikleşme yolunda atılan adımları açıklar.', kapsam: 'olculur' },
    { kod: 'İTA.8.5.2', metin: 'Mustafa Kemal’e suikast girişimini analiz eder.', kapsam: 'olculur' },
    { kod: 'İTA.8.5.3', metin: 'Cumhuriyetin ilk yıllarında Türkiye Cumhuriyetine yönelik tehditleri analiz eder.', kapsam: 'olculur' },
    { kod: 'İTA.8.6.1', metin: 'Atatürk Dönemi Türk dış politikasının temel ilkelerini ve amaçlarını açıklar.', kapsam: 'olculur' },
    { kod: 'İTA.8.6.2', metin: 'Atatürk Dönemi Türk dış politikasında yaşanan gelişmeleri analiz eder.', kapsam: 'olculur' },
    { kod: 'İTA.8.6.3', metin: 'Atatürk’ün Hatay’ı ülkemize katmak konusunda yaptıklarına ve bu uğurda gösterdiği özveriye kanıtlar gösterir.', kapsam: 'olculur' },
    { kod: 'İTA.8.7.1', metin: 'Atatürk’ün ölümüne ilişkin yansıma ve değerlendirmelerden hareketle onun fikir ve eserlerinin evrensel değerine ilişkin çıkarımlarda bulunur.', kapsam: 'olculur' },
    { kod: 'İTA.8.7.2', metin: 'Atatürk’ün Türk Milleti’ne bıraktığı eserlerinden örnekler verir.', kapsam: 'olculur' },
    { kod: 'İTA.8.7.3', metin: 'Atatürk’ün İkinci Dünya Savaşı öncesi tespitleri ve girişimleri Türkiye’nin savaşta izlediği denge siyaseti ile ilişkilendirilir.', kapsam: 'olculur' },
    { kod: 'İTA.8.7.4', metin: 'İkinci Dünya Savaşı’ndaki gelişmelerin ve bu savaşın sonuçlarının Türkiye’ye etkilerini analiz eder.', kapsam: 'olculur' },
    { kod: 'İTA.8.7.5', metin: 'Türkiye’de çok partili siyasi hayata geçişi hızlandıran gelişmeleri, demokrasinin gerekleri açısından analiz eder.', kapsam: 'olculur' },
  ],
}

/** Üretim sırası — bir ders bitmeden sonrakine geçilmez. */
export const LGS_URETIM_SIRASI = ['Türkçe', 'Fen Bilimleri', 'T.C. İnkılap Tarihi ve Atatürkçülük']

/** Belirli bir dersin ölçülebilir kazanım kodları. */
export function olculebilirKazanimlar(ders) {
  return (LGS_KAZANIMLAR[ders] ?? []).filter((k) => k.kapsam === 'olculur').map((k) => k.kod)
}

/** Konu adı kütüphane ağacında tanımlı mı? */
export function konuTanimli(ders, konuAdi) {
  return (LGS_KONU_AGACI[ders] ?? []).some((konu) => konu.ad === konuAdi)
}

/** Konu ağaçta var ama veritabanına henüz eklenmemiş mi? */
export function konuVeritabaninaEklenmeliMi(ders, konuAdi) {
  const konu = (LGS_KONU_AGACI[ders] ?? []).find((item) => item.ad === konuAdi)
  return Boolean(konu) && konu.mevcut === false
}
