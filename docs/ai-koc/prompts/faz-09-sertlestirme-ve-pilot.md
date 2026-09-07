# Codex Uygulama İstemi — Faz 9: Sertleştirme ve Pilot Hazırlığı

## Görevin

Birleşik veri ağı ve AI Koç'u gerçek öğrenci kullanımından önce güvenlik, mahremiyet, veri doğruluğu, hata dayanıklılığı, performans, maliyet ve koçluk kalitesi açısından sertleştir. Kontrollü pilot için ölçülebilir geçiş kapıları, gölge çalışma ve geri dönüş mekanizması hazırla.

Bu faz yeni özellik ekleme fazı değildir. Var olan nihai hedefin güvenilirliğini kanıtlama fazıdır.

## Zorunlu okumalar

- AGENTS.md ve CLAUDE.md
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- Faz 0 kaynak matrisi ve bütün fazların MIMARI_KARARLAR.md kayıtları
- Faz 1–8 kabul testleri, migration dosyaları ve bilinen sınırlar
- mevcut güvenlik, RLS, gizlilik, hesap silme, veri dışa aktarma, gözlem ve hata kayıt yapıları
- yayın öncesi doğrulama komutları ve tek yayın kaynağı kuralları

Faz 8 kabul kapıları geçmediyse bu fazı tamamlandı sayma.

## 1. Kapsam uzlaştırması

AI_KOC_URUN_HAFIZASI.md içindeki her zorunlu veri kaynağını çalışan sistemle tek tek karşılaştır:

- ders kütüphanesi ve paketli/PDF içerikler;
- soru kütüphanesi;
- AI Soru Çöz;
- sorunlu sorular ve öğretmen bağlantısı;
- ödevler;
- günlük iç/dış çalışma;
- genel ve branş denemeleri;
- İngilizce, Almanca, Fransızca ve İspanyolca;
- atlas ve simülasyonlar;
- AI Koç planları ve sonuçları;
- yeni öğrenme yüzeylerinin kayıt defterine katılma zorunluluğu.

Her kaynak için şu beş kanıtı iste:

1. Kararlı kaynak kimliği.
2. Kanonik konu veya görünür belirsizlik.
3. Tekrarsız olay/kanıt üretimi.
4. Düzeltme ve silme davranışı.
5. AI Koç tarafından yetkili ve açıklanabilir kullanım.

Bu beşli tamamlanmayan kaynağı “kapsanıyor” sayma. Kaynak matrisi ile gerçek kod arasındaki farkı otomatik denetleyen bir kayıt defteri testi veya eşdeğer kapı oluştur.

## 2. Güvenlik denetimi

API ve veritabanı düzeyinde saldırgan testler çalıştır:

- kullanıcı A'nın kullanıcı B olaylarını, profillerini, dil ilerlemesini, görevlerini ve kaynak ayrıntılarını okuması;
- body veya parametrede sahte student_id kullanımı;
- kaynak kimliğini tahmin ederek başka öğrencinin sorusuna/ödevine erişim;
- yönetici anahtarı veya gizli ortam değişkeninin istemci paketine sızması;
- yetkisiz toplu sorgu, aşırı tarih aralığı ve sayfalama atlatma;
- tekrar önleme anahtarını kötüye kullanarak başka olayın üzerine yazma;
- düzeltme/silme çağrısıyla başka öğrenci kanıtını geçersiz kılma;
- kaynak metni, soru, PDF, öğretmen notu ve öğrenci notundan istem enjeksiyonu;
- araç parametrelerine komut, SQL veya beklenmeyen yapı sokma;
- AI Koç yazma eylemini onaysız veya eski onayla tekrar çalıştırma;
- hız sınırı ve kötüye kullanım senaryoları;
- log, hata yanıtı ve gözlem sisteminden kişisel veri sızıntısı.

Yalnız birim testle yetinme; gerçek JWT ve RLS davranışını yerel/güvenli test ortamında doğrula. Bulunan açığı kapatmadan bu fazı geçme.

## 3. Mahremiyet ve öğrenci kontrolü

Toplanan her veri alanı için amaç ve gereklilik denetimi yap:

- eğitimsel karar için gereksiz ham tıklama veya içerik saklanıyor mu;
- tam soru, görsel, ses, serbest yazı veya öğretmen mesajı gereksiz kopyalanıyor mu;
- saklama süresi ve silme yolu var mı;
- öğrenci kendi kayıtlarını düzeltebiliyor mu;
- onaylı tercihleri görebiliyor ve unutturabiliyor mu;
- hesap silme bütün olay, projeksiyon, hafıza, görev ve dil ilerlemesine ulaşıyor mu;
- veri dışa aktarımı anlamlı ve kullanıcıya bağlı mı;
- analiz kayıtları silinmiş kaynak içeriğini yaşatıyor mu;
- sistem hassas kişilik/sağlık/aile çıkarımı yapıyor mu.

Gerekli kullanıcı metni veya gizlilik açıklaması varsa mevcut ürün üslubunda hazırla. Hukuki uygunluğu varsayma veya kesin hüküm verme; yayımlanmadan önce ürün sahibi incelemesi gereken metni açıkça işaretle.

## 4. Veri doğruluğu ve uzlaştırma

Her kaynak için otomatik ve çalıştırılabilir uzlaştırma raporu üret:

- alan kaydı sayısı;
- beklenen öğrenme olayı sayısı;
- gerçek olay sayısı;
- geçerli kanıt sayısı;
- karantinadaki kayıt;
- geçersiz kılınan/düzeltilen kayıt;
- çift kayıt denemesi;
- işlenmemiş veya başarısız olay;
- öğrenci-konu projeksiyonunun son güncellenme zamanı.

Sayım farklarını kişisel içeriği loglamadan örneklenebilir kaynak kimlikleriyle incele. Yeniden oynatma sonrası tam projeksiyon ile artımlı projeksiyon birebir uyuşmalıdır. Düzeltme ve silme sonrasında eski sonuç kalıntısı için özel test çalıştır.

## 5. Hata dayanıklılığı

Şu kesintileri kontrollü test et:

- olay alım servisi geçici kapalı;
- veritabanı zaman aşımı;
- projeksiyon işleyicisi yarıda durdu;
- aynı parti iki işçi tarafından işlendi;
- geç gelen veya sıra dışı eski olay;
- bozuk olay/zehirli kayıt;
- AI model isteği zaman aşımı veya hatası;
- araçlardan biri kısmen erişilemez;
- tarayıcı soru yanıtı sırasında yenilendi;
- dil aktarımı ağ kesintisinde kaldı;
- içerik hedefi silindi veya erişim kapandı.

Beklenen davranış veri kaybetmemek, çift saymamak, güvenli geri dönüş göstermek ve otomatik/elle yeniden işlemeye imkân vermektir. Sessiz başarısızlık bırakma.

## 6. Performans ve maliyet

Faz 0'daki gerçekçi hacimlerden en az küçük, orta ve yoğun öğrenci profilleri oluştur. Ölç:

- olay yazma gecikmesi;
- projeksiyon işleme gecikmesi;
- öğrenci genel görünümü sorgusu;
- konu kanıtı sorgusu;
- uzun tarihçede AI Koç ilk yanıt ve toplam yanıt süresi;
- modele gönderilen bağlam boyutu;
- mesaj başına araç çağrısı ve model maliyeti;
- geriye doldurma işlem hızı ve veritabanı yükü;
- indekslerin gerçek sorgu planı;
- telefon cihazında kayıt eklenmesinin kullanıcı akışına etkisi.

Hedef bütçeleri MIMARI_KARARLAR.md içinde sayısal belirle. Ölçmeden “hızlı” deme. Bütün geçmişi her istekte tarayan sorguları düzelt; kişisel veri içeren genel önbellek kurma. Önbellek kullanılıyorsa kullanıcı, sürüm ve geçersiz kılma sınırlarını test et.

## 7. Koçluk kalite değerlendirmesi

Faz 7 ve 8 değerlendirme setini genişleterek en az şu ölçüleri raporla:

- sayısal/tarihsel iddia doğruluğu;
- doğru konu ve kaynak kapsamı;
- yanlış kesinlik oranı;
- veri yokken uydurma oranı;
- kanıt sorusuna doğru cevap;
- önerinin geçerli ve erişilebilir hedefe bağlanma oranı;
- gereksiz veya çelişkili öneri oranı;
- kullanıcı onayı olmadan yazma girişimi;
- istem enjeksiyonuna dayanıklılık;
- yanıt kısalığı, açıklığı ve uygulanabilirliği;
- aynı veriyle öncelik kararlılığı.

Sentetik altın öğrenci profilleri kullan. Gerçek öğrenci verisini değerlendirme dosyasına kopyalama. Model veya istem değişince bu takım otomatik çalışabilmeli. Kritik doğruluk ve güvenlik senaryolarında yüzde 100 geçiş iste; öznel dil kalitesi için hedef eşik ve insan inceleme örneklemi tanımla.

## 8. Gözlem ve alarm

Kişisel içerik göstermeyen operasyonel ölçümler hazırla:

- kaynak başına son başarılı olay;
- olay reddi ve neden sınıfı;
- işleme kuyruğu ve gecikme;
- projeksiyon yaşı;
- karantina oranı;
- alan tablosu/kanıt uzlaştırma farkı;
- AI araç hata ve zaman aşımı oranı;
- iddia doğrulama reddi;
- yanıt gecikmesi ve maliyet;
- görev hedefi kırık bağlantı oranı;
- dil aktarımı başarı/hata oranı.

Eşik ve müdahale sahibi belli olmalı. Genel bir yönetim paneli zorunlu değil; yerel rapor, sorgu veya mevcut gözlem sistemi yeterli olabilir. Öğrenci metinlerini alarm gövdesine koyma.

## 9. Özellik bayrakları ve gölge çalışma

Kontrollü geçiş için şu yetenekleri kur:

- yeni olay üretimini kaynak bazında açıp kapatma;
- projeksiyonu kullanıcıya göstermeden gölgede çalıştırma;
- eski ve yeni AI Koç bağlamını aynı sentetik girdide karşılaştırma;
- yeni AI Koç analizini kullanıcı veya test grubu bazında açma;
- yazma/öneri eylemlerini ayrıca kapatabilme;
- bir sorun halinde eski güvenli davranışa dönme;
- bayrakların istemciden yetkisiz değiştirilememesi;
- bayrak durumunun olay ve model sürümüyle gözlenebilmesi.

Gölge çalışma gerçek öğrenciye görünmez; iki ayrı koç yanıtını aynı anda göstermemelidir. Gölge çıktıları gereksiz uzun süre veya ham kişisel içerikle saklama.

## 10. Pilot çalışma planı

Faz 10'da uygulanacak, bu fazda yalnız hazırlanacak planı yaz:

- önce sentetik hesaplar;
- sonra ürün sahibinin açıkça belirlediği test hesapları;
- ardından açıkça seçilmiş sınırlı pilot grubu;
- kaynak bazında açılış sırası;
- süre ve örnek büyüklüğü;
- günlük kontrol listesi;
- kritik hata ve durdurma eşikleri;
- geri dönüş sorumlusu ve adımları;
- öğrenci geri bildirimi yöntemi;
- pilot verisinin değerlendirme biçimi;
- genel kullanıma geçiş için sayısal kabul kapıları.

Gerçek öğrenci pilotunu bu fazda kendiliğinden başlatma. Ürün sahibi onayı, uygun bilgilendirme ve canlı migration tamamlanmadan kullanıcıyı yeni akışa alma.

## 11. Zorunlu bitiş doğrulamaları

- bütün kaynakların beşli kapsam kanıtı vardır;
- RLS ve çapraz kullanıcı saldırı testleri geçer;
- istem enjeksiyonu ve yazma onayı atlatılamaz;
- hesap silme/düzeltme tüm türevleri etkiler;
- uzlaştırma ve yeniden oynatma farkı sıfırdır;
- kesinti testlerinde veri kaybı veya çift sayım oluşmaz;
- performans ve maliyet bütçeleri ölçülmüş ve karşılanmıştır;
- kritik AI Koç doğruluk senaryoları yüzde 100 geçer;
- gözlem metrikleri ve müdahale eşikleri çalışır;
- özellik bayrağı ile yeni davranış kapatılabilir;
- pilot ve geri dönüş belgeleri uygulanabilir ayrıntıdadır;
- bütün ilgili testler ve üretim derlemesi geçer;
- npm run yayin:dogrula çalıştırılabiliyorsa geçer; yayın yapılmaz.

## Kabul kapıları

- Kapsanmamış zorunlu öğrenme yüzeyi yoktur.
- Kritik güvenlik ve mahremiyet açığı yoktur.
- Veri uzlaştırma ve deterministik yeniden oynatma kanıtlanmıştır.
- Hata durumları veri kaybetmeden ve kullanıcıyı yanıltmadan yönetilir.
- Performans/maliyet bütçeleri sayısal ve testlidir.
- AI Koç kalite eşikleri altın senaryolarda geçer.
- Yeni sistem kaynak ve kullanıcı bazında güvenle açılıp kapatılabilir.
- Pilot ve geri dönüş planı hazırdır.
- Canlı şema, pilot veya yayın izinsiz başlatılmamıştır.

## Faz sonu

Sertleştirme raporunu, kalan riskleri, performans/maliyet sonuçlarını, güvenlik bulgularını, pilot kapılarını ve geri dönüş adımlarını MIMARI_KARARLAR.md ile FAZ_DURUMU.md içinde kanıt bağlantılarıyla güncelle. Kritik açık veya kapı ihlali varsa fazı tamamlandı işaretleme.
