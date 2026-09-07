# Codex Uygulama İstemi — Faz 2: Veri Ağı Çekirdeği

## Görevin

Faz 1'de tanımlanan ortak öğrenme kanıtını güvenli, tekrar gönderimde çoğalmayan, düzeltilebilir ve yeniden işlenebilir biçimde saklayan veri ağı çekirdeğini uygula.

Bu fazda bütün ürün modüllerini bağlama. Önce çekirdeği sentetik bir kaynak ve sınırlı mevcut adaptörle uçtan uca doğrula. Faz 3, 4 ve 5 kaynak bağlantılarını tamamlayacaktır.

## Zorunlu okumalar

- AGENTS.md ve CLAUDE.md
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- Faz 0 ve Faz 1 çıktılarının tamamı
- mevcut Supabase migration, RLS testleri ve API kimlik doğrulama katmanı
- api/_lib/auth.js ve mevcut AI araç yazma onayı

Faz 1 kabul kapıları geçmediyse bu fazı tamamlamaya çalışma.

## 1. Yetkili kaynak ilişkisi

MIMARI_KARARLAR.md içindeki kararı kesinleştir:

- alan tabloları kendi verilerinin yetkili kaynağı mı;
- ortak ağ olay defteri mi, kanıt görünümü mü, ikisinin bileşimi mi;
- aynı verinin iki yerde ayrışması nasıl engellenecek;
- kaynak düzenleme/silme ortak ağa nasıl yansıyacak.

Mevcut daily_logs, exams, mock_exams, questions, homeworks, ai_solution_sessions, ai_study_tasks ve içerik tablolarını silme veya topluca değiştirme.

İstemcinin bir alan kaydını ve öğrenme olayını iki bağımsız istekle yazdığı güvenilmez çift yazma kurma. Aynı veritabanındaki alan kayıtları için transaction, güvenli RPC, tetikleyici veya outbox benzeri tek sınır seç. Seçimi test et ve belgeye yaz.

## 2. Kalıcı veri yapısı

Faz 1 sözleşmesine uygun, isimleri mimari kararla belirlenen yapıları oluştur. En az şu yetenekler bulunmalı:

- değişmez olay/kanıt kimliği;
- doğrulanmış student_id;
- kaynak kodu, kaynak kayıt kimliği ve kaynak sürümü;
- tekrar önleme anahtarı üzerinde benzersizlik;
- kanonik ders/konu/kazanım ilişkisi ve eşleştirme durumu;
- olay ve kanıt türü;
- ölçüm alanları;
- gerçekleşme ve kaydedilme zamanı;
- geçersiz kılma veya düzeltme zinciri;
- veri sözleşmesi sürümü;
- güvenli ve sınırlı metadata;
- oluşturulma kaynağı ve işleme durumu;
- yeniden oynatma/projeksiyon imleci;
- geriye doldurma çalışmasının kimliği ve sonucu;
- eşleşmeyen kayıt kuyruğu veya karantinası.

Ham kişisel içerikleri ortak olaya kopyalama. Kaynak kayda güvenli referans ver; AI Koç ayrıntıyı yalnız yetkili araçla gerektiğinde alsın.

## 3. İndeks ve büyüme

Şu sorguları verimli kıl:

- öğrenci + zaman;
- öğrenci + konu + zaman;
- öğrenci + kaynak;
- kaynak kayıt kimliği;
- işlenmemiş olaylar;
- eşleşmeyen konular;
- geriye doldurma çalışması;
- düzeltme/geçersiz kılma ilişkisi.

Metadata üzerinde gereksiz genel indeks kurma. Olay hacmini Faz 0'daki yüzeylere göre tahmin et ve saklama/büyüme notu ekle.

## 4. Güvenli alım katmanı

Tek bir ortak olay alım arabirimi geliştir:

- kullanıcıyı JWT üzerinden doğrular;
- body içindeki student_id değerini yok sayar veya reddeder;
- kaynak kayıt defterinde olmayan kaynağı reddeder;
- olay türünün kaynak için izinli olduğunu doğrular;
- konu kimliği ve eşleştirme sonucunu doğrular;
- boyut, sayı ve tarih sınırlarını uygular;
- tekrar önleme anahtarını zorunlu tutar;
- aynı olay yeniden gelirse yeni satır oluşturmadan mevcut sonucu güvenli biçimde döndürür;
- başka öğrenciye ait kaynak referansını kabul etmez;
- teknik ayrıntıyı kullanıcıya sızdırmayan hata biçimi kullanır.

Sunucu tarafında yönetici anahtarıyla genel yazma yolu açma. Öğrencinin kendi JWT'si ve RLS temelini koru.

## 5. Düzeltme ve silme

Şu davranışları ayrı testlerle uygula:

- alan kaydı güncellenince eski kanıt geçersizleşir veya sürümlenir;
- alan kaydı silinince öğrenci durumunda eski etkisi kalmaz;
- olayın tarihsel denetim izi gerekiyorsa içerik yerine ilişki ve durum korunur;
- hesap silme mevcut zincirleme silme davranışıyla uyumludur;
- bir öğrenci başka öğrencinin kanıtını geçersiz kılamaz;
- aynı düzeltme tekrar geldiğinde çoğalmaz.

Silinen öğrenci içeriğini sırf analiz geçmişi için kopya olarak yaşatma.

## 6. İşleme ve yeniden oynatma

Olayların sonraki fazlarda öğrenci-konu profiline çevrilebilmesi için:

- deterministik sıralama;
- son işlenen olay imleci;
- başarısız olayın tekrar denenmesi;
- zehirli/bozuk olayın diğerlerini engellememesi;
- aynı kümenin yeniden oynatılınca aynı sonuca ulaşması;
- kaynak sözleşmesi sürüm yükseltmesi

altyapısını hazırla.

Faz 6'daki gerçek öğrenci modeli yerine bu fazda küçük bir test projeksiyonu kullan. Projeksiyon doğruluğundan çok altyapının tekrar üretilebilirliğini kanıtla.

## 7. Geriye doldurma çerçevesi

Canlı veriyi henüz geriye doldurma. Güvenli bir çerçeve oluştur:

- kuru çalışma;
- kaynak başına sayım;
- öğrenci başına küçük partiler;
- devam imleci;
- tekrar çalıştırmada çoğalmama;
- hata kaydı;
- beklenen ve yazılan satır karşılaştırması;
- iptal/devam;
- kişisel veriyi loglara dökmeme.

Sentetik veride iki kez çalıştır ve ikinci çalışmada yeni kayıt oluşmadığını doğrula.

## 8. Kaynak tamlığı gözlemi

Yönetici amaçlı kişisel içerik göstermeyen ölçümler üret:

- kaynak başına gelen olay sayısı;
- son olay zamanı;
- reddedilen olay sayısı ve neden sınıfı;
- eşleşmeyen konu oranı;
- çift gönderim oranı;
- işleme gecikmesi;
- yeniden oynatma farkı;
- geriye doldurma durumu.

Bu aşamada genel bir yönetim paneli tasarlama; ölçüm ve okunabilir yerel rapor yeterlidir.

## 9. Migration ve onay sınırı

Yeni veritabanı yapısı kaçınılmazdır. Migration dosyaları:

- tekrar çalıştırılabilir;
- var olan veriyi koruyan;
- kısıt ve indeksleri açık;
- RLS politikalarını içeren;
- geri alma etkisini anlatan;
- setup_new_project.sql ile yeni kurulum yolunu unutmayan

biçimde hazırlanmalıdır.

Canlı Supabase'e uygulama için bu konuşmada açık onay yoksa uygulama. Önce bütün kodu, migration dosyalarını, testleri ve etki raporunu hazırla; ardından durum dosyasına “Yerel olarak tamamlandı, canlı onay bekliyor” yaz.

## 10. Zorunlu testler

En az şunları otomatik doğrula:

- geçerli olay yazılır;
- aynı olay 2, 10 ve eş zamanlı tekrar gönderimlerde tek satır kalır;
- farklı öğrenciler aynı kaynak kimliğini güvenle kullanabilir;
- sahte student_id etkisiz veya reddedilmiş;
- kullanıcılar arası okuma/yazma/geçersiz kılma reddedilmiş;
- tanımsız kaynak ve olay türü reddedilmiş;
- sınır dışı sayı, gelecek/bozuk tarih ve büyük metadata reddedilmiş;
- belirsiz konu karantinaya gider;
- düzeltme eski etkiyi kaldırır;
- silme eski etkiyi kaldırır;
- yeniden oynatma aynı sonucu verir;
- geriye doldurma iki kez çalışınca çoğalmaz;
- eksik yeni tablo durumunda mevcut uygulama tamamen çökmez;
- mevcut AI Koç ve AI Soru Çöz testleri geçer;
- üretim derlemesi geçer.

## Kabul kapıları

- Ortak kanıt bir kullanıcı olayıyla güvenli biçimde uçtan uca yazılabiliyor.
- Tekrar gönderim ve eş zamanlı yarış çift kayıt üretmiyor.
- Kaynak düzeltme ve silme sonucu geri alınabiliyor.
- RLS ile başka öğrenciye erişim engelleniyor.
- Yeniden oynatma deterministik.
- Geriye doldurma kuru ve tekrar çalıştırılabilir.
- Kaynak tamlığı ölçülebiliyor.
- Mevcut ürün akışları bozulmuyor.
- Canlı şema izinsiz değiştirilmemiş.

## Faz sonu

MIMARI_KARARLAR.md ve FAZ_DURUMU.md dosyalarını kanıtlarla güncelle. Faz 3, 4 ve 5'in kullanacağı ortak alım arabirimini, migration durumunu, test sonuçlarını ve bilinen sınırları kısa raporla.
