# Codex Uygulama İstemi — Faz 1: Ortak Konu ve Öğrenme Kanıtı Sözleşmesi

Sürüm: Faz 0 sonrası depo-özel yürütme istemi 2.0
Ön koşul: Faz 0 tamamlandı
Çalışma alanı: /Users/furkantalhayazcicek/Desktop/DRKOÇ

## Görevin

Faz 0'da doğrulanan 38 veri yüzeyi, 62 uygulama rotası, dört dilin ayrı ayrı 15 iç rotası, 43 sunucu tablosu ve 14 sentetik kabul senaryosunu temel alarak Faz 1'i eksiksiz uygula.

Bu fazın sonunda DRKOÇ içinde:

- eğitim bağlamı, ders, konu ve varsa kazanım/alt beceri için değişmez kimlik sözleşmesi;
- serbest ve eski konu adlarını güvenli biçimde çözen, belirsizliği koruyan ortak eşleştirici;
- olay, anlık görüntü, düzeltme ve silme anlamlarını ayıran öğrenme kanıtı sözleşmesi;
- bütün Faz 0 kaynaklarını sınıflandıran makine tarafından doğrulanabilir kaynak kayıt defteri;
- tarayıcı ve sunucuda kullanılan ortak doğrulama kodu;
- depo-özel otomatik testler ve kanıt kayıtları

bulunmalıdır.

Ortak olayların kalıcı veri ağı Faz 2'nin; gerçek modüllerden olay toplamaya başlamak Faz 3, 4 ve 5'in işidir. Bu fazda kaynak ekranlarını bağlama, AI Koç bağlamını genişletme veya canlı olay toplamayı başlatma.

## Değişmez çalışma kuralları

- Önce mevcut dosyaları ve Faz 0 kanıtlarını oku; dosya, şema veya davranış varsayma.
- Çalışma alanındaki ilgisiz kullanıcı değişikliklerini koru. Geri alma, yeniden biçimlendirme veya sahiplenme.
- Mevcut curriculum graph, readiness, taxonomy ve kütüphane kataloğunu çöpe atıp paralel ikinci sistem kurma.
- Mevcut graph anahtarı ad tabanlı diye onu doğrudan kalıcı kanonik kimlik kabul etme.
- library_topics UUID değerleri ortamlar arasında aynı olmayabileceği ve öğretmen işlemleriyle değişebileceği için onları incelemeden tek evrensel kimlik kabul etme.
- 330 graph düğümünü resmî kazanım diye adlandırma. Bunlar mevcut depo konu düğümleridir.
- Eksik sınıf, sınav, konu veya kazanım bilgisini tahminle doldurma; null veya açık belirsizlik kullan.
- LLM kalıcı konu eşleştirmesi yapamaz. En fazla aday önerebilir.
- Canlı Supabase'e migration, seed, veri yazma veya geriye doldurma uygulama.
- Yayın yapma ve ücretli model çağrısı çalıştırma.
- Fazın tüm kabul kapıları geçmeden FAZ_DURUMU.md içinde Tamamlandı yazma.

## Zorunlu okumalar

Dosyaların tamamını oku:

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
- docs/ai-koc/kanitlar/faz-0/envanter-kabul-sonucu.json
- src/lib/curriculum/graph.js
- src/lib/curriculum/readiness.js
- api/_lib/solve/taxonomy.js
- src/lib/topicHelpers.js
- src/lib/subjectSplit.js
- src/lib/examProfile.js
- src/lib/examHelpers.js
- src/content/lessons/index.js
- src/lib/questionLibrary.js
- dört dilin ilerleme ve içerik kimliği dosyaları
- fizik, biyoloji, coğrafya, kimya, tarih ve geometri öğrenme nesnesi/görev kimliği dosyaları
- supabase/migration_question_taxonomy.sql
- library_subjects, library_topics, lesson_activity_events ve soru girişim tablolarını tanımlayan bütün SQL dosyaları

Başlamadan önce FAZ_DURUMU.md içindeki Faz 0 satırının Tamamlandı olduğunu ve kabul kanıtı bağlantılarının mevcut olduğunu doğrula. Değilse Faz 1'i uygulama.

## Faz 0'dan gelen doğrulanmış başlangıç gerçekleri

Bu gerçekleri tekrar keşfetmiş gibi raporlama; kod değişmişse doğrula ve farkı kaydet:

- Mevcut graph LGS 51, TYT 108, AYT 118 ve KPSS 53 olmak üzere toplam 330 konu düğümü taşıyor.
- Mevcut çalışma kimliği sınav + ders + konu adı bileşiminden oluşuyor; konu adı değişince kırılabiliyor.
- library_topics kendi UUID değerlerine sahip fakat graph ile kalıcı birebir eşleme yok.
- Mevcut findNodes bazı durumlarda ilk adayı seçebiliyor ve ders uyuşmazlığında başka dersteki adı yakalayabiliyor.
- Hedef sınav bilinmediğinde YKS/TYT/AYT varsayımları kalıcı eşleştirmeyi yanlış kesinleştirebilir.
- AI Soru Çöz canonical_topic alanı sabit graph kimliği değil, gösterim adıdır; topic_matched=false kayıt kesin konu sayılmaz.
- Genel deneme yalnız ders düzeyi ölçüm taşıyabilir; konuya dağıtılamaz.
- Ders açma, PDF açma, ödev atama, AI sorusu yükleme ve plan oluşturma başarı kanıtı değildir.
- Paketli ders ve soru içeriklerinde metin/slug kimlikleri var; veritabanı UUID yabancı anahtarlarına doğrudan uymaz.
- Dört dil CEFR, dil dersi, beceri, kelime ve alıştırma kimlikleri taşır; sınav konu grafiğine zorla bağlanmamalıdır.
- Fizik, biyoloji ve coğrafya atlaslarında yerel görev kimlikleri; Kimya ve Geometri'de geçici ölçümler vardır. Tarih atlasında mevcut gezinme öğrenme sonucu değildir.
- Diller ve atlaslar çoğunlukla son durum veya toplam saklar; geçmişte gerçekleşmiş tek tek olaylar sonradan uydurulamaz.
- student_question_set_attempts, student_topic_test_progress ve student_test_answers tabloları tanımlı fakat çalışan uygulama akışı tarafından kullanılmıyor.
- lesson_activity_events olay adları ile arayüzdeki osym_simulation_answered adı uyuşmuyor; mevcut ders insert çağrısı da isteği başlatmıyor. Bu faz yalnız sözleşme kararını verir, gerçek yazma düzeltmesi Faz 3'tedir.
- profiles hedef alanları ile ai_student_memory hedef alanları ayrışabiliyor.
- lesson_summaries içindeki öğrenciyle paylaşılmış bölüm dar öğretmen kanıtı adayıdır; lesson_private_notes kesinlikle kapsam dışıdır.
- Özel mesaj, ham defter, ham tahta, ses/video, tema ve gezinme tercihleri ortak öğrenme kanıtı değildir.

## 0. Başlangıç ve değişiklik güvenliği

İlk olarak:

1. Git durumunu kaydet.
2. Bu göreve başlamadan önce var olan değişiklikleri dosya bazında ayır.
3. Faz 0 belgelerindeki sayıları mevcut kodla hızlı ve salt okunur biçimde karşılaştır.
4. Faz 1 için dokunulacak dosyaları listele.
5. Ürün kodu yerine sözleşme ve doğrulama koduna odaklanan çalışma sınırını yaz.

Faz 0 belgelerinin tarihsel bulgularını silme veya yeni sistem çalışıyormuş gibi yeniden yazma. Sonraki durumu ek belge ve Faz 1 kayıtlarıyla göster.

## 1. Kanonik eğitim kimliği

docs/ai-koc/KONU_KIMLIGI_SOZLESMESI.md dosyasını oluştur ve çalışan kod karşılığını geliştir.

### 1.1. Kimlik katmanları

Ortak zarf en az şu katmanları desteklemeli:

- kimlik alanı veya namespace;
- eğitim programı/sınav bağlamı;
- sınıf veya seviye, biliniyorsa;
- ders veya dil;
- konu;
- kazanım, alt beceri veya öğrenme hedefi, gerçekten doğrulanmışsa;
- içerik sürümü ve gösterim adı.

Okul/sınav müfredatı, bağımsız dil programı ve atlas öğrenme nesneleri aynı zarfı kullanabilir; fakat farklı eğitim bağlamları zorla aynı ağaçta eritilemez. Açık ve doğrulanmış ilişki yoksa ayrı kimlik alanlarında kalmalıdır.

Örnek sınırlar:

- TYT Matematik Fonksiyonlar ile AYT Matematik Fonksiyonlar aynı etiket taşısa bile bağlamları doğrulanmadan aynı kimlik değildir.
- İngilizce CEFR B1 dinleme becerisi TYT İngilizce konusu değildir.
- Fizik atlasındaki bir deney, ancak doğrulanmış müfredat ilişkisi varsa konu/kazanıma bağlanır.
- Genel deneme Matematik satırı ders düzeyinde kalabilir; Fonksiyonlar kimliği üretmez.
- PDF veya Tarih atlası gezinmesi öğrenci konusu/kanıtı üretmek zorunda değildir.

### 1.2. Değişmez anahtar

Kanonik kimlik:

- gösterim adı veya slug değişse bile sabit kalmalı;
- ortamdan ortama farklı rastgele UUID değerlerine bağımlı olmamalı;
- aynı adlı farklı bağlamları çakıştırmamalı;
- kod grafiği, veritabanı kataloğu ve paketli içerik tarafından referanslanabilmeli;
- insan tarafından okunur etiketi kimliğin kendisi yapmamalı;
- eski kimlik ve adları sürümlü yönlendirmeyle çözebilmeli;
- öğrenci verisine bakmadan üretilebilmeli veya yetkili sicilden alınabilmeli.

Depo kanıtına göre etiketten bağımsız kararlı public key, ad alanlı deterministik UUID veya eşdeğer bir yöntem seç. Rastgele yeni UUID üretip ortamlar arası eşlemeyi çözümsüz bırakma. Seçimi ve neden reddedilen seçenekleri MIMARI_KARARLAR.md içinde K02 kararı olarak sonuçlandır.

### 1.3. Mevcut graph ve ön koşullar

Mevcut 330 düğümü yeni kimlik katmanına kayıpsız bağla:

- her düğümün tek ve kararlı kimliği olmalı;
- bütün mevcut prerequisite ilişkileri yeni kimliklerle aynı anlamı korumalı;
- takma adlar kimlik değil, sürümlü eşleme girdisi olmalı;
- kazanım bulunmayan düğüme sahte kazanım üretme;
- sınıf/seviye bilinmiyorsa null bırak;
- graph içindeki aynı adların sınav ve ders bağlamı test edilmeli;
- çözülemeyen prerequisite sayısı ölçülmeli ve mevcut duruma göre artmamalı.

readiness ve taxonomy davranışını gerekli uyumluluk katmanıyla koru. Merkezi kimliği kullanmak için bütün mevcut tüketicileri bu fazda yeniden yazma.

## 2. Ortak konu çözümleyici

Tarayıcı ve sunucuda aynı kuralları kullanabilen, saf ve test edilebilir bir çözümleyici geliştir.

### 2.1. Girdi

Çözümleyici en az şunları ayrı alanlar olarak kabul edebilmeli:

- kaynak kodu;
- özgün ders/konu/kazanım metni veya kaynak kimliği;
- sınav/program bağlamı;
- sınıf/seviye;
- ders;
- dil veya atlas bağlamı;
- kaynak içerik sürümü;
- bağlamın kökeni.

Bağlam kökeni en az şu ayrımı taşımalı:

- kaynak kaydında açıkça verilmiş;
- doğrulanmış içerik kataloğundan gelmiş;
- öğrenci profilinden ipucu;
- sistem tarafından çıkarılmış;
- bilinmiyor.

Öğrenci profili veya hedef sınavı yalnız ipucudur; kaynak olayın kesin sınav türü gibi sessizce kullanılamaz.

### 2.2. Çıktı

Her çözüm sonucu en az şu alanları taşımalı:

- durum;
- kanonik kimlik veya null;
- kanonik eğitim bağlamı/konu yolu;
- eşleştirme yöntemi;
- güven sınıfı;
- bağlamın kökeni;
- adaylar ve her adayın ayırt edici bağlamı;
- kullanılan takma ad/eşleme sürümü;
- çözümleyici sürümü;
- eski/sürüm dışı kimlik bilgisi;
- karantina nedeni.

Durumlar en az şunları ayırmalı:

- doğrudan kararlı kimlik eşleşmesi;
- doğrulanmış takma ad eşleşmesi;
- açık bağlamla tek aday;
- belirsiz/birden çok aday;
- eşleşmedi;
- eski kimlik yeni kimliğe yönlendirildi;
- kaynak yalnız ders/program düzeyinde;
- bu kaynak öğrenme konusu üretmiyor.

### 2.3. Yasak davranışlar

- İlk bulunan adayı seçme.
- Hedef bilinmiyorsa varsayılan YKS havuzunu kesin bağlam yapma.
- TYT ve AYT adaylarını bağlamsız birleştirme.
- Ders uyuşmazlığında başka dersteki aynı adı otomatik seçme.
- İçerme benzerliğini kesin eşleşme sayma.
- AI Soru Çöz canonical_topic metnini tek başına kanonik kimlik kabul etme.
- topic_matched=false kayda kimlik atama.
- Serbest günlük veya ödev metninden uydurma kazanım üretme.
- LLM adayını doğrulanmış alias siciline otomatik yazma.

Belirsiz ve eşleşmeyen sonuçlar görünür karantina sözleşmesine sahip olmalı; Faz 2'de kalıcı kuyruğa alınabilecek biçimde tanımlanmalıdır.

## 3. Kaynak kayıt defteri

Faz 0'daki M01–M38 satırlarının tamamını makine tarafından okunabilir bir kayıt defterine dönüştür. İnsan tarafından okunur açıklaması için docs/ai-koc/KAYNAK_KAYIT_DEFTERI.md dosyasını oluştur.

Her kaynak şu sınıflardan tam olarak birinde yer almalı:

- emitter: öğrenciye ait anlamlı olay/kanıt üretecek kaynak;
- derived_readonly: başka kaynaklardan türetilen görünüm, yeni kanıt üretmez;
- catalog: öğrenci olayı değil, içerik/kimlik kataloğu;
- excluded: eğitim kanıtı kapsamı dışında;
- conditional_emitter: yalnız açık ve doğrulanmış bir koşul oluştuğunda dar kanıt üreten kaynak; diğer durumları kanıt değildir.

Her kayıt en az şunları taşımalı:

- M kodu ve sabit source_code;
- sahibi olan modül;
- yetkili alan tablosu veya yerel kaynak;
- kaynak kayıt kimliği ve sürüm üretme kuralı;
- desteklenen record_kind ve semantic_event_type değerleri;
- konu çözümleyici/adaptör kodu;
- varsayılan kanıt sınıfı;
- güven/trust alanını kimin belirlediği;
- actor ve student ilişkisi;
- düzeltme, iptal ve silme yeteneği;
- izinli ölçüm ve metadata alanları;
- güvenli source_locator üretme biçimi;
- saklama sınıfı;
- hedef uygulama fazı;
- sözleşme sürümü.

### 3.1. Mutlaka kapsanacak kaynaklar

- M03 daily_logs;
- M04 mock_exams ve mock_exam_subjects;
- M05 exams;
- M06 homeworks;
- M07 questions ve yalnız öğrenmeye dönük öğretmen yanıtı;
- M08/M09 AI Koç sohbet, plan, eylem ve hafıza ayrımları;
- M11/M12 ai_solution_sessions, ai_solution_events, geri bildirim ve tekrar;
- M14–M20 katalog, DB/paketli/PDF ders ve DB/paketli soru setleri;
- M21–M26 bütün atlas/simülasyon/pilot yüzeyleri;
- M27–M30 dört dilin her biri;
- M31–M33 canlı ders katılımı, ham tahta ve paylaşılmış ders özeti ayrımı;
- M34 defter;
- M35 özel mesajlaşma;
- M36 profiles ve ai_student_memory hedef ayrışması;
- student_question_set_attempts, student_topic_test_progress ve student_test_answers yapılarının mevcut fakat kullanılmıyor durumu;
- lesson_activity_events içindeki mevcut olay adları ve osym_simulation_answered uyumsuzluğu.

### 3.2. Kapsam dışı kalması gerekenler

Aşağıdakileri olay üretici yapma:

- özel messages içeriği ve chat-attachments;
- lesson_private_notes;
- ham canlı ders tahtası, çizim, ses ve video;
- ham kişisel defter, çizim ve ses;
- tema, menü, kenar çubuğu, müzik ve cihaz tercihleri;
- yalnız katalogda gezinme;
- tanıtım, geliştirici önizleme ve demo verileri;
- PDF açmayı başarı/ustalık kanıtı yapan olay;
- Tarih atlasındaki ham harita gezinmesi;
- dil kartı favorisi veya model sesini oynatma.

Paylaşılmış lesson_summaries yalnız öğrenciye açık alanlarıyla öğretmen kaynaklı nitel kanıt adayı olabilir. Öğretmenin özel alanına hiçbir dolaylı erişim açma.

### 3.3. Kayıt defteri tamlık kapısı

Otomatik kontrol şunları doğrulamalı:

- M01–M38 eksiksiz ve tekrarsız;
- App.jsx içindeki 62 Faz 0 rotasının her biri bir kayıt veya açık destek sınıfına bağlı;
- İngilizce, Almanca, Fransızca ve İspanyolcada ayrı ayrı 15 iç rota kapsanıyor;
- yeni öğrenci öğrenme rotası eklenip kayıt defterinde tanımlanmazsa test hata veriyor;
- excluded kaynak yanlışlıkla emitter olamıyor;
- emitter kaynağın çözümleyici, kimlik, olay türü ve hedef fazı eksik kalamıyor.
- Faz 0'daki karar gerekli etiketlerinden hiçbiri sonuçsuz kalmıyor; her biri emitter, conditional_emitter, derived_readonly, catalog veya excluded sınıfına kesin bağlanıyor.

Rota sayısı gelecekte değişirse testi kör biçimde 62'ye sabitleme. Faz 0 anlık görüntüsüyle farkı görünür kılarken gerçek App.jsx içeriğini de dinamik denetle.

## 4. Öğrenme olayı ve kanıt sözleşmesi

docs/ai-koc/OGRENME_KANITI_SOZLESMESI.md dosyasını oluştur ve sürüm 1 doğrulayıcısını geliştir.

### 4.1. Olay ile anlık görüntüyü ayır

record_kind en az şu anlamları ayırmalı:

- event: gerçekleşme zamanı ve tekil eylemi bilinen yeni olay;
- snapshot: kaynağın belirli andaki son durumu veya toplamı;
- correction: önceki kaynak sürümünü düzelten kayıt;
- tombstone/revocation: silinen, iptal edilen veya artık geçerli olmayan kayıt;
- derived: ham olay değil, sürümlü hesap sonucu.

Dil ve atlas yerel depolarındaki son durum/toplamlardan geçmişteki tek tek çalışma olayları üretme. Snapshot ne biliyorsa onu taşımalı; bilinmeyen olay zamanı, deneme sırası, yardım veya zorluk null kalmalıdır.

### 4.2. Ortak alanlar

Sözleşme en az şu alan ailelerini tanımlamalı:

- schema_version;
- record_kind;
- event_id veya kayıt kimliği;
- client_action_id, yalnız yeni istemci eyleminde;
- student_id, yalnız güvenilir sunucu katmanının ekleyeceği alan;
- actor_id ve actor_role;
- source_code;
- source_record_id;
- source_revision;
- source_locator, yalnız yetkili iç referans;
- semantic_event_type;
- activity_type;
- occurred_at;
- occurred_at_precision: exact, day veya unknown;
- recorded_at, yalnız sunucu zamanı;
- education_context_id, subject_id, topic_id ve objective_id;
- topic_resolution sonucu veya referansı;
- oturum, girişim, içerik, soru, ders, ödev, deneme ve plan ilişkileri;
- ölçüm alanları;
- evidence_class;
- evidence_strength;
- trust/provenance;
- düzeltme, geçersiz kılma ve silme ilişkisi;
- sınırlı metadata;
- sözleşme, kaynak adaptörü ve eşleştirici sürümü.

student_id, actor kimliği, recorded_at, evidence_strength, trust ve doğrulanmış konu kimliği istemciden güvenilir alan olarak kabul edilmemeli. İstemci bunları gönderirse sunucu doğrulayıcı reddetmeli veya açıkça güvenli sunucu değerleriyle değiştirmelidir; davranış sözleşmede kesin olmalı.

### 4.3. Kanıt sınıfları

En az şu anlamları birbirinden ayır:

- direct_measurement: öğrencinin cevap veya ölçülebilir görev sonucu;
- student_self_report: günlük kayıt, biliyorum işareti veya dış çalışma beyanı;
- teacher_feedback: öğrenciye paylaşılmış öğrenmeye dönük öğretmen değerlendirmesi;
- exposure: ders/PDF/içerik açma gibi düşük güçlü maruz kalma;
- system_observation: yardım isteme, bırakılan girişim veya ölçülebilir sistem olayı;
- model_inference: AI tarafından çıkarılan fakat doğrulanmış gerçek olmayan sınırlı sonuç;
- derived_result: sürümlü deterministik hesap sonucu;
- operational_only: kota, sohbet, gezinme veya teknik olay; öğrenme profiline katılmaz.

Kanıt sınıfı ile strength aynı şey değildir. Strength kaynak kayıt defterindeki güvenilir kurallardan ve ölçüm koşullarından gelir; istemci veya LLM keyfî biçimde yüksek yapamaz.

### 4.4. Ölçüm anlamları

Ölçüm sözleşmesi şunları açıkça tanımlamalı:

- correct, incorrect ve empty ayrı alanlar;
- total ile işaretlenen soru paydası ayrımı;
- oran hesaplanacaksa payda ve formül sürümü;
- net değerinin kaynakta verilmiş mi hesaplanmış mı olduğu;
- net formül sürümü ve sınav türü; LGS yanlış/3 ile diğer yanlış/4 ayrımı;
- duration değeri ve kaynağı: aktif ölçüm, yaklaşık, varsayılan veya öğrenci beyanı;
- zorluk bilgisinin kaynağı ve bilinmiyor durumu;
- yardım/çözüm görme durumu;
- student_correct bilgisinin kökeni: öğrenci beyanı, sistem ölçümü veya model kontrolü;
- model kontrolünün direct_measurement sayılmaması;
- tek bir başarı yüzdesinin farklı kaynakları körlemesine birleştirmemesi;
- genel deneme ders satırının konu performansına dönüşmemesi.

Doğru + yanlış + boş ile total tutarsızsa kabul/karantina davranışını belirle. Eski veri korunabilir; fakat sessizce düzeltilmiş gerçek gibi sunulamaz.

### 4.5. Zaman ve güncellik

- occurred_at olayın gerçekleşme zamanıdır.
- recorded_at sunucunun kaydetme zamanıdır.
- Yalnız gün biliniyorsa sahte saat üretme; day precision kullan.
- Snapshot için as_of alanı veya eşdeğer açık anlam tanımla.
- Gelecek tarih, geç gelen olay ve saat dilimi sınırlarını belirle.
- Europe/Istanbul ürün gününü hesaplarken UTC saklama ve gösterim sorumluluklarını ayır.
- Kaynak tarihi bilinmiyorsa recorded_at değerini gerçekleşme zamanı gibi kullanma.

### 4.6. Metadata ve hassas içerik

Metadata:

- kaynak bazlı allowlist ile sınırlı olmalı;
- anahtar sayısı, derinlik, metin ve toplam bayt sınırı taşımalı;
- serbest komut veya çalıştırılabilir içerik kabul etmemeli;
- tam soru metni, soru görseli, öğretmen özel notu, ham mesaj, ham defter, ses/video, erişim anahtarı veya kişisel gereksiz içerik taşımamalı;
- source_locator içinde doğrudan public dosya URL'si kullanmamalı;
- yetkili iç kayda sonradan erişilebilecek opak referans kullanmalı.

## 5. Tekrarsızlık, düzeltme ve silme sözleşmesi

Bu faz kalıcı olay tablosunu oluşturmaz; fakat Faz 2'nin uygulayacağı kesin anahtar ve ilişki kurallarını tanımlar.

### 5.1. Yeni istemci eylemi

- Her mantıksal öğrenci eylemi için client_action_id üretilir.
- Ağ yeniden denemesinde aynı eylem aynı client_action_id ile gönderilir.
- Farklı gerçek girişimler aynı kimliği paylaşmaz.
- Sunucu benzersizliği öğrenci + kaynak + client_action_id bağlamında uygular.
- Düğmeyi kilitlemek veya zaman damgası kullanmak tek başına tekrarsızlık değildir.

### 5.2. Mevcut kaynak/backfill

Backfill veya snapshot tekrar anahtarı en az şu bileşenlerin anlamını taşımalı:

- source_code;
- source_record_id;
- source_revision;
- semantic_event_type veya snapshot sınıfı.

Timestamp veya payload hash tek başına anahtar olamaz. İki farklı gerçek çalışmayı yanlışlıkla birleştirmemeli; aynı kaynak sürümünü tekrar çalıştırınca çoğaltmamalıdır.

### 5.3. Düzeltme ve silme

- Aynı alan kaydının yeni sürümü ikinci bağımsız çalışma sayılmaz.
- correction önceki kaynak kimliği/sürümünü açıkça hedefler.
- tombstone silinen veya iptal edilen kaydın türetilmiş etkisini kaldırabilecek ilişki taşır.
- Eski sohbet metni tarihsel belge olarak kalabilir; güncel kanıt sayılmaz ve dayanağının geçersiz olduğu anlaşılabilir olmalıdır.
- Hesap silme, kaynak silme ve saklama süresi sona ermesi ayrı nedenlerdir.
- Ham içerik silindikten sonra ortak metadata içinde kopyası yaşamamalıdır.

S02, S11 ve S14 senaryolarının tekrar/düzeltme anlamını bu sözleşmeyle test et.

## 6. Kaynak özel adaptör sözleşmeleri

Gerçek adaptörleri henüz kaynak ekranlarına bağlama; her kaynak ailesi için saf dönüştürme sözleşmesi ve sentetik fixture oluştur.

### 6.1. Ana akademik kayıtlar

- daily_logs: serbest Ders - Konu ayrıştırması, dış çalışma ve student_self_report.
- mock_exams/mock_exam_subjects: sınav + ders düzeyi sonuç; konu uydurma yok; iki tablo ilişkisinin otoritesi.
- exams: sınav türü bilinmiyorsa unknown; eski score, D/Y/B/net ayrımı.
- Öğrencinin elle girdiği genel veya branş denemesi doğrulanmış dış sınav sonucu değil, student_self_report olarak kalmalı; ileride doğrulanmış içe aktarım ayrı provenance kullanmalı.
- homeworks: actor öğretmen, student alıcı; atama/tamamlama performans değildir.
- questions: öğrenci yüklemesi, durum ve öğrenciyle paylaşılmış öğretmen yanıtı ayrı olay/sınıf.
- profiles ve ai_student_memory: hedefin onaylı profil gerçeği ile Koç tercih hafızası ayrımı ve otorite kararı.
- ai_study_tasks: önerildi, onaylandı, işaretlendi ve ölçülebilir çalışma sonucu birbirinden ayrı.

### 6.2. AI Soru Çöz

- ai_solution_sessions yükleme/çözüm varlığını öğrenci başarısı sayma.
- canonical_topic alanını eski display label kabul et; ortak çözücüden geçmeden kanonik kimlik yapma.
- topic_matched=false sonucu karantinaya al.
- student_correct kökeni yoksa direct_measurement sayma.
- self-report ve model check aynı alanı ezdiği için mevcut snapshot belirsizliğini koru.
- yardım olayını performans değil system_observation/sürtünme sinyali olarak tanımla.
- geri bildirimde çözüm yanlış denmişse model çözüm kalitesini öğrenci bilgisi gibi kullanma.
- review_status tekrar planı/tamamlanmasıdır; eski yanlış kanıtını kendiliğinden silmez.

### 6.3. Ders ve soru kütüphanesi

- DB yapılandırılmış ders, paketli ders ve PDF yolu ayrı source_code veya açık alt tür taşımalı.
- lesson_opened exposure; quiz_answered direct_measurement; lesson_completed çalışma/tamamlama, ustalık değil.
- audio_started ve visual_audio_clicked öğrenme başarısı değildir.
- osym_simulation_answered için sözleşme adı ve mevcut SQL uyumluluk kararı ver; gerçek insert düzeltmesini Faz 3'e bırak.
- library topic UUID, graph kimliği ve paketli placement arasında sürümlü eşleme biçimi tanımla.
- DB ve paketli soru seti için content set, question ve attempt kimliklerini ayır.
- student_question_set_attempts ve kullanılmayan iki alternatif ilerleme tablosunun Faz 2/3 otorite kararına girdi olacak durumunu yaz; üç paralel gerçeklik üretme.

### 6.4. Diller

İngilizce, Almanca, Fransızca ve İspanyolca için ayrı fixture ve aynı çekirdek sözleşmeyi kullan:

- dil/program, CEFR seviye, ders, beceri, kelime ve alıştırma kimliği;
- seviye tespit sonucu ile resmî yeterlilik ayrımı;
- ders/alıştırma cevabı, tekrar kartı, hata izi ve öğrenci beyanı ayrımı;
- Biliyorum işaretini self-report;
- kart favorisini excluded;
- telaffuz kaydı ve model sesi oynatmayı ölçümsüz;
- yaklaşık süreyi exact active duration yapmama;
- localStorage son durum/toplamını snapshot olarak ifade etme;
- kartDesteleri ve kartFavorileri alanlarının aktarım sözleşmesinde unutulmaması, fakat kanıt anlamlarının ayrılması.

### 6.5. Atlas ve simülasyonlar

- Fizik, Biyoloji ve Coğrafya görev/kontrol kimliklerini doğrulanmış içerik manifestine bağlama biçimi;
- yerel sayaç ve son durumların snapshot niteliği;
- aynı etkileşimin tarihçesi yoksa geçmiş olay uydurmama;
- Kimya MiniTest ve Geometri pilotunun geçici cevabı için gelecekteki attempt kimliği sözleşmesi;
- Tarih/Padişah gezinmesini ve müzik seçimini excluded;
- tema, rozet, favori ve kamera/konumun öğrenme sonucu olmaması;
- atlas görevi ile müfredat konusu arasındaki ilişkinin yalnız doğrulanmış eşleme varsa kurulması.

### 6.6. Canlı ders, defter ve mesajlaşma

- lesson_join/leave ve açık kalma süresi ustalık değildir.
- lesson_summaries yalnız shared_with_student kapsamında, actor=teacher ve teacher_feedback olabilir.
- lesson_private_notes hiçbir koşulda kaynak kayıt defterinden okunamaz.
- ham tahta, materyal etkileşimi, ses/video ve sohbet excluded.
- kişisel defter ham içeriği excluded; ileride öğrencinin açıkça paylaştığı yapılandırılmış sonuç ayrı kaynak gerektirir.
- messages ve chat-attachments excluded.

## 7. Paylaşılan doğrulama kodu

Depo üslubuna uyan ortak modüller geliştir. Dosya yerini mevcut bağımlılık sınırlarını inceleyerek seç; yalnız sunucuda çalışan kodu tarayıcı paketine taşımamaya dikkat et.

En az şu saf yetenekler bulunmalı:

- kanonik kimlik oluşturma ve doğrulama;
- eski kimlik/alias çözme;
- bağlam kontrollü konu çözümleme;
- kaynak kayıt defteri doğrulama;
- olay zarfı doğrulama;
- istemci girdisi ile güvenilir sunucu zenginleştirmesini ayırma;
- ayrıcalıklı alan enjeksiyonunu reddetme;
- sayı, oran, net, süre ve tarih sınırı;
- occurred_at precision doğrulama;
- metadata allowlist, derinlik ve boyut doğrulama;
- client_action_id ve backfill tekrar anahtarı oluşturma/doğrulama;
- correction/tombstone ilişki doğrulama;
- güvenli source_locator doğrulama.

Yeni ağır bağımlılık ekleme. Mevcut test düzeni ve saf JavaScript yeterliyse onu kullan. Doğrulama hataları kararlı kodlar üretmeli; ham kişisel veri veya gizli alan hata metnine taşınmamalı.

Mevcut graph/readiness/taxonomy tüketicilerine kırıcı değişiklik yapma. Gerekiyorsa uyumluluk sarmalayıcısı ekle; eski API'yi sessizce farklı anlamda çalıştırma.

## 8. Yerel katalog ve migration kararı

Kanonik kimlik/eşleme için veritabanı yapısı gerekiyorsa migration dosyalarını hazırla. Migration:

- tekrar çalıştırılabilir;
- mevcut library_subjects/library_topics satırlarını bozmayan;
- rastgele tahminle eşleme yazmayan;
- paketli ve graph kimliklerini sürümlü eşlemeye uygun;
- kısıt, benzersizlik ve indeksleri açık;
- RLS ve okuma/yazma sahipliğini açık;
- geri alma veya güvenli ileri düzeltme notu olan;
- setup_new_project.sql ile yeni kurulum etkisini açıklayan

biçimde olmalı.

Bu fazda ortak learning_events/evidence olay tablosunu kurma; o Faz 2'nin çekirdeğidir. Kanonik katalog için migration gerekmiyorsa sırf tablo üretmek için tablo ekleme ve gerekçeyi belgeye yaz.

Migration dosyasını canlı Supabase'e uygulama. Yerel SQL yapısal test imkânı varsa sentetik/veri içermeyen ortamda doğrula. Canlı uygulama gerekiyorsa FAZ_DURUMU.md durumunu Yerel olarak tamamlandı, canlı onay bekliyor olarak yaz.

## 9. Mimari kararları sonuçlandır

MIMARI_KARARLAR.md içindeki şu kararları Faz 1 düzeyinde açıkça sonuçlandır:

- K01: alan tablosu, katalog, snapshot ve ortak kanıt arasındaki anlam/otorite sınırı;
- K02: değişmez kanonik kimlik;
- K03: paketli içerik kimliği ve sürümleme;
- K05: düzeltme, iptal, tombstone ve eski analizin güncellik ilişkisi;
- K08: kanıt sınıfı, strength ve provenance ayrımı;
- K09: öğrenciye gösterilecek güvenli kaynak referansı biçimi;
- K10: veri sınıfı, saklama, silme ve ham içeriğin kopyalanmaması;
- K11: canlı ders, defter ve mesajlaşmanın dar sınırı.

K04'ün kalıcı benzersizlik uygulaması Faz 2'de kesinleşebilir; fakat client_action_id ve backfill anahtar sözleşmesi bu fazda kesin olmalı. K06'nın gerçek bulut taşıması Faz 3/5'tedir; snapshot, sahiplik ve belirsiz eski yerel veri anlamı bu fazda kesinleşmeli. K12'nin çalışma zamanı davranışı sonraki fazlardadır; kaynak kullanılamıyor ile kaynak boş ayrımı olay/araç sözleşmesinde tanımlanmalıdır.

Her kararda şunları yaz:

- seçilen yaklaşım;
- neden;
- reddedilen seçenekler;
- veri kaybı/yanlış eşleme riski;
- geriye uyumluluk etkisi;
- hangi sonraki fazın neyi uygulayacağı.

Kararları seçenek listesi halinde açık bırakma.

## 10. Zorunlu testler

### 10.1. Kimlik testleri

- Konu etiketi değişince kimlik değişmiyor.
- Alias değişince tarihsel kimlik korunuyor.
- Aynı adlı TYT/AYT/LGS/KPSS konuları bağlamsızken birleşmiyor.
- Ders uyuşmazlığı başka derse gizlice bağlanmıyor.
- Hedef profil ipucu tek başına kesin sınav bağlamı yapmıyor.
- Hedef bilinmiyorsa ilk YKS adayı seçilmiyor.
- Türkçe büyük/küçük harf, noktalı/noktasız i ve aksan normalleştirmesi aday üretirken kimliği değiştirmiyor.
- Alt konu daha kesin olduğunda ana konu ilişkisi doğru; doğrulanmamış alt beceri null.
- 330 graph düğümünün her biri tek kimliğe bağlanıyor.
- Prerequisite kenarları korunuyor ve çözülemeyen kenar sayısı artmıyor.
- Farklı ortam library UUID değerleri aynı kanonik içeriğe sürümlü eşleme ile bağlanabiliyor.
- Paketli ders/soru ile DB içeriği yalnız doğrulanmış eşlemede aynı kimliği alıyor.
- Eski kimlik yeni kimliğe izlenebilir biçimde yönlendiriliyor.
- AI Soru Çöz topic_matched=false kanonik kimlik almıyor.
- Genel deneme ders düzeyinde kalıyor.
- CEFR dil becerisi sınav müfredatı konusuna dönüşmüyor.
- Atlas görevi doğrulanmamışsa müfredat kazanımı almıyor.

### 10.2. Kanıt sözleşmesi testleri

- event, snapshot, correction, tombstone ve derived birbirine karışmıyor.
- Snapshot'tan geçmiş olay zamanı veya deneme sayısı uydurulamıyor.
- direct_measurement, self-report, teacher feedback, exposure, system observation ve model inference ayrı.
- Ders/PDF açma ustalık kanıtı olamıyor.
- AI sorusu yükleme yanlış cevap sayılamıyor.
- Ödev atama/tamamlama konu başarısı sayılamıyor.
- student_correct provenance bilinmiyorsa doğrudan ölçüm olamıyor.
- LGS ve diğer net formülleri sürüm ve sınav türü olmadan karışmıyor.
- D/Y/B/total tutarsızlığı tanımlı hata veya karantina sonucu veriyor.
- exact/day/unknown zaman hassasiyeti sahte saat üretmiyor.
- İstemci student_id, actor_id, recorded_at, strength, trust veya doğrulanmış topic_id enjekte edemiyor.
- Büyük, derin, izin dışı veya ham kişisel içerik taşıyan metadata reddediliyor.
- source_locator public dosya URL'si veya başka öğrenci kimliği kabul etmiyor.
- Aynı client_action_id aynı tekrar anahtarını; farklı gerçek eylem farklı anahtarı üretiyor.
- Aynı source revision backfill tekrarında aynı anahtarı üretiyor.
- Correction ikinci bağımsız çalışma sayılmıyor.
- Tombstone önceki kaydın etkisini kaldırabilecek ilişkiyi taşıyor.

### 10.3. Kaynak kayıt defteri testleri

- M01–M38 eksiksiz ve sınıflandırılmış.
- Faz 0 rota sicili ile mevcut App.jsx arasında açıklanmayan fark yok.
- Her dilin 15 iç rotası ayrı doğrulanıyor.
- Yeni öğrenme rotası kayıt defteri olmadan testi geçemiyor.
- excluded kaynak emitter olamıyor.
- emitter için kimlik, olay türü, kanıt sınıfı, düzeltme davranışı ve hedef faz zorunlu.
- Faz 0'dan kalan sonuçlandırılmamış decision_required sınıfı bulunmuyor.
- lesson_private_notes, messages, ham defter/tahta/ses/video ve UI tercihleri excluded.
- lesson_summaries yalnız paylaşılmış dar alanla teacher_feedback adayı.

### 10.4. Faz 0 senaryo fixture testleri

KABUL_SENARYOLARI.md içinden en az şu senaryoların Faz 1 sözleşme kısmını çalıştırılabilir fixture yap:

- S02: aynı konu/dört kaynak, aynı testin tekrarı ve farklı kanıt sınıfları;
- S05: tek doğru ve yetersiz örnek;
- S07: farklı sınav türleri ve net formülü;
- S08: eşleşmeyen konu, karantina ve istem enjeksiyonu metni;
- S10: dört dilin ayrı bağlamı ve yerel snapshot sahiplik belirsizliği;
- S11: kaynak revizyonu, düzeltme ve silme;
- S14: tekrar gönderim, yarım alan kaydı ve tek mantıksal sonuç.

Bu faz AI Koç cevabını değerlendirmez. Fixture'lar kimlik, olay biçimi, kanıt sınıfı, tekrar anahtarı ve düzeltme ilişkisini doğrular.

### 10.5. Geriye dönük testler

En az şunları çalıştır:

- node scripts/test-curriculum.mjs
- node scripts/test-context-curriculum.mjs
- npm run test:ai-solve
- npm run test:library-curriculum
- dört dilin mevcut testleri
- kimlik manifestine dokunulan bütün atlas/simülasyon testleri
- eklenen Faz 1 sözleşme ve kayıt defteri testleri
- npm run build

Merkezi dosyalardaki değişiklik geniş etki yaratıyorsa BAZ_CIZGISI.md içindeki güvenli testlerin tamamını çalıştır. Başarılı komut sayısını assertion sayısı gibi sunma. Ücretli veya canlı veri kullanan testleri açık onay olmadan çalıştırma.

## 11. Kanıt ve belge çıktıları

En az şu çıktıları oluştur veya güncelle:

- docs/ai-koc/KONU_KIMLIGI_SOZLESMESI.md
- docs/ai-koc/OGRENME_KANITI_SOZLESMESI.md
- docs/ai-koc/KAYNAK_KAYIT_DEFTERI.md
- makine tarafından okunabilir kaynak kayıt defteri;
- ortak kimlik/çözümleyici/doğrulayıcı kodu;
- Faz 1 otomatik testleri;
- docs/ai-koc/kanitlar/faz-1 altındaki test günlükleri;
- docs/ai-koc/kanitlar/faz-1/faz-1-kabul-sonucu.json;
- güncellenmiş docs/ai-koc/MIMARI_KARARLAR.md;
- güncellenmiş docs/ai-koc/FAZ_DURUMU.md.

Kabul sonucu JSON dosyasında en az şunlar olsun:

- oluşturulma zamanı ve Git başı;
- kanonik kimlik/alias/redirect sayıları;
- graph düğüm ve prerequisite doğrulama sayıları;
- kayıt defteri kaynak/rota/dil kapsamı;
- test komutları ve çıkış kodları;
- senaryo fixture sonuçları;
- migration oluşturuldu mu ve canlıya uygulandı mı;
- ürün kodundan gerçek olay yazımı başlatıldı mı;
- canlı/ücretli çağrı yapıldı mı;
- Faz 1 kabul sonucu.

Kanıt dosyalarına anahtar, token, gerçek öğrenci kimliği, ham soru, özel not veya kişisel içerik yazma.

## 12. Faz sınırları — yapma

Bu fazda:

- ortak learning event/evidence kalıcı tablosunu ve işleme kuyruğunu kurma;
- mevcut ekranlardan gerçek olay göndermeye başlama;
- lesson_activity_events yazma hatasını ürün kodunda düzeltme;
- soru sonuç ekranını kalıcı girişim tablosuna bağlama;
- günlük, deneme, ödev veya AI Soru Çöz adaptörlerini üretim akışına bağlama;
- dil/atlas localStorage verisini buluta taşıma;
- öğrenci-konu puanı veya hafıza projeksiyonu hesaplama;
- AI Koç sistem istemini veya bağlam araçlarını genişletme;
- kullanıcıya görünen arayüzü yeniden tasarlama;
- canlı migration, backfill, gerçek öğrenci testi veya yayın yapma.

Sözleşmeyi doğrulamak için saf adaptör fixture'ları ve uyumluluk sarmalayıcıları yazabilirsin. Sonraki fazın uygulamasını erkenden yapıp Faz 1'i büyütme.

## Kabul kapıları

Faz 1 yalnız şu koşulların tamamında tamamlanmıştır:

- Açıkça aynı eğitim bağlamı ve konuyu taşıyan bütün zorunlu kaynaklar aynı değişmez kimliğe çözülebiliyor.
- Yalnız ders/program düzeyi bilgi taşıyan kaynaklar o düzeyde kalıyor; sahte konu/kazanım üretmiyor.
- Öğrenme sinyali üretmeyen veya kapsam dışı kaynak kimlik/kanıt üretmiyor.
- Aynı adlı farklı sınav, seviye, ders, dil ve atlas bağlamları yanlış birleşmiyor.
- Etiket yeniden adlandırma kanonik kimliği değiştirmiyor.
- 330 mevcut graph düğümü ve prerequisite ilişkileri kayıpsız doğrulanıyor.
- Belirsiz veya eşleşmeyen kayıt ilk adaya bağlanmıyor ve karantina sonucu taşıyor.
- Olay, snapshot, correction, tombstone ve derived anlamları belgeli ve kodla doğrulanıyor.
- Doğrudan ölçüm, öğrenci beyanı, öğretmen geri bildirimi, maruz kalma, sistem gözlemi ve model çıkarımı ayrı kalıyor.
- İstemci güvenilir öğrenci, actor, zaman, strength, trust veya konu alanlarını enjekte edemiyor.
- Tekrar anahtarı yeni istemci eylemi ile backfill/snapshot için ayrı ve deterministik.
- M01–M38 kayıt defterinde eksiksiz; mevcut rotalar ve dört dil alt rotaları otomatik denetleniyor.
- Faz 0'ın S02, S05, S07, S08, S10, S11 ve S14 senaryolarının sözleşme fixture'ları geçiyor.
- Mevcut graph/readiness/taxonomy ve etkilenen ürün testleri geriye dönük geçiyor.
- Üretim derlemesi geçiyor.
- Mimari kararlar K01, K02, K03, K05, K08, K09, K10 ve K11 için sonuçlandırılmış.
- Ortak olay ağı veya kaynak entegrasyonu erkenden uygulanmamış.
- Canlı şema, canlı veri, ücretli model ve yayın izinsiz değiştirilmemiş.

Migration gerekmiyorsa ve bütün kapılar geçiyorsa durum Tamamlandı olabilir. Yerel migration hazır fakat canlı uygulama Faz 2'nin zorunlu ön koşuluysa durum Yerel olarak tamamlandı, canlı onay bekliyor olmalı. Herhangi bir teknik kabul kapısı geçmiyorsa Devam ediyor veya gerçek engel varsa Bloke yaz.

## Faz sonu raporu

FAZ_DURUMU.md içinde yalnız Faz 1 satırını ve Faz 1 ayrıntı bölümünü gerçek kanıtlarla güncelle.

Son kullanıcı raporu kısa ve şu sırada olsun:

1. Seçilen değişmez kimlik yöntemi.
2. Belirsiz eşleşmenin davranışı.
3. Kaynak kayıt defteri kapsamı.
4. Test ve senaryo sonuçları.
5. Migration/canlı uygulama durumu.
6. Faz 2'ye geçilip geçilemeyeceği.

Kabul kapıları geçmeden tamamlandı deme; yalnız kod yazıldı veya derleme geçti ifadelerini başarı kanıtı sayma.
