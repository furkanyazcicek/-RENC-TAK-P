# Codex Uygulama İstemi — Faz 1: Ortak Konu ve Öğrenme Kanıtı Sözleşmesi

## Görevin

Faz 0 tamamlanmışsa, bütün öğrenme kaynaklarının aynı ders, konu ve kazanımı güvenilir biçimde tanımasını ve aynı olay anlamlarını kullanmasını sağlayan Faz 1'i uygula.

Bu fazın sonunda ortak kimlik ve kanıt sözleşmesi kodla doğrulanabilir olmalıdır. Ortak olayların kalıcı veri ağı Faz 2'nin işidir; bu fazda canlı olay toplama başlatma.

## Zorunlu okumalar

- AGENTS.md ve varsa yerel AGENTS.md dosyaları
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- Faz 0'ın bütün çıktı dosyaları
- src/lib/curriculum/graph.js
- src/lib/curriculum/readiness.js
- api/_lib/solve/taxonomy.js
- src/lib/subjectSplit.js
- supabase kütüphane ve soru sınıflandırma dosyaları

Faz 0 tamamlanmamışsa bağımlılığı açıkça raporla ve bu fazı tamamlanmış gösterme.

## 1. Mevcut temeli koru

Müfredat grafiğini, hazırlık hesabını, library_subjects/library_topics yapısını ve AI Soru Çöz eşleştiricisini yok sayıp paralel ikinci bir konu sistemi kurma.

Önce bunların:

- hangi sınav ve dersleri kapsadığını;
- aynı isimli konuları nasıl ayırdığını;
- takma adları nasıl çözdüğünü;
- paketli içeriklerle veritabanı kimliklerini nasıl ilişkilendirdiğini;
- bilinmeyen konularda ne yaptığını

testlerle çıkar.

## 2. Kanonik eğitim kimliği tasarla

docs/ai-koc/KONU_KIMLIGI_SOZLESMESI.md dosyasını oluştur ve uygulamasını geliştir.

Sözleşme en az şu düzeyleri ayırmalı:

- sınav ailesi veya eğitim bağlamı;
- sınıf/seviye;
- ders;
- konu;
- mümkün olduğunda kazanım veya alt beceri;
- içerik sürümü ve gösterim adı.

Kimlik:

- metin adı değişse bile sabit kalmalı;
- aynı adlı fakat farklı sınav/seviyedeki konuları çakıştırmamalı;
- veritabanı ve paketli içerikte kullanılabilmeli;
- dışarıdan girilen serbest metni eşleme sonucundan ayırmalı;
- eski ad ve takma adları sürümlü taşımalı;
- öğrenci verisi olmadan da deterministik üretilebilmeli veya yetkili katalogdan alınabilmeli.

Teknik biçimi Faz 0 kanıtına göre seç. Seçimi docs/ai-koc/MIMARI_KARARLAR.md içinde karar kaydı olarak gerekçelendir.

## 3. Eşleştirme sonucu

Ortak çözücü şu sonuçları ayırmalı:

- tam eşleşme;
- doğrulanmış takma ad eşleşmesi;
- bağlam yardımıyla tek aday;
- belirsiz, birden çok aday;
- eşleşmedi;
- eski/sürüm dışı kimlik.

Her sonuç:

- kanonik kimliği veya boş değeri;
- eşleşme yöntemini;
- güven düzeyini;
- adayları;
- kullanılan sınav/seviye/ders bağlamını;
- eşleştirici sürümünü

taşımalı.

Belirsiz veya eşleşmeyen kayıt öğrenci ustalık hesabına otomatik katılmamalı. LLM tahmini yalnız aday üretebilir; kalıcı doğrulanmış eşleme yapamaz.

## 4. Kaynak özel eşlemeler

Faz 0 matrisindeki her zorunlu kaynak için adaptör sözleşmesi yaz:

- günlük takipteki Ders - Konu serbest metni;
- genel denemenin ders düzeyi sonucu;
- branş denemesinin ders/konu alanı;
- kütüphane topic_id değerleri;
- paketli ders ve paketli soru testlerinin sabit tanımları;
- AI Soru Çöz ham konu, alt konu ve canonical_topic alanları;
- öğretmen sorunlu soruları ve ödevleri;
- dört dilin ders, beceri ve kelime kimlikleri;
- atlas ve simülasyon görev kimlikleri;
- AI plan maddeleri.

Kaynaktan gelen ayrıntı yoksa yapay ayrıntı üretme. Örneğin yalnız ders düzeyinde olan deneme sonucunu konuya dağıtma.

## 5. Öğrenme olayı ve kanıt sözleşmesi

docs/ai-koc/OGRENME_KANITI_SOZLESMESI.md dosyasını oluştur. Sürüm 1 için:

- zorunlu ve isteğe bağlı alanları;
- olay türlerini;
- etkinlik türlerini;
- ölçüm alanlarını;
- doğrudan ölçüm, öğrenci beyanı, öğretmen geri bildirimi ve türetilmiş sonuç ayrımını;
- düşük/orta/yüksek kanıt gücünü;
- kaynak ve içerik sürümünü;
- idempotency_key tekrar önleme anahtarının nasıl üretileceğini;
- kaynak düzeltme, iptal ve silme ilişkisini;
- occurred_at ile recorded_at farkını;
- metadata sınırlarını;
- öğrenciye ait olmayan içerik tanımı ile öğrenci olayını ayırmayı

tanımla.

Olay türleri rastgele serbest metin olmamalı. Yeni tür ekleme yöntemi ve geriye uyumluluk kuralı bulunmalı.

## 6. Paylaşılan doğrulama kodu

Tarayıcı ve sunucuda güvenle kullanılabilen ortak doğrulayıcılar geliştir:

- konu kimliği doğrulama;
- olay zarfı doğrulama;
- olay türü ve kanıt türü doğrulama;
- sayı ve tarih sınırları;
- metadata boyut ve anahtar sınırı;
- idempotency anahtarı;
- kaynak tanımı.

Yeni ağır bağımlılık ekleme. Mevcut yapı yeterliyse saf JavaScript ve mevcut test düzenini kullan.

Sunucu istemciden gelen student_id değerine güvenmemelidir. Sözleşmede alan bulunsa bile gerçek öğrenci kimliği doğrulanmış oturumdan eklenmelidir.

## 7. Kaynak kayıt defteri

Kodla doğrulanabilir bir kaynak kayıt defteri oluştur. Her kaynak için:

- sabit kaynak kodu;
- sahibi olan modül;
- desteklenen olay türleri;
- konu çözümleyici;
- kanıt gücü varsayılanı;
- kaynak kayıt kimliği üretme kuralı;
- düzeltme/silme desteği;
- şema sürümü

bulunsun.

Yeni bir öğrenci öğrenme rotası eklendiğinde kayıt defterinde karşılığı yoksa test uyarı veya hata vermeli. Faz 0 kaynak matrisiyle kayıt defteri arasında otomatik tutarlılık kontrolü ekle.

## 8. Geçiş dosyaları

Kanonik konu kataloğu veya eşleme tablosu için veritabanı değişikliği gerekiyorsa:

- tekrar çalıştırılabilir;
- mevcut satırları bozmayan;
- geri alma notu olan;
- RLS kuralları açık;
- canlı veriye otomatik tahmin yazmayan

yerel migration dosyalarını hazırla.

Mevcut onay yoksa canlı Supabase'e uygulama. Bütün yerel çalışma ve doğrulamayı bitirdikten sonra durumu “Yerel olarak tamamlandı, canlı onay bekliyor” biçiminde kaydet.

## 9. Zorunlu testler

En az şu durumları otomatik test et:

- büyük/küçük harf ve Türkçe karakter;
- yaygın takma ad;
- aynı konu adının iki sınav türünde bulunması;
- ders adı yanlış veya eksik;
- alt konu ana konudan daha kesin;
- paketli içerik ile veritabanı içeriğinin aynı kimliğe bağlanması;
- belirsiz iki adayın karantinaya gitmesi;
- eşleşmeyen kaydın kanonik kimlik almaması;
- eski kimliğin yeni sürüme çözülmesi;
- metadata ve sayı sınırı ihlali;
- istemcinin öğrenci kimliği vermeye çalışması;
- aynı olay için aynı tekrar önleme anahtarı;
- kaynak kayıt defteri tamlık testi.

Mevcut müfredat ve AI Soru Çöz testlerini de çalıştır. Geriye dönük davranış bozulmamalı.

## Kabul kapıları

- Tek konu için bütün zorunlu kaynaklardan aynı sabit kimlik üretilebiliyor.
- Aynı isimli farklı eğitim bağlamları çakışmıyor.
- Belirsiz kayıt sessizce kesin konuya yazılmıyor.
- Genel deneme gibi kaba veri sahte konu ayrıntısı üretmiyor.
- Olay ve kanıt türlerinin anlamı belgeli ve kodla doğrulanıyor.
- Kaynak kayıt defteri Faz 0 matrisiyle tutarlı.
- Eski graph/readiness/taxonomy testleri geçiyor.
- Yeni sözleşme testleri geçiyor.
- Migration gerekiyorsa yerelde doğrulandı ve canlıya izinsiz uygulanmadı.

## Faz sonu

MIMARI_KARARLAR.md ve FAZ_DURUMU.md dosyalarını gerçek sonuçlarla güncelle. Açık eşleşme kapsamı varsa oranını ve etkilenen modülleri yaz. Son yanıtında seçilen kimlik yöntemini, test sonucunu, canlı şema durumunu ve Faz 2'ye geçiş kararını kısa bildir.
