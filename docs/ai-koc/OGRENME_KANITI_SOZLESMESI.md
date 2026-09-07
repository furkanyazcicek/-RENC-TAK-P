# Öğrenme kanıtı sözleşmesi — Faz 1

Tarih: 7 Eylül 2026  
Sürüm: `learning-evidence@1`  
Makine kaynağı: `src/lib/learning/evidenceContract.js`, `adapters.js`, `sourceFixtures.js`

Bu sözleşme, farklı DRKOÇ yüzeylerinden gelen kayıtların anlamını koruyarak ortak öğrenme ağına nasıl girebileceğini tanımlar. Faz 1 yalnız sözleşme, doğrulayıcı, saf adaptör ve sentetik fixture üretir; kalıcı olay tablosu açmaz ve ürün akışlarını bağlamaz.

## Temel ilkeler

- Alan tablosu kendi gerçeğinin yetkili kaynağıdır. Ortak kayıt, kaynağa referans veren sürümlü kanıttır; ikinci bağımsız gerçek değildir.
- Öğrencinin cevabı, öğrencinin beyanı, öğretmen geri bildirimi, içerik maruziyeti ve model çıkarımı birbirine dönüştürülmez.
- Kanıt kaydı ustalık kararı değildir. Ustalık, örneklem, zaman, zorluk ve çelişkileri kullanan sonraki faz projeksiyonudur.
- Olay zamanı bilinmiyorsa bilinmiyor kalır. Sunucunun kayıt zamanı olay zamanı yerine yazılmaz.
- Düzeltme ve silme geçmişi yok etmez; düzeltme ve tombstone kayıtları güncel görünümü değiştirir.
- İstemci kimlik, güven, aktör ve kayıt zamanı gibi ayrıcalıklı alanları belirleyemez.
- Ham soru, çözüm, mesaj, özel not, defter, ses, görüntü veya erişim anahtarı metadata içine alınmaz.

## Kayıt türleri

| Tür | Anlam | Güncel görünüm davranışı |
|---|---|---|
| `event` | Gerçekleşmiş tekil eylem/sonuç | Append-only; aynı dedupe anahtarı ikinci kez sayılmaz |
| `snapshot` | Kaynağın belirli andaki son durumu | Aynı öğrenci+kaynak+kayıt+türde yalnız son sürüm etkin |
| `correction` | Önceki kaydın düzeltilmiş karşılığı | Hedefi geçersiz kılar; kendisi etkin kanıt olur |
| `tombstone` | Kaydın silindiğini/iptal edildiğini bildirir | Hedef güncel görünümden çıkar; geçmiş kayıt korunur |
| `derived` | Başka kanıtlardan hesaplanan sonuç | Girdi kayıt kimlikleri, yöntem ve sürüm zorunlu |

`projectEvidenceHistory` bu kuralları salt okunur ve deterministik uygular. Kalıcı altyapı Faz 2'de aynı semantiği işlemsel olarak gerçekleştirmelidir.

## Kanıt sınıfları

| Sınıf | Örnek | Kendiliğinden başarı mı? |
|---|---|---|
| `direct_measurement` | Platform sorusuna kaydedilmiş öğrenci cevabı | Tek başına ustalık değil; doğrudan ölçüm |
| `student_self_report` | Günlük çalışma veya dış deneme beyanı | Hayır; kaynak açıkça beyan olarak kalır |
| `teacher_feedback` | Öğrenciyle paylaşılmış öğretmen değerlendirmesi | Nitel kanıt; ham özel not alınmaz |
| `exposure` | Not/ders açma, çözüm isteme, katılım | Hayır |
| `system_observation` | Uygulama içi görev/tamamlama durumu | Ölçüm türüne göre; açma başarı değildir |
| `model_inference` | Modelin olasılıksal yorumu | Hayır; kaynak gerçek gibi sunulamaz |
| `derived_result` | Güncel projeksiyon, eğilim veya özet | Girdileriyle yeniden üretilebilir olmalı |
| `operational_only` | Teknik durum/sayaç | Öğrenme hesabına girmez |

`evidence_strength` (`low`, `medium`, `high`) ve `trust_level` (`untrusted_client`, `account_bound`, `authoritative_source`) ayrı alanlardır. Güvenilmeyen istemci kaydı yüksek kanıt gücü alamaz. Bilinmeyen ölçüm kökeni `direct_measurement` olamaz.

Her kaynağın izinli `semantic_event_type → evidence_class` eşlemesi makine kayıt defterinde bulunur. Tam kayıt doğrulayıcısı bu eşlemeye aykırı yükseltmeyi reddeder. Örneğin `lesson_opened` doğrudan ölçüme, `answer_checked` model çıkarımından öğrenci cevabına çevrilemez. `direct_measurement`, tombstone dışında, en az bir kaydedilmiş cevap veya sıfırdan büyük ölçüm paydası taşımak zorundadır.

## Zorunlu çekirdek alanlar

Tam kanıt kaydında en az şunlar bulunur:

| Alan | Sahibi | Açıklama |
|---|---|---|
| `record_id` | Sunucu | Değişmez kayıt UUID'si |
| `schema_version`, `contract_version` | Sunucu | Zarf `1.0`, anlam sözleşmesi `learning-evidence@1` |
| `record_kind` | Kaynak sözleşmesi | Olay/snapshot/düzeltme/tombstone/türetilmiş |
| `source_code` | Uç nokta/adaptör | M01–M38 sicilindeki benzersiz kaynak kodu |
| `source_record_id`, `source_revision` | Kaynak | Kaynağın kayıt ve anlam sürümü |
| `semantic_event_type`, `activity_type` | Kaynak sözleşmesi | Kaynak izin listesindeki olay ve faaliyet anlamı |
| `relations` | Kaynak + sunucu | İzinli oturum/girişim/içerik/soru/ders/ödev/deneme/plan iç ilişkileri |
| `student_id`, `actor_id`, `actor_role`, `actor_student_relation` | Yetkili sunucu | Öğrenci ve eyleyen arasındaki doğrulanmış ilişki |
| `recorded_at` | Sunucu | Sunucunun kaydı kabul ettiği zaman |
| `occurred_at_precision` ve ilgili zaman alanı | Kaynak | `exact`, `day` veya `unknown` |
| Kimlik alanları | Güvenilen çözümleyici | Bağlam/ders/konu/kazanım; bilinmiyorsa `null` |
| `evidence_class`, `evidence_strength`, `trust_level` | Kaynak sicili + sunucu | Anlam ve güven, istemci iddiası değil |
| `provenance`, `source_availability` | Sunucu | Kaydın geliş yolu ve kaynağın gerçekten kullanılabilir oluşu |
| `source_adapter_version`, `topic_resolver_version` | Sunucu kodu | Yeniden üretim için adaptör/çözümleyici sürümü |
| `measurement` | Kaynak adaptörü | İzinli, kökeni açıklanmış ölçümler |
| `metadata` | Kaynak izin listesi | Küçük, güvenli ve ham içeriksiz bağlam |
| `dedupe_key` | Sunucu | Sözleşmeye göre deterministik tekrar anahtarı |

Kazanım defteri Faz 1'de oluşturulmadığı için `objective_id` bilinmiyorsa `null` kalır; konu adı kullanılarak kazanım uydurulmaz.

## Zaman sözleşmesi

- `exact`: ISO zamanlı `occurred_at` zorunlu; `occurred_on` yazılmaz.
- `exact` zamanı saat dilimi (`Z` veya açık UTC farkı) taşır; yalnız tarih yazısı tam zaman kabul edilmez.
- `day`: geçerli `YYYY-AA-GG` biçimli `occurred_on` zorunlu; saat uydurulmaz.
- `unknown`: `occurred_at` ve `occurred_on` boş kalır.
- `recorded_at` yalnız güvenilen sunucu tarafından yazılır ve hiçbir zaman eksik `occurred_at` yerine kopyalanmaz.
- `snapshot` için ayrıca ISO `as_of` zorunludur.
- Olay veya snapshot zamanı kayıt zamanından anlamlı biçimde ileri olamaz. Gün hassasiyetindeki gelecek denetimi ürün günü için `Europe/Istanbul`, saklama için UTC kullanır.

## Ölçüm sözleşmesi

### Cevap sayıları ve oran

- `marked_count = correct_count + incorrect_count`
- `total_count = correct_count + incorrect_count + blank_count`
- İşaretlenen soru başarısı: `accuracy_denominator=marked`, `accuracy_formula="correct_count / marked_count"`, `accuracy_formula_version=accuracy-marked-v1`
- Toplam soru başarısı: `accuracy_denominator=total`, `accuracy_formula="correct_count / total_count"`, `accuracy_formula_version=accuracy-total-v1`
- `accuracy` 0–1 aralığındadır ve yazılı formülle sayısal olarak uyuşmalıdır.

Bu iki oran aynı şey değildir. Örneğin 12/6/2 sonucu toplamda `%60`, işaretlenenlerde yaklaşık `%66,7`dir.

### Net

- LGS: `correct_count - incorrect_count / 3`
- TYT, AYT ve KPSS: `correct_count - incorrect_count / 4`
- `net_exam_type`, `net_formula`, `net_formula_version` ve `net_source` zorunludur. Sürüm LGS için `net-lgs-v1`, TYT/AYT/KPSS için `net-standard-v1` olur.
- Sınav türü bilinmeyen eski puan nete çevrilmez.
- Ders satırı, bütün sınavın toplamı veya bir konu kazanımı gibi sunulmaz.

### Diğer ölçümler

Süre, zorluk, yardım kullanımı, öğrenci doğruluğu ve tamamlama durumu kendi `*_source` alanını taşır. Süre kaynağı yalnız `active_measurement`, `approximate`, `default_estimate` veya `student_reported`; öğrenci doğruluğu kaynağı yalnız `system_measured`, `student_reported`, `teacher_entered` veya `model_inferred` olabilir. `unknown` kaynak doğrudan ölçüme yükseltilemez. Bilinmeyen yardım durumu `false` sayılmaz. Bir çözüm yüklemesi veya model cevabı öğrenci doğru/yanlış cevabı değildir.

## İstemci ve güvenilen sunucu sınırı

`validateClientEvidenceDraft` istemciden yalnız kaynak olayı, kaynak kayıt/sürüm bilgisi, istemci eylem UUID'si, olay zamanı, izinli ölçüm/metadata ve opak kaynak başvurusu kabul eder.

Şu alanlar istemciden gelirse kayıt reddedilir; sessizce üzerlerine yazılmaz:

`record_id`, `schema_version`, `contract_version`, `student_id`, `actor_id`, `actor_role`, `actor_student_relation`, `recorded_at`, `evidence_class`, `evidence_strength`, `trust_level`, `provenance`, `source_availability`, `education_context_id`, `subject_id`, `topic_id`, `objective_id`, `identity_resolution`, `source_adapter_version`, `topic_resolver_version`, `dedupe_key`, `target_record_id`, `derivation`.

`enrichTrustedEvidence` yalnız temiz taslaktan sonra doğrulanmış oturum öğrencisini, aktörü, kaynak sicilindeki kanıt sınıfını ve güvenli çözümleyici kimliklerini ekler. Beklenen uç nokta kaynağı ile istemcinin `source_code` değeri uyuşmazsa taslak reddedilir.

Kaynak okuma sonucu `available`, `empty`, `unavailable` veya `degraded` olarak ayrı zarflanır. `empty` ancak doğrulanmış sıfır kayıt demektir; şema/erişim hatası `unavailable` veya `degraded` kalır ve `%0 başarı` ya da öğrenme olayı üretmez.

## Tekrar önleme

İki ayrı model vardır:

- Canlı istemci eylemi: `student_id + source_code + client_action_id`.
- Kaynak/geri doldurma: `student_id + source_code + source_record_id + source_revision + semantic_event_type`.

`client_action_id` UUID olmalıdır. Yalnız zaman damgası, içerik özeti/hash'i veya arayüz düğmesi kilidi olay kimliği olamaz. Aynı anahtar ikinci gönderimde ikinci öğrenme olarak sayılmaz; farklı gerçek denemeler farklı eylem/kaynak kimliğiyle ayrı kalır.

## Düzeltme, silme ve türetme

- `correction`, değişmez `target_record_id` ve izinli neden (`source_edited`, `identity_remapped`, `measurement_corrected`, `backfill_corrected`) taşır. Kaynak revizyonu artar; ikinci çalışma gibi toplanmaz.
- `tombstone`, hedef ve izinli neden (`source_deleted`, `duplicate`, `student_requested`, `account_deleted`, `retention_expired`, `source_invalidated`, `privacy_withdrawal`) taşır. Böylece kaynak silme, hesap silme ve saklama süresi sonu birbirinden ayrılır.
- Fiziksel silme ancak hesap/veri saklama politikasıyla ayrı yürür. Güncel öğrenme projeksiyonu tombstone hedefini kullanmaz.
- `derived`, en az bir `input_record_id`, yöntem ve yöntem sürümü olmadan geçerli değildir.

## Metadata ve kaynak bağlantısı

Metadata kaynak başına izin listesidir: en çok 12 anahtar, en çok iki iç içe düzey, tek metinde 256 karakter ve toplam 2 KiB. Ham soru/istem/cevap/çözüm, mesaj, defter içeriği, transkript, ses/video/görsel verisi, öğretmen özel notu, çalıştırılabilir komut/script, parola veya erişim anahtarı iç içe nesnelerde de reddedilir. Hata nesneleri reddedilen değeri tekrar etmez.

Öğrenciye gösterilecek kaynak bağlantısı yalnız `drkoc-ref:v1:<source_code>:<opak-token>` biçimindedir. HTTP adresi, doğrudan UUID veya başka öğrenciyi ifşa edebilecek kimlik kabul edilmez. Opak token daha sonra oturum ve RLS ile çözülecektir; Faz 1 genel URL üretmez.

## Saf adaptör sınırı

`adapters.js` günlük, genel/branş denemesi, ödev, öğretmen geri bildirimi, Koç eylemi, AI Soru Çöz, yapılandırılmış/paketli ders, not maruziyeti, DB/paketli test, atlas, dil, canlı ders ve profil kaynakları için saf taslak adaptörleri sunar. `sourceFixtures.js`, dört dilin her birini ayrı tutan 25 sentetik örnek taşır.

Adaptörler ürün işleyicilerine bağlanmamıştır; Supabase, localStorage, ağ veya canlı kullanıcı okumaz/yazmaz. Bu ayrım Faz 1'in veri toplamaya başlamadan sözleşmeyi doğrulamasını sağlar.

Koşullu adaptörler koşulu sağlamayan girdiyi güvenli sunucu iddiasında `unmatched` karantinasına çevirir. Ödev ataması öğretmen kaynaklı ölçümsüz olaydır; tamamlanma durumu öğrenci beyanı snapshot'ıdır. Paylaşılmamış `lesson_summaries` kanıt olamaz. Kimya geçici testi içerik sürümü ve girişim kimliği olmadan kabul edilmez. Yerel dil süreleri açıkça aksi doğrulanmadıkça `approximate` kalır.

## Hata ve karantina

Doğrulayıcı kararlı hata kodu, alan yolu ve sabit Türkçe mesaj döndürür. Ham giriş değeri hata mesajına alınmaz. Başarısız sonuç `quarantine.status=quarantined` ve benzersiz neden kodlarını taşır. Özellikle belirsiz/eşleşmeyen kimlik öğrenme projeksiyonuna girmez; özgün kaynak kaydı alan sisteminde korunur.

Kabul komutu: `npm run test:ai-koc-faz-1`.
