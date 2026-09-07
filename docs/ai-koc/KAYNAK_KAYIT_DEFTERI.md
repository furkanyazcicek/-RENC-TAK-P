# Kaynak kayıt defteri — Faz 1

Tarih: 7 Eylül 2026  
Sürüm: `learning-source-registry@1`  
Makine kaynağı: `src/lib/learning/sourceRegistry.js`

Bu belge Faz 0 veri kaynakları matrisindeki M01–M38 yüzeylerinin Faz 1 kararlarını insan-okunur biçimde özetler. Tam ve çalıştırılabilir alanlar makine kaynağındadır; bu tablo ürünün bugün olay yazmaya başladığı anlamına gelmez. Bütün bağlantılar `decided_not_connected` durumundadır.

## Sınıflandırma sözlüğü

| Sınıf | Anlam |
|---|---|
| `emitter` | Kaynak anlamı yeterince açık; sonraki fazda sözleşmeye uygun kanıt üretebilir |
| `conditional_emitter` | Ancak yazılı koşullar, kullanıcı bağı, içerik sürümü veya dar izinle kanıt üretebilir |
| `catalog` | Kimlik/eşleme bağlamı sağlar; öğrenci öğrenme olayı üretmez |
| `derived_readonly` | Kaynak kanıtlarını okur/özetler; yeni temel kanıt değildir |
| `excluded` | Ham/özel/operasyonel veya öğrenme dışı yüzey; kanıt ağına alınmaz |

Her matris satırı tam bir ve yalnız bir sınıfa sahiptir. Faz 1 sayımı: 3 `emitter`, 22 `conditional_emitter`, 2 `catalog`, 5 `derived_readonly`, 6 `excluded`.

## Tam M01–M38 sicili

| Matris | Kaynak kodu | Sınıf | Kayıt türleri | Kimlik kapsamı | Varsayılan kanıt | Adaptör | Hedef fazlar |
|---|---|---|---|---|---|---|---|
| M01 | `home_summary` | `derived_readonly` | derived | `curriculum` | `derived_result` | `—` | 4,6,7 |
| M02 | `analytics_view` | `derived_readonly` | derived | `curriculum` | `derived_result` | `—` | 4,6 |
| M03 | `daily_logs` | `emitter` | event, correction, tombstone | `curriculum` | `student_self_report` | `adaptDailyLog` | 1,2,4 |
| M04 | `mock_exam_subjects` | `emitter` | event, correction, tombstone | `curriculum` | `student_self_report` | `adaptMockExamSubject` | 1,2,4 |
| M05 | `branch_exams` | `emitter` | event, correction, tombstone | `curriculum` | `student_self_report` | `adaptBranchExam` | 1,2,4 |
| M06 | `homeworks` | `conditional_emitter` | event, snapshot, correction, tombstone | `curriculum` | `student_self_report` | `adaptHomework` | 2,4,8 |
| M07 | `questions_teacher_feedback` | `conditional_emitter` | event, snapshot, correction | `curriculum` | `teacher_feedback` | `adaptTeacherQuestionFeedback` | 1,2,4 |
| M08 | `ai_coach_chat` | `derived_readonly` | derived | `curriculum` | `model_inference` | `—` | 6,7 |
| M09 | `ai_coach_actions` | `conditional_emitter` | event, snapshot, correction | `curriculum` | `student_self_report` | `adaptCoachAction` | 1,2,8 |
| M10 | `daily_briefing` | `derived_readonly` | derived | `curriculum` | `derived_result` | `—` | 6,7,8 |
| M11 | `ai_solution_sessions` | `conditional_emitter` | event, snapshot, correction | `curriculum` | `system_observation` | `adaptAiSolveEvent` | 1,2,4,7 |
| M12 | `ai_solution_review` | `conditional_emitter` | snapshot, correction | `curriculum` | `student_self_report` | `adaptAiSolveReview` | 2,4 |
| M13 | `library_gateway` | `catalog` | — | `curriculum` | `operational_only` | `—` | 1 |
| M14 | `library_catalog` | `catalog` | — | `curriculum` | `operational_only` | `—` | 1,3 |
| M15 | `structured_lesson_activity` | `conditional_emitter` | event, correction, tombstone | `curriculum` | `system_observation` | `adaptStructuredLessonEvent` | 1,2,3 |
| M16 | `bundled_lesson_activity` | `conditional_emitter` | event, correction, tombstone | `curriculum` | `system_observation` | `adaptBundledLessonEvent` | 1,2,3 |
| M17 | `library_note_exposure` | `conditional_emitter` | event | `curriculum` | `exposure` | `adaptContentExposure` | 1,3 |
| M18 | `lesson_personalization` | `derived_readonly` | derived | `curriculum` | `derived_result` | `—` | 1,3,6 |
| M19 | `db_question_test` | `conditional_emitter` | event, snapshot, correction, tombstone | `curriculum` | `direct_measurement` | `adaptQuestionTestResult` | 1,2,3 |
| M20 | `bundled_question_test` | `conditional_emitter` | event, snapshot, correction, tombstone | `curriculum` | `direct_measurement` | `adaptQuestionTestResult` | 1,2,3 |
| M21 | `physics_atlas` | `conditional_emitter` | snapshot, correction, tombstone | `atlas` | `system_observation` | `adaptAtlasSnapshot` | 1,2,3 |
| M22 | `biology_atlas` | `conditional_emitter` | snapshot, correction, tombstone | `atlas` | `system_observation` | `adaptAtlasSnapshot` | 1,2,3 |
| M23 | `geography_atlas` | `conditional_emitter` | event, snapshot, correction, tombstone | `atlas` | `system_observation` | `adaptAtlasSnapshot` | 1,2,3 |
| M24 | `chemistry_atlas` | `conditional_emitter` | event, snapshot | `atlas` | `direct_measurement` | `adaptAtlasSnapshot` | 1,2,3 |
| M25 | `history_atlas_navigation` | `excluded` | — | `non_learning` | `operational_only` | `—` | 1,3 |
| M26 | `geometry_pilot` | `conditional_emitter` | event, snapshot | `curriculum` | `direct_measurement` | `adaptQuestionTestResult` | 1,2,3 |
| M27 | `ingilizce_learning` | `conditional_emitter` | event, snapshot, correction, tombstone | `language` | `system_observation` | `adaptLanguageSnapshot` | 1,2,5 |
| M28 | `almanca_learning` | `conditional_emitter` | event, snapshot, correction, tombstone | `language` | `system_observation` | `adaptLanguageSnapshot` | 1,2,5 |
| M29 | `fransizca_learning` | `conditional_emitter` | event, snapshot, correction, tombstone | `language` | `system_observation` | `adaptLanguageSnapshot` | 1,2,5 |
| M30 | `ispanyolca_learning` | `conditional_emitter` | event, snapshot, correction, tombstone | `language` | `system_observation` | `adaptLanguageSnapshot` | 1,2,5 |
| M31 | `live_lesson_attendance` | `conditional_emitter` | event, snapshot, correction | `curriculum` | `exposure` | `adaptLiveLessonAttendance` | 1,4 |
| M32 | `live_lesson_raw_stream` | `excluded` | — | `non_learning` | `operational_only` | `—` | 1,4,9 |
| M33 | `live_lesson_shared_summary` | `conditional_emitter` | snapshot, correction, tombstone | `curriculum` | `teacher_feedback` | `adaptSharedLessonSummary` | 1,2,4 |
| M34 | `notebook_content` | `excluded` | — | `non_learning` | `operational_only` | `—` | 1,9 |
| M35 | `private_messages` | `excluded` | — | `non_learning` | `operational_only` | `—` | 1,9 |
| M36 | `student_profile` | `conditional_emitter` | snapshot, correction | `context_only` | `student_self_report` | `adaptProfileSnapshot` | 1,2,4 |
| M37 | `public_demo_routes` | `excluded` | — | `non_learning` | `operational_only` | `—` | 1 |
| M38 | `teacher_parent_support_routes` | `excluded` | — | `non_learning` | `operational_only` | `—` | 4,9 |

## Makine kaydında zorunlu alanlar

Her hesaplanmış kaynak kaydı şu alanların tamamını taşır:

- `matrix_id`, `source_code`, `classification`, `data_class`, `module_owner`, `authority`, `authoritative_source`;
- `source_record_key`, `source_revision_rule`, `record_kinds`, `semantic_event_types`, `evidence_class_by_event`, `excluded_semantic_types`;
- `resolver`, `resolver_version`, `adapter`, `adapter_version`, `identity_scope`, `default_evidence_class`;
- `trust_authority`, `actor_student_relation`, `mutation_semantics`;
- `allowed_measurements`, `allowed_metadata`, `source_locator`, `retention_class`;
- `target_phase`, `contract_version`, `decision_status`, `routes`, `conditions`, `notes`.

Bu alanlardan biri eksilirse otomatik kabul testi başarısız olur. Kaynak adaptörü adı bulunan her kaydın `SOURCE_ADAPTERS` içinde çalışan saf fonksiyonu bulunmalıdır.

## Rota kapsamı

- `APP_ROUTE_SOURCE_MAP`, `src/App.jsx` içindeki 62/62 rota kalıbını kapsar. Bir rota birden çok gerçek kaynağı birleştiriyorsa tüm M kodları ayrı listelenir.
- Dört dil sarmalayıcısının her biri index dâhil 15 iç rota taşır; toplam 60 dil alt rotası ayrıca makine kaydına bağlıdır.
- Rota sayısı yalnız sabit `62` karşılaştırmasıyla değil, güncel `App.jsx` dosyasından dinamik çıkarılan kümenin kayıt defteriyle eşitliğiyle denetlenir.
- Yeni rota veya dil alt rotası eklenirse, sınıflandırması yapılmadan Faz 1 testi geçmez.

## Kritik kaynak kararları

- M03–M05 öğrenci beyanını korur; genel/branş netinde sınav türü ve /3–/4 formülü açık olmalıdır. Geçersiz sayaçlar adaptörde sessizce sıfırlanmaz, karantinaya gider.
- M06 ödev atamasını öğretmen kaynaklı ölçümsüz olay, durum değişikliğini öğrenci beyanı snapshot'ı olarak ayırır; ikisi de konu başarısı değildir.
- M07'de soru yükleme veya “çözüldü” durumu öğrenci doğruluğu değildir. Yalnız yetkili, öğrenciyle paylaşılabilir öğretmen geri bildirimi dar nitel kanıttır.
- M09'da onaylanmış çalışma durumu öğrenci beyanı olarak kalır; plan oluşturma başarı değildir ve tercih güncellemesi `operational_only` olarak konu performansına katılmaz.
- M11'de model çözümü ve yardım isteme `exposure`/yardım kanıtıdır; `topic_matched=false` konuya bağlanmaz.
- M15'in ürün olay insert'i bugün başlamamaktadır ve `osym_simulation_answered` mevcut SQL CHECK listesiyle uyumsuzdur. Faz 1 bu hatayı düzeltmez veya olay toplamaya başlamaz.
- M19–M20 için `student_question_set_attempts`, `student_topic_test_progress` ve `student_test_answers` şemaları vardır ama ürün UI/API akışında okunup yazılmaz. Şema varlığı kalıcı sonuç kanıtı sayılmaz.
- M21–M24 atlas kimlikleri kendi ad alanında kalır. Kimyada içerik sürümü ve deneme kimliği olmadan kalıcı olay üretilemez.
- M27–M30 cihaz yerel snapshot'ıdır. Buluta geçişte sahipliği belirsiz veri sessizce hesaba bağlanamaz; seviye tespit sonucu resmî yeterlilik değildir. Ders, tekrar/hata izleri, yazma taslakları, `kartDesteleri` ve `kartFavorileri` kayıpsız ele alınır; kart favorisi, model sesi ve telaffuz blobu `excluded_semantic_types` içinde kanıt dışıdır.
- M25 tarih atlası gezinmesi, M32 canlı ders ham akışı, M34 defter, M35 özel mesajlar ve M37 demo/önizleme öğrenme kanıtı değildir.
- M33 yalnız öğrenciyle paylaşılmış özet/geri bildirim için koşullu kaynaktır; `lesson_private_notes` ve ham ders akışı dışarıda kalır.
- M38 yeni kanıt üretmez. Öğretmenin yetkili alan düzeltmeleri kendi M03–M07 kaynağında izlenir.

## Saklama ve bağlantı sınırı

Faz 1 her kaynak için `retention_class` alanını zorunlu kılar ancak yasal/ürün saklama sürelerini uydurmaz. Kesin süreler, hesap silme zinciri ve medya temizliği Faz 9'da politika ve uygulama birlikte doğrulanarak belirlenecektir.

Kaynak bağlantısı yalnız opak iç başvurudur. Kayıt defteri genel URL, doğrudan kaynak UUID'si, ham içerik veya başka öğrenci kimliği üretmez. Sonraki fazda opak başvuruyu çözmek için doğrulanmış oturum, sahiplik/RLS ve kaynağın güncel/silinmiş durum denetimi gerekir.

## Faz 1'in yapmadıkları

- Kalıcı öğrenme olayı tablosu veya migration oluşturulmadı.
- Ürün ekranlarının işleyicileri adaptörlere bağlanmadı.
- Yerel dil/atlas verisi buluta aktarılmadı.
- Ders olay insert kusuru ve soru sonuç yazısı bu fazda düzeltilmedi.
- Canlı veritabanı, gerçek hesap, ücretli model veya yayın kullanılmadı.

Kabul komutu: `npm run test:ai-koc-faz-1`.
