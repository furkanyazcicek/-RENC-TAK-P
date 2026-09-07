# Codex Uygulama İstemi — Faz 3: Ders, Soru Kütüphanesi, Atlas ve Simülasyon Kayıtları

## Görevin

Platform içindeki öğrenme çalışmalarını ortak veri ağına eksiksiz ve doğru anlamla bağla. Yapılandırılmış dersler, paketli dersler, PDF içerikleri, soru kütüphanesi testleri, atlaslar ve simülasyonlar kalıcı öğrenme kanıtı üretmelidir.

Her tıklamayı izleme. Yalnız öğrencinin ne gördüğünü, ne yaptığını ve nasıl sonuç aldığını anlamaya yarayan eğitimsel olayları kaydet.

## Zorunlu okumalar

- AGENTS.md, CLAUDE.md ve DESIGN_SYSTEM.md
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- Faz 0 kaynak matrisi, Faz 1 sözleşmeleri ve Faz 2 mimari kararları
- ders kütüphanesi, soru kütüphanesi, atlas ve simülasyonların gerçek kaynak kodu
- mevcut lesson_activity_events, student_question_set_attempts ve yerel ilerleme kayıtları

Faz 2 kabul kapıları geçmediyse bu fazı tamamlandı sayma. Kullanıcıya görünen arayüz değişikliği gerekiyorsa drkoc-ui-designer becerisini kullan; atlas veya simülasyon ekranına dokunuyorsan ardından drkoc-atlas-designer becerisini de kullan.

## 1. Gerçek yüzey envanterini doğrula

Kodda arayarak şu yüzeylerin bütün giriş ve bitiş yollarını çıkar:

- veritabanından gelen yapılandırılmış dersler;
- uygulamayla paketli dersler;
- PDF veya belge tabanlı ders içerikleri;
- soru seti listeleme, çözüm ve sonuç ekranları;
- veritabanı ve paketli soru setleri;
- bütün ders atlasları, simülasyonlar, mini testler ve görevler;
- bu yüzeylerde localStorage, oturum durumu veya yalnız yönlendirme state'i ile tutulan ilerleme.

Faz 0 matrisiyle karşılaştır. Unutulmuş bir yüzey bulursan önce matrisi güncelle, sonra bağla. Bir kaynak yüzeyini sessizce kapsam dışı bırakma.

## 2. Kalıcı içerik kimliği

Her öğrenme nesnesi için sayfa başlığına veya değişebilir metne bağımlı olmayan kararlı kimlik üret:

- ders, bölüm ve içerik parçası;
- soru seti, soru ve deneme girişimi;
- atlas, simülasyon, görev ve mini test;
- ders, kanonik konu ve varsa kazanım.

Paketli içerikte kimlikler kaynak dosyası düzenlenince gereksiz değişmemeli. Eski kimliğin yenisine yönlendirilmesi gerekiyorsa sürümlü eşleme oluştur. Başlık benzerliğini kesin kimlik gibi kullanma. Belirsiz eşlemeyi Faz 1 karantina akışına gönder.

AI Koç'un önerisinden ilgili ekrana gidebilmesi için güvenli ve kararlı hedef bilgisi tanımla. Hedef, içerik silinmiş veya öğrenciye kapalıysa uygun sonuç dönmeli; bozuk bağlantı üretmemeli.

## 3. Ders olaylarının anlamı

En az şu olayları sözleşmeye uygun biçimde üret:

- ders açıldı veya anlamlı biçimde görüntülendi;
- bölüm tamamlandı;
- ders içi kontrol sorusu yanıtlandı;
- ders tamamlandı;
- öğrenci kaldığı yerden devam etti.

Şu anlam ayrımını koru:

- yalnız açmak konuya maruz kalma kanıtıdır, öğrenme kanıtı değildir;
- tamamlamak performans kanıtı değildir;
- kontrol sorusu sonucu doğrudan performans kanıtıdır;
- süre yalnız aktif çalışma güvenilir biçimde ölçülebiliyorsa kullanılır;
- sekme arka plandayken geçen zamanı çalışma sayma;
- PDF açılışını okuma veya öğrenme tamamlanmış gibi yorumlama.

Yapılandırılmış ve paketli derslerde aynı olay dili kullanılmalı. Paketli derslerin bugün telemetri dışı kalması kabul edilmez. Ancak olay eklemek için ders içeriğinin çalışma mantığını yeniden yazma.

## 4. Soru kütüphanesi girişimleri

Soru çözümünü yalnız sonuç sayfasına taşınan geçici durum olmaktan çıkar. Sunucu tarafında kullanıcıya bağlı, yeniden açılabilir bir girişim yaşam döngüsü kur:

- başlatıldı;
- devam ediyor;
- tamamlandı;
- öğrenci tarafından bırakıldı veya zaman aşımına uğradı.

Her anlamlı cevapta en az şu bilgiler korunmalı:

- soru ve set kimliği;
- kanonik konu/kazanım;
- seçilen cevap veya gerekli güvenli sonuç özeti;
- doğru, yanlış, boş durumu;
- cevap zamanı ve girişim içi sıra;
- soru zorluğu veya mevcut sınıflandırma;
- çözüm ya da ipucu görüntüleme;
- cevap sonradan değiştirildiyse son durum ve denetim ilişkisi.

Gizli cevap anahtarını istemciye gereksiz erken açma. Sayfa yenileme, ağ tekrar denemesi ve aynı cevabın eş zamanlı gönderimi çift olay üretmemeli. Son soru yanıtı sonuç ekranına geçmeden kalıcılaşmalı. Bir girişimin tamamlanması, soruların tek tek kaydedilmiş olmasına bağlı olmalı.

Mevcut student_question_set_attempts yapısını incele; uygunsa genişlet, paralel ve çelişen ikinci bir gerçeklik oluşturma.

## 5. Atlas ve simülasyon kanıtları

Atlas ve simülasyonlarda yalnız eğitimsel anlam taşıyan davranışları kaydet:

- öğrenme nesnesi veya senaryo açıldı;
- tanımlı görev başlatıldı ve tamamlandı;
- öğrenci bir değişkeni hedefe yönelik kullandı;
- tahmin yaptı;
- mini test veya kontrol sorusunu yanıtladı;
- sonuç ile tahmin arasında karşılaştırma gördü;
- belirlenmiş keşif kilometre taşına ulaştı.

Kamera hareketi, her sürükleme pikseli, dekoratif düğme, yakınlaştırma veya rastgele tıklamalar ham akış olarak saklanmamalı. Etkileşimleri anlamlı özetlere dönüştür. Mevcut yerel ilerlemeyi bulut kaydına taşıyacaksan bir defalık, tekrar çalıştırılabilir ve kullanıcıya bağlı aktarım uygula; başarı doğrulanmadan yerel veriyi silme.

## 6. Güvenilir gönderim ve düzeltme

Bütün yüzeylerde ortak kuralları uygula:

- olay kimliği istemci yeniden denemesinde değişmez;
- öğrenci kimliği sunucuda oturumdan alınır;
- çevrimdışı veya kesintili bağlantıda güvenli kuyruk ve tekrar deneme vardır;
- olay kabul edilmeden arayüz yanlış biçimde tamamlandı göstermez;
- kaynak içeriği sonradan değişirse sürüm ilişkisi korunur;
- girişim silinir veya sıfırlanırsa türetilmiş etkisi geri alınabilir;
- başka öğrencinin içerik veya girişimine referans reddedilir.

Ürün çevrimdışı çalışmayı desteklemiyorsa sahte çevrimdışı vaat ekleme; ağ hatasında öğrencinin cevabını kaybetmeyen açık yeniden deneme davranışı sağla.

## 7. Geriye doldurma

Mevcut lesson_activity_events, tamamlanmış soru girişimleri ve doğrulanabilir yerel kayıtlar için kaynak bazlı geriye doldurma adaptörleri hazırla. Şunları yapma:

- açılış olayından dersin öğrenildiğini varsayma;
- geçici React state'inde artık bulunmayan cevabı uydurma;
- ortak konu eşleşmesi belirsiz kaydı en yakın başlığa zorla bağlama;
- anonim yerel veriyi yanlış kullanıcı hesabına taşıma.

Kuru çalışma raporunda kaynak satırı, eşleşen, karantinaya giden, atlanan ve yazılması beklenen olay sayılarını göster. Canlı veride çalıştırma Faz 10'a aittir.

## 8. Kullanıcı deneyimi

Kayıt altyapısı öğrenme akışını yavaşlatmamalı. Gerekli durumlarda öğrenciye yalnız anlaşılır durum göster:

- kaydediliyor;
- kaydedildi;
- bağlantı sorunu, yeniden denenecek;
- kayıt başarısız, cevabın cihazda korunuyor.

Telemetri ayrıntılarını, olay kimliklerini veya teknik hataları öğrenciye gösterme. Mobil, tablet ve masaüstünde dokunma, klavye, odak ve yeniden yükleme akışlarını doğrula.

## 9. Zorunlu testler

En az şu testleri ekle veya güncelle:

- yapılandırılmış ders ile paketli ders aynı kanıt sözleşmesini üretir;
- ders açma, bölüm tamamlama ve kontrol sorusu farklı anlamda kalır;
- PDF açma öğrenme veya başarı sayılmaz;
- soru seti başlatılır, cevaplar kalıcılaşır, yenileme sonrası devam eder ve tamamlanır;
- sonuç sayfasına geçmeden son cevap kaydedilir;
- aynı cevap 2, 10 ve eş zamanlı yeniden gönderimde tek kabul edilir;
- yanlış, doğru, boş, çözüm görüntüleme ve cevap değiştirme doğru işlenir;
- bırakılmış girişim tamamlanmış sayılmaz;
- atlas görevi ve mini test olay üretir, rastgele kamera hareketi üretmez;
- çevrimdışı/ağ hatası cevabı kaybettirmez;
- kaynak silme veya girişim sıfırlama profil etkisini geri alabilir;
- kullanıcılar arası erişim reddedilir;
- kararsız konu eşleşmesi karantinaya gider;
- mevcut ders, soru ve atlas temel akışları bozulmaz;
- üretim derlemesi ve ilgili mevcut testler geçer.

Görsel değişiklik yaptıysan çalışan ekranları en az bir masaüstü ve bir telefon boyutunda açıp görsel olarak doğrula.

## Kabul kapıları

- Faz 0 matrisindeki bütün platform içi içerik yüzeyleri için karar ve çalışan adaptör vardır.
- Paketli ve veritabanı içerikleri aynı anlam sözleşmesine bağlıdır.
- Soru girişimi yenileme ve ağ hatasında kaybolmaz, çoğalmaz.
- Ders açma başarı sayılmaz; doğrudan ve dolaylı kanıt ayrımı korunur.
- Atlas/simülasyon kaydı eğitimsel olaylarla sınırlıdır.
- Bütün kayıtlar kanonik konuya bağlı veya görünür karantinadadır.
- AI Koç için kararlı içerik hedefleri üretilebilir.
- Başka öğrencinin verisine erişim engellenmiştir.
- Canlı veri izinsiz değiştirilmemiştir.

## Faz sonu

Kaynak matrisi, MIMARI_KARARLAR.md ve FAZ_DURUMU.md dosyalarını gerçek dosya ve test kanıtlarıyla güncelle. Kaynak başına üretilen olayları, kapsanmayan bilinçli istisnaları, karantina oranını ve geriye doldurma kuru çalışma sonucunu raporla.
