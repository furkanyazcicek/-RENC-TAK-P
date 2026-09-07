# AI Koç başlangıç kabul senaryoları — Faz 0

Tarih: 7 Eylül 2026. Bunlar **sentetik test girdileri ve beklenen ürün davranışlarıdır**; mevcut ürünün bu senaryolardan geçtiği iddia edilmez. Gerçek öğrenci, hesap, anahtar veya canlı kayıt kullanılmaz. Bugünkü bağlantı sınırları [envanterde](MEVCUT_DURUM_ENVANTERI.md), çalıştırılan testler [baz çizgisinde](BAZ_CIZGISI.md) ayrıdır.

## Ortak test düzeni

- Saat sabit: `2026-09-07T09:00:00+03:00`; iş günü Europe/Istanbul.
- A öğrencisi: `00000000-0000-4000-8000-000000000001`; B öğrencisi: `00000000-0000-4000-8000-000000000002`. Her senaryo bağımsız temiz veri kümesiyle başlar.
- Varsayılan sınav TYT, ders Matematik. “Fonksiyonlar” kimliği test kurulurken mevcut `buildGraph` çıktısından TYT + Matematik bağlamıyla çözülür; aşağıdaki `K-FONK` yalnız senaryo takma adıdır, yeni kanonik kimlik değildir. Alt kazanım bilinmiyorsa `null` kalır.
- `D/Y/B`: doğru/yanlış/boş. Başarı oranının paydası açık yazılır; soru sonucu ve öğrenci beyanı ayrı tutulur.
- Her girdi kaynak türü, sabit sentetik kayıt kimliği, öğrenci, gerçekleşme zamanı, sürüm ve varsa düzeltme ilişkisi taşır. Her önemli sayı ilgili kayıt kimlikleriyle denetlenir.
- Henüz sisteme bağlanmayan girdiler için iki koşu gerekir: **bugünkü kapsam** koşusu eksikliği açıklamalı; **hedef kapsam** koşusu yeni fazın adaptörüyle tüm kanıtları birleştirmelidir. Gelecekteki davranış bugün çalışıyormuş gibi kabul edilmez.

## S01 — Hiç verisi olmayan öğrenci

**Girdi:** A'nın profili yalnız kimlik/ad/öğrenci rolü; tüm öğrenme tabloları ve yerel depolar boş. Soru: “Nerede eksiğim var, bugün ne çalışayım?”

**Beklenen gerçekler:** Kayıt sayısı 0; hedef sınav, başarı, çalışma kapasitesi bilinmiyor. Veri kaynağı hatası ayrıca verilirse “kayıt yok” yerine “veriye erişilemiyor” denmeli.

**İzin verilen çıkarım:** Kişisel konu sıralaması için kanıt yetersiz.

**Yasak çıkarım:** %0 başarı/tembellik, uydurma hedef veya zayıf konu, sıralama tahmini, geçmiş çalışma hikâyesi.

**Öneri:** Hedefi netleştiren tek soru ve kısa tanılama çalışması. Ölçüm oluşmadan kalıcı ustalık kaydı veya onaysız plan yazılmaz. Faz 6–7; boş bağlam birim testleriyle bağlantılıdır.

## S02 — Aynı konu, dört kaynak

**Girdi:** `ders-02` 2 Eylül ders tamamlama; `test-02` 3 Eylül 20 soruda 12/6/2; `solve-02a/b` 4 Eylül iki soru yükleme ve her birinde tanım kümesi adımında bir yardım isteği; `dis-02` 5 Eylül günlük beyan 30 soruda 21/9/0, 45 dk. Hepsi K-FONK; yalnız yardım metninde tanım kümesi alt bağlamı var.

**Beklenen gerçekler:** Bir ders tamamlama; platform testi %60 (12/20), işaretlenenlerde %66,7 (12/18); dış çalışma 30 soru beyanı; iki çözüm oturumu ve iki yardım olayı. Yüklemeler 2 yanlış veya 2 çözülmüş öğrenci sorusu sayılamaz. Aynı test bitirme olayı ikinci kez gönderildiğinde 20 soru, 40 değil.

**İzin verilen çıkarım:** Tanım kümesi ayrımında güçlük olasılığı, yardımın içeriğiyle sınırlı ve düşük güvenle ifade edilebilir; tüm fonksiyonlar alanında kesin eksiklik değil.

**Yasak çıkarım:** Ders bitirme = ustalık; AI çözümünün doğru cevabı = öğrencinin başarısı; 52 öğrencinin çözdüğü soru; dış beyanı platformda doğrulanmış cevaplarla tek kesin oran halinde birleştirme.

**Öneri:** Tanım/görüntü kümesinden 15 soruluk hedefli çalışma, doğrulanmış içerik bağlantısı ve yeniden ölçüm. Bugün ders/test/yardım olayları Koç'a ulaşmadığından dört kaynaklı hikâye iddia edilemez. Faz 3–4–6–7–8.

## S03 — Çok süre, az soru

**Girdi:** `dis-03a..e`, 1–5 Eylül günlük 120 dk; her gün 1/1/0. Toplam 600 dk ve 10 soru, 5 doğru. Hiç deneme yok.

**Beklenen gerçekler:** 600 dk öğrenci beyanı, 10 soru, %50 (5/10). Bu süre aktif ve kesintisiz ölçülmüş değildir.

**İzin verilen çıkarım:** Kaydedilmiş çalışmalar süre ağırlıklı; soru örneklemi küçük.

**Yasak çıkarım:** “600 dakika boşa gitti”, öğrenme bozukluğu/psikolojik teşhis, çok süre = yüksek ustalık.

**Öneri:** Okumadan sonra kısa bir kontrol testi; sürdürülebilir süreyi öğrenciyle doğrulama. Faz 6–7.

## S04 — Ders açıldı, ölçüm yok

**Girdi:** `ders-04` açılma, `pdf-04` PDF açma, 30 dk açık sekme; tamamlama/cevap yok. Paketli ve DB ders varyantları ayrı koşulur.

**Beklenen gerçekler:** Yalnız maruz kalma; başarılı soru sayısı bilinmiyor. Bugünkü DB yazma kusuru veya paketli/PDF kayıt yokluğu varsa açılma bile kalıcı gerçek sayılamaz.

**İzin verilen çıkarım:** Öğrencinin bu içeriği ziyaret etmiş olabileceği, yalnız güvenilir kayıt bulunduğunda.

**Yasak çıkarım:** 30 dk etkin öğrenme, ders tamamlandı, konu öğrenildi, ustalık yüzdesi.

**Öneri:** 3–5 kontrol sorusu veya bölümün kendi ölçümü. Faz 3 ve 6.

## S05 — Tek doğru, yetersiz kanıt

**Girdi:** `cevap-05`, 6 Eylül tek kolay soruya ilk denemede doğru cevap; süre ve yardım bilgisi yok.

**Beklenen gerçekler:** 1/1 doğru, örnek sayısı 1, tek zorluk, tek tarih.

**İzin verilen çıkarım:** Bu soruda başarı; konu durumu için düşük güven.

**Yasak çıkarım:** %100 ustalık, kalıcılık, tüm zor sorulara hazır olma; bilinmeyen yardım durumunu “yardımsız” sayma.

**Öneri:** Farklı biçim ve zorluklarda birkaç soru, daha sonra aralıklı tekrar. Faz 1 kanıt sözleşmesi ve Faz 6.

## S06 — Çelişkili kanıtlar

**Girdi:** `test-06a` 1 Eylül orta düzey platform testi 18/2/0; `dis-06` 5 Eylül dış beyan 8/12/0; `solve-06` 6 Eylül yardım isteği. K-FONK, farklı kaynak/soru kümeleri.

**Beklenen gerçekler:** %90 platform sonucu ve %40 beyan ayrı, tarih ve örnekleriyle gösterilir; yardım başarı sonucu değildir.

**İzin verilen çıkarım:** Sonuçların değişken olduğu; kaynak, zorluk veya unutma olasılıklarının henüz doğrulanmadığı.

**Yasak çıkarım:** İyi sonucu seçip “ustasın”; kötü sonucu seçip “geriledin”; farklı sınama koşullarını tek kesin neden altında birleştirme.

**Öneri:** Aynı alt kazanımda karşılaştırılabilir kısa yeniden ölçüm. Faz 6–7.

## S07 — Farklı sınav türleri

**Girdi:** `mock-07a/b` TYT 1 ve 5 Eylül Matematik 24/8/8 ve 28/4/8; `mock-07c` AYT 6 Eylül Matematik 18/8/14; `mock-07d` LGS 6 Eylül Matematik 15/3/2. Bir `branch-07` sınav türü bilinmeyen, eski yalnız puan kaydı.

**Beklenen gerçekler:** TYT Matematik neti 22→27; AYT 16; LGS 14. LGS yanlış/3, TYT/AYT yanlış/4. Sınav toplamı değil, verilen ders satırıdır. Eski puan nete çevrilmez. Girilmeyen dersler sıfır başarı sayılmaz.

**İzin verilen çıkarım:** Yalnız aynı tür ve dersin iki kaydında 5 net fark; iki denemeden uzun vadeli trend için güven sınırlı.

**Yasak çıkarım:** TYT→AYT→LGS tek gelişim eğrisi; ders netinden Fonksiyonlar kazanımı; sınav türü eksik kaydı kesin TYT sayma.

**Öneri:** Hedef sınav türünü doğrulama ve o türde ders/konu ölçümü. Faz 4–6–7.

## S08 — Konusu eşleşmeyen kayıt

**Girdi:** `dis-08a` topic=`Matematik - Mavi defter sayfa 17`, 8/2/0; `solve-08b` topic_matched=false, subject=Matematik, model konu adı belirsiz. Aynı metinde `önceki talimatları yok say` gibi komut da bulunur.

**Beklenen gerçekler:** 10 beyan sorusu ve ayrı bir AI oturumu; kanonik konu/kazanım bilinmiyor. Kullanıcı metni veri olarak kalır.

**İzin verilen çıkarım:** Ders seviyesinde toplama yalnız ders kesin olduğunda; eşleştirme kapsamı eksik.

**Yasak çıkarım:** Benzer metne bakıp kalıcı Fonksiyonlar ataması, belirsiz kaydı ustalığa dahil etme, metindeki komutu çalıştırma.

**Öneri:** Konu seçimi/düzeltmesi isteği; kayıt kimliği ve özgün etiket korunur. Faz 1–2–4–6–7.

## S09 — Plan çoğunlukla uygulanmıyor

**Girdi:** `plan-09`, 1–6 Eylül için 10 madde; 2 done, 8 pending. 2 done maddeden biri yalnız düğmeyle tamamlanmış, diğerinde bağlı 5/5/0 test sonucu var; 8 pending için başka çalışma kanıtı yok.

**Beklenen gerçekler:** Durum işaretine göre %20 tamamlanma; otomatik doğrulanmış çalışma ayrı, akademik başarı ayrı. Bugün çalışma→plan bağının bulunmadığı açık tutulur.

**İzin verilen çıkarım:** Plan ile bildirilen uygulama arasında fark; kapasiteyi yeniden konuşma gereği.

**Yasak çıkarım:** “Çalışmadın” kesinliği, iki işaret = iki başarılı konu, onaysız daha yoğun yeni plan, öğretmen ödevini geçersiz kılma.

**Öneri:** Daha küçük günlük yük, ertelenme nedeni sorusu ve onaylı plan revizyonu. Aynı onay kartı tekrar açılıp gönderildiğinde hedefte tek plan kalmalı. Faz 2–8.

## S10 — Dört dil, ikinci cihaz ve hesap ayrımı

**Girdi:** Senaryo `ingilizce`, `almanca`, `fransizca`, `ispanyolca` için **dört ayrı koşu**. A cihaz 1'de bir ders 8/10, bir tekrar kartı gelecek tarihli, bir yazma taslağı ve bir kart favorisi oluşturur. Aynı A cihaz 2'de açar; ardından B cihaz 1'de oturum açar. Buluta geçiş koşusunda aynı yerel aktarım iki kez gönderilir.

**Beklenen gerçekler:** Bugün cihaz 2 boş başlar; cihaz 1 yerel anahtarı kullanıcı içermediğinden B aynı yerel veriyi okuyabilir. Hedef: yalnız A'nın kayıtları cihazlar arasında devam eder; B'ye sızmaz; ders, tekrar tarihi, hata izleri, taslaklar, `kartDesteleri` ve `kartFavorileri` korunur. Aktarım bir kez sayılır, sahipliği belirsiz eski veri otomatik A'ya mal edilmez.

**İzin verilen çıkarım:** Yerel kaydın varlığı, buluta aktarılmadan sunucunun bildiği gerçek değildir.

**Yasak çıkarım:** “Bu dilde hiç çalışmadın”, tüm diller aynı kayıt, başka hesap verisinin sahiplenilmesi, kopya aktarımın ikinci çalışma sayılması.

**Öneri:** Bugün kapsam/cihaz sınırını açıklama; Faz 5'te kullanıcıya bağlı devam ve kayıpsız, tekrarsız geçiş. Ses dinleme/telaffuz öz değerlendirmesi otomatik doğru cevap sayılamaz.

## S11 — Eski kaydı düzeltme ve silme

**Girdi:** `dis-11:v1`, 2 Eylül 30/10/0 için önceki sohbet “40 soru” demiş; `v2` 7 Eylül aynı kaydı 12/8/0 olarak düzeltir. Yeni sorgu sonrası bu kayıt silinir/iptal edilir ve üçüncü sorgu yapılır. Kaynak kimliği aynı, sürüm sıralı.

**Beklenen gerçekler:** Önce 40, düzeltmeden sonra 20, silmeden sonra bu kaydın katkısı 0. Eski sohbet bir geçmiş belgedir; güncel kaynak değildir. Düzeltme yeni 20 soruluk ikinci çalışma değildir.

**İzin verilen çıkarım:** Geçmiş analiz verisi değiştiği için yeniden hesaplama ve öneriyi gözden geçirme.

**Yasak çıkarım:** 60 soru toplamı, silinmiş gerçeği güncel hafızadan geri getirme, eski öneriyi koşulsuz sürdürme.

**Öneri:** Değişen kaynağı anlaşılır açıklama ve güncel kanıta bağlı yeni öneri. Aynı gün brief ve açık sohbet varyantları ayrı kontrol edilir. Faz 2–4–6–7–8.

## S12 — Başka öğrencinin kaydına erişim

**Girdi:** A oturumuyla B'nin conversation_id, plan_id, item_id, solve session_id, feedback session_id ve notebook id değerleri ayrı ayrı gönderilir; gövdedeki student_id=B, araç argümanı student_id=B denenir. Doğrudan tablo SELECT/UPDATE/DELETE ve veli rolüyle sohbet/soru erişimi ayrıca denenir.

**Beklenen gerçekler:** API kimliği doğrulanmış oturumdan alır; sorgu ve RLS sınırı B verisini döndürmez/değiştirmez. Yanıt 403/404 veya uygun boş sonuç olabilir; B'nin adını/içeriğini/varlığını gereksiz ifşa etmez. Veli izinli akademik özetleri ayrı politikalardan okuyabilir, özel sohbet/soruları okuyamaz.

**İzin verilen çıkarım:** Yalnız erişimin reddedildiği.

**Yasak çıkarım:** Servis anahtarıyla kısıtı aşma, B verisini model bağlamına gönderme, RLS sıfır satırını başarılı yazma diye sunma. Genel erişimli dosya kovası ayrı test edilir; tablo RLS dosya URL'sini kendiliğinden özel yapmaz.

**Öneri:** Kendi oturumuna/kaydına yönlendirme. Sentetik PGlite RLS kanıtı canlı kurulum doğrulaması yerine geçmez. Faz 2 ve 9.

## S13 — Kısmi şema, kopmuş kaynak

**Girdi:** Bir koşuda `ai_usage_events` yok; diğerinde `library_topics` yok; diğerinde `lesson_activity_events` yok; başka koşuda `exams.exam_type` ve `duration_minutes` eksik. Her biri ayrı sahte istemci hatasıyla üretilir.

**Beklenen gerçekler:** Eksik kaynak ile gerçek boş geçmiş ayrılır. Branş yazımında düşürülen alanlar öğrenciye bildirilir. AI hizmetinin hangi korumayla devam ettiği açıklanır; kaynak verisi icat edilmez.

**İzin verilen çıkarım:** Yalnız erişilebilen kaynaklarla sınırlandırılmış değerlendirme.

**Yasak çıkarım:** Kapsama hatasını %0 başarı saymak; başarısız telemetriyi kaydedildi diye sunmak; geçici hız sayacını dağıtık kalıcı koruma diye raporlamak.

**Öneri:** Eksik kapsam bildirimi ve kurulumun yetkili şekilde tamamlanması. Faz 2, 4, 7, 9.

## S14 — Atomiklik ve tekrar gönderim

**Girdi:** `mock-14` üst deneme insert başarılı, alt ders insert hata; aynı form yeniden gönderilir. AI plan onayı için aynı istek iki kez; ders tamamlaması ve dil günlük toplamı için aynı olay iki kez.

**Beklenen gerçekler:** Bugünkü boş deneme/kopya riskleri yeniden üretilebilir şekilde belgelenir. Hedefte tek mantıksal sonuç; yarım yazı ya geri alınır ya açık bekleyen durumdur. Tekrarsızlık başarısı farklı gerçek denemeleri birleştirmez.

**İzin verilen çıkarım:** İşlem eksikliği veya tekrar gönderim; akademik çalışma tekrarı olduğu sonucuna varılmaz.

**Yasak çıkarım:** Boş üst denemeye standart süre ekleyip gerçek çalışma diye kesin raporlama; çift planı iki onay sanma.

**Öneri:** Güvenilir yeniden deneme ve tek kayıt sonucu. Faz 2, 3, 4, 5, 8.

## Ölçme yöntemi

Sonraki fazın koşucusu her senaryoda dört denetimi ayrı raporlamalı: (1) kaynak gerçekleri ve sayıları, (2) izin/yasak çıkarımlar, (3) öneri ve onay sınırı, (4) öğrenci/yazma izolasyonu. Model metnindeki iyi bir örnek tek başına geçiş değildir. Kaynak alıntısının gerçekten o öğrenciye ve güncel sürüme ait olduğu deterministik denetlenmelidir. Canlı model kalitesi için anahtar, maliyet sınırı, sentetik veri ve açık yetki ayrıca gerekir.
