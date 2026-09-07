# Codex Uygulama İstemi — Faz 4: Ana Akademik Kayıtların Bağlanması

## Görevin

Günlük çalışma takibi, genel ve branş denemeleri, ödevler, sorunlu sorular, AI Soru Çöz ve AI Koç plan görevlerini ortak öğrenme kanıtı ağına kayıpsız bağla.

Alan tabloları kendi işlevlerini sürdürmeli. Ortak ağ ikinci ve çelişen bir gerçeklik değil; bu kayıtların öğrenci-konu analizinde ortak anlamla kullanılmasını sağlayan güvenilir bağlantı olmalıdır.

## Zorunlu okumalar

- AGENTS.md ve CLAUDE.md
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- Faz 0 kaynak matrisi, Faz 1 sözleşmeleri ve Faz 2 mimari kararları
- daily_logs, exams, mock_exams, homeworks, questions, ai_solution_sessions ve ai_study_tasks için gerçek migration, API ve arayüz kodu
- AI Koç yazma eylemlerinin mevcut önizleme/onay güvenliği

Faz 2 kabul kapıları geçmediyse bu fazı tamamlandı sayma.

## 1. Alan bazında gerçek anlamı belirle

Her kaynak için var olan alanları ve kullanıcı akışını doğrula. Şu ayrımları açık sözleşmeye çevir:

- günlük çalışma kaydı öğrencinin beyanıdır; otomatik ölçüm değildir;
- soru sayısı, doğru/yanlış/boş ve süre birbirinin yerine geçmez;
- genel deneme toplam sonucu, konu performansı değildir;
- branş veya alt test sonucu ancak güvenilir konu/kazanım dağılımı varsa konuya ayrıştırılır;
- ödev atanması, görülmesi, başlanması, teslimi ve öğretmen değerlendirmesi ayrı durumlardır;
- sorunlu soru eklemek zorlanma sinyalidir; yanlış cevapla aynı şey değildir;
- AI Soru Çöz yardım isteme, çözüm görme, öğrencinin cevabı, hata türü ve tekrar sonucunu ayrı kanıtlar olarak korur;
- AI Koç plan görevi oluşturulması, öğrencinin gerçekten çalıştığını kanıtlamaz.

Kaynak kodu ile şema uyuşmuyorsa varsayım yapma; Faz 0 matrisi ve karar kaydına gerçek durumu yaz.

## 2. Tek ve güvenilir yazma yolu

Her alan kaydını Faz 2'de seçilen transaction, RPC, tetikleyici veya outbox sınırıyla ortak ağa bağla. İstemcide önce alan tablosuna sonra ayrı olay isteğine dayanan kayıp üretici çift yazma bırakma.

Şunları garanti et:

- alan kaydı başarılıysa ilgili kanıt eninde sonunda oluşur;
- alan kaydı başarısızsa hayalet kanıt oluşmaz;
- tekrar deneme çift kanıt üretmez;
- düzenleme eski değerin profil etkisini kaldırır;
- silme veya iptal eski etkiyi kaldırır;
- kaynak sürümü ve düzeltme zinciri izlenebilir;
- alan tablosu ile kanıt ağı arasındaki fark ölçülebilir ve yeniden işlenebilir.

Mevcut tabloları gereksiz yeniden adlandırma veya toplu taşıma. En küçük güvenli bağlantıyı kur.

## 3. Günlük çalışma takibi

İç ve dış çalışma kayıtlarını şu anlamlarla bağla:

- ders ve kanonik konu;
- çalışma türü: konu çalışma, soru çözme, tekrar, video, deneme analizi veya mevcut seçenekler;
- beyan edilen süre;
- beyan edilen soru/doğru/yanlış/boş;
- kaynağın platform içi mi dışı mı olduğu;
- gerçekleşme tarihi;
- öğrenci notu varsa ortak ağa kopyalamadan güvenli kaynak referansı.

Aynı platform içi çalışma hem otomatik olaydan hem günlük kayıttan gelirse körlemesine toplama. Günlük kayıt öğrenci tarafından dış çalışma diye işaretlenmemişse olası çakışmayı koru ve analiz katmanının iki kez saymasını engelleyecek ilişki veya kaynak etiketi üret.

Negatif değer, gerçek dışı toplam, gelecekte tarih ve tutarsız doğru/yanlış/toplam girişlerini mevcut ürün kurallarıyla uyumlu doğrula. Eski kayıtları sessizce değiştirme.

## 4. Genel ve branş denemeleri

Deneme türlerini gerçek şemaya göre ayrı adaptörlerle bağla:

- sınav oturumu ve tarih;
- ders veya alt test sonuçları;
- doğru, yanlış, boş, net ve puan gibi ham ölçümler;
- varsa soru veya konu dağılımı;
- deneme analizi ve tekrar eylemleri;
- veri kaynağı ve güven düzeyi.

Konu dağılımı yoksa toplam neti konu seviyesine uydurma veya eşit dağıtma. Böyle kayıt öğrenci genel eğilimine katkı verebilir ama konu ustalığına doğrudan kanıt olmaz. Farklı sınav türlerinin puan/net ölçeklerini tek sayı gibi karşılaştırma.

Deneme düzenlendiğinde veya silindiğinde türetilmiş sonuç yeniden hesaplanmalı. Aynı denemenin exams ve mock_exams gibi iki yüzeyde bulunma ihtimalini denetle ve çift sayımı engelle.

## 5. Ödevler

Ödev yaşam döngüsünü gerçek alanlara göre kaydet:

- öğretmen tarafından atandı;
- öğrenci gördü;
- başladı;
- teslim etti veya tamamladı;
- süresi geçti;
- öğretmen değerlendirdi;
- yeniden çalışma istendi.

Ödev başlığı ve açıklamasındaki serbest metni yalnız başına kesin konu eşleşmesi için kullanma. Öğretmenin seçtiği ders/konu varsa onu kullan; yoksa eşleştirme belirsizliğini koru. Öğretmen notu ve öğrenci cevabını ortak olay metadata alanına kopyalama; yetkili kaynak referansı kullan.

Tamamlandı işareti performans kanıtı değildir. Ödev içindeki ölçülebilir soru sonuçları varsa ayrı doğrudan kanıt olarak bağlanır.

## 6. Sorunlu sorular

questions alanının gerçek kullanımını doğrula: öğrencinin öğretmene gönderdiği, öğretmenin öğrenciye işaretlediği veya ikisini de içeren akışları birbirinden ayır. Kullanıcının hedefindeki “öğretmenin direkt kendisine attığı sorunlu sorular” senaryosu mevcut değilse varmış gibi raporlama; gereken en küçük ürün ve veri eksiğini açıkça uygula veya durum dosyasına engel olarak kaydet.

En az şu sinyalleri ayrıştır:

- sorunlu olarak işaretlendi;
- öğrenci veya öğretmen kaynağı;
- konu eşleşmesi;
- yardım talep edildi;
- yanıt veya açıklama geldi;
- tekrar çözme planlandı;
- tekrar çözmede sonuç alındı;
- çözüldü/kapatıldı.

Soru görseli, tam soru metni, öğretmen mesajı ve kişisel notu ortak kanıt satırına kopyalama. AI Koç gerektiğinde yetkili ayrıntı aracıyla erişsin.

## 7. AI Soru Çöz

Mevcut oturum ve mesaj yapısını koruyarak kanıt adaptörü oluştur. Mevcut alanlardan mümkün olanları kayıpsız kullan:

- ders, kullanıcı konusu ve kanonik konu;
- soru/görsel gönderildi;
- öğrenci cevabı ve doğru/yanlış durumu;
- yardım istendi veya çözüm gösterildi;
- tespit edilen hata türü;
- öğrenci geri bildirimi;
- yeniden çalışma veya inceleme durumu;
- oturum ve mesaj ilişkisi.

Modelin serbest metin yorumunu doğrulanmış gerçek gibi saklama. Hata türünün model çıkarımı olduğunu işaretle; doğrudan öğrenci sonucu ile karıştırma. Görseli veya tüm sohbeti ortak olay metadata alanına kopyalama. Aynı mesaj işlenmesi tekrarlandığında olay çoğalmamalı.

## 8. AI Koç plan görevleri

Mevcut ai_study_tasks kayıtlarını ortak ağa bağla:

- önerildi veya oluşturuldu;
- öğrenci onayladı;
- başladı;
- kullanıcı beyanıyla tamamlandı;
- ölçülebilir platform kanıtıyla tamamlandı;
- ertelendi, düzenlendi veya iptal edildi.

Kullanıcı beyanı ile sistem doğrulamasını aynı başarı sınıfına koyma. Plan görevinin hedef ders, konu, çalışma türü ve varsa doğrudan içerik hedefi olmalı. Eski görevler konuya güvenle eşlenemiyorsa karantinada veya genel ders düzeyinde kalmalı.

AI Koç'un yazma eylemlerindeki mevcut önizleme ve kullanıcı onayı kaldırılmamalıdır.

## 9. Geriye doldurma ve uzlaştırma

Her kaynak için ayrı, tekrar çalıştırılabilir adaptör hazırla:

- kuru çalışma ve satır sayımı;
- tarih aralığı ve öğrenci partisi;
- kaynak kimliği üzerinden tekrar önleme;
- düzenlenmiş ve silinmiş kayıt davranışı;
- belirsiz konu karantinası;
- kaynak toplamı ile kanıt toplamı uzlaştırması;
- yeniden başlatma imleci;
- kişisel verisiz hata kaydı.

Mevcut canlı veriyi bu fazda çalıştırma. Sentetik veya yerel test verisinde iki defa çalıştırıp ikinci çalışmada yeni kanıt oluşmadığını göster.

## 10. Zorunlu testler

En az şunları otomatik doğrula:

- her zorunlu kaynak örneği doğru olay ve kanıt türünü üretir;
- günlük dış çalışma beyan olarak kalır;
- platform içi olay ile günlük kayıt körlemesine çift sayılmaz;
- genel deneme konu performansına zorla dağıtılmaz;
- branş denemesi yalnız mevcut dağılım ölçüsünde konu kanıtı üretir;
- ödev atama ve tamamlama performans sayılmaz;
- sorunlu soru ile yanlış cevap birbirinden ayrıdır;
- AI Soru Çöz model çıkarımı, doğrulanmış öğrenci sonucundan ayrıdır;
- plan önerisi çalışma yapılmış gibi sayılmaz;
- alan kaydı tekrar yazılınca çift kanıt oluşmaz;
- düzenleme ve silme profil etkisini kaldırır;
- iki alan tablosunda aynı sınav çift sayılmaz;
- kullanıcılar arası okuma ve yazma reddedilir;
- geriye doldurma iki çalıştırmada çoğalmaz;
- ortak ağ geçici olarak kullanılamazsa alan kayıtlarının veri bütünlüğü korunur ve yeniden işlenebilir;
- mevcut AI Koç, AI Soru Çöz, ödev, deneme ve günlük takip akışları bozulmaz;
- üretim derlemesi geçer.

## Kabul kapıları

- Altı ana alanın tamamı kaynak matrisi ve çalışan adaptörle kapsanmıştır.
- Her kayıt doğru kanıt anlamını taşır; beyan, dolaylı sinyal ve doğrudan sonuç karışmaz.
- Alan tablosu ve ortak ağ kayıp ya da çift yazma üretmez.
- Düzenleme, silme ve iptal sonucu deterministik biçimde geri alınır.
- Serbest kişisel içerik ortak olaylara kopyalanmaz.
- Konu bilgisi olmayan sınav veya ödevden konu başarısı uydurulmaz.
- Eski veri için ölçülebilir ve tekrar çalıştırılabilir geriye doldurma yolu vardır.
- RLS ve API yetki testleri geçer.
- Canlı veri izinsiz değiştirilmemiştir.

## Faz sonu

Kaynak matrisi, MIMARI_KARARLAR.md ve FAZ_DURUMU.md dosyalarını test ve sayım kanıtlarıyla güncelle. Her alan için hangi bilginin doğrudan kanıt, beyan, dolaylı sinyal veya yalnız bağlam olduğunu açıkça raporla.
