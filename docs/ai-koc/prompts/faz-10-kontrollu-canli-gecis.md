# Codex Uygulama İstemi — Faz 10: Kontrollü Canlı Geçiş

## Görevin

Faz 0–9 boyunca yerelde doğrulanan birleşik veri ağı ve AI Koç'u geri alınabilir, ölçümlü ve açık onaylı biçimde canlı ortama geçir. Önce şemayı ve geriye doldurmayı doğrula, sonra gölge çalışma, test hesapları, sınırlı pilot ve nihai kabul sırasını uygula.

Bu istem canlı veritabanı değişikliği veya yayın için tek başına onay değildir. İlgili adımda kullanıcının bu görev içindeki açık onayı yoksa hazırlığı tamamla, dur ve yalnız gereken onayı iste.

## Zorunlu okumalar

- AGENTS.md ve CLAUDE.md
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- Faz 0–9 bütün durum, karar, migration, test, sertleştirme ve pilot belgeleri
- mevcut Git dalı, uzak depo ve tek yayın kaynağı kuralları
- Supabase proje kimliği ve migration durumu için yalnız güvenli/okuma amaçlı kontroller
- npm run yayin:dogrula içeriği ve yayın kapıları

Faz 9 kabul kapıları geçmediyse canlı geçişe başlama.

## 1. Ön koşul denetimi

Herhangi bir canlı yazmadan önce raporla ve doğrula:

- yetkili çalışma klasörü /Users/furkantalhayazcicek/Desktop/DRKOÇ;
- gerçek ve bağımsız Git klasörü;
- mevcut dal, uzak depo ve çalışma alanındaki kullanıcı değişiklikleri;
- canlı Supabase hedefinin doğru proje olduğu;
- uygulanacak migration listesi ve sırası;
- migrationların mevcut şemaya göre kuru çalışma sonucu;
- geri alma ve ileri düzeltme planı;
- veri yedeği/geri kazanım mekanizmasının mevcut ve doğrulanmış olduğu;
- özellik bayraklarının varsayılan olarak kapalı olduğu;
- gözlem, alarm ve durdurma eşiklerinin hazır olduğu;
- Faz 9 güvenlik, doğruluk, performans ve maliyet sonuçlarının geçerli olduğu;
- öğrenciye görünen gerekli bilgilendirme metinlerinin ürün sahibi tarafından incelendiği.

Hedef proje kimliği, yedek veya geri dönüş yolu belirsizse canlı yazma yapma. İlgisiz kirli çalışma alanını temizleme, sıfırlama veya kullanıcının değişikliklerini commit etme.

## 2. Ayrı onay kapıları

Aşağıdaki işlemleri tek genel “devam” ifadesinden varsayma. Her biri için kapsamı ve etkisi belli açık onay bulunmalıdır:

1. Canlı veritabanı migrationlarını uygulama.
2. Canlı veriyi geriye doldurma veya dönüştürme.
3. Gerçek öğrenci hesaplarında gölge işleme.
4. Belirlenmiş pilot öğrencilere yeni AI Koç'u gösterme.
5. Kod değişikliklerini üretime yayınlama.
6. Pilot sonrası genel kullanıma açma.

Aynı mesaj birden fazla adımı açıkça kapsıyorsa tekrar onay isteme. Onay yalnız hazırlık veya yerel test için verilmişse canlı adıma genişletme.

## 3. Canlı migration uygulaması

Açık onaydan sonra:

- uygulanacak SQL'i son kez hedef şemayla karşılaştır;
- beklenmeyen destructive işlem, tablo kilidi ve uzun süren indeks riskini denetle;
- mevcut öğrenci tablolarını silme veya toplu yeniden yazma;
- migrationları belirlenmiş sırayla ve küçük güvenli adımlarla uygula;
- her adım sonrası tablo, kısıt, indeks ve RLS politikasını doğrula;
- başka öğrenci erişimi için gerçek RLS kontrolü çalıştır;
- uygulama eski özellik bayrakları kapalıyken çalışmaya devam ediyor mu doğrula;
- migration kimliği, başlangıç/bitiş zamanı ve sonucu kaydet;
- hata halinde önceden yazılmış geri dönüş/ileri düzeltme planını uygula, doğaçlama veri silme yapma.

Yeni şema uygulanınca özelliği otomatik olarak öğrencilere açma.

## 4. Geriye doldurma

Ayrı açık onaydan sonra kaynakları tek seferde değil, Faz 9 planındaki sırayla işle:

1. Sentetik/test hesapları.
2. Küçük tarih aralığı veya küçük test partisi.
3. Kaynak bazında sınırlı canlı parti.
4. Sayım ve projeksiyon uzlaştırması.
5. Hata ve karantina incelemesi.
6. Sonraki partiye geçiş kararı.

Her parti için kaydet:

- kaynak ve tarih aralığı;
- taranan alan kaydı;
- beklenen/yazılan/atlanan/karantinadaki olay;
- çift olarak engellenen kayıt;
- başarısız kayıt ve kişisel verisiz neden sınıfı;
- işleme süresi ve veritabanı yükü;
- yeniden oynatma farkı;
- iptal/devam imleci.

İkinci kuru/gerçek tekrar çalıştırmada yeni kayıt oluşmadığını örneklemle doğrula. Sayım farkı, beklenmeyen yük veya veri bozulması durdurma eşiğini geçerse sonraki partiye devam etme.

Cihazdaki dil localStorage verisi sunucudan toplu çekilemez. Dil aktarımını yalnız ilgili kullanıcının oturum açtığı cihazda Faz 5 güvenli akışıyla yap; bilinmeyen yerel veriyi hesaba zorla bağlama.

## 5. Gölge çalışma

Ayrı açık onaydan sonra yeni projeksiyon ve analiz altyapısını öğrenciye sonuç göstermeden gölgede çalıştır:

- kaynak olayları ve projeksiyon gecikmesini izle;
- eski ve yeni bağlamın aynı doğrulanmış girdide farkını ölç;
- sayısal iddia, konu eşleşmesi ve kaynak kapsamını karşılaştır;
- maliyet, gecikme ve hata oranını ölç;
- yazma araçlarını kapalı tut;
- gölge yanıtı kullanıcı sohbet geçmişine ekleme;
- ham kişisel içeriği değerlendirme deposuna kopyalama;
- durdurma eşiği aşılırsa özellik bayrağını kapat ve nedeni kaydet.

Gölge süresi ve gerekli örnek büyüklüğü Faz 9 pilot planına uymalı. Yeterli örnek oluşmadan başarı ilan etme.

## 6. Test hesapları ve sınırlı pilot

Sırayı koru:

- önce ürün sahibinin belirlediği test hesaplarında bütün uçtan uca akış;
- sonra açık onayla seçilmiş sınırlı pilot grubu;
- önce yalnız okuma/analiz;
- kalite kapıları geçince öneri önizleme;
- ayrıca onaylandıysa kapalı döngü görev yazma.

Pilot sırasında günlük olarak en az şunları kontrol et:

- yanlış veya uydurulmuş sayı/tarih/konu;
- kaynak eksikliği;
- başka öğrenci veri sızıntısı;
- görev ve kanıt yanlış eşleşmesi;
- dil aktarım hatası;
- karantina ve işleme gecikmesi;
- AI yanıt hata, gecikme ve maliyeti;
- öğrenci geri bildirimi;
- özellik bayrağı ve geri dönüş sağlığı.

Kritik güvenlik ihlali, veri bozulması, onaysız yazma veya tekrarlanan kanıtsız kesin iddia görüldüğünde pilotu hemen kapat. Veriyi silerek sorunu gizleme; sistemi güvenli eski davranışa al, etkiyi ölç ve düzelt.

## 7. Nihai ürün kabulü

Pilot sonunda AI_KOC_URUN_HAFIZASI.md içindeki nihai hedefleri tek tek gerçek senaryoyla kabul et:

- AI Koç bütün zorunlu öğrenme yüzeylerini görebiliyor mu;
- aynı konu için iç/dış çalışma, soru, AI yardım, ödev ve deneme kanıtını birlikte değerlendirebiliyor mu;
- ham sayı özeti yerine anlamlı ve ölçülü analiz yapıyor mu;
- öğrenciyi tercih, öğrenme durumu, davranış örüntüsü ve karar geçmişiyle doğru sınırlar içinde tanıyor mu;
- kanıt ile çıkarımı ayırıyor mu;
- eksik ve çelişkili veriyi söylüyor mu;
- ilgili çalışmaya yönlendirip sonucu yeniden analiz ediyor mu;
- öğrenci gerekçeyi görebiliyor ve verisini düzeltebiliyor mu;
- kullanıcılar arası veri sınırı korunuyor mu;
- düzeltme, silme ve hesap silme türetilmiş veriye ulaşıyor mu;
- yeni öğrenme yüzeyi kayıt defteri kapısına takılmadan sessizce eklenemiyor mu;
- performans ve maliyet bütçeleri gerçek pilotta karşılanıyor mu.

Her maddeye test, ölçüm veya kontrollü gözlem kanıtı bağla. Eksik madde varsa genel açılış yapma.

## 8. Yayın

Kullanıcı üretim yayınına açık onay verdiyse AGENTS.md içindeki tek yayın kaynağı kurallarını eksiksiz uygula:

- yalnız /Users/furkantalhayazcicek/Desktop/DRKOÇ çalışma kopyasını kullan;
- ilgisiz kullanıcı değişikliklerini sahiplenme veya değiştirme;
- ana sayfa tek sürüm kuralını koru;
- bütün ilgili testleri ve üretim derlemesini çalıştır;
- npm run yayin:dogrula kapısını geçir;
- masaüstünde .vercel bağlantısı oluşturma ve vercel link çalıştırma;
- vercel --prod veya başka doğrudan ikinci üretim yayını yapma;
- temiz main dalını normal, force olmayan biçimde origin/main dalına gönder;
- Vercel yayınının GitHub ana dalından tek kez oluştuğunu doğrula.

Çalışma alanı temiz değilse kullanıcıya ait değişiklikleri otomatik commit etme. AI Koç işi güvenli biçimde ayrılamıyorsa yayını durdur ve somut çakışmayı bildir.

## 9. Geri dönüş

Geri dönüş yalnız arayüzü kapatmak değildir. Önceden doğrulanmış sırayı kullan:

- yeni AI Koç görünümünü ve yazma eylemlerini özellik bayrağıyla kapat;
- olay alımını gerekiyorsa kaynak bazında durdur;
- eski güvenli AI Koç bağlamına dön;
- kuyruktaki olayları kaybetmeden beklet;
- bozuk model sürümünü kullanımdan kaldır ve önceki sürümü yeniden üret;
- yanlış projeksiyonu düzeltme/geçersiz kılma ile yeniden hesapla;
- migration geri alınamıyorsa uyumlu ileri düzeltme uygula;
- öğrenci verisini topluca silme;
- etkilenen zaman, kullanıcı kapsamı ve kayıt sayısını ölç;
- kullanıcı bilgilendirmesi gerekiyorsa ürün sahibine somut taslak ve etki raporu ver.

Geri dönüş tatbikatını test hesaplarında doğrulamadan genel kullanıma açma.

## 10. Genel kullanıma açma

Yalnız şu koşullar birlikte sağlanırsa ve kullanıcı açıkça onaylarsa aç:

- pilot süresi ve örnek büyüklüğü tamamlanmış;
- Faz 9 sayısal kalite eşikleri gerçek kullanımda karşılanmış;
- kritik güvenlik veya veri doğruluğu olayı yok;
- uzlaştırma farkları belirlenen sınır içinde;
- maliyet ve gecikme bütçesi karşılanmış;
- geri dönüş tatbikatı geçmiş;
- öğrenci kontrol ve mahremiyet metinleri hazır;
- açık kalan riskler ürün sahibi tarafından kabul edilmiş.

Kademeli yüzde veya kullanıcı grubu açılışı kullan; tek anda bütün öğrencilere açma. Her kademe sonunda ölçüm ve durdurma kapısı çalıştır.

## 11. Zorunlu son rapor

FAZ_DURUMU.md dosyasını ancak gerçek sonuçlarla güncelle. Son raporda kısa ve somut biçimde şunları ver:

- uygulanan migrationlar ve zamanları;
- geriye doldurulan kaynaklar ve sayımlar;
- karantina/hata ve uzlaştırma sonuçları;
- gölge ve pilot kapsamı;
- kalite, güvenlik, performans ve maliyet ölçüleri;
- açılan özellik bayrakları;
- yayın commit kimliği ve doğrulama sonucu, yayın yapıldıysa;
- kalan riskler;
- geri dönüşün nasıl yapılacağı;
- AI_KOC_URUN_HAFIZASI.md kabul maddelerinin durumu.

Onay alınmayan bir canlı adım varsa “tamamlandı” deme. “Yerel hazırlık tamamlandı, şu onay bekleniyor” biçiminde tam olarak hangi adımda durduğunu yaz.

## Kabul kapıları

- Doğru canlı hedef ve geri kazanım yolu doğrulanmıştır.
- Migration ve geriye doldurma açık onayla, ölçümlü ve tekrar güvenli uygulanmıştır.
- Gölge çalışma ve sınırlı pilot kalite eşiklerini geçmiştir.
- Kritik güvenlik, veri kaybı, çift sayım veya onaysız yazma yoktur.
- Nihai ürün hafızasındaki bütün hedeflere kanıt bağlanmıştır.
- Geri dönüş test edilmiştir.
- Genel açılış kademeli ve ayrıca onaylıdır.
- Yayın yalnız tek yetkili kopyadan ve zorunlu yayın kapısıyla yapılmıştır.

## Faz sonu

Bütün kapılar geçtiyse FAZ_DURUMU.md içinde programı tamamlandı olarak işaretle. Herhangi bir kapı geçmediyse sistemi güvenli durumda bırak, eksik kapıyı ve gereken tek sonraki kararı açıkça kaydet.
