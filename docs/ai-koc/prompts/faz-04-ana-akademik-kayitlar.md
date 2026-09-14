# Codex Uygulama İstemi — Faz 4: Ana Akademik Kayıtların Güvenli Veri Ağı

Sürüm: Faz 3 sonrası depo-özel yürütme istemi 4.0

Ön koşul: Faz 2 ve Faz 3 yerel kabul kapıları eksiksiz geçti

Çalışma alanı: /Users/furkantalhayazcicek/Desktop/DRKOÇ

## Görevin

DRKOÇ içindeki ana akademik kayıtları Faz 2 öğrenme kanıtı ağına güvenli, atomik, tekrar güvenli ve anlamı doğru biçimde bağla.

Bu fazın ana kaynakları:

- günlük çalışma kayıtları;
- genel denemeler ve ders sonuçları;
- branş denemeleri;
- öğretmen ödevleri ve öğrenci durum bildirimi;
- öğrencinin öğretmene gönderdiği sorunlu sorular;
- öğretmenin öğrenciye doğrudan gönderdiği sorunlu sorular;
- öğretmenin paylaştığı soru geri bildirimi;
- AI Soru Çöz oturumları, yardım olayları, model kontrolü, öğrenci öz bildirimi ve tekrar durumu;
- canlı ders öğrenci katılımı;
- öğrenciyle paylaşılmış canlı ders özeti ve öğrencinin ders sonu geri bildirimi;
- öğrencinin sınav/sınıf hedef profili.

Alan tabloları ürün gerçeği olarak çalışmaya devam etmelidir. Ortak kanıt ağı ikinci ve çelişen bir gerçeklik değildir. Her ortak kanıt, yetkili kaynak kaydına geri bağlanmalı; kaynak olmadan hayalet kanıt, kanıt olmadan başarılı sayılmış kaynak mutasyonu oluşmamalıdır.

Bu fazın sonunda:

- M03–M07, M11–M12, M31, M33 ve M36 için çalışan kaynak bağlantısı bulunmalı;
- M01, M02, M32 ve M38'in yeni temel öğrenme kanıtı üretmediği negatif testlerle doğrulanmalı;
- öğrenci beyanı, öğretmen geri bildirimi, sistem gözlemi, maruziyet ve model çıkarımı birbirine karışmamalı;
- bütün yeni ürün yazıları kaynak-özel güvenli RPC veya eşdeğer dar sunucu sınırından geçmeli;
- kaynak kaydı, işlem fişi, revizyon ve ortak kanıt aynı PostgreSQL transaction'ında yazılmalı;
- düzenleme etkin kanıtta correction, silme/geri çekme sözleşmenin izin verdiği yerde tombstone üretmeli;
- genel deneme üst kaydı ve bütün ders satırları tek transaction olmalı;
- AI Soru Çöz model alanlarını öğrenci tarayıcısı doğrudan yazamamalı;
- canlı ders katılımı yeniden denemede süreyi iki kez artırmamalı;
- öğrenciyle paylaşılmamış ders özeti veya özel öğretmen notu ortak ağa girmemeli;
- öğretmenin öğrenciye doğrudan sorunlu soru gönderme akışı gerçek ürün, veri, yetki ve kanıt katmanlarıyla çalışmalı;
- eski kayıtlar için neyin bilindiği ve neyin bilinmediği uydurulmadan kayıt altına alınmalı;
- Faz 6 ve Faz 7'nin güvenle kullanabileceği veri hazır olmalı;
- bu fazda öğrenci ustalık modeli veya AI Koç yorumu oluşturulmamalıdır.

Birer örnek bağlamak yeterli değildir. Faz 4 kapsamındaki her kaynak için kod, SQL, yetki, geriye doldurma kararı, sağlık durumu ve makine üretimli kabul kanıtı bulunmalıdır.

## Değişmez kapsam

### Bağlanacak kaynaklar

| Modül | Kaynak | Faz 4 kararı |
|---|---|---|
| M03 | daily_logs | Bağlanacak |
| M04 | mock_exam_subjects ve mock_exams oturum bağlamı | Bağlanacak |
| M05 | branch_exams, gerçek tablo adı exams | Bağlanacak |
| M06 | homeworks | Bağlanacak |
| M07 | questions_teacher_feedback | Bağlanacak ve öğretmen→öğrenci eksik akışı tamamlanacak |
| M11 | ai_solution_sessions ve ai_solution_events | Bağlanacak |
| M12 | ai_solution_review | Bağlanacak |
| M31 | live_lesson_attendance | Bağlanacak |
| M33 | live_lesson_shared_summary | Bağlanacak |
| M36 | student_profile | Yalnız context_only snapshot olarak bağlanacak |

### Yeni temel kanıt üretmeyecek kaynaklar

| Modül | Kaynak | Zorunlu karar |
|---|---|---|
| M01 | home_summary | Türetilmiş görünüm; sıfır yeni temel kanıt |
| M02 | analytics_view | Türetilmiş görünüm; grafiğe bakmak kanıt değil |
| M32 | live_lesson_raw_stream | Ham tahta, mesaj, ses, görüntü ve çizim kesin dışarıda |
| M38 | teacher_parent_support_routes | Yüzey kendi başına kanıt üretmez; yalnız yetkili M03–M07 mutasyonlarını çağırır |

### Bu fazın kapsamı değildir

- M08 AI Koç sohbet metnini öğrenme kanıtına çevirmek;
- M09 AI Koç planı, ai_study_tasks, tercih veya kapalı döngü eylemlerini bağlamak; bunlar Faz 8'dir;
- M10 günlük brifing üretmek;
- dilleri buluta taşımak; bu Faz 5'tir;
- konu ustalığı, kalıcılık, unutma, hazırbulunuşluk, zayıflık veya risk puanı hesaplamak; bu Faz 6'dır;
- AI Koç bağlamını veya sistem istemini yeni ağı okuyacak biçimde değiştirmek; bu Faz 7'dir;
- öneri, plan, otomatik görev veya kullanıcı onaylı eylem döngüsü kurmak; bu Faz 8'dir;
- canlı güvenlik/pilot sertifikasyonu ve gerçek çok bağlantılı yarış kanıtı; bu Faz 9'dur;
- canlı migration, gerçek geriye doldurma, seed, yayın veya üretim açılışı; bu Faz 10 ve açık kullanıcı onayı gerektirir.

AI Koç üzerinden kullanıcı onayıyla yazılan bir günlük çalışma kaydı M03 kaydıdır. Aynı işlem için M09 kanıtı üretme. M09 plan/görev bağlantısını bu faza çekme.

Bu fazda api/_lib/context.js, AI Koç sistem istemleri, readiness hesapları veya öğrenci modelini yeni ortak kayıtları tüketecek biçimde değiştirme. Yalnız mevcut akışların regresyonunu koru.

## Değişmez çalışma kuralları

- Önce gerçek depoyu oku. Tablo, kolon, rota, rol, migration sırası, storage politikası veya test komutu varsayma.
- AGENTS.md içindeki öğrenci verisi, tek yayın kaynağı ve ilgisiz değişiklikleri koruma kurallarına uy.
- Başlangıçta git status --short ve ilgili git diff çıktısını kaydet.
- Faz 3'ten kalan kullanıcı değişikliklerini geri alma, yeniden biçimlendirme veya kendi işinmiş gibi sahiplenme.
- Mevcut Faz 1 sözleşmesini ve Faz 2 defterini kopyalayıp ikinci ortak kanıt sistemi kurma.
- learning_private.ingest_evidence tek ortak defter alım sınırı olarak kalmalıdır.
- Normal kullanıcıya tam LearningEvidence JSON'u alan genel bir RPC veya API açma.
- learning_private.ingest_evidence fonksiyonunu anon veya authenticated role açma.
- Tarayıcıdan student_id, actor_id, actor_role, evidence_class, evidence_strength, canonical topic kimliği, source_revision, recorded_at, target_record_id veya güven kararı kabul etme.
- Kaynak kaydı ile kanıtı iki bağımsız istemci isteği olarak yazma.
- UI düğme kilidini idempotency sanma; veritabanı benzersizliği ve payload çatışma kontrolü zorunludur.
- Faz 3 learning_content_action_receipts tablosunu veya CONTENT_ACTIONS allowlist'ini Faz 4 için gevşetme.
- Faz 3'ün doğru/yanlış değerlerini sunucu içerik anahtarından türeten güvenlik sınırını öğrenci beyanı kabul edecek biçimde değiştirme.
- Faz 4 için ayrı akademik işlem fişi, ayrı kaynak-özel RPC ve ayrı kullanıcı kapsamlı outbox kullan.
- learning_content_revisions ile manuel günlük, deneme, ödev veya soru kaydını zorla içerik kimliğine bağlama.
- student_question_set_attempts M19/M20/M23/M24/M26'nın otoritesidir; manuel denemelerin veya ödevlerin tablosu yapılmamalıdır.
- Serbest başlık, açıklama, not, soru metni, öğretmen cevabı, model cevabı, dosya URL'si veya görsel yolu ortak metadata'ya kopyalama.
- Benzer tarih, başlık, ders veya sayılara bakarak farklı kaynak kayıtlarını otomatik birleştirme.
- Kaynaklar arası ilişki yalnız doğrulanmış açık bir ilişki kimliği varsa kurulmalıdır.
- Genel deneme ile branş denemesini isim/tarih/net benzerliğine bakarak otomatik tek kayıt yapma.
- Eski alan verisini sırf yeni sözleşmeye uysun diye sessizce değiştirme.
- Konu çözümlenemiyorsa genel ders/kapsam düzeyinde bırak veya karantinaya al; konu uydurma.
- Bir öğretmenin rolü tek başına bütün öğrencilere yazma yetkisi vermemelidir; aktif öğretmen–öğrenci ilişkisi sunucuda doğrulanmalıdır.
- Veli hiçbir yazma yolu edinmemeli ve hassas soru/AI Soru Çöz/canlı ders ayrıntısına erişmemelidir.
- Canlı veriyi okuma veya değiştirme.
- Gerçek öğrenci verisi üzerinde backfill çalıştırma.
- Ücretli model çağrısı yapma; AI Soru Çöz kabul testlerinde deterministik stub kullan.
- Yayın yapma, Vercel komutu çalıştırma veya Git push yapma.
- Bütün yerel kabul kapıları geçmeden Faz 4'ü tamamlandı sayma.

## Zorunlu okumalar

Aşağıdaki dosyaların tamamını oku:

- AGENTS.md
- CLAUDE.md
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- docs/ai-koc/MEVCUT_DURUM_ENVANTERI.md
- docs/ai-koc/VERI_KAYNAKLARI_MATRISI.md
- docs/ai-koc/VERI_AKISLARI.md
- docs/ai-koc/KABUL_SENARYOLARI.md
- docs/ai-koc/BAZ_CIZGISI.md
- docs/ai-koc/MIMARI_KARARLAR.md
- docs/ai-koc/KONU_KIMLIGI_SOZLESMESI.md
- docs/ai-koc/OGRENME_KANITI_SOZLESMESI.md
- docs/ai-koc/KAYNAK_KAYIT_DEFTERI.md
- docs/ai-koc/VERI_AGI_CEKIRDEK_MIMARISI.md
- docs/ai-koc/GERIYE_DOLDURMA_SOZLESMESI.md
- docs/ai-koc/FAZ_3_ICERIK_KAYIT_MIMARISI.md
- docs/ai-koc/kanitlar/faz-1/faz-1-kabul-sonucu.json
- docs/ai-koc/kanitlar/faz-2/faz-2-kabul-sonucu.json
- docs/ai-koc/kanitlar/faz-2/migration-sema-ozeti.json
- docs/ai-koc/kanitlar/faz-3/faz-3-kabul-sonucu.json
- docs/ai-koc/kanitlar/faz-3/kaynak-kapsami.json
- src/lib/learning/sourceRegistry.js
- src/lib/learning/adapters.js
- src/lib/learning/sourceFixtures.js
- src/lib/learning/evidenceContract.js
- src/lib/learning/topicResolver.js
- src/lib/learning/curriculumIdentity.js
- src/lib/learning/network/ingest.js
- src/lib/learning/network/effective.js
- src/lib/learning/network/backfill.js
- src/lib/learning/network/health.js
- src/lib/learning/network/sourceContracts.js
- api/_lib/learning/repository.js
- supabase/migration_learning_evidence_network.sql
- supabase/migration_learning_content_activity.sql
- supabase/setup_new_project.sql
- supabase/migration_parent_verification.sql
- supabase/migration_daily_logs.sql
- supabase/migration_v2.sql
- supabase/migration_branch_exam_upgrade.sql
- supabase/migration_branch_exam_type.sql
- supabase/migration_exam_duration.sql
- supabase/migration_question_taxonomy.sql
- supabase/migration_reply_image.sql
- supabase/migration_solution_canvas.sql
- supabase/migration_ai_solve.sql
- supabase/migration_ai_solve_history.sql
- supabase/migration_student_exam_profile.sql
- supabase/migration_live_lessons.sql
- src/components/DailyLogForm.jsx
- src/components/DailyLogEditModal.jsx
- src/components/DailyLogsList.jsx
- src/components/MockExamForm.jsx
- src/components/MockExamList.jsx
- src/components/AddExamForm.jsx
- src/components/BranchExamList.jsx
- src/components/HomeworkForm.jsx
- src/components/HomeworkList.jsx
- src/components/QuestionForm.jsx
- src/components/QuestionInbox.jsx
- src/components/MyQuestionsList.jsx
- src/lib/solutionReply.js
- src/pages/DailyTracking.jsx
- src/pages/MockExams.jsx
- src/pages/Homeworks.jsx
- src/pages/Questions.jsx
- src/pages/Profile.jsx
- src/components/ExamProfileFields.jsx
- src/pages/AISolve.jsx
- src/pages/AISolveHistory.jsx
- src/lib/aiSolve.js
- src/lib/aiSolveHistory.js
- api/_lib/auth.js
- api/_lib/solve/persistence.js
- api/ai-solve/solve.js
- api/ai-solve/ask.js
- api/ai-solve/check.js
- api/ai-solve/sessions.js
- src/lib/liveLesson/api.js
- src/pages/liveLesson/LessonStudio.jsx
- src/pages/liveLesson/LessonSummaryPage.jsx
- api/_lib/tools.js içindeki günlük kayıt eylemi
- ilgili bütün mevcut test betikleri
- package.json.

Bunlara ek olarak, M03–M07, M11–M12, M31, M33 ve M36 tablolarına insert, update, upsert veya delete yapan bütün src ve api çağrılarını rg ile yeniden tara. Yukarıdaki listeyi eksiksiz sanma.

Alt klasörde başka bir AGENTS.md varsa tamamen oku.

Bu faz kullanıcı arayüzü değişiklikleri içerir. UI koduna başlamadan .codex/skills/drkoc-ui-designer/SKILL.md dosyasını tamamen oku ve uygula. Beceri kapsamı veri sözleşmesini veya güvenlik sınırını genişletmez.

## Ön koşul doğrulaması

Kod yazmadan önce aşağıdakileri gerçek komut ve dosya sonuçlarıyla doğrula:

1. Çalışma klasörü tam olarak /Users/furkantalhayazcicek/Desktop/DRKOÇ.
2. Faz 2 durumu Yerel olarak tamamlandı, canlı onay bekliyor.
3. Faz 2 kabulü 24/24 ve status passed.
4. Faz 2 migration SHA-256 değeri 993437ba3bb34b5c97e14a5c6e126d482f769e65be34ca2d08d20832b47ebdea.
5. Faz 3 durumu Yerel olarak tamamlandı, canlı onay bekliyor.
6. Faz 3 kabulü 46/46 kapı, 17/17 komut ve 450 assertion ile passed.
7. Faz 3 migration SHA-256 değeri 8452d4497fc01f35eb8dc7a2c80ec029d6255c4067c548dfacfdce20009c7165.
8. Faz 3 manifest sürümü learning-content-manifest@1, checksum değeri 6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc ve kayıt sayısı 4.344.
9. npm run test:ai-koc-faz-1 başarılı.
10. npm run test:ai-koc-faz-2 başarılı.
11. npm run test:ai-koc-faz-3 başarılı.
12. Canlı Supabase'e bağlanmadan geçici yerel PostgreSQL/PGlite üzerinde test imkânı var.

Faz 4'ün resmî mimari bağı Faz 2'dir; ancak mevcut çalışma kopyasında Faz 3 doğrulanmış uyumluluk baz çizgisidir. Yeni kurulum sırası şu olmalıdır:

1. supabase/setup_new_project.sql
2. supabase/migration_parent_verification.sql
3. supabase/migration_learning_evidence_network.sql
4. supabase/migration_learning_content_activity.sql
5. yeni Faz 4 migration'ı
6. daha sonra açıkça izin verilmişse import

Faz 2 veya Faz 3 checksum'u beklenmedik biçimde değişmişse uygulamaya geçme. Değişiklik gerçekten gerekli bir önceki-faz düzeltmesiyse eski migration'ı sessizce değiştirme; gerekçeyi, geriye uyumu, yeni checksum'u ve yeniden koşulan bütün önceki kabul kanıtlarını üret. Aksi hâlde bloke raporu ver.

Faz 3'ün 110 karantinadaki değerlendirme seti ve 1.804 eşleşmemiş içerik konusu Faz 4'ün engeli değildir. Bunları bu fazda düzeltmeye çalışma.

## Doğrulanmış başlangıç gerçekleri

Aşağıdaki gerçekleri yeniden keşfetmek için bütün depoyu tekrar tekrar tarama; yalnız değişmiş olabilecek noktaları doğrula:

- Kanıt sözleşmesi learning-evidence@1, şema sürümü 1.0.
- Temel kaynak sicili learning-source-registry@1.
- Faz 2 ortak defteri learning_private.ingest_evidence üzerinden yazılır.
- Normal roller common ledger'a doğrudan insert/update/delete yapamaz.
- Faz 3 içerik sicili learning-content-registry@1 ve adaptör sürümü learning-content-adapters@1.
- Faz 3 learning_content_action_receipts yalnız içerik kaynakları ve güvenilen içerik eylemleri içindir.
- Faz 4 kaynaklarının temel sözleşme satırları hâlâ decided_not_connected durumundadır.
- Faz 4 kaynaklarının çoğu bugün doğrudan alan tablosuna yazmaktadır.
- DailyLogForm ve AI Koç log_study_session yolu daily_logs tablosuna ayrı doğrudan insert yapar.
- MockExamForm önce mock_exams, sonra mock_exam_subjects yazar; iki işlem atomik değildir.
- AddExamForm eksik şemada exam_type ve duration_minutes kolonlarını sessizce düşürebilir.
- HomeworkList öğrenciye ait satırda genel update kullanır; kolon düzeyi sınır yalnız RLS ile çözülemez.
- QuestionForm medya yükledikten sonra questions insert yapar; insert hatasında yetim dosya kalabilir.
- QuestionInbox ve solutionReply öğretmen yanıtını/status/çözüm tuvalini doğrudan update eder.
- Öğretmenin öğrenciye doğrudan sorunlu soru gönderdiği ürün akışı mevcut değildir.
- question-images kovasının mevcut yapısında açık erişim riski vardır; tablo RLS'si storage nesnesini özel yapmaz.
- AI Soru Çöz oturumu ve olayları kullanıcının JWT'siyle yazılır; mevcut RLS öğrenciye model alanlarını doğrudan yazma imkânı bırakabilir.
- recordEvent ve help_requested sayaç artırımı ayrı yazılardır.
- AI Soru Çöz check olayı ile oturumdaki student_correct/error_type güncellemesi ayrı yazılardır.
- AI Soru Çöz review yerel fallback anahtarı drkoc-ai-solve-reviews:<userId> biçimindedir.
- lesson_leave istemciden gelen saniyeyi toplam süreye ekler; aynı ayrılış retry edilirse süre artabilir.
- saveSummary teacher_id ve student_id değerlerini istemci payload'ından alır.
- lesson_summaries içinde covered_topics serbest metindir; kesin tek konu sayılmaz.
- adaptProfileSnapshot grade_level beklerken gerçek profil kolonu grade olabilir.
- mock_exams.duration_minutes sınav oturumu süresidir; her ders satırına kopyalanırsa süre katlanır.
- Veritabanındaki bazı net generated kolonları yanlış/4 uygular; ürün LGS için yanlış/3 kullanır.
- Faz 3 kabul ortamı PGlite/WASM ve seri bağlantıdır; gerçek PostgreSQL yarış testi geçti diye raporlanamaz.
- Mevcut build yaklaşık 500 kB chunk ve node:crypto tarayıcı uyumluluk uyarıları verebilir; yeni hata değilse baz çizgi olarak kaydet.

Bu hipotezlerden biri artık yanlışsa gerçek kod/test kanıtıyla düzelt ve mimari kayda yaz.

## Çalışma biçimi ve hız kuralı

Faz 4 tek kabul sonucudur; fakat uygulamayı aşağıdaki dört iç çalışma paketinde yürüt:

### Paket 4A — ortak omurga, günlük, denemeler ve profil

- akademik kaynak sicili/sözleşme izdüşümü;
- işlem fişi, revizyon/audit ve kaynak-özel RPC omurgası;
- kullanıcı kapsamlı akademik outbox;
- M03 günlük;
- M04 genel deneme;
- M05 branş denemesi;
- M36 profil bağlamı.

### Paket 4B — ödev, sorunlu soru ve medya güvenliği

- M06 ödev;
- M07 öğrenci→öğretmen soru;
- öğretmen geri bildirimi;
- eksik öğretmen→öğrenci sorunlu soru akışı;
- yeni medya yazıları için özel/staged/finalized erişim;
- öğretmen–öğrenci yetki matrisi.

### Paket 4C — AI Soru Çöz

- M11 oturum/olay bağlantısı;
- model alanları için dar sunucu güven sınırı;
- pahalı çağrı öncesi işlem claim'i;
- yardım/check/self-report/feedback ayrımı;
- M12 tekrar durumu ve kullanıcı kapsamlı yerel fallback kararı.

### Paket 4D — canlı ders, backfill, sağlık ve son kabul

- M31 katılım;
- M32 negatif dışlama;
- M33 paylaşılmış özet ve öğrenci geri bildirimi;
- M01/M02/M38 negatif kaynak testleri;
- backfill provider/kararları;
- uzlaştırma ve health;
- bütünleşik güvenlik, UI, regresyon ve kabul çıktıları.

Her paket sonunda yalnız o paketin hedefli testlerini çalıştır ve makine okunur bir checkpoint üret. Bir paket yeşilken alakasız tam build/regresyonu tekrar tekrar çalıştırma.

Faz 1, Faz 2, Faz 3, bütün Faz 4 testi, ilgili ürün regresyonları ve production build yalnız son kabulde bir kez topluca çalıştırılsın. Paylaşılan çekirdek sonradan değişirse yalnız etkilenen hedefli testleri, en sonda tam koşuyu yeniden çalıştır.

Bir test başarısızsa önce nedeni düzelt; bütün yeşil paketi sebepsiz tekrar çalıştırma. Komut, süre, exit code ve log yolu kaydedilsin.

Paketler arasında kullanıcı onayı bekleme. Güvenli biçimde devam et. Bağlam daralırsa checkpoint ve FAZ_DURUMU.md üzerinden kaldığın yerden sürdür; baştan başlama.

## Faz 4 sözleşme izdüşümü

Temel learning-source-registry@1 satırlarını yerinde değiştirme. Faz 4'te kaynak anahtarı, aktör veya semantic event genişlemesi gerektiği için eklemeli ve sürümlü bir akademik izdüşüm oluştur.

Önerilen sürümler:

- kaynak sicili: learning-academic-registry@1;
- adaptör: learning-academic-adapters@1;
- istemci/outbox: learning-academic-client@1;
- backfill: phase-4-academic-backfill@1;
- health/capability: learning-academic-capability@1.

Adlar gerçek mimariyle çakışıyorsa eşdeğer açık ad seç ve tek yerde sabitle. Aynı anlam için birden fazla sürüm oluşturma.

Yeni sicil yalnız Faz 4 kapsamındaki kaynakları kopyalamalı. Şu kararlar açık olmalı:

- bağlı kaynaklar: locally_implemented_live_not_applied;
- türetilmiş kaynaklar: local_derived_confirmed;
- dışlanan kaynaklar: local_exclusion_confirmed;
- canlıya gerçekten uygulanmadığı sürece live_connected veya benzeri bir durum yazılmamalıdır.

Aşağıdaki gerekli semantic genişlemeleri temel v1 sözleşmesine sessizce ekleme; sürümlü akademik sözleşmede tanımla ve JS/SQL parity testi oluştur:

- genel deneme oturum süresini bir kez taşımak gerekiyorsa mock_exam_session_reported;
- öğretmenin doğruladığı/girdiği branş sonucu öğrenci öz bildirimi değilse branch_exam_result_entered_by_teacher benzeri ayrı anlam;
- öğretmenin öğrenciye doğrudan sorunlu soru ataması için teacher_problem_question_shared benzeri ayrı anlam.

Adların Türkçe ürün metniyle değil, kararlı teknik anlamla uyumlu olması gerekir. Bir semantic genişleme gerekmiyorsa ekleme; ancak var olmayan davranışı mevcut event adına gizleme.

M06 için v1'de yalnız homework_assigned ve homework_status_reported vardır. Görüldü, başlandı, teslim edildi, değerlendirildi veya yeniden çalışma istendi gibi durumları şema ve gerçek ürün akışı olmadan uydurma.

M07 için status=Çözüldü, öğrenci doğru yaptı anlamına gelmez. teacher_problem_question_shared da doğruluk değildir.

M11 için çözüm kalitesi beğenisi, öğrenci doğru/yanlış öz bildirimi değildir. Aynı event adıyla iki farklı anlam taşıma.

## Tek yetkili Faz 4 migration'ı

Yeni tek yetkili DDL dosyası oluştur:

supabase/migration_learning_academic_records.sql

Bu dosya:

- Faz 2 ve Faz 3 migration'larından sonra uygulanmalı;
- idempotent olmalı;
- mevcut sentetik/yerel alan verisini korumalı;
- mevcut tabloları gereksiz yeniden adlandırmamalı;
- veri silmemeli;
- eski migration dosyalarını yerinde değiştirmemeli;
- setup_new_project.sql içine ikinci DDL kopyası koymamalı;
- setup dosyasının sonundaki sıralama yorumunu Faz 4'ü içerecek biçimde güncelleyebilir;
- başarısız ilk uygulamada tam rollback olmalı;
- ikinci uygulamada yeni nesne/kanıt/kayıt çoğaltmamalıdır.

En az şu yapı sınıfları bulunmalıdır:

- Faz 4 kaynak sözleşmesi izdüşümü;
- akademik işlem fişleri;
- kaynak revizyon/audit kayıtları;
- gerekiyorsa AI Soru Çöz dış çağrı claim/finalize kayıtları;
- kaynak-özel private doğrulayıcılar;
- kaynak-özel public RPC'ler veya dar server-only RPC'ler;
- backfill provider kararları;
- health/uzlaştırma görünümü veya fonksiyonları;
- RLS, FORCE RLS, grant/revoke ve indeksler;
- gerekli additive kolonlar ve kısıtlar.

Önerilen ayrı işlem fişi tablosu learning_academic_action_receipts benzeri olmalıdır. En az şunları taşımalı:

- student_id;
- source_registry_version;
- source_code;
- client_action_id;
- action_kind;
- canonical payload hash;
- durum: processing, completed, failed veya sözleşmenin seçtiği eşdeğer durum;
- oluşturulma/güncellenme zamanı;
- sonuçtaki kaynak kimliği;
- güvenli, kişisel verisiz sonuç özeti;
- aynı student_id + source_code + client_action_id için benzersizlik.

Aynı action ID ve aynı payload aynı sonucu döndürmelidir. Aynı action ID ve farklı payload idempotency_conflict üretmelidir. Başka öğrenciye ait action varlığını ifşa etmemelidir.

Revizyon katmanı timestamp'i tek sürüm saymamalıdır. Her source record için monoton revision veya eşdeğer kararlı sürüm üret. Revizyon/audit satırı ham kişisel metni çoğaltmamalı; yalnız güvenli alan özeti, hash, aktör, işlem türü, hedef evidence kimliği ve kaynak referansı taşımalıdır.

Private şemadaki tablolar PUBLIC, anon ve authenticated rollerine açık olmamalı. Kullanıcıya görünen yeni öğrenci kapsamlı tablolar ENABLE RLS ve FORCE RLS kullanmalıdır.

## Kaynak-özel transaction sınırı

Her mutasyon şu sırayı tek transaction içinde uygulamalıdır:

1. auth.uid veya güvenilir sunucu kimliğiyle aktörü belirle.
2. Rolü ve hedef öğrenci ilişkisini sunucuda doğrula.
3. client_action_id ve canonical payload hash ile işlem fişini claim et.
4. Duplicate/conflict/processing durumunu deterministik çöz.
5. Kaynak alan değerlerini doğrula.
6. Kaynak satırını insert/update/delete et veya kilitle.
7. Monoton source_revision ve gerekirse correction/tombstone hedefini üret.
8. Konu kimliğini yetkili resolver ile çöz.
9. Güvenilen evidence alanlarını sunucuda kur.
10. learning_private.ingest_evidence çağrısını aynı transaction içinde yap.
11. Revizyon/audit ve receipt sonucunu tamamla.
12. Tek bir güvenli ürün cevabı döndür.

Aşağıdakilerin her biri failure injection ile test edilmelidir:

- kaynak insert başarılı olacakken evidence insert hata verir;
- evidence hazırlanmışken kaynak insert hata verir;
- revizyon/audit hata verir;
- receipt tamamlanması hata verir;
- child kayıtlarından biri hata verir;
- correction hedefi geçersizdir;
- transaction sonunda kaynak ve evidence birlikte rollback olur.

Normal kullanıcı tam evidence gövdesi gönderememeli. Kaynak RPC yalnız kendi alanına ait dar girdileri almalıdır.

SECURITY DEFINER kullanılırsa:

- search_path boş veya güvenli sabit olmalı;
- nesne adları tam şema nitelikli olmalı;
- PUBLIC ve anon EXECUTE kaldırılmalı;
- yalnız gerçekten gereken role EXECUTE verilmeli;
- user/role/student ilişkisi fonksiyon içinde tekrar doğrulanmalı;
- kaynak kaydı kimliği üzerinden başka öğrencinin varlığı sızdırılmamalıdır.

## Konu kimliği ve kaynaklar arası ilişki

- Kanonik konu istemciden güvenilir kabul edilmemeli.
- İstemcinin seçtiği topic_id varsa sunucu bunun seçilen sınav/ders altında gerçekten var olduğunu doğrulamalı.
- Serbest başlık/açıklama/not metni konu belirlemek için kullanılmamalı.
- Daily log içindeki Ders - Konu metni mevcut resolver ile ayrıştırılmalı; ambiguous/unmatched sonuç karantinada kalmalı.
- Genel deneme ders satırı konu performansı değildir; topic_id boş kalmalı.
- Branş denemesi yalnız ders adı taşıyorsa topic_id boş kalmalı.
- Ödev için açık öğretmen konu seçimi yoksa başlıktan konu uydurulmamalı.
- Sorunlu soru için kullanıcı/öğretmen tarafından açık seçilmiş konu doğrulanmalı.
- AI Soru Çöz canonical_topic serbest stringi kalıcı graph kimliği sayılmamalı; mevcut resolver sonucu ve topic_matched birlikte doğrulanmalı.
- topic_matched=false kesinlikle topic_id üretmemeli.
- Canlı ders summary covered_topics çoklu serbest metni otomatik tek konuya çevrilmemeli; yalnız session üzerindeki doğrulanmış subject/topic kullanılabilir.
- Profil hedefi context_only'dir; konu başarısı değildir.
- Faz 3 content revision'ı yalnız gerçekten doğrulanmış platform içeriği ilişkisi varsa kullanılmalıdır.

Aynı günlük çalışma ile platform içi ders/soru olayı arasında otomatik fuzzy dedupe yapma. Öğrenci açıkça bir platform çalışmasını günlükte yeniden raporluyorsa ilişki kurmaya yarayan doğrulanmış kaynak referansı eklenebilir. Bu ilişki yoksa iki kayıt ayrı kalır; ilerideki model evidence_class ve provenance üzerinden bunları körlemesine iki doğrudan ölçüm gibi toplamamalıdır.

M04 ile M05 aynı gerçek sınav olabilir. Yalnız sahipliği doğrulanmış açık cross-source relation varsa ilişkilendir. Tarih, ad ve net benzerliği yalnız olası çakışma metriği olabilir; otomatik merge veya silme gerekçesi değildir.

## M03 — Günlük çalışma

Gerçek mutasyon yollarını bağla:

- DailyLogForm yeni kayıt;
- DailyLogEditModal öğretmen düzeltmesi;
- varsa öğrenci düzenleme/silme yolları;
- api/_lib/tools.js içindeki kullanıcı onaylı log_study_session;
- Home veya öğretmen/öğrenci panellerindeki başka hızlı kayıt yolları.

Yeni kayıt için kontrollü entry_origin gerekir. En az şu ayrımlar bulunmalıdır:

- manual_external_self_report;
- manual_platform_self_report;
- ai_coach_confirmed;
- legacy_unknown;
- gerekiyorsa teacher_entered veya teacher_correction, fakat aktör ile kaynak kökenini karıştırma.

Varsayılan ürün metni öğrencinin dışarıdaki çalışmasını doğru anlatmalı. Platform içi otomatik olay varmış gibi gösterme.

Event seçimini deterministik yap:

- çalışma süresi veya genel çalışma kaydı varsa study_session_reported;
- yalnız soru sayıları varsa question_counts_reported;
- aynı kümülatif sayıları iki event'e kopyalayıp çift sayma;
- süre ve bütün sayılar sıfırsa anlamlı çalışma kanıtı üretme; ürün kuralına göre reddet veya kaynak-only güvenli durum oluştur.

Şunları doğrula:

- study_date geçerli ve makul olmalı;
- izinsiz gelecek tarih reddedilmeli;
- süre ve sayılar negatif olamaz;
- sayılar tam sayı olmalı;
- correct + incorrect + empty tutarlı total_count üretmeli;
- gerçek dışı üst sınırlar sözleşmeyle belirlenmeli;
- not yalnız note_present boolean'ına dönüşmeli;
- öğretmen düzeltmesi student_self_report kaynağını direct_measurement yapmamalı;
- correction aktörü authorized_teacher olarak korunmalı;
- no-op update yeni correction üretmemeli;
- gerçek update önceki etkin kaydı hedeflemeli;
- delete aynı transaction'da tombstone üretmeli;
- AI Koç onaylı günlük kaydı yalnız M03 olarak bir kez oluşmalı.

Konu çözümlenemiyorsa günlük kaydı kaybetme; evidence karantinaya gidebilir. Kaynak satırı başarılı sayılacaksa transaction politikası ve karantina sonucu açık olmalıdır.

## M04 — Genel deneme

MockExamForm'un iki ayrı insert akışını tek kaynak-özel RPC'ye taşı.

Tek bir logical action şunları atomik yapmalıdır:

- mock_exams üst kaydı;
- dokunulmuş bütün mock_exam_subjects satırları;
- sınav oturumuna ait tekil bağlam/süre kaydı gerekiyorsa onun evidence kaydı;
- her gerçek ders satırı için ayrı subject-level sonuç evidence'ı;
- receipt ve revizyonlar.

Bir child satırı veya evidence başarısızsa üst kayıt dahil hiçbir şey commit olmamalıdır.

Kurallar:

- hiç dokunulmamış ders satırı kaydedilmemeli;
- dokunulmamış ders 0 net veya başarısızlık değildir;
- ders satırı konu değildir; topic_id uydurulmaz;
- exam_type yalnız izinli değerlerden gelmeli;
- correct/incorrect/empty negatif olamaz;
- net istemciden alınmamalı;
- LGS neti correct - incorrect / 3;
- TYT, AYT ve KPSS neti correct - incorrect / 4;
- mevcut generated net kolonu LGS için güvenilir kaynak değildir;
- eski DB neti yeni evidence için körlemesine kullanılmamalı;
- exam duration üst kayıt düzeyindedir;
- üst süreyi her ders evidence'ına kopyalayıp toplam süreyi katlama;
- süreyi kaybetmemek için akademik sözleşmede tek exam-session event'i gerekiyorsa sürümlü biçimde ekle;
- exam_name sınırlandırılmış/sanitize edilmiş bağlamdır; kişisel veri/log sızıntısına izin verme;
- subject satırlarının payload sırası canonical payload hash'i değiştirmemeli; deterministik sırala.

Silme yollarının tamamını aynı RPC'ye taşı:

- MockExamList;
- MockExams sayfası;
- ExamAccordion veya başka dashboard silme yolu.

Parent silmede bütün child etkin evidence kayıtları tombstone ile etkisizleşmeli. Retry aynı sonucu dönmeli. Silinen child kimlikleri private audit'te korunmalı.

Bu faz genel deneme düzenleme UI'ı icat etmek zorunda değildir. Düzenleme uygulanıyorsa tüm child setinin tek atomik revision/correction işlemi olmalıdır.

Orphan mock_exams üst satırı backfill'de sınav sonucu sayılmaz; health/reconciliation sorunu olarak raporlanır.

## M05 — Branş denemesi

Gerçek tablo adı exams olsa da source_code branch_exams olarak kalmalıdır.

AddExamForm ve BranchExamList mutasyonlarını kaynak-özel RPC'ye taşı.

Şunları düzelt:

- exam_type ve duration_minutes eksikse kolon düşürerek sessiz retry yapma;
- Faz 4 capability/migration yoksa kullanıcıya kontrollü ve teknik olmayan hata göster;
- student_id öğretmen formundan güvenilir kabul edilmemeli; active teacher relation doğrulanmalı;
- öğrenci kendi kaydını, bağlı öğretmen yetkili öğrencinin kaydını yazabilmeli;
- actor ve actor_student_relation doğru saklanmalı;
- öğretmen girdisi otomatik öğrenci öz bildirimi sayılmamalı;
- gerekiyorsa teacher-entered event/class ayrımı sürümlü akademik sözleşmede kurulmalı;
- subject ve optional topic ayrı anlamlar olarak saklanmalı;
- yalnız subject varsa topic_id üretilmemeli;
- net istemciden alınmamalı;
- LGS /3, diğer bilinen türler /4;
- exam_type bilinmiyorsa net_score uydurulmamalı;
- legacy score correct/incorrect/net'e çevrilmemeli;
- tahmini duration, öğrenci tarafından ölçülmüş duration gibi evidence'a yazılmamalı;
- delete aynı transaction'da tombstone üretmeli;
- no-op veya retry ikinci sınav oluşturmamalı.

Eski schema fallback'ini kaldırmadan önce yeni additive migration'ın gerekli kolonları her desteklenen kurulumda sağladığını test et.

## M06 — Ödev

Bu fazda v1 ürün yaşam döngüsü yalnız şunlardır:

- homework_assigned;
- homework_status_reported;
- öğretmenin yetkili düzeltmesi/silmesi.

Var olmayan viewed, started, submitted, evaluated veya rework_requested olaylarını üretme.

Öğretmen atama RPC'si:

- teacher_id değerini auth.uid üzerinden türetmeli;
- student_id hedefini aktif öğretmen–öğrenci ilişkisinden doğrulamalı;
- title, description, due_date ve lesson_session_id alanlarını doğrulamalı;
- canlı derse bağlıysa session teacher/student eşleşmesini sunucuda doğrulamalı;
- homework_assigned olayını system_observation olarak yazmalı;
- atamayı öğrenci başarısı saymamalı;
- serbest title/description metnini common evidence'a kopyalamamalı;
- açık subject/topic seçimi eklenirse kanonik bağı sunucuda doğrulamalı;
- konu seçilmediyse başlıktan konu uydurmamalıdır.

Öğrenci status RPC'si:

- yalnız kendi ödevinin status alanını değiştirebilmeli;
- title, description, student_id, teacher_id, due_date, lesson_session_id veya konu alanlarını değiştirememeli;
- Yapılıyor/Tamamlandı gibi gerçek enumu kullanmalı;
- homework_status_reported sınıfını student_self_report tutmalı;
- Tamamlandı durumunu correctness veya direct_measurement saymamalı;
- aynı status no-op ise yeni correction oluşturmamalı;
- status geri alınırsa önceki snapshot etkisini correction ile güncellemelidir.

Öğretmen görünümünde öğrenci adına status toggle edip bunu öğrenci öz bildirimi gibi kaydetme. Öğretmenin gerçekten düzeltme yapması gerekiyorsa ayrı authorized_teacher correction yolu ve görünür UI dili kullan.

Öğretmen silmesi:

- yalnız bağlı öğrencinin ödevinde çalışmalı;
- tombstone ve kaynak delete/soft-delete aynı transaction'da olmalı;
- başka öğretmenin ilişkisini veya öğrenciyi etkilememelidir.

Canlı ders özetindeki createLessonHomework doğrudan insert yapmamalı; aynı M06 RPC'sini kullanmalıdır.

Overdue yalnız tarihten türetilen durumdur; yeni learning event değildir.

## M07 — Sorunlu soru ve öğretmen geri bildirimi

### Öğrenci→öğretmen mevcut akışı

QuestionForm yazısını kaynak-özel işlem sınırına taşı.

question_submitted:

- exposure sınıfıdır;
- öğrencinin yanlış yaptığı anlamına gelmez;
- help_used veya student_correct değerini sırf upload nedeniyle üretmez;
- subject/topic yalnız açık seçimden ve server resolver'dan gelir;
- soru metni, dosya yolu ve URL evidence metadata'sına girmez;
- image_present yalnız boolean olabilir;
- retry aynı questions satırını ve aynı evidence'ı döndürmelidir.

### Öğretmen geri bildirimi

QuestionInbox ve solutionReply içindeki bütün update yollarını tek güvenli öğretmen mutation katmanına taşı.

teacher_feedback_shared ancak gerçekten öğrenciyle paylaşılabilir bir yanıt varsa oluşmalıdır. Yanıt varlığı şu kanalları birlikte denetlemelidir:

- teacher_reply metni;
- teacher_reply_image_url veya özel dosya kaydı;
- yayımlanmış/finalize edilmiş çözüm tuvali.

Taslak strokes veya private öğretmen çalışma verisi paylaşılmış geri bildirim sayılmamalıdır.

Kurallar:

- image-only veya yayımlanmış canvas-only yanıt yanlışlıkla question_submitted sınıfına düşmemeli;
- status=Çözüldü tek başına student_correct değildir;
- öğretmen metninden öğrenci doğruluğu uydurulmamalı;
- açık, ayrı bir öğretmen doğruluk alanı yoksa student_correct null kalmalı;
- yanıt değişikliği correction olmalı;
- yalnız status değişikliği yanlışlıkla ikinci feedback oluşturmamalı;
- öğretmen yalnız aktif bağlı öğrencinin sorusunu görebilmeli/değiştirebilmeli;
- öğrenci teacher_reply, teacher status veya teacher canvas alanlarını değiştirememeli;
- ham yanıt, soru, strokes, görsel veya URL common evidence'a girmemelidir.

### Öğretmen→öğrenci eksik akışı

Kullanıcının nihai hedefindeki bu akış mevcut üründe yoktur. Faz 4'ü tamamlamak için en küçük güvenli gerçek akışı kur:

- öğretmen yalnız aktif bağlı bir öğrenci seçebilir;
- subject ve mümkünse topic açıkça seçilir;
- soru metni veya özel görsel kaynağa kaydedilir;
- kaynak origin/created_by/assigned_by bilgisi aktörü ayırır;
- öğrenci kendi Sorunlu Sorular ekranında bu kaydı net bir öğretmen kaynağı etiketiyle görür;
- öğrenciye atanan kayıt, öğrencinin yanlış yaptığı veya soruyu gördüğü iddiası değildir;
- semantic event teacher_problem_question_shared benzeri ayrı, sürümlü bir anlam olmalıdır;
- kanıt sınıfı öğretmen geri bildirimi/bağlam olarak açıkça kararlaştırılmalı; direct measurement olmamalıdır;
- mevcut question_submitted adı öğretmen atamasını gizlemek için kullanılmamalı;
- teacher/student UI, boş/yükleme/hata/başarı durumları ve erişilebilir modal/form akışı tamamlanmalıdır.

Bu yeni event temel learning-source-registry@1 içine sessizce eklenmemeli; learning-academic-registry@1 ve learning-academic-adapters@1 parity'sinde yer almalıdır.

M07 v1 hard delete/tombstone desteklemiyorsa soru silme özelliği ekleme. Geri çekme gerekiyorsa sürümlü sözleşme kararı ver; aksi hâlde kayıt geçmişi korunur.

## M11 — AI Soru Çöz

Bu kaynak Faz 4'ün en sıkı güven sınırıdır.

### Model alanlarının sahipliği

Öğrenci authenticated rolü şu alanları doğrudan insert/update edememelidir:

- subject/topic/subtopic/canonical_topic/topic_matched;
- answer ve board alanları;
- verification/confidence/refusal;
- model_role/model_id/routing/cost/token alanları;
- help_requested sayaç alanı;
- model kontrolünden gelen student_correct/error_type;
- server revision/provenance/canonical kimlikleri.

Öğrenci yalnız dar ürün eylemlerini çağırabilmelidir:

- soru çözme isteği;
- why/stuck veya izinli yardım isteği;
- kendi çözümünü kontrol ettirme isteği;
- açık doğru/yanlış öz bildirimi;
- çözüm kalitesi geri bildirimi;
- review durumu.

JWT ile öğrenci kimliğini doğrula; ardından model çıktısını yazmak için dar server-only sınır kullan. Kabul edilebilir çözüm, örneğin yalnız AI Solve modülünde kullanılan sınırlı server credential ile tek kaynak-özel finalize RPC'si veya eşdeğer imzalı server assertion olabilir.

Genel service-role evidence yazarı, tam ledger endpoint'i veya tarayıcıya taşınan secret oluşturma. Seçilen sınırı MIMARI_KARARLAR.md içinde tehdit modeliyle kaydet ve şu testleri yap:

- öğrenci doğrudan model alanı yazamaz;
- başka öğrenci session'ına erişemez;
- dar sunucu finalizer yalnız doğrulanmış öğrenci ve claim için çalışır;
- source row + evidence yine aynı DB transaction'ında tamamlanır;
- credential istemci paketine girmez.

### Dış model çağrısı idempotency'si

Harici model çağrısı PostgreSQL transaction'ına alınamaz. Bu yüzden durable durum makinesi kullan:

1. istemci ilk gönderimden önce client_action_id üretir;
2. sunucu auth ve payload hash ile request'i claim eder;
3. aynı action + farklı payload conflict olur;
4. aynı action processing ise ikinci eşzamanlı model çağrısı başlamaz;
5. aynı action completed ise kayıtlı sonucu yeniden döndürür;
6. model çağrısı deterministik test stub'ı ile yürür;
7. sonuç, session, semantic event ve evidence atomik finalize edilir;
8. cevap istemciye ulaşmasa bile aynı action retry sonucu tekrar okuyabilir;
9. failed/unknown/stale processing durumları kişisel verisiz health ve açık repair politikası taşır.

DB ile harici servis arasında mutlak exactly-once garantisi verilemeyen crash penceresini saklama. Otomatik kör retry ile ikinci ücretli çağrı üretme. Bu sınırı Faz 9 için açıkça kaydet.

### Event anlamı

- solution_requested: kalıcı çözüm isteği maruziyetidir; başarı veya correctness değildir.
- unreadable/refused/error: correctness ve konu ustalığı üretmez; sözleşmeye göre topicless exposure veya operasyonel sonuç olarak açıkça kararlaştırılır.
- help_requested: yalnız gerçek why/stuck gibi zorlanma eylemidir; sırf solution_requested olduğu için help_used=true yazma.
- chat ve alternative otomatik zorlanma sayılmamalı; ancak açık sözleşme koşulu varsa yardım event'ine dönüşebilir.
- answer_checked: model_inference sınıfıdır; direct_measurement değildir.
- feedback_reported: yalnız öğrencinin açık Ben doğru yaptım/yanlış yaptım öz bildirimi için kullanılmalıdır.
- thumbs up/down çözüm kalitesi geri bildirimidir; öğrenci correctness'i değildir ve ortak başarı kanıtı üretmemelidir.
- modelin serbest hata türü model_inference olarak kalmalı; doğrulanmış öğrenci gerçeği yapılmamalıdır.

Mevcut adaptörde solution_requested için help_used=true çıkıyorsa düzelt.

### Atomik alt akışlar

- saveSession: session + solution_requested + evidence + receipt finalize tek DB transaction.
- why/stuck: ai_solution_events insert + help counter + help_requested evidence tek transaction.
- check: check source event + session verdict/error update + answer_checked evidence tek transaction.
- explicit self result: kaynak revision + feedback_reported evidence tek transaction.
- solution quality feedback: operasyonel kayıt/revision; öğrenci correctness evidence'ı yok.
- review status: M12 yoluna gider.

recordEvent insert sonucundaki error yutulmamalı. Sayaç read-modify-write yarışına bırakılmamalı. Aynı yardım eylemi retry edilince sayaç ve evidence bir kez artmalıdır.

AI Solve çözümü kullanıcıya gösterilmiş fakat kalıcılık başarısızsa UI bunu kaydedilmiş geçmiş gibi sunmamalı. Çözüm görüntülenebilir; geçmiş/koç ağına kaydedilemediği açık ve teknik olmayan bir durumla gösterilmeli.

Görsel, soru metni, öğrenci notu, model cevabı, board, prompt veya reasoning ortak evidence metadata'sına kopyalanmamalıdır.

Konu bağı:

- stored canonical_topic stringi tek başına güvenilir kimlik değildir;
- topic_matched=false topic_id üretmez;
- resolver ambiguous/unmatched ise quarantine;
- exam_type profil ipucuysa context_origin bunu korumalı;
- profile hint kesin kullanıcı seçimi gibi sunulmamalıdır.

M11 kaydını silme UI'ı ekleme. Temel sözleşmede tombstone yoksa direct DELETE yetkisini kaldır.

## M12 — AI Soru Çöz tekrar durumu

review_state_reported:

- snapshot/correction yapısındadır;
- öğrenci öz bildirimi olarak kalır;
- pending/needed/reviewed veya gerçek ürün enumu doğrulanır;
- reviewed, eski yanlış/yardım evidence'ını silmez;
- aynı state no-op yeni correction üretmez;
- state geri alınırsa yeni snapshot/correction oluşur;
- başka öğrencinin session'ı değiştirilemez;
- review_status ve reviewed_at server tarafından tutarlı yazılır.

Mevcut yerel fallback kullanıcı kapsamlıdır:

drkoc-ai-solve-reviews:<userId>

Başka userId anahtarını yeni hesaba otomatik taşıma. Bulut kolonları yokken yerel state kaydedilmişse:

- sessiz hesap sahipliği varsayma;
- açık kullanıcı kapsamı doğrula;
- otomatik güven yükseltme yapma;
- sync/import yapılacaksa ayrı client_action_id, receipt, provenance ve idempotency ile yap;
- aynı snapshot ikinci kez import edilince çoğalmamalı;
- local state server gerçeğini sessizce ezmemelidir.

Canlı/local geçmiş bulunmuyorsa backfill için review olayları uydurma.

## M31 — Canlı ders katılımı

Mevcut lesson_join ve lesson_leave davranışını koruyarak güvenli, idempotent katılım segmenti kur.

Kurallar:

- yalnız session'ın gerçek student participant satırı öğrenci learning evidence'ı üretsin;
- öğretmenin odaya girişi öğrenci başarısı veya öğrenci katılımı değildir;
- student_id istemciden alınmamalı; lesson_sessions üyeliğinden türetilmeli;
- participant_id ve session_id sunucuda doğrulanmalı;
- join/reconnect/leave için stable action veya attendance segment kimliği bulunmalı;
- aynı leave retry total_seconds değerini tekrar artırmamalı;
- mümkünse süre server join/leave zamanlarından türetilmeli;
- istemci seconds kullanılıyorsa güven sınırı, cap ve provenance açık olmalı;
- scheduled duration attended duration değildir;
- total_seconds'i sahte bir join/leave geçmişine bölme;
- attendance yalnız exposure/katılım bağlamıdır;
- duration veya katılım öğrenci başarısı değildir;
- snapshot update correction zincirini korumalı;
- no-op reconnect kanıt çoğaltmamalıdır.

Mevcut lesson_join/lesson_leave adları korunacaksa yeni migration'da güvenli biçimde create or replace et ve bütün eski yetki davranışını regresyon testine al. Kaynak-özel helper evidence'ı aynı transaction'da yazmalıdır.

## M32 — Ham canlı ders akışı kesin dışlama

Aşağıdakiler common evidence üretmemelidir:

- tahta çizgileri;
- board snapshot veya board image;
- chat mesajları;
- ses/görüntü stream'i;
- cihaz rolü;
- mikrofon/kamera açma;
- materyal açma;
- cursor/presence;
- realtime channel olayları;
- ham kayıt veya private note.

M32 unavailable değildir; bilinçli excluded kaynaktır. Negatif testte bu eylemlerin her biri sonrası common evidence sayısı sıfır kalmalıdır.

## M33 — Paylaşılmış canlı ders özeti

saveSummary direct upsert yolunu öğretmene özel RPC'ye taşı.

RPC:

- teacher_id değerini auth.uid üzerinden;
- student_id değerini lesson_sessions satırından;
- session sahipliğini aktif/izinli öğretmen ilişkisinden;
- subject/topic bağlamını session kaydından türetmelidir.

İstemciden teacherId veya studentId güvenilir alan olarak alma.

Kurallar:

- draft ve shared_with_student=false common evidence üretmez;
- ilk gerçek paylaşım teacher_summary_shared üretir;
- paylaşılan özet değişirse correction üretir;
- unshare veya delete destekleniyorsa tombstone ile etkin etkiyi kaldırır;
- private note hiçbir koşulda common evidence veya öğrenci response'una girmez;
- public_note, covered_topics, next_goal, board_snapshot, board_image_url ve dosya yolları common metadata'ya kopyalanmaz;
- covered_topics serbest/çoklu metinse tek konuya zorlanmaz;
- yalnız session'ın güvenilir subject/topic bağı çözümlenebilir;
- teacher summary, student correctness değildir;
- öğrenci feedback'i yalnız paylaşılan kendi özetinde dar enum RPC'siyle yazılır;
- öğrenci öğretmen alanlarını değiştiremez;
- student_feedback_reported student_self_report olarak kalır;
- aynı feedback no-op evidence çoğaltmaz;
- öğretmen update'i ile öğrenci feedback correction zincirleri birbirine karışmaz.

LessonSummaryPage içindeki ödev ekleme M06 RPC'sini kullanmalıdır. Summary ve private note ayrı güven alanlarıdır; private note başarısızlığını summary evidence'ıyla karıştırma.

## M36 — Öğrenci hedef profili

M36 yalnız context_only snapshot'tır.

Profile sınav alanı yazısını dar, atomik RPC'ye taşı:

- grade;
- target_exam;
- is_exam_year;
- exam_year;
- exam_date;
- exam_profile_updated_at.

Kurallar:

- student_id auth.uid'den türetilmeli;
- öğrenci yalnız kendi hedef profilini değiştirebilmeli;
- role ve parent/student relation kolonları değiştirilememeli;
- mevcut profiles_freeze_privileged_columns güvenliği korunmalı;
- target_exam ve grade DB kısıtları korunmalı;
- exam_date ile tahmini tarih ayrımı korunmalı;
- metadata yalnız target_exam, grade_level ve exam_date_precision allowlist'ine uymalı;
- adaptör gerçek grade kolonunu doğru okumalı;
- profil hedefi öğrenci öz bildirimi/bağlamdır;
- başarı, çalışma veya ustalık evidence'ı değildir;
- update correction; no-op yeni revision değildir;
- hedef temizleme yeni snapshot/correction olabilir, tombstone uydurma;
- profiles ile ai_student_memory içinde iki ayrı yetkili eğitim hedefi gerçeği oluşturma;
- bu fazda M09 hafıza yazısını bağlama; profiles eğitim hedefinin yetkili kaynağı olarak ADR kaydı oluştur.

Tam ad veya diğer profil alanı update'i M36 event'i üretmemelidir.

## M01, M02 ve M38 negatif sınırları

- Home ve Analytics mevcut kaynakları okuyabilir; render olmak veya grafiğe bakmak yeni event değildir.
- M01/M02 sonuçlarını tekrar learning evidence olarak yazma; türetilmiş veriyi ham veri gibi döngüye sokma.
- Öğretmen/veli dashboard'ı açmak M38 event'i değildir.
- Öğretmenin M03–M07 alanında yaptığı gerçek yetkili mutasyon ilgili kaynak event'idir; M38 değildir.
- Veli hiçbir source mutation çağıramaz.
- Onaylı veli yalnız mevcut ürün sözleşmesinin izin verdiği M03–M06 özet kayıtlarını okuyabilir.
- Veli M07 soru içeriğine, M11/M12 AI Soru Çöz verisine, AI sohbetine, private canlı ders alanlarına veya common ledger'a erişemez.
- Bekleyen/reddedilmiş/ilişkisiz veli hiçbir öğrenci akademik kaydını okuyamaz.

## İstemci, outbox ve kullanıcı deneyimi

Faz 4 için ayrı istemci katmanı oluştur. Önerilen dizin:

src/lib/learning/academicActivity/

En az şu sorumlulukları ayır:

- source-specific client çağrıları;
- client action kimliği;
- canonical payload hazırlama;
- kullanıcı kapsamlı outbox;
- retry/backoff;
- capability/health;
- güvenli hata eşleme;
- gerekirse yerel review importu.

Faz 3 outbox anahtarını kullanma. Faz 4 anahtarı kullanıcıya özel olmalıdır, örneğin:

drkoc:academic-outbox:v1:<userId>

Kurallar:

- logical action başlamadan önce UUID üret;
- ağ retry ve refresh aynı UUID'yi kullansın;
- sunucu completed ack vermeden Kaydedildi gösterme;
- aynı action başarılı olduktan sonra yeni kullanıcı eyleminde yeni UUID üret;
- account switch başka kullanıcının kuyruğunu göndermesin;
- sign-out sırasında kuyruk başka hesaba taşınmasın;
- payload içine JWT, ad, e-posta, ham soru/yanıt veya model metni koyma;
- sensitive media blob'unu localStorage'a koyma;
- conflict kullanıcıya teknik SQL adı göstermeden açık aksiyon sunsun;
- unavailable/degraded/empty/available durumlarını ayır;
- form verisi geçici ağ hatasında kaybolmasın;
- migration eksikken güvenli olmayan direct table fallback yapma;
- AI Solve dış model sonucu için normal akademik outbox ile sahte server output yeniden yaratma.

UI durumları:

- idle;
- validating;
- saving;
- saved;
- offline/pending retry;
- idempotency conflict;
- permission denied;
- source degraded;
- migration unavailable;
- validation error.

Mevcut ürün dili Türkçe, kısa ve sakin kalmalıdır.

## Medya ve mahremiyet

M07 ve M11 medya erişimini tablo RLS'sine bırakma.

Yeni medya yazılarında en az şu güvenli protokolü kur:

1. kullanıcıya ve logical action'a bağlı staged path;
2. dosya türü/boyutu/path doğrulaması;
3. DB source mutation başarılıysa finalized ilişki;
4. DB mutation başarısızsa best-effort cleanup ve orphan health kaydı;
5. başka öğrenci/öğretmen/veli/anon için erişim reddi;
6. yetkili kullanıcı için kısa süreli signed erişim;
7. common evidence içinde yalnız image_present boolean ve opak source locator;
8. public URL, storage path ve dosya adı common log/metadata'ya girmez.

AI Solve mevcut özel path güvenliğini bozma.

question-images legacy public verisini canlıda bu fazda toplu taşıma veya silme. Güvenli additive geçiş yapabiliyorsan bütün writer/reader/lightbox/solution canvas yollarıyla birlikte uygula ve sentetik test et. Canlı legacy dönüşüm güvenli biçimde yapılamıyorsa:

- yeni kayıtları özel yola geçir;
- legacy riski ve geçiş planını açıkça Faz 9 borcu olarak kaydet;
- end-to-end medya mahremiyeti tamamlandı iddiasında bulunma;
- Faz 4 common evidence kabulünde hiçbir URL/path sızıntısı olmadığını yine kanıtla.

## RLS ve yetki matrisi

Şu aktörleri gerçek sorgu/RPC testleriyle ayrı doğrula:

- anon;
- öğrenci A;
- öğrenci B;
- A'nın aktif bağlı öğretmeni;
- ilgisiz öğretmen;
- süresi dolmuş/iptal edilmiş öğretmen ilişkisi;
- A'nın onaylı velisi;
- bekleyen/reddedilmiş/ilişkisiz veli;
- dar AI Solve server writer.

Her kaynak için en az SELECT, INSERT, UPDATE, DELETE ve RPC çağrısını uygun olduğu ölçüde test et. Yalnız SQL metninde policy adı aramak yeterli değildir.

Özel kapılar:

- başka öğrencinin UUID'si 403/404 benzeri varlık ifşa etmeyen sonuç verir;
- öğretmen yalnız aktif bağlı öğrenciye yazar;
- öğrenci homework güvenilir kolonlarını değiştiremez;
- öğrenci questions teacher alanlarını değiştiremez;
- öğrenci AI Solve model alanlarını değiştiremez;
- öğrenci live summary öğretmen alanlarını değiştiremez;
- veli write yapamaz;
- anon source veya evidence okuyamaz/yazamaz;
- common ledger yalnız mevcut sözleşmedeki tüketim yüzeyinden okunur;
- private ingest ve audit tabloları normal rollere kapalıdır;
- direct DML kapatıldıktan sonra bütün gerçek UI/API writer'ları RPC'ye taşınmıştır;
- rows affected sıfır olan update başarı sayılmaz;
- teacher silinmesi öğrenci evidence'ını cascade ile yok etmez; actor_id davranışı mevcut sözleşmeye uyar;
- student account deletion davranışı mevcut retention/cascade kararıyla tutarlıdır.

Storage testleri tablo RLS testinden ayrı yapılmalıdır.

## Correction, tombstone ve deterministik replay

Her source ailesi için:

- same payload retry duplicate olmalı;
- same action farklı payload conflict olmalı;
- semantic no-op update yeni kayıt oluşturmamalı;
- gerçek update correction üretmeli;
- correction önceki etkin record'u hedeflemeli;
- başka öğrenci target'ı, fork ve cycle reddedilmeli;
- izinli delete tombstone üretmeli;
- tombstone sonrası etkin toplam sıfırlanmalı;
- silinmiş source locator opak biçimde izlenebilmeli;
- replay aynı sırada ve karışık giriş sırasında aynı checksum'u üretmeli.

Zorunlu örnek:

- günlük kaynakta 40 dakika/10 soru;
- öğretmen düzeltmesi 20 dakika/5 soru;
- silme sonrası 0 etkin etki;
- ham üç revision korunur;
- effective view yalnız son geçerli durumu gösterir.

M04 parent delete bütün child subject evidence'larını etkisizleştirmelidir.

M07, M11, M12 veya M31 temel sözleşmesinde tombstone yoksa direct hard delete'i kapat. Sözleşmeye sessiz tombstone ekleme. Gerçek ürün silmesi gerekiyorsa sürümlü akademik contract ve parity ile ekle.

## Geriye doldurma

Faz 2 backfill çerçevesini kullan; ikinci framework yazma.

Her kaynak için ayrı provider veya açık no-history kararı oluştur.

### M03

- mevcut aggregate günlük satırını student_self_report olarak al;
- not içeriğini kopyalama;
- tekil soru geçmişi veya tam olay zamanı uydurma;
- invalid/future/negative değerleri kaynakta düzeltme; quarantine/health raporu üret;
- teacher edit geçmişi yoksa yalnız mevcut son satırı bil.

### M04

- parent + child sahipliğini doğrula;
- yalnız gerçek child satırları sonuçtur;
- orphan parent kanıt değildir;
- parent süreyi her child'a çoğaltma;
- LGS için eski generated /4 neti trusted alma;
- ders satırından topic uydurma;
- eksik child/history üretme.

### M05

- legacy score'dan counts veya net uydurma;
- unknown exam_type ise net_score üretme;
- subject-only kayıt topic olmadan kalabilir;
- teacher/student actor geçmişi bilinmiyorsa kaynak otoritesini yükseltme.

### M06

- created_at varsa homework_assigned bağlamı;
- yalnız mevcut son status snapshot;
- viewed/started/submitted/evaluated geçmişi uydurma;
- status değişim zamanı bilinmiyorsa kesin timestamp verme;
- başlıktan canonical topic çıkarma.

### M07

- mevcut question_submitted kaydı;
- gerçekten paylaşılmış mevcut teacher feedback snapshot;
- image-only/canvas-only yanıtı doğru tanı;
- reply geçmişi veya student_correct uydurma;
- ham soru/yanıt/URL yok;
- eski kayıtta origin bilinmiyorsa legacy_unknown.

### M11

- gerçek session ve ai_solution_events satırlarını kullan;
- help_requested=N aggregate alanından N sahte event üretme;
- why/stuck gerçek event'lerini kullan;
- provenance'i karışmış student_correct alanını direct measurement yapma;
- check event'i ve güvenilir verdict ilişkisi varsa model_inference olarak işle;
- self-report kökeni kanıtlanamıyorsa uydurma;
- thumbs feedback'i correctness yapma;
- topic_matched=false topicless/quarantine.

### M12

- mevcut server review snapshot;
- reviewed_at yoksa zaman uydurma;
- local fallback açık kullanıcı kapsamlı import olmadan server backfill değildir.

### M31

- participant current snapshot ve güvenilir aggregate duration;
- scheduled duration'ı attended duration yapma;
- current total'dan sahte join/leave dizisi üretme.

### M33

- yalnız shared_with_student=true mevcut snapshot;
- private/unshared özet evidence üretmez;
- student_feedback varsa dar enum snapshot;
- private note, public text ve board yok.

### M36

- mevcut hedef profil snapshot;
- grade gerçek kolonundan;
- target_exam bağlamı;
- başarı ölçümü yok;
- profil geçmişi yoksa eski değişim dizisi uydurma.

### Negatif kaynaklar

M01, M02, M32 ve M38 için provider yazma. Bunlar explicit derived/excluded kararıdır.

Her provider için:

- dry-run sıfır write;
- öğrenci batch/date scope;
- opak cursor;
- pause/cancel/resume;
- poison record izolasyonu;
- duplicate/conflict/quarantine sayıları;
- kişisel verisiz hata;
- sentetik apply;
- aynı apply ikinci kez created=0;
- source/evidence reconciliation;
- canlı provider çağrısı yapılmadığı kanıtı.

## Sağlık, capability ve uzlaştırma

Her pozitif kaynak şu durumları ayırmalıdır:

- available: şema ve writer hazır;
- empty: kaynak hazır fakat öğrenci kaydı yok;
- degraded: kısmi uyuşmazlık, pending repair veya quarantine var;
- unavailable: gerekli migration/RPC yok.

Derived/excluded kaynak unavailable sayılmamalı; kendi karar durumunu göstermelidir.

Ölç:

- source row sayısı;
- expected evidence sayısı;
- effective evidence sayısı;
- duplicate;
- conflict;
- quarantine;
- orphan;
- pending receipt;
- stale processing claim;
- correction;
- tombstone;
- source/evidence farkı.

Metrikler düşük kardinaliteli ve kişisel verisiz olmalıdır. Student ID, soru, not, teacher reply, model output, URL/path, JWT, e-posta veya serbest DB error mesajı loglama.

Uzlaştırma repair işlemi otomatik ham içerik kopyalamamalı. Yalnız idempotent kaynak provider ile yeniden işlemelidir.

## Zorunlu ürün/UI doğrulaması

Aşağıdaki yüzeyleri gerçek öğrenci ve öğretmen sentetik hesaplarıyla doğrula:

- DailyLogForm;
- DailyLogEditModal;
- MockExamForm;
- MockExamList ve diğer silme yüzleri;
- AddExamForm;
- BranchExamList;
- HomeworkForm;
- HomeworkList;
- QuestionForm;
- QuestionInbox ve ReplyBox;
- çözüm tuvali paylaşımı;
- yeni öğretmen→öğrenci sorunlu soru formu;
- öğrenci Sorunlu Sorular listesi;
- AISolve;
- AISolveHistory;
- canlı ders lobby/studio ayrılma;
- LessonSummaryPage öğretmen ve öğrenci görünümü;
- Profile sınav hedefi formu;
- ilgili Home/Analytics/teacher/parent görünüm regresyonları.

Her ilgili yüzeyde:

- loading;
- empty;
- validation;
- saving;
- saved;
- offline/pending;
- retry;
- conflict;
- permission denied;
- degraded;
- unavailable;
- double click;
- refresh;
- browser back;
- account switch;
- success ack;
- teknik olmayan hata dili.

Kaydetme başarısızken form alanları silinmemeli. Sunucu ack gelmeden başarı toast'ı gösterilmemeli.

Erişilebilirlik:

- semantik form/label;
- klavye;
- görünür focus;
- modal focus trap;
- Escape;
- modal kapanınca odağın tetikleyiciye dönmesi;
- en az 44×44 dokunma hedefi;
- screen reader durum mesajı;
- renk dışı durum göstergesi;
- reduced motion;
- uygun kontrast.

Görsel doğrulama en az:

- 1440×900 masaüstü;
- 768×1024 tablet;
- 390×844 telefon.

Kanıt görüntülerinde gerçek öğrenci verisi kullanma.

## Faz 4 otomatik test sistemi

Oluştur:

- scripts/test-phase-4-academic-records.mjs
- gerekiyorsa scripts/run-phase-4-regressions.mjs
- package.json içinde test:ai-koc-faz-4

Faz 4 çekirdek testi gerçek SQL'i geçici yerel PostgreSQL/PGlite ortamında çalıştırmalıdır. Yalnız regex, dosya varlığı veya doküman sayımı kabul değildir.

PGlite seri bağlantısının gerçek çok bağlantılı concurrency kanıtı olmadığını raporla. Mümkünse mevcut ortamın izin verdiği paralel çağrı testi yap; gerçek PostgreSQL yarış sertifikasını Faz 9'a bırak.

### Zorunlu bütünleşik senaryolar

#### P4-S01 — aynı konu çok kaynak

Aynı sentetik konu için:

- external daily self-report;
- platform içi Faz 3 direct question sonucu;
- sorunlu soru exposure;
- AI Solve help;
- teacher feedback;
- homework status;
- live summary feedback.

Beklenti:

- hepsi aynı doğrulanmış topic'e bağlanabiliyorsa ortak kimlik;
- evidence class ve provenance ayrı;
- direct measurement dışındakiler direct sayılmaz;
- ham metin/URL yok;
- fuzzy otomatik merge yok.

#### P4-S02 — günlük correction/tombstone

- create;
- aynı action 2 ve 10 retry;
- farklı payload conflict;
- teacher correction;
- no-op correction;
- delete;
- effective 40→20→0;
- başka öğrenci reddi.

#### P4-S03 — genel deneme atomikliği

- LGS parent + birden çok child;
- bir child hata injection;
- sıfır parent/child/evidence commit;
- başarılı retry;
- child order değişse de aynı canonical payload;
- LGS /3 net;
- süre yalnız bir kez;
- parent delete bütün etkileri kaldırır.

#### P4-S04 — branş denemesi provenance

- student entry;
- authorized teacher entry;
- unrelated teacher rejection;
- unknown exam_type;
- legacy score;
- LGS /3;
- delete tombstone;
- teacher event student self-report olarak yanlış etiketlenmez.

#### P4-S05 — ödev rol sınırı

- authorized teacher assign;
- unrelated teacher reject;
- student sees;
- student only status update;
- student title/student_id/teacher_id/due_date mutation reject;
- completed success/correctness değildir;
- teacher no-op;
- delete/tombstone;
- live lesson homework aynı RPC.

#### P4-S06 — iki yönlü sorunlu soru

- student submits text;
- student submits private image;
- teacher text reply;
- teacher image-only reply;
- teacher finalized canvas-only reply;
- status-only update;
- teacher directly assigns problem to active student;
- unrelated teacher rejection;
- student cannot change teacher fields;
- solved hiçbir yerde student_correct üretmez;
- common metadata ham içerik/path taşımaz.

#### P4-S07 — AI Solve durable claim

- aynı solve action eşzamanlı iki istek;
- deterministik stub bir kez çağrılır;
- processing duplicate ikinci çağrıyı başlatmaz;
- completed retry aynı session sonucunu döndürür;
- payload drift conflict;
- finalize rollback;
- authenticated student model alanı forge edemez;
- başka session erişimi yok;
- paid model call sayısı sıfır.

#### P4-S08 — AI Solve event ayrımı

- solution_requested help_used değildir;
- why/stuck tek help event ve tek counter;
- aynı help retry çoğalmaz;
- check model_inference;
- explicit self result student_self_report;
- thumbs feedback correctness değildir;
- topic_matched=false konuya bağlanmaz;
- raw question/model output evidence'a girmez.

#### P4-S09 — review state

- pending;
- completed;
- no-op;
- geri alma correction;
- refresh;
- başka öğrenci reddi;
- user-scoped local fallback;
- aynı import retry çoğalmaz;
- reviewed eski yanlış/help evidence'ını silmez.

#### P4-S10 — canlı ders katılımı

- student join;
- reconnect;
- leave;
- aynı leave retry;
- total duration bir kez;
- teacher join öğrenci evidence'ı değildir;
- unrelated user reject;
- attendance exposure;
- scheduled duration kullanılmaz.

#### P4-S11 — paylaşılmış özet

- teacher draft;
- evidence sıfır;
- share;
- teacher correction;
- student feedback;
- feedback no-op;
- student teacher alanını değiştirmeye çalışır;
- unshare/delete destekleniyorsa tombstone;
- private note/public text/board/path common evidence'da yok;
- yanlış student_id enjeksiyonu etkisiz.

#### P4-S12 — negatif yüzeyler

- Home render;
- Analytics render;
- teacher dashboard render;
- parent dashboard render;
- board draw;
- chat;
- camera/mic;
- material open.

Beklenti: M01/M02/M32/M38 için sıfır yeni temel evidence.

#### P4-S13 — profil bağlamı

- öğrenci hedef günceller;
- context_only snapshot;
- grade mapping doğru;
- no-op;
- correction;
- full_name update yeni M36 evidence üretmez;
- role/student_id enjeksiyonu reddedilir;
- başka öğrenci reddi;
- mastery ölçümü sıfır.

#### P4-S14 — backfill dürüstlüğü

- her pozitif kaynak fixture;
- dry-run sıfır write;
- apply;
- ikinci apply created=0;
- legacy belirsizlik karantina/no-history;
- pause/cancel/resume;
- poison record izolasyonu;
- source/evidence uzlaştırması;
- canlı veri sıfır.

#### P4-S15 — deterministik replay

- event, snapshot, correction ve izinli tombstone kayıtları;
- normal ve karışık ingest sırası;
- aynı effective checksum;
- cross-student target/fork/cycle reddi;
- low-level defter değişmedi.

#### P4-S16 — account switch ve outbox

- öğrenci A pending action;
- sign out;
- öğrenci B sign in;
- A payload'u gönderilmez;
- A geri döner;
- aynı action retry;
- bir kayıt;
- sensitive payload localStorage'da yok.

## Hedefli testler ve son regresyon

Paket içinde yalnız ilgili hedefli testleri çalıştır.

Son kabulde en az şu komutları gerçek package.json adlarıyla çalıştır:

- npm run test:ai-koc-faz-1
- npm run test:ai-koc-faz-2
- npm run test:ai-koc-faz-3
- npm run test:ai-koc-faz-4
- npm run test:parent-rls
- npm run test:live-lessons
- npm run test:teacher-notifications
- npm run test:ai-solve
- node scripts/test-ai-coach.mjs
- node scripts/test-exam-stats.mjs
- npm run test:anasayfa
- npm run build

Bir komut package.json içinde yoksa kendiliğinden passed sayma. Gerçek dosya varsa doğru çağrıyı kullan; yoksa nedenini skipped/failed olarak kaydet.

Faz 3 testi manifest build'i çalıştırdığı için her küçük değişiklikten sonra tekrarlama. Son kabulde bir kez çalıştır; Faz 3 alanına dokunduysan hedefli olarak daha erken çalıştırabilirsin.

UI testleri için mevcut test altyapısını kullan. Yeni ağır test bağımlılığı sırf kolaylık için ekleme.

## Performans kapıları

Sentetik en az:

- 10.000 daily/exam/homework/question/review/attendance revision karışımı;
- 1.000 pending receipt;
- 1.000 backfill item;
- çok child'lı mock exam batch.

Şunları kaydet:

- ilgili query plan/index kullanımı;
- effective view/reconciliation süresi;
- backfill batch süresi;
- receipt lookup;
- student-scoped list;
- correction/tombstone replay;
- bundle etkisi.

Kesin milisaniye hedefi uydurma. Mevcut baz çizgiyle karşılaştır; full table scan veya öğrenci filtresiz sorgu bırakma. Evidence ingest sırasında ham içerik fetch etme.

## Beklenen dosya teslimi

Dosya adları gerçek mimariye göre şekillenebilir; ancak en az şu teslim sınıfları bulunmalıdır:

- supabase/migration_learning_academic_records.sql;
- docs/ai-koc/FAZ_4_ANA_AKADEMIK_KAYIT_MIMARISI.md;
- src/lib/learning/academicActivity/ altında istemci/outbox/health/backfill parçaları veya eşdeğer yer;
- kaynak-özel UI/API entegrasyonları;
- AI Solve dar server writer/claim-finalize katmanı;
- iki yönlü sorunlu soru ürün akışı;
- canlı ders idempotent attendance ve güvenli summary RPC'si;
- scripts/test-phase-4-academic-records.mjs;
- scripts/run-phase-4-regressions.mjs veya eşdeğer runner;
- package.json test:ai-koc-faz-4 komutu;
- güncel mimari ve durum belgeleri;
- makine üretimli Faz 4 kabul kanıtları.

Dosya sayısı amaç değildir. Ortak davranışı paylaş; source-specific güven sınırlarını tek genel event endpoint'inde eritme.

## Dokümantasyon ve kanıt çıktıları

Güncelle:

- docs/ai-koc/FAZ_DURUMU.md
- docs/ai-koc/VERI_KAYNAKLARI_MATRISI.md
- docs/ai-koc/VERI_AKISLARI.md
- docs/ai-koc/MIMARI_KARARLAR.md
- docs/ai-koc/KAYNAK_KAYIT_DEFTERI.md
- docs/ai-koc/VERI_AGI_CEKIRDEK_MIMARISI.md
- docs/ai-koc/README.md
- supabase/setup_new_project.sql içindeki yalnız migration sırası açıklaması.

Oluştur:

- docs/ai-koc/FAZ_4_ANA_AKADEMIK_KAYIT_MIMARISI.md
- docs/ai-koc/kanitlar/faz-4/faz-4-kabul-sonucu.json
- docs/ai-koc/kanitlar/faz-4/faz-4-kaynak-kapsami.json
- docs/ai-koc/kanitlar/faz-4/migration-sema-ozeti.json
- docs/ai-koc/kanitlar/faz-4/backfill-dry-run-sonucu.json
- docs/ai-koc/kanitlar/faz-4/guvenlik-yetki-matrisi.json
- docs/ai-koc/kanitlar/faz-4/gorsel-dogrulama.md
- docs/ai-koc/kanitlar/faz-4/guvenlik-testleri.log
- docs/ai-koc/kanitlar/faz-4/regresyon-testleri.log
- docs/ai-koc/kanitlar/faz-4/build.log

Kabul JSON'u runner tarafından gerçek sonuçlardan üretilmelidir. Elle bütün alanları passed yazma.

Kabul çıktısı en az şunları taşımalı:

- çalışma yolu;
- branch ve HEAD;
- başlangıç dirty dosya listesi;
- ilgisiz değişikliklerin korunduğu;
- Faz 2 ve Faz 3 checksum'ları;
- Faz 4 migration checksum'u;
- migration first apply/rollback/second apply;
- schema/table/function/index/constraint/policy/grant envanteri;
- source registry/SQL/adapter parity;
- her kaynak event/evidence dağılımı;
- negative source sonuçları;
- idempotency/çatışma;
- atomiklik failure injection;
- correction/tombstone/effective checksum;
- RLS actor matrisi;
- storage erişim sonucu;
- backfill sayıları;
- health durumları;
- UI viewport/erişilebilirlik sonucu;
- her komutun süresi/exit code/log yolu;
- skipped/failure ve gerçek gerekçesi;
- gerçek concurrency sınırı;
- side effects bayrakları.

Side effects alanları açıkça false olmalı:

- live_supabase_read;
- live_supabase_write;
- live_schema_change;
- real_student_data_used;
- live_backfill_run;
- live_seed_run;
- paid_model_call;
- deployment_performed;
- git_push_performed;
- source_marked_live_connected.

## Kabul kapıları

Faz 4 yalnız aşağıdakilerin tamamı kanıtlanırsa yerel olarak bitmiş sayılır:

1. Çalışma alanı doğru ve başlangıç dirty state kaydedildi.
2. Faz 1 ve Faz 2 testleri geçiyor.
3. Faz 2 checksum'u değişmedi.
4. Faz 3 46/46 kabulü ve testi geçiyor.
5. Faz 3 migration/manifest checksum'ları değişmedi.
6. Yeni Faz 4 migration'ı doğru sırada ilk kez uygulanıyor.
7. Kasıtlı hata ilk uygulamayı tam rollback ediyor.
8. İkinci migration uygulaması veri/nesne çoğaltmıyor.
9. Mevcut sentetik source kayıtları korunuyor.
10. Faz 4 registry/SQL/adapter parity geçiyor.
11. M03 çalışan create/correction/delete bağlantısına sahip.
12. M03 öğrenci beyanı olarak kalıyor.
13. M03 AI Koç onaylı yolunda M09 çift kanıtı oluşmuyor.
14. M04 parent+children+evidence tek transaction.
15. M04 child hatasında orphan parent yok.
16. M04 LGS /3, diğer bilinen türler /4.
17. M04 duration toplamı child sayısıyla katlanmıyor.
18. M04 subject sonucu konuya zorlanmıyor.
19. M04 parent delete bütün child etkilerini kaldırıyor.
20. M05 student ve authorized teacher provenance'ı doğru.
21. M05 schema fallback alanları sessizce düşürmüyor.
22. M05 unknown exam type/legacy score'dan net uydurmuyor.
23. M05 delete tombstone/effective davranışı doğru.
24. M06 atama ve status anlamları ayrı.
25. M06 tamamlandı direct measurement/correctness değil.
26. M06 öğrenci yalnız status değiştirebiliyor.
27. M06 öğretmen yalnız aktif bağlı öğrenciye atayabiliyor.
28. M06 canlı ders ödev yolu aynı writer'ı kullanıyor.
29. M07 question_submitted exposure; yanlış cevap değil.
30. M07 text/image/canvas teacher feedback doğru algılanıyor.
31. M07 status=Çözüldü student_correct üretmiyor.
32. Öğretmen→öğrenci sorunlu soru akışı gerçek UI/API/SQL ile çalışıyor.
33. Öğretmen ataması ayrı sürümlü semantic ve direct olmayan sınıfta.
34. M07 common evidence ham içerik veya URL taşımıyor.
35. Yeni medya akışı başka öğrenci/veli/anon erişimini reddediyor.
36. Legacy public medya riski çözüldü veya dürüst Faz 9 borcu olarak kayıtlı; tamamlandı iddiası yok.
37. M11 öğrenci model alanlarını forge edemiyor.
38. M11 durable claim aynı action'da ikinci model çağrısını engelliyor.
39. M11 completed retry aynı session'ı döndürüyor.
40. M11 session/event/evidence finalize atomik.
41. M11 help event+sayaç+evidence atomik ve retry-safe.
42. M11 check model_inference; direct measurement değil.
43. M11 explicit self result student_self_report.
44. M11 thumbs feedback correctness değil.
45. M11 solution_requested help_used değildir.
46. M11 topic_matched=false konuya bağlanmıyor.
47. M12 review snapshot/correction ve user-scoped fallback güvenli.
48. M12 reviewed eski evidence'ı silmiyor.
49. M31 leave retry duration'ı iki kez artırmıyor.
50. M31 yalnız öğrenci katılımını exposure olarak yazıyor.
51. M32 ham stream eylemleri sıfır evidence üretiyor.
52. M33 draft/unshared özet sıfır evidence üretiyor.
53. M33 teacher/student kimliği session'dan türetiliyor.
54. M33 share/update/unshare davranışı snapshot/correction/tombstone sözleşmesine uyuyor.
55. M33 private/public metin/board/path common evidence'a girmiyor.
56. M33 öğrenci yalnız kendi feedback enumunu yazabiliyor.
57. M36 yalnız context_only öğrenci öz bildirimi.
58. M36 grade gerçek kolondan doğru adapt ediliyor.
59. M36 role/student relation güvenliği bozulmuyor.
60. M01/M02/M38 yüzeyleri sıfır temel event üretiyor.
61. Aynı client action 2 ve 10 retry'da tek sonuç veriyor.
62. Aynı action farklı payload idempotency_conflict oluyor.
63. PGlite paralel test sınırı dürüst raporlanıyor; gerçek concurrency iddiası yok.
64. Kaynak/evidence failure injection yarım commit bırakmıyor.
65. No-op update correction çoğaltmıyor.
66. Cross-student correction target/fork/cycle reddediliyor.
67. Effective replay deterministik checksum üretiyor.
68. Başka öğrenci ve ilgisiz öğretmen erişimi reddediliyor.
69. Onaylı/bekleyen/ilişkisiz veli matrisi doğru.
70. Private ingest/audit/receipt güven sınırı normal rollere kapalı.
71. Direct source DML bypass yolu kalmadı veya açık uyumluluk kararıyla testli.
72. Common evidence/log/health/quarantine içinde ham kişisel içerik yok.
73. Her pozitif kaynak için backfill veya explicit no-history kararı var.
74. Dry-run yazmıyor ve ikinci sentetik apply created=0.
75. Tarih/transition/correctness uyduran backfill yok.
76. Available/empty/degraded/unavailable ve derived/excluded durumları ayrılıyor.
77. Source/evidence uzlaştırması kişisel verisiz çalışıyor.
78. Account switch outbox sızıntısı yok.
79. UI sunucu ack öncesi Kaydedildi demiyor.
80. Öğrenci/öğretmen temel akışları masaüstü/tablet/telefon ve klavyede doğrulandı.
81. Mevcut parent/live lesson/teacher notification/AI Solve/AI Koç/exam/home regresyonları geçiyor.
82. Production build geçiyor.
83. Faz 6/7/8 modeli, koç tüketimi ve plan eylemleri bu faza taşmadı.
84. Canlı Supabase, gerçek öğrenci verisi, gerçek backfill, ücretli model, deploy ve push kullanılmadı.
85. Kabul JSON'u gerçek runner çıktısından üretildi; çalışmayan hiçbir kapı passed değil.

## Faz durumu

Bütün yerel kabul kapıları geçerse FAZ_DURUMU.md içindeki Faz 4 satırını yalnız şu duruma getir:

Yerel olarak tamamlandı, canlı onay bekliyor

Açıklamada şunları yaz:

- Faz 4 migration ve bağlantılar geçici yerel PostgreSQL/PGlite/fixture üzerinde doğrulandı;
- M03–M07, M11–M12, M31, M33 ve M36 yerel kaynak ağına bağlandı;
- M01/M02/M32/M38 negatif sınırları doğrulandı;
- canlı migration, gerçek backfill, gerçek öğrenci verisi, ücretli model ve yayın kullanılmadı;
- gerçek çok bağlantılı yarış sertifikasyonu Faz 9'da kaldı;
- Faz 5 ve Faz 6 geliştirmesi başlayabilir;
- üretim kullanımı Faz 9/10 ve açık kullanıcı onayını bekler.

Bir kapı başarısızsa Faz 4 durumunu Devam ediyor bırak. Yalnız canlıya uygulanmadığı için Bloke yazma; bu beklenen durumdur.

## Durma koşulları

Aşağıdakilerden biri olursa kapsamı genişletip tahminle ilerleme:

- Faz 1/Faz 2/Faz 3 kabul testi veya checksum başarısız;
- güvenli çözüm canlı veriyi okumayı/değiştirmeyi gerektiriyor;
- mevcut gerçek öğrenci satırlarını silmeden migration tasarlanamıyor;
- source+evidence atomikliği yalnız genel ve sınırsız service-role endpoint'iyle mümkün görünüyor;
- AI Solve server güven sınırı istemciye secret taşımayı gerektiriyor;
- öğretmen→öğrenci soru akışı active relationship olmadan kurulabiliyor;
- media private geçişi yıkıcı canlı taşıma gerektiriyor;
- topic kimliği serbest metinden tahmin edilmek zorunda;
- önceki faz sözleşmesi geriye uyumlu sürümlenemiyor;
- temel teknoloji veya ücretli servis değişikliği gerekiyor;
- ilgisiz kullanıcı değişikliğiyle kaçınılmaz dosya çakışması var.

Bu durumda güvenli tamamlanan işi koru, FAZ_DURUMU.md içinde doğru durumu bırak ve kullanıcıya tek somut engeli bildir. Kabul kapısını düşürme ve çoğu çalışıyor diye bitmiş sayma.

## Faz sonu kullanıcı raporu

Kullanıcıya kısa ve düz Türkçeyle yalnız şunları bildir:

- hangi Faz 4 kaynaklarının yerel bağlandığı;
- öğretmen→öğrenci sorunlu soru akışının sonucu;
- günlük/deneme/ödev/AI Solve/canlı ders atomiklik ve anlam ayrımının sonucu;
- RLS, storage, idempotency, correction/tombstone ve backfill sonucu;
- geçen/başarısız/atlanan komut sayısı;
- kabul JSON'u ve ana mimari dosyasının yolu;
- canlı veritabanı, gerçek öğrenci verisi, ücretli model ve yayın kullanılmadığı;
- Faz 5/Faz 6'ya geçilip geçilemeyeceği;
- varsa tek gerçek açık sınır.

Kod dökümü, uzun süreç günlüğü veya kanıtlanmamış eksiksiz çalışıyor ifadesi verme.
