# Geriye Doldurma Sözleşmesi — Faz 2

Tarih: 8 Eylül 2026  
Durum: Yalnız sentetik yerel ispat; gerçek backfill Faz 9–10 kapsamındadır.

## Değişmez kurallar

- Runner tablo adı, kolon adı veya SQL metni kabul etmez. Yalnız kodda kayıtlı
  tek `source_code` ve onun Faz 1 adaptörünü kullanan provider çalışabilir.
- Provider; deterministik sıra, opak tekrar kullanılabilir cursor, en çok 1.000
  satırlık açık batch sınırı, öğrenci scope'u, ownership doğrulaması ve
  iptal sinyali sağlar.
- Run; registry, adaptör, resolver ve kanıt sözleşmesi sürümlerine kilitlidir.
  Sürüm değişirse sessizce devam etmez; yeni onaylı run gerekir.
- Kaynak satırı değiştirilmez. Ortak kanıt, private alım ve PostgreSQL
  natural unique anahtarıyla yazılır.
- Run/log satırında ham öğrenci verisi, konu metni, kaynak payload'ı, SQL veya
  serbest hata metni bulunmaz.

## Provider arabirimi

`createBackfillProviderRegistry` kayıt sırasında şunları doğrular:

- `sourceCode`: Faz 1 sicilinde emitter/conditional_emitter;
- `adapterName`: sicildeki adaptörle birebir aynı;
- `maxBatchSize`: 1–1.000;
- `readPage({cursor, limit, studentScope, signal})`:
  `{records, nextCursor, done}` döndürür;
- `verifyOwnership(record, studentScope)`: hedef öğrenci ve aktörü kaynak
  kaydından doğrulayan güvenilir bağlam döndürür;
- opsiyonel `adapterContext(record)`: yalnız source revision, gerçek zaman
  hassasiyeti ve opak locator gibi adaptör girdilerini üretir.

Provider listesi çalışma isteğiyle genişletilemez. Kayıtsız kaynak ve sicille
uyuşmayan adaptör başlamadan reddedilir.

## Run durumu ve cursor

`learning_evidence_backfill_runs` en az `run_id`, kaynak/contract sürümleri,
`dry_run|apply`, `pending|running|paused|cancelled|completed|failed`, güvenli
öğrenci scope'u, opak cursor, batch boyutu, restart sayısı, başlangıç/bitiş,
son güvenli hata kodu ve aşağıdaki sayaçları tutar:

- scanned;
- adapted;
- would_create;
- created;
- duplicate;
- conflict;
- quarantine;
- error.

Cursor yalnız tamamlanan sayfa sonrası ilerler. Pause/crash sonrası aynı cursor
yeniden okunabilir; DB tekilleştirme önceki başarılı satırları çoğaltmaz.
`cancelled` run otomatik resume edilemez. Devam için aynı kilitli sürümler ve
açık operatör kararı gerekir.

## Dry-run

Dry-run:

- kaynak, defter, karantina ve projeksiyona yazmaz;
- aynı adaptör/doğrulayıcı/fingerprint ve DB idempotency inspection yolunu
  kullanır;
- would-create, duplicate, conflict, quarantine ve error sayar;
- örnek ham satırı veya kişisel içeriği rapora basmaz;
- aynı fixture ve aynı mevcut defterle aynı sayıları vermelidir.

Dry-run başarısı canlı uygulama onayı değildir.

## Apply ve yeniden başlatma

Sentetik apply küçük batch kullanır. Her satır kaynak ownership kanıtından
sonra Faz 1 adaptörüne, oradan ortak alıma gider. Aynı run veya yeni run tekrar
çalıştığında doğal kaynak anahtarı aynıdır; ikinci apply `created=0`,
`duplicate=n` olmalıdır. Aynı anahtar farklı anlam taşıyorsa sayılı bir
`idempotency_conflict` olur; sessiz duplicate olmaz.

Bozuk/zehirli satır güvenli neden koduyla sayılır veya kimlik karantinasına
alınır; sonraki sağlıklı satır işlenir. Geçici hata run'ı retry edilebilir
durumda bırakır; serbest hata metni saklanmaz.

## Tarihsel dürüstlük

- Günlük toplamdan tekil geçmiş soru olayı üretilmez.
- Yerel dil/atlas toplamından bilinmeyen sıra, süre, yardım veya zorluk
  uydurulmaz; son durum varsa `snapshot` ve gerçek `as_of` kullanılır.
- `recorded_at`, bilinmeyen `occurred_at` yerine kullanılmaz.
- Eksik değer null/`unknown` kalır.
- Eski genel deneme ders sonucu keyfî biçimde konu performansına dağıtılmaz.
- Kaynaktaki düzeltme ve silme yeni çalışma sayılmaz; correction/tombstone
  zincirine dönüşür.

## Canlı geçiş kapısı

Gerçek provider ancak kaynak bazında Faz 3–5 sarmalayıcısı, Faz 9 veri
özeti+dry-run+restore provası, Faz 10 geçiş planı ve kullanıcının açık canlı
onayından sonra kullanılabilir. Bu Faz 2 teslimi hiçbir gerçek kaynağı
`connected` yapmaz.
