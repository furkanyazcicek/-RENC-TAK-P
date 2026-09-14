# Faz 4 ürün ve erişilebilirlik doğrulaması

Durum: passed

- Tarih: 2026-09-13
- Ortam: yerel Vite geliştirme sunucusu, izole Chromium/Playwright 1.55.0
- Veri: yalnız sentetik öğrenci (`Deniz Kaya`) ve öğretmen (`Ece Öğretmen`) fixture'ları
- Canlı Supabase okuma/yazma: yapılmadı
- Gerçek öğrenci verisi: kullanılmadı
- Kaynak sonuç: `docs/ai-koc/kanitlar/faz-4/gorsel-ui-sonucu.json`

## Zorunlu görünüm alanları

- 1440×900 masaüstü: passed — öğrenci Sorunlu Sorular listesi, öğretmen→öğrenci soru formu ve günlük kayıt yüzeyi; yatay taşma ve sayfa hatası yok.
- 768×1024 tablet: passed — genel deneme formu ile öğretmen ödev formu; alanlar, kaydırma ve birincil eylemler görünür, yatay taşma ve sayfa hatası yok.
- 390×844 telefon: passed — öğrenci soru formu ile Profil/sınav hedefi görünümü; alttan açılan modal, form sırası ve birincil eylem kullanılabilir, yatay taşma ve sayfa hatası yok.

## Klavye ve erişilebilirlik

Klavye/Erişilebilirlik: passed

Gerçek tarayıcı etkileşimiyle şu kontroller geçti:

- modal açıldığında ilk odak modal içine taşındı;
- ileri ve geri `Tab` odağı modal içinde tuttu;
- `Escape` modalı kapattı;
- kapanıştan sonra odak `Soru Gönder` tetikleyicisine döndü;
- görünen input/select/textarea alanlarının tamamı semantik etikete sahipti;
- modal içindeki etkileşimli hedeflerin tamamı en az 44×44 px idi;
- boş gönderim teknik olmayan doğrulama mesajını gösterdi ve formu kapatmadı/temizlemedi;
- `prefers-reduced-motion: reduce` bütün yakalamalarda etkinleşti;
- durumlar yalnız renkle anlatılmadı; metin ve ikon eşlik etti.

## Durum ve akış kapsamı

Kaynak-özel SQL/RPC ve istemci kabul koşusu; loading, empty, validation, saving, saved, offline/pending, retry, conflict, permission denied, degraded, unavailable, double-click/idempotency, refresh, account switch ve server acknowledgement sınırlarını doğruladı. Görsel/etkileşim koşusu DailyLog, genel/branş denemesi, ödev, öğrenci/öğretmen sorunlu soru ve Profil yüzeylerini sentetik yakalama modunda ayrıca doğruladı. AI Solve, canlı ders, ders özeti, Home/Analytics, teacher ve parent yüzeylerinin davranış regresyonları zorunlu regresyon toplayıcısında çalıştırılır.

## Görsel kanıtlar

- `gorsel/sorular-ogrenci-1440x900.png`
- `gorsel/sorular-ogretmen-form-1440x900.png`
- `gorsel/gunluk-kayit-1440x900.png`
- `gorsel/denemeler-genel-form-768x1024.png`
- `gorsel/odevler-ogretmen-form-768x1024.png`
- `gorsel/sorular-ogrenci-form-390x844.png`
- `gorsel/profil-sinav-hedefi-390x844.png`

Google Fonts istekleri yalnız tipografi varlığıdır; kişisel veya uygulama verisi taşımaz. Yakalama sırasında Supabase, API veya başka bir veri sunucusuna giden istek görülmedi.
