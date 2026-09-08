# AI Koç Faz Durumu

Son güncelleme: 8 Eylül 2026
Program durumu: Faz 2 veri ağı çekirdeği yerel kabul doğrulamasında

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
| 0 — Envanter | Tamamlandı | [Mevcut durum envanteri](MEVCUT_DURUM_ENVANTERI.md), [veri kaynakları matrisi](VERI_KAYNAKLARI_MATRISI.md), [veri akışları](VERI_AKISLARI.md), [kabul senaryoları](KABUL_SENARYOLARI.md), [baz çizgisi](BAZ_CIZGISI.md), [mimari kararlar](MIMARI_KARARLAR.md), [otomatik kabul kaydı](kanitlar/faz-0/envanter-kabul-sonucu.json) | — |
| 1 — Konu ve olay sözleşmesi | Tamamlandı | [Konu kimliği sözleşmesi](KONU_KIMLIGI_SOZLESMESI.md), [öğrenme kanıtı sözleşmesi](OGRENME_KANITI_SOZLESMESI.md), [kaynak kayıt defteri](KAYNAK_KAYIT_DEFTERI.md), [otomatik kabul kaydı](kanitlar/faz-1/faz-1-kabul-sonucu.json) | — |
| 2 — Veri ağı çekirdeği | Devam ediyor | Yerel kabul kanıtı hazırlanıyor | Yerel kapılar henüz sonuçlanmadı |
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

### Faz 0 — 7 Eylül 2026

- Durum: Tamamlandı.
- Yapılanlar: Öğrencinin erişebildiği 62 üst düzey rota ve bunların temsil ettiği 38 veri yüzeyi tarandı. AI Koç'un gerçekten okuduğu ve okumadığı kaynaklar ayrıldı. Sunucu tabloları, depolama kovaları, tarayıcı/cihaz depoları, ders sunum yolları, soru çözme yolları, dört dil, atlaslar, canlı ders, kişisel defter ve mesajlaşma akışları kaynak–taşıma–kalıcılık–kimlik–erişim–tüketici zinciriyle kaydedildi. Düzenleme, silme, tekrar kayıt ve cihaz değişimi davranışları ayrıca incelendi.
- Değişen dosyalar: Yalnız `docs/ai-koc/` altındaki Faz 0 belgeleri ve kanıt kayıtları. Ürün kodu, yapılandırma, veritabanı şeması ve canlı veri değiştirilmedi.
- Veri yapısı etkisi: Yok. Migration, seed, canlı sorgu veya veri yazımı uygulanmadı.
- Çalıştırılan kontroller: Güvenli mevcut testler ile üretim derlemesinden oluşan 29/29 kontrol başarılı oldu. Gerçek ağ kullanmayan ek `lesson_activity_events` thenable deneyiyle toplam 30/30 doğrulama başarılıdır. Ders içeriği doğrulaması 185 belgeyi denetledi; 0 hata ve daha önce de var olan 32 derinlik uyarısı verdi. Ayrıntılar ve günlükler [baz çizgisinde](BAZ_CIZGISI.md) kayıtlıdır.
- Geçen kabul ölçütleri: Rota/yüzey kapsamı; 43/43 sunucu tablosu, 37 SQL dosyası ve 4 depolama kovası sicili; tarayıcı/cihaz anahtarları; yapılandırılmış, paketli ve PDF ders yolları; veritabanı ve paketli soru kütüphaneleri; İngilizce, Almanca, Fransızca ve İspanyolcanın ayrı incelenmesi; atlas/simülasyonlar; günlük, deneme, ödev ve soru akışları; AI Soru Çöz; canlı ders, kişisel defter ve mesajlaşma; AI Koç bağlam sınırları; 14 sentetik kabul senaryosu; mimari karar soruları.
- Geçmeyen veya ertelenen ölçütler: Faz 0 kabul ölçütlerinden ertelenen yok. Canlı şema/RLS durumu, ücretli model değerlendirmeleri ve gerçek hesap/cihaz uçtan uca akışları bu görevde çalıştırılmadı; bunlar başarılı sayılmadı ve gerekçeleri [baz çizgisinde](BAZ_CIZGISI.md) açıkça kaydedildi.
- Canlı uygulama/yayın durumu: Yayın yapılmadı; canlı veritabanı veya ücretli AI servisi çağrılmadı.
- Sonraki faza bırakılan doğrulanmış giriş: Faz 1 konu ve olay sözleşmesi; [veri kaynakları matrisi](VERI_KAYNAKLARI_MATRISI.md), [kopuk akışlar](VERI_AKISLARI.md), [kabul senaryoları](KABUL_SENARYOLARI.md) ve [mimari kararlar](MIMARI_KARARLAR.md) üzerinden ilerlemelidir. Özellikle değişmez konu kimliği/sürümleme, olay kimliği ve tekilleştirme, `occurred_at`/`recorded_at`, güven sınıfı, görünür kaynak bağlantısı, düzeltme–silme yeniden hesaplama ve cihazlar arası taşıma sözleşmeleri çözülmelidir.

### Faz 1 — 7 Eylül 2026

- Durum: Tamamlandı.
- Yapılanlar: Etiketten ve ortam UUID'lerinden bağımsız sürümlü konu kimliği defteri; belirsizliği koruyan ortak çözümleyici; event/snapshot/correction/tombstone/derived kanıt zarfı; istemci–güvenilen sunucu sınırı; ölçüm, zaman, metadata, opak kaynak başvurusu ve tekrar anahtarı kuralları; M01–M38 makine kayıt defteri; 17 saf adaptör ve dört dili ayrı kapsayan 25 sentetik fixture oluşturuldu. Readiness ve AI Soru Çöz taksonomisi eski alanları koruyarak kanonik konu kimliği taşır.
- Değişen dosyalar: `src/lib/learning/` sözleşme modülleri, `src/lib/curriculum/readiness.js`, `api/_lib/solve/taxonomy.js`, `scripts/test-phase-1-learning-contracts.mjs`, `package.json` ve Faz 1 belgeleri/kanıtları. Faz 0 tarihsel belgeleri silinmedi; çalışma alanındaki ilgisiz kullanıcı değişiklikleri geri alınmadı.
- Veri yapısı etkisi: Veritabanı değişikliği yok. Kimlik defteri kodda sürümlü ve ortamdan bağımsız olduğu için Faz 1 migration gerektirmedi. Ortak kalıcı öğrenme olayı tablosu özellikle kurulmadı; Faz 2 kapsamındadır.
- Çalıştırılan kontroller: [Faz 1 sözleşme testi](kanitlar/faz-1/sozlesme-testleri.log) 14 bölümde 1.516 doğrulamayla geçti. Faz 0'ın 28 güvenli test komutu, üretim derlemesi ve mevcut ders-olayı thenable kontrolüyle birlikte [31/31 yerel komut](kanitlar/faz-1/regresyon-testleri.log) başarılıdır. Komut sayısı assertion sayısı değildir. [Derleme](kanitlar/faz-1/build.log) geçti; önceden bilinen 500 kB paket uyarısı sürüyor.
- Geçen kabul ölçütleri: 4 eğitim bağlamı, 33 ders, 330/330 graph konusu, 193 alias, güncel/alias yollarıyla 523 eski anahtar yönlendirmesi ve 307/307 ön koşul; 0 çözülemeyen ön koşul; TYT/AYT belirsizliği ve ders/bağlam sınırı; kaynak/program/ders düzeyi çözüm; sekiz kanıt sınıfı ve beş kayıt türü; güvenli istemci zenginleştirmesi; D/Y/B, oran, LGS ve diğer net formülleri; exact/day/unknown zaman; metadata/gizlilik; opak kaynak bağlantısı; istemci/backfill dedupe; düzeltme/silme projeksiyonu; M01–M38 ve 62/62 App rotası; her dilde 15 iç rota; S02, S05, S07, S08, S10, S11 ve S14.
- Geçmeyen veya ertelenen ölçütler: Faz 1 teknik kabul kapılarından geçmeyen yok. Kalıcı UNIQUE/RPC ve olay ağı Faz 2; ders/soru/atlas kaynak bağlantıları Faz 3; ana akademik kayıtlar Faz 4; dil bulut geçişi Faz 5; öğrenci modeli/AI Koç tüketimi Faz 6–8; kesin saklama ve canlı yetki denetimi Faz 9 kapsamındadır. Mevcut `lesson_activity_events` insert boşluğu ve kullanılmayan soru girişim tabloları bilinçli olarak düzeltilmedi.
- Canlı uygulama/yayın durumu: Canlı veritabanı okunmadı/değiştirilmedi; migration, seed, backfill, gerçek öğrenci olayı, ücretli model çağrısı ve yayın yapılmadı.
- Sonraki faza bırakılan doğrulanmış giriş: Faz 2 veri ağı çekirdeğine geçilebilir. Yetkili girişler [konu kimliği](KONU_KIMLIGI_SOZLESMESI.md), [kanıt sözleşmesi](OGRENME_KANITI_SOZLESMESI.md), [kaynak sicili](KAYNAK_KAYIT_DEFTERI.md) ve [makine kabul kaydıdır](kanitlar/faz-1/faz-1-kabul-sonucu.json).

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
