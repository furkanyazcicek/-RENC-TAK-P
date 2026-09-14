# Öğretmen–öğrenci bildirimleri

Bu özellik, aktif bağlı öğretmen ve öğrenci arasındaki anlamlı
hareketleri iki yönde ve iki kanaldan ulaştırır:

- panelin üst çubuğundaki kalıcı bildirim merkezi;
- hesap sahibinin izin verdiği tablet veya telefondaki PWA sistem bildirimi.

Ham tıklamalar bildirim üretmez. Öğrencinin mesajı, soru metni, kişisel notu
ve AI Koç konuşması kilit ekranı bildirimine kopyalanmaz. Mesajın veya sorunun
içeriği yalnızca kendi yetkili ekranında açılır.

## Bildirim üreten hareketler

| Gönderen hareketi | Alıcı ve panel hedefi | Bildirimde gösterilen bilgi |
| --- | --- | --- |
| Öğrenciden mesaj | Alıcı öğretmenin Mesajlar ekranı | Yalnızca yeni mesaj bilgisi |
| Öğretmenden mesaj | Alıcı öğrencinin Mesajlar ekranı | Yalnızca yeni mesaj bilgisi |
| Öğrencinin soru göndermesi | Aktif öğretmen, Sorular | Yalnızca yeni soru bilgisi |
| Öğretmenin soru çözümü göndermesi | İlgili öğrenci, Sorular | Yalnızca yeni çözüm bilgisi |
| Öğretmenin ödev vermesi | İlgili öğrenci, Ödevler | Ödev adı |
| Öğrencinin ödevi tamamlaması | Aktif öğretmen, Ödevler | Ödev adı |
| Günlük çalışma veya deneme kaydı | Aktif öğretmen, öğrenci ayrıntısı | Konu, süre ve sonuç özeti |
| Ders, test veya atlas görevi tamamlama | Aktif öğretmen, öğrenci ayrıntısı | Tamamlama ve sonuç özeti |
| Başarılı AI Soru Çöz kaydı | Aktif öğretmen, öğrenci ayrıntısı | Ders ve eşleşmiş konu |

Bir öğrenci birden fazla öğretmene aktif bağlıysa akademik hareketleri
aktif öğretmenlerin tamamına gider. Doğrudan mesaj ise yalnızca mesajın alıcısı
olan öğretmene gider. Bağ kaldırıldığı anda eski bildirimler de o öğretmene
görünmez.

## Bir defalık canlı kurulum

Bu adımlar canlı veritabanını ve Edge Function'ı değiştirdiği için yayın
onayından sonra uygulanmalıdır.

1. `supabase/migration_live_lessons.sql` daha önce uygulanmadıysa uygula.
2. `supabase/migration_teacher_notifications.sql` dosyasını Supabase SQL
   Editor'de çalıştır.
3. Web Push için aynı VAPID anahtar çiftini kullan:
   - Vercel istemci ortamı: `VITE_VAPID_PUBLIC_KEY`
   - Supabase Edge Function sırları: `VAPID_PUBLIC_KEY`,
     `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT`
4. Uzun ve rastgele bir değer üret; bunu Edge Function sırlarına
   `WEBHOOK_SECRET` olarak ekle.
5. `send-push` Edge Function'ı JWT denetimi kapalı biçimde yayınla. Erişim
   denetimini yalnızca 4. adımdaki webhook sırrı yapar.
6. Supabase Database Webhooks alanında yeni webhook oluştur:
   - tablo: `public.account_notifications`
   - olay: `INSERT`
   - yöntem: `POST`
   - hedef: `https://PROJE_KODU.supabase.co/functions/v1/send-push`
   - HTTP başlığı: `x-webhook-secret: WEBHOOK_SECRET_DEĞERİ`
7. Ana dalın normal yayın akışıyla siteyi yayınla. Elle ikinci bir Vercel
   üretim yayını oluşturma.

## Tablet veya telefonda açma

1. Siteyi tablete ana ekran uygulaması olarak ekle. iPad'de Safari'nin Paylaş
   menüsünden **Ana Ekrana Ekle** kullanılmalıdır.
2. PWA'yı ana ekrandaki simgeden aç ve bildirim alacak hesapla giriş yap.
3. Profil > Bildirimler alanında **Bildirimleri Aç** düğmesine dokun ve sistem
   iznini onayla.
4. Aktif bağlı hesaplarla iki yönde mesaj, yeni ödev ve soru çözümü
   denemesi yap. Hem üst çubuktaki zil sayacı hem de cihaz bildirimi
   görülmelidir.

Ortak tablette hesaptan çıkış yapıldığında o cihazın push aboneliği de
kaldırılır. Yeni hesap bildirimleri kendi profilinden yeniden açar.

## Yerel doğrulama

```bash
npm run test:teacher-notifications
npm run build
```

Bildirim testi; aktif bağı, veri sızıntısını, okunma yetkisini, cihaz aboneliği
sahipliğini ve yinelenen webhook korumasını canlı veriye dokunmadan sınar.
