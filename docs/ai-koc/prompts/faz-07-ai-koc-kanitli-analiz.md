# Codex Uygulama İstemi — Faz 7: AI Koç Kanıtlı Analiz

## Görevin

AI Koç'u öğrencinin bütün ham verisini bir isteme yığan sohbet botu olmaktan çıkar; Faz 6 öğrenci modelini ve gerektiğinde kaynak kanıtını kullanan, öğrenciyi konu düzeyinde tanıyan, iddialarını dayandıran ve belirsizliğini bilen koç haline getir.

Bu fazda temel amaç daha uzun yanıt değil, daha doğru ve eyleme dönük analizdir.

## Zorunlu okumalar

- AGENTS.md ve CLAUDE.md
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- Faz 0 altın kabul senaryoları
- Faz 1 kanıt sözleşmesi ve Faz 6 model açıklaması
- mevcut AI Koç sistem istemi, context builder, briefing, araçlar, eylem önizleme/onay akışı ve testleri
- AI Soru Çöz ile AI Koç arasındaki mevcut veri ilişkisi

Faz 6 kabul kapıları geçmediyse bu fazı tamamlandı sayma.

## 1. Mevcut davranışın gerçek temelini ölç

Değişiklikten önce sabit değerlendirme soruları çalıştır ve çıktıyı kaydet:

- Son iki haftada hangi konularda zorlandım, neden?
- Bu konuda platform dışı ve içi çalışmalarımı birlikte değerlendir.
- Deneme sonucum ile soru kütüphanesi performansım neden çelişiyor?
- Bugün ne çalışmalıyım ve neden?
- Dil çalışmamda hangi becerim geride?
- Hakkımda hangi bilgileri biliyorsun ve bunlara ne kadar güveniyorsun?
- Verim yoksa ne söylemelisin?

Yanlış sayı, eksik kaynak, kanıtsız çıkarım, ham veri taşması, gereksiz uzunluk ve yetkisiz erişim için başlangıç sonuçlarını sınıflandır. Aynı değerlendirme faz sonunda tekrar çalıştırılmalıdır.

## 2. Araç mimarisi

Mevcut araçları incele, gereksiz paralel araçlar eklemeden en az şu yetenekleri sağla:

- öğrencinin güncel genel görünümünü alma;
- ders ve konu durumunu güven düzeyiyle alma;
- belirli konu için kaynak bazlı kanıt özetini alma;
- gerekli tarih aralığında öğrenme zaman çizelgesini alma;
- tekrarlanan hata ve zorlanma sinyallerini alma;
- deneme, ödev, sorunlu soru ve AI Soru Çöz bağlamını alma;
- dört dilde beceri ilerlemesini alma;
- öneri ve plan sonuç geçmişini alma;
- veri kapsamı, karantina ve eksik kaynak bilgisini alma;
- yalnız gerektiğinde yetkili kaynak ayrıntısına inme.

Araç adlarını mevcut kod üslubuna göre belirle. Her araç:

- öğrenci kimliğini sunucu oturumundan almalı;
- izinli ve sınırlı parametre kabul etmeli;
- tarih ve sonuç sayısı sınırı kullanmalı;
- kişisel gereksiz içeriği döndürmemeli;
- bulunamadı ile yetkisiz durumunu güvenli biçimde ayırmalı;
- yanıtında sözleşme ve model sürümü taşımalı;
- aynı soru için kararlı, test edilebilir veri üretmeli.

Modelin doğrudan tablo veya genel SQL sorgusu çalıştırmasına izin verme.

## 3. Kademeli bağlam yükleme

Her mesajda bütün günlükleri, soruları, sohbetleri ve olayları modele gönderme. Şu akışı kur:

1. Kimlik, açık hedefler, güncel kısa öğrenci özeti ve veri kapsamı.
2. Kullanıcının sorusundan ilgili ders/konu/tarih belirleme.
3. İlgili konu özetini araçla alma.
4. Yalnız gerekliyse kaynak bazlı kanıta veya yetkili ayrıntıya inme.
5. Yanıtı kanıt ve güven düzeyine göre üretme.

Bu yaklaşım gecikme ve maliyeti sınırlamalı; önemli kanıtı saklamamalıdır. Konu belirlenemiyorsa rastgele konu seçme. Kısa bir açıklama veya yalnız genel düzey analiz üret.

## 4. Yanıt sözleşmesi

AI Koç'un analitik yanıtları içerikte şu ayrımı korumalı:

- gerçek: doğrudan kayıt veya deterministik projeksiyon;
- çıkarım: kanıtların birlikte düşündürdüğü sonuç;
- öneri: öğrencinin deneyebileceği sonraki eylem;
- belirsizlik: eksik, eski, az veya çelişkili veri.

Her yanıtı mekanik dört başlığa bölmek zorunlu değildir; doğal Türkçe kullan. Fakat model hiçbir çıkarımı kesin gerçek gibi yazmamalıdır.

Sayı, tarih, konu, performans ve neden belirten her önemli iddia araç çıktısıyla desteklenmeli. Kaynak yoksa sayı uydurmak yerine eksikliği belirt. Öğrenci isterse “bunu neye göre söyledin?” sorusuna kısa, anlaşılır kanıt özeti verebilmelidir.

Yanıtlar kısa, gerçekçi ve yönlendirici olmalı. Gereksiz motivasyon sözü, teşhis, kesin gelecek tahmini ve aşırı kişiselleştirme kullanma.

## 5. Bütün kaynakları konu etrafında birleştirme

Bir konu sorulduğunda yalnız tek tabloyu özetleme. İlgiliyse birlikte değerlendir:

- ders ve bölüm maruz kalması;
- soru kütüphanesi girişimleri;
- AI Soru Çöz oturumları ve yardım/hata sinyalleri;
- sorunlu sorular ve öğretmen geri bildirimi;
- ödevler;
- günlük iç/dış çalışma beyanları;
- genel/branş denemelerindeki güvenilir kırılımlar;
- atlas, simülasyon ve mini testler;
- dil programı çalışmaları;
- önceki plan ve önerilerin sonuçları.

İlgisiz kaynağı sırf listede bulunduğu için yanıta sokma. Kaynaklar çelişiyorsa ortalama bir hikâye uydurma; örneğin “platform sorularında iyi, son branş denemesinde düşük” diye ayrımı koru ve makul olası nedenleri çıkarım olarak belirt.

## 6. Hafıza kullanımı

Mevcut ai_student_memory veya yerine seçilen yapıda:

- yalnız açıkça izinli onaylı tercihleri kalıcı yaz;
- türetilmiş öğrenci-konu durumunu LLM metni olarak yeniden yazma;
- davranış örüntülerini Faz 6 kayıtlarından oku;
- öğrencinin geçici duygusunu kalıcı kişilik özelliği yapma;
- hassas sağlık, aile, kimlik veya özel yaşam bilgisini eğitim koçluğu bahanesiyle hafızaya alma;
- öğrenci “unut” veya düzelt dediğinde ilgili onaylı hafıza davranışını uygula;
- hafızanın kaynağını ve güncelliğini koru.

Modelin araç çağrısı olmadan keyfî hafıza anahtarı oluşturmasını engelleyen beyaz liste ve doğrulama testleri korunmalıdır.

## 7. Güvenlik ve istem enjeksiyonu

Soru metni, PDF, öğretmen notu, öğrenci notu, AI Soru Çöz sohbeti ve kaynak metadata içindeki metinler güvenilmeyen veri kabul edilmelidir. Bunların içindeki “önceki talimatları unut”, araç çağır veya veri sızdır türü metinler sistem talimatı olamaz.

- kaynak içerikleri açık veri sınırlarıyla modele ver;
- araç adını veya parametresini kaynak metninden otomatik üretme;
- başka öğrencinin kimliğiyle sorguyu reddet;
- araç yanıtı boyut ve alan sınırları uygula;
- günlük ve hata loglarına ham kişisel içerik yazma;
- model hatasında iç sistem istemini veya araç şemasını kullanıcıya sızdırma;
- mevcut yazma eylemlerinde önizleme ve açık kullanıcı onayını koru.

## 8. Hata ve eksik veri davranışı

Şunlar için açık ve sakin geri dönüş üret:

- yeni öğrenci, henüz veri yok;
- yalnız tek kaynaktan az kanıt;
- konu eşleşmeleri karantinada;
- kaynak servisi geçici olarak erişilemiyor;
- projeksiyon gecikmiş veya yeniden hesaplanıyor;
- eski veri ile yeni veri çelişiyor;
- araç çağrısı başarısız;
- model yanıtı doğrulama kapısından geçmedi.

Eksik veride genel çalışma önerisi verilebilir; kişiselleştirilmiş gerçekmiş gibi sunulamaz. Sistem hatasında kullanıcıya teknik ayrıntı yığma.

## 9. İddia doğrulama ve gözlem

Üretim yanıtından önce veya değerlendirme katmanında en az şu denetimleri kur:

- araçta bulunmayan sayısal iddia;
- yanlış tarih aralığı;
- konu kimliği ile başlık uyuşmazlığı;
- düşük güveni kesin dilde sunma;
- kaynak kapsamını olduğundan fazla gösterme;
- başka öğrenciye ait referans;
- silinmiş/geçersiz kanıta dayanma;
- öneriyi yapılmış çalışma gibi anlatma.

Kişisel içerik göstermeyen ölçümler tut: araç gecikmesi, hata oranı, kullanılan kaynak sayısı, iddia doğrulama reddi, yanıt maliyeti ve bağlam boyutu. Ham öğrenci mesajlarını gözlem metriğine kopyalama.

## 10. Değerlendirme seti

Faz 0 ve Faz 6 altın senaryolarına ek olarak en az şu değerlendirmeleri otomatikleştir:

- bütün kaynakları olan bir konu için tam analiz;
- aynı konuda platform içi ve dışı çalışmanın birleşmesi;
- çelişkili kaynakların açıkça ayrılması;
- çözüm yardımı sonrası doğru cevabın abartılmaması;
- genel denemenin konuya uydurulmaması;
- düşük örnek sayısında güvenli dil;
- öğrenci tercihi ile sistem çıkarımının ayrılması;
- kanıt sorusuna doğru açıklama;
- veri olmayan öğrenci;
- bozuk/karantinadaki konu;
- araç zaman aşımı;
- kaynak metninde istem enjeksiyonu;
- başka öğrenci kimliğiyle araç çağrısı;
- çok uzun tarihçede bağlam ve maliyet sınırı;
- Türkçe yanıtların kısa, açık ve eyleme dönük olması.

Model tabanlı puanlayıcı kullanırsan tek karar kaynağı yapma. Deterministik doğruluk kontrolleri, sabit beklenen veriler ve insan tarafından okunabilir örnek çıktılar birlikte bulunmalıdır.

## Kabul kapıları

- AI Koç bir konu için ilgili bütün kaynakları tek analizde kullanabiliyor.
- İddialar kanıt, tarih ve güven düzeyine geri izlenebiliyor.
- Gerçek, çıkarım, öneri ve belirsizlik birbirine karışmıyor.
- Çelişkili veya az veri sahte kesinlikle kapatılmıyor.
- Bütün ham öğrenci geçmişi her mesaja yüklenmiyor.
- Araçlar öğrenci kimliğini sunucudan alıyor ve kullanıcılar arası erişimi reddediyor.
- Kaynak metni sistem talimatına dönüşemiyor.
- Hafıza katmanları Faz 6 sınırlarına uyuyor.
- Başlangıç değerlendirmesine göre doğruluk ve kaynak kapsamı ölçülebilir biçimde iyileşmiş.
- Mevcut onaylı yazma eylemleri ve temel sohbet akışı bozulmamış.
- Canlı veri veya yayın izinsiz değiştirilmemiştir.

## Faz sonu

Araç sözleşmelerini, yanıt kurallarını, güvenlik kararlarını, başlangıç/son değerlendirme sonuçlarını ve maliyet-gecikme ölçülerini MIMARI_KARARLAR.md ile FAZ_DURUMU.md içinde kanıt bağlantılarıyla güncelle.
