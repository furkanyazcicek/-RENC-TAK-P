# Faz 10 — Canlı Geçiş Ön Koşul Raporu

Durum: **Devam ediyor; canlı yazma kapalı.**

Bu rapor 13 Eylül 2026 tarihli yalnız-okuma yerel başlangıç denetimini kaydeder. Canlı Supabase bağlantısı, migration, backfill, gerçek öğrenci gölgesi, pilot, ücretli model, yayın veya Git push yapılmadı. [Yerel hazırlık toplayıcısı](kanitlar/faz-10/faz-10-yerel-hazirlik-komutlari.json) 2/2 komutu geçti; alt kanıtları [Faz 10 başlangıç checkpoint'i](kanitlar/faz-10/faz-10-baslangic-checkpoint.json) ve [migration operasyon planıdır](kanitlar/faz-10/faz-10-migration-operasyon-plani.json).

## Doğrulanan yerel giriş

- Yetkili çalışma kopyası `/Users/furkantalhayazcicek/Desktop/DRKOÇ`; `.git` gerçek ve bağımsız klasördür.
- Dal `main`, `origin` yetkili GitHub deposudur ve yerel `origin/main` referansına göre fark `0/0`dır. Ağdan yeni `fetch` yapılmadığı için bu, uzaktaki anlık durum iddiası değildir.
- `.vercel` bağlantısı yoktur. Kullanıcı ve faz değişiklikleri korunmuş, çalışma alanı temizlenmemiş veya otomatik commit edilmemiştir.
- Faz 9 kabulü `passed`: 27/27 komut, 109 doğrulama, 11/11 kesinti senaryosu ve 9/9 kapı.
- `learning-content-manifest@1`, 4.344 kayıt ve `6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc` içerik checksum'u korunmaktadır.
- Faz 2, 3, 4, 5, 6, 8 ve 9 migration dosyalarının SHA-256 değerleri yetkili yerel baz çizgiyle 7/7 eşleşmiştir.
- Sunucu ve migration varsayılanlarında kaynak olayları, projeksiyon, yeni AI Koç analizi ve AI Koç yazıları kapalı; güvenli eski davranış açıktır.
- On iki kişisel verisiz gözlem/alarm metriği yerel olarak hazırdır. Canlı alarm teslimi henüz doğrulanmış değildir.

## Aday migration sırası

Canlı migration geçmişiyle uzlaştırılmadan hiçbir dosya uygulanmayacaktır. Yeni faz migrationları için yerel bağımlılık sırası şöyledir:

1. `migration_learning_evidence_network.sql`
2. `migration_learning_content_activity.sql`
3. `migration_learning_academic_records.sql`
4. `migration_learning_language_progress.sql`
5. `migration_learning_student_topic_model.sql`
6. `migration_learning_coaching_loop.sql`
7. `migration_learning_hardening.sql`

`migration_ai_coach.sql`, `profiles`, kaynak tabloları ve `ai_study_tasks` bu sıranın canlı ön koşullarıdır. Canlı migration geçmişinde bulunup bulunmadıkları görülmeden `migration_ai_coach.sql` körlemesine yeniden uygulanmayacaktır. Hedef belirlenmediği için mevcut canlı şemaya karşı kuru çalışma yapılmadı ve başarılı sayılmadı.

Statik SQL denetiminde üst düzey `DROP TABLE`, `DROP SCHEMA`, `TRUNCATE` veya `DROP COLUMN` bulunmadı. Beş `DELETE` ifadesinin tümü sahiplik denetimli kullanıcı silme/reset fonksiyonlarının gövdesindedir ve migration uygulanırken çalışmaz. Bununla birlikte:

- Faz 3 SQL dosyasında kendi `BEGIN/COMMIT` çifti yoktur; canlı yürütücü bu dosyayı tek transaction içinde ve ilk hatada duracak şekilde sarmalıdır.
- Toplam 67 indeks `CONCURRENTLY` olmadan oluşturulur. Çoğu yeni tablo üzerinde olsa da mevcut tablo boyutları görülmeden kilit süresi güvenli sayılamaz.
- Faz 3 ve Faz 4 mevcut ders, soru, deneme, profil ve AI çözüm tablolarına kolon/kısıt ekler. Süre, kilit ve disk etkisi önce geri kazanılabilir bir kopyada ölçülmelidir.

## Geri dönüş ve ileri düzeltme sınırı

- Migration öncesinde bütün yeni özellik bayrakları kapalı tutulur.
- Şema değişiklikleri mevcut davranışı otomatik açmaz; her küçük adımdan sonra tablo, kısıt, indeks ve RLS doğrulanır.
- Sorunda kaynak alımı ve AI Koç yazıları kapatılır, eski güvenli bağlam korunur; kuyruk ve cursor silinmez.
- Kanıt oluşmuş tabloları düşürmek veya öğrenci verisini toplu silmek geri dönüş yöntemi değildir. Uyumlu ileri düzeltme ve son doğrulanmış projeksiyon nesline dönüş kullanılır.
- Canlı yazıdan önce tarihli yedek ile geri kazanım/tatbikat kimliği doğrulanmalıdır.

## Bekleyen ayrı onaylar

Genel “devam” ifadesi aşağıdaki yetkilerin hiçbiri sayılmamıştır:

- canlı veritabanı migrationları;
- canlı backfill veya veri dönüşümü;
- gerçek öğrenci hesaplarında gölge çalışma;
- seçilmiş pilot öğrencilere yeni AI Koç'u gösterme;
- üretim yayını;
- pilot sonrası genel kullanım.

Gizlilik/saklama taslağı için ürün sahibi ve gerektiğinde hukuk inceleme kaydı; seçilmiş test hesapları; ürün, teknik ve güvenlik sorumluları da henüz kayıtlı değildir.

## Durduran tek kapı

**Canlı Supabase proje kimliği ile tarihli yedek/geri kazanım kanıtı doğrulanmamıştır.** Bu nedenle canlı şema kuru çalışması ve geri kazanılabilir kopyadaki kilit/süre provası dâhil bütün canlı yazılar durdurulmuştur. Bu iki kanıt sağlandıktan sonra önce yalnız-okuma şema ve migration geçmişi karşılaştırması yapılacak; canlı migration için ayrıca kapsamı belli açık onay istenecektir.
