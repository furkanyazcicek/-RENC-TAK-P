# AI Koç Faz Durumu

Son güncelleme: 13 Eylül 2026
Program durumu: Faz 9 yerel olarak tamamlandı; Faz 10 devam ediyor, canlı yazma kapalı ve doğrulanmış canlı hedef/geri kazanım kanıtı bekleniyor

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
| 2 — Veri ağı çekirdeği | Yerel olarak tamamlandı, canlı onay bekliyor | [Çekirdek mimarisi](VERI_AGI_CEKIRDEK_MIMARISI.md), [geriye doldurma sözleşmesi](GERIYE_DOLDURMA_SOZLESMESI.md), [şema özeti](kanitlar/faz-2/migration-sema-ozeti.json), [otomatik kabul kaydı](kanitlar/faz-2/faz-2-kabul-sonucu.json) | Gerçek çoklu bağlantı yarışı Faz 9'da PostgreSQL 18 ile geçti; canlı migration/backfill Faz 10 onayını bekliyor |
| 3 — İçerik yüzeyleri | Yerel olarak tamamlandı, canlı onay bekliyor | [İçerik kayıt mimarisi](FAZ_3_ICERIK_KAYIT_MIMARISI.md), [kaynak kapsamı](kanitlar/faz-3/kaynak-kapsami.json), [otomatik kabul kaydı](kanitlar/faz-3/faz-3-kabul-sonucu.json), [görsel doğrulama](kanitlar/faz-3/gorsel-dogrulama.md) | Çoklu bağlantı sertleştirmesi Faz 9'da geçti; canlı migration/backfill Faz 10 ve kullanıcı onayında |
| 4 — Ana akademik kayıtlar | Yerel olarak tamamlandı, canlı onay bekliyor | [Ana akademik kayıt mimarisi](FAZ_4_ANA_AKADEMIK_KAYIT_MIMARISI.md), [kaynak kapsamı](kanitlar/faz-4/faz-4-kaynak-kapsami.json), [otomatik kabul kaydı](kanitlar/faz-4/faz-4-kabul-sonucu.json), [görsel doğrulama](kanitlar/faz-4/gorsel-dogrulama.md) | Çoklu bağlantı sertleştirmesi Faz 9'da geçti; canlı migration/backfill ve eski public medya kararı Faz 10 ile kullanıcı onayında |
| 5 — Diller | Yerel olarak tamamlandı, canlı onay bekliyor | [Dil ilerlemesi mimarisi](FAZ_5_DIL_ILERMESI_MIMARISI.md), [kaynak kapsamı](kanitlar/faz-5/faz-5-kaynak-kapsami.json), [otomatik kabul kaydı](kanitlar/faz-5/faz-5-kabul-sonucu.json), [görsel doğrulama](kanitlar/faz-5/gorsel-dogrulama.md) | Çoklu bağlantı sertleştirmesi Faz 9'da geçti; canlı migration, cihaz aktarımı ve ölçümlü geçiş Faz 10 onayında |
| 6 — Öğrenci modeli | Yerel olarak tamamlandı, canlı onay bekliyor | [Öğrenci-konu modeli mimarisi](FAZ_6_OGRENCI_KONU_MODELI_MIMARISI.md), [otomatik kabul kaydı](kanitlar/faz-6/faz-6-kabul-sonucu.json), [altın senaryolar](kanitlar/faz-6/faz-6-altin-senaryolar.json), [performans kanıtı](kanitlar/faz-6/faz-6-performans-sonucu.json) | Yerel kapasite ve PostgreSQL yarışı Faz 9'da geçti; canlı kapasite/migration/backfill Faz 10 onayında |
| 7 — AI Koç analizi | Yerel olarak tamamlandı, canlı onay bekliyor | [Kanıtlı analiz mimarisi](FAZ_7_AI_KOC_KANITLI_ANALIZ_MIMARISI.md), [başlangıç değerlendirmesi](kanitlar/faz-7/faz-7-baslangic-degerlendirmesi.json), [final değerlendirmesi](kanitlar/faz-7/faz-7-degerlendirme-sonucu.json), [otomatik kabul kaydı](kanitlar/faz-7/faz-7-kabul-sonucu.json) | Sentetik saldırı/kalite/bütçe kapıları Faz 9'da geçti; gerçek model ve öğrenci pilotu Faz 10 onayında |
| 8 — Kapalı döngü | Yerel olarak tamamlandı, canlı onay bekliyor | [Kapalı döngü koçluk mimarisi](FAZ_8_KAPALI_DONGU_KOCLUK_MIMARISI.md), [başlangıç checkpoint'i](kanitlar/faz-8/faz-8-baslangic-checkpoint.json), [otomatik kabul kaydı](kanitlar/faz-8/faz-8-kabul-sonucu.json), [uçtan uca senaryolar](kanitlar/faz-8/uc-uca-senaryolar.json), [görsel doğrulama](kanitlar/faz-8/gorsel-dogrulama.json) | Çoklu bağlantı, kapasite ve saldırı provası Faz 9'da geçti; canlı migration ve gerçek hesap ölçümü Faz 10 onayında |
| 9 — Sertleştirme | Yerel olarak tamamlandı, canlı onay bekliyor | [Sertleştirme raporu](FAZ_9_SERTLESTIRME_RAPORU.md), [otomatik kabul kaydı](kanitlar/faz-9/faz-9-kabul-sonucu.json), [kaynak kapsamı](kanitlar/faz-9/kaynak-kapsam-uzlastirmasi.json), [performans/maliyet](kanitlar/faz-9/performans-ve-maliyet.json), [pilot planı](FAZ_10_PILOT_VE_GERI_DONUS_PLANI.md) | Gizlilik/saklama taslağı ürün sahibi ve gerektiğinde hukuk incelemesi; canlı ön koşullar ve açık pilot onayı Faz 10'da |
| 10 — Canlı geçiş | Devam ediyor | [Ön koşul raporu](FAZ_10_CANLI_GECIS_ON_KOSUL_RAPORU.md), [2/2 yerel hazırlık kaydı](kanitlar/faz-10/faz-10-yerel-hazirlik-komutlari.json), [başlangıç checkpoint'i](kanitlar/faz-10/faz-10-baslangic-checkpoint.json), [migration operasyon planı](kanitlar/faz-10/faz-10-migration-operasyon-plani.json), [hazırlık ve geri dönüş planı](FAZ_10_PILOT_VE_GERI_DONUS_PLANI.md) | Canlı Supabase proje kimliği ile tarihli yedek/geri kazanım kanıtı doğrulanmadı; canlı yazma kapalı |

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
- Sonraki uyumluluk düzeltmesi (12 Eylül 2026): Faz 1 sonrasında eklenen sentetik `/deneyim/*` rotası M37 `excluded` kaynağına kaydedildi; güncel rota kapsamı 63/63 oldu. Veritabanı migration'ı veya öğrenme kanıtı anlamı değişmedi. Faz 1, Faz 2 ve Faz 3 kabul testleri yeniden geçti.
- Çalıştırılan kontroller: [Faz 1 sözleşme testi](kanitlar/faz-1/sozlesme-testleri.log) 14 bölümde 1.516 doğrulamayla geçti. Faz 0'ın 28 güvenli test komutu, üretim derlemesi ve mevcut ders-olayı thenable kontrolüyle birlikte [31/31 yerel komut](kanitlar/faz-1/regresyon-testleri.log) başarılıdır. Komut sayısı assertion sayısı değildir. [Derleme](kanitlar/faz-1/build.log) geçti; önceden bilinen 500 kB paket uyarısı sürüyor.
- Geçen kabul ölçütleri: 4 eğitim bağlamı, 33 ders, 330/330 graph konusu, 193 alias, güncel/alias yollarıyla 523 eski anahtar yönlendirmesi ve 307/307 ön koşul; 0 çözülemeyen ön koşul; TYT/AYT belirsizliği ve ders/bağlam sınırı; kaynak/program/ders düzeyi çözüm; sekiz kanıt sınıfı ve beş kayıt türü; güvenli istemci zenginleştirmesi; D/Y/B, oran, LGS ve diğer net formülleri; exact/day/unknown zaman; metadata/gizlilik; opak kaynak bağlantısı; istemci/backfill dedupe; düzeltme/silme projeksiyonu; M01–M38 ve 63/63 güncel App rotası (Faz 0 anık görüntüsü 62); her dilde 15 iç rota; S02, S05, S07, S08, S10, S11 ve S14.
- Geçmeyen veya ertelenen ölçütler: Faz 1 teknik kabul kapılarından geçmeyen yok. Kalıcı UNIQUE/RPC ve olay ağı Faz 2; ders/soru/atlas kaynak bağlantıları Faz 3; ana akademik kayıtlar Faz 4; dil bulut geçişi Faz 5; öğrenci modeli/AI Koç tüketimi Faz 6–8; kesin saklama ve canlı yetki denetimi Faz 9 kapsamındadır. Mevcut `lesson_activity_events` insert boşluğu ve kullanılmayan soru girişim tabloları bilinçli olarak düzeltilmedi.
- Canlı uygulama/yayın durumu: Canlı veritabanı okunmadı/değiştirilmedi; migration, seed, backfill, gerçek öğrenci olayı, ücretli model çağrısı ve yayın yapılmadı.
- Sonraki faza bırakılan doğrulanmış giriş: Faz 2 veri ağı çekirdeğine geçilebilir. Yetkili girişler [konu kimliği](KONU_KIMLIGI_SOZLESMESI.md), [kanıt sözleşmesi](OGRENME_KANITI_SOZLESMESI.md), [kaynak sicili](KAYNAK_KAYIT_DEFTERI.md) ve [makine kabul kaydıdır](kanitlar/faz-1/faz-1-kabul-sonucu.json).

### Faz 2 — 8 Eylül 2026

- Durum: **Yerel olarak tamamlandı, canlı onay bekliyor.** Bu ifade canlıya alındığı veya program fazının tamamen bittiği anlamına gelmez.
- Yapılanlar: 38 kaynak sözleşmesinin sürümlü SQL izdüşümü, kaynak referanslı append-only kanıt defteri, private alım, DB tabanlı tekilleştirme/çatışma, karantina, etkin correction/tombstone/snapshot görünümü, cursor/processing, sürümlü diagnostic generation/replay, health ve kayıtlı provider backfill çerçevesi oluşturuldu.
- Veri yapısı etkisi: Dokuz tablo, bir security-invoker view ve private fonksiyonlardan oluşan idempotent migration yalnız geçici PGlite/PostgreSQL uyumlu test veritabanında iki kez uygulandı. Canlı şema ve gerçek veri değişmedi.
- Çalıştırılan kontroller: [Faz 2 testi](kanitlar/faz-2/veri-agi-testleri.log) 17 bölümde 353 doğrulamayla geçti. Faz 1 ve mevcut ürün için [30/30 regresyon komutu](kanitlar/faz-2/regresyon-testleri.log) ile [üretim derlemesi](kanitlar/faz-2/build.log) geçti; toplam 32/32 komut başarılıdır. Önceden bilinen 500 kB paket uyarısı sürer; Faz 1 bazına göre ana paket farkı +7,68 kB, gzip farkı +1,92 kB'dir ve eşzamanlı içerik commitlerini de kapsar.
- Geçen kabul ölçütleri: Migration rollback/ikinci uygulama, 38/38 parity, M03 aynı-transaction sahiplik sarmalısı, 2/10/en güçlü yerel paralel dedupe, conflict, RLS/grant, S11 40→20→0, snapshot parity, deterministik replay checksum, worker retry/zehirli kayıt, dry-run/apply/ikinci apply/pause-resume/cancel backfill, dört health durumu, hesap/aktör silme ve 10.000 satırlı sorgu yolları geçti. S02, S05, S07, S08, S10, S11 ve S14 başarılıdır.
- Geçmeyen veya ertelenen ölçütler: Yerel Faz 2 kabul kapılarından başarısız olan yoktur. Makinede izole PostgreSQL sunucusu bulunmadığı için gerçek çoklu bağlantı yarışı çalıştırılmadı, başarılı sayılmadı ve Faz 9'a taşındı. PGlite üzerindeki 10 paralel çağrı yalnız mevcut en güçlü yerel deneydir.
- Canlı uygulama/yayın durumu: Canlı Supabase okunmadı veya değiştirilmedi; migration, seed, gerçek backfill, gerçek kaynak bağlama, ücretli model çağrısı ve yayın yapılmadı.
- Sonraki faza bırakılan doğrulanmış giriş: Faz 3–5 yerel geliştirmesi bu çekirdeğe karşı ayrı görevlerde başlayabilir. Gerçek kaynak bağlama kendi faz kabulünü; canlı geçiş ise Faz 9 provasını, Faz 10 planını ve kullanıcının açık onayını gerektirir. Ayrıntılı sonuç [makine kabul kaydındadır](kanitlar/faz-2/faz-2-kabul-sonucu.json).

### Faz 3 — 11 Eylül 2026

- Durum: **Yerel olarak tamamlandı, canlı onay bekliyor.** Bu ifade canlıya alındığı, gerçek öğrenciyle sınandığı veya programın tamamlandığı anlamına gelmez.
- Yapılanlar: M13–M26 kaynakları için kararlı içerik kimliği/revizyonu, cevap içermeyen public manifest, private madde kataloğu ve atomik katalog yükleyicisi; yapılandırılmış/paketli ders olayları; PDF maruziyeti; DB ve paketli soru setleri için tek sunucu deneme yaşam döngüsü; Fizik/Biyoloji/Coğrafya atlas snapshot ve açık cihaz aktarımı; Kimya, Coğrafya ve Geometri sunucu puanlaması; kullanıcı kapsamında outbox/yeniden deneme; health ve geriye doldurma kararları uygulandı. Tarih atlası gezinmesi, katalog gezinmesi ve kişiselleştirme temel kanıt dışında tutuldu.
- Değişen dosyalar: Faz 3 DDL'i `supabase/migration_learning_content_activity.sql`; `src/lib/learning/contentActivity/` ve ilgili hook/bileşen bağları; manifest/katalog build ve loader betikleri; Faz 3 test/runner betikleri; `src/generated/learning-content-manifest.json` ve `docs/ai-koc/` altındaki Faz 3 mimari/kanıt kayıtları. Çalışma alanındaki ilgisiz kullanıcı değişiklikleri korunmuştur.
- Veri yapısı etkisi: Yerel idempotent migration; içerik/eşleme sicili, private madde kataloğu, ders/not/deneme/cevap/atlas kaynak tabloları, receipt ve kaynak-özel RPC'leri tanımlar. Yalnız geçici PGlite veritabanında uygulandı. Paketli private katalog Git'e veya tarayıcı paketine girmez.
- Çalıştırılan kontroller: [Faz 3 çekirdek testi](kanitlar/faz-3/regresyon-testleri.log) 27 bölümde 450 doğrulamayla geçti. [Tam runner](kanitlar/faz-3/regresyon-komutlari.json) Faz 1, Faz 2, ders, soru kütüphanesi, dört atlas, ana sayfa ve üretim derlemesi dâhil 17/17 komutu başarıyla tamamladı; 46/46 kabul kapısı geçti. Masaüstü 1440×900, tablet 768×1024 ve telefon 390×844 incelemesi [görsel kanıtta](kanitlar/faz-3/gorsel-dogrulama.md) kayıtlıdır.
- Geçen kabul ölçütleri: 4.344 public içerik revizyonu ile 45.815 private madde checksum/parity kontrolünden geçti; ilk katalog uygulaması 54.503 yazı, ikinci uygulama ve dry-run sıfır yazı üretti, çatışma tam rollback oldu. Gerçek paketli ders/soru/not/değerlendirme/atlas örnekleri sentetik öğrenciyle kaynak-özel RPC'lerde uçtan uca çalıştı. Public manifest cevap anahtarı sızdırmadı; revizyon sabitleme, sunucu puanlama, yenileme, correction/reset/tombstone, idempotency/conflict, hesap izolasyonu, RLS/private sınır, replay, health ve P3-S01–P3-S07 geçti.
- Geçmeyen veya ertelenen ölçütler: Yerel Faz 3 kabul kapılarında başarısız yoktur. PGlite tek bağlantıyı serileştirdiği için gerçek çok bağlantılı PostgreSQL yarışı çalıştırılmadı ve başarılı sayılmadı; Faz 9'a taşındı. Biçimi doğrulanamayan 110 değerlendirme seti karantinada, 1.804 konu bağı `unmatched`; bunlar kullanılabilir/kanonik diye gösterilmiyor ve içerik sahibi kararı bekliyor. Build geçti; mevcut 500 kB chunk uyarısı ve `node:crypto` tarayıcı uyumluluk uyarısı sürüyor.
- Canlı uygulama/yayın durumu: Canlı Supabase okunmadı/değiştirilmedi; migration, seed, gerçek backfill, gerçek öğrenci yazısı, ücretli servis çağrısı ve yayın yapılmadı.
- Sonraki faza bırakılan doğrulanmış giriş: Faz 4 ve Faz 5 yerel geliştirmesi, Faz 3'ün sürümlü içerik kimlikleri, kaynak-özel kanıt sarmalıyıcıları ve [makine kabul kaydı](kanitlar/faz-3/faz-3-kabul-sonucu.json) üzerinden ayrı görevlerde ilerleyebilir. Faz 6, Faz 3–5 tamamlanmadan başlamaz; canlı geçiş Faz 9 ve Faz 10 kapılarına bağlıdır.

### Faz 4 — 13 Eylül 2026

- Durum: **Yerel olarak tamamlandı, canlı onay bekliyor.** Bu ifade canlıya alındığı, gerçek öğrenci/öğretmen hesaplarıyla sınandığı veya öğrenci modeli/AI Koç tüketiminin kurulduğu anlamına gelmez.
- Yapılanlar: Faz 4 başlangıcında güncel ve yetkili Faz 3 içerik baz çizgisi `learning-content-manifest@1`, 4.344 kayıt ve `6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc` checksum ile doğrulandı. M03–M07, M11–M12, M31, M33 ve M36 için sürümlü akademik sicil/adaptörler, kaynak-özel atomik RPC'ler, hesap kapsamlı outbox, correction/tombstone, health/uzlaştırma ve sentetik backfill kuruldu. Öğretmenin yalnız aktif bağlı öğrenciye sorunlu soru paylaşabildiği iki yönlü akış eklendi. M01/M02/M32/M38 negatif sınırları doğrulandı.
- Değişen dosyalar: Tek yetkili Faz 4 DDL'i `supabase/migration_learning_academic_records.sql`; `src/lib/learning/academicActivity/`, `src/hooks/useAcademicActivity.js`, ilgili akademik form/listeler; dar AI Solve sunucu yazarı; Faz 4 test/runner betikleri; bu mimari/durum belgeleri ve makine kanıtları. Faz 2 ve Faz 3 migration dosyaları değiştirilmedi.
- Veri yapısı etkisi: Migration yalnız geçici PGlite/PostgreSQL uyumlu fixture ortamında iki kez uygulandı ve kasıtlı hata halinde tam rollback doğrulandı. Kaynak tabloları ile ortak kanıt aynı transaction'da yazılır; normal roller private ingest/audit/receipt alanlarına ve doğrudan kaynak DML'ına erişmez. Canlı şema ve gerçek veri değişmedi.
- Çalıştırılan kontroller: [Faz 4 çekirdek koşusu](kanitlar/faz-4/guvenlik-testleri.log) 20 bölümde 78 çekirdek kapıyı; [tam toplayıcı](kanitlar/faz-4/regresyon-komutlari.json) Faz 1–4, parent, canlı ders, öğretmen bildirimi, AI Solve, çevrimdışı AI Koç, sınav, ana sayfa ve production build dâhil 12/12 komutu tamamladı. [Nihai kabul](kanitlar/faz-4/faz-4-kabul-sonucu.json) 85/85 kapı, 0 başarısız ve 0 bekleyen kaydeder. 1440×900, 768×1024 ve 390×844 sentetik görsel/klavye koşusu geçti.
- Geçen kabul ölçütleri: Kaynak sicili/SQL/adaptör parity; günlük, genel/branş denemesi, ödev, iki yönlü soru, AI Solve kalıcılığı/tekrarı, canlı katılım/özet ve profil hedefi anlam ayrımları; atomiklik; idempotency/conflict; RLS/storage; correction/tombstone deterministik replay; hesap kapsamlı outbox; 1.000 sentetik backfill; 10.000 revizyon ve 1.000 receipt yükü; kişisel veri minimizasyonu; tüm regresyon ve derleme kapıları geçti.
- Geçmeyen veya ertelenen ölçütler: Yerel Faz 4 kapılarında başarısız/atlanan yoktur. PGlite bağlantıyı serileştirdiği için gerçek çok bağlantılı PostgreSQL yarış sertifikasyonu başarılı sayılmadı ve Faz 9'a bırakıldı. Eski public `question-images` nesnelerinin uçtan uca private taşınması canlı/yıkıcı veri işi olduğundan Faz 9 borcu olarak açıkça korunur.
- Canlı uygulama/yayın durumu: Canlı Supabase, gerçek öğrenci verisi, gerçek backfill/seed, ücretli model, deploy ve Git push kullanılmadı.
- Sonraki faza bırakılan doğrulanmış giriş: Faz 5 kendi ayrı istemiyle ilerleyebilir. Faz 6 öğrenci modeli, Faz 7 AI Koç tüketimi ve Faz 8 kapalı döngü bu fazda uygulanmadı; kendi ön koşulları tamamlanmadan başlatılamaz. Canlı geçiş Faz 9 sertleştirmesi, Faz 10 planı ve kullanıcının açık onayını gerektirir.

### Faz 5 — 13 Eylül 2026

- Durum: **Yerel olarak tamamlandı, canlı onay bekliyor.** Bu ifade canlıya alındığı, gerçek öğrenci cihazlarında aktarıldığı veya AI Koç'un bu kayıtları tüketmeye başladığı anlamına gelmez.
- Yapılanlar: İngilizce, Almanca, Fransızca ve İspanyolcanın gerçek yerel ilerleme türleri ayrı ayrı envantere alındı. Hesap kapsamlı yerel-öncelikli depo, açık eski cihaz sahipliği/onayı, public–private veri ayrımı, revision ve deterministik alan birleştirme, hesap kapsamlı çevrimdışı kuyruk, anlaşılır kullanıcı durumu, sıfırlama/silme ve M27–M30 ortak kanıt bağlantısı kuruldu. Bağımsız dil programı okul dersi İngilizcesinden ayrı kimlikte tutuldu.
- Değişen dosyalar: Tek yetkili Faz 5 DDL'i `supabase/migration_learning_language_progress.sql`; `src/lib/learning/languageActivity/` ortak çalışma zamanı; `LanguageProgressBoundary` ve `LanguageSyncPanel`; dört dilin ilerleme depoları ile Ders/Tekrar/Kartlar/Gelişim/Kılavuz bağlantıları; Faz 5 test, tarayıcı ve regresyon runner'ları; mimari, durum ve kanıt belgeleri. Faz 2 ve Faz 3 migration dosyaları değiştirilmedi.
- Veri yapısı etkisi: Hesap+dil+bağımsız program kapsamlı public snapshot/özet/revision/activity/conflict/import tabloları ile ham serbest yazı için private tablo ve idempotent RPC'ler tanımlandı. Migration iki kez uygulama ve kasıtlı hata rollback senaryosunda yalnız geçici PGlite veritabanında çalıştı. Canlı şema değişmedi.
- Çalıştırılan kontroller: [Faz 5 çekirdek koşusu](kanitlar/faz-5/faz-5-kabul-sonucu.json) 8 bölümde 231 doğrulama ve 9/9 kabul kapısıyla geçti. [Tam toplayıcı](kanitlar/faz-5/regresyon-komutlari.json) Faz 1–5, dört dilin kendi içerik/cevap motoru testleri, gerçek sentetik tarayıcı akışı, ana sayfa ve production build dâhil 12/12 komutu tamamladı. [Görsel koşu](kanitlar/faz-5/gorsel-dogrulama.md) 1440×900, 768×1024 ve 390×844 görünümlerde onay, başarı, hata/yeniden deneme ve sıfırlama akışlarını geçti.
- Geçen kabul ölçütleri: Dört dil envanteri; hesap kapsamlı kalıcılık; açık, doğrulanmış ve tekrar çalıştırılabilir eski cihaz aktarımı; deterministik tamamlanma/skor/sayaç/tekrar/reset kuralları; A→B hesap izolasyonu; doğru dil/beceri/program bağlamlı ortak kanıt; öz beyanın ölçülmüş sonuçtan ayrılması; ham cevap ve yazı içermeyen `language-progress-summary@1`; dört mevcut dil deneyiminin bozulmaması; hesap silme cascade'i ve sıfır canlı yan etki geçti.
- Geçmeyen veya ertelenen ölçütler: Yerel Faz 5 kapılarında başarısız veya bekleyen yoktur. PGlite bağlantıyı serileştirdiği için gerçek çok bağlantılı PostgreSQL yarışı başarılı sayılmadı ve Faz 9'a bırakıldı. Gerçek cihaz aktarımı, başarı/hata oranı, geri dönüş süresi, canlı migration ve gerçek sunucu kaydı backfill'i Faz 10 ve açık kullanıcı onayını bekler.
- Canlı uygulama/yayın durumu: Canlı Supabase okunmadı/değiştirilmedi; gerçek öğrenci verisi, gerçek import/backfill/seed, ücretli model, deploy ve Git push kullanılmadı.
- Sonraki faza bırakılan doğrulanmış giriş: Faz 3, Faz 4 ve Faz 5 yerel kabul kapıları geçtiği için Faz 6 öğrenci modeli kendi ayrı istemiyle başlayabilir. Faz 5 yalnız güvenli özet ve kanıt üretir; öğrenci modeli, AI Koç tüketimi ve kapalı döngü uygulanmadı. Canlı geçiş yine Faz 9 sertleştirmesi, Faz 10 planı ve kullanıcı onayına bağlıdır.

### Faz 6 — 13 Eylül 2026

- Durum: **Yerel olarak tamamlandı, canlı onay bekliyor.** Bu ifade canlı migration yapıldığı, AI Koç'un modeli tükettiği veya gerçek öğrencilerle kalibre edildiği anlamına gelmez.
- Yapılanlar: Faz 3–5 kanıtlarından genel/program/ders/konu/kazanım kapsamında deterministik öğrenci modeli kuruldu. Maruz kalma, hacim, performans, yardım, kalıcılık, akıcılık, zorlanma, tutarlılık, plan, güncellik ve güven ayrı tutuldu. Kaynak çelişkisi, veri yetersizliği, opak kanıt bağı, sürümlü davranış örüntüsü ve puanı değiştirmeyen öğrenci itirazı eklendi.
- Değişen dosyalar: Tek yetkili Faz 6 DDL'i `supabase/migration_learning_student_topic_model.sql`; `src/lib/learning/studentModel/`; Faz 2 PostgreSQL deposunun model satırı/detay yazma ve etkinleştirme yolları; Faz 6 çekirdek/runner testleri; mimari, durum ve kanıt belgeleri. Eski Faz 2–5 migration dosyaları değiştirilmedi.
- Veri yapısı etkisi: Sürüm sözleşmesi, türetilmiş durum, opak kanıt referansı, süreli davranış örüntüsü, Faz 8 için yalnız karar ilişki sözleşmesi ve yapılandırılmış itiraz tabloları tanımlandı. Migration ilk/ikinci uygulama ve kasıtlı hata rollback senaryosunda yalnız geçici PGlite veritabanında çalıştı; canlı şema değişmedi.
- Çalıştırılan kontroller: [Faz 6 kabul kaydı](kanitlar/faz-6/faz-6-kabul-sonucu.json) 7 bölümde 107 doğrulama ve 9/9 kapıyla geçti. [Tam runner](kanitlar/faz-6/regresyon-komutlari.json) Faz 1–6, curriculum, soru ilerlemesi, çevrimdışı AI Koç, ana sayfa ve production build dâhil 11/11 komutu tamamladı. Faz 3 manifest checksum'u `6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc` olarak değişmeden kaldı.
- Geçen kabul ölçütleri: Genel/ders/konu modeli; ayrı boyutlar; kanıt/tarih/kaynak/güven açıklaması; deterministik ve sürümlü replay; correction/tombstone/geç olay; dört hafıza katmanı; yetersizlik ve çelişki; 13/13 pedagojik altın senaryo; başka öğrenci izolasyonu ve sıfır canlı yan etki geçti. 10.000 sentetik kanıt/50 konu, 5.000 ms bütçe içinde tamamlandı.
- Geçmeyen veya ertelenen ölçütler: Yerel Faz 6 kabul kapılarında başarısız veya bekleyen yoktur. PGlite tek bağlantıyı serileştirdiği için gerçek çok bağlantılı PostgreSQL yarışı ve canlı kapasite iddiası başarılı sayılmadı; Faz 9'a bırakıldı.
- Canlı uygulama/yayın durumu: Canlı Supabase okunmadı/değiştirilmedi; gerçek öğrenci verisi, gerçek backfill/seed, ücretli model, deploy ve Git push kullanılmadı.
- Sonraki faza bırakılan doğrulanmış giriş: Faz 7, yalnız kendi istemi kapsamında bu projeksiyonu AI Koç'a güvenli ve açıklanabilir okuma bağlamı olarak verebilir. Faz 8 karar döngüsü, Faz 9 sertleştirme ve Faz 10 canlı geçiş ayrı onaylarını bekler.

### Faz 7 — 13 Eylül 2026

- Durum: **Yerel olarak tamamlandı, canlı onay bekliyor.** Bu ifade ücretli modelle veya gerçek öğrencilerle kalibre edildiği ya da yayına alındığı anlamına gelmez.
- Yapılanlar: AI Koç başlangıç bağlamı yalnız onaylı tercih, Faz 6 kısa öğrenci özeti, dikkat konuları, süreli örüntüler ve kapsam bilgisine indirildi. Sekiz oturum-kapsamlı okuma aracı; konu etrafında kaynak birleştirme; tarih/sonuç sınırları; `available/empty/not_found/degraded/unavailable/forbidden` ayrımı; gerçek–çıkarım–öneri–belirsizlik sözleşmesi; yanıt öğrenciye gitmeden önce sayı/tarih/konu/güven/kapsam/referans/eylem denetimi; güvenli geri dönüş; kişisel içeriksiz gözlem ve onaylı “unut” akışı eklendi.
- Değişen dosyalar: `api/_lib/coachAnalysis.js`, `api/_lib/coachDataTools.js`, mevcut context/tool/prompt/chat/action sınırları, Faz 7 başlangıç/çekirdek/runner betikleri, `package.json` ve Faz 7 mimari/kanıt belgeleri. Arayüz, Faz 2–6 migration dosyaları ve Faz 8 karar döngüsü değiştirilmedi.
- Veri yapısı etkisi: Yok. Faz 7 migration oluşturmadı. Mevcut Faz 6 etkin projeksiyonları, opak kanıt referansları, davranış örüntüleri ve karar geçmişi yalnız okunur; kalıcı yazma araçları mevcut açık kullanıcı onayını korur.
- Çalıştırılan kontroller: [Faz 7 çekirdek koşusu](kanitlar/faz-7/faz-7-kabul-sonucu.json) 8 bölümde 137 doğrulama ve 11/11 kapıyla geçti. [Tam runner](kanitlar/faz-7/regresyon-komutlari.json) Faz 1–7, müfredat, soru ilerlemesi, çevrimdışı AI Koç, AI Soru Çöz, ana sayfa ve production build dâhil 14/14 komutu tamamladı. Faz 2–6 migration checksum değerleri değişmedi.
- Geçen kabul ölçütleri: Tek konu için ilgili kaynakları ayrı özetlerle birleştirme; kanıt/tarih/güven izlenebilirliği; anlamsal yanıt ayrımı; çelişki ve düşük güven; küçük/kademeli bağlam; sunucu oturum kimliği ve kullanıcılar arası ret; istem enjeksiyonu sınırı; dört hafıza katmanı; ölçülebilir başlangıç/final iyileşmesi; mevcut onaylı yazma ve sohbet gerilememesi; sıfır canlı yan etki geçti. Zorunlu 15 sentetik değerlendirme senaryosu başarılıdır.
- Başlangıç/final ölçümü: Sabit yedi soru başlangıçta 1 geçti, 1 kısmi, 5 başarısızdı; final deterministik sözleşme koşusunda 7/7 geçti (+6 mutlak geçiş). Başlangıç bağlamı sentetik fixture'da 3.868 karakter; 10.000 paketlik iddia defteri son koşuda 8,382 ms'dir. Bunlar yerel ölçümlerdir, canlı kalite/SLA iddiası değildir.
- Geçmeyen veya ertelenen ölçütler: Yerel Faz 7 kapılarında başarısız veya bekleyen yoktur. Gerçek model çıktısı kalite kalibrasyonu, gerçek öğrenci kullanım ölçümü, canlı maliyet/gecikme ve kapsamlı saldırı testi çalıştırılmadı; Faz 9 sertleştirme ve Faz 10 canlı geçişe bırakıldı.
- Canlı uygulama/yayın durumu: Canlı Supabase okunmadı/değiştirilmedi; gerçek öğrenci veya yedek veri, gerçek backfill, ücretli model, deploy ve Git push kullanılmadı.
- Sonraki faza bırakılan doğrulanmış giriş: Faz 8 yalnız kendi istemi kapsamında öneri–onay–uygulama–sonuç ilişkisini kapalı döngüye dönüştürebilir. Faz 7 araç ve yanıt sözleşmeleri korunmalı; Faz 9 sertleştirme ve Faz 10 canlı geçiş ayrıca beklenmelidir.

### Faz 8 — 13 Eylül 2026

- Durum: **Yerel olarak tamamlandı, canlı onay bekliyor.** Bu ifade canlı migration yapıldığı, gerçek öğrenci davranışıyla ölçüldüğü veya yayına alındığı anlamına gelmez.
- Yapılanlar: Faz 7 kanıtlı analizinin üstüne sürümlü öneri, açık öğrenci onayı, görev yaşam döngüsü, güvenli içerik hedefi, kısmi ilerleme, öğrenci beyanı ile platform doğrulamasının ayrımı, görev–kanıt eşleme, önce/sonra/gecikmeli sonuç ve kararlı günlük/haftalık brifing kuruldu. Bugünün tek odak görevi birincil öğrenme nesnesi; gerekçe ve kanıt kademeli açılım olarak tasarlandı.
- Değişen dosyalar: Tek yetkili Faz 8 DDL'i `supabase/migration_learning_coaching_loop.sql`; `src/lib/learning/coachingLoop/`; AI Koç prompt/araç/action/chat/briefing yolları; `ActionCard`, `CoachingTaskCard`, `AICoachCard` ve `AICoach`; Faz 8 çekirdek, görsel ve tam runner betikleri; mimari, karar, checkpoint ve makine kanıtları. Eski Faz 2–6 migration dosyaları değiştirilmedi.
- Veri yapısı etkisi: Öneri, görev, görev olayı, görev kanıtı, sonuç ve geri bildirim için altı FORCE RLS public tablo; private tekilleştirme makbuzu ve dar RPC'ler tanımlandı. Migration yalnız geçici PGlite veritabanında iki kez uygulandı; kasıtlı hata tam rollback oldu. Canlı şema ve gerçek veri değişmedi.
- Çalıştırılan kontroller: [Tam Faz 8 runner'ı](kanitlar/faz-8/regresyon-komutlari.json) Faz 1–8, müfredat, soru ilerlemesi, bağlam, çevrimdışı AI Koç, AI Soru Çöz, ana sayfa, 12 durumluk tarayıcı koşusu ve production build dâhil 16/16 komutu tamamladı. [Çekirdek kabul](kanitlar/faz-8/faz-8-kabul-sonucu.json) 19/19 uçtan uca senaryo, 9/9 kapı ve 94 doğrulamayla geçti. Faz 7'nin yetkili kaydı ayrıca 14/14 komut ve 11/11 kapıyla yeniden mühürlendi.
- Geçen kabul ölçütleri: Kanıttan gerekçeli ve miktarı sınırlı öneri; açık onaydan önce yazmama; sunucu hedef/kanıt doğrulaması; idempotency/conflict; kaldırılmış veya erişilemeyen içerik; platform dışı çalışma; kısmi ilerleme; eski ve yinelenen kanıt reddi; kullanıcı beyanı ayrımı; sonuç ve gecikmeli tekrar; nedensellik uydurmama; temkinli eksik/çelişkili veri; kararlı brifing; kullanıcılar arası ret; RLS; sohbet/plan gerilememesi geçti. 1440×900 ve 390×844 boyutlarında öneri, onay, ilerleme, hata, boş ve tamamlandı durumları; klavye odağı, 44 piksel dokunma alanı, kontrast, azaltılmış hareket ve yatay taşma 12/12 geçti.
- Geçmeyen veya ertelenen ölçütler: Yerel Faz 8 kapılarında başarısız veya bekleyen yoktur. PGlite gerçek çok bağlantılı PostgreSQL yarışını sertifikalandırmaz; çok bağlantılı yarış, canlı kapasite, saldırı ve geri alma provası Faz 9'a bırakıldı. Gerçek model/öğrenci kalite ve etki ölçümü Faz 9–10 kapsamındadır.
- Canlı uygulama/yayın durumu: Canlı Supabase okunmadı/değiştirilmedi; gerçek öğrenci veya yedek veri, gerçek backfill/seed, ücretli model, deploy ve Git push kullanılmadı.
- Sonraki faza bırakılan doğrulanmış giriş: Faz 9 sertleştirme kendi ayrı istemiyle başlayabilir. Faz 8 sözleşme sürümleri ve 19 senaryoluk baz çizgi korunmalı; canlı geçiş yalnız Faz 9 kanıtları, Faz 10 planı ve kullanıcının açık onayıyla yapılmalıdır.

### Faz 9 — 13 Eylül 2026

- Durum: **Yerel olarak tamamlandı, canlı onay bekliyor.** Bu ifade canlı migration, gerçek öğrenci pilotu veya yayın yapıldığı anlamına gelmez.
- Yapılanlar: M01–M38 kaynak sicili 11 zorunlu öğrenme yüzeyi altında beşli kanıtla uzlaştırıldı. Gerçek yerel PostgreSQL 18 ve beş bağlantıyla imzalı JWT→`auth.uid()`, FORCE RLS, çapraz kullanıcı, tahmin edilen kaynak, eşzamanlı tekrar ve yabancı düzeltme saldırıları çalıştırıldı. Veri minimizasyonu, öğrenci kapsamlı dışa aktarım, hesap silme, saklama taslağı, 38 kaynaklı uzlaştırma/replay, 11 kesinti senaryosu, küçük/orta/yoğun hacim bütçesi, 24 sentetik kalite profili, 12 kişisel verisiz alarm metriği, sunucu özellik bayrakları, gölge çalışma ve geri dönüş planı hazırlandı.
- Değişen dosyalar: `supabase/migration_learning_hardening.sql`; `src/lib/learning/hardening/`; `api/_lib/learning/rollout.js`; AI Koç action/chat hata ve kota sınırları; Faz 9 çekirdek, üretim paketi ve tam runner betikleri; gizlilik/saklama ve Faz 10 pilot planı; bağımlılık sürümleri ve MapLibre 6 uyumluluk importları. Faz 2–8 migration dosyaları değiştirilmedi.
- Veri yapısı etkisi: Global/kaynak/test grubu ile öğrenci kapsamlı sunucu özellik bayrakları, PII içermeyen rollout gözlemleri ve ürün sahibi/hukuk incelemesi bekleyen altı saklama politikası taslağı tanımlandı. Yeni migration yalnız geçici yerel PostgreSQL'de iki kez uygulandı; canlı Supabase şeması ve gerçek veri değişmedi.
- Çalıştırılan kontroller: [Çekirdek kabul](kanitlar/faz-9/faz-9-kabul-sonucu.json) 11 bölümde 109 doğrulama, 11/11 kesinti senaryosu ve 9/9 kapıyla geçti. [Tam runner](kanitlar/faz-9/regresyon-komutlari.json) Faz 1–9, içerik/soru/PDF, dört dil, iki atlas, tarih geometrisi, bağımlılık taraması, production build ve paket sızıntısı dâhil 27/27 komutu geçti. `npm audit` 0 bilinen açık; üretim paketinde kaynak haritası, sunucu sır adı/değeri veya sunucu bayrağı sızıntısı 0'dır.
- Geçen kabul ölçütleri: 11/11 zorunlu yüzey ve 38/38 kaynak için kimlik/konu/dedupe/düzeltme/Koç kullanımı; gerçek çok bağlantılı RLS saldırı provası; onaysız yazma ve istem enjeksiyonu; hesap silme/dışa aktarım/minimizasyon; uzlaştırma farkı 0 ve tam=artımlı replay; 11 kesintide kayıp/çift sayım 0; bütün sayısal bütçeler; 24 profilde kritik kalite %100; 12 operasyon metriği; kaynak/kullanıcı/test grubu bayrakları ve ayrı yazma kill switch'i geçti.
- Performans ve maliyet: Son yetkili Faz 9 kabul koşusunda olay yazma p95 1,074 ms; küçük/orta/yoğun projeksiyon 0,384/8,583/20,528 ms; genel/konu sorgusu p95 0,167/0,165 ms; telefon kuyruğu p95 0,089 ms ölçüldü. Sentetik 8.000 giriş + 1.200 çıkış tokenı hesabı 0,00192 ABD dolarıdır; ücretli model çağrısı yapılmadı. Bunlar canlı SLA değildir.
- Geçmeyen veya ertelenen ölçütler: Yerel Faz 9 kapılarında başarısız, atlanan veya bekleyen yoktur. Gerçek model ağ gecikmesi/maliyeti, gerçek öğrenci insan incelemesi, ürün sahibi-hukuk gizlilik/saklama onayı, canlı kapasite ve pilot etkisi yerel sentetik koşuda kanıtlanmadı; Faz 10'a bırakıldı. `npm run yayin:dogrula`, temiz çalışma ağacı ön koşulu sağlanmadığı için çalıştırılmadı; ilgisiz kullanıcı değişiklikleri korunmuştur. Ana sayfa testi ve production build ayrı olarak geçti.
- Canlı uygulama/yayın durumu: Canlı Supabase okuma/yazma, gerçek/yedek öğrenci verisi, gerçek backfill/seed, ücretli model, gerçek pilot, deploy ve Git push yapılmadı.
- Sonraki faza bırakılan doğrulanmış giriş: Faz 10 için [kademeli pilot ve geri dönüş planı](FAZ_10_PILOT_VE_GERI_DONUS_PLANI.md) hazırdır. Faz 10 ancak kendi ana istemi, ürün sahibinin açık canlı yetkisi, seçilmiş test hesapları, sorumlu adları, gizlilik/saklama incelemesi, temiz `main` ve canlı migration/yayın ön koşullarıyla başlatılabilir.

### Faz 10 — 13 Eylül 2026

- Durum: **Devam ediyor; canlı yazma kapalı.** Faz 10 yalnız güvenli, okuma amaçlı yerel ön koşul denetimiyle başlatıldı; “devam” ifadesi canlı işlem onayı sayılmadı.
- Yapılanlar: Yetkili klasör, bağımsız Git, `main`, `origin`, yerel dal eşitliği ve `.vercel` yokluğu doğrulandı. Faz 9 kabul baz çizgisi, içerik manifesti, yedi yeni migration checksum'u, güvenli kapalı özellik bayrakları, gözlem eşikleri, aday migration sırası ve ileri düzeltme sınırı makine kaydına bağlandı. Yedi migration ayrıca yıkıcı DDL, transaction ve kilit riski için statik olarak tarandı.
- Değişen dosyalar: `scripts/test-phase-10-preflight.mjs`, `scripts/test-phase-10-migration-plan.mjs`, `scripts/run-phase-10-preflight.mjs`, `package.json`, [canlı geçiş ön koşul raporu](FAZ_10_CANLI_GECIS_ON_KOSUL_RAPORU.md), [2/2 yerel hazırlık kaydı](kanitlar/faz-10/faz-10-yerel-hazirlik-komutlari.json), [başlangıç checkpoint'i](kanitlar/faz-10/faz-10-baslangic-checkpoint.json), [migration operasyon planı](kanitlar/faz-10/faz-10-migration-operasyon-plani.json) ve bu durum kaydı. Eski migration dosyaları değiştirilmedi.
- Veri yapısı etkisi: Yok. Canlı Supabase'e bağlanılmadı; migration, şema kuru çalışması, backfill veya veri dönüşümü yapılmadı.
- Çalıştırılan kontroller: `npm run test:ai-koc-faz-10:local` toplayıcısı 2/2 komutu geçti. Faz 9'un 27/27 komut, 109 doğrulama, 11/11 kesinti senaryosu ve 9/9 kapısı yeniden okundu; Faz 2/3/4/5/6/8/9 migration checksum'ları 7/7 eşleşti; 4.344 kayıtlı manifest checksum'u korundu; kod ve SQL özellik bayrağı varsayılanları kapalı bulundu. Yıkıcı üst düzey DDL 0; canlı kopyada ölçülmesi gereken non-concurrent indeks 67 bulundu.
- Geçen kabul ölçütleri: Yerel kaynak kimliği, Git kaynağı, migration bağımlılık sırası, checksum bütünlüğü, yıkıcı DDL yokluğu, transaction yürütme kuralı, güvenli bayrak başlangıcı, yerel gözlem eşikleri, geri dönüş/ileri düzeltme planı ve sıfır canlı yan etki geçti.
- Geçmeyen veya ertelenen ölçütler: Doğru canlı proje, mevcut canlı migration geçmişi/şema kuru çalışması, doğrulanmış yedek/geri kazanım, canlı alarm teslimi, gizlilik/saklama onayı, test hesapları, sorumlu adları ve altı ayrı canlı yetki kanıtlanmadı. Kirli çalışma alanı korunduğu için yayın kapısı çalıştırılmadı.
- Canlı uygulama/yayın durumu: Canlı okuma/yazma, gerçek/yedek öğrenci verisi, backfill, gölge, pilot, ücretli model, deploy, commit ve push yapılmadı.
- Somut engel ve sonraki karar: Canlı Supabase proje kimliği ile tarihli yedek/geri kazanım kanıtı sağlanmalıdır. Bunlar doğrulandıktan sonra canlı şemaya yalnız-okuma karşılaştırması yapılır; migration uygulaması için ayrıca açık onay gerekir.

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
