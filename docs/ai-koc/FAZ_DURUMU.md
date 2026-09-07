# AI Koç Faz Durumu

Son güncelleme: 7 Eylül 2026  
Program durumu: Planlandı, uygulama fazları henüz başlatılmadı

Bu dosya fazların gerçek ilerleme kaydıdır. Bir Codex görevi yalnız kendi fazına ait satırı, kanıtları ve açık sorunları günceller. Kabul ölçütlerinin tamamı geçmeden durum “tamamlandı” yapılamaz.

## Durum değerleri

- Başlamadı
- Devam ediyor
- Yerel olarak tamamlandı, canlı onay bekliyor
- Tamamlandı
- Bloke

## Faz tablosu

| Faz | Durum | Kabul kanıtı | Açık sorun |
|---|---|---|---|
| 0 — Envanter | Başlamadı | — | — |
| 1 — Konu ve olay sözleşmesi | Başlamadı | — | Faz 0 gerekli |
| 2 — Veri ağı çekirdeği | Başlamadı | — | Faz 1 gerekli |
| 3 — İçerik yüzeyleri | Başlamadı | — | Faz 2 gerekli |
| 4 — Ana akademik kayıtlar | Başlamadı | — | Faz 2 gerekli |
| 5 — Diller | Başlamadı | — | Faz 2 gerekli |
| 6 — Öğrenci modeli | Başlamadı | — | Faz 3, 4 ve 5 gerekli |
| 7 — AI Koç analizi | Başlamadı | — | Faz 6 gerekli |
| 8 — Kapalı döngü | Başlamadı | — | Faz 7 gerekli |
| 9 — Sertleştirme | Başlamadı | — | Faz 8 gerekli |
| 10 — Canlı geçiş | Başlamadı | — | Faz 9 ve kullanıcı onayı gerekli |

## Plan hazırlanırken doğrulanan başlangıç gerçekleri

Bunlar nihai envanter değildir; Faz 0 bunları bütün depo ve çalışan ekranlar üzerinden doğrular.

- Mevcut AI Koç günlük kayıtları, genel ve branş denemelerini, ödevleri, sorunlu soruların konu/durum özetini, AI Soru Çöz oturumlarını, AI planlarını ve sınırlı tercih hafızasını okuyabiliyor.
- Mevcut müfredat grafiği, hazırlık hesabı ve AI Soru Çöz konu eşleştiricisi ortak konu sistemi için kullanılabilecek güçlü bir temel oluşturuyor.
- Ders etkinlik tablosu ve bazı yapılandırılmış ders olayları var; paketli dersler ve yalnız PDF akışları aynı kapsamda değil.
- Soru kütüphanesi için öğrenci test denemesi tablosu var; mevcut TopicTestSolve ve TopicTestResult akışı sonucu kalıcı kayda yazmıyor.
- İngilizce, Almanca, Fransızca ve İspanyolca ilerlemesi bugün tarayıcı yerel deposunda tutuluyor; sunucu tarafındaki AI Koç bu veriyi okuyamıyor.
- Bazı atlas ve simülasyon modülleri ilerlemeyi yerel depoda tutuyor; bütün modülleri kapsayan ortak öğrenme kanıtı yok.
- AI Koç'un mevcut uzun vadeli hafızası hedef ve tercih türündeki beyaz listeli alanlarla sınırlı; konu bazlı türetilmiş hafıza ayrı bir sistem değil.
- Bugünkü veriler tek bir konu için bütün kaynaklardan sorgulanabilen, kanıt bağlantılı ve yeniden üretilebilir ortak öğrenci profiline henüz dönüşmüyor.

## Faz güncelleme şablonu

Her faz tamamlandığında aşağıdaki bölüm o faz için eklenir:

### Faz N — tarih

- Durum:
- Yapılanlar:
- Değişen dosyalar:
- Veri yapısı etkisi:
- Çalıştırılan kontroller:
- Geçen kabul ölçütleri:
- Geçmeyen veya ertelenen ölçütler:
- Canlı uygulama/yayın durumu:
- Sonraki faza bırakılan doğrulanmış giriş:

## Program sonu kabul kaydı

Bu bölüm Faz 10 tamamlanana kadar boş kalır.

- Zorunlu kaynak kapsaması:
- Eşleşmeyen konu oranı:
- Çift kayıt kontrolü:
- Düzeltme/silme yeniden hesaplama kontrolü:
- Kullanıcılar arası yetki kontrolü:
- AI Koç değerlendirme sonucu:
- Dört dil cihazlar arası kontrolü:
- Mobil/masaüstü akış kontrolü:
- Performans ve maliyet:
- Pilot sonucu:
- Nihai durum:
