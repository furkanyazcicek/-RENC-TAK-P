# AI Koç Birleşik Veri Ağı — Faz Planı

Bu plan AI_KOC_URUN_HAFIZASI.md içindeki nihai hedefi uygulanabilir ve doğrulanabilir parçalara böler. Fazlar sırayla ilerler. Bir fazın zorunlu kabul kapıları geçmeden sonraki faz tamamlanmış sayılamaz.

Her faz ayrı bir Codex görevi olarak yürütülmelidir. İlgili ayrıntılı istem docs/ai-koc/prompts klasöründedir.

## Genel uygulama yöntemi

- Her görev önce AGENTS.md, AI_KOC_URUN_HAFIZASI.md, bu plan ve FAZ_DURUMU.md dosyalarını okur.
- Mevcut kod ve veri yapısı tekrar incelenir; dosya adları veya şema ezberden varsayılmaz.
- Çalışma alanındaki ilgisiz değişiklikler korunur.
- Yerel ve geri alınabilir bütün işler tamamlanır; rutin kararlar için kullanıcı beklenmez.
- Canlı veritabanı yapısını değiştirmek veya yayın yapmak gerekiyorsa bütün dosya, test ve etki raporu önce hazırlanır; mevcut onay yoksa yalnız bu son adım için onay istenir.
- Her faz sonunda FAZ_DURUMU.md kanıt bağlantıları ve test sonuçlarıyla güncellenir.
- “Kısmen çalışıyor” durumu tamamlandı olarak işaretlenmez.

## Fazlar

| Faz | Ad | Ana sonuç | Bağımlılık |
|---|---|---|---|
| 0 | Gerçek envanter ve temel ölçüm | Hiçbir öğrenci öğrenme yüzeyinin unutulmadığı kaynak matrisi ve çalışan başlangıç testleri | Yok |
| 1 | Ortak konu ve olay sözleşmesi | Bütün kaynakların aynı ders/konu/kazanım kimliğini ve aynı kanıt dilini kullanması | Faz 0 |
| 2 | Veri ağı çekirdeği | Güvenli, tekrar üretilebilir, çift kayıtsız ortak öğrenme kanıtı altyapısı | Faz 1 |
| 3 | Ders, soru kütüphanesi, atlas ve simülasyonlar | Platform içi içerik çalışmalarının güvenilir ve kalıcı kanıt üretmesi | Faz 2 |
| 4 | Günlük takip, deneme, ödev, sorunlu soru ve AI Soru Çöz | Mevcut ana akademik kayıtların ortak ağa kayıpsız bağlanması | Faz 2 |
| 5 | Dillerin buluta taşınması | Dört dilde cihazlar arası, kullanıcıya bağlı ve AI Koç tarafından okunabilir ilerleme | Faz 2 |
| 6 | Öğrenci-konu modeli ve hafıza | Kanıta bağlı, güven düzeyli, yeniden üretilebilir öğrenci profili | Faz 3, 4, 5 |
| 7 | AI Koç araçları ve kanıtlı analiz | AI Koç'un konu için bütün kaynakları birleştirerek doğru analiz yapması | Faz 6 |
| 8 | Kapalı döngü planlama ve yönlendirme | Önerinin ilgili çalışmaya, çalışmanın sonucunun yeni analize bağlanması | Faz 7 |
| 9 | Sertleştirme ve pilot hazırlığı | Güvenlik, mahremiyet, performans, maliyet ve kalite kapılarının geçmesi | Faz 8 |
| 10 | Kontrollü canlı geçiş | Onaylı şema uygulaması, geri doldurma, gölge çalışma, sınırlı pilot ve son kabul | Faz 9 |

## Fazlar arası değişmez kapılar

### Veri tamlığı kapısı

Kaynak matrisinde kararsız veya sahibi bilinmeyen zorunlu kaynak kalamaz. Yeni bir öğrenci öğrenme modülü eklendiğinde kayıt defterine eklenmesi test veya kontrol ile zorunlu tutulur.

### Kimlik kapısı

Bir kaynak kaydı sabit öğrenci ve kaynak kimliğine sahip değilse ortak ağa alınamaz. Belirsiz konu kaydı karantinaya gider; yanlış konuya bağlanmaz.

### Tekrarsızlık kapısı

Aynı olay ağ hatası, sayfa yenileme veya yeniden deneme nedeniyle iki kez gönderildiğinde yalnız bir kanıt oluşmalıdır.

### Düzeltme kapısı

Kaynak verinin düzenlenmesi, iptali veya silinmesi türetilmiş öğrenci profilinde eski sonucun yaşamaya devam etmesine yol açamaz.

### Yetki kapısı

Başka öğrenci verisini okuma veya yazma denemeleri hem API hem veritabanı düzeyinde reddedilmelidir.

### Anlam kapısı

Ders açma, yardım isteme, günlük beyan, soru sonucu ve deneme sonucu farklı kanıt türleri olarak kalmalıdır. Birbirinin yerine kullanılamaz.

### Koçluk kalite kapısı

AI Koç sayı, ders, konu, tarih ve neden uydurmamalı; eksik veya çelişkili veride belirsizliği açıkça taşımalıdır.

### Geriye uyumluluk kapısı

Mevcut öğrenci akışları, sohbetler, planlar, ödevler, denemeler ve kayıtlar korunmalıdır.

## Faz sonuçlarının biçimi

Her faz şu çıktıları bırakır:

- çalışan uygulama değişiklikleri;
- gerekiyorsa geri alınabilir veritabanı geçiş dosyaları;
- anlamlı otomatik testler;
- elle doğrulanan temel kullanıcı akışları;
- veri ve güvenlik etkisi;
- yeni kararlar için kısa karar kaydı;
- FAZ_DURUMU.md güncellemesi;
- sonraki faz için doğrulanmış giriş koşulları.

## Tahmin değil, kanıt

FAZ_DURUMU.md içindeki her tamamlanma kaydında dosya, test veya gözlem kanıtı bulunur. Şunlar tek başına kanıt değildir:

- “kod yazıldı”;
- “derleme geçti”;
- “tablo oluşturuldu”;
- “AI doğru yanıtladı” şeklindeki tek örnek;
- yalnız mutlu yol testi;
- yalnız sahte arayüz verisi.
