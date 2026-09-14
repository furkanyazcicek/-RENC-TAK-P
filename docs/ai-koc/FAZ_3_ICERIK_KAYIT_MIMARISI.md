# Faz 3 İçerik Kayıt Mimarisi

Tarih: 11 Eylül 2026  
Durum: **Yerel olarak tamamlandı, canlı onay bekliyor.**

Bu belge M13–M26 ders, soru kütüphanesi ve atlas yüzeylerinin Faz 1
anlam sözleşmesine ve Faz 2 kalıcı kanıt ağına nasıl bağlandığını
açıklar. Yetkili DDL
`supabase/migration_learning_content_activity.sql`, paketli içerik manifesti
`src/generated/learning-content-manifest.json`, istemci sınırı ise
`src/lib/learning/contentActivity/` ve ilgili `src/hooks/` modülleridir.

Bu mimari canlı şemaya uygulanmış sayılmaz. Faz 3 kabul JSON'undaki
`status: passed`, yerel PGlite senaryoları, ürün regresyonları, üretim
derlemesi ve kayıtlı görsel incelemenin sonucudur. Canlı Supabase, gerçek
öğrenci, gerçek backfill, seed, ücretli servis veya yayın kullanılmadı.

## M13–M26 anlam ve sahiplik haritası

| Matris | Kaynak kodu | Yerel Faz 3 kararı | Yetkili öğrenci kaydı | Temel kanıt |
|---|---|---|---|---|
| M13 | `library_gateway` | `catalog`; gezinme yazısı yok | — | Yok |
| M14 | `library_catalog` | `catalog`; kimlik/revizyon bağlamı | `learning_content_revisions`, eşleme ve alias sicilleri | Yok |
| M15 | `structured_lesson_activity` | Koşullu yayıcı | `lesson_activity_events`, `student_lesson_progress` | Olayına göre maruziyet, sistem gözlemi veya doğrudan ölçüm |
| M16 | `bundled_lesson_activity` | Koşullu yayıcı | `bundled_lesson_activity_events`, `student_lesson_progress` | M15 ile aynı dar ayrım |
| M17 | `library_note_exposure` | Koşullu yayıcı | `library_note_exposure_events` | Yalnız `exposure`; başarı değil |
| M18 | `lesson_personalization` | `derived_readonly` | Mevcut kişiselleştirme önbelleği | Yeni temel kanıt yok |
| M19 | `db_question_test` | Koşullu yayıcı | Tek deneme otoritesi ve cevap/revizyon tabloları | Sunucu puanlı doğrudan ölçüm |
| M20 | `bundled_question_test` | Koşullu yayıcı | M19 ile aynı deneme otoritesi | Sunucu puanlı doğrudan ölçüm |
| M21 | `physics_atlas` | Koşullu snapshot yayıcısı | Atlas görev durumu ve revizyonları | Görev/kontrol anlamına göre sistem gözlemi veya ölçüm |
| M22 | `biology_atlas` | Koşullu snapshot yayıcısı | Atlas görev durumu ve revizyonları | Tahmin+kontrol koşuluyla görev sonucu |
| M23 | `geography_atlas` | Görev snapshot'ı ve süreli deneme | Atlas görev tabloları; süreli testte soru deneme otoritesi | Görev durumu; yalnız finalde `timed_test_completed` doğrudan ölçümü |
| M24 | `chemistry_atlas` | Sürümlü mini test | Soru deneme otoritesi | Cevap ve final doğrudan ölçümü |
| M25 | `history_atlas_navigation` | `excluded` | — | Yok |
| M26 | `geometry_pilot` | Sürümlü test | Soru deneme otoritesi | Cevap ve final doğrudan ölçümü |

M13 arama/gezinme, M18 bir sunum projeksiyonu, M25 ise harita ve anlatı
gezintisidir. Bunların hiçbiri öğrencinin konuyu bildiğini ölçmez. Bu
nedenle Faz 3 SQL sicilinde `ingest_allowed=false` kalır; public yazıcı RPC
oluşturulmaz ve yerel kabul testi sıfır temel kanıtı doğrular. M14 de yalnız
içeriğin kimliğini ve konu bağını sağlar; katalog görüntülemesi öğrenci
olayı değildir.

## Değişmez uçtan uca işlem zinciri

Her bağlı eylem aşağıdaki zinciri izler:

1. Öğrencinin eylemi ilgili bileşendeki `useContentActivity`,
   `useServerAssessment` veya `useAtlasCloudActivity` sarmalıyıcısına gider.
2. `contentActivity/outbox.js`, kaynak türünü sabit RPC listesinde çözer;
   yalnız içerik/revizyon, soru/görev/seçenek ve istemci eylem kimliği gibi
   dar alanları gönderir.
3. Public kaynak-özel RPC, oturumdan `auth.uid()` değerini alır.
   `learning_private.current_student_id()` profil rolünün `student`
   olduğunu doğrular. İstemci `student_id` veya aktör rolü seçemez.
4. SQL, `learning_content_revisions` kaydını ve tam revizyonu; soruysa
   `learning_private.learning_content_items` içindeki soru/seçenek kaydını
   doğrular. Konu eşlemesi doğrulanmamışsa anlam sessizce uydurulmaz.
5. Kaynağın yetkili satırı aynı PostgreSQL transaction'ında yazılır:
   ders olayı/ilerlemesi, soru denemesi/cevabı veya atlas görev durumu.
6. Kaynak-özel SQL anlam eşlemesi, Faz 1 zarfı için olay adını, kayıt
   türünü, ölçümü, güven otoritesini ve opak kaynak konumunu kurar.
   JavaScript tarafındaki saf karşılıklar `phase3Adapters.js` içindedir.
7. `learning_private.emit_content_evidence`, Faz 2'nin
   `learning_private.ingest_evidence` fonksiyonunu çağır. Kaynak satırı ile
   kanıt aynı transaction'da başarılı olur; beklenmeyen alım sonucu hata
   yükseltir ve kaynak yazısı da geri alınır.
8. `learning_content_action_receipts`, aynı
   `student_id + source_code + client_action_id` isteğini aynı payload ile
   `duplicate`, farklı payload ile `idempotency_conflict` yapar. İstemciye
   yalnız güvenli durum/kimlik/toplam alanları döner.

Tarayıcıdan genel bir `LearningEvidence`, doğruluk bayrağı, toplam, konu
kimliği, güven seviyesi veya öğrenci kimliği kabul eden yazma ucu yoktur.

## İçerik kimliği, revizyonu ve konu bağı

### Paketli içerik

`scripts/build-phase-3-content-manifest.mjs`, dosya içeriğini kararlı JSON'a
normalize eder ve SHA-256 tabanlı `sha256-...` revizyonu üretir. Kaynak
ad alanı, içerik türü, sabit `content_id` ve revizyon birlikte kimliktir.
Liste sırası veya görünür başlık tarihsel kimlik değildir.

Public manifest soru metni, seçenek, açıklama veya cevap anahtarı taşımaz;
yalnız kimlik, revizyon, sayı ve eşleme bilgisini taşır. Ders blokları,
soru metinleri, seçenek kimlikleri, doğru seçenek ve açıklamalar build
sırasında izinleri `0600` olan, Git'e ve tarayıcı paketine girmeyen
`node_modules/.cache/drkoc/phase-3-private-content-catalog.json` dosyasına
yazılır. `scripts/lib/load-phase-3-content-catalog.mjs` checksum ve alan
izin listelerini doğruladıktan sonra public revizyon/eşleme satırları ile
private maddeleri aynı transaction'da yükler. `identity.js` geçersiz veya
çakışan madde kimliğini sessizce düzeltmez; manifest oluşturma kanıtında
sorun olarak kaydeder.

### Veritabanı içeriği

`library_notes` ve `library_question_sets` yazı tetikleyicileri içerik
kimliği/hash/revizyon sicilini eşler. `structured_lessons` öncesi tetikleyici
JSON belge hash'ini sunucuda yeniden hesaplar ve revizyonu yalnız gerçek belge
değişikliğinde ilerletir; istemcinin gönderdiği hash'e güvenmez. Sonrası
tetikleyici aynı transaction'da değişmez `structured_lesson_revisions`
kaydını, içerik/eşleme sicilini, bölüm-blok maddelerini ve private quiz
kataloğunu üretir. Bu, yerel migration tasarımıdır; canlı DB içeriğinin
tarandığı veya dönüştürüldüğü iddia edilmez.

### Eski revizyon ve alias

Soru denemesi başlarken `content_revision`, manifest hash'i ve sabit
`question_ids` listesi denemeye sabitlenir. Yeni içerik revizyonu eski
denemeyi yeniden puanlamaz. `learning_content_aliases`, eski kimliği ancak
açık hedef revizyona bağlar; başlık benzerliği veya LLM tahmini alias
oluşturmaz. `previous_revision` zinciri tarihsel bağı korur.

### Konu eşlemesi ve karantina

`learning_content_topic_mappings` durumları
`verified | source_scope_only | ambiguous | unmatched | retired` olarak
ayrılır. `verified` kayıt kanonik Faz 1 konu kimliği ister. Atlas görevi
henüz kanonik konuya güvenle bağlanamıyorsa kaynak-kapsamlı kimliği
korunabilir; `ambiguous` veya `unmatched` kayıt kanıt alımında kimlik
karantinasına gider. Bu durum `available` sayılmaz.

## Ders ve not kayıt modeli

- Yapılandırılmış ve paketli ders olayları ayrı kaynak tablolarında
  tutulur; ortak `student_lesson_progress` yalnız ilgili kaynak, içerik ve
  revizyona ait bölüm durumunu saklar.
- `lesson_opened`, ses başlatma/tamamlama ve görsel ses tıklaması maruziyet
  veya sistem gözlemidir; ustalık değildir.
- Quiz/OSYM cevabının doğruluğu istemciden değil private madde
  kataloğundan gelir. Aynı seçenek retry'da duplicate; değişen cevap
  correction'dır.
- Ders tamamlama, ölçülmüş cevapla aynı kanıt sınıfına yükseltilmez.
- Kütüphane notu yalnız tam görüntüleme eyleminde `note_opened`
  maruziyeti üretir. Kartın listede render edilmesi olay değildir.
- M18 kişiselleştirme ve anlatım konumu sunum/devam kolaylığıdır;
  yeni temel kanıt üretmez.

## Soru denemesi ve güvenilen puanlama

`student_question_set_attempts`, M19, M20, M23 süreli denemesi, M24 ve
M26 için tek deneme otoritesidir. Hazır eski ilerleme tablolarına paralel
yazıcı eklenmez.

- Başlatma RPC'si yayımlanmış tam revizyonu doğrular; deneme kimliği,
  sabit soru listesi ve varsa sunucu `expires_at` zamanını döndürür.
- Aktif cevap `student_question_attempt_answers`, append-only geçmiş
  `student_question_answer_revisions` içindedir. Aynı cevap duplicate,
  seçenek değişikliği correction'dır.
- Cevap RPC'si doğru/yanlış bilgisini döndürmez. Deneme tamamlanmadan
  istemci stil veya metin yoluyla cevap anahtarını öğrenemez.
- Finalizasyon; doğru, yanlış, boş, işaretli ve toplamı private cevap
  anahtarından hesaplar. Doğruluk oranı `correct / marked` olarak sürümlü
  formüle bağlıdır. Kaynak final satırı ile tamamlama kanıtı atomiktir.
- `get_question_attempt_result`, yalnız oturum sahibine aittir. Devam eden
  denemede seçimleri ve süreyi geri kurar; ayrıntılı doğruluk/final toplamı
  yalnız tamamlanan denemede açılır.
- Tamamlanan deneme değiştirilemez. Reset, aktif cevap ve final kanıtlarına
  tombstone yazar; audit'i silmez. Yeni çözüm yeni denemedir.
- Coğrafya süreli testinde beş dakikalık sınır sunucu saatine ve
  `expires_at` alanına dayanır. Tekil cevap temel kanıtı üretmez; yalnız
  sunucu finali `timed_test_completed` doğrudan ölçümüdür.

## Atlas durumu ve eski cihaz kaydı

Fizik, biyoloji ve coğrafya atlaslarında son görev durumu
`student_atlas_task_states`, append-only değişimler
`student_atlas_task_state_revisions` içindedir. Aynı durum retry'da duplicate,
anlamlı değişiklik correction'dır. Biyoloji tamamlanmasında tahmin/kontrol
işareti sunucuda denetlenir.

Eski `localStorage` kaydı kullanıcı kimliği taşımadığı için oturum
açıldığında sessizce sahiplenilmez. `useAtlasCloudActivity`, açık aktarım
kararı ve dar manifest olmadan import RPC'si çağırmaz. Sunucu:

- yalnız izinli görev alanlarını ve SHA-256 snapshot hash'ini kabul eder;
- en çok 500 görevi, 25'lik deterministik parçalarla işler;
- `student_atlas_import_receipts` ile aynı snapshot'ın başka hesaba
  sahiplenilmesini engeller;
- tamamlanan parçayı kaydeder, kısmi aktarımı aynı manifestten sürdürür;
- toplam puandan tekil cevap, olay zamanı veya doğruluk uydurmaz.

Anonim atlas pratiği yerel çalışabilir; anonim veri sunucu öğrencisine
dönüşmez. Bulut yolu bulunmadığında arayüz yerel ilerlemeyi korur ve
durumu `protected_local`/`unavailable` olarak gösterebilir.

## İstemci outbox, yenileme ve hesap değişimi

`contentActivity/outbox.js` kuyruğu
`drkoc:learning-outbox:v1:<userId>` anahtarıyla kullanıcı kapsamındadır.
İzinli action türü ve alan listesi kodda kapalıdır. `student_id`, aktör,
doğruluk/toplam, kanıt sınıfı/güveni, token, soru metni ve çözüm gibi
alanlar kuyruğa alınmaz.

Her eylem UUID ve payload hash'i taşır. Geçici hata üstel geri çekilmeyle
en çok 60 saniyeye kadar yeniden denenir; yetki, sahiplik, revizyon,
validasyon ve idempotency çatışmaları kalıcı durumdur. Hesap değişiminde
başka kullanıcının kuyruğu okunmaz. Sunucu deneme kimliği ve progress
yenilemeden sonra tekrar sorgulanabildiği için route state tek gerçek değildir.

## RLS, public/private sınırı ve kaynak konumu

Yerel şema kanıtı Faz 3'e ait 14 public yapıda RLS ve `FORCE ROW LEVEL
SECURITY` bulunduğunu raporlar. Öğrenci satırlarında yalnız sahibin `SELECT`
politikası vardır; güvenilen alanlara doğrudan insert/update verilmez.
`learning_private` tablo/fonksiyonları `public`, `anon` ve `authenticated`
rollerinden geri alınmıştır. `authenticated` rolüne yalnız adı ve
parametreleri kaynak anlamını daraltan public RPC'ler açılır.

Kanıtın `source_locator` alanı genel URL, ham UUID veya öğrenci kimliği
değildir; Faz 1'in `drkoc-ref:v1:...` opak başvurusudur. İleride bu bağı
çözen ekran, oturum ve kaynak sahipliğini yeniden denetlemek zorundadır.

## Eksik/kısmi şema ve sağlık

`contentActivity/health.js` ve `get_learning_content_capability`, kaynağı
dört açık durumda raporlar:

| Durum | Anlam |
|---|---|
| `available` | Bağımlılık ve beklenen manifest mevcut; sorunlu kimlik yok |
| `empty` | Şema okunabilir, kaynakta kayıt yok |
| `degraded` | Kısmi okuma, manifest uyumsuzluğu veya karantinalı/eşleşmemiş içerik var |
| `unavailable` | Tablo/RPC yok, yanıt geçersiz veya bağımlılık okunamıyor |

`catalog`, `derived_readonly` ve `excluded` kaynakları için sıfır öğrenci
olayı hata değil, sınıflandırma sonucudur. Buna karşılık emitter'da
boş kaynak ile okunamayan şema birbirine karıştırılmaz. UI kayıt servisi
yoksa öğrencinin mevcut yerel/ekran içi çalışmasını silmez.

## Geriye doldurma kararı

`src/lib/learning/contentActivity/backfill.js` ile SQL'deki
`learning_content_backfill_decisions`, `phase-3-backfill@1` kararında
birbirine eştir:

| Kaynaklar | Strateji | Tarihsel dürüstlük sınırı |
|---|---|---|
| M13–M14 | `catalog_only` | Kimlik/katalog; öğrenci olayı yok |
| M15 | `historical_provider` | Yalnız öğrenci sahibi, anlamı doğrulanmış ve revizyonu sabitlenmiş ders olayı |
| M16–M17 | `no_historical_source` | Faz 3 öncesi yetkili kalıcı kaynak yok |
| M18 | `derived_no_evidence` | Sunum önbelleği temel kanıt olmaz |
| M19 | `historical_provider` | Yalnız tamamlanmış, revizyonu ve sunucu toplamları doğrulanmış deneme |
| M20, M24, M26 | `no_historical_source` | Route/component state'ten tarihsel deneme uydurulmaz |
| M21–M23 | `explicit_device_import_only` | Kullanıcısız cihaz verisi yalnız açık sahiplikle snapshot olarak |
| M25 | `excluded` | Gezinme/müzik akademik kanıt olmaz |

Her karar için `live_apply_allowed=false` sabittir. Yerel dry-run yalnız
sentetik dört kaydı sınıflandırmış ve yazı sayısını sıfır raporlamıştır;
canlı kaynak okunmamış, gerçek provider apply edilmemiştir.

## Yerel kabul sonucu ve açık sınırlar

11 Eylül 2026 tarihli kabul artefaktının sabitlediği envanter:

- 4.344 içerik revizyonu: 185 paketli ders, 3.914 paketli soru seti,
  101 atlas görevi, 2 atlas değerlendirmesi, 1 geometri değerlendirmesi ve
  141 kütüphane notu;
- 1.452 ders bölümü, 6.093 ders bloğu, 428 quiz, 165 ÖSYM simülasyonu,
  3.917 soru seti, 39.271 soru ve 45.815 private katalog maddesi;
- public manifestte soru/cevap içeriği yok; eksik/çakışan madde kimliği,
  private katalog çatışması veya public/private parity hatası yok;
- seçenek/cevap biçimi doğrulanamayan **110 değerlendirme seti açıkça
  karantinada**; sessizce kullanılabilir sayılmıyor;
- **1.804 konu eşlemesi `unmatched`**; 141 not kimliği dosya yoluna dayanıyor
  ve doğrulanmış alias/eşleme olmadan kanonik konu sayılmıyor;
- DB yapılandırılmış ders ve soru seti sayıları canlıdan okunmadı.

Gerçek paketli manifest yerel private kataloğa atomik olarak yüklendi:
ilk uygulama 54.503 yazı, ikinci uygulama ve `dry_run` sıfır yazı üretti;
çatışma deneyi tüm transaction'ı geri aldı. Aynı katalogdan seçilen
paketli ders, soru seti, PDF notu, kimya/coğrafya/geometri değerlendirmesi
ve üç atlas kaynağı kaynak-özel RPC'lerde sentetik öğrenciyle uçtan uca
doğrulandı.

Tam kabul paketi 27 bölümde 450 Faz 3 doğrulaması, 17/17 regresyon
komutu, üretim derlemesi ve 46/46 kabul kapısıyla geçti. Masaüstü,
tablet ve telefon görsel/etkileşim kaydı kabul paketine bağlıdır. Faz 3
bu nedenle **Yerel olarak tamamlandı, canlı onay bekliyor** durumundadır.

Başarılı sayılmayan ve sonraki fazlara kalan sınırlar: gerçek çok
bağlantılı PostgreSQL yarışı (Faz 9), canlı Supabase/RLS ve gerçek öğrenci
davranışı, karantina/eşleme içerik sahibi kararları ve Faz 10 canlı geçiştir.
Migration, seed, backfill, gerçek öğrenci yazısı, ücretli servis ve yayın
yapılmamıştır.

## Kanıt dosyaları

- [İçerik envanteri](kanitlar/faz-3/icerik-envanteri.json)
- [Manifest parity](kanitlar/faz-3/manifest-parity.json)
- [Kaynak kapsamı](kanitlar/faz-3/kaynak-kapsami.json)
- [Geriye doldurma dry-run](kanitlar/faz-3/backfill-dry-run.json)
- [Migration şema özeti](kanitlar/faz-3/migration-sema-ozeti.json)
- [Görsel doğrulama](kanitlar/faz-3/gorsel-dogrulama.md)
- [Regresyon komutları](kanitlar/faz-3/regresyon-komutlari.json)
- [Nihai yerel kabul sonucu](kanitlar/faz-3/faz-3-kabul-sonucu.json)
