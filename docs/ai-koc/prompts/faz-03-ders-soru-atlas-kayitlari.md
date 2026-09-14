# Codex Uygulama İstemi — Faz 3: Ders, Soru Kütüphanesi ve Atlas Kanıt Ağı

Sürüm: Faz 2 sonrası depo-özel yürütme istemi 3.0

Ön koşul: Faz 2 yerel kabul kapıları eksiksiz geçti

Çalışma alanı: `/Users/furkantalhayazcicek/Desktop/DRKOÇ`

## Görevin

DRKOÇ içindeki platform-içi öğrenme çalışmalarını Faz 2'nin güvenli ortak veri ağına bağla. Yapılandırılmış ve paketli dersler, PDF/görsel ders notları, veritabanı ve paketli soru setleri, Fizik/Biyoloji/Coğrafya/Kimya atlaslarının ölçülebilir öğrenme işleri ve Geometri Pilotu; kaynak gerçeğini koruyarak kalıcı, öğrenciye bağlı, tekrar güvenli ve anlamı doğrulanmış kanıt üretmelidir.

Bu fazın sonunda:

- paketli ve veritabanı dersleri aynı kanıt dilini kullanmalı;
- ders açma yalnız `exposure`, ders tamamlama yalnız `system_observation`, doğrulanmış kontrol sorusu sonucu `direct_measurement` kalmalı;
- soru çözme durumu yalnız React rota state'inde yaşamamalı; yenilemeden sonra devam edilebilen sunucu kayıtlı girişimler bulunmalı;
- doğru/yanlış, toplamlar ve içerik sürümü tarayıcının beyanından değil güvenilen içerik kaynağından türetilmeli;
- atlaslarda yalnız tanımlı görev, kavram kontrolü ve doğrulanmış mini test sonucu kaydedilmeli;
- sahipsiz eski atlas `localStorage` verisi hiçbir hesaba sessizce bağlanmamalı;
- kaynak alan kaydı ile ortak kanıt aynı PostgreSQL transaction'ında oluşmalı veya ikisi de oluşmamalı;
- bütün bağlantılar kanonik konuya ya da görünür karantinaya gitmeli;
- aynı öğrenci eyleminin tekrar gönderimi kanıtı çoğaltmamalı;
- kaynak düzeltme, cevap değiştirme ve öğrenci sıfırlaması etkin kanıtı `correction` / `tombstone` ile geri alabilmeli;
- Faz 6 ve Faz 7'nin kullanacağı güvenilir veri mevcut olmalı, fakat bu fazda ustalık modeli veya AI Koç yorumu yazılmamalıdır.

Çalışan birkaç örnek yeterli değildir. M13–M26 aralığındaki her kaynak için sözleşmeye uygun bir karar, kod karşılığı ve kabul kanıtı bulunmalıdır.

## Değişmez kapsam sınırı

Bu fazın kapsamı:

- M13 `library_gateway` — yalnız katalog/geçiş yüzeyi; olay üretmemesi doğrulanır;
- M14 `library_catalog` — içerik kimliği, sürüm ve kanonik konu bağının yetkili kataloğu;
- M15 `structured_lesson_activity`;
- M16 `bundled_lesson_activity`;
- M17 `library_note_exposure`;
- M18 `lesson_personalization` — yalnız türetilmiş/cache kaynak olarak kalması doğrulanır;
- M19 `db_question_test`;
- M20 `bundled_question_test`;
- M21 `physics_atlas`;
- M22 `biology_atlas`;
- M23 `geography_atlas`;
- M24 `chemistry_atlas`;
- M25 `history_atlas_navigation` — bilinçli dışlama;
- M26 `geometry_pilot`.

Bu fazın kapsamı değildir:

- günlük çalışma, genel deneme, branş denemesi, ödev ve öğretmene atılan sorunlu soruların bağlanması; bunlar Faz 4'tür;
- AI Soru Çöz kayıtlarının ürün akışına bağlanması; Faz 4'tür;
- İngilizce, Almanca, Fransızca ve İspanyolca yerel verisinin buluta taşınması; Faz 5'tir;
- öğrenci konu modeli, ustalık, unutma, kalıcılık, zayıflık veya hazırbulunuşluk hesabı; Faz 6'dır;
- AI Koç bağlamı, açıklaması ve kanıt alıntısı; Faz 7'dir;
- öneri, plan, görev veya kapalı döngü eylemi; Faz 8'dir;
- canlı güvenlik sertleştirmesi, saklama politikasının son hâli ve pilot; Faz 9'dur;
- canlı migration, gerçek geriye doldurma, seed, yayın veya üretim geçişi; Faz 10 ve açık kullanıcı onayı gerektirir.

Bu fazda `api/_lib/context.js`, AI Koç sistem istemi, `readiness.js`, öğrenci modeli veya sohbet araçlarını yeni kayıtları tüketecek biçimde değiştirme.

## Değişmez çalışma kuralları

- Önce gerçek depoyu oku. Tablo, kolon, içerik sayısı, rota, cevap biçimi, migration sırası veya test aracı varsayma.
- `AGENTS.md` içindeki öğrenci verisi, tek yayın kaynağı ve ilgisiz değişiklikleri koruma kurallarını uygula.
- Başlangıçta `git status --short` ve ilgili `git diff` çıktısını kaydet. Faz 2'den kalan değişiklikleri kendi değişikliğinmiş gibi geri alma veya yeniden biçimlendirme.
- Faz 1 sözleşmelerini ve Faz 2 çekirdeğini kopyalayıp ikinci doğrulayıcı/defter oluşturma. Mevcut dışa aktarımları ve gerçek `learning_private.ingest_evidence` sınırını kullan.
- Tarayıcıya `student_id`, kanonik kimlik, `is_correct`, kanıt sınıfı, güven düzeyi, kaynak sürümü, olay zamanı, toplam sonuç veya kayıt türü seçtirme.
- Tarayıcının gönderebileceği alanları kaynak-özel ve dar tut: örneğin içerik kimliği, soru kimliği, seçilen seçenek, istemci eylem kimliği ve gerekli UI bağlamı. Sunucu bunları yetkili katalogla doğrulamalıdır.
- Kaynak alan kaydı ile ortak kanıtı iki bağımsız Supabase isteğiyle yazma.
- Normal öğrenci rolüne açık genel `/api/learning-events`, genel `save_learning_evidence` RPC'si veya tam `LearningEvidence` JSON'u alan benzeri bir yol oluşturma.
- Genel amaçlı `service_role` kanıt yazarı oluşturma. Mevcut mimaride kaynak-özel `SECURITY DEFINER` RPC'leri tercih et. Eşdeğer dar bir sunucu PostgreSQL transaction sınırı seçersen kimlik doğrulama, yetki ve RLS davranışını gerçekten uygula ve test et.
- `learning_private.ingest_evidence` fonksiyonunu `anon` veya `authenticated` role açma.
- Kaynak tablosu/olay tablosu yetkili gerçektir; `learning_evidence_records` bağımsız ikinci ürün gerçeği değildir.
- Ham soru, seçenek, çözüm, ders metni, not içeriği, PDF URL'si, öğretmen metni, atlas sürükleme izi, koordinat, JWT, ad veya e-postayı ortak kanıt metadata'sına koyma.
- Başlık, slug benzerliği, dosya yolu veya rastgele DB UUID'sini kanonik konu kimliği diye kullanma.
- İçerik sürümü uyuşmazsa eski cevap anahtarıyla yeni içeriği karıştırma; işlemi güvenli hata/karantina durumuna al.
- UI kilidi tekilleştirme değildir. Veritabanı düzeyindeki `UNIQUE` ve Faz 2 idempotency sözleşmesi zorunludur.
- İstemci paketinde cevap anahtarı bulunuyor olsa bile `is_correct` değerini istemciden güvenilir kabul etme. Sunucu/kaynak kataloğu sonucu yeniden türetmelidir.
- Çevrimdışı destek varmış gibi davranma. Ağ kesintisinde öğrencinin seçimini güvenli ve kullanıcı kapsamlı bir outbox'ta koru; “kaydedildi” demeden sunucu onayı bekle.
- Genel gezinti, tema, kamera, zoom, favori, rozet, ses düğmesi veya sayfada kalma tek başına öğrenme kanıtı değildir.
- Bütün yerel kabul kapıları geçmeden Faz 3'ü bitmiş sayma.

## Zorunlu okumalar

Aşağıdaki dosyaların tamamını oku:

- `AGENTS.md`
- `CLAUDE.md`
- `DESIGN_SYSTEM.md`
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
- `docs/ai-koc/VERI_AGI_CEKIRDEK_MIMARISI.md`
- `docs/ai-koc/GERIYE_DOLDURMA_SOZLESMESI.md`
- `docs/ai-koc/kanitlar/faz-0/envanter-kabul-sonucu.json`
- `docs/ai-koc/kanitlar/faz-1/faz-1-kabul-sonucu.json`
- `docs/ai-koc/kanitlar/faz-2/faz-2-kabul-sonucu.json`
- `docs/ai-koc/kanitlar/faz-2/migration-sema-ozeti.json`
- `docs/ai-koc/kanitlar/faz-2/veri-agi-testleri.log`
- `src/lib/learning/curriculumIdentity.js`
- `src/lib/learning/curriculumIdentityLedger.js`
- `src/lib/learning/topicResolver.js`
- `src/lib/learning/evidenceContract.js`
- `src/lib/learning/sourceRegistry.js`
- `src/lib/learning/adapters.js`
- `src/lib/learning/sourceFixtures.js`
- `src/lib/learning/network/ingest.js`
- `src/lib/learning/network/canonical.js`
- `src/lib/learning/network/effective.js`
- `src/lib/learning/network/backfill.js`
- `src/lib/learning/network/health.js`
- `src/lib/learning/network/sourceContracts.js`
- `api/_lib/learning/repository.js`
- `supabase/migration_learning_evidence_network.sql`
- `supabase/setup_new_project.sql`
- `supabase/migration_library.sql`
- `supabase/migration_question_library.sql`
- `supabase/migration_tiered_tests.sql`
- `supabase/migration_structured_lessons.sql`
- `src/components/lessons/LessonReader.jsx`
- `src/components/lessons/reader/LessonDocument.jsx`
- `src/components/lessons/reader/LessonBlock.jsx`
- `src/components/lessons/reader/LessonNarrationPlayer.jsx`
- `src/content/lessons/index.js` ve buradan erişilen bütün ders üreticileri/katalogları;
- `src/components/LibraryNoteCard.jsx`
- `src/components/PdfViewer.jsx`
- `src/lib/questionLibrary.js`
- `src/pages/TopicTestSolve.jsx`
- `src/pages/TopicTestResult.jsx`
- `src/components/tests/QuestionCard.jsx`
- `src/content/tests/` altındaki bütün soru seti kayıt/üretici girişleri;
- `src/lib/fizik/ilerleme.js`
- `src/lib/biyoloji/ilerleme.js`
- `src/lib/cografya/ilerleme.js`
- `src/pages/FizikAtlasi.jsx`
- `src/pages/BiyolojiAtlasi.jsx`
- `src/pages/CografyaAtlasi.jsx`
- `src/pages/KimyaAtlasi.jsx`
- `src/components/kimya/MiniTest.jsx`
- `src/data/kimya/testSorulari.js`
- `src/pages/GeometriPilot.jsx`
- tarih atlası ve Osmanlı Padişahları rotalarının gezinme/ses kodu;
- `scripts/test-phase-1-learning-contracts.mjs`
- `scripts/test-phase-2-learning-network.mjs`
- ders, soru kütüphanesi ve atlaslara ait mevcut testlerin tamamı;
- `package.json`.

Alt klasörde başka bir `AGENTS.md` varsa onu da tamamen oku.

Bu faz zorunlu kullanıcı arayüzü değişiklikleri içerir. UI koduna başlamadan `.codex/skills/drkoc-ui-designer/SKILL.md` dosyasını tamamen oku ve uygula. Atlas ekranı ya da atlas aktarım deneyimine dokunmadan sonra `.codex/skills/drkoc-atlas-designer/SKILL.md` dosyasını da tamamen oku ve uygula. Beceri kullanımı, veri güvenliği ve kapsam sınırını genişletmez.

## Ön koşul doğrulaması

Uygulamaya başlamadan önce aşağıdakileri gerçek komutlarla doğrula:

1. Çalışma klasörü tam olarak `/Users/furkantalhayazcicek/Desktop/DRKOÇ`.
2. `FAZ_DURUMU.md` içindeki Faz 2 durumu `Yerel olarak tamamlandı, canlı onay bekliyor`.
3. `docs/ai-koc/kanitlar/faz-2/faz-2-kabul-sonucu.json` 24/24 yerel kapının geçtiğini söylüyor.
4. `npm run test:ai-koc-faz-1` başarılı.
5. `npm run test:ai-koc-faz-2` başarılı.
6. Faz 2 migration checksum'u kabul kaydıyla eşleşiyor.
7. Canlı Supabase'e bağlanmadan, yerel/geçici PostgreSQL üzerinde çalışma imkânı var.

Faz 2'nin canlıya uygulanmamış olması Faz 3 yerel geliştirmesini engellemez. Ancak Faz 2 testleri veya checksum'u bozuksa uygulamaya geçme; sapmayı kanıtla ve bloke raporu ver.

## Faz 2'den gelen doğrulanmış başlangıç gerçekleri

Bu gerçekleri yeniden icat etme:

- Kanıt sözleşmesi `learning-evidence@1`, şema `1.0`.
- Kaynak sicili `learning-source-registry@1` ve 38 kaynak içeriyor.
- Faz 2 migration'ı `supabase/migration_learning_evidence_network.sql`.
- Kabul kaydındaki Faz 2 migration SHA-256 değeri `993437ba3bb34b5c97e14a5c6e126d482f769e65be34ca2d08d20832b47ebdea`.
- Ortak ağda 9 tablo, 1 etkin görünüm, özel `learning_private.ingest_evidence` sınırı, 34 indeks ve 9 `FORCE RLS` tablo bulunuyor.
- 25 kaynak için alım sözleşmesi izinli olsa da gerçek ürün kaynağı bağlantıları hâlâ `decided_not_connected`.
- Normal roller ortak kanıt defterine doğrudan `INSERT`, `UPDATE` veya `DELETE` yapamıyor.
- İstemci eylemi tekilleştirmesi `student_id + source_code + client_action_id`; kaynak/backfill tekilleştirmesi `student_id + source_code + source_record_id + source_revision + semantic_event_type`.
- Aynı anahtar/farklı anlam `idempotency_conflict`; sessiz overwrite değildir.
- Correction/tombstone etkin toplam ispatı 40 → 20 → 0.
- Backfill çerçevesi kayıtlı provider, dry-run, opak cursor, retry/cancel/resume ve zehirli kayıt izolasyonu sağlar; gerçek kaynak provider'ları Faz 3'te eklenecektir.
- `createLearningEvidenceIngestor`, `createPgLearningEvidenceRepository`, `createBackfillProviderRegistry` ve `runBackfill` mevcut çekirdek arabirimlerdir.
- Faz 2 gerçek ürün verisi okumamış/yazmamış, canlı migration/seed/backfill/model çağrısı/yayın yapmamıştır.
- Gerçek çok bağlantılı PostgreSQL yarışı Faz 2'de çalıştırılmamıştır; PGlite paralel çağrıları seri olabilir. Bu sınırı Faz 3'te yanlış biçimde “gerçek yarış geçti” diye sunma; canlıya yakın yarış testi Faz 9'da kalabilir.

## M13–M26 kaynak sözleşmesi

Kod başlamadan aşağıdaki tabloyu `src/lib/learning/sourceRegistry.js` ile bire bir karşılaştır. Kod değişmişse güncel gerçeği raporla; sözleşmeyi sessizce esnetme.

| Kaynak | Üretebildiği anlam | Kanıt sınıfı | Kesin dışlama/sınır |
|---|---|---|---|
| M13 `library_gateway` | Olay üretmez | `operational_only` | Rota/katalog gezinmesi öğrenme değildir |
| M14 `library_catalog` | Olay üretmez; içerik kimliği ve sürüm bağı sağlar | katalog | DB UUID veya başlık kanonik konu değildir |
| M15 `structured_lesson_activity` | `lesson_opened`, `quiz_answered`, `osym_simulation_answered`, `lesson_completed`, `audio_started`, `audio_completed`, `visual_audio_clicked` | açma/ses `exposure`; cevap `direct_measurement`; tamamlama `system_observation` | Yalnız yayınlanmış ders, gerçek öğrenci oturumu ve geçerli revizyon |
| M16 `bundled_lesson_activity` | `lesson_opened`, `quiz_answered`, `lesson_completed` | açma `exposure`; cevap `direct_measurement`; tamamlama `system_observation` | Paketli kimliği DB UUID'ye zorlanmaz; v1'de ses olayı yok |
| M17 `library_note_exposure` | `note_opened` | `exposure` | Küçük resim render'ı, indirme, yazdırma ve açma ustalık değildir |
| M18 `lesson_personalization` | Temel olay üretmez | `derived_result` | Cache/overlay yeni kanıt değildir |
| M19 `db_question_test` | `question_answered`, `test_completed` | `direct_measurement` | Sonuç sunucu/kaynak anahtarından türetilir |
| M20 `bundled_question_test` | `question_answered`, `test_completed` | `direct_measurement` | Set+sürüm+girişim+soru kimliği zorunlu |
| M21 `physics_atlas` | `atlas_task_state`, `concept_check_state` snapshot/correction/tombstone | `system_observation` | Tema, rozet, kamera, favori kanıt değildir |
| M22 `biology_atlas` | `atlas_task_state`, `concept_check_state` snapshot/correction/tombstone | `system_observation` | Tema, rozet, kamera, favori kanıt değildir |
| M23 `geography_atlas` | `atlas_task_state`, `concept_check_state`, `timed_test_completed` | ilk ikisi `system_observation`, zamanlı test `direct_measurement` | Tema, rozet, kamera, harita gezinmesi, favori kanıt değildir |
| M24 `chemistry_atlas` | `concept_check_answered`, `mini_test_completed` | `direct_measurement` | Sabit soru kimliği+sürüm+girişim olmadan olay yok |
| M25 `history_atlas_navigation` | Olay üretmez | `operational_only` | Harita, yıl, katman, müzik, model sesi öğrenme değildir |
| M26 `geometry_pilot` | `question_answered`, `test_completed` | `direct_measurement` | Sabit soru kimliği+sürüm+girişim ve sunucu doğrulaması zorunlu |

Sözleşmede olmayan `section_completed`, `lesson_resumed`, `atlas_opened`, `map_navigated`, `solution_viewed`, `badge_earned` veya benzeri yeni ortak olayları bu faz istemi varmış gibi ekleme. Ürün devam durumu alan kaynağında tutulabilir; ortak kanıta yalnız kayıt defterinin izin verdiği anlamlar gider. Gerçek bir eksiklik kanıtlanırsa Faz 1 sözleşmesini sessizce değiştirme: sürümlü, geriye uyumlu karar ve parity testi oluştur.

## Depoda doğrulanması gereken mevcut kusurlar

Aşağıdakiler başlangıç hipotezidir; satırları yeniden inceleyip kanıtla:

- `LessonReader.jsx`, paketli derslerde bütün `lesson_activity_events` yazılarını bilinçli olarak atlıyor.
- Yapılandırılmış dersteki `void supabase.from(...).insert(...)` çağrısı awaited/thenable tüketilmediği için ağ isteği başlamıyor olabilir; Faz 0 kabul kanıtını yeniden doğrula.
- Ders okuyucusu cevap sonucunu `metadata.correct` içine koyuyor; Faz 1 adaptörü `record.is_correct` bekliyor.
- `osym_simulation_answered`, mevcut `lesson_activity_events.event_name` SQL CHECK listesinde yok.
- `audio_completed` sözleşmede var; mevcut ürün akışının gerçekten tamamlanma sinyali üretip üretmediği belirsiz.
- Paketli dersler şu an yaklaşık 185 kayıt, 6.093 blok ve 593 etkileşimli blok içeriyor olabilir. Bunlar sabit kabul sayısı değildir; gerçek sayıları koddan yeniden üret.
- `TopicTestSolve.jsx` cevapları yalnız React state'inde tutuyor ve sonuç ekranına rota state'iyle gönderiyor.
- `TopicTestResult.jsx` yenilemede sonucu kaybediyor ve doğru/yanlış hesabını istemci paketindeki cevap anahtarından yapıyor.
- `student_question_set_attempts`, `student_topic_test_progress` ve `student_test_answers` tablolarının çalışan ürün yazarı/okuyucusu yok; üçü birden aktif gerçek yapılmamalı.
- `adaptQuestionTestResult`, soru olayında `source_record_id` olarak yalnız `attempt_id` seçerek aynı girişimdeki soruları çakıştırabilir.
- `LibraryNoteCard.jsx`, PDF/görselin gerçekten tam açıldığını kaydetmiyor.
- Fizik, Biyoloji ve Coğrafya atlas ilerleme depoları kullanıcı kimliği taşımayan cihaz-genel `localStorage` anahtarları kullanıyor.
- Kimya Mini Test sorularında kalıcı soru kimliği/sürümü ve kalıcı girişim yok.
- Geometri Pilotu soruları sayfa içi geçici dizi ve state ile çalışıyor; kalıcı içerik sürümü/girişim yok.
- Tarih atlası gezinmesi sözleşme gereği dışarıda; onu sırf “bütün atlaslar bağlandı” demek için olay kaynağı yapma.

Bu kusurlardan biri artık geçerli değilse kabul kanıtına güncel durumu yaz. Bir kusuru yalnız kod görünümüne bakarak “düzeldi” sayma; test et.

## 0. Başlangıç, dosya sahipliği ve baz çizgisi

Uygulamadan önce:

1. Git HEAD, dal, çalışma klasörü ve `git status --short` kaydını al.
2. Başlangıçta değişmiş dosyaları `preexisting_changes` olarak kabul JSON'una koy.
3. Dokunacağın dosya sınıflarını listele; ilgisiz dosyaları değiştirme.
4. Mevcut bütün ders/soru/atlas rotalarını M13–M26 ile karşılaştır.
5. Paketli ders, paketli soru seti, DB içerik fixture'ı, atlas görev/soru ve yerel depolama için makinece okunur başlangıç sayımı üret.
6. Aynı ID'nin birden çok içerikte kullanılması, eksik soru/blok ID'si, değişken başlık/path kimliği ve cevap anahtarı biçimlerini raporla.
7. Mevcut migration kurulum sırasını doğrula: temel setup → veli politika migration'ı → Faz 2 migration'ı → Faz 3 migration'ı.
8. Canlı Supabase URL'si, uzak veritabanı ve gerçek öğrenci verisi kullanmadan çalışacağını kaydet.

Başlangıç sayımını elle Markdown'a yazıp bırakma. Testte yeniden üretilebilen JSON/census çıktısı oluştur; içerik eklenince kapsama testi otomatik genişlesin.

## 1. Faz 3 mimarisini kesinleştir

`docs/ai-koc/FAZ_3_ICERIK_KAYIT_MIMARISI.md` oluştur. Kod ve migration ile bire bir uyumlu olarak en az şu kararları yaz:

- M14 içerik kimliği ve sürüm kataloğu;
- DB içerik ile paketli içerik arasındaki kimlik ayrımı;
- kaynak-özel transaction sınırı;
- ders ilerlemesi ve ders olayı gerçeği;
- soru girişimi, cevap revizyonu ve finalizasyon gerçeği;
- atlas bulut kaydı ve eski yerel verinin sahiplik aktarımı;
- istemci outbox/retry sınırı;
- correction/tombstone/reset semantiği;
- güvenilir puanlama kaynağı;
- içerik sürümü değişince tarihsel sonucun davranışı;
- source locator/içerik hedefi;
- backfill provider'ları ve canlı uygulama yasağı;
- kısmi şema ve health davranışı;
- M13, M18 ve M25'in neden temel olay üretmediği.

Mimari, “sunucu doğrular” gibi genel cümlelerle bitmemeli. Her kaynak için şu zinciri açıkça göstermeli:

`öğrenci eylemi → kaynak-özel sınırlı istek → auth.uid() / rol kontrolü → yetkili içerik ve sürüm doğrulaması → kaynak alan kaydı → Faz 1 adaptör/parity anlamı → learning_private.ingest_evidence → kayıtlı güvenli sonuç`

Alan kaydı ve kanıt aynı transaction'da değilse nedenini, aradaki güvenli outbox/işlem garantisini ve yarım yazıyı nasıl önlediğini ispatla. Tarayıcıdan iki ayrı çağrı kabul edilmez.

### 1.1. Faz 2 sözleşme boşluklarını çöz

Kod başlamadan aşağıdaki kimlik çakışmalarını testle görünür yap:

- M16'da aynı ders/blok farklı çalışma oturumlarında tekrar yanıtlanırsa kaynak kimliği;
- M19/M20/M26'da aynı girişimde farklı soruların `source_record_id` değeri;
- M24'te aynı mini test girişimindeki farklı soruların kimliği;
- cevap değişikliğinin yeni cevap mı, duplicate mı, correction mı olduğu;
- bir testin tekrar çözülmesinin önceki girişimden ayrılması;
- aynı sayfanın React StrictMode/effect tekrarında açma olayının çoğalmaması.

Geçici bir string birleştirme hilesiyle Faz 1 kaynağına aykırı kimlik üretme. Adaptör çıktısı veya kaynak sicili değişecekse:

- eski sürümü sessizce ezme;
- geriye uyumlu sürüm kararını belgeleyip test et;
- kaynak sicili → SQL sözleşme izdüşümü → adaptör fixture → Faz 2 parity zincirini birlikte güncelle;
- yalnız etkilenen kaynakları sürümlemenin yolunu tercih et; bütün sicili gerekçesiz yeniden sürümleme;
- eski kayıtların replay/backfill anlamını koru.

## 2. Faz 3 migration'ı ve kalıcı veri modeli

Tek yetkili Faz 3 DDL kaynağı olacak idempotent bir migration oluştur. Uygun ad örneği:

`supabase/migration_learning_content_activity.sql`

Kesin ad depo geleneğine göre değişebilir; ancak DDL'i `setup_new_project.sql` içine kopyalama. Setup dosyasına yalnız kurulum sırası/açıklaması ekle. Faz 3 testleri temiz kurulumda Faz 2 migration'ının ardından Faz 3 migration'ını çalıştırmalıdır.

Migration:

- aynı dosya ikinci kez uygulandığında hata vermemeli;
- mevcut satırları silmemeli veya yeniden puanlamamalı;
- var olan tablo/kolonlarla çakışmayı açıkça yönetmeli;
- doğrudan öğrenci DML politikalarını gereken tablolarda güvenli source-specific RPC lehine kapatmalı;
- öğrenci kapsamlı tablolarda `profiles(id)`/hesap silme zincirini Faz 2 kararıyla uyumlu kurmalı;
- öğretmen aktörünün silinmesi başka öğrencinin geçmişini silmemeli;
- bütün `SECURITY DEFINER` fonksiyonlarda sabit/güvenli `search_path`, şema nitelemesi, dar parametreler ve açık `REVOKE`/`GRANT` kullanmalı;
- dinamik tablo/kolon/SQL adı kabul etmemeli;
- normal rollere özel şemaya erişim vermemeli;
- kaynak event/attempt/progress ile ortak kanıtı tek transaction'da oluşturmalı;
- hata halinde iki tarafı da rollback etmelidir.

### 2.1. İçerik kimliği ve sürüm kataloğu

M14 için tek, sürümlü ve doğrulanabilir içerik sicili kur. İsimler eşdeğer olabilir; en az şu kavramlar bulunmalı:

- `source_code`;
- `content_kind` (`structured_lesson`, `bundled_lesson`, `library_note`, `db_question_set`, `bundled_question_set`, `atlas_task`, `atlas_assessment`, `geometry_assessment` gibi sınırlı enum);
- kaynak ad alanındaki kararlı `content_id`;
- değişmez `content_revision`;
- deterministik `content_hash`;
- yayın/erişilebilirlik durumu;
- kaynak sahibi tablo/dosya ve güvenli sürüm bağı;
- doğrulanmış eğitim bağlamı, ders ve konu kimliği veya karantina durumu;
- varsa doğrulanmış kazanım ilişkisi;
- içerik hedefi/source locator için opak token ilişkisi;
- önceki/sonraki revizyon ve açık alias/yönlendirme ilişkisi;
- oluşturulma/yayın zamanı; olay zamanı yerine kullanılmamalıdır.

Bu katalog elle tutulan ikinci içerik gerçeği olmasın:

- yapılandırılmış içerikte `structured_lessons.current_revision`, `content_hash` ve revizyon tablosundan türesin;
- DB soru setinde eksik olan revizyon/hash yaşam döngüsünü ekle ve yayın anında sabitle;
- `library_notes` için değişiklikte revizyon/hash üret; `created_at` değerini sonsuza dek sürüm gibi kullanma;
- paketli içerikte kaynak dosyalarından deterministik manifest üret;
- manifest üretimi aynı kaynak ağacında aynı sonucu vermeli;
- manifest ile gerçek kaynak arasında ID, hash, soru/blok sayısı, konu ve cevap anahtarı parity testi bulunmalı;
- başlık değişikliği ID'yi değiştirmemeli;
- slug değişecekse açık, sürümlü alias olmadan tarihsel bağı koparma;
- içerik değiştiğinde revizyon/hash değişmeli; yalnız biçimsel ve anlamı değiştirmeyen farkın nasıl ele alındığını belgelemelisin.

Paketli answer-key/assessment manifestini öğrenciye açık bir tablo olarak sunma. Öğrenci kaynağı okuyabilse dahi kayıt sınırı doğru/yanlış sonucunu yalnız güvenilen server/catalog hesabından almalıdır.

### 2.2. Açık kanonik konu eşlemesi

`library_topics.id`, paketli slug ve atlas görev ID'lerini doğrudan kanonik konu yapma. İçerik sicilinde veya ayrı sürümlü eşleme yapısında:

- kaynak içerik kimliği;
- kaynak revizyonu;
- `education_context_id`;
- `subject_id`;
- `topic_id`;
- mapping durumu (`verified`, `ambiguous`, `unmatched`, gerekirse `retired`);
- resolver/ledger/alias sürümleri;
- doğrulama yöntemi ve güvenli karar kaynağı

bulunsun.

Paketli ders/soru placement alanları build-time resolver ile exact-parity doğrulanabilir. DB içeriği için eksik eşleme kaynak eylemini kaybetmemeli: alan kaydı oluşabilir, fakat ortak kanıt konuya zorlanmadan Faz 2 karantinasına gitmelidir. İlk benzer başlığı seçme.

Atlas kendi `drkoc:atlas:` kimlik ad alanını korur. Müfredat konusuna ancak açık `relatedCurriculumVerified=true` bağı varsa bağlanır. Atlas görev adını metin benzerliğiyle TYT konusuna yapıştırma.

### 2.3. Kaynak alan tabloları

Tek gerçeklik ilkesini koruyarak gereken yapıları kur:

- yapılandırılmış ders etkinlikleri için mevcut `lesson_activity_events` tablosunu güvenli biçimde genişlet;
- paketli ders etkinliği mevcut FK yapısına sığmıyorsa açık ayrı kaynak tablosu veya içerik-genel ama tek yetkili ders etkinlik modeli kur;
- dersin kaldığı yer, tamamlanan bölüm kimlikleri ve içerik revizyonu için öğrenci+ders kapsamlı ilerleme kaydı tut;
- not açılışı için kaynak event kaydı tut;
- soru setleri için tek yetkili girişim ve cevap yaşam döngüsü kur;
- atlaslar için öğrenci+atlas+task/revision kapsamlı cloud snapshot ve import receipt tut;
- outbox istemci tarafında yalnız gönderilmemiş sınırlı eylemi tutmalı; sunucu gerçeğinin kopyası olmamalı.

Mevcut `student_question_set_attempts`, `student_topic_test_progress` ve `student_test_answers` tablolarından hangisinin korunacağını açıkça seç. Tercih edilen yaklaşım:

- `student_question_set_attempts` tek girişim üst kaydı olarak güvenli biçimde genişletilsin;
- her girişim/soru için ayrı, revizyonlu cevap alt kaydı bulunsun;
- DB ve paketli setler aynı yaşam döngüsünü kullansın fakat kaynak ad alanları karışmasın;
- eski tiered tablolarında veri varsa korunup belgeli geçiş/backfill karantinasına alınsın;
- çalışan ürün iki ya da üç tabloya aynı sonucu paralel yazmasın;
- kullanılmayan eski tabloları canlı veriyi silmeden `legacy/read-only/deprecated` olarak sınırla veya güvenli uyumluluk görünümüne dönüştür.

Alternatif seçersen neden tek gerçek olduğunu, mevcut veriyle uyumluluğunu ve bütün okur/yazarları testle göster.

### 2.4. Beklenen alan invariants

Kesin kolon adları mimariye göre değişebilir; şu invariants veritabanında uygulanmalı:

- girişim `student_id + source_code + content_id + content_revision + attempt_id` ile tekildir;
- cevap `attempt_id + question_id` için tek etkin hâle sahiptir;
- her cevap revizyonu yalnız artar;
- tamamlanmış girişim tekrar düzenlenemez; yeniden çözme yeni girişimdir;
- tamamlanma toplamları server tarafından pinned content revision üzerinden hesaplanır;
- boş sayısı, pinned setin soru sayısı eksi geçerli seçilmiş cevap sayısıdır;
- success/accuracy formülü ve paydası Faz 1 sözleşmesiyle aynıdır;
- finalizasyon tekrar gönderimi aynı kayıtlı sonucu döndürür;
- aynı action ID farklı seçenek/payload ile gelirse conflict olur;
- içerik revizyonu artık mevcut değilse eski girişim yeniden puanlanmaz;
- öğrenci yalnız kendi girişim/progress kayıtlarını okuyabilir;
- öğrenci kaynak alan tablolarına doğrudan güvenilir sonuç yazamaz;
- reset normal DML delete ile audit'i yok etmez; tombstone/correction zinciri üretir;
- hesap silme ayrı fiziksel silme zinciri olarak çalışır.

## 3. Kaynak-özel güvenli yazma sınırı

Her ürün akışı için ayrı, sınırlı amaçlı sarmalayıcı oluştur. İsimler depo standardına göre değişebilir; davranışlar aşağıdaki gibi olmalı:

- yapılandırılmış ders olayı kaydet;
- paketli ders olayı kaydet;
- not açılışı kaydet;
- soru girişimi başlat/devam ettir;
- soru cevabı kaydet/değiştir;
- soru girişimini tamamla/terk et/sıfırla;
- atlas görev snapshot'ı kaydet;
- doğrulanabilir atlas/kimya/geometri assessment cevabı ve tamamlaması kaydet;
- eski atlas cihaz kaydını kullanıcı onayıyla içe aktar.

Her sarmalayıcı:

1. `auth.uid()` değerini alır; `student_id` parametresi kabul etmez.
2. Profil rolünün öğrenci olduğunu doğrular.
3. Kaynak kaydının yayınlanmış/erişilebilir olduğunu doğrular.
4. İçerik kimliği, revizyon, blok/soru/görev kimliği ve seçeneği katalogdan doğrular.
5. Correctness, sayımlar, kanıt sınıfı, trusted identity, provenance ve locator'ı kendisi üretir.
6. Kaynak alan satırını yazar.
7. Faz 1 adaptörüyle aynı anlamı üreten kanıt zarfını Faz 2 özel çekirdeğine yollar.
8. İkisini aynı transaction'da commit eder.
9. Kayıtlı, sınırlı bir sonuç kodu döndürür: `created`, `duplicate`, `idempotency_conflict`, `identity_quarantined`, `content_revision_mismatch`, `not_found`, `unauthorized`, `invalid_state`, `retryable_failure` benzeri.
10. SQL/hata metni, başka kullanıcı kimliği veya cevap anahtarı döndürmez.

SQL sarmalayıcı Faz 1 JavaScript adaptörünün anlamını yeniden kurmak zorundaysa exact-parity fixture testi yaz. JavaScript ve SQL aynı kaynak için farklı event class, ölçüm, metadata veya kimlik üretmemelidir.

## 4. Yapılandırılmış ders bağlantısı — M15

### 4.1. Ders açılışı

- Yalnız öğrenci rolünde, yayınlanmış ders gerçekten yüklendikten ve master içerik render edilebilir hâle geldikten sonra `lesson_opened` üret.
- Rota değişimi, loader render'ı, hata sayfası veya React StrictMode çift effect'i ikinci olay üretmemeli.
- Bir gerçek ziyaret için kararlı `client_action_id` üret; retry boyunca aynı kalmalı.
- Açılış kaydı `exposure` olmalı; başarı, ustalık veya completion ölçümü taşımamalı.
- Kayıt hatası dersi okumayı engellememeli; outbox/retry durumu güvenli biçimde saklanmalı.

### 4.2. Ders içi sorular

- `quiz_answered` ve `osym_simulation_answered` için block ID zorunludur.
- Seçilen seçenek istemciden gelebilir; `is_correct` istemciden güvenilir kabul edilmez.
- Sarmalayıcı pinned `structured_lesson_revisions.document` veya güvenilen yayın revizyonundan doğru cevabı bulmalıdır.
- Blok o revizyonda yoksa olay reddedilmeli/karantinaya gitmeli; güncel revizyonda benzer başlıklı blok aranmaz.
- Common evidence yalnız `student_correct` ve izinli güvenli metadata'yı taşır; soru/çözüm/seçenek metnini taşımaz.
- Aynı seçimin retry'ı duplicate; farklı seçim yeni action ve önceki etkin cevaba correction ilişkisi olmalıdır.
- Mevcut `metadata.correct` / `record.is_correct` uyumsuzluğunu gerçek sözleşmeye göre düzelt.

### 4.3. Ders ilerlemesi ve tamamlama

- Tamamlanan bölüm kimliklerini öğrenci+ders+content revision kapsamlı kaynak progress kaydında tut.
- Sayfa yenilenince öğrenci kaldığı yeri görebilmeli; bunun kendisi ortak `lesson_resumed` kanıtı üretmemeli.
- Bölüm tamamlanması alan progress durumudur; mevcut sözleşmede `section_completed` ortak olayı yoktur.
- Bütün zorunlu bölümler tanımlı ürün etkileşimiyle tamamlandığında `lesson_completed` bir kez üret.
- `lesson_completed`, `completion_status=completed` taşıyabilir fakat performans/ustalık değildir.
- Ders revizyonu değişince eski progress'i yeni revizyona körlemesine taşımama; uyumluluk/alias kuralı yoksa yeni revizyon ayrı tutulmalıdır.

### 4.4. Ses olayları

- `audio_started`, gerçek oynatma başladığında; panel açıldığı anda değil.
- `audio_completed`, gerçek içerik sonuna ulaşıldığında veya oynatıcı doğrulanmış tamamlanma callback'i verdiğinde.
- `visual_audio_clicked`, öğrencinin belirli görsel açıklamasını bilinçli seçtiğinde.
- Ses yüklenemedi, oynatılmadı veya yarıda kapandıysa `audio_completed` üretme.
- Süre kullanılıyorsa sekme görünürlüğü ve oynatma durumu esas alınmalı; bilinmeyen süreyi uydurma.

### 4.5. SQL ve RLS düzeltmesi

- `osym_simulation_answered` CHECK uyumsuzluğunu gider.
- Sözleşmede olmayan `personalized_section_viewed` kaydını ortak ağa bağlama; kaynaktaki legacy varlığını açıkça sınıflandır.
- Öğrencinin doğrudan `lesson_activity_events.insert` ile `student_id`, event veya correctness seçmesini kapat.
- Öğrencinin kendi kaynak etkinliklerini gerekli UX için okuyabilmesi korunabilir; başka öğrenci ve genel öğretmen erişimini mevcut yetki modeli dışında genişletme.

## 5. Paketli ders bağlantısı — M16

Paketli dersleri yapılandırılmış derslerle aynı eğitimsel anlamda bağla, fakat kimliklerini karıştırma.

- `bundled-<slug>` yalnız UI rota ID'sidir; kaynak kimliği `bundled_lesson_activity` ad alanında slug/kararlı local ID + content revision olmalıdır.
- Her ders, section ve etkileşimli block kararlı ID taşımalıdır.
- Her dersin deterministik document/content hash'i ve açık revision'ı olmalıdır.
- Başlık veya dizideki sıra ID değildir.
- Paketli manifest; placement, kanonik bağ, section/block ID'leri, block türü ve assessment key'iyle gerçek kaynak arasında parity testli olmalıdır.
- Paketli `lesson_opened`, `quiz_answered`, `lesson_completed` M15 ile aynı sınıf/ölçüm anlamını üretmelidir.
- M16 sözleşmesinde audio event yoktur; paketli narration'ı yanlışlıkla M15 kaynağına yazma veya sözleşmesiz ses kanıtı oluşturma.
- Paketli dersin ilerlemesi ve yenileme sonrası devamı sunucuya bağlı olmalıdır.
- Aynı slug farklı revision'da değiştiğinde geçmiş yanıt eski revision'a bağlı kalmalıdır.
- Kaynak silinirse geçmiş kanıt doğrudan fiziksel silinmemeli; erişilemeyen hedef durumu ve gerekirse tombstone zinciri uygulanmalıdır.

Paketli içerik sayımı için kabul testi en az şunları raporlamalı:

- toplam ders;
- toplam section;
- toplam block;
- quiz ve ÖSYM simülasyonu sayısı;
- eksik/çift ders ID'si;
- eksik/çift section ID'si;
- eksik/çift block ID'si;
- revizyonsuz/hashsiz ders;
- çözülemeyen/ambiguous konu bağı;
- manifest-kaynak parity farkı.

Bu değerlerin hepsi sıfır kusur göstermeden M16 tamamlanmış sayılmaz.

## 6. Kütüphane notu/PDF maruziyeti — M17

- `LibraryGateway` ve liste/kart render'ı olay üretmemeli.
- `note_opened`, öğrenci PDF viewer'ı veya görsel lightbox'ı bilinçli açtığında üret.
- Thumbnail'ın PDF'i teknik olarak yüklemesi, hover, kartın ekrana girmesi veya dosya meta okuması `note_opened` değildir.
- Tek UI açma eylemi StrictMode/re-render nedeniyle çoğalmamalı.
- PDF açma, indirme, yazdırma, sayfa sayısı veya viewer'da kalma öğrenme/tamamlama değildir.
- Common evidence metadata'sında yalnız izinli `content_kind` ve `content_revision` bulunabilir.
- Başlık, not metni, file URL, storage path veya sayfa içeriği ortak kanıta kopyalanmamalı.
- `library_notes` için güvenilir content revision/hash üret; not düzenlendiğinde tarihsel açılış eski revizyonda kalmalı.
- Not silinmiş/öğrenciye kapalıysa yeni açılış reddedilmeli; gelecekteki source locator çözümü güvenli “artık erişilemiyor” sonucu verebilmelidir.

## 7. Soru kütüphanesi yaşam döngüsü — M19 ve M20

### 7.1. Tek girişim modeli

DB ve paketli soru setleri için aynı dış yaşam döngüsünü kur:

- `in_progress`;
- `completed`;
- açık öğrenci eylemi varsa `abandoned`;
- gerçek ürün timeout kuralı varsa `expired`; keyfî süre uydurma.

Girişim başladığında:

- `attempt_id` sunucu veya güvenli source-specific sınır tarafından üretilir;
- öğrenci `auth.uid()` ile bağlanır;
- `source_code`, `content_id`, `content_revision`, soru manifest hash'i ve başlama zamanı sabitlenir;
- aynı start action retry'ı aynı girişimi döndürür;
- yeniden çözme yeni girişimdir;
- başka öğrencinin girişim ID'si her işlemde `not_found`/`unauthorized` olur; veri varlığını ifşa etmez.

Başlatma tek başına Faz 1 kayıt defterinde öğrenme kanıtı değildir. Ortak olaya dönüştürme.

### 7.2. Cevap kaydı

Her seçilmiş cevapta:

- attempt, pinned set revision ve question ID doğrulanır;
- option ID o soru için geçerli olmalıdır;
- correct option güvenilen içerik manifestinden alınır;
- `student_correct` server tarafından türetilir;
- soru zorluğu/kavram bağı varsa içerikten alınır, istemci metadata'sından değil;
- source record identity girişim+soru+cevap revizyonunu ayırt eder;
- ilk kayıt `question_answered` event, cevap değişikliği etkin kaydı değiştiren correction zinciridir;
- aynı action ID aynı payload ile duplicate, farklı payload ile conflict'tir;
- completed attempt cevabı değiştirilemez;
- soru metni, bütün seçenekler ve çözüm common evidence'a kopyalanmaz.

Hiç dokunulmamış soru için sahte `question_answered` üretme. Boş sayısı finalizasyonda pinned soru manifestinden hesaplanır.

### 7.3. Finalizasyon

“Testi Bitir” akışı:

1. İstemcide bekleyen son seçimlerin kaynak kaydına ulaştığını doğrular.
2. Pinned revision'daki bütün soruları server tarafında sayar.
3. Doğru, yanlış, boş, işaretli ve toplam sayılarını server tarafında hesaplar.
4. Accuracy'yi sözleşmedeki payda/formülle hesaplar.
5. Attempt'i atomik olarak `completed` yapar.
6. Aynı transaction'da `test_completed` direct measurement kanıtını üretir.
7. Kayıtlı sonucu döndürür ve sonuç rotasına yalnız bundan sonra geçer.

Öğrenci testi boşlarla bitirebilir. Şart, seçtiği bütün cevapların kalıcı olması ve boşların server manifestinden türetilmesidir; her soruya cevap verme zorunluluğu değildir.

Finalizasyon yarıda kalırsa ne completed attempt ne `test_completed` kanıtı tek başına kalmalıdır. Tekrar istek aynı sonucu döndürmelidir.

### 7.4. Sonuç ekranı ve yenileme

- Sonuç ekranının tek gerçeği `location.state` olmamalı.
- URL/route state yalnız `attempt_id` veya güvenli bir referans taşıyabilir.
- Sayfa yenilemede öğrenci kendi tamamlanmış girişimini server'dan yüklemeli.
- Özet sayılar server'ın kayıtlı final sonucundan gelmeli.
- Soru detayları pinned içerik revizyonuyla gösterilmeli.
- Pinned eski revizyon artık görüntülenemiyorsa sonucu güncel cevap anahtarıyla yeniden puanlama. Özet sonucu koru, detay için açık “bu içerik sürümü artık görüntülenemiyor” davranışı göster.
- Çözümler yalnız ürünün mevcut pedagojik akışında izin verilen zamanda gösterilmeli.
- `solution_viewed` veya `help_used` M19/M20 sözleşmesinde yoktur; sırf ekran açıldı diye yeni common evidence uydurma.

### 7.5. Cevap anahtarı güven sınırı

Mevcut paketli içerik JavaScript'te answer key barındırabilir. Bunu “gizli” diye raporlama. Faz 3'ün zorunlu güvenlik garantisi şudur:

- kalıcı `is_correct` ve toplamlar tarayıcıdan alınmaz;
- source-specific server/RPC, aynı content revision'ın yetkili key'inden yeniden hesaplar;
- istemcinin `is_correct=true`, sahte toplam veya eski revision gönderimi reddedilir;
- DB soru seti öğrenci payload'ından answer key'i ayırmak makul biçimde uygulanabiliyorsa uygula; değilse mevcut görünürlüğü kabul kanıtında açık sınır olarak belirt, fakat server-side scoring'den vazgeçme.

## 8. Atlaslar ve Geometri Pilotu — M21–M26

### 8.1. Ortak atlas kuralı

Atlas içinde yalnız önceden tanımlı öğrenme nesnesi ve explicit görev sonucu kaydedilir. Şunları kaydetme:

- sayfayı/haritayı açma;
- kamera, pan, zoom ve sürükleme örnekleri;
- tema veya açıklama seviyesi;
- favori;
- türetilmiş rozet;
- navigasyon bölgesi/yıl/katman;
- rastgele formül veya element araması;
- ses/müzik oynatma;
- her slider değişimi veya her frame.

Bir etkileşim yalnız görev sözleşmesindeki `gorev` + `kontrol` koşulu gerçekse `atlas_task_state` olabilir. Tahmin varsa güvenli boolean/özet olarak kaynak state'inde tutulabilir; ham sürükleme geçmişi saklanmaz.

Her atlas task/question:

- kararlı source-scoped ID;
- content/storage revision;
- izinli bölge/task kodu;
- varsa server-doğrulanabilir answer key;
- atlas kimliği;
- açık ve doğrulanmışsa müfredat ilişkisi

taşımalıdır.

### 8.2. Fizik Atlası — M21

- `drkoc-fizik-ilerleme-v1` içindeki `tamamlanan`, `seviyeler`, `kavramPusulasi` ve doğrulanabilir task state'lerini sınıflandır.
- `rozetler`, `favoriler`, `sonBolge`, `sonDeney`, tema ve yalnız gezinme alanlarını common evidence'a koyma.
- Rozet/basarım türevini temel kanıt yapma; underlying explicit task/control kaydı varsa onu kullan.
- Yeni kullanıcı-bağlı kayıt `atlas_task_state` veya `concept_check_state` snapshot/correction semantiğiyle çalışmalı.
- Kavram pusulası eski aggregate sayımlarından tekil cevap zamanı/sorusu uydurma.

### 8.3. Biyoloji Atlası — M22

- `etkilesimTamamla` yalnız `gorev && kontrol` koşulunda kanıt üretmeye devam etmeli.
- `tamamlananlar` ve doğrulanabilir concept check sonucu cloud source state'e bağlanabilir.
- `favoriler` common evidence değildir.
- `hataDefteri`, `ustalik`, `tekrarKuyrugu` ve `tani` içindeki mevcut cihaz özetlerini doğrudan direct measurement/ustalık diye yükseltme.
- Kamp sorularındaki yeni yanıtlar stable question/attempt/revision ve server scoring olmadan doğrudan ölçüm sayılmamalı. Mevcut kaynak sicili bu fazda M22'yi system observation olarak sınırlar.
- Faz 6 gelmeden `ustalik` yüzdesini yeni öğrenci modeli gibi kullanma.

### 8.4. Coğrafya Atlası — M23

- `atlas_task_state` ve `concept_check_state` system observation olarak kalmalı.
- Yeni zamanlı TYT denemesi stable attempt/question/revision ve server scoring ile `timed_test_completed` direct measurement üretebilir.
- Eski `tytDenemeleri` yalnız client aggregate sayılar taşıyorsa onları direct measurement olarak backfill etme; doğrulama yoksa legacy source state/karantina/skip olarak raporla.
- `hataDefteri` içinden olmayan soru cevabı veya zaman türetme.
- Harita navigation, tema ve son bölge common evidence değildir.

### 8.5. Kimya Atlası — M24

- `TEST_SORULARI` içindeki her soruya metinden/sıradan bağımsız kararlı ID ekle.
- Soru bankası için deterministik content revision/hash oluştur.
- Rastgele sekiz soru seçimini attempt manifesti olarak sabitle; sayfa yenileme aynı attempt sorularını ve sırayı korumalı.
- Her cevap server tarafında pinned key ile doğrulanmalı ve `concept_check_answered` direct measurement üretmeli.
- Test bittiğinde server hesaplı sayılarla `mini_test_completed` üret.
- Aynı attempt'te farklı soru cevaplarının source record ID'si çakışmamalı.
- Tema, bölüm seçimi, formül araması veya laboratuvar gezintisi olay değildir.

### 8.6. Tarih atlası — M25

- `/tarih-atlasi` ve `/osmanli-padisahlari` gezinme/yıl/katman/müzik/model sesi common evidence üretmemeli.
- Faz 3 testinde bu dışlamayı negatif assertion ile kanıtla.
- Gerçek, kimlikli ve puanlanabilir bir tarih görevi ayrıca bulunursa onu M25 navigation diye kaydetme. Önce yeni/sürümlü kaynak sözleşmesi kararı gerekir; bu fazın zorunlu bitişi değildir.

### 8.7. Geometri Pilotu — M26

- Sayfa içindeki numeric/index ID'leri kararlı namespaced soru ID'lerine dönüştür.
- Soru setini JSX sayfa state'inden ayrıştırırken görsel/SVG davranışını bozma.
- Set revision/hash ve attempt lifecycle oluştur.
- Her cevap server doğrulamalı `question_answered`; final sonuç server hesaplı `test_completed` olmalı.
- Sonuç yenilemede kaybolmamalı.
- Soru/çözüm metnini common evidence metadata'sına koyma.
- M19/M20 ile ortak girişim altyapısı kullanılabiliyorsa tekrar etme; `source_code=geometry_pilot` ve kimlik ad alanı ayrı kalsın.

## 9. Atlas yerel veri sahipliği ve buluta geçiş

Faz 2'de K06 dil+atlas birlikte açık bırakılmış olabilir. Bu fazda yalnız atlas kolunu çöz; dil kolunu Faz 5'e bırak ve `MIMARI_KARARLAR.md` içinde bu ayrımı düzelt.

Eski anahtarlar:

- `drkoc-fizik-ilerleme-v1`;
- `drkoc-biyoloji-v1`;
- `drkoc-cografya-v1`.

Bu kayıtlar kullanıcı ID'si taşımaz. Bu nedenle:

- giriş yapan ilk hesaba otomatik aktarım yapma;
- localStorage'ın sahibini e-posta, cihaz veya son oturumdan tahmin etme;
- paylaşılan cihazda bir hesabın verisini diğerine gösterme/yazma;
- kullanıcı onayı olmadan cloud evidence üretme;
- aktarım başarısı doğrulanmadan eski kaydı silme;
- aynı local snapshot'ı ikinci kez sayma.

### 9.1. Açık sahiplik akışı

Atlas geçmişi bulunan öğrenciye sakin ve açık bir aktarım arayüzü göster:

- hangi atlas;
- hangi veri sınıfları ve yaklaşık kayıt sayısı;
- nelerin öğrenme kanıtı olacağı;
- tema/favori/rozet/navigation gibi nelerin analiz kanıtı olmayacağı;
- “Bu cihazdaki ilerleme bana ait” açık onayı;
- aktar/şimdi değil seçenekleri;
- başarılı, kısmi, conflict ve yeniden denenecek durumları.

Onay, başka öğrencinin hesabını seçme veya `student_id` gönderme yetkisi vermez; server her zaman `auth.uid()` kullanır.

### 9.2. Aktarım manifesti ve receipt

Deterministik bir aktarım manifesti oluştur:

- source code;
- local storage schema version;
- device/import ID;
- snapshot hash;
- izinli bölüm/satır sayımları;
- dışlanan alan sayımları;
- kullanıcı onay zamanı;
- client action ID;
- dönüştürücü/adaptör sürümü.

Sunucu receipt'i `student_id + source_code + snapshot_hash/import_id` üzerinde tekil olmalı. Aynı aktarım retry'ında yeni kanıt oluşmamalı. Aynı hash başka hesaba aktarılmışsa veri içeriğini ifşa etmeden güvenli conflict dönmelidir.

### 9.3. Dönüşüm dürüstlüğü

- Local aggregate'dan tekil soru zamanı/cevabı uydurma.
- Local `ustalik`, rozet veya tamamlanma yüzdesini Faz 6 ustalığına çevirmeme.
- Sahipliği onaylanan ama direct measurement şartını karşılamayan eski veri yalnız izinli system observation snapshot olabilir.
- Doğrulanamayan Coğrafya TYT aggregate sonuçlarını direct measurement yapma.
- Bozuk/gelecek schema version'ı atma; güvenli `unsupported_version`/karantina sonucu ver.
- Kısmi başarıda hangi bölümün işlendiğini receipt/cursor ile koru; retry çoğaltmasın.
- Yerel kaydı server ack sonrası otomatik silmek zorunlu değildir. Silinecekse ayrıca açık ürün kararı ve geri dönüşsüzlük uyarısı gerekir.

### 9.4. Aktarım sonrası kaynak otoritesi

- Onaylı aktarım sonrası authenticated öğrenci için cloud source state yetkili olmalı.
- Local state yalnız kullanıcı kapsamlı cache/outbox olabilir; kullanıcı ID'siz ortak anahtara yeni cloud gerçeği yazma.
- Oturum değişince önceki öğrencinin cache/outbox'ı okunmamalı.
- Çıkışta hassas bekleyen seçimleri kullanıcılar arasında bırakma.
- Anonim atlas kullanımı mevcut ürün gereği devam edebilir; anonim kullanım ortak evidence üretmez. Girişte yalnız açık sahiplik akışıyla aktarılır.

## 10. İstemci outbox, retry ve kayıt UX'i

Kaynak-özel çağrıları ortak bir güvenli istemci yardımcı katmanında birleştirebilirsin; bu katman tam kanıt zarfı kabul eden genel API olmamalı.

Outbox kaydı en fazla şunları taşımalı:

- kullanıcı kapsam anahtarı;
- kaynak-özel action türü;
- content/attempt/task/question kimliği;
- selected option veya izinli sınırlı payload;
- content revision;
- `client_action_id`;
- oluşturulma ve retry durumu.

Outbox'ta `student_id` kaynak gerçek gibi tutulmamalı; oturum değişiminde güvenli scope kontrolü yapılmalıdır. JWT, cevap anahtarı, ham soru, ders metni veya common evidence zarfı saklama.

Davranış:

- action ID ilk kullanıcı eyleminden önce üretilir ve bütün retry'larda aynı kalır;
- request timeout/5xx/retryable network error yeniden denenebilir;
- 4xx, revision mismatch ve validation error sonsuz retry edilmez;
- exponential backoff + üst sınır + kullanıcı tetikli retry bulunur;
- browser `online` olayı tek doğruluk kaynağı değildir;
- duplicate başarı gibi ele alınır;
- conflict otomatik overwrite edilmez;
- oturum biterse kuyruk başka kullanıcıyla gönderilmez;
- cevap server ack almadan “kaydedildi” denmez;
- ders/not açılışı kaydı başarısız olsa da içerik okunabilir;
- test finalizasyonu ack almadan tamamlandı sayfasına geçilmez;
- uygulama yeniden açıldığında aynı öğrenci pending cevabını kaybetmez.

Öğrenciye yalnız sade durumlar göster:

- `Kaydediliyor…`
- `Kaydedildi`
- `Bağlantı sorunu — yeniden denenecek`
- `Cevabın bu cihazda korunuyor`
- gerektiğinde `Yeniden dene`

Olay ID'si, SQL, RPC adı veya teknik hata gösterme.

## 11. Düzeltme, sıfırlama ve içerik yaşam döngüsü

### 11.1. Cevap değişikliği

- İlk cevap event'tir.
- Öğrenci completed olmadan cevabı değiştirirse kaynak cevap revizyonu artar.
- Common evidence'ta yeni toplam eklemek yerine önceki kayıt hedefli correction oluşur.
- Effective görünüm yalnız son geçerli cevabı sayar.
- Retry aynı correction'ı çoğaltmaz.

### 11.2. Girişim/ders/atlas sıfırlama

- Öğrenci açık onayla sıfırladığında kaynak state güncellenir.
- Etkin öğrenme etkisi tombstone/correction zinciriyle kalkar.
- Common ledger satırı normal ürün akışında fiziksel silinmez.
- Bir girişimi “yeniden çöz” eski girişimi silmez; yeni attempt açar.
- UI yalnız server ack sonrası sıfırlanmış görünür.

### 11.3. İçerik düzenleme ve silme

- İçerik revizyonu değişince eski öğrenci sonucu yeni answer key ile yeniden puanlanmaz.
- Düzeltmenin tarihsel ölçümü geçersiz kılması gerekiyorsa açık migration/correction politikası gerekir; sessiz overwrite yoktur.
- Content alias/yönlendirme, kanonik topic remap ve assessment key düzeltmesini birbirine karıştırma.
- Silinen içerik için source locator güvenli “erişilemiyor” sonucu verir; başka içeriğe başlık benzerliğiyle yönlendirmez.
- Kaynak satırı cascade delete olacaksa ortak etkin kanıtın hangi tombstone ile geri alınacağını transaction testinde göster. İçerik yönetim akışını bu faz dışında gereksiz yere yeniden yazma.

## 12. Geriye doldurma provider'ları

Faz 2 `createBackfillProviderRegistry` / `runBackfill` altyapısını kullan. Dinamik tablo adı alan genel provider oluşturma.

Kaynak bazında provider/karar üret:

- M15 mevcut `lesson_activity_events`;
- M16 geçmiş kalıcı kaynak yoksa açık `no_historical_source` kararı;
- M17 geçmiş açılış kaydı yoksa açık `no_historical_source` kararı;
- M19 mevcut `student_question_set_attempts` satırları;
- M20 geçmiş kalıcı kaynak yoksa açık karar;
- M21–M23 yalnız kullanıcı-onaylı cihaz import yolu; server backfill değil;
- M24 geçmiş kalıcı kaynak yoksa açık karar;
- M25 excluded, provider yok;
- M26 geçmiş kalıcı kaynak yoksa açık karar.

### 12.1. M15 eski olay dürüstlüğü

- `lesson_opened`, `lesson_completed` ve ses maruziyeti gerekli kimlik/sürüm bulunabiliyorsa taşınabilir.
- Eski `metadata.correct` client kaynaklıysa bunu otomatik `system_measured` direct measurement yapma.
- Ders revision/blok ID/result doğrulanamıyorsa karantina/skip reason üret.
- `osym_simulation_answered` eski CHECK nedeniyle hiç yazılamamış olabilir; olmayan kayıt uydurma.

### 12.2. M19 eski girişim dürüstlüğü

- Answers + pinned question revision birlikte doğrulanabiliyorsa server yeniden hesaplayabilir.
- Content revision yoksa mevcut güncel seti tarihsel anahtar kabul etme.
- Yalnız aggregate counts varsa tekil soru cevabı üretme.
- Kaynak öğrencisi ve set sahipliği doğrulanamıyorsa reddet.

### 12.3. Dry-run raporu

Her provider için şunları üret:

- okunan kaynak satırı;
- hazır/adapte edilen;
- duplicate;
- conflict;
- ambiguous/unmatched karantina;
- invalid/unsupported skip;
- yazılması beklenen event/snapshot/correction/tombstone sayısı;
- kanıt sınıfı ve semantic type dağılımı;
- bilinmeyen zaman/sürüm sayısı;
- source availability/capability durumu.

Dry-run hiçbir kaynak, common ledger, receipt veya cursor kalıcı satırı yazmamalı. Sentetik apply/retry testi yapılabilir; gerçek canlı veri backfill'i yapma.

## 13. Kısmi şema ve kaynak sağlığı

Faz 3 migration'ı canlıda henüz yokken mevcut ürünün kontrollü davranmasını sağla:

- ders/not içeriği telemetry migration yok diye çökmemeli;
- test çözme kalıcılık altyapısı yoksa bunu sessiz “başarılı/kaydedildi” diye göstermemeli;
- pending seçimi cihazda koruyup açık retry durumu göstermeli;
- atlas anonim yerel işlevi mevcut ürün gereği bozulmamalı;
- eksik table/function `unavailable`;
- eski content manifest/capability `degraded`;
- başarılı sorguda sıfır kayıt `empty`;
- çalışan kaynak `available` olmalıdır.

Ham hata metnini health kaydına veya öğrenci UI'ına yazma. Kaynak bazlı capability version tanımla. M13/M18/M25'in olay üretmemesi `unavailable` değil sözleşmeye uygun `excluded/catalog/derived` kararıdır.

## 14. Güvenlik ve gizlilik

En az şu saldırı/yanlış kullanım yollarını otomatik test et:

- öğrenci body ile başka `student_id` gönderiyor;
- başka öğrencinin attempt/progress/event ID'sini kullanıyor;
- öğretmen JWT'si öğrenci-only RPC çağırıyor;
- anonim kullanıcı event yazmaya çalışıyor;
- öğrenci `is_correct`, counts, evidence class, topic ID, source revision veya recorded time enjekte ediyor;
- öğrenci unpublished/archived content'e cevap gönderiyor;
- eski revision ile yeni answer key'i karıştırıyor;
- olmayan question/block/task/option ID gönderiyor;
- tamamlanmış attempt'e cevap değiştiriyor;
- aynı action ID farklı payload ile gönderiliyor;
- doğrudan kaynak tablosuna güvenilir sonuç yazılıyor;
- doğrudan `learning_private.ingest_evidence` çağrılıyor;
- source-specific RPC'ye M13/M18/M25 semantic event'i gönderiliyor;
- atlas local import başka hesapta tekrar sahipleniliyor;
- local outbox kullanıcı değişiminden sonra gönderiliyor;
- source locator başka öğrenci veya ham URL ifşa ediyor;
- metadata'ya ham soru/not/URL/JWT ekleniyor.

RLS testleri yalnız SQL metninde policy aramasına dayanmasın. En az iki öğrenci, bir öğretmen ve anonim rol bağlamında gerçek sorgu davranışını çalıştır.

## 15. Kullanıcı deneyimi ve görsel doğrulama

Mevcut ders ve atlas tasarımını gereksiz yere yeniden tasarlama. Yalnız kayıt güvenilirliği için gerekli yüzeyleri ekle:

- testte kaydediliyor/kaydedildi/hata/retry;
- girişimi yenileme sonrası devam ettirme;
- sonuç ekranını attempt'ten açma;
- atlas eski verisi sahiplik aktarım paneli;
- cloud/local pending durumu;
- sıfırlama onayı ve başarısızlık durumu.

Arayüz gereksinimleri:

- Türkçe, sakin ve teknik olmayan metin;
- mobil/tablet/masaüstü;
- klavye, focus-visible ve screen reader etiketi;
- en az 44 px dokunma hedefi gereken kontrollerde korunmalı;
- loading, empty, unavailable, degraded, pending, conflict, success ve retry durumları;
- hareket azaltma tercihi;
- kayıt problemi yüzünden soru seçiminin görünmezce kaybolmaması;
- atlasın öğrenme nesnesi aktarım kartından daha baskın kalmalı;
- modal/çekmecede focus trap, Escape ve odağı geri verme;
- aktarım reddedilirse atlas kullanılmaya devam etmeli.

Çalışan uygulamayı en az şu viewport'larda görsel olarak doğrula:

- masaüstü yaklaşık 1440×900;
- telefon yaklaşık 390×844;
- mümkünse tablet yaklaşık 768×1024.

En az şu ekranları aç:

- yapılandırılmış ders;
- paketli ders;
- soru çözme ve sonuç;
- ağ hatası/retry durumu;
- atlas aktarım önerisi;
- aktarım sonrası atlas;
- Kimya Mini Test;
- Geometri Pilotu.

Kaynak kod doğru görünüyor diye görsel kabul verme. Ekran görüntüsü veya tarayıcı doğrulama notunu kanıt klasörüne koy; kişisel veri içeren ekran görüntüsü üretme.

## 16. Zorunlu otomatik test paketi

`package.json` içine tek giriş komutu ekle:

`npm run test:ai-koc-faz-3`

Bu komut gerçek testleri çalıştırmalı ve başarısız assertion'da non-zero çıkmalıdır. Yalnız belge/regex kontrolü yeterli değildir. Uygun olarak saf JS içerik testleri + geçici PostgreSQL entegrasyon testlerini ayırabilirsin.

### 16.1. Ön koşul ve parity

- Faz 1 testleri geçer.
- Faz 2 testleri geçer.
- Faz 2 migration checksum'u kabul kaydıyla eşleşir.
- Faz 3 source contract izinleri registry/SQL/adaptör ile exact parity'dir.
- Sözleşme sürümü değiştiyse eski sürüm replay edilebilir ve karar belgelenmiştir.

### 16.2. Migration

- temiz kurulum sırası geçer;
- Faz 3 migration'ı ikinci uygulamada geçer;
- migration → fixture → ikinci migration satırları korur;
- rollback veya güvenli test transaction davranışı doğrulanır;
- setup/migration parity geçer;
- fonksiyon/policy/index/constraint envanteri beklenenle aynıdır;
- normal rollere gereksiz grant yoktur.

### 16.3. İçerik kimliği

- bütün paketli ders/set/task/question kayıtlarında kararlı ID ve revision/hash vardır;
- duplicate ID yoktur;
- manifest kaynakla bire birdir;
- aynı kaynak iki çalıştırmada aynı manifest/checksum'u üretir;
- başlık değişikliği fixture'ında ID sabit kalır;
- içerik/cevap anahtarı değişikliğinde revision/hash değişir;
- eski revision sonucu yeni key ile değişmez;
- ambiguous/unmatched konu eşleşmesi karantinaya gider;
- atlas source-scoped identity doğrulanmamış müfredat bağı üretmez.

### 16.4. Dersler

- gerçek structured lesson open isteği başlar ve tek source event + tek evidence oluşturur;
- StrictMode/effect tekrarında duplicate olur, ikinci kayıt oluşmaz;
- paketli ders de aynı anlam sözleşmesine bağlanır;
- ders açma `exposure`, completion `system_observation`, quiz sonucu `direct_measurement` kalır;
- server, sahte `is_correct` değerini yok sayar/reddeder ve key'den hesaplar;
- quiz/ÖSYM block revision mismatch reddedilir;
- bölüm progress'i yenilemede geri gelir;
- bölüm progress'i common `section_completed` olayı üretmez;
- bütün bölüm tamamlanınca tek `lesson_completed` oluşur;
- audio started gerçek startta, completed gerçek bittiğinde oluşur;
- başarısız/yarım audio completed üretmez;
- paketli narration sözleşmesiz audio event üretmez.

### 16.5. Not/PDF

- liste/kart/thumbnail render'ı olay üretmez;
- full viewer/lightbox açma tek `note_opened` üretir;
- duplicate retry çoğalmaz;
- event exposure sınıfındadır ve measurement taşımaz;
- PDF açma completion/mastery değildir;
- metadata ham URL/title/content içermez;
- silinmiş/yayın dışı note açılışı reddedilir.

### 16.6. Soru girişimi

- DB set ve paketli set aynı lifecycle'ı kullanır;
- start retry aynı attempt'i döndürür;
- answer kaydı sayfa yenilemede geri gelir;
- son seçili cevap finalizasyondan önce kalıcıdır;
- untouched sorular server tarafından blank sayılır;
- doğru/yanlış/boş/marked/total/accuracy server hesabı beklenenle aynıdır;
- istemci counts ve `is_correct` sahteciliği başarısızdır;
- her soru benzersiz source record identity üretir;
- aynı cevap 2 ve 10 ardışık retry'da tek kabul edilir;
- desteklenen en gerçekçi eş zamanlı retry'da tek kabul edilir; PGlite sınırı açık raporlanır;
- aynı action ID farklı option ile conflict'tir;
- cevap değişimi correction ile etkin sonucu değiştirir, toplamı iki kez saymaz;
- completed attempt değiştirilemez;
- finalizasyon source state + `test_completed` kanıtını atomik üretir;
- finalizasyon hata fixture'ında ikisi de rollback olur;
- finalizasyon retry aynı kayıtlı sonucu döndürür;
- sonuç sayfası refresh sonrası attempt'ten açılır;
- eski content revision detay yoksa yeniden puanlama yapılmaz;
- başka öğrenci attempt'i okunamaz/yazılamaz.

### 16.7. Atlaslar ve Geometri

- Fizik explicit task snapshot üretir; tema/favori/rozet/kamera üretmez;
- Biyoloji `gorev && kontrol` olmadan completion üretmez;
- Biyoloji favori/yerel ustalık common evidence değildir;
- Coğrafya task system observation kalır;
- yeni server-scored zamanlı Coğrafya testi direct measurement üretir;
- eski aggregate Coğrafya denemesi direct measurement backfill edilmez;
- Kimya sorularının ID/revision parity'si geçer;
- Kimya cevapları attempt+question bazında ayrılır ve server score edilir;
- Kimya mini test finali tek completion üretir;
- Tarih atlası harita/yıl/katman/müzik/ses işlemlerinin hiçbiri evidence oluşturmaz;
- Geometri stable ID/revision, answer ve test completion üretir;
- atlas navigasyon/slider/frame fırtınası event fırtınası üretmez.

### 16.8. Yerel atlas aktarımı

- onaysız aktarım sıfır cloud satırı/evidence üretir;
- A öğrencisinin snapshot'ı B hesabına sessizce gitmez;
- aynı manifest 2 ve 10 retry'da bir receipt/etkin snapshot üretir;
- aynı snapshot başka hesapta güvenli conflict verir;
- bozuk JSON ve desteklenmeyen version güvenli hata verir;
- kısmi aktarım resume edilebilir ve çoğalmaz;
- eski aggregate'dan tekil cevap/timestamp üretilmez;
- excluded alanlar common evidence'a girmez;
- server ack öncesi local veri silinmez;
- kullanıcı değişiminde outbox gönderilmez;
- aktarım sonrası cloud state yenilemede korunur.

### 16.9. Correction/tombstone ve replay

- cevap değiştirme effective ölçümü doğru değiştirir;
- test reset/tombstone etkin test ve soru etkisini kaldırır;
- atlas snapshot correction yalnız son state'i etkin bırakır;
- ders/content silme fixture'ı tanımlı tombstone/erişilemiyor davranışını üretir;
- replay aynı effective rows/checksum'u iki kez üretir;
- zehirli source record sonraki sağlıklı kaydı durdurmaz.

### 16.10. Güvenlik, health ve performans

- iki öğrenci, öğretmen ve anon gerçek RLS/RPC davranışı;
- doğrudan ortak defter ve kaynak trusted sonuç DML'i engelli;
- private ingest product rollerine kapalı;
- metadata/measurement/source event beyaz listeleri çalışıyor;
- `available`, `empty`, `unavailable`, `degraded` ayrımı;
- migration yokken kontrollü UI/client davranışı;
- 10.000 sentetik answer/event/progress satırında temel kullanıcı sorguları indeks kullanıyor;
- paketli manifest oluşturma ve soru/atlas başlangıç yükü kabul edilebilir;
- outbox event fırtınası veya sınırsız büyüme üretmiyor.

Assertion sayısını komut sayısı gibi raporlama. Mock fonksiyon çağrısını gerçek PostgreSQL RLS/transaction ispatı diye sunma.

## 17. Faz 0 kabul senaryolarının Faz 3 karşılığı

En az şu çapraz senaryoları gerçek test verisiyle çalıştır:

### P3-S01 — Bir konu, birden çok iç kaynak

Aynı doğrulanmış kanonik konu için:

- paketli veya structured ders açılışı;
- ders içi doğru/yanlış kontrol;
- soru kütüphanesi girişimi;
- varsa doğrulanmış atlas görevi

oluştur. Hepsi aynı konu bağında bulunabilmeli; ancak exposure, system observation ve direct measurement ayrımı kaybolmamalı. Bu faz bir ustalık puanı hesaplamaz.

### P3-S02 — Yenileme ve ağ kesintisi

Öğrenci testte cevap seçer, ilk istek timeout olur, sayfayı yeniler ve tekrar dener. Sonuç:

- seçim kaybolmaz;
- başka kullanıcıya sızmaz;
- tek kaynak cevap ve tek effective evidence kalır;
- finalizasyon doğru sayıları üretir.

### P3-S03 — İçerik revision değişimi

Öğrenci v1 sorusunu cevaplar. Cevap anahtarı/içerik v2 olur. Sonuç:

- v1 sonucu değişmez;
- v2 yeni girişime uygulanır;
- v1 sonucu current key ile yeniden puanlanmaz;
- source locator v1 erişilemiyorsa bunu açık söyler.

### P3-S04 — Cevap değişikliği ve sıfırlama

Öğrenci yanlış cevabı doğruya çevirir, sonra girişimi sıfırlar. Effective sonuç sırasıyla yanlış → doğru → yok olmalıdır; üç bağımsız soru başarısı olarak birikmemelidir.

### P3-S05 — Paylaşılan cihaz atlas verisi

Sahipsiz local Fizik/Biyoloji/Coğrafya verisi varken A ve B hesaplarını sırayla dene. Onay olmadan hiçbir hesaba gitmemeli; A onayladıktan sonra B aynı snapshot'ı sahiplenememeli; excluded alanlar evidence olmamalıdır.

### P3-S06 — Dışlanan gezinme

Tarih atlasında yoğun pan/zoom, yıl/katman seçimi ve ses oynatımı yap. Common evidence satırı sıfır kalmalıdır.

### P3-S07 — Başka öğrenci saldırısı

A öğrencisi B'nin attempt/progress/reference ID'lerini kullanmayı dener. Okuma/yazma/finalize/reset/import yollarının tamamı reddedilmeli ve B'nin varlığı/sonucu ifşa edilmemelidir.

## 18. Regresyon doğrulaması

En az şu komutları çalıştır; depoda ad değişmişse gerçek karşılığını kullan:

- `npm run test:ai-koc-faz-1`
- `npm run test:ai-koc-faz-2`
- `npm run test:ai-koc-faz-3`
- `npm run test:lesson-document`
- `npm run test:lesson-content`
- `npm run test:lesson-narration`
- `npm run test:library-curriculum`
- `npm run test:matematik-soru-kutuphanesi`
- `npm run test:felsefe-soru-kutuphanesi`
- `npm run test:tarih-soru-kutuphanesi`
- `npm run test:kimya`
- `npm run test:fizik`
- `npm run test:biyoloji`
- `npm run test:cografya`
- `npm run test:tarih`
- `npm run test:anasayfa`
- `npm run build`

Bir komut depoda gerçekten yoksa sahte başarı üretme; `skipped` + gerekçe yaz. İlgisiz başlangıç hatasını gizleme veya bu faz adına gereksiz düzeltme. Build'in mevcut 500 KiB chunk uyarısı sürüyorsa hata gibi sunma; yeni değişiklik belirgin regresyon yaratmışsa ölç.

## 19. Dokümantasyon ve kabul kanıtı

En az şu çıktıları oluştur/güncelle:

- `docs/ai-koc/FAZ_3_ICERIK_KAYIT_MIMARISI.md`
- `docs/ai-koc/MIMARI_KARARLAR.md`
- `docs/ai-koc/VERI_AKISLARI.md`
- `docs/ai-koc/VERI_KAYNAKLARI_MATRISI.md`
- `docs/ai-koc/KAYNAK_KAYIT_DEFTERI.md`
- gerekirse `docs/ai-koc/KONU_KIMLIGI_SOZLESMESI.md`
- gerekirse `docs/ai-koc/OGRENME_KANITI_SOZLESMESI.md`
- `docs/ai-koc/GERIYE_DOLDURMA_SOZLESMESI.md`
- `docs/ai-koc/FAZ_DURUMU.md`
- `docs/ai-koc/README.md`
- `docs/ai-koc/kanitlar/faz-3/icerik-envanteri.json`
- `docs/ai-koc/kanitlar/faz-3/manifest-parity.json`
- `docs/ai-koc/kanitlar/faz-3/migration-sema-ozeti.json`
- `docs/ai-koc/kanitlar/faz-3/kaynak-kapsami.json`
- `docs/ai-koc/kanitlar/faz-3/backfill-dry-run.json`
- `docs/ai-koc/kanitlar/faz-3/guvenlik-testleri.log`
- `docs/ai-koc/kanitlar/faz-3/regresyon-testleri.log`
- `docs/ai-koc/kanitlar/faz-3/build.log`
- `docs/ai-koc/kanitlar/faz-3/gorsel-dogrulama.md`
- `docs/ai-koc/kanitlar/faz-3/faz-3-kabul-sonucu.json`.

Gerçek ekran görüntüsü kullanıldıysa kişisel veri içermeyen dosyaları `docs/ai-koc/kanitlar/faz-3/ekranlar/` altında tutabilirsin. Gereksiz binary ekleme.

### 19.1. MIMARI_KARARLAR güncellemesi

En az şu kararları sonuçlandır:

- K03: paketli içerik ID/revision/hash ve alias modeli;
- K04: Phase 3 action/attempt/question idempotency ve conflict davranışı;
- K05: answer correction, reset tombstone ve content revision semantiği;
- K06: atlas local ownership/import kararı; dil kolunun Faz 5'te kaldığı;
- K07: her M15–M26 kaynağının backfill/no-history kararı;
- K09: içerik hedefi/opaque locator hazırlığı;
- K12: capability/health ve migration yokken kontrollü bozulma;
- tek yetkili soru girişim tablosu seçimi;
- server-side scoring ve answer-key görünürlüğü sınırı;
- M13/M18/M25 dışlama gerekçeleri.

Her karar için seçilen yol, depo kanıtı, reddedilen alternatif ve sonraki faz etkisi yaz.

### 19.2. Kaynak kapsam raporu

`kaynak-kapsami.json` M13–M26 için bir satır taşımalı:

- matrix ID ve source code;
- classification;
- expected semantic events;
- implemented source writer/reader;
- transaction boundary;
- content identity/revision source;
- topic mapping state;
- retry/idempotency strategy;
- correction/tombstone strategy;
- backfill provider/explicit no-history;
- RLS test sonucu;
- end-to-end test sonucu;
- `local_implementation_status`;
- `live_status`.

`live_status` bu fazda `not_applied` kalmalıdır. Yerel test geçti diye `live_connected` yazma. Kaynak registry'deki `decided_not_connected` alanı değiştirilecekse sürümlü anlamını açıkla; canlıya uygulanmamış kaynağı yanlış biçimde connected gösterme.

### 19.3. Faz 3 kabul JSON'u

`faz-3-kabul-sonucu.json` en az şunları gerçek çıktılardan içermeli:

- schema version ve üretim zamanı;
- workspace, branch ve git HEAD;
- başlangıç/preexisting değişiklikler ve korunup korunmadığı;
- Faz 1/Faz 2 ön koşul testleri;
- sözleşme/registry/adaptör sürümleri;
- Faz 2 migration checksum doğrulaması;
- Faz 3 migration adı/checksum;
- oluşturulan/değiştirilen tablo, view, function, policy, index, constraint sayıları/adları;
- content census ve manifest checksum;
- structured/bundled lesson coverage;
- DB/bundled question set coverage;
- atlas/task/question coverage;
- her M13–M26 kaynağının local/live durumu;
- event sınıfı dağılımı;
- idempotency 2/10/concurrency sonuçları;
- gerçek concurrency aracının sınırı;
- server-side scoring sahtecilik testleri;
- RLS ve başka öğrenci izolasyonu;
- answer correction/tombstone/replay sonuçları;
- local atlas ownership/import sonuçları;
- backfill dry-run sayımları;
- health dört durum testi;
- performans ortam ve özet sonucu;
- P3-S01–P3-S07 sonuçları;
- çalıştırılan her komut, exit code, süre ve log yolu;
- görsel doğrulama viewport/ekran sonucu;
- atlanan testler ve gerçek gerekçeleri;
- canlı Supabase read/write/schema yapılmadığı;
- gerçek öğrenci verisi/backfill/seed yapılmadığı;
- model çağrısı/ücretli servis/yayın yapılmadığı;
- Faz 4 ve Faz 6 için açık arabirimler;
- kalan gerçek sınırlar.

Kanıtlanmayan alanı `passed` yapma. Kodda fonksiyon adı bulunmasını end-to-end bağlantı kabul etme.

### 19.4. Faz durumu

Bütün yerel kabul kapıları geçerse Faz 3 satırını yalnız şu duruma getir:

`Yerel olarak tamamlandı, canlı onay bekliyor`

Aynı dosyada bunun anlamını açıkla:

- Faz 3 migration ve kaynak bağlantıları geçici yerel PostgreSQL/fixture üzerinde doğrulandı;
- M13–M26 kaynak kapsamı yerel kabul kanıtıyla tamamlandı;
- canlı şemaya migration/seed/backfill uygulanmadı;
- gerçek öğrenci verisi okunmadı/değiştirilmedi;
- Faz 4 yerel kaynak bağlantısı ve Faz 6 öğrenci modeli geliştirmesi başlayabilir;
- üretim kullanımı Faz 9/10 ve açık kullanıcı onayını bekler.

Kapılardan biri geçmediyse `Devam ediyor` yaz. Canlıya uygulanmadığı için yalnız başına `Bloke` yazma; bu beklenen durumdur.

## 20. Beklenen kod teslimi

Dosya adları gerçek mimariye göre şekillense de teslimde şu sınıflar bulunmalıdır:

- idempotent Faz 3 migration'ı;
- deterministik content manifest/census üreticisi;
- DB ve paketli içerik revision/hash katmanı;
- açık source-content → canonical topic mapping yapısı;
- kaynak-özel güvenli RPC/transaction sarmalayıcıları;
- yapılandırılmış ve paketli ders event/progress bağlantısı;
- not/PDF open exposure bağlantısı;
- tek yetkili soru attempt/answer/finalization katmanı;
- refresh-safe soru çözme/sonuç UI'ı;
- Fizik/Biyoloji/Coğrafya cloud progress + explicit local ownership import;
- Kimya ve Geometri stable assessment identity/attempt/server scoring;
- kullanıcı kapsamlı pending action/outbox ve retry katmanı;
- correction/tombstone/reset davranışı;
- source-specific backfill provider/explicit no-history kayıtları;
- health/capability katmanı;
- Phase 3 otomatik test komutu ve gerçek testler;
- mimari, karar ve kabul kanıtları.

Dosya sayısını artırmak amaç değildir. Ortak davranışı paylaş, fakat source-specific güven sınırlarını tek genel “event yaz” uçta eritme.

## 21. Kabul kapıları

Faz 3 yalnız aşağıdakilerin tamamı kanıtlanırsa yerel olarak bitmiş sayılır:

1. Faz 1 ve Faz 2 kabul testleri geçiyor, Faz 2 checksum'u korunuyor.
2. Faz 3 migration'ı temiz kurulumda ve ikinci uygulamada geçiyor.
3. M13–M26'nın her biri için çalışan bağlantı veya sözleşmeye uygun explicit dışlama/no-history kararı var.
4. M13 katalog gezinmesi common evidence üretmiyor.
5. M14 bütün bağlı içerikler için stable identity, revision/hash ve topic mapping/karantina sağlıyor.
6. M15 structured lesson gerçek isteği başlatıyor; source event ve evidence aynı transaction'da.
7. M16 bütün paketli dersleri kapsıyor; DB UUID'ye zorlamıyor.
8. Structured ve bundled dersler aynı semantic/evidence class anlamını üretiyor.
9. Ders açma başarı, ders tamamlama direct measurement sayılmıyor.
10. Ders quiz/ÖSYM correctness'i server tarafından pinned revision'dan türetiliyor.
11. Ders progress yenilemede korunuyor; sözleşmesiz section/resume event üretilmiyor.
12. M17 yalnız gerçek viewer/lightbox açılışında exposure üretiyor.
13. PDF açılışı öğrenme/tamamlama/ustalık sayılmıyor.
14. DB ve paketli soru setleri tek attempt lifecycle kullanıyor.
15. Soru cevapları yenileme, ağ hatası ve retry'da kaybolmuyor/çoğalmıyor.
16. Her soru attempt+question kapsamında benzersiz; adaptör çakışması giderilmiş.
17. Correct/wrong/blank/total/accuracy istemciden değil server/catalog'dan türetiliyor.
18. Finalizasyon source attempt + `test_completed` kanıtını atomik oluşturuyor.
19. Sonuç ekranı refresh sonrası server attempt'ten açılıyor.
20. Answer change correction, reset tombstone ile effective sonucu doğru geri alıyor.
21. İçerik revision değişimi geçmiş sonucu yeniden puanlamıyor.
22. M21 Fizik yalnız explicit task/concept snapshot üretiyor; tema/favori/rozet/kamera üretmiyor.
23. M22 Biyoloji yalnız doğrulanmış görev+kontrol state'i üretiyor; local ustalığı direct measurement yapmıyor.
24. M23 Coğrafya task state ile server-scored timed test sınıfını ayırıyor; eski aggregate'ı direct yapmıyor.
25. M24 Kimya stable question/revision/attempt ve server scoring ile çalışıyor.
26. M25 tarih gezinmesi sıfır evidence ile negatif testten geçiyor.
27. M26 Geometri stable question/revision/attempt ve server scoring ile çalışıyor.
28. Atlas eski local data hiçbir hesaba sessiz bağlanmıyor.
29. Explicit atlas import aynı snapshot retry'ında çoğalmıyor ve başka hesaba sızmıyor.
30. Excluded local alanlar common evidence'a girmiyor.
31. Outbox kullanıcı kapsamlı; account switch cross-user gönderim yapmıyor.
32. Same action 2, 10 ve mevcut aracın desteklediği concurrency testinde tek kabul ediliyor; araç sınırı dürüst raporlanıyor.
33. Same action farklı payload conflict oluyor.
34. Normal roller common ledger/private ingest/trusted source DML yapamıyor.
35. Başka öğrencinin event/attempt/progress/import verisine erişim yok.
36. Ambiguous/unmatched konu zorla eşlenmiyor; karantinaya gidiyor.
37. Correction/tombstone effective view ve replay checksum'u deterministik.
38. Backfill dry-run yazmıyor; gerçek historical veri uydurmuyor.
39. `available`, `empty`, `unavailable`, `degraded` farkı testli.
40. Migration yokken ürün kontrollü bozuluyor ve yanlış “kaydedildi” demiyor.
41. Ders, soru kütüphanesi ve atlas temel ürün akışları regresyonsuz.
42. Masaüstü ve telefon görsel/etkileşim doğrulaması geçti.
43. Build ve zorunlu regresyon komutları geçti veya gerçek skipped/failure raporlandı.
44. AI Koç tüketimi, ustalık modeli, diller, Faz 4 kaynakları ve yayın bu faza taşmadı.
45. Canlı Supabase, gerçek öğrenci verisi, gerçek backfill, seed, ücretli servis ve yayın değişmedi.
46. Kabul JSON'u gerçek komut çıktılarından üretildi; kanıtlanmayan hiçbir kapı passed değil.

## 22. Durma koşulları

Aşağıdakilerden biri olursa kapsamı genişletip tahminle ilerleme:

- Faz 1/Faz 2 testi veya Faz 2 migration checksum'u başarısız;
- güvenli çözüm canlı veriyi okumayı veya değiştirmeyi gerektiriyor;
- mevcut canlı satırı silmeden migration tasarlanamıyor;
- source field + evidence atomikliği yalnız genel `service_role` bypass ile mümkün görünüyor;
- paketli içerik için deterministik stable ID/revision üretilemiyor;
- answer correctness server/catalog tarafından doğrulanamıyor;
- atlas local snapshot sahibini otomatik varsaymak gerekiyor;
- sözleşme değişikliği geriye uyumlu sürümlenemiyor;
- temel teknoloji veya ücretli servis değişikliği gerekiyor;
- ilgisiz kullanıcı değişikliğiyle kaçınılmaz dosya çakışması var.

Bu durumda güvenli tamamlanan işi koru, `FAZ_DURUMU.md` içinde doğru durum bırak ve kullanıcıya tek somut engeli bildir. “Çoğu çalışıyor” diyerek acceptance kapısını düşürme.

## 23. Faz sonu rapor biçimi

Kullanıcıya kısa ve düz Türkçeyle yalnız şunları bildir:

- hangi ders/soru/atlas kaynaklarının yerel olarak bağlandığı;
- stable content/attempt ve server scoring sonucunun özeti;
- atlas sahiplik aktarımının nasıl çözüldüğü;
- migration, RLS, idempotency, correction/tombstone ve refresh test sonucu;
- toplam geçen/başarısız/atlanan komut;
- kabul kanıtı ve ana mimari dosyalarının yolu;
- canlı veritabanı/yayın yapılmadığı;
- Faz 4 ve Faz 6'ya geçilip geçilemeyeceği;
- varsa tek gerçek açık sınır.

Kod dökümü, uzun süreç anlatısı veya kanıtlanmamış “eksiksiz çalışıyor” ifadesi verme.
