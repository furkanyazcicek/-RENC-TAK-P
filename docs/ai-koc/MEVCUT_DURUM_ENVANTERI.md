# AI Koç — Mevcut Durum Envanteri

İnceleme tarihi: 7 Eylül 2026. Kapsam: Faz 0, yerel kaynak kodu ve depodaki SQL tanımları. Bu belge ürünün hedefini değil, bugün kodda bulunan davranışı anlatır. Canlı veritabanındaki tablo varlığı, kurulu geçiş sırası, gerçek öğrenci kayıtları ve sağlayıcı yanıt kalitesi bu incelemede sınanmadı. SQL politikası bulunması, canlı ortamda aynı politikanın etkin olduğunun kanıtı değildir. Test sonuçları ayrı olarak `BAZ_CIZGISI.md` dosyasındadır.

## 1. AI Koç'un bugün okuduğu kaynaklar ve sınırları

Ana yol `api/ai-coach/chat.js:131` → `buildStudentContext` → `fetchStudentData` → `buildFacts` → `renderContext` zinciridir. Her mesajda kaynak tablolar yeniden okunur; kalıcı ortak öğrenme olayı veya öğrenci-konu durum tablosu kullanılmaz. Günlük kart da aynı veriyi alır (`api/ai-coach/briefing.js:31`).

### 1.1. Otomatik bağlam sorguları

| Kaynak | Okunan alanlar | Tarih / satır sınırı | Bağlamda kullanılan sonuç ve sınır | Kod kanıtı |
|---|---|---|---|---|
| `profiles` | `id, full_name, role, created_at` | Doğrulanan kullanıcının tek profili | Rol denetimi; modele ilk ad. `grade`, `target_exam`, hedef yıl/tarih Koç tarafından okunmaz. | `api/_lib/auth.js:68`, `api/_lib/context.js:379` |
| `daily_logs` | `study_date, topic, duration_minutes, correct, incorrect, empty, notes` | Bugün dahil 90 gün; açık `.limit` yok, sayfalama yok | Son 7/30 gün süre, soru, isabet, seri; 30 günlük zayıf/güçlü konu; 90 günlük hazırlık hesabı. Kaynak `id` alınmaz. Not otomatik özete konmaz; ayrıntı aracı okur. | `api/_lib/context.js:103`, `:236`, `:369` |
| `mock_exams` + iç ilişkisi `mock_exam_subjects` | Üstte `id, exam_type, exam_name, exam_date`; altta `subject, correct, incorrect, empty, net` | En yeni 10 deneme; tarih alt sınırı yok | Son 3 ayrıntı, hedef/çıkarılan türde son en çok 6 net; türler karıştırılmıyor. Süre, öğrenci notu ve sonuç kaynağı alınmaz. `totalMock`, tüm hesap geçmişi değil çekilen en çok 10 satırdır. | `api/_lib/context.js:117`, `:294`, `:311`, `:417` |
| `exams` | `id, subject, topic, exam_date, correct, incorrect, empty, net` | En yeni 10 | Son 3 için ders/konu/tarih/net. `exam_type`, `score`, süre yok; branş sonuçları konu hazırlık hesabına girmiyor. `totalBranch` de en çok 10. | `api/_lib/context.js:124`, `:419` |
| `homeworks` | `id, title, description, due_date, status, created_at` | Teslim tarihi artan ilk 40; tamamlananları sorgu dışında bırakmaz; tarihsizler sonda | Bekleyen/gecikmiş/bugün/hafta ve tamamlama oranı bu pencere üzerinden; en çok 8 bekleyen başlık. Otomatik bağlam açıklamayı kullanmaz. Eski tamamlanan ödevler yeni bekleyenleri pencere dışına itebilir. | `api/_lib/context.js:131`, `:317`, `:427` |
| `questions` | `id, subject, topic, status, created_at, teacher_reply` | En yeni 20 | `Çözüldü` dışındakilerden en çok 5; konu, durum, yalnız metin yanıt var/yok. `open` toplam açık soru sayısı değil bu en çok 5 satır. Soru metni/görseli, öğretmen yanıt içeriği, yanıt görseli/tuvali ve arşiv durumu taşınmaz. | `api/_lib/context.js:138`, `:321`, `:440`, `:782` |
| `ai_student_memory` | `key, value, updated_at` | Kendi satırlarının tamamı; açık sınır/sayfalama yok | Anahtar/değer map'i; `updated_at` atılır. Hedef sınav ve sınav tarihi buradan alınır, yoksa son genel denemenin türü çıkarım olur. Hafıza için süre aşımı yok. | `api/_lib/context.js:145`, `:245`, `:606` |
| `ai_study_tasks` | `id, subject, topic, activity, planned_date, duration_minutes, status, plan_group` | Bugünden 7 gün önce ve sonrası; ileri tarih üst sınırı yok; tarih artan ilk 60 | Bugünün planı; sonraki 6 gün en çok 10; geçmiş aktif en çok 5; son 7 tamamlanmış günün madde ve dakika oranı. `completed_at`, plan gerekçesi, hedef içerik ve gerçekleşme kanıtı kullanılmaz. | `api/_lib/context.js:150`, `:331`, `:346`, `:449` |
| `ai_solution_sessions` | `subject, topic, canonical_topic, subtopic, difficulty, status, confidence, help_requested, student_correct, error_type, created_at` | Son 30 gün, yalnız `status='ok'`, en yeni 60 | Konu başına adet/yardım/ortalama zorluk/son tarih; en çok 8 konu, 5 hata türü, yanlış öz sonuç adedi. `id`, `topic_matched`, `exam_type`, geri bildirim, tekrar durumu, model doğrulama ayrıntısı ve olaylar yok. | `api/_lib/context.js:194`, `:480` |

Günlük sorgusunda açık satır sınırının bulunmaması sınırsız veri garantisi değildir: Supabase sunucu satır tavanı ve sayfalama eksikliği ayrıca önemlidir; canlı tavan ölçülmedi. Bağlam yapılandırmasındaki 8 ders, 6 zayıf konu, 3 genel deneme, 8 ödev, 5 soru sınırları `api/_lib/config.js:88` çevresindedir. Güçlü konu en çok 4, ders altındaki konu adı en çok 6'dır (`api/_lib/context.js:272`). Tek bir toplam karakter/token üst sınırı `renderContext` içinde yoktur; dosya başlığındaki yaklaşık token değeri ölçüm kabul edilmemelidir.

### 1.2. Talep üzerine okuma araçları

| Araç | Ek okuma / sınır | Dönüşte kaybolan veya hiç bulunmayan bilgi | Kod kanıtı |
|---|---|---|---|
| `get_study_sessions` | `daily_logs`; 1–90 gün, varsayılan 7; önce en yeni 120, sonra isteğe bağlı ders metin filtresi, modele en çok 60 | Tarih/konu/süre/D/Y/B/not var; kayıt kimliği yok. `count` 60'tan büyük olabilir; dönen liste tam geçmiş değildir. | `api/_lib/tools.js:417` |
| `get_subject_detail` | `daily_logs`; 7–90 gün, varsayılan 60; açık satır sınırı yok; ders adında içerme | Konu toplamı/soru/isabet/oturum/süre; yalnız dış çalışma beyanı, diğer kaynaklarla birleşmez. | `api/_lib/tools.js:460` |
| `get_exam_detail` | `mock_exams` + alt dersler; varsayılan 5, en çok 10; isteğe bağlı sınav türü | Genel deneme, branş denemesi değil; kimlik/süre/not yok. | `api/_lib/tools.js:515` |
| `get_homeworks` | `homeworks`; bekleyen/tamamlanan/tümü; en çok 30 | Başlık, en çok 200 karakter açıklama, teslim/durum/gecikme; kimlik yok. | `api/_lib/tools.js:555` |
| `get_curriculum_topics` | Ortak `library_subjects`: `id,name,exam_type`, ilk 60; ders adı filtrelenir. İlk 8 ders için `library_topics`: `subject_id,name,order_index`, toplam 200 | Öğrenci öğrenme kaydı değil katalogdur. Modele konu adları gider; kalıcı konu `id` alanı alınmaz. Konu bulunamazsa açık boş/hata sonucu. | `api/_lib/tools.js:586` |
| `get_learning_path` | Yeni tablo okumaz; `facts.learning`; hazır/erken listelerinde 1–15, varsayılan 8; ders kapsaması en çok 8 | Aynı 90 günlük günlük kaydı hazırlık hesabı; bütün öğrenme yüzeylerinin özeti değildir. | `api/_lib/tools.js:640` |
| `check_topic_prerequisites` | Yeni tablo okumaz; ders/konu adını `facts.learning` içinde çözer | Tek konu ön koşulları, engel zinciri ve öneri; kaynak satır bağı yok. | `api/_lib/tools.js:689` |
| `get_study_plan` | `ai_study_tasks`; varsayılan bugün−7 / bugün+14, en çok 60 | Kimlik/ders/konu/etkinlik/tarih/dakika/durum; gerçek çalışma sonucu ile bağlantı yok. | `api/_lib/tools.js:704` |

Araç sonuçları ayrıca JSON metninin ilk 8.000 karakterine kesilir (`api/ai-coach/chat.js:212`); kesilme bildirimi veya yapısal veri tamlığı işareti yoktur. Bugün AI Soru Çöz ayrıntısı/yardım olayları, ders etkinliği, test denemesi, dil, atlas, defter veya canlı ders sonucu için bir Koç okuma aracı bulunmaz (`api/_lib/tools.js:416`, `:930`).

### 1.3. Sohbet ve işletim tabloları

`ai_conversations` kimlik/başlık/tarih/`summary`/`summary_upto`; `ai_messages` rol/içerik/aksiyonlar/tarih; `ai_usage_events` öğrenci/tür/model/token/tarih taşır. Bunlar öğrenme başarısı değildir. Sohbet listesi en son güncellenen 30, tek sohbet ekranı tarih artan ilk 200 mesajı getirir (`api/ai-coach/conversations.js:58`, `:70`). Modele aynı sohbetteki en yeni 12 mesaj, mesaj başına ilk 1.500 karakter ve varsa sohbet özeti verilir (`api/ai-coach/chat.js:338`, `api/_lib/config.js:108`). 200 mesajdan uzun sohbette ekranın en eski 200'ü ile modelin son 12'si farklı pencerelerdir.

`summary` ve `summary_upto` şemada ve okuyucuda vardır; `api` / `src` taramasında sohbet özetini üreten veya güncelleyen yol bulunmadı. `summary_upto`, geçmiş süzmekte de kullanılmaz. Bu nedenle “uzun sohbetin eski kısmı otomatik özetlenerek korunuyor” iddiası doğrulanmaz. Model araç çağrıları, okuma sonuçları, kullanılan kaynak kimlikleri ve onay tamamlanma kaydı mesaj geçmişine kalıcı yazılmaz; yalnız son asistan metni ile teklif kartı yazılır (`api/ai-coach/chat.js:228`).

## 2. Prompt, onay, plan, güvenlik ve maliyet davranışı

### 2.1. Model davranışı ve ölçüm sınırları

`api/_lib/prompt.js:10` sürüm `v2` içerir. Sayı/konu uydurmama, eksik veriyi belirtme, aynı tür denemeleri kıyaslama, öğretmen ödevini koruma, ön koşulu kontrol etme, başarı garantisi/teşhis vermeme ve yazmayı onaya bırakma kuralları vardır. Yanıtta bağlantı kullanımı açıkça yasaktır (`api/_lib/prompt.js`, `BİÇİM` bölümü); mevcut planlar ilgili ders/test/tekrara doğrudan içerik bağlantısı üretmez.

Önemli mevcut çelişkiler:

- AI Soru Çöz yüklemesi durum raporunda “öğrenci buraya TAKILDIĞI soruyu yükler; kolay soruyu kimse fotoğraflamaz” diye yorumlanır (`api/_lib/context.js:700`). Bu, ürün hafızasındaki “yükleme tek başına yanlış veya zorlanma kanıtı değildir” kuralına uymaz. Burada tespit edilen gerçek, mevcut metnin varlığıdır; öğrencinin gerçekten zorlandığı değildir.
- `student_correct=false` için “kendisi yanlış çözmüştü” denir (`api/_lib/context.js:718`), fakat alan hem öğrenci beyanından hem model kontrolünden güncellenebilir. Kaynağı ayıran alan yoktur.
- Sadece zaman ayrılmış konu `readiness` içinde “öğrenilmiş, performans düşük” seviyesine girebilir. Sonuç ölçülmeden başarısızlık çıkarımı hedefle uyumlu değildir (`src/lib/curriculum/readiness.js:593`).
- Öğrencinin kendi notları ve kayıt başlıkları sistem isteminin içine eklenir; bu içeriklerdeki talimatları veri olarak sınırlandıran açık kural `buildSystemPrompt` içinde bulunmadı. Yazma kartı otomatik veritabanı mutasyonunu önler fakat yanlış analiz ve hatalı teklif riskini ortadan kaldırmaz.
- `PROMPT_VERSION` için “kullanım olaylarından izlenir” yorumu vardır; `recordUsage` satırına bu sürüm yazılmaz, şemada sürüm alanı yoktur (`api/_lib/ratelimit.js:100`, `supabase/migration_ai_coach.sql:200`).

### 2.2. Yazma onayı ve tekrar gönderim

Sekiz okuma aracı dışında dört yazma teklif aracı vardır: `create_study_plan`, `log_study_session`, `update_student_memory`, `complete_study_task`. `runTool` yalnız teklif döndürür; gerçek yazma `ActionCard.handleRun` → `/api/ai-coach/action` → `executeAction` sonrasında olur (`api/_lib/tools.js:930`, `src/components/ai/ActionCard.jsx:60`, `api/ai-coach/action.js:29`). Silme veya öğretmen verisini değiştirme aracı yoktur.

| Onaylanan işlem | Mevcut yazma | Tekrarlama / izlenebilirlik sınırı |
|---|---|---|
| Plan oluştur | `ai_study_tasks` toplu insert; en çok 12 madde, sunucu her uygulamada yeni `plan_group`; ders/konu/etkinlik/tarih/dakika/durum | Aynı kart tekrar onaylanırsa yeni plan satırları. Tekil aksiyon kimliği veya tekrar anahtarı yok. Teklifteki `reason` gösterilir ama plan satırına yazılmaz. |
| Günlük kayıt ekle | `daily_logs` insert; gün, `Ders - Konu`, 0–720 dk, D/Y/B ayrı 0–2000, 300 karakter not | Aynı istek yeni günlük satırı oluşturur. Plan maddesi veya sohbet/aksiyon kaydı ile kalıcı ilişki yok. |
| Tercih kaydet | `ai_student_memory` upsert; `(student_id,key)` tekil | Aynı anahtar yeni satır çoğaltmaz, değeri/tarihi ezer. Eski değer ve onay kaynağı tutulmaz. |
| Planı tamamla | Kendi `ai_study_tasks.id` için `status='tamamlandı'`, `completed_at=now()` | Yeniden gönderim aynı satırı günceller ama zamanı değiştirir. Günlük çalışma, test/başarı veya içerik sonucu otomatik oluşmaz. |

Kanıt: `api/_lib/tools.js:962`–`:1063`. Kartın `idle/running/done` durumu sadece React belleğindedir; sohbetten yeniden yüklenen aynı kart yeniden `idle` olur (`ActionCard.jsx:53`). `/action` kartı veritabanındaki bir onay kaydına bağlayıp doğrulamaz; gövdeyi yeniden doğrular ve kimliği oturumdan alır (`api/ai-coach/action.js:40`). Bu öğrenci sınırını korur; bir kez uygulama garantisi sağlamaz. Planın toplam gerçekleşmesi yalnız `status` ve planlanan süre toplamıdır, ölçülmüş başarı değildir (`api/_lib/context.js:351`).

### 2.3. Hafıza ve profil ayrışması

API beyaz listesi: `hedef_sinav`, `sinav_tarihi`, `hazirlik_durumu`, `hedef_bolum`, `hedef_net`, `calisma_saati`, `gunluk_hedef_dakika`, `zorlandigi_ders`, `notlar` (`api/_lib/tools.js:30`). Sınav LGS/TYT/AYT/KPSS, sınav tarihi biçim/gelecek denetimlidir; diğer alanlar çoğunlukla uzunluk denetimli serbest metindir. `notlar` 300 karakterdir; uzunluğu kısaltmak hassas içeriği otomatik ayıklamak değildir. Bu beyaz liste SQL sütun kısıtı değildir; doğrudan kendi tablo satırını yazma hakkı bulunan kullanıcı ek anahtar yazabilir, bağlam okuyucusu tüm anahtarları okur.

Koç hedefi `ai_student_memory` veya son genel denemeden bulurken, AI Soru Çöz `profiles.target_exam` okur (`api/ai-solve/solve.js:226`). Profilde hedef/tarih değiştirmek mevcut Koç hafızasını güncellemez; Koç'ta hedef kaydetmek de profili güncellemez. Dolayısıyla aynı öğrenci için iki AI yolunun sınav bağlamı farklı olabilir. `context.js:14` içindeki “profiles sınıf/hedef kolonu yok” yorumu eski bilgidir; yeni geçiş dosyası vardır (`supabase/migration_student_exam_profile.sql`).

### 2.4. Kimlik, yetki ve sınırlandırma

- `authenticate` Bearer jetonunu `supabase.auth.getUser(token)` ile doğrular, profilde `role='student'` ister. Supabase istemcisi yayımlanabilir anahtar + öğrencinin jetonudur; bu AI yollarında yönetici anahtarı kullanılmaz (`api/_lib/auth.js:41`). İstek gövdesindeki öğrenci kimliği işleme esas değildir.
- Kaynak ve yazma sorguları öğrenci kimliğiyle sınırlandırılır. Sohbet geçmişinin iç sorgusu yalnız `conversation_id` kullanır; önce sohbet sahipliği doğrulanmıştır ve mesaj tablosunun RLS (satır bazlı güvenlik) kuralı da kendi satırlarını sınırlar (`chat.js:305`, `:338`). Ortak müfredat kataloğunda öğrenci filtresi gerekmez.
- Koç tablolarının kuralları `supabase/migration_ai_coach.sql`; başlangıç kurulum kopyası `supabase/setup_new_project.sql:580` çevresindedir. Kendi sohbet/hafıza/plan için okuma ve izin verilen yazmalar; kullanım sayacında yalnız okuma/ekleme vardır. Veli/öğretmen için özel Koç sohbetini okuma kuralı yoktur.
- `ai_messages` insert politikası sadece `student_id` denetler, ilgili sohbetin sahipliğini ayrıca denetlemez (`migration_ai_coach.sql:96`). API bunu kendi yolunda doğrular; SQL ilişkisi sertleştirme sorusudur. AI Soru Çöz olay insert'i ise hem öğrenci hem oturum sahipliğini kontrol eder (`migration_ai_solve.sql:205`).
- AI Soru Çöz oturum update kuralı “geri bildirim/sayaç için” açıklamasına rağmen sütun bazında dar değildir; kendi satırının model sonucu alanları da doğrudan değiştirilebilir (`migration_ai_solve.sql:143`). Bunun sonucu başka öğrencinin verisine erişim değil, kaynağın güvenilir ölçüm sayılabilmesi için bütünlük sınırının ayrıca kurulması gereğidir.
- Soru görseli API'de yalnız `ai-solve/<doğrulanan-kullanıcı-id>/...` biçiminde kabul edilir; `..`, mutlak URL/yol reddedilir (`api/_lib/solve/image.js:48`). Buna rağmen `question-images` kovası depoda herkese açık okunur ve giriş yapmış herkes için kova düzeyinde upload kuralına sahiptir (`supabase/schema.sql:95`, `setup_new_project.sql:517`). API yol denetimi herkese açık görsel erişimini kapatmaz.

Canlıya karşı yetki ihlali denemesi yapılmadı. Depodaki politikalar ve API kontrolleri, yerel test kapsamı ve kurulu canlı durum ayrı kanıt türleridir.

### 2.5. Hız, maliyet ve hata davranışı

Koç varsayılanı saatte 30/günde 120 başarılı kaydedilmiş kullanım; girdi 2.000 karakter, çıktı tur başına 1.200 token, 4 model turu (son turda araç verilmez), OpenAI istek zaman aşımı 60 saniyedir (`api/_lib/config.js`, `api/ai-coach/chat.js:151`). `ai_usage_events` son 24 saat `kind='chat'` üzerinden sayılır. Sayaç okunamazsa izin verilir; kayıt hataları akışı kesmez. Kontrol ve kayıt atomik değildir; paralel istekler kotayı aşabilir. Başarısız/yarıda kesilen model çağrıları başarı yolunun sonundaki sayaca ulaşmayabilir (`api/_lib/ratelimit.js:36`, `chat.js:246`). Başlık üretiminin ayrı çağrısı ana toplam kullanıma eklenmez.

AI Soru Çöz aynı tablonun `kind='solve'` kotasını ana çözüm, yardım, alternatif ve kontrol arasında paylaşır: varsayılan dakikada 4/saatte 25/günde 60; oturumda yardım sayacı 25; soru 4.000, yardım 500, öğrenci notu 300 karakter (`api/_lib/solve/config.js:325`, `api/ai-solve/ask.js:78`). Oturum sayacı sadece `why/stuck` için artar; `chat/alternative` toplamına tavan koymaz (`persistence.js:142`).

Dosyadaki varsayılanlar Koç için `gpt-4o-mini`; Soru Çöz hızlı rolü `gemini-3.6-flash`, güçlü rolü `gemini-3.7-flash` olarak yazılıdır. Bu, canlı model ayarının veya sağlayıcıda modelin varlığının doğrulaması değildir. Soru Çöz üretim/düşünme token tavanı 16.000, sınıflandırma 1.200, açıklama 1.500; toplam çözüm süre bütçesi 220 saniye, tek istek 180 saniyedir. `README.md` güçlü rol varsayılanını başka model adıyla anlattığından güncel kodla uyuşmaz. Fiyat açıklamalarının güncelliği bu fazda dışarıdan doğrulanmadı.

Hatalar kullanıcıya kod/sade metinle döner; sunucu loglarında hata mesajı, öğrenci kimliği ve bazı sağlayıcı hata ayrıntıları bulunabilir (`api/_lib/errors.js:108`, `api/_lib/openai.js:52`). “Hiç ham sağlayıcı içeriği loglanmaz” şeklinde bir garanti yoktur. Kaynak sayfası açılışı model çağrısı değildir; `briefing` sadece kurallarla hesap yapar. Kartın `degraded` veri bayrağını cevaba taşımaması nedeniyle kısmi veri uyarısı sohbet ile kartta aynı kapsamda görünmez (`briefing.js:34`).

## 3. Mevcut müfredat ve konu eşleştirme temeli

Temel **vardır**: `src/lib/curriculum/graph.js`, `src/lib/curriculum/readiness.js`, `api/_lib/solve/taxonomy.js`, `library_subjects` / `library_topics`. Koddan sayım: LGS 7 ders/51 düğüm; TYT 10/108; AYT 10/118; KPSS 6/53, toplam 330 düğüm. Bu “330 doğrulanmış resmî kazanım” anlamına gelmez; depo düğüm sayısıdır.

Grafik düğümü konu adı, ön koşullar, takma adlar, sınav ağırlığı, tahmini süre, zorluk ve tekrar gereksinimi taşır. Çalışma belleğindeki kimlik `sınav|ders|konu-adı` birleşimidir (`readiness.js:103`). Konu adı değişirse bu kimlik değişir; bağımsız değişmez UUID veya sürümlü eşleme kaydı yoktur. Veritabanı katalog konularının kendi UUID'leri vardır; grafik kimliği ile katalog kimliği kalıcı birebir bağlanmış değildir. Öğretmenin kataloğa eklediği konu grafiğe otomatik girmez.

`findNodes` Türkçe/aksan normalleştirmesi, tam ad, parantezsiz kısa ad, takma ad, dersler arası tam ad ve en az 5 karakterli tek-aday içerme sırasını izler (`readiness.js:228`). Sonuç birden çok sınav havuzunda varsa ilkini seçer; aynı adın TYT ve AYT kanıtını çift saymaz. Ancak belirsizlik puanı, eşleme sürümü veya karantina satırı üretmez. Dersler arası genel tam ad araması, eşleşmeyen dersle gelen metni de başka bir derse bağlayabilir.

`examTypesFor` LGS/KPSS ayrı; TYT ve AYT hedeflerinde daima `[TYT,AYT]`, hedef yokken yine YKS havuzu döndürür (`graph.js`, son fonksiyon). AI Soru Çöz hedef bilinmiyorsa dört havuzu dener, önce alt konuyu sonra konuyu eşler (`taxonomy.js:53`). Dönen `canonicalTopic` **addır**; düğüm kimliği, güven, eşleme yöntemi veya kazanım kimliği kalıcı oturuma yazılmaz. `topic_matched=false` saklanabilir fakat Koç sorgusunda alınmaz; `canonical_topic ?? topic` ile eşleşmemiş serbest metin de konu özetine girer (`context.js:490`).

Hazırlık hesabı yalnız `daily_logs` kullanır. En az 10 soruda isabet oranı; 3–9 soruda isabet×0,85; en az 45 dakika ve yeterli soru yoksa 0,5; az süre/oturumda 0,3. Ön koşul yeterlilik eşiği 0,6; yüksek hakimiyet 0,85 ve en az 10 soru (`readiness.js:39`, `:328`). İleri konuda yeterlilik ön koşullara çıkarım olarak yayılır (`propagateImplied:357`); hangi ham kayıtların bu çıkarımı oluşturduğuna bağlantı yoktur. Düğümde `implied`, son tarih, soru sayısı ve isabet vardır; zamana bağlı unutma, kalıcılık, kaynak çatışması, olay güveni veya yeniden hesaplama sürümü yoktur. Bu motor sonraki fazların korunacak başlangıcıdır, birleşik öğrenci hafızasının tamamı değildir.

## 4. AI Soru Çöz: oturum, yardım, sonuç, tekrar ve kayıp noktaları

### 4.1. İlk çözüm ve kalıcı kayıt

`src/pages/AISolve.jsx` fotoğraf/galeri/PDF'den çıkarılan görsel veya metni alır. `uploadQuestionImage` görseli `question-images/ai-solve/<userId>/<zaman-rastgele>.<uzantı>` konumuna yükler (`src/lib/whiteboard/imagePrep.js:201`). `solveQuestion` istemci istemi `/api/ai-solve/solve`'a gönderir. API kimlik/yol/kota kontrolünden sonra görseli indirir, model sınıflandırması/çözümü, yapılandırma/tahta doğrulaması, deterministik matematik doğrulaması, yönlendirme ve konu eşlemesi yapar (`api/_lib/solve/engine.js:81`, `:407`; `router.js:109`). Model güveni ile doğrulama sonucu öğrenci ustalığı değildir.

`sessionRowFromResult` şu alan ailelerini yazar (`api/_lib/solve/persistence.js:231`): kaynak türü, görsel yolu, öğrenci notu; okunan soru; ders/ham konu/alt konu/kanonik ad/eşleşme/sınav/zorluk; cevap, tahta, analiz, öğrenci yardım metinleri; doğrulama özeti/güven/red nedeni; model rol/kimlik, token, süre, maliyet, yönlendirme. Ham model yanıtı, ham sistem istemi, base64 ve doğrulama iddia ifadeleri bu satıra konmaz. `unreadable/refused` sonuçlar da kaydedilebilir; istisna ile sonlanan hata ana akışı kayıt oluşturmayabilir.

Kaynak oturum `id` sunucu insert'inden sonra oluşur; istemci tekrar anahtarı yoktur (`saveSession:48`). Aynı soru yeniden çözdürülürse yeni oturum ve muhtemelen yeni görsel oluşur. Soru metni veya görselin ortak kaynak kimliği, deneme numarası ve önceki soru ile eşleme yoktur. Koç yalnız başarıyla AI çözümü üretilmiş son oturumların küçük özetini alır; bu, öğrencinin çözdüğü soru adedi değildir.

### 4.2. Yardım olayları

`Whiteboard.StepHelpBar` ilk “Neden?” tıklamasında mevcut `step.why` metnini yerel açar; sunucu olayı yazmaz (`src/components/aiSolve/Whiteboard.jsx:382`). “Daha fazla açıkla” ve “Takıldım” → `AISolve.runAsk` → `/ask` → `recordEvent`. `ai_solution_events` içinde `kind`, adım, soru/yanıt, model/token/maliyet/süre/tarih tutulur. `why/stuck` oturum yardım sayacını artırır; serbest sohbet ve alternatif artırmaz. Alternatif çözümün tam tahtası olayda saklanmaz; `answer` alanına yöntem adı yazılır (`api/ai-solve/ask.js:112`). Geri bildirim için enum bulunmasına rağmen mevcut geri bildirim yolu `feedback` olayı eklemez, oturum alanını günceller.

Olay insert'inin dönen `{error}` değeri denetlenmez; yalnız fırlayan istisna yakalanır. Buna rağmen yardım sayacı ayrı okumayla artırılır (`persistence.js:119`). Olay ve sayaç tek işlem değildir; kaydı olmayan sayaç artışı veya eşzamanlı isteklerde eksik artış mümkündür. Tekrar gönderilen yardım yeni olay/sayaç artışı üretir. Koç olay tablosunu okumadığı için hangi adımda, hangi sorunun sorulduğunu bugün bilemez; yalnız toplamı görür. Etkileşim geçmişini öğrenciye yeniden açan oturum API'si de olayları yüklemez.

### 4.3. Öğrenci cevabı ve model kontrolü

`reportSelfResult` → `/sessions` → `saveSelfReport` aynı oturumdaki `student_correct` alanını yazar (`src/lib/aiSolve.js:237`, `persistence.js:197`). Bu öğrencinin beyanıdır. `CheckWorkPanel` → `/check` modelin kâğıt incelemesini getirir; mevcut oturum varsa `check` olayı ve `student_correct/error_type` güncellemesi olur (`api/ai-solve/check.js:98`). Oturum olmadan kontrol sonucu yalnız ekranda/kullanım sayacında kalır; ayrı çözüm oturumu oluşturulmaz.

Model kontrolünün öğrenci adımları, ilk hatanın ayrıntısı ve düzeltme tahtası API yanıtında vardır; olayda yalnız karar metni, oturumda son boolean/hata türü korunur. Model kontrolü eski öz beyanı, sonraki öz beyan model sonucunu ezer. Öz beyan `error_type` alanını temizlemez; “doğru” beyanı ve eski hata türü birlikte kalabilir. Yanıt alınmış olması oturum güncellemesinin başarılı olduğuna kanıt değildir; `/check` güncelleme dönüşünü kontrol etmez.

### 4.4. Geri bildirim ve tekrar

`saveFeedback` son `up/down`, sabit neden ve isteğe bağlı 500 karakter notu aynı satıra yazar. Geri bildirim kronolojisi yoktur. Koç bu alanları okumaz: “çözüm yanlış” bildirilen bir oturum sonraki Koç özetinde otomatik geçersizleşmez (`persistence.js:176`, `context.js:198`).

Tekrar `review_status=none/pending/completed`, `reviewed_at` alanlarıyla bulutta tutulur (`supabase/migration_ai_solve_history.sql`). Geçmiş sayfası ilk 50 oturumu yükler; sunucu API'si sayfalama destekler fakat bu ekranda ileri sayfalama çağrısı yoktur (`AISolveHistory.jsx:97`, `api/ai-solve/sessions.js:63`). `needsReview`, sonucun `ok` olması ve tamamlanmamış tekrarın yardım/yanlış/hata/pending ölçütlerinden birini sağlamasıdır (`src/lib/aiSolveHistory.js:18`). “İncelenen” filtresi yalnız `error_type` bulunanı sayar; doğru kontrolden geçen ve hata türü olmayan oturum bu filtreye girmez.

Yerel yedek anahtarı `drkoc-ai-solve-reviews:<userId>`; değer `sessionId → durum` map'idir. Kullanıcıya bağlıdır fakat bu cihazla sınırlıdır. Geçmiş ekranı önce yereli ve UI'ı günceller, sonra sunucuya gönderir; hata halinde cihazda kaydedildi uyarısı verir (`AISolveHistory.jsx:149`). Sunucu `none` ise yereldeki pending/completed uygulanır; sunucu farklı bir durum taşıyorsa yerel başarısız değişikliği sonraki açılışta ezebilir (`aiSolveHistory.js:128`). Kalıcı yeniden deneme kuyruğu, sürüm/zaman çatışma çözümü ve kayıpsız eşitleme yoktur.

`/soru-coz?oturum=<id>` çözümü açar; `/soru-coz?tekrar=<id>` aynı oturumu tekrar kipinde açar (`AISolve.jsx:74`). Kontrol doğru çıkarsa tekrar tamamlanabilir, başarısız bulut yazması yine yerel yedeğe düşer (`AISolve.jsx:330`). Koç tekrar durumunu okumadığı için tekrar tamamlandıktan sonra geçmiş yanlış/yardım sinyali Koç özetinde yaşamaya devam eder.

## 5. Düzenleme, silme, cihaz değişimi ve eksik şema

### 5.1. Güncel kaynak ve eski sohbet farkı

Günlük, deneme, ödev, sorunlu soru ve AI çözümünün mevcut satırı değiştirilir/silinirse bir sonraki Koç isteğinin taze sorgusu bunu görür; tarih/satır penceresi dışında kalan kayıt zaten okunmaz. Ancak geçmişte üretilmiş `ai_messages.content`, teklif kartı veya varsa `ai_conversations.summary` geri dönük yeniden yazılmaz. Eski kaynak kimliğine bağ olmadığı için “bu önerinin dayanağı artık silindi” işareti de yoktur. Model aynı sohbetin son 12 mesajında eski sayıyı tekrar görebilir. Ortak kanıtı geçersiz kılma, silme izi veya yeniden hesaplama kuyruğu bulunmaz.

Sohbet silme `ai_conversations` ve bağlı `ai_messages` satırlarını cascade ile kaldırır (`api/ai-coach/conversations.js:30`); `ai_student_memory`, `ai_study_tasks`, önceden eklenen `daily_logs` ve kullanım sayacı korunur. Arayüzde hafızanın tamamını incele/sil akışı bulunmadı; yalnız onaylı tercihi aynı anahtarda değiştirme vardır. Koç planı tamamlamak günlük kayıt oluşturmaz; günlüğü silmek planı otomatik geri almaz.

AI Soru Çöz oturum ve olay tablolarında kendi kaydını silme SQL hakkı vardır, oturum silinirse olaylar cascade silinir. `/api/ai-solve/sessions` ise yalnız GET/POST kabul eder; mevcut ekranda oturum silme işlemi yoktur. Olay silmek oturum `help_requested` sayacını yeniden hesaplamaz. Görsel dosya silme/hesap kapatma temizliği AI yollarında tanımlı değildir.

### 5.2. Cihazlar arası durum

Başarıyla sunucuya yazılmış günlük/deneme/ödev/soru, Koç sohbeti/tercihi/planı ve AI çözüm oturumları aynı hesapla başka cihazda yeniden okunabilir. Bu yapısal özelliktir; iki gerçek cihazla senkronizasyon testi yapılmadı. Kaydedilmemiş sohbet taslağı, aksiyon kartının tamamlanma durumu, çözüm ekranının adımı/yardımı, kaydedilememiş AI sonucu ve yerel tekrar yedeği taşınmaz. Dört dil ve atlasın depoları ayrıca aşağıdaki yüzey bölümlerinde değerlendirilir.

### 5.3. Eksik kurulum davranışları

| Eksiklik / hata | Mevcut davranış | Sonuç |
|---|---|---|
| Koç ana kaynaklarından biri okunamıyor | Veri boş dizi, ortak `degraded=true`; sohbet istemine eksik veri notu eklenir | Hangi kaynak eksik ayrıntısı yok; günlük kart bu bayrağı taşımıyor. |
| `ai_solution_sessions` yok veya sorgu hatalı | `fetchSolveSessions` sessiz `[]`; `degraded` etkilenmez | “Hiç çözüm yok” ile “çözüm kaynağı erişilemedi” ayrılmaz. |
| Koç sohbet tabloları yok | Sohbet oluşturma/geçmiş işlemleri hata | Yerel sahte başarı kabul edilmez; arayüz hata görür. |
| Kullanım sayacı okunamıyor/yazılamıyor | Model isteğine izin verilir, sayaç eksik kalır | Hız/maliyet sınırı güvenilir kabul edilemez. |
| AI çözüm kaydı başarısız | Çözüm gösterilir, `sessionId=null`; ek açıklama/kalıcı geçmiş yok | Çalışma kanıtı kaybolur; `AISolve.runAsk` açıklayıcı hata verir. |
| Tekrar sütunları yok | Geçmiş eski sütunlarla tekrar okunur; durum `none`; yazma başarısızsa yerel yedek | Cihazlar arası tekrar durumu kaybolabilir. |
| AI çözüm tablosunun kendisi yok | Eski sütunlarla ikinci sorgu da başarısız; `listSessions=[]`, API 200 | Boş geçmiş ile kurulum hatası ayırt edilmez. |
| `profiles.target_exam` kolonu yok | Soru Çöz hedefi `null`, genel havuzdan eşleme | Koç ayrı tercih hafızasını kullanır; eşleme güveni görünür değil. |
| Müfredat katalog tabloları okunamıyor | Katalog aracı hata döndürür, kod grafiği çalışabilir | Katalog kapsamı ile hesap grafiği ayrı kalır. |

Kanıt: `context.js:169`, `:194`, `:819`; `persistence.js:48`, `:85`; `solve.js:226`; `ratelimit.js:49`; `tools.js:593`. `setup_new_project.sql` Koç'un 5 tablosunu içerir; AI Soru Çöz oturum/olay/tekrar için ayrı geçişler gerekir. Geçiş dosyası varlığı bunların canlıya uygulandığını göstermez.

## 6. Gizlilik metni ile kodun uyumu

Bu bölüm hukuki uygunluk görüşü değil, uygulama metni ile yerel kodun karşılaştırmasıdır (`src/pages/PrivacyPolicy.jsx`).

| Üründeki ifade / alan | Koddan doğrulanan durum | Faz sorusu |
|---|---|---|
| Koç tüm veritabanını her mesajda yollamaz; küçük özet ve gerektiğinde ek kayıt kullanır (`:204`) | Ana yaklaşım doğru; son sohbetler, notlar/tercihler ve sınırlı araç sonuçları da gidebilir. `renderContext` toplam token sınırı ölçülmüş değil. | Faz 7/9: en küçük gerekli kapsam, açık kaynak ve veri tamlığı. |
| Sağlayıcı listesinde OpenAI yalnız Koç içindir (`:187`) | Soru görsel/metni ve kendi çözüm görseli Gemini'ye gider. Gemini listede yer almıyor. Ders üretimi de OpenAI kullanır; TTS sağlayıcısı none/OpenAI/ElevenLabs olabilir (`api/_lib/tts/index.js:72`). | Faz 9: gerçek sağlayıcı ve amaç envanteriyle metin eşleştirmesi. |
| Koç sekmesi açılmazsa veriler OpenAI'a gönderilmez (`:214`) | Koç ana sayfa kartı model çağırmaz. Genel sağlayıcı iddiası diğer OpenAI yollarını kapsamıyor; ders anlatım TTS yolunda katalog metni gider, bunu öğrenci kişisel verisiyle karıştırmamak gerekir. | Faz 9: kişisel öğrenci bağlamı ile ortak katalog seslendirmesini ayrı açıklama. |
| Veliye özel mesaj/sorunlu soru/Koç sohbeti kapalı (`:158`) | Koç API öğrenci rolü ister, ilgili Koç SQL kendi öğrenci satırıyla sınırlıdır. Görsel dosyalarının herkese açık kovası bu tablo korumasından ayrıdır. | Faz 9: satır ile dosya erişimini birlikte doğrulama. |
| Kullanıcı yalnız kendi verisine erişebilir (`:264`) | AI tablo sorguları bunu amaçlıyor; soru görsel kovası herkese açıktır (`schema.sql:95`). URL'yi bilen kişi için dosya gizli değildir. | Faz 9: depolama erişimi ve açık veri anlatımı. |
| Hesap açıkken saklama, talepte tüm kayıtların silinmesi (`:235`) | AI tabloları profile cascade bağlı; incelenen `src/api` yollarında kapsamlı hesap silme/dışa aktarma ve dosya/yerel veri temizleme akışı bulunmadı. E-posta talebi üzerinden manuel işlem iddiasının işletim kanıtı yoktur. | Faz 1/2/9: saklama, silme, yedek ve sağlayıcı kayıt kapsamı. |
| Çocuklara yönelik profilleme yapılmıyor (`:224`) | Eğitim performansı, tercih hafızası, konu yeterliliği ve kişisel plan hesapları mevcut. Metnin davranışsal reklam ile eğitim kişiselleştirmesi ayrımını açık kurması gerekir. | Faz 9: amaca göre veri işleme anlatımı; hukuki yorum bu fazda yapılmaz. |

Politikanın veri türleri tablosunda AI Soru Çöz görselleri, yardım olayları, öğrenci çözüm kontrolü, tekrar yedekleri, dört dilin yerel ilerlemesi ve atlas ölçüm depoları ayrı açıklanmamıştır. Bu fazda politika veya ürün kodu değiştirilmedi; doğrulanmış uyumsuzluklar sonraki karar girdisidir.

## 7. Henüz birleşik olmayan öğrenme kaynakları

AI Koç'un öğrenci öğrenme bağlamında **okumadığı** kaynaklar: `lesson_activity_events`, `student_question_set_attempts`, dil ilerleme depoları, atlas/simülasyon depoları, defter belgeleri ve çalışma blokları, canlı ders not/sonuçları, `ai_solution_events`, AI çözüm geri bildirimi ve tekrar durumu. Katalog aracı `library_subjects/topics` okur; bu öğrenci etkinliği okuması değildir. Ortak mesajlaşma `messages` ve özel öğretmen notları da okunmaz; bunları topluca bağlamak hedefin parçası değildir. İlgili öğrenme yüzeyleri, yetkili kaynaklar ve kararları `VERI_KAYNAKLARI_MATRISI.md` ve `VERI_AKISLARI.md` ile birlikte değerlendirilmelidir.

## 8. Ders ve soru kütüphanesinin gerçek kayıt davranışı

### 8.1. Üç ders yolu aynı davranmıyor

| Ders türü | Yetkili içerik | Öğrenci kaydı | Cihaz/Koç sonucu | Kod kanıtı |
|---|---|---|---|---|
| Veritabanı yapılandırılmış ders | `structured_lessons.document`; `library_topics` ilişkisi; öğretmen düzenlemesinde `structured_lesson_revisions` | `LessonReader` açma, quiz, ÖSYM simülasyonu, bölüm/tamamlama ve ses olaylarını `lesson_activity_events` tablosuna yazmayı amaçlıyor | **Gerçekte yazmıyor.** `void supabase.from(...).insert(...)` thenable'ı tüketmediği için istek başlamıyor. Sentetik yerel deney mevcut biçimde 0, `await` ile 1 taklit istek ölçtü. Koç tabloyu zaten okumuyor. | `src/components/lessons/LessonReader.jsx:109–171`; `kanitlar/faz-0/lesson-event-thenable.log` |
| Paketli yapılandırılmış ders | `src/content/lessons/`; `bundled-<slug>` kimliği ve paketli placement | `is_bundled` açma/quiz/tamamlama olaylarını ve kişiselleştirmeyi erken kesiyor; sonuç yalnız React state | Sayfa yenilenince cevap/tamamlama kaybolur; kullanıcı/deneme/sürüm kaydı ve Koç bağlantısı yoktur. | `LessonReader.jsx:49–75`, `:108`, `:165` |
| PDF/görsel/metin ve paketli Ham Bilgi | `library_notes` + `library-files`; `src/content/hamBilgiNotlari.js` + public PDF'ler | Açma, büyütme, sayfa gezme veya yazdırma için öğrenci telemetrisi yok | PDF açılması maruz kalma bile sayılacaksa önce güvenilir olay gerekir; başarı/ustalık değildir. Koç okumaz. | `src/components/LibraryNoteCard.jsx`; `src/components/PdfViewer.jsx`; `src/components/HamBilgiNotuSeridi.jsx` |

Şema tarafında `lesson_activity_events.event_name` CHECK listesi `lesson_opened`, `section_completed`, `lesson_completed`, `quiz_answered`, `audio_started`, `audio_section_completed`, `visual_audio_clicked` değerlerini kabul eder. UI'ın ürettiği `osym_simulation_answered` listede yoktur (`supabase/migration_structured_lessons.sql:112`, `LessonReader.jsx:214`). İstek başlatma hatası düzeltilse bile bu olay mevcut SQL'de reddedilir. Olaylarda benzersiz istemci eylem kimliği yoktur; yeniden gönderim kopya üretebilir.

Ders kişiselleştirme ayrı bir akıştır. `buildPersonalization` son 160 günlük kaydı konu adında `includes` ile eşler; en az 10 işaretlenmiş soruda oran hesaplar, `readiness` ön koşullarını kullanır ve `lesson_personalizations` önbelleğine gerçekten `.then` ile yazmayı başlatır (`src/lib/lesson/personalize.js:63`). Bu, ders olayının kayıtlı olduğunu göstermez. Paketli ders kişiselleştirmeye girmez. Ses anlatımının konumu `sessionStorage` içinde `drkoc:narration:v1:<slug>` anahtarıyla yalnız sekme oturumunda tutulur; dinleme başarı değildir.

### 8.2. Soru kütüphanesinde sonuç nerede kayboluyor

Veritabanı seti `library_question_sets`, paketli setler `src/lib/questionLibrary.js` ve derslere özgü yükleyicilerden gelir. Her ikisinde de cevaplar `TopicTestSolve.answers` bileşen durumuna yazılır; bitişte `{answers,test,returnTo}` yalnız rota state'i ile sonuç sayfasına taşınır. `TopicTestResult` D/Y/B ve yüzdeyi yeniden hesaplar (`src/pages/TopicTestSolve.jsx:36–49`; `TopicTestResult.jsx:23–43`). Sayfa yenilenirse veya sonuç adresi doğrudan açılırsa “Sonuç Bulunamadı” görünür.

`student_question_set_attempts` tablosu gerçekten tanımlıdır: öğrenci, set, başlangıç/tamamlanma, D/Y/B ve answers JSON taşır; RLS kendi satırını select/insert/update ile sınırlar (`supabase/migration_question_library.sql:46–75`). Ancak `src/`, `api/` ve işlevlerde bu tabloya hiçbir okuma/yazma çağrısı yoktur. Aynı şekilde hazırlanmış `student_topic_test_progress` ve `student_test_answers` tabloları da kullanılmıyor. Bu nedenle “soru sonucu tablosu var” doğru, “öğrenci sonuçları saklanıyor” yanlıştır. Paketli setlerin metin kimlikleri, ilk tablonun UUID yabancı anahtarına doğrudan uymaz.

## 9. Dört dil ve atlas/simülasyon depoları

### 9.1. Dört dil ayrı ayrı

İngilizce, Almanca, Fransızca ve İspanyolca aynı motor biçimini kullanır fakat ayrı içerik dosyaları, ekran klasörleri, olay adları ve anahtarları vardır. Dördünde de `BOS_ILERLEME`: profil, tespit, dersler, tekrar kartları, beceriler, hata izleri, günlük toplamlar, yazmalar, favoriler, son ders ve arayüz durumunu taşır. Kart ekranı ayrıca başlangıç nesnesinde açıkça tanımlanmayan `kartDesteleri` ve `kartFavorileri` alanlarını dinamik olarak yazar; geçişte bunların unutulmaması gerekir.

| Dil | Depo | Ayrı doğrulanan kayıt yolu | Kimlik/cihaz sonucu |
|---|---|---|---|
| İngilizce | `drkoc-ingilizce-v1` | `src/pages/ingilizce/*` → `src/lib/ingilizce/ilerleme.js` | Kullanıcı kimliği yok; aynı cihaz/tarayıcı profilindeki farklı hesap veriyi paylaşır, başka cihaz boş başlar |
| Almanca | `drkoc-almanca-v1` | `src/pages/almanca/*` → `src/lib/almanca/ilerleme.js` | Aynı boşluk; İngilizce anahtarıyla karışmaz |
| Fransızca | `drkoc-fransizca-v1` | `src/pages/fransizca/*` → `src/lib/fransizca/ilerleme.js` | Aynı boşluk; Fransızca içeriği ayrı test edildi |
| İspanyolca | `drkoc-ispanyolca-v1` | `src/pages/ispanyolca/*` → `src/lib/ispanyolca/ilerleme.js` | Aynı boşluk; İspanyolca anahtarı ayrıdır |

`dersTamamla` son deneme D/Y/toplam/oran/en iyi oranı saklar ve günlük toplamı artırır; bütün deneme olay geçmişini saklamaz. Tekrar ekranı aralıklı tekrar kartını günceller, oturum sonunda süreyi kart sayısından yaklaşık üretir. Düşünme egzersizi de yapılandırılmış süreyi günlük toplamına ekler. `gunlukKaydet` tekrar çağrılırsa aynı eylemi ayıran kimlik olmadığından toplam yeniden artar. “Biliyorum” kart işareti öz beyanıdır; favori tercihtir. Telaffuz ekranı MediaRecorder ile yalnız geçici Blob URL üretir, ses veya doğruluk puanı saklamaz. Dört dil testi içerik/işlev kurallarını doğrular; kullanıcı ayrımı ya da cihazlar arası eşitlemeyi doğrulamaz. Sunucu Koç bu dört localStorage deposunu okuyamaz.

### 9.2. Atlas ve simülasyonlar

| Yüzey | Depo ve ölçüm | Gerçek sınır |
|---|---|---|
| Fizik | `drkoc-fizik-ilerleme-v1`: deney/seviye tamamlamaları, yanılgı D/Y sayaçları, başarımlar, rozetler | Kullanıcı kimliği/kanonik konu/olay kimliği yok; yalnız cihaz. Favori/konum öğrenme kanıtı değildir. |
| Biyoloji | `drkoc-biyoloji-v1`: tahmin+görev+kontrol koşullu tamamlama, hata defteri, ustalık/tekrar alanları | Aynı etkileşimin son hali tutulur; tarihsel deneme dizisi ve kullanıcı ayrımı yoktur. |
| Coğrafya | `drkoc-cografya-v1`: görev/kontrol, hata, son 20 TYT denemesi | Deneme `Date.now()` kimliğiyle append edilir; yeniden gönderim kopya olabilir, 20 öncesi düşer. |
| Kimya | MiniTest ve simülasyonlar yalnız `useState`; kalıcı öğrenme deposu yok | Sonuç yenilemede kaybolur; sadece tema saklanır. |
| Tarih/Padişah | Harita seçimi URL/state; yalnız müzik tercihi yerel | Ölçülebilir öğrenme görevi/kontrol sonucu yoktur; ham gezinme başarı değildir. |
| Geometri pilot | Dört soru seçimi ve puanı yalnız component state | Kullanıcı/deneme/konu kimliği ve kalıcı kayıt yoktur. |

Dört atlas tema anahtarı ve padişah müzik tercihi akademik sinyal değildir. Bütün üretim ve deneysel yerel/oturum anahtarlarının sahiplik sicili [matriste](VERI_KAYNAKLARI_MATRISI.md#tarayıcı-ve-cihaz-depolarının-tam-sicili) yer alır.

## 10. Günlük kayıt, deneme, ödev, sorunlu soru ve öğretmen yanıtı

- **Günlük kayıt:** öğrenci `daily_logs` tablosuna tarih, serbest konu, süre, D/Y/B ve not ekler. Öğrenci ekranında düzenleme/silme yoktur; `StudentDetail` içindeki öğretmen modalı yalnız süre ve D/Y/B alanlarını update eder. Koç 90 günlük pencereyi ve araç çağrısında en çok 60 satırı kullanır. Bu öğrenci beyanıdır.
- **Genel deneme:** `mock_exams` üst kaydı ve `mock_exam_subjects` ders satırları iki ayrı istemci isteğidir. Alt yazı başarısızsa üst kayıt geri alınmaz. UI sınav türüne göre net hesaplar; Koç tür içi kıyas yapar ama en çok 10 üst kayıt okur. Süre girilmediyse öğrenci panellerinde standart süre tahmin edilir; Koç süreyi almaz.
- **Branş denemesi:** `exams` D/Y/B ve serbest ders/konu taşır. Eksik eski şemada sınav türü/süre alanları bilinmeyen kolon hatasında düşürülüp kayıt kurtarılır. UI LGS için yanlış/3, diğerlerinde yanlış/4 hesaplar; veritabanındaki oluşturulmuş `net` alanı sabit /4 olduğundan UI doğru/yanlıştan yeniden hesaplar.
- **Ödev:** öğretmen atar, öğrenci `Yapılıyor/Tamamlandı` arasında değiştirir, öğretmen silebilir. `lesson_session_id` ile canlı derse bağlanabilen ödev vardır; sabit konu/kazanım bağı yoktur. Koç atama ve durumu görür; ödev tamamlamak ilgili konuyu başarma garantisi değildir.
- **Sorunlu soru:** öğrenci metin/görsel ile gönderir; öğretmen durum, yazılı yanıt, yanıt görseli ve çözüm tuvali ekleyebilir. Koç en yeni 20 satırdan en çok 5 açık sorunun konu/durum/yanıt varlığını görür; soru/öğretmen cevabının içeriğini ve görseli görmez. Öğretmen yanıtı güçlü nitel kanıt olabilir, fakat bugün Koç'a ulaşmaz.

Düzenleme/silme ve yeniden gönderme farkları kaynak bazında [akışlarda](VERI_AKISLARI.md) işaretlidir. Aynı denemenin günlük kayda da girilmesi panellerde otomatik ayıklanmaz (`src/lib/insights.js`); kaynak katkısı gösterilir fakat toplam şişebilir.

## 11. Canlı ders, defter ve iletişim

Canlı dersin `lesson_sessions`, katılımcı, tahta, materyal, özel not ve özet tabloları vardır. Katılım ve oturum süresi öğrenme başarısı değildir. Ham tahta, sohbet, ses ve video ortak Koç bağlamı için varsayılan kapsam dışıdır. `lesson_summaries` öğretmenin öğrenciyle paylaştığı konular/not/sonraki hedef ile öğrencinin geri bildirimini taşır; bu dar ve yetkili nitel kanıt adayıdır, ancak konu serbest metindir ve Koç okumaz. `lesson_private_notes` yalnız öğretmenin özel alanıdır; öğrenci, veli ve Koç okumamalıdır.

Defter `drkoc-kisisel-defter-v1` IndexedDB veritabanında `[ownerId,id]` ile kullanıcı ayrımı yapar. Yazma tamponu ve `localVersion/baseRevision/requestId` modeli iki sekme/ağ tekrarında içeriği korur; çatışmada iki sürümü saklar. `VITE_NOTEBOOK_CLOUD_ENABLED==='true'` değilse `student_notebooks` yolu hiç açılmaz; açık olsa bile 4 MB üstü defter yalnız cihazda kalır (`src/lib/defter/remote.js`). Ham defter, çizim veya ses otomatik akademik kanıt değildir; öğrenci açıkça bir sonuç paylaşmadan Koç'a alınmamalıdır.

`messages` ve özel `chat-attachments` öğrenci–öğretmen iletişimidir. Düzenleme, silme, okundu bilgisi ve canlı güncelleme vardır. Ürün hafızasına uygun biçimde Koç bu tabloyu okumaz. İçinde konu adı veya öğretmen yönlendirmesi geçmesi tüm özel mesajı öğrenme gözetimine açmaz.

## 12. Sunucu şeması ve kurulum gerçekliği

`supabase/` altındaki 37 SQL dosyası 43 uygulama tablosu ve 4 dosya kovası tanımlar. Bütün 43 tabloda depoda RLS açma ifadesi bulundu; güncel politika dosyalarının canlıda uygulanıp uygulanmadığı ölçülmedi. `setup_new_project.sql` bunların yalnız 17'sini, `schema.sql` yalnız 3'ünü oluşturur. `migration_daily_logs.sql` CREATE değil ALTER ile başladığı için sıfır kurulumda tek başına çalışamaz.

Üç hazır soru sonuç tablosu dışında, doğrudan `.from()` çağrısı görünmeyen `teacher_students`, davet/veli deneme sayaçları ve bağlantı tabloları SQL RPC'leriyle kullanılır; yanlışlıkla “ölü tablo” sayılmadı. Kaynak çağrısı olup bütün SQL'de CREATE tanımı bulunmayan bir uygulama tablosu saptanmadı. Tablo, SQL kaynağı, sabit kod/RPC çağrısı, RLS özeti ve Koç kararı [sunucu tarama kanıtında](kanitlar/faz-0/sunucu-tablo-taramasi.json) ve [matris sicilinde](VERI_KAYNAKLARI_MATRISI.md#sunucu-tablosu-sahiplik-sicili--4343) kayıtlıdır.

Eksik şema davranışı homojen değildir: Koç ana kaynak hataları `degraded` olurken AI Soru Çöz tablosu hatası sessiz boş diziye düşer; branş formu bazı kolonları düşürür; canlı ders açık bir şema eksikliği bildirimi gösterebilir; defter bulut yolu bayrakla tümden kapalıdır. “Boş geçmiş” ile “kaynağa erişilemedi” bütün modüllerde güvenilir biçimde ayrılmıyor.

## 13. Faz 0 kabul sonucu

Bu envanter `App.jsx` içindeki 62 rota, dört dilin 15'er iç rota karşılığı, 38 kaynak yüzeyi, tüm doğrudan tarayıcı/oturum/IndexedDB depoları, 43 uygulama tablosu, 4 dosya kovası ve 37 SQL dosyasını sahipleriyle eşleştirdi. AI Koç'un okuduğu tablolar ile okumadığı kaynaklar ayrıldı; müfredat/konu eşleştirme temeli “yok” diye raporlanmadı. Yapılandırılmış DB, paketli ve PDF ders; DB/paketli soru yolları; dört dil; düzenleme/silme/tekrar/cihaz boşlukları ayrı incelendi.

Başlangıç testleri gerçek sonuçlarıyla [baz çizgisinde](BAZ_CIZGISI.md), sonraki fazların sentetik girdileri [kabul senaryolarında](KABUL_SENARYOLARI.md), açık mimari sorular [karar kaydında](MIMARI_KARARLAR.md) bulunur. Bu fazda ürün kodu, canlı şema/veri ve ürün davranışı değiştirilmedi. Faz 1'e belge ve yerel test girdisi olarak geçilebilir; bu, canlı RLS, model kalitesi veya uçtan uca cihaz akışlarının doğrulandığı anlamına gelmez.
