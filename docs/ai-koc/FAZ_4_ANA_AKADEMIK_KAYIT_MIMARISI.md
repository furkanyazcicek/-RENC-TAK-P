# Faz 4 — Ana Akademik Kayıt Mimarisi

Tarih: 13 Eylül 2026  
Durum: Yerel uygulama ve kabul doğrulaması sürüyor. Canlı şemaya uygulanmadı.

## Kapsam ve değişmez sınır

Bu faz M03–M07, M11–M12, M31, M33 ve M36 kaynaklarını Faz 2 kanıt ağına kaynak-özel işlemsel yazarlarla bağlar. M01/M02 türetilmiş ve M32/M38 dışlanmış yüzeylerdir; temel öğrenme olayı üretmez. Faz 5 dil aktarımı, Faz 6 öğrenci modeli ve AI Koç tüketimi uygulanmaz.

Tek yetkili yeni DDL `supabase/migration_learning_academic_records.sql` dosyasıdır. Faz 2 ve Faz 3 migration dosyaları değiştirilmez. Canlı migration, gerçek backfill, gerçek öğrenci verisi, ücretli model, yayın ve push bu çalışmanın dışındadır.

## Sürümlü sözleşme izdüşümü

- Kaynak sicili: `learning-academic-registry@1`
- Adaptör: `learning-academic-adapters@1`
- İstemci/outbox: `learning-academic-client@1`
- Backfill: `phase-4-academic-backfill@1`
- Capability: `learning-academic-capability@1`

Faz 1 sicili yerinde değiştirilmez. Genel deneme oturumu, öğretmen girdiği branş sonucu ve öğretmenin öğrenciye doğrudan soru paylaşması yalnız akademik sicilde ayrı semantic event olarak tanımlanır.

## İşlem ve yetki sınırı

Kaynak satırı, kaynak revizyonu, action receipt ve common evidence aynı PostgreSQL işlemi içinde tamamlanır. İstemci yalnız kaynak-özel RPC çağırır; ortak kanıt zarfı, öğrenci/aktör kimliği, kanıt sınıfı, güven, revision veya canonical topic gönderemez. Doğrudan `INSERT/UPDATE/DELETE` yetkileri normal rollerden kaldırılmıştır.

Öğretmen yazıları yalnız `teacher_students.status = active` ilişkisiyle çalışır. Ödev ataması ile öğrencinin durum bildirimi; soru durumu ile öğretmen geri bildirimi; çözüm kalitesi beğenisi ile öğrencinin doğru/yanlış öz bildirimi farklı anlamlardır. `Tamamlandı` veya `Çözüldü` tek başına doğruluk değildir.

## AI Soru Çöz dar sunucu yazarı

İstemci önce JWT ile doğrulanır ve `client_action_id + request hash` durable claim oluşturur. `processing` tekrarı ikinci model çağrısını başlatmaz; `completed` tekrarı aynı session kimliğini döndürür; payload farkı conflict olur. Model sonucu yalnız AI Solve modülünün kullandığı dar service credential ile `finalize_academic_ai_solve` RPC'sine yazılır. Bu RPC yalnız mevcut öğrenci+claim çiftini finalize eder; genel ledger veya genel tablo yazarı değildir. Secret istemci paketine girmez.

DB ile dış model arasında mutlak exactly-once garanti edilemeyen crash penceresi vardır. Kör otomatik ikinci ücretli çağrı yapılmaz; stale/repair politikası Faz 9 sertleştirmesinde tamamlanacaktır.

## Medya mahremiyeti

Yeni M07 yazıları private `academic-question-images` kovasını kullanır. Nesne yolu öğrenci, aktör ve action kimliğine bağlıdır. Medya önce `staged`, kaynak işlemi içinde `finalized` olur; başka öğrenci, ilgisiz öğretmen, veli ve anon erişemez. Common evidence yalnız `image_present/canvas_present` gibi boolean bilgi taşır; URL, path, soru, yanıt veya stroke taşımaz.

### Legacy public medya — Faz 9 borcu

Eski `question-images` / `solution-images` kayıtlarının canlı ve yıkıcı olmayan toplu taşınması bu fazda yapılmadı. Bu nedenle **uçtan uca medya mahremiyeti tamamlandı değildir**. Yeni yazılar private akıştadır; eski public nesnelerin envanter, sahiplik doğrulama, taşıma ve silme zinciri Faz 9 güvenlik provasına bırakılmıştır. Bu borç canlı veriyi okumadan veya değiştirmeden kapatılamaz ve Faz 4 kabulünde kapatılmış sayılmaz.

## Correction, tombstone ve replay

Kaynak sürümü monoton `academic_revision` alanıdır; timestamp sıralama anahtarı değildir. Anlamlı değişiklik `correction`, izinli silme `tombstone`, no-op ise yeni kanıt üretmeyen `no_change` sonucudur. Hedef kayıt aynı öğrenci/kaynak/kayıt/semantic zincirinde ve etkin olmalıdır. Faz 2 effective görünümü audit geçmişini silmeden güncel sonucu üretir.

## Outbox ve kullanıcı durumu

Outbox anahtarı kullanıcı UUID'siyle ayrılır. Yalnız ham içerik taşımayan küçük eylemler kalıcı kuyruğa girebilir. Soru, not, öğretmen yanıtı, model çıktısı ve medya yerel kuyruğa yazılmaz. Arayüz `Kaydedildi` durumuna yalnız sunucudan `created/completed/duplicate/no_change` onayı geldikten sonra geçer; geçici hata form içeriğini korur.

## Backfill ve sağlık

On pozitif kaynak kayıtlı tarihsel provider kararı taşır; dört negatif kaynak `derived_no_evidence` veya `excluded` kararıdır. Runner yalnız `dry_run` ve `synthetic_apply` kabul eder; canlı apply kod düzeyinde reddedilir. Opak cursor, pause/cancel/resume, poison izolasyonu ve receipt tabanlı ikinci uygulama davranışı test edilir. Mevcut alanda bulunmayan tarih, geçiş, aktör veya correctness üretilmez.

Capability durumları `available`, `empty`, `degraded`, `unavailable`, `derived` ve `excluded` olarak ayrılır. Uzlaştırma yalnız düşük kardinaliteli sayılar ve neden kodları taşır; öğrenci kimliği, soru, not, yanıt, URL, path, JWT veya e-posta loglanmaz.

## Yerel doğrulama sınırı

PGlite/WASM tek bağlantıyı seri işler. Retry/idempotency ve atomiklik doğrulanır; gerçek çok bağlantılı PostgreSQL yarışı tamamlandı diye sunulmaz ve Faz 9'da kalır. Üretim kullanımı Faz 9/10 ve açık kullanıcı onayını bekler.
