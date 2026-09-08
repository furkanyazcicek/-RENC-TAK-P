# Codex Uygulama İstemi — Faz 2: Güvenli ve Yeniden Üretilebilir Veri Ağı Çekirdeği

Sürüm: Faz 1 sonrası depo-özel yürütme istemi 2.0

Ön koşul: Faz 1 tamamlandı

Çalışma alanı: `/Users/furkantalhayazcicek/Desktop/DRKOÇ`

## Görevin

Faz 1'de tamamlanan konu kimliği, konu çözümleyici, öğrenme kanıtı ve kaynak kayıt defteri sözleşmelerini kalıcı, güvenli, tekrar gönderimde çoğalmayan ve baştan üretilebilir bir veri ağı çekirdeğine dönüştür.

Bu fazın sonunda DRKOÇ içinde:

- Faz 1 kanıt zarfını kayıpsız saklayan append-only ortak kanıt defteri;
- istemcinin ayrıcalıklı alanları belirleyemediği güvenilir alım sınırı;
- aynı eylemin ardışık veya eş zamanlı tekrarlarında tek kayıt bırakan veritabanı düzeyi tekilleştirme;
- kaynak düzeltmesi ve silmesini `correction` / `tombstone` zinciriyle geri alabilen etkin kanıt görünümü;
- zehirli bir kaydın diğer kayıtları durdurmadığı sürümlü projeksiyon ve yeniden oynatma altyapısı;
- gerçek canlı veriye dokunmadan sınanan kuru çalışma, devam ve tekrar güvenli geriye doldurma çerçevesi;
- `available`, `empty`, `unavailable` ve `degraded` durumlarını ayıran kaynak sağlık kaydı;
- gerçek PostgreSQL davranışını kullanan RLS, yarış, migration ve tekrar üretilebilirlik testleri;
- Faz 3, 4 ve 5'in kaynak bağlamak için kullanacağı açık ve özel çekirdek arabirim

bulunmalıdır.

Bu fazda bütün ürün modüllerini ortak ağa bağlama. Ders, soru kütüphanesi ve atlas bağlantıları Faz 3; günlük takip, deneme, ödev, sorunlu soru ve AI Soru Çöz bağlantıları Faz 4; dört dilin bulut eşitlemesi Faz 5 kapsamındadır. Faz 6 öğrenci modelini, Faz 7 AI Koç yorumunu, Faz 8 öneri/eylem döngüsünü kuracaktır.

## Değişmez kapsam sınırı

- `daily_logs`, `exams`, `mock_exams`, `mock_exam_subjects`, `homeworks`, `questions`, `ai_solution_sessions`, `ai_solution_events`, `lesson_activity_events`, dil/atlas yerel depoları ve diğer alan kaynakları bu fazda gerçek ürün akışına bağlanmayacak.
- Mevcut formlara, kayıt düğmelerine veya ürün API uçlarına ikinci bağımsız “olay yaz” isteği eklenmeyecek.
- AI Koç bu fazda yeni ortak ağı okumaya başlamayacak; mevcut `api/_lib/context.js` bağlamı genişletilmeyecek.
- Ustalık, zayıflık, hazırbulunuşluk, unutma, öneri, plan veya öğrenci puanı hesaplanmayacak.
- Öğrenciye görünen yeni panel, ekran, kart veya yönetim arayüzü yapılmayacak.
- Gerçek kaynak verisi geriye doldurulmayacak; canlı Supabase okunmayacak veya değiştirilmeyecek.
- Canlı migration, seed, veri düzeltme, yayın ve ücretli model çağrısı yapılmayacak.
- Faz 1 sözleşmeleri yeniden tasarlanmayacak. Yalnız kalıcı uygulamada ortaya çıkan gerçek ve kanıtlanmış bir çelişki varsa geriye uyumlu düzeltme yapılabilir; gerekçesi ve etkisi açıkça belgelenir.
- Faz 1 kayıt defterindeki hiçbir kaynak bu faz bitti diye `connected` sayılmayacak. Gerçek bağlantı durumu Faz 3–5'te, kaynak bazında ve kabul kanıtıyla değişecektir.

## Değişmez çalışma kuralları

- Önce depo gerçeklerini oku; tablo, kolon, politika, RPC, API veya test aracı varsayma.
- `AGENTS.md` içindeki tek yayın kaynağı ve öğrenci verisi güvenliği kurallarını koru.
- Çalışma ağacındaki ilgisiz kullanıcı değişikliklerini dosya bazında ayır; geri alma, üstüne yazma veya toplu biçimlendirme yapma.
- Faz 1 modüllerini kopyalayıp ikinci doğrulayıcı üretme. Ortak JavaScript katmanında doğrudan mevcut dışa aktarımları kullan.
- Güvenlik yalnız arayüz düğmesine veya JavaScript kontrolüne dayanamaz. Kimlik, tekilleştirme ve kullanıcılar arası sınır veritabanında da uygulanmalıdır.
- `service_role` anahtarı kullanan genel amaçlı bir öğrenci kanıtı yazma yolu açma.
- Tarayıcıdan tam güvenilir kanıt zarfı kabul eden genel `/api/learning-events` benzeri uç oluşturma.
- `student_id`, `actor_id`, rol, güven, kanıt gücü, `recorded_at`, kanonik kimlik, çözüm sonucu, adaptör sürümü, tekrar anahtarı veya kayıt kimliğini istemciye seçtirme.
- Ham soru, çözüm, öğretmen yanıtı, not, mesaj, tahta, ses, video, görsel, sohbet veya serbest günlük metnini ortak kanıt metadata'sına kopyalama.
- Hata ve test günlüklerine öğrenci içeriği, JWT, e-posta, ad, ham istek veya doğrudan hassas kaynak bağlantısı yazma.
- Fiziksel silme ile öğrenme etkisini kaldırmayı karıştırma. Normal kaynak düzeltme/silme append-only kayıtla temsil edilir; hesap silme ayrı zincirleme silme davranışıdır.
- PGlite üzerinde seri çalışan çağrıları “gerçek paralel PostgreSQL yarışı” diye raporlama. Kullanılan aracın sınırını kanıt dosyasına yaz.
- Bütün yerel kabul kapıları geçmeden Faz 2'yi bitmiş sayma.

## Zorunlu okumalar

Aşağıdaki dosyaların tamamını oku:

- `AGENTS.md`
- `CLAUDE.md`
- `docs/ai-koc/AI_KOC_URUN_HAFIZASI.md`
- `docs/ai-koc/FAZ_PLANI.md`
- `docs/ai-koc/FAZ_DURUMU.md`
- `docs/ai-koc/MEVCUT_DURUM_ENVANTERI.md`
- `docs/ai-koc/VERI_KAYNAKLARI_MATRISI.md`
- `docs/ai-koc/VERI_AKISLARI.md`
- `docs/ai-koc/KABUL_SENARYOLARI.md`
- `docs/ai-koc/BAZ_CIZGISI.md`
- `docs/ai-koc/MIMARI_KARARLAR.md`
- `docs/ai-koc/KONU_KIMLIGI_SOZLESMESI.md`
- `docs/ai-koc/OGRENME_KANITI_SOZLESMESI.md`
- `docs/ai-koc/KAYNAK_KAYIT_DEFTERI.md`
- `docs/ai-koc/kanitlar/faz-0/envanter-kabul-sonucu.json`
- `docs/ai-koc/kanitlar/faz-1/faz-1-kabul-sonucu.json`
- `src/lib/learning/curriculumIdentity.js`
- `src/lib/learning/curriculumIdentityLedger.js`
- `src/lib/learning/topicResolver.js`
- `src/lib/learning/evidenceContract.js`
- `src/lib/learning/sourceRegistry.js`
- `src/lib/learning/adapters.js`
- `src/lib/learning/sourceFixtures.js`
- `src/lib/curriculum/readiness.js`
- `api/_lib/auth.js`
- `api/_lib/context.js`
- `api/_lib/errors.js`
- mevcut AI Koç yazma onayı ve araç katmanı
- `supabase/setup_new_project.sql`
- bütün mevcut migration dosyaları; özellikle RLS, `SECURITY DEFINER`, revizyon ve istek tekilleştirme örnekleri
- `supabase/migration_student_notebooks.sql`
- `scripts/test-defter-rls.mjs`
- `scripts/test-parent-rls.mjs`
- `scripts/test-live-lessons-rls.mjs`
- `scripts/run-migration.mjs`
- `scripts/test-phase-1-learning-contracts.mjs`
- `package.json`

Alt klasörde daha yerel bir `AGENTS.md` varsa onu da oku ve uygula.

Başlamadan önce şunları doğrula:

1. `FAZ_DURUMU.md` içinde Faz 1 gerçekten `Tamamlandı`.
2. `docs/ai-koc/kanitlar/faz-1/faz-1-kabul-sonucu.json` mevcut ve Faz 2'ye geçişi onaylıyor.
3. `npm run test:ai-koc-faz-1` başarılı.
4. Çalışılan klasör tam olarak `/Users/furkantalhayazcicek/Desktop/DRKOÇ`.

Bu dört koşuldan biri sağlanmıyorsa uygulamaya geçme; kanıtla ve bloke raporu ver.

## Faz 1'den gelen doğrulanmış başlangıç gerçekleri

Bu değerleri yeniden icat etme. Kod değişmişse farkı ölç ve işi durduracak bir sözleşme sapması olup olmadığını açıkla:

- Kimlik sözleşmesi `curriculum-identity@1`, defter `curriculum-ledger@1`, alias seti `curriculum-aliases@1`.
- Dört eğitim bağlamı, 33 bağlamlı ders, 330 konu, 193 alias, 523 eski anahtar yönlendirmesi ve 307 ön koşul ilişkisi var; çözülemeyen ön koşul sayısı sıfır.
- Konu çözümleyici `topic-resolver@1`; belirsizlikte ilk adayı seçmez, profil hedefini yetkili bağlam saymaz ve `topic_matched=false` kaydı konuya bağlamaz.
- Öğrenme kanıtı sözleşmesi `learning-evidence@1`, şema sürümü `1.0`.
- Kayıt türleri `event`, `snapshot`, `correction`, `tombstone`, `derived`.
- Kanıt sınıfları `direct_measurement`, `student_self_report`, `teacher_feedback`, `exposure`, `system_observation`, `model_inference`, `derived_result`, `operational_only`.
- Zaman hassasiyeti `exact`, `day`, `unknown`; snapshot için `as_of` zorunlu.
- Kaynak kullanılabilirliği `available`, `empty`, `unavailable`, `degraded` olarak ayrılıyor.
- V1'de `activity_type`, `semantic_event_type` ile aynı olmalı.
- İstemci ve kaynak/geriye doldurma için iki ayrı tekrar anahtarı sözleşmesi var.
- Metadata anahtar beyaz listesi, derinlik, metin, anahtar ve toplam 2 KiB sınırı var.
- `source_locator` yalnız `drkoc-ref:v1:<source_code>:<opaque-token>` biçiminde opak başvuru olabilir.
- Kaynak kayıt defteri `learning-source-registry@1`; M01–M38 eksiksizdir.
- 3 `emitter`, 22 `conditional_emitter`, 2 `catalog`, 5 `derived_readonly`, 6 `excluded` kaynak bulunur.
- 17 saf adaptör ve 25 sentetik fixture vardır.
- Faz 1'de kalıcı tablo, migration, canlı olay veya gerçek kaynak bağlantısı oluşturulmamıştır.
- K01 kararı kesindir: alan tablosu/yerel kaynak kendi gerçeğinin sahibidir; ortak ağ kaynak referanslı append-only kanıt ve yeniden üretilebilir projeksiyondur.
- K05 kararı kesindir: düzeltme yeni çalışma değildir; correction hedefi değiştirir, tombstone hedefi etkin görünümden çıkarır.
- K04'ün kalıcı `UNIQUE` ve işlemsel yazma ayrıntısı, K07'nin geriye doldurma çerçevesi ve K12'nin kısmi şema/erişilebilirlik uygulaması bu fazda sonuçlandırılmalıdır.

## 0. Başlangıç ve değişiklik güvenliği

Uygulamadan önce:

1. `git status --short` ve ilgili `git diff` çıktısıyla başlangıç durumunu kaydet.
2. Faz 1'e ait henüz commitlenmemiş dosyalar ile AI Koç dışındaki kullanıcı değişikliklerini ayır.
3. Dokunmayı planladığın dosyaları listele.
4. Mevcut migration/RLS test yaklaşımını ve PGlite yeteneklerini doğrula.
5. Canlı Supabase ortam değişkenlerini, şifreleri veya uzak bağlantıyı kullanmadan çalışacağını kaydet.
6. Faz 2 durumunu işe başlarken `Devam ediyor` yapabilirsin; ancak kabul tamamlanmadan daha ileri durum yazma.

İlgisiz dosyalarda test hatası görürsen onu düzeltmeye girişme. Faz 2 ile ilişkisini kanıtla veya açık sınır olarak raporla.

## 1. Çekirdek mimariyi kesinleştir

`docs/ai-koc/VERI_AGI_CEKIRDEK_MIMARISI.md` oluştur. Uygulama kodundan önce veya onunla birlikte şu kararları kesinleştir.

### 1.1. Yetkili gerçek ve işlem sınırı

- Alan kaydı yetkili gerçektir; ortak kanıt kaydı onun sürümlü, kaynak referanslı öğrenme temsilidir.
- Aynı veritabanındaki bir alan yazısı ile ortak kanıt, gelecek fazlarda tek işlem sınırında üretilebilmelidir.
- Kullanıcı arayüzünün alan kaydını ve kanıt kaydını iki ayrı ağ isteğiyle yazması yasaktır.
- Çekirdek için özel, yeniden kullanılabilir bir iç yazma fonksiyonu oluştur. Bu fonksiyon doğrudan `anon` veya `authenticated` rolüne açılmamalıdır.
- Faz 3–5 kaynakları bu iç çekirdeğe yalnız kaynak özelinde sahiplik ve anlam doğrulayan RPC, tetikleyici/outbox veya eşdeğer güvenli sarmalayıcı üzerinden ulaşmalıdır.
- Aynı veritabanındaki kaynaklar için seçilen transaction/tetikleyici/outbox modelinin yarım yazı ve tekrar riskini nasıl engellediğini belirt.
- Tarayıcı/cihaz kaynakları için ileride kullanılacak sınır, yalnız sınırlı istemci taslağını kabul etmeli; sunucu öğrenci kimliğini ve güvenilir alanları üretmelidir.
- Ortak defter alan tablosunun yerine geçmemeli ve alan kaydını geriye doğru güncellememelidir.

Bu fazda gerçek ürün kaynak sarmalayıcılarını kurma. Uçtan uca ispatı sentetik `daily_logs` fixture'ı ve yalnız testte oluşturulan kaynak-özel güvenli sarmalayıcıyla yap. Test düzeneğini üretim kaynak siciline yeni sahte kaynak olarak ekleme.

### 1.2. Güven sınırları

En az şu yolları ayrı çiz:

1. öğrenci oturumu → kaynak özelinde güvenli yazma → alan kaydı → özel çekirdek alımı;
2. yetkili öğretmen işlemi → öğrenci ilişkisinin kaynak tablosunda doğrulanması → özel çekirdek alımı;
3. cihaz/yerel snapshot → hesap sahipliği doğrulaması → kaynak özelinde bulut kaydı → özel çekirdek alımı;
4. onaylı backfill → kayıtlı adaptör → özel çekirdek alımı;
5. AI Koç → öğrencinin kendi JWT'si → salt okunur etkin görünüm.

Bu yolların ilk dördünde hangi alanın kim tarafından üretildiğini tablo halinde belgeye yaz. “Sunucu güvenilir” ifadesi tek başına yeterli değildir; sunucunun hangi yetkiyle ve hangi kaynak kaydı üzerinden doğruladığını göster.

### 1.3. Genel API yasağı

Tam güvenilir `LearningEvidence` nesnesini JSON olarak alan ve bunu öğrenci JWT'si veya service role ile doğrudan tabloya yazan genel bir uç oluşturma.

Ortak çekirdek şu iki katmanı ayırmalıdır:

- saf dönüşüm/doğrulama katmanı: Faz 1 adaptörü, çözümleyici ve kanıt doğrulayıcısı;
- kalıcılık katmanı: ayrıcalıklı alanları güvenli bağlamdan alan, SQL kısıtları ve tekilleştirmeyle yazan özel çekirdek.

Kaynak özelindeki herkese açık RPC/API'ler sonraki fazların sorumluluğudur. Çekirdek bunların güvenli biçimde kullanabileceği dar bir iç arabirim sunmalıdır.

### 1.4. Append-only anlamı

- Normal ürün rollerinin kanıt satırında `UPDATE` veya `DELETE` yapması mümkün olmamalı.
- Düzeltme ve kaynak silme yeni `correction` veya `tombstone` kaydı ekler.
- İşleme durumu, retry sayacı, cursor ve backfill durumu kanıt satırını değiştirerek tutulmaz; ayrı operasyonel yapılarda tutulur.
- Hesap silme/mahremiyet işlemi append-only kuralından farklıdır. Öğrenci hesabı silindiğinde o öğrenciye ait kanıt ve türevlerin zincirleme kaldırılabilmesi korunmalıdır.
- `actor_id` için kurulacak ilişki, bir öğretmen hesabının silinmesiyle başka öğrencinin bütün kanıt geçmişini yanlışlıkla silmemelidir. Bu davranışı tasarla ve test et.

## 2. Kalıcı veri modeli

Tercih edilen ana adlar aşağıdadır. Depoda güçlü bir adlandırma gerekçesi varsa eşdeğer ad kullanabilirsin; her eşleştirmeyi mimari belgede açıkça yaz.

### 2.1. Sürümlü kaynak sözleşmesi izdüşümü

`learning_source_contracts` veya eşdeğer sürümlü bir yapı oluştur:

- `registry_version + source_code` değişmez anahtar olsun;
- M01–M38'in yalnız kalıcılıkta gerekli alanlarını içersin;
- classification, izinli record kind, semantic event type, kanıt sınıfı, metadata/measurement beyaz listesi, kimlik kapsamı, adaptör ve retention sınıfını taşısın;
- `catalog`, `excluded` ve normal `derived_readonly` kaynakların temel kanıt alımında kullanılmasını engellesin;
- eski olayların bağlı olduğu kaynak sözleşmesi sürümünü sonradan ezmesin;
- istemci veya normal ürün rolü tarafından değiştirilemesin.

Bu yapı `src/lib/learning/sourceRegistry.js` için bağımsız ikinci el yapımı gerçek olmasın. Sicilden deterministik üretilsin veya exact-parity testiyle korunmuş sabit bir SQL izdüşümü olsun. Bir kaynak/event/izin farkı olduğunda Faz 2 testi kırılmalıdır.

### 2.2. Ortak kanıt defteri

`learning_evidence_records` veya eşdeğer ana tabloda Faz 1 sözleşmesinin bütün gerekli anlamlarını sakla. En az şu alan aileleri bulunmalıdır:

- veritabanı tarafından veya güvenilir iç sınırda üretilen değişmez `record_id`;
- kararlı ve toplam sıralamaya izin veren yalnız artan alım sırası veya eşdeğer cursor anahtarı;
- `contract_version`, `schema_version`, `source_registry_version`;
- `record_kind`;
- doğrulanmış `student_id`;
- `actor_id`, `actor_role`, `actor_student_relation`;
- `source_code`, `source_record_id`, `source_revision`, opak `source_locator`;
- `semantic_event_type` ve V1'de aynı olan `activity_type`;
- `client_action_id`, yalnız ilgili istemci eyleminde;
- `occurred_at`, `occurred_on`, `occurred_at_precision`, `as_of`, sunucu `recorded_at`;
- `education_context_id`, `subject_id`, `topic_id`, nullable `objective_id`;
- kimlik çözümünün güvenli ve sınırlı özeti/sürümü;
- `evidence_class`, `evidence_strength`, `trust_level`, `provenance`, `source_availability`;
- sözleşmeye uygun `measurement`, `relations` ve beyaz listeli `metadata`;
- `source_adapter_version`, `topic_resolver_version` ve gerekli kimlik defteri sürümü;
- sunucunun ürettiği `dedupe_key` veya eşdeğer benzersiz alanlar;
- aynı anahtarın farklı içerikle yeniden kullanımını saptayan kararlı semantik payload fingerprint'i;
- correction/tombstone için `target_record_id` ve izinli neden;
- derived kayıt destekleniyorsa girdi kimlikleri, yöntem ve sürüm;
- retention sınıfı;
- kayıt kökeni ve varsa backfill run kimliği.

Önemli kurallar:

- Serbest veya sınırsız bir `payload jsonb` kolonuna tam kanıt isteğini atıp şemayı fiilen devre dışı bırakma.
- JSONB kullanılan ölçüm, ilişki, kimlik çözümü ve metadata alanlarında Faz 1 sınırlarını hem uygulama hem mümkün olan veritabanı kısıtlarıyla koru.
- `recorded_at` tarayıcı zamanı olamaz.
- `objective_id`, Faz 1'de doğrulanmış kazanım defteri olmadığı için keyfî doldurulamaz.
- Kanonik kimlikler görünen konu etiketlerinden üretilmez.
- `source_record_id` ve `source_revision` boyut/kontrol karakteri sınırları korunur.
- D/Y/B, total/marked, accuracy, net ve duration köken/formül sürümü anlamları kaybolmaz.
- Ortak tabloda ham içerik için kolon açma.

### 2.3. Veritabanı düzeyi kısıtlar

Yalnız JavaScript doğrulamasına güvenme. Uygulanabildiği ölçüde SQL düzeyinde doğrula:

- enum/check değerleri;
- gerekli/null alanlar;
- `activity_type = semantic_event_type`;
- exact/day/unknown alan birlikteliği;
- snapshot `as_of` zorunluluğu;
- correction/tombstone hedef ve neden zorunluluğu;
- sayıların sonlu ve izinli aralıkta olması;
- metadata boyutu;
- source locator biçimi;
- source/event/record kind uyumu;
- kanıt sınıfı/event uyumu;
- doğrudan ölçümün gerçekten ölçüm taşıması;
- hedef kayıt ilişkisinin aynı öğrenci ve izinli kaynak ailesinde olması;
- tekrar anahtarı benzersizliği.

JavaScript ve SQL doğrulamasının farklı sonuç üretmemesi için parity fixture'ları yaz. SQL'in güvenli biçimde doğrulayamadığı bir kural varsa onu belgede listele ve yalnız özel iç fonksiyonun çağrılabilmesiyle nasıl korunduğunu göster.

### 2.4. Tekilleştirme ve kayıtlı onay

K04'ü aşağıdaki davranışla kapat:

- canlı istemci eylemi: `student_id + source_code + client_action_id`;
- kaynak/backfill kaydı: `student_id + source_code + source_record_id + source_revision + semantic_event_type`;
- benzersizlik yalnız uygulama sorgusuna değil PostgreSQL `UNIQUE`/benzersiz indekse dayanır;
- aynı anahtar ve aynı semantik fingerprint tekrar gelirse yeni satır oluşmaz, ilk `record_id` ve `created=false` benzeri kayıtlı sonuç döner;
- aynı anahtar farklı semantik içerikle gelirse sessizce eski sonuç dönmez; kararlı `idempotency_conflict` sonucu verir ve hiçbir yeni kayıt/projeksiyon etkisi oluşturmaz;
- farklı gerçek eylemler farklı `client_action_id` ile ayrı kalır;
- farklı öğrenciler aynı kaynak kayıt kimliğini kullanabilir;
- istemci `dedupe_key`, fingerprint veya öğrenci kimliğini belirleyemez;
- yarışta “önce sorgula sonra insert et” tek başına kullanılmaz; benzersiz kısıt/UPSERT ve transaction ile atomik çözülür;
- yanıt kaybolduktan sonra aynı isteğin tekrar gönderilmesi güvenlidir.

İlk kayıtla aynı olup olmadığını belirleyen fingerprint:

- alan sırasına duyarsız kararlı serileştirmeden üretilmeli;
- `record_id` ve `recorded_at` gibi her denemede değişen sunucu alanlarını içermemeli;
- ham içerik veya sır taşımamalı;
- aynı eğitim anlamını temsil eden sınırları belgelenmeli;
- hash çakışmasına tek güvenlik dayanağı gibi davranmamalı; benzersiz doğal alanlar korunmalıdır.

### 2.5. Karantina

`learning_evidence_quarantine` veya eşdeğer yapı şu iki durumu karıştırmamalıdır:

1. Yapısal olarak geçerli fakat konu kimliği `ambiguous` / `unmatched` olduğu için konu projeksiyonuna alınamayan kaynak kaydı.
2. Bozuk, ayrıcalıklı alan içeren, bilinmeyen kaynaklı veya boyut sınırını aşan ve tamamen reddedilen istemci isteği.

Birinci durumda güvenli ortak zarf veya ona referans saklanabilir; kayıt etkin öğrenme projeksiyonuna giremez. İkinci durumda ham istek gövdesini kalıcı karantinaya kopyalama. Yalnız kararlı neden kodu, güvenli kaynak sınıfı, zaman ve gerekiyorsa opak kayıt referansı tutulabilir.

Karantina:

- öğrenci içeriği taşımamalı;
- neden kodlarını benzersiz ve makine okunur tutmalı;
- çözülmeden kendiliğinden konuya bağlanmamalı;
- çözüm geldiğinde eski satırı değiştirmek yerine sürümlü yeniden işleme/correction yaklaşımını kullanmalı;
- başka öğrencinin kaydını görünür kılmamalı;
- bir zehirli kaydın cursor'u sonsuza kadar kilitlemesini engellemelidir.

### 2.6. Etkin görünüm ve operasyonel durum

Kanıt defterinden ayrı olarak en az şu yetenekleri kur:

- correction ve tombstone etkisini uygulayan etkin kayıt görünümü/repository sorgusu;
- snapshot ailesinde yalnız son geçerli sürümü etkin sayma;
- projeksiyon adı+sürümü için cursor/high-water mark;
- kayıt bazında başarılı, tekrar denenecek veya karantinaya alınmış işleme sonucu;
- retry sayısı ve son güvenli hata kodu;
- projeksiyon generation/checksum veya eşdeğer replay karşılaştırma bilgisi.

SQL view kullanırsan `security_invoker`/RLS davranışını doğrula; view sahibinin RLS'i yanlışlıkla aşmasına izin verme.

Faz 6 öğrenci modeli değildir. Bu fazın küçük doğrulama projeksiyonu yalnız altyapıyı ispatlamalı. Örneğin öğrenci + kaynak + kimlik kapsamında etkin kayıt sayısı ve ölçüm sınıfı toplamları tutabilir. Ustalık puanı, risk etiketi veya öneri üretmemelidir.

### 2.7. Geriye doldurma çalışma kayıtları

`learning_evidence_backfill_runs` ve gerekiyorsa ayrı cursor/item yapısı en az şunları taşımalıdır:

- run kimliği;
- kaynak kodu ve kayıt defteri sürümü;
- adaptör/çözümleyici/kanıt sözleşmesi sürümü;
- `dry_run` veya `apply` modu;
- durum: pending/running/paused/cancelled/completed/failed benzeri açık küme;
- güvenli scope ve cursor;
- batch boyutu;
- taranan, uyarlanan, eklenecek, tekrar, karantina, hata ve yazılan sayıları;
- başlangıç/bitiş zamanları;
- son güvenli hata kodu;
- devam/restart bilgisi.

Run tablosuna ham öğrenci verisi veya serbest hata metni yazma. Kaynak tablo/kolon adını dışarıdan alıp dinamik SQL'e ekleyen genel runner oluşturma; yalnız kayıtlı adaptör sağlayıcıları çalışabilsin.

### 2.8. Kaynak sağlık ve kısmi şema

K12 için öğrenci + kaynak veya uygun kapsamda sürümlü sağlık durumu oluştur:

- `available`: kaynak sorgulanabildi ve kanıt üretmeye elverişli;
- `empty`: kaynak sorgulandı, geçerli kayıt yok;
- `unavailable`: şema/yetki/bağlantı nedeniyle okunamadı;
- `degraded`: yalnız kısmi alan veya eski sürüm okunabildi.

`empty` ile hata aynı sonuç olamaz. Durum kaydı en az kaynak sürümü/capability, son başarılı kontrol, son hata sınıfı ve güncellik bilgisi taşımalıdır. Ham hata metni, SQL veya sır kaydetme.

Bu fazda gerçek ürün kaynaklarını sorgulama. Davranışı sentetik provider'larla doğrula.

## 3. Güvenli alım hattı

Faz 1 modüllerini kullanan tek bir iç uygulama hattı kur. Akış sırası açık ve test edilebilir olmalıdır:

1. kaynak özelindeki sınır oturumu ve aktörü doğrular;
2. hedef öğrenciyi `auth.uid()` ve/veya yetkili alan ilişkisi üzerinden bulur;
3. kaynak kaydının gerçekten o öğrenciye ait olduğunu doğrular;
4. `SOURCE_REGISTRY` kaydını ve izinli olay türünü bulur;
5. ilgili mevcut Faz 1 adaptörünü çalıştırır;
6. `resolveTopicIdentity` ile konu kimliğini çözer;
7. `validateClientEvidenceDraft` yalnız gerçekten istemci taslağı olan yolda uygulanır;
8. ayrıcalıklı alanları güvenilir sınır üretir;
9. `enrichTrustedEvidence` ve/veya `validateLearningEvidence` ile tam zarfı doğrular;
10. tekrar anahtarı ve semantik fingerprint'i sunucu üretir;
11. özel SQL çekirdeği transaction içinde kayıt veya kayıtlı tekrar sonucu oluşturur;
12. karantina/işleme durumu ve gerekli cursor bilgisi aynı anlamlı işlemde tutarlı kalır;
13. teknik ayrıntı sızdırmayan kararlı sonuç döner.

Mevcut dışa aktarımları kullan:

- `getSourceDefinition`
- `resolveTopicIdentity`
- ilgili `SOURCE_ADAPTERS` / saf adaptörler
- `validateClientEvidenceDraft`
- `enrichTrustedEvidence`
- `validateLearningEvidence`
- `buildEvidenceDedupeKey`
- `projectEvidenceHistory`

İsimler kodda değişmişse gerçek dışa aktarımları kullan; aynı mantığı kopyalama.

### 3.1. Ayrıcalıklı alanlar

İstemcinin aşağıdaki alanlardan herhangi birini göndermesi başarıyla sessizce kabul edilmemelidir:

- `record_id`;
- `contract_version`, `schema_version`;
- `student_id`, `actor_id`, `actor_role`, `actor_student_relation`;
- `recorded_at`;
- `evidence_class`, `evidence_strength`, `trust_level`, `provenance`, `source_availability`;
- kanonik bağlam/ders/konu/kazanım kimlikleri ve çözüm sonucu;
- adaptör, çözümleyici, registry ve kimlik sürümleri;
- `dedupe_key`, fingerprint;
- `target_record_id`, correction/tombstone nedenleri;
- derivation girdileri/yöntemi.

Faz 1 davranışı gereği kararlı hata koduyla reddet. “Üzerine güvenli değeri yazdım” diyerek saldırı niyetini görünmez kılma.

### 3.2. Aktör ve öğrenci yetkisi

- Öğrenci yolu hedef öğrenciyi yalnız `auth.uid()` üzerinden alır.
- Body/query/header içindeki `student_id` yetki kaynağı değildir.
- Öğretmen aktörü ancak kaynak-özel aktif öğretmen–öğrenci ilişkisi doğrulanmışsa bir öğrenci için kanıt üretebilir; çekirdek genel öğretmen yetkisi vermez.
- Veli bu fazda kanıt üretemez.
- Backfill aktörü normal öğrenci RPC'si gibi taklit edilmez; yalnız kapalı ve onaylı iç çalışma sınırıdır.
- Başka öğrenciye ait source record locator veya target record reddedilir.
- Öğrencinin kendi JWT'siyle okuma ve RLS yaklaşımı korunur.

### 3.3. Kaynak ve kayıt türü yetkisi

- Bilinmeyen `source_code` reddedilir.
- `excluded` ve `catalog` kaynak olay üretemez.
- `derived_readonly` kaynak istemci/base event olarak yazılamaz.
- Her kaynak yalnız kayıt defterindeki record kind ve semantic event type değerlerini kullanabilir.
- Event'e özel kanıt sınıfı istemci değil kayıt defteri tarafından belirlenir.
- Kaynağın measurement ve metadata beyaz listesi aşılırsa kayıt reddedilir.
- `source_availability != available` tam kanıt gibi yazılmaz; sağlık durumu olarak ele alınır.
- `topic_matched=false`, ambiguous ve unmatched sonuç konu projeksiyonuna alınmaz.

### 3.4. Hata sözleşmesi

İç katman ve varsa test API sarmalayıcısı en az şu kararlı sonuç sınıflarını ayırsın:

- created;
- duplicate/replayed;
- idempotency_conflict;
- validation_rejected;
- unauthorized;
- source_not_allowed;
- source_record_not_owned;
- identity_quarantined;
- dependency_unavailable;
- internal_failure.

Kullanıcıya teknik SQL, constraint, tablo, stack veya ham değer dönme. Test/debug ayrıntısı yalnız kişisel veri içermeyen yerel kanıt günlüğünde olabilir.

## 4. Düzeltme, silme ve snapshot semantiği

Faz 1'deki `projectEvidenceHistory` davranışıyla kalıcı etkin görünüm aynı sonucu üretmelidir.

### 4.1. Correction

- Yeni ve değişmez bir kayıttır; hedef satırı yerinde değiştirmez.
- Hedef kayıt var olmalıdır.
- Hedef aynı öğrenciye ait olmalıdır.
- Kaynak kodu ve kaynak kayıt ailesi sözleşmedeki izinli ilişkiyle uyumlu olmalıdır.
- Kendi kendini hedefleme, döngü ve başka kullanıcı hedefi reddedilmelidir.
- Correction yalnız güvenilir kaynak değişikliğiyle üretilebilir; istemci taslağı doğrudan correction yazamaz.
- Aynı correction tekrar gelirse çoğalmaz.
- Etkin görünüm eski hedefi çıkarır ve düzeltmenin yeni anlamını bir kez uygular.

### 4.2. Tombstone

- Kaynak silme/iptal etkisini append-only temsil eder.
- Hedefi etkin görünümden ve test projeksiyonundan çıkarır.
- Kaynak içeriğini ortak ağda yaşatmak için kopya tutmaz.
- Aynı tombstone tekrar gelirse çoğalmaz.
- Başka öğrencinin kaydını hedefleyemez.
- Normal kaynak silmesi öğrenci hesabı silmesi değildir.

### 4.3. Snapshot

- `as_of` olmadan kabul edilmez.
- Aynı `student + source + source_record + semantic_event_type` ailesinde yalnız son geçerli snapshot etkin kalır.
- Snapshot'tan geçmiş tekil event'ler uydurulmaz.
- Yeni snapshot toplamı eski snapshot'a eklenmez; aksi açıkça event modeliyle kanıtlanmadıkça son durumdur.
- Eski veya geç gelen snapshot için belirlenen ordering kuralı belgelenir ve deterministik test edilir.

### 4.4. S11 zorunlu örneği

Aynı kaynak ailesinde:

1. ilk kayıt `correct_count=40`;
2. correction ile `correct_count=20`;
3. tombstone ile kayıt etkisi sıfır

olmalıdır. Sonuç hiçbir aşamada 60 veya 40+20 olmamalı. Ham defter üç audit kaydını korurken etkin görünüm sırasıyla 40 → 20 → 0 göstermelidir.

## 5. Projeksiyon ve yeniden oynatma

Faz 6 öğrenci modeline dönüşmeden altyapıyı kanıtlayan küçük ve açıkça `diagnostic/probe` olarak adlandırılmış bir projeksiyon geliştir.

### 5.1. Deterministik sıra

- Her kaydın toplam ve kararlı sırası olmalıdır.
- Aynı timestamp durumunda rastgele sonuç oluşmamalıdır.
- Sıra ölçütü migration, repository ve JavaScript saf projeksiyonda aynı tanımlanmalıdır.
- Geç gelen olayın `occurred_at` değeri alım sırasını sessizce yeniden yazmamalıdır; zaman temelli tüketici davranışı ileride ayrıca sürümlenir.

### 5.2. Cursor ve retry

- Cursor projeksiyon adı ve sürümüne bağlı olmalıdır.
- İşlem ve cursor ilerletme atomik olmalıdır.
- Geçici hata kaydı retry kuyruğunda kalabilir.
- Kalıcı bozuk/zehirli kayıt karantinaya alındıktan sonra sonraki kayıtlar işlenebilmelidir.
- Retry aynı kaydı ikinci kez toplama eklememelidir.
- Bir worker çöküp aynı batch'i tekrar aldığında sonuç değişmemelidir.
- İki worker aynı cursor aralığını almaya çalışırsa kilit/claim kuralı çift etkiyi engellemelidir.

### 5.3. Replay

En az şu modları destekleyen test edilebilir servis/komut geliştir:

- belirli öğrenci;
- belirli kaynak;
- belirli projeksiyon sürümü;
- başlangıç cursor'u veya tam yeniden kurulum;
- dry comparison;
- güvenli yeniden kurulum nesli/generation.

Replay:

- kanıt defterini değiştirmemeli;
- aynı kayıt kümesi ve aynı sürümle aynı satırları ve checksum'ı üretmeli;
- correction/tombstone/snapshot semantiğini aynı uygulamalı;
- yarım kalırsa mevcut geçerli projeksiyonu bozmamalı;
- başarılı yeni generation atomik biçimde etkinleşmeli veya eşdeğer güvenli yöntem kullanmalı;
- kaynak sözleşmesi/adaptör/projeksiyon sürümünü kaydetmeli;
- bütün öğrencilerin geçmişini tek seferde uygulama belleğine yüklememelidir.

`projectEvidenceHistory` ile SQL/repository etkin görünümünü aynı fixture üzerinde karşılaştır. Fark varsa Faz 1 anlamını sessizce değiştirme; nedeni çöz.

## 6. Geriye doldurma çerçevesi

K07'nin bu fazdaki kısmını tasarım ve sentetik uygulamayla kapat. Gerçek veriyi taşımak Faz 9 prova ve Faz 10 onaylı uygulama kapsamındadır.

### 6.1. Sağlayıcı arabirimi

Her backfill provider şu sözleşmeye sahip olmalıdır:

- kayıtlı tek bir `source_code`;
- deterministik sıralı sayfalama;
- opak ve tekrar kullanılabilir cursor;
- açık batch üst sınırı;
- kaynak satırını ilgili Faz 1 adaptörüne veren dar dönüşüm;
- öğrenci scope'u;
- iptal sinyali;
- kişisel içerik içermeyen hata kodu;
- beklenen/adapte edilen/yazılan/duplicate/quarantine sayıları.

Dinamik tablo adı alan genel SQL çalıştırıcısı oluşturma.

### 6.2. Dry-run

- Ortak kanıt defterine, projeksiyona veya kaynak tabloya yazmamalıdır.
- Kaç kaydın geçerli, tekrar, karantina veya hata olacağını hesaplamalıdır.
- Örnek ham öğrenci verisini rapora basmamalıdır.
- Aynı fixture ile iki dry-run aynı sayıları vermelidir.

### 6.3. Sentetik apply

Yalnız geçici yerel PostgreSQL/PGlite veritabanında:

- küçük öğrenci batch'leriyle çalıştır;
- yarıda durdur ve cursor'dan devam ettir;
- aynı run veya yeni run ile ikinci kez çalıştır;
- ikinci çalışmada yeni kanıt sayısının sıfır olduğunu doğrula;
- bozuk bir kayıt sonrası sağlıklı kayıtların işlendiğini doğrula;
- iptal edilen run'ın kendiliğinden devam etmediğini doğrula;
- kaynak kayıtlarını değiştirmediğini doğrula.

### 6.4. Tarihsel dürüstlük

- Günlük toplamdan tek tek geçmiş soru olayları üretme.
- Yerel dil/atlas snapshot'ından bilinmeyen çalışma zamanı, sıra, yardım veya zorluk uydurma.
- `recorded_at` değerini bilinmeyen `occurred_at` yerine kullanma.
- Eksik değerleri null/unknown tut.
- Kaynakta yalnız son durum varsa `snapshot` üret.
- Eski genel deneme ders satırını konu performansına dağıtma.

## 7. Kaynak tamlığı ve gözlemlenebilirlik

Kişisel içerik göstermeyen yerel rapor/ölçüm katmanı oluştur. Yönetim paneli yapma.

En az şu ölçümler bulunmalıdır:

- kaynak ve semantic event type başına kabul edilen kayıt sayısı;
- created / duplicate / conflict / rejected / quarantined sayıları;
- reddetme neden sınıfları;
- konu kimliği matched / ambiguous / unmatched oranı;
- son başarılı kaynak olayı zamanı;
- kaynak sağlık durumu ve son kontrol;
- projeksiyon cursor gecikmesi;
- retry ve kalıcı karantina sayısı;
- replay satır/checksum farkı;
- backfill run durumu ve sayımları.

Kurallar:

- öğrenci kimliğini yüksek kardinaliteli metric etiketi yapma;
- ham kaynak kimliği, konu metni veya serbest hata metni yayınlama;
- gözlemlenemeyen değeri sıfır diye gösterme;
- sentetik sayı ile üretim metriğini karıştırma;
- log başarısızlığını ana öğrenci yazısını başarısız kılacak ikinci bağımsız zorunlu yazı hâline getirme.

`docs/ai-koc/VERI_AGI_CEKIRDEK_MIMARISI.md` içinde düşük/orta/yüksek hacim senaryosu yaz. Öğrenci ve günlük olay sayılarını açık varsayım olarak etiketle; gözlenmiş gerçek diye sunma. Satır başına yaklaşık boyut, indeks maliyeti, aylık büyüme, replay süresi riski ve partition/arsivleme eşiğini değerlendir. Bu fazda kanıt olmadan partitioning ekleme.

## 8. İndeksler ve sorgu yolları

En az şu sorgular uygun bileşik/partial indekslerle desteklenmelidir:

- öğrenci + alım sırası/zaman;
- öğrenci + konu + zaman;
- öğrenci + ders + zaman;
- öğrenci + kaynak + zaman;
- öğrenci + kaynak kayıt kimliği + sürüm;
- istemci tekrar anahtarı;
- kaynak/backfill tekrar anahtarı;
- correction/tombstone hedefi;
- işlenmemiş/retry kayıtları;
- karantina nedeni ve durum;
- projeksiyon cursor'u;
- backfill run + cursor;
- kaynak sağlık durumu.

Metadata üzerinde genel GIN indeks kurma. Her indeksi gerçek kabul sorgusuyla gerekçelendir. En az 10.000 sentetik kanıt içeren yerel veri kümesinde temel sorguların planını ve süresini kaydet. PGlite sonucu üretim SLA'sı değildir; yalnız regresyon tabanı olarak raporlanmalıdır.

## 9. Migration, RLS ve yetkiler

Yeni migration dosyasını mevcut depo adlandırmasına uygun oluştur; tercih edilen ad `supabase/migration_learning_evidence_network.sql`.

### 9.1. Migration niteliği

- Tek transaction içinde güvenli uygulanabilsin.
- Boş yerel veritabanında çalışsın.
- İlgili mevcut şema üstünde çalışsın.
- İkinci uygulamada veri kaybetmeden ve gevşek politika çoğaltmadan güvenli sonuç versin.
- Mevcut öğrenci tablolarını yeniden yaratmasın veya değiştirmesin.
- Mevcut satırları taramasın, backfill yapmasın.
- Açık constraint ve indeks adları kullansın.
- `SECURITY DEFINER` fonksiyonlarda `set search_path = ''` ve tam şema adları kullansın.
- Fonksiyon/table/view grant ve revoke işlemlerini açık yazsın.
- `public` ve `anon` erişimini kapatsın.
- `authenticated` rolüne yalnız gerekli kendi-kaydını okuma ve dar RPC haklarını versin.
- Kanıt tablosuna doğrudan INSERT/UPDATE/DELETE vermesin.
- Geri dönüş etkisini SQL yorumunda ve mimari belgede anlatsın; veri oluştuktan sonra tablo düşürmenin güvenli otomatik rollback olmadığını belirt.

### 9.2. RLS davranışı

Otomatik testlerle kanıtla:

- anonim kullanıcı tablo/view/fonksiyon üzerinden veri okuyamaz veya yazamaz;
- öğrenci yalnız kendi kanıtını/etkin görünümünü okuyabilir;
- öğrenci başka öğrencinin ham, etkin, karantina, projeksiyon veya kaynak sağlık satırını göremez;
- öğrenci doğrudan insert/update/delete yapamaz;
- öğrenci correction/tombstone/derived kayıt yazamaz;
- öğretmen rolü genel “tüm öğrenci kanıtlarını görür/yazar” yetkisi kazanmaz;
- başka öğrencinin target record'u reddedilir;
- güvenli view RLS'i aşmaz;
- fonksiyon isimlendirmesi veya varsayılan execute hakkı yetki deliği oluşturmaz;
- öğrenci hesabı silme zinciri kendi kanıt/türev/operasyonel satırlarını kaldırır;
- aktör hesabı silme başka öğrencinin geçmişini yanlışlıkla zincirlemez.

Testler tablo sahibi/süper kullanıcıyla yapılmış gibi görünmemeli. Mevcut RLS testlerindeki gibi `anon` ve `authenticated` rolleri ile `auth.uid()` taklidi kullan; gerekli tablolarda `FORCE ROW LEVEL SECURITY` ile gerçekten sınandığını göster.

### 9.3. Yeni proje kurulumu

Faz 2 nesnelerinin yeni proje yolunda unutulmadığını doğrula. `setup_new_project.sql` içine körlemesine büyük kopya yapıp iki ayrışan kaynak oluşturma. Depodaki kuruluma en uygun yöntemle:

- migration'ın yeni kurulum sırasını belgele;
- gerekiyorsa setup dosyasına açık ve sınırlandırılmış Faz 2 bölümü ekle;
- migration ile setup sonucu arasında şema/constraint/policy parity testi kur;
- setup dosyasındaki Faz 2 dışı mevcut eksikleri bu görev bahanesiyle topluca düzeltme.

## 10. Kısmi şema ve kontrollü bozulma

Faz 2 migration'ı henüz canlıya uygulanmayacağı için mevcut ürün migration yokken çalışmaya devam etmelidir.

- Hiçbir mevcut ekran veya AI Koç isteği yeni tabloyu zorunlu sorgulamamalı.
- Faz 3–5'te kullanılacak repository/capability kontrolü “tablo yok”, “fonksiyon yok”, “kaynak boş” ve “yetkisiz” durumlarını ayırmalıdır.
- Şema yokken kullanıcıya sahte “çalışma yok” sonucu üretmemelidir.
- Kontrollü sonuç `dependency_unavailable`/`unavailable` gibi açık olmalı; mevcut ürün akışını tamamen çökertmemelidir.
- Hata yutulup kaynak `empty` işaretlenmemelidir.

Bu davranışı Supabase'e bağlanmadan stub/fake istemci ve yerel veritabanı testleriyle kanıtla.

## 11. Kod düzeni ve dış arabirim

Mevcut yapı uygunsa çekirdek kodu `src/lib/learning/network/` veya sunucuya özel bölümü `api/_lib/learning/` altında küçük, tek sorumluluklu modüllere ayır. En az şu sorumluluklar görünür olmalıdır:

- güvenli alım orkestrasyonu;
- repository/SQL çağrısı;
- tekilleştirme sonucu;
- etkin kanıt sorgusu;
- projeksiyon/replay;
- backfill runner/provider sözleşmesi;
- kaynak health/capability;
- kararlı hata eşleme;
- kişisel veri içermeyen ölçüm özeti.

Kurallar:

- Tarayıcı paketine sunucu sırrı, SQL yönetim yetkisi veya internal-only fonksiyon taşıma.
- Faz 1'in tarayıcı/sunucu ortak saf modüllerini koru.
- Veritabanına özel kodu React bileşenlerine koyma.
- Yeni ağır queue/ORM/event-bus bağımlılığı ekleme. Mevcut Supabase/PostgreSQL ve Node araçları yeterliyse onları kullan.
- Temel teknoloji veya ücretli servis değişikliği yapma.
- Public dışa aktarımları JSDoc/README ile açıkla; Faz 3–5 kaynak geliştiricisinin hangi güvenli giriş noktasını kullanacağını belirt.
- Kaynak özelinde ownership doğrulaması yapılmadan çekirdek iç fonksiyonun çağrılamayacağını API sözleşmesinde belirt.

## 12. Zorunlu otomatik test paketi

`scripts/test-phase-2-learning-network.mjs` veya eşdeğer açık bir Faz 2 test girişi ve `package.json` içinde `test:ai-koc-faz-2` komutu oluştur.

Test yalnız SQL metninde kelime arayan yüzeysel denetim olamaz. PostgreSQL uyumlu geçici PGlite üzerinde migration'ı çalıştırmalı; Supabase `auth.uid()`, `auth.users`, roller ve gerekli minimum mevcut tablolar güvenli biçimde taklit edilmelidir. Ortamda zaten kullanılabilir yerel PostgreSQL varsa çoklu bağlantılı yarış testini ayrıca çalıştır. Yoksa yeni servis kurma: veritabanı benzersiz kısıtını ve 10 paralel çağrılı en güçlü yerel deneyi doğrula, fakat PGlite'ın çağrıları serileştirebildiğini kabul JSON'unda açık sınır olarak yaz ve gerçek çoklu bağlantı yarışını Faz 9'a taşı. Bu tek sınır diğer bütün yerel kapılar geçtiğinde Faz 2'nin yerel durumunu tek başına bloke etmez; “gerçek PostgreSQL yarışı geçti” diye de raporlanamaz.

### 12.1. Ön koşul ve sözleşme testleri

- Faz 1 kabul JSON'u okunuyor ve sürümleri beklenen değerlerde.
- `validateSourceRegistry()` sıfır hata döndürüyor.
- SQL kaynak sözleşmesi izdüşümü 38/38 kaynakla JavaScript siciline eşit.
- İzinli event, record kind, evidence class, measurement ve metadata listeleri sapmıyor.
- `npm run test:ai-koc-faz-1` yeniden geçiyor.

### 12.2. Migration testleri

- Migration boş şemaya uygulanıyor.
- Aynı migration ikinci kez uygulanıyor.
- Beklenen tablo, view, fonksiyon, constraint, indeks ve RLS politikaları tam.
- İkinci uygulamada policy/function/index çoğalmıyor.
- Önceden eklenmiş sentetik kanıt ikinci uygulamada korunuyor.
- Migration hata alırsa transaction yarım nesne bırakmıyor.
- Yeni proje kurulum yolu Faz 2 nesneleriyle uyumlu.

### 12.3. Geçerli alım

- Sentetik M03 `daily_logs` kaydı mevcut `adaptDailyLog` ile uyarlanıyor.
- Konu `resolveTopicIdentity` ile kanonik kimliğe çözülüyor.
- Tam kayıt `validateLearningEvidence` tarafından geçerli bulunuyor.
- Teste özel kaynak sarmalayıcısı öğrenci JWT/`auth.uid()` ile alan sahipliğini doğruluyor.
- Kanıt tek transaction'da yazılıyor.
- Dönen `record_id`, kaydedilen satırla aynı.
- `student_id`, `actor_id`, `recorded_at`, güven, kanıt sınıfı ve sürümler güvenilir katmandan geliyor.
- Ortak kayıtta ham günlük notu bulunmuyor.

### 12.4. Tekilleştirme

- Aynı geçerli istek 2 kez gönderildiğinde 1 satır.
- Aynı istek 10 kez gönderildiğinde 1 satır.
- Desteklenen en güçlü yerel ortamda 10 paralel gönderimde 1 satır; gerçek çoklu bağlantılı PostgreSQL kullanıldıysa ayrıca açıkça belirtilir.
- Yanıt kaybı simülasyonundan sonra retry ilk `record_id` değerini döndürüyor.
- Aynı idempotency key + farklı payload `idempotency_conflict` ve 1 satır bırakıyor.
- Farklı client action id taşıyan iki gerçek çalışma 2 satır bırakıyor.
- Aynı source record kimliği farklı öğrencilerde 2 ayrı güvenli kayıt olabiliyor.
- Backfill doğal anahtarı iki çalıştırmada tek satır bırakıyor.
- İstemcinin gönderdiği sahte `dedupe_key` kabul edilmiyor.

### 12.5. Güvenlik ve RLS

- Body'deki sahte `student_id` ve tüm ayrıcalıklı alanlar reddediliyor.
- Öğrenci 1, öğrenci 2'nin hiçbir Faz 2 satırını okuyamıyor.
- Öğrenci 1, öğrenci 2 adına kayıt oluşturamıyor.
- Öğrenci 1, öğrenci 2'nin kaydını correction/tombstone hedefi yapamıyor.
- Doğrudan tablo insert/update/delete reddediliyor.
- `anon` erişimi reddediliyor.
- Yetkisiz öğretmen erişimi reddediliyor.
- `SECURITY DEFINER` search path saldırısı sonucu nesne gölgeleme yapılamıyor.
- View ve RPC üzerinden RLS atlanamıyor.
- Hata çıktısı ham payload, JWT, SQL ve başka öğrenci kimliği içermiyor.

### 12.6. Şema ve alan sınırları

- Bilinmeyen kaynak reddediliyor.
- `excluded`, `catalog` ve uygunsuz `derived_readonly` kaynak reddediliyor.
- Kaynağa izin verilmeyen event ve record kind reddediliyor.
- Event'e yanlış kanıt sınıfı reddediliyor.
- Fazladan metadata anahtarı, derin metadata, uzun metin ve 2 KiB aşımı reddediliyor.
- Ham soru/yanıt/not/message benzeri yasak içerik recursive kontrolle reddediliyor.
- İzin verilmeyen measurement ve tutarsız D/Y/B/total reddediliyor.
- LGS ve standart net formülü sürümleri korunuyor.
- Bozuk/gelecek tarih ve sahte saat reddediliyor.
- Exact/day/unknown birlikteliği doğrulanıyor.
- Snapshot `as_of` olmadan reddediliyor.
- Opak olmayan locator reddediliyor.
- `topic_matched=false`, ambiguous ve unmatched konu etkin projeksiyona girmiyor.
- Keyfî objective id reddediliyor.

### 12.7. Correction, tombstone ve snapshot

- S11 40 → 20 → 0 akışı geçiyor.
- Correction hedefi eski etkiden çıkarıyor, iki değeri toplamıyor.
- Tombstone hedefi etkiden çıkarıyor.
- Audit kayıtları defterde kalıyor.
- Aynı correction/tombstone tekrarında çoğalma olmuyor.
- Var olmayan, kendi kendini hedefleyen, döngü oluşturan ve başka öğrenciye ait hedef reddediliyor.
- Snapshot ailesinde yalnız son geçerli sürüm etkin.
- Geç gelen snapshot ordering kuralı deterministik.
- JavaScript `projectEvidenceHistory` ile SQL/repository etkin görünüm aynı fixture sonucunu veriyor.

### 12.8. Projeksiyon ve replay

- Aynı kayıt kümesinin ilk projeksiyonu ile tam replay sonucu satır ve checksum olarak aynı.
- Replay ikinci kez çalıştığında sonuç değişmiyor.
- Worker aynı batch'i tekrar işlediğinde çift etki oluşmuyor.
- Worker orta batch'te çökünce transaction/cursor tutarlı kalıyor.
- Geçici hata retry ile iyileşiyor.
- Kalıcı zehirli kayıt karantinaya gidiyor ve sonraki sağlıklı kayıt işleniyor.
- İki worker claim yarışında aynı kayıt iki kez etkilenmiyor.
- Eski projeksiyon generation'ı, başarısız rebuild sırasında kullanılabilir kalıyor.
- Replay kanıt defterini değiştirmiyor.

### 12.9. Backfill

- Dry-run sıfır kanıt/projeksiyon yazıyor.
- Dry-run sayıları ikinci çalışmada aynı.
- Sentetik apply beklenen satır sayısını yazıyor.
- İkinci apply sıfır yeni satır yazıyor.
- Küçük batch ve cursor devamı çalışıyor.
- Yarıda kesilen run kaldığı yerden sürüyor.
- İptal edilen run yeniden başlamıyor.
- Bozuk kayıt sayılıyor/karantinaya alınıyor, sağlıklı kayıtlar devam ediyor.
- Kaynak tablosunda hiçbir satır değişmiyor.
- Bilinmeyen zaman veya olay ayrıntısı uydurulmuyor.
- Backfill log ve run kaydı kişisel içerik taşımıyor.

### 12.10. Kısmi şema ve kaynak health

- Tablo yok durumu `unavailable/dependency_unavailable`.
- Başarılı boş sorgu `empty`.
- Başarılı dolu sorgu `available`.
- Eksik opsiyonel alan/eski capability `degraded`.
- Bu dört durum birbirine dönüşmüyor.
- Faz 2 migration'ı olmadan mevcut AI Koç ve ürün testleri çökmüyor.

### 12.11. Hesap silme ve sahiplik

- Öğrenci hesabı silme taklidinde o öğrenciye ait defter, karantina, projeksiyon, cursor/scope ve health kayıtları kalmıyor.
- Başka öğrencinin kayıtları korunuyor.
- Öğretmen/actor hesabı silme başka öğrenciye ait kanıtı yanlışlıkla cascade etmiyor.
- Normal kaynak tombstone işlemi hesabı veya başka kaynak verisini silmiyor.

### 12.12. Performans ve sorgu planı

- En az 10.000 sentetik kanıt oluşturuluyor.
- Öğrenci+zaman, öğrenci+konu+zaman, öğrenci+kaynak ve source record sorguları çalışıyor.
- İşlenmemiş/retry ve quarantine sorguları çalışıyor.
- İlgili indekslerin varlığı ve mümkünse query planında kullanımı doğrulanıyor.
- Batch/replay uygulama belleğine sınırsız veri çekmiyor.
- Ölçülen yerel süre ve ortam kanıt dosyasına yazılıyor; üretim garantisi diye sunulmuyor.

## 13. Faz 0 kabul senaryolarının Faz 2 karşılığı

Gerçek ürün modüllerini bağlamadan şu senaryoları sentetik ağ fixture'larıyla doğrula:

- S02: Aynı kanonik konuya dış günlük ve platform etkinliği gibi iki farklı kaynak kanıtı ayrı provenance ile ulaşabilir; körlemesine tek kayda birleşmez.
- S05: Belirsiz konu ilk adaya bağlanmaz; karantinadadır.
- S07: `topic_matched=false` AI çözüm kaydı konuya yazılmaz.
- S08: Öğretmen kaynaklı kanıt yalnız doğrulanmış ilişki ve paylaşılabilir dar alanla kabul edilebilir; özel içerik çekirdeğe girmez.
- S10: Dil namespace'i curriculum namespace'ine zorlanmadan saklanabilir; bu test dil bulut eşitlemesi değildir.
- S11: 40 → 20 → 0 düzeltme/silme sonucu.
- S14: İki öğrenci arasında okuma, hedefleme ve yazma sızıntısı yoktur.

Her senaryonun adı test çıktısı ve kabul JSON'unda görünmelidir.

## 14. Regresyon doğrulaması

Faz 2 özel testinden sonra en az:

- `npm run test:ai-koc-faz-1`
- Faz 0/1 kabul kayıtlarında geçen güvenli mevcut test komutları
- mevcut AI Koç testleri
- `npm run test:ai-solve`
- ilgili RLS testleri
- ders, soru kütüphanesi, dört dil ve atlas testleri
- `npm run build`

çalıştır.

Faz 1'deki komut listesini körlemesine kopyalama; `package.json` içindeki güncel komutları doğrula. Ücretli, canlı ağa yazan, seed/migration uygulayan veya yayın yapan komutları çalıştırma. Böyle bir test varsa neden atlandığını açıkça kaydet ve geçmiş sayma.

Önceden bilinen 500 kB bundle uyarısını yeni hata gibi sunma; büyüdüyse farkı raporla.

## 15. Dokümantasyon ve kabul kanıtı

En az şu çıktıları oluştur/güncelle:

- `docs/ai-koc/VERI_AGI_CEKIRDEK_MIMARISI.md`
- gerekiyorsa ayrı `docs/ai-koc/GERIYE_DOLDURMA_SOZLESMESI.md`
- `docs/ai-koc/MIMARI_KARARLAR.md`
- `docs/ai-koc/FAZ_DURUMU.md`
- `docs/ai-koc/README.md`
- `docs/ai-koc/kanitlar/faz-2/veri-agi-testleri.log`
- `docs/ai-koc/kanitlar/faz-2/regresyon-testleri.log`
- `docs/ai-koc/kanitlar/faz-2/build.log`
- `docs/ai-koc/kanitlar/faz-2/migration-sema-ozeti.json`
- `docs/ai-koc/kanitlar/faz-2/faz-2-kabul-sonucu.json`

### 15.1. Mimari karar güncellemesi

`MIMARI_KARARLAR.md` içinde en az:

- K04: kullanılan benzersiz anahtarlar, fingerprint conflict davranışı ve yarış çözümü;
- K07: dry-run/provider/cursor/restart sözleşmesi ve gerçek backfill'in neden yapılmadığı;
- K12: source health/capability ve empty-unavailable ayrımı;
- K01/K05'in işlemsel çekirdek ve etkin görünüm karşılığı;
- özel iç alım ile gelecek kaynak-özel sarmalayıcı sınırı;
- hesap silme ve actor FK kararı;
- migration/setup/replay kararları

kanıt ve reddedilen alternatiflerle sonuçlandırılmalıdır.

K06'nın dil/atlas sahipliği ve gerçek yerel bulut geçişi Faz 5'e aittir; bu fazda çözülmüş gibi işaretleme.

### 15.2. Kabul JSON'u

`faz-2-kabul-sonucu.json` en az şunları gerçek çalıştırma sonuçlarından üretmelidir:

- schema version ve üretim zamanı;
- çalışma klasörü ve git HEAD;
- çalışma ağacının temiz olup olmadığı;
- önceden var olan ilgisiz değişikliklerin korunduğu bilgisi;
- Faz 1 ön koşul sonucu ve sözleşme sürümleri;
- migration dosyası ve checksum;
- oluşturulan tablo/view/fonksiyon/constraint/index/policy sayıları ve adları;
- RLS test özeti;
- sequential ve concurrency dedupe sonucu;
- idempotency conflict sonucu;
- correction/tombstone/snapshot sonucu;
- replay satır sayısı ve checksum eşitliği;
- backfill dry-run/apply/ikinci apply/cancel-resume sayıları;
- source health dört durum testi;
- 10.000 kayıt sorgu/benchmark ortam ve sonuç özeti;
- S02, S05, S07, S08, S10, S11, S14 sonuçları;
- çalıştırılan her komut, exit code ve süre;
- atlanan doğrulamalar ve gerekçeleri;
- canlı Supabase'in okunmadığı/değiştirilmediği;
- migration/seed/backfill/yayın yapılmadığı;
- Faz 3–5 için açık arabirim ve kalan sınırlar.

Assertion sayısını komut sayısı gibi sunma. PGlite paralellik sınırını veya gerçek yerel PostgreSQL testinin olup olmadığını açıkça yaz. Kanıtlanmayan alanı `passed` yapma.

### 15.3. Faz durumu

Bütün yerel kabul kapıları geçtiyse Faz 2 satırını:

`Yerel olarak tamamlandı, canlı onay bekliyor`

olarak güncelle. Bunun anlamını aynı dosyada netleştir:

- migration ve çekirdek yerel geçici PostgreSQL üzerinde doğrulandı;
- canlı şemaya hiçbir işlem yapılmadı;
- Faz 3–5'in yerel geliştirmesi bu çekirdeğe karşı başlayabilir;
- gerçek kaynak bağlantısı, canlı veri ve yayın hâlâ yapılmamıştır;
- canlı geçiş yalnız Faz 9 provasından, Faz 10 planından ve kullanıcının açık onayından sonra yapılabilir.

Bu aşamada `Tamamlandı` yazma. Yerel kapılardan biri geçmediyse `Devam ediyor` veya gerçek bir engel varsa `Bloke` kullan; başarısızlığı gizleme.

## 16. Beklenen dosya/kod teslimi

Kesin içerik depo incelemesine göre şekillense de teslimde şu sınıflar bulunmalıdır:

- bir idempotent Faz 2 SQL migration'ı;
- Faz 1 registry'sinin sürümlü SQL izdüşümü/parity mekanizması;
- özel append-only alım fonksiyonu ve dar repository;
- etkin kanıt görünümü;
- karantina ve operasyonel processing/cursor yapısı;
- sürümlü diagnostic projeksiyon ve replay servisi;
- backfill provider/runner sözleşmesi;
- kaynak health/capability katmanı;
- Faz 2 test ve yerel rapor komutları;
- mimari, migration ve geriye doldurma belgeleri;
- gerçek loglar ve makine okunur kabul kanıtı.

Dosya sayısını artırmak amaç değildir. Aynı sorumluluğu gereksiz yere birkaç katmanda tekrar etme.

## 17. Kabul kapıları

Faz 2 yalnız aşağıdakilerin tamamı kanıtlanırsa yerel olarak bitmiş sayılır:

1. Faz 1 sözleşmeleri değişmeden veya belgeli geriye uyumlu düzeltmeyle geçiyor.
2. Ortak kanıt defteri kalıcı ve append-only uygulama sınırına sahip.
3. Kaynak sicili ile kalıcı alım izinleri arasında sıfır sapma var.
4. Öğrenci kimliği ve ayrıcalıklı alanlar yalnız güvenilir sınırdan geliyor.
5. Normal ürün rolleri kanıt tablosuna doğrudan yazamıyor/değiştiremiyor/silemiyor.
6. Aynı eylemin 2, 10 ve desteklenen en güçlü paralel denemede tek satır kaldığı kanıtlandı; gerçek çoklu bağlantı yoksa sınır Faz 9 için açık kaydedildi.
7. Aynı anahtarın farklı içerikle kullanımı sessiz duplicate değil conflict.
8. Başka öğrenci okuma, yazma, correction ve tombstone erişimi engelleniyor.
9. Unknown/excluded/catalog/uygunsuz event ve metadata/measurement ihlalleri reddediliyor.
10. Belirsiz veya eşleşmeyen konu öğrenme projeksiyonuna girmiyor.
11. Correction, tombstone ve snapshot etkin görünümü Faz 1 saf projeksiyonuyla aynı.
12. S11 sonucu 40 → 20 → 0.
13. Replay iki kez aynı satırları ve checksum'ı üretiyor.
14. Zehirli kayıt sonraki sağlıklı kayıtları engellemiyor.
15. Backfill dry-run yazmıyor; apply ikinci çalışmada çoğalmıyor; cursor/iptal/devam çalışıyor.
16. `available`, `empty`, `unavailable`, `degraded` ayrımı test edildi.
17. Öğrenci hesabı silme ile actor hesabı silme davranışı güvenli.
18. Migration iki kez uygulanabiliyor ve mevcut sentetik veri korunuyor.
19. Yeni şema yokken mevcut ürün çökmüyor ve “boş veri” yalanı üretmiyor.
20. İndeksler ve 10.000 sentetik kayıt sorgu yolları doğrulandı.
21. Mevcut güvenli regresyonlar ve üretim derlemesi geçti.
22. Gerçek ürün kaynaklarından hiçbiri yanlışlıkla bağlı/connected işaretlenmedi.
23. Canlı Supabase, gerçek öğrenci verisi, ücretli servis ve yayın değişmedi.
24. Kanıt dosyaları gerçek komut çıktılarıyla üretildi; kanıtlanmayan hiçbir madde başarılı yazılmadı.

## 18. Durma koşulları

Aşağıdakilerden biri olursa varsayım yaparak ilerleme:

- Faz 1 kabul kaydı veya sözleşme testi başarısız;
- güvenli çözüm canlı veriyi okumayı/değiştirmeyi gerektiriyor;
- mevcut alan yazısını atomik kılmak için Faz 3/4/5 kaynak akışını değiştirmek gerekiyor;
- `service_role` ile genel yazma yolu tek seçenek gibi görünüyor;
- migration mevcut öğrenci verisini dönüştürmek veya silmek zorunda;
- temel teknoloji/ücretli servis değişikliği gerekiyor;
- ilgisiz kullanıcı değişikliğiyle kaçınılmaz dosya çakışması var;

Bu durumda yapılan güvenli işi koru; `FAZ_DURUMU.md` içinde gerçeğe uygun durum bırak ve kullanıcıya tek, somut engeli bildir.

## 19. Faz sonu rapor biçimi

Kullanıcıya kısa ve düz Türkçeyle yalnız şunları bildir:

- oluşturulan çekirdeğin ne yaptığı;
- ana migration/veri yapıları;
- tekilleştirme, RLS, correction/tombstone, replay ve backfill test sonucu;
- toplam geçen/başarısız/atlanan komut;
- canlı veritabanı ve yayın durumunun değişmediği;
- Faz 3–5 yerel geliştirmesinin başlayıp başlayamayacağı;
- varsa tek gerçek açık sınır.

Kod dökümü, gereksiz süreç anlatısı veya kanıtlanmamış güven ifadesi verme.
