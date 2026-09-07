# Codex Uygulama İstemi — Faz 5: Dil İlerlemesinin Buluta Taşınması

## Görevin

İngilizce, Almanca, Fransızca ve İspanyolca çalışma ilerlemesini yalnız cihazdaki localStorage kayıtlarından çıkar; oturum açmış öğrenciye bağlı, cihazlar arası kullanılabilir ve AI Koç'un güvenli araçlarla okuyabildiği kalıcı veri yapısına taşı.

Mevcut öğrenci ilerlemesini kaybetme. Dört dilin çalışan arayüzünü gereksiz yeniden tasarlama.

## Zorunlu okumalar

- AGENTS.md, CLAUDE.md ve gerektiğinde DESIGN_SYSTEM.md
- docs/ai-koc/AI_KOC_URUN_HAFIZASI.md
- docs/ai-koc/FAZ_PLANI.md
- docs/ai-koc/FAZ_DURUMU.md
- Faz 0 kaynak matrisi, Faz 1 sözleşmeleri ve Faz 2 mimari kararları
- dört dil modülünün gerçek kaynak kodu, localStorage anahtarları ve veri biçimleri
- mevcut kullanıcı oturumu, Supabase istemcisi, çevrimdışı davranış ve RLS testleri

Faz 2 kabul kapıları geçmediyse bu fazı tamamlandı sayma. Görünen arayüz değişirse drkoc-ui-designer becerisini kullan.

## 1. Dört dilin gerçek veri envanteri

Her dil için ayrı ayrı çıkar:

- kullanılan localStorage anahtarları ve sürümleri;
- seviye, ünite, ders ve etkinlik kimlikleri;
- kelime çalışması, tekrar aralığı ve öğrenme durumu;
- dinleme, okuma, yazma, konuşma, dilbilgisi veya mevcut beceri alanları;
- quiz/soru cevapları ve puanları;
- seri, hedef, süre ve tamamlanma bilgileri;
- sıfırlama, çıkış yapma ve cihaz değişikliği davranışları;
- ortak kod ile dile özel kod ayrımı.

Veri dört dilde aynı sanılmamalı. Alan farklarını belgeleyip ortak sözleşmede güvenli bir çekirdek ve dile özel sınırlı ek alanlar belirle.

## 2. Bulut veri modeli

Mevcut şemayı inceleyerek en küçük kalıcı yapıyı tasarla. En az şu yetenekler bulunmalı:

- kullanıcıya bağlı dil profili;
- dil, seviye ve müfredat/içerik sürümü;
- ders veya etkinlik girişimi;
- doğru, yanlış, boş, yardım ve tekrar sonuçları;
- beceri alanı;
- kelime veya öğrenme öğesi ilerlemesi gerekiyorsa kararlı içerik kimliği;
- gerçekleşme ve güncellenme zamanı;
- cihaz/istemci kaynak kimliği fakat kişisel cihaz izi üretmeyen sınırlı değer;
- tekrar önleme ve sürüm çatışması kontrolü;
- sıfırlama ve silme işareti;
- ortak öğrenme kanıtına bağlantı.

Tam cevap veya serbest yazı içeriğini analiz için gereksiz yere çoğaltma. AI Koç'un ihtiyaç duyduğu sonuç özeti ile hassas öğrenci üretimini ayır.

Okul dersindeki İngilizce konu kimliği ile bağımsız dil öğrenme programını sessizce aynı konu ağacına bağlama. Faz 1'de tanımlanan bağlam, program veya müfredat alanını kullan.

## 3. Sunucu tarafı güvenlik

- student_id istemciden güvenilir kabul edilmez;
- bütün okuma/yazma oturum sahibi öğrenciyle sınırlandırılır;
- başka öğrencinin dil profili, cevabı veya kelime ilerlemesi okunamaz;
- toplu güncelleme yalnız kullanıcının kendi kayıtlarında çalışır;
- değer, tarih, metin boyutu ve izinli dil kodları doğrulanır;
- yönetici anahtarı istemciye veya genel API yoluna sızmaz;
- hesap silme ve veri dışa aktarma mevcut ürün davranışıyla uyumludur.

RLS politikalarını hem SQL hem gerçek yetkisiz istek testleriyle doğrula.

## 4. Yerelden buluta güvenli aktarım

Bir defalık aktarım mekanizması şu sırayı izlemeli:

1. Yerel veri biçimini sürümüyle okur ve doğrular.
2. Oturum açmış gerçek kullanıcıyı doğrular.
3. Her kayıt için kararlı aktarım kimliği üretir.
4. Buluttaki mevcut ilerlemeyle alan bazında birleştirir.
5. Yazılan sayıları ve temel özetleri tekrar okuyarak doğrular.
6. Aktarım tamamlandı işaretini kullanıcı ve veri sürümü bazında kaydeder.
7. Yerel kopyayı hemen silmez; güvenli geçiş dönemi boyunca geri dönüş için tutar veya açık sürümlü arşiv davranışı kullanır.

Aktarım sayfa yenileme, ağ kesilmesi veya farklı cihazda tekrar başlatma halinde çoğalmamalı. Anonim cihaz verisini yalnızca oturum açıldığı için otomatik olarak hesaba sahiplenme; mevcut ürün akışına uygun açık ve güvenli ilişkilendirme yap.

## 5. Birleştirme ve çatışma kuralları

Genel “son yazan kazanır” yaklaşımını bütün alanlara uygulama. Alan bazında deterministik kurallar oluştur:

- tamamlanmış etkinlik yanlışlıkla tamamlanmamışa düşmez;
- en iyi skor ile en son skor ayrı tutulabilir;
- toplam deneme sayısı olaylardan türetilir, sayaçlar körlemesine toplanmaz;
- tekrar zamanı en güncel geçerli öğrenme durumundan hesaplanır;
- sıfırlama açık bir kullanıcı eylemi ve yeni sürüm olarak ele alınır;
- aynı cevabın iki cihazdan gönderimi olay kimliğiyle tekilleştirilir;
- gerçek çatışma çözülemiyorsa kayıp yaratmadan işaretlenir ve yeniden işlenebilir.

Bu kuralları MIMARI_KARARLAR.md içinde örneklerle kaydet.

## 6. Çalışma anında bulut eşitleme

Dört dil modülünü ortak bir ilerleme adaptörüne bağla:

- arayüz hızlı yerel tepki vermeye devam eder;
- güvenilir sunucu yazımı arka planda izlenir;
- başarısız yazma görünmez veri kaybına dönüşmez;
- yeniden deneme aynı kaydı çoğaltmaz;
- farklı cihazdan gelen değişiklik güvenli biçimde yenilenir;
- çıkış yapan kullanıcının verisi sonraki kullanıcıya görünmez;
- çevrimdışı destek varsa kuyruk ve çatışma kuralları çalışır;
- çevrimdışı destek yoksa öğrencinin son işlemini koruyan anlaşılır hata/yeniden deneme davranışı vardır.

Ortak adaptör kurarken dört modülü tek büyük ve kırılgan bileşene dönüştürme. Dile özgü pedagojik davranışları koru.

## 7. Ortak kanıt ağına bağlantı

Dil çalışmasından en az şu anlamlı kanıtları üret:

- ders veya etkinlik tamamlandı;
- soru/quiz sonucu;
- beceri alanında doğrudan performans;
- yardım veya çözüm görüntüleme;
- tekrar sonucu;
- kelime öğrenme ve unutma sinyali, mevcut model bunu gerçekten ölçüyorsa;
- öğrenci hedefi veya beyanı, doğrudan sonuçtan ayrı olarak.

Yalnız uygulamayı açmayı öğrenme başarısı sayma. Dört dilde kanıtlar aynı çekirdek sözleşmeye uymalı; dil ve program bağlamı kaybolmamalı.

AI Koç ham cevap yığınını değil, kanıt bağlantılı ilerleme özeti ve gerektiğinde sınırlı ayrıntı alabilmelidir.

## 8. Kullanıcı kontrolü

Mevcut ürün yaklaşımıyla uyumlu olarak öğrenci şunları yapabilmeli:

- eşitleme durumunu anlayabilmeli;
- aktarım hatasında yeniden deneyebilmeli;
- ilerlemeyi sıfırlamanın etkisini işlemden önce görebilmeli;
- kendi dil ilerlemesini silebilmeli veya mevcut hesap silme akışında sildirebilmeli;
- yanlış hesaba aktarım riski varsa işlemi iptal edebilmeli.

Arayüz eklenirse teknik tablo, senkronizasyon jargonu veya gereksiz bildirim gösterme.

## 9. Geriye doldurma ve canlı sınır

Yerel test verileri ve sentetik kullanıcılarla aktarımı doğrula. Canlı kullanıcı localStorage verisine toplu erişim varsayma; bu veri yalnız ilgili cihaz ve tarayıcıda bulunur. Bu yüzden canlı geçiş planı:

- kullanıcı cihazında oturum açınca güvenli aktarım;
- sunucudaki mevcut kayıtlar için ayrı geriye doldurma;
- ölçülebilir aktarım başarısı ve hata oranı;
- geri dönüş süresi

içermelidir.

Canlı migration veya kullanıcı verisi aktarımı bu fazda açık onay yoksa uygulanmaz; Faz 10 için hazır tutulur.

## 10. Zorunlu test matrisi

İngilizce, Almanca, Fransızca ve İspanyolca için ayrı ayrı en az şu senaryoları çalıştır:

- temiz hesap ilk çalışma;
- yalnız yerel eski ilerleme;
- yalnız bulut ilerlemesi;
- yerel ve bulutta çakışmayan ilerleme;
- yerel ve bulutta çakışan skor/tamamlanma;
- aktarım sırasında ağ kesintisi ve devam;
- aynı aktarımın 2 ve 10 kez çalışması;
- iki cihazdan eş zamanlı cevap;
- sayfa yenileme ve oturum kapatma/açma;
- kullanıcı A'dan çıkıp kullanıcı B'ye geçme;
- sıfırlama, silme ve tekrar başlama;
- bozuk veya eski localStorage şeması;
- başka kullanıcı verisine erişim denemesi;
- ortak kanıtın doğru dil, beceri ve program bağlamını koruması.

Ayrıca mevcut dört dil temel akışları, ilgili erişilebilirlik kontrolleri ve üretim derlemesi geçmelidir. Görsel değişiklik yaptıysan masaüstü ve telefon ekranlarını çalışır halde incele.

## Kabul kapıları

- Dört dilde bütün gerçek ilerleme türleri envantere alınmıştır.
- Oturum açmış öğrenci ilerlemesi bulutta kalıcı ve cihazlar arası kullanılabilirdir.
- Eski yerel ilerleme kayıpsız, tekrar çalıştırılabilir ve doğrulanabilir biçimde aktarılır.
- Birleştirme kuralları deterministik ve testlidir.
- Kullanıcı değişimi veri sızıntısı oluşturmaz.
- Dört dil ortak kanıt ağına doğru bağlam ve anlamla bağlıdır.
- AI Koç dil ilerlemesini güvenli özet ve kanıt üzerinden okuyabilir.
- Mevcut dil deneyimleri bozulmamıştır.
- Canlı şema veya veri izinsiz değiştirilmemiştir.

## Faz sonu

Dil bazlı envanteri, birleştirme kararlarını, migration durumunu, test matrisini ve aktarım kuru çalışma sayılarını MIMARI_KARARLAR.md ile FAZ_DURUMU.md içinde kanıt bağlantılarıyla güncelle.
