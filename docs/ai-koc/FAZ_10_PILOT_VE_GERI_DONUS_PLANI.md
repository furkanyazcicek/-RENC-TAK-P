# Faz 10 — Kontrollü Pilot ve Geri Dönüş Planı

Durum: **Yalnız plan. Pilot başlatılmadı; gerçek öğrenci alınmadı.**

## Başlatma ön koşulları

Pilot ancak Faz 9’un 9/9 kabul kapısı, bütün zorunlu runner komutları, üretim derlemesi ve bağımlılık taraması geçtiğinde değerlendirilebilir. Ayrıca ürün sahibinin açık yazılı onayı, canlı migration planı, gizlilik/saklama metni incelemesi, seçilmiş test hesabı listesi ve geri dönüş sorumlusu gerekir. Bu koşullardan biri yoksa özellik bayrakları kapalı kalır.

## Kademeli sıra

1. **Sentetik hesaplar — 2 gün, en az 24 profil.** Bütün kaynaklar gölgede çalışır; gerçek kullanıcıya görünmez. Kaynak/kanıt farkı sıfır, kritik kalite yüzde 100 olmalıdır.
2. **Ürün sahibinin açıkça seçtiği test hesapları — 3 gün, 3–5 hesap.** Önce yalnız okuma/analiz; yazma kill switch kapalı. Ürün sahibi her gün örnekleri ve gizlilik açıklamasını inceler.
3. **Sınırlı pilot — 7 gün, en fazla 20 açıkça seçilmiş öğrenci.** Ayrı bilgilendirme ve uygun onay tamamlanır. Kaynaklar sırayla açılır; bütün kaynaklar aynı gün açılmaz.

Kaynak açılış sırası: günlük çalışma ve denemeler; ödev/sorunlu soru; ders ve soru kütüphanesi; AI Soru Çöz; dört dil; atlas/simülasyon; AI Koç öneri ve sonuç döngüsü. Bir sıra en az bir tam günlük sağlıklı ölçüm olmadan sonraki sıraya geçmez.

## Günlük kontrol listesi

- Kaynak başına son başarılı olay yaşı ve reddetme nedeni.
- Kuyruk büyüklüğü, en eski bekleyen olay ve projeksiyon yaşı.
- Alan kaydı/kanıt uzlaştırma farkı; karantina ve tekrar oranı.
- AI araç hata/zaman aşımı, iddia reddi, p50/p95 yanıt gecikmesi ve tahmini mesaj maliyeti.
- Kırık görev hedefi ve dil aktarım hata oranı.
- En az iki sentetik kalite senaryosunun yeniden koşusu.
- Pilot hesabından yalnız izinli, içeriksiz operasyon özeti; alarm gövdesinde öğrenci metni yok.
- Açılan kaynak, rollout sürümü, olay sözleşmesi ve model sürümü kaydı.

## Kritik durdurma eşikleri

Aşağıdakilerden biri oluşursa yeni olaylar ilgili kaynakta kapatılır, AI Koç yazma anahtarı kapatılır ve gerekirse analiz eski güvenli davranışa döner:

- herhangi bir çapraz kullanıcı okuma/yazma veya gizli anahtar sızıntısı;
- veri uzlaştırma farkının sıfırdan farklı olması;
- veri kaybı, aynı kanıtın iki kez sayılması veya silinen sonucun yaşamaya devam etmesi;
- kritik kalite/güvenlik senaryosunda yüzde 100’ün altı;
- karantina oranı > %1 veya olay reddi > %2;
- projeksiyon yaşı > 15 dakika ya da kuyruk gecikmesi > 5 dakika;
- AI araç hata oranı > %2 veya iddia doğrulama reddi > %1;
- kırık hedef oranı > %0,5 veya dil aktarım hatası > %2;
- AI Koç toplam yanıt p95 > 60 saniye ya da mesaj maliyeti p95 > 0,01 ABD doları;
- öğrenciye iki koç yanıtının birlikte görünmesi veya gölge çıktının ham içerikle saklanması.

## Geri dönüş sorumluluğu ve adımları

Birincil karar sahibi ürün sahibidir; teknik uygulama sahibi öğrenme platformu sorumlusudur. Güvenlik/mahremiyet olayında güvenlik sorumlusu durdurma kararını tek başına başlatabilir.

1. `AI_COACH_WRITES_ENABLED=false` ile bütün koçluk yazılarını durdur.
2. Sorun analizdeyse `AI_COACH_ANALYSIS_MODE=disabled`; kaynakta ise ilgili `LEARNING_SOURCE_EVENT_OVERRIDES` değerini kapat.
3. Projeksiyonu `shadow` veya `disabled` moda al; son doğrulanmış tüketici görünür nesli koru.
4. Kuyruğu silme. Yeni denemeleri durdur, cursor ve idempotency makbuzlarını koru.
5. Kişisel içerik olmadan etkilenen kaynak, zaman aralığı, sözleşme/model/rollout sürümü ve sayım farkını kaydet.
6. Sentetik replay ile kök nedeni doğrula; düzeltmeden sonra tam/artımlı checksum eşitliğini yeniden çalıştır.
7. Ürün sahibinin açık onayı olmadan kaynağı veya yazmayı yeniden açma.

## Öğrenci geri bildirimi

Pilot geri bildirimi serbest kişisel metin toplamaya zorlamaz. Önce `yararlı / yararlı değil / emin değilim` ve sınırlı neden kodları kullanılır. İsteğe bağlı serbest metin ayrı bilgilendirme ve saklama kararı olmadan öğrenme kanıtına kopyalanmaz. Yanlış eşleme bildirimi puanı doğrudan değiştirmez; inceleme ve yeniden hesaplama talebi oluşturur.

## Genel kullanıma geçiş kapıları

- Yedi günlük sınırlı pilotta kritik güvenlik/mahremiyet olayı: 0.
- Her gün ve toplamda uzlaştırma farkı: 0; veri kaybı/çift sayım: 0.
- Kritik kalite metrikleri: %100; açıklık/uygulanabilirlik: en az %90.
- On iki örnek ürün sahibi/insan incelemesi tamamlanmış ve kritik itiraz yok.
- Olay reddi ≤ %2, karantina ≤ %1, dil aktarım hatası ≤ %2.
- Projeksiyon yaşı p95 ≤ 15 dakika, kuyruk gecikmesi p95 ≤ 5 dakika.
- AI araç hata oranı ≤ %2, kırık hedef ≤ %0,5.
- Toplam yanıt p95 ≤ 60 saniye ve tahmini mesaj maliyeti p95 ≤ 0,01 ABD doları.
- Gizlilik/saklama metni onaylanmış; hesap silme ve dışa aktarım pilot hesabında yeniden doğrulanmış.
- Ürün sahibinden genel kullanım için ayrı açık onay alınmış.

Bu plan kendiliğinden pilot veya yayın yetkisi oluşturmaz. Canlı migration ve rollout adımları yalnız tek yetkili masaüstü kopyasında, temiz `main` dalında ve ayrıca verilmiş yayın onayıyla uygulanır.

