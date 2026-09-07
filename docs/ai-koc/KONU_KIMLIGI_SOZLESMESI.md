# Ortak konu kimliği sözleşmesi — Faz 1

Tarih: 7 Eylül 2026  
Sürüm: `curriculum-identity@1`  
Makine kaynağı: `src/lib/learning/curriculumIdentityLedger.js`, `curriculumIdentity.js`, `topicResolver.js`

Bu sözleşme, DRKOÇ içindeki öğrenme kanıtlarının bir konuya hangi koşullarda bağlanabileceğini tanımlar. Etiket benzerliği kanıt değildir. Belirsiz bir kayıt yanlış konuya bağlanmak yerine açıkça belirsiz veya eşleşmemiş kalır.

## Kimlik hiyerarşisi

| Düzey | Biçim | Faz 1 sayısı | Anlam |
|---|---|---:|---|
| Eğitim bağlamı | `drkoc:curriculum:context:v1:<bağlam>` | 4 | LGS, TYT, AYT veya KPSS |
| Ders | `drkoc:curriculum:subject:v1:sNNN` | 33 | Belirli sınav bağlamındaki ders |
| Konu | `drkoc:curriculum:topic:v1:tNNNN` | 330 | Belirli bağlam ve ders içindeki konu |
| Dil içeriği | `drkoc:language:<kaynak>:v1:<yerel-id>` | Kaynağa bağlı | CEFR/ders/kelime/alıştırma gibi yerel kimlik |
| Atlas içeriği | `drkoc:atlas:<kaynak>:v1:<yerel-id>` | Kaynağa bağlı | Deney, görev, etkileşim veya soru yerel kimliği |

Konu kimliği addan, slug'dan, dizi konumundan veya rastgele veritabanı UUID'sinden çalışma zamanında türetilmez. İlk defter sürümü mevcut müfredat grafiğindeki 330 konuya değişmez sıra kimliği atar. Etiket düzeltildiğinde kimlik korunur; eski etiket kayıtlı takma ad/yönlendirme olarak tutulur. Yeni konu, daha önce kullanılmamış yeni kimlik alır. Silinen kimlik başka konuya yeniden verilmez.

## Yetkili kayıt ve uyumluluk

- `curriculumIdentityLedger.js` kimlik, görünür etiket, kayıtlı takma ad ve ön koşul kimliklerinin sürümlü defteridir.
- `graph.js` öğrenme sırası, ağırlık, süre ve zorluk gibi müfredat davranışını taşımaya devam eder.
- Eski `SINAV|Ders|Konu` anahtarı kanonik kimlik değildir; `resolveLegacyTopicId` ile kalıcı yönlendirme girdisidir.
- `readiness.js` geriye uyumluluk için eski `id` alanını korur, ayrıca `canonicalId` döndürür. Ön koşulları da kanonik kimlikle sunar.
- AI Soru Çöz taksonomisi görünür `canonicalTopic` alanını korur. Profil sınavı yalnız ipucu olduğundan `canonicalTopicId`, ortak çözümleyici bağlamdan bağımsız tek doğrulanmış aday bulduğunda üretilir; belirsiz eski eşleşmede `null` kalır.
- `library_topics.id` gibi veritabanı UUID'leri kaynak kayıt kimliğidir. Ortak konu kimliği yerine kullanılamaz; ileriki fazdaki açık eşleme tablosunun bir tarafı olur.

Faz 1'de veritabanı tablosu veya migration gerekmez. Kimlik defteri kodda sürümlüdür; kalıcı eşleme ve olay tabloları Faz 2'nin işlem sınırıdır.

## Çözümleyici karar sırası

`resolveTopicIdentity` tarayıcıda ve sunucuda aynı sonucu veren saf bir fonksiyondur.

1. Kaynak `topic_matched=false` demişse kayıt doğrudan `unmatched` olur. Başka alanlar bunu geçersiz kılamaz.
2. Kaynak öğrenme dışıysa `non_learning_source` olur.
3. Dil veya atlas yerel kimliği kendi `source_code` alanıyla uyuşarak doğrulanır ve `source_scope_only` kalır. Müfredat ilişkisi ancak içerik sahibinin doğruladığını belirten ayrı işaretle kabul edilir.
4. Açık ama bilinmeyen sınav/program kodu karantinaya gider; çözümleyici bunu yok sayıp küresel aramaya dönmez.
5. Geçerli sabit kimlik `direct_stable_id` olarak alınır; birlikte verilen açık program/ders yolu çelişiyorsa kayıt karantinaya gider.
6. Kayıtlı eski anahtar `legacy_redirect` ile sabit kimliğe gider; açık bağlamla çelişen yönlendirme reddedilir.
7. Yalnız kanonik etiket ve sürümlü takma ad kümesinde tam normalleştirilmiş eşleşme aranır.
8. `source_record`, `catalog`, `route` veya `user_selection` kökenli açık sınav bağlamı adayları daraltabilir.
9. Profil hedefi yalnız aday sırasını etkiler; iki olası konudan birini sessizce seçemez.
10. Ders verilmişse başka derslerde küresel arama yapılmaz.
11. İçerme benzerliği yalnız `suggestions` üretir; asla kalıcı `canonicalId` üretmez.

## Çözüm durumları

| Durum | Kanonik bağ kurulabilir mi? | Kullanım |
|---|---|---|
| `direct_stable_id` | Evet | Kaynak sabit kimliği taşıyor |
| `legacy_redirect` | Evet | Sürüm kayıtlı eski anahtar |
| `verified_alias` | Evet | Tek, sürümlü etiket/takma ad adayı |
| `unique_with_explicit_context` | Evet | Açık kaynak bağlamıyla tek aday |
| `ambiguous` | Hayır | Birden çok doğrulanmış aday; kullanıcı/katalog düzeltmesi gerekir |
| `unmatched` | Hayır | Doğrulanmış aday yok veya kaynak eşleşmeyi reddetmiş |
| `source_scope_only` | Evet, yalnız yerel kapsamda | Dil/atlas kimliği; müfredat ilişkisi ayrı ve isteğe bağlı |
| `subject_scope_only` | Evet, yalnız ders düzeyinde | Genel deneme gibi konu taşımayan ders sonucu |
| `context_scope_only` | Evet, yalnız program düzeyinde | Profil hedefi gibi ders/konu taşımayan program bilgisi |
| `non_learning_source` | Hayır | Kayıt defteri bu yüzeyi öğrenme dışı sayıyor |

Her sonuç `sourceCode`, namespace, program/sınav bağlamı, biliniyorsa sınıf/seviye, ders, konu, doğrulanmışsa hedef, içerik sürümü ve gösterim adını `canonicalPath` zarfında ayrı tutar. Ayrıca çözümleyici, kimlik defteri ve takma ad sürümünü; yöntemi, sayısal güveni ve güven sınıfını, bağlam kökenini, hangi girdi düzeyinin (`subtopic`/`topic`) eşleştiğini ve güvenli aday özetini taşır. Doğrulanmamış alt beceri `objectiveId=null` kalır. `ambiguous` ve `unmatched` sonuçlar kanıt kabul katmanında karantinaya gider.

## Bağlam ve ad değişikliği işlemi

Bir etiket değişikliği şu dört adımla yapılır:

1. Var olan `tNNNN` kimliği korunur.
2. Yeni görünür etiket aynı kayıt üzerinde değiştirilir.
3. Eski etiket, çakışma denetiminden sonra takma ad/yönlendirme olarak eklenir.
4. Kimlik, çözümleyici belirsizliği ve eski anahtar regresyon testleri çalıştırılır.

Takma ad birden fazla bağlamda geçerliyse bu hata değildir; açık bağlam yokken sonuç `ambiguous` olmalıdır. Takma ad kümesi değiştirilince `CURRICULUM_ALIAS_SET_VERSION` artırılır.

## Dil ve atlas sınırı

Dört dilin mevcut `dersId`, `kelimeId`, `alıştırmaId`, modül ve CEFR kimlikleri kendi ad alanında korunur. Fizik, biyoloji ve coğrafyanın mevcut görev/soru kodları da atlas ad alanında korunur. Kimya ve geometri gibi kalıcı deneme kimliği eksik yüzeyler, içerik sürümü ve yerel deneme kimliği olmadan olay üretemez.

Bir dil/atlas öğesiyle müfredat konusu arasındaki ilişki ancak içerik sahibi tarafından doğrulanmış ayrı bir `relatedCurriculumId` ve `relatedCurriculumVerified=true` çiftiyle eklenebilir. Model tahmini veya metin benzerliği bu ilişkiyi kalıcılaştıramaz.

## Kabul ve değişiklik kapısı

`npm run test:ai-koc-faz-1` şu sözleşmeleri denetler:

- 4 bağlam, 33 ders, 330 konu, 193 takma ad, güncel ve takma ad yollarıyla 523 eski anahtar yönlendirmesi ve 307 ön koşul kaydının yapısal bütünlüğü; çözülemeyen ön koşul sayısı 0'dır;
- graph ile konu/ön koşul sayısının korunması ve hazırlık/taksonomi çıktısında kanonik kimlik;
- aynı adlı TYT–AYT adaylarında belirsizliğin korunması;
- açık/geçersiz/çelişen bağlam, yanlış ders, eski anahtar, içerme önerisi ve `topic_matched=false` davranışı;
- dil ve atlas yerel kimliklerinin birbirine veya müfredat kimliğine karışmaması.
