# Veri akışları — Faz 0

Tarih: 7 Eylül 2026. Bu belge mevcut kod yolunu gösterir; hedef mimariyi çalışıyor gibi sunmaz. Her zincir şu sırayla okunur:

> öğrenci eylemi → arayüz işleyicisi → yazma fonksiyonu/API → tablo veya yerel depo → AI Koç bağlamı/araç → öğrenciye çıkan sonuç

**KOPUK** işareti zincirin kalıcı kayıt, kullanıcı/konu kimliği, Koç okuması veya sonuç geri bildirimi aşamasında durduğunu gösterir. `→ Koç yok` bilinçli kapsam dışı akışlarda hata değildir. Tüm kimlik, tekrar, silme ve yetki ayrıntıları [kaynak matrisinde](VERI_KAYNAKLARI_MATRISI.md); Koç sorgu sınırları [envanterde](MEVCUT_DURUM_ENVANTERI.md) bulunur.

## Bugün AI Koç'a ulaşan akademik kaynaklar

| Kaynak | Mevcut zincir | Kırılma ve öğrenciye etkisi |
|---|---|---|
| Günlük dış çalışma | Öğrenci tarih/konu/süre/D/Y/B girer → `DailyLogForm.handleSubmit` → Supabase insert → `daily_logs` → `fetchStudentData`, `get_study_sessions`, `get_subject_detail`, hazırlık hesabı → Koç süre/soru/isabet ve konu önerisi verir | Konu serbest metindir, kayıt kimliği Koç bağlamına taşınmaz, sonuç öğrenci beyanıdır. Aynı çalışma yeniden gönderilirse veya deneme olarak da girilirse çift sayılabilir. Öğretmen düzeltmesi sonraki sorguya yansır; eski sohbet değişmez. Kanıt: `src/components/DailyLogForm.jsx:65`, `api/_lib/context.js:103`, `api/_lib/tools.js:417`. |
| Genel deneme | Öğrenci sınav ve ders sonuçlarını girer → `MockExamForm.handleSubmit` → önce `mock_exams`, sonra `mock_exam_subjects` insert → iki Supabase tablosu → `fetchStudentData` / `get_exam_detail` → tür içi son denemeler ve ders netleri | **KOPUK/atomiklik:** alt ders yazımı başarısız olursa boş üst kayıt kalır; yeniden deneme yeni üst kayıt oluşturur. Koç en yeni 10'u çeker ve bunu tam tarihsel toplam gibi adlandırabilir. Konu/kazanım yok; farklı sınav türleri birleştirilmemelidir. Kanıt: `MockExamForm.jsx:69–95`, `context.js:117`. |
| Branş denemesi | Öğrenci/öğretmen ders sonucu girer → `AddExamForm.handleSubmit` / `insertExam` → `exams` insert → Supabase → `fetchStudentData` → son branş sonuçları → Koç ders düzeyinde sonucu görür | Eksik şemada `exam_type`/`duration_minutes` düşürülüp yeniden yazılır; Koç bu alanları zaten seçmez. `topic` çoğu zaman ders metnidir, konu düzeyi çıkarım yapılamaz. Silme sonraki sorgudan düşer, eski mesajda kalır. Kanıt: `AddExamForm.jsx:27–117`, `context.js:124`. |
| Ödev | Öğretmen ödev atar → `HomeworkForm.handleSubmit` veya canlı ders özeti → `homeworks` insert → öğrenci `HomeworkList.toggleStatus` ile update → `fetchStudentData` / `get_homeworks` → Koç bekleyen/geciken/tamamlanan yükü gösterir | Atanma başarı değildir; tamamlanma öğrenci durum beyanıdır ve soru sonucuna bağlı değildir. Tekrar atama kopya yaratabilir. RLS güncellemesi sahipliği denetler, kolon düzeyinde yalnız `status` ile sınırlı değildir. Kanıt: `HomeworkForm.jsx:33`, `HomeworkList.jsx:49`, `context.js:131`. |
| Sorunlu soru | Öğrenci metin/görsel gönderir → `QuestionForm.handleSubmit` → `question-images` upload + `questions` insert → öğretmen `ReplyBox`/durum update → `fetchStudentData` → Koç konu/durum/yanıt varlığını özetler | Koç soru içeriğini, öğretmen cevabını veya çözüm sonucunu okumaz. Yükleme başarı/yanlış kanıtı değildir. Görsel kovası herkese açık okunur; tablo RLS'si dosyayı özel yapmaz. Kanıt: `QuestionForm.jsx:38–66`, `QuestionInbox.jsx:38–69`, `context.js:138`. |
| AI Koç tercih hafızası | Öğrenci konuşmada hedef/tercih söyler → model `update_student_memory` teklifi üretir → `ActionCard.handleRun` sonrası `/api/ai-coach/action` → `ai_student_memory` upsert → `fetchStudentData` → sonraki sohbet/öneri | UI onayı vardır; kalıcı tek-kullanımlık onay kaydı yoktur. Koç bu kaynağı kullanırken AI Soru Çöz `profiles.target_exam` kullanır; iki hedef ayrışabilir. Eski değer ve kaynağı kaybolur. Kanıt: `src/components/ai/ActionCard.jsx:60`, `api/_lib/tools.js:1030`. |
| AI Koç planı | Model plan teklif eder → onay kartı → `/action` → `create_study_plan` → `ai_study_tasks` toplu insert → `get_study_plan` / Koç bağlamı / ana sayfa kartı → öğrenci planı ve tamamlanma oranını görür | **KOPUK:** aynı kart yeniden açılıp onaylanırsa yeni satırlar oluşur. Madde bir içerik sonucu ile bağlı değildir; düğme ile tamamlanması akademik başarı sayılmaz. Teklif gerekçesi plan satırında saklanmaz. Kanıt: `api/_lib/tools.js:962–1011`, `context.js:150`. |
| Koç üzerinden günlük kayıt | Model günlük kayıt teklif eder → onay kartı → `/action` → `log_study_session` → `daily_logs` insert → normal günlük bağlam → öğrenci sonraki analiz/sohbette görür | Yeniden onay ikinci kayıt üretir; plan maddesi veya sohbet/teklif kimliğiyle bağlı değildir. Öğrenci beyanı olarak kalmalıdır. Kanıt: `api/_lib/tools.js:1013–1028`. |

## AI Koç sohbet ve Soru Çöz akışları

| Kaynak | Mevcut zincir | Kırılma ve öğrenciye etkisi |
|---|---|---|
| Koç sohbeti | Öğrenci mesaj gönderir → `AICoach.submit` / `aiCoach.chat` → `/api/ai-coach/chat` kimlik+kota → alan tabloları, son 12 mesaj ve araçlar → model → `ai_messages` → metin/aksiyon kartı | **KOPUK:** kullanılan kaynak satır kimlikleri ve araç sonuçları mesajla saklanmaz; `summary` alanını üreten yol yoktur. Eski düzeltilmiş/silinmiş gerçek son 12 mesajda yaşayabilir. Araç sonucu 8.000 karakterde kesilir. Kanıt: `src/pages/AICoach.jsx:139`, `api/ai-coach/chat.js:131–246`. |
| Ana sayfa Koç kartı | Öğrenci ana sayfayı açar → `getBriefing` → `/api/ai-coach/briefing` → `fetchStudentData` ve kural motoru → yalnız yanıt → kart/öneri | Model çağrısı ve yeni öğrenme olayı yoktur. Kaynak hatalarının `degraded` durumu yanıta taşınmadığından “veri yok” ile “bazı veri okunamadı” öğrenciye ayrışmaz. Kalıcı `ai_daily_briefs` tablosu yoktur; kart anlık hesaplanır. Kanıt: `api/ai-coach/briefing.js`. |
| İlk AI soru çözümü | Öğrenci fotoğraf/metin verir → `AISolve.handleSubmit` → görsel upload + `/api/ai-solve/solve` → sınıflandırma/çözüm/doğrulama/konu eşleme → `ai_solution_sessions` → Koç son 30 gün/60 başarılı oturum özetini okur → çözüm tahtası ve sonraki Koç yorumu | Aynı soru için istemci olay kimliği yok; tekrar yeni oturum/görsel üretir. `canonical_topic` sabit graph kimliği değildir. Modelin çözmesi öğrencinin doğru cevap verdiğini göstermez. Kayıt başarısızsa çözüm ekranda görünür ama geçmiş/yardım zinciri kopar. Kanıt: `api/ai-solve/solve.js`, `api/_lib/solve/persistence.js:231`, `context.js:194`. |
| İlk “Neden?” | Öğrenci adımda “Neden?” der → `Whiteboard.StepHelpBar` → mevcut `step.why` metni yerelde açılır → **yazma/API/depo yok** → **Koç yok** → açıklama ekranda görünür | **KOPUK:** anlamlı sürtünme sinyali kalıcı değildir. Kanıt: `src/components/aiSolve/Whiteboard.jsx:382`. |
| Ek açıklama / takıldım | Öğrenci daha fazla açıkla/takıldım der → `AISolve.runAsk` → `/api/ai-solve/ask` → `recordEvent` + ayrı `bumpHelpCounter` → `ai_solution_events` + oturum sayacı → Koç yalnız `help_requested` toplamını okur → öğrenci açıklamayı görür | Olay ile sayaç atomik değildir; hata dönüşü eksik denetlenir; yeniden gönderim çift olaydır. Koç hangi adım/soruda yardım istendiğini görmez. Serbest `chat/alternative` sayaç sınırına dahil değildir. |
| Kendi sonucunu bildirme | Öğrenci “doğru/yanlış yaptım” der → `reportSelfResult` → `/sessions` → `student_correct` update → `ai_solution_sessions` → Koç yanlış öz sonuç sayısını okur → sonraki yorum | Beyan ile model kontrolü aynı alanı birbirinin üstüne yazar; kaynak türü yoktur. Doğru beyan eski `error_type` alanını temizlemez. Öğrencinin kendi çözüm adımları saklanmaz. |
| Çözümü kontrol ettirme | Öğrenci kendi çözüm görselini verir → `CheckWorkPanel` → `/check` → model kontrolü → varsa check olayı + oturum `student_correct/error_type` update → Koç sınırlı özeti → model geri bildirimi | Oturum yoksa kontrol sonucu kalıcı öğrenme kaydı üretmez. İlk hata ayrıntısı ve düzeltme tahtası kalıcı oturumda tutulmaz; update sonucunda etkilenen satır kontrol edilmez. |
| Çözüm geri bildirimi | Öğrenci beğeni/neden/not gönderir → `FeedbackBar` → `/sessions` → oturum feedback alanları update → `ai_solution_sessions` → **Koç bu alanları okumaz** → ekranda teşekkür | **KOPUK:** “çözüm yanlış” bildirimi sonraki Koç analizinde çözüm kanıtını geçersizleştirmez. Aynı satır ezildiğinden geri bildirim geçmişi yoktur. |
| Çözüm geçmişi/tekrar | Öğrenci tekrara al/tamamla der → `AISolveHistory.changeReview` → önce `drkoc-ai-solve-reviews:<userId>`, sonra `/sessions` → `review_status/reviewed_at` veya yalnız yerel yedek → geçmiş ekranı → **Koç tekrar durumunu okumaz** | **KOPUK:** sunucu şeması eksikse cihazlar arası devam yoktur. UI ilk 50 oturumu getirir. Tekrar tamamlanması eski yanlış/yardım özetini Koç'tan düşürmez. |

## Ders ve soru kütüphanesi

| Kaynak | Mevcut zincir | Kırılma ve öğrenciye etkisi |
|---|---|---|
| Veritabanı yapılandırılmış ders | Öğrenci dersi açar/quiz cevaplar/bölümleri tamamlar → `LessonReader` etkileri ve `recordEvent` → `void supabase.from('lesson_activity_events').insert(...)` → hedef tablo `lesson_activity_events` → **Koç okumaz** → ders ekranı yine çalışır | **KOPUK, yazma başlamıyor:** kurulu PostgREST istemcisi isteği thenable tüketildiğinde başlatır; yalnız `void` ile bırakılan çağrı sıfır istek üretir. Sentetik kanıt: `kanitlar/faz-0/lesson-event-thenable.mjs`. Ayrıca `osym_simulation_answered` SQL CHECK listesinde yoktur. |
| Ders kişiselleştirmesi | DB dersi açılır → `buildPersonalization` → `daily_logs`+profil oku, readiness hesapla, `.then` tüketilen cache insert → `lesson_personalizations` → **Koç okumaz** → öğrenciye kurallı ders üst katmanı | Son 160 günlük kaydı konu adını `includes` ile eşler; paketli dersler tamamen atlanır. Bu bir öğrenme sonucu değil, türetilmiş sunumdur. |
| Ders sesli anlatım konumu | Öğrenci anlatımı açar/ilerletir → `LessonNarrationPlayer` → `writeNarrationProgress` → `sessionStorage` `drkoc:narration:v1:<lessonSlug>` → **Koç yok** → aynı sekme oturumunda kaldığı yer | Kullanıcı kimliği yoktur, tarayıcı kapanınca devam kaybolur; dinlemek başarı değildir. |
| Paketli yapılandırılmış ders | `bundled-<slug>` dersi açılır/quiz çözülür → aynı `LessonReader` işleyicileri → `is_bundled` tüm olay ve kişiselleştirme yazısını erken keser → yalnız bileşen state → **Koç yok** → anlık geri bildirim | **KOPUK:** cevap/tamamlama yenilemede kaybolur. DB UUID FK şeması paketli slug kimliğini doğrudan kabul etmez; içerik sürümü sonuçla bağlanmaz. |
| PDF/görsel/metin ve Ham Bilgi notu | Öğrenci kartı açar, PDF sayfasına bakar veya yazdırır → `LibraryNoteCard` / `PdfViewer` / `HamBilgiNotuSeridi` → yazma yok → katalog/dosya yalnız okunur → **Koç yok** → içerik gösterilir | Açma tek başına öğrenme kanıtı değildir. Herhangi bir ölçülebilir alıştırma/tamamlama bağlı değildir. |
| Veritabanı soru seti | Öğrenci seti açar → `loadQuestionSet` `library_question_sets` okur → seçenekler `TopicTestSolve.answers` state'ine yazılır → bitişte `history.state` ile `TopicTestResult` → **sunucu yazısı ve Koç yok** → D/Y/B/yüzde/çözümler | **KOPUK:** yenileme/derin bağlantıda “Sonuç Bulunamadı”. Hazır `student_question_set_attempts` tablosu hiç kullanılmaz; süre ve tekrar denemesi yoktur. |
| Paketli soru seti | Öğrenci repo soru setini açar → ders özel loader/BUNDLED_SETS → aynı state ve sonuç ekranı → yazma yok → **Koç yok** → anlık sonuç | DB yolu ile aynı kopukluklara ek olarak paketli metin kimliğinin hazır UUID FK ile uyumu yoktur. `student_topic_test_progress` ve `student_test_answers` tabloları da hiçbir UI/API tarafından kullanılmaz. |

## Dört dil — birbirinden ayrı akışlar

Dört akış aynı motorun kopyalarıdır fakat **ayrı anahtarlar ve içerikler** kullanır. Bu nedenle tek bir “diller çalışıyor” iddiasıyla birleştirilmez.

| Dil | Mevcut zincir | Kırılma ve öğrenciye etkisi |
|---|---|---|
| İngilizce | Öğrenci başlangıç/tespit/ders/tekrar/yazma/düşünme/kart akışını yapar → `src/pages/ingilizce/*` → `profilKaydet`, `tespitKaydet`, `dersTamamla`, `gunlukKaydet`, `beceriGuncelle`, `ilerlemeYaz` → `localStorage` `drkoc-ingilizce-v1` → **Koç yok** → dil ana sayfa/gelişim/öneri | **KOPUK:** kullanıcı kimliği ve bulut yok; başka cihaz boş, aynı cihazdaki başka hesap aynı kayıtları görür. Son durum/toplam geçmişi ezer; tekrar gönderim sayaçları artırır. `kartDesteleri`/`kartFavorileri` başlangıç şemasında yazılı olmasa da dinamik kaydedilir. |
| Almanca | Aynı eylemler → `src/pages/almanca/*` → Almanca ilerleme işlevleri → `drkoc-almanca-v1` → **Koç yok** → Almanca gelişim | İngilizceden ayrı içerik/anahtar, aynı kullanıcı/cihaz/tekrar boşlukları. |
| Fransızca | Aynı eylemler → `src/pages/fransizca/*` → Fransızca ilerleme işlevleri → `drkoc-fransizca-v1` → **Koç yok** → Fransızca gelişim | Fransızcaya özgü içerik sayıları baz testinde ayrıca doğrulandı; aynı kullanıcı/cihaz/tekrar boşlukları. |
| İspanyolca | Aynı eylemler → `src/pages/ispanyolca/*` → İspanyolca ilerleme işlevleri → `drkoc-ispanyolca-v1` → **Koç yok** → İspanyolca gelişim | İspanyolcaya özgü ayrı anahtar; aynı kullanıcı/cihaz/tekrar boşlukları. |

Telaffuz alt akışında MediaRecorder yalnız geçici Blob URL üretir; ses sunucuya veya ilerleme nesnesine kaydolmaz ve otomatik telaffuz puanı yoktur. Model sesini oynatma öğrenme başarısı sayılmaz. Kartlarda “biliyorum” öğrencinin öz beyanı; favori yalnız tercihtir. Düşünme ve ders alıştırmalarındaki cevap sonuçları doğrudan ölçüm potansiyeli taşır.

## Atlas, simülasyon ve pilotlar

| Kaynak | Mevcut zincir | Kırılma ve öğrenciye etkisi |
|---|---|---|
| Fizik Atlası | Öğrenci deney/görev/kontrol yapar → bölge bileşenleri / `Ogrenme` → `deneyiTamamla`, `seviyeTamamla`, `kavramKaydet`, `basarimKaydet` → `drkoc-fizik-ilerleme-v1` → **Koç yok** → yerel yüzde/rozet/kavram pusulası | Kullanıcı/cihaz ayrımı, olay kimliği ve ortak konu bağı yok. Boolean tamamlama tekrar çoğalmaz; kavram sayaçları aynı gönderimde artar. Tema `drkoc-fizik-tema` öğrenme değildir. |
| Biyoloji Atlası | Öğrenci tahmin+görev+kontrol yapar → `BiyolojiModulKabugu` → `etkilesimTamamla`/`hataKaydet` → `drkoc-biyoloji-v1` → **Koç yok** → yerel ustalık/hata/tekrar ekranı | Tamamlanma son durumu önceki deneme geçmişini tutmaz; kullanıcı/konu/olay sürümü yoktur. Tema ayrı ve öğrenme değildir. |
| Coğrafya Atlası | Öğrenci görev+kontrol veya TYT denemesi yapar → atlas bileşenleri → `etkilesimTamamla`, `hataKaydet`, `tytDenemeKaydet` → `drkoc-cografya-v1` → **Koç yok** → görev/hata ve son 20 deneme | Aynı deneme yeniden append edilir; yalnız son 20 tutulur; kullanıcı/kanonik konu yoktur. Tema ayrı ve öğrenme değildir. |
| Kimya Atlası | Öğrenci simülasyon/mini test kullanır → etkileşim bileşenleri / `MiniTest` → yalnız `useState` → kalıcı öğrenme deposu yok → **Koç yok** → anlık test sonucu | **KOPUK:** sayfa yenilemede ölçüm kaybolur. Yalnız `drkoc-kimya-tema` kalır; tema öğrenme sinyali değildir. |
| Tarih Atlası ve Padişah Geçidi | Öğrenci yıl/varlık/katman seçer veya zaman çizelgesini oynatır → sayfa state/URL parametreleri → kalıcı öğrenme yazısı yok; yalnız müzik tercihi `drkoc:padisah-muzik:v1` → **Koç yok** → harita/anlatı | Ham gezinme ve müzik tercihi öğrenme değildir. Ölçülebilir görev veya kontrol sonucu henüz tanımlı değildir; sessizce başarıya çevrilemez. |
| Geometri pilotu | Öğrenci dört soruyu cevaplar → `GeometriPilot.handleOptionSelect` / `calculateScore` → `selectedOptions/showResults` state → **Koç yok** → anlık doğru sayısı/çözümler | **KOPUK:** kullanıcı/deneme/konu kimliği ve kalıcı kayıt yok; yenilemede kaybolur. |

## Canlı ders, defter ve kapsam dışı özel içerik

| Kaynak | Mevcut zincir | Kırılma ve öğrenciye etkisi |
|---|---|---|
| Canlı ders katılımı | Öğrenci lobi/stüdyoya girer → `LessonStudio.boot/handleLeave` → `lesson_join`/`lesson_leave` RPC → `lesson_participants` → **Koç yok** → ders/katılım arayüzü | Katılım süresi ve odanın açık kalması başarı değildir. Oturum `drk-lesson-joined-<id>` yalnız aynı tarayıcı sekmesi davranışını korur. |
| Canlı ders tahtası/materyal | Öğrenci/öğretmen çizer ve materyal kullanır → `LessonBoard`/`liveLesson/api` → `lesson_board_save`, materyal CRUD ve gerçek zamanlı kanal → `lesson_board_pages`, `lesson_materials`, geçici ses/görüntü → **Koç yok** → ortak ders yüzeyi | Ham çizim, sohbet, ses ve video varsayılan olarak kapsam dışıdır. Ölçülebilir, yetkili bir öğrenme sonucu ayrıca tanımlanmadan ağa alınamaz. |
| Paylaşılan ders özeti | Öğretmen konu/not/sonraki hedef kaydeder ve paylaşır; öğrenci geri bildirim verir → `LessonSummaryPage` → `saveSummary` / `lesson_student_feedback` → `lesson_summaries` → **Koç yok** → paylaşılmış özet/geri bildirim | Öğrenmeye dönük nitel kanıt olabilir; konu serbest metindir. `lesson_private_notes` öğrenci/veli/Koç'a kapalı kalmalıdır. Özet upsert, ders ödevi ayrı insert olduğundan tekrar riski farklıdır. |
| Kişisel defter | Öğrenci yazar/çizer/ses ekler → `Defterim.save` → save buffer + repository → IndexedDB `drkoc-kisisel-defter-v1/defterler`, bayrak açıksa `save_student_notebook` → `student_notebooks` → **Koç yok** → cihaz/bulut kayıt durumu | Ham özel defter içeriği başarı kanıtı değildir. Yerel kayıt ownerId taşır; bulut varsayılan kapalı ve 4 MB üstü yazı reddedilir. Revizyon/requestId kopyasız yazma için iyi bir mevcut örnektir. |
| Mesajlaşma | Öğrenci/öğretmen mesaj/ek gönderir → `ChatThread` → messages CRUD / özel `chat-attachments` → Supabase → **Koç yok** → iki taraflı sohbet | Bilinçli kapsam dışı: özel mesajların tamamı genel öğrenme gözetimine alınmaz. İçinde eğitim sözü geçmesi onu otomatik kanıt yapmaz. |

## Yeni öğrenme sinyali üretmeyen destek yüzeyleri

| Yüzey | Zincir ve karar |
|---|---|
| `/kutuphane` geçidi, katalog listeleri | Seçim/arama → sayfa state ve katalog SELECT → yazma yok → Koç yalnız katalog adlarını araçla okuyabilir → içerik listesi. Gezinme öğrenme sonucu değildir. |
| `/profil`, kayıt/giriş, veli/öğretmen daveti, bildirim | Hesap/tercih/ilişki eylemi → Auth/`profiles`/ilişki/push tabloları → Koç yalnız ad ve rol doğrulamasını kullanır → hesap akışı. Hedef sınav onaylı profil gerçeği olabilir; akademik başarı değildir. |
| Açık sayfalar, tanıtım videoları, geliştirici önizlemeleri ve `*` yönlendirmesi | Statik/demo state → gerçek öğrenci yazısı yok → Koç yok → tanıtım/önizleme. Capture ve örnek veriler gerçek öğrenci geçmişine katılmaz. |
| Tema, kenar çubuğu, sınav anketini ertele, canlı ders cihaz rolü, tahta teşhisi, padişah müziği | Yerel/oturum tercihi → ilgili anahtar → Koç yok → arayüz davranışı. Eğitim sinyali değildir; veri ağına taşınması gerekmez. |

## Düzenleme, silme ve cihaz değişiminde ortak davranış

Bulut alan kaydı düzenlenir veya silinirse Koç'un bir sonraki taze sorgusu yeni durumu görür. Bununla birlikte eski `ai_messages`, teklif kartı, plan gerekçesi veya geçmiş öneri geçersiz işaretlenmez. Yerel dil/atlas kayıtları yalnız aynı tarayıcı profilinde kalır; kullanıcı kimliği taşımayanlar aynı cihazdaki hesaplar arasında ayrışmaz. Defter yerel anahtarında `ownerId`, AI çözüm tekrar yedeğinde kullanıcı kimliği vardır; yine de başka cihaz için bulut yazısının başarılı olması gerekir. Bu nedenle “kaynak güncel”, “eski analiz güncel” ve “başka cihazda devam eder” üç ayrı kabul koşuludur.

## Faz 3 yerel uygulama akışları — 11 Eylül 2026

Yukarıdaki tablolar Faz 0 başlangıç gerçeğini tarihsel olarak korur. Bu
bölüm M13–M26 için oluşturulan **yerel** Faz 3 yolunu kaydeder. Migration
canlıya uygulanmadı; Faz 6/7 AI Koç tüketimi de bu fazda eklenmedi.

### Ortak güven zinciri

`student action → source-specific hook → user-scoped outbox → source-specific
authenticated RPC → auth.uid + student role → trusted content/revision →
authoritative source row → Phase 1 semantic envelope → private ingest →
safe acknowledgement`

Kaynak satırı ve kanıt tek transaction'dır. İstemci yalnız kaynak kimliği,
içerik revizyonu, soru/görev/seçenek kimliği ve eylem UUID'si gönderir;
öğrenci kimliği, doğruluk, toplam, kanıt sınıfı ve konu anlamı
sunucuda belirlenir. Ayrıntı [Faz 3 içerik kayıt
mimarisindedir](FAZ_3_ICERIK_KAYIT_MIMARISI.md).

### Kaynak bazında yeni yerel zincir

| Kaynak | Faz 3 yerel zinciri | Yetkili sonuç ve kesinti davranışı |
|---|---|---|
| M13 Kütüphane geçidi | Arama/gezinme → katalog/state → yazıcı RPC yok | Katalog seçimi akademik kanıt değildir; sıfır olay beklenir. |
| M14 İçerik kataloğu | Paketli build veya DB içerik yazısı → `learning_content_revisions` + topic mapping/alias → öğrenci olayı yok | İçerik kimliği ve revizyonu sağlar. `unmatched/ambiguous` anlam karantinasıdır. |
| M15 DB ders | Ders eylemi → `useContentActivity` → `record_structured_lesson_event` / progress RPC → `lesson_activity_events` / `student_lesson_progress` → private alım | Quiz doğruluğu private madde kataloğundan gelir. Olay/kanıt atomik; şema yoksa mevcut UI çalışması korunur ve kayıt durumu açık kalır. |
| M16 Paketli ders | Aynı eylemler → `record_bundled_lesson_event` / bundled progress → `bundled_lesson_activity_events` / ortak progress → private alım | Paketli slug, manifest revizyonuyla kullanılır; DB UUID'sine zorlanmaz. |
| M17 Not maruziyeti | Not tam görüntülemesi → `record_library_note_open` → `library_note_exposure_events` → exposure kanıtı | Kart/listenin render edilmesi olay değildir; açma ustalık değildir. |
| M18 Kişiselleştirme | Kaynak kanıtları → mevcut kural/cache → ders sunumu | `derived_readonly`; ikinci temel kanıt üretmez. |
| M19 DB soru seti | Set+revizyon → start RPC → tek `student_question_set_attempts` satırı → answer/revision RPC'leri → server finalize → final kanıtı → `get_question_attempt_result` ile yenileme | Cevap sırasında doğruluk sızmaz. Final private anahtardan D/Y/B/marked/total hesaplar; yeni içerik eski denemeyi yeniden puanlamaz. |
| M20 Paketli soru seti | Public answersız manifest → M19 ile aynı ortak deneme yaşam döngüsü | Route state artık yetkili sonuç değildir. Outbox retry ve sunucu get-result yenilemeyi korur. |
| M21 Fizik atlası | Görev/kontrol → `useAtlasCloudActivity` → `record_physics_atlas_snapshot` → atlas state+revision → snapshot/correction kanıtı | Yerel kayıt anonim/bağlantısız pratikte korunur. Eski cihaz durumu yalnız açık, hash'li import ile sahiplenilir. |
| M22 Biyoloji atlası | Tahmin+kontrol → biology snapshot RPC → atlas state+revision → kanıt | Tamamlanma için tahmin/kontrol işareti doğrulanır; salt gezinme tamamlanma olmaz. |
| M23 Coğrafya atlası | Görev için geography snapshot; TYT akışı için server timed start/answer/finalize → ortak attempt → yalnız final kanıtı | Beş dakika sunucu `expires_at` ile belirlenir; cevap RPC'si doğruluk döndürmez. Refresh sunucu denemesini geri kurar. |
| M24 Kimya atlası | Mini test manifesti → server attempt → deterministik sekiz soru → answer/finalize/reset | Doğruluk private anahtardan gelir; geçersiz/geçmiş sürüm reddedilir. |
| M25 Tarih atlası | Harita/yıl/katman/müzik gezinmesi → UI/URL/local tercih → yazıcı RPC yok | `excluded`; ölçülebilir ayrı görev tanımlanmadan kanıt oluşmaz. |
| M26 Geometri pilotu | Sürümlü dört soru → server attempt/answer/finalize/reset → final sonuç | Boş final sunucuda da korunur; istemci puanı otorite değildir. |

### Düzeltme, reset ve cihaz değişimi

- Aynı cevap/görev durumu ve aynı eylem kimliği duplicate'tır; aynı
  eylem kimliği farklı payload ile conflict'tir.
- Cevap veya atlas durumu değişirse append-only correction oluşur; test
  reset'i etkin cevap/final kanıtlarına tombstone yazar, audit'i silmez.
- `drkoc:learning-outbox:v1:<userId>` hesaplar arasında paylaşılmaz.
- M21–M23 eski cihaz snapshot'ı sessizce yeni hesaba bağlanmaz; açık import
  makbuzu olmadan başka cihaz/hesap devamı iddia edilmez.

### Güncel kopukluklar

Yerel paket, Faz 2 kanıt ağına yazma zincirini kurar; AI Koç bu kayıtları
henüz öğrenci modeli olarak tüketmez. Son envanterde 110 soru seti cevap veya
seçenek biçimi nedeniyle karantinada, 1.804 konu bağı eşleşmemiştir.
Yerel tam paket 17/17 komut, üretim derlemesi, masaüstü/tablet/telefon
görsel kaydı ve 46/46 kabul kapısıyla geçti. Canlı şema, gerçek öğrenci/RLS
ve gerçek çok bağlantılı PostgreSQL yarışı ise çalıştırılmadı ve
başarılı sayılmadı. Bu nedenle bu bölüm Faz 0 “kopuk” satırlarının
canlıda kapandığı iddiası değildir.

## Faz 4 yerel akademik akışları — 13 Eylül 2026

M03–M07, M11–M12, M31, M33 ve M36 için yerel yazma zinciri şöyledir:

`ürün formu/eylemi → useAcademicActivity → kullanıcı kapsamlı outbox → kaynak-özel authenticated RPC veya dar AI Solve server finalizer → JWT/aktif ilişki/kaynak sahipliği doğrulaması → kaynak satırı + append-only kaynak revizyonu → learning_private.ingest_evidence → güvenli ack`

Kaynak ile kanıt aynı transaction'da tamamlanır. İstemci öğrenci/aktör rolü, evidence class/strength, konu kimliği, kaynak revizyonu veya correction hedefi seçemez. Günlük/deneme/ödev/soru anlamları ayrı RPC'lerde kalır; AI Solve dış model çağrısı transaction dışında dayanıklı `processing/completed/failed` claim ile tekilleştirilir ve yalnız tamamlanan claim dar sunucu finalizer tarafından yazılır.

Offline/geçici hata sunucu onayı gibi gösterilmez: eylem hesap kapsamlı kuyrukta kalır, kullanıcı teknik olmayan `bekliyor/yeniden dene` durumu görür ve yalnız `created/completed/duplicate/no_change` cevabı kaydedildi sayılır. Correction/tombstone append-only audit'i korur; etkin replay aynı sentetik veriyle deterministik checksum üretir.

Faz 4 historical provider matrisi 10 pozitif kaynak ve dört açık `no-history` kararı taşır. 1.000 sentetik kayıt dry-run'da sıfır yazı, ikinci sentetik apply'da sıfır yeni kayıt üretti. Canlı/gerçek backfill yapılmadı. AI Koç veya öğrenci modeli bu defteri tüketmez; bu görev yalnız kaynak yazma ve kanıt ağı bağlantısını kurar.

Yerel uçtan uca kabul 12/12 komut ve 85/85 kapıyla geçti. Canlı Supabase, gerçek öğrenci verisi, ücretli model, deploy ve push kullanılmadı; gerçek çok bağlantılı yarış Faz 9'a kaldı.
