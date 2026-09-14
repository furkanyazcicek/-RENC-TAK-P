# Faz 5 — Dil İlerlemesi Mimarisi

Tarih: 13 Eylül 2026  
Durum: Yerel olarak tamamlandı, canlı onay bekliyor. Canlı şemaya uygulanmadı.

## Kapsam ve sınır

Bu faz M27–M30 kaynaklarını, öğrencinin cihazındaki tek kullanıcıya ait olmayan
`localStorage` anlık görüntülerinden hesap kapsamlı, yerel-öncelikli ve cihazlar
arası yenilenebilir bir kayda taşır. İngilizce, Almanca, Fransızca ve
İspanyolcanın mevcut pedagojik ekranları korunur; yalnız ilerleme deposu,
eşitleme sınırı, kullanıcı kontrolü ve güvenli kanıt yazımı ortaklaştırılır.

Tek yetkili yeni DDL
`supabase/migration_learning_language_progress.sql` dosyasıdır. Faz 2 ve Faz 3
migration dosyaları değiştirilmez. Canlı migration, gerçek öğrenci verisi,
gerçek backfill, ücretli model, öğrenci modeli, AI Koç tüketimi, yayın ve push
bu fazda yoktur.

## Dört dilin doğrulanmış envanteri

| Matris | Dil | Eski cihaz anahtarı | İçerik özeti | Dile özgü korunan alanlar |
|---|---|---|---|---|
| M27 | İngilizce (`en`) | `drkoc-ingilizce-v1` | 36 ders, 104 kelime, 21 modül, 10 not, 45 tespit maddesi, 800 ilgi kartı | İngilizce tanım/örnekler, telaffuz, Türkçe düşünme izleri ve İngilizce cevap motoru |
| M28 | Almanca (`de`) | `drkoc-almanca-v1` | 38 ders, 144 kelime, 21 modül, 10 not, 45 tespit maddesi, 800 ilgi kartı | artikel, çoğul/çekim, Almanca ses ve dile özgü kabul/teşhis kuralları |
| M29 | Fransızca (`fr`) | `drkoc-fransizca-v1` | 38 ders, 144 kelime, 10 modül, 9 not, 45 tespit maddesi, 800 ilgi kartı | artikel/cinsiyet, vurgu/telaffuz ve Fransızca kabul/teşhis kuralları |
| M30 | İspanyolca (`es`) | `drkoc-ispanyolca-v1` | 38 ders, 144 kelime, 10 modül, 9 not, 45 tespit maddesi, 800 ilgi kartı | artikel/cinsiyet, aksan/ñ ayrımı ve İspanyolca kabul/teşhis kuralları |

Dört yerel şemanın güvenli ortak çekirdeği `surum`, `profil`, `tespit`,
`dersler`, `kartlar`, `beceriler`, `izler`, `gunluk`, `yazmalar`, `favoriler`,
`sonDers` ve `arayuz` alanlarıdır. İlgi kartları ekranının sonradan eklediği
`kartDesteleri.bilinen` ile `kartFavorileri` de veri kaybını önlemek için
sözleşmeye dahildir. Ders kimliği, etkinlik kimliği, kelime kimliği, tekrar
boyutu, CEFR düzeyi ve içerik sürümü dil içinde aynen korunur.

Yerel kayıtta süre/gün, son ve en iyi ders sonucu, deneme sayacı, sekiz temel
beceri, dört tekrar boyutu (`tanima`, `baglam`, `tamamlama`, `uretim`), tekrar
zamanı, favori, hedef ve seri için gerekli günlük kayıt bulunur. Ses kaydı
`Blob` olarak bellektedir; ilerleme veya kanıt değildir ve taşınmaz.

## Hesap kapsamı ve açık cihaz aktarımı

Oturum açmış öğrenci için etkin cihaz anahtarı
`drkoc:language-progress:v2:<auth.uid>:<dil>` biçimindedir. Dil rotasının en dış
sınırı kullanıcı rolünü ve UUID'sini çocuk ekran çizilmeden önce ayarlar. A
hesabından B hesabına geçildiğinde A'nın snapshot'ı B anahtarından okunamaz;
çıkışta hesap anahtarı etkin olmaktan çıkar.

Eski `drkoc-<dil>-v1` anahtarı oturum açınca otomatik sahiplenilmez. Biçim ve
sürüm doğrulanır, öğrenciye hangi türlerin birleşeceği anlatılır, “bu ilerleme
bana ait” onayı alınır ve kararlı `import_id` ile `client_action_id` cihazda
bekletilir. Ağ veya sayfa yenilemesi aktarımı çoğaltmaz. Sunucu yazısı tekrar
okunmadan sahiplik makbuzu tamamlanmış sayılmaz; eski cihaz kopyası silinmez.
Başka hesapça sahiplenilmiş yerel aday sessizce taşınmaz. Bekleyen outbox işi
öğrencinin “Aktarımı iptal et” eylemiyle kuyruktan da çıkarılır.

## Kalıcı veri modeli ve mahremiyet

- `student_language_progress_states`: öğrenci+dil+bağımsız program için son
  public snapshot, güvenli özet, optimistic revision ve reset generation.
- `student_language_progress_revisions`: içerik kopyalamayan revision/hash
  audit izi.
- `learning_private.student_language_private_work`: yazma taslakları ve seviye
  tespiti serbest yazısı. Normal ürün rollerine kapalıdır.
- `student_language_activity_events`: ders, soru, tekrar, beceri ve öz beyan
  olaylarının dar sayısal/enum kaydı ile ortak kanıt bağı.
- `student_language_import_receipts` ve private import claim: bir aktarım
  kimliğinin iki hesaba bağlanmasını engeller.
- `student_language_sync_conflicts`: eski revision yazılarını kaybetmeden
  `pending` tutar; başarılı birleşik yazı bunları `resolved` yapar.
- private action receipt: aynı eylem+aynı payload'a aynı sonucu, aynı
  eylem+farklı payload'a `idempotency_conflict` verir.

Public snapshot'ta `yazmalar` boş olmalı ve `tespit.yazma.metin` bulunmamalıdır.
Tam cevap, cevap anahtarı, ham cevap, taslak, erişim sırrı veya cihaz parmak izi
ortak kanıta ve güvenli özete kabul edilmez. İstemci kaynağı yalnız `web` veya
`pwa` gibi düşük kardinaliteli değerdir.

Normal öğrenci tabloları doğrudan yazamaz; dar RPC'ler öğrenciyi istemci
`student_id` alanından değil `auth.uid()` ve `profiles.role='student'`
kontrolünden türetir. Public tablolar FORCE RLS ve yalnız kendi satırını okuma
politikası taşır. Öğretmen, veli, anon ve başka öğrenci RPC ile de kendi
olmayan ilerlemeyi okuyamaz veya yazamaz.

## Birleştirme ve çatışma kuralları

| Alan | Kural | Örnek |
|---|---|---|
| Sıfırlama | Büyük `generation` tüm eski snapshot alanlarından üstündür. | Cihaz A generation 1, bulut generation 2 ise eski dersler dirilmez. |
| Ders tamamlanması | Bir kez tamamlanan/güçlenen/ustalaşılan ders `baslanmadi` veya `calisiliyor` durumuna gerilemez. | Yeni cihaz yalnız dersi açtı diye eski `ustalasildi` kaydı düşmez. |
| Son ve en iyi skor | Son sonuç en güncel geçerli `sonTarih` kaydından; `enIyiOran` iki snapshot'ın maksimumundan gelir. | Son deneme %67, eski en iyi %90 ise ikisi ayrı saklanır. |
| Deneme/süre sayaçları | Snapshot sayaçları toplanmaz; yüksek geçerli snapshot korunur. Gerçek deneme sayısı append-only activity event'lerinden türetilebilir. | İki cihazdaki `deneme=2` kör toplamla 4 yapılmaz. |
| Tekrar kartı | Plan/stage ve bir sonraki tekrar en güncel `sonTarih` durumundan; özet sayaçlar maksimumdan gelir. | Eski kart planı yeni planın üstüne yazılmaz. |
| Günlük ve iz sayaçları | Aynı gün/iz için maksimum snapshot; kimlik kümeleri birleşimdir. | Aynı offline oturum iki kez toplamı büyütmez. |
| Favoriler | Alan revizyonu varsa en güncel alan; eski kayıtta timestamp yoksa kayıpsız birleşim. | Eski favori aktarımda yok olmaz. |
| Eş zamanlı ayrışma | Aynı timestamp ve farklı değer `same_timestamp_divergence` olarak snapshot'a ve sunucu çatışma kaydına yazılır. | Sessiz last-write-wins uygulanmaz; yeniden işlenebilir. |

## Yerel-öncelikli çalışma akışı

Dil ekranı önce hesap kapsamlı cihaz kopyasını günceller ve mevcut dil olayını
yayınlar. `LanguageProgressBoundary` 350 ms içinde snapshot'ı public/private
olarak ayırıp revision şartıyla yollar. Geçici hata hesap kapsamlı outbox'ta
kalır; öğrenci anlaşılır durum metni ve “Yeniden dene” eylemi görür. Başka
cihazdaki revision bulunduğunda son bulut snapshot'ı okunur, alan kurallarıyla
birleştirilir ve yeni action kimliğiyle yeniden yazılır. Odak, yeniden çevrimiçi
olma ve sekmenin görünürleşmesi güvenli yenilemeyi tetikler.

Sunucudaki silme, istemcinin açık reset eyleminden gelen daha büyük generation
ile soft-delete olur. Silinmiş satırın revision'ı yeni çalışmanın eski
generation ile üzerine yazılmaması için okunabilir durum zarfında korunur;
öğrenciye eski içerik döndürülmez.

## Ortak kanıt ağı

Faz 2'nin M27–M30 anlamları değiştirilmeden
`learning-language-registry@1` çalışma zamanı izdüşümüne alınır. Kaynaklar
`ingilizce_learning`, `almanca_learning`, `fransizca_learning` ve
`ispanyolca_learning`; program kimliği
`drkoc:language:<dil>:independent_language_learning` biçimindedir. Böylece okul
İngilizcesi müfredat konusu ile bağımsız dil programı sessizce birleşmez.

`placement_snapshot`, `lesson_result_snapshot`, `review_result_snapshot` ve
`skill_snapshot` sistem gözlemi; `self_report_snapshot` öğrenci beyanıdır.
Ders/soru olayları doğru-yanlış-boş, beceri, CEFR, süre ve ekranda çözüm
gösterimi varsa yardım sinyalini taşır. İlgi kartındaki “biliyordum” doğrudan
ölçüm değil öz beyandır. Uygulamayı açmak başarı kanıtı üretmez. AI Koç için
yalnız `language-progress-summary@1` ve sahiplik kontrollü kanıtlar hazırdır;
Faz 7 tüketimi bu fazda uygulanmaz.

## Geriye doldurma ve canlı geçiş sınırı

Tarayıcı localStorage verisine sunucudan toplu erişilemez. Bu nedenle geçmiş
cihaz verisinin tek geçerli yolu, ilgili cihazda öğrencinin oturum açması ve
açık import onayıdır. Canlı başarı/hata oranı, geri dönüş penceresi ve mevcut
sunucu kaydı backfill'i Faz 10 kontrollü geçiş planında ölçülecektir. Faz 5
kanıtındaki dry-run yalnız dört sentetik cihaz adayıdır; canlı apply izni
değildir.

## Yerel kabul sınırı

PGlite/WASM tek bağlantıyı seri işler. RLS, optimistic revision, receipt,
2/10 tekrar, ağ kesintisi/devam, reset, silme, hesap değişimi ve M27–M30 kanıt
bağlamı yerel olarak sınanır. Gerçek çok bağlantılı PostgreSQL yarışı, gerçek
hesaplar, canlı migration ve gerçek cihaz telemetrisi tamamlandı diye sunulmaz;
Faz 9/10 ve açık kullanıcı onayını bekler.

Nihai yerel kabulde [çekirdek kayıt](kanitlar/faz-5/faz-5-kabul-sonucu.json)
8 bölüm, 231 doğrulama ve 9/9 kapı; [tam toplayıcı](kanitlar/faz-5/regresyon-komutlari.json)
12/12 komut üretmiştir. [Görsel doğrulama](kanitlar/faz-5/gorsel-dogrulama.md)
masaüstü, tablet ve telefon durumlarını gerçek tarayıcıda geçmiştir.
