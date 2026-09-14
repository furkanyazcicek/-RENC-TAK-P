# Faz 9 — Sertleştirme ve Pilot Hazırlığı Raporu

Durum: **Yerel olarak tamamlandı, canlı onay bekliyor. Faz 10 pilotu başlatılmadı.**

Bu rapor yeni bir öğrenci özelliği tanımlamaz. Faz 1–8 ile kurulan öğrenme veri ağı, öğrenci-konu modeli ve kapalı döngü AI Koç akışının gerçek öğrenci kullanımından önceki güvenlik, mahremiyet, doğruluk, dayanıklılık, performans, maliyet ve kalite kapılarını toplar.

## Kapsam uzlaştırması

Yetkili kaynak sicilindeki M01–M38 kayıtlarının her biri şu beş kanıtla denetlenir: kararlı kimlik; kanonik konu veya görünür belirsizlik; tekilleştirme; düzeltme/silme yaşam döngüsü; AI Koç için yetkili ve açıklanabilir kullanım. Kayıt üretmeyen katalog, türetilmiş görünüm ve kapsam dışı yüzeyler “uygulanamaz” diye boş bırakılmaz; olay üretmeme, yeniden hesaplama veya içerik yaşam döngüsü stratejisi açıkça kaydedilir.

Zorunlu yüzey grupları ders/PDF, soru kütüphanesi, AI Soru Çöz, öğretmene sorulan sorular, ödev, günlük çalışma, genel/branş denemeleri, dört dil, atlas/simülasyon, AI Koç döngüsü ve yeni yüzey yönetişimidir. Kod ile rota/kaynak sicili farkı otomatik kapıda sıfır olmalıdır.

Kanıt: `kanitlar/faz-9/kaynak-kapsam-uzlastirmasi.json`.

## Güvenlik sertleştirmesi

- İzole gömülü PostgreSQL 18 üzerinde beş eşzamanlı bağlantı açılır. İmzalı sentetik JWT doğrulanır ve doğrulanan `sub`, PostgreSQL oturumundaki `auth.uid()` kapsamına bağlanır.
- Kullanıcı B; kullanıcı A’nın olayını, profilini, dil etkinliğini, projeksiyonunu, kaynak bağlantısını, koçluk görevini, soru ve ödev kimliğini okuyamaz. Başka öğrencinin görevini veya kanıtını değiştiremez.
- Aynı kaynak kimliği iki ayrı bağlantıdan eşzamanlı gönderildiğinde tek satır oluşur; aynı anahtar farklı içerikle tekrar kullanılırsa çakışma olur.
- `student_id` araç gövdesinden alınmaz; tarih ve sayfalama üst sınırları sabittir. İstem/araç enjeksiyonu, onay öncesi yazma ve eski onay ayrı kapılarda reddedilir.
- Hata kayıtları ham mesajı ve öğrenci kimliğini yazmaz. Yalnız hata adı/kodu ile izinli düşük kardinaliteli alanlar kalır.
- Kullanım sayacı okunamıyorsa ücretli çağrı başlatılmaz. Bu, maliyet sınırlamasını altyapı arızasında da korur.
- İstemci ağacında yönetici anahtarı, OpenAI anahtarı veya sunucu özellik bayrağı bulunamaz. Üretim derlemesi ayrıca runner içinde taranır.
- Bağımlılık taramasındaki kritik harita, yüksek riskli PDF ve geliştirme zinciri açıkları güncel sürümlerle kapatılmış; `npm audit` sonucu sıfır bilinen açık olmalıdır.

Kanıt: `kanitlar/faz-9/guvenlik-rls-saldirgan-testleri.json` ve zorunlu komut günlüğü.

## Mahremiyet ve öğrenci kontrolü

Öğrenme ağı ham tıklama, tam PDF/soru, görsel, ses, özel mesaj veya öğretmenin özel notunu kopyalamaz. Kaynak konumu yalnız opak ve öğrenci kapsamlı bir bağlantıdır. Sağlık, kişilik, aile veya teşhis çıkarımı yasaktır. Öğrenci kapsamlı dışa aktarım; kanıt, projeksiyon, açık onaylı hafıza, koçluk görevi/sonucu, dil ilerlemesi ve itirazları içerir; gizli anahtar ve ham özel içerik içermez.

Öğrencinin açık onaylı tercihleri var olan `forget_student_memory` yolu ile unutulur. Kaynak düzeltme/tombstone zinciri türevleri yeniden hesaplar. Hesap silme; profil, olay, dil ilerlemesi, projeksiyon, açıklama bağlantısı, görev ve öğrenciye özel özellik bayrağı üzerinde gerçek PostgreSQL `ON DELETE CASCADE` testiyle doğrulanır.

Saklama süreleri ayrı taslakta yer alır. Bunlar hukuki uygunluk iddiası değildir; ürün sahibi ve gerektiğinde hukuk incelemesi olmadan otomatik silme açılmaz veya kullanıcı metni yayımlanmaz.

## Veri doğruluğu ve dayanıklılık

M01–M38 için alan kaydı, beklenen/gerçek olay, geçerli kanıt, karantina, düzeltme/geçersiz kılma, tekrar denemesi, başarısız/işlenmemiş sayı ve projeksiyon zamanı üreten çalıştırılabilir rapor vardır. Örnekleme yalnız opak kaynak belirteçleriyle yapılır. Tam replay ve artımlı sonuç checksum’ları eşit; düzeltme ve tombstone sonrasında eski puan/toplam kalıntısı sıfır olmalıdır.

Kesinti takımı olay alımının kapanması, veritabanı zaman aşımı, işleyici kesintisi, iki işçi, geç olay, zehirli kayıt, model zaman aşımı, kısmi araç arızası, tarayıcı yenilemesi, dil aktarımı ağ kesintisi ve kaldırılmış hedefi kapsar. Beklenen sonuç kuyrukta koruma, idempotent yeniden işlem veya açık güvenli geri dönüştür; sessiz kayıp değildir.

## Sayısal bütçeler

| Ölçüm | Bütçe |
|---|---:|
| Olay yazma p95 | ≤ 120 ms |
| Küçük/orta/yoğun projeksiyon | ≤ 350 / 900 / 2.500 ms |
| Genel görünüm / konu kanıtı sorgusu p95 | ≤ 120 / 160 ms |
| AI Koç ilk parça / toplam sözleşme süresi | ≤ 4 sn / 60 sn |
| Başlangıç bağlamı | ≤ 12.000 karakter |
| Araç turu | ≤ 4 |
| İstem / çıktı tokenı | ≤ 8.000 / 1.200 |
| Sentetik mesaj maliyeti | ≤ 0,01 ABD doları |
| Backfill benzetimi | ≥ 100 kayıt/sn |
| Telefon yerel kuyruğa ekleme p95 | ≤ 16 ms |

Maliyet hesabı gerçek ücretli istek değildir. `gpt-4o-mini` için test tarihindeki resmî metin token tarifesi kullanılır: 1 milyon giriş tokenı 0,15 ABD doları, 1 milyon çıktı tokenı 0,60 ABD doları. Kaynak: [OpenAI model sayfası](https://developers.openai.com/api/docs/models/gpt-4o-mini).

## Kalan riskler ve Faz 10 kapısı

- Gerçek model ağ gecikmesi ve sağlayıcı kota davranışı ücretli çağrı yapılmadan kesinleştirilemez; Faz 10’da yalnız açık onaylı test hesaplarıyla ölçülür.
- Saklama/gizlilik metni ürün sahibi ve hukuk incelemesi bekler; otomatik silme kapalıdır.
- On iki sentetik örnek insan incelemesi için seçilmiştir; gerçek öğrenci metni değerlendirme dosyasına kopyalanmaz.
- `npm run yayin:dogrula` temiz `main` gerektirir. Çalışma alanındaki kullanıcı değişiklikleri nedeniyle kaynak ön kapısı durursa bu yayın yetkisi vermez; hiçbir değişiklik silinmez veya zorla kaydedilmez.

Faz 10 planı: `FAZ_10_PILOT_VE_GERI_DONUS_PLANI.md`.

## Nihai yerel kabul — 13 Eylül 2026

- Çekirdek koşu: 11 bölüm, 109 doğrulama, 11/11 kesinti senaryosu, 9/9 kabul kapısı.
- Tam koşu: 27/27 komut; Faz 1–9, içerik/PDF, dört dil, iki atlas, tarih geometrisi, bağımlılık taraması, production build ve istemci paketi güvenlik taraması geçti.
- Güvenlik bağımlılık sonucu: 0 bilinen açık. Üretim paketinde kaynak haritası, sunucu sırrı veya sunucu bayrağı sızıntısı: 0.
- Faz 2–8 migration checksum'ları yetkili baz çizgilerle aynı kaldı. Faz 9 migration checksum'u `77ab95bd765f38294b89ab1fa577d4c78669909a0d866d6294c5a3edf95cb103`.
- Canlı yan etki: 0. Canlı Supabase, gerçek öğrenci/yedek, gerçek backfill/seed, ücretli model, pilot, deploy ve push kullanılmadı.
- Yayın kapısı: `npm run yayin:dogrula` temiz çalışma ağacı istediği ve çalışma alanında korunması gereken kullanıcı/Faz değişiklikleri bulunduğu için çalıştırılmadı. Ana sayfa testi ile production build ayrı ayrı geçti; bu kayıt yayın izni değildir.
