# Veri Ağı Çekirdek Mimarisi — Faz 2

Tarih: 8 Eylül 2026  
Durum: Yerel kabul tamamlanana kadar `Devam ediyor`  
Sözleşmeler: `learning-evidence@1` / `1.0`, `learning-source-registry@1`

## Amaç ve kapsam

Bu çekirdek, alan kaynaklarının yerine geçmeyen, kaynağa referanslı ve
append-only bir öğrenme kanıtı defteri kurar. Aynı kanıt kümesinden
deterministik etkin görünüm ve yalnız sayım/toplam yapan tanısal projeksiyon
yeniden üretilebilir.

Bu faz M03–M38 arasındaki gerçek ürün yazılarını bağlamaz. AI Koç'un
`api/_lib/context.js` okuma kapsamı değişmez. Canlı migration, seed, backfill,
gerçek öğrenci verisi, model çağrısı ve yayın yoktur. Kök migration'ın
uçtan uca kanıtı yalnız sentetik M03 verisi ve test sırasında oluşturulan
kaynak-özel sarmalayıcıdır.

## Yetkili gerçek ve işlem sınırı

Alan kaydı kendi iş anlamının yetkili gerçeğidir. Ortak defter, bu kaydın
`source_code + source_record_id + source_revision` ile bağlı, sürümlü
öğrenme temsilidir. Ortak defter alan tablosunu geriye doğru güncellemez.

Aynı PostgreSQL içindeki gelecek kaynak bağlantılarında seçilen model
**kaynak-özel RPC/tetikleyici + aynı transaction içinde private alım** modelidir.
Alan yazısı başarılı fakat kanıt yazısı başarısız gibi yarım durum commit
edilemez. Tarayıcının alan kaydı ile kanıtı iki ayrı ağ isteğinde yazması
yasaktır. Cihaz/yerel kaynaklarında gelecekteki sarmalayıcı, hesap sahipliğini
doğrulayıp yalnız sınırlı taslağı kabul edecektir.

`learning_private.ingest_evidence` yeniden kullanılabilir kalıcılık
çekirdeğidir. `anon` ve `authenticated` bu fonksiyonu çağıramaz. Bir gelecek
kaynak sarmalayıcısı, önce oturum/ilişki ve kaynak satırı sahipliğini
doğrulamadan bu iç fonksiyona geçemez. Tam `LearningEvidence` kabul eden genel
HTTP/RPC yoktur; `service_role` tabanlı genel yazma yolu yoktur.

## Güven yolları

| Yol | Yetki ve kaynak kanıtı | Çekirdeğe geçen dar veri |
|---|---|---|
| Öğrenci oturumu | `auth.uid()` ile kaynak satırının `student_id` değeri aynı; kaynak-özel RPC | Alan satırı kimliği/sürümü ve izinli istemci taslağı |
| Yetkili öğretmen | Kaynak tablosundaki aktif öğretmen–öğrenci ilişkisi ve hedef satır aynı transaction'da doğrulanır | Paylaşılabilir yapılandırılmış sonuç; özel not/metin değil |
| Cihaz/yerel snapshot | Hesap oturumu + cihaz verisini sahiplenme adımı; kaynak-özel bulut kaydı | Son durum snapshot'ı, gerçek `as_of`, bilinmeyen alanlar null/unknown |
| Onaylı backfill | Kodda kayıtlı provider, sabit `source_code`, öğrenci scope'u ve deterministik cursor | Faz 1 adaptörünün ürettiği dar zarf |
| AI Koç okuması | Öğrencinin kendi JWT'si ve defter RLS'i | Yalnız etkin, kendi kayıtları; bu okuma Faz 6–8'de bağlanır |

İlk dört yazma yolunda alan sahipliği çekirdekten önce kanıtlanır:

| Alan | Öğrenci | Öğretmen | Cihaz | Backfill |
|---|---|---|---|---|
| `student_id` | `auth.uid()` | Doğrulanmış ilişkinin hedefi | Hesap sahipliği | Run scope + kaynak satırı |
| `actor_id` / rol / ilişki | `auth.uid()` / student / self | `auth.uid()` / teacher / authorized_teacher | Hesap aktörü | Kapalı run aktörü |
| Kaynak kaydı/sürüm | Alan satırı | Yetkili alan satırı | Bulutlaştırılan snapshot | Provider |
| Kanıt sınıfı/güven | Kaynak sicili + sarmalayıcı | Kaynak sicili + ilişki | Kaynak sicili + sahiplik | Kaynak sicili + run |
| Kimlik ve sürümler | Faz 1 çözümleyici | Faz 1 çözümleyici | Faz 1 çözümleyici | Kilitli adaptör/çözümleyici |
| `record_id`, `recorded_at`, dedupe/fingerprint | Güvenilir iç sınır | Güvenilir iç sınır | Güvenilir iç sınır | Güvenilir iç sınır |

## Saf ve kalıcı katmanlar

- `src/lib/learning/network/ingest.js`, var olan `SOURCE_ADAPTERS`,
  `getSourceDefinition`, `resolveTopicIdentity` sonucunu taşıyan adaptör,
  `validateClientEvidenceDraft`, `enrichTrustedEvidence`,
  `validateLearningEvidence` ve `buildEvidenceDedupeKey` dışa aktarmalarını
  yeniden kullanır.
- `canonical.js` alan sırasından bağımsız semantik parmak izi üretir.
  `record_id`, `recorded_at`, alım sırası, operasyonel origin ve backfill run
  kimliği parmak izine girmez. Kaynak/aktör, olay, zaman anlamı, kimlik,
  ölçüm, metadata, ilişkiler ve sözleşme sürümleri girer.
- `api/_lib/learning/repository.js`, private SQL fonksiyonuna dar server-side
  bağlantıdır. React/tarayıcı paketine DB yönetim yetkisi taşımaz.
- `effective.js` ve `projection.js`, Faz 1 `projectEvidenceHistory` anlamını
  kullanır; ikinci bir correction/snapshot algoritması uydurmaz.
- `backfill.js`, yalnız kayıtlı provider nesnelerini kabul eder. Dinamik tablo
  veya kolon adı almaz.
- `health.js`, `empty` ile `unavailable` sonucunu ayırır.

## Kalıcı veri yapıları

| Yapı | Sorumluluk |
|---|---|
| `learning_source_contracts` | Faz 1 sicilinin 38 satırlık, registry sürümüne bağlı ve değiştirilemez SQL izdüşümü |
| `learning_evidence_records` | Kaynak referanslı append-only audit defteri ve monotonic `ingestion_sequence` |
| `learning_evidence_quarantine` | Ham gövde tutmadan kimlik-belirsiz ve yapısal-red nedenleri |
| `learning_evidence_processing` | Cursor scope'u+kayıt bazlı claim, retry ve güvenli hata kodu |
| `learning_projection_cursors` | Projeksiyon adı+sürümü+scope high-water mark |
| `learning_projection_generations` | Registry/adaptör/projeksiyon sürümlü building/active/failed nesli, satır sayısı ve checksum |
| `learning_diagnostic_projection_rows` | Öğrenci+kaynak+kimlik+kanıt sınıfı sayım ve ölçüm toplamları |
| `learning_evidence_backfill_runs` | Mod, durum, sürümler, scope/cursor ve içeriksiz sayaçlar |
| `learning_source_health` | `available/empty/unavailable/degraded`, capability, güncellik ve güvenli hata sınıfı |
| `learning_evidence_effective` | RLS'i çağıran rolden alan security-invoker etkin görünüm |

JSONB yalnız sınırlı `measurement`, `metadata`, `relations`, kimlik
özeti ve derivation içindir. Tam/serbest ham payload kolonu yoktur. Kimlik
özeti aday etiketleri ve ham konu metnini saklamaz. `objective_id` Faz 1'de
daima null'dır.

## Append-only, hesap silme ve aktör

Normal ürün rolleri deftere `INSERT`, `UPDATE` veya `DELETE` yapamaz. Kaynak
düzeltmesi yeni `correction`, kaynak silme/iptali yeni `tombstone` satırıdır.
Cursor, retry ve generation değişikliği ayrı operasyonel tablolardadır.

Öğrenci FK'si `profiles(id) ON DELETE CASCADE` kullanır; mahremiyet/hesap
silmede o öğrencinin defteri, karantinası, projeksiyonu, scope/cursor ve health
kayıtları silinir. `actor_id`, `auth.users(id) ON DELETE SET NULL` kullanır.
Öğretmen hesabı silinse bile başka öğrencinin audit kaydı cascade olmaz;
rol ve ilişki sınıfı tarihsel bağlamı korur.

## Tekilleştirme ve çatışma

PostgreSQL'de iki partial unique indeks yetkilidir:

1. istemci eylemi: `student_id + source_code + client_action_id`;
2. kaynak/backfill: `student_id + source_code + source_record_id +
   source_revision + semantic_event_type`, `client_action_id IS NULL` iken.

Alım `INSERT ... ON CONFLICT DO NOTHING` sonrası aynı doğal anahtarı
transaction içinde okur. Aynı yapılandırılmış semantik kolonlar ve aynı
SHA-256 ise ilk `record_id`, `created=false`, `duplicate` döner. Aynı anahtar
farklı semantik içerikse `idempotency_conflict` döner ve yeni satır/projeksiyon
etkisi oluşmaz. Doğal unique anahtar ve yapılandırılmış kolon karşılaştırması
korunduğu için hash tek güvenlik dayanağı değildir. Yanıt kaybından sonra
retry ilk kayıt onayını geri getirir.

## SQL ve JavaScript doğrulama sınırı

SQL; enum/null, olay=tür, exact/day/unknown, snapshot `as_of`, hedef+neden,
sonlu sayı/temel aralık, JSON boyutu, opak locator, kaynak/event/kind/class
allowlist'i, hedefin aynı öğrenci/kaynak ailesinde olması, döngü ve unique
anahtarlarını zorlar. Faz 1 JavaScript doğrulaması ayrıca kanonik kimliğin
330 satırlık defterde bulunmasını, D/Y/B ve net/accuracy formüllerini,
recursive yasak metadata anahtarlarını ve kaynak adaptör anlamını denetler.
Private fonksiyon normal rollere kapalı olduğundan bu ikinci katman kaynak-özel
sarmalayıcıdan atlanamaz. Parity fixture'ları her iki katmanda aynı izinli ve
reddedilen örnekleri çalıştırır.

## Karantina

- `identity_unresolved`: Yapısal zarf geçerli, fakat kimlik
  ambiguous/unmatched veya `topic_matched=false`. Yalnız opak locator,
  kaynak/sürüm ve neden kodu saklanabilir; etkin konu projeksiyonuna girmez.
- `request_rejected`: Ayrıcalıklı alan, bilinmeyen kaynak, boyut veya yapı
  ihlali. Ham istek hiçbir tabloya kopyalanmaz; yalnız güvenli sınıf/neden
  sayacı tutulabilir.

Bir kimlik daha sonra kesinleşirse eski satır yerinde güncellenmez; yeni
sürümlü yeniden işleme/correction kullanılır. Kalıcı zehirli kayıt processing
durumunda karantinaya alınır ve cursor sonraki kayda ilerler.

## Correction, tombstone ve snapshot

Kalıcı kayıtlarda toplam sıra `ingestion_sequence`'dır. Bu alanı
taşımayan eski/saf Faz 1 fixture'larında geriye uyumlu sıra `recorded_at`,
eşitlikte `record_id`'dır. SQL görünümü, repository ve saf JavaScript aynı
kuralı uygular; `occurred_at` geç gelen olayı alım sırasında geriye taşımaz.

- Correction hedefi mevcut, aynı öğrenci ve aynı kaynak kayıt ailesinde
  olmalı; kendi kendini hedefleme, döngü ve başka öğrenci hedefi reddedilir.
- Tombstone hedefi etkin etkiden çıkarır; audit satırları kalır.
- Snapshot `as_of` olmadan yazılamaz. Ailede en son geçerli snapshot/correction
  etkin olur; eski snapshot toplamına eklenmez. Geç gelen snapshot'ın
  belirleyicisi olay zamanı değil kayıtlı toplam sıradır.
- S11 zinciri: 40'lık event, 20'lik correction, correction'ı hedefleyen
  tombstone. Audit 3 satır; etkin toplam 40 → 20 → 0'dır.

## Projeksiyon, cursor ve replay

`learning-evidence-probe@1` yalnız etkin kayıt sayısı ile izinli sayısal
ölçüm toplamlarını gruplar. Ustalık puanı, risk etiketi veya öneri yoktur.
Worker claim/cursor güncellemesi tek transaction'dadır; başarısız batch cursor'u
ilerletmez, aynı batch retry'da çift etki yapmaz. Kalıcı hata kayıt bazında
karantinaya geçer. PostgreSQL sıra değeri commit sırası değildir; bu nedenle
worker yalnız `ingestion_sequence > cursor` koşuluna güvenmez, aynı projeksiyon
sürümünde başarıyla işlenmemiş/karantinaya alınmamış daha düşük sıralı kayıtları
da anti-join ile yakalar. Cursor geriye gitmez.

Replay; öğrenci, kaynak, projeksiyon sürümü ve başlangıç cursor scope'u
alabilir. Bir seferde yalnız bir öğrencinin sınırlı sayfaları belleğe alınır.
Yeni generation `building` durumunda ayrı yazılır; checksum/satır sayısı
tamamlanınca atomik olarak `active` olur. Hata durumunda eski active generation
okunabilir kalır. Replay deftere yazmaz. Aynı defter+sürüm iki çalıştırmada
aynı normalize satırları ve checksum'ı vermelidir.

V1'de `startSequence`, generation'ın kayıtlı başlangıç checkpoint'idir;
seçilen öğrenci/kaynak kapsamını eksik bir aktif nesille değiştirmemek için
replay yine o kapsamın tam geçmişini hesaplar. Cursor mevcut high-water mark'ı
aşarsa çalışma başlamadan reddedilir. Copy-on-write artımlı generation bu
fazın kanıtlamadığı bir optimizasyondur; kapsam bütünlüğüne tercih edilmez.

## Backfill

Ayrıntılı sözleşme [GERIYE_DOLDURMA_SOZLESMESI.md](GERIYE_DOLDURMA_SOZLESMESI.md)
dosyasındadır. Bu fazda gerçek tablo okunmaz ve gerçek backfill yapılmaz.
`dry_run` defter, karantina, projeksiyon veya kaynak yazısı yapmadan
would-create/duplicate/conflict/quarantine sayar. Sentetik `apply`, DB unique
anahtarına dayanır; ikinci çalışma yeni satır oluşturmaz. Cursor her sayfada
kaydedilir; pause/resume ve cancellation açıktır.

## Kaynak health ve kısmi şema

| Durum | Anlam |
|---|---|
| `available` | Kaynak sorgulandı ve kanıt üretmeye uygun kayıt var |
| `empty` | Sorgu başarılı, geçerli kayıt sayısı tam olarak 0 |
| `unavailable` | Tablo/fonksiyon/yetki/bağlantı yok; `dependency_unavailable` gibi neden var |
| `degraded` | Kaynak okunuyor fakat capability/opsiyonel alan eski veya eksik |

Yeni migration henüz yokken capability probe `unavailable` döner; bunu sahte
`empty` sonuca çevirmez. Mevcut ekran ve AI Koç bu repository'yi henüz zorunlu
çağırmadığı için migration olmadan çalışmaya devam eder. Health satırı
capability sürümü, son başarı, son güvenli hata sınıfı ve kontrol zamanını
tutar; ham hata/SQL/sır tutmaz.

## RLS, yetki ve kurulum

Bütün öğrenci-scope tablolarında RLS ve `FORCE ROW LEVEL SECURITY` açıktır.
`anon` için tablo/view/function yetkisi yoktur. `authenticated` yalnız kendi
defter/etkin görünüm/health kaydını ve yalnız atomik olarak etkinleşmiş tam
global tanısal generation satırlarını okuyabilir; building, failed, superseded
ve operasyonel scoped replay satırları görünmez. Doğrudan DML yapamaz. View
`security_invoker=true` kullanır. SECURITY DEFINER fonksiyonlar
`SET search_path=''` ve tam nitelikli ad kullanır; fonksiyon EXECUTE yetkileri
açık `REVOKE` ile kapatılır.

Yeni proje sırası: `setup_new_project.sql`, veli göçü,
`migration_learning_evidence_network.sql`, en son gerekiyorsa veri içe aktarma.
Faz 2 DDL'i setup dosyasına kopyalanmaz; migration tek yetkili kaynaktır.
Migration iki kez uygulanabilir ve mevcut kanıtı değiştirmez.

## İndekslenen sorgu yolları

- öğrenci + ingestion sequence / recorded time;
- öğrenci + topic/subject/source + time;
- öğrenci + source record + revision;
- client ve kaynak/backfill natural unique anahtarları;
- correction/tombstone target;
- processing status/retry ve quarantine status/reason;
- projection cursor/generation;
- backfill run+cursor ve source health status.

Partitioning bu fazda eklenmez; 10.000 sentetik satır EXPLAIN ve süre ölçümü
yalnız yerel gösterge olarak kaydedilir.

## Gözlemlenebilirlik

Metric etiketi yalnız kaynak, semantic event, sonuç ve kararlı neden sınıfıdır;
`student_id`, kaynak kayıt kimliği, konu metni ve ham hata etiket olmaz. Sayaçlar
created/duplicate/conflict/rejected/quarantined, kimlik sonucu, retry/kalıcı
karantina, cursor gecikmesi, replay checksum farkı ve backfill durumunu ayırır.
Gözlenemeyen değer sıfır diye sunulmaz. Sunucu tarafındaki
`readOperationalSummary`, kabul, kimlik sonucu/oranı, processing/retry, scope'a
duyarlı cursor gecikmesi, health, backfill ve generation/replay karşılaştırmasını
yalnız bu düşük kardinaliteli içeriksiz toplamlarla döndürür.

## Kapasite varsayımları

Aşağıdaki sayılar **gözlenmiş üretim gerçeği değil**, planlama
varsayımıdır. JSON boyut sınırlarıyla bir defter satırının indeksler hariç
yaklaşık 1–3 KiB, indekslerin satır başına ek 0,8–2 KiB olacağı varsayılır.

| Senaryo | Varsayım | Aylık satır | Yaklaşık veri+indeks | Risk |
|---|---:|---:|---:|---|
| Düşük | 100 öğrenci × 20 olay/gün | 60 bin | 0,1–0,3 GiB | Tam replay kolay; yine batch zorunlu |
| Orta | 2.000 öğrenci × 50 olay/gün | 3 milyon | 5–15 GiB | Replay saatlere uzayabilir; generation ve incremental cursor gerekir |
| Yüksek | 20.000 öğrenci × 100 olay/gün | 60 milyon | 100–300 GiB | Autovacuum, arşivleme ve partition kararı ölçümle yeniden açılır |

Partition/arşivleme eşiği takvimle değil; aktif indekslerin belleğe
sığmaması, p95 öğrenci sorgusunun hedefi aşması, replay penceresinin
operasyonel sınırı aşması ve aylık büyüme kanıtıyla Faz 9'da belirlenir.

## Faz 3–5 için açık arabirim

Kaynak geliştiricisi gerçek akışı doğrudan tabloya yazmaz. Önce kaynak-özel
aynı-transaction sarmalayıcısını kurar; `auth.uid()`/ilişki ve kaynak satırı
sahipliğini doğrular; registry'deki tek adaptörü çalıştırır; sonra
`createLearningEvidenceIngestor` + dar repository veya aynı SQL private alımını
çağırır. Capability probe migration eksikliğini açıkça bildirir.
Faz 3–5 yerel geliştirmesi bu arabirime karşı başlayabilir; hiçbir kaynak
bu nedenle `connected` sayılmaz.

## Bilinen yerel sınır

PGlite 0.5.5 tek kullanıcı/tek bağlantılıdır. On paralel Promise deneyi
unique ve atomik sonucu en güçlü mevcut yerel biçimde sınar, fakat gerçek
çoklu bağlantı PostgreSQL yarış kanıtı değildir. Makinede yerel PostgreSQL
sunucusu/Docker/Supabase CLI yoktur. Gerçek yarış Faz 9 provasına açık ve
başarılı sayılmamış bir sınır olarak taşınır. Geç görünür daha düşük sıra için
anti-join kurtarma testi vardır; gerçek çoklu bağlantıda claim kilidi, unique
sonuç ve replay sırasında eşzamanlı commit davranışı yine Faz 9'da sınanacaktır.
