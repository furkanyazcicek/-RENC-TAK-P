# Codex Uygulama İstemi — Faz 8: Kapalı Döngü Koçluk

## Görevin

AI Koç analizini gerçek bir öğrenme döngüsüne bağla: kanıta dayalı ihtiyaç belirle, öğrenciye uygulanabilir öneri sun, onaylanan çalışmayı doğru içerik veya kayıt yüzeyine bağla, sonucu ölç ve sonraki analizi bu sonuçla güncelle.

Amaç yalnız plan yazmak değil; öneri ile gerçekleşen çalışma arasındaki ilişkiyi kanıtlamaktır.

## Zorunlu okumalar

- AGENTS.md, CLAUDE.md ve DESIGN_SYSTEM.md
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- Faz 6 öğrenci modeli ve Faz 7 araç/yanıt sözleşmesi
- mevcut AI Koç günlük brifing, ai_study_tasks, plan, görev ve yazma onayı akışları
- ders, soru seti, AI Soru Çöz, sorunlu soru, ödev, deneme ve dil modüllerinin hedef bağlantı biçimleri

Faz 7 kabul kapıları geçmediyse bu fazı tamamlandı sayma. Kullanıcıya görünen bütün işler için drkoc-ui-designer becerisini kullan ve çalışan ekranı görsel olarak doğrula.

## 1. Öneri sözleşmesi

Her somut öneri en az şu alanlara sahip olmalı:

- öneri kimliği ve sürümü;
- öğrenci ve oluşturulma zamanı;
- hedef ders, kanonik konu ve varsa kazanım;
- öneri türü: öğren, soru çöz, tekrar et, hatayı incele, deneme analizi, dil becerisi veya mevcut geçerli tür;
- gerekçe özeti;
- gerekçeyi destekleyen kanıt/projeksiyon referansları;
- güven düzeyi ve veri sınırlaması;
- önerilen miktar veya süre, gerçekten anlamlıysa;
- güvenli içerik hedefi veya uygun hedef bulunamadı durumu;
- öğrenci kararı;
- başarı ölçütü;
- geçerlilik süresi ve durum.

Modelin yalnız serbest metin plan üretmesine güvenme. Kullanıcıya doğal dil gösterilebilir ama yürütülebilir alanlar şema doğrulamasından geçmelidir.

## 2. Uygun hedef seçimi

Öneri, mümkün olduğunda öğrenciyi doğrudan ilgili çalışmaya götürmeli:

- belirli ders veya bölüm;
- belirli soru seti ya da konu filtresi;
- AI Soru Çöz'de ilgili sorunlu soru/konu;
- öğretmen ödevi veya sorunlu soru;
- deneme analizi;
- atlas/simülasyon görevi;
- belirli dil dersi, ünite veya beceri çalışması;
- dış çalışma kaydı ekleme yüzeyi.

Hedef seçerken öğrencinin erişim yetkisini, içerik yayında mı, seviye uygun mu, daha önce tamamlandı mı ve bağlantı geçerli mi kontrol et. İçerik yoksa sahte kimlik veya bozuk bağlantı üretme; genel ama uygulanabilir bir görev oluştur.

Öneri miktarını keyfî belirleme. Öğrencinin zamanı, hedefi, son yükü, zorluk düzeyi ve kanıt güveniyle uyumlu sınırlı seçenek kullan.

## 3. Kullanıcı onayı ve kontrolü

Plan veya görev yazma eylemi mevcut güvenlik ilkesini korumalı:

1. AI Koç öneriyi açıklar.
2. Oluşturulacak görev veya değişiklik önizlenir.
3. Öğrenci açıkça onaylar.
4. Sunucu yetki ve şema doğrulamasını tekrar yapar.
5. Yazma işlemi gerçekleşir.
6. Sonuç anlaşılır biçimde gösterilir.

Model kendiliğinden ödev silemez, kayıt değiştiremez, görev tamamlayamaz veya öğrenci adına dış çalışma uyduramaz. Düzenleme ve iptal işlemleri de öğrenci kontrolünde olmalıdır.

## 4. Görev yaşam döngüsü

En az şu durumları kur:

- önerildi;
- öğrenci kabul etti veya reddetti;
- planlandı;
- başlandı;
- kısmen yapıldı;
- kullanıcı beyanıyla tamamlandı;
- platform kanıtıyla doğrulandı;
- süresi geçti;
- ertelendi, düzenlendi veya iptal edildi;
- sonuç değerlendirildi.

Durum geçişlerini sunucu tarafında doğrula. “Tamamla” düğmesine basmak ile hedeflenen soru setini gerçekten bitirmek ayrı kalmalı. Öğrenci dışarıda çalıştıysa beyan olarak kabul et ve buna uygun güven kullan.

## 5. Hedef ile kanıtın eşlenmesi

Bir görev oluşturulurken ölçülebilir hedef tanımla:

- hedef içerik kimliği;
- hedef konu/kazanım;
- olay veya kanıt türü;
- tarih aralığı;
- gerekiyorsa minimum soru/etkinlik sayısı;
- başarı değil tamamlama ölçütü;
- öneri öncesi öğrenci durumu.

Yeni kanıt geldiğinde görev eşleştirme işlemi:

- yalnız ilgili öğrenci ve hedefe bakmalı;
- aynı kanıtı iki kez tüketmemeli;
- benzer başlıklı ilgisiz konuyu kabul etmemeli;
- görev oluşturulmadan önceki eski kanıtı yeni çalışma saymamalı;
- kısmi ilerlemeyi korumalı;
- hedef değişirse sürüm ve eski ilişkiyi saklamalı;
- platform dışı beyanı otomatik doğrulanmış yapmamalı.

## 6. Sonuç ve etki ölçümü

Görev bittiğinde yalnız “tamamlandı” kaydetme. Şunları ilişkilendir:

- görev öncesi konu durumu ve güven;
- gerçekleştirilen kanıtlar;
- görev sonrası ilk ölçüm;
- gecikmeli tekrar ölçümü varsa sonucu;
- öğrenci geri bildirimi;
- önerinin yararlı, etkisiz veya değerlendirilemez oluşu;
- değerlendirme için yeterli veri olup olmadığı.

Nedensellik iddiasında bulunma. Bir öneri sonrası yükseliş, tek başına önerinin kesin olarak başarıya neden olduğunu kanıtlamaz. “Sonrasında iyileşme görüldü” gibi doğru dil kullan.

Bu geçmiş Faz 6 koçluk karar katmanına yazılmalı ve yeni önerilerde aynı işe yaramayan yaklaşımın körlemesine tekrarlanmasını azaltmalıdır.

## 7. Günlük ve haftalık yönlendirme

Mevcut brifing yapısını öğrenci modeliyle yenile:

- bugünün sınırlı öncelikleri;
- yaklaşan ödev veya plan taahhütleri;
- tekrar zamanı gelen konular;
- son günlerde belirgin değişim;
- veri yetersizse ölçüm önerisi;
- tamamlanan planların kısa sonucu.

Her gün değişen rastgele metin üretme. Aynı veri aynı öncelik sırasını vermeli; LLM sunumu kişiselleştirebilir. Birbiriyle yarışan uzun görev listesi yerine gerçekçi birincil ve ikincil öncelik kullan.

Proaktif bildirim sistemi kapsamda varsa kullanıcı tercihleri, sessiz saat, sıklık sınırı ve bildirim kapatma bulunmalıdır. Mevcut bildirim altyapısı yoksa bu fazda yeni dış servis ekleme; uygulama içi brifingle tamamla ve kalan ihtiyacı kaydet.

## 8. Öğrenciye görünen açıklama

Arayüzde öğrenci şu bilgileri kısa biçimde anlayabilmeli:

- neden bu öneriyi görüyor;
- hangi konuya bağlı;
- ne kadar veriyle ve hangi güvenle çıkarıldığı;
- ne yapması bekleniyor;
- görevin ne zaman tamamlanmış sayılacağı;
- ilerlemenin kaydedilip kaydedilmediği;
- öneriyi reddetme, düzenleme veya kaldırma yolu.

Kanıt ayrıntısını varsayılan ekrana yığma; “Neye göre?” gibi aşamalı açılım kullan. İç içe kartlardan, genel SaaS paneli görünümünden ve aşırı rozetlerden kaçın. Mevcut sohbet akışı ve öğrenci odağı korunmalıdır.

## 9. Hafıza ve düzeltme kontrolleri

Öğrencinin en az şu alanlarda kontrolü olmalı:

- onaylı tercihi görme/düzeltme/unutturma;
- dış çalışma kaydını düzeltme veya silme;
- öneriyi ilgisiz diye işaretleme;
- görev sonucunu yanlış eşlendi diye bildirme;
- kendi verisi hakkında AI Koç'un dayanağını isteme.

Bir itiraz doğrudan model puanını keyfî değiştirmemeli; hatalı kaynak/eşleme inceleme veya karantina akışını tetiklemelidir. Öğrenciye teknik veri şeması gösterme.

## 10. Başarısızlık davranışı

- hedef içerik kaldırılmışsa alternatif sun veya görevi görünür biçimde geçersiz kıl;
- kanıt gecikiyorsa görev yanlışlıkla tamamlanmasın;
- aynı görev iki kez oluşturulursa güvenli biçimde tekilleştir veya açıkça ayrı planlar olarak doğrula;
- model geçersiz görev üretirse sunucu reddetsin ve kullanıcıya sade geri dönüş verilsin;
- proje/kanıt servisi kesintisinde mevcut görevler kaybolmasın;
- öğrenci konu değiştirirse eski hedef otomatik yeniden yazılmasın;
- öğretmen ödevi ile AI Koç önerisi çatışırsa öğretmen taahhüdü görünür öncelik olarak ele alınsın, ancak kör biçimde pedagojik üstünlük varsayılmasın.

## 11. Zorunlu testler

En az şu uçtan uca senaryoları çalıştır:

- zayıf konu kanıtından gerekçeli öneri oluşturma;
- öneriyi önizleme, onaylama ve göreve dönüştürme;
- hedef derse/soru setine güvenli bağlantı;
- soru seti kısmi ilerleme ve gerçek tamamlama;
- kullanıcı beyanı ile otomatik doğrulamanın ayrılması;
- görev öncesi eski kanıtın görevi tamamlamaması;
- aynı kanıtın iki görevi yanlışlıkla tamamlamaması;
- görev düzenleme, erteleme, reddetme ve iptal;
- içerik kaldırılması ve yetki kaybı;
- öneri sonrası yeni sonuçla öğrenci modelinin güncellenmesi;
- gecikmeli tekrar sonucu;
- veri yetersizliğinde ölçüm odaklı öneri;
- çelişkili kaynaklarda temkinli öneri;
- dil becerisi ve platform dışı çalışma senaryosu;
- yazma aracı için onaysız çağrının reddedilmesi;
- kullanıcılar arası görev/kanıt erişiminin reddedilmesi;
- istem enjeksiyonunun görev alanlarına geçememesi;
- günlük brifingin aynı veriyle kararlı öncelik vermesi;
- mevcut sohbet ve plan akışının bozulmaması.

Masaüstü ve telefon boyutunda öneri, önizleme, onay, ilerleme, hata, boş ve tamamlanma durumlarını çalışan uygulamada görsel olarak incele. Klavye, odak, dokunma, kontrast ve azaltılmış hareketi doğrula.

## Kabul kapıları

- Kanıttan öneriye, öneriden göreve, görevden çalışmaya ve sonuçtan yeni analize uçtan uca ilişki vardır.
- Somut öneriler geçerli konu ve erişilebilir hedef taşır veya hedef bulunamadığını açıkça belirtir.
- Öğrenci onayı olmadan yazma veya değiştirme yapılmaz.
- Kullanıcı beyanı ile platform kanıtı ayrı kalır.
- Görev etkisi öncesi/sonrası kanıtla ölçülür; nedensellik uydurulmaz.
- Günlük/haftalık yönlendirme kararlı, sınırlı ve uygulanabilirdir.
- Öğrenci gerekçeyi görebilir, öneriyi reddedebilir ve veriyi düzeltebilir.
- Güvenlik, responsive kullanım ve erişilebilirlik testleri geçer.
- Canlı veri veya yayın izinsiz değiştirilmemiştir.

## Faz sonu

Öneri ve görev sözleşmelerini, hedef eşleme kurallarını, ölçüm sonuçlarını, ekran doğrulamalarını ve uçtan uca test kanıtlarını MIMARI_KARARLAR.md ile FAZ_DURUMU.md içinde güncelle.
